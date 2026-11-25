/**
 * Export a question bank for BLIND solving: no keys, no explanations, items and options shuffled with a seed.
 * Writes <out>.json (questions only) and <out>.key.json (private key, never given to solvers).
 * Usage: node scripts/export-blind.mjs <dataFile> <App.Data path e.g. t2.ask> <seed> <outPrefix>
 */
import fs from "node:fs";
import vm from "node:vm";
const [file, dpath, seedArg, out] = process.argv.slice(2);
const ctx = { console }; ctx.window = ctx;
vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
let node = ctx.App.Data; for (const k of dpath.split(".")) node = node[k];
let s = Number(seedArg) >>> 0 || 1;
const rnd = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const shuf = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const rows = [];
for (const [ch, items] of Object.entries(node)) items.forEach((it, i) => rows.push({ ref: `${ch}#${i + 1}`, it }));
const order = shuf(rows);
const L = "ABCD";
const qs = [], key = [];
order.forEach((r, n) => {
  const opts = shuf(r.it.options.map((t, k) => ({ t, ok: k === r.it.correctIndex })));
  qs.push({ n: n + 1, q: r.it.q, options: opts.map((o, k) => `${L[k]}. ${o.t}`) });
  key.push({ n: n + 1, ref: r.ref, correct: L[opts.findIndex((o) => o.ok)] });
});
fs.writeFileSync(`${out}.json`, JSON.stringify(qs, null, 1));
fs.writeFileSync(`${out}.key.json`, JSON.stringify(key));
const dist = {}; key.forEach((k) => (dist[k.correct] = (dist[k.correct] || 0) + 1));
console.log(`exported ${qs.length} items, key letter spread`, dist);
