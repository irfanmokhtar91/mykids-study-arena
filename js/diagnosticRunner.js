/**
 * Student Diagnostic Checkup Runner (v5 Step 3).
 * Pure UMD module with strict JSDoc types and zero DOM/storage writes.
 * Handles 15-question selection (with prerequisite prioritization), silent
 * performance.now() timing, MYT UTC+8 timestamps, and kid-safe summaries.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./diagnostics.js"));
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticRunner = factory(App.Diagnostics);
  }
})(typeof window !== "undefined" ? window : globalThis, function (Diagnostics) {
  "use strict";

  const DEFAULT_QUESTION_COUNT = 15;
  const MYT_OFFSET_MS = 8 * 60 * 60 * 1000;
  const LETTERS = ["A", "B", "C", "D"];

  /**
   * @typedef {object} DiagnosticBank
   * @property {Array<object>} syllabus_nodes
   * @property {Array<object>} questions
   */

  /**
   * Format a timestamp in Malaysia Time (`UTC+8`) as `YYYY-MM-DDTHH:mm:ss+08:00`
   * independently of the host device's local timezone.
   *
   * @param {number|Date|string} [dateOrMs]
   * @returns {string}
   */
  function formatMytIso(dateOrMs) {
    let ms;
    if (typeof dateOrMs === "number" && Number.isFinite(dateOrMs)) {
      ms = dateOrMs;
    } else if (dateOrMs instanceof Date && Number.isFinite(dateOrMs.getTime())) {
      ms = dateOrMs.getTime();
    } else if (typeof dateOrMs === "string" && dateOrMs.trim()) {
      const parsed = Date.parse(dateOrMs);
      ms = Number.isFinite(parsed) ? parsed : Date.now();
    } else {
      ms = Date.now();
    }
    const d = new Date(ms + MYT_OFFSET_MS);
    const pad = (n) => String(n).padStart(2, "0");
    return (
      `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}` +
      `T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}+08:00`
    );
  }

  /**
   * Deterministic Mulberry32 PRNG.
   * @param {number} seed
   * @returns {function(): number}
   */
  function mulberry32(seed) {
    let a = (Number(seed) || 1) >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * @template T
   * @param {function(): number} rng
   * @param {T[]} arr
   * @returns {T[]}
   */
  function shuffleWith(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /**
   * List curated diagnostic banks available for a grade ID.
   *
   * @param {Record<string, Record<string, DiagnosticBank>>|null|undefined} diagnosticBanks
   * @param {string} gradeId
   * @returns {Array<{ gradeId: string, subjectId: string, nodes: object[], questions: object[], nodeCount: number, questionCount: number }>}
   */
  function getAvailableBanks(diagnosticBanks, gradeId) {
    const gradeBanks = diagnosticBanks && diagnosticBanks[gradeId];
    if (!gradeBanks || typeof gradeBanks !== "object") return [];
    const out = [];
    Object.keys(gradeBanks).forEach((subjectId) => {
      const bank = gradeBanks[subjectId];
      if (
        bank &&
        Array.isArray(bank.syllabus_nodes) &&
        bank.syllabus_nodes.length > 0 &&
        Array.isArray(bank.questions) &&
        bank.questions.length > 0
      ) {
        out.push({
          gradeId,
          subjectId,
          nodes: bank.syllabus_nodes,
          questions: bank.questions,
          nodeCount: bank.syllabus_nodes.length,
          questionCount: bank.questions.length
        });
      }
    });
    return out;
  }

  /**
   * Build balanced difficulty-ordered pool within one syllabus node (`L`, `M`, `H` interleaved).
   * @param {function(): number} rng
   * @param {object[]} items
   * @returns {object[]}
   */
  function orderNodePool(rng, items) {
    const l = shuffleWith(rng, items.filter((q) => q.diff === "L"));
    const m = shuffleWith(rng, items.filter((q) => q.diff === "M"));
    const h = shuffleWith(rng, items.filter((q) => q.diff === "H"));
    const other = shuffleWith(rng, items.filter((q) => q.diff !== "L" && q.diff !== "M" && q.diff !== "H"));
    const out = [];
    const maxLen = Math.max(l.length, m.length, h.length, other.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < l.length) out.push(l[i]);
      if (i < m.length) out.push(m[i]);
      if (i < h.length) out.push(h[i]);
      if (i < other.length) out.push(other[i]);
    }
    return out;
  }

  /**
   * Select up to `count` diagnostic questions covering all syllabus nodes,
   * prioritizing unprobed or failing prerequisite nodes detected from `priorAttempts`.
   *
   * @param {DiagnosticBank} bank
   * @param {{ count?: number, priorAttempts?: object[], seed?: number }} [opts]
   * @returns {object[]}
   */
  function selectDiagnosticQuestions(bank, opts) {
    if (!bank || !Array.isArray(bank.questions) || !Array.isArray(bank.syllabus_nodes)) return [];
    const options = opts || {};
    const targetCount = Math.min(
      Math.max(1, Number(options.count) || DEFAULT_QUESTION_COUNT),
      bank.questions.length
    );
    const rng = mulberry32(options.seed !== undefined ? Number(options.seed) : Date.now());
    const prior = Array.isArray(options.priorAttempts) ? options.priorAttempts : [];

    const nodeById = new Map();
    bank.syllabus_nodes.forEach((n) => nodeById.set(n.id, n));

    const priorStats = new Map();
    prior.forEach((a) => {
      if (!a || typeof a !== "object") return;
      const nid = a.syllabus_node_id || a.syllabusNodeId || a.subtopic_id || a.subtopicId;
      if (!nid || !nodeById.has(nid)) return;
      const st = priorStats.get(nid) || { attempts: 0, wrong: 0 };
      st.attempts++;
      const ok = a.is_correct === true || a.is_correct === 1 || a.isCorrect === true || a.isCorrect === 1;
      if (!ok) st.wrong++;
      priorStats.set(nid, st);
    });

    const priorityIds = [];
    const prioritySet = new Set();
    bank.syllabus_nodes.forEach((n) => {
      if (!n.prerequisite_node_id || !nodeById.has(n.prerequisite_node_id)) return;
      const st = priorStats.get(n.id);
      if (!st || st.attempts === 0 || st.wrong / st.attempts < 0.5) return;
      const preId = n.prerequisite_node_id;
      const preSt = priorStats.get(preId);
      if (!preSt || preSt.attempts === 0 || preSt.wrong / preSt.attempts >= 0.5) {
        if (!prioritySet.has(preId)) {
          prioritySet.add(preId);
          priorityIds.push(preId);
        }
      }
    });

    const pools = new Map();
    bank.syllabus_nodes.forEach((n) => {
      pools.set(
        n.id,
        orderNodePool(
          rng,
          bank.questions.filter((q) => q.syllabus_node_id === n.id)
        )
      );
    });

    const picked = [];
    const usedIds = new Set();
    const takeFrom = (nodeId) => {
      const pool = pools.get(nodeId) || [];
      while (pool.length > 0) {
        const q = pool.shift();
        if (!usedIds.has(q.id)) {
          usedIds.add(q.id);
          picked.push(q);
          return true;
        }
      }
      return false;
    };

    const nodeCount = bank.syllabus_nodes.length;
    const basePerNode = nodeCount > 0 ? Math.floor(targetCount / nodeCount) : 0;
    for (let round = 0; round < basePerNode; round++) {
      for (let i = 0; i < nodeCount && picked.length < targetCount; i++) {
        takeFrom(bank.syllabus_nodes[i].id);
      }
    }

    // Prioritize extra slots on prerequisite nodes flagged from prior failures
    let guard = 0;
    while (picked.length < targetCount && priorityIds.length > 0 && guard < 50) {
      guard++;
      let progressed = false;
      for (let i = 0; i < priorityIds.length && picked.length < targetCount; i++) {
        if (takeFrom(priorityIds[i])) progressed = true;
      }
      if (!progressed) break;
    }

    // Fill remaining slots evenly across all nodes
    const shuffledNodes = shuffleWith(rng, bank.syllabus_nodes);
    guard = 0;
    while (picked.length < targetCount && guard < 100) {
      guard++;
      let progressed = false;
      for (let i = 0; i < shuffledNodes.length && picked.length < targetCount; i++) {
        if (takeFrom(shuffledNodes[i].id)) progressed = true;
      }
      if (!progressed) break;
    }

    return shuffleWith(rng, picked).map((q) => {
      const node = nodeById.get(q.syllabus_node_id) || {};
      const origOpts = LETTERS.map((origKey) => ({
        origKey,
        text: q.options_json && q.options_json[origKey] ? q.options_json[origKey] : "",
        isCorrect: origKey === q.correct_option
      }));
      const shuffledOpts = shuffleWith(rng, origOpts);
      const correctIdx = shuffledOpts.findIndex((o) => o.isCorrect);
      const correctLetter = LETTERS[correctIdx >= 0 ? correctIdx : 0];
      return {
        id: q.id,
        syllabus_node_id: q.syllabus_node_id,
        chapter_id: node.chapter_id || null,
        topic_name: node.topic_name || "",
        subtopic_name: node.subtopic_name || q.syllabus_node_id,
        prerequisite_node_id: node.prerequisite_node_id || null,
        expected_time_ms: Number(node.expected_time_ms) || 40000,
        difficulty_1_to_5: Number(q.difficulty_1_to_5) || 2,
        diff: q.diff || "M",
        bloom_level: node.bloom_level || "Apply",
        prompt_text: q.prompt_text,
        options: shuffledOpts.map((o, idx) => ({
          letter: LETTERS[idx],
          origKey: o.origKey,
          text: o.text
        })),
        correctLetter,
        origCorrectOption: q.correct_option,
        explanation_text: q.explanation_text || ""
      };
    });
  }

  /**
   * Create a new in-progress diagnostic session state.
   *
   * @param {{ studentId: string, gradeId: string, subjectId: string, bank: DiagnosticBank, priorAttempts?: object[], count?: number, seed?: number, nowMs?: number, perfNow?: number }} params
   * @returns {object}
   */
  function createSessionState(params) {
    const p = params || {};
    const nowMs = Number.isFinite(Number(p.nowMs)) ? Number(p.nowMs) : Date.now();
    const perfNow = Number.isFinite(Number(p.perfNow)) ? Number(p.perfNow) : 0;
    const prior = Array.isArray(p.priorAttempts) ? p.priorAttempts : [];
    const nodeSet = new Set(((p.bank && p.bank.syllabus_nodes) || []).map((n) => n.id));
    const hasPriorForSubject = prior.some(
      (a) =>
        a &&
        ((p.subjectId && a.subjectId === p.subjectId) ||
          nodeSet.has(a.syllabus_node_id || a.syllabusNodeId || a.subtopic_id || ""))
    );
    const items = selectDiagnosticQuestions(p.bank, {
      count: p.count || DEFAULT_QUESTION_COUNT,
      priorAttempts: prior,
      seed: p.seed !== undefined ? p.seed : nowMs
    });

    return {
      id: `diag_${nowMs.toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
      student_id: String(p.studentId || ""),
      gradeId: String(p.gradeId || "t2"),
      subjectId: String(p.subjectId || "math"),
      session_type: hasPriorForSubject ? "WEEKLY_CHECKUP" : "INITIAL_DIAGNOSTIC",
      started_at: formatMytIso(nowMs),
      completed_at: null,
      currentIndex: 0,
      questionShownAtPerf: perfNow,
      awaitingNext: false,
      items,
      attempts: []
    };
  }

  /**
   * Reset the silent per-question clock when a question is shown or resumed.
   *
   * @param {object} session
   * @param {number} perfNow
   */
  function markQuestionShown(session, perfNow) {
    if (!session) return;
    session.questionShownAtPerf = Number.isFinite(Number(perfNow)) ? Number(perfNow) : 0;
    session.awaitingNext = false;
  }

  /**
   * Record one answer, silently measuring elapsed ms via `perfNow` and classifying
   * via `Diagnostics.classifyAttempt`.
   *
   * @param {object} session
   * @param {string} pickedLetter
   * @param {{ perfNow: number, nowMs?: number }} timing
   * @returns {{ attempt: object, item: object, isLast: boolean }|null}
   */
  function recordQuestionAnswer(session, pickedLetter, timing) {
    if (!session || session.awaitingNext || session.completed_at) return null;
    const item = session.items && session.items[session.currentIndex];
    if (!item) return null;

    const t = timing || {};
    const perfNow = Number.isFinite(Number(t.perfNow)) ? Number(t.perfNow) : session.questionShownAtPerf;
    const nowMs = Number.isFinite(Number(t.nowMs)) ? Number(t.nowMs) : Date.now();
    const cleanPick = String(pickedLetter || "").trim().toUpperCase();
    const timeSpentMs = Math.max(0, Math.round(perfNow - (Number(session.questionShownAtPerf) || 0)));
    const isCorrect = cleanPick === item.correctLetter;
    const classification = Diagnostics
      ? Diagnostics.classifyAttempt(isCorrect, timeSpentMs, item.expected_time_ms)
      : isCorrect
        ? "MASTERY"
        : "CONCEPTUAL_GAP";

    const attempt = {
      id: `${session.id}_a${session.attempts.length + 1}`,
      session_id: session.id,
      student_id: session.student_id,
      subjectId: session.subjectId,
      grade_level: session.gradeId,
      question_id: item.id,
      syllabus_node_id: item.syllabus_node_id,
      prerequisite_node_id: item.prerequisite_node_id || null,
      expected_time_ms: item.expected_time_ms,
      is_correct: isCorrect ? 1 : 0,
      time_spent_ms: timeSpentMs,
      error_classification: classification,
      answered_at_myt: formatMytIso(nowMs),
      picked_option: cleanPick,
      correct_option: item.correctLetter
    };

    session.attempts.push(attempt);
    session.awaitingNext = true;

    const isLast = session.currentIndex >= session.items.length - 1;
    if (isLast) {
      session.completed_at = formatMytIso(nowMs);
    }

    return { attempt, item, isLast };
  }

  /**
   * Advance from explanation feedback to the next question and reset the silent timer.
   *
   * @param {object} session
   * @param {number} perfNow
   * @returns {boolean}
   */
  function advanceToNextQuestion(session, perfNow) {
    if (!session || !Array.isArray(session.items)) return false;
    if (session.currentIndex + 1 >= session.items.length) return false;
    session.currentIndex += 1;
    markQuestionShown(session, perfNow);
    return true;
  }

  /**
   * Build persistence payload + kid-friendly completion summary.
   * Deliberately omits parent-facing habit/fatigue diagnostics.
   *
   * @param {object} session
   * @returns {{ sessionRecord: object, attemptLogs: object[], score: number, total: number, pct: number, masteredSubtopics: object[], focusSubtopics: object[] }}
   */
  function buildSessionSummary(session) {
    const items = Array.isArray(session && session.items) ? session.items : [];
    const attempts = Array.isArray(session && session.attempts) ? session.attempts : [];
    const total = items.length;
    const score = attempts.filter((a) => a.is_correct === 1 || a.is_correct === true).length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    const itemById = new Map();
    items.forEach((it) => itemById.set(it.id, it));

    const byNode = new Map();
    attempts.forEach((a) => {
      const it = itemById.get(a.question_id) || {};
      const nid = a.syllabus_node_id;
      const rec = byNode.get(nid) || {
        nodeId: nid,
        topicName: it.topic_name || "",
        subtopicName: it.subtopic_name || nid,
        correct: 0,
        total: 0
      };
      rec.total++;
      if (a.is_correct === 1 || a.is_correct === true) rec.correct++;
      byNode.set(nid, rec);
    });

    const masteredSubtopics = [];
    const focusSubtopics = [];
    byNode.forEach((rec) => {
      if (rec.correct === rec.total) masteredSubtopics.push(rec);
      else focusSubtopics.push(rec);
    });

    return {
      sessionRecord: {
        id: session.id,
        student_id: session.student_id,
        gradeId: session.gradeId,
        subjectId: session.subjectId,
        session_type: session.session_type,
        started_at: session.started_at,
        completed_at: session.completed_at,
        score,
        total,
        pct,
        synced: false
      },
      attemptLogs: attempts.slice(),
      score,
      total,
      pct,
      masteredSubtopics,
      focusSubtopics
    };
  }

  return {
    DEFAULT_QUESTION_COUNT,
    formatMytIso,
    getAvailableBanks,
    selectDiagnosticQuestions,
    createSessionState,
    markQuestionShown,
    recordQuestionAnswer,
    advanceToNextQuestion,
    buildSessionSummary
  };
});
