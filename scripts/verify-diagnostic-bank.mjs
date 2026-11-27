/**
 * Diagnostic Question Bank Verifier (Gate 1), Browser UMD Generator, and Blind Exporter.
 *
 * Usage:
 *   node scripts/verify-diagnostic-bank.mjs [jsonPath...]
 *   node scripts/verify-diagnostic-bank.mjs --sync-js <jsonPath> [jsPath]
 *   node scripts/verify-diagnostic-bank.mjs --export-blind <jsonPath> <seed> <outPrefix> [--split N]
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

function propAccess(objExpr, key) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? `${objExpr}.${key}` : `${objExpr}[${JSON.stringify(key)}]`;
}

function syncJs(jsonPath, jsPath) {
  const resolvedJson = jsonPath || "js/data/diagnostic_t2_math.json";
  const resolvedJs = jsPath || resolvedJson.replace(/\.json$/i, ".js");
  const absJson = path.resolve(rootDir, resolvedJson);
  const absJs = path.resolve(rootDir, resolvedJs);
  const data = JSON.parse(fs.readFileSync(absJson, "utf8"));
  if (!Array.isArray(data.syllabus_nodes) || !data.syllabus_nodes.length) {
    throw new Error(`${resolvedJson}: syllabus_nodes must be a non-empty array`);
  }
  const grade = data.syllabus_nodes[0].grade_level;
  const subject = data.syllabus_nodes[0].subject;
  if (!grade || !subject) {
    throw new Error(`${resolvedJson}: first syllabus_node missing grade_level or subject`);
  }
  for (const n of data.syllabus_nodes) {
    if (n.grade_level !== grade || n.subject !== subject) {
      throw new Error(`${resolvedJson}: mixed grade_level/subject at ${n.id} (${n.grade_level}/${n.subject} vs ${grade}/${subject})`);
    }
  }
  const gradeRef = propAccess("App.DiagnosticBanks", grade);
  const subjRef = propAccess(gradeRef, subject);
  const formatted = JSON.stringify(data, null, 2);
  const out = `/**
 * Generated from ${resolvedJson.replace(/\\/g, "/")} via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    ${gradeRef} = ${gradeRef} || {};
    ${subjRef} = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return ${formatted.replace(/\n/g, "\n  ")};
});
`;
  fs.writeFileSync(absJs, out, "utf8");
  console.log(`Synced ${resolvedJs} (${grade}.${subject}: ${data.syllabus_nodes.length} nodes, ${data.questions.length} questions).`);
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

  if (splitCount >= 2) {
    let offset = 0;
    for (let i = 0; i < splitCount; i++) {
      const size = Math.ceil((blindItems.length - offset) / (splitCount - i));
      fs.writeFileSync(`${outPrefix}_b${i + 1}.json`, JSON.stringify(blindItems.slice(offset, offset + size), null, 1), "utf8");
      offset += size;
    }
  }

  console.log(`Exported ${blindItems.length} blind items (seed=${seedArg}), key spread`, dist);
}

if (args[0] === "--sync-js") {
  syncJs(args[1], args[2]);
  process.exit(0);
}

if (args[0] === "--export-blind") {
  const splitIdx = args.indexOf("--split");
  const splitCount = splitIdx >= 0 ? Number(args[splitIdx + 1]) || 0 : 0;
  exportBlind(args[1], args[2], args[3], splitCount);
  process.exit(0);
}

// ======================= DEFAULT GATE 1 VERIFICATION =======================
const sylCtx = { console };
sylCtx.window = sylCtx;
vm.runInNewContext(fs.readFileSync(path.join(rootDir, "js", "syllabus.js"), "utf8"), sylCtx, { filename: "js/syllabus.js" });
const schemaSql = fs.readFileSync(path.join(rootDir, "worker", "schema.sql"), "utf8");
const D = require("../js/diagnostics.js");

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
const letters = ["A", "B", "C", "D"];
const VALID_BLOOM = new Set(["Remember", "Understand", "Apply", "Analyze"]);
const MISSING_VISUAL_RE = /(?:gambar rajah di atas|rajah di bawah|picture below|diagram above)/i;
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

function verifyBank(jsonPath) {
  const absJson = path.resolve(rootDir, jsonPath);
  const relJson = path.relative(rootDir, absJson).replace(/\\/g, "/");
  const absJs = absJson.replace(/\.json$/i, ".js");
  const relJs = path.relative(rootDir, absJs).replace(/\\/g, "/");
  const errors = [];

  const m = /^diagnostic_([a-z0-9]+)_([a-z0-9]+)\.json$/i.exec(path.basename(absJson));
  if (!m) {
    return [`${relJson}: filename must match diagnostic_<grade>_<subject>.json`];
  }
  const grade = m[1].toLowerCase();
  const subject = m[2].toLowerCase();

  let data;
  try {
    data = JSON.parse(fs.readFileSync(absJson, "utf8"));
  } catch (err) {
    return [`${relJson}: invalid JSON (${err.message})`];
  }

  if (!fs.existsSync(absJs)) {
    errors.push(`${relJs} missing (run --sync-js ${relJson}).`);
  } else {
    try {
      delete require.cache[require.resolve(absJs)];
      const jsData = require(absJs);
      if (JSON.stringify(data) !== JSON.stringify(jsData)) {
        errors.push(`${relJs} is out of sync with ${relJson} (run --sync-js ${relJson}).`);
      }
      const vmCtx = { console };
      vmCtx.window = vmCtx;
      vm.runInNewContext(fs.readFileSync(absJs, "utf8"), vmCtx, { filename: absJs });
      if (!vmCtx.App || !vmCtx.App.DiagnosticBanks || !vmCtx.App.DiagnosticBanks[grade] || !vmCtx.App.DiagnosticBanks[grade][subject]) {
        errors.push(`${relJs}: did not attach App.DiagnosticBanks.${grade}.${subject}`);
      }
    } catch (err) {
      errors.push(`${relJs}: load failed (${err.message})`);
    }
  }

  const gradeObj = sylCtx.App && sylCtx.App.GRADES && sylCtx.App.GRADES[grade];
  const subjObj = gradeObj && Array.isArray(gradeObj.subjects) ? gradeObj.subjects.find((s) => s.id === subject) : null;
  if (!subjObj) {
    errors.push(`${relJson}: grade/subject '${grade}.${subject}' not found in js/syllabus.js`);
    return errors;
  }
  const validChapters = new Set(subjObj.chapters.map((c) => c.id));

  if (!Array.isArray(data.syllabus_nodes) || !data.syllabus_nodes.length) {
    errors.push(`${relJson}: syllabus_nodes must be non-empty`);
    return errors;
  }
  if (!Array.isArray(data.questions) || !data.questions.length) {
    errors.push(`${relJson}: questions must be non-empty`);
    return errors;
  }

  const nodeById = new Map();
  let prereqEdges = 0;

  for (const n of data.syllabus_nodes) {
    if (nodeById.has(n.id)) errors.push(`${relJson}: duplicate node id '${n.id}'`);
    nodeById.set(n.id, n);
    if (n.grade_level !== grade || n.subject !== subject) {
      errors.push(`${n.id}: expected grade_level='${grade}' and subject='${subject}'`);
    }
    if (!validChapters.has(n.chapter_id)) {
      errors.push(`${n.id}: unknown chapter_id '${n.chapter_id}' not in js/syllabus.js ${grade}.${subject}`);
    }
    if (!Number.isInteger(n.expected_time_ms) || n.expected_time_ms <= 0) {
      errors.push(`${n.id}: expected_time_ms must be a positive integer`);
    }
    if (!VALID_BLOOM.has(n.bloom_level)) {
      errors.push(`${n.id}: invalid bloom_level '${n.bloom_level}'`);
    }
    if (n.prerequisite_node_id) {
      prereqEdges++;
      if (!nodeById.has(n.prerequisite_node_id)) {
        errors.push(`${n.id}: prerequisite '${n.prerequisite_node_id}' must appear earlier for FK inserts`);
      }
    }
  }
  if (prereqEdges < 1) {
    errors.push(`${relJson}: expected at least 1 prerequisite_node_id edge`);
  }

  // SQLite D1 schema insert verification
  try {
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
      errors.push(`${relJson}: SQLite row count mismatch nodes=${nCnt}, questions=${qCnt}`);
    }
    db.close();
  } catch (err) {
    errors.push(`${relJson}: SQLite D1 schema insert failed: ${err.message}`);
  }

  // Question structure, counts, difficulty 5:3:2, key spread, and deterministic JS checks
  const seenPrompts = new Set();
  const seenIds = new Set();
  const byNode = new Map();
  const byChapter = new Map();
  const diffs = { L: 0, M: 0, H: 0 };
  const keySpread = { A: 0, B: 0, C: 0, D: 0 };
  const requireCheck = subject === "math" || subject === "addmath";
  let checkedCount = 0;

  for (const q of data.questions) {
    if (seenIds.has(q.id)) errors.push(`${relJson}: duplicate question id '${q.id}'`);
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
    if (MISSING_VISUAL_RE.test(q.prompt_text || "")) {
      errors.push(`${q.id}: prompt_text references unseen diagram/picture`);
    }
    seenPrompts.add(norm(q.prompt_text));

    if (/NaN|undefined/.test(JSON.stringify(q))) {
      errors.push(`${q.id}: contains NaN or undefined`);
    }

    if (!Number.isInteger(q.difficulty_1_to_5) || q.difficulty_1_to_5 < 1 || q.difficulty_1_to_5 > 5) {
      errors.push(`${q.id}: invalid difficulty_1_to_5=${q.difficulty_1_to_5}`);
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
    const isCaseSensitiveOpt = node && (node.chapter_id === "punctuation_error" || node.chapter_id === "ejaan_tanda_baca");
    const optKey = (s) => (isCaseSensitiveOpt ? String(s || "").replace(/\s+/g, " ").trim() : norm(s));
    if (opts.some((o) => !o || typeof o !== "string")) {
      errors.push(`${q.id}: needs 4 non-empty string options A-D`);
    } else if (new Set(opts.map(optKey)).size !== 4) {
      errors.push(`${q.id}: duplicate options detected`);
    }

    if (!q.explanation_text || q.explanation_text.length < 25) {
      errors.push(`${q.id}: missing detailed explanation_text`);
    }

    if (!q.check) {
      if (requireCheck) errors.push(`${q.id}: missing deterministic JS check`);
      continue;
    }
    if (q.check.type !== "js") {
      errors.push(`${q.id}: check.type must be 'js'`);
      continue;
    }

    checkedCount++;
    if (q.check.mode === "exact") {
      try {
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
      } catch (err) {
        errors.push(`${q.id}: check threw ${err.message}`);
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
  const minPerChapter = grade === "t2" && subject === "math" ? 10 : 5;
  for (const [ch, cnt] of byChapter.entries()) {
    if (cnt < minPerChapter) errors.push(`${grade}.${subject} chapter ${ch}: expected >= ${minPerChapter} questions, got ${cnt}`);
  }

  const total = data.questions.length;
  const expL = Math.round(total * 0.5);
  const expM = Math.round(total * 0.3);
  const expH = Math.round(total * 0.2);
  if (Math.abs(diffs.L - expL) > 1 || Math.abs(diffs.M - expM) > 1 || Math.abs(diffs.H - expH) > 1) {
    errors.push(`${relJson}: expected ~5:3:2 difficulty split (${expL}/${expM}/${expH}), got ${diffs.L}/${diffs.M}/${diffs.H}`);
  }

  const minKey = Math.floor(total * 0.15);
  const maxKey = Math.ceil(total * 0.35);
  for (const L of letters) {
    if (keySpread[L] < minKey || keySpread[L] > maxKey) {
      errors.push(`${relJson}: key '${L}' count ${keySpread[L]} outside balanced range [${minKey}, ${maxKey}]`);
    }
  }

  // Integration test with js/diagnostics.js
  if (grade === "t2" && subject === "math") {
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

  // Generic prerequisite probe & trace checks across any bank
  const chainNode =
    data.syllabus_nodes.find((n) => n.prerequisite_node_id && nodeById.get(n.prerequisite_node_id)?.prerequisite_node_id === null) ||
    data.syllabus_nodes.find((n) => n.prerequisite_node_id);
  if (chainNode) {
    const preNode = nodeById.get(chainNode.prerequisite_node_id);
    const probeRes = D.generateParentDiagnosticSummary(
      "probe_test",
      [
        { syllabus_node_id: chainNode.id, is_correct: false, time_spent_ms: 40000 },
        { syllabus_node_id: chainNode.id, is_correct: false, time_spent_ms: 40000 }
      ],
      data.syllabus_nodes,
      { gradeLevel: grade }
    );
    if (
      !probeRes.topRootCauseWeakness ||
      !probeRes.topRootCauseWeakness.needsPrerequisiteProbe ||
      !probeRes.topRootCauseWeakness.probeNode ||
      probeRes.topRootCauseWeakness.probeNode.id !== preNode.id
    ) {
      errors.push(`${relJson}: generic prerequisite probe check failed for ${chainNode.id} -> ${preNode.id}`);
    }

    const traceRes = D.generateParentDiagnosticSummary(
      "trace_test",
      [
        { syllabus_node_id: chainNode.id, is_correct: false, time_spent_ms: 40000 },
        { syllabus_node_id: chainNode.id, is_correct: false, time_spent_ms: 40000 },
        { syllabus_node_id: preNode.id, is_correct: false, time_spent_ms: 35000 },
        { syllabus_node_id: preNode.id, is_correct: true, time_spent_ms: 20000 }
      ],
      data.syllabus_nodes,
      { gradeLevel: grade }
    );
    if (
      !traceRes.topRootCauseWeakness ||
      traceRes.topRootCauseWeakness.triggeredFromNodeId !== chainNode.id ||
      (preNode.prerequisite_node_id === null
        ? traceRes.topRootCauseWeakness.nodeId !== preNode.id
        : !Array.isArray(traceRes.topRootCauseWeakness.chain) || !traceRes.topRootCauseWeakness.chain.includes(preNode.id))
    ) {
      errors.push(`${relJson}: generic root-cause trace check failed for ${chainNode.id} -> ${preNode.id}`);
    }
  }

  console.log(
    `${grade}.${subject} diagnostic: ${data.syllabus_nodes.length} nodes, ${data.questions.length} items (${checkedCount} code-checked), ${byChapter.size} chapters, diff L/M/H ${diffs.L}/${diffs.M}/${diffs.H}, key spread A/B/C/D ${keySpread.A}/${keySpread.B}/${keySpread.C}/${keySpread.D}`
  );

  return errors;
}

const explicitPaths = args.filter((a) => !a.startsWith("--"));
const targets = explicitPaths.length
  ? explicitPaths
  : fs
      .readdirSync(path.join(rootDir, "js", "data"))
      .filter((f) => /^diagnostic_[a-z0-9]+_[a-z0-9]+\.json$/i.test(f))
      .sort()
      .map((f) => path.join("js", "data", f));

if (!targets.length) {
  console.error("No diagnostic JSON files found.");
  process.exit(1);
}

const allErrors = [];
for (const target of targets) {
  allErrors.push(...verifyBank(target));
}

if (allErrors.length) {
  console.error(allErrors.join("\n"));
  process.exit(1);
}
console.log("DIAGNOSTIC_BANK_GATE1_PASSED");
