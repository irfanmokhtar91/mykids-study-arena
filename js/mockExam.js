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
    "t2:pi:k1:A": "all",
    "t4:math:k1:A": "all",
    "t4:fizik:k1:A": "all",
    "t4:kimia:k1:A": "all",
    "t4:biologi:k1:A": "all",
    "t4:sejarah:k1:A": "all"
  };

  /**
   * Which subjective sections can be filled from the STRUCTURED pools (original items with model answers).
   * Only items with status "verified" are ever drawn.
   */
  const STRUCTURED_MAP = {
    "d6:math:k1:A": { pool: "d6_math", part: "A" },
    "d6:math:k1:B": { pool: "d6_math", part: "B" },
    "d6:sains:k1:B": { pool: "d6_sains", part: "B" },
    "d6:sains:k1:C": { pool: "d6_sains", part: "C" },
    "d6:sejarah:k1:B": { pool: "d6_sejarah", part: "B" },
    "d6:sejarah:k1:C": { pool: "d6_sejarah", part: "C" },
    "d6:bm:k1:B": { pool: "d6_bm", part: "B" },
    "d6:bm:k1:C": { pool: "d6_bm", part: "C" },
    "d6:bm:k1:D": { pool: "d6_bm", part: "D" },
    "d6:bi:k1:6": { pool: "d6_bi", part: "6" },
    "d6:bi:k1:7": { pool: "d6_bi", part: "7" },
    "t2:math:k1:B": { pool: "t2_math", part: "B" },
    "t2:math:k1:C": { pool: "t2_math", part: "C" },
    "t4:math:k2:A": { pool: "t4_math", part: "A" },
    "t4:math:k2:B": { pool: "t4_math", part: "B" },
    "t4:math:k2:C": { pool: "t4_math", part: "C" }
  };

  /**
   * Passage-backed or word-completion objective sections drawn as whole cohesive sets.
   * Only sets with status "verified" are ever drawn.
   */
  const OBJECTIVE_SET_MAP = {
    "d6:bm:k1:A": { pool: "d6_bm", part: "A" },
    "d6:bi:k1:1": { pool: "d6_bi", part: "1" },
    "d6:bi:k1:2": { pool: "d6_bi", part: "2" },
    "d6:bi:k1:3": { pool: "d6_bi", part: "3" },
    "d6:bi:k1:4": { pool: "d6_bi", part: "4" },
    "d6:bi:k1:5": { pool: "d6_bi", part: "5" }
  };

  /** Chapters that must NOT feed graded mock papers (outside the year's DSKP body). Practice sets still use them. */
  const MOCK_EXCLUDE = {
    "d6:sains": ["mesin"] // machines appear only in the level-wide Tahap II table, not the Tahun 6 body (DSKP check 25/Nov/2026)
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
    const k = `${gradeId}:${subjectId}:${paperId}:${sectionId}`;
    return !!OBJECTIVE_MAP[k] || !!STRUCTURED_MAP[k] || !!OBJECTIVE_SET_MAP[k];
  }

  function structuredSpec(gradeId, subjectId, paperId, sectionId) {
    return STRUCTURED_MAP[`${gradeId}:${subjectId}:${paperId}:${sectionId}`] || null;
  }

  function objectiveSetSpec(gradeId, subjectId, paperId, sectionId) {
    return OBJECTIVE_SET_MAP[`${gradeId}:${subjectId}:${paperId}:${sectionId}`] || null;
  }

  function isObjectiveCorrect(item, answer) {
    if (item && item.inputType === "word") {
      if (typeof answer !== "string" || !norm(answer).length) return false;
      const accepted = Array.isArray(item.accept) && item.accept.length ? item.accept : [item.answer];
      return accepted.some((a) => norm(a) === norm(answer));
    }
    return answer === (item && item.correctIndex);
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
    const usedStructured = new Set();

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
      const spec = structuredSpec(blueprint.gradeId, blueprint.subjectId, paperId, s.id);
      if (spec && typeof bank.getStructured === "function") {
        base.supported = true;
        base.structured = true;
        // Never trust the bank to filter: enforce the part, the verified status, and no item reused anywhere in the paper.
        const pool = (bank.getStructured(spec.pool, spec.part) || []).filter(
          (it) => it.status === "verified" && it.part === spec.part && !usedStructured.has(it.id)
        );
        const byChapter = new Map();
        shuffle(rng, pool).forEach((it) => {
          if (!byChapter.has(it.chapterId)) byChapter.set(it.chapterId, []);
          byChapter.get(it.chapterId).push(it);
        });
        const chapters = shuffle(rng, Array.from(byChapter.keys()));
        while (base.items.length < s.count) {
          let took = false;
          for (const cid of chapters) {
            if (base.items.length >= s.count) break;
            const q = byChapter.get(cid);
            if (q.length) {
              const it = q.shift();
              usedStructured.add(it.id);
              base.items.push({
                id: it.id,
                type: "structured",
                chapterId: it.chapterId,
                part: s.id,
                level: it.level,
                stem: it.stem,
                parts: it.parts,
                marks: it.parts.reduce((a, p) => a + p.marks, 0)
              });
              took = true;
            }
          }
          if (!took) break;
        }
        base.state = base.items.length === s.count ? "sedia" : base.items.length > 0 ? "separa" : "kosong";
        return base;
      }
      const setSpec = objectiveSetSpec(blueprint.gradeId, blueprint.subjectId, paperId, s.id);
      if (setSpec && typeof bank.getObjectiveSets === "function") {
        const sets = (bank.getObjectiveSets(setSpec.pool, setSpec.part) || []).filter(
          (b) => b.status === "verified" && b.part === setSpec.part && Array.isArray(b.items) && b.items.length === s.count
        );
        const picked = shuffle(rng, sets)[0];
        if (picked) {
          base.supported = true;
          base.items = picked.items.map((it, idx) => {
            const entry = {
              id: `${s.id}${idx + 1}`,
              chapterId: it.chapterId,
              part: s.id,
              passage: it.passage || picked.passage || "",
              q: it.q,
              explanation: it.explanation || "",
              marks: s.marks / s.count
            };
            if (it.inputType === "word") {
              entry.inputType = "word";
              entry.clue = it.clue || "";
              entry.answer = it.answer;
              entry.accept = Array.isArray(it.accept) && it.accept.length ? it.accept.slice() : [it.answer];
            } else {
              entry.options = it.options.slice();
              entry.correctIndex = it.correctIndex;
            }
            return entry;
          });
          base.state = base.items.length === s.count ? "sedia" : "kosong";
        }
        return base;
      }
      if (s.kind !== "objective" || !OBJECTIVE_MAP[`${blueprint.gradeId}:${blueprint.subjectId}:${paperId}:${s.id}`]) return base;
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

  /** Marks a parent awarded for one structured item: { "0": [stepIdx, ...], "1": [...] } -> earned marks. */
  function earnedForItem(item, marked) {
    let earned = 0;
    item.parts.forEach((p, i) => {
      const picks = Array.isArray(marked && marked[i]) ? marked[i] : [];
      const seen = new Set();
      picks.forEach((k) => {
        if (Number.isInteger(k) && k >= 0 && k < p.steps.length && !seen.has(k)) {
          seen.add(k);
          earned += p.steps[k].marks;
        }
      });
    });
    return earned;
  }
  /** Sum of the best `choose` item scores (answer N of M); all items when choose is empty. */
  function sectionEarned(items, pm, choose) {
    const scores = items.map((it) => earnedForItem(it, pm[it.id])).sort((a, b) => b - a);
    return (choose ? scores.slice(0, choose) : scores).reduce((a, x) => a + x, 0);
  }
  function isItemMarked(item, marked) {
    return !!marked && item.parts.every((p, i) => Array.isArray(marked[i]));
  }

  /**
   * @param paper        result of buildPaper
   * @param answers      { [itemId]: chosenIndex }   (objective items)
   * @param parentMarks  { [itemId]: { "0": [stepIdx...], ... } }   (structured items, entered by a parent)
   * @returns per-section scores, completeness and (only when complete) a grade
   */
  function scorePaper(paper, answers, parentMarks) {
    const pm = parentMarks || {};
    const secs = paper.sections.map((s) => {
      if (!s.supported || s.items.length === 0 || s.state === "separa") {
        return { id: s.id, label: s.label, state: s.items.length ? "separa" : "kosong", earned: null, possible: s.marks, counted: 0 };
      }
      if (s.structured) {
        const allMarked = s.items.every((it) => isItemMarked(it, pm[it.id]));
        if (!allMarked) {
          const done = s.items.filter((it) => isItemMarked(it, pm[it.id])).length;
          return { id: s.id, label: s.label, state: "menunggu", earned: null, possible: s.marks, structured: true, marked: done, total: s.items.length };
        }
        const earned = sectionEarned(s.items, pm, s.choose);
        return { id: s.id, label: s.label, state: "ditanda", earned, possible: s.marks, structured: true, choose: s.choose || null, marked: s.items.length, total: s.items.length };
      }
      let earned = 0;
      let correct = 0;
      s.items.forEach((it) => {
        if (isObjectiveCorrect(it, answers[it.id])) {
          earned += it.marks;
          correct++;
        }
      });
      return { id: s.id, label: s.label, state: "ditanda", earned: Math.round(earned * 100) / 100, possible: s.marks, correct, total: s.items.length };
    });

    const complete = secs.every((x) => x.state === "ditanda");
    const markedEarned = secs.filter((x) => x.state === "ditanda").reduce((a, x) => a + x.earned, 0);
    const markedPossible = secs.filter((x) => x.state === "ditanda").reduce((a, x) => a + x.possible, 0);
    const markedIds = secs.filter((x) => x.state === "ditanda").map((x) => `Bahagian ${x.id}`);
    const out = {
      sections: secs,
      complete,
      markedEarned,
      markedPossible,
      markedLabel: markedIds.join(", ") + (complete ? "" : " sahaja"),
      pct: complete ? Math.round((markedEarned / paper.marks) * 100) : null,
      grade: null,
      missing: secs.filter((x) => x.state !== "ditanda").map((x) => ({ id: x.id, state: x.state }))
    };
    if (complete) out.grade = GradeBands.gradeFor(paper.gradeId, out.pct);
    return out;
  }

  /**
   * Recompute a STORED result record after a parent has marked structured items.
   * Objective sections keep their recorded scores; structured sections are recomputed from parentMarks.
   * @param record     { gradeId, paperMarks, sections:[{id,state,earned,possible,structured,items:[{id,parts:[{marks,steps}]}]}] }
   */
  function rescoreRecord(record, parentMarks) {
    const pm = parentMarks || {};
    const sections = record.sections.map((s) => {
      if (!s.structured) return s;
      const items = s.items || [];
      const allMarked = items.length > 0 && items.every((it) => isItemMarked(it, pm[it.id]));
      if (!allMarked) {
        return { ...s, state: "menunggu", earned: null, marked: items.filter((it) => isItemMarked(it, pm[it.id])).length };
      }
      return { ...s, state: "ditanda", earned: sectionEarned(items, pm, s.choose), marked: items.length };
    });
    const complete = sections.every((x) => x.state === "ditanda");
    const earned = sections.filter((x) => x.state === "ditanda").reduce((a, x) => a + x.earned, 0);
    const pct = complete ? Math.round((earned / record.paperMarks) * 100) : null;
    const g = complete ? GradeBands.gradeFor(record.gradeId, pct) : null;
    return { ...record, sections, parentMarks: pm, complete, pct, grade: g ? g.grade : null };
  }

  /** Flat per-item records for the weakness engine (answered objective items only). */
  function itemRecords(paper, answers /* , parentMarks */) {
    const recs = [];
    const pm = arguments[2] || {};
    paper.sections.forEach((s) =>
      s.items.forEach((it) => {
        if (it.type === "structured") {
          // Awaiting a parent's mark is NOT wrong. Only marked items produce a record.
          if (isItemMarked(it, pm[it.id])) {
            recs.push({ chapterId: it.chapterId, part: it.part, earned: earnedForItem(it, pm[it.id]), possible: it.marks });
          }
          return;
        }
        if (it.inputType === "word" ? !norm(answers[it.id]) : answers[it.id] === undefined) return; // unanswered: not counted as wrong or right here
        recs.push({ chapterId: it.chapterId, part: it.part, correct: isObjectiveCorrect(it, answers[it.id]) });
      })
    );
    return recs;
  }

  return { OBJECTIVE_MAP, STRUCTURED_MAP, OBJECTIVE_SET_MAP, MOCK_EXCLUDE, isSupported, isObjectiveCorrect, buildPaper, scorePaper, rescoreRecord, earnedForItem, isItemMarked, itemRecords };
});
