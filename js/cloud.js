/**
 * Cloud link for the CHILD'S phone (Phase 2). Replaces the old v4 family-code sync.
 * - A parent links a child with an 8-character code / QR link (the parent signs in with Google in the parent app).
 * - The phone then syncs a snapshot of the child's data, uploads compressed answer photos, and pulls the parent's marks.
 * Nothing is sent until a parent has linked the child. Names, grade, results, tasks and answer photos are what leave the phone.
 */
(function (global) {
  const App = (global.App = global.App || {});
  const KEY = "mykids_cloud_v2";
  const MAX_SNAPSHOT_BYTES = 800 * 1024;

  let syncing = false;
  let timer = null;
  const hashes = {};

  function loadAll() {
    try {
      return JSON.parse(global.localStorage.getItem(KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function saveAll(map) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(map));
    } catch (e) {
      /* ignore */
    }
  }
  const getLink = (profileId) => loadAll()[profileId] || null;
  function setLink(profileId, patch) {
    const all = loadAll();
    all[profileId] = { ...(all[profileId] || {}), ...patch };
    saveAll(all);
    return all[profileId];
  }
  function unlink(profileId) {
    const all = loadAll();
    delete all[profileId];
    saveAll(all);
  }

  const apiUrl = () => (App.getCloudApiUrl ? App.getCloudApiUrl() : "");
  const isConfigured = () => !!apiUrl();

  async function api(path, { method = "GET", body, headers = {}, raw } = {}) {
    const base = apiUrl();
    if (!base) throw new Error("Pelayan belum disambungkan");
    const h = { ...headers };
    let payload;
    if (raw !== undefined) payload = raw;
    else if (body !== undefined) {
      h["content-type"] = "application/json";
      payload = JSON.stringify(body);
    }
    let res;
    try {
      res = await global.fetch(base + path, { method, headers: h, body: payload });
    } catch (e) {
      throw new Error("Tiada sambungan internet");
    }
    let data = null;
    try {
      data = await res.json();
    } catch (e) {
      data = null;
    }
    if (!res.ok) throw Object.assign(new Error((data && data.error) || `Ralat ${res.status}`), { status: res.status });
    return data;
  }

  const parentPageUrl = () => new URL("parent/", global.location.href.split("?")[0].replace(/[^/]*$/, "")).href;
  const pairUrl = (code) => `${parentPageUrl()}?pair=${encodeURIComponent(code)}`;

  /** Create a pairing code for a profile. `again` = add another parent to an already linked child. */
  async function startPair(profile) {
    const link = getLink(profile.id);
    const body = { displayName: App.Storage.getDisplayName(profile), gradeId: profile.gradeId };
    if (link && link.childId && link.deviceToken) {
      body.childId = link.childId;
      body.deviceToken = link.deviceToken;
    }
    const pair = await api("/api/pair/start", { method: "POST", body });
    return { ...pair, url: pairUrl(pair.code), existing: !!body.childId };
  }

  /** Poll until a parent claims the code. Resolves {linked:true} | {expired:true} | {cancelled:true}. */
  function waitForClaim(profile, pair, { onTick, cancelled } = {}) {
    return new Promise((resolve) => {
      const tick = async () => {
        if (cancelled && cancelled()) return resolve({ cancelled: true });
        if (Date.now() > pair.expiresAt + 5000) return resolve({ expired: true });
        try {
          const s = await api("/api/pair/status", { method: "POST", body: { code: pair.code, pairSecret: pair.pairSecret } });
          if (s.linked) {
            const patch = { childId: s.childId };
            if (s.deviceToken) Object.assign(patch, { deviceToken: s.deviceToken, marksSince: 0, uploaded: [], linkedAt: Date.now() });
            setLink(profile.id, patch);
            return resolve({ linked: true });
          }
          if (s.expired) return resolve({ expired: true });
        } catch (e) {
          /* transient: keep polling */
        }
        if (onTick) onTick();
        global.setTimeout(tick, 3000);
      };
      tick();
    });
  }

  function shrinkSnapshot(profile) {
    const p = JSON.parse(JSON.stringify(profile));
    p.history = (p.history || []).map((h, i) => {
      if (i >= 20) delete h.questionLogs;
      return h;
    });
    p.mistakeLog = (p.mistakeLog || []).slice(0, 100);
    let size = JSON.stringify(p).length;
    if (size > MAX_SNAPSHOT_BYTES) {
      (p.mockResults || []).forEach((r, i) => {
        if (i >= 5) delete r.typed;
      });
      p.history.forEach((h) => delete h.questionLogs);
      size = JSON.stringify(p).length;
    }
    if (size > MAX_SNAPSHOT_BYTES) p.mistakeLog = [];
    return p;
  }

  const simpleHash = (s) => {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return `${s.length}:${h}`;
  };

  function photoIds(profile) {
    const ids = [];
    (profile.mockResults || []).forEach((r) => Object.values(r.photos || {}).forEach((byPart) => Object.values(byPart).forEach((a) => ids.push(...a))));
    return ids;
  }

  /** One full round trip for one linked profile. Never throws: returns {ok, error?, marksApplied, photosUploaded}. */
  async function syncProfile(profileId) {
    const profile = (App.Storage.getState().profiles || []).find((p) => p.id === profileId);
    const link = getLink(profileId);
    if (!profile || !link || !link.childId || !link.deviceToken) return { ok: false, error: "Belum dihubungkan" };
    try {
      const snap = shrinkSnapshot(profile);
      const h = simpleHash(JSON.stringify(snap));
      const body = { childId: link.childId, deviceToken: link.deviceToken, marksSince: link.marksSince || 0 };
      if (hashes[profileId] !== h) Object.assign(body, { displayName: App.Storage.getDisplayName(profile), gradeId: profile.gradeId, snapshot: { profile: snap, schema: 5 } });
      const res = await api("/api/child/sync", { method: "POST", body });
      hashes[profileId] = h;

      // upload answer photos that the server does not have yet (a few per round trip)
      let photosUploaded = 0;
      const uploaded = new Set(link.uploaded || []);
      const todo = photoIds(profile).filter((id) => !uploaded.has(id)).slice(0, 8);
      for (const id of todo) {
        const rec = App.PhotoStore ? await App.PhotoStore.get(id) : null;
        if (!rec || !rec.blob) {
          uploaded.add(id); // photo no longer on this phone: do not retry forever
          continue;
        }
        try {
          await api(`/api/child/photo?childId=${encodeURIComponent(link.childId)}&photoId=${encodeURIComponent(id)}`, { method: "PUT", raw: rec.blob, headers: { "x-device-token": link.deviceToken } });
          uploaded.add(id);
          photosUploaded++;
        } catch (e) {
          if (e.status === 413 || e.status === 415) uploaded.add(id); // permanent refusal
        }
      }

      // apply the parent's marks
      let marksApplied = 0;
      let newest = link.marksSince || 0;
      for (const m of res.marks || []) {
        const fresh = (App.Storage.getState().profiles || []).find((p) => p.id === profileId);
        const rec = fresh && (fresh.mockResults || []).find((r) => r.ts === m.recordTs);
        if (rec) {
          App.Storage.updateMockResult(profileId, rec.ts, App.MockExam.rescoreRecord(rec, m.parentMarks));
          marksApplied++;
        }
        newest = Math.max(newest, m.updatedAt || 0);
      }
      if (marksApplied && App.Storage.refreshTasks) App.Storage.refreshTasks(profileId);
      setLink(profileId, { marksSince: newest, uploaded: Array.from(uploaded).slice(-500), lastSyncAt: Date.now(), lastError: "" });
      return { ok: true, marksApplied, photosUploaded };
    } catch (e) {
      if (e.status === 403) setLink(profileId, { lastError: "Sambungan tidak sah. Hubungkan semula." });
      else setLink(profileId, { lastError: e.message });
      return { ok: false, error: e.message };
    }
  }

  async function syncAll() {
    if (syncing || !isConfigured() || (global.navigator && global.navigator.onLine === false)) return [];
    syncing = true;
    const out = [];
    try {
      const all = loadAll();
      for (const pid of Object.keys(all)) out.push({ profileId: pid, ...(await syncProfile(pid)) });
    } finally {
      syncing = false;
    }
    return out;
  }

  /** Debounced background sync after the child's data changes. */
  function scheduleSync() {
    if (syncing || !isConfigured() || !Object.keys(loadAll()).length) return;
    if (timer) global.clearTimeout(timer);
    timer = global.setTimeout(() => {
      timer = null;
      syncAll();
    }, 6000);
  }

  function qrSvg(text) {
    if (typeof global.qrcode !== "function") return "";
    const qr = global.qrcode(0, "M");
    qr.addData(text);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 3, scalable: true });
  }

  App.Cloud = { isConfigured, getLink, unlink, startPair, waitForClaim, syncProfile, syncAll, scheduleSync, qrSvg, pairUrl };

  // Compatibility shim: the removed v4 family-code client. Keeps old UI branches inert.
  App.CloudSync = {
    getStatus: () => ({ configured: false, linked: false, code: "" }),
    isLinked: () => false,
    syncNow: async () => ({ ok: false }),
    updateRemotePin: async () => {},
    disconnect: () => {}
  };

  if (App.Storage && typeof App.Storage.setOnSaveListener === "function") App.Storage.setOnSaveListener(() => scheduleSync());
})(window);
