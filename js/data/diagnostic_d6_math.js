/**
 * Generated from js/data/diagnostic_d6_math.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.d6 = App.DiagnosticBanks.d6 || {};
    App.DiagnosticBanks.d6.math = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "d6_math_nom_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "nombor_operasi",
        "topic_name": "Matematik • Bab 1: Nombor Bulat dan Operasi",
        "subtopic_name": "Membaca, Menulis, Pola Nombor hingga 10 Juta & Nombor Perdana/Gubahan",
        "prerequisite_node_id": null,
        "expected_time_ms": 30000,
        "bloom_level": "Remember"
      },
      {
        "id": "d6_math_nom_02",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "nombor_operasi",
        "topic_name": "Matematik • Bab 1: Nombor Bulat dan Operasi",
        "subtopic_name": "Pecahan/Perpuluhan Juta, Operasi Bergabung & Nilai Anu",
        "prerequisite_node_id": "d6_math_nom_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_math_pec_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "pecahan_peratus",
        "topic_name": "Matematik • Bab 2: Pecahan, Perpuluhan dan Peratus",
        "subtopic_name": "Bahagi Pecahan serta Darab & Bahagi Perpuluhan",
        "prerequisite_node_id": "d6_math_nom_02",
        "expected_time_ms": 40000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_math_pec_02",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "pecahan_peratus",
        "topic_name": "Matematik • Bab 2: Pecahan, Perpuluhan dan Peratus",
        "subtopic_name": "Penukaran, Nilai & Operasi Peratus (termasuk melebihi 100%)",
        "prerequisite_node_id": "d6_math_pec_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_math_wang_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "wang",
        "topic_name": "Matematik • Bab 3: Wang",
        "subtopic_name": "Harga Kos, Harga Jual, Untung, Rugi, Diskaun, Rebat & Faedah",
        "prerequisite_node_id": "d6_math_pec_02",
        "expected_time_ms": 50000,
        "bloom_level": "Analyze"
      },
      {
        "id": "d6_math_masa_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "masa_waktu",
        "topic_name": "Matematik • Bab 4: Masa dan Waktu",
        "subtopic_name": "Zon Masa & Perbezaan Masa Antara Bandar Dunia",
        "prerequisite_node_id": "d6_math_nom_01",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_math_ukur_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "ukuran_sukatan",
        "topic_name": "Matematik • Bab 5: Ukuran dan Sukatan",
        "subtopic_name": "Ukuran Panjang, Jisim & Isi Padu Cecair (Pecahan/Perpuluhan)",
        "prerequisite_node_id": "d6_math_pec_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_math_ruang_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "ruang",
        "topic_name": "Matematik • Bab 6: Ruang",
        "subtopic_name": "Poligon Sekata, Sudut Pedalaman & Ciri Bulatan",
        "prerequisite_node_id": "d6_math_ukur_01",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      },
      {
        "id": "d6_math_koor_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "koordinat_nisbah",
        "topic_name": "Matematik • Bab 7: Koordinat, Nisbah dan Kadaran",
        "subtopic_name": "Jarak Mengufuk/Mencancang, Nisbah & Kadaran",
        "prerequisite_node_id": "d6_math_pec_01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_math_data_01",
        "subject": "math",
        "grade_level": "d6",
        "chapter_id": "data_kebolehjadian",
        "topic_name": "Matematik • Bab 8: Pengurusan Data dan Kebolehjadian",
        "subtopic_name": "Mentafsir Carta Pai & Kebolehjadian Peristiwa",
        "prerequisite_node_id": "d6_math_pec_02",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "d6m_nom_01_q1",
        "syllabus_node_id": "d6_math_nom_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Tulis 'empat juta lima puluh dua ribu tiga ratus sembilan' dalam angka.",
        "options_json": {
          "A": "4 520 309",
          "B": "4 052 309",
          "C": "452 309",
          "D": "4 052 390"
        },
        "correct_option": "B",
        "explanation_text": "Cerakinkan mengikut nilai tempat: 4 000 000 + 52 000 + 300 + 9 = 4 052 309 (nilai tempat ratus ribu dan puluh ialah 0). Pilihan A keliru antara puluh ribu dengan ratus ribu; pilihan C mengabaikan digit sifar pemegang nilai tempat ratus ribu; pilihan D tersilap meletakkan digit 9 pada nilai tempat puluh.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const n = 4000000 + 52000 + 300 + 9; return String(n).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');",
          "ans": "4 052 309"
        }
      },
      {
        "id": "d6m_nom_01_q2",
        "syllabus_node_id": "d6_math_nom_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara nombor berikut, yang manakah nombor perdana?",
        "options_json": {
          "A": "1",
          "B": "51",
          "C": "91",
          "D": "73"
        },
        "correct_option": "D",
        "explanation_text": "Nombor perdana ialah nombor lebih daripada 1 yang hanya boleh dibahagi tepat dengan 1 dan dirinya sendiri. Nombor 73 ialah nombor perdana. Pilihan A salah kerana 1 bukan nombor perdana dan bukan nombor gubahan; pilihan B (51 = 3 × 17) dan pilihan C (91 = 7 × 13) ialah nombor gubahan yang sering disalah anggap sebagai nombor perdana kerana berbentuk ganjil.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }; return String([1, 51, 91, 73].find(isPrime));",
          "ans": "73"
        }
      },
      {
        "id": "d6m_nom_01_q3",
        "syllabus_node_id": "d6_math_nom_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Perhatikan pola nombor tertib menurun yang berikut: 6 480 000, 6 230 000, 5 980 000, P, 5 480 000. Apakah nilai P?",
        "options_json": {
          "A": "5 730 000",
          "B": "6 230 000",
          "C": "5 780 000",
          "D": "5 630 000"
        },
        "correct_option": "A",
        "explanation_text": "Beza tetap antara sebutan berturutan ialah 6 480 000 − 6 230 000 = 250 000 (tertib menurun). Maka P = 5 980 000 − 250 000 = 5 730 000 (semak: 5 730 000 − 250 000 = 5 480 000). Pilihan B salah kerana menambah 250 000 bukannya menolak; pilihan C dan D tersilap menentukan beza tetap sebagai 200 000 atau 350 000.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const d = 6480000 - 6230000; const p = 5980000 - d; return (p - d === 5480000) ? String(p).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') : '';",
          "ans": "5 730 000"
        }
      },
      {
        "id": "d6m_nom_01_q4",
        "syllabus_node_id": "d6_math_nom_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Berapakah bilangan nombor gubahan dari 20 hingga 30 (termasuk 20 dan 30)?",
        "options_json": {
          "A": "7",
          "B": "8",
          "C": "9",
          "D": "10"
        },
        "correct_option": "C",
        "explanation_text": "Nombor dari 20 hingga 30 ialah 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 dan 30 (11 nombor). Hanya 23 dan 29 ialah nombor perdana, maka terdapat 9 nombor gubahan (20, 21, 22, 24, 25, 26, 27, 28, 30). Pilihan A tersilap menganggap 21 (3 × 7) dan 27 (3 × 9) sebagai nombor perdana; pilihan B tertinggal satu nombor sempadan; pilihan D hanya mengecualikan satu nombor perdana.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const isComp = n => { if (n < 4) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return true; return false; }; let c = 0; for (let n = 20; n <= 30; n++) if (isComp(n)) c++; return String(c);",
          "ans": "9"
        }
      },
      {
        "id": "d6m_nom_01_q5",
        "syllabus_node_id": "d6_math_nom_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Satu pola nombor tertib menaik dibentuk dengan mendarab sebutan sebelumnya dengan 2: 125 000, 250 000, X, 1 000 000, Y, 4 000 000. Hitung nilai Y − X.",
        "options_json": {
          "A": "1 250 000",
          "B": "1 500 000",
          "C": "2 500 000",
          "D": "1 750 000"
        },
        "correct_option": "B",
        "explanation_text": "Dengan mendarab setiap sebutan dengan 2: X = 250 000 × 2 = 500 000 dan Y = 1 000 000 × 2 = 2 000 000. Oleh itu, Y − X = 2 000 000 − 500 000 = 1 500 000. Pilihan A menganggap beza adalah tetap bukannya darab 2; pilihan C menambah Y + X (2 500 000) bukannya menolak; pilihan D tersilap menggunakan 250 000 sebagai nilai X.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const x = 250000 * 2; const y = 1000000 * 2; const diff = y - x; return (x * 2 === 1000000 && y * 2 === 4000000) ? String(diff).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') : '';",
          "ans": "1 500 000"
        }
      },
      {
        "id": "d6m_nom_02_q1",
        "syllabus_node_id": "d6_math_nom_02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Tukarkan 3/8 juta kepada nombor bulat.",
        "options_json": {
          "A": "38 000",
          "B": "380 000",
          "C": "375 000",
          "D": "37 500"
        },
        "correct_option": "C",
        "explanation_text": "Untuk menukar pecahan juta kepada nombor bulat, darabkan dengan 1 000 000: 3/8 × 1 000 000 = 3 × 125 000 = 375 000. Pilihan D tersilap mendarab dengan 100 000 bukannya 1 000 000; pilihan A dan B pula menggabungkan terus digit pengangka 3 dan penyebut 8 tanpa membahagi dengan 8.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const n = (3 / 8) * 1000000; return String(n).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');",
          "ans": "375 000"
        }
      },
      {
        "id": "d6m_nom_02_q2",
        "syllabus_node_id": "d6_math_nom_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Nyatakan 2 065 000 dalam perpuluhan juta.",
        "options_json": {
          "A": "2.065 juta",
          "B": "2.65 juta",
          "C": "20.65 juta",
          "D": "0.265 juta"
        },
        "correct_option": "A",
        "explanation_text": "Bahagikan nombor bulat dengan 1 000 000 dengan menggerakkan titik perpuluhan 6 tempat ke kiri: 2 065 000 ÷ 1 000 000 = 2.065 juta. Pilihan B salah kerana menggugurkan digit sifar selepas titik perpuluhan; pilihan C hanya membahagi dengan 100 000; pilihan D menggerakkan titik perpuluhan terlalu jauh ke kiri.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (2065000 / 1000000) + ' juta';",
          "ans": "2.065 juta"
        }
      },
      {
        "id": "d6m_nom_02_q3",
        "syllabus_node_id": "d6_math_nom_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Hitung nilai bagi 1.2 juta + 3/4 juta × 2 dalam nombor bulat.",
        "options_json": {
          "A": "3 900 000",
          "B": "1 950 000",
          "C": "2 600 000",
          "D": "2 700 000"
        },
        "correct_option": "D",
        "explanation_text": "Mengikut tertib operasi, selesaikan operasi darab dahulu: 3/4 juta = 750 000, maka 750 000 × 2 = 1 500 000. Kemudian tambah 1.2 juta (1 200 000): 1 200 000 + 1 500 000 = 2 700 000. Pilihan A mengira dari kiri ke kanan tanpa mematuhi tertib operasi ((1.2 + 0.75) × 2); pilihan B terlupa mendarab 2; pilihan C tersilap menukar 3/4 juta sebagai 700 000.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const n = 1.2 * 1000000 + (3 / 4) * 1000000 * 2; return String(n).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');",
          "ans": "2 700 000"
        }
      },
      {
        "id": "d6m_nom_02_q4",
        "syllabus_node_id": "d6_math_nom_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Cari nilai m dalam ayat matematik: m − 0.45 juta = 1 350 000.",
        "options_json": {
          "A": "900 000",
          "B": "1 800 000",
          "C": "1 395 000",
          "D": "1 850 000"
        },
        "correct_option": "B",
        "explanation_text": "Tukarkan 0.45 juta = 450 000. Untuk mencari anu m, gunakan operasi songsang bagi tolak iaitu tambah: m = 1 350 000 + 450 000 = 1 800 000. Pilihan A menggunakan operasi tolak (1 350 000 − 450 000) bukannya operasi songsang; pilihan C tersilap menukar 0.45 juta kepada 45 000; pilihan D silap mengumpul semula nilai tempat puluh ribu.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const m = 1350000 + 0.45 * 1000000; return String(m).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');",
          "ans": "1 800 000"
        }
      },
      {
        "id": "d6m_nom_02_q5",
        "syllabus_node_id": "d6_math_nom_02",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kilang mencetak 2 1/5 juta naskhah risalah. Sebanyak k naskhah rosak dan bakinya diagihkan sama rata kepada 8 buah daerah supaya setiap daerah menerima 250 000 naskhah. Berapakah nilai k?",
        "options_json": {
          "A": "150 000",
          "B": "450 000",
          "C": "200 000",
          "D": "4 200 000"
        },
        "correct_option": "C",
        "explanation_text": "Jumlah risalah dicetak ialah 2 1/5 juta = 2 200 000. Jumlah risalah yang diagihkan ialah 8 × 250 000 = 2 000 000. Maka persamaan ialah 2 200 000 − k = 2 000 000, jadi k = 2 200 000 − 2 000 000 = 200 000. Pilihan A tersilap menukar 2 1/5 juta kepada 2 150 000; pilihan D salah kerana menambah 2 200 000 + 2 000 000 akibat keliru kedudukan anu dalam penolakan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const total = (2 + 1 / 5) * 1000000; const good = 8 * 250000; const k = total - good; return String(k).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');",
          "ans": "200 000"
        }
      },
      {
        "id": "d6m_pec_01_q1",
        "syllabus_node_id": "d6_math_pec_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Hitung hasil bagi 3/5 ÷ 1/2 dalam bentuk nombor bercampur.",
        "options_json": {
          "A": "3/10",
          "B": "5/6",
          "C": "1 2/5",
          "D": "1 1/5"
        },
        "correct_option": "D",
        "explanation_text": "Tukar operasi bahagi kepada darab dan songsangkan pecahan pembahagi (1/2 menjadi 2/1): 3/5 × 2/1 = 6/5 = 1 1/5. Pilihan A terus mendarab 3/5 × 1/2 tanpa menyongsangkan pembahagi; pilihan B menyongsangkan pecahan pertama (5/3 × 1/2); pilihan C tersilap menulis baki 6 ÷ 5.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const num = 3 * 2, den = 5 * 1; return Math.floor(num / den) + ' ' + (num % den) + '/' + den;",
          "ans": "1 1/5"
        }
      },
      {
        "id": "d6m_pec_01_q2",
        "syllabus_node_id": "d6_math_pec_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Hitung 0.4 × 0.15.",
        "options_json": {
          "A": "0.6",
          "B": "0.06",
          "C": "6.0",
          "D": "0.006"
        },
        "correct_option": "B",
        "explanation_text": "Darabkan seperti nombor bulat: 4 × 15 = 60. Jumlah bilangan tempat perpuluhan ialah 1 + 2 = 3 tempat perpuluhan, maka 0.060 = 0.06. Pilihan A dan C salah kerana tidak menjumlahkan bilangan tempat perpuluhan daripada kedua-dua faktor; pilihan D terlebih satu digit sifar selepas titik perpuluhan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return String(Number((0.4 * 0.15).toFixed(4)));",
          "ans": "0.06"
        }
      },
      {
        "id": "d6m_pec_01_q3",
        "syllabus_node_id": "d6_math_pec_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah hasil bahagi 3.6 ÷ 0.4?",
        "options_json": {
          "A": "0.9",
          "B": "0.09",
          "C": "9",
          "D": "90"
        },
        "correct_option": "C",
        "explanation_text": "Jadikan pembahagi 0.4 sebagai nombor bulat dengan mendarab kedua-dua nombor dengan 10 (gerakkan titik perpuluhan 1 tempat ke kanan): 36 ÷ 4 = 9. Pilihan A lupa menggerakkan titik perpuluhan pada 3.6; pilihan B menggerakkan titik ke arah kiri; pilihan D menggerakkan titik perpuluhan 3.6 sebanyak dua tempat.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return String(Math.round((3.6 / 0.4) * 1e9) / 1e9);",
          "ans": "9"
        }
      },
      {
        "id": "d6m_pec_01_q4",
        "syllabus_node_id": "d6_math_pec_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebatang reben sepanjang 2 1/4 m dipotong kepada beberapa bahagian sama panjang iaitu 3/8 m setiap satu. Berapakah bilangan potongan reben yang diperoleh?",
        "options_json": {
          "A": "6",
          "B": "3",
          "C": "8",
          "D": "9"
        },
        "correct_option": "A",
        "explanation_text": "Tukar nombor bercampur kepada pecahan tak wajar terlebih dahulu: 2 1/4 = 9/4. Kemudian bahagi: 9/4 ÷ 3/8 = 9/4 × 8/3 = 72/12 = 6 potongan. Pilihan B berpunca daripada cuba membahagi bahagian nombor bulat dan pecahan secara berasingan; pilihan C silap menukar 2 1/4 kepada pecahan tak wajar; pilihan D terlupa membahagi dengan pengangka 3.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return String((9 / 4) / (3 / 8));",
          "ans": "6"
        }
      },
      {
        "id": "d6m_pec_01_q5",
        "syllabus_node_id": "d6_math_pec_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Puan Aini membeli 3.75 kg tepung dan membungkusnya ke dalam peket kecil berjisim 0.25 kg setiap satu. Jika setiap peket dijual pada harga RM1.80, berapakah jumlah jualan kesemua peket itu?",
        "options_json": {
          "A": "RM2.70",
          "B": "RM18.00",
          "C": "RM25.20",
          "D": "RM27.00"
        },
        "correct_option": "D",
        "explanation_text": "Bilangan peket = 3.75 ÷ 0.25 = 375 ÷ 25 = 15 peket. Jumlah jualan = 15 × RM1.80 = RM27.00. Pilihan A salah meletakkan titik perpuluhan semasa membahagi 3.75 ÷ 0.25 sebagai 1.5 peket; pilihan B tersilap mengira 10 peket; pilihan C tersilap mengira 14 peket sahaja.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const pkts = Math.round((3.75 / 0.25) * 1e6) / 1e6; return 'RM' + (pkts * 1.80).toFixed(2);",
          "ans": "RM27.00"
        }
      },
      {
        "id": "d6m_pec_02_q1",
        "syllabus_node_id": "d6_math_pec_02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Tukarkan 1.45 kepada peratus.",
        "options_json": {
          "A": "145%",
          "B": "14.5%",
          "C": "1.45%",
          "D": "1 450%"
        },
        "correct_option": "A",
        "explanation_text": "Untuk menukar perpuluhan kepada peratus, darabkan dengan 100%: 1.45 × 100% = 145%. Pilihan B tersilap mendarab dengan 10 bukannya 100; pilihan C meletakkan simbol % tanpa mendarab 100; pilihan D tersilap mendarab dengan 1 000.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round(1.45 * 100) + '%';",
          "ans": "145%"
        }
      },
      {
        "id": "d6m_pec_02_q2",
        "syllabus_node_id": "d6_math_pec_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Hitung 82% − 25% − 14%.",
        "options_json": {
          "A": "71%",
          "B": "53%",
          "C": "43%",
          "D": "39%"
        },
        "correct_option": "C",
        "explanation_text": "Selesaikan penolakan berturutan dari kiri ke kanan: 82% − 25% = 57%, kemudian 57% − 14% = 43%. Pilihan A berpunca daripada salah meletakkan kurungan iaitu 82% − (25% − 14%) = 82% − 11% = 71%; pilihan B dan D hasil ralat pengumpulan semula semasa menolak.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (82 - 25 - 14) + '%';",
          "ans": "43%"
        }
      },
      {
        "id": "d6m_pec_02_q3",
        "syllabus_node_id": "d6_math_pec_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Hitung 135% daripada 60 buah buku.",
        "options_json": {
          "A": "61.35 buah buku",
          "B": "81 buah buku",
          "C": "21 buah buku",
          "D": "75 buah buku"
        },
        "correct_option": "B",
        "explanation_text": "135% daripada 60 = 135/100 × 60 = 1.35 × 60 = 81 buah buku. Pilihan A menambah terus perpuluhan 1.35 kepada kuantiti asal 60 bukannya mendarab; pilihan C hanya mengira lebihan 35% daripada 60 (21 buah) tanpa memasukkan 100% asal; pilihan D mengira penambahan 15 secara rambang.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round((135 / 100) * 60) + ' buah buku';",
          "ans": "81 buah buku"
        }
      },
      {
        "id": "d6m_pec_02_q4",
        "syllabus_node_id": "d6_math_pec_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sasaran kutipan tin aluminium Kelas 6 Bestari ialah 80 biji tin. Pada akhir minggu, mereka berjaya mengumpul 104 biji tin. Berapakah peratusan kutipan itu berbanding sasaran asal?",
        "options_json": {
          "A": "77%",
          "B": "124%",
          "C": "30%",
          "D": "130%"
        },
        "correct_option": "D",
        "explanation_text": "Peratusan kutipan = (104 ÷ 80) × 100% = 1.3 × 100% = 130%. Pilihan A menyongsangkan nisbah (80 ÷ 104 × 100% ≈ 77%); pilihan B menambah terus beza 24 biji tin kepada 100%; pilihan C hanya menyatakan peratusan lebihan (30%), bukan peratusan keseluruhan kutipan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round((104 / 80) * 100) + '%';",
          "ans": "130%"
        }
      },
      {
        "id": "d6m_pec_02_q5",
        "syllabus_node_id": "d6_math_pec_02",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah tangki mengandungi 120 ℓ air. Sebanyak 3/8 daripada air itu digunakan pada waktu pagi, manakala 25% daripada baki air itu digunakan pada waktu petang. Berapakah isi padu air yang masih tinggal di dalam tangki itu?",
        "options_json": {
          "A": "56.25 ℓ",
          "B": "45 ℓ",
          "C": "18.75 ℓ",
          "D": "75 ℓ"
        },
        "correct_option": "A",
        "explanation_text": "Air digunakan waktu pagi = 3/8 × 120 = 45 ℓ, maka baki ialah 120 − 45 = 75 ℓ. Air digunakan waktu petang = 25% × 75 = 18.75 ℓ. Baki akhir = 75 − 18.75 = 56.25 ℓ. Pilihan B mengira 25% daripada 120 ℓ asal (30 ℓ) bukannya daripada baki 75 ℓ; pilihan C ialah air yang digunakan petang; pilihan D terlupa menolak penggunaan petang.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const rem1 = 120 - (3 / 8) * 120; const rem2 = rem1 * (1 - 0.25); return rem2.toFixed(2) + ' ℓ';",
          "ans": "56.25 ℓ"
        }
      },
      {
        "id": "d6m_wang_01_q1",
        "syllabus_node_id": "d6_math_wang_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Encik Hafiz menjual sebuah basikal pada harga RM480.00 dan memperoleh keuntungan sebanyak RM95.00. Berapakah harga kos basikal itu?",
        "options_json": {
          "A": "RM575.00",
          "B": "RM385.00",
          "C": "RM395.00",
          "D": "RM415.00"
        },
        "correct_option": "B",
        "explanation_text": "Harga kos = Harga jual − Untung = RM480.00 − RM95.00 = RM385.00. Pilihan A salah kerana menambah untung kepada harga jual (RM480.00 + RM95.00); pilihan C dan D berpunca daripada kesilapan mengumpul semula semasa penolakan nilai puluh dan ratus.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return 'RM' + (480 - 95).toFixed(2);",
          "ans": "RM385.00"
        }
      },
      {
        "id": "d6m_wang_01_q2",
        "syllabus_node_id": "d6_math_wang_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Harga asal sepasang kasut sukan ialah RM160.00. Kedai memberikan diskaun sebanyak 20%. Berapakah harga kasut itu selepas diskaun?",
        "options_json": {
          "A": "RM32.00",
          "B": "RM140.00",
          "C": "RM192.00",
          "D": "RM128.00"
        },
        "correct_option": "D",
        "explanation_text": "Nilai diskaun = 20% × RM160.00 = RM32.00. Harga selepas diskaun = RM160.00 − RM32.00 = RM128.00 (atau 80% × RM160.00). Pilihan A hanya menyatakan nilai potongan diskaun, bukan harga bayaran; pilihan B menolak RM20 terus tanpa mengira peratus; pilihan C menambah diskaun kepada harga asal.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return 'RM' + (160 * (1 - 0.20)).toFixed(2);",
          "ans": "RM128.00"
        }
      },
      {
        "id": "d6m_wang_01_q3",
        "syllabus_node_id": "d6_math_wang_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Puan Nora menyimpan RM5 000.00 di dalam bank dengan kadar faedah 4% setahun. Berapakah jumlah wang simpanannya selepas setahun?",
        "options_json": {
          "A": "RM200.00",
          "B": "RM7 000.00",
          "C": "RM5 200.00",
          "D": "RM5 020.00"
        },
        "correct_option": "C",
        "explanation_text": "Faedah setahun = 4/100 × RM5 000.00 = RM200.00. Jumlah simpanan keseluruhan selepas setahun = RM5 000.00 + RM200.00 = RM5 200.00. Pilihan A hanya mengemukakan nilai faedah semata-mata; pilihan B tersilap menukar 4% kepada 0.4 bukannya 0.04; pilihan D tersilap membahagi dengan 1 000 bukannya 100.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const tot = 5000 + 5000 * 0.04; const [w, d] = tot.toFixed(2).split('.'); return 'RM' + w.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + '.' + d;",
          "ans": "RM5 200.00"
        }
      },
      {
        "id": "d6m_wang_01_q4",
        "syllabus_node_id": "d6_math_wang_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Jumlah harga makanan dan minuman sebuah keluarga di restoran ialah RM145.00 sebelum cukai. Jika restoran mengenakan cukai perkhidmatan sebanyak 6%, berapakah jumlah keseluruhan yang perlu dibayar?",
        "options_json": {
          "A": "RM153.70",
          "B": "RM136.30",
          "C": "RM151.00",
          "D": "RM8.70"
        },
        "correct_option": "A",
        "explanation_text": "Cukai perkhidmatan = 6/100 × RM145.00 = RM8.70. Jumlah yang perlu dibayar = RM145.00 + RM8.70 = RM153.70. Pilihan B salah kerana menolak cukai perkhidmatan daripada bil seperti diskaun; pilihan C menambah RM6.00 terus tanpa mengira 6%; pilihan D hanya menyatakan nilai cukai sahaja.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return 'RM' + (145 * 1.06).toFixed(2);",
          "ans": "RM153.70"
        }
      },
      {
        "id": "d6m_wang_01_q5",
        "syllabus_node_id": "d6_math_wang_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah meja belajar berharga RM320.00 ditawarkan diskaun 15%. Selepas potongan diskaun itu, Encik Zaki menebus rebat tunai RM25.00 dan membayar dengan wang RM300.00. Berapakah baki wangnya?",
        "options_json": {
          "A": "RM49.25",
          "B": "RM53.00",
          "C": "RM28.00",
          "D": "RM247.00"
        },
        "correct_option": "B",
        "explanation_text": "Harga selepas diskaun 15% = 85% × RM320.00 = RM272.00. Selepas rebat tunai RM25.00, bayaran akhir = RM272.00 − RM25.00 = RM247.00. Baki wang = RM300.00 − RM247.00 = RM53.00. Pilihan A menolak rebat RM25.00 dahulu sebelum mengira diskaun 15%; pilihan C terlupa menolak rebat RM25.00; pilihan D menyatakan jumlah bayaran bukannya baki wang.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const disc = 320 * (1 - 0.15); const pay = disc - 25; return 'RM' + (300 - pay).toFixed(2);",
          "ans": "RM53.00"
        }
      },
      {
        "id": "d6m_masa_01_q1",
        "syllabus_node_id": "d6_math_masa_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kuala Lumpur berada di zon masa UTC+8 manakala New York berada di zon masa UTC−5. Berapakah perbezaan masa antara Kuala Lumpur dengan New York?",
        "options_json": {
          "A": "3 jam",
          "B": "11 jam",
          "C": "13 jam",
          "D": "14 jam"
        },
        "correct_option": "C",
        "explanation_text": "Kuala Lumpur 8 jam mendahului UTC+0 manakala New York 5 jam di belakang UTC+0, jadi perbezaan masa ialah 8 + 5 = 13 jam (iaitu 8 − (−5)). Pilihan A menolak 8 − 5 secara terus tanpa mengambil kira tanda negatif UTC−5; pilihan B dan D tersilap mengira jarak zon masa merentasi Greenwich.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (8 - (-5)) + ' jam';",
          "ans": "13 jam"
        }
      },
      {
        "id": "d6m_masa_01_q2",
        "syllabus_node_id": "d6_math_masa_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sydney (UTC+10) terletak di sebelah timur Kuala Lumpur (UTC+8). Jika waktu di Kuala Lumpur ialah 3:15 p.m. pada hari Rabu, pukul berapakah waktu di Sydney?",
        "options_json": {
          "A": "5:15 p.m.",
          "B": "1:15 p.m.",
          "C": "6:15 p.m.",
          "D": "5:15 a.m."
        },
        "correct_option": "A",
        "explanation_text": "Beza zon masa = 10 − 8 = 2 jam. Oleh sebab Sydney terletak lebih ke timur (mendahului waktu), tambahkan 2 jam kepada waktu Kuala Lumpur: 3:15 p.m. + 2 jam = 5:15 p.m. Pilihan B tersilap menolak 2 jam bagi bandar di sebelah timur; pilihan C tersilap mengira beza sebagai 3 jam; pilihan D menukar p.m. kepada a.m. tanpa melintasi tengah malam.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const h = 15 + (10 - 8), m = 15; return (h - 12) + ':' + String(m).padStart(2, '0') + ' p.m.';",
          "ans": "5:15 p.m."
        }
      },
      {
        "id": "d6m_masa_01_q3",
        "syllabus_node_id": "d6_math_masa_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kuala Lumpur berada di zon masa UTC+8 manakala New Delhi berada di zon masa UTC+5:30. Jika waktu di Kuala Lumpur ialah jam 1600, nyatakan waktu di New Delhi dalam sistem 24 jam.",
        "options_json": {
          "A": "Jam 1300",
          "B": "Jam 1330",
          "C": "Jam 1830",
          "D": "Jam 1430"
        },
        "correct_option": "B",
        "explanation_text": "Beza masa antara UTC+8 dengan UTC+5:30 ialah 2 jam 30 minit, dengan New Delhi berada di sebelah barat (lewat). Maka Jam 1600 − 2 jam 30 minit = Jam 1330. Pilihan A menganggap separuh jam sebagai satu jam penuh (tolak 3 jam); pilihan C menambah 2 jam 30 minit ke arah yang salah; pilihan D tersilap mengira penolakan minit.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const klMin = 16 * 60; const diffMin = (8 * 60) - (5 * 60 + 30); const ndMin = klMin - diffMin; return 'Jam ' + String(Math.floor(ndMin / 60)).padStart(2, '0') + String(ndMin % 60).padStart(2, '0');",
          "ans": "Jam 1330"
        }
      },
      {
        "id": "d6m_masa_01_q4",
        "syllabus_node_id": "d6_math_masa_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Kuala Lumpur berada di zon masa UTC+8 dan London berada di zon masa UTC+0. Jika waktu di Kuala Lumpur ialah 2:30 a.m. pada 1 Mei, nyatakan waktu dan tarikh di London.",
        "options_json": {
          "A": "6:30 p.m., 1 Mei",
          "B": "6:30 p.m., 31 April",
          "C": "10:30 a.m., 1 Mei",
          "D": "6:30 p.m., 30 April"
        },
        "correct_option": "D",
        "explanation_text": "London lewat 8 jam daripada Kuala Lumpur. Undur 2 jam 30 minit daripada 2:30 a.m., 1 Mei membawa kepada tengah malam (12:00 a.m.), kemudian undur lagi 5 jam 30 minit ke hari sebelumnya menjadi 6:30 p.m. pada 30 April (April ada 30 hari). Pilihan A mengekalkan tarikh asal walaupun melintasi tengah malam; pilihan B salah menganggap April mempunyai 31 hari; pilihan C menambah 8 jam.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const klMin = 2 * 60 + 30; const lonMin = klMin - 8 * 60; const dayShift = lonMin < 0 ? -1 : 0; const adj = ((lonMin % 1440) + 1440) % 1440; const h = Math.floor(adj / 60), m = adj % 60; const dateStr = dayShift === -1 ? '30 April' : '1 Mei'; return (h - 12) + ':' + String(m).padStart(2, '0') + ' p.m., ' + dateStr;",
          "ans": "6:30 p.m., 30 April"
        }
      },
      {
        "id": "d6m_masa_01_q5",
        "syllabus_node_id": "d6_math_masa_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kapal terbang berlepas dari Kuala Lumpur (UTC+8) pada jam 2100 hari Jumaat menuju ke Doha (UTC+3). Tempoh penerbangan ialah 7 jam 30 minit. Nyatakan waktu dan hari ketibaan mengikut waktu tempatan Doha.",
        "options_json": {
          "A": "Jam 0430, Sabtu",
          "B": "Jam 0930, Sabtu",
          "C": "Jam 2330, Jumaat",
          "D": "Jam 2330, Sabtu"
        },
        "correct_option": "C",
        "explanation_text": "Doha (UTC+3) lewat 5 jam daripada Kuala Lumpur (UTC+8). Waktu berlepas dalam waktu Doha ialah Jam 2100 − 5 jam = Jam 1600, Jumaat. Tambah tempoh penerbangan 7 jam 30 minit: Jam 1600 + 7 jam 30 minit = Jam 2330, Jumaat. Pilihan A lupa melaraskan perbezaan zon masa; pilihan B menambah 5 jam ke arah salah; pilihan D tersilap menukar hari kepada Sabtu.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const depKL = 21 * 60; const arrKL = depKL + 7 * 60 + 30; const arrDoha = arrKL - (8 - 3) * 60; const day = arrDoha >= 1440 ? 'Sabtu' : 'Jumaat'; const t = ((arrDoha % 1440) + 1440) % 1440; return 'Jam ' + String(Math.floor(t / 60)).padStart(2, '0') + String(t % 60).padStart(2, '0') + ', ' + day;",
          "ans": "Jam 2330, Jumaat"
        }
      },
      {
        "id": "d6m_ukur_01_q1",
        "syllabus_node_id": "d6_math_ukur_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Jisim bagi 1 m dawai tembaga ialah 240 g. Berapakah jisim, dalam kg, bagi 3.5 m dawai tembaga yang sama?",
        "options_json": {
          "A": "0.84 kg",
          "B": "8.4 kg",
          "C": "0.72 kg",
          "D": "0.084 kg"
        },
        "correct_option": "A",
        "explanation_text": "Jisim bagi 3.5 m = 3.5 × 240 g = 840 g. Tukarkan gram kepada kilogram dengan membahagi 1 000: 840 ÷ 1 000 = 0.84 kg. Pilihan B tersilap membahagi dengan 100 bukannya 1 000; pilihan C hanya mendarab dengan 3 m dan mengabaikan 0.5 m; pilihan D membahagi dengan 10 000.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return ((240 * 3.5) / 1000).toFixed(2) + ' kg';",
          "ans": "0.84 kg"
        }
      },
      {
        "id": "d6m_ukur_01_q2",
        "syllabus_node_id": "d6_math_ukur_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah kereta menggunakan 1.5 ℓ petrol untuk bergerak sejauh 20 km. Berapakah isi padu petrol, dalam ℓ, yang diperlukan untuk perjalanan sehala sejauh 140 km?",
        "options_json": {
          "A": "9.5 ℓ",
          "B": "21 ℓ",
          "C": "7.5 ℓ",
          "D": "10.5 ℓ"
        },
        "correct_option": "D",
        "explanation_text": "Cari bilangan bahagian 20 km dalam 140 km: 140 ÷ 20 = 7 bahagian. Isi padu petrol = 7 × 1.5 ℓ = 10.5 ℓ. Pilihan B menggandakan jarak seolah-olah perjalanan pergi dan balik walaupun soalan meminta sehala; pilihan A dan C berpunca daripada ralat pembahagian 140 ÷ 20 atau darab perpuluhan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return ((140 / 20) * 1.5) + ' ℓ';",
          "ans": "10.5 ℓ"
        }
      },
      {
        "id": "d6m_ukur_01_q3",
        "syllabus_node_id": "d6_math_ukur_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Untuk membancuh 1.5 ℓ air sirap, sebanyak 180 g gula diperlukan. Berapakah jisim gula, dalam g, yang diperlukan untuk membancuh 2 500 ml air sirap dengan kepekatan yang sama?",
        "options_json": {
          "A": "270 g",
          "B": "450 g",
          "C": "300 g",
          "D": "360 g"
        },
        "correct_option": "C",
        "explanation_text": "Samakan unit dahulu: 1.5 ℓ = 1 500 ml. Gula bagi setiap 500 ml = 180 g ÷ 3 = 60 g. Oleh sebab 2 500 ml = 5 × 500 ml, jisim gula = 5 × 60 g = 300 g. Pilihan B terus mendarab 2.5 × 180 tanpa membahagi dengan 1.5 ℓ asal; pilihan A mengira 1.5 × 180; pilihan D menganggap 2 500 ml ialah dua kali ganda 1.5 ℓ.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round((2500 / (1.5 * 1000)) * 180) + ' g';",
          "ans": "300 g"
        }
      },
      {
        "id": "d6m_ukur_01_q4",
        "syllabus_node_id": "d6_math_ukur_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Jarak antara rumah Encik Lim dengan pejabatnya ialah 18 km. Motosikalnya menggunakan 0.6 ℓ petrol bagi setiap 12 km. Berapakah isi padu petrol, dalam ℓ, yang digunakan untuk perjalanan pergi dan balik dari rumah ke pejabat?",
        "options_json": {
          "A": "0.9 ℓ",
          "B": "1.8 ℓ",
          "C": "2.4 ℓ",
          "D": "3.6 ℓ"
        },
        "correct_option": "B",
        "explanation_text": "Jumlah jarak pergi dan balik = 2 × 18 km = 36 km. Bilangan bahagian 12 km = 36 ÷ 12 = 3. Maka isi padu petrol = 3 × 0.6 ℓ = 1.8 ℓ. Pilihan A terlupa menggandakan jarak 18 km untuk perjalanan pergi dan balik; pilihan C dan D berpunca daripada kesilapan kadaran jarak kepada petrol.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (((18 * 2) / 12) * 0.6).toFixed(1) + ' ℓ';",
          "ans": "1.8 ℓ"
        }
      },
      {
        "id": "d6m_ukur_01_q5",
        "syllabus_node_id": "d6_math_ukur_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah bekas silinder berisi 2 4/5 ℓ air hingga paras ketinggian 28 cm. Setelah sejumlah air dituang keluar, paras air turun menjadi 13 cm. Berapakah isi padu air, dalam ml, yang telah dituang keluar?",
        "options_json": {
          "A": "1 500 ml",
          "B": "1 300 ml",
          "C": "150 ml",
          "D": "1 400 ml"
        },
        "correct_option": "A",
        "explanation_text": "Tukarkan 2 4/5 ℓ = 2.8 ℓ = 2 800 ml. Isi padu bagi setiap 1 cm ketinggian = 2 800 ml ÷ 28 = 100 ml/cm. Penurunan paras air = 28 cm − 13 cm = 15 cm, maka air yang dituang keluar = 15 × 100 ml = 1 500 ml. Pilihan B mengira baki air pada paras 13 cm bukannya air yang dituang keluar; pilihan C tersilap menukar liter kepada mililiter (× 100); pilihan D salah menolak 28 − 13.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const volMl = (2 + 4 / 5) * 1000; const perCm = volMl / 28; const out = (28 - 13) * perCm; return String(Math.round(out)).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + ' ml';",
          "ans": "1 500 ml"
        }
      },
      {
        "id": "d6m_ruang_01_q1",
        "syllabus_node_id": "d6_math_ruang_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Berapakah nilai satu sudut pedalaman bagi sebuah heksagon sekata?",
        "options_json": {
          "A": "90°",
          "B": "108°",
          "C": "135°",
          "D": "120°"
        },
        "correct_option": "D",
        "explanation_text": "Heksagon sekata mempunyai 6 sisi dan 6 sudut pedalaman yang sama besar. Setiap sudut pedalaman = (6 − 2) × 180° ÷ 6 = 720° ÷ 6 = 120°. Pilihan A ialah sudut segi empat sama (4 sisi); pilihan B ialah sudut pentagon sekata (5 sisi); pilihan C ialah sudut oktagon sekata (8 sisi).",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const n = 6; return ((n - 2) * 180 / n) + '°';",
          "ans": "120°"
        }
      },
      {
        "id": "d6m_ruang_01_q2",
        "syllabus_node_id": "d6_math_ruang_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Diameter bagi sebuah jam dinding berbentuk bulatan ialah 34 cm. Berapakah jejari jam dinding itu?",
        "options_json": {
          "A": "68 cm",
          "B": "18 cm",
          "C": "17 cm",
          "D": "32 cm"
        },
        "correct_option": "C",
        "explanation_text": "Jejari ialah separuh daripada diameter (r = d ÷ 2): 34 cm ÷ 2 = 17 cm. Pilihan A tersilap mendarab 34 cm × 2 kerana menyangka jejari ialah dua kali ganda diameter; pilihan B ralat pembahagian; pilihan D tersilap menolak 2 bukannya membahagi 2.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (34 / 2) + ' cm';",
          "ans": "17 cm"
        }
      },
      {
        "id": "d6m_ruang_01_q3",
        "syllabus_node_id": "d6_math_ruang_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Semasa mengukur suatu sudut tirus dengan protraktor, satu garis diletakkan pada tanda 25° dan garis satu lagi berada pada tanda 85° pada skala yang sama. Berapakah saiz sudut itu?",
        "options_json": {
          "A": "60°",
          "B": "85°",
          "C": "110°",
          "D": "120°"
        },
        "correct_option": "A",
        "explanation_text": "Apabila garisan permulaan tidak berada pada 0°, saiz sudut ialah beza kedua-dua bacaan skala: 85° − 25° = 60° (sudut tirus). Pilihan B terlupa menolak bacaan garisan permulaan 25°; pilihan C menambah kedua-dua bacaan; pilihan D membaca sudut penggenap (180° − 60°) pada skala bertentangan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (85 - 25) + '°';",
          "ans": "60°"
        }
      },
      {
        "id": "d6m_ruang_01_q4",
        "syllabus_node_id": "d6_math_ruang_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Hitung beza antara satu sudut pedalaman oktagon sekata dengan satu sudut pedalaman pentagon sekata.",
        "options_json": {
          "A": "15°",
          "B": "27°",
          "C": "243°",
          "D": "37°"
        },
        "correct_option": "B",
        "explanation_text": "Satu sudut pedalaman oktagon sekata (8 sisi) ialah 135° dan pentagon sekata (5 sisi) ialah 108°. Beza kedua-duanya = 135° − 108° = 27°. Pilihan A tersilap menggunakan sudut heksagon (120°) bagi pentagon; pilihan C menjumlahkan 135° + 108° bukannya mencari beza; pilihan D ralat menolak nilai puluh.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const oct = (8 - 2) * 180 / 8; const pent = (5 - 2) * 180 / 5; return (oct - pent) + '°';",
          "ans": "27°"
        }
      },
      {
        "id": "d6m_ruang_01_q5",
        "syllabus_node_id": "d6_math_ruang_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Lima biji pinggan bulat yang sama saiz dengan jejari 9 cm disusun sebaris dan saling bersentuhan di dalam sebuah kotak segi empat tepat. Jika terdapat ruang kelegaan sebanyak 2 cm di sebelah kiri pinggan pertama dan 2 cm di sebelah kanan pinggan terakhir, berapakah panjang dalaman kotak itu?",
        "options_json": {
          "A": "49 cm",
          "B": "92 cm",
          "C": "90 cm",
          "D": "94 cm"
        },
        "correct_option": "D",
        "explanation_text": "Diameter sebiji pinggan = 2 × 9 cm = 18 cm. Panjang susunan 5 biji pinggan sebaris = 5 × 18 cm = 90 cm. Tambah ruang kelegaan di kedua-dua hujung (2 cm + 2 cm = 4 cm): 90 cm + 4 cm = 94 cm. Pilihan A mendarab 5 dengan jejari 9 cm bukannya diameter 18 cm; pilihan B hanya menambah kelegaan pada satu sisi; pilihan C terlupa menambah ruang kelegaan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const d = 9 * 2; return (5 * d + 2 * 2) + ' cm';",
          "ans": "94 cm"
        }
      },
      {
        "id": "d6m_koor_01_q1",
        "syllabus_node_id": "d6_math_koor_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pada satah Cartes, koordinat perpustakaan ialah (2, 7) dan koordinat kantin ialah (8, 3). Nyatakan jarak mengufuk dan jarak mencancang dari perpustakaan ke kantin.",
        "options_json": {
          "A": "4 unit mengufuk, 6 unit mencancang",
          "B": "6 unit mengufuk, 4 unit mencancang",
          "C": "10 unit mengufuk, 10 unit mencancang",
          "D": "5 unit mengufuk, 5 unit mencancang"
        },
        "correct_option": "B",
        "explanation_text": "Jarak mengufuk merujuk paksi-x: |8 − 2| = 6 unit. Jarak mencancang merujuk paksi-y: |3 − 7| = 4 unit. Pilihan A menukarkan nilai jarak mengufuk (paksi-x) dengan jarak mencancang (paksi-y); pilihan C menambah koordinat (2 + 8 dan 7 + 3) bukannya mencari beza; pilihan D menolak x dengan y bagi setiap titik.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const dx = Math.abs(8 - 2), dy = Math.abs(3 - 7); return dx + ' unit mengufuk, ' + dy + ' unit mencancang';",
          "ans": "6 unit mengufuk, 4 unit mencancang"
        }
      },
      {
        "id": "d6m_koor_01_q2",
        "syllabus_node_id": "d6_math_koor_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Nyatakan nisbah 600 g kepada 1.5 kg dalam bentuk termudah.",
        "options_json": {
          "A": "2 : 5",
          "B": "5 : 2",
          "C": "400 : 1",
          "D": "6 : 15"
        },
        "correct_option": "A",
        "explanation_text": "Samakan unit terlebih dahulu: 1.5 kg = 1 500 g. Nisbah ialah 600 : 1 500. Bahagikan kedua-dua sebutan dengan faktor sepunya terbesar 300 untuk mendapat bentuk termudah 2 : 5. Pilihan B menyongsangkan susunan nisbah; pilihan C membandingkan gram dengan kilogram tanpa menyamakan unit; pilihan D belum dipermudahkan sepenuhnya.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const gcd = (a, b) => b ? gcd(b, a % b) : a; const a = 600, b = 1.5 * 1000; const g = gcd(a, b); return (a / g) + ' : ' + (b / g);",
          "ans": "2 : 5"
        }
      },
      {
        "id": "d6m_koor_01_q3",
        "syllabus_node_id": "d6_math_koor_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Nisbah bilangan guli merah kepada bilangan guli biru di dalam sebuah kotak ialah 3 : 5. Jika jumlah kesemua guli ialah 96 biji, berapakah bilangan guli biru?",
        "options_json": {
          "A": "36 biji",
          "B": "32 biji",
          "C": "48 biji",
          "D": "60 biji"
        },
        "correct_option": "D",
        "explanation_text": "Jumlah bahagian nisbah = 3 + 5 = 8 bahagian. Nilai 1 bahagian = 96 ÷ 8 = 12 biji. Bilangan guli biru (5 bahagian) = 5 × 12 = 60 biji. Pilihan A mengira bilangan guli merah (3 bahagian); pilihan B membahagi 96 dengan 3 bahagian sahaja bukannya jumlah bahagian; pilihan C membahagi dua sama rata.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const unit = 96 / (3 + 5); return (unit * 5) + ' biji';",
          "ans": "60 biji"
        }
      },
      {
        "id": "d6m_koor_01_q4",
        "syllabus_node_id": "d6_math_koor_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pada sebuah peta berskala 1 unit mewakili 4 km, kedudukan Pekan A ialah (1, 2) dan kedudukan Pekan B ialah (6, 2). Sebuah van bergerak dari Pekan A ke Pekan B, kemudian ke Pekan C di (6, 9). Berapakah jumlah jarak sebenar, dalam km, yang dilalui van itu?",
        "options_json": {
          "A": "12 km",
          "B": "28 km",
          "C": "48 km",
          "D": "36 km"
        },
        "correct_option": "C",
        "explanation_text": "Jarak A ke B = |6 − 1| = 5 unit mengufuk. Jarak B ke C = |9 − 2| = 7 unit mencancang. Jumlah jarak grid = 5 + 7 = 12 unit. Darabkan dengan skala 4 km seunit: 12 × 4 km = 48 km. Pilihan A lupa mendarab dengan skala 4 km; pilihan B hanya mengira jarak dari B ke C (7 × 4 km); pilihan D tersilap mengira jarak mencancang.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const u = Math.abs(6 - 1) + Math.abs(9 - 2); return (u * 4) + ' km';",
          "ans": "48 km"
        }
      },
      {
        "id": "d6m_koor_01_q5",
        "syllabus_node_id": "d6_math_koor_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Nisbah wang simpanan Ali kepada wang simpanan Bala ialah 2 : 5. Wang simpanan Bala adalah RM45.00 lebih banyak daripada wang simpanan Ali. Jika Ali menyimpan tambahan RM15.00 lagi, nyatakan nisbah baharu wang simpanan Ali kepada wang simpanan Bala dalam bentuk termudah.",
        "options_json": {
          "A": "3 : 5",
          "B": "2 : 5",
          "C": "5 : 3",
          "D": "1 : 2"
        },
        "correct_option": "A",
        "explanation_text": "Beza bahagian = 5 − 2 = 3 bahagian = RM45.00, maka 1 bahagian = RM15.00. Simpanan asal Ali = 2 × RM15.00 = RM30.00 dan Bala = 5 × RM15.00 = RM75.00. Selepas Ali menambah RM15.00, wang Ali menjadi RM45.00. Nisbah baharu = 45 : 75 = 3 : 5. Pilihan B menggunakan nisbah asal tanpa perubahan; pilihan C menukar susunan; pilihan D turut menambah RM15.00 kepada Bala (45 : 90).",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const gcd = (a, b) => b ? gcd(b, a % b) : a; const unit = 45 / (5 - 2); const ali = 2 * unit + 15; const bala = 5 * unit; const g = gcd(ali, bala); return (ali / g) + ' : ' + (bala / g);",
          "ans": "3 : 5"
        }
      },
      {
        "id": "d6m_data_01_q1",
        "syllabus_node_id": "d6_math_data_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah carta pai menunjukkan hobi 64 orang murid Tahun 6. Sektor bagi hobi melukis mempunyai sudut 45°. Berapakah bilangan murid yang memilih hobi melukis?",
        "options_json": {
          "A": "16 orang",
          "B": "32 orang",
          "C": "8 orang",
          "D": "4 orang"
        },
        "correct_option": "C",
        "explanation_text": "Satu bulatan penuh carta pai ialah 360°, maka sudut 45° mewakili pecahan 45°/360° = 1/8. Bilangan murid = 1/8 × 64 = 8 orang. Pilihan A berpunca daripada salah anggap bahawa sudut 45° mewakili 1/4 bulatan (16 orang); pilihan B mengira 1/2 (180°); pilihan D tersilap membahagi dengan 16.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round((45 / 360) * 64) + ' orang';",
          "ans": "8 orang"
        }
      },
      {
        "id": "d6m_data_01_q2",
        "syllabus_node_id": "d6_math_data_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah kotak mengandungi 9 biji bola hijau dan 1 biji bola merah yang sama saiz. Apakah kebolehjadian mengambil sebiji bola merah secara rawak daripada kotak itu?",
        "options_json": {
          "A": "Mustahil",
          "B": "Sama kemungkinan",
          "C": "Besar kemungkinan",
          "D": "Kecil kemungkinan"
        },
        "correct_option": "D",
        "explanation_text": "Jumlah bola ialah 9 + 1 = 10 biji. Hanya 1 daripada 10 bola berwarna merah (kurang daripada separuh tetapi bukan sifar), maka kebolehjadiannya ialah kecil kemungkinan. Pilihan A salah kerana peristiwa yang jarang berlaku bukan mustahil selagi sekurang-kurangnya satu bola merah wujud; pilihan B memerlukan 5 bola merah; pilihan C ialah kebolehjadian bagi bola hijau.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const red = 1, total = 9 + 1; return red === 0 ? 'Mustahil' : red === total ? 'Pasti' : red * 2 === total ? 'Sama kemungkinan' : red * 2 < total ? 'Kecil kemungkinan' : 'Besar kemungkinan';",
          "ans": "Kecil kemungkinan"
        }
      },
      {
        "id": "d6m_data_01_q3",
        "syllabus_node_id": "d6_math_data_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Satu carta pai memaparkan jualan 200 biji kek cawan dalam empat perisa: Coklat 40%, Vanila 25%, Strawberi 20%, dan selebihnya perisa Pandan. Berapakah bilangan kek cawan perisa Pandan yang dijual?",
        "options_json": {
          "A": "15 biji",
          "B": "30 biji",
          "C": "40 biji",
          "D": "25 biji"
        },
        "correct_option": "B",
        "explanation_text": "Jumlah peratus dalam carta pai ialah 100%, maka peratus Pandan = 100% − (40% + 25% + 20%) = 15%. Bilangan kek cawan Pandan = 15/100 × 200 = 30 biji. Pilihan A menyatakan nilai peratus 15% terus tanpa mendarab dengan jumlah 200 biji; pilihan C ialah bilangan Strawberi (20%); pilihan D ialah salah jumlah peratus.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const pct = 100 - (40 + 25 + 20); return Math.round((pct / 100) * 200) + ' biji';",
          "ans": "30 biji"
        }
      },
      {
        "id": "d6m_data_01_q4",
        "syllabus_node_id": "d6_math_data_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebuah carta pai menunjukkan pilihan minuman murid semasa hari sukan: Sirap mempunyai sudut 180°, Oren mempunyai sudut 90°, Teh Ais mempunyai sudut 45°, dan Milo memenuhi baki sudut. Jika 18 orang murid memilih Oren, berapakah bilangan murid yang memilih Sirap dan Milo secara keseluruhannya?",
        "options_json": {
          "A": "45 orang",
          "B": "36 orang",
          "C": "54 orang",
          "D": "27 orang"
        },
        "correct_option": "A",
        "explanation_text": "Sudut Milo = 360° − (180° + 90° + 45°) = 45°. Oleh sebab 90° mewakili 18 orang, maka 45° (separuh daripada 90°) mewakili 9 orang dan 180° (dua kali 90°) mewakili 36 orang. Jumlah Sirap dan Milo = 36 + 9 = 45 orang. Pilihan B hanya mengira sektor Sirap sahaja; pilihan C menganggap sudut Milo ialah 90°; pilihan D tersilap mengira sektor 180° sebagai 18 orang.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const perDeg = 18 / 90; const miloDeg = 360 - (180 + 90 + 45); return Math.round((180 + miloDeg) * perDeg) + ' orang';",
          "ans": "45 orang"
        }
      },
      {
        "id": "d6m_data_01_q5",
        "syllabus_node_id": "d6_math_data_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Di dalam sebuah beg terdapat 14 keping kad kuning dan 6 keping kad biru. Berapakah bilangan kad biru yang perlu ditambah ke dalam beg itu supaya kebolehjadian memilih sekeping kad biru menjadi sama kemungkinan?",
        "options_json": {
          "A": "4 keping",
          "B": "6 keping",
          "C": "14 keping",
          "D": "8 keping"
        },
        "correct_option": "D",
        "explanation_text": "Untuk mencapai sama kemungkinan, bilangan kad biru mesti sama banyak dengan bilangan kad kuning (14 keping) supaya nisbahnya tepat separuh daripada jumlah keseluruhan (14 daripada 28). Bilangan kad biru yang perlu ditambah = 14 − 6 = 8 keping. Pilihan A hanya menambah sehingga separuh jumlah asal (10 − 6 = 4) tanpa menyedari jumlah keseluruhan turut bertambah; pilihan C ialah jumlah akhir kad biru, bukan bilangan tambahan.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "const yellow = 14, blue = 6; const add = yellow - blue; return ((blue + add) * 2 === (yellow + blue + add)) ? add + ' keping' : '';",
          "ans": "8 keping"
        }
      }
    ]
  };
});
