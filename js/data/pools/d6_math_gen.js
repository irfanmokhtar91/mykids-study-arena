/**
 * Darjah 6 Matematik (KSSR Semakan 2017, Bab 1-8) deterministic skill-tagged MCQ generators.
 * Self-contained pool of 96 generators (32 skills x L/M/H) with zero DOM/storage dependencies.
 */
(function (global) {
  "use strict";

  function buildPartB1B2() {
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

    function addFrac(a, b) {
      return simpFrac(a.n * b.d + b.n * a.d, a.d * b.d);
    }

    function subFrac(a, b) {
      return simpFrac(a.n * b.d - b.n * a.d, a.d * b.d);
    }

    function mulFrac(a, b) {
      return simpFrac(a.n * b.n, a.d * b.d);
    }

    function divFrac(a, b) {
      return simpFrac(a.n * b.d, a.d * b.n);
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
      let s = rounded.toFixed(dp);
      if (s.includes(".")) {
        s = s.replace(/\.?0+$/, "");
      }
      return s;
    }

    function fmtRM(val) {
      const rounded = Math.round(val * 100) / 100;
      const [intPart, decPart] = rounded.toFixed(2).split(".");
      const intFormatted = Number(intPart) >= 1000 ? fmtInt(Number(intPart)) : intPart;
      return `RM ${intFormatted}.${decPart}`;
    }

    function fmtJutaDec(val) {
      return `${fmtDec(val, 4)} juta`;
    }

    function fmtJutaFrac(n, d) {
      return `${fmtFrac(n, d)} juta`;
    }

    // Convert positive integer 0..10,000,000 to Bahasa Melayu words
    const BM_ONES = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan"];
    function under1000BM(n) {
      if (n === 0) return "";
      const parts = [];
      const h = Math.floor(n / 100);
      const rem = n % 100;
      if (h > 0) {
        parts.push(h === 1 ? "seratus" : `${BM_ONES[h]} ratus`);
      }
      if (rem > 0) {
        if (rem < 10) {
          parts.push(BM_ONES[rem]);
        } else if (rem === 10) {
          parts.push("sepuluh");
        } else if (rem === 11) {
          parts.push("sebelas");
        } else if (rem < 20) {
          parts.push(`${BM_ONES[rem - 10]} belas`);
        } else {
          const t = Math.floor(rem / 10);
          const o = rem % 10;
          parts.push(`${BM_ONES[t]} puluh`);
          if (o > 0) parts.push(BM_ONES[o]);
        }
      }
      return parts.join(" ");
    }

    function numToWordsBM(n) {
      if (n === 0) return "sifar";
      if (n === 10000000) return "sepuluh juta";
      const parts = [];
      const mil = Math.floor(n / 1000000);
      const thou = Math.floor((n % 1000000) / 1000);
      const rest = n % 1000;
      if (mil > 0) {
        parts.push(`${under1000BM(mil)} juta`);
      }
      if (thou > 0) {
        if (thou === 1 && mil === 0) {
          parts.push("seribu");
        } else {
          parts.push(`${under1000BM(thou)} ribu`);
        }
      }
      if (rest > 0) {
        parts.push(under1000BM(rest));
      }
      return parts.join(" ");
    }

    function fracToWordsBM(whole, n, d) {
      const denomMap = {
        2: "perdua",
        4: "perempat",
        5: "perlima",
        8: "perlapan",
        10: "persepuluh"
      };
      const wStr = whole > 0 ? `${under1000BM(whole)} ` : "";
      return `${wStr}${BM_ONES[n]} ${denomMap[d]}`;
    }

    // Canonical numerical/semantic key to ensure zero equivalent options
    function parseNumericToken(s) {
      const clean = s.replace(/\s+/g, " ").trim();
      // Mixed fraction e.g. "2 3/4" or "-1 1/2"
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
      // Simple fraction e.g. "3/4"
      m = clean.match(/^(-?\d+)\/(\d+)$/);
      if (m && Number(m[2]) !== 0) {
        return Number(m[1]) / Number(m[2]);
      }
      // Spaced integer or decimal e.g. "1 250 000" or "0.125"
      const noSpace = clean.replace(/\s/g, "");
      if (/^-?\d+(\.\d+)?$/.test(noSpace)) {
        return Number(noSpace);
      }
      return null;
    }

    function canonicalOptionKey(raw) {
      const s = String(raw).replace(/\s+/g, " ").trim();
      // Percentage
      if (s.endsWith("%")) {
        const inner = parseNumericToken(s.slice(0, -1));
        if (inner !== null) return `pct:${Math.round(inner * 1e6)}`;
      }
      // RM currency
      if (/^RM\s*/i.test(s)) {
        const inner = parseNumericToken(s.replace(/^RM\s*/i, ""));
        if (inner !== null) return `rm:${Math.round(inner * 1e6)}`;
      }
      // Juta
      if (/\bjuta$/i.test(s)) {
        const inner = parseNumericToken(s.replace(/\s*juta$/i, ""));
        if (inner !== null) return `num:${Math.round(inner * 1e9)}`; // 1 juta -> 1e9 scaled units
      }
      // Trailing unit like kg, m, km, l, ℓ, jam, orang, biji, kotak, keping, buah
      const unitMatch = s.match(/^(.+?)\s+([a-zA-Z\u2113]+)$/);
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
      if (s.includes("NaN") || s.includes("undefined") || s.includes("Infinity")) return false;
      // Check no unsimplified fraction or /1 or 0/d
      const fracMatches = s.match(/\b(\d+)\/(\d+)\b/g);
      if (fracMatches) {
        for (const fm of fracMatches) {
          const [ns, ds] = fm.split("/").map(Number);
          if (ds <= 1 || ns === 0 || ns >= ds || gcd(ns, ds) !== 1) return false;
        }
      }
      return true;
    }

    /**
     * Build 4 guaranteed unique, non-equivalent MCQ options without fallback "(1)" suffixes.
     */
    function buildMcq(rng, meta, qText, correctStr, wrongCandidates, explanation, sig, extraFallbacks) {
      const corr = String(correctStr).trim();
      const seenKeys = new Set([canonicalOptionKey(corr)]);
      const seenStrings = new Set([corr]);
      const wrongs = [];

      const allCandidates = [...wrongCandidates, ...(extraFallbacks || [])];
      for (const w of allCandidates) {
        const ws = String(w).trim();
        const key = canonicalOptionKey(ws);
        if (!seenStrings.has(ws) && !seenKeys.has(key) && isValidOptionStr(ws)) {
          seenStrings.add(ws);
          seenKeys.add(key);
          wrongs.push(ws);
          if (wrongs.length === 3) break;
        }
      }

      // Domain-aware clean numeric perturbation if any candidates collided
      let step = 1;
      while (wrongs.length < 3 && step < 100) {
        let cand = null;
        const delta = (step % 2 === 0 ? 1 : -1) * Math.ceil(step / 2);
        if (/^RM\s*/i.test(corr)) {
          const v = parseNumericToken(corr.replace(/^RM\s*/i, ""));
          if (v !== null && v + delta * 1.5 > 0) cand = fmtRM(v + delta * 1.5);
        } else if (corr.endsWith("%")) {
          const v = parseNumericToken(corr.slice(0, -1));
          if (v !== null && v + delta * 5 > 0) cand = `${fmtDec(v + delta * 5, 2)}%`;
        } else if (/\bjuta$/i.test(corr)) {
          const v = parseNumericToken(corr.replace(/\s*juta$/i, ""));
          if (v !== null && v + delta * 0.1 > 0) {
            cand = corr.includes("/")
              ? fmtJutaFrac(Math.max(1, Math.round((v + delta * 0.25) * 4)), 4)
              : fmtJutaDec(v + delta * 0.1);
          }
        } else {
          const uMatch = corr.match(/^(.+?)\s+([a-zA-Z\u2113]+)$/);
          if (uMatch) {
            const v = parseNumericToken(uMatch[1]);
            if (v !== null) {
              if (uMatch[1].includes("/")) {
                const frac = simpFrac(Math.max(1, Math.round(v * 12) + delta), 12);
                cand = `${fmtFrac(frac.n, frac.d)} ${uMatch[2]}`;
              } else if (v + delta * 0.5 > 0) {
                cand = `${Number.isInteger(v) ? fmtInt(Math.max(1, v + delta * 2)) : fmtDec(v + delta * 0.2, 2)} ${uMatch[2]}`;
              }
            }
          } else {
            const v = parseNumericToken(corr);
            if (v !== null) {
              if (corr.includes("/")) {
                const frac = simpFrac(Math.max(1, Math.round(v * 12) + delta), 12);
                cand = fmtFrac(frac.n, frac.d);
              } else if (Number.isInteger(v)) {
                const mag = Math.abs(v) >= 100000 ? 10000 : Math.abs(v) >= 1000 ? 100 : 2;
                const nv = v + delta * mag;
                if (nv > 0) cand = fmtInt(nv);
              } else {
                const nv = v + delta * 0.1;
                if (nv > 0) cand = fmtDec(nv, 3);
              }
            }
          }
        }
        step++;
        if (cand) {
          const key = canonicalOptionKey(cand);
          if (!seenStrings.has(cand) && !seenKeys.has(key) && isValidOptionStr(cand)) {
            seenStrings.add(cand);
            seenKeys.add(key);
            wrongs.push(cand);
          }
        }
      }

      if (wrongs.length < 3) {
        throw new Error(`Failed to generate 3 unique distractors for ${meta.id}: ${corr}`);
      }

      const options = shuffle(rng, [corr, ...wrongs]);
      return {
        unit: meta.unit,
        skill: meta.skill,
        diff: meta.diff,
        template: meta.template,
        q: qText,
        options,
        correctIndex: options.indexOf(corr),
        explanation,
        sig: `${meta.skill}:${meta.diff}:${meta.template}:${sig}`
      };
    }

    // ==================== KNOWLEDGE MAP (UNITS) ====================

    // ==================== SHARED DATA POOLS ====================
    const FRAC_MIL_LIST = [
      { w: 0, n: 1, d: 2, dec: 0.5 },
      { w: 0, n: 1, d: 4, dec: 0.25 },
      { w: 0, n: 3, d: 4, dec: 0.75 },
      { w: 0, n: 1, d: 5, dec: 0.2 },
      { w: 0, n: 2, d: 5, dec: 0.4 },
      { w: 0, n: 3, d: 5, dec: 0.6 },
      { w: 0, n: 4, d: 5, dec: 0.8 },
      { w: 0, n: 1, d: 8, dec: 0.125 },
      { w: 0, n: 3, d: 8, dec: 0.375 },
      { w: 0, n: 5, d: 8, dec: 0.625 },
      { w: 0, n: 7, d: 8, dec: 0.875 },
      { w: 0, n: 1, d: 10, dec: 0.1 },
      { w: 0, n: 3, d: 10, dec: 0.3 },
      { w: 0, n: 7, d: 10, dec: 0.7 },
      { w: 0, n: 9, d: 10, dec: 0.9 }
    ];

    const PRIMES_100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const PRIME_SET = new Set(PRIMES_100);
    const TRICKY_COMPOSITES = [9, 15, 21, 27, 33, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 95, 99];
    const SAMPLE_DATES = [
      "08/Jan/2026", "14/Feb/2026", "21/Mar/2026", "05/Apr/2026",
      "18/May/2026", "11/Jun/2026", "24/Jul/2026", "09/Aug/2026"
    ];

    // ==================== GENERATORS (30 ENTRIES) ====================
    const generators = [
      // ---------- b1_s1: Membaca, Menulis dan Pola Nombor hingga 10 000 000 ----------
      {
        type: "generator",
        id: "b1_s1_L",
        unit: "b1",
        skill: "b1_s1",
        diff: "L",
        templates: ["b1_s1_L_words_to_num", "b1_s1_L_pattern_next"],
        generate(seed) {
          const rng = makeRng("b1_s1_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s1", diff: "L", template: tpl };

          if (tpl === "b1_s1_L_words_to_num") {
            const mil = randInt(rng, 1, 9);
            const ht = pick(rng, [0, 0, randInt(rng, 1, 8)]);
            const tt = randInt(rng, 2, 9);
            const th = randInt(rng, 2, 9);
            const h = pick(rng, [0, randInt(rng, 1, 9)]);
            const t = randInt(rng, 1, 9);
            const o = randInt(rng, 1, 9);
            const thouGroup = ht * 100 + tt * 10 + th;
            const restGroup = h * 100 + t * 10 + o;
            const val = mil * 1000000 + thouGroup * 1000 + restGroup;
            const words = numToWordsBM(val);
            const ctx = pick(rng, [
              `Bilangan pelawat laman sesawang pendidikan pada tahun lepas ialah "${words}". Tulis nombor itu dalam angka.`,
              `Sebuah kilang menghasilkan "${words}" unit komponen elektronik. Nyatakan bilangan tersebut dalam angka.`
            ]);
            const w1 = mil * 100000 + thouGroup * 1000 + restGroup; // drop million zero or shift
            const w2 = mil * 1000000 + (tt * 100 + th * 10) * 1000 + restGroup; // shift tens of thousands
            const w3 = mil * 1000000 + thouGroup * 1000 + (t * 100 + o * 10); // drop hundreds zero / shift tens
            const w4 = mil * 1000000 + (ht * 100 + th * 10 + tt) * 1000 + restGroup;
            return buildMcq(
              rng, meta, ctx, fmtInt(val),
              [fmtInt(w1), fmtInt(w2), fmtInt(w3), fmtInt(w4)],
              `"${words}" ditulis sebagai ${fmtInt(val)} mengikut nilai tempat juta, ratus ribu, puluh ribu, ribu, ratus, puluh dan sa.`,
              `${val}`
            );
          } else {
            const dir = pick(rng, [1, -1]);
            const step = pick(rng, [100, 1000, 10000, 100000, 1000000]);
            const maxStart = dir === 1 ? 9900000 - 4 * step : 9900000;
            const minStart = dir === 1 ? 1100000 : 1100000 + 4 * step;
            const base = randInt(rng, Math.floor(minStart / 1000), Math.floor(maxStart / 1000)) * 1000 + randInt(rng, 11, 89) * 5;
            const seq = [0, 1, 2, 3, 4].map(i => base + dir * i * step);
            const ans = seq[4];
            const q = `Lengkapkan pola nombor berikut:\n${fmtInt(seq[0])}, ${fmtInt(seq[1])}, ${fmtInt(seq[2])}, ${fmtInt(seq[3])}, [ ___ ]`;
            const stepLabel = dir === 1 ? `bertambah ${fmtInt(step)}` : `berkurang ${fmtInt(step)}`;
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [
                fmtInt(seq[3] - dir * step),
                fmtInt(ans + dir * step),
                fmtInt(ans + dir * Math.max(100, step / 10)),
                fmtInt(seq[3] + dir * (step * 2))
              ],
              `Pola nombor ini ${stepLabel} setiap langkah, maka nombor kelima ialah ${fmtInt(seq[3])} ${dir === 1 ? "+" : "−"} ${fmtInt(step)} = ${fmtInt(ans)}.`,
              `${base}:${dir}:${step}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s1_M",
        unit: "b1",
        skill: "b1_s1",
        diff: "M",
        templates: ["b1_s1_M_num_to_words", "b1_s1_M_pattern_identify"],
        generate(seed) {
          const rng = makeRng("b1_s1_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s1", diff: "M", template: tpl };

          if (tpl === "b1_s1_M_num_to_words") {
            const mil = randInt(rng, 2, 9);
            const ht = pick(rng, [0, randInt(rng, 1, 9)]);
            const tt = ht === 0 ? randInt(rng, 2, 9) : 0;
            const th = randInt(rng, 2, 9);
            const h = pick(rng, [0, randInt(rng, 1, 9)]);
            const t = h === 0 ? randInt(rng, 2, 9) : 0;
            const o = randInt(rng, 1, 9);
            const val = mil * 1000000 + (ht * 100 + tt * 10 + th) * 1000 + (h * 100 + t * 10 + o);
            const correctWords = numToWordsBM(val);
            const alt1 = numToWordsBM(mil * 1000000 + (tt * 100 + ht * 10 + th) * 1000 + (h * 100 + t * 10 + o));
            const alt2 = numToWordsBM(mil * 1000000 + (ht * 100 + tt * 10 + th) * 1000 + (t * 100 + h * 10 + o));
            const alt3 = numToWordsBM(mil * 1000000 + (ht * 100 + tt * 10 + th) * 1000 + (h * 100 + o * 10 + t));
            const alt4 = numToWordsBM((mil - 1) * 1000000 + (ht * 100 + tt * 10 + th) * 1000 + (h * 100 + t * 10 + o));
            const q = `Bagaimanakah nombor ${fmtInt(val)} disebut dan ditulis dalam perkataan?`;
            return buildMcq(
              rng, meta, q, correctWords,
              [alt1, alt2, alt3, alt4],
              `${fmtInt(val)} terdiri daripada ${mil} juta, ${ht * 100 + tt * 10 + th} ribu dan ${h * 100 + t * 10 + o}, iaitu "${correctWords}".`,
              `${val}`
            );
          } else {
            const dir = pick(rng, [1, -1]);
            const step = pick(rng, [400, 600, 800, 2500, 12000, 25000, 150000]);
            const base = randInt(rng, 2000, 7500) * 1000 + randInt(rng, 10, 99) * 5;
            const seq = [0, 1, 2, 3, 4].map(i => base + dir * i * step);
            const dirWord = dir === 1 ? "menaik" : "menurun";
            const oppWord = dir === 1 ? "menurun" : "menaik";
            const sw = numToWordsBM(step);
            const ans = `Tertib ${dirWord} ${sw}-${sw}`;
            const wrongStep1 = numToWordsBM(step * 10);
            const wrongStep2 = numToWordsBM(Math.max(10, Math.round(step / 10)));
            const q = `Kenal pasti pola bagi susunan nombor berikut:\n${seq.map(fmtInt).join(", ")}`;
            return buildMcq(
              rng, meta, q, ans,
              [
                `Tertib ${oppWord} ${sw}-${sw}`,
                `Tertib ${dirWord} ${wrongStep1}-${wrongStep1}`,
                `Tertib ${dirWord} ${wrongStep2}-${wrongStep2}`,
                `Tertib ${oppWord} ${wrongStep1}-${wrongStep1}`
              ],
              `Beza antara dua nombor berturutan ialah ${fmtInt(step)} dan nilainya semakin ${dir === 1 ? "besar" : "kecil"}, maka polanya ialah tertib ${dirWord} ${sw}-${sw}.`,
              `${base}:${dir}:${step}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s1_H",
        unit: "b1",
        skill: "b1_s1",
        diff: "H",
        templates: ["b1_s1_H_pattern_nth", "b1_s1_H_context_digit_place"],
        generate(seed) {
          const rng = makeRng("b1_s1_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s1", diff: "H", template: tpl };

          if (tpl === "b1_s1_H_pattern_nth") {
            const dir = pick(rng, [1, -1]);
            const step = pick(rng, [3500, 4500, 12500, 18000, 45000]);
            const nth = pick(rng, [7, 8, 9]);
            const base = randInt(rng, 2500, 6500) * 1000 + randInt(rng, 100, 900);
            const first4 = [0, 1, 2, 3].map(i => base + dir * i * step);
            const ans = base + dir * (nth - 1) * step;
            const q = `Diberi satu pola nombor: ${first4.map(fmtInt).join(", ")}, ...\nApakah nombor ke-${nth} dalam pola ini?`;
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [
                fmtInt(base + dir * nth * step), // off-by-one step
                fmtInt(base + dir * (nth - 2) * step), // off-by-one step
                fmtInt(base - dir * (nth - 1) * step), // wrong direction
                fmtInt(first4[3] + dir * step) // just the 5th term
              ],
              `Pola ${dir === 1 ? "menaik" : "menurun"} sebanyak ${fmtInt(step)} setiap langkah. Nombor ke-${nth} = ${fmtInt(base)} ${dir === 1 ? "+" : "−"} (${nth - 1} × ${fmtInt(step)}) = ${fmtInt(ans)}.`,
              `${base}:${dir}:${step}:${nth}`
            );
          } else {
            // Scrambled sequence or missing middle term with non-trivial step
            const step = pick(rng, [1250, 2400, 7500, 15000, 32000]);
            const dir = pick(rng, [1, -1]);
            const base = randInt(rng, 3000, 8000) * 1000 + randInt(rng, 100, 900);
            const t1 = base;
            const t2 = base + dir * step;
            const t3 = base + dir * 2 * step;
            const t4 = base + dir * 3 * step;
            const t5 = base + dir * 4 * step;
            const date = pick(rng, SAMPLE_DATES);
            const extraAdd = pick(rng, [10000, 15000, 25000, 50000]);
            const q = `Pada ${date}, rekod pengeluaran mingguan sebuah kilang mengikut pola tetap ialah:\n${fmtInt(t1)}, ${fmtInt(t2)}, [ P ], ${fmtInt(t4)}, ${fmtInt(t5)}.\nCari nilai P + ${fmtInt(extraAdd)}.`;
            const ans = t3 + extraAdd;
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [
                fmtInt(t3), // forgot + extraAdd
                fmtInt(t3 - extraAdd),
                fmtInt(t4 + extraAdd),
                fmtInt(t2 + extraAdd)
              ],
              `Beza setiap langkah ialah ${fmtInt(step)}, jadi P = ${fmtInt(t3)}. Maka P + ${fmtInt(extraAdd)} = ${fmtInt(t3)} + ${fmtInt(extraAdd)} = ${fmtInt(ans)}.`,
              `${base}:${dir}:${step}:${extraAdd}:${date}`
            );
          }
        }
      },

      // ---------- b1_s2: Pecahan Juta dan Perpuluhan Juta serta Penukaran ----------
      {
        type: "generator",
        id: "b1_s2_L",
        unit: "b1",
        skill: "b1_s2",
        diff: "L",
        templates: ["b1_s2_L_frac_to_whole", "b1_s2_L_dec_to_whole"],
        generate(seed) {
          const rng = makeRng("b1_s2_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s2", diff: "L", template: tpl };

          if (tpl === "b1_s2_L_frac_to_whole") {
            const f = pick(rng, FRAC_MIL_LIST);
            const w = randInt(rng, 0, 8);
            const totalNum = w * f.d + f.n;
            const ans = Math.round((w + f.dec) * 1000000);
            const fStr = fmtJutaFrac(totalNum, f.d);
            const q = `Tukarkan ${fStr} kepada nombor bulat.`;
            const w1 = Math.round(ans / 10);
            const w2 = w * 1000000 + f.n * 10000;
            const w3 = w * 1000000 + (f.n * 10 + f.d) * 10000;
            const w4 = w * 1000000 + Math.round(f.dec * 100000);
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [fmtInt(w1), fmtInt(w2), fmtInt(w3), fmtInt(w4)],
              `${fStr} = (${w > 0 ? w + " + " : ""}${f.dec}) × 1 000 000 = ${fmtInt(ans)}.`,
              `${totalNum}/${f.d}`
            );
          } else {
            const w = randInt(rng, 0, 8);
            const decPart = pick(rng, [0.1, 0.2, 0.25, 0.35, 0.4, 0.5, 0.65, 0.75, 0.8, 0.95, 0.05, 0.08]);
            const val = Math.round((w + decPart) * 100) / 100;
            const ans = Math.round(val * 1000000);
            const q = `Nyatakan ${fmtJutaDec(val)} dalam nombor bulat.`;
            const w1 = Math.round(val * 100000);
            const w2 = Math.round(val * 10000);
            const w3 = w * 1000000 + Math.round(decPart * 100000);
            const w4 = Math.round(val * 1000000) + 100000;
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [fmtInt(w1), fmtInt(w2), fmtInt(w3), fmtInt(w4)],
              `${fmtJutaDec(val)} = ${fmtDec(val, 2)} × 1 000 000 = ${fmtInt(ans)}.`,
              `${fmtDec(val, 2)}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s2_M",
        unit: "b1",
        skill: "b1_s2",
        diff: "M",
        templates: ["b1_s2_M_whole_to_frac", "b1_s2_M_whole_to_dec"],
        generate(seed) {
          const rng = makeRng("b1_s2_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s2", diff: "M", template: tpl };

          if (tpl === "b1_s2_M_whole_to_frac") {
            const f = pick(rng, FRAC_MIL_LIST);
            const w = randInt(rng, 0, 7);
            const wholeVal = Math.round((w + f.dec) * 1000000);
            const ans = fmtJutaFrac(w * f.d + f.n, f.d);
            const q = `Tukarkan ${fmtInt(wholeVal)} kepada pecahan juta dalam bentuk termudah.`;
            const wrongAlt = [
              fmtJutaFrac(w * f.d + (f.d - f.n > 0 ? f.d - f.n : f.n + 1), f.d),
              fmtJutaFrac((w + 1) * f.d + f.n, f.d),
              `${w > 0 ? w + " " : ""}${f.n}/${f.d === 10 ? 5 : 10} juta`,
              `${w > 0 ? w + " " : ""}1/${f.d} juta`
            ];
            return buildMcq(
              rng, meta, q, ans,
              wrongAlt,
              `${fmtInt(wholeVal)} ÷ 1 000 000 = ${ans}.`,
              `${wholeVal}`
            );
          } else {
            const mil = randInt(rng, 1, 9);
            const thou = pick(rng, [45, 80, 105, 204, 308, 450, 625, 705, 840, 902]);
            const wholeVal = mil * 1000000 + thou * 1000;
            const decVal = wholeVal / 1000000;
            const ans = fmtJutaDec(decVal);
            const q = `Jumlah jualan buku ialah ${fmtInt(wholeVal)} naskhah. Nyatakan jumlah ini dalam perpuluhan juta.`;
            const dropZero = thou < 100 ? mil + thou / 100 : mil + Number(String(thou).replace("0", "")) / 100;
            const w1 = fmtJutaDec(dropZero);
            const w2 = fmtJutaDec(decVal * 10);
            const w3 = fmtJutaDec(mil + thou / 10000);
            const w4 = fmtJutaDec(decVal / 10);
            return buildMcq(
              rng, meta, q, ans,
              [w1, w2, w3, w4],
              `${fmtInt(wholeVal)} ÷ 1 000 000 = ${ans}. Pastikan kedudukan sifar selepas titik perpuluhan dikekalkan.`,
              `${wholeVal}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s2_H",
        unit: "b1",
        skill: "b1_s2",
        diff: "H",
        templates: ["b1_s2_H_frac_dec_equiv", "b1_s2_H_multi_unit_conv"],
        generate(seed) {
          const rng = makeRng("b1_s2_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s2", diff: "H", template: tpl };

          if (tpl === "b1_s2_H_frac_dec_equiv") {
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 4 || x.d === 8 || x.d === 5));
            const w = randInt(rng, 1, 7);
            const wordForm = `${fracToWordsBM(w, f.n, f.d)} juta`;
            const decVal = Math.round((w + f.dec) * 1000) / 1000;
            const ans = fmtJutaDec(decVal);
            const q = `Sebuah syarikat mengeksport "${wordForm}" sarung tangan getah ke luar negara. Nyatakan bilangan itu dalam perpuluhan juta.`;
            const w1 = fmtJutaDec(w + f.n / 10);
            const w2 = fmtJutaDec(w + f.n / 100 + f.d / 1000);
            const w3 = fmtJutaDec(w + Math.round(f.dec * 10) / 100);
            const w4 = fmtJutaDec(decVal + 0.125);
            return buildMcq(
              rng, meta, q, ans,
              [w1, w2, w3, w4],
              `"${wordForm}" = ${fmtJutaFrac(w * f.d + f.n, f.d)} = ${w} + (${f.n} ÷ ${f.d}) juta = ${ans}.`,
              `${w}:${f.n}/${f.d}`
            );
          } else {
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 8 || x.d === 4 || x.d === 5));
            const w = randInt(rng, 1, 6);
            const valA = Math.round((w + f.dec) * 1000000);
            const extra = pick(rng, [125000, 250000, 375000, 500000, 750000]);
            const valB = valA + extra;
            const date = pick(rng, SAMPLE_DATES);
            const ans = fmtJutaDec(valB / 1000000);
            const q = `Pada ${date}, sebuah pelabuhan mengendalikan ${fmtJutaFrac(w * f.d + f.n, f.d)} kontena pada suku pertama dan bertambah ${fmtInt(extra)} kontena pada suku kedua. Berapakah jumlah kontena pada suku kedua dalam perpuluhan juta?`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtJutaDec((valA + extra / 10) / 1000000),
                fmtJutaDec((valA - extra) / 1000000),
                fmtJutaDec(valB / 100000),
                fmtJutaDec((w + f.n / 10 + extra / 1000000))
              ],
              `${fmtJutaFrac(w * f.d + f.n, f.d)} = ${fmtDec(w + f.dec, 3)} juta, dan ${fmtInt(extra)} = ${fmtDec(extra / 1000000, 3)} juta. Jumlah = ${ans}.`,
              `${w}:${f.n}/${f.d}:${extra}`
            );
          }
        }
      },

      // ---------- b1_s3: Operasi Asas & Operasi Bergabung (Nombor Bulat, Pecahan Juta, Perpuluhan Juta) ----------
      {
        type: "generator",
        id: "b1_s3_L",
        unit: "b1",
        skill: "b1_s3",
        diff: "L",
        templates: ["b1_s3_L_add_sub_mixed", "b1_s3_L_mul_div_single"],
        generate(seed) {
          const rng = makeRng("b1_s3_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s3", diff: "L", template: tpl };

          if (tpl === "b1_s3_L_add_sub_mixed") {
            const isAdd = pick(rng, [true, false]);
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d !== 8));
            const w = randInt(rng, 2, 6);
            const a = Math.round((w + f.dec) * 1000000);
            const b = randInt(rng, 2, 9) * 100000 + randInt(rng, 1, 9) * 10000;
            const ans = isAdd ? a + b : a - b;
            const op = isAdd ? "+" : "−";
            const q = `Hitung dalam nombor bulat:\n${fmtJutaFrac(w * f.d + f.n, f.d)} ${op} ${fmtInt(b)} =`;
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [
                fmtInt(isAdd ? Math.abs(a - b) : a + b),
                fmtInt(ans + 100000),
                fmtInt(Math.abs(Math.round(a / 10) + (isAdd ? b : -b))),
                fmtInt(ans - 50000)
              ],
              `${fmtJutaFrac(w * f.d + f.n, f.d)} = ${fmtInt(a)}. Maka ${fmtInt(a)} ${op} ${fmtInt(b)} = ${fmtInt(ans)}.`,
              `${isAdd ? "add" : "sub"}:${a}:${b}`
            );
          } else {
            const isMul = pick(rng, [true, false]);
            if (isMul) {
              const unitDec = randInt(rng, 12, 85) / 100; // 0.12 .. 0.85 juta
              const k = randInt(rng, 3, 9);
              const ansJuta = Math.round(unitDec * k * 100) / 100;
              const q = `Hitung ${fmtJutaDec(unitDec)} × ${k} dalam perpuluhan juta.`;
              return buildMcq(
                rng, meta, q, fmtJutaDec(ansJuta),
                [
                  fmtJutaDec(ansJuta * 10),
                  fmtJutaDec(ansJuta / 10),
                  fmtJutaDec(ansJuta + 0.5),
                  fmtJutaDec(Math.max(0.1, ansJuta - 0.4))
                ],
                `${fmtDec(unitDec, 2)} juta × ${k} = ${fmtJutaDec(ansJuta)}.`,
                `mul:${unitDec}:${k}`
              );
            } else {
              const k = randInt(rng, 2, 8);
              const qJuta = randInt(rng, 15, 75) / 100; // 0.15 .. 0.75 juta
              const totalWhole = Math.round(qJuta * k * 1000000);
              const ansWhole = Math.round(qJuta * 1000000);
              const q = `Hitung ${fmtInt(totalWhole)} ÷ ${k} dalam nombor bulat.`;
              return buildMcq(
                rng, meta, q, fmtInt(ansWhole),
                [
                  fmtInt(ansWhole / 10),
                  fmtInt(ansWhole * 10),
                  fmtInt(ansWhole + 50000),
                  fmtInt(Math.round(totalWhole / (k + 1)))
                ],
                `${fmtInt(totalWhole)} ÷ ${k} = ${fmtInt(ansWhole)}.`,
                `div:${totalWhole}:${k}`
              );
            }
          }
        }
      },
      {
        type: "generator",
        id: "b1_s3_M",
        unit: "b1",
        skill: "b1_s3",
        diff: "M",
        templates: ["b1_s3_M_bodmas_no_bracket", "b1_s3_M_bodmas_bracket"],
        generate(seed) {
          const rng = makeRng("b1_s3_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s3", diff: "M", template: tpl };

          if (tpl === "b1_s3_M_bodmas_no_bracket") {
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 5 || x.d === 4 || x.d === 2));
            const w = randInt(rng, 1, 3);
            const a = Math.round((w + f.dec) * 100) / 100; // juta
            const div = pick(rng, [4, 5, 6, 7, 8]);
            const qPart = randInt(rng, 2, 9) / 10; // 0.2..0.9 juta
            const b = Math.round(qPart * div * 100) / 100;
            const ans = Math.round((a + qPart) * 1000) / 1000;
            const leftToRight = Math.round(((a + b) / div) * 1000) / 1000;
            const q = `Selesaikan mengikut tertib operasi:\n${fmtJutaFrac(w * f.d + f.n, f.d)} + ${fmtJutaDec(b)} ÷ ${div} =`;
            return buildMcq(
              rng, meta, q, fmtJutaDec(ans),
              [
                fmtJutaDec(leftToRight), // BODMAS mistake: + before ÷
                fmtJutaDec(ans + 0.5),
                fmtJutaDec(Math.max(0.1, ans - 0.3)),
                fmtJutaDec(a + b * div)
              ],
              `Selesaikan bahagi dahulu: ${fmtDec(b, 2)} juta ÷ ${div} = ${fmtDec(qPart, 2)} juta. Kemudian ${fmtDec(a, 2)} juta + ${fmtDec(qPart, 2)} juta = ${fmtJutaDec(ans)}.`,
              `nb:${a}:${b}:${div}`
            );
          } else {
            const div = pick(rng, [4, 5, 8, 10]);
            const baseQ = randInt(rng, 25, 85) / 100; // 0.25..0.85 juta
            const sumJuta = Math.round(baseQ * div * 100) / 100;
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 4 || x.d === 5));
            const w = randInt(rng, 1, 3);
            const fVal = w + f.dec;
            const other = Math.round((sumJuta - fVal) * 100) / 100;
            if (other > 0.2) {
              const ansWhole = Math.round(baseQ * 1000000);
              const noBracketWrong = Math.round((other + fVal / div) * 1000000);
              const q = `Hitung nilai dalam nombor bulat:\n(${fmtJutaDec(other)} + ${fmtJutaFrac(w * f.d + f.n, f.d)}) ÷ ${div} =`;
              return buildMcq(
                rng, meta, q, fmtInt(ansWhole),
                [
                  fmtInt(noBracketWrong),
                  fmtInt(ansWhole / 10),
                  fmtInt(Math.round((sumJuta * 1000000))),
                  fmtInt(ansWhole + 100000)
                ],
                `Kira dalam kurungan dahulu: ${fmtDec(other, 2)} juta + ${fmtDec(fVal, 2)} juta = ${fmtDec(sumJuta, 2)} juta. Bahagi ${div} = ${fmtInt(ansWhole)}.`,
                `br:${other}:${fVal}:${div}`
              );
            } else {
              const k = randInt(rng, 3, 6);
              const partB = fVal;
              const partA = Math.round((partB + randInt(rng, 4, 15) / 10) * 100) / 100;
              const diff = Math.round((partA - partB) * 100) / 100;
              const ansWhole = Math.round(diff * k * 1000000);
              const noBracketWrong = Math.round((partA * k - partB) * 1000000);
              const q = `Hitung nilai dalam nombor bulat:\n${k} × (${fmtJutaDec(partA)} − ${fmtJutaFrac(w * f.d + f.n, f.d)}) =`;
              return buildMcq(
                rng, meta, q, fmtInt(ansWhole),
                [
                  fmtInt(noBracketWrong),
                  fmtInt(Math.round((partA + partB) * k * 1000000)),
                  fmtInt(ansWhole / 10),
                  fmtInt(ansWhole + 250000)
                ],
                `Selesaikan dalam kurungan dahulu: ${fmtDec(partA, 2)} juta − ${fmtDec(partB, 2)} juta = ${fmtDec(diff, 2)} juta. Darab ${k} = ${fmtInt(ansWhole)}.`,
                `br2:${partA}:${partB}:${k}`
              );
            }
          }
        }
      },
      {
        type: "generator",
        id: "b1_s3_H",
        unit: "b1",
        skill: "b1_s3",
        diff: "H",
        templates: ["b1_s3_H_word_mixed", "b1_s3_H_complex_expr"],
        generate(seed) {
          const rng = makeRng("b1_s3_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s3", diff: "H", template: tpl };

          if (tpl === "b1_s3_H_word_mixed") {
            const companies = randInt(rng, 5, 9);
            const eachJuta = randInt(rng, 2, 8) / 10; // 0.2..0.8
            const newBatch = Math.round(eachJuta * companies * 100) / 100;
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 5 || x.d === 4));
            const w = randInt(rng, 1, 4);
            const initJuta = w + f.dec;
            const ansJuta = Math.round((initJuta + eachJuta) * 100) / 100;
            const q = `Syarikat Maju sedia ada menyimpan ${fmtJutaFrac(w * f.d + f.n, f.d)} keping jubin. Sebuah kilang kemudian mengagihkan ${fmtJutaDec(newBatch)} keping jubin secara sama banyak kepada Syarikat Maju dan ${companies - 1} buah syarikat lain. Berapakah jumlah jubin Syarikat Maju sekarang?`;
            return buildMcq(
              rng, meta, q, fmtJutaDec(ansJuta),
              [
                fmtJutaDec(Math.round(((initJuta + newBatch) / companies) * 100) / 100), // divided total
                fmtJutaDec(Math.round((initJuta + newBatch / (companies - 1)) * 100) / 100), // divided by n-1
                fmtJutaDec(Math.round((initJuta + newBatch) * 100) / 100), // forgot to divide
                fmtJutaDec(Math.round((ansJuta - 0.1) * 100) / 100)
              ],
              `Syarikat Maju ialah 1 daripada ${companies} syarikat: ${fmtDec(newBatch, 2)} juta ÷ ${companies} = ${fmtDec(eachJuta, 2)} juta. Jumlah = ${fmtDec(initJuta, 2)} juta + ${fmtDec(eachJuta, 2)} juta = ${fmtJutaDec(ansJuta)}.`,
              `wm:${initJuta}:${newBatch}:${companies}`
            );
          } else {
            const mul = pick(rng, [4, 5, 6]);
            const a = randInt(rng, 11, 24) / 10; // 1.1..2.4 juta
            const prod = Math.round(a * mul * 100) / 100;
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 4 || x.d === 8 || x.d === 5));
            const w = randInt(rng, 1, 3);
            const subVal = w + f.dec;
            const ans = Math.round((prod - subVal) * 1000) / 1000;
            const q = `Hitung dalam perpuluhan juta:\n${fmtJutaDec(a)} × ${mul} − ${fmtJutaFrac(w * f.d + f.n, f.d)} =`;
            const wrongOrder = Math.round(Math.abs(a * (mul - subVal)) * 1000) / 1000;
            return buildMcq(
              rng, meta, q, fmtJutaDec(ans),
              [
                fmtJutaDec(wrongOrder > 0 ? wrongOrder : ans + 1.25),
                fmtJutaDec(Math.round((prod + subVal) * 1000) / 1000),
                fmtJutaDec(Math.round((ans + 0.25) * 1000) / 1000),
                fmtJutaDec(Math.round((ans / 10) * 1000) / 1000)
              ],
              `Darab dahulu: ${fmtDec(a, 1)} juta × ${mul} = ${fmtDec(prod, 2)} juta. Kemudian tolak ${fmtDec(subVal, 3)} juta = ${fmtJutaDec(ans)}.`,
              `cx:${a}:${mul}:${subVal}`
            );
          }
        }
      },

      // ---------- b1_s4: Operasi Asas & Operasi Bergabung Melibatkan Anu ----------
      {
        type: "generator",
        id: "b1_s4_L",
        unit: "b1",
        skill: "b1_s4",
        diff: "L",
        templates: ["b1_s4_L_add_sub_anu", "b1_s4_L_mul_div_anu"],
        generate(seed) {
          const rng = makeRng("b1_s4_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s4", diff: "L", template: tpl };

          if (tpl === "b1_s4_L_add_sub_anu") {
            const form = pick(rng, ["x_minus_a", "a_minus_x", "x_plus_a"]);
            const x = randInt(rng, 12, 55) * 100000;
            const a = randInt(rng, 3, 10) * 100000;
            let q, ans, exp, wrong1;
            if (form === "x_minus_a") {
              const b = x - a;
              q = `Cari nilai y bagi ayat matematik berikut:\ny − ${fmtInt(a)} = ${fmtInt(b)}`;
              ans = x;
              wrong1 = Math.abs(b - a); // subtract instead of add
              exp = `y = ${fmtInt(b)} + ${fmtInt(a)} = ${fmtInt(ans)}.`;
            } else if (form === "a_minus_x") {
              const big = x + a;
              q = `Cari nilai p bagi ayat matematik berikut:\n${fmtInt(big)} − p = ${fmtInt(a)}`;
              ans = x;
              wrong1 = big + a; // add instead of subtract
              exp = `p = ${fmtInt(big)} − ${fmtInt(a)} = ${fmtInt(ans)}.`;
            } else {
              const b = x + a;
              q = `Cari nilai m bagi ayat matematik berikut:\n${fmtInt(a)} + m = ${fmtInt(b)}`;
              ans = x;
              wrong1 = b + a; // add instead of subtract
              exp = `m = ${fmtInt(b)} − ${fmtInt(a)} = ${fmtInt(ans)}.`;
            }
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [fmtInt(wrong1 || ans + 200000), fmtInt(ans / 10), fmtInt(ans + 100000), fmtInt(Math.max(100000, ans - 100000))],
              exp,
              `${form}:${x}:${a}`
            );
          } else {
            const isMul = pick(rng, [true, false]);
            if (isMul) {
              const k = randInt(rng, 3, 9);
              const h = randInt(rng, 15, 75) / 100; // juta
              const total = Math.round(k * h * 1000000);
              const q = `Cari nilai h dalam perpuluhan juta:\n${k} × h = ${fmtInt(total)}`;
              return buildMcq(
                rng, meta, q, fmtJutaDec(h),
                [
                  fmtJutaDec(h * 10),
                  fmtJutaDec((total * k) / 1000000),
                  fmtJutaDec(h + 0.2),
                  fmtJutaDec(h / 10)
                ],
                `h = ${fmtInt(total)} ÷ ${k} = ${fmtInt(Math.round(h * 1000000))} = ${fmtJutaDec(h)}.`,
                `mul:${k}:${h}`
              );
            } else {
              const k = randInt(rng, 3, 9);
              const qJuta = randInt(rng, 2, 9) / 100; // 0.02..0.09 juta
              const g = Math.round(qJuta * k * 100) / 100;
              const q = `Kira nilai g dalam nombor bulat:\ng ÷ ${k} = ${fmtJutaDec(qJuta)}`;
              const ans = Math.round(g * 1000000);
              return buildMcq(
                rng, meta, q, fmtInt(ans),
                [
                  fmtInt(ans / 10),
                  fmtInt(Math.round((qJuta / k) * 1000000)),
                  fmtInt(ans + 100000),
                  fmtInt(Math.round(qJuta * 1000000))
                ],
                `g = ${fmtDec(qJuta, 2)} juta × ${k} = ${fmtDec(g, 2)} juta = ${fmtInt(ans)}.`,
                `div:${k}:${qJuta}`
              );
            }
          }
        }
      },
      {
        type: "generator",
        id: "b1_s4_M",
        unit: "b1",
        skill: "b1_s4",
        diff: "M",
        templates: ["b1_s4_M_frac_dec_anu", "b1_s4_M_word_anu"],
        generate(seed) {
          const rng = makeRng("b1_s4_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s4", diff: "M", template: tpl };

          if (tpl === "b1_s4_M_frac_dec_anu") {
            const pairs = [
              { a: [1, 8], b: [3, 4], op: "-" },
              { a: [3, 8], b: [1, 2], op: "-" },
              { a: [1, 4], b: [3, 5], op: "+" },
              { a: [3, 10], b: [4, 5], op: "+" },
              { a: [2, 5], b: [3, 4], op: "-" }
            ];
            const p = pick(rng, pairs);
            const fa = { n: p.a[0], d: p.a[1] };
            const fb = { n: p.b[0], d: p.b[1] };
            if (p.op === "-") {
              // y - fa = fb => y = fb + fa
              const ansFrac = addFrac(fb, fa);
              const wrongSub = subFrac(fb, fa);
              const q = `Tentukan nilai y dalam pecahan juta:\ny − ${fmtJutaFrac(fa.n, fa.d)} = ${fmtJutaFrac(fb.n, fb.d)}`;
              return buildMcq(
                rng, meta, q, fmtJutaFrac(ansFrac.n, ansFrac.d),
                [
                  fmtJutaFrac(Math.abs(wrongSub.n), wrongSub.d),
                  fmtJutaFrac(fb.n + fa.n, fb.d + fa.d),
                  fmtJutaFrac(ansFrac.n + 1, ansFrac.d),
                  fmtJutaFrac(ansFrac.n, ansFrac.d * 2)
                ],
                `y = ${fmtFrac(fb.n, fb.d)} juta + ${fmtFrac(fa.n, fa.d)} juta = ${fmtJutaFrac(ansFrac.n, ansFrac.d)}.`,
                `sub:${fa.n}/${fa.d}:${fb.n}/${fb.d}`
              );
            } else {
              // fa + k = fb => k = fb - fa
              const ansFrac = subFrac(fb, fa);
              const wrongAdd = addFrac(fb, fa);
              const q = `Tentukan nilai k dalam pecahan juta:\n${fmtJutaFrac(fa.n, fa.d)} + k = ${fmtJutaFrac(fb.n, fb.d)}`;
              return buildMcq(
                rng, meta, q, fmtJutaFrac(ansFrac.n, ansFrac.d),
                [
                  fmtJutaFrac(wrongAdd.n, wrongAdd.d),
                  fmtJutaFrac(Math.abs(fb.n - fa.n) || 1, Math.abs(fb.d - fa.d) || 5),
                  fmtJutaFrac(ansFrac.n + 1, ansFrac.d),
                  fmtJutaFrac(fa.n, fb.d)
                ],
                `k = ${fmtFrac(fb.n, fb.d)} juta − ${fmtFrac(fa.n, fa.d)} juta = ${fmtJutaFrac(ansFrac.n, ansFrac.d)}.`,
                `add:${fa.n}/${fa.d}:${fb.n}/${fb.d}`
              );
            }
          } else {
            const sold = randInt(rng, 35, 95) / 100; // juta
            const left = randInt(rng, 45, 145) / 100; // juta
            const orig = Math.round((sold + left) * 100) / 100;
            const q = `Kilang B mempunyai w botol jus pada awal bulan. Setelah menjual ${fmtJutaDec(sold)} botol jus, baki yang tinggal ialah ${fmtInt(Math.round(left * 1000000))} botol. Cari nilai w dalam perpuluhan juta.`;
            const wrongSub = Math.round(Math.abs(left - sold) * 100) / 100;
            return buildMcq(
              rng, meta, q, fmtJutaDec(orig),
              [
                fmtJutaDec(wrongSub > 0 ? wrongSub : orig + 0.5),
                fmtJutaDec(orig * 10),
                fmtJutaDec(orig - 0.1),
                fmtJutaDec(sold + left / 10)
              ],
              `w − ${fmtDec(sold, 2)} juta = ${fmtDec(left, 2)} juta, maka w = ${fmtDec(left, 2)} juta + ${fmtDec(sold, 2)} juta = ${fmtJutaDec(orig)}.`,
              `wa:${sold}:${left}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s4_H",
        unit: "b1",
        skill: "b1_s4",
        diff: "H",
        templates: ["b1_s4_H_two_anu_diff", "b1_s4_H_bodmas_anu"],
        generate(seed) {
          const rng = makeRng("b1_s4_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s4", diff: "H", template: tpl };

          if (tpl === "b1_s4_H_two_anu_diff") {
            const a = randInt(rng, 45, 95) / 100;
            const b = randInt(rng, 115, 185) / 100;
            const x = Math.round((a + b) * 100) / 100;
            const cWhole = randInt(rng, 12, 18) * 100000;
            const d = randInt(rng, 25, 65) / 100;
            const y = Math.round((cWhole / 1000000 - d) * 100) / 100;
            const ans = Math.round((x - y) * 100) / 100;
            const q = `Diberi x − ${fmtJutaDec(a)} = ${fmtJutaDec(b)} dan ${fmtInt(cWhole)} − y = ${fmtJutaDec(d)}.\nCari nilai x − y dalam perpuluhan juta.`;
            const w1 = Math.round((x + y) * 100) / 100;
            const w2 = Math.round(Math.abs((b - a) - y) * 100) / 100;
            const w3 = Math.round((x - (cWhole / 1000000 + d)) * 100) / 100;
            return buildMcq(
              rng, meta, q, fmtJutaDec(ans),
              [
                fmtJutaDec(w1),
                fmtJutaDec(w2 > 0 ? w2 : ans + 0.5),
                fmtJutaDec(w3 > 0 ? w3 : ans + 0.8),
                fmtJutaDec(ans + 0.4)
              ],
              `x = ${fmtDec(b, 2)} + ${fmtDec(a, 2)} = ${fmtDec(x, 2)} juta. y = ${fmtDec(cWhole / 1000000, 2)} − ${fmtDec(d, 2)} = ${fmtDec(y, 2)} juta. Maka x − y = ${fmtJutaDec(ans)}.`,
              `two:${a}:${b}:${cWhole}:${d}`
            );
          } else {
            const k = randInt(rng, 3, 7);
            const p = randInt(rng, 15, 45) / 100; // juta
            const a = randInt(rng, 4, 15) / 10; // juta
            const total = Math.round((a + k * p) * 100) / 100;
            const q = `Cari nilai p dalam nombor bulat bagi persamaan:\n${fmtJutaDec(a)} + ${k} × p = ${fmtJutaDec(total)}`;
            const ans = Math.round(p * 1000000);
            const wrongOrder = Math.round(((total - a) * k) * 1000000);
            const wrongAdd = Math.round(((total + a) / k) * 1000000);
            return buildMcq(
              rng, meta, q, fmtInt(ans),
              [
                fmtInt(wrongOrder),
                fmtInt(wrongAdd),
                fmtInt(ans / 10),
                fmtInt(Math.round((total - a) * 1000000))
              ],
              `${k} × p = ${fmtDec(total, 2)} juta − ${fmtDec(a, 1)} juta = ${fmtDec(total - a, 2)} juta. Maka p = ${fmtInt(Math.round((total - a) * 1000000))} ÷ ${k} = ${fmtInt(ans)}.`,
              `ba:${a}:${k}:${p}`
            );
          }
        }
      },

      // ---------- b1_s5: Nombor Perdana, Nombor Gubahan dan Penyelesaian Masalah ----------
      {
        type: "generator",
        id: "b1_s5_L",
        unit: "b1",
        skill: "b1_s5",
        diff: "L",
        templates: ["b1_s5_L_classify_prime_comp", "b1_s5_L_range_count"],
        generate(seed) {
          const rng = makeRng("b1_s5_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s5", diff: "L", template: tpl };

          if (tpl === "b1_s5_L_classify_prime_comp") {
            const askPrime = pick(rng, [true, false]);
            if (askPrime) {
              const ans = pick(rng, [2, 19, 29, 37, 47, 53, 61, 73, 83, 97]);
              const traps = shuffle(rng, [1, 9, 15, 21, 27, 51, 57, 87, 91]).slice(0, 4);
              const wrongs = traps.filter(x => x !== ans).slice(0, 3);
              const q = `Antara nombor berikut, yang manakah merupakan nombor perdana?`;
              return buildMcq(
                rng, meta, q, String(ans),
                wrongs.map(String),
                `${ans} hanya boleh dibahagi dengan 1 dan dirinya sendiri. Nombor 1 bukan nombor perdana, manakala nombor lain boleh dibahagi dengan faktor selain 1 dan dirinya sendiri.`,
                `p:${ans}`
              );
            } else {
              const ans = pick(rng, [9, 15, 21, 51, 57, 87, 91]);
              const primes = shuffle(rng, [2, 17, 29, 43, 53, 59, 71, 83]).slice(0, 3);
              const q = `Antara nombor berikut, yang manakah ialah nombor gubahan?`;
              const divHint = ans % 3 === 0 ? 3 : 7;
              return buildMcq(
                rng, meta, q, String(ans),
                primes.map(String),
                `${ans} ialah nombor gubahan kerana boleh dibahagi tepat dengan ${divHint} (${ans} ÷ ${divHint} = ${ans / divHint}) selain 1 dan ${ans}.`,
                `c:${ans}`
              );
            }
          } else {
            const start = pick(rng, [1, 10, 20, 35, 50, 70]);
            const end = start + pick(rng, [12, 14, 15]);
            const askPrime = pick(rng, [true, false]);
            const primes = [];
            const comps = [];
            for (let n = start; n <= end; n++) {
              if (n <= 1) continue;
              if (PRIME_SET.has(n)) primes.push(n);
              else comps.push(n);
            }
            const ansList = askPrime ? primes : comps;
            const ans = ansList.length;
            const typeLabel = askPrime ? "nombor perdana" : "nombor gubahan";
            const q = `Berapakah bilangan ${typeLabel} yang terdapat dari ${start} hingga ${end}?`;
            return buildMcq(
              rng, meta, q, String(ans),
              [String(ans + 1), String(Math.max(1, ans - 1)), String(ans + 2), String(Math.max(2, ans - 2))],
              `Senarai ${typeLabel} dari ${start} hingga ${end} ialah ${ansList.join(", ")}, iaitu sebanyak ${ans} nombor.`,
              `cnt:${start}:${end}:${askPrime ? "p" : "c"}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s5_M",
        unit: "b1",
        skill: "b1_s5",
        diff: "M",
        templates: ["b1_s5_M_comp_reason_sum", "b1_s5_M_word_solve_1"],
        generate(seed) {
          const rng = makeRng("b1_s5_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s5", diff: "M", template: tpl };

          if (tpl === "b1_s5_M_comp_reason_sum") {
            const groups = [
              { nums: [51, 53, 57, 59], comps: [51, 57], primes: [53, 59] },
              { nums: [1, 2, 9, 11, 21], comps: [9, 21], primes: [2, 11] },
              { nums: [13, 27, 29, 39, 41], comps: [27, 39], primes: [13, 29, 41] },
              { nums: [71, 87, 89, 91, 97], comps: [87, 91], primes: [71, 89, 97] }
            ];
            const g = pick(rng, groups);
            const askComp = pick(rng, [true, false]);
            const target = askComp ? g.comps : g.primes;
            const ans = target.reduce((s, x) => s + x, 0);
            const label = askComp ? "nombor gubahan" : "nombor perdana";
            const q = `Diberi senarai nombor: ${g.nums.join(", ")}.\nHitung jumlah semua ${label} dalam senarai tersebut.`;
            return buildMcq(
              rng, meta, q, String(ans),
              [
                String(ans + (askComp ? 1 : g.nums.includes(1) ? 1 : 9)),
                String(g.comps.reduce((s, x) => s + x, 0) + (askComp ? g.primes[0] : 0)),
                String(Math.max(2, ans - target[0])),
                String(g.nums.reduce((s, x) => s + x, 0) - ans)
              ],
              `${label[0].toUpperCase() + label.slice(1)} dalam senarai ialah ${target.join(" dan ")}. Jumlah = ${target.join(" + ")} = ${ans}.`,
              `sum:${g.nums.join("-")}:${askComp ? "c" : "p"}`
            );
          } else {
            const f = pick(rng, FRAC_MIL_LIST.filter(x => x.d === 4 || x.d === 5));
            const w = randInt(rng, 1, 3);
            const jan = Math.round((w + f.dec) * 1000000);
            const diff = randInt(rng, 2, 7) * 100000 + 50000;
            const feb = jan + diff;
            const total = jan + feb;
            const q = `Pada bulan Januari, sebuah kilang mencetak ${fmtJutaFrac(w * f.d + f.n, f.d)} risalah. Pada bulan Februari, bilangannya adalah ${fmtInt(diff)} lebih banyak daripada bulan Januari. Hitung jumlah risalah yang dicetak dalam kedua-dua bulan itu.`;
            return buildMcq(
              rng, meta, q, fmtInt(total),
              [
                fmtInt(feb), // forgot to add jan
                fmtInt(jan + (jan - diff)),
                fmtInt(total + diff),
                fmtInt(Math.round(total / 10))
              ],
              `Januari = ${fmtInt(jan)}. Februari = ${fmtInt(jan)} + ${fmtInt(diff)} = ${fmtInt(feb)}. Jumlah = ${fmtInt(jan)} + ${fmtInt(feb)} = ${fmtInt(total)}.`,
              `ws1:${jan}:${diff}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b1_s5_H",
        unit: "b1",
        skill: "b1_s5",
        diff: "H",
        templates: ["b1_s5_H_word_solve_multi", "b1_s5_H_prime_comp_puzzle"],
        generate(seed) {
          const rng = makeRng("b1_s5_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b1", skill: "b1_s5", diff: "H", template: tpl };

          if (tpl === "b1_s5_H_word_solve_multi") {
            const date = pick(rng, SAMPLE_DATES);
            const packsPerBox = pick(rng, [25, 40, 50, 80]);
            const boxes = randInt(rng, 12, 35) * 1000;
            const totalItems = boxes * packsPerBox;
            const f = pick(rng, [
              { w: 0, n: 1, d: 2, dec: 0.5 },
              { w: 0, n: 1, d: 4, dec: 0.25 },
              { w: 0, n: 3, d: 4, dec: 0.75 },
              { w: 0, n: 2, d: 5, dec: 0.4 }
            ]);
            const partA = Math.round(f.dec * 1000000);
            if (totalItems > partA + 100000) {
              const partB = totalItems - partA;
              const partBJuta = partB / 1000000;
              const q = `Sejak ${date}, dua buah mesin menghasilkan penutup botol untuk dibungkus ke dalam kotak berisi ${packsPerBox} penutup setiap kotak. Mesin A menghasilkan ${fmtJutaFrac(f.n, f.d)} penutup dan Mesin B menghasilkan ${fmtJutaDec(partBJuta)} penutup. Berapakah bilangan kotak penuh yang dapat disediakan?`;
              return buildMcq(
                rng, meta, q, fmtInt(boxes),
                [
                  fmtInt(boxes * 10),
                  fmtInt(Math.round(partB / packsPerBox)),
                  fmtInt(boxes + 1000),
                  fmtInt(Math.round(totalItems / (packsPerBox + 10)))
                ],
                `Jumlah penutup = ${fmtInt(partA)} + ${fmtInt(partB)} = ${fmtInt(totalItems)}. Bilangan kotak = ${fmtInt(totalItems)} ÷ ${packsPerBox} = ${fmtInt(boxes)}.`,
                `wsm:${totalItems}:${packsPerBox}`
              );
            } else {
              const p1 = 1250000;
              const p2 = 1750000;
              const tot = p1 + p2;
              const bx = tot / packsPerBox;
              const q = `Pada ${date}, Kilang X mengeluarkan 1 1/4 juta pek kopi dan 1.75 juta pek teh. Semua pek itu dimasukkan sama banyak ke dalam kotak berisi ${packsPerBox} pek setiap satu. Berapakah jumlah kotak yang diperlukan?`;
              return buildMcq(
                rng, meta, q, fmtInt(bx),
                [
                  fmtInt(bx / 10),
                  fmtInt(p2 / packsPerBox),
                  fmtInt(bx + 5000),
                  fmtInt(tot / 100)
                ],
                `Jumlah pek = 1 250 000 + 1 750 000 = 3 000 000. Bilangan kotak = 3 000 000 ÷ ${packsPerBox} = ${fmtInt(bx)}.`,
                `wsm2:${packsPerBox}`
              );
            }
          } else {
            const pairs = [
              { p: 2, c: 91, reason: "2 ialah satu-satunya nombor perdana genap dan 91 = 7 × 13 ialah nombor gubahan" },
              { p: 53, c: 51, reason: "53 ialah nombor perdana manakala 51 = 3 × 17 ialah nombor gubahan" },
              { p: 59, c: 57, reason: "59 ialah nombor perdana manakala 57 = 3 × 19 ialah nombor gubahan" },
              { p: 89, c: 87, reason: "89 ialah nombor perdana manakala 87 = 3 × 29 ialah nombor gubahan" }
            ];
            const item = pick(rng, pairs);
            const askDiff = pick(rng, [true, false]);
            const ans = askDiff ? Math.abs(item.c - item.p) : item.c + item.p;
            const q = askDiff
              ? `Antara nombor 1, ${item.p} dan ${item.c}, cari beza antara nombor gubahan dengan nombor perdana.`
              : `Antara nombor 1, ${item.p} dan ${item.c}, cari hasil tambah nombor perdana dan nombor gubahan.`;
            return buildMcq(
              rng, meta, q, String(ans),
              [
                String(askDiff ? item.c - 1 : item.p + 1),
                String(askDiff ? item.p - 1 : item.c + 1),
                String(1 + item.p + item.c),
                String(ans + 2)
              ],
              `Nombor 1 bukan perdana dan bukan gubahan. ${item.reason}. Maka jawapannya ialah ${ans}.`,
              `pcp:${item.p}:${item.c}:${askDiff ? "d" : "s"}`
            );
          }
        }
      },

      // ---------- b2_s1: Bahagi Pecahan (Pecahan Wajar & Nombor Bercampur) ----------
      {
        type: "generator",
        id: "b2_s1_L",
        unit: "b2",
        skill: "b2_s1",
        diff: "L",
        templates: ["b2_s1_L_prop_by_whole", "b2_s1_L_prop_by_prop"],
        generate(seed) {
          const rng = makeRng("b2_s1_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s1", diff: "L", template: tpl };

          if (tpl === "b2_s1_L_prop_by_whole") {
            const propPool = [];
            for (const dd of [3, 4, 5, 6, 7, 8, 9, 10]) {
              for (let nn = 1; nn < dd; nn++) {
                if (gcd(nn, dd) === 1) propPool.push({ n: nn, d: dd });
              }
            }
            const c = pick(rng, propPool);
            const k = randInt(rng, 2, 10);
            const ansF = simpFrac(c.n, c.d * k);
            const ans = fmtFrac(ansF.n, ansF.d);
            const wrongMul = simpFrac(c.n * k, c.d);
            const wrongInvFirst = simpFrac(c.d * k, c.n);
            const q = `Hitung dalam bentuk termudah:\n${c.n}/${c.d} ÷ ${k} =`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(wrongMul.n, wrongMul.d),
                fmtFrac(wrongInvFirst.n, wrongInvFirst.d),
                fmtFrac(simpFrac(c.n, c.d + k).n, simpFrac(c.n, c.d + k).d),
                fmtFrac(simpFrac(c.n + 1, c.d * k).n, simpFrac(c.n + 1, c.d * k).d)
              ],
              `${c.n}/${c.d} ÷ ${k}/1 = ${c.n}/${c.d} × 1/${k} = ${ans}.`,
              `pw:${c.n}/${c.d}:${k}`
            );
          } else {
            const baseFracs = [
              [1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5],
              [1, 6], [5, 6], [1, 8], [3, 8], [5, 8], [7, 8], [1, 9], [2, 9], [4, 9],
              [1, 10], [3, 10], [7, 10], [9, 10]
            ];
            let f1 = { n: 3, d: 4 };
            let f2 = { n: 2, d: 3 };
            let ansF = divFrac(f1, f2);
            for (let t = 0; t < 40; t++) {
              const p1 = pick(rng, baseFracs);
              const p2 = pick(rng, baseFracs);
              if (p1[0] === p2[0] && p1[1] === p2[1]) continue;
              const cf1 = { n: p1[0], d: p1[1] };
              const cf2 = { n: p2[0], d: p2[1] };
              const cand = divFrac(cf1, cf2);
              if (cand.d <= 12 && cand.n <= 24) {
                f1 = cf1;
                f2 = cf2;
                ansF = cand;
                break;
              }
            }
            const ans = fmtFrac(ansF.n, ansF.d);
            const noInv = mulFrac(f1, f2);
            const invFirst = divFrac(f2, f1);
            const q = `Hitung dalam bentuk termudah:\n${f1.n}/${f1.d} ÷ ${f2.n}/${f2.d} =`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(noInv.n, noInv.d),
                fmtFrac(invFirst.n, invFirst.d),
                fmtFrac(simpFrac(ansF.n + 1, ansF.d).n, simpFrac(ansF.n + 1, ansF.d).d),
                fmtFrac(simpFrac(f1.n + f2.n, f1.d + f2.d).n, simpFrac(f1.n + f2.n, f1.d + f2.d).d)
              ],
              `${f1.n}/${f1.d} ÷ ${f2.n}/${f2.d} = ${f1.n}/${f1.d} × ${f2.d}/${f2.n} = ${ans}.`,
              `pp:${f1.n}/${f1.d}:${f2.n}/${f2.d}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s1_M",
        unit: "b2",
        skill: "b2_s1",
        diff: "M",
        templates: ["b2_s1_M_mixed_by_whole", "b2_s1_M_mixed_by_prop"],
        generate(seed) {
          const rng = makeRng("b2_s1_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s1", diff: "M", template: tpl };

          if (tpl === "b2_s1_M_mixed_by_whole") {
            const w = randInt(rng, 1, 6);
            const [n, d] = pick(rng, [
              [1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6], [3, 8], [5, 8]
            ]);
            const k = randInt(rng, 2, 9);
            const impN = w * d + n;
            const ansF = simpFrac(impN, d * k);
            const ans = fmtFrac(ansF.n, ansF.d);
            const wrongNoConvert = simpFrac(w * d * k + n, d * k); // kept whole part untouched
            const wrongMul = simpFrac(impN * k, d);
            const q = `Selesaikan dalam bentuk termudah:\n${w} ${n}/${d} ÷ ${k} =`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(wrongNoConvert.n, wrongNoConvert.d),
                fmtFrac(wrongMul.n, wrongMul.d),
                fmtFrac(simpFrac(ansF.d, ansF.n).n, simpFrac(ansF.d, ansF.n).d),
                fmtFrac(simpFrac(w + n, d * k).n, simpFrac(w + n, d * k).d)
              ],
              `Tukar kepada pecahan tak wajar: ${impN}/${d} ÷ ${k} = ${impN}/${d} × 1/${k} = ${ans}.`,
              `mw:${w}:${n}/${d}:${k}`
            );
          } else {
            const smallProps = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6], [1, 8], [3, 8], [5, 8]];
            let w = 2, p1 = [1, 2], p2 = [1, 4];
            for (let t = 0; t < 40; t++) {
              const cw = randInt(rng, 1, 6);
              const cp1 = pick(rng, smallProps);
              const cp2 = pick(rng, smallProps);
              const cand = divFrac({ n: cw * cp1[1] + cp1[0], d: cp1[1] }, { n: cp2[0], d: cp2[1] });
              if (cand.d <= 12) {
                w = cw;
                p1 = cp1;
                p2 = cp2;
                break;
              }
            }
            const c = { w, n1: p1[0], d1: p1[1], n2: p2[0], d2: p2[1] };
            const impN = c.w * c.d1 + c.n1;
            const f1 = { n: impN, d: c.d1 };
            const f2 = { n: c.n2, d: c.d2 };
            const ansF = divFrac(f1, f2);
            const ans = fmtFrac(ansF.n, ansF.d);
            const noInv = mulFrac(f1, f2);
            const invFirst = divFrac(f2, f1);
            const item = pick(rng, ["tepung", "gula", "beras", "kacang hijau"]);
            const q = `Ada berapa bahagian ${c.n2}/${c.d2} kg di dalam ${c.w} ${c.n1}/${c.d1} kg ${item}?`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(noInv.n, noInv.d),
                fmtFrac(invFirst.n, invFirst.d),
                fmtFrac(simpFrac(ansF.n + 1, ansF.d).n, simpFrac(ansF.n + 1, ansF.d).d),
                fmtFrac(simpFrac(c.w * c.d2, c.n2).n, simpFrac(c.w * c.d2, c.n2).d)
              ],
              `${c.w} ${c.n1}/${c.d1} ÷ ${c.n2}/${c.d2} = ${impN}/${c.d1} × ${c.d2}/${c.n2} = ${ans}.`,
              `mp:${c.w}:${c.n1}/${c.d1}:${c.n2}/${c.d2}:${item}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s1_H",
        unit: "b2",
        skill: "b2_s1",
        diff: "H",
        templates: ["b2_s1_H_mixed_by_mixed", "b2_s1_H_word_division"],
        generate(seed) {
          const rng = makeRng("b2_s1_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s1", diff: "H", template: tpl };

          if (tpl === "b2_s1_H_mixed_by_mixed") {
            const props = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6], [3, 8]];
            let w1 = 3, w2 = 1, p1 = [1, 2], p2 = [1, 4];
            for (let t = 0; t < 40; t++) {
              const cw2 = randInt(rng, 1, 3);
              const cw1 = cw2 + randInt(rng, 1, 4);
              const cp1 = pick(rng, props);
              const cp2 = pick(rng, props);
              const cand = divFrac(
                { n: cw1 * cp1[1] + cp1[0], d: cp1[1] },
                { n: cw2 * cp2[1] + cp2[0], d: cp2[1] }
              );
              if (cand.d <= 12) {
                w1 = cw1;
                w2 = cw2;
                p1 = cp1;
                p2 = cp2;
                break;
              }
            }
            const c = { w1, n1: p1[0], d1: p1[1], w2, n2: p2[0], d2: p2[1] };
            const f1 = { n: c.w1 * c.d1 + c.n1, d: c.d1 };
            const f2 = { n: c.w2 * c.d2 + c.n2, d: c.d2 };
            const ansF = divFrac(f1, f2);
            const ans = fmtFrac(ansF.n, ansF.d);
            const noInv = mulFrac(f1, f2);
            const wrongSplit = simpFrac(c.w1 * c.d1 * c.n2 + c.w2 * c.n1 * c.d2, c.w2 * c.d1 * c.n2);
            const q = `Hitung dalam bentuk termudah:\n${c.w1} ${c.n1}/${c.d1} ÷ ${c.w2} ${c.n2}/${c.d2} =`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(noInv.n, noInv.d),
                fmtFrac(wrongSplit.n, wrongSplit.d),
                fmtFrac(simpFrac(ansF.n + 1, ansF.d).n, simpFrac(ansF.n + 1, ansF.d).d),
                fmtFrac(simpFrac(f2.n * f1.d, f2.d * f1.n).n, simpFrac(f2.n * f1.d, f2.d * f1.n).d)
              ],
              `${c.w1} ${c.n1}/${c.d1} ÷ ${c.w2} ${c.n2}/${c.d2} = ${f1.n}/${f1.d} × ${f2.d}/${f2.n} = ${ans}.`,
              `mm:${f1.n}/${f1.d}:${f2.n}/${f2.d}`
            );
          } else {
            const pieces = [
              [1, 1, 2], [1, 1, 4], [1, 3, 4], [1, 1, 5], [1, 2, 5],
              [1, 3, 5], [1, 1, 8], [1, 3, 8], [2, 1, 4], [2, 1, 2]
            ];
            let piece = [1, 3, 8];
            let tot = [5, 1, 2];
            for (let t = 0; t < 40; t++) {
              const ca = randInt(rng, 2, 6);
              const cp = pick(rng, pieces);
              const pNum = cp[0] * cp[2] + cp[1];
              const prod = simpFrac(ca * pNum, cp[2]);
              if (prod.d > 1 && prod.n > prod.d) {
                piece = cp;
                tot = [Math.floor(prod.n / prod.d), prod.n % prod.d, prod.d];
                break;
              }
            }
            const ctxObj = pick(rng, [
              { unit: "m", item: "reben" },
              { unit: "ℓ", item: "air sirap" },
              { unit: "kg", item: "gula" },
              { unit: "ℓ", item: "susu segar" },
              { unit: "m", item: "tali" }
            ]);
            const person = pick(rng, ["Puan Aina", "Encik Faizal", "Puan Mei Ling", "Cikgu Kavitha"]);
            const c = { total: tot, piece, unit: ctxObj.unit, item: ctxObj.item };
            const f1 = { n: c.total[0] * c.total[2] + c.total[1], d: c.total[2] };
            const f2 = { n: c.piece[0] * c.piece[2] + c.piece[1], d: c.piece[2] };
            const ansF = divFrac(f1, f2);
            const ans = fmtFrac(ansF.n, ansF.d);
            const q = `${person} mempunyai ${c.total[0]} ${c.total[1]}/${c.total[2]} ${c.unit} ${c.item}. Beliau membahagikannya kepada beberapa bahagian yang sama, setiap satu berukuran ${c.piece[0]} ${c.piece[1]}/${c.piece[2]} ${c.unit}. Berapakah bilangan bahagian yang diperoleh?`;
            return buildMcq(
              rng, meta, q, ans,
              [
                fmtFrac(mulFrac(f1, f2).n, mulFrac(f1, f2).d),
                fmtFrac(simpFrac(ansF.n + 1, ansF.d).n, simpFrac(ansF.n + 1, ansF.d).d),
                fmtFrac(simpFrac(Math.max(1, ansF.n - 1), ansF.d).n, simpFrac(Math.max(1, ansF.n - 1), ansF.d).d),
                fmtFrac(divFrac(f2, f1).n, divFrac(f2, f1).d)
              ],
              `${c.total[0]} ${c.total[1]}/${c.total[2]} ÷ ${c.piece[0]} ${c.piece[1]}/${c.piece[2]} = ${f1.n}/${f1.d} × ${f2.d}/${f2.n} = ${ans}.`,
              `wd:${f1.n}/${f1.d}:${f2.n}/${f2.d}`
            );
          }
        }
      },

      // ---------- b2_s2: Darab dan Bahagi Perpuluhan ----------
      {
        type: "generator",
        id: "b2_s2_L",
        unit: "b2",
        skill: "b2_s2",
        diff: "L",
        templates: ["b2_s2_L_mul_simple", "b2_s2_L_div_simple"],
        generate(seed) {
          const rng = makeRng("b2_s2_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s2", diff: "L", template: tpl };

          if (tpl === "b2_s2_L_mul_simple") {
            const a10 = randInt(rng, 2, 9);
            const b10 = randInt(rng, 2, 9);
            const a = a10 / 10;
            const b = b10 / 10;
            const prod100 = a10 * b10;
            const ans = prod100 / 100;
            const q = `Hitung: ${fmtDec(a, 1)} × ${fmtDec(b, 1)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(ans, 2),
              [
                fmtDec(prod100 / 10, 2), // 1 dp slip
                fmtDec(prod100 / 1000, 3), // 3 dp slip
                fmtDec(ans + 0.1, 2),
                fmtDec(prod100, 0)
              ],
              `${fmtDec(a, 1)} (1 tempat perpuluhan) × ${fmtDec(b, 1)} (1 tempat perpuluhan) menghasilkan 2 tempat perpuluhan = ${fmtDec(ans, 2)}.`,
              `ms:${a10}:${b10}`
            );
          } else {
            const b10 = randInt(rng, 2, 9);
            const qVal = randInt(rng, 2, 9);
            const a10 = b10 * qVal;
            const a = a10 / 10;
            const b = b10 / 10;
            const q = `Hitung: ${fmtDec(a, 1)} ÷ ${fmtDec(b, 1)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(qVal, 1),
              [
                fmtDec(qVal / 10, 2), // forgot to shift dividend
                fmtDec(qVal * 10, 0),
                fmtDec(qVal + 1, 0),
                fmtDec((a10 * b10) / 100, 2)
              ],
              `Gerakkan titik perpuluhan 1 tempat ke kanan pada kedua-dua nombor: ${a10} ÷ ${b10} = ${qVal}.`,
              `ds:${a10}:${b10}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s2_M",
        unit: "b2",
        skill: "b2_s2",
        diff: "M",
        templates: ["b2_s2_M_mul_2dp", "b2_s2_M_div_decimal"],
        generate(seed) {
          const rng = makeRng("b2_s2_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s2", diff: "M", template: tpl };

          if (tpl === "b2_s2_M_mul_2dp") {
            const a100 = randInt(rng, 125, 895);
            const b10 = randInt(rng, 12, 49);
            const a = a100 / 100;
            const b = b10 / 10;
            const prod1000 = a100 * b10;
            const ans = prod1000 / 1000;
            const q = `Cari hasil darab:\n${fmtDec(a, 2)} × ${fmtDec(b, 1)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(ans, 3),
              [
                fmtDec(prod1000 / 100, 3),
                fmtDec(prod1000 / 10000, 4),
                fmtDec(ans + 1, 3),
                fmtDec(Math.max(0.1, ans - 0.5), 3)
              ],
              `Jumlah tempat perpuluhan ialah 2 + 1 = 3. ${a100} × ${b10} = ${prod1000}, jadi jawapannya ialah ${fmtDec(ans, 3)}.`,
              `m2:${a100}:${b10}`
            );
          } else {
            const b100 = pick(rng, [4, 5, 6, 8, 12, 15, 25, 40, 80, 120]); // 0.04..1.20
            const q100 = randInt(rng, 125, 850); // 1.25..8.50
            const a10000 = b100 * q100;
            const a = a10000 / 10000;
            const b = b100 / 100;
            const ans = q100 / 100;
            const q = `Hitung:\n${fmtDec(a, 4)} ÷ ${fmtDec(b, 2)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(ans, 2),
              [
                fmtDec(ans / 10, 3),
                fmtDec(ans * 10, 2),
                fmtDec(ans + 0.5, 2),
                fmtDec(Math.max(0.1, ans - 0.4), 2)
              ],
              `Gerakkan titik perpuluhan 2 tempat ke kanan supaya pembahagi menjadi nombor bulat: ${fmtDec(a * 100, 2)} ÷ ${b100} = ${fmtDec(ans, 2)}.`,
              `dd:${a10000}:${b100}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s2_H",
        unit: "b2",
        skill: "b2_s2",
        diff: "H",
        templates: ["b2_s2_H_word_mul_area_cost", "b2_s2_H_word_div_step"],
        generate(seed) {
          const rng = makeRng("b2_s2_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s2", diff: "H", template: tpl };

          if (tpl === "b2_s2_H_word_mul_area_cost") {
            const mass10 = randInt(rng, 14, 48); // 1.4..4.8 kg
            const price10 = randInt(rng, 65, 185); // RM 6.50..18.50
            const mass = mass10 / 10;
            const price = price10 / 10;
            const cost = (mass10 * price10) / 100;
            const q = `Puan Salma membeli ${fmtDec(mass, 1)} kg ikan siakap dengan harga ${fmtRM(price)} sekilogram. Berapakah jumlah bayaran yang perlu dijelaskan oleh beliau?`;
            return buildMcq(
              rng, meta, q, fmtRM(cost),
              [
                fmtRM(cost * 10),
                fmtRM(cost / 10),
                fmtRM(cost + price),
                fmtRM(Math.max(1, cost - mass))
              ],
              `Jumlah bayaran = ${fmtDec(mass, 1)} × ${fmtRM(price)} = ${fmtRM(cost)}.`,
              `wc:${mass10}:${price10}`
            );
          } else {
            const cap100 = pick(rng, [35, 45, 60, 75, 85, 125]); // 0.35..1.25 l
            const bottles = randInt(rng, 12, 36);
            const total100 = cap100 * bottles;
            const totalL = total100 / 100;
            const capL = cap100 / 100;
            const q = `Sebanyak ${fmtDec(totalL, 2)} ℓ minyak masak diisi sama banyak ke dalam beberapa buah botol berkapasiti ${fmtDec(capL, 2)} ℓ setiap satu. Berapakah bilangan botol yang diisi penuh?`;
            return buildMcq(
              rng, meta, q, String(bottles),
              [
                fmtDec(bottles / 10, 1),
                String(bottles * 10),
                String(bottles + 4),
                String(Math.max(2, bottles - 3))
              ],
              `Bilangan botol = ${fmtDec(totalL, 2)} ÷ ${fmtDec(capL, 2)} = ${total100} ÷ ${cap100} = ${bottles}.`,
              `wd:${total100}:${cap100}`
            );
          }
        }
      },

      // ---------- b2_s3: Penukaran Perpuluhan & Peratus serta Tambah & Tolak Peratus ----------
      {
        type: "generator",
        id: "b2_s3_L",
        unit: "b2",
        skill: "b2_s3",
        diff: "L",
        templates: ["b2_s3_L_dec_to_pct", "b2_s3_L_pct_to_dec"],
        generate(seed) {
          const rng = makeRng("b2_s3_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s3", diff: "L", template: tpl };

          if (tpl === "b2_s3_L_dec_to_pct") {
            let val100 = randInt(rng, 4, 150) * 5;
            if (val100 % 100 === 0) val100 += 25;
            const dec = val100 / 100;
            const q = `Tukarkan ${fmtDec(dec, 2)} kepada peratus.`;
            return buildMcq(
              rng, meta, q, `${val100}%`,
              [
                `${fmtDec(val100 / 10, 1)}%`,
                `${val100 * 10}%`,
                `${fmtDec(dec, 2)}%`,
                `${val100 + 10}%`
              ],
              `${fmtDec(dec, 2)} × 100% = ${val100}%.`,
              `dp:${val100}`
            );
          } else {
            let pct = randInt(rng, 4, 180) * 5;
            if (pct % 100 === 0) pct += 15;
            const ans = pct / 100;
            const q = `Nyatakan ${pct}% dalam bentuk perpuluhan.`;
            return buildMcq(
              rng, meta, q, fmtDec(ans, 2),
              [
                fmtDec(pct / 10, 2),
                fmtDec(pct / 1000, 3),
                fmtDec(ans + 1, 2),
                fmtDec(Math.max(0.05, ans - 0.1), 2)
              ],
              `${pct}% = ${pct}/100 = ${pct} ÷ 100 = ${fmtDec(ans, 2)}.`,
              `pd:${pct}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s3_M",
        unit: "b2",
        skill: "b2_s3",
        diff: "M",
        templates: ["b2_s3_M_add_sub_pct", "b2_s3_M_conv_compare"],
        generate(seed) {
          const rng = makeRng("b2_s3_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s3", diff: "M", template: tpl };

          if (tpl === "b2_s3_M_add_sub_pct") {
            const a = randInt(rng, 65, 420);
            const b = randInt(rng, 15, 45);
            const c = randInt(rng, 6, 19);
            const ans = a - b - c;
            const wrongBracket = a - (b - c); // 67 - (18 - 9) = 58
            const q = `Hitung: ${a}% − ${b}% − ${c}% =`;
            return buildMcq(
              rng, meta, q, `${ans}%`,
              [
                `${wrongBracket}%`,
                `${a - b + c}%`,
                `${ans + 10}%`,
                `${Math.max(1, ans - 5)}%`
              ],
              `Kira dari kiri ke kanan: ${a}% − ${b}% = ${a - b}%. Kemudian ${a - b}% − ${c}% = ${ans}%.`,
              `asp:${a}:${b}:${c}`
            );
          } else {
            const dec = pick(rng, [1.25, 1.45, 1.8, 2.15, 2.35]);
            const pct2 = pick(rng, [85, 95, 110, 120]);
            const pct1 = Math.round(dec * 100);
            const diff = pct1 - pct2;
            const q = `Pada bulan Mei, jualan Kedai P ialah ${fmtDec(dec, 2)} daripada sasaran, manakala jualan Kedai Q ialah ${pct2}% daripada sasaran. Berapakah beza peratus jualan antara Kedai P dengan Kedai Q?`;
            return buildMcq(
              rng, meta, q, `${diff}%`,
              [
                `${pct1 + pct2}%`,
                `${Math.abs(Math.round(dec * 10) - pct2)}%`,
                `${diff + 10}%`,
                `${Math.max(5, diff - 5)}%`
              ],
              `${fmtDec(dec, 2)} = ${pct1}%. Beza = ${pct1}% − ${pct2}% = ${diff}%.`,
              `cc:${pct1}:${pct2}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s3_H",
        unit: "b2",
        skill: "b2_s3",
        diff: "H",
        templates: ["b2_s3_H_more_than_pct", "b2_s3_H_pct_table_word"],
        generate(seed) {
          const rng = makeRng("b2_s3_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s3", diff: "H", template: tpl };

          if (tpl === "b2_s3_H_more_than_pct") {
            const diff = pick(rng, [20, 30, 40, 50, 60, 70, 80]);
            const small = (100 - diff) / 2;
            const large = small + diff;
            const q = `Sehelai jaket diperbuat daripada kapas dan poliester (jumlah 100%). Peratusan kapas adalah ${diff}% lebih banyak daripada poliester. Berapakah peratusan kapas yang digunakan?`;
            return buildMcq(
              rng, meta, q, `${large}%`,
              [
                `${small}%`,
                `${diff}%`,
                `${100 - diff}%`,
                `${large + 10}%`
              ],
              `Jika poliester = p, maka p + (p + ${diff}%) = 100%, jadi 2p = ${100 - diff}% dan p = ${small}%. Kapas = ${small}% + ${diff}% = ${large}%.`,
              `mt:${diff}`
            );
          } else {
            const d1 = pick(rng, [1.25, 1.35, 1.6, 1.85]);
            const p2 = pick(rng, [85, 95, 115, 140]);
            const p3 = pick(rng, [45, 55, 65]);
            const p1 = Math.round(d1 * 100);
            const ans = p1 + p2 - p3;
            const q = `Dalam satu cabaran membaca, murid mengumpul mata berjumlah ${fmtDec(d1, 2)} daripada sasaran pada minggu pertama, bertambah ${p2}% pada minggu kedua, tetapi ditolak ${p3}% kerana lewat hantar. Berapakah jumlah peratus akhir yang diperoleh?`;
            return buildMcq(
              rng, meta, q, `${ans}%`,
              [
                `${p1 - p2 + p3}%`,
                `${Math.round(d1 * 10) + p2 - p3}%`,
                `${ans + p3}%`,
                `${p1 + p2 + p3}%`
              ],
              `${fmtDec(d1, 2)} = ${p1}%. Jumlah peratus akhir = ${p1}% + ${p2}% − ${p3}% = ${ans}%.`,
              `pt:${p1}:${p2}:${p3}`
            );
          }
        }
      },

      // ---------- b2_s4: Nilai Kuantiti daripada Peratus & Nilai Peratus daripada Kuantiti ----------
      {
        type: "generator",
        id: "b2_s4_L",
        unit: "b2",
        skill: "b2_s4",
        diff: "L",
        templates: ["b2_s4_L_qty_from_pct", "b2_s4_L_pct_from_qty"],
        generate(seed) {
          const rng = makeRng("b2_s4_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s4", diff: "L", template: tpl };

          if (tpl === "b2_s4_L_qty_from_pct") {
            const pct = pick(rng, [15, 20, 25, 30, 35, 40, 60, 75, 80, 90]);
            const base = randInt(rng, 2, 18) * 20;
            const ans = Math.round((pct * base) / 100);
            const q = `Cari nilai ${pct}% daripada ${base}.`;
            return buildMcq(
              rng, meta, q, String(ans),
              [
                String(base - ans === ans ? ans + 15 : base - ans),
                String(ans + 10),
                String(Math.max(2, ans - 5)),
                fmtDec((pct * base) / 1000, 1)
              ],
              `${pct}% × ${base} = ${pct}/100 × ${base} = ${ans}.`,
              `qp:${pct}:${base}`
            );
          } else {
            const total = pick(rng, [40, 50, 80, 100, 150, 200, 250]);
            const pct = pick(rng, [20, 30, 40, 60, 70, 80]);
            const part = Math.round((pct * total) / 100);
            const q = `Di dalam sebuah kotak terdapat ${total} biji guli dan ${part} biji daripadanya berwarna biru. Berapakah peratusan guli biru?`;
            return buildMcq(
              rng, meta, q, `${pct}%`,
              [
                `${100 - pct === pct ? pct + 15 : 100 - pct}%`,
                `${pct + 10}%`,
                `${Math.max(5, pct - 5)}%`,
                `${Math.round(pct / 2)}%`
              ],
              `(${part} ÷ ${total}) × 100% = ${pct}%.`,
              `pq:${part}:${total}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s4_M",
        unit: "b2",
        skill: "b2_s4",
        diff: "M",
        templates: ["b2_s4_M_qty_over_100pct", "b2_s4_M_pct_over_100"],
        generate(seed) {
          const rng = makeRng("b2_s4_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s4", diff: "M", template: tpl };

          if (tpl === "b2_s4_M_qty_over_100pct") {
            const pct = pick(rng, [120, 140, 150, 160, 220, 240, 250]);
            const base10 = pick(rng, [12, 15, 18, 25, 35, 45]); // 1.2..4.5
            const base = base10 / 10;
            const ans = (pct * base10) / 1000;
            const unit = pick(rng, ["m", "ℓ", "kg"]);
            const q = `Kira nilai ${pct}% daripada ${fmtDec(base, 1)} ${unit}.`;
            return buildMcq(
              rng, meta, q, `${fmtDec(ans, 2)} ${unit}`,
              [
                `${fmtDec(base + pct / 100, 2)} ${unit}`, // added decimal pct
                `${fmtDec(ans / 10, 3)} ${unit}`,
                `${fmtDec(ans - base, 2)} ${unit}`,
                `${fmtDec(ans + 1.2, 2)} ${unit}`
              ],
              `${pct}% × ${fmtDec(base, 1)} ${unit} = ${fmtDec(pct / 100, 2)} × ${fmtDec(base, 1)} = ${fmtDec(ans, 2)} ${unit}.`,
              `qo:${pct}:${base10}:${unit}`
            );
          } else {
            const target = pick(rng, [20, 25, 40, 50, 80]);
            const pct = pick(rng, [120, 125, 130, 140, 150, 160, 175]);
            const actual = (target * pct) / 100;
            if (!Number.isInteger(actual)) {
              const t2 = 40;
              const p2 = 135;
              const a2 = 54;
              const q = `Sasaran kutipan tin kitar semula ialah ${t2} kg, tetapi murid berjaya mengumpul ${a2} kg. Nyatakan jumlah kutipan sebenar itu dalam peratusan berbanding sasaran.`;
              return buildMcq(
                rng, meta, q, `${p2}%`,
                [`${Math.round((t2 / a2) * 100)}%`, `${p2 - 100}%`, `${p2 + 15}%`, `${Math.round(p2 / 10)}%`],
                `(${a2} ÷ ${t2}) × 100% = ${p2}%.`,
                `po:${a2}:${t2}`
              );
            }
            const q = `Sasaran jualan gerai amal ialah ${target} bungkus nasi lemak, tetapi sebanyak ${actual} bungkus telah terjual. Nyatakan bilangan yang terjual itu sebagai peratusan daripada sasaran.`;
            return buildMcq(
              rng, meta, q, `${pct}%`,
              [
                `${Math.round((target / actual) * 100)}%`, // inverted
                `${pct - 100}%`, // only excess
                `${pct + 15}%`,
                `${Math.round(pct / 10)}%`
              ],
              `(${actual} ÷ ${target}) × 100% = ${pct}%.`,
              `po:${actual}:${target}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s4_H",
        unit: "b2",
        skill: "b2_s4",
        diff: "H",
        templates: ["b2_s4_H_discount_or_markup", "b2_s4_H_reverse_or_compare"],
        generate(seed) {
          const rng = makeRng("b2_s4_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s4", diff: "H", template: tpl };

          if (tpl === "b2_s4_H_discount_or_markup") {
            const origPrice = pick(rng, [80, 120, 150, 160, 200, 240, 320]);
            const discPct = pick(rng, [15, 20, 25, 30, 35]);
            const saved = (origPrice * discPct) / 100;
            const finalPrice = origPrice - saved;
            const date = pick(rng, SAMPLE_DATES);
            const q = `Sempena jualan pada ${date}, sepasang kasut sukan berharga ${fmtRM(origPrice)} diberikan diskaun sebanyak ${discPct}%. Berapakah harga baharu kasut itu selepas diskaun?`;
            return buildMcq(
              rng, meta, q, fmtRM(finalPrice),
              [
                fmtRM(saved), // gave discount amount instead of new price
                fmtRM(origPrice + saved), // added instead of subtracted
                fmtRM(origPrice - discPct), // subtracted percentage directly as RM
                fmtRM(finalPrice + 10)
              ],
              `Diskaun = ${discPct}% × ${fmtRM(origPrice)} = ${fmtRM(saved)}. Harga baharu = ${fmtRM(origPrice)} − ${fmtRM(saved)} = ${fmtRM(finalPrice)}.`,
              `dm:${origPrice}:${discPct}`
            );
          } else {
            // Equivalent percentage scaling (like Cerdas Minda)
            const cases = [
              { p1: 200, b1: 5.5, b2: 2.75, p2: 400 },
              { p1: 150, b1: 4.8, b2: 2.4, p2: 300 },
              { p1: 120, b1: 7.5, b2: 2.5, p2: 360 },
              { p1: 250, b1: 3.6, b2: 1.8, p2: 500 },
              { p1: 160, b1: 6.5, b2: 3.25, p2: 320 }
            ];
            const c = pick(rng, cases);
            const rhs = Math.round((c.p1 / 100) * c.b1 * 100) / 100;
            const q = `Diberi ${c.p1}% × ${fmtDec(c.b1, 2)} = ${fmtDec(rhs, 2)}.\nJika Q% × ${fmtDec(c.b2, 2)} = ${fmtDec(rhs, 2)}, berapakah nilai Q?`;
            return buildMcq(
              rng, meta, q, String(c.p2),
              [
                String(Math.round(c.p1 / 2)),
                String(c.p1),
                String(c.p2 / 10),
                String(c.p2 + 50)
              ],
              `Apabila ${fmtDec(c.b1, 2)} dibahagi kepada ${fmtDec(c.b2, 2)}, nilai peratus perlu digandakan dengan nisbah yang sama: Q = ${c.p2}.`,
              `rc:${c.p1}:${c.b1}:${c.b2}`
            );
          }
        }
      },

      // ---------- b2_s5: Operasi Bergabung Pecahan, Perpuluhan & Peratus + Penyelesaian Masalah ----------
      {
        type: "generator",
        id: "b2_s5_L",
        unit: "b2",
        skill: "b2_s5",
        diff: "L",
        templates: ["b2_s5_L_add_sub_frac_dec", "b2_s5_L_mul_div_frac_dec"],
        generate(seed) {
          const rng = makeRng("b2_s5_L", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s5", diff: "L", template: tpl };

          if (tpl === "b2_s5_L_add_sub_frac_dec") {
            const fracs = [
              { fn: 1, fd: 2, fdec: 0.5 },
              { fn: 1, fd: 4, fdec: 0.25 },
              { fn: 3, fd: 4, fdec: 0.75 },
              { fn: 1, fd: 5, fdec: 0.2 },
              { fn: 2, fd: 5, fdec: 0.4 },
              { fn: 3, fd: 5, fdec: 0.6 },
              { fn: 4, fd: 5, fdec: 0.8 }
            ];
            const w = randInt(rng, 1, 6);
            const fr = pick(rng, fracs);
            const maxStep = Math.floor((w + Math.min(fr.fdec, fr.fn / 10) - 0.1) * 20);
            const d = Math.round(randInt(rng, 5, Math.max(5, maxStep)) * 5) / 100;
            const ans = Math.round((w + fr.fdec - d) * 100) / 100;
            const fracStr = fmtFrac(fr.fn, fr.fd);
            const q = `Hitung dalam perpuluhan:\n${w} + ${fracStr} − ${fmtDec(d, 2)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(ans, 2),
              [
                fmtDec(w + fr.fn / 10 - d, 2),
                fmtDec(w + fr.fdec + d, 2),
                fmtDec(ans + 0.25, 2),
                fmtDec(Math.max(0.1, ans - 0.15), 2)
              ],
              `${fracStr} = ${fmtDec(fr.fdec, 2)}. Jadi ${w} + ${fmtDec(fr.fdec, 2)} − ${fmtDec(d, 2)} = ${fmtDec(ans, 2)}.`,
              `asfd:${w}:${fracStr}:${d}`
            );
          } else {
            const isMul = pick(rng, [true, false]);
            if (isMul) {
              const fracs = [
                { fn: 1, fd: 2 }, { fn: 1, fd: 4 }, { fn: 3, fd: 4 },
                { fn: 1, fd: 5 }, { fn: 2, fd: 5 }, { fn: 3, fd: 5 },
                { fn: 4, fd: 5 }, { fn: 3, fd: 8 }, { fn: 5, fd: 8 }
              ];
              const fr = pick(rng, fracs);
              let d10 = randInt(rng, 4, 45);
              if (fr.fd === 8 && d10 % 2 !== 0) d10++;
              const d = d10 / 10;
              const ans = Math.round(((d * fr.fn) / fr.fd) * 1000) / 1000;
              const q = `Hitung dalam perpuluhan:\n${fmtDec(d, 1)} × ${fr.fn}/${fr.fd} =`;
              return buildMcq(
                rng, meta, q, fmtDec(ans, 3),
                [
                  fmtDec(Math.round(((d * fr.fd) / fr.fn) * 1000) / 1000, 3),
                  fmtDec(ans * 10, 3),
                  fmtDec(ans + 0.25, 3),
                  fmtDec(Math.max(0.05, ans - 0.2), 3)
                ],
                `${fmtDec(d, 1)} × ${fr.fn}/${fr.fd} = ${fmtDec(ans, 3)}.`,
                `mfd:${d}:${fr.fn}/${fr.fd}`
              );
            } else {
              const divPairs = [
                { fn: 1, fd: 2, fdec: 0.5 }, { fn: 1, fd: 4, fdec: 0.25 }, { fn: 3, fd: 4, fdec: 0.75 },
                { fn: 2, fd: 5, fdec: 0.4 }, { fn: 3, fd: 5, fdec: 0.6 }, { fn: 4, fd: 5, fdec: 0.8 },
                { fn: 5, fd: 8, fdec: 0.625 }, { fn: 7, fd: 10, fdec: 0.7 }
              ];
              let d = 1.2, fn = 3, fd = 5, fdec = 0.6, ans = 2;
              for (let t = 0; t < 40; t++) {
                const fr = pick(rng, divPairs);
                const candAns = randInt(rng, 12, 64) / 10;
                const cd = Math.round(candAns * fr.fdec * 1000) / 1000;
                if (cd >= 0.3 && Math.abs(Math.round(cd * 100) - cd * 100) < 1e-6) {
                  d = cd; fn = fr.fn; fd = fr.fd; fdec = fr.fdec; ans = candAns;
                  break;
                }
              }
              const q = `Hitung dalam perpuluhan:\n${fmtDec(d, 2)} ÷ ${fn}/${fd} =`;
              return buildMcq(
                rng, meta, q, fmtDec(ans, 2),
                [
                  fmtDec(Math.round(((d * fn) / fd) * 1000) / 1000, 3),
                  fmtDec(ans / 10, 2),
                  fmtDec(ans + 0.5, 2),
                  fmtDec(Math.max(0.2, ans - 0.6), 2)
                ],
                `${fn}/${fd} = ${fmtDec(fdec, 3)}. Maka ${fmtDec(d, 2)} ÷ ${fmtDec(fdec, 3)} = ${fmtDec(ans, 2)}.`,
                `dfd:${d}:${fn}/${fd}`
              );
            }
          }
        }
      },
      {
        type: "generator",
        id: "b2_s5_M",
        unit: "b2",
        skill: "b2_s5",
        diff: "M",
        templates: ["b2_s5_M_bodmas_frac_dec", "b2_s5_M_frac_dec_pct_mix"],
        generate(seed) {
          const rng = makeRng("b2_s5_M", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s5", diff: "M", template: tpl };

          if (tpl === "b2_s5_M_bodmas_frac_dec") {
            const fracOpts = [[1, 2, 0.5], [1, 4, 0.25], [3, 4, 0.75], [1, 5, 0.2], [2, 5, 0.4], [3, 5, 0.6], [4, 5, 0.8]];
            const aOpts = [1.2, 1.5, 1.75, 1.8, 2.25, 2.4, 2.5, 3.2, 3.5, 4.2, 4.5, 4.75, 5.4, 6.25];
            let c = { a: 2.25, w: 0, fn: 3, fd: 4, fdec: 0.75, k: 2, op1: "-", op2: "/", ans: 1.875, wrong: 0.75 };
            for (let t = 0; t < 60; t++) {
              const op1 = pick(rng, ["+", "-"]);
              const op2 = pick(rng, ["*", "/"]);
              const w = pick(rng, [0, 1, 2]);
              const [fn, fd, fdec] = pick(rng, fracOpts);
              const fVal = w + fdec;
              const k = op2 === "*" ? pick(rng, [0.4, 0.5, 0.8, 2, 3, 4]) : pick(rng, [2, 4, 5]);
              const term2 = op2 === "*" ? Math.round(fVal * k * 1000) / 1000 : fVal / k;
              if (Math.abs(Math.round(term2 * 1000) - term2 * 1000) >= 1e-6) continue;
              const a = pick(rng, aOpts);
              const ans = Math.round((op1 === "+" ? a + term2 : a - term2) * 1000) / 1000;
              if (ans < 0.25) continue;
              const step1 = op1 === "+" ? a + fVal : a - fVal;
              const wrong = Math.round((op2 === "*" ? step1 * k : step1 / k) * 1000) / 1000;
              if (wrong < 0.1 || Math.abs(wrong - ans) < 0.05) continue;
              if (Math.abs(Math.round(wrong * 1000) - wrong * 1000) >= 1e-6) continue;
              c = { a, w, fn, fd, fdec, k, op1, op2, ans, wrong };
              break;
            }
            const fStr = c.w > 0 ? `${c.w} ${c.fn}/${c.fd}` : `${c.fn}/${c.fd}`;
            const fVal = c.w + c.fdec;
            const op1Sym = c.op1 === "-" ? "−" : "+";
            const op2Sym = c.op2 === "/" ? "÷" : "×";
            const q = `Selesaikan mengikut tertib operasi:\n${fmtDec(c.a, 2)} ${op1Sym} ${fStr} ${op2Sym} ${fmtDec(c.k, 1)} =`;
            return buildMcq(
              rng, meta, q, fmtDec(c.ans, 3),
              [
                fmtDec(c.wrong, 3),
                fmtDec(c.ans + 0.5, 3),
                fmtDec(Math.max(0.1, c.ans - 0.35), 3),
                fmtDec(Math.max(0.15, Math.round((c.op1 === "-" ? c.a + fVal : Math.abs(c.a - fVal)) * 100) / 100), 2)
              ],
              `Selesaikan ${op2Sym} dahulu: ${fmtDec(fVal, 2)} ${op2Sym} ${fmtDec(c.k, 1)} = ${fmtDec(c.op2 === "/" ? fVal / c.k : fVal * c.k, 3)}. Kemudian ${fmtDec(c.a, 2)} ${op1Sym} hasil tersebut = ${fmtDec(c.ans, 3)}.`,
              `bfd:${c.a}:${fStr}:${c.k}:${c.op1}:${c.op2}`
            );
          } else {
            const dec = randInt(rng, 14, 64) * 0.05;
            const decPct = Math.round(dec * 100);
            const pct = randInt(rng, 3, Math.min(19, Math.floor((decPct - 15) / 5))) * 5;
            const [fn, fd, fPct] = pick(rng, [
              [1, 2, 50], [1, 4, 25], [3, 4, 75], [1, 5, 20], [2, 5, 40],
              [3, 5, 60], [4, 5, 80], [3, 10, 30], [7, 10, 70], [9, 10, 90]
            ]);
            const ansPct = decPct - pct + fPct;
            const q = `Nyatakan jawapan dalam peratus:\n${fmtDec(dec, 2)} − ${pct}% + ${fn}/${fd} =`;
            return buildMcq(
              rng, meta, q, `${ansPct}%`,
              [
                `${Math.abs(Math.round(dec * 10) - pct + fPct)}%`,
                `${Math.abs(decPct - (pct + fPct))}%`,
                `${ansPct + 15}%`,
                `${Math.max(10, ansPct - 20)}%`
              ],
              `Tukar semua kepada peratus: ${fmtDec(dec, 2)} = ${decPct}% dan ${fn}/${fd} = ${fPct}%. Maka ${decPct}% − ${pct}% + ${fPct}% = ${ansPct}%.`,
              `mix:${decPct}:${pct}:${fPct}`
            );
          }
        }
      },
      {
        type: "generator",
        id: "b2_s5_H",
        unit: "b2",
        skill: "b2_s5",
        diff: "H",
        templates: ["b2_s5_H_word_multi_conv", "b2_s5_H_word_budget_or_distance"],
        generate(seed) {
          const rng = makeRng("b2_s5_H", seed);
          const tpl = pick(rng, this.templates);
          const meta = { unit: "b2", skill: "b2_s5", diff: "H", template: tpl };

          if (tpl === "b2_s5_H_word_multi_conv") {
            const cases = [
              { init: 2.4, addFrac: [3, 4], addDec: 0.75, pourPct: 20, cups: 6 },
              { init: 3.2, addFrac: [4, 5], addDec: 0.8, pourPct: 25, cups: 6 },
              { init: 1.5, addFrac: [1, 2], addDec: 0.5, pourPct: 10, cups: 9 },
              { init: 2.6, addFrac: [2, 5], addDec: 0.4, pourPct: 25, cups: 5 },
              { init: 4.5, addFrac: [1, 2], addDec: 0.5, pourPct: 20, cups: 8 }
            ];
            const c = pick(rng, cases);
            const total = Math.round((c.init + c.addDec) * 100) / 100;
            const remain = Math.round(total * ((100 - c.pourPct) / 100) * 100) / 100;
            const perCup = Math.round((remain / c.cups) * 1000) / 1000;
            const wrongNoPct = Math.round((total / c.cups) * 1000) / 1000;
            const wrongPourOnly = Math.round(((total * (c.pourPct / 100)) / c.cups) * 1000) / 1000;
            const q = `Sebuah jag mengandungi ${fmtDec(c.init, 1)} ℓ jus oren. Ibu menambah ${c.addFrac[0]}/${c.addFrac[1]} ℓ lagi ke dalam jag itu. Selepas ${c.pourPct}% daripada jumlah jus diminum, baki jus dituang sama banyak ke dalam ${c.cups} biji gelas. Berapakah isi padu jus dalam setiap gelas?`;
            return buildMcq(
              rng, meta, q, `${fmtDec(perCup, 3)} ℓ`,
              [
                `${fmtDec(wrongNoPct, 3)} ℓ`,
                `${fmtDec(wrongPourOnly, 3)} ℓ`,
                `${fmtDec(remain, 2)} ℓ`,
                `${fmtDec(perCup + 0.15, 3)} ℓ`
              ],
              `Jumlah jus = ${fmtDec(c.init, 1)} + ${fmtDec(c.addDec, 2)} = ${fmtDec(total, 2)} ℓ. Baki (${100 - c.pourPct}%) = ${fmtDec(remain, 2)} ℓ. Setiap gelas = ${fmtDec(remain, 2)} ÷ ${c.cups} = ${fmtDec(perCup, 3)} ℓ.`,
              `wmc:${c.init}:${c.addDec}:${c.pourPct}:${c.cups}`
            );
          } else {
            const date = pick(rng, SAMPLE_DATES);
            const budget = pick(rng, [120, 160, 200, 240]);
            const bookPct = pick(rng, [25, 30, 35, 40]);
            const foodFrac = pick(rng, [
              { n: 1, d: 4, dec: 0.25 },
              { n: 1, d: 5, dec: 0.2 },
              { n: 3, d: 10, dec: 0.3 }
            ]);
            const spentBook = (budget * bookPct) / 100;
            const spentFood = Math.round(budget * foodFrac.dec * 100) / 100;
            const extraGift = pick(rng, [12.5, 15.0, 18.5, 22.5]);
            const balance = Math.round((budget - spentBook - spentFood - extraGift) * 100) / 100;
            const q = `Pada ${date}, Hakim membawa wang saku berjumlah ${fmtRM(budget)}. Dia membelanjakan ${bookPct}% daripada wangnya untuk membeli buku, ${foodFrac.n}/${foodFrac.d} daripada jumlah asal untuk makanan, dan ${fmtRM(extraGift)} untuk alat tulis. Berapakah baki wang Hakim?`;
            return buildMcq(
              rng, meta, q, fmtRM(balance),
              [
                fmtRM(balance + extraGift),
                fmtRM(spentBook + spentFood + extraGift),
                fmtRM(Math.max(5, balance - 10)),
                fmtRM(Math.round((budget - spentBook - spentFood + extraGift) * 100) / 100)
              ],
              `Buku = ${bookPct}% × ${fmtRM(budget)} = ${fmtRM(spentBook)}. Makanan = ${foodFrac.n}/${foodFrac.d} × ${fmtRM(budget)} = ${fmtRM(spentFood)}. Baki = ${fmtRM(budget)} − ${fmtRM(spentBook)} − ${fmtRM(spentFood)} − ${fmtRM(extraGift)} = ${fmtRM(balance)}.`,
              `wbd:${budget}:${bookPct}:${foodFrac.n}/${foodFrac.d}:${extraGift}`
            );
          }
        }
      }
    ];
    return generators;
  }

  function buildPartB3B4() {
    "use strict";
  function hashSeed(seed) {
    const str = String(seed);
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return (h ^ (h >>> 16)) >>> 0;
  }

  function mulberry32(a) {
    let t = a >>> 0;
    return function () {
      t = (t + 0x6d2b79f5) | 0;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
  }

  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
  }

  function pickTwo(rng, arr) {
    const firstIdx = Math.floor(rng() * arr.length);
    let secondIdx = Math.floor(rng() * (arr.length - 1));
    if (secondIdx >= firstIdx) secondIdx++;
    return [arr[firstIdx], arr[secondIdx]];
  }

  function shuffle(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function round2(n) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }

  function fmtRM(val) {
    return `RM ${round2(val).toFixed(2)}`;
  }

  function fmtPct(val) {
    const r = round2(val);
    return Number.isInteger(r) ? `${r}%` : `${r.toFixed(1)}%`;
  }

  function fmtTime24(minutesFromMidnight) {
    const norm = ((minutesFromMidnight % 1440) + 1440) % 1440;
    const h = Math.floor(norm / 60);
    const m = norm % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  function fmtDuration(totalMinutes) {
    const mins = Math.max(0, Math.round(totalMinutes));
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m} minit`;
    if (m === 0) return `${h} jam`;
    return `${h} jam ${m} minit`;
  }

  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function fmtDateUtc(ms) {
    const d = new Date(ms);
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const mon = MONTHS_EN[d.getUTCMonth()];
    const yyyy = d.getUTCFullYear();
    return `${dd}/${mon}/${yyyy}`;
  }

  function fmtTimeDateUtc(ms) {
    const d = new Date(ms);
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const mm = String(d.getUTCMinutes()).padStart(2, "0");
    return `${hh}:${mm}, ${fmtDateUtc(ms)}`;
  }

  function makeUtcMs(year, monthIndex0, day, hour, minute) {
    return Date.UTC(year, monthIndex0, day, hour, minute, 0, 0);
  }

  function fmtUtcOffset(offsetHours) {
    const sign = offsetHours >= 0 ? "+" : "-";
    const abs = Math.abs(offsetHours);
    const h = Math.floor(abs);
    const m = Math.round((abs - h) * 60);
    return m === 0 ? `UTC${sign}${h}` : `UTC${sign}${h}:${String(m).padStart(2, "0")}`;
  }

  function buildOptions(rng, correctStr, wrongCandidates, fallbackFn) {
    const normalize = (s) => String(s).trim().toLowerCase();
    const seen = new Set([normalize(correctStr)]);
    const wrongs = [];

    for (const w of wrongCandidates) {
      if (w === null || w === undefined) continue;
      const s = String(w).trim();
      if (!s || s.includes("NaN") || s.includes("undefined")) continue;
      const key = normalize(s);
      if (!seen.has(key)) {
        seen.add(key);
        wrongs.push(s);
        if (wrongs.length === 3) break;
      }
    }

    let step = 1;
    while (wrongs.length < 3 && step <= 40) {
      const cand = fallbackFn ? String(fallbackFn(step)).trim() : null;
      if (cand && !cand.includes("NaN") && !cand.includes("undefined")) {
        const key = normalize(cand);
        if (!seen.has(key)) {
          seen.add(key);
          wrongs.push(cand);
        }
      }
      step++;
    }

    if (wrongs.length < 3) {
      throw new Error(`Unable to build 4 unique options for: ${correctStr}`);
    }

    const all = shuffle(rng, [String(correctStr).trim(), ...wrongs]);
    return {
      options: all,
      correctIndex: all.indexOf(String(correctStr).trim())
    };
  }

  function moneyFallback(baseVal, step) {
    const offsets = [5, -5, 10, -10, 20, -20, 15, -15, 50, -50, 1, -1, 2, -2, 100, -100];
    const delta = offsets[(step - 1) % offsets.length] * (Math.floor((step - 1) / offsets.length) + 1);
    const candidate = round2(baseVal + delta);
    return fmtRM(candidate > 0 ? candidate : Math.abs(candidate) + step * 5);
  }

  function makeMcqResult({ unit, skill, diff, template, canonicalParams, q, correctStr, wrongCandidates, explanation, rng, fallbackFn }) {
    const { options, correctIndex } = buildOptions(rng, correctStr, wrongCandidates, fallbackFn);
    return {
      unit,
      skill,
      diff,
      template,
      q,
      options,
      correctIndex,
      explanation,
      sig: `${skill}:${diff}:${template}:${canonicalParams}`
    };
  }

  // ==================== KNOWLEDGE MAP (UNITS) ====================


  // ==================== SHARED DATA POOLS ====================

  const NAMES_MY = ["Aiman", "Siti", "Farah", "Hakim", "Mei Ling", "Kavitha", "Danial", "Nurul", "Zaki", "Hana"];
  const SHOPS_MY = ["Kedai Buku Maju", "Pasar Raya Harmoni", "Kedai Sukan Wira", "Butik Cahaya", "Pusat Elektrik Suria"];
  const ITEMS_B3 = [
    { item: "sebuah beg sekolah", minK: 35, maxK: 120 },
    { item: "sepasang kasut sukan", minK: 60, maxK: 220 },
    { item: "sebuah periuk nasi", minK: 85, maxK: 260 },
    { item: "sebuah kipas berdiri", minK: 90, maxK: 240 },
    { item: "sebuah jam tangan", minK: 110, maxK: 350 },
    { item: "sebuah basikal lipat", minK: 320, maxK: 750 }
  ];
  const MENU_ITEMS = [
    { name: "Nasi Lemak Ayam", price: 12.50 },
    { name: "Mee Goreng Mamak", price: 9.00 },
    { name: "Satay Ayam (10 cucuk)", price: 15.00 },
    { name: "Ikan Siakap Tiga Rasa", price: 42.00 },
    { name: "Sup Ekor", price: 18.50 },
    { name: "Teh Tarik", price: 3.50 },
    { name: "Jus Tembikai", price: 6.00 }
  ];
  const CITIES = [
    { name: "London", offset: 0 },
    { name: "Makkah", offset: 3 },
    { name: "Dubai", offset: 4 },
    { name: "Jakarta", offset: 7 },
    { name: "Kuala Lumpur", offset: 8 },
    { name: "Tokyo", offset: 9 },
    { name: "Sydney", offset: 10 },
    { name: "New York", offset: -5 },
    { name: "Buenos Aires", offset: -3 }
  ];
  const HALF_CITIES = [
    { name: "New Delhi", offset: 5.5 },
    { name: "Darwin", offset: 9.5 }
  ];

  // ==================== GENERATOR DEFINITIONS ====================

  const generators = [
    // ---------- B3 S1: Harga Kos, Harga Jual, Untung dan Rugi ----------
    {
      type: "generator",
      id: "b3_s1_L",
      unit: "b3",
      skill: "b3_s1",
      diff: "L",
      templates: ["b3_s1_L_calc_profit", "b3_s1_L_calc_loss"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s1_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const seller = pick(rng, NAMES_MY);
        const obj = pick(rng, ITEMS_B3);

        if (tpl === "b3_s1_L_calc_profit") {
          const kos = randInt(rng, Math.ceil(obj.minK / 5), Math.floor(obj.maxK / 5)) * 5 + pick(rng, [0, 0.5, 0.8]);
          const untung = randInt(rng, 2, 14) * 5 + pick(rng, [0, 0.5]);
          const jual = round2(kos + untung);
          const q = `${seller} membeli ${obj.item} pada harga kos ${fmtRM(kos)} dan menjualnya pada harga ${fmtRM(jual)}. Berapakah untung yang diperolehnya?`;
          const exp = `Untung = Harga jual - Harga kos = ${fmtRM(jual)} - ${fmtRM(kos)} = ${fmtRM(untung)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s1",
            diff: "L",
            template: tpl,
            canonicalParams: `${kos}:${jual}`,
            q,
            correctStr: fmtRM(untung),
            wrongCandidates: [fmtRM(kos + jual), fmtRM(untung + 10), fmtRM(Math.max(5, untung - 5)), fmtRM(kos)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(untung, s)
          });
        }

        const kos = randInt(rng, Math.ceil(obj.minK / 5), Math.floor(obj.maxK / 5)) * 5 + pick(rng, [0, 0.5]);
        const rugi = randInt(rng, 2, Math.max(3, Math.floor((kos - 10) / 5))) * 5;
        const jual = round2(kos - rugi);
        const q = `${seller} membeli ${obj.item} pada harga kos ${fmtRM(kos)} tetapi terpaksa menjualnya pada harga ${fmtRM(jual)}. Hitung kerugian yang dialaminya.`;
        const exp = `Rugi = Harga kos - Harga jual = ${fmtRM(kos)} - ${fmtRM(jual)} = ${fmtRM(rugi)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s1",
          diff: "L",
          template: tpl,
          canonicalParams: `${kos}:${jual}`,
          q,
          correctStr: fmtRM(rugi),
          wrongCandidates: [fmtRM(kos + jual), fmtRM(rugi + 10), fmtRM(jual), fmtRM(rugi + 5)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(rugi, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s1_M",
      unit: "b3",
      skill: "b3_s1",
      diff: "M",
      templates: ["b3_s1_M_find_cost_from_profit", "b3_s1_M_find_sell_from_loss"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s1_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const shop = pick(rng, SHOPS_MY);
        const obj = pick(rng, ITEMS_B3);

        if (tpl === "b3_s1_M_find_cost_from_profit") {
          const kos = randInt(rng, 12, 60) * 5 + pick(rng, [0, 0.4, 0.8]);
          const untung = randInt(rng, 3, 18) * 5 + pick(rng, [0, 0.5]);
          const jual = round2(kos + untung);
          const q = `${shop} menjual ${obj.item} pada harga ${fmtRM(jual)} dan memperoleh untung sebanyak ${fmtRM(untung)}. Berapakah harga kos barang itu?`;
          const exp = `Harga kos = Harga jual - Untung = ${fmtRM(jual)} - ${fmtRM(untung)} = ${fmtRM(kos)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s1",
            diff: "M",
            template: tpl,
            canonicalParams: `${jual}:${untung}`,
            q,
            correctStr: fmtRM(kos),
            wrongCandidates: [fmtRM(jual + untung), fmtRM(Math.max(5, kos - untung)), fmtRM(kos + 10), fmtRM(Math.max(5, kos - 10))],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(kos, s)
          });
        }

        const kos = randInt(rng, 20, 80) * 5 + pick(rng, [0, 0.6]);
        const rugi = randInt(rng, 3, 12) * 5 + pick(rng, [0, 0.4]);
        const jual = round2(kos - rugi);
        const q = `Harga kos bagi ${obj.item} di ${shop} ialah ${fmtRM(kos)}. Peniaga tersebut mengalami rugi sebanyak ${fmtRM(rugi)} apabila menjualnya. Berapakah harga jual barang itu?`;
        const exp = `Harga jual = Harga kos - Rugi = ${fmtRM(kos)} - ${fmtRM(rugi)} = ${fmtRM(jual)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s1",
          diff: "M",
          template: tpl,
          canonicalParams: `${kos}:${rugi}`,
          q,
          correctStr: fmtRM(jual),
          wrongCandidates: [fmtRM(kos + rugi), fmtRM(Math.max(5, jual - rugi)), fmtRM(jual + 15), fmtRM(Math.max(5, jual - 10))],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(jual, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s1_H",
      unit: "b3",
      skill: "b3_s1",
      diff: "H",
      templates: ["b3_s1_H_multi_unit_profit", "b3_s1_H_percent_profit_sell"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s1_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const seller = pick(rng, NAMES_MY);

        if (tpl === "b3_s1_H_multi_unit_profit") {
          const qty = randInt(rng, 12, 30);
          const unitCost = randInt(rng, 6, 18);
          const transport = randInt(rng, 2, 8) * 5;
          const margin = randInt(rng, 3, 9);
          const unitSell = unitCost + margin;
          const totalCost = qty * unitCost + transport;
          const totalSell = qty * unitSell;
          const profit = totalSell - totalCost;
          const goods = pick(rng, ["kotak mangga", "pek kerepek", "bungkus biskut", "tin biskut raya"]);
          const q = `${seller} membeli ${qty} ${goods} pada harga ${fmtRM(unitCost)} setiap satu dan membayar kos pengangkutan sebanyak ${fmtRM(transport)}. Kesemua ${goods} itu dijual pada harga ${fmtRM(unitSell)} setiap satu. Berapakah keuntungan bersih yang diperoleh?`;
          const exp = `Jumlah harga kos = (${qty} × ${fmtRM(unitCost)}) + ${fmtRM(transport)} = ${fmtRM(totalCost)}. Jumlah jualan = ${qty} × ${fmtRM(unitSell)} = ${fmtRM(totalSell)}. Untung bersih = ${fmtRM(totalSell)} - ${fmtRM(totalCost)} = ${fmtRM(profit)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s1",
            diff: "H",
            template: tpl,
            canonicalParams: `${qty}:${unitCost}:${transport}:${unitSell}`,
            q,
            correctStr: fmtRM(profit),
            wrongCandidates: [
              fmtRM(qty * margin),
              fmtRM(qty * margin + transport),
              fmtRM(Math.abs(profit - 15)),
              fmtRM(totalSell)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(profit, s)
          });
        }

        const kos = randInt(rng, 8, 40) * 10;
        const pct = pick(rng, [15, 20, 25, 30, 40]);
        const untung = round2((kos * pct) / 100);
        const jual = round2(kos + untung);
        const q = `Seorang peniaga membeli sebuah mesin pengisar pada harga kos ${fmtRM(kos)}. Dia ingin memperoleh keuntungan sebanyak ${pct}% daripada harga kos itu. Berapakah harga jual yang perlu ditetapkan?`;
        const exp = `Untung = ${pct}% × ${fmtRM(kos)} = ${fmtRM(untung)}. Harga jual = ${fmtRM(kos)} + ${fmtRM(untung)} = ${fmtRM(jual)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s1",
          diff: "H",
          template: tpl,
          canonicalParams: `${kos}:${pct}`,
          q,
          correctStr: fmtRM(jual),
          wrongCandidates: [fmtRM(untung), fmtRM(kos - untung), fmtRM(jual + 20), fmtRM(kos + pct)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(jual, s)
        });
      }
    },

    // ---------- B3 S2: Diskaun, Rebat dan Baucar ----------
    {
      type: "generator",
      id: "b3_s2_L",
      unit: "b3",
      skill: "b3_s2",
      diff: "L",
      templates: ["b3_s2_L_discount_amount", "b3_s2_L_rebate_subtract"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s2_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const buyer = pick(rng, NAMES_MY);

        if (tpl === "b3_s2_L_discount_amount") {
          const orig = randInt(rng, 4, 30) * 10;
          const discPct = pick(rng, [10, 15, 20, 25, 30, 50]);
          const discVal = round2((orig * discPct) / 100);
          const q = `Harga asal sehelai baju batik ialah ${fmtRM(orig)}. Sempena jualan murah, diskaun sebanyak ${discPct}% diberikan. Hitung nilai diskaun tersebut.`;
          const exp = `Nilai diskaun = ${discPct}% × ${fmtRM(orig)} = ${fmtRM(discVal)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s2",
            diff: "L",
            template: tpl,
            canonicalParams: `${orig}:${discPct}`,
            q,
            correctStr: fmtRM(discVal),
            wrongCandidates: [fmtRM(orig - discVal), fmtRM(orig + discVal), fmtRM(discPct), fmtRM(discVal + 10)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(discVal, s)
          });
        }

        const bill = randInt(rng, 6, 35) * 10;
        const rebatePct = pick(rng, [5, 10, 15, 20]);
        const rebateVal = round2((bill * rebatePct) / 100);
        const net = round2(bill - rebateVal);
        const q = `${buyer} membayar bil Internet berjumlah ${fmtRM(bill)} dan menerima rebat tunai sebanyak ${rebatePct}%. Berapakah bayaran bersih selepas rebat?`;
        const exp = `Rebat = ${rebatePct}% × ${fmtRM(bill)} = ${fmtRM(rebateVal)}. Bayaran bersih = ${fmtRM(bill)} - ${fmtRM(rebateVal)} = ${fmtRM(net)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s2",
          diff: "L",
          template: tpl,
          canonicalParams: `${bill}:${rebatePct}`,
          q,
          correctStr: fmtRM(net),
          wrongCandidates: [fmtRM(rebateVal), fmtRM(bill + rebateVal), fmtRM(bill - rebatePct), fmtRM(net + 5)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(net, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s2_M",
      unit: "b3",
      skill: "b3_s2",
      diff: "M",
      templates: ["b3_s2_M_price_after_discount", "b3_s2_M_voucher_earned"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s2_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const shop = pick(rng, SHOPS_MY);

        if (tpl === "b3_s2_M_price_after_discount") {
          const orig = randInt(rng, 9, 45) * 10 + pick(rng, [0, 5]);
          const discPct = pick(rng, [10, 20, 25, 30, 40]);
          const discVal = round2((orig * discPct) / 100);
          const finalPrice = round2(orig - discVal);
          const q = `${shop} menjual sebuah kamus elektronik pada harga asal ${fmtRM(orig)}. Diskaun sebanyak ${discPct}% ditawarkan. Berapakah harga kamus itu selepas diskaun?`;
          const exp = `Diskaun = ${discPct}% × ${fmtRM(orig)} = ${fmtRM(discVal)}. Harga selepas diskaun = ${fmtRM(orig)} - ${fmtRM(discVal)} = ${fmtRM(finalPrice)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s2",
            diff: "M",
            template: tpl,
            canonicalParams: `${orig}:${discPct}`,
            q,
            correctStr: fmtRM(finalPrice),
            wrongCandidates: [fmtRM(discVal), fmtRM(orig + discVal), fmtRM(orig - discPct), fmtRM(finalPrice + 10)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(finalPrice, s)
          });
        }

        const threshold = pick(rng, [50, 100]);
        const voucherVal = pick(rng, [5, 8, 10]);
        const qty = randInt(rng, 3, 6);
        const itemPrice = randInt(rng, 28, 75);
        const total = qty * itemPrice;
        const numVouchers = Math.floor(total / threshold);
        const totalVoucher = numVouchers * voucherVal;
        const buyer = pick(rng, NAMES_MY);
        const q = `${shop} memberikan baucar tunai ${fmtRM(voucherVal)} bagi setiap perbelanjaan genap ${fmtRM(threshold)} dalam satu resit. ${buyer} membeli ${qty} helai baju berharga ${fmtRM(itemPrice)} sehelai. Berapakah jumlah nilai baucar yang diterimanya?`;
        const exp = `Jumlah belian = ${qty} × ${fmtRM(itemPrice)} = ${fmtRM(total)}. Bilangan baucar = ${total} ÷ ${threshold} = ${numVouchers} baucar. Jumlah nilai baucar = ${numVouchers} × ${fmtRM(voucherVal)} = ${fmtRM(totalVoucher)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s2",
          diff: "M",
          template: tpl,
          canonicalParams: `${threshold}:${voucherVal}:${qty}:${itemPrice}`,
          q,
          correctStr: fmtRM(totalVoucher),
          wrongCandidates: [
            fmtRM((numVouchers + 1) * voucherVal),
            fmtRM(Math.max(voucherVal, (numVouchers - 1) * voucherVal)),
            fmtRM(voucherVal),
            fmtRM(total - totalVoucher)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(totalVoucher, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s2_H",
      unit: "b3",
      skill: "b3_s2",
      diff: "H",
      templates: ["b3_s2_H_discount_plus_voucher", "b3_s2_H_find_discount_pct"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s2_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const buyer = pick(rng, NAMES_MY);

        if (tpl === "b3_s2_H_discount_plus_voucher") {
          const orig = randInt(rng, 16, 48) * 10;
          const discPct = pick(rng, [10, 15, 20, 25]);
          const voucher = pick(rng, [10, 15, 20, 25]);
          const afterDisc = round2(orig * (1 - discPct / 100));
          const finalPay = round2(afterDisc - voucher);
          const wrongOrder = round2((orig - voucher) * (1 - discPct / 100));
          const q = `Harga asal sebuah rak buku ialah ${fmtRM(orig)}. Kedai memberikan diskaun ${discPct}% ke atas harga asal, dan ${buyer} turut menebus baucar tunai bernilai ${fmtRM(voucher)} selepas diskaun. Berapakah jumlah yang perlu dibayar?`;
          const exp = `Harga selepas diskaun ${discPct}% = ${fmtRM(orig)} - ${fmtRM(orig - afterDisc)} = ${fmtRM(afterDisc)}. Tolak baucar = ${fmtRM(afterDisc)} - ${fmtRM(voucher)} = ${fmtRM(finalPay)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s2",
            diff: "H",
            template: tpl,
            canonicalParams: `${orig}:${discPct}:${voucher}`,
            q,
            correctStr: fmtRM(finalPay),
            wrongCandidates: [fmtRM(afterDisc), fmtRM(wrongOrder), fmtRM(afterDisc + voucher), fmtRM(orig - voucher)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(finalPay, s)
          });
        }

        const discPct = pick(rng, [10, 15, 20, 25, 30, 40]);
        const orig = randInt(rng, 6, 30) * 20;
        const discAmt = round2((orig * discPct) / 100);
        const afterDisc = round2(orig - discAmt);
        const q = `Harga asal sepasang fon kepala ialah ${fmtRM(orig)}. Selepas diskaun, ${buyer} hanya membayar ${fmtRM(afterDisc)}. Berapakah peratus diskaun yang diberikan?`;
        const exp = `Diskaun = ${fmtRM(orig)} - ${fmtRM(afterDisc)} = ${fmtRM(discAmt)}. Peratus diskaun = (${discAmt} ÷ ${orig}) × 100% = ${discPct}%.`;
        const wrongPctFromFinal = Math.round((discAmt / afterDisc) * 100);
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s2",
          diff: "H",
          template: tpl,
          canonicalParams: `${orig}:${discPct}`,
          q,
          correctStr: `${discPct}%`,
          wrongCandidates: [
            `${100 - discPct}%`,
            `${wrongPctFromFinal}%`,
            `${discPct + 5}%`,
            `${Math.max(5, discPct - 5)}%`
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => `${discPct + s * 3}%`
        });
      }
    },

    // ---------- B3 S3: Invois, Bil, Resit dan Cukai Perkhidmatan ----------
    {
      type: "generator",
      id: "b3_s3_L",
      unit: "b3",
      skill: "b3_s3",
      diff: "L",
      templates: ["b3_s3_L_doc_purpose", "b3_s3_L_sst_amount"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s3_L::${seed}`));
        const tpl = pick(rng, this.templates);

        if (tpl === "b3_s3_L_doc_purpose") {
          const scenarios = [
            {
              key: "resit",
              q: "Dokumen manakah yang dikeluarkan oleh penjual sebagai penyata rasmi bahawa pelanggan telah selesai membuat bayaran?",
              ans: "Resit",
              exp: "Resit ialah penyata rasmi yang membuktikan bayaran telah diterima daripada pelanggan."
            },
            {
              key: "invois",
              q: "Pembekal menghantar satu senarai bertulis kepada pemilik kedai bagi barangan yang telah dihantar bersama jumlah wang yang perlu dijelaskan. Apakah nama dokumen ini?",
              ans: "Invois",
              exp: "Invois ialah dokumen yang dihantar oleh pembekal kepada pembeli untuk menuntut bayaran bagi barang atau perkhidmatan yang dibekalkan."
            },
            {
              key: "bil",
              q: "Selepas menjamu selera di sebuah restoran, pelayan menyerahkan surat keterangan tentang harga makanan dan minuman yang perlu dibayar. Apakah dokumen tersebut?",
              ans: "Bil",
              exp: "Bil ialah keterangan bertulis mengenai jumlah harga barang atau perkhidmatan yang perlu dibayar oleh pelanggan."
            },
            {
              key: "cukai",
              q: "Apakah nama caj tambahan sebanyak 6% yang dikenakan ke atas perkhidmatan bercukai seperti hidangan di restoran atau penginapan hotel?",
              ans: "Cukai perkhidmatan",
              exp: "Cukai perkhidmatan ialah cukai yang dikenakan ke atas perkhidmatan tertentu seperti makanan di restoran dan penginapan hotel."
            }
          ];
          const sc = pick(rng, scenarios);
          const allDocs = ["Resit", "Invois", "Bil", "Cukai perkhidmatan", "Baucar hadiah", "Rebat tunai"];
          const wrongs = allDocs.filter((d) => d !== sc.ans);
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s3",
            diff: "L",
            template: tpl,
            canonicalParams: sc.key,
            q: sc.q,
            correctStr: sc.ans,
            wrongCandidates: wrongs,
            explanation: sc.exp,
            rng
          });
        }

        const subtotal = randInt(rng, 5, 40) * 10;
        const sst = round2(subtotal * 0.06);
        const q = `Jumlah bil makanan keluarga ${pick(rng, NAMES_MY)} sebelum cukai ialah ${fmtRM(subtotal)}. Jika cukai perkhidmatan sebanyak 6% dikenakan, berapakah nilai cukai perkhidmatan tersebut?`;
        const exp = `Cukai perkhidmatan = 6% × ${fmtRM(subtotal)} = ${fmtRM(sst)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s3",
          diff: "L",
          template: tpl,
          canonicalParams: `${subtotal}`,
          q,
          correctStr: fmtRM(sst),
          wrongCandidates: [fmtRM(subtotal + sst), fmtRM(subtotal * 0.6), fmtRM(sst * 2), fmtRM(sst + 6)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(sst, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s3_M",
      unit: "b3",
      skill: "b3_s3",
      diff: "M",
      templates: ["b3_s3_M_bill_with_sst", "b3_s3_M_invoice_trade_discount"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s3_M::${seed}`));
        const tpl = pick(rng, this.templates);

        if (tpl === "b3_s3_M_bill_with_sst") {
          const [m1, m2] = pickTwo(rng, MENU_ITEMS);
          const q1 = randInt(rng, 1, 3);
          const q2 = randInt(rng, 1, 3);
          const sub = round2(q1 * m1.price + q2 * m2.price);
          const sst = round2(sub * 0.06);
          const total = round2(sub + sst);
          const q = `Pada bil Restoran Seri Murni, ${pick(rng, NAMES_MY)} memesan ${q1} ${m1.name} (${fmtRM(m1.price)} setiap satu) dan ${q2} ${m2.name} (${fmtRM(m2.price)} setiap satu). Cukai perkhidmatan 6% dikenakan ke atas jumlah pesanan. Berapakah jumlah bil yang perlu dibayar?`;
          const exp = `Jumlah pesanan = (${q1} × ${fmtRM(m1.price)}) + (${q2} × ${fmtRM(m2.price)}) = ${fmtRM(sub)}. Cukai 6% = ${fmtRM(sst)}. Jumlah bil = ${fmtRM(sub)} + ${fmtRM(sst)} = ${fmtRM(total)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s3",
            diff: "M",
            template: tpl,
            canonicalParams: `${m1.name}:${q1}:${m2.name}:${q2}`,
            q,
            correctStr: fmtRM(total),
            wrongCandidates: [fmtRM(sub), fmtRM(sub + 2 * sst), fmtRM(sub - sst), fmtRM(sst)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(total, s)
          });
        }

        const qty = randInt(rng, 10, 25);
        const unitP = randInt(rng, 12, 36);
        const gross = qty * unitP;
        const tradeDiscPct = pick(rng, [10, 15, 20]);
        const discAmt = round2((gross * tradeDiscPct) / 100);
        const net = round2(gross - discAmt);
        const q = `Satu invois menunjukkan pembelian ${qty} buah buku rujukan berharga ${fmtRM(unitP)} sebuah dengan diskaun niaga sebanyak ${tradeDiscPct}%. Hitung jumlah wang yang perlu dibayar mengikut invois itu.`;
        const exp = `Jumlah kasar = ${qty} × ${fmtRM(unitP)} = ${fmtRM(gross)}. Diskaun niaga ${tradeDiscPct}% = ${fmtRM(discAmt)}. Jumlah bayaran = ${fmtRM(gross)} - ${fmtRM(discAmt)} = ${fmtRM(net)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s3",
          diff: "M",
          template: tpl,
          canonicalParams: `${qty}:${unitP}:${tradeDiscPct}`,
          q,
          correctStr: fmtRM(net),
          wrongCandidates: [fmtRM(gross), fmtRM(discAmt), fmtRM(gross + discAmt), fmtRM(net + 10)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(net, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s3_H",
      unit: "b3",
      skill: "b3_s3",
      diff: "H",
      templates: ["b3_s3_H_bill_sst_and_change", "b3_s3_H_find_pretax_from_sst"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s3_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const buyer = pick(rng, NAMES_MY);

        if (tpl === "b3_s3_H_bill_sst_and_change") {
          const sub = randInt(rng, 8, 17) * 10; // RM 80 - RM 170
          const sst = round2(sub * 0.06);
          const total = round2(sub + sst);
          const paid = 200;
          const change = round2(paid - total);
          const q = `${buyer} memesan hidangan bernilai ${fmtRM(sub)} di sebuah restoran. Cukai perkhidmatan 6% dikenakan ke atas jumlah itu. Jika ${buyer} membayar dengan wang ${fmtRM(paid)}, berapakah baki yang tercatat pada resitnya?`;
          const exp = `Cukai 6% = ${fmtRM(sst)}. Jumlah bil = ${fmtRM(sub)} + ${fmtRM(sst)} = ${fmtRM(total)}. Baki = ${fmtRM(paid)} - ${fmtRM(total)} = ${fmtRM(change)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s3",
            diff: "H",
            template: tpl,
            canonicalParams: `${sub}:${paid}`,
            q,
            correctStr: fmtRM(change),
            wrongCandidates: [fmtRM(paid - sub), fmtRM(total), fmtRM(round2(paid - sub + sst)), fmtRM(round2(change - sst))],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(change, s)
          });
        }

        const preTax = randInt(rng, 5, 30) * 10;
        const sst = round2(preTax * 0.06);
        const total = round2(preTax + sst);
        const q = `Jumlah keseluruhan pada resit sebuah hotel termasuk cukai perkhidmatan 6% ialah ${fmtRM(total)}. Berapakah harga penginapan asal sebelum cukai perkhidmatan?`;
        const exp = `106% daripada harga asal = ${fmtRM(total)}. Harga asal = (${fmtRM(total)} ÷ 106) × 100 = ${fmtRM(preTax)}.`;
        const wrongNaive = round2(total - total * 0.06);
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s3",
          diff: "H",
          template: tpl,
          canonicalParams: `${preTax}`,
          q,
          correctStr: fmtRM(preTax),
          wrongCandidates: [fmtRM(wrongNaive), fmtRM(total + sst), fmtRM(sst), fmtRM(preTax + 10)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(preTax, s)
        });
      }
    },

    // ---------- B3 S4: Faedah dan Dividen ----------
    {
      type: "generator",
      id: "b3_s4_L",
      unit: "b3",
      skill: "b3_s4",
      diff: "L",
      templates: ["b3_s4_L_simple_interest_1yr", "b3_s4_L_dividend_1yr"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s4_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const person = pick(rng, NAMES_MY);
        const principal = randInt(rng, 2, 24) * 500;
        const rate = pick(rng, [2, 3, 4, 5, 6]);
        const reward = round2((principal * rate) / 100);

        if (tpl === "b3_s4_L_simple_interest_1yr") {
          const q = `${person} menyimpan ${fmtRM(principal)} di dalam bank dengan kadar faedah ${rate}% setahun. Hitung nilai faedah yang diterimanya selepas 1 tahun.`;
          const exp = `Nilai faedah = ${rate}% × ${fmtRM(principal)} = ${fmtRM(reward)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s4",
            diff: "L",
            template: tpl,
            canonicalParams: `${principal}:${rate}`,
            q,
            correctStr: fmtRM(reward),
            wrongCandidates: [fmtRM(principal + reward), fmtRM(reward * 10), fmtRM(reward * 2), fmtRM(reward + 50)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(reward, s)
          });
        }

        const q = `${person} melabur sebanyak ${fmtRM(principal)} dalam satu unit amanah saham yang mengisytiharkan kadar dividen ${rate}% setahun. Berapakah nilai dividen yang diterima selepas 1 tahun?`;
        const exp = `Nilai dividen = ${rate}% × ${fmtRM(principal)} = ${fmtRM(reward)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s4",
          diff: "L",
          template: tpl,
          canonicalParams: `${principal}:${rate}`,
          q,
          correctStr: fmtRM(reward),
          wrongCandidates: [fmtRM(principal + reward), fmtRM(reward * 10), fmtRM(reward + 100), fmtRM(Math.max(10, reward - 20))],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(reward, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s4_M",
      unit: "b3",
      skill: "b3_s4",
      diff: "M",
      templates: ["b3_s4_M_total_savings_1yr", "b3_s4_M_find_rate"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s4_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const person = pick(rng, NAMES_MY);

        if (tpl === "b3_s4_M_total_savings_1yr") {
          const principal = randInt(rng, 4, 25) * 500;
          const rate = pick(rng, [2, 3, 4, 5, 6]);
          const interest = round2((principal * rate) / 100);
          const total = round2(principal + interest);
          const q = `${person} menyimpan ${fmtRM(principal)} dalam akaun simpanan tetap pada kadar faedah ${rate}% setahun. Berapakah jumlah wang simpanannya selepas 1 tahun?`;
          const exp = `Faedah = ${rate}% × ${fmtRM(principal)} = ${fmtRM(interest)}. Jumlah simpanan = ${fmtRM(principal)} + ${fmtRM(interest)} = ${fmtRM(total)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s4",
            diff: "M",
            template: tpl,
            canonicalParams: `${principal}:${rate}`,
            q,
            correctStr: fmtRM(total),
            wrongCandidates: [fmtRM(interest), fmtRM(principal - interest), fmtRM(principal + 2 * interest), fmtRM(total + 50)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(total, s)
          });
        }

        const principal = randInt(rng, 2, 20) * 1000;
        const rate = pick(rng, [2, 3, 4, 5, 6, 7, 8]);
        const dividend = round2((principal * rate) / 100);
        const q = `${person} menerima dividen sebanyak ${fmtRM(dividend)} selepas melabur ${fmtRM(principal)} selama 1 tahun. Berapakah kadar dividen yang diisytiharkan?`;
        const exp = `Kadar dividen = (${dividend} ÷ ${principal}) × 100% = ${rate}%.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s4",
          diff: "M",
          template: tpl,
          canonicalParams: `${principal}:${rate}`,
          q,
          correctStr: `${rate}%`,
          wrongCandidates: [`${rate + 1}%`, `${rate + 2}%`, `${Math.max(1, rate - 1)}%`, `${rate * 2}%`],
          explanation: exp,
          rng,
          fallbackFn: (s) => `${rate + s + 2}%`
        });
      }
    },
    {
      type: "generator",
      id: "b3_s4_H",
      unit: "b3",
      skill: "b3_s4",
      diff: "H",
      templates: ["b3_s4_H_compare_accounts", "b3_s4_H_dividend_plus_bonus"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s4_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const person = pick(rng, NAMES_MY);

        if (tpl === "b3_s4_H_compare_accounts") {
          const pA = randInt(rng, 4, 15) * 1000;
          const rA = pick(rng, [2, 3, 4]);
          const pB = randInt(rng, 4, 15) * 1000;
          const rB = pick(rng, [4, 5, 6]);
          const intA = round2((pA * rA) / 100);
          const intB = round2((pB * rB) / 100);
          const diffVal = round2(Math.abs(intB - intA));
          const safeDiff = diffVal === 0 ? 100 : diffVal;
          if (diffVal === 0) {
            // Adjust pB cleanly if equal
            const adjPB = pB + 2000;
            const adjIntB = round2((adjPB * rB) / 100);
            const adjDiff = round2(Math.abs(adjIntB - intA));
            const q = `${person} menyimpan ${fmtRM(pA)} di Bank A dengan kadar faedah ${rA}% setahun dan melabur ${fmtRM(adjPB)} dalam Saham B dengan kadar dividen ${rB}% setahun. Hitung beza antara pulangan kedua-dua akaun itu selepas 1 tahun.`;
            const exp = `Faedah Bank A = ${fmtRM(intA)}. Dividen Saham B = ${fmtRM(adjIntB)}. Beza = ${fmtRM(adjDiff)}.`;
            return makeMcqResult({
              unit: "b3",
              skill: "b3_s4",
              diff: "H",
              template: tpl,
              canonicalParams: `${pA}:${rA}:${adjPB}:${rB}`,
              q,
              correctStr: fmtRM(adjDiff),
              wrongCandidates: [fmtRM(intA + adjIntB), fmtRM(intA), fmtRM(adjIntB), fmtRM(adjDiff + 50)],
              explanation: exp,
              rng,
              fallbackFn: (s) => moneyFallback(adjDiff, s)
            });
          }
          const q = `${person} menyimpan ${fmtRM(pA)} di Bank A dengan kadar faedah ${rA}% setahun dan melabur ${fmtRM(pB)} dalam Saham B dengan kadar dividen ${rB}% setahun. Hitung beza antara pulangan kedua-dua akaun itu selepas 1 tahun.`;
          const exp = `Faedah Bank A = ${rA}% × ${fmtRM(pA)} = ${fmtRM(intA)}. Dividen Saham B = ${rB}% × ${fmtRM(pB)} = ${fmtRM(intB)}. Beza = ${fmtRM(safeDiff)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s4",
            diff: "H",
            template: tpl,
            canonicalParams: `${pA}:${rA}:${pB}:${rB}`,
            q,
            correctStr: fmtRM(safeDiff),
            wrongCandidates: [fmtRM(intA + intB), fmtRM(intA), fmtRM(intB), fmtRM(safeDiff + 40)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(safeDiff, s)
          });
        }

        const principal = randInt(rng, 5, 20) * 1000;
        const divRate = pick(rng, [4, 5, 6]);
        const bonusRate = pick(rng, [1, 2]);
        const divAmt = round2((principal * divRate) / 100);
        const bonusAmt = round2((principal * bonusRate) / 100);
        const total = round2(principal + divAmt + bonusAmt);
        const q = `${person} melabur ${fmtRM(principal)} dalam koperasi yang membayar dividen ${divRate}% serta bonus tambahan ${bonusRate}% ke atas wang pelaburan asal. Berapakah jumlah keseluruhan wangnya selepas 1 tahun?`;
        const exp = `Dividen = ${fmtRM(divAmt)}, Bonus = ${fmtRM(bonusAmt)}. Jumlah keseluruhan = ${fmtRM(principal)} + ${fmtRM(divAmt)} + ${fmtRM(bonusAmt)} = ${fmtRM(total)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s4",
          diff: "H",
          template: tpl,
          canonicalParams: `${principal}:${divRate}:${bonusRate}`,
          q,
          correctStr: fmtRM(total),
          wrongCandidates: [fmtRM(divAmt + bonusAmt), fmtRM(principal + divAmt), fmtRM(total + bonusAmt), fmtRM(principal + divAmt - bonusAmt)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(total, s)
        });
      }
    },

    // ---------- B3 S5: Aset, Liabiliti, Insurans, Takaful dan Penyelesaian Masalah ----------
    {
      type: "generator",
      id: "b3_s5_L",
      unit: "b3",
      skill: "b3_s5",
      diff: "L",
      templates: ["b3_s5_L_classify_asset_liability", "b3_s5_L_insurance_takaful_concept"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s5_L::${seed}`));
        const tpl = pick(rng, this.templates);

        if (tpl === "b3_s5_L_classify_asset_liability") {
          const askLiability = rng() < 0.5;
          const assets = [
            "Rumah yang dibeli secara tunai",
            "Simpanan tetap di bank",
            "Barang kemas dan emas",
            "Saham amanah",
            "Kereta yang telah habis dibayar"
          ];
          const liabilities = [
            "Pinjaman perumahan",
            "Pinjaman pendidikan",
            "Hutang kad kredit",
            "Pinjaman kereta yang masih berbaki",
            "Bil tertunggak"
          ];
          if (askLiability) {
            const correct = pick(rng, liabilities);
            const wrongs = shuffle(rng, assets).slice(0, 3);
            return makeMcqResult({
              unit: "b3",
              skill: "b3_s5",
              diff: "L",
              template: tpl,
              canonicalParams: `liab:${correct}`,
              q: "Antara berikut, yang manakah merupakan suatu liabiliti?",
              correctStr: correct,
              wrongCandidates: wrongs,
              explanation: `${correct} ialah hutang atau tanggungan kewangan yang perlu dijelaskan, maka ia adalah liabiliti. Pilihan lain merupakan aset yang dimiliki.`,
              rng
            });
          }
          const correct = pick(rng, assets);
          const wrongs = shuffle(rng, liabilities).slice(0, 3);
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s5",
            diff: "L",
            template: tpl,
            canonicalParams: `asset:${correct}`,
            q: "Antara berikut, yang manakah merupakan suatu aset?",
            correctStr: correct,
            wrongCandidates: wrongs,
            explanation: `${correct} ialah harta yang dimiliki dan mempunyai nilai, maka ia adalah aset. Pilihan lain ialah liabiliti atau tanggungan hutang.`,
            rng
          });
        }

        const concepts = [
          {
            key: "takaful_meaning",
            q: "Apakah maksud asas bagi konsep takaful yang berasal daripada perkataan Arab 'Kafala'?",
            ans: "Saling menjamin, menjaga dan melindungi peserta",
            wrongs: [
              "Mengumpul keuntungan maksimum untuk syarikat pelaburan",
              "Membayar cukai perkhidmatan kepada kerajaan setiap bulan",
              "Menghapuskan semua hutang kad kredit tanpa bayaran"
            ],
            exp: "Takaful bermaksud saling menjamin, menjaga atau memelihara peserta melalui sumbangan bersama ke dalam dana takaful."
          },
          {
            key: "takaful_fund",
            q: "Manakah pernyataan yang betul tentang perbezaan antara takaful dengan insurans konvensional?",
            ans: "Sumbangan takaful dimiliki oleh Dana Takaful, manakala premium insurans dimiliki oleh syarikat",
            wrongs: [
              "Takaful hanya melindungi kereta manakala insurans melindungi kesihatan sahaja",
              "Insurans tidak memerlukan sebarang bayaran premium daripada pemegang polisi",
              "Sumbangan takaful dianggap sebagai liabiliti pinjaman bank"
            ],
            exp: "Dalam takaful, wang sumbangan menjadi milik Dana Takaful dan diuruskan oleh pengendali takaful, sedangkan dalam insurans konvensional premium menjadi milik syarikat insurans."
          },
          {
            key: "medical_importance",
            q: "Mengapakah seseorang individu digalakkan memiliki perlindungan insurans atau takaful perubatan?",
            ans: "Untuk membantu menampung kos rawatan dan mengurangkan beban kewangan ketika sakit",
            wrongs: [
              "Untuk mendapatkan rebat tol lebuh raya setiap hari",
              "Supaya harga kos barang jualan menjadi lebih tinggi",
              "Untuk menukar semua liabiliti rumah menjadi simpanan tetap"
            ],
            exp: "Insurans dan takaful perubatan melindungi pencarum daripada risiko kos rawatan hospital yang tinggi."
          }
        ];
        const sc = pick(rng, concepts);
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s5",
          diff: "L",
          template: tpl,
          canonicalParams: sc.key,
          q: sc.q,
          correctStr: sc.ans,
          wrongCandidates: sc.wrongs,
          explanation: sc.exp,
          rng
        });
      }
    },
    {
      type: "generator",
      id: "b3_s5_M",
      unit: "b3",
      skill: "b3_s5",
      diff: "M",
      templates: ["b3_s5_M_total_assets_from_mixed", "b3_s5_M_takaful_annual_budget"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s5_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const person = pick(rng, NAMES_MY);

        if (tpl === "b3_s5_M_total_assets_from_mixed") {
          const savings = randInt(rng, 10, 45) * 1000;
          const carCash = randInt(rng, 25, 65) * 1000;
          const eduLoan = randInt(rng, 12, 30) * 1000;
          const ccDebt = randInt(rng, 2, 9) * 1000;
          const totalAssets = savings + carCash;
          const totalLiab = eduLoan + ccDebt;
          const q = `Berikut ialah catatan kewangan ${person}: Simpanan tetap ${fmtRM(savings)}, Kereta (dibeli tunai) ${fmtRM(carCash)}, Pinjaman pendidikan ${fmtRM(eduLoan)}, dan Hutang kad kredit ${fmtRM(ccDebt)}. Berapakah jumlah aset ${person}?`;
          const exp = `Aset terdiri daripada Simpanan tetap dan Kereta tunai = ${fmtRM(savings)} + ${fmtRM(carCash)} = ${fmtRM(totalAssets)}. (Pinjaman pendidikan dan hutang kad kredit ialah liabiliti.)`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s5",
            diff: "M",
            template: tpl,
            canonicalParams: `${savings}:${carCash}:${eduLoan}:${ccDebt}`,
            q,
            correctStr: fmtRM(totalAssets),
            wrongCandidates: [
              fmtRM(totalAssets + totalLiab),
              fmtRM(Math.abs(totalAssets - totalLiab)),
              fmtRM(totalLiab),
              fmtRM(savings + eduLoan)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(totalAssets, s)
          });
        }

        const monthly = randInt(rng, 12, 35) * 10;
        const months = 12;
        const annual = monthly * months;
        const rebate = pick(rng, [100, 150, 200]);
        const netAnnual = annual - rebate;
        const q = `${person} mencarum sumbangan takaful keluarga sebanyak ${fmtRM(monthly)} setiap bulan. Jika syarikat memberikan rebat pembaharuan tahunan sebanyak ${fmtRM(rebate)} pada hujung tahun, berapakah jumlah bersih yang dibayar oleh ${person} dalam setahun?`;
        const exp = `Jumlah sumbangan 12 bulan = 12 × ${fmtRM(monthly)} = ${fmtRM(annual)}. Tolak rebat = ${fmtRM(annual)} - ${fmtRM(rebate)} = ${fmtRM(netAnnual)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s5",
          diff: "M",
          template: tpl,
          canonicalParams: `${monthly}:${rebate}`,
          q,
          correctStr: fmtRM(netAnnual),
          wrongCandidates: [fmtRM(annual), fmtRM(annual + rebate), fmtRM(monthly * 10 - rebate), fmtRM(netAnnual + 120)],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(netAnnual, s)
        });
      }
    },
    {
      type: "generator",
      id: "b3_s5_H",
      unit: "b3",
      skill: "b3_s5",
      diff: "H",
      templates: ["b3_s5_H_diff_liabilities_two_people", "b3_s5_H_house_profit_with_costs"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b3_s5_H::${seed}`));
        const tpl = pick(rng, this.templates);

        if (tpl === "b3_s5_H_diff_liabilities_two_people") {
          const [p1, p2] = pickTwo(rng, NAMES_MY);
          const a1 = randInt(rng, 40, 90) * 1000;
          const l1a = randInt(rng, 20, 45) * 1000;
          const l1b = randInt(rng, 5, 15) * 1000;
          const a2 = randInt(rng, 30, 80) * 1000;
          const l2a = randInt(rng, 10, 30) * 1000;
          const l2b = randInt(rng, 3, 12) * 1000;
          const totL1 = l1a + l1b;
          let totL2 = l2a + l2b;
          if (totL1 === totL2) totL2 += 5000;
          const diffLiab = Math.abs(totL1 - totL2);
          const q = `Catatan ${p1}: Simpanan ${fmtRM(a1)}, Pinjaman kereta ${fmtRM(l1a)}, Hutang kad kredit ${fmtRM(l1b)}. Catatan ${p2}: Emas ${fmtRM(a2)}, Pinjaman pendidikan ${fmtRM(totL2 - l2b)}, Pinjaman peribadi ${fmtRM(l2b)}. Berapakah beza jumlah liabiliti antara ${p1} dengan ${p2}?`;
          const exp = `Jumlah liabiliti ${p1} = ${fmtRM(l1a)} + ${fmtRM(l1b)} = ${fmtRM(totL1)}. Jumlah liabiliti ${p2} = ${fmtRM(totL2)}. Beza = ${fmtRM(diffLiab)}.`;
          return makeMcqResult({
            unit: "b3",
            skill: "b3_s5",
            diff: "H",
            template: tpl,
            canonicalParams: `${a1}:${totL1}:${a2}:${totL2}`,
            q,
            correctStr: fmtRM(diffLiab),
            wrongCandidates: [fmtRM(totL1 + totL2), fmtRM(Math.abs(a1 - a2)), fmtRM(totL1), fmtRM(diffLiab + 5000)],
            explanation: exp,
            rng,
            fallbackFn: (s) => moneyFallback(diffLiab, s)
          });
        }

        const buyer = pick(rng, NAMES_MY);
        const buyPrice = randInt(rng, 18, 35) * 10000;
        const repair = randInt(rng, 10, 30) * 1000;
        const legal = randInt(rng, 3, 9) * 1000;
        const profit = randInt(rng, 25, 65) * 1000;
        const totalCost = buyPrice + repair + legal;
        const sellPrice = totalCost + profit;
        const q = `${buyer} membeli sebuah rumah berharga ${fmtRM(buyPrice)}. Dia membelanjakan ${fmtRM(repair)} untuk kerja baik pulih dan ${fmtRM(legal)} untuk kos guaman. Beberapa tahun kemudian, dia menjual rumah itu dan mendapat untung bersih ${fmtRM(profit)}. Berapakah harga jual rumah tersebut?`;
        const exp = `Jumlah harga kos = ${fmtRM(buyPrice)} + ${fmtRM(repair)} + ${fmtRM(legal)} = ${fmtRM(totalCost)}. Harga jual = ${fmtRM(totalCost)} + ${fmtRM(profit)} = ${fmtRM(sellPrice)}.`;
        return makeMcqResult({
          unit: "b3",
          skill: "b3_s5",
          diff: "H",
          template: tpl,
          canonicalParams: `${buyPrice}:${repair}:${legal}:${profit}`,
          q,
          correctStr: fmtRM(sellPrice),
          wrongCandidates: [
            fmtRM(buyPrice + profit),
            fmtRM(totalCost - profit),
            fmtRM(buyPrice + repair + profit),
            fmtRM(sellPrice + 10000)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => moneyFallback(sellPrice, s)
        });
      }
    },

    // ---------- B4 S1: Mengenal Zon Masa dan Perbezaan Masa Antara Bandar ----------
    {
      type: "generator",
      id: "b4_s1_L",
      unit: "b4",
      skill: "b4_s1",
      diff: "L",
      templates: ["b4_s1_L_utc_diff", "b4_s1_L_clock_diff_same_day"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s1_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const nonNegCities = CITIES.filter((c) => c.offset >= 0);

        if (tpl === "b4_s1_L_utc_diff") {
          const [c1, c2] = pickTwo(rng, nonNegCities);
          const diff = Math.abs(c1.offset - c2.offset);
          const q = `Bandar ${c1.name} berada dalam zon masa ${fmtUtcOffset(c1.offset)}, manakala Bandar ${c2.name} berada dalam zon masa ${fmtUtcOffset(c2.offset)}. Berapakah perbezaan masa antara kedua-dua bandar tersebut?`;
          const exp = `Beza masa = |${c1.offset} - ${c2.offset}| = ${diff} jam.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s1",
            diff: "L",
            template: tpl,
            canonicalParams: `${c1.name}:${c2.name}`,
            q,
            correctStr: `${diff} jam`,
            wrongCandidates: [`${c1.offset + c2.offset} jam`, `${diff + 1} jam`, `${Math.max(1, diff - 1)} jam`, `${diff + 2} jam`],
            explanation: exp,
            rng,
            fallbackFn: (s) => `${diff + s + 2} jam`
          });
        }

        const [c1, c2] = pickTwo(rng, nonNegCities);
        const earlier = c1.offset < c2.offset ? c1 : c2;
        const later = c1.offset < c2.offset ? c2 : c1;
        const diff = later.offset - earlier.offset;
        const h1 = randInt(rng, 2, 11);
        const mins = pick(rng, [0, 15, 30, 45]);
        const t1 = fmtTime24(h1 * 60 + mins);
        const t2 = fmtTime24((h1 + diff) * 60 + mins);
        const q = `Pada hari yang sama, jam di ${earlier.name} (${fmtUtcOffset(earlier.offset)}) menunjukkan pukul ${t1}, manakala di ${later.name} (${fmtUtcOffset(later.offset)}) menunjukkan pukul ${t2}. Berapakah beza masa antara ${earlier.name} dengan ${later.name}?`;
        const exp = `Beza masa = ${t2} - ${t1} = ${diff} jam (selaras dengan ${fmtUtcOffset(later.offset)} dan ${fmtUtcOffset(earlier.offset)}).`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s1",
          diff: "L",
          template: tpl,
          canonicalParams: `${earlier.name}:${later.name}:${t1}`,
          q,
          correctStr: `${diff} jam`,
          wrongCandidates: [`${diff + 1} jam`, `${Math.max(1, diff - 1)} jam`, `${diff + 2} jam`, `${diff + 3} jam`],
          explanation: exp,
          rng,
          fallbackFn: (s) => `${diff + s + 3} jam`
        });
      }
    },
    {
      type: "generator",
      id: "b4_s1_M",
      unit: "b4",
      skill: "b4_s1",
      diff: "M",
      templates: ["b4_s1_M_same_day_ahead", "b4_s1_M_same_day_behind"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s1_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const nonNeg = CITIES.filter((c) => c.offset >= 0);
        const [cA, cB] = pickTwo(rng, nonNeg);
        const west = cA.offset < cB.offset ? cA : cB;
        const east = cA.offset < cB.offset ? cB : cA;
        const diff = east.offset - west.offset;
        const day = randInt(rng, 10, 22);
        const dateStr = fmtDateUtc(makeUtcMs(2026, 4, day, 0, 0));
        const mins = pick(rng, [0, 15, 30, 45]);

        if (tpl === "b4_s1_M_same_day_ahead") {
          const startH = randInt(rng, 1, Math.min(12, 22 - diff));
          const startMin = startH * 60 + mins;
          const endMin = startMin + diff * 60;
          const ans = fmtTime24(endMin);
          const q = `Waktu di ${west.name} (${fmtUtcOffset(west.offset)}) ialah ${fmtTime24(startMin)} pada ${dateStr}. ${east.name} (${fmtUtcOffset(east.offset)}) mendahului ${west.name} sebanyak ${diff} jam. Pukul berapakah waktu di ${east.name} pada ketika itu?`;
          const exp = `${east.name} mendahului ${diff} jam, maka tambah ${diff} jam: ${fmtTime24(startMin)} + ${diff} jam = ${ans} pada hari yang sama (${dateStr}).`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s1",
            diff: "M",
            template: tpl,
            canonicalParams: `${west.name}:${east.name}:${startMin}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtTime24(startMin - diff * 60),
              fmtTime24(endMin + 60),
              fmtTime24(endMin - 60),
              fmtTime24(endMin + 120)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTime24(endMin + s * 60)
          });
        }

        const startH = randInt(rng, Math.max(diff + 1, 11), 22);
        const startMin = startH * 60 + mins;
        const endMin = startMin - diff * 60;
        const ans = fmtTime24(endMin);
        const q = `Waktu di ${east.name} (${fmtUtcOffset(east.offset)}) ialah ${fmtTime24(startMin)} pada ${dateStr}. ${west.name} (${fmtUtcOffset(west.offset)}) lewat ${diff} jam berbanding ${east.name}. Pukul berapakah waktu di ${west.name}?`;
        const exp = `${west.name} lewat ${diff} jam, maka tolak ${diff} jam: ${fmtTime24(startMin)} - ${diff} jam = ${ans} pada hari yang sama (${dateStr}).`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s1",
          diff: "M",
          template: tpl,
          canonicalParams: `${east.name}:${west.name}:${startMin}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTime24(startMin + diff * 60),
            fmtTime24(endMin + 60),
            fmtTime24(endMin - 60),
            fmtTime24(endMin + 120)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTime24(endMin + s * 60)
        });
      }
    },
    {
      type: "generator",
      id: "b4_s1_H",
      unit: "b4",
      skill: "b4_s1",
      diff: "H",
      templates: ["b4_s1_H_negative_utc_diff", "b4_s1_H_half_hour_zone"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s1_H::${seed}`));
        const tpl = pick(rng, this.templates);

        if (tpl === "b4_s1_H_negative_utc_diff") {
          const neg = pick(rng, CITIES.filter((c) => c.offset < 0));
          const pos = pick(rng, CITIES.filter((c) => c.offset > 0));
          const diff = pos.offset - neg.offset;
          const wrongSub = Math.abs(pos.offset - Math.abs(neg.offset));
          const q = `Zon masa di ${pos.name} ialah ${fmtUtcOffset(pos.offset)}, manakala zon masa di ${neg.name} ialah ${fmtUtcOffset(neg.offset)}. Hitung perbezaan masa antara ${pos.name} dengan ${neg.name}.`;
          const exp = `Beza masa = ${pos.offset} - (${neg.offset}) = ${pos.offset} + ${Math.abs(neg.offset)} = ${diff} jam.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s1",
            diff: "H",
            template: tpl,
            canonicalParams: `${pos.name}:${neg.name}`,
            q,
            correctStr: `${diff} jam`,
            wrongCandidates: [`${wrongSub} jam`, `${diff - 1} jam`, `${diff + 1} jam`, `${wrongSub + 2} jam`],
            explanation: exp,
            rng,
            fallbackFn: (s) => `${diff + s + 1} jam`
          });
        }

        const halfCity = pick(rng, HALF_CITIES);
        const kl = { name: "Kuala Lumpur", offset: 8 };
        const diffMins = Math.round(Math.abs(halfCity.offset - kl.offset) * 60);
        const startH = randInt(rng, 8, 17);
        const startMinChoice = pick(rng, [0, 15, 30, 45]);
        const startTotal = startH * 60 + startMinChoice;
        const isHalfAhead = halfCity.offset > kl.offset;
        const targetTotal = isHalfAhead ? startTotal + diffMins : startTotal - diffMins;
        const ans = fmtTime24(targetTotal);
        const dirWord = isHalfAhead ? "mendahului" : "lewat";
        const opWord = isHalfAhead ? "tambah" : "tolak";
        const q = `Kuala Lumpur berada di ${fmtUtcOffset(kl.offset)} manakala ${halfCity.name} berada di ${fmtUtcOffset(halfCity.offset)}, iaitu ${halfCity.name} ${dirWord} Kuala Lumpur sebanyak ${fmtDuration(diffMins)}. Jika waktu di Kuala Lumpur ialah ${fmtTime24(startTotal)}, pukul berapakah di ${halfCity.name} pada hari yang sama?`;
        const exp = `Beza masa ialah ${fmtDuration(diffMins)}. Maka ${opWord} ${fmtDuration(diffMins)} daripada ${fmtTime24(startTotal)} = ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s1",
          diff: "H",
          template: tpl,
          canonicalParams: `${halfCity.name}:${startTotal}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTime24(isHalfAhead ? startTotal - diffMins : startTotal + diffMins),
            fmtTime24(targetTotal + 30),
            fmtTime24(targetTotal - 30),
            fmtTime24(targetTotal + 60)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTime24(targetTotal + s * 15)
        });
      }
    },

    // ---------- B4 S2: Menentukan Waktu Termasuk Lintas Hari ----------
    {
      type: "generator",
      id: "b4_s2_L",
      unit: "b4",
      skill: "b4_s2",
      diff: "L",
      templates: ["b4_s2_L_rollover_forward", "b4_s2_L_rollover_backward"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s2_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const day = randInt(rng, 10, 24);
        const monthIdx = pick(rng, [2, 4, 6, 9]); // Mar, May, Jul, Oct
        const mins = pick(rng, [0, 15, 30, 45]);

        if (tpl === "b4_s2_L_rollover_forward") {
          const london = { name: "London", offset: 0 };
          const east = pick(rng, [
            { name: "Kuala Lumpur", offset: 8 },
            { name: "Tokyo", offset: 9 },
            { name: "Sydney", offset: 10 }
          ]);
          const diff = east.offset - london.offset;
          const h = randInt(rng, 24 - diff, 23);
          const startMs = makeUtcMs(2026, monthIdx, day, h, mins);
          const endMs = startMs + diff * 3600000;
          const ans = fmtTimeDateUtc(endMs);
          const wrongSameDay = fmtTimeDateUtc(endMs - 86400000);
          const wrongSub = fmtTimeDateUtc(startMs - diff * 3600000);
          const q = `Waktu di ${london.name} (${fmtUtcOffset(london.offset)}) ialah ${fmtTimeDateUtc(startMs)}. ${east.name} (${fmtUtcOffset(east.offset)}) mendahului ${london.name} sebanyak ${diff} jam. Nyatakan waktu dan tarikh di ${east.name}.`;
          const exp = `Tambah ${diff} jam kepada ${fmtTimeDateUtc(startMs)} akan melintasi tengah malam ke hari berikutnya, iaitu ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s2",
            diff: "L",
            template: tpl,
            canonicalParams: `${east.name}:${day}:${monthIdx}:${h}:${mins}`,
            q,
            correctStr: ans,
            wrongCandidates: [wrongSameDay, wrongSub, fmtTimeDateUtc(endMs + 3600000), fmtTimeDateUtc(endMs + 86400000)],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTimeDateUtc(endMs + s * 3600000)
          });
        }

        const kl = { name: "Kuala Lumpur", offset: 8 };
        const west = pick(rng, [
          { name: "London", offset: 0 },
          { name: "Makkah", offset: 3 },
          { name: "Dubai", offset: 4 }
        ]);
        const diff = kl.offset - west.offset;
        const h = randInt(rng, 0, diff - 1);
        const startMs = makeUtcMs(2026, monthIdx, day, h, mins);
        const endMs = startMs - diff * 3600000;
        const ans = fmtTimeDateUtc(endMs);
        const wrongSameDay = fmtTimeDateUtc(endMs + 86400000);
        const wrongAdd = fmtTimeDateUtc(startMs + diff * 3600000);
        const q = `Waktu di ${kl.name} (${fmtUtcOffset(kl.offset)}) ialah ${fmtTimeDateUtc(startMs)}. ${west.name} (${fmtUtcOffset(west.offset)}) lewat ${diff} jam berbanding ${kl.name}. Nyatakan waktu dan tarikh di ${west.name}.`;
        const exp = `Tolak ${diff} jam daripada ${fmtTimeDateUtc(startMs)} akan undur ke hari sebelumnya, iaitu ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s2",
          diff: "L",
          template: tpl,
          canonicalParams: `${west.name}:${day}:${monthIdx}:${h}:${mins}`,
          q,
          correctStr: ans,
          wrongCandidates: [wrongSameDay, wrongAdd, fmtTimeDateUtc(endMs - 3600000), fmtTimeDateUtc(endMs - 86400000)],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTimeDateUtc(endMs - s * 3600000)
        });
      }
    },
    {
      type: "generator",
      id: "b4_s2_M",
      unit: "b4",
      skill: "b4_s2",
      diff: "M",
      templates: ["b4_s2_M_monthend_forward", "b4_s2_M_negative_utc_crossday"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s2_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const mins = pick(rng, [0, 20, 30, 45]);

        if (tpl === "b4_s2_M_monthend_forward") {
          // Month-end rollover forward (e.g. 30 Apr -> 01 May, or 31 May -> 01 Jun)
          const monthPairs = [
            { mIdx: 3, lastDay: 30 }, // Apr 30 -> May 01
            { mIdx: 4, lastDay: 31 }, // May 31 -> Jun 01
            { mIdx: 7, lastDay: 31 }, // Aug 31 -> Sep 01
            { mIdx: 8, lastDay: 30 }  // Sep 30 -> Oct 01
          ];
          const mp = pick(rng, monthPairs);
          const west = pick(rng, [{ name: "London", offset: 0 }, { name: "Makkah", offset: 3 }, { name: "Dubai", offset: 4 }]);
          const east = pick(rng, [{ name: "Kuala Lumpur", offset: 8 }, { name: "Tokyo", offset: 9 }, { name: "Sydney", offset: 10 }]);
          const diff = east.offset - west.offset;
          const h = randInt(rng, 24 - diff, 23);
          const startMs = makeUtcMs(2026, mp.mIdx, mp.lastDay, h, mins);
          const endMs = startMs + diff * 3600000;
          const ans = fmtTimeDateUtc(endMs);
          const q = `Waktu di ${west.name} (${fmtUtcOffset(west.offset)}) ialah ${fmtTimeDateUtc(startMs)}. ${east.name} (${fmtUtcOffset(east.offset)}) mendahului ${west.name} sebanyak ${diff} jam. Apakah waktu dan tarikh di ${east.name}?`;
          const exp = `Tambah ${diff} jam kepada ${fmtTimeDateUtc(startMs)} melepasi hujung bulan dan masuk ke ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s2",
            diff: "M",
            template: tpl,
            canonicalParams: `${west.name}:${east.name}:${mp.mIdx}:${h}:${mins}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtTimeDateUtc(endMs - 86400000),
              fmtTimeDateUtc(startMs - diff * 3600000),
              fmtTimeDateUtc(endMs + 3600000),
              fmtTimeDateUtc(endMs - 3600000)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTimeDateUtc(endMs + s * 3600000)
          });
        }

        const kl = { name: "Kuala Lumpur", offset: 8 };
        const neg = pick(rng, CITIES.filter((c) => c.offset < 0));
        const diff = kl.offset - neg.offset; // 11 or 13 hours
        const monthIdx = pick(rng, [4, 5, 6, 9]);
        const day = pick(rng, [1, 15, 20]); // includes 1st of month rolling back!
        const h = randInt(rng, 1, diff - 1);
        const startMs = makeUtcMs(2026, monthIdx, day, h, mins);
        const endMs = startMs - diff * 3600000;
        const ans = fmtTimeDateUtc(endMs);
        const wrongNaive = fmtTimeDateUtc(startMs - (kl.offset - Math.abs(neg.offset)) * 3600000);
        const q = `Waktu di ${kl.name} (${fmtUtcOffset(kl.offset)}) ialah ${fmtTimeDateUtc(startMs)}. ${neg.name} (${fmtUtcOffset(neg.offset)}) lewat ${diff} jam dari ${kl.name}. Nyatakan waktu dan tarikh di ${neg.name}.`;
        const exp = `Tolak ${diff} jam daripada ${fmtTimeDateUtc(startMs)} membawa ke hari sebelumnya, iaitu ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s2",
          diff: "M",
          template: tpl,
          canonicalParams: `${neg.name}:${monthIdx}:${day}:${h}:${mins}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTimeDateUtc(endMs + 86400000),
            wrongNaive,
            fmtTimeDateUtc(startMs + diff * 3600000),
            fmtTimeDateUtc(endMs - 3600000)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTimeDateUtc(endMs - s * 3600000)
        });
      }
    },
    {
      type: "generator",
      id: "b4_s2_H",
      unit: "b4",
      skill: "b4_s2",
      diff: "H",
      templates: ["b4_s2_H_two_hop_meeting", "b4_s2_H_reverse_origin_time"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s2_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const day = randInt(rng, 5, 25);
        const monthIdx = pick(rng, [2, 4, 7, 10]);

        if (tpl === "b4_s2_H_two_hop_meeting") {
          const caller = pick(rng, [{ name: "London", offset: 0 }, { name: "Dubai", offset: 4 }]);
          const receiver = pick(rng, [{ name: "Tokyo", offset: 9 }, { name: "Sydney", offset: 10 }]);
          const diff = receiver.offset - caller.offset;
          const startH = randInt(rng, 24 - diff, 22);
          const startM = pick(rng, [0, 15, 30]);
          const callDurMins = pick(rng, [35, 45, 50, 75]);
          const startCallerMs = makeUtcMs(2026, monthIdx, day, startH, startM);
          const endReceiverMs = startCallerMs + diff * 3600000 + callDurMins * 60000;
          const ans = fmtTimeDateUtc(endReceiverMs);
          const person = pick(rng, NAMES_MY);
          const q = `${person} di ${caller.name} (${fmtUtcOffset(caller.offset)}) memulakan panggilan video dengan rakannya di ${receiver.name} (${fmtUtcOffset(receiver.offset)}) pada ${fmtTimeDateUtc(startCallerMs)}. ${receiver.name} mendahului ${caller.name} sebanyak ${diff} jam. Jika panggilan itu berlangsung selama ${fmtDuration(callDurMins)}, bilakah panggilan itu tamat mengikut waktu tempatan di ${receiver.name}?`;
          const exp = `Waktu mula di ${receiver.name} = ${fmtTimeDateUtc(startCallerMs + diff * 3600000)}. Tambah ${fmtDuration(callDurMins)} = ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s2",
            diff: "H",
            template: tpl,
            canonicalParams: `${caller.name}:${receiver.name}:${day}:${monthIdx}:${startH}:${startM}:${callDurMins}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtTimeDateUtc(startCallerMs + diff * 3600000),
              fmtTimeDateUtc(endReceiverMs - 86400000),
              fmtTimeDateUtc(startCallerMs - diff * 3600000 + callDurMins * 60000),
              fmtTimeDateUtc(endReceiverMs + 3600000)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTimeDateUtc(endReceiverMs + s * 1800000)
          });
        }

        const cityA = { name: "Kuala Lumpur", offset: 8 };
        const cityB = pick(rng, [{ name: "London", offset: 0 }, { name: "New York", offset: -5 }]);
        const diff = cityA.offset - cityB.offset;
        const bH = randInt(rng, 18, 23);
        const bM = pick(rng, [10, 25, 40, 50]);
        const bMs = makeUtcMs(2026, monthIdx, day, bH, bM);
        const aMs = bMs + diff * 3600000;
        const ans = fmtTimeDateUtc(aMs);
        const q = `Siaran langsung sukan di ${cityB.name} (${fmtUtcOffset(cityB.offset)}) bermula pada ${fmtTimeDateUtc(bMs)}. ${cityA.name} (${fmtUtcOffset(cityA.offset)}) mendahului ${cityB.name} sebanyak ${diff} jam. Nyatakan waktu dan tarikh siaran langsung itu di ${cityA.name}.`;
        const exp = `Tambah ${diff} jam kepada ${fmtTimeDateUtc(bMs)} melintasi tengah malam menjadi ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s2",
          diff: "H",
          template: tpl,
          canonicalParams: `${cityB.name}:${day}:${monthIdx}:${bH}:${bM}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTimeDateUtc(bMs - diff * 3600000),
            fmtTimeDateUtc(aMs - 86400000),
            fmtTimeDateUtc(aMs + 3600000),
            fmtTimeDateUtc(aMs - 3600000)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTimeDateUtc(aMs + s * 3600000)
        });
      }
    },

    // ---------- B4 S3: Penyelesaian Masalah Zon Masa dan Tempoh Penerbangan/Perjalanan ----------
    {
      type: "generator",
      id: "b4_s3_L",
      unit: "b4",
      skill: "b4_s3",
      diff: "L",
      templates: ["b4_s3_L_same_zone_duration", "b4_s3_L_local_arrival_same_day"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s3_L::${seed}`));
        const tpl = pick(rng, this.templates);
        const day = randInt(rng, 5, 25);
        const monthIdx = pick(rng, [1, 4, 7, 10]);
        const dateStr = fmtDateUtc(makeUtcMs(2026, monthIdx, day, 0, 0));

        if (tpl === "b4_s3_L_same_zone_duration") {
          const sh = randInt(rng, 7, 13);
          const sm = pick(rng, [0, 15, 30, 45]);
          const durH = randInt(rng, 2, 6);
          const durM = pick(rng, [15, 30, 45]);
          const totalDur = durH * 60 + durM;
          const startMin = sh * 60 + sm;
          const endMin = startMin + totalDur;
          const ans = fmtDuration(totalDur);
          const q = `Penerbangan dari Kuala Lumpur ke Kuching (zon masa sama, UTC+8) berlepas pada ${fmtTime24(startMin)} dan tiba pada ${fmtTime24(endMin)} pada ${dateStr}. Berapakah tempoh penerbangan tersebut?`;
          const exp = `Tempoh penerbangan = ${fmtTime24(endMin)} - ${fmtTime24(startMin)} = ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s3",
            diff: "L",
            template: tpl,
            canonicalParams: `${startMin}:${totalDur}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtDuration(totalDur + 60),
              fmtDuration(Math.max(30, totalDur - 60)),
              fmtDuration(totalDur + 15),
              fmtDuration(Math.max(30, totalDur - 15))
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtDuration(totalDur + s * 30)
          });
        }

        const depH = randInt(rng, 6, 12);
        const depM = pick(rng, [0, 15, 30]);
        const durH = randInt(rng, 3, 5);
        const durM = pick(rng, [15, 30, 45]);
        const durTotal = durH * 60 + durM;
        const dest = pick(rng, [
          { name: "Tokyo", offset: 9, diff: 1, dir: "mendahului" },
          { name: "Jakarta", offset: 7, diff: -1, dir: "lewat" }
        ]);
        const depMin = depH * 60 + depM;
        const arrMin = depMin + durTotal + dest.diff * 60;
        const ans = fmtTime24(arrMin);
        const diffAbs = Math.abs(dest.diff);
        const q = `Sebuah kapal terbang berlepas dari Kuala Lumpur (UTC+8) pada ${fmtTime24(depMin)}, ${dateStr} menuju ke ${dest.name} (${fmtUtcOffset(dest.offset)}, ${dest.dir} Kuala Lumpur sebanyak ${diffAbs} jam). Jika tempoh penerbangan ialah ${fmtDuration(durTotal)}, pukul berapakah pesawat itu tiba mengikut waktu tempatan di ${dest.name} pada hari yang sama?`;
        const exp = `Masa tiba dalam waktu Kuala Lumpur = ${fmtTime24(depMin + durTotal)}. Selaraskan ${dest.dir} ${diffAbs} jam untuk ${dest.name} = ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s3",
          diff: "L",
          template: tpl,
          canonicalParams: `${dest.name}:${depMin}:${durTotal}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTime24(depMin + durTotal),
            fmtTime24(depMin + durTotal - dest.diff * 60),
            fmtTime24(arrMin + 60),
            fmtTime24(arrMin - 30)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTime24(arrMin + s * 30)
        });
      }
    },
    {
      type: "generator",
      id: "b4_s3_M",
      unit: "b4",
      skill: "b4_s3",
      diff: "M",
      templates: ["b4_s3_M_flight_arrival_cross_day", "b4_s3_M_flight_duration_across_zones"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s3_M::${seed}`));
        const tpl = pick(rng, this.templates);
        const day = randInt(rng, 6, 25);
        const monthIdx = pick(rng, [2, 4, 6, 9]);

        if (tpl === "b4_s3_M_flight_arrival_cross_day") {
          const routes = [
            { from: "Kuala Lumpur", fromOff: 8, to: "London", toOff: 0, durH: 13, durM: 30 },
            { from: "Kuala Lumpur", fromOff: 8, to: "Makkah", toOff: 3, durH: 9, durM: 15 },
            { from: "Kuala Lumpur", fromOff: 8, to: "Sydney", toOff: 10, durH: 8, durM: 20 },
            { from: "Kuala Lumpur", fromOff: 8, to: "Tokyo", toOff: 9, durH: 7, durM: 10 }
          ];
          const rt = pick(rng, routes);
          const depH = randInt(rng, 20, 23);
          const depM = pick(rng, [10, 20, 30, 45]);
          const depLocalMs = makeUtcMs(2026, monthIdx, day, depH, depM);
          const durMins = rt.durH * 60 + rt.durM;
          const diffHours = rt.toOff - rt.fromOff;
          const arrOriginMs = depLocalMs + durMins * 60000;
          const arrDestMs = arrOriginMs + diffHours * 3600000;
          const ans = fmtTimeDateUtc(arrDestMs);
          const q = `Sebuah pesawat berlepas dari ${rt.from} (${fmtUtcOffset(rt.fromOff)}) pada ${fmtTimeDateUtc(depLocalMs)} menuju ke ${rt.to} (${fmtUtcOffset(rt.toOff)}). Tempoh penerbangan ialah ${fmtDuration(durMins)}. Nyatakan waktu dan tarikh ketibaan mengikut waktu tempatan di ${rt.to}.`;
          const exp = `Waktu tiba dalam zon masa ${rt.from} = ${fmtTimeDateUtc(arrOriginMs)}. Perbezaan zon masa ke ${rt.to} ialah ${diffHours >= 0 ? "+" : ""}${diffHours} jam, maka waktu tempatan di ${rt.to} ialah ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s3",
            diff: "M",
            template: tpl,
            canonicalParams: `${rt.to}:${day}:${monthIdx}:${depH}:${depM}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtTimeDateUtc(arrOriginMs),
              fmtTimeDateUtc(arrOriginMs - diffHours * 3600000),
              fmtTimeDateUtc(arrDestMs - 86400000),
              fmtTimeDateUtc(arrDestMs + 3600000)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTimeDateUtc(arrDestMs + s * 3600000)
          });
        }

        const routes = [
          { from: "Kuala Lumpur", fromOff: 8, to: "Dubai", toOff: 4, durH: 7, durM: 15 },
          { from: "Kuala Lumpur", fromOff: 8, to: "London", toOff: 0, durH: 13, durM: 40 },
          { from: "Dubai", fromOff: 4, to: "Tokyo", toOff: 9, durH: 9, durM: 45 },
          { from: "London", fromOff: 0, to: "Kuala Lumpur", toOff: 8, durH: 13, durM: 20 }
        ];
        const rt = pick(rng, routes);
        const depH = randInt(rng, 15, 22);
        const depM = pick(rng, [0, 15, 30, 45]);
        const depLocalMs = makeUtcMs(2026, monthIdx, day, depH, depM);
        const durMins = rt.durH * 60 + rt.durM;
        const diffHours = rt.toOff - rt.fromOff;
        const arrDestMs = depLocalMs + durMins * 60000 + diffHours * 3600000;
        const ans = fmtDuration(durMins);
        const naiveDur = Math.abs(Math.round((arrDestMs - depLocalMs) / 60000));
        const wrongOppSign = Math.abs(durMins + 2 * diffHours * 60);
        const q = `Sebuah penerbangan berlepas dari ${rt.from} (${fmtUtcOffset(rt.fromOff)}) pada ${fmtTimeDateUtc(depLocalMs)} dan mendarat di ${rt.to} (${fmtUtcOffset(rt.toOff)}) pada ${fmtTimeDateUtc(arrDestMs)} waktu tempatan ${rt.to}. Berapakah tempoh penerbangan sebenar?`;
        const exp = `Tukarkan waktu tiba ${rt.to} kepada waktu ${rt.from}: tolak (${diffHours >= 0 ? "+" : ""}${diffHours} jam) = ${fmtTimeDateUtc(arrDestMs - diffHours * 3600000)}. Tempoh sebenar = ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s3",
          diff: "M",
          template: tpl,
          canonicalParams: `${rt.from}:${rt.to}:${day}:${monthIdx}:${depH}:${depM}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtDuration(naiveDur),
            fmtDuration(wrongOppSign),
            fmtDuration(durMins + 60),
            fmtDuration(Math.max(60, durMins - 60))
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtDuration(durMins + s * 30)
        });
      }
    },
    {
      type: "generator",
      id: "b4_s3_H",
      unit: "b4",
      skill: "b4_s3",
      diff: "H",
      templates: ["b4_s3_H_transit_flight_arrival", "b4_s3_H_find_departure_from_arrival"],
      generate(seed) {
        const rng = mulberry32(hashSeed(`b4_s3_H::${seed}`));
        const tpl = pick(rng, this.templates);
        const day = randInt(rng, 8, 22);
        const monthIdx = pick(rng, [2, 4, 7, 10]);

        if (tpl === "b4_s3_H_transit_flight_arrival") {
          const depH = randInt(rng, 18, 23);
          const depM = pick(rng, [0, 15, 30, 45]);
          const leg1Mins = pick(rng, [420, 435, 450]); // 7h, 7h15m, 7h30m (KL -> Dubai)
          const transitMins = pick(rng, [120, 150, 180]); // 2h, 2h30m, 3h
          const leg2Mins = pick(rng, [420, 440, 450]); // 7h, 7h20m, 7h30m (Dubai -> London)
          const depKlMs = makeUtcMs(2026, monthIdx, day, depH, depM);
          const totalElapsed = leg1Mins + transitMins + leg2Mins;
          // KL is UTC+8, London is UTC+0 -> diff = -8 hours
          const arrKlMs = depKlMs + totalElapsed * 60000;
          const arrLondonMs = arrKlMs - 8 * 3600000;
          const ans = fmtTimeDateUtc(arrLondonMs);
          const traveler = pick(rng, NAMES_MY);
          const q = `${traveler} berlepas dari Kuala Lumpur (UTC+8) pada ${fmtTimeDateUtc(depKlMs)} ke Dubai selama ${fmtDuration(leg1Mins)}, transit di Dubai selama ${fmtDuration(transitMins)}, dan menyambung penerbangan ke London (UTC+0) selama ${fmtDuration(leg2Mins)}. Bilakah ${traveler} tiba di London mengikut waktu tempatan London?`;
          const exp = `Jumlah tempoh perjalanan termasuk transit = ${fmtDuration(totalElapsed)}. Waktu tiba dalam zon Kuala Lumpur = ${fmtTimeDateUtc(arrKlMs)}. Tolak 8 jam (beza UTC+8 dan UTC+0) = ${ans}.`;
          return makeMcqResult({
            unit: "b4",
            skill: "b4_s3",
            diff: "H",
            template: tpl,
            canonicalParams: `${day}:${monthIdx}:${depH}:${depM}:${leg1Mins}:${transitMins}:${leg2Mins}`,
            q,
            correctStr: ans,
            wrongCandidates: [
              fmtTimeDateUtc(arrLondonMs - transitMins * 60000),
              fmtTimeDateUtc(arrKlMs),
              fmtTimeDateUtc(arrKlMs + 8 * 3600000),
              fmtTimeDateUtc(arrLondonMs + 3600000)
            ],
            explanation: exp,
            rng,
            fallbackFn: (s) => fmtTimeDateUtc(arrLondonMs + s * 3600000)
          });
        }

        const dest = pick(rng, [
          { name: "London", offset: 0, durMins: 810 }, // 13h 30m
          { name: "Makkah", offset: 3, durMins: 555 }, // 9h 15m
          { name: "Sydney", offset: 10, durMins: 500 } // 8h 20m
        ]);
        const arrH = randInt(rng, 8, 16);
        const arrM = pick(rng, [0, 15, 30, 45]);
        const arrDestMs = makeUtcMs(2026, monthIdx, day, arrH, arrM);
        // Convert destination local time to KL (UTC+8): arrKlMs = arrDestMs + (8 - dest.offset) * 3600000
        const diffToKl = 8 - dest.offset;
        const arrKlMs = arrDestMs + diffToKl * 3600000;
        const depKlMs = arrKlMs - dest.durMins * 60000;
        const ans = fmtTimeDateUtc(depKlMs);
        const traveler = pick(rng, NAMES_MY);
        const q = `${traveler} perlu tiba di ${dest.name} (${fmtUtcOffset(dest.offset)}) tepat pada ${fmtTimeDateUtc(arrDestMs)} waktu tempatan ${dest.name}. Jika penerbangan dari Kuala Lumpur (UTC+8) ke ${dest.name} mengambil masa ${fmtDuration(dest.durMins)}, bilakah waktu berlepas yang sepatutnya mengikut waktu Kuala Lumpur?`;
        const exp = `Waktu tiba dalam zon Kuala Lumpur = ${fmtTimeDateUtc(arrKlMs)}. Tolak tempoh penerbangan ${fmtDuration(dest.durMins)} = ${ans}.`;
        return makeMcqResult({
          unit: "b4",
          skill: "b4_s3",
          diff: "H",
          template: tpl,
          canonicalParams: `${dest.name}:${day}:${monthIdx}:${arrH}:${arrM}`,
          q,
          correctStr: ans,
          wrongCandidates: [
            fmtTimeDateUtc(arrDestMs - dest.durMins * 60000),
            fmtTimeDateUtc(arrDestMs - diffToKl * 3600000 - dest.durMins * 60000),
            fmtTimeDateUtc(depKlMs + 86400000),
            fmtTimeDateUtc(depKlMs - 3600000)
          ],
          explanation: exp,
          rng,
          fallbackFn: (s) => fmtTimeDateUtc(depKlMs - s * 3600000)
        });
      }
    }
  ];
    return generators;
  }

  function buildPartB5B6() {
    "use strict";
  function hashSeed(input) {
    const str = String(input);
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seedNum) {
    let a = seedNum >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(genId, seed) {
    return mulberry32(hashSeed(`${genId}::${String(seed)}`));
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
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function roundDec(val, places = 3) {
    const factor = Math.pow(10, places);
    return Math.round((val + Number.EPSILON) * factor) / factor;
  }

  function fmtNum(val) {
    const r = roundDec(val, 3);
    return Number.isInteger(r) ? String(r) : String(r);
  }

  /**
   * Parse a numeric+unit string like "1.5 kg" or "120°" into a canonical signature
   * so equivalent numeric values with the same unit are rejected as duplicates.
   */
  function optionKey(optStr) {
    const s = String(optStr).trim();
    const m = s.match(/^(-?\d+(?:\.\d+)?)\s*(.*)$/);
    if (!m) return `txt:${s.toLowerCase()}`;
    const num = roundDec(Number(m[1]), 4);
    const unit = m[2].trim().toLowerCase();
    return `num:${num}|${unit}`;
  }

  /**
   * Build 4 unique MCQ options without ever emitting "(1)" fallback labels.
   */
  function buildMcq(rng, meta, q, correctStr, wrongCandidates, explanation, sig) {
    const ansStr = String(correctStr).trim();
    const seenKeys = new Set([optionKey(ansStr)]);
    const seenStrings = new Set([ansStr]);
    const wrongs = [];

    const tryAdd = (cand) => {
      const s = String(cand).trim();
      if (!s || s.includes("NaN") || s.includes("undefined")) return false;
      const k = optionKey(s);
      if (seenStrings.has(s) || seenKeys.has(k)) return false;
      seenStrings.add(s);
      seenKeys.add(k);
      wrongs.push(s);
      return true;
    };

    for (const w of wrongCandidates) {
      tryAdd(w);
      if (wrongs.length === 3) break;
    }

    // Numeric perturbation fallback (only for numeric answers, never "(1)" suffixes)
    if (wrongs.length < 3) {
      const m = ansStr.match(/^(-?\d+(?:\.\d+)?)\s*(.*)$/);
      if (m && Number.isFinite(Number(m[1]))) {
        const base = Number(m[1]);
        const suffix = m[2] ? (m[2].startsWith("°") ? "°" : ` ${m[2]}`) : "";
        const deltas = base >= 100 ? [10, -10, 20, -20, 50, -50, 100, -100, 5, -5] : [1, -1, 2, -2, 3, -3, 5, -5, 4, -4, 10, -10];
        for (const d of deltas) {
          const val = roundDec(base + d, 3);
          if (val <= 0) continue;
          tryAdd(`${fmtNum(val)}${suffix}`);
          if (wrongs.length === 3) break;
        }
        let step = 1;
        while (wrongs.length < 3 && step < 200) {
          const val = roundDec(base + step, 3);
          if (val > 0) tryAdd(`${fmtNum(val)}${suffix}`);
          step++;
        }
      }
    }

    if (wrongs.length !== 3) {
      throw new Error(`Unable to build 3 unique distractors for ${sig}: ${ansStr}`);
    }

    const options = shuffle(rng, [ansStr, ...wrongs]);
    return {
      unit: meta.unit,
      skill: meta.skill,
      diff: meta.diff,
      template: meta.template,
      q,
      options,
      correctIndex: options.indexOf(ansStr),
      explanation,
      sig
    };
  }

  function makeGen(unit, skill, diff, templates, buildFn) {
    const id = `${skill}_${diff}`;
    return {
      type: "generator",
      id,
      unit,
      skill,
      diff,
      templates: templates.slice(),
      generate(seed) {
        const rng = makeRng(id, seed);
        return buildFn(rng, { unit, skill, diff });
      }
    };
  }

  // ---------------------------------------------------------------------------
  // Knowledge Map (Units & Skills)
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Generators (21 entries = 7 skills × L/M/H)
  // ---------------------------------------------------------------------------
  const generators = [
    // =========================== B5_S1: Panjang & Jisim ===========================
    makeGen("b5", "b5_s1", "L", ["book_thickness_mass", "wire_length_mass"], (rng, meta) => {
      const tpl = pick(rng, ["book_thickness_mass", "wire_length_mass"]);
      if (tpl === "book_thickness_mass") {
        const tB = pick(rng, [2, 3, 4]);
        const k = randInt(rng, 2, 5);
        const tA = tB * k;
        const diffT = tA - tB;
        const mB = pick(rng, [250, 300, 400, 450, 500, 600]);
        const ansG = k * mB;
        const ansKg = roundDec(ansG / 1000, 3);
        const q = `Buku A dan buku B mempunyai panjang dan lebar yang sama. Tebal buku B ialah ${tB} cm dan jisimnya ialah ${mB} g. Jika tebal buku A lebih ${diffT} cm daripada buku B, berapakah jisim buku A dalam kg?`;
        const exp = `Tebal buku A = ${tB} cm + ${diffT} cm = ${tA} cm (${k} × ${tB} cm). Jisim buku A = ${k} × ${mB} g = ${ansG} g = ${fmtNum(ansKg)} kg.`;
        const wrongs = [
          `${fmtNum(ansG / 100)} kg`,
          `${fmtNum(((k + 1) * mB) / 1000)} kg`,
          `${fmtNum(Math.max(0.2, ((k - 1) * mB) / 1000))} kg`,
          `${fmtNum(ansG / 10)} kg`,
          `${fmtNum((mB + diffT * 100) / 1000)} kg`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansKg)} kg`, wrongs, exp, `b5_s1:L:${tpl}:tB=${tB},k=${k},mB=${mB}`);
      } else {
        const item = pick(rng, ["dawai tembaga", "rod besi", "paip PVC", "tali tebal"]);
        const uG = pick(rng, [250, 350, 400, 450, 600, 750, 800]);
        const lenM = randInt(rng, 3, 9);
        const ansG = uG * lenM;
        const ansKg = roundDec(ansG / 1000, 3);
        const q = `Setiap 1 m ${item} mempunyai jisim ${uG} g. Hitung jisim, dalam kg, bagi ${lenM} m ${item} yang sama jenis.`;
        const exp = `Jisim ${lenM} m = ${lenM} × ${uG} g = ${ansG} g. Tukar kepada kg: ${ansG} ÷ 1000 = ${fmtNum(ansKg)} kg.`;
        const wrongs = [
          `${fmtNum(ansG / 100)} kg`,
          `${fmtNum(((lenM - 1) * uG) / 1000)} kg`,
          `${fmtNum(((lenM + 1) * uG) / 1000)} kg`,
          `${fmtNum(ansG / 10)} kg`,
          `${fmtNum(uG / 1000)} kg`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansKg)} kg`, wrongs, exp, `b5_s1:L:${tpl}:uG=${uG},lenM=${lenM}`);
      }
    }),

    makeGen("b5", "b5_s1", "M", ["rod_cut_unitary", "spring_stretch_mass"], (rng, meta) => {
      const tpl = "rod_cut_unitary"; // spring template removed: physics-style and ambiguous for Matematik D6
      if (tpl === "rod_cut_unitary") {
        const lenA = pick(rng, [2, 3, 4]);
        const lenB = lenA + randInt(rng, 2, 4);
        const lenC = lenA + 1;
        const unitKg = pick(rng, [0.45, 0.55, 0.65, 0.75, 0.85, 0.888, 1.15, 1.25]);
        const massA = roundDec(lenA * unitKg, 3);
        const ansKg = roundDec(lenB * unitKg, 3);
        const totalLen = lenA + lenB + lenC;
        const item = pick(rng, ["rod besi", "batang kayu", "paip keluli"]);
        const q = `Ayah memotong sebatang ${item} sepanjang ${totalLen} m kepada tiga bahagian iaitu A (${lenA} m), B (${lenB} m) dan C (${lenC} m). Jika jisim bahagian A ialah ${fmtNum(massA)} kg, berapakah jisim bahagian yang paling panjang dalam kg?`;
        const exp = `Jisim 1 m = ${fmtNum(massA)} kg ÷ ${lenA} = ${fmtNum(unitKg)} kg. Bahagian paling panjang ialah B (${lenB} m), maka jisimnya = ${lenB} × ${fmtNum(unitKg)} kg = ${fmtNum(ansKg)} kg.`;
        const wrongs = [
          `${fmtNum(roundDec(lenC * unitKg, 3))} kg`,
          `${fmtNum(roundDec(massA * lenB, 3))} kg`,
          `${fmtNum(roundDec(ansKg * 10, 3))} kg`,
          `${fmtNum(roundDec(ansKg / 10, 3))} kg`,
          `${fmtNum(roundDec(totalLen * unitKg, 3))} kg`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansKg)} kg`, wrongs, exp, `b5_s1:M:${tpl}:lA=${lenA},lB=${lenB},u=${unitKg}`);
      } else {
        const s1 = pick(rng, [2, 3, 4]);
        const m1 = pick(rng, [400, 500, 600, 800]);
        const halfM = m1 / 2;
        const m2 = m1 + halfM; // 1.5x
        const sMax = s1 * pick(rng, [2, 3, 4]);
        const askMaxKg = rng() > 0.45;
        if (askMaxKg) {
          const mult = sMax / s1;
          const ansKg = roundDec((mult * m1) / 1000, 3);
          const q = `Sebuah alat timbang spring meregang sepanjang ${s1} cm apabila pemberat ${m1} g digantungkan. Jika panjang maksimum regangan spring itu ialah ${sMax} cm, berapakah jisim maksimum pemberat, dalam kg, yang boleh digantungkan?`;
          const exp = `${sMax} cm = ${mult} × ${s1} cm. Jisim maksimum = ${mult} × ${m1} g = ${mult * m1} g = ${fmtNum(ansKg)} kg.`;
          const wrongs = [
            `${fmtNum(roundDec((mult * m1) / 100, 3))} kg`,
            `${fmtNum(roundDec(((mult + 1) * m1) / 1000, 3))} kg`,
            `${fmtNum(roundDec(((mult - 1) * m1) / 1000, 3))} kg`,
            `${fmtNum(roundDec(m1 / 1000, 3))} kg`
          ];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansKg)} kg`, wrongs, exp, `b5_s1:M:${tpl}:max:s1=${s1},m1=${m1},sM=${sMax}`);
        } else {
          const ansCm = roundDec(s1 * 1.5, 2);
          const q = `Regangan suatu spring ialah ${s1} cm apabila digantung pemberat ${m1} g. Berapakah panjang regangan spring, dalam cm, jika pemberat ${m2} g digantungkan?`;
          const exp = `${halfM} g meregangkan ${fmtNum(s1 / 2)} cm. Bagi ${m2} g (${m1} g + ${halfM} g), regangan = ${s1} cm + ${fmtNum(s1 / 2)} cm = ${fmtNum(ansCm)} cm.`;
          const wrongs = [
            `${fmtNum(s1 * 2)} cm`,
            `${fmtNum(roundDec(s1 + halfM / 100, 2))} cm`,
            `${fmtNum(roundDec(ansCm + 1.5, 2))} cm`,
            `${fmtNum(roundDec(s1 / 2, 2))} cm`
          ];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansCm)} cm`, wrongs, exp, `b5_s1:M:${tpl}:str:s1=${s1},m1=${m1}`);
        }
      }
    }),

    makeGen("b5", "b5_s1", "H", ["rice_container_level", "compare_two_rods_cm_m"], (rng, meta) => {
      const tpl = pick(rng, ["rice_container_level", "compare_two_rods_cm_m"]);
      if (tpl === "rice_container_level") {
        const mKg = pick(rng, [4, 5, 6, 8, 10]);
        const hFull = pick(rng, [20, 25, 40]);
        const hRem = pick(rng, [4, 5, 8, 10, 12].filter((x) => x < hFull && (mKg * 1000 * x) % hFull === 0));
        const askUsed = rng() > 0.5;
        const gPerCm = (mKg * 1000) / hFull;
        const remG = gPerCm * hRem;
        const usedG = mKg * 1000 - remG;
        const ansG = askUsed ? usedG : remG;
        const barang = pick(rng, ["beras", "tepung gandum", "gula pasir"]);
        const q = askUsed
          ? `Pada mulanya, ${mKg} kg ${barang} diisi penuh ke dalam sebuah bekas sehingga mencapai aras ${hFull} cm. Selepas seminggu, aras ${barang} menyusut kepada ${hRem} cm. Berapakah jisim, dalam g, ${barang} yang telah digunakan?`
          : `Pada mulanya, ${mKg} kg ${barang} diisi penuh ke dalam sebuah bekas sehingga mencapai aras ${hFull} cm. Selepas beberapa hari, aras ${barang} menyusut kepada ${hRem} cm. Hitung jisim, dalam g, ${barang} yang masih tinggal.`;
        const exp = askUsed
          ? `${mKg} kg = ${mKg * 1000} g. 1 cm aras = ${mKg * 1000} ÷ ${hFull} = ${gPerCm} g. Aras yang digunakan = ${hFull} − ${hRem} = ${hFull - hRem} cm. Jisim digunakan = ${hFull - hRem} × ${gPerCm} g = ${usedG} g.`
          : `${mKg} kg = ${mKg * 1000} g. 1 cm aras = ${mKg * 1000} ÷ ${hFull} = ${gPerCm} g. Jisim yang tinggal untuk ${hRem} cm = ${hRem} × ${gPerCm} g = ${remG} g.`;
        const oppG = askUsed ? remG : usedG;
        const wrongs = [
          `${oppG} g`,
          `${ansG / 10} g`,
          `${ansG / 100} g`,
          `${ansG + gPerCm * 2} g`,
          `${mKg * hRem} g`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${ansG} g`, wrongs, exp, `b5_s1:H:${tpl}:m=${mKg},hF=${hFull},hR=${hRem},u=${askUsed ? 1 : 0}`);
      } else {
        const lenR_cm = pick(rng, [80, 100, 120, 150]);
        const stepCm = 10;
        const gPer10Cm = pick(rng, [600, 750, 800, 900, 1200]);
        const massR_kg = roundDec((lenR_cm / stepCm) * (gPer10Cm / 1000), 3);
        const lenQ_cm = pick(rng, [50, 60, 70, 90, 110].filter((x) => x < lenR_cm));
        const lenQ_m = roundDec(lenQ_cm / 100, 2);
        const massQ_kg = roundDec((lenQ_cm / stepCm) * (gPer10Cm / 1000), 3);
        const diffG = Math.round((massR_kg - massQ_kg) * 1000);
        const q = `Besi R dan besi Q diperbuat daripada bahan yang sama jenis. Panjang besi R ialah ${lenR_cm} cm dengan jisim ${fmtNum(massR_kg)} kg, manakala panjang besi Q ialah ${fmtNum(lenQ_m)} m. Hitung beza jisim, dalam g, antara besi R dengan besi Q.`;
        const exp = `Panjang besi Q = ${fmtNum(lenQ_m)} m = ${lenQ_cm} cm. Beza panjang = ${lenR_cm} − ${lenQ_cm} = ${lenR_cm - lenQ_cm} cm. Jisim 10 cm = ${gPer10Cm} g, maka beza jisim = ${((lenR_cm - lenQ_cm) / 10)} × ${gPer10Cm} g = ${diffG} g.`;
        const wrongs = [
          `${Math.round(massQ_kg * 1000)} g`,
          `${Math.round((massR_kg + massQ_kg) * 1000)} g`,
          `${diffG / 10} g`,
          `${diffG + gPer10Cm} g`,
          `${Math.round(massR_kg * 1000)} g`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${diffG} g`, wrongs, exp, `b5_s1:H:${tpl}:lR=${lenR_cm},lQ=${lenQ_cm},g10=${gPer10Cm}`);
      }
    }),

    // =========================== B5_S2: Panjang & Isi Padu Cecair ===========================
    makeGen("b5", "b5_s2", "L", ["petrol_oneway_ml", "bottle_level_ml"], (rng, meta) => {
      const tpl = pick(rng, ["petrol_oneway_ml", "bottle_level_ml"]);
      if (tpl === "petrol_oneway_ml") {
        const rateL = pick(rng, [3, 4, 5, 6, 7, 8]);
        const distKm = pick(rng, [150, 200, 250, 300, 350, 400]);
        const usedL = roundDec((distKm / 100) * rateL, 2);
        const ansMl = Math.round(usedL * 1000);
        const q = `Sebuah kereta menggunakan ${rateL} ℓ petrol bagi setiap 100 km jarak perjalanan. Berapakah isi padu petrol, dalam ml, yang digunakan untuk perjalanan sejauh ${distKm} km?`;
        const exp = `Isi padu petrol = (${distKm} ÷ 100) × ${rateL} ℓ = ${fmtNum(usedL)} ℓ = ${fmtNum(usedL)} × 1000 ml = ${ansMl} ml.`;
        const wrongs = [
          `${Math.round(usedL * 100)} ml`,
          `${Math.round(usedL * 10)} ml`,
          `${ansMl + rateL * 100} ml`,
          `${Math.max(500, ansMl - 1000)} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${ansMl} ml`, wrongs, exp, `b5_s2:L:${tpl}:r=${rateL},d=${distKm}`);
      } else {
        const h1 = pick(rng, [10, 12, 15, 20]);
        const v1 = pick(rng, [400, 500, 600, 750, 800]);
        const k = randInt(rng, 2, 4);
        const h2 = h1 * k;
        const ansMl = v1 * k;
        const ansL = roundDec(ansMl / 1000, 3);
        const drink = pick(rng, ["air sirap", "jus oren", "air mineral", "jus tembikai"]);
        const q = `Di dalam sebuah bekas seragam, ${drink} setinggi ${h1} cm mempunyai isi padu ${v1} ml. Jika ${drink} diisi sehingga ketinggian ${h2} cm, berapakah isi padunya dalam ℓ?`;
        const exp = `${h2} cm = ${k} × ${h1} cm. Isi padu = ${k} × ${v1} ml = ${ansMl} ml = ${fmtNum(ansL)} ℓ.`;
        const wrongs = [
          `${fmtNum(roundDec(ansMl / 100, 3))} ℓ`,
          `${fmtNum(roundDec(((k + 1) * v1) / 1000, 3))} ℓ`,
          `${fmtNum(roundDec(((k - 1) * v1) / 1000, 3))} ℓ`,
          `${fmtNum(roundDec(ansMl / 10, 3))} ℓ`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansL)} ℓ`, wrongs, exp, `b5_s2:L:${tpl}:h1=${h1},v1=${v1},k=${k}`);
      }
    }),

    makeGen("b5", "b5_s2", "M", ["water_tank_level_cm", "glass_height_mm_ml"], (rng, meta) => {
      const tpl = pick(rng, ["water_tank_level_cm", "glass_height_mm_ml"]);
      if (tpl === "water_tank_level_cm") {
        const capL = pick(rng, [800, 1000, 1200]);
        const fullM = pick(rng, [1.2, 1.5, 1.6, 2.0]);
        const fullCm = Math.round(fullM * 100);
        const remL = pick(rng, [200, 250, 300, 350, 400, 450, 600].filter((r) => r < capL && (r * fullCm) % capL === 0));
        const ansCm = (remL * fullCm) / capL;
        const q = `Sebuah tangki simpanan air dapat mengisi ${capL} ℓ air apabila penuh dengan ketinggian aras air ${fmtNum(fullM)} m. Hitung aras air, dalam cm, apabila isi padu air di dalam tangki itu tinggal ${remL} ℓ.`;
        const exp = `${fmtNum(fullM)} m = ${fullCm} cm. Aras air = (${remL} ÷ ${capL}) × ${fullCm} cm = ${ansCm} cm.`;
        const usedCm = fullCm - ansCm;
        const wrongs = [
          `${fmtNum(roundDec(ansCm / 100, 3))} cm`,
          `${usedCm} cm`,
          `${ansCm * 10} cm`,
          `${ansCm + 15} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${ansCm} cm`, wrongs, exp, `b5_s2:M:${tpl}:cap=${capL},fM=${fullM},rem=${remL}`);
      } else {
        const hQ = pick(rng, [20, 40, 50]);
        const vQ = pick(rng, [120, 140, 150, 160, 180, 200]);
        const per10 = roundDec(vQ / (hQ / 10), 2);
        const hP = pick(rng, [70, 90, 110, 130].filter((x) => x !== hQ));
        const ansMl = roundDec((hP / 10) * per10, 2);
        const drink = pick(rng, ["jus mangga", "susu segar", "air tebu", "jus epal"]);
        const q = `Dua buah gelas P dan Q yang sama saiz tapak diisi ${drink}. Tinggi aras ${drink} dalam gelas Q ialah ${hQ} mm dengan isi padu ${vQ} ml. Jika tinggi aras dalam gelas P ialah ${hP} mm, hitung isi padu ${drink} dalam gelas P dalam ml.`;
        const exp = `Bagi setiap 10 mm, isi padu = ${vQ} ÷ ${hQ / 10} = ${fmtNum(per10)} ml. Gelas P (${hP} mm) = ${hP / 10} × ${fmtNum(per10)} ml = ${fmtNum(ansMl)} ml.`;
        const wrongs = [
          `${fmtNum(roundDec(ansMl + per10, 2))} ml`,
          `${fmtNum(roundDec(ansMl - per10, 2))} ml`,
          `${fmtNum(roundDec(ansMl / 10, 2))} ml`,
          `${fmtNum(roundDec(vQ + (hP - hQ), 2))} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(ansMl)} ml`, wrongs, exp, `b5_s2:M:${tpl}:hQ=${hQ},vQ=${vQ},hP=${hP}`);
      }
    }),

    makeGen("b5", "b5_s2", "H", ["round_trip_petrol", "bottle_drunk_height"], (rng, meta) => {
      const tpl = pick(rng, ["round_trip_petrol", "bottle_drunk_height"]);
      if (tpl === "round_trip_petrol") {
        const segs = pick(rng, [
          [12, 23, 25], // sum 60
          [14, 18, 28], // sum 60
          [15, 22, 38], // sum 75
          [18, 27, 35], // sum 80
          [24, 36, 30]  // sum 90
        ]);
        const oneWay = segs[0] + segs[1] + segs[2];
        const roundTrip = oneWay * 2;
        const rateL = pick(rng, [3, 4, 5, 6, 8]);
        const totalL = roundDec((roundTrip / 100) * rateL, 3);
        const ansMl = Math.round(totalL * 1000);
        const dest = pick(rng, ["kolej", "pejabat", "bandar", "sekolah"]);
        const q = `Setiap hari, abang menunggang motosikal dari rumah ke ${dest} melalui tiga jalan berturutan sejauh ${segs[0]} km, ${segs[1]} km dan ${segs[2]} km. Motosikalnya menggunakan ${rateL} ℓ petrol bagi setiap 100 km. Hitung jumlah isi padu petrol, dalam ml, untuk sekali perjalanan pergi dan balik.`;
        const exp = `Jarak pergi = ${segs[0]} + ${segs[1]} + ${segs[2]} = ${oneWay} km. Jarak pergi dan balik = 2 × ${oneWay} = ${roundTrip} km. Petrol = (${roundTrip} ÷ 100) × ${rateL} ℓ = ${fmtNum(totalL)} ℓ = ${ansMl} ml.`;
        const oneWayMl = Math.round(((oneWay / 100) * rateL) * 1000);
        const wrongs = [
          `${oneWayMl} ml`,
          `${Math.round(totalL * 100)} ml`,
          `${ansMl + 500} ml`,
          `${Math.max(400, ansMl - 600)} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${ansMl} ml`, wrongs, exp, `b5_s2:H:${tpl}:ow=${oneWay},r=${rateL}`);
      } else {
        const fullCm = pick(rng, [20, 24, 25]);
        const totalMl = pick(rng, [1000, 1200, 1500, 1800, 2000].filter((v) => v % fullCm === 0));
        const mlPerCm = totalMl / fullCm;
        const remCm = pick(rng, [4, 5, 6, 8, 9, 10].filter((x) => x < fullCm));
        const drunkCm = fullCm - remCm;
        const drunkMl = drunkCm * mlPerCm;
        const drunkL = roundDec(drunkMl / 1000, 3);
        const remL = roundDec((remCm * mlPerCm) / 1000, 3);
        const q = `Sebuah botol air setinggi ${fullCm} cm diisi penuh dengan ${totalMl} ml air minuman. Setelah diminum oleh adik, tinggi aras air di dalam botol itu berkurang kepada ${remCm} cm. Berapakah isi padu air, dalam ℓ, yang telah diminum?`;
        const exp = `1 cm = ${totalMl} ÷ ${fullCm} = ${mlPerCm} ml. Aras air berkurang = ${fullCm} − ${remCm} = ${drunkCm} cm. Air diminum = ${drunkCm} × ${mlPerCm} ml = ${drunkMl} ml = ${fmtNum(drunkL)} ℓ.`;
        const wrongs = [
          `${fmtNum(remL)} ℓ`,
          `${fmtNum(roundDec(drunkMl / 100, 3))} ℓ`,
          `${fmtNum(roundDec((drunkMl + mlPerCm) / 1000, 3))} ℓ`,
          `${fmtNum(roundDec(drunkMl / 10, 3))} ℓ`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(drunkL)} ℓ`, wrongs, exp, `b5_s2:H:${tpl}:f=${fullCm},t=${totalMl},r=${remCm}`);
      }
    }),

    // =========================== B5_S3: Jisim & Isi Padu Cecair ===========================
    makeGen("b5", "b5_s3", "L", ["recipe_scale_simple", "compost_project_scale"], (rng, meta) => {
      const tpl = pick(rng, ["recipe_scale_simple", "compost_project_scale"]);
      if (tpl === "recipe_scale_simple") {
        const vBase = pick(rng, [120, 150, 200, 250]);
        const mBase = pick(rng, [35, 45, 55, 60, 75]);
        const mult = pick(rng, [4, 5, 6, 8]);
        const totalMl = vBase * mult;
        const totalL = roundDec(totalMl / 1000, 3);
        const ansG = mBase * mult;
        const q = `Mengikut resipi susu coklat, ${vBase} ml susu segar memerlukan ${mBase} g serbuk koko. Berapakah jisim serbuk koko, dalam g, yang diperlukan jika kakak menggunakan ${fmtNum(totalL)} ℓ susu segar?`;
        const exp = `${fmtNum(totalL)} ℓ = ${totalMl} ml. Bilangan bahagian = ${totalMl} ÷ ${vBase} = ${mult}. Jisim serbuk koko = ${mult} × ${mBase} g = ${ansG} g.`;
        const wrongs = [
          `${mBase * (mult + 1)} g`,
          `${mBase * (mult - 1)} g`,
          `${Math.round(mBase * totalL * 10)} g`,
          `${ansG + mBase * 2} g`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${ansG} g`, wrongs, exp, `b5_s3:L:${tpl}:v=${vBase},m=${mBase},k=${mult}`);
      } else {
        const wasteKg = pick(rng, [2.5, 3.5, 4.5]);
        const soilBaseG = pick(rng, [120, 150, 180, 200]);
        const waterBaseL = pick(rng, [0.8, 1.0, 1.2]);
        const totalSoilG = Math.round(wasteKg * soilBaseG);
        const totalWaterMl = Math.round(wasteKg * waterBaseL * 1000);
        const q = `Untuk membuat baja organik, setiap 1 kg sisa tumbuhan memerlukan ${soilBaseG} g tanah hitam dan ${fmtNum(waterBaseL)} ℓ air. Jika murid menggunakan ${fmtNum(wasteKg)} kg sisa tumbuhan, berapakah isi padu air dalam ml yang diperlukan?`;
        const exp = `Bagi ${fmtNum(wasteKg)} kg sisa, air diperlukan = ${fmtNum(wasteKg)} × ${fmtNum(waterBaseL)} ℓ = ${fmtNum(roundDec(wasteKg * waterBaseL, 2))} ℓ = ${totalWaterMl} ml.`;
        const wrongs = [
          `${Math.round(totalWaterMl / 10)} ml`,
          `${Math.round(totalWaterMl / 100)} ml`,
          `${totalWaterMl + 500} ml`,
          `${totalSoilG} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${totalWaterMl} ml`, wrongs, exp, `b5_s3:L:${tpl}:w=${wasteKg},wb=${waterBaseL},sb=${soilBaseG}`);
      }
    }),

    makeGen("b5", "b5_s3", "M", ["butter_melt_mix", "marbles_cylinder_ml"], (rng, meta) => {
      const tpl = pick(rng, ["butter_melt_mix", "marbles_cylinder_ml"]);
      if (tpl === "butter_melt_mix") {
        const blockG = 250;
        const meltMl = pick(rng, [260, 270, 275, 280]);
        const nBlocks = randInt(rng, 3, 6);
        const totalButterG = nBlocks * blockG;
        const milkL = pick(rng, [1.5, 2.0, 2.5]);
        const milkMl = Math.round(milkL * 1000);
        const totalMl = nBlocks * meltMl + milkMl;
        const q = `Setiap ${blockG} g mentega apabila dicairkan menghasilkan ${meltMl} ml mentega cair. Kakak mencairkan ${totalButterG} g mentega dan mencampurkannya dengan ${fmtNum(milkL)} ℓ susu cair. Hitung jumlah isi padu campuran itu dalam ml.`;
        const exp = `Bilangan bahagian ${blockG} g = ${totalButterG} ÷ ${blockG} = ${nBlocks}. Mentega cair = ${nBlocks} × ${meltMl} = ${nBlocks * meltMl} ml. ${fmtNum(milkL)} ℓ = ${milkMl} ml. Jumlah = ${nBlocks * meltMl} + ${milkMl} = ${totalMl} ml.`;
        const wrongs = [
          `${nBlocks * meltMl} ml`,
          `${nBlocks * meltMl + Math.round(milkL * 100)} ml`,
          `${(nBlocks + 1) * meltMl + milkMl} ml`,
          `${meltMl + milkMl} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${totalMl} ml`, wrongs, exp, `b5_s3:M:${tpl}:m=${meltMl},n=${nBlocks},mk=${milkL}`);
      } else {
        const initMl = pick(rng, [200, 250, 300]);
        const mMarble = pick(rng, [15, 20, 25, 30]);
        const vMarble = pick(rng, [6, 8, 10, 12]);
        const count = randInt(rng, 5, 9);
        const totalMarbleG = count * mMarble;
        const displacedMl = count * vMarble;
        const finalMl = initMl + displacedMl;
        const q = `Sebuah silinder penyukat mengandungi ${initMl} ml air. Sebiji guli berjisim ${mMarble} g menaikkan paras air sebanyak ${vMarble} ml. Jika beberapa biji guli dengan jumlah jisim ${totalMarbleG} g dimasukkan, berapakah bacaan akhir isi padu air dalam ml?`;
        const exp = `Bilangan guli = ${totalMarbleG} g ÷ ${mMarble} g = ${count} biji. Pertambahan isi padu = ${count} × ${vMarble} ml = ${displacedMl} ml. Bacaan akhir = ${initMl} + ${displacedMl} = ${finalMl} ml.`;
        const wrongs = [
          `${displacedMl} ml`,
          `${initMl + totalMarbleG} ml`,
          `${finalMl + vMarble} ml`,
          `${Math.max(initMl + 5, finalMl - vMarble)} ml`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${finalMl} ml`, wrongs, exp, `b5_s3:M:${tpl}:i=${initMl},mm=${mMarble},vm=${vMarble},c=${count}`);
      }
    }),

    makeGen("b5", "b5_s3", "H", ["cucur_bilis_two_step", "agar_excess_deficit"], (rng, meta) => {
      const tpl = pick(rng, ["cucur_bilis_two_step", "agar_excess_deficit"]);
      if (tpl === "cucur_bilis_two_step") {
        const flourBase = pick(rng, [200, 250]);
        const waterBase = pick(rng, [160, 180, 220, 240]);
        const mult = pick(rng, [4, 5, 6, 8]);
        const flourKg = roundDec((flourBase * mult) / 1000, 3);
        const totalWaterMl = waterBase * mult;
        const totalWaterL = roundDec(totalWaterMl / 1000, 3);
        const q = `Satu resipi cucur bilis menggunakan ${flourBase} g tepung gandum dan ${waterBase} ml air. Jika ibu menggunakan ${fmtNum(flourKg)} kg tepung gandum, berapakah isi padu air, dalam ℓ, yang diperlukan mengikut resipi itu?`;
        const exp = `${fmtNum(flourKg)} kg = ${flourBase * mult} g (${mult} × ${flourBase} g). Isi padu air = ${mult} × ${waterBase} ml = ${totalWaterMl} ml = ${fmtNum(totalWaterL)} ℓ.`;
        const wrongs = [
          `${fmtNum(roundDec(totalWaterMl / 100, 3))} ℓ`,
          `${fmtNum(roundDec(((mult - 1) * waterBase) / 1000, 3))} ℓ`,
          `${fmtNum(roundDec(((mult + 1) * waterBase) / 1000, 3))} ℓ`,
          `${fmtNum(roundDec((waterBase * flourKg) / 1000, 3))} ℓ`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(totalWaterL)} ℓ`, wrongs, exp, `b5_s3:H:${tpl}:f=${flourBase},w=${waterBase},k=${mult}`);
      } else {
        const waterBaseL = 2;
        const sugarBaseG = pick(rng, [220, 240, 250, 280]);
        const agarBaseG = pick(rng, [16, 20, 24]);
        const targetMl = pick(rng, [3000, 4000, 5000, 6000]);
        const ratio = targetMl / (waterBaseL * 1000); // 1.5, 2, 2.5, 3
        const needSugarG = Math.round(sugarBaseG * ratio);
        const hasSugarKg = roundDec((needSugarG + pick(rng, [120, 150, 200, 250])) / 1000, 3);
        const hasSugarG = Math.round(hasSugarKg * 1000);
        const extraG = hasSugarG - needSugarG;
        const q = `Mengikut resipi agar-agar, ${waterBaseL} ℓ air memerlukan ${sugarBaseG} g gula dan ${agarBaseG} g serbuk agar-agar. Puan Selvi menggunakan ${targetMl} ml air dan mempunyai ${fmtNum(hasSugarKg)} kg gula. Berapakah baki gula, dalam g, yang tinggal selepas membuat agar-agar itu?`;
        const exp = `${targetMl} ml = ${fmtNum(targetMl / 1000)} ℓ (${fmtNum(ratio)} × ${waterBaseL} ℓ). Gula diperlukan = ${fmtNum(ratio)} × ${sugarBaseG} g = ${needSugarG} g. Baki gula = ${hasSugarG} g − ${needSugarG} g = ${extraG} g.`;
        const wrongs = [
          `${needSugarG} g`,
          `${hasSugarG - sugarBaseG * (targetMl / 1000)} g`,
          `${Math.round(extraG / 10)} g`,
          `${extraG + 100} g`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${extraG} g`, wrongs, exp, `b5_s3:H:${tpl}:sb=${sugarBaseG},t=${targetMl},h=${hasSugarG}`);
      }
    }),

    // =========================== B6_S1: Sudut hingga 180° ===========================
    makeGen("b6", "b6_s1", "L", ["classify_angle_type", "protractor_construction_step"], (rng, meta) => {
      const tpl = pick(rng, ["classify_angle_type", "protractor_construction_step"]);
      if (tpl === "classify_angle_type") {
        const contexts = [
          "sudut bukaan pintu",
          "sudut bukaan gunting",
          "sudut bukaan kipas tangan",
          "sudut pada bucu bingkai",
          "sudut antara dua garisan lurus"
        ];
        const ctx = pick(rng, contexts);
        const angles = [24, 38, 52, 76, 90, 96, 115, 134, 158, 172, 180];
        const theta = pick(rng, angles);
        const names = ["Sudut tirus", "Sudut tegak", "Sudut cakah", "Sudut garis lurus"];
        let idx;
        if (theta < 90) idx = 0;
        else if (theta === 90) idx = 1;
        else if (theta < 180) idx = 2;
        else idx = 3;
        const ans = names[idx];
        const q = `Seorang murid mengukur ${ctx} menggunakan protraktor dan mendapat bacaan ${theta}°. Apakah jenis sudut tersebut?`;
        const exp = `${theta}° ialah ${idx === 0 ? "kurang daripada 90°, iaitu sudut tirus" : idx === 1 ? "tepat 90°, iaitu sudut tegak" : idx === 2 ? "lebih daripada 90° tetapi kurang daripada 180°, iaitu sudut cakah" : "tepat 180°, iaitu sudut garis lurus"}.`;
        const wrongs = names.filter((_, k) => k !== idx);
        return buildMcq(rng, { ...meta, template: tpl }, q, ans, wrongs, exp, `b6_s1:L:${tpl}:th=${theta}`);
      } else {
        const bank = [
          {
            id: "center_place",
            q: "Semasa mengukur sudut ABC menggunakan protraktor, di manakah pusat protraktor mesti diletakkan?",
            ans: "Tepat pada titik bucu B",
            wrongs: [
              "Pada titik hujung garisan A",
              "Di tengah-tengah panjang garisan AB",
              "Di luar kawasan antara garisan AB dan BC"
            ],
            exp: "Pusat protraktor mesti diletakkan tepat pada titik bucu sudut (titik B), manakala garis asas bertindih dengan satu garis lurus."
          },
          {
            id: "right_ray_scale",
            q: "Jika garis lurus AB diletakkan bertindih dengan garis asas protraktor ke arah kanan (bermula 0° di sebelah kanan), skala manakah yang patut dibaca?",
            ans: "Skala dalam yang bermula dari 0° di sebelah kanan",
            wrongs: [
              "Skala luar yang bermula dari 180° di sebelah kanan",
              "Mana-mana skala tanpa mengira kedudukan 0°",
              "Skala sentimeter pada pembaris di tepi protraktor"
            ],
            exp: "Sentiasa baca skala yang bermula dari 0° pada garis asas. Di sebelah kanan protraktor, 0° terletak pada skala dalam."
          },
          {
            id: "left_ray_scale",
            q: "Jika garis lurus PQ diletakkan bertindih dengan garis asas protraktor ke arah kiri (bermula 0° di sebelah kiri), skala manakah yang betul untuk mengukur sudut?",
            ans: "Skala luar yang bermula dari 0° di sebelah kiri",
            wrongs: [
              "Skala dalam yang bermula dari 180° di sebelah kiri",
              "Skala sentimeter di bahagian bawah protraktor",
              "Sentiasa menambah 90° kepada bacaan skala dalam"
            ],
            exp: "Apabila garis asas mengarah ke kiri, tanda 0° berada pada skala luar, maka bacaan mesti diambil pada skala luar."
          }
        ];
        const item = pick(rng, bank);
        return buildMcq(rng, { ...meta, template: tpl }, item.q, item.ans, item.wrongs, item.exp, `b6_s1:L:${tpl}:${item.id}`);
      }
    }),

    makeGen("b6", "b6_s1", "M", ["protractor_ray_diff", "protractor_scale_confusion"], (rng, meta) => {
      const tpl = pick(rng, ["protractor_ray_diff", "protractor_scale_confusion"]);
      if (tpl === "protractor_ray_diff") {
        const rays = pick(rng, [["OA", "OB"], ["OP", "OQ"], ["XY", "XZ"], ["KL", "KM"]]);
        const a = pick(rng, [10, 15, 20, 25, 30, 35, 40, 45, 50]);
        const maxSteps = Math.floor((175 - a) / 5);
        const diff = randInt(rng, 6, maxSteps) * 5;
        const b = a + diff;
        const q = `Pada sebuah protraktor, garisan ${rays[0]} berada pada bacaan ${a}° dan garisan ${rays[1]} berada pada bacaan ${b}° pada skala yang sama. Berapakah saiz sudut antara garisan ${rays[0]} dan ${rays[1]}?`;
        const exp = `Saiz sudut = ${b}° − ${a}° = ${diff}°.`;
        const wrongs = [
          `${b}°`,
          `${a + b}°`,
          `${180 - diff === diff ? diff + 15 : 180 - diff}°`,
          `${diff + 10}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${diff}°`, wrongs, exp, `b6_s1:M:${tpl}:a=${a},b=${b}`);
      } else {
        const theta = pick(rng, [32, 44, 58, 65, 74, 108, 122, 136, 148, 162]);
        const wrongScale = 180 - theta;
        const q = `Aina meletakkan garis asas protraktor pada garis lurus PQ bermula dari 0° di skala luar. Namun, dia tersilap membaca skala dalam bagi garis QR lalu mendapat bacaan ${wrongScale}°. Berapakah nilai sudut PQR yang sebenar?`;
        const exp = `Kerana 0° terletak pada skala luar, bacaan skala luar dan skala dalam berjumlah 180°. Sudut sebenar = 180° − ${wrongScale}° = ${theta}°.`;
        const wrongs = [
          `${wrongScale}°`,
          `${Math.abs(90 - wrongScale) === theta || Math.abs(90 - wrongScale) === 0 ? theta + 12 : Math.abs(90 - wrongScale)}°`,
          `${theta + 15}°`,
          `${Math.max(10, theta - 10)}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${theta}°`, wrongs, exp, `b6_s1:M:${tpl}:th=${theta}`);
      }
    }),

    makeGen("b6", "b6_s1", "H", ["straight_line_unknown_angle", "right_angle_split_diff"], (rng, meta) => {
      const tpl = pick(rng, ["straight_line_unknown_angle", "right_angle_split_diff"]);
      if (tpl === "straight_line_unknown_angle") {
        const a = randInt(rng, 25, 65);
        const b = randInt(rng, 35, 85);
        const x = 180 - a - b;
        const q = `Tiga sudut bersebelahan membentuk satu garis lurus (180°). Jika dua daripada sudut itu ialah ${a}° dan ${b}°, berapakah nilai sudut ketiga?`;
        const exp = `Jumlah sudut pada garis lurus = 180°. Sudut ketiga = 180° − ${a}° − ${b}° = ${x}°.`;
        const wrongs = [
          `${180 - a}°`,
          `${a + b}°`,
          `${360 - a - b}°`,
          `${x + 15}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${x}°`, wrongs, exp, `b6_s1:H:${tpl}:a=${a},b=${b}`);
      } else {
        const a = pick(rng, [24, 32, 36, 48, 54, 62, 68]);
        const b = 90 - a;
        const diff = Math.abs(a - b);
        const q = `Satu sudut tegak (90°) dibahagikan kepada dua sudut dengan sudut pertama berukuran ${a}°. Berapakah beza antara dua sudut tersebut?`;
        const exp = `Sudut kedua = 90° − ${a}° = ${b}°. Beza antara kedua-dua sudut = |${a}° − ${b}°| = ${diff}°.`;
        const wrongs = [
          `${b}°`,
          `${180 - a}°`,
          `${diff + 10}°`,
          `${90 + diff}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${diff}°`, wrongs, exp, `b6_s1:H:${tpl}:a=${a}`);
      }
    }),

    // =========================== B6_S2: Poligon Sekata hingga 8 Sisi ===========================
    makeGen("b6", "b6_s2", "L", ["polygon_sides_vertices_id", "single_interior_angle"], (rng, meta) => {
      const tpl = pick(rng, ["polygon_sides_vertices_id", "single_interior_angle"]);
      if (tpl === "polygon_sides_vertices_id") {
        const allPolys = [
          { sides: 3, name: "segi tiga sama sisi" },
          { sides: 4, name: "segi empat sama" },
          { sides: 5, name: "pentagon sekata" },
          { sides: 6, name: "heksagon sekata" },
          { sides: 7, name: "heptagon sekata" },
          { sides: 8, name: "oktagon sekata" }
        ];
        const p = pick(rng, allPolys);
        const askSides = rng() > 0.5;
        if (askSides) {
          const attr = pick(rng, ["sisi sama panjang", "bucu"]);
          const q = `Berapakah bilangan ${attr} bagi sebuah ${p.name}?`;
          const exp = `Sebuah ${p.name} mempunyai ${p.sides} sisi yang sama panjang dan ${p.sides} bucu.`;
          const wrongs = allPolys.filter((x) => x.sides !== p.sides).map((x) => String(x.sides));
          return buildMcq(rng, { ...meta, template: tpl }, q, String(p.sides), wrongs, exp, `b6_s2:L:${tpl}:askS:s=${p.sides},a=${attr}`);
        } else {
          const q = `Apakah nama poligon sekata yang mempunyai ${p.sides} sisi yang sama panjang dan ${p.sides} bucu?`;
          const exp = `Poligon sekata yang mempunyai ${p.sides} sisi sama panjang dinamakan ${p.name}.`;
          const wrongs = allPolys.filter((x) => x.sides !== p.sides).map((x) => x.name);
          return buildMcq(rng, { ...meta, template: tpl }, q, p.name, wrongs, exp, `b6_s2:L:${tpl}:askN:s=${p.sides}`);
        }
      } else {
        // NEVER heptagon for interior angles! Only 3, 4, 5, 6, 8.
        const polys = [
          { sides: 3, angle: 60, sum: 180, name: "segi tiga sama sisi" },
          { sides: 4, angle: 90, sum: 360, name: "segi empat sama" },
          { sides: 5, angle: 108, sum: 540, name: "pentagon sekata" },
          { sides: 6, angle: 120, sum: 720, name: "heksagon sekata" },
          { sides: 8, angle: 135, sum: 1080, name: "oktagon sekata" }
        ];
        const p = pick(rng, polys);
        const obj = pick(rng, ["jubin lantai", "papan tanda", "alas cawan", "kadbod corak"]);
        const q = `Sekeping ${obj} berbentuk ${p.name}. Berapakah nilai setiap sudut pedalamannya?`;
        const exp = `Setiap sudut pedalaman ${p.name} (${p.sides} sisi) = ${p.sum}° ÷ ${p.sides} = ${p.angle}°.`;
        const wrongs = polys.filter((x) => x.sides !== p.sides).map((x) => `${x.angle}°`);
        return buildMcq(rng, { ...meta, template: tpl }, q, `${p.angle}°`, wrongs, exp, `b6_s2:L:${tpl}:s=${p.sides}`);
      }
    }),

    makeGen("b6", "b6_s2", "M", ["sum_k_interior_angles", "identify_polygon_from_angle"], (rng, meta) => {
      const polys = [
        { sides: 3, angle: 60, sum: 180, name: "segi tiga sama sisi" },
        { sides: 4, angle: 90, sum: 360, name: "segi empat sama" },
        { sides: 5, angle: 108, sum: 540, name: "pentagon sekata" },
        { sides: 6, angle: 120, sum: 720, name: "heksagon sekata" },
        { sides: 8, angle: 135, sum: 1080, name: "oktagon sekata" }
      ];
      const tpl = pick(rng, ["sum_k_interior_angles", "identify_polygon_from_angle"]);
      if (tpl === "sum_k_interior_angles") {
        const p = pick(rng, polys);
        const k = randInt(rng, 2, p.sides);
        const total = k * p.angle;
        const q = `Berapakah hasil tambah ${k} sudut pedalaman bagi sebuah ${p.name}?`;
        const exp = `Satu sudut pedalaman ${p.name} = ${p.angle}°. Hasil tambah ${k} sudut = ${k} × ${p.angle}° = ${total}°.`;
        const wrongs = [
          `${p.angle}°`,
          `${total + p.angle}°`,
          `${Math.max(60, total - p.angle)}°`,
          `${total + 30}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${total}°`, wrongs, exp, `b6_s2:M:${tpl}:s=${p.sides},k=${k}`);
      } else {
        const p = pick(rng, polys);
        const sideLen = pick(rng, [3, 4, 5, 6.5]);
        const q = `Amir melukis satu poligon sekata dengan panjang setiap sisi ${fmtNum(sideLen)} cm dan setiap sudut pedalamannya bernilai ${p.angle}°. Apakah poligon sekata yang dilukis oleh Amir?`;
        const exp = `Poligon sekata yang mempunyai sudut pedalaman ${p.angle}° ialah ${p.name} (${p.sides} sisi).`;
        const allNames = ["segi tiga sama sisi", "segi empat sama", "pentagon sekata", "heksagon sekata", "heptagon sekata", "oktagon sekata"];
        const wrongs = allNames.filter((n) => n !== p.name);
        return buildMcq(rng, { ...meta, template: tpl }, q, p.name, wrongs, exp, `b6_s2:M:${tpl}:s=${p.sides},sl=${sideLen}`);
      }
    }),

    makeGen("b6", "b6_s2", "H", ["diff_two_polygons_angles", "double_sides_polygon_pair", "multi_angle_pair_sum"], (rng, meta) => {
      const polys = [
        { sides: 3, angle: 60, name: "segi tiga sama sisi" },
        { sides: 4, angle: 90, name: "segi empat sama" },
        { sides: 5, angle: 108, name: "pentagon sekata" },
        { sides: 6, angle: 120, name: "heksagon sekata" },
        { sides: 8, angle: 135, name: "oktagon sekata" }
      ];
      const tpl = pick(rng, ["diff_two_polygons_angles", "double_sides_polygon_pair", "multi_angle_pair_sum"]);
      if (tpl === "diff_two_polygons_angles") {
        const i1 = randInt(rng, 0, polys.length - 2);
        const i2 = randInt(rng, i1 + 1, polys.length - 1);
        const small = polys[i1];
        const big = polys[i2];
        const k = randInt(rng, 1, 3);
        const diff = k * big.angle - small.angle;
        const q = k === 1
          ? `Cari beza antara satu sudut pedalaman ${big.name} dengan satu sudut pedalaman ${small.name}.`
          : `Cari beza antara jumlah ${k} sudut pedalaman ${big.name} dengan satu sudut pedalaman ${small.name}.`;
        const exp = `Sudut pedalaman ${big.name} = ${big.angle}° dan ${small.name} = ${small.angle}°. Beza = ${k === 1 ? `${big.angle}°` : `${k} × ${big.angle}°`} − ${small.angle}° = ${diff}°.`;
        const wrongs = [
          `${k * big.angle + small.angle}°`,
          `${k * big.angle}°`,
          `${diff + 12}°`,
          `${Math.max(10, diff - 8)}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${diff}°`, wrongs, exp, `b6_s2:H:${tpl}:s1=${small.sides},s2=${big.sides},k=${k}`);
      } else if (tpl === "double_sides_polygon_pair") {
        const pair = pick(rng, [
          { a: polys[0], b: polys[3] },
          { a: polys[1], b: polys[4] }
        ]);
        const name1 = pick(rng, ["Raymond", "Hafiz", "Mei Ling", "Kavitha"]);
        const name2 = pick(rng, ["Charles", "Aiman", "Siti", "Daniel"]);
        const k = randInt(rng, 1, 3);
        const sumBoth = k * (pair.a.angle + pair.b.angle);
        const q = `${name1} melukis sebuah ${pair.a.name}. ${name2} pula melukis sebuah poligon sekata yang bilangan sisinya 2 kali bilangan sisi poligon ${name1}. Berapakah jumlah ${k === 1 ? "satu" : k} sudut pedalaman poligon ${name1} dan ${k === 1 ? "satu" : k} sudut pedalaman poligon ${name2}?`;
        const exp = `Poligon ${name1} mempunyai ${pair.a.sides} sisi (${pair.a.angle}°). Poligon ${name2} mempunyai 2 × ${pair.a.sides} = ${pair.b.sides} sisi (${pair.b.name}, ${pair.b.angle}°). Jumlah = ${k === 1 ? `${pair.a.angle}° + ${pair.b.angle}°` : `${k} × (${pair.a.angle}° + ${pair.b.angle}°)`} = ${sumBoth}°.`;
        const wrongs = [
          `${k * pair.b.angle}°`,
          `${k * (pair.b.angle - pair.a.angle)}°`,
          `${k * pair.a.angle * 2}°`,
          `${sumBoth + 15}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${sumBoth}°`, wrongs, exp, `b6_s2:H:${tpl}:a=${pair.a.sides},b=${pair.b.sides},k=${k},n=${name1}`);
      } else {
        const i1 = randInt(rng, 0, polys.length - 2);
        const i2 = randInt(rng, i1 + 1, polys.length - 1);
        const p1 = polys[i1];
        const p2 = polys[i2];
        const k1 = randInt(rng, 1, 3);
        const k2 = randInt(rng, 1, 3);
        const total = k1 * p1.angle + k2 * p2.angle;
        const q = `Diberi sebuah ${p1.name} dan sebuah ${p2.name}. Hitung jumlah nilai bagi ${k1} sudut pedalaman ${p1.name} dan ${k2} sudut pedalaman ${p2.name}.`;
        const exp = `Sudut pedalaman ${p1.name} = ${p1.angle}° dan ${p2.name} = ${p2.angle}°. Jumlah = (${k1} × ${p1.angle}°) + (${k2} × ${p2.angle}°) = ${total}°.`;
        const wrongs = [
          `${k1 * p1.angle + p2.angle}°`,
          `${p1.angle + k2 * p2.angle}°`,
          `${Math.abs(k2 * p2.angle - k1 * p1.angle) || total + 30}°`,
          `${total + 15}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${total}°`, wrongs, exp, `b6_s2:H:${tpl}:p1=${p1.sides},p2=${p2.sides},k1=${k1},k2=${k2}`);
      }
    }),

    // =========================== B6_S3: Bulatan — Pusat, Jejari & Diameter ===========================
    makeGen("b6", "b6_s3", "L", ["circle_part_definition", "radius_diameter_basic"], (rng, meta) => {
      const tpl = pick(rng, ["circle_part_definition", "radius_diameter_basic"]);
      if (tpl === "circle_part_definition") {
        const defs = [
          { term: "Pusat bulatan", desc: "titik yang terletak tepat di tengah-tengah suatu bulatan" },
          { term: "Lilitan bulatan", desc: "lengkung tertutup yang merupakan sempadan luar suatu bentuk bulatan" },
          { term: "Jejari", desc: "garis lurus yang menghubungkan pusat bulatan dengan sebarang titik pada lilitan bulatan" },
          { term: "Diameter", desc: "garis lurus yang menghubungkan dua titik pada lilitan dan melalui pusat bulatan" }
        ];
        const target = pick(rng, defs);
        const q = `Antara berikut, yang manakah merujuk kepada ${target.desc}?`;
        const exp = `${target.term} ialah ${target.desc}.`;
        const wrongs = defs.filter((d) => d.term !== target.term).map((d) => d.term);
        return buildMcq(rng, { ...meta, template: tpl }, q, target.term, wrongs, exp, `b6_s3:L:${tpl}:${target.term}`);
      } else {
        const obj = pick(rng, ["meja bulat", "jam dinding bulat", "pinggan bulat", "roda basikal", "cermin bulat"]);
        const askDiam = rng() > 0.5;
        if (askDiam) {
          const r = randInt(rng, 4, 24);
          const d = r * 2;
          const q = `Sebuah ${obj} mempunyai jejari ${r} cm. Berapakah diameternya?`;
          const exp = `Diameter = 2 × jejari = 2 × ${r} cm = ${d} cm.`;
          const wrongs = [`${r} cm`, `${d * 2} cm`, `${r + 2} cm`, `${Math.max(2, Math.floor(r / 2))} cm`];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${d} cm`, wrongs, exp, `b6_s3:L:${tpl}:d:r=${r}`);
        } else {
          const r = randInt(rng, 4, 24);
          const d = r * 2;
          const q = `Sebuah ${obj} mempunyai diameter ${d} cm. Berapakah jejarinya?`;
          const exp = `Jejari = diameter ÷ 2 = ${d} cm ÷ 2 = ${r} cm.`;
          const wrongs = [`${d} cm`, `${d * 2} cm`, `${r + 2} cm`, `${Math.max(2, r - 2)} cm`];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${r} cm`, wrongs, exp, `b6_s3:L:${tpl}:r:d=${d}`);
        }
      }
    }),

    makeGen("b6", "b6_s3", "M", ["radius_diameter_decimal_unit", "modified_ruler_circle"], (rng, meta) => {
      const tpl = pick(rng, ["radius_diameter_decimal_unit", "modified_ruler_circle"]);
      if (tpl === "radius_diameter_decimal_unit") {
        const rM = roundDec(randInt(rng, 3, 24) * 0.05, 2);
        const rCm = Math.round(rM * 100);
        const dCm = rCm * 2;
        const askDiam = rng() > 0.4;
        if (askDiam) {
          const q = `Cikgu Awang melukis sebuah bulatan di tengah padang dengan jejari ${fmtNum(rM)} m. Berapakah diameter bulatan itu dalam cm?`;
          const exp = `Jejari = ${fmtNum(rM)} m = ${rCm} cm. Diameter = 2 × ${rCm} cm = ${dCm} cm.`;
          const wrongs = [
            `${rCm} cm`,
            `${fmtNum(roundDec(rM * 2, 2))} cm`,
            `${dCm * 2} cm`,
            `${Math.round(rCm / 2)} cm`
          ];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${dCm} cm`, wrongs, exp, `b6_s3:M:${tpl}:d:rM=${rM}`);
        } else {
          const dM = roundDec(rM * 2, 2);
          const q = `Sebuah kolam ikan berbentuk bulatan mempunyai diameter ${fmtNum(dM)} m. Berapakah jejari kolam itu dalam cm?`;
          const exp = `Diameter = ${fmtNum(dM)} m = ${dCm} cm. Jejari = ${dCm} cm ÷ 2 = ${rCm} cm.`;
          const wrongs = [
            `${dCm} cm`,
            `${fmtNum(rM)} cm`,
            `${dCm * 2} cm`,
            `${rCm + 10} cm`
          ];
          return buildMcq(rng, { ...meta, template: tpl }, q, `${rCm} cm`, wrongs, exp, `b6_s3:M:${tpl}:r:dM=${dM}`);
        }
      } else {
        const r = roundDec(randInt(rng, 5, 30) * 0.5, 1);
        const d = roundDec(r * 2, 1);
        const student = pick(rng, ["Amira", "Faris", "Siti", "Daniel", "Priya"]);
        const q = `${student} melukis sebuah bulatan menggunakan pembaris ubah suai dengan meletakkan satu pensel tetap pada lubang 0 cm dan satu lagi pensel pada lubang ${fmtNum(r)} cm lalu memusingkannya satu pusingan lengkap. Berapakah diameter bulatan yang terhasil?`;
        const exp = `Jarak dari 0 cm ke ${fmtNum(r)} cm ialah jejari (${fmtNum(r)} cm). Diameter = 2 × ${fmtNum(r)} cm = ${fmtNum(d)} cm.`;
        const wrongs = [
          `${fmtNum(r)} cm`,
          `${fmtNum(d * 2)} cm`,
          `${fmtNum(roundDec(r / 2, 2))} cm`,
          `${fmtNum(d + 2)} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fmtNum(d)} cm`, wrongs, exp, `b6_s3:M:${tpl}:r=${r}:${student}`);
      }
    }),

    makeGen("b6", "b6_s3", "H", ["circle_fraction_radius_compare", "circle_in_square_margin"], (rng, meta) => {
      const tpl = pick(rng, ["circle_fraction_radius_compare", "circle_in_square_margin"]);
      if (tpl === "circle_fraction_radius_compare") {
        const fr = pick(rng, [
          { num: 1, den: 2, label: "1/2" },
          { num: 1, den: 3, label: "1/3" },
          { num: 1, den: 4, label: "1/4" },
          { num: 2, den: 3, label: "2/3" },
          { num: 3, den: 4, label: "3/4" }
        ]);
        const mult = randInt(rng, 2, 8);
        const rA = fr.den * mult;
        const dA = rA * 2;
        const rB = fr.num * mult;
        const dB = rB * 2;
        const q = `Bulatan A mempunyai diameter ${dA} cm. Bulatan B dilukis dengan jejari berukuran ${fr.label} daripada jejari bulatan A. Berapakah diameter bulatan B dalam cm?`;
        const exp = `Jejari bulatan A = ${dA} ÷ 2 = ${rA} cm. Jejari bulatan B = ${fr.label} × ${rA} = ${rB} cm. Diameter bulatan B = 2 × ${rB} = ${dB} cm.`;
        const wrongs = [
          `${rB} cm`,
          `${dB * 2} cm`,
          `${rA} cm`,
          `${dB + 4} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${dB} cm`, wrongs, exp, `b6_s3:H:${tpl}:rA=${rA},f=${fr.label}`);
      } else {
        const r = randInt(rng, 4, 15);
        const d = r * 2;
        const S = d + pick(rng, [4, 6, 8, 10, 12, 14]);
        const margin = (S - d) / 2;
        const q = `Chee Cheong melukis satu bulatan berjejari ${r} cm tepat di tengah-tengah sekeping papan segi empat sama berukuran ${S} cm × ${S} cm. Berapakah jarak terpendek dari lilitan bulatan ke tepi papan itu?`;
        const exp = `Diameter bulatan = 2 × ${r} = ${d} cm. Baki ruang di kedua-dua sisi = ${S} − ${d} = ${S - d} cm. Jarak ke satu tepi = ${S - d} ÷ 2 = ${margin} cm.`;
        const wrongs = [
          `${S - d} cm`,
          `${S - r} cm`,
          `${d} cm`,
          `${margin + 2} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${margin} cm`, wrongs, exp, `b6_s3:H:${tpl}:r=${r},S=${S}`);
      }
    }),

    // =========================== B6_S4: Penyelesaian Masalah Ruang, Poligon & Bulatan ===========================
    makeGen("b6", "b6_s4", "L", ["polygon_perimeter_simple", "coins_in_row_length"], (rng, meta) => {
      const tpl = pick(rng, ["polygon_perimeter_simple", "coins_in_row_length"]);
      if (tpl === "polygon_perimeter_simple") {
        const allPolys = [
          { sides: 3, name: "segi tiga sama sisi" },
          { sides: 4, name: "segi empat sama" },
          { sides: 5, name: "pentagon sekata" },
          { sides: 6, name: "heksagon sekata" },
          { sides: 7, name: "heptagon sekata" },
          { sides: 8, name: "oktagon sekata" }
        ];
        const p = pick(rng, allPolys);
        const s = randInt(rng, 4, 14);
        const perim = p.sides * s;
        const ctx = pick(rng, ["taman bunga mini", "bingkai gambar", "ruang rehat", "kolam hiasan"]);
        const q = `Encik Gopal membina sempadan sebuah ${ctx} berbentuk ${p.name} dengan panjang setiap sisi ialah ${s} m. Berapakah jumlah perimeter sempadan itu dalam m?`;
        const exp = `${p.name} mempunyai ${p.sides} sisi sama panjang. Perimeter = ${p.sides} × ${s} m = ${perim} m.`;
        const wrongs = [
          `${(p.sides - 1) * s} m`,
          `${(p.sides + 1) * s} m`,
          `${p.sides + s} m`,
          `${s * 2} m`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${perim} m`, wrongs, exp, `b6_s4:L:${tpl}:s=${p.sides},len=${s}`);
      } else {
        const k = randInt(rng, 3, 7);
        const r = randInt(rng, 2, 9);
        const d = r * 2;
        const totalLen = k * d;
        const obj = pick(rng, ["syiling sama saiz", "pinggan bulat sama saiz", "butang bulat sama saiz", "penutup tin sama saiz"]);
        const q = `Sebanyak ${k} keping ${obj} yang berjejari ${r} cm setiap satu disusun rapat dalam satu baris lurus. Berapakah jumlah panjang susunan itu dalam cm?`;
        const exp = `Diameter 1 keping = 2 × ${r} = ${d} cm. Jumlah panjang ${k} keping = ${k} × ${d} cm = ${totalLen} cm.`;
        const wrongs = [
          `${k * r} cm`,
          `${totalLen + d} cm`,
          `${d} cm`,
          `${Math.max(4, totalLen - r)} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${totalLen} cm`, wrongs, exp, `b6_s4:L:${tpl}:k=${k},r=${r}`);
      }
    }),

    makeGen("b6", "b6_s4", "M", ["perimeter_find_side_unit", "circle_sector_angle"], (rng, meta) => {
      const tpl = pick(rng, ["perimeter_find_side_unit", "circle_sector_angle"]);
      if (tpl === "perimeter_find_side_unit") {
        const allPolys = [
          { sides: 5, name: "pentagon sekata" },
          { sides: 6, name: "heksagon sekata" },
          { sides: 7, name: "heptagon sekata" },
          { sides: 8, name: "oktagon sekata" }
        ];
        const p = pick(rng, allPolys);
        const sideCm = pick(rng, [15, 20, 25, 30, 35, 45]);
        const perimCm = p.sides * sideCm;
        const perimM = roundDec(perimCm / 100, 2);
        const q = `Anding menghasilkan sebuah bingkai berbentuk ${p.name} dengan perimeter ${fmtNum(perimM)} m. Berapakah panjang setiap sisi bingkai itu dalam cm?`;
        const exp = `${fmtNum(perimM)} m = ${perimCm} cm. ${p.name} ada ${p.sides} sisi sama panjang, maka 1 sisi = ${perimCm} ÷ ${p.sides} = ${sideCm} cm.`;
        const wrongs = [
          `${fmtNum(roundDec(sideCm / 100, 2))} cm`,
          `${Math.round(perimCm / (p.sides - 1))} cm`,
          `${sideCm + 10} cm`,
          `${Math.max(5, sideCm - 5)} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${sideCm} cm`, wrongs, exp, `b6_s4:M:${tpl}:s=${p.sides},sc=${sideCm}`);
      } else {
        const fracs = [
          { n: 1, d: 3, deg: 120 },
          { n: 2, d: 3, deg: 240 },
          { n: 1, d: 4, deg: 90 },
          { n: 3, d: 4, deg: 270 },
          { n: 1, d: 5, deg: 72 },
          { n: 3, d: 5, deg: 216 },
          { n: 1, d: 6, deg: 60 },
          { n: 5, d: 6, deg: 300 },
          { n: 1, d: 8, deg: 45 },
          { n: 3, d: 8, deg: 135 },
          { n: 5, d: 8, deg: 225 },
          { n: 3, d: 10, deg: 108 }
        ];
        const fr = pick(rng, fracs);
        const item = pick(rng, ["kek bulat", "piza bulat", "carta pai", "roda putar"]);
        const q = `Satu putaran lengkap bulatan ialah 360°. Sebahagian daripada sebuah ${item} mewakili ${fr.n}/${fr.d} daripada satu putaran lengkap. Berapakah sudut pada pusat bagi bahagian itu?`;
        const exp = `Sudut pada pusat = ${fr.n}/${fr.d} × 360° = ${fr.deg}°.`;
        const halfTurn = Math.round((fr.n / fr.d) * 180);
        const wrongs = [
          `${halfTurn}°`,
          `${360 - fr.deg === fr.deg ? fr.deg + 30 : 360 - fr.deg}°`,
          `${fr.deg + 20}°`,
          `${Math.max(15, fr.deg - 20)}°`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${fr.deg}°`, wrongs, exp, `b6_s4:M:${tpl}:n=${fr.n},d=${fr.d}`);
      }
    }),

    makeGen("b6", "b6_s4", "H", ["coins_row_find_radius", "tray_circles_fit_board"], (rng, meta) => {
      const tpl = pick(rng, ["coins_row_find_radius", "tray_circles_fit_board"]);
      if (tpl === "coins_row_find_radius") {
        const k = randInt(rng, 3, 6);
        const r = randInt(rng, 4, 15);
        const d = r * 2;
        const totalCm = k * d;
        const totalM = roundDec(totalCm / 100, 2);
        const obj = pick(rng, ["pinggan bulat sama saiz", "gelung plastik sama saiz", "penutup balang sama saiz"]);
        const q = `${k} keping ${obj} disusun rapat sebaris dengan jumlah panjang ${fmtNum(totalM)} m. Cari jejari bagi satu keping dalam cm.`;
        const exp = `${fmtNum(totalM)} m = ${totalCm} cm. Diameter 1 keping = ${totalCm} ÷ ${k} = ${d} cm. Jejari = ${d} ÷ 2 = ${r} cm.`;
        const wrongs = [
          `${d} cm`,
          `${fmtNum(roundDec(r / 100, 2))} cm`,
          `${r + 3} cm`,
          `${Math.max(2, r - 2)} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${r} cm`, wrongs, exp, `b6_s4:H:${tpl}:k=${k},r=${r}`);
      } else {
        const cols = pick(rng, [2, 3, 4]);
        const rows = pick(rng, [2, 3]);
        const r = pick(rng, [4, 5, 6, 7, 8]);
        const d = r * 2;
        const lenCm = cols * d;
        const widCm = rows * d;
        const perim = 2 * (lenCm + widCm);
        const q = `Ibu Mei Hwa menyusun ${cols * rows} biji kek bulat berjejari ${r} cm secara rapat dalam ${rows} baris dengan ${cols} biji kek bagi setiap baris di atas papan pelapik segi empat tepat. Berapakah perimeter minimum papan pelapik yang diperlukan dalam cm?`;
        const exp = `Diameter sebiji kek = 2 × ${r} = ${d} cm. Panjang minimum = ${cols} × ${d} = ${lenCm} cm; lebar minimum = ${rows} × ${d} = ${widCm} cm. Perimeter = 2 × (${lenCm} + ${widCm}) = ${perim} cm.`;
        const wrongs = [
          `${2 * (cols * r + rows * r)} cm`,
          `${lenCm + widCm} cm`,
          `${lenCm * widCm} cm`,
          `${perim + d} cm`
        ];
        return buildMcq(rng, { ...meta, template: tpl }, q, `${perim} cm`, wrongs, exp, `b6_s4:H:${tpl}:c=${cols},rw=${rows},r=${r}`);
      }
    })
  ];
    return generators;
  }

  function buildPartB7B8() {
    "use strict";
  function hashSeed(seed) {
    const s = String(seed);
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    let t = a >>> 0;
    return function () {
      t = (t + 0x6d2b79f5) | 0;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(seed) {
    return mulberry32(hashSeed(seed));
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
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

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

  function buildMcq(rng, q, correctStr, wrongCandidates, explanation, fallbackFn) {
    const cStr = String(correctStr);
    const seen = new Set([cStr]);
    const wrongs = [];
    for (const w of wrongCandidates) {
      const s = String(w);
      if (!s || seen.has(s) || s.includes("NaN") || s.includes("undefined")) continue;
      seen.add(s);
      wrongs.push(s);
      if (wrongs.length === 3) break;
    }
    let step = 1;
    while (wrongs.length < 3) {
      if (!fallbackFn) {
        throw new Error("Insufficient unique distractors for question: " + q);
      }
      const cand = String(fallbackFn(step++));
      if (cand && !seen.has(cand) && !cand.includes("NaN") && !cand.includes("undefined")) {
        seen.add(cand);
        wrongs.push(cand);
      }
      if (step > 50) {
        throw new Error("Fallback distractor loop exceeded limit for: " + q);
      }
    }
    const options = shuffle(rng, [cStr, ...wrongs]);
    return {
      q,
      options,
      correctIndex: options.indexOf(cStr),
      explanation
    };
  }

  function makeRatioWrongs(a, b, rawCandidates) {
    const wrongs = [];
    const seenVal = new Set([`${a}:${b}`]);
    const tryPush = (p, q) => {
      if (p <= 0 || q <= 0) return;
      const g = gcd(p, q);
      const sp = p / g;
      const sq = q / g;
      // Value-uniqueness: reject any ratio equivalent to a : b or to an existing distractor
      if (sp * b === sq * a) return;
      const key = `${sp}:${sq}`;
      if (seenVal.has(key)) return;
      seenVal.add(key);
      wrongs.push(`${p} : ${q}`);
    };
    for (const [p, q] of rawCandidates) {
      tryPush(p, q);
      if (wrongs.length === 3) break;
    }
    let step = 1;
    while (wrongs.length < 3) {
      tryPush(a + step, b);
      if (wrongs.length < 3) tryPush(a, b + step);
      if (wrongs.length < 3) tryPush(a + step, b + 1);
      step++;
    }
    return wrongs;
  }

  function makeUnitNumWrongs(ans, unit, candidates) {
    const wrongs = [];
    const seen = new Set([ans]);
    for (const v of candidates) {
      if (Number.isFinite(v) && v > 0 && !seen.has(v)) {
        seen.add(v);
        wrongs.push(`${v} ${unit}`);
        if (wrongs.length === 3) break;
      }
    }
    let step = 1;
    while (wrongs.length < 3) {
      for (const v of [ans + step, ans - step]) {
        if (v > 0 && !seen.has(v)) {
          seen.add(v);
          wrongs.push(`${v} ${unit}`);
          if (wrongs.length === 3) break;
        }
      }
      step++;
    }
    return wrongs;
  }

  function makeIntWrongs(ans, candidates, allowZero) {
    const minVal = allowZero ? 0 : 1;
    const wrongs = [];
    const seen = new Set([ans]);
    for (const v of candidates) {
      if (Number.isFinite(v) && v >= minVal && !seen.has(v)) {
        seen.add(v);
        wrongs.push(String(v));
        if (wrongs.length === 3) break;
      }
    }
    let step = 1;
    while (wrongs.length < 3) {
      for (const v of [ans + step, ans - step]) {
        if (v >= minVal && !seen.has(v)) {
          seen.add(v);
          wrongs.push(String(v));
          if (wrongs.length === 3) break;
        }
      }
      step++;
    }
    return wrongs;
  }

  function fmtCoord(x, y) {
    return `(${x}, ${y})`;
  }

  const LIKELIHOOD_LEVELS = [
    "Pasti",
    "Besar kemungkinan",
    "Sama kemungkinan",
    "Kecil kemungkinan",
    "Mustahil"
  ];

  function classifyLikelihood(count, total) {
    if (count === 0) return "Mustahil";
    if (count === total) return "Pasti";
    if (count * 2 === total) return "Sama kemungkinan";
    if (count * 4 >= total * 3) return "Besar kemungkinan";
    if (count * 4 <= total) return "Kecil kemungkinan";
    throw new Error(`Ambiguous likelihood ratio: ${count}/${total}`);
  }

  function pickLikelihoodWrongs(rng, correctLevel, preferred) {
    const pool = [...preferred, ...shuffle(rng, LIKELIHOOD_LEVELS)];
    const out = [];
    const seen = new Set([correctLevel]);
    for (const lvl of pool) {
      if (!seen.has(lvl)) {
        seen.add(lvl);
        out.push(lvl);
        if (out.length === 3) break;
      }
    }
    return out;
  }

  const PLACES = [
    ["Rumah Farid", "Masjid"],
    ["Klinik Desa", "Perpustakaan Awam"],
    ["Stesen LRT", "Pasar Tani"],
    ["Taman Botani", "Balai Raya"],
    ["SK Seri Murni", "Kompleks Sukan"],
    ["Kedai Buku", "Pejabat Pos"]
  ];

  const COPRIME_PAIRS = [
    [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 5], [2, 7],
    [3, 4], [3, 5], [3, 7], [3, 8], [4, 5], [4, 7], [5, 6], [5, 8]
  ];


  function makeGen(unit, skill, diff, templates, fn) {
    return {
      type: "generator",
      id: `${skill}_${diff}`,
      unit,
      skill,
      diff,
      templates,
      generate(seed) {
        const rng = makeRng(seed);
        return fn(rng);
      }
    };
  }

  // ==================== BAB 7 GENERATORS ====================

  const b7_s1_L = makeGen("b7", "b7_s1", "L", ["coord_horiz_unit", "coord_vert_unit"], (rng) => {
    const tpl = pick(rng, ["coord_horiz_unit", "coord_vert_unit"]);
    const [pA, pB] = pick(rng, PLACES);
    const x1 = randInt(rng, 1, 5);
    const y1 = randInt(rng, 1, 5);
    let dx = randInt(rng, 2, 7);
    let dy = randInt(rng, 2, 7);
    if (dx === dy) dy = dx === 7 ? 5 : dx + 1;
    const x2 = x1 + dx;
    const y2 = y1 + dy;
    const useKm = randInt(rng, 0, 1) === 1;
    const unitStr = useKm ? "km" : "unit";
    const scaleNote = useKm ? " Diberi skala 1 unit mewakili 1 km." : "";

    if (tpl === "coord_horiz_unit") {
      const q = `Pada sukuan pertama satah Cartes, ${pA} berada di ${fmtCoord(x1, y1)} dan ${pB} berada di ${fmtCoord(x2, y2)}.${scaleNote} Berapakah jarak mengufuk dari ${pA} ke ${pB}?`;
      const exp = `Jarak mengufuk = ${x2} - ${x1} = ${dx} ${unitStr}.`;
      const wrongs = makeUnitNumWrongs(dx, unitStr, [dy, dx + dy, x2 + x1]);
      const mcq = buildMcq(rng, q, `${dx} ${unitStr}`, wrongs, exp, (s) => `${dx + s + 1} ${unitStr}`);
      return {
        unit: "b7",
        skill: "b7_s1",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b7_s1:L:${tpl}:${x1},${y1},${x2},${y2},${unitStr}`
      };
    }

    const q = `Pada satah Cartes, ${pA} terletak pada koordinat ${fmtCoord(x1, y1)} dan ${pB} terletak pada koordinat ${fmtCoord(x2, y2)}.${scaleNote} Berapakah jarak mencancang dari ${pA} ke ${pB}?`;
    const exp = `Jarak mencancang = ${y2} - ${y1} = ${dy} ${unitStr}.`;
    const wrongs = makeUnitNumWrongs(dy, unitStr, [dx, dx + dy, y2 + y1]);
    const mcq = buildMcq(rng, q, `${dy} ${unitStr}`, wrongs, exp, (s) => `${dy + s + 1} ${unitStr}`);
    return {
      unit: "b7",
      skill: "b7_s1",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b7_s1:L:${tpl}:${x1},${y1},${x2},${y2},${unitStr}`
    };
  });

  const b7_s1_M = makeGen("b7", "b7_s1", "M", ["coord_scaled_hv", "coord_scale_ratio_km"], (rng) => {
    const tpl = pick(rng, ["coord_scaled_hv", "coord_scale_ratio_km"]);
    const [pA, pB] = pick(rng, PLACES);

    if (tpl === "coord_scaled_hv") {
      const scale = pick(rng, [2, 3, 4, 5, 10]);
      const x1 = randInt(rng, 1, 5);
      const y1 = randInt(rng, 1, 5);
      let dx = randInt(rng, 2, 6);
      let dy = randInt(rng, 2, 6);
      if (dx === dy) dy = dx === 6 ? 4 : dx + 1;
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      const askHoriz = randInt(rng, 0, 1) === 1;
      const targetUnits = askHoriz ? dx : dy;
      const otherUnits = askHoriz ? dy : dx;
      const ans = targetUnits * scale;
      const axisLabel = askHoriz ? "mengufuk" : "mencancang";
      const axisDiff = askHoriz ? `${x2} - ${x1}` : `${y2} - ${y1}`;
      const q = `Kedudukan ${pA} dan ${pB} pada satah Cartes masing-masing ialah ${fmtCoord(x1, y1)} dan ${fmtCoord(x2, y2)}. Skala pada satah Cartes itu ialah 1 unit mewakili ${scale} km. Hitung jarak ${axisLabel} sebenar, dalam km, antara ${pA} dengan ${pB}.`;
      const exp = `Jarak ${axisLabel} pada grid = ${axisDiff} = ${targetUnits} unit. Jarak sebenar = ${targetUnits} × ${scale} km = ${ans} km.`;
      const wrongs = makeUnitNumWrongs(ans, "km", [otherUnits * scale, targetUnits, (dx + dy) * scale, ans + scale]);
      const mcq = buildMcq(rng, q, `${ans} km`, wrongs, exp, (s) => `${ans + s * scale} km`);
      return {
        unit: "b7",
        skill: "b7_s1",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b7_s1:M:${tpl}:${x1},${y1},${x2},${y2},${scale},${axisLabel}`
      };
    }

    const ratioOpt = pick(rng, [
      { ratioText: "1 : 100 000", kmPerCm: 1 },
      { ratioText: "1 : 200 000", kmPerCm: 2 },
      { ratioText: "1 : 500 000", kmPerCm: 5 }
    ]);
    const mode = pick(rng, ["to_km", "to_cm"]);
    if (mode === "to_km") {
      const x1 = randInt(rng, 1, 4);
      const y1 = randInt(rng, 1, 4);
      let dx = randInt(rng, 2, 7);
      let dy = randInt(rng, 2, 7);
      if (dx === dy) dy = dx === 7 ? 5 : dx + 1;
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      const ansKm = dx * ratioOpt.kmPerCm;
      const q = `Satu peta pada satah Cartes menggunakan skala ${ratioOpt.ratioText} (1 grid = 1 cm). Koordinat ${pA} ialah ${fmtCoord(x1, y1)} dan koordinat ${pB} ialah ${fmtCoord(x2, y2)}. Berapakah jarak mengufuk sebenar, dalam km, dari ${pA} ke ${pB}?`;
      const exp = `1 cm mewakili ${ratioOpt.kmPerCm} km. Jarak mengufuk = ${dx} cm × ${ratioOpt.kmPerCm} km = ${ansKm} km.`;
      const wrongs = makeUnitNumWrongs(ansKm, "km", [dy * ratioOpt.kmPerCm, dx * 10, (dx + dy) * ratioOpt.kmPerCm, ansKm + ratioOpt.kmPerCm]);
      const mcq = buildMcq(rng, q, `${ansKm} km`, wrongs, exp, (s) => `${ansKm + s * 2} km`);
      return {
        unit: "b7",
        skill: "b7_s1",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b7_s1:M:${tpl}:to_km:${x1},${y1},${x2},${y2},${ratioOpt.kmPerCm}`
      };
    }

    const gridCm = randInt(rng, 3, 9);
    const actualM = gridCm * ratioOpt.kmPerCm * 1000;
    const q = `Dengan menggunakan skala ${ratioOpt.ratioText} pada satah Cartes, jarak mengufuk sebenar antara ${pA} dengan ${pB} ialah ${actualM} m. Berapakah jarak mengufuk pada satah Cartes itu dalam cm?`;
    const exp = `${actualM} m = ${actualM / 1000} km. Dengan skala ${ratioOpt.ratioText}, 1 cm mewakili ${ratioOpt.kmPerCm} km. Maka jarak pada peta = ${actualM / 1000} ÷ ${ratioOpt.kmPerCm} = ${gridCm} cm.`;
    const wrongs = makeUnitNumWrongs(gridCm, "cm", [actualM / 1000, gridCm * ratioOpt.kmPerCm, gridCm + 2, Math.max(1, gridCm - 1)]);
    const mcq = buildMcq(rng, q, `${gridCm} cm`, wrongs, exp, (s) => `${gridCm + s + 2} cm`);
    return {
      unit: "b7",
      skill: "b7_s1",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b7_s1:M:${tpl}:to_cm:${gridCm},${ratioOpt.kmPerCm}`
    };
  });

  const b7_s1_H = makeGen("b7", "b7_s1", "H", ["coord_move_target", "coord_backsolve_start"], (rng) => {
    const tpl = pick(rng, ["coord_move_target", "coord_backsolve_start"]);
    const [pA, pB] = pick(rng, PLACES);
    const scale = pick(rng, [1, 2, 5]);
    const dx = randInt(rng, 2, 5);
    let dy = randInt(rng, 2, 5);
    if (dx === dy) dy = dx === 5 ? 3 : dx + 1;

    if (tpl === "coord_move_target") {
      const goRight = randInt(rng, 0, 1) === 1;
      const goUp = randInt(rng, 0, 1) === 1;
      const x1 = goRight ? randInt(rng, 1, 5) : randInt(rng, dx + 1, dx + 5);
      const y1 = goUp ? randInt(rng, 1, 5) : randInt(rng, dy + 1, dy + 5);
      const x2 = goRight ? x1 + dx : x1 - dx;
      const y2 = goUp ? y1 + dy : y1 - dy;
      const hDir = goRight ? "kanan" : "kiri";
      const vDir = goUp ? "atas" : "bawah";
      const distH = dx * scale;
      const distV = dy * scale;
      const q = `Skala satah Cartes ialah 1 unit mewakili ${scale} km. ${pA} berada pada koordinat ${fmtCoord(x1, y1)}. Untuk pergi ke ${pB}, Arif bergerak ${distH} km ke ${hDir} dan ${distV} km ke ${vDir}. Apakah koordinat ${pB}?`;
      const exp = `Pergerakan mengufuk = ${distH} ÷ ${scale} = ${dx} unit ke ${hDir}; pergerakan mencancang = ${distV} ÷ ${scale} = ${dy} unit ke ${vDir}. Koordinat ${pB} = ${fmtCoord(x2, y2)}.`;
      const cands = [
        fmtCoord(goRight ? x1 + dy : x1 - dy, goUp ? y1 + dx : y1 - dx),
        fmtCoord(goRight ? x1 - dx : x1 + dx, y2),
        fmtCoord(x2, goUp ? y1 - dy : y1 + dy),
        fmtCoord(x2 + 1, y2 + 1)
      ];
      const mcq = buildMcq(rng, q, fmtCoord(x2, y2), cands, exp, (s) => fmtCoord(x2 + s + 1, y2));
      return {
        unit: "b7",
        skill: "b7_s1",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b7_s1:H:${tpl}:${x1},${y1},${dx},${dy},${goRight},${goUp},${scale}`
      };
    }

    const fromRight = randInt(rng, 0, 1) === 1;
    const fromUp = randInt(rng, 0, 1) === 1;
    const startX = fromRight ? randInt(rng, 1, 5) : randInt(rng, dx + 1, dx + 5);
    const startY = fromUp ? randInt(rng, 1, 5) : randInt(rng, dy + 1, dy + 5);
    const endX = fromRight ? startX + dx : startX - dx;
    const endY = fromUp ? startY + dy : startY - dy;
    const hDir = fromRight ? "kanan" : "kiri";
    const vDir = fromUp ? "atas" : "bawah";
    const distH = dx * scale;
    const distV = dy * scale;
    const q = `Skala satah Cartes ialah 1 unit mewakili ${scale} km. Dari titik asal P, seorang pengayuh basikal bergerak ${distH} km ke ${hDir} dan ${distV} km ke ${vDir} sehingga tiba di titik Q${fmtCoord(endX, endY)}. Tentukan koordinat asal titik P.`;
    const exp = `Undurkan pergerakan sebanyak ${dx} unit mengufuk dan ${dy} unit mencancang dari ${fmtCoord(endX, endY)}: x = ${endX} ${fromRight ? "-" : "+"} ${dx} = ${startX}, y = ${endY} ${fromUp ? "-" : "+"} ${dy} = ${startY}. Maka P ialah ${fmtCoord(startX, startY)}.`;
    const cands = [
      fmtCoord(fromRight ? endX + dx : Math.max(0, endX - dx), fromUp ? endY + dy : Math.max(0, endY - dy)),
      fmtCoord(fromRight ? Math.max(0, endX - dy) : endX + dy, fromUp ? Math.max(0, endY - dx) : endY + dx),
      fmtCoord(endX, startY),
      fmtCoord(startX + 1, startY)
    ];
    const mcq = buildMcq(rng, q, fmtCoord(startX, startY), cands, exp, (s) => fmtCoord(startX + s + 1, startY + 1));
    return {
      unit: "b7",
      skill: "b7_s1",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b7_s1:H:${tpl}:${startX},${startY},${dx},${dy},${fromRight},${fromUp},${scale}`
    };
  });

  const b7_s2_L = makeGen("b7", "b7_s2", "L", ["ratio_simplify_direct", "ratio_count_part_to_part"], (rng) => {
    const tpl = pick(rng, ["ratio_simplify_direct", "ratio_count_part_to_part"]);
    const [a, b] = pick(rng, COPRIME_PAIRS);
    const k = randInt(rng, 2, 8);
    const A = a * k;
    const B = b * k;

    if (tpl === "ratio_simplify_direct") {
      const q = `Nyatakan nisbah ${A} : ${B} dalam bentuk termudah.`;
      const exp = `Bahagikan kedua-dua nombor dengan faktor sepunya terbesar ${k}: (${A} ÷ ${k}) : (${B} ÷ ${k}) = ${a} : ${b}.`;
      const wrongs = makeRatioWrongs(a, b, [
        [b, a],
        [a * 2, b * 2],
        [a + 1, b],
        [a, b + 1]
      ]);
      const mcq = buildMcq(rng, q, `${a} : ${b}`, wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s2",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b7_s2:L:${tpl}:${A},${B}`
      };
    }

    const pair = pick(rng, [
      ["buah mangga", "buah manggis"],
      ["murid lelaki", "murid perempuan"],
      ["pen biru", "pen merah"],
      ["biskut coklat", "biskut mentega"]
    ]);
    const q = `Di dalam sebuah bakul terdapat ${A} ${pair[0]} dan ${B} ${pair[1]}. Nyatakan nisbah bilangan ${pair[0]} kepada bilangan ${pair[1]} dalam bentuk termudah.`;
    const exp = `Nisbah asal ialah ${A} : ${B}. Bahagikan kedua-duanya dengan ${k} untuk mendapat bentuk termudah ${a} : ${b}.`;
    const wrongs = makeRatioWrongs(a, b, [
      [b, a],
      [a, a + b],
      [a + 1, b],
      [a, b + 1]
    ]);
    const mcq = buildMcq(rng, q, `${a} : ${b}`, wrongs, exp);
    return {
      unit: "b7",
      skill: "b7_s2",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b7_s2:L:${tpl}:${A},${B}`
    };
  });

  const b7_s2_M = makeGen("b7", "b7_s2", "M", ["ratio_part_to_whole", "ratio_unit_convert"], (rng) => {
    const tpl = pick(rng, ["ratio_part_to_whole", "ratio_unit_convert"]);

    if (tpl === "ratio_part_to_whole") {
      const [a, b] = pick(rng, COPRIME_PAIRS);
      const k = randInt(rng, 2, 7);
      const A = a * k;
      const B = b * k;
      const total = A + B;
      const ansA = a;
      const ansB = a + b;
      const item = pick(rng, [
        ["kuih karipap", "kuih donat"],
        ["buku cerita", "buku rujukan"],
        ["anak pokok bunga", "anak pokok buah"],
        ["guli hijau", "guli kuning"]
      ]);
      const q = `Ibu menyediakan ${A} ${item[0]} dan ${B} ${item[1]}. Nyatakan nisbah bilangan ${item[0]} kepada jumlah bilangan ${item[0]} dan ${item[1]} dalam bentuk termudah.`;
      const exp = `Jumlah = ${A} + ${B} = ${total}. Nisbah = ${A} : ${total}. Bahagikan dengan ${k} menjadi ${ansA} : ${ansB}.`;
      const wrongs = makeRatioWrongs(ansA, ansB, [
        [a, b],
        [b, ansB],
        [ansB, ansA],
        [a, ansB + 1]
      ]);
      const mcq = buildMcq(rng, q, `${ansA} : ${ansB}`, wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s2",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b7_s2:M:${tpl}:${A},${B}`
      };
    }

    const cases = [
      () => {
        const m = randInt(rng, 1, 4);
        const g = m * 500;
        const kg = pick(rng, [2, 3, 4, 5]);
        return { leftStr: `${g} g`, rightStr: `${kg} kg`, lVal: g, rVal: kg * 1000, rawR: kg, convNote: `${kg} kg = ${kg * 1000} g` };
      },
      () => {
        const ml = pick(rng, [250, 400, 500, 600, 750, 800]);
        const l = pick(rng, [1, 2, 3, 4]);
        return { leftStr: `${ml} ml`, rightStr: `${l} l`, lVal: ml, rVal: l * 1000, rawR: l, convNote: `${l} l = ${l * 1000} ml` };
      },
      () => {
        const cm = pick(rng, [20, 40, 50, 60, 80]);
        const m = pick(rng, [1, 2, 3]);
        return { leftStr: `${cm} cm`, rightStr: `${m} m`, lVal: cm, rVal: m * 100, rawR: m, convNote: `${m} m = ${m * 100} cm` };
      },
      () => {
        const sen = pick(rng, [20, 40, 50, 60, 80]);
        const rm = pick(rng, [1, 2, 4]);
        return { leftStr: `${sen} sen`, rightStr: `RM ${rm}`, lVal: sen, rVal: rm * 100, rawR: rm, convNote: `RM ${rm} = ${rm * 100} sen` };
      }
    ];
    const c = pick(rng, cases)();
    const g = gcd(c.lVal, c.rVal);
    const a = c.lVal / g;
    const b = c.rVal / g;
    const gRaw = gcd(c.lVal, c.rawR);
    const q = `Nyatakan nisbah ${c.leftStr} kepada ${c.rightStr} dalam bentuk termudah.`;
    const exp = `Samakan unit terlebih dahulu: ${c.convNote}. Nisbah = ${c.lVal} : ${c.rVal}, dipermudahkan dengan membahagi ${g} menjadi ${a} : ${b}.`;
    const wrongs = makeRatioWrongs(a, b, [
      [c.lVal / gRaw, c.rawR / gRaw],
      [b, a],
      [a, b + 1],
      [a + 1, b]
    ]);
    const mcq = buildMcq(rng, q, `${a} : ${b}`, wrongs, exp);
    return {
      unit: "b7",
      skill: "b7_s2",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b7_s2:M:${tpl}:${c.leftStr},${c.rightStr}`
    };
  });

  const b7_s2_H = makeGen("b7", "b7_s2", "H", ["ratio_unit_part_to_whole", "ratio_three_items_subpair"], (rng) => {
    const tpl = pick(rng, ["ratio_unit_part_to_whole", "ratio_three_items_subpair"]);

    if (tpl === "ratio_unit_part_to_whole") {
      const scenarios = [
        () => {
          const kg1 = randInt(rng, 1, 4);
          const g2 = pick(rng, [1500, 2000, 2500, 3000, 4000, 5000]);
          const v1 = kg1 * 1000;
          const v2 = g2;
          return {
            text: `Ravi membeli ${kg1} kg daging ayam dan ${g2} g daging kambing. Nyatakan nisbah jisim daging ayam kepada jumlah jisim kedua-dua daging itu dalam bentuk termudah.`,
            v1,
            tot: v1 + v2,
            conv: `${g2} g = ${g2 / 1000} kg; jumlah = ${v1 + v2} g`
          };
        },
        () => {
          const l1 = randInt(rng, 1, 3);
          const ml2 = pick(rng, [500, 1500, 2000, 2500, 3000]);
          const v1 = l1 * 1000;
          const v2 = ml2;
          return {
            text: `Bekas A mengandungi ${l1} l air sirap dan bekas B mengandungi ${ml2} ml air sirap. Nyatakan nisbah isi padu bekas A kepada jumlah isi padu kedua-dua bekas dalam bentuk termudah.`,
            v1,
            tot: v1 + v2,
            conv: `${l1} l = ${v1} ml; jumlah = ${v1 + v2} ml`
          };
        }
      ];
      const s = pick(rng, scenarios)();
      const g = gcd(s.v1, s.tot);
      const a = s.v1 / g;
      const b = s.tot / g;
      const gPart = gcd(s.v1, s.tot - s.v1);
      const q = s.text;
      const exp = `Samakan unit: ${s.conv}. Nisbah = ${s.v1} : ${s.tot} = ${a} : ${b}.`;
      const wrongs = makeRatioWrongs(a, b, [
        [s.v1 / gPart, (s.tot - s.v1) / gPart],
        [b, a],
        [(s.tot - s.v1) / g, b],
        [a, b + 1]
      ]);
      const mcq = buildMcq(rng, q, `${a} : ${b}`, wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s2",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b7_s2:H:${tpl}:${s.v1},${s.tot}`
      };
    }

    const ikanKg = pick(rng, [1, 2, 3]);
    const ketamG = pick(rng, [1000, 1500, 2000, 2500]);
    const sotongG = pick(rng, [500, 1000, 1500]);
    const ikanG = ikanKg * 1000;
    const sumIK = ikanG + ketamG;
    const g = gcd(sumIK, sotongG);
    const a = sumIK / g;
    const b = sotongG / g;
    const q = `Keluarga Rachel menempah ${ikanKg} kg ikan, ${ketamG} g ketam dan ${sotongG} g sotong. Nyatakan nisbah jumlah jisim ikan dan ketam kepada jisim sotong dalam bentuk termudah.`;
    const exp = `${ikanKg} kg = ${ikanG} g. Jumlah jisim ikan dan ketam = ${ikanG} + ${ketamG} = ${sumIK} g. Nisbah = ${sumIK} : ${sotongG} = ${a} : ${b}.`;
    const wrongs = makeRatioWrongs(a, b, [
      [b, a],
      [ikanG / gcd(ikanG, sotongG), sotongG / gcd(ikanG, sotongG)],
      [ketamG / gcd(ketamG, sotongG), sotongG / gcd(ketamG, sotongG)],
      [(sumIK + sotongG) / gcd(sumIK + sotongG, sotongG), sotongG / gcd(sumIK + sotongG, sotongG)]
    ]);
    const mcq = buildMcq(rng, q, `${a} : ${b}`, wrongs, exp);
    return {
      unit: "b7",
      skill: "b7_s2",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b7_s2:H:${tpl}:${ikanG},${ketamG},${sotongG}`
    };
  });

  const b7_s3_L = makeGen("b7", "b7_s3", "L", ["prop_scale_from_unit_ratio", "prop_unitary_direct"], (rng) => {
    const tpl = pick(rng, ["prop_scale_from_unit_ratio", "prop_unitary_direct"]);

    if (tpl === "prop_scale_from_unit_ratio") {
      const b = randInt(rng, 2, 7);
      const k = randInt(rng, 3, 12);
      const totalB = b * k;
      const item = pick(rng, [
        ["murid lelaki", "murid perempuan", "orang"],
        ["guru lelaki", "guru perempuan", "orang"],
        ["keping kad biru", "keping kad merah", "keping"]
      ]);
      const giveOne = randInt(rng, 0, 1) === 1;
      if (giveOne) {
        const q = `Nisbah bilangan ${item[0]} kepada bilangan ${item[1]} ialah 1 : ${b}. Jika terdapat ${k} ${item[2]} ${item[0]}, berapakah bilangan ${item[1]}?`;
        const exp = `1 bahagian = ${k}. Maka ${b} bahagian = ${b} × ${k} = ${totalB} ${item[2]}.`;
        const wrongs = makeIntWrongs(totalB, [totalB + k, Math.max(1, totalB - k), b + k, k]);
        const mcq = buildMcq(rng, q, String(totalB), wrongs, exp);
        return {
          unit: "b7",
          skill: "b7_s3",
          diff: "L",
          template: tpl,
          ...mcq,
          sig: `b7_s3:L:${tpl}:giveOne:${b},${k}`
        };
      }
      const q = `Nisbah bilangan ${item[0]} kepada bilangan ${item[1]} ialah 1 : ${b}. Jika bilangan ${item[1]} ialah ${totalB} ${item[2]}, berapakah bilangan ${item[0]}?`;
      const exp = `${b} bahagian = ${totalB}. Maka 1 bahagian = ${totalB} ÷ ${b} = ${k} ${item[2]}.`;
      const wrongs = makeIntWrongs(k, [totalB - b, k + b, totalB * b, k + 2]);
      const mcq = buildMcq(rng, q, String(k), wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s3",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b7_s3:L:${tpl}:findOne:${b},${k}`
      };
    }

    const [a, b] = pick(rng, COPRIME_PAIRS.filter(([x, y]) => x > 1 && y > 1));
    const k = randInt(rng, 2, 12);
    const valA = a * k;
    const valB = b * k;
    const ctx = pick(rng, [
      ["komik yang dibaca oleh Zikri", "komik yang dibaca oleh Wong"],
      ["skor Rumah Biru", "skor Rumah Hijau"],
      ["biji guli merah", "biji guli biru"]
    ]);
    const q = `Nisbah bilangan ${ctx[0]} kepada ${ctx[1]} ialah ${a} : ${b}. Jika ${ctx[0]} ialah ${valA}, hitungkan ${ctx[1]}.`;
    const exp = `${a} bahagian = ${valA}, jadi 1 bahagian = ${valA} ÷ ${a} = ${k}. Maka ${b} bahagian = ${b} × ${k} = ${valB}.`;
    const wrongs = makeIntWrongs(valB, [valB + k, Math.max(1, valB - k), valA * b, a * b]);
    const mcq = buildMcq(rng, q, String(valB), wrongs, exp);
    return {
      unit: "b7",
      skill: "b7_s3",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b7_s3:L:${tpl}:${a},${b},${k}`
    };
  });

  const b7_s3_M = makeGen("b7", "b7_s3", "M", ["prop_unitary_cost_mass", "prop_sum_to_parts"], (rng) => {
    const tpl = pick(rng, ["prop_unitary_cost_mass", "prop_sum_to_parts"]);

    if (tpl === "prop_unitary_cost_mass") {
      const mode = pick(rng, ["price", "recipe"]);
      if (mode === "price") {
        const n1 = randInt(rng, 2, 6);
        const unitP = randInt(rng, 3, 9);
        const c1 = n1 * unitP;
        let n2 = randInt(rng, 4, 12);
        if (n2 === n1) n2++;
        const c2 = n2 * unitP;
        const q = `Harga bagi ${n1} buah buku latihan ialah RM ${c1}. Berapakah harga bagi ${n2} buah buku latihan yang sama?`;
        const exp = `Harga 1 buku = RM ${c1} ÷ ${n1} = RM ${unitP}. Maka harga ${n2} buku = ${n2} × RM ${unitP} = RM ${c2}.`;
        const wrongs = makeIntWrongs(c2, [c2 + unitP, Math.max(1, c2 - unitP), c1 + n2, n2 * n1]).map((v) => `RM ${v}`);
        const mcq = buildMcq(rng, q, `RM ${c2}`, wrongs, exp, (s) => `RM ${c2 + s + 5}`);
        return {
          unit: "b7",
          skill: "b7_s3",
          diff: "M",
          template: tpl,
          ...mcq,
          sig: `b7_s3:M:${tpl}:price:${n1},${unitP},${n2}`
        };
      }
      const [a, b] = pick(rng, COPRIME_PAIRS.filter(([x, y]) => x > 1 && y > 1));
      const unitG = pick(rng, [5, 10, 15, 20]);
      const gA = a * unitG;
      const gB = b * unitG;
      const q = `Dalam satu resipi, nisbah bilangan sudu besar garam kepada bilangan sudu besar lada hitam ialah ${a} : ${b}. Jika jisim garam yang digunakan ialah ${gA} g, berapakah jisim, dalam g, lada hitam yang diperlukan?`;
      const exp = `${a} bahagian = ${gA} g, maka 1 bahagian = ${unitG} g. Jisim lada hitam = ${b} × ${unitG} g = ${gB} g.`;
      const wrongs = makeUnitNumWrongs(gB, "g", [gB + unitG, Math.max(5, gB - unitG), gA + gB, b * gA]);
      const mcq = buildMcq(rng, q, `${gB} g`, wrongs, exp, (s) => `${gB + s * 5} g`);
      return {
        unit: "b7",
        skill: "b7_s3",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b7_s3:M:${tpl}:recipe:${a},${b},${unitG}`
      };
    }

    const [a, b] = pick(rng, COPRIME_PAIRS);
    const k = randInt(rng, 3, 12);
    const total = (a + b) * k;
    const askFirst = randInt(rng, 0, 1) === 1;
    const ans = (askFirst ? a : b) * k;
    const other = (askFirst ? b : a) * k;
    const who = askFirst ? "Roslinda" : "Sherin";
    const q = `Nisbah wang tabungan Roslinda kepada wang tabungan Sherin ialah ${a} : ${b}. Jumlah wang tabungan mereka ialah RM ${total}. Hitung wang tabungan ${who}.`;
    const exp = `Jumlah bahagian = ${a} + ${b} = ${a + b}. 1 bahagian = RM ${total} ÷ ${a + b} = RM ${k}. Wang ${who} = ${askFirst ? a : b} × RM ${k} = RM ${ans}.`;
    const wrongs = makeIntWrongs(ans, [other, ans + k, Math.max(1, ans - k), total - k]).map((v) => `RM ${v}`);
    const mcq = buildMcq(rng, q, `RM ${ans}`, wrongs, exp, (s) => `RM ${ans + s + 3}`);
    return {
      unit: "b7",
      skill: "b7_s3",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b7_s3:M:${tpl}:${a},${b},${k},${who}`
    };
  });

  const b7_s3_H = makeGen("b7", "b7_s3", "H", ["prop_chain_two_ratios", "prop_perimeter_geometry"], (rng) => {
    const tpl = pick(rng, ["prop_chain_two_ratios", "prop_perimeter_geometry"]);

    if (tpl === "prop_chain_two_ratios") {
      const [p, q] = pick(rng, [[2, 3], [3, 2], [3, 4], [4, 3], [5, 4]]);
      const [r, s] = pick(rng, [[3, 2], [2, 5], [4, 5], [5, 2], [2, 3]]);
      const lcmPR = (p * r) / gcd(p, r);
      const m = randInt(rng, 2, 5);
      const countA = lcmPR * m;
      const countB = (countA / p) * q;
      const countC = (countA / r) * s;
      const sumBC = countB + countC;
      const qText = `Di dalam sebuah kotak terdapat ${countA} keping token merah. Nisbah bilangan token merah kepada token hijau ialah ${p} : ${q}, manakala nisbah bilangan token merah kepada token biru ialah ${r} : ${s}. Hitung jumlah bilangan token hijau dan token biru.`;
      const exp = `Token hijau = (${countA} ÷ ${p}) × ${q} = ${countB}. Token biru = (${countA} ÷ ${r}) × ${s} = ${countC}. Jumlah = ${countB} + ${countC} = ${sumBC}.`;
      const wrongs = makeIntWrongs(sumBC, [countB, countC, Math.abs(countB - countC) || sumBC + 4, sumBC + countA]);
      const mcq = buildMcq(rng, qText, String(sumBC), wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s3",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b7_s3:H:${tpl}:${countA},${p},${q},${r},${s}`
      };
    }

    // Right triangle 3m, 4m, 5m => perimeter = 12m. Ratio triangle : square = 3 : b (where b in [4, 5, 6, 7])
    const m = randInt(rng, 2, 5);
    const s1 = 3 * m;
    const s2 = 4 * m;
    const s3 = 5 * m;
    const pTri = s1 + s2 + s3; // 12 * m (divisible by 3 and 4)
    const [a, b] = pick(rng, [[3, 4], [3, 5], [3, 7], [2, 3], [3, 8]]);
    // pTri is divisible by 12, so divisible by a (2 or 3). Ensure pSquare is divisible by 4:
    // If b is not divisible by 4, pick m divisible by 1? Wait: pTri / a is 4*m (for a=3) or 6*m (for a=2).
    // For a=3, pTri/3 = 4*m, so pSquare = 4*m*b is ALWAYS divisible by 4! Side = m*b!
    // For a=2, pTri/2 = 6*m, ensure m is even so 6*m is divisible by 4 -> use a=3 always or even m for a=2.
    const mult = a === 2 && m % 2 === 1 ? m + 1 : m;
    const ts1 = 3 * mult;
    const ts2 = 4 * mult;
    const ts3 = 5 * mult;
    const perimTri = ts1 + ts2 + ts3;
    const perimSq = (perimTri / a) * b;
    const sideSq = perimSq / 4;
    const qText = `Sebuah segi tiga bersudut tegak mempunyai panjang sisi ${ts1} cm, ${ts2} cm dan ${ts3} cm. Nisbah perimeter segi tiga itu kepada perimeter sebuah segi empat sama ialah ${a} : ${b}. Hitung panjang, dalam cm, satu sisi segi empat sama itu.`;
    const exp = `Perimeter segi tiga = ${ts1} + ${ts2} + ${ts3} = ${perimTri} cm. Perimeter segi empat sama = (${perimTri} ÷ ${a}) × ${b} = ${perimSq} cm. Panjang satu sisi = ${perimSq} ÷ 4 = ${sideSq} cm.`;
    const wrongs = makeUnitNumWrongs(sideSq, "cm", [perimSq, Math.round(perimTri / 4), sideSq + mult, Math.max(1, sideSq - mult)]);
    const mcq = buildMcq(rng, qText, `${sideSq} cm`, wrongs, exp, (s) => `${sideSq + s * 2} cm`);
    return {
      unit: "b7",
      skill: "b7_s3",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b7_s3:H:${tpl}:${ts1},${ts2},${ts3},${a},${b}`
    };
  });

  const b7_s4_L = makeGen("b7", "b7_s4", "L", ["prob_coord_two_hops", "prob_ratio_total_parts"], (rng) => {
    const tpl = pick(rng, ["prob_coord_two_hops", "prob_ratio_total_parts"]);

    if (tpl === "prob_coord_two_hops") {
      const scale = pick(rng, [1, 2, 3, 5]);
      const x1 = randInt(rng, 1, 4);
      const y1 = randInt(rng, 1, 4);
      const dx = randInt(rng, 2, 5);
      const dy = randInt(rng, 2, 5);
      const x2 = x1 + dx;
      const y2 = y1;
      const x3 = x2;
      const y3 = y2 + dy;
      const totalKm = (dx + dy) * scale;
      const qText = `Skala satah Cartes ialah 1 unit mewakili ${scale} km. Puan Laila memandu dari rumahnya di A${fmtCoord(x1, y1)} ke kedai B${fmtCoord(x2, y2)}, kemudian terus ke pasar C${fmtCoord(x3, y3)} mengikut garisan grid. Berapakah jumlah jarak sebenar, dalam km, yang dilaluinya?`;
      const exp = `Jarak mengufuk A ke B = ${dx} unit; jarak mencancang B ke C = ${dy} unit. Jumlah = (${dx} + ${dy}) × ${scale} km = ${totalKm} km.`;
      const wrongs = makeUnitNumWrongs(totalKm, "km", [dx * scale, dy * scale, dx + dy, totalKm + scale]);
      const mcq = buildMcq(rng, qText, `${totalKm} km`, wrongs, exp, (s) => `${totalKm + s * scale} km`);
      return {
        unit: "b7",
        skill: "b7_s4",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b7_s4:L:${tpl}:${x1},${y1},${dx},${dy},${scale}`
      };
    }

    const [a, b] = pick(rng, COPRIME_PAIRS);
    const k = randInt(rng, 4, 15);
    const total = (a + b) * k;
    const shareA = a * k;
    const shareB = b * k;
    const diff = Math.abs(shareA - shareB);
    const qText = `Kasim dan Jamil berkongsi wang berjumlah RM ${total} untuk membeli hadiah hari guru. Nisbah wang Kasim kepada wang Jamil ialah ${a} : ${b}. Berapakah beza antara wang yang dikeluarkan oleh Kasim dengan wang Jamil?`;
    const exp = `1 bahagian = RM ${total} ÷ (${a} + ${b}) = RM ${k}. Wang Kasim = RM ${shareA}, wang Jamil = RM ${shareB}. Beza = RM ${diff}.`;
    const wrongs = makeIntWrongs(diff, [shareA, shareB, diff + k, k]).map((v) => `RM ${v}`);
    const mcq = buildMcq(rng, qText, `RM ${diff}`, wrongs, exp, (s) => `RM ${diff + s + 2}`);
    return {
      unit: "b7",
      skill: "b7_s4",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b7_s4:L:${tpl}:${a},${b},${k}`
    };
  });

  const b7_s4_M = makeGen("b7", "b7_s4", "M", ["prob_ratio_after_change", "prob_coord_compare_dist"], (rng) => {
    const tpl = pick(rng, ["prob_ratio_after_change", "prob_coord_compare_dist"]);

    if (tpl === "prob_ratio_after_change") {
      const [a, b] = pick(rng, COPRIME_PAIRS.filter(([x, y]) => x >= 2 && y >= 2));
      const k = randInt(rng, 2, 6);
      const curA = a * k;
      const curB = b * k;
      const addA = randInt(rng, 2, 6);
      const subB = randInt(rng, 2, 6);
      const initA = curA + addA;
      const initB = curB + subB;
      const qText = `Kelas 6 Meteor mempunyai ${initA} orang murid lelaki dan ${initB} orang murid perempuan. Kemudian, ${addA} orang murid lelaki dan ${subB} orang murid perempuan telah berpindah ke sekolah lain. Hitung nisbah bilangan terkini murid lelaki kepada bilangan terkini murid perempuan dalam bentuk termudah.`;
      const exp = `Murid lelaki terkini = ${initA} - ${addA} = ${curA}. Murid perempuan terkini = ${initB} - ${subB} = ${curB}. Nisbah ${curA} : ${curB} = ${a} : ${b}.`;
      const gInit = gcd(initA, initB);
      const wrongs = makeRatioWrongs(a, b, [
        [initA / gInit, initB / gInit],
        [b, a],
        [a, a + b],
        [a + 1, b]
      ]);
      const mcq = buildMcq(rng, qText, `${a} : ${b}`, wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s4",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b7_s4:M:${tpl}:${initA},${initB},${addA},${subB}`
      };
    }

    const scale = pick(rng, [2, 3, 4, 5]);
    const xA = randInt(rng, 1, 3);
    const yA = randInt(rng, 1, 3);
    const dx = randInt(rng, 3, 7);
    let dy = randInt(rng, 2, 6);
    if (dx === dy) dy = dy === 6 ? 4 : dy + 1;
    const xB = xA + dx;
    const yB = yA + randInt(rng, 1, 3);
    const xC = xA + randInt(rng, 1, 3);
    const yC = yA + dy;
    const hKm = dx * scale;
    const vKm = dy * scale;
    const diffKm = Math.abs(hKm - vKm);
    const qText = `Pada suatu satah Cartes berskala 1 cm mewakili ${scale} km (1 unit = 1 cm), Kampung A berada di ${fmtCoord(xA, yA)}, Kampung B di ${fmtCoord(xB, yB)} dan Kampung C di ${fmtCoord(xC, yC)}. Hitung beza antara jarak mengufuk sebenar Kampung B dari Kampung A dengan jarak mencancang sebenar Kampung C dari Kampung A, dalam km.`;
    const exp = `Jarak mengufuk A ke B = (${xB} - ${xA}) × ${scale} = ${hKm} km. Jarak mencancang A ke C = (${yC} - ${yA}) × ${scale} = ${vKm} km. Beza = ${diffKm} km.`;
    const wrongs = makeUnitNumWrongs(diffKm, "km", [hKm, vKm, hKm + vKm, Math.abs(dx - dy)]);
    const mcq = buildMcq(rng, qText, `${diffKm} km`, wrongs, exp, (s) => `${diffKm + s * scale} km`);
    return {
      unit: "b7",
      skill: "b7_s4",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b7_s4:M:${tpl}:${xA},${yA},${xB},${yB},${xC},${yC},${scale}`
    };
  });

  const b7_s4_H = makeGen("b7", "b7_s4", "H", ["prob_ratio_diff_given", "prob_ratio_transfer_age", "prob_coord_ratio_combined"], (rng) => {
    const tpl = pick(rng, ["prob_ratio_diff_given", "prob_ratio_transfer_age", "prob_coord_ratio_combined"]);

    if (tpl === "prob_ratio_diff_given") {
      const [b, a] = pick(rng, [[2, 7], [2, 5], [3, 7], [3, 8], [4, 7], [3, 5]]);
      const unitMl = pick(rng, [40, 50, 80, 100, 120]);
      const diffMl = (a - b) * unitMl;
      const volB = b * unitMl;
      const volA = a * unitMl;
      const qText = `Nisbah isi padu jus limau di dalam jag J kepada gelas K ialah ${a} : ${b}. Isi padu jus limau di dalam jag J ialah ${diffMl} ml lebih daripada isi padu jus limau di dalam gelas K. Hitung isi padu, dalam ml, jus limau di dalam gelas K.`;
      const exp = `Beza bahagian = ${a} - ${b} = ${a - b} bahagian. ${a - b} bahagian = ${diffMl} ml, jadi 1 bahagian = ${unitMl} ml. Gelas K = ${b} × ${unitMl} ml = ${volB} ml.`;
      const wrongs = makeUnitNumWrongs(volB, "ml", [volA, unitMl, volA + volB, Math.round((diffMl / (a + b)) * b) || volB + unitMl]);
      const mcq = buildMcq(rng, qText, `${volB} ml`, wrongs, exp, (s) => `${volB + s * 20} ml`);
      return {
        unit: "b7",
        skill: "b7_s4",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b7_s4:H:${tpl}:${a},${b},${unitMl}`
      };
    }

    if (tpl === "prob_ratio_transfer_age") {
      const sub = randInt(rng, 0, 1);
      if (sub === 0) {
        // Half-transfer problem (textbook p.203 Cerdas Minda)
        const [a, b] = pick(rng, [[6, 1], [4, 1], [8, 1], [6, 5], [4, 3]]);
        const k = randInt(rng, 4, 12);
        const total = (a + b) * k;
        const newA = a / 2;
        const newB = b + a / 2;
        const g = gcd(newA, newB);
        const ansA = newA / g;
        const ansB = newB / g;
        const qText = `Nisbah wang Mark kepada wang Faizal ialah ${a} : ${b}. Jumlah wang mereka ialah RM ${total}. Mark memberikan separuh daripada wangnya kepada Faizal. Hitung nisbah wang Mark yang terkini kepada wang Faizal yang terkini dalam bentuk termudah.`;
        const exp = `Wang asal Mark = RM ${a * k}, Faizal = RM ${b * k}. Selepas memberi separuh (RM ${(a / 2) * k}), wang Mark = RM ${(a / 2) * k} dan Faizal = RM ${(b + a / 2) * k}. Nisbah = ${ansA} : ${ansB}.`;
        const wrongs = makeRatioWrongs(ansA, ansB, [
          [a, b],
          [ansB, ansA],
          [newA, b],
          [ansA + 1, ansB]
        ]);
        const mcq = buildMcq(rng, qText, `${ansA} : ${ansB}`, wrongs, exp);
        return {
          unit: "b7",
          skill: "b7_s4",
          diff: "H",
          template: tpl,
          ...mcq,
          sig: `b7_s4:H:${tpl}:transfer:${a},${b},${k}`
        };
      }

      // Age after y years (textbook p.205 no.4b)
      const [ta, tb] = pick(rng, [[3, 2], [4, 3], [5, 3], [5, 2], [7, 4]]);
      const futMult = randInt(rng, 2, 5);
      const futA = ta * futMult;
      const futB = tb * futMult;
      const years = randInt(rng, 3, Math.min(8, futB - 2));
      const nowA = futA - years;
      const nowB = futB - years;
      const qText = `Umur Isaac sekarang ialah ${nowA} tahun dan umur adiknya ialah ${nowB} tahun. Nyatakan nisbah umur Isaac kepada umur adiknya selepas ${years} tahun dalam bentuk termudah.`;
      const exp = `Selepas ${years} tahun, umur Isaac = ${nowA} + ${years} = ${futA} tahun dan adiknya = ${nowB} + ${years} = ${futB} tahun. Nisbah ${futA} : ${futB} = ${ta} : ${tb}.`;
      const gNow = gcd(nowA, nowB);
      const wrongs = makeRatioWrongs(ta, tb, [
        [nowA / gNow, nowB / gNow],
        [tb, ta],
        [ta, ta + tb],
        [ta + 1, tb]
      ]);
      const mcq = buildMcq(rng, qText, `${ta} : ${tb}`, wrongs, exp);
      return {
        unit: "b7",
        skill: "b7_s4",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b7_s4:H:${tpl}:age:${nowA},${nowB},${years}`
      };
    }

    // Scaled coordinate -> ratio of horizontal distance to vertical distance
    const [a, b] = pick(rng, COPRIME_PAIRS.filter(([x, y]) => x > 1 || y > 1));
    const k = randInt(rng, 2, 3);
    const dx = a * k;
    const dy = b * k;
    const scale = pick(rng, [2, 3, 5]);
    const x1 = randInt(rng, 1, 3);
    const y1 = randInt(rng, 1, 3);
    const x2 = x1 + dx;
    const y2 = y1 + dy;
    const qText = `Pada satah Cartes berskala 1 unit mewakili ${scale} km, stesen P berada di ${fmtCoord(x1, y1)} dan stesen Q berada di ${fmtCoord(x2, y2)}. Nyatakan nisbah jarak mengufuk sebenar kepada jarak mencancang sebenar dari P ke Q dalam bentuk termudah.`;
    const exp = `Jarak mengufuk = ${dx} × ${scale} = ${dx * scale} km; jarak mencancang = ${dy} × ${scale} = ${dy * scale} km. Nisbah ${dx * scale} : ${dy * scale} dipermudahkan menjadi ${a} : ${b}.`;
    const wrongs = makeRatioWrongs(a, b, [
      [b, a],
      [a, a + b],
      [a + 1, b],
      [a, b + 1]
    ]);
    const mcq = buildMcq(rng, qText, `${a} : ${b}`, wrongs, exp);
    return {
      unit: "b7",
      skill: "b7_s4",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b7_s4:H:${tpl}:${x1},${y1},${x2},${y2},${scale}`
    };
  });

  // ==================== BAB 8 GENERATORS ====================

  const PIE_THEMES = [
    { title: "koleksi setem", unit: "keping setem", items: ["Serangga", "Burung", "Bunga", "Tumbuhan"] },
    { title: "perisa donat kegemaran murid", unit: "orang murid", items: ["Strawberi", "Vanila", "Coklat", "Kacang"] },
    { title: "sukan yang diminati murid", unit: "orang murid", items: ["Bola sepak", "Badminton", "Hoki", "Pingpong"] },
    { title: "jualan kuih di kantin", unit: "biji kuih", items: ["Karipap", "Donat", "Keria", "Ketayap"] },
    { title: "warna guli di dalam balang", unit: "biji guli", items: ["Merah", "Hijau", "Biru", "Kuning"] }
  ];

  const b8_s1_L = makeGen("b8", "b8_s1", "L", ["pie_angle_to_fraction", "pie_sector_count_from_total"], (rng) => {
    const tpl = pick(rng, ["pie_angle_to_fraction", "pie_sector_count_from_total"]);
    const theme = pick(rng, PIE_THEMES);

    if (tpl === "pie_angle_to_fraction") {
      const angles = [180, 90, 45, 45];
      const targetIdx = pick(rng, [0, 1, 2]);
      const targetAngle = angles[targetIdx];
      const fracMap = { 180: "1/2", 90: "1/4", 45: "1/8" };
      const ans = fracMap[targetAngle];
      const qText = `Sebuah carta pai menunjukkan ${theme.title} bagi empat kategori: ${theme.items[0]} (180°), ${theme.items[1]} (90°), ${theme.items[2]} (45°) dan ${theme.items[3]} (45°). Nyatakan pecahan dalam bentuk termudah yang mewakili kategori ${theme.items[targetIdx]}.`;
      const exp = `Satu bulatan penuh ialah 360°. Pecahan bagi sudut ${targetAngle}° ialah ${targetAngle}/360 = ${ans}.`;
      const cands = ["1/2", "1/4", "1/8", "1/3", "1/6"].filter((f) => f !== ans);
      const mcq = buildMcq(rng, qText, ans, cands, exp);
      return {
        unit: "b8",
        skill: "b8_s1",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b8_s1:L:${tpl}:${targetAngle}`
      };
    }

    const mult = randInt(rng, 2, 10);
    const total = 8 * mult;
    const angles = [180, 90, 45, 45];
    const counts = [4 * mult, 2 * mult, mult, mult];
    const idx = pick(rng, [0, 1, 2]);
    const ans = counts[idx];
    const qText = `Sebuah carta pai mewakili sejumlah ${total} ${theme.unit} bagi ${theme.title}, dengan sudut sektor: ${theme.items[0]} (180°), ${theme.items[1]} (90°), ${theme.items[2]} (45°) dan ${theme.items[3]} (45°). Berapakah bilangan bagi kategori ${theme.items[idx]}?`;
    const exp = `Sudut ${angles[idx]}° mewakili ${angles[idx]}/360 = ${angles[idx] === 180 ? "1/2" : angles[idx] === 90 ? "1/4" : "1/8"} daripada ${total}, iaitu ${ans}.`;
    const wrongs = makeIntWrongs(ans, [...counts.filter((c) => c !== ans), total, Math.round(total / 3) || ans + 3, ans + mult]);
    const mcq = buildMcq(rng, qText, String(ans), wrongs, exp);
    return {
      unit: "b8",
      skill: "b8_s1",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b8_s1:L:${tpl}:${total},${idx}`
    };
  });

  const b8_s1_M = makeGen("b8", "b8_s1", "M", ["pie_missing_angle", "pie_percent_to_count"], (rng) => {
    const tpl = pick(rng, ["pie_missing_angle", "pie_percent_to_count"]);
    const theme = pick(rng, PIE_THEMES);

    if (tpl === "pie_missing_angle") {
      const configs = [
        { angles: [180, 90, 45, 45], hide: 1 },
        { angles: [180, 90, 45, 45], hide: 0 },
        { angles: [180, 90, 45, 45], hide: 2 },
        { angles: [90, 90, 90, 90], hide: 3 }
      ];
      const cfg = pick(rng, configs);
      const ans = cfg.angles[cfg.hide];
      const parts = cfg.angles.map((ang, i) =>
        i === cfg.hide ? `${theme.items[i]} (tidak dinyatakan)` : `${theme.items[i]} (${ang}°)`
      );
      const sumOthers = 360 - ans;
      const qText = `Sebuah carta pai lengkap bagi ${theme.title} terbahagi kepada empat sektor: ${parts.join(", ")}. Berapakah nilai sudut bagi sektor ${theme.items[cfg.hide]}?`;
      const exp = `Jumlah sudut bulatan lengkap ialah 360°. Sudut sektor ${theme.items[cfg.hide]} = 360° - ${sumOthers}° = ${ans}°.`;
      const allAngles = ["45°", "90°", "135°", "180°", "225°"].filter((x) => x !== `${ans}°`);
      const mcq = buildMcq(rng, qText, `${ans}°`, allAngles, exp);
      return {
        unit: "b8",
        skill: "b8_s1",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b8_s1:M:${tpl}:${cfg.angles.join(",")}:${cfg.hide}`
      };
    }

    const pctSets = [
      [50, 25, 15, 10],
      [40, 30, 20, 10],
      [45, 25, 20, 10],
      [50, 20, 20, 10]
    ];
    const pcts = pick(rng, pctSets);
    const mult = randInt(rng, 2, 10);
    const total = 20 * mult; // 5% = mult, 10% = 2*mult, 15% = 3*mult, etc.
    const idxA = randInt(rng, 0, 1);
    const idxB = randInt(rng, 2, 3);
    const askDiff = randInt(rng, 0, 1) === 1 && pcts[idxA] !== pcts[idxB];
    const valA = (pcts[idxA] * total) / 100;
    const valB = (pcts[idxB] * total) / 100;
    if (askDiff) {
      const ans = valA - valB;
      const qText = `Carta pai menunjukkan peratus ${theme.title} bagi ${total} ${theme.unit}: ${theme.items[0]} (${pcts[0]}%), ${theme.items[1]} (${pcts[1]}%), ${theme.items[2]} (${pcts[2]}%) dan ${theme.items[3]} (${pcts[3]}%). Hitung beza bilangan antara ${theme.items[idxA]} dengan ${theme.items[idxB]}.`;
      const exp = `${theme.items[idxA]} = ${pcts[idxA]}% × ${total} = ${valA}. ${theme.items[idxB]} = ${pcts[idxB]}% × ${total} = ${valB}. Beza = ${valA} - ${valB} = ${ans}.`;
      const wrongs = makeIntWrongs(ans, [valA, valB, valA + valB, ans + mult]);
      const mcq = buildMcq(rng, qText, String(ans), wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s1",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b8_s1:M:${tpl}:diff:${pcts.join(",")}:${total}:${idxA},${idxB}`
      };
    }

    const ans = valA;
    const qText = `Carta pai menunjukkan peratus ${theme.title} daripada sejumlah ${total} ${theme.unit}: ${theme.items[0]} (${pcts[0]}%), ${theme.items[1]} (${pcts[1]}%), ${theme.items[2]} (${pcts[2]}%) dan ${theme.items[3]} (${pcts[3]}%). Berapakah bilangan bagi kategori ${theme.items[idxA]}?`;
    const exp = `${pcts[idxA]}% daripada ${total} = (${pcts[idxA]} / 100) × ${total} = ${ans}.`;
    const wrongs = makeIntWrongs(ans, [valB, pcts[idxA], total - ans, ans + mult]);
    const mcq = buildMcq(rng, qText, String(ans), wrongs, exp);
    return {
      unit: "b8",
      skill: "b8_s1",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b8_s1:M:${tpl}:single:${pcts.join(",")}:${total}:${idxA}`
    };
  });

  const b8_s1_H = makeGen("b8", "b8_s1", "H", ["pie_total_from_one_sector", "pie_table_to_angle_mode"], (rng) => {
    const tpl = pick(rng, ["pie_total_from_one_sector", "pie_table_to_angle_mode"]);
    const theme = pick(rng, PIE_THEMES);

    if (tpl === "pie_total_from_one_sector") {
      const mult = randInt(rng, 3, 12);
      const total = 8 * mult;
      // Angles: [180, 90, 45, 45], hide 90° or 180°, give count of 45° or 90°
      const hideIdx = pick(rng, [0, 1]);
      const givenIdx = hideIdx === 0 ? 1 : 2;
      const angles = [180, 90, 45, 45];
      const counts = [4 * mult, 2 * mult, mult, mult];
      const parts = angles.map((ang, i) =>
        i === hideIdx ? `${theme.items[i]} (baki bulatan)` : `${theme.items[i]} (${ang}°)`
      );
      const ans = counts[hideIdx];
      const qText = `Sebuah carta pai menunjukkan ${theme.title}: ${parts.join(", ")}. Diberi bilangan bagi ${theme.items[givenIdx]} ialah ${counts[givenIdx]}. Berapakah bilangan bagi ${theme.items[hideIdx]}?`;
      const exp = `Sudut ${theme.items[hideIdx]} = 360° - ${360 - angles[hideIdx]}° = ${angles[hideIdx]}°. Kerana ${angles[givenIdx]}° mewakili ${counts[givenIdx]}, maka ${angles[hideIdx]}° mewakili ${ans}.`;
      const wrongs = makeIntWrongs(ans, [total, counts[givenIdx], ans + mult, Math.max(1, ans - mult)]);
      const mcq = buildMcq(rng, qText, String(ans), wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s1",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b8_s1:H:${tpl}:${mult},${hideIdx},${givenIdx}`
      };
    }

    const mult = randInt(rng, 2, 9);
    const rawCounts = shuffle(rng, [4 * mult, 2 * mult, mult, mult]);
    const total = 8 * mult;
    const maxVal = 4 * mult;
    const maxIdx = rawCounts.indexOf(maxVal);
    const askSub = pick(rng, ["sum_two_angles", "pct_mode"]);
    const tableStr = theme.items.map((name, i) => `${name}: ${rawCounts[i]}`).join(", ");
    if (askSub === "pct_mode") {
      const qText = `Data berikut menunjukkan ${theme.title}: ${tableStr}. Jika data ini diwakilkan dalam carta pai, apakah sudut sektor bagi mod?`;
      const exp = `Jumlah = ${total}. Mod ialah ${theme.items[maxIdx]} (${maxVal}), iaitu ${maxVal}/${total} = 1/2 bulatan = 180°.`;
      const mcq = buildMcq(rng, qText, "180°", ["90°", "45°", "135°"], exp);
      return {
        unit: "b8",
        skill: "b8_s1",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b8_s1:H:${tpl}:mode:${rawCounts.join(",")}`
      };
    }

    // Combined angle of 90° + 45° = 135° (i.e. 2*mult + mult)
    const midIdx = rawCounts.indexOf(2 * mult);
    const smallIdx = rawCounts.indexOf(mult);
    const qText = `Data berikut menunjukkan ${theme.title}: ${tableStr}. Jika data ini dilukis sebagai carta pai, berapakah jumlah nilai sudut bagi sektor ${theme.items[midIdx]} dan ${theme.items[smallIdx]}?`;
    const exp = `Jumlah = ${total}. ${theme.items[midIdx]} (${2 * mult}/${total} = 1/4 = 90°) dan ${theme.items[smallIdx]} (${mult}/${total} = 1/8 = 45°). Jumlah sudut = 90° + 45° = 135°.`;
    const mcq = buildMcq(rng, qText, "135°", ["90°", "180°", "225°"], exp);
    return {
      unit: "b8",
      skill: "b8_s1",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b8_s1:H:${tpl}:sum2:${rawCounts.join(",")}`
    };
  });

  const b8_s2_L = makeGen("b8", "b8_s2", "L", ["prob_five_scale_marbles", "prob_which_event_matches"], (rng) => {
    const tpl = pick(rng, ["prob_five_scale_marbles", "prob_which_event_matches"]);

    if (tpl === "prob_five_scale_marbles") {
      const k = randInt(rng, 2, 12);
      const kind = pick(rng, ["Pasti", "Mustahil", "Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan"]);
      let merah, biru;
      if (kind === "Pasti") {
        merah = k * 4;
        biru = 0;
      } else if (kind === "Mustahil") {
        merah = 0;
        biru = k * 4;
      } else if (kind === "Sama kemungkinan") {
        merah = k * 2;
        biru = k * 2;
      } else if (kind === "Besar kemungkinan") {
        merah = k * 4;
        biru = k;
      } else {
        merah = k;
        biru = k * 4;
      }
      const total = merah + biru;
      const ans = classifyLikelihood(merah, total);
      const qText = `Sebuah kotak mengandungi ${merah} biji guli merah dan ${biru} biji guli biru. Sebiji guli diambil secara rawak dari kotak itu. Apakah kebolehjadian mendapat guli merah?`;
      const exp = `Terdapat ${merah} guli merah daripada jumlah ${total} guli (${merah}/${total}). Maka kebolehjadiannya ialah ${ans}.`;
      const wrongs = pickLikelihoodWrongs(rng, ans, ["Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan"]);
      const mcq = buildMcq(rng, qText, ans, wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s2",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b8_s2:L:${tpl}:${merah},${biru}`
      };
    }

    const k = randInt(rng, 2, 10);
    const events = [
      { level: "Pasti", text: `Mengambil bola kuning daripada beg berisi ${k * 4} biji bola kuning sahaja.` },
      { level: "Mustahil", text: `Mengambil bola hijau daripada beg berisi ${k * 3} biji bola merah dan ${k} biji bola biru.` },
      { level: "Sama kemungkinan", text: `Mengambil kad bertanda A daripada kotak berisi ${k * 2} kad A dan ${k * 2} kad B.` },
      { level: "Besar kemungkinan", text: `Mengambil guli biru daripada bekas berisi ${k * 4} guli biru dan ${k} guli merah.` },
      { level: "Kecil kemungkinan", text: `Mengambil guli putih daripada bekas berisi ${k} guli putih dan ${k * 4} guli hitam.` }
    ];
    const target = pick(rng, events);
    const others = shuffle(rng, events.filter((e) => e.level !== target.level)).slice(0, 3);
    const qText = `Antara peristiwa cabutan rawak berikut, yang manakah mempunyai kebolehjadian "${target.level}"?`;
    const exp = `Peristiwa "${target.text}" sepadan dengan kebolehjadian ${target.level}.`;
    const mcq = buildMcq(rng, qText, target.text, others.map((o) => o.text), exp);
    return {
      unit: "b8",
      skill: "b8_s2",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b8_s2:L:${tpl}:${target.level},${k}`
    };
  });

  const b8_s2_M = makeGen("b8", "b8_s2", "M", ["prob_numbered_cards", "prob_spinner_sectors"], (rng) => {
    const tpl = pick(rng, ["prob_numbered_cards", "prob_spinner_sectors"]);

    if (tpl === "prob_numbered_cards") {
      const bank = [
        { n: 6, desc: "nombor genap", count: 3, note: "2, 4, 6" },
        { n: 6, desc: "nombor lebih besar daripada 6", count: 0, note: "tiada" },
        { n: 8, desc: "nombor genap", count: 4, note: "2, 4, 6, 8" },
        { n: 8, desc: "nombor ganjil", count: 4, note: "1, 3, 5, 7" },
        { n: 8, desc: "nombor gandaan 4", count: 2, note: "4, 8" },
        { n: 8, desc: "nombor kurang daripada 7", count: 6, note: "1, 2, 3, 4, 5, 6" },
        { n: 8, desc: "nombor lebih besar daripada 8", count: 0, note: "tiada" },
        { n: 8, desc: "nombor bulat kurang daripada 10", count: 8, note: "semua 8 kad" },
        { n: 10, desc: "nombor ganjil", count: 5, note: "1, 3, 5, 7, 9" },
        { n: 10, desc: "nombor gandaan 5", count: 2, note: "5, 10" },
        { n: 10, desc: "nombor kurang daripada 3", count: 2, note: "1, 2" },
        { n: 10, desc: "nombor kurang daripada 9", count: 8, note: "1 hingga 8" },
        { n: 12, desc: "nombor genap", count: 6, note: "2, 4, 6, 8, 10, 12" },
        { n: 12, desc: "nombor gandaan 4", count: 3, note: "4, 8, 12" },
        { n: 12, desc: "nombor kurang daripada 10", count: 9, note: "1 hingga 9" },
        { n: 12, desc: "nombor lebih besar daripada 3", count: 9, note: "4 hingga 12" },
        { n: 12, desc: "nombor bulat kurang daripada 15", count: 12, note: "semua 12 kad" },
        { n: 16, desc: "nombor genap", count: 8, note: "2, 4, 6, 8, 10, 12, 14, 16" },
        { n: 16, desc: "nombor gandaan 4", count: 4, note: "4, 8, 12, 16" },
        { n: 16, desc: "nombor kurang daripada 13", count: 12, note: "1 hingga 12" },
        { n: 16, desc: "nombor lebih besar daripada 20", count: 0, note: "tiada" },
        { n: 20, desc: "nombor ganjil", count: 10, note: "1, 3, 5, ..., 19" },
        { n: 20, desc: "nombor gandaan 4", count: 5, note: "4, 8, 12, 16, 20" },
        { n: 20, desc: "nombor kurang daripada 16", count: 15, note: "1 hingga 15" },
        { n: 20, desc: "nombor bulat kurang daripada 25", count: 20, note: "semua 20 kad" }
      ];
      const item = pick(rng, bank);
      const ans = classifyLikelihood(item.count, item.n);
      const qText = `Terdapat ${item.n} keping kad bernombor 1 hingga ${item.n} di dalam sebuah kotak. Sekeping kad dicabut secara rawak. Apakah kebolehjadian mendapat ${item.desc}?`;
      const exp = `Bilangan kesudahan yang memenuhi syarat ialah ${item.count} (${item.note}) daripada ${item.n} kad. Maka kebolehjadiannya ialah ${ans}.`;
      const wrongs = pickLikelihoodWrongs(rng, ans, ["Sama kemungkinan", "Kecil kemungkinan", "Besar kemungkinan"]);
      const mcq = buildMcq(rng, qText, ans, wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s2",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b8_s2:M:${tpl}:${item.n},${item.desc}`
      };
    }

    const total = pick(rng, [8, 10, 12, 16, 20]);
    const regime = pick(rng, ["Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan", "Mustahil"]);
    const [cMain, cTwo, cThree] = pick(rng, [["biru", "kuning", "merah"], ["hijau", "jingga", "putih"]]);
    const majorMap = { 8: 6, 10: 8, 12: 9, 16: 12, 20: 15 };
    const minorMap = { 8: 2, 10: 2, 12: 3, 16: 4, 20: 5 };
    let targetCount;
    if (regime === "Sama kemungkinan") targetCount = total / 2;
    else if (regime === "Besar kemungkinan") targetCount = majorMap[total];
    else if (regime === "Kecil kemungkinan") targetCount = minorMap[total];
    else targetCount = 0;

    const rem = total - targetCount;
    const sMain = targetCount;
    const sTwo = Math.floor(rem / 2);
    const sThree = rem - sTwo;
    const askColor = targetCount === 0 ? "ungu" : cMain;
    const ans = classifyLikelihood(targetCount, total);
    const qText = `Sebuah roda nombor adil dibahagikan kepada ${total} bahagian sama besar: ${sMain} bahagian berwarna ${cMain}, ${sTwo} berwarna ${cTwo} dan ${sThree} berwarna ${cThree}. Apakah kebolehjadian jarum roda berhenti pada bahagian berwarna ${askColor}?`;
    const exp = `Bahagian berwarna ${askColor} ialah ${targetCount} daripada ${total} bahagian (${targetCount}/${total}). Maka kebolehjadiannya ialah ${ans}.`;
    const wrongs = pickLikelihoodWrongs(rng, ans, ["Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan"]);
    const mcq = buildMcq(rng, qText, ans, wrongs, exp);
    return {
      unit: "b8",
      skill: "b8_s2",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b8_s2:M:${tpl}:${total},${sMain},${sTwo},${sThree},${askColor},${cMain}`
    };
  });

  const b8_s2_H = makeGen("b8", "b8_s2", "H", ["prob_condition_after_change", "prob_adjust_to_equal"], (rng) => {
    const tpl = pick(rng, ["prob_condition_after_change", "prob_adjust_to_equal"]);

    if (tpl === "prob_condition_after_change") {
      const scenarios = [
        () => {
          const k = randInt(rng, 2, 4);
          const r0 = k * 2, b0 = k * 4, dr = k * 2, db = 0;
          return { r0, b0, dr, db, r1: r0 + dr, b1: b0 + db };
        },
        () => {
          const k = randInt(rng, 2, 4);
          const r0 = k * 4, b0 = k * 2, dr = -k * 3, db = k;
          return { r0, b0, dr, db, r1: r0 + dr, b1: b0 + db }; // k vs 3k => 1/4 => Kecil kemungkinan
        },
        () => {
          const k = randInt(rng, 2, 4);
          const r0 = k * 2, b0 = k * 2, dr = k * 4, db = 0;
          return { r0, b0, dr, db, r1: r0 + dr, b1: b0 + db }; // 6k vs 2k => 3/4 => Besar kemungkinan
        },
        () => {
          const k = randInt(rng, 2, 4);
          const r0 = k * 2, b0 = k * 3, dr = -k * 2, db = 0;
          return { r0, b0, dr, db, r1: r0 + dr, b1: b0 + db }; // 0 vs 3k => Mustahil
        }
      ];
      const s = pick(rng, scenarios)();
      const total1 = s.r1 + s.b1;
      const ans = classifyLikelihood(s.r1, total1);
      const actR = s.dr >= 0 ? `menambah ${s.dr} biji guli merah` : `mengeluarkan ${-s.dr} biji guli merah`;
      const actB = s.db > 0 ? ` dan menambah ${s.db} biji guli biru` : "";
      const qText = `Di dalam sebuah beg terdapat ${s.r0} biji guli merah dan ${s.b0} biji guli biru. Kemudian, Aiman ${actR}${actB} ke dalam beg itu. Apakah kebolehjadian Aiman mengambil sebiji guli merah secara rawak selepas perubahan itu?`;
      const exp = `Selepas perubahan, terdapat ${s.r1} guli merah dan ${s.b1} guli biru (jumlah ${total1}). Nisbah ${s.r1}/${total1} memberi kebolehjadian ${ans}.`;
      const wrongs = pickLikelihoodWrongs(rng, ans, ["Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan"]);
      const mcq = buildMcq(rng, qText, ans, wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s2",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b8_s2:H:${tpl}:${s.r0},${s.b0},${s.dr},${s.db}`
      };
    }

    const white = randInt(rng, 2, 5);
    const diff = randInt(rng, 3, 9);
    const black = white + diff;
    const correctStr = `Menambahkan ${diff} biji butang putih`;
    const w1 = `Menambahkan ${diff + 2} biji butang putih`;
    const w2 = `Menambahkan ${Math.max(1, diff - 2)} biji butang putih`;
    const w3 = `Mengeluarkan ${Math.max(1, diff - 1)} biji butang hitam`;
    const qText = `Terdapat ${black} biji butang hitam dan ${white} biji butang putih di dalam sebuah bekas. Apakah tindakan yang perlu dilakukan supaya kebolehjadian mengambil sebiji butang putih secara rawak menjadi "Sama kemungkinan"?`;
    const exp = `Untuk kebolehjadian sama kemungkinan, bilangan butang putih mesti sama dengan bilangan butang hitam (${black}). Jadi perlu menambahkan ${black} - ${white} = ${diff} biji butang putih.`;
    const mcq = buildMcq(rng, qText, correctStr, [w1, w2, w3], exp);
    return {
      unit: "b8",
      skill: "b8_s2",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b8_s2:H:${tpl}:${black},${white}`
    };
  });

  const b8_s3_L = makeGen("b8", "b8_s3", "L", ["prob8_pie_compare_sectors", "prob8_likelihood_add_to_target"], (rng) => {
    const tpl = pick(rng, ["prob8_pie_compare_sectors", "prob8_likelihood_add_to_target"]);

    if (tpl === "prob8_pie_compare_sectors") {
      const theme = pick(rng, PIE_THEMES);
      const mult = randInt(rng, 2, 10);
      const counts = [4 * mult, 2 * mult, mult, mult];
      const giveIdx = pick(rng, [1, 2]);
      const askMode = pick(rng, ["diff", "total"]);
      if (askMode === "total") {
        const total = 8 * mult;
        const qText = `Sebuah carta pai bagi ${theme.title} menunjukkan empat sektor: ${theme.items[0]} (180°), ${theme.items[1]} (90°), ${theme.items[2]} (45°) dan ${theme.items[3]} (45°). Jika bilangan ${theme.items[giveIdx]} ialah ${counts[giveIdx]}, hitung jumlah keseluruhan ${theme.unit}.`;
        const exp = `${giveIdx === 1 ? "90° ialah 1/4 bulatan" : "45° ialah 1/8 bulatan"}, maka jumlah keseluruhan = ${giveIdx === 1 ? 4 : 8} × ${counts[giveIdx]} = ${total}.`;
        const wrongs = makeIntWrongs(total, [counts[0], total + mult * 2, Math.max(4, total - mult * 2), counts[giveIdx] * 2]);
        const mcq = buildMcq(rng, qText, String(total), wrongs, exp);
        return {
          unit: "b8",
          skill: "b8_s3",
          diff: "L",
          template: tpl,
          ...mcq,
          sig: `b8_s3:L:${tpl}:total:${mult},${giveIdx}`
        };
      }

      const diff = counts[0] - counts[2];
      const qText = `Sebuah carta pai bagi ${theme.title} mempunyai sektor ${theme.items[0]} (180°), ${theme.items[1]} (90°), ${theme.items[2]} (45°) dan ${theme.items[3]} (45°). Diberi bilangan ${theme.items[giveIdx]} ialah ${counts[giveIdx]}. Hitung beza bilangan antara ${theme.items[0]} dengan ${theme.items[2]}.`;
      const exp = `${theme.items[0]} (180°) = ${counts[0]} dan ${theme.items[2]} (45°) = ${counts[2]}. Beza = ${counts[0]} - ${counts[2]} = ${diff}.`;
      const wrongs = makeIntWrongs(diff, [counts[0], counts[1], diff + mult, counts[2]]);
      const mcq = buildMcq(rng, qText, String(diff), wrongs, exp);
      return {
        unit: "b8",
        skill: "b8_s3",
        diff: "L",
        template: tpl,
        ...mcq,
        sig: `b8_s3:L:${tpl}:diff:${mult},${giveIdx}`
      };
    }

    const orange = randInt(rng, 2, 6);
    const diff = randInt(rng, 3, 9);
    const white = orange + diff;
    const qText = `Nik Syafiq mempunyai ${white} biji bola pingpong putih dan ${orange} biji bola pingpong jingga di dalam sebuah kotak. Berapakah bilangan bola pingpong jingga yang perlu ditambah supaya kebolehjadian mengambil bola putih atau bola jingga secara rawak menjadi sama kemungkinan?`;
    const exp = `Untuk menjadi sama kemungkinan, bilangan bola jingga mesti menyamai bilangan bola putih (${white}). Perlu tambah ${white} - ${orange} = ${diff} biji.`;
    const wrongs = makeUnitNumWrongs(diff, "biji", [white, orange, white + orange, diff + 2]);
    const mcq = buildMcq(rng, qText, `${diff} biji`, wrongs, exp, (s) => `${diff + s + 3} biji`);
    return {
      unit: "b8",
      skill: "b8_s3",
      diff: "L",
      template: tpl,
      ...mcq,
      sig: `b8_s3:L:${tpl}:${white},${orange}`
    };
  });

  const b8_s3_M = makeGen("b8", "b8_s3", "M", ["prob8_pie_and_subset", "prob8_pie_with_likelihood"], (rng) => {
    const tpl = pick(rng, ["prob8_pie_and_subset", "prob8_pie_with_likelihood"]);

    if (tpl === "prob8_pie_and_subset") {
      // Textbook p.223 no.3a style: 4 states, 180, 90, 45, 45 (one omitted), given Perlis (45°), then 1/4 of total are perempuan -> find lelaki
      const mult = randInt(rng, 2, 10);
      const total = 8 * mult;
      const perlis = mult;
      const fracChoice = pick(rng, [
        { label: "1/4", num: 1, den: 4 },
        { label: "1/8", num: 1, den: 8 },
        { label: "3/8", num: 3, den: 8 }
      ]);
      const female = (total * fracChoice.num) / fracChoice.den;
      const male = total - female;
      const qText = `Carta pai menunjukkan bilangan peserta pertandingan e-kuiz matematik mengikut negeri: Johor (180°), Melaka (45°), Perlis (45°) dan Labuan (baki sudut carta pai). Bilangan peserta dari Perlis ialah ${perlis} orang. Jika ${fracChoice.label} daripada jumlah peserta ialah perempuan, berapakah bilangan peserta lelaki?`;
      const exp = `Perlis (45° = 1/8) ialah ${perlis} orang, maka jumlah peserta = 8 × ${perlis} = ${total} orang. Peserta perempuan = ${fracChoice.label} × ${total} = ${female}. Peserta lelaki = ${total} - ${female} = ${male} orang.`;
      const wrongs = makeUnitNumWrongs(male, "orang", [female, total, male - mult > 0 ? male - mult : male + mult, total - perlis]);
      const mcq = buildMcq(rng, qText, `${male} orang`, wrongs, exp, (s) => `${male + s * 2} orang`);
      return {
        unit: "b8",
        skill: "b8_s3",
        diff: "M",
        template: tpl,
        ...mcq,
        sig: `b8_s3:M:${tpl}:${mult},${fracChoice.label}`
      };
    }

    const mult = randInt(rng, 2, 8);
    const total = 8 * mult;
    const sub = pick(rng, [
      { desc: "guli biru (90°) atau guli merah (180°)", deg: 270, ans: "Besar kemungkinan" },
      { desc: "guli hijau (45°)", deg: 45, ans: "Kecil kemungkinan" },
      { desc: "guli merah (180°)", deg: 180, ans: "Sama kemungkinan" },
      { desc: "guli ungu (tiada dalam carta pai)", deg: 0, ans: "Mustahil" }
    ]);
    const qText = `Sebuah carta pai menunjukkan komposisi ${total} biji guli di dalam balang: Merah (180°), Biru (90°), Hijau (45°) dan Kuning (45°). Jika sebiji guli diambil secara rawak dari balang itu, apakah kebolehjadian mendapat ${sub.desc}?`;
    const exp = `Sudut ${sub.deg}° daripada 360° mewakili pecahan ${sub.deg}/360. Maka kebolehjadian mendapatkannya ialah ${sub.ans}.`;
    const wrongs = pickLikelihoodWrongs(rng, sub.ans, ["Sama kemungkinan", "Besar kemungkinan", "Kecil kemungkinan"]);
    const mcq = buildMcq(rng, qText, sub.ans, wrongs, exp);
    return {
      unit: "b8",
      skill: "b8_s3",
      diff: "M",
      template: tpl,
      ...mcq,
      sig: `b8_s3:M:${tpl}:${mult},${sub.deg}`
    };
  });

  const b8_s3_H = makeGen("b8", "b8_s3", "H", ["prob8_pie_transfer_recalc", "prob8_combined_pie_likelihood"], (rng) => {
    const tpl = pick(rng, ["prob8_pie_transfer_recalc", "prob8_combined_pie_likelihood"]);

    if (tpl === "prob8_pie_transfer_recalc") {
      const mult = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12]);
      const total0 = 8 * mult;
      const donat0 = 2 * mult;
      const keria0 = mult;
      const variant = pick(rng, [
        { target: "Donat", angleDesc: "90° = 1/4", init: donat0, add: 2 * mult, pct: 40 },
        { target: "Donat", angleDesc: "90° = 1/4", init: donat0, add: 4 * mult, pct: 50 },
        { target: "Donat", angleDesc: "90° = 1/4", init: donat0, add: 12 * mult, pct: 70 },
        { target: "Keria", angleDesc: "45° = 1/8", init: keria0, add: 2 * mult, pct: 30 },
        { target: "Keria", angleDesc: "45° = 1/8", init: keria0, add: 12 * mult, pct: 65 }
      ]);
      const newTotal = total0 + variant.add;
      const newCount = variant.init + variant.add;
      const newPct = variant.pct;
      const qText = `Carta pai menunjukkan jualan awal empat jenis kuih: Karipap (180°), Donat (90°), Keria (45°) dan Ketayap (45°). Diberi jualan awal Keria ialah ${keria0} biji. Kemudian, ${variant.add} biji ${variant.target} lagi berjaya dijual. Berapakah peratusan jualan ${variant.target} berbanding jumlah jualan kuih yang terkini?`;
      const exp = `Keria (45° = 1/8) = ${keria0}, jadi jumlah awal = ${total0} dan ${variant.target} awal (${variant.angleDesc}) = ${variant.init}. Selepas ditambah ${variant.add}, ${variant.target} = ${newCount} daripada jumlah terkini ${newTotal}, iaitu (${newCount}/${newTotal}) × 100% = ${newPct}%.`;
      const wrongs = makeIntWrongs(newPct, [25, 35, Math.round((newCount * 100) / total0), newPct - 10]).map((v) => `${v}%`);
      const mcq = buildMcq(rng, qText, `${newPct}%`, wrongs, exp, (s) => `${newPct + s * 5}%`);
      return {
        unit: "b8",
        skill: "b8_s3",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `b8_s3:H:${tpl}:${mult},${variant.target},${variant.add}`
      };
    }

    const k = randInt(rng, 2, 20);
    const total = 8 * k;
    const isHijau = pick(rng, [true, false]);
    const colorName = isHijau ? "Hijau" : "Biru";
    const initCount = isHijau ? k : 2 * k;
    const otherCount = total - initCount;
    const needAdd = otherCount - initCount; // 6k for Hijau, 4k for Biru
    const qText = `Sebuah carta pai menunjukkan ${total} keping token di dalam sebuah beg: Merah (180°), Biru (90°), Hijau (45°) dan Kuning (45°). Berapa kepingkah token ${colorName} yang perlu dimasukkan lagi supaya kebolehjadian mencabut token ${colorName} sama dengan kebolehjadian mencabut token yang bukan ${colorName}?`;
    const exp = `Pada asalnya: Merah = ${4 * k}, Biru = ${2 * k}, Hijau = ${k}, Kuning = ${k}. Jumlah token bukan ${colorName} = ${otherCount}. Supaya sama kemungkinan, token ${colorName} mesti menjadi ${otherCount}, maka perlu tambah ${otherCount} - ${initCount} = ${needAdd} keping.`;
    const wrongs = makeUnitNumWrongs(needAdd, "keping", [3 * k, 5 * k, otherCount, 2 * k]);
    const mcq = buildMcq(rng, qText, `${needAdd} keping`, wrongs, exp, (s) => `${needAdd + s * k} keping`);
    return {
      unit: "b8",
      skill: "b8_s3",
      diff: "H",
      template: tpl,
      ...mcq,
      sig: `b8_s3:H:${tpl}:${colorName}:${k}`
    };
  });

  const generators = [
    b7_s1_L, b7_s1_M, b7_s1_H,
    b7_s2_L, b7_s2_M, b7_s2_H,
    b7_s3_L, b7_s3_M, b7_s3_H,
    b7_s4_L, b7_s4_M, b7_s4_H,
    b8_s1_L, b8_s1_M, b8_s1_H,
    b8_s2_L, b8_s2_M, b8_s2_H,
    b8_s3_L, b8_s3_M, b8_s3_H
  ];
    return generators;
  }

  const entries = [].concat(
    buildPartB1B2(),
    buildPartB3B4(),
    buildPartB5B6(),
    buildPartB7B8()
  );

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};
  App.Pools.d6.math = entries;

  App.Generators = App.Generators || {};
  App.Generators.pools = App.Generators.pools || {};
  App.Generators.pools.d6 = App.Generators.pools.d6 || {};
  App.Generators.pools.d6.math = entries;
})(typeof window !== "undefined" ? window : globalThis);
