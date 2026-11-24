/**
 * Parent task cards (v5). Pure functions: no DOM, no storage writes.
 *
 * A task is created for every chapter that the weakness engine marks "lemah" (>= 2 attempts).
 * Target: >= TARGET_PCT over NEED_ATTEMPTS new attempts within WINDOW_DAYS.
 * After CYCLE_LIMIT unsuccessful cycles the task becomes "rujuk_guru" (suggest asking the teacher).
 * Guidance text is generic per mistake type and contains no subject facts.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./weakness.js"));
  } else {
    const App = (root.App = root.App || {});
    App.Tasks = factory(App.Weakness);
  }
})(typeof window !== "undefined" ? window : globalThis, function (Weakness) {
  const TARGET_PCT = 70;
  const NEED_ATTEMPTS = 3;
  const WINDOW_DAYS = 7;
  const CYCLE_LIMIT = 3;
  const IMPROVE_DELTA = 10;
  const MAX_TASKS = 60;
  const DAY_MS = 86400000;

  function pctOf(score, total) {
    return total > 0 ? Math.round((score / total) * 100) : 0;
  }

  function attemptsSince(profile, task) {
    const history = Array.isArray(profile.history) ? profile.history : [];
    const created = Date.parse(task.createdTs);
    const list = history.filter(
      (h) => `${h.subjectId}:${h.chapterId}` === task.key && Date.parse(h.ts) > created
    );
    const recent = list.slice(0, NEED_ATTEMPTS); // history is newest-first
    let s = 0;
    let t = 0;
    recent.forEach((h) => {
      s += Number(h.score) || 0;
      t += Number(h.total) || 0;
    });
    return { count: list.length, pct: pctOf(s, t) };
  }

  function resultFor(sincePct, baseline) {
    if (sincePct >= TARGET_PCT || sincePct >= baseline + IMPROVE_DELTA) return "baik";
    if (sincePct <= baseline - IMPROVE_DELTA) return "teruk";
    return "sama";
  }

  function makeTask(chapter, cycle, nowMs, profile) {
    const id = `${chapter.key}#${cycle}#${nowMs}`;
    return {
      id,
      key: chapter.key,
      gradeId: profile.gradeId,
      subjectId: chapter.subjectId,
      chapterId: chapter.chapterId,
      subjectName: chapter.subjectName,
      chapterTitle: chapter.chapterTitle,
      cycle,
      createdTs: new Date(nowMs).toISOString(),
      dueTs: new Date(nowMs + WINDOW_DAYS * DAY_MS).toISOString(),
      baseline: chapter.mastery,
      target: TARGET_PCT,
      need: NEED_ATTEMPTS,
      dominant: dominantMistake(chapter.mistakes),
      status: "aktif", // aktif | selesai | tamat | rujuk_guru
      result: null, // baik | sama | teruk
      closedTs: null
    };
  }

  function dominantMistake(m) {
    const order = ["concept", "timeout", "careless", "slow"];
    let best = null;
    let bestN = 0;
    order.forEach((k) => {
      if ((m && m[k]) > bestN) {
        best = k;
        bestN = m[k];
      }
    });
    return best; // null when no wrong answers were logged
  }

  /**
   * @returns {{tasks: object[], changed: boolean}}
   */
  function refresh(profile, nowMs) {
    const now = typeof nowMs === "number" ? nowMs : Date.now();
    const old = Array.isArray(profile.tasks) ? profile.tasks : [];
    const tasks = old.map((t) => ({ ...t }));
    let changed = false;
    const analysis = Weakness.analyse(profile);
    const chapterByKey = new Map(analysis.chapters.map((c) => [c.key, c]));

    tasks.forEach((t) => {
      const chapter = chapterByKey.get(t.key);
      if (t.status === "rujuk_guru") {
        if (chapter && chapter.status !== "lemah") {
          t.status = "selesai";
          t.result = "baik";
          t.closedTs = new Date(now).toISOString();
          changed = true;
        }
        return;
      }
      if (t.status !== "aktif") return;
      const since = attemptsSince(profile, t);
      const due = now >= Date.parse(t.dueTs);
      if (since.count >= t.need || (due && since.count >= 1)) {
        const result = resultFor(since.pct, t.baseline);
        t.result = result;
        t.sincePct = since.pct;
        t.closedTs = new Date(now).toISOString();
        changed = true;
        if (since.pct >= t.target) {
          t.status = "selesai";
        } else if (t.cycle >= CYCLE_LIMIT) {
          t.status = "rujuk_guru";
          t.closedTs = null;
        } else {
          t.status = "tamat";
          const base = chapter || { key: t.key, subjectId: t.subjectId, chapterId: t.chapterId, subjectName: t.subjectName, chapterTitle: t.chapterTitle, mistakes: {} };
          tasks.push(makeTask({ ...base, mastery: since.pct }, t.cycle + 1, now + tasks.length, profile));
        }
      }
    });

    // New tasks for chapters that are weak (>= 2 attempts) and have no open task.
    analysis.chapters.forEach((c) => {
      if (c.status !== "lemah" || c.provisional) return;
      const open = tasks.some((t) => t.key === c.key && (t.status === "aktif" || t.status === "rujuk_guru"));
      if (open) return;
      tasks.push(makeTask(c, 1, now + tasks.length, profile));
      changed = true;
    });

    if (tasks.length > MAX_TASKS) {
      const keep = tasks.filter((t) => t.status === "aktif" || t.status === "rujuk_guru");
      const closed = tasks.filter((t) => t.status !== "aktif" && t.status !== "rujuk_guru").slice(-(MAX_TASKS - keep.length));
      tasks.length = 0;
      keep.concat(closed).forEach((t) => tasks.push(t));
      changed = true;
    }
    return { tasks, changed };
  }

  /** Next unplayed set number for a chapter, or "kilat" (Flash Revision) when all were played. */
  function nextPractice(profile, task, setCount) {
    const best = profile.setBest || {};
    for (let n = 1; n <= setCount; n++) {
      if (!best[`${task.gradeId}:${task.subjectId}:${task.chapterId}:${n}`]) return { setNum: n, flash: false };
    }
    return { setNum: null, flash: true };
  }

  const GUIDE = {
    concept: {
      diagnosis: "Anak berulang kali salah pada soalan yang sama, tanda konsep belum difahami.",
      steps: [
        "Buka latihan bab ini bersama anak dan baca penjelasan di bawah setiap jawapan yang salah.",
        "Minta anak terangkan dengan perkataan sendiri kenapa jawapan betul itu betul.",
        "Ulang satu set baharu. Jangan paksa lebih daripada 10 minit."
      ],
      questions: ["Boleh terangkan macam mana kamu fikir tadi?", "Apa beza antara jawapan kamu dengan jawapan yang betul?"]
    },
    careless: {
      diagnosis: "Anak menjawab terlalu cepat dan tersilap, tanda cuai dan bukan tidak tahu.",
      steps: [
        "Minta anak baca soalan dua kali dan garis kata kunci (contoh: tidak, kecuali, paling).",
        "Latih dengan satu set. Galakkan dia semak jawapan sebelum menekan.",
        "Puji apabila dia memperlahankan diri, walaupun skor belum naik."
      ],
      questions: ["Apa kata kunci dalam soalan ini?", "Kamu pasti? Cuba semak sekali lagi."]
    },
    timeout: {
      diagnosis: "Anak kehabisan masa sebelum sempat menjawab.",
      steps: [
        "Latih tanpa tekanan dahulu: fokus pada ketepatan, bukan kelajuan.",
        "Selepas itu, tetapkan sasaran masa yang sedikit lebih pantas pada set seterusnya.",
        "Jika soalan panjang, ajar anak langkau dan kembali kemudian."
      ],
      questions: ["Bahagian mana yang paling lambat kamu buat?", "Boleh kamu langkau dahulu dan kembali nanti?"]
    },
    slow: {
      diagnosis: "Anak mengambil masa lama tetapi masih salah, tanda asas bab ini belum kukuh.",
      steps: [
        "Ulang kaji nota atau buku teks bab ini selama 10 minit.",
        "Selepas itu cuba satu set baharu dan bandingkan dengan percubaan lepas.",
        "Catat istilah atau langkah yang anak masih keliru."
      ],
      questions: ["Bahagian mana dalam bab ini yang paling mengelirukan?", "Boleh kamu tunjukkan di buku teks?"]
    },
    none: {
      diagnosis: "Markah bab ini rendah. Rekod kesilapan belum cukup untuk menentukan puncanya.",
      steps: [
        "Mulakan satu set bersama anak dan perhatikan di mana dia teragak-agak.",
        "Baca penjelasan di bawah setiap jawapan yang salah.",
        "Ulang set seterusnya."
      ],
      questions: ["Bahagian mana yang kamu rasa susah?", "Apa yang kamu masih tidak faham?"]
    }
  };

  function guidance(task) {
    return GUIDE[task.dominant || "none"];
  }

  function teacherMessage(name, task, sincePct) {
    const pct = typeof sincePct === "number" ? sincePct : task.sincePct;
    return (
      `Salam sejahtera cikgu. Anak saya ${name} masih menghadapi kesukaran dalam ${task.subjectName}, bab "${task.chapterTitle}", ` +
      `walaupun telah berlatih selama ${task.cycle} kitaran (markah terkini ${pct}%). ` +
      `Boleh cikgu cadangkan bimbingan tambahan atau bahan latihan? Terima kasih.`
    );
  }

  function isOverdue(task, nowMs) {
    return task.status === "aktif" && (typeof nowMs === "number" ? nowMs : Date.now()) > Date.parse(task.dueTs);
  }

  return {
    TARGET_PCT,
    NEED_ATTEMPTS,
    WINDOW_DAYS,
    CYCLE_LIMIT,
    refresh,
    nextPractice,
    guidance,
    teacherMessage,
    isOverdue,
    attemptsSince
  };
});
