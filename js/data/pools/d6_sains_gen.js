/**
 * Darjah 6 Sains (KSSR Semakan 2017, Unit 7: Kelajuan) deterministic skill-tagged MCQ generators.
 * Self-contained pool of 9 generators (3 numeric skills x L/M/H) with zero DOM/storage dependencies.
 * Registers cleanly alongside static items in App.Pools.d6.sains and App.Generators.pools.d6.sains.
 */
(function (global) {
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

  // ==================== FORMATTING & DEDUPE HELPERS ====================
  function exactInt(val, label) {
    const rounded = Math.round(val);
    if (!Number.isFinite(val) || Math.abs(val - rounded) > 1e-9) {
      throw new Error(`Non-exact integer for ${label || "value"}: ${val}`);
    }
    return rounded;
  }

  function fmtDec(val, maxDp) {
    const dp = maxDp == null ? 2 : maxDp;
    const factor = Math.pow(10, dp);
    const rounded = Math.round(val * factor) / factor;
    if (Object.is(rounded, -0)) return "0";
    let s = rounded.toFixed(dp);
    if (s.includes(".")) {
      s = s.replace(/\.?0+$/, "");
    }
    return s;
  }

  function canonicalOptionKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim().toLowerCase();
    // Convert common speed/distance/time units so equivalent values (e.g. 2400 m vs 2.4 km) cannot collide
    const m = s.match(/^(-?\d+(?:\.\d+)?)\s*(km\/j|m\/s|cm\/s|km|m|cm|jam|minit|saat)$/);
    if (m) {
      const num = Number(m[1]);
      const unit = m[2];
      if (unit === "km") return `dist:${Math.round(num * 100000)}`; // cm
      if (unit === "m") return `dist:${Math.round(num * 100)}`;
      if (unit === "cm") return `dist:${Math.round(num)}`;
      if (unit === "jam") return `time:${Math.round(num * 3600)}`; // saat
      if (unit === "minit") return `time:${Math.round(num * 60)}`;
      if (unit === "saat") return `time:${Math.round(num)}`;
      if (unit === "km/j") return `spd_kmh:${Math.round(num * 1000)}`;
      if (unit === "m/s") return `spd_ms:${Math.round(num * 1000)}`;
      if (unit === "cm/s") return `spd_cms:${Math.round(num * 1000)}`;
    }
    return `txt:${s}`;
  }

  function buildMcq(rng, q, correctStr, candidateWrongs, explanation, fallbackFn) {
    const seenKeys = new Set([canonicalOptionKey(correctStr)]);
    const seenNorm = new Set([String(correctStr).trim().toLowerCase()]);
    const wrongs = [];

    const tryAdd = (w) => {
      if (wrongs.length >= 3) return;
      if (w === undefined || w === null) return;
      const str = String(w).trim();
      if (!str || /NaN|undefined|Infinity|\[object/.test(str)) return;
      const norm = str.toLowerCase();
      const ckey = canonicalOptionKey(str);
      if (seenNorm.has(norm) || seenKeys.has(ckey)) return;
      seenNorm.add(norm);
      seenKeys.add(ckey);
      wrongs.push(str);
    };

    for (let i = 0; i < candidateWrongs.length; i++) {
      tryAdd(candidateWrongs[i]);
    }
    let step = 1;
    while (wrongs.length < 3 && step < 40) {
      tryAdd(fallbackFn(step));
      step++;
    }

    const opts = shuffle(rng, [String(correctStr).trim()].concat(wrongs.slice(0, 3)));
    return {
      q,
      options: opts,
      correctIndex: opts.indexOf(String(correctStr).trim()),
      explanation
    };
  }

  function numWrongs(ansVal, unitStr, rawCandidates, minPositive) {
    const out = [];
    for (let i = 0; i < rawCandidates.length; i++) {
      const v = rawCandidates[i];
      if (!Number.isFinite(v)) continue;
      if (minPositive && v <= 0) continue;
      if (Math.abs(v - ansVal) < 1e-6) continue;
      out.push(`${fmtDec(v)} ${unitStr}`);
    }
    return out;
  }

  function makeGen(id, skill, diff, fn) {
    return {
      id,
      unit: "u7",
      skill,
      diff,
      generate(seed) {
        return fn(makeRng(id, seed), seed);
      }
    };
  }

  const NAMES = ["Aiman", "Siti", "Raju", "Mei Ling", "Farah", "Haziq", "Danial", "Nurul", "Chua", "Alia"];

  // =========================================================================
  // u7_s2: Mengira Kelajuan (Kelajuan = Jarak ÷ Masa)
  // =========================================================================
  const u7_s2_L = makeGen("u7_s2_L", "u7_s2", "L", function (rng) {
    const tpl = pick(rng, ["spd_kmh_direct", "spd_ms_direct", "spd_cms_direct"]);

    if (tpl === "spd_kmh_direct") {
      const vehicle = pick(rng, ["Sebuah kereta", "Sebuah bas ekspres", "Sebuah kereta api", "Sebuah motosikal"]);
      const t = randInt(rng, 2, 6);
      const v = randInt(rng, 55, 120);
      const d = v * t;
      const q = `${vehicle} bergerak sejauh ${d} km dalam masa ${t} jam. Berapakah kelajuan ${vehicle.toLowerCase()} itu dalam unit km/j?`;
      const ans = `${v} km/j`;
      const exp = `Kelajuan = Jarak ÷ Masa = ${d} km ÷ ${t} jam = ${v} km/j.`;
      const wrongs = numWrongs(v, "km/j", [v + 10, v - 10, v * 2, Math.round(d + t), Math.round(d / (t + 1))], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${v + s * 5} km/j`);
      return { unit: "u7", skill: "u7_s2", diff: "L", template: tpl, ...mcq, sig: `u7_s2:L:${tpl}:${d},${t}` };
    }

    if (tpl === "spd_ms_direct") {
      const subj = pick(rng, ["Seorang pelari pecut", "Seekor arnab", "Seorang penunggang skuter", "Seorang atlet berbasikal"]);
      const t = randInt(rng, 4, 15);
      const v = randInt(rng, 3, 12);
      const d = v * t;
      const q = `${subj} bergerak sejauh ${d} m dalam masa ${t} saat. Hitung kelajuannya dalam unit m/s.`;
      const ans = `${v} m/s`;
      const exp = `Kelajuan = Jarak ÷ Masa = ${d} m ÷ ${t} saat = ${v} m/s.`;
      const wrongs = numWrongs(v, "m/s", [v + 2, Math.max(1, v - 2), d * t, v * 2, d - t], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${v + s} m/s`);
      return { unit: "u7", skill: "u7_s2", diff: "L", template: tpl, ...mcq, sig: `u7_s2:L:${tpl}:${d},${t}` };
    }

    // spd_cms_direct
    const obj = pick(rng, ["Sebuah kereta mainan kawalan jauh", "Seekor siput", "Sebiji guli di atas landasan", "Seekor kura-kura kecil"]);
    const t = randInt(rng, 3, 12);
    const v = randInt(rng, 4, 25);
    const d = v * t;
    const q = `${obj} bergerak sejauh ${d} cm dalam masa ${t} saat. Berapakah kelajuan pergerakannya dalam cm/s?`;
    const ans = `${v} cm/s`;
    const exp = `Kelajuan = Jarak ÷ Masa = ${d} cm ÷ ${t} saat = ${v} cm/s.`;
    const wrongs = numWrongs(v, "cm/s", [v + 3, Math.max(1, v - 3), v * 2, d + t, d * t], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${v + s * 2} cm/s`);
    return { unit: "u7", skill: "u7_s2", diff: "L", template: tpl, ...mcq, sig: `u7_s2:L:${tpl}:${d},${t}` };
  });

  const u7_s2_M = makeGen("u7_s2_M", "u7_s2", "M", function (rng) {
    const tpl = pick(rng, ["spd_km_min_to_kmh", "spd_m_min_to_ms", "spd_ramp_decimal"]);

    if (tpl === "spd_km_min_to_kmh") {
      const pair = pick(rng, [
        { mins: 30, hrs: 0.5 },
        { mins: 120, hrs: 2 },
        { mins: 150, hrs: 2.5 },
        { mins: 180, hrs: 3 },
        { mins: 90, hrs: 1.5 },
        { mins: 45, hrs: 0.75 }
      ]);
      const v = pick(rng, [40, 48, 60, 72, 80, 84, 96, 100]);
      const d = exactInt(v * pair.hrs, "spd_km_min_to_kmh:d");
      const q = `Sebuah bas bergerak sejauh ${d} km dalam masa ${pair.mins} minit. Berapakah kelajuan bas itu dalam unit km/j?`;
      const ans = `${v} km/j`;
      const exp = `Tukar ${pair.mins} minit = ${fmtDec(pair.hrs)} jam. Kelajuan = ${d} km ÷ ${fmtDec(pair.hrs)} jam = ${v} km/j.`;
      const wrongs = numWrongs(v, "km/j", [Math.round(d / pair.mins * 10), Math.round(v / 2), v + 20, Math.max(5, v - 20)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${v + s * 10} km/j`);
      return { unit: "u7", skill: "u7_s2", diff: "M", template: tpl, ...mcq, sig: `u7_s2:M:${tpl}:${d},${pair.mins}` };
    }

    if (tpl === "spd_m_min_to_ms") {
      const name = pick(rng, NAMES);
      const mins = randInt(rng, 2, 5);
      const secs = mins * 60;
      const v = randInt(rng, 2, 9);
      const d = v * secs;
      const q = `${name} berjoging sejauh ${d} m dalam masa ${mins} minit. Hitung kelajuan larian ${name} dalam unit m/s.`;
      const ans = `${v} m/s`;
      const exp = `Tukar ${mins} minit = ${mins} × 60 = ${secs} saat. Kelajuan = ${d} m ÷ ${secs} s = ${v} m/s.`;
      const wrongs = numWrongs(v, "m/s", [d / mins, v * 10, v + 2, Math.max(1, v - 1)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${v + s + 1} m/s`);
      return { unit: "u7", skill: "u7_s2", diff: "M", template: tpl, ...mcq, sig: `u7_s2:M:${tpl}:${d},${mins}` };
    }

    // spd_ramp_decimal: inclined track (like textbook Asah Minda Q6) or m -> cm/s
    const mode = pick(rng, ["ramp", "m_to_cms"]);
    if (mode === "ramp") {
      const d = pick(rng, [1, 2, 3, 4, 6]);
      const mult = pick(rng, [2, 4, 5]);
      // Make v = d / t clean (e.g. 0.5, 0.25, 0.2, 0.75, 1.5)
      const t = d * mult;
      const v = d / t;
      const q = `Dalam satu penyiasatan, sebiji kereta mainan menuruni landasan condong sepanjang ${d} m dalam masa ${t} saat. Berapakah kelajuan kereta mainan itu dalam unit m/s?`;
      const ans = `${fmtDec(v)} m/s`;
      const exp = `Kelajuan = Jarak ÷ Masa = ${d} m ÷ ${t} saat = ${fmtDec(v)} m/s.`;
      const wrongs = numWrongs(v, "m/s", [t / d, v * 2, v + 0.5, v * 10], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtDec(v + s * 0.25)} m/s`);
      return { unit: "u7", skill: "u7_s2", diff: "M", template: tpl, ...mcq, sig: `u7_s2:M:${tpl}:ramp:${d},${t}` };
    }

    const dm = pick(rng, [1.2, 1.5, 1.8, 2.4, 3.0, 3.6]);
    const t = pick(rng, [4, 5, 6, 10, 12]);
    const cm = exactInt(dm * 100, "spd_ramp_decimal:cm");
    const v = cm / t;
    const q = `Sebuah robot kecil bergerak sejauh ${fmtDec(dm)} m dalam masa ${t} saat. Nyatakan kelajuannya dalam unit cm/s.`;
    const ans = `${fmtDec(v)} cm/s`;
    const exp = `Tukar ${fmtDec(dm)} m = ${cm} cm. Kelajuan = ${cm} cm ÷ ${t} saat = ${fmtDec(v)} cm/s.`;
    const wrongs = numWrongs(v, "cm/s", [dm / t, v / 10, v * 2, cm - t], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtDec(v + s * 5)} cm/s`);
    return { unit: "u7", skill: "u7_s2", diff: "M", template: tpl, ...mcq, sig: `u7_s2:M:${tpl}:cms:${cm},${t}` };
  });

  const u7_s2_H = makeGen("u7_s2_H", "u7_s2", "H", function (rng) {
    const tpl = pick(rng, ["spd_compare_four", "spd_diff_mixed_units", "spd_average_journey"]);

    if (tpl === "spd_compare_four") {
      // Pick 4 distinct speeds in km/j across varied times
      const speedPool = shuffle(rng, [40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
      const spds = speedPool.slice(0, 4);
      const times = shuffle(rng, [2, 3, 4, 5]);
      const labels = ["P", "Q", "R", "S"];
      const vehicles = labels.map((lbl, idx) => ({
        lbl,
        v: spds[idx],
        t: times[idx],
        d: spds[idx] * times[idx]
      }));
      const askFastest = rng() < 0.5;
      const sorted = vehicles.slice().sort((a, b) => (askFastest ? b.v - a.v : a.v - b.v));
      const target = sorted[0];
      const desc = vehicles.map((x) => `${x.lbl} (${x.d} km dalam ${x.t} jam)`).join(", ");
      const adj = askFastest ? "paling laju" : "paling perlahan";
      const q = `Empat buah kenderaan bergerak dengan rekod berikut: ${desc}. Kenderaan manakah yang bergerak ${adj}?`;
      const ans = `Kenderaan ${target.lbl}`;
      const breakdown = vehicles.map((x) => `${x.lbl} = ${x.d} ÷ ${x.t} = ${x.v} km/j`).join("; ");
      const exp = `Kira kelajuan setiap kenderaan: ${breakdown}. Maka, Kenderaan ${target.lbl} bergerak ${adj} (${target.v} km/j).`;
      const wrongs = labels.filter((l) => l !== target.lbl).map((l) => `Kenderaan ${l}`);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, () => ans);
      return {
        unit: "u7",
        skill: "u7_s2",
        diff: "H",
        template: tpl,
        ...mcq,
        sig: `u7_s2:H:${tpl}:${askFastest ? "fast" : "slow"}:${vehicles.map((x) => `${x.d}/${x.t}`).join(",")}`
      };
    }

    if (tpl === "spd_diff_mixed_units") {
      const vA = pick(rng, [60, 70, 80, 90, 100, 110]);
      const tA = randInt(rng, 2, 4);
      const dA = vA * tA;
      const minsB = pick(rng, [30, 90, 120, 150]);
      const hrsB = minsB / 60;
      let vB = pick(rng, [40, 48, 56, 64, 72, 84, 96]);
      if (vB === vA) vB += 12;
      const dB = exactInt(vB * hrsB, "spd_diff_mixed_units:dB");
      const diff = Math.abs(vA - vB);
      const q = `Kereta X bergerak sejauh ${dA} km dalam masa ${tA} jam, manakala kereta Y bergerak sejauh ${dB} km dalam masa ${minsB} minit. Hitung beza kelajuan antara kedua-dua kereta itu dalam km/j.`;
      const ans = `${diff} km/j`;
      const exp = `Kelajuan X = ${dA} ÷ ${tA} = ${vA} km/j. Masa Y = ${minsB} minit = ${fmtDec(hrsB)} jam, jadi kelajuan Y = ${dB} ÷ ${fmtDec(hrsB)} = ${vB} km/j. Beza kelajuan = |${vA} − ${vB}| = ${diff} km/j.`;
      const wrongs = numWrongs(diff, "km/j", [vA + vB, diff + 10, Math.abs(Math.round(dA / tA - dB / minsB)), Math.max(2, diff - 6)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${diff + s * 4} km/j`);
      return { unit: "u7", skill: "u7_s2", diff: "H", template: tpl, ...mcq, sig: `u7_s2:H:${tpl}:${dA},${tA},${dB},${minsB}` };
    }

    // spd_average_journey: 2 segments, total distance / total time
    const t1 = randInt(rng, 1, 3);
    const t2 = randInt(rng, 1, 3);
    const totalT = t1 + t2;
    const avgV = pick(rng, [60, 65, 70, 75, 80, 85, 90]);
    const totalD = avgV * totalT;
    const offset = randInt(rng, 2, 5) * 5;
    const d1 = exactInt((totalD * t1) / totalT, "spd_average_journey:d1") + offset;
    const d2 = totalD - d1;
    if (d1 <= 0 || d2 <= 0) {
      // safe fallback shouldn't trigger given ranges, but guard anyway
      const sd1 = 60 * t1;
      const sd2 = 80 * t2;
      const totD = sd1 + sd2;
      const av = totD / totalT;
      const q = `Sebuah bas bergerak sejauh ${sd1} km dalam ${t1} jam pertama dan meneruskan perjalanan sejauh ${sd2} km dalam ${t2} jam berikutnya. Berapakah kelajuan purata bas bagi keseluruhan perjalanan itu?`;
      const ans = `${fmtDec(av)} km/j`;
      const exp = `Jumlah jarak = ${sd1} + ${sd2} = ${totD} km. Jumlah masa = ${t1} + ${t2} = ${totalT} jam. Kelajuan purata = ${totD} ÷ ${totalT} = ${fmtDec(av)} km/j.`;
      const wrongs = numWrongs(av, "km/j", [av + 5, av - 5, totD, (sd1 / t1 + sd2 / t2)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtDec(av + s * 3)} km/j`);
      return { unit: "u7", skill: "u7_s2", diff: "H", template: tpl, ...mcq, sig: `u7_s2:H:${tpl}:${sd1},${t1},${sd2},${t2}` };
    }
    const q = `Sebuah lori bergerak sejauh ${d1} km dalam masa ${t1} jam pertama dan kemudian bergerak lagi sejauh ${d2} km dalam masa ${t2} jam. Hitung kelajuan purata lori itu bagi keseluruhan perjalanan.`;
    const ans = `${avgV} km/j`;
    const exp = `Jumlah jarak = ${d1} + ${d2} = ${totalD} km. Jumlah masa = ${t1} + ${t2} = ${totalT} jam. Kelajuan purata = ${totalD} ÷ ${totalT} = ${avgV} km/j.`;
    const wrongs = numWrongs(avgV, "km/j", [avgV + 10, avgV - 10, Math.round((d1 / t1 + d2 / t2)), Math.round(totalD / t1)], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${avgV + s * 5} km/j`);
    return { unit: "u7", skill: "u7_s2", diff: "H", template: tpl, ...mcq, sig: `u7_s2:H:${tpl}:${d1},${t1},${d2},${t2}` };
  });

  // =========================================================================
  // u7_s3: Mengira Jarak (Jarak = Kelajuan × Masa)
  // =========================================================================
  const u7_s3_L = makeGen("u7_s3_L", "u7_s3", "L", function (rng) {
    const tpl = pick(rng, ["dist_kmh_hr", "dist_ms_sec", "dist_cms_sec"]);

    if (tpl === "dist_kmh_hr") {
      const vehicle = pick(rng, ["Sebuah kereta", "Sebuah van", "Sebuah motosikal", "Sebuah kereta api"]);
      const v = randInt(rng, 45, 110);
      const t = randInt(rng, 2, 6);
      const d = v * t;
      const q = `${vehicle} dipandu dengan kelajuan ${v} km/j selama ${t} jam. Berapakah jarak yang dilaluinya?`;
      const ans = `${d} km`;
      const exp = `Jarak = Kelajuan × Masa = ${v} km/j × ${t} jam = ${d} km.`;
      const wrongs = numWrongs(d, "km", [d + v, d - v, Math.round(v / t), v + t], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${d + s * 20} km`);
      return { unit: "u7", skill: "u7_s3", diff: "L", template: tpl, ...mcq, sig: `u7_s3:L:${tpl}:${v},${t}` };
    }

    if (tpl === "dist_ms_sec") {
      const name = pick(rng, NAMES);
      const v = randInt(rng, 3, 12);
      const t = randInt(rng, 5, 20);
      const d = v * t;
      const q = `${name} mengayuh basikal dengan kelajuan tetap ${v} m/s selama ${t} saat. Hitung jarak yang dilalui oleh ${name}.`;
      const ans = `${d} m`;
      const exp = `Jarak = Kelajuan × Masa = ${v} m/s × ${t} saat = ${d} m.`;
      const wrongs = numWrongs(d, "m", [d + 10, Math.max(2, d - 10), v + t, d * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${d + s * 5} m`);
      return { unit: "u7", skill: "u7_s3", diff: "L", template: tpl, ...mcq, sig: `u7_s3:L:${tpl}:${v},${t}` };
    }

    // dist_cms_sec
    const obj = pick(rng, ["Seekor kumbang", "Sebuah kereta mainan", "Seekor ulat bulu", "Sebiji bola pingpong"]);
    const v = randInt(rng, 4, 25);
    const t = randInt(rng, 4, 15);
    const d = v * t;
    const q = `${obj} bergerak pada kelajuan ${v} cm/s selama ${t} saat. Berapakah jarak yang dilalui dalam unit cm?`;
    const ans = `${d} cm`;
    const exp = `Jarak = Kelajuan × Masa = ${v} cm/s × ${t} saat = ${d} cm.`;
    const wrongs = numWrongs(d, "cm", [d + v, Math.max(2, d - v), v + t, d * 2], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${d + s * 4} cm`);
    return { unit: "u7", skill: "u7_s3", diff: "L", template: tpl, ...mcq, sig: `u7_s3:L:${tpl}:${v},${t}` };
  });

  const u7_s3_M = makeGen("u7_s3_M", "u7_s3", "M", function (rng) {
    const tpl = pick(rng, ["dist_ms_min_to_m", "dist_kmh_min_to_km", "dist_cms_min_to_m"]);

    if (tpl === "dist_ms_min_to_m") {
      const name = pick(rng, NAMES);
      const v = randInt(rng, 2, 10);
      const mins = randInt(rng, 2, 12);
      const secs = mins * 60;
      const d = v * secs;
      const q = `${name} menunggang skuter elektrik dengan purata kelajuan ${v} m/s selama ${mins} minit. Berapakah jarak perjalanan ${name} dalam unit meter?`;
      const ans = `${d} m`;
      const exp = `Tukar ${mins} minit = ${mins} × 60 = ${secs} saat. Jarak = ${v} m/s × ${secs} saat = ${d} m.`;
      const wrongs = numWrongs(d, "m", [v * mins, d / 2, d + 60, d * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${d + s * 120} m`);
      return { unit: "u7", skill: "u7_s3", diff: "M", template: tpl, ...mcq, sig: `u7_s3:M:${tpl}:${v},${mins}` };
    }

    if (tpl === "dist_kmh_min_to_km") {
      const pair = pick(rng, [
        { mins: 15, hrs: 0.25 },
        { mins: 30, hrs: 0.5 },
        { mins: 45, hrs: 0.75 },
        { mins: 90, hrs: 1.5 },
        { mins: 120, hrs: 2 },
        { mins: 150, hrs: 2.5 }
      ]);
      const v = pick(rng, [40, 48, 60, 72, 80, 88, 96, 100]);
      const d = exactInt(v * pair.hrs, "dist_kmh_min_to_km:d");
      const q = `Sebuah ambulans bergerak dengan kelajuan ${v} km/j selama ${pair.mins} minit ke hospital. Berapakah jarak yang dilalui oleh ambulans itu?`;
      const ans = `${d} km`;
      const exp = `Tukar ${pair.mins} minit = ${fmtDec(pair.hrs)} jam. Jarak = ${v} km/j × ${fmtDec(pair.hrs)} jam = ${d} km.`;
      const wrongs = numWrongs(d, "km", [v * pair.mins, d * 2, Math.max(5, Math.round(d / 2)), d + 15], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${d + s * 10} km`);
      return { unit: "u7", skill: "u7_s3", diff: "M", template: tpl, ...mcq, sig: `u7_s3:M:${tpl}:${v},${pair.mins}` };
    }

    // dist_cms_min_to_m
    const v = pick(rng, [10, 15, 20, 25, 30, 40, 50]);
    const mins = randInt(rng, 2, 6);
    const secs = mins * 60;
    const dCm = v * secs;
    const dM = dCm / 100;
    const q = `Sebuah kereta mainan kawalan jauh bergerak dengan kelajuan ${v} cm/s selama ${mins} minit. Hitung jarak yang dilaluinya dalam unit meter (m).`;
    const ans = `${fmtDec(dM)} m`;
    const exp = `${mins} minit = ${secs} saat. Jarak = ${v} cm/s × ${secs} s = ${dCm} cm = ${fmtDec(dM)} m.`;
    const wrongs = numWrongs(dM, "m", [dCm, (v * mins) / 100, dM * 2, dM + 6], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtDec(dM + s * 3)} m`);
    return { unit: "u7", skill: "u7_s3", diff: "M", template: tpl, ...mcq, sig: `u7_s3:M:${tpl}:${v},${mins}` };
  });

  const u7_s3_H = makeGen("u7_s3_H", "u7_s3", "H", function (rng) {
    const tpl = pick(rng, ["dist_diff_two_vehicles", "dist_two_stage_trip", "dist_remaining_target"]);

    if (tpl === "dist_diff_two_vehicles") {
      const v1 = pick(rng, [60, 70, 80, 90, 100, 110]);
      let v2 = pick(rng, [40, 44, 50, 54, 56, 64, 70, 74, 84]);
      if (v1 === v2) v2 -= 10;
      const mins = pick(rng, [30, 90, 120, 150, 180]);
      const hrs = mins / 60;
      const d1 = exactInt(v1 * hrs, "dist_diff_two_vehicles:d1");
      const d2 = exactInt(v2 * hrs, "dist_diff_two_vehicles:d2");
      const diff = Math.abs(d1 - d2);
      const q = `Kereta A dan kereta B memulakan perjalanan serentak dari garisan permulaan ke arah yang sama selama ${mins} minit. Kelajuan kereta A ialah ${v1} km/j manakala kelajuan kereta B ialah ${v2} km/j. Berapakah beza jarak antara kedua-dua kereta itu pada akhir perjalanan?`;
      const ans = `${diff} km`;
      const exp = `Tempoh = ${mins} minit = ${fmtDec(hrs)} jam. Jarak A = ${v1} × ${fmtDec(hrs)} = ${d1} km; jarak B = ${v2} × ${fmtDec(hrs)} = ${d2} km. Beza jarak = |${d1} − ${d2}| = ${diff} km.`;
      const wrongs = numWrongs(diff, "km", [d1 + d2, Math.abs(v1 - v2), diff * 2, diff + 15], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${diff + s * 5} km`);
      return { unit: "u7", skill: "u7_s3", diff: "H", template: tpl, ...mcq, sig: `u7_s3:H:${tpl}:${v1},${v2},${mins}` };
    }

    if (tpl === "dist_two_stage_trip") {
      const v1 = pick(rng, [70, 80, 90, 100, 110]);
      const t1 = randInt(rng, 1, 3);
      const v2 = pick(rng, [40, 48, 52, 60, 64]);
      const mins2 = pick(rng, [30, 45, 90]);
      const hrs2 = mins2 / 60;
      const d1 = v1 * t1;
      const d2 = exactInt(v2 * hrs2, "dist_two_stage_trip:d2");
      const total = d1 + d2;
      const q = `Encik Azman memandu dengan kelajuan ${v1} km/j selama ${t1} jam di lebuh raya, kemudian memperlahankan kelajuan kepada ${v2} km/j selama ${mins2} minit di jalan persekutuan. Berapakah jumlah jarak perjalanan Encik Azman?`;
      const ans = `${total} km`;
      const exp = `Peringkat 1: ${v1} × ${t1} = ${d1} km. Peringkat 2: ${mins2} minit = ${fmtDec(hrs2)} jam, jadi ${v2} × ${fmtDec(hrs2)} = ${d2} km. Jumlah jarak = ${d1} + ${d2} = ${total} km.`;
      const wrongs = numWrongs(total, "km", [d1, d2, total + 30, Math.max(10, total - 30)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${total + s * 15} km`);
      return { unit: "u7", skill: "u7_s3", diff: "H", template: tpl, ...mcq, sig: `u7_s3:H:${tpl}:${v1},${t1},${v2},${mins2}` };
    }

    // dist_remaining_target
    const v = pick(rng, [60, 70, 80, 90, 100]);
    const mins = pick(rng, [90, 120, 150]);
    const hrs = mins / 60;
    const travelled = exactInt(v * hrs, "dist_remaining_target:travelled");
    const rem = pick(rng, [35, 45, 60, 75, 90, 110]);
    const totalTarget = travelled + rem;
    const q = `Jarak dari bandar K ke bandar L ialah ${totalTarget} km. Sebuah bas bertolak dari bandar K dengan kelajuan tetap ${v} km/j selama ${mins} minit. Berapakah baki jarak yang masih perlu dilalui untuk tiba di bandar L?`;
    const ans = `${rem} km`;
    const exp = `Tempoh = ${mins} minit = ${fmtDec(hrs)} jam. Jarak yang telah dilalui = ${v} × ${fmtDec(hrs)} = ${travelled} km. Baki jarak = ${totalTarget} − ${travelled} = ${rem} km.`;
    const wrongs = numWrongs(rem, "km", [travelled, totalTarget, rem + 20, Math.max(5, rem - 15)], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${rem + s * 10} km`);
    return { unit: "u7", skill: "u7_s3", diff: "H", template: tpl, ...mcq, sig: `u7_s3:H:${tpl}:${totalTarget},${v},${mins}` };
  });

  // =========================================================================
  // u7_s4: Mengira Masa (Masa = Jarak ÷ Kelajuan) & Masalah Pelbagai Langkah
  // =========================================================================
  const u7_s4_L = makeGen("u7_s4_L", "u7_s4", "L", function (rng) {
    const tpl = pick(rng, ["time_km_kmh", "time_m_ms", "time_cm_cms"]);

    if (tpl === "time_km_kmh") {
      const v = pick(rng, [50, 60, 70, 75, 80, 90, 100]);
      const t = randInt(rng, 2, 7);
      const d = v * t;
      const q = `Sebuah kereta dipandu sejauh ${d} km dengan kelajuan seragam ${v} km/j. Berapakah masa perjalanan kereta itu dalam unit jam?`;
      const ans = `${t} jam`;
      const exp = `Masa = Jarak ÷ Kelajuan = ${d} km ÷ ${v} km/j = ${t} jam.`;
      const wrongs = numWrongs(t, "jam", [t + 1, Math.max(1, t - 1), t + 2, Math.round(d / 10)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${t + s + 2} jam`);
      return { unit: "u7", skill: "u7_s4", diff: "L", template: tpl, ...mcq, sig: `u7_s4:L:${tpl}:${d},${v}` };
    }

    if (tpl === "time_m_ms") {
      const name = pick(rng, NAMES);
      const v = randInt(rng, 3, 12);
      const t = randInt(rng, 6, 35);
      const d = v * t;
      const q = `${name} berlari sejauh ${d} m dengan kelajuan ${v} m/s. Berapakah masa yang diambil oleh ${name} dalam unit saat?`;
      const ans = `${t} saat`;
      const exp = `Masa = Jarak ÷ Kelajuan = ${d} m ÷ ${v} m/s = ${t} saat.`;
      const wrongs = numWrongs(t, "saat", [t + 5, Math.max(1, t - 4), d * v, t * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${t + s * 3} saat`);
      return { unit: "u7", skill: "u7_s4", diff: "L", template: tpl, ...mcq, sig: `u7_s4:L:${tpl}:${d},${v}` };
    }

    // time_cm_cms
    const v = randInt(rng, 4, 20);
    const t = randInt(rng, 5, 30);
    const d = v * t;
    const q = `Seekor siput bergerak pada kelajuan ${v} cm/s. Berapakah masa yang diambilnya untuk merangkak sejauh ${d} cm?`;
    const ans = `${t} saat`;
    const exp = `Masa = Jarak ÷ Kelajuan = ${d} cm ÷ ${v} cm/s = ${t} saat.`;
    const wrongs = numWrongs(t, "saat", [t + 4, Math.max(1, t - 3), v + d, t * 2], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${t + s * 2} saat`);
    return { unit: "u7", skill: "u7_s4", diff: "L", template: tpl, ...mcq, sig: `u7_s4:L:${tpl}:${d},${v}` };
  });

  const u7_s4_M = makeGen("u7_s4_M", "u7_s4", "M", function (rng) {
    const tpl = pick(rng, ["time_km_kmh_to_min", "time_m_ms_to_min", "time_km_ms_to_min"]);

    if (tpl === "time_km_kmh_to_min") {
      // Exact clean fraction of an hour -> exact integer minutes
      const pair = pick(rng, [
        { mins: 12, hrs: 0.2 },
        { mins: 15, hrs: 0.25 },
        { mins: 18, hrs: 0.3 },
        { mins: 24, hrs: 0.4 },
        { mins: 30, hrs: 0.5 },
        { mins: 36, hrs: 0.6 },
        { mins: 45, hrs: 0.75 },
        { mins: 48, hrs: 0.8 },
        { mins: 90, hrs: 1.5 }
      ]);
      const v = pick(rng, [40, 60, 80, 100]);
      const d = exactInt(v * pair.hrs, "time_km_kmh_to_min:d");
      const q = `Sebuah kereta bergerak sejauh ${d} km dengan kelajuan ${v} km/j. Berapakah masa yang diambil dalam unit minit?`;
      const ans = `${pair.mins} minit`;
      const exp = `Masa = ${d} km ÷ ${v} km/j = ${fmtDec(pair.hrs)} jam = ${fmtDec(pair.hrs)} × 60 = ${pair.mins} minit.`;
      const decMistake = Math.round(pair.hrs * 100);
      const wrongs = numWrongs(pair.mins, "minit", [decMistake, pair.mins + 15, Math.max(5, pair.mins - 10), pair.mins * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${pair.mins + s * 6} minit`);
      return { unit: "u7", skill: "u7_s4", diff: "M", template: tpl, ...mcq, sig: `u7_s4:M:${tpl}:${d},${v}` };
    }

    if (tpl === "time_m_ms_to_min") {
      const name = pick(rng, NAMES);
      const v = randInt(rng, 2, 10);
      const mins = randInt(rng, 2, 15);
      const secs = mins * 60;
      const d = v * secs;
      const q = `${name} berbasikal sejauh ${d} m dengan kelajuan ${v} m/s. Hitung masa perjalanannya dalam unit minit.`;
      const ans = `${mins} minit`;
      const exp = `Masa = ${d} m ÷ ${v} m/s = ${secs} saat. Tukar kepada minit = ${secs} ÷ 60 = ${mins} minit.`;
      const wrongs = numWrongs(mins, "minit", [secs, mins + 5, Math.max(1, mins - 2), mins * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${mins + s * 3} minit`);
      return { unit: "u7", skill: "u7_s4", diff: "M", template: tpl, ...mcq, sig: `u7_s4:M:${tpl}:${d},${v}` };
    }

    // time_km_ms_to_min (like Asah Minda Unit 7 Q9: distance in km, speed in m/s, answer in minit)
    const v = pick(rng, [4, 5, 6, 8, 10]);
    const mins = pick(rng, [10, 15, 20, 25, 30, 40, 50, 60, 75, 100]);
    const secs = mins * 60;
    const dMeters = v * secs;
    if (dMeters % 1000 !== 0) {
      // Ensure clean km by picking matching pair
      const cleanSet = pick(rng, [
        { v: 5, mins: 10, dKm: 3 },
        { v: 5, mins: 20, dKm: 6 },
        { v: 5, mins: 30, dKm: 9 },
        { v: 5, mins: 40, dKm: 12 },
        { v: 6, mins: 50, dKm: 18 },
        { v: 6, mins: 100, dKm: 36 },
        { v: 8, mins: 25, dKm: 12 },
        { v: 8, mins: 50, dKm: 24 },
        { v: 10, mins: 15, dKm: 9 },
        { v: 10, mins: 20, dKm: 12 },
        { v: 10, mins: 30, dKm: 18 },
        { v: 4, mins: 25, dKm: 6 },
        { v: 4, mins: 50, dKm: 12 }
      ]);
      const sCount = cleanSet.mins * 60;
      const mCount = cleanSet.dKm * 1000;
      const q = `Seorang penunggang basikal mengayuh dengan kelajuan ${cleanSet.v} m/s untuk perjalanan sejauh ${cleanSet.dKm} km. Berapakah masa yang diambil dalam unit minit?`;
      const ans = `${cleanSet.mins} minit`;
      const exp = `Tukar ${cleanSet.dKm} km = ${mCount} m. Masa = ${mCount} m ÷ ${cleanSet.v} m/s = ${sCount} saat = ${cleanSet.mins} minit.`;
      const wrongs = numWrongs(cleanSet.mins, "minit", [sCount, cleanSet.dKm / cleanSet.v * 60, cleanSet.mins + 15, Math.max(2, cleanSet.mins - 10)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${cleanSet.mins + s * 5} minit`);
      return { unit: "u7", skill: "u7_s4", diff: "M", template: tpl, ...mcq, sig: `u7_s4:M:${tpl}:${cleanSet.dKm},${cleanSet.v}` };
    }
    const dKm = dMeters / 1000;
    const q = `Seorang pelumba basikal bergerak dengan kelajuan ${v} m/s sejauh ${dKm} km. Hitung masa yang diambilnya dalam unit minit.`;
    const ans = `${mins} minit`;
    const exp = `Tukar ${dKm} km = ${dMeters} m. Masa = ${dMeters} m ÷ ${v} m/s = ${secs} saat = ${mins} minit.`;
    const wrongs = numWrongs(mins, "minit", [secs, mins + 15, Math.max(2, mins - 10), mins * 2], true);
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${mins + s * 5} minit`);
    return { unit: "u7", skill: "u7_s4", diff: "M", template: tpl, ...mcq, sig: `u7_s4:M:${tpl}:${dKm},${v}` };
  });

  const u7_s4_H = makeGen("u7_s4_H", "u7_s4", "H", function (rng) {
    const tpl = pick(rng, ["time_speed_change", "time_saved_diff", "time_clock_arrival"]);

    if (tpl === "time_speed_change") {
      // Find distance from v1 & t1 (min), then find new time at v2 (in minit)
      const name = pick(rng, NAMES);
      const cases = [
        { v1: 4, t1: 10, v2: 5, d: 2400, t2: 8 },
        { v1: 4, t1: 15, v2: 6, d: 3600, t2: 10 },
        { v1: 6, t1: 10, v2: 4, d: 3600, t2: 15 },
        { v1: 5, t1: 12, v2: 6, d: 3600, t2: 10 },
        { v1: 3, t1: 20, v2: 5, d: 3600, t2: 12 },
        { v1: 4, t1: 20, v2: 8, d: 4800, t2: 10 },
        { v1: 6, t1: 15, v2: 9, d: 5400, t2: 10 },
        { v1: 5, t1: 18, v2: 6, d: 5400, t2: 15 },
        { v1: 8, t1: 15, v2: 10, d: 7200, t2: 12 },
        { v1: 6, t1: 20, v2: 8, d: 7200, t2: 15 },
        { v1: 3, t1: 16, v2: 4, d: 2880, t2: 12 },
        { v1: 5, t1: 16, v2: 8, d: 4800, t2: 10 }
      ];
      const c = pick(rng, cases);
      const q = `${name} berbasikal ke sekolah setiap hari dengan purata kelajuan ${c.v1} m/s dan mengambil masa ${c.t1} minit. Pada suatu hari, ${name} mengayuh dengan kelajuan ${c.v2} m/s melalui laluan yang sama. Berapakah masa yang diambil oleh ${name} dalam unit minit?`;
      const ans = `${c.t2} minit`;
      const exp = `Jarak = ${c.v1} m/s × (${c.t1} × 60 s) = ${c.d} m. Pada kelajuan ${c.v2} m/s, masa = ${c.d} ÷ ${c.v2} = ${c.t2 * 60} saat = ${c.t2} minit.`;
      const wrongs = numWrongs(c.t2, "minit", [c.t1, c.t2 + 4, Math.max(2, c.t2 - 3), Math.round((c.t1 * c.v2) / c.v1)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${c.t2 + s * 2} minit`);
      return { unit: "u7", skill: "u7_s4", diff: "H", template: tpl, ...mcq, sig: `u7_s4:H:${tpl}:${c.v1},${c.t1},${c.v2}` };
    }

    if (tpl === "time_saved_diff") {
      // Compare time between faster and slower speed for same distance
      const cases = [
        { d: 120, vSlow: 60, vFast: 80, tSlowMin: 120, tFastMin: 90, diffMin: 30 },
        { d: 180, vSlow: 60, vFast: 90, tSlowMin: 180, tFastMin: 120, diffMin: 60 },
        { d: 240, vSlow: 60, vFast: 80, tSlowMin: 240, tFastMin: 180, diffMin: 60 },
        { d: 240, vSlow: 80, vFast: 120, tSlowMin: 180, tFastMin: 120, diffMin: 60 },
        { d: 150, vSlow: 50, vFast: 75, tSlowMin: 180, tFastMin: 120, diffMin: 60 },
        { d: 90, vSlow: 60, vFast: 90, tSlowMin: 90, tFastMin: 60, diffMin: 30 },
        { d: 120, vSlow: 80, vFast: 100, tSlowMin: 90, tFastMin: 72, diffMin: 18 },
        { d: 200, vSlow: 80, vFast: 100, tSlowMin: 150, tFastMin: 120, diffMin: 30 },
        { d: 100, vSlow: 50, vFast: 80, tSlowMin: 120, tFastMin: 75, diffMin: 45 },
        { d: 140, vSlow: 70, vFast: 100, tSlowMin: 120, tFastMin: 84, diffMin: 36 }
      ];
      const c = pick(rng, cases);
      const q = `Sebuah bas bergerak sejauh ${c.d} km pada kelajuan ${c.vSlow} km/j, manakala sebuah kereta melalui jarak yang sama pada kelajuan ${c.vFast} km/j. Berapakah minitkah lebih awal kereta itu tiba berbanding bas?`;
      const ans = `${c.diffMin} minit`;
      const exp = `Masa bas = ${c.d} ÷ ${c.vSlow} = ${fmtDec(c.tSlowMin / 60)} jam (${c.tSlowMin} minit). Masa kereta = ${c.d} ÷ ${c.vFast} = ${fmtDec(c.tFastMin / 60)} jam (${c.tFastMin} minit). Beza masa = ${c.tSlowMin} − ${c.tFastMin} = ${c.diffMin} minit.`;
      const wrongs = numWrongs(c.diffMin, "minit", [c.tFastMin, c.tSlowMin, c.diffMin + 15, Math.max(5, c.diffMin - 10)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${c.diffMin + s * 10} minit`);
      return { unit: "u7", skill: "u7_s4", diff: "H", template: tpl, ...mcq, sig: `u7_s4:H:${tpl}:${c.d},${c.vSlow},${c.vFast}` };
    }

    // time_clock_arrival: departure time + duration -> arrival clock time (same day, morning/afternoon)
    const startH = randInt(rng, 7, 13);
    const startM = pick(rng, [0, 15, 30, 45]);
    const durPair = pick(rng, [
      { v: 60, d: 90, durMin: 90 },
      { v: 80, d: 120, durMin: 90 },
      { v: 80, d: 200, durMin: 150 },
      { v: 90, d: 135, durMin: 90 },
      { v: 60, d: 150, durMin: 150 },
      { v: 100, d: 150, durMin: 90 },
      { v: 70, d: 140, durMin: 120 },
      { v: 80, d: 240, durMin: 180 },
      { v: 60, d: 75, durMin: 75 },
      { v: 80, d: 100, durMin: 75 },
      { v: 80, d: 140, durMin: 105 },
      { v: 90, d: 180, durMin: 120 }
    ]);
    const fmtClock = (totalMins) => {
      const hh = Math.floor(totalMins / 60);
      const mm = totalMins % 60;
      const period = hh < 12 ? "pagi" : hh === 12 ? "tengah hari" : "petang";
      const h12 = hh > 12 ? hh - 12 : hh;
      return `${h12}:${String(mm).padStart(2, "0")} ${period}`;
    };
    const startTotal = startH * 60 + startM;
    const endTotal = startTotal + durPair.durMin;
    const startStr = fmtClock(startTotal);
    const ans = fmtClock(endTotal);
    const q = `Sebuah kereta api bertolak pada pukul ${startStr} untuk perjalanan sejauh ${durPair.d} km dengan kelajuan tetap ${durPair.v} km/j. Pada pukul berapakah kereta api itu tiba di destinasinya?`;
    const exp = `Masa perjalanan = ${durPair.d} ÷ ${durPair.v} = ${fmtDec(durPair.durMin / 60)} jam (${durPair.durMin} minit). Waktu tiba = ${startStr} + ${durPair.durMin} minit = ${ans}.`;
    const wrongTotals = [endTotal + 30, endTotal - 30, endTotal + 60, endTotal - 15].map(fmtClock);
    const mcq = buildMcq(rng, q, ans, wrongTotals, exp, (s) => fmtClock(endTotal + s * 45));
    return { unit: "u7", skill: "u7_s4", diff: "H", template: tpl, ...mcq, sig: `u7_s4:H:${tpl}:${startTotal},${durPair.d},${durPair.v}` };
  });

  const entries = [
    u7_s2_L, u7_s2_M, u7_s2_H,
    u7_s3_L, u7_s3_M, u7_s3_H,
    u7_s4_L, u7_s4_M, u7_s4_H
  ];

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};
  App.Pools.d6.sains = (Array.isArray(App.Pools.d6.sains) ? App.Pools.d6.sains : []).concat(entries);

  App.Generators = App.Generators || {};
  App.Generators.pools = App.Generators.pools || {};
  App.Generators.pools.d6 = App.Generators.pools.d6 || {};
  App.Generators.pools.d6.sains = entries;
})(typeof window !== "undefined" ? window : globalThis);
