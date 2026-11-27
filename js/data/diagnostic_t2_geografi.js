/**
 * Generated from js/data/diagnostic_t2_geografi.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.t2 = App.DiagnosticBanks.t2 || {};
    App.DiagnosticBanks.t2.geografi = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "t2_geografi_b01",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "skala_jarak",
        "topic_name": "Bab 1: Skala dan Jarak",
        "subtopic_name": "Jenis skala, pengukuran jarak dan pengiraan jarak sebenar",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_geografi_b02",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "skala_jarak",
        "topic_name": "Bab 2: Peta Topografi",
        "subtopic_name": "Ciri peta topografi, garisan kontur dan keratan rentas",
        "prerequisite_node_id": "t2_geografi_b01",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_geografi_b03",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "cuaca_iklim",
        "topic_name": "Bab 3: Pengaruh Pergerakan Bumi terhadap Cuaca dan Iklim",
        "subtopic_name": "Putaran, peredaran Bumi dan kejadian gerhana",
        "prerequisite_node_id": null,
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_geografi_b04",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "cuaca_iklim",
        "topic_name": "Bab 4: Cuaca dan Iklim di Malaysia",
        "subtopic_name": "Unsur cuaca, jenis hujan dan angin monsun",
        "prerequisite_node_id": "t2_geografi_b03",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      },
      {
        "id": "t2_geografi_b05",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "pengangkutan_telekomunikasi",
        "topic_name": "Bab 5: Pengangkutan di Malaysia",
        "subtopic_name": "Jenis pengangkutan serta kesannya terhadap alam sekitar",
        "prerequisite_node_id": null,
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_geografi_b06",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "pengangkutan_telekomunikasi",
        "topic_name": "Bab 6: Telekomunikasi di Malaysia",
        "subtopic_name": "Infrastruktur telekomunikasi dan kesan penggunaannya",
        "prerequisite_node_id": "t2_geografi_b05",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_geografi_b07",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "iklim_asia",
        "topic_name": "Bab 7: Kepelbagaian Iklim dan Pengaruhnya terhadap Kegiatan Manusia di Asia",
        "subtopic_name": "Jenis iklim Asia, pertanian dan bencana iklim",
        "prerequisite_node_id": "t2_geografi_b04",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      },
      {
        "id": "t2_geografi_b08",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "iklim_asia",
        "topic_name": "Bab 8: Pengangkutan di Asia",
        "subtopic_name": "Jaringan pengangkutan utama Asia dan faktornya",
        "prerequisite_node_id": "t2_geografi_b07",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_geografi_b09",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "pemanasan_global",
        "topic_name": "Bab 9: Pemanasan Global",
        "subtopic_name": "Kesan rumah hijau, punca dan kesan pemanasan global",
        "prerequisite_node_id": null,
        "expected_time_ms": 40000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_geografi_b10",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "pemanasan_global",
        "topic_name": "Bab 10: Teknologi Hijau",
        "subtopic_name": "Ciri teknologi hijau dan tenaga boleh baharu",
        "prerequisite_node_id": "t2_geografi_b09",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_geografi_b11",
        "subject": "geografi",
        "grade_level": "t2",
        "chapter_id": "pemanasan_global",
        "topic_name": "Bab 9-10: Pemanasan Global dan Teknologi Hijau",
        "subtopic_name": "Langkah mitigasi dan amalan kelestarian alam",
        "prerequisite_node_id": "t2_geografi_b10",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "t2ge_b01_q1",
        "syllabus_node_id": "t2_geografi_b01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud skala pada sebuah peta?",
        "options_json": {
          "A": "Nisbah antara jarak yang diukur pada peta dengan jarak sebenar di permukaan bumi",
          "B": "Arah mata angin yang ditunjukkan oleh anak panah utara",
          "C": "Bilangan simbol yang digunakan dalam petunjuk peta",
          "D": "Beza ketinggian antara dua tempat pada peta"
        },
        "correct_option": "A",
        "explanation_text": "Skala ialah nisbah antara jarak pada peta dengan jarak sebenar di permukaan bumi, contohnya 1:50 000."
      },
      {
        "id": "t2ge_b01_q2",
        "syllabus_node_id": "t2_geografi_b01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah bentuk skala yang dinyatakan dalam perkataan, contohnya '1 cm mewakili 1 km'?",
        "options_json": {
          "A": "Skala lurus",
          "B": "Skala penyata",
          "C": "Skala wakilan",
          "D": "Skala pepenjuru"
        },
        "correct_option": "B",
        "explanation_text": "Skala penyata dinyatakan dalam bentuk perkataan, iaitu 1 cm pada peta mewakili 1 km di permukaan bumi."
      },
      {
        "id": "t2ge_b01_q3",
        "syllabus_node_id": "t2_geografi_b01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebuah peta berskala 1:50 000. Berapakah jarak sebenar bagi 6 cm pada peta itu?",
        "options_json": {
          "A": "300 m",
          "B": "30 km",
          "C": "3 km",
          "D": "0.3 km"
        },
        "correct_option": "C",
        "explanation_text": "Jarak sebenar = 6 x 50 000 = 300 000 cm. Oleh sebab 1 km = 100 000 cm, jarak sebenar ialah 300 000 / 100 000 = 3 km."
      },
      {
        "id": "t2ge_b01_q4",
        "syllabus_node_id": "t2_geografi_b01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah jarak melengkung sepanjang sungai perlu diukur menggunakan benang?",
        "options_json": {
          "A": "Kerana benang lebih murah daripada pembaris",
          "B": "Kerana benang boleh mengukur ketinggian peta",
          "C": "Kerana pembaris tidak boleh digunakan pada peta",
          "D": "Kerana benang dapat mengikut bentuk melengkung supaya panjang sebenar laluan tepat"
        },
        "correct_option": "D",
        "explanation_text": "Benang dapat mengikut bentuk melengkung sungai sehingga panjang sebenar laluan dapat diukur dengan tepat. Pembaris lurus hanya mengukur jarak garis lurus dan akan menghasilkan jarak yang lebih pendek."
      },
      {
        "id": "t2ge_b01_q5",
        "syllabus_node_id": "t2_geografi_b01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Dua kampung terletak 12 cm antara satu sama lain pada peta berskala 1:100 000. Sebuah basikal bergerak pada kelajuan purata 24 km/j. Berapakah masa perjalanan yang diperlukan?",
        "options_json": {
          "A": "30 minit",
          "B": "1 jam",
          "C": "2 jam",
          "D": "45 minit"
        },
        "correct_option": "A",
        "explanation_text": "12 cm x 100 000 = 1 200 000 cm iaitu 12 km. Masa = jarak / kelajuan = 12 / 24 = 0.5 jam, bersamaan 30 minit."
      },
      {
        "id": "t2ge_b02_q1",
        "syllabus_node_id": "t2_geografi_b02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud garisan kontur pada peta topografi?",
        "options_json": {
          "A": "Garisan yang menunjukkan sempadan negeri",
          "B": "Garisan yang menghubungkan titik-titik yang mempunyai ketinggian yang sama",
          "C": "Garisan yang menunjukkan arah aliran sungai",
          "D": "Garisan yang menandakan kawasan pertanian"
        },
        "correct_option": "B",
        "explanation_text": "Garisan kontur menghubungkan titik-titik yang mempunyai ketinggian yang sama, membolehkan bentuk muka bumi ditafsirkan."
      },
      {
        "id": "t2ge_b02_q2",
        "syllabus_node_id": "t2_geografi_b02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud garisan kontur yang rapat antara satu sama lain?",
        "options_json": {
          "A": "Cerun yang landai",
          "B": "Kawasan tanah pamah yang rata",
          "C": "Cerun yang curam",
          "D": "Kawasan yang tidak mempunyai ketinggian"
        },
        "correct_option": "C",
        "explanation_text": "Garisan kontur yang rapat menunjukkan perubahan ketinggian yang besar dalam jarak yang pendek, iaitu cerun yang curam."
      },
      {
        "id": "t2ge_b02_q3",
        "syllabus_node_id": "t2_geografi_b02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Titik X terletak antara garisan kontur 200 m dengan garisan kontur 225 m tanpa garisan lain di antaranya. Apakah anggaran ketinggian titik X?",
        "options_json": {
          "A": "Kurang daripada 200 m",
          "B": "Tepat 225 m",
          "C": "Antara 225 m dan 250 m",
          "D": "Antara 200 m dan 225 m"
        },
        "correct_option": "D",
        "explanation_text": "Titik yang terletak di antara dua garisan kontur mempunyai ketinggian antara nilai kedua-dua garisan itu, iaitu antara 200 m dan 225 m."
      },
      {
        "id": "t2ge_b02_q4",
        "syllabus_node_id": "t2_geografi_b02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Titik R pada kontur 275 m dan titik S pada kontur 350 m. Jarak mendatar pada peta berskala 1:25 000 ialah 6 cm. Apakah kecerunan purata antara R dan S?",
        "options_json": {
          "A": "1 dalam 20",
          "B": "1 dalam 5",
          "C": "1 dalam 10",
          "D": "1 dalam 50"
        },
        "correct_option": "A",
        "explanation_text": "Beza tinggi = 350 - 275 = 75 m. Jarak mendatar sebenar = 6 x 25 000 = 150 000 cm = 1 500 m. Kecerunan = 75 / 1 500 = 1 dalam 20."
      },
      {
        "id": "t2ge_b02_q5",
        "syllabus_node_id": "t2_geografi_b02",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Seorang murid mengukur jarak antara dua bangunan dan mendapat 5 cm, tetapi rakannya yang mengukur dari tepi simbol mendapat 5.6 cm. Apakah penjelasan paling tepat?",
        "options_json": {
          "A": "Jarak sebenar antara bangunan memang berubah-ubah",
          "B": "Pengukuran dari tepi simbol merangkumi lebar simbol, bukan jarak antara pusatnya",
          "C": "Pembaris yang digunakan tidak mempunyai unit sentimeter",
          "D": "Skala peta berubah mengikut saiz simbol yang dilukis"
        },
        "correct_option": "B",
        "explanation_text": "Simbol bangunan mempunyai lebar. Mengukur dari tepi ke tepi menambah lebar kedua-dua simbol ke dalam jarak, sedangkan jarak yang betul diukur dari pusat ke pusat simbol."
      },
      {
        "id": "t2ge_b03_q1",
        "syllabus_node_id": "t2_geografi_b03",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Berapa lamakah Bumi mengambil masa untuk melakukan satu putaran pada paksinya?",
        "options_json": {
          "A": "12 jam",
          "B": "365 hari",
          "C": "24 jam",
          "D": "30 hari"
        },
        "correct_option": "C",
        "explanation_text": "Bumi mengambil masa kira-kira 24 jam untuk melengkapkan satu putaran pada paksinya, menyebabkan kejadian siang dan malam."
      },
      {
        "id": "t2ge_b03_q2",
        "syllabus_node_id": "t2_geografi_b03",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah kesan utama putaran Bumi pada paksinya?",
        "options_json": {
          "A": "Berlakunya empat musim",
          "B": "Berlakunya gerhana Bulan",
          "C": "Berlakunya perubahan tahun",
          "D": "Berlakunya siang dan malam"
        },
        "correct_option": "D",
        "explanation_text": "Putaran Bumi pada paksinya menyebabkan bahagian yang menghadap Matahari mengalami siang, manakala bahagian yang membelakangi mengalami malam."
      },
      {
        "id": "t2ge_b03_q3",
        "syllabus_node_id": "t2_geografi_b03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah kejadian yang berlaku apabila Bulan berada di antara Matahari dan Bumi?",
        "options_json": {
          "A": "Gerhana Matahari",
          "B": "Gerhana Bulan",
          "C": "Pasang surut air laut",
          "D": "Perubahan musim"
        },
        "correct_option": "A",
        "explanation_text": "Gerhana Matahari berlaku apabila Bulan berada di antara Matahari dan Bumi, sehingga bayang-bayang Bulan jatuh ke permukaan Bumi."
      },
      {
        "id": "t2ge_b03_q4",
        "syllabus_node_id": "t2_geografi_b03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah Malaysia tidak mengalami empat musim seperti negara berlatitud tinggi?",
        "options_json": {
          "A": "Kerana Malaysia terletak di kawasan pergunungan",
          "B": "Kerana Malaysia terletak berhampiran khatulistiwa dan menerima cahaya matahari sepanjang tahun",
          "C": "Kerana Malaysia lebih dekat dengan Bulan",
          "D": "Kerana Malaysia mempunyai banyak pulau"
        },
        "correct_option": "B",
        "explanation_text": "Malaysia terletak berhampiran khatulistiwa dan menerima cahaya matahari yang hampir sekata sepanjang tahun, sehingga mengalami iklim khatulistiwa tanpa empat musim."
      },
      {
        "id": "t2ge_b03_q5",
        "syllabus_node_id": "t2_geografi_b03",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah tempat mengalami gerhana Matahari pada waktu tengah hari. Apakah susunan jasad yang betul?",
        "options_json": {
          "A": "Bulan - Bumi - Matahari",
          "B": "Bumi - Matahari - Bulan",
          "C": "Matahari - Bulan - Bumi",
          "D": "Matahari - Bumi - Bulan"
        },
        "correct_option": "C",
        "explanation_text": "Gerhana Matahari berlaku apabila susunan jasad ialah Matahari - Bulan - Bumi, iaitu Bulan berada di tengah dan menghalang cahaya Matahari daripada sampai ke Bumi."
      },
      {
        "id": "t2ge_b04_q1",
        "syllabus_node_id": "t2_geografi_b04",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah alat yang digunakan untuk mengukur jumlah hujan?",
        "options_json": {
          "A": "Termometer",
          "B": "Higrometer",
          "C": "Barometer",
          "D": "Tolok hujan"
        },
        "correct_option": "D",
        "explanation_text": "Tolok hujan digunakan untuk mengukur jumlah hujan, manakala termometer mengukur suhu dan higrometer mengukur kelembapan udara."
      },
      {
        "id": "t2ge_b04_q2",
        "syllabus_node_id": "t2_geografi_b04",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah alat yang digunakan untuk mengukur kelembapan udara?",
        "options_json": {
          "A": "Higrometer",
          "B": "Anemometer",
          "C": "Barometer",
          "D": "Tolok hujan"
        },
        "correct_option": "A",
        "explanation_text": "Higrometer digunakan untuk mengukur kelembapan udara. Anemometer mengukur kelajuan angin dan barometer mengukur tekanan udara."
      },
      {
        "id": "t2ge_b04_q3",
        "syllabus_node_id": "t2_geografi_b04",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Bilakah Monsun Timur Laut lazimnya berlaku di Malaysia?",
        "options_json": {
          "A": "Mei hingga September",
          "B": "November hingga Mac",
          "C": "Januari hingga Disember",
          "D": "April hingga Oktober"
        },
        "correct_option": "B",
        "explanation_text": "Monsun Timur Laut berlaku sekitar November hingga Mac dan membawa hujan lebat terutama di Pantai Timur Semenanjung, Sarawak dan Sabah."
      },
      {
        "id": "t2ge_b04_q4",
        "syllabus_node_id": "t2_geografi_b04",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah kawasan di seberang gunung menerima hujan yang lebih sedikit berbanding lereng yang menghadap angin?",
        "options_json": {
          "A": "Kerana kawasan itu terletak lebih tinggi",
          "B": "Kerana kawasan itu lebih dekat dengan laut",
          "C": "Kerana udara telah kering selepas melepaskan kelembapannya di lereng pertama",
          "D": "Kerana kawasan itu tidak mempunyai tumbuhan"
        },
        "correct_option": "C",
        "explanation_text": "Udara lembap naik di lereng yang menghadap angin, menyejuk dan melepaskan kelembapannya sebagai hujan. Udara yang turun di seberang gunung sudah kering, sehingga kawasan itu menerima hujan yang lebih sedikit."
      },
      {
        "id": "t2ge_b04_q5",
        "syllabus_node_id": "t2_geografi_b04",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kawasan di Pantai Timur Semenanjung menerima hujan lebat pada bulan Disember, manakala kawasan di Pantai Barat lebih kering. Apakah penjelasan paling tepat?",
        "options_json": {
          "A": "Monsun Barat Daya bertiup kuat pada bulan Disember",
          "B": "Kedua-dua pantai menerima monsun yang sama sekali",
          "C": "Pantai Barat dilindungi oleh gunung tertinggi di dunia",
          "D": "Monsun Timur Laut membawa udara lembap dari Laut China Selatan ke Pantai Timur"
        },
        "correct_option": "D",
        "explanation_text": "Pada bulan Disember, Monsun Timur Laut bertiup dari Laut China Selatan dan membawa udara lembap ke Pantai Timur Semenanjung, menyebabkan hujan lebat di sana manakala Pantai Barat dilindungi oleh Banjaran Titiwangsa."
      },
      {
        "id": "t2ge_b05_q1",
        "syllabus_node_id": "t2_geografi_b05",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah jenis pengangkutan darat yang utama di Malaysia?",
        "options_json": {
          "A": "Jalan raya dan landasan kereta api",
          "B": "Kapal dan feri",
          "C": "Kapal terbang dan helikopter",
          "D": "Perahu dan sampan"
        },
        "correct_option": "A",
        "explanation_text": "Pengangkutan darat utama di Malaysia ialah jalan raya dan landasan kereta api, yang menghubungkan kawasan bandar dan luar bandar."
      },
      {
        "id": "t2ge_b05_q2",
        "syllabus_node_id": "t2_geografi_b05",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah kepentingan utama pelabuhan kepada ekonomi Malaysia?",
        "options_json": {
          "A": "Tempat menanam padi",
          "B": "Pusat perdagangan kargo dan kegiatan eksport import",
          "C": "Tempat menyimpan hasil hutan sahaja",
          "D": "Pusat latihan tentera"
        },
        "correct_option": "B",
        "explanation_text": "Pelabuhan berfungsi sebagai pusat perdagangan kargo serta kegiatan eksport dan import, yang menyumbang kepada pertumbuhan ekonomi negara."
      },
      {
        "id": "t2ge_b05_q3",
        "syllabus_node_id": "t2_geografi_b05",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah kesan negatif pembinaan lebuh raya yang terlalu banyak?",
        "options_json": {
          "A": "Mengurangkan pencemaran udara",
          "B": "Mengurangkan jumlah kenderaan",
          "C": "Pencemaran bunyi dan kesesakan di kawasan tertentu",
          "D": "Menghapuskan semua kegiatan ekonomi"
        },
        "correct_option": "C",
        "explanation_text": "Pembinaan lebuh raya yang terlalu banyak boleh menyebabkan pencemaran bunyi, kesesakan di kawasan tertentu dan tekanan terhadap alam sekitar."
      },
      {
        "id": "t2ge_b05_q4",
        "syllabus_node_id": "t2_geografi_b05",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah jaringan pengangkutan lebih maju di kawasan tanah pamah berbanding kawasan tanah tinggi?",
        "options_json": {
          "A": "Kerana tanah pamah mempunyai lebih banyak sungai",
          "B": "Kerana tanah tinggi tidak mempunyai penduduk",
          "C": "Kerana tanah tinggi lebih dekat dengan laut",
          "D": "Kerana pembinaan jalan lebih mudah dan murah di kawasan yang rata"
        },
        "correct_option": "D",
        "explanation_text": "Pembinaan jalan raya dan landasan kereta api lebih mudah dan murah di kawasan tanah pamah yang rata, berbanding kawasan tanah tinggi yang memerlukan terowong, jambatan dan pemotongan cerun."
      },
      {
        "id": "t2ge_b05_q5",
        "syllabus_node_id": "t2_geografi_b05",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kawasan luar bandar tidak mempunyai perkhidmatan bas. Apakah kesan paling langsung terhadap penduduknya?",
        "options_json": {
          "A": "Kesukaran bergerak ke tempat kerja, sekolah dan hospital",
          "B": "Penduduk tidak lagi memerlukan jalan raya",
          "C": "Kawasan itu menjadi lebih maju dengan segera",
          "D": "Penduduk berhenti menggunakan semua kenderaan"
        },
        "correct_option": "A",
        "explanation_text": "Ketiadaan pengangkutan awam menyukarkan penduduk bergerak ke tempat kerja, sekolah dan hospital, sekali gus menjejaskan akses kepada perkhidmatan asas."
      },
      {
        "id": "t2ge_b06_q1",
        "syllabus_node_id": "t2_geografi_b06",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud telekomunikasi?",
        "options_json": {
          "A": "Pemindahan barangan dari pelabuhan ke kapal",
          "B": "Pemindahan maklumat dari satu tempat ke tempat lain melalui medium elektronik",
          "C": "Pembinaan jalan raya antara dua bandar",
          "D": "Pengangkutan penumpang melalui kereta api"
        },
        "correct_option": "B",
        "explanation_text": "Telekomunikasi ialah pemindahan maklumat dari satu tempat ke tempat lain melalui medium elektronik seperti telefon, internet, radio dan televisyen."
      },
      {
        "id": "t2ge_b06_q2",
        "syllabus_node_id": "t2_geografi_b06",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah infrastruktur yang membolehkan Internet berkelajuan tinggi disalurkan ke rumah?",
        "options_json": {
          "A": "Menara pemancar radio sahaja",
          "B": "Landasan kereta api",
          "C": "Kabel gentian optik",
          "D": "Tolok hujan"
        },
        "correct_option": "C",
        "explanation_text": "Kabel gentian optik membolehkan data dihantar pada kelajuan tinggi dengan kehilangan isyarat yang rendah, dan menjadi tulang belakang perkhidmatan Internet berkelajuan tinggi."
      },
      {
        "id": "t2ge_b06_q3",
        "syllabus_node_id": "t2_geografi_b06",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah kesan negatif penyebaran berita palsu melalui media sosial?",
        "options_json": {
          "A": "Meningkatkan kepercayaan masyarakat kepada kerajaan",
          "B": "Mengurangkan penggunaan telefon",
          "C": "Meningkatkan kelajuan Internet",
          "D": "Mengelirukan masyarakat dan menjejaskan keharmonian"
        },
        "correct_option": "D",
        "explanation_text": "Berita palsu boleh mengelirukan masyarakat, menimbulkan panik dan menjejaskan keharmonian, terutamanya apabila disebarkan dengan cepat melalui media sosial."
      },
      {
        "id": "t2ge_b06_q4",
        "syllabus_node_id": "t2_geografi_b06",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah jurang digital antara bandar dan luar bandar perlu dirapatkan?",
        "options_json": {
          "A": "Kerana akses yang seimbang membolehkan semua murid mendapat pendidikan dan peluang ekonomi yang sama",
          "B": "Kerana penduduk luar bandar tidak memerlukan Internet",
          "C": "Kerana Internet hanya sesuai digunakan di bandar",
          "D": "Kerana infrastruktur telekomunikasi tidak boleh dibina di luar bandar"
        },
        "correct_option": "A",
        "explanation_text": "Jurang digital yang besar menyebabkan murid dan penduduk luar bandar ketinggalan dalam pendidikan dan peluang ekonomi, jadi akses yang seimbang penting untuk kesaksamaan."
      },
      {
        "id": "t2ge_b06_q5",
        "syllabus_node_id": "t2_geografi_b06",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Seorang murid menerima mesej yang mendakwa satu bencana besar akan berlaku esok. Apakah tindakan paling wajar?",
        "options_json": {
          "A": "Terus menyebarkan mesej kepada semua rakan",
          "B": "Menyemak sumber rasmi sebelum menyebarkan mesej itu",
          "C": "Mengabaikan semua maklumat dalam talian seumur hidup",
          "D": "Menghantar mesej itu kepada pihak berkuasa asing"
        },
        "correct_option": "B",
        "explanation_text": "Menyemak sumber rasmi seperti agensi kerajaan sebelum menyebarkan sesuatu mesej dapat mengelakkan penyebaran berita palsu yang boleh mengelirukan masyarakat."
      },
      {
        "id": "t2ge_b07_q1",
        "syllabus_node_id": "t2_geografi_b07",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah jenis iklim yang dialami oleh sebahagian besar Asia Tenggara?",
        "options_json": {
          "A": "Iklim tundra",
          "B": "Iklim gurun",
          "C": "Iklim khatulistiwa dan monsun tropika",
          "D": "Iklim mediterranean"
        },
        "correct_option": "C",
        "explanation_text": "Sebahagian besar Asia Tenggara mengalami iklim khatulistiwa dan monsun tropika yang panas dan lembap sepanjang tahun."
      },
      {
        "id": "t2ge_b07_q2",
        "syllabus_node_id": "t2_geografi_b07",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah ciri utama iklim gurun?",
        "options_json": {
          "A": "Hujan lebat sepanjang tahun",
          "B": "Musim sejuk yang panjang dan lembap",
          "C": "Suhu yang sentiasa sejuk sepanjang tahun",
          "D": "Sangat kering dengan perbezaan suhu siang dan malam yang besar"
        },
        "correct_option": "D",
        "explanation_text": "Iklim gurun dicirikan oleh hujan yang sangat sedikit serta perbezaan suhu yang besar antara siang dan malam."
      },
      {
        "id": "t2ge_b07_q3",
        "syllabus_node_id": "t2_geografi_b07",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Tanaman manakah yang paling sesuai ditanam di kawasan beriklim monsun yang menerima hujan mencukupi?",
        "options_json": {
          "A": "Padi",
          "B": "Gandum",
          "C": "Kaktus",
          "D": "Pokok pain"
        },
        "correct_option": "A",
        "explanation_text": "Padi memerlukan air yang banyak, jadi paling sesuai ditanam di kawasan beriklim monsun yang menerima hujan mencukupi."
      },
      {
        "id": "t2ge_b07_q4",
        "syllabus_node_id": "t2_geografi_b07",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah petempatan di kawasan gurun Asia kurang padat berbanding kawasan monsun?",
        "options_json": {
          "A": "Kerana kawasan gurun terletak lebih tinggi",
          "B": "Kerana kekurangan air menyukarkan pertanian dan kehidupan harian",
          "C": "Kerana kawasan gurun mempunyai banyak sungai",
          "D": "Kerana kawasan gurun lebih dekat dengan laut"
        },
        "correct_option": "B",
        "explanation_text": "Kekurangan air di kawasan gurun menyukarkan pertanian dan kehidupan harian, sehingga petempatan kurang padat berbanding kawasan monsun yang menerima hujan mencukupi."
      },
      {
        "id": "t2ge_b07_q5",
        "syllabus_node_id": "t2_geografi_b07",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Dua bandar di Asia mengalami masalah alam sekitar berbeza: bandar P sering dilanda banjir monsun, bandar Q sering kekurangan air. Apakah pendekatan paling sesuai?",
        "options_json": {
          "A": "Kedua-dua bandar memindahkan semua penduduk ke kawasan gurun",
          "B": "Bandar P mengurangkan hujan; bandar Q menambah hujan",
          "C": "Bandar P memperbaiki saliran dan rizab banjir; bandar Q membina kemudahan penakungan serta kitar semula air",
          "D": "Kedua-dua bandar membina jeti pelancongan sebagai penyelesaian"
        },
        "correct_option": "C",
        "explanation_text": "Banjir dikawal melalui kapasiti saliran, pengekalan kawasan hijau dan rizab banjir. Kekurangan air diatasi dengan penakungan air hujan, pengurusan empangan dan kitar semula air. Setiap masalah memerlukan pendekatan berbeza."
      },
      {
        "id": "t2ge_b08_q1",
        "syllabus_node_id": "t2_geografi_b08",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah nama laluan perdagangan darat bersejarah yang menghubungkan China dengan Asia Barat?",
        "options_json": {
          "A": "Laluan Rempah",
          "B": "Laluan Timah",
          "C": "Laluan Monsun",
          "D": "Laluan Sutera"
        },
        "correct_option": "D",
        "explanation_text": "Laluan Sutera ialah laluan perdagangan bersejarah yang menghubungkan China dengan Asia Barat dan Eropah, dan turut mempunyai cabang laut."
      },
      {
        "id": "t2ge_b08_q2",
        "syllabus_node_id": "t2_geografi_b08",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Selat manakah yang menjadi laluan perkapalan tersibuk di Asia Tenggara?",
        "options_json": {
          "A": "Selat Melaka",
          "B": "Selat Inggeris",
          "C": "Selat Bering",
          "D": "Selat Gibraltar"
        },
        "correct_option": "A",
        "explanation_text": "Selat Melaka terletak antara Semenanjung Malaysia dan Sumatera, dan menjadi salah satu laluan perkapalan tersibuk di dunia."
      },
      {
        "id": "t2ge_b08_q3",
        "syllabus_node_id": "t2_geografi_b08",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah faktor utama yang mempengaruhi pembinaan jalan raya di kawasan pergunungan Asia?",
        "options_json": {
          "A": "Jumlah penduduk yang ramai",
          "B": "Bentuk muka bumi yang curam dan sukar",
          "C": "Kedudukan berhampiran laut",
          "D": "Kehadiran banyak lapangan terbang"
        },
        "correct_option": "B",
        "explanation_text": "Bentuk muka bumi yang curam dan sukar di kawasan pergunungan menyukarkan dan menambah kos pembinaan jalan raya, sehingga jaringan pengangkutan di sana kurang maju."
      },
      {
        "id": "t2ge_b08_q4",
        "syllabus_node_id": "t2_geografi_b08",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Bagaimanakah pengangkutan moden menyumbang kepada pertumbuhan pelancongan di Asia?",
        "options_json": {
          "A": "Dengan menghalang pelancong masuk ke sesebuah negara",
          "B": "Dengan mengurangkan bilangan lapangan terbang",
          "C": "Dengan memendekkan masa perjalanan dan menghubungkan lebih banyak destinasi",
          "D": "Dengan menaikkan kos perjalanan secara mendadak"
        },
        "correct_option": "C",
        "explanation_text": "Pengangkutan moden seperti penerbangan dan kereta api berkelajuan tinggi memendekkan masa perjalanan serta menghubungkan lebih banyak destinasi, sekali gus merancakkan industri pelancongan."
      },
      {
        "id": "t2ge_b08_q5",
        "syllabus_node_id": "t2_geografi_b08",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah negara Asia membina kereta api berkelajuan tinggi antara dua bandar utama. Apakah kesan ekonomi yang paling mungkin?",
        "options_json": {
          "A": "Kedua-dua bandar terputus hubungan",
          "B": "Penduduk berhenti menggunakan semua pengangkutan lain",
          "C": "Kos barangan meningkat kerana pengangkutan menjadi lebih lambat",
          "D": "Perdagangan dan pergerakan pekerja antara kedua-dua bandar meningkat"
        },
        "correct_option": "D",
        "explanation_text": "Kereta api berkelajuan tinggi memendekkan masa perjalanan, sehingga meningkatkan pergerakan pekerja, pelancong dan barangan antara kedua-dua bandar."
      },
      {
        "id": "t2ge_b09_q1",
        "syllabus_node_id": "t2_geografi_b09",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud kesan rumah hijau?",
        "options_json": {
          "A": "Proses gas tertentu dalam atmosfera memerangkap haba dan mengekalkan suhu Bumi",
          "B": "Proses Bumi kehilangan semua habanya ke angkasa",
          "C": "Proses pembentukan hujan asid di atmosfera",
          "D": "Proses penipisan lapisan ozon oleh klorin"
        },
        "correct_option": "A",
        "explanation_text": "Kesan rumah hijau ialah proses gas rumah hijau dalam atmosfera memerangkap haba dan mengekalkan suhu Bumi pada tahap yang sesuai untuk kehidupan."
      },
      {
        "id": "t2ge_b09_q2",
        "syllabus_node_id": "t2_geografi_b09",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara berikut, yang manakah gas rumah hijau utama?",
        "options_json": {
          "A": "Oksigen",
          "B": "Karbon dioksida",
          "C": "Nitrogen",
          "D": "Helium"
        },
        "correct_option": "B",
        "explanation_text": "Karbon dioksida ialah gas rumah hijau utama yang dibebaskan melalui pembakaran bahan api fosil dan penyahhutanan."
      },
      {
        "id": "t2ge_b09_q3",
        "syllabus_node_id": "t2_geografi_b09",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah punca utama peningkatan karbon dioksida dalam atmosfera?",
        "options_json": {
          "A": "Penanaman semula hutan",
          "B": "Penggunaan tenaga suria",
          "C": "Pembakaran bahan api fosil",
          "D": "Penggunaan basikal"
        },
        "correct_option": "C",
        "explanation_text": "Pembakaran bahan api fosil dalam kenderaan, kilang dan jana kuasa membebaskan karbon dioksida dalam jumlah besar ke atmosfera."
      },
      {
        "id": "t2ge_b09_q4",
        "syllabus_node_id": "t2_geografi_b09",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah penyahhutanan menyumbang kepada pemanasan global?",
        "options_json": {
          "A": "Kerana pokok menghasilkan karbon dioksida pada waktu malam",
          "B": "Kerana hutan menghalang cahaya matahari sampai ke Bumi",
          "C": "Kerana hutan menyejukkan udara terlalu banyak",
          "D": "Kerana bilangan pokok yang menyerap karbon dioksida berkurangan"
        },
        "correct_option": "D",
        "explanation_text": "Pokok menyerap karbon dioksida melalui fotosintesis. Apabila hutan ditebang, bilangan pokok yang menyerap karbon dioksida berkurangan, dan karbon yang tersimpan dalam tanah turut terbebas."
      },
      {
        "id": "t2ge_b09_q5",
        "syllabus_node_id": "t2_geografi_b09",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah negara pulau mendapati aras laut meningkat dan mengancam kawasan pesisir. Apakah langkah paling wajar?",
        "options_json": {
          "A": "Mengurangkan pelepasan gas rumah hijau dan membina benteng serta perancangan guna tanah pesisir",
          "B": "Menambah pembakaran arang batu untuk menjana lebih banyak elektrik",
          "C": "Menebang lebih banyak hutan untuk membuka tanah",
          "D": "Mengabaikan masalah kerana aras laut tidak akan berubah"
        },
        "correct_option": "A",
        "explanation_text": "Mengurangkan pelepasan gas rumah hijau menangani punca pemanasan global, manakala pembinaan benteng dan perancangan guna tanah pesisir membantu menyesuaikan diri dengan kenaikan aras laut."
      },
      {
        "id": "t2ge_b10_q1",
        "syllabus_node_id": "t2_geografi_b10",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud teknologi hijau?",
        "options_json": {
          "A": "Teknologi yang hanya digunakan dalam pertanian",
          "B": "Teknologi yang dibangunkan untuk mengurangkan kesan negatif terhadap alam sekitar",
          "C": "Teknologi yang menambah pencemaran alam",
          "D": "Teknologi yang menggunakan bahan api fosil sepenuhnya"
        },
        "correct_option": "B",
        "explanation_text": "Teknologi hijau ialah teknologi yang dibangunkan untuk mengurangkan kesan negatif terhadap alam sekitar, contohnya melalui tenaga boleh baharu dan kitar semula."
      },
      {
        "id": "t2ge_b10_q2",
        "syllabus_node_id": "t2_geografi_b10",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara berikut, yang manakah sumber tenaga boleh baharu?",
        "options_json": {
          "A": "Arang batu",
          "B": "Petroleum",
          "C": "Tenaga suria",
          "D": "Gas asli"
        },
        "correct_option": "C",
        "explanation_text": "Tenaga suria ialah sumber tenaga boleh baharu yang tidak akan habis, berbeza daripada arang batu, petroleum dan gas asli yang merupakan bahan api fosil."
      },
      {
        "id": "t2ge_b10_q3",
        "syllabus_node_id": "t2_geografi_b10",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud amalan 3R?",
        "options_json": {
          "A": "Reduce, Remove, Repair",
          "B": "Read, Reuse, Rewrite",
          "C": "Recycle, Redo, Replace",
          "D": "Reduce, Reuse, Recycle"
        },
        "correct_option": "D",
        "explanation_text": "Amalan 3R merujuk kepada Reduce (kurangkan), Reuse (guna semula) dan Recycle (kitar semula) dalam pengurusan sisa."
      },
      {
        "id": "t2ge_b10_q4",
        "syllabus_node_id": "t2_geografi_b10",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah tenaga hidro sesuai dibangunkan di kawasan tanah tinggi Malaysia?",
        "options_json": {
          "A": "Kerana aliran sungai yang deras sesuai untuk memutarkan turbin penjana elektrik",
          "B": "Kerana kawasan itu tidak mempunyai penduduk",
          "C": "Kerana tanah tinggi tidak menerima hujan",
          "D": "Kerana tanah tinggi lebih panas daripada tanah pamah"
        },
        "correct_option": "A",
        "explanation_text": "Kawasan tanah tinggi mempunyai aliran sungai yang deras, dan aliran ini sesuai untuk memutarkan turbin penjana elektrik di empangan hidro."
      },
      {
        "id": "t2ge_b10_q5",
        "syllabus_node_id": "t2_geografi_b10",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kilang beralih daripada arang batu kepada tenaga suria. Apakah kesan paling langsung?",
        "options_json": {
          "A": "Bilangan pekerja kilang bertambah secara automatik",
          "B": "Pelepasan karbon dioksida berkurang",
          "C": "Kilang berhenti beroperasi sepenuhnya",
          "D": "Pengeluaran kilang bertambah tanpa had"
        },
        "correct_option": "B",
        "explanation_text": "Beralih daripada arang batu kepada tenaga suria mengurangkan pelepasan karbon dioksida, kerana penjanaan elektrik daripada tenaga suria tidak membebaskan gas rumah hijau."
      },
      {
        "id": "t2ge_b11_q1",
        "syllabus_node_id": "t2_geografi_b11",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah langkah paling mudah yang boleh dilakukan oleh murid untuk mengurangkan pemanasan global?",
        "options_json": {
          "A": "Menambah penggunaan penghawa dingin",
          "B": "Membakar sampah di halaman rumah",
          "C": "Mengamalkan amalan 3R dan menjimatkan penggunaan elektrik",
          "D": "Menggunakan kenderaan sendiri untuk setiap perjalanan"
        },
        "correct_option": "C",
        "explanation_text": "Amalan 3R dan penjimatan elektrik mengurangkan jumlah sampah yang dihantar ke tapak pelupusan serta pelepasan gas rumah hijau daripada penjanaan elektrik."
      },
      {
        "id": "t2ge_b11_q2",
        "syllabus_node_id": "t2_geografi_b11",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah perbezaan antara langkah mitigasi dengan langkah adaptasi dalam menangani pemanasan global?",
        "options_json": {
          "A": "Mitigasi menambah pencemaran, adaptasi mengurangkannya",
          "B": "Mitigasi dilakukan oleh kerajaan sahaja, adaptasi oleh individu sahaja",
          "C": "Kedua-duanya mempunyai maksud yang sama",
          "D": "Mitigasi mengurangkan punca, adaptasi menyesuaikan diri dengan kesan"
        },
        "correct_option": "D",
        "explanation_text": "Langkah mitigasi mengurangkan punca pemanasan global seperti pelepasan gas rumah hijau, manakala langkah adaptasi menyesuaikan diri dengan kesan yang sudah berlaku seperti kenaikan aras laut."
      },
      {
        "id": "t2ge_b11_q3",
        "syllabus_node_id": "t2_geografi_b11",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara berikut, yang manakah contoh bangunan hijau?",
        "options_json": {
          "A": "Bangunan yang menggunakan panel suria dan sistem pengumpulan air hujan",
          "B": "Bangunan yang dicat warna hijau sahaja",
          "C": "Bangunan yang menggunakan penghawa dingin pada suhu paling rendah",
          "D": "Bangunan yang dibina tanpa tingkap"
        },
        "correct_option": "A",
        "explanation_text": "Bangunan hijau menggunakan ciri seperti panel suria, pengumpulan air hujan, pengudaraan semula jadi dan bahan binaan lestari untuk mengurangkan penggunaan tenaga."
      },
      {
        "id": "t2ge_b11_q4",
        "syllabus_node_id": "t2_geografi_b11",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah kelestarian alam memerlukan perubahan tingkah laku dan bukan hanya teknologi?",
        "options_json": {
          "A": "Kerana teknologi hijau tidak boleh digunakan oleh individu",
          "B": "Kerana teknologi hanya berkesan jika disertai amalan harian seperti penjimatan tenaga dan pengurangan sisa",
          "C": "Kerana kerajaan sahaja yang bertanggungjawab ke atas alam sekitar",
          "D": "Kerana perubahan tingkah laku tidak memberi sebarang kesan"
        },
        "correct_option": "B",
        "explanation_text": "Teknologi hijau hanya berkesan sepenuhnya jika disertai perubahan tingkah laku seperti penjimatan tenaga, pengurangan sisa dan penggunaan pengangkutan awam dalam kehidupan harian."
      },
      {
        "id": "t2ge_b11_q5",
        "syllabus_node_id": "t2_geografi_b11",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah bandar ingin mengurangkan pelepasan karbon dengan berkesan. Antara berikut, yang manakah gabungan langkah paling menyeluruh?",
        "options_json": {
          "A": "Menambah bilangan kenderaan persendirian dan tapak pelupusan",
          "B": "Membakar lebih banyak arang batu untuk menjana elektrik",
          "C": "Pengangkutan awam, tenaga boleh baharu, penanaman semula hutan dan pengurusan sisa",
          "D": "Menebang hutan untuk membina lebih banyak kilang"
        },
        "correct_option": "C",
        "explanation_text": "Mengurangkan pelepasan karbon secara berkesan memerlukan gabungan langkah: memperbaiki pengangkutan awam, beralih kepada tenaga boleh baharu, menanam semula hutan dan menguruskan sisa dengan baik."
      }
    ]
  };
});
