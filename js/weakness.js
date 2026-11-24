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

  /** Marks earned on one stored structured item (slim snapshot) given the parent's ticked steps. */
  function itemEarned(item, marked) {
    let e = 0;
    (item.parts || []).forEach((p, i) => {
      const picks = Array.isArray(marked && marked[i]) ? marked[i] : [];
      new Set(picks).forEach((k) => {
        if (Number.isInteger(k) && p.steps && p.steps[k]) e += p.steps[k].marks || 0;
      });
    });
    return e;
  }

  /**
   * Mock-exam weakness by PAPER PART (Bahagian A/B/C) and by chapter, plus where structured marks are lost (method vs accuracy).
   * Uses the last RECENT_ATTEMPTS marked results per subject+paper. Sections still waiting for a parent's mark are ignored (never counted as wrong).
   * @param profile  { mockResults: [newest first] }
   * @param lookup   optional fn(itemId) -> full structured item (to read M/A step kinds)
   */
  function analyseMock(profile, lookup) {
    const recs = Array.isArray(profile && profile.mockResults) ? profile.mockResults : [];
    const groups = new Map();
    recs.forEach((r) => {
      const key = `${r.gradeId}:${r.subjectId}:${r.paperId}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(r);
    });
    const papers = [];
    groups.forEach((list, key) => {
      const recent = list.slice(0, RECENT_ATTEMPTS);
      const parts = new Map();
      const chapters = new Map();
      const lost = { M: 0, A: 0 };
      const gained = { M: 0, A: 0 };
      let markedAttempts = 0;
      recent.forEach((r) => {
        let any = false;
        (r.sections || []).forEach((sec) => {
          if (sec.state !== "ditanda") return;
          any = true;
          const p = parts.get(sec.id) || { part: sec.id, earned: 0, possible: 0, attempts: 0, structured: !!sec.structured };
          p.earned += Number(sec.earned) || 0;
          p.possible += Number(sec.possible) || 0;
          p.attempts++;
          parts.set(sec.id, p);
          if (sec.structured) {
            (sec.items || []).forEach((it) => {
              const marked = (r.parentMarks || {})[it.id];
              if (!marked) return;
              const earned = itemEarned(it, marked);
              if (sec.choose && earned === 0) return; // an unanswered "answer N of M" question is not a weakness
              const ch = chapters.get(it.chapterId) || { chapterId: it.chapterId, earned: 0, possible: 0 };
              ch.earned += earned;
              ch.possible += it.marks || 0;
              chapters.set(it.chapterId, ch);
              const full = typeof lookup === "function" ? lookup(it.id) : null;
              if (full) {
                full.parts.forEach((fp, i) => {
                  const picks = new Set(Array.isArray(marked[i]) ? marked[i] : []);
                  fp.steps.forEach((st, k) => {
                    const bucket = picks.has(k) ? gained : lost;
                    if (st.kind === "M" || st.kind === "A") bucket[st.kind] += st.marks || 1;
                  });
                });
              }
            });
          }
        });
        if (any) markedAttempts++;
        // answered objective items give chapter-level evidence too
        (r.items || []).forEach((it) => {
          if (typeof it.correct !== "boolean") return;
          const ch = chapters.get(it.chapterId) || { chapterId: it.chapterId, earned: 0, possible: 0 };
          ch.earned += it.correct ? 1 : 0;
          ch.possible += 1;
          chapters.set(it.chapterId, ch);
        });
      });
      if (!markedAttempts) return;
      const partList = Array.from(parts.values())
        .map((p) => {
          const pct = pctOf(p.earned, p.possible);
          return { ...p, pct, status: statusFor(pct, p.attempts) };
        })
        .sort((a, b) => (a.part < b.part ? -1 : 1));
      const chapterList = Array.from(chapters.values())
        .map((c) => ({ ...c, pct: pctOf(c.earned, c.possible) }))
        .sort((a, b) => a.pct - b.pct);
      const first = recent[0];
      const weakest = partList.slice().sort((a, b) => a.pct - b.pct)[0] || null;
      papers.push({
        key,
        gradeId: first.gradeId,
        subjectId: first.subjectId,
        subjectName: first.subjectName,
        paperId: first.paperId,
        attempts: markedAttempts,
        parts: partList,
        weakestPart: weakest && weakest.status === "lemah" ? weakest.part : null,
        chapters: chapterList,
        lost,
        gained
      });
    });
    return { papers };
  }

  /** Plain-language, evidence-based action sentences for a paper analysis (no subject facts). */
  function mockAdvice(paper) {
    const out = [];
    const obj = paper.parts.filter((p) => !p.structured);
    const str = paper.parts.filter((p) => p.structured);
    const avg = (arr) => (arr.length ? arr.reduce((a, p) => a + p.pct, 0) / arr.length : null);
    const o = avg(obj);
    const st = avg(str);
    if (o !== null && st !== null && o - st >= 25) out.push("Anak mahir soalan objektif tetapi lemah soalan berstruktur. Tambah latihan menulis langkah kerja penuh.");
    const totalLost = paper.lost.M + paper.lost.A;
    if (totalLost >= 4) {
      if (paper.lost.M >= paper.lost.A * 1.5) out.push("Banyak markah kaedah (M) hilang: anak sering tidak menunjukkan langkah kerja. Minta dia tulis setiap langkah walaupun jawapan nampak mudah.");
      else if (paper.lost.A >= paper.lost.M * 1.5) out.push("Kaedah betul tetapi jawapan akhir salah (markah A hilang): latih menyemak pengiraan, unit dan pembundaran.");
      else out.push("Markah kaedah (M) dan jawapan (A) sama-sama hilang: ulang kaji konsep bab yang paling lemah di bawah, kemudian latih langkah kerja.");
    }
    if (paper.weakestPart) out.push(`Bahagian ${paper.weakestPart} paling lemah. Mulakan latihan di bahagian ini.`);
    return out;
  }

  return {
    WEAK_BELOW,
    STRONG_AT,
    RECENT_ATTEMPTS,
    CARELESS_SEC,
    statusFor,
    analyse,
    repeatedMistakes,
    analyseMock,
    mockAdvice
  };
});
