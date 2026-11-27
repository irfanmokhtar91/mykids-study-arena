#!/usr/bin/env node
/**
 * Export a skill-tagged POOL (App.Pools.<grade>.<subject>) for BLIND solving.
 * Mirrors the format produced by scripts/export-blind.mjs: questions only in
 * <out>.json, private key in <out>.key.json, options shuffled with a seed so the
 * solver cannot infer the key from option order.
 *
 * Usage:
 *   node scripts/export-pool-blind.mjs <grade> <subject> <seed> <outPrefix> [--batch N]
 *
 * --batch N splits the question file into <outPrefix>_b1.json .. _bN.json so a
 * solver with a smaller context window can be fed the bank in pieces. The key
 * file always covers the whole bank.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const argv = process.argv.slice(2);
const positional = [];
let batchCount = 1;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--batch") {
    batchCount = Math.max(1, Number(argv[++i]) || 1);
  } else if (!argv[i].startsWith("--")) {
    positional.push(argv[i]);
  }
}
const [grade, subject, seedArg, outPrefix] = positional;

if (!grade || !subject || !outPrefix) {
  console.error("usage: node scripts/export-pool-blind.mjs <grade> <subject> <seed> <outPrefix> [--batch N]");
  process.exit(1);
}

const ctx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON };
ctx.window = ctx;
ctx.globalThis = ctx;

const files = [
  `js/data/curriculum/${grade}_${subject}.js`,
  `js/data/pools/${grade}_${subject}.js`
];
for (const rel of files) {
  const abs = path.join(rootDir, rel);
  if (!fs.existsSync(abs)) {
    console.error(`missing ${rel}`);
    process.exit(1);
  }
  vm.runInNewContext(fs.readFileSync(abs, "utf8"), ctx, { filename: rel });
}

const pool = ctx.App && ctx.App.Pools && ctx.App.Pools[grade] && ctx.App.Pools[grade][subject];
if (!Array.isArray(pool) || !pool.length) {
  console.error(`App.Pools.${grade}.${subject} is empty or missing`);
  process.exit(1);
}

let s = (Number(seedArg) >>> 0) || 1;
const rnd = () => {
  s = (s + 0x6d2b79f5) >>> 0;
  let t = s;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const shuf = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const L = "ABCD";
const order = shuf(pool);
const qs = [];
const key = [];
const dist = { A: 0, B: 0, C: 0, D: 0 };

order.forEach((it, n) => {
  const opts = shuf(it.options.map((text, k) => ({ text, ok: k === it.correctIndex })));
  const correct = L[opts.findIndex((o) => o.ok)];
  dist[correct]++;
  qs.push({
    n: n + 1,
    subject,
    q: it.q,
    options: opts.map((o, k) => `${L[k]}. ${o.text}`)
  });
  key.push({ n: n + 1, id: it.id, skill: it.skill, diff: it.diff, correct });
});

const outDir = path.dirname(outPrefix);
if (outDir && outDir !== ".") fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(`${outPrefix}.json`, JSON.stringify(qs, null, 1), "utf8");
fs.writeFileSync(`${outPrefix}.key.json`, JSON.stringify(key), "utf8");

if (batchCount >= 2) {
  let offset = 0;
  for (let i = 0; i < batchCount; i++) {
    const size = Math.ceil((qs.length - offset) / (batchCount - i));
    fs.writeFileSync(`${outPrefix}_b${i + 1}.json`, JSON.stringify(qs.slice(offset, offset + size), null, 1), "utf8");
    offset += size;
  }
}

console.log(`exported ${qs.length} blind items from ${grade}.${subject} (seed=${seedArg}), key spread`, dist);
if (batchCount >= 2) console.log(`split into ${batchCount} batch files: ${outPrefix}_b1.json .. _b${batchCount}.json`);