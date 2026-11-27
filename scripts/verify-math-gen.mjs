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

// -------------------- Darjah 6 Sains (Concept + Kelajuan Generators) --------------------
const sCtx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
sCtx.window = sCtx;
for (const f of ["js/data/curriculum/d6_sains.js", "js/data/pools/d6_sains.js", "js/data/pools/d6_sains_gen.js"]) {
  vm.runInNewContext(fs.readFileSync(f, "utf8"), sCtx, { filename: f });
}
const sAll = sCtx.App.Pools.d6.sains;
const sGens = sCtx.App.Generators.pools.d6.sains;
const sSkills = new Set(sCtx.App.Curriculum.d6.sains.units.flatMap((u) => u.skills.map((s) => s.id)));
const sUnits = new Set(sCtx.App.Curriculum.d6.sains.units.map((u) => u.id));
const sErrors = [];
const sGenSkills = new Set();
const sGenCombos = new Set();

for (const g of sGens) {
  const id = g.id || `${g.skill}_${g.diff}`;
  sGenSkills.add(g.skill);
  sGenCombos.add(`${g.skill}|${g.diff}`);
  if (!sAll.includes(g)) sErrors.push(`sains gen ${id} missing from App.Pools.d6.sains`);
  if (!sSkills.has(g.skill)) sErrors.push(`sains gen ${id}: unknown skill ${g.skill}`);
  if (!sUnits.has(g.unit)) sErrors.push(`sains gen ${id}: unknown unit ${g.unit}`);
  if (!["L", "M", "H"].includes(g.diff)) sErrors.push(`sains gen ${id}: bad diff`);
  if (typeof g.generate !== "function") { sErrors.push(`sains gen ${id}: no generate()`); continue; }
  const sigs = new Set();
  const tpls = new Set();
  for (let seed = 1; seed <= SEEDS; seed++) {
    let it;
    try { it = g.generate(seed); } catch (e) { sErrors.push(`sains gen ${id}@${seed}: threw ${e.message}`); break; }
    const tag = `sains gen ${id}@${seed}`;
    if (!it || !it.q || !Array.isArray(it.options) || it.options.length !== 4) { sErrors.push(`${tag}: bad shape`); continue; }
    if (new Set(it.options.map(norm)).size !== 4) sErrors.push(`${tag}: duplicate options ${JSON.stringify(it.options)}`);
    if (!(it.correctIndex >= 0 && it.correctIndex < 4)) sErrors.push(`${tag}: bad correctIndex`);
    if (!it.explanation) sErrors.push(`${tag}: no explanation`);
    if (!it.sig) sErrors.push(`${tag}: missing sig`);
    if (!it.template) sErrors.push(`${tag}: missing template`);
    if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) sErrors.push(`${tag}: NaN/undefined text`);
    const again = g.generate(seed);
    if (JSON.stringify(again) !== JSON.stringify(it)) sErrors.push(`${tag}: not deterministic`);
    sigs.add(norm(it.q));
    tpls.add(it.template);
  }
  if (tpls.size < 3) sErrors.push(`sains gen ${id}: only ${tpls.size} templates (need >= 3)`);
  if (sigs.size < 30) sErrors.push(`sains gen ${id}: only ${sigs.size} distinct questions (need >= 30)`);
}
for (const gs of sGenSkills) {
  for (const d of ["L", "M", "H"]) {
    if (!sGenCombos.has(`${gs}|${d}`)) sErrors.push(`sains missing generator ${gs} ${d}`);
  }
}

const sStatic = sAll.filter((it) => typeof it.generate !== "function");
const sStaticCounts = new Map();
const sSeenQ = new Set();
for (const it of sStatic) {
  const id = it.id || "(no-id)";
  if (!sSkills.has(it.skill)) sErrors.push(`sains static ${id}: unknown skill ${it.skill}`);
  if (!sUnits.has(it.unit)) sErrors.push(`sains static ${id}: unknown unit ${it.unit}`);
  if (!["L", "M", "H"].includes(it.diff)) sErrors.push(`sains static ${id}: bad diff`);
  if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) sErrors.push(`sains static ${id}: bad options`);
  else if (new Set(it.options.map(norm)).size !== 4) sErrors.push(`sains static ${id}: duplicate options`);
  if (!(it.correctIndex >= 0 && it.correctIndex < 4)) sErrors.push(`sains static ${id}: bad correctIndex`);
  if (!it.explanation || !it.ref) sErrors.push(`sains static ${id}: missing explanation/ref`);
  if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) sErrors.push(`sains static ${id}: NaN/undefined`);
  const nq = norm(it.q);
  if (sSeenQ.has(nq)) sErrors.push(`sains static ${id}: duplicate prompt`);
  sSeenQ.add(nq);
  sStaticCounts.set(it.skill, (sStaticCounts.get(it.skill) || 0) + 1);
}
for (const sk of sSkills) {
  if (!sGenSkills.has(sk) && (sStaticCounts.get(sk) || 0) < 10) {
    sErrors.push(`sains static skill ${sk}: only ${sStaticCounts.get(sk) || 0} items (need >= 10)`);
  }
}

if (sErrors.length) {
  console.error(sErrors.slice(0, 40).join("\n"));
  console.error(`${sErrors.length} sains errors`);
  process.exit(1);
}
console.log(`SAINS_GEN_VERIFIED: ${sGens.length} generators, ${sGenSkills.size} numeric skills, ${SEEDS} seeds each`);
console.log(`SAINS_POOL_VERIFIED: ${sStatic.length} static items, ${sStaticCounts.size} concept skills, ${sAll.length} total entries`);

// ---------- D6 Bahasa Inggeris pool verification ----------
const bCtx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
bCtx.window = bCtx;
for (const f of ["js/data/curriculum/d6_bi.js", "js/data/pools/d6_bi.js"]) {
  vm.runInNewContext(fs.readFileSync(f, "utf8"), bCtx, { filename: f });
}
const bCurr = bCtx.App.Curriculum.d6.bi;
const bItems = bCtx.App.Pools.d6.bi;
const bUnits = new Set(bCurr.units.map((u) => u.id));
const bSkills = new Set(bCurr.units.flatMap((u) => u.skills.map((s) => s.id)));
const bErrors = [];
const bCounts = new Map();
const bDiffs = { L: 0, M: 0, H: 0 };
const bSeenQ = new Set();
const bSeenId = new Set();

for (const it of bItems) {
  const id = it.id || "(no-id)";
  if (bSeenId.has(id)) bErrors.push(`bi ${id}: duplicate id`);
  bSeenId.add(id);
  if (!bSkills.has(it.skill)) bErrors.push(`bi ${id}: unknown skill ${it.skill}`);
  if (!bUnits.has(it.unit)) bErrors.push(`bi ${id}: unknown unit ${it.unit}`);
  if (!["L", "M", "H"].includes(it.diff)) bErrors.push(`bi ${id}: bad diff`);
  else bDiffs[it.diff]++;
  if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) bErrors.push(`bi ${id}: bad options`);
  else if (new Set(it.options.map(norm)).size !== 4) bErrors.push(`bi ${id}: duplicate options`);
  if (!(it.correctIndex >= 0 && it.correctIndex < 4)) bErrors.push(`bi ${id}: bad correctIndex`);
  if (!it.explanation || !it.ref) bErrors.push(`bi ${id}: missing explanation/ref`);
  if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) bErrors.push(`bi ${id}: NaN/undefined`);
  const nq = norm(it.q);
  if (bSeenQ.has(nq)) bErrors.push(`bi ${id}: duplicate prompt`);
  bSeenQ.add(nq);
  bCounts.set(it.skill, (bCounts.get(it.skill) || 0) + 1);
}
for (const sk of bSkills) {
  if ((bCounts.get(sk) || 0) < 8) {
    bErrors.push(`bi skill ${sk}: only ${bCounts.get(sk) || 0} items (need >= 8)`);
  }
}
if (bErrors.length) {
  console.error(bErrors.slice(0, 40).join("\n"));
  console.error(`${bErrors.length} bi errors`);
  process.exit(1);
}
console.log(`BI_POOL_VERIFIED: ${bItems.length} static items, ${bSkills.size} skills, ${bUnits.size} units, diff L/M/H=${bDiffs.L}/${bDiffs.M}/${bDiffs.H}`);
