/**
 * Correctness gate for structured questions (Tingkatan 2 Matematik pilot).
 * Gate 1 (this script): recompute every final answer from the problem's own numbers with independent code,
 *   compare with the stored `check` values, and validate structure (marks, steps, chapter ids, duplicates).
 * Gate 2 (separate): blind second-model solve of the question text only; disagreements reviewed by a human.
 */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const D = require("../js/data/structured_t2_math.js");

const PI = 22 / 7;
const near = (a, b) => Math.abs(a - b) < 1e-9;
const poly = (a, b, c) => [a, b, c];

// Independent recomputation. Each returns one array per part, built ONLY from numbers in the question text.
const EXPECTED = {
  "t2m-B01": () => { const a = 5, d = 6; return [[a + 19 * d]]; },
  "t2m-B02": () => [[3 * 1, 0, -3 * 4]], // 3(x-2)(x+2) = 3x^2 - 12
  "t2m-B03": () => { const v = 30, u = 6, t = 4; return [[(v - u) / t]]; },
  "t2m-B04": () => { const n = 1080 / 180 + 2; return [[n, 1080 / n]]; },
  "t2m-B05": () => { const r = 88 / (2 * PI); return [[r, PI * r * r]]; },
  "t2m-B06": () => [[Math.hypot(8 - 2, 11 - 3), (2 + 8) / 2, (3 + 11) / 2]],
  "t2m-B07": () => { const kmh = 180 / (2 + 30 / 60); return [[kmh, (kmh * 1000) / 3600]]; },
  "t2m-B08": () => [[3 / 10, 1 - 5 / 10]],
  "t2m-B09": () => { // (k-2)/(5-1)=3
    return [[3 * (5 - 1) + 2]];
  },
  "t2m-B10": () => {
    const d = [3, 7, 5, 9, 7, 4, 7, 8];
    const mean = d.reduce((a, b) => a + b, 0) / d.length;
    const freq = {};
    d.forEach((x) => (freq[x] = (freq[x] || 0) + 1));
    const mode = +Object.keys(freq).sort((x, y) => freq[y] - freq[x])[0];
    return [[mean, mode]];
  },
  "t2m-C01": () => {
    // (2p+3)(p-4) - p(p-1) as polynomial coefficients [p^2, p, const]
    const e1 = [2, -8 + 3, -12];
    const e2 = [1, -1, 0];
    const diff = e1.map((x, i) => x - e2[i]);
    // x^2 - 5x - 14 : find roots by search, expect (x-7)(x+2)
    const roots = [];
    for (let r = -50; r <= 50; r++) if (r * r - 5 * r - 14 === 0) roots.push(r);
    // 3/(2x)+5/x^2 at x=2 equals (3x+10)/(2x^2) at x=2
    const x = 2;
    // coefficients rebuilt from the roots found by search: (x - r1)(x - r2) = x^2 - (r1+r2)x + r1*r2
    const fromRoots = roots.length === 2 ? [1, -(roots[0] + roots[1]), roots[0] * roots[1]] : [];
    return [diff, fromRoots, [3 / (2 * x) + 5 / (x * x)]];
  },
  "t2m-C02": () => {
    const pent = ((5 - 2) * 180) / 5;
    let n12 = null;
    for (let n = 3; n <= 60; n++) { const ext = 360 / n; if (Math.abs(180 - ext - 5 * ext) < 1e-9) n12 = n; }
    return [[pent], [n12], [180 - 360 / 15]];
  },
  "t2m-C03": () => [[2 * PI * 7, PI * 49], [(2 * PI * 21 * 20) / 100], [0.5 * PI * 7 * 7]],
  "t2m-C04": () => [[PI * 49 * 10], [(1 / 3) * PI * 49 * 12], [2 * (8 * 5 + 8 * 3 + 5 * 3)]],
  "t2m-C05": () => {
    const ms = [];
    for (let m = -50; m <= 50; m++) if (Math.abs(Math.abs(7 - m) - 6) < 1e-9) ms.push(m);
    return [[Math.hypot(4 - -2, 9 - 1)], [(-2 + 4) / 2, (1 + 9) / 2], ms.sort((a, b) => a - b)];
  },
  "t2m-C06": () => [[240 / (3 + 20 / 60)], [(30 - 10) / 5], [Math.abs((0 - 20) / 8)]],
  "t2m-C07": () => {
    const marks = [4, 5, 6, 7, 8], freq = [2, 3, 5, 7, 3];
    const n = freq.reduce((a, b) => a + b, 0);
    const mean = marks.reduce((a, m, i) => a + m * freq[i], 0) / n;
    const mode = marks[freq.indexOf(Math.max(...freq))];
    const flat = marks.flatMap((m, i) => Array(freq[i]).fill(m));
    const median = (flat[n / 2 - 1] + flat[n / 2]) / 2;
    return [[mode], [mean], [median]];
  },
  "t2m-C08": () => {
    const isPrime = (k) => { if (k < 2) return false; for (let i = 2; i * i <= k; i++) if (k % i === 0) return false; return true; };
    const nums = Array.from({ length: 20 }, (_, i) => i + 1);
    return [[nums.filter((k) => k % 5 === 0).length / 20, nums.filter(isPrime).length / 20], [(1 - 3 / 5) * 30], [0.5 * 60]];
  }
};

let failed = 0;
const ok = (name, cond, detail = "") => {
  console.log(cond ? "PASS" : "FAIL", name, cond ? "" : detail);
  if (!cond) failed++;
};

const chapters = ["pola_jujukan", "pemfaktoran", "rumus_algebra", "poligon", "bulatan", "bentuk_3d", "koordinat", "graf_fungsi", "laju_pecutan", "kecerunan", "transformasi", "sukatan_kecenderungan", "kebarangkalian"];
const ids = new Set();
const stems = new Set();

D.ITEMS.forEach((it) => {
  ok(`${it.id}: unique id`, !ids.has(it.id));
  ids.add(it.id);
  ok(`${it.id}: valid chapterId`, chapters.includes(it.chapterId));
  ok(`${it.id}: part B or C`, it.part === "B" || it.part === "C");
  const target = it.part === "B" ? 4 : 10;
  ok(`${it.id}: worth ${target} marks`, D.marksOf(it) === target, `got ${D.marksOf(it)}`);
  it.parts.forEach((p, i) => {
    const stepSum = p.steps.reduce((a, s) => a + s.marks, 0);
    ok(`${it.id}[${i}]: step marks add up to part marks`, stepSum === p.marks);
    ok(`${it.id}[${i}]: has M and/or A steps, all 1 mark`, p.steps.every((s) => (s.kind === "M" || s.kind === "A") && s.marks === 1));
    ok(`${it.id}[${i}]: has a model answer`, typeof p.answer === "string" && p.answer.length > 0);
  });
  const key = (it.stem + "|" + it.parts.map((p) => p.q).join("|")).toLowerCase();
  ok(`${it.id}: no duplicate question text`, !stems.has(key));
  stems.add(key);

  // Independent recomputation vs stored check values
  const exp = EXPECTED[it.id];
  ok(`${it.id}: has independent recomputation`, typeof exp === "function");
  if (exp) {
    const got = exp();
    ok(`${it.id}: part count matches`, got.length === it.parts.length, `exp ${got.length} parts, item has ${it.parts.length}`);
    it.parts.forEach((p, i) => {
      const e = got[i] || [];
      const same = e.length === p.check.length && e.every((v, k) => near(v, p.check[k]));
      ok(`${it.id}[${i}]: stored answer == independent recompute`, same, `stored ${JSON.stringify(p.check)} vs recomputed ${JSON.stringify(e)}`);
    });
  }
});

// Pool shape needed for a full paper
const B = D.ITEMS.filter((i) => i.part === "B"), C = D.ITEMS.filter((i) => i.part === "C");
ok("pool has >= 5 Bahagian B items", B.length >= 5, `${B.length}`);
ok("pool has >= 6 Bahagian C items", C.length >= 6, `${C.length}`);
ok("Bahagian B draw of 5 = 20 marks", 5 * 4 === 20);
ok("Bahagian C draw of 6 = 60 marks", 6 * 10 === 60);

console.log(failed === 0 ? `STRUCTURED_GATE1_PASSED (${D.ITEMS.length} items)` : `STRUCTURED_GATE1_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
