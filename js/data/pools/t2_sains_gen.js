/**
 * Tingkatan 2 Sains (KSSM) deterministic skill-tagged MCQ generators.
 * Self-contained pool of 18 generators (6 numeric skills x L/M/H) with zero DOM/storage dependencies.
 * Registers cleanly alongside static items in App.Pools.t2.sains and App.Generators.pools.t2.sains.
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

  function fmtSci(val) {
    if (!Number.isFinite(val) || val <= 0) {
      throw new Error(`Invalid scientific value: ${val}`);
    }
    const exp = Math.floor(Math.log10(val) + 1e-12);
    const mant = val / Math.pow(10, exp);
    const mantRounded = Math.round(mant * 1000) / 1000;
    if (mantRounded >= 10) {
      return `${fmtDec(mantRounded / 10, 3)} × 10^${exp + 1}`;
    }
    return `${fmtDec(mantRounded, 3)} × 10^${exp}`;
  }

  function canonicalOptionKey(raw) {
    const s = String(raw).replace(/\s+/g, " ").trim().toLowerCase();

    // Scientific notation with unit: e.g. "4.5 × 10^8 km" or "1.9 x 10^13 km"
    const sci = s.match(/^(-?\d+(?:\.\d+)?)\s*(?:×|x|\*)\s*10\^(-?\d+)\s*([a-z/²³]+)$/);
    if (sci) {
      const val = Number(sci[1]) * Math.pow(10, Number(sci[2]));
      const unit = sci[3];
      if (unit === "km") return `astro_km:${Number(val.toPrecision(6))}`;
      if (unit === "m") return `astro_km:${Number((val / 1000).toPrecision(6))}`;
      return `sci_${unit}:${Number(val.toPrecision(6))}`;
    }

    // Standard numeric + unit normalization
    const m = s.match(/^(-?\d+(?:\.\d+)?)\s*(kj|kcal|mv|v|ma|a|kω|ω|ohm|n m|n cm|kn|n|kpa|pa|n\/m²|n\/cm²|m²|cm²|km\/j|m\/s|cm\/s|km|m|cm|kg|g|jam|minit|saat|s|au|ly)$/);
    if (m) {
      const num = Number(m[1]);
      const unit = m[2];
      // Energy (1 kcal = 4.2 kJ)
      if (unit === "kj") return `energy_kj:${Math.round(num * 1000)}`;
      if (unit === "kcal") return `energy_kj:${Math.round(num * 4.2 * 1000)}`;
      // Electrical
      if (unit === "v") return `volt:${Math.round(num * 1000)}`;
      if (unit === "mv") return `volt:${Math.round(num)}`;
      if (unit === "a") return `amp:${Math.round(num * 1000)}`;
      if (unit === "ma") return `amp:${Math.round(num)}`;
      if (unit === "ω" || unit === "ohm") return `ohm:${Math.round(num * 1000)}`;
      if (unit === "kω") return `ohm:${Math.round(num * 1000000)}`;
      // Moment & Force
      if (unit === "n m") return `moment:${Math.round(num * 1000)}`;
      if (unit === "n cm") return `moment:${Math.round(num * 10)}`;
      if (unit === "n") return `force:${Math.round(num * 1000)}`;
      if (unit === "kn") return `force:${Math.round(num * 1000000)}`;
      // Pressure (base Pa)
      if (unit === "pa" || unit === "n/m²") return `pressure:${Math.round(num * 100)}`;
      if (unit === "kpa") return `pressure:${Math.round(num * 100000)}`;
      if (unit === "n/cm²") return `pressure:${Math.round(num * 1000000)}`;
      // Area (base cm²)
      if (unit === "m²") return `area:${Math.round(num * 1000000)}`;
      if (unit === "cm²") return `area:${Math.round(num * 100)}`;
      // Mass (base g)
      if (unit === "kg") return `mass:${Math.round(num * 100000)}`;
      if (unit === "g") return `mass:${Math.round(num * 100)}`;
      // Speed (base m/s)
      if (unit === "m/s") return `spd:${Math.round(num * 10000)}`;
      if (unit === "cm/s") return `spd:${Math.round(num * 100)}`;
      if (unit === "km/j") return `spd:${Math.round((num / 3.6) * 10000)}`;
      // Time (base s)
      if (unit === "jam") return `time:${Math.round(num * 3600000)}`;
      if (unit === "minit") return `time:${Math.round(num * 60000)}`;
      if (unit === "saat" || unit === "s") return `time:${Math.round(num * 1000)}`;
      // Astronomy & Distance
      if (unit === "au") return `astro_km:${Number((num * 1.5e8).toPrecision(6))}`;
      if (unit === "ly") return `astro_km:${Number((num * 9.5e12).toPrecision(6))}`;
      if (unit === "km") {
        if (num >= 1e5) return `astro_km:${Number(num.toPrecision(6))}`;
        return `dist_cm:${Math.round(num * 100000)}`;
      }
      if (unit === "m") return `dist_cm:${Math.round(num * 100)}`;
      if (unit === "cm") return `dist_cm:${Math.round(num)}`;
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
    while (wrongs.length < 3 && step < 50) {
      tryAdd(fallbackFn(step));
      step++;
    }
    if (wrongs.length < 3) {
      throw new Error(`Could not build 4 unique options for: ${q}`);
    }

    const opts = shuffle(rng, [String(correctStr).trim()].concat(wrongs.slice(0, 3)));
    return {
      q,
      options: opts,
      correctIndex: opts.indexOf(String(correctStr).trim()),
      explanation
    };
  }

  function numWrongs(ansVal, unitStr, rawCandidates, minPositive, maxDp) {
    const out = [];
    for (let i = 0; i < rawCandidates.length; i++) {
      const v = rawCandidates[i];
      if (!Number.isFinite(v)) continue;
      if (minPositive && v <= 0) continue;
      if (Math.abs(v - ansVal) < 1e-6) continue;
      out.push(`${fmtDec(v, maxDp)} ${unitStr}`);
    }
    return out;
  }

  function makeGen(id, unit, skill, diff, fn) {
    return {
      id,
      unit,
      skill,
      diff,
      generate(seed) {
        return fn(makeRng(id, seed), seed);
      }
    };
  }

  const NAMES = ["Aiman", "Siti", "Raju", "Mei Ling", "Farah", "Haziq", "Danial", "Nurul", "Chua", "Alia"];

  // =========================================================================
  // 1. b3_s3 (unit "b3"): Nilai Kalori Makanan & Pengiraan Keperluan Tenaga
  // =========================================================================
  const FOODS_KJ = [
    { name: "nasi putih", vals: [520, 560, 600, 640] },
    { name: "roti putih", vals: [960, 1000, 1040, 1080] },
    { name: "ayam panggang", vals: [640, 680, 720, 760] },
    { name: "susu segar", vals: [240, 280, 320] },
    { name: "pisang", vals: [360, 400, 440] },
    { name: "telur rebus", vals: [560, 600, 640] },
    { name: "mi goreng", vals: [760, 800, 840] },
    { name: "ikan bakar", vals: [480, 520, 560] }
  ];

  const b3_s3_L = makeGen("b3_s3_L", "b3", "b3_s3", "L", function (rng) {
    const tpl = pick(rng, ["cal_100g_mult", "cal_two_items_sum", "cal_daily_need_diff"]);

    if (tpl === "cal_100g_mult") {
      const food = pick(rng, FOODS_KJ);
      const cal100 = pick(rng, food.vals);
      const mult = randInt(rng, 2, 5);
      const mass = mult * 100;
      const ans = exactInt(cal100 * mult, "cal_100g_mult");
      const q = `Nilai kalori bagi 100 g ${food.name} ialah ${cal100} kJ. Berapakah jumlah nilai kalori bagi ${mass} g ${food.name}?`;
      const exp = `Jumlah nilai kalori = (${mass} g ÷ 100 g) × ${cal100} kJ = ${mult} × ${cal100} = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [cal100, cal100 * (mult + 1), cal100 * (mult - 1), cal100 + mass], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 40} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "L", template: tpl, ...mcq, sig: `b3_s3:L:${tpl}:${food.name},${cal100},${mass}` };
    }

    if (tpl === "cal_two_items_sum") {
      const nama = pick(rng, NAMES);
      const f1 = pick(rng, ["semangkuk nasi lemak", "sepinggan bihun goreng", "dua keping roti bakar", "semangkuk bubur ayam"]);
      const f2 = pick(rng, ["segelas susu", "sebiji telur rebus", "secawan teh tarik", "sebiji pisang"]);
      const e1 = randInt(rng, 10, 24) * 50;
      const e2 = randInt(rng, 4, 12) * 50;
      const ans = e1 + e2;
      const q = `Untuk sarapan pagi, ${nama} mengambil ${f1} yang membekalkan ${e1} kJ tenaga dan ${f2} yang membekalkan ${e2} kJ tenaga. Hitung jumlah tenaga yang diambil oleh ${nama}.`;
      const exp = `Jumlah tenaga = ${e1} kJ + ${e2} kJ = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [e1 - e2, ans + 100, Math.max(100, ans - 100), ans + 200], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 50} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "L", template: tpl, ...mcq, sig: `b3_s3:L:${tpl}:${e1},${e2}` };
    }

    // cal_daily_need_diff
    const mode = pick(rng, ["diff", "days"]);
    if (mode === "diff") {
      const reqL = randInt(rng, 21, 26) * 500; // 10500..13000
      const reqP = randInt(rng, 16, 20) * 500; // 8000..10000
      const ans = reqL - reqP;
      const q = `Keperluan tenaga harian seorang remaja lelaki yang aktif ialah ${reqL} kJ, manakala bagi seorang remaja perempuan yang sebaya ialah ${reqP} kJ. Berapakah perbezaan keperluan tenaga harian antara kedua-dua remaja tersebut?`;
      const exp = `Perbezaan keperluan tenaga = ${reqL} kJ - ${reqP} kJ = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [reqL + reqP, ans + 500, Math.max(200, ans - 500), ans + 1000], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 250} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "L", template: tpl, ...mcq, sig: `b3_s3:L:${tpl}:diff:${reqL},${reqP}` };
    }
    const req = randInt(rng, 16, 24) * 500;
    const days = randInt(rng, 2, 5);
    const ans = req * days;
    const q = `Seorang pelajar Tingkatan 2 memerlukan ${req} kJ tenaga sehari. Berapakah jumlah tenaga yang diperlukannya dalam tempoh ${days} hari?`;
    const exp = `Jumlah tenaga = ${req} kJ/hari × ${days} hari = ${ans} kJ.`;
    const wrongs = numWrongs(ans, "kJ", [req * (days + 1), req * (days - 1), req + days * 500, ans + 1000], true);
    const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 500} kJ`);
    return { unit: "b3", skill: "b3_s3", diff: "L", template: tpl, ...mcq, sig: `b3_s3:L:${tpl}:days:${req},${days}` };
  });

  const b3_s3_M = makeGen("b3_s3_M", "b3", "b3_s3", "M", function (rng) {
    const tpl = pick(rng, ["cal_non100_mass", "cal_find_mass", "cal_kcal_kj_convert"]);

    if (tpl === "cal_non100_mass") {
      const food = pick(rng, FOODS_KJ);
      const cal100 = pick(rng, food.vals); // all multiples of 40
      const mass = pick(rng, [50, 75, 125, 150, 175, 225, 250, 350]);
      const ans = exactInt((cal100 * mass) / 100, "cal_non100_mass");
      const q = `Jadual nutrisi menunjukkan nilai kalori ${food.name} ialah ${cal100} kJ per 100 g. Hitung tenaga yang dibekalkan jika seorang murid makan ${mass} g ${food.name}.`;
      const exp = `Tenaga = (${mass} g ÷ 100 g) × ${cal100} kJ = ${fmtDec(mass / 100)} × ${cal100} = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [cal100, Math.round(cal100 * 2), ans + 120, Math.max(40, ans - 120), Math.round((cal100 * 100) / mass)], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 40} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "M", template: tpl, ...mcq, sig: `b3_s3:M:${tpl}:${food.name},${cal100},${mass}` };
    }

    if (tpl === "cal_find_mass") {
      const food = pick(rng, FOODS_KJ);
      const cal100 = pick(rng, food.vals);
      const mass = pick(rng, [50, 150, 200, 250, 300, 350, 400]);
      const energy = exactInt((cal100 * mass) / 100, "cal_find_mass:E");
      const q = `Nilai kalori bagi 100 g ${food.name} ialah ${cal100} kJ. Berapakah jisim ${food.name} yang perlu dimakan untuk memperoleh tepat ${energy} kJ tenaga?`;
      const exp = `Jisim = (${energy} kJ ÷ ${cal100} kJ) × 100 g = ${fmtDec(energy / cal100)} × 100 g = ${mass} g.`;
      const wrongs = numWrongs(mass, "g", [mass + 50, Math.max(25, mass - 50), mass * 2, Math.round(energy / cal100 * 10)], true);
      const mcq = buildMcq(rng, q, `${mass} g`, wrongs, exp, (s) => `${mass + s * 25} g`);
      return { unit: "b3", skill: "b3_s3", diff: "M", template: tpl, ...mcq, sig: `b3_s3:M:${tpl}:${food.name},${cal100},${mass}` };
    }

    // cal_kcal_kj_convert (1 kcal = 4.2 kJ)
    const toKj = pick(rng, [true, false]);
    const kcal = randInt(rng, 2, 14) * 50; // 100..700 kcal
    const kj = exactInt(kcal * 4.2, "cal_kcal_kj_convert:kj");
    if (toKj) {
      const q = `Satu bungkusan snek mengandungi ${kcal} kcal tenaga. Diberi 1 kcal = 4.2 kJ, berapakah nilai kalori snek itu dalam unit kilojoule (kJ)?`;
      const exp = `Nilai tenaga = ${kcal} kcal × 4.2 kJ/kcal = ${kj} kJ.`;
      const wrongs = numWrongs(kj, "kJ", [kcal * 4, Math.round(kcal / 4.2), kj + 100, Math.max(50, kj - 100)], true);
      const mcq = buildMcq(rng, q, `${kj} kJ`, wrongs, exp, (s) => `${kj + s * 42} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "M", template: tpl, ...mcq, sig: `b3_s3:M:${tpl}:toKj:${kcal}` };
    }
    const q = `Hidangan tengah hari seorang murid membekalkan ${kj} kJ tenaga. Jika 1 kcal = 4.2 kJ, berapakah nilai tenaga tersebut dalam unit kilokalori (kcal)?`;
    const exp = `Nilai tenaga = ${kj} kJ ÷ 4.2 = ${kcal} kcal.`;
    const wrongs = numWrongs(kcal, "kcal", [Math.round(kj / 4), Math.round(kj * 4.2), kcal + 50, Math.max(50, kcal - 50)], true);
    const mcq = buildMcq(rng, q, `${kcal} kcal`, wrongs, exp, (s) => `${kcal + s * 25} kcal`);
    return { unit: "b3", skill: "b3_s3", diff: "M", template: tpl, ...mcq, sig: `b3_s3:M:${tpl}:toKcal:${kj}` };
  });

  const b3_s3_H = makeGen("b3_s3_H", "b3", "b3_s3", "H", function (rng) {
    const tpl = pick(rng, ["cal_three_item_meal", "cal_daily_balance", "cal_mixed_unit_meal"]);

    if (tpl === "cal_three_item_meal") {
      const items = shuffle(rng, FOODS_KJ).slice(0, 3);
      const masses = [pick(rng, [150, 200, 250]), pick(rng, [75, 125, 150]), pick(rng, [150, 200, 250])];
      const cals = items.map((it) => pick(rng, it.vals));
      const e0 = exactInt((cals[0] * masses[0]) / 100);
      const e1 = exactInt((cals[1] * masses[1]) / 100);
      const e2 = exactInt((cals[2] * masses[2]) / 100);
      const ans = e0 + e1 + e2;
      const q = `Seorang murid makan ${masses[0]} g ${items[0].name} (${cals[0]} kJ/100 g), ${masses[1]} g ${items[1].name} (${cals[1]} kJ/100 g) dan ${masses[2]} g ${items[2].name} (${cals[2]} kJ/100 g). Hitung jumlah nilai kalori hidangan tersebut.`;
      const exp = `Tenaga ${items[0].name} = ${e0} kJ, ${items[1].name} = ${e1} kJ, ${items[2].name} = ${e2} kJ. Jumlah = ${e0} + ${e1} + ${e2} = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [cals[0] + cals[1] + cals[2], ans + 120, Math.max(100, ans - 120), ans + e1], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 60} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "H", template: tpl, ...mcq, sig: `b3_s3:H:${tpl}:${cals.join(",")}:${masses.join(",")}` };
    }

    if (tpl === "cal_daily_balance") {
      const nama = pick(rng, NAMES);
      const req = randInt(rng, 18, 24) * 500; // 9000..12000 kJ
      const items = shuffle(rng, FOODS_KJ).slice(0, 2);
      const m1 = pick(rng, [200, 250, 300]);
      const m2 = pick(rng, [150, 200, 250]);
      const c1 = pick(rng, items[0].vals);
      const c2 = pick(rng, items[1].vals);
      const eaten = exactInt((c1 * m1) / 100) + exactInt((c2 * m2) / 100);
      const ans = req - eaten;
      const q = `Keperluan tenaga harian ${nama} ialah ${req} kJ. Setakat tengah hari, dia telah mengambil ${m1} g ${items[0].name} (${c1} kJ/100 g) dan ${m2} g ${items[1].name} (${c2} kJ/100 g). Berapakah baki tenaga yang masih diperlukan oleh ${nama} pada hari itu?`;
      const exp = `Tenaga diambil = (${m1}/100 × ${c1}) + (${m2}/100 × ${c2}) = ${eaten} kJ. Baki tenaga = ${req} - ${eaten} = ${ans} kJ.`;
      const wrongs = numWrongs(ans, "kJ", [eaten, req - (c1 + c2), ans + 200, Math.max(100, ans - 200)], true);
      const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 100} kJ`);
      return { unit: "b3", skill: "b3_s3", diff: "H", template: tpl, ...mcq, sig: `b3_s3:H:${tpl}:${req},${c1},${m1},${c2},${m2}` };
    }

    // cal_mixed_unit_meal
    const foodA = pick(rng, FOODS_KJ);
    const cal100 = pick(rng, foodA.vals);
    const massA = pick(rng, [150, 200, 250, 300]);
    const eA = exactInt((cal100 * massA) / 100);
    const kcalB = randInt(rng, 2, 7) * 50; // 100..350 kcal
    const eB = exactInt(kcalB * 4.2);
    const ans = eA + eB;
    const q = `Satu hidangan terdiri daripada ${massA} g ${foodA.name} (nilai kalori ${cal100} kJ per 100 g) dan sekeping kuih yang membekalkan ${kcalB} kcal tenaga. Diberi 1 kcal = 4.2 kJ, berapakah jumlah tenaga hidangan ini dalam unit kJ?`;
    const exp = `Tenaga ${foodA.name} = (${massA}/100) × ${cal100} = ${eA} kJ. Tenaga kuih = ${kcalB} × 4.2 = ${eB} kJ. Jumlah = ${eA} + ${eB} = ${ans} kJ.`;
    const wrongs = numWrongs(ans, "kJ", [eA + kcalB, cal100 + eB, ans + 150, Math.max(100, ans - 150)], true);
    const mcq = buildMcq(rng, q, `${ans} kJ`, wrongs, exp, (s) => `${ans + s * 50} kJ`);
    return { unit: "b3", skill: "b3_s3", diff: "H", template: tpl, ...mcq, sig: `b3_s3:H:${tpl}:${cal100},${massA},${kcalB}` };
  });

  // =========================================================================
  // 2. b7_s2 (unit "b7"): Hukum Ohm (V = IR), Litar Siri & Litar Selari
  // =========================================================================
  const PARALLEL_PAIRS = [
    [6, 6, 3], [4, 12, 3], [6, 12, 4], [10, 10, 5],
    [12, 12, 6], [3, 6, 2], [10, 15, 6], [5, 20, 4],
    [12, 24, 8], [20, 30, 12], [30, 60, 20], [10, 40, 8],
    [15, 30, 10], [8, 8, 4], [14, 14, 7], [9, 18, 6]
  ];

  const b7_s2_L = makeGen("b7_s2_L", "b7", "b7_s2", "L", function (rng) {
    const tpl = pick(rng, ["ohm_find_V", "ohm_find_I", "ohm_find_R", "series_R_total"]);

    if (tpl === "ohm_find_V") {
      const iVal = pick(rng, [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]);
      const rVal = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12]);
      const vVal = Math.round(iVal * rVal * 100) / 100;
      const q = `Satu perintang ${rVal} Ω dialiri arus elektrik sebanyak ${fmtDec(iVal)} A. Menggunakan Hukum Ohm (V = IR), berapakah voltan merentasi perintang itu?`;
      const exp = `V = I × R = ${fmtDec(iVal)} A × ${rVal} Ω = ${fmtDec(vVal)} V.`;
      const wrongs = numWrongs(vVal, "V", [rVal / iVal, rVal + iVal, vVal * 2, Math.max(0.5, vVal - 2)], true);
      const mcq = buildMcq(rng, q, `${fmtDec(vVal)} V`, wrongs, exp, (s) => `${fmtDec(vVal + s * 2)} V`);
      return { unit: "b7", skill: "b7_s2", diff: "L", template: tpl, ...mcq, sig: `b7_s2:L:${tpl}:${iVal},${rVal}` };
    }

    if (tpl === "ohm_find_I") {
      const iVal = pick(rng, [0.5, 1, 1.5, 2, 2.5, 3, 4]);
      const rVal = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12]);
      const vVal = Math.round(iVal * rVal * 100) / 100;
      const q = `Sebuah mentol berintangan ${rVal} Ω disambungkan kepada bekalan kuasa ${fmtDec(vVal)} V. Hitung arus elektrik yang mengalir melalui mentol tersebut.`;
      const exp = `I = V ÷ R = ${fmtDec(vVal)} V ÷ ${rVal} Ω = ${fmtDec(iVal)} A.`;
      const wrongs = numWrongs(iVal, "A", [vVal * rVal, rVal / vVal, iVal + 1, Math.max(0.25, iVal - 0.5)], true);
      const mcq = buildMcq(rng, q, `${fmtDec(iVal)} A`, wrongs, exp, (s) => `${fmtDec(iVal + s * 0.5)} A`);
      return { unit: "b7", skill: "b7_s2", diff: "L", template: tpl, ...mcq, sig: `b7_s2:L:${tpl}:${vVal},${rVal}` };
    }

    if (tpl === "ohm_find_R") {
      const iVal = pick(rng, [0.5, 1, 1.5, 2, 2.5, 3, 4]);
      const rVal = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12, 15]);
      const vVal = Math.round(iVal * rVal * 100) / 100;
      const q = `Bacaan voltmeter merentasi suatu dawai ialah ${fmtDec(vVal)} V apabila arus ${fmtDec(iVal)} A mengalir melaluinya. Berapakah rintangan dawai itu?`;
      const exp = `R = V ÷ I = ${fmtDec(vVal)} V ÷ ${fmtDec(iVal)} A = ${rVal} Ω.`;
      const wrongs = numWrongs(rVal, "Ω", [vVal * iVal, rVal + 2, Math.max(1, rVal - 2), vVal + iVal], true);
      const mcq = buildMcq(rng, q, `${rVal} Ω`, wrongs, exp, (s) => `${rVal + s * 2} Ω`);
      return { unit: "b7", skill: "b7_s2", diff: "L", template: tpl, ...mcq, sig: `b7_s2:L:${tpl}:${vVal},${iVal}` };
    }

    // series_R_total
    const r1 = randInt(rng, 2, 15);
    const r2 = randInt(rng, 2, 15);
    const r3 = pick(rng, [0, randInt(rng, 2, 10)]);
    const ans = r1 + r2 + r3;
    const q = r3 > 0
      ? `Tiga perintang bernilai ${r1} Ω, ${r2} Ω dan ${r3} Ω disambungkan secara bersiri dalam satu litar. Hitung rintangan berkesan litar siri ini.`
      : `Dua perintang masing-masing bernilai ${r1} Ω dan ${r2} Ω disambungkan secara bersiri. Berapakah rintangan berkesan bagi gabungan perintang ini?`;
    const exp = r3 > 0
      ? `Dalam litar siri, R = R1 + R2 + R3 = ${r1} + ${r2} + ${r3} = ${ans} Ω.`
      : `Dalam litar siri, R = R1 + R2 = ${r1} + ${r2} = ${ans} Ω.`;
    const wrongs = numWrongs(ans, "Ω", [Math.round((r1 * r2) / (r1 + r2)), ans + 3, Math.max(1, ans - 3), r1 * r2], true);
    const mcq = buildMcq(rng, q, `${ans} Ω`, wrongs, exp, (s) => `${ans + s * 2} Ω`);
    return { unit: "b7", skill: "b7_s2", diff: "L", template: tpl, ...mcq, sig: `b7_s2:L:${tpl}:${r1},${r2},${r3}` };
  });

  const b7_s2_M = makeGen("b7_s2_M", "b7", "b7_s2", "M", function (rng) {
    const tpl = pick(rng, ["series_I_or_V1", "parallel_R_eff", "parallel_total_I"]);

    if (tpl === "series_I_or_V1") {
      const r1 = randInt(rng, 2, 9);
      const r2 = randInt(rng, 2, 9);
      const iVal = pick(rng, [0.5, 1, 1.5, 2, 3]);
      const vTot = Math.round(iVal * (r1 + r2) * 100) / 100;
      const askV1 = pick(rng, [true, false]);
      if (!askV1) {
        const q = `Dua perintang ${r1} Ω dan ${r2} Ω disambungkan secara bersiri kepada bateri ${fmtDec(vTot)} V. Hitung arus elektrik yang mengalir dalam litar siri tersebut.`;
        const exp = `Rintangan berkesan R = ${r1} + ${r2} = ${r1 + r2} Ω. Arus I = V ÷ R = ${fmtDec(vTot)} ÷ ${r1 + r2} = ${fmtDec(iVal)} A.`;
        const wrongs = numWrongs(iVal, "A", [vTot / r1, vTot / r2, iVal + 1, iVal * 2], true);
        const mcq = buildMcq(rng, q, `${fmtDec(iVal)} A`, wrongs, exp, (s) => `${fmtDec(iVal + s * 0.5)} A`);
        return { unit: "b7", skill: "b7_s2", diff: "M", template: tpl, ...mcq, sig: `b7_s2:M:${tpl}:I:${r1},${r2},${vTot}` };
      }
      const v1 = Math.round(iVal * r1 * 100) / 100;
      const q = `Perintang R1 (${r1} Ω) dan R2 (${r2} Ω) disambungkan secara bersiri kepada bateri ${fmtDec(vTot)} V. Berapakah bacaan voltmeter merentasi perintang R1?`;
      const exp = `R = ${r1} + ${r2} = ${r1 + r2} Ω. Arus I = ${fmtDec(vTot)} ÷ ${r1 + r2} = ${fmtDec(iVal)} A. Voltan V1 = I × R1 = ${fmtDec(iVal)} × ${r1} = ${fmtDec(v1)} V.`;
      const wrongs = numWrongs(v1, "V", [vTot, iVal * r2, v1 + 2, Math.max(0.5, v1 - 1.5)], true);
      const mcq = buildMcq(rng, q, `${fmtDec(v1)} V`, wrongs, exp, (s) => `${fmtDec(v1 + s * 1.5)} V`);
      return { unit: "b7", skill: "b7_s2", diff: "M", template: tpl, ...mcq, sig: `b7_s2:M:${tpl}:V1:${r1},${r2},${vTot}` };
    }

    if (tpl === "parallel_R_eff") {
      const [r1, r2, rEff] = pick(rng, PARALLEL_PAIRS);
      const q = `Dua perintang bernilai ${r1} Ω dan ${r2} Ω disambungkan secara selari dalam satu litar elektrik. Hitung rintangan berkesan litar selari ini.`;
      const exp = `1/R = 1/${r1} + 1/${r2} = ${r1 + r2}/${r1 * r2}. Maka R = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${rEff} Ω.`;
      const wrongs = numWrongs(rEff, "Ω", [r1 + r2, Math.abs(r1 - r2) || rEff + 2, rEff * 2, r1], true);
      const mcq = buildMcq(rng, q, `${rEff} Ω`, wrongs, exp, (s) => `${rEff + s} Ω`);
      return { unit: "b7", skill: "b7_s2", diff: "M", template: tpl, ...mcq, sig: `b7_s2:M:${tpl}:${r1},${r2}` };
    }

    // parallel_total_I
    const [r1, r2, rEff] = pick(rng, PARALLEL_PAIRS);
    const mult = pick(rng, [1, 2, 3]);
    const vVal = rEff * mult; // ensures I_total = mult A, wait check branch currents too!
    // Even better: pick vVal = lcm or multiple of rEff so I_total = vVal / rEff is exact integer!
    const iTot = exactInt(vVal / rEff, "parallel_total_I");
    const q = `Dua perintang bernilai ${r1} Ω dan ${r2} Ω disambungkan secara selari merentasi bateri ${vVal} V. Berapakah jumlah arus elektrik yang dibekalkan oleh bateri itu?`;
    const exp = `Rintangan berkesan selari R = ${rEff} Ω (daripada 1/R = 1/${r1} + 1/${r2}). Jumlah arus I = V ÷ R = ${vVal} V ÷ ${rEff} Ω = ${iTot} A.`;
    const wrongs = numWrongs(iTot, "A", [vVal / (r1 + r2), vVal / r1, iTot + 2, Math.max(0.5, iTot - 1)], true);
    const mcq = buildMcq(rng, q, `${iTot} A`, wrongs, exp, (s) => `${iTot + s} A`);
    return { unit: "b7", skill: "b7_s2", diff: "M", template: tpl, ...mcq, sig: `b7_s2:M:${tpl}:${r1},${r2},${vVal}` };
  });

  const b7_s2_H = makeGen("b7_s2_H", "b7", "b7_s2", "H", function (rng) {
    const tpl = pick(rng, ["series_find_R2", "parallel_find_R2", "series_vs_parallel_I"]);

    if (tpl === "series_find_R2") {
      const r1 = randInt(rng, 2, 10);
      const r2 = randInt(rng, 3, 14);
      const iVal = pick(rng, [0.5, 1, 1.5, 2, 3]);
      const vTot = Math.round(iVal * (r1 + r2) * 100) / 100;
      const q = `Sebuah perintang ${r1} Ω disambungkan secara bersiri dengan satu perintang X kepada sumber kuasa ${fmtDec(vTot)} V. Jika bacaan ammeter dalam litar ialah ${fmtDec(iVal)} A, berapakah nilai rintangan X?`;
      const exp = `Rintangan jumlah R = V ÷ I = ${fmtDec(vTot)} ÷ ${fmtDec(iVal)} = ${r1 + r2} Ω. Oleh sebab bersiri, X = ${r1 + r2} - ${r1} = ${r2} Ω.`;
      const wrongs = numWrongs(r2, "Ω", [r1 + r2, r1 + r2 + r1, Math.max(1, r2 - 2), r2 + 3], true);
      const mcq = buildMcq(rng, q, `${r2} Ω`, wrongs, exp, (s) => `${r2 + s * 2} Ω`);
      return { unit: "b7", skill: "b7_s2", diff: "H", template: tpl, ...mcq, sig: `b7_s2:H:${tpl}:${r1},${r2},${iVal}` };
    }

    if (tpl === "parallel_find_R2") {
      const [r1, r2, rEff] = pick(rng, PARALLEL_PAIRS);
      const vVal = rEff * randInt(rng, 2, 4);
      const iTot = exactInt(vVal / rEff, "parallel_find_R2:iTot");
      const q = `Perintang ${r1} Ω dan perintang Y disambungkan secara selari kepada bekalan kuasa ${vVal} V. Jika jumlah arus daripada bekalan kuasa ialah ${iTot} A, hitung nilai rintangan perintang Y.`;
      const exp = `Rintangan berkesan R = V ÷ I = ${vVal} ÷ ${iTot} = ${rEff} Ω. Menggunakan 1/${rEff} = 1/${r1} + 1/Y, maka Y = ${r2} Ω.`;
      const wrongs = numWrongs(r2, "Ω", [rEff, Math.max(1, r1 - rEff), r1 + rEff, r2 + 4], true);
      const mcq = buildMcq(rng, q, `${r2} Ω`, wrongs, exp, (s) => `${r2 + s * 2} Ω`);
      return { unit: "b7", skill: "b7_s2", diff: "H", template: tpl, ...mcq, sig: `b7_s2:H:${tpl}:${r1},${r2},${vVal}` };
    }

    // series_vs_parallel_I
    const r = pick(rng, [4, 6, 8, 10, 12]);
    const k = randInt(rng, 1, 4);
    const vVal = 2 * r * k; // Series R = 2r -> I_s = k; Parallel R = r/2 -> I_p = 4k; diff = 3k
    const iSeries = k;
    const iParallel = 4 * k;
    const diffI = iParallel - iSeries;
    const q = `Dua perintang yang serupa bernilai ${r} Ω setiap satu mula-mula disambungkan secara bersiri, kemudian disusun semula secara selari kepada bateri ${vVal} V yang sama. Berapakah pertambahan jumlah arus apabila litar ditukar daripada siri kepada selari?`;
    const exp = `Siri: R = ${2 * r} Ω, I_siri = ${vVal} ÷ ${2 * r} = ${iSeries} A. Selari: R = ${r / 2} Ω, I_selari = ${vVal} ÷ ${r / 2} = ${iParallel} A. Pertambahan arus = ${iParallel} - ${iSeries} = ${diffI} A.`;
    const wrongs = numWrongs(diffI, "A", [iSeries, iParallel, iParallel + iSeries, diffI + 2], true);
    const mcq = buildMcq(rng, q, `${diffI} A`, wrongs, exp, (s) => `${diffI + s} A`);
    return { unit: "b7", skill: "b7_s2", diff: "H", template: tpl, ...mcq, sig: `b7_s2:H:${tpl}:${r},${vVal}` };
  });

  // =========================================================================
  // 3. b8_s2 (unit "b8"): Momen Daya (M = F × d) & Keseimbangan Tuas
  // =========================================================================
  const b8_s2_L = makeGen("b8_s2_L", "b8", "b8_s2", "L", function (rng) {
    const tpl = pick(rng, ["moment_direct_m", "moment_find_F", "lever_balance_m"]);

    if (tpl === "moment_direct_m") {
      const fVal = randInt(rng, 3, 18) * 5; // 15..90 N
      const dVal = pick(rng, [0.4, 0.5, 0.8, 1.2, 1.5, 2, 2.5, 3]);
      const ans = Math.round(fVal * dVal * 100) / 100;
      const obj = pick(rng, ["sepana untuk mengetatkan nat", "pemegang pintu", "tuil penutup tin", "batang besi panjang"]);
      const q = `Satu daya sebanyak ${fVal} N dikenakan secara serenjang pada jarak ${fmtDec(dVal)} m dari fulkrum apabila menggunakan ${obj}. Hitung momen daya yang terhasil.`;
      const exp = `Momen daya = Daya × Jarak serenjang = ${fVal} N × ${fmtDec(dVal)} m = ${fmtDec(ans)} N m.`;
      const wrongs = numWrongs(ans, "N m", [fVal / dVal, fVal + dVal, ans * 2, Math.max(1, ans - 5)], true);
      const mcq = buildMcq(rng, q, `${fmtDec(ans)} N m`, wrongs, exp, (s) => `${fmtDec(ans + s * 4)} N m`);
      return { unit: "b8", skill: "b8_s2", diff: "L", template: tpl, ...mcq, sig: `b8_s2:L:${tpl}:${fVal},${dVal}` };
    }

    if (tpl === "moment_find_F") {
      const fVal = randInt(rng, 4, 20) * 5; // 20..100 N
      const dVal = pick(rng, [0.5, 1.5, 2, 2.5, 3, 4]);
      const mVal = Math.round(fVal * dVal * 100) / 100;
      const q = `Untuk melonggarkan satu nat, momen daya sebanyak ${fmtDec(mVal)} N m diperlukan pada jarak serenjang ${fmtDec(dVal)} m dari pusat nat. Berapakah daya yang perlu dikenakan?`;
      const exp = `Daya = Momen daya ÷ Jarak = ${fmtDec(mVal)} N m ÷ ${fmtDec(dVal)} m = ${fVal} N.`;
      const wrongs = numWrongs(fVal, "N", [mVal * dVal, fVal + 10, Math.max(5, fVal - 10), fVal * 2], true);
      const mcq = buildMcq(rng, q, `${fVal} N`, wrongs, exp, (s) => `${fVal + s * 5} N`);
      return { unit: "b8", skill: "b8_s2", diff: "L", template: tpl, ...mcq, sig: `b8_s2:L:${tpl}:${mVal},${dVal}` };
    }

    // lever_balance_m
    const dLoad = pick(rng, [0.5, 1, 1.5, 2]);
    const mult = randInt(rng, 2, 5);
    const dEffort = dLoad * mult;
    const effort = randInt(rng, 4, 15) * 5;
    const load = exactInt(effort * mult, "lever_balance_m:load");
    const q = `Sebuah tuas berada dalam keadaan seimbang. Beban seberat ${load} N diletakkan ${fmtDec(dLoad)} m dari fulkrum, manakala daya dikenakan pada jarak ${fmtDec(dEffort)} m di sebelah lain fulkrum. Berapakah magnitud daya tersebut?`;
    const exp = `Beban × Jarak beban = Daya × Jarak daya → ${load} × ${fmtDec(dLoad)} = Daya × ${fmtDec(dEffort)}. Daya = ${effort} N.`;
    const wrongs = numWrongs(effort, "N", [load, Math.round(load / 2), effort + 15, effort * 2], true);
    const mcq = buildMcq(rng, q, `${effort} N`, wrongs, exp, (s) => `${effort + s * 5} N`);
    return { unit: "b8", skill: "b8_s2", diff: "L", template: tpl, ...mcq, sig: `b8_s2:L:${tpl}:${load},${dLoad},${dEffort}` };
  });

  const b8_s2_M = makeGen("b8_s2_M", "b8", "b8_s2", "M", function (rng) {
    const tpl = pick(rng, ["moment_cm_to_m", "lever_find_effort_cm", "lever_find_dist_cm"]);

    if (tpl === "moment_cm_to_m") {
      const dCm = pick(rng, [20, 25, 40, 50, 60, 75, 80, 120, 150]);
      const fVal = randInt(rng, 3, 18) * 5; // 15..90 N
      const dM = dCm / 100;
      const ans = Math.round(fVal * dM * 100) / 100;
      const q = `Seorang pekerja menarik pemegang sepana sepanjang ${dCm} cm dari pusat nat dengan daya ${fVal} N secara serenjang. Hitung momen daya yang terhasil dalam unit N m.`;
      const exp = `Tukar jarak: ${dCm} cm = ${fmtDec(dM)} m. Momen daya = ${fVal} N × ${fmtDec(dM)} m = ${fmtDec(ans)} N m.`;
      const wrongs = numWrongs(ans, "N m", [fVal * dCm, ans * 10, fVal / dM, ans + 5], true);
      const mcq = buildMcq(rng, q, `${fmtDec(ans)} N m`, wrongs, exp, (s) => `${fmtDec(ans + s * 3)} N m`);
      return { unit: "b8", skill: "b8_s2", diff: "M", template: tpl, ...mcq, sig: `b8_s2:M:${tpl}:${fVal},${dCm}` };
    }

    if (tpl === "lever_find_effort_cm") {
      const dLoad = pick(rng, [15, 20, 25, 30, 40]);
      const mult = pick(rng, [2, 3, 4, 5]);
      const dEffort = dLoad * mult;
      const effort = randInt(rng, 5, 25) * 2;
      const load = exactInt(effort * mult, "lever_find_effort_cm:load");
      const q = `Dalam suatu sistem tuas seimbang, beban ${load} N terletak ${dLoad} cm dari fulkrum. Berapakah daya yang perlu dikenakan pada jarak ${dEffort} cm dari fulkrum untuk mengimbangi beban tersebut?`;
      const exp = `Beban × Jarak beban = Daya × Jarak daya → ${load} × ${dLoad} = Daya × ${dEffort}. Daya = ${load * dLoad} ÷ ${dEffort} = ${effort} N.`;
      const wrongs = numWrongs(effort, "N", [load, Math.round((load * dEffort) / dLoad), effort + 10, Math.max(2, effort - 10)], true);
      const mcq = buildMcq(rng, q, `${effort} N`, wrongs, exp, (s) => `${effort + s * 4} N`);
      return { unit: "b8", skill: "b8_s2", diff: "M", template: tpl, ...mcq, sig: `b8_s2:M:${tpl}:${load},${dLoad},${dEffort}` };
    }

    // lever_find_dist_cm
    const dLoad = pick(rng, [12, 15, 20, 25, 30]);
    const ratio = pick(rng, [2, 3, 4]);
    const dEffort = dLoad * ratio;
    const effort = randInt(rng, 4, 20) * 5;
    const load = exactInt(effort * ratio, "lever_find_dist_cm:load");
    const q = `Seorang murid ingin mengimbangi beban ${load} N yang berada ${dLoad} cm dari fulkrum menggunakan daya ${effort} N. Pada jarak berapakah dari fulkrum daya itu mesti dikenakan?`;
    const exp = `${load} × ${dLoad} = ${effort} × Jarak daya → Jarak daya = ${load * dLoad} ÷ ${effort} = ${dEffort} cm.`;
    const wrongs = numWrongs(dEffort, "cm", [Math.round(dLoad / ratio), dEffort + 15, Math.max(5, dEffort - 15), dLoad + effort], true);
    const mcq = buildMcq(rng, q, `${dEffort} cm`, wrongs, exp, (s) => `${dEffort + s * 10} cm`);
    return { unit: "b8", skill: "b8_s2", diff: "M", template: tpl, ...mcq, sig: `b8_s2:M:${tpl}:${load},${dLoad},${effort}` };
  });

  const b8_s2_H = makeGen("b8_s2_H", "b8", "b8_s2", "H", function (rng) {
    const tpl = pick(rng, ["lever_ruler_offset_kg", "lever_two_loads", "lever_shift_effort"]);

    if (tpl === "lever_ruler_offset_kg") {
      // A uniform meter ruler pivoted at 50 cm (so ruler's own weight causes zero moment!)
      const dLoad = pick(rng, [20, 25, 30, 40]);
      const dEffort = pick(rng, [10, 20, 25, 40, 50].filter((x) => x !== dLoad && (dLoad * 10) % x === 0 || x <= dLoad));
      const mult = pick(rng, [2, 3, 4]);
      const dL = pick(rng, [20, 30, 40]);
      const dE = pick(rng, [10, 15, 20, 25, 30, 40]);
      const mLoad = randInt(rng, 1, 6); // kg
      const wLoad = mLoad * 10; // g = 10 N/kg
      // Make sure (wLoad * dL) / dE is exact integer: choose dL_clean, dE_clean
      const pairs = [
        { dL: 40, dE: 20 }, { dL: 30, dE: 15 }, { dL: 45, dE: 30 },
        { dL: 30, dE: 50 }, { dL: 20, dE: 40 }, { dL: 40, dE: 50 },
        { dL: 25, dE: 50 }, { dL: 36, dE: 45 }
      ];
      const pr = pick(rng, pairs);
      const mFinal = pr.dE === 30 || pr.dE === 45 ? pick(rng, [3, 6, 9]) : pick(rng, [2, 3, 4, 5, 6]);
      const wFinal = mFinal * 10;
      const effort = exactInt((wFinal * pr.dL) / pr.dE, "lever_ruler_offset_kg:effort");
      const posLoad = 50 - pr.dL;
      const posEffort = 50 + pr.dE;
      const q = `Sebatang pembaris meter seragam (0 cm hingga 100 cm) dipaksikann pada tanda 50 cm. Satu pemberat berjisim ${mFinal} kg digantung pada tanda ${posLoad} cm. Jika g = 10 N/kg, berapakah daya yang perlu dikenakan ke bawah pada tanda ${posEffort} cm supaya pembaris itu kekal mendatar?`;
      // Fix typo "dipaksikann" -> "dipaksikan"
      const qClean = q.replace("dipaksikann", "dipaksikan");
      const exp = `Berat pemberat = ${mFinal} × 10 = ${wFinal} N. Jarak beban dari fulkrum = 50 - ${posLoad} = ${pr.dL} cm. Jarak daya = ${posEffort} - 50 = ${pr.dE} cm. Maka ${wFinal} × ${pr.dL} = Daya × ${pr.dE} → Daya = ${effort} N.`;
      const wrongs = numWrongs(effort, "N", [Math.round((wFinal * posLoad) / posEffort), effort + 10, Math.max(2, effort - 10), wFinal], true);
      const mcq = buildMcq(rng, qClean, `${effort} N`, wrongs, exp, (s) => `${effort + s * 5} N`);
      return { unit: "b8", skill: "b8_s2", diff: "H", template: tpl, ...mcq, sig: `b8_s2:H:${tpl}:${mFinal},${pr.dL},${pr.dE}` };
    }

    if (tpl === "lever_two_loads") {
      const d1 = pick(rng, [10, 20, 30]);
      const d2 = pick(rng, [20, 40, 50]);
      const dE = pick(rng, [25, 40, 50]);
      const w1 = randInt(rng, 2, 8) * 10;
      const w2 = randInt(rng, 2, 8) * 10;
      // Ensure (w1*d1 + w2*d2) divisible by dE cleanly: pick w1,w2 multiples of 10 -> numerator multiple of 100
      const num = w1 * d1 + w2 * d2; // multiple of 100! And dE divides 100? 25 divides 100, 50 divides 100! Wait 40: make w1,w2 multiples of 20 if dE=40
      const dESafe = dE === 40 && num % 40 !== 0 ? 50 : dE;
      const effort = exactInt(num / dESafe, "lever_two_loads:effort");
      const q = `Pada sebelah kiri fulkrum sebuah tuas, beban ${w1} N digantung pada jarak ${d1} cm dan satu lagi beban ${w2} N digantung pada jarak ${d2} cm. Berapakah daya ke bawah pada jarak ${dESafe} cm di sebelah kanan fulkrum untuk mengimbangi tuas itu?`;
      const exp = `Jumlah momen kiri = (${w1} × ${d1}) + (${w2} × ${d2}) = ${num} N cm. Daya = ${num} ÷ ${dESafe} = ${effort} N.`;
      const wrongs = numWrongs(effort, "N", [w1 + w2, Math.round(((w1 + w2) * (d1 + d2)) / dESafe), effort + 15, Math.max(4, effort - 15)], true);
      const mcq = buildMcq(rng, q, `${effort} N`, wrongs, exp, (s) => `${effort + s * 6} N`);
      return { unit: "b8", skill: "b8_s2", diff: "H", template: tpl, ...mcq, sig: `b8_s2:H:${tpl}:${w1},${d1},${w2},${d2},${dESafe}` };
    }

    // lever_shift_effort
    const dLoad = pick(rng, [20, 25, 30]);
    const d1 = dLoad * 2;
    const d2 = dLoad * 4;
    const e2 = randInt(rng, 3, 12) * 5; // effort at d2
    const load = exactInt(e2 * 4, "lever_shift_effort:load");
    const e1 = exactInt(load / 2, "lever_shift_effort:e1");
    const diffE = e1 - e2;
    const q = `Seorang pekerja menggunakan tuas untuk mengangkat batu seberat ${load} N yang terletak ${dLoad} cm dari fulkrum. Pada mulanya, dia menekan pada jarak ${d1} cm dari fulkrum, kemudian mengalihkan tangannya ke jarak ${d2} cm dari fulkrum. Berapakah pengurangan daya yang diperlukan?`;
    const exp = `Daya asal pada ${d1} cm = (${load} × ${dLoad}) ÷ ${d1} = ${e1} N. Daya baharu pada ${d2} cm = (${load} × ${dLoad}) ÷ ${d2} = ${e2} N. Pengurangan daya = ${e1} - ${e2} = ${diffE} N.`;
    const wrongs = numWrongs(diffE, "N", [e1, e2, diffE + 15, load - e2], true);
    const mcq = buildMcq(rng, q, `${diffE} N`, wrongs, exp, (s) => `${diffE + s * 5} N`);
    return { unit: "b8", skill: "b8_s2", diff: "H", template: tpl, ...mcq, sig: `b8_s2:H:${tpl}:${load},${dLoad},${d1},${d2}` };
  });

  // =========================================================================
  // 4. b8_s3 (unit "b8"): Tekanan (P = F / A)
  // =========================================================================
  const b8_s3_L = makeGen("b8_s3_L", "b8", "b8_s3", "L", function (rng) {
    const tpl = pick(rng, ["pressure_direct_pa", "pressure_find_F", "pressure_ncm2"]);

    if (tpl === "pressure_direct_pa") {
      const area = pick(rng, [0.5, 2, 3, 4, 5, 8, 10]);
      const pVal = randInt(rng, 4, 25) * 20; // 80..500 Pa
      const force = exactInt(pVal * area, "pressure_direct_pa:F");
      const q = `Satu kotak mengenakan daya sebesar ${force} N ke atas lantai dengan luas permukaan sentuhan ${fmtDec(area)} m². Hitung tekanan yang dikenakan oleh kotak itu dalam unit Pa.`;
      const exp = `Tekanan P = Daya ÷ Luas = ${force} N ÷ ${fmtDec(area)} m² = ${pVal} Pa.`;
      const wrongs = numWrongs(pVal, "Pa", [force * area, pVal * 2, Math.max(10, Math.round(pVal / 2)), pVal + 40], true);
      const mcq = buildMcq(rng, q, `${pVal} Pa`, wrongs, exp, (s) => `${pVal + s * 25} Pa`);
      return { unit: "b8", skill: "b8_s3", diff: "L", template: tpl, ...mcq, sig: `b8_s3:L:${tpl}:${force},${area}` };
    }

    if (tpl === "pressure_find_F") {
      const area = pick(rng, [0.5, 1.5, 2, 2.5, 3, 4, 5]);
      const pVal = randInt(rng, 4, 20) * 50; // 200..1000 Pa
      const force = exactInt(pVal * area, "pressure_find_F:F");
      const q = `Sebuah blok kayu mempunyai luas tapak ${fmtDec(area)} m² dan mengenakan tekanan sebanyak ${pVal} Pa ke atas meja. Berapakah berat blok kayu tersebut?`;
      const exp = `Daya (Berat) = Tekanan × Luas = ${pVal} Pa × ${fmtDec(area)} m² = ${force} N.`;
      const wrongs = numWrongs(force, "N", [Math.round(pVal / area), force + 100, Math.max(20, force - 100), force * 2], true);
      const mcq = buildMcq(rng, q, `${force} N`, wrongs, exp, (s) => `${force + s * 50} N`);
      return { unit: "b8", skill: "b8_s3", diff: "L", template: tpl, ...mcq, sig: `b8_s3:L:${tpl}:${pVal},${area}` };
    }

    // pressure_ncm2
    const areaCm2 = pick(rng, [4, 5, 8, 10, 12, 15, 20, 25, 40, 50]);
    const pVal = randInt(rng, 3, 25);
    const force = pVal * areaCm2;
    const q = `Satu daya ${force} N bertindak ke atas permukaan seluas ${areaCm2} cm². Hitung tekanan yang terhasil dalam unit N/cm².`;
    const exp = `Tekanan = ${force} N ÷ ${areaCm2} cm² = ${pVal} N/cm².`;
    const wrongs = numWrongs(pVal, "N/cm²", [force * areaCm2, pVal + 5, Math.max(1, pVal - 3), pVal * 2], true);
    const mcq = buildMcq(rng, q, `${pVal} N/cm²`, wrongs, exp, (s) => `${pVal + s * 2} N/cm²`);
    return { unit: "b8", skill: "b8_s3", diff: "L", template: tpl, ...mcq, sig: `b8_s3:L:${tpl}:${force},${areaCm2}` };
  });

  const b8_s3_M = makeGen("b8_s3_M", "b8", "b8_s3", "M", function (rng) {
    const tpl = pick(rng, ["pressure_cm2_to_pa", "pressure_mass_to_pa", "pressure_find_area_cm2"]);

    if (tpl === "pressure_cm2_to_pa") {
      const areaCm2 = pick(rng, [100, 200, 250, 400, 500, 1000, 2000, 2500, 5000]);
      const pKpa = randInt(rng, 2, 20); // 2000..20000 Pa
      const pVal = pKpa * 1000;
      const force = exactInt((pVal * areaCm2) / 10000, "pressure_cm2_to_pa:F");
      const q = `Daya sebanyak ${force} N dikenakan pada luas permukaan ${areaCm2} cm². Hitung tekanan yang dikenakan dalam unit Pascal (Pa).`;
      const exp = `Tukar luas: ${areaCm2} cm² = ${fmtDec(areaCm2 / 10000, 4)} m². Tekanan P = ${force} N ÷ ${fmtDec(areaCm2 / 10000, 4)} m² = ${pVal} Pa.`;
      const wrongs = numWrongs(pVal, "Pa", [force / areaCm2, pVal / 10, pVal * 10, pVal + 2000], true);
      const mcq = buildMcq(rng, q, `${pVal} Pa`, wrongs, exp, (s) => `${pVal + s * 1000} Pa`);
      return { unit: "b8", skill: "b8_s3", diff: "M", template: tpl, ...mcq, sig: `b8_s3:M:${tpl}:${force},${areaCm2}` };
    }

    if (tpl === "pressure_mass_to_pa") {
      const area = pick(rng, [0.2, 0.25, 0.4, 0.5, 1.5, 2, 2.5, 4]);
      const mass = pick(rng, [3, 6, 9, 12, 15, 18, 24, 30, 40, 50]);
      // ensure (mass * 10) / area is integer: if area = 1.5, mass must be multiple of 3 (true if we pick area != 1.5 or handle)
      const safeMass = area === 1.5 && mass % 3 !== 0 ? 15 : mass;
      const weight = safeMass * 10;
      const pVal = exactInt(weight / area, "pressure_mass_to_pa:P");
      const q = `Sebuah bongkah logam berjisim ${safeMass} kg diletakkan di atas lantai dengan luas tapak ${fmtDec(area)} m². Jika g = 10 N/kg, berapakah tekanan yang dikenakan oleh bongkah itu ke atas lantai?`;
      const exp = `Berat bongkah F = ${safeMass} kg × 10 N/kg = ${weight} N. Tekanan P = ${weight} N ÷ ${fmtDec(area)} m² = ${pVal} Pa.`;
      const wrongs = numWrongs(pVal, "Pa", [Math.round(safeMass / area), Math.round(weight * area), pVal + 50, Math.max(10, pVal - 50)], true);
      const mcq = buildMcq(rng, q, `${pVal} Pa`, wrongs, exp, (s) => `${pVal + s * 20} Pa`);
      return { unit: "b8", skill: "b8_s3", diff: "M", template: tpl, ...mcq, sig: `b8_s3:M:${tpl}:${safeMass},${area}` };
    }

    // pressure_find_area_cm2
    const areaCm2 = pick(rng, [100, 200, 250, 400, 500, 800, 1000, 2000, 2500]);
    const pVal = randInt(rng, 2, 15) * 1000;
    const force = exactInt((pVal * areaCm2) / 10000, "pressure_find_area_cm2:F");
    const q = `Satu beban seberat ${force} N menghasilkan tekanan sebanyak ${pVal} Pa ke atas permukaan rata. Hitung luas permukaan sentuhan dalam unit cm².`;
    const exp = `Luas A = F ÷ P = ${force} ÷ ${pVal} = ${fmtDec(areaCm2 / 10000, 4)} m² = ${areaCm2} cm².`;
    const wrongs = numWrongs(areaCm2, "cm²", [areaCm2 / 10, areaCm2 * 10, areaCm2 + 200, Math.max(50, areaCm2 - 150)], true);
    const mcq = buildMcq(rng, q, `${areaCm2} cm²`, wrongs, exp, (s) => `${areaCm2 + s * 100} cm²`);
    return { unit: "b8", skill: "b8_s3", diff: "M", template: tpl, ...mcq, sig: `b8_s3:M:${tpl}:${force},${pVal}` };
  });

  const b8_s3_H = makeGen("b8_s3_H", "b8", "b8_s3", "H", function (rng) {
    const tpl = pick(rng, ["pressure_cuboid_max_min", "pressure_combined_load", "pressure_compare_diff"]);

    if (tpl === "pressure_cuboid_max_min") {
      const dims = pick(rng, [
        [10, 20, 40], [5, 10, 20], [10, 25, 40],
        [20, 25, 50], [10, 20, 50], [10, 10, 50]
      ]);
      const [a, b, c] = dims; // sorted ascending
      const minAreaCm2 = a * b;
      const maxAreaCm2 = b * c;
      const askMax = pick(rng, [true, false]);
      const mass = pick(rng, [4, 6, 8, 10, 12, 16, 20]);
      const weight = mass * 10;
      const targetCm2 = askMax ? minAreaCm2 : maxAreaCm2;
      const pVal = exactInt((weight * 10000) / targetCm2, "pressure_cuboid_max_min:P");
      const label = askMax ? "tekanan maksimum" : "tekanan minimum";
      const q = `Sebuah bongkah kuboid berjisim ${mass} kg berukuran ${a} cm × ${b} cm × ${c} cm diletakkan di atas permukaan rata. Diberi g = 10 N/kg, hitung ${label} yang dapat dikenakan oleh bongkah itu dalam unit Pa.`;
      const exp = `Berat bongkah = ${mass} × 10 = ${weight} N. ${askMax ? `Tekanan maksimum berlaku pada muka terkecil (${a} cm × ${b} cm = ${minAreaCm2} cm² = ${fmtDec(minAreaCm2 / 10000, 4)} m²)` : `Tekanan minimum berlaku pada muka terbesar (${b} cm × ${c} cm = ${maxAreaCm2} cm² = ${fmtDec(maxAreaCm2 / 10000, 4)} m²)`}. Tekanan = ${weight} ÷ ${fmtDec(targetCm2 / 10000, 4)} = ${pVal} Pa.`;
      const otherP = exactInt((weight * 10000) / (askMax ? maxAreaCm2 : minAreaCm2));
      const midP = Math.round((weight * 10000) / (a * c));
      const wrongs = numWrongs(pVal, "Pa", [otherP, midP, pVal / 10, pVal + 500], true);
      const mcq = buildMcq(rng, q, `${pVal} Pa`, wrongs, exp, (s) => `${pVal + s * 400} Pa`);
      return { unit: "b8", skill: "b8_s3", diff: "H", template: tpl, ...mcq, sig: `b8_s3:H:${tpl}:${a},${b},${c},${mass},${askMax}` };
    }

    if (tpl === "pressure_combined_load") {
      const areaCm2 = pick(rng, [500, 1000, 2000, 2500, 4000, 5000]);
      const m1 = randInt(rng, 30, 65);
      const m2 = randInt(rng, 2, 10);
      const totalF = (m1 + m2) * 10;
      const pVal = exactInt((totalF * 10000) / areaCm2, "pressure_combined_load:P");
      const q = `Seorang murid berjisim ${m1} kg berdiri di atas sekeping papan kayu berjisim ${m2} kg yang mempunyai luas tapak ${areaCm2} cm². Jika g = 10 N/kg, berapakah jumlah tekanan yang dikenakan pada tanah?`;
      const exp = `Jumlah berat = (${m1} + ${m2}) × 10 = ${totalF} N. Luas = ${areaCm2} cm² = ${fmtDec(areaCm2 / 10000, 4)} m². Tekanan = ${totalF} ÷ ${fmtDec(areaCm2 / 10000, 4)} = ${pVal} Pa.`;
      const wrongs = numWrongs(pVal, "Pa", [Math.round((m1 * 10 * 10000) / areaCm2), Math.round((m2 * 10 * 10000) / areaCm2), pVal / 10, pVal + 500], true);
      const mcq = buildMcq(rng, q, `${pVal} Pa`, wrongs, exp, (s) => `${pVal + s * 200} Pa`);
      return { unit: "b8", skill: "b8_s3", diff: "H", template: tpl, ...mcq, sig: `b8_s3:H:${tpl}:${m1},${m2},${areaCm2}` };
    }

    // pressure_compare_diff
    const areaA = pick(rng, [200, 250, 400, 500]);
    const areaB = pick(rng, [1000, 2000, 2500]);
    const pA = randInt(rng, 8, 20) * 1000;
    const pB = randInt(rng, 2, 6) * 1000;
    const fA = exactInt((pA * areaA) / 10000);
    const fB = exactInt((pB * areaB) / 10000);
    const diffP = pA - pB;
    const q = `Blok P mengenakan daya ${fA} N pada luas sentuhan ${areaA} cm², manakala Blok Q mengenakan daya ${fB} N pada luas sentuhan ${areaB} cm². Hitung perbezaan tekanan antara Blok P dengan Blok Q dalam unit Pa.`;
    const exp = `Tekanan P = ${fA} ÷ ${fmtDec(areaA / 10000, 4)} = ${pA} Pa. Tekanan Q = ${fB} ÷ ${fmtDec(areaB / 10000, 4)} = ${pB} Pa. Perbezaan = ${pA} - ${pB} = ${diffP} Pa.`;
    const wrongs = numWrongs(diffP, "Pa", [pA + pB, pA, pB, diffP + 1000], true);
    const mcq = buildMcq(rng, q, `${diffP} Pa`, wrongs, exp, (s) => `${diffP + s * 500} Pa`);
    return { unit: "b8", skill: "b8_s3", diff: "H", template: tpl, ...mcq, sig: `b8_s3:H:${tpl}:${fA},${areaA},${fB},${areaB}` };
  });

  // =========================================================================
  // 5. b10_s2 (unit "b10"): Kelajuan Bunyi (v = d/t) & Jarak Gema/Sonar (d = vt/2)
  // =========================================================================
  const b10_s2_L = makeGen("b10_s2_L", "b10", "b10_s2", "L", function (rng) {
    const tpl = pick(rng, ["sound_speed_direct", "sound_echo_depth", "sound_oneway_dist"]);

    if (tpl === "sound_speed_direct") {
      const vVal = pick(rng, [330, 340, 350, 1500, 5000]);
      const tVal = randInt(rng, 2, 9);
      const dVal = vVal * tVal;
      const med = vVal < 400 ? "udara" : vVal === 1500 ? "air laut" : "batang besi";
      const q = `Gelombang bunyi merambat sejauh ${dVal} m melalui ${med} dalam masa ${tVal} saat. Berapakah kelajuan bunyi dalam medium tersebut?`;
      const exp = `Kelajuan bunyi v = Jarak ÷ Masa = ${dVal} m ÷ ${tVal} s = ${vVal} m/s.`;
      const wrongs = numWrongs(vVal, "m/s", [vVal * 2, Math.round(vVal / 2), vVal + 50, Math.max(50, vVal - 40)], true);
      const mcq = buildMcq(rng, q, `${vVal} m/s`, wrongs, exp, (s) => `${vVal + s * 20} m/s`);
      return { unit: "b10", skill: "b10_s2", diff: "L", template: tpl, ...mcq, sig: `b10_s2:L:${tpl}:${vVal},${tVal}` };
    }

    if (tpl === "sound_echo_depth") {
      const isSea = pick(rng, [true, false]);
      const vVal = isSea ? 1500 : pick(rng, [330, 340]);
      const tVal = pick(rng, [2, 3, 4, 5, 6, 8]);
      const dVal = exactInt((vVal * tVal) / 2, "sound_echo_depth:d");
      const q = isSea
        ? `Sebuah kapal memancarkan isyarat sonar ke dasar laut dan menerima gema pantulannya selepas ${tVal} saat. Jika kelajuan bunyi di dalam air laut ialah ${vVal} m/s, berapakah kedalaman laut di kawasan itu?`
        : `Seorang murid menjerit ke arah sebuah tebing batu dan mendengar gema suaranya selepas ${tVal} saat. Jika kelajuan bunyi di udara ialah ${vVal} m/s, berapakah jarak antara murid itu dengan tebing batu?`;
      const exp = `Jarak d = (v × t) ÷ 2 = (${vVal} × ${tVal}) ÷ 2 = ${dVal} m.`;
      const wrongs = numWrongs(dVal, "m", [vVal * tVal, Math.round(vVal / tVal), dVal + 150, Math.max(50, dVal - 150)], true);
      const mcq = buildMcq(rng, q, `${dVal} m`, wrongs, exp, (s) => `${dVal + s * 100} m`);
      return { unit: "b10", skill: "b10_s2", diff: "L", template: tpl, ...mcq, sig: `b10_s2:L:${tpl}:${isSea},${vVal},${tVal}` };
    }

    // sound_oneway_dist
    const vVal = pick(rng, [330, 340]);
    const tVal = randInt(rng, 2, 10);
    const dVal = vVal * tVal;
    const q = `Seorang pemerhati melihat kilat dan mendengar bunyi guruh ${tVal} saat kemudian. Jika kelajuan bunyi di udara ialah ${vVal} m/s, berapakah jarak berlakunya kilat dari pemerhati itu?`;
    const exp = `Bunyi guruh merambat sehala sahaja: Jarak d = v × t = ${vVal} m/s × ${tVal} s = ${dVal} m.`;
    const wrongs = numWrongs(dVal, "m", [Math.round(dVal / 2), dVal * 2, dVal + vVal, Math.max(100, dVal - vVal)], true);
    const mcq = buildMcq(rng, q, `${dVal} m`, wrongs, exp, (s) => `${dVal + s * 100} m`);
    return { unit: "b10", skill: "b10_s2", diff: "L", template: tpl, ...mcq, sig: `b10_s2:L:${tpl}:${vVal},${tVal}` };
  });

  const b10_s2_M = makeGen("b10_s2_M", "b10", "b10_s2", "M", function (rng) {
    const tpl = pick(rng, ["sound_echo_find_time", "sound_echo_find_speed", "sound_echo_decimal_km"]);

    if (tpl === "sound_echo_find_time") {
      const isSea = pick(rng, [true, false]);
      const vVal = isSea ? 1500 : pick(rng, [320, 330, 340]);
      const tPool = vVal % 20 === 0 ? [0.5, 0.8, 1.2, 1.5, 2, 2.5, 3, 4] : [0.8, 1.2, 2, 2.4, 3, 4];
      const tVal = pick(rng, tPool);
      const dVal = exactInt((vVal * tVal) / 2, "sound_echo_find_time:d");
      const q = isSea
        ? `Kedalaman dasar laut di suatu lokasi ialah ${dVal} m. Jika kelajuan ultrabunyi dalam air laut ialah ${vVal} m/s, berapakah masa yang diambil untuk isyarat sonar kembali semula ke kapal?`
        : `Sebuah dinding konkrit terletak ${dVal} m dari seorang murid yang menepuk tangan. Jika kelajuan bunyi di udara ialah ${vVal} m/s, selepas berapakah masa gema tepukan itu akan kedengaran?`;
      const exp = `Masa ulang-alik t = (2 × d) ÷ v = (2 × ${dVal}) ÷ ${vVal} = ${fmtDec(tVal)} saat.`;
      const wrongs = numWrongs(tVal, "saat", [tVal / 2, tVal * 2, tVal + 1, Math.max(0.2, tVal - 0.4)], true);
      const mcq = buildMcq(rng, q, `${fmtDec(tVal)} saat`, wrongs, exp, (s) => `${fmtDec(tVal + s * 0.5)} saat`);
      return { unit: "b10", skill: "b10_s2", diff: "M", template: tpl, ...mcq, sig: `b10_s2:M:${tpl}:${isSea},${vVal},${dVal}` };
    }

    if (tpl === "sound_echo_find_speed") {
      const vVal = pick(rng, [320, 330, 340, 350, 1480, 1500]);
      const tPool = vVal % 20 === 0 ? [1.5, 2, 2.5, 3, 4] : [2, 2.4, 3, 4];
      const tVal = pick(rng, tPool);
      const dVal = exactInt((vVal * tVal) / 2, "sound_echo_find_speed:d");
      const isSea = vVal > 1000;
      const q = isSea
        ? `Sebuah kapal mengukur kedalaman laut sejauh ${dVal} m menggunakan gelombang sonar yang mengambil masa ${fmtDec(tVal)} saat untuk kembali. Hitung kelajuan gelombang sonar dalam air laut itu.`
        : `Seorang pelajar berdiri ${dVal} m dari sebuah bangunan tinggi dan mendengar gema wiselnya selepas ${fmtDec(tVal)} saat. Berapakah kelajuan bunyi di udara ketika itu?`;
      const exp = `Kelajuan v = (2 × d) ÷ t = (2 × ${dVal}) ÷ ${fmtDec(tVal)} = ${vVal} m/s.`;
      const wrongs = numWrongs(vVal, "m/s", [Math.round(dVal / tVal), vVal * 2, vVal + 40, Math.max(50, vVal - 40)], true);
      const mcq = buildMcq(rng, q, `${vVal} m/s`, wrongs, exp, (s) => `${vVal + s * 20} m/s`);
      return { unit: "b10", skill: "b10_s2", diff: "M", template: tpl, ...mcq, sig: `b10_s2:M:${tpl}:${vVal},${tVal}` };
    }

    // sound_echo_decimal_km
    const tVal = pick(rng, [1.6, 2.4, 3.2, 3.6, 4.4, 4.8, 5.2, 6.4, 7.2]);
    const vVal = 1500;
    const dM = exactInt((vVal * tVal) / 2);
    const dKm = Math.round((dM / 1000) * 100) / 100;
    const q = `Isyarat sonar yang dipancarkan oleh sebuah kapal penyelidik mengambil masa ${fmtDec(tVal)} saat untuk kembali dari dasar laut. Diberi kelajuan bunyi di dalam air laut ialah 1500 m/s, nyatakan kedalaman laut tersebut dalam unit kilometer (km).`;
    const exp = `Kedalaman d = (1500 × ${fmtDec(tVal)}) ÷ 2 = ${dM} m = ${fmtDec(dKm)} km.`;
    const wrongs = numWrongs(dKm, "km", [dKm * 2, Math.round(dKm / 2 * 100) / 100, dKm + 0.6, Math.max(0.2, dKm - 0.6)], true);
    const mcq = buildMcq(rng, q, `${fmtDec(dKm)} km`, wrongs, exp, (s) => `${fmtDec(dKm + s * 0.4)} km`);
    return { unit: "b10", skill: "b10_s2", diff: "M", template: tpl, ...mcq, sig: `b10_s2:M:${tpl}:${tVal}` };
  });

  const b10_s2_H = makeGen("b10_s2_H", "b10", "b10_s2", "H", function (rng) {
    const tpl = pick(rng, ["sound_two_cliffs", "sound_two_depths_diff", "sound_medium_time_diff"]);

    if (tpl === "sound_two_cliffs") {
      const vVal = pick(rng, [320, 330, 340]);
      const t1Pool = vVal % 20 === 0 ? [1, 1.5, 2, 2.5, 3] : [1, 2, 3, 4];
      const dtPool = vVal % 20 === 0 ? [1, 1.5, 2, 3] : [1, 2, 3];
      const t1 = pick(rng, t1Pool);
      const t2 = t1 + pick(rng, dtPool);
      const d1 = exactInt((vVal * t1) / 2);
      const d2 = exactInt((vVal * t2) / 2);
      const totalD = d1 + d2;
      const q = `Seorang pendaki berdiri di antara dua buah tebing batu yang selari dan meniup wisel. Dia mendengar gema pertama selepas ${fmtDec(t1)} saat dan gema kedua selepas ${fmtDec(t2)} saat. Jika kelajuan bunyi di udara ialah ${vVal} m/s, berapakah jumlah jarak antara kedua-dua tebing batu itu?`;
      const exp = `Jarak tebing pertama = (${vVal} × ${fmtDec(t1)}) ÷ 2 = ${d1} m. Jarak tebing kedua = (${vVal} × ${fmtDec(t2)}) ÷ 2 = ${d2} m. Jumlah jarak = ${d1} + ${d2} = ${totalD} m.`;
      const wrongs = numWrongs(totalD, "m", [vVal * (t1 + t2), Math.abs(d2 - d1), totalD + vVal, Math.max(100, totalD - vVal)], true);
      const mcq = buildMcq(rng, q, `${totalD} m`, wrongs, exp, (s) => `${totalD + s * 100} m`);
      return { unit: "b10", skill: "b10_s2", diff: "H", template: tpl, ...mcq, sig: `b10_s2:H:${tpl}:${vVal},${t1},${t2}` };
    }

    if (tpl === "sound_two_depths_diff") {
      const t1 = pick(rng, [1.2, 1.6, 2.0, 2.4, 3.0]);
      const t2 = t1 + pick(rng, [0.8, 1.2, 1.6, 2.0, 2.4]);
      const vVal = 1500;
      const d1 = exactInt((vVal * t1) / 2);
      const d2 = exactInt((vVal * t2) / 2);
      const diffD = d2 - d1;
      const q = `Sebuah kapal belayar dari titik P ke titik Q sambil mengukur kedalaman laut. Gema sonar diterima selepas ${fmtDec(t1)} saat di titik P dan selepas ${fmtDec(t2)} saat di titik Q. Jika kelajuan bunyi di dalam air laut ialah 1500 m/s, hitung perbezaan kedalaman laut antara titik P dengan titik Q.`;
      const exp = `Kedalaman di P = (1500 × ${fmtDec(t1)}) ÷ 2 = ${d1} m. Kedalaman di Q = (1500 × ${fmtDec(t2)}) ÷ 2 = ${d2} m. Perbezaan = ${d2} - ${d1} = ${diffD} m.`;
      const wrongs = numWrongs(diffD, "m", [diffD * 2, d1 + d2, diffD + 300, Math.max(100, diffD - 300)], true);
      const mcq = buildMcq(rng, q, `${diffD} m`, wrongs, exp, (s) => `${diffD + s * 150} m`);
      return { unit: "b10", skill: "b10_s2", diff: "H", template: tpl, ...mcq, sig: `b10_s2:H:${tpl}:${t1},${t2}` };
    }

    // sound_medium_time_diff (air 340 m/s vs steel 5100 m/s -> 5100 = 15 * 340)
    const k = randInt(rng, 1, 5);
    const dist = k * 5100;
    const tSteel = k;
    const tAir = 15 * k;
    const diffT = tAir - tSteel; // 14 * k
    const q = `Seorang pekerja mengetuk hujung sebatang paip keluli sepanjang ${dist} m. Jika kelajuan bunyi dalam keluli ialah 5100 m/s dan di udara ialah 340 m/s, hitung sela masa antara dua bunyi yang didengar oleh rakan di hujung satu lagi.`;
    const exp = `Masa melalui keluli = ${dist} ÷ 5100 = ${tSteel} s. Masa melalui udara = ${dist} ÷ 340 = ${tAir} s. Sela masa = ${tAir} - ${tSteel} = ${diffT} saat.`;
    const wrongs = numWrongs(diffT, "saat", [tAir + tSteel, tAir, diffT * 2, diffT + 4], true);
    const mcq = buildMcq(rng, q, `${diffT} saat`, wrongs, exp, (s) => `${diffT + s * 2} saat`);
    return { unit: "b10", skill: "b10_s2", diff: "H", template: tpl, ...mcq, sig: `b10_s2:H:${tpl}:${dist}` };
  });

  // =========================================================================
  // 6. b12_s2 (unit "b12"): Unit Astronomi (1 AU = 1.5×10^8 km) & Tahun Cahaya (1 ly = 9.5×10^12 km)
  // =========================================================================
  const b12_s2_L = makeGen("b12_s2_L", "b12", "b12_s2", "L", function (rng) {
    const tpl = pick(rng, ["astro_au_to_km", "astro_km_to_au", "astro_ly_to_km"]);

    if (tpl === "astro_au_to_km") {
      const au = pick(rng, [2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 20, 30]);
      const kmVal = au * 1.5e8;
      const ans = `${fmtSci(kmVal)} km`;
      const q = `Jarak sebuah planet dari Matahari ialah ${au} AU. Jika 1 AU = 1.5 × 10^8 km, berapakah jarak planet itu dari Matahari dalam kilometer (km)?`;
      const exp = `Jarak = ${au} × (1.5 × 10^8 km) = ${fmtSci(kmVal)} km.`;
      const wrongs = [
        `${fmtSci((au + 2) * 1.5e8)} km`,
        `${fmtSci(Math.max(1, au - 1) * 1.5e8)} km`,
        `${fmtSci(kmVal * 10)} km`,
        `${fmtSci(au * 9.5e12)} km`
      ];
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtSci((au + s + 3) * 1.5e8)} km`);
      return { unit: "b12", skill: "b12_s2", diff: "L", template: tpl, ...mcq, sig: `b12_s2:L:${tpl}:${au}` };
    }

    if (tpl === "astro_km_to_au") {
      const au = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30]);
      const kmStr = fmtSci(au * 1.5e8);
      const ans = `${au} AU`;
      const q = `Suatu planet terletak pada jarak ${kmStr} km dari Matahari. Diberi 1 AU = 1.5 × 10^8 km, nyatakan jarak tersebut dalam Unit Astronomi (AU).`;
      const exp = `Jarak dalam AU = (${kmStr} km) ÷ (1.5 × 10^8 km) = ${au} AU.`;
      const wrongs = numWrongs(au, "AU", [au * 10, au + 3, Math.max(1, au - 2), au * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${au + s + 4} AU`);
      return { unit: "b12", skill: "b12_s2", diff: "L", template: tpl, ...mcq, sig: `b12_s2:L:${tpl}:${au}` };
    }

    // astro_ly_to_km
    const ly = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12, 20]);
    const kmVal = ly * 9.5e12;
    const ans = `${fmtSci(kmVal)} km`;
    const q = `Sebuah bintang terletak pada jarak ${ly} tahun cahaya (ly) dari Bumi. Jika 1 ly = 9.5 × 10^12 km, berapakah jarak bintang itu dalam unit kilometer (km)?`;
    const exp = `Jarak = ${ly} × (9.5 × 10^12 km) = ${fmtSci(kmVal)} km.`;
    const wrongs = [
      `${fmtSci((ly + 2) * 9.5e12)} km`,
      `${fmtSci(Math.max(1, ly - 1) * 9.5e12)} km`,
      `${fmtSci(kmVal / 10)} km`,
      `${fmtSci(ly * 1.5e8)} km`
    ];
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtSci((ly + s + 3) * 9.5e12)} km`);
    return { unit: "b12", skill: "b12_s2", diff: "L", template: tpl, ...mcq, sig: `b12_s2:L:${tpl}:${ly}` };
  });

  const b12_s2_M = makeGen("b12_s2_M", "b12", "b12_s2", "M", function (rng) {
    const tpl = pick(rng, ["astro_km_to_ly", "astro_dec_au_to_km", "astro_planet_diff_km"]);

    if (tpl === "astro_km_to_ly") {
      const ly = pick(rng, [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15]);
      const kmStr = fmtSci(ly * 9.5e12);
      const ans = `${ly} ly`;
      const q = `Jarak sebuah galaksi kerdil dari Bumi ialah ${kmStr} km. Diberi 1 ly = 9.5 × 10^12 km, hitungkan jaraknya dalam unit tahun cahaya (ly).`;
      const exp = `Jarak dalam ly = (${kmStr} km) ÷ (9.5 × 10^12 km) = ${ly} ly.`;
      const wrongs = numWrongs(ly, "ly", [ly * 10, ly + 2, Math.max(1, ly - 2), ly * 2], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${ly + s + 3} ly`);
      return { unit: "b12", skill: "b12_s2", diff: "M", template: tpl, ...mcq, sig: `b12_s2:M:${tpl}:${ly}` };
    }

    if (tpl === "astro_dec_au_to_km") {
      const au = pick(rng, [0.4, 0.8, 1.2, 1.5, 1.6, 2.4, 2.8, 3.2, 4.4, 5.2, 6.4, 8.4, 9.6, 19.2]);
      const kmVal = au * 1.5e8;
      const ans = `${fmtSci(kmVal)} km`;
      const q = `Sebuah komet melintasi titik orbit pada jarak ${fmtDec(au)} AU dari Matahari. Diberi 1 AU = 1.5 × 10^8 km, hitungkan jarak tersebut dalam kilometer (km).`;
      const exp = `Jarak = ${fmtDec(au)} × (1.5 × 10^8 km) = ${fmtSci(kmVal)} km.`;
      const wrongs = [
        `${fmtSci((au + 1) * 1.5e8)} km`,
        `${fmtSci(kmVal * 10)} km`,
        `${fmtSci(kmVal / 10)} km`,
        `${fmtSci(au * 2 * 1.5e8)} km`
      ];
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtSci((au + s + 1.5) * 1.5e8)} km`);
      return { unit: "b12", skill: "b12_s2", diff: "M", template: tpl, ...mcq, sig: `b12_s2:M:${tpl}:${au}` };
    }

    // astro_planet_diff_km
    const p1 = pick(rng, [0.8, 1.0, 1.5, 2.0]);
    const diffAu = pick(rng, [1.2, 2.0, 3.0, 4.0, 5.0, 8.0, 10.0]);
    const p2 = Math.round((p1 + diffAu) * 10) / 10;
    const kmVal = diffAu * 1.5e8;
    const ans = `${fmtSci(kmVal)} km`;
    const q = `Planet X dan Planet Y mengorbit Matahari pada jarak masing-masing ${fmtDec(p1)} AU dan ${fmtDec(p2)} AU. Jika kedua-dua planet berada sejajar pada sisi yang sama dari Matahari, berapakah jarak terdekat antara Planet X dengan Planet Y dalam km? (1 AU = 1.5 × 10^8 km)`;
    const exp = `Beza jarak dalam AU = ${fmtDec(p2)} - ${fmtDec(p1)} = ${fmtDec(diffAu)} AU. Dalam km = ${fmtDec(diffAu)} × (1.5 × 10^8) = ${fmtSci(kmVal)} km.`;
    const wrongs = [
      `${fmtSci((p1 + p2) * 1.5e8)} km`,
      `${fmtSci(p2 * 1.5e8)} km`,
      `${fmtSci(kmVal * 10)} km`,
      `${fmtSci((diffAu + 1) * 1.5e8)} km`
    ];
    const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${fmtSci((diffAu + s + 2) * 1.5e8)} km`);
    return { unit: "b12", skill: "b12_s2", diff: "M", template: tpl, ...mcq, sig: `b12_s2:M:${tpl}:${p1},${p2}` };
  });

  const b12_s2_H = makeGen("b12_s2_H", "b12", "b12_s2", "H", function (rng) {
    const tpl = pick(rng, ["astro_mixed_km_au_diff", "astro_light_time_au", "astro_ly_diff"]);

    if (tpl === "astro_mixed_km_au_diff") {
      const au1 = pick(rng, [1, 2, 3, 4, 5]);
      const au2 = au1 + pick(rng, [3, 4, 5, 6, 8]);
      const d2KmStr = fmtSci(au2 * 1.5e8);
      const isMax = pick(rng, [true, false]);
      const ansAu = isMax ? au1 + au2 : au2 - au1;
      const ans = `${ansAu} AU`;
      const q = isMax
        ? `Planet P berada ${au1} AU dari Matahari manakala Planet Q berada ${d2KmStr} km dari Matahari. Apabila kedua-dua planet berada pada sisi bertentangan Matahari, berapakah jarak antara Planet P dengan Planet Q dalam unit AU? (1 AU = 1.5 × 10^8 km)`
        : `Planet P berada ${au1} AU dari Matahari manakala Planet Q berada ${d2KmStr} km dari Matahari. Apabila kedua-dua planet berada sejajar di sisi yang sama dari Matahari, berapakah jarak antara Planet P dengan Planet Q dalam unit AU? (1 AU = 1.5 × 10^8 km)`;
      const exp = `Tukar jarak Q: (${d2KmStr} km) ÷ (1.5 × 10^8 km) = ${au2} AU. ${isMax ? `Jarak maksimum (bertentangan) = ${au1} + ${au2} = ${ansAu} AU.` : `Jarak minimum (sejajar sebelah sama) = ${au2} - ${au1} = ${ansAu} AU.`}`;
      const wrongs = numWrongs(ansAu, "AU", [isMax ? au2 - au1 : au1 + au2, au2, ansAu + 2, Math.max(1, ansAu - 2)], true);
      const mcq = buildMcq(rng, q, ans, wrongs, exp, (s) => `${ansAu + s + 3} AU`);
      return { unit: "b12", skill: "b12_s2", diff: "H", template: tpl, ...mcq, sig: `b12_s2:H:${tpl}:${au1},${au2},${isMax}` };
    }

    if (tpl === "astro_light_time_au") {
      // 1 AU = 1.5e8 km; speed of light = 3.0e5 km/s => 500 s per AU!
      const au = pick(rng, [0.6, 1.2, 1.8, 2.4, 3.0, 3.6, 4.8, 6.0, 7.2, 9.6]);
      const timeSec = exactInt(au * 500, "astro_light_time_au:sec");
      const timeMin = exactInt(timeSec / 60, "astro_light_time_au:min");
      const q = `Sebuah planet berada pada jarak ${fmtDec(au)} AU dari Matahari. Jika 1 AU = 1.5 × 10^8 km dan kelajuan cahaya ialah 3.0 × 10^5 km/s, berapakah masa dalam minit untuk cahaya Matahari sampai ke planet tersebut?`;
      const exp = `Jarak = ${fmtDec(au)} × 1.5 × 10^8 km = ${fmtSci(au * 1.5e8)} km. Masa = Jarak ÷ (3.0 × 10^5 km/s) = ${timeSec} saat = ${timeMin} minit.`;
      const wrongs = numWrongs(timeMin, "minit", [timeMin * 2, Math.max(1, Math.round(timeMin / 2)), timeMin + 5, timeSec], true);
      const mcq = buildMcq(rng, q, `${timeMin} minit`, wrongs, exp, (s) => `${timeMin + s * 4} minit`);
      return { unit: "b12", skill: "b12_s2", diff: "H", template: tpl, ...mcq, sig: `b12_s2:H:${tpl}:${au}` };
    }

    // astro_ly_diff
    const ly1 = randInt(rng, 2, 7);
    const diffLy = randInt(rng, 2, 8);
    const ly2 = ly1 + diffLy;
    const km1Str = fmtSci(ly1 * 9.5e12);
    const km2Str = fmtSci(ly2 * 9.5e12);
    const q = `Bintang Alpha berada pada jarak ${km1Str} km dari Bumi, manakala Bintang Beta berada pada jarak ${km2Str} km dari Bumi. Diberi 1 ly = 9.5 × 10^12 km, berapakah lebih jauhnya Bintang Beta berbanding Bintang Alpha dalam unit tahun cahaya (ly)?`;
    const exp = `Jarak Alpha = ${ly1} ly dan jarak Beta = ${ly2} ly. Perbezaan jarak = ${ly2} - ${ly1} = ${diffLy} ly.`;
    const wrongs = numWrongs(diffLy, "ly", [ly1 + ly2, ly2, diffLy + 2, Math.max(1, diffLy - 1)], true);
    const mcq = buildMcq(rng, q, `${diffLy} ly`, wrongs, exp, (s) => `${diffLy + s + 2} ly`);
    return { unit: "b12", skill: "b12_s2", diff: "H", template: tpl, ...mcq, sig: `b12_s2:H:${tpl}:${ly1},${ly2}` };
  });

  const entries = [
    b3_s3_L, b3_s3_M, b3_s3_H,
    b7_s2_L, b7_s2_M, b7_s2_H,
    b8_s2_L, b8_s2_M, b8_s2_H,
    b8_s3_L, b8_s3_M, b8_s3_H,
    b10_s2_L, b10_s2_M, b10_s2_H,
    b12_s2_L, b12_s2_M, b12_s2_H
  ];

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.sains = (Array.isArray(App.Pools.t2.sains) ? App.Pools.t2.sains : []).concat(entries);

  App.Generators = App.Generators || {};
  App.Generators.pools = App.Generators.pools || {};
  App.Generators.pools.t2 = App.Generators.pools.t2 || {};
  App.Generators.pools.t2.sains = entries;
})(typeof window !== "undefined" ? window : globalThis);
