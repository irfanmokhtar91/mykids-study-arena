/**
 * Structured (subjective) questions: Tingkatan 4 Matematik (KSSM) Kertas 2. ALL ITEMS ORIGINAL; text-only (no diagrams).
 * Layout follows the SPM-style 1449/2: Bahagian A (10 drawn from a pool of 12, 4 marks each = 40), Bahagian B (5 drawn from 7, 9 marks each = 45),
 * Bahagian C (2 drawn from 4, each 15 marks; the student answers 1).
 * Scope: Tingkatan 4 DSKP only (factorisation-based quadratic equations, sets, logic, number bases, graphs of motion, dispersion, combined probability, financial planning).
 * Interest, completing the square and roots-to-equation were REMOVED after a DSKP scope check (Tingkatan 3 / Additional Mathematics).
 * Marking steps: kind M = method, A = accuracy, each worth 1 mark. `check` = final numeric answers recomputed by scripts/verify-structured.mjs.
 * status "verified" only after BOTH gates (code recomputation + blind second-model solve) agree. See docs/ for the record.
 *
 * VERIFICATION RECORD (25/Nov/2026), all 23 items, after 3 rounds of scope fixes:
 *   Gate 1: scripts/verify-structured-t4.mjs recomputed every answer from the problem numbers (independent code): all checks passed.
 *   Gate 2: a separate model (Opus) solved the final text blind: every part agrees with the key (64 parts).
 *   Scope: checked against the Tingkatan 4 DSKP mirror (not bpk.moe.gov.my): no part out of scope. Percentage/primes/rounding are
 *          Tingkatan 1-3 prerequisites (no T1-3 DSKP on disk). Medium confidence: A07, C03(e), C04(d).
 *   Removed after scope checks: simple/compound interest (Tingkatan 3), completing the square and roots-to-equation (Additional Mathematics).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.t4_math = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const M = (text) => ({ kind: "M", marks: 1, text });
  const A = (text) => ({ kind: "A", marks: 1, text });
  const part = (label, q, steps, answer, check) => ({ label, q, marks: steps.reduce((a, s) => a + s.marks, 0), steps, answer, check });
  const item = (id, chapterId, partId, level, stem, parts) => ({ id, chapterId, part: partId, level, status: "verified", stem, parts });

  const ITEMS = [
    // ===================================== BAHAGIAN A (4 marks each) =====================================
    item("t4m-A01", "kuadratik", "A", "sederhana", "Selesaikan persamaan kuadratik 2x² − 7x − 4 = 0.", [
      part("", "", [
        M("Mencari faktor: (2x + 1)(x − 4)"),
        A("(2x + 1)(x − 4) = 0"),
        A("x = −1/2"),
        A("x = 4")
      ], "x = −1/2 atau x = 4", [-0.5, 4])
    ]),
    item("t4m-A02", "kuadratik", "A", "sederhana", "", [
      part("", "Selesaikan persamaan kuadratik 6x² = 5x + 4.", [
        M("Menyusun semula: 6x² − 5x − 4 = 0"),
        A("(3x − 4)(2x + 1) = 0"),
        A("x = 4/3"),
        A("x = −1/2")
      ], "x = 4/3 atau x = −1/2", [-0.5, 4 / 3])
    ]),
    item("t4m-A03", "asas_nombor", "A", "sederhana", "", [
      part("(a)", "Tukarkan 110101₂ kepada nombor dalam asas sepuluh.", [
        M("1 × 2⁵ + 1 × 2⁴ + 0 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰"),
        A("53")
      ], "53", [53]),
      part("(b)", "Tukarkan 53 kepada nombor dalam asas lima.", [
        M("Pembahagian berulang dengan 5: 53 ÷ 5 = 10 baki 3, 10 ÷ 5 = 2 baki 0, 2 ÷ 5 = 0 baki 2"),
        A("203₅")
      ], "203₅", [203])
    ]),
    item("t4m-A04", "asas_nombor", "A", "sederhana", "", [
      part("(a)", "Cari hasil tambah 1101₂ + 1011₂. Beri jawapan dalam asas dua.", [
        M("Menambah lajur demi lajur dari kanan"),
        M("Menggunakan nombor bawa (carry) dengan betul"),
        A("11000₂")
      ], "11000₂", [11000]),
      part("(b)", "Nyatakan nilai 11000₂ dalam asas sepuluh.", [
        A("24")
      ], "24", [24])
    ]),
    item("t4m-A05", "penaakulan_logik", "A", "tinggi", "Pernyataan: “Jika x ialah gandaan 4, maka x ialah nombor genap.”", [
      part("", "(a) Tulis akas bagi pernyataan itu.\n(b) Nyatakan sama ada akas itu benar atau palsu. Jika palsu, beri satu contoh penyangkal.", [
        M("Menukar antejadian dengan akibat"),
        A("Jika x ialah nombor genap, maka x ialah gandaan 4"),
        A("Palsu"),
        A("Contoh penyangkal yang sah, contohnya x = 6 (genap tetapi bukan gandaan 4)")
      ], "akas palsu; contoh penyangkal: x = 6", [6])
    ]),
    item("t4m-A06", "operasi_set", "A", "sederhana", "Diberi ξ = {1, 2, 3, ..., 12}, set A = {gandaan 3} dan set B = {nombor genap}.", [
      part("", "Cari\n(a) A ∩ B,\n(b) n[(A ∪ B)′].", [
        M("Menyenaraikan A = {3, 6, 9, 12} dan B = {2, 4, 6, 8, 10, 12}"),
        A("A ∩ B = {6, 12}"),
        M("A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12}, n(A ∪ B) = 8"),
        A("n[(A ∪ B)′] = 12 − 8 = 4")
      ], "A ∩ B = {6, 12}; n[(A ∪ B)′] = 4", [4])
    ]),
    item("t4m-A07", "graf_gerakan", "A", "sederhana", "Sebuah kereta bergerak dengan laju malar 20 m/s selama 5 saat. Kemudian kereta itu memecut secara seragam kepada 30 m/s dalam 5 saat yang berikutnya.", [
      part("", "Cari jumlah jarak, dalam m, yang dilalui oleh kereta itu dalam 10 saat.", [
        M("Jarak 5 saat pertama = 20 × 5 = 100"),
        M("Jarak 5 saat kedua = (1/2)(20 + 30) × 5"),
        A("125"),
        A("Jumlah jarak = 225 m")
      ], "225 m", [225])
    ]),
    item("t4m-A08", "sukatan_serakan", "A", "sederhana", "Data berikut ialah markah 5 orang murid: 2, 4, 6, 8, 10. [Guna σ² = Σ(x − μ)² ÷ N]", [
      part("", "Hitung\n(a) varians,\n(b) sisihan piawai.", [
        M("Min = 6"),
        M("Σ(x − min)² = 16 + 4 + 0 + 4 + 16 = 40"),
        A("Varians = 40 ÷ 5 = 8"),
        A("Sisihan piawai = √8 ≈ 2.83")
      ], "varians = 8; sisihan piawai ≈ 2.83", [8, 2.83])
    ]),
    item("t4m-A09", "kebarangkalian", "A", "sederhana", "A dan B ialah dua peristiwa bebas. Diberi P(A) = 0.4 dan P(B) = 0.5.", [
      part("", "Cari\n(a) P(A ∩ B),\n(b) P(A ∪ B).", [
        M("P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5"),
        A("0.2"),
        M("P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"),
        A("0.7")
      ], "P(A ∩ B) = 0.2; P(A ∪ B) = 0.7", [0.2, 0.7])
    ]),
    item("t4m-A10", "kewangan", "A", "sederhana", "Encik Faiz berpendapatan RM3 200 sebulan. Perbelanjaan tetapnya ialah RM1 450 dan perbelanjaan tidak tetapnya ialah RM980.", [
      part("", "Hitung\n(a) jumlah perbelanjaan bulanan,\n(b) lebihan pendapatan bulanan.", [
        M("1 450 + 980"),
        A("RM2 430"),
        M("3 200 − 2 430"),
        A("RM770")
      ], "jumlah perbelanjaan = RM2 430; lebihan = RM770", [2430, 770])
    ]),
    item("t4m-A11", "kewangan", "A", "sederhana", "Puan Sarah mahu menyimpan RM9 600 dalam masa 8 bulan untuk membeli sebuah komputer riba. Pendapatan bulanannya ialah RM4 000.", [
      part("", "Hitung\n(a) simpanan bulanan yang diperlukan,\n(b) peratusan simpanan itu daripada pendapatan bulanannya.", [
        M("9 600 ÷ 8"),
        A("RM1 200"),
        M("(1 200 ÷ 4 000) × 100"),
        A("30%")
      ], "simpanan bulanan = RM1 200; 30%", [1200, 30])
    ]),
    item("t4m-A12", "kuadratik", "A", "sederhana", "", [
      part("", "Selesaikan persamaan (x + 2)(x − 5) = 18.", [
        M("Mengembangkan dan menyusun semula: x² − 3x − 10 = 18, iaitu x² − 3x − 28 = 0"),
        M("(x − 7)(x + 4) = 0"),
        A("x = 7"),
        A("x = −4")
      ], "x = 7 atau x = −4", [-4, 7])
    ]),

    // ===================================== BAHAGIAN B (9 marks each) =====================================
    item("t4m-B01", "kuadratik", "B", "sederhana", "", [
      part("(a)", "Selesaikan 3x² + 2x − 8 = 0.", [
        M("Mencuba faktor"),
        A("(3x − 4)(x + 2) = 0"),
        A("x = 4/3"),
        A("x = −2")
      ], "x = 4/3 atau x = −2", [-2, 4 / 3]),
      part("(b)", "Selesaikan x² + 5x = 14.", [
        M("Menyusun semula: x² + 5x − 14 = 0"),
        M("(x + 7)(x − 2) = 0"),
        A("x = −7 atau x = 2")
      ], "x = −7 atau x = 2", [-7, 2]),
      part("(c)", "Selesaikan x(x − 6) = 16.", [
        M("(x − 8)(x + 2) = 0, selepas menyusun semula x² − 6x − 16 = 0"),
        A("x = 8 atau x = −2")
      ], "x = 8 atau x = −2", [-2, 8])
    ]),
    item("t4m-B02", "operasi_set", "B", "sederhana", "Diberi ξ = {x : x ialah integer, 1 ≤ x ≤ 20}, set P = {nombor perdana} dan set Q = {gandaan 3}.", [
      part("(a)", "Senaraikan unsur-unsur set P ∩ Q.", [
        M("P = {2, 3, 5, 7, 11, 13, 17, 19} dan Q = {3, 6, 9, 12, 15, 18}"),
        A("P ∩ Q = {3}")
      ], "{3}", [3]),
      part("(b)", "Cari n(P ∪ Q).", [
        M("n(P) + n(Q) − n(P ∩ Q) = 8 + 6 − 1"),
        M("Menggunakan n(P ∪ Q) = n(P) + n(Q) − n(P ∩ Q)"),
        A("13")
      ], "13", [13]),
      part("(c)", "Cari n[(P ∪ Q)′].", [
        M("20 − 13"),
        A("7")
      ], "7", [7]),
      part("(d)", "Cari n(P′ ∩ Q).", [
        M("Unsur Q yang bukan perdana: Q ialah {3, 6, 9, 12, 15, 18}, singkirkan 3"),
        A("5")
      ], "5", [5])
    ]),
    item("t4m-B03", "graf_gerakan", "B", "sederhana", "Sebuah zarah bergerak dari keadaan rehat. Zarah itu memecut secara seragam pada 2 m/s² selama 6 saat, kemudian bergerak dengan laju malar selama 10 saat, dan akhirnya nyahpecut secara seragam sehingga berhenti dalam 4 saat.", [
      part("(a)", "Cari laju maksimum zarah itu.", [
        M("2 × 6"),
        A("12 m/s")
      ], "12 m/s", [12]),
      part("(b)", "Cari jumlah jarak yang dilalui oleh zarah itu.", [
        M("Jarak fasa pertama = (1/2)(6)(12) = 36"),
        M("Jarak fasa kedua = 12 × 10 = 120"),
        M("Jarak fasa ketiga = (1/2)(4)(12) = 24"),
        A("180 m")
      ], "180 m", [180]),
      part("(c)", "Cari laju purata zarah itu bagi keseluruhan perjalanan.", [
        M("Jumlah masa = 6 + 10 + 4 = 20 s"),
        M("180 ÷ 20"),
        A("9 m/s")
      ], "9 m/s", [9])
    ]),
    item("t4m-B04", "sukatan_serakan", "B", "tinggi", "Data berikut ialah 8 nilai: 2, 4, 4, 4, 5, 5, 7, 9.", [
      part("(a)", "Cari min.", [
        M("(2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) ÷ 8 = 40 ÷ 8"),
        A("5")
      ], "min = 5", [5]),
      part("(b)", "Hitung varians dan sisihan piawai. [Guna σ² = Σ(x − μ)² ÷ N]", [
        M("Σx² = 4 + 16 + 16 + 16 + 25 + 25 + 49 + 81 = 232"),
        M("Varians = 232/8 − 5² (atau Σ(x − 5)²/8 = 32/8)"),
        A("4"),
        A("Sisihan piawai = 2")
      ], "varians = 4; sisihan piawai = 2", [4, 2]),
      part("(c)", "Cari julat antara kuartil. [Cari Q₁ dan Q₃ sebagai median bagi separuh bawah dan separuh atas data]", [
        M("Q₁ = (4 + 4)/2 = 4"),
        M("Q₃ = (5 + 7)/2 = 6"),
        A("Julat antara kuartil = 2")
      ], "julat antara kuartil = 2", [2])
    ]),
    item("t4m-B05", "kebarangkalian", "B", "sederhana", "Beg X mengandungi 3 biji bola merah dan 2 biji bola biru. Beg Y mengandungi 4 biji bola merah dan 1 biji bola biru. Sebiji bola dikeluarkan secara rawak daripada setiap beg.", [
      part("(a)", "Cari kebarangkalian kedua-dua bola berwarna merah.", [
        M("P(merah daripada X) = 3/5 dan P(merah daripada Y) = 4/5"),
        M("3/5 × 4/5"),
        A("12/25")
      ], "12/25", [12 / 25]),
      part("(b)", "Cari kebarangkalian kedua-dua bola berwarna sama.", [
        M("P(kedua-dua biru) = 2/5 × 1/5 = 2/25"),
        M("12/25 + 2/25"),
        A("14/25")
      ], "14/25", [14 / 25]),
      part("(c)", "Cari kebarangkalian sekurang-kurangnya satu bola berwarna biru.", [
        M("Peristiwa pelengkap: 1 − P(kedua-dua merah)"),
        M("1 − 12/25"),
        A("13/25")
      ], "13/25", [13 / 25])
    ]),
    item("t4m-B06", "kewangan", "B", "sederhana", "Puan Aini berpendapatan RM4 200 sebulan daripada gaji dan RM800 sebulan daripada pendapatan sampingan. Perbelanjaan tetapnya ialah RM1 900 dan perbelanjaan tidak tetapnya ialah RM1 500 sebulan.", [
      part("(a)", "Hitung jumlah pendapatan bulanan.", [
        M("4 200 + 800"),
        A("RM5 000")
      ], "RM5 000", [5000]),
      part("(b)", "Hitung jumlah perbelanjaan bulanan.", [
        M("1 900 + 1 500"),
        A("RM3 400")
      ], "RM3 400", [3400]),
      part("(c)", "Hitung lebihan pendapatan bulanan.", [
        M("5 000 − 3 400"),
        A("RM1 600")
      ], "RM1 600", [1600]),
      part("(d)", "Puan Aini menyimpan keseluruhan lebihan itu. Nyatakan peratusan simpanan itu daripada jumlah pendapatan.", [
        M("1 600 ÷ 5 000"),
        M("× 100"),
        A("32%")
      ], "32%", [32])
    ]),
    item("t4m-B07", "ketaksamaan_linear", "B", "sederhana", "Satu rantau ditakrifkan oleh ketaksamaan y > x − 2, x + y < 8 dan x ≥ 0.", [
      part("(a)", "Tentukan sama ada titik (1, 5) berada dalam rantau itu.", [
        M("Menggantikan ke dalam y > x − 2: 5 > −1 (benar)"),
        M("Menggantikan ke dalam x + y < 8: 6 < 8 dan x ≥ 0: 1 ≥ 0 (benar)"),
        A("Dalam rantau")
      ], "dalam rantau", [1]),
      part("(b)", "Tentukan sama ada titik (3, 3) berada dalam rantau itu.", [
        M("3 > 3 − 2 (benar)"),
        M("3 + 3 < 8 (benar) dan 3 ≥ 0 (benar)"),
        A("Dalam rantau")
      ], "dalam rantau", [1]),
      part("(c)", "Tentukan sama ada titik (6, 1) berada dalam rantau itu.", [
        M("Menggantikan ke dalam y > x − 2: 1 > 4 (palsu)"),
        M("Satu ketaksamaan tidak dipenuhi"),
        A("Tidak dalam rantau")
      ], "tidak dalam rantau", [0])
    ]),

    // ===================================== BAHAGIAN C (15 marks each; answer 1 of 2) =====================================
    item("t4m-C01", "kuadratik", "C", "tinggi", "", [
      part("(a)", "(i) Selesaikan 2x² − 3x − 5 = 0.\n(ii) Selesaikan x² − 2x − 8 = 0.\n(iii) Selesaikan 3x² = 12x.", [
        M("(2x − 5)(x + 1) = 0"),
        A("x = 5/2"),
        A("x = −1"),
        M("(x − 4)(x + 2) = 0"),
        A("x = 4"),
        A("x = −2"),
        M("3x² − 12x = 0, iaitu 3x(x − 4) = 0"),
        A("x = 0 atau x = 4")
      ], "(i) x = 5/2 atau x = −1; (ii) x = 4 atau x = −2; (iii) x = 0 atau x = 4", [-1, 2.5, -2, 4, 0, 4]),
      part("(b)", "Seorang petani memagar sebidang tanah segi empat tepat dengan 40 m pagar. Luas tanah itu ialah 91 m². Cari panjang dan lebar tanah itu.", [
        M("Panjang + lebar = 20"),
        M("w(20 − w) = 91"),
        A("w² − 20w + 91 = 0"),
        M("(w − 7)(w − 13) = 0"),
        A("w = 7 atau w = 13"),
        A("Lebar = 7 m"),
        A("Panjang = 13 m")
      ], "panjang 13 m, lebar 7 m", [13, 7])
    ]),
    item("t4m-C02", "kewangan", "C", "tinggi", "Puan Aini berpendapatan RM6 500 sebulan. Perbelanjaan tetapnya ialah RM2 300 dan perbelanjaan tidak tetapnya ialah RM1 900 sebulan.", [
      part("(a)", "Hitung lebihan pendapatan bulanan.", [
        M("Jumlah perbelanjaan = 2 300 + 1 900 = 4 200"),
        M("6 500 − 4 200"),
        A("RM2 300")
      ], "RM2 300", [2300]),
      part("(b)", "Nyatakan lebihan itu sebagai peratusan daripada pendapatan, betul kepada satu tempat perpuluhan.", [
        M("2 300 ÷ 6 500"),
        M("× 100"),
        A("35.4%")
      ], "35.4%", [35.4]),
      part("(c)", "Puan Aini mahu mengumpul RM18 400 untuk deposit sebuah kereta dengan menyimpan keseluruhan lebihan itu setiap bulan. Hitung bilangan bulan yang diperlukan.", [
        M("18 400 ÷ 2 300"),
        A("8"),
        A("8 bulan")
      ], "8 bulan", [8]),
      part("(d)", "Jika perbelanjaan tidak tetap meningkat 20%, hitung (i) lebihan bulanan yang baharu, (ii) bilangan bulan yang diperlukan untuk mengumpul RM17 280 dengan menyimpan keseluruhan lebihan baharu itu.", [
        M("1 900 × 1.2"),
        A("RM2 280"),
        M("6 500 − (2 300 + 2 280)"),
        A("RM1 920"),
        M("17 280 ÷ 1 920"),
        A("9 bulan")
      ], "lebihan baharu = RM1 920; 9 bulan", [2280, 1920, 9])
    ]),
    item("t4m-C03", "graf_gerakan", "C", "tinggi", "Sebuah zarah bergerak dari keadaan rehat. Dalam 4 saat pertama, zarah itu memecut secara seragam sehingga mencapai laju 16 m/s. Zarah itu kemudian bergerak dengan laju malar selama 6 saat, dan akhirnya nyahpecut secara seragam sehingga berhenti dalam 4 saat.", [
      part("(a)", "Cari pecutan zarah itu dalam 4 saat pertama.", [
        M("16 ÷ 4"),
        A("4 m/s²")
      ], "4 m/s²", [4]),
      part("(b)", "Cari nyahpecutan zarah itu dalam 4 saat terakhir.", [
        M("(16 − 0) ÷ 4"),
        A("4 m/s²")
      ], "4 m/s²", [4]),
      part("(c)", "Cari jumlah jarak yang dilalui.", [
        M("Fasa pertama = (1/2)(4)(16) = 32"),
        M("Fasa kedua = 16 × 6 = 96"),
        M("Fasa ketiga = (1/2)(4)(16) = 32"),
        A("Jumlah = 32 + 96 + 32"),
        A("160 m")
      ], "160 m", [160]),
      part("(d)", "Cari laju purata bagi keseluruhan perjalanan, betul kepada 2 tempat perpuluhan.", [
        M("Jumlah masa = 4 + 6 + 4 = 14 s"),
        M("160 ÷ 14"),
        A("11.43 m/s")
      ], "11.43 m/s", [11.43]),
      part("(e)", "Cari masa, dalam 4 saat pertama, apabila laju zarah itu ialah 12 m/s.", [
        M("12 = 4t"),
        M("t = 12 ÷ 4"),
        A("3 s")
      ], "3 s", [3])
    ]),
    item("t4m-C04", "operasi_set", "C", "tinggi", "Dalam sebuah kelas yang mempunyai 30 orang murid, 18 orang gemar bola sepak, 14 orang gemar badminton dan 6 orang gemar kedua-dua sukan itu.", [
      part("(a)", "Cari bilangan murid yang gemar sekurang-kurangnya satu daripada dua sukan itu.", [
        M("n(B ∪ D) = n(B) + n(D) − n(B ∩ D)"),
        M("18 + 14 − 6"),
        A("26")
      ], "26", [26]),
      part("(b)", "Cari bilangan murid yang tidak gemar kedua-dua sukan itu.", [
        M("30 − 26"),
        A("4")
      ], "4", [4]),
      part("(c)", "Cari bilangan murid yang gemar bola sepak sahaja.", [
        M("18 − 6"),
        A("12")
      ], "12", [12]),
      part("(d)", "Seorang murid dipilih secara rawak. Cari kebarangkalian murid itu gemar tepat satu daripada dua sukan itu.", [
        M("Gemar badminton sahaja = 14 − 6 = 8"),
        M("12 + 8 = 20"),
        M("20/30"),
        A("2/3")
      ], "2/3", [2 / 3]),
      part("(e)", "Terdapat dua kelas lain, Kelas Z dan Kelas Y. Kebarangkalian seorang murid Kelas Z lulus ujian ialah 0.7 dan kebarangkalian seorang murid Kelas Y lulus ialah 0.8. Seorang murid dipilih secara berasingan daripada setiap kelas (kedua-dua peristiwa itu bebas). Cari kebarangkalian bahawa (i) kedua-duanya lulus, (ii) sekurang-kurangnya seorang lulus.", [
        M("0.7 × 0.8"),
        A("0.56"),
        M("1 − (0.3 × 0.2)"),
        A("0.94")
      ], "(i) 0.56; (ii) 0.94", [0.56, 0.94])
    ])
  ];

  function marksOf(it) {
    return it.parts.reduce((a, p) => a + p.marks, 0);
  }

  return { ITEMS, marksOf };
});
