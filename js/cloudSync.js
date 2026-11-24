/**
 * Offline-First Online Family Sync Client
 * Synchronizes all kids' accounts, setBest scores, history, and mistake logs
 * with the Cloudflare Workers + D1 family endpoint when configured and linked.
 */
(function (global) {
  const App = (global.App = global.App || {});

  let syncing = false;
  let lastError = "";
  let syncTimer = null;

  function isConfigured() {
    return typeof App.getCloudApiUrl === "function" && !!App.getCloudApiUrl();
  }

  function isLinked() {
    const fs = App.Storage && App.Storage.getFamilySync ? App.Storage.getFamilySync() : null;
    return !!(fs && fs.code && fs.syncToken);
  }

  async function postJson(path, body) {
    const base = App.getCloudApiUrl();
    if (!base) throw new Error("Pelayan dalam talian belum dikonfigurasi.");
    const res = await global.fetch(`${base}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body || {})
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      throw new Error(data.error || `Ralat pelayan (${res.status})`);
    }
    return data;
  }

  function buildShareStatePayload() {
    const st = App.Storage.getState();
    return {
      version: 4,
      dlpEnabled: !!st.dlpEnabled,
      profiles: st.profiles || [],
      deletedProfileIds: st.deletedProfileIds || []
    };
  }

  async function createFamily(pin) {
    syncing = true;
    lastError = "";
    try {
      const data = await postJson("/api/family/create", {
        pin: String(pin || "").trim(),
        payload: buildShareStatePayload()
      });
      App.Storage.setFamilySync({
        code: data.familyCode,
        syncToken: data.syncToken,
        lastSyncedAt: data.updatedAt,
        pendingSync: false
      });
      return { ok: true, familyCode: data.familyCode, updatedAt: data.updatedAt };
    } catch (err) {
      lastError = err.message;
      throw err;
    } finally {
      syncing = false;
    }
  }

  async function joinFamily(code, pin) {
    const cleanCode = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "").trim();
    const cleanPin = String(pin || "").trim();
    syncing = true;
    lastError = "";
    try {
      const pulled = await postJson("/api/family/pull", {
        familyCode: cleanCode,
        pin: cleanPin
      });
      App.Storage.mergeBackup(pulled.state, { skipCloudPush: true });
      App.Storage.setFamilySync({
        code: pulled.familyCode,
        syncToken: pulled.syncToken,
        lastSyncedAt: pulled.updatedAt,
        pendingSync: false
      });
      // Push local profiles/records back up so both phones converge cleanly
      const pushed = await postJson("/api/family/push", {
        familyCode: pulled.familyCode,
        syncToken: pulled.syncToken,
        payload: buildShareStatePayload()
      });
      const summary = App.Storage.mergeBackup(pushed.state, { skipCloudPush: true });
      App.Storage.setFamilySync({
        lastSyncedAt: pushed.updatedAt,
        pendingSync: false
      });
      return { ok: true, familyCode: pulled.familyCode, updatedAt: pushed.updatedAt, ...summary };
    } catch (err) {
      lastError = err.message;
      throw err;
    } finally {
      syncing = false;
    }
  }

  async function syncNow() {
    if (!isConfigured() || !isLinked()) {
      return { ok: false, skipped: true };
    }
    if (syncing) {
      return { ok: false, busy: true };
    }
    const fs = App.Storage.getFamilySync();
    syncing = true;
    lastError = "";
    try {
      const data = await postJson("/api/family/push", {
        familyCode: fs.code,
        syncToken: fs.syncToken,
        payload: buildShareStatePayload()
      });
      const summary = App.Storage.mergeBackup(data.state, { skipCloudPush: true });
      App.Storage.setFamilySync({
        lastSyncedAt: data.updatedAt,
        pendingSync: false
      });
      return { ok: true, updatedAt: data.updatedAt, ...summary };
    } catch (err) {
      lastError = err.message;
      App.Storage.setFamilySync({ pendingSync: true });
      return { ok: false, error: err.message };
    } finally {
      syncing = false;
    }
  }

  async function updateRemotePin(oldPin, newPin) {
    if (!isConfigured() || !isLinked()) {
      return { ok: true, localOnly: true };
    }
    const fs = App.Storage.getFamilySync();
    return postJson("/api/family/pin", {
      familyCode: fs.code,
      oldPin: String(oldPin || "").trim(),
      newPin: String(newPin || "").trim()
    });
  }

  function disconnect() {
    if (syncTimer) {
      clearTimeout(syncTimer);
      syncTimer = null;
    }
    App.Storage.clearFamilySync();
    lastError = "";
  }

  function scheduleBackgroundSync() {
    if (!isConfigured() || !isLinked()) return;
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      syncTimer = null;
      syncNow().catch(() => {});
    }, 600);
  }

  if (App.Storage && App.Storage.setOnSaveListener) {
    App.Storage.setOnSaveListener(() => {
      scheduleBackgroundSync();
    });
  }

  if (typeof global.addEventListener === "function") {
    global.addEventListener("online", () => {
      const fs = App.Storage && App.Storage.getFamilySync ? App.Storage.getFamilySync() : null;
      if (fs && fs.pendingSync) {
        syncNow().catch(() => {});
      }
    });
  }

  App.CloudSync = {
    isConfigured,
    isLinked,
    getStatus: () => {
      const fs = App.Storage.getFamilySync();
      return {
        configured: isConfigured(),
        linked: isLinked(),
        code: fs.code || "",
        lastSyncedAt: fs.lastSyncedAt || null,
        pendingSync: !!fs.pendingSync,
        syncing,
        lastError
      };
    },
    createFamily,
    joinFamily,
    syncNow,
    updateRemotePin,
    disconnect,
    scheduleBackgroundSync
  };
})(window);
