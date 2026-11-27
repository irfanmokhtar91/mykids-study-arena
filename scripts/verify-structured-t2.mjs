#!/usr/bin/env node
/**
 * Gate 1 validator for Tingkatan 2 structured banks:
 *   - js/data/structured_t2_math.js
 *   - js/data/structured_t2_sains.js
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function loadSyllabusChapters() {
  const ctx = { console };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.runInNewContext(
    fs.readFileSync(path.join(rootDir, "js/syllabus.js"), "utf8"),
    ctx,
    { filename: "js/syllabus.js" }
  );
  const t2 = ctx.App.GRADES.t2;
  const map = {};
  for (const subj of t2.subjects) {
    map[subj.id] = new Set(subj.chapters.map((c) => c.id));
  }
  return map;
}

function loadBrowserIife(relPath, key) {
  const ctx = { console };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(rootDir, relPath), "utf8"), ctx, {
    filename: relPath
  });
  return ctx.App && ctx.App.Data && ctx.App.Data.structured && ctx.App.Data.structured[key];
}

const VISUAL_REF_RE = /\b(rajah\s+di\s+bawah|rajah\s+di\s+atas|rajah\s+berikut|dalam\s+rajah|lihat\s+rajah|gambar\s+rajah|gambar\s+di\s+bawah|gambar\s+di\s+atas|foto\s+di\s+atas|lihat\s+graf)\b/i;

function verifyBank({ relPath, key, validChapters, minB, minC, requireNumericCheck, requireAllChaptersInC, requireAllChaptersOverall }) {
  const errors = [];
  const mod = require(path.join(rootDir, relPath));
  const browser = loadBrowserIife(relPath, key);

  if (!mod || !Array.isArray(mod.ITEMS) || typeof mod.marksOf !== "function") {
    return { errors: [`${relPath}: missing ITEMS or marksOf export`], summary: null };
  }
  if (!browser || !Array.isArray(browser.ITEMS) || browser.ITEMS.length !== mod.ITEMS.length) {
    errors.push(`${relPath}: browser IIFE registration App.Data.structured.${key} mismatch`);
  }

  const seenIds = new Set();
  const countByPart = { B: 0, C: 0 };
  const chaptersOverall = new Set();
  const chaptersC = new Set();

  for (const it of mod.ITEMS) {
    if (!it.id) {
      errors.push(`${relPath}: item missing id`);
      continue;
    }
    if (seenIds.has(it.id)) errors.push(`${it.id}: duplicate item id`);
    seenIds.add(it.id);

    if (it.status !== "verified") errors.push(`${it.id}: expected status="verified", got "${it.status}"`);
    if (!validChapters.has(it.chapterId)) errors.push(`${it.id}: invalid chapterId "${it.chapterId}"`);
    chaptersOverall.add(it.chapterId);

    if (it.part !== "B" && it.part !== "C") {
      errors.push(`${it.id}: invalid part "${it.part}"`);
      continue;
    }
    countByPart[it.part]++;
    if (it.part === "C") chaptersC.add(it.chapterId);

    const expectedMarks = it.part === "B" ? 4 : 10;
    const total = mod.marksOf(it);
    if (total !== expectedMarks) errors.push(`${it.id}: expected ${expectedMarks} marks for Part ${it.part}, got ${total}`);

    if (!Array.isArray(it.parts) || it.parts.length === 0) {
      errors.push(`${it.id}: missing parts`);
      continue;
    }
    if (typeof it.stem === "string" && VISUAL_REF_RE.test(it.stem)) {
      errors.push(`${it.id}: stem references missing visual/diagram`);
    }

    for (const p of it.parts) {
      const promptText = String(p.q || "").trim() || (it.parts.length === 1 ? String(it.stem || "").trim() : "");
      if (!promptText) errors.push(`${it.id}${p.label}: empty q`);
      if (!p.answer || !String(p.answer).trim()) errors.push(`${it.id}${p.label}: empty answer`);
      if (VISUAL_REF_RE.test(String(p.q))) errors.push(`${it.id}${p.label}: question references missing visual/diagram`);

      if (!Array.isArray(p.steps) || p.steps.length === 0) {
        errors.push(`${it.id}${p.label}: missing steps`);
      } else {
        let stepSum = 0;
        for (const st of p.steps) {
          if (st.kind !== "M" && st.kind !== "A") errors.push(`${it.id}${p.label}: invalid step kind "${st.kind}"`);
          if (!Number.isInteger(st.marks) || st.marks <= 0) errors.push(`${it.id}${p.label}: invalid step marks`);
          if (!st.text || !String(st.text).trim()) errors.push(`${it.id}${p.label}: empty step text`);
          stepSum += st.marks;
        }
        if (stepSum !== p.marks) errors.push(`${it.id}${p.label}: step marks sum ${stepSum} !== part.marks ${p.marks}`);
      }

      if (requireNumericCheck) {
        if (!Array.isArray(p.check) || p.check.length === 0 || !p.check.every((v) => typeof v === "number" && Number.isFinite(v))) {
          errors.push(`${it.id}${p.label}: missing or non-finite numeric check array`);
        }
      }
    }
  }

  if (countByPart.B < minB) errors.push(`${relPath}: expected >= ${minB} Part B items, got ${countByPart.B}`);
  if (countByPart.C < minC) errors.push(`${relPath}: expected >= ${minC} Part C items, got ${countByPart.C}`);

  if (requireAllChaptersOverall) {
    for (const ch of validChapters) {
      if (!chaptersOverall.has(ch)) errors.push(`${relPath}: chapter "${ch}" missing across Part B+C`);
    }
  }
  if (requireAllChaptersInC) {
    for (const ch of validChapters) {
      if (!chaptersC.has(ch)) errors.push(`${relPath}: chapter "${ch}" missing in Part C`);
    }
  }

  return {
    errors,
    summary: `${key}: ${mod.ITEMS.length} items (B:${countByPart.B}, C:${countByPart.C}), chapters=${chaptersOverall.size}/${validChapters.size}, C_chapters=${chaptersC.size}`
  };
}

const chaptersMap = loadSyllabusChapters();
const results = [
  verifyBank({
    relPath: "js/data/structured_t2_math.js",
    key: "t2_math",
    validChapters: chaptersMap.math,
    minB: 5,
    minC: 6,
    requireNumericCheck: true,
    requireAllChaptersInC: false,
    requireAllChaptersOverall: true
  }),
  verifyBank({
    relPath: "js/data/structured_t2_sains.js",
    key: "t2_sains",
    validChapters: chaptersMap.sains,
    minB: 5,
    minC: 6,
    requireNumericCheck: false,
    requireAllChaptersInC: true,
    requireAllChaptersOverall: true
  })
];

let totalErrs = 0;
for (const r of results) {
  if (r.summary) console.log(r.summary);
  for (const e of r.errors) {
    totalErrs++;
    console.error("ERR:", e);
  }
}

if (totalErrs > 0) {
  console.error(`VERIFY_STRUCTURED_T2_FAILED (${totalErrs} errors)`);
  process.exit(1);
}
console.log("ALL_T2_STRUCTURED_VERIFIED");
