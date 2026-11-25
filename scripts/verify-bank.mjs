/**
 * Gate 1 (structure) for a hand-written objective bank with no computable answers.
 * Usage: node scripts/verify-bank.mjs <dataFile> <App.Data path e.g. d6.psv>
 * Checks: >=10 items per chapter, exactly 4 distinct options, valid key, explanation, diff tag, part tag,
 * no duplicate prompt (case-insensitive, as the engine dedupes), no NaN/undefined, keyed option not repeated in a distractor.
 */
import fs from "node:fs";
import vm from "node:vm";
const [file, dpath] = process.argv.slice(2);
const ctx = { console }; ctx.window = ctx;
vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
let bank = ctx.App.Data; for (const k of dpath.split(".")) bank = bank[k];
const errors = [], seen = new Set(), diffs = { L: 0, M: 0, H: 0 }, spread = [0, 0, 0, 0];
let total = 0, checked = 0;
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, " ").trim();
for (const [ch, items] of Object.entries(bank)) {
  if (items.length < 10) errors.push(`${ch}: only ${items.length} items (need >= 10)`);
  items.forEach((it, i) => {
    const id = `${ch}#${i + 1}`; total++;
    if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) errors.push(`${id}: needs q and exactly 4 options`);
    if (new Set((it.options || []).map(norm)).size !== (it.options || []).length) errors.push(`${id}: duplicate options`);
    if (!(it.correctIndex >= 0 && it.correctIndex < 4)) errors.push(`${id}: bad correctIndex`); else spread[it.correctIndex]++;
    if (!it.explanation) errors.push(`${id}: no explanation`);
    if (!["L", "M", "H"].includes(it.diff)) errors.push(`${id}: missing diff`); else diffs[it.diff]++;
    if (it.part !== "A") errors.push(`${id}: missing part`);
    if (seen.has(norm(it.q))) errors.push(`${id}: duplicate prompt`);
    seen.add(norm(it.q));
    if (/NaN|undefined/.test(JSON.stringify(it))) errors.push(`${id}: NaN/undefined`);
    if (it.check && it.check.type === "js") {
      checked++;
      const got = String(new Function(it.check.code)());
      if (got !== it.check.ans) errors.push(`${id}: recomputed "${got}" but check.ans is "${it.check.ans}"`);
      const has = (o) => String(o).split(/[^0-9A-Za-z.]+/).includes(it.check.ans);
      if (!has(it.options[it.correctIndex])) errors.push(`${id}: keyed option "${it.options[it.correctIndex]}" does not contain recomputed ${it.check.ans}`);
      it.options.forEach((o, k) => { if (k !== it.correctIndex && has(o)) errors.push(`${id}: a distractor also contains ${it.check.ans}`); });
    }
  });
}
console.log(`${dpath}: ${total} items (${checked} code-checked), ${Object.keys(bank).length} chapters, diff L/M/H ${diffs.L}/${diffs.M}/${diffs.H}, key index spread ${spread.join("/")}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("GATE 1 PASSED (structure).");
