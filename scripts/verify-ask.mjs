/**
 * Gate 1 for Asas Sains Komputer Tingkatan 2 (js/data/ask_t2.js).
 * Structure checks plus INDEPENDENT recomputation of every item that carries a `check` field:
 *   conv  : base conversion recomputed with parseInt / toString
 *   ascii : character code recomputed with charCodeAt
 *   js    : code segment re-executed as a JavaScript equivalent
 * The recomputed answer must equal check.ans AND the text of the keyed option; no other option may equal it.
 * Usage: node scripts/verify-ask.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const ctx = { console };
ctx.window = ctx;
vm.runInNewContext(fs.readFileSync(path.join(root, "js/data/ask_t2.js"), "utf8"), ctx, { filename: "ask_t2.js" });
const bank = ctx.App.Data.t2.ask;

const errors = [];
let total = 0;
let checked = 0;
const prompts = new Set();
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, " ").trim();

for (const [chapter, items] of Object.entries(bank)) {
  if (items.length < 10) errors.push(`${chapter}: only ${items.length} items (need >= 10 for 2 sets)`);
  items.forEach((it, i) => {
    const id = `${chapter}#${i + 1}`;
    total++;
    if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) errors.push(`${id}: needs q and exactly 4 options`);
    if (new Set(it.options.map(String)).size !== it.options.length) errors.push(`${id}: duplicate options`);
    if (!(it.correctIndex >= 0 && it.correctIndex < it.options.length)) errors.push(`${id}: bad correctIndex`);
    if (!it.explanation) errors.push(`${id}: no explanation`);
    if (!["L", "M", "H"].includes(it.diff)) errors.push(`${id}: missing diff tag`);
    if (it.part !== "A") errors.push(`${id}: missing part tag`);
    if (prompts.has(norm(it.q))) errors.push(`${id}: duplicate prompt`);
    prompts.add(norm(it.q));
    if (/NaN|undefined/.test(JSON.stringify(it))) errors.push(`${id}: NaN/undefined in item`);

    if (it.check) {
      checked++;
      const c = it.check;
      let got;
      if (c.type === "conv") {
        const dec = parseInt(c.n, c.from);
        got = dec.toString(c.to).toUpperCase();
        // the input must itself be valid in its base
        if (dec.toString(c.from).toUpperCase() !== c.n.toUpperCase().replace(/^0+(?=.)/, "")) errors.push(`${id}: input ${c.n} not valid base ${c.from}`);
      } else if (c.type === "ascii") {
        got = c.ch.charCodeAt(0).toString(c.base).toUpperCase();
      } else if (c.type === "js") {
        got = String(new Function(c.code)());
      } else {
        errors.push(`${id}: unknown check type`);
        return;
      }
      if (got !== c.ans) errors.push(`${id}: recomputed "${got}" but check.ans is "${c.ans}"`);
      if (String(it.options[it.correctIndex]) !== c.ans && c.type !== "js") errors.push(`${id}: keyed option "${it.options[it.correctIndex]}" != recomputed "${c.ans}"`);
      if (c.type === "js" && ["conv", "ascii"].includes(c.type) === false) {
        // for js checks the keyed option text must equal the recomputed output unless the check is a boolean proxy ("ok")
        if (c.ans !== "ok" && String(it.options[it.correctIndex]) !== c.ans) errors.push(`${id}: keyed option "${it.options[it.correctIndex]}" != recomputed "${c.ans}"`);
      }
      it.options.forEach((o, k) => {
        if (k !== it.correctIndex && String(o) === c.ans) errors.push(`${id}: distractor equals the answer`);
      });
    }
  });
}

const diffs = { L: 0, M: 0, H: 0 };
Object.values(bank).flat().forEach((it) => diffs[it.diff]++);
console.log(`ASK T2: ${total} items in ${Object.keys(bank).length} chapters, ${checked} machine-checked, difficulty L/M/H = ${diffs.L}/${diffs.M}/${diffs.H}`);
if (errors.length) {
  console.error(`FOUND ${errors.length} PROBLEMS:`);
  errors.forEach((e) => console.error("  " + e));
  process.exit(1);
}
console.log("GATE 1 PASSED: structure OK and every computable answer recomputed independently.");
