/**
 * Optional Student Google Sign-In & Cloud Sync (v5):
 * - Kids can optionally sign in with their own Google account OR a parent's Google account
 *   to back up & sync profiles/progress/photos across devices.
 * - Strictly uses student-scoped tokens (`scope: "student"`): signing in here never exposes the Parent App.
 * - When signed in with the same Google account used in the Parent App, children auto-link seamlessly.
 */
(function (global) {
  const App = (global.App = global.App || {});
  const SESSION_KEY = "mykids_student_google_v1";
  const MAX_BACKUP_BYTES = 800 * 1024;

  let syncing = false;
  let timer = null;

  function loadSession() {
    try {
      const parsed = JSON.parse(global.localStorage.getItem(SESSION_KEY) || "null");
      return parsed && parsed.token ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function saveSession(sess) {
    try {
      if (sess && sess.token) {
        global.localStorage.setItem(SESSION_KEY, JSON.stringify(sess));
      } else {
        global.localStorage.removeItem(SESSION_KEY);
      }
    } catch (e) {
      /* ignore localStorage quota error */
    }
  }

  const apiUrl = () => (App.getCloudApiUrl ? App.getCloudApiUrl() : "");
  const isConfigured = () => !!(apiUrl() && App.GOOGLE_CLIENT_ID);
  const getSession = () => loadSession();
  const isSignedIn = () => !!loadSession();

  function signOut() {
    if (timer) {
      global.clearTimeout(timer);
      timer = null;
    }
    saveSession(null);
  }

  async function api(path, { method = "GET", body, headers = {}, raw, auth = true } = {}) {
    const base = apiUrl();
    if (!base) throw new Error("Pelayan belum disambungkan");
    const sess = loadSession();
    const h = { ...headers };
    if (auth && sess && sess.token) {
      h.authorization = `Bearer ${sess.token}`;
    }
    let payload;
    if (raw !== undefined) {
      payload = raw;
    } else if (body !== undefined) {
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
    if (res.status === 401 && auth && sess) {
      saveSession(null);
    }
    if (!res.ok) {
      throw Object.assign(new Error((data && data.error) || `Ralat ${res.status}`), { status: res.status });
    }
    return data;
  }

  function shrinkProfile(profile) {
    const p = JSON.parse(JSON.stringify(profile));
    p.history = (p.history || []).map((h, i) => {
      if (i >= 20) delete h.questionLogs;
      return h;
    });
    p.mistakeLog = (p.mistakeLog || []).slice(0, 100);
    if (Array.isArray(p.mockResults)) {
      p.mockResults.forEach((r, i) => {
        if (i >= 10) delete r.typed;
      });
    }
    if (Array.isArray(p.diagnosticSessions)) p.diagnosticSessions = p.diagnosticSessions.slice(0, 20);
    if (Array.isArray(p.diagnosticAttempts)) p.diagnosticAttempts = p.diagnosticAttempts.slice(-300);
    return p;
  }

  function buildBackupPayload(profiles) {
    const shrunk = (profiles || []).slice(0, 12).map(shrinkProfile);
    let backup = { version: 5, profiles: shrunk };
    if (JSON.stringify(backup).length > MAX_BACKUP_BYTES) {
      shrunk.forEach((p) => {
        (p.mockResults || []).forEach((r, i) => {
          if (i >= 3) delete r.typed;
        });
        (p.history || []).forEach((h) => delete h.questionLogs);
      });
    }
    if (JSON.stringify(backup).length > MAX_BACKUP_BYTES) {
      shrunk.forEach((p) => {
        p.mistakeLog = [];
      });
    }
    if (JSON.stringify(backup).length > MAX_BACKUP_BYTES) {
      shrunk.forEach((p) => {
        p.diagnosticAttempts = [];
      });
    }
    return backup;
  }

  function photoIds(profile) {
    const ids = [];
    (profile.mockResults || []).forEach((r) =>
      Object.values(r.photos || {}).forEach((byPart) => Object.values(byPart).forEach((arr) => ids.push(...arr)))
    );
    return ids;
  }

  async function syncNow({ pullFirst = false } = {}) {
    if (syncing || !isConfigured() || (global.navigator && global.navigator.onLine === false)) {
      return { ok: false, skipped: true };
    }
    const sess = loadSession();
    if (!sess) return { ok: false, error: "Belum log masuk" };
    syncing = true;
    try {
      let mergedRemote = false;
      if (pullFirst || !sess.lastSyncAt) {
        const pulled = await api("/api/student/sync", { method: "GET" });
        if (pulled && pulled.backup && Array.isArray(pulled.backup.profiles) && pulled.backup.profiles.length > 0) {
          App.Storage.mergeBackup(pulled.backup, { skipCloudPush: true });
          mergedRemote = true;
        }
      }

      const profiles = App.Storage.getState().profiles || [];
      const backup = buildBackupPayload(profiles);
      const qrLinks = {};
      profiles.forEach((p) => {
        const lk = App.Cloud && App.Cloud.getLink ? App.Cloud.getLink(p.id) : null;
        if (lk && lk.childId && lk.deviceToken) {
          qrLinks[p.id] = { childId: lk.childId, deviceToken: lk.deviceToken };
        }
      });

      const res = await api("/api/student/sync", {
        method: "POST",
        body: { backup, qrLinks, marksSince: sess.marksSince || 0 }
      });

      let marksApplied = 0;
      let newest = sess.marksSince || 0;
      const marksByProfile = res.marksByProfile || {};
      for (const pid of Object.keys(marksByProfile)) {
        const fresh = (App.Storage.getState().profiles || []).find((x) => x.id === pid);
        if (!fresh) continue;
        for (const m of marksByProfile[pid]) {
          const rec = (fresh.mockResults || []).find((r) => r.ts === m.recordTs);
          if (rec && App.MockExam && App.MockExam.rescoreRecord) {
            App.Storage.updateMockResult(pid, rec.ts, App.MockExam.rescoreRecord(rec, m.parentMarks));
            marksApplied++;
          }
          newest = Math.max(newest, m.updatedAt || 0);
        }
        if (App.Storage.refreshTasks) App.Storage.refreshTasks(pid);
      }

      let photosUploaded = 0;
      const uploaded = new Set(sess.uploaded || []);
      const childIdsByProfile = res.childIdsByProfile || {};
      for (const p of profiles) {
        if (photosUploaded >= 8 || !childIdsByProfile[p.id]) continue;
        const todo = photoIds(p).filter((id) => !uploaded.has(id)).slice(0, 8 - photosUploaded);
        for (const id of todo) {
          const rec = App.PhotoStore ? await App.PhotoStore.get(id) : null;
          if (!rec || !rec.blob) {
            uploaded.add(id);
            continue;
          }
          try {
            await api(
              `/api/student/photo?profileId=${encodeURIComponent(p.id)}&photoId=${encodeURIComponent(id)}`,
              { method: "PUT", raw: rec.blob }
            );
            uploaded.add(id);
            photosUploaded++;
          } catch (e) {
            if (e.status === 413 || e.status === 415) uploaded.add(id);
          }
        }
      }

      const latestSess = loadSession() || sess;
      saveSession({
        ...latestSess,
        lastSyncAt: Date.now(),
        marksSince: newest,
        uploaded: Array.from(uploaded).slice(-500),
        lastError: ""
      });
      return { ok: true, mergedRemote, marksApplied, photosUploaded };
    } catch (e) {
      const latestSess = loadSession();
      if (latestSess) {
        saveSession({ ...latestSess, lastError: e.message });
      }
      return { ok: false, error: e.message };
    } finally {
      syncing = false;
    }
  }

  async function signInWithIdToken(idToken) {
    const r = await api("/api/student/auth/google", {
      method: "POST",
      body: { idToken },
      auth: false
    });
    saveSession({
      token: r.session,
      email: r.account.email,
      name: r.account.name,
      lastSyncAt: 0,
      marksSince: 0,
      uploaded: [],
      lastError: ""
    });
    const sync = await syncNow({ pullFirst: true });
    return { ok: true, account: r.account, sync };
  }

  function renderButton(container, { onSignedIn, onError } = {}) {
    if (!container || !isConfigured()) return;
    const tryInit = () => {
      if (!global.google || !global.google.accounts || !global.google.accounts.id || !App.GOOGLE_CLIENT_ID) {
        return false;
      }
      if (!container.isConnected) return true;
      container.innerHTML = "";
      global.google.accounts.id.initialize({
        client_id: App.GOOGLE_CLIENT_ID,
        callback: async (resp) => {
          try {
            const res = await signInWithIdToken(resp.credential);
            if (typeof onSignedIn === "function") onSignedIn(res);
          } catch (e) {
            if (typeof onError === "function") onError(e);
          }
        }
      });
      global.google.accounts.id.renderButton(container, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "pill"
      });
      return true;
    };

    if (!tryInit()) {
      let tries = 0;
      const poll = global.setInterval(() => {
        if (tryInit()) {
          global.clearInterval(poll);
        } else if (++tries >= 24) {
          global.clearInterval(poll);
          if (container.isConnected) {
            container.innerHTML = `<small class="sg-offline-note">Log masuk Google memerlukan internet. Kamu masih boleh belajar secara luar talian.</small>`;
          }
        }
      }, 250);
    }
  }

  function scheduleSync() {
    if (syncing || !isConfigured() || !isSignedIn()) return;
    if (timer) global.clearTimeout(timer);
    timer = global.setTimeout(() => {
      timer = null;
      syncNow();
    }, 6000);
  }

  if (App.Storage && typeof App.Storage.addOnSaveListener === "function") {
    App.Storage.addOnSaveListener(() => scheduleSync());
  }

  global.__studentSignInWithIdToken = signInWithIdToken;

  App.StudentAuth = {
    isConfigured,
    getSession,
    isSignedIn,
    signOut,
    signInWithIdToken,
    renderButton,
    syncNow,
    scheduleSync
  };
})(window);
