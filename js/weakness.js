/**
 * Weakness engine (v5). Pure functions: no DOM, no storage writes.
 *
 * Rules (agreed with Irfan, 24/Nov/2026):
 *  - Mastery per chapter = correct / total over the child's LAST 3 attempts (so one bad day does not define them).
 *  - Weak  < 60%, Strong >= 85%, otherwise "Sederhana".
 *  - Chapters with only 1 attempt are PROVISIONAL (shown, but flagged "sementara").
 *  - Mistake type is a heuristic ("kemungkinan"), never a fact:
 *      timeout  = no answer given ("-" or empty)
 *      concept  = same question answered wrong 2+ times
 *      careless = wrong once and answered fast (<= CARELESS_SEC)
 *      slow     = wrong once and answered slowly
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.Weakness = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const WEAK_BELOW = 60;
  const STRONG_AT = 85;
  const RECENT_ATTEMPTS = 3;
  const CARELESS_SEC = 4;
  const TREND_DELTA = 10;

  function pctOf(score, total) {
    return total > 0 ? Math.round((score / total) * 100) : 0;
  }

  function statusFor(pct, attempts) {
    if (attempts === 0) return "baharu";
    if (pct < WEAK_BELOW) return "lemah";
    if (pct >= STRONG_AT) return "kuat";
    return "sederhana";
  }

  function sumPct(list) {
    let s = 0;
    let t = 0;
    list.forEach((h) => {
      s += Number(h.score) || 0;
      t += Number(h.total) || 0;
    });
    return { score: s, total: t, pct: pctOf(s, t) };
  }

  function isNoAnswer(chosen) {
    const c = String(chosen === undefined || chosen === null ? "" : chosen).trim();
    return c === "" || c === "-";
  }

  /** Count wrong answers per question text across all stored question logs. */
  function wrongCounts(history) {
    const counts = new Map();
    history.forEach((h) => {
      (h.questionLogs || []).forEach((ql) => {
        if (!ql.isCorrect) counts.set(ql.q, (counts.get(ql.q) || 0) + 1);
      });
    });
    return counts;
  }

  function classifyMistakes(attemptList, counts) {
    const out = { timeout: 0, concept: 0, careless: 0, slow: 0 };
    attemptList.forEach((h) => {
      (h.questionLogs || []).forEach((ql) => {
        if (ql.isCorrect) return;
        if (isNoAnswer(ql.chosen)) out.timeout++;
        else if ((counts.get(ql.q) || 0) >= 2) out.concept++;
        else if ((Number(ql.elapsedSec) || 0) <= CARELESS_SEC) out.careless++;
        else out.slow++;
      });
    });
    return out;
  }

  /**
   * @param {object} profile  { history: [newest-first attempts], gradeId }
   * @returns {{chapters: object[], subjects: object[], overall: object}}
   */
  function analyse(profile) {
    const history = Array.isArray(profile && profile.history) ? profile.history : [];
    const counts = wrongCounts(history);

    const byChapter = new Map();
    history.forEach((h) => {
      const key = `${h.subjectId}:${h.chapterId}`;
      if (!byChapter.has(key)) byChapter.set(key, []);
      byChapter.get(key).push(h); // history is newest-first
    });

    const chapters = [];
    byChapter.forEach((attempts, key) => {
      const recent = attempts.slice(0, RECENT_ATTEMPTS);
      const earlier = attempts.slice(RECENT_ATTEMPTS, RECENT_ATTEMPTS * 2);
      const r = sumPct(recent);
      let trend = null;
      let trendDelta = null;
      if (earlier.length >= 2) {
        trendDelta = r.pct - sumPct(earlier).pct;
        trend = trendDelta >= TREND_DELTA ? "naik" : trendDelta <= -TREND_DELTA ? "turun" : "tetap";
      }
      const first = attempts[0];
      chapters.push({
        key,
        subjectId: first.subjectId,
        subjectName: first.subjectName,
        chapterId: first.chapterId,
        chapterTitle: first.chapterTitle,
        attempts: attempts.length,
        recentAttempts: recent.length,
        mastery: r.pct,
        status: statusFor(r.pct, attempts.length),
        provisional: attempts.length < 2,
        trend,
        trendDelta,
        mistakes: classifyMistakes(recent, counts),
        lastTs: first.ts || null
      });
    });

    chapters.sort((a, b) => a.mastery - b.mastery || b.attempts - a.attempts);

    const bySubject = new Map();
    chapters.forEach((c) => {
      if (!bySubject.has(c.subjectId)) bySubject.set(c.subjectId, []);
      bySubject.get(c.subjectId).push(c);
    });
    const subjects = [];
    bySubject.forEach((list, subjectId) => {
      // Subject mastery = mean of its chapters' mastery (each chapter weighs the same).
      const mastery = Math.round(list.reduce((s, c) => s + c.mastery, 0) / list.length);
      subjects.push({
        subjectId,
        subjectName: list[0].subjectName,
        mastery,
        status: statusFor(mastery, list.length),
        weakCount: list.filter((c) => c.status === "lemah").length,
        strongCount: list.filter((c) => c.status === "kuat").length,
        chapters: list
      });
    });
    subjects.sort((a, b) => a.mastery - b.mastery);

    return {
      chapters,
      subjects,
      overall: {
        chaptersPlayed: chapters.length,
        weakCount: chapters.filter((c) => c.status === "lemah").length,
        strongCount: chapters.filter((c) => c.status === "kuat").length
      }
    };
  }

  /** Wrong questions asked 2+ times: candidates for "Fix My Weak Spots". */
  function repeatedMistakes(profile, limit = 20) {
    const history = Array.isArray(profile && profile.history) ? profile.history : [];
    const counts = wrongCounts(history);
    const seen = new Set();
    const out = [];
    history.forEach((h) => {
      (h.questionLogs || []).forEach((ql) => {
        if (ql.isCorrect || (counts.get(ql.q) || 0) < 2 || seen.has(ql.q)) return;
        seen.add(ql.q);
        out.push({
          q: ql.q,
          correct: ql.correct,
          times: counts.get(ql.q),
          subjectId: h.subjectId,
          chapterId: h.chapterId,
          chapterTitle: h.chapterTitle
        });
      });
    });
    return out.sort((a, b) => b.times - a.times).slice(0, limit);
  }

  return {
    WEAK_BELOW,
    STRONG_AT,
    RECENT_ATTEMPTS,
    CARELESS_SEC,
    statusFor,
    analyse,
    repeatedMistakes
  };
});
