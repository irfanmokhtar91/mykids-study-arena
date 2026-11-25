/**
 * Diagnostic Question Bank Verifier (Gate 1), Browser UMD Generator, and Blind Exporter.
 *
 * Usage:
 *   node scripts/verify-diagnostic-bank.mjs
 *   node scripts/verify-diagnostic-bank.mjs --sync-js <jsonPath> <jsPath>
 *   node scripts/verify-diagnostic-bank.mjs --export-blind <jsonPath> <seed> <outPrefix> [--split 2]
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);

function makeRng(seed) {
  let s = Number(seed) >>> 0 || 1;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWith(rng, arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function syncJs(jsonPath, jsPath) {
  const absJson = path.resolve(rootDir, jsonPath);
  const absJs = path.resolve(rootDir, jsPath);
  const data = JSON.parse(fs.readFileSync(absJson, "utf8"));
  const formatted = JSON.stringify(data, null, 2);
  const out = `/**
 * Generated from ${jsonPath.replace(/\\/g, "/")} via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.t2 = App.DiagnosticBanks.t2 || {};
    App.DiagnosticBanks.t2.math = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return ${formatted.replace(/\n/g, "\n  ")};
});
`;
  fs.writeFileSync(absJs, out, "utf8");
  console.log(`Synced ${jsPath} (${data.syllabus_nodes.length} nodes, ${data.questions.length} questions).`);
}

function exportBlind(jsonPath, seedArg, outPrefix, splitCount) {
  const absJson = path.resolve(rootDir, jsonPath);
  const data = JSON.parse(fs.readFileSync(absJson, "utf8"));
  const rng = makeRng(seedArg);
  const order = shuffleWith(rng, data.questions);
  const letters = ["A", "B", "C", "D"];
  const blindItems = [];
  const keyItems = [];
  const dist = { A: 0, B: 0, C: 0, D: 0 };

  order.forEach((item, idx) => {
    const opts = letters.map((L) => ({
      text: item.options_json[L],
      ok: L === item.correct_option
    }));
    const shuffledOpts = shuffleWith(rng, opts);
    const correctLetter = letters[shuffledOpts.findIndex((o) => o.ok)];
    dist[correctLetter]++;
    blindItems.push({
      n: idx + 1,
      q: item.prompt_text,
      options: shuffledOpts.map((o, k) => `${letters[k]}. ${o.text}`)
    });
    keyItems.push({
      n: idx + 1,
      ref: item.id,
      correct: correctLetter
    });
  });

  fs.mkdirSync(path.dirname(outPrefix), { recursive: true });
  fs.writeFileSync(`${outPrefix}.json`, JSON.stringify(blindItems, null, 1), "utf8");
  fs.writeFileSync(`${outPrefix}.key.json`, JSON.stringify(keyItems), "utf8");

  if (splitCount === 2) {
    const mid = Math.ceil(blindItems.length / 2);
    fs.writeFileSync(`${outPrefix}_b1.json`, JSON.stringify(blindItems.slice(0, mid), null, 1), "utf8");
    fs.writeFileSync(`${outPrefix}_b2.json`, JSON.stringify(blindItems.slice(mid), null, 1), "utf8");
  }

  console.log(`Exported ${blindItems.length} blind items (seed=${seedArg}), key spread`, dist);
}

if (args[0] === "--sync-js") {
  syncJs(args[1] || "js/data/diagnostic_t2_math.json", args[2] || "js/data/diagnostic_t2_math.js");
  process.exit(0);
}

if (args[0] === "--export-blind") {
  const splitIdx = args.indexOf("--split");
  const splitCount = splitIdx >= 0 ? Number(args[splitIdx + 1]) || 0 : 0;
  exportBlind(args[1], args[2], args[3], splitCount);
  process.exit(0);
}

// ======================= DEFAULT GATE 1 VERIFICATION =======================
const jsonFile = path.join(rootDir, "js", "data", "diagnostic_t2_math.json");
const jsFile = path.join(rootDir, "js", "data", "diagnostic_t2_math.js");
const errors = [];

const data = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
const jsData = require(jsFile);

if (JSON.stringify(data) !== JSON.stringify(jsData)) {
  errors.push("diagnostic_t2_math.js is out of sync with diagnostic_t2_math.json (run --sync-js).");
}

// Load js/syllabus.js to verify chapter alignment
const sylCtx = { console };
sylCtx.window = sylCtx;
vm.runInNewContext(fs.readFileSync(path.join(rootDir, "js", "syllabus.js"), "utf8"), sylCtx, { filename: "js/syllabus.js" });
const t2MathChapters = new Set(
  sylCtx.App.GRADES.t2.subjects.find((s) => s.id === "math").chapters.map((c) => c.id)
);

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
const nodeById = new Map();

for (const n of data.syllabus_nodes) {
  if (nodeById.has(n.id)) errors.push(`Duplicate node id: ${n.id}`);
  nodeById.set(n.id, n);
  if (n.grade_level !== "t2" || n.subject !== "math") {
    errors.push(`${n.id}: expected grade_level='t2' and subject='math'`);
  }
  if (!t2MathChapters.has(n.chapter_id)) {
    errors.push(`${n.id}: unknown chapter_id '${n.chapter_id}' not in js/syllabus.js t2.math`);
  }
  if (n.prerequisite_node_id && !nodeById.has(n.prerequisite_node_id)) {
    errors.push(`${n.id}: prerequisite '${n.prerequisite_node_id}' must appear earlier for FK inserts`);
  }
}

// SQLite D1 schema insert verification
try {
  const schemaSql = fs.readFileSync(path.join(rootDir, "worker", "schema.sql"), "utf8");
  const db = new DatabaseSync(":memory:");
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(schemaSql);

  const insNode = db.prepare(
    "INSERT INTO syllabus_nodes (id, subject, grade_level, chapter_id, topic_name, subtopic_name, prerequisite_node_id, expected_time_ms, bloom_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  for (const n of data.syllabus_nodes) {
    insNode.run(n.id, n.subject, n.grade_level, n.chapter_id, n.topic_name, n.subtopic_name, n.prerequisite_node_id, n.expected_time_ms, n.bloom_level);
  }

  const insQ = db.prepare(
    "INSERT INTO questions (id, syllabus_node_id, difficulty_1_to_5, prompt_text, options_json, correct_option, explanation_text) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  for (const q of data.questions) {
    insQ.run(q.id, q.syllabus_node_id, q.difficulty_1_to_5, q.prompt_text, JSON.stringify(q.options_json), q.correct_option, q.explanation_text);
  }

  const nCnt = db.prepare("SELECT COUNT(*) AS n FROM syllabus_nodes").get().n;
  const qCnt = db.prepare("SELECT COUNT(*) AS n FROM questions").get().n;
  if (nCnt !== data.syllabus_nodes.length || qCnt !== data.questions.length) {
    errors.push(`SQLite row count mismatch: nodes=${nCnt}, questions=${qCnt}`);
  }
  db.close();
} catch (err) {
  errors.push(`SQLite D1 schema insert failed: ${err.message}`);
}

// Question structure, counts, difficulty 5:3:2, key spread, and deterministic math checks
const seenPrompts = new Set();
const seenIds = new Set();
const byNode = new Map();
const byChapter = new Map();
const diffs = { L: 0, M: 0, H: 0 };
const keySpread = { A: 0, B: 0, C: 0, D: 0 };
const letters = ["A", "B", "C", "D"];
let checkedCount = 0;

const TEST_POINTS = [
  { x: 7, y: 11, p: 13, q: 17, m: 19, n: 23, a: 29, b: 31, k: 37, r: 41, u: 43, v: 47, t: 5, h: 3, L: 11 },
  { x: 13, y: 17, p: 19, q: 23, m: 29, n: 31, a: 37, b: 41, k: 43, r: 47, u: 53, v: 59, t: 7, h: 11, L: 17 },
  { x: 19, y: 23, p: 29, q: 31, m: 37, n: 41, a: 43, b: 47, k: 53, r: 59, u: 61, v: 67, t: 11, h: 13, L: 23 }
];

function evalExpr(expr, pt) {
  const keys = Object.keys(pt);
  const vals = keys.map((k) => pt[k]);
  return new Function(...keys, `"use strict"; return (${expr});`)(...vals);
}

for (const q of data.questions) {
  if (seenIds.has(q.id)) errors.push(`Duplicate question id: ${q.id}`);
  seenIds.add(q.id);

  const node = nodeById.get(q.syllabus_node_id);
  if (!node) {
    errors.push(`${q.id}: unknown syllabus_node_id '${q.syllabus_node_id}'`);
  } else {
    byNode.set(node.id, (byNode.get(node.id) || 0) + 1);
    byChapter.set(node.chapter_id, (byChapter.get(node.chapter_id) || 0) + 1);
  }

  if (!q.prompt_text || seenPrompts.has(norm(q.prompt_text))) {
    errors.push(`${q.id}: missing or duplicate prompt_text`);
  }
  seenPrompts.add(norm(q.prompt_text));

  if (/NaN|undefined/.test(JSON.stringify(q))) {
    errors.push(`${q.id}: contains NaN or undefined`);
  }

  const expectedDiff = q.difficulty_1_to_5 <= 2 ? "L" : q.difficulty_1_to_5 === 3 ? "M" : "H";
  if (q.diff !== expectedDiff) {
    errors.push(`${q.id}: diff '${q.diff}' does not match difficulty_1_to_5=${q.difficulty_1_to_5}`);
  }
  diffs[q.diff] = (diffs[q.diff] || 0) + 1;

  if (!letters.includes(q.correct_option)) {
    errors.push(`${q.id}: invalid correct_option '${q.correct_option}'`);
  } else {
    keySpread[q.correct_option]++;
  }

  const opts = letters.map((L) => q.options_json && q.options_json[L]);
  if (opts.some((o) => !o || typeof o !== "string")) {
    errors.push(`${q.id}: needs 4 non-empty string options A-D`);
  } else if (new Set(opts.map(norm)).size !== 4) {
    errors.push(`${q.id}: duplicate options detected`);
  }

  if (!q.explanation_text || q.explanation_text.length < 25) {
    errors.push(`${q.id}: missing detailed explanation_text`);
  }

  if (!q.check || q.check.type !== "js") {
    errors.push(`${q.id}: missing deterministic JS check`);
    continue;
  }

  checkedCount++;
  if (q.check.mode === "exact") {
    const got = String(new Function(`"use strict"; ${q.check.code}`)());
    if (got !== q.check.ans) {
      errors.push(`${q.id}: check returned '${got}', expected '${q.check.ans}'`);
    }
    const matchesOpt = (optText) => {
      const t = String(optText || "").trim();
      if (t === q.check.ans) return true;
      return t.split(/[^0-9A-Za-z.\-]+/).includes(q.check.ans);
    };
    if (!matchesOpt(q.options_json[q.correct_option])) {
      errors.push(`${q.id}: correct_option '${q.options_json[q.correct_option]}' does not match '${q.check.ans}'`);
    }
    for (const L of letters) {
      if (L !== q.correct_option && matchesOpt(q.options_json[L])) {
        errors.push(`${q.id}: distractor ${L} ('${q.options_json[L]}') also contains '${q.check.ans}'`);
      }
    }
  } else if (q.check.mode === "equiv") {
    const targetVals = TEST_POINTS.map((pt) => evalExpr(q.check.target, pt));
    const optVecs = {};
    for (const L of letters) {
      optVecs[L] = TEST_POINTS.map((pt) => evalExpr(q.check.options[L], pt));
      if (optVecs[L].some((v) => !Number.isFinite(v))) {
        errors.push(`${q.id}: option ${L} evaluated non-finite value`);
      }
    }
    const sameVec = (a, b) => a.every((v, idx) => Math.abs(v - b[idx]) < 1e-9);
    if (!sameVec(optVecs[q.correct_option], targetVals)) {
      errors.push(`${q.id}: correct option ${q.correct_option} is NOT algebraically equivalent to target`);
    }
    for (const L of letters) {
      if (L !== q.correct_option && sameVec(optVecs[L], targetVals)) {
        errors.push(`${q.id}: distractor ${L} is algebraically equivalent to target!`);
      }
    }
    for (let i = 0; i < letters.length; i++) {
      for (let j = i + 1; j < letters.length; j++) {
        if (sameVec(optVecs[letters[i]], optVecs[letters[j]])) {
          errors.push(`${q.id}: options ${letters[i]} and ${letters[j]} are algebraically equivalent!`);
        }
      }
    }
  } else {
    errors.push(`${q.id}: unknown check mode '${q.check.mode}'`);
  }
}

for (const n of data.syllabus_nodes) {
  const c = byNode.get(n.id) || 0;
  if (c !== 5) errors.push(`${n.id}: expected 5 questions, got ${c}`);
}
for (const [ch, cnt] of byChapter.entries()) {
  if (cnt < 10) errors.push(`chapter ${ch}: expected >= 10 questions, got ${cnt}`);
}
if (diffs.L !== 17 || diffs.M !== 11 || diffs.H !== 7) {
  errors.push(`Expected 5:3:2 difficulty split L/M/H = 17/11/7, got ${diffs.L}/${diffs.M}/${diffs.H}`);
}

// Integration test with js/diagnostics.js
const D = require("../js/diagnostics.js");
{
  const algTrace = D.generateParentDiagnosticSummary(
    "ch_test",
    [
      { syllabus_node_id: "t2_math_alg_03", is_correct: false, time_spent_ms: 40000, answered_at_myt: "2026-11-25T16:00:00+08:00" },
      { syllabus_node_id: "t2_math_alg_03", is_correct: false, time_spent_ms: 42000, answered_at_myt: "2026-11-25T16:01:00+08:00" },
      { syllabus_node_id: "t2_math_alg_02", is_correct: false, time_spent_ms: 35000, answered_at_myt: "2026-11-25T16:02:00+08:00" },
      { syllabus_node_id: "t2_math_alg_02", is_correct: true, time_spent_ms: 25000, answered_at_myt: "2026-11-25T16:03:00+08:00" },
      { syllabus_node_id: "t2_math_alg_01", is_correct: false, time_spent_ms: 30000, answered_at_myt: "2026-11-25T16:04:00+08:00" },
      { syllabus_node_id: "t2_math_alg_01", is_correct: true, time_spent_ms: 20000, answered_at_myt: "2026-11-25T16:05:00+08:00" }
    ],
    data.syllabus_nodes,
    { gradeLevel: "t2" }
  );
  if (algTrace.topRootCauseWeakness.nodeId !== "t2_math_alg_01" || algTrace.topRootCauseWeakness.triggeredFromNodeId !== "t2_math_alg_03") {
    errors.push(`Integration trace failed for alg chain: got ${JSON.stringify(algTrace.topRootCauseWeakness)}`);
  }

  const rumusTrace = D.generateParentDiagnosticSummary(
    "ch_test",
    [
      { syllabus_node_id: "t2_math_rumus_02", is_correct: false, time_spent_ms: 45000 },
      { syllabus_node_id: "t2_math_rumus_02", is_correct: false, time_spent_ms: 45000 },
      { syllabus_node_id: "t2_math_rumus_01", is_correct: false, time_spent_ms: 35000 },
      { syllabus_node_id: "t2_math_rumus_01", is_correct: true, time_spent_ms: 25000 }
    ],
    data.syllabus_nodes,
    { gradeLevel: "t2" }
  );
  if (rumusTrace.topRootCauseWeakness.nodeId !== "t2_math_rumus_01" || rumusTrace.topRootCauseWeakness.triggeredFromNodeId !== "t2_math_rumus_02") {
    errors.push(`Integration trace failed for rumus chain: got ${JSON.stringify(rumusTrace.topRootCauseWeakness)}`);
  }

  const probeTrace = D.generateParentDiagnosticSummary(
    "ch_test",
    [
      { syllabus_node_id: "t2_math_pola_02", is_correct: false, time_spent_ms: 30000 },
      { syllabus_node_id: "t2_math_pola_02", is_correct: true, time_spent_ms: 25000 }
    ],
    data.syllabus_nodes,
    { gradeLevel: "t2" }
  );
  if (!probeTrace.topRootCauseWeakness.needsPrerequisiteProbe || probeTrace.topRootCauseWeakness.probeNode.id !== "t2_math_pola_01") {
    errors.push(`Integration probe check failed for pola chain: got ${JSON.stringify(probeTrace.topRootCauseWeakness)}`);
  }
}

console.log(
  `t2.math diagnostic: ${data.syllabus_nodes.length} nodes, ${data.questions.length} items (${checkedCount} code-checked), ${byChapter.size} chapters, diff L/M/H ${diffs.L}/${diffs.M}/${diffs.H}, key spread A/B/C/D ${keySpread.A}/${keySpread.B}/${keySpread.C}/${keySpread.D}`
);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("DIAGNOSTIC_BANK_GATE1_PASSED");
