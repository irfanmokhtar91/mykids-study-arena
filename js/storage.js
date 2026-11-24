/**
 * Persistent storage (v4) for kid accounts (blank start, self-service CRUD, grade locked per account),
 * scores, separate 10s speed bonuses, Coins & Rewards Shop, 7-day Streak Calendar, Weekly Sibling Leaderboard,
 * full question/mistake logs, Parent PIN, AI Study Plan Generator,
 * plus 1-Tap Backup, Smart Auto-Merge, and Cloud Sync metadata across multiple phones.
 */
(function (global) {
  const App = (global.App = global.App || {});
  const STORAGE_KEY = "mykids_study_arena_v1";

  App.AVATARS = ["🦊", "🐯", "🦁", "🐼", "🐨", "🐸", "🦄", "🦖", "🚀", "🎮", "⭐", "⚡"];

  App.SHOP_ITEMS = [
    // Unlockable Premium Avatars
    { id: "av_dragon", type: "avatar", value: "🐉", name: "Naga Sakti", desc: "Avatar naga api legenda", price: 60 },
    { id: "av_eagle", type: "avatar", value: "🦅", name: "Helang Juara", desc: "Pantas & fokus di udara", price: 50 },
    { id: "av_bot", type: "avatar", value: "🤖", name: "Robot siber", desc: "Pengira pantas tanpa silap", price: 60 },
    { id: "av_ninja", type: "avatar", value: "🥷", name: "Ninja Ilmu", desc: "Tangkas menewaskan soalan", price: 80 },
    { id: "av_wizard", type: "avatar", value: "🧙", name: "Ahli Sihir", desc: "Pakar rumus dan sains", price: 90 },
    { id: "av_shark", type: "avatar", value: "🦈", name: "Jerung Laju", desc: "Raja cabaran masa pantas", price: 70 },
    { id: "av_crown", type: "avatar", value: "👑", name: "Juara Mahkota", desc: "Khas untuk pelajar cemerlang", price: 120 },
    { id: "av_ufo", type: "avatar", value: "🛸", name: "Kapal Angkasa", desc: "Jelajah semua bab 2027", price: 100 },

    // Avatar Frames
    { id: "frame_gold", type: "frame", value: "frame_gold", name: "Bingkai Emas", desc: "Kilauan emas juara mingguan", price: 45 },
    { id: "frame_neon", type: "frame", value: "frame_neon", name: "Bingkai Neon", desc: "Cahaya siber biru-ungu", price: 60 },
    { id: "frame_fire", type: "frame", value: "frame_fire", name: "Bingkai Api", desc: "Aura semangat membara", price: 85 },
    { id: "frame_galaxy", type: "frame", value: "frame_galaxy", name: "Bingkai Galaksi", desc: "Bingkai kosmik peringkat tertinggi", price: 140 },

    // In-Game Trail / Laser Visual Effects
    { id: "fx_rainbow", type: "effect", value: "fx_rainbow", name: "Jejak Pelangi", desc: "Laser & percikan warna pelangi", price: 50 },
    { id: "fx_lightning", type: "effect", value: "fx_lightning", name: "Kuasa Kilat", desc: "Kesan elektrik kuning terang", price: 75 },
    { id: "fx_fire", type: "effect", value: "fx_fire", name: "Jejak Api", desc: "Kesan tembakan & rempuhan berapi", price: 95 },
    { id: "fx_plasma", type: "effect", value: "fx_plasma", name: "Plasma Ungu", desc: "Pancaran tenaga futuristik", price: 150 }
  ];

  const LEGACY_GUESSED_NAMES = new Set([
    "Adik (Darjah 6)",
    "Angah (Tingkatan 2)",
    "Along (Tingkatan 4)"
  ]);

  const VALID_GRADES = new Set(["d6", "t2", "t4"]);
  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const DAYS_MY = ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"];

  let fileHandle = null;
  let onSaveListener = null;

  function fmtDate(iso) {
    const d = iso ? new Date(iso) : new Date();
    if (isNaN(d.getTime())) return "-";
    const dd = String(d.getDate()).padStart(2, "0");
    const mon = MONTHS_EN[d.getMonth()];
    const yyyy = d.getFullYear();
    return `${dd}/${mon}/${yyyy}`;
  }

  function toLocalDateKey(dateInput) {
    const d = dateInput ? new Date(dateInput) : new Date();
    if (isNaN(d.getTime())) return null;
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function getIsoWeekKey(dateInput) {
    const src = dateInput ? new Date(dateInput) : new Date();
    if (isNaN(src.getTime())) return "2026-W01";
    const d = new Date(Date.UTC(src.getFullYear(), src.getMonth(), src.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
  }

  function shiftDateKey(baseDate, offsetDays) {
    const d = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + offsetDays);
    return toLocalDateKey(d);
  }

  function computeDailyStreak(activeDays) {
    if (!Array.isArray(activeDays) || activeDays.length === 0) return 0;
    const daySet = new Set(activeDays);
    const now = new Date();
    const todayKey = toLocalDateKey(now);
    const yesterdayKey = shiftDateKey(now, -1);

    let offset = 0;
    if (daySet.has(todayKey)) {
      offset = 0;
    } else if (daySet.has(yesterdayKey)) {
      offset = -1;
    } else {
      return 0;
    }

    let streak = 0;
    while (streak < 400) {
      const k = shiftDateKey(now, offset - streak);
      if (daySet.has(k)) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  function defaultProfile(id, gradeId, avatar, name = "") {
    return {
      id,
      name: String(name || "").trim(),
      gradeId: VALID_GRADES.has(gradeId) ? gradeId : "d6",
      avatar: avatar || "🦊",
      xp: 0,
      coins: 0,
      dailyStreak: 0,
      activeDays: [],
      weeklyStats: {},
      unlockedItems: [],
      equippedFrame: "default",
      equippedEffect: "default",
      lastPlayed: null,
      streakBest: 0,
      totalSpeedBonus: 0,
      history: [],
      mistakeLog: [],
      tasks: [],
      mockResults: [],
      reports: [],
      setBest: {},
      updatedAt: new Date().toISOString()
    };
  }

  function defaultState() {
    return {
      version: 4,
      parentPin: "",
      dlpEnabled: false,
      activeProfileId: null,
      profiles: [],
      deletedProfileIds: [],
      familySync: {
        code: "",
        syncToken: "",
        lastSyncedAt: null,
        pendingSync: false
      }
    };
  }

  function isMeaningfulProfile(p) {
    if (!p || typeof p !== "object") return false;
    const trimmed = typeof p.name === "string" ? p.name.trim() : "";
    if (trimmed && !LEGACY_GUESSED_NAMES.has(trimmed)) return true;
    if (Array.isArray(p.history) && p.history.length > 0) return true;
    if (p.setBest && Object.keys(p.setBest).length > 0) return true;
    if ((Number(p.xp) || 0) > 0 || (Number(p.coins) || 0) > 0) return true;
    return false;
  }

  function normalizeProfileFields(p) {
    let changed = false;
    if (!Array.isArray(p.tasks)) {
      p.tasks = [];
      changed = true;
    }
    if (!Array.isArray(p.mockResults)) {
      p.mockResults = [];
      changed = true;
    }
    if (!Array.isArray(p.reports)) {
      p.reports = [];
      changed = true;
    }
    if (!p.id) {
      p.id = `kid_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
      changed = true;
    }
    if (typeof p.name !== "string") {
      p.name = "";
      changed = true;
    } else if (LEGACY_GUESSED_NAMES.has(p.name.trim())) {
      p.name = "";
      changed = true;
    }
    if (!VALID_GRADES.has(p.gradeId)) {
      p.gradeId = "d6";
      changed = true;
    }
    if (typeof p.avatar !== "string" || !p.avatar) {
      p.avatar = "🦊";
      changed = true;
    }
    if (typeof p.xp !== "number") {
      p.xp = Number(p.xp) || 0;
      changed = true;
    }
    if (typeof p.coins !== "number") {
      p.coins = Number(p.coins) || 0;
      changed = true;
    }
    if (typeof p.totalSpeedBonus !== "number") {
      p.totalSpeedBonus = Number(p.totalSpeedBonus) || 0;
      changed = true;
    }
    if (!Array.isArray(p.activeDays)) {
      p.activeDays = [];
      changed = true;
    }
    if (!p.weeklyStats || typeof p.weeklyStats !== "object") {
      p.weeklyStats = {};
      changed = true;
    }
    if (!Array.isArray(p.unlockedItems)) {
      p.unlockedItems = [];
      changed = true;
    }
    if (typeof p.equippedFrame !== "string") {
      p.equippedFrame = "default";
      changed = true;
    }
    if (typeof p.equippedEffect !== "string") {
      p.equippedEffect = "default";
      changed = true;
    }
    if (p.lastPlayed === undefined) {
      p.lastPlayed = null;
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
    if (typeof p.updatedAt !== "string") {
      p.updatedAt = "";
      changed = true;
    }
    const recomputedStreak = computeDailyStreak(p.activeDays);
    if (p.dailyStreak !== recomputedStreak) {
      p.dailyStreak = recomputedStreak;
      changed = true;
    }
    return changed;
  }

  function normalizeProfiles(parsed) {
    let changed = false;
    if (parsed && Array.isArray(parsed.profiles)) {
      parsed.profiles.forEach((p) => {
        if (normalizeProfileFields(p)) changed = true;
      });
    }
    return changed;
  }

  /** A PIN is weak if it is the old default, all the same digit, or a simple run (1234, 4321, 2345 ...). */
  function isPinWeak(pin) {
    const p = String(pin || "");
    if (!/^\d{4,6}$/.test(p)) return true;
    if (/^(\d)\1+$/.test(p)) return true;
    const d = p.split("").map(Number);
    const asc = d.every((x, i) => i === 0 || x === d[i - 1] + 1);
    const desc = d.every((x, i) => i === 0 || x === d[i - 1] - 1);
    return asc || desc || p === "1234";
  }

  function load() {
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        return defaultState();
      }
      let changed = false;
      if (!parsed.version || parsed.version < 4) {
        const beforeLen = parsed.profiles.length;
        parsed.profiles = parsed.profiles.filter(isMeaningfulProfile);
        if (parsed.profiles.length !== beforeLen) changed = true;
        parsed.version = 4;
        changed = true;
      }
      if (typeof parsed.parentPin !== "string" || isPinWeak(parsed.parentPin)) {
        // The old default PIN (1234) or any weak PIN is discarded: the parent must create a new one.
        parsed.parentPin = "";
        changed = true;
      }
      if (!Array.isArray(parsed.deletedProfileIds)) {
        parsed.deletedProfileIds = [];
        changed = true;
      }
      if (!parsed.familySync || typeof parsed.familySync !== "object") {
        parsed.familySync = { code: "", syncToken: "", lastSyncedAt: null, pendingSync: false };
        changed = true;
      }
      if (parsed.activeProfileId && !parsed.profiles.some((p) => p.id === parsed.activeProfileId)) {
        parsed.activeProfileId = null;
        changed = true;
      }
      if (normalizeProfiles(parsed)) changed = true;
      if (changed) {
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
      // Permission might have expired; ignore silently
    }
  }

  let saveFailed = false;

  function shrinkState() {
    state.profiles.forEach((p) => {
      if (Array.isArray(p.history)) p.history.forEach((h, i) => { if (i >= 20) delete h.questionLogs; });
      if (Array.isArray(p.mockResults)) {
        p.mockResults.forEach((r, i) => { if (i >= 5) delete r.typed; }); // keep marks, drop old typed working
        if (p.mockResults.length > 15) p.mockResults.length = 15;
      }
    });
  }

  function save(opts = {}) {
    if (!opts.skipCloudPush && state.familySync && state.familySync.code && state.familySync.syncToken) {
      state.familySync.pendingSync = true;
    }
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      saveFailed = false;
    } catch (e) {
      // Storage is full: drop the heaviest, least valuable data first, then retry once.
      shrinkState();
      try {
        global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        saveFailed = false;
      } catch (e2) {
        saveFailed = true; // surfaced to the parent in the dashboard; never silent
      }
    }
    syncToLinkedFile();
    if (!opts.skipCloudPush && typeof onSaveListener === "function") {
      onSaveListener(opts);
    }
  }

  function getDisplayName(profile) {
    const trimmed = profile && typeof profile.name === "string" ? profile.name.trim() : "";
    if (trimmed) return trimmed;
    const grade = App.GRADES && profile ? App.GRADES[profile.gradeId] : null;
    return grade ? grade.name : "Pelajar";
  }

  function getSetBest(profile, gradeId, subjectId, chapterId, setNum) {
    if (!profile || !profile.setBest) return null;
    return (
      profile.setBest[`${gradeId}:${subjectId}:${chapterId}:${setNum}`] ||
      profile.setBest[`${subjectId}:${chapterId}:${setNum}`] ||
      null
    );
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

  function getLast7DaysStatus(profile) {
    const daySet = new Set(Array.isArray(profile && profile.activeDays) ? profile.activeDays : []);
    const now = new Date();
    const out = [];
    for (let offset = -6; offset <= 0; offset++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
      const key = toLocalDateKey(d);
      out.push({
        dateKey: key,
        dayLabel: DAYS_MY[d.getDay()],
        active: daySet.has(key),
        isToday: offset === 0
      });
    }
    return out;
  }

  function getSiblingLeaderboard() {
    const wk = getIsoWeekKey();
    return state.profiles
      .map((p) => {
        const grade = App.GRADES && App.GRADES[p.gradeId];
        const wStats = (p.weeklyStats && p.weeklyStats[wk]) || { marks: 0, sets: 0, bonus: 0, xp: 0 };
        return {
          id: p.id,
          name: getDisplayName(p),
          hasCustomName: !!(p.name && p.name.trim()),
          gradeId: p.gradeId,
          gradeName: grade ? grade.name : p.gradeId,
          avatar: p.avatar || "🦊",
          equippedFrame: p.equippedFrame || "default",
          weeklyMarks: Number(wStats.marks) || 0,
          weeklySets: Number(wStats.sets) || 0,
          weeklyBonus: Number(wStats.bonus) || 0,
          weeklyXp: Number(wStats.xp) || 0,
          xp: Number(p.xp) || 0,
          dailyStreak: computeDailyStreak(p.activeDays)
        };
      })
      .sort((a, b) => b.weeklyMarks - a.weeklyMarks || b.weeklyXp - a.weeklyXp || b.xp - a.xp);
  }

  function buyOrEquipItem(profileId, itemId) {
    const p = state.profiles.find((x) => x.id === profileId);
    const item = App.SHOP_ITEMS.find((x) => x.id === itemId);
    if (!p || !item) return { ok: false, reason: "Item tidak dijumpai." };
    normalizeProfileFields(p);

    const isOwned = p.unlockedItems.includes(item.id) || item.price === 0;
    let action = "equipped";
    if (!isOwned) {
      if ((p.coins || 0) < item.price) {
        return { ok: false, reason: `Syiling tidak cukup! Perlukan ${item.price} 🪙.` };
      }
      p.coins -= item.price;
      p.unlockedItems.push(item.id);
      action = "bought";
    }

    if (item.type === "avatar") p.avatar = item.value;
    else if (item.type === "frame") p.equippedFrame = item.value;
    else if (item.type === "effect") p.equippedEffect = item.value;

    p.updatedAt = new Date().toISOString();
    save();
    return { ok: true, action, item, coins: p.coins };
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
      allChapters,
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
      `Sila reka dan bina satu **aplikasi permainan HTML5 interaktif** (mesra sentuhan telefon & PC, sifar kesilapan fakta) khusus untuk membantu **${displayName}** menguasai topik lemah berdasarkan data prestasi sebenar di bawah (Silibus KSSR Semakan / KSSM Malaysia 2027).`,
      "",
      buildKidSection(profile),
      "",
      "## Keperluan Aplikasi Seterusnya:",
      "1. Fokuskan aktiviti permainan interaktif (contoh: leret benar/palsu, sambung pasangan, isih kategori, bina formula/ayat, atau aksi arked) tepat pada bab keutamaan & jenis kesilapan di atas.",
      "2. Apabila anak tersilap, terangkan secara jelas **mengapa jawapan itu salah** dan **langkah mudah untuk memahaminya** sebelum cuba semula.",
      "3. Gunakan pengiraan deterministik / semakan jawapan yang disahkan 100% tepat tanpa tekaan.",
      "4. Paparkan markah ketepatan (1 markah setiap jawapan tepat) dan kiraan bonus pantas (<=10 saat) secara berasingan, serta log keputusan."
    ].join("\n");
  }

  function buildAiPromptAllKids() {
    const today = fmtDate(new Date().toISOString());
    if (state.profiles.length === 0) {
      return `# Pelan Latihan Interaktif (${today})\n\nBelum ada akaun anak didaftarkan lagi.`;
    }
    const sections = state.profiles.map((p) => buildKidSection(p)).join("\n\n---\n\n");
    return [
      `# Permintaan Projek Aplikasi Pemulihan Interaktif Keluarga (${today})`,
      "",
      "Sila bantu rancang dan bina aplikasi/modul permainan HTML5 interaktif baharu (sifar kesilapan jawapan, mesra skrin sentuh telefon & PC) untuk membaiki kelemahan semua anak berdasarkan log sebenar di bawah (Silibus Malaysia 2027):",
      "",
      sections,
      "",
      "## Keperluan Aplikasi Seterusnya:",
      "1. Cadangkan 1 permainan interaktif khusus bagi setiap anak yang menyasarkan bab terlemah dan corak kesilapan mereka di atas.",
      "2. Setiap kali berlaku kesilapan, beri bimbingan langkah demi langkah supaya anak faham punca salahnya, bukan sekadar menghafal jawapan.",
      "3. Sahkan semua jawapan dan formula secara ketat (0% ralat kunci jawapan)."
    ].join("\n");
  }

  function mergeBackup(textOrObj, opts = {}) {
    let parsed;
    if (typeof textOrObj === "string") {
      try {
        parsed = JSON.parse(textOrObj);
      } catch (e) {
        throw new Error("Fail ini bukan fail rekod belajar yang sah.");
      }
    } else {
      parsed = textOrObj;
    }
    if (!parsed || !Array.isArray(parsed.profiles)) {
      throw new Error("Fail ini bukan fail rekod belajar yang sah.");
    }
    normalizeProfiles(parsed);

    // Absorb explicit profile deletions across devices
    const delMap = new Map();
    const absorbDeletes = (list) => {
      if (!Array.isArray(list)) return;
      list.forEach((d) => {
        if (!d || !d.id) return;
        const prev = delMap.get(d.id) || "";
        const ts = String(d.ts || "");
        if (ts >= prev) delMap.set(d.id, ts);
      });
    };
    absorbDeletes(state.deletedProfileIds);
    absorbDeletes(parsed.deletedProfileIds);

    const isProfileDeleted = (p) => {
      if (!p || !p.id || !delMap.has(p.id)) return false;
      const delTs = delMap.get(p.id);
      const profTs = String(p.updatedAt || "");
      return !profTs || delTs >= profTs;
    };

    state.profiles = state.profiles.filter((p) => !isProfileDeleted(p));
    state.deletedProfileIds = Array.from(delMap.entries())
      .map(([id, ts]) => ({ id, ts }))
      .sort((a, b) => String(b.ts).localeCompare(String(a.ts)))
      .slice(0, 50);

    let addedProfiles = 0;
    let addedHistory = 0;
    let addedMistakes = 0;
    let updatedSets = 0;

    parsed.profiles.forEach((inc) => {
      if (!inc || isProfileDeleted(inc) || !isMeaningfulProfile(inc)) return;

      const incName = typeof inc.name === "string" ? inc.name.trim() : "";
      let local = state.profiles.find((p) => p.id === inc.id);
      if (!local && incName) {
        local = state.profiles.find(
          (p) => p.name && p.name.trim().toLowerCase() === incName.toLowerCase() && p.gradeId === inc.gradeId
        );
      }

      if (!local) {
        const cloned = JSON.parse(JSON.stringify(inc));
        normalizeProfileFields(cloned);
        state.profiles.push(cloned);
        addedProfiles++;
        addedHistory += (cloned.history || []).length;
        addedMistakes += (cloned.mistakeLog || []).length;
        updatedSets += Object.keys(cloned.setBest || {}).length;
        return;
      }

      normalizeProfileFields(local);

      const locTs = String(local.updatedAt || "");
      const incTs = String(inc.updatedAt || "");
      const incIsNewer = incTs > locTs;

      if (incName && (!local.name.trim() || incIsNewer)) {
        local.name = incName;
      }
      if (VALID_GRADES.has(inc.gradeId) && incIsNewer) {
        local.gradeId = inc.gradeId;
      }
      if (inc.avatar && incIsNewer) {
        local.avatar = inc.avatar;
      }
      if (incIsNewer && inc.equippedFrame) {
        local.equippedFrame = inc.equippedFrame;
      } else if (local.equippedFrame === "default" && inc.equippedFrame && inc.equippedFrame !== "default") {
        local.equippedFrame = inc.equippedFrame;
      }
      if (incIsNewer && inc.equippedEffect) {
        local.equippedEffect = inc.equippedEffect;
      } else if (local.equippedEffect === "default" && inc.equippedEffect && inc.equippedEffect !== "default") {
        local.equippedEffect = inc.equippedEffect;
      }
      if (incTs > locTs) {
        local.updatedAt = incTs;
      }

      local.xp = Math.max(Number(local.xp) || 0, Number(inc.xp) || 0);
      local.coins = Math.max(Number(local.coins) || 0, Number(inc.coins) || 0);
      local.streakBest = Math.max(Number(local.streakBest) || 0, Number(inc.streakBest) || 0);
      local.totalSpeedBonus = Math.max(Number(local.totalSpeedBonus) || 0, Number(inc.totalSpeedBonus) || 0);

      const itemSet = new Set([...(local.unlockedItems || []), ...(inc.unlockedItems || [])]);
      local.unlockedItems = Array.from(itemSet);

      const daySet = new Set([...(local.activeDays || []), ...(inc.activeDays || [])]);
      local.activeDays = Array.from(daySet).sort().slice(-180);
      local.dailyStreak =
        local.activeDays.length > 0
          ? computeDailyStreak(local.activeDays)
          : Math.max(Number(local.dailyStreak) || 0, Number(inc.dailyStreak) || 0);

      // Merge weeklyStats
      const allWeeks = new Set([...Object.keys(local.weeklyStats || {}), ...Object.keys(inc.weeklyStats || {})]);
      allWeeks.forEach((wk) => {
        const lw = (local.weeklyStats && local.weeklyStats[wk]) || { marks: 0, sets: 0, bonus: 0, xp: 0 };
        const iw = (inc.weeklyStats && inc.weeklyStats[wk]) || { marks: 0, sets: 0, bonus: 0, xp: 0 };
        local.weeklyStats[wk] = {
          marks: Math.max(Number(lw.marks) || 0, Number(iw.marks) || 0),
          sets: Math.max(Number(lw.sets) || 0, Number(iw.sets) || 0),
          bonus: Math.max(Number(lw.bonus) || 0, Number(iw.bonus) || 0),
          xp: Math.max(Number(lw.xp) || 0, Number(iw.xp) || 0)
        };
      });

      // Merge setBest
      const allSetKeys = new Set([...Object.keys(local.setBest || {}), ...Object.keys(inc.setBest || {})]);
      allSetKeys.forEach((k) => {
        const ls = local.setBest[k];
        const is = inc.setBest && inc.setBest[k];
        if (!is) return;
        if (!ls) {
          local.setBest[k] = { ...is };
          updatedSets++;
        } else {
          const prevScore = Number(ls.bestScore) || 0;
          const nextScore = Math.max(prevScore, Number(is.bestScore) || 0);
          const nextBonus = Math.max(Number(ls.bestBonus) || 0, Number(is.bestBonus) || 0);
          const nextAtt = Math.max(Number(ls.attempts) || 0, Number(is.attempts) || 0);
          const latestPlay =
            String(is.lastPlayed || "") > String(ls.lastPlayed || "") ? is.lastPlayed : ls.lastPlayed;
          if (nextScore > prevScore || nextBonus > (ls.bestBonus || 0) || nextAtt > (ls.attempts || 0)) {
            updatedSets++;
          }
          local.setBest[k] = {
            bestScore: nextScore,
            bestBonus: nextBonus,
            total: is.total || ls.total,
            attempts: nextAtt,
            lastPlayed: latestPlay
          };
        }
      });

      // Deduplicate & merge history
      const histMap = new Map();
      (local.history || []).forEach((h) => {
        histMap.set(`${h.ts}|${h.subjectId}|${h.chapterId}|${h.setNum}|${h.score}`, h);
      });
      (inc.history || []).forEach((h) => {
        const hk = `${h.ts}|${h.subjectId}|${h.chapterId}|${h.setNum}|${h.score}`;
        if (!histMap.has(hk)) {
          histMap.set(hk, h);
          addedHistory++;
        }
      });
      local.history = Array.from(histMap.values())
        .sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")))
        .slice(0, 150);
      for (let i = 80; i < local.history.length; i++) {
        delete local.history[i].questionLogs;
      }

      // Deduplicate & merge mistakeLog
      const misMap = new Map();
      (local.mistakeLog || []).forEach((m) => {
        misMap.set(`${m.ts}|${m.subjectId}|${m.chapterId}|${m.q}`, m);
      });
      (inc.mistakeLog || []).forEach((m) => {
        const mk = `${m.ts}|${m.subjectId}|${m.chapterId}|${m.q}`;
        if (!misMap.has(mk)) {
          misMap.set(mk, m);
          addedMistakes++;
        }
      });
      local.mistakeLog = Array.from(misMap.values())
        .sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")))
        .slice(0, 300);

      if (inc.lastPlayed && (!local.lastPlayed || incIsNewer)) {
        local.lastPlayed = inc.lastPlayed;
      }
    });

    if (state.activeProfileId && !state.profiles.some((p) => p.id === state.activeProfileId)) {
      state.activeProfileId = null;
    }

    save({ skipCloudPush: !!opts.skipCloudPush });
    return { addedProfiles, addedHistory, addedMistakes, updatedSets };
  }

  App.Storage = {
    getState: () => state,
    save,
    fmtDate,
    getCurrentWeekKey: () => getIsoWeekKey(),
    getLast7DaysStatus,
    getSiblingLeaderboard,
    buyOrEquipItem,
    getSetBest,
    getActiveProfile: () =>
      state.profiles.find((p) => p.id === state.activeProfileId) || null,
    getDisplayName,
    fmtScore: (n) => {
      const num = Number(n) || 0;
      const rounded = Math.round(num * 2) / 2;
      return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
    },
    setActiveProfile: (id) => {
      state.activeProfileId = id || null;
      save({ skipCloudPush: true });
    },
    createProfile: ({ name, gradeId, avatar }) => {
      const cleanName = String(name || "").trim();
      if (!cleanName) throw new Error("Sila masukkan nama anak.");
      const safeGrade = VALID_GRADES.has(gradeId) ? gradeId : "d6";
      const id = `kid_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
      const profile = defaultProfile(id, safeGrade, avatar || "🦊", cleanName);
      state.profiles.push(profile);
      state.activeProfileId = id;
      save();
      return profile;
    },
    updateProfile: (id, patch) => {
      const p = state.profiles.find((x) => x.id === id);
      if (p) {
        const nextPatch = { ...patch };
        if (nextPatch.gradeId && !VALID_GRADES.has(nextPatch.gradeId)) {
          delete nextPatch.gradeId;
        }
        if (typeof nextPatch.name === "string") {
          nextPatch.name = nextPatch.name.trim();
        }
        Object.assign(p, nextPatch);
        p.updatedAt = new Date().toISOString();
        save();
      }
    },
    deleteProfile: (id) => {
      const exists = state.profiles.some((p) => p.id === id);
      if (!exists) return false;
      state.profiles = state.profiles.filter((p) => p.id !== id);
      if (!Array.isArray(state.deletedProfileIds)) state.deletedProfileIds = [];
      state.deletedProfileIds.unshift({ id, ts: new Date().toISOString() });
      state.deletedProfileIds = state.deletedProfileIds.slice(0, 50);
      if (state.activeProfileId === id) {
        state.activeProfileId = null;
      }
      save();
      return true;
    },
    setDlpEnabled: (enabled) => {
      state.dlpEnabled = !!enabled;
      save();
    },
    isPinWeak,
    hasParentPin: () => !!state.parentPin && !isPinWeak(state.parentPin),
    setParentPin: (newPin) => {
      if (!isPinWeak(newPin)) {
        state.parentPin = newPin;
        save({ skipCloudPush: true });
        return true;
      }
      return false;
    },
    verifyParentPin: (pin) => !!state.parentPin && !isPinWeak(state.parentPin) && pin === state.parentPin,
    getSaveStatus: () => ({ failed: saveFailed }),
    getFamilySync: () => ({
      code: "",
      syncToken: "",
      lastSyncedAt: null,
      pendingSync: false,
      ...(state.familySync || {})
    }),
    setFamilySync: (patch) => {
      state.familySync = {
        code: "",
        syncToken: "",
        lastSyncedAt: null,
        pendingSync: false,
        ...(state.familySync || {}),
        ...patch
      };
      save({ skipCloudPush: true });
      return state.familySync;
    },
    clearFamilySync: () => {
      state.familySync = { code: "", syncToken: "", lastSyncedAt: null, pendingSync: false };
      save({ skipCloudPush: true });
    },
    setOnSaveListener: (fn) => {
      onSaveListener = typeof fn === "function" ? fn : null;
    },
    recordAttempt: (
      profileId,
      { gradeId, subjectId, subjectName, chapterId, chapterTitle, setNum, score, total, speedBonus, maxStreak, mode, answers, isRevision }
    ) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p) return;
      normalizeProfileFields(p);

      const cleanScore = Math.max(0, Math.round(Number(score) || 0));
      const bonus = Math.max(0, Math.round(Number(speedBonus) || 0));
      const pct = total > 0 ? Math.round((cleanScore / total) * 100) : 0;
      const earnedXp = cleanScore * 15 + bonus * 5 + (pct >= 80 ? 30 : 0) + maxStreak * 5;
      const earnedCoins = cleanScore * 10 + bonus * 5 + (pct === 100 ? 25 : pct >= 80 ? 10 : 0);

      p.xp = (p.xp || 0) + earnedXp;
      p.coins = (p.coins || 0) + earnedCoins;
      p.totalSpeedBonus += bonus;
      if (maxStreak > (p.streakBest || 0)) p.streakBest = maxStreak;

      const todayKey = toLocalDateKey(new Date());
      if (todayKey && !p.activeDays.includes(todayKey)) {
        p.activeDays.push(todayKey);
        p.activeDays.sort();
        if (p.activeDays.length > 180) p.activeDays = p.activeDays.slice(-180);
      }
      p.dailyStreak = computeDailyStreak(p.activeDays);

      const wk = getIsoWeekKey();
      const prevWk = p.weeklyStats[wk] || { marks: 0, sets: 0, bonus: 0, xp: 0 };
      p.weeklyStats[wk] = {
        marks: (Number(prevWk.marks) || 0) + cleanScore,
        sets: (Number(prevWk.sets) || 0) + 1,
        bonus: (Number(prevWk.bonus) || 0) + bonus,
        xp: (Number(prevWk.xp) || 0) + earnedXp
      };

      const info = lookupChapterInfo(gradeId, subjectId, chapterId);
      const sName = subjectName || info.subjectName;
      const cTitle = chapterTitle || info.chapterTitle;
      const nowIso = new Date().toISOString();
      p.updatedAt = nowIso;

      if (!isRevision) {
        const key = `${gradeId}:${subjectId}:${chapterId}:${setNum}`;
        const prev = getSetBest(p, gradeId, subjectId, chapterId, setNum);
        p.setBest[key] = {
          bestScore: prev ? Math.max(prev.bestScore, cleanScore) : cleanScore,
          bestBonus: prev ? Math.max(prev.bestBonus || 0, bonus) : bonus,
          total,
          attempts: (prev ? prev.attempts : 0) + 1,
          lastPlayed: nowIso
        };
        p.lastPlayed = { gradeId, subjectId, chapterId, setNum, mode };
      }

      const questionLogs = Array.isArray(answers)
        ? answers.map((a) => ({
            q: a.qObj.q,
            chosen: a.chosenText !== undefined ? a.chosenText : a.qObj.options[a.selectedIndex] || "",
            correct: a.correctText !== undefined ? a.correctText : a.qObj.options[a.qObj.correctIndex] || "",
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
        setNum: isRevision ? "Kilat" : setNum,
        score: cleanScore,
        total,
        speedBonus: bonus,
        pct,
        mode,
        earnedXp,
        earnedCoins,
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
              setNum: isRevision ? "Kilat" : setNum,
              q: a.qObj.q,
              chosen: a.chosenText !== undefined ? a.chosenText : a.qObj.options[a.selectedIndex] || "",
              correct: a.correctText !== undefined ? a.correctText : a.qObj.options[a.qObj.correctIndex] || "",
              explanation: a.qObj.explanation || "",
              elapsedSec: Math.round((Number(a.elapsedSec) || 0) * 10) / 10
            });
          }
        }
        if (p.mistakeLog.length > 300) p.mistakeLog.length = 300;
      }

      if (App.Tasks) {
        const tr = App.Tasks.refresh(p, Date.now());
        if (tr.changed) p.tasks = tr.tasks;
      }

      save();
      return {
        earnedXp,
        earnedCoins,
        pct,
        score: cleanScore,
        speedBonus: bonus,
        dailyStreak: p.dailyStreak
      };
    },
    getFocusReport,
    /** A child/parent flags a question as possibly wrong. Stored locally; the parent can send it to a teacher. */
    addReport: (profileId, rep) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p) return false;
      normalizeProfileFields(p);
      const key = `${rep.gradeId}|${rep.subjectId}|${rep.q}`;
      if (p.reports.some((r) => !r.done && `${r.gradeId}|${r.subjectId}|${r.q}` === key)) return false; // already reported
      p.reports.unshift({
        ts: new Date().toISOString(),
        gradeId: rep.gradeId,
        subjectId: rep.subjectId,
        subjectName: rep.subjectName || "",
        chapterTitle: rep.chapterTitle || "",
        q: String(rep.q || "").slice(0, 500),
        options: (rep.options || []).slice(0, 6).map((o) => String(o).slice(0, 200)),
        keyAnswer: String(rep.keyAnswer || "").slice(0, 200),
        chosen: String(rep.chosen || "").slice(0, 200),
        done: false
      });
      if (p.reports.length > 100) p.reports.length = 100;
      p.updatedAt = new Date().toISOString();
      save();
      return true;
    },
    dismissReport: (profileId, ts) => {
      const p = state.profiles.find((x) => x.id === profileId);
      const r = p && (p.reports || []).find((x) => x.ts === ts);
      if (!r) return false;
      r.done = true;
      p.updatedAt = new Date().toISOString();
      save();
      return true;
    },
    saveMockResult: (profileId, rec) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p) return;
      normalizeProfileFields(p);
      p.mockResults.unshift(rec);
      if (p.mockResults.length > 40) p.mockResults.length = 40;
      p.updatedAt = new Date().toISOString();
      save();
    },
    updateMockResult: (profileId, ts, rec) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p || !Array.isArray(p.mockResults)) return false;
      const i = p.mockResults.findIndex((r) => r.ts === ts);
      if (i < 0) return false;
      p.mockResults[i] = rec;
      p.updatedAt = new Date().toISOString();
      save();
      return true;
    },
    getMockResults: (profileId) => {
      const p = state.profiles.find((x) => x.id === profileId);
      return p && Array.isArray(p.mockResults) ? p.mockResults : [];
    },
    refreshTasks: (profileId) => {
      const p = state.profiles.find((x) => x.id === profileId);
      if (!p || !App.Tasks) return [];
      normalizeProfileFields(p);
      const tr = App.Tasks.refresh(p, Date.now());
      if (tr.changed) {
        p.tasks = tr.tasks;
        p.updatedAt = new Date().toISOString();
        save();
      }
      return p.tasks;
    },
    buildAiPromptForKid,
    buildAiPromptAllKids,
    exportJson: () => JSON.stringify(state, null, 2),
    exportBackupFileName: () => {
      const stamp = fmtDate(new Date().toISOString()).replace(/\//g, "");
      return `Rekod-MyKids-${stamp}.json`;
    },
    mergeBackup,
    importJson: (text) => {
      const parsed = JSON.parse(text);
      if (!parsed || !Array.isArray(parsed.profiles)) {
        throw new Error("Fail ini bukan fail rekod belajar yang sah.");
      }
      normalizeProfiles(parsed);
      state = parsed;
      save();
      return state;
    },
    supportsCloudFileSync: () => typeof global.showSaveFilePicker === "function",
    linkCloudFileSave: async () => {
      if (typeof global.showSaveFilePicker !== "function") {
        throw new Error("Pelayar ini menyokong Simpan Rekod terus.");
      }
      fileHandle = await global.showSaveFilePicker({
        suggestedName: "Rekod-MyKids.json",
        types: [{ description: "Fail Rekod Belajar", accept: { "application/json": [".json"] } }]
      });
      await syncToLinkedFile();
      return fileHandle.name;
    },
    loadFromCloudFile: async () => {
      if (typeof global.showOpenFilePicker !== "function") {
        throw new Error("Gunakan butang Pulihkan & Gabung Rekod di sebelah.");
      }
      const [handle] = await global.showOpenFilePicker({
        types: [{ description: "Fail Rekod Belajar", accept: { "application/json": [".json"] } }]
      });
      const file = await handle.getFile();
      const text = await file.text();
      const summary = mergeBackup(text);
      fileHandle = handle;
      return { fileName: handle.name, ...summary };
    },
    getLinkedFileName: () => (fileHandle ? fileHandle.name : null)
  };
})(window);
