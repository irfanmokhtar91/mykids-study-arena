/**
 * Mock Exam logic (v5). Pure functions: no DOM, no storage writes.
 *
 * Honesty rules (agreed with Irfan, 24/Nov/2026):
 *  - A section is filled ONLY from questions whose type truly matches it. Unsupported sections stay empty ("kosong").
 *  - A paper grade is produced ONLY when every section has items AND every section is marked.
 *    Otherwise the result is a labelled partial score ("Bahagian A sahaja").
 *  - Questions awaiting a parent's mark (subjective) are never counted as wrong.
 *  - Mock results are stored apart from chapter-set history so they cannot distort last-3 mastery.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./gradeBands.js"));
  } else {
    const App = (root.App = root.App || {});
    App.MockExam = factory(App.GradeBands);
  }
})(typeof window !== "undefined" ? window : globalThis, function (GradeBands) {
  /**
   * Which sections can be honestly filled from the existing multiple-choice banks.
   * Key: "grade:subject:paper:section" -> "all" (draw from every chapter of the subject).
   * Anything not listed is NOT filled (e.g. BI cloze/matching need passages; BM pemahaman needs passages).
   */
  const OBJECTIVE_MAP = {
    "d6:sains:k1:A": "all",
    "d6:sejarah:k1:A": "all",
    "t2:math:k1:A": "all",
    "t2:sains:k1:A": "all",
    "t2:sejarah:k1:A": "all",
    "t2:geografi:k1:A": "all",
    "t2:pi:k1:A": "all"
  };

  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function rng32(seed) {
    let a = seed >>> 0;
    return () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(rng, arr) {
    const c = arr.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
  }
  const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

  function isSupported(gradeId, subjectId, paperId, sectionId) {
    return !!OBJECTIVE_MAP[`${gradeId}:${subjectId}:${paperId}:${sectionId}`];
  }

  /**
   * @param blueprint  an entry of Blueprints.BLUEPRINTS
   * @param paperId    e.g. "k1"
   * @param bank       { chapterIds: string[], getQuestions(chapterId): [{q, options, correctIndex, explanation}] }
   * @param seed       any string; same seed = same paper
   */
  function buildPaper(blueprint, paperId, bank, seed) {
    const paper = blueprint.papers.find((p) => p.id === paperId);
    if (!paper) throw new Error(`Unknown paper ${paperId}`);
    const rng = rng32(hashSeed(`${blueprint.gradeId}:${blueprint.subjectId}:${paperId}:${seed}`));
    const used = new Set();

    const sections = paper.sections.map((s) => {
      const base = {
        id: s.id,
        label: s.label,
        kind: s.kind,
        marks: s.marks,
        choose: s.choose || null,
        of: s.of || null,
        items: [],
        supported: false,
        state: "kosong"
      };
      if (s.kind !== "objective" || !isSupported(blueprint.gradeId, blueprint.subjectId, paperId, s.id)) return base;
      base.supported = true;

      // Round-robin across chapters so every chapter is represented, no repeats inside one paper.
      const queues = shuffle(rng, bank.chapterIds).map((cid) => ({
        cid,
        qs: shuffle(rng, bank.getQuestions(cid) || [])
      }));
      const want = s.count;
      let progressed = true;
      while (base.items.length < want && progressed) {
        progressed = false;
        for (const qu of queues) {
          if (base.items.length >= want) break;
          while (qu.qs.length) {
            const cand = qu.qs.shift();
            const key = norm(cand.q);
            if (!used.has(key)) {
              used.add(key);
              base.items.push({
                id: `${s.id}${base.items.length + 1}`,
                chapterId: qu.cid,
                part: s.id,
                q: cand.q,
                options: cand.options.slice(),
                correctIndex: cand.correctIndex,
                explanation: cand.explanation || "",
                marks: s.marks / want
              });
              progressed = true;
              break;
            }
          }
        }
      }
      base.state = base.items.length === want ? "sedia" : base.items.length > 0 ? "separa" : "kosong";
      return base;
    });

    return {
      gradeId: blueprint.gradeId,
      subjectId: blueprint.subjectId,
      paperId,
      name: paper.name,
      minutes: paper.minutes,
      marks: paper.marks,
      source: blueprint.source,
      sections
    };
  }

  /**
   * @param paper    result of buildPaper
   * @param answers  { [itemId]: chosenIndex }
   * @returns per-section scores, paper completeness and (only when complete) a grade
   */
  function scorePaper(paper, answers) {
    const secs = paper.sections.map((s) => {
      if (!s.supported || s.items.length === 0 || s.state === "separa") {
        return { id: s.id, label: s.label, state: s.items.length ? "separa" : "kosong", earned: null, possible: s.marks, counted: 0 };
      }
      let earned = 0;
      let correct = 0;
      s.items.forEach((it) => {
        if (answers[it.id] === it.correctIndex) {
          earned += it.marks;
          correct++;
        }
      });
      return { id: s.id, label: s.label, state: "ditanda", earned: Math.round(earned * 100) / 100, possible: s.marks, correct, total: s.items.length };
    });

    const complete = secs.every((x) => x.state === "ditanda");
    const markedEarned = secs.filter((x) => x.state === "ditanda").reduce((a, x) => a + x.earned, 0);
    const markedPossible = secs.filter((x) => x.state === "ditanda").reduce((a, x) => a + x.possible, 0);
    const out = {
      sections: secs,
      complete,
      markedEarned,
      markedPossible,
      markedLabel: secs.filter((x) => x.state === "ditanda").map((x) => `Bahagian ${x.id}`).join(", ") + (complete ? "" : " sahaja"),
      pct: complete ? Math.round((markedEarned / paper.marks) * 100) : null,
      grade: null,
      missing: secs.filter((x) => x.state !== "ditanda").map((x) => ({ id: x.id, state: x.state }))
    };
    if (complete) out.grade = GradeBands.gradeFor(paper.gradeId, out.pct);
    return out;
  }

  /** Flat per-item records for the weakness engine (answered objective items only). */
  function itemRecords(paper, answers) {
    const recs = [];
    paper.sections.forEach((s) =>
      s.items.forEach((it) => {
        if (answers[it.id] === undefined) return; // unanswered: not counted as wrong or right here
        recs.push({ chapterId: it.chapterId, part: it.part, correct: answers[it.id] === it.correctIndex });
      })
    );
    return recs;
  }

  return { OBJECTIVE_MAP, isSupported, buildPaper, scorePaper, itemRecords };
});
