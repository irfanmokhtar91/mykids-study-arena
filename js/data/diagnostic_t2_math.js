/**
 * Generated from js/data/diagnostic_t2_math.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.t2 = App.DiagnosticBanks.t2 || {};
    App.DiagnosticBanks.t2.math = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "t2_math_pola_01",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "pola_jujukan",
        "topic_name": "Bab 1: Pola dan Jujukan",
        "subtopic_name": "Mengenal Pasti dan Melengkapkan Pola Nombor",
        "prerequisite_node_id": null,
        "expected_time_ms": 30000,
        "bloom_level": "Remember"
      },
      {
        "id": "t2_math_pola_02",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "pola_jujukan",
        "topic_name": "Bab 1: Pola dan Jujukan",
        "subtopic_name": "Jujukan dan Sebutan ke-n",
        "prerequisite_node_id": "t2_math_pola_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_math_alg_01",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "pemfaktoran",
        "topic_name": "Bab 2: Pemfaktoran dan Pecahan Algebra",
        "subtopic_name": "Kembangan Ungkapan Algebra",
        "prerequisite_node_id": null,
        "expected_time_ms": 40000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_math_alg_02",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "pemfaktoran",
        "topic_name": "Bab 2: Pemfaktoran dan Pecahan Algebra",
        "subtopic_name": "Pemfaktoran Ungkapan Algebra",
        "prerequisite_node_id": "t2_math_alg_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_math_alg_03",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "pemfaktoran",
        "topic_name": "Bab 2: Pemfaktoran dan Pecahan Algebra",
        "subtopic_name": "Operasi dan Permudahan Pecahan Algebra",
        "prerequisite_node_id": "t2_math_alg_02",
        "expected_time_ms": 55000,
        "bloom_level": "Analyze"
      },
      {
        "id": "t2_math_rumus_01",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "rumus_algebra",
        "topic_name": "Bab 3: Rumus Algebra",
        "subtopic_name": "Membina dan Menukar Perkara Rumus",
        "prerequisite_node_id": "t2_math_alg_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_math_rumus_02",
        "subject": "math",
        "grade_level": "t2",
        "chapter_id": "rumus_algebra",
        "topic_name": "Bab 3: Rumus Algebra",
        "subtopic_name": "Menentukan Nilai Pemboleh Ubah dalam Rumus",
        "prerequisite_node_id": "t2_math_rumus_01",
        "expected_time_ms": 50000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "t2m_pola_01_q1",
        "syllabus_node_id": "t2_math_pola_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah nilai x bagi jujukan nombor menurun yang berikut: 42, 35, 28, x, 14?",
        "options_json": {
          "A": "21",
          "B": "22",
          "C": "23",
          "D": "35"
        },
        "correct_option": "A",
        "explanation_text": "Pola jujukan ini ialah menolak 7 daripada nombor sebelumnya, jadi x = 28 - 7 = 21 (semak: 21 - 7 = 14). Pilihan B (22) berpunca daripada salah tolak 6; pilihan C (23) daripada salah tolak 5; pilihan D (35) berlaku jika pelajar tersilap menambah 7 bukannya menolak 7.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return 28 - 7;",
          "ans": "21"
        }
      },
      {
        "id": "t2m_pola_01_q2",
        "syllabus_node_id": "t2_math_pola_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Nyatakan pola bagi jujukan nombor 3, 9, 27, 81, ... dengan perkataan.",
        "options_json": {
          "A": "Menambah 6 kepada nombor sebelumnya",
          "B": "Mendarab nombor sebelumnya dengan 3",
          "C": "Menambah 18 kepada nombor sebelumnya",
          "D": "Membahagi nombor sebelumnya dengan 3"
        },
        "correct_option": "B",
        "explanation_text": "Setiap sebutan diperoleh dengan mendarab sebutan sebelumnya dengan 3 (3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81). Pilihan A hanya melihat beza dua sebutan pertama (9 - 3 = 6); pilihan C hanya melihat beza 27 - 9 = 18; pilihan D terbalik antara operasi bahagi dan darab.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const seq=[3,9,27,81]; const r=seq[1]/seq[0]; return seq.every((v,i)=>i===0||v===seq[i-1]*r) ? 'Mendarab nombor sebelumnya dengan ' + r : '';",
          "ans": "Mendarab nombor sebelumnya dengan 3"
        }
      },
      {
        "id": "t2m_pola_01_q3",
        "syllabus_node_id": "t2_math_pola_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Cari hasil tambah p + q bagi jujukan Nombor Fibonacci berikut: 1, 1, 2, 3, 5, p, 13, q.",
        "options_json": {
          "A": "26",
          "B": "27",
          "C": "29",
          "D": "34"
        },
        "correct_option": "C",
        "explanation_text": "Dalam Nombor Fibonacci, setiap sebutan ialah hasil tambah dua sebutan sebelumnya: p = 3 + 5 = 8 dan q = 8 + 13 = 21, maka p + q = 8 + 21 = 29. Pilihan A (26) dan B (27) menganggap beza antara 5 dan 13 meningkat secara aritmetik; pilihan D (34) ialah nilai sebutan selepas q (13 + 21) kerana tidak menjawab p + q.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const p = 3 + 5; const q = p + 13; return p + q;",
          "ans": "29"
        }
      },
      {
        "id": "t2m_pola_01_q4",
        "syllabus_node_id": "t2_math_pola_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Satu baris dalam Segi Tiga Pascal ialah 1, 5, 10, k, 5, 1. Apakah nilai k?",
        "options_json": {
          "A": "5",
          "B": "6",
          "C": "15",
          "D": "10"
        },
        "correct_option": "D",
        "explanation_text": "Mengikut sifat simetri Segi Tiga Pascal (atau hasil tambah dua nombor baris di atasnya iaitu 4 + 6), nilai k ialah 10. Pilihan A (5) meniru nombor di sebelahnya secara cuai; pilihan B (6) menambah 5 + 1; pilihan C (15) tersilap menambah 10 + 5 pada baris yang sama.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const prev=[1,4,6,4,1]; return prev[2]+prev[3];",
          "ans": "10"
        }
      },
      {
        "id": "t2m_pola_01_q5",
        "syllabus_node_id": "t2_math_pola_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Diberi jujukan nombor 2, 5, 10, 17, 26, m. Tentukan nilai m.",
        "options_json": {
          "A": "37",
          "B": "35",
          "C": "36",
          "D": "39"
        },
        "correct_option": "A",
        "explanation_text": "Beza antara sebutan berturutan ialah +3, +5, +7, +9, maka beza seterusnya ialah +11 dan m = 26 + 11 = 37 (atau menggunakan rumus n² + 1 bagi n = 6). Pilihan B (35) mengulangi beza +9; pilihan C (36) terlupa menambah 1 pada 6²; pilihan D (39) melangkau kepada +13.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const n = 6; return n * n + 1;",
          "ans": "37"
        }
      },
      {
        "id": "t2m_pola_02_q1",
        "syllabus_node_id": "t2_math_pola_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diberi sebutan ke-n bagi suatu jujukan ialah Tn = 4n - 3. Cari nilai sebutan ke-8, T8.",
        "options_json": {
          "A": "25",
          "B": "29",
          "C": "35",
          "D": "45"
        },
        "correct_option": "B",
        "explanation_text": "Gantikan n = 8 ke dalam rumus: T8 = 4(8) - 3 = 32 - 3 = 29. Pilihan A (25) menggantikan n = 7 (silap kira indeks bermula dari sifar); pilihan C (35) tersilap menambah 3 bukannya menolak; pilihan D (45) menggabungkan digit 4 dan 8 menjadi 48 - 3.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return 4 * 8 - 3;",
          "ans": "29"
        }
      },
      {
        "id": "t2m_pola_02_q2",
        "syllabus_node_id": "t2_math_pola_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Cari ungkapan sebutan ke-n, Tn, bagi jujukan nombor 7, 11, 15, 19, ...",
        "options_json": {
          "A": "4n + 7",
          "B": "7n + 4",
          "C": "4n + 3",
          "D": "4n - 3"
        },
        "correct_option": "C",
        "explanation_text": "Beza sepunya ialah 4, maka Tn = 7 + 4(n - 1) = 4n + 3 (semak n = 1 memberi 7). Pilihan A (4n + 7) memasukkan terus sebutan pertama 7 sebagai pemalar; pilihan B (7n + 4) menukar tempat sebutan pertama dan beza sepunya; pilihan D (4n - 3) tersilap tanda pemalar.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "4*n + 3",
          "options": {
            "A": "4*n + 7",
            "B": "7*n + 4",
            "C": "4*n + 3",
            "D": "4*n - 3"
          }
        }
      },
      {
        "id": "t2m_pola_02_q3",
        "syllabus_node_id": "t2_math_pola_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Diberi jujukan menurun 25, 22, 19, 16, ... Tentukan ungkapan sebutan ke-n, Tn.",
        "options_json": {
          "A": "25 - 3n",
          "B": "25 + 3n",
          "C": "3n - 28",
          "D": "28 - 3n"
        },
        "correct_option": "D",
        "explanation_text": "Sebutan pertama ialah 25 dan beza sepunya ialah -3, maka Tn = 25 - 3(n - 1) = 28 - 3n. Pilihan A (25 - 3n) lupa menggunakan (n - 1); pilihan B (25 + 3n) menggunakan tanda tambah walaupun jujukan menurun; pilihan C (3n - 28) terbalik urutan penolakan.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "28 - 3*n",
          "options": {
            "A": "25 - 3*n",
            "B": "25 + 3*n",
            "C": "3*n - 28",
            "D": "28 - 3*n"
          }
        }
      },
      {
        "id": "t2m_pola_02_q4",
        "syllabus_node_id": "t2_math_pola_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Dalam jujukan 6, 11, 16, 21, ..., sebutan ke-k bernilai 86. Apakah nilai k?",
        "options_json": {
          "A": "17",
          "B": "16",
          "C": "18",
          "D": "15"
        },
        "correct_option": "A",
        "explanation_text": "Sebutan ke-n ialah Tn = 5n + 1. Selesaikan 5k + 1 = 86 menghasilkan 5k = 85, maka k = 17. Pilihan B (16) membahagi (86 - 6) ÷ 5 tanpa menambah 1 untuk sebutan pertama; pilihan C (18) tersilap menambah 1 dua kali; pilihan D (15) terkeliru menggunakan formula 6n - 4.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (86 - 1) / 5;",
          "ans": "17"
        }
      },
      {
        "id": "t2m_pola_02_q5",
        "syllabus_node_id": "t2_math_pola_02",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebutan ke-n bagi suatu jujukan diberi oleh Tn = 3n² - 2. Hitung beza antara sebutan ke-5 dan sebutan ke-3.",
        "options_json": {
          "A": "24",
          "B": "48",
          "C": "10",
          "D": "52"
        },
        "correct_option": "B",
        "explanation_text": "T5 = 3(5)² - 2 = 75 - 2 = 73 dan T3 = 3(3)² - 2 = 27 - 2 = 25, maka T5 - T3 = 73 - 25 = 48. Pilihan A (24) tersilap menggantikan n = 5 - 3 = 2 atau mengira 3(5 - 3)² × 2; pilihan C (10) mengira 3n(2) - 2 bukannya kuasa dua; pilihan D (52) tersilap tanda semasa mengira 75 - 23.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const T = (n) => 3*n*n - 2; return T(5) - T(3);",
          "ans": "48"
        }
      },
      {
        "id": "t2m_alg_01_q1",
        "syllabus_node_id": "t2_math_alg_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kembangkan -3(2x - 5).",
        "options_json": {
          "A": "-6x - 15",
          "B": "-6x - 5",
          "C": "-6x + 15",
          "D": "6x - 15"
        },
        "correct_option": "C",
        "explanation_text": "Darabkan -3 dengan setiap sebutan: -3(2x) + (-3)(-5) = -6x + 15. Pilihan A (-6x - 15) ialah ralat tanda klasik kerana menganggap negatif darab negatif masih negatif; pilihan B (-6x - 5) lupa mendarab -3 dengan -5; pilihan D (6x - 15) mengabaikan tanda negatif di luar kurungan.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "-3*(2*x - 5)",
          "options": {
            "A": "-6*x - 15",
            "B": "-6*x - 5",
            "C": "-6*x + 15",
            "D": "6*x - 15"
          }
        }
      },
      {
        "id": "t2m_alg_01_q2",
        "syllabus_node_id": "t2_math_alg_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kembangkan (x + 4)(x - 7).",
        "options_json": {
          "A": "x² + 3x - 28",
          "B": "x² - 28",
          "C": "x² - 11x - 28",
          "D": "x² - 3x - 28"
        },
        "correct_option": "D",
        "explanation_text": "Kembangkan: x² - 7x + 4x - 28 = x² - 3x - 28. Pilihan A (x² + 3x - 28) silap tanda pada +4x - 7x; pilihan B (x² - 28) meninggalkan hasil darab sebutan silang; pilihan C (x² - 11x - 28) menambah 7 + 4 secara terus tanpa mengambil kira tanda berlainan.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(x + 4)*(x - 7)",
          "options": {
            "A": "x**2 + 3*x - 28",
            "B": "x**2 - 28",
            "C": "x**2 - 11*x - 28",
            "D": "x**2 - 3*x - 28"
          }
        }
      },
      {
        "id": "t2m_alg_01_q3",
        "syllabus_node_id": "t2_math_alg_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kembangkan (2y - 5)².",
        "options_json": {
          "A": "4y² - 20y + 25",
          "B": "4y² - 25",
          "C": "4y² - 10y + 25",
          "D": "2y² - 20y + 25"
        },
        "correct_option": "A",
        "explanation_text": "(2y - 5)² = (2y)² - 2(2y)(5) + (-5)² = 4y² - 20y + 25. Pilihan B (4y² - 25) ialah kesilapan lazim mengkuasaduakan setiap sebutan secara berasingan; pilihan C (4y² - 10y + 25) lupa mendarab sebutan tengah dengan 2; pilihan D (2y² - 20y + 25) lupa mengkuasaduakan pekali 2.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(2*y - 5)**2",
          "options": {
            "A": "4*y**2 - 20*y + 25",
            "B": "4*y**2 - 25",
            "C": "4*y**2 - 10*y + 25",
            "D": "2*y**2 - 20*y + 25"
          }
        }
      },
      {
        "id": "t2m_alg_01_q4",
        "syllabus_node_id": "t2_math_alg_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Permudahkan 3(x + 2y) - 2(x - 4y).",
        "options_json": {
          "A": "x - 2y",
          "B": "x + 14y",
          "C": "x + 2y",
          "D": "5x + 14y"
        },
        "correct_option": "B",
        "explanation_text": "Kembangkan dan himpunkan sebutan serupa: 3x + 6y - 2x + 8y = x + 14y. Pilihan A (x - 2y) silap tanda -2(-4y) ditulis sebagai -8y; pilihan C (x + 2y) lupa mendarab -2 dengan -4y; pilihan D (5x + 14y) tersilap menambah 3x + 2x.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "3*(x + 2*y) - 2*(x - 4*y)",
          "options": {
            "A": "x - 2*y",
            "B": "x + 14*y",
            "C": "x + 2*y",
            "D": "5*x + 14*y"
          }
        }
      },
      {
        "id": "t2m_alg_01_q5",
        "syllabus_node_id": "t2_math_alg_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah segi empat tepat mempunyai panjang (3p + 2) cm dan lebar (2p - 1) cm. Nyatakan luasnya dalam cm², dalam sebutan p.",
        "options_json": {
          "A": "6p² - 7p - 2",
          "B": "10p + 2",
          "C": "6p² + p - 2",
          "D": "6p² - 2"
        },
        "correct_option": "C",
        "explanation_text": "Luas = (3p + 2)(2p - 1) = 6p² - 3p + 4p - 2 = 6p² + p - 2. Pilihan A (6p² - 7p - 2) silap tanda pada -3p + 4p; pilihan B (10p + 2) mengira perimeter bukan luas; pilihan D (6p² - 2) mengabaikan sebutan silang.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(3*p + 2)*(2*p - 1)",
          "options": {
            "A": "6*p**2 - 7*p - 2",
            "B": "10*p + 2",
            "C": "6*p**2 + p - 2",
            "D": "6*p**2 - 2"
          }
        }
      },
      {
        "id": "t2m_alg_02_q1",
        "syllabus_node_id": "t2_math_alg_02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Faktorkan sepenuhnya 6xy - 9x².",
        "options_json": {
          "A": "3x(2y - 9x)",
          "B": "3x(2y - 3)",
          "C": "3x(2y + 3x)",
          "D": "3x(2y - 3x)"
        },
        "correct_option": "D",
        "explanation_text": "Faktor sepunya terbesar bagi 6xy dan 9x² ialah 3x, maka 6xy - 9x² = 3x(2y - 3x). Pilihan A (3x(2y - 9x)) lupa membahagi 9 dengan 3; pilihan B (3x(2y - 3)) tertinggal pemboleh ubah x selepas membahagi 9x² dengan 3x; pilihan C (3x(2y + 3x)) tersilap tanda tambah.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "6*x*y - 9*x*x",
          "options": {
            "A": "3*x*(2*y - 9*x)",
            "B": "3*x*(2*y - 3)",
            "C": "3*x*(2*y + 3*x)",
            "D": "3*x*(2*y - 3*x)"
          }
        }
      },
      {
        "id": "t2m_alg_02_q2",
        "syllabus_node_id": "t2_math_alg_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Faktorkan sepenuhnya 4m² - 25.",
        "options_json": {
          "A": "(2m - 5)(2m + 5)",
          "B": "(2m - 5)²",
          "C": "(4m - 5)(4m + 5)",
          "D": "(2m - 25)(2m + 1)"
        },
        "correct_option": "A",
        "explanation_text": "Gunakan identiti beza dua kuasa dua a² - b² = (a - b)(a + b): 4m² - 25 = (2m)² - 5² = (2m - 5)(2m + 5). Pilihan B ((2m - 5)²) terkeliru dengan kuasa dua sempurna; pilihan C lupa mencari punca kuasa dua 4; pilihan D lupa mencari punca kuasa dua 25.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "4*m**2 - 25",
          "options": {
            "A": "(2*m - 5)*(2*m + 5)",
            "B": "(2*m - 5)**2",
            "C": "(4*m - 5)*(4*m + 5)",
            "D": "(2*m - 25)*(2*m + 1)"
          }
        }
      },
      {
        "id": "t2m_alg_02_q3",
        "syllabus_node_id": "t2_math_alg_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Faktorkan sepenuhnya x² - 5x - 14.",
        "options_json": {
          "A": "(x + 7)(x - 2)",
          "B": "(x - 7)(x + 2)",
          "C": "(x - 7)(x - 2)",
          "D": "(x - 14)(x + 1)"
        },
        "correct_option": "B",
        "explanation_text": "Cari dua nombor yang hasil darabnya -14 dan hasil tambahnya -5, iaitu -7 dan +2, maka (x - 7)(x + 2). Pilihan A terbalik tanda menghasilkan +5x; pilihan C menggunakan dua tanda negatif sehingga hasil darabnya +14; pilihan D tidak menyemak jumlah sebutan tengah (-13x).",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "x**2 - 5*x - 14",
          "options": {
            "A": "(x + 7)*(x - 2)",
            "B": "(x - 7)*(x + 2)",
            "C": "(x - 7)*(x - 2)",
            "D": "(x - 14)*(x + 1)"
          }
        }
      },
      {
        "id": "t2m_alg_02_q4",
        "syllabus_node_id": "t2_math_alg_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Faktorkan sepenuhnya 2p² + 7p + 3.",
        "options_json": {
          "A": "(2p + 3)(p + 1)",
          "B": "(2p - 1)(p - 3)",
          "C": "(2p + 1)(p + 3)",
          "D": "(2p + 7)(p + 3)"
        },
        "correct_option": "C",
        "explanation_text": "Dengan pendaraban silang, 2p(3) + 1(p) = 7p dan 1 × 3 = 3, maka faktornya ialah (2p + 1)(p + 3). Pilihan A menukar kedudukan 1 dan 3 sehingga menghasilkan 5p; pilihan B silap tanda negatif; pilihan D memasukkan terus pekali 7 ke dalam faktor.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "2*p**2 + 7*p + 3",
          "options": {
            "A": "(2*p + 3)*(p + 1)",
            "B": "(2*p - 1)*(p - 3)",
            "C": "(2*p + 1)*(p + 3)",
            "D": "(2*p + 7)*(p + 3)"
          }
        }
      },
      {
        "id": "t2m_alg_02_q5",
        "syllabus_node_id": "t2_math_alg_02",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Faktorkan sepenuhnya ab - 3a + 2b - 6.",
        "options_json": {
          "A": "(a - 2)(b - 3)",
          "B": "(a + 2)(b + 3)",
          "C": "(a + 3)(b - 2)",
          "D": "(a + 2)(b - 3)"
        },
        "correct_option": "D",
        "explanation_text": "Kumpulkan sebutan berpasangan: a(b - 3) + 2(b - 3) = (a + 2)(b - 3). Pilihan A tersilap tanda +2 kepada -2; pilihan B silap tanda +3 pada (b - 3); pilihan C menukar kedudukan pemalar 2 dan 3.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "a*b - 3*a + 2*b - 6",
          "options": {
            "A": "(a - 2)*(b - 3)",
            "B": "(a + 2)*(b + 3)",
            "C": "(a + 3)*(b - 2)",
            "D": "(a + 2)*(b - 3)"
          }
        }
      },
      {
        "id": "t2m_alg_03_q1",
        "syllabus_node_id": "t2_math_alg_03",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Permudahkan pecahan algebra (4x + 8) / 4.",
        "options_json": {
          "A": "x + 2",
          "B": "x + 8",
          "C": "4x + 2",
          "D": "x + 4"
        },
        "correct_option": "A",
        "explanation_text": "Faktorkan pengangka terlebih dahulu: 4(x + 2) / 4 = x + 2. Pilihan B (x + 8) memansuhkan 4x dengan 4 secara salah tanpa membahagi 8; pilihan C (4x + 2) hanya membahagi 8 dengan 4; pilihan D (x + 4) tersilap menolak 8 - 4.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(4*x + 8)/4",
          "options": {
            "A": "x + 2",
            "B": "x + 8",
            "C": "4*x + 2",
            "D": "x + 4"
          }
        }
      },
      {
        "id": "t2m_alg_03_q2",
        "syllabus_node_id": "t2_math_alg_03",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Permudahkan (2m / 3) + (m / 6).",
        "options_json": {
          "A": "3m / 9",
          "B": "5m / 6",
          "C": "3m / 6",
          "D": "2m² / 18"
        },
        "correct_option": "B",
        "explanation_text": "Samakan penyebut kepada 6: (4m / 6) + (m / 6) = 5m / 6. Pilihan A (3m / 9) menambah terus pengangka dengan pengangka dan penyebut dengan penyebut; pilihan C (3m / 6) menukar penyebut 3 kepada 6 tetapi lupa mendarab 2m dengan 2; pilihan D mendarab kedua-dua pecahan bukannya menambah.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(2*m)/3 + m/6",
          "options": {
            "A": "(3*m)/9",
            "B": "(5*m)/6",
            "C": "(3*m)/6",
            "D": "(2*m*m)/18"
          }
        }
      },
      {
        "id": "t2m_alg_03_q3",
        "syllabus_node_id": "t2_math_alg_03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Permudahkan pecahan algebra (x² - 9) / (x + 3) dengan keadaan x ≠ -3.",
        "options_json": {
          "A": "x + 3",
          "B": "x - 6",
          "C": "x - 3",
          "D": "x² - 3"
        },
        "correct_option": "C",
        "explanation_text": "Faktorkan pengangka sebagai beza dua kuasa dua: (x - 3)(x + 3) / (x + 3) = x - 3. Pilihan A (x + 3) tersilap tanda selepas pemansuhan; pilihan B (x - 6) membahagi x² dengan x dan menolak 9 - 3; pilihan D (x² - 3) membahagi 9 dengan 3 secara terus tanpa pemfaktoran.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(x**2 - 9)/(x + 3)",
          "options": {
            "A": "x + 3",
            "B": "x - 6",
            "C": "x - 3",
            "D": "x**2 - 3"
          }
        }
      },
      {
        "id": "t2m_alg_03_q4",
        "syllabus_node_id": "t2_math_alg_03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Ungkapkan 3/(2k) - 1/(5k) sebagai satu pecahan tunggal dalam sebutan termudah, dengan k ≠ 0.",
        "options_json": {
          "A": "2/(10k)",
          "B": "2/(-3k)",
          "C": "17/(10k)",
          "D": "13/(10k)"
        },
        "correct_option": "D",
        "explanation_text": "Gandaan sepunya terkecil bagi 2k dan 5k ialah 10k: 15/(10k) - 2/(10k) = 13/(10k). Pilihan A (2/(10k)) lupa menukar pengangka selepas menyamakan penyebut; pilihan B (2/(-3k)) menolak terus pengangka dan penyebut; pilihan C (17/(10k)) tersilap menambah 15 + 2.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "3/(2*k) - 1/(5*k)",
          "options": {
            "A": "2/(10*k)",
            "B": "2/(-3*k)",
            "C": "17/(10*k)",
            "D": "13/(10*k)"
          }
        }
      },
      {
        "id": "t2m_alg_03_q5",
        "syllabus_node_id": "t2_math_alg_03",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Permudahkan [(x² - 4) / (6y)] ÷ [(x + 2) / (3y²)] dengan keadaan x ≠ -2 dan y ≠ 0.",
        "options_json": {
          "A": "y(x - 2) / 2",
          "B": "(x - 2) / (2y)",
          "C": "2y(x - 2)",
          "D": "(x - 2) / (2y³)"
        },
        "correct_option": "A",
        "explanation_text": "Tukar bahagi kepada darab songsangan dan faktorkan x² - 4 = (x - 2)(x + 2): [(x - 2)(x + 2)/(6y)] × [3y²/(x + 2)] = y(x - 2)/2. Pilihan B terbalik kedudukan y selepas pemansuhan 3y²/6y; pilihan C menulis 6 ÷ 3 = 2 di pengangka; pilihan D mendarab terus tanpa menyongsangkan pecahan kedua.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "((x**2 - 4)/(6*y)) / ((x + 2)/(3*y**2))",
          "options": {
            "A": "y*(x - 2)/2",
            "B": "(x - 2)/(2*y)",
            "C": "2*y*(x - 2)",
            "D": "(x - 2)/(2*y**3)"
          }
        }
      },
      {
        "id": "t2m_rumus_01_q1",
        "syllabus_node_id": "t2_math_rumus_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Harga sekilogram epal ialah RM5 dan harga sekilogram oren ialah RM4. Jika Aiman membeli x kg epal dan y kg oren, tulis rumus bagi jumlah harga, J (dalam RM).",
        "options_json": {
          "A": "J = 9(x + y)",
          "B": "J = 5x + 4y",
          "C": "J = 4x + 5y",
          "D": "J = 20xy"
        },
        "correct_option": "B",
        "explanation_text": "Jumlah harga ialah (5 × x) + (4 × y), iaitu J = 5x + 4y. Pilihan A (9(x + y)) menjumlahkan harga per kg kedua-dua buah lalu mendarab dengan jumlah jisim; pilihan C (4x + 5y) tertukar harga epal dan oren; pilihan D (20xy) mendarab semua kuantiti dan harga.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "5*x + 4*y",
          "options": {
            "A": "9*(x + y)",
            "B": "5*x + 4*y",
            "C": "4*x + 5*y",
            "D": "20*x*y"
          }
        }
      },
      {
        "id": "t2m_rumus_01_q2",
        "syllabus_node_id": "t2_math_rumus_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diberi m = 3p - 7. Ungkapkan p sebagai perkara rumus.",
        "options_json": {
          "A": "p = (m - 7) / 3",
          "B": "p = m/3 + 7",
          "C": "p = (m + 7) / 3",
          "D": "p = 3(m + 7)"
        },
        "correct_option": "C",
        "explanation_text": "Tambahkan 7 pada kedua-dua belah untuk mendapat 3p = m + 7, kemudian bahagi dengan 3 menghasilkan p = (m + 7) / 3. Pilihan A lupa menukar tanda -7 kepada +7; pilihan B membahagi m dengan 3 tetapi lupa membahagi 7 dengan 3; pilihan D mendarab 3 bukannya membahagi.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(m + 7)/3",
          "options": {
            "A": "(m - 7)/3",
            "B": "m/3 + 7",
            "C": "(m + 7)/3",
            "D": "3*(m + 7)"
          }
        }
      },
      {
        "id": "t2m_rumus_01_q3",
        "syllabus_node_id": "t2_math_rumus_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diberi y = k - 2x. Ungkapkan x dalam sebutan y dan k.",
        "options_json": {
          "A": "x = (y - k) / 2",
          "B": "x = (k + y) / 2",
          "C": "x = k - y/2",
          "D": "x = (k - y) / 2"
        },
        "correct_option": "D",
        "explanation_text": "Susun semula supaya 2x = k - y, maka x = (k - y) / 2. Pilihan A ((y - k) / 2) tersilap tanda apabila memindahkan -2x; pilihan B ((k + y) / 2) menambah y bukannya menolak y; pilihan C (k - y/2) lupa membahagi k dengan 2.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(k - y)/2",
          "options": {
            "A": "(y - k)/2",
            "B": "(k + y)/2",
            "C": "k - y/2",
            "D": "(k - y)/2"
          }
        }
      },
      {
        "id": "t2m_rumus_01_q4",
        "syllabus_node_id": "t2_math_rumus_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Diberi L = (x² + 5) / 2 dengan keadaan x > 0 dan L > 2.5. Ungkapkan x sebagai perkara rumus.",
        "options_json": {
          "A": "x = √(2L - 5)",
          "B": "x = √(2L + 5)",
          "C": "x = √(L - 5) / 2",
          "D": "x = 2L - 5"
        },
        "correct_option": "A",
        "explanation_text": "Darab kedua-dua belah dengan 2 untuk mendapat x² + 5 = 2L, maka x² = 2L - 5 dan kerana x > 0, x = √(2L - 5). Pilihan B lupa menukar tanda +5 kepada -5; pilihan C tidak mendarab 2 sebelum menolak 5 dan tersilap meletakkan 2 di luar punca; pilihan D lupa mengambil punca kuasa dua.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "Math.sqrt(2*L - 5)",
          "options": {
            "A": "Math.sqrt(2*L - 5)",
            "B": "Math.sqrt(2*L + 5)",
            "C": "Math.sqrt(L - 5)/2",
            "D": "2*L - 5"
          }
        }
      },
      {
        "id": "t2m_rumus_01_q5",
        "syllabus_node_id": "t2_math_rumus_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Diberi p = √((3m - 4) / 2) dengan keadaan p > 0 dan 3m > 4. Ungkapkan m sebagai perkara rumus.",
        "options_json": {
          "A": "m = (2p + 4) / 3",
          "B": "m = (2p² + 4) / 3",
          "C": "m = (2p² - 4) / 3",
          "D": "m = (p² + 4) / 6"
        },
        "correct_option": "B",
        "explanation_text": "Kuasaduakan kedua-dua belah: p² = (3m - 4) / 2, kemudian 2p² = 3m - 4 dan m = (2p² + 4) / 3. Pilihan A lupa mengkuasaduakan p apabila membuang tanda punca; pilihan C lupa menukar tanda -4 kepada +4; pilihan D membahagi dengan 2 bukannya mendarab.",
        "check": {
          "type": "js",
          "mode": "equiv",
          "target": "(2*p**2 + 4)/3",
          "options": {
            "A": "(2*p + 4)/3",
            "B": "(2*p**2 + 4)/3",
            "C": "(2*p**2 - 4)/3",
            "D": "(p**2 + 4)/6"
          }
        }
      },
      {
        "id": "t2m_rumus_02_q1",
        "syllabus_node_id": "t2_math_rumus_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diberi v = u + at. Hitung nilai v apabila u = 15, a = -2 dan t = 4.",
        "options_json": {
          "A": "23",
          "B": "52",
          "C": "7",
          "D": "9"
        },
        "correct_option": "C",
        "explanation_text": "Gantikan nilai: v = 15 + (-2)(4) = 15 - 8 = 7. Pilihan A (23) mengabaikan tanda negatif pada a = -2; pilihan B (52) melanggar tertib operasi dengan mengira (15 - 2) × 4; pilihan D (9) hanya menolak 15 - 2 - 4 tanpa mendarab.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const u=15, a=-2, t=4; return u + a*t;",
          "ans": "7"
        }
      },
      {
        "id": "t2m_rumus_02_q2",
        "syllabus_node_id": "t2_math_rumus_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diberi rumus p = 2q² - 3r. Cari nilai p apabila q = -3 dan r = 5.",
        "options_json": {
          "A": "-33",
          "B": "21",
          "C": "33",
          "D": "3"
        },
        "correct_option": "D",
        "explanation_text": "Hitung p = 2(-3)² - 3(5) = 2(9) - 15 = 18 - 15 = 3. Pilihan A (-33) menganggap (-3)² = -9; pilihan B (21) mengkuasaduakan 2q menjadi (2 × -3)² = 36 sebelum menolak 15; pilihan C (33) silap tanda -3(5) menjadi +15.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const q=-3, r=5; return 2*q*q - 3*r;",
          "ans": "3"
        }
      },
      {
        "id": "t2m_rumus_02_q3",
        "syllabus_node_id": "t2_math_rumus_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Diberi S = (n / 2)(a + b). Jika S = 54, n = 6 dan a = 7, cari nilai b.",
        "options_json": {
          "A": "11",
          "B": "2",
          "C": "25",
          "D": "45"
        },
        "correct_option": "A",
        "explanation_text": "Gantikan nilai ke dalam rumus: 54 = (6 / 2)(7 + b) = 3(7 + b), jadi 7 + b = 18 dan b = 11. Pilihan B (2) lupa membahagi n dengan 2 sebelum membahagi 54 dengan 6; pilihan C (25) tersilap menambah 18 + 7; pilihan D (45) mengira 54 - 3 - 6 tanpa mengembangkan kurungan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const S=54, n=6, a=7; return (2*S)/n - a;",
          "ans": "11"
        }
      },
      {
        "id": "t2m_rumus_02_q4",
        "syllabus_node_id": "t2_math_rumus_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Isi padu sebuah silinder diberi oleh V = πr²h. Dengan menggunakan π = 22/7, cari tinggi h (dalam cm) jika V = 616 cm³ dan r = 7 cm.",
        "options_json": {
          "A": "28",
          "B": "4",
          "C": "8",
          "D": "2"
        },
        "correct_option": "B",
        "explanation_text": "Gantikan nilai: 616 = (22/7)(7²)(h) = 154h, maka h = 616 / 154 = 4 cm. Pilihan A (28) lupa mengkuasaduakan jejari r = 7; pilihan C (8) terkeliru dengan faktor 1/2 dalam pengiraan; pilihan D (2) tersilap menggunakan 2πr² = 308 bukannya πr².",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const V=616, r=7; return V / ((22/7)*r*r);",
          "ans": "4"
        }
      },
      {
        "id": "t2m_rumus_02_q5",
        "syllabus_node_id": "t2_math_rumus_02",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Diberi W = (3x + y) / (x - 2) dengan keadaan x ≠ 2. Jika W = 5 dan y = 4, tentukan nilai x.",
        "options_json": {
          "A": "2",
          "B": "-3",
          "C": "7",
          "D": "3"
        },
        "correct_option": "C",
        "explanation_text": "Gantikan W = 5 dan y = 4: 5 = (3x + 4) / (x - 2), jadi 5(x - 2) = 3x + 4 -> 5x - 10 = 3x + 4 -> 2x = 14 -> x = 7. Pilihan A (2) lupa mendarab 5 dengan -2 (yang juga menyalahi syarat x ≠ 2); pilihan B (-3) silap tanda 4 - 10 = -6; pilihan D (3) tersilap mengira 10 - 4 = 6.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const W=5, y=4; return (y + 2*W) / (W - 3);",
          "ans": "7"
        }
      }
    ]
  };
});
