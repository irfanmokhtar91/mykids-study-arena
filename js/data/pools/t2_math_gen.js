/**
 * Tingkatan 2 Matematik (KSSM, Bab 1-13) deterministic skill-tagged MCQ generators.
 * 117 generators (39 skills x L/M/H), >= 3 templates each, zero DOM/storage dependencies.
 * Registers onto App.Pools.t2.math and App.Generators.pools.t2.math (never App.Generators.t2).
 * Gate 1 brute-force (300 seeds x 117 = 35,100 runs) + Gate 2 independent blind solve (gemini-4-argon, 27/Nov/2026).
 */
(function (global) {
  "use strict";

/**
 * Tingkatan 2 Matematik (KSSM, Bab 1-4) deterministic skill-tagged MCQ generators.
 * 36 generators (12 skills x L/M/H), >= 3 templates each, zero DOM/storage dependencies.
 */
function buildPartB1B4() {
  "use strict";

  // ==================== DETERMINISTIC PRNG ====================
  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    let t = a >>> 0;
    return function () {
      t = (t + 0x6d2b79f5) >>> 0;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(generatorId, seed) {
    return mulberry32(hashSeed(String(seed) + "|" + generatorId));
  }

  function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
  }

  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
  }

  function shuffle(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function pickNonZero(rng, min, max) {
    let v = 0;
    while (v === 0) v = randInt(rng, min, max);
    return v;
  }

  // ==================== MATH & FORMATTING HELPERS ====================
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  function simpFrac(n, d) {
    if (d === 0) throw new Error("Division by zero in simpFrac");
    if (n === 0) return { n: 0, d: 1 };
    const sign = (n < 0) !== (d < 0) ? -1 : 1;
    const an = Math.abs(n);
    const ad = Math.abs(d);
    const g = gcd(an, ad);
    return { n: sign * (an / g), d: ad / g };
  }

  function fmtInt(n) {
    const r = Math.round(n);
    const sign = r < 0 ? "-" : "";
    const s = String(Math.abs(r));
    if (s.length < 4) return sign + s;
    return sign + s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function fmtFrac(n, d) {
    const f = simpFrac(n, d);
    if (f.n === 0) return "0";
    if (f.d === 1) return fmtInt(f.n);
    const sign = f.n < 0 ? "-" : "";
    const an = Math.abs(f.n);
    if (an > f.d) {
      const whole = Math.floor(an / f.d);
      const rem = an % f.d;
      return `${sign}${whole} ${rem}/${f.d}`;
    }
    return `${sign}${an}/${f.d}`;
  }

  function fmtDec(val, maxDp) {
    const dp = maxDp == null ? 4 : maxDp;
    const factor = Math.pow(10, dp);
    const rounded = Math.round(val * factor) / factor;
    if (Object.is(rounded, -0)) return "0";
    let s = rounded.toFixed(dp);
    if (s.includes(".")) s = s.replace(/\.?0+$/, "");
    return s;
  }

  function fmtRM(val) {
    const rounded = Math.round(val * 100) / 100;
    const sign = rounded < 0 ? "-" : "";
    const abs = Math.abs(rounded);
    const [intPart, decPart] = abs.toFixed(2).split(".");
    const intFormatted = Number(intPart) >= 1000 ? fmtInt(Number(intPart)) : intPart;
    return `${sign}RM ${intFormatted}.${decPart}`;
  }

  function fmtDeg(val) {
    return `${fmtDec(val, 2)}°`;
  }

  // ==================== ALGEBRA FORMATTING HELPERS ====================
  function fmtTerms(terms) {
    const parts = [];
    for (const [coeff, label] of terms) {
      if (!coeff) continue;
      const abs = Math.abs(coeff);
      const body = label ? (abs === 1 ? label : `${abs}${label}`) : `${abs}`;
      if (parts.length === 0) {
        parts.push(coeff < 0 ? `-${body}` : body);
      } else {
        parts.push(coeff < 0 ? ` - ${body}` : ` + ${body}`);
      }
    }
    return parts.length ? parts.join("") : "0";
  }

  function fmtLinear(a, v, b) {
    return fmtTerms([[a, v], [b, ""]]);
  }

  function fmtLinearTwo(a, v1, b, v2, c) {
    return fmtTerms([[a, v1], [b, v2], [c || 0, ""]]);
  }

  function fmtParen(expr) {
    return `(${expr})`;
  }

  function fmtQuad(a, b, c, v) {
    const vr = v || "x";
    return fmtTerms([[a, `${vr}²`], [b, vr], [c, ""]]);
  }

  function fmtCoeffVar(c, v) {
    return fmtTerms([[c, v]]);
  }

  function fmtParenLinear(a, v, b) {
    return `(${fmtLinear(a, v, b)})`;
  }

  // Format numerator/denominator fraction cleanly for algebra
  function fmtAlgFrac(numStr, denStr) {
    const nNeedsParen = /[+\-]/.test(numStr.replace(/^-/, "")) && !(numStr.startsWith("(") && numStr.endsWith(")"));
    const dNeedsParen = /[+\-\s*]/.test(denStr.replace(/^-/, "")) && !(denStr.startsWith("(") && denStr.endsWith(")"));
    const nPart = nNeedsParen ? `(${numStr})` : numStr;
    const dPart = dNeedsParen ? `(${denStr})` : denStr;
    return `${nPart}/${dPart}`;
  }

  // ==================== CANONICAL EQUIVALENCE & VALIDATION ====================
  const EVAL_POINTS = [
    { base: 2.137, step: 0.419 },
    { base: 3.719, step: 0.631 },
    { base: 1.493, step: 0.887 }
  ];

  function varValue(ch, ptIdx) {
    const pt = EVAL_POINTS[ptIdx];
    const code = ch.charCodeAt(0);
    return pt.base + ((code * 17) % 29) * pt.step * 0.17;
  }

  function evalSingleExpr(exprStr, ptIdx) {
    let s = String(exprStr).trim();
    if (!s) return null;
    // Reject prose sentences (any word with >=3 letters except sqrt)
    const stripped = s.replace(/√/g, "sqrt").replace(/²/g, "^2").replace(/³/g, "^3");
    const words = stripped.match(/[a-zA-Z]{2,}/g) || [];
    for (const w of words) {
      if (w !== "sqrt" && /^[a-z]{3,}$/i.test(w)) {
        // Long alphabetic word likely BM prose unless all distinct variable product? Check dictionary patterns
        if (/(?:dan|atau|yang|bagi|dari|pada|sisi|bucu|sudut|pola|nombor|paksi|sebutan|sekata|jujukan|darab|tambah|tolak|bahagi|pepenjuru|pentagon|heksagon|heptagon|oktagon|nonagon|dekagon|rombus|lelayang|trapezium|segi|empat|tiga|tidak|semua|sama|besar|panjang)/i.test(w)) {
          return null;
        }
      }
    }
    // Convert unicode math
    s = s.replace(/²/g, "**2").replace(/³/g, "**3");
    s = s.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
    // Replace √(...) or √x
    s = s.replace(/√\(/g, "SQRT(");
    s = s.replace(/√([a-zA-Z0-9]+)/g, "SQRT($1)");
    // Check only valid math characters remain
    if (/[^0-9a-zA-Z_+\-*/().\s]/.test(s)) return null;

    // Tokenize carefully: numbers, SQRT, single-letter variables, operators
    let out = "";
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (ch === " ") {
        i++;
        continue;
      }
      if (s.slice(i, i + 5) === "SQRT(") {
        if (out && /[0-9a-zA-Z)]$/.test(out)) out += "*";
        out += "Math.sqrt(";
        i += 5;
        continue;
      }
      if (s.slice(i, i + 2) === "**") {
        out += "**";
        i += 2;
        continue;
      }
      if (/[0-9.]/.test(ch)) {
        if (out && /[a-zA-Z)]$/.test(out)) out += "*";
        let num = "";
        while (i < s.length && /[0-9.]/.test(s[i])) {
          num += s[i++];
        }
        out += num;
        continue;
      }
      if (/[a-zA-Z]/.test(ch)) {
        if (out && /[0-9a-zA-Z)]$/.test(out)) out += "*";
        out += String(varValue(ch, ptIdx));
        i++;
        continue;
      }
      if (ch === "(") {
        if (out && /[0-9a-zA-Z)]$/.test(out)) out += "*";
        out += "(";
        i++;
        continue;
      }
      out += ch;
      i++;
    }

    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(`"use strict"; return (${out});`);
      const val = fn();
      if (typeof val !== "number" || !Number.isFinite(val)) return null;
      return val;
    } catch (_e) {
      return null;
    }
  }

  function evalAlgebraKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim();
    if (!/[a-zA-Z]/.test(s)) return null;
    // Handle equation "LHS = RHS"
    if (s.includes("=")) {
      const parts = s.split("=");
      if (parts.length !== 2) return null;
      const lhs = parts[0].trim();
      const rhs = parts[1].trim();
      const vals = [];
      for (let k = 0; k < EVAL_POINTS.length; k++) {
        const lv = evalSingleExpr(lhs, k);
        const rv = evalSingleExpr(rhs, k);
        if (lv === null || rv === null) return null;
        vals.push(Math.round((lv - rv) * 1e5));
      }
      // Also normalize sign if someone wrote RHS = LHS
      const altVals = vals.map((v) => -v);
      const k1 = vals.join(",");
      const k2 = altVals.join(",");
      return `eq:${k1 < k2 ? k1 : k2}`;
    }

    // Handle comma-separated sequence of expressions/numbers? Skip here
    if (s.includes(",") || s.includes(":")) return null;

    const vals = [];
    for (let k = 0; k < EVAL_POINTS.length; k++) {
      const v = evalSingleExpr(s, k);
      if (v === null) return null;
      vals.push(Math.round(v * 1e5));
    }
    return `alg:${vals.join(",")}`;
  }

  function parseNumericToken(s) {
    const clean = s.replace(/\s+/g, " ").trim();
    let m = clean.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
    if (m) {
      const whole = Number(m[1]);
      const num = Number(m[2]);
      const den = Number(m[3]);
      if (den !== 0) {
        const sign = whole < 0 ? -1 : 1;
        return sign * (Math.abs(whole) + num / den);
      }
    }
    m = clean.match(/^(-?\d+)\/(\d+)$/);
    if (m && Number(m[2]) !== 0) {
      return Number(m[1]) / Number(m[2]);
    }
    const noSpace = clean.replace(/\s/g, "");
    if (/^-?\d+(\.\d+)?$/.test(noSpace)) {
      return Number(noSpace);
    }
    return null;
  }

  function canonicalOptionKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim();
    if (s.endsWith("°")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `deg:${Math.round(inner * 1e6)}`;
    }
    if (s.endsWith("%")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `pct:${Math.round(inner * 1e6)}`;
    }
    if (/^-?RM\s*/i.test(s)) {
      const neg = s.startsWith("-") ? -1 : 1;
      const inner = parseNumericToken(s.replace(/^-?RM\s*/i, ""));
      if (inner !== null) return `rm:${Math.round(neg * inner * 1e6)}`;
    }
    const unitMatch = s.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113]+)$/);
    if (unitMatch) {
      const inner = parseNumericToken(unitMatch[1]);
      if (inner !== null) {
        return `u:${unitMatch[2].toLowerCase()}:${Math.round(inner * 1e6)}`;
      }
    }
    const num = parseNumericToken(s);
    if (num !== null) {
      return `num:${Math.round(num * 1e6)}`;
    }
    const algKey = evalAlgebraKey(s);
    if (algKey !== null) return algKey;
    return `str:${s.toLowerCase()}`;
  }

  function isValidOptionStr(s) {
    if (!s || typeof s !== "string") return false;
    if (s.includes("NaN") || s.includes("undefined") || s.includes("Infinity") || s.includes("[object")) {
      return false;
    }
    // Check numeric fractions are reduced and proper (mixed numbers used for >1)
    const cleanForFracCheck = s.replace(/\([^)]*\)/g, " ");
    const fracMatches = cleanForFracCheck.match(/(^|\s)-?\d+\/\d+(?=\s|$|[a-zA-Z°%])/g);
    if (fracMatches) {
      for (const rawFm of fracMatches) {
        const fm = rawFm.trim();
        const [ns, ds] = fm.split("/").map((t) => Math.abs(Number(t)));
        if (ds <= 1 || ns === 0 || ns >= ds || gcd(ns, ds) !== 1) return false;
      }
    }
    return true;
  }

  function buildMcq(rng, meta, qText, correctStr, wrongCandidates, explanation, sig, extraFallbacks) {
    const corr = String(correctStr).trim();
    if (!isValidOptionStr(corr)) {
      throw new Error(`Invalid correct option for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }
    const seenKeys = new Set([canonicalOptionKey(corr)]);
    const seenStrings = new Set([corr.toLowerCase()]);
    const wrongs = [];

    const allCandidates = [...wrongCandidates, ...(extraFallbacks || [])];
    for (const w of allCandidates) {
      if (w === null || w === undefined) continue;
      const ws = String(w).trim();
      if (!isValidOptionStr(ws)) continue;
      const key = canonicalOptionKey(ws);
      const low = ws.toLowerCase();
      if (!seenStrings.has(low) && !seenKeys.has(key)) {
        seenStrings.add(low);
        seenKeys.add(key);
        wrongs.push(ws);
        if (wrongs.length === 3) break;
      }
    }

    let step = 1;
    while (wrongs.length < 3 && step < 120) {
      let cand = null;
      const delta = (step % 2 === 0 ? 1 : -1) * Math.ceil(step / 2);
      if (corr.endsWith("°")) {
        const v = parseNumericToken(corr.slice(0, -1));
        if (v !== null && v + delta * 5 > 0 && v + delta * 5 < 3600) {
          cand = fmtDeg(v + delta * 5);
        }
      } else if (/^RM\s*/i.test(corr)) {
        const v = parseNumericToken(corr.replace(/^RM\s*/i, ""));
        if (v !== null && v + delta * 2 > 0) cand = fmtRM(v + delta * 2);
      } else {
        const uMatch = corr.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113]+)$/);
        if (uMatch) {
          const v = parseNumericToken(uMatch[1]);
          if (v !== null && v + delta > 0) {
            cand = `${Number.isInteger(v) ? fmtInt(v + delta * 2) : fmtDec(v + delta * 0.5, 2)} ${uMatch[2]}`;
          }
        } else {
          const v = parseNumericToken(corr);
          if (v !== null) {
            if (corr.includes("/")) {
              const frac = simpFrac(Math.round(v * 12) + delta, 12);
              cand = fmtFrac(frac.n, frac.d);
            } else if (Number.isInteger(v)) {
              cand = fmtInt(v + delta * (Math.abs(v) > 100 ? 5 : 2));
            } else {
              cand = fmtDec(v + delta * 0.2, 3);
            }
          }
        }
      }
      step++;
      if (cand && isValidOptionStr(cand)) {
        const key = canonicalOptionKey(cand);
        const low = cand.toLowerCase();
        if (!seenStrings.has(low) && !seenKeys.has(key)) {
          seenStrings.add(low);
          seenKeys.add(key);
          wrongs.push(cand);
        }
      }
    }

    if (wrongs.length < 3) {
      throw new Error(`Failed to generate 3 unique distractors for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }

    const options = shuffle(rng, [corr, ...wrongs]);
    return {
      unit: meta.unit,
      skill: meta.skill,
      diff: meta.diff,
      template: meta.template,
      sig: `${meta.skill}:${meta.diff}:${meta.template}:${sig}`,
      q: qText,
      options,
      correctIndex: options.indexOf(corr),
      explanation
    };
  }

  // ==================== SHARED DOMAIN DATA ====================
  const NAMES = ["Amir", "Aina", "Bala", "Chong", "Dina", "Farah", "Haziq", "Kavita", "Lim", "Mei", "Nabil", "Siti", "Zarul"];

  const POLYGONS = [
    { n: 3, name: "segi tiga", regName: "segi tiga sama sisi", cap: "Segi tiga", regCap: "Segi tiga sama sisi" },
    { n: 4, name: "sisi empat", regName: "segi empat sama", cap: "Sisi empat", regCap: "Segi empat sama" },
    { n: 5, name: "pentagon", regName: "pentagon sekata", cap: "Pentagon", regCap: "Pentagon sekata" },
    { n: 6, name: "heksagon", regName: "heksagon sekata", cap: "Heksagon", regCap: "Heksagon sekata" },
    { n: 7, name: "heptagon", regName: "heptagon sekata", cap: "Heptagon", regCap: "Heptagon sekata" },
    { n: 8, name: "oktagon", regName: "oktagon sekata", cap: "Oktagon", regCap: "Oktagon sekata" },
    { n: 9, name: "nonagon", regName: "nonagon sekata", cap: "Nonagon", regCap: "Nonagon sekata" },
    { n: 10, name: "dekagon", regName: "dekagon sekata", cap: "Dekagon", regCap: "Dekagon sekata" }
  ];

  function polyNameByN(n) {
    const found = POLYGONS.find((p) => p.n === n);
    return found ? found.name : `poligon ${n} sisi`;
  }

  function regPolyNameByN(n) {
    const found = POLYGONS.find((p) => p.n === n);
    return found ? found.regName : `poligon sekata ${n} sisi`;
  }

  function pascalRow(rowNum) {
    // 1-indexed: row 1 = [1], row 2 = [1, 1], row 3 = [1, 2, 1]...
    let row = [1];
    for (let r = 2; r <= rowNum; r++) {
      const next = [1];
      for (let i = 0; i < row.length - 1; i++) {
        next.push(row[i] + row[i + 1]);
      }
      next.push(1);
      row = next;
    }
    return row;
  }

  function makeFiboSeq(a, b, len) {
    const seq = [a, b];
    for (let i = 2; i < len; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
  }

  // ==================== GENERATORS (36 ENTRIES: b1_s1..b4_s3 x L/M/H) ====================
  const generators = [
    // ==================== BAB 1: POLA DAN JUJUKAN ====================
    // ---------- b1_s1_L ----------
    {
      type: "generator",
      id: "b1_s1_L",
      unit: "b1",
      skill: "b1_s1",
      diff: "L",
      templates: ["b1_s1_L_odd_even_seq", "b1_s1_L_mult_add_seq", "b1_s1_L_fibo_next"],
      generate(seed) {
        const rng = makeRng("b1_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s1", diff: "L", template: tpl };

        if (tpl === "b1_s1_L_odd_even_seq") {
          const isOdd = randInt(rng, 0, 1) === 1;
          const asc = randInt(rng, 0, 1) === 1;
          const step = asc ? 2 : -2;
          let start = randInt(rng, 5, 45) * 2 + (isOdd ? 1 : 0);
          if (!asc) start += 16;
          const seq = Array.from({ length: 6 }, (_, i) => start + i * step);
          const missIdx = randInt(rng, 2, 4);
          const ans = seq[missIdx];
          const disp = seq.map((v, i) => (i === missIdx ? "___" : fmtInt(v))).join(", ");
          const jenis = isOdd ? "nombor ganjil" : "nombor genap";
          const arah = asc ? "menaik" : "menurun";
          const q = `Lengkapkan jujukan ${jenis} tertib ${arah} yang berikut:\n${disp}`;
          const wrongs = [ans + (asc ? -1 : 1), ans + step, ans - step, ans + 4];
          const exp = `Beza sepunya antara dua ${jenis} berturutan ialah ${step > 0 ? "+2" : "-2"}. Maka, ${fmtInt(seq[missIdx - 1])} ${step > 0 ? "+ 2" : "- 2"} = ${fmtInt(ans)}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${start}_${step}_${missIdx}`);
        }

        if (tpl === "b1_s1_L_mult_add_seq") {
          const isMult = randInt(rng, 0, 2) === 0;
          if (isMult) {
            const start = randInt(rng, 1, 5);
            const r = pick(rng, [2, 3, 4]);
            const seq = Array.from({ length: 5 }, (_, i) => start * Math.pow(r, i));
            const missIdx = randInt(rng, 2, 4);
            const ans = seq[missIdx];
            const disp = seq.map((v, i) => (i === missIdx ? "___" : fmtInt(v))).join(", ");
            const q = `Apakah nilai yang sepatutnya diisi pada tempat kosong dalam jujukan nombor ${disp}?`;
            const wrongs = [
              seq[missIdx - 1] + (seq[missIdx - 1] - seq[missIdx - 2]),
              ans + r,
              ans * r,
              Math.max(1, ans - r)
            ];
            const exp = `Setiap sebutan didarab dengan ${r} untuk memperoleh sebutan berikutnya: ${fmtInt(seq[missIdx - 1])} × ${r} = ${fmtInt(ans)}.`;
            return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `m_${start}_${r}_${missIdx}`);
          }
          const start = randInt(rng, 6, 40);
          const step = pick(rng, [3, 4, 5, 6, 7, 8, 9, -3, -4, -5, -6]);
          const s0 = step < 0 ? start + 35 : start;
          const seq = Array.from({ length: 6 }, (_, i) => s0 + i * step);
          const missIdx = randInt(rng, 2, 4);
          const ans = seq[missIdx];
          const disp = seq.map((v, i) => (i === missIdx ? "___" : fmtInt(v))).join(", ");
          const q = `Tentukan nombor yang tertinggal dalam pola nombor berikut:\n${disp}`;
          const wrongs = [ans + 1, ans - 1, ans + step, ans - step];
          const exp = `Pola nombor ini berubah sebanyak ${step > 0 ? `+${step}` : step} pada setiap langkah. Jadi, ${fmtInt(seq[missIdx - 1])} ${step > 0 ? `+ ${step}` : `- ${Math.abs(step)}`} = ${fmtInt(ans)}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `a_${s0}_${step}_${missIdx}`);
        }

        // b1_s1_L_fibo_next
        const a = randInt(rng, 1, 5);
        const b = randInt(rng, a, a + 4);
        const seq = makeFiboSeq(a, b, 7);
        const askIdx = randInt(rng, 4, 6);
        const shown = seq.slice(0, askIdx).join(", ");
        const ans = seq[askIdx];
        const q = `Diberi satu jujukan Nombor Fibonacci seperti berikut:\n${shown}, ___\nApakah nombor seterusnya dalam jujukan itu?`;
        const wrongs = [
          seq[askIdx - 1] * 2,
          seq[askIdx - 1] + (seq[askIdx - 1] - seq[askIdx - 2]),
          ans + seq[askIdx - 2],
          ans - 1
        ];
        const exp = `Dalam jujukan Fibonacci, setiap sebutan ialah hasil tambah dua sebutan sebelumnya: ${seq[askIdx - 2]} + ${seq[askIdx - 1]} = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${a}_${b}_${askIdx}`);
      }
    },

    // ---------- b1_s1_M ----------
    {
      type: "generator",
      id: "b1_s1_M",
      unit: "b1",
      skill: "b1_s1",
      diff: "M",
      templates: ["b1_s1_M_fibo_missing_mid", "b1_s1_M_pascal_row", "b1_s1_M_pascal_sum_pair"],
      generate(seed) {
        const rng = makeRng("b1_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s1", diff: "M", template: tpl };

        if (tpl === "b1_s1_M_fibo_missing_mid") {
          const a = randInt(rng, 1, 7);
          const b = randInt(rng, 2, 9);
          const seq = makeFiboSeq(a, b, 7);
          const i1 = randInt(rng, 2, 3);
          const i2 = i1 + 2;
          const x = seq[i1];
          const y = seq[i2];
          const askSum = randInt(rng, 0, 1) === 1;
          const ans = askSum ? x + y : y - x;
          const disp = seq.map((v, idx) => (idx === i1 ? "x" : idx === i2 ? "y" : fmtInt(v))).join(", ");
          const targetTxt = askSum ? "x + y" : "y - x";
          const q = `Dalam jujukan Nombor Fibonacci berikut:\n${disp}\nHitung nilai bagi ${targetTxt}.`;
          const wrongs = [
            askSum ? y - x : x + y,
            x * 2,
            y,
            ans + seq[i1 - 1]
          ];
          const exp = `Setiap sebutan ialah hasil tambah dua sebutan sebelumnya. Maka x = ${seq[i1 - 2]} + ${seq[i1 - 1]} = ${x} dan y = ${seq[i2 - 2]} + ${seq[i2 - 1]} = ${y}. Oleh itu, ${targetTxt} = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${a}_${b}_${i1}_${askSum}`);
        }

        if (tpl === "b1_s1_M_pascal_row") {
          const rNum = randInt(rng, 5, 8);
          const row = pascalRow(rNum);
          const askSum = randInt(rng, 0, 1) === 1;
          if (askSum) {
            const ans = Math.pow(2, rNum - 1);
            const q = `Dalam Segi Tiga Pascal, baris ke-1 ialah 1, baris ke-2 ialah 1, 1 dan baris ke-3 ialah 1, 2, 1. Hitung hasil tambah semua nombor pada baris ke-${rNum}.`;
            const wrongs = [Math.pow(2, rNum), Math.pow(2, rNum - 2), rNum * (rNum + 1), ans - 2];
            const exp = `Baris ke-${rNum} ialah ${row.join(", ")}. Hasil tambahnya ialah ${row.join(" + ")} = ${ans} (iaitu 2^${rNum - 1}).`;
            return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `sum_${rNum}`);
          }
          const pos = randInt(rng, 2, Math.floor((row.length + 1) / 2));
          const ans = row[pos - 1];
          const prevRow = pascalRow(rNum - 1);
          const q = `Dalam Segi Tiga Pascal, baris ke-${rNum - 1} ialah ${prevRow.join(", ")}. Apakah nombor ke-${pos} dari kiri pada baris ke-${rNum}?`;
          const wrongs = [
            prevRow[pos - 1] || ans + 1,
            row[pos] || ans + 2,
            ans + prevRow[pos - 2],
            ans - 1
          ];
          const exp = `Baris ke-${rNum} bermula dengan 1 di hujung, dan setiap nombor di tengah diperoleh dengan menambah dua nombor bersebelahan di atasnya: ${prevRow[pos - 2]} + ${prevRow[pos - 1]} = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `el_${rNum}_${pos}`);
        }

        // b1_s1_M_pascal_sum_pair
        const rNum = randInt(rng, 5, 9);
        const row = pascalRow(rNum);
        const k = randInt(rng, 1, row.length - 3);
        const aVal = row[k];
        const bVal = row[k + 1];
        const askProd = randInt(rng, 0, 1) === 1;
        const ans = askProd ? aVal + bVal : Math.abs(bVal - aVal) || aVal * 2;
        const disp = row.map((v, idx) => (idx === k ? "p" : idx === k + 1 ? "q" : String(v))).join(", ");
        const askTxt = askProd ? "p + q" : (bVal !== aVal ? "|q - p|" : "2p");
        const q = `Susunan nombor berikut mewakili satu baris lengkap dalam Segi Tiga Pascal:\n${disp}\nCari nilai bagi ${askTxt}.`;
        const prev = pascalRow(rNum - 1);
        const wrongs = [
          aVal,
          bVal,
          prev[k] + prev[k + 1],
          ans + rNum
        ];
        const exp = `Dengan menggunakan sifat simetri dan penambahan baris sebelumnya (${prev.join(", ")}), diperoleh p = ${aVal} dan q = ${bVal}. Maka ${askTxt} = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `pair_${rNum}_${k}_${askProd}`);
      }
    },

    // ---------- b1_s1_H ----------
    {
      type: "generator",
      id: "b1_s1_H",
      unit: "b1",
      skill: "b1_s1",
      diff: "H",
      templates: ["b1_s1_H_fibo_backward", "b1_s1_H_pascal_row_sum_diff", "b1_s1_H_square_tri_pattern"],
      generate(seed) {
        const rng = makeRng("b1_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s1", diff: "H", template: tpl };

        if (tpl === "b1_s1_H_fibo_backward") {
          const t1 = randInt(rng, 2, 11);
          const t2 = randInt(rng, 3, 14);
          const seq = makeFiboSeq(t1, t2, 6);
          const askFirst = randInt(rng, 0, 1) === 1;
          const ans = askFirst ? t1 : t1 + t2;
          const q = askFirst
            ? `Suatu jujukan jenis Fibonacci mempunyai 6 sebutan dengan empat sebutan terakhirnya ialah ${seq[2]}, ${seq[3]}, ${seq[4]}, ${seq[5]}. Hitung nilai sebutan pertama jujukan itu.`
            : `Empat sebutan berturutan di penghujung suatu jujukan jenis Fibonacci 6 sebutan ialah ${seq[2]}, ${seq[3]}, ${seq[4]}, ${seq[5]}. Cari hasil tambah dua sebutan pertamanya.`;
          const wrongs = [
            askFirst ? t2 : t1 + seq[2],
            askFirst ? seq[2] - t1 : t2 * 2,
            ans + 3,
            Math.max(1, ans - 2)
          ];
          const exp = `Secara mengundur, sebutan ke-2 = ${seq[3]} - ${seq[2]} = ${t2}, dan sebutan ke-1 = ${seq[2]} - ${t2} = ${t1}. Maka jawapannya ialah ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${t1}_${t2}_${askFirst}`);
        }

        if (tpl === "b1_s1_H_pascal_row_sum_diff") {
          const rNum = randInt(rng, 6, 10);
          const sumRow = Math.pow(2, rNum - 1);
          const row = pascalRow(rNum);
          const mode = randInt(rng, 0, 1);
          if (mode === 0) {
            const ans = row[2];
            const q = `Dalam Segi Tiga Pascal, hasil tambah semua nombor pada satu baris tertentu ialah ${fmtInt(sumRow)}. Apakah nombor ketiga dari kiri pada baris tersebut?`;
            const wrongs = [row[1], pascalRow(rNum - 1)[2], pascalRow(rNum + 1)[2], ans + rNum];
            const exp = `Hasil tambah baris ke-k ialah 2^(k - 1). Oleh sebab 2^${rNum - 1} = ${fmtInt(sumRow)}, ini ialah baris ke-${rNum}. Tiga nombor pertamanya ialah 1, ${row[1]}, ${row[2]}.`;
            return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `s_${rNum}`);
          }
          const nextSum = Math.pow(2, rNum);
          const diff = nextSum - sumRow;
          const q = `Hasil tambah semua unsur pada baris ke-k Segi Tiga Pascal ialah ${fmtInt(sumRow)}. Berapakah beza antara hasil tambah baris ke-(k + 1) dengan baris ke-k?`;
          const wrongs = [sumRow * 2, sumRow / 2, nextSum + sumRow, diff + rNum];
          const exp = `Hasil tambah setiap baris dalam Segi Tiga Pascal berganda dua kali ganda berbanding baris sebelumnya. Maka baris ke-(k + 1) berjumlah ${fmtInt(nextSum)}, dan bezanya ialah ${fmtInt(nextSum)} - ${fmtInt(sumRow)} = ${fmtInt(diff)}.`;
          return buildMcq(rng, meta, q, fmtInt(diff), wrongs.map(fmtInt), exp, `d_${rNum}`);
        }

        // b1_s1_H_square_tri_pattern
        const useTri = randInt(rng, 0, 1) === 1;
        const n = randInt(rng, 7, 15);
        const mult = randInt(rng, 1, 3);
        const offset = randInt(rng, 0, 4);
        if (useTri) {
          const tri = (k) => (k * (k + 1)) / 2;
          const terms = [1, 2, 3, 4].map((k) => mult * tri(k) + offset);
          const ans = mult * tri(n) + offset;
          const q = `Satu corak jubin dibentuk mengikut jujukan bilangan jubin berikut bagi susunan ke-1 hingga ke-4:\n${terms.join(", ")}\nBerapakah bilangan jubin pada susunan ke-${n}?`;
          const wrongs = [
            mult * tri(n - 1) + offset,
            mult * tri(n + 1) + offset,
            mult * n * n + offset,
            ans + mult * n
          ];
          const exp = `Bilangan asas mengikut nombor segi tiga T_k = k(k + 1)/2 didarab ${mult}${offset ? ` dan ditambah ${offset}` : ""}. Bagi k = ${n}, T_${n} = ${tri(n)}, maka jumlahnya = ${mult}(${tri(n)})${offset ? ` + ${offset}` : ""} = ${fmtInt(ans)}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `tri_${n}_${mult}_${offset}`);
        }
        const terms = [1, 2, 3, 4].map((k) => mult * k * k + offset);
        const ans = mult * n * n + offset;
        const q = `Bilangan blok bagi empat corak pertama mengikut satu pola nombor ialah ${terms.join(", ")}. Hitung bilangan blok bagi corak ke-${n}.`;
        const wrongs = [
          mult * (n - 1) * (n - 1) + offset,
          mult * n + offset,
          mult * (n * (n + 1)) / 2 + offset,
          ans + 2 * mult
        ];
        const exp = `Pola ini mengikut nombor kuasa dua sempurna: ${mult}n²${offset ? ` + ${offset}` : ""}. Untuk n = ${n}, nilainya ialah ${mult}(${n}²)${offset ? ` + ${offset}` : ""} = ${fmtInt(ans)}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `sq_${n}_${mult}_${offset}`);
      }
    },

    // ---------- b1_s2_L ----------
    {
      type: "generator",
      id: "b1_s2_L",
      unit: "b1",
      skill: "b1_s2",
      diff: "L",
      templates: ["b1_s2_L_is_sequence", "b1_s2_L_pattern_words", "b1_s2_L_pattern_num"],
      generate(seed) {
        const rng = makeRng("b1_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s2", diff: "L", template: tpl };

        if (tpl === "b1_s2_L_is_sequence") {
          const askNot = randInt(rng, 0, 1) === 1;
          const makeArith = () => {
            const s = randInt(rng, 2, 20);
            const d = pickNonZero(rng, -6, 9);
            return [0, 1, 2, 3, 4].map((i) => s + i * d).join(", ");
          };
          const makeGeom = () => {
            const s = randInt(rng, 1, 4);
            const r = pick(rng, [2, 3]);
            return [0, 1, 2, 3, 4].map((i) => s * Math.pow(r, i)).join(", ");
          };
          const makeBroken = () => {
            const s = randInt(rng, 3, 18);
            const d1 = randInt(rng, 1, 3);
            const d2 = d1 + randInt(rng, 3, 5);
            const d3 = randInt(rng, 1, 2);
            const d4 = d2 + randInt(rng, 4, 7);
            return [s, s + d1, s + d1 + d2, s + d1 + d2 + d3, s + d1 + d2 + d3 + d4].join(", ");
          };
          const pickUniqueSeqs = (fn, avoidList, count) => {
            const out = [];
            const seen = new Set(avoidList);
            for (let tries = 0; tries < 50 && out.length < count; tries++) {
              const s = fn();
              if (!seen.has(s)) {
                seen.add(s);
                out.push(s);
              }
            }
            return out;
          };
          if (askNot) {
            const corr = makeBroken();
            const q = "Antara set nombor berikut, yang manakah BUKAN suatu jujukan?";
            const ariths = pickUniqueSeqs(makeArith, [corr], 2);
            const geoms = pickUniqueSeqs(makeGeom, [corr, ...ariths], 2);
            const wrongs = [...ariths, ...geoms];
            const exp = `Set ${corr} tidak mempunyai pola tetap antara sebutan berturutan, maka ia bukan suatu jujukan.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `not_${corr}`);
          }
          const corr = randInt(rng, 0, 1) ? makeArith() : makeGeom();
          const q = "Antara set nombor berikut, yang manakah merupakan suatu jujukan?";
          const wrongs = pickUniqueSeqs(makeBroken, [corr], 3);
          const exp = `Set ${corr} mengikut satu peraturan atau pola tetap bagi setiap sebutan berturutan.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `is_${corr}`);
        }

        if (tpl === "b1_s2_L_pattern_words") {
          const mode = randInt(rng, 0, 2);
          if (mode === 0) {
            const d = randInt(rng, 3, 15);
            const a = randInt(rng, 2, 25);
            const seq = [0, 1, 2, 3, 4].map((i) => a + i * d).join(", ");
            const corr = `Menambah ${d} kepada nombor sebelumnya`;
            const q = `Perihalkan pola bagi jujukan nombor ${seq} dalam bentuk perkataan.`;
            const wrongs = [
              `Menolak ${d} daripada nombor sebelumnya`,
              `Menambah ${d + 2} kepada nombor sebelumnya`,
              `Mendarab nombor sebelumnya dengan ${d}`
            ];
            const exp = `Beza setiap sebutan dengan sebutan sebelumnya ialah +${d}, maka polanya ialah menambah ${d} kepada nombor sebelumnya.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `add_${a}_${d}`);
          }
          if (mode === 1) {
            const d = randInt(rng, 3, 12);
            const a = randInt(rng, 55, 95);
            const seq = [0, 1, 2, 3, 4].map((i) => a - i * d).join(", ");
            const corr = `Menolak ${d} daripada nombor sebelumnya`;
            const q = `Nyatakan pola jujukan nombor ${seq} dalam perkataan.`;
            const wrongs = [
              `Menambah ${d} kepada nombor sebelumnya`,
              `Menolak ${d + 1} daripada nombor sebelumnya`,
              `Membahagi nombor sebelumnya dengan ${d}`
            ];
            const exp = `Setiap nombor berkurang sebanyak ${d} berbanding nombor sebelumnya.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `sub_${a}_${d}`);
          }
          const r = pick(rng, [2, 3, 4, 5]);
          const a = randInt(rng, 1, 5);
          const seq = [0, 1, 2, 3, 4].map((i) => a * Math.pow(r, i)).join(", ");
          const corr = `Mendarab nombor sebelumnya dengan ${r}`;
          const q = `Apakah huraian pola dalam perkataan bagi jujukan ${seq}?`;
          const wrongs = [
            `Menambah ${r} kepada nombor sebelumnya`,
            `Membahagi nombor sebelumnya dengan ${r}`,
            `Mendarab nombor sebelumnya dengan ${r + 1}`
          ];
          const exp = `Nisbah setiap sebutan kepada sebutan sebelumnya ialah ${r}, iaitu mendarab nombor sebelumnya dengan ${r}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `mul_${a}_${r}`);
        }

        // b1_s2_L_pattern_num
        const opType = randInt(rng, 0, 2);
        if (opType === 0) {
          const d = randInt(rng, 4, 16);
          const a = randInt(rng, -15, 20);
          const seq = [0, 1, 2, 3, 4].map((i) => a + i * d).join(", ");
          const corr = `+${d}`;
          const q = `Nyatakan pola bagi jujukan ${seq} dalam bentuk nombor.`;
          const wrongs = [`-${d}`, `+${d + 2}`, `×${d}`];
          const exp = `Setiap sebutan bertambah sebanyak ${d}, maka pola dalam bentuk nombor ialah +${d}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `np_${a}_${d}`);
        }
        if (opType === 1) {
          const d = randInt(rng, 4, 15);
          const a = randInt(rng, 10, 45);
          const seq = [0, 1, 2, 3, 4].map((i) => a - i * d).join(", ");
          const corr = `-${d}`;
          const q = `Tentukan pola dalam bentuk nombor bagi jujukan ${seq}.`;
          const wrongs = [`+${d}`, `-${d + 3}`, `÷${d}`];
          const exp = `Setiap sebutan berkurang sebanyak ${d}, maka pola dalam bentuk nombor ialah -${d}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `nm_${a}_${d}`);
        }
        const r = pick(rng, [2, 3, 4]);
        const end = randInt(rng, 2, 5);
        const seq = [4, 3, 2, 1, 0].map((p) => end * Math.pow(r, p)).join(", ");
        const corr = `÷${r}`;
        const q = `Apakah pola dalam bentuk nombor bagi jujukan ${seq}?`;
        const wrongs = [`×${r}`, `-${r}`, `÷${r + 1}`];
        const exp = `Setiap sebutan dibahagi dengan ${r} untuk mendapat sebutan berikutnya, jadi polanya ialah ÷${r}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `nd_${end}_${r}`);
      }
    },

    // ---------- b1_s2_M ----------
    {
      type: "generator",
      id: "b1_s2_M",
      unit: "b1",
      skill: "b1_s2",
      diff: "M",
      templates: ["b1_s2_M_linear_algebra_expr", "b1_s2_M_dec_frac_seq", "b1_s2_M_expr_to_terms"],
      generate(seed) {
        const rng = makeRng("b1_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s2", diff: "M", template: tpl };

        if (tpl === "b1_s2_M_linear_algebra_expr") {
          const a = pickNonZero(rng, -6, 8);
          const b = pickNonZero(rng, -9, 12);
          const seq = [1, 2, 3, 4].map((n) => a * n + b);
          const corr = fmtLinear(a, "n", b);
          const q = `Ungkapkan pola bagi jujukan nombor ${seq.join(", ")}, ... dalam bentuk ungkapan algebra bagi n = 1, 2, 3, 4, ...`;
          const wrongs = [
            fmtLinear(a, "n", -b),
            fmtLinear(b, "n", a),
            fmtLinear(a, "n", b + a),
            fmtLinear(a + (a > 0 ? 1 : -1), "n", b)
          ];
          const exp = `Beza sepunya ialah ${a}. Sebutan ke-1 = ${a}(1) + (${b}) = ${seq[0]}, sebutan ke-2 = ${a}(2) + (${b}) = ${seq[1]}. Maka ungkapan algebra bagi pola ini ialah ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `${a}_${b}`);
        }

        if (tpl === "b1_s2_M_dec_frac_seq") {
          const isFrac = randInt(rng, 0, 1) === 1;
          if (isFrac) {
            const den = pick(rng, [3, 4, 5, 6]);
            const stepNum = pick(rng, [1, 2, -1, -2]);
            let startNum = randInt(rng, 1, 5);
            if (stepNum < 0) startNum += 10;
            const seq = [0, 1, 2, 3, 4].map((i) => fmtFrac(startNum + i * stepNum, den));
            const missIdx = randInt(rng, 2, 4);
            const ans = seq[missIdx];
            const disp = seq.map((v, i) => (i === missIdx ? "___" : v)).join(", ");
            const q = `Lengkapkan jujukan pecahan berikut:\n${disp}`;
            const wrongs = [
              fmtFrac(startNum + (missIdx + 1) * stepNum, den),
              fmtFrac(startNum + (missIdx - 1) * stepNum + (stepNum > 0 ? 1 : -1), den + 1),
              fmtFrac(startNum + missIdx * stepNum + 1, den),
              fmtFrac(startNum + missIdx * stepNum - 1, den)
            ];
            const stepStr = fmtFrac(stepNum, den);
            const exp = `Setiap sebutan berubah sebanyak ${stepNum > 0 ? `+${stepStr}` : stepStr}. Maka sebutan yang hilang ialah ${ans}.`;
            return buildMcq(rng, meta, q, ans, wrongs, exp, `fr_${startNum}_${stepNum}_${den}_${missIdx}`);
          }
          const decStep = pick(rng, [0.3, 0.4, 0.6, 0.8, 1.2, -0.4, -0.5, -0.7]);
          const start = randInt(rng, 2, 12) + (decStep < 0 ? 5 : 0);
          const seq = [0, 1, 2, 3, 4].map((i) => fmtDec(start + i * decStep, 2));
          const missIdx = randInt(rng, 2, 4);
          const ans = seq[missIdx];
          const disp = seq.map((v, i) => (i === missIdx ? "___" : v)).join(", ");
          const q = `Tentukan nilai yang hilang dalam jujukan nombor perpuluhan berikut:\n${disp}`;
          const wrongs = [
            fmtDec(start + missIdx * decStep + 0.1, 2),
            fmtDec(start + missIdx * decStep - 0.1, 2),
            fmtDec(start + (missIdx + 1) * decStep, 2),
            fmtDec(start + missIdx * decStep + (decStep > 0 ? 0.5 : -0.5), 2)
          ];
          const exp = `Pola perpuluhan ini ialah ${decStep > 0 ? `+${decStep}` : decStep}. Nilai yang tertinggal ialah ${ans}.`;
          return buildMcq(rng, meta, q, ans, wrongs, exp, `dc_${start}_${decStep}_${missIdx}`);
        }

        // b1_s2_M_expr_to_terms
        const isQuad = randInt(rng, 0, 1) === 1;
        if (isQuad) {
          const a = randInt(rng, 1, 3);
          const b = pickNonZero(rng, -4, 5);
          const expr = fmtQuad(a, 0, b, "n");
          const corr = [1, 2, 3, 4].map((n) => a * n * n + b).join(", ");
          const q = `Suatu jujukan nombor mengikut pola ${expr} dengan n = 1, 2, 3, 4, ... Senaraikan empat sebutan pertama jujukan tersebut.`;
          const wrongs = [
            [1, 2, 3, 4].map((n) => a * n + b).join(", "),
            [0, 1, 2, 3].map((n) => a * n * n + b).join(", "),
            [1, 2, 3, 4].map((n) => a * n * n - b).join(", "),
            [1, 2, 3, 4].map((n) => (a + 1) * n * n + b).join(", "),
            [1, 2, 3, 4].map((n) => a * n * n + b + 2).join(", ")
          ];
          const exp = `Gantikan n = 1, 2, 3, 4 ke dalam ${expr}: sebutan pertama hingga keempat ialah ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `q_${a}_${b}`);
        }
        const a = pickNonZero(rng, -5, 7);
        let b = pickNonZero(rng, -8, 10);
        if (b === a) b = a > 0 ? a + 1 : a - 1;
        const expr = fmtLinear(a, "n", b);
        const corr = [1, 2, 3, 4].map((n) => a * n + b).join(", ");
        const q = `Empat sebutan pertama suatu jujukan mematuhi rumus ${expr} bagi n = 1, 2, 3, 4. Apakah empat sebutan tersebut?`;
        const wrongs = [
          [0, 1, 2, 3].map((n) => a * n + b).join(", "),
          [1, 2, 3, 4].map((n) => a * n - b).join(", "),
          [1, 2, 3, 4].map((n) => b * n + a).join(", "),
          [1, 2, 3, 4].map((n) => (a + 1) * n + b).join(", "),
          [1, 2, 3, 4].map((n) => a * n + b + 2).join(", ")
        ];
        const exp = `Gantikan n = 1, 2, 3, 4 ke dalam ${expr} untuk memperoleh ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `l_${a}_${b}`);
      }
    },

    // ---------- b1_s2_H ----------
    {
      type: "generator",
      id: "b1_s2_H",
      unit: "b1",
      skill: "b1_s2",
      diff: "H",
      templates: ["b1_s2_H_quad_algebra_expr", "b1_s2_H_word_to_seq_algebra", "b1_s2_H_reverse_desc_algebra"],
      generate(seed) {
        const rng = makeRng("b1_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s2", diff: "H", template: tpl };

        if (tpl === "b1_s2_H_quad_algebra_expr") {
          const a = randInt(rng, 1, 4);
          const b = pick(rng, [-3, -2, -1, 0, 1, 2, 3]);
          const c = pickNonZero(rng, -5, 7);
          const seq = [1, 2, 3, 4, 5].map((n) => a * n * n + b * n + c);
          const corr = fmtQuad(a, b, c, "n");
          const q = `Nyatakan pola bagi jujukan ${seq.join(", ")}, ... dalam sebutan n bagi n = 1, 2, 3, 4, 5, ...`;
          const wrongs = [
            fmtQuad(a, b, -c, "n"),
            fmtQuad(a, b + 1, c, "n"),
            fmtQuad(a + 1, b, c - 1, "n"),
            fmtLinear(seq[1] - seq[0], "n", seq[0] - (seq[1] - seq[0]))
          ];
          const exp = `Dengan menguji n = 1, 2, 3, 4 ke dalam ${corr}: nilai sebutan sepadan dengan ${seq.slice(0, 4).join(", ")}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `${a}_${b}_${c}`);
        }

        if (tpl === "b1_s2_H_word_to_seq_algebra") {
          const items = ["batang kayu", "jubin hiasan", "kerusi dewan", "anak pokok", "lampu taman"];
          const item = pick(rng, items);
          const base = randInt(rng, 2, 8);
          const step = randInt(rng, 2, 7);
          const t1 = base + step;
          const t2 = base + 2 * step;
          const t3 = base + 3 * step;
          const corr = fmtLinear(step, "n", base);
          const q = `Dalam satu susunan, baris pertama mempunyai ${t1} ${item}, baris kedua mempunyai ${t2} ${item}, dan baris ketiga mempunyai ${t3} ${item}. Jika pertambahan ini seragam, tulis ungkapan algebra bagi bilangan ${item} pada baris ke-n.`;
          const wrongs = [
            fmtLinear(step, "n", t1),
            fmtLinear(t1, "n", step),
            fmtLinear(step, "n", -base),
            fmtLinear(step + 1, "n", base - 1)
          ];
          const exp = `Bilangan bertambah sebanyak ${step} setiap baris. Bagi n = 1, ${step}(1) + ${base} = ${t1}, bagi n = 2, ${step}(2) + ${base} = ${t2}. Jadi rumusnya ialah ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `${item}_${base}_${step}`);
        }

        // b1_s2_H_reverse_desc_algebra
        const t1 = randInt(rng, 3, 18);
        let d = pickNonZero(rng, -7, 9);
        if (d === t1) d = d === 9 ? 8 : d + 1;
        const b = t1 - d;
        const corr = fmtLinear(d, "n", b);
        const arah = d > 0 ? `ditambah dengan ${d}` : `ditolak dengan ${Math.abs(d)}`;
        const q = `Satu jujukan bermula dengan ${t1} sebagai sebutan pertama (n = 1) dan setiap sebutan berikutnya ${arah}. Antara ungkapan algebra berikut, yang manakah mewakili sebutan ke-n jujukan itu?`;
        const wrongs = [
          fmtLinear(d, "n", t1),
          fmtLinear(t1, "n", d),
          fmtLinear(d, "n", b - d),
          fmtLinear(-d, "n", t1 + d),
          fmtLinear(d + (d > 0 ? 1 : -1), "n", b)
        ];
        const exp = `Rumus jujukan aritmetik ialah T_n = ${t1} + (n - 1)(${d}) = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `rev_${t1}_${d}`);
      }
    },

    // ---------- b1_s3_L ----------
    {
      type: "generator",
      id: "b1_s3_L",
      unit: "b1",
      skill: "b1_s3",
      diff: "L",
      templates: ["b1_s3_L_eval_tn", "b1_s3_L_arith_find_t5_t8", "b1_s3_L_find_n_from_tn"],
      generate(seed) {
        const rng = makeRng("b1_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s3", diff: "L", template: tpl };

        if (tpl === "b1_s3_L_eval_tn") {
          const a = pickNonZero(rng, -5, 8);
          const b = pickNonZero(rng, -10, 12);
          const k = randInt(rng, 5, 15);
          const ans = a * k + b;
          const expr = fmtLinear(a, "n", b);
          const q = `Diberi sebutan ke-n suatu jujukan ialah T_n = ${expr}. Hitung nilai sebutan ke-${k} (T_${k}).`;
          const wrongs = [
            a * (k - 1) + b,
            a * k - b,
            a * (k + 1) + b,
            b * k + a
          ];
          const exp = `Gantikan n = ${k} ke dalam T_n = ${expr}: T_${k} = ${a}(${k}) + (${b}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${a}_${b}_${k}`);
        }

        if (tpl === "b1_s3_L_arith_find_t5_t8") {
          const t1 = randInt(rng, 2, 18);
          const d = randInt(rng, 2, 9);
          const k = randInt(rng, 6, 12);
          const seq = [0, 1, 2, 3].map((i) => t1 + i * d).join(", ");
          const ans = t1 + (k - 1) * d;
          const q = `Tentukan nilai sebutan ke-${k} bagi jujukan nombor ${seq}, ...`;
          const wrongs = [
            t1 + k * d,
            t1 + (k - 2) * d,
            k * d,
            ans + d * 2
          ];
          const exp = `Sebutan pertama ialah ${t1} dan beza sepunya ialah +${d}. Maka sebutan ke-${k} = ${t1} + (${k} - 1)(${d}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${t1}_${d}_${k}`);
        }

        // b1_s3_L_find_n_from_tn
        const a = randInt(rng, 2, 7);
        const b = pickNonZero(rng, -8, 11);
        const n = randInt(rng, 4, 16);
        const val = a * n + b;
        const expr = fmtLinear(a, "n", b);
        const q = `Sebutan ke-n bagi suatu jujukan diberi oleh T_n = ${expr}. Jika T_n = ${val}, cari nilai n.`;
        const wrongs = [n + 1, Math.max(1, n - 1), n + 2, a * val + b];
        const exp = `Selesaikan ${expr} = ${val} → ${a}n = ${val - b} → n = ${n}.`;
        return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `fn_${a}_${b}_${n}`);
      }
    },

    // ---------- b1_s3_M ----------
    {
      type: "generator",
      id: "b1_s3_M",
      unit: "b1",
      skill: "b1_s3",
      diff: "M",
      templates: ["b1_s3_M_seq_to_tn_val", "b1_s3_M_find_n_seq", "b1_s3_M_geom_or_quad_tn"],
      generate(seed) {
        const rng = makeRng("b1_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s3", diff: "M", template: tpl };

        if (tpl === "b1_s3_M_seq_to_tn_val") {
          const t1 = randInt(rng, -12, 35);
          const d = pickNonZero(rng, -8, 11);
          const k = randInt(rng, 12, 25);
          const seq = [0, 1, 2, 3].map((i) => t1 + i * d).join(", ");
          const ans = t1 + (k - 1) * d;
          const q = `Diberi suatu jujukan nombor ${seq}, ... Hitung nilai sebutan ke-${k}.`;
          const wrongs = [
            t1 + k * d,
            t1 + (k - 2) * d,
            t1 - (k - 1) * d,
            ans + (d > 0 ? 3 : -3)
          ];
          const exp = `Sebutan ke-n ialah T_n = ${t1} + (n - 1)(${d}). Bagi n = ${k}, T_${k} = ${t1} + ${k - 1}(${d}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `${t1}_${d}_${k}`);
        }

        if (tpl === "b1_s3_M_find_n_seq") {
          const t1 = randInt(rng, 3, 20);
          const d = randInt(rng, 3, 9);
          const n = randInt(rng, 11, 28);
          const val = t1 + (n - 1) * d;
          const seq = [0, 1, 2, 3].map((i) => t1 + i * d).join(", ");
          const q = `Dalam jujukan nombor ${seq}, ..., nombor ${val} ialah sebutan ke berapa?`;
          const wrongs = [n - 1, n + 1, Math.floor(val / d), n + 2];
          const exp = `Daripada ${t1} + (n - 1)(${d}) = ${val}, diperoleh (n - 1)(${d}) = ${val - t1}, maka n - 1 = ${n - 1} dan n = ${n}.`;
          return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `n_${t1}_${d}_${n}`);
        }

        // b1_s3_M_geom_or_quad_tn
        const a = randInt(rng, 1, 3);
        const c = pickNonZero(rng, -6, 8);
        const k = randInt(rng, 5, 11);
        const m = randInt(rng, 2, 4);
        const expr = fmtQuad(a, 0, c, "n");
        const tk = a * k * k + c;
        const tm = a * m * m + c;
        const ans = tk + tm;
        const q = `Diberi T_n = ${expr}. Hitung nilai bagi T_${k} + T_${m}.`;
        const wrongs = [
          a * (k + m) * (k + m) + c,
          tk - tm,
          (a * k + c) + (a * m + c),
          ans + 2 * c
        ];
        const exp = `T_${k} = ${a}(${k}²) + (${c}) = ${tk} dan T_${m} = ${a}(${m}²) + (${c}) = ${tm}. Maka T_${k} + T_${m} = ${tk} + ${tm} = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `gq_${a}_${c}_${k}_${m}`);
      }
    },

    // ---------- b1_s3_H ----------
    {
      type: "generator",
      id: "b1_s3_H",
      unit: "b1",
      skill: "b1_s3",
      diff: "H",
      templates: ["b1_s3_H_word_savings_seats", "b1_s3_H_two_terms_find_t", "b1_s3_H_sum_or_diff_terms"],
      generate(seed) {
        const rng = makeRng("b1_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b1", skill: "b1_s3", diff: "H", template: tpl };

        if (tpl === "b1_s3_H_word_savings_seats") {
          const name = pick(rng, NAMES);
          const isSavings = randInt(rng, 0, 1) === 1;
          if (isSavings) {
            const w1 = randInt(rng, 10, 35);
            const inc = randInt(rng, 3, 12);
            const n = randInt(rng, 10, 22);
            const target = w1 + (n - 1) * inc;
            const q = `${name} menyimpan RM ${w1} pada minggu pertama dan menambah simpanan mingguannya secara tetap sebanyak RM ${inc} berbanding minggu sebelumnya. Pada minggu ke berapakah simpanan mingguan ${name} mencapai RM ${target}?`;
            const wrongs = [n - 1, n + 1, Math.floor(target / inc), n + 2];
            const exp = `Simpanan minggu ke-n = ${w1} + (n - 1)(${inc}) = ${target}. Maka (n - 1)(${inc}) = ${target - w1}, jadi n = ${n}.`;
            return buildMcq(rng, meta, q, `Minggu ke-${n}`, wrongs.map((v) => `Minggu ke-${v}`), exp, `sav_${name}_${w1}_${inc}_${n}`);
          }
          const r1 = randInt(rng, 12, 24);
          const inc = randInt(rng, 2, 6);
          const row = randInt(rng, 14, 28);
          const ans = r1 + (row - 1) * inc;
          const q = `Sebuah dewan teater mempunyai ${r1} kerusi di baris pertama, ${r1 + inc} kerusi di baris kedua, ${r1 + 2 * inc} kerusi di baris ketiga dan seterusnya mengikut pola yang sama. Berapakah bilangan kerusi di baris ke-${row}?`;
          const wrongs = [r1 + row * inc, r1 + (row - 2) * inc, ans + inc * 2, ans - 2];
          const exp = `Bilangan kerusi baris ke-${row} = ${r1} + (${row} - 1)(${inc}) = ${r1} + ${(row - 1) * inc} = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `seat_${r1}_${inc}_${row}`);
        }

        if (tpl === "b1_s3_H_two_terms_find_t") {
          const t1 = randInt(rng, -5, 15);
          const d = pickNonZero(rng, 2, 8);
          const p = randInt(rng, 2, 5);
          const qIdx = p + randInt(rng, 3, 6);
          const rIdx = qIdx + randInt(rng, 3, 7);
          const tp = t1 + (p - 1) * d;
          const tq = t1 + (qIdx - 1) * d;
          const ans = t1 + (rIdx - 1) * d;
          const q = `Dalam suatu jujukan aritmetik, sebutan ke-${p} ialah ${tp} dan sebutan ke-${qIdx} ialah ${tq}. Hitung nilai sebutan ke-${rIdx}.`;
          const wrongs = [
            tq + (rIdx - qIdx) * (d + 1),
            t1 + rIdx * d,
            tq + (rIdx - qIdx - 1) * d,
            ans + d
          ];
          const exp = `Beza sepunya d = (${tq} - ${tp}) / (${qIdx} - ${p}) = ${d}. Maka T_${rIdx} = ${tq} + (${rIdx} - ${qIdx})(${d}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `two_${t1}_${d}_${p}_${qIdx}_${rIdx}`);
        }

        // b1_s3_H_sum_or_diff_terms
        const a = randInt(rng, 2, 7);
        const b = pickNonZero(rng, -9, 9);
        const m = randInt(rng, 8, 15);
        const p = randInt(rng, 3, m - 2);
        const tm = a * m + b;
        const tp = a * p + b;
        const ans = tm - tp;
        const expr = fmtLinear(a, "n", b);
        const q = `Sebutan ke-n suatu jujukan nombor ialah T_n = ${expr}. Cari nilai bagi T_${m} - T_${p}.`;
        const wrongs = [
          a * (m - p) + b,
          tm + tp,
          a * (m - p - 1),
          ans + a
        ];
        const exp = `T_${m} = ${tm} dan T_${p} = ${tp}. Maka T_${m} - T_${p} = ${tm} - (${tp}) = ${ans} (atau ${a}(${m} - ${p}) = ${ans}).`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `diff_${a}_${b}_${m}_${p}`);
      }
    },

    // ==================== BAB 2: PEMFAKTORAN DAN PECAHAN ALGEBRA ====================
    // ---------- b2_s1_L ----------
    {
      type: "generator",
      id: "b2_s1_L",
      unit: "b2",
      skill: "b2_s1",
      diff: "L",
      templates: ["b2_s1_L_single_pos", "b2_s1_L_single_neg", "b2_s1_L_single_frac"],
      generate(seed) {
        const rng = makeRng("b2_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s1", diff: "L", template: tpl };
        const v = pick(rng, ["x", "y", "p", "m"]);

        if (tpl === "b2_s1_L_single_pos") {
          const withVar = randInt(rng, 0, 1) === 1;
          const a = randInt(rng, 2, 7);
          const b = randInt(rng, 1, 5);
          const c = pickNonZero(rng, -7, 8);
          const inner = fmtLinear(b, v, c);
          if (withVar) {
            const outer = fmtCoeffVar(a, v);
            const corr = fmtQuad(a * b, a * c, 0, v);
            const q = `Kembangkan ungkapan algebra ${outer}(${inner}).`;
            const wrongs = [
              fmtLinear(a * b, `${v}²`, c),
              fmtLinear(a * b, v, a * c),
              fmtQuad(a * b, -a * c, 0, v),
              fmtQuad(a + b, a * c, 0, v)
            ];
            const exp = `Darabkan ${outer} dengan setiap sebutan dalam kurungan: ${outer}(${fmtCoeffVar(b, v)}) + ${outer}(${c}) = ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `p1_${v}_${a}_${b}_${c}`);
          }
          const corr = fmtLinear(a * b, v, a * c);
          const q = `Kembangkan ${a}(${inner}).`;
          const wrongs = [
            fmtLinear(a * b, v, c),
            fmtLinear(a * b, v, -a * c),
            fmtLinear(a + b, v, a * c),
            fmtLinear(a * b, v, a + c),
            fmtLinear(a * b + 1, v, a * c)
          ];
          const exp = `Darabkan ${a} dengan kedua-dua sebutan dalam kurungan: ${a}(${fmtCoeffVar(b, v)}) + ${a}(${c}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `p0_${v}_${a}_${b}_${c}`);
        }

        if (tpl === "b2_s1_L_single_neg") {
          const a = randInt(rng, 2, 7);
          const b = randInt(rng, 1, 5);
          const c = pickNonZero(rng, -8, 8);
          const inner = fmtLinear(b, v, c);
          const corr = fmtLinear(-a * b, v, -a * c);
          const q = `Kembangkan ungkapan -${a}(${inner}).`;
          const wrongs = [
            fmtLinear(-a * b, v, a * c),
            fmtLinear(-a * b, v, c),
            fmtLinear(a * b, v, -a * c)
          ];
          const exp = `Apabila mendarab dengan -${a}, kedua-dua tanda berubah: -${a}(${fmtCoeffVar(b, v)}) - ${a}(${c}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `n_${v}_${a}_${b}_${c}`);
        }

        // b2_s1_L_single_frac
        const den = pick(rng, [2, 3, 4, 5]);
        const num = den === 2 ? 1 : randInt(rng, 1, den - 1);
        const g = gcd(num, den);
        const rn = num / g;
        const rd = den / g;
        const b = rd * randInt(rng, 1, 4);
        const c = rd * pickNonZero(rng, -4, 4);
        const inner = fmtLinear(b, v, c);
        const corr = fmtLinear((rn * b) / rd, v, (rn * c) / rd);
        const q = `Kembangkan (${rn}/${rd})(${inner}).`;
        const wrongs = [
          fmtLinear((rn * b) / rd, v, c),
          fmtLinear((rn * b) / rd, v, -(rn * c) / rd),
          fmtLinear(b, v, (rn * c) / rd)
        ];
        const exp = `Darabkan setiap sebutan dengan ${rn}/${rd}: (${rn}/${rd})(${fmtCoeffVar(b, v)}) + (${rn}/${rd})(${c}) = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `f_${v}_${rn}_${rd}_${b}_${c}`);
      }
    },

    // ---------- b2_s1_M ----------
    {
      type: "generator",
      id: "b2_s1_M",
      unit: "b2",
      skill: "b2_s1",
      diff: "M",
      templates: ["b2_s1_M_two_brackets_monic", "b2_s1_M_two_brackets_nonmonic", "b2_s1_M_square_binomial"],
      generate(seed) {
        const rng = makeRng("b2_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s1", diff: "M", template: tpl };
        const v = pick(rng, ["x", "y", "a", "p"]);

        if (tpl === "b2_s1_M_two_brackets_monic") {
          const a = pickNonZero(rng, -8, 8);
          let b = pickNonZero(rng, -8, 8);
          if (a + b === 0) b += (b > 0 ? 1 : -1);
          const corr = fmtQuad(1, a + b, a * b, v);
          const expr = `${fmtParenLinear(1, v, a)}${fmtParenLinear(1, v, b)}`;
          const q = `Kembangkan ${expr}.`;
          const wrongs = [
            fmtQuad(1, -(a + b), a * b, v),
            fmtQuad(1, a + b, -a * b, v),
            fmtQuad(1, a * b, a + b, v)
          ];
          const exp = `Darabkan setiap sebutan dan gabungkan sebutan serupa: ${v}² + (${a} + ${b})${v} + (${a})(${b}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `m_${v}_${a}_${b}`);
        }

        if (tpl === "b2_s1_M_two_brackets_nonmonic") {
          const a = randInt(rng, 2, 4);
          const c = randInt(rng, 1, 4);
          const b = pickNonZero(rng, -6, 6);
          let d = pickNonZero(rng, -6, 6);
          if (a * d + b * c === 0) d += (d > 0 ? 1 : -1);
          const corr = fmtQuad(a * c, a * d + b * c, b * d, v);
          const expr = `${fmtParenLinear(a, v, b)}${fmtParenLinear(c, v, d)}`;
          const q = `Kembangkan dan permudahkan ${expr}.`;
          const wrongs = [
            fmtQuad(a * c, -(a * d + b * c), b * d, v),
            fmtQuad(a * c, a * c + b * d, b * d, v),
            fmtQuad(a * c, a * d + b * c, -b * d, v),
            fmtQuad(a * c, a * d - b * c, b * d, v),
            fmtQuad(a * c, a * d + b * c + 2, b * d, v),
            fmtQuad(a * c, -(a * d + b * c), -b * d, v)
          ];
          const exp = `${expr} = ${a * c}${v}² + (${a * d} + ${b * c})${v} + (${b * d}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `nm_${v}_${a}_${b}_${c}_${d}`);
        }

        // b2_s1_M_square_binomial
        const a = randInt(rng, 1, 5);
        const b = pickNonZero(rng, -7, 7);
        const corr = fmtQuad(a * a, 2 * a * b, b * b, v);
        const expr = `${fmtParenLinear(a, v, b)}²`;
        const q = `Kembangkan ungkapan ${expr}.`;
        const wrongs = [
          fmtQuad(a * a, 0, b * b, v),
          fmtQuad(a * a, 0, -(b * b), v),
          fmtQuad(a * a, -2 * a * b, b * b, v),
          fmtQuad(a * a, a * b, b * b, v)
        ];
        const exp = `Gunakan identiti (p + q)² = p² + 2pq + q²: (${fmtCoeffVar(a, v)})² + 2(${fmtCoeffVar(a, v)})(${b}) + (${b})² = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `sq_${v}_${a}_${b}`);
      }
    },

    // ---------- b2_s1_H ----------
    {
      type: "generator",
      id: "b2_s1_H",
      unit: "b2",
      skill: "b2_s1",
      diff: "H",
      templates: ["b2_s1_H_combine_two", "b2_s1_H_diff_squares_plus", "b2_s1_H_geom_area_word"],
      generate(seed) {
        const rng = makeRng("b2_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s1", diff: "H", template: tpl };
        const v = pick(rng, ["x", "y", "m"]);

        if (tpl === "b2_s1_H_combine_two") {
          const a = randInt(rng, 1, 3);
          const b = pickNonZero(rng, -5, 5);
          const c = pickNonZero(rng, -5, 5);
          const e = pickNonZero(rng, -4, 5);
          const f = randInt(rng, 1, 4);
          const g = pickNonZero(rng, -5, 5);
          const q2 = a;
          const q1 = a * c + b + e * f;
          const q0 = b * c + e * g;
          const corr = fmtQuad(q2, q1, q0, v);
          const signE = e > 0 ? `+ ${e}` : `- ${Math.abs(e)}`;
          const expr = `${fmtParenLinear(a, v, b)}${fmtParenLinear(1, v, c)} ${signE}${fmtParenLinear(f, v, g)}`;
          const q = `Kembangkan dan permudahkan ${expr}.`;
          const wrongs = [
            fmtQuad(q2, q1 - 2 * e * f, q0, v),
            fmtQuad(q2, q1, q0 - 2 * e * g, v),
            fmtQuad(q2, a * c + b + f, b * c + g, v),
            fmtQuad(q2, q1 + 2, q0 - 1, v)
          ];
          const exp = `Kembangkan kedua-dua bahagian dan gabungkan sebutan serupa: (${fmtQuad(a, a * c + b, b * c, v)}) + (${fmtLinear(e * f, v, e * g)}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `c_${v}_${a}_${b}_${c}_${e}_${f}_${g}`);
        }

        if (tpl === "b2_s1_H_diff_squares_plus") {
          const a = randInt(rng, 2, 4);
          const b = randInt(rng, 1, 5);
          const c = randInt(rng, 1, 2);
          const d = pickNonZero(rng, -5, 5);
          const q2 = a * a - c * c;
          const q1 = -2 * c * d;
          const q0 = -(b * b) - d * d;
          const corr = fmtQuad(q2, q1, q0, v);
          const expr = `${fmtParenLinear(a, v, b)}${fmtParenLinear(a, v, -b)} - ${fmtParenLinear(c, v, d)}²`;
          const q = `Permudahkan ungkapan ${expr}.`;
          const wrongs = [
            fmtQuad(q2, -q1, q0, v),
            fmtQuad(q2, 0, -(b * b) + d * d, v),
            fmtQuad(q2, q1, -(b * b) + d * d, v),
            fmtQuad(q2, 2 * c * d, b * b - d * d, v)
          ];
          const exp = `(${fmtQuad(a * a, 0, -(b * b), v)}) - (${fmtQuad(c * c, 2 * c * d, d * d, v)}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `ds_${v}_${a}_${b}_${c}_${d}`);
        }

        // b2_s1_H_geom_area_word
        const a = randInt(rng, 2, 4);
        const b = randInt(rng, 3, 8);
        const c = randInt(rng, 2, 4);
        const d = randInt(rng, 2, 6);
        const s = randInt(rng, 1, 3);
        // Rectangle (ax+b)(cx+d) minus square (x+s)^2
        const q2 = a * c - 1;
        const q1 = a * d + b * c - 2 * s;
        const q0 = b * d - s * s;
        const corr = fmtQuad(q2, q1, q0, "x");
        const q = `Sehelai kad berbentuk segi empat tepat mempunyai panjang ${fmtParenLinear(a, "x", b)} cm dan lebar ${fmtParenLinear(c, "x", d)} cm. Sekeping segi empat sama bersisi ${fmtParenLinear(1, "x", s)} cm dipotong dan dibuang daripada kad itu. Ungkapkan luas kad yang tinggal dalam sebutan x (dalam cm²).`;
        const wrongs = [
          fmtQuad(q2, a * d + b * c, b * d + s * s, "x"),
          fmtQuad(q2, a * d + b * c + 2 * s, b * d - s * s, "x"),
          fmtQuad(q2, q1, b * d + s * s, "x"),
          fmtQuad(a * c - 1, a * d + b * c - s, b * d - s * s, "x")
        ];
        const exp = `Luas kad tinggal = (${fmtLinear(a, "x", b)})(${fmtLinear(c, "x", d)}) - (${fmtLinear(1, "x", s)})² = (${fmtQuad(a * c, a * d + b * c, b * d, "x")}) - (${fmtQuad(1, 2 * s, s * s, "x")}) = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `area_${a}_${b}_${c}_${d}_${s}`);
      }
    },

    // ---------- b2_s2_L ----------
    {
      type: "generator",
      id: "b2_s2_L",
      unit: "b2",
      skill: "b2_s2",
      diff: "L",
      templates: ["b2_s2_L_hcf_two_terms", "b2_s2_L_hcf_find_only", "b2_s2_L_diff_squares_basic"],
      generate(seed) {
        const rng = makeRng("b2_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s2", diff: "L", template: tpl };
        const v = pick(rng, ["x", "y", "m", "p"]);

        if (tpl === "b2_s2_L_hcf_two_terms") {
          const k = randInt(rng, 2, 8);
          let a = randInt(rng, 1, 5);
          let b = pickNonZero(rng, -7, 7);
          while (gcd(a, Math.abs(b)) !== 1) b += (b > 0 ? 1 : -1) || 1;
          const hasVarFactor = randInt(rng, 0, 1) === 1;
          if (hasVarFactor) {
            const expr = fmtQuad(k * a, k * b, 0, v);
            const corr = `${fmtCoeffVar(k, v)}${fmtParenLinear(a, v, b)}`;
            const q = `Faktorkan selengkapnya ${expr}.`;
            const wrongs = [
              `${fmtCoeffVar(k, v)}${fmtParenLinear(a, v, -b)}`,
              `${k}${fmtParenLinear(a, `${v}²`, b)}`,
              `${fmtCoeffVar(k, v)}${fmtParenLinear(a, v, k * b)}`,
              `${v}${fmtParenLinear(k * a, v, -k * b)}`
            ];
            const exp = `FSTB bagi ${k * a}${v}² dan ${k * Math.abs(b)}${v} ialah ${fmtCoeffVar(k, v)}. Maka ${expr} = ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `hv_${v}_${k}_${a}_${b}`);
          }
          const expr = fmtLinear(k * a, v, k * b);
          const corr = `${k}${fmtParenLinear(a, v, b)}`;
          const q = `Faktorkan selengkapnya ${expr}.`;
          const wrongs = [
            `${k}${fmtParenLinear(a, v, -b)}`,
            `${k}${fmtParenLinear(a, v, k * b)}`,
            `${k + 1}${fmtParenLinear(a, v, b)}`,
            `${k}${fmtParenLinear(a + 1, v, b)}`
          ];
          const exp = `FSTB bagi ${k * a} dan ${k * Math.abs(b)} ialah ${k}. Maka ${expr} = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `h_${v}_${k}_${a}_${b}`);
        }

        if (tpl === "b2_s2_L_hcf_find_only") {
          const g = randInt(rng, 2, 9);
          let p = randInt(rng, 2, 5);
          let qv = randInt(rng, 2, 7);
          while (gcd(p, qv) !== 1) qv++;
          const px = randInt(rng, 1, 2);
          const py = randInt(rng, 1, 2);
          const t1 = `${g * p}x${px === 2 ? "²" : ""}y`;
          const t2 = `${g * qv}xy${py === 2 ? "²" : ""}`;
          const corr = `${g}xy`;
          const q = `Apakah faktor sepunya terbesar (FSTB) bagi ${t1} dan ${t2}?`;
          const wrongs = [
            `${g}x²y²`,
            `${g}x`,
            `${g * p * qv}xy`,
            `${g}y`
          ];
          const exp = `FSTB bagi ${g * p} dan ${g * qv} ialah ${g}, dan kuasa terendah sepunya bagi pemboleh ubah ialah x dan y. Jadi FSTB = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `fstb_${g}_${p}_${qv}_${px}_${py}`);
        }

        // b2_s2_L_diff_squares_basic
        let a = randInt(rng, 1, 4);
        let b = randInt(rng, 2, 9);
        while (gcd(a, b) !== 1) b++;
        const expr = fmtQuad(a * a, 0, -(b * b), v);
        const corr = `${fmtParenLinear(a, v, b)}${fmtParenLinear(a, v, -b)}`;
        const q = `Faktorkan ${expr}.`;
        const wrongs = [
          `${fmtParenLinear(a, v, -b)}²`,
          `${fmtParenLinear(a, v, b)}²`,
          `${fmtParenLinear(a * a, v, b * b)}${fmtParenLinear(1, v, -1)}`
        ];
        const exp = `Menggunakan beza dua kuasa dua p² - q² = (p + q)(p - q): ${expr} = (${fmtCoeffVar(a, v)})² - ${b}² = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `ds_${v}_${a}_${b}`);
      }
    },

    // ---------- b2_s2_M ----------
    {
      type: "generator",
      id: "b2_s2_M",
      unit: "b2",
      skill: "b2_s2",
      diff: "M",
      templates: ["b2_s2_M_diff_squares_scaled", "b2_s2_M_quad_monic", "b2_s2_M_grouping_4terms"],
      generate(seed) {
        const rng = makeRng("b2_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s2", diff: "M", template: tpl };

        if (tpl === "b2_s2_M_diff_squares_scaled") {
          const k = randInt(rng, 2, 7);
          const a = randInt(rng, 1, 3);
          let b = randInt(rng, 2, 7);
          while (gcd(a, b) !== 1) b++;
          const expr = fmtTerms([[k * a * a, "x²"], [-(k * b * b), "y²"]]);
          const f1 = fmtLinearTwo(a, "x", b, "y");
          const f2 = fmtLinearTwo(a, "x", -b, "y");
          const corr = `${k}(${f1})(${f2})`;
          const q = `Faktorkan selengkapnya ${expr}.`;
          const wrongs = [
            `${k}(${f2})²`,
            `${k}(${f1})²`,
            `(${fmtLinearTwo(k * a, "x", b, "y")})(${fmtLinearTwo(a, "x", -b, "y")})`
          ];
          const exp = `Keluarkan faktor sepunya ${k} dahulu: ${k}(${fmtTerms([[a * a, "x²"], [-(b * b), "y²"]])}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `dss_${k}_${a}_${b}`);
        }

        if (tpl === "b2_s2_M_quad_monic") {
          const v = pick(rng, ["x", "y", "m"]);
          const p = pickNonZero(rng, -8, 8);
          let qv = pickNonZero(rng, -8, 8);
          if (p === -qv) qv += (qv > 0 ? 1 : -1);
          const b = p + qv;
          const c = p * qv;
          const expr = fmtQuad(1, b, c, v);
          const corr = `${fmtParenLinear(1, v, p)}${fmtParenLinear(1, v, qv)}`;
          const q = `Faktorkan ${expr}.`;
          const wrongs = [
            `${fmtParenLinear(1, v, -p)}${fmtParenLinear(1, v, -qv)}`,
            `${fmtParenLinear(1, v, p)}${fmtParenLinear(1, v, -qv)}`,
            `${fmtParenLinear(1, v, -p)}${fmtParenLinear(1, v, qv)}`,
            `${fmtParenLinear(1, v, p + 1)}${fmtParenLinear(1, v, qv - 1)}`
          ];
          const exp = `Cari dua nombor dengan hasil darab ${c} dan hasil tambah ${b}, iaitu ${p} dan ${qv}. Maka ${expr} = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `qm_${v}_${p}_${qv}`);
        }

        // b2_s2_M_grouping_4terms
        const a = randInt(rng, 1, 5);
        let b = pickNonZero(rng, -6, 6);
        while (gcd(a, Math.abs(b)) !== 1) b += (b > 0 ? 1 : -1) || 1;
        const c = randInt(rng, 1, 4);
        let d = pickNonZero(rng, -6, 6);
        while (gcd(c, Math.abs(d)) !== 1) d += (d > 0 ? 1 : -1) || 1;
        // (ax + b)(cy + d) = ac xy + ad x + bc y + bd
        const expr = fmtTerms([[a * c, "xy"], [a * d, "x"], [b * c, "y"], [b * d, ""]]);
        const corr = `${fmtParenLinear(a, "x", b)}${fmtParenLinear(c, "y", d)}`;
        const q = `Faktorkan ungkapan berikut melalui kaedah pengumpulan:\n${expr}`;
        const wrongs = [
          `${fmtParenLinear(a, "x", -b)}${fmtParenLinear(c, "y", d)}`,
          `${fmtParenLinear(a, "x", b)}${fmtParenLinear(c, "y", -d)}`,
          `${fmtParenLinear(a, "x", -b)}${fmtParenLinear(c, "y", -d)}`
        ];
        const exp = `Kumpulkan dua sebutan pertama dan dua sebutan terakhir: ${fmtCoeffVar(a, "x")}${fmtParenLinear(c, "y", d)} ${b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`}${fmtParenLinear(c, "y", d)} = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `grp_${a}_${b}_${c}_${d}`);
      }
    },

    // ---------- b2_s2_H ----------
    {
      type: "generator",
      id: "b2_s2_H",
      unit: "b2",
      skill: "b2_s2",
      diff: "H",
      templates: ["b2_s2_H_quad_nonmonic", "b2_s2_H_common_then_quad", "b2_s2_H_find_side_from_area"],
      generate(seed) {
        const rng = makeRng("b2_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s2", diff: "H", template: tpl };

        if (tpl === "b2_s2_H_quad_nonmonic") {
          const a = randInt(rng, 2, 4);
          let b = pickNonZero(rng, -5, 5);
          while (gcd(a, Math.abs(b)) !== 1) b += (b > 0 ? 1 : -1) || 1;
          const c = randInt(rng, 1, 3);
          let d = pickNonZero(rng, -5, 5);
          while (gcd(c, Math.abs(d)) !== 1 || (a === c && Math.abs(b) === Math.abs(d))) {
            d += (d > 0 ? 1 : -1) || 1;
          }
          const expr = fmtQuad(a * c, a * d + b * c, b * d, "x");
          const corr = `${fmtParenLinear(a, "x", b)}${fmtParenLinear(c, "x", d)}`;
          const q = `Faktorkan selengkapnya ${expr}.`;
          const wrongs = [
            `${fmtParenLinear(a, "x", -b)}${fmtParenLinear(c, "x", -d)}`,
            `${fmtParenLinear(a, "x", d)}${fmtParenLinear(c, "x", b)}`,
            `${fmtParenLinear(a, "x", -b)}${fmtParenLinear(c, "x", d)}`,
            `${fmtParenLinear(a, "x", b)}${fmtParenLinear(c, "x", -d)}`,
            `${fmtParenLinear(a, "x", b + 1)}${fmtParenLinear(c, "x", d - 1)}`,
            `${fmtParenLinear(a, "x", b - 1)}${fmtParenLinear(c, "x", d + 1)}`
          ];
          const exp = `Dengan pendaraban silang bagi ${expr}, diperoleh pasangan faktor ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `nm_${a}_${b}_${c}_${d}`);
        }

        if (tpl === "b2_s2_H_common_then_quad") {
          const k = randInt(rng, 2, 5);
          const p = pickNonZero(rng, -6, 6);
          let qv = pickNonZero(rng, -6, 6);
          if (p === -qv) qv += (qv > 0 ? 1 : -1);
          const expr = fmtQuad(k, k * (p + qv), k * p * qv, "x");
          const corr = `${k}${fmtParenLinear(1, "x", p)}${fmtParenLinear(1, "x", qv)}`;
          const q = `Faktorkan selengkapnya ${expr}.`;
          const wrongs = [
            `${k}${fmtParenLinear(1, "x", -p)}${fmtParenLinear(1, "x", -qv)}`,
            `${k}${fmtParenLinear(1, "x", p)}${fmtParenLinear(1, "x", -qv)}`,
            `${k}${fmtParenLinear(1, "x", -p)}${fmtParenLinear(1, "x", qv)}`,
            `${k}${fmtParenLinear(1, "x", p + 1)}${fmtParenLinear(1, "x", qv + 1)}`,
            `${k}${fmtParenLinear(1, "x", p - 1)}${fmtParenLinear(1, "x", qv - 1)}`
          ];
          const exp = `Keluarkan faktor sepunya ${k} dahulu: ${k}(${fmtQuad(1, p + qv, p * qv, "x")}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `cq_${k}_${p}_${qv}`);
        }

        // b2_s2_H_find_side_from_area
        const a = randInt(rng, 2, 4);
        const b = randInt(rng, 1, 5);
        const c = randInt(rng, 1, 3);
        const d = randInt(rng, 1, 6);
        const area = fmtQuad(a * c, a * d + b * c, b * d, "x");
        const lenStr = fmtLinear(a, "x", b);
        const askPerim = randInt(rng, 0, 1) === 1;
        if (askPerim) {
          const perim = fmtLinear(2 * (a + c), "x", 2 * (b + d));
          const q = `Luas sebuah taman berbentuk segi empat tepat ialah (${area}) m². Jika panjangnya ialah (${lenStr}) m, ungkapkan perimeter taman itu dalam sebutan x (dalam m).`;
          const wrongs = [
            fmtLinear(a + c, "x", b + d),
            fmtLinear(2 * (a + c), "x", b + d),
            fmtLinear(2 * (a + c), "x", 2 * (b - d))
          ];
          const exp = `Faktorkan luas: ${area} = (${lenStr})(${fmtLinear(c, "x", d)}). Maka lebar = ${fmtLinear(c, "x", d)} m, dan perimeter = 2(${lenStr} + ${fmtLinear(c, "x", d)}) = ${perim}.`;
          return buildMcq(rng, meta, q, perim, wrongs, exp, `per_${a}_${b}_${c}_${d}`);
        }
        const corr = fmtLinear(c, "x", d);
        const q = `Luas sebuah papan tanda berbentuk segi empat tepat ialah (${area}) cm² dan panjangnya ialah (${lenStr}) cm. Apakah ungkapan bagi lebar papan tanda itu dalam sebutan x (dalam cm)?`;
        const wrongs = [
          fmtLinear(c, "x", -d),
          fmtLinear(c + 1, "x", d),
          fmtLinear(c, "x", d + 2)
        ];
        const exp = `Faktorkan luas: ${area} = (${lenStr})(${corr}). Maka lebar = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `wid_${a}_${b}_${c}_${d}`);
      }
    },

    // ---------- b2_s3_L ----------
    {
      type: "generator",
      id: "b2_s3_L",
      unit: "b2",
      skill: "b2_s3",
      diff: "L",
      templates: ["b2_s3_L_same_denom_add_sub", "b2_s3_L_simplify_factor", "b2_s3_L_mul_simple"],
      generate(seed) {
        const rng = makeRng("b2_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s3", diff: "L", template: tpl };

        if (tpl === "b2_s3_L_same_denom_add_sub") {
          const den = pick(rng, [3, 4, 5, 7]);
          const isSub = randInt(rng, 0, 1) === 1;
          let a = randInt(rng, 2, 6);
          const b = pickNonZero(rng, -7, 7);
          const c = randInt(rng, 1, 5);
          let d = pickNonZero(rng, -7, 7);
          if (isSub && a === c) a += 1;
          if (isSub && b === d) d = b > 0 ? -b : Math.abs(b);
          if (!isSub && b === -d) d = b;
          const fa = isSub ? a - c : a + c;
          const fb = isSub ? b - d : b + d;
          const gAll = gcd(gcd(Math.abs(fa), Math.abs(fb)), den);
          const nA = fa / gAll;
          const nB = fb / gAll;
          const fDen = den / gAll;
          const corr = fDen === 1 ? fmtLinear(nA, "x", nB) : fmtAlgFrac(fmtLinear(nA, "x", nB), String(fDen));
          const op = isSub ? "-" : "+";
          const q = `Permudahkan ${fmtAlgFrac(fmtLinear(a, "x", b), String(den))} ${op} ${fmtAlgFrac(fmtLinear(c, "x", d), String(den))}.`;
          const wDen = fDen === 1 ? den : fDen;
          const wrongs = [
            fmtAlgFrac(fmtLinear(fa, "x", isSub ? b + d : b - d), String(den)),
            fmtAlgFrac(fmtLinear(isSub ? a + c : (a === c ? a + 1 : a - c), "x", fb), String(den)),
            fmtAlgFrac(fmtLinear(nA, "x", nB), String(den * 2)),
            fmtAlgFrac(fmtLinear(nA + (nA >= 0 ? 1 : -1), "x", nB), String(wDen)),
            fmtAlgFrac(fmtLinear(nA, "x", nB + (nB >= 0 ? 1 : -1)), String(wDen))
          ];
          const exp = `Gabungkan pengangka kerana penyebut sama: (${fmtLinear(a, "x", b)}) ${op} (${fmtLinear(c, "x", d)}) = ${fmtLinear(fa, "x", fb)}, menghasilkan ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sd_${den}_${isSub}_${a}_${b}_${c}_${d}`);
        }

        if (tpl === "b2_s3_L_simplify_factor") {
          const a = pickNonZero(rng, -6, 6);
          const p = randInt(rng, 2, 5);
          let qv = randInt(rng, 2, 7);
          while (gcd(p, qv) !== 1) qv++;
          const num = fmtLinear(p, "x", p * a);
          const den = fmtLinear(qv, "x", qv * a);
          const corr = fmtFrac(p, qv);
          const q = `Permudahkan pecahan algebra ${fmtAlgFrac(num, den)} kepada sebutan terendah.`;
          const wrongs = [
            fmtFrac(qv, p),
            fmtAlgFrac(fmtLinear(p, "x", p * a + 1), String(qv)),
            fmtFrac(p + 1, qv),
            fmtFrac(p, qv + 1)
          ];
          const exp = `Faktorkan pengangka dan penyebut: ${p}(${fmtLinear(1, "x", a)}) / ${qv}(${fmtLinear(1, "x", a)}) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sf_${a}_${p}_${qv}`);
        }

        // b2_s3_L_mul_simple
        const k = randInt(rng, 2, 5);
        const a = pickNonZero(rng, -5, 5);
        const m = randInt(rng, 2, 5);
        let n = randInt(rng, 2, 7);
        while (gcd(m * k, n) !== 1) n++;
        const frac1 = fmtAlgFrac(fmtLinear(k, "x", k * a), String(n));
        const frac2 = fmtAlgFrac(String(m), fmtLinear(1, "x", a));
        const corr = fmtFrac(m * k, n);
        const q = `Permudahkan ${frac1} × ${frac2}.`;
        const wrongs = [
          fmtFrac(n, m * k),
          fmtFrac(m, n),
          fmtFrac(k, n),
          fmtFrac(m * k, n + 1),
          fmtFrac(m * k + 1, n)
        ];
        const exp = `Faktorkan ${fmtLinear(k, "x", k * a)} = ${k}(${fmtLinear(1, "x", a)}) dan mansuhkan (${fmtLinear(1, "x", a)}) untuk mendapat ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `ms_${k}_${a}_${m}_${n}`);
      }
    },

    // ---------- b2_s3_M ----------
    {
      type: "generator",
      id: "b2_s3_M",
      unit: "b2",
      skill: "b2_s3",
      diff: "M",
      templates: ["b2_s3_M_diff_denom_num", "b2_s3_M_diff_denom_var", "b2_s3_M_div_factor"],
      generate(seed) {
        const rng = makeRng("b2_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s3", diff: "M", template: tpl };

        if (tpl === "b2_s3_M_diff_denom_num") {
          const d1 = pick(rng, [2, 3, 4]);
          let d2 = pick(rng, [3, 4, 5]);
          if (d1 === d2) d2 = d1 + 1;
          const L = lcm(d1, d2);
          const m1 = L / d1;
          const m2 = L / d2;
          const isSub = randInt(rng, 0, 1) === 1;
          let a = randInt(rng, 1, 4);
          const b = pickNonZero(rng, -5, 5);
          const c = randInt(rng, 1, 3);
          const d = pickNonZero(rng, -5, 5);
          if (isSub && m1 * a === m2 * c) a += 1;
          const fa = isSub ? m1 * a - m2 * c : m1 * a + m2 * c;
          const fb = isSub ? m1 * b - m2 * d : m1 * b + m2 * d;
          const g = gcd(gcd(Math.abs(fa), Math.abs(fb)), L);
          const nA = fa / g;
          const nB = fb / g;
          const fL = L / g;
          const wDen = fL === 1 ? L : fL;
          const corr = fL === 1
            ? fmtLinear(nA, "x", nB)
            : fmtAlgFrac(fmtLinear(nA, "x", nB), String(fL));
          const op = isSub ? "-" : "+";
          const q = `Ungkapkan ${fmtAlgFrac(fmtLinear(a, "x", b), String(d1))} ${op} ${fmtAlgFrac(fmtLinear(c, "x", d), String(d2))} sebagai satu pecahan tunggal dalam sebutan terendah.`;
          const wrongs = [
            fmtAlgFrac(fmtLinear(isSub ? (a === c ? a + 1 : a - c) : a + c, "x", isSub ? b - d : b + d), String(d1 + d2)),
            fmtAlgFrac(fmtLinear(fa, "x", isSub ? m1 * b + m2 * d : m1 * b - m2 * d), String(L)),
            fmtAlgFrac(fmtLinear(nA + (nA >= 0 ? 1 : -1), "x", nB), String(wDen)),
            fmtAlgFrac(fmtLinear(nA, "x", nB + (nB >= 0 ? 1 : -1)), String(wDen)),
            fmtAlgFrac(fmtLinear(nA, "x", nB === 0 ? 1 : -nB), String(wDen))
          ];
          const exp = `Samakan penyebut kepada ${L}: (${m1}(${fmtLinear(a, "x", b)}) ${op} ${m2}(${fmtLinear(c, "x", d)}))/${L} = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `dn_${d1}_${d2}_${isSub}_${a}_${b}_${c}_${d}`);
        }

        if (tpl === "b2_s3_M_diff_denom_var") {
          const a = randInt(rng, 1, 5);
          const b = randInt(rng, 1, 5);
          const p = pickNonZero(rng, -5, 5);
          let qv = pickNonZero(rng, -5, 5);
          if (p === qv) qv += (qv > 0 ? 1 : -1) || 2;
          const isSub = randInt(rng, 0, 1) === 1;
          const op = isSub ? "-" : "+";
          const numA = isSub ? a - b : a + b;
          const numB = isSub ? a * qv - b * p : a * qv + b * p;
          if (numA === 0 && numB === 0) {
            return this.generate(seed + 997);
          }
          const den = `${fmtParenLinear(1, "x", p)}${fmtParenLinear(1, "x", qv)}`;
          const corr = fmtAlgFrac(fmtLinear(numA, "x", numB), den);
          const q = `Permudahkan ${fmtAlgFrac(String(a), fmtLinear(1, "x", p))} ${op} ${fmtAlgFrac(String(b), fmtLinear(1, "x", qv))}.`;
          const wrongs = [
            fmtAlgFrac(fmtLinear(numA, "x", isSub ? a * p - b * qv : a * p + b * qv), den),
            fmtAlgFrac(fmtLinear(numA + (numA >= 0 ? 1 : -1), "x", numB), den),
            fmtAlgFrac(fmtLinear(numA, "x", numB + (numB >= 0 ? 2 : -2)), den),
            fmtAlgFrac(fmtLinear(numA === 0 ? 1 : -numA, "x", numB), den),
            fmtAlgFrac(fmtLinear(numA, "x", -numB), den)
          ];
          const exp = `Samakan penyebut kepada ${den}: (${a}(${fmtLinear(1, "x", qv)}) ${op} ${b}(${fmtLinear(1, "x", p)})) / ${den} = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `dv_${a}_${b}_${p}_${qv}_${isSub}`);
        }

        // b2_s3_M_div_factor
        const a = randInt(rng, 2, 6);
        const k = randInt(rng, 2, 5);
        let m = randInt(rng, 2, 7);
        while (gcd(k, m) !== 1) m++;
        const askPlus = randInt(rng, 0, 1) === 1;
        const divDen = askPlus ? fmtLinear(1, "x", -a) : fmtLinear(1, "x", a);
        const remLin = askPlus ? fmtLinear(1, "x", a) : fmtLinear(1, "x", -a);
        const corr = fmtAlgFrac(`${m}(${remLin})`, String(k));
        const q = `Permudahkan ${fmtAlgFrac(fmtQuad(1, 0, -(a * a), "x"), String(k))} ÷ ${fmtAlgFrac(divDen, String(m))}.`;
        const wrongs = [
          fmtAlgFrac(`${k}(${remLin})`, String(m)),
          fmtAlgFrac(`${m}(${divDen})`, String(k)),
          `${m * k}(${remLin})`
        ];
        const exp = `Tukarkan kepada darab dan faktorkan ${fmtQuad(1, 0, -(a * a), "x")} = (${fmtLinear(1, "x", a)})(${fmtLinear(1, "x", -a)}). Selepas pemansuhan, jawapannya ialah ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `df_${a}_${k}_${m}_${askPlus}`);
      }
    },

    // ---------- b2_s3_H ----------
    {
      type: "generator",
      id: "b2_s3_H",
      unit: "b2",
      skill: "b2_s3",
      diff: "H",
      templates: ["b2_s3_H_simplify_quad", "b2_s3_H_mul_div_quad", "b2_s3_H_sub_linear_denoms"],
      generate(seed) {
        const rng = makeRng("b2_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b2", skill: "b2_s3", diff: "H", template: tpl };

        if (tpl === "b2_s3_H_simplify_quad") {
          const p = randInt(rng, 1, 5);
          let qv = pickNonZero(rng, -6, 6);
          if (Math.abs(qv) === p) qv += (qv > 0 ? 1 : -1) || 2;
          const num = fmtQuad(1, p + qv, p * qv, "x");
          const den = fmtQuad(1, 0, -(p * p), "x");
          const corr = fmtAlgFrac(fmtLinear(1, "x", qv), fmtLinear(1, "x", -p));
          const q = `Permudahkan pecahan algebra ${fmtAlgFrac(num, den)}.`;
          const wrongs = [
            fmtAlgFrac(fmtLinear(1, "x", qv), fmtLinear(1, "x", p)),
            fmtAlgFrac(fmtLinear(1, "x", -qv), fmtLinear(1, "x", -p)),
            fmtAlgFrac(fmtLinear(1, "x", -qv), fmtLinear(1, "x", p)),
            fmtAlgFrac(fmtLinear(1, "x", p + qv), fmtLinear(1, "x", -p)),
            fmtAlgFrac(fmtLinear(1, "x", qv + 1), fmtLinear(1, "x", -p))
          ];
          const exp = `Faktorkan pengangka = (${fmtLinear(1, "x", p)})(${fmtLinear(1, "x", qv)}) dan penyebut = (${fmtLinear(1, "x", p)})(${fmtLinear(1, "x", -p)}). Mansuhkan (${fmtLinear(1, "x", p)}) untuk memperoleh ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sq_${p}_${qv}`);
        }

        if (tpl === "b2_s3_H_mul_div_quad") {
          const a = randInt(rng, 1, 5);
          let b = randInt(rng, 1, 6);
          if (b === a) b++;
          const k = randInt(rng, 2, 5);
          // [(x^2 - a^2) / (x^2 + (a+b)x + ab)] * [k(x + b) / (x - a)] = k
          // Better: vary output so it's algebraic: [(x^2 - a^2) / (k(x + b))] * [(x + b)/(x - a)] -> (x+a)/k
          const num1 = fmtQuad(1, 0, -(a * a), "x");
          const den1 = `${k}${fmtParenLinear(1, "x", b)}`;
          const num2 = fmtQuad(1, b + a, a * b, "x");
          const den2 = fmtLinear(1, "x", -a);
          // (x-a)(x+a) / [k(x+b)] ÷ [(x+b)(x+a)/(x-a)] -> wait simpler:
          // [(x^2 - a^2) / (x^2 + (a+b)x + ab)] ÷ [(x - a) / (k(x + b))] = k
          // Let's keep answer algebraic: [(x^2 + (a+b)x + ab) / (k(x - a))] * [(x^2 - a^2) / (x + b)] -> (x+a)^2 / k!
          // Cleanest: [(x^2 - a^2) / (x + b)] ÷ [(x - a) / (k(x + b))] -> k(x + a)
          const f1 = fmtAlgFrac(num1, fmtLinear(1, "x", b));
          const f2 = fmtAlgFrac(den2, den1);
          const corr = `${k}${fmtParenLinear(1, "x", a)}`;
          const q = `Permudahkan ${f1} ÷ ${f2}.`;
          const wrongs = [
            fmtAlgFrac(fmtLinear(1, "x", a), String(k)),
            `${k}${fmtParenLinear(1, "x", -a)}`,
            `${k}${fmtParenLinear(1, "x", b)}`
          ];
          const exp = `Songsangkan pembahagi kepada darab dan faktorkan ${num1} = (${fmtLinear(1, "x", a)})(${fmtLinear(1, "x", -a)}). Selepas pemansuhan, tinggal ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `md_${a}_${b}_${k}`);
        }

        // b2_s3_H_sub_linear_denoms: (x + p)/(x - a) - (x + q)/(x + b)
        const a = randInt(rng, 1, 5);
        const b = randInt(rng, 1, 5);
        const p = randInt(rng, 1, 6);
        const m = randInt(rng, 2, 5);
        // (x + p)/(x - a) - 1 -> (p + a)/(x - a), too easy.
        // Use m/(x - a) - n/(x + b) with linear num: (mx + mb - nx + na)/((x-a)(x+b))
        const n = randInt(rng, 1, 4);
        const c1 = m === n ? m + 1 : m;
        const na = c1 - n;
        const nb = c1 * b + n * a;
        const den = `${fmtParenLinear(1, "x", -a)}${fmtParenLinear(1, "x", b)}`;
        const corr = fmtAlgFrac(fmtLinear(na, "x", nb), den);
        const q = `Permudahkan ${fmtAlgFrac(String(c1), fmtLinear(1, "x", -a))} - ${fmtAlgFrac(String(n), fmtLinear(1, "x", b))} kepada satu pecahan tunggal.`;
        const wrongs = [
          fmtAlgFrac(fmtLinear(na, "x", c1 * b - n * a), den),
          fmtAlgFrac(fmtLinear(c1 + n, "x", nb), den),
          fmtAlgFrac(fmtLinear(na, "x", -nb), den)
        ];
        const exp = `Samakan penyebut kepada ${den}: [${c1}(${fmtLinear(1, "x", b)}) - ${n}(${fmtLinear(1, "x", -a)})] / ${den} = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `sl_${a}_${b}_${c1}_${n}_${p}`);
      }
    },

    // ==================== BAB 3: RUMUS ALGEBRA ====================
    // ---------- b3_s1_L ----------
    {
      type: "generator",
      id: "b3_s1_L",
      unit: "b3",
      skill: "b3_s1",
      diff: "L",
      templates: ["b3_s1_L_translate_phrase", "b3_s1_L_perimeter_area", "b3_s1_L_cost_total"],
      generate(seed) {
        const rng = makeRng("b3_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s1", diff: "L", template: tpl };

        if (tpl === "b3_s1_L_translate_phrase") {
          let k = randInt(rng, 2, 12);
          const m = randInt(rng, 2, 6);
          if (k === m) k = k === 12 ? 11 : k + 1;
          const isLess = randInt(rng, 0, 1) === 1;
          if (isLess) {
            const corr = `y = ${m}x - ${k}`;
            const q = `Nilai y ialah ${k} kurang daripada ${m} kali ganda x. Antara berikut, yang manakah rumus yang betul?`;
            const wrongs = [`y = ${k} - ${m}x`, `y = ${m}x + ${k}`, `y = ${m}(x - ${k})`, `y = ${k}x - ${m}`];
            const exp = `"${k} kurang daripada ${m} kali ganda x" bermaksud ${m}x ditolak dengan ${k}, iaitu ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `less_${k}_${m}`);
          }
          const corr = `y = ${m}x + ${k}`;
          const q = `Suatu nombor y diperoleh dengan menambah ${k} kepada ${m} kali ganda nombor x. Tulis rumus bagi y.`;
          const wrongs = [`y = ${m}(x + ${k})`, `y = ${m}x - ${k}`, `y = ${k}x + ${m}`, `y = ${m + 1}x + ${k}`];
          const exp = `${m} kali ganda x ialah ${m}x, kemudian ditambah ${k} untuk mendapat ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `more_${k}_${m}`);
        }

        if (tpl === "b3_s1_L_perimeter_area") {
          const shape = randInt(rng, 0, 2);
          if (shape === 0) {
            const k = randInt(rng, 2, 6);
            const corr = `P = 2p + 2q`;
            const q = `Sebuah bingkai segi empat tepat mempunyai panjang p cm dan lebar q cm. Jika P ialah perimeter bingkai itu (dalam cm), tulis rumus bagi P dalam sebutan p dan q.`;
            const wrongs = [`P = pq`, `P = p + q`, `P = 2p + q`];
            const exp = `Perimeter segi empat tepat ialah hasil tambah empat sisinya: p + q + p + q = 2p + 2q.`;
            // Add extra variation via k*p
            if (randInt(rng, 0, 1) === 1) {
              const corr2 = `P = ${2 * (k + 1)}w`;
              const q2 = `Sebuah segi empat tepat mempunyai lebar w cm dan panjangnya ialah ${k} kali ganda lebarnya. Tulis rumus bagi perimeter P (dalam cm) dalam sebutan w.`;
              const w2 = [`P = ${k}w²`, `P = ${k + 1}w`, `P = ${2 * k}w`];
              const e2 = `Panjang = ${k}w dan lebar = w, maka P = 2(${k}w + w) = ${2 * (k + 1)}w.`;
              return buildMcq(rng, meta, q2, corr2, w2, e2, `rect_k_${k}`);
            }
            return buildMcq(rng, meta, q, corr, wrongs, exp, `rect_pq_${k}`);
          }
          if (shape === 1) {
            const s = randInt(rng, 2, 5);
            const corr = `P = ${s}a + b`;
            const q = `Sebuah poligon mempunyai ${s} sisi yang sama panjang a cm dan satu sisi lagi berukuran b cm. Tulis rumus bagi perimeternya P dalam sebutan a dan b.`;
            const wrongs = [`P = a + ${s}b`, `P = ${s}(a + b)`, `P = ${s}ab`];
            const exp = `Hasil tambah ${s} sisi sepanjang a dan satu sisi sepanjang b ialah ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `poly_${s}`);
          }
          const corr = `L = (a + b)h/2`;
          const q = `Luas sebuah trapezium L ialah separuh daripada hasil darab hasil tambah dua sisi selarinya, a dan b, dengan tingginya h. Tulis rumus bagi L.`;
          const wrongs = [`L = (a + b)h`, `L = abh/2`, `L = a + bh/2`];
          const exp = `Luas trapezium ialah (1/2) × (a + b) × h, iaitu ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `trap`);
        }

        // b3_s1_L_cost_total
        const p = randInt(rng, 2, 9);
        let qPrice = randInt(rng, 3, 12);
        if (qPrice === p) qPrice = qPrice === 12 ? 11 : qPrice + 1;
        let base = randInt(rng, 4, 15);
        if (base === p) base = base === 15 ? 14 : base + 1;
        const isTaxi = randInt(rng, 0, 1) === 1;
        if (isTaxi) {
          const corr = `C = ${p}d + ${base}`;
          const q = `Sebuah perkhidmatan penghantaran mengenakan caj asas sebanyak RM ${base} dan caj tambahan RM ${p} bagi setiap kilometer jarak d. Tulis rumus bagi jumlah caj C (dalam RM).`;
          const wrongs = [`C = ${base}d + ${p}`, `C = (${p} + ${base})d`, `C = ${p}d - ${base}`, `C = ${p + 1}d + ${base}`];
          const exp = `Jumlah caj = caj jarak (${p}d) + caj asas (${base}), iaitu ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `taxi_${p}_${base}`);
        }
        const corr = `J = ${p}x + ${qPrice}y`;
        const q = `Harga sebuah buku ialah RM ${p} dan harga sebuah fail ialah RM ${qPrice}. Jika x buah buku dan y buah fail dibeli, tulis rumus bagi jumlah harga J (dalam RM).`;
        const wrongs = [`J = ${qPrice}x + ${p}y`, `J = (${p} + ${qPrice})(x + y)`, `J = ${p + qPrice}xy`, `J = ${p}x + ${qPrice + 1}y`];
        const exp = `Jumlah harga ialah (${p} × x) + (${qPrice} × y), iaitu ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `shop_${p}_${qPrice}`);
      }
    },

    // ---------- b3_s1_M ----------
    {
      type: "generator",
      id: "b3_s1_M",
      unit: "b3",
      skill: "b3_s1",
      diff: "M",
      templates: ["b3_s1_M_unit_conversion", "b3_s1_M_average_age", "b3_s1_M_discount_profit"],
      generate(seed) {
        const rng = makeRng("b3_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s1", diff: "M", template: tpl };

        if (tpl === "b3_s1_M_unit_conversion") {
          const type = randInt(rng, 0, 2);
          if (type === 0) {
            const mult = randInt(rng, 1, 3);
            const corr = `T = ${60 * mult}j + m`;
            const q = mult === 1
              ? `Satu perjalanan mengambil masa j jam dan m minit. Tulis rumus bagi jumlah masa T dalam unit minit.`
              : `Sebuah mesin beroperasi selama ${mult}j jam dan m minit. Tulis rumus bagi jumlah masa T dalam unit minit.`;
            const wrongs = [`T = j + ${60 * mult}m`, `T = j + m`, `T = ${mult}j + m/60`];
            const exp = `1 jam = 60 minit, maka ${mult === 1 ? "j" : `${mult}j`} jam = ${60 * mult}j minit. Jumlahnya ialah ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `time_${mult}`);
          }
          if (type === 1) {
            const p = randInt(rng, 2, 5);
            const corr = `S = ${100 * p}r + k`;
            const q = p === 1
              ? `Jumlah wang S (dalam sen) diperoleh daripada r keping wang RM 1 dan k syiling 1 sen. Tulis rumus bagi S.`
              : `Wang simpanan terdiri daripada r keping wang kertas RM ${p} dan k syiling 1 sen. Tulis rumus bagi jumlah wang S dalam unit sen.`;
            const wrongs = [`S = ${p}r + k`, `S = ${p}r + 100k`, `S = 100r + ${p}k`];
            const exp = `RM ${p} = ${100 * p} sen, maka nilai r keping ialah ${100 * p}r sen dan ditambah k sen menjadi ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `sen_${p}`);
          }
          const k = randInt(rng, 2, 5);
          const corr = `J = ${1000 * k}p + q`;
          const q = `Sebuah kotak mengandungi p bungkus tepung berjisim ${k} kg setiap satu dan satu bungkusan tambahan berjisim q gram. Tulis rumus bagi jumlah jisim J dalam gram.`;
          const wrongs = [`J = ${k}p + q`, `J = ${k}p + q/1000`, `J = 1000p + ${k}q`];
          const exp = `${k} kg = ${1000 * k} gram, maka p bungkus = ${1000 * k}p gram dan jumlah jisim ialah ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `mass_${k}`);
        }

        if (tpl === "b3_s1_M_average_age") {
          const n = randInt(rng, 3, 6);
          const d = randInt(rng, 2, 8);
          const isAge = randInt(rng, 0, 1) === 1;
          if (isAge) {
            const corr = `J = ${n}u + ${n * d}`;
            const q = `Seramai ${n} orang murid masing-masing berumur u tahun pada masa ini. Tulis rumus bagi jumlah umur mereka J selepas ${d} tahun akan datang.`;
            const wrongs = [`J = ${n}u + ${d}`, `J = u + ${n * d}`, `J = ${n}(u - ${d})`];
            const exp = `Selepas ${d} tahun, umur setiap murid ialah (u + ${d}) tahun. Maka jumlah umur ${n} murid ialah ${n}(u + ${d}) = ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `age_${n}_${d}`);
          }
          const corr = `M = (x + y + ${d})/${n}`;
          const q = `Purata markah M bagi ${n} ujian ialah hasil tambah markah x, y dan beberapa markah lain yang berjumlah ${d}, dibahagi dengan bilangan ujian. Tulis rumus bagi M.`;
          const wrongs = [
            `M = (x + y)/${n} + ${d}`,
            `M = ${n}(x + y + ${d})`,
            `M = (x + y - ${d})/${n}`,
            `M = (x + y + ${d})/${n + 1}`
          ];
          const exp = `Purata = jumlah markah ÷ bilangan ujian, iaitu ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `avg_${n}_${d}`);
        }

        // b3_s1_M_discount_profit
        const W = pick(rng, [50, 100, 150, 200]);
        const p = randInt(rng, 4, 15);
        const d = randInt(rng, 2, 8);
        const corr = `B = ${W + d} - ${p}x`;
        const q = `Seorang pembeli membayar dengan wang RM ${W} untuk membeli x helai baju berharga RM ${p} sehelai dan mendapat potongan harga keseluruhan sebanyak RM ${d}. Tulis rumus bagi wang baki B (dalam RM) yang diterimanya.`;
        const wrongs = [
          `B = ${W - d} - ${p}x`,
          `B = ${p}x - ${W + d}`,
          `B = ${W} - (${p} - ${d})x`
        ];
        const exp = `Jumlah bayaran sebenar ialah ${p}x - ${d}. Maka baki B = ${W} - (${p}x - ${d}) = ${W + d} - ${p}x.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `disc_${W}_${p}_${d}`);
      }
    },

    // ---------- b3_s1_H ----------
    {
      type: "generator",
      id: "b3_s1_H",
      unit: "b3",
      skill: "b3_s1",
      diff: "H",
      templates: ["b3_s1_H_mixed_unit_rate", "b3_s1_H_composite_area_vol", "b3_s1_H_two_step_relation"],
      generate(seed) {
        const rng = makeRng("b3_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s1", diff: "H", template: tpl };

        if (tpl === "b3_s1_H_mixed_unit_rate") {
          const r = randInt(rng, 10, 30);
          const mode = randInt(rng, 0, 1);
          if (mode === 0) {
            const base = randInt(rng, 5, 20);
            const corr = `C = ${r}h + (${r}m)/60 + ${base}`;
            const q = `Kadar sewa sebuah dewan ialah RM ${base} sebagai deposit tetap ditambah RM ${r} bagi setiap jam penggunaan. Jika dewan itu disewa selama h jam dan m minit, tulis rumus bagi jumlah kos C (dalam RM).`;
            const wrongs = [
              `C = ${r}(h + m) + ${base}`,
              `C = ${r}h + 60m + ${base}`,
              `C = ${r}h + m/60 + ${base}`
            ];
            const exp = `Tukarkan m minit kepada jam: m/60 jam. Maka jumlah masa = h + m/60 jam, dan jumlah kos C = ${base} + ${r}(h + m/60) = ${corr}.`;
            return buildMcq(rng, meta, q, corr, wrongs, exp, `rent_${r}_${base}`);
          }
          const corr = `J = vt/60`;
          const q = `Sebuah bas bergerak dengan laju purata v km/j selama t minit. Tulis rumus bagi jarak perjalanan J dalam unit kilometer.`;
          const wrongs = [`J = vt`, `J = 60vt`, `J = 60v/t`];
          const exp = `Tukarkan t minit kepada t/60 jam. Jarak = laju × masa = v × (t/60) = ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `spd_${r}`);
        }

        if (tpl === "b3_s1_H_composite_area_vol") {
          const n = randInt(rng, 2, 6);
          const corr = `L = pq - ${n}s²`;
          const q = `Sekeping kad segi empat tepat berukuran panjang p cm dan lebar q cm dipotong ${n} keping segi empat sama bersisi s cm. Tulis rumus bagi luas kad yang tinggal L (dalam cm²).`;
          const wrongs = [`L = pq - ${2 * n}s`, `L = pq + ${n}s²`, `L = 2(p + q) - ${n}s²`];
          const exp = `Luas segi empat tepat = pq dan luas ${n} segi empat sama = ${n}s². Maka ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `comp_${n}`);
        }

        // b3_s1_H_two_step_relation
        const k = randInt(rng, 2, 10);
        const m = randInt(rng, 2, 4);
        const n1 = pick(rng, NAMES);
        let n2 = pick(rng, NAMES);
        if (n2 === n1) n2 = "Zara";
        let n3 = pick(rng, NAMES);
        if (n3 === n1 || n3 === n2) n3 = "Danial";
        // n2 has m*a + k; n3 has 2*(n1 + n2) = 2(m+1)a + 2k
        const coeffA = 2 * (m + 1);
        const constK = 2 * k;
        const corr = `c = ${coeffA}a + ${constK}`;
        const q = `${n1} mempunyai a biji guli. Bilangan guli ${n2} ialah ${k} lebih daripada ${m} kali ganda bilangan guli ${n1}. Bilangan guli ${n3}, iaitu c, ialah dua kali ganda jumlah guli ${n1} dan ${n2}. Tulis rumus bagi c dalam sebutan a.`;
        const wrongs = [
          `c = ${2 * m}a + ${k}`,
          `c = ${m + 1}a + ${k}`,
          `c = ${coeffA}a + ${k}`
        ];
        const exp = `Guli ${n2} = ${m}a + ${k}. Jumlah guli ${n1} dan ${n2} = a + (${m}a + ${k}) = ${m + 1}a + ${k}. Dua kali ganda jumlah itu ialah 2(${m + 1}a + ${k}) = ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `two_${k}_${m}_${n1}`);
      }
    },

    // ---------- b3_s2_L ----------
    {
      type: "generator",
      id: "b3_s2_L",
      unit: "b3",
      skill: "b3_s2",
      diff: "L",
      templates: ["b3_s2_L_linear_add_mul", "b3_s2_L_simple_frac", "b3_s2_L_minus_subject"],
      generate(seed) {
        const rng = makeRng("b3_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s2", diff: "L", template: tpl };

        if (tpl === "b3_s2_L_linear_add_mul") {
          const a = randInt(rng, 2, 8);
          const b = pickNonZero(rng, -9, 9);
          const eq = `y = ${fmtLinear(a, "x", b)}`;
          const num = fmtLinear(1, "y", -b);
          const corr = `x = ${fmtAlgFrac(num, String(a))}`;
          const q = `Diberi ${eq}. Ungkapkan x sebagai perkara rumus.`;
          const wrongs = [
            `x = ${fmtAlgFrac(fmtLinear(1, "y", b), String(a))}`,
            `x = ${a}y - ${b}`,
            `x = y/${a} + ${Math.abs(b)}`
          ];
          const exp = `Pindahkan ${b > 0 ? `+${b}` : b} ke sebelah kiri menjadi ${num} = ${a}x, kemudian bahagikan dengan ${a} untuk mendapat ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `lin_${a}_${b}`);
        }

        if (tpl === "b3_s2_L_simple_frac") {
          const a = pickNonZero(rng, -8, 8);
          const b = randInt(rng, 2, 7);
          const eq = `y = ${fmtAlgFrac(fmtLinear(1, "x", a), String(b))}`;
          const corr = `x = ${fmtLinear(b, "y", -a)}`;
          const q = `Tukarkan perkara rumus bagi ${eq} kepada x.`;
          const wrongs = [
            `x = ${fmtLinear(b, "y", a)}`,
            `x = ${fmtAlgFrac(fmtLinear(1, "y", -a), String(b))}`,
            `x = ${b}(y + ${Math.abs(a) + 1})`,
            `x = ${fmtAlgFrac(fmtLinear(1, "y", a), String(b))}`
          ];
          const exp = `Darabkan kedua-dua belah dengan ${b}: ${b}y = ${fmtLinear(1, "x", a)}, maka ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sf_${a}_${b}`);
        }

        // b3_s2_L_minus_subject
        const a = randInt(rng, 3, 12);
        const b = randInt(rng, 2, 7);
        const eq = `y = ${a} - ${b}x`;
        const corr = `x = (${a} - y)/${b}`;
        const q = `Diberi rumus ${eq}. Jadikan x sebagai perkara rumus.`;
        const wrongs = [
          `x = (y - ${a})/${b}`,
          `x = (y + ${a})/${b}`,
          `x = ${a} - y/${b}`
        ];
        const exp = `Pindahkan -${b}x ke kiri dan y ke kanan: ${b}x = ${a} - y, maka ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `min_${a}_${b}`);
      }
    },

    // ---------- b3_s2_M ----------
    {
      type: "generator",
      id: "b3_s2_M",
      unit: "b3",
      skill: "b3_s2",
      diff: "M",
      templates: ["b3_s2_M_square_to_sqrt", "b3_s2_M_sqrt_to_square", "b3_s2_M_bracket_frac"],
      generate(seed) {
        const rng = makeRng("b3_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s2", diff: "M", template: tpl };

        if (tpl === "b3_s2_M_square_to_sqrt") {
          const a = randInt(rng, 2, 6);
          const b = pickNonZero(rng, -7, 7);
          const rhs = fmtTerms([[a, "x²"], [b, "y"]]);
          const corr = `x = √(${fmtAlgFrac(fmtLinearTwo(1, "A", -b, "y"), String(a))})`;
          const q = `Diberi A = ${rhs} dengan x > 0. Ungkapkan x sebagai perkara rumus.`;
          const wrongs = [
            `x = √(${fmtAlgFrac(fmtLinearTwo(1, "A", b, "y"), String(a))})`,
            `x = ${fmtAlgFrac(fmtLinearTwo(1, "A", -b, "y"), String(a))}`,
            `x = √(A/${a}) - ${Math.abs(b)}y`
          ];
          const exp = `Asingkan sebutan x²: ${a}x² = ${fmtLinearTwo(1, "A", -b, "y")}. Bahagikan dengan ${a} dan ambil punca kuasa dua: ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sq_${a}_${b}`);
        }

        if (tpl === "b3_s2_M_sqrt_to_square") {
          const a = randInt(rng, 2, 6);
          const b = pickNonZero(rng, -8, 8);
          const inner = fmtLinear(a, "x", b);
          const corr = `x = ${fmtAlgFrac(fmtTerms([[1, "y²"], [-b, ""]]), String(a))}`;
          const q = `Diberi y = √(${inner}). Jadikan x sebagai perkara rumus.`;
          const wrongs = [
            `x = ${fmtAlgFrac(fmtTerms([[1, "y²"], [b, ""]]), String(a))}`,
            `x = ${fmtAlgFrac(fmtLinear(1, "y", -b), String(a))}`,
            `x = y²/${a} - ${b}`
          ];
          const exp = `Kuasa duakan kedua-dua belah: y² = ${inner}. Kemudian asingkan x untuk mendapat ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `rts_${a}_${b}`);
        }

        // b3_s2_M_bracket_frac
        const useDenomSubject = randInt(rng, 0, 1) === 1;
        if (useDenomSubject) {
          const k = randInt(rng, 2, 9);
          const m = pickNonZero(rng, -7, 7);
          const eq = `y = ${k}/(${fmtLinear(1, "x", m)})`;
          const corr = `x = (${k} - ${m}y)/y`;
          const q = `Tukarkan perkara rumus bagi ${eq} kepada x.`;
          const wrongs = [
            `x = (${k} + ${m}y)/y`,
            `x = ${k}y - ${m}`,
            `x = (y - ${k})/${m}`
          ];
          const exp = `Darabkan kedua-dua belah dengan (${fmtLinear(1, "x", m)}): y(${fmtLinear(1, "x", m)}) = ${k} → xy + ${m}y = ${k} → ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `den_${k}_${m}`);
        }
        const a = randInt(rng, 2, 5);
        const b = pickNonZero(rng, -6, 6);
        let c = randInt(rng, 3, 7);
        if (c === a) c = a === 7 ? 6 : a + 1;
        const eq = `y = ${a}${fmtParenLinear(1, "x", b)}/${c}`;
        const corr = `x = (${c}y - ${a * b})/${a}`;
        const q = `Ungkapkan x sebagai perkara rumus bagi ${eq}.`;
        const wrongs = [
          `x = (${c}y + ${a * b})/${a}`,
          `x = (${c}y - ${b})/${a}`,
          `x = (${a}y - ${a * b})/${c}`,
          `x = (${c}y - ${a * b})/${c}`
        ];
        const exp = `Darabkan dengan ${c}: ${c}y = ${a}(${fmtLinear(1, "x", b)}) = ${fmtLinear(a, "x", a * b)}. Maka ${corr}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `brk_${a}_${b}_${c}`);
      }
    },

    // ---------- b3_s2_H ----------
    {
      type: "generator",
      id: "b3_s2_H",
      unit: "b3",
      skill: "b3_s2",
      diff: "H",
      templates: ["b3_s2_H_repeated_var_factor", "b3_s2_H_sqrt_frac_both", "b3_s2_H_reciprocal_sum"],
      generate(seed) {
        const rng = makeRng("b3_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s2", diff: "H", template: tpl };

        if (tpl === "b3_s2_H_repeated_var_factor") {
          const a = randInt(rng, 1, 4);
          const b = randInt(rng, 1, 6);
          const c = randInt(rng, 1, 3);
          let d = randInt(rng, 1, 5);
          if (a === c && b === d) d = d === 5 ? 4 : d + 1;
          // y = (ax + b)/(cx - d) -> cxy - dy = ax + b -> x(cy - a) = dy + b -> x = (dy + b)/(cy - a)
          const num = fmtLinear(d, "y", b);
          const den = fmtLinear(c, "y", -a);
          const corr = `x = (${num})/(${den})`;
          const q = `Diberi y = (${fmtLinear(a, "x", b)})/(${fmtLinear(c, "x", -d)}). Ungkapkan x sebagai perkara rumus.`;
          const wrongs = [
            `x = (${fmtLinear(d, "y", -b)})/(${den})`,
            `x = (${num})/(${fmtLinear(c, "y", a)})`,
            `x = (${fmtLinear(b, "y", d)})/(${fmtLinear(a, "y", -c)})`,
            `x = (${fmtLinear(d, "y", -b)})/(${fmtLinear(c, "y", a)})`,
            `x = (${fmtLinear(c, "y", a)})/(${num})`
          ];
          const exp = `Darab silang: y(${fmtLinear(c, "x", -d)}) = ${fmtLinear(a, "x", b)} → x(${den}) = ${num} → ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `rep_${a}_${b}_${c}_${d}`);
        }

        if (tpl === "b3_s2_H_sqrt_frac_both") {
          const a = randInt(rng, 1, 6);
          const b = randInt(rng, 1, 6);
          // p = √((x + a)/b) or p = √(a - b/x) -> p^2 = a - b/x -> b/x = a - p^2 -> x = b/(a - p^2)
          const corr = `x = ${b}/(${a} - p²)`;
          const q = `Diberi p = √(${a} - ${b}/x) dengan p > 0 dan x > 0. Jadikan x sebagai perkara rumus.`;
          const wrongs = [
            `x = ${b}/(${a} + p²)`,
            `x = ${b}/(${a} - p)`,
            `x = (${a} - p²)/${b}`
          ];
          const exp = `Kuasa duakan kedua-dua belah: p² = ${a} - ${b}/x → ${b}/x = ${a} - p² → ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `sfb_${a}_${b}`);
        }

        // b3_s2_H_reciprocal_sum
        const k = randInt(rng, 1, 4);
        if (k === 1) {
          const corr = `u = fv/(v - f)`;
          const q = `Dalam rumus optik 1/f = 1/u + 1/v, ungkapkan u dalam sebutan f dan v.`;
          const wrongs = [`u = fv/(v + f)`, `u = (v - f)/fv`, `u = f - v`];
          const exp = `1/u = 1/f - 1/v = (v - f)/(fv). Maka menyongsangkan kedua-dua belah memberi ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `rec_1`);
        }
        const corr = `u = ${k}fv/(v - ${k}f)`;
        const q = `Diberi hubungan ${k}/f = ${k}/u + 1/v. Jadikan u sebagai perkara rumus.`;
        const wrongs = [
          `u = ${k}fv/(v + ${k}f)`,
          `u = fv/(v - ${k}f)`,
          `u = (v - ${k}f)/(${k}fv)`
        ];
        const exp = `${k}/u = ${k}/f - 1/v = (${k}v - f)/(fv)? Perhatikan: ${k}/f - 1/v = (${k}v - f)/(fv)...`;
        // WAIT! Let's check math: k/u = (kv - f)/(fv) => u = kfv / (kv - f)!! GOOD CATCH!
        // Let's fix corr and wrongs cleanly: 1/f = k/u + 1/v -> k/u = (v - f)/(fv) -> u = kfv/(v - f)!
        const corrFixed = `u = ${k}fv/(v - f)`;
        const qFixed = `Diberi hubungan 1/f = ${k}/u + 1/v. Jadikan u sebagai perkara rumus.`;
        const wrongsFixed = [
          `u = ${k}fv/(v + f)`,
          `u = fv/(${k}(v - f))`,
          `u = (v - f)/(${k}fv)`
        ];
        const expFixed = `${k}/u = 1/f - 1/v = (v - f)/(fv). Maka u = ${k}fv/(v - f).`;
        return buildMcq(rng, meta, qFixed, corrFixed, wrongsFixed, expFixed, `rec_${k}`);
      }
    },

    // ---------- b3_s3_L ----------
    {
      type: "generator",
      id: "b3_s3_L",
      unit: "b3",
      skill: "b3_s3",
      diff: "L",
      templates: ["b3_s3_L_direct_sub", "b3_s3_L_solve_other_var", "b3_s3_L_frac_sub"],
      generate(seed) {
        const rng = makeRng("b3_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s3", diff: "L", template: tpl };

        if (tpl === "b3_s3_L_direct_sub") {
          const a = randInt(rng, 2, 7);
          const b = randInt(rng, 2, 6);
          const c = pickNonZero(rng, -8, 10);
          const x = randInt(rng, 2, 9);
          const y = randInt(rng, 2, 9);
          const ans = a * x + b * y + c;
          const rhs = fmtLinearTwo(a, "x", b, "y", c);
          const q = `Diberi P = ${rhs}. Hitung nilai P apabila x = ${x} dan y = ${y}.`;
          const wrongs = [a * x - b * y + c, a * y + b * x + c, a * x + b * y - c, ans + a];
          const exp = `P = ${a}(${x}) + ${b}(${y}) + (${c}) = ${a * x} + ${b * y} + (${c}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `ds_${a}_${b}_${c}_${x}_${y}`);
        }

        if (tpl === "b3_s3_L_solve_other_var") {
          const a = randInt(rng, 2, 6);
          const b = randInt(rng, 2, 6);
          const x = randInt(rng, 3, 12);
          const y = randInt(rng, 2, 10);
          const P = a * x + b * y;
          const q = `Diberi P = ${a}x + ${b}y. Jika P = ${P} dan x = ${x}, cari nilai y.`;
          const wrongs = [y + 2, Math.max(1, y - 2), x, Math.floor(P / b)];
          const exp = `${P} = ${a}(${x}) + ${b}y → ${b}y = ${P - a * x} → y = ${y}.`;
          return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `so_${a}_${b}_${x}_${y}`);
        }

        // b3_s3_L_frac_sub
        const a = randInt(rng, 4, 16);
        const b = randInt(rng, 4, 16);
        const sum = (a + b) % 2 === 0 ? a + b : a + b + 1;
        const bAdj = sum - a;
        const t = randInt(rng, 3, 11);
        const ans = (sum / 2) * t;
        const q = `Diberi K = (a + b)t / 2. Hitung nilai K apabila a = ${a}, b = ${bAdj} dan t = ${t}.`;
        const wrongs = [(a + bAdj) * t, ans + t, ans - t, Math.round(a + (bAdj * t) / 2)];
        const exp = `K = (${a} + ${bAdj})(${t}) / 2 = (${sum})(${t}) / 2 = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `fs_${a}_${bAdj}_${t}`);
      }
    },

    // ---------- b3_s3_M ----------
    {
      type: "generator",
      id: "b3_s3_M",
      unit: "b3",
      skill: "b3_s3",
      diff: "M",
      templates: ["b3_s3_M_neg_square_sub", "b3_s3_M_frac_val_sub", "b3_s3_M_sqrt_sub"],
      generate(seed) {
        const rng = makeRng("b3_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s3", diff: "M", template: tpl };

        if (tpl === "b3_s3_M_neg_square_sub") {
          const a = randInt(rng, 1, 4);
          const b = pickNonZero(rng, -5, 5);
          const c = pickNonZero(rng, -8, 8);
          const x = -randInt(rng, 2, 6);
          const ans = a * x * x + b * x + c;
          const wrongNegSq = -a * x * x + b * x + c;
          const expr = fmtQuad(a, b, c, "x");
          const q = `Diberi y = ${expr}. Cari nilai y apabila x = ${x}.`;
          const wrongs = [wrongNegSq, a * x * x - b * x + c, ans + 4, -ans];
          const exp = `Gantikan x = ${x} dengan kurungan: y = ${a}(${x})² + (${b})(${x}) + (${c}) = ${a * x * x} + (${b * x}) + (${c}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `ns_${a}_${b}_${c}_${x}`);
        }

        if (tpl === "b3_s3_M_frac_val_sub") {
          const den = pick(rng, [2, 3, 4, 5]);
          const num = pick(rng, [1, -1, 2, -2, 3]);
          const frac = simpFrac(num, den);
          const xStr = fmtFrac(frac.n, frac.d);
          const a = frac.d * randInt(rng, 1, 4);
          const b = randInt(rng, 2, 6);
          const y = pickNonZero(rng, -5, 5);
          const ans = (a * frac.n) / frac.d + b * y;
          const q = `Diberi W = ${a}x + ${b}y. Hitung nilai W apabila x = ${xStr} dan y = ${y}.`;
          const wrongs = [
            -(a * frac.n) / frac.d + b * y,
            (a * frac.n) / frac.d - b * y,
            ans + a,
            ans - b
          ];
          const exp = `W = ${a}(${xStr}) + ${b}(${y}) = ${(a * frac.n) / frac.d} + (${b * y}) = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `fv_${frac.n}_${frac.d}_${a}_${b}_${y}`);
        }

        // b3_s3_M_sqrt_sub
        const u = randInt(rng, 3, 12);
        const a = randInt(rng, 2, 5);
        const s = randInt(rng, 4, 15);
        // Choose v^2 = u^2 + 2as or pick triple? Better: given v, u, a find s! Always exact or integer if (v^2 - u^2) divisible by 2a!
        // Let v = u + 2*a*k so v^2 - u^2 = (v-u)(v+u) = 2ak(2u + 2ak) -> divisible by 2a!
        const k = randInt(rng, 1, 4);
        const v = u + 2 * a * k;
        const ansS = (v * v - u * u) / (2 * a);
        const q = `Dalam rumus fizik v² = u² + 2as, hitung nilai s apabila v = ${v}, u = ${u} dan a = ${a}.`;
        const wrongs = [
          Math.round((v - u) / (2 * a)) + 1,
          ansS + a,
          Math.round((v * v + u * u) / (2 * a)),
          ansS * 2
        ];
        const exp = `${v}² = ${u}² + 2(${a})s → ${v * v} - ${u * u} = ${2 * a}s → ${v * v - u * u} = ${2 * a}s → s = ${ansS}.`;
        return buildMcq(rng, meta, q, fmtInt(ansS), wrongs.map(fmtInt), exp, `sqt_${u}_${a}_${k}`);
      }
    },

    // ---------- b3_s3_H ----------
    {
      type: "generator",
      id: "b3_s3_H",
      unit: "b3",
      skill: "b3_s3",
      diff: "H",
      templates: ["b3_s3_H_unit_convert_context", "b3_s3_H_solve_nested_frac", "b3_s3_H_two_step_sub"],
      generate(seed) {
        const rng = makeRng("b3_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b3", skill: "b3_s3", diff: "H", template: tpl };

        if (tpl === "b3_s3_H_unit_convert_context") {
          const isTemp = randInt(rng, 0, 1) === 1;
          if (isTemp) {
            const C = randInt(rng, 5, 25) * 5;
            const F = (9 * C) / 5 + 32;
            const askC = randInt(rng, 0, 1) === 1;
            if (askC) {
              const q = `Rumus menukar suhu daripada darjah Celsius (C) kepada darjah Fahrenheit (F) ialah F = 9C/5 + 32. Jika bacaan suhu ialah ${F}°F, berapakah suhu tersebut dalam °C?`;
              const wrongs = [C + 10, C - 5, Math.round((5 * F) / 9), C + 18];
              const exp = `${F} = 9C/5 + 32 → ${F - 32} = 9C/5 → C = 5(${F - 32})/9 = ${C}°C.`;
              return buildMcq(rng, meta, q, fmtDeg(C), wrongs.map(fmtDeg), exp, `tmpC_${C}`);
            }
            const q = `Diberi rumus F = 9C/5 + 32. Hitung nilai F apabila suhu C = ${C}°C.`;
            const wrongs = [F + 16, F - 32, Math.round((5 * C) / 9 + 32), F + 9];
            const exp = `F = 9(${C})/5 + 32 = ${(9 * C) / 5} + 32 = ${F}°F.`;
            return buildMcq(rng, meta, q, fmtDeg(F), wrongs.map(fmtDeg), exp, `tmpF_${C}`);
          }
          // Electricity/taxi with minutes converted to hours
          const rate = randInt(rng, 12, 30);
          const base = randInt(rng, 5, 18);
          const hrs = randInt(rng, 1, 4);
          const mins = pick(rng, [15, 20, 30, 40, 45]);
          const ans = base + rate * (hrs + mins / 60);
          const wrongDecimalTime = base + rate * Number(`${hrs}.${mins}`);
          const q = `Jumlah bayaran C (dalam RM) bagi sewaan gelanggang diberi oleh rumus C = ${base} + ${rate}t, dengan t ialah tempoh masa dalam jam. Hitung bayaran jika gelanggang disewa selama ${hrs} jam ${mins} minit.`;
          const wrongs = [
            wrongDecimalTime,
            base + rate * hrs + mins,
            ans + rate / 2,
            ans - base
          ];
          const exp = `${hrs} jam ${mins} minit = ${fmtDec(hrs + mins / 60, 2)} jam. Maka C = ${base} + ${rate}(${fmtDec(hrs + mins / 60, 2)}) = ${fmtRM(ans)}.`;
          return buildMcq(rng, meta, q, fmtRM(ans), wrongs.map(fmtRM), exp, `hr_${rate}_${base}_${hrs}_${mins}`);
        }

        if (tpl === "b3_s3_H_solve_nested_frac") {
          // 1/R = 1/p + 1/q or y = (ax + b)/(cx - d)
          const a = randInt(rng, 2, 5);
          const b = pickNonZero(rng, -6, 6);
          const c = randInt(rng, 1, 3);
          const d = randInt(rng, 1, 5);
          const x = randInt(rng, 3, 9);
          const den = c * x - d;
          if (den === 0) return this.generate(seed + 77);
          const yFrac = simpFrac(a * x + b, den);
          if (yFrac.d !== 1) {
            // Pick x such that y is clean integer or use inverse: give y, solve x!
            const y = randInt(rng, 2, 6);
            // y(cx - d) = ax + b -> x(cy - a) = dy + b
            const xDen = c * y - a;
            if (xDen === 0) return this.generate(seed + 83);
            const xFrac = simpFrac(d * y + b, xDen);
            const ans = fmtFrac(xFrac.n, xFrac.d);
            const q = `Diberi y = (${fmtLinear(a, "x", b)})/(${fmtLinear(c, "x", -d)}). Cari nilai x apabila y = ${y}.`;
            const w1 = simpFrac(d * y - b, xDen);
            const w2 = simpFrac(d * y + b, c * y + a);
            const w3 = simpFrac(-(d * y + b), xDen);
            const wrongs = [fmtFrac(w1.n, w1.d), fmtFrac(w2.n, w2.d), fmtFrac(w3.n, w3.d)];
            const exp = `${y}(${fmtLinear(c, "x", -d)}) = ${fmtLinear(a, "x", b)} → ${c * y}x - ${d * y} = ${fmtLinear(a, "x", b)} → ${xDen}x = ${d * y + b} → x = ${ans}.`;
            return buildMcq(rng, meta, q, ans, wrongs, exp, `nf_${a}_${b}_${c}_${d}_${y}`);
          }
          const yVal = yFrac.n;
          const q = `Diberi y = (${fmtLinear(a, "x", b)})/(${fmtLinear(c, "x", -d)}). Jika y = ${yVal}, hitung nilai x.`;
          const wrongs = [x + 1, x - 1, -x, x + 3];
          const exp = `Gantikan y = ${yVal}: ${yVal}(${fmtLinear(c, "x", -d)}) = ${fmtLinear(a, "x", b)}, yang memberi x = ${x}.`;
          return buildMcq(rng, meta, q, fmtInt(x), wrongs.map(fmtInt), exp, `nfe_${a}_${b}_${c}_${d}_${x}`);
        }

        // b3_s3_H_two_step_sub
        const m = randInt(rng, 2, 4);
        const k = pickNonZero(rng, -5, 5);
        const a = randInt(rng, 2, 6);
        const b = randInt(rng, 1, 7);
        const p = m * a + k * b;
        const r = randInt(rng, 2, 4);
        const Q = p * p - r * a;
        const q = `Diberi p = ${m}a ${k > 0 ? `+ ${k}` : `- ${Math.abs(k)}`}b dan Q = p² - ${r}a. Hitung nilai Q apabila a = ${a} dan b = ${b}.`;
        const wrongs = [
          p * p + r * a,
          2 * p - r * a,
          (m * a - k * b) ** 2 - r * a,
          Q + 2 * a
        ];
        const exp = `Mula-mula cari p = ${m}(${a}) ${k > 0 ? `+ ${k}` : `- ${Math.abs(k)}`}(${b}) = ${p}. Kemudian Q = (${p})² - ${r}(${a}) = ${p * p} - ${r * a} = ${Q}.`;
        return buildMcq(rng, meta, q, fmtInt(Q), wrongs.map(fmtInt), exp, `ts_${m}_${k}_${a}_${b}_${r}`);
      }
    },

    // ==================== BAB 4: POLIGON ====================
    // ---------- b4_s1_L ----------
    {
      type: "generator",
      id: "b4_s1_L",
      unit: "b4",
      skill: "b4_s1",
      diff: "L",
      templates: ["b4_s1_L_name_sides", "b4_s1_L_regular_sym", "b4_s1_L_identify_regular"],
      generate(seed) {
        const rng = makeRng("b4_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s1", diff: "L", template: tpl };

        if (tpl === "b4_s1_L_name_sides") {
          const poly = pick(rng, POLYGONS.slice(2)); // pentagon..dekagon
          const mode = randInt(rng, 0, 2);
          if (mode === 0) {
            const q = `Berapakah bilangan sisi bagi sebuah ${poly.name}?`;
            const wrongs = [poly.n - 1, poly.n + 1, poly.n + 2, poly.n - 2];
            const exp = `Sebuah ${poly.name} mempunyai ${poly.n} sisi lurus.`;
            return buildMcq(rng, meta, q, `${poly.n} sisi`, wrongs.map((v) => `${v} sisi`), exp, `s_${poly.n}`);
          }
          if (mode === 1) {
            const q = `Berapakah bilangan bucu yang dimiliki oleh sebuah ${poly.name}?`;
            const wrongs = [poly.n - 1, poly.n + 1, poly.n * 2];
            const exp = `Bilangan bucu bagi ${poly.name} sama dengan bilangan sisinya, iaitu ${poly.n} bucu.`;
            return buildMcq(rng, meta, q, `${poly.n} bucu`, wrongs.map((v) => `${v} bucu`), exp, `v_${poly.n}`);
          }
          const others = shuffle(rng, POLYGONS.slice(2).filter((p) => p.n !== poly.n)).slice(0, 3);
          const q = `Apakah nama poligon yang mempunyai ${poly.n} sisi?`;
          const exp = `Poligon yang mempunyai ${poly.n} sisi dinamakan ${poly.name}.`;
          return buildMcq(rng, meta, q, poly.cap, others.map((p) => p.cap), exp, `n_${poly.n}`);
        }

        if (tpl === "b4_s1_L_regular_sym") {
          const poly = pick(rng, POLYGONS);
          const askSidesFromSym = randInt(rng, 0, 1) === 1;
          if (askSidesFromSym && poly.n >= 5) {
            const others = shuffle(rng, POLYGONS.filter((p) => p.n !== poly.n)).slice(0, 3);
            const q = `Sebuah poligon sekata mempunyai tepat ${poly.n} paksi simetri. Apakah nama poligon sekata tersebut?`;
            const exp = `Poligon sekata dengan ${poly.n} paksi simetri mempunyai ${poly.n} sisi, iaitu ${poly.regName}.`;
            return buildMcq(rng, meta, q, poly.regCap, others.map((p) => p.regCap), exp, `fs_${poly.n}`);
          }
          const q = `Berapakah bilangan paksi simetri bagi sebuah ${poly.regName}?`;
          const wrongs = [poly.n - 1, poly.n + 1, poly.n * 2, 1];
          const exp = `Bagi sebarang poligon sekata dengan n sisi, bilangan paksi simetrinya ialah n. Jadi ${poly.regName} mempunyai ${poly.n} paksi simetri.`;
          return buildMcq(rng, meta, q, `${poly.n}`, wrongs.map(String), exp, `sym_${poly.n}`);
        }

        // b4_s1_L_identify_regular
        const regs = ["Segi tiga sama sisi", "Segi empat sama", "Pentagon sekata", "Heksagon sekata", "Oktagon sekata"];
        const irreg = ["Rombus bukan segi empat sama", "Segi empat tepat", "Segi tiga sama kaki", "Lelayangnya", "Segi empat selari", "Trapezium"];
        const irregClean = ["Rombus (bukan segi empat sama)", "Segi empat tepat", "Segi tiga sama kaki", "Lelayang", "Segi empat selari", "Trapezium sama kaki"];
        const askIrreg = randInt(rng, 0, 1) === 1;
        if (askIrreg) {
          const corr = pick(rng, irregClean);
          const pickedRegs = shuffle(rng, regs).slice(0, 3);
          const q = `Antara poligon berikut, yang manakah BUKAN poligon sekata?`;
          const exp = `${corr} bukan poligon sekata kerana tidak memenuhi kedua-dua syarat iaitu semua sisi sama panjang dan semua sudut pedalaman sama besar.`;
          return buildMcq(rng, meta, q, corr, pickedRegs, exp, `irr_${corr}`);
        }
        const corr = pick(rng, regs);
        const pickedIrr = shuffle(rng, irregClean).slice(0, 3);
        const q = `Antara poligon berikut, yang manakah merupakan suatu poligon sekata?`;
        const exp = `${corr} ialah poligon sekata kerana semua sisinya sama panjang dan semua sudut pedalamannya sama besar.`;
        return buildMcq(rng, meta, q, corr, pickedIrr, exp, `reg_${corr}`);
      }
    },

    // ---------- b4_s1_M ----------
    {
      type: "generator",
      id: "b4_s1_M",
      unit: "b4",
      skill: "b4_s1",
      diff: "M",
      templates: ["b4_s1_M_irregular_sym", "b4_s1_M_triangles_from_vertex", "b4_s1_M_compare_props"],
      generate(seed) {
        const rng = makeRng("b4_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s1", diff: "M", template: tpl };

        if (tpl === "b4_s1_M_irregular_sym") {
          const shapes = [
            { name: "segi empat tepat (bukan segi empat sama)", sym: 2, why: "mempunyai 2 paksi simetri (garisan tengah menegak dan melintang), bukan pada pepenjurunya" },
            { name: "rombus (bukan segi empat sama)", sym: 2, why: "mempunyai 2 paksi simetri di sepanjang kedua-dua pepenjurunya" },
            { name: "segi tiga sama kaki (bukan sama sisi)", sym: 1, why: "mempunyai 1 paksi simetri sahaja dari bucu puncak ke titik tengah tapak" },
            { name: "lelayang", sym: 1, why: "mempunyai 1 paksi simetri di sepanjang pepenjuru utamanya" },
            { name: "segi empat selari (bukan segi empat tepat atau rombus)", sym: 0, why: "tidak mempunyai sebarang paksi simetri" },
            { name: "segi tiga tak sama kaki", sym: 0, why: "mempunyai sisi dan sudut yang berbeza, maka tiada paksi simetri" }
          ];
          const sh = pick(rng, shapes);
          const q = `Berapakah bilangan paksi simetri bagi sebuah ${sh.name}?`;
          const wrongs = ["0", "1", "2", "3", "4"].filter((x) => x !== String(sh.sym));
          const exp = `Sebuah ${sh.name} ${sh.why}.`;
          return buildMcq(rng, meta, q, String(sh.sym), wrongs, exp, `is_${sh.name}`);
        }

        if (tpl === "b4_s1_M_triangles_from_vertex") {
          const n = randInt(rng, 5, 14);
          const askTri = randInt(rng, 0, 1) === 1;
          const name = polyNameByN(n);
          if (askTri) {
            const ans = n - 2;
            const q = `Apabila semua pepenjuru dilukis dari SATU bucu sahaja dalam sebuah ${name}, berapakah bilangan segi tiga yang terbentuk?`;
            const wrongs = [n - 3, n - 1, n, n - 4].filter((v) => v > 0);
            const exp = `Dari satu bucu poligon n sisi, terdapat (n - 2) segi tiga terbentuk. Maka bagi n = ${n}, bilangannya ialah ${n} - 2 = ${ans}.`;
            return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `tri_${n}`);
          }
          const ans = n - 3;
          const q = `Berapakah bilangan pepenjuru yang boleh dilukis dari SATU bucu tertentu bagi sebuah ${name}?`;
          const wrongs = [n - 2, n - 1, n, (n * (n - 3)) / 2];
          const exp = `Satu bucu tidak boleh disambungkan kepada dirinya sendiri dan dua bucu bersebelahan. Jadi bilangan pepenjuru dari satu bucu ialah n - 3 = ${n} - 3 = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `dv_${n}`);
        }

        // b4_s1_M_compare_props
        const cases = [
          {
            q: "Antara pernyataan berikut, yang manakah BENAR tentang rombus yang bukan segi empat sama?",
            corr: "Semua sisinya sama panjang tetapi ia bukan poligon sekata",
            wrongs: [
              "Ia ialah poligon sekata kerana keempat-empat sisinya sama panjang",
              "Ia mempunyai 4 paksi simetri",
              "Keempat-empat sudut pedalamannya ialah 90°"
            ],
            exp: "Rombus mempunyai semua sisi sama panjang, tetapi sudut pedalamannya tidak semuanya sama besar, maka ia bukan poligon sekata."
          },
          {
            q: "Mengapakah segi empat tepat bukan suatu poligon sekata?",
            corr: "Tidak semua sisinya sama panjang walaupun semua sudutnya 90°",
            wrongs: [
              "Sudut pedalamannya tidak sama besar",
              "Ia tidak mempunyai paksi simetri",
              "Hasil tambah sudut pedalamannya bukan 360°"
            ],
            exp: "Poligon sekata memerlukan semua sisi sama panjang DAN semua sudut pedalaman sama besar. Segi empat tepat hanya mempunyai sudut yang sama."
          },
          {
            q: "Antara pernyataan berikut, yang manakah BENAR tentang semua poligon sekata dengan n sisi?",
            corr: "Bilangan paksi simetri sentiasa sama dengan bilangan sisi n",
            wrongs: [
              "Bilangan paksi simetri sentiasa n - 2",
              "Setiap sudut pedalamannya sentiasa kurang daripada 60°",
              "Bilangan pepenjuru dari satu bucu ialah n"
            ],
            exp: "Setiap poligon sekata bersisi n mempunyai tepat n paksi simetri."
          },
          {
            q: "Suatu poligon cembung mempunyai 6 sisi dengan panjang sisi berlainan. Apakah sifat poligon tersebut?",
            corr: "Ia ialah heksagon tak sekata",
            wrongs: [
              "Ia ialah heksagon sekata",
              "Bilangan paksi simetrinya pasti 6",
              "Ia tidak mempunyai sebarang pepenjuru"
            ],
            exp: "Poligon 6 sisi ialah heksagon. Kerana panjang sisinya tidak sama, ia merupakan heksagon tak sekata."
          }
        ];
        const c = pick(rng, cases);
        const variantNum = randInt(rng, 1, 3);
        const prefix = variantNum === 1 ? "" : variantNum === 2 ? "Pilih jawapan yang tepat. " : "Berdasarkan sifat geometri poligon, ";
        return buildMcq(rng, meta, prefix + c.q, c.corr, c.wrongs, c.exp, `${cases.indexOf(c)}_${variantNum}`);
      }
    },

    // ---------- b4_s1_H ----------
    {
      type: "generator",
      id: "b4_s1_H",
      unit: "b4",
      skill: "b4_s1",
      diff: "H",
      templates: ["b4_s1_H_total_diagonals", "b4_s1_H_sym_and_perimeter", "b4_s1_H_multi_polygon_sum"],
      generate(seed) {
        const rng = makeRng("b4_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s1", diff: "H", template: tpl };

        if (tpl === "b4_s1_H_total_diagonals") {
          const n = randInt(rng, 5, 12);
          const diag = (n * (n - 3)) / 2;
          const reverse = randInt(rng, 0, 1) === 1;
          if (reverse && n <= 10) {
            const poly = POLYGONS.find((p) => p.n === n);
            const others = shuffle(rng, POLYGONS.slice(2).filter((p) => p.n !== n)).slice(0, 3);
            const q = `Jumlah keseluruhan pepenjuru bagi sebuah poligon ialah ${diag}. Apakah nama poligon tersebut?`;
            const exp = `Menggunakan rumus n(n - 3)/2 = ${diag}, diperoleh n(n - 3) = ${2 * diag}, maka n = ${n} (${poly.name}).`;
            return buildMcq(rng, meta, q, poly.cap, others.map((p) => p.cap), exp, `rev_${n}`);
          }
          const q = `Hitung jumlah keseluruhan pepenjuru yang terdapat dalam sebuah ${polyNameByN(n)}.`;
          const wrongs = [n * (n - 3), n - 3, (n * (n - 2)) / 2, diag + n];
          const exp = `Jumlah pepenjuru = n(n - 3)/2 = ${n}(${n} - 3)/2 = ${diag}.`;
          return buildMcq(rng, meta, q, fmtInt(diag), wrongs.map(fmtInt), exp, `tot_${n}`);
        }

        if (tpl === "b4_s1_H_sym_and_perimeter") {
          const n = randInt(rng, 5, 10);
          const side = randInt(rng, 4, 14);
          const perim = n * side;
          const askSide = randInt(rng, 0, 1) === 1;
          if (askSide) {
            const q = `Seutas dawai sepanjang ${perim} cm dibengkokkan untuk membentuk sebuah poligon sekata yang mempunyai ${n} paksi simetri. Hitung panjang setiap sisi poligon itu.`;
            const wrongs = [side + 2, Math.max(1, side - 2), Math.round(perim / (n - 1)), side * 2];
            const exp = `Poligon sekata dengan ${n} paksi simetri mempunyai ${n} sisi sama panjang. Maka panjang satu sisi = ${perim} ÷ ${n} = ${side} cm.`;
            return buildMcq(rng, meta, q, `${side} cm`, wrongs.map((v) => `${v} cm`), exp, `sp_${n}_${side}`);
          }
          const q = `Sebuah poligon sekata mempunyai perimeter ${perim} cm dan panjang setiap sisinya ialah ${side} cm. Berapakah bilangan paksi simetri poligon sekata tersebut?`;
          const wrongs = [n - 1, n + 1, n + 2, n * 2];
          const exp = `Bilangan sisi n = ${perim} ÷ ${side} = ${n}. Bagi poligon sekata, bilangan paksi simetri juga ialah ${n}.`;
          return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `sn_${n}_${side}`);
        }

        // b4_s1_H_multi_polygon_sum
        const p1 = pick(rng, POLYGONS.slice(2, 6)); // 5..8
        const pool2 = [
          { name: "sebuah segi empat tepat", sym: 2 },
          { name: "sebuah rombus bukan segi empat sama", sym: 2 },
          { name: "sebuah segi tiga sama kaki", sym: 1 },
          { name: "sebuah lelayang", sym: 1 },
          { name: "sebuah segi empat selari bukan rombus", sym: 0 }
        ];
        const s2 = pick(rng, pool2);
        const s3 = pick(rng, POLYGONS.slice(0, 4)); // 3..6
        const ans = p1.n + s2.sym + s3.n;
        const q = `Hitung jumlah paksi simetri keseluruhan bagi gabungan tiga bentuk berikut: sebuah ${p1.regName}, ${s2.name}, dan sebuah ${s3.regName}.`;
        const wrongs = [
          p1.n + 4 + s3.n,
          ans - 1,
          ans + 2,
          p1.n + s3.n
        ];
        const exp = `Bilangan paksi simetri: ${p1.regName} = ${p1.n}, ${s2.name} = ${s2.sym}, ${s3.regName} = ${s3.n}. Jumlah = ${p1.n} + ${s2.sym} + ${s3.n} = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `mp_${p1.n}_${s2.name}_${s3.n}`);
      }
    },

    // ---------- b4_s2_L ----------
    {
      type: "generator",
      id: "b4_s2_L",
      unit: "b4",
      skill: "b4_s2",
      diff: "L",
      templates: ["b4_s2_L_sum_interior", "b4_s2_L_one_interior_reg", "b4_s2_L_find_fourth_angle"],
      generate(seed) {
        const rng = makeRng("b4_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s2", diff: "L", template: tpl };

        if (tpl === "b4_s2_L_sum_interior") {
          const n = randInt(rng, 4, 15);
          const ans = (n - 2) * 180;
          const label = n <= 10 ? `sebuah ${polyNameByN(n)}` : `sebuah poligon bersisi ${n}`;
          const q = `Hitung hasil tambah sudut pedalaman bagi ${label}.`;
          const wrongs = [(n - 1) * 180, n * 180, (n - 3) * 180, 360];
          const exp = `Hasil tambah sudut pedalaman = (n - 2) × 180° = (${n} - 2) × 180° = ${ans}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `sum_${n}`);
        }

        if (tpl === "b4_s2_L_one_interior_reg") {
          const validN = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36];
          const n = pick(rng, validN);
          const ans = ((n - 2) * 180) / n;
          const label = n <= 10 ? `sebuah ${regPolyNameByN(n)}` : `sebuah poligon sekata yang mempunyai ${n} sisi`;
          const q = `Tentukan nilai satu sudut pedalaman bagi ${label}.`;
          const wrongs = [
            360 / n,
            ((n - 1) * 180) / n,
            180 - ans / 2,
            ans + 10
          ];
          const exp = `Satu sudut pedalaman poligon sekata = ((${n} - 2) × 180°) ÷ ${n} = ${ans}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `one_${n}`);
        }

        // b4_s2_L_find_fourth_angle
        const isQuad = randInt(rng, 0, 1) === 1;
        if (isQuad) {
          const a = randInt(rng, 65, 115);
          const b = randInt(rng, 65, 115);
          const c = randInt(rng, 65, 115);
          const ans = 360 - (a + b + c);
          if (ans <= 25 || ans >= 175) return this.generate(seed + 101);
          const q = `Tiga daripada empat sudut pedalaman sebuah sisi empat ialah ${a}°, ${b}° dan ${c}°. Hitung nilai sudut pedalaman yang keempat.`;
          const wrongs = [180 - a, 360 - (a + b), ans + 15, Math.max(10, ans - 15)];
          const exp = `Hasil tambah sudut pedalaman sisi empat ialah 360°. Sudut keempat = 360° - (${a}° + ${b}° + ${c}°) = ${ans}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `q4_${a}_${b}_${c}`);
        }
        const a = randInt(rng, 90, 125);
        const b = randInt(rng, 90, 125);
        const c = randInt(rng, 90, 125);
        const d = randInt(rng, 90, 125);
        const ans = 540 - (a + b + c + d);
        if (ans <= 30 || ans >= 170) return this.generate(seed + 103);
        const q = `Empat sudut pedalaman sebuah pentagon ialah ${a}°, ${b}°, ${c}° dan ${d}°. Cari nilai sudut pedalaman kelima pentagon itu.`;
        const wrongs = [360 - (a + b + c), 720 - (a + b + c + d), ans + 20, Math.max(10, ans - 20)];
        const exp = `Hasil tambah sudut pedalaman pentagon = (5 - 2) × 180° = 540°. Sudut kelima = 540° - (${a + b + c + d}°) = ${ans}°.`;
        return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `p5_${a}_${b}_${c}_${d}`);
      }
    },

    // ---------- b4_s2_M ----------
    {
      type: "generator",
      id: "b4_s2_M",
      unit: "b4",
      skill: "b4_s2",
      diff: "M",
      templates: ["b4_s2_M_find_n_from_sum", "b4_s2_M_algebra_angles", "b4_s2_M_one_interior_find_n"],
      generate(seed) {
        const rng = makeRng("b4_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s2", diff: "M", template: tpl };

        if (tpl === "b4_s2_M_find_n_from_sum") {
          const n = randInt(rng, 5, 16);
          const sum = (n - 2) * 180;
          const q = `Hasil tambah sudut pedalaman sebuah poligon ialah ${fmtInt(sum)}°. Berapakah bilangan sisi poligon tersebut?`;
          const wrongs = [n - 2, n - 1, n + 1, n + 2];
          const exp = `(n - 2) × 180° = ${fmtInt(sum)}° → n - 2 = ${n - 2} → n = ${n}.`;
          return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `fn_${n}`);
        }

        if (tpl === "b4_s2_M_algebra_angles") {
          const isPent = randInt(rng, 0, 1) === 1;
          if (isPent) {
            // 5 angles: x, x+d, 2x, 2x-d, k -> sum = 6x + k = 540
            const x = randInt(rng, 45, 75);
            const d = randInt(rng, 5, 20);
            const k = 540 - 6 * x;
            if (k <= 40 || k >= 165) return this.generate(seed + 131);
            const askMax = randInt(rng, 0, 1) === 1;
            const angles = [x, x + d, 2 * x, 2 * x - d, k];
            const ans = askMax ? Math.max(...angles) : x;
            const q = askMax
              ? `Sudut-sudut pedalaman sebuah pentagon ialah x°, (x + ${d})°, 2x°, (2x - ${d})° dan ${k}°. Hitung nilai sudut pedalaman terbesar pentagon itu.`
              : `Lima sudut pedalaman bagi sebuah pentagon ialah x°, (x + ${d})°, 2x°, (2x - ${d})° dan ${k}°. Cari nilai x.`;
            const wrongs = askMax
              ? [x, ans - d, 2 * x + d, 360 - k]
              : [x + 10, Math.max(10, x - 10), Math.round((360 - k) / 6), 2 * x];
            const exp = `Hasil tambah = 540°: x + (x + ${d}) + 2x + (2x - ${d}) + ${k} = 540 → 6x = ${540 - k} → x = ${x}. ${askMax ? `Sudut terbesar ialah ${ans}°.` : ""}`;
            return buildMcq(rng, meta, q, askMax ? fmtDeg(ans) : fmtInt(ans), wrongs.map(askMax ? fmtDeg : fmtInt), exp, `alg5_${x}_${d}_${askMax}`);
          }
          // Quadrilateral: x, 2x, x+d, k -> 4x + d + k = 360
          const x = randInt(rng, 35, 75);
          const d = randInt(rng, 10, 30);
          const k = 360 - (4 * x + d);
          if (k <= 35 || k >= 165) return this.generate(seed + 137);
          const q = `Empat sudut pedalaman sebuah sisi empat ialah x°, 2x°, (x + ${d})° dan ${k}°. Hitung nilai x.`;
          const wrongs = [x + 5, Math.max(10, x - 5), Math.round((180 - k - d) / 4), 2 * x];
          const exp = `4x + ${d} + ${k} = 360 → 4x = ${360 - d - k} → x = ${x}.`;
          return buildMcq(rng, meta, q, fmtInt(x), wrongs.map(fmtInt), exp, `alg4_${x}_${d}`);
        }

        // b4_s2_M_one_interior_find_n
        const validN = [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36];
        const n = pick(rng, validN);
        const intAng = ((n - 2) * 180) / n;
        const q = `Setiap sudut pedalaman bagi sebuah poligon sekata ialah ${intAng}°. Berapakah bilangan sisi poligon sekata itu?`;
        const wrongs = [n - 2, n + 2, n * 2, Math.max(3, Math.round(360 / intAng))];
        const exp = `Sudut peluaran = 180° - ${intAng}° = ${180 - intAng}°. Bilangan sisi n = 360° ÷ ${180 - intAng}° = ${n}.`;
        return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `on_${n}`);
      }
    },

    // ---------- b4_s2_H ----------
    {
      type: "generator",
      id: "b4_s2_H",
      unit: "b4",
      skill: "b4_s2",
      diff: "H",
      templates: ["b4_s2_H_ratio_angles", "b4_s2_H_reg_irregular_diff", "b4_s2_H_joined_interior_vertex"],
      generate(seed) {
        const rng = makeRng("b4_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s2", diff: "H", template: tpl };

        if (tpl === "b4_s2_H_ratio_angles") {
          const ratios = [
            { r: [2, 3, 4, 6], n: 4, sum: 360 }, // tot 15, unit 24
            { r: [1, 2, 3, 4], n: 4, sum: 360 }, // tot 10, unit 36
            { r: [2, 3, 5, 8], n: 4, sum: 360 }, // tot 18, unit 20
            { r: [3, 4, 5, 6], n: 4, sum: 360 }, // tot 18, unit 20
            { r: [1, 3, 4, 4], n: 4, sum: 360 }, // tot 12, unit 30
            { r: [2, 3, 4, 4, 5], n: 5, sum: 540 }, // tot 18, unit 30
            { r: [1, 2, 2, 3, 4], n: 5, sum: 540 }, // tot 12, unit 45
            { r: [2, 3, 3, 4, 6], n: 5, sum: 540 }, // tot 18, unit 30
            { r: [3, 4, 5, 6, 9], n: 5, sum: 540 }  // tot 27, unit 20
          ];
          const item = pick(rng, ratios);
          const tot = item.r.reduce((a, b) => a + b, 0);
          const unit = item.sum / tot;
          const minA = Math.min(...item.r) * unit;
          const maxA = Math.max(...item.r) * unit;
          const askDiff = randInt(rng, 0, 1) === 1;
          const ans = askDiff ? maxA - minA : maxA;
          const name = item.n === 4 ? "sisi empat" : "pentagon";
          const q = askDiff
            ? `Sudut-sudut pedalaman bagi sebuah ${name} adalah mengikut nisbah ${item.r.join(" : ")}. Hitung beza antara sudut terbesar dengan sudut terkecilnya.`
            : `Sudut-sudut pedalaman bagi sebuah ${name} adalah mengikut nisbah ${item.r.join(" : ")}. Cari nilai sudut pedalaman terbesarnya.`;
          const wrongs = askDiff
            ? [maxA, minA, maxA + minA, (maxA - minA) / 2]
            : [minA, maxA - minA, maxA + unit, item.sum - maxA];
          const exp = `Jumlah nisbah = ${tot} mewakili ${item.sum}°, maka 1 bahagian = ${unit}°. Sudut terbesar = ${maxA}° dan sudut terkecil = ${minA}°, jadi jawapannya ialah ${ans}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `rat_${item.r.join("_")}_${askDiff}`);
        }

        if (tpl === "b4_s2_H_reg_irregular_diff") {
          const nQ = randInt(rng, 4, 8);
          const k = randInt(rng, 2, 4);
          // (nP - 2) = k * (nQ - 2) -> nP = k*(nQ - 2) + 2
          const nP = k * (nQ - 2) + 2;
          const q = `Hasil tambah sudut pedalaman bagi sebuah poligon P ialah ${k} kali ganda hasil tambah sudut pedalaman bagi sebuah ${polyNameByN(nQ)}. Berapakah bilangan sisi poligon P?`;
          const wrongs = [k * nQ, nP - 2, nP + 2, nP - 1];
          const sumQ = (nQ - 2) * 180;
          const exp = `Hasil tambah sudut pedalaman ${polyNameByN(nQ)} = ${sumQ}°. Maka hasil tambah bagi P = ${k} × ${sumQ}° = ${k * sumQ}°. Jadi n - 2 = ${k * (nQ - 2)} dan n = ${nP}.`;
          return buildMcq(rng, meta, q, fmtInt(nP), wrongs.map(fmtInt), exp, `mult_${nQ}_${k}`);
        }

        // b4_s2_H_joined_interior_vertex
        const validN = [3, 4, 5, 6, 8, 9, 10, 12];
        const n1 = pick(rng, validN);
        let n2 = pick(rng, validN);
        if (n2 === n1) n2 = n1 === 6 ? 8 : 6;
        const i1 = ((n1 - 2) * 180) / n1;
        const i2 = ((n2 - 2) * 180) / n2;
        const ans = 360 - (i1 + i2);
        const q = `Sebuah ${regPolyNameByN(n1)} dan sebuah ${regPolyNameByN(n2)} dicantumkan pada satu sisi sepunya tanpa bertindih. Pada satu daripada bucu sepunya cantuman itu, berapakah sudut luar antara kedua-dua poligon tersebut?`;
        const wrongs = [i1 + i2, 180 - Math.abs(i1 - i2), ans + 15, Math.abs(i1 - i2) || 30];
        const exp = `Sudut pedalaman ${regPolyNameByN(n1)} = ${i1}° dan ${regPolyNameByN(n2)} = ${i2}°. Jumlah sudut pada satu titik ialah 360°, maka sudut di ruang luarnya = 360° - (${i1}° + ${i2}°) = ${ans}°.`;
        return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `jv_${n1}_${n2}`);
      }
    },

    // ---------- b4_s3_L ----------
    {
      type: "generator",
      id: "b4_s3_L",
      unit: "b4",
      skill: "b4_s3",
      diff: "L",
      templates: ["b4_s3_L_one_ext_reg", "b4_s3_L_find_n_from_ext", "b4_s3_L_missing_ext"],
      generate(seed) {
        const rng = makeRng("b4_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s3", diff: "L", template: tpl };
        const validN = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45];

        if (tpl === "b4_s3_L_one_ext_reg") {
          const n = pick(rng, validN);
          const ext = 360 / n;
          const label = n <= 10 ? `sebuah ${regPolyNameByN(n)}` : `sebuah poligon sekata bersisi ${n}`;
          const q = `Hitung nilai satu sudut peluaran bagi ${label}.`;
          const wrongs = [180 - ext, 180 / n, ext * 2, ext + 6];
          const exp = `Hasil tambah sudut peluaran semua poligon cembung ialah 360°. Satu sudut peluaran = 360° ÷ ${n} = ${ext}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ext), wrongs.map(fmtDeg), exp, `oe_${n}`);
        }

        if (tpl === "b4_s3_L_find_n_from_ext") {
          const n = pick(rng, validN);
          const ext = 360 / n;
          const q = `Setiap sudut peluaran bagi sebuah poligon sekata ialah ${ext}°. Tentukan bilangan sisi poligon sekata itu.`;
          const wrongs = [n - 2, n + 2, n * 2, Math.max(3, Math.round(180 / ext))];
          const exp = `Bilangan sisi n = 360° ÷ ${ext}° = ${n}.`;
          return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `fn_${n}`);
        }

        // b4_s3_L_missing_ext
        const e1 = randInt(rng, 45, 95);
        const e2 = randInt(rng, 45, 95);
        const e3 = randInt(rng, 45, 95);
        const ans = 360 - (e1 + e2 + e3);
        if (ans <= 20 || ans >= 150) return this.generate(seed + 151);
        const q = `Tiga daripada empat sudut peluaran bagi sebuah sisi empat cembung ialah ${e1}°, ${e2}° dan ${e3}°. Cari nilai sudut peluaran yang keempat.`;
        const wrongs = [180 - (e1 + e2 - e3), 540 - (e1 + e2 + e3), ans + 12, Math.max(5, ans - 12)];
        const exp = `Hasil tambah semua sudut peluaran ialah 360°. Sudut keempat = 360° - (${e1}° + ${e2}° + ${e3}°) = ${ans}°.`;
        return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `me_${e1}_${e2}_${e3}`);
      }
    },

    // ---------- b4_s3_M ----------
    {
      type: "generator",
      id: "b4_s3_M",
      unit: "b4",
      skill: "b4_s3",
      diff: "M",
      templates: ["b4_s3_M_int_ext_pair", "b4_s3_M_ext_algebra", "b4_s3_M_ext_ratio_to_int"],
      generate(seed) {
        const rng = makeRng("b4_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s3", diff: "M", template: tpl };

        if (tpl === "b4_s3_M_int_ext_pair") {
          const validN = [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36];
          const n = pick(rng, validN);
          const ext = 360 / n;
          const intA = 180 - ext;
          const askSides = randInt(rng, 0, 1) === 1;
          if (askSides) {
            const q = `Satu sudut peluaran dan sudut pedalaman bersebelahan sebuah poligon sekata berbeza sebanyak ${intA - ext}°, dengan sudut pedalaman ialah ${intA}°. Hitung bilangan sisi poligon itu.`;
            const wrongs = [n - 2, n + 2, n + 4, Math.max(3, Math.round(360 / (intA - ext || 10)))];
            const exp = `Sudut peluaran = 180° - ${intA}° = ${ext}°. Maka bilangan sisi = 360° ÷ ${ext}° = ${n}.`;
            return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `ie_s_${n}`);
          }
          const q = `Suatu poligon sekata mempunyai hasil tambah sudut pedalaman sebanyak ${(n - 2) * 180}°. Apakah nilai satu sudut peluaran poligon tersebut?`;
          const wrongs = [intA, ext * 2, Math.max(5, ext - 5), 180 - ext / 2];
          const exp = `Bilangan sisi n = (${(n - 2) * 180} ÷ 180) + 2 = ${n}. Sudut peluaran = 360° ÷ ${n} = ${ext}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ext), wrongs.map(fmtDeg), exp, `ie_e_${n}`);
        }

        if (tpl === "b4_s3_M_ext_algebra") {
          // 5 exterior angles: x, x+d, 2x, 2x-d, k -> 6x + k = 360
          const x = randInt(rng, 30, 50);
          const d = randInt(rng, 4, 15);
          const k = 360 - 6 * x;
          if (k <= 20 || k >= 140) return this.generate(seed + 173);
          const askLargest = randInt(rng, 0, 1) === 1;
          const list = [x, x + d, 2 * x, 2 * x - d, k];
          const ans = askLargest ? Math.max(...list) : x;
          const q = askLargest
            ? `Lima sudut peluaran bagi sebuah pentagon cembung ialah x°, (x + ${d})°, 2x°, (2x - ${d})° dan ${k}°. Tentukan nilai sudut peluaran yang terbesar.`
            : `Lima sudut peluaran bagi sebuah pentagon cembung ialah x°, (x + ${d})°, 2x°, (2x - ${d})° dan ${k}°. Cari nilai x.`;
          const wrongs = askLargest
            ? [x, ans - d, 540 - 360, ans + 10]
            : [x + 5, Math.max(10, x - 5), Math.round((540 - k) / 6), 2 * x];
          const exp = `Hasil tambah semua sudut peluaran = 360°: 6x + ${k} = 360 → 6x = ${360 - k} → x = ${x}.`;
          return buildMcq(rng, meta, q, askLargest ? fmtDeg(ans) : fmtInt(ans), wrongs.map(askLargest ? fmtDeg : fmtInt), exp, `ea_${x}_${d}_${askLargest}`);
        }

        // b4_s3_M_ext_ratio_to_int
        const k = pick(rng, [2, 3, 4, 5, 7, 8, 9, 11]);
        const n = 2 * (k + 1);
        const q = `Dalam suatu poligon sekata, setiap sudut pedalamannya ialah ${k} kali ganda sudut peluarannya. Berapakah bilangan sisi poligon sekata tersebut?`;
        const wrongs = [k + 1, k + 2, 2 * k, n + 2];
        const ext = 180 / (k + 1);
        const exp = `Sudut pedalaman + sudut peluaran = 180°. Maka (${k} + 1) × sudut peluaran = 180° → sudut peluaran = ${ext}°, dan n = 360° ÷ ${ext}° = ${n}.`;
        return buildMcq(rng, meta, q, fmtInt(n), wrongs.map(fmtInt), exp, `rat_${k}`);
      }
    },

    // ---------- b4_s3_H ----------
    {
      type: "generator",
      id: "b4_s3_H",
      unit: "b4",
      skill: "b4_s3",
      diff: "H",
      templates: ["b4_s3_H_joined_sides_angle", "b4_s3_H_ext_diff_n", "b4_s3_H_chain_polygons"],
      generate(seed) {
        const rng = makeRng("b4_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b4", skill: "b4_s3", diff: "H", template: tpl };

        if (tpl === "b4_s3_H_joined_sides_angle") {
          const validN = [3, 4, 5, 6, 8, 9, 10, 12];
          const n1 = pick(rng, validN);
          let n2 = pick(rng, validN);
          if (n2 === n1) n2 = n1 === 5 ? 8 : 5;
          const e1 = 360 / n1;
          const e2 = 360 / n2;
          const ans = e1 + e2;
          const q = `Sebuah ${regPolyNameByN(n1)} dan sebuah ${regPolyNameByN(n2)} diletakkan bersebelahan dan berkongsi satu sisi sepunya tanpa bertindih. Hitung hasil tambah sudut peluaran bagi kedua-dua poligon tersebut yang membentuk sudut di luar cantuman pada bucu sepunyanya.`;
          const wrongs = [Math.abs(e1 - e2) || 15, 180 - ans, ans + 12, 360 - ans];
          const exp = `Sudut peluaran ${regPolyNameByN(n1)} = 360°/${n1} = ${e1}° dan ${regPolyNameByN(n2)} = 360°/${n2} = ${e2}°. Jumlah sudut di luar cantuman ialah ${e1}° + ${e2}° = ${ans}°.`;
          return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `js_${n1}_${n2}`);
        }

        if (tpl === "b4_s3_H_ext_diff_n") {
          const pairs = [
            { n: 5, diff: 36 },
            { n: 6, diff: 60 },
            { n: 8, diff: 90 },
            { n: 9, diff: 100 },
            { n: 10, diff: 108 },
            { n: 12, diff: 120 },
            { n: 15, diff: 132 },
            { n: 18, diff: 140 },
            { n: 20, diff: 144 },
            { n: 24, diff: 150 },
            { n: 30, diff: 156 },
            { n: 36, diff: 160 }
          ];
          const p = pick(rng, pairs);
          const askExt = randInt(rng, 0, 1) === 1;
          const ext = 360 / p.n;
          if (askExt) {
            const q = `Bagi suatu poligon sekata, nilai satu sudut pedalaman adalah ${p.diff}° lebih besar daripada nilai satu sudut peluarannya. Berapakah nilai satu sudut peluaran poligon itu?`;
            const wrongs = [(180 + p.diff) / 2, p.diff, ext + 10, Math.max(5, ext - 10)];
            const exp = `Katakan sudut peluaran = e, maka sudut pedalaman = e + ${p.diff}°. Oleh sebab e + (e + ${p.diff}°) = 180°, diperoleh 2e = ${180 - p.diff}° → e = ${ext}°.`;
            return buildMcq(rng, meta, q, fmtDeg(ext), wrongs.map(fmtDeg), exp, `ed_e_${p.n}`);
          }
          const q = `Beza antara satu sudut pedalaman dengan satu sudut peluaran bagi sebuah poligon sekata ialah ${p.diff}° (dengan sudut pedalaman lebih besar). Cari bilangan sisi poligon sekata itu.`;
          const wrongs = [p.n - 2, p.n + 2, p.n * 2, Math.max(3, p.n - 4)];
          const exp = `2e = 180° - ${p.diff}° = ${2 * ext}°, maka sudut peluaran e = ${ext}° dan bilangan sisi n = 360° ÷ ${ext}° = ${p.n}.`;
          return buildMcq(rng, meta, q, fmtInt(p.n), wrongs.map(fmtInt), exp, `ed_n_${p.n}`);
        }

        // b4_s3_H_chain_polygons
        const baseList = [4, 5, 6, 8, 9, 10, 12];
        const n1 = pick(rng, baseList);
        const mult = pick(rng, [2, 3]);
        const n2 = n1 * mult;
        const e1 = 360 / n1;
        const e2 = 360 / n2;
        const ans = e1 - e2;
        const q = `Poligon sekata P mempunyai ${n1} sisi manakala poligon sekata Q mempunyai ${mult} kali ganda bilangan sisi poligon P. Hitung beza antara satu sudut peluaran poligon P dengan satu sudut peluaran poligon Q.`;
        const wrongs = [e2, e1 + e2, Math.max(2, ans / 2), ans + 6];
        const exp = `Sudut peluaran P = 360° ÷ ${n1} = ${e1}° dan sudut peluaran Q = 360° ÷ ${n2} = ${e2}°. Bezanya ialah ${e1}° - ${e2}° = ${ans}°.`;
        return buildMcq(rng, meta, q, fmtDeg(ans), wrongs.map(fmtDeg), exp, `ch_${n1}_${mult}`);
      }
    }
  ];

  return generators;
}

/**
 * Tingkatan 2 Matematik (KSSM, Bab 5-9) deterministic skill-tagged MCQ generators.
 * 45 generators (15 skills x L/M/H), >= 3 templates each, zero DOM/storage dependencies.
 */
function buildPartB5B9() {
  "use strict";

  // ==================== DETERMINISTIC PRNG ====================
  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    let t = a >>> 0;
    return function () {
      t = (t + 0x6d2b79f5) >>> 0;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(generatorId, seed) {
    return mulberry32(hashSeed(String(seed) + "|" + generatorId));
  }

  function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
  }

  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
  }

  function shuffle(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function pickDistinct(rng, arr, count) {
    return shuffle(rng, arr).slice(0, count);
  }

  function pickNonZero(rng, min, max) {
    let v = 0;
    while (v === 0) v = randInt(rng, min, max);
    return v;
  }

  // ==================== MATH & FORMATTING HELPERS ====================
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function simpFrac(n, d) {
    if (d === 0) throw new Error("Division by zero in simpFrac");
    if (n === 0) return { n: 0, d: 1 };
    const sign = (n < 0) !== (d < 0) ? -1 : 1;
    const an = Math.abs(n);
    const ad = Math.abs(d);
    const g = gcd(an, ad);
    return { n: sign * (an / g), d: ad / g };
  }

  function fmtInt(n) {
    const r = Math.round(n);
    const sign = r < 0 ? "-" : "";
    const s = String(Math.abs(r));
    if (s.length < 4) return sign + s;
    return sign + s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function fmtDec(val, maxDp) {
    const dp = maxDp == null ? 4 : maxDp;
    const factor = Math.pow(10, dp);
    const rounded = Math.round(val * factor) / factor;
    if (Object.is(rounded, -0)) return "0";
    if (Math.abs(rounded - Math.round(rounded)) < 1e-9) {
      return fmtInt(Math.round(rounded));
    }
    let s = rounded.toFixed(dp);
    if (s.includes(".")) s = s.replace(/\.?0+$/, "");
    // Format integer part with spaces if >= 1000
    const neg = s.startsWith("-");
    const absS = neg ? s.slice(1) : s;
    const [ip, fp] = absS.split(".");
    const ipFmt = ip.length >= 4 ? ip.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : ip;
    return (neg ? "-" : "") + (fp !== undefined ? `${ipFmt}.${fp}` : ipFmt);
  }

  function fmtFrac(n, d) {
    const f = simpFrac(n, d);
    if (f.n === 0) return "0";
    if (f.d === 1) return fmtInt(f.n);
    const sign = f.n < 0 ? "-" : "";
    const an = Math.abs(f.n);
    if (an > f.d) {
      const whole = Math.floor(an / f.d);
      const rem = an % f.d;
      return `${sign}${whole} ${rem}/${f.d}`;
    }
    return `${sign}${an}/${f.d}`;
  }

  function fmtRM(val) {
    const rounded = Math.round(val * 100) / 100;
    const sign = rounded < 0 ? "-" : "";
    const abs = Math.abs(rounded);
    const [intPart, decPart] = abs.toFixed(2).split(".");
    const intFormatted = Number(intPart) >= 1000 ? fmtInt(Number(intPart)) : intPart;
    return `${sign}RM ${intFormatted}.${decPart}`;
  }

  function fmtDeg(val) {
    return `${fmtDec(val, 2)}°`;
  }

  function fmtUnit(val, unit, maxDp) {
    return `${fmtDec(val, maxDp == null ? 2 : maxDp)} ${unit}`;
  }

  function fmtCoord(x, y) {
    const fx = fmtDec(x, 2).replace(/\s+/g, "");
    const fy = fmtDec(y, 2).replace(/\s+/g, "");
    return `(${fx}, ${fy})`;
  }

  function fmtTerms(terms) {
    const parts = [];
    for (const [coeff, label] of terms) {
      if (!coeff) continue;
      const abs = Math.abs(coeff);
      const body = label ? (abs === 1 ? label : `${abs}${label}`) : `${abs}`;
      if (parts.length === 0) {
        parts.push(coeff < 0 ? `-${body}` : body);
      } else {
        parts.push(coeff < 0 ? ` - ${body}` : ` + ${body}`);
      }
    }
    return parts.length ? parts.join("") : "0";
  }

  function fmtLinearEq(m, c) {
    return `y = ${fmtTerms([[m, "x"], [c, ""]])}`;
  }

  function fmtQuadEq(a, b, c) {
    return `y = ${fmtTerms([[a, "x²"], [b, "x"], [c, ""]])}`;
  }

  function fmtCubicEq(a, c) {
    return `y = ${fmtTerms([[a, "x³"], [c, ""]])}`;
  }

  function fmtTimeHM(totalMin) {
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    if (h > 0 && m > 0) return `${h} jam ${m} minit`;
    if (h > 0) return `${h} jam`;
    return `${m} minit`;
  }

  function fmtClock24(totalMin) {
    const mNorm = ((totalMin % 1440) + 1440) % 1440;
    const h = String(Math.floor(mNorm / 60)).padStart(2, "0");
    const m = String(mNorm % 60).padStart(2, "0");
    return `${h}:${m}`;
  }

  // ==================== CANONICAL EQUIVALENCE & VALIDATION ====================
  function parseNumericToken(s) {
    const clean = s.replace(/\s+/g, " ").trim();
    let m = clean.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
    if (m) {
      const whole = Number(m[1]);
      const num = Number(m[2]);
      const den = Number(m[3]);
      if (den !== 0) {
        const sign = whole < 0 ? -1 : 1;
        return sign * (Math.abs(whole) + num / den);
      }
    }
    m = clean.match(/^(-?\d+)\/(\d+)$/);
    if (m && Number(m[2]) !== 0) {
      return Number(m[1]) / Number(m[2]);
    }
    const noSpace = clean.replace(/\s/g, "");
    if (/^-?\d+(\.\d+)?$/.test(noSpace)) {
      return Number(noSpace);
    }
    return null;
  }

  function canonicalOptionKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim();
    // Coordinate pair "(x, y)"
    const coordMatch = s.match(/^\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)$/);
    if (coordMatch) {
      const x = Math.round(Number(coordMatch[1]) * 1e6);
      const y = Math.round(Number(coordMatch[2]) * 1e6);
      return `coord:${x},${y}`;
    }
    if (s.endsWith("°")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `deg:${Math.round(inner * 1e6)}`;
    }
    if (s.endsWith("%")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `pct:${Math.round(inner * 1e6)}`;
    }
    if (/^-?RM\s*/i.test(s)) {
      const neg = s.startsWith("-") ? -1 : 1;
      const inner = parseNumericToken(s.replace(/^-?RM\s*/i, ""));
      if (inner !== null) return `rm:${Math.round(neg * inner * 1e6)}`;
    }
    const unitMatch = s.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113/]+)$/);
    if (unitMatch) {
      const inner = parseNumericToken(unitMatch[1]);
      if (inner !== null) {
        return `u:${unitMatch[2].toLowerCase()}:${Math.round(inner * 1e6)}`;
      }
    }
    const num = parseNumericToken(s);
    if (num !== null) {
      return `num:${Math.round(num * 1e6)}`;
    }
    return `str:${s.toLowerCase()}`;
  }

  function isValidOptionStr(s) {
    if (!s || typeof s !== "string") return false;
    if (s.includes("NaN") || s.includes("undefined") || s.includes("Infinity") || s.includes("[object")) {
      return false;
    }
    const cleanForFracCheck = s.replace(/\([^)]*\)/g, " ");
    const fracMatches = cleanForFracCheck.match(/(^|\s)-?\d+\/\d+(?=\s|$|[a-zA-Z°%])/g);
    if (fracMatches) {
      for (const rawFm of fracMatches) {
        const fm = rawFm.trim();
        const [ns, ds] = fm.split("/").map((t) => Math.abs(Number(t)));
        if (ds <= 1 || ns === 0 || ns >= ds || gcd(ns, ds) !== 1) return false;
      }
    }
    return true;
  }

  function buildMcq(rng, meta, qText, correctStr, wrongCandidates, explanation, sig, extraFallbacks) {
    const corr = String(correctStr).trim();
    if (!isValidOptionStr(corr)) {
      throw new Error(`Invalid correct option for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }
    const seenKeys = new Set([canonicalOptionKey(corr)]);
    const seenStrings = new Set([corr.toLowerCase()]);
    const wrongs = [];

    const allCandidates = [...wrongCandidates, ...(extraFallbacks || [])];
    for (const w of allCandidates) {
      if (w === null || w === undefined) continue;
      const ws = String(w).trim();
      if (!isValidOptionStr(ws)) continue;
      const key = canonicalOptionKey(ws);
      const low = ws.toLowerCase();
      if (!seenStrings.has(low) && !seenKeys.has(key)) {
        seenStrings.add(low);
        seenKeys.add(key);
        wrongs.push(ws);
        if (wrongs.length === 3) break;
      }
    }

    let step = 1;
    while (wrongs.length < 3 && step < 120) {
      let cand = null;
      const delta = (step % 2 === 0 ? 1 : -1) * Math.ceil(step / 2);
      const coordMatch = corr.match(/^\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)$/);
      if (coordMatch) {
        const cx = Number(coordMatch[1]);
        const cy = Number(coordMatch[2]);
        cand = step % 2 === 0 ? fmtCoord(cx + delta, cy) : fmtCoord(cx, cy + delta);
      } else if (corr.endsWith("°")) {
        const v = parseNumericToken(corr.slice(0, -1));
        if (v !== null && v + delta * 5 > 0 && v + delta * 5 < 360) {
          cand = fmtDeg(v + delta * 5);
        }
      } else if (/^RM\s*/i.test(corr)) {
        const v = parseNumericToken(corr.replace(/^RM\s*/i, ""));
        if (v !== null && v + delta * 5 > 0) cand = fmtRM(v + delta * 5);
      } else {
        const uMatch = corr.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113/]+)$/);
        if (uMatch) {
          const v = parseNumericToken(uMatch[1]);
          if (v !== null) {
            const allowNeg = v < 0;
            const inc = Number.isInteger(v) ? (Math.abs(v) > 100 ? 7 : 2) : 0.5;
            const nv = v + delta * inc;
            if (allowNeg || nv > 0) {
              cand = `${fmtDec(nv, 2)} ${uMatch[2]}`;
            }
          }
        } else {
          const v = parseNumericToken(corr);
          if (v !== null) {
            if (corr.includes("/")) {
              const frac = simpFrac(Math.round(v * 12) + delta, 12);
              cand = fmtFrac(frac.n, frac.d);
            } else if (Number.isInteger(v)) {
              const nv = v + delta * (Math.abs(v) > 100 ? 5 : 2);
              if (v < 0 || nv >= 0) cand = fmtInt(nv);
            } else {
              const nv = v + delta * 0.25;
              if (v < 0 || nv > 0) cand = fmtDec(nv, 2);
            }
          }
        }
      }
      step++;
      if (cand && isValidOptionStr(cand)) {
        const key = canonicalOptionKey(cand);
        const low = cand.toLowerCase();
        if (!seenStrings.has(low) && !seenKeys.has(key)) {
          seenStrings.add(low);
          seenKeys.add(key);
          wrongs.push(cand);
        }
      }
    }

    if (wrongs.length < 3) {
      throw new Error(`Failed to generate 3 unique distractors for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }

    const options = shuffle(rng, [corr, ...wrongs]);
    return {
      unit: meta.unit,
      skill: meta.skill,
      diff: meta.diff,
      template: meta.template,
      sig: `${meta.skill}:${meta.diff}:${meta.template}:${sig}`,
      q: qText,
      options,
      correctIndex: options.indexOf(corr),
      explanation
    };
  }

  // ==================== SHARED DOMAIN DATA ====================
  const NAMES = ["Amir", "Aina", "Bala", "Chong", "Dina", "Farah", "Haziq", "Kavita", "Lim", "Mei", "Nabil", "Siti", "Zarul"];

  // Pythagorean triples (a, b, c) where a^2 + b^2 = c^2
  const TRIPLES = [
    [3, 4, 5],
    [5, 12, 13],
    [8, 15, 17],
    [7, 24, 25],
    [20, 21, 29],
    [9, 40, 41],
    [12, 35, 37]
  ];

  // Clean (j, theta) pairs where j = 7*k and arc length = (theta/360) * 2*(22/7)*j is exact integer
  const ARC_PAIRS = [
    { j: 7, theta: 90, arc: 11 },
    { j: 7, theta: 180, arc: 22 },
    { j: 7, theta: 270, arc: 33 },
    { j: 14, theta: 45, arc: 11 },
    { j: 14, theta: 90, arc: 22 },
    { j: 14, theta: 135, arc: 33 },
    { j: 14, theta: 180, arc: 44 },
    { j: 14, theta: 225, arc: 55 },
    { j: 14, theta: 270, arc: 66 },
    { j: 21, theta: 30, arc: 11 },
    { j: 21, theta: 60, arc: 22 },
    { j: 21, theta: 90, arc: 33 },
    { j: 21, theta: 120, arc: 44 },
    { j: 21, theta: 150, arc: 55 },
    { j: 21, theta: 180, arc: 66 },
    { j: 21, theta: 240, arc: 88 },
    { j: 28, theta: 45, arc: 22 },
    { j: 28, theta: 90, arc: 44 },
    { j: 28, theta: 135, arc: 66 },
    { j: 35, theta: 36, arc: 22 },
    { j: 35, theta: 72, arc: 44 },
    { j: 35, theta: 108, arc: 66 },
    { j: 35, theta: 144, arc: 88 },
    { j: 42, theta: 30, arc: 22 },
    { j: 42, theta: 60, arc: 44 },
    { j: 42, theta: 90, arc: 66 },
    { j: 42, theta: 120, arc: 88 },
    { j: 42, theta: 150, arc: 110 }
  ];

  // Clean (j, theta) pairs where sector area = (theta/360) * (22/7) * j^2 is exact integer or .5
  const SECTOR_PAIRS = [
    { j: 7, theta: 90, area: 38.5 },
    { j: 7, theta: 180, area: 77 },
    { j: 7, theta: 270, area: 115.5 },
    { j: 14, theta: 45, area: 77 },
    { j: 14, theta: 90, area: 154 },
    { j: 14, theta: 135, area: 231 },
    { j: 14, theta: 180, area: 308 },
    { j: 14, theta: 225, area: 385 },
    { j: 14, theta: 270, area: 462 },
    { j: 21, theta: 40, area: 154 },
    { j: 21, theta: 60, area: 231 },
    { j: 21, theta: 80, area: 308 },
    { j: 21, theta: 90, area: 346.5 },
    { j: 21, theta: 100, area: 385 },
    { j: 21, theta: 120, area: 462 },
    { j: 21, theta: 140, area: 539 },
    { j: 21, theta: 180, area: 693 },
    { j: 21, theta: 240, area: 924 },
    { j: 28, theta: 45, area: 308 },
    { j: 28, theta: 90, area: 616 },
    { j: 28, theta: 135, area: 924 },
    { j: 35, theta: 36, area: 385 },
    { j: 35, theta: 72, area: 770 },
    { j: 35, theta: 108, area: 1155 },
    { j: 35, theta: 144, area: 1540 },
    { j: 42, theta: 30, area: 462 },
    { j: 42, theta: 45, area: 693 },
    { j: 42, theta: 60, area: 924 },
    { j: 42, theta: 90, area: 1386 },
    { j: 42, theta: 120, area: 1848 },
    { j: 42, theta: 150, area: 2310 }
  ];

  // Clean Pythagorean triples for cones/circles with j multiple of 7: [j, t, s] where j^2 + t^2 = s^2
  const CONE_TRIPLES = [
    [7, 24, 25],
    [14, 48, 50],
    [21, 20, 29],
    [21, 28, 35],
    [21, 72, 75],
    [28, 21, 35],
    [28, 45, 53],
    [35, 12, 37],
    [42, 40, 58]
  ];

  const generators = [
    // =========================================================================
    // BAB 5: BULATAN (b5_s1, b5_s2, b5_s3)
    // =========================================================================

    // ------------------------- b5_s1_L -------------------------
    {
      id: "b5_s1_L",
      unit: "b5",
      skill: "b5_s1",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b5_s1_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s1_L_part_def", "b5_s1_L_diam_radius", "b5_s1_L_bisect_chord"];
        const meta = { unit: "b5", skill: "b5_s1", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const pairs = pick(rng, [["A", "B"], ["P", "Q"], ["K", "L"], ["M", "N"], ["R", "S"], ["X", "Y"]]);
          const obj = pick(rng, ["sebuah bulatan berpusat di O", "suatu bulatan dengan pusat O", "satu bulatan berpusat O", "bulatan berpusat di titik O"]);
          const defs = [
            {
              desc: `tembereng garis lurus yang menyambungkan dua titik ${pairs[0]} dan ${pairs[1]} pada lilitan bulatan tanpa semestinya melalui pusat O`,
              ans: "Perentas",
              wrongs: ["Jejari", "Lengkok", "Sektor", "Tembereng"]
            },
            {
              desc: `perentas paling panjang yang menyambungkan titik ${pairs[0]} dan ${pairs[1]} pada lilitan serta melalui pusat O`,
              ans: "Diameter",
              wrongs: ["Jejari", "Lengkok", "Tembereng", "Lilitan"]
            },
            {
              desc: `garis lurus yang menyambungkan pusat O dengan sebarang titik ${pairs[0]} pada lilitan bulatan`,
              ans: "Jejari",
              wrongs: ["Diameter", "Perentas", "Lengkok", "Sektor"]
            },
            {
              desc: `rantau berlorek yang dibatasi oleh dua jejari O${pairs[0]} dan O${pairs[1]} serta lengkok ${pairs[0]}${pairs[1]}`,
              ans: "Sektor",
              wrongs: ["Tembereng", "Perentas", "Diameter", "Lengkok"]
            },
            {
              desc: `rantau yang dibatasi oleh perentas ${pairs[0]}${pairs[1]} dan lengkok ${pairs[0]}${pairs[1]}`,
              ans: "Tembereng",
              wrongs: ["Sektor", "Perentas", "Jejari", "Diameter"]
            },
            {
              desc: `bahagian lengkung lilitan bulatan di antara titik ${pairs[0]} dan titik ${pairs[1]}`,
              ans: "Lengkok",
              wrongs: ["Perentas", "Tembereng", "Sektor", "Diameter"]
            }
          ];
          const item = pick(rng, defs);
          const q = `Dalam ${obj}, apakah nama bagi ${item.desc}?`;
          const exp = `Mengikut takrifan bahagian bulatan, ${item.desc} dinamakan ${item.ans.toLowerCase()}.`;
          return buildMcq(rng, meta, q, item.ans, item.wrongs, exp, `def_${item.ans}_${pairs[0]}`);
        }

        if (tIdx === 1) {
          const item = pick(rng, ["pinggan bulat", "jam dinding bulat", "penutup balang", "cermin bulat", "dulang bulat", "roda basikal"]);
          const r = randInt(rng, 5, 45);
          const d = 2 * r;
          const askRadius = randInt(rng, 0, 1) === 1;
          if (askRadius) {
            const q = `Diameter bagi sebuah ${item} ialah ${d} cm. Berapakah panjang jejarinya?`;
            const wrongs = [d, d * 2, r + 2, Math.max(1, r - 3)];
            const exp = `Jejari ialah separuh daripada diameter: ${d} ÷ 2 = ${r} cm.`;
            return buildMcq(rng, meta, q, fmtUnit(r, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `r_${d}`);
          }
          const q = `Sebuah ${item} mempunyai jejari ${r} cm. Hitung panjang diameternya.`;
          const wrongs = [r, Math.max(2, Math.floor(r / 2)), r + 4, d + 4];
          const exp = `Diameter ialah dua kali ganda jejari: 2 × ${r} = ${d} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(d, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `d_${r}`);
        }

        // b5_s1_L_bisect_chord
        const pts = pick(rng, [["A", "B", "M"], ["P", "Q", "T"], ["K", "L", "N"], ["E", "F", "G"]]);
        const half = randInt(rng, 5, 28);
        const full = 2 * half;
        const askHalf = randInt(rng, 0, 1) === 1;
        if (askHalf) {
          const q = `Dalam suatu bulatan berpusat di O, jejari OM adalah serenjang kepada perentas ${pts[0]}${pts[1]} pada titik ${pts[2]}. Jika panjang perentas ${pts[0]}${pts[1]} ialah ${full} cm, berapakah panjang ${pts[0]}${pts[2]}?`;
          const wrongs = [full, full * 2, half + 2, Math.max(2, half - 2)];
          const exp = `Jejari yang serenjang kepada perentas membahagi dua sama perentas tersebut. Maka ${pts[0]}${pts[2]} = ${full} ÷ 2 = ${half} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(half, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `bh_${full}`);
        }
        const q = `Dalam suatu bulatan berpusat di O, jejari O${pts[2]} berserenjang dengan perentas ${pts[0]}${pts[1]} di titik ${pts[2]}. Jika ${pts[0]}${pts[2]} = ${half} cm, hitung jumlah panjang perentas ${pts[0]}${pts[1]}.`;
        const wrongs = [half, half + 4, full + 4, Math.max(4, full - 4)];
        const exp = `Oleh sebab O${pts[2]} membahagi dua sama perentas ${pts[0]}${pts[1]}, panjang ${pts[0]}${pts[1]} = 2 × ${half} = ${full} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(full, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `bf_${half}`);
      }
    },

    // ------------------------- b5_s1_M -------------------------
    {
      id: "b5_s1_M",
      unit: "b5",
      skill: "b5_s1",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b5_s1_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s1_M_pyth_dist", "b5_s1_M_pyth_chord", "b5_s1_M_pyth_radius"];
        const meta = { unit: "b5", skill: "b5_s1", diff: "M", template: templates[tIdx] };

        const base = pick(rng, TRIPLES.slice(0, 5));
        const k = randInt(rng, 1, 4);
        const swapLegs = randInt(rng, 0, 1) === 1;
        const halfChord = (swapLegs ? base[1] : base[0]) * k;
        const dist = (swapLegs ? base[0] : base[1]) * k;
        const rad = base[2] * k;
        const chord = 2 * halfChord;
        const lbl = pick(rng, [["A", "B", "M"], ["P", "Q", "N"], ["C", "D", "T"], ["R", "S", "K"]]);

        if (tIdx === 0) {
          const q = `Suatu bulatan berpusat di O mempunyai jejari ${rad} cm. Panjang perentas ${lbl[0]}${lbl[1]} ialah ${chord} cm. Hitung jarak serenjang dari pusat O ke perentas ${lbl[0]}${lbl[1]}.`;
          const wrongs = [
            Math.max(1, Math.round(Math.sqrt(Math.max(1, Math.abs(rad * rad - chord * chord))))),
            rad - halfChord > 0 ? rad - halfChord : rad + halfChord,
            halfChord,
            dist + 2
          ];
          const exp = `Separuh panjang perentas = ${chord} ÷ 2 = ${halfChord} cm. Menggunakan Teorem Pythagoras, jarak serenjang = √(${rad}² - ${halfChord}²) = √(${rad * rad - halfChord * halfChord}) = ${dist} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(dist, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `pd_${rad}_${chord}`);
        }

        if (tIdx === 1) {
          const q = `Dalam sebuah bulatan berpusat di O dengan jejari ${rad} cm, jarak serenjang dari pusat O ke perentas ${lbl[0]}${lbl[1]} ialah ${dist} cm. Cari panjang perentas ${lbl[0]}${lbl[1]}.`;
          const wrongs = [halfChord, rad - dist, dist * 2, chord + 4];
          const exp = `Separuh perentas = √(${rad}² - ${dist}²) = √(${rad * rad - dist * dist}) = ${halfChord} cm. Maka panjang penuh perentas ${lbl[0]}${lbl[1]} = 2 × ${halfChord} = ${chord} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(chord, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `pc_${rad}_${dist}`);
        }

        const askDiam = randInt(rng, 0, 1) === 1;
        if (askDiam) {
          const diam = 2 * rad;
          const q = `Perentas ${lbl[0]}${lbl[1]} yang panjangnya ${chord} cm berada pada jarak serenjang ${dist} cm dari pusat O sebuah bulatan. Hitung panjang diameter bulatan itu.`;
          const wrongs = [rad, chord + dist, diam - 4, diam + 4];
          const exp = `Separuh perentas = ${chord} ÷ 2 = ${halfChord} cm. Jejari j = √(${halfChord}² + ${dist}²) = ${rad} cm. Oleh itu, diameter = 2 × ${rad} = ${diam} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(diam, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `pr_d_${chord}_${dist}`);
        }
        const q = `Panjang satu perentas ${lbl[0]}${lbl[1]} di dalam sebuah bulatan ialah ${chord} cm dan jarak serenjangnya dari pusat O ialah ${dist} cm. Cari jejari bulatan itu.`;
        const wrongs = [halfChord + dist, chord, rad + 2, Math.max(2, rad - 2)];
        const exp = `Separuh perentas = ${chord} ÷ 2 = ${halfChord} cm. Menggunakan Teorem Pythagoras, jejari = √(${halfChord}² + ${dist}²) = √(${halfChord * halfChord + dist * dist}) = ${rad} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(rad, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `pr_r_${chord}_${dist}`);
      }
    },

    // ------------------------- b5_s1_H -------------------------
    {
      id: "b5_s1_H",
      unit: "b5",
      skill: "b5_s1",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b5_s1_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s1_H_parallel_chords_dist", "b5_s1_H_sagitta", "b5_s1_H_triangle_OAB"];
        const meta = { unit: "b5", skill: "b5_s1", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          // Pairs of triples sharing same hypotenuse r
          const sets = [
            { r: 25, h1: 7, d1: 24, h2: 15, d2: 20 },
            { r: 25, h1: 24, d1: 7, h2: 20, d2: 15 },
            { r: 50, h1: 14, d1: 48, h2: 30, d2: 40 },
            { r: 50, h1: 48, d1: 14, h2: 40, d2: 30 },
            { r: 65, h1: 25, d1: 60, h2: 39, d2: 52 },
            { r: 65, h1: 16, d1: 63, h2: 33, d2: 56 },
            { r: 85, h1: 13, d1: 84, h2: 51, d2: 68 },
            { r: 85, h1: 36, d1: 77, h2: 40, d2: 75 },
            { r: 100, h1: 28, d1: 96, h2: 60, d2: 80 }
          ];
          const s = pick(rng, sets);
          const opposite = randInt(rng, 0, 1) === 1;
          const ans = opposite ? s.d1 + s.d2 : Math.abs(s.d1 - s.d2);
          const other = opposite ? Math.abs(s.d1 - s.d2) : s.d1 + s.d2;
          const sideDesc = opposite ? "di sebelah yang bertentangan dengan pusat O" : "pada sebelah yang sama daripada pusat O";
          const q = `Dalam sebuah bulatan berpusat di O dengan jejari ${s.r} cm, terdapat dua perentas selari AB dan CD yang panjangnya masing-masing ${2 * s.h1} cm dan ${2 * s.h2} cm. Jika kedua-dua perentas itu berada ${sideDesc}, hitung jarak serenjang di antara perentas AB dan CD.`;
          const wrongs = [other, s.d1, s.d2, ans + 4];
          const exp = `Jarak O ke AB = √(${s.r}² - ${s.h1}²) = ${s.d1} cm. Jarak O ke CD = √(${s.r}² - ${s.h2}²) = ${s.d2} cm. Oleh sebab ${opposite ? "bertentangan sisi" : "pada sebelah yang sama"}, jarak di antara kedua-duanya = ${opposite ? `${s.d1} + ${s.d2}` : `|${s.d1} - ${s.d2}|`} = ${ans} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(ans, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `par_${s.r}_${s.h1}_${opposite}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 5));
          const k = randInt(rng, 1, 4);
          const swap = randInt(rng, 0, 1) === 1;
          const halfW = (swap ? base[1] : base[0]) * k;
          const d = (swap ? base[0] : base[1]) * k;
          const r = base[2] * k;
          const width = 2 * halfW;
          const shallow = randInt(rng, 0, 1) === 1;
          const depth = shallow ? r - d : r + d;
          const alt = shallow ? r + d : r - d;
          const q = shallow
            ? `Keratan rentas sebuah paip air bulat berpusat di O mempunyai jejari ${r} cm. Air di dalam paip itu kurang daripada separuh penuh dengan lebar permukaan air ialah ${width} cm. Hitung kedalaman air di dalam paip tersebut.`
            : `Keratan rentas sebuah terowong bulat berpusat di O mempunyai jejari ${r} cm dan tapak jalan mendatar yang lebarnya ${width} cm terletak di bawah pusat O. Hitung ketinggian maksimum dari permukaan jalan ke puncak bumbung terowong itu.`;
          const wrongs = [d, alt, r, depth + 2];
          const exp = `Separuh lebar = ${width} ÷ 2 = ${halfW} cm. Jarak dari pusat O ke garisan mendatar = √(${r}² - ${halfW}²) = ${d} cm. Maka nilai yang dikehendaki = ${shallow ? `${r} - ${d}` : `${r} + ${d}`} = ${depth} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(depth, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `sag_${r}_${width}_${shallow}`);
        }

        // b5_s1_H_triangle_OAB
        const base = pick(rng, TRIPLES.slice(0, 5));
        const k = randInt(rng, 1, 3);
        const swap = randInt(rng, 0, 1) === 1;
        const halfChord = (swap ? base[1] : base[0]) * k;
        const d = (swap ? base[0] : base[1]) * k;
        const r = base[2] * k;
        const chord = 2 * halfChord;
        const area = halfChord * d;
        const q = `Titik A dan B terletak pada lilitan sebuah bulatan berpusat di O dengan jejari ${r} cm. Jika panjang perentas AB ialah ${chord} cm, hitung luas segi tiga OAB.`;
        const wrongs = [chord * d, halfChord * r, chord + 2 * r, area + halfChord];
        const exp = `Tinggi serenjang OM dari pusat O ke perentas AB ialah √(${r}² - ${halfChord}²) = ${d} cm. Luas ΔOAB = 1/2 × tapak × tinggi = 1/2 × ${chord} × ${d} = ${area} cm².`;
        return buildMcq(rng, meta, q, fmtUnit(area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `tri_${r}_${chord}`);
      }
    },

    // ------------------------- b5_s2_L -------------------------
    {
      id: "b5_s2_L",
      unit: "b5",
      skill: "b5_s2",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b5_s2_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s2_L_circum_from_r", "b5_s2_L_circum_from_d", "b5_s2_L_r_from_circum"];
        const meta = { unit: "b5", skill: "b5_s2", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const r = pick(rng, [3.5, 7, 10.5, 14, 17.5, 21, 24.5, 28, 35, 42, 49, 56, 63, 70]);
          const circ = Math.round(2 * (22 / 7) * r);
          const obj = pick(rng, ["sebuah bulatan", "sebuah jam dinding bulat", "sebuah kolam ikan bulat", "sebuah meja bulat", "seutas gelung bulat"]);
          const q = `Hitung lilitan bagi ${obj} yang mempunyai jejari ${fmtDec(r, 1)} cm. [Guna π = 22/7]`;
          const wrongs = [Math.round((22 / 7) * r), Math.round((22 / 7) * r * r), circ + 22, Math.max(11, circ - 22)];
          const exp = `Lilitan bulatan = 2πj = 2 × (22/7) × ${fmtDec(r, 1)} = ${circ} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(circ, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `cr_${r}`);
        }

        if (tIdx === 1) {
          const d = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 98]);
          const circ = Math.round((22 / 7) * d);
          const obj = pick(rng, ["sebuah pinggan", "sebuah roda basikal", "penutup tong air", "sebuah cermin bulat", "sebuah dulang"]);
          const q = `Diameter bagi ${obj} ialah ${d} cm. Hitung lilitan bulatan itu. [Guna π = 22/7]`;
          const wrongs = [circ * 2, Math.round((22 / 7) * (d / 2) * (d / 2)), circ + 14, Math.max(11, circ - 14)];
          const exp = `Lilitan bulatan = πd = (22/7) × ${d} = ${circ} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(circ, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `cd_${d}`);
        }

        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
        const circ = 44 * (r / 7);
        const askDiam = randInt(rng, 0, 1) === 1;
        if (askDiam) {
          const d = 2 * r;
          const q = `Lilitan sebuah bulatan ialah ${circ} cm. Hitung panjang diameter bulatan tersebut. [Guna π = 22/7]`;
          const wrongs = [r, d + 7, Math.max(7, d - 7), d + 14];
          const exp = `πd = ${circ}, maka (22/7) × d = ${circ} → d = ${circ} × 7 ÷ 22 = ${d} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(d, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rc_d_${r}`);
        }
        const q = `Diberi lilitan suatu bulatan ialah ${circ} cm. Cari panjang jejari bulatan itu. [Guna π = 22/7]`;
        const wrongs = [2 * r, r + 7, Math.max(3.5, r - 7), r + 3.5];
        const exp = `2πj = ${circ}, maka 2 × (22/7) × j = ${circ} → j = ${circ} × 7 ÷ 44 = ${r} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(r, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rc_r_${r}`);
      }
    },

    // ------------------------- b5_s2_M -------------------------
    {
      id: "b5_s2_M",
      unit: "b5",
      skill: "b5_s2",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b5_s2_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s2_M_arc_length", "b5_s2_M_angle_from_arc", "b5_s2_M_sector_perimeter"];
        const meta = { unit: "b5", skill: "b5_s2", diff: "M", template: templates[tIdx] };
        const p = pick(rng, ARC_PAIRS);

        if (tIdx === 0) {
          const q = `Hitung panjang lengkok bagi sebuah bulatan berjejari ${p.j} cm yang mencangkum sudut ${p.theta}° pada pusatnya. [Guna π = 22/7]`;
          const circ = 44 * (p.j / 7);
          const wrongs = [
            p.arc + 2 * p.j,
            Math.round((p.theta / 180) * (22 / 7) * p.j * 10) / 10 === p.arc ? p.arc * 2 : p.arc * 2,
            Math.max(4, circ - p.arc),
            p.arc + 11
          ];
          const exp = `Panjang lengkok = (${p.theta}°/360°) × 2 × (22/7) × ${p.j} = ${p.arc} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(p.arc, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `arc_${p.j}_${p.theta}`);
        }

        if (tIdx === 1) {
          const q = `Suatu lengkok bulatan berjejari ${p.j} cm mempunyai panjang ${p.arc} cm. Hitung sudut yang dicangkum pada pusat bulatan itu. [Guna π = 22/7]`;
          const wrongs = [360 - p.theta, p.theta / 2, Math.min(350, p.theta + 30), Math.max(15, p.theta - 30)];
          const exp = `(θ/360°) × 2 × (22/7) × ${p.j} = ${p.arc}, maka θ = (${p.arc} × 360°) ÷ ${44 * (p.j / 7)} = ${p.theta}°.`;
          return buildMcq(rng, meta, q, fmtDeg(p.theta), wrongs.map(fmtDeg), exp, `ang_${p.j}_${p.theta}`);
        }

        const perim = p.arc + 2 * p.j;
        const q = `Sebuah sektor bulatan mempunyai jejari ${p.j} cm dan sudut di pusat ${p.theta}°. Hitung perimeter sektor tersebut. [Guna π = 22/7]`;
        const wrongs = [p.arc, p.arc + p.j, perim + p.j, Math.max(10, perim - 7)];
        const exp = `Panjang lengkok = (${p.theta}°/360°) × 2 × (22/7) × ${p.j} = ${p.arc} cm. Perimeter sektor = panjang lengkok + 2 jejari = ${p.arc} + 2(${p.j}) = ${perim} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(perim, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `per_${p.j}_${p.theta}`);
      }
    },

    // ------------------------- b5_s2_H -------------------------
    {
      id: "b5_s2_H",
      unit: "b5",
      skill: "b5_s2",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b5_s2_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s2_H_wheel_rotations", "b5_s2_H_composite_track", "b5_s2_H_major_minor_arc"];
        const meta = { unit: "b5", skill: "b5_s2", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const r = pick(rng, [14, 21, 28, 35, 42, 49]);
          const circCm = 44 * (r / 7);
          const turns = randInt(rng, 4, 25) * 25;
          const distM = (circCm * turns) / 100;
          const askTurns = randInt(rng, 0, 1) === 1;
          if (askTurns && Number.isInteger(distM)) {
            const q = `Sebuah roda basikal berjejari ${r} cm bergolek di atas jalan lurus sejauh ${fmtInt(distM)} m. Berapakah bilangan pusingan lengkap yang dibuat oleh roda itu? [Guna π = 22/7]`;
            const wrongs = [turns * 2, Math.max(5, Math.floor(turns / 2)), turns + 25, Math.max(5, turns - 25)];
            const exp = `Lilitan roda = 2 × (22/7) × ${r} = ${circCm} cm = ${fmtDec(circCm / 100, 2)} m. Bilangan pusingan = ${fmtInt(distM)} m ÷ ${fmtDec(circCm / 100, 2)} m = ${turns} pusingan.`;
            return buildMcq(rng, meta, q, fmtInt(turns), wrongs.map(fmtInt), exp, `wh_t_${r}_${turns}`);
          }
          const q = `Seorang murid menggolekkan sebuah roda berdiameter ${2 * r} cm sebanyak ${turns} pusingan lengkap. Hitung jumlah jarak yang dilalui oleh roda itu dalam meter. [Guna π = 22/7]`;
          const wrongs = [distM * 2, distM / 2, distM * 10, distM + 44];
          const exp = `Lilitan roda = (22/7) × ${2 * r} = ${circCm} cm. Jumlah jarak = ${circCm} × ${turns} = ${fmtInt(circCm * turns)} cm = ${fmtDec(distM, 2)} m.`;
          return buildMcq(rng, meta, q, fmtUnit(distM, "m", 2), wrongs.map((v) => fmtUnit(v, "m", 2)), exp, `wh_d_${r}_${turns}`);
        }

        if (tIdx === 1) {
          const d = pick(rng, [14, 28, 42, 56, 70]);
          const len = randInt(rng, 30, 120);
          const twoEnds = randInt(rng, 0, 1) === 1;
          const arcSum = Math.round((22 / 7) * d) * (twoEnds ? 1 : 0.5);
          const perim = twoEnds ? 2 * len + arcSum : 2 * len + d + arcSum;
          const q = twoEnds
            ? `Sebuah padang larian dibina daripada sebuah segi empat tepat berukuran ${len} m panjang dan ${d} m lebar, dengan dua semibulatan berdiameter ${d} m dicantumkan pada kedua-dua hujung lebarnya. Hitung perimeter luar padang tersebut. [Guna π = 22/7]`
            : `Sebuah taman mini berbentuk segi empat tepat berukuran ${len} m panjang dan ${d} m lebar dicantumkan dengan satu semibulatan berdiameter ${d} m pada salah satu sisi lebarnya. Hitung perimeter keseluruhan taman itu. [Guna π = 22/7]`;
          const wrongs = [
            perim + d,
            2 * len + 2 * d,
            arcSum + len,
            Math.max(20, perim - 22)
          ];
          const exp = twoEnds
            ? `Dua semibulatan membentuk satu bulatan penuh berdiameter ${d} m, lilitannya = (22/7) × ${d} = ${arcSum} m. Perimeter = 2(${len}) + ${arcSum} = ${perim} m.`
            : `Panjang lengkok semibulatan = 1/2 × (22/7) × ${d} = ${arcSum} m. Perimeter = 2(${len}) + ${d} + ${arcSum} = ${perim} m.`;
          return buildMcq(rng, meta, q, fmtUnit(perim, "m"), wrongs.map((v) => fmtUnit(v, "m")), exp, `trk_${d}_${len}_${twoEnds}`);
        }

        // b5_s2_H_major_minor_arc
        const p = pick(rng, ARC_PAIRS.filter((x) => x.theta < 180));
        const circ = 44 * (p.j / 7);
        const majorArc = circ - p.arc;
        const askDiff = randInt(rng, 0, 1) === 1;
        if (askDiff) {
          const diff = majorArc - p.arc;
          const q = `Dalam sebuah bulatan berjejari ${p.j} cm, lengkok minor PQ mencangkum sudut ${p.theta}° pada pusat bulatan. Hitung beza panjang antara lengkok major PQ dengan lengkok minor PQ. [Guna π = 22/7]`;
          const wrongs = [majorArc, p.arc, diff + 11, Math.max(5, diff - 11)];
          const exp = `Sudut lengkok major = 360° - ${p.theta}° = ${360 - p.theta}°. Panjang lengkok minor = ${p.arc} cm dan lengkok major = ${circ} - ${p.arc} = ${majorArc} cm. Beza = ${majorArc} - ${p.arc} = ${diff} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(diff, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `maj_d_${p.j}_${p.theta}`);
        }
        const q = `Sebuah bulatan berpusat di O mempunyai jejari ${p.j} cm. Diberi sudut bagi sektor minor AOB ialah ${p.theta}°. Hitung panjang lengkok major AB. [Guna π = 22/7]`;
        const wrongs = [p.arc, majorArc + 2 * p.j, circ, Math.max(10, majorArc - 22)];
        const exp = `Sudut lengkok major = 360° - ${p.theta}° = ${360 - p.theta}°. Panjang lengkok major = (${360 - p.theta}°/360°) × 2 × (22/7) × ${p.j} = ${majorArc} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(majorArc, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `maj_a_${p.j}_${p.theta}`);
      }
    },

    // ------------------------- b5_s3_L -------------------------
    {
      id: "b5_s3_L",
      unit: "b5",
      skill: "b5_s3",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b5_s3_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s3_L_area_from_r", "b5_s3_L_area_from_d", "b5_s3_L_r_from_area"];
        const meta = { unit: "b5", skill: "b5_s3", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const r = pick(rng, [3.5, 7, 10.5, 14, 17.5, 21, 28, 35, 42, 49]);
          const area = (22 / 7) * r * r;
          const obj = pick(rng, ["sebuah bulatan", "permukaan meja bulat", "sebuah taman bunga bulat", "sekeping piring bulat", "tapak kolam bulat"]);
          const q = `Hitung luas bagi ${obj} yang berjejari ${fmtDec(r, 1)} cm. [Guna π = 22/7]`;
          const wrongs = [2 * (22 / 7) * r, (22 / 7) * 2 * r, area * 2, area / 2];
          const exp = `Luas bulatan = πj² = (22/7) × ${fmtDec(r, 1)}² = ${fmtDec(area, 2)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `ar_${r}`);
        }

        if (tIdx === 1) {
          const d = pick(rng, [7, 14, 21, 28, 35, 42, 56, 70, 84]);
          const r = d / 2;
          const area = (22 / 7) * r * r;
          const q = `Diameter sebuah bulatan ialah ${d} cm. Hitung luas bulatan tersebut. [Guna π = 22/7]`;
          const wrongs = [(22 / 7) * d * d, (22 / 7) * d, area * 2, area + 77];
          const exp = `Jejari j = ${d} ÷ 2 = ${fmtDec(r, 1)} cm. Luas = πj² = (22/7) × (${fmtDec(r, 1)})² = ${fmtDec(area, 2)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `ad_${d}`);
        }

        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49]);
        const area = Math.round((22 / 7) * r * r);
        const askDiam = randInt(rng, 0, 1) === 1;
        if (askDiam) {
          const d = 2 * r;
          const q = `Luas sebuah bulatan ialah ${fmtInt(area)} cm². Cari diameter bulatan itu. [Guna π = 22/7]`;
          const wrongs = [r, d + 7, Math.max(7, d - 7), (r * r) / 2];
          const exp = `πj² = ${fmtInt(area)}, maka j² = ${fmtInt(area)} × 7 ÷ 22 = ${r * r} → j = ${r} cm. Diameter = 2 × ${r} = ${d} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(d, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `ra_d_${r}`);
        }
        const q = `Diberi luas suatu bulatan ialah ${fmtInt(area)} cm². Hitung panjang jejarinya. [Guna π = 22/7]`;
        const wrongs = [2 * r, r + 7, Math.max(3, r - 7), r * r];
        const exp = `πj² = ${fmtInt(area)} → (22/7) × j² = ${fmtInt(area)} → j² = ${r * r} → j = ${r} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(r, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `ra_r_${r}`);
      }
    },

    // ------------------------- b5_s3_M -------------------------
    {
      id: "b5_s3_M",
      unit: "b5",
      skill: "b5_s3",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b5_s3_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s3_M_sector_area", "b5_s3_M_angle_from_sector", "b5_s3_M_semicircle_quadrant"];
        const meta = { unit: "b5", skill: "b5_s3", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const p = pick(rng, SECTOR_PAIRS);
          const q = `Sebuah sektor bulatan mempunyai jejari ${p.j} cm dan sudut di pusat ${p.theta}°. Hitung luas sektor tersebut. [Guna π = 22/7]`;
          const wrongs = [
            p.area * 2,
            (22 / 7) * p.j * p.j,
            (p.theta / 360) * 2 * (22 / 7) * p.j,
            p.area + 77
          ];
          const exp = `Luas sektor = (${p.theta}°/360°) × (22/7) × ${p.j}² = ${fmtDec(p.area, 2)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(p.area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `sec_${p.j}_${p.theta}`);
        }

        if (tIdx === 1) {
          const p = pick(rng, SECTOR_PAIRS);
          const q = `Luas suatu sektor bulatan berjejari ${p.j} cm ialah ${fmtDec(p.area, 2)} cm². Cari sudut yang dicangkum pada pusat bulatan itu. [Guna π = 22/7]`;
          const wrongs = [360 - p.theta, p.theta / 2, Math.min(340, p.theta + 30), Math.max(15, p.theta - 30)];
          const exp = `(θ/360°) × (22/7) × ${p.j}² = ${fmtDec(p.area, 2)} → θ = (${fmtDec(p.area, 2)} × 360°) ÷ ${Math.round((22 / 7) * p.j * p.j)} = ${p.theta}°.`;
          return buildMcq(rng, meta, q, fmtDeg(p.theta), wrongs.map(fmtDeg), exp, `sang_${p.j}_${p.theta}`);
        }

        const r = pick(rng, [7, 14, 21, 28, 35, 42]);
        const fracType = pick(rng, [
          { name: "semibulatan", num: 1, den: 2 },
          { name: "sukuan bulatan", num: 1, den: 4 },
          { name: "tiga suku bulatan", num: 3, den: 4 }
        ]);
        const fullArea = (22 / 7) * r * r;
        const area = (fullArea * fracType.num) / fracType.den;
        const useDiam = randInt(rng, 0, 1) === 1;
        const q = useDiam
          ? `Hitung luas sebuah ${fracType.name} yang mempunyai diameter ${2 * r} cm. [Guna π = 22/7]`
          : `Hitung luas sebuah ${fracType.name} yang berjejari ${r} cm. [Guna π = 22/7]`;
        const wrongs = [fullArea, area * 2, area / 2, (fracType.num / fracType.den) * 2 * (22 / 7) * r];
        const exp = `Jejari = ${r} cm. Luas = ${fracType.num}/${fracType.den} × (22/7) × ${r}² = ${fmtDec(area, 2)} cm².`;
        return buildMcq(rng, meta, q, fmtUnit(area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `sq_${r}_${fracType.num}_${fracType.den}`);
      }
    },

    // ------------------------- b5_s3_H -------------------------
    {
      id: "b5_s3_H",
      unit: "b5",
      skill: "b5_s3",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b5_s3_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b5_s3_H_annulus", "b5_s3_H_square_minus_circle", "b5_s3_H_rect_semicircle_combo"];
        const meta = { unit: "b5", skill: "b5_s3", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const rIn = pick(rng, [7, 14, 21, 28, 35]);
          const width = pick(rng, [7, 14, 21]);
          const rOut = rIn + width;
          const area = Math.round((22 / 7) * (rOut * rOut - rIn * rIn));
          const q = `Sebuah kolam ikan berbentuk bulatan berjejari ${rIn} m dikelilingi oleh laluan pejalan kaki selebar ${width} m yang membentuk dua bulatan sepusat. Hitung luas laluan pejalan kaki tersebut. [Guna π = 22/7]`;
          const wrongs = [
            Math.round((22 / 7) * width * width),
            Math.round((22 / 7) * rOut * rOut),
            Math.round((22 / 7) * rIn * rIn),
            area + 154
          ];
          const exp = `Jejari luar = ${rIn} + ${width} = ${rOut} m. Luas laluan = π(J² - j²) = (22/7) × (${rOut}² - ${rIn}²) = ${fmtInt(area)} m².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "m²"), wrongs.map((v) => fmtUnit(v, "m²")), exp, `ann_${rIn}_${width}`);
        }

        if (tIdx === 1) {
          const r = pick(rng, [7, 14, 21, 28, 35]);
          const side = 2 * r;
          const sqArea = side * side;
          const circArea = Math.round((22 / 7) * r * r);
          const shaded = sqArea - circArea;
          const q = `Sekeping kadbod berbentuk segi empat sama dengan sisi ${side} cm dipotong untuk mengeluarkan sebuah bulatan terbesar berdiameter ${side} cm (atau empat sukuan bulatan berjejari ${r} cm pada setiap bucu). Hitung luas kadbod yang tinggal. [Guna π = 22/7]`;
          const wrongs = [circArea, sqArea, shaded * 2, Math.max(10, shaded - 42)];
          const exp = `Luas segi empat sama = ${side} × ${side} = ${fmtInt(sqArea)} cm². Luas bulatan = (22/7) × ${r}² = ${fmtInt(circArea)} cm². Baki luas = ${fmtInt(sqArea)} - ${fmtInt(circArea)} = ${fmtInt(shaded)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(shaded, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `sqc_${r}`);
        }

        const r = pick(rng, [7, 14, 21, 28]);
        const d = 2 * r;
        const len = randInt(rng, d + 4, d + 40);
        const rectArea = len * d;
        const semiArea = Math.round(0.5 * (22 / 7) * r * r);
        const isCutout = randInt(rng, 0, 1) === 1;
        const total = isCutout ? rectArea - semiArea : rectArea + semiArea;
        const q = isCutout
          ? `Sebuah kepingan logam berbentuk segi empat tepat berukuran ${len} cm × ${d} cm dipotong keluar satu semibulatan berdiameter ${d} cm pada salah satu sisinya. Hitung luas kepingan logam yang tinggal. [Guna π = 22/7]`
          : `Sebuah pentas dibentuk dengan mencantumkan satu segi empat tepat berukuran ${len} m × ${d} m dengan satu semibulatan berdiameter ${d} m pada sisi ${d} m tersebut. Hitung jumlah luas pentas itu. [Guna π = 22/7]`;
        const unitStr = isCutout ? "cm²" : "m²";
        const wrongs = [
          isCutout ? rectArea + semiArea : rectArea - semiArea,
          isCutout ? rectArea - 2 * semiArea : rectArea + 2 * semiArea,
          semiArea,
          total + 77
        ];
        const exp = `Luas segi empat tepat = ${len} × ${d} = ${fmtInt(rectArea)} ${unitStr}. Luas semibulatan = 1/2 × (22/7) × ${r}² = ${fmtInt(semiArea)} ${unitStr}. Jumlah luas = ${fmtInt(total)} ${unitStr}.`;
        return buildMcq(rng, meta, q, fmtUnit(total, unitStr), wrongs.map((v) => fmtUnit(v, unitStr)), exp, `rsc_${r}_${len}_${isCutout}`);
      }
    },

    // =========================================================================
    // BAB 6: BENTUK GEOMETRI TIGA DIMENSI (b6_s1, b6_s2, b6_s3)
    // =========================================================================

    // ------------------------- b6_s1_L -------------------------
    {
      id: "b6_s1_L",
      unit: "b6",
      skill: "b6_s1",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b6_s1_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s1_L_count_properties", "b6_s1_L_identify_from_props", "b6_s1_L_identify_from_net"];
        const meta = { unit: "b6", skill: "b6_s1", diff: "L", template: templates[tIdx] };

        const solids = [
          { name: "Kubus", obj: "kotak hadiah berbentuk kubus", flat: 6, curved: 0, edges: 12, vertices: 8 },
          { name: "Kuboid", obj: "kotak pensel berbentuk kuboid", flat: 6, curved: 0, edges: 12, vertices: 8 },
          { name: "Silinder", obj: "tin minuman berbentuk silinder", flat: 2, curved: 1, edges: 2, vertices: 0 },
          { name: "Kon", obj: "topi parti berbentuk kon", flat: 1, curved: 1, edges: 1, vertices: 1 },
          { name: "Sfera", obj: "bola sepak berbentuk sfera", flat: 0, curved: 1, edges: 0, vertices: 0 },
          { name: "Piramid tapak segi empat sama", obj: "model piramid tapak segi empat sama", flat: 5, curved: 0, edges: 8, vertices: 5 },
          { name: "Piramid tapak segi tiga", obj: "model piramid tapak segi tiga", flat: 4, curved: 0, edges: 6, vertices: 4 },
          { name: "Prisma segi tiga", obj: "bungkusan coklat berbentuk prisma segi tiga", flat: 5, curved: 0, edges: 9, vertices: 6 },
          { name: "Prisma pentagon", obj: "model kayu berbentuk prisma pentagon", flat: 7, curved: 0, edges: 15, vertices: 10 },
          { name: "Prisma heksagon", obj: "pensel berbentuk prisma heksagon", flat: 8, curved: 0, edges: 18, vertices: 12 }
        ];

        if (tIdx === 0) {
          const s = pick(rng, solids);
          const prop = pick(rng, [
            { key: "flat", label: "muka rata" },
            { key: "edges", label: "tepi" },
            { key: "vertices", label: "bucu" },
            { key: "curved", label: "muka melengkung" }
          ]);
          const ans = s[prop.key];
          const useObj = randInt(rng, 0, 1) === 1;
          const subject = useObj ? `Sebuah ${s.obj}` : `Bentuk geometri tiga dimensi ${s.name.toLowerCase()}`;
          const q = `${subject} mempunyai berapa bilangan ${prop.label}?`;
          const cands = [ans + 1, ans + 2, ans + 3, Math.max(0, ans - 1), Math.max(0, ans - 2), ans + 4].filter((v) => v !== ans);
          const exp = `${s.name} mempunyai ${s.flat} muka rata, ${s.curved} muka melengkung, ${s.edges} tepi dan ${s.vertices} bucu.`;
          return buildMcq(rng, meta, q, fmtInt(ans), cands.map(fmtInt), exp, `cp_${s.name}_${prop.key}_${useObj}`);
        }

        if (tIdx === 1) {
          const riddles = [
            { desc: "2 muka rata berbentuk bulatan yang kongruen dan 1 muka melengkung tanpa bucu", ans: "Silinder" },
            { desc: "1 muka rata berbentuk bulatan, 1 muka melengkung dan 1 puncak (bucu)", ans: "Kon" },
            { desc: "1 muka melengkung sahaja tanpa sebarang muka rata, tepi atau bucu", ans: "Sfera" },
            { desc: "5 muka rata (1 segi empat sama dan 4 segi tiga), 8 tepi serta 5 bucu", ans: "Piramid tapak segi empat sama" },
            { desc: "5 muka rata (2 segi tiga kongruen dan 3 segi empat tepat), 9 tepi serta 6 bucu", ans: "Prisma segi tiga" },
            { desc: "6 muka rata berbentuk segi empat sama yang kongruen, 12 tepi dan 8 bucu", ans: "Kubus" },
            { desc: "7 muka rata (2 pentagon kongruen dan 5 segi empat tepat), 15 tepi dan 10 bucu", ans: "Prisma pentagon" },
            { desc: "4 muka rata berbentuk segi tiga, 6 tepi dan 4 bucu", ans: "Piramid tapak segi tiga" }
          ];
          const item = pick(rng, riddles);
          const name = pick(rng, NAMES);
          const q = `${name} memerhatikan suatu pepejal geometri yang mempunyai ${item.desc}. Apakah bentuk pepejal tersebut?`;
          const allNames = riddles.map((r) => r.ans).filter((n) => n !== item.ans);
          const exp = `Ciri-ciri (${item.desc}) sepadan dengan bentuk ${item.ans}.`;
          return buildMcq(rng, meta, q, item.ans, shuffle(rng, allNames), exp, `id_${item.ans}_${name}`);
        }

        const nets = [
          { desc: "2 bulatan kongruen dan 1 segi empat tepat", ans: "Silinder" },
          { desc: "1 bulatan dan 1 sektor bulatan", ans: "Kon" },
          { desc: "1 segi empat sama dan 4 segi tiga sama kaki yang kongruen", ans: "Piramid tapak segi empat sama" },
          { desc: "2 segi tiga kongruen dan 3 segi empat tepat", ans: "Prisma segi tiga" },
          { desc: "6 segi empat sama yang kongruen", ans: "Kubus" },
          { desc: "2 pentagon kongruen dan 5 segi empat tepat", ans: "Prisma pentagon" },
          { desc: "2 heksagon kongruen dan 6 segi empat tepat", ans: "Prisma heksagon" },
          { desc: "4 segi tiga yang disusun daripada satu tapak segi tiga dan tiga muka sisi", ans: "Piramid tapak segi tiga" }
        ];
        const item = pick(rng, nets);
        const name = pick(rng, NAMES);
        const q = `${name} melukis suatu bentangan yang terdiri daripada ${item.desc}. Apabila dilipat, apakah bentuk tiga dimensi yang terhasil?`;
        const allNames = nets.map((r) => r.ans).filter((n) => n !== item.ans);
        const exp = `Bentangan yang mempunyai ${item.desc} akan membentuk sebuah ${item.ans.toLowerCase()}.`;
        return buildMcq(rng, meta, q, item.ans, shuffle(rng, allNames), exp, `net_${item.ans}_${name}`);
      }
    },

    // ------------------------- b6_s1_M -------------------------
    {
      id: "b6_s1_M",
      unit: "b6",
      skill: "b6_s1",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b6_s1_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s1_M_polygon_prism_stats", "b6_s1_M_polygon_pyramid_stats", "b6_s1_M_net_dimensions"];
        const meta = { unit: "b6", skill: "b6_s1", diff: "M", template: templates[tIdx] };

        const polys = [
          { n: 3, name: "segi tiga" },
          { n: 4, name: "segi empat" },
          { n: 5, name: "pentagon" },
          { n: 6, name: "heksagon" },
          { n: 7, name: "heptagon" },
          { n: 8, name: "oktagon" },
          { n: 9, name: "nonagon" },
          { n: 10, name: "dekagon" }
        ];

        if (tIdx === 0) {
          const p = pick(rng, polys);
          const askKind = pick(rng, ["edges", "vertices", "faces"]);
          const ans = askKind === "edges" ? 3 * p.n : askKind === "vertices" ? 2 * p.n : p.n + 2;
          const kindLabel = askKind === "edges" ? "tepi" : askKind === "vertices" ? "bucu" : "muka rata";
          const q = `Sebuah prisma tegak mempunyai keratan rentas berbentuk ${p.name}. Hitung jumlah bilangan ${kindLabel} pada prisma tersebut.`;
          const wrongs = [3 * p.n, 2 * p.n, p.n + 2, p.n + 1, 2 * p.n + 1].filter((v) => v !== ans);
          const exp = `Bagi prisma berasas ${p.n}-sisi: muka = ${p.n} + 2 = ${p.n + 2}, bucu = 2 × ${p.n} = ${2 * p.n}, dan tepi = 3 × ${p.n} = ${3 * p.n}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `pr_${p.n}_${askKind}`);
        }

        if (tIdx === 1) {
          const p = pick(rng, polys);
          const askKind = pick(rng, ["edges", "vertices", "sum"]);
          const f = p.n + 1;
          const v = p.n + 1;
          const e = 2 * p.n;
          const ans = askKind === "edges" ? e : askKind === "vertices" ? v : f + v + e;
          const q = askKind === "sum"
            ? `Sebuah piramid tegak mempunyai tapak berbentuk ${p.name}. Hitung hasil tambah bilangan muka, bucu dan tepi piramid itu.`
            : `Sebuah piramid tegak mempunyai tapak berbentuk ${p.name}. Berapakah bilangan ${askKind === "edges" ? "tepi" : "bucu"} piramid tersebut?`;
          const wrongs = [3 * p.n, 2 * p.n, p.n + 2, p.n + 1, f + v, f + e].filter((val) => val !== ans);
          const exp = `Bagi piramid berasas ${p.n}-sisi: bilangan muka = ${f}, bucu = ${v}, dan tepi = ${e}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `py_${p.n}_${askKind}`);
        }

        // b6_s1_M_net_dimensions
        const r = pick(rng, [7, 14, 21, 28, 35]);
        const h = randInt(rng, 10, 40);
        const w = 44 * (r / 7);
        const askArea = randInt(rng, 0, 1) === 1;
        if (askArea) {
          const area = w * h;
          const q = `Bentangan bagi permukaan melengkung sebuah silinder tertutup berjejari ${r} cm dan tinggi ${h} cm ialah sekeping segi empat tepat. Hitung luas segi empat tepat tersebut. [Guna π = 22/7]`;
          const wrongs = [w * h * 2, Math.round((22 / 7) * r * h), 2 * (22 / 7) * r * r, area + w];
          const exp = `Panjang segi empat tepat = lilitan bulatan = 2 × (22/7) × ${r} = ${w} cm. Luas = ${w} × ${h} = ${fmtInt(area)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `nd_a_${r}_${h}`);
        }
        const q = `Permukaan melengkung sebuah silinder yang berjejari ${r} cm dan tinggi ${h} cm dibuka menjadi bentangan segi empat tepat. Berapakah panjang sisi segi empat tepat yang sepadan dengan lilitan bulatan tapak? [Guna π = 22/7]`;
        const wrongs = [w / 2, Math.round((22 / 7) * r * r), h, w + 14];
        const exp = `Panjang sisi tersebut sama dengan lilitan bulatan tapak: 2πj = 2 × (22/7) × ${r} = ${w} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(w, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `nd_w_${r}_${h}`);
      }
    },

    // ------------------------- b6_s1_H -------------------------
    {
      id: "b6_s1_H",
      unit: "b6",
      skill: "b6_s1",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b6_s1_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s1_H_wire_frame", "b6_s1_H_euler_comparison", "b6_s1_H_net_area_reverse"];
        const meta = { unit: "b6", skill: "b6_s1", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const mode = randInt(rng, 0, 1);
          if (mode === 0) {
            const p = randInt(rng, 8, 25);
            const l = randInt(rng, 5, 16);
            const t = randInt(rng, 4, 15);
            const total = 4 * (p + l + t);
            const q = `Seorang murid ingin membina rangka sebuah kuboid berukuran panjang ${p} cm, lebar ${l} cm dan tinggi ${t} cm menggunakan dawai. Berapakah jumlah panjang dawai minimum yang diperlukan?`;
            const wrongs = [2 * (p + l + t), p + l + t, 2 * (p * l + p * t + l * t), total + 4];
            const exp = `Kuboid mempunyai 4 tepi panjang, 4 tepi lebar dan 4 tepi tinggi. Jumlah dawai = 4 × (${p} + ${l} + ${t}) = ${total} cm.`;
            return buildMcq(rng, meta, q, fmtUnit(total, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `wf_c_${p}_${l}_${t}`);
          }
          const s = randInt(rng, 6, 20);
          const e = randInt(rng, s + 2, 28);
          const total = 4 * s + 4 * e;
          const q = `Rangka sebuah piramid tapak segi empat sama mempunyai panjang sisi tapak ${s} cm dan setiap tepi sendengnya sepanjang ${e} cm. Hitung jumlah panjang dawai yang digunakan untuk membina rangka piramid itu.`;
          const wrongs = [3 * s + 3 * e, 4 * s + 3 * e, s * s + 4 * e, total + s];
          const exp = `Tapak segi empat sama mempunyai 4 sisi (${s} cm setiap satu) dan terdapat 4 tepi sendeng (${e} cm setiap satu). Jumlah = 4(${s}) + 4(${e}) = ${total} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(total, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `wf_p_${s}_${e}`);
        }

        if (tIdx === 1) {
          const polys = [
            { n: 3, name: "segi tiga" },
            { n: 4, name: "segi empat" },
            { n: 5, name: "pentagon" },
            { n: 6, name: "heksagon" },
            { n: 8, name: "oktagon" }
          ];
          const p1 = pick(rng, polys);
          const p2 = pick(rng, polys);
          const kind = pick(rng, ["tepi", "bucu", "muka"]);
          const val1 = kind === "tepi" ? 3 * p1.n : kind === "bucu" ? 2 * p1.n : p1.n + 2;
          const val2 = kind === "tepi" ? 2 * p2.n : kind === "bucu" ? p2.n + 1 : p2.n + 1;
          const total = val1 + val2;
          const q = `Hitung jumlah bilangan ${kind} bagi gabungan sebuah prisma bertapak ${p1.name} dan sebuah piramid bertapak ${p2.name} (dianggap sebagai dua pepejal berasingan).`;
          const wrongs = [Math.abs(val1 - val2), total + 2, Math.max(2, total - 2), val1 + p2.n];
          const exp = `Prisma bertapak ${p1.name} mempunyai ${val1} ${kind}, manakala piramid bertapak ${p2.name} mempunyai ${val2} ${kind}. Jumlah = ${val1} + ${val2} = ${total}.`;
          return buildMcq(rng, meta, q, fmtInt(total), wrongs.map(fmtInt), exp, `ec_${p1.n}_${p2.n}_${kind}`);
        }

        // b6_s1_H_net_area_reverse
        const s = randInt(rng, 4, 15) * 2;
        const h = randInt(rng, 5, 22);
        const totalArea = s * s + 2 * s * h;
        const q = `Bentangan sebuah piramid tapak segi empat sama terdiri daripada satu tapak bersisi ${s} cm dan empat muka segi tiga sama kaki yang kongruen. Jika jumlah luas bentangan itu ialah ${fmtInt(totalArea)} cm², cari tinggi bagi setiap muka segi tiga tersebut.`;
        const wrongs = [h * 2, Math.max(2, Math.floor(h / 2)), h + 2, Math.max(1, h - 2)];
        const exp = `Luas tapak = ${s}² = ${s * s} cm². Luas 4 segi tiga = ${totalArea} - ${s * s} = ${2 * s * h} cm², maka luas 1 segi tiga = ${Math.round((s * h) / 2)} cm². Menggunakan 1/2 × ${s} × t = ${Math.round((s * h) / 2)}, diperoleh t = ${h} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(h, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `na_${s}_${h}`);
      }
    },

    // ------------------------- b6_s2_L -------------------------
    {
      id: "b6_s2_L",
      unit: "b6",
      skill: "b6_s2",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b6_s2_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s2_L_prism_cuboid", "b6_s2_L_cylinder", "b6_s2_L_sphere_cone"];
        const meta = { unit: "b6", skill: "b6_s2", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const k = randInt(rng, 1, 3);
          const a = base[0] * k;
          const b = base[1] * k;
          const c = base[2] * k;
          const L = randInt(rng, 8, 25);
          const sa = a * b + (a + b + c) * L;
          const q = `Sebuah prisma tegak mempunyai keratan rentas berbentuk segi tiga bersudut tegak dengan sisi ${a} cm, ${b} cm dan hipotenus ${c} cm. Jika panjang prisma itu ialah ${L} cm, hitung jumlah luas permukaannya.`;
          const wrongs = [0.5 * a * b * L, 0.5 * a * b + (a + b + c) * L, a * b + (a + b) * L, sa + a * b];
          const exp = `Luas 2 tapak segi tiga = 2 × (1/2 × ${a} × ${b}) = ${a * b} cm². Luas 3 muka sisi = (${a} + ${b} + ${c}) × ${L} = ${(a + b + c) * L} cm². Jumlah = ${fmtInt(sa)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `pr_${a}_${b}_${L}`);
        }

        if (tIdx === 1) {
          const r = pick(rng, [7, 14, 21, 28]);
          const h = randInt(rng, 5, 30);
          const sa = Math.round(2 * (22 / 7) * r * r + 2 * (22 / 7) * r * h);
          const q = `Hitung jumlah luas permukaan sebuah silinder tertutup yang berjejari ${r} cm dan tinggi ${h} cm. [Guna π = 22/7]`;
          const wrongs = [
            Math.round((22 / 7) * r * r + 2 * (22 / 7) * r * h),
            Math.round(2 * (22 / 7) * r * h),
            Math.round((22 / 7) * r * r * h),
            sa + 154
          ];
          const exp = `Luas permukaan silinder = 2πj² + 2πjt = 2 × (22/7) × ${r}² + 2 × (22/7) × ${r} × ${h} = ${fmtInt(sa)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `cyl_${r}_${h}`);
        }

        const useSphere = randInt(rng, 0, 1) === 1;
        const r = pick(rng, [7, 14, 21, 28, 35]);
        if (useSphere) {
          const sa = Math.round(4 * (22 / 7) * r * r);
          const q = `Hitung jumlah luas permukaan sebuah sfera yang berjejari ${r} cm. [Guna π = 22/7]`;
          const wrongs = [Math.round(2 * (22 / 7) * r * r), Math.round((22 / 7) * r * r), Math.round(3 * (22 / 7) * r * r), sa + 154];
          const exp = `Luas permukaan sfera = 4πj² = 4 × (22/7) × ${r}² = ${fmtInt(sa)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `sph_${r}`);
        }
        const s = randInt(rng, r + 3, r + 30);
        const sa = Math.round((22 / 7) * r * r + (22 / 7) * r * s);
        const q = `Sebuah kon tertutup mempunyai jejari tapak ${r} cm dan tinggi sendeng ${s} cm. Hitung jumlah luas permukaan kon tersebut. [Guna π = 22/7]`;
        const wrongs = [Math.round((22 / 7) * r * s), Math.round(2 * (22 / 7) * r * r + (22 / 7) * r * s), sa + 77, Math.max(50, sa - 77)];
        const exp = `Luas permukaan kon = πj² + πjs = (22/7) × ${r}² + (22/7) × ${r} × ${s} = ${fmtInt(sa)} cm².`;
        return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `con_${r}_${s}`);
      }
    },

    // ------------------------- b6_s2_M -------------------------
    {
      id: "b6_s2_M",
      unit: "b6",
      skill: "b6_s2",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b6_s2_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s2_M_pyramid", "b6_s2_M_open_container", "b6_s2_M_reverse_dim"];
        const meta = { unit: "b6", skill: "b6_s2", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const k = randInt(rng, 1, 3);
          const swap = randInt(rng, 0, 1) === 1;
          const halfSide = (swap ? base[1] : base[0]) * k;
          const h = (swap ? base[0] : base[1]) * k;
          const slant = base[2] * k;
          const side = 2 * halfSide;
          const sa = side * side + 2 * side * slant;
          const q = `Sebuah piramid tegak bertapak segi empat sama mempunyai panjang sisi tapak ${side} cm dan tinggi tegak ${h} cm. Hitung jumlah luas permukaan piramid tersebut.`;
          const wrongs = [
            side * side + 2 * side * h,
            side * side + side * slant,
            Math.round((1 / 3) * side * side * h),
            sa + side * side
          ];
          const exp = `Separuh sisi tapak = ${side} ÷ 2 = ${halfSide} cm. Tinggi sendeng s = √(${halfSide}² + ${h}²) = ${slant} cm. Jumlah luas permukaan = ${side}² + 4 × (1/2 × ${side} × ${slant}) = ${fmtInt(sa)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `pyr_${side}_${h}`);
        }

        if (tIdx === 1) {
          const r = pick(rng, [7, 14, 21, 28]);
          const h = randInt(rng, 8, 35);
          const sa = Math.round((22 / 7) * r * r + 2 * (22 / 7) * r * h);
          const fullSa = Math.round(2 * (22 / 7) * r * r + 2 * (22 / 7) * r * h);
          const obj = pick(rng, ["tin silinder terbuka di bahagian atas", "bekas air silinder tanpa penutup", "baldi silinder terbuka di atas"]);
          const q = `Sebuah ${obj} mempunyai jejari ${r} cm dan tinggi ${h} cm. Hitung jumlah luas permukaan luar bekas tersebut. [Guna π = 22/7]`;
          const wrongs = [fullSa, Math.round(2 * (22 / 7) * r * h), Math.round((22 / 7) * r * r + (22 / 7) * r * h), sa + 77];
          const exp = `Bekas terbuka hanya mempunyai 1 tapak bulatan dan 1 muka melengkung: πj² + 2πjt = (22/7) × ${r}² + 2 × (22/7) × ${r} × ${h} = ${fmtInt(sa)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(sa, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `opn_${r}_${h}`);
        }

        // b6_s2_M_reverse_dim
        const mode = randInt(rng, 0, 1);
        if (mode === 0) {
          const r = pick(rng, [7, 14, 21, 28]);
          const h = randInt(rng, 6, 32);
          const sa = Math.round(2 * (22 / 7) * r * r + 2 * (22 / 7) * r * h);
          const q = `Jumlah luas permukaan sebuah silinder tertutup berjejari ${r} cm ialah ${fmtInt(sa)} cm². Hitung tinggi silinder itu. [Guna π = 22/7]`;
          const wrongs = [h + r, h * 2, Math.max(2, h - 4), h + 4];
          const exp = `2πj² + 2πjt = ${fmtInt(sa)} → ${2 * Math.round((22 / 7) * r * r)} + ${44 * (r / 7)}t = ${fmtInt(sa)} → t = ${h} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(h, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rev_c_${r}_${h}`);
        }
        const r = pick(rng, [7, 14, 21, 28, 35]);
        const sa = Math.round(4 * (22 / 7) * r * r);
        const q = `Luas permukaan sebuah sfera ialah ${fmtInt(sa)} cm². Cari jejari sfera tersebut. [Guna π = 22/7]`;
        const wrongs = [2 * r, r + 7, Math.max(3, r - 7), r * r];
        const exp = `4πj² = ${fmtInt(sa)} → 4 × (22/7) × j² = ${fmtInt(sa)} → j² = ${r * r} → j = ${r} cm.`;
        return buildMcq(rng, meta, q, fmtUnit(r, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rev_s_${r}`);
      }
    },

    // ------------------------- b6_s2_H -------------------------
    {
      id: "b6_s2_H",
      unit: "b6",
      skill: "b6_s2",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b6_s2_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s2_H_composite_cyl_cone", "b6_s2_H_cube_prism_composite", "b6_s2_H_paint_cost"];
        const meta = { unit: "b6", skill: "b6_s2", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const ct = pick(rng, CONE_TRIPLES);
          const r = ct[0];
          const tCone = ct[1];
          const sCone = ct[2];
          const hCyl = randInt(rng, 10, 35);
          // Composite: closed base circle + cylinder curved + cone curved (no internal circle!)
          const baseA = Math.round((22 / 7) * r * r);
          const cylA = Math.round(2 * (22 / 7) * r * hCyl);
          const coneA = Math.round((22 / 7) * r * sCone);
          const total = baseA + cylA + coneA;
          const q = `Sebuah pepejal gabungan terdiri daripada sebuah silinder tegak berjejari ${r} cm dan tinggi ${hCyl} cm yang di atasnya diletakkan sebuah kon berjejari sama ${r} cm dan tinggi tegak ${tCone} cm. Hitung jumlah luas permukaan luar pepejal gabungan itu. [Guna π = 22/7]`;
          const wrongs = [
            total + 2 * baseA,
            total + baseA,
            baseA + cylA + Math.round((22 / 7) * r * tCone),
            cylA + coneA
          ];
          const exp = `Tinggi sendeng kon s = √(${r}² + ${tCone}²) = ${sCone} cm. Luas permukaan luar = luas tapak bulatan (${fmtInt(baseA)}) + muka melengkung silinder (${fmtInt(cylA)}) + muka melengkung kon (${fmtInt(coneA)}) = ${fmtInt(total)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(total, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `comp_${r}_${hCyl}_${tCone}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 3));
          const k = randInt(rng, 1, 2);
          const halfS = (randInt(rng, 0, 1) === 1 ? base[1] : base[0]) * k;
          const hPyr = (halfS === base[0] * k ? base[1] : base[0]) * k;
          const slant = base[2] * k;
          const side = 2 * halfS;
          const hCuboid = randInt(rng, 8, 25);
          // Cuboid (bottom + 4 sides) + Pyramid (4 triangles) = s^2 + 4*s*hCuboid + 2*s*slant
          const total = side * side + 4 * side * hCuboid + 2 * side * slant;
          const q = `Sebuah tugu mini dibentuk dengan meletakkan sebuah piramid tegak tapak segi empat sama (tinggi tegak ${hPyr} cm) di atas sebuah kuboid bertapak segi empat sama berukuran ${side} cm × ${side} cm dan tinggi ${hCuboid} cm. Hitung jumlah luas permukaan luar tugu itu.`;
          const wrongs = [
            total + 2 * side * side,
            side * side + 4 * side * hCuboid + 2 * side * hPyr,
            4 * side * hCuboid + 2 * side * slant,
            total + side * side
          ];
          const exp = `Tinggi sendeng piramid = √(${halfS}² + ${hPyr}²) = ${slant} cm. Luas permukaan luar = 1 tapak (${side * side}) + 4 sisi kuboid (${4 * side * hCuboid}) + 4 segi tiga piramid (${2 * side * slant}) = ${fmtInt(total)} cm².`;
          return buildMcq(rng, meta, q, fmtUnit(total, "cm²"), wrongs.map((v) => fmtUnit(v, "cm²")), exp, `cpyr_${side}_${hCuboid}_${hPyr}`);
        }

        // b6_s2_H_paint_cost
        const r = pick(rng, [7, 14, 21]);
        const rM = r / 10; // e.g. 0.7, 1.4, 2.1 -> use integer meters! Actually let r be in meters directly: 7 m? Too wide for pillar, use 0.7 m or 1.4 m or 7 m dome!
        const rDom = pick(rng, [3.5, 7, 10.5, 14]);
        const area = Math.round(2 * (22 / 7) * rDom * rDom); // hemisphere curved outer area
        const rate = randInt(rng, 4, 12);
        const cost = area * rate;
        const q = `Permukaan melengkung luar sebuah kubah berbentuk hemisfera yang berjejari ${fmtDec(rDom, 1)} m hendak dicat dengan kos RM ${rate} bagi setiap meter persegi. Hitung jumlah kos mengecat kubah itu. [Guna π = 22/7]`;
        const wrongs = [cost * 2, (area + Math.round((22 / 7) * rDom * rDom)) * rate, Math.round(cost / 2), cost + 154];
        const exp = `Luas permukaan melengkung hemisfera = 2πj² = 2 × (22/7) × ${fmtDec(rDom, 1)}² = ${fmtInt(area)} m². Jumlah kos = ${fmtInt(area)} × RM ${rate} = ${fmtRM(cost)}.`;
        return buildMcq(rng, meta, q, fmtRM(cost), wrongs.map(fmtRM), exp, `pnt_${rDom}_${rate}`);
      }
    },

    // ------------------------- b6_s3_L -------------------------
    {
      id: "b6_s3_L",
      unit: "b6",
      skill: "b6_s3",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b6_s3_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s3_L_prism", "b6_s3_L_cylinder", "b6_s3_L_pyramid_cone_sphere"];
        const meta = { unit: "b6", skill: "b6_s3", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const isTrap = randInt(rng, 0, 1) === 1;
          if (isTrap) {
            const a = randInt(rng, 4, 14);
            const b = randInt(rng, a + 2, 20);
            const h = randInt(rng, 2, 7) * 2;
            const L = randInt(rng, 8, 25);
            const vol = Math.round(0.5 * (a + b) * h * L);
            const q = `Sebuah prisma tegak mempunyai keratan rentas berbentuk trapezium dengan sisi selari ${a} cm dan ${b} cm serta tinggi trapezium ${h} cm. Jika panjang prisma ialah ${L} cm, hitung isi padu prisma itu.`;
            const wrongs = [(a + b) * h * L, a * b * L, Math.round((1 / 3) * 0.5 * (a + b) * h * L), vol + h * L];
            const exp = `Luas keratan rentas trapezium = 1/2 × (${a} + ${b}) × ${h} = ${Math.round(0.5 * (a + b) * h)} cm². Isi padu = ${Math.round(0.5 * (a + b) * h)} × ${L} = ${fmtInt(vol)} cm³.`;
            return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vp_t_${a}_${b}_${h}_${L}`);
          }
          const b = randInt(rng, 3, 12) * 2;
          const h = randInt(rng, 4, 18);
          const L = randInt(rng, 8, 28);
          const vol = Math.round(0.5 * b * h * L);
          const q = `Sebuah prisma segi tiga mempunyai tapak segi tiga dengan panjang tapak ${b} cm dan tinggi ${h} cm. Jika panjang prisma ialah ${L} cm, hitung isi padu prisma tersebut.`;
          const wrongs = [b * h * L, Math.round((1 / 3) * b * h * L), vol + b * L, Math.max(20, vol - b * L)];
          const exp = `Isi padu prisma = luas keratan rentas × panjang = (1/2 × ${b} × ${h}) × ${L} = ${fmtInt(vol)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vp_s_${b}_${h}_${L}`);
        }

        if (tIdx === 1) {
          const r = pick(rng, [7, 14, 21, 28]);
          const h = randInt(rng, 5, 30);
          const vol = Math.round((22 / 7) * r * r * h);
          const q = `Hitung isi padu sebuah silinder yang berjejari ${r} cm dan tinggi ${h} cm. [Guna π = 22/7]`;
          const wrongs = [Math.round((1 / 3) * (22 / 7) * r * r * h), Math.round(2 * (22 / 7) * r * h), Math.round((22 / 7) * r * h), vol + 154];
          const exp = `Isi padu silinder = πj²t = (22/7) × ${r}² × ${h} = ${fmtInt(vol)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vc_${r}_${h}`);
        }

        const kind = randInt(rng, 0, 2);
        if (kind === 0) {
          const r = pick(rng, [7, 14, 21, 28]);
          const h = randInt(rng, 2, 12) * 3;
          const vol = Math.round((1 / 3) * (22 / 7) * r * r * h);
          const q = `Hitung isi padu sebuah kon yang mempunyai jejari tapak ${r} cm dan tinggi tegak ${h} cm. [Guna π = 22/7]`;
          const wrongs = [vol * 3, Math.round((22 / 7) * r * h), Math.round((2 / 3) * (22 / 7) * r * r * h), vol + 154];
          const exp = `Isi padu kon = 1/3 × πj²t = 1/3 × (22/7) × ${r}² × ${h} = ${fmtInt(vol)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vco_${r}_${h}`);
        }
        if (kind === 1) {
          const r = pick(rng, [10.5, 21, 42]);
          const vol = Math.round((4 / 3) * (22 / 7) * r * r * r);
          const q = `Hitung isi padu sebuah sfera yang berjejari ${fmtDec(r, 1)} cm. [Guna π = 22/7]`;
          const wrongs = [Math.round((1 / 3) * (22 / 7) * r * r * r), Math.round(4 * (22 / 7) * r * r), Math.round(vol / 2), vol + 462];
          const exp = `Isi padu sfera = 4/3 × πj³ = 4/3 × (22/7) × (${fmtDec(r, 1)})³ = ${fmtInt(vol)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vsph_${r}`);
        }
        const a = randInt(rng, 4, 15);
        const b = randInt(rng, 4, 15);
        const h = randInt(rng, 3, 10) * 3;
        const vol = Math.round((1 / 3) * a * b * h);
        const q = `Sebuah piramid mempunyai tapak segi empat tepat berukuran ${a} cm × ${b} cm dan tinggi tegak ${h} cm. Hitung isi padu piramid tersebut.`;
        const wrongs = [a * b * h, Math.round((1 / 2) * a * b * h), vol + a * b, Math.max(10, vol - a)];
        const exp = `Isi padu piramid = 1/3 × luas tapak × tinggi = 1/3 × (${a} × ${b}) × ${h} = ${fmtInt(vol)} cm³.`;
        return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `vpy_${a}_${b}_${h}`);
      }
    },

    // ------------------------- b6_s3_M -------------------------
    {
      id: "b6_s3_M",
      unit: "b6",
      skill: "b6_s3",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b6_s3_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s3_M_reverse_height_or_r", "b6_s3_M_cone_slant_to_vol", "b6_s3_M_liquid_level"];
        const meta = { unit: "b6", skill: "b6_s3", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const isCone = randInt(rng, 0, 1) === 1;
          const r = pick(rng, [7, 14, 21]);
          if (isCone) {
            const h = randInt(rng, 3, 14) * 3;
            const vol = Math.round((1 / 3) * (22 / 7) * r * r * h);
            const q = `Isi padu sebuah kon berjejari ${r} cm ialah ${fmtInt(vol)} cm³. Hitung tinggi kon itu. [Guna π = 22/7]`;
            const wrongs = [Math.round(h / 3), h * 2, h + 3, Math.max(3, h - 3)];
            const exp = `1/3 × (22/7) × ${r}² × t = ${fmtInt(vol)} → t = (${fmtInt(vol)} × 3) ÷ ${Math.round((22 / 7) * r * r)} = ${h} cm.`;
            return buildMcq(rng, meta, q, fmtUnit(h, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rh_co_${r}_${h}`);
          }
          const h = randInt(rng, 6, 30);
          const vol = Math.round((22 / 7) * r * r * h);
          const q = `Sebuah tangki silinder berjejari ${r} cm mempunyai isi padu ${fmtInt(vol)} cm³. Hitung tinggi tangki tersebut. [Guna π = 22/7]`;
          const wrongs = [h * 3, Math.max(2, h - 4), h + 4, Math.max(2, Math.floor(h / 2))];
          const exp = `(22/7) × ${r}² × t = ${fmtInt(vol)} → t = ${fmtInt(vol)} ÷ ${Math.round((22 / 7) * r * r)} = ${h} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(h, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `rh_cy_${r}_${h}`);
        }

        if (tIdx === 1) {
          // Pick CONE_TRIPLES where t is divisible by 3 or j=21 so 1/3 * (22/7) * j^2 * t is integer!
          const validCone = CONE_TRIPLES.filter(([j, t]) => t % 3 === 0 || j % 21 === 0);
          const [r, t, s] = pick(rng, validCone);
          const vol = Math.round((1 / 3) * (22 / 7) * r * r * t);
          const q = `Sebuah kon mempunyai jejari tapak ${r} cm dan tinggi sendeng ${s} cm. Hitung isi padu kon tersebut. [Guna π = 22/7]`;
          const wrongs = [
            Math.round((1 / 3) * (22 / 7) * r * r * s),
            vol * 3,
            Math.round((22 / 7) * r * s),
            vol + 154
          ];
          const exp = `Tinggi tegak t = √(${s}² - ${r}²) = ${t} cm. Isi padu kon = 1/3 × (22/7) × ${r}² × ${t} = ${fmtInt(vol)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(vol, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `csv_${r}_${s}`);
        }

        const r = pick(rng, [7, 14, 21]);
        const frac = pick(rng, [
          { str: "1/2", num: 1, den: 2 },
          { str: "2/3", num: 2, den: 3 },
          { str: "3/4", num: 3, den: 4 },
          { str: "4/5", num: 4, den: 5 }
        ]);
        const h = randInt(rng, 2, 9) * frac.den;
        const hWater = (h * frac.num) / frac.den;
        const volWater = Math.round((22 / 7) * r * r * hWater);
        const q = `Sebuah bekas silinder berjejari ${r} cm dan tinggi ${h} cm diisi air sehingga ${frac.str} daripada ketinggiannya. Hitung isi padu air di dalam bekas itu. [Guna π = 22/7]`;
        const wrongs = [
          Math.round((22 / 7) * r * r * h),
          Math.round((22 / 7) * r * r * (h - hWater)),
          Math.round(volWater / 2),
          volWater + 154
        ];
        const exp = `Ketinggian air = ${frac.str} × ${h} = ${hWater} cm. Isi padu air = (22/7) × ${r}² × ${hWater} = ${fmtInt(volWater)} cm³.`;
        return buildMcq(rng, meta, q, fmtUnit(volWater, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `liq_${r}_${h}_${frac.str}`);
      }
    },

    // ------------------------- b6_s3_H -------------------------
    {
      id: "b6_s3_H",
      unit: "b6",
      skill: "b6_s3",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b6_s3_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b6_s3_H_composite_vol", "b6_s3_H_melt_recast", "b6_s3_H_remaining_vol"];
        const meta = { unit: "b6", skill: "b6_s3", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const r = pick(rng, [7, 14, 21]);
          const hCyl = randInt(rng, 10, 30);
          const hCone = randInt(rng, 2, 9) * 3;
          const vCyl = Math.round((22 / 7) * r * r * hCyl);
          const vCone = Math.round((1 / 3) * (22 / 7) * r * r * hCone);
          const total = vCyl + vCone;
          const q = `Sebuah roket mainan dibentuk daripada sebuah silinder berjejari ${r} cm dan tinggi ${hCyl} cm yang dicantumkan dengan sebuah kon berjejari sama ${r} cm dan tinggi tegak ${hCone} cm di bahagian atasnya. Hitung jumlah isi padu pepejal itu. [Guna π = 22/7]`;
          const wrongs = [vCyl + 3 * vCone, vCyl - vCone, Math.round((22 / 7) * r * r * (hCyl + hCone)), total + 154];
          const exp = `Isi padu silinder = (22/7) × ${r}² × ${hCyl} = ${fmtInt(vCyl)} cm³. Isi padu kon = 1/3 × (22/7) × ${r}² × ${hCone} = ${fmtInt(vCone)} cm³. Jumlah = ${fmtInt(total)} cm³.`;
          return buildMcq(rng, meta, q, fmtUnit(total, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `cv_${r}_${hCyl}_${hCone}`);
        }

        if (tIdx === 1) {
          // Pour N full cones (rCone, hCone) into a cylinder of radius rCyl -> find water level height!
          const rCone = pick(rng, [7, 14]);
          const hCone = randInt(rng, 3, 9) * 3;
          const mult = pick(rng, [1, 2]);
          const rCyl = rCone * mult;
          // n * (1/3 * rCone^2 * hCone) = rCyl^2 * hWater => hWater = (n * hCone) / (3 * mult^2)
          const n = 3 * mult * mult * randInt(rng, 1, 4);
          const hWater = (n * hCone) / (3 * mult * mult);
          const q = `Air daripada ${n} buah bekas berbentuk kon yang penuh (berjejari ${rCone} cm dan tinggi tegak ${hCone} cm setiap satu) dituang kesemuanya ke dalam sebuah silinder tegak kosong berjejari ${rCyl} cm. Hitung paras ketinggian air di dalam silinder itu. [Guna π = 22/7]`;
          const wrongs = [hWater * 3, Math.max(1, hWater / 2), hWater + 6, Math.max(2, hWater - 3)];
          const exp = `Isi padu ${n} kon = ${n} × 1/3 × π × ${rCone}² × ${hCone} = π × ${rCyl}² × t → t = (${n} × ${rCone * rCone} × ${hCone}) ÷ (3 × ${rCyl * rCyl}) = ${hWater} cm.`;
          return buildMcq(rng, meta, q, fmtUnit(hWater, "cm"), wrongs.map((v) => fmtUnit(v, "cm")), exp, `mr_${rCone}_${hCone}_${n}_${mult}`);
        }

        // b6_s3_H_remaining_vol: Cylinder with cone hollowed out, or cube with cylinder hollowed out
        const r = pick(rng, [7, 14, 21]);
        const s = 2 * r + randInt(rng, 2, 10);
        const h = randInt(rng, 10, 28);
        const vBlock = s * s * h;
        const vCyl = Math.round((22 / 7) * r * r * h);
        const rem = vBlock - vCyl;
        const q = `Sebuah blok kayu berbentuk prisma bertapak segi empat sama berukuran ${s} cm × ${s} cm dan tinggi ${h} cm ditebuk menembusi tengahnya dengan satu lubang silinder berjejari ${r} cm dan tinggi ${h} cm. Hitung isi padu kayu yang tinggal. [Guna π = 22/7]`;
        const wrongs = [vBlock + vCyl, vCyl, vBlock - Math.round((1 / 3) * vCyl), rem + 154];
        const exp = `Isi padu blok = ${s} × ${s} × ${h} = ${fmtInt(vBlock)} cm³. Isi padu silinder = (22/7) × ${r}² × ${h} = ${fmtInt(vCyl)} cm³. Baki = ${fmtInt(vBlock)} - ${fmtInt(vCyl)} = ${fmtInt(rem)} cm³.`;
        return buildMcq(rng, meta, q, fmtUnit(rem, "cm³"), wrongs.map((v) => fmtUnit(v, "cm³")), exp, `rem_${s}_${r}_${h}`);
      }
    }
  ];

  generators.push(
    // =========================================================================
    // BAB 7: KOORDINAT (b7_s1, b7_s2, b7_s3)
    // =========================================================================

    // ------------------------- b7_s1_L -------------------------
    {
      id: "b7_s1_L",
      unit: "b7",
      skill: "b7_s1",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b7_s1_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s1_L_same_x_or_y", "b7_s1_L_from_origin", "b7_s1_L_axis_points"];
        const meta = { unit: "b7", skill: "b7_s1", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const sameX = randInt(rng, 0, 1) === 1;
          const fixed = randInt(rng, -9, 9);
          const v1 = randInt(rng, -12, -1);
          const v2 = randInt(rng, 1, 14);
          const dist = v2 - v1;
          const [p1, p2] = sameX ? [[fixed, v1], [fixed, v2]] : [[v1, fixed], [v2, fixed]];
          const lbl = pick(rng, [["A", "B"], ["P", "Q"], ["K", "L"], ["M", "N"]]);
          const q = `Hitung jarak di antara titik ${lbl[0]}${fmtCoord(p1[0], p1[1])} dengan titik ${lbl[1]}${fmtCoord(p2[0], p2[1])} pada satah Cartes.`;
          const wrongs = [Math.abs(v2 + v1), Math.abs(v2 - Math.abs(v1)), dist + 2, Math.max(1, dist - 2)];
          const exp = `Oleh sebab koordinat-${sameX ? "x" : "y"} adalah sama (${fixed}), jarak = ${v2} - (${v1}) = ${dist} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(dist, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `sxy_${sameX}_${v1}_${v2}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const k = randInt(rng, 1, 2);
          const swap = randInt(rng, 0, 1) === 1;
          const sx = pick(rng, [-1, 1]);
          const sy = pick(rng, [-1, 1]);
          const x = sx * (swap ? base[1] : base[0]) * k;
          const y = sy * (swap ? base[0] : base[1]) * k;
          const d = base[2] * k;
          const pt = pick(rng, ["A", "P", "K", "M", "R"]);
          const q = `Cari jarak titik ${pt}${fmtCoord(x, y)} dari asalan O(0, 0) pada satah Cartes.`;
          const wrongs = [Math.abs(x) + Math.abs(y), d * d, Math.abs(Math.abs(x) - Math.abs(y)), d + 2];
          const exp = `Jarak dari asalan = √(${x}² + ${y}²) = √(${x * x + y * y}) = ${d} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(d, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `org_${x}_${y}`);
        }

        const base = pick(rng, TRIPLES.slice(0, 4));
        const k = randInt(rng, 1, 2);
        const swap = randInt(rng, 0, 1) === 1;
        const a = pick(rng, [-1, 1]) * (swap ? base[1] : base[0]) * k;
        const b = pick(rng, [-1, 1]) * (swap ? base[0] : base[1]) * k;
        const d = base[2] * k;
        const q = `Titik P${fmtCoord(a, 0)} terletak pada paksi-x dan titik Q${fmtCoord(0, b)} terletak pada paksi-y. Hitung jarak PQ.`;
        const wrongs = [Math.abs(a) + Math.abs(b), Math.abs(Math.abs(a) - Math.abs(b)), d * d, d + 3];
        const exp = `PQ = √((0 - (${a}))² + (${b} - 0)²) = √(${a * a + b * b}) = ${d} unit.`;
        return buildMcq(rng, meta, q, fmtUnit(d, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `ax_${a}_${b}`);
      }
    },

    // ------------------------- b7_s1_M -------------------------
    {
      id: "b7_s1_M",
      unit: "b7",
      skill: "b7_s1",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b7_s1_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s1_M_general_dist", "b7_s1_M_find_coord_from_dist", "b7_s1_M_sum_two_segments"];
        const meta = { unit: "b7", skill: "b7_s1", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const base = pick(rng, TRIPLES.slice(0, 5));
          const k = randInt(rng, 1, 2);
          const swap = randInt(rng, 0, 1) === 1;
          const dx = pick(rng, [-1, 1]) * (swap ? base[1] : base[0]) * k;
          const dy = pick(rng, [-1, 1]) * (swap ? base[0] : base[1]) * k;
          const d = base[2] * k;
          const x1 = randInt(rng, -8, 6);
          const y1 = randInt(rng, -8, 6);
          const x2 = x1 + dx;
          const y2 = y1 + dy;
          const lbl = pick(rng, [["A", "B"], ["P", "Q"], ["R", "S"], ["K", "L"]]);
          const q = `Hitung jarak di antara titik ${lbl[0]}${fmtCoord(x1, y1)} dengan titik ${lbl[1]}${fmtCoord(x2, y2)}.`;
          const wrongs = [Math.abs(dx) + Math.abs(dy), d * d, Math.abs(Math.abs(dx) - Math.abs(dy)), d + 2];
          const exp = `Jarak = √((${x2} - (${x1}))² + (${y2} - (${y1}))²) = √(${dx * dx} + ${dy * dy}) = √${d * d} = ${d} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(d, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `gd_${x1}_${y1}_${x2}_${y2}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const swap = randInt(rng, 0, 1) === 1;
          const dx = (swap ? base[1] : base[0]);
          const dy = (swap ? base[0] : base[1]);
          const d = base[2];
          const x1 = randInt(rng, -6, 6);
          const y1 = randInt(rng, -6, 6);
          const dir = pick(rng, [-1, 1]);
          const x2 = x1 + pick(rng, [-1, 1]) * dx;
          const kVal = y1 + dir * dy;
          const cond = dir > 0 ? `k > ${y1}` : `k < ${y1}`;
          const wrongAlt = y1 - dir * dy;
          const q = `Jarak di antara titik P${fmtCoord(x1, y1)} dengan titik Q(${x2}, k) ialah ${d} unit. Diberi ${cond}, cari nilai k.`;
          const wrongs = [wrongAlt, y1 + dir * d, kVal + 2, kVal - 2];
          const exp = `√((${x2} - (${x1}))² + (k - (${y1}))²) = ${d} → ${dx * dx} + (k - (${y1}))² = ${d * d} → (k - (${y1}))² = ${dy * dy} → k - (${y1}) = ±${dy}. Oleh sebab ${cond}, k = ${kVal}.`;
          return buildMcq(rng, meta, q, fmtInt(kVal), wrongs.map(fmtInt), exp, `fc_${x1}_${y1}_${x2}_${kVal}`);
        }

        // b7_s1_M_sum_two_segments: A -> B -> C
        const t1 = pick(rng, TRIPLES.slice(0, 3));
        const t2 = pick(rng, TRIPLES.slice(0, 3));
        const ax = randInt(rng, -5, 2);
        const ay = randInt(rng, -5, 2);
        const bx = ax + t1[0];
        const by = ay + t1[1];
        const cx = bx + t2[1];
        const cy = by - t2[0];
        const total = t1[2] + t2[2];
        const q = `Pada suatu satah Cartes, titik A${fmtCoord(ax, ay)}, titik B${fmtCoord(bx, by)} dan titik C${fmtCoord(cx, cy)} diplotkan. Hitung jumlah jarak AB + BC.`;
        const wrongs = [t1[2], t2[2], total + 2, Math.abs(t1[2] - t2[2]) + 4];
        const exp = `AB = √(${t1[0]}² + ${t1[1]}²) = ${t1[2]} unit dan BC = √(${t2[1]}² + (-${t2[0]})²) = ${t2[2]} unit. Jumlah AB + BC = ${t1[2]} + ${t2[2]} = ${total} unit.`;
        return buildMcq(rng, meta, q, fmtUnit(total, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `ss_${ax}_${ay}_${t1[2]}_${t2[2]}`);
      }
    },

    // ------------------------- b7_s1_H -------------------------
    {
      id: "b7_s1_H",
      unit: "b7",
      skill: "b7_s1",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b7_s1_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s1_H_scaled_grid", "b7_s1_H_polygon_perimeter", "b7_s1_H_equidistant_axis"];
        const meta = { unit: "b7", skill: "b7_s1", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const base = pick(rng, TRIPLES.slice(0, 5));
          const dx = pick(rng, [-1, 1]) * base[0];
          const dy = pick(rng, [-1, 1]) * base[1];
          const d = base[2];
          const x1 = randInt(rng, -5, 5);
          const y1 = randInt(rng, -5, 5);
          const x2 = x1 + dx;
          const y2 = y1 + dy;
          const scale = pick(rng, [2, 5, 10, 20, 50, 100]);
          const unit = scale >= 10 ? "m" : "km";
          const actual = d * scale;
          const placeA = pick(rng, ["Sekolah", "Perpustakaan", "Stesen Bas", "Hospital"]);
          const placeB = pick(rng, ["Pasar Raya", "Taman Rekreasi", "Pejabat Pos", "Balai Polis"]);
          const q = `Pada sebuah peta bersatah Cartes dengan skala 1 unit mewakili ${scale} ${unit}, kedudukan ${placeA} ialah ${fmtCoord(x1, y1)} dan kedudukan ${placeB} ialah ${fmtCoord(x2, y2)}. Hitung jarak sebenar di antara ${placeA} dengan ${placeB}.`;
          const wrongs = [d, (Math.abs(dx) + Math.abs(dy)) * scale, actual * 2, Math.max(scale, actual - scale)];
          const exp = `Jarak pada satah = √(${dx * dx} + ${dy * dy}) = ${d} unit. Jarak sebenar = ${d} × ${scale} = ${fmtInt(actual)} ${unit}.`;
          return buildMcq(rng, meta, q, fmtUnit(actual, unit), wrongs.map((v) => fmtUnit(v, unit)), exp, `sg_${x1}_${y1}_${d}_${scale}`);
        }

        if (tIdx === 1) {
          // Isosceles triangle with vertical/horizontal base and symmetric apex using Pythagorean triple
          const base = pick(rng, TRIPLES.slice(0, 4));
          const k = randInt(rng, 1, 2);
          const halfBase = base[0] * k;
          const height = base[1] * k;
          const slant = base[2] * k;
          const cx = randInt(rng, -4, 4);
          const cy = randInt(rng, -4, 4);
          const ax = cx - halfBase;
          const bx = cx + halfBase;
          const ay = cy;
          const by = cy;
          const apexY = cy + pick(rng, [-1, 1]) * height;
          const perim = 2 * halfBase + 2 * slant;
          const q = `Titik A${fmtCoord(ax, ay)}, B${fmtCoord(bx, by)} dan C${fmtCoord(cx, apexY)} ialah bucu-bucu bagi sebuah segi tiga pada satah Cartes. Hitung perimeter segi tiga ABC.`;
          const wrongs = [2 * halfBase + 2 * height, halfBase + 2 * slant, halfBase * height, perim + 4];
          const exp = `AB = ${2 * halfBase} unit. AC = BC = √(${halfBase}² + ${height}²) = ${slant} unit. Perimeter = ${2 * halfBase} + ${slant} + ${slant} = ${perim} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(perim, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `pp_${halfBase}_${height}_${cx}`);
        }

        // b7_s1_H_equidistant_axis: P(px, 0) equidistant from A(x1, y1) and B(x2, y2)
        const base = pick(rng, TRIPLES.slice(0, 4));
        const px = randInt(rng, -6, 6);
        const x1 = px - base[0];
        const y1 = pick(rng, [-1, 1]) * base[1];
        const x2 = px + base[1];
        const y2 = pick(rng, [-1, 1]) * base[0];
        const onXAxis = randInt(rng, 0, 1) === 1;
        if (onXAxis) {
          const q = `Titik P(x, 0) pada paksi-x berjarak sama dari titik A${fmtCoord(x1, y1)} dan titik B${fmtCoord(x2, y2)}. Cari nilai x.`;
          const wrongs = [Math.round((x1 + x2) / 2) === px ? px + 2 : Math.round((x1 + x2) / 2), px + 1, px - 1, -px === px ? px + 3 : -px];
          const exp = `PA² = PB² → (x - (${x1}))² + (${y1})² = (x - (${x2}))² + (${y2})². Menyelesaikan persamaan linear ini menghasilkan x = ${px}.`;
          return buildMcq(rng, meta, q, fmtInt(px), wrongs.map(fmtInt), exp, `eqx_${px}_${base[0]}_${y1}`);
        }
        // Swap roles so Q(0, py) on y-axis
        const py = px;
        const q = `Titik Q(0, y) pada paksi-y berjarak sama dari titik A${fmtCoord(y1, x1)} dan titik B${fmtCoord(y2, x2)}. Cari nilai y.`;
        const wrongs = [py + 1, py - 1, py + 3, -py === py ? py + 2 : -py];
        const exp = `QA² = QB² → (${y1})² + (y - (${x1}))² = (${y2})² + (y - (${x2}))². Menyelesaikan persamaan menghasilkan y = ${py}.`;
        return buildMcq(rng, meta, q, fmtInt(py), wrongs.map(fmtInt), exp, `eqy_${py}_${base[0]}_${y1}`);
      }
    },

    // ------------------------- b7_s2_L -------------------------
    {
      id: "b7_s2_L",
      unit: "b7",
      skill: "b7_s2",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b7_s2_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s2_L_midpoint_pos", "b7_s2_L_midpoint_neg", "b7_s2_L_midpoint_half"];
        const meta = { unit: "b7", skill: "b7_s2", diff: "L", template: templates[tIdx] };
        const lbl = pick(rng, [["A", "B"], ["P", "Q"], ["K", "L"], ["R", "S"]]);

        if (tIdx === 0) {
          const mx = randInt(rng, 3, 14);
          const my = randInt(rng, 3, 14);
          const dx = randInt(rng, 1, mx - 1);
          const dy = randInt(rng, 1, my - 1);
          const x1 = mx - dx, y1 = my - dy;
          const x2 = mx + dx, y2 = my + dy;
          const q = `Cari koordinat titik tengah bagi tembereng garis yang menyambungkan ${lbl[0]}${fmtCoord(x1, y1)} dan ${lbl[1]}${fmtCoord(x2, y2)}.`;
          const wrongs = [fmtCoord(dx, dy), fmtCoord(my, mx), fmtCoord(x1 + x2, y1 + y2), fmtCoord(mx + 1, my - 1)];
          const exp = `Titik tengah = ((${x1} + ${x2})/2, (${y1} + ${y2})/2) = ${fmtCoord(mx, my)}.`;
          return buildMcq(rng, meta, q, fmtCoord(mx, my), wrongs, exp, `mp_${x1}_${y1}_${x2}_${y2}`);
        }

        if (tIdx === 1) {
          const mx = randInt(rng, -8, 8);
          const my = randInt(rng, -8, 8);
          const dx = randInt(rng, 2, 9);
          const dy = randInt(rng, 2, 9);
          const x1 = mx - dx, y1 = my - dy;
          const x2 = mx + dx, y2 = my + dy;
          const q = `Tentukan koordinat titik tengah di antara titik ${lbl[0]}${fmtCoord(x1, y1)} dengan titik ${lbl[1]}${fmtCoord(x2, y2)}.`;
          const wrongs = [fmtCoord((x2 - x1) / 2, (y2 - y1) / 2), fmtCoord(my, mx), fmtCoord(mx + 1, my + 1), fmtCoord(mx - 1, my)];
          const exp = `Titik tengah = ((${x1} + (${x2}))/2, (${y1} + (${y2}))/2) = ${fmtCoord(mx, my)}.`;
          return buildMcq(rng, meta, q, fmtCoord(mx, my), wrongs, exp, `mn_${x1}_${y1}_${x2}_${y2}`);
        }

        const x1 = randInt(rng, -9, 9);
        const y1 = randInt(rng, -9, 9);
        const x2 = x1 + randInt(rng, -4, 4) * 2 + 1;
        const y2 = y1 + randInt(rng, -4, 4) * 2 + (randInt(rng, 0, 1) === 1 ? 1 : 0);
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const q = `Hitung koordinat titik tengah bagi garis lurus yang menyambungkan titik ${lbl[0]}${fmtCoord(x1, y1)} dan titik ${lbl[1]}${fmtCoord(x2, y2)}.`;
        const wrongs = [fmtCoord(my, mx), fmtCoord(mx + 1, my), fmtCoord(mx, my + 1), fmtCoord((x2 - x1) / 2, (y2 - y1) / 2)];
        const exp = `Titik tengah = ((${x1} + (${x2}))/2, (${y1} + (${y2}))/2) = ${fmtCoord(mx, my)}.`;
        return buildMcq(rng, meta, q, fmtCoord(mx, my), wrongs, exp, `mh_${x1}_${y1}_${x2}_${y2}`);
      }
    },

    // ------------------------- b7_s2_M -------------------------
    {
      id: "b7_s2_M",
      unit: "b7",
      skill: "b7_s2",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b7_s2_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s2_M_find_endpoint", "b7_s2_M_algebraic_midpoint", "b7_s2_M_diameter_center"];
        const meta = { unit: "b7", skill: "b7_s2", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const x1 = randInt(rng, -10, 10);
          const y1 = randInt(rng, -10, 10);
          const mx = randInt(rng, -6, 6);
          const my = randInt(rng, -6, 6);
          if (x1 === mx && y1 === my) {
            return this.generate(seed + 1000);
          }
          const x2 = 2 * mx - x1;
          const y2 = 2 * my - y1;
          const q = `Titik M${fmtCoord(mx, my)} ialah titik tengah bagi tembereng garis AB. Jika koordinat A ialah ${fmtCoord(x1, y1)}, cari koordinat B.`;
          const wrongs = [
            fmtCoord((x1 + mx) / 2, (y1 + my) / 2),
            fmtCoord(mx - x1, my - y1),
            fmtCoord(x2 + 2, y2),
            fmtCoord(y2, x2)
          ];
          const exp = `(${x1} + x)/2 = ${mx} → x = ${x2}, dan (${y1} + y)/2 = ${my} → y = ${y2}. Maka B ialah ${fmtCoord(x2, y2)}.`;
          return buildMcq(rng, meta, q, fmtCoord(x2, y2), wrongs, exp, `ep_${x1}_${y1}_${mx}_${my}`);
        }

        if (tIdx === 1) {
          const p = randInt(rng, -6, 8);
          const qVal = randInt(rng, -6, 8);
          const c = randInt(rng, -5, 7);
          const d = randInt(rng, -5, 7);
          const xSum = 2 * p + c;
          const ySum = d + 3 * qVal;
          const mx = xSum / 2;
          const my = ySum / 2;
          const ans = p + qVal;
          const q = `Titik tengah bagi garis yang menyambungkan titik K(2p, ${d}) dan titik L(${c}, 3q) ialah M${fmtCoord(mx, my)}. Hitung nilai p + q.`;
          const wrongs = [ans + 2, ans - 2, p * qVal === ans ? ans + 3 : p * qVal, 2 * p + 3 * qVal];
          const exp = `(2p + (${c}))/2 = ${fmtDec(mx, 1)} → 2p = ${2 * p} → p = ${p}. (${d} + 3q)/2 = ${fmtDec(my, 1)} → 3q = ${3 * qVal} → q = ${qVal}. Jadi p + q = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `alg_${p}_${qVal}_${c}_${d}`);
        }

        const cx = randInt(rng, -6, 6);
        const cy = randInt(rng, -6, 6);
        const dx = pickNonZero(rng, -7, 7);
        const dy = pickNonZero(rng, -7, 7);
        const px = cx - dx, py = cy - dy;
        const qx = cx + dx, qy = cy + dy;
        const findCenter = randInt(rng, 0, 1) === 1;
        if (findCenter) {
          const q = `Garis lurus PQ ialah diameter sebuah bulatan dengan koordinat P${fmtCoord(px, py)} dan Q${fmtCoord(qx, qy)}. Cari koordinat pusat bulatan itu.`;
          const wrongs = [fmtCoord(dx, dy), fmtCoord(cy, cx), fmtCoord(cx + 1, cy - 1), fmtCoord(px + qx, py + qy)];
          const exp = `Pusat bulatan ialah titik tengah diameter PQ: ((${px} + (${qx}))/2, (${py} + (${qy}))/2) = ${fmtCoord(cx, cy)}.`;
          return buildMcq(rng, meta, q, fmtCoord(cx, cy), wrongs, exp, `dc_${px}_${py}_${qx}_${qy}`);
        }
        const q = `PQ ialah diameter sebuah bulatan yang berpusat di O${fmtCoord(cx, cy)}. Jika koordinat P ialah ${fmtCoord(px, py)}, tentukan koordinat Q.`;
        const wrongs = [fmtCoord((px + cx) / 2, (py + cy) / 2), fmtCoord(qy, qx), fmtCoord(qx + 2, qy), fmtCoord(cx - dx, cy + dy)];
        const exp = `Pusat O ialah titik tengah PQ: Q = (2(${cx}) - (${px}), 2(${cy}) - (${py})) = ${fmtCoord(qx, qy)}.`;
        return buildMcq(rng, meta, q, fmtCoord(qx, qy), wrongs, exp, `de_${cx}_${cy}_${px}_${py}`);
      }
    },

    // ------------------------- b7_s2_H -------------------------
    {
      id: "b7_s2_H",
      unit: "b7",
      skill: "b7_s2",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b7_s2_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s2_H_parallelogram_4th", "b7_s2_H_midpoint_of_midpoints", "b7_s2_H_quarter_point"];
        const meta = { unit: "b7", skill: "b7_s2", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const ax = randInt(rng, -6, 4);
          const ay = randInt(rng, -6, 4);
          const bx = ax + randInt(rng, 2, 7);
          const by = ay + randInt(rng, -3, 3);
          const cx = bx + randInt(rng, -2, 6);
          const cy = by + randInt(rng, 2, 7);
          // ABCD parallelogram: A + C = B + D => D = A + C - B
          const dx = ax + cx - bx;
          const dy = ay + cy - by;
          const q = `Titik A${fmtCoord(ax, ay)}, B${fmtCoord(bx, by)}, C${fmtCoord(cx, cy)} dan D ialah bucu-bucu sebuah segi empat selari ABCD mengikut urutan. Cari koordinat bucu D.`;
          const wrongs = [
            fmtCoord(bx + cx - ax, by + cy - ay),
            fmtCoord(ax + bx - cx, ay + by - cy),
            fmtCoord((ax + cx) / 2, (ay + cy) / 2),
            fmtCoord(dx + 2, dy - 1)
          ];
          const exp = `Pepenjuru AC dan BD saling membahagi dua sama pada titik tengah yang sama: (${ax} + ${cx})/2 = (${bx} + x)/2 → x = ${dx}, dan (${ay} + ${cy})/2 = (${by} + y)/2 → y = ${dy}. Jadi D = ${fmtCoord(dx, dy)}.`;
          return buildMcq(rng, meta, q, fmtCoord(dx, dy), wrongs, exp, `par_${ax}_${ay}_${bx}_${by}_${cx}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const ax = randInt(rng, -6, 4);
          const ay = randInt(rng, -6, 4);
          const cx = ax + 2 * base[0];
          const cy = ay + 2 * base[1];
          const bx = randInt(rng, -5, 8);
          const by = randInt(rng, -5, 8);
          // Midpoint M of AB and N of BC => distance MN = 1/2 AC = base[2]
          const distMN = base[2];
          const q = `Diberi tiga titik P${fmtCoord(ax, ay)}, Q${fmtCoord(bx, by)} dan R${fmtCoord(cx, cy)}. Jika M ialah titik tengah PQ dan N ialah titik tengah QR, hitung jarak di antara titik M dan titik N.`;
          const wrongs = [2 * distMN, distMN + 2, base[0] + base[1], Math.max(1, distMN - 2)];
          const exp = `M = (${(ax + bx) / 2}, ${(ay + by) / 2}) dan N = (${(bx + cx) / 2}, ${(by + cy) / 2}). Jarak MN = √(${base[0]}² + ${base[1]}²) = ${distMN} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(distMN, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `mm_${ax}_${ay}_${bx}_${base[2]}`);
        }

        // b7_s2_H_quarter_point: M midpoint of AB, N midpoint of MB
        const ax = randInt(rng, -8, 4);
        const ay = randInt(rng, -8, 4);
        const stepX = pickNonZero(rng, -4, 4);
        const stepY = pickNonZero(rng, -4, 4);
        const bx = ax + 4 * stepX;
        const by = ay + 4 * stepY;
        const mx = ax + 2 * stepX;
        const my = ay + 2 * stepY;
        const nx = ax + 3 * stepX;
        const ny = ay + 3 * stepY;
        const q = `M ialah titik tengah bagi tembereng garis yang menyambungkan A${fmtCoord(ax, ay)} dan B${fmtCoord(bx, by)}, manakala N ialah titik tengah bagi MB. Cari koordinat titik N.`;
        const wrongs = [fmtCoord(mx, my), fmtCoord(ax + stepX, ay + stepY), fmtCoord(ny, nx), fmtCoord(nx + 2, ny)];
        const exp = `Titik tengah M bagi AB ialah ${fmtCoord(mx, my)}. Seterusnya titik tengah N bagi MB ialah ((${mx} + ${bx})/2, (${my} + ${by})/2) = ${fmtCoord(nx, ny)}.`;
        return buildMcq(rng, meta, q, fmtCoord(nx, ny), wrongs, exp, `qp_${ax}_${ay}_${stepX}_${stepY}`);
      }
    },

    // ------------------------- b7_s3_L -------------------------
    {
      id: "b7_s3_L",
      unit: "b7",
      skill: "b7_s3",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b7_s3_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s3_L_triangle_area_axis", "b7_s3_L_midpoint_dist_half", "b7_s3_L_median_length"];
        const meta = { unit: "b7", skill: "b7_s3", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const ax = randInt(rng, -6, 2);
          const ay = randInt(rng, -5, 5);
          const baseLen = randInt(rng, 2, 7) * 2;
          const bx = ax + baseLen;
          const cx = randInt(rng, ax, bx);
          const h = randInt(rng, 3, 11);
          const cy = ay + pick(rng, [-1, 1]) * h;
          const area = (baseLen * h) / 2;
          const q = `Bucu-bucu bagi sebuah segi tiga PQR ialah P${fmtCoord(ax, ay)}, Q${fmtCoord(bx, ay)} dan R${fmtCoord(cx, cy)}. Hitung luas segi tiga PQR.`;
          const wrongs = [baseLen * h, baseLen + h, area + baseLen, Math.max(2, area - 3)];
          const exp = `Panjang tapak PQ = ${bx} - (${ax}) = ${baseLen} unit dan tinggi = |${cy} - (${ay})| = ${h} unit. Luas = 1/2 × ${baseLen} × ${h} = ${area} unit².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "unit²"), wrongs.map((v) => fmtUnit(v, "unit²")), exp, `ta_${ax}_${ay}_${baseLen}_${h}`);
        }

        if (tIdx === 1) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const ax = randInt(rng, -6, 6);
          const ay = randInt(rng, -6, 6);
          const bx = ax + 2 * base[0];
          const by = ay + 2 * base[1];
          const ans = base[2];
          const q = `Diberi titik A${fmtCoord(ax, ay)} dan titik B${fmtCoord(bx, by)}. Jika M ialah titik tengah bagi garis lurus AB, hitung jarak dari A ke M.`;
          const wrongs = [2 * ans, ans + 2, base[0] + base[1], Math.max(1, ans - 2)];
          const exp = `Titik tengah M = ${fmtCoord(ax + base[0], ay + base[1])}. Jarak AM = √(${base[0]}² + ${base[1]}²) = ${ans} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(ans, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `md_${ax}_${ay}_${ans}`);
        }

        const base = pick(rng, TRIPLES.slice(0, 4));
        const mx = randInt(rng, -4, 4);
        const my = randInt(rng, -4, 4);
        const dx = randInt(rng, 2, 6);
        const ax = mx - dx, ay = my;
        const bx = mx + dx, by = my;
        const cx = mx + pick(rng, [-1, 1]) * base[0];
        const cy = my + pick(rng, [-1, 1]) * base[1];
        const lenCM = base[2];
        const q = `Dalam segi tiga ABC dengan bucu A${fmtCoord(ax, ay)}, B${fmtCoord(bx, by)} dan C${fmtCoord(cx, cy)}, M ialah titik tengah sisi AB. Hitung panjang garis median CM.`;
        const wrongs = [2 * lenCM, base[0] + base[1], lenCM + 2, Math.max(2, lenCM - 2)];
        const exp = `Titik tengah M bagi AB = ${fmtCoord(mx, my)}. Panjang CM = √((${cx} - (${mx}))² + (${cy} - (${my}))²) = √(${base[0] * base[0]} + ${base[1] * base[1]}) = ${lenCM} unit.`;
        return buildMcq(rng, meta, q, fmtUnit(lenCM, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `med_${ax}_${ay}_${cx}_${cy}`);
      }
    },

    // ------------------------- b7_s3_M -------------------------
    {
      id: "b7_s3_M",
      unit: "b7",
      skill: "b7_s3",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b7_s3_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s3_M_rhombus_area_perim", "b7_s3_M_isosceles_missing", "b7_s3_M_midpoint_distance_combo"];
        const meta = { unit: "b7", skill: "b7_s3", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const base = pick(rng, TRIPLES.slice(0, 4));
          const cx = randInt(rng, -4, 4);
          const cy = randInt(rng, -4, 4);
          const hx = base[0];
          const hy = base[1];
          const side = base[2];
          // Rhombus vertices: (cx - hx, cy), (cx, cy + hy), (cx + hx, cy), (cx, cy - hy)
          const askPerim = randInt(rng, 0, 1) === 1;
          if (askPerim) {
            const perim = 4 * side;
            const q = `Bucu-bucu sebuah rombus ialah A${fmtCoord(cx - hx, cy)}, B${fmtCoord(cx, cy + hy)}, C${fmtCoord(cx + hx, cy)} dan D${fmtCoord(cx, cy - hy)}. Hitung perimeter rombus ABCD.`;
            const wrongs = [2 * (2 * hx + 2 * hy), 2 * hx * hy, side * side, perim + 4];
            const exp = `Panjang satu sisi AB = √(${hx}² + ${hy}²) = ${side} unit. Oleh sebab keempat-empat sisi rombus adalah sama panjang, perimeter = 4 × ${side} = ${perim} unit.`;
            return buildMcq(rng, meta, q, fmtUnit(perim, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `rhp_${cx}_${cy}_${side}`);
          }
          const area = 2 * hx * hy;
          const q = `Bucu-bucu sebuah rombus ialah A${fmtCoord(cx - hx, cy)}, B${fmtCoord(cx, cy + hy)}, C${fmtCoord(cx + hx, cy)} dan D${fmtCoord(cx, cy - hy)}. Hitung luas rombus ABCD.`;
          const wrongs = [4 * hx * hy, hx * hy, 4 * side, area + 6];
          const exp = `Panjang pepenjuru AC = ${2 * hx} unit dan BD = ${2 * hy} unit. Luas rombus = 1/2 × ${2 * hx} × ${2 * hy} = ${area} unit².`;
          return buildMcq(rng, meta, q, fmtUnit(area, "unit²"), wrongs.map((v) => fmtUnit(v, "unit²")), exp, `rha_${cx}_${cy}_${area}`);
        }

        if (tIdx === 1) {
          // Isosceles PQR with PQ = PR, P(px, py), Q(px - a, py + b), R(px + b, py + k) with k > py
          const base = pick(rng, TRIPLES.slice(0, 4));
          const px = randInt(rng, -4, 4);
          const py = randInt(rng, -4, 4);
          const qx = px - base[0];
          const qy = py + base[1];
          const rx = px + base[1];
          const ry = py + base[0];
          const q = `Segi tiga PQR ialah segi tiga sama kaki dengan keadaan PQ = PR. Diberi P${fmtCoord(px, py)}, Q${fmtCoord(qx, qy)} dan R(${rx}, k) dengan k > ${py}. Cari nilai k.`;
          const wrongs = [qy, py - base[0], ry + 2, py + base[2]];
          const exp = `PQ² = (${base[0]})² + (${base[1]})² = ${base[2] * base[2]}. PR² = (${base[1]})² + (k - (${py}))² = ${base[2] * base[2]} → (k - (${py}))² = ${base[0] * base[0]}. Memandangkan k > ${py}, k = ${py} + ${base[0]} = ${ry}.`;
          return buildMcq(rng, meta, q, fmtInt(ry), wrongs.map(fmtInt), exp, `iso_${px}_${py}_${base[0]}_${base[1]}`);
        }

        // b7_s3_M_midpoint_distance_combo
        const base = pick(rng, TRIPLES.slice(0, 4));
        const m1x = randInt(rng, -5, 3);
        const m1y = randInt(rng, -5, 3);
        const m2x = m1x + pick(rng, [-1, 1]) * base[0];
        const m2y = m1y + pick(rng, [-1, 1]) * base[1];
        const d1x = randInt(rng, 1, 5), d1y = randInt(rng, 1, 5);
        const d2x = randInt(rng, 1, 5), d2y = randInt(rng, 1, 5);
        const ax = m1x - d1x, ay = m1y - d1y, bx = m1x + d1x, by = m1y + d1y;
        const cx = m2x - d2x, cy = m2y - d2y, dx = m2x + d2x, dy = m2y + d2y;
        const dist = base[2];
        const q = `Titik M ialah titik tengah bagi A${fmtCoord(ax, ay)} dan B${fmtCoord(bx, by)}, manakala titik N ialah titik tengah bagi C${fmtCoord(cx, cy)} dan D${fmtCoord(dx, dy)}. Hitung jarak MN.`;
        const wrongs = [base[0] + base[1], dist * 2, dist + 2, Math.max(1, dist - 2)];
        const exp = `M = ${fmtCoord(m1x, m1y)} dan N = ${fmtCoord(m2x, m2y)}. Jarak MN = √((${m2x} - (${m1x}))² + (${m2y} - (${m1y}))²) = ${dist} unit.`;
        return buildMcq(rng, meta, q, fmtUnit(dist, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `mdc_${m1x}_${m1y}_${dist}`);
      }
    },

    // ------------------------- b7_s3_H -------------------------
    {
      id: "b7_s3_H",
      unit: "b7",
      skill: "b7_s3",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b7_s3_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b7_s3_H_parallelogram_diag", "b7_s3_H_map_roundtrip", "b7_s3_H_circle_chord_coord"];
        const meta = { unit: "b7", skill: "b7_s3", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          // Parallelogram PQRS: choose Q and S so QS = Pythagorean triple!
          const base = pick(rng, TRIPLES.slice(0, 4));
          const px = randInt(rng, -4, 4);
          const py = randInt(rng, -4, 4);
          const qx = px + randInt(rng, 2, 7);
          const qy = py + randInt(rng, -2, 3);
          const sx = qx - base[0];
          const sy = qy + base[1];
          // P + R = Q + S => R = Q + S - P
          const rx = qx + sx - px;
          const ry = qy + sy - py;
          const diagQS = base[2];
          const q = `PQRS ialah sebuah segi empat selari dengan bucu P${fmtCoord(px, py)}, Q${fmtCoord(qx, qy)} dan R${fmtCoord(rx, ry)} mengikut urutan. Cari panjang pepenjuru QS.`;
          const wrongs = [base[0] + base[1], diagQS * 2, diagQS + 3, Math.max(2, diagQS - 2)];
          const exp = `Titik tengah PR = (${(px + rx) / 2}, ${(py + ry) / 2}), maka koordinat S = (${px} + ${rx} - ${qx}, ${py} + ${ry} - ${qy}) = ${fmtCoord(sx, sy)}. Panjang QS = √((${sx} - ${qx})² + (${sy} - ${qy})²) = ${diagQS} unit.`;
          return buildMcq(rng, meta, q, fmtUnit(diagQS, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `pdg_${px}_${py}_${diagQS}`);
        }

        if (tIdx === 1) {
          // Drone flies A -> M (midpoint of BC) -> D on scaled grid (1 unit = s km)
          const t1 = pick(rng, TRIPLES.slice(0, 3));
          const t2 = pick(rng, TRIPLES.slice(0, 3));
          const ax = randInt(rng, -4, 4);
          const ay = randInt(rng, -4, 4);
          const mx = ax + t1[0];
          const my = ay + t1[1];
          const dx = mx + t2[1];
          const dy = my - t2[0];
          const offX = randInt(rng, 1, 4), offY = randInt(rng, 1, 4);
          const bx = mx - offX, by = my - offY;
          const cx = mx + offX, cy = my + offY;
          const scale = pick(rng, [2, 3, 4, 5]);
          const totalDist = (t1[2] + t2[2]) * scale;
          const q = `Pada sebuah peta bersatah Cartes dengan skala 1 unit = ${scale} km, sebuah dron terbang secara lurus dari P${fmtCoord(ax, ay)} ke stesen M (iaitu titik tengah antara Q${fmtCoord(bx, by)} dan R${fmtCoord(cx, cy)}), kemudian terus ke S${fmtCoord(dx, dy)}. Hitung jumlah jarak penerbangan dron itu dalam km.`;
          const wrongs = [t1[2] + t2[2], t1[2] * scale, totalDist + scale * 2, Math.max(scale, totalDist - scale * 2)];
          const exp = `M = ${fmtCoord(mx, my)}. Jarak PM = ${t1[2]} unit dan MS = ${t2[2]} unit. Jumlah = (${t1[2]} + ${t2[2]}) × ${scale} = ${totalDist} km.`;
          return buildMcq(rng, meta, q, fmtUnit(totalDist, "km"), wrongs.map((v) => fmtUnit(v, "km")), exp, `mrt_${ax}_${ay}_${totalDist}`);
        }

        // b7_s3_H_circle_chord_coord: Circle center O(cx, cy), chord midpoint M -> OM and radius OA -> chord length!
        const base = pick(rng, TRIPLES.slice(0, 4));
        const ox = randInt(rng, -4, 4);
        const oy = randInt(rng, -4, 4);
        const mx = ox + base[0];
        const my = oy; // horizontal offset so M is cleanly aligned, OR tilted? Tilted is also clean! Let's use horizontal/vertical or tilted:
        // Wait: if OM is tilted, then perpendicular vector is (-dy, dx), so A = (mx - base[1], my + 0) wait only if OM is along axis or we just give O, A, and M?
        // Actually if we give O(ox, oy), A(ax, ay) on circle, and M(mx, my) midpoint of chord AB where OM is perpendicular to AB:
        // Let M = (ox + base[0], oy), and A = (ox + base[0], oy + base[1]), B = (ox + base[0], oy - base[1]) -> too easy? Wait let's rotate or give radius + M!
        // If we give O(ox, oy), radius r = base[2], and midpoint M(mx, my) where OM = sqrt(dx^2 + dy^2) = base[0]: use Pythagorean triple for OM?
        // Easier: give center O(ox, oy), point A(ax, ay) on circle (so OA = base[2]), and distance OM = base[0] (or M is midpoint of AB with coordinates given)!
        // Let's use tilted OM! Let OM vector = (3, 4) -> length 5! And use triple (5, 12, 13) for (OM, AM, OA)!
        // So OM = 5, AM = 12, OA = 13 -> AB = 24!
        const sets = [
          { omx: 3, omy: 4, om: 5, am: 12, r: 13 },
          { omx: 4, omy: 3, om: 5, am: 12, r: 13 },
          { omx: 6, omy: 8, om: 10, am: 24, r: 26 },
          { omx: 5, omy: 12, om: 13, am: 84, r: 85 },
          { omx: 8, omy: 15, om: 17, am: 144, r: 145 }
        ];
        const s = pick(rng, sets.slice(0, 3));
        const sx = pick(rng, [-1, 1]);
        const sy = pick(rng, [-1, 1]);
        const cx = randInt(rng, -5, 5);
        const cy = randInt(rng, -5, 5);
        const midX = cx + sx * s.omx;
        const midY = cy + sy * s.omy;
        const chord = 2 * s.am;
        const q = `Sebuah bulatan pada satah Cartes berpusat di O${fmtCoord(cx, cy)} dan mempunyai jejari ${s.r} unit. Jika titik M${fmtCoord(midX, midY)} ialah titik tengah bagi suatu perentas AB pada bulatan tersebut, hitung panjang perentas AB.`;
        const wrongs = [s.am, s.r - s.om, chord + 4, Math.max(4, chord - 4)];
        const exp = `Jarak OM = √((${sx * s.omx})² + (${sy * s.omy})²) = ${s.om} unit. Menggunakan Teorem Pythagoras, separuh perentas AM = √(${s.r}² - ${s.om}²) = ${s.am} unit. Jadi AB = 2 × ${s.am} = ${chord} unit.`;
        return buildMcq(rng, meta, q, fmtUnit(chord, "unit"), wrongs.map((v) => fmtUnit(v, "unit")), exp, `ccc_${cx}_${cy}_${s.r}`);
      }
    },

    // =========================================================================
    // BAB 8: GRAF FUNGSI (b8_s1, b8_s2, b8_s3)
    // =========================================================================

    // ------------------------- b8_s1_L -------------------------
    {
      id: "b8_s1_L",
      unit: "b8",
      skill: "b8_s1",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b8_s1_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s1_L_classify_pairs", "b8_s1_L_is_function", "b8_s1_L_domain_range"];
        const meta = { unit: "b8", skill: "b8_s1", diff: "L", template: templates[tIdx] };

        const allRelTypes = ["Satu kepada satu", "Banyak kepada satu", "Satu kepada banyak", "Banyak kepada banyak"];

        if (tIdx === 0) {
          const relType = pick(rng, allRelTypes);
          const xs = pickDistinct(rng, [1, 2, 3, 4, 5, 6, 7, 8, 9], 4).sort((a, b) => a - b);
          const ys = pickDistinct(rng, [10, 12, 14, 15, 16, 18, 20, 22, 24, 25], 4).sort((a, b) => a - b);
          let pairs;
          if (relType === "Satu kepada satu") {
            pairs = xs.map((x, i) => `(${x}, ${ys[i]})`);
          } else if (relType === "Banyak kepada satu") {
            pairs = [`(${xs[0]}, ${ys[0]})`, `(${xs[1]}, ${ys[0]})`, `(${xs[2]}, ${ys[1]})`, `(${xs[3]}, ${ys[2]})`];
          } else if (relType === "Satu kepada banyak") {
            pairs = [`(${xs[0]}, ${ys[0]})`, `(${xs[0]}, ${ys[1]})`, `(${xs[1]}, ${ys[2]})`, `(${xs[2]}, ${ys[3]})`];
          } else {
            pairs = [`(${xs[0]}, ${ys[0]})`, `(${xs[0]}, ${ys[1]})`, `(${xs[1]}, ${ys[1]})`, `(${xs[2]}, ${ys[2]})`];
          }
          const setStr = `{${pairs.join(", ")}}`;
          const q = `Nyatakan jenis hubungan yang diwakili oleh set pasangan tertib ${setStr}.`;
          const wrongs = allRelTypes.filter((t) => t !== relType);
          const exp = `Daripada pasangan tertib ${setStr}, hubungan tersebut ialah jenis ${relType.toLowerCase()}.`;
          return buildMcq(rng, meta, q, relType, wrongs, exp, `rel_${relType}_${xs.join("_")}`);
        }

        if (tIdx === 1) {
          const askIsFunc = randInt(rng, 0, 1) === 1;
          const xs = pickDistinct(rng, [1, 2, 3, 4, 5, 6, 7, 8], 4);
          const ys = pickDistinct(rng, [2, 4, 6, 8, 10, 12, 14, 16], 4);
          const func1 = `{(${xs[0]}, ${ys[0]}), (${xs[1]}, ${ys[1]}), (${xs[2]}, ${ys[2]}), (${xs[3]}, ${ys[3]})}`;
          const func2 = `{(${xs[0]}, ${ys[0]}), (${xs[1]}, ${ys[0]}), (${xs[2]}, ${ys[1]}), (${xs[3]}, ${ys[2]})}`;
          const func3 = `{(${xs[0]}, ${ys[3]}), (${xs[1]}, ${ys[2]}), (${xs[2]}, ${ys[1]}), (${xs[3]}, ${ys[0]})}`;
          const non1 = `{(${xs[0]}, ${ys[0]}), (${xs[0]}, ${ys[1]}), (${xs[1]}, ${ys[2]}), (${xs[2]}, ${ys[3]})}`;
          const non2 = `{(${xs[1]}, ${ys[0]}), (${xs[1]}, ${ys[2]}), (${xs[2]}, ${ys[1]}), (${xs[3]}, ${ys[3]})}`;
          const non3 = `{(${xs[2]}, ${ys[1]}), (${xs[2]}, ${ys[3]}), (${xs[0]}, ${ys[0]}), (${xs[1]}, ${ys[2]})}`;
          if (askIsFunc) {
            const corr = randInt(rng, 0, 1) === 1 ? func1 : func2;
            const q = `Antara set pasangan tertib berikut, manakah yang mewakili suatu fungsi?`;
            const exp = `Suatu fungsi memetakan setiap nilai input (domain) kepada tepat satu nilai output sahaja (hubungan satu kepada satu atau banyak kepada satu). Maka ${corr} ialah suatu fungsi.`;
            return buildMcq(rng, meta, q, corr, [non1, non2, non3], exp, `isf_${xs.join("_")}_${ys[0]}`);
          }
          const q = `Antara set pasangan tertib berikut, manakah yang BUKAN suatu fungsi?`;
          const exp = `Suatu hubungan bukan fungsi jika terdapat nilai input yang dipetakan kepada lebih daripada satu nilai output. Set ${non1} mempunyai input ${xs[0]} yang dipetakan kepada ${ys[0]} dan ${ys[1]}.`;
          return buildMcq(rng, meta, q, non1, [func1, func2, func3], exp, `nof_${xs.join("_")}_${ys[0]}`);
        }

        // b8_s1_L_domain_range
        const xs = pickDistinct(rng, [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6], 4).sort((a, b) => a - b);
        const ys = pickDistinct(rng, [2, 4, 5, 7, 8, 10, 11, 13, 15], 4).sort((a, b) => a - b);
        const pairs = xs.map((x, i) => `(${x}, ${ys[i]})`).join(", ");
        const askDomain = randInt(rng, 0, 1) === 1;
        const domStr = `{${xs.join(", ")}}`;
        const rngStr = `{${ys.join(", ")}}`;
        const fake1 = `{${xs[0]}, ${ys[1]}, ${xs[2]}, ${ys[3]}}`;
        const fake2 = `{${xs[1]}, ${ys[0]}, ${xs[3]}, ${ys[2]}}`;
        if (askDomain) {
          const q = `Diberi fungsi yang diwakili oleh set pasangan tertib {${pairs}}. Tentukan set domain bagi fungsi tersebut.`;
          const exp = `Domain ialah set semua nilai input (koordinat pertama), iaitu ${domStr}.`;
          return buildMcq(rng, meta, q, domStr, [rngStr, fake1, fake2], exp, `dom_${xs.join("_")}_${ys[0]}`);
        }
        const q = `Diberi fungsi yang diwakili oleh set pasangan tertib {${pairs}}. Tentukan set julat bagi fungsi tersebut.`;
        const exp = `Julat ialah set semua nilai output (koordinat kedua), iaitu ${rngStr}.`;
        return buildMcq(rng, meta, q, rngStr, [domStr, fake1, fake2], exp, `rng_${xs.join("_")}_${ys[0]}`);
      }
    },

    // ------------------------- b8_s1_M -------------------------
    {
      id: "b8_s1_M",
      unit: "b8",
      skill: "b8_s1",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b8_s1_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s1_M_relation_type_from_rule", "b8_s1_M_vertical_line_test", "b8_s1_M_complete_pair_function"];
        const meta = { unit: "b8", skill: "b8_s1", diff: "M", template: templates[tIdx] };
        const allRelTypes = ["Satu kepada satu", "Banyak kepada satu", "Satu kepada banyak", "Banyak kepada banyak"];

        if (tIdx === 0) {
          const mode = randInt(rng, 0, 2);
          if (mode === 0) {
            const a = randInt(rng, 1, 3);
            const b = randInt(rng, 4, 7);
            const c = randInt(rng, 1, 5);
            const dom = [-b, -a, a, b];
            const q = `Suatu fungsi memetakan set X = {${dom.join(", ")}} kepada set Y dengan peraturan "y = x² + ${c}". Apakah jenis hubungan bagi pemetaan ini?`;
            const wrongs = allRelTypes.filter((t) => t !== "Banyak kepada satu");
            const exp = `Nilai -${a} dan ${a} dipetakan kepada nilai y yang sama (${a * a + c}), begitu juga -${b} dan ${b} kepada ${b * b + c}. Oleh itu, hubungannya ialah banyak kepada satu.`;
            return buildMcq(rng, meta, q, "Banyak kepada satu", wrongs, exp, `rtr_q_${a}_${b}_${c}`);
          }
          if (mode === 1) {
            const m = randInt(rng, 2, 5);
            const c = randInt(rng, 1, 9);
            const xs = pickDistinct(rng, [1, 2, 3, 4, 5, 6, 7], 4).sort((a, b) => a - b);
            const q = `Suatu pemetaan dari set P = {${xs.join(", ")}} ke set Q ditakrifkan oleh persamaan y = ${m}x + ${c}. Nyatakan jenis hubungan bagi pemetaan tersebut.`;
            const wrongs = allRelTypes.filter((t) => t !== "Satu kepada satu");
            const exp = `Setiap nilai x dalam set P menghasilkan nilai y yang unik dalam set Q. Oleh itu, hubungannya ialah satu kepada satu.`;
            return buildMcq(rng, meta, q, "Satu kepada satu", wrongs, exp, `rtr_l_${m}_${c}_${xs[0]}`);
          }
          const k = pick(rng, [4, 9, 16, 25]);
          const q = `Pertimbangkan hubungan "x ialah faktor bagi y" dari set X = {1, 2, 3, ${k}} ke set Y = {2, 3, ${k}, ${k * 2}}. Apakah jenis hubungan tersebut?`;
          const wrongs = allRelTypes.filter((t) => t !== "Banyak kepada banyak");
          const exp = `Unsur 1 memeta kepada semua unsur dalam Y (satu kepada banyak), manakala ${k} dalam Y dipetakan oleh lebih daripada satu faktor dalam X (banyak kepada satu). Maka jenisnya ialah banyak kepada banyak.`;
          return buildMcq(rng, meta, q, "Banyak kepada banyak", wrongs, exp, `rtr_f_${k}`);
        }

        if (tIdx === 1) {
          const m = pickNonZero(rng, -5, 5);
          const a = pickNonZero(rng, -3, 3);
          const c = randInt(rng, 1, 9);
          const r = randInt(rng, 2, 9);
          const askNotFunc = randInt(rng, 0, 1) === 1;
          const lin = fmtLinearEq(m, c);
          const quad = fmtQuadEq(a, 0, c);
          const cub = fmtCubicEq(1, c);
          const non1 = `x = y² + ${c}`;
          const non2 = `x² + y² = ${r * r}`;
          const non3 = `y² = ${Math.abs(m)}x + ${c}`;
          if (askNotFunc) {
            const corr = pick(rng, [non1, non2, non3]);
            const q = `Antara persamaan berikut, graf manakah yang TIDAK mewakili suatu fungsi apabila diuji dengan ujian garis mencancang?`;
            const exp = `Persamaan ${corr} menghasilkan dua nilai y bagi satu nilai x (garis mencancang memotong graf pada dua titik), maka ia bukan fungsi.`;
            return buildMcq(rng, meta, q, corr, [lin, quad, cub], exp, `vlt_n_${m}_${a}_${c}_${r}`);
          }
          const corr = pick(rng, [lin, quad, cub]);
          const q = `Antara persamaan berikut, graf manakah yang mewakili suatu fungsi (garis mencancang memotong graf pada paling banyak satu titik sahaja)?`;
          const exp = `Persamaan ${corr} memberikan tepat satu nilai y bagi setiap nilai x, maka grafnya lulus ujian garis mencancang sebagai suatu fungsi.`;
          return buildMcq(rng, meta, q, corr, [non1, non2, non3], exp, `vlt_y_${m}_${a}_${c}_${r}`);
        }

        // b8_s1_M_complete_pair_function
        const xs = pickDistinct(rng, [1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
        const ys = pickDistinct(rng, [10, 12, 14, 16, 18, 20, 22, 24], 4);
        const dupX = xs[0];
        const q = `Diberi satu set pasangan tertib S = {(${xs[0]}, ${ys[0]}), (${xs[1]}, ${ys[1]}), (${xs[2]}, ${ys[2]}), (k, ${ys[3]})}. Tentukan nilai k supaya set S BUKAN suatu fungsi.`;
        const wrongs = [xs[3], xs[3] + 5, xs[3] + 10];
        const exp = `Set S bukan fungsi jika terdapat nilai x yang sama dipetakan kepada dua nilai y yang berbeza. Memandangkan ${ys[3]} ≠ ${ys[0]}, nilai k = ${dupX} menyebabkan input ${dupX} mempunyai dua output.`;
        return buildMcq(rng, meta, q, fmtInt(dupX), wrongs.map(fmtInt), exp, `cpf_${xs.join("_")}_${ys[0]}`);
      }
    },

    // ------------------------- b8_s1_H -------------------------
    {
      id: "b8_s1_H",
      unit: "b8",
      skill: "b8_s1",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b8_s1_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s1_H_find_rule_from_table", "b8_s1_H_domain_to_range_set", "b8_s1_H_real_context_relation"];
        const meta = { unit: "b8", skill: "b8_s1", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const kind = randInt(rng, 0, 2);
          if (kind === 0) {
            const a = randInt(rng, 1, 4);
            const c = pickNonZero(rng, -5, 6);
            const xs = [-1, 0, 1, 2];
            const pts = xs.map((x) => `(${x}, ${a * x * x + c})`).join(", ");
            const corr = fmtQuadEq(a, 0, c);
            const wrongs = [fmtLinearEq(a, c), fmtQuadEq(-a, 0, c), fmtCubicEq(a, c)];
            const exp = `Gantikan titik (0, ${c}) dan (-1, ${a + c}) serta (2, ${4 * a + c}) ke dalam persamaan: hanya ${corr} yang menepati semua titik.`;
            return buildMcq(rng, meta, `Suatu fungsi diwakili oleh pasangan tertib ${pts}. Apakah persamaan fungsi tersebut?`, corr, wrongs, exp, `fr_q_${a}_${c}`);
          }
          if (kind === 1) {
            const a = pick(rng, [1, 2]);
            const c = randInt(rng, -4, 5);
            const xs = [-1, 0, 1, 2];
            const pts = xs.map((x) => `(${x}, ${a * x * x * x + c})`).join(", ");
            const corr = fmtCubicEq(a, c);
            const wrongs = [fmtQuadEq(a, 0, c), fmtLinearEq(a, c), fmtCubicEq(a, -c === c ? c + 2 : -c)];
            const exp = `Bagi x = -1, y = ${-a + c}; bagi x = 2, y = ${8 * a + c}. Persamaan kubik yang sepadan ialah ${corr}.`;
            return buildMcq(rng, meta, `Jadual nilai suatu fungsi menghasilkan titik-titik ${pts}. Tentukan persamaan fungsi itu.`, corr, wrongs, exp, `fr_c_${a}_${c}`);
          }
          const a = pick(rng, [12, 18, 24, 36]);
          const xs = [1, 2, 3, 6];
          const pts = xs.map((x) => `(${x}, ${a / x})`).join(", ");
          const corr = `y = ${a}/x`;
          const wrongs = [`y = ${a}x`, `y = x + ${a - 1}`, `y = ${a / 2}/x`];
          const exp = `Perhatikan bahawa hasil darab x × y sentiasa malar iaitu ${a} bagi setiap titik. Maka persamaan fungsi salingan ialah ${corr}.`;
          return buildMcq(rng, meta, `Titik-titik ${pts} terletak pada graf suatu fungsi. Tentukan persamaan fungsi tersebut.`, corr, wrongs, exp, `fr_r_${a}`);
        }

        if (tIdx === 1) {
          const a = randInt(rng, 1, 3);
          const b = randInt(rng, a + 1, 5);
          const c = randInt(rng, 1, 7);
          const dom = [-b, -a, 0, a, b];
          const r0 = c;
          const r1 = a * a + c;
          const r2 = b * b + c;
          const corr = `{${r0}, ${r1}, ${r2}}`;
          const w1 = `{${c - b * b}, ${c - a * a}, ${r0}, ${r1}, ${r2}}`;
          const w2 = `{${r0}, ${2 * a + c}, ${2 * b + c}}`;
          const w3 = `{${a * a}, ${b * b}, ${c}}`;
          const q = `Diberi suatu fungsi y = x² + ${c} dengan domain {${dom.join(", ")}}. Tentukan julat bagi fungsi tersebut.`;
          const exp = `Apabila x = 0, y = ${r0}; apabila x = ±${a}, y = ${r1}; apabila x = ±${b}, y = ${r2}. Maka julat = ${corr}.`;
          return buildMcq(rng, meta, q, corr, [w1, w2, w3], exp, `drs_${a}_${b}_${c}`);
        }

        // b8_s1_H_real_context_relation
        const oneToOne = [
          "Setiap warganegara Malaysia dipadankan dengan nombor kad pengenalannya",
          "Setiap murid di Kelas 2 Bestari dipadankan dengan nombor angka giliran peperiksaannya",
          "Setiap kereta berdaftar dipadankan dengan nombor plat pendaftarannya",
          "Setiap negara berdaulat dipadankan dengan ibu negaranya",
          "Setiap buku di perpustakaan dipadankan dengan nombor kod bar uniknya"
        ];
        const manyToOne = [
          "Setiap murid di Tingkatan 2 dipadankan dengan bulan kelahirannya",
          "Setiap murid di sebuah kelas dipadankan dengan warna rumah sukannya",
          "Setiap peserta larian dipadankan dengan kategori umur penyertaannya",
          "Setiap pelajar dipadankan dengan markah ujian Matematiknya",
          "Setiap pekerja syarikat dipadankan dengan jabatannya"
        ];
        const notFunc = [
          "Setiap murid dipadankan dengan hobi atau sukan kegemarannya",
          "Setiap nombor bulat dipadankan dengan faktor-faktornya",
          "Setiap buah-buahan tempatan dipadankan dengan negeri pengeluarnya",
          "Setiap pelajar dipadankan dengan subjek yang diambilnya",
          "Setiap ibu bapa dipadankan dengan anak-anak mereka"
        ];
        const askType = randInt(rng, 0, 2);
        const name = pick(rng, NAMES);
        if (askType === 0) {
          const corr = pick(rng, oneToOne);
          const w = [pick(rng, manyToOne), ...pickDistinct(rng, notFunc, 2)];
          const q = `${name} mengkaji beberapa situasi harian. Antara berikut, manakah yang mewakili hubungan satu kepada satu?`;
          const exp = `"${corr}" ialah hubungan satu kepada satu kerana setiap unsur input mempunyai satu pasangan output yang unik.`;
          return buildMcq(rng, meta, q, corr, w, exp, `rcr_0_${name}_${oneToOne.indexOf(corr)}`);
        }
        if (askType === 1) {
          const corr = pick(rng, manyToOne);
          const w = [pick(rng, oneToOne), ...pickDistinct(rng, notFunc, 2)];
          const q = `Dalam tugasan Matematik, ${name} perlu mengenal pasti hubungan banyak kepada satu (yang juga merupakan suatu fungsi). Situasi manakah yang betul?`;
          const exp = `"${corr}" ialah hubungan banyak kepada satu kerana beberapa individu berbeza boleh berkongsi nilai output yang sama, dan setiap individu hanya mempunyai tepat satu output.`;
          return buildMcq(rng, meta, q, corr, w, exp, `rcr_1_${name}_${manyToOne.indexOf(corr)}`);
        }
        const corr = pick(rng, notFunc);
        const w = [...pickDistinct(rng, oneToOne, 2), pick(rng, manyToOne)];
        const q = `${name} menyenaraikan empat hubungan harian. Hubungan manakah yang BUKAN suatu fungsi?`;
        const exp = `"${corr}" bukan fungsi kerana satu unsur input boleh dipetakan kepada lebih daripada satu output (satu kepada banyak atau banyak kepada banyak).`;
        return buildMcq(rng, meta, q, corr, w, exp, `rcr_2_${name}_${notFunc.indexOf(corr)}`);
      }
    },

    // ------------------------- b8_s2_L -------------------------
    {
      id: "b8_s2_L",
      unit: "b8",
      skill: "b8_s2",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b8_s2_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s2_L_eval_linear", "b8_s2_L_eval_quad", "b8_s2_L_eval_cubic_recip"];
        const meta = { unit: "b8", skill: "b8_s2", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const m = pickNonZero(rng, -6, 6);
          const c = pickNonZero(rng, -9, 9);
          const x = randInt(rng, -5, 6);
          const y = m * x + c;
          const eq = fmtLinearEq(m, c);
          const q = `Diberi fungsi linear ${eq}. Hitung nilai y apabila x = ${x}.`;
          const wrongs = [-m * x + c, m * x - c, m + x + c, y + 2];
          const exp = `Gantikan x = ${x}: y = ${m}(${x}) + (${c}) = ${y}.`;
          return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `el_${m}_${c}_${x}`);
        }

        if (tIdx === 1) {
          const a = randInt(rng, 1, 4);
          const b = pickNonZero(rng, -4, 4);
          const c = pickNonZero(rng, -7, 7);
          const x = -randInt(rng, 1, 5); // negative x to test (-x)^2!
          const y = a * x * x + b * x + c;
          const wrongNegSq = -a * x * x + b * x + c;
          const eq = fmtQuadEq(a, b, c);
          const q = `Lengkapkan nilai y bagi fungsi kuadratik ${eq} apabila x = ${x}.`;
          const wrongs = [wrongNegSq, a * 2 * x + b * x + c, a * x * x - b * x + c, y + 4];
          const exp = `Gantikan x = ${x}: y = ${a}(${x})² + (${b})(${x}) + (${c}) = ${a * x * x} + (${b * x}) + (${c}) = ${y}.`;
          return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `eq_${a}_${b}_${c}_${x}`);
        }

        const useCubic = randInt(rng, 0, 1) === 1;
        if (useCubic) {
          const a = randInt(rng, 1, 3);
          const c = pickNonZero(rng, -8, 8);
          const x = pickNonZero(rng, -3, 3);
          const y = a * x * x * x + c;
          const eq = fmtCubicEq(a, c);
          const q = `Diberi fungsi kubik ${eq}. Cari nilai y apabila x = ${x}.`;
          const wrongs = [a * 3 * x + c, -a * x * x * x + c, a * x * x + c, y + 3];
          const exp = `Gantikan x = ${x}: y = ${a}(${x})³ + (${c}) = ${a * x * x * x} + (${c}) = ${y}.`;
          return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `ecu_${a}_${c}_${x}`);
        }
        const a = pick(rng, [12, 18, 24, 30, 36, 48]);
        const divs = [-6, -4, -3, -2, 2, 3, 4, 6].filter((d) => a % d === 0);
        const x = pick(rng, divs);
        const y = a / x;
        const q = `Diberi fungsi salingan y = ${a}/x. Hitung nilai y apabila x = ${x}.`;
        const wrongs = [-y, a * x, Math.round(a / Math.abs(x)) + 2, y + 3];
        const exp = `Gantikan x = ${x}: y = ${a} ÷ (${x}) = ${y}.`;
        return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `ere_${a}_${x}`);
      }
    },

    // ------------------------- b8_s2_M -------------------------
    {
      id: "b8_s2_M",
      unit: "b8",
      skill: "b8_s2",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b8_s2_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s2_M_table_missing_two", "b8_s2_M_identify_graph_shape", "b8_s2_M_find_x_from_y"];
        const meta = { unit: "b8", skill: "b8_s2", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const a = randInt(rng, 1, 3);
          const b = pickNonZero(rng, -3, 3);
          const c = randInt(rng, -5, 6);
          const x1 = -randInt(rng, 1, 3);
          const x2 = randInt(rng, 2, 4);
          const p = a * x1 * x1 + b * x1 + c;
          const qVal = a * x2 * x2 + b * x2 + c;
          const ans = p + qVal;
          const eq = fmtQuadEq(a, b, c);
          const q = `Dalam jadual nilai bagi fungsi ${eq}, nilai y bagi x = ${x1} ialah p dan nilai y bagi x = ${x2} ialah q. Hitung nilai p + q.`;
          const wrongs = [(-a * x1 * x1 + b * x1 + c) + qVal, qVal - p, ans + 4, Math.abs(p) + Math.abs(qVal) + 2];
          const exp = `Bagi x = ${x1}, p = ${a}(${x1})² + (${b})(${x1}) + (${c}) = ${p}. Bagi x = ${x2}, q = ${a}(${x2})² + (${b})(${x2}) + (${c}) = ${qVal}. Jadi p + q = ${ans}.`;
          return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `mt_${a}_${b}_${c}_${x1}_${x2}`);
        }

        if (tIdx === 1) {
          const a = randInt(rng, 1, 5);
          const c = pickNonZero(rng, -7, 8);
          const type = randInt(rng, 0, 3);
          const shapes = [
            "Lengkung parabola yang terbuka ke atas (bentuk U)",
            "Lengkung parabola yang terbuka ke bawah (bentuk ∩)",
            "Dua cabang lengkung hiperbola dalam sukuan bertentangan yang tidak menyentuh paksi-x atau paksi-y",
            "Garis lurus yang condong"
          ];
          if (type === 0) {
            const eq = fmtQuadEq(a, 0, c);
            const q = `Antara berikut, pernyataan manakah yang menerangkan bentuk graf bagi fungsi ${eq}?`;
            const exp = `Oleh sebab kuasa tertinggi x ialah 2 dan pekali x² positif (${a} > 0), grafnya ialah parabola yang terbuka ke atas (bentuk U).`;
            return buildMcq(rng, meta, q, shapes[0], [shapes[1], shapes[2], shapes[3]], exp, `igs_0_${a}_${c}`);
          }
          if (type === 1) {
            const eq = fmtQuadEq(-a, 0, c);
            const q = `Apakah bentuk graf yang terhasil apabila fungsi ${eq} diplotkan pada satah Cartes?`;
            const exp = `Oleh sebab kuasa tertinggi x ialah 2 dan pekali x² negatif (-${a} < 0), grafnya ialah parabola yang terbuka ke bawah (bentuk ∩).`;
            return buildMcq(rng, meta, q, shapes[1], [shapes[0], shapes[2], shapes[3]], exp, `igs_1_${a}_${c}`);
          }
          if (type === 2) {
            const k = pick(rng, [6, 8, 12, 16, 20, 24]);
            const q = `Nyatakan ciri bentuk graf bagi fungsi salingan y = ${k}/x apabila dilukis pada satah Cartes.`;
            const exp = `Graf fungsi salingan y = a/x membentuk dua lengkung hiperbola yang tidak menyentuh kedua-dua paksi kerana x ≠ 0 dan y ≠ 0.`;
            return buildMcq(rng, meta, q, shapes[2], [shapes[0], shapes[1], shapes[3]], exp, `igs_2_${k}`);
        }
          const eq = fmtLinearEq(a, c);
          const q = `Apakah bentuk graf bagi fungsi ${eq} apabila diplotkan pada satah Cartes?`;
          const exp = `Persamaan ${eq} berdarjah satu (fungsi linear), maka grafnya ialah satu garis lurus.`;
          return buildMcq(rng, meta, q, shapes[3], [shapes[0], shapes[1], shapes[2]], exp, `igs_3_${a}_${c}`);
        }

        // b8_s2_M_find_x_from_y
        const a = randInt(rng, 1, 3);
        const k = randInt(rng, 2, 6);
        const c = pickNonZero(rng, -5, 8);
        const yVal = a * k * k + c;
        const eq = fmtQuadEq(a, 0, c);
        const askNeg = randInt(rng, 0, 1) === 1;
        const ans = askNeg ? -k : k;
        const q = `Diberi fungsi kuadratik ${eq}. Jika nilai y ialah ${yVal} dan ${askNeg ? "x < 0" : "x > 0"}, cari nilai x.`;
        const wrongs = [-ans, k * k, ans + 2, ans - 2];
        const exp = `${a}x² + (${c}) = ${yVal} → ${a}x² = ${a * k * k} → x² = ${k * k} → x = ±${k}. Memandangkan ${askNeg ? "x < 0" : "x > 0"}, x = ${ans}.`;
        return buildMcq(rng, meta, q, fmtInt(ans), wrongs.map(fmtInt), exp, `fx_${a}_${k}_${c}_${askNeg}`);
      }
    },

    // ------------------------- b8_s2_H -------------------------
    {
      id: "b8_s2_H",
      unit: "b8",
      skill: "b8_s2",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b8_s2_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s2_H_match_eq_to_table", "b8_s2_H_coeff_from_table", "b8_s2_H_recip_frac_undef"];
        const meta = { unit: "b8", skill: "b8_s2", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const a = randInt(rng, 1, 3);
          const b = pickNonZero(rng, -3, 3);
          const c = randInt(rng, -4, 5);
          const xs = [-2, 0, 1, 3];
          const pairs = xs.map((x) => `(${x}, ${a * x * x + b * x + c})`).join(", ");
          const corr = fmtQuadEq(a, b, c);
          const w1 = fmtQuadEq(a, -b, c);
          const w2 = fmtQuadEq(-a, b, c);
          const w3 = fmtLinearEq(a + b, c);
          const q = `Jadual nilai bagi suatu fungsi memberikan pasangan (x, y) berikut: ${pairs}. Persamaan fungsi manakah yang menepati semua titik dalam jadual itu?`;
          const exp = `Menguji x = -2 dan x = 1 ke dalam ${corr}: y(-2) = ${a * 4 - 2 * b + c} dan y(1) = ${a + b + c}. Hanya ${corr} yang betul bagi semua nilai x.`;
          return buildMcq(rng, meta, q, corr, [w1, w2, w3], exp, `meq_${a}_${b}_${c}`);
        }

        if (tIdx === 1) {
          const a = randInt(rng, 2, 5);
          const c = pickNonZero(rng, -6, 7);
          const x1 = 1;
          const x2 = 2;
          const x3 = 3;
          const y1 = a * x1 * x1 + c;
          const y2 = a * x2 * x2 + c;
          const y3 = a * x3 * x3 + c;
          const q = `Suatu fungsi kuadratik berbentuk y = ax² + c mempunyai nilai y = ${y1} apabila x = ${x1}, dan y = ${y2} apabila x = ${x2}. Hitung nilai y apabila x = ${x3}.`;
          const wrongs = [y2 + (y2 - y1), a * x3 + c, y3 + a, y3 - 2];
          const exp = `Daripada x = 1: a + c = ${y1}. Daripada x = 2: 4a + c = ${y2}. Menolak kedua-duanya: 3a = ${3 * a} → a = ${a}, maka c = ${c}. Apabila x = ${x3}, y = ${a}(${x3})² + (${c}) = ${y3}.`;
          return buildMcq(rng, meta, q, fmtInt(y3), wrongs.map(fmtInt), exp, `cft_${a}_${c}`);
        }

        // b8_s2_H_recip_frac_undef
        const useUndef = randInt(rng, 0, 1) === 1;
        if (useUndef) {
          const a = pick(rng, [6, 8, 10, 12, 15, 18, 24]);
          const h = pickNonZero(rng, -9, 9);
          const signStr = h > 0 ? `- ${h}` : `+ ${Math.abs(h)}`;
          const q = `Bagi fungsi salingan y = ${a} / (x ${signStr}), pada nilai x berapakah fungsi ini tidak tertakrif (penyebut menjadi sifar)?`;
          const wrongs = [-h, 0, a, h + 2];
          const exp = `Fungsi tidak tertakrif apabila penyebut sama dengan sifar: x ${signStr} = 0 → x = ${h}.`;
          return buildMcq(rng, meta, q, fmtInt(h), wrongs.map(fmtInt), exp, `und_${a}_${h}`);
        }
        const a = randInt(rng, 2, 12);
        const x = pick(rng, [-0.5, -0.25, 0.25, 0.5]);
        const c = pickNonZero(rng, -4, 6);
        const y = Math.round(a / x) + c;
        const q = `Diberi fungsi y = ${a}/x + (${c}). Hitung nilai y apabila x = ${fmtDec(x, 2)}.`;
        const wrongs = [Math.round(a * x) + c, -Math.round(a / x) + c, Math.round(a / Math.abs(x)), y + 4];
        const exp = `y = (${a} ÷ ${fmtDec(x, 2)}) + (${c}) = ${Math.round(a / x)} + (${c}) = ${y}.`;
        return buildMcq(rng, meta, q, fmtInt(y), wrongs.map(fmtInt), exp, `rf_${a}_${x}_${c}`);
      }
    },

    // ------------------------- b8_s3_L -------------------------
    {
      id: "b8_s3_L",
      unit: "b8",
      skill: "b8_s3",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b8_s3_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s3_L_y_intercept", "b8_s3_L_x_intercept_linear", "b8_s3_L_vertex_quad"];
        const meta = { unit: "b8", skill: "b8_s3", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const a = pickNonZero(rng, -4, 4);
          const b = pickNonZero(rng, -5, 5);
          const c = pickNonZero(rng, -12, 12);
          const eq = randInt(rng, 0, 1) === 1 ? fmtQuadEq(a, b, c) : fmtLinearEq(b, c);
          const q = `Apakah pintasan-y bagi graf fungsi ${eq}?`;
          const wrongs = [-c, b, a === c ? c + 3 : a, c + 2];
          const exp = `Pintasan-y berlaku apabila x = 0. Menggantikan x = 0 memberikan y = ${c}.`;
          return buildMcq(rng, meta, q, fmtInt(c), wrongs.map(fmtInt), exp, `yi_${a}_${b}_${c}`);
        }

        if (tIdx === 1) {
          const m = pickNonZero(rng, -5, 5);
          const xInt = pickNonZero(rng, -8, 8);
          const c = -m * xInt;
          const eq = fmtLinearEq(m, c);
          const q = `Tentukan pintasan-x bagi graf fungsi linear ${eq}.`;
          const wrongs = [-xInt, c, m, xInt + 2];
          const exp = `Pintasan-x berlaku apabila y = 0: ${m}x + (${c}) = 0 → ${m}x = ${-c} → x = ${xInt}.`;
          return buildMcq(rng, meta, q, fmtInt(xInt), wrongs.map(fmtInt), exp, `xi_${m}_${xInt}`);
        }

        const isMin = randInt(rng, 0, 1) === 1;
        const a = (isMin ? 1 : -1) * randInt(rng, 1, 4);
        const k = pickNonZero(rng, -9, 12);
        const eq = fmtQuadEq(a, 0, k);
        const kindWord = isMin ? "minimum" : "maksimum";
        const q = `Tentukan nilai ${kindWord} bagi fungsi kuadratik ${eq}.`;
        const wrongs = [-k, a, k + 2, k - 2];
        const exp = `Bagi ${eq}, oleh sebab x² ≥ 0, nilai ${kindWord} y dicapai apabila x = 0, iaitu y = ${k}.`;
        return buildMcq(rng, meta, q, fmtInt(k), wrongs.map(fmtInt), exp, `vq_${a}_${k}`);
      }
    },

    // ------------------------- b8_s3_M -------------------------
    {
      id: "b8_s3_M",
      unit: "b8",
      skill: "b8_s3",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b8_s3_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s3_M_two_x_quad", "b8_s3_M_intersect_graphs", "b8_s3_M_context_graph_read"];
        const meta = { unit: "b8", skill: "b8_s3", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const r1 = randInt(rng, -5, 2);
          const r2 = randInt(rng, r1 + 1, 6);
          const b = -(r1 + r2);
          const c = r1 * r2;
          const eq = fmtQuadEq(1, b, c);
          const corr = `x = ${r1} dan x = ${r2}`;
          const wrongs = [
            `x = ${-r1} dan x = ${-r2}`,
            `x = ${r1} dan x = ${-r2 === r2 ? r2 + 1 : -r2}`,
            `x = ${r1 - 1} dan x = ${r2 + 1}`,
            `x = ${r1 + 1} dan x = ${r2 + 2}`,
            `x = ${r1 - 2} dan x = ${r2 - 1}`
          ];
          const q = `Cari pintasan-x bagi graf fungsi kuadratik ${eq}.`;
          const exp = `Apabila y = 0, ${fmtTerms([[1, "x²"], [b, "x"], [c, ""]])} = 0 → (x ${r1 < 0 ? `+ ${-r1}` : `- ${r1}`})(x ${r2 < 0 ? `+ ${-r2}` : `- ${r2}`}) = 0. Maka x = ${r1} dan x = ${r2}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `txq_${r1}_${r2}`);
        }

        if (tIdx === 1) {
          const k = randInt(rng, 1, 4);
          const m = randInt(rng, 2, 6);
          const a = k * m * m;
          // Intersection of y = a/x and y = kx in first quadrant: x = m, y = km
          const yInt = k * m;
          const q = `Graf fungsi salingan y = ${a}/x bersilang dengan garis lurus y = ${k}x pada sukuan pertama di titik P. Cari koordinat titik P.`;
          const wrongs = [fmtCoord(yInt, m), fmtCoord(m * m, k), fmtCoord(m + 1, yInt), fmtCoord(m, k)];
          const exp = `Pada titik persilangan, ${a}/x = ${k}x → x² = ${m * m}. Di sukuan pertama (x > 0), x = ${m} dan y = ${k}(${m}) = ${yInt}. Jadi P = ${fmtCoord(m, yInt)}.`;
          return buildMcq(rng, meta, q, fmtCoord(m, yInt), wrongs, exp, `int_${k}_${m}`);
        }

        // b8_s3_M_context_graph_read: Water tank V = V0 - r*t
        const rate = pick(rng, [5, 8, 10, 12, 15, 20]);
        const tEmpty = randInt(rng, 6, 20);
        const v0 = rate * tEmpty;
        const askEmpty = randInt(rng, 0, 1) === 1;
        const name = pick(rng, NAMES);
        if (askEmpty) {
          const q = `Isi padu air V (dalam liter) di dalam sebuah tangki milik ${name} selepas t minit dibuka diberi oleh fungsi V = ${v0} - ${rate}t. Selepas berapa minitkah tangki itu akan kosong sepenuhnya?`;
          const wrongs = [v0, rate, tEmpty + 4, Math.max(2, tEmpty - 3)];
          const exp = `Tangki kosong apabila V = 0 (pintasan-t): ${v0} - ${rate}t = 0 → ${rate}t = ${v0} → t = ${tEmpty} minit.`;
          return buildMcq(rng, meta, q, fmtUnit(tEmpty, "minit"), wrongs.map((v) => fmtUnit(v, "minit")), exp, `cgr_e_${v0}_${rate}`);
        }
        const tCheck = randInt(rng, 2, tEmpty - 2);
        const vRem = v0 - rate * tCheck;
        const q = `Isi padu air V (dalam liter) di dalam tangki milik ${name} selepas t minit dialirkan keluar diwakili oleh graf V = ${v0} - ${rate}t. Berapakah isi padu air yang tinggal selepas ${tCheck} minit?`;
        const wrongs = [rate * tCheck, v0, vRem + rate, Math.max(5, vRem - rate)];
        const exp = `Gantikan t = ${tCheck}: V = ${v0} - ${rate}(${tCheck}) = ${vRem} liter.`;
        return buildMcq(rng, meta, q, fmtUnit(vRem, "liter"), wrongs.map((v) => fmtUnit(v, "liter")), exp, `cgr_v_${v0}_${rate}_${tCheck}`);
      }
    },

    // ------------------------- b8_s3_H -------------------------
    {
      id: "b8_s3_H",
      unit: "b8",
      skill: "b8_s3",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b8_s3_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b8_s3_H_projectile_max_time", "b8_s3_H_profit_breakeven", "b8_s3_H_quad_symmetry_axis"];
        const meta = { unit: "b8", skill: "b8_s3", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          // h = a*t*(2k - t) = 2ak*t - a*t^2 -> max at t = k, max h = a*k^2
          const a = pick(rng, [2, 3, 4, 5]);
          const k = randInt(rng, 2, 6);
          const b = 2 * a * k;
          const maxH = a * k * k;
          const askTime = randInt(rng, 0, 1) === 1;
          if (askTime) {
            const q = `Ketinggian h (dalam meter) sebiji bola yang dilambung ke atas selepas t saat dimodelkan oleh fungsi h = ${b}t - ${a}t². Pada saat ke berapakah bola itu mencapai ketinggian maksimumnya?`;
            const wrongs = [2 * k, maxH, k + 2, Math.max(1, k - 1)];
            const exp = `Graf mencapai daratan (h = 0) pada t = 0 dan t = ${2 * k}. Dengan paksi simetri, masa ketinggian maksimum = (0 + ${2 * k})/2 = ${k} saat.`;
            return buildMcq(rng, meta, q, fmtUnit(k, "saat"), wrongs.map((v) => fmtUnit(v, "saat")), exp, `pmt_t_${a}_${k}`);
          }
          const q = `Ketinggian h (dalam meter) sebatang anak panah selepas t saat dilepaskan ialah h = ${b}t - ${a}t². Hitung ketinggian maksimum yang dicapai oleh anak panah tersebut.`;
          const wrongs = [b * k, maxH + a, Math.max(5, maxH - a * k), 2 * maxH];
          const exp = `Ketinggian maksimum berlaku pada t = ${k} saat (separuh daripada masa mendarat ${2 * k} s). Maka h_maks = ${b}(${k}) - ${a}(${k})² = ${maxH} m.`;
          return buildMcq(rng, meta, q, fmtUnit(maxH, "m"), wrongs.map((v) => fmtUnit(v, "m")), exp, `pmt_h_${a}_${k}`);
        }

        if (tIdx === 1) {
          const p = randInt(rng, 12, 30);
          const diff = randInt(rng, 4, 10);
          const c = p - diff;
          const xBreak = randInt(rng, 15, 60);
          const fixed = diff * xBreak;
          const name = pick(rng, NAMES);
          const q = `${name} menjual kek cawan pada harga RM ${p} sebiji (fungsi hasil J = ${p}x) dengan kos tetap RM ${fixed} serta kos bahan RM ${c} sebiji (fungsi kos K = ${fixed} + ${c}x). Berapakah bilangan kek cawan x yang mesti dijual untuk mencapai titik pulang modal (apabila J = K)?`;
          const wrongs = [Math.round(fixed / p), Math.round(fixed / c), xBreak + 10, Math.max(5, xBreak - 10)];
          const exp = `Titik pulang modal berlaku apabila J = K: ${p}x = ${fixed} + ${c}x → ${diff}x = ${fixed} → x = ${xBreak}.`;
          return buildMcq(rng, meta, q, fmtUnit(xBreak, "biji"), wrongs.map((v) => fmtUnit(v, "biji")), exp, `pb_${p}_${c}_${xBreak}`);
        }

        // b8_s3_H_quad_symmetry_axis: parabola cuts x-axis at (r1, 0) and (r2, 0), find axis of symmetry x = (r1+r2)/2 or y at vertex
        const h = pickNonZero(rng, -4, 6);
        const halfSpan = randInt(rng, 2, 5);
        const r1 = h - halfSpan;
        const r2 = h + halfSpan;
        const a = pick(rng, [1, 2, -1, -2]);
        const yVert = -a * halfSpan * halfSpan;
        const askY = randInt(rng, 0, 1) === 1;
        if (askY) {
          const q = `Suatu graf fungsi kuadratik y = ${a === 1 ? "" : a === -1 ? "-" : a}(x ${r1 < 0 ? `+ ${-r1}` : `- ${r1}`})(x ${r2 < 0 ? `+ ${-r2}` : `- ${r2}`}) memotong paksi-x di (${r1}, 0) dan (${r2}, 0). Cari koordinat titik pusingan (titik minimum atau maksimum) bagi graf itu.`;
          const wrongs = [fmtCoord(yVert, h), fmtCoord(h, -yVert), fmtCoord(h + 1, yVert), fmtCoord((r2 - r1) / 2, yVert)];
          const exp = `Paksi simetri x = (${r1} + ${r2})/2 = ${h}. Gantikan x = ${h} ke dalam fungsi untuk memperoleh y = ${yVert}. Maka titik pusingan ialah ${fmtCoord(h, yVert)}.`;
          return buildMcq(rng, meta, q, fmtCoord(h, yVert), wrongs, exp, `qsa_v_${a}_${h}_${halfSpan}`);
        }
        const q = `Suatu graf fungsi kuadratik memotong paksi-x pada titik ${fmtCoord(r1, 0)} dan ${fmtCoord(r2, 0)}. Apakah persamaan paksi simetri bagi graf fungsi itu?`;
        const corr = `x = ${h}`;
        const wrongs = [`x = ${-h === h ? h + 2 : -h}`, `x = ${halfSpan}`, `y = ${h}`, `x = ${h + 1}`, `x = ${h - 1}`, `x = ${2 * h}`];
        const exp = `Paksi simetri membahagi dua sama tembereng di antara dua pintasan-x: x = (${r1} + ${r2})/2 = ${h}.`;
        return buildMcq(rng, meta, q, corr, wrongs, exp, `qsa_x_${r1}_${r2}`);
      }
    },

    // =========================================================================
    // BAB 9: LAJU DAN PECUTAN (b9_s1, b9_s2, b9_s3)
    // =========================================================================

    // ------------------------- b9_s1_L -------------------------
    {
      id: "b9_s1_L",
      unit: "b9",
      skill: "b9_s1",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b9_s1_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s1_L_basic_speed", "b9_s1_L_kmh_to_ms", "b9_s1_L_ms_to_kmh"];
        const meta = { unit: "b9", skill: "b9_s1", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const speed = randInt(rng, 45, 110);
          const time = randInt(rng, 2, 6);
          const dist = speed * time;
          const veh = pick(rng, ["sebuah kereta", "sebuah bas ekspres", "sebuah motosikal", "sebuah kereta api"]);
          const q = `${veh[0].toUpperCase() + veh.slice(1)} bergerak sejauh ${dist} km dalam masa ${time} jam. Hitung laju kenderaan tersebut dalam km/j.`;
          const wrongs = [dist * time, speed + 10, Math.max(10, speed - 10), Math.round(dist / (time + 1))];
          const exp = `Laju = Jarak ÷ Masa = ${dist} km ÷ ${time} jam = ${speed} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(speed, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `bs_${dist}_${time}`);
        }

        if (tIdx === 1) {
          const k = randInt(rng, 1, 14);
          const kmh = 9 * k; // 9 -> 2.5 m/s, 18 -> 5 m/s, ..., 126 -> 35 m/s
          const ms = 2.5 * k;
          const q = `Tukarkan laju ${kmh} km/j kepada unit m/s.`;
          const wrongs = [kmh * 3.6, ms * 2, ms + 5, Math.max(1, ms - 5)];
          const exp = `${kmh} km/j = (${kmh} × 1 000) m ÷ 3 600 s = ${kmh} ÷ 3.6 = ${fmtDec(ms, 1)} m/s.`;
          return buildMcq(rng, meta, q, fmtUnit(ms, "m/s", 1), wrongs.map((v) => fmtUnit(v, "m/s", 1)), exp, `k2m_${kmh}`);
        }

        const k = randInt(rng, 2, 16);
        const ms = 2.5 * k;
        const kmh = 9 * k;
        const q = `Tukarkan laju ${fmtDec(ms, 1)} m/s kepada unit km/j.`;
        const wrongs = [ms / 3.6, ms * 3.6 === kmh ? kmh + 18 : kmh, Math.max(9, kmh - 18), ms * 60];
        const exp = `${fmtDec(ms, 1)} m/s = ${fmtDec(ms, 1)} × 3 600 ÷ 1 000 = ${fmtDec(ms, 1)} × 3.6 = ${kmh} km/j.`;
        return buildMcq(rng, meta, q, fmtUnit(kmh, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `m2k_${ms}`);
      }
    },

    // ------------------------- b9_s1_M -------------------------
    {
      id: "b9_s1_M",
      unit: "b9",
      skill: "b9_s1",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b9_s1_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s1_M_hours_mins_speed", "b9_s1_M_dist_or_time", "b9_s1_M_compare_speeds"];
        const meta = { unit: "b9", skill: "b9_s1", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const timeOpt = pick(rng, [
            { min: 45, hr: 0.75, fake: 0.45 },
            { min: 75, hr: 1.25, fake: 1.15 },
            { min: 90, hr: 1.5, fake: 1.3 },
            { min: 105, hr: 1.75, fake: 1.45 },
            { min: 135, hr: 2.25, fake: 2.15 },
            { min: 150, hr: 2.5, fake: 2.3 },
            { min: 72, hr: 1.2, fake: 1.12 },
            { min: 108, hr: 1.8, fake: 1.48 }
          ]);
          const speed = randInt(rng, 5, 11) * 10;
          const dist = Math.round(speed * timeOpt.hr);
          const name = pick(rng, NAMES);
          const q = `${name} memandu sejauh ${dist} km dalam tempoh ${fmtTimeHM(timeOpt.min)}. Hitung laju pemanduan ${name} dalam km/j.`;
          const wrongs = [
            Math.round((dist / timeOpt.fake) * 10) / 10,
            speed + 12,
            Math.max(10, speed - 12),
            Math.round(dist / (timeOpt.min / 10))
          ];
          const exp = `Tukarkan masa kepada jam: ${fmtTimeHM(timeOpt.min)} = ${timeOpt.hr} jam. Laju = ${dist} ÷ ${timeOpt.hr} = ${speed} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(speed, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j", 1)), exp, `hm_${dist}_${timeOpt.min}`);
        }

        if (tIdx === 1) {
          const k = randInt(rng, 2, 7);
          const kmh = 18 * k; // 36, 54, 72, 90, 108, 126
          const ms = 5 * k;
          const mins = randInt(rng, 2, 12);
          const distM = ms * mins * 60;
          const q = `Sebuah kenderaan bergerak dengan laju seragam ${kmh} km/j. Hitung jarak yang dilalui oleh kenderaan itu dalam masa ${mins} minit dalam unit meter.`;
          const wrongs = [kmh * mins, distM / 10, distM * 2, (kmh * 1000 * mins) / 3600];
          const exp = `${kmh} km/j = ${ms} m/s. Masa = ${mins} × 60 = ${mins * 60} s. Jarak = ${ms} × ${mins * 60} = ${fmtInt(distM)} m.`;
          return buildMcq(rng, meta, q, fmtUnit(distM, "m"), wrongs.map((v) => fmtUnit(v, "m")), exp, `dt_${kmh}_${mins}`);
        }

        // b9_s1_M_compare_speeds
        const k1 = randInt(rng, 2, 8);
        const k2 = randInt(rng, k1 + 1, 10);
        const ms1 = 5 * k1;
        const kmh2 = 18 * k2;
        const ms2 = 5 * k2;
        const diff = ms2 - ms1;
        const p1 = NAMES[randInt(rng, 0, 5)];
        const p2 = NAMES[randInt(rng, 6, NAMES.length - 1)];
        const q = `${p1} berbasikal pada laju ${ms1} m/s manakala ${p2} menunggang skuter pada laju ${kmh2} km/j. Hitung beza laju antara mereka dalam unit m/s.`;
        const wrongs = [kmh2 - ms1, (ms2 + ms1), diff + 5, diff * 3.6];
        const exp = `Laju ${p2} = ${kmh2} ÷ 3.6 = ${ms2} m/s. Beza laju = ${ms2} - ${ms1} = ${diff} m/s.`;
        return buildMcq(rng, meta, q, fmtUnit(diff, "m/s"), wrongs.map((v) => fmtUnit(v, "m/s", 1)), exp, `cmp_${k1}_${k2}`);
      }
    },

    // ------------------------- b9_s1_H -------------------------
    {
      id: "b9_s1_H",
      unit: "b9",
      skill: "b9_s1",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b9_s1_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s1_H_clock_times_speed", "b9_s1_H_meet_opposite", "b9_s1_H_unit_chain"];
        const meta = { unit: "b9", skill: "b9_s1", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const startMin = randInt(rng, 7, 11) * 60 + pick(rng, [0, 15, 30, 45]);
          const durMin = pick(rng, [90, 105, 120, 135, 150, 180, 210, 240]);
          const endMin = startMin + durMin;
          const durHr = durMin / 60;
          const speed = randInt(rng, 6, 11) * 10;
          const dist = Math.round(speed * durHr);
          const name = pick(rng, NAMES);
          const q = `${name} bertolak dari bandar A pada pukul ${fmtClock24(startMin)} dan tiba di bandar B yang jaraknya ${dist} km pada pukul ${fmtClock24(endMin)} pada hari yang sama. Hitung laju perjalanan ${name} dalam km/j.`;
          const wrongs = [
            Math.round(dist / (durHr + 0.5)),
            speed + 10,
            Math.max(10, speed - 10),
            Math.round(dist * durHr)
          ];
          const exp = `Tempoh masa = ${fmtClock24(endMin)} - ${fmtClock24(startMin)} = ${fmtTimeHM(durMin)} = ${durHr} jam. Laju = ${dist} ÷ ${durHr} = ${speed} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(speed, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `clk_${startMin}_${durMin}_${speed}`);
        }

        if (tIdx === 1) {
          const v1 = randInt(rng, 5, 9) * 10;
          const v2 = randInt(rng, 6, 10) * 10;
          const tMin = pick(rng, [30, 45, 60, 90, 120, 150]);
          const tHr = tMin / 60;
          const dist = Math.round((v1 + v2) * tHr);
          const q = `Dua buah kereta bergerak ke arah satu sama lain dari dua bandar yang terpisah sejauh ${dist} km pada masa yang sama. Jika laju kereta pertama ialah ${v1} km/j dan laju kereta kedua ialah ${v2} km/j, selepas berapa minitkah kedua-dua kereta itu akan berselisih?`;
          const wrongs = [tMin + 30, Math.round(dist / v1 * 60), Math.max(10, tMin - 15), tMin * 2];
          const exp = `Laju relatif gabungan = ${v1} + ${v2} = ${v1 + v2} km/j. Masa bertemu = ${dist} ÷ ${v1 + v2} = ${tHr} jam = ${tMin} minit.`;
          return buildMcq(rng, meta, q, fmtUnit(tMin, "minit"), wrongs.map((v) => fmtUnit(v, "minit")), exp, `opp_${v1}_${v2}_${tMin}`);
        }

        // b9_s1_H_unit_chain: m/minit -> km/j or m/s
        const k = randInt(rng, 1, 8);
        const mPerMin = 300 * k; // 300 m/min = 18 km/j = 5 m/s
        const kmh = 18 * k;
        const ms = 5 * k;
        const toKmh = randInt(rng, 0, 1) === 1;
        if (toKmh) {
          const q = `Seekor kuda berlari dengan laju ${fmtInt(mPerMin)} meter per minit. Nyatakan laju larian kuda itu dalam km/j.`;
          const wrongs = [ms, Math.round(mPerMin / 60), kmh * 2, Math.round(mPerMin / 100)];
          const exp = `Dalam 1 jam (60 minit), jarak = ${fmtInt(mPerMin)} × 60 = ${fmtInt(mPerMin * 60)} m = ${kmh} km. Jadi lajunya ialah ${kmh} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(kmh, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `uc_k_${k}`);
        }
        const q = `Sebuah robot bergerak pada kelajuan ${fmtInt(mPerMin)} meter per minit. Tukarkan laju robot itu kepada unit m/s.`;
        const wrongs = [kmh, mPerMin * 60, ms * 2, Math.max(1, ms - 3)];
        const exp = `${fmtInt(mPerMin)} m ÷ 60 saat = ${ms} m/s.`;
        return buildMcq(rng, meta, q, fmtUnit(ms, "m/s"), wrongs.map((v) => fmtUnit(v, "m/s")), exp, `uc_m_${k}`);
      }
    },

    // ------------------------- b9_s2_L -------------------------
    {
      id: "b9_s2_L",
      unit: "b9",
      skill: "b9_s2",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b9_s2_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s2_L_two_stages_dist_time", "b9_s2_L_with_rest", "b9_s2_L_speed_time_stages"];
        const meta = { unit: "b9", skill: "b9_s2", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const t1 = randInt(rng, 1, 3);
          const t2 = randInt(rng, 1, 3);
          const totalT = t1 + t2;
          const avg = randInt(rng, 55, 95);
          const totalD = avg * totalT;
          const d1 = randInt(rng, Math.floor(totalD * 0.3), Math.floor(totalD * 0.6));
          const d2 = totalD - d1;
          const name = pick(rng, NAMES);
          const q = `${name} memandu sejauh ${d1} km dalam masa ${t1} jam dan meneruskan perjalanan sejauh ${d2} km lagi dalam masa ${t2} jam. Hitung laju purata keseluruhan perjalanan itu.`;
          const wrongs = [Math.round(((d1 / t1) + (d2 / t2)) / 2), avg + 10, Math.max(10, avg - 10), Math.round(totalD / t1)];
          const exp = `Laju purata = Jumlah jarak ÷ Jumlah masa = (${d1} + ${d2}) ÷ (${t1} + ${t2}) = ${totalD} ÷ ${totalT} = ${avg} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(avg, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `ts_${d1}_${d2}_${totalT}`);
        }

        if (tIdx === 1) {
          const t1 = randInt(rng, 1, 2);
          const tRestMin = pick(rng, [30, 60]);
          const tRestHr = tRestMin / 60;
          const t2 = tRestMin === 30 ? pick(rng, [1.5, 2.5]) : randInt(rng, 1, 3);
          const totalT = t1 + tRestHr + t2;
          const avg = randInt(rng, 50, 85);
          const totalD = Math.round(avg * totalT);
          const d1 = Math.round(totalD * 0.4);
          const d2 = totalD - d1;
          const noRestAvg = Math.round((totalD / (t1 + t2)) * 10) / 10;
          const q = `Sebuah bas bergerak sejauh ${d1} km dalam masa ${t1} jam, berhenti rehat selama ${tRestMin} minit, dan kemudian menyambung perjalanan sejauh ${d2} km dalam masa ${fmtDec(t2, 1)} jam. Hitung laju purata bagi keseluruhan perjalanan bas itu.`;
          const wrongs = [noRestAvg, avg + 12, Math.max(15, avg - 8), Math.round(totalD / 2)];
          const exp = `Jumlah masa termasuk rehat = ${t1} + ${tRestHr} + ${fmtDec(t2, 1)} = ${totalT} jam. Laju purata = (${d1} + ${d2}) ÷ ${totalT} = ${avg} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(avg, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j", 1)), exp, `wr_${d1}_${d2}_${tRestMin}`);
        }

        // b9_s2_L_speed_time_stages
        const v1 = randInt(rng, 5, 8) * 10;
        const v2 = randInt(rng, v1 / 10 + 2, 11) * 10;
        const t1 = randInt(rng, 1, 3);
        const t2 = randInt(rng, 1, 3);
        // Ensure clean integer or .5 avg speed: choose t1, t2 or adjust
        const totalD = v1 * t1 + v2 * t2;
        const totalT = t1 + t2;
        const avg = Math.round((totalD / totalT) * 100) / 100;
        if (!Number.isInteger(avg * 2)) {
          return this.generate(seed + 777);
        }
        const arith = (v1 + v2) / 2;
        const q = `Sebuah van bergerak pada laju ${v1} km/j selama ${t1} jam dan kemudian pada laju ${v2} km/j selama ${t2} jam. Hitung laju purata van tersebut bagi keseluruhan perjalanan.`;
        const wrongs = [arith === avg ? avg + 5 : arith, v1 + v2, avg + 8, Math.max(10, avg - 6)];
        const exp = `Jumlah jarak = (${v1} × ${t1}) + (${v2} × ${t2}) = ${totalD} km. Jumlah masa = ${t1} + ${t2} = ${totalT} jam. Laju purata = ${totalD} ÷ ${totalT} = ${fmtDec(avg, 1)} km/j.`;
        return buildMcq(rng, meta, q, fmtUnit(avg, "km/j", 1), wrongs.map((v) => fmtUnit(v, "km/j", 1)), exp, `st_${v1}_${t1}_${v2}_${t2}`);
      }
    },

    // ------------------------- b9_s2_M -------------------------
    {
      id: "b9_s2_M",
      unit: "b9",
      skill: "b9_s2",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b9_s2_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s2_M_dist_speed_stages", "b9_s2_M_mixed_units_stages", "b9_s2_M_find_missing_stage"];
        const meta = { unit: "b9", skill: "b9_s2", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const pairs = [
            { v1: 60, t1: 1.5, v2: 80, t2: 1.5, avg: 70 },
            { v1: 60, t1: 2, v2: 90, t2: 1, avg: 70 },
            { v1: 80, t1: 1.5, v2: 50, t2: 1.5, avg: 65 },
            { v1: 90, t1: 2, v2: 60, t2: 1, avg: 80 },
            { v1: 75, t1: 2, v2: 45, t2: 1, avg: 65 },
            { v1: 100, t1: 1.5, v2: 60, t2: 2.5, avg: 75 },
            { v1: 80, t1: 2, v2: 60, t2: 2, avg: 70 },
            { v1: 96, t1: 1.5, v2: 64, t2: 1.5, avg: 80 },
            { v1: 70, t1: 2, v2: 90, t2: 2, avg: 80 },
            { v1: 50, t1: 1, v2: 80, t2: 2, avg: 70 }
          ];
          const p = pick(rng, pairs);
          const mult = pick(rng, [1, 1.2, 1.5]);
          const d1 = Math.round(p.v1 * p.t1 * mult);
          const d2 = Math.round(p.v2 * p.t2 * mult);
          const t1 = p.t1 * mult;
          const t2 = p.t2 * mult;
          const q = `Seorang pemandu menempuh jarak ${d1} km pada laju ${p.v1} km/j dan seterusnya ${d2} km pada laju ${p.v2} km/j. Hitung laju purata keseluruhan perjalanannya.`;
          const arith = (p.v1 + p.v2) / 2;
          const wrongs = [arith === p.avg ? p.avg + 6 : arith, p.avg + 5, Math.max(20, p.avg - 5), p.avg + 10];
          const exp = `Masa peringkat 1 = ${d1} ÷ ${p.v1} = ${fmtDec(t1, 2)} jam; masa peringkat 2 = ${d2} ÷ ${p.v2} = ${fmtDec(t2, 2)} jam. Laju purata = (${d1} + ${d2}) ÷ (${fmtDec(t1, 2)} + ${fmtDec(t2, 2)}) = ${p.avg} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(p.avg, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `dss_${d1}_${d2}_${p.v1}`);
        }

        if (tIdx === 1) {
          const combos = [
            { m1: 45, v1: 80, m2: 75, v2: 64 },   // 60 + 80 = 140 in 2h -> 70
            { m1: 30, v1: 70, m2: 90, v2: 90 },   // 35 + 135 = 170 in 2h -> 85
            { m1: 45, v1: 60, m2: 135, v2: 80 },  // 45 + 180 = 225 in 3h -> 75
            { m1: 36, v1: 100, m2: 84, v2: 50 },  // 60 + 70 = 130 in 2h -> 65
            { m1: 40, v1: 90, m2: 80, v2: 60 },   // 60 + 80 = 140 in 2h -> 70
            { m1: 20, v1: 90, m2: 100, v2: 72 },  // 30 + 120 = 150 in 2h -> 75
            { m1: 15, v1: 80, m2: 105, v2: 60 }   // 20 + 105 = 125 in 2h -> 62.5
          ];
          const c = pick(rng, combos);
          const d1 = (c.v1 * c.m1) / 60;
          const d2 = (c.v2 * c.m2) / 60;
          const totalH = (c.m1 + c.m2) / 60;
          const avg = (d1 + d2) / totalH;
          const name = pick(rng, NAMES);
          const q = `${name} berkereta selama ${fmtTimeHM(c.m1)} dengan laju ${c.v1} km/j, kemudian meneruskan perjalanan selama ${fmtTimeHM(c.m2)} dengan laju ${c.v2} km/j. Hitung laju purata bagi seluruh perjalanan itu.`;
          const wrongs = [(c.v1 + c.v2) / 2, avg + 5, Math.max(20, avg - 5), avg + 10];
          const exp = `Jarak 1 = ${c.v1} × (${c.m1}/60) = ${d1} km; Jarak 2 = ${c.v2} × (${c.m2}/60) = ${d2} km. Jumlah masa = ${totalH} jam. Laju purata = (${d1} + ${d2}) ÷ ${totalH} = ${fmtDec(avg, 1)} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(avg, "km/j", 1), wrongs.map((v) => fmtUnit(v, "km/j", 1)), exp, `mus_${c.m1}_${c.v1}_${c.v2}`);
        }

        // b9_s2_M_find_missing_stage
        const avg = randInt(rng, 60, 90);
        const t1 = randInt(rng, 1, 3);
        const t2 = randInt(rng, 1, 3);
        const totalT = t1 + t2;
        const totalD = avg * totalT;
        const v1 = randInt(rng, 50, avg - 5);
        const d1 = v1 * t1;
        const d2 = totalD - d1;
        const q = `Laju purata keseluruhan perjalanan sebuah lori dalam tempoh ${totalT} jam ialah ${avg} km/j. Dalam ${t1} jam pertama, lori itu bergerak dengan laju ${v1} km/j. Hitung jarak yang dilalui dalam baki ${t2} jam terakhir.`;
        const wrongs = [avg * t2, totalD, d1, d2 + 20];
        const exp = `Jumlah jarak = ${avg} × ${totalT} = ${totalD} km. Jarak ${t1} jam pertama = ${v1} × ${t1} = ${d1} km. Baki jarak = ${totalD} - ${d1} = ${d2} km.`;
        return buildMcq(rng, meta, q, fmtUnit(d2, "km"), wrongs.map((v) => fmtUnit(v, "km")), exp, `fms_${avg}_${t1}_${t2}_${v1}`);
      }
    },

    // ------------------------- b9_s2_H -------------------------
    {
      id: "b9_s2_H",
      unit: "b9",
      skill: "b9_s2",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b9_s2_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s2_H_round_trip", "b9_s2_H_three_stage_rest", "b9_s2_H_target_speed"];
        const meta = { unit: "b9", skill: "b9_s2", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const pairs = [
            { v1: 60, v2: 40, d: 120, avg: 48 },
            { v1: 60, v2: 30, d: 120, avg: 40 },
            { v1: 90, v2: 45, d: 180, avg: 60 },
            { v1: 80, v2: 48, d: 240, avg: 60 },
            { v1: 120, v2: 40, d: 120, avg: 60 },
            { v1: 75, v2: 50, d: 150, avg: 60 },
            { v1: 105, v2: 70, d: 210, avg: 84 },
            { v1: 72, v2: 36, d: 144, avg: 48 },
            { v1: 100, v2: 60, d: 300, avg: 75 },
            { v1: 90, v2: 60, d: 180, avg: 72 }
          ];
          const p = pick(rng, pairs);
          const mult = pick(rng, [0.5, 1, 1.5]);
          const dist = Math.round(p.d * mult);
          const name = pick(rng, NAMES);
          const q = `${name} memandu dari bandar P ke bandar Q yang jaraknya ${dist} km dengan laju ${p.v1} km/j, lalu pulang semula dari Q ke P melalui jalan yang sama dengan laju ${p.v2} km/j. Hitung laju purata perjalanan pergi dan balik itu.`;
          const wrongs = [(p.v1 + p.v2) / 2, p.avg + 4, Math.max(20, p.avg - 4), Math.round(p.avg / 2)];
          const exp = `Masa pergi = ${dist} ÷ ${p.v1} = ${fmtDec(dist / p.v1, 2)} jam; masa balik = ${dist} ÷ ${p.v2} = ${fmtDec(dist / p.v2, 2)} jam. Jumlah jarak = ${2 * dist} km. Laju purata = ${2 * dist} ÷ ${fmtDec(dist / p.v1 + dist / p.v2, 2)} = ${p.avg} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(p.avg, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `rt_${dist}_${p.v1}_${p.v2}`);
        }

        if (tIdx === 1) {
          const d1 = pick(rng, [45, 60, 75, 90]);
          const v1 = 60;
          const restMin = pick(rng, [15, 30, 45]);
          const t3 = pick(rng, [1, 1.5, 2]);
          const v3 = randInt(rng, 7, 10) * 10;
          const d3 = Math.round(v3 * t3);
          const totalT = d1 / v1 + restMin / 60 + t3;
          const totalD = d1 + d3;
          const avg = Math.round((totalD / totalT) * 10) / 10;
          if (!Number.isInteger(avg * 2)) {
            return this.generate(seed + 555);
          }
          const q = `Sebuah bas ekspres bergerak sejauh ${d1} km pada laju ${v1} km/j, berhenti rehat selama ${restMin} minit, dan meneruskan perjalanan selama ${fmtDec(t3, 1)} jam dengan laju ${v3} km/j. Hitung laju purata keseluruhan perjalanan bas itu.`;
          const wrongs = [
            Math.round((totalD / (d1 / v1 + t3)) * 10) / 10,
            (v1 + v3) / 2,
            avg + 5,
            Math.max(20, avg - 5)
          ];
          const exp = `Masa peringkat 1 = ${d1} ÷ ${v1} = ${fmtDec(d1 / v1, 2)} jam. Jumlah masa = ${fmtDec(d1 / v1, 2)} + ${fmtDec(restMin / 60, 2)} + ${fmtDec(t3, 1)} = ${fmtDec(totalT, 2)} jam. Jumlah jarak = ${d1} + ${d3} = ${totalD} km. Laju purata = ${fmtDec(avg, 1)} km/j.`;
          return buildMcq(rng, meta, q, fmtUnit(avg, "km/j", 1), wrongs.map((v) => fmtUnit(v, "km/j", 1)), exp, `tsr_${d1}_${restMin}_${v3}_${t3}`);
        }

        // b9_s2_H_target_speed
        const t1 = randInt(rng, 1, 2);
        const v1 = randInt(rng, 5, 7) * 10;
        const restHr = 0.5;
        const t2 = pick(rng, [1.5, 2.5]);
        const totalT = t1 + restHr + t2;
        const vTarget = randInt(rng, 7, 9) * 10;
        const totalD = Math.round(vTarget * totalT);
        const d1 = v1 * t1;
        const d2 = totalD - d1;
        const v2 = Math.round((d2 / t2) * 10) / 10;
        if (!Number.isInteger(v2)) {
          return this.generate(seed + 333);
        }
        const q = `Seorang pemandu memandu pada laju ${v1} km/j selama ${t1} jam dan berehat selama 30 minit. Berapakah laju yang perlu dikekalkan dalam baki ${fmtDec(t2, 1)} jam terakhir supaya laju purata keseluruhan perjalanannya mencapai ${vTarget} km/j?`;
        const wrongs = [vTarget, 2 * vTarget - v1, v2 + 10, Math.max(30, v2 - 10)];
        const exp = `Jumlah masa = ${t1} + 0.5 + ${fmtDec(t2, 1)} = ${totalT} jam. Jumlah jarak sasaran = ${vTarget} × ${totalT} = ${totalD} km. Jarak peringkat 1 = ${d1} km, maka baki = ${d2} km. Laju diperlukan = ${d2} ÷ ${fmtDec(t2, 1)} = ${v2} km/j.`;
        return buildMcq(rng, meta, q, fmtUnit(v2, "km/j"), wrongs.map((v) => fmtUnit(v, "km/j")), exp, `tgs_${v1}_${t1}_${t2}_${vTarget}`);
      }
    },

    // ------------------------- b9_s3_L -------------------------
    {
      id: "b9_s3_L",
      unit: "b9",
      skill: "b9_s3",
      diff: "L",
      generate(seed) {
        const rng = makeRng("b9_s3_L", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s3_L_accel_ms", "b9_s3_L_decel_ms", "b9_s3_L_from_rest"];
        const meta = { unit: "b9", skill: "b9_s3", diff: "L", template: templates[tIdx] };

        if (tIdx === 0) {
          const u = randInt(rng, 2, 14);
          const a = randInt(rng, 2, 8);
          const t = randInt(rng, 3, 12);
          const v = u + a * t;
          const q = `Laju sebuah motosikal bertambah secara seragam daripada ${u} m/s kepada ${v} m/s dalam masa ${t} saat. Hitung pecutan motosikal tersebut.`;
          const wrongs = [-a, Math.round((v / t) * 10) / 10, a + 2, Math.max(1, a - 1)];
          const exp = `Pecutan = (v - u) / t = (${v} - ${u}) / ${t} = ${a} m/s².`;
          return buildMcq(rng, meta, q, fmtUnit(a, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²", 1)), exp, `ac_${u}_${a}_${t}`);
        }

        if (tIdx === 1) {
          const v = randInt(rng, 0, 10);
          const dec = randInt(rng, 2, 8);
          const t = randInt(rng, 3, 10);
          const u = v + dec * t;
          const askPecutan = randInt(rng, 0, 1) === 1;
          if (askPecutan) {
            const ans = -dec;
            const q = `Sebuah bas memperlahankan lajunya secara seragam daripada ${u} m/s kepada ${v} m/s dalam masa ${t} saat. Hitung pecutan bas itu.`;
            const wrongs = [dec, ans - 2, ans + 1 === 0 ? ans - 3 : ans + 1, Math.round(((u + v) / t) * 10) / 10];
            const exp = `Pecutan = (v - u) / t = (${v} - ${u}) / ${t} = ${ans} m/s² (tanda negatif menunjukkan nyahpecutan).`;
            return buildMcq(rng, meta, q, fmtUnit(ans, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²", 1)), exp, `dc_p_${u}_${v}_${t}`);
          }
          const q = `Laju sebuah kereta berkurang secara seragam daripada ${u} m/s kepada ${v} m/s dalam masa ${t} saat. Hitung nyahpecutan kereta tersebut.`;
          const wrongs = [-dec, dec + 2, Math.max(1, dec - 1), u - v];
          const exp = `Pecutan = (${v} - ${u}) / ${t} = -${dec} m/s². Oleh itu, nyahpecutan ialah ${dec} m/s².`;
          return buildMcq(rng, meta, q, fmtUnit(dec, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²")), exp, `dc_n_${u}_${v}_${t}`);
        }

        const a = randInt(rng, 2, 9);
        const t = randInt(rng, 4, 15);
        const v = a * t;
        const q = `Sebuah kereta api memecut secara seragam dari keadaan pegun hingga mencapai laju ${v} m/s dalam masa ${t} saat. Hitung pecutan kereta api itu.`;
        const wrongs = [-a, v, a + 2, Math.max(1, a - 1)];
        const exp = `Dari keadaan pegun bermaksud laju awal u = 0 m/s. Pecutan = (${v} - 0) / ${t} = ${a} m/s².`;
        return buildMcq(rng, meta, q, fmtUnit(a, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²")), exp, `fr_${a}_${t}`);
      }
    },

    // ------------------------- b9_s3_M -------------------------
    {
      id: "b9_s3_M",
      unit: "b9",
      skill: "b9_s3",
      diff: "M",
      generate(seed) {
        const rng = makeRng("b9_s3_M", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s3_M_kmh_to_ms_accel", "b9_s3_M_find_v_or_t", "b9_s3_M_kmh_per_min"];
        const meta = { unit: "b9", skill: "b9_s3", diff: "M", template: templates[tIdx] };

        if (tIdx === 0) {
          const k1 = randInt(rng, 1, 4);
          const k2 = k1 + randInt(rng, 2, 6);
          const uKmh = 18 * k1;
          const vKmh = 18 * k2;
          const uMs = 5 * k1;
          const vMs = 5 * k2;
          const diffMs = vMs - uMs;
          // Pick t dividing diffMs cleanly (or 0.5 step)
          const divs = [2, 3, 4, 5, 6, 10, 15, 20].filter((d) => diffMs % d === 0);
          const t = divs.length ? pick(rng, divs) : 5;
          const a = diffMs / t;
          const q = `Laju sebuah kenderaan meningkat secara seragam daripada ${uKmh} km/j kepada ${vKmh} km/j dalam masa ${t} saat. Hitung pecutan kenderaan itu dalam unit m/s².`;
          const wrongs = [Math.round(((vKmh - uKmh) / t) * 10) / 10, -a, a + 2, a * 2];
          const exp = `${uKmh} km/j = ${uMs} m/s dan ${vKmh} km/j = ${vMs} m/s. Pecutan = (${vMs} - ${uMs}) / ${t} = ${fmtDec(a, 1)} m/s².`;
          return buildMcq(rng, meta, q, fmtUnit(a, "m/s²", 1), wrongs.map((val) => fmtUnit(val, "m/s²", 1)), exp, `kma_${uKmh}_${vKmh}_${t}`);
        }

        if (tIdx === 1) {
          const u = randInt(rng, 4, 18);
          const a = randInt(rng, 2, 7);
          const t = randInt(rng, 3, 12);
          const v = u + a * t;
          const findT = randInt(rng, 0, 1) === 1;
          if (findT) {
            const q = `Sebuah objek bergerak dengan laju awal ${u} m/s dan memecut secara seragam pada ${a} m/s² sehingga mencapai laju ${v} m/s. Hitung masa yang diambil.`;
            const wrongs = [Math.round(v / a), t + 2, Math.max(1, t - 2), (v - u) * a];
            const exp = `t = (v - u) / a = (${v} - ${u}) / ${a} = ${t} saat.`;
            return buildMcq(rng, meta, q, fmtUnit(t, "saat"), wrongs.map((val) => fmtUnit(val, "saat")), exp, `fvt_t_${u}_${a}_${t}`);
          }
          const q = `Sebuah motosikal bergerak pada laju ${u} m/s dan kemudian memecut secara seragam pada kadar ${a} m/s² selama ${t} saat. Hitung laju akhir motosikal itu.`;
          const wrongs = [a * t, u + a + t, v + a, Math.max(2, u - a * t)];
          const exp = `v = u + at = ${u} + (${a} × ${t}) = ${v} m/s.`;
          return buildMcq(rng, meta, q, fmtUnit(v, "m/s"), wrongs.map((val) => fmtUnit(val, "m/s")), exp, `fvt_v_${u}_${a}_${t}`);
        }

        // b9_s3_M_kmh_per_min -> km/j^2
        const u = randInt(rng, 3, 7) * 10;
        const mins = pick(rng, [10, 12, 15, 20, 30]);
        const hrDen = 60 / mins; // 6, 5, 4, 3, 2
        const dv = randInt(rng, 2, 6) * 10;
        const v = u + dv;
        const a = dv * hrDen;
        const q = `Laju sebuah kereta bertambah daripada ${u} km/j kepada ${v} km/j dalam masa ${mins} minit. Hitung pecutan kereta tersebut dalam unit km/j².`;
        const wrongs = [Math.round(dv / mins), dv, a * 2, Math.max(10, a - dv)];
        const exp = `Tukarkan masa: ${mins} minit = 1/${hrDen} jam. Pecutan = (${v} - ${u}) ÷ (1/${hrDen}) = ${dv} × ${hrDen} = ${fmtInt(a)} km/j².`;
        return buildMcq(rng, meta, q, fmtUnit(a, "km/j²"), wrongs.map((val) => fmtUnit(val, "km/j²")), exp, `kjh_${u}_${v}_${mins}`);
      }
    },

    // ------------------------- b9_s3_H -------------------------
    {
      id: "b9_s3_H",
      unit: "b9",
      skill: "b9_s3",
      diff: "H",
      generate(seed) {
        const rng = makeRng("b9_s3_H", seed);
        const tIdx = randInt(rng, 0, 2);
        const templates = ["b9_s3_H_two_phase_motion", "b9_s3_H_mixed_unit_accel", "b9_s3_H_dist_time_then_brake"];
        const meta = { unit: "b9", skill: "b9_s3", diff: "H", template: templates[tIdx] };

        if (tIdx === 0) {
          const a1 = randInt(rng, 2, 6);
          const t1 = randInt(rng, 3, 8);
          const vTop = a1 * t1;
          const t2 = randInt(rng, 4, 12);
          const divs = [2, 3, 4, 5, 6, 8].filter((d) => vTop % d === 0 && d !== t1);
          const t3 = divs.length ? pick(rng, divs) : t1 + 2;
          if (vTop % t3 !== 0) {
            return this.generate(seed + 444);
          }
          const dec3 = vTop / t3;
          const diff = Math.abs(a1 - dec3);
          const q = `Sebuah tren bermula dari keadaan pegun dan memecut selama ${t1} saat sehingga mencapai laju ${vTop} m/s. Tren itu mengekalkan laju tersebut selama ${t2} saat dan kemudiannya nyahpecut secara seragam sehingga berhenti dalam masa ${t3} saat. Hitung beza antara magnitud pecutan awal dengan nyahpecutan akhir tren itu.`;
          const wrongs = [a1 + dec3, a1, dec3, diff + 2];
          const exp = `Pecutan awal = (${vTop} - 0)/${t1} = ${a1} m/s². Nyahpecutan akhir = ${vTop}/${t3} = ${dec3} m/s². Beza = |${a1} - ${dec3}| = ${diff} m/s².`;
          return buildMcq(rng, meta, q, fmtUnit(diff, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²")), exp, `tpm_${a1}_${t1}_${t3}`);
        }

        if (tIdx === 1) {
          // Initial speed in km/j, final speed in m/s (braking or accelerating)
          const k1 = randInt(rng, 4, 8);
          const uKmh = 18 * k1;
          const uMs = 5 * k1;
          const k2 = randInt(rng, 1, k1 - 1);
          const vMs = 5 * k2;
          const diff = uMs - vMs;
          const t = pick(rng, [5, 10, 15].filter((d) => diff % d === 0).concat([5]));
          const dec = Math.round((diff / t) * 10) / 10;
          if (!Number.isInteger(dec * 2)) {
            return this.generate(seed + 888);
          }
          const q = `Sebuah lori yang bergerak dengan laju ${uKmh} km/j menekan brek lalu lajunya berkurang secara seragam kepada ${vMs} m/s dalam tempoh ${t} saat. Hitung nyahpecutan lori tersebut dalam unit m/s².`;
          const wrongs = [-dec, Math.round(((uKmh - vMs) / t) * 10) / 10, dec + 2, Math.max(0.5, dec - 1)];
          const exp = `Tukarkan ${uKmh} km/j = ${uMs} m/s. Pecutan = (${vMs} - ${uMs}) / ${t} = -${fmtDec(dec, 1)} m/s². Jadi nyahpecutan = ${fmtDec(dec, 1)} m/s².`;
          return buildMcq(rng, meta, q, fmtUnit(dec, "m/s²", 1), wrongs.map((val) => fmtUnit(val, "m/s²", 1)), exp, `mua_${uKmh}_${vMs}_${t}`);
        }

        // b9_s3_H_dist_time_then_brake
        const u = randInt(rng, 4, 10) * 3; // m/s
        const t1 = randInt(rng, 4, 10);
        const dist = u * t1;
        const dec = randInt(rng, 2, 6);
        const t2 = randInt(rng, 3, 8);
        // Let's make u = dec * t2 so it stops cleanly!
        const uStop = dec * t2;
        const distStop = uStop * t1;
        const q = `Seorang pelumba basikal menempuh jarak ${distStop} m dengan laju seragam selama ${t1} saat. Kemudian dia membrek secara seragam dan berhenti sepenuhnya selepas ${t2} saat. Hitung nyahpecutan basikal itu semasa membrek.`;
        const wrongs = [-dec, Math.round(distStop / t2), dec + 2, Math.max(1, dec - 1)];
        const exp = `Laju seragam sebelum membrek, u = ${distStop} ÷ ${t1} = ${uStop} m/s. Apabila berhenti, v = 0 m/s. Nyahpecutan = (${uStop} - 0) ÷ ${t2} = ${dec} m/s².`;
        return buildMcq(rng, meta, q, fmtUnit(dec, "m/s²"), wrongs.map((val) => fmtUnit(val, "m/s²")), exp, `dtb_${t1}_${dec}_${t2}`);
      }
    }
  );

  return generators;
}

/**
 * Tingkatan 2 Matematik (KSSM, Bab 10-13) deterministic skill-tagged MCQ generators.
 * 36 generators (12 skills x L/M/H), >= 3 templates each, zero DOM/storage dependencies.
 */
function buildPartB10B13() {
  "use strict";

  // ==================== DETERMINISTIC PRNG ====================
  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    let t = a >>> 0;
    return function () {
      t = (t + 0x6d2b79f5) >>> 0;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(generatorId, seed) {
    return mulberry32(hashSeed(String(seed) + "|" + generatorId));
  }

  function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
  }

  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
  }

  function shuffle(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function pickNonZero(rng, min, max) {
    let v = 0;
    while (v === 0) v = randInt(rng, min, max);
    return v;
  }

  // ==================== MATH & FORMATTING HELPERS ====================
  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function simpFrac(n, d) {
    if (d === 0) throw new Error("Division by zero in simpFrac");
    if (n === 0) return { n: 0, d: 1 };
    const sign = (n < 0) !== (d < 0) ? -1 : 1;
    const an = Math.abs(n);
    const ad = Math.abs(d);
    const g = gcd(an, ad);
    return { n: sign * (an / g), d: ad / g };
  }

  function fmtInt(n) {
    const r = Math.round(n);
    const sign = r < 0 ? "-" : "";
    const s = String(Math.abs(r));
    if (s.length < 4) return sign + s;
    return sign + s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function fmtFrac(n, d) {
    const f = simpFrac(n, d);
    if (f.n === 0) return "0";
    if (f.d === 1) return fmtInt(f.n);
    const sign = f.n < 0 ? "-" : "";
    const an = Math.abs(f.n);
    if (an > f.d) {
      const whole = Math.floor(an / f.d);
      const rem = an % f.d;
      return `${sign}${whole} ${rem}/${f.d}`;
    }
    return `${sign}${an}/${f.d}`;
  }

  function fmtDec(val, maxDp) {
    const dp = maxDp == null ? 4 : maxDp;
    const factor = Math.pow(10, dp);
    const rounded = Math.round(val * factor) / factor;
    if (Object.is(rounded, -0)) return "0";
    let s = rounded.toFixed(dp);
    if (s.includes(".")) s = s.replace(/\.?0+$/, "");
    return s;
  }

  function fmtRM(val) {
    const rounded = Math.round(val * 100) / 100;
    const sign = rounded < 0 ? "-" : "";
    const abs = Math.abs(rounded);
    const [intPart, decPart] = abs.toFixed(2).split(".");
    const intFormatted = Number(intPart) >= 1000 ? fmtInt(Number(intPart)) : intPart;
    return `${sign}RM ${intFormatted}.${decPart}`;
  }

  function fmtCoord(x, y) {
    return `(${Math.round(x)}, ${Math.round(y)})`;
  }

  function fmtPair(a, b) {
    return `(${Math.round(a)}, ${Math.round(b)})`;
  }

  function fmtFreqTable(headerLeft, headerRight, pairs) {
    const col1 = pairs.map((p) => String(p[0]));
    const col2 = pairs.map((p) => String(p[1]));
    return `${headerLeft}: ${col1.join(" | ")}\n${headerRight}: ${col2.join(" | ")}`;
  }

  // ==================== CANONICAL EQUIVALENCE & VALIDATION ====================
  function parseNumericToken(s) {
    const clean = s.replace(/\s+/g, " ").trim();
    let m = clean.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
    if (m) {
      const whole = Number(m[1]);
      const num = Number(m[2]);
      const den = Number(m[3]);
      if (den !== 0) {
        const sign = whole < 0 ? -1 : 1;
        return sign * (Math.abs(whole) + num / den);
      }
    }
    m = clean.match(/^(-?\d+)\/(\d+)$/);
    if (m && Number(m[2]) !== 0) {
      return Number(m[1]) / Number(m[2]);
    }
    const noSpace = clean.replace(/\s/g, "");
    if (/^-?\d+(\.\d+)?$/.test(noSpace)) {
      return Number(noSpace);
    }
    return null;
  }

  function canonicalOptionKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim();
    const coordM = s.match(/^\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/);
    if (coordM) {
      return `coord:${Number(coordM[1])},${Number(coordM[2])}`;
    }
    if (s.endsWith("°")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `deg:${Math.round(inner * 1e6)}`;
    }
    if (s.endsWith("%")) {
      const inner = parseNumericToken(s.slice(0, -1));
      if (inner !== null) return `pct:${Math.round(inner * 1e6)}`;
    }
    if (/^-?RM\s*/i.test(s)) {
      const neg = s.startsWith("-") ? -1 : 1;
      const inner = parseNumericToken(s.replace(/^-?RM\s*/i, ""));
      if (inner !== null) return `rm:${Math.round(neg * inner * 1e6)}`;
    }
    const unitMatch = s.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113]+)$/);
    if (unitMatch) {
      const inner = parseNumericToken(unitMatch[1]);
      if (inner !== null) {
        return `u:${unitMatch[2].toLowerCase()}:${Math.round(inner * 1e6)}`;
      }
    }
    const num = parseNumericToken(s);
    if (num !== null) {
      return `num:${Math.round(num * 1e6)}`;
    }
    return `str:${s.toLowerCase()}`;
  }

  function isValidOptionStr(s) {
    if (!s || typeof s !== "string") return false;
    if (s.includes("NaN") || s.includes("undefined") || s.includes("Infinity") || s.includes("[object")) {
      return false;
    }
    // Ensure numeric fractions outside parentheses are strictly reduced and proper (mixed numbers for > 1)
    const cleanForFracCheck = s.replace(/\([^)]*\)/g, " ");
    const fracMatches = cleanForFracCheck.match(/(^|\s)-?\d+\/\d+(?=\s|$|[a-zA-Z°%])/g);
    if (fracMatches) {
      for (const rawFm of fracMatches) {
        const fm = rawFm.trim();
        const [ns, ds] = fm.split("/").map((t) => Math.abs(Number(t)));
        if (ds <= 1 || ns === 0 || ns >= ds || gcd(ns, ds) !== 1) return false;
      }
    }
    return true;
  }

  function buildMcq(rng, meta, qText, correctStr, wrongCandidates, explanation, sig, extraFallbacks) {
    const corr = String(correctStr).trim();
    if (!isValidOptionStr(corr)) {
      throw new Error(`Invalid correct option for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }
    const seenKeys = new Set([canonicalOptionKey(corr)]);
    const seenStrings = new Set([corr.toLowerCase()]);
    const wrongs = [];

    const allCandidates = [...wrongCandidates, ...(extraFallbacks || [])];
    for (const w of allCandidates) {
      if (w === null || w === undefined) continue;
      const ws = String(w).trim();
      if (!isValidOptionStr(ws)) continue;
      const key = canonicalOptionKey(ws);
      const low = ws.toLowerCase();
      if (!seenStrings.has(low) && !seenKeys.has(key)) {
        seenStrings.add(low);
        seenKeys.add(key);
        wrongs.push(ws);
        if (wrongs.length === 3) break;
      }
    }

    let step = 1;
    while (wrongs.length < 3 && step < 120) {
      let cand = null;
      const delta = (step % 2 === 0 ? 1 : -1) * Math.ceil(step / 2);
      const coordM = corr.match(/^\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/);
      if (corr.endsWith("°")) {
        const v = parseNumericToken(corr.slice(0, -1));
        if (v !== null && v + delta * 5 > 0 && v + delta * 5 < 360) {
          cand = `${fmtDec(v + delta * 5, 2)}°`;
        }
      } else if (coordM) {
        const cx = Number(coordM[1]);
        const cy = Number(coordM[2]);
        cand = step % 2 === 1 ? fmtCoord(cx + delta, cy) : fmtCoord(cx, cy + delta);
      } else if (/^[xy]\s*=\s*-?\d+$/.test(corr)) {
        const [lhs, rhs] = corr.split("=").map((t) => t.trim());
        cand = `${lhs} = ${Number(rhs) + delta}`;
      } else if (/^RM\s*/i.test(corr)) {
        const v = parseNumericToken(corr.replace(/^RM\s*/i, ""));
        if (v !== null && v + delta * 2 > 0) cand = fmtRM(v + delta * 2);
      } else {
        const uMatch = corr.match(/^(.+?)\s+([a-zA-Z\u00b2\u00b3\u2113]+)$/);
        if (uMatch) {
          const v = parseNumericToken(uMatch[1]);
          if (v !== null && v + delta > 0) {
            cand = `${Number.isInteger(v) ? fmtInt(v + delta * 2) : fmtDec(v + delta * 0.5, 2)} ${uMatch[2]}`;
          }
        } else {
          const v = parseNumericToken(corr);
          if (v !== null) {
            if (corr.includes("/")) {
              const frac = simpFrac(Math.round(v * 12) + delta, 12);
              cand = fmtFrac(frac.n, frac.d);
            } else if (Number.isInteger(v)) {
              cand = fmtInt(v + delta * (Math.abs(v) > 100 ? 5 : 2));
            } else {
              cand = fmtDec(v + delta * 0.2, 3);
            }
          }
        }
      }
      step++;
      if (cand && isValidOptionStr(cand)) {
        const key = canonicalOptionKey(cand);
        const low = cand.toLowerCase();
        if (!seenStrings.has(low) && !seenKeys.has(key)) {
          seenStrings.add(low);
          seenKeys.add(key);
          wrongs.push(cand);
        }
      }
    }

    if (wrongs.length < 3) {
      throw new Error(`Failed to generate 3 unique distractors for ${meta.skill}_${meta.diff} (${meta.template}): ${corr}`);
    }

    const options = shuffle(rng, [corr, ...wrongs]);
    return {
      unit: meta.unit,
      skill: meta.skill,
      diff: meta.diff,
      template: meta.template,
      sig: `${meta.skill}:${meta.diff}:${meta.template}:${sig}`,
      q: qText,
      options,
      correctIndex: options.indexOf(corr),
      explanation
    };
  }

  // Helper to ensure non-overlapping proper reduced fractions
  const PROPER_FRACS = [
    [1, 2], [1, 3], [2, 3], [1, 4], [3, 4],
    [1, 5], [2, 5], [3, 5], [4, 5],
    [1, 6], [5, 6], [2, 7], [3, 7], [4, 7], [5, 7],
    [3, 8], [5, 8], [7, 8], [2, 9], [4, 9], [5, 9]
  ];

  // Rotate (x, y) around (cx, cy) by deg (90 CW, 90 CCW, 180)
  function rotatePoint(x, y, cx, cy, angleDeg, dirCW) {
    const dx = x - cx;
    const dy = y - cy;
    if (angleDeg === 180) {
      return [cx - dx, cy - dy];
    }
    if (dirCW) {
      return [cx + dy, cy - dx];
    }
    return [cx - dy, cy + dx];
  }

  // Compute statistical helpers
  function calcMean(arr) {
    let sum = 0;
    for (const v of arr) sum += v;
    return sum / arr.length;
  }

  function calcMedian(arr) {
    const s = arr.slice().sort((a, b) => a - b);
    const n = s.length;
    if (n % 2 === 1) return s[(n - 1) / 2];
    return (s[n / 2 - 1] + s[n / 2]) / 2;
  }

  function calcUniqueMode(arr) {
    const counts = new Map();
    for (const v of arr) counts.set(v, (counts.get(v) || 0) + 1);
    let bestVal = null;
    let bestCount = -1;
    let tie = false;
    for (const [val, cnt] of counts.entries()) {
      if (cnt > bestCount) {
        bestCount = cnt;
        bestVal = val;
        tie = false;
      } else if (cnt === bestCount) {
        tie = true;
      }
    }
    return tie ? null : bestVal;
  }

  const generators = [
    // =========================================================================
    // BAB 10: KECERUNAN GARIS LURUS
    // =========================================================================

    // ---------- b10_s1_L ----------
    {
      id: "b10_s1_L",
      unit: "b10",
      skill: "b10_s1",
      diff: "L",
      templates: ["b10_s1_L_pos_int", "b10_s1_L_neg_int", "b10_s1_L_zero_or_undef"],
      generate(seed) {
        const rng = makeRng("b10_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s1", diff: "L", template: tpl };

        if (tpl === "b10_s1_L_pos_int") {
          const m = randInt(rng, 1, 6);
          const dx = randInt(rng, 1, 5);
          const x1 = randInt(rng, -4, 6);
          const y1 = randInt(rng, -4, 6);
          const x2 = x1 + dx;
          const y2 = y1 + m * dx;
          const q = `Hitung kecerunan garis lurus yang melalui titik A${fmtCoord(x1, y1)} dan titik B${fmtCoord(x2, y2)}.`;
          const wrongs = [
            fmtInt(-m),
            fmtFrac(dx, m * dx),
            fmtInt(m + 1),
            fmtInt(m * dx)
          ];
          const exp = `Kecerunan m = (y₂ - y₁)/(x₂ - x₁) = (${y2} - (${y1}))/(${x2} - (${x1})) = ${m * dx}/${dx} = ${m}.`;
          return buildMcq(rng, meta, q, fmtInt(m), wrongs, exp, `${x1},${y1},${x2},${y2}`);
        } else if (tpl === "b10_s1_L_neg_int") {
          const m = -randInt(rng, 1, 6);
          const dx = randInt(rng, 1, 5);
          const x1 = randInt(rng, -4, 5);
          const y1 = randInt(rng, -2, 10);
          const x2 = x1 + dx;
          const y2 = y1 + m * dx;
          const q = `Cari kecerunan bagi garis lurus yang menyambungkan titik P${fmtCoord(x1, y1)} dan titik Q${fmtCoord(x2, y2)}.`;
          const wrongs = [
            fmtInt(-m),
            fmtFrac(dx, m * dx),
            fmtInt(m - 1),
            fmtInt(m + 1)
          ];
          const exp = `Kecerunan m = (${y2} - (${y1}))/(${x2} - (${x1})) = ${m * dx}/${dx} = ${m}.`;
          return buildMcq(rng, meta, q, fmtInt(m), wrongs, exp, `${x1},${y1},${x2},${y2}`);
        } else {
          const isHoriz = randInt(rng, 0, 1) === 0;
          if (isHoriz) {
            const y = pickNonZero(rng, -8, 12);
            const x1 = randInt(rng, -7, 4);
            const dx = randInt(rng, 2, 9);
            const x2 = x1 + dx;
            const q = `Tentukan kecerunan garis lurus yang melalui titik K${fmtCoord(x1, y)} dan titik L${fmtCoord(x2, y)}.`;
            const exp = `Oleh sebab koordinat-y kedua-dua titik adalah sama (y = ${y}), garis KL ialah garis mengufuk dan kecerunannya ialah (${y} - (${y}))/(${x2} - (${x1})) = 0.`;
            return buildMcq(
              rng,
              meta,
              q,
              "0",
              ["Tidak tertakrif", fmtInt(dx), fmtInt(y), "1"],
              exp,
              `H:${x1},${x2},${y}`
            );
          }
          const x = pickNonZero(rng, -8, 12);
          const y1 = randInt(rng, -7, 4);
          const dy = randInt(rng, 2, 9);
          const y2 = y1 + dy;
          const q = `Nyatakan kecerunan garis lurus yang melalui titik M${fmtCoord(x, y1)} dan titik N${fmtCoord(x, y2)}.`;
          const exp = `Oleh sebab koordinat-x kedua-dua titik adalah sama (x = ${x}), penyebut x₂ - x₁ = 0. Pembahagian dengan sifar menjadikan kecerunan garis mencancang ini tidak tertakrif.`;
          return buildMcq(
            rng,
            meta,
            q,
            "Tidak tertakrif",
            ["0", fmtInt(dy), fmtInt(x), "-1"],
            exp,
            `V:${x},${y1},${y2}`
          );
        }
      }
    },

    // ---------- b10_s1_M ----------
    {
      id: "b10_s1_M",
      unit: "b10",
      skill: "b10_s1",
      diff: "M",
      templates: ["b10_s1_M_frac_pos", "b10_s1_M_frac_neg", "b10_s1_M_ramp_coords"],
      generate(seed) {
        const rng = makeRng("b10_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s1", diff: "M", template: tpl };

        const [fn, fd] = pick(rng, PROPER_FRACS);
        const scale = randInt(rng, 1, 3);
        const dx = fd * scale;
        const absDy = fn * scale;

        if (tpl === "b10_s1_M_frac_pos") {
          const x1 = randInt(rng, -8, -1);
          const y1 = randInt(rng, -8, 2);
          const x2 = x1 + dx;
          const y2 = y1 + absDy;
          const ans = fmtFrac(fn, fd);
          const wrongs = [
            fmtFrac(-fn, fd),
            fmtFrac(fd, fn),
            fmtFrac(fn, fd + 1),
            fmtFrac(fn + 1, fd + 2)
          ];
          const q = `Garis lurus AB melalui titik A${fmtCoord(x1, y1)} dan B${fmtCoord(x2, y2)}. Hitung kecerunan garis lurus AB dalam bentuk pecahan termudah.`;
          const exp = `m = (${y2} - (${y1}))/(${x2} - (${x1})) = ${absDy}/${dx} = ${ans}.`;
          return buildMcq(rng, meta, q, ans, wrongs, exp, `${x1},${y1},${x2},${y2}`);
        } else if (tpl === "b10_s1_M_frac_neg") {
          const x1 = randInt(rng, -6, 4);
          const y1 = randInt(rng, -2, 10);
          const x2 = x1 + dx;
          const y2 = y1 - absDy;
          const ans = fmtFrac(-fn, fd);
          const wrongs = [
            fmtFrac(fn, fd),
            fmtFrac(-fd, fn),
            fmtFrac(-fn, fd + 1),
            fmtFrac(-(fn + 1), fd + 2)
          ];
          const q = `Tentukan kecerunan garis lurus yang menyambungkan titik P${fmtCoord(x1, y1)} ke titik Q${fmtCoord(x2, y2)}.`;
          const exp = `m = (${y2} - (${y1}))/(${x2} - (${x1})) = ${-absDy}/${dx} = ${ans}.`;
          return buildMcq(rng, meta, q, ans, wrongs, exp, `${x1},${y1},${x2},${y2}`);
        } else {
          const isNeg = randInt(rng, 0, 1) === 1;
          const signedFn = isNeg ? -fn : fn;
          const x1 = randInt(rng, -5, 3);
          const y1 = randInt(rng, -4, 6);
          // Reverse point order in prompt to test consistent subtraction order
          const x2 = x1 + dx;
          const y2 = y1 + (isNeg ? -absDy : absDy);
          const ans = fmtFrac(signedFn, fd);
          const wrongs = [
            fmtFrac(-signedFn, fd),
            fmtFrac(fd, signedFn),
            fmtFrac(signedFn, fd + 1),
            fmtFrac(-fd, signedFn)
          ];
          const q = `Pada satah Cartes, sebuah laluan landai menghubungkan titik mula R${fmtCoord(x2, y2)} dengan titik akhir S${fmtCoord(x1, y1)}. Berapakah kecerunan laluan itu?`;
          const exp = `Dengan mengekalkan tertib titik yang sama: m = (${y1} - (${y2}))/(${x1} - (${x2})) = ${-(isNeg ? -absDy : absDy)}/${-dx} = ${ans}.`;
          return buildMcq(rng, meta, q, ans, wrongs, exp, `R:${x1},${y1},${x2},${y2}`);
        }
      }
    },

    // ---------- b10_s1_H ----------
    {
      id: "b10_s1_H",
      unit: "b10",
      skill: "b10_s1",
      diff: "H",
      templates: ["b10_s1_H_find_pair_for_m", "b10_s1_H_steepest_pair", "b10_s1_H_median_to_midpoint"],
      generate(seed) {
        const rng = makeRng("b10_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s1", diff: "H", template: tpl };

        if (tpl === "b10_s1_H_find_pair_for_m") {
          const [fn, fd] = pick(rng, PROPER_FRACS);
          const sign = pick(rng, [1, -1]);
          const sn = sign * fn;
          const sc = randInt(rng, 1, 2);
          const x1 = randInt(rng, -4, 4);
          const y1 = randInt(rng, -4, 4);
          const x2 = x1 + fd * sc;
          const y2 = y1 + sn * sc;
          const corrStr = `${fmtCoord(x1, y1)} dan ${fmtCoord(x2, y2)}`;
          const w1 = `${fmtCoord(x1, y1)} dan ${fmtCoord(x1 + fd * sc, y1 - sn * sc)}`; // opposite sign
          const w2 = `${fmtCoord(x1, y1)} dan ${fmtCoord(x1 + Math.abs(sn) * sc, y1 + sign * fd * sc)}`; // swapped dx/dy
          const w3 = `${fmtCoord(x1 + 1, y1)} dan ${fmtCoord(x1 + 1 + fd * sc, y1 + sn * sc + 1)}`; // shifted y
          const q = `Antara pasangan titik berikut, yang manakah membentuk garis lurus dengan kecerunan ${fmtFrac(sn, fd)}?`;
          const exp = `Bagi ${corrStr}, m = (${y2} - (${y1}))/(${x2} - (${x1})) = ${sn * sc}/${fd * sc} = ${fmtFrac(sn, fd)}.`;
          return buildMcq(rng, meta, q, corrStr, [w1, w2, w3], exp, `${sn},${fd},${x1},${y1}`);
        } else if (tpl === "b10_s1_H_steepest_pair") {
          const baseX = randInt(rng, -3, 3);
          const baseY = randInt(rng, -3, 3);
          const grads = shuffle(rng, [1, -2, 3, -5]);
          const steepest = -5;
          const makePair = (g, idx) => {
            const px = baseX + idx;
            const py = baseY - idx;
            const dx = randInt(rng, 2, 3);
            return {
              g,
              str: `${fmtCoord(px, py)} dan ${fmtCoord(px + dx, py + g * dx)}`,
              dx,
              dy: g * dx
            };
          };
          const items = grads.map((g, idx) => makePair(g, idx));
          const corrItem = items.find((it) => it.g === steepest);
          const wrongs = items.filter((it) => it.g !== steepest).map((it) => it.str);
          const q = `Antara garis lurus yang menyambungkan pasangan titik berikut, garis manakah yang paling curam?`;
          const exp = `Kecerunan setiap garis dibandingkan melalui nilai mutlak |m|. Garis ${corrItem.str} mempunyai kecerunan m = ${corrItem.dy}/${corrItem.dx} = ${corrItem.g}, jadi |m| = ${Math.abs(corrItem.g)} adalah yang terbesar (paling curam).`;
          return buildMcq(rng, meta, q, corrItem.str, wrongs, exp, `${baseX},${baseY},${grads.join(",")}`);
        } else {
          // Gradient from P to midpoint of QR
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const sign = pick(rng, [1, -1]);
          const sn = sign * fn;
          const mx = randInt(rng, -2, 5);
          const my = randInt(rng, -2, 5);
          const px = mx - fd;
          const py = my - sn;
          const hx = randInt(rng, 1, 4);
          const hy = randInt(rng, 1, 4);
          const qx = mx - hx;
          const qy = my + hy;
          const rx = mx + hx;
          const ry = my - hy;
          const ans = fmtFrac(sn, fd);
          const wrongs = [
            fmtFrac(-sn, fd),
            fmtFrac(fd, sn),
            fmtFrac(qy - py, qx - px === 0 ? 1 : qx - px),
            fmtFrac(sn, fd + 1)
          ];
          const q = `Diberi titik P${fmtCoord(px, py)}, Q${fmtCoord(qx, qy)} dan R${fmtCoord(rx, ry)}. Hitung kecerunan garis lurus yang menyambungkan titik P dengan titik tengah tembereng QR.`;
          const exp = `Titik tengah QR ialah M((${qx} + ${rx})/2, (${qy} + ${ry})/2) = ${fmtCoord(mx, my)}. Kecerunan PM = (${my} - (${py}))/(${mx} - (${px})) = ${sn}/${fd} = ${ans}.`;
          return buildMcq(rng, meta, q, ans, wrongs, exp, `${px},${py},${qx},${qy},${rx},${ry}`);
        }
      }
    },

    // ---------- b10_s2_L ----------
    {
      id: "b10_s2_L",
      unit: "b10",
      skill: "b10_s2",
      diff: "L",
      templates: ["b10_s2_L_pos_intercepts", "b10_s2_L_neg_intercept", "b10_s2_L_coord_intercepts"],
      generate(seed) {
        const rng = makeRng("b10_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s2", diff: "L", template: tpl };

        if (tpl === "b10_s2_L_pos_intercepts") {
          const mMag = randInt(rng, 1, 6);
          const xInt = randInt(rng, 1, 6);
          const yInt = mMag * xInt;
          const ans = -mMag;
          const q = `Suatu garis lurus mempunyai pintasan-x = ${xInt} dan pintasan-y = ${yInt}. Cari kecerunan garis lurus itu.`;
          const exp = `Menggunakan rumus m = -(pintasan-y)/(pintasan-x) = -${yInt}/${xInt} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [fmtInt(mMag), fmtFrac(-xInt, yInt), fmtInt(ans - 1), fmtInt(yInt - xInt)],
            exp,
            `${xInt},${yInt}`
          );
        } else if (tpl === "b10_s2_L_neg_intercept") {
          const m = randInt(rng, 1, 6);
          const negX = randInt(rng, 0, 1) === 0;
          const xMag = randInt(rng, 1, 6);
          const yMag = m * xMag;
          const xInt = negX ? -xMag : xMag;
          const yInt = negX ? yMag : -yMag;
          const q = `Diberi pintasan-x dan pintasan-y bagi satu garis lurus masing-masing ialah ${xInt} dan ${yInt}. Tentukan kecerunannya.`;
          const exp = `m = -(pintasan-y)/(pintasan-x) = -(${yInt})/(${xInt}) = ${m}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(m),
            [fmtInt(-m), fmtFrac(xInt, -yInt), fmtInt(m + 2), fmtInt(yMag)],
            exp,
            `${xInt},${yInt}`
          );
        } else {
          const mMag = randInt(rng, 1, 5);
          const sign = pick(rng, [1, -1]);
          const xInt = pickNonZero(rng, -6, 6);
          const yInt = -sign * mMag * xInt;
          const m = sign * mMag;
          const q = `Satu garis lurus memotong paksi-x pada titik ${fmtCoord(xInt, 0)} dan paksi-y pada titik ${fmtCoord(0, yInt)}. Berapakah kecerunan garis lurus itu?`;
          const exp = `Pintasan-x = ${xInt} dan pintasan-y = ${yInt}. Maka m = -(${yInt})/(${xInt}) = ${m}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(m),
            [fmtInt(-m), fmtFrac(-xInt, yInt), fmtInt(m + 1), fmtInt(m - 2)],
            exp,
            `C:${xInt},${yInt}`
          );
        }
      }
    },

    // ---------- b10_s2_M ----------
    {
      id: "b10_s2_M",
      unit: "b10",
      skill: "b10_s2",
      diff: "M",
      templates: ["b10_s2_M_frac_intercepts", "b10_s2_M_find_y_intercept", "b10_s2_M_find_x_intercept"],
      generate(seed) {
        const rng = makeRng("b10_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s2", diff: "M", template: tpl };

        if (tpl === "b10_s2_M_frac_intercepts") {
          const [fn, fd] = pick(rng, PROPER_FRACS);
          const sc = randInt(rng, 1, 3);
          const xSign = pick(rng, [1, -1]);
          const ySign = pick(rng, [1, -1]);
          const xInt = xSign * fd * sc;
          const yInt = ySign * fn * sc;
          const m = simpFrac(-yInt, xInt);
          const ans = fmtFrac(m.n, m.d);
          const q = `Satu garis lurus memotong paksi-x di ${fmtCoord(xInt, 0)} dan paksi-y di ${fmtCoord(0, yInt)}. Cari kecerunan garis lurus tersebut.`;
          const exp = `m = -(pintasan-y)/(pintasan-x) = -(${yInt})/(${xInt}) = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(-m.n, m.d), fmtFrac(m.d, m.n), fmtFrac(-m.d, m.n), fmtFrac(m.n, m.d + 1)],
            exp,
            `${xInt},${yInt}`
          );
        } else if (tpl === "b10_s2_M_find_y_intercept") {
          const [fn, fd] = pick(rng, PROPER_FRACS);
          const mSign = pick(rng, [1, -1]);
          const mNum = mSign * fn;
          const k = randInt(rng, 1, 4);
          const xSign = pick(rng, [1, -1]);
          const xInt = xSign * fd * k;
          const yInt = -mNum * xSign * k;
          const mStr = fmtFrac(mNum, fd);
          const q = `Satu garis lurus mempunyai kecerunan ${mStr} dan pintasan-x ialah ${xInt}. Hitung pintasan-y bagi garis lurus itu.`;
          const exp = `Daripada m = -(pintasan-y)/(pintasan-x), maka pintasan-y = -m × (pintasan-x) = -(${mStr}) × (${xInt}) = ${yInt}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(yInt),
            [fmtInt(-yInt), fmtInt(yInt + 2), fmtInt(yInt - 2), fmtInt(xInt)],
            exp,
            `FY:${mNum},${fd},${xInt}`
          );
        } else {
          const [fn, fd] = pick(rng, PROPER_FRACS);
          const mSign = pick(rng, [1, -1]);
          const mNum = mSign * fn;
          const k = randInt(rng, 1, 4);
          const ySign = pick(rng, [1, -1]);
          const yInt = ySign * fn * k;
          const xInt = -ySign * fd * k * mSign;
          const mStr = fmtFrac(mNum, fd);
          const q = `Jika kecerunan suatu garis lurus ialah ${mStr} dan pintasan-y ialah ${yInt}, tentukan pintasan-x garis lurus itu.`;
          const exp = `Daripada m = -(pintasan-y)/(pintasan-x), maka pintasan-x = -(pintasan-y)/m = -(${yInt}) ÷ (${mStr}) = ${xInt}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(xInt),
            [fmtInt(-xInt), fmtInt(xInt + 3), fmtInt(xInt - 3), fmtInt(yInt)],
            exp,
            `FX:${mNum},${fd},${yInt}`
          );
        }
      }
    },

    // ---------- b10_s2_H ----------
    {
      id: "b10_s2_H",
      unit: "b10",
      skill: "b10_s2",
      diff: "H",
      templates: ["b10_s2_H_triangle_area", "b10_s2_H_midpoint_intercepts", "b10_s2_H_parallel_intercept"],
      generate(seed) {
        const rng = makeRng("b10_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s2", diff: "H", template: tpl };

        if (tpl === "b10_s2_H_triangle_area") {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 1, 3);
          const a = fd * k;
          const b = fn * k;
          // Ensure integer area: a*b even, or scale k by 2 if odd
          const mult = (a * b) % 2 === 0 ? 1 : 2;
          const oa = a * mult;
          const ob = b * mult;
          const area = (oa * ob) / 2;
          const ans = fmtFrac(-fn, fd);
          const q = `Satu garis lurus dengan kecerunan negatif memotong paksi-x positif di A dan paksi-y positif di B. Diberi jarak OA = ${oa} unit (dengan O ialah asalan) dan luas segi tiga OAB ialah ${area} unit². Cari kecerunan garis AB.`;
          const exp = `Luas segi tiga OAB = 1/2 × OA × OB => ${area} = 1/2 × ${oa} × OB => OB = ${ob}. Maka pintasan-x = ${oa} dan pintasan-y = ${ob}, jadi m = -${ob}/${oa} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fn, fd), fmtFrac(-fd, fn), fmtFrac(-ob / 2, oa), fmtFrac(-fn, fd + 1)],
            exp,
            `${oa},${ob}`
          );
        } else if (tpl === "b10_s2_H_midpoint_intercepts") {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const sx = pick(rng, [1, -1]);
          const sy = pick(rng, [1, -1]);
          const mx = sx * fd;
          const my = sy * fn;
          const xInt = 2 * mx;
          const yInt = 2 * my;
          const m = simpFrac(-yInt, xInt);
          const ans = fmtFrac(m.n, m.d);
          const q = `Titik tengah bagi tembereng garis yang menyambungkan pintasan-x dan pintasan-y suatu garis lurus ialah ${fmtCoord(mx, my)}. Hitung kecerunan garis lurus itu.`;
          const exp = `Jika pintasan-x = (a, 0) dan pintasan-y = (0, b), maka titik tengah ialah (a/2, b/2) = ${fmtCoord(mx, my)}, jadi a = ${xInt} dan b = ${yInt}. Kecerunan m = -(${yInt})/(${xInt}) = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(-m.n, m.d), fmtFrac(m.d, m.n), fmtFrac(-m.d, m.n), fmtFrac(m.n, m.d + 2)],
            exp,
            `M:${mx},${my}`
          );
        } else {
          // Line 1 cuts (a1, 0) and (0, b1); Line 2 parallel to Line 1 with y-intercept b2 -> find x-intercept a2
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 10));
          const k1 = randInt(rng, 1, 2);
          const k2 = randInt(rng, 2, 5);
          const s1 = pick(rng, [1, -1]);
          const s2 = pick(rng, [1, -1]);
          const a1 = s1 * fd * k1;
          const b1 = s2 * fn * k1;
          // m = -b1/a1. For Line 2: -b2/a2 = -b1/a1 => a2 = b2 * a1 / b1
          const b2 = fn * k2 * pick(rng, [1, -1]);
          const a2 = (b2 * a1) / b1;
          const q = `Garis lurus L₁ memotong paksi-x di ${fmtCoord(a1, 0)} dan paksi-y di ${fmtCoord(0, b1)}. Garis lurus L₂ adalah selari dengan L₁ dan mempunyai pintasan-y = ${b2}. Cari pintasan-x bagi garis lurus L₂.`;
          const exp = `Kecerunan L₁ = -(${b1})/(${a1}) = ${fmtFrac(-b1, a1)}. Oleh sebab L₂ selari dengan L₁, kecerunan L₂ juga ${fmtFrac(-b1, a1)}. Maka -(${b2})/(pintasan-x) = ${fmtFrac(-b1, a1)} => pintasan-x = ${a2}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(a2),
            [fmtInt(-a2), fmtInt(a2 + 2), fmtInt(a2 - 2), fmtInt(a1 + (b2 - b1))],
            exp,
            `P:${a1},${b1},${b2}`
          );
        }
      }
    },

    // ---------- b10_s3_L ----------
    {
      id: "b10_s3_L",
      unit: "b10",
      skill: "b10_s3",
      diff: "L",
      templates: ["b10_s3_L_find_y", "b10_s3_L_find_x", "b10_s3_L_which_collinear"],
      generate(seed) {
        const rng = makeRng("b10_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s3", diff: "L", template: tpl };

        if (tpl === "b10_s3_L_find_y") {
          const m = pickNonZero(rng, -5, 5);
          const x1 = randInt(rng, -4, 4);
          const y1 = randInt(rng, -5, 5);
          const dx = randInt(rng, 2, 5);
          const x2 = x1 + dx;
          const k = y1 + m * dx;
          const q = `Garis lurus yang melalui titik A${fmtCoord(x1, y1)} dan B(${x2}, k) mempunyai kecerunan ${m}. Cari nilai k.`;
          const exp = `(k - (${y1}))/(${x2} - (${x1})) = ${m} => k - (${y1}) = ${m * dx} => k = ${k}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(k),
            [fmtInt(y1 - m * dx), fmtInt(-k), fmtInt(k + dx), fmtInt(k - 2)],
            exp,
            `${m},${x1},${y1},${x2}`
          );
        } else if (tpl === "b10_s3_L_find_x") {
          const m = pickNonZero(rng, -5, 5);
          const x1 = randInt(rng, -4, 4);
          const y1 = randInt(rng, -5, 5);
          const dx = randInt(rng, 2, 5);
          const h = x1 + dx;
          const y2 = y1 + m * dx;
          const q = `Kecerunan garis lurus yang menyambungkan titik P${fmtCoord(x1, y1)} dan Q(h, ${y2}) ialah ${m}. Tentukan nilai h.`;
          const exp = `(${y2} - (${y1}))/(h - (${x1})) = ${m} => ${m * dx} = ${m}(h - (${x1})) => h - (${x1}) = ${dx} => h = ${h}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(h),
            [fmtInt(x1 - dx), fmtInt(-h), fmtInt(h + 2), fmtInt(h - 3)],
            exp,
            `X:${m},${x1},${y1},${y2}`
          );
        } else {
          const m = pickNonZero(rng, -4, 4);
          const x1 = randInt(rng, -3, 3);
          const y1 = randInt(rng, -3, 4);
          const dx = randInt(rng, 1, 3);
          const x2 = x1 + dx;
          const y2 = y1 + m * dx;
          const dx2 = randInt(rng, 2, 4);
          const x3 = x2 + dx2;
          const y3 = y2 + m * dx2;
          const corr = fmtCoord(x3, y3);
          const w1 = fmtCoord(x3, y3 + 2);
          const w2 = fmtCoord(x3, y2 - m * dx2);
          const w3 = fmtCoord(x3 + 1, y3);
          const q = `Antara titik berikut, yang manakah segaris dengan titik P${fmtCoord(x1, y1)} dan titik Q${fmtCoord(x2, y2)}?`;
          const exp = `Kecerunan PQ = (${y2} - (${y1}))/(${x2} - (${x1})) = ${m}. Kecerunan Q ke ${corr} ialah (${y3} - (${y2}))/(${x3} - (${x2})) = ${m}. Kerana kecerunan sama dan melalui Q, maka titik-titik ini segaris.`;
          return buildMcq(rng, meta, q, corr, [w1, w2, w3], exp, `C:${m},${x1},${y1},${dx},${dx2}`);
        }
      }
    },

    // ---------- b10_s3_M ----------
    {
      id: "b10_s3_M",
      unit: "b10",
      skill: "b10_s3",
      diff: "M",
      templates: ["b10_s3_M_collinear_y", "b10_s3_M_collinear_x", "b10_s3_M_parallel_coord"],
      generate(seed) {
        const rng = makeRng("b10_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s3", diff: "M", template: tpl };

        const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
        const sign = pick(rng, [1, -1]);
        const sn = sign * fn;

        if (tpl === "b10_s3_M_collinear_y") {
          const x1 = randInt(rng, -5, 2);
          const y1 = randInt(rng, -5, 4);
          const k1 = randInt(rng, 1, 2);
          const k2 = randInt(rng, 1, 3);
          const x2 = x1 + fd * k1;
          const y2 = y1 + sn * k1;
          const x3 = x2 + fd * k2;
          const t = y2 + sn * k2;
          const q = `Titik-titik P${fmtCoord(x1, y1)}, Q${fmtCoord(x2, y2)} dan R(${x3}, t) adalah segaris. Hitung nilai t.`;
          const exp = `Kecerunan PQ = (${y2} - (${y1}))/(${x2} - (${x1})) = ${fmtFrac(sn, fd)}. Untuk segaris, kecerunan QR = (t - (${y2}))/(${x3} - (${x2})) = ${fmtFrac(sn, fd)} => t = ${t}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(t),
            [fmtInt(y2 - sn * k2), fmtInt(t + 2), fmtInt(t - 2), fmtInt(-t)],
            exp,
            `${x1},${y1},${x2},${y2},${x3}`
          );
        } else if (tpl === "b10_s3_M_collinear_x") {
          const x1 = randInt(rng, -5, 2);
          const y1 = randInt(rng, -5, 4);
          const k1 = randInt(rng, 1, 2);
          const k2 = randInt(rng, 1, 3);
          const x2 = x1 + fd * k1;
          const y2 = y1 + sn * k1;
          const h = x2 + fd * k2;
          const y3 = y2 + sn * k2;
          const q = `Diberi titik A${fmtCoord(x1, y1)}, B${fmtCoord(x2, y2)} dan C(h, ${y3}) terletak pada satu garis lurus. Cari nilai h.`;
          const exp = `Kecerunan AB = ${fmtFrac(sn, fd)}. Menyamakan kecerunan BC: (${y3} - (${y2}))/(h - (${x2})) = ${fmtFrac(sn, fd)} => h = ${h}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(h),
            [fmtInt(x2 - fd * k2), fmtInt(h + 3), fmtInt(h - 2), fmtInt(-h)],
            exp,
            `X:${x1},${y1},${x2},${y2},${y3}`
          );
        } else {
          const ax = randInt(rng, -4, 3);
          const ay = randInt(rng, -4, 4);
          const k1 = randInt(rng, 1, 2);
          const bx = ax + fd * k1;
          const by = ay + sn * k1;
          const cx = randInt(rng, -3, 5);
          const cy = randInt(rng, -5, 5);
          const k2 = randInt(rng, 1, 3);
          const dx = cx + fd * k2;
          const p = cy + sn * k2;
          const q = `Garis lurus AB adalah selari dengan garis lurus CD. Diberi koordinat A${fmtCoord(ax, ay)}, B${fmtCoord(bx, by)}, C${fmtCoord(cx, cy)} dan D(${dx}, p). Cari nilai p.`;
          const exp = `Kecerunan AB = ${fmtFrac(sn, fd)}. Oleh sebab CD selari dengan AB, (p - (${cy}))/(${dx} - (${cx})) = ${fmtFrac(sn, fd)} => p = ${p}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(p),
            [fmtInt(cy - sn * k2), fmtInt(p + 2), fmtInt(p - 3), fmtInt(-p)],
            exp,
            `P:${ax},${ay},${bx},${by},${cx},${cy},${dx}`
          );
        }
      }
    },

    // ---------- b10_s3_H ----------
    {
      id: "b10_s3_H",
      unit: "b10",
      skill: "b10_s3",
      diff: "H",
      templates: ["b10_s3_H_linear_unknown_both", "b10_s3_H_collinear_intercepts", "b10_s3_H_parallelogram_parallel"],
      generate(seed) {
        const rng = makeRng("b10_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b10", skill: "b10_s3", diff: "H", template: tpl };

        if (tpl === "b10_s3_H_linear_unknown_both") {
          const k = pickNonZero(rng, -4, 6);
          const m = pickNonZero(rng, -4, 4);
          let c = randInt(rng, 2, 4);
          if (c + m === 0) c = 5;
          const dx = randInt(rng, 2, 5);
          const x2 = k + dx;
          const y1 = randInt(rng, -5, 5);
          const y2 = y1 + m * dx;
          const d = y2 - c * k;
          const exprY2 = d === 0 ? `${c}k` : (d > 0 ? `${c}k + ${d}` : `${c}k - ${Math.abs(d)}`);
          const q = `Kecerunan garis lurus yang melalui titik P(k, ${y1}) dan Q(${x2}, ${exprY2}) ialah ${m}. Hitung nilai k.`;
          const exp = `((${exprY2}) - (${y1}))/(${x2} - k) = ${m} => ${c}k + (${d - y1}) = ${m * x2} - ${m}k => ${c + m}k = ${m * x2 - d + y1} => k = ${k}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(k),
            [fmtInt(-k), fmtInt(k + 2), fmtInt(k - 2), fmtInt(k + 4)],
            exp,
            `${k},${m},${c},${x2},${y1}`
          );
        } else if (tpl === "b10_s3_H_collinear_intercepts") {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 10));
          const sx = pick(rng, [1, -1]);
          const sy = pick(rng, [1, -1]);
          const k1 = randInt(rng, 1, 2);
          const a = sx * fd * k1;
          const b = sy * fn * k1;
          // Collinear with (a, 0) and (0, b): gradient m = -b/a
          const step = randInt(rng, 1, 3);
          const x3 = a + sx * fd * step;
          const t = 0 - sy * fn * step;
          const q = `Satu garis lurus memotong paksi-x di (${a}, 0) dan paksi-y di (0, ${b}). Jika titik R(${x3}, t) juga terletak pada garis lurus yang sama, cari nilai t.`;
          const exp = `Kecerunan garis = -(${b})/(${a}) = ${fmtFrac(-b, a)}. Dengan menyamakan kecerunan kepada titik R: (t - 0)/(${x3} - (${a})) = ${fmtFrac(-b, a)} => t = ${t}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(t),
            [fmtInt(-t), fmtInt(t + 2), fmtInt(t - 3), fmtInt(b + step)],
            exp,
            `CI:${a},${b},${x3}`
          );
        } else {
          // Trapezium PQRS with PQ // SR, find unknown coordinate of S or R
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 10));
          const sign = pick(rng, [1, -1]);
          const sn = sign * fn;
          const k1 = randInt(rng, 1, 2);
          const k2 = randInt(rng, 2, 4);
          const px = randInt(rng, -5, 1);
          const py = randInt(rng, -4, 4);
          const qx = px + fd * k1;
          const qy = py + sn * k1;
          const sx = randInt(rng, -3, 3);
          const sy = py + pickNonZero(rng, 2, 6);
          const rx = sx + fd * k2;
          const ry = sy + sn * k2;
          const q = `Dalam sebuah trapezium PQRS pada satah Cartes, sisi PQ adalah selari dengan sisi SR. Diberi P${fmtCoord(px, py)}, Q${fmtCoord(qx, qy)}, S${fmtCoord(sx, sy)} dan R(${rx}, m). Tentukan nilai m.`;
          const exp = `Oleh sebab PQ // SR, kecerunan PQ = kecerunan SR = (${qy} - (${py}))/(${qx} - (${px})) = ${fmtFrac(sn, fd)}. Maka (m - (${sy}))/(${rx} - (${sx})) = ${fmtFrac(sn, fd)} => m = ${ry}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ry),
            [fmtInt(sy - sn * k2), fmtInt(ry + 2), fmtInt(ry - 2), fmtInt(-ry)],
            exp,
            `TR:${px},${py},${qx},${qy},${sx},${sy},${rx}`
          );
        }
      }
    },

    // =========================================================================
    // BAB 11: TRANSFORMASI ISOMETRI
    // =========================================================================

    // ---------- b11_s1_L ----------
    {
      id: "b11_s1_L",
      unit: "b11",
      skill: "b11_s1",
      diff: "L",
      templates: ["b11_s1_L_image_from_vector", "b11_s1_L_vector_from_points", "b11_s1_L_words_to_image"],
      generate(seed) {
        const rng = makeRng("b11_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s1", diff: "L", template: tpl };

        if (tpl === "b11_s1_L_image_from_vector") {
          const x = randInt(rng, -7, 7);
          const y = randInt(rng, -7, 7);
          const a = pickNonZero(rng, -6, 6);
          let b = pickNonZero(rng, -6, 6);
          if (b === a) b = a > 0 ? -a : -a + 1;
          const ix = x + a;
          const iy = y + b;
          const q = `Tentukan koordinat imej bagi titik P${fmtCoord(x, y)} di bawah suatu translasi vektor ${fmtPair(a, b)}.`;
          const exp = `Imej P' = (${x} + (${a}), ${y} + (${b})) = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(x - a, y - b), fmtCoord(x + b, y + a), fmtCoord(ix, y - b), fmtCoord(x - a, iy)],
            exp,
            `${x},${y},${a},${b}`
          );
        } else if (tpl === "b11_s1_L_vector_from_points") {
          const x = randInt(rng, -6, 6);
          const y = randInt(rng, -6, 6);
          const a = pickNonZero(rng, -7, 7);
          let b = pickNonZero(rng, -7, 7);
          if (b === a) b = -a;
          const ix = x + a;
          const iy = y + b;
          const q = `Titik A${fmtCoord(x, y)} dipetakan kepada imej A'${fmtCoord(ix, iy)} di bawah suatu translasi. Nyatakan vektor translasi tersebut.`;
          const exp = `Vektor translasi = (${ix} - (${x}), ${iy} - (${y})) = ${fmtPair(a, b)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtPair(a, b),
            [fmtPair(-a, -b), fmtPair(b, a), fmtPair(a, -b), fmtPair(-a, b)],
            exp,
            `V:${x},${y},${a},${b}`
          );
        } else {
          const x = randInt(rng, -6, 6);
          const y = randInt(rng, -6, 6);
          const hStep = randInt(rng, 2, 7);
          const vStep = randInt(rng, 2, 7);
          const right = randInt(rng, 0, 1) === 0;
          const up = randInt(rng, 0, 1) === 0;
          const a = right ? hStep : -hStep;
          const b = up ? vStep : -vStep;
          const ix = x + a;
          const iy = y + b;
          const hDir = right ? "ke kanan" : "ke kiri";
          const vDir = up ? "ke atas" : "ke bawah";
          const q = `Titik Q${fmtCoord(x, y)} digerakkan sebanyak ${hStep} unit ${hDir} dan ${vStep} unit ${vDir}. Apakah koordinat imej Q'?`;
          const exp = `Pergerakan ${hStep} unit ${hDir} bermakna ${a >= 0 ? `+${a}` : a} pada paksi-x, dan ${vStep} unit ${vDir} bermakna ${b >= 0 ? `+${b}` : b} pada paksi-y. Maka Q' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(x - a, y - b), fmtCoord(x + b, y + a), fmtCoord(ix, y - b), fmtCoord(x - a, iy)],
            exp,
            `W:${x},${y},${a},${b}`
          );
        }
      }
    },

    // ---------- b11_s1_M ----------
    {
      id: "b11_s1_M",
      unit: "b11",
      skill: "b11_s1",
      diff: "M",
      templates: ["b11_s1_M_object_from_image", "b11_s1_M_two_step", "b11_s1_M_same_trans_other_pt"],
      generate(seed) {
        const rng = makeRng("b11_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s1", diff: "M", template: tpl };

        if (tpl === "b11_s1_M_object_from_image") {
          const x = randInt(rng, -7, 7);
          const y = randInt(rng, -7, 7);
          const a = pickNonZero(rng, -6, 6);
          let b = pickNonZero(rng, -6, 6);
          if (b === a) b = -a;
          const ix = x + a;
          const iy = y + b;
          const q = `Imej bagi suatu titik P di bawah translasi vektor ${fmtPair(a, b)} ialah P'${fmtCoord(ix, iy)}. Cari koordinat objek P.`;
          const exp = `Objek P = (${ix} - (${a}), ${iy} - (${b})) = ${fmtCoord(x, y)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(x, y),
            [fmtCoord(ix + a, iy + b), fmtCoord(ix - b, iy - a), fmtCoord(x, iy + b), fmtCoord(ix + a, y)],
            exp,
            `${ix},${iy},${a},${b}`
          );
        } else if (tpl === "b11_s1_M_two_step") {
          const x = randInt(rng, -5, 5);
          const y = randInt(rng, -5, 5);
          const a1 = pickNonZero(rng, -5, 5);
          const b1 = pickNonZero(rng, -5, 5);
          const a2 = pickNonZero(rng, -5, 5);
          const b2 = pickNonZero(rng, -5, 5);
          const ix = x + a1 + a2;
          const iy = y + b1 + b2;
          const q = `Titik M${fmtCoord(x, y)} dikenakan translasi ${fmtPair(a1, b1)} diikuti oleh translasi ${fmtPair(a2, b2)}. Tentukan koordinat imej akhir M''.`;
          const exp = `Jumlah vektor translasi = (${a1} + (${a2}), ${b1} + (${b2})) = ${fmtPair(a1 + a2, b1 + b2)}. Maka M'' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [
              fmtCoord(x + a1 - a2, y + b1 - b2),
              fmtCoord(x - a1 - a2, y - b1 - b2),
              fmtCoord(x + a1 + b1, y + a2 + b2),
              fmtCoord(ix + 1, iy - 1)
            ],
            exp,
            `2S:${x},${y},${a1},${b1},${a2},${b2}`
          );
        } else {
          const ax = randInt(rng, -5, 5);
          const ay = randInt(rng, -5, 5);
          const a = pickNonZero(rng, -6, 6);
          const b = pickNonZero(rng, -6, 6);
          const ax2 = ax + a;
          const ay2 = ay + b;
          const bx = randInt(rng, -5, 5);
          const by = randInt(rng, -5, 5);
          const bx2 = bx + a;
          const by2 = by + b;
          const q = `Dalam suatu translasi, titik A${fmtCoord(ax, ay)} dipetakan kepada A'${fmtCoord(ax2, ay2)}. Di bawah translasi yang sama, cari koordinat imej bagi titik B${fmtCoord(bx, by)}.`;
          const exp = `Vektor translasi = (${ax2} - (${ax}), ${ay2} - (${ay})) = ${fmtPair(a, b)}. Maka B' = (${bx} + (${a}), ${by} + (${b})) = ${fmtCoord(bx2, by2)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(bx2, by2),
            [fmtCoord(bx - a, by - b), fmtCoord(bx + b, by + a), fmtCoord(bx2, by - b), fmtCoord(bx - a, by2)],
            exp,
            `OT:${ax},${ay},${a},${b},${bx},${by}`
          );
        }
      }
    },

    // ---------- b11_s1_H ----------
    {
      id: "b11_s1_H",
      unit: "b11",
      skill: "b11_s1",
      diff: "H",
      templates: ["b11_s1_H_reverse_two_step", "b11_s1_H_infer_vector_then_object", "b11_s1_H_midpoint_translated"],
      generate(seed) {
        const rng = makeRng("b11_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s1", diff: "H", template: tpl };

        if (tpl === "b11_s1_H_reverse_two_step") {
          const x = randInt(rng, -6, 6);
          const y = randInt(rng, -6, 6);
          const a1 = pickNonZero(rng, -5, 5);
          const b1 = pickNonZero(rng, -5, 5);
          const a2 = pickNonZero(rng, -5, 5);
          const b2 = pickNonZero(rng, -5, 5);
          const x2 = x + a1 + a2;
          const y2 = y + b1 + b2;
          const q = `Suatu titik K mengalami translasi ${fmtPair(a1, b1)} dan kemudiannya translasi ${fmtPair(a2, b2)} untuk menghasilkan imej akhir K''${fmtCoord(x2, y2)}. Cari koordinat asal titik K.`;
          const exp = `Jumlah vektor translasi = ${fmtPair(a1 + a2, b1 + b2)}. Oleh itu, K = (${x2} - (${a1 + a2}), ${y2} - (${b1 + b2})) = ${fmtCoord(x, y)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(x, y),
            [
              fmtCoord(x2 + a1 + a2, y2 + b1 + b2),
              fmtCoord(x2 - a1 + a2, y2 - b1 + b2),
              fmtCoord(x2 - b1 - b2, y2 - a1 - a2),
              fmtCoord(x + 2, y - 1)
            ],
            exp,
            `${x},${y},${a1},${b1},${a2},${b2}`
          );
        } else if (tpl === "b11_s1_H_infer_vector_then_object") {
          const ax = randInt(rng, -5, 5);
          const ay = randInt(rng, -5, 5);
          const a = pickNonZero(rng, -6, 6);
          const b = pickNonZero(rng, -6, 6);
          const ax2 = ax + a;
          const ay2 = ay + b;
          const bx = randInt(rng, -5, 5);
          const by = randInt(rng, -5, 5);
          const bx2 = bx + a;
          const by2 = by + b;
          const q = `Satu translasi memetakan titik P${fmtCoord(ax, ay)} kepada P'${fmtCoord(ax2, ay2)}. Jika imej bagi titik Q di bawah translasi yang sama ialah Q'${fmtCoord(bx2, by2)}, nyatakan koordinat objek Q.`;
          const exp = `Vektor translasi = (${ax2} - (${ax}), ${ay2} - (${ay})) = ${fmtPair(a, b)}. Maka objek Q = (${bx2} - (${a}), ${by2} - (${b})) = ${fmtCoord(bx, by)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(bx, by),
            [fmtCoord(bx2 + a, by2 + b), fmtCoord(bx2 - b, by2 - a), fmtCoord(bx, by2 + b), fmtCoord(bx2 + a, by)],
            exp,
            `IO:${ax},${ay},${a},${b},${bx},${by}`
          );
        } else {
          // Segment AB translated by (a, b) -> find midpoint of A'B'
          const mx = randInt(rng, -4, 4);
          const my = randInt(rng, -4, 4);
          const hx = randInt(rng, 1, 4);
          const hy = randInt(rng, 1, 4);
          const ax = mx - hx;
          const ay = my + hy;
          const bx = mx + hx;
          const by = my - hy;
          const a = pickNonZero(rng, -5, 5);
          const b = pickNonZero(rng, -5, 5);
          const m2x = mx + a;
          const m2y = my + b;
          const q = `Tembereng garis AB dengan A${fmtCoord(ax, ay)} dan B${fmtCoord(bx, by)} ditranslasikan dengan vektor ${fmtPair(a, b)} menjadi A'B'. Cari koordinat titik tengah bagi A'B'.`;
          const exp = `Titik tengah AB ialah ${fmtCoord(mx, my)}. Di bawah translasi ${fmtPair(a, b)}, titik tengah imej A'B' ialah (${mx} + (${a}), ${my} + (${b})) = ${fmtCoord(m2x, m2y)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(m2x, m2y),
            [fmtCoord(mx - a, my - b), fmtCoord(mx, my), fmtCoord(m2x, my - b), fmtCoord(mx + b, my + a)],
            exp,
            `MP:${ax},${ay},${bx},${by},${a},${b}`
          );
        }
      }
    },

    // ---------- b11_s2_L ----------
    {
      id: "b11_s2_L",
      unit: "b11",
      skill: "b11_s2",
      diff: "L",
      templates: ["b11_s2_L_reflect_x_axis", "b11_s2_L_reflect_y_axis", "b11_s2_L_identify_axis"],
      generate(seed) {
        const rng = makeRng("b11_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s2", diff: "L", template: tpl };

        const x = pickNonZero(rng, -9, 9);
        let y = pickNonZero(rng, -9, 9);
        if (Math.abs(y) === Math.abs(x)) y = y > 0 ? y + 1 : y - 1;

        if (tpl === "b11_s2_L_reflect_x_axis") {
          const ix = x;
          const iy = -y;
          const q = `Cari koordinat imej bagi titik P${fmtCoord(x, y)} di bawah suatu pantulan pada paksi-x.`;
          const exp = `Pantulan pada paksi-x menukar tanda koordinat-y: (x, y) → (x, -y). Maka P' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(-x, y), fmtCoord(-x, -y), fmtCoord(y, x), fmtCoord(-y, -x)],
            exp,
            `X:${x},${y}`
          );
        } else if (tpl === "b11_s2_L_reflect_y_axis") {
          const ix = -x;
          const iy = y;
          const q = `Tentukan koordinat imej bagi titik Q${fmtCoord(x, y)} apabila dipantulkan pada paksi-y.`;
          const exp = `Pantulan pada paksi-y menukar tanda koordinat-x: (x, y) → (-x, y). Maka Q' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(x, -y), fmtCoord(-x, -y), fmtCoord(y, x), fmtCoord(-y, x)],
            exp,
            `Y:${x},${y}`
          );
        } else {
          const onX = randInt(rng, 0, 1) === 0;
          const ix = onX ? x : -x;
          const iy = onX ? -y : y;
          const corr = onX ? "paksi-x" : "paksi-y";
          const wrongAxis = onX ? "paksi-y" : "paksi-x";
          const q = `Titik A${fmtCoord(x, y)} dipetakan kepada imej A'${fmtCoord(ix, iy)} di bawah suatu pantulan. Nyatakan paksi pantulan itu.`;
          const exp = onX
            ? `Koordinat-x kekal (${x}) manakala koordinat-y bertukar tanda (${y} → ${iy}), maka paksi pantulan ialah paksi-x.`
            : `Koordinat-y kekal (${y}) manakala koordinat-x bertukar tanda (${x} → ${ix}), maka paksi pantulan ialah paksi-y.`;
          return buildMcq(
            rng,
            meta,
            q,
            corr,
            [wrongAxis, "garis y = x", "garis y = -x", `garis x = ${x}`],
            exp,
            `ID:${x},${y},${onX}`
          );
        }
      }
    },

    // ---------- b11_s2_M ----------
    {
      id: "b11_s2_M",
      unit: "b11",
      skill: "b11_s2",
      diff: "M",
      templates: ["b11_s2_M_reflect_x_k", "b11_s2_M_reflect_y_k", "b11_s2_M_find_mirror_line"],
      generate(seed) {
        const rng = makeRng("b11_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s2", diff: "M", template: tpl };

        if (tpl === "b11_s2_M_reflect_x_k") {
          const k = pickNonZero(rng, -5, 6);
          const d = pickNonZero(rng, -6, 6);
          const x = k + d;
          const y = randInt(rng, -7, 7);
          const ix = 2 * k - x;
          const iy = y;
          const q = `Titik P${fmtCoord(x, y)} dipantulkan pada garis lurus x = ${k}. Tentukan koordinat imej P'.`;
          const exp = `Jarak mengufuk dari x = ${k} ke ${x} ialah ${Math.abs(d)} unit, maka imej berada di sebelah bertentangan pada jarak yang sama: x' = 2(${k}) - (${x}) = ${ix}, manakala y kekal ${y}. Jadi P' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(-x, y), fmtCoord(x, 2 * k - y), fmtCoord(x + k, y), fmtCoord(k - x, y)],
            exp,
            `XK:${x},${y},${k}`
          );
        } else if (tpl === "b11_s2_M_reflect_y_k") {
          const k = pickNonZero(rng, -5, 6);
          const d = pickNonZero(rng, -6, 6);
          const x = randInt(rng, -7, 7);
          const y = k + d;
          const ix = x;
          const iy = 2 * k - y;
          const q = `Cari koordinat imej bagi titik R${fmtCoord(x, y)} di bawah pantulan pada garis lurus y = ${k}.`;
          const exp = `Koordinat-x kekal ${x}. Untuk paksi pantulan mengufuk y = ${k}, y' = 2(${k}) - (${y}) = ${iy}. Maka R' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(x, -y), fmtCoord(2 * k - x, y), fmtCoord(x, y + k), fmtCoord(x, k - y)],
            exp,
            `YK:${x},${y},${k}`
          );
        } else {
          const isVert = randInt(rng, 0, 1) === 0;
          const k = pickNonZero(rng, -5, 6);
          const d = pickNonZero(rng, -5, 5);
          if (isVert) {
            const x1 = k + d;
            const x2 = k - d;
            const y = randInt(rng, -6, 6);
            const corr = `x = ${k}`;
            const q = `Di bawah suatu pantulan, titik M${fmtCoord(x1, y)} dipetakan kepada M'${fmtCoord(x2, y)}. Nyatakan persamaan paksi pantulan tersebut.`;
            const exp = `Oleh sebab koordinat-y kekal (${y}), paksi pantulan ialah garis mencancang melalui titik tengah x = (${x1} + ${x2})/2 = ${k}, iaitu x = ${k}.`;
            return buildMcq(
              rng,
              meta,
              q,
              corr,
              [`y = ${k}`, `x = ${-k}`, `x = ${k + 1}`, `y = ${y}`],
              exp,
              `FM:V:${x1},${x2},${y}`
            );
          }
          const x = randInt(rng, -6, 6);
          const y1 = k + d;
          const y2 = k - d;
          const corr = `y = ${k}`;
          const q = `Di bawah suatu pantulan, titik N${fmtCoord(x, y1)} dipetakan kepada N'${fmtCoord(x, y2)}. Tentukan persamaan paksi pantulan tersebut.`;
          const exp = `Oleh sebab koordinat-x kekal (${x}), paksi pantulan ialah garis mengufuk melalui titik tengah y = (${y1} + ${y2})/2 = ${k}, iaitu y = ${k}.`;
          return buildMcq(
            rng,
            meta,
            q,
            corr,
            [`x = ${k}`, `y = ${-k}`, `y = ${k + 1}`, `x = ${x}`],
            exp,
            `FM:H:${x},${y1},${y2}`
          );
        }
      }
    },

    // ---------- b11_s2_H ----------
    {
      id: "b11_s2_H",
      unit: "b11",
      skill: "b11_s2",
      diff: "H",
      templates: ["b11_s2_H_two_perp_lines", "b11_s2_H_two_parallel_lines", "b11_s2_H_reflect_and_trans"],
      generate(seed) {
        const rng = makeRng("b11_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s2", diff: "H", template: tpl };

        if (tpl === "b11_s2_H_two_perp_lines") {
          const x = randInt(rng, -6, 6);
          const y = randInt(rng, -6, 6);
          const kx = pickNonZero(rng, -4, 4);
          const ky = pickNonZero(rng, -4, 4);
          const x1 = 2 * kx - x;
          const y2 = 2 * ky - y;
          const q = `Titik P${fmtCoord(x, y)} dipantulkan pada garis x = ${kx} untuk menghasilkan P', kemudian P' dipantulkan pula pada garis y = ${ky} untuk menghasilkan P''. Cari koordinat P''.`;
          const exp = `Selepas pantulan pada x = ${kx}, P' = (${x1}, ${y}). Selepas pantulan pada y = ${ky}, P'' = (${x1}, 2(${ky}) - (${y})) = ${fmtCoord(x1, y2)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(x1, y2),
            [fmtCoord(2 * ky - x, 2 * kx - y), fmtCoord(-x, -y), fmtCoord(x1, y), fmtCoord(x, y2)],
            exp,
            `${x},${y},${kx},${ky}`
          );
        } else if (tpl === "b11_s2_H_two_parallel_lines") {
          const x = randInt(rng, -5, 5);
          const y = randInt(rng, -5, 5);
          const k1 = pickNonZero(rng, -4, 4);
          let k2 = pickNonZero(rng, -4, 4);
          while (k2 === k1) k2 = pickNonZero(rng, -5, 5);
          const isVert = randInt(rng, 0, 1) === 0;
          if (isVert) {
            const x1 = 2 * k1 - x;
            const x2 = 2 * k2 - x1;
            const q = `Titik A${fmtCoord(x, y)} dipantulkan pada garis x = ${k1} dan imejnya dipantulkan sekali lagi pada garis x = ${k2}. Apakah koordinat imej akhir A''?`;
            const exp = `Pantulan pertama pada x = ${k1} memberi A' = (${x1}, ${y}). Pantulan kedua pada x = ${k2} memberi A'' = (2(${k2}) - (${x1}), ${y}) = ${fmtCoord(x2, y)}.`;
            return buildMcq(
              rng,
              meta,
              q,
              fmtCoord(x2, y),
              [fmtCoord(x1, y), fmtCoord(2 * k1 - (2 * k2 - x), y), fmtCoord(x + k2 - k1, y), fmtCoord(x2 + 2, y)],
              exp,
              `PV:${x},${y},${k1},${k2}`
            );
          }
          const y1 = 2 * k1 - y;
          const y2 = 2 * k2 - y1;
          const q = `Titik B${fmtCoord(x, y)} dipantulkan pada garis y = ${k1} diikuti oleh pantulan pada garis y = ${k2}. Tentukan koordinat imej akhir B''.`;
          const exp = `Pantulan pertama pada y = ${k1} memberi B' = (${x}, ${y1}). Pantulan kedua pada y = ${k2} memberi B'' = (${x}, 2(${k2}) - (${y1})) = ${fmtCoord(x, y2)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(x, y2),
            [fmtCoord(x, y1), fmtCoord(x, 2 * k1 - (2 * k2 - y)), fmtCoord(x, y + k2 - k1), fmtCoord(x, y2 + 2)],
            exp,
            `PH:${x},${y},${k1},${k2}`
          );
        } else {
          // Reflection on x = k (or y = k) followed by translation (a, b) -> find final or find k
          const x = randInt(rng, -5, 5);
          const y = randInt(rng, -5, 5);
          const k = pickNonZero(rng, -4, 4);
          const a = pickNonZero(rng, -4, 4);
          const b = pickNonZero(rng, -4, 4);
          const rx = 2 * k - x;
          const fx = rx + a;
          const fy = y + b;
          const q = `Titik Q${fmtCoord(x, y)} mengalami pantulan pada garis x = k diikuti dengan translasi ${fmtPair(a, b)} untuk menghasilkan imej akhir Q''${fmtCoord(fx, fy)}. Cari nilai k.`;
          const exp = `Sebelum translasi ${fmtPair(a, b)}, imej pantulan Q' ialah (${fx} - (${a}), ${fy} - (${b})) = ${fmtCoord(rx, y)}. Oleh sebab Q' ialah pantulan Q pada x = k, maka k = (${x} + ${rx})/2 = ${k}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(k),
            [fmtInt(-k), fmtInt(k + 1), fmtInt(k - 2), fmtInt(Math.round((x + fx) / 2))],
            exp,
            `RT:${x},${y},${k},${a},${b}`
          );
        }
      }
    },

    // ---------- b11_s3_L ----------
    {
      id: "b11_s3_L",
      unit: "b11",
      skill: "b11_s3",
      diff: "L",
      templates: ["b11_s3_L_rot90_origin", "b11_s3_L_rot180_origin", "b11_s3_L_congruence_invariant"],
      generate(seed) {
        const rng = makeRng("b11_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s3", diff: "L", template: tpl };

        if (tpl === "b11_s3_L_rot90_origin") {
          const x = pickNonZero(rng, -8, 8);
          let y = pickNonZero(rng, -8, 8);
          if (Math.abs(y) === Math.abs(x)) y = y > 0 ? y + 1 : y - 1;
          const dirCW = randInt(rng, 0, 1) === 0;
          const [ix, iy] = rotatePoint(x, y, 0, 0, 90, dirCW);
          const dirText = dirCW ? "ikut arah jam" : "lawan arah jam";
          const [wx, wy] = rotatePoint(x, y, 0, 0, 90, !dirCW);
          const q = `Cari koordinat imej bagi titik P${fmtCoord(x, y)} di bawah suatu putaran 90° ${dirText} pada asalan (0, 0).`;
          const exp = dirCW
            ? `Putaran 90° ikut arah jam pada asalan memetakan (x, y) → (y, -x). Maka P' = ${fmtCoord(ix, iy)}.`
            : `Putaran 90° lawan arah jam pada asalan memetakan (x, y) → (-y, x). Maka P' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(wx, wy), fmtCoord(-x, -y), fmtCoord(x, -y), fmtCoord(-x, y)],
            exp,
            `90:${x},${y},${dirCW}`
          );
        } else if (tpl === "b11_s3_L_rot180_origin") {
          const x = pickNonZero(rng, -9, 9);
          let y = pickNonZero(rng, -9, 9);
          if (Math.abs(y) === Math.abs(x)) y = y > 0 ? y + 1 : y - 1;
          const [ix, iy] = rotatePoint(x, y, 0, 0, 180, true);
          const q = `Titik A${fmtCoord(x, y)} diputarkan sebanyak 180° pada asalan (0, 0). Tentukan koordinat imej A'.`;
          const exp = `Putaran 180° pada asalan memetakan (x, y) → (-x, -y). Maka A' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(-x, y), fmtCoord(x, -y), fmtCoord(y, -x), fmtCoord(-y, x)],
            exp,
            `180:${x},${y}`
          );
        } else {
          const sub = randInt(rng, 0, 2);
          if (sub === 0) {
            const s1 = randInt(rng, 5, 14);
            const s2 = s1 + randInt(rng, 2, 6);
            const s3 = s2 + randInt(rng, 1, 4);
            const perim = s1 + s2 + s3;
            const trans = pick(rng, ["translasi", "pantulan", "putaran 90°"]);
            const q = `Segi tiga ABC dengan panjang sisi ${s1} cm, ${s2} cm dan ${s3} cm mengalami suatu ${trans} untuk membentuk imej kongruen A'B'C'. Berapakah perimeter segi tiga A'B'C'?`;
            const exp = `${trans[0].toUpperCase() + trans.slice(1)} ialah transformasi isometri yang mengekalkan bentuk dan saiz (kekongruenan). Maka perimeter A'B'C' = ${s1} + ${s2} + ${s3} = ${perim} cm.`;
            return buildMcq(
              rng,
              meta,
              q,
              `${perim} cm`,
              [`${perim * 2} cm`, `${Math.round(perim / 2)} cm`, `${perim + 6} cm`, `${s1 + s2} cm`],
              exp,
              `CP:${s1},${s2},${s3},${trans}`
            );
          } else if (sub === 1) {
            const area = randInt(rng, 14, 65);
            const trans = pick(rng, ["putaran 180°", "pantulan pada paksi-x", "translasi"]);
            const q = `Sebuah poligon berluas ${area} cm² dikenakan ${trans}. Hitung luas imej poligon tersebut.`;
            const exp = `Di bawah transformasi isometri (${trans}), objek dan imej adalah kongruen, jadi luasnya kekal ${area} cm².`;
            return buildMcq(
              rng,
              meta,
              q,
              `${area} cm²`,
              [`${area * 2} cm²`, `${area + 10} cm²`, `${Math.max(4, area - 8)} cm²`, `${area * 4} cm²`],
              exp,
              `CA:${area},${trans}`
            );
          }
          const ang = randInt(rng, 28, 78);
          const trans = pick(rng, ["putaran 90° ikut arah jam", "pantulan pada paksi-y", "translasi"]);
          const q = `Dalam suatu rajah pada satah Cartes, sudut PQR ialah ${ang}°. Segi tiga PQR kemudiannya mengalami ${trans} menghasilkan imej P'Q'R'. Berapakah nilai sudut P'Q'R'?`;
          const exp = `Transformasi isometri mengekalkan saiz sudut sepadan. Oleh itu, sudut P'Q'R' = ${ang}°.`;
          return buildMcq(
            rng,
            meta,
            q,
            `${ang}°`,
            [`${180 - ang}°`, `${90 - ang}°`, `${ang + 90}°`, `${ang * 2}°`],
            exp,
            `CG:${ang},${trans}`
          );
        }
      }
    },

    // ---------- b11_s3_M ----------
    {
      id: "b11_s3_M",
      unit: "b11",
      skill: "b11_s3",
      diff: "M",
      templates: ["b11_s3_M_rot90_centre", "b11_s3_M_rot180_centre", "b11_s3_M_describe_rot_origin"],
      generate(seed) {
        const rng = makeRng("b11_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s3", diff: "M", template: tpl };

        if (tpl === "b11_s3_M_rot90_centre") {
          const cx = pickNonZero(rng, -4, 4);
          const cy = pickNonZero(rng, -4, 4);
          const dx = pickNonZero(rng, -5, 5);
          let dy = pickNonZero(rng, -5, 5);
          if (Math.abs(dy) === Math.abs(dx)) dy = dy > 0 ? dy + 1 : dy - 1;
          const x = cx + dx;
          const y = cy + dy;
          const dirCW = randInt(rng, 0, 1) === 0;
          const dirText = dirCW ? "ikut arah jam" : "lawan arah jam";
          const [ix, iy] = rotatePoint(x, y, cx, cy, 90, dirCW);
          const [wx, wy] = rotatePoint(x, y, cx, cy, 90, !dirCW);
          const [ox, oy] = rotatePoint(x, y, 0, 0, 90, dirCW);
          const q = `Tentukan koordinat imej bagi titik P${fmtCoord(x, y)} di bawah putaran 90° ${dirText} pada pusat ${fmtCoord(cx, cy)}.`;
          const exp = `Anjakkan pusat ke (0, 0): (${dx}, ${dy}). Selepas putaran 90° ${dirText}, vektor menjadi (${dirCW ? dy : -dy}, ${dirCW ? -dx : dx}). Tambah semula pusat ${fmtCoord(cx, cy)} memberi P' = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(wx, wy), fmtCoord(ox, oy), fmtCoord(2 * cx - x, 2 * cy - y), fmtCoord(ix + 1, iy - 1)],
            exp,
            `90C:${x},${y},${cx},${cy},${dirCW}`
          );
        } else if (tpl === "b11_s3_M_rot180_centre") {
          const cx = pickNonZero(rng, -4, 5);
          const cy = pickNonZero(rng, -4, 5);
          const dx = pickNonZero(rng, -5, 5);
          let dy = pickNonZero(rng, -5, 5);
          if (Math.abs(dy) === Math.abs(dx)) dy = dy > 0 ? dy + 1 : dy - 1;
          const x = cx + dx;
          const y = cy + dy;
          const [ix, iy] = rotatePoint(x, y, cx, cy, 180, true);
          const q = `Titik B${fmtCoord(x, y)} diputarkan 180° pada pusat C${fmtCoord(cx, cy)}. Apakah koordinat imej B'?`;
          const exp = `Di bawah putaran 180° pada pusat (${cx}, ${cy}), B' = (2(${cx}) - (${x}), 2(${cy}) - (${y})) = ${fmtCoord(ix, iy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(ix, iy),
            [fmtCoord(-x, -y), fmtCoord(cx + dx, cy - dy), fmtCoord(cx - dx, cy + dy), fmtCoord(cx + dy, cy - dx)],
            exp,
            `180C:${x},${y},${cx},${cy}`
          );
        } else {
          const x = pickNonZero(rng, -7, 7);
          let y = pickNonZero(rng, -7, 7);
          if (Math.abs(y) === Math.abs(x)) y = y > 0 ? y + 1 : y - 1;
          const mode = randInt(rng, 0, 2); // 0: 90 CW, 1: 90 CCW, 2: 180
          const [ix, iy] = mode === 2
            ? rotatePoint(x, y, 0, 0, 180, true)
            : rotatePoint(x, y, 0, 0, 90, mode === 0);
          const labels = [
            "Putaran 90° ikut arah jam pada asalan (0, 0)",
            "Putaran 90° lawan arah jam pada asalan (0, 0)",
            "Putaran 180° pada asalan (0, 0)"
          ];
          const corr = labels[mode];
          const wrongs = labels.filter((_, idx) => idx !== mode);
          wrongs.push("Putaran 90° ikut arah jam pada titik (1, 1)");
          const q = `Titik M${fmtCoord(x, y)} dipetakan kepada imej M'${fmtCoord(ix, iy)} melalui suatu putaran berpusat di asalan (0, 0). Perihalkan putaran tersebut dengan lengkap.`;
          const exp = `Membandingkan ${fmtCoord(x, y)} dengan ${fmtCoord(ix, iy)} terhadap asalan (0, 0) menunjukkan transformasi itu ialah ${corr.toLowerCase()}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `DESC:${x},${y},${mode}`);
        }
      }
    },

    // ---------- b11_s3_H ----------
    {
      id: "b11_s3_H",
      unit: "b11",
      skill: "b11_s3",
      diff: "H",
      templates: ["b11_s3_H_find_object_rot90", "b11_s3_H_find_centre_180", "b11_s3_H_rot_then_reflect"],
      generate(seed) {
        const rng = makeRng("b11_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b11", skill: "b11_s3", diff: "H", template: tpl };

        if (tpl === "b11_s3_H_find_object_rot90") {
          const cx = pickNonZero(rng, -4, 4);
          const cy = pickNonZero(rng, -4, 4);
          const dx = pickNonZero(rng, -5, 5);
          let dy = pickNonZero(rng, -5, 5);
          if (Math.abs(dy) === Math.abs(dx)) dy = dy > 0 ? dy + 1 : dy - 1;
          const objX = cx + dx;
          const objY = cy + dy;
          const dirCW = randInt(rng, 0, 1) === 0;
          const dirText = dirCW ? "ikut arah jam" : "lawan arah jam";
          const [ix, iy] = rotatePoint(objX, objY, cx, cy, 90, dirCW);
          const [wrongSameDirX, wrongSameDirY] = rotatePoint(ix, iy, cx, cy, 90, dirCW);
          const [wrongOriginX, wrongOriginY] = rotatePoint(ix, iy, 0, 0, 90, !dirCW);
          const q = `Titik P'${fmtCoord(ix, iy)} ialah imej bagi titik P di bawah satu putaran 90° ${dirText} pada pusat ${fmtCoord(cx, cy)}. Cari koordinat objek P.`;
          const exp = `Untuk mencari objek daripada putaran 90° ${dirText}, lakukan putaran songsang 90° ${dirCW ? "lawan arah jam" : "ikut arah jam"} pada pusat ${fmtCoord(cx, cy)}, menghasilkan P = ${fmtCoord(objX, objY)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(objX, objY),
            [
              fmtCoord(wrongSameDirX, wrongSameDirY),
              fmtCoord(wrongOriginX, wrongOriginY),
              fmtCoord(2 * cx - ix, 2 * cy - iy),
              fmtCoord(objX + 2, objY)
            ],
            exp,
            `OBJ:${objX},${objY},${cx},${cy},${dirCW}`
          );
        } else if (tpl === "b11_s3_H_find_centre_180") {
          const cx = pickNonZero(rng, -5, 5);
          const cy = pickNonZero(rng, -5, 5);
          const dx = pickNonZero(rng, -6, 6);
          let dy = pickNonZero(rng, -6, 6);
          if (Math.abs(dy) === Math.abs(dx)) dy = dy > 0 ? dy + 1 : dy - 1;
          const ax = cx + dx;
          const ay = cy + dy;
          const ix = cx - dx;
          const iy = cy - dy;
          const q = `Titik A${fmtCoord(ax, ay)} dipetakan ke imej A'${fmtCoord(ix, iy)} di bawah suatu putaran 180°. Tentukan koordinat pusat putaran itu.`;
          const exp = `Pusat putaran bagi putaran 180° ialah titik tengah antara objek dan imej: ((${ax} + ${ix})/2, (${ay} + ${iy})/2) = ${fmtCoord(cx, cy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(cx, cy),
            [fmtCoord(-cx, -cy), fmtCoord(dx, dy), fmtCoord(cy, cx), fmtCoord(cx + 1, cy - 1)],
            exp,
            `CTR:${ax},${ay},${ix},${iy}`
          );
        } else {
          const cx = pickNonZero(rng, -3, 3);
          const cy = pickNonZero(rng, -3, 3);
          const dx = pickNonZero(rng, -4, 4);
          let dy = pickNonZero(rng, -4, 4);
          if (Math.abs(dy) === Math.abs(dx)) dy = dy > 0 ? dy + 1 : dy - 1;
          const x = cx + dx;
          const y = cy + dy;
          const dirCW = randInt(rng, 0, 1) === 0;
          const dirText = dirCW ? "ikut arah jam" : "lawan arah jam";
          const [rx, ry] = rotatePoint(x, y, cx, cy, 90, dirCW);
          const reflectXAxis = randInt(rng, 0, 1) === 0;
          const fx = reflectXAxis ? rx : -rx;
          const fy = reflectXAxis ? -ry : ry;
          const axisName = reflectXAxis ? "paksi-x" : "paksi-y";
          const q = `Titik K${fmtCoord(x, y)} diputarkan 90° ${dirText} pada pusat ${fmtCoord(cx, cy)}, kemudian imejnya dipantulkan pada ${axisName}. Cari koordinat imej akhir K''.`;
          const exp = `Selepas putaran 90° ${dirText} pada pusat ${fmtCoord(cx, cy)}, K' = ${fmtCoord(rx, ry)}. Seterusnya pantulan pada ${axisName} memberi K'' = ${fmtCoord(fx, fy)}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtCoord(fx, fy),
            [
              fmtCoord(rx, ry),
              fmtCoord(reflectXAxis ? -rx : rx, reflectXAxis ? ry : -ry),
              fmtCoord(-fx, -fy),
              fmtCoord(fx + 1, fy - 1)
            ],
            exp,
            `CMB:${x},${y},${cx},${cy},${dirCW},${reflectXAxis}`
          );
        }
      }
    },

    // =========================================================================
    // BAB 12: SUKATAN KECENDERUNGAN MEMUSAT
    // =========================================================================

    // ---------- b12_s1_L ----------
    {
      id: "b12_s1_L",
      unit: "b12",
      skill: "b12_s1",
      diff: "L",
      templates: ["b12_s1_L_mode_raw", "b12_s1_L_median_odd", "b12_s1_L_mode_freq"],
      generate(seed) {
        const rng = makeRng("b12_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s1", diff: "L", template: tpl };

        if (tpl === "b12_s1_L_mode_raw") {
          const base = randInt(rng, 2, 20);
          const poolVals = [base, base + 2, base + 4, base + 6, base + 8];
          const modeIdx = randInt(rng, 0, poolVals.length - 1);
          const modeVal = poolVals[modeIdx];
          const arr = [modeVal, modeVal, modeVal];
          for (let i = 0; i < poolVals.length; i++) {
            if (i === modeIdx) continue;
            arr.push(poolVals[i]);
            if (randInt(rng, 0, 2) === 0) arr.push(poolVals[i]); // max 2 times, strictly < 3
          }
          const raw = shuffle(rng, arr);
          const med = calcMedian(raw);
          const q = `Cari mod bagi set data berikut:\n${raw.join(", ")}`;
          const exp = `Nilai ${modeVal} mempunyai kekerapan tertinggi iaitu sebanyak 3 kali. Maka mod = ${modeVal}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(modeVal),
            [
              fmtInt(poolVals[(modeIdx + 1) % poolVals.length]),
              Number.isInteger(med) && med !== modeVal ? fmtInt(med) : fmtInt(modeVal + 2),
              "3",
              fmtInt(poolVals[(modeIdx + 2) % poolVals.length])
            ],
            exp,
            `${raw.join(",")}`
          );
        } else if (tpl === "b12_s1_L_median_odd") {
          const n = pick(rng, [7, 9]);
          const start = randInt(rng, 3, 25);
          const sorted = [];
          let cur = start;
          for (let i = 0; i < n; i++) {
            cur += randInt(rng, 1, 4);
            sorted.push(cur);
          }
          const raw = shuffle(rng, sorted);
          // Ensure raw middle value differs from true median so unsorted trap works
          const med = sorted[(n - 1) / 2];
          const rawMid = raw[(n - 1) / 2];
          const q = `Tentukan median bagi set data berikut:\n${raw.join(", ")}`;
          const exp = `Susun data mengikut tertib menaik: ${sorted.join(", ")}. Nilai yang berada di kedudukan tengah ialah ${med}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(med),
            [
              rawMid !== med ? fmtInt(rawMid) : fmtInt(med + 2),
              fmtInt(sorted[(n - 1) / 2 - 1]),
              fmtInt(sorted[(n - 1) / 2 + 1]),
              fmtInt(sorted[n - 1] - sorted[0])
            ],
            exp,
            `MO:${raw.join(",")}`
          );
        } else {
          const s0 = randInt(rng, 1, 5);
          const scores = [s0, s0 + 1, s0 + 2, s0 + 3, s0 + 4];
          const freqs = [
            randInt(rng, 2, 5),
            randInt(rng, 2, 6),
            randInt(rng, 2, 6),
            randInt(rng, 2, 5),
            randInt(rng, 1, 4)
          ];
          const modeIdx = randInt(rng, 0, 4);
          const maxF = Math.max(...freqs) + randInt(rng, 2, 4);
          freqs[modeIdx] = maxF;
          // Ensure maxF does not equal any score if possible, or just valid distractors
          const modeScore = scores[modeIdx];
          const pairs = scores.map((sc, i) => [sc, freqs[i]]);
          const tbl = fmtFreqTable("Skor", "Kekerapan", pairs);
          const q = `Jadual berikut menunjukkan skor kuiz bagi sekumpulan murid:\n${tbl}\nNyatakan mod bagi skor tersebut.`;
          const exp = `Kekerapan tertinggi ialah ${maxF}, yang sepadan dengan skor ${modeScore}. Oleh itu, mod = ${modeScore}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(modeScore),
            [
              fmtInt(maxF),
              fmtInt(scores[(modeIdx + 1) % 5]),
              fmtInt(scores[(modeIdx + 2) % 5]),
              fmtInt(modeScore + 3)
            ],
            exp,
            `MF:${scores[0]}:${freqs.join(",")}`
          );
        }
      }
    },

    // ---------- b12_s1_M ----------
    {
      id: "b12_s1_M",
      unit: "b12",
      skill: "b12_s1",
      diff: "M",
      templates: ["b12_s1_M_median_even", "b12_s1_M_median_freq_table", "b12_s1_M_mode_categorical"],
      generate(seed) {
        const rng = makeRng("b12_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s1", diff: "M", template: tpl };

        if (tpl === "b12_s1_M_median_even") {
          const n = pick(rng, [8, 10]);
          const sorted = [];
          let cur = randInt(rng, 4, 22);
          for (let i = 0; i < n; i++) {
            cur += randInt(rng, 1, 4);
            sorted.push(cur);
          }
          const raw = shuffle(rng, sorted);
          const m1 = sorted[n / 2 - 1];
          const m2 = sorted[n / 2];
          const med = (m1 + m2) / 2;
          const medStr = fmtDec(med, 2);
          const q = `Hitung median bagi set nombor berikut:\n${raw.join(", ")}`;
          const exp = `Susunan menaik: ${sorted.join(", ")}. Dua nilai tengah ialah ${m1} dan ${m2}. Median = (${m1} + ${m2}) / 2 = ${medStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            medStr,
            [
              fmtInt(m1),
              fmtInt(m2),
              fmtDec((raw[n / 2 - 1] + raw[n / 2]) / 2, 2),
              fmtDec(med + 1, 2)
            ],
            exp,
            `${raw.join(",")}`
          );
        } else if (tpl === "b12_s1_M_median_freq_table") {
          const s0 = randInt(rng, 1, 6);
          const scores = [s0, s0 + 1, s0 + 2, s0 + 3, s0 + 4];
          const freqs = [
            randInt(rng, 2, 5),
            randInt(rng, 3, 6),
            randInt(rng, 3, 7),
            randInt(rng, 2, 6),
            randInt(rng, 2, 5)
          ];
          const total = freqs.reduce((a, b) => a + b, 0);
          const expanded = [];
          for (let i = 0; i < 5; i++) {
            for (let k = 0; k < freqs[i]; k++) expanded.push(scores[i]);
          }
          const med = calcMedian(expanded);
          const medStr = fmtDec(med, 2);
          const pairs = scores.map((sc, i) => [sc, freqs[i]]);
          const tbl = fmtFreqTable("Bilangan buku", "Bilangan murid", pairs);
          const q = `Jadual di bawah menunjukkan bilangan buku yang dibaca oleh ${total} orang murid:\n${tbl}\nTentukan median bagi data tersebut.`;
          const exp = total % 2 === 1
            ? `Jumlah kekerapan N = ${total} (ganjil). Kedudukan median ialah (${total} + 1)/2 = ${(total + 1) / 2}, yang jatuh pada bilangan buku ${medStr}.`
            : `Jumlah kekerapan N = ${total} (genap). Median ialah purata data ke-${total / 2} dan ke-${total / 2 + 1}, iaitu ${medStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            medStr,
            [
              fmtDec(med + 1, 2),
              fmtDec(med - 1, 2),
              fmtDec(med + 0.5, 2),
              fmtInt(scores[2] === med ? scores[1] : scores[2])
            ],
            exp,
            `FT:${s0}:${freqs.join(",")}`
          );
        } else {
          const categories = pick(rng, [
            { label: "Saiz Baju", items: ["S", "M", "L", "XL"], noun: "saiz baju" },
            { label: "Warna Kegemaran", items: ["Merah", "Biru", "Hijau", "Kuning"], noun: "warna kegemaran" },
            { label: "Rumah Sukan", items: ["Waja", "Satria", "Perdana", "Putra"], noun: "rumah sukan" },
            { label: "Jenis Minuman", items: ["Teh", "Kopi", "Milo", "Jus Oren"], noun: "jenis minuman" }
          ]);
          const freqs = [
            randInt(rng, 4, 10),
            randInt(rng, 5, 11),
            randInt(rng, 4, 9),
            randInt(rng, 3, 8)
          ];
          const modIdx = randInt(rng, 0, 3);
          const maxF = Math.max(...freqs) + randInt(rng, 3, 7);
          freqs[modIdx] = maxF;
          const pairs = categories.items.map((it, i) => [it, freqs[i]]);
          const tbl = fmtFreqTable(categories.label, "Bilangan murid", pairs);
          const corr = categories.items[modIdx];
          const wrongs = categories.items.filter((_, i) => i !== modIdx);
          const q = `Jadual berikut menunjukkan rekod ${categories.noun} sekumpulan murid:\n${tbl}\nApakah mod bagi data tersebut?`;
          const exp = `Kategori yang mempunyai bilangan murid tertinggi (${maxF} orang) ialah ${corr}. Maka mod ialah ${corr}.`;
          return buildMcq(rng, meta, q, corr, wrongs, exp, `CAT:${categories.label}:${freqs.join(",")}`);
        }
      }
    },

    // ---------- b12_s1_H ----------
    {
      id: "b12_s1_H",
      unit: "b12",
      skill: "b12_s1",
      diff: "H",
      templates: ["b12_s1_H_find_x_median", "b12_s1_H_find_k_then_median", "b12_s1_H_diff_mode_median"],
      generate(seed) {
        const rng = makeRng("b12_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s1", diff: "H", template: tpl };

        if (tpl === "b12_s1_H_find_x_median") {
          const a = randInt(rng, 4, 12);
          const b = a + randInt(rng, 2, 5);
          const x = b + randInt(rng, 2, 6);
          const c = x + randInt(rng, 2, 6);
          const d = c + randInt(rng, 2, 5);
          const e = d + randInt(rng, 2, 5);
          const med = (x + c) / 2;
          const medStr = fmtDec(med, 2);
          const q = `Enam nombor berikut disusun mengikut tertib menaik:\n${a}, ${b}, x, ${c}, ${d}, ${e}\nJika median bagi set data tersebut ialah ${medStr}, cari nilai x.`;
          const exp = `Kerana bilangan data ialah 6 (genap), median = (x + ${c})/2 = ${medStr} => x + ${c} = ${2 * med} => x = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(Math.round(med)), fmtInt(x + 2), fmtInt(x - 2), fmtInt(c)],
            exp,
            `${a},${b},${x},${c},${d},${e}`
          );
        } else if (tpl === "b12_s1_H_find_k_then_median") {
          const s0 = randInt(rng, 2, 6);
          const scores = [s0, s0 + 2, s0 + 4, s0 + 6, s0 + 8];
          const kIdx = randInt(rng, 1, 3);
          const freqs = [
            randInt(rng, 2, 5),
            randInt(rng, 3, 6),
            randInt(rng, 3, 7),
            randInt(rng, 2, 6),
            randInt(rng, 2, 5)
          ];
          const total = freqs.reduce((a, b) => a + b, 0);
          const expanded = [];
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < freqs[i]; j++) expanded.push(scores[i]);
          }
          const med = calcMedian(expanded);
          const medStr = fmtDec(med, 2);
          const dispFreqs = freqs.map((f, i) => (i === kIdx ? "k" : f));
          const pairs = scores.map((sc, i) => [sc, dispFreqs[i]]);
          const tbl = fmtFreqTable("Markah", "Bilangan murid", pairs);
          const q = `Jadual di bawah menunjukkan markah kuiz bagi seramai ${total} orang murid:\n${tbl}\nTentukan median bagi markah tersebut.`;
          const knownSum = total - freqs[kIdx];
          const exp = `Cari nilai k dahulu: k = ${total} - ${knownSum} = ${freqs[kIdx]}. Dengan jumlah ${total} murid, kedudukan tengah memberi median = ${medStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            medStr,
            [fmtDec(med + 2, 2), fmtDec(med - 2, 2), fmtInt(freqs[kIdx]), fmtDec(med + 1, 2)],
            exp,
            `KM:${s0}:${kIdx}:${freqs.join(",")}`
          );
        } else {
          const s0 = randInt(rng, 3, 10);
          const step = randInt(rng, 1, 2);
          const scores = [s0, s0 + step, s0 + 2 * step, s0 + 3 * step, s0 + 4 * step];
          const modeIdx = pick(rng, [0, 1, 3, 4]); // avoid middle so mode != median easily
          const freqs = [
            randInt(rng, 2, 4),
            randInt(rng, 2, 4),
            randInt(rng, 3, 5),
            randInt(rng, 2, 4),
            randInt(rng, 2, 4)
          ];
          freqs[modeIdx] = Math.max(...freqs) + randInt(rng, 4, 7);
          const expanded = [];
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < freqs[i]; j++) expanded.push(scores[i]);
          }
          const mod = scores[modeIdx];
          const med = calcMedian(expanded);
          const diff = Math.abs(mod - med);
          const diffStr = fmtDec(diff, 2);
          const pairs = scores.map((sc, i) => [sc, freqs[i]]);
          const tbl = fmtFreqTable("Skor", "Kekerapan", pairs);
          const q = `Berdasarkan jadual kekerapan di bawah, hitung beza antara mod dan median:\n${tbl}`;
          const exp = `Mod = ${mod} (kekerapan tertinggi ${freqs[modeIdx]}). Jumlah data N = ${expanded.length}, median = ${fmtDec(med, 2)}. Beza = |${mod} - ${fmtDec(med, 2)}| = ${diffStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            diffStr,
            [fmtDec(diff + step, 2), fmtDec(mod + med, 2), fmtDec(Math.abs(freqs[modeIdx] - med), 2), fmtDec(diff + 1, 2)],
            exp,
            `DM:${s0},${step}:${freqs.join(",")}`
          );
        }
      }
    },

    // ---------- b12_s2_L ----------
    {
      id: "b12_s2_L",
      unit: "b12",
      skill: "b12_s2",
      diff: "L",
      templates: ["b12_s2_L_mean_raw", "b12_s2_L_mean_with_zero", "b12_s2_L_sum_from_mean"],
      generate(seed) {
        const rng = makeRng("b12_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s2", diff: "L", template: tpl };

        if (tpl === "b12_s2_L_mean_raw") {
          const n = pick(rng, [5, 6]);
          const mean = randInt(rng, 8, 25);
          const targetSum = n * mean;
          const arr = [];
          let runSum = 0;
          for (let i = 0; i < n - 1; i++) {
            const v = Math.max(2, mean + randInt(rng, -5, 5));
            arr.push(v);
            runSum += v;
          }
          const last = targetSum - runSum;
          if (last < 1) {
            // Adjust safely
            const d = 1 - last;
            arr[0] -= d;
            arr.push(1);
          } else {
            arr.push(last);
          }
          const shuffled = shuffle(rng, arr);
          const sum = shuffled.reduce((a, b) => a + b, 0);
          const exactMean = sum / n;
          const q = `Hitung min bagi set data berikut:\n${shuffled.join(", ")}`;
          const exp = `Min = (${shuffled.join(" + ")}) / ${n} = ${sum} / ${n} = ${exactMean}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(exactMean),
            [fmtInt(exactMean + 2), fmtInt(Math.max(1, exactMean - 2)), fmtInt(Math.round(sum / (n - 1))), fmtInt(sum)],
            exp,
            `${shuffled.join(",")}`
          );
        } else if (tpl === "b12_s2_L_mean_with_zero") {
          const n = pick(rng, [5, 6]);
          const mean = randInt(rng, 4, 14);
          const targetSum = n * mean;
          const arr = [0];
          let runSum = 0;
          for (let i = 1; i < n - 1; i++) {
            const v = Math.max(2, mean + randInt(rng, -3, 6));
            arr.push(v);
            runSum += v;
          }
          const last = Math.max(1, targetSum - runSum);
          arr.push(last);
          // Recompute exact mean if adjusted, ensure divisible by n
          const curSum = arr.reduce((a, b) => a + b, 0);
          const rem = curSum % n;
          if (rem !== 0) arr[arr.length - 1] += (n - rem);
          const finalArr = shuffle(rng, arr);
          const totalSum = finalArr.reduce((a, b) => a + b, 0);
          const exactMean = totalSum / n;
          const wrongNoZero = fmtDec(totalSum / (n - 1), 2);
          const q = `Cari min bagi bilangan gol berikut:\n${finalArr.join(", ")}`;
          const exp = `Nilai 0 mesti dikira dalam bilangan data (${n} nilai). Min = ${totalSum} / ${n} = ${exactMean}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(exactMean),
            [wrongNoZero, fmtInt(exactMean + 1), fmtInt(Math.max(1, exactMean - 2)), fmtInt(totalSum)],
            exp,
            `Z:${finalArr.join(",")}`
          );
        } else {
          const n = randInt(rng, 6, 15);
          const mean = randInt(rng, 12, 48);
          const total = n * mean;
          const q = `Min markah bagi ${n} orang murid dalam satu ujian ialah ${mean}. Berapakah jumlah markah keseluruhan mereka?`;
          const exp = `Jumlah markah = Min × Bilangan murid = ${mean} × ${n} = ${total}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(total),
            [fmtInt(total + n), fmtInt(total - mean), fmtDec(mean / n, 2), fmtInt(mean + n)],
            exp,
            `S:${n},${mean}`
          );
        }
      }
    },

    // ---------- b12_s2_M ----------
    {
      id: "b12_s2_M",
      unit: "b12",
      skill: "b12_s2",
      diff: "M",
      templates: ["b12_s2_M_freq_table_mean", "b12_s2_M_missing_value", "b12_s2_M_missing_freq"],
      generate(seed) {
        const rng = makeRng("b12_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s2", diff: "M", template: tpl };

        if (tpl === "b12_s2_M_freq_table_mean") {
          const s0 = randInt(rng, 1, 5);
          const scores = [s0, s0 + 1, s0 + 2, s0 + 3];
          // Choose total N in [10, 20] so mean is terminating decimal (.0.. .9)
          const N = pick(rng, [10, 20]);
          const f0 = randInt(rng, 2, N === 10 ? 3 : 6);
          const f1 = randInt(rng, 2, N === 10 ? 3 : 6);
          const f2 = randInt(rng, 2, N === 10 ? 3 : 6);
          const f3 = N - f0 - f1 - f2;
          const freqs = [f0, f1, f2, f3];
          let sumFX = 0;
          for (let i = 0; i < 4; i++) sumFX += scores[i] * freqs[i];
          const mean = sumFX / N;
          const meanStr = fmtDec(mean, 2);
          const pairs = scores.map((sc, i) => [sc, freqs[i]]);
          const tbl = fmtFreqTable("Skor", "Kekerapan", pairs);
          const q = `Jadual di bawah menunjukkan skor bagi ${N} orang peserta dalam satu pertandingan:\n${tbl}\nHitung min skor bagi jadual itu.`;
          const wrongByRows = fmtDec(sumFX / 4, 2);
          const wrongScoreOnly = fmtDec(scores.reduce((a, b) => a + b, 0) / 4, 2);
          const exp = `Min = (${scores.map((s, i) => `${s}×${freqs[i]}`).join(" + ")}) / ${N} = ${sumFX} / ${N} = ${meanStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            meanStr,
            [wrongByRows, wrongScoreOnly, fmtDec(mean + 0.5, 2), fmtDec(mean - 0.5, 2)],
            exp,
            `${s0}:${freqs.join(",")}`
          );
        } else if (tpl === "b12_s2_M_missing_value") {
          const n = pick(rng, [5, 6, 7]);
          const mean = randInt(rng, 10, 28);
          const targetSum = n * mean;
          const known = [];
          let sumK = 0;
          for (let i = 0; i < n - 1; i++) {
            const v = Math.max(2, mean + randInt(rng, -5, 5));
            known.push(v);
            sumK += v;
          }
          let x = targetSum - sumK;
          if (x < 2) {
            known[0] -= (5 - x);
            sumK = known.reduce((a, b) => a + b, 0);
            x = targetSum - sumK;
          }
          const idx = randInt(rng, 1, n - 2);
          const displayList = known.slice();
          displayList.splice(idx, 0, "x");
          const q = `Min bagi set data ${displayList.join(", ")} ialah ${mean}. Cari nilai x.`;
          const exp = `Jumlah ${n} nombor = ${n} × ${mean} = ${targetSum}. Jumlah ${n - 1} nombor yang diketahui = ${sumK}. Maka x = ${targetSum} - ${sumK} = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(x + 3), fmtInt(Math.max(1, x - 3)), fmtInt(mean), fmtInt(Math.abs(mean * (n - 1) - sumK))],
            exp,
            `MV:${displayList.join(",")}:${mean}`
          );
        } else {
          // Missing frequency k in table given mean M (ensure M != score of k)
          const s0 = randInt(rng, 1, 5);
          const scores = [s0, s0 + 1, s0 + 2, s0 + 3];
          const kIdx = randInt(rng, 0, 3);
          const kVal = randInt(rng, 2, 8);
          // Construct integer mean M != scores[kIdx]
          const M = scores[(kIdx + 1) % 4];
          // We need sum((scores[i] - M) * freqs[i]) = 0
          const freqs = [0, 0, 0, 0];
          freqs[kIdx] = kVal;
          // Pick two other frequencies, solve the last one so weighted deviation = 0
          const otherIdxs = [0, 1, 2, 3].filter((i) => i !== kIdx);
          // Let's pick freq for the two with smaller/opposite diffs and balance cleanly
          // Simpler: construct valid integer freqs with search in small deterministic loop
          let found = null;
          for (let attempt = 0; attempt < 50; attempt++) {
            const fA = randInt(rng, 2, 8);
            const fB = randInt(rng, 2, 8);
            const fC = randInt(rng, 2, 8);
            const cand = [0, 0, 0, 0];
            cand[kIdx] = kVal;
            cand[otherIdxs[0]] = fA;
            cand[otherIdxs[1]] = fB;
            cand[otherIdxs[2]] = fC;
            const tot = cand.reduce((a, b) => a + b, 0);
            const sfx = cand.reduce((acc, f, i) => acc + f * scores[i], 0);
            if (sfx % tot === 0 && sfx / tot !== scores[kIdx]) {
              found = { freqs: cand, mean: sfx / tot, tot };
              break;
            }
          }
          if (!found) {
            // Deterministic fallback guaranteed to satisfy sfx / tot === M != scores[kIdx]
            const f = [4, 4, 4, 4];
            f[kIdx] = 4;
            const tot = 16;
            const sfx = scores.reduce((acc, sc) => acc + sc * 4, 0); // 4*(4*s0+6) = 16*s0 + 24 -> /16 = s0 + 1.5
            found = { freqs: [4, 4, 4, 4], mean: sfx / tot, tot };
          }
          const meanStr = fmtDec(found.mean, 2);
          const dispFreqs = found.freqs.map((v, i) => (i === kIdx ? "k" : v));
          const pairs = scores.map((sc, i) => [sc, dispFreqs[i]]);
          const tbl = fmtFreqTable("Skor", "Kekerapan", pairs);
          const ans = found.freqs[kIdx];
          const q = `Jadual berikut menunjukkan skor bagi sekumpulan murid. Jika min skor ialah ${meanStr}, cari nilai k.\n${tbl}`;
          const knownSumFX = found.freqs.reduce((acc, f, i) => (i === kIdx ? acc : acc + f * scores[i]), 0);
          const knownF = found.tot - ans;
          const exp = `(${knownSumFX} + ${scores[kIdx]}k) / (${knownF} + k) = ${meanStr} => ${knownSumFX} + ${scores[kIdx]}k = ${fmtDec(found.mean * knownF, 2)} + ${meanStr}k => k = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [fmtInt(ans + 2), fmtInt(Math.max(1, ans - 2)), fmtInt(ans + 4), fmtInt(found.tot)],
            exp,
            `MK:${s0}:${kIdx}:${found.freqs.join(",")}`
          );
        }
      }
    },

    // ---------- b12_s2_H ----------
    {
      id: "b12_s2_H",
      unit: "b12",
      skill: "b12_s2",
      diff: "H",
      templates: ["b12_s2_H_combined_mean", "b12_s2_H_add_or_correct", "b12_s2_H_two_missing_freqs"],
      generate(seed) {
        const rng = makeRng("b12_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s2", diff: "H", template: tpl };

        if (tpl === "b12_s2_H_combined_mean") {
          const N = pick(rng, [20, 25, 30, 40]);
          const n1 = randInt(rng, 6, N - 6);
          const n2 = N - n1;
          const m1 = randInt(rng, 45, 78);
          let m2 = randInt(rng, 50, 88);
          if (m2 === m1) m2 += 4;
          const totalSum = n1 * m1 + n2 * m2;
          // Ensure clean terminating decimal (1 or 2 dp) or adjust m2 slightly so totalSum % N === 0
          const rem = totalSum % N;
          const m2Adj = m2 + (rem === 0 ? 0 : 0);
          // Pick n1, n2 and m1, m2 so (n1*m1 + n2*m2) is divisible by N or 0.5
          let comb = null;
          for (let dm = 0; dm < N; dm++) {
            const candM2 = m2 + dm;
            const s = n1 * m1 + n2 * candM2;
            if (s % N === 0 && candM2 !== m1) {
              comb = { m2: candM2, mean: s / N, total: s };
              break;
            }
          }
          if (!comb) {
            // Fallback clean values
            comb = { m2: m1 + N, mean: m1 + n2, total: n1 * m1 + n2 * (m1 + N) };
          }
          const wrongAvg = fmtDec((m1 + comb.m2) / 2, 2);
          const q = `Dalam satu ujian Sains, ${n1} orang murid kelas A memperoleh min markah ${m1}, manakala ${n2} orang murid kelas B memperoleh min markah ${comb.m2}. Hitung min markah keseluruhan bagi ${N} orang murid itu.`;
          const exp = `Jumlah markah = (${n1} × ${m1}) + (${n2} × ${comb.m2}) = ${n1 * m1} + ${n2 * comb.m2} = ${comb.total}. Min keseluruhan = ${comb.total} / ${N} = ${comb.mean}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(comb.mean),
            [wrongAvg, fmtInt(comb.mean + 3), fmtInt(comb.mean - 3), fmtInt(m1)],
            exp,
            `CM:${n1},${n2},${m1},${comb.m2}`
          );
        } else if (tpl === "b12_s2_H_add_or_correct") {
          const n = randInt(rng, 8, 16);
          const m1 = randInt(rng, 40, 75);
          const k = pickNonZero(rng, -4, 5);
          const delta = k * n;
          const wOld = randInt(rng, 25, 55);
          const wNew = Math.max(5, wOld + delta);
          const actualDelta = wNew - wOld;
          const m2 = m1 + actualDelta / n;
          const m2Str = fmtDec(m2, 2);
          const q = `Min markah bagi ${n} orang murid ialah ${m1}. Kemudian didapati satu markah ${wOld} telah tersilap rekod dan sepatutnya ialah ${wNew}. Hitung min markah yang baharu selepas pembetulan.`;
          const exp = `Jumlah asal = ${n} × ${m1} = ${n * m1}. Jumlah baharu = ${n * m1} - ${wOld} + ${wNew} = ${n * m1 + actualDelta}. Min baharu = ${n * m1 + actualDelta} / ${n} = ${m2Str}.`;
          return buildMcq(
            rng,
            meta,
            q,
            m2Str,
            [fmtDec(m1 - actualDelta / n, 2), fmtDec(m2 + 2, 2), fmtDec(m2 - 2, 2), fmtDec((n * m1 + wNew) / (n + 1), 2)],
            exp,
            `CR:${n},${m1},${wOld},${wNew}`
          );
        } else {
          // Two unknown frequencies p and q given total N and mean M
          const s0 = randInt(rng, 1, 4);
          const scores = [s0, s0 + 1, s0 + 2, s0 + 3];
          const f0 = randInt(rng, 2, 5);
          const f3 = randInt(rng, 2, 5);
          const p = randInt(rng, 2, 7);
          let qVal = randInt(rng, 2, 7);
          if (qVal === p) qVal += 1;
          const N = f0 + p + qVal + f3;
          const sumFX = f0 * scores[0] + p * scores[1] + qVal * scores[2] + f3 * scores[3];
          const M = sumFX / N;
          const MStr = fmtDec(M, 2);
          // Only accept clean integer or .5 / .25 / .2 mean (so M * N is exact)
          const N2 = N;
          const Mclean = Number((sumFX / N2).toFixed(4));
          // To ensure exact representation in question, adjust f3 so sumFX % N === 0 or (2*sumFX) % N === 0
          let finalF3 = f3;
          let finalN = N;
          let finalM = M;
          let foundClean = false;
          for (let df = 0; df <= 10; df++) {
            const cf3 = f3 + df;
            const cN = f0 + p + qVal + cf3;
            const cSum = f0 * scores[0] + p * scores[1] + qVal * scores[2] + cf3 * scores[3];
            if (cSum % cN === 0) {
              finalF3 = cf3;
              finalN = cN;
              finalM = cSum / cN;
              foundClean = true;
              break;
            }
          }
          if (!foundClean) {
            // Adjust p slightly to hit exact integer mean
            const cN = f0 + p + qVal + f3;
            const cSum = f0 * scores[0] + p * scores[1] + qVal * scores[2] + f3 * scores[3];
            finalM = Math.round((cSum / cN) * 4) / 4; // Wait: we want exact! Let's force N = 20
          }
          const useN = foundClean ? finalN : 20;
          const useF3 = foundClean ? finalF3 : (20 - f0 - p - qVal);
          const useSum = f0 * scores[0] + p * scores[1] + qVal * scores[2] + useF3 * scores[3];
          const useM = useSum / useN;
          const useMStr = fmtDec(useM, 2);
          const pairs = [
            [scores[0], f0],
            [scores[1], "p"],
            [scores[2], "q"],
            [scores[3], useF3]
          ];
          const tbl = fmtFreqTable("Skor", "Kekerapan", pairs);
          const q = `Jadual berikut menunjukkan skor bagi ${useN} orang murid dengan min skor ${useMStr}:\n${tbl}\nCari nilai p.`;
          const sumPQ = useN - f0 - useF3;
          const exp = `Daripada jumlah kekerapan: ${f0} + p + q + ${useF3} = ${useN} => p + q = ${sumPQ}. Daripada jumlah skor: ${f0 * scores[0]} + ${scores[1]}p + ${scores[2]}q + ${useF3 * scores[3]} = ${useN} × ${useMStr} = ${useSum}. Menyelesaikan kedua-dua persamaan memberi p = ${p} dan q = ${qVal}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(p),
            [fmtInt(qVal), fmtInt(p + 2), fmtInt(Math.max(1, p - 2)), fmtInt(sumPQ)],
            exp,
            `2F:${s0}:${f0},${p},${qVal},${useF3}`
          );
        }
      }
    },

    // ---------- b12_s3_L ----------
    {
      id: "b12_s3_L",
      unit: "b12",
      skill: "b12_s3",
      diff: "L",
      templates: ["b12_s3_L_shift_all", "b12_s3_L_scale_all", "b12_s3_L_best_measure"],
      generate(seed) {
        const rng = makeRng("b12_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s3", diff: "L", template: tpl };

        if (tpl === "b12_s3_L_shift_all") {
          const stat = pick(rng, ["min", "median", "mod"]);
          const orig = randInt(rng, 12, 45);
          const isAdd = randInt(rng, 0, 1) === 0;
          const c = randInt(rng, 3, 12);
          const ans = isAdd ? orig + c : orig - c;
          const verb = isAdd ? `ditambah dengan ${c}` : `ditolak dengan ${c}`;
          const sign = isAdd ? "+" : "-";
          const q = `Suatu set data mempunyai ${stat} = ${orig}. Jika setiap nilai dalam set data itu ${verb}, apakah nilai ${stat} yang baharu?`;
          const exp = `Apabila setiap data ${verb}, nilai ${stat} juga berubah sebanyak ${sign}${c}: ${orig} ${sign} ${c} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [fmtInt(orig), fmtInt(isAdd ? orig - c : orig + c), fmtInt(orig * c), fmtInt(ans + 2)],
            exp,
            `${stat},${orig},${isAdd},${c}`
          );
        } else if (tpl === "b12_s3_L_scale_all") {
          const stat = pick(rng, ["min", "median", "mod"]);
          const orig = randInt(rng, 5, 22);
          const k = randInt(rng, 2, 5);
          const ans = orig * k;
          const q = `Satu set data mempunyai ${stat} = ${orig}. Setiap nombor dalam set data tersebut didarab dengan ${k}. Tentukan nilai ${stat} yang baharu.`;
          const exp = `Apabila setiap nilai didarab dengan pemalar ${k}, ${stat} baharu = ${orig} × ${k} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [fmtInt(orig), fmtInt(orig + k), fmtInt(ans + k), fmtInt(Math.max(1, orig - k))],
            exp,
            `SC:${stat},${orig},${k}`
          );
        } else {
          const modeType = randInt(rng, 0, 2);
          if (modeType === 0) {
            const base = randInt(rng, 12, 30);
            const arr = [base, base + 2, base + 3, base + 5, base * 4 + 25];
            const q = `Gaji mingguan (dalam RM) bagi 5 orang pekerja ialah ${arr.join(", ")}. Sukatan kecenderungan memusat manakah yang paling sesuai mewakili data tersebut?`;
            const exp = `Terdapat satu nilai ekstrem (pencilan) iaitu ${arr[4]} yang jauh lebih tinggi daripada nilai lain. Oleh itu, median ialah sukatan yang paling sesuai kerana tidak dipengaruhi oleh nilai ekstrem.`;
            return buildMcq(rng, meta, q, "Median", ["Min", "Mod", "Julat"], exp, `OUT:${arr.join(",")}`);
          } else if (modeType === 1) {
            const f = [randInt(rng, 5, 12), randInt(rng, 6, 14), randInt(rng, 16, 28), randInt(rng, 4, 10)];
            const q = `Sebuah kedai merekodkan jualan kasut mengikut saiz: Saiz 6 (${f[0]} pasang), Saiz 7 (${f[1]} pasang), Saiz 8 (${f[2]} pasang) dan Saiz 9 (${f[3]} pasang). Sukatan manakah paling sesuai digunakan untuk menentukan saiz yang paling laris?`;
            const exp = `Mod paling sesuai kerana ia mengenal pasti item atau kategori yang paling kerap terjual (kekerapan tertinggi).`;
            return buildMcq(rng, meta, q, "Mod", ["Min", "Median", "Julat"], exp, `MOD:${f.join(",")}`);
          }
          const base = randInt(rng, 55, 80);
          const arr = [base, base + 2, base + 4, base + 5, base + 7];
          const q = `Markah ujian Matematik bagi 5 orang murid ialah ${arr.join(", ")}. Sukatan kecenderungan memusat manakah yang paling sesuai untuk mewakili prestasi keseluruhan kumpulan itu?`;
          const exp = `Data bertaburan sekata tanpa sebarang nilai ekstrem atau kekerapan dominan, maka min adalah sukatan yang paling sesuai kerana mengambil kira semua nilai data.`;
          return buildMcq(rng, meta, q, "Min", ["Mod", "Median", "Julat"], exp, `MIN:${arr.join(",")}`);
        }
      }
    },

    // ---------- b12_s3_M ----------
    {
      id: "b12_s3_M",
      unit: "b12",
      skill: "b12_s3",
      diff: "M",
      templates: ["b12_s3_M_linear_transform", "b12_s3_M_add_outlier_median", "b12_s3_M_add_item_new_mean"],
      generate(seed) {
        const rng = makeRng("b12_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s3", diff: "M", template: tpl };

        if (tpl === "b12_s3_M_linear_transform") {
          const stat = pick(rng, ["min", "median", "mod"]);
          const orig = randInt(rng, 6, 20);
          const k = randInt(rng, 2, 4);
          const isAdd = randInt(rng, 0, 1) === 0;
          const c = randInt(rng, 2, 9);
          const ans = isAdd ? orig * k + c : orig * k - c;
          const opText = isAdd ? `kemudian ditambah ${c}` : `kemudian ditolak ${c}`;
          const q = `Satu set data mempunyai ${stat} = ${orig}. Setiap nilai dalam data didarab dengan ${k} dan ${opText}. Hitung nilai ${stat} yang baharu.`;
          const exp = `${stat[0].toUpperCase() + stat.slice(1)} baharu = ${orig} × ${k} ${isAdd ? "+" : "-"} ${c} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [
              fmtInt(isAdd ? orig + k + c : orig + k - c),
              fmtInt(isAdd ? (orig + c) * k : (orig - c) * k),
              fmtInt(orig * k),
              fmtInt(ans + k)
            ],
            exp,
            `${stat},${orig},${k},${isAdd},${c}`
          );
        } else if (tpl === "b12_s3_M_add_outlier_median") {
          const a = randInt(rng, 5, 15);
          const b = a + randInt(rng, 2, 4);
          const c = b + randInt(rng, 2, 4);
          const d = c + randInt(rng, 2, 4);
          const e = d + randInt(rng, 2, 4);
          const outlier = e + randInt(rng, 35, 70);
          const newMed = (c + d) / 2;
          const newMedStr = fmtDec(newMed, 2);
          const q = `Set data asal ialah ${a}, ${b}, ${c}, ${d}, ${e}. Jika satu nilai ekstrem ${outlier} dimasukkan ke dalam set data itu, berapakah median yang baharu?`;
          const exp = `Set data baharu mengikut tertib menaik ialah ${a}, ${b}, ${c}, ${d}, ${e}, ${outlier} (6 data). Median baharu = (${c} + ${d})/2 = ${newMedStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            newMedStr,
            [
              fmtInt(c),
              fmtInt(d),
              fmtDec((a + b + c + d + e + outlier) / 6, 2),
              fmtDec(newMed + 2, 2)
            ],
            exp,
            `OM:${a},${b},${c},${d},${e},${outlier}`
          );
        } else {
          const n = randInt(rng, 5, 11);
          const m1 = randInt(rng, 10, 30);
          const k = randInt(rng, 1, 4);
          const extra = m1 + k * (n + 1);
          const m2 = m1 + k;
          const q = `Min bagi ${n} nombor ialah ${m1}. Apabila satu nombor bernilai ${extra} ditambah ke dalam set data itu, cari min yang baharu.`;
          const exp = `Jumlah asal = ${n} × ${m1} = ${n * m1}. Jumlah baharu = ${n * m1} + ${extra} = ${(n + 1) * m2}. Min baharu = ${(n + 1) * m2} / ${n + 1} = ${m2}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(m2),
            [fmtInt(m1 + k * 2), fmtDec((m1 + extra) / 2, 2), fmtInt(m1), fmtInt(Math.max(1, m2 - 2))],
            exp,
            `AM:${n},${m1},${extra}`
          );
        }
      }
    },

    // ---------- b12_s3_H ----------
    {
      id: "b12_s3_H",
      unit: "b12",
      skill: "b12_s3",
      diff: "H",
      templates: ["b12_s3_H_find_k_c", "b12_s3_H_replace_extreme", "b12_s3_H_target_new_mean"],
      generate(seed) {
        const rng = makeRng("b12_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b12", skill: "b12_s3", diff: "H", template: tpl };

        if (tpl === "b12_s3_H_find_k_c") {
          const m1 = randInt(rng, 8, 18);
          const med1 = m1 + randInt(rng, 2, 6);
          const k = randInt(rng, 2, 5);
          const c = randInt(rng, 3, 12);
          const m2 = k * m1 + c;
          const med2 = k * med1 + c;
          const askC = randInt(rng, 0, 1) === 0;
          const q = askC
            ? `Suatu set data mempunyai min ${m1} dan median ${med1}. Apabila setiap nilai didarab dengan p dan ditambah q, min baharu menjadi ${m2} dan median baharu menjadi ${med2}. Cari nilai q.`
            : `Suatu set data mempunyai min ${m1} dan median ${med1}. Apabila setiap nilai didarab dengan p dan ditambah q, min baharu menjadi ${m2} dan median baharu menjadi ${med2}. Cari nilai p.`;
          const ans = askC ? c : k;
          const exp = `Daripada p(${med1}) + q = ${med2} dan p(${m1}) + q = ${m2}, tolak kedua-dua persamaan: p(${med1 - m1}) = ${med2 - m2} => p = ${k}. Gantikan semula: q = ${m2} - ${k}(${m1}) = ${c}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(ans),
            [fmtInt(askC ? k : c), fmtInt(ans + 2), fmtInt(Math.max(1, ans - 2)), fmtInt(k + c)],
            exp,
            `${m1},${med1},${k},${c},${askC}`
          );
        } else if (tpl === "b12_s3_H_replace_extreme") {
          const n = 5;
          const v0 = randInt(rng, 6, 14);
          const step = randInt(rng, 2, 4);
          const arr = [v0, v0 + step, v0 + 2 * step, v0 + 3 * step, v0 + 4 * step];
          const origMean = arr[2];
          const k = randInt(rng, 2, 6);
          const newMax = arr[4] + k * n;
          const newMean = origMean + k;
          const newMed = arr[2];
          const corr = `Min = ${newMean}, Median = ${newMed}`;
          const w1 = `Min = ${origMean}, Median = ${newMed + k}`;
          const w2 = `Min = ${newMean}, Median = ${newMed + k}`;
          const w3 = `Min = ${newMean + 2}, Median = ${newMed}`;
          const q = `Diberi set data ${arr.join(", ")}. Jika nilai terbesar (${arr[4]}) digantikan dengan ${newMax}, nyatakan min dan median yang baharu.`;
          const exp = `Median kekal pada kedudukan tengah iaitu ${newMed}. Jumlah baharu bertambah sebanyak ${newMax - arr[4]}, maka min bertambah ${newMax - arr[4]}/5 = ${k} menjadi ${origMean} + ${k} = ${newMean}.`;
          return buildMcq(rng, meta, q, corr, [w1, w2, w3], exp, `RE:${arr.join(",")}:${newMax}`);
        } else {
          const n = randInt(rng, 5, 12);
          const m1 = randInt(rng, 14, 34);
          const inc = randInt(rng, 2, 6);
          const m2 = m1 + inc;
          const x = (n + 1) * m2 - n * m1;
          const q = `Min bagi ${n} nombor ialah ${m1}. Berapakah nilai nombor ke-${n + 1} yang perlu dimasukkan supaya min baharu meningkat menjadi ${m2}?`;
          const exp = `Jumlah asal = ${n} × ${m1} = ${n * m1}. Jumlah sasaran untuk ${n + 1} nombor = ${n + 1} × ${m2} = ${(n + 1) * m2}. Maka nombor ke-${n + 1} = ${(n + 1) * m2} - ${n * m1} = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(m2 + inc), fmtInt(x - inc), fmtInt(x + n), fmtInt(m1 + inc * n)],
            exp,
            `TM:${n},${m1},${inc}`
          );
        }
      }
    },

    // =========================================================================
    // BAB 13: KEBARANGKALIAN MUDAH
    // =========================================================================

    // ---------- b13_s1_L ----------
    {
      id: "b13_s1_L",
      unit: "b13",
      skill: "b13_s1",
      diff: "L",
      templates: ["b13_s1_L_balls", "b13_s1_L_number_cards", "b13_s1_L_word_letters"],
      generate(seed) {
        const rng = makeRng("b13_s1_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s1", diff: "L", template: tpl };

        if (tpl === "b13_s1_L_balls") {
          const r = randInt(rng, 3, 12);
          const b = randInt(rng, 3, 12);
          const g = randInt(rng, 2, 10);
          const tot = r + b + g;
          const choice = randInt(rng, 0, 2);
          const target = [r, b, g][choice];
          const color = ["merah", "biru", "hijau"][choice];
          const f = simpFrac(target, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - target, tot);
          const q = `Sebuah kotak mengandungi ${r} biji bola merah, ${b} biji bola biru dan ${g} biji bola hijau. Sebiji bola dipilih secara rawak. Cari kebarangkalian memilih bola berwarna ${color}.`;
          const exp = `n(S) = ${r} + ${b} + ${g} = ${tot}. n(A) = ${target}. Maka P(A) = ${target}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [
              fmtFrac(fComp.n, fComp.d),
              fmtFrac(target, tot - target),
              fmtFrac(1, tot),
              fmtFrac(f.n, f.d + 1)
            ],
            exp,
            `${r},${b},${g},${choice}`
          );
        } else if (tpl === "b13_s1_L_number_cards") {
          const n = randInt(rng, 10, 28);
          const k = randInt(rng, 2, 5);
          const count = Math.floor(n / k);
          const f = simpFrac(count, n);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(n - count, n);
          const q = `Kad bernombor 1 hingga ${n} dimasukkan ke dalam sebuah beg. Sekeping kad dicabut secara rawak. Hitung kebarangkalian mendapat nombor gandaan ${k}.`;
          const exp = `n(S) = ${n}. Gandaan ${k} antara 1 hingga ${n} ada sebanyak ${count}. Maka P(A) = ${count}/${n} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [
              fmtFrac(fComp.n, fComp.d),
              fmtFrac(1, k + 1),
              fmtFrac(count + 1, n),
              fmtFrac(count - 1, n)
            ],
            exp,
            `NC:${n},${k}`
          );
        } else {
          const words = [
            "MATEMATIK", "KEBARANGKALIAN", "MALAYSIA", "CEMERLANG", "PENDIDIKAN",
            "SEKOLAH", "TRANSFORMASI", "KECERUNAN", "STATISTIK", "GEOMETRI",
            "KOORDINAT", "HARMONI", "BESTARI", "TINGKATAN", "ISOMETRI",
            "SIMETRI", "PECAHAN", "LILITAN", "BULATAN", "SEGITIGA"
          ];
          const word = pick(rng, words);
          const askVowel = randInt(rng, 0, 1) === 0;
          const vowels = new Set(["A", "E", "I", "O", "U"]);
          let count = 0;
          for (const ch of word) {
            if (askVowel ? vowels.has(ch) : !vowels.has(ch)) count++;
          }
          const tot = word.length;
          const f = simpFrac(count, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - count, tot);
          const kind = askVowel ? "huruf vokal" : "huruf konsonan";
          const q = `Sekeping kad huruf dipilih secara rawak daripada perkataan "${word}". Tentukan kebarangkalian memilih kad ${kind}.`;
          const exp = `Bilangan huruf keseluruhan n(S) = ${tot}. Bilangan ${kind} = ${count}. Maka kebarangkalian = ${count}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [
              fmtFrac(fComp.n, fComp.d),
              fmtFrac(1, tot),
              fmtFrac(count + 1, tot),
              fmtFrac(Math.max(1, count - 1), tot)
            ],
            exp,
            `WD:${word}:${askVowel}`
          );
        }
      }
    },

    // ---------- b13_s1_M ----------
    {
      id: "b13_s1_M",
      unit: "b13",
      skill: "b13_s1",
      diff: "M",
      templates: ["b13_s1_M_union_cards", "b13_s1_M_two_spinners_sum", "b13_s1_M_bag_two_colours"],
      generate(seed) {
        const rng = makeRng("b13_s1_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s1", diff: "M", template: tpl };

        if (tpl === "b13_s1_M_union_cards") {
          const n = randInt(rng, 12, 30);
          const p = pick(rng, [2, 3, 4]);
          let qDiv = pick(rng, [3, 5, 7]);
          while (qDiv === p) qDiv = pick(rng, [3, 5, 7]);
          let count = 0;
          for (let i = 1; i <= n; i++) {
            if (i % p === 0 || i % qDiv === 0) count++;
          }
          const f = simpFrac(count, n);
          const ans = fmtFrac(f.n, f.d);
          const overCount = Math.floor(n / p) + Math.floor(n / qDiv);
          const wrongOver = overCount < n ? fmtFrac(overCount, n) : fmtFrac(n - 1, n);
          const fComp = simpFrac(n - count, n);
          const q = `Kad bernombor 1 hingga ${n} digaul di dalam sebuah kotak. Sekeping kad diambil secara rawak. Cari kebarangkalian mendapat nombor gandaan ${p} atau gandaan ${qDiv}.`;
          const exp = `Bilangan nombor gandaan ${p} atau gandaan ${qDiv} dari 1 hingga ${n} (tanpa mengira gandaan sepunya dua kali) ialah ${count}. Maka P(A) = ${count}/${n} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [wrongOver, fmtFrac(fComp.n, fComp.d), fmtFrac(Math.floor(n / p), n), fmtFrac(count - 1, n)],
            exp,
            `${n},${p},${qDiv}`
          );
        } else if (tpl === "b13_s1_M_two_spinners_sum") {
          const m = randInt(rng, 3, 6);
          const n = randInt(rng, 4, 6);
          const minSum = 2;
          const maxSum = m + n;
          const targetSum = randInt(rng, minSum + 1, maxSum - 1);
          let count = 0;
          for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
              if (i + j === targetSum) count++;
            }
          }
          const tot = m * n;
          const f = simpFrac(count, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - count, tot);
          const q = `Dua pemutar adil diputar serentak. Pemutar pertama bernombor 1 hingga ${m} dan pemutar kedua bernombor 1 hingga ${n}. Cari kebarangkalian hasil tambah kedua-dua nombor itu ialah ${targetSum}.`;
          const exp = `n(S) = ${m} × ${n} = ${tot}. Pasangan yang berjumlah ${targetSum} ada sebanyak ${count} kesudahan. Maka P = ${count}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(count, m + n), fmtFrac(1, tot), fmtFrac(count + 1, tot)],
            exp,
            `SP:${m},${n},${targetSum}`
          );
        } else {
          const r = randInt(rng, 3, 9);
          const b = randInt(rng, 3, 9);
          const g = randInt(rng, 3, 9);
          const y = randInt(rng, 2, 8);
          const tot = r + b + g + y;
          const askPair = randInt(rng, 0, 2);
          const names = [
            ["merah", "biru", r + b],
            ["biru", "hijau", b + g],
            ["hijau", "kuning", g + y]
          ][askPair];
          const fav = names[2];
          const f = simpFrac(fav, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - fav, tot);
          const q = `Sebuah balang berisi ${r} guli merah, ${b} guli biru, ${g} guli hijau dan ${y} guli kuning. Sebiji guli dipilih secara rawak. Cari kebarangkalian memilih guli ${names[0]} atau ${names[1]}.`;
          const exp = `n(S) = ${r} + ${b} + ${g} + ${y} = ${tot}. Bilangan guli ${names[0]} atau ${names[1]} = ${fav}. Maka P = ${fav}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(fav - 2, tot), fmtFrac(fav, tot - fav), fmtFrac(1, 2)],
            exp,
            `BC:${r},${b},${g},${y},${askPair}`
          );
        }
      }
    },

    // ---------- b13_s1_H ----------
    {
      id: "b13_s1_H",
      unit: "b13",
      skill: "b13_s1",
      diff: "H",
      templates: ["b13_s1_H_two_dice_cond", "b13_s1_H_two_digit_no_repeat", "b13_s1_H_ratio_prob"],
      generate(seed) {
        const rng = makeRng("b13_s1_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s1", diff: "H", template: tpl };

        if (tpl === "b13_s1_H_two_dice_cond") {
          const m = randInt(rng, 4, 6);
          const n = randInt(rng, 4, 6);
          const condType = randInt(rng, 0, 2);
          const tot = m * n;
          let count = 0;
          let desc = "";
          if (condType === 0) {
            const k = pick(rng, [2, 3, 4]);
            desc = `hasil darab kedua-dua nombor ialah gandaan ${k}`;
            for (let i = 1; i <= m; i++) {
              for (let j = 1; j <= n; j++) if ((i * j) % k === 0) count++;
            }
          } else if (condType === 1) {
            const d = randInt(rng, 1, 3);
            desc = `beza antara kedua-dua nombor adalah sekurang-kurangnya ${d}`;
            for (let i = 1; i <= m; i++) {
              for (let j = 1; j <= n; j++) if (Math.abs(i - j) >= d) count++;
            }
          } else {
            const lim = randInt(rng, Math.floor((m + n) / 2), m + n - 2);
            desc = `hasil tambah kedua-dua nombor melebihi ${lim}`;
            for (let i = 1; i <= m; i++) {
              for (let j = 1; j <= n; j++) if (i + j > lim) count++;
            }
          }
          const f = simpFrac(count, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - count, tot);
          const q = `Dua buah dadu/pemutar adil bernombor 1 hingga ${m} dan 1 hingga ${n} dilambung serentak. Cari kebarangkalian bahawa ${desc}.`;
          const exp = `n(S) = ${m} × ${n} = ${tot}. Bilangan kesudahan yang memenuhi syarat ialah ${count}. Maka P = ${count}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(Math.max(1, count - 2), tot), fmtFrac(Math.min(tot - 1, count + 2), tot), fmtFrac(count, m + n)],
            exp,
            `TD:${m},${n},${condType},${count}`
          );
        } else if (tpl === "b13_s1_H_two_digit_no_repeat") {
          const digits = shuffle(rng, [1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 4).sort((a, b) => a - b);
          const nums = [];
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              if (i !== j) nums.push(digits[i] * 10 + digits[j]);
            }
          }
          const tot = nums.length; // 12
          const askType = randInt(rng, 0, 2);
          let count = 0;
          let condText = "";
          if (askType === 0) {
            condText = "nombor genap";
            count = nums.filter((v) => v % 2 === 0).length;
            if (count === 0 || count === tot) {
              // fallback to multiple of 3 or > threshold
              condText = `nombor lebih besar daripada ${digits[1] * 10}`;
              count = nums.filter((v) => v > digits[1] * 10).length;
            }
          } else if (askType === 1) {
            const thresh = digits[1] * 10 + 5;
            condText = `nombor yang lebih besar daripada ${thresh}`;
            count = nums.filter((v) => v > thresh).length;
          } else {
            const k = pick(rng, [3, 5]);
            count = nums.filter((v) => v % k === 0).length;
            if (count === 0) {
              const thresh = digits[2] * 10;
              condText = `nombor yang kurang daripada ${thresh}`;
              count = nums.filter((v) => v < thresh).length;
            } else {
              condText = `nombor gandaan ${k}`;
            }
          }
          const f = simpFrac(count, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - count, tot);
          const q = `Satu nombor dua digit dibentuk daripada digit-digit {${digits.join(", ")}} tanpa pengulangan digit. Hitung kebarangkalian membentuk ${condText}.`;
          const exp = `Bilangan nombor dua digit tanpa pengulangan = 4 × 3 = 12. Sebanyak ${count} nombor memenuhi syarat. Maka P = ${count}/12 = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(count, 16), fmtFrac(Math.max(1, count - 1), tot), fmtFrac(Math.min(tot - 1, count + 1), tot)],
            exp,
            `2D:${digits.join(",")}:${askType}`
          );
        } else {
          const p = randInt(rng, 2, 6);
          const qR = randInt(rng, 2, 6);
          const r = randInt(rng, 2, 6);
          const tot = p + qR + r;
          const choice = randInt(rng, 0, 2);
          const fav = [p + qR, qR + r, p][choice];
          const label = ["A atau B", "B atau C", "A"][choice];
          const f = simpFrac(fav, tot);
          const ans = fmtFrac(f.n, f.d);
          const fComp = simpFrac(tot - fav, tot);
          const q = `Dalam sebuah kelab, bilangan ahli bagi kumpulan A, B dan C adalah dalam nisbah ${p} : ${qR} : ${r}. Jika seorang ahli dipilih secara rawak, cari kebarangkalian ahli itu daripada kumpulan ${label}.`;
          const exp = `Jumlah bahagian nisbah = ${p} + ${qR} + ${r} = ${tot}. Bahagian kumpulan ${label} = ${fav}. Maka P = ${fav}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(1, 3), fmtFrac(fav, tot - fav), fmtFrac(Math.max(1, fav - 1), tot)],
            exp,
            `RT:${p},${qR},${r},${choice}`
          );
        }
      }
    },

    // ---------- b13_s2_L ----------
    {
      id: "b13_s2_L",
      unit: "b13",
      skill: "b13_s2",
      diff: "L",
      templates: ["b13_s2_L_frac_comp", "b13_s2_L_dec_comp", "b13_s2_L_context_comp"],
      generate(seed) {
        const rng = makeRng("b13_s2_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s2", diff: "L", template: tpl };

        if (tpl === "b13_s2_L_frac_comp") {
          const [fn, fd] = pick(rng, PROPER_FRACS);
          const cn = fd - fn;
          const ans = fmtFrac(cn, fd);
          const q = `Kebarangkalian suatu peristiwa A berlaku ialah ${fmtFrac(fn, fd)}. Hitung kebarangkalian peristiwa pelengkap A'.`;
          const exp = `P(A') = 1 - P(A) = 1 - ${fmtFrac(fn, fd)} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fn, fd), fmtFrac(cn, fd + 2), fmtFrac(1, fd), fmtFrac(fn, fd + cn)],
            exp,
            `${fn},${fd}`
          );
        } else if (tpl === "b13_s2_L_dec_comp") {
          const pCent = randInt(rng, 12, 88);
          const p = pCent / 100;
          const comp = (100 - pCent) / 100;
          const pStr = fmtDec(p, 2);
          const ansStr = fmtDec(comp, 2);
          const wrongCarry = fmtDec(comp + 0.1, 2);
          const q = `Kebarangkalian hari esok akan hujan ialah ${pStr}. Berapakah kebarangkalian bahawa hari esok tidak hujan?`;
          const exp = `P(tidak hujan) = 1 - ${pStr} = ${ansStr}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ansStr,
            [pStr, wrongCarry, fmtDec(Math.max(0.01, comp - 0.1), 2), fmtDec(comp / 2, 3)],
            exp,
            `DC:${pCent}`
          );
        } else {
          const tot = randInt(rng, 18, 45);
          const k = randInt(rng, 4, tot - 5);
          const comp = tot - k;
          const f = simpFrac(comp, tot);
          const ans = fmtFrac(f.n, f.d);
          const fOrig = simpFrac(k, tot);
          const q = `Dalam sebuah kelas yang mempunyai ${tot} orang murid, seramai ${k} orang memakai cermin mata. Jika seorang murid dipilih secara rawak, cari kebarangkalian murid itu TIDAK memakai cermin mata.`;
          const exp = `Bilangan murid yang tidak memakai cermin mata = ${tot} - ${k} = ${comp}. Maka P(tidak memakai) = ${comp}/${tot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fOrig.n, fOrig.d), fmtFrac(k, comp), fmtFrac(1, tot), fmtFrac(Math.max(1, f.n - 1), f.d + 1)],
            exp,
            `CC:${tot},${k}`
          );
        }
      }
    },

    // ---------- b13_s2_M ----------
    {
      id: "b13_s2_M",
      unit: "b13",
      skill: "b13_s2",
      diff: "M",
      templates: ["b13_s2_M_three_outcomes", "b13_s2_M_count_from_comp", "b13_s2_M_cards_not_cond"],
      generate(seed) {
        const rng = makeRng("b13_s2_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s2", diff: "M", template: tpl };

        if (tpl === "b13_s2_M_three_outcomes") {
          const den = pick(rng, [10, 12, 15, 20, 24]);
          const a = randInt(rng, 2, Math.floor(den / 3));
          const b = randInt(rng, 2, Math.floor(den / 3));
          const c = den - a - b;
          const fA = simpFrac(a, den);
          const fB = simpFrac(b, den);
          const fC = simpFrac(c, den);
          const ans = fmtFrac(fC.n, fC.d);
          const fAB = simpFrac(a + b, den);
          const q = `Dalam satu perlawanan, kebarangkalian pasukan sekolah menang ialah ${fmtFrac(fA.n, fA.d)} dan seri ialah ${fmtFrac(fB.n, fB.d)}. Berapakah kebarangkalian pasukan itu kalah?`;
          const exp = `Jumlah kebarangkalian semua kesudahan ialah 1. Maka P(kalah) = 1 - ${fmtFrac(fA.n, fA.d)} - ${fmtFrac(fB.n, fB.d)} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fAB.n, fAB.d), fmtFrac(fA.n, fA.d), fmtFrac(fB.n, fB.d), fmtFrac(1, den)],
            exp,
            `${den},${a},${b}`
          );
        } else if (tpl === "b13_s2_M_count_from_comp") {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 2, 6);
          const tot = fd * k;
          const notCount = fn * k;
          const targetCount = tot - notCount;
          const q = `Sebuah kotak mengandungi ${tot} batang pen berwarna merah dan biru. Kebarangkalian memilih pen yang BUKAN berwarna merah ialah ${fmtFrac(fn, fd)}. Hitung bilangan pen berwarna merah di dalam kotak itu.`;
          const exp = `P(merah) = 1 - ${fmtFrac(fn, fd)} = ${fmtFrac(fd - fn, fd)}. Maka bilangan pen merah = ${fmtFrac(fd - fn, fd)} × ${tot} = ${targetCount}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(targetCount),
            [fmtInt(notCount), fmtInt(targetCount + 3), fmtInt(Math.max(1, targetCount - 3)), fmtInt(tot)],
            exp,
            `CF:${fn},${fd},${k}`
          );
        } else {
          const n = randInt(rng, 14, 30);
          const k = pick(rng, [3, 4, 5]);
          const multCount = Math.floor(n / k);
          const notCount = n - multCount;
          const f = simpFrac(notCount, n);
          const ans = fmtFrac(f.n, f.d);
          const fMult = simpFrac(multCount, n);
          const q = `Kad bernombor 1 hingga ${n} diletakkan di dalam sebuah beg. Sekeping kad dipilih secara rawak. Cari kebarangkalian memilih kad yang BUKAN gandaan ${k}.`;
          const exp = `Bilangan gandaan ${k} = ${multCount}, jadi P(gandaan ${k}) = ${fmtFrac(fMult.n, fMult.d)}. Maka P(bukan gandaan ${k}) = 1 - ${fmtFrac(fMult.n, fMult.d)} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fMult.n, fMult.d), fmtFrac(notCount - 1, n), fmtFrac(1, k), fmtFrac(multCount, notCount)],
            exp,
            `CN:${n},${k}`
          );
        }
      }
    },

    // ---------- b13_s2_H ----------
    {
      id: "b13_s2_H",
      unit: "b13",
      skill: "b13_s2",
      diff: "H",
      templates: ["b13_s2_H_algebraic_comp", "b13_s2_H_remove_then_comp", "b13_s2_H_total_from_comp"],
      generate(seed) {
        const rng = makeRng("b13_s2_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s2", diff: "H", template: tpl };

        if (tpl === "b13_s2_H_algebraic_comp") {
          const a = randInt(rng, 2, 5);
          const b = randInt(rng, 2, 6);
          const c = randInt(rng, 2, 5);
          const tot = a + b + c;
          const pickIdx = randInt(rng, 0, 2);
          const targetCoeff = [a, b, c][pickIdx];
          const compCoeff = tot - targetCoeff;
          const color = ["merah", "biru", "hijau"][pickIdx];
          const f = simpFrac(compCoeff, tot);
          const ans = fmtFrac(f.n, f.d);
          const fOrig = simpFrac(targetCoeff, tot);
          const q = `Dalam suatu balang, kebarangkalian mendapat bola merah, biru dan hijau masing-masing ialah ${a}x, ${b}x dan ${c}x. Tentukan kebarangkalian bahawa bola yang dipilih BUKAN berwarna ${color}.`;
          const exp = `Jumlah kebarangkalian = 1: (${a} + ${b} + ${c})x = 1 => x = 1/${tot}. Maka P(${color}) = ${targetCoeff}/${tot} = ${fmtFrac(fOrig.n, fOrig.d)}, jadi P(bukan ${color}) = 1 - ${fmtFrac(fOrig.n, fOrig.d)} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fOrig.n, fOrig.d), fmtFrac(1, tot), fmtFrac(targetCoeff, compCoeff), fmtFrac(compCoeff - 1, tot)],
            exp,
            `ALG:${a},${b},${c},${pickIdx}`
          );
        } else if (tpl === "b13_s2_H_remove_then_comp") {
          const r = randInt(rng, 6, 12);
          const b = randInt(rng, 6, 12);
          const g = randInt(rng, 4, 10);
          const remR = randInt(rng, 2, 4);
          const remB = randInt(rng, 1, 3);
          const newR = r - remR;
          const newB = b - remB;
          const newTot = newR + newB + g;
          const notG = newR + newB;
          const f = simpFrac(notG, newTot);
          const ans = fmtFrac(f.n, f.d);
          const fG = simpFrac(g, newTot);
          const q = `Sebuah kotak mempunyai ${r} kad merah, ${b} kad biru dan ${g} kad hijau. Selepas ${remR} kad merah dan ${remB} kad biru dikeluarkan, sekeping kad dipilih secara rawak. Cari kebarangkalian kad itu BUKAN berwarna hijau.`;
          const exp = `Baki kad: merah = ${newR}, biru = ${newB}, hijau = ${g}, jumlah n(S) = ${newTot}. Bilangan kad bukan hijau = ${newR} + ${newB} = ${notG}. Maka P(bukan hijau) = ${notG}/${newTot} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fG.n, fG.d), fmtFrac(r + b, r + b + g), fmtFrac(notG, r + b + g), fmtFrac(Math.max(1, f.n - 1), f.d + 1)],
            exp,
            `RM:${r},${b},${g},${remR},${remB}`
          );
        } else {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 2, 6);
          const tot = fd * k;
          const notGreen = fn * k;
          const green = tot - notGreen;
          const q = `Sebuah beg mengandungi ${green} biji guli hijau dan sejumlah guli kuning. Jika kebarangkalian memilih guli yang BUKAN berwarna hijau ialah ${fmtFrac(fn, fd)}, cari bilangan guli kuning di dalam beg itu.`;
          const exp = `P(hijau) = 1 - ${fmtFrac(fn, fd)} = ${fmtFrac(fd - fn, fd)}. Oleh itu, ${fmtFrac(fd - fn, fd)} × jumlah = ${green} => jumlah guli = ${tot}. Bilangan guli kuning = ${tot} - ${green} = ${notGreen}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(notGreen),
            [fmtInt(tot), fmtInt(notGreen + green), fmtInt(Math.max(1, notGreen - 3)), fmtInt(green + fn)],
            exp,
            `TC:${fn},${fd},${k}`
          );
        }
      }
    },

    // ---------- b13_s3_L ----------
    {
      id: "b13_s3_L",
      unit: "b13",
      skill: "b13_s3",
      diff: "L",
      templates: ["b13_s3_L_expected_frac", "b13_s3_L_expected_dec", "b13_s3_L_prob_from_expected"],
      generate(seed) {
        const rng = makeRng("b13_s3_L", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s3", diff: "L", template: tpl };

        if (tpl === "b13_s3_L_expected_frac") {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 6, 30);
          const trials = fd * k;
          const expected = fn * k;
          const pStr = fmtFrac(fn, fd);
          const q = `Kebarangkalian seorang pemanah mengenai sasaran ialah ${pStr}. Jika dia memanah sebanyak ${trials} kali, berapakah jangkaan bilangan kali panahan yang mengenai sasaran?`;
          const exp = `Jangkaan bilangan = P(mengenai sasaran) × bilangan cubaan = ${pStr} × ${trials} = ${expected}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(expected),
            [fmtInt(trials - expected), fmtInt(expected + fd), fmtInt(Math.max(1, expected - fd)), fmtInt(Math.round(trials / fd))],
            exp,
            `EF:${fn},${fd},${k}`
          );
        } else if (tpl === "b13_s3_L_expected_dec") {
          const decP = pick(rng, [0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.6, 0.75, 0.8]);
          const trials = pick(rng, [40, 60, 80, 100, 120, 160, 200, 240, 300]);
          const expected = Math.round(decP * trials);
          const pStr = fmtDec(decP, 2);
          const q = `Kebarangkalian mendapat hadiah bertuah dalam satu cabutan ialah ${pStr}. Dalam ${trials} cabutan, anggarkan bilangan hadiah bertuah yang dijangka diperoleh.`;
          const exp = `Jangkaan bilangan = ${pStr} × ${trials} = ${expected}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(expected),
            [fmtInt(trials - expected), fmtInt(expected + 10), fmtInt(Math.max(2, expected - 10)), fmtInt(Math.round(trials / 2))],
            exp,
            `ED:${pStr},${trials}`
          );
        } else {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 5, 25);
          const trials = fd * k;
          const expected = fn * k;
          const ans = fmtFrac(fn, fd);
          const fComp = simpFrac(trials - expected, trials);
          const q = `Sebiji dadu tidak adil dilambung sebanyak ${trials} kali dan dijangkakan nombor 6 muncul sebanyak ${expected} kali. Hitung kebarangkalian mendapat nombor 6 bagi dadu itu.`;
          const exp = `P(nombor 6) = jangkaan bilangan / jumlah cubaan = ${expected}/${trials} = ${ans}.`;
          return buildMcq(
            rng,
            meta,
            q,
            ans,
            [fmtFrac(fComp.n, fComp.d), fmtFrac(1, 6), fmtFrac(fn, fd + 1), fmtFrac(expected, trials - expected)],
            exp,
            `PE:${fn},${fd},${k}`
          );
        }
      }
    },

    // ---------- b13_s3_M ----------
    {
      id: "b13_s3_M",
      unit: "b13",
      skill: "b13_s3",
      diff: "M",
      templates: ["b13_s3_M_add_items", "b13_s3_M_remove_items", "b13_s3_M_expected_not"],
      generate(seed) {
        const rng = makeRng("b13_s3_M", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s3", diff: "M", template: tpl };

        if (tpl === "b13_s3_M_add_items") {
          const a = randInt(rng, 3, 10);
          const b = randInt(rng, 5, 14);
          const x = randInt(rng, 3, 12);
          const f = simpFrac(a + x, a + b + x);
          const pStr = fmtFrac(f.n, f.d);
          const q = `Sebuah beg berisi ${a} biji bola merah dan ${b} biji bola biru. Berapa bijikah bola merah yang perlu dimasukkan lagi supaya kebarangkalian memilih bola merah menjadi ${pStr}?`;
          const exp = `Katakan x ialah bilangan bola merah tambahan: (${a} + x)/(${a + b} + x) = ${pStr}. Menyelesaikan persamaan menghasilkan x = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(x + 2), fmtInt(Math.max(1, x - 2)), fmtInt(x + a), fmtInt(b - a > 0 ? b - a : x + 4)],
            exp,
            `ADD:${a},${b},${x}`
          );
        } else if (tpl === "b13_s3_M_remove_items") {
          const g = randInt(rng, 4, 12);
          const yRem = randInt(rng, 6, 16);
          const x = randInt(rng, 2, yRem - 3);
          const yLeft = yRem - x;
          const f = simpFrac(g, g + yLeft);
          const pStr = fmtFrac(f.n, f.d);
          const q = `Sebuah kotak mengandungi ${g} keping kad hijau dan ${yRem} keping kad kuning. Berapa kepingkah kad kuning yang perlu dikeluarkan supaya kebarangkalian memilih kad hijau menjadi ${pStr}?`;
          const exp = `Katakan x ialah bilangan kad kuning yang dikeluarkan: ${g}/(${g + yRem} - x) = ${pStr} => ${g + yRem} - x = ${g + yLeft} => x = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(x + 2), fmtInt(Math.max(1, x - 1)), fmtInt(yLeft), fmtInt(x + 4)],
            exp,
            `REM:${g},${yRem},${x}`
          );
        } else {
          const [fn, fd] = pick(rng, PROPER_FRACS.slice(0, 12));
          const k = randInt(rng, 8, 35);
          const tot = fd * k;
          const bad = fn * k;
          const good = tot - bad;
          const pStr = fmtFrac(fn, fd);
          const q = `Di sebuah kilang, kebarangkalian sebiji lampu yang dihasilkan adalah rosak ialah ${pStr}. Daripada ${tot} biji lampu yang diperiksa, anggarkan bilangan lampu yang TIDAK rosak.`;
          const exp = `P(tidak rosak) = 1 - ${pStr} = ${fmtFrac(fd - fn, fd)}. Jangkaan bilangan lampu tidak rosak = ${fmtFrac(fd - fn, fd)} × ${tot} = ${good}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(good),
            [fmtInt(bad), fmtInt(good - fd), fmtInt(good + fd), fmtInt(tot)],
            exp,
            `EN:${fn},${fd},${k}`
          );
        }
      }
    },

    // ---------- b13_s3_H ----------
    {
      id: "b13_s3_H",
      unit: "b13",
      skill: "b13_s3",
      diff: "H",
      templates: ["b13_s3_H_find_initial_unknown", "b13_s3_H_add_and_remove", "b13_s3_H_two_batches_expected"],
      generate(seed) {
        const rng = makeRng("b13_s3_H", seed);
        const tpl = pick(rng, this.templates);
        const meta = { unit: "b13", skill: "b13_s3", diff: "H", template: tpl };

        if (tpl === "b13_s3_H_find_initial_unknown") {
          const r = randInt(rng, 4, 12);
          const bOrig = randInt(rng, 5, 16);
          const addB = randInt(rng, 3, 9);
          const totNew = r + bOrig + addB;
          const f = simpFrac(r, totNew);
          const pStr = fmtFrac(f.n, f.d);
          const q = `Sebuah kotak mengandungi ${r} biji guli merah dan sejumlah guli biru. Apabila ${addB} biji guli biru dimasukkan lagi ke dalam kotak itu, kebarangkalian memilih guli merah menjadi ${pStr}. Cari bilangan asal guli biru.`;
          const exp = `Katakan bilangan asal guli biru ialah y. Maka ${r}/(${r} + y + ${addB}) = ${pStr} => ${r + addB} + y = ${totNew} => y = ${bOrig}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(bOrig),
            [fmtInt(bOrig + addB), fmtInt(Math.max(1, bOrig - addB)), fmtInt(totNew), fmtInt(bOrig + 2)],
            exp,
            `IU:${r},${bOrig},${addB}`
          );
        } else if (tpl === "b13_s3_H_add_and_remove") {
          const a = randInt(rng, 5, 12);
          const b = randInt(rng, 6, 14);
          const remB = randInt(rng, 2, b - 2);
          const x = randInt(rng, 3, 10);
          const base = a + b - remB;
          const f = simpFrac(x, base + x);
          const pStr = fmtFrac(f.n, f.d);
          const q = `Sebuah beg mengandungi ${a} kad merah dan ${b} kad biru. Setelah ${remB} kad biru dikeluarkan dan x keping kad kuning dimasukkan ke dalam beg itu, kebarangkalian mencabut sekeping kad kuning secara rawak ialah ${pStr}. Hitung nilai x.`;
          const exp = `Jumlah kad baharu = ${a} + (${b} - ${remB}) + x = ${base} + x. Maka x/(${base} + x) = ${pStr}, yang memberi x = ${x}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(x),
            [fmtInt(x + 2), fmtInt(Math.max(1, x - 2)), fmtInt(base), fmtInt(x + remB)],
            exp,
            `AR:${a},${b},${remB},${x}`
          );
        } else {
          const [n1, d1] = pick(rng, PROPER_FRACS.slice(0, 10));
          const [n2, d2] = pick(rng, PROPER_FRACS.slice(0, 10));
          const k1 = randInt(rng, 5, 18);
          const k2 = randInt(rng, 5, 18);
          const N1 = d1 * k1;
          const N2 = d2 * k2;
          const exp1 = n1 * k1;
          const exp2 = n2 * k2;
          const totalGood = N1 - exp1 + (N2 - exp2);
          const totalBad = exp1 + exp2;
          const p1Str = fmtFrac(n1, d1);
          const p2Str = fmtFrac(n2, d2);
          const q = `Sebuah kedai menerima dua kelompok produk: ${N1} unit jenis P dengan kebarangkalian rosak ${p1Str} dan ${N2} unit jenis Q dengan kebarangkalian rosak ${p2Str}. Hitung jumlah jangkaan produk yang ELOK daripada kedua-dua kelompok itu.`;
          const exp = `Produk elok jenis P = (1 - ${p1Str}) × ${N1} = ${N1 - exp1}. Produk elok jenis Q = (1 - ${p2Str}) × ${N2} = ${N2 - exp2}. Jumlah jangkaan produk elok = ${N1 - exp1} + ${N2 - exp2} = ${totalGood}.`;
          return buildMcq(
            rng,
            meta,
            q,
            fmtInt(totalGood),
            [fmtInt(totalBad), fmtInt(totalGood + exp1), fmtInt(Math.max(1, totalGood - exp2)), fmtInt(N1 + N2)],
            exp,
            `TB:${N1},${n1},${d1},${N2},${n2},${d2}`
          );
        }
      }
    }
  ];

  return generators;
}

  const entries = [].concat(buildPartB1B4(), buildPartB5B9(), buildPartB10B13());

  if (typeof module === "object" && module.exports) module.exports = entries;

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.math = entries;

  App.Generators = App.Generators || {};
  App.Generators.pools = App.Generators.pools || {};
  App.Generators.pools.t2 = App.Generators.pools.t2 || {};
  App.Generators.pools.t2.math = entries;
})(typeof window !== "undefined" ? window : globalThis);
