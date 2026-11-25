/**
 * Diagnostic Analytics Engine (v5).
 * Pure UMD module with strict JSDoc types and zero DOM/storage side effects.
 * Implements MyKids Study Arena KPM grading, careless-vs-clueless classification,
 * prerequisite root-cause tracing, late-night MYT fatigue detection, and parent summaries.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./gradeBands.js"));
  } else {
    const App = (root.App = root.App || {});
    App.Diagnostics = factory(App.GradeBands);
  }
})(typeof window !== "undefined" ? window : globalThis, function (GradeBands) {
  "use strict";

  const CARELESS_RATIO = 0.4;
  const LOW_FLUENCY_RATIO = 1.5;
  const FALLBACK_CARELESS_MS = 4000;
  const PREREQUISITE_FAIL_THRESHOLD = 0.5;
  const LATE_NIGHT_START_HOUR_MYT = 21;
  const LATE_NIGHT_END_HOUR_MYT = 5;
  const FATIGUE_DROP_PCT_POINTS = 20;
  const MYT_OFFSET_MINUTES = 480;

  /** @typedef {'MASTERY'|'LOW_FLUENCY'|'CARELESS_RUSH'|'CONCEPTUAL_GAP'} ErrorClassification */
  /** @typedef {'d6'|'t2'|'t4'} NormalizedGradeId */
  /** @typedef {'NONE'|'FALSE_COMFORT'|'CRITICAL'|'PASS_WITHOUT_CREDIT'|'FAIL'} KpmAlertLevel */
  /** @typedef {'NONE'|'UNPROBED'|'CONFIRMED_GAP'|'CONFIRMED_GAP_NEEDS_DEEPER_PROBE'|'PREREQUISITE_MASTERED'} PrerequisiteStatus */

  /**
   * @typedef {object} ClassifyOptions
   * @property {boolean} [timedOut]
   */

  /**
   * @typedef {object} KpmGradeResult
   * @property {number} pct
   * @property {string} grade
   * @property {string} descriptor
   * @property {boolean} isFalseComfortZone
   * @property {KpmAlertLevel} alertLevel
   * @property {'UASA'|'SPM'} scale
   * @property {boolean} verified
   */

  /**
   * @typedef {object} SyllabusNodeInput
   * @property {string} id
   * @property {string} [subject]
   * @property {string} [grade_level]
   * @property {string} [gradeLevel]
   * @property {string} [topic_name]
   * @property {string} [topicName]
   * @property {string} [subtopic_name]
   * @property {string} [subtopicName]
   * @property {string|null} [prerequisite_node_id]
   * @property {string|null} [prerequisiteNodeId]
   * @property {string|null} [prerequisite_subtopic_id]
   * @property {string|null} [prerequisiteSubtopicId]
   * @property {number|null} [expected_time_ms]
   * @property {number|null} [expectedTimeMs]
   * @property {string} [bloom_level]
   * @property {string} [bloomLevel]
   */

  /**
   * @typedef {object} DiagnosticAttemptInput
   * @property {string} [id]
   * @property {string} [session_id]
   * @property {string} [sessionId]
   * @property {string} [student_id]
   * @property {string} [studentId]
   * @property {string} [question_id]
   * @property {string} [questionId]
   * @property {string} [syllabus_node_id]
   * @property {string} [syllabusNodeId]
   * @property {string} [subtopic_id]
   * @property {string} [subtopicId]
   * @property {string} [topic_id]
   * @property {string} [topicId]
   * @property {string} [topic_name]
   * @property {string} [topicName]
   * @property {string} [subtopic_name]
   * @property {string} [subtopicName]
   * @property {string|null} [prerequisite_node_id]
   * @property {string|null} [prerequisiteNodeId]
   * @property {string|null} [prerequisite_subtopic_id]
   * @property {string|null} [prerequisiteSubtopicId]
   * @property {boolean|number} [is_correct]
   * @property {boolean|number} [isCorrect]
   * @property {number} [time_spent_ms]
   * @property {number} [timeSpentMs]
   * @property {number} [elapsedSec]
   * @property {number|null} [expected_time_ms]
   * @property {number|null} [expectedTimeMs]
   * @property {string} [error_classification]
   * @property {string} [errorClassification]
   * @property {string|number|Date} [answered_at_myt]
   * @property {string|number|Date} [answeredAtMyt]
   * @property {string|number|Date} [answered_at]
   * @property {string|number|Date} [answeredAt]
   * @property {string|number|Date} [ts]
   * @property {boolean} [timedOut]
   * @property {string} [chosen]
   */

  /**
   * @typedef {object} FatigueBucketStats
   * @property {number} total
   * @property {number} correct
   * @property {number|null} accuracyPct
   * @property {number} carelessCount
   * @property {number|null} carelessRatePct
   */

  /**
   * @typedef {object} LateNightFatigueReport
   * @property {boolean} detected
   * @property {number} accuracyDropPct
   * @property {number} carelessIncreasePct
   * @property {FatigueBucketStats} before21
   * @property {FatigueBucketStats} after21
   * @property {string|null} message
   */

  /**
   * Classify a single question attempt using KPM diagnostic timing thresholds.
   *
   * @param {boolean|number} isCorrect
   * @param {number} timeSpentMs
   * @param {number|null|undefined} expectedTimeMs
   * @param {ClassifyOptions} [options]
   * @returns {ErrorClassification}
   */
  function classifyAttempt(isCorrect, timeSpentMs, expectedTimeMs, options) {
    const correct = isCorrect === true || isCorrect === 1;
    const rawSpent = Number(timeSpentMs);
    const spent = Number.isFinite(rawSpent) && rawSpent >= 0 ? rawSpent : 0;
    const rawExpected = Number(expectedTimeMs);
    const hasExpected = Number.isFinite(rawExpected) && rawExpected > 0;

    if (!correct) {
      if (options && options.timedOut === true) return "CONCEPTUAL_GAP";
      if (hasExpected) {
        return spent < rawExpected * CARELESS_RATIO ? "CARELESS_RUSH" : "CONCEPTUAL_GAP";
      }
      return spent > 0 && spent <= FALLBACK_CARELESS_MS ? "CARELESS_RUSH" : "CONCEPTUAL_GAP";
    }

    if (hasExpected && spent > rawExpected * LOW_FLUENCY_RATIO) {
      return "LOW_FLUENCY";
    }
    return "MASTERY";
  }

  /**
   * Normalize human or short grade labels (`Year 6`, `Form 2`, `Form 4`, `t4`, etc.)
   * into MyKids Study Arena grade IDs (`d6`, `t2`, `t4`).
   *
   * @param {string|null|undefined} gradeLevel
   * @returns {NormalizedGradeId}
   */
  function normalizeGradeLevel(gradeLevel) {
    const raw = String(gradeLevel == null ? "" : gradeLevel)
      .trim()
      .toLowerCase()
      .replace(/[\s_-]+/g, " ");

    if (/^(form|tingkatan|t|f)\s*[45]$/.test(raw) || raw === "spm") {
      return "t4";
    }
    if (/^(form|tingkatan|t|f)\s*[123]$/.test(raw)) {
      return "t2";
    }
    if (/^(year|darjah|tahun|d|y)\s*[456]$/.test(raw) || raw === "uasa") {
      return "d6";
    }
    return "d6";
  }

  /**
   * Calculate KPM grade, descriptor, and False Comfort / Alert status.
   *
   * @param {number} percentage
   * @param {string} gradeLevel
   * @returns {KpmGradeResult}
   */
  function calculateKpmGrade(percentage, gradeLevel) {
    const normalized = normalizeGradeLevel(gradeLevel);
    const band = GradeBands.gradeFor(normalized, percentage);
    /** @type {KpmAlertLevel} */
    let alertLevel = "NONE";
    let isFalseComfortZone = false;

    if (band.scale === "UASA") {
      if (band.grade === "D") {
        isFalseComfortZone = true;
        alertLevel = "FALSE_COMFORT";
      } else if (band.grade === "E") {
        isFalseComfortZone = true;
        alertLevel = "CRITICAL";
      } else if (band.grade === "F") {
        alertLevel = "FAIL";
      }
    } else if (band.scale === "SPM") {
      if (band.grade === "D" || band.grade === "E") {
        isFalseComfortZone = true;
        alertLevel = "PASS_WITHOUT_CREDIT";
      } else if (band.grade === "G") {
        alertLevel = "FAIL";
      }
    }

    return {
      pct: band.pct,
      grade: band.grade,
      descriptor: band.label,
      isFalseComfortZone,
      alertLevel,
      scale: band.scale,
      verified: band.verified
    };
  }

  /**
   * Extract the hour of day (0-23) in Malaysia Time (UTC+8).
   * Naive ISO/SQL datetime strings without timezone offsets are treated as MYT directly.
   *
   * @param {string|number|Date|null|undefined} timestamp
   * @returns {number|null}
   */
  function parseMytHour(timestamp) {
    if (timestamp === null || timestamp === undefined || timestamp === "") return null;

    if (typeof timestamp === "number") {
      if (!Number.isFinite(timestamp)) return null;
      return new Date(timestamp + MYT_OFFSET_MINUTES * 60000).getUTCHours();
    }

    if (timestamp instanceof Date) {
      const ms = timestamp.getTime();
      if (!Number.isFinite(ms)) return null;
      return new Date(ms + MYT_OFFSET_MINUTES * 60000).getUTCHours();
    }

    if (typeof timestamp === "string") {
      const s = timestamp.trim();
      if (!s) return null;
      const hasZone = /(?:z|[+-]\d{2}:?\d{2})$/i.test(s);
      if (!hasZone) {
        const localMatch = /^\d{4}-\d{2}-\d{2}[T ](\d{2}):\d{2}/.exec(s);
        if (localMatch) {
          const hour = Number(localMatch[1]);
          return hour >= 0 && hour <= 23 ? hour : null;
        }
      }
      const parsedMs = Date.parse(s);
      if (!Number.isFinite(parsedMs)) return null;
      return new Date(parsedMs + MYT_OFFSET_MINUTES * 60000).getUTCHours();
    }

    return null;
  }

  /**
   * Build an empty fatigue bucket.
   * @returns {{ total: number, correct: number, carelessCount: number }}
   */
  function createBucket() {
    return { total: 0, correct: 0, carelessCount: 0 };
  }

  /**
   * Convert a raw fatigue bucket into rounded percentages.
   * @param {{ total: number, correct: number, carelessCount: number }} bucket
   * @returns {FatigueBucketStats}
   */
  function finalizeBucket(bucket) {
    if (bucket.total === 0) {
      return {
        total: 0,
        correct: 0,
        accuracyPct: null,
        carelessCount: 0,
        carelessRatePct: null
      };
    }
    return {
      total: bucket.total,
      correct: bucket.correct,
      accuracyPct: Math.round((bucket.correct / bucket.total) * 100),
      carelessCount: bucket.carelessCount,
      carelessRatePct: Math.round((bucket.carelessCount / bucket.total) * 100)
    };
  }

  /**
   * Compare accuracy and CARELESS_RUSH rates before 21:00 MYT vs at/after 21:00 MYT.
   *
   * @param {Array<{ isCorrect: boolean, classification: ErrorClassification, answeredAtMyt: string|number|Date|null }>} classifiedAttempts
   * @returns {LateNightFatigueReport}
   */
  function detectLateNightFatigue(classifiedAttempts) {
    const before = createBucket();
    const after = createBucket();

    (Array.isArray(classifiedAttempts) ? classifiedAttempts : []).forEach((item) => {
      const hour = parseMytHour(item && item.answeredAtMyt);
      if (hour === null) return;
      const isLateNight = hour >= LATE_NIGHT_START_HOUR_MYT || hour < LATE_NIGHT_END_HOUR_MYT;
      const target = isLateNight ? after : before;
      target.total++;
      if (item.isCorrect) target.correct++;
      if (item.classification === "CARELESS_RUSH") target.carelessCount++;
    });

    const before21 = finalizeBucket(before);
    const after21 = finalizeBucket(after);
    const hasBoth = before21.total > 0 && after21.total > 0;
    const rawDrop = hasBoth ? (before21.correct / before21.total - after21.correct / after21.total) * 100 : 0;
    const accuracyDropPct = hasBoth ? Math.round(rawDrop) : 0;
    const carelessIncreasePct = hasBoth ? after21.carelessRatePct - before21.carelessRatePct : 0;
    const detected = hasBoth && rawDrop >= FATIGUE_DROP_PCT_POINTS - 1e-9;

    const message = detected
      ? `Late-night fatigue warning: accuracy drops ${accuracyDropPct} percentage points at/after 21:00 MYT (${before21.accuracyPct}% earlier vs ${after21.accuracyPct}% late night).`
      : null;

    return {
      detected,
      accuracyDropPct,
      carelessIncreasePct,
      before21,
      after21,
      message
    };
  }

  /**
   * Convert an Array, Map, or plain object of syllabus nodes into a lookup Map.
   *
   * @param {SyllabusNodeInput[]|Map<string, SyllabusNodeInput>|Record<string, SyllabusNodeInput>|null|undefined} syllabusNodes
   * @returns {Map<string, { id: string, subject: string|null, gradeLevel: string|null, topicName: string, subtopicName: string, prerequisiteNodeId: string|null, expectedTimeMs: number|null }>}
   */
  function buildNodeMap(syllabusNodes) {
    const map = new Map();
    if (!syllabusNodes) return map;

    const addNode = (raw, fallbackKey) => {
      if (!raw || typeof raw !== "object") return;
      const id = String(raw.id || fallbackKey || "").trim();
      if (!id) return;
      const exp = Number(raw.expected_time_ms ?? raw.expectedTimeMs);
      map.set(id, {
        id,
        subject: raw.subject ? String(raw.subject) : null,
        gradeLevel: raw.grade_level ?? raw.gradeLevel ?? null,
        topicName: String(raw.topic_name ?? raw.topicName ?? raw.topic ?? "").trim(),
        subtopicName: String(raw.subtopic_name ?? raw.subtopicName ?? raw.subtopic ?? id).trim(),
        prerequisiteNodeId:
          raw.prerequisite_node_id ??
          raw.prerequisiteNodeId ??
          raw.prerequisite_subtopic_id ??
          raw.prerequisiteSubtopicId ??
          null,
        expectedTimeMs: Number.isFinite(exp) && exp > 0 ? exp : null
      });
    };

    if (syllabusNodes instanceof Map) {
      syllabusNodes.forEach((node, key) => addNode(node, key));
    } else if (Array.isArray(syllabusNodes)) {
      syllabusNodes.forEach((node) => addNode(node, null));
    } else if (typeof syllabusNodes === "object") {
      Object.keys(syllabusNodes).forEach((key) => addNode(syllabusNodes[key], key));
    }

    return map;
  }

  /**
   * Format a readable node label (`Topic — Subtopic` or `Subtopic`).
   * @param {{ topicName: string, subtopicName: string, nodeId?: string, id?: string }} node
   * @returns {string}
   */
  function formatNodeLabel(node) {
    const sub = node.subtopicName || node.nodeId || node.id || "subtopic";
    if (node.topicName && node.topicName !== sub) {
      return `${node.topicName} (${sub})`;
    }
    return sub;
  }

  /**
   * Build the parent diagnostic summary from student attempt logs and syllabus nodes.
   *
   * @param {string|null|undefined} studentId
   * @param {DiagnosticAttemptInput[]} attempts
   * @param {SyllabusNodeInput[]|Map<string, SyllabusNodeInput>|Record<string, SyllabusNodeInput>} [syllabusNodes]
   * @param {{ gradeLevel?: string }} [options]
   * @returns {object}
   */
  function generateParentDiagnosticSummary(studentId, attempts, syllabusNodes, options) {
    const nodeMap = buildNodeMap(syllabusNodes);
    const sid = studentId !== undefined && studentId !== null && String(studentId).trim() !== "" ? String(studentId) : null;
    const list = Array.isArray(attempts) ? attempts : [];

    const filtered = list.filter((raw) => {
      if (!raw || typeof raw !== "object") return false;
      const attemptSid = raw.student_id ?? raw.studentId;
      if (!sid || attemptSid === undefined || attemptSid === null || String(attemptSid).trim() === "") {
        return true;
      }
      return String(attemptSid) === sid;
    });

    const normalizedAttempts = filtered.map((raw) => {
      const nodeId = String(
        raw.syllabus_node_id ??
          raw.syllabusNodeId ??
          raw.subtopic_id ??
          raw.subtopicId ??
          raw.nodeId ??
          raw.chapter_id ??
          raw.chapterId ??
          "unknown"
      );

      let meta = nodeMap.get(nodeId);
      if (!meta) {
        const rawExp = Number(raw.expected_time_ms ?? raw.expectedTimeMs);
        meta = {
          id: nodeId,
          subject: raw.subject ? String(raw.subject) : null,
          gradeLevel: raw.grade_level ?? raw.gradeLevel ?? null,
          topicName: String(raw.topic_name ?? raw.topicName ?? raw.topic_id ?? raw.topicId ?? "").trim(),
          subtopicName: String(raw.subtopic_name ?? raw.subtopicName ?? raw.subtopic_id ?? raw.subtopicId ?? nodeId).trim(),
          prerequisiteNodeId:
            raw.prerequisite_node_id ??
            raw.prerequisiteNodeId ??
            raw.prerequisite_subtopic_id ??
            raw.prerequisiteSubtopicId ??
            null,
          expectedTimeMs: Number.isFinite(rawExp) && rawExp > 0 ? rawExp : null
        };
        nodeMap.set(nodeId, meta);
      }

      const isCorrect =
        raw.is_correct === true || raw.is_correct === 1 || raw.isCorrect === true || raw.isCorrect === 1;
      const rawSpent =
        raw.time_spent_ms ??
        raw.timeSpentMs ??
        (raw.elapsedSec !== undefined && raw.elapsedSec !== null ? Number(raw.elapsedSec) * 1000 : 0);
      const timeSpentMs = Number.isFinite(Number(rawSpent)) && Number(rawSpent) >= 0 ? Number(rawSpent) : 0;
      const rawExpected = raw.expected_time_ms ?? raw.expectedTimeMs ?? meta.expectedTimeMs;
      const expectedTimeMs = Number.isFinite(Number(rawExpected)) && Number(rawExpected) > 0 ? Number(rawExpected) : null;

      const hasChosenField = raw.chosen !== undefined && raw.chosen !== null;
      const chosenEmpty = hasChosenField && (String(raw.chosen).trim() === "" || String(raw.chosen).trim() === "-");
      const rawClass = String(raw.error_classification ?? raw.errorClassification ?? "").trim();
      const timedOut = raw.timedOut === true || rawClass === "TIMEOUT" || (!isCorrect && chosenEmpty);

      /** @type {ErrorClassification} */
      let classification;
      if (
        rawClass === "MASTERY" ||
        rawClass === "LOW_FLUENCY" ||
        rawClass === "CARELESS_RUSH" ||
        rawClass === "CONCEPTUAL_GAP"
      ) {
        classification = rawClass;
      } else if (rawClass === "TIMEOUT") {
        classification = "CONCEPTUAL_GAP";
      } else {
        classification = classifyAttempt(isCorrect, timeSpentMs, expectedTimeMs, { timedOut });
      }

      const answeredAtMyt =
        raw.answered_at_myt ?? raw.answeredAtMyt ?? raw.answered_at ?? raw.answeredAt ?? raw.ts ?? null;

      return {
        nodeId,
        isCorrect,
        timeSpentMs,
        expectedTimeMs,
        classification,
        answeredAtMyt
      };
    });

    const totalAttempts = normalizedAttempts.length;
    const totalCorrect = normalizedAttempts.filter((a) => a.isCorrect).length;
    const overallPct = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    let inferredGrade = options && options.gradeLevel ? options.gradeLevel : null;
    if (!inferredGrade) {
      for (let i = 0; i < filtered.length; i++) {
        const g = filtered[i].grade_level ?? filtered[i].gradeLevel ?? filtered[i].gradeId;
        if (g) {
          inferredGrade = g;
          break;
        }
      }
    }
    const overallGrade = totalAttempts > 0 ? calculateKpmGrade(overallPct, inferredGrade || "d6") : null;

    if (totalAttempts === 0) {
      return {
        studentId: sid,
        totalAttempts: 0,
        overallPct: 0,
        overallGrade: null,
        topStrength: null,
        topRootCauseWeakness: null,
        habitAlert: {
          carelessRushCount: 0,
          conceptualGapCount: 0,
          lowFluencyCount: 0,
          masteryCount: 0,
          carelessSharePct: 0,
          carelessToConceptualRatio: 0,
          ratioLabel: "0:0",
          dominantErrorType: "NONE",
          lateNightFatigue: detectLateNightFatigue([]),
          summaryText: "No diagnostic attempts recorded yet."
        },
        tuitionPrescription:
          "Complete a short 15-question diagnostic checkup first so we can pinpoint the exact subtopic and study habit to focus on.",
        whatsappSummary: "No diagnostic attempts recorded yet."
      };
    }

    /** @type {Map<string, any>} */
    const byNode = new Map();
    normalizedAttempts.forEach((a) => {
      const meta = nodeMap.get(a.nodeId);
      let rec = byNode.get(a.nodeId);
      if (!rec) {
        rec = {
          nodeId: a.nodeId,
          topicName: meta ? meta.topicName : "",
          subtopicName: meta ? meta.subtopicName : a.nodeId,
          prerequisiteNodeId: meta ? meta.prerequisiteNodeId : null,
          attempts: 0,
          correct: 0,
          wrong: 0,
          MASTERY: 0,
          LOW_FLUENCY: 0,
          CARELESS_RUSH: 0,
          CONCEPTUAL_GAP: 0
        };
        byNode.set(a.nodeId, rec);
      }
      rec.attempts++;
      if (a.isCorrect) rec.correct++;
      else rec.wrong++;
      rec[a.classification]++;
    });

    const nodeStats = Array.from(byNode.values()).map((rec) => {
      const failureRate = rec.wrong / rec.attempts;
      return {
        ...rec,
        accuracyPct: Math.round((rec.correct / rec.attempts) * 100),
        failureRate,
        failureRatePct: Math.round(failureRate * 100)
      };
    });

    const strengthCandidates = nodeStats
      .filter((n) => n.correct > 0)
      .sort(
        (a, b) =>
          b.accuracyPct - a.accuracyPct ||
          b.MASTERY - a.MASTERY ||
          b.attempts - a.attempts ||
          (a.nodeId < b.nodeId ? -1 : a.nodeId > b.nodeId ? 1 : 0)
      );
    const bestNode = strengthCandidates[0] || null;
    const topStrength = bestNode
      ? {
          nodeId: bestNode.nodeId,
          topicName: bestNode.topicName,
          subtopicName: bestNode.subtopicName,
          attempts: bestNode.attempts,
          correct: bestNode.correct,
          accuracyPct: bestNode.accuracyPct,
          masteryCount: bestNode.MASTERY
        }
      : null;

    const weaknessCandidates = nodeStats
      .filter((n) => n.wrong > 0)
      .sort(
        (a, b) =>
          b.failureRate - a.failureRate ||
          b.wrong - a.wrong ||
          b.CONCEPTUAL_GAP - a.CONCEPTUAL_GAP ||
          (a.nodeId < b.nodeId ? -1 : a.nodeId > b.nodeId ? 1 : 0)
      );

    let topRootCauseWeakness = null;
    if (weaknessCandidates.length > 0) {
      const observed = weaknessCandidates[0];
      let rootNode = observed;
      /** @type {PrerequisiteStatus} */
      let prerequisiteStatus = "NONE";
      let needsPrerequisiteProbe = false;
      let probeNode = null;
      const chain = [observed.nodeId];
      const visited = new Set([observed.nodeId]);

      if (observed.failureRate >= PREREQUISITE_FAIL_THRESHOLD && observed.prerequisiteNodeId) {
        let curr = observed;
        while (curr.prerequisiteNodeId && !visited.has(curr.prerequisiteNodeId)) {
          const prereqId = curr.prerequisiteNodeId;
          visited.add(prereqId);
          chain.push(prereqId);

          const prereqStats = nodeStats.find((n) => n.nodeId === prereqId) || null;
          if (!prereqStats) {
            const prereqMeta = nodeMap.get(prereqId);
            probeNode = {
              id: prereqId,
              topicName: prereqMeta ? prereqMeta.topicName : "",
              subtopicName: prereqMeta ? prereqMeta.subtopicName : prereqId
            };
            needsPrerequisiteProbe = true;
            prerequisiteStatus =
              curr.nodeId === observed.nodeId ? "UNPROBED" : "CONFIRMED_GAP_NEEDS_DEEPER_PROBE";
            break;
          }

          if (prereqStats.failureRate >= PREREQUISITE_FAIL_THRESHOLD) {
            curr = prereqStats;
            rootNode = prereqStats;
            prerequisiteStatus = "CONFIRMED_GAP";
            continue;
          }

          if (curr.nodeId === observed.nodeId) {
            prerequisiteStatus = "PREREQUISITE_MASTERED";
          }
          break;
        }
      }

      const tracedFromOther = rootNode.nodeId !== observed.nodeId;
      topRootCauseWeakness = {
        nodeId: rootNode.nodeId,
        topicName: rootNode.topicName,
        subtopicName: rootNode.subtopicName,
        attempts: rootNode.attempts,
        wrong: rootNode.wrong,
        accuracyPct: rootNode.accuracyPct,
        failureRatePct: rootNode.failureRatePct,
        observedWeakNodeId: observed.nodeId,
        observedFailureRatePct: observed.failureRatePct,
        triggeredFromNodeId: tracedFromOther ? observed.nodeId : null,
        triggeredFromLabel: tracedFromOther ? formatNodeLabel(observed) : null,
        needsPrerequisiteProbe,
        probeNode,
        prerequisiteStatus,
        chain
      };
    }

    let carelessRushCount = 0;
    let conceptualGapCount = 0;
    let lowFluencyCount = 0;
    let masteryCount = 0;
    normalizedAttempts.forEach((a) => {
      if (a.classification === "CARELESS_RUSH") carelessRushCount++;
      else if (a.classification === "CONCEPTUAL_GAP") conceptualGapCount++;
      else if (a.classification === "LOW_FLUENCY") lowFluencyCount++;
      else masteryCount++;
    });

    const totalWrong = carelessRushCount + conceptualGapCount;
    const carelessSharePct = totalWrong > 0 ? Math.round((carelessRushCount / totalWrong) * 100) : 0;
    const carelessToConceptualRatio =
      totalWrong === 0
        ? 0
        : conceptualGapCount === 0
          ? carelessRushCount
          : Number((carelessRushCount / conceptualGapCount).toFixed(2));
    const ratioLabel = `${carelessRushCount}:${conceptualGapCount}`;

    let dominantErrorType = "NONE";
    if (totalWrong === 0) {
      dominantErrorType = lowFluencyCount > 0 ? "LOW_FLUENCY" : "NONE";
    } else if (carelessRushCount > conceptualGapCount) {
      dominantErrorType = "CARELESS_RUSH";
    } else if (conceptualGapCount > carelessRushCount) {
      dominantErrorType = "CONCEPTUAL_GAP";
    } else {
      dominantErrorType = "BALANCED";
    }

    const lateNightFatigue = detectLateNightFatigue(normalizedAttempts);
    const habitParts = [];
    if (totalWrong > 0) {
      habitParts.push(
        `Mistake ratio ${ratioLabel} (CARELESS_RUSH vs CONCEPTUAL_GAP; ${carelessSharePct}% careless)`
      );
    } else if (lowFluencyCount > 0) {
      habitParts.push(`0 wrong answers, but ${lowFluencyCount} correct items took >1.5x expected time (LOW_FLUENCY)`);
    } else {
      habitParts.push("No wrong answers or rushing habits detected");
    }
    if (lateNightFatigue.detected && lateNightFatigue.message) {
      habitParts.push(lateNightFatigue.message);
    }

    const habitAlert = {
      carelessRushCount,
      conceptualGapCount,
      lowFluencyCount,
      masteryCount,
      carelessSharePct,
      carelessToConceptualRatio,
      ratioLabel,
      dominantErrorType,
      lateNightFatigue,
      summaryText: habitParts.join("; ")
    };

    const fatigueTail = lateNightFatigue.detected
      ? `, and shift practice before 21:00 MYT where accuracy is ${lateNightFatigue.accuracyDropPct} percentage points higher`
      : "";

    let tuitionPrescription;
    if (topRootCauseWeakness) {
      const weakLabel = formatNodeLabel(topRootCauseWeakness);
      if (topRootCauseWeakness.needsPrerequisiteProbe && topRootCauseWeakness.probeNode) {
        const probeLabel = formatNodeLabel(topRootCauseWeakness.probeNode);
        const observedLabel = topRootCauseWeakness.triggeredFromLabel || weakLabel;
        tuitionPrescription = `Before drilling ${observedLabel}, ask the tutor to run a quick diagnostic probe on the prerequisite "${probeLabel}" (${topRootCauseWeakness.observedFailureRatePct}% error rate in ${observedLabel})${fatigueTail}.`;
      } else if (topRootCauseWeakness.triggeredFromNodeId) {
        tuitionPrescription = `Ask the tutor to rebuild the foundational skill "${weakLabel}" first (${topRootCauseWeakness.failureRatePct}% error rate, uncovered while tracing struggles in ${topRootCauseWeakness.triggeredFromLabel})${fatigueTail}.`;
      } else if (dominantErrorType === "CARELESS_RUSH") {
        tuitionPrescription = `Focus tuition on slowing down and double-checking working steps in ${weakLabel} (${carelessRushCount} careless rush mistakes vs ${conceptualGapCount} concept gaps)${fatigueTail}.`;
      } else if (dominantErrorType === "CONCEPTUAL_GAP") {
        tuitionPrescription = `Ask the tutor to re-teach ${weakLabel} step by step with worked examples before assigning drills (${topRootCauseWeakness.failureRatePct}% error rate)${fatigueTail}.`;
      } else {
        tuitionPrescription = `Focus the next tuition session on ${weakLabel} (${topRootCauseWeakness.failureRatePct}% error rate) using guided step-by-step practice${fatigueTail}.`;
      }
    } else {
      const strengthLabel = topStrength ? formatNodeLabel(topStrength) : "current topics";
      if (lowFluencyCount > 0) {
        tuitionPrescription = `Accuracy is 100%, so run timed fluency drills on ${strengthLabel} to speed up the ${lowFluencyCount} slow-solved questions${fatigueTail}.`;
      } else {
        tuitionPrescription = `Strong mastery shown in ${strengthLabel} (100% accuracy), so challenge the student with higher-order application questions${fatigueTail}.`;
      }
    }

    const gradeLine = overallGrade
      ? `Overall: ${overallGrade.pct}% (${overallGrade.grade} - ${overallGrade.descriptor})${
          overallGrade.isFalseComfortZone ? " [Alert Zone: needs attention despite passing]" : ""
        }`
      : `Overall: ${overallPct}%`;
    const strengthLine = topStrength
      ? `Strength: ${formatNodeLabel(topStrength)} (${topStrength.accuracyPct}%)`
      : "Strength: Not yet established (0% accuracy)";
    const weaknessLine = topRootCauseWeakness
      ? topRootCauseWeakness.needsPrerequisiteProbe && topRootCauseWeakness.probeNode
        ? `Root-Cause Focus: Probe prerequisite "${formatNodeLabel(topRootCauseWeakness.probeNode)}" (${topRootCauseWeakness.observedFailureRatePct}% errors in ${
            topRootCauseWeakness.triggeredFromLabel || formatNodeLabel(topRootCauseWeakness)
          })`
        : `Root-Cause Focus: ${formatNodeLabel(topRootCauseWeakness)} (${topRootCauseWeakness.failureRatePct}% errors)`
      : "Root-Cause Focus: None detected";

    const whatsappSummary = [
      sid ? `Diagnostic Summary (${sid})` : "Diagnostic Summary",
      gradeLine,
      strengthLine,
      weaknessLine,
      `Habits: ${habitAlert.summaryText}`,
      `Tutor Action: ${tuitionPrescription}`
    ].join("\n");

    return {
      studentId: sid,
      totalAttempts,
      overallPct,
      overallGrade,
      topStrength,
      topRootCauseWeakness,
      habitAlert,
      tuitionPrescription,
      whatsappSummary
    };
  }

  return {
    CARELESS_RATIO,
    LOW_FLUENCY_RATIO,
    FALLBACK_CARELESS_MS,
    PREREQUISITE_FAIL_THRESHOLD,
    LATE_NIGHT_START_HOUR_MYT,
    LATE_NIGHT_END_HOUR_MYT,
    FATIGUE_DROP_PCT_POINTS,
    classifyAttempt,
    normalizeGradeLevel,
    calculateKpmGrade,
    parseMytHour,
    detectLateNightFatigue,
    generateParentDiagnosticSummary
  };
});
