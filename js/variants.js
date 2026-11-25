/**
 * Adaptive Variant Pool Engine ("Latihan Rawak", v5).
 * Pure UMD module with strict JSDoc types, zero DOM/storage writes,
 * and zero mutation of input arguments.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.Variants = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  const SESSION_LENGTH = 10;
  const COOLDOWN_DRAWS = 8;
  const MASTERY_MIN_UNIQUE = 3;
  const MASTERY_CONSECUTIVE = 2;
  const DIFF_ORDER = Object.freeze(["L", "M", "H"]);

  const MYT_OFFSET_MS = 8 * 60 * 60 * 1000;
  const DIFF_RANK = { L: 0, M: 1, H: 2 };
  const DIFF_FALLBACKS = {
    H: ["H", "M", "L"],
    M: ["M", "L", "H"],
    L: ["L", "M", "H"]
  };
  const STATUS_ORDER = {
    lemah: 0,
    "belum cukup data": 1,
    kuat: 2
  };

  /**
   * @typedef {"L"|"M"|"H"} Difficulty
   */

  /**
   * @typedef {"kuat"|"lemah"|"belum cukup data"} SkillStatus
   */

  /**
   * @typedef {object} VariantSkillState
   * @property {Difficulty} targetDiff
   * @property {number} consecutiveCorrect
   * @property {string[]} correctQuestionIds
   * @property {number} attempts
   * @property {number} correct
   * @property {number} wrong
   */

  /**
   * @typedef {object} RetryQueueEntry
   * @property {string} skill
   * @property {string} unit
   * @property {Difficulty} maxDiff
   * @property {string} excludeQuestionId
   * @property {number} queuedAtDraw
   * @property {string|null} queuedInSession
   * @property {number} queuedAtSessionIndex
   */

  /**
   * @typedef {object} VariantState
   * @property {number} drawCount
   * @property {Record<string, number>} lastDrawnAt
   * @property {Record<string, VariantSkillState>} skills
   * @property {RetryQueueEntry[]} retryQueue
   * @property {number} sessionCount
   */

  /**
   * @typedef {object} VariantQuestion
   * @property {string} id
   * @property {string} unit
   * @property {string} skill
   * @property {Difficulty} diff
   * @property {string} q
   * @property {string[]} options
   * @property {number} correctIndex
   * @property {string} explanation
   * @property {string} ref
   */

  /**
   * @typedef {object} VariantAttempt
   * @property {string} id
   * @property {string} questionId
   * @property {string} unit
   * @property {string} skill
   * @property {Difficulty} diff
   * @property {boolean} correct
   * @property {boolean} isCorrect
   * @property {number|null} selectedIndex
   * @property {string} chosenText
   * @property {string} correctText
   * @property {number} time_spent_ms
   * @property {number} elapsedSec
   * @property {string} answered_at_myt
   * @property {VariantQuestion} qObj
   */

  /**
   * @typedef {object} VariantSession
   * @property {string} id
   * @property {string|number} seed
   * @property {number} rngStep
   * @property {number} targetCount
   * @property {string[]} tickedUnits
   * @property {string[]} usedQuestionIds
   * @property {Record<string, number>} drawnSkillCounts
   * @property {VariantAttempt[]} answers
   * @property {VariantQuestion|null} currentQuestion
   * @property {boolean} completed
   */

  /**
   * @typedef {object} SkillSummary
   * @property {string} skillId
   * @property {string} skillName
   * @property {string} unitId
   * @property {string} unitName
   * @property {number} attempts
   * @property {number} correct
   * @property {number} wrong
   * @property {number} pct
   * @property {number} uniqueCorrect
   * @property {number} consecutiveCorrect
   * @property {Difficulty} targetDiff
   * @property {boolean} mastered
   * @property {SkillStatus} status
   * @property {boolean} touchedInSession
   */

  /**
   * @typedef {object} SessionSummary
   * @property {number} score
   * @property {number} total
   * @property {number} pct
   * @property {SkillSummary[]} skills
   * @property {string[]} unitIds
   * @property {VariantAttempt[]} answers
   */

  /**
   * Normalize a difficulty tag into `"L"`, `"M"`, or `"H"`.
   * @param {*} diff
   * @param {Difficulty} [fallback="L"]
   * @returns {Difficulty}
   */
  function normalizeDiff(diff, fallback) {
    if (diff === "L" || diff === "M" || diff === "H") return diff;
    return fallback || "L";
  }

  /**
   * Rank a difficulty tag (`L: 0, M: 1, H: 2`).
   * @param {*} diff
   * @returns {number}
   */
  function diffRank(diff) {
    return Object.prototype.hasOwnProperty.call(DIFF_RANK, diff) ? DIFF_RANK[diff] : 0;
  }

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
   * Derive a deterministic unsigned 32-bit integer seed from a string or numeric
   * seed and step counter so sessions remain plain JSON without mutable closures.
   *
   * @param {string|number} seed
   * @param {number} [step=0]
   * @returns {number}
   */
  function hashSeed(seed, step) {
    const base = seed === undefined || seed === null ? "seed" : String(seed);
    const stepNum = Number.isFinite(Number(step)) ? Math.floor(Number(step)) : 0;
    const str = `${base}::${stepNum}`;
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    h ^= h >>> 16;
    h = Math.imul(h, 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return (h >>> 0) || 1;
  }

  /**
   * Deterministic Mulberry32 PRNG supporting numeric or string seeds.
   *
   * @param {number|string} seed
   * @returns {function(): number}
   */
  function mulberry32(seed) {
    let a =
      typeof seed === "string"
        ? hashSeed(seed, 0)
        : (Number.isFinite(Number(seed)) ? Number(seed) : 1) >>> 0 || 1;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Return a newly shuffled copy of `arr` using `rng`.
   *
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
   * Create a fresh empty persistent variant state.
   * @returns {VariantState}
   */
  function createInitialState() {
    return {
      drawCount: 0,
      lastDrawnAt: {},
      skills: {},
      retryQueue: [],
      sessionCount: 0
    };
  }

  /**
   * Clone a single skill state object safely.
   * @param {*} s
   * @returns {VariantSkillState}
   */
  function cloneSkillState(s) {
    const src = s && typeof s === "object" ? s : {};
    const rawIds = Array.isArray(src.correctQuestionIds) ? src.correctQuestionIds : [];
    const seen = new Set();
    const correctQuestionIds = [];
    for (let i = 0; i < rawIds.length; i++) {
      const id = rawIds[i];
      if (typeof id === "string" && id && !seen.has(id)) {
        seen.add(id);
        correctQuestionIds.push(id);
      }
    }
    return {
      targetDiff: normalizeDiff(src.targetDiff, "L"),
      consecutiveCorrect: Math.max(0, Math.floor(Number(src.consecutiveCorrect) || 0)),
      correctQuestionIds,
      attempts: Math.max(0, Math.floor(Number(src.attempts) || 0)),
      correct: Math.max(0, Math.floor(Number(src.correct) || 0)),
      wrong: Math.max(0, Math.floor(Number(src.wrong) || 0))
    };
  }

  /**
   * Deep-clone and sanitize a `VariantState` without mutating the input.
   *
   * @param {VariantState|null|undefined} state
   * @returns {VariantState}
   */
  function normalizeState(state) {
    if (!state || typeof state !== "object") {
      return createInitialState();
    }
    const lastDrawnAt = {};
    if (state.lastDrawnAt && typeof state.lastDrawnAt === "object") {
      const keys = Object.keys(state.lastDrawnAt);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const v = Number(state.lastDrawnAt[k]);
        if (Number.isFinite(v) && v >= 0) {
          lastDrawnAt[k] = v;
        }
      }
    }

    const skills = {};
    if (state.skills && typeof state.skills === "object") {
      const skillKeys = Object.keys(state.skills);
      for (let i = 0; i < skillKeys.length; i++) {
        const sk = skillKeys[i];
        if (state.skills[sk] && typeof state.skills[sk] === "object") {
          skills[sk] = cloneSkillState(state.skills[sk]);
        }
      }
    }

    const retryQueue = [];
    if (Array.isArray(state.retryQueue)) {
      for (let i = 0; i < state.retryQueue.length; i++) {
        const entry = state.retryQueue[i];
        if (!entry || typeof entry !== "object" || !entry.skill) continue;
        retryQueue.push({
          skill: String(entry.skill),
          unit: entry.unit !== undefined && entry.unit !== null ? String(entry.unit) : "",
          maxDiff: normalizeDiff(entry.maxDiff, "L"),
          excludeQuestionId:
            entry.excludeQuestionId !== undefined && entry.excludeQuestionId !== null
              ? String(entry.excludeQuestionId)
              : "",
          queuedAtDraw: Number.isFinite(Number(entry.queuedAtDraw)) ? Number(entry.queuedAtDraw) : 0,
          queuedInSession:
            entry.queuedInSession !== undefined && entry.queuedInSession !== null
              ? entry.queuedInSession
              : null,
          queuedAtSessionIndex: Number.isFinite(Number(entry.queuedAtSessionIndex))
            ? Number(entry.queuedAtSessionIndex)
            : 0
        });
      }
    }

    return {
      drawCount: Math.max(0, Math.floor(Number(state.drawCount) || 0)),
      lastDrawnAt,
      skills,
      retryQueue,
      sessionCount: Math.max(0, Math.floor(Number(state.sessionCount) || 0))
    };
  }

  /**
   * Clone a question object safely.
   * @param {*} q
   * @returns {VariantQuestion|null}
   */
  function cloneQuestion(q) {
    if (!q || typeof q !== "object") return null;
    return {
      id: q.id,
      unit: q.unit,
      skill: q.skill,
      diff: normalizeDiff(q.diff, "L"),
      q: q.q,
      options: Array.isArray(q.options) ? q.options.slice() : [],
      correctIndex: typeof q.correctIndex === "number" ? q.correctIndex : 0,
      explanation: q.explanation || "",
      ref: q.ref || ""
    };
  }

  /**
   * Clone an attempt object safely.
   * @param {*} a
   * @returns {VariantAttempt}
   */
  function cloneAttempt(a) {
    const src = a && typeof a === "object" ? a : {};
    const copy = Object.assign({}, src);
    if (src.qObj && typeof src.qObj === "object") {
      copy.qObj = cloneQuestion(src.qObj);
    }
    return copy;
  }

  /**
   * Deep-clone and sanitize a `VariantSession` without mutating the input.
   * @param {VariantSession|null|undefined} session
   * @returns {VariantSession|null}
   */
  function normalizeSession(session) {
    if (!session || typeof session !== "object") return null;
    const rawCount =
      session.targetCount === undefined || session.targetCount === null
        ? SESSION_LENGTH
        : Number(session.targetCount);
    const targetCount = Number.isFinite(rawCount) ? Math.max(0, Math.floor(rawCount)) : SESSION_LENGTH;

    const drawnSkillCounts = {};
    if (session.drawnSkillCounts && typeof session.drawnSkillCounts === "object") {
      const keys = Object.keys(session.drawnSkillCounts);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        drawnSkillCounts[k] = Math.max(0, Math.floor(Number(session.drawnSkillCounts[k]) || 0));
      }
    }

    return {
      id: session.id !== undefined && session.id !== null ? String(session.id) : "",
      seed: session.seed !== undefined && session.seed !== null ? session.seed : 1,
      rngStep: Math.max(0, Math.floor(Number(session.rngStep) || 0)),
      targetCount,
      tickedUnits: Array.isArray(session.tickedUnits) ? session.tickedUnits.slice() : [],
      usedQuestionIds: Array.isArray(session.usedQuestionIds) ? session.usedQuestionIds.slice() : [],
      drawnSkillCounts,
      answers: Array.isArray(session.answers) ? session.answers.map(cloneAttempt) : [],
      currentQuestion: session.currentQuestion ? cloneQuestion(session.currentQuestion) : null,
      completed: Boolean(session.completed)
    };
  }

  /**
   * Step difficulty up by one tier (`L -> M -> H`, capped at `H`).
   * @param {Difficulty} diff
   * @returns {Difficulty}
   */
  function stepDiffUp(diff) {
    if (diff === "L") return "M";
    if (diff === "M" || diff === "H") return "H";
    return "L";
  }

  /**
   * Step difficulty down by one tier (`H -> M -> L`, floored at `L`).
   * @param {Difficulty} diff
   * @returns {Difficulty}
   */
  function stepDiffDown(diff) {
    if (diff === "H") return "M";
    if (diff === "M" || diff === "L") return "L";
    return "L";
  }

  /**
   * Determine whether a skill has reached mastery (`>= 3` unique correct
   * question IDs AND `>= 2` consecutive correct answers).
   *
   * @param {VariantSkillState|null|undefined} skillState
   * @returns {boolean}
   */
  function isSkillMastered(skillState) {
    if (!skillState || typeof skillState !== "object") return false;
    const ids = Array.isArray(skillState.correctQuestionIds) ? skillState.correctQuestionIds : [];
    const uniqueCount = new Set(ids).size;
    return uniqueCount >= MASTERY_MIN_UNIQUE && (skillState.consecutiveCorrect || 0) >= MASTERY_CONSECUTIVE;
  }

  /**
   * Classify a skill's current mastery status in Bahasa Melayu.
   *
   * @param {VariantSkillState|null|undefined} skillState
   * @returns {SkillStatus}
   */
  function classifySkill(skillState) {
    if (!skillState || (skillState.attempts || 0) < 2) {
      return "belum cukup data";
    }
    if (isSkillMastered(skillState)) {
      return "kuat";
    }
    const pct = Math.round(((skillState.correct || 0) / skillState.attempts) * 100);
    if (pct < 60 || (skillState.consecutiveCorrect || 0) === 0) {
      return "lemah";
    }
    return "belum cukup data";
  }

  /**
   * List subjects for `gradeId` that have both a non-empty variant pool
   * and a curriculum map with non-empty `units`.
   *
   * @param {Record<string, Record<string, object[]>>|null|undefined} poolsRoot
   * @param {Record<string, Record<string, { units: object[] }>>|null|undefined} curriculumRoot
   * @param {string} gradeId
   * @returns {Array<{ gradeId: string, subjectId: string, pool: object[], curriculum: { units: object[] } }>}
   */
  function getAvailablePools(poolsRoot, curriculumRoot, gradeId) {
    if (!poolsRoot || !curriculumRoot || !gradeId) return [];
    const gradePools = poolsRoot[gradeId];
    const gradeCurr = curriculumRoot[gradeId];
    if (!gradePools || typeof gradePools !== "object" || !gradeCurr || typeof gradeCurr !== "object") {
      return [];
    }
    const out = [];
    const subjects = Object.keys(gradePools);
    for (let i = 0; i < subjects.length; i++) {
      const subjectId = subjects[i];
      const pool = gradePools[subjectId];
      const curriculum = gradeCurr[subjectId];
      if (
        Array.isArray(pool) &&
        pool.length > 0 &&
        curriculum &&
        typeof curriculum === "object" &&
        Array.isArray(curriculum.units) &&
        curriculum.units.length > 0
      ) {
        out.push({ gradeId, subjectId, pool, curriculum });
      }
    }
    return out;
  }

  /**
   * Create a new pure variant practice session and advance `state.sessionCount`.
   *
   * @param {{ pool?: object[], tickedUnits?: string[], state?: VariantState|null, count?: number|null, seed?: string|number, sessionId?: string }} [params]
   * @returns {{ session: VariantSession, state: VariantState }}
   */
  function createSession(params) {
    const p = params || {};
    const nextState = normalizeState(p.state);
    nextState.sessionCount += 1;

    const rawCount = p.count === undefined || p.count === null ? SESSION_LENGTH : Number(p.count);
    const targetCount = Number.isFinite(rawCount) ? Math.max(0, Math.floor(rawCount)) : SESSION_LENGTH;

    const seenUnits = new Set();
    const uniqueUnits = [];
    if (Array.isArray(p.tickedUnits)) {
      for (let i = 0; i < p.tickedUnits.length; i++) {
        const u = p.tickedUnits[i];
        if (u !== undefined && u !== null && u !== "" && !seenUnits.has(u)) {
          seenUnits.add(u);
          uniqueUnits.push(u);
        }
      }
    }

    const sessionSeed =
      p.seed !== undefined && p.seed !== null ? p.seed : hashSeed(Date.now(), nextState.sessionCount);
    const sessionId =
      p.sessionId !== undefined && p.sessionId !== null && String(p.sessionId) !== ""
        ? String(p.sessionId)
        : `var_${Date.now().toString(36)}_${nextState.sessionCount}_${hashSeed(sessionSeed, 0).toString(36)}`;

    /** @type {VariantSession} */
    const session = {
      id: sessionId,
      seed: sessionSeed,
      rngStep: 0,
      targetCount,
      tickedUnits: uniqueUnits,
      usedQuestionIds: [],
      drawnSkillCounts: {},
      answers: [],
      currentQuestion: null,
      completed: false
    };

    return { session, state: nextState };
  }

  /**
   * Build a shuffled fresh copy of a raw pool question.
   *
   * @param {object} raw
   * @param {function(): number} rng
   * @returns {VariantQuestion}
   */
  function buildShuffledQuestion(raw, rng) {
    const srcOpts = Array.isArray(raw.options) ? raw.options : [];
    const origCorrect = typeof raw.correctIndex === "number" ? raw.correctIndex : 0;
    const tagged = srcOpts.map((text, idx) => ({
      text,
      isCorrect: idx === origCorrect
    }));
    const shuffled = shuffleWith(rng, tagged);
    const newCorrectIdx = shuffled.findIndex((o) => o.isCorrect);
    return {
      id: raw.id,
      unit: raw.unit,
      skill: raw.skill,
      diff: normalizeDiff(raw.diff, "L"),
      q: raw.q,
      options: shuffled.map((o) => o.text),
      correctIndex: newCorrectIdx >= 0 ? newCorrectIdx : 0,
      explanation: raw.explanation || "",
      ref: raw.ref || ""
    };
  }

  /**
   * Select a candidate from `candidates` using `desiredDiff` preference order,
   * unseen / oldest `lastDrawnAt`, and seeded `rng` tie-breaking.
   *
   * @param {object[]} candidates
   * @param {Difficulty} desiredDiff
   * @param {Record<string, number>} lastDrawnAt
   * @param {function(): number} rng
   * @returns {object|null}
   */
  function pickCandidateByDiff(candidates, desiredDiff, lastDrawnAt, rng) {
    if (!candidates || candidates.length === 0) return null;
    const prefOrder = DIFF_FALLBACKS[desiredDiff] || DIFF_FALLBACKS.L;
    const scored = candidates.map((q) => {
      const prefIdx = prefOrder.indexOf(normalizeDiff(q.diff, "L"));
      const lastDraw = Object.prototype.hasOwnProperty.call(lastDrawnAt, q.id) ? lastDrawnAt[q.id] : -1;
      return {
        q,
        prefIdx: prefIdx >= 0 ? prefIdx : prefOrder.length,
        lastDraw,
        rand: rng()
      };
    });
    scored.sort((a, b) => a.prefIdx - b.prefIdx || a.lastDraw - b.lastDraw || a.rand - b.rand);
    return scored[0].q;
  }

  /**
   * Select a skill and question from `eligible` candidates using skill balance,
   * avoiding back-to-back skill repetition when alternatives exist.
   *
   * @param {object[]} eligible
   * @param {VariantSession} nextSession
   * @param {VariantState} nextState
   * @param {string|null} lastSkill
   * @param {function(): number} rng
   * @returns {object|null}
   */
  function pickFromEligibleNormal(eligible, nextSession, nextState, lastSkill, rng) {
    if (!eligible || eligible.length === 0) return null;
    const bySkill = new Map();
    for (let i = 0; i < eligible.length; i++) {
      const q = eligible[i];
      if (!bySkill.has(q.skill)) bySkill.set(q.skill, []);
      bySkill.get(q.skill).push(q);
    }
    const skillEntries = Array.from(bySkill.keys()).map((skill) => ({
      skill,
      count: nextSession.drawnSkillCounts[skill] || 0,
      sameAsLast: lastSkill && skill === lastSkill ? 1 : 0,
      rand: rng()
    }));
    skillEntries.sort((a, b) => a.count - b.count || a.sameAsLast - b.sameAsLast || a.rand - b.rand);

    const chosenSkill = skillEntries[0].skill;
    const skillState = nextState.skills[chosenSkill];
    const desiredDiff =
      skillState && (skillState.targetDiff === "L" || skillState.targetDiff === "M" || skillState.targetDiff === "H")
        ? skillState.targetDiff
        : rng() < 0.6
          ? "L"
          : "M";

    return pickCandidateByDiff(bySkill.get(chosenSkill), desiredDiff, nextState.lastDrawnAt, rng);
  }

  /**
   * Draw the next question for `session` from `pool` without mutating inputs.
   * Honors `tickedUnits`, 8-draw cooldown, due `retryQueue` items, skill balance,
   * adaptive difficulty, and deterministic option shuffling.
   *
   * @param {object[]} pool
   * @param {VariantSession} session
   * @param {VariantState} state
   * @returns {{ question: VariantQuestion|null, session: VariantSession, state: VariantState, fromRetry: boolean }}
   */
  function drawNextQuestion(pool, session, state) {
    const nextState = normalizeState(state);
    const nextSession = normalizeSession(session);
    if (!nextSession || !Array.isArray(pool) || pool.length === 0) {
      return { question: null, session: nextSession, state: nextState, fromRetry: false };
    }
    if (nextSession.usedQuestionIds.length >= nextSession.targetCount) {
      return { question: null, session: nextSession, state: nextState, fromRetry: false };
    }

    const tickedSet = new Set(nextSession.tickedUnits);
    const tickedPool = pool.filter((q) => q && tickedSet.has(q.unit));
    if (tickedPool.length === 0) {
      return { question: null, session: nextSession, state: nextState, fromRetry: false };
    }

    const sessionUsedSet = new Set(nextSession.usedQuestionIds);
    const nextDraw = nextState.drawCount + 1;
    const isBlocked = (qId) =>
      sessionUsedSet.has(qId) ||
      (Object.prototype.hasOwnProperty.call(nextState.lastDrawnAt, qId) &&
        nextDraw - nextState.lastDrawnAt[qId] <= COOLDOWN_DRAWS);

    const rng = mulberry32(hashSeed(nextSession.seed, nextSession.rngStep));

    let chosenRaw = null;
    let fromRetry = false;

    // 1. Check due retry queue entries
    for (let i = 0; i < nextState.retryQueue.length; i++) {
      const entry = nextState.retryQueue[i];
      if (!tickedSet.has(entry.unit)) continue;

      const isFromPriorSession = entry.queuedInSession !== nextSession.id;
      const hasIntervening = nextSession.usedQuestionIds.length >= (Number(entry.queuedAtSessionIndex) || 0) + 2;
      const isLastSlot = nextSession.usedQuestionIds.length === nextSession.targetCount - 1;
      const noOtherSkillCandidates = !tickedPool.some((q) => !isBlocked(q.id) && q.skill !== entry.skill);

      if (!(isFromPriorSession || hasIntervening || isLastSlot || noOtherSkillCandidates)) {
        continue;
      }

      const maxRank = diffRank(entry.maxDiff);
      const retryCandidates = tickedPool.filter(
        (q) =>
          q.skill === entry.skill &&
          tickedSet.has(q.unit) &&
          q.id !== entry.excludeQuestionId &&
          !isBlocked(q.id) &&
          diffRank(q.diff) <= maxRank
      );

      if (retryCandidates.length === 0) {
        continue;
      }

      const rankedRetry = retryCandidates.map((q) => ({
        q,
        rank: diffRank(q.diff),
        lastDraw: Object.prototype.hasOwnProperty.call(nextState.lastDrawnAt, q.id)
          ? nextState.lastDrawnAt[q.id]
          : -1,
        rand: rng()
      }));
      rankedRetry.sort((a, b) => b.rank - a.rank || a.lastDraw - b.lastDraw || a.rand - b.rand);

      chosenRaw = rankedRetry[0].q;
      nextState.retryQueue.splice(i, 1);
      fromRetry = true;
      break;
    }

    // 2. Normal draw when no due retry fired
    if (!chosenRaw) {
      let lastSkill = null;
      if (nextSession.usedQuestionIds.length > 0) {
        const lastQId = nextSession.usedQuestionIds[nextSession.usedQuestionIds.length - 1];
        const lastQ = pool.find((q) => q && q.id === lastQId);
        if (lastQ && lastQ.skill) {
          lastSkill = lastQ.skill;
        } else if (nextSession.answers.length > 0) {
          lastSkill = nextSession.answers[nextSession.answers.length - 1].skill || null;
        }
      }

      const eligible = tickedPool.filter((q) => !isBlocked(q.id));
      if (eligible.length > 0) {
        chosenRaw = pickFromEligibleNormal(eligible, nextSession, nextState, lastSkill, rng);
      } else {
        const notUsedInSession = tickedPool.filter((q) => !sessionUsedSet.has(q.id));
        if (notUsedInSession.length === 0) {
          return { question: null, session: nextSession, state: nextState, fromRetry: false };
        }
        const getLastDraw = (id) =>
          Object.prototype.hasOwnProperty.call(nextState.lastDrawnAt, id) ? nextState.lastDrawnAt[id] : -1;
        let minDraw = Infinity;
        for (let i = 0; i < notUsedInSession.length; i++) {
          const d = getLastDraw(notUsedInSession[i].id);
          if (d < minDraw) minDraw = d;
        }
        const oldestCandidates = notUsedInSession.filter((q) => getLastDraw(q.id) === minDraw);
        chosenRaw = pickFromEligibleNormal(oldestCandidates, nextSession, nextState, lastSkill, rng);
      }
    }

    if (!chosenRaw) {
      return { question: null, session: nextSession, state: nextState, fromRetry: false };
    }

    const question = buildShuffledQuestion(chosenRaw, rng);

    nextState.drawCount = nextDraw;
    nextState.lastDrawnAt[question.id] = nextDraw;
    nextSession.usedQuestionIds.push(question.id);
    nextSession.drawnSkillCounts[question.skill] = (nextSession.drawnSkillCounts[question.skill] || 0) + 1;
    nextSession.rngStep += 1;
    nextSession.currentQuestion = cloneQuestion(question);

    return {
      question,
      session: nextSession,
      state: nextState,
      fromRetry
    };
  }

  /**
   * Record one answer, updating adaptive difficulty, mastery tracking, retry queue,
   * and session attempt logs without mutating inputs.
   *
   * @param {VariantState|null|undefined} state
   * @param {VariantSession|null|undefined} session
   * @param {{ question: VariantQuestion, selectedIndex?: number|null, isCorrect?: boolean, timeSpentMs?: number, nowMs?: number|Date|string }} payload
   * @returns {{ state: VariantState, session: VariantSession|null, attempt: VariantAttempt, skillState: VariantSkillState }}
   */
  function recordAnswer(state, session, payload) {
    const nextState = normalizeState(state);
    const nextSession = session ? normalizeSession(session) : null;
    const p = payload || {};
    const question = cloneQuestion(p.question) || {
      id: "",
      unit: "",
      skill: "",
      diff: "L",
      q: "",
      options: [],
      correctIndex: 0,
      explanation: "",
      ref: ""
    };

    const hasNumericPick = typeof p.selectedIndex === "number" && Number.isFinite(p.selectedIndex);
    const correctBool = typeof p.selectedIndex === "number" ? p.selectedIndex === question.correctIndex : !!p.isCorrect;

    let skillState = nextState.skills[question.skill];
    if (!skillState) {
      skillState = {
        targetDiff: normalizeDiff(question.diff, "L"),
        consecutiveCorrect: 0,
        correctQuestionIds: [],
        attempts: 0,
        correct: 0,
        wrong: 0
      };
      nextState.skills[question.skill] = skillState;
    }

    skillState.attempts += 1;
    if (correctBool) {
      skillState.correct += 1;
      skillState.consecutiveCorrect += 1;
      if (question.id && !skillState.correctQuestionIds.includes(question.id)) {
        skillState.correctQuestionIds.push(question.id);
      }
      if (skillState.consecutiveCorrect > 0 && skillState.consecutiveCorrect % 2 === 0) {
        skillState.targetDiff = stepDiffUp(skillState.targetDiff);
      }
    } else {
      skillState.wrong += 1;
      skillState.consecutiveCorrect = 0;
      skillState.targetDiff = stepDiffDown(skillState.targetDiff);
      nextState.retryQueue = nextState.retryQueue.filter((e) => e.skill !== question.skill);
      nextState.retryQueue.push({
        skill: question.skill,
        unit: question.unit,
        maxDiff: skillState.targetDiff,
        excludeQuestionId: question.id,
        queuedAtDraw: nextState.drawCount,
        queuedInSession: nextSession ? nextSession.id : null,
        queuedAtSessionIndex: nextSession ? (nextSession.answers || []).length : 0
      });
    }

    const opts = Array.isArray(question.options) ? question.options : [];
    const chosenText =
      hasNumericPick && p.selectedIndex >= 0 && p.selectedIndex < opts.length && opts[p.selectedIndex] !== undefined
        ? opts[p.selectedIndex]
        : "-";
    const correctText =
      typeof question.correctIndex === "number" && opts[question.correctIndex] !== undefined
        ? opts[question.correctIndex]
        : "";
    const timeSpentMs = Math.max(0, Math.round(Number(p.timeSpentMs) || 0));
    const elapsedSec = Math.round((timeSpentMs / 1000) * 10) / 10;

    const attemptId = nextSession
      ? `${nextSession.id}_a${nextSession.answers.length + 1}`
      : `var_a_${nextState.drawCount}_${skillState.attempts}`;

    /** @type {VariantAttempt} */
    const attempt = {
      id: attemptId,
      questionId: question.id,
      unit: question.unit,
      skill: question.skill,
      diff: question.diff,
      correct: correctBool,
      isCorrect: correctBool,
      selectedIndex: hasNumericPick ? p.selectedIndex : null,
      chosenText,
      correctText,
      time_spent_ms: timeSpentMs,
      elapsedSec,
      answered_at_myt: formatMytIso(p.nowMs),
      qObj: cloneQuestion(question)
    };

    if (nextSession) {
      nextSession.answers.push(cloneAttempt(attempt));
      nextSession.currentQuestion = null;
      nextSession.completed = nextSession.answers.length >= nextSession.targetCount;
    }

    return {
      state: nextState,
      session: nextSession,
      attempt,
      skillState: cloneSkillState(skillState)
    };
  }

  /**
   * Build a skill summary entry from a skill ID, names, and state.
   *
   * @param {string} skillId
   * @param {string} skillName
   * @param {string} unitId
   * @param {string} unitName
   * @param {VariantSkillState|null|undefined} skillState
   * @param {boolean} touchedInSession
   * @returns {SkillSummary}
   */
  function buildSkillSummaryItem(skillId, skillName, unitId, unitName, skillState, touchedInSession) {
    const attempts = skillState ? skillState.attempts : 0;
    const correct = skillState ? skillState.correct : 0;
    const wrong = skillState ? skillState.wrong : 0;
    const pct = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    const uniqueCorrect = skillState ? new Set(skillState.correctQuestionIds).size : 0;
    const consecutiveCorrect = skillState ? skillState.consecutiveCorrect : 0;
    const targetDiff = skillState ? skillState.targetDiff : "L";
    return {
      skillId,
      skillName,
      unitId,
      unitName,
      attempts,
      correct,
      wrong,
      pct,
      uniqueCorrect,
      consecutiveCorrect,
      targetDiff,
      mastered: isSkillMastered(skillState),
      status: classifySkill(skillState),
      touchedInSession: Boolean(touchedInSession)
    };
  }

  /**
   * Summarize curriculum skills against `state`, optionally filtering by `unitIds`
   * or `onlySkillIds` and flagging `sessionSkillIds`.
   *
   * @param {VariantState|null|undefined} state
   * @param {{ units?: Array<{ id: string, name?: string, textbookUnit?: string, skills?: Array<{ id: string, name?: string }> }> }|null|undefined} curriculum
   * @param {{ unitIds?: string[]|Set<string>, onlySkillIds?: string[]|Set<string>, sessionSkillIds?: string[]|Set<string> }} [options]
   * @returns {SkillSummary[]}
   */
  function summarizeSkills(state, curriculum, options) {
    if (!curriculum || !Array.isArray(curriculum.units)) return [];
    const normState = normalizeState(state);
    const opts = options || {};
    const unitFilter =
      opts.unitIds !== undefined && opts.unitIds !== null ? new Set(Array.from(opts.unitIds)) : null;
    const skillFilter =
      opts.onlySkillIds !== undefined && opts.onlySkillIds !== null
        ? new Set(Array.from(opts.onlySkillIds))
        : null;
    const sessionSkillSet =
      opts.sessionSkillIds !== undefined && opts.sessionSkillIds !== null
        ? new Set(Array.from(opts.sessionSkillIds))
        : new Set();

    const out = [];
    for (let i = 0; i < curriculum.units.length; i++) {
      const unit = curriculum.units[i];
      if (!unit || !unit.id) continue;
      if (unitFilter && !unitFilter.has(unit.id)) continue;
      const skills = Array.isArray(unit.skills) ? unit.skills : [];
      const unitName = unit.name || unit.textbookUnit || unit.id;
      for (let j = 0; j < skills.length; j++) {
        const skill = skills[j];
        if (!skill || !skill.id) continue;
        if (skillFilter && !skillFilter.has(skill.id)) continue;
        const skillState = normState.skills[skill.id] || null;
        out.push(
          buildSkillSummaryItem(
            skill.id,
            skill.name || skill.id,
            unit.id,
            unitName,
            skillState,
            sessionSkillSet.has(skill.id)
          )
        );
      }
    }
    return out;
  }

  /**
   * Summarize one completed or in-progress session alongside cumulative mastery
   * status from `state` and names from `curriculum`, sorted `lemah` ->
   * `belum cukup data` -> `kuat`.
   *
   * @param {VariantSession|null|undefined} session
   * @param {VariantState|null|undefined} state
   * @param {{ units?: object[] }|null|undefined} curriculum
   * @returns {SessionSummary}
   */
  function summarizeSession(session, state, curriculum) {
    const normSession = normalizeSession(session);
    const normState = normalizeState(state);
    const answers = normSession ? normSession.answers.map(cloneAttempt) : [];
    const total = answers.length;
    const score = answers.filter((a) => a && (a.correct === true || a.isCorrect === true)).length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    const unitSet = new Set();
    if (normSession && normSession.tickedUnits.length > 0) {
      for (let i = 0; i < normSession.tickedUnits.length; i++) {
        unitSet.add(normSession.tickedUnits[i]);
      }
    } else {
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] && answers[i].unit) unitSet.add(answers[i].unit);
      }
    }

    const encounteredSkillSet = new Set();
    const skillUnitFallback = new Map();
    for (let i = 0; i < answers.length; i++) {
      const a = answers[i];
      if (a && a.skill) {
        encounteredSkillSet.add(a.skill);
        if (!skillUnitFallback.has(a.skill)) {
          skillUnitFallback.set(a.skill, a.unit || "");
        }
      }
    }
    const encounteredSkills = Array.from(encounteredSkillSet);

    const skills = summarizeSkills(normState, curriculum, {
      onlySkillIds: encounteredSkills,
      sessionSkillIds: encounteredSkills
    });

    const mappedIds = new Set(skills.map((s) => s.skillId));
    for (let i = 0; i < encounteredSkills.length; i++) {
      const sid = encounteredSkills[i];
      if (!mappedIds.has(sid)) {
        const uid = skillUnitFallback.get(sid) || "";
        skills.push(
          buildSkillSummaryItem(sid, sid, uid, uid, normState.skills[sid] || null, true)
        );
      }
    }

    skills.sort((a, b) => {
      const sa = Object.prototype.hasOwnProperty.call(STATUS_ORDER, a.status) ? STATUS_ORDER[a.status] : 9;
      const sb = Object.prototype.hasOwnProperty.call(STATUS_ORDER, b.status) ? STATUS_ORDER[b.status] : 9;
      return sa - sb;
    });

    return {
      score,
      total,
      pct,
      skills,
      unitIds: Array.from(unitSet),
      answers
    };
  }

  return {
    SESSION_LENGTH,
    COOLDOWN_DRAWS,
    MASTERY_MIN_UNIQUE,
    MASTERY_CONSECUTIVE,
    DIFF_ORDER,
    formatMytIso,
    mulberry32,
    hashSeed,
    createInitialState,
    normalizeState,
    stepDiffUp,
    stepDiffDown,
    isSkillMastered,
    classifySkill,
    getAvailablePools,
    createSession,
    drawNextQuestion,
    recordAnswer,
    summarizeSkills,
    summarizeSession
  };
});
