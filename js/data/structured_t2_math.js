/**
 * Structured (subjective) questions: Tingkatan 2 Matematik PILOT. All items are ORIGINAL (no text copied from any paper).
 * Format follows the real UASA paper: Bahagian B (5 questions, 4 marks each = 20) and Bahagian C (6 questions, 10 marks each = 60).
 * Each part lists marking steps: kind M = method mark, A = accuracy mark; every step is worth 1 mark.
 * `check` holds the final numeric answers, recomputed independently by scripts/verify-structured.mjs.
 * `status`: "draft" until scripts/verify-structured.mjs AND the blind second-model solve both agree; then "verified".
 *
 * VERIFICATION RECORD (24/Nov/2026 & 27/Nov/2026), all 22 items (18 original + t2m-B11, B12, C09, C10):
 *   Gate 1: scripts/verify-structured.mjs recomputed every answer from the problem's own numbers: 266 checks passed.
 *   Gate 2: a separate model (Opus) solved all 43 parts blind (question text only): 43/43 final answers agree.
 *           It also judged every question suitable for Form 2 (KSSM). Notes applied: C06(c) key accepts -2.5 m/s2 as well.
 *   27/Nov/2026: Added t2m-B11, t2m-B12 (graf_fungsi, transformasi) and t2m-C09, t2m-C10 — Gate 1 verify-structured.mjs + Gate 2 gemini-4-argon 8/8 exact agreement, 0 flags.
 *   Still recommended: a teacher or Irfan skims the questions for syllabus fit before wider release.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.t2_math = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const M = (text) => ({ kind: "M", marks: 1, text });
  const A = (text) => ({ kind: "A", marks: 1, text });
  const part = (label, q, steps, answer, check) => ({ label, q, marks: steps.reduce((a, s) => a + s.marks, 0), steps, answer, check });

  const ITEMS = [
    // ===================================== BAHAGIAN B (4 marks each) =====================================
    {
      id: "t2m-B01", chapterId: "pola_jujukan", part: "B", level: "rendah", status: "verified",
      stem: "Diberi jujukan 5, 11, 17, 23, ...",
      parts: [part("", "(a) Nyatakan sebutan ke-n dalam sebutan n.\n(b) Cari sebutan ke-20.", [
        M("Mengenal pasti beza sepunya 6 (atau pekali n ialah 6)"),
        A("Tn = 6n − 1"),
        M("Menggantikan n = 20 ke dalam Tn"),
        A("T20 = 119")
      ], "Tn = 6n − 1; T20 = 119", [119])]
    },
    {
      id: "t2m-B02", chapterId: "pemfaktoran", part: "B", level: "sederhana", status: "verified",
      stem: "Faktorkan sepenuhnya 3x² − 12.",
      parts: [part("", "", [
        M("Mengeluarkan faktor sepunya 3"),
        A("3(x² − 4)"),
        M("Mengenal pasti perbezaan dua kuasa dua, x² − 2²"),
        A("3(x − 2)(x + 2)")
      ], "3(x − 2)(x + 2)", [3, 0, -12])]
    },
    {
      id: "t2m-B03", chapterId: "rumus_algebra", part: "B", level: "rendah", status: "verified",
      stem: "Diberi v = u + at.",
      parts: [part("", "(a) Ungkapkan a dalam sebutan v, u dan t.\n(b) Cari nilai a jika v = 30, u = 6 dan t = 4.", [
        M("v − u = at"),
        A("a = (v − u) ÷ t"),
        M("Menggantikan v = 30, u = 6, t = 4"),
        A("a = 6")
      ], "a = (v − u) / t; a = 6", [6])]
    },
    {
      id: "t2m-B04", chapterId: "poligon", part: "B", level: "sederhana", status: "verified",
      stem: "Hasil tambah sudut pedalaman sebuah poligon sekata ialah 1 080°.",
      parts: [part("", "Cari\n(a) bilangan sisi poligon itu,\n(b) sudut pedalaman bagi satu sudut poligon itu.", [
        M("(n − 2) × 180° = 1 080°"),
        A("n = 8"),
        M("1 080° ÷ 8"),
        A("135°")
      ], "n = 8; sudut pedalaman = 135°", [8, 135])]
    },
    {
      id: "t2m-B05", chapterId: "bulatan", part: "B", level: "sederhana", status: "verified",
      stem: "Lilitan sebuah bulatan ialah 88 cm. [Guna π = 22/7]",
      parts: [part("", "Cari\n(a) jejari bulatan itu,\n(b) luas bulatan itu.", [
        M("2 × (22/7) × j = 88"),
        A("j = 14 cm"),
        M("(22/7) × 14²"),
        A("616 cm²")
      ], "j = 14 cm; luas = 616 cm²", [14, 616])]
    },
    {
      id: "t2m-B06", chapterId: "koordinat", part: "B", level: "rendah", status: "verified",
      stem: "Titik P(2, 3) dan titik Q(8, 11).",
      parts: [part("", "Hitung\n(a) jarak PQ,\n(b) koordinat titik tengah PQ.", [
        M("√[(8 − 2)² + (11 − 3)²]"),
        A("PQ = 10 unit"),
        M("((2 + 8)/2, (3 + 11)/2)"),
        A("(5, 7)")
      ], "PQ = 10 unit; titik tengah = (5, 7)", [10, 5, 7])]
    },
    {
      id: "t2m-B07", chapterId: "laju_pecutan", part: "B", level: "sederhana", status: "verified",
      stem: "Sebuah kereta bergerak sejauh 180 km dalam 2 jam 30 minit.",
      parts: [part("", "Cari laju purata kereta itu dalam\n(a) km/j,\n(b) m/s.", [
        M("180 ÷ 2.5 (2 jam 30 minit = 2.5 jam)"),
        A("72 km/j"),
        M("72 × 1 000 ÷ 3 600"),
        A("20 m/s")
      ], "72 km/j; 20 m/s", [72, 20])]
    },
    {
      id: "t2m-B08", chapterId: "kebarangkalian", part: "B", level: "rendah", status: "verified",
      stem: "Sebuah beg mengandungi 5 biji bola merah, 3 biji bola biru dan 2 biji bola hijau. Sebiji bola dipilih secara rawak.",
      parts: [part("", "Cari kebarangkalian bahawa bola itu\n(a) berwarna biru,\n(b) bukan berwarna merah.", [
        M("Jumlah bola = 10"),
        A("P(biru) = 3/10"),
        M("P(bukan merah) = 1 − 5/10 (atau 5/10)"),
        A("P(bukan merah) = 1/2")
      ], "P(biru) = 3/10; P(bukan merah) = 1/2", [0.3, 0.5])]
    },
    {
      id: "t2m-B09", chapterId: "kecerunan", part: "B", level: "sederhana", status: "verified",
      stem: "Kecerunan garis lurus yang melalui A(1, 2) dan B(5, k) ialah 3.",
      parts: [part("", "Cari nilai k.", [
        M("(k − 2) / (5 − 1)"),
        A("(k − 2)/4 = 3"),
        M("k − 2 = 12"),
        A("k = 14")
      ], "k = 14", [14])]
    },
    {
      id: "t2m-B10", chapterId: "sukatan_kecenderungan", part: "B", level: "rendah", status: "verified",
      stem: "Data berikut menunjukkan markah 8 orang murid: 3, 7, 5, 9, 7, 4, 7, 8.",
      parts: [part("", "Cari\n(a) min,\n(b) mod.", [
        M("(3 + 7 + 5 + 9 + 7 + 4 + 7 + 8) ÷ 8"),
        A("min = 6.25"),
        M("Mengenal pasti nilai dengan kekerapan tertinggi (7 muncul 3 kali)"),
        A("mod = 7")
      ], "min = 6.25; mod = 7", [6.25, 7])]
    },

    // ===================================== BAHAGIAN C (10 marks each) =====================================
    {
      id: "t2m-C01", chapterId: "pemfaktoran", part: "C", level: "sederhana", status: "verified",
      stem: "",
      parts: [
        part("(a)", "Kembangkan dan permudahkan (2p + 3)(p − 4) − p(p − 1).", [
          M("(2p + 3)(p − 4) = 2p² − 8p + 3p − 12"),
          A("2p² − 5p − 12"),
          M("Menolak p² − p"),
          A("p² − 4p − 12")
        ], "p² − 4p − 12", [1, -4, -12]),
        part("(b)", "Faktorkan x² − 5x − 14.", [
          M("Dua nombor yang hasil darabnya −14"),
          M("Dua nombor yang hasil tambahnya −5 (−7 dan 2)"),
          A("(x − 7)(x + 2)")
        ], "(x − 7)(x + 2)", [1, -5, -14]),
        part("(c)", "Permudahkan 3/(2x) + 5/x².", [
          M("Penyebut sepunya 2x²"),
          M("3x/(2x²) + 10/(2x²)"),
          A("(3x + 10)/(2x²)")
        ], "(3x + 10) / (2x²)", [2])
      ]
    },
    {
      id: "t2m-C02", chapterId: "poligon", part: "C", level: "tinggi", status: "verified",
      stem: "",
      parts: [
        part("(a)", "Cari sudut pedalaman bagi sebuah segi lima sekata.", [
          M("(5 − 2) × 180°"),
          M("540° ÷ 5"),
          A("108°")
        ], "108°", [108]),
        part("(b)", "Sudut pedalaman sebuah poligon sekata ialah 5 kali sudut peluarannya. Cari bilangan sisi poligon itu.", [
          M("Sudut pedalaman + sudut peluaran = 180°"),
          M("6 × sudut peluaran = 180°"),
          A("Sudut peluaran = 30°"),
          A("n = 360° ÷ 30° = 12")
        ], "n = 12", [12]),
        part("(c)", "Cari sudut pedalaman bagi sebuah poligon sekata yang mempunyai 15 sisi.", [
          M("Sudut peluaran = 360° ÷ 15"),
          A("24°"),
          A("Sudut pedalaman = 180° − 24° = 156°")
        ], "156°", [156])
      ]
    },
    {
      id: "t2m-C03", chapterId: "bulatan", part: "C", level: "sederhana", status: "verified",
      stem: "[Guna π = 22/7]",
      parts: [
        part("(a)", "Sebuah bulatan berjejari 7 cm. Cari lilitan dan luas bulatan itu.", [
          M("Lilitan = 2 × (22/7) × 7"),
          A("44 cm"),
          M("Luas = (22/7) × 7²"),
          A("154 cm²")
        ], "lilitan = 44 cm; luas = 154 cm²", [44, 154]),
        part("(b)", "Sebuah roda berjejari 21 cm berputar lengkap 20 kali. Cari jarak, dalam m, yang dilalui roda itu.", [
          M("Lilitan roda = 2 × (22/7) × 21 = 132 cm"),
          M("132 × 20 = 2 640 cm"),
          A("26.4 m")
        ], "26.4 m", [26.4]),
        part("(c)", "Cari luas sebuah semibulatan yang berdiameter 14 cm.", [
          M("Jejari = 7 cm"),
          M("(1/2) × (22/7) × 7²"),
          A("77 cm²")
        ], "77 cm²", [77])
      ]
    },
    {
      id: "t2m-C04", chapterId: "bentuk_3d", part: "C", level: "sederhana", status: "verified",
      stem: "[Guna π = 22/7]",
      parts: [
        part("(a)", "Cari isi padu sebuah silinder berjejari 7 cm dan tinggi 10 cm.", [
          M("Isi padu = πj²t"),
          M("(22/7) × 7² × 10"),
          A("1 540 cm³")
        ], "1 540 cm³", [1540]),
        part("(b)", "Cari isi padu sebuah kon berjejari 7 cm dan tinggi 12 cm.", [
          M("Isi padu = (1/3)πj²t"),
          M("(1/3) × (22/7) × 7² × 12"),
          A("616 cm³")
        ], "616 cm³", [616]),
        part("(c)", "Sebuah kuboid berukuran 8 cm × 5 cm × 3 cm. Cari luas permukaannya.", [
          M("Luas tiga pasang muka: 8 × 5 = 40, 8 × 3 = 24, 5 × 3 = 15"),
          M("Jumlah luas = 40 + 24 + 15 = 79"),
          M("Luas permukaan = 2 × 79"),
          A("158 cm²")
        ], "158 cm²", [158])
      ]
    },
    {
      id: "t2m-C05", chapterId: "koordinat", part: "C", level: "sederhana", status: "verified",
      stem: "",
      parts: [
        part("(a)", "Titik A(−2, 1) dan titik B(4, 9). Cari jarak AB.", [
          M("√[(4 − (−2))² + (9 − 1)²]"),
          M("√(36 + 64)"),
          A("10 unit")
        ], "AB = 10 unit", [10]),
        part("(b)", "Cari koordinat titik tengah AB.", [
          M("(−2 + 4)/2"),
          M("(1 + 9)/2"),
          A("(1, 5)")
        ], "(1, 5)", [1, 5]),
        part("(c)", "Titik C(m, 5) dan titik D(7, 5) terletak pada satu garis mengufuk dan jarak CD ialah 6 unit. Cari dua kemungkinan nilai m.", [
          M("Jarak CD = |7 − m| = 6"),
          M("7 − m = 6 atau 7 − m = −6"),
          A("m = 1"),
          A("m = 13")
        ], "m = 1 atau m = 13", [1, 13])
      ]
    },
    {
      id: "t2m-C06", chapterId: "laju_pecutan", part: "C", level: "sederhana", status: "verified",
      stem: "",
      parts: [
        part("(a)", "Sebuah bas bergerak sejauh 240 km dalam 3 jam 20 minit. Cari laju purata bas itu dalam km/j.", [
          M("3 jam 20 minit = 10/3 jam"),
          M("240 ÷ (10/3)"),
          A("72 km/j")
        ], "72 km/j", [72]),
        part("(b)", "Laju sebuah kereta bertambah daripada 10 m/s kepada 30 m/s dalam masa 5 saat. Cari pecutan kereta itu.", [
          M("(30 − 10) ÷ 5"),
          A("4"),
          A("Unit m/s²")
        ], "4 m/s²", [4]),
        part("(c)", "Sebuah kereta api bergerak pada 20 m/s dan berhenti dalam masa 8 saat dengan nyahpecutan seragam. Cari nyahpecutan kereta api itu.", [
          M("(0 − 20) ÷ 8"),
          A("−2.5 m/s²"),
          M("Nyahpecutan ialah magnitud pecutan negatif"),
          A("2.5 m/s²")
        ], "nyahpecutan = 2.5 m/s² (atau pecutan = −2.5 m/s²)", [2.5])
      ]
    },
    {
      id: "t2m-C07", chapterId: "sukatan_kecenderungan", part: "C", level: "tinggi", status: "verified",
      stem: "Jadual kekerapan menunjukkan markah 20 orang murid dalam satu kuiz.\n\nMarkah: 4, 5, 6, 7, 8\nKekerapan: 2, 3, 5, 7, 3",
      parts: [
        part("(a)", "Nyatakan mod.", [
          M("Kekerapan tertinggi ialah 7"),
          A("Mod = 7")
        ], "mod = 7", [7]),
        part("(b)", "Hitung min markah.", [
          M("Jumlah (markah × kekerapan) = 8 + 15 + 30 + 49 + 24"),
          A("126"),
          M("126 ÷ 20"),
          A("6.3")
        ], "min = 6.3", [6.3]),
        part("(c)", "Cari median markah.", [
          M("Kedudukan median ialah antara nilai ke-10 dan ke-11"),
          M("Kekerapan longgokan 2, 5, 10, 17, 20"),
          A("Nilai ke-10 = 6 dan nilai ke-11 = 7"),
          A("Median = 6.5")
        ], "median = 6.5", [6.5])
      ]
    },
    {
      id: "t2m-C08", chapterId: "kebarangkalian", part: "C", level: "sederhana", status: "verified",
      stem: "",
      parts: [
        part("(a)", "Satu nombor dipilih secara rawak daripada 1, 2, 3, ..., 20. Cari kebarangkalian bahawa nombor itu\n(i) gandaan 5,\n(ii) nombor perdana.", [
          M("Gandaan 5: 5, 10, 15, 20 (4 nombor)"),
          A("P(gandaan 5) = 4/20 = 1/5"),
          M("Nombor perdana: 2, 3, 5, 7, 11, 13, 17, 19 (8 nombor)"),
          A("P(perdana) = 8/20 = 2/5")
        ], "(i) 1/5; (ii) 2/5", [0.2, 0.4]),
        part("(b)", "Dalam sebuah kelas, kebarangkalian memilih seorang murid lelaki ialah 3/5. Kelas itu mempunyai 30 orang murid. Cari bilangan murid perempuan.", [
          M("P(perempuan) = 1 − 3/5"),
          A("2/5"),
          A("(2/5) × 30 = 12")
        ], "12 orang", [12]),
        part("(c)", "Sebuah dadu adil dilambung 60 kali. Jangkakan bilangan kali nombor genap muncul.", [
          M("P(genap) = 3/6 = 1/2"),
          M("(1/2) × 60"),
          A("30 kali")
        ], "30 kali", [30])
      ]
    },
    {
      "id": "t2m-B11",
      "chapterId": "graf_fungsi",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Diberi fungsi kuadratik y = 2x² − 5x + 1. Jadual di bawah menunjukkan sebahagian nilai x dan y bagi fungsi itu.\n\nx: −1,  1,  2, 3,  4\ny:  8,  m, −1, n, 13",
      "parts": [
        {
          "label": "",
          "q": "(a) Cari nilai m dan nilai n.\n(b) Jika titik (−2, k) terletak pada graf fungsi itu, cari nilai k.",
          "marks": 4,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "Menggantikan x = 1 dan x = 3 ke dalam y = 2x² − 5x + 1"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "m = −2 dan n = 4"
            },
            {
              "kind": "M",
              "marks": 1,
              "text": "Menggantikan x = −2 ke dalam persamaan: 2(−2)² − 5(−2) + 1"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "k = 19"
            }
          ],
          "answer": "m = −2, n = 4; k = 19",
          "check": [
            -2,
            4,
            19
          ]
        }
      ]
    },
    {
      "id": "t2m-B12",
      "chapterId": "transformasi",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Pada satah Cartes, titik P mempunyai koordinat (5, −2).",
      "parts": [
        {
          "label": "",
          "q": "Cari koordinat imej bagi titik P di bawah\n(a) translasi dengan vektor (−3, 4),\n(b) pantulan pada garis x = 1.",
          "marks": 4,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "(5 + (−3), −2 + 4)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "(2, 2)"
            },
            {
              "kind": "M",
              "marks": 1,
              "text": "Jarak mengufuk dari garis x = 1 ialah 5 − 1 = 4 unit, maka koordinat-x imej = 1 − 4"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "(−3, −2)"
            }
          ],
          "answer": "(a) (2, 2); (b) (−3, −2)",
          "check": [
            2,
            2,
            -3,
            -2
          ]
        }
      ]
    },
    {
      "id": "t2m-C09",
      "chapterId": "graf_fungsi",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "",
      "parts": [
        {
          "label": "(a)",
          "q": "Jadual di bawah menunjukkan nilai-nilai bagi fungsi kuadratik y = x² − 2x − 8.\n\nx: −2, −1,  0,  1, 2,  3, 4\ny:  0,  p, −8, −9, q, −5, 0\n\nHitung nilai p dan nilai q.",
          "marks": 3,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "Menggantikan x = −1 dan x = 2 ke dalam y = x² − 2x − 8"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "p = −5"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "q = −8"
            }
          ],
          "answer": "p = −5; q = −8",
          "check": [
            -5,
            -8
          ]
        },
        {
          "label": "(b)",
          "q": "Bagi graf fungsi y = x² − 2x − 8 dalam (a),\n(i) nyatakan dua nilai x apabila graf itu memotong paksi-x,\n(ii) cari nilai y apabila x = 5.",
          "marks": 3,
          "steps": [
            {
              "kind": "A",
              "marks": 1,
              "text": "Pintasan-x berlaku apabila y = 0, iaitu x = −2 dan x = 4"
            },
            {
              "kind": "M",
              "marks": 1,
              "text": "Menggantikan x = 5: 5² − 2(5) − 8"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "y = 7"
            }
          ],
          "answer": "(i) x = −2 dan x = 4; (ii) y = 7",
          "check": [
            -2,
            4,
            7
          ]
        },
        {
          "label": "(c)",
          "q": "Sebuah syarikat penghantaran mengenakan bayaran tetap RM10 dan tambahan RM2.50 bagi setiap kilometer jarak penghantaran. Jumlah bayaran, C (dalam RM), bagi jarak d km diwakili oleh fungsi linear C = md + c.\n(i) Nyatakan nilai m dan nilai c.\n(ii) Hitung jarak penghantaran, dalam km, jika jumlah bayaran ialah RM45.",
          "marks": 4,
          "steps": [
            {
              "kind": "A",
              "marks": 1,
              "text": "m = 2.5 (kadar bayaran per km)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "c = 10 (bayaran tetap apabila d = 0)"
            },
            {
              "kind": "M",
              "marks": 1,
              "text": "2.5d + 10 = 45 atau d = (45 − 10) ÷ 2.5"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "d = 14 km"
            }
          ],
          "answer": "(i) m = 2.5, c = 10; (ii) 14 km",
          "check": [
            2.5,
            10,
            14
          ]
        }
      ]
    },
    {
      "id": "t2m-C10",
      "chapterId": "transformasi",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Pada suatu satah Cartes, sebuah segi tiga ABC mempunyai bucu-bucu A(2, 1), B(6, 1) dan C(2, 4).",
      "parts": [
        {
          "label": "(a)",
          "q": "Di bawah suatu translasi T, imej bagi bucu A(2, 1) ialah A'(−1, 5).\n(i) Tentukan vektor translasi T.\n(ii) Cari koordinat imej bagi bucu B(6, 1) di bawah translasi T yang sama.",
          "marks": 3,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "Vektor translasi T = (−1 − 2, 5 − 1)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "T = (−3, 4)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "B' = (6 + (−3), 1 + 4) = (3, 5)"
            }
          ],
          "answer": "(i) (−3, 4); (ii) (3, 5)",
          "check": [
            -3,
            4,
            3,
            5
          ]
        },
        {
          "label": "(b)",
          "q": "Cari koordinat imej bagi bucu B(6, 1) dan bucu C(2, 4) di bawah pantulan pada garis y = 3.",
          "marks": 3,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "Pantulan pada y = 3 mengekalkan koordinat-x dan memetakan y kepada 2(3) − y"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "Imej B ialah (6, 5)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "Imej C ialah (2, 2)"
            }
          ],
          "answer": "Imej B = (6, 5); imej C = (2, 2)",
          "check": [
            6,
            5,
            2,
            2
          ]
        },
        {
          "label": "(c)",
          "q": "Segi tiga PQR ialah imej bagi segi tiga ABC di bawah putaran 90° ikut arah jam pada asalan (0, 0).\n(i) Cari koordinat imej bagi bucu C(2, 4) di bawah putaran itu.\n(ii) Dengan menggunakan sifat kekongruenan transformasi isometri, hitung luas, dalam unit², bagi segi tiga PQR.",
          "marks": 4,
          "steps": [
            {
              "kind": "M",
              "marks": 1,
              "text": "Putaran 90° ikut arah jam pada asalan (0, 0) memetakan (x, y) → (y, −x)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "Imej bagi C(2, 4) ialah (4, −2)"
            },
            {
              "kind": "M",
              "marks": 1,
              "text": "Transformasi isometri mengekalkan saiz dan bentuk (kongruen): luas PQR = luas ABC = (1/2) × (6 − 2) × (4 − 1)"
            },
            {
              "kind": "A",
              "marks": 1,
              "text": "6 unit²"
            }
          ],
          "answer": "(i) (4, −2); (ii) 6 unit²",
          "check": [
            4,
            -2,
            6
          ]
        }
      ]
    }
  ];

  function marksOf(item) {
    return item.parts.reduce((a, p) => a + p.marks, 0);
  }

  return { ITEMS, marksOf };
});
