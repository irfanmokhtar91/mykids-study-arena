/**
 * Persistent storage for 3 kid profiles, scores, separate 10s speed bonuses,
 * full question/mistake logs, Parent PIN, AI Prompt Generator,
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

  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let fileHandle = null;

  function fmtDate(iso) {
    const d = iso ? new Date(iso) : new Date();
    if (isNaN(d.getTime())) return "-";
    const dd = String(d.getDate()).padStart(2, "0");
    const mon = MONTHS_EN[d.getMonth()];
    const yyyy = d.getFullYear();
    return `${dd}/${mon}/${yyyy}`;
  }

  function defaultState() {
    return {
      version: 2,
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
          totalSpeedBonus: 0,
          history: [],
          mistakeLog: [],
          setBest: {}
        },
        {
          id: "kid_t2",
          name: "",
          gradeId: "t2",
          avatar: "🚀",
          xp: 0,
          streakBest: 0,
          totalSpeedBonus: 0,
          history: [],
          mistakeLog: [],
          setBest: {}
        },
        {
          id: "kid_t4",
          name: "",
          gradeId: "t4",
          avatar: "⚡",
          xp: 0,
          streakBest: 0,
          totalSpeedBonus: 0,
          history: [],
          mistakeLog: [],
          setBest: {}
        }
      ]
    };
  }

  function normalizeProfiles(parsed) {
    let changed = false;
    if (parsed && Array.isArray(parsed.profiles)) {
      parsed.profiles.forEach((p) => {
        if (typeof p.name === "string" && LEGACY_GUESSED_NAMES.has(p.name.trim())) {
          p.name = "";
          changed = true;
        }
        if (typeof p.totalSpeedBonus !== "number") {
          p.totalSpeedBonus = 0;
          changed = true;
        }
        if (!Array.isArray(p.mistakeLog)) {
          p.mistakeLog = [];
          changed = true;
        }
        if (!Array.isArray(p.history)) {
          p.history = [];
          changed = true;
        }
        if (!p.setBest || typeof p.setBest !== "object") {
          p.setBest = {};
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
      if (normalizeProfiles(parsed)) {
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

  function getDisplayName(profile) {
    const trimmed = profile && typeof profile.name === "string" ? profile.name.trim() : "";
    if (trimmed) return trimmed;
    const grade = App.GRADES && profile ? App.GRADES[profile.gradeId] : null;
    return grade ? grade.name : "Pelajar";
  }

  function lookupChapterInfo(gradeId, subjectId, chapterId) {
    const grade = App.GRADES && App.GRADES[gradeId];
    const subj = grade && grade.subjects ? grade.subjects.find((s) => s.id === subjectId) : null;
    const ch = subj && subj.chapters ? subj.chapters.find((c) => c.id === chapterId) : null;
    return {
      subjectName: subj ? subj.name : subjectId.toUpperCase(),
      chapterTitle: ch ? ch.title : chapterId
    };
  }

  function getFocusReport(profile) {
    const history = Array.isArray(profile.history) ? profile.history : [];
    const mistakeLog = Array.isArray(profile.mistakeLog) ? profile.mistakeLog : [];
    const totalAttempts = history.length;

    let totalCorrect = 0;
    let totalQuestions = 0;
    const chapterStats = {};

    history.forEach((h) => {
      totalCorrect += Number(h.score) || 0;
      totalQuestions += Number(h.total) || 0;
      const chKey = `${h.subjectId}:${h.chapterId}`;
      if (!chapterStats[chKey]) {
        const info = lookupChapterInfo(profile.gradeId, h.subjectId, h.chapterId);
        chapterStats[chKey] = {
          subjectId: h.subjectId,
          subjectName: h.subjectName || info.subjectName,
          chapterId: h.chapterId,
          chapterTitle: h.chapterTitle || info.chapterTitle,
          sumScore: 0,
          sumTotal: 0,
          attempts: 0,
          mistakeCount: 0,
          sumSec: 0,
          secCount: 0
        };
      }
      const st = chapterStats[chKey];
      st.sumScore += Number(h.score) || 0;
      st.sumTotal += Number(h.total) || 0;
      st.attempts++;
      if (Array.isArray(h.questionLogs)) {
        h.questionLogs.forEach((ql) => {
          if (typeof ql.elapsedSec === "number") {
            st.sumSec += ql.elapsedSec;
            st.secCount++;
          }
        });
      }
    });

    mistakeLog.forEach((m) => {
      const chKey = `${m.subjectId}:${m.chapterId}`;
      if (!chapterStats[chKey]) {
        const info = lookupChapterInfo(profile.gradeId, m.subjectId, m.chapterId);
        chapterStats[chKey] = {
          subjectId: m.subjectId,
          subjectName: m.subjectName || info.subjectName,
          chapterId: m.chapterId,
          chapterTitle: m.chapterTitle || info.chapterTitle,
          sumScore: 0,
          sumTotal: 0,
          attempts: 0,
          mistakeCount: 0,
          sumSec: 0,
          secCount: 0
        };
      }
      chapterStats[chKey].mistakeCount++;
    });

    const avgPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    const allChapters = Object.values(chapterStats).map((c) => ({
      ...c,
      avgPct: c.sumTotal > 0 ? Math.round((c.sumScore / c.sumTotal) * 100) : 0,
      avgSec: c.secCount > 0 ? Math.round((c.sumSec / c.secCount) * 10) / 10 : null
    }));

    const weakChapters = allChapters
      .filter((c) => c.avgPct < 80 || c.mistakeCount > 0)
      .sort((a, b) => a.avgPct - b.avgPct || b.mistakeCount - a.mistakeCount)
      .slice(0, 6);

    return {
      totalAttempts,
      avgPct,
      totalCorrect,
      totalQuestions,
      totalSpeedBonus: Number(profile.totalSpeedBonus) || 0,
      weakChapters,
      recentMistakes: mistakeLog.slice(0, 15)
    };
  }

  function buildKidSection(profile) {
    const grade = App.GRADES && App.GRADES[profile.gradeId];
    const displayName = getDisplayName(profile);
    const report = getFocusReport(profile);

    const lines = [
      `## Pelajar: ${displayName} (${grade ? `${grade.name} — ${grade.subtitle}` : profile.gradeId})`,
      `- Rekod Latihan: ${report.totalAttempts} set selesai (${report.totalCorrect}/${report.totalQuestions} tepat, Purata Ketepatan: ${report.avgPct}%)`,
      `- Bonus Pantas (<=10s, kiraan berasingan): ${report.totalSpeedBonus} soalan`,
      ""
    ];

    if (report.weakChapters.length > 0) {
      lines.push("### Bab Keutamaan Yang Perlu Diperbaiki:");
      report.weakChapters.forEach((w, i) => {
        const timeStr = w.avgSec !== null ? `, purata masa ${w.avgSec}s/soalan` : "";
        lines.push(`${i + 1}. **${w.subjectName} — ${w.chapterTitle}**: Ketepatan ${w.avgPct}%, ${w.mistakeCount} kesilapan direkod${timeStr}`);
      });
    } else {
      lines.push("### Bab Keutamaan: Tiada rekod lemah lagi (teruskan latihan atau tingkatkan cabaran).");
    }

    lines.push("");
    if (report.recentMistakes.length > 0) {
      lines.push("### Log Kesilapan Sebenar (Untuk Dibetulkan):");
      report.recentMistakes.forEach((m, i) => {
        lines.push(
          `${i + 1}. [${fmtDate(m.ts)} | ${m.subjectName} — ${m.chapterTitle}]`,
          `   - Soalan: ${m.q}`,
          `   - Jawapan salah dipilih: "${m.chosen}"`,
          `   - Jawapan tepat: "${m.correct}"`,
          `   - Penerangan: ${m.explanation}`
        );
      });
    } else {
      lines.push("### Log Kesilapan Sebenar: Belum ada kesilapan direkodkan.");
    }

    return lines.join("\n");
  }

  function buildAiPromptForKid(profile) {
    const today = fmtDate(new Date().toISOString());
    const displayName = getDisplayName(profile);
    return [
      `# Permintaan Projek Mini-App Latihan Interaktif (${today})`,
      "",
      `Sila reka dan bina satu **aplikasi permainan HTML5 Canvas interaktif** (bukan kuiz objektif A/B/C/D statik, mesra telefon & PC, sifar kesilapan fakta) khusus untuk membantu **${displayName}** menguasai topik lemah berdasarkan data prestasi sebenar di bawah (Silibus KSSR Semakan / KSSM Malaysia 2027).`,
      "",
      buildKidSection(profile),
      "",
      "## Keperluan Aplikasi Seterusnya:",
      "1. Fokuskan aktiviti permainan (contoh: seret & padan, bina langkah pengiraan, simulasi makmal/garis masa, atau penembak sasaran konsep) tepat pada bab keutamaan & jenis kesilapan di atas.",
      "2. Apabila anak tersilap, terangkan secara jelas **mengapa jawapan itu salah** dan **langkah mudah untuk memahaminya** sebelum cuba semula.",
      "3. Gunakan pengiraan deterministik / semakan jawapan yang disahkan 100% tepat tanpa tekaan.",
      "4. Paparkan markah ketepatan (1 markah setiap jawapan tepat) dan kiraan bonus pantas (<=10 saat) secara berasingan, serta log keputusan."
    ].join("\n");
  }

  function buildAiPromptAllKids() {
    const today = fmtDate(new Date().toISOString());
    const sections = state.profiles.map((p) => buildKidSection(p)).join("\n\n---\n\n");
    return [
      `# Permintaan Projek Aplikasi Pemulihan Interaktif Keluarga (${today})`,
      "",
      "Sila bantu rancang dan bina aplikasi/modul permainan HTML5 interaktif baharu (bukan soalan A/B/C/D statik, sifar kesilapan jawapan, mesra telefon & PC) untuk membaiki kelemahan ketiga-tiga anak berdasarkan log sebenar di bawah (Silibus Malaysia 2027):",
      "",
      sections,
      "",
      "## Keperluan Aplikasi Seterusnya:",
      "1. Cadangkan 1 permainan interaktif khusus bagi setiap anak yang menyasarkan bab terlemah dan corak kesilapan mereka di atas.",
      "2. Setiap kali berlaku kesilapan, beri bimbingan langkah demi langkah supaya anak faham punca salahnya, bukan sekadar menghafal jawapan.",
      "3. Sahkan semua jawapan dan formula secara ketat (0% ralat kunci jawapan)."
    ].join("\n");
  }

  App.Storage = {
    getState: () => state,
    save,
    fmtDate,
    getActiveProfile: () =>
      state.profiles.find((p) => p.id === state.activeProfileId) || state.profiles[0],
    getDisplayName,
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
    recordAttempt: (
      profileId,
      { gradeId, subjectId, subjectName, chapterId, chapterTitle, setNum, score, total, speedBonus, maxStreak, mode, answers }
    ) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p) return;
      if (typeof p.totalSpeedBonus !== "number") p.totalSpeedBonus = 0;
      if (!Array.isArray(p.mistakeLog)) p.mistakeLog = [];
      if (!Array.isArray(p.history)) p.history = [];
      if (!p.setBest) p.setBest = {};

      const cleanScore = Math.max(0, Math.round(Number(score) || 0));
      const bonus = Math.max(0, Math.round(Number(speedBonus) || 0));
      const pct = total > 0 ? Math.round((cleanScore / total) * 100) : 0;
      const earnedXp = cleanScore * 15 + bonus * 5 + (pct >= 80 ? 40 : 0) + maxStreak * 5;

      p.xp = (p.xp || 0) + earnedXp;
      p.totalSpeedBonus += bonus;
      if (maxStreak > (p.streakBest || 0)) p.streakBest = maxStreak;

      const info = lookupChapterInfo(gradeId, subjectId, chapterId);
      const sName = subjectName || info.subjectName;
      const cTitle = chapterTitle || info.chapterTitle;
      const nowIso = new Date().toISOString();

      const key = `${subjectId}:${chapterId}:${setNum}`;
      const prev = p.setBest[key];
      p.setBest[key] = {
        bestScore: prev ? Math.max(prev.bestScore, cleanScore) : cleanScore,
        bestBonus: prev ? Math.max(prev.bestBonus || 0, bonus) : bonus,
        total,
        attempts: (prev ? prev.attempts : 0) + 1,
        lastPlayed: nowIso
      };

      const questionLogs = Array.isArray(answers)
        ? answers.map((a) => ({
            q: a.qObj.q,
            chosen: a.qObj.options[a.selectedIndex] || "",
            correct: a.qObj.options[a.qObj.correctIndex] || "",
            isCorrect: !!a.isCorrect,
            gotBonus: !!a.gotBonus,
            elapsedSec: Math.round((Number(a.elapsedSec) || 0) * 10) / 10
          }))
        : [];

      p.history.unshift({
        ts: nowIso,
        gradeId,
        subjectId,
        subjectName: sName,
        chapterId,
        chapterTitle: cTitle,
        setNum,
        score: cleanScore,
        total,
        speedBonus: bonus,
        pct,
        mode,
        earnedXp,
        questionLogs
      });

      if (p.history.length > 80) {
        for (let i = 80; i < p.history.length; i++) {
          delete p.history[i].questionLogs;
        }
      }
      if (p.history.length > 150) p.history.length = 150;

      if (Array.isArray(answers)) {
        for (let i = answers.length - 1; i >= 0; i--) {
          const a = answers[i];
          if (!a.isCorrect) {
            p.mistakeLog.unshift({
              ts: nowIso,
              gradeId,
              subjectId,
              subjectName: sName,
              chapterId,
              chapterTitle: cTitle,
              setNum,
              q: a.qObj.q,
              chosen: a.qObj.options[a.selectedIndex] || "",
              correct: a.qObj.options[a.qObj.correctIndex] || "",
              explanation: a.qObj.explanation || "",
              elapsedSec: Math.round((Number(a.elapsedSec) || 0) * 10) / 10
            });
          }
        }
        if (p.mistakeLog.length > 300) p.mistakeLog.length = 300;
      }

      save();
      return { earnedXp, pct, score: cleanScore, speedBonus: bonus };
    },
    getFocusReport,
    buildAiPromptForKid,
    buildAiPromptAllKids,
    exportJson: () => JSON.stringify(state, null, 2),
    importJson: (text) => {
      const parsed = JSON.parse(text);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        throw new Error("Invalid backup file format.");
      }
      normalizeProfiles(parsed);
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
      normalizeProfiles(parsed);
      fileHandle = handle;
      state = parsed;
      save();
      return handle.name;
    },
    getLinkedFileName: () => (fileHandle ? fileHandle.name : null)
  };
})(window);
