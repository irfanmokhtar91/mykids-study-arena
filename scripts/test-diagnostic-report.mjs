import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const Report = require("../js/diagnosticReport.js");

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

// ======================= 1. DATE FORMATTING (dd/Mon/yyyy MYT) =======================
eq("formats +08:00 ISO date as dd/Mon/yyyy", Report.formatDateDdMonYyyy("2026-11-25T14:10:00+08:00"), "25/Nov/2026");
eq("shifts UTC rollover 16:30Z -> 26/Nov/2026 MYT", Report.formatDateDdMonYyyy("2026-11-25T16:30:00Z"), "26/Nov/2026");
eq("formats naive SQL date without timezone shift", Report.formatDateDdMonYyyy("2026-03-05 22:00:00"), "05/Mar/2026");
eq("invalid date returns dash", Report.formatDateDdMonYyyy("not-a-date"), "-");
eq("null date returns dash", Report.formatDateDdMonYyyy(null), "-");

// ======================= 2. SOURCE MERGING & DEDUPLICATION =======================
{
  const merged = Report.mergeDiagnosticSources({
    studentId: "kid_1",
    gradeId: "t2",
    profile: {
      gradeId: "t2",
      diagnosticSessions: [
        { id: "s1", started_at: "2026-11-24T10:00:00+08:00", synced: false },
        { id: "s2", started_at: "2026-11-25T10:00:00+08:00", synced: false }
      ],
      diagnosticAttempts: [
        { id: "a1", syllabus_node_id: "t2_math_pola_01", is_correct: 1, time_spent_ms: 15000, answered_at_myt: "2026-11-24T10:01:00+08:00" }
      ]
    },
    serverDiagnostics: {
      sessions: [{ id: "s1", started_at: "2026-11-24T10:00:00+08:00", synced: true }],
      attempts: [
        { id: "a1", syllabus_node_id: "t2_math_pola_01", is_correct: 1, time_spent_ms: 15000, answered_at_myt: "2026-11-24T10:01:00+08:00" },
        { id: "a2", syllabus_node_id: "t2_math_alg_01", is_correct: 0, time_spent_ms: 5000, answered_at_myt: "2026-11-25T10:02:00+08:00" }
      ],
      syllabusNodes: []
    },
    diagnosticBanks: { t2: { math: bank } }
  });
  eq("dedupes sessions newest-first", merged.sessions.map((s) => s.id), ["s2", "s1"]);
  eq("dedupes attempts newest-first", merged.attempts.map((a) => a.id), ["a2", "a1"]);
  eq("collects all 17 syllabus nodes from local bank", merged.syllabusNodes.length, 17);
}

// ======================= 3. EMPTY REPORT SAFETY =======================
{
  const empty = Report.buildReportData({ studentId: "kid_empty", studentName: "Adik", gradeId: "d6" });
  const html = Report.renderCardHtml(empty);
  eq("empty summary has 0 attempts", empty.summary.totalAttempts, 0);
  ok("empty HTML renders safe placeholder without copy button", html.includes("is-empty") && !html.includes("data-diag-copy"));
}

// ======================= 4. FULL UASA REPORT: FALSE COMFORT + PREREQUISITE TRACE + FATIGUE + COPY =======================
{
  const att = (id, nodeId, okBool, ms, at) => ({
    id,
    student_id: "kid_t2",
    syllabus_node_id: nodeId,
    is_correct: okBool ? 1 : 0,
    time_spent_ms: ms,
    answered_at_myt: at
  });

  // 15 attempts: 6/15 correct = 40% (UASA D Memuaskan / False Comfort Zone)
  // Pre-21:00 MYT: 6/8 = 75% accuracy; At/after 21:00 MYT: 0/7 = 0% accuracy (drop 75pp >= 20pp)
  const attempts = [
    // Strength: t2_math_pola_01 (3/3 = 100%)
    att("a1", "t2_math_pola_01", true, 18000, "2026-11-25T16:01:00+08:00"),
    att("a2", "t2_math_pola_01", true, 20000, "2026-11-25T16:02:00+08:00"),
    att("a3", "t2_math_pola_01", true, 15000, "2026-11-25T16:03:00+08:00"),
    // Neutral: t2_math_pola_02 (3/4 = 75%, 1 CARELESS_RUSH)
    att("a4", "t2_math_pola_02", true, 22000, "2026-11-25T16:04:00+08:00"),
    att("a5", "t2_math_pola_02", true, 25000, "2026-11-25T16:05:00+08:00"),
    att("a6", "t2_math_pola_02", true, 20000, "2026-11-25T16:06:00+08:00"),
    att("a7", "t2_math_pola_02", false, 5000, "2026-11-25T16:07:00+08:00"),
    // Observed weakest: t2_math_alg_03 (3/3 wrong) -> prerequisite t2_math_alg_02 (2/2 wrong) -> root t2_math_alg_01 (2/2 wrong)
    att("a8", "t2_math_alg_03", false, 40000, "2026-11-25T16:08:00+08:00"),
    att("a9", "t2_math_alg_03", false, 38000, "2026-11-25T21:10:00+08:00"),
    att("a10", "t2_math_alg_03", false, 10000, "2026-11-25T21:11:00+08:00"),
    att("a11", "t2_math_alg_02", false, 30000, "2026-11-25T21:12:00+08:00"),
    att("a12", "t2_math_alg_02", false, 32000, "2026-11-25T21:13:00+08:00"),
    att("a13", "t2_math_alg_01", false, 25000, "2026-11-25T21:14:00+08:00"),
    att("a14", "t2_math_alg_01", false, 28000, "2026-11-25T21:15:00+08:00"),
    att("a15", "t2_math_rumus_01", false, 8000, "2026-11-25T21:16:00+08:00")
  ];

  const data = Report.buildReportData({
    studentId: "kid_t2",
    studentName: "Angah",
    gradeId: "t2",
    sessions: [{ id: "s1", started_at: "2026-11-25T16:00:00+08:00", completed_at: "2026-11-25T21:16:00+08:00" }],
    attempts,
    syllabusNodes: bank.syllabus_nodes
  });

  eq("report computes 40% D Memuaskan False Comfort Zone", [data.summary.overallGrade.pct, data.summary.overallGrade.grade, data.summary.overallGrade.isFalseComfortZone], [
    40,
    "D",
    true
  ]);
  eq("report identifies topStrength and traced root weakness", [data.summary.topStrength.nodeId, data.summary.topRootCauseWeakness.nodeId, data.summary.topRootCauseWeakness.triggeredFromNodeId], [
    "t2_math_pola_01",
    "t2_math_alg_01",
    "t2_math_alg_03"
  ]);
  eq("report shows dd/Mon/yyyy date", data.lastCheckupDate, "25/Nov/2026");

  const html = Report.renderCardHtml(data);
  ok("HTML includes False Comfort banner", html.includes("Zon Selesa Palsu"));
  ok("HTML includes late-night MYT fatigue warning", html.includes("Amaran Keletihan Lewat Malam"));
  ok("HTML includes Copy WhatsApp Summary button and Share button", html.includes("data-diag-copy=") && html.includes("Copy WhatsApp Summary") && html.includes("data-diag-wa="));
  ok("WhatsApp text contains student name, date, Kembangan, and Cadangan Tuisyen", data.whatsappText.includes("Angah") && data.whatsappText.includes("25/Nov/2026") && data.whatsappText.includes("Kembangan") && data.whatsappText.includes("Cadangan Tuisyen:"));
}

// ======================= 5. UNPROBED PREREQUISITE + SPM + XSS ESCAPING =======================
{
  const probeData = Report.buildReportData({
    studentId: "kid_t4",
    studentName: '<script>alert(1)</script>',
    gradeId: "t4",
    sessions: [{ id: "s_probe", started_at: "2026-11-25T15:00:00+08:00" }],
    attempts: [
      { id: "p1", student_id: "kid_t4", syllabus_node_id: "t2_math_rumus_02", is_correct: 0, time_spent_ms: 40000, answered_at_myt: "2026-11-25T15:01:00+08:00" },
      { id: "p2", student_id: "kid_t4", syllabus_node_id: "t2_math_rumus_02", is_correct: 0, time_spent_ms: 40000, answered_at_myt: "2026-11-25T15:02:00+08:00" },
      { id: "p3", student_id: "kid_t4", syllabus_node_id: "t2_math_rumus_02", is_correct: 1, time_spent_ms: 30000, answered_at_myt: "2026-11-25T15:03:00+08:00" },
      { id: "p4", student_id: "kid_t4", syllabus_node_id: "t2_math_pola_01", is_correct: 1, time_spent_ms: 20000, answered_at_myt: "2026-11-25T15:04:00+08:00" }
    ],
    syllabusNodes: bank.syllabus_nodes
  });
  // 2/4 = 50% -> SPM C Kepujian, unverified: false
  eq("SPM 50% gives grade C and verified=false", [probeData.summary.overallGrade.scale, probeData.summary.overallGrade.grade, probeData.summary.overallGrade.verified], [
    "SPM",
    "C",
    false
  ]);
  const html = Report.renderCardHtml(probeData);
  ok("HTML flags unprobed prerequisite probe", html.includes("Semak asas dahulu") && html.includes("Membina dan Menukar Perkara Rumus"));
  ok("HTML flags unverified SPM scale note", html.includes("belum disahkan dengan slip peperiksaan sebenar"));
  ok("XSS payload in studentName is escaped in WhatsApp text attribute", !html.includes("<script>alert(1)</script>"));
}

// ======================= 6. HTML PARITY & MULTI-SUBJECT DARJAH 6 DIAGNOSTIC REPORT =======================
{
  const studentHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
  const parentHtml = fs.readFileSync(path.join(rootDir, "parent", "index.html"), "utf8");
  const diagFiles = fs
    .readdirSync(path.join(rootDir, "js", "data"))
    .filter((f) => /^diagnostic_[a-z0-9]+_[a-z0-9]+\.js$/i.test(f))
    .sort();
  eq("index.html loads every diagnostic_*.js file on disk", diagFiles.every((f) => studentHtml.includes(`js/data/${f}`)), true);
  eq("parent/index.html loads every diagnostic_*.js file on disk", diagFiles.every((f) => parentHtml.includes(`../js/data/${f}`)), true);

  const pCtx = { console, document: {} };
  pCtx.window = pCtx;
  pCtx.globalThis = pCtx;
  for (const match of parentHtml.matchAll(/<script[^>]+src="\.\.\/(js\/[^"?]+)/g)) {
    const relFile = match[1];
    vm.runInNewContext(fs.readFileSync(path.join(rootDir, relFile), "utf8"), pCtx, { filename: relFile });
  }
  const d6Nodes = pCtx.App.DiagnosticReport.collectSyllabusNodes("d6", pCtx.App.DiagnosticBanks);
  eq("parent/index.html loads all 47 Darjah 6 diagnostic syllabus nodes", d6Nodes.length, 47);

  const att = (id, nodeId, okBool, ms, at) => ({
    id,
    student_id: "kid_d6",
    syllabus_node_id: nodeId,
    is_correct: okBool ? 1 : 0,
    time_spent_ms: ms,
    answered_at_myt: at
  });
  // 6/10 = 60% -> UASA C (Baik); Strength: d6_math_nom_01 (3/3); Weakness: d6_math_wang_01 (2/2 wrong -> probe d6_math_pec_02)
  const d6Attempts = [
    att("d1", "d6_math_nom_01", true, 15000, "2026-11-27T15:01:00+08:00"),
    att("d2", "d6_math_nom_01", true, 18000, "2026-11-27T15:02:00+08:00"),
    att("d3", "d6_math_nom_01", true, 16000, "2026-11-27T15:03:00+08:00"),
    att("d4", "d6_sains_u01", true, 20000, "2026-11-27T15:04:00+08:00"),
    att("d5", "d6_bm_kosa_01", true, 15000, "2026-11-27T15:05:00+08:00"),
    att("d6", "d6_sej_pemb_01", true, 14000, "2026-11-27T15:06:00+08:00"),
    att("d7", "d6_math_wang_01", false, 35000, "2026-11-27T15:07:00+08:00"),
    att("d8", "d6_math_wang_01", false, 38000, "2026-11-27T15:08:00+08:00"),
    att("d9", "d6_bi_vocab_01", false, 5000, "2026-11-27T15:09:00+08:00"),
    att("d10", "d6_sains_u04", false, 25000, "2026-11-27T15:10:00+08:00")
  ];

  const d6Rep = Report.buildReportData({
    studentId: "kid_d6",
    studentName: "Along",
    gradeId: "d6",
    sessions: [{ id: "s_d6", started_at: "2026-11-27T15:00:00+08:00", completed_at: "2026-11-27T15:10:00+08:00" }],
    attempts: d6Attempts,
    syllabusNodes: d6Nodes
  });
  eq("D6 multi-subject report computes 60% UASA C Baik", [d6Rep.summary.overallGrade.scale, d6Rep.summary.overallGrade.pct, d6Rep.summary.overallGrade.grade], ["UASA", 60, "C"]);
  eq("D6 report traces unprobed prerequisite from Wang to Pecahan/Peratus", [d6Rep.summary.topStrength.nodeId, d6Rep.summary.topRootCauseWeakness.needsPrerequisiteProbe, d6Rep.summary.topRootCauseWeakness.probeNode && d6Rep.summary.topRootCauseWeakness.probeNode.id], [
    "d6_math_nom_01",
    true,
    "d6_math_pec_02"
  ]);
  eq("D6 report date formatted dd/Mon/yyyy", d6Rep.lastCheckupDate, "27/Nov/2026");
  const d6Html = Report.renderCardHtml(d6Rep);
  ok("D6 report HTML shows Semak asas dahulu & WhatsApp includes Darjah 6 and 27/Nov/2026", d6Html.includes("Semak asas dahulu") && d6Rep.whatsappText.includes("Darjah 6") && d6Rep.whatsappText.includes("27/Nov/2026") && d6Rep.whatsappText.includes("Cadangan Tuisyen:"));

  // ---- Tingkatan 2 Waves 1-2 (Math 17 + Sains 13 + Sejarah 11 + Geografi 11 = 52 nodes) ----
  const t2Nodes = pCtx.App.DiagnosticReport.collectSyllabusNodes("t2", pCtx.App.DiagnosticBanks);
  eq("parent/index.html loads all 52 Tingkatan 2 diagnostic syllabus nodes", t2Nodes.length, 52);
  eq("T2 node set covers all four active subjects", new Set(t2Nodes.map((n) => n.subject)).size, 4);

  const attT2 = (id, nodeId, okBool, ms, at) => ({ ...att(id, nodeId, okBool, ms, at), student_id: "kid_t2" });
  const t2Attempts = [
    attT2("t1", "t2_math_pola_01", true, 14000, "2026-11-27T16:01:00+08:00"),
    attT2("t2", "t2_math_pola_01", true, 15000, "2026-11-27T16:02:00+08:00"),
    attT2("t3", "t2_math_pola_01", true, 16000, "2026-11-27T16:03:00+08:00"),
    attT2("t4", "t2_math_koor_01", true, 18000, "2026-11-27T16:04:00+08:00"),
    attT2("t5", "t2_sains_b01", true, 14000, "2026-11-27T16:05:00+08:00"),
    attT2("t6", "t2_sains_b03", true, 15000, "2026-11-27T16:06:00+08:00"),
    attT2("t7", "t2_sains_b10", false, 35000, "2026-11-27T16:07:00+08:00"),
    attT2("t8", "t2_sains_b10", false, 38000, "2026-11-27T16:08:00+08:00"),
    attT2("t9", "t2_math_stat_01", false, 24000, "2026-11-27T16:09:00+08:00"),
    attT2("t10", "t2_sains_b11", false, 22000, "2026-11-27T16:10:00+08:00")
  ];
  const t2Rep = Report.buildReportData({
    studentId: "kid_t2",
    studentName: "Angah",
    gradeId: "t2",
    sessions: [{ id: "s_t2", started_at: "2026-11-27T16:00:00+08:00", completed_at: "2026-11-27T16:10:00+08:00" }],
    attempts: t2Attempts,
    syllabusNodes: t2Nodes
  });
  eq("T2 multi-subject report computes 60% UASA C Baik", [t2Rep.summary.overallGrade.scale, t2Rep.summary.overallGrade.pct, t2Rep.summary.overallGrade.grade], ["UASA", 60, "C"]);
  eq("T2 report traces unprobed prerequisite from Bab 10 Bunyi to Bab 8 Daya/Gerakan", [t2Rep.summary.topStrength.nodeId, t2Rep.summary.topRootCauseWeakness.needsPrerequisiteProbe, t2Rep.summary.topRootCauseWeakness.probeNode && t2Rep.summary.topRootCauseWeakness.probeNode.id], [
    "t2_math_pola_01",
    true,
    "t2_sains_b08"
  ]);
  eq("T2 report date formatted dd/Mon/yyyy", t2Rep.lastCheckupDate, "27/Nov/2026");
  const t2Html = Report.renderCardHtml(t2Rep);
  ok("T2 report HTML shows Semak asas dahulu & WhatsApp includes Tingkatan 2 and 27/Nov/2026", t2Html.includes("Semak asas dahulu") && t2Rep.whatsappText.includes("Tingkatan 2") && t2Rep.whatsappText.includes("27/Nov/2026"));
}

console.log(failed === 0 ? "DIAGNOSTIC_REPORT_TESTS_PASSED" : `DIAGNOSTIC_REPORT_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
