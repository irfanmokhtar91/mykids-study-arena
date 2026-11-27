/**
 * Gate 1 structural & blueprint verification for Darjah 6 UASA mock exam pools:
 *   - js/data/structured_d6_math.js
 *   - js/data/structured_d6_sains.js
 *   - js/data/structured_d6_sejarah.js
 *   - js/data/mock_d6_bm.js
 *   - js/data/mock_d6_bi.js
 * Validates both Node (require) and browser-global (vm window.App) modes,
 * valid KSSR Semakan 2017 chapterIds (zero "mesin" in Sains), exact KPM blueprint marks,
 * step sums, self-contained stems, unique MCQ options, and exact BI Part 5 word clues.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

let failed = 0;
function ok(name, cond, detail = "") {
  if (!cond) {
    console.log("FAIL", name, detail ? `- ${detail}` : "");
    failed++;
  }
}

const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
const badVisualRe = /\b(rajah di (atas|bawah|sebelah)|gambar di (atas|bawah|sebelah)|lihat gambar|berdasarkan gambar|berdasarkan rajah|look at the picture|see the diagram)\b/i;

// Load d6 syllabus chapterIds
const sylCtx = { console };
sylCtx.window = sylCtx;
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js/syllabus.js"), "utf8"), sylCtx, { filename: "js/syllabus.js" });
const d6Chapters = new Map();
for (const sub of sylCtx.App.GRADES.d6.subjects) {
  d6Chapters.set(sub.id, new Set(sub.chapters.map((c) => c.id)));
}

// Verify browser-global IIFE path loads all 5 modules cleanly onto App.Data
const winCtx = { console };
winCtx.window = winCtx;
const DATA_FILES = [
  "js/data/structured_d6_math.js",
  "js/data/structured_d6_sains.js",
  "js/data/structured_d6_sejarah.js",
  "js/data/mock_d6_bm.js",
  "js/data/mock_d6_bi.js"
];
for (const rel of DATA_FILES) {
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), winCtx, { filename: rel });
}
ok("browser App.Data.structured has all 5 d6 pools", ["d6_math", "d6_sains", "d6_sejarah", "d6_bm", "d6_bi"].every((k) => Array.isArray(winCtx.App?.Data?.structured?.[k]?.ITEMS)));
ok("browser App.Data.mockObjective has d6_bm and d6_bi", ["d6_bm", "d6_bi"].every((k) => Array.isArray(winCtx.App?.Data?.mockObjective?.[k]?.SETS)));

function checkStructuredPool(subjId, modRel, partRules, opts = {}) {
  const mod = require(path.join(ROOT, modRel));
  const items = mod.ITEMS;
  const validChapters = d6Chapters.get(subjId);
  ok(`${subjId}: ITEMS non-empty array`, Array.isArray(items) && items.length > 0);
  const seenIds = new Set();
  const seenPrompts = new Set();
  const partCounts = {};

  for (const it of items) {
    ok(`${subjId} ${it.id}: unique id`, it.id && !seenIds.has(it.id));
    seenIds.add(it.id);
    ok(`${subjId} ${it.id}: valid chapterId ${it.chapterId}`, validChapters.has(it.chapterId));
    if (subjId === "sains") ok(`${subjId} ${it.id}: never mesin`, it.chapterId !== "mesin");
    ok(`${subjId} ${it.id}: verified status`, it.status === "verified", it.status);
    ok(`${subjId} ${it.id}: valid level`, ["rendah", "sederhana", "tinggi"].includes(it.level), it.level);
    ok(`${subjId} ${it.id}: expected part ${it.part}`, Object.prototype.hasOwnProperty.call(partRules, it.part));
    partCounts[it.part] = (partCounts[it.part] || 0) + 1;

    ok(`${subjId} ${it.id}: has parts array`, Array.isArray(it.parts) && it.parts.length > 0);
    const totalMarks = it.parts.reduce((a, p) => a + p.marks, 0);
    if (partRules[it.part]) {
      ok(`${subjId} ${it.id}: total marks === ${partRules[it.part].marks}`, totalMarks === partRules[it.part].marks, `got ${totalMarks}`);
    }
    const promptKey = norm(`${it.stem || ""}|${it.parts.map((p) => p.q).join("|")}`);
    ok(`${subjId} ${it.id}: unique prompt`, !seenPrompts.has(promptKey));
    seenPrompts.add(promptKey);
    ok(`${subjId} ${it.id}: self-contained stem/parts`, !badVisualRe.test(promptKey));

    it.parts.forEach((p, pi) => {
      ok(`${subjId} ${it.id}[${pi}]: non-empty answer`, typeof p.answer === "string" && p.answer.trim().length > 0);
      ok(`${subjId} ${it.id}[${pi}]: has steps`, Array.isArray(p.steps) && p.steps.length > 0);
      const stepSum = (p.steps || []).reduce((a, s) => a + s.marks, 0);
      ok(`${subjId} ${it.id}[${pi}]: steps sum to part.marks (${p.marks})`, stepSum === p.marks, `got ${stepSum}`);
      ok(
        `${subjId} ${it.id}[${pi}]: steps have valid kind/marks/text`,
        (p.steps || []).every((s) => (s.kind === "M" || s.kind === "A") && Number.isInteger(s.marks) && s.marks > 0 && typeof s.text === "string" && s.text.trim().length > 0)
      );
      if (opts.requireNumericCheck) {
        ok(`${subjId} ${it.id}[${pi}]: finite numeric check array`, Array.isArray(p.check) && p.check.length > 0 && p.check.every((v) => typeof v === "number" && Number.isFinite(v)));
      }
    });
  }

  for (const [part, rule] of Object.entries(partRules)) {
    ok(`${subjId} part ${part}: >= ${rule.minCount} items`, (partCounts[part] || 0) >= rule.minCount, `got ${partCounts[part] || 0}`);
  }
  return { count: items.length, partCounts };
}

function checkObjectiveSets(subjId, modRel, setRules) {
  const mod = require(path.join(ROOT, modRel));
  const sets = mod.SETS;
  const validChapters = d6Chapters.get(subjId);
  ok(`${subjId}: SETS non-empty array`, Array.isArray(sets) && sets.length > 0);
  const seenSetIds = new Set();
  const partCounts = {};

  for (const st of sets) {
    ok(`${subjId} ${st.id}: unique set id`, st.id && !seenSetIds.has(st.id));
    seenSetIds.add(st.id);
    ok(`${subjId} ${st.id}: verified status`, st.status === "verified", st.status);
    ok(`${subjId} ${st.id}: expected part ${st.part}`, Object.prototype.hasOwnProperty.call(setRules, st.part));
    partCounts[st.part] = (partCounts[st.part] || 0) + 1;
    const rule = setRules[st.part];
    ok(`${subjId} ${st.id}: items length === ${rule.count}`, Array.isArray(st.items) && st.items.length === rule.count, `got ${st.items?.length}`);

    const seenQ = new Set();
    for (let i = 0; i < st.items.length; i++) {
      const it = st.items[i];
      const tag = `${subjId} ${st.id}[${i}]`;
      ok(`${tag}: valid chapterId ${it.chapterId}`, validChapters.has(it.chapterId));
      ok(`${tag}: non-empty q`, typeof it.q === "string" && it.q.trim().length > 0);
      ok(`${tag}: non-empty explanation`, typeof it.explanation === "string" && it.explanation.trim().length > 0);
      const qKey = norm(`${it.passage || ""}|${it.q}`);
      ok(`${tag}: no duplicate prompt within set`, !seenQ.has(qKey));
      seenQ.add(qKey);
      ok(`${tag}: self-contained text`, !badVisualRe.test(`${it.passage || ""} ${st.passage || ""} ${it.q}`));

      if (rule.inputType === "word") {
        ok(`${tag}: inputType word`, it.inputType === "word");
        ok(`${tag}: single lowercase alphabetic word`, /^[a-z]+$/.test(it.answer || ""), it.answer);
        ok(`${tag}: accept includes answer`, Array.isArray(it.accept) && it.accept.some((a) => norm(a) === norm(it.answer)));
        const tokens = String(it.clue || "").trim().split(/\s+/);
        ok(`${tag}: clue length matches answer.length`, tokens.length === (it.answer || "").length, `${it.clue} vs ${it.answer}`);
        ok(`${tag}: clue starts with first letter and remaining underscores`, tokens[0] === (it.answer || "")[0] && tokens.slice(1).every((t) => t === "_"), it.clue);
      } else {
        const expOpts = rule.optCount || 4;
        ok(`${tag}: ${expOpts} options`, Array.isArray(it.options) && it.options.length === expOpts, `got ${it.options?.length}`);
        ok(`${tag}: unique case-insensitive options`, new Set((it.options || []).map(norm)).size === expOpts);
        ok(`${tag}: valid correctIndex`, Number.isInteger(it.correctIndex) && it.correctIndex >= 0 && it.correctIndex < expOpts);
      }
    }
  }

  for (const [part, rule] of Object.entries(setRules)) {
    ok(`${subjId} set part ${part}: >= ${rule.minSets} sets`, (partCounts[part] || 0) >= rule.minSets, `got ${partCounts[part] || 0}`);
  }
  return { count: sets.length, partCounts };
}

const rMath = checkStructuredPool("math", "js/data/structured_d6_math.js", {
  A: { marks: 2, minCount: 13 },
  B: { marks: 12, minCount: 2 }
}, { requireNumericCheck: true });

const rSains = checkStructuredPool("sains", "js/data/structured_d6_sains.js", {
  B: { marks: 4, minCount: 2 },
  C: { marks: 8, minCount: 4 }
});

const rSejarah = checkStructuredPool("sejarah", "js/data/structured_d6_sejarah.js", {
  B: { marks: 5, minCount: 4 },
  C: { marks: 5, minCount: 2 }
});

const rBmSets = checkObjectiveSets("bm", "js/data/mock_d6_bm.js", {
  A: { count: 10, minSets: 2, optCount: 4 }
});
const rBmStr = checkStructuredPool("bm", "js/data/mock_d6_bm.js", {
  B: { marks: 5, minCount: 2 },
  C: { marks: 10, minCount: 1 },
  D: { marks: 20, minCount: 1 }
});

const rBiSets = checkObjectiveSets("bi", "js/data/mock_d6_bi.js", {
  "1": { count: 5, minSets: 2, optCount: 4 },
  "2": { count: 4, minSets: 2, optCount: 4 },
  "3": { count: 5, minSets: 2, optCount: 4 },
  "4": { count: 6, minSets: 2, optCount: 3 },
  "5": { count: 5, minSets: 2, inputType: "word" }
});
const rBiStr = checkStructuredPool("bi", "js/data/mock_d6_bi.js", {
  "6": { marks: 10, minCount: 1 },
  "7": { marks: 15, minCount: 1 }
});

if (failed > 0) {
  console.log(`D6_UASA_GATE1_FAILED (${failed})`);
  process.exit(1);
}
console.log(
  `D6_UASA_GATE1_PASSED: math=${rMath.count}, sains=${rSains.count}, sejarah=${rSejarah.count}, bm=${rBmSets.count}sets/${rBmStr.count}str, bi=${rBiSets.count}sets/${rBiStr.count}str`
);
