import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const T = require("../js/tasks.js");

let failed = 0;
const eq = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? "PASS" : "FAIL", name, ok ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`);
  if (!ok) failed++;
};

const D = 86400000;
const t0 = Date.parse("2026-11-01T08:00:00Z");
const iso = (ms) => new Date(ms).toISOString();
const log = (q, ok, chosen = "x", sec = 6) => ({ q, isCorrect: ok, chosen, correct: "c", elapsedSec: sec });
// history is newest-first; build with helper that prepends
const mk = (hist = []) => ({ gradeId: "d6", history: hist, setBest: {}, tasks: [] });
const att = (ms, score, total = 5, logs = [], ch = "pecahan") => ({
  ts: iso(ms), subjectId: "math", subjectName: "Matematik", chapterId: ch, chapterTitle: "Pecahan", score, total, questionLogs: logs
});

// Weak baseline: 2 attempts, 1/5 and 0/5 -> 1/10 = 10% lemah (not provisional)
let p = mk([att(t0 + 1000, 0), att(t0, 1)]);

// 1. creates a task for a weak chapter
let r = T.refresh(p, t0 + 2000);
p.tasks = r.tasks;
eq("creates one active task for weak chapter", [r.tasks.length, r.tasks[0].status, r.tasks[0].cycle, r.tasks[0].baseline], [1, "aktif", 1, 10]);
eq("due date is 7 days later", r.tasks[0].dueTs, iso(t0 + 2000 + 7 * D));

// 2. does not duplicate when refreshed again
r = T.refresh(p, t0 + 3000);
eq("no duplicate on refresh", r.tasks.length, 1);

// 3. provisional (1 attempt) chapters get no task
eq("single attempt -> no task", T.refresh(mk([att(t0, 0)]), t0).tasks.length, 0);

// 4. strong chapters get no task
eq("strong chapter -> no task", T.refresh(mk([att(t0 + 1, 5), att(t0, 5)]), t0).tasks.length, 0);

// 5. success: 3 new attempts at 4/5 -> selesai, baik
let q = JSON.parse(JSON.stringify(p));
q.history = [att(t0 + 5000, 4), att(t0 + 4000, 4), att(t0 + 3500, 4), ...q.history];
r = T.refresh(q, t0 + 6000);
eq("3 good attempts -> selesai/baik", [r.tasks[0].status, r.tasks[0].result, r.tasks[0].sincePct], ["selesai", "baik", 80]);

// 6. attempts before the task was created do not count
q = JSON.parse(JSON.stringify(p));
q.history = [att(t0 + 1000, 5), ...q.history]; // ts earlier than task created (t0+2000)
r = T.refresh(q, t0 + 6000);
eq("older attempts ignored", [r.tasks[0].status, T.attemptsSince(q, r.tasks[0]).count], ["aktif", 0]);

// 7. unsuccessful cycle -> tamat + new cycle 2 with new baseline
q = JSON.parse(JSON.stringify(p));
q.history = [att(t0 + 5000, 2), att(t0 + 4000, 2), att(t0 + 3500, 2), ...q.history]; // 40%: not >=70 but +30 vs baseline 10 -> baik by delta
r = T.refresh(q, t0 + 6000);
eq("unsuccessful but improved -> tamat/baik, next cycle 2", [r.tasks[0].status, r.tasks[0].result, r.tasks[1].cycle, r.tasks[1].baseline], ["tamat", "baik", 2, 40]);

// 8. same / teruk results
q = JSON.parse(JSON.stringify(p));
q.history = [att(t0 + 5000, 1), att(t0 + 4000, 0), att(t0 + 3500, 0), ...q.history]; // 1/15 = 7% vs baseline 10
r = T.refresh(q, t0 + 6000);
eq("no change -> result sama", r.tasks[0].result, "sama");
q.tasks[0].baseline = 60; // pretend baseline higher -> 7 <= 50 -> teruk
r = T.refresh(q, t0 + 6000);
eq("big drop -> result teruk", r.tasks[0].result, "teruk");

// 9. escalation after 3 unsuccessful cycles
let e = mk([att(t0 + 1000, 0), att(t0, 1)]);
let now = t0 + 2000;
e.tasks = T.refresh(e, now).tasks;
for (let cycle = 1; cycle <= 3; cycle++) {
  now += 2 * D;
  e.history = [att(now + 3, 1), att(now + 2, 1), att(now + 1, 1), ...e.history];
  now += 1000;
  e.tasks = T.refresh(e, now).tasks;
}
const last = e.tasks[e.tasks.length - 1];
eq("3 failed cycles -> rujuk_guru", [last.status, last.cycle], ["rujuk_guru", 3]);
now += D;
eq("rujuk_guru task is not duplicated", T.refresh(e, now).tasks.filter((t) => t.status === "rujuk_guru").length, 1);
// recovery closes it
e.history = [att(now + 3, 5), att(now + 2, 5), att(now + 1, 5), ...e.history];
eq("recovery closes rujuk_guru", T.refresh(e, now + 100).tasks.filter((t) => t.status === "rujuk_guru").length, 0);

// 10. due date with at least 1 attempt finalises early; with 0 attempts stays active + overdue
q = JSON.parse(JSON.stringify(p));
r = T.refresh(q, t0 + 9 * D);
eq("due with 0 attempts stays active", r.tasks[0].status, "aktif");
eq("overdue flag", T.isOverdue(r.tasks[0], t0 + 9 * D), true);
q.history = [att(t0 + 8 * D, 1), ...q.history];
r = T.refresh(q, t0 + 9 * D);
eq("due with 1 attempt finalises", r.tasks[0].status !== "aktif", true);

// 11. dominant mistake picks concept when same question repeats
const logsA = [log("QQ", false, "x", 6), log("Q2", false, "x", 2)];
const logsB = [log("QQ", false, "y", 6)];
q = mk([att(t0 + 1000, 0, 5, logsB), att(t0, 1, 5, logsA)]);
eq("dominant mistake concept", T.refresh(q, t0 + 2000).tasks[0].dominant, "concept");

// 12. next practice
const task = { gradeId: "d6", subjectId: "math", chapterId: "pecahan" };
eq("next unplayed set", T.nextPractice({ setBest: { "d6:math:pecahan:1": {}, "d6:math:pecahan:2": {} } }, task, 5), { setNum: 3, flash: false });
eq("all played -> flash", T.nextPractice({ setBest: { "d6:math:pecahan:1": {} } }, task, 1), { setNum: null, flash: true });

// 13. guidance text exists for every dominant type and has no empty fields
["concept", "careless", "timeout", "slow", null].forEach((d) => {
  const g = T.guidance({ dominant: d });
  eq(`guidance complete for ${d}`, !!(g.diagnosis && g.steps.length === 3 && g.questions.length === 2), true);
});

// 14. teacher message
const msg = T.teacherMessage("Aisyah", { subjectName: "Matematik", chapterTitle: "Pecahan", cycle: 3, sincePct: 35 }, 35);
eq("teacher message contains key facts", ["Aisyah", "Matematik", "Pecahan", "35%", "3 kitaran"].every((s) => msg.includes(s)), true);

console.log(failed === 0 ? "TASK_TESTS_PASSED" : `TASK_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
