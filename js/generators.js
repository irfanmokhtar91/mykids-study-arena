/**
 * Deterministic, mathematically exact question generators for Math, Add Math,
 * Physics, Chemistry, and Science calculation chapters.
 * Zero guesswork: answers and distractors are computed in code and deduplicated.
 */
(function (global) {
  const App = (global.App = global.App || {});

  function randInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
  }

  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
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

  function shuffle(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /**
   * Build 4 unique MCQ options from a correct string and candidate wrong strings.
   * Falls back to deterministic numeric offsets if needed so 4 unique options always exist.
   */
  function makeMcq(rng, qText, correctStr, wrongCandidates, explanation) {
    const seen = new Set([String(correctStr)]);
    const wrongs = [];
    for (const w of wrongCandidates) {
      const s = String(w);
      if (!seen.has(s) && s !== "NaN" && s !== "undefined") {
        seen.add(s);
        wrongs.push(s);
        if (wrongs.length === 3) break;
      }
    }
    let fallbackStep = 1;
    const numVal = parseFloat(String(correctStr).replace(/[^0-9.-]/g, ""));
    while (wrongs.length < 3) {
      const cand = Number.isFinite(numVal)
        ? String(Math.round((numVal + fallbackStep * (fallbackStep % 2 === 0 ? 1 : -1)) * 100) / 100)
        : `${correctStr} (${fallbackStep})`;
      fallbackStep++;
      if (!seen.has(cand)) {
        seen.add(cand);
        wrongs.push(cand);
      }
    }
    const all = shuffle(rng, [String(correctStr), ...wrongs]);
    return {
      q: qText,
      options: all,
      correctIndex: all.indexOf(String(correctStr)),
      explanation
    };
  }

  function fmtMoney(val) {
    return "RM " + val.toFixed(2);
  }

  // ==================== DARJAH 6 GENERATORS ====================
  const D6 = {
    nombor_operasi: [
      (rng, dlp) => {
        const mil = randInt(rng, 1, 8);
        const frac = pick(rng, [
          { n: 1, d: 2, dec: 0.5 },
          { n: 1, d: 4, dec: 0.25 },
          { n: 3, d: 4, dec: 0.75 },
          { n: 1, d: 5, dec: 0.2 },
          { n: 2, d: 5, dec: 0.4 },
          { n: 3, d: 5, dec: 0.6 },
          { n: 4, d: 5, dec: 0.8 }
        ]);
        const ans = Math.round((mil + frac.dec) * 1000000);
        const q = dlp
          ? `Convert ${mil} ${frac.n}/${frac.d} million to a whole number.`
          : `Tukarkan ${mil} ${frac.n}/${frac.d} juta kepada nombor bulat.`;
        const exp = dlp
          ? `${mil} ${frac.n}/${frac.d} million = (${mil} + ${frac.dec}) × 1,000,000 = ${ans.toLocaleString("en-MY")}.`
          : `${mil} ${frac.n}/${frac.d} juta = (${mil} + ${frac.dec}) × 1,000,000 = ${ans.toLocaleString("en-MY")}.`;
        return makeMcq(
          rng,
          q,
          ans.toLocaleString("en-MY"),
          [
            (ans / 10).toLocaleString("en-MY"),
            (mil * 1000000 + frac.n * 10000).toLocaleString("en-MY"),
            (ans + 100000).toLocaleString("en-MY")
          ],
          exp
        );
      },
      (rng, dlp) => {
        const a = randInt(rng, 12, 45) * 10000;
        const b = randInt(rng, 2, 9);
        const c = randInt(rng, 1500, 9500);
        const ans = a / b + c;
        const exactA = Math.floor(a / b) * b;
        const finalAns = exactA / b + c;
        const q = dlp
          ? `Calculate: ${exactA.toLocaleString("en-MY")} ÷ ${b} + ${c.toLocaleString("en-MY")} =`
          : `Hitung: ${exactA.toLocaleString("en-MY")} ÷ ${b} + ${c.toLocaleString("en-MY")} =`;
        const exp = dlp
          ? `Division first: ${exactA.toLocaleString("en-MY")} ÷ ${b} = ${(exactA / b).toLocaleString("en-MY")}. Then add ${c.toLocaleString("en-MY")} = ${finalAns.toLocaleString("en-MY")}.`
          : `Bahagi dahulu: ${exactA.toLocaleString("en-MY")} ÷ ${b} = ${(exactA / b).toLocaleString("en-MY")}. Kemudian tambah ${c.toLocaleString("en-MY")} = ${finalAns.toLocaleString("en-MY")}.`;
        return makeMcq(
          rng,
          q,
          finalAns.toLocaleString("en-MY"),
          [
            (finalAns + 1000).toLocaleString("en-MY"),
            (finalAns - 500).toLocaleString("en-MY"),
            Math.round(exactA / (b + 1) + c).toLocaleString("en-MY")
          ],
          exp
        );
      },
      (rng, dlp) => {
        const a = randInt(rng, 12, 60) / 10;
        const b = randInt(rng, 2, 8);
        const ans = Math.round(a * b * 100) / 100;
        const q = dlp
          ? `What is ${a.toFixed(1)} × ${b}?`
          : `Apakah hasil darab ${a.toFixed(1)} × ${b}?`;
        const exp = `${a.toFixed(1)} × ${b} = ${ans.toFixed(1)}`;
        return makeMcq(
          rng,
          q,
          ans.toFixed(1),
          [(ans + 1.2).toFixed(1), (ans * 10).toFixed(1), Math.max(0.5, ans - 0.8).toFixed(1)],
          exp
        );
      }
    ],
    pecahan_peratus: [
      (rng, dlp) => {
        const pct = pick(rng, [10, 15, 20, 25, 30, 40, 50, 60, 75, 80]);
        const base = randInt(rng, 2, 12) * 20;
        const ans = (pct / 100) * base;
        const q = dlp
          ? `Find ${pct}% of ${base}.`
          : `Cari ${pct}% daripada ${base}.`;
        const exp = `${pct}/100 × ${base} = ${ans}.`;
        return makeMcq(rng, q, String(ans), [String(ans + 10), String(Math.max(1, ans - 5)), String(base - ans === ans ? ans + 20 : base - ans)], exp);
      },
      (rng, dlp) => {
        const d1 = pick(rng, [2, 3, 4, 5, 6]);
        const n1 = randInt(rng, 1, d1 - 1);
        const whole = randInt(rng, 2, 5);
        const num = n1 * whole;
        const g = gcd(num, d1);
        const sn = num / g;
        const sd = d1 / g;
        const ans = sd === 1 ? String(sn) : sn > sd ? `${Math.floor(sn / sd)} ${sn % sd}/${sd}` : `${sn}/${sd}`;
        const q = dlp
          ? `Calculate ${n1}/${d1} × ${whole} in simplest form.`
          : `Hitung ${n1}/${d1} × ${whole} dalam bentuk termudah.`;
        const exp = `${n1}/${d1} × ${whole} = ${num}/${d1} = ${ans}.`;
        return makeMcq(rng, q, ans, [`${num + 1}/${d1}`, `${whole} ${n1}/${d1}`, `${n1}/${d1 * whole}`], exp);
      }
    ],
    wang: [
      (rng, dlp) => {
        const cost = randInt(rng, 4, 25) * 10;
        const disc = pick(rng, [10, 15, 20, 25, 30, 40]);
        const discAmt = (cost * disc) / 100;
        const finalPrice = cost - discAmt;
        const q = dlp
          ? `A bag costs ${fmtMoney(cost)}. A discount of ${disc}% is given. What is the selling price?`
          : `Sebuah beg berharga ${fmtMoney(cost)}. Diskaun sebanyak ${disc}% diberikan. Berapakah harga jualannya?`;
        const exp = dlp
          ? `Discount = ${disc}% × ${fmtMoney(cost)} = ${fmtMoney(discAmt)}. Selling price = ${fmtMoney(cost)} - ${fmtMoney(discAmt)} = ${fmtMoney(finalPrice)}.`
          : `Diskaun = ${disc}% × ${fmtMoney(cost)} = ${fmtMoney(discAmt)}. Harga jual = ${fmtMoney(cost)} - ${fmtMoney(discAmt)} = ${fmtMoney(finalPrice)}.`;
        return makeMcq(
          rng,
          q,
          fmtMoney(finalPrice),
          [fmtMoney(discAmt), fmtMoney(cost + discAmt), fmtMoney(finalPrice + 10)],
          exp
        );
      },
      (rng, dlp) => {
        const buy = randInt(rng, 16, 50) * 5; // 80..250, strictly > max profit (75)
        const profit = randInt(rng, 3, 14) * 5; // 15..70
        const sell = buy + profit;
        const q = dlp
          ? `Ali bought an item for ${fmtMoney(buy)} and sold it for ${fmtMoney(sell)}. How much profit did he make?`
          : `Ali membeli satu barang pada harga ${fmtMoney(buy)} dan menjualnya pada harga ${fmtMoney(sell)}. Berapakah keuntungannya?`;
        const exp = dlp
          ? `Profit = Selling Price - Cost Price = ${fmtMoney(sell)} - ${fmtMoney(buy)} = ${fmtMoney(profit)}.`
          : `Untung = Harga Jual - Harga Beli = ${fmtMoney(sell)} - ${fmtMoney(buy)} = ${fmtMoney(profit)}.`;
        return makeMcq(rng, q, fmtMoney(profit), [fmtMoney(profit + 5), fmtMoney(buy), fmtMoney(sell + buy)], exp);
      }
    ],
    masa_waktu: [
      (rng, dlp) => {
        const startH = randInt(rng, 8, 16);
        const diff = randInt(rng, 2, 7);
        const endH = (startH + diff) % 24;
        const fmt = (h) => `${String(h).padStart(2, "0")}:00`;
        const q = dlp
          ? `City A is at ${fmt(startH)}. City B is ${diff} hours ahead of City A. What time is it in City B?`
          : `Bandar A berada pada waktu ${fmt(startH)}. Bandar B adalah ${diff} jam lebih awal daripada Bandar A. Pukul berapakah di Bandar B?`;
        const exp = `${fmt(startH)} + ${diff} jam = ${fmt(endH)}.`;
        return makeMcq(rng, q, fmt(endH), [fmt((startH - diff + 24) % 24), fmt((endH + 1) % 24), fmt((endH + 2) % 24)], exp);
      }
    ],
    ukuran_sukatan: [
      (rng, dlp) => {
        const kg = randInt(rng, 1, 9);
        const g = pick(rng, [250, 500, 750, 125, 400, 600]);
        const totalG = kg * 1000 + g;
        const q = dlp
          ? `Convert ${kg} kg ${g} g to grams (g).`
          : `Tukarkan ${kg} kg ${g} g kepada gram (g).`;
        const exp = `1 kg = 1,000 g. Maka (${kg} × 1,000) + ${g} = ${totalG} g.`;
        return makeMcq(rng, q, `${totalG} g`, [`${kg * 100 + g} g`, `${totalG + 100} g`, `${kg}.${g} g`], exp);
      }
    ],
    ruang: [
      (rng, dlp) => {
        const w = randInt(rng, 4, 10);
        const l = w + randInt(rng, 2, 10); // ensures l > w and area > perim always
        const perim = 2 * (l + w);
        const area = l * w;
        const askArea = rng() > 0.5;
        if (askArea) {
          const q = dlp
            ? `A rectangle has length ${l} cm and width ${w} cm. Calculate its area.`
            : `Sebuah segi empat tepat mempunyai panjang ${l} cm dan lebar ${w} cm. Hitung luasnya.`;
          const exp = `Luas / Area = ${l} × ${w} = ${area} cm².`;
          return makeMcq(rng, q, `${area} cm²`, [`${perim} cm²`, `${area + l} cm²`, `${l + w} cm²`], exp);
        } else {
          const q = dlp
            ? `A rectangle has length ${l} cm and width ${w} cm. Calculate its perimeter.`
            : `Sebuah segi empat tepat mempunyai panjang ${l} cm dan lebar ${w} cm. Hitung perimeternya.`;
          const exp = `Perimeter = 2 × (${l} + ${w}) = ${perim} cm.`;
          return makeMcq(rng, q, `${perim} cm`, [`${area} cm`, `${l + w} cm`, `${perim + 6} cm`], exp);
        }
      }
    ],
    koordinat_nisbah: [
      (rng, dlp) => {
        const pairs = [[2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [2, 7], [3, 7]];
        const [a, b] = pick(rng, pairs);
        const mult = randInt(rng, 2, 6);
        const totalA = a * mult;
        const totalB = b * mult;
        const q = dlp
          ? `The ratio of red marbles to blue marbles is ${a} : ${b}. If there are ${totalA} red marbles, how many blue marbles are there?`
          : `Nisbah guli merah kepada guli biru ialah ${a} : ${b}. Jika terdapat ${totalA} biji guli merah, berapakah bilangan guli biru?`;
        const exp = `${a} bahagian = ${totalA}, maka 1 bahagian = ${mult}. Guli biru = ${b} × ${mult} = ${totalB}.`;
        return makeMcq(rng, q, String(totalB), [String(totalB + mult), String(totalB + b), String(totalA + totalB)], exp);
      }
    ],
    data_kebolehjadian: [
      (rng, dlp) => {
        const nums = [
          randInt(rng, 10, 20),
          randInt(rng, 15, 25),
          randInt(rng, 20, 30),
          randInt(rng, 10, 35)
        ];
        // Adjust last so sum is divisible by 4
        const sum3 = nums[0] + nums[1] + nums[2];
        const rem = (4 - (sum3 % 4)) % 4;
        nums[3] = 12 + rem;
        const sum = nums.reduce((s, x) => s + x, 0);
        const mean = sum / 4;
        const q = dlp
          ? `Find the mean (average) of: ${nums.join(", ")}.`
          : `Cari min (purata) bagi data: ${nums.join(", ")}.`;
        const exp = `Min = (${nums.join(" + ")}) ÷ 4 = ${sum} ÷ 4 = ${mean}.`;
        return makeMcq(rng, q, String(mean), [String(mean + 2), String(Math.max(1, mean - 3)), String(sum)], exp);
      }
    ],
    kelajuan: [
      (rng, dlp) => {
        const speed = pick(rng, [40, 50, 60, 70, 80, 90, 100]);
        const time = randInt(rng, 2, 5);
        const dist = speed * time;
        const q = dlp
          ? `A car travels ${dist} km in ${time} hours. What is its speed?`
          : `Sebuah kereta bergerak sejauh ${dist} km dalam masa ${time} jam. Berapakah kelajuannya?`;
        const exp = dlp
          ? `Speed = Distance ÷ Time = ${dist} ÷ ${time} = ${speed} km/h.`
          : `Kelajuan = Jarak ÷ Masa = ${dist} ÷ ${time} = ${speed} km/j.`;
        const unit = dlp ? "km/h" : "km/j";
        return makeMcq(rng, q, `${speed} ${unit}`, [`${speed + 10} ${unit}`, `${dist + time} ${unit}`, `${Math.max(10, speed - 20)} ${unit}`], exp);
      }
    ]
  };

  // ==================== TINGKATAN 2 GENERATORS ====================
  const T2 = {
    pola_jujukan: [
      (rng, dlp) => {
        const start = randInt(rng, 2, 15);
        const diff = randInt(rng, 3, 9);
        const seq = [start, start + diff, start + 2 * diff, start + 3 * diff];
        const next = start + 4 * diff;
        const q = dlp
          ? `Find the next term in the sequence: ${seq.join(", ")}, ...`
          : `Cari sebutan seterusnya bagi jujukan: ${seq.join(", ")}, ...`;
        const exp = dlp
          ? `Pattern: add ${diff} each step. ${seq[3]} + ${diff} = ${next}.`
          : `Pola: tambah ${diff} setiap langkah. ${seq[3]} + ${diff} = ${next}.`;
        return makeMcq(rng, q, String(next), [String(next + diff), String(next - 1), String(seq[3] + 2)], exp);
      }
    ],
    pemfaktoran: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 9);
        const b = randInt(rng, 2, 9);
        const c = a * a;
        const ans = `(x + ${a})(x - ${a})`;
        const q = dlp
          ? `Factorise completely: x² - ${c}`
          : `Faktorkan selengkapnya: x² - ${c}`;
        const exp = `Beza dua kuasa dua / Difference of two squares: x² - ${a}² = (x + ${a})(x - ${a}).`;
        return makeMcq(rng, q, ans, [`(x - ${a})²`, `(x + ${a})²`, `(x + ${c})(x - 1)`], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 6);
        const b = randInt(rng, 3, 7); // b >= 3 ensures a + b !== a * b
        const ans = `${a}x + ${a * b}`;
        const q = dlp
          ? `Expand: ${a}(x + ${b})`
          : `Kembangkan: ${a}(x + ${b})`;
        const exp = `${a}(x + ${b}) = ${a}×x + ${a}×${b} = ${ans}.`;
        return makeMcq(rng, q, ans, [`${a}x + ${b}`, `${a}x + ${a + b}`, `x + ${a * b}`], exp);
      }
    ],
    rumus_algebra: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 5);
        const b = randInt(rng, 1, 8);
        const x = randInt(rng, 2, 6);
        const y = a * x + b;
        const q = dlp
          ? `Given y = ${a}x + ${b}, find the value of y when x = ${x}.`
          : `Diberi y = ${a}x + ${b}, cari nilai y apabila x = ${x}.`;
        const exp = `y = ${a}(${x}) + ${b} = ${a * x} + ${b} = ${y}.`;
        return makeMcq(rng, q, String(y), [String(y + a), String(a + x + b), String(y - b)], exp);
      }
    ],
    poligon: [
      (rng, dlp) => {
        const n = pick(rng, [5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20]);
        const sum = (n - 2) * 180;
        const q = dlp
          ? `Calculate the sum of interior angles of a polygon with ${n} sides.`
          : `Hitung hasil tambah sudut pedalaman bagi sebuah poligon yang mempunyai ${n} sisi.`;
        const exp = `Hasil tambah sudut pedalaman = (${n} - 2) × 180° = ${sum}°.`;
        return makeMcq(rng, q, `${sum}°`, [`${n * 180}°`, `${(n - 1) * 180}°`, `${sum - 180}°`], exp);
      },
      (rng, dlp) => {
        const n = pick(rng, [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36]);
        const ext = 360 / n;
        const q = dlp
          ? `Find the exterior angle of a regular polygon with ${n} sides.`
          : `Cari sudut peluaran bagi sebuah poligon sekata yang mempunyai ${n} sisi.`;
        const exp = `Sudut peluaran = 360° ÷ ${n} = ${ext}°.`;
        return makeMcq(rng, q, `${ext}°`, [`${180 - ext}°`, `${ext + 10}°`, `${360 - ext}°`], exp);
      }
    ],
    bulatan: [
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]);
        const circ = 2 * (22 / 7) * r;
        const q = dlp
          ? `A circle has radius ${r} cm. Calculate its circumference (use π = 22/7).`
          : `Sebuah bulatan mempunyai jejari ${r} cm. Hitung lilitannya (guna π = 22/7).`;
        const exp = `Lilitan = 2πj = 2 × (22/7) × ${r} = ${circ} cm.`;
        return makeMcq(rng, q, `${circ} cm`, [`${circ / 2} cm`, `${(22 / 7) * r * r} cm`, `${circ + 14} cm`], exp);
      },
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21, 28, 35, 42]);
        const area = (22 / 7) * r * r;
        const q = dlp
          ? `Calculate the area of a circle with radius ${r} cm (use π = 22/7).`
          : `Hitung luas sebuah bulatan berjejari ${r} cm (guna π = 22/7).`;
        const exp = `Luas = πj² = (22/7) × ${r} × ${r} = ${area} cm².`;
        return makeMcq(rng, q, `${area} cm²`, [`${2 * (22 / 7) * r} cm²`, `${area + 22} cm²`, `${Math.round(area / 2)} cm²`], exp);
      }
    ],
    bentuk_3d: [
      (rng, dlp) => {
        const s = randInt(rng, 2, 16);
        const vol = s * s * s;
        const q = dlp
          ? `Calculate the volume of a cube with side length ${s} cm.`
          : `Hitung isi padu sebuah kubus dengan panjang sisi ${s} cm.`;
        const exp = `Isi padu kubus = ${s} × ${s} × ${s} = ${vol} cm³.`;
        return makeMcq(rng, q, `${vol} cm³`, [`${s * s * 6} cm³`, `${s * 3} cm³`, `${vol + s} cm³`], exp);
      },
      (rng, dlp) => {
        const l = randInt(rng, 3, 12);
        const w = randInt(rng, 2, 9);
        const h = randInt(rng, 2, 8);
        const vol = l * w * h;
        const q = dlp
          ? `A cuboid has dimensions ${l} cm × ${w} cm × ${h} cm. Calculate its volume.`
          : `Sebuah kuboid berukuran ${l} cm × ${w} cm × ${h} cm. Hitung isi padunya.`;
        const exp = `Isi padu kuboid = ${l} × ${w} × ${h} = ${vol} cm³.`;
        return makeMcq(rng, q, `${vol} cm³`, [`${2 * (l * w + w * h + l * h)} cm³`, `${l + w + h} cm³`, `${vol + l} cm³`], exp);
      }
    ],
    koordinat: [
      (rng, dlp) => {
        const x1 = randInt(rng, 1, 5) * 2;
        const x2 = randInt(rng, 2, 8) * 2;
        const y1 = randInt(rng, 1, 5) * 2;
        let y2 = randInt(rng, 3, 9) * 2;
        let mx = (x1 + x2) / 2;
        let my = (y1 + y2) / 2;
        if (mx === my) {
          y2 += 2;
          my = (y1 + y2) / 2;
        }
        const ans = `(${mx}, ${my})`;
        const q = dlp
          ? `Find the midpoint between A(${x1}, ${y1}) and B(${x2}, ${y2}).`
          : `Cari titik tengah bagi garis lurus yang menyambungkan A(${x1}, ${y1}) dan B(${x2}, ${y2}).`;
        const exp = `Titik tengah = ((${x1}+${x2})/2, (${y1}+${y2})/2) = (${mx}, ${my}).`;
        return makeMcq(rng, q, ans, [`(${x1 + x2}, ${y1 + y2})`, `(${mx + 1}, ${my})`, `(${my}, ${mx})`], exp);
      }
    ],
    laju_pecutan: [
      (rng, dlp) => {
        const u = randInt(rng, 4, 15);
        const a = randInt(rng, 2, 6);
        const t = randInt(rng, 3, 7);
        const v = u + a * t;
        const q = dlp
          ? `An object accelerates uniformly from ${u} m/s to ${v} m/s in ${t} s. Calculate its acceleration.`
          : `Satu objek memecut secara seragam dari ${u} m/s kepada ${v} m/s dalam masa ${t} s. Hitung pecutannya.`;
        const exp = `Pecutan a = (v - u) / t = (${v} - ${u}) / ${t} = ${a} m/s².`;
        return makeMcq(rng, q, `${a} m/s²`, [`${a + 1} m/s²`, `${v - u} m/s²`, `${a * 2} m/s²`], exp);
      }
    ],
    kecerunan: [
      (rng, dlp) => {
        const x1 = randInt(rng, 1, 4);
        const dx = randInt(rng, 2, 5);
        const m = randInt(rng, 2, 6);
        const y1 = randInt(rng, 1, 6);
        const x2 = x1 + dx;
        const y2 = y1 + m * dx;
        const q = dlp
          ? `Find the gradient of the straight line passing through (${x1}, ${y1}) and (${x2}, ${y2}).`
          : `Cari kecerunan garis lurus yang melalui titik (${x1}, ${y1}) dan (${x2}, ${y2}).`;
        const exp = `m = (y₂ - y₁)/(x₂ - x₁) = (${y2} - ${y1})/(${x2} - ${x1}) = ${m}.`;
        return makeMcq(rng, q, String(m), [String(-m), String(m + 1), String(dx)], exp);
      }
    ],
    kebarangkalian: [
      (rng, dlp) => {
        const red = randInt(rng, 2, 5);
        let blue = randInt(rng, 3, 7);
        if (blue === red) blue += 1;
        const total = red + blue;
        const g = gcd(red, total);
        const ans = `${red / g}/${total / g}`;
        const q = dlp
          ? `A box contains ${red} red balls and ${blue} blue balls. Find the probability of picking a red ball (in simplest form).`
          : `Sebuah kotak mengandungi ${red} biji bola merah dan ${blue} biji bola biru. Cari kebarangkalian memilih bola merah (dalam bentuk termudah).`;
        const exp = `P(Merah) = ${red} / (${red} + ${blue}) = ${red}/${total} = ${ans}.`;
        return makeMcq(rng, q, ans, [`${blue}/${total}`, `${red}/${blue}`, `1/${total}`], exp);
      }
    ]
  };

  // ==================== TINGKATAN 4 GENERATORS ====================
  const T4 = {
    kuadratik: [
      (rng, dlp) => {
        const r1 = randInt(rng, 1, 6);
        const r2 = randInt(rng, 2, 7);
        const b = -(r1 + r2);
        const c = r1 * r2;
        const ans = r1 === r2 ? `x = ${r1}` : `x = ${Math.min(r1, r2)}, ${Math.max(r1, r2)}`;
        const q = dlp
          ? `Find the roots of the quadratic equation x² ${b}x + ${c} = 0.`
          : `Cari punca-punca bagi persamaan kuadratik x² ${b}x + ${c} = 0.`;
        const exp = `(x - ${r1})(x - ${r2}) = 0, maka ${ans}.`;
        return makeMcq(rng, q, ans, [`x = -${r1}, -${r2}`, `x = ${r1 + 1}, ${r2 + 1}`, `x = 0, ${c}`], exp);
      }
    ],
    asas_nombor: [
      (rng, dlp) => {
        const base = pick(rng, [2, 5, 8]);
        const dec = randInt(rng, 12, 45);
        const conv = dec.toString(base);
        const q = dlp
          ? `Convert ${conv} (base ${base}) to base 10.`
          : `Tukarkan ${conv} asas ${base} kepada asas 10.`;
        const exp = `${conv} (asas ${base}) = ${dec}₁₀.`;
        return makeMcq(rng, q, String(dec), [String(dec + 2), String(dec - 3), String(dec + base + 3)], exp);
      }
    ],
    // Add Math
    fungsi: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 5);
        const b = randInt(rng, 1, 7);
        const x = randInt(rng, 2, 6);
        const fx = a * x + b;
        const q = dlp
          ? `Given f(x) = ${a}x + ${b}, find f(${x}).`
          : `Diberi f(x) = ${a}x + ${b}, cari f(${x}).`;
        const exp = `f(${x}) = ${a}(${x}) + ${b} = ${fx}.`;
        return makeMcq(rng, q, String(fx), [String(fx + a), String(fx - b), String(a + x + b)], exp);
      }
    ],
    janjang: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 10);
        const d = randInt(rng, 2, 6);
        const n = randInt(rng, 5, 12);
        const tn = a + (n - 1) * d;
        const q = dlp
          ? `In an arithmetic progression, first term a = ${a} and common difference d = ${d}. Find the ${n}th term (T${n}).`
          : `Dalam suatu janjang aritmetik, sebutan pertama a = ${a} dan beza sepunya d = ${d}. Cari sebutan ke-${n} (T${n}).`;
        const exp = `Tₙ = a + (n - 1)d = ${a} + (${n} - 1)(${d}) = ${tn}.`;
        return makeMcq(rng, q, String(tn), [String(a + n * d), String(tn - d), String(tn + 2)], exp);
      }
    ],
    geometri_koordinat: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 6);
        let b = randInt(rng, 2, 6);
        if (b === a) b = a === 6 ? 5 : a + 1;
        const c = a * 2 + b * 3;
        const q = dlp
          ? `Which point lies on the line ${a}x + ${b}y = ${c}?`
          : `Titik manakah yang terletak pada garis lurus ${a}x + ${b}y = ${c}?`;
        const exp = `Gantikan (2, 3): ${a}(2) + ${b}(3) = ${2 * a} + ${3 * b} = ${c}.`;
        return makeMcq(rng, q, `(2, 3)`, [`(3, 2)`, `(1, 1)`, `(0, 1)`], exp);
      }
    ],
    // Physics
    daya_gerakan_1: [
      (rng, dlp) => {
        const m = randInt(rng, 3, 12);
        const a = randInt(rng, 3, 8);
        const f = m * a;
        const q = dlp
          ? `A ${m} kg box accelerates at ${a} m/s². Calculate the net force acting on it.`
          : `Sebuah kotak berjisim ${m} kg memecut pada ${a} m/s². Hitung daya bersih yang bertindak ke atasnya.`;
        const exp = `F = ma = ${m} × ${a} = ${f} N.`;
        return makeMcq(rng, q, `${f} N`, [`${m + a} N`, `${f + 4} N`, `${f + m} N`], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 3, 10);
        const v = randInt(rng, 3, 12);
        const p = m * v;
        const q = dlp
          ? `Calculate the momentum of a ${m} kg trolley moving at ${v} m/s.`
          : `Hitung momentum sebuah troli berjisim ${m} kg yang bergerak dengan halaju ${v} m/s.`;
        const exp = `Momentum p = mv = ${m} × ${v} = ${p} kg m/s.`;
        return makeMcq(rng, q, `${p} kg m/s`, [`${m + v} kg m/s`, `${p * 2} kg m/s`, `${p + 3} kg m/s`], exp);
      }
    ],
    haba: [
      (rng, dlp) => {
        const m = randInt(rng, 1, 5);
        const c = 4200;
        const dt = pick(rng, [5, 6, 8, 12, 15, 18, 20]); // avoids 10 where Q/10 === m*c
        const Q = m * c * dt;
        const q = dlp
          ? `Calculate the heat energy needed to raise the temperature of ${m} kg of water by ${dt}°C (c = 4200 J kg⁻¹ °C⁻¹).`
          : `Hitung tenaga haba yang diperlukan untuk menaikkan suhu ${m} kg air sebanyak ${dt}°C (c = 4200 J kg⁻¹ °C⁻¹).`;
        const exp = `Q = mcθ = ${m} × 4200 × ${dt} = ${Q.toLocaleString("en-MY")} J.`;
        return makeMcq(
          rng,
          q,
          `${Q.toLocaleString("en-MY")} J`,
          [`${(Q / 10).toLocaleString("en-MY")} J`, `${(m * c).toLocaleString("en-MY")} J`, `${(Q + 4200).toLocaleString("en-MY")} J`],
          exp
        );
      }
    ],
    gelombang: [
      (rng, dlp) => {
        const f = pick(rng, [10, 20, 25, 50, 100]);
        const lam = randInt(rng, 2, 8);
        const v = f * lam;
        const q = dlp
          ? `A wave has frequency ${f} Hz and wavelength ${lam} m. Calculate its wave speed.`
          : `Satu gelombang mempunyai frekuensi ${f} Hz dan panjang gelombang ${lam} m. Hitung laju gelombang itu.`;
        const exp = `v = fλ = ${f} × ${lam} = ${v} m/s.`;
        return makeMcq(rng, q, `${v} m/s`, [`${f / lam} m/s`, `${f + lam} m/s`, `${v + f} m/s`], exp);
      }
    ],
    // Chemistry
    konsep_mol: [
      (rng, dlp) => {
        const mol = randInt(rng, 2, 6);
        const mr = pick(rng, [
          { f: "H₂O", mr: 18 },
          { f: "CO₂", mr: 44 },
          { f: "NaCl", mr: 58.5 },
          { f: "CaCO₃", mr: 100 }
        ]);
        const mass = mol * mr.mr;
        const q = dlp
          ? `Calculate the mass of ${mol} mol of ${mr.f} (Molar mass = ${mr.mr} g/mol).`
          : `Hitung jisim bagi ${mol} mol ${mr.f} (Jisim molar = ${mr.mr} g/mol).`;
        const exp = `Jisim / Mass = mol × Jisim molar = ${mol} × ${mr.mr} = ${mass} g.`;
        return makeMcq(rng, q, `${mass} g`, [`${mr.mr} g`, `${mass + mr.mr} g`, `${Math.round((mr.mr / mol) * 10) / 10} g`], exp);
      }
    ]
  };

  App.Generators = {
    d6: D6,
    t2: T2,
    t4: T4
  };
})(window);
