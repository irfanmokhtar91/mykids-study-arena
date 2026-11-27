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

// ---------- D6 static variant pool verification helper ----------
function verifyStaticPool(subj, label, minPerSkill, gradeId = "d6") {
  const ctxPool = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
  ctxPool.window = ctxPool;
  for (const f of [`js/data/curriculum/${gradeId}_${subj}.js`, `js/data/pools/${gradeId}_${subj}.js`]) {
    vm.runInNewContext(fs.readFileSync(f, "utf8"), ctxPool, { filename: f });
  }
  const curr = ctxPool.App.Curriculum[gradeId][subj];
  const items = ctxPool.App.Pools[gradeId][subj];
  const units = new Set(curr.units.map((u) => u.id));
  const skills = new Set(curr.units.flatMap((u) => u.skills.map((s) => s.id)));
  const errs = [];
  const counts = new Map();
  const diffs = { L: 0, M: 0, H: 0 };
  const seenQ = new Set();
  const seenId = new Set();

  for (const it of items) {
    const id = it.id || "(no-id)";
    if (seenId.has(id)) errs.push(`${subj} ${id}: duplicate id`);
    seenId.add(id);
    if (!skills.has(it.skill)) errs.push(`${subj} ${id}: unknown skill ${it.skill}`);
    if (!units.has(it.unit)) errs.push(`${subj} ${id}: unknown unit ${it.unit}`);
    if (!["L", "M", "H"].includes(it.diff)) errs.push(`${subj} ${id}: bad diff`);
    else diffs[it.diff]++;
    if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) errs.push(`${subj} ${id}: bad options`);
    else if (new Set(it.options.map(norm)).size !== 4) errs.push(`${subj} ${id}: duplicate options`);
    if (!(it.correctIndex >= 0 && it.correctIndex < 4)) errs.push(`${subj} ${id}: bad correctIndex`);
    if (!it.explanation || !it.ref) errs.push(`${subj} ${id}: missing explanation/ref`);
    if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) errs.push(`${subj} ${id}: NaN/undefined`);
    const nq = norm(it.q);
    if (seenQ.has(nq)) errs.push(`${subj} ${id}: duplicate prompt`);
    seenQ.add(nq);
    counts.set(it.skill, (counts.get(it.skill) || 0) + 1);
  }
  for (const sk of skills) {
    if ((counts.get(sk) || 0) < minPerSkill) {
      errs.push(`${subj} skill ${sk}: only ${counts.get(sk) || 0} items (need >= ${minPerSkill})`);
    }
  }
  if (errs.length) {
    console.error(errs.slice(0, 40).join("\n"));
    console.error(`${errs.length} ${subj} errors`);
    process.exit(1);
  }
  console.log(`${label}_POOL_VERIFIED: ${items.length} static items, ${skills.size} skills, ${units.size} units, diff L/M/H=${diffs.L}/${diffs.M}/${diffs.H}`);
}

verifyStaticPool("bi", "BI", 8);
verifyStaticPool("rbt", "RBT", 10);
verifyStaticPool("psv", "PSV", 10);
verifyStaticPool("pjpk", "PJPK", 10);
verifyStaticPool("sejarah", "T2_SEJARAH", 10, "t2");
verifyStaticPool("geografi", "T2_GEOGRAFI", 10, "t2");

// -------------------- Tingkatan 2 Matematik Generators (Wave 1) --------------------
{
  const t2mCtx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
  t2mCtx.window = t2mCtx;
  for (const f of ["js/data/curriculum/t2_math.js", "js/data/pools/t2_math_gen.js"]) {
    vm.runInNewContext(fs.readFileSync(f, "utf8"), t2mCtx, { filename: f });
  }
  const t2mGens = t2mCtx.App.Pools.t2.math;
  const t2mSkills = new Set(t2mCtx.App.Curriculum.t2.math.units.flatMap((u) => u.skills.map((s) => s.id)));
  const t2mUnits = new Set(t2mCtx.App.Curriculum.t2.math.units.map((u) => u.id));
  const t2mErrs = [];
  const t2mCombos = new Set();

  if (t2mCtx.App.Generators.pools.t2.math !== t2mGens) t2mErrs.push("t2 math: App.Generators.pools.t2.math mismatch");
  if (t2mCtx.App.Generators && t2mCtx.App.Generators.t2) t2mErrs.push("t2 math: must NOT touch App.Generators.t2");

  for (const g of t2mGens) {
    const id = g.id || `${g.skill}_${g.diff}`;
    t2mCombos.add(`${g.skill}|${g.diff}`);
    if (!t2mSkills.has(g.skill)) t2mErrs.push(`t2m ${id}: unknown skill ${g.skill}`);
    if (!t2mUnits.has(g.unit)) t2mErrs.push(`t2m ${id}: unknown unit ${g.unit}`);
    if (!["L", "M", "H"].includes(g.diff)) t2mErrs.push(`t2m ${id}: bad diff`);
    if (typeof g.generate !== "function") { t2mErrs.push(`t2m ${id}: no generate()`); continue; }
    const sigs = new Set();
    const tpls = new Set();
    for (let seed = 1; seed <= SEEDS; seed++) {
      let it;
      try { it = g.generate(seed); } catch (e) { t2mErrs.push(`t2m ${id}@${seed}: threw ${e.message}`); break; }
      const tag = `t2m ${id}@${seed}`;
      if (!it || !it.q || !Array.isArray(it.options) || it.options.length !== 4) { t2mErrs.push(`${tag}: bad shape`); continue; }
      if (new Set(it.options.map(norm)).size !== 4) t2mErrs.push(`${tag}: duplicate options ${JSON.stringify(it.options)}`);
      if (!(it.correctIndex >= 0 && it.correctIndex < 4)) t2mErrs.push(`${tag}: bad correctIndex`);
      if (!it.explanation) t2mErrs.push(`${tag}: no explanation`);
      if (!it.sig) t2mErrs.push(`${tag}: missing sig`);
      if (!it.template) t2mErrs.push(`${tag}: missing template`);
      if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) t2mErrs.push(`${tag}: NaN/undefined text`);
      const again = g.generate(seed);
      if (JSON.stringify(again) !== JSON.stringify(it)) t2mErrs.push(`${tag}: not deterministic`);
      sigs.add(norm(it.q));
      tpls.add(it.template);
    }
    if (tpls.size < 3) t2mErrs.push(`t2m ${id}: only ${tpls.size} templates (need >= 3)`);
    if (sigs.size < 30) t2mErrs.push(`t2m ${id}: only ${sigs.size} distinct questions (need >= 30)`);
  }
  for (const sk of t2mSkills) {
    for (const d of ["L", "M", "H"]) {
      if (!t2mCombos.has(`${sk}|${d}`)) t2mErrs.push(`t2m missing generator ${sk} ${d}`);
    }
  }
  if (t2mGens.length !== 117 || t2mSkills.size !== 39) t2mErrs.push(`t2m expected 117 gens / 39 skills, got ${t2mGens.length} / ${t2mSkills.size}`);
  if (t2mErrs.length) {
    console.error(t2mErrs.slice(0, 40).join("\n"));
    console.error(`${t2mErrs.length} t2m errors`);
    process.exit(1);
  }
  console.log(`T2_MATH_GEN_VERIFIED: ${t2mGens.length} generators, ${t2mSkills.size} skills, ${SEEDS} seeds each`);
}

// -------------------- Tingkatan 2 Sains (Concept Pool + Numeric Generators) --------------------
{
  const t2sCtx = { console, Math, Date, Set, Map, Array, Number, String, Object, JSON, BigInt };
  t2sCtx.window = t2sCtx;
  for (const f of ["js/data/curriculum/t2_sains.js", "js/data/pools/t2_sains.js", "js/data/pools/t2_sains_gen.js"]) {
    vm.runInNewContext(fs.readFileSync(f, "utf8"), t2sCtx, { filename: f });
  }
  const t2sAll = t2sCtx.App.Pools.t2.sains;
  const t2sGens = t2sCtx.App.Generators.pools.t2.sains;
  const t2sSkills = new Set(t2sCtx.App.Curriculum.t2.sains.units.flatMap((u) => u.skills.map((s) => s.id)));
  const t2sUnits = new Set(t2sCtx.App.Curriculum.t2.sains.units.map((u) => u.id));
  const t2sErrs = [];
  const t2sGenSkills = new Set();
  const t2sGenCombos = new Set();

  for (const g of t2sGens) {
    const id = g.id || `${g.skill}_${g.diff}`;
    t2sGenSkills.add(g.skill);
    t2sGenCombos.add(`${g.skill}|${g.diff}`);
    if (!t2sAll.includes(g)) t2sErrs.push(`t2s gen ${id} missing from App.Pools.t2.sains`);
    if (!t2sSkills.has(g.skill)) t2sErrs.push(`t2s gen ${id}: unknown skill ${g.skill}`);
    if (!t2sUnits.has(g.unit)) t2sErrs.push(`t2s gen ${id}: unknown unit ${g.unit}`);
    if (!["L", "M", "H"].includes(g.diff)) t2sErrs.push(`t2s gen ${id}: bad diff`);
    if (typeof g.generate !== "function") { t2sErrs.push(`t2s gen ${id}: no generate()`); continue; }
    const sigs = new Set();
    const tpls = new Set();
    for (let seed = 1; seed <= SEEDS; seed++) {
      let it;
      try { it = g.generate(seed); } catch (e) { t2sErrs.push(`t2s gen ${id}@${seed}: threw ${e.message}`); break; }
      const tag = `t2s gen ${id}@${seed}`;
      if (!it || !it.q || !Array.isArray(it.options) || it.options.length !== 4) { t2sErrs.push(`${tag}: bad shape`); continue; }
      if (new Set(it.options.map(norm)).size !== 4) t2sErrs.push(`${tag}: duplicate options ${JSON.stringify(it.options)}`);
      if (!(it.correctIndex >= 0 && it.correctIndex < 4)) t2sErrs.push(`${tag}: bad correctIndex`);
      if (!it.explanation) t2sErrs.push(`${tag}: no explanation`);
      if (!it.sig) t2sErrs.push(`${tag}: missing sig`);
      if (!it.template) t2sErrs.push(`${tag}: missing template`);
      if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) t2sErrs.push(`${tag}: NaN/undefined text`);
      const again = g.generate(seed);
      if (JSON.stringify(again) !== JSON.stringify(it)) t2sErrs.push(`${tag}: not deterministic`);
      sigs.add(norm(it.q));
      tpls.add(it.template);
    }
    if (tpls.size < 3) t2sErrs.push(`t2s gen ${id}: only ${tpls.size} templates (need >= 3)`);
    if (sigs.size < 30) t2sErrs.push(`t2s gen ${id}: only ${sigs.size} distinct questions (need >= 30)`);
  }
  for (const gs of t2sGenSkills) {
    for (const d of ["L", "M", "H"]) {
      if (!t2sGenCombos.has(`${gs}|${d}`)) t2sErrs.push(`t2s missing generator ${gs} ${d}`);
    }
  }

  const t2sStatic = t2sAll.filter((it) => typeof it.generate !== "function");
  const t2sStaticCounts = new Map();
  const t2sSeenQ = new Set();
  const t2sSeenIds = new Set();
  for (const it of t2sStatic) {
    const id = it.id || "(no-id)";
    if (t2sSeenIds.has(id)) t2sErrs.push(`t2s static ${id}: duplicate id`);
    t2sSeenIds.add(id);
    if (!t2sSkills.has(it.skill)) t2sErrs.push(`t2s static ${id}: unknown skill ${it.skill}`);
    if (!t2sUnits.has(it.unit)) t2sErrs.push(`t2s static ${id}: unknown unit ${it.unit}`);
    if (!["L", "M", "H"].includes(it.diff)) t2sErrs.push(`t2s static ${id}: bad diff`);
    if (!it.q || !Array.isArray(it.options) || it.options.length !== 4) t2sErrs.push(`t2s static ${id}: bad options`);
    else if (new Set(it.options.map(norm)).size !== 4) t2sErrs.push(`t2s static ${id}: duplicate options`);
    if (!(it.correctIndex >= 0 && it.correctIndex < 4)) t2sErrs.push(`t2s static ${id}: bad correctIndex`);
    if (!it.explanation || !it.ref) t2sErrs.push(`t2s static ${id}: missing explanation/ref`);
    if (/NaN|undefined|Infinity|\[object/.test(JSON.stringify(it))) t2sErrs.push(`t2s static ${id}: NaN/undefined`);
    const nq = norm(it.q);
    if (t2sSeenQ.has(nq)) t2sErrs.push(`t2s static ${id}: duplicate prompt`);
    t2sSeenQ.add(nq);
    t2sStaticCounts.set(it.skill, (t2sStaticCounts.get(it.skill) || 0) + 1);
  }
  for (const sk of t2sSkills) {
    if (!t2sGenSkills.has(sk) && (t2sStaticCounts.get(sk) || 0) < 10) {
      t2sErrs.push(`t2s static skill ${sk}: only ${t2sStaticCounts.get(sk) || 0} items (need >= 10)`);
    }
  }
  if (t2sGens.length !== 18 || t2sStatic.length !== 330 || t2sAll.length !== 348) {
    t2sErrs.push(`t2s unexpected totals gen=${t2sGens.length} static=${t2sStatic.length} all=${t2sAll.length}`);
  }
  if (t2sErrs.length) {
    console.error(t2sErrs.slice(0, 40).join("\n"));
    console.error(`${t2sErrs.length} t2s errors`);
    process.exit(1);
  }
  console.log(`T2_SAINS_GEN_VERIFIED: ${t2sGens.length} generators, ${t2sGenSkills.size} numeric skills, ${SEEDS} seeds each`);
  console.log(`T2_SAINS_POOL_VERIFIED: ${t2sStatic.length} static items, ${t2sStaticCounts.size} concept skills, ${t2sAll.length} total entries`);
}
