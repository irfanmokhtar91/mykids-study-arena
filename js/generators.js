/**
 * Deterministic, mathematically exact question generators across Darjah 6,
 * Tingkatan 2, and Tingkatan 4 (Math, Add Math, Physics, Chemistry, Science, Geography).
 * Zero guesswork: answers and distractors are computed in code, strictly verified,
 * and deduplicated. Designed with rich template variety so 12 sets × 5 questions = 60
 * prompts can be generated with ZERO cross-set repeats.
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

  function fmtSignedTerm(coeff, varStr) {
    if (coeff === 0) return "";
    if (coeff > 0) return ` + ${coeff === 1 && varStr ? "" : coeff}${varStr}`;
    const absC = Math.abs(coeff);
    return ` - ${absC === 1 && varStr ? "" : absC}${varStr}`;
  }

  function fmtSignedConst(c) {
    if (c === 0) return "";
    return c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
  }

  /**
   * Build 4 unique MCQ options from a correct string and candidate wrong strings.
   */
  function makeMcq(rng, qText, correctStr, wrongCandidates, explanation) {
    const seen = new Set([String(correctStr)]);
    const wrongs = [];
    for (const w of wrongCandidates) {
      const s = String(w);
      if (!seen.has(s) && s !== "NaN" && s !== "undefined" && !s.includes("NaN") && !s.includes("undefined")) {
        seen.add(s);
        wrongs.push(s);
        if (wrongs.length === 3) break;
      }
    }
    let fallbackStep = 1;
    const unitMatch = String(correctStr).match(/^(-?\d+(?:\.\d+)?)\s*(.*)$/);
    const numVal = parseFloat(String(correctStr).replace(/[^0-9.-]/g, ""));
    while (wrongs.length < 3) {
      let cand;
      if (unitMatch && Number.isFinite(Number(unitMatch[1]))) {
        const base = Number(unitMatch[1]);
        const delta = fallbackStep * (fallbackStep % 2 === 0 ? 1 : -1);
        const val = Math.round((base + delta) * 100) / 100;
        cand = unitMatch[2] ? `${val} ${unitMatch[2]}` : String(val);
      } else if (Number.isFinite(numVal) && !String(correctStr).includes("(") && !String(correctStr).includes("/")) {
        cand = String(Math.round((numVal + fallbackStep * (fallbackStep % 2 === 0 ? 1 : -1)) * 100) / 100);
      } else {
        cand = `${correctStr} (${fallbackStep})`;
      }
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
        const mil = randInt(rng, 1, 9);
        const frac = pick(rng, [
          { n: 1, d: 2, dec: 0.5 },
          { n: 1, d: 4, dec: 0.25 },
          { n: 3, d: 4, dec: 0.75 },
          { n: 1, d: 5, dec: 0.2 },
          { n: 2, d: 5, dec: 0.4 },
          { n: 3, d: 5, dec: 0.6 },
          { n: 4, d: 5, dec: 0.8 },
          { n: 1, d: 8, dec: 0.125 },
          { n: 3, d: 8, dec: 0.375 }
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
        const a = randInt(rng, 12, 85) * 1000;
        const b = randInt(rng, 2, 9);
        const exactA = Math.floor(a / b) * b;
        const c = randInt(rng, 1200, 9900);
        const finalAns = exactA / b + c;
        const q = dlp
          ? `Calculate: ${exactA.toLocaleString("en-MY")} ÷ ${b} + ${c.toLocaleString("en-MY")} =`
          : `Hitung: ${exactA.toLocaleString("en-MY")} ÷ ${b} + ${c.toLocaleString("en-MY")} =`;
        const exp = dlp
          ? `Division first: ${exactA.toLocaleString("en-MY")} ÷ ${b} = ${(exactA / b).toLocaleString("en-MY")}. Add ${c.toLocaleString("en-MY")} = ${finalAns.toLocaleString("en-MY")}.`
          : `Bahagi dahulu: ${exactA.toLocaleString("en-MY")} ÷ ${b} = ${(exactA / b).toLocaleString("en-MY")}. Tambah ${c.toLocaleString("en-MY")} = ${finalAns.toLocaleString("en-MY")}.`;
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
        const a = randInt(rng, 12, 95) / 10;
        const b = randInt(rng, 2, 12);
        const ans = Math.round(a * b * 100) / 100;
        const q = dlp
          ? `What is ${a.toFixed(1)} × ${b}?`
          : `Apakah hasil darab ${a.toFixed(1)} × ${b}?`;
        const exp = `${a.toFixed(1)} × ${b} = ${ans.toFixed(1)}.`;
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
        const pct = pick(rng, [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75, 80]);
        const base = randInt(rng, 2, 25) * 20;
        const ans = Math.round((pct * base) / 100);
        const q = dlp ? `Find ${pct}% of ${base}.` : `Cari ${pct}% daripada ${base}.`;
        const exp = `${pct}/100 × ${base} = ${ans}.`;
        return makeMcq(
          rng,
          q,
          String(ans),
          [String(ans + 10), String(Math.max(1, ans - 5)), String(base - ans === ans ? ans + 20 : base - ans)],
          exp
        );
      },
      (rng, dlp) => {
        const d1 = pick(rng, [2, 3, 4, 5, 6, 8]);
        const n1 = randInt(rng, 1, d1 - 1);
        const whole = randInt(rng, 2, 9);
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
      },
      (rng, dlp) => {
        const dec = pick(rng, [0.15, 0.25, 0.35, 0.4, 0.45, 0.55, 0.65, 0.75, 0.85, 0.9, 1.2, 1.5]);
        const ans = Math.round(dec * 100);
        const q = dlp ? `Convert ${dec} to a percentage.` : `Tukarkan ${dec} kepada peratus.`;
        const exp = `${dec} × 100% = ${ans}%.`;
        return makeMcq(rng, q, `${ans}%`, [`${ans / 10}%`, `${ans + 10}%`, `${Math.max(5, ans - 15)}%`], exp);
      },
      (rng, dlp) => {
        const num = randInt(rng, 1, 9) * 10;
        const total = pick(rng, [100, 200, 500]);
        const pct = Math.round((num * 100) / total);
        const q = dlp
          ? `A school hall has ${total} chairs and ${num} are occupied. What percentage is occupied?`
          : `Sebuah dewan mempunyai ${total} kerusi dan ${num} diduduki. Berapakah peratus kerusi yang diduduki?`;
        const exp = `(${num} ÷ ${total}) × 100% = ${pct}%.`;
        return makeMcq(rng, q, `${pct}%`, [`${100 - pct === pct ? pct + 10 : 100 - pct}%`, `${pct + 5}%`, `${Math.max(1, pct - 4)}%`], exp);
      }
    ],
    wang: [
      (rng, dlp) => {
        const cost = randInt(rng, 4, 40) * 10;
        const disc = pick(rng, [10, 15, 20, 25, 30, 40]);
        const discAmt = (cost * disc) / 100;
        const finalPrice = cost - discAmt;
        const q = dlp
          ? `A bag costs ${fmtMoney(cost)}. A discount of ${disc}% is given. What is the selling price?`
          : `Sebuah beg berharga ${fmtMoney(cost)}. Diskaun sebanyak ${disc}% diberikan. Berapakah harga jualannya?`;
        const exp = dlp
          ? `Discount = ${disc}% × ${fmtMoney(cost)} = ${fmtMoney(discAmt)}. Selling price = ${fmtMoney(cost)} - ${fmtMoney(discAmt)} = ${fmtMoney(finalPrice)}.`
          : `Diskaun = ${disc}% × ${fmtMoney(cost)} = ${fmtMoney(discAmt)}. Harga jual = ${fmtMoney(cost)} - ${fmtMoney(discAmt)} = ${fmtMoney(finalPrice)}.`;
        return makeMcq(rng, q, fmtMoney(finalPrice), [fmtMoney(discAmt), fmtMoney(cost + discAmt), fmtMoney(finalPrice + 10)], exp);
      },
      (rng, dlp) => {
        const buy = randInt(rng, 16, 65) * 5;
        const profit = randInt(rng, 3, 15) * 5;
        const sell = buy + profit;
        const q = dlp
          ? `Ali bought an item for ${fmtMoney(buy)} and sold it for ${fmtMoney(sell)}. How much profit did he make?`
          : `Ali membeli satu barang pada harga ${fmtMoney(buy)} dan menjualnya pada harga ${fmtMoney(sell)}. Berapakah keuntungannya?`;
        const exp = dlp
          ? `Profit = Selling Price - Cost Price = ${fmtMoney(sell)} - ${fmtMoney(buy)} = ${fmtMoney(profit)}.`
          : `Untung = Harga Jual - Harga Beli = ${fmtMoney(sell)} - ${fmtMoney(buy)} = ${fmtMoney(profit)}.`;
        return makeMcq(rng, q, fmtMoney(profit), [fmtMoney(profit + 5), fmtMoney(buy), fmtMoney(sell + buy)], exp);
      },
      (rng, dlp) => {
        const principal = randInt(rng, 2, 20) * 500;
        const rate = pick(rng, [2, 3, 4, 5, 6]);
        const interest = (principal * rate) / 100;
        const q = dlp
          ? `Siti saves ${fmtMoney(principal)} at ${rate}% simple interest per annum. How much interest does she earn in 1 year?`
          : `Siti menyimpan ${fmtMoney(principal)} pada kadar faedah mudah ${rate}% setahun. Berapakah faedah yang diperoleh dalam 1 tahun?`;
        const exp = `Faedah = ${rate}% × ${fmtMoney(principal)} = ${fmtMoney(interest)}.`;
        return makeMcq(rng, q, fmtMoney(interest), [fmtMoney(interest + 20), fmtMoney(interest * 2), fmtMoney(principal + interest)], exp);
      }
    ],
    masa_waktu: [
      (rng, dlp) => {
        const startH = randInt(rng, 0, 21);
        const mins = pick(rng, ["00", "15", "30", "45"]);
        const diff = randInt(rng, 2, 11);
        const endH = (startH + diff) % 24;
        const fmt = (h, m) => `${String(h).padStart(2, "0")}:${m}`;
        const q = dlp
          ? `City A is at ${fmt(startH, mins)}. City B is ${diff} hours ahead of City A. What time is it in City B?`
          : `Bandar A berada pada waktu ${fmt(startH, mins)}. Bandar B adalah ${diff} jam lebih awal daripada Bandar A. Pukul berapakah di Bandar B?`;
        const exp = `${fmt(startH, mins)} + ${diff} jam = ${fmt(endH, mins)}.`;
        return makeMcq(rng, q, fmt(endH, mins), [fmt((startH - diff + 24) % 24, mins), fmt((endH + 1) % 24, mins), fmt((endH + 3) % 24, mins)], exp);
      },
      (rng, dlp) => {
        const sh = randInt(rng, 6, 13);
        const sm = pick(rng, [0, 15, 30, 45]);
        const dh = randInt(rng, 1, 6);
        const dm = pick(rng, [0, 15, 30]);
        const totalMin = sh * 60 + sm + dh * 60 + dm;
        const eh = Math.floor(totalMin / 60);
        const em = totalMin % 60;
        const fmt = (h, m) => `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        const durStr = dlp ? `${dh} hours ${dm} minutes` : `${dh} jam ${dm} minit`;
        const q = dlp
          ? `A bus leaves at ${fmt(sh, sm)} and arrives at ${fmt(eh, em)} on the same day. How long was the journey?`
          : `Sebuah bas bertolak pada ${fmt(sh, sm)} dan tiba pada ${fmt(eh, em)} pada hari yang sama. Berapakah tempoh perjalanan itu?`;
        const exp = `${fmt(eh, em)} - ${fmt(sh, sm)} = ${durStr}.`;
        return makeMcq(
          rng,
          q,
          durStr,
          [
            dlp ? `${dh + 1} hours ${dm} minutes` : `${dh + 1} jam ${dm} minit`,
            dlp ? `${dh} hours ${(dm + 15) % 60} minutes` : `${dh} jam ${(dm + 15) % 60} minit`,
            dlp ? `${Math.max(1, dh - 1)} hours ${dm + 10} minutes` : `${Math.max(1, dh - 1)} jam ${dm + 10} minit`
          ],
          exp
        );
      },
      (rng, dlp) => {
        const days = randInt(rng, 2, 12);
        const extraH = pick(rng, [4, 6, 8, 12]);
        const totalH = days * 24 + extraH;
        const q = dlp
          ? `Convert ${days} days ${extraH} hours to hours.`
          : `Tukarkan ${days} hari ${extraH} jam kepada jam.`;
        const exp = `(${days} × 24) + ${extraH} = ${totalH} jam.`;
        return makeMcq(rng, q, dlp ? `${totalH} hours` : `${totalH} jam`, [dlp ? `${totalH + 24} hours` : `${totalH + 24} jam`, dlp ? `${days * 12 + extraH} hours` : `${days * 12 + extraH} jam`, dlp ? `${totalH - 6} hours` : `${totalH - 6} jam`], exp);
      }
    ],
    ukuran_sukatan: [
      (rng, dlp) => {
        const kg = randInt(rng, 1, 18);
        const g = pick(rng, [120, 150, 200, 250, 350, 400, 450, 500, 650, 750, 800, 875]);
        const totalG = kg * 1000 + g;
        const q = dlp ? `Convert ${kg} kg ${g} g to grams (g).` : `Tukarkan ${kg} kg ${g} g kepada gram (g).`;
        const exp = `1 kg = 1,000 g. (${kg} × 1,000) + ${g} = ${totalG} g.`;
        return makeMcq(rng, q, `${totalG} g`, [`${kg * 100 + g} g`, `${totalG + 100} g`, `${kg}.${g} g`], exp);
      },
      (rng, dlp) => {
        const km = randInt(rng, 1, 20);
        const m = pick(rng, [100, 250, 300, 450, 500, 600, 750, 850, 900]);
        const totalM = km * 1000 + m;
        const q = dlp ? `Convert ${km} km ${m} m to metres (m).` : `Tukarkan ${km} km ${m} m kepada meter (m).`;
        const exp = `1 km = 1,000 m. (${km} × 1,000) + ${m} = ${totalM} m.`;
        return makeMcq(rng, q, `${totalM} m`, [`${km * 100 + m} m`, `${totalM + 500} m`, `${km + m} m`], exp);
      },
      (rng, dlp) => {
        const lit = randInt(rng, 1, 15);
        const ml = pick(rng, [150, 200, 250, 350, 400, 500, 650, 750, 800]);
        const totalMl = lit * 1000 + ml;
        const q = dlp ? `Express ${lit} ℓ ${ml} ml in millilitres (ml).` : `Nyatakan ${lit} ℓ ${ml} ml dalam mililiter (ml).`;
        const exp = `1 ℓ = 1,000 ml. (${lit} × 1,000) + ${ml} = ${totalMl} ml.`;
        return makeMcq(rng, q, `${totalMl} ml`, [`${lit * 100 + ml} ml`, `${totalMl + 200} ml`, `${lit}.${ml} ml`], exp);
      }
    ],
    ruang: [
      (rng, dlp) => {
        const w = randInt(rng, 3, 18);
        const l = w + randInt(rng, 2, 16);
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
      },
      (rng, dlp) => {
        const b = randInt(rng, 3, 18) * 2;
        const h = randInt(rng, 3, 19);
        const area = (b * h) / 2;
        const q = dlp
          ? `Find the area of a triangle with base ${b} cm and height ${h} cm.`
          : `Cari luas sebuah segi tiga dengan tapak ${b} cm dan tinggi ${h} cm.`;
        const exp = `Luas = 1/2 × ${b} × ${h} = ${area} cm².`;
        return makeMcq(rng, q, `${area} cm²`, [`${b * h} cm²`, `${b + h} cm²`, `${area + b} cm²`], exp);
      },
      (rng, dlp) => {
        const s = randInt(rng, 3, 16);
        const askPerim = rng() > 0.5;
        if (askPerim) {
          const p = 4 * s;
          const q = dlp ? `A square has side length ${s} cm. Find its perimeter.` : `Sebuah segi empat sama mempunyai sisi ${s} cm. Cari perimeternya.`;
          return makeMcq(rng, q, `${p} cm`, [`${s * s} cm`, `${2 * s} cm`, `${p + 4} cm`], `Perimeter = 4 × ${s} = ${p} cm.`);
        } else {
          const a = s * s;
          const q = dlp ? `A square has side length ${s} cm. Find its area.` : `Sebuah segi empat sama mempunyai sisi ${s} cm. Cari luasnya.`;
          return makeMcq(rng, q, `${a} cm²`, [`${4 * s} cm²`, `${a + s} cm²`, `${2 * s} cm²`], `Luas = ${s} × ${s} = ${a} cm².`);
        }
      }
    ],
    koordinat_nisbah: [
      (rng, dlp) => {
        const pairs = [[1, 3], [1, 4], [2, 3], [2, 5], [3, 4], [3, 5], [3, 7], [4, 5], [4, 7], [5, 6], [5, 8], [2, 7]];
        const [a, b] = pick(rng, pairs);
        const mult = randInt(rng, 2, 15);
        const totalA = a * mult;
        const totalB = b * mult;
        const q = dlp
          ? `The ratio of red marbles to blue marbles is ${a} : ${b}. If there are ${totalA} red marbles, how many blue marbles are there?`
          : `Nisbah guli merah kepada guli biru ialah ${a} : ${b}. Jika terdapat ${totalA} biji guli merah, berapakah bilangan guli biru?`;
        const exp = `${a} bahagian = ${totalA}, maka 1 bahagian = ${mult}. Guli biru = ${b} × ${mult} = ${totalB}.`;
        return makeMcq(rng, q, String(totalB), [String(totalB + mult), String(totalB + b), String(totalA + totalB)], exp);
      },
      (rng, dlp) => {
        const x1 = randInt(rng, 1, 8);
        const y1 = randInt(rng, 1, 8);
        const dx = randInt(rng, 2, 9);
        const dy = randInt(rng, 2, 9);
        const x2 = x1 + dx;
        const y2 = y1 + dy;
        const q = dlp
          ? `Point P is at (${x1}, ${y1}) and Point Q is at (${x2}, ${y2}). What is the horizontal distance from P to Q?`
          : `Titik P berada di (${x1}, ${y1}) dan Titik Q di (${x2}, ${y2}). Berapakah jarak mengufuk dari P ke Q?`;
        const exp = `Jarak mengufuk = ${x2} - ${x1} = ${dx} unit.`;
        return makeMcq(rng, q, dlp ? `${dx} units` : `${dx} unit`, [dlp ? `${dx + 2} units` : `${dx + 2} unit`, dlp ? `${dx + dy} units` : `${dx + dy} unit`, dlp ? `${Math.max(1, dx - 1)} units` : `${Math.max(1, dx - 1)} unit`], exp);
      },
      (rng, dlp) => {
        const n1 = randInt(rng, 2, 6);
        const unitPrice = randInt(rng, 2, 9);
        const cost1 = n1 * unitPrice;
        const n2 = randInt(rng, 4, 12);
        const cost2 = n2 * unitPrice;
        const q = dlp
          ? `${n1} notebooks cost ${fmtMoney(cost1)}. How much do ${n2} notebooks cost?`
          : `Harga bagi ${n1} buah buku ialah ${fmtMoney(cost1)}. Berapakah harga bagi ${n2} buah buku yang sama?`;
        const exp = `1 buku = ${fmtMoney(cost1)} ÷ ${n1} = ${fmtMoney(unitPrice)}. Maka ${n2} buku = ${fmtMoney(cost2)}.`;
        const altBook = cost1 + n2 === cost2 ? cost2 + n2 : cost1 + n2;
        return makeMcq(rng, q, fmtMoney(cost2), [fmtMoney(cost2 + unitPrice), fmtMoney(altBook), fmtMoney(Math.max(2, cost2 - unitPrice))], exp);
      }
    ],
    data_kebolehjadian: [
      (rng, dlp) => {
        const nums = [randInt(rng, 10, 28), randInt(rng, 12, 32), randInt(rng, 14, 34), 12];
        const sum3 = nums[0] + nums[1] + nums[2];
        const rem = (4 - (sum3 % 4)) % 4;
        nums[3] = 12 + rem;
        const sum = nums.reduce((s, x) => s + x, 0);
        const mean = sum / 4;
        const q = dlp ? `Find the mean (average) of: ${nums.join(", ")}.` : `Cari min (purata) bagi data: ${nums.join(", ")}.`;
        const exp = `Min = (${nums.join(" + ")}) ÷ 4 = ${sum} ÷ 4 = ${mean}.`;
        return makeMcq(rng, q, String(mean), [String(mean + 2), String(Math.max(1, mean - 3)), String(sum)], exp);
      },
      (rng, dlp) => {
        const base = randInt(rng, 5, 30);
        const vals = [base, base + randInt(rng, 2, 6), base + randInt(rng, 7, 13), base + randInt(rng, 14, 21), base + randInt(rng, 22, 30)];
        const range = vals[4] - vals[0];
        const shuffled = shuffle(rng, vals);
        const q = dlp ? `Find the range of: ${shuffled.join(", ")}.` : `Cari julat bagi data: ${shuffled.join(", ")}.`;
        const exp = `Julat = Maksimum - Minimum = ${vals[4]} - ${vals[0]} = ${range}.`;
        return makeMcq(rng, q, String(range), [String(vals[2]), String(range + 4), String(vals[4])], exp);
      },
      (rng, dlp) => {
        const base = randInt(rng, 6, 35);
        const vals = [base, base + randInt(rng, 1, 5), base + randInt(rng, 6, 12), base + randInt(rng, 13, 18), base + randInt(rng, 19, 25)];
        const median = vals[2];
        const shuffled = shuffle(rng, vals);
        const q = dlp ? `Find the median of: ${shuffled.join(", ")}.` : `Cari median bagi data: ${shuffled.join(", ")}.`;
        const exp = `Susun menaik: ${vals.join(", ")}. Nilai tengah = ${median}.`;
        return makeMcq(rng, q, String(median), [String(vals[1]), String(vals[3]), String(vals[4] - vals[0])], exp);
      }
    ],
    kelajuan: [
      (rng, dlp) => {
        const speed = pick(rng, [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110, 120]);
        const time = randInt(rng, 2, 9);
        const dist = speed * time;
        const unit = dlp ? "km/h" : "km/j";
        const q = dlp
          ? `A car travels ${dist} km in ${time} hours. What is its speed?`
          : `Sebuah kereta bergerak sejauh ${dist} km dalam masa ${time} jam. Berapakah kelajuannya?`;
        const exp = dlp
          ? `Speed = Distance ÷ Time = ${dist} ÷ ${time} = ${speed} km/h.`
          : `Kelajuan = Jarak ÷ Masa = ${dist} ÷ ${time} = ${speed} km/j.`;
        return makeMcq(rng, q, `${speed} ${unit}`, [`${speed + 10} ${unit}`, `${dist + time} ${unit}`, `${Math.max(10, speed - 15)} ${unit}`], exp);
      },
      (rng, dlp) => {
        const speed = pick(rng, [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100, 110]);
        const time = randInt(rng, 2, 8);
        const dist = speed * time;
        const unit = dlp ? "km/h" : "km/j";
        const q = dlp
          ? `A train moves at ${speed} ${unit} for ${time} hours. Find the total distance travelled.`
          : `Sebuah kereta api bergerak pada kelajuan ${speed} ${unit} selama ${time} jam. Hitung jumlah jarak yang dilalui.`;
        const exp = `Jarak = Kelajuan × Masa = ${speed} × ${time} = ${dist} km.`;
        return makeMcq(rng, q, `${dist} km`, [`${dist + speed} km`, `${Math.round(dist / 2)} km`, `${speed + time} km`], exp);
      },
      (rng, dlp) => {
        const speed = pick(rng, [40, 50, 60, 70, 80, 90, 100]);
        const time = randInt(rng, 2, 10);
        const dist = speed * time;
        const unit = dlp ? "km/h" : "km/j";
        const tUnit = dlp ? "hours" : "jam";
        const q = dlp
          ? `How long does a bus take to travel ${dist} km at an average speed of ${speed} ${unit}?`
          : `Berapa lamakah masa yang diambil sebuah bas untuk bergerak sejauh ${dist} km pada kelajuan ${speed} ${unit}?`;
        const exp = `Masa = Jarak ÷ Kelajuan = ${dist} ÷ ${speed} = ${time} ${tUnit}.`;
        return makeMcq(rng, q, `${time} ${tUnit}`, [`${time + 1} ${tUnit}`, `${time + 2} ${tUnit}`, `${Math.max(1, time - 1)} ${tUnit}`], exp);
      }
    ]
  };

  // ==================== TINGKATAN 2 GENERATORS ====================
  const T2 = {
    pola_jujukan: [
      (rng, dlp) => {
        const start = randInt(rng, 2, 35);
        const diff = randInt(rng, 3, 14);
        const seq = [start, start + diff, start + 2 * diff, start + 3 * diff];
        const next = start + 4 * diff;
        const q = dlp ? `Find the next term in the sequence: ${seq.join(", ")}, ...` : `Cari sebutan seterusnya bagi jujukan: ${seq.join(", ")}, ...`;
        const exp = `Pola: tambah ${diff} setiap langkah. ${seq[3]} + ${diff} = ${next}.`;
        return makeMcq(rng, q, String(next), [String(next + diff), String(next - 1), String(seq[3] + 2)], exp);
      },
      (rng, dlp) => {
        const start = randInt(rng, 45, 110);
        const diff = randInt(rng, 3, 9);
        const seq = [start, start - diff, start - 2 * diff, start - 3 * diff];
        const next = start - 4 * diff;
        const q = dlp ? `Find the next term in the decreasing sequence: ${seq.join(", ")}, ...` : `Cari sebutan seterusnya bagi jujukan menurun: ${seq.join(", ")}, ...`;
        const exp = `Pola: tolak ${diff} setiap langkah. ${seq[3]} - ${diff} = ${next}.`;
        return makeMcq(rng, q, String(next), [String(next + diff), String(next - diff), String(next + 3)], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 9);
        const b = randInt(rng, 1, 10);
        const n = randInt(rng, 4, 15);
        const tn = a * n + b;
        const q = dlp
          ? `A sequence has rule Tₙ = ${a}n + ${b}. Find the ${n}th term.`
          : `Suatu jujukan mengikut rumus Tₙ = ${a}n + ${b}. Cari sebutan ke-${n}.`;
        const exp = `T(${n}) = ${a}(${n}) + ${b} = ${tn}.`;
        return makeMcq(rng, q, String(tn), [String(tn + a), String(a + n + b), String(tn - b)], exp);
      }
    ],
    pemfaktoran: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 22);
        const c = a * a;
        const ans = `(x + ${a})(x - ${a})`;
        const q = dlp ? `Factorise completely: x² - ${c}` : `Faktorkan selengkapnya: x² - ${c}`;
        const exp = `Beza dua kuasa dua: x² - ${a}² = (x + ${a})(x - ${a}).`;
        return makeMcq(rng, q, ans, [`(x - ${a})²`, `(x + ${a})²`, `(x + ${c})(x - 1)`], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 12);
        const b = randInt(rng, 3, 14);
        const ans = `${a}x + ${a * b}`;
        const q = dlp ? `Expand: ${a}(x + ${b})` : `Kembangkan: ${a}(x + ${b})`;
        const exp = `${a}(x + ${b}) = ${ans}.`;
        return makeMcq(rng, q, ans, [`${a}x + ${b}`, `${a}x + ${a + b}`, `x + ${a * b}`], exp);
      },
      (rng, dlp) => {
        const p = randInt(rng, 1, 9);
        const qn = randInt(rng, p + 1, 12);
        const sum = p + qn;
        const prod = p * qn;
        const ans = `x² + ${sum}x + ${prod}`;
        const q = dlp ? `Expand: (x + ${p})(x + ${qn})` : `Kembangkan: (x + ${p})(x + ${qn})`;
        const exp = `(x + ${p})(x + ${qn}) = x² + (${p}+${qn})x + (${p}×${qn}) = ${ans}.`;
        return makeMcq(rng, q, ans, [`x² + ${prod}x + ${sum}`, `x² + ${sum}x + ${sum}`, `x² + ${p}x + ${prod}`], exp);
      }
    ],
    rumus_algebra: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 9);
        const b = randInt(rng, 1, 15);
        const x = randInt(rng, 2, 10);
        const y = a * x + b;
        const q = dlp
          ? `Given y = ${a}x + ${b}, find the value of y when x = ${x}.`
          : `Diberi y = ${a}x + ${b}, cari nilai y apabila x = ${x}.`;
        const exp = `y = ${a}(${x}) + ${b} = ${a * x} + ${b} = ${y}.`;
        return makeMcq(rng, q, String(y), [String(y + a), String(a + x + b), String(y - b)], exp);
      },
      (rng, dlp) => {
        const p = randInt(rng, 2, 8);
        const qn = randInt(rng, 2, 8);
        const x = randInt(rng, 1, 6);
        const z = randInt(rng, 2, 7);
        const w = p * x + qn * z;
        const q = dlp
          ? `Given w = ${p}x + ${qn}z, find w when x = ${x} and z = ${z}.`
          : `Diberi w = ${p}x + ${qn}z, cari nilai w apabila x = ${x} dan z = ${z}.`;
        const exp = `w = ${p}(${x}) + ${qn}(${z}) = ${p * x} + ${qn * z} = ${w}.`;
        return makeMcq(rng, q, String(w), [String(w + p), String(p + x + qn + z), String(w - 2)], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 9);
        const c = randInt(rng, 1, 12);
        const x = randInt(rng, 2, 9);
        const y = m * x + c;
        const q = dlp
          ? `Given y = ${m}x + ${c}, find the value of x when y = ${y}.`
          : `Diberi y = ${m}x + ${c}, cari nilai x apabila y = ${y}.`;
        const exp = `x = (${y} - ${c}) / ${m} = ${m * x} / ${m} = ${x}.`;
        return makeMcq(rng, q, String(x), [String(x + 2), String(y - c), String(Math.max(1, x - 1))], exp);
      }
    ],
    poligon: [
      (rng, dlp) => {
        const n = randInt(rng, 5, 25);
        const sum = (n - 2) * 180;
        const q = dlp
          ? `Calculate the sum of interior angles of a polygon with ${n} sides.`
          : `Hitung hasil tambah sudut pedalaman bagi sebuah poligon yang mempunyai ${n} sisi.`;
        const exp = `Hasil tambah sudut pedalaman = (${n} - 2) × 180° = ${sum}°.`;
        return makeMcq(rng, q, `${sum}°`, [`${n * 180}°`, `${(n - 1) * 180}°`, `${sum - 180}°`], exp);
      },
      (rng, dlp) => {
        const n = pick(rng, [5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60]);
        const ext = 360 / n;
        const q = dlp
          ? `Find the exterior angle of a regular polygon with ${n} sides.`
          : `Cari sudut peluaran bagi sebuah poligon sekata yang mempunyai ${n} sisi.`;
        const exp = `Sudut peluaran = 360° ÷ ${n} = ${ext}°.`;
        return makeMcq(rng, q, `${ext}°`, [`${180 - ext}°`, `${ext + 10}°`, `${360 - ext}°`], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 60, 120);
        const b = randInt(rng, 70, 115);
        const c = randInt(rng, 65, 100);
        const d = 360 - a - b - c;
        const q = dlp
          ? `Three interior angles of a quadrilateral are ${a}°, ${b}°, and ${c}°. Find the fourth angle.`
          : `Tiga sudut pedalaman sebuah sisi empat ialah ${a}°, ${b}° dan ${c}°. Cari sudut keempat.`;
        const exp = `Jumlah sudut sisi empat = 360°. Sudut ke-4 = 360° - (${a}° + ${b}° + ${c}°) = ${d}°.`;
        return makeMcq(rng, q, `${d}°`, [`${180 - d > 0 ? 180 - d : d + 30}°`, `${d + 15}°`, `${Math.max(10, d - 15)}°`], exp);
      }
    ],
    bulatan: [
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126]);
        const circ = 2 * (22 / 7) * r;
        const q = dlp
          ? `A circle has radius ${r} cm. Calculate its circumference (π = 22/7).`
          : `Sebuah bulatan mempunyai jejari ${r} cm. Hitung lilitannya (π = 22/7).`;
        const exp = `Lilitan = 2 × (22/7) × ${r} = ${circ} cm.`;
        return makeMcq(rng, q, `${circ} cm`, [`${circ / 2} cm`, `${circ + 14} cm`, `${circ + 22} cm`], exp);
      },
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]);
        const area = (22 / 7) * r * r;
        const q = dlp
          ? `Calculate the area of a circle with radius ${r} cm (π = 22/7).`
          : `Hitung luas sebuah bulatan berjejari ${r} cm (π = 22/7).`;
        const exp = `Luas = (22/7) × ${r}² = ${area} cm².`;
        return makeMcq(rng, q, `${area} cm²`, [`${2 * (22 / 7) * r} cm²`, `${area + 22} cm²`, `${Math.round(area / 2)} cm²`], exp);
      },
      (rng, dlp) => {
        const r = 21 * randInt(rng, 1, 6);
        const ang = pick(rng, [60, 90, 120, 180]);
        const arc = Math.round((ang / 360) * 2 * (22 / 7) * r);
        const q = dlp
          ? `Find the arc length of a ${ang}° sector with radius ${r} cm (π = 22/7).`
          : `Cari panjang lengkok bagi sektor bersudut ${ang}° dengan jejari ${r} cm (π = 22/7).`;
        const exp = `Panjang lengkok = (${ang}/360) × 2 × (22/7) × ${r} = ${arc} cm.`;
        return makeMcq(rng, q, `${arc} cm`, [`${arc * 2} cm`, `${arc + 11} cm`, `${Math.max(4, arc - 5)} cm`], exp);
      },
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
        const semiArea = 0.5 * (22 / 7) * r * r;
        const q = dlp
          ? `Find the area of a semicircle with radius ${r} cm (π = 22/7).`
          : `Cari luas sebuah semibulatan berjejari ${r} cm (π = 22/7).`;
        const exp = `Luas semibulatan = 1/2 × (22/7) × ${r}² = ${semiArea} cm².`;
        return makeMcq(rng, q, `${semiArea} cm²`, [`${semiArea * 2} cm²`, `${semiArea + 77} cm²`, `${Math.max(11, semiArea - 22)} cm²`], exp);
      },
      (rng, dlp) => {
        const r = randInt(rng, 2, 20) * 7;
        const circ = 2 * (22 / 7) * r;
        const d = r * 2;
        const q = dlp
          ? `A wheel has a circumference of ${circ} cm. Find its diameter (π = 22/7).`
          : `Sebuah roda mempunyai lilitan ${circ} cm. Cari diameternya (π = 22/7).`;
        const exp = `d = Lilitan ÷ π = ${circ} ÷ (22/7) = ${d} cm.`;
        return makeMcq(rng, q, `${d} cm`, [`${r} cm`, `${d + 7} cm`, `${d + 14} cm`], exp);
      }
    ],
    bentuk_3d: [
      (rng, dlp) => {
        const s = randInt(rng, 2, 18);
        const vol = s * s * s;
        const q = dlp
          ? `Calculate the volume of a cube with side length ${s} cm.`
          : `Hitung isi padu sebuah kubus dengan panjang sisi ${s} cm.`;
        const exp = `Isi padu kubus = ${s} × ${s} × ${s} = ${vol} cm³.`;
        return makeMcq(rng, q, `${vol} cm³`, [`${s * s * 6} cm³`, `${s * 3} cm³`, `${vol + s} cm³`], exp);
      },
      (rng, dlp) => {
        const l = randInt(rng, 3, 14);
        const w = randInt(rng, 2, 10);
        const h = randInt(rng, 2, 9);
        const vol = l * w * h;
        const q = dlp
          ? `A cuboid has dimensions ${l} cm × ${w} cm × ${h} cm. Calculate its volume.`
          : `Sebuah kuboid berukuran ${l} cm × ${w} cm × ${h} cm. Hitung isi padunya.`;
        const exp = `Isi padu kuboid = ${l} × ${w} × ${h} = ${vol} cm³.`;
        return makeMcq(rng, q, `${vol} cm³`, [`${2 * (l * w + w * h + l * h)} cm³`, `${l + w + h} cm³`, `${vol + l} cm³`], exp);
      },
      (rng, dlp) => {
        const r = pick(rng, [7, 14, 21]);
        const h = randInt(rng, 3, 15);
        const vol = (22 / 7) * r * r * h;
        const q = dlp
          ? `Find the volume of a cylinder with radius ${r} cm and height ${h} cm (π = 22/7).`
          : `Cari isi padu sebuah silinder berjejari ${r} cm dan tinggi ${h} cm (π = 22/7).`;
        const exp = `Isi padu silinder = (22/7) × ${r}² × ${h} = ${vol} cm³.`;
        return makeMcq(rng, q, `${vol} cm³`, [`${Math.round(vol / 2)} cm³`, `${vol + 154} cm³`, `${2 * (22 / 7) * r * h} cm³`], exp);
      }
    ],
    koordinat: [
      (rng, dlp) => {
        const x1 = randInt(rng, 1, 9) * 2;
        const x2 = randInt(rng, 2, 12) * 2;
        const y1 = randInt(rng, 1, 9) * 2;
        let y2 = randInt(rng, 3, 12) * 2;
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
      },
      (rng, dlp) => {
        const [dx, dy, dist] = pick(rng, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]);
        const x1 = randInt(rng, 1, 8);
        const y1 = randInt(rng, 1, 8);
        const x2 = x1 + dx;
        const y2 = y1 + dy;
        const unit = dlp ? "units" : "unit";
        const q = dlp
          ? `Calculate the distance between P(${x1}, ${y1}) and Q(${x2}, ${y2}).`
          : `Hitung jarak di antara titik P(${x1}, ${y1}) dan Q(${x2}, ${y2}).`;
        const exp = `Jarak = √((${x2}-${x1})² + (${y2}-${y1})²) = √(${dx}² + ${dy}²) = ${dist} ${unit}.`;
        return makeMcq(rng, q, `${dist} ${unit}`, [`${dx + dy} ${unit}`, `${dist + 2} ${unit}`, `${Math.max(2, dist - 2)} ${unit}`], exp);
      }
    ],
    graf_fungsi: [
      (rng, dlp) => {
        const m = randInt(rng, 2, 8);
        const c = randInt(rng, -9, 12);
        const x = randInt(rng, -5, 9);
        const y = m * x + c;
        const eq = `y = ${m}x${fmtSignedConst(c)}`;
        const q = dlp ? `Given ${eq}, find the value of y when x = ${x}.` : `Diberi fungsi ${eq}, cari nilai y apabila x = ${x}.`;
        const exp = `y = ${m}(${x})${fmtSignedConst(c)} = ${y}.`;
        return makeMcq(rng, q, String(y), [String(y + m), String(y - 2), String(-y === y ? y + 4 : -y)], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 1, 3);
        const b = randInt(rng, -8, 10);
        const x = randInt(rng, -4, 6);
        const y = a * x * x + b;
        const eq = `y = ${a === 1 ? "" : a}x²${fmtSignedConst(b)}`;
        const q = dlp ? `For ${eq}, find y when x = ${x}.` : `Bagi ${eq}, cari nilai y apabila x = ${x}.`;
        const exp = `y = ${a}(${x})²${fmtSignedConst(b)} = ${a * x * x}${fmtSignedConst(b)} = ${y}.`;
        return makeMcq(rng, q, String(y), [String(y + 3), String(y - 4), String(a * x + b === y ? y + 6 : a * x + b)], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, -6, 8);
        const c = randInt(rng, -15, 15);
        const eq = `y = ${m === 0 ? 2 : m}x${fmtSignedConst(c)}`;
        const q = dlp ? `What is the y-intercept of the graph ${eq}?` : `Apakah pintasan-y bagi graf fungsi ${eq}?`;
        const exp = `Apabila x = 0, y = ${c}.`;
        return makeMcq(rng, q, String(c), [String(m === 0 ? 2 : m), String(-c === c ? c + 2 : -c), String(c + 3)], exp);
      }
    ],
    laju_pecutan: [
      (rng, dlp) => {
        const u = randInt(rng, 2, 24);
        const a = randInt(rng, 2, 9);
        const t = randInt(rng, 2, 10);
        const v = u + a * t;
        const q = dlp
          ? `An object accelerates uniformly from ${u} m/s to ${v} m/s in ${t} s. Calculate its acceleration.`
          : `Satu objek memecut secara seragam dari ${u} m/s kepada ${v} m/s dalam masa ${t} s. Hitung pecutannya.`;
        const exp = `a = (v - u) / t = (${v} - ${u}) / ${t} = ${a} m/s².`;
        return makeMcq(rng, q, `${a} m/s²`, [`${a + 1} m/s²`, `${v - u} m/s²`, `${a * 2} m/s²`], exp);
      },
      (rng, dlp) => {
        const k = randInt(rng, 1, 8);
        const kmh = k * 18;
        const ms = k * 5;
        const q = dlp ? `Convert ${kmh} km/h to m/s.` : `Tukarkan ${kmh} km/j kepada m/s.`;
        const exp = `${kmh} × (1000 ÷ 3600) = ${ms} m/s.`;
        return makeMcq(rng, q, `${ms} m/s`, [`${ms + 5} m/s`, `${kmh} m/s`, `${Math.max(2, ms - 3)} m/s`], exp);
      },
      (rng, dlp) => {
        const u = randInt(rng, 4, 20);
        const a = randInt(rng, 2, 7);
        const t = randInt(rng, 3, 9);
        const v = u + a * t;
        const q = dlp
          ? `A car starts at ${u} m/s and accelerates at ${a} m/s² for ${t} s. Find its final speed.`
          : `Sebuah kereta bermula pada ${u} m/s dan memecut pada ${a} m/s² selama ${t} s. Cari laju akhirnya.`;
        const exp = `v = u + at = ${u} + (${a} × ${t}) = ${v} m/s.`;
        return makeMcq(rng, q, `${v} m/s`, [`${v + a} m/s`, `${a * t} m/s`, `${u + t} m/s`], exp);
      }
    ],
    kecerunan: [
      (rng, dlp) => {
        const x1 = randInt(rng, -3, 6);
        const dx = randInt(rng, 2, 7);
        const m = pick(rng, [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]);
        const y1 = randInt(rng, -5, 8);
        const x2 = x1 + dx;
        const y2 = y1 + m * dx;
        const q = dlp
          ? `Find the gradient of the straight line passing through (${x1}, ${y1}) and (${x2}, ${y2}).`
          : `Cari kecerunan garis lurus yang melalui titik (${x1}, ${y1}) dan (${x2}, ${y2}).`;
        const exp = `m = (${y2} - ${y1}) / (${x2} - ${x1}) = ${m * dx} / ${dx} = ${m}.`;
        return makeMcq(rng, q, String(m), [String(-m), String(m + 1), String(m - 2)], exp);
      },
      (rng, dlp) => {
        const xInt = randInt(rng, 2, 12);
        const m = randInt(rng, 2, 8);
        const yInt = -m * xInt;
        const q = dlp
          ? `A straight line has x-intercept ${xInt} and y-intercept ${yInt}. Find its gradient.`
          : `Suatu garis lurus mempunyai pintasan-x = ${xInt} dan pintasan-y = ${yInt}. Cari kecerunannya.`;
        const exp = `m = -(pintasan-y / pintasan-x) = -(${yInt} / ${xInt}) = ${m}.`;
        return makeMcq(rng, q, String(m), [String(-m), String(m + 2), String(Math.max(1, m - 1))], exp);
      }
    ],
    transformasi: [
      (rng, dlp) => {
        const x = randInt(rng, -8, 9);
        const y = randInt(rng, -8, 9);
        const tx = randInt(rng, -6, 6) || 2;
        const ty = randInt(rng, -6, 6) || -3;
        const nx = x + tx;
        const ny = y + ty;
        const q = dlp
          ? `Find the image of point P(${x}, ${y}) under translation (${tx}, ${ty}).`
          : `Cari imej bagi titik P(${x}, ${y}) di bawah translasi (${tx}, ${ty}).`;
        const exp = `(${x} + ${tx}, ${y} + ${ty}) = (${nx}, ${ny}).`;
        return makeMcq(rng, q, `(${nx}, ${ny})`, [`(${x - tx}, ${y - ty})`, `(${nx + 1}, ${ny})`, `(${ny}, ${nx === ny ? nx + 2 : nx})`], exp);
      },
      (rng, dlp) => {
        const x = randInt(rng, 1, 15);
        let y = randInt(rng, 1, 15);
        if (y === x) y += 1;
        const onX = rng() > 0.5;
        const ans = onX ? `(${x}, ${-y})` : `(${-x}, ${y})`;
        const axis = onX ? "x" : "y";
        const q = dlp
          ? `Find the image of (${x}, ${y}) under reflection in the ${axis}-axis.`
          : `Cari imej bagi titik (${x}, ${y}) di bawah pantulan pada paksi-${axis}.`;
        const exp = onX ? `Pantulan paksi-x: (x, y) -> (x, -y) = ${ans}.` : `Pantulan paksi-y: (x, y) -> (-x, y) = ${ans}.`;
        return makeMcq(rng, q, ans, [onX ? `(${-x}, ${y})` : `(${x}, ${-y})`, `(${-x}, ${-y})`, `(${y}, ${x})`], exp);
      }
    ],
    sukatan_kecenderungan: [
      (rng, dlp) => {
        const mid = randInt(rng, 6, 40);
        const vals = [mid - randInt(rng, 4, 5), mid - randInt(rng, 1, 3), mid, mid + randInt(rng, 1, 3), mid + randInt(rng, 4, 7)];
        const sh = shuffle(rng, vals);
        const q = dlp ? `Find the median of the data: ${sh.join(", ")}.` : `Cari median bagi set data: ${sh.join(", ")}.`;
        const exp = `Susun menaik: ${vals.join(", ")}. Median = ${mid}.`;
        return makeMcq(rng, q, String(mid), [String(vals[1]), String(vals[3]), String(mid + 4)], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 8, 35);
        const d1 = randInt(rng, 1, 4);
        const d2 = randInt(rng, 2, 6);
        const vals = [m - d1, m + d1, m - d2, m + d2, m];
        const sh = shuffle(rng, vals);
        const q = dlp ? `Find the mean of: ${sh.join(", ")}.` : `Cari min bagi data: ${sh.join(", ")}.`;
        const exp = `Jumlah = ${m * 5}, Min = ${m * 5} ÷ 5 = ${m}.`;
        return makeMcq(rng, q, String(m), [String(m + 2), String(m - 2), String(m * 5)], exp);
      },
      (rng, dlp) => {
        const modeVal = randInt(rng, 2, 20);
        const o1 = modeVal + 2;
        const o2 = modeVal + 5;
        const o3 = modeVal + 7;
        const sh = shuffle(rng, [modeVal, o1, modeVal, o2, modeVal, o3, o1]);
        const q = dlp ? `Find the mode of: ${sh.join(", ")}.` : `Cari mod bagi data: ${sh.join(", ")}.`;
        const exp = `Nilai ${modeVal} paling kerap muncul (3 kali).`;
        return makeMcq(rng, q, String(modeVal), [String(o1), String(o2), String(o3)], exp);
      }
    ],
    kebarangkalian: [
      (rng, dlp) => {
        const red = randInt(rng, 2, 12);
        let blue = randInt(rng, 3, 14);
        if (blue === red) blue += 1;
        const total = red + blue;
        const g = gcd(red, total);
        const ans = `${red / g}/${total / g}`;
        const q = dlp
          ? `A box has ${red} red balls and ${blue} blue balls. Find the probability of picking a red ball (simplest form).`
          : `Sebuah kotak mengandungi ${red} biji bola merah dan ${blue} biji bola biru. Cari kebarangkalian memilih bola merah (termudah).`;
        const exp = `P(Merah) = ${red}/${total} = ${ans}.`;
        return makeMcq(rng, q, ans, [`${blue / gcd(blue, total)}/${total / gcd(blue, total)}`, `${red}/${blue}`, `1/${total}`], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 1, 9);
        const b = randInt(rng, 2, 8);
        const c = randInt(rng, 2, 7);
        const total = a + b + c;
        const fav = b + c;
        const g = gcd(fav, total);
        const ans = `${fav / g}/${total / g}`;
        const q = dlp
          ? `A bag has ${a} red, ${b} blue, and ${c} green marbles. Find the probability of NOT picking red.`
          : `Sebuah beg ada ${a} guli merah, ${b} biru dan ${c} hijau. Cari kebarangkalian memilih BUKAN merah.`;
        const exp = `Bukan merah = ${b} + ${c} = ${fav} daripada ${total}. P = ${fav}/${total} = ${ans}.`;
        const compFrac = `${a / gcd(a, total)}/${total / gcd(a, total)}`;
        const altComp = compFrac === ans ? `${Math.max(1, a - 1)}/${total}` : compFrac;
        return makeMcq(rng, q, ans, [altComp, `${b}/${total}`, `1/${total}`], exp);
      },
      (rng, dlp) => {
        const denom = pick(rng, [4, 5, 8, 10]);
        const num = randInt(rng, 1, denom - 1);
        const mult = randInt(rng, 3, 15);
        const trials = denom * mult;
        const expected = num * mult;
        const q = dlp
          ? `The probability of winning a game is ${num}/${denom}. Out of ${trials} tries, how many wins are expected?`
          : `Kebarangkalian menang permainan ialah ${num}/${denom}. Daripada ${trials} percubaan, berapakah jangkaan kemenangan?`;
        const exp = `Jangkaan = (${num}/${denom}) × ${trials} = ${expected}.`;
        return makeMcq(rng, q, String(expected), [String(expected + mult), String(Math.max(1, expected - num)), String(trials - expected === expected ? expected + 5 : trials - expected)], exp);
      }
    ],
    // T2 Sains calculation generators
    elektrik_magnet: [
      (rng, dlp) => {
        const i = randInt(rng, 2, 12);
        const r = randInt(rng, 2, 15);
        const v = i * r;
        const q = dlp
          ? `A current of ${i} A flows through a ${r} Ω resistor. Calculate the voltage across it.`
          : `Arus elektrik ${i} A mengalir melalui perintang ${r} Ω. Hitung voltan yang merentasinya.`;
        const exp = `Hukum Ohm: V = I × R = ${i} × ${r} = ${v} V.`;
        return makeMcq(rng, q, `${v} V`, [`${i + r} V`, `${v + i} V`, `${Math.max(2, v - r)} V`], exp);
      },
      (rng, dlp) => {
        const r = randInt(rng, 2, 12);
        const i = randInt(rng, 2, 11);
        const v = i * r;
        const q = dlp
          ? `A ${v} V battery is connected across a ${r} Ω resistor. Calculate the electric current.`
          : `Bateri ${v} V disambungkan merentasi perintang ${r} Ω. Hitung arus elektrik yang mengalir.`;
        const exp = `I = V ÷ R = ${v} ÷ ${r} = ${i} A.`;
        return makeMcq(rng, q, `${i} A`, [`${v + r} A`, `${i + 2} A`, `${v * r} A`], exp);
      },
      (rng, dlp) => {
        const i = randInt(rng, 2, 12);
        const r = randInt(rng, 2, 12);
        const v = i * r;
        const q = dlp
          ? `When a voltage of ${v} V drives a current of ${i} A through a bulb, what is its resistance?`
          : `Apabila voltan ${v} V menghasilkan arus ${i} A melalui mentol, berapakah rintangannya?`;
        const exp = `R = V ÷ I = ${v} ÷ ${i} = ${r} Ω.`;
        return makeMcq(rng, q, `${r} Ω`, [`${v + i} Ω`, `${r + 2} Ω`, `${Math.max(1, r - 1)} Ω`], exp);
      }
    ],
    daya_gerakan: [
      (rng, dlp) => {
        const p = randInt(rng, 5, 45) * 10;
        const a = randInt(rng, 2, 9);
        const f = p * a;
        const q = dlp
          ? `A force of ${f} N acts on a surface area of ${a} m². Calculate the pressure exerted.`
          : `Daya ${f} N bertindak ke atas luas permukaan ${a} m². Hitung tekanan yang terhasil.`;
        const exp = `Tekanan P = F / A = ${f} ÷ ${a} = ${p} Pa.`;
        return makeMcq(rng, q, `${p} Pa`, [`${f * a} Pa`, `${p + 20} Pa`, `${Math.max(5, p - 15)} Pa`], exp);
      },
      (rng, dlp) => {
        const f = randInt(rng, 10, 65) * 5;
        const d = randInt(rng, 2, 8);
        const m = f * d;
        const q = dlp
          ? `Calculate the moment of force when a ${f} N force acts ${d} m perpendicular to the pivot.`
          : `Hitung momen daya apabila daya ${f} N bertindak pada jarak tegak ${d} m dari fulkrum.`;
        const exp = `Momen = Daya × Jarak tegak = ${f} × ${d} = ${m} N m.`;
        return makeMcq(rng, q, `${m} N m`, [`${f + d} N m`, `${Math.round(f / d)} N m`, `${m + f} N m`], exp);
      },
      (rng, dlp) => {
        const w1 = randInt(rng, 2, 10) * 10;
        const d1 = randInt(rng, 2, 6);
        const d2 = pick(rng, [2, 4, 5]);
        const f2 = (w1 * d1) / d2;
        if (!Number.isInteger(f2)) {
          const fw = w1 * 2;
          const ans = w1;
          const q = dlp
            ? `A seesaw balances with a ${fw} N load ${d1} m from the fulcrum and an effort ${d1 * 2} m on the other side. Find the effort.`
            : `Jongkang-jongket seimbang dengan beban ${fw} N pada jarak ${d1} m dari fulkrum dan daya pada ${d1 * 2} m di sebelah lain. Cari nilai daya.`;
          const exp = `Daya × ${d1 * 2} = ${fw} × ${d1} -> Daya = ${ans} N.`;
          return makeMcq(rng, q, `${ans} N`, [`${fw} N`, `${fw * 2} N`, `${ans + 10} N`], exp);
        }
        const q = dlp
          ? `A lever balances with a ${w1} N load at ${d1} m from the fulcrum. What effort at ${d2} m balances it?`
          : `Sebuah tuas seimbang dengan beban ${w1} N sejauh ${d1} m dari fulkrum. Berapakah daya pada jarak ${d2} m untuk mengimbanginya?`;
        const exp = `(${w1} × ${d1}) ÷ ${d2} = ${f2} N.`;
        return makeMcq(rng, q, `${f2} N`, [`${f2 + 10} N`, `${w1 + d1} N`, `${f2 * 2} N`], exp);
      }
    ],
    // T2 Geografi scale & distance generator
    skala_jarak: [
      (rng, _dlp) => {
        const cmPerUnit = pick(rng, [1, 2]);
        const kmPerUnit = randInt(rng, 2, 12);
        const mult = randInt(rng, 2, 11);
        const mapCm = cmPerUnit * mult;
        const actualKm = kmPerUnit * mult;
        const q = `Jika skala peta ialah ${cmPerUnit} cm mewakili ${kmPerUnit} km, berapakah jarak sebenar bagi ${mapCm} cm pada peta?`;
        const exp = `(${mapCm} ÷ ${cmPerUnit}) × ${kmPerUnit} km = ${actualKm} km.`;
        return makeMcq(rng, q, `${actualKm} km`, [`${actualKm + kmPerUnit} km`, `${mapCm + kmPerUnit} km`, `${Math.max(2, actualKm - 3)} km`], exp);
      },
      (rng, _dlp) => {
        const kmPerCm = randInt(rng, 2, 10);
        const mapCm = randInt(rng, 2, 15);
        const actualKm = kmPerCm * mapCm;
        const q = `Skala penyata peta ialah 1 cm mewakili ${kmPerCm} km. Jika jarak sebenar dua bandar ialah ${actualKm} km, berapakah jaraknya pada peta?`;
        const exp = `Jarak peta = ${actualKm} ÷ ${kmPerCm} = ${mapCm} cm.`;
        return makeMcq(rng, q, `${mapCm} cm`, [`${mapCm + 2} cm`, `${actualKm} cm`, `${Math.max(1, mapCm - 1)} cm`], exp);
      },
      (rng, _dlp) => {
        const kmPerCm = pick(rng, [1, 2, 3, 4, 5, 6, 8, 10]);
        const rf = (kmPerCm * 100000).toLocaleString("en-MY").replace(/,/g, " ");
        const q = `Tukarkan skala penyata '1 cm mewakili ${kmPerCm} km' kepada pecahan wakilan.`;
        const exp = `1 km = 100 000 cm, maka ${kmPerCm} km = ${rf} cm -> 1 : ${rf}.`;
        return makeMcq(
          rng,
          q,
          `1 : ${rf}`,
          [
            `1 : ${(kmPerCm * 1000).toLocaleString("en-MY").replace(/,/g, " ")}`,
            `1 : ${(kmPerCm * 10000).toLocaleString("en-MY").replace(/,/g, " ")}`,
            `1 : ${(kmPerCm * 1000000).toLocaleString("en-MY").replace(/,/g, " ")}`
          ],
          exp
        );
      }
    ]
  };

  // ==================== TINGKATAN 4 GENERATORS ====================
  const T4 = {
    kuadratik: [
      (rng, dlp) => {
        const r1 = randInt(rng, -7, 8);
        let r2 = randInt(rng, -7, 8);
        if (r1 === 0 && r2 === 0) r2 = 3;
        const b = -(r1 + r2);
        const c = r1 * r2;
        const small = Math.min(r1, r2);
        const large = Math.max(r1, r2);
        const ans = r1 === r2 ? `x = ${r1}` : `x = ${small}, ${large}`;
        const eq = `x²${fmtSignedTerm(b, "x")}${fmtSignedConst(c)} = 0`;
        const q = dlp ? `Find the roots of the quadratic equation ${eq}.` : `Cari punca-punca bagi persamaan kuadratik ${eq}.`;
        const exp = `(x${fmtSignedConst(-r1)})(x${fmtSignedConst(-r2)}) = 0, maka ${ans}.`;
        const negSmall = Math.min(-r1, -r2);
        const negLarge = Math.max(-r1, -r2);
        const distractors = r1 === r2
          ? [r1 === 0 ? "x = 2" : r1 === 1 ? "x = -2" : `x = ${-r1}`, `x = ${r1 + 1}`, `x = ${r1 - 1}`]
          : [
              (negSmall === small && negLarge === large) || (negSmall === small + 1 && negLarge === large + 1)
                ? `x = ${small - 1}, ${large + 1}`
                : `x = ${negSmall}, ${negLarge}`,
              `x = ${small + 1}, ${large + 1}`,
              `x = ${small - 2}, ${large + 2}`
            ];
        return makeMcq(rng, q, ans, distractors, exp);
      },
      (rng, dlp) => {
        const a = pick(rng, [1, 2, 3]);
        const h = randInt(rng, -6, 6) || 2;
        const b = -2 * a * h;
        const c = randInt(rng, -8, 12);
        const eq = `${a === 1 ? "" : a}x²${fmtSignedTerm(b, "x")}${fmtSignedConst(c)}`;
        const q = dlp
          ? `Find the axis of symmetry of the quadratic graph f(x) = ${eq}.`
          : `Cari persamaan paksi simetri bagi graf kuadratik f(x) = ${eq}.`;
        const exp = `x = -b/(2a) = -(${b})/(2×${a}) = ${h}.`;
        return makeMcq(rng, q, `x = ${h}`, [`x = ${-h}`, `x = ${h + 2}`, `x = ${b}`], exp);
      }
    ],
    asas_nombor: [
      (rng, dlp) => {
        const base = pick(rng, [2, 3, 4, 5, 6, 7, 8, 9]);
        const dec = randInt(rng, 10, 95);
        const conv = dec.toString(base);
        const q = dlp ? `Convert ${conv} (base ${base}) to base 10.` : `Tukarkan ${conv} asas ${base} kepada asas 10.`;
        const exp = `${conv} (asas ${base}) = ${dec}₁₀.`;
        return makeMcq(rng, q, String(dec), [String(dec + 2), String(dec - 3), String(dec + base + 3)], exp);
      },
      (rng, dlp) => {
        const base = pick(rng, [2, 5, 8]);
        const dec = randInt(rng, 9, 48);
        const ans = dec.toString(base);
        const q = dlp ? `Convert ${dec}₁₀ to base ${base}.` : `Tukarkan nombor ${dec}₁₀ kepada asas ${base}.`;
        const exp = `Bahagi berulang ${dec} dengan ${base} menghasilkan ${ans} asas ${base}.`;
        return makeMcq(rng, q, `${ans} (asas ${base})`, [`${(dec + 1).toString(base)} (asas ${base})`, `${(dec - 2).toString(base)} (asas ${base})`, `${(dec + 3).toString(base)} (asas ${base})`], exp);
      },
      (rng, dlp) => {
        const base = pick(rng, [5, 6, 7, 8, 9]);
        const d2 = randInt(rng, 1, base - 1);
        const d1 = randInt(rng, 0, base - 1);
        const d0 = randInt(rng, 0, base - 1);
        const pos = pick(rng, [1, 2]);
        const digit = pos === 2 ? d2 : d1;
        if (digit === 0) {
          const val = d2 * base * base;
          const numStr = `${d2}${d1}${d0}`;
          const q = dlp
            ? `What is the value of the digit ${d2} in ${numStr} (base ${base})?`
            : `Apakah nilai bagi digit ${d2} dalam nombor ${numStr} asas ${base}?`;
          const exp = `Digit ${d2} pada nilai tempat ${base}² = ${d2} × ${base * base} = ${val}.`;
          return makeMcq(rng, q, String(val), [String(d2 * base), String(d2 * 100), String(val + base)], exp);
        }
        const val = digit * Math.pow(base, pos);
        const numStr = `${d2}${d1}${d0}`;
        const q = dlp
          ? `Find the value of digit ${digit} at position ${base}${pos === 2 ? "²" : "¹"} in ${numStr} (base ${base}).`
          : `Cari nilai digit ${digit} pada nilai tempat ${base}${pos === 2 ? "²" : "¹"} dalam ${numStr} asas ${base}.`;
        const exp = `${digit} × ${Math.pow(base, pos)} = ${val}.`;
        return makeMcq(rng, q, String(val), [String(val + base), String(digit * Math.pow(10, pos)), String(digit)], exp);
      }
    ],
    penaakulan_logik: [
      (rng, dlp) => {
        const pNum = pick(rng, [2, 3, 5, 7, 11, 13, 17, 19]);
        const compNum = pick(rng, [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20]);
        const pIsTrue = rng() > 0.5;
        const qIsTrue = rng() > 0.5;
        const useAnd = rng() > 0.5;
        const pVal = pIsTrue ? pNum : compNum;
        const qVal = qIsTrue ? randInt(rng, 2, 12) * 2 : randInt(rng, 2, 12) * 2 + 1;
        const ansBool = useAnd ? pIsTrue && qIsTrue : pIsTrue || qIsTrue;
        const trueStr = dlp ? "True" : "Benar";
        const falseStr = dlp ? "False" : "Palsu";
        const conn = useAnd ? (dlp ? "and" : "dan") : dlp ? "or" : "atau";
        const q = dlp
          ? `Determine the truth value of: "${pVal} is a prime number ${conn} ${qVal} is an even number."`
          : `Tentukan nilai kebenaran bagi pernyataan majmuk: "${pVal} ialah nombor perdana ${conn} ${qVal} ialah nombor genap."`;
        const exp = `p = ${pIsTrue ? trueStr : falseStr}, q = ${qIsTrue ? trueStr : falseStr}. Maka p ${conn} q ialah ${ansBool ? trueStr : falseStr}.`;
        return makeMcq(
          rng,
          q,
          ansBool ? trueStr : falseStr,
          [ansBool ? falseStr : trueStr, dlp ? "Cannot be determined" : "Tidak dapat ditentukan", dlp ? "Not a statement" : "Bukan pernyataan"],
          exp
        );
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 12);
        const b = a * randInt(rng, 2, 9);
        const pStmt = `x > ${b}`;
        const qStmt = `x > ${a}`;
        const q = dlp
          ? `Write the contrapositive of the implication: "If ${pStmt}, then ${qStmt}."`
          : `Apakah kontrapositif bagi implikasi: "Jika ${pStmt}, maka ${qStmt}."?`;
        const ans = dlp ? `If x ≤ ${a}, then x ≤ ${b}.` : `Jika x ≤ ${a}, maka x ≤ ${b}.`;
        const exp = `Kontrapositif menukar 'Jika p, maka q' kepada 'Jika bukan q, maka bukan p'.`;
        return makeMcq(
          rng,
          q,
          ans,
          [
            dlp ? `If ${qStmt}, then ${pStmt}.` : `Jika ${qStmt}, maka ${pStmt}.`,
            dlp ? `If x ≤ ${b}, then x ≤ ${a}.` : `Jika x ≤ ${b}, maka x ≤ ${a}.`,
            dlp ? `If ${pStmt}, then x ≤ ${a}.` : `Jika ${pStmt}, maka x ≤ ${a}.`
          ],
          exp
        );
      }
    ],
    operasi_set: [
      (rng, dlp) => {
        const a = randInt(rng, 1, 5);
        const b = a + randInt(rng, 1, 4);
        const c = b + randInt(rng, 1, 4);
        const d = c + randInt(rng, 1, 4);
        const e = d + randInt(rng, 1, 4);
        const f = e + randInt(rng, 1, 4);
        const setA = `{${a}, ${b}, ${c}, ${d}}`;
        const setB = `{${c}, ${d}, ${e}, ${f}}`;
        const askUnion = rng() > 0.5;
        if (askUnion) {
          const q = dlp ? `Given A = ${setA} and B = ${setB}, find A ∪ B.` : `Diberi Set A = ${setA} dan Set B = ${setB}. Cari A ∪ B.`;
          return makeMcq(rng, q, `{${a}, ${b}, ${c}, ${d}, ${e}, ${f}}`, [`{${c}, ${d}}`, `{${a}, ${b}}`, `{${e}, ${f}}`], `Kesatuan (∪) menggabungkan semua unsur A dan B.`);
        }
        const q = dlp ? `Given A = ${setA} and B = ${setB}, find A ∩ B.` : `Diberi Set A = ${setA} dan Set B = ${setB}. Cari A ∩ B.`;
        return makeMcq(rng, q, `{${c}, ${d}}`, [`{${a}, ${b}, ${c}, ${d}, ${e}, ${f}}`, `{${a}, ${b}}`, `{${e}, ${f}}`], `Persilangan (∩) ialah unsur sepunya: {${c}, ${d}}.`);
      },
      (rng, dlp) => {
        const nA = randInt(rng, 10, 30);
        const nB = randInt(rng, 12, 32);
        const nInter = randInt(rng, 2, Math.min(nA, nB) - 2);
        const nUnion = nA + nB - nInter;
        const q = dlp
          ? `Given n(A) = ${nA}, n(B) = ${nB}, and n(A ∩ B) = ${nInter}, find n(A ∪ B).`
          : `Diberi n(A) = ${nA}, n(B) = ${nB} dan n(A ∩ B) = ${nInter}. Hitung n(A ∪ B).`;
        const exp = `n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = ${nA} + ${nB} - ${nInter} = ${nUnion}.`;
        return makeMcq(rng, q, String(nUnion), [String(nA + nB), String(nA + nB + nInter), String(nUnion - 2)], exp);
      }
    ],
    rangkaian_graf: [
      (rng, dlp) => {
        const e = randInt(rng, 4, 28);
        const sumDeg = 2 * e;
        const q = dlp
          ? `A simple graph has ${e} edges. What is the sum of degrees of all its vertices?`
          : `Suatu graf ringkas mempunyai ${e} tepi. Berapakah hasil tambah darjah semua bucunya?`;
        const exp = `∑d(v) = 2 × bilangan tepi = 2 × ${e} = ${sumDeg}.`;
        return makeMcq(rng, q, String(sumDeg), [String(e), String(sumDeg + 2), String(sumDeg - 2)], exp);
      },
      (rng, dlp) => {
        const v = randInt(rng, 5, 35);
        const e = v - 1;
        const q = dlp
          ? `A tree has ${v} vertices. How many edges does it have?`
          : `Sebuah pokok (tree) mempunyai ${v} bucu. Berapakah bilangan tepinya?`;
        const exp = `Bilangan tepi pokok = V - 1 = ${v} - 1 = ${e}.`;
        return makeMcq(rng, q, String(e), [String(v), String(v + 1), String(2 * v)], exp);
      },
      (rng, dlp) => {
        const e = randInt(rng, 6, 20);
        const sumDeg = 2 * e;
        const partSum = sumDeg - randInt(rng, 2, 7);
        const missing = sumDeg - partSum;
        const q = dlp
          ? `A graph has ${e} edges. If the sum of degrees of all vertices except vertex P is ${partSum}, find d(P).`
          : `Suatu graf ada ${e} tepi. Jika jumlah darjah bucu lain ialah ${partSum}, cari darjah bucu P.`;
        const exp = `Jumlah darjah = 2(${e}) = ${sumDeg}. Maka d(P) = ${sumDeg} - ${partSum} = ${missing}.`;
        return makeMcq(rng, q, String(missing), [String(missing + 2), String(missing + 1), String(e)], exp);
      }
    ],
    ketaksamaan_linear: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 5);
        const b = randInt(rng, 2, 5);
        const gx = randInt(rng, 1, 5);
        const gy = randInt(rng, 1, 5);
        const rhs = a * gx + b * gy - randInt(rng, 0, 2);
        // Point (gx, gy) satisfies ax + by >= rhs
        const bx = 0;
        const by = 0;
        const c1 = `(0, 0)`;
        const c2 = `(${gx + 5}, 0)`;
        const c3 = `(0, ${gy + 5})`;
        const validPt = `(${gx}, ${gy})`;
        // Ensure (gx+5, 0) fails ax + by <= limit
        const limit = a * gx + b * gy;
        const failX = Math.ceil((limit + 2) / a);
        const failY = Math.ceil((limit + 2) / b);
        const q = dlp
          ? `Which point satisfies the inequality ${a}x + ${b}y ≤ ${limit}?`
          : `Titik manakah yang memuaskan ketaksamaan linear ${a}x + ${b}y ≤ ${limit}?`;
        const exp = `${a}(${gx}) + ${b}(${gy}) = ${limit} ≤ ${limit} (benar).`;
        return makeMcq(
          rng,
          q,
          validPt,
          [`(${failX}, 1)`, `(1, ${failY})`, `(${failX + 1}, ${failY + 1})`],
          exp
        );
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 7);
        const c = randInt(rng, 1, 10);
        const x = randInt(rng, 1, 6);
        const y = m * x + c + randInt(rng, 2, 5);
        const eq = `y > ${m}x + ${c}`;
        const ans = `(${x}, ${y})`;
        const wrongY = m * x + c - 2;
        const q = dlp ? `Which point lies in the region ${eq}?` : `Titik manakah berada dalam rantau ${eq}?`;
        const exp = `Bagi (${x}, ${y}): ${y} > ${m}(${x}) + ${c} (${m * x + c}), benar.`;
        return makeMcq(rng, q, ans, [`(${x}, ${wrongY})`, `(${x}, ${m * x + c})`, `(0, ${c - 3})`], exp);
      }
    ],
    graf_gerakan: [
      (rng, dlp) => {
        const v = randInt(rng, 4, 24);
        const t = randInt(rng, 2, 12);
        const d = v * t;
        const q = dlp
          ? `On a distance-time graph, a straight line rises uniformly by ${d} m in ${t} s. Find the speed.`
          : `Pada graf jarak-masa, suatu garis lurus meningkat sebanyak ${d} m dalam ${t} s. Cari lajunya.`;
        const exp = `Kecerunan = Perubahan jarak / Perubahan masa = ${d} / ${t} = ${v} m/s.`;
        return makeMcq(rng, q, `${v} m/s`, [`${v + 2} m/s`, `${d + t} m/s`, `${Math.max(1, v - 3)} m/s`], exp);
      },
      (rng, dlp) => {
        const v = randInt(rng, 4, 20) * 2;
        const t = randInt(rng, 3, 14);
        const dist = 0.5 * t * v;
        const q = dlp
          ? `A speed-time graph starts at 0 m/s and rises uniformly to ${v} m/s in ${t} s. Calculate the total distance.`
          : `Graf laju-masa bermula dari 0 m/s dan meningkat seragam ke ${v} m/s dalam ${t} s. Hitung jumlah jarak.`;
        const exp = `Luas segi tiga di bawah graf = 1/2 × ${t} × ${v} = ${dist} m.`;
        return makeMcq(rng, q, `${dist} m`, [`${t * v} m`, `${dist + v} m`, `${Math.max(4, dist - t)} m`], exp);
      },
      (rng, dlp) => {
        const u = randInt(rng, 10, 40);
        const a = randInt(rng, 2, 8);
        const t = randInt(rng, 2, 6);
        const v = u - a * t;
        if (v >= 0) {
          const q = dlp
            ? `An object slows down uniformly from ${u} m/s to ${v} m/s in ${t} s. Find its deceleration.`
            : `Satu objek mengalami nyahpecutan seragam daripada ${u} m/s kepada ${v} m/s dalam ${t} s. Hitung nilai nyahpecutan.`;
          const exp = `Kadar nyahpecutan = (${u} - ${v}) / ${t} = ${a} m/s².`;
          return makeMcq(rng, q, `${a} m/s²`, [`${a + 2} m/s²`, `${u - v} m/s²`, `${Math.max(1, a - 1)} m/s²`], exp);
        }
        const v2 = u + a * t;
        const q = dlp
          ? `Speed increases uniformly from ${u} m/s to ${v2} m/s in ${t} s. Find acceleration.`
          : `Laju meningkat seragam dari ${u} m/s ke ${v2} m/s dalam ${t} s. Cari pecutan.`;
        return makeMcq(rng, q, `${a} m/s²`, [`${a + 2} m/s²`, `${a * 2} m/s²`, `${Math.max(1, a - 1)} m/s²`], `a = (${v2}-${u})/${t} = ${a} m/s².`);
      }
    ],
    sukatan_serakan: [
      (rng, dlp) => {
        const q1 = randInt(rng, 10, 45);
        const iqr = randInt(rng, 5, 35);
        const q3 = q1 + iqr;
        const q = dlp
          ? `Given Q₁ = ${q1} and Q₃ = ${q3}, calculate the interquartile range (IQR).`
          : `Diberi kuartil pertama Q₁ = ${q1} dan kuartil ketiga Q₃ = ${q3}. Hitung julat antara kuartil.`;
        const exp = `Julat antara kuartil = Q₃ - Q₁ = ${q3} - ${q1} = ${iqr}.`;
        return makeMcq(rng, q, String(iqr), [String(q1 + q3), String(iqr + 4), String(Math.max(1, iqr - 3))], exp);
      },
      (rng, dlp) => {
        const sd = randInt(rng, 2, 20);
        const variance = sd * sd;
        const q = dlp
          ? `A data set has a variance of ${variance}. Calculate its standard deviation.`
          : `Suatu set data mempunyai varians ${variance}. Hitung sisihan piawainya.`;
        const exp = `Sisihan piawai = √${variance} = ${sd}.`;
        return makeMcq(rng, q, String(sd), [String(variance), String(sd * 2), String(sd + 3)], exp);
      },
      (rng, dlp) => {
        const min = randInt(rng, 5, 40);
        const max = min + randInt(rng, 10, 60);
        const range = max - min;
        const q = dlp
          ? `The smallest value in a data set is ${min} and the largest is ${max}. Find the range.`
          : `Nilai terkecil suatu data ialah ${min} dan nilai terbesar ialah ${max}. Cari julatnya.`;
        const exp = `Julat = ${max} - ${min} = ${range}.`;
        return makeMcq(rng, q, String(range), [String(max + min), String(range + 5), String(Math.round(range / 2))], exp);
      }
    ],
    kebarangkalian: [
      (rng, dlp) => {
        const pa = randInt(rng, 1, 9) / 10;
        const pb = randInt(rng, 1, 9) / 10;
        const ans = (pa * pb).toFixed(2);
        const q = dlp
          ? `A and B are independent events with P(A) = ${pa.toFixed(1)} and P(B) = ${pb.toFixed(1)}. Find P(A ∩ B).`
          : `A dan B ialah peristiwa tak bersandar dengan P(A) = ${pa.toFixed(1)} dan P(B) = ${pb.toFixed(1)}. Cari P(A ∩ B).`;
        const exp = `P(A ∩ B) = ${pa.toFixed(1)} × ${pb.toFixed(1)} = ${ans}.`;
        const thirdOpt = pa * pb <= 0.05 ? pa * pb + 0.05 : pa * pb - 0.05;
        return makeMcq(rng, q, ans, [(pa + pb).toFixed(2), (pa * pb + 0.1).toFixed(2), thirdOpt.toFixed(2)], exp);
      },
      (rng, dlp) => {
        const p = randInt(rng, 5, 95) / 100;
        const comp = (1 - p).toFixed(2);
        const q = dlp
          ? `If P(rain) = ${p.toFixed(2)}, find the probability that it does NOT rain.`
          : `Jika kebarangkalian peristiwa A berlaku ialah ${p.toFixed(2)}, cari kebarangkalian A TIDAK berlaku.`;
        const exp = `P(A') = 1 - ${p.toFixed(2)} = ${comp}.`;
        const compNum = Number(comp);
        const altP = p === 0.5 ? "0.25" : p.toFixed(2);
        const altComp = (compNum <= 0.15 ? compNum + 0.12 : compNum - 0.11).toFixed(2);
        return makeMcq(rng, q, comp, [altP, (1 + p).toFixed(2), altComp], exp);
      }
    ],
    kewangan: [
      (rng, dlp) => {
        const income = randInt(rng, 25, 85) * 100;
        const fixedExp = randInt(rng, 10, 22) * 100;
        const varExp = randInt(rng, 3, 12) * 100;
        const totalExp = fixedExp + varExp;
        const cf = income - totalExp;
        const q = dlp
          ? `Ahmad earns ${fmtMoney(income)} monthly. His fixed expenses are ${fmtMoney(fixedExp)} and variable expenses are ${fmtMoney(varExp)}. Find his monthly cash flow.`
          : `Pendapatan bulanan ialah ${fmtMoney(income)}, perbelanjaan tetap ${fmtMoney(fixedExp)} dan perbelanjaan tidak tetap ${fmtMoney(varExp)}. Hitung aliran tunai bulanannya.`;
        const exp = `Aliran tunai = ${fmtMoney(income)} - (${fmtMoney(fixedExp)} + ${fmtMoney(varExp)}) = ${fmtMoney(cf)}.`;
        return makeMcq(rng, q, fmtMoney(cf), [fmtMoney(cf + varExp), fmtMoney(income + totalExp), fmtMoney(cf + 200)], exp);
      },
      (rng, dlp) => {
        const savePerMonth = pick(rng, [150, 200, 250, 300, 400, 500, 600, 750, 800, 1000]);
        const months = randInt(rng, 3, 24);
        const goal = savePerMonth * months;
        const unit = dlp ? "months" : "bulan";
        const q = dlp
          ? `Mei wants to save ${fmtMoney(goal)} by saving ${fmtMoney(savePerMonth)} per month. How many months will it take?`
          : `Mei ingin menyimpan ${fmtMoney(goal)} dengan simpanan tetap ${fmtMoney(savePerMonth)} sebulan. Berapa bulankah diperlukan?`;
        const exp = `Tempoh = ${fmtMoney(goal)} ÷ ${fmtMoney(savePerMonth)} = ${months} ${unit}.`;
        return makeMcq(rng, q, `${months} ${unit}`, [`${months + 2} ${unit}`, `${Math.max(1, months - 2)} ${unit}`, `${months * 2} ${unit}`], exp);
      }
    ],
    // Add Math T4
    fungsi: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 11);
        const b = randInt(rng, -9, 12);
        const x = randInt(rng, -5, 9);
        const fx = a * x + b;
        const eq = `${a}x${fmtSignedConst(b)}`;
        const q = dlp ? `Given f(x) = ${eq}, find f(${x}).` : `Diberi f(x) = ${eq}, cari f(${x}).`;
        const exp = `f(${x}) = ${a}(${x})${fmtSignedConst(b)} = ${fx}.`;
        return makeMcq(rng, q, String(fx), [String(fx + a), String(fx - 3), String(a + x + b)], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 8);
        const b = randInt(rng, 1, 10);
        const x = randInt(rng, 1, 9);
        const y = a * x + b;
        const q = dlp
          ? `Given f(x) = ${a}x + ${b}, find f⁻¹(${y}).`
          : `Diberi fungsi f(x) = ${a}x + ${b}, cari nilai f⁻¹(${y}).`;
        const exp = `f(x) = ${y} -> ${a}x + ${b} = ${y} -> x = (${y} - ${b})/${a} = ${x}.`;
        return makeMcq(rng, q, String(x), [String(x + 2), String(y - b), String(Math.max(0, x - 1))], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 6);
        const b = randInt(rng, 1, 7);
        const x = randInt(rng, 1, 6);
        const gx = x + b;
        const fgx = a * gx;
        const q = dlp
          ? `Given f(x) = ${a}x and g(x) = x + ${b}, find fg(${x}).`
          : `Diberi f(x) = ${a}x dan g(x) = x + ${b}, cari fg(${x}).`;
        const exp = `g(${x}) = ${gx}, maka fg(${x}) = f(${gx}) = ${a}(${gx}) = ${fgx}.`;
        return makeMcq(rng, q, String(fgx), [String(a * x + b), String(fgx + a), String(gx)], exp);
      }
    ],
    fungsi_kuadratik: [
      (rng, dlp) => {
        const a = randInt(rng, 1, 4);
        const b = randInt(rng, 2, 9);
        const c = randInt(rng, 1, 8);
        const disc = b * b - 4 * a * c;
        const nature =
          disc > 0
            ? dlp ? "Two distinct real roots" : "Dua punca nyata berbeza"
            : disc === 0
            ? dlp ? "Two equal real roots" : "Dua punca nyata sama"
            : dlp ? "No real roots" : "Tiada punca nyata";
        const eq = `${a === 1 ? "" : a}x² + ${b}x + ${c} = 0`;
        const q = dlp
          ? `Determine the type of roots for ${eq} using b² - 4ac.`
          : `Tentukan jenis punca bagi persamaan kuadratik ${eq}.`;
        const exp = `b² - 4ac = (${b})² - 4(${a})(${c}) = ${disc}. Maka: ${nature}.`;
        const allNatures = dlp
          ? ["Two distinct real roots", "Two equal real roots", "No real roots", "Three real roots"]
          : ["Dua punca nyata berbeza", "Dua punca nyata sama", "Tiada punca nyata", "Tiga punca nyata"];
        return makeMcq(rng, q, nature, allNatures.filter((x) => x !== nature), exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 6);
        const s = randInt(rng, 2, 12);
        const p = randInt(rng, 1, 9);
        const b = -a * s;
        const eq = `${a}x²${fmtSignedTerm(b, "x")} + ${a * p} = 0`;
        const q = dlp ? `Find the sum of roots (α + β) for ${eq}.` : `Cari hasil tambah punca (α + β) bagi ${eq}.`;
        const exp = `α + β = -b/a = -(${b})/${a} = ${s}.`;
        return makeMcq(rng, q, String(s), [String(-s), p === s ? String(s + 1) : String(p), String(s + a)], exp);
      }
    ],
    sistem_persamaan: [
      (rng, dlp) => {
        const x = randInt(rng, 2, 12);
        const y = randInt(rng, 1, 10);
        if (x === y) {
          const eqX = x + 1;
          const qEq = dlp ? `Given x + y = ${x + y + 1} and x - y = 1, find x.` : `Jika x + y = ${x + y + 1} dan x - y = 1, cari x.`;
          return makeMcq(rng, qEq, String(eqX), [String(x), String(eqX + 2), "1"], `2x = ${2 * eqX} -> x = ${eqX}.`);
        }
        const s = x + y;
        const diff = x - y;
        const askX = rng() > 0.5;
        const q = dlp
          ? `Given x + y = ${s} and x - y = ${diff}, find ${askX ? "x" : "y"}.`
          : `Diberi x + y = ${s} dan x - y = ${diff}, cari nilai ${askX ? "x" : "y"}.`;
        const ans = askX ? x : y;
        const exp = askX ? `2x = ${s} + (${diff}) = ${2 * x} -> x = ${x}.` : `2y = ${s} - (${diff}) = ${2 * y} -> y = ${y}.`;
        return makeMcq(rng, q, String(ans), [String(askX ? y : x), String(ans + 2), String(s)], exp);
      },
      (rng, dlp) => {
        const x = randInt(rng, 2, 9);
        const a = randInt(rng, 2, 5);
        const y = a * x;
        const sum = x + y;
        const q = dlp
          ? `Solve the system: y = ${a}x and x + y = ${sum}. Find x.`
          : `Selesaikan sistem persamaan: y = ${a}x dan x + y = ${sum}. Cari nilai x.`;
        const exp = `Gantikan y = ${a}x -> ${a + 1}x = ${sum} -> x = ${x}.`;
        return makeMcq(rng, q, String(x), [String(y), String(x + 1), String(Math.max(1, x - 1))], exp);
      }
    ],
    indeks_surd_log: [
      (rng, dlp) => {
        const b = pick(rng, [2, 3, 5, 10]);
        const k = randInt(rng, 2, 5);
        const val = Math.pow(b, k);
        const q = dlp ? `Evaluate log_${b}(${val}).` : `Nilaikan log_${b}(${val}).`;
        const exp = `${b}^${k} = ${val}, maka log_${b}(${val}) = ${k}.`;
        return makeMcq(rng, q, String(k), [String(k + 1), String(b), String(val / b)], exp);
      },
      (rng, dlp) => {
        const k = randInt(rng, 2, 9);
        const base = pick(rng, [2, 3, 5, 6, 7]);
        const rad = k * k * base;
        const ans = `${k}√${base}`;
        const q = dlp ? `Simplify √${rad} in simplest surd form.` : `Permudahkan √${rad} dalam bentuk surd termudah.`;
        const exp = `√${rad} = √(${k * k} × ${base}) = ${ans}.`;
        return makeMcq(rng, q, ans, [`${base === k ? k + 2 : base}√${k}`, `${k * k}√${base}`, `${k + 1}√${base}`], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 9);
        const n = randInt(rng, 3, 9);
        const sum = m + n;
        const q = dlp ? `Simplify: a^${m} × a^${n}` : `Permudahkan: a^${m} × a^${n}`;
        const exp = `a^m × a^n = a^(m+n) = a^${sum}.`;
        return makeMcq(rng, q, `a^${sum}`, [`a^${m * n}`, `a^${Math.abs(m - n) === sum ? sum + 2 : Math.abs(m - n)}`, `2a^${sum}`], exp);
      }
    ],
    janjang: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 18);
        const d = randInt(rng, 2, 9);
        const n = randInt(rng, 5, 16);
        const tn = a + (n - 1) * d;
        const q = dlp
          ? `In an arithmetic progression, a = ${a} and d = ${d}. Find the ${n}th term (T${n}).`
          : `Dalam janjang aritmetik, sebutan pertama a = ${a} dan beza sepunya d = ${d}. Cari sebutan ke-${n}.`;
        const exp = `Tₙ = ${a} + (${n} - 1)(${d}) = ${tn}.`;
        return makeMcq(rng, q, String(tn), [String(a + n * d), String(tn - d), String(tn + 2)], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 7);
        const r = pick(rng, [2, 3, 4]);
        const n = randInt(rng, 3, 5);
        const tn = a * Math.pow(r, n - 1);
        const q = dlp
          ? `In a geometric progression, a = ${a} and common ratio r = ${r}. Find T${n}.`
          : `Dalam suatu janjang geometri, sebutan pertama a = ${a} dan nisbah sepunya r = ${r}. Cari T${n}.`;
        const exp = `Tₙ = ar^(n-1) = ${a} × ${r}^${n - 1} = ${tn}.`;
        return makeMcq(rng, q, String(tn), [String(tn * r), String(Math.round(tn / r)), String(a + (n - 1) * r)], exp);
      }
    ],
    hukum_linear: [
      (rng, dlp) => {
        const m = randInt(rng, 2, 15);
        const c = randInt(rng, -12, 18) || 5;
        const eq = `Y = ${m}X${fmtSignedConst(c)}`;
        const askGrad = rng() > 0.45;
        const q = dlp
          ? `A straight-line graph follows ${eq}. What is its ${askGrad ? "gradient" : "Y-intercept"}?`
          : `Suatu graf garis lurus mematuhi persamaan ${eq}. Apakah nilai ${askGrad ? "kecurunannya" : "pintasan-Y nya"}?`;
        const ans = askGrad ? String(m) : String(c);
        const other = askGrad ? String(c) : String(m);
        const exp = `Bandingkan dengan Y = mX + c: m = ${m}, c = ${c}.`;
        return makeMcq(rng, q, ans, [other, String(m + c), String(Number(ans) + 3)], exp);
      },
      (rng, dlp) => {
        const a = randInt(rng, 2, 9);
        const b = randInt(rng, 3, 12);
        const q = dlp
          ? `Reduce y = ${a}x² + ${b}x to linear form Y = mX + c by plotting y/x against x. What is the gradient?`
          : `Tukarkan y = ${a}x² + ${b}x kepada bentuk linear Y = mX + c dengan memplot y/x melawan x. Apakah kecerunannya?`;
        const exp = `Bahagi kedua-dua belah dengan x: y/x = ${a}x + ${b}. Maka kecerunan m = ${a}.`;
        return makeMcq(rng, q, String(a), [String(b), String(a + b), String(-a)], exp);
      }
    ],
    geometri_koordinat: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 7);
        let b = randInt(rng, 2, 7);
        if (b === a) b = a + 1;
        const x0 = randInt(rng, 1, 7);
        let y0 = randInt(rng, 2, 8);
        if (x0 === y0) y0 += 1;
        const c = a * x0 + b * y0;
        const q = dlp ? `Which point lies on the line ${a}x + ${b}y = ${c}?` : `Titik manakah yang terletak pada garis lurus ${a}x + ${b}y = ${c}?`;
        const exp = `${a}(${x0}) + ${b}(${y0}) = ${a * x0} + ${b * y0} = ${c}.`;
        return makeMcq(rng, q, `(${x0}, ${y0})`, [`(${y0}, ${x0})`, `(0, 1)`, `(${x0 + 2}, ${y0 + 1})`], exp);
      },
      (rng, dlp) => {
        const p = randInt(rng, 1, 6);
        let qn = randInt(rng, 2, 7);
        if (qn === p) qn = qn === 7 ? 2 : qn + 1;
        const g = gcd(p, qn);
        const np = p / g;
        const nq = qn / g;
        const m1Str = nq === 1 ? String(np) : `${np}/${nq}`;
        const m2Str = np === 1 ? `-${nq}` : `-${nq}/${np}`;
        const q = dlp
          ? `A line has gradient ${m1Str}. What is the gradient of a line PERPENDICULAR to it?`
          : `Suatu garis mempunyai kecerunan ${m1Str}. Apakah kecerunan garis yang SERENJANG dengannya?`;
        const exp = `m₁ × m₂ = -1, maka m₂ = ${m2Str}.`;
        const recPos = nq === 1 ? String(np + 1) : np === 1 ? String(nq) : `${nq}/${np}`;
        return makeMcq(rng, q, m2Str, [m1Str, `-${m1Str}`, recPos], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 8);
        const x1 = randInt(rng, 1, 5);
        const c = randInt(rng, -9, 12);
        const y1 = m * x1 + c;
        const ans = `y = ${m}x${fmtSignedConst(c)}`;
        const q = dlp
          ? `Find the equation of the straight line with gradient ${m} passing through (${x1}, ${y1}).`
          : `Cari persamaan garis lurus berkecerunan ${m} yang melalui titik (${x1}, ${y1}).`;
        const exp = `c = y - mx = ${y1} - ${m}(${x1}) = ${c}. Persamaan: ${ans}.`;
        const altC2 = y1 === c + 3 || y1 === c ? c - 3 : y1;
        return makeMcq(rng, q, ans, [`y = ${m}x${fmtSignedConst(c + 3)}`, `y = ${m}x${fmtSignedConst(altC2)}`, `y = ${m + 1}x${fmtSignedConst(c)}`], exp);
      }
    ],
    vektor: [
      (rng, dlp) => {
        const [a, b, mag] = pick(rng, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20]]);
        const q = dlp ? `Find the magnitude of vector v = ${a}i + ${b}j.` : `Cari magnitud bagi vektor v = ${a}i + ${b}j.`;
        const exp = `|v| = √(${a}² + ${b}²) = ${mag}.`;
        return makeMcq(rng, q, String(mag), [String(a + b), String(mag + 2), String(Math.abs(a - b))], exp);
      },
      (rng, dlp) => {
        const ax = randInt(rng, 1, 8);
        const ay = randInt(rng, 1, 8);
        const bx = randInt(rng, 2, 9);
        const by = randInt(rng, 2, 9);
        const k = randInt(rng, 2, 4);
        const rx = ax + k * bx;
        const ry = ay + k * by;
        const ans = `${rx}i + ${ry}j`;
        const q = dlp
          ? `Given a = ${ax}i + ${ay}j and b = ${bx}i + ${by}j, find a + ${k}b.`
          : `Diberi a = ${ax}i + ${ay}j dan b = ${bx}i + ${by}j, cari a + ${k}b.`;
        const exp = `(${ax} + ${k}×${bx})i + (${ay} + ${k}×${by})j = ${ans}.`;
        return makeMcq(rng, q, ans, [`${ax + bx}i + ${ay + by}j`, `${rx + 1}i + ${ry}j`, `${rx}i + ${ry + 2}j`], exp);
      }
    ],
    penyelesaian_segitiga: [
      (rng, dlp) => {
        const a = randInt(rng, 2, 12) * 2;
        const b = randInt(rng, 3, 14);
        const area = (a * b) / 4; // 1/2 * a * b * sin(30°=0.5)
        const q = dlp
          ? `In triangle ABC, a = ${a} cm, b = ${b} cm, and included angle C = 30°. Calculate the area.`
          : `Dalam segi tiga ABC, sisi a = ${a} cm, b = ${b} cm dan sudut kandung C = 30°. Hitung luasnya.`;
        const exp = `Luas = 1/2 × ${a} × ${b} × sin 30° = ${area} cm².`;
        return makeMcq(rng, q, `${area} cm²`, [`${area * 2} cm²`, `${a * b} cm²`, `${area + 5} cm²`], exp);
      },
      (rng, dlp) => {
        const b = randInt(rng, 3, 14);
        const c = b; // isosceles with 60° -> equilateral so side a = b!
        const q = dlp
          ? `In triangle ABC, b = ${b} cm, c = ${c} cm, and ∠A = 60°. Use the Cosine Rule to find side a.`
          : `Dalam segi tiga ABC, b = ${b} cm, c = ${c} cm dan ∠A = 60°. Guna Petua Kosinus untuk mencari sisi a.`;
        const exp = `a² = ${b}² + ${c}² - 2(${b})(${c}) cos 60° = ${b * b} -> a = ${b} cm.`;
        return makeMcq(rng, q, `${b} cm`, [`${b * 2} cm`, `${b + 4} cm`, `${Math.max(1, b - 2)} cm`], exp);
      }
    ],
    nombor_indeks: [
      (rng, dlp) => {
        const mult = pick(rng, [10, 20, 25, 40, 50, 80, 100]);
        const pctChange = randInt(rng, 1, 9) * 5;
        const inc = rng() > 0.4;
        const p0 = mult;
        const idx = inc ? 100 + pctChange : 100 - pctChange;
        const p1 = (p0 * idx) / 100;
        if (!Number.isInteger(p1)) {
          const base = 100;
          const q = dlp ? `An item's price increases from RM 100 to RM ${100 + pctChange}. Find its price index.` : `Harga seunit barang naik dari RM 100 kepada RM ${100 + pctChange}. Cari nombor indeksnya.`;
          return makeMcq(rng, q, String(100 + pctChange), [String(pctChange), String(100 - pctChange), String(110 + pctChange)], `I = (${100 + pctChange}/100)×100 = ${100 + pctChange}.`);
        }
        const q = dlp
          ? `An item cost ${fmtMoney(p0)} in the base year and ${fmtMoney(p1)} in 2026. Calculate the price index.`
          : `Harga barang pada tahun asas ialah ${fmtMoney(p0)} dan pada 2026 ialah ${fmtMoney(p1)}. Hitung nombor indeks.`;
        const exp = `I = (${p1} / ${p0}) × 100 = ${idx}.`;
        return makeMcq(rng, q, String(idx), [String(200 - idx), String(idx + 10), String(pctChange)], exp);
      },
      (rng, dlp) => {
        const w1 = randInt(rng, 1, 4);
        const w2 = 5 - w1;
        const i1 = randInt(rng, 10, 15) * 10;
        const i2 = randInt(rng, 9, 14) * 10;
        const comp = (w1 * i1 + w2 * i2) / 5;
        const q = dlp
          ? `Two items have price indices ${i1} (weight ${w1}) and ${i2} (weight ${w2}). Find the composite index.`
          : `Dua bahan mempunyai indeks harga ${i1} (pemberat ${w1}) dan ${i2} (pemberat ${w2}). Hitung indeks gubahannya.`;
        const exp = `Ī = (${w1}×${i1} + ${w2}×${i2}) / (${w1}+${w2}) = ${w1 * i1 + w2 * i2} / 5 = ${comp}.`;
        return makeMcq(rng, q, String(comp), [String((i1 + i2) / 2 === comp ? comp + 5 : (i1 + i2) / 2), String(comp + 10), String(comp - 8)], exp);
      }
    ],
    // Physics T4
    pengukuran: [
      (rng, dlp) => {
        const n = randInt(rng, 2, 45);
        const unit = pick(rng, [
          { sym: "MHz", base: "Hz", mult: "10⁶", multWrong: "10³" },
          { sym: "km", base: "m", mult: "10³", multWrong: "10⁶" },
          { sym: "mm", base: "m", mult: "10⁻³", multWrong: "10⁻⁶" },
          { sym: "μm", base: "m", mult: "10⁻⁶", multWrong: "10⁻³" },
          { sym: "ms", base: "s", mult: "10⁻³", multWrong: "10⁻²" },
          { sym: "cm", base: "m", mult: "10⁻²", multWrong: "10⁻³" }
        ]);
        const ans = `${n} × ${unit.mult} ${unit.base}`;
        const q = dlp ? `Convert ${n} ${unit.sym} into SI unit (${unit.base}).` : `Tukarkan ${n} ${unit.sym} kepada unit SI (${unit.base}).`;
        const exp = `${n} ${unit.sym} = ${ans}.`;
        return makeMcq(rng, q, ans, [`${n} × ${unit.multWrong} ${unit.base}`, `${n} × 10⁹ ${unit.base}`, `${n} × 10⁻¹ ${unit.base}`], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 16) * 2;
        const v = pick(rng, [2, 3, 4, 5, 6, 8, 10]);
        const ke = 0.5 * m * v * v;
        const q = dlp
          ? `Calculate the kinetic energy of a ${m} kg trolley moving at ${v} m/s.`
          : `Hitung tenaga kinetik sebuah troli berjisim ${m} kg yang bergerak dengan halaju ${v} m/s.`;
        const exp = `Eₖ = 1/2 mv² = 1/2 × ${m} × ${v}² = ${ke} J.`;
        return makeMcq(rng, q, `${ke} J`, [`${m * v} J`, `${ke * 2} J`, `${ke + 10} J`], exp);
      }
    ],
    daya_gerakan_1: [
      (rng, dlp) => {
        const m = randInt(rng, 2, 24);
        const a = randInt(rng, 2, 15);
        const f = m * a;
        const q = dlp
          ? `A ${m} kg box accelerates at ${a} m/s². Calculate the net force acting on it.`
          : `Sebuah kotak berjisim ${m} kg memecut pada ${a} m/s². Hitung daya bersih yang bertindak ke atasnya.`;
        const exp = `F = ma = ${m} × ${a} = ${f} N.`;
        return makeMcq(rng, q, `${f} N`, [`${m + a} N`, `${f + 4} N`, `${f + m} N`], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 2, 20);
        const v = randInt(rng, 3, 25);
        const p = m * v;
        const q = dlp
          ? `Calculate the momentum of a ${m} kg object moving at ${v} m/s.`
          : `Hitung momentum sebuah objek berjisim ${m} kg yang bergerak dengan halaju ${v} m/s.`;
        const exp = `Momentum p = mv = ${m} × ${v} = ${p} kg m/s.`;
        return makeMcq(rng, q, `${p} kg m/s`, [`${m + v} kg m/s`, `${p * 2} kg m/s`, `${p + 5} kg m/s`], exp);
      },
      (rng, dlp) => {
        const u = randInt(rng, 0, 10);
        const a = randInt(rng, 1, 6) * 2;
        const t = randInt(rng, 2, 9);
        const s = u * t + 0.5 * a * t * t;
        const q = dlp
          ? `An object with initial velocity ${u} m/s accelerates at ${a} m/s² for ${t} s. Calculate its displacement.`
          : `Satu objek dengan halaju awal ${u} m/s memecut pada ${a} m/s² selama ${t} s. Hitung sesarannya.`;
        const exp = `s = ut + 1/2 at² = ${u}(${t}) + 1/2(${a})(${t}²) = ${s} m.`;
        return makeMcq(rng, q, `${s} m`, [`${u + a * t} m`, `${s + a} m`, `${Math.max(1, s - t)} m`], exp);
      }
    ],
    kegravitian: [
      (rng, dlp) => {
        const mult = pick(rng, [2, 3, 4, 5]);
        const f0 = mult * mult * randInt(rng, 2, 12);
        const fNew = f0 / (mult * mult);
        const q = dlp
          ? `The gravitational force between two satellites is ${f0} N. If the distance between them becomes ${mult} times larger, what is the new force?`
          : `Daya graviti antara dua satelit ialah ${f0} N. Jika jarak antara keduanya bertambah menjadi ${mult} kali ganda, berapakah daya graviti baharu?`;
        const exp = `F ∝ 1/r². Maka daya baharu = ${f0} / ${mult}² = ${f0} / ${mult * mult} = ${fNew} N.`;
        return makeMcq(rng, q, `${fNew} N`, [`${f0 / mult} N`, `${f0 * mult} N`, `${fNew + 4} N`], exp);
      },
      (rng, dlp) => {
        const m = randInt(rng, 5, 65) * 2;
        const gMoon = 1.6;
        const w = Math.round(m * gMoon * 10) / 10;
        const q = dlp
          ? `An astronaut's equipment has mass ${m} kg. Calculate its weight on the Moon (g = 1.6 m s⁻²).`
          : `Peralatan angkasawan mempunyai jisim ${m} kg. Hitung beratnya di permukaan Bulan (g = 1.6 m s⁻²).`;
        const exp = `W = mg = ${m} × 1.6 = ${w} N.`;
        return makeMcq(rng, q, `${w} N`, [`${(m * 9.81).toFixed(1)} N`, `${m} N`, `${(w + 10).toFixed(1)} N`], exp);
      }
    ],
    haba: [
      (rng, dlp) => {
        const m = randInt(rng, 1, 8);
        const sub = pick(rng, [
          { bm: "air", en: "water", c: 4200 },
          { bm: "aluminium", en: "aluminium", c: 900 },
          { bm: "besi", en: "iron", c: 450 },
          { bm: "kuprum", en: "copper", c: 390 }
        ]);
        const dt = pick(rng, [4, 5, 6, 8, 12, 15, 20, 25]);
        const Q = m * sub.c * dt;
        const q = dlp
          ? `Calculate heat energy needed to raise ${m} kg of ${sub.en} by ${dt}°C (c = ${sub.c} J kg⁻¹ °C⁻¹).`
          : `Hitung tenaga haba untuk menaikkan suhu ${m} kg ${sub.bm} sebanyak ${dt}°C (c = ${sub.c} J kg⁻¹ °C⁻¹).`;
        const exp = `Q = mcθ = ${m} × ${sub.c} × ${dt} = ${Q.toLocaleString("en-MY")} J.`;
        return makeMcq(rng, q, `${Q.toLocaleString("en-MY")} J`, [`${(m * sub.c).toLocaleString("en-MY")} J`, `${(Q + sub.c).toLocaleString("en-MY")} J`, `${Math.round(Q / 2).toLocaleString("en-MY")} J`], exp);
      },
      (rng, dlp) => {
        const p1 = randInt(rng, 100, 300);
        const mult = pick(rng, [2, 3, 4]);
        const v1 = mult * randInt(rng, 2, 6);
        const v2 = v1 / mult;
        const p2 = p1 * mult;
        const q = dlp
          ? `A gas at ${p1} kPa occupies ${v1} cm³. If compressed at constant temperature to ${v2} cm³, find the new pressure.`
          : `Suatu gas bertekanan ${p1} kPa memenuhi ${v1} cm³. Jika dimampatkan pada suhu malar kepada ${v2} cm³, cari tekanan baharunya.`;
        const exp = `Hukum Boyle: P₁V₁ = P₂V₂ -> ${p1} × ${v1} = P₂ × ${v2} -> P₂ = ${p2} kPa.`;
        return makeMcq(rng, q, `${p2} kPa`, [`${Math.round((p1 / mult) * 10) / 10} kPa`, `${p2 + 50} kPa`, `${p1 + v1} kPa`], exp);
      }
    ],
    gelombang: [
      (rng, dlp) => {
        const f = pick(rng, [5, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120, 150, 200]);
        const lam = randInt(rng, 2, 14);
        const v = f * lam;
        const q = dlp
          ? `A wave has frequency ${f} Hz and wavelength ${lam} m. Calculate its wave speed.`
          : `Satu gelombang mempunyai frekuensi ${f} Hz dan panjang gelombang ${lam} m. Hitung laju gelombang itu.`;
        const exp = `v = fλ = ${f} × ${lam} = ${v} m/s.`;
        return makeMcq(rng, q, `${v} m/s`, [`${(f / lam).toFixed(1)} m/s`, `${f + lam} m/s`, `${v + f} m/s`], exp);
      },
      (rng, dlp) => {
        const f = pick(rng, [2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200]);
        const t = 1 / f;
        const tStr = String(t);
        const q = dlp ? `A wave oscillates with frequency ${f} Hz. Find its period (T).` : `Satu gelombang berayun dengan frekuensi ${f} Hz. Cari tempohnya (T).`;
        const exp = `T = 1/f = 1/${f} = ${tStr} s.`;
        return makeMcq(rng, q, `${tStr} s`, [`${f} s`, `${(t * 2).toString()} s`, `${(t * 10).toString()} s`], exp);
      },
      (rng, dlp) => {
        const v = 1500;
        const d = randInt(rng, 2, 15) * 150;
        const t = (2 * d) / v;
        const q = dlp
          ? `A sonar pulse (speed ${v} m/s) returns an echo after ${t} s. Calculate the depth of the seabed.`
          : `Isyarat sonar (laju ${v} m/s) mengesan gema selepas ${t} s. Hitung kedalaman dasar laut.`;
        const exp = `d = vt / 2 = (${v} × ${t}) / 2 = ${d} m.`;
        return makeMcq(rng, q, `${d} m`, [`${2 * d} m`, `${d + 150} m`, `${Math.max(50, d - 150)} m`], exp);
      }
    ],
    cahaya_optik: [
      (rng, dlp) => {
        const [u, v, f] = pick(rng, [[30, 60, 20], [60, 30, 20], [20, 20, 10], [15, 30, 10], [24, 40, 15], [12, 24, 8], [18, 36, 12], [40, 40, 20], [30, 30, 15]]);
        const q = dlp
          ? `A convex lens forms a real image at v = ${v} cm when an object is placed at u = ${u} cm. Find the focal length f.`
          : `Sebuah kanta cembung membentuk imej nyata pada jarak v = ${v} cm apabila objek diletakkan pada u = ${u} cm. Cari panjang fokus f.`;
        const exp = `1/f = 1/${u} + 1/${v} -> f = ${f} cm.`;
        return makeMcq(rng, q, `${f} cm`, [`${u + v} cm`, `${Math.abs(v - u) === f ? f + 5 : Math.abs(v - u)} cm`, `${f + 8} cm`], exp);
      },
      (rng, dlp) => {
        const n = pick(rng, [1.2, 1.3, 1.4, 1.5, 1.6, 2.0, 2.4]);
        const appDepth = randInt(rng, 2, 12);
        const realDepth = Math.round(n * appDepth * 10) / 10;
        const q = dlp
          ? `A glass block of refractive index ${n} has a real depth of ${realDepth} cm. What is its apparent depth?`
          : `Sebuah bongkah kaca berindeks biasan ${n} mempunyai dalam nyata ${realDepth} cm. Berapakah dalam ketaranya?`;
        const exp = `n = Dalam nyata / Dalam ketara -> Dalam ketara = ${realDepth} ÷ ${n} = ${appDepth} cm.`;
        return makeMcq(rng, q, `${appDepth} cm`, [`${Math.round(realDepth * n * 10) / 10} cm`, `${appDepth + 2} cm`, `${Math.max(1, appDepth - 1)} cm`], exp);
      }
    ],
    // Chemistry T4
    jirim_atom: [
      (rng, dlp) => {
        const z = randInt(rng, 3, 20);
        const n = z + randInt(rng, 0, 5);
        const a = z + n;
        const askN = rng() > 0.45;
        if (askN) {
          const q = dlp
            ? `An atom has proton number ${z} and nucleon number ${a}. How many neutrons does it have?`
            : `Satu atom mempunyai nombor proton ${z} dan nombor nukleon ${a}. Berapakah bilangan neutronnya?`;
          const exp = `Neutron = Nombor nukleon - Nombor proton = ${a} - ${z} = ${n}.`;
          return makeMcq(rng, q, String(n), [String(a), String(a + z), String(z - 1)], exp);
        }
        const shells = z <= 2 ? `${z}` : z <= 10 ? `2.${z - 2}` : z <= 18 ? `2.8.${z - 10}` : `2.8.8.${z - 18}`;
        const q = dlp
          ? `Element X has proton number ${z}. Write its electron arrangement.`
          : `Unsur X mempunyai nombor proton ${z}. Apakah susunan elektron atom X?`;
        const exp = `Jumlah elektron = ${z} -> susunan petala: ${shells}.`;
        return makeMcq(rng, q, shells, [`2.8.${z}`, `2.${z}`, `${shells}.1`], exp);
      }
    ],
    konsep_mol: [
      (rng, dlp) => {
        const mol = pick(rng, [0.5, 1.5, 2, 2.5, 3, 4, 5, 6, 8]);
        const mr = pick(rng, [
          { f: "H₂O", mr: 18 },
          { f: "CO₂", mr: 44 },
          { f: "NaCl", mr: 58.5 },
          { f: "CaCO₃", mr: 100 },
          { f: "NH₃", mr: 17 },
          { f: "CH₄", mr: 16 },
          { f: "H₂SO₄", mr: 98 },
          { f: "NaOH", mr: 40 },
          { f: "MgO", mr: 40 },
          { f: "KOH", mr: 56 },
          { f: "CuO", mr: 80 },
          { f: "C₆H₁₂O₆", mr: 180 }
        ]);
        const mass = Math.round(mol * mr.mr * 100) / 100;
        const q = dlp
          ? `Calculate the mass of ${mol} mol of ${mr.f} (Molar mass = ${mr.mr} g/mol).`
          : `Hitung jisim bagi ${mol} mol ${mr.f} (Jisim molar = ${mr.mr} g/mol).`;
        const exp = `Jisim = ${mol} × ${mr.mr} = ${mass} g.`;
        return makeMcq(rng, q, `${mass} g`, [`${mr.mr} g`, `${mass + mr.mr} g`, `${Math.round((mr.mr / mol) * 100) / 100} g`], exp);
      },
      (rng, dlp) => {
        const mol = pick(rng, [0.5, 1.5, 2, 2.5, 3, 4, 5]);
        const vol = mol * 24;
        const q = dlp
          ? `Calculate the volume of ${mol} mol of CO₂ gas at room conditions (1 mol = 24 dm³).`
          : `Hitung isi padu bagi ${mol} mol gas CO₂ pada keadaan bilik (Isi padu molar = 24 dm³/mol).`;
        const exp = `Isi padu = ${mol} × 24 = ${vol} dm³.`;
        return makeMcq(rng, q, `${vol} dm³`, [`${vol + 24} dm³`, `${Math.round(vol / 2)} dm³`, `${mol * 22.4} dm³`], exp);
      }
    ],
    jadual_berkala: [
      (rng, dlp) => {
        const elems = [
          { z: 3, sym: "Li", arr: "2.1", val: 1, grp: "Kumpulan 1", grpEn: "Group 1", per: "Kala 2", perEn: "Period 2", ion: "Li⁺ (+1)" },
          { z: 4, sym: "Be", arr: "2.2", val: 2, grp: "Kumpulan 2", grpEn: "Group 2", per: "Kala 2", perEn: "Period 2", ion: "Be²⁺ (+2)" },
          { z: 5, sym: "B", arr: "2.3", val: 3, grp: "Kumpulan 13", grpEn: "Group 13", per: "Kala 2", perEn: "Period 2", ion: "Tiada (kovalen)" },
          { z: 6, sym: "C", arr: "2.4", val: 4, grp: "Kumpulan 14", grpEn: "Group 14", per: "Kala 2", perEn: "Period 2", ion: "Tiada (kovalen)" },
          { z: 7, sym: "N", arr: "2.5", val: 5, grp: "Kumpulan 15", grpEn: "Group 15", per: "Kala 2", perEn: "Period 2", ion: "N³⁻ (-3)" },
          { z: 8, sym: "O", arr: "2.6", val: 6, grp: "Kumpulan 16", grpEn: "Group 16", per: "Kala 2", perEn: "Period 2", ion: "O²⁻ (-2)" },
          { z: 9, sym: "F", arr: "2.7", val: 7, grp: "Kumpulan 17", grpEn: "Group 17", per: "Kala 2", perEn: "Period 2", ion: "F⁻ (-1)" },
          { z: 10, sym: "Ne", arr: "2.8", val: 8, grp: "Kumpulan 18", grpEn: "Group 18", per: "Kala 2", perEn: "Period 2", ion: "0 (lengai)" },
          { z: 11, sym: "Na", arr: "2.8.1", val: 1, grp: "Kumpulan 1", grpEn: "Group 1", per: "Kala 3", perEn: "Period 3", ion: "Na⁺ (+1)" },
          { z: 12, sym: "Mg", arr: "2.8.2", val: 2, grp: "Kumpulan 2", grpEn: "Group 2", per: "Kala 3", perEn: "Period 3", ion: "Mg²⁺ (+2)" },
          { z: 13, sym: "Al", arr: "2.8.3", val: 3, grp: "Kumpulan 13", grpEn: "Group 13", per: "Kala 3", perEn: "Period 3", ion: "Al³⁺ (+3)" },
          { z: 14, sym: "Si", arr: "2.8.4", val: 4, grp: "Kumpulan 14", grpEn: "Group 14", per: "Kala 3", perEn: "Period 3", ion: "Tiada (kovalen)" },
          { z: 15, sym: "P", arr: "2.8.5", val: 5, grp: "Kumpulan 15", grpEn: "Group 15", per: "Kala 3", perEn: "Period 3", ion: "P³⁻ (-3)" },
          { z: 16, sym: "S", arr: "2.8.6", val: 6, grp: "Kumpulan 16", grpEn: "Group 16", per: "Kala 3", perEn: "Period 3", ion: "S²⁻ (-2)" },
          { z: 17, sym: "Cl", arr: "2.8.7", val: 7, grp: "Kumpulan 17", grpEn: "Group 17", per: "Kala 3", perEn: "Period 3", ion: "Cl⁻ (-1)" },
          { z: 18, sym: "Ar", arr: "2.8.8", val: 8, grp: "Kumpulan 18", grpEn: "Group 18", per: "Kala 3", perEn: "Period 3", ion: "0 (lengai)" },
          { z: 19, sym: "K", arr: "2.8.8.1", val: 1, grp: "Kumpulan 1", grpEn: "Group 1", per: "Kala 4", perEn: "Period 4", ion: "K⁺ (+1)" },
          { z: 20, sym: "Ca", arr: "2.8.8.2", val: 2, grp: "Kumpulan 2", grpEn: "Group 2", per: "Kala 4", perEn: "Period 4", ion: "Ca²⁺ (+2)" }
        ];
        const el = pick(rng, elems);
        const mode = randInt(rng, 0, 3);
        if (mode === 0) {
          const ans = dlp ? el.grpEn : el.grp;
          const wrongG = dlp ? ["Group 1", "Group 2", "Group 13", "Group 14", "Group 16", "Group 17", "Group 18"] : ["Kumpulan 1", "Kumpulan 2", "Kumpulan 13", "Kumpulan 14", "Kumpulan 16", "Kumpulan 17", "Kumpulan 18"];
          const q = dlp
            ? `Element ${el.sym} has proton number ${el.z} (arrangement ${el.arr}). Which Group is it in?`
            : `Unsur ${el.sym} bernombor proton ${el.z} (susunan elektron ${el.arr}). Ia berada dalam kumpulan mana?`;
          return makeMcq(rng, q, ans, wrongG.filter((g) => g !== ans), `Susunan ${el.arr} menempatkan ${el.sym} dalam ${ans}.`);
        }
        if (mode === 1) {
          const ans = dlp ? el.perEn : el.per;
          const wrongP = dlp ? ["Period 1", "Period 2", "Period 3", "Period 4"] : ["Kala 1", "Kala 2", "Kala 3", "Kala 4"];
          const q = dlp
            ? `Element ${el.sym} has electron arrangement ${el.arr}. Which Period is it in?`
            : `Unsur ${el.sym} mempunyai susunan elektron ${el.arr}. Ia berada dalam kala ke berapa?`;
          return makeMcq(rng, q, ans, wrongP.filter((p) => p !== ans), `Bilangan petala berisi elektron menentukan nombor ${ans}.`);
        }
        if (mode === 2) {
          const shells = el.arr.split(".").length;
          const q = dlp
            ? `Element ${el.sym} is in ${el.perEn} and ${el.grpEn} with arrangement ${el.arr}. How many valence electrons does it have?`
            : `Unsur ${el.sym} berada di ${el.per} dan ${el.grp} (${el.arr}). Berapakah elektron valensnya?`;
          const exp = `Elektron di petala terluar (${el.arr}) ialah ${el.val} (${shells} petala).`;
          return makeMcq(rng, q, String(el.val), [String((el.val % 8) + 1), String(((el.val + 2) % 8) + 1), String(el.z)], exp);
        }
        const ionElems = elems.filter((e) => !e.ion.includes("kovalen") && !e.ion.includes("lengai"));
        const elIon = pick(rng, ionElems);
        const gNum = Number(elIon.grp.replace(/\D/g, ""));
        const chg = gNum === 1 ? "+1" : gNum === 2 ? "+2" : gNum === 13 ? "+3" : gNum === 15 ? "-3" : gNum === 16 ? "-2" : "-1";
        const q = dlp
          ? `What ion charge does element ${elIon.sym} (Z=${elIon.z}, ${elIon.arr}) typically form to achieve stability?`
          : `Apakah cas ion yang lazimnya dibentuk oleh atom ${elIon.sym} (Z=${elIon.z}, ${elIon.arr}) untuk mencapai kestabilan?`;
        const allCharges = ["+1", "+2", "+3", "-1", "-2", "-3"];
        return makeMcq(rng, q, chg, allCharges.filter((c) => c !== chg), `${elIon.sym} (${elIon.arr}) membentuk cas ${chg} (ion ${elIon.ion}).`);
      },
      (rng, dlp) => {
        const elems = [
          { name: "Litium (Li)", nameEn: "Lithium (Li)", z: 3, grp: "1", per: "2" },
          { name: "Natrium (Na)", nameEn: "Sodium (Na)", z: 11, grp: "1", per: "3" },
          { name: "Kalium (K)", nameEn: "Potassium (K)", z: 19, grp: "1", per: "4" },
          { name: "Berilium (Be)", nameEn: "Beryllium (Be)", z: 4, grp: "2", per: "2" },
          { name: "Magnesium (Mg)", nameEn: "Magnesium (Mg)", z: 12, grp: "2", per: "3" },
          { name: "Kalsium (Ca)", nameEn: "Calcium (Ca)", z: 20, grp: "2", per: "4" },
          { name: "Aluminium (Al)", nameEn: "Aluminium (Al)", z: 13, grp: "13", per: "3" },
          { name: "Karbon (C)", nameEn: "Carbon (C)", z: 6, grp: "14", per: "2" },
          { name: "Nitrogen (N)", nameEn: "Nitrogen (N)", z: 7, grp: "15", per: "2" },
          { name: "Oksigen (O)", nameEn: "Oxygen (O)", z: 8, grp: "16", per: "2" },
          { name: "Sulfur (S)", nameEn: "Sulphur (S)", z: 16, grp: "16", per: "3" },
          { name: "Fluorin (F)", nameEn: "Fluorine (F)", z: 9, grp: "17", per: "2" },
          { name: "Klorin (Cl)", nameEn: "Chlorine (Cl)", z: 17, grp: "17", per: "3" },
          { name: "Neon (Ne)", nameEn: "Neon (Ne)", z: 10, grp: "18", per: "2" },
          { name: "Argon (Ar)", nameEn: "Argon (Ar)", z: 18, grp: "18", per: "3" }
        ];
        const el = pick(rng, elems);
        const q = dlp
          ? `${el.nameEn} lies in Group ${el.grp} and Period ${el.per}. What is its proton number?`
          : `${el.name} terletak di Kumpulan ${el.grp} dan Kala ${el.per}. Berapakah nombor protonnya?`;
        const exp = `Kala ${el.per} (${el.per} petala) dan Kumpulan ${el.grp} memberikan nombor proton Z = ${el.z}.`;
        return makeMcq(rng, q, String(el.z), [String(el.z + 2), String(Math.max(1, el.z - 2)), String(el.z + 8)], exp);
      }
    ],
    asid_bes_garam: [
      (rng, dlp) => {
        const m = pick(rng, [0.1, 0.2, 0.4, 0.5, 1.0, 1.5, 2.0]);
        const v = pick(rng, [50, 100, 150, 200, 250, 400, 500, 1000]);
        const mol = Math.round(((m * v) / 1000) * 1000) / 1000;
        const q = dlp
          ? `Calculate the number of moles in ${v} cm³ of ${m.toFixed(1)} mol dm⁻³ HCl solution.`
          : `Hitung bilangan mol bagi ${v} cm³ larutan HCl berkepekatan ${m.toFixed(1)} mol dm⁻³.`;
        const exp = `n = MV / 1000 = (${m} × ${v}) / 1000 = ${mol} mol.`;
        return makeMcq(rng, q, `${mol} mol`, [`${Math.round(mol * 10 * 100) / 100} mol`, `${Math.round((mol + 0.1) * 1000) / 1000} mol`, `${m * v} mol`], exp);
      },
      (rng, dlp) => {
        const m1 = pick(rng, [1.0, 2.0, 4.0]);
        const v1 = pick(rng, [25, 50, 100]);
        const m2 = pick(rng, [0.1, 0.2, 0.5]);
        const v2 = (m1 * v1) / m2;
        const q = dlp
          ? `${v1} cm³ of ${m1.toFixed(1)} mol dm⁻³ NaOH is diluted to ${m2.toFixed(1)} mol dm⁻³. Find the final volume V₂.`
          : `${v1} cm³ larutan NaOH ${m1.toFixed(1)} mol dm⁻³ dicairkan kepada ${m2.toFixed(1)} mol dm⁻³. Cari isi padu akhir V₂.`;
        const exp = `M₁V₁ = M₂V₂ -> V₂ = (${m1} × ${v1}) / ${m2} = ${v2} cm³.`;
        return makeMcq(rng, q, `${v2} cm³`, [`${v2 / 2} cm³`, `${v2 + 100} cm³`, `${v1 * 2} cm³`], exp);
      }
    ],
    kadar_tindakbalas: [
      (rng, dlp) => {
        const rate = pick(rng, [0.5, 1.0, 1.5, 2.0, 2.5, 3.0]);
        const t = pick(rng, [10, 12, 16, 20, 24, 30, 40, 50, 60]);
        const vol = rate * t;
        const q = dlp
          ? `${vol} cm³ of hydrogen gas is collected in ${t} s. Calculate the average rate of reaction.`
          : `Sebanyak ${vol} cm³ gas hidrogen dikumpul dalam masa ${t} s. Hitung kadar tindak balas purata.`;
        const exp = `Kadar purata = ${vol} / ${t} = ${rate.toFixed(1)} cm³/s.`;
        return makeMcq(rng, q, `${rate.toFixed(1)} cm³/s`, [`${(rate + 1).toFixed(1)} cm³/s`, `${(vol * 2).toFixed(1)} cm³/s`, `${Math.max(0.2, rate - 0.5).toFixed(1)} cm³/s`], exp);
      },
      (rng, dlp) => {
        const mLoss = randInt(rng, 2, 18);
        const t = pick(rng, [10, 20, 25, 40, 50]);
        const rate = Math.round((mLoss / t) * 1000) / 1000;
        const q = dlp
          ? `A conical flask loses ${mLoss} g of CO₂ in ${t} s. Find the average rate of mass loss.`
          : `Satu kelalang kon kehilangan jisim ${mLoss} g dalam ${t} s. Cari kadar purata tindak balas.`;
        const exp = `Kadar purata = ${mLoss} g / ${t} s = ${rate} g/s.`;
        const invRate = mLoss === t ? 0.5 : Math.round((t / mLoss) * 10) / 10;
        return makeMcq(rng, q, `${rate} g/s`, [`${Math.round((rate * 2) * 1000) / 1000} g/s`, `${mLoss + t} g/s`, `${invRate} g/s`], exp);
      }
    ]
  };

  App.Generators = {
    d6: D6,
    t2: T2,
    t4: T4
  };
})(window);
