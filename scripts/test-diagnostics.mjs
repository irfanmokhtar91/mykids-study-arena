import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const require = createRequire(import.meta.url);
const D = require("../js/diagnostics.js");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

let failed = 0;
const eq = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    ok ? "PASS" : "FAIL",
    name,
    ok ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`
  );
  if (!ok) failed++;
};
const ok = (name, cond, detail = "") => {
  console.log(cond ? "PASS" : "FAIL", name, cond ? "" : detail);
  if (!cond) failed++;
};

// ======================= 1. D1 / SQLITE SCHEMA VALIDATION =======================
{
  const schemaSql = fs.readFileSync(path.join(rootDir, "worker", "schema.sql"), "utf8");
  const db = new DatabaseSync(":memory:");
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(schemaSql);
  db.exec(schemaSql); // idempotent on re-run

  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name")
    .all()
    .map((r) => r.name);

  for (const t of [
    "parents",
    "children",
    "links",
    "pairs",
    "marks",
    "photos",
    "rate",
    "syllabus_nodes",
    "questions",
    "assessment_sessions",
    "attempt_logs"
  ]) {
    ok(`schema creates table ${t}`, tables.includes(t));
  }

  // Legacy insert without school_type + insert with school_type
  db.prepare(
    "INSERT INTO parents (id, google_sub, email, name, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run("pa_1", "sub_1", "parent@example.com", "Ibu", 1000);
  db.prepare(
    "INSERT INTO children (id, display_name, grade_id, device_token_hash, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run("ch_legacy", "Adik", "d6", "hash_a", 1000);
  db.prepare(
    "INSERT INTO children (id, display_name, grade_id, device_token_hash, created_at, school_type) VALUES (?, ?, ?, ?, ?, ?)"
  ).run("ch_sk", "Angah", "t2", "hash_b", 1000, "SMK");
  db.prepare("INSERT INTO links (parent_id, child_id, created_at) VALUES (?, ?, ?)").run("pa_1", "ch_sk", 1000);

  // Diagnostic tables valid inserts
  db.prepare(
    "INSERT INTO syllabus_nodes (id, subject, grade_level, chapter_id, topic_name, subtopic_name, prerequisite_node_id, expected_time_ms, bloom_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).run("t2_math_int", "math", "t2", "integer", "Nombor Nisbah", "Operasi Integer", null, 30000, "Remember");
  db.prepare(
    "INSERT INTO syllabus_nodes (id, subject, grade_level, chapter_id, topic_name, subtopic_name, prerequisite_node_id, expected_time_ms, bloom_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).run("t2_math_alg", "math", "t2", "ungkapan_algebra", "Ungkapan Algebra", "Kembangan", "t2_math_int", 45000, "Apply");

  db.prepare(
    "INSERT INTO questions (id, syllabus_node_id, difficulty_1_to_5, prompt_text, options_json, correct_option, explanation_text) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).run(
    "q_1",
    "t2_math_alg",
    3,
    "Kembangkan -2(x - 3)",
    JSON.stringify({ A: "-2x - 6", B: "-2x + 6", C: "2x - 6", D: "-2x - 3" }),
    "B",
    "Negatif darab negatif menghasilkan positif (+6)."
  );

  db.prepare(
    "INSERT INTO assessment_sessions (id, student_id, session_type, started_at, completed_at) VALUES (?, ?, ?, ?, ?)"
  ).run("sess_1", "ch_sk", "INITIAL_DIAGNOSTIC", "2026-11-25T20:15:00+08:00", "2026-11-25T20:28:00+08:00");

  db.prepare(
    "INSERT INTO attempt_logs (id, session_id, student_id, question_id, syllabus_node_id, is_correct, time_spent_ms, error_classification, answered_at_myt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).run("att_1", "sess_1", "ch_sk", "q_1", "t2_math_alg", 0, 9000, "CARELESS_RUSH", "2026-11-25T20:20:00+08:00");

  const expectReject = (label, fn) => {
    let threw = false;
    try {
      fn();
    } catch (e) {
      threw = true;
    }
    ok(label, threw);
  };

  expectReject("CHECK rejects difficulty_1_to_5 = 6", () => {
    db.prepare(
      "INSERT INTO questions (id, syllabus_node_id, difficulty_1_to_5, prompt_text, options_json, correct_option, explanation_text) VALUES ('q_bad', 't2_math_alg', 6, 'p', '{}', 'A', 'e')"
    ).run();
  });
  expectReject("CHECK rejects invalid bloom_level", () => {
    db.prepare(
      "INSERT INTO syllabus_nodes (id, subject, grade_level, topic_name, subtopic_name, expected_time_ms, bloom_level) VALUES ('n_bad', 'math', 't2', 'T', 'S', 30000, 'Create')"
    ).run();
  });
  expectReject("CHECK rejects invalid session_type", () => {
    db.prepare(
      "INSERT INTO assessment_sessions (id, student_id, session_type, started_at) VALUES ('s_bad', 'ch_sk', 'DRILL', '2026-11-25T10:00:00+08:00')"
    ).run();
  });
  expectReject("CHECK rejects invalid error_classification", () => {
    db.prepare(
      "INSERT INTO attempt_logs (id, session_id, student_id, question_id, syllabus_node_id, is_correct, time_spent_ms, error_classification, answered_at_myt) VALUES ('a_bad', 'sess_1', 'ch_sk', 'q_1', 't2_math_alg', 0, 1000, 'GUESS', '2026-11-25T20:20:00+08:00')"
    ).run();
  });
  expectReject("CHECK rejects invalid correct_option", () => {
    db.prepare(
      "INSERT INTO questions (id, syllabus_node_id, difficulty_1_to_5, prompt_text, options_json, correct_option, explanation_text) VALUES ('q_bad2', 't2_math_alg', 2, 'p', '{}', 'E', 'e')"
    ).run();
  });
  expectReject("CHECK rejects negative time_spent_ms", () => {
    db.prepare(
      "INSERT INTO attempt_logs (id, session_id, student_id, question_id, syllabus_node_id, is_correct, time_spent_ms, error_classification, answered_at_myt) VALUES ('a_bad2', 'sess_1', 'ch_sk', 'q_1', 't2_math_alg', 0, -5, 'CONCEPTUAL_GAP', '2026-11-25T20:20:00+08:00')"
    ).run();
  });

  db.close();
}

// ======================= 2. CLASSIFY ATTEMPT =======================
eq("wrong and < 0.4 * expected -> CARELESS_RUSH", D.classifyAttempt(false, 11999, 30000), "CARELESS_RUSH");
eq("wrong and == 0.4 * expected -> CONCEPTUAL_GAP", D.classifyAttempt(false, 12000, 30000), "CONCEPTUAL_GAP");
eq("correct and == 1.5 * expected -> MASTERY", D.classifyAttempt(true, 45000, 30000), "MASTERY");
eq("correct and > 1.5 * expected -> LOW_FLUENCY", D.classifyAttempt(true, 45001, 30000), "LOW_FLUENCY");
eq("numeric 1/0 isCorrect works", [D.classifyAttempt(1, 10000, 30000), D.classifyAttempt(0, 1000, 30000)], [
  "MASTERY",
  "CARELESS_RUSH"
]);
eq("timedOut fast wrong -> CONCEPTUAL_GAP", D.classifyAttempt(false, 100, 30000, { timedOut: true }), "CONCEPTUAL_GAP");
eq("missing expectedTimeMs fallback fast wrong -> CARELESS_RUSH", D.classifyAttempt(false, 2000, null), "CARELESS_RUSH");
eq("missing expectedTimeMs fallback slow wrong -> CONCEPTUAL_GAP", D.classifyAttempt(false, 6000, 0), "CONCEPTUAL_GAP");
eq("missing expectedTimeMs fallback 0ms wrong -> CONCEPTUAL_GAP", D.classifyAttempt(false, 0, undefined), "CONCEPTUAL_GAP");
eq("missing expectedTimeMs fallback correct -> MASTERY", D.classifyAttempt(true, 90000, null), "MASTERY");

// ======================= 3. KPM GRADING =======================
const uasaCases = [
  [100, "d6", "A", "Cemerlang", false, "NONE"],
  [82, "Year 4", "A", "Cemerlang", false, "NONE"],
  [81.5, "Year 5", "A", "Cemerlang", false, "NONE"],
  [81, "d6", "B", "Kepujian", false, "NONE"],
  [66, "t2", "B", "Kepujian", false, "NONE"],
  [65, "Form 2", "C", "Baik", false, "NONE"],
  [50, "Tingkatan 3", "C", "Baik", false, "NONE"],
  [49.4, "d6", "D", "Memuaskan", true, "FALSE_COMFORT"],
  [35, "t2", "D", "Memuaskan", true, "FALSE_COMFORT"],
  [34, "d6", "E", "Mencapai Tahap Minimum", true, "CRITICAL"],
  [20, "d6", "E", "Mencapai Tahap Minimum", true, "CRITICAL"],
  [19.4, "d6", "F", "Belum Mencapai Tahap Minimum", false, "FAIL"],
  [-5, "d6", "F", "Belum Mencapai Tahap Minimum", false, "FAIL"],
  [120, "d6", "A", "Cemerlang", false, "NONE"]
];
uasaCases.forEach(([pct, lvl, grade, desc, fc, alert]) => {
  const res = D.calculateKpmGrade(pct, lvl);
  eq(`UASA ${pct}% (${lvl})`, [res.grade, res.descriptor, res.isFalseComfortZone, res.alertLevel, res.scale, res.verified], [
    grade,
    desc,
    fc,
    alert,
    "UASA",
    true
  ]);
});

const spmCases = [
  [90, "t4", "A+", false, "NONE"],
  [80, "Form 4", "A", false, "NONE"],
  [70, "Form 5", "A-", false, "NONE"],
  [65, "Tingkatan 5", "B+", false, "NONE"],
  [60, "t4", "B", false, "NONE"],
  [55, "t4", "C+", false, "NONE"],
  [50, "t4", "C", false, "NONE"],
  [45, "t4", "D", true, "PASS_WITHOUT_CREDIT"],
  [40, "t4", "E", true, "PASS_WITHOUT_CREDIT"],
  [39, "t4", "G", false, "FAIL"]
];
spmCases.forEach(([pct, lvl, grade, fc, alert]) => {
  const res = D.calculateKpmGrade(pct, lvl);
  eq(`SPM ${pct}% (${lvl})`, [res.grade, res.isFalseComfortZone, res.alertLevel, res.scale, res.verified], [
    grade,
    fc,
    alert,
    "SPM",
    false
  ]);
});

// ======================= 4. PARENT DIAGNOSTIC SUMMARY =======================
const NODES = [
  { id: "n_int", topic_name: "Nombor Nisbah", subtopic_name: "Operasi Integer", prerequisite_node_id: null, expected_time_ms: 30000 },
  { id: "n_alg", topic_name: "Ungkapan Algebra", subtopic_name: "Kembangan", prerequisite_node_id: "n_int", expected_time_ms: 40000 },
  { id: "n_lin", topic_name: "Persamaan Linear", subtopic_name: "Linear 1 Pemboleh Ubah", prerequisite_node_id: "n_alg", expected_time_ms: 45000 },
  { id: "n_geo", topic_name: "Poligon", subtopic_name: "Sudut Pedalaman", prerequisite_node_id: null, expected_time_ms: 35000 }
];

const mkAtt = (nodeId, okBool, ms, at = "2026-11-25T15:00:00+08:00", sid = "ch_1") => ({
  student_id: sid,
  syllabus_node_id: nodeId,
  is_correct: okBool,
  time_spent_ms: ms,
  answered_at_myt: at
});

// 4a. Empty attempts safe
{
  const s = D.generateParentDiagnosticSummary("ch_1", [], NODES);
  eq("empty summary safe", [s.totalAttempts, s.topStrength, s.topRootCauseWeakness, s.habitAlert.dominantErrorType], [
    0,
    null,
    null,
    "NONE"
  ]);
  ok("empty summary prescription is 1 non-empty sentence", typeof s.tuitionPrescription === "string" && s.tuitionPrescription.endsWith("."));
}

// 4b. >= 50% fail on n_alg with unprobed prerequisite n_int -> triggers probe
{
  const atts = [
    mkAtt("n_geo", true, 20000),
    mkAtt("n_geo", true, 22000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", false, 35000),
    mkAtt("n_alg", true, 25000),
    mkAtt("n_alg", true, 25000) // 2/4 fail = 50%
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, NODES, { gradeLevel: "Form 2" });
  eq("topStrength picks n_geo", s.topStrength.nodeId, "n_geo");
  eq("unprobed prerequisite flagged at exactly 50% failure", [
    s.topRootCauseWeakness.nodeId,
    s.topRootCauseWeakness.needsPrerequisiteProbe,
    s.topRootCauseWeakness.prerequisiteStatus,
    s.topRootCauseWeakness.probeNode && s.topRootCauseWeakness.probeNode.id
  ], ["n_alg", true, "UNPROBED", "n_int"]);
  ok("prescription mentions probing prerequisite", s.tuitionPrescription.includes("Operasi Integer"));
}

// 4c. Deep prerequisite trace: n_lin fails 100%, n_alg fails 67%, n_int fails 50% -> traces to n_int
{
  const atts = [
    mkAtt("n_geo", true, 15000),
    mkAtt("n_lin", false, 30000),
    mkAtt("n_lin", false, 32000),
    mkAtt("n_lin", false, 35000),
    mkAtt("n_lin", false, 28000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", true, 20000),
    mkAtt("n_int", false, 25000),
    mkAtt("n_int", true, 15000)
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, NODES);
  eq("traces multi-hop root cause to n_int", [
    s.topRootCauseWeakness.nodeId,
    s.topRootCauseWeakness.triggeredFromNodeId,
    s.topRootCauseWeakness.prerequisiteStatus,
    s.topRootCauseWeakness.needsPrerequisiteProbe,
    s.topRootCauseWeakness.chain
  ], ["n_int", "n_lin", "CONFIRMED_GAP", false, ["n_lin", "n_alg", "n_int"]]);
}

// 4c-bis. Deeper unprobed prerequisite: n_lin fails 100%, n_alg fails 67%, n_int unprobed -> CONFIRMED_GAP_NEEDS_DEEPER_PROBE
{
  const atts = [
    mkAtt("n_lin", false, 30000),
    mkAtt("n_lin", false, 30000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", true, 20000)
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, NODES);
  eq("traces to n_alg and flags deeper unprobed n_int", [
    s.topRootCauseWeakness.nodeId,
    s.topRootCauseWeakness.triggeredFromNodeId,
    s.topRootCauseWeakness.prerequisiteStatus,
    s.topRootCauseWeakness.needsPrerequisiteProbe,
    s.topRootCauseWeakness.probeNode && s.topRootCauseWeakness.probeNode.id
  ], ["n_alg", "n_lin", "CONFIRMED_GAP_NEEDS_DEEPER_PROBE", true, "n_int"]);
}

// 4d. Prerequisite mastered (< 50% failure on n_int) keeps observed n_alg as root cause
{
  const atts = [
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", false, 30000),
    mkAtt("n_int", true, 15000),
    mkAtt("n_int", true, 15000),
    mkAtt("n_int", true, 15000),
    mkAtt("n_int", false, 20000) // 25% failure -> mastered
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, NODES);
  eq("mastered prerequisite keeps observed node", [
    s.topRootCauseWeakness.nodeId,
    s.topRootCauseWeakness.prerequisiteStatus,
    s.topRootCauseWeakness.needsPrerequisiteProbe
  ], ["n_alg", "PREREQUISITE_MASTERED", false]);
}

// 4e. < 50% failure does NOT trigger prerequisite probe
{
  const atts = [
    mkAtt("n_alg", false, 30000),
    mkAtt("n_alg", true, 20000),
    mkAtt("n_alg", true, 20000),
    mkAtt("n_alg", true, 20000) // 25% fail
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, NODES);
  eq("< 50% fail does not probe prerequisite", [
    s.topRootCauseWeakness.needsPrerequisiteProbe,
    s.topRootCauseWeakness.prerequisiteStatus
  ], [false, "NONE"]);
}

// 4f. Cycle safety (a -> b -> a)
{
  const cycleNodes = [
    { id: "a", topic_name: "A", subtopic_name: "Sub A", prerequisite_node_id: "b", expected_time_ms: 20000 },
    { id: "b", topic_name: "B", subtopic_name: "Sub B", prerequisite_node_id: "a", expected_time_ms: 20000 }
  ];
  const atts = [mkAtt("a", false, 15000), mkAtt("b", false, 15000)];
  const s = D.generateParentDiagnosticSummary("ch_1", atts, cycleNodes);
  ok("cycle guard terminates cleanly", s.topRootCauseWeakness.chain.length === 2);
}

// 4g. Habit alert: CARELESS_RUSH dominant vs CONCEPTUAL_GAP dominant + JSON safety
{
  const carelessAtts = [
    mkAtt("n_geo", false, 5000),
    mkAtt("n_geo", false, 4000),
    mkAtt("n_geo", false, 6000),
    mkAtt("n_geo", true, 20000)
  ];
  const s = D.generateParentDiagnosticSummary("ch_1", carelessAtts, NODES);
  eq("careless dominant habit", [
    s.habitAlert.carelessRushCount,
    s.habitAlert.conceptualGapCount,
    s.habitAlert.ratioLabel,
    s.habitAlert.dominantErrorType
  ], [3, 0, "3:0", "CARELESS_RUSH"]);
  ok("carelessToConceptualRatio is JSON-finite (not Infinity)", Number.isFinite(s.habitAlert.carelessToConceptualRatio));
  ok("JSON stringify preserves number", JSON.parse(JSON.stringify(s)).habitAlert.carelessToConceptualRatio === 3);
}

// 4h. Late-night MYT fatigue detection (>= 20 percentage point drop) & timezone conversion
{
  // Pre-21:00 MYT: 9/10 = 90% accuracy (12:30Z == 20:30 MYT, plus +08:00 and naive MYT strings)
  const dayAtts = Array.from({ length: 9 }, (_, i) =>
    mkAtt("n_geo", true, 20000, i % 2 === 0 ? "2026-11-25T12:30:00Z" : "2026-11-25T20:45:00+08:00")
  );
  dayAtts.push(mkAtt("n_geo", false, 20000, "2026-11-25 18:00:00"));

  // At/after 21:00 MYT: 7/10 = 70% accuracy (drop = 20 pp). Include 13:00Z (21:00 MYT) and 16:30Z (00:30 MYT)
  const nightAtts = Array.from({ length: 7 }, () => mkAtt("n_geo", true, 20000, "2026-11-25T13:00:00Z"));
  nightAtts.push(mkAtt("n_geo", false, 5000, "2026-11-25T21:15:00"));
  nightAtts.push(mkAtt("n_geo", false, 5000, "2026-11-25T22:30:00+08:00"));
  nightAtts.push(mkAtt("n_geo", false, 5000, "2026-11-25T16:30:00Z"));

  const s = D.generateParentDiagnosticSummary("ch_1", [...dayAtts, ...nightAtts], NODES);
  eq("fatigue detected at exact 20pp drop", [
    s.habitAlert.lateNightFatigue.detected,
    s.habitAlert.lateNightFatigue.accuracyDropPct,
    s.habitAlert.lateNightFatigue.before21.accuracyPct,
    s.habitAlert.lateNightFatigue.after21.accuracyPct
  ], [true, 20, 90, 70]);
  ok("lateNightFatigue message mentions 21:00 MYT", /21:00 MYT/.test(s.habitAlert.lateNightFatigue.message));
  ok("prescription mentions 21:00 MYT", /21:00 MYT/.test(s.tuitionPrescription));

  // Drop < 20pp (80% vs 70% -> 10pp) should NOT trigger
  const mildDay = [
    ...Array.from({ length: 8 }, () => mkAtt("n_geo", true, 20000, "2026-11-25T19:00:00+08:00")),
    ...Array.from({ length: 2 }, () => mkAtt("n_geo", false, 20000, "2026-11-25T19:30:00+08:00"))
  ];
  const mildSummary = D.generateParentDiagnosticSummary("ch_1", [...mildDay, ...nightAtts], NODES);
  eq("fatigue NOT detected at 10pp drop", [
    mildSummary.habitAlert.lateNightFatigue.detected,
    mildSummary.habitAlert.lateNightFatigue.accuracyDropPct
  ], [false, 10]);
}

// 4i. Mixed student_id filtering + 0% correct topStrength === null + WhatsApp summary
{
  const mixed = [
    mkAtt("n_geo", false, 20000, "2026-11-25T15:00:00+08:00", "ch_target"),
    mkAtt("n_geo", true, 20000, "2026-11-25T15:00:00+08:00", "ch_other")
  ];
  const s = D.generateParentDiagnosticSummary("ch_target", mixed, NODES, { gradeLevel: "d6" });
  eq("filters attempts to requested studentId", [s.totalAttempts, s.overallPct, s.topStrength, s.overallGrade.grade], [
    1,
    0,
    null,
    "F"
  ]);
  ok("whatsappSummary contains score and tutor action", /0% \(F/.test(s.whatsappSummary) && /Tutor Action:/.test(s.whatsappSummary));
}

console.log(failed === 0 ? "DIAGNOSTICS_TESTS_PASSED" : `DIAGNOSTICS_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
