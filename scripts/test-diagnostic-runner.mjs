import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";
import { D1Store } from "../worker/src/store_d1.js";

const require = createRequire(import.meta.url);
const Runner = require("../js/diagnosticRunner.js");
const Diagnostics = require("../js/diagnostics.js");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const bank = JSON.parse(fs.readFileSync(path.join(rootDir, "js", "data", "diagnostic_t2_math.json"), "utf8"));

let failed = 0;
const eq = (name, actual, expected) => {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    pass ? "PASS" : "FAIL",
    name,
    pass ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`
  );
  if (!pass) failed++;
};
const ok = (name, cond, detail = "") => {
  console.log(cond ? "PASS" : "FAIL", name, cond ? "" : detail);
  if (!cond) failed++;
};

// ======================= 1. QUESTION SELECTION & PRIORITIZATION =======================
{
  const banks = Runner.getAvailableBanks({ t2: { math: bank } }, "t2");
  eq("getAvailableBanks finds t2 math bank", [banks.length, banks[0].nodeCount, banks[0].questionCount], [1, 7, 35]);
  eq("getAvailableBanks empty for grade without bank", Runner.getAvailableBanks({ t2: { math: bank } }, "d6"), []);

  const picked = Runner.selectDiagnosticQuestions(bank, { count: 15, seed: 123 });
  eq("selects exactly 15 questions", picked.length, 15);
  eq("all 15 questions have unique IDs", new Set(picked.map((q) => q.id)).size, 15);
  eq("covers all 7 syllabus_nodes", new Set(picked.map((q) => q.syllabus_node_id)).size, 7);

  const rawById = new Map(bank.questions.map((q) => [q.id, q]));
  let optMatch = true;
  for (const item of picked) {
    const raw = rawById.get(item.id);
    const chosenObj = item.options.find((o) => o.letter === item.correctLetter);
    if (!chosenObj || chosenObj.text !== raw.options_json[raw.correct_option]) optMatch = false;
    if (item.options.length !== 4) optMatch = false;
  }
  ok("shuffled options map cleanly to original correct answer", optMatch);

  // Prioritizing prerequisite node when dependent subtopic fails >= 50%
  const prioritized = Runner.selectDiagnosticQuestions(bank, {
    count: 15,
    seed: 99,
    priorAttempts: [
      { syllabus_node_id: "t2_math_alg_02", is_correct: 0 },
      { syllabus_node_id: "t2_math_alg_02", is_correct: 0 }
    ]
  });
  const alg01Count = prioritized.filter((q) => q.syllabus_node_id === "t2_math_alg_01").length;
  ok("prioritizes unprobed prerequisite t2_math_alg_01 (gets >= 3 slots)", alg01Count >= 3, `got ${alg01Count}`);
}

// ======================= 2. SILENT PERFORMANCE.NOW() TIMING & SESSION STATE =======================
let finalSummary = null;
{
  const startUtcMs = Date.parse("2026-11-25T13:15:00Z"); // 21:15:00+08:00 MYT
  const sess = Runner.createSessionState({
    studentId: "kid_test",
    gradeId: "t2",
    subjectId: "math",
    bank,
    count: 15,
    seed: 42,
    nowMs: startUtcMs,
    perfNow: 1000
  });

  eq("first session is INITIAL_DIAGNOSTIC", sess.session_type, "INITIAL_DIAGNOSTIC");
  eq("started_at formatted in +08:00 MYT", sess.started_at, "2026-11-25T21:15:00+08:00");
  eq("parseMytHour reads 21 from MYT timestamp", Diagnostics.parseMytHour(sess.started_at), 21);

  // Q0: wrong & very fast (2000ms < 0.4 * >=30000ms) -> CARELESS_RUSH
  const wrongPick0 = sess.items[0].correctLetter === "A" ? "B" : "A";
  const r0 = Runner.recordQuestionAnswer(sess, wrongPick0, { perfNow: 3000, nowMs: startUtcMs + 2000 });
  eq("Q0 time_spent_ms = 2000 and CARELESS_RUSH", [r0.attempt.time_spent_ms, r0.attempt.is_correct, r0.attempt.error_classification, r0.isLast], [
    2000,
    0,
    "CARELESS_RUSH",
    false
  ]);

  // Duplicate click while awaitingNext must be ignored
  eq("duplicate click while awaitingNext returns null", Runner.recordQuestionAnswer(sess, sess.items[0].correctLetter, { perfNow: 3500 }), null);

  // Child reads explanation for 25,000ms -> advance resets questionShownAtPerf to 28000
  ok("advanceToNextQuestion returns true", Runner.advanceToNextQuestion(sess, 28000));
  const r1 = Runner.recordQuestionAnswer(sess, sess.items[1].correctLetter, { perfNow: 38000, nowMs: startUtcMs + 37000 });
  eq("Q1 excludes explanation reading delay (10000ms, MASTERY)", [r1.attempt.time_spent_ms, r1.attempt.is_correct, r1.attempt.error_classification], [
    10000,
    1,
    "MASTERY"
  ]);

  // Q2: correct & > 1.5 * expected_time_ms -> LOW_FLUENCY
  Runner.advanceToNextQuestion(sess, 40000);
  const q2SlowMs = sess.items[2].expected_time_ms * 2;
  const r2 = Runner.recordQuestionAnswer(sess, sess.items[2].correctLetter, { perfNow: 40000 + q2SlowMs, nowMs: startUtcMs + 160000 });
  eq("Q2 slow correct -> LOW_FLUENCY", [r2.attempt.time_spent_ms, r2.attempt.error_classification], [q2SlowMs, "LOW_FLUENCY"]);

  // Q3: wrong & >= 0.4 * expected_time_ms -> CONCEPTUAL_GAP
  Runner.advanceToNextQuestion(sess, 200000);
  const wrongPick3 = sess.items[3].correctLetter === "A" ? "B" : "A";
  const q3SlowMs = Math.round(sess.items[3].expected_time_ms * 0.8);
  const r3 = Runner.recordQuestionAnswer(sess, wrongPick3, { perfNow: 200000 + q3SlowMs, nowMs: startUtcMs + 240000 });
  eq("Q3 slow wrong -> CONCEPTUAL_GAP", [r3.attempt.time_spent_ms, r3.attempt.error_classification], [q3SlowMs, "CONCEPTUAL_GAP"]);

  // Complete remaining Q4..Q14
  let clockPerf = 250000;
  for (let idx = 4; idx < 15; idx++) {
    Runner.advanceToNextQuestion(sess, clockPerf);
    clockPerf += 20000;
    Runner.recordQuestionAnswer(sess, sess.items[idx].correctLetter, { perfNow: clockPerf, nowMs: startUtcMs + idx * 30000 });
  }

  ok("session marks completed_at after Q15", typeof sess.completed_at === "string" && sess.completed_at.endsWith("+08:00"));
  eq("advance past last question returns false", Runner.advanceToNextQuestion(sess, clockPerf + 1000), false);

  finalSummary = Runner.buildSessionSummary(sess);
  eq("summary score/total/attempts match", [finalSummary.score, finalSummary.total, finalSummary.attemptLogs.length], [13, 15, 15]);

  // Second checkup switches to WEEKLY_CHECKUP
  const second = Runner.createSessionState({
    studentId: "kid_test",
    gradeId: "t2",
    subjectId: "math",
    bank,
    priorAttempts: finalSummary.attemptLogs,
    nowMs: startUtcMs + 86400000,
    perfNow: 0
  });
  eq("repeat checkup is WEEKLY_CHECKUP", second.session_type, "WEEKLY_CHECKUP");
}

// ======================= 3. REAL D1STORE + SQLITE PERSISTENCE ROUND-TRIP =======================
{
  const schemaSql = fs.readFileSync(path.join(rootDir, "worker", "schema.sql"), "utf8");
  const rawDb = new DatabaseSync(":memory:");
  rawDb.exec("PRAGMA foreign_keys = ON;");
  rawDb.exec(schemaSql);

  const d1Adapter = {
    prepare(sql) {
      const stmt = rawDb.prepare(sql);
      return {
        bind(...params) {
          return {
            async run() {
              const info = stmt.run(...params);
              return { success: true, meta: info };
            },
            async first() {
              return stmt.get(...params) || null;
            },
            async all() {
              return { results: stmt.all(...params) };
            }
          };
        }
      };
    }
  };

  rawDb.prepare("INSERT INTO parents (id, google_sub, email, name, created_at) VALUES (?, ?, ?, ?, ?)").run("pa_d1", "sub_d1", "ibu@example.com", "Ibu", 1000);
  rawDb.prepare("INSERT INTO children (id, display_name, grade_id, device_token_hash, created_at) VALUES (?, ?, ?, ?, ?)").run("ch_d1", "Angah", "t2", "hash_d1", 1000);
  rawDb.prepare("INSERT INTO links (parent_id, child_id, created_at) VALUES (?, ?, ?)").run("pa_d1", "ch_d1", 1000);

  const store = new D1Store(d1Adapter);
  await store.saveDiagnosticSession({
    childId: "ch_d1",
    session: finalSummary.sessionRecord,
    attempts: finalSummary.attemptLogs,
    syllabusNodes: bank.syllabus_nodes,
    questions: bank.questions.filter((q) => finalSummary.attemptLogs.some((a) => a.question_id === q.id))
  });

  // Re-save same session (ON CONFLICT DO UPDATE must NOT cascade-delete attempt_logs!)
  await store.saveDiagnosticSession({
    childId: "ch_d1",
    session: finalSummary.sessionRecord,
    attempts: finalSummary.attemptLogs,
    syllabusNodes: bank.syllabus_nodes,
    questions: []
  });

  const stored = await store.listDiagnosticsForChild("ch_d1");
  eq("D1Store persists 1 session and 15 attempt_logs idempotently", [stored.sessions.length, stored.attempts.length, stored.syllabusNodes.length], [
    1,
    15,
    7
  ]);

  const report = Diagnostics.generateParentDiagnosticSummary("ch_d1", stored.attempts, stored.syllabusNodes, { gradeLevel: "t2" });
  eq("D1Store diagnostic logs feed cleanly into Diagnostics summary", [report.totalAttempts, report.habitAlert.carelessRushCount, report.habitAlert.conceptualGapCount, report.habitAlert.lowFluencyCount], [
    15,
    1,
    1,
    1
  ]);

  await store.deleteChild("ch_d1");
  const afterDelete = await store.listDiagnosticsForChild("ch_d1");
  eq("D1Store.deleteChild removes diagnostic sessions and attempt_logs", [afterDelete.sessions.length, afterDelete.attempts.length], [0, 0]);
  rawDb.close();
}

// ======================= 4. DARJAH 6 ALL-5 UASA DIAGNOSTIC BANKS =======================
{
  const d6Specs = [
    ["math", 10, 50],
    ["sains", 13, 65],
    ["bm", 8, 40],
    ["bi", 8, 40],
    ["sejarah", 8, 40]
  ];
  const d6BanksMap = { d6: {} };
  for (const [subj] of d6Specs) {
    d6BanksMap.d6[subj] = JSON.parse(fs.readFileSync(path.join(rootDir, "js", "data", `diagnostic_d6_${subj}.json`), "utf8"));
  }

  const avail = Runner.getAvailableBanks(d6BanksMap, "d6");
  eq("getAvailableBanks lists all 5 D6 UASA subjects", avail.map((b) => [b.subjectId, b.nodeCount, b.questionCount]), d6Specs);

  for (const [subj, nodeCount] of d6Specs) {
    const subjBank = d6BanksMap.d6[subj];
    const picked = Runner.selectDiagnosticQuestions(subjBank, { count: 15, seed: 2027 });
    eq(`D6 ${subj}: selects 15 unique questions`, [picked.length, new Set(picked.map((q) => q.id)).size], [15, 15]);
    eq(`D6 ${subj}: covers all ${nodeCount} syllabus_nodes in 15 questions`, new Set(picked.map((q) => q.syllabus_node_id)).size, nodeCount);
  }

  // Prerequisite prioritization on D6 math chain (failing d6_math_wang_01 boosts unprobed d6_math_pec_02)
  const prioritizedD6 = Runner.selectDiagnosticQuestions(d6BanksMap.d6.math, {
    count: 15,
    seed: 77,
    priorAttempts: [
      { syllabus_node_id: "d6_math_wang_01", is_correct: 0 },
      { syllabus_node_id: "d6_math_wang_01", is_correct: 0 }
    ]
  });
  const pec02Count = prioritizedD6.filter((q) => q.syllabus_node_id === "d6_math_pec_02").length;
  ok("D6 math prioritizes unprobed prerequisite d6_math_pec_02 (>= 2 slots)", pec02Count >= 2, `got ${pec02Count}`);
}

console.log(failed === 0 ? "DIAGNOSTIC_RUNNER_TESTS_PASSED" : `DIAGNOSTIC_RUNNER_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
