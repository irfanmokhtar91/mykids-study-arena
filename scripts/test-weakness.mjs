import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const W = require("../js/weakness.js");

let failed = 0;
const eq = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? "PASS" : "FAIL", name, ok ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`);
  if (!ok) failed++;
};

const ql = (q, ok, chosen = "x", sec = 6) => ({ q, isCorrect: ok, chosen, correct: "c", elapsedSec: sec });
// history is newest-first
const att = (score, total, logs = [], ch = "pecahan") => ({
  ts: "2026-11-24T10:00:00Z", subjectId: "math", subjectName: "Matematik", chapterId: ch, chapterTitle: "Pecahan", score, total, questionLogs: logs
});

// 1. only last 3 attempts count: [5/5,5/5,5/5, 0/5 x4 older] -> 100
let p = { history: [att(5, 5), att(5, 5), att(5, 5), att(0, 5), att(0, 5), att(0, 5), att(0, 5)] };
let a = W.analyse(p).chapters[0];
eq("mastery uses last 3 attempts only", [a.mastery, a.status], [100, "kuat"]);
eq("trend naik vs earlier 3", a.trend, "naik");

// 2. one bad day does not erase history: [0/5, 5/5, 5/5] -> 10/15 = 67 sederhana
p = { history: [att(0, 5), att(5, 5), att(5, 5)] };
a = W.analyse(p).chapters[0];
eq("one bad attempt among three is moderate, not weak", [a.mastery, a.status], [67, "sederhana"]);

// 3. thresholds: 59 weak, 60 sederhana, 84 sederhana, 85 kuat
eq("59 -> lemah", W.statusFor(59, 3), "lemah");
eq("60 -> sederhana", W.statusFor(60, 3), "sederhana");
eq("84 -> sederhana", W.statusFor(84, 3), "sederhana");
eq("85 -> kuat", W.statusFor(85, 3), "kuat");

// 4. provisional when a single attempt
a = W.analyse({ history: [att(1, 5)] }).chapters[0];
eq("single attempt is provisional", [a.status, a.provisional, a.trend], ["lemah", true, null]);

// 5. mistake classification
const logs = [
  ql("Q-timeout", false, "-", 9),
  ql("Q-concept", false, "x", 6),
  ql("Q-careless", false, "x", 2),
  ql("Q-slow", false, "x", 8),
  ql("Q-ok", true, "c", 3)
];
p = { history: [att(1, 5, logs), att(0, 5, [ql("Q-concept", false, "y", 7)])] };
a = W.analyse(p).chapters[0];
eq("mistake types", a.mistakes, { timeout: 1, concept: 2, careless: 1, slow: 1 });

// 6. repeated mistakes list
eq("repeatedMistakes finds only 2+ wrong", W.repeatedMistakes(p).map((m) => [m.q, m.times]), [["Q-concept", 2]]);

// 7. subjects: weakest first; chapters sorted weakest first
p = { history: [att(5, 5, [], "a"), att(1, 5, [], "b"), att(1, 5, [], "b")] };
const r = W.analyse(p);
eq("chapters sorted weakest first", r.chapters.map((c) => c.chapterId), ["b", "a"]);
eq("overall counts", r.overall, { chaptersPlayed: 2, weakCount: 1, strongCount: 1 });

// 8. empty profile
eq("empty history is safe", W.analyse({ history: [] }).chapters, []);
eq("missing history is safe", W.analyse({}).overall, { chaptersPlayed: 0, weakCount: 0, strongCount: 0 });

// ======================= MOCK EXAM WEAKNESS BY PAPER PART =======================
const slimItem = (id, chapterId, marks, stepMarks) => ({ id, chapterId, part: "B", marks, parts: [{ marks, steps: stepMarks.map((m) => ({ marks: m })) }] });
const fullItem = (kinds) => ({ parts: [{ steps: kinds.map((k) => ({ kind: k, marks: 1 })) }] });
const lookupTbl = { i1: fullItem(["M", "A", "M", "A"]), i2: fullItem(["M", "A", "M", "A"]) };
const lookup = (id) => lookupTbl[id] || null;
const mockRec = (ts, secs, parentMarks = {}, items = []) => ({ ts, gradeId: "t2", subjectId: "math", subjectName: "Matematik", paperId: "k1", sections: secs, parentMarks, items });
const secA = (earned, possible = 20) => ({ id: "A", state: "ditanda", earned, possible });
// attempt 1: A 18/20; B: i1 got steps 0 and 2 (both M); the two A marks were lost
const secB1 = { id: "B", state: "ditanda", earned: 2, possible: 4, structured: true, items: [slimItem("i1", "pemfaktoran", 4, [1, 1, 1, 1])] };
const secC1 = { id: "C", state: "menunggu", earned: null, possible: 60, structured: true, items: [slimItem("i2", "poligon", 10, [1, 1, 1, 1])] };
const r1 = mockRec("2026-11-20T10:00:00Z", [secA(18), secB1, secC1], { i1: { 0: [0, 2] } }, [{ chapterId: "koordinat", part: "A", correct: true }, { chapterId: "koordinat", part: "A", correct: false }]);
let mk = W.analyseMock({ mockResults: [r1] }, lookup);
eq("one paper analysed", mk.papers.length, 1);
let pp = mk.papers[0];
eq("part A = 18/20 = 90% -> kuat", [pp.parts[0].part, pp.parts[0].pct, pp.parts[0].status], ["A", 90, "kuat"]);
eq("part B = 2/4 = 50%", [pp.parts[1].part, pp.parts[1].pct], ["B", 50]);
eq("section still waiting for a parent (C) is NOT counted as wrong", pp.parts.some((p) => p.part === "C"), false);
eq("method vs accuracy: the two lost marks were accuracy (A) marks", [pp.lost.M, pp.lost.A, pp.gained.M, pp.gained.A], [0, 2, 2, 0]);
eq("chapter evidence from the marked structured item and the answered objective items", pp.chapters.map((c) => `${c.chapterId}:${c.pct}`).sort().join("|"), ["koordinat:50", "pemfaktoran:50"].join("|"));
// last-3 rule: four attempts of part A, the oldest is ignored
const mkA = (ts, e) => mockRec(ts, [secA(e)]);
mk = W.analyseMock({ mockResults: [mkA("4", 20), mkA("3", 20), mkA("2", 20), mkA("1", 0)] }, lookup);
eq("only the 3 newest marked attempts count (oldest 0/20 ignored)", [mk.papers[0].parts[0].pct, mk.papers[0].attempts], [100, 3]);
// papers with nothing marked produce nothing
mk = W.analyseMock({ mockResults: [mockRec("1", [{ id: "B", state: "menunggu", earned: null, possible: 20, structured: true, items: [] }])] }, lookup);
eq("a paper with no marked section is skipped", mk.papers.length, 0);
eq("no mock results is safe", W.analyseMock({}, lookup).papers, []);
// answer-N-of-M: an unanswered question (0 marks) is not a weakness
const secChoose = { id: "C", state: "ditanda", earned: 15, possible: 15, structured: true, choose: 1, items: [slimItem("i1", "kuadratik", 15, [15]), slimItem("i2", "kuadratik", 15, [15])] };
mk = W.analyseMock({ mockResults: [mockRec("1", [secChoose], { i1: { 0: [0] }, i2: { 0: [] } }, [])] }, lookup);
eq("unanswered choose-1-of-2 question does not drag the chapter down", mk.papers[0].chapters[0].pct, 100);
// advice text is evidence-based
const adviceOf = (paper) => W.mockAdvice(paper);
eq("method-loss advice when M marks dominate", adviceOf({ parts: [{ part: "B", pct: 40, structured: true }], lost: { M: 6, A: 1 }, weakestPart: null }).some((x) => /langkah kerja/.test(x)), true);
eq("accuracy-loss advice when A marks dominate", adviceOf({ parts: [{ part: "B", pct: 40, structured: true }], lost: { M: 1, A: 6 }, weakestPart: null }).some((x) => /pengiraan, unit/.test(x)), true);
eq("objective-strong / structured-weak advice", adviceOf({ parts: [{ part: "A", pct: 90, structured: false }, { part: "B", pct: 40, structured: true }], lost: { M: 0, A: 0 }, weakestPart: "B" }).some((x) => /mahir soalan objektif/.test(x)), true);
eq("no advice when nothing is wrong", adviceOf({ parts: [{ part: "A", pct: 90, structured: false }], lost: { M: 0, A: 0 }, weakestPart: null }), []);

console.log(failed === 0 ? "WEAKNESS_TESTS_PASSED" : `WEAKNESS_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
