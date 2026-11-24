/**
 * Correctness gate 1 for the Tingkatan 4 Matematik structured pool.
 * Every final answer is recomputed from the problem's own numbers with independent code and compared with the stored `check` values.
 * Gate 2 (separate): blind second-model solve of the question text only.
 */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const D = require("../js/data/structured_t4_math.js");

const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const r2 = (x) => Math.round(x * 100) / 100;
const quad = (a, b, c) => { const d = Math.sqrt(b * b - 4 * a * c); return [(-b - d) / (2 * a), (-b + d) / (2 * a)].sort((x, y) => x - y); };
const isPrime = (k) => { if (k < 2) return false; for (let i = 2; i * i <= k; i++) if (k % i === 0) return false; return true; };
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const popVar = (d) => { const m = d.reduce((a, b) => a + b, 0) / d.length; return d.reduce((a, x) => a + (x - m) ** 2, 0) / d.length; };
const median = (d) => { const s = d.slice().sort((a, b) => a - b); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };

const EXPECTED = {
  "t4m-A01": () => [quad(2, -7, -4)],
  "t4m-A02": () => [quad(6, -5, -4)],
  "t4m-A03": () => [[parseInt("110101", 2)], [Number((53).toString(5))]],
  "t4m-A04": () => [[Number((parseInt("1101", 2) + parseInt("1011", 2)).toString(2))], [parseInt("11000", 2)]],
  // counterexample property: 6 is even but not a multiple of 4, while the ORIGINAL statement holds for multiples of 4
  "t4m-A05": () => { const orig = range(1, 100).filter((x) => x % 4 === 0).every((x) => x % 2 === 0); const ce = 6; return [[orig && ce % 2 === 0 && ce % 4 !== 0 ? 6 : -1]]; },
  "t4m-A06": () => { const xi = range(1, 12); const A = xi.filter((x) => x % 3 === 0), B = xi.filter((x) => x % 2 === 0); const U = xi.filter((x) => A.includes(x) || B.includes(x)); return [[xi.length - U.length]]; },
  "t4m-A07": () => [[20 * 5 + ((20 + 30) / 2) * 5]],
  "t4m-A08": () => { const d = [2, 4, 6, 8, 10]; return [[popVar(d), r2(Math.sqrt(popVar(d)))]]; },
  "t4m-A09": () => [[0.4 * 0.5, 0.4 + 0.5 - 0.4 * 0.5]],
  "t4m-A10": () => { const exp = 1450 + 980; return [[exp, 3200 - exp]]; },
  "t4m-A11": () => { const m = 9600 / 8; return [[m, (m / 4000) * 100]]; },
  "t4m-A12": () => [quad(1, -3, -28)],
  "t4m-B01": () => [quad(3, 2, -8), quad(1, 5, -14), quad(1, -6, -16)],
  "t4m-B02": () => { const xi = range(1, 20); const P = xi.filter(isPrime), Q = xi.filter((x) => x % 3 === 0); const inter = P.filter((x) => Q.includes(x)); const U = xi.filter((x) => P.includes(x) || Q.includes(x));
    return [inter, [U.length], [xi.length - U.length], [Q.filter((x) => !P.includes(x)).length]]; },
  "t4m-B03": () => { const vmax = 2 * 6; const dist = 0.5 * 6 * vmax + vmax * 10 + 0.5 * 4 * vmax; return [[vmax], [dist], [dist / (6 + 10 + 4)]]; },
  "t4m-B04": () => { const d = [2, 4, 4, 4, 5, 5, 7, 9]; const m = d.reduce((a, b) => a + b, 0) / d.length; const s = d.slice().sort((a, b) => a - b);
    const q1 = median(s.slice(0, s.length / 2)), q3 = median(s.slice(s.length / 2)); return [[m], [popVar(d), Math.sqrt(popVar(d))], [q3 - q1]]; },
  "t4m-B05": () => { const X = { r: 3, b: 2 }, Y = { r: 4, b: 1 }; const nx = 5, ny = 5; const rr = (X.r / nx) * (Y.r / ny), bb = (X.b / nx) * (Y.b / ny); return [[rr], [rr + bb], [1 - rr]]; },
  "t4m-B06": () => { const inc = 4200 + 800, exp = 1900 + 1500, sur = inc - exp; return [[inc], [exp], [sur], [(sur / inc) * 100]]; },
  "t4m-B07": () => { const inReg = (x, y) => (y > x - 2 && x + y < 8 && x >= 0 ? 1 : 0); return [[inReg(1, 5)], [inReg(3, 3)], [inReg(6, 1)]]; },
  "t4m-C01": () => { const w = quad(1, -20, 91); return [[...quad(2, -3, -5), ...quad(1, -2, -8), ...quad(3, -12, 0)], [w[1], w[0]]]; },
  "t4m-C02": () => { const sur = 6500 - (2300 + 1900); const pct = r2(Math.round((sur / 6500) * 1000) / 10); const v2 = 1900 * 1.2; const sur2 = 6500 - (2300 + v2); return [[sur], [pct], [18400 / sur], [v2, sur2, 17280 / sur2]]; },
  "t4m-C03": () => { const a = 16 / 4, dec = 16 / 4, dist = 0.5 * 4 * 16 + 16 * 6 + 0.5 * 4 * 16; return [[a], [dec], [dist], [r2(dist / (4 + 6 + 4))], [12 / a]]; },
  "t4m-C04": () => { const n = 30, B = 18, Dd = 14, both = 6; const union = B + Dd - both; const only1 = (B - both) + (Dd - both);
    return [[union], [n - union], [B - both], [only1 / n], [0.7 * 0.8, 1 - 0.3 * 0.2]]; }
};

let failed = 0;
const ok = (name, cond, detail = "") => { console.log(cond ? "PASS" : "FAIL", name, cond ? "" : detail); if (!cond) failed++; };
const chapters = ["kuadratik", "asas_nombor", "penaakulan_logik", "operasi_set", "rangkaian_graf", "ketaksamaan_linear", "graf_gerakan", "sukatan_serakan", "kebarangkalian", "kewangan"];
const MARKS = { A: 4, B: 9, C: 15 };
const ids = new Set(), texts = new Set();

D.ITEMS.forEach((it) => {
  ok(`${it.id}: unique id`, !ids.has(it.id)); ids.add(it.id);
  ok(`${it.id}: valid chapterId`, chapters.includes(it.chapterId));
  ok(`${it.id}: part A/B/C matches id`, ["A", "B", "C"].includes(it.part) && it.id.includes(`-${it.part}`));
  ok(`${it.id}: worth ${MARKS[it.part]} marks`, D.marksOf(it) === MARKS[it.part], `got ${D.marksOf(it)}`);
  it.parts.forEach((p, i) => {
    ok(`${it.id}[${i}]: steps add up to part marks`, p.steps.reduce((a, s) => a + s.marks, 0) === p.marks);
    ok(`${it.id}[${i}]: M/A steps of 1 mark`, p.steps.every((s) => (s.kind === "M" || s.kind === "A") && s.marks === 1));
    ok(`${it.id}[${i}]: has model answer`, typeof p.answer === "string" && p.answer.length > 0);
  });
  const key = (it.stem + "|" + it.parts.map((p) => p.q).join("|")).toLowerCase();
  ok(`${it.id}: no duplicate text`, !texts.has(key)); texts.add(key);
  const exp = EXPECTED[it.id];
  ok(`${it.id}: has independent recomputation`, typeof exp === "function");
  if (exp) {
    const got = exp();
    ok(`${it.id}: part count matches`, got.length === it.parts.length, `exp ${got.length} vs ${it.parts.length}`);
    it.parts.forEach((p, i) => {
      const e = got[i] || [];
      const same = e.length === p.check.length && e.every((v, k) => near(v, p.check[k], 0.0051));
      ok(`${it.id}[${i}]: stored answer == independent recompute`, same, `stored ${JSON.stringify(p.check)} vs ${JSON.stringify(e)}`);
    });
  }
});

const cnt = (p) => D.ITEMS.filter((i) => i.part === p).length;
ok("pool: >= 10 A items (a paper uses 10)", cnt("A") >= 10, `${cnt("A")}`);
ok("pool: >= 5 B items (a paper uses 5)", cnt("B") >= 5, `${cnt("B")}`);
ok("pool: >= 2 C items (a paper uses 2, answer 1)", cnt("C") >= 2, `${cnt("C")}`);
ok("paper arithmetic: 10 x 4 = 40, 5 x 9 = 45, C counts 15", 10 * 4 + 5 * 9 + 15 === 100);
console.log(failed === 0 ? `STRUCTURED_T4_GATE1_PASSED (${D.ITEMS.length} items)` : `STRUCTURED_T4_GATE1_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
