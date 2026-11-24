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

console.log(failed === 0 ? "WEAKNESS_TESTS_PASSED" : `WEAKNESS_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
