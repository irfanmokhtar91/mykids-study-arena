/**
 * Persistent storage for 3 kid profiles, scores, XP, badges, Parent PIN,
 * plus JSON Export/Import and File System Access API (OneDrive / Google Drive sync).
 */
(function (global) {
  const App = (global.App = global.App || {});
  const STORAGE_KEY = "mykids_study_arena_v1";

  App.AVATARS = ["🦊", "🐯", "🦁", "🐼", "🐨", "🐸", "🦄", "🦖", "🚀", "🎮", "⭐", "⚡"];

  const LEGACY_GUESSED_NAMES = new Set([
    "Adik (Darjah 6)",
    "Angah (Tingkatan 2)",
    "Along (Tingkatan 4)"
  ]);

  let fileHandle = null;

  function defaultState() {
    return {
      version: 1,
      parentPin: "1234",
      dlpEnabled: false,
      activeProfileId: "kid_d6",
      profiles: [
        {
          id: "kid_d6",
          name: "",
          gradeId: "d6",
          avatar: "🦊",
          xp: 0,
          streakBest: 0,
          history: [],
          setBest: {}
        },
        {
          id: "kid_t2",
          name: "",
          gradeId: "t2",
          avatar: "🚀",
          xp: 0,
          streakBest: 0,
          history: [],
          setBest: {}
        },
        {
          id: "kid_t4",
          name: "",
          gradeId: "t4",
          avatar: "⚡",
          xp: 0,
          streakBest: 0,
          history: [],
          setBest: {}
        }
      ]
    };
  }

  function stripLegacyNames(parsed) {
    let changed = false;
    if (parsed && Array.isArray(parsed.profiles)) {
      parsed.profiles.forEach((p) => {
        if (typeof p.name === "string" && LEGACY_GUESSED_NAMES.has(p.name.trim())) {
          p.name = "";
          changed = true;
        }
      });
    }
    return changed;
  }

  function load() {
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.profiles) || parsed.profiles.length === 0) {
        return defaultState();
      }
      if (stripLegacyNames(parsed)) {
        try {
          global.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        } catch (e) {
          // ignore storage write error during migration
        }
      }
      return parsed;
    } catch (e) {
      return defaultState();
    }
  }

  let state = load();

  async function syncToLinkedFile() {
    if (!fileHandle) return;
    try {
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(state, null, 2));
      await writable.close();
    } catch (e) {
      // Permission might have expired; ignore silently and keep localStorage safe
    }
  }

  function save() {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore quota error
    }
    syncToLinkedFile();
  }

  App.Storage = {
    getState: () => state,
    save,
    getActiveProfile: () =>
      state.profiles.find((p) => p.id === state.activeProfileId) || state.profiles[0],
    getDisplayName: (profile) => {
      const trimmed = profile && typeof profile.name === "string" ? profile.name.trim() : "";
      if (trimmed) return trimmed;
      const grade = App.GRADES && profile ? App.GRADES[profile.gradeId] : null;
      return grade ? grade.name : "Pelajar";
    },
    fmtScore: (n) => {
      const num = Number(n) || 0;
      const rounded = Math.round(num * 2) / 2;
      return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
    },
    setActiveProfile: (id) => {
      state.activeProfileId = id;
      save();
    },
    updateProfile: (id, patch) => {
      const p = state.profiles.find((x) => x.id === id);
      if (p) {
        Object.assign(p, patch);
        save();
      }
    },
    setDlpEnabled: (enabled) => {
      state.dlpEnabled = !!enabled;
      save();
    },
    setParentPin: (newPin) => {
      if (/^\d{4,6}$/.test(newPin)) {
        state.parentPin = newPin;
        save();
        return true;
      }
      return false;
    },
    verifyParentPin: (pin) => pin === state.parentPin,
    recordAttempt: (profileId, { gradeId, subjectId, chapterId, setNum, score, total, maxStreak, mode }) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p) return;
      const cleanScore = Math.round((Number(score) || 0) * 2) / 2;
      const pct = Math.round((cleanScore / total) * 100);
      const earnedXp = Math.round(cleanScore * 15) + (pct >= 80 ? 40 : 0) + maxStreak * 5;
      p.xp = (p.xp || 0) + earnedXp;
      if (maxStreak > (p.streakBest || 0)) p.streakBest = maxStreak;

      const key = `${subjectId}:${chapterId}:${setNum}`;
      const prev = p.setBest[key];
      p.setBest[key] = {
        bestScore: prev ? Math.max(prev.bestScore, cleanScore) : cleanScore,
        total,
        attempts: (prev ? prev.attempts : 0) + 1,
        lastPlayed: new Date().toISOString()
      };

      p.history = p.history || [];
      p.history.unshift({
        ts: new Date().toISOString(),
        gradeId,
        subjectId,
        chapterId,
        setNum,
        score: cleanScore,
        total,
        pct,
        mode,
        earnedXp
      });
      if (p.history.length > 150) p.history.length = 150;
      save();
      return { earnedXp, pct, score: cleanScore };
    },
    exportJson: () => JSON.stringify(state, null, 2),
    importJson: (text) => {
      const parsed = JSON.parse(text);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        throw new Error("Invalid backup file format.");
      }
      stripLegacyNames(parsed);
      state = parsed;
      save();
      return state;
    },
    supportsCloudFileSync: () => typeof global.showSaveFilePicker === "function",
    linkCloudFileSave: async () => {
      if (typeof global.showSaveFilePicker !== "function") {
        throw new Error("Browser does not support direct file linking. Use Export/Import JSON instead.");
      }
      fileHandle = await global.showSaveFilePicker({
        suggestedName: "mykids-study-scores.json",
        types: [{ description: "JSON Backup", accept: { "application/json": [".json"] } }]
      });
      await syncToLinkedFile();
      return fileHandle.name;
    },
    loadFromCloudFile: async () => {
      if (typeof global.showOpenFilePicker !== "function") {
        throw new Error("Browser does not support direct file opening. Use Import JSON instead.");
      }
      const [handle] = await global.showOpenFilePicker({
        types: [{ description: "JSON Backup", accept: { "application/json": [".json"] } }]
      });
      const file = await handle.getFile();
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        throw new Error("Selected file is not a valid Study Arena backup.");
      }
      stripLegacyNames(parsed);
      fileHandle = handle;
      state = parsed;
      save();
      return handle.name;
    },
    getLinkedFileName: () => (fileHandle ? fileHandle.name : null)
  };
})(window);
