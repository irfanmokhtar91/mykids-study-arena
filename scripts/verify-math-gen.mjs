/**
 * Structural brute-force check of Darjah 6 Matematik generators.
 * 300 seeds x every generator: 4 unique options, valid correctIndex, tags present,
 * no NaN/undefined text, explanation present, deterministic by seed, varied across seeds.
 * Numeric correctness is covered by the independent blind-solve sample (see docs).
 */
import fs from "node:fs";
import vm from "node:vm";
const ctx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
ctx.window = ctx;
for (const f of ["js/data/curriculum/d6_math.js", "js/data/pools/d6_math_gen.js"]) vm.runInNewContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const gens = ctx.App.Pools.d6.math;
const skills = new Set(ctx.App.Curriculum.d6.math.units.flatMap((u) => u.skills.map((s) => s.id)));
const units = new Set(ctx.App.Curriculum.d6.math.units.map((u) => u.id));
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, " ").trim();
const errors = [];
const combos = new Set();
const lowVariety = [];
// Fact-recall skills (takaful/aset/liabiliti) draw from a small fixed set; flagged, not failed.
const CONCEPT_ONLY = new Set(["b3_s5_L"]);
const SEEDS = 300;
for (const g of gens) {
  const id = g.id || `${g.skill}_${g.diff}`;
  combos.add(`${g.skill}|${g.diff}`);
  if (!skills.has(g.skill)) errors.push(`${id}: unknown skill ${g.skill}`);
  if (!units.has(g.unit)) errors.push(`${id}: unknown unit ${g.unit}`);
  if (!["L", "M", "H"].includes(g.diff)) errors.push(`${id}: bad diff`);
  if (typeof g.generate !== "function") { errors.push(`${id}: no generate()`); continue; }
  const sigs = new Set();
  for (let seed = 1; seed <= SEEDS; seed++) {
    let it;
    try { it = g.generate(seed); } catch (e) { errors.push(`${id}@${seed}: threw ${e.message}`); break; }
    const tag = `${id}@${seed}`;
    if (!it || !it.q || !Array.isArray(it.options) || it.options.length !== 4) { errors.push(`${tag}: bad shape`); continue; }
    if (new Set(it.options.map(norm)).size !== 4) errors.push(`${tag}: duplicate options ${JSON.stringify(it.options)}`);
    if (!(it.correctIndex >= 0 && it.correctIndex < 4)) errors.push(`${tag}: bad correctIndex`);
    if (!it.explanation) errors.push(`${tag}: no explanation`);
    if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) errors.push(`${tag}: NaN/undefined text`);
    const again = g.generate(seed);
    if (JSON.stringify(again) !== JSON.stringify(it)) errors.push(`${tag}: not deterministic`);
    sigs.add(norm(it.q));
  }
  if (sigs.size < 8 && !CONCEPT_ONLY.has(id)) errors.push(`${id}: only ${sigs.size} distinct questions over ${SEEDS} seeds`);
  else if (sigs.size < 30 || CONCEPT_ONLY.has(id)) lowVariety.push(`${id}=${sigs.size}`);
}
for (const s of skills) for (const d of ["L", "M", "H"]) if (!combos.has(`${s}|${d}`)) errors.push(`missing generator ${s} ${d}`);
if (errors.length) { console.error(errors.slice(0, 40).join("\n")); console.error(`${errors.length} errors`); process.exit(1); }
if (lowVariety.length) console.log(`low variety (<30 distinct, still usable): ${lowVariety.join(", ")}`);
console.log(`MATH_GEN_VERIFIED: ${gens.length} generators, ${skills.size} skills, ${SEEDS} seeds each`);
