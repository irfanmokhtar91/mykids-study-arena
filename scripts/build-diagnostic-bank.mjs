#!/usr/bin/env node
/**
 * Convert a flat authored item list into a diagnostic bank JSON
 * (syllabus_nodes + questions with A/B/C/D options and an alternating key).
 *
 * Authoring source: scripts/diag/items_<subject>.json, a plain object:
 *   {
 *     "grade":"t2", "subject":"sejarah",
 *     "nodes":[ { "id":"t2_sejarah_b01", "chapterId":"alam_melayu", "topic":"...",
 *                 "subtopic":"...", "prereq":null, "time":35000, "bloom":"Understand" }, ... ],
 *     "items":[ { "node":"t2_sejarah_b01", "diff":1, "q":"...", "opts":["..","..","..",".."],
 *                 "key":0, "exp":"..." }, ... ]
 *   }
 *
 * The key is re-ordered deterministically so the correct option rotates
 * A/B/C/D, which keeps the diagnostic bank's option balance honest without
 * hand-shuffling 300 questions.
 *
 * Usage: node scripts/build-diagnostic-bank.mjs scripts/diag/items_sejarah.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const src = process.argv[2];
if (!src) {
  console.error("usage: node scripts/build-diagnostic-bank.mjs <items.json>");
  process.exit(1);
}

const abs = path.resolve(rootDir, src);
const spec = JSON.parse(fs.readFileSync(abs, "utf8"));
const grade = spec.grade;
const subject = spec.subject;
const LETTERS = ["A", "B", "C", "D"];
const prefix = subject === "sejarah" ? "t2sj" : "t2ge";

const errors = [];
const nodeById = new Map();
for (const n of spec.nodes) {
  if (nodeById.has(n.id)) errors.push(`duplicate node ${n.id}`);
  nodeById.set(n.id, n);
}
for (const n of spec.nodes) {
  if (n.prereq && !nodeById.has(n.prereq)) errors.push(`${n.id}: unknown prereq ${n.prereq}`);
}

const DIFF_LABEL = { 1: "L", 2: "L", 3: "M", 4: "H", 5: "H" };

const syllabus_nodes = spec.nodes.map((n) => ({
  id: n.id,
  subject,
  grade_level: grade,
  chapter_id: n.chapterId,
  topic_name: n.topic,
  subtopic_name: n.subtopic,
  prerequisite_node_id: n.prereq || null,
  expected_time_ms: n.time,
  bloom_level: n.bloom
}));

const questions = [];
let rotate = 0;
const perNode = new Map();
for (const it of spec.items) {
  if (!nodeById.has(it.node)) {
    errors.push(`item targets unknown node ${it.node}: ${String(it.q).slice(0, 40)}`);
    continue;
  }
  if (!Array.isArray(it.opts) || it.opts.length !== 4) {
    errors.push(`${it.node}: needs 4 options: ${String(it.q).slice(0, 40)}`);
    continue;
  }
  if (!(it.key >= 0 && it.key < 4)) {
    errors.push(`${it.node}: bad key ${it.key}`);
    continue;
  }
  const seen = new Set(it.opts.map((o) => String(o).toLowerCase().replace(/\s+/g, " ").trim()));
  if (seen.size !== 4) errors.push(`${it.node}: duplicate options: ${String(it.q).slice(0, 40)}`);

  // Rotate so the correct answer lands on A, B, C, D in turn.
  const correctText = it.opts[it.key];
  const others = it.opts.filter((_, i) => i !== it.key);
  const target = rotate % 4;
  rotate++;
  const ordered = [];
  let oi = 0;
  for (let slot = 0; slot < 4; slot++) {
    ordered.push(slot === target ? correctText : others[oi++]);
  }

  const seq = (perNode.get(it.node) || 0) + 1;
  perNode.set(it.node, seq);

  const q = {
    id: `${prefix}_${it.node.replace(/^t2_(sejarah|geografi)_/, "")}_q${seq}`,
    syllabus_node_id: it.node,
    difficulty_1_to_5: it.diff,
    diff: DIFF_LABEL[it.diff],
    exam_part: "A",
    prompt_text: it.q,
    options_json: Object.fromEntries(LETTERS.map((L, i) => [L, ordered[i]])),
    correct_option: LETTERS[target],
    explanation_text: it.exp
  };
  if (it.check) q.check = it.check;
  questions.push(q);
}

// Structural expectations
for (const n of spec.nodes) {
  const c = questions.filter((q) => q.syllabus_node_id === n.id).length;
  if (c !== 5) errors.push(`${n.id}: expected 5 questions, got ${c}`);
}
const total = questions.length;
const expL = Math.round(total * 0.5);
const expM = Math.round(total * 0.3);
const expH = Math.round(total * 0.2);
const diffs = { L: 0, M: 0, H: 0 };
for (const q of questions) diffs[q.diff]++;
if (Math.abs(diffs.L - expL) > 1 || Math.abs(diffs.M - expM) > 1 || Math.abs(diffs.H - expH) > 1) {
  errors.push(`difficulty split ${diffs.L}/${diffs.M}/${diffs.H}, expected ~${expL}/${expM}/${expH}`);
}
const keySpread = { A: 0, B: 0, C: 0, D: 0 };
for (const q of questions) keySpread[q.correct_option]++;
const minKey = Math.floor(total * 0.15);
const maxKey = Math.ceil(total * 0.35);
for (const L of LETTERS) {
  if (keySpread[L] < minKey || keySpread[L] > maxKey) errors.push(`key ${L} count ${keySpread[L]} outside [${minKey},${maxKey}]`);
}
const stems = new Set();
for (const q of questions) {
  const n = String(q.prompt_text).toLowerCase().replace(/\s+/g, " ").trim();
  if (stems.has(n)) errors.push(`duplicate stem: ${q.prompt_text.slice(0, 50)}`);
  stems.add(n);
  if (/NaN|undefined/.test(JSON.stringify(q))) errors.push(`${q.id}: NaN/undefined`);
  if (!q.explanation_text || q.explanation_text.length < 25) errors.push(`${q.id}: short explanation`);
  if (/(gambar rajah di atas|rajah di bawah|diagram above|peta di bawah)/i.test(q.prompt_text)) {
    errors.push(`${q.id}: references a missing visual`);
  }
}

if (errors.length) {
  console.error(errors.slice(0, 40).join("\n"));
  console.error(`${errors.length} BUILD ERRORS`);
  process.exit(1);
}

const out = { syllabus_nodes, questions };
const outPath = path.join(rootDir, "js", "data", `diagnostic_${grade}_${subject}.json`);
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");
console.log(`wrote ${path.relative(rootDir, outPath)}: ${syllabus_nodes.length} nodes, ${total} questions, diff L/M/H ${diffs.L}/${diffs.M}/${diffs.H}, key ${keySpread.A}/${keySpread.B}/${keySpread.C}/${keySpread.D}`);