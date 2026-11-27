/**
 * Generated from js/data/diagnostic_t2_sains.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.t2 = App.DiagnosticBanks.t2 || {};
    App.DiagnosticBanks.t2.sains = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "t2_sains_b01",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "biodiversiti",
        "topic_name": "Bab 1: Biodiversiti",
        "subtopic_name": "Pengelasan Organisma, Kekunci Dikotomi & Pemuliharaan Biodiversiti",
        "prerequisite_node_id": null,
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_sains_b02",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "ekosistem",
        "topic_name": "Bab 2: Ekosistem",
        "subtopic_name": "Aliran Tenaga, Kitar Nutrien & Interaksi dalam Ekosistem",
        "prerequisite_node_id": "t2_sains_b01",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      },
      {
        "id": "t2_sains_b03",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "nutrisi",
        "topic_name": "Bab 3: Nutrisi",
        "subtopic_name": "Kelas Makanan, Pencernaan Enzim & Nilai Kalori Makanan",
        "prerequisite_node_id": null,
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b04",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "kesihatan",
        "topic_name": "Bab 4: Kesihatan Manusia",
        "subtopic_name": "Penyakit Berjangkit, Barisan Pertahanan Badan & Keimunan",
        "prerequisite_node_id": "t2_sains_b03",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_sains_b05",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "air_larutan",
        "topic_name": "Bab 5: Air dan Larutan",
        "subtopic_name": "Sifat Fizikal Air, Keterlarutan, Pelarut Organik & Pembersihan Air",
        "prerequisite_node_id": null,
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_sains_b06",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "asid_alkali",
        "topic_name": "Bab 6: Asid dan Alkali",
        "subtopic_name": "Sifat Asid dan Alkali, Skala pH, Penunjuk & Peneutralan",
        "prerequisite_node_id": "t2_sains_b05",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b07",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "elektrik_magnet",
        "topic_name": "Bab 7: Keelektrikan dan Kemagnetan",
        "subtopic_name": "Elektrostatik, Hukum Ohm, Litar Siri/Selari & Elektromagnet",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b08",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "daya_gerakan",
        "topic_name": "Bab 8: Daya dan Gerakan",
        "subtopic_name": "Jenis Daya, Momen Daya Tuas, Keapungan & Tekanan",
        "prerequisite_node_id": "t2_sains_b07",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b09",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "haba",
        "topic_name": "Bab 9: Haba",
        "subtopic_name": "Pengaliran Haba, Keseimbangan Terma & Pengembangan Bahan",
        "prerequisite_node_id": "t2_sains_b05",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_sains_b10",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "gelombang_bunyi",
        "topic_name": "Bab 10: Gelombang Bunyi",
        "subtopic_name": "Frekuensi, Amplitud, Pantulan Gema & Had Pendengaran",
        "prerequisite_node_id": "t2_sains_b08",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b11",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "bintang_galaksi",
        "topic_name": "Bab 11: Bintang dan Galaksi dalam Alam Semesta",
        "subtopic_name": "Bentuk Galaksi, Kitar Hidup Bintang & Pengelasan Ciri Bintang",
        "prerequisite_node_id": null,
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "t2_sains_b12",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "sistem_suria",
        "topic_name": "Bab 12: Sistem Suria",
        "subtopic_name": "Unit Astronomi (AU), Tahun Cahaya & Ciri Planet Sistem Suria",
        "prerequisite_node_id": "t2_sains_b11",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_sains_b13",
        "subject": "sains",
        "grade_level": "t2",
        "chapter_id": "sistem_suria",
        "topic_name": "Bab 13: Meteoroid, Asteroid, Komet",
        "subtopic_name": "Ciri Fizikal, Pergerakan Orbit & Kesan Hentaman Jasad Lain",
        "prerequisite_node_id": "t2_sains_b12",
        "expected_time_ms": 35000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "t2s_b01_q1",
        "syllabus_node_id": "t2_sains_b01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara kumpulan haiwan vertebrata berikut, pasangan manakah yang bersifat poikiloterma dan melakukan persenyawaan luar?",
        "options_json": {
          "A": "Ikan keli dan salamander",
          "B": "Buaya dan penyu hijau",
          "C": "Burung merpati dan penguin",
          "D": "Kucing hutan dan ikan lumba-lumba"
        },
        "correct_option": "A",
        "explanation_text": "Ikan (seperti ikan keli) dan amfibia (seperti salamander) adalah poikiloterma (berdarah sejuk) yang lazimnya melakukan persenyawaan luar di dalam air. Pilihan B ialah reptilia yang melakukan persenyawaan dalam; pilihan C dan D ialah burung serta mamalia yang bersifat homoioterma dan melakukan persenyawaan dalam."
      },
      {
        "id": "t2s_b01_q2",
        "syllabus_node_id": "t2_sains_b01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sekumpulan haiwan invertebrata mempunyai badan bersegmen yang lembut, hidup di dalam tanah lembap dan tidak mempunyai sebarang kaki. Apakah contoh haiwan yang tergolong dalam kumpulan ini?",
        "options_json": {
          "A": "Kala jengking dan ketam batu",
          "B": "Cacing tanah dan lintah",
          "C": "Belalang kunyit dan kumbang",
          "D": "Gonggok dan lipan bara"
        },
        "correct_option": "B",
        "explanation_text": "Cacing tanah dan lintah ialah invertebrata tanpa kaki yang mempunyai badan bersegmen. Pilihan A (araknid dan krustasea) mempunyai lebih daripada tiga pasang kaki; pilihan C (serangga) mempunyai tiga pasang kaki; pilihan D (miriapod) mempunyai banyak pasang kaki."
      },
      {
        "id": "t2s_b01_q3",
        "syllabus_node_id": "t2_sains_b01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Seorang murid meneliti sebatang pokok keembung di taman sains dan mendapati pokok tersebut berbatang lembut, mempunyai daun berurat jejala serta akar tunjang. Bagaimanakah pokok ini dikelaskan?",
        "options_json": {
          "A": "Tumbuhan tidak berbunga jenis konifer",
          "B": "Tumbuhan berbunga jenis monokotiledon",
          "C": "Tumbuhan berbunga jenis dikotiledon",
          "D": "Tumbuhan vaskular yang membiak melalui spora"
        },
        "correct_option": "C",
        "explanation_text": "Urat daun jejala dan akar tunjang merupakan ciri utama tumbuhan berbunga dikotiledon (biji benih mempunyai dua kotiledon), walaupun sesetengahnya berbatang lembut seperti pokok keembung. Pilihan A dan D ialah tumbuhan tidak berbunga; pilihan B (monokotiledon) berurat daun selari dan berakar serabut."
      },
      {
        "id": "t2s_b01_q4",
        "syllabus_node_id": "t2_sains_b01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Berdasarkan kekunci dikotomi bertulis: 1a Bertulang belakang (pergi ke 2), 1b Tidak bertulang belakang (cacing); 2a Homoioterma (pergi ke 3), 2b Poikiloterma (ikan); 3a Mempunyai bulu pelepah (burung helang), 3b Tidak mempunyai bulu pelepah dan bertelur (Haiwan X). Apakah Haiwan X?",
        "options_json": {
          "A": "Penyu belimbing",
          "B": "Kelawar buah",
          "C": "Platipus",
          "D": "Ikan paus biru"
        },
        "correct_option": "C",
        "explanation_text": "Mengikut laluan kekunci dikotomi: bertulang belakang (vertebrata), homoioterma (berdarah panas), tiada bulu pelepah (bukan burung) tetapi bertelur merujuk kepada mamalia bertelur iaitu platipus. Pilihan A ialah reptilia yang bersifat poikiloterma; pilihan B dan D ialah mamalia yang melahirkan anak."
      },
      {
        "id": "t2s_b01_q5",
        "syllabus_node_id": "t2_sains_b01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Populasi badak Sumatera di hutan simpan menghadapi risiko kepupusan kritikal akibat pemburuan haram dan kehilangan habitat. Langkah manakah yang menggabungkan pemuliharaan in-situ dan ex-situ secara paling tepat?",
        "options_json": {
          "A": "Membenarkan pemburuan bermusim terkawal sambil mengutip sampel tanah hutan",
          "B": "Memindahkan semua hidupan liar ke zoo bandar dan menebang hutan asal untuk pertanian",
          "C": "Mengimport spesies badak dari benua lain untuk menggantikan spesies tempatan yang semakin pupus",
          "D": "Mewartakan Taman Negara sebagai kawasan perlindungan serta menjalankan pembiakan berbantu di pusat santuari berasingan"
        },
        "correct_option": "D",
        "explanation_text": "Pemuliharaan in-situ mengekalkan spesies di habitat semula jadinya (seperti mewartakan Taman Negara), manakala ex-situ melindungi dan membiakkan spesies di luar habitat asal (seperti pusat santuari atau zoo). Pilihan B memusnahkan habitat asal; pilihan C memperkenalkan spesies asing yang boleh mengganggu ekosistem; pilihan A meningkatkan ancaman kepupusan."
      },
      {
        "id": "t2s_b02_q1",
        "syllabus_node_id": "t2_sains_b02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pokok paku pakis langsuyar tumbuh melekat pada dahan tinggi pokok kelapa sawit untuk memperoleh lebih banyak cahaya matahari tanpa menyerap nutrien daripada pokok sawit tersebut. Apakah jenis interaksi antara kedua-dua organisma ini?",
        "options_json": {
          "A": "Mutualisme",
          "B": "Parasitisme",
          "C": "Persaingan",
          "D": "Komensalisme"
        },
        "correct_option": "D",
        "explanation_text": "Komensalisme ialah interaksi antara dua organisma yang memberi manfaat kepada satu pihak (paku pakis mendapat cahaya matahari) manakala pihak satu lagi (pokok sawit) tidak untung dan tidak rugi. Pilihan A memberi faedah kepada kedua-duanya; pilihan B merugikan perumah; pilihan C berlaku apabila organisma merebut sumber terhad."
      },
      {
        "id": "t2s_b02_q2",
        "syllabus_node_id": "t2_sains_b02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Dalam satu siratan makanan di ladang jagung, belalang memakan pokok jagung, katak memakan belalang, dan burung helang memakan katak. Apakah kesan serta-merta sekiranya wabak penyakit menyebabkan populasi katak berkurang secara mendadak?",
        "options_json": {
          "A": "Populasi pokok jagung meningkat dengan cepat",
          "B": "Populasi burung helang bertambah kerana kurang pesaing",
          "C": "Populasi belalang meningkat dan hasil pokok jagung berkurang",
          "D": "Populasi belalang merosot dan katak digantikan oleh jagung"
        },
        "correct_option": "C",
        "explanation_text": "Apabila katak berkurang, kurang pemangsa yang memakan belalang sehingga bilangan belalang melonjak dan merosakkan lebih banyak pokok jagung. Pilihan B salah kerana helang kehilangan sumber makanannya dan akan berkurang; pilihan A terbalik kesannya; pilihan D menyalahi peranan pengeluar."
      },
      {
        "id": "t2s_b02_q3",
        "syllabus_node_id": "t2_sains_b02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Bagaimanakah aktiviti penyahhutanan secara besar-besaran menjejaskan kitar air dan kitar karbon di sesuatu kawasan?",
        "options_json": {
          "A": "Kadar transpirasi dan fotosintesis meningkat lalu menyejukkan bumi",
          "B": "Kadar transpirasi menurun dan penyerapan karbon dioksida berkurang",
          "C": "Penyejatan lautan terhenti sepenuhnya dan gas oksigen berganda",
          "D": "Pembentukan awan bertambah kerana tiada daun yang menghalang wap air"
        },
        "correct_option": "B",
        "explanation_text": "Kehilangan pokok mengurangkan transpirasi yang membebaskan wap air ke atmosfera serta mengurangkan fotosintesis yang menyerap karbon dioksida. Pilihan A dan C bercanggah dengan peranan tumbuhan; pilihan D salah kerana transpirasi pokok menyumbang wap air penting bagi pembentukan awan."
      },
      {
        "id": "t2s_b02_q4",
        "syllabus_node_id": "t2_sains_b02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Satu penyiasatan mendapati kutu kayu paling banyak ditemui di bawah timbunan daun reput yang teduh berbanding di atas permukaan batu yang terdedah kepada cahaya terik. Kombinasi faktor abiosis manakah yang paling mempengaruhi taburan kutu kayu tersebut?",
        "options_json": {
          "A": "Kelembapan tinggi dan keamatan cahaya rendah",
          "B": "Suhu tinggi dan keamatan cahaya tinggi",
          "C": "Kelembapan rendah dan tiupan angin kencang",
          "D": "Kadar oksigen sifar dan keamatan cahaya tinggi"
        },
        "correct_option": "A",
        "explanation_text": "Kutu kayu memilih habitat lembap dan gelap atau teduh (keamatan cahaya rendah) di bawah daun reput bagi mengelakkan kehilangan air dari badannya. Pilihan B, C dan D menerangkan keadaan persekitaran kering atau terdedah yang mengeringkan organisma kecil seperti kutu kayu."
      },
      {
        "id": "t2s_b02_q5",
        "syllabus_node_id": "t2_sains_b02",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Dalam suatu ekosistem padang rumput, pengeluar menyimpan 50 000 kJ tenaga kimia melalui fotosintesis. Jika anggaran 90% tenaga hilang pada setiap pemindahan aras trofik melalui respirasi dan haba, berapakah jumlah tenaga yang sampai kepada pengguna tertier?",
        "options_json": {
          "A": "5000 kJ",
          "B": "500 kJ",
          "C": "50 kJ",
          "D": "4500 kJ"
        },
        "correct_option": "C",
        "explanation_text": "Hanya 10% tenaga dipindahkan ke aras trofik seterusnya: pengguna primer menerima 10% × 50 000 = 5000 kJ, pengguna sekunder menerima 10% × 5000 = 500 kJ, dan pengguna tertier menerima 10% × 500 = 50 kJ. Pilihan A ialah tenaga di aras pengguna primer; pilihan B di aras pengguna sekunder; pilihan D silap mengira 9% daripada 50 000.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round(50000 * 0.1 * 0.1 * 0.1) + ' kJ';",
          "ans": "50 kJ"
        }
      },
      {
        "id": "t2s_b03_q1",
        "syllabus_node_id": "t2_sains_b03",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apabila sekeping roti tawar dikunyah perlahan-lahan di dalam mulut, ia mula berasa agak manis selepas beberapa saat. Enzim dan tindak balas manakah yang menyebabkan perubahan rasa ini?",
        "options_json": {
          "A": "Pepsin menukarkan protein roti kepada polipeptida",
          "B": "Amilase air liur mencernakan kanji kepada maltosa",
          "C": "Lipase menguraikan lemak kepada asid lemak",
          "D": "Asid hidroklorik melarutkan pelawas menjadi glukosa"
        },
        "correct_option": "B",
        "explanation_text": "Air liur mengandungi enzim amilase yang menghidrolisiskan kanji (tidak manis) di dalam roti kepada gula ringkas iaitu maltosa yang berasa manis. Pilihan A berlaku di perut; pilihan C mencernakan lemak di usus kecil; pilihan D salah kerana asid hidroklorik dirembes di perut dan pelawas tidak dicernakan."
      },
      {
        "id": "t2s_b03_q2",
        "syllabus_node_id": "t2_sains_b03",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Seorang pelajar menguji sampel susu kacang soya dengan menambahkan beberapa titik etanol ke dalam tabung uji berisi sampel, menggoncangnya, lalu menuangkan sedikit air suling dan memerhatikan pembentukan emulsi putih keruh. Apakah kesimpulan ujian makanan tersebut?",
        "options_json": {
          "A": "Sampel mengandungi lemak",
          "B": "Sampel mengandungi kanji",
          "C": "Sampel mengandungi glukosa",
          "D": "Sampel mengandungi protein"
        },
        "correct_option": "A",
        "explanation_text": "Ujian emulsi etanol menghasilkan mendakan atau emulsi putih keruh apabila lemak atau minyak hadir kerana lemak larut dalam etanol lalu membentuk titisan halus apabila bercampur air. Pilihan B diuji menggunakan larutan iodin; pilihan C dengan larutan Benedict; pilihan D dengan reagen Millon."
      },
      {
        "id": "t2s_b03_q3",
        "syllabus_node_id": "t2_sains_b03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Padanan manakah yang benar antara enzim pencernaan yang bertindak di usus kecil dengan hasil akhir pencernaannya sebelum diserap oleh vilus?",
        "options_json": {
          "A": "Protease -> Asid lemak dan gliserol",
          "B": "Lipase -> Maltosa dan sukrosa",
          "C": "Amilase pankreas -> Polipeptida",
          "D": "Protease -> Asid amino"
        },
        "correct_option": "D",
        "explanation_text": "Enzim protease di usus kecil mencernakan polipeptida kepada hasil akhir ringkas iaitu asid amino yang boleh meresap ke dalam kapilari darah vilus. Pilihan A menyalahpadankan hasil pencernaan lemak; pilihan B dan C menyalahpadankan substrat dan produk enzim."
      },
      {
        "id": "t2s_b03_q4",
        "syllabus_node_id": "t2_sains_b03",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Nilai kalori per 100 g bagi tiga jenis makanan adalah seperti berikut: roti putih = 1000 kJ, telur rebus = 650 kJ, dan jus oren = 180 kJ. Jika Farah mengambil sarapan yang terdiri daripada 150 g roti putih, 100 g telur rebus dan 250 g jus oren, berapakah jumlah tenaga yang diperolehnya?",
        "options_json": {
          "A": "1830 kJ",
          "B": "2150 kJ",
          "C": "2600 kJ",
          "D": "2850 kJ"
        },
        "correct_option": "C",
        "explanation_text": "Hitung mengikut jisim setiap makanan: Roti = (150 ÷ 100) × 1000 = 1500 kJ; Telur = (100 ÷ 100) × 650 = 650 kJ; Jus oren = (250 ÷ 100) × 180 = 450 kJ. Jumlah = 1500 + 650 + 450 = 2600 kJ. Pilihan A hanya menjumlahkan nilai per 100 g tanpa darab jisim; pilihan B dan D hasil salah darab pecahan jisim.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (1.5 * 1000 + 1 * 650 + 2.5 * 180) + ' kJ';",
          "ans": "2600 kJ"
        }
      },
      {
        "id": "t2s_b03_q5",
        "syllabus_node_id": "t2_sains_b03",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Mengapakah seorang pekerja tapak pembinaan lelaki berusia 28 tahun memerlukan pengambilan kalori harian yang jauh lebih tinggi berbanding seorang kerani pejabat lelaki yang sebaya dan sama berat badannya?",
        "options_json": {
          "A": "Kadar metabolisme asas manusia berkurang apabila aktiviti otot bertambah",
          "B": "Kerani pejabat menyerap tenaga elektrik daripada komputer untuk menggantikan makanan",
          "C": "Pekerja binaan tidak memerlukan protein tetapi hanya memerlukan vitamin larut air",
          "D": "Kerja fizikal berat memerlukan kadar respirasi sel otot yang lebih tinggi untuk menjana tenaga"
        },
        "correct_option": "D",
        "explanation_text": "Individu yang melakukan kerja fizikal berat menggunakan lebih banyak tenaga mekanikal, menyebabkan sel otot menjalani respirasi sel pada kadar lebih tinggi dan memerlukan lebih banyak kalori. Pilihan B tidak saintifik; pilihan C salah kerana pekerja binaan tetap perlukan protein untuk membaiki tisu; pilihan A bertentangan dengan fisiologi."
      },
      {
        "id": "t2s_b04_q1",
        "syllabus_node_id": "t2_sains_b04",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Penyakit kurap dan panau mudah merebak di asrama apabila penghuninya berkongsi tuala mandi atau pakaian yang lembap. Bagaimanakah penyakit tersebut dikelaskan dan disebarkan?",
        "options_json": {
          "A": "Penyakit bawaan vektor nyamuk tiruk",
          "B": "Penyakit tidak berjangkit akibat kurang pelawas",
          "C": "Penyakit bawaan air yang tercemar najis",
          "D": "Penyakit berjangkit melalui sentuhan kulit yang disebabkan oleh kulat"
        },
        "correct_option": "D",
        "explanation_text": "Kurap dan panau ialah jangkitan kulat pada kulit yang merebak melalui sentuhan langsung atau perkongsian barangan peribadi seperti tuala. Pilihan A merujuk kepada malaria; pilihan B salah kerana ia penyakit berjangkit; pilihan C merujuk kepada taun atau demam kepialu."
      },
      {
        "id": "t2s_b04_q2",
        "syllabus_node_id": "t2_sains_b04",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Ketika membersihkan stor rumah yang berhabuk dan digenangi air kencing tikus selepas banjir, seorang lelaki terdedah kepada sejenis bakteria berbentuk spiral melalui luka kecil di kakinya. Apakah penyakit yang berisiko dihidapi oleh lelaki itu?",
        "options_json": {
          "A": "Leptospirosis",
          "B": "Demam denggi",
          "C": "Influenza A",
          "D": "Malaria"
        },
        "correct_option": "A",
        "explanation_text": "Leptospirosis (penyakit kencing tikus) disebabkan oleh bakteria Leptospira yang terdapat dalam air atau tanah tercemar air kencing haiwan pembawa seperti tikus. Pilihan B dan C ialah jangkitan virus (nyamuk Aedes dan titisan udara); pilihan D disebabkan oleh protozoa Plasmodium melalui nyamuk Anopheles."
      },
      {
        "id": "t2s_b04_q3",
        "syllabus_node_id": "t2_sains_b04",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Selain kulit yang bertindak sebagai penghalang fizikal, bagaimanakah membran mukus di saluran pernafasan membantu barisan pertahanan pertama badan melawan patogen?",
        "options_json": {
          "A": "Merembeskan antibodi spesifik terus ke dalam aliran darah",
          "B": "Merembeskan mukus melekit untuk memerangkap habuk dan patogen sebelum disingkirkan oleh silia",
          "C": "Menjalankan fagositosis dengan menelan sel darah merah yang tua",
          "D": "Menghasilkan asid hidroklorik pekat untuk membekukan darah di peparu"
        },
        "correct_option": "B",
        "explanation_text": "Membran mukus di trakea dan bronkus merembeskan mukus untuk memerangkap debu serta mikroorganisma, manakala silia menyapu mukus keluar ke tekak sebagai barisan pertahanan pertama. Pilihan A ialah barisan pertahanan ketiga; pilihan C ialah barisan kedua; pilihan D berlaku di perut."
      },
      {
        "id": "t2s_b04_q4",
        "syllabus_node_id": "t2_sains_b04",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Seorang pekebun yang dipatuk ular tedung dikejarkan ke hospital dan segera diberikan suntikan antiserum untuk menyelamatkan nyawanya. Apakah jenis keimunan yang diperoleh pekebun tersebut dan ciri perlindungannya?",
        "options_json": {
          "A": "Keimunan aktif buatan; tahan seumur hidup",
          "B": "Keimunan aktif semula jadi; mengambil masa beberapa minggu untuk bertindak",
          "C": "Keimunan pasif buatan; bertindak serta-merta tetapi bersifat sementara",
          "D": "Keimunan pasif semula jadi; merangsang sel limfosit menghasilkan antibodi sendiri"
        },
        "correct_option": "C",
        "explanation_text": "Suntikan antiserum membekalkan antibodi sedia ada daripada luar kepada pesakit (keimunan pasif buatan) untuk meneutralkan racun dengan serta-merta, tetapi antibodi ini akan terurai dan hanya memberi perlindungan sementara. Pilihan A dan B melibatkan badan menghasilkan antibodi sendiri; pilihan D merujuk kepada penyusuan ibu."
      },
      {
        "id": "t2s_b04_q5",
        "syllabus_node_id": "t2_sains_b04",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Bagi sesetengah penyakit seperti hepatitis B dan COVID-19, suntikan vaksin dos pertama hanya menghasilkan kepekatan antibodi yang rendah di bawah aras keimunan. Mengapakah dos penggalak (dos kedua) perlu diberikan beberapa minggu kemudian?",
        "options_json": {
          "A": "Kerana dos pertama musnah di dalam perut sebelum sempat memasuki aliran darah",
          "B": "Untuk menggantikan sel darah putih yang mati akibat dos pertama dengan antibodi lemah",
          "C": "Supaya vaksin bertindak sebagai antiserum sementara dan tidak merangsang sistem imun",
          "D": "Untuk mencetuskan sel memori limfosit menghasilkan kepekatan antibodi lebih tinggi dan pantas melepasi aras keimunan"
        },
        "correct_option": "D",
        "explanation_text": "Dos pertama merangsang pembentukan sel memori; apabila dos penggalak diberikan, sel memori bertindak balas jauh lebih pantas dan merembeskan antibodi yang mencukupi melepasi aras keimunan bagi perlindungan jangka panjang. Pilihan B, C dan A bercanggah dengan mekanisme pemvaksinan."
      },
      {
        "id": "t2s_b05_q1",
        "syllabus_node_id": "t2_sains_b05",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Serangga kecil seperti ayak-ayak dapat bergerak di atas permukaan air kolam tanpa tenggelam walaupun ketumpatan badannya lebih tinggi daripada air. Sifat fizik air manakah yang membolehkan fenomena ini berlaku?",
        "options_json": {
          "A": "Daya lekatan air yang sifar",
          "B": "Ketegangan permukaan air yang tinggi akibat daya lekitan antara molekul air",
          "C": "Keupayaan air membeku pada suhu 0 darjah Celsius",
          "D": "Keterlarutan gas oksigen di dalam air kolam"
        },
        "correct_option": "B",
        "explanation_text": "Daya lekitan yang kuat antara molekul air menghasilkan ketegangan permukaan yang bertindak seperti selaput nipis dan menyokong serangga ringan di permukaan air. Pilihan A salah kerana air mempunyai daya lekatan; pilihan C dan D tidak berkaitan dengan sokongan berat serangga di permukaan."
      },
      {
        "id": "t2s_b05_q2",
        "syllabus_node_id": "t2_sains_b05",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Seorang murid melarutkan serbuk kuprum(II) sulfat sedikit demi sedikit ke dalam 100 ml air pada suhu 30 °C sambil mengacau sehingga hablur biru tidak lagi melarut dan mula mendak di dasar bikar. Apakah jenis larutan yang terbentuk dan bagaimana mendakan itu boleh dilarutkan semula?",
        "options_json": {
          "A": "Larutan cair; sejukkan larutan ke dalam ketulan ais",
          "B": "Ampaian; tapis larutan dengan kertas turas",
          "C": "Larutan tepu; panaskan larutan atau tambahkan lagi pelarut air",
          "D": "Larutan pekat tidak tepu; biarkan larutan terdedah kepada angin"
        },
        "correct_option": "C",
        "explanation_text": "Apabila pelarut mengandungi kuantiti maksimum zat terlarut pada suhu tertentu, ia menjadi larutan tepu dan lebihan pepejal akan mendak. Keterlarutan kebanyakan pepejal bertambah apabila suhu dinaikkan atau isi padu pelarut ditambah. Pilihan A menurunkan keterlarutan; pilihan B menyingkirkan hablur, bukan melarutkannya; pilihan D menyebabkan penyejatan."
      },
      {
        "id": "t2s_b05_q3",
        "syllabus_node_id": "t2_sains_b05",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Aiman tertumpah sedikit cat minyak pada berus lukisan dan tidak dapat mencucinya menggunakan air paip biasa. Pelarut bukan air manakah yang paling sesuai digunakan untuk melarutkan cat minyak tersebut?",
        "options_json": {
          "A": "Air suling panas",
          "B": "Turpentin",
          "C": "Larutan garam pekat",
          "D": "Cuka makan"
        },
        "correct_option": "B",
        "explanation_text": "Turpentin ialah pelarut organik (bukan air) yang lazim digunakan untuk melarutkan cat minyak, tar dan varnis kerana cat minyak tidak larut dalam air. Pilihan A, C dan D berasaskan air yang tidak mampu melarutkan sebatian cat berasaskan minyak."
      },
      {
        "id": "t2s_b05_q4",
        "syllabus_node_id": "t2_sains_b05",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Di loji rawatan air minuman, kapur mati (kalsium hidroksida) sering dimasukkan bersama tawas pada peringkat penggumpalan. Apakah tujuan utama penambahan kapur mati tersebut?",
        "options_json": {
          "A": "Menambahkan rasa masin dan menyingkirkan bau hanyir air sungai",
          "B": "Membunuh semua bakteria dan virus di dalam tangki pengoksidaan",
          "C": "Meneutralkan atau mengurangkan keasidan air mentah supaya tidak menghakis paip",
          "D": "Mencegah kerosakan gigi penduduk yang menggunakan air terawat"
        },
        "correct_option": "C",
        "explanation_text": "Kapur mati bersifat alkali dan ditambah untuk mengurangkan keasidan air mentah serta membantu pengikatan lumpur oleh tawas. Pilihan B ialah tugas klorin; pilihan A ialah tugas penapisan karbon diaktifkan bagi bau; pilihan D ialah fungsi natrium fluorida semasa pemfluoridaan."
      },
      {
        "id": "t2s_b05_q5",
        "syllabus_node_id": "t2_sains_b05",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sekumpulan pengakap terkandas di pulau terpencil dan hanya mempunyai air laut yang keruh bercampur pasir. Mereka menuras air itu dengan kain bersih untuk mendapatkan air jernih. Mengapakah air turasan itu masih tidak selamat diminum dan kaedah manakah yang sepatutnya dipilih?",
        "options_json": {
          "A": "Penurasan tidak menyingkirkan garam terlarut dan mikroorganisma; gunakan kaedah penyulingan",
          "B": "Penurasan hanya menyingkirkan garam tetapi meninggalkan pasir; gunakan pengenapan sahaja",
          "C": "Penurasan menjadikan air beralkali kuat; campurkan cuka dan minum terus",
          "D": "Air laut tidak mengandungi bakteria; cukup dengan mengacau air turasan bersama tawas"
        },
        "correct_option": "A",
        "explanation_text": "Penurasan hanya memerangkap zarah terampai tidak larut (pasir), manakala ion garam terlarut dan mikroorganisma halus masih melepasi liang penuras. Penyulingan mendidihkan air lalu mengkondensasikan wap menjadi air tulen tanpa garam dan patogen. Pilihan B, C dan D tidak menyingkirkan garam atau kuman."
      },
      {
        "id": "t2s_b06_q1",
        "syllabus_node_id": "t2_sains_b06",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebanyak tiga titik penunjuk fenolftalein dititiskan ke dalam tiga tabung uji berasingan yang masing-masing mengandungi jus limau nipis, air suling dan larutan natrium hidroksida. Apakah pemerhatian warna yang tepat?",
        "options_json": {
          "A": "Merah jambu dalam jus limau, tidak berwarna dalam air suling dan merah jambu dalam natrium hidroksida",
          "B": "Tidak berwarna dalam jus limau dan air suling, serta bertukar merah jambu dalam natrium hidroksida",
          "C": "Kuning dalam jus limau, hijau dalam air suling dan ungu dalam natrium hidroksida",
          "D": "Merah dalam jus limau, jingga dalam air suling dan kuning dalam natrium hidroksida"
        },
        "correct_option": "B",
        "explanation_text": "Fenolftalein kekal tidak berwarna dalam larutan berasid (jus limau) dan neutral (air suling), tetapi bertukar menjadi merah jambu terang dalam larutan beralkali (natrium hidroksida). Pilihan A salah bagi jus limau; pilihan C menyerupai penunjuk semesta; pilihan D ialah perubahan warna metil jingga."
      },
      {
        "id": "t2s_b06_q2",
        "syllabus_node_id": "t2_sains_b06",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Berikut ialah bacaan meter pH bagi empat jenis larutan isi rumah: Cecair P = pH 2.4, Cecair Q = pH 7.0, Cecair R = pH 8.5, Cecair S = pH 13.2. Pernyataan manakah yang paling tepat?",
        "options_json": {
          "A": "Cecair P ialah alkali kuat manakala Cecair S ialah asid lemah",
          "B": "Cecair R lebih berasid daripada Cecair P",
          "C": "Cecair S mempunyai sifat kealkalian paling kuat manakala Cecair P bersifat asid",
          "D": "Cecair Q dan R kedua-duanya dapat bertindak balas dengan magnesium membebaskan hidrogen"
        },
        "correct_option": "C",
        "explanation_text": "Pada skala pH 0 hingga 14, nilai di bawah 7 adalah berasid (Cecair P = pH 2.4) dan nilai melebihi 7 adalah beralkali di mana pH 13.2 (Cecair S) menunjukkan alkali yang sangat kuat. Pilihan A dan B terbalik tafsiran skalanya; pilihan D salah kerana air neutral dan alkali tidak membebaskan hidrogen dengan magnesium seperti asid."
      },
      {
        "id": "t2s_b06_q3",
        "syllabus_node_id": "t2_sains_b06",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Dalam eksperimen pentitratan, 25 ml larutan kalium hidroksida dicampurkan beberapa titik fenolftalein di dalam kelalang kon, kemudian asid sulfurik cair dititiskan perlahan-lahan daripada buret sehingga campuran tepat bertukar daripada merah jambu menjadi tidak berwarna. Apakah produk yang terhasil pada takat akhir ini?",
        "options_json": {
          "A": "Kalium sulfat dan air pada pH 7",
          "B": "Kalium klorida dan gas hidrogen pada pH 2",
          "C": "Kalium hidroksida pepejal dan gas oksigen pada pH 12",
          "D": "Asid sulfurik pekat dan karbon dioksida pada pH 4"
        },
        "correct_option": "A",
        "explanation_text": "Tindak balas peneutralan antara asid sulfurik dengan kalium hidroksida menghasilkan garam kalium sulfat dan air yang neutral (pH 7), menyebabkan penunjuk fenolftalein bertukar tidak berwarna tepat pada takat akhir. Pilihan B, C dan D memberikan garam atau gas yang salah serta nilai pH tidak neutral."
      },
      {
        "id": "t2s_b06_q4",
        "syllabus_node_id": "t2_sains_b06",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Seorang pekebun mendapati tanah ladangnya terlalu berasid (pH 4.5) menyebabkan pertumbuhan pokok sayur terencat, manakala anaknya pula disengat tebuan yang bisanya bersifat alkali. Apakah pasangan bahan yang sesuai digunakan untuk menangani kedua-dua masalah ini secara peneutralan?",
        "options_json": {
          "A": "Baja urea untuk tanah; ubat gigi untuk sengatan tebuan",
          "B": "Garam dapur untuk tanah; air sabun untuk sengatan tebuan",
          "C": "Jus lemon untuk tanah; serbuk penaik untuk sengatan tebuan",
          "D": "Kapur mati (kalsium hidroksida) untuk tanah; cuka cair untuk sengatan tebuan"
        },
        "correct_option": "D",
        "explanation_text": "Tanah berasid dineutralkan dengan bahan beralkali seperti kapur mati atau serbuk batu kapur, manakala sengatan tebuan yang beralkali dineutralkan menggunakan asid lemah seperti cuka cair. Pilihan A menggunakan alkali untuk bisa alkali; pilihan C menambah asid kepada tanah berasid; pilihan B menggunakan bahan neutral dan alkali."
      },
      {
        "id": "t2s_b06_q5",
        "syllabus_node_id": "t2_sains_b06",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Hablur asid oksalik yang kering sepenuhnya diletakkan di atas sehelai kertas litmus biru yang kering, dan didapati warna kertas litmus tidak berubah. Namun, apabila beberapa titik air suling dititiskan, kertas litmus segera bertukar merah. Apakah inferens terbaik daripada pemerhatian ini?",
        "options_json": {
          "A": "Kertas litmus biru hanya rosak apabila bercampur air",
          "B": "Asid memerlukan air untuk mengion menghasilkan ion hidrogen bagi menunjukkan sifat keasidannya",
          "C": "Air suling bersifat sangat berasid dan menukar warna litmus biru",
          "D": "Asid oksalik bertukar menjadi alkali apabila bersentuhan dengan air"
        },
        "correct_option": "B",
        "explanation_text": "Dalam keadaan pepejal kontang, molekul asid tidak mengion; apabila dilarutkan dalam air, ion hidrogen dibebaskan dan inilah yang membolehkan asid menunjukkan sifat kimianya serta menukar litmus biru kepada merah. Pilihan A, C dan D tidak tepat secara kimia kerana air suling adalah neutral."
      },
      {
        "id": "t2s_b07_q1",
        "syllabus_node_id": "t2_sains_b07",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebatang rod politena digosok dengan kain sutera lalu didekatkan kepada ceper logam sebuah elektroskop yang neutral, menyebabkan kerajang emas di dalam elektroskop itu mencapah. Mengapakah kerajang emas tersebut mencapah?",
        "options_json": {
          "A": "Cas elektrik yang sama jenis teraruh pada kerajang emas dan batang logam lalu saling menolak",
          "B": "Haba daripada geseran kain memanaskan udara di dalam balang elektroskop",
          "C": "Medan magnet dari rod politena menarik kerajang emas ke atas",
          "D": "Arus elektrik ulang-alik mengalir terus melalui kaca penebat"
        },
        "correct_option": "A",
        "explanation_text": "Rod politena bercas negatif mengaruh cas positif pada ceper atas dan menolak elektron ke bawah menyebabkan batang serta kerajang emas sama-sama bercas negatif dan saling menolak (mencapah). Pilihan B, C dan D tidak menjelaskan prinsip aruhan elektrostatik."
      },
      {
        "id": "t2s_b07_q2",
        "syllabus_node_id": "t2_sains_b07",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Mengapakah lampu dan soket elektrik di dalam sebuah rumah kediaman disambungkan secara litar selari dan bukannya litar bersiri?",
        "options_json": {
          "A": "Supaya penggunaan dawai kuprum lebih pendek dan hanya satu suis utama diperlukan",
          "B": "Supaya apabila satu lampu padam, semua peralatan lain turut berhenti berfungsi demi keselamatan",
          "C": "Untuk memastikan jumlah rintangan litar rumah menjadi sebesar mungkin",
          "D": "Supaya setiap peralatan menerima voltan penuh yang sama dan boleh dikawal suis berasingan"
        },
        "correct_option": "D",
        "explanation_text": "Dalam litar selari, setiap cabang merentasi punca voltan yang sama dan mempunyai laluan arus tersendiri, membolehkan setiap lampu dihidupkan atau dimatikan secara berasingan tanpa memadamkan alat lain. Pilihan B dan C ialah ciri litar bersiri; pilihan A salah kerana litar selari menggunakan lebih banyak cabang pendawaian."
      },
      {
        "id": "t2s_b07_q3",
        "syllabus_node_id": "t2_sains_b07",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Berdasarkan Hukum Ohm, sebatang perintang bernilai 12 Ω disambungkan merentasi bekalan bateri bervoltan 9 V. Berapakah bacaan arus elektrik yang mengalir melalui perintang tersebut?",
        "options_json": {
          "A": "1.33 A",
          "B": "0.75 A",
          "C": "3 A",
          "D": "108 A"
        },
        "correct_option": "B",
        "explanation_text": "Mengikut Hukum Ohm, V = I × R, maka arus I = V ÷ R = 9 V ÷ 12 Ω = 0.75 A. Pilihan A (1.33 A) terbalik membahagi R ÷ V (12 ÷ 9); pilihan C menolak 12 - 9; pilihan D mendarab 12 × 9.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (9 / 12) + ' A';",
          "ans": "0.75 A"
        }
      },
      {
        "id": "t2s_b07_q4",
        "syllabus_node_id": "t2_sains_b07",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Dua buah perintang masing-masing berintangan 6 Ω dan 12 Ω disambungkan secara selari di dalam satu litar lengkap. Hitung rintangan berkesan bagi gabungan perintang tersebut.",
        "options_json": {
          "A": "18 Ω",
          "B": "9 Ω",
          "C": "4 Ω",
          "D": "2 Ω"
        },
        "correct_option": "C",
        "explanation_text": "Bagi litar selari, 1/R = 1/R₁ + 1/R₂ = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4, maka rintangan berkesan R = 4 Ω. Pilihan A (18 Ω) ialah jumlah rintangan jika disambung bersiri (6 + 12); pilihan B ialah purata kedua-duanya; pilihan D ialah hasil bahagi 12 ÷ 6.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return Math.round(1 / (1/6 + 1/12)) + ' Ω';",
          "ans": "4 Ω"
        }
      },
      {
        "id": "t2s_b07_q5",
        "syllabus_node_id": "t2_sains_b07",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Dalam pembinaan sebuah loceng elektrik dan kren elektromagnet di tapak besi buruk, mengapakah teras besi lembut dipilih bagi gegelung dawai dan bukannya teras keluli keras?",
        "options_json": {
          "A": "Besi lembut mudah dimagnetkan dan cepat kehilangan kemagnetannya sebaik sahaja arus elektrik diputuskan",
          "B": "Besi lembut mengekalkan kemagnetan kekal supaya besi buruk terus melekat walaupun suis dimatikan",
          "C": "Keluli tidak boleh mengalirkan haba dan mempunyai ketumpatan lebih rendah daripada plastik",
          "D": "Besi lembut menghasilkan voltan sendiri tanpa memerlukan bateri atau bekalan kuasa"
        },
        "correct_option": "A",
        "explanation_text": "Besi lembut bersifat magnet sementara yang kuat: ia menjadi magnet serta-merta apabila arus mengalir dan kehilangan kemagnetan dengan cepat apabila arus dihentikan, membolehkan pemukul loceng bergetar atau beban besi dilepaskan. Pilihan B ialah sifat keluli (magnet kekal) yang menyukarkan pelepasan besi; pilihan C dan D tidak tepat."
      },
      {
        "id": "t2s_b08_q1",
        "syllabus_node_id": "t2_sains_b08",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah buku sains terletak pegun di atas permukaan meja kayu yang rata. Apakah pasangan daya yang bertindak ke atas buku tersebut dalam keadaan seimbang?",
        "options_json": {
          "A": "Daya elastik ke kiri dan daya magnet ke kanan",
          "B": "Daya graviti (berat) ke bawah dan daya tindak balas normal dari meja ke atas",
          "C": "Daya apungan ke atas dan daya geseran ke bawah",
          "D": "Daya tujahan enjin ke depan dan rintangan udara ke belakang"
        },
        "correct_option": "B",
        "explanation_text": "Buku yang pegun di atas meja mengalami tarikan graviti (berat) ke arah bawah yang diimbangi sepenuhnya oleh daya tindak balas normal yang sama magnitud ke arah atas daripada permukaan meja. Pilihan A, C dan D merujuk kepada jenis daya bagi situasi lain seperti spring, cecair atau kenderaan bergerak."
      },
      {
        "id": "t2s_b08_q2",
        "syllabus_node_id": "t2_sains_b08",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah kapal kargo belayar dari muara sungai air tawar menuju ke laut terbuka yang masin dengan muatan yang sama berat. Apakah perubahan yang berlaku pada paras tenggelam badan kapal itu?",
        "options_json": {
          "A": "Kapal timbul lebih tinggi di air laut kerana ketumpatan air laut lebih tinggi daripada air sungai",
          "B": "Kapal tenggelam lebih dalam di air laut kerana ombak menarik kapal ke bawah",
          "C": "Paras tenggelam kapal kekal sama selagi suhu air tidak melebihi 50 darjah Celsius",
          "D": "Kapal kehilangan seluruh daya apungan sebaik sahaja memasuki air masin"
        },
        "correct_option": "A",
        "explanation_text": "Air laut mempunyai garam terlarut yang menjadikannya lebih tumpat daripada air tawar; oleh itu, kapal hanya perlu menyesarkan isi padu air laut yang lebih kecil untuk menghasilkan daya apungan yang menyamai berat kapal, lalu kapal timbul lebih tinggi. Pilihan B, C dan D menyalahi prinsip keapungan."
      },
      {
        "id": "t2s_b08_q3",
        "syllabus_node_id": "t2_sains_b08",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengikut prinsip momen daya pada tuas seimbang (Beban × Jarak beban = Daya × Jarak daya), seorang murid berberat 400 N duduk pada jarak 1.5 m dari fulkrum sebuah jongkang-jongket. Pada jarak berapakah dari fulkrum seorang rakannya yang berberat 300 N perlu duduk di sebelah bertentangan supaya jongkang-jongket itu seimbang?",
        "options_json": {
          "A": "0.5 m",
          "B": "1.1 m",
          "C": "2 m",
          "D": "4.5 m"
        },
        "correct_option": "C",
        "explanation_text": "Untuk keseimbangan momen daya: 400 N × 1.5 m = 300 N × d, maka 600 = 300 × d, dan d = 600 ÷ 300 = 2 m. Pilihan A dan B salah kerana individu yang lebih ringan mesti duduk lebih jauh daripada 1.5 m untuk menghasilkan momen yang sama; pilihan D hasil salah kira.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return ((400 * 1.5) / 300) + ' m';",
          "ans": "2 m"
        }
      },
      {
        "id": "t2s_b08_q4",
        "syllabus_node_id": "t2_sains_b08",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebuah kotak logam mempunyai berat 60 N dan luas permukaan tapaknya yang menyentuh lantai ialah 0.04 m². Hitung tekanan yang dikenakan oleh kotak logam tersebut ke atas lantai.",
        "options_json": {
          "A": "2.4 Pa",
          "B": "150 Pa",
          "C": "1500 Pa",
          "D": "2400 Pa"
        },
        "correct_option": "C",
        "explanation_text": "Menggunakan rumus Tekanan P = Daya (F) ÷ Luas (A), P = 60 N ÷ 0.04 m² = 1500 Pa (atau N/m²). Pilihan A (2.4 Pa) tersilap mendarab 60 × 0.04; pilihan B (150 Pa) salah titik perpuluhan (60 ÷ 0.4); pilihan D silap operasi matematik.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (60 / 0.04) + ' Pa';",
          "ans": "1500 Pa"
        }
      },
      {
        "id": "t2s_b08_q5",
        "syllabus_node_id": "t2_sains_b08",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Seorang kanak-kanak gagal menyedut air sirap apabila penyedut minumannya mempunyai satu lubang kecil berhampiran bahagian atas. Apakah penjelasan fizik yang paling tepat bagi kejadian ini?",
        "options_json": {
          "A": "Daya graviti menjadi dua kali ganda lebih kuat di dalam penyedut berlubang",
          "B": "Lubang kecil itu meningkatkan ketumpatan air sirap sehingga melebihi ketumpatan plastik penyedut",
          "C": "Tekanan atmosfera di luar gelas hilang serta-merta apabila penyedut mempunyai lubang",
          "D": "Udara luar masuk melalui lubang dan menyamakan tekanan udara di dalam penyedut dengan tekanan atmosfera pada permukaan air"
        },
        "correct_option": "D",
        "explanation_text": "Penyedut minuman berfungsi apabila sedutan mengurangkan tekanan udara di dalamnya supaya tekanan atmosfera yang lebih tinggi di luar menolak air naik. Lubang kecil membenarkan udara luar masuk lalu menghapuskan perbezaan tekanan tersebut. Pilihan B, C dan A bercanggah dengan prinsip tekanan atmosfera."
      },
      {
        "id": "t2s_b09_q1",
        "syllabus_node_id": "t2_sains_b09",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Nelayan tradisional sering bertolak ke laut pada waktu lewat malam dengan bantuan bayu darat. Bagaimanakah bayu darat terbentuk pada waktu malam?",
        "options_json": {
          "A": "Darat menyejuk lebih cepat daripada laut; udara panas di atas laut naik dan udara sejuk dari darat bergerak ke laut",
          "B": "Laut membeku pada waktu malam dan menolak angin ke arah pantai",
          "C": "Darat mengekalkan haba lebih lama daripada laut menyebabkan udara di darat naik ke langit",
          "D": "Sinaran cahaya bulan menarik arus perolakan dari laut ke kawasan pergunungan"
        },
        "correct_option": "A",
        "explanation_text": "Pada waktu malam, darat kehilangan haba lebih pantas berbanding laut. Udara di atas permukaan laut yang lebih panas menjadi kurang tumpat lalu naik, dan tempatnya digantikan oleh udara lebih sejuk yang bertiup dari darat ke laut (bayu darat). Pilihan B, C dan D tidak tepat."
      },
      {
        "id": "t2s_b09_q2",
        "syllabus_node_id": "t2_sains_b09",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Mengapakah kabel penghantaran elektrik di antara tiang-tiang di tepi jalan raya dipasang dalam keadaan sedikit mengendur dan tidak ditarik tegang?",
        "options_json": {
          "A": "Supaya haba matahari dapat menukar kabel kuprum kepada penebat elektrik",
          "B": "Untuk membenarkan arus elektrik bergerak secara berayun mengikut tiupan angin",
          "C": "Supaya kabel tidak terputus apabila mengecut pada waktu malam atau musim sejuk",
          "D": "Untuk mengurangkan jumlah tiang elektrik dan jisim dawai yang diperlukan"
        },
        "correct_option": "C",
        "explanation_text": "Logam seperti kuprum dan aluminium mengecut apabila suhu persekitaran menurun pada waktu malam; pemasangan yang sedikit kendur memberikan ruang pengecutan supaya kabel tidak menegang dan terputus. Pilihan B, A dan D tidak berkaitan dengan pengecutan terma."
      },
      {
        "id": "t2s_b09_q3",
        "syllabus_node_id": "t2_sains_b09",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah kelalang termos direka dengan dinding kaca berkembar yang mempunyai ruang vakum di antaranya serta permukaan dalam yang disaluti lapisan berkilat keperakan. Apakah fungsi utama kedua-dua ciri ini dalam mengekalkan suhu air panas?",
        "options_json": {
          "A": "Kedua-dua ciri bertujuan mempercepatkan penyejatan air panas di dalam termos",
          "B": "Ruang vakum membebaskan haba tambahan manakala permukaan berkilat menyerap haba dari luar",
          "C": "Lapisan berkilat menghasilkan perolakan pantas manakala ruang vakum membekukan dinding luar",
          "D": "Ruang vakum menghalang konduksi dan perolakan, manakala permukaan berkilat memantulkan haba sinaran ke dalam semula"
        },
        "correct_option": "D",
        "explanation_text": "Konduksi dan perolakan memerlukan zarah jirim sebagai medium, jadi ruang vakum menghalang kedua-dua pemindahan haba ini. Permukaan perak berkilat pula merupakan pemantul haba yang baik untuk mengurangkan kehilangan haba secara sinaran. Pilihan B, C dan A salah konsep."
      },
      {
        "id": "t2s_b09_q4",
        "syllabus_node_id": "t2_sains_b09",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Ketika menyukat suhu pesakit menggunakan termometer klinik merkuri, jururawat perlu menunggu kira-kira satu minit di bawah lidah sebelum membacanya, dan turus merkuri tidak turun walaupun dikeluarkan ke bilik berhawa dingin. Mengapakah kedua-dua perkara ini berlaku?",
        "options_json": {
          "A": "Pencerutan bertujuan menyekat keseimbangan terma daripada berlaku antara mulut dengan bebuli",
          "B": "Merkuri hanya mengembang selepas bertindak balas dengan enzim air liur pesakit",
          "C": "Kaca termometer ialah konduktor elektrik yang mengunci kedudukan merkuri pada 37 darjah Celsius",
          "D": "Menunggu untuk mencapai keseimbangan terma; pencerutan pada tiub kapilari menghalang merkuri turun sebelum bacaan diambil"
        },
        "correct_option": "D",
        "explanation_text": "Masa menunggu membolehkan haba mengalir sehingga bebuli merkuri dan badan pesakit mencapai keseimbangan terma (suhu sama). Pencerutan halus di atas bebuli memutuskan aliran balik merkuri ketika disejukkan supaya bacaan maksimum kekal untuk direkod. Pilihan B, C dan A tidak benar."
      },
      {
        "id": "t2s_b09_q5",
        "syllabus_node_id": "t2_sains_b09",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Dalam reka bentuk Konsep Bangunan Hijau di Malaysia yang beriklim panas lembap, bagaimanakah gabungan dinding dicat cerah, tingkap kaca berkembar dan siling berpenebat menyumbang kepada kecekapan tenaga?",
        "options_json": {
          "A": "Memantulkan sinaran matahari, mengurangkan pengaliran haba ke dalam bangunan dan menurunkan keperluan tenaga penyaman udara",
          "B": "Menyerap sebanyak mungkin haba matahari pada waktu siang untuk memanaskan bilik pada waktu tengah hari",
          "C": "Menyekat aliran udara masuk sepenuhnya supaya kepekatan karbon dioksida meningkat di dalam bilik",
          "D": "Mempercepatkan konduksi haba dari bumbung ke lantai melalui rasuk logam terdedah"
        },
        "correct_option": "A",
        "explanation_text": "Permukaan luar cerah memantulkan sinaran haba, kaca berkembar dengan ruang udara atau vakum mengurangkan konduksi, dan penebat siling menghalang haba bumbung turun ke ruang dalaman. Ini mengekalkan keselesaan terma dan menjimatkan elektrik penyaman udara. Pilihan B, C dan D meningkatkan haba atau memburukkan pengudaraan."
      },
      {
        "id": "t2s_b10_q1",
        "syllabus_node_id": "t2_sains_b10",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Seorang pemain gitar memetik seutas tali gitar yang sama dengan lebih kuat berbanding petikan pertamanya tanpa mengubah panjang atau ketegangan tali tersebut. Apakah perubahan pada ciri gelombang bunyi yang dihasilkan?",
        "options_json": {
          "A": "Frekuensi meningkat dan bunyi menjadi lebih langsing",
          "B": "Amplitud meningkat dan bunyi menjadi lebih nyaring",
          "C": "Kelajuan bunyi di udara berganda menjadi dua kali lebih pantas",
          "D": "Frekuensi menurun sehingga tidak dapat didengari manusia"
        },
        "correct_option": "B",
        "explanation_text": "Memetik tali dengan daya lebih kuat menghasilkan getaran beramplitud lebih besar, lalu meningkatkan kenyaringan bunyi. Kerana panjang, ketebalan dan ketegangan tali tidak diubah, frekuensi (kelangsingan) bunyi kekal sama. Pilihan A, C dan D salah konsep."
      },
      {
        "id": "t2s_b10_q2",
        "syllabus_node_id": "t2_sains_b10",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Sebuah bilik kosong berdinding konkrit licin menghasilkan bunyi pantulan yang kuat apabila seseorang bercakap, tetapi pantulan itu hilang selepas permaidani tebal, sofa kain dan langsir dipasang. Mengapakah keadaan ini berlaku?",
        "options_json": {
          "A": "Kehadiran perabot mengeluarkan semua udara dari bilik supaya bunyi tidak dapat merambat",
          "B": "Permaidani dan sofa memantulkan gelombang bunyi melebihi kelajuan cahaya",
          "C": "Konkrit licin menyerap bunyi manakala langsir menghasilkan gema berganda",
          "D": "Bahan lembut dan berliang seperti fabrik dan busa menyerap tenaga gelombang bunyi dengan berkesan"
        },
        "correct_option": "D",
        "explanation_text": "Permukaan lembut, kasar dan berliang seperti langsir, permaidani dan fabrik ialah penyerap bunyi yang baik dan mengurangkan pantulan gema, berbeza dengan dinding konkrit keras yang memantulkan bunyi. Pilihan B, C dan A salah."
      },
      {
        "id": "t2s_b10_q3",
        "syllabus_node_id": "t2_sains_b10",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebuah kapal penyelidikan memancarkan isyarat sonar ultrabunyi secara menegak ke dasar laut dan mengesan pantulan gema tersebut selepas 1.6 s. Jika kelajuan bunyi di dalam air laut ialah 1500 m/s, berapakah kedalaman dasar laut di lokasi itu?",
        "options_json": {
          "A": "937.5 m",
          "B": "1200 m",
          "C": "2400 m",
          "D": "4800 m"
        },
        "correct_option": "B",
        "explanation_text": "Gelombang sonar bergerak turun ke dasar laut dan memantul naik semula (dua kali kedalaman dalam masa 1.6 s). Menggunakan d = (v × t) ÷ 2 = (1500 m/s × 1.6 s) ÷ 2 = 2400 ÷ 2 = 1200 m. Pilihan C (2400 m) lupa membahagi 2 bagi perjalanan pergi dan balik; pilihan A membahagi 1500 ÷ 1.6; pilihan D mendarab dua.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return ((1500 * 1.6) / 2) + ' m';",
          "ans": "1200 m"
        }
      },
      {
        "id": "t2s_b10_q4",
        "syllabus_node_id": "t2_sains_b10",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Seorang doktor menggunakan stetoskop untuk mendengar degupan jantung pesakit, manakala ujian imbasan janin di klinik menggunakan gelombang berfrekuensi melebihi 20 000 Hz. Mengapakah kedua-dua alat tersebut diperlukan?",
        "options_json": {
          "A": "Stetoskop menguatkan bunyi perlahan bagi mengatasi had kepekaan telinga; imbasan menggunakan ultrabunyi yang tidak kedengaran tetapi selamat memantul pada tisu",
          "B": "Stetoskop menghasilkan sinaran X; imbasan janin menggunakan infrabunyi di bawah 20 Hz",
          "C": "Kedua-dua alat beroperasi tanpa memerlukan sebarang medium untuk merambatkan bunyi",
          "D": "Manusia hanya boleh mendengar bunyi berfrekuensi di atas 20 000 Hz menggunakan stetoskop"
        },
        "correct_option": "A",
        "explanation_text": "Telinga manusia mempunyai had pendengaran (20 Hz – 20 000 Hz) dan tidak dapat mengesan bunyi yang terlalu perlahan dari jarak jauh. Stetoskop mengumpulkan dan memandu gelombang bunyi ke telinga, manakala ultrabunyi (>20 000 Hz) digunakan dalam pengimejan perubatan kerana selamat tanpa radiasi mengion. Pilihan B, C dan D tidak tepat."
      },
      {
        "id": "t2s_b10_q5",
        "syllabus_node_id": "t2_sains_b10",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Sebuah kereta polis yang membunyikan siren berfrekuensi tetap bergerak laju melintasi dan mula menjauhi seorang pejalan kaki yang berdiri di tepi jalan. Bagaimanakah ciri bunyi siren yang didengari oleh pejalan kaki itu ketika kereta polis semakin menjauh?",
        "options_json": {
          "A": "Kelangsingan bunyi kedengaran lebih tinggi kerana gelombang bunyi termampat",
          "B": "Kelangsingan bunyi kedengaran lebih rendah kerana panjang gelombang meregang dan frekuensi ketara berkurang",
          "C": "Kelangsingan bunyi kekal tidak berubah tetapi kelajuan bunyi berkurang kepada sifar",
          "D": "Kenyaringan bunyi meningkat mendadak walaupun jarak bertambah jauh"
        },
        "correct_option": "B",
        "explanation_text": "Mengikut Kesan Doppler, apabila sumber bunyi bergerak menjauhi pemerhati, jarak antara puncak gelombang berturutan menjadi lebih panjang, menyebabkan frekuensi ketara yang diterima telinga lebih rendah (bunyi kedengaran lebih garau/rendah kelangsingannya). Pilihan A berlaku semasa sumber menghampiri; pilihan C dan D bercanggah dengan fizik gelombang bunyi."
      },
      {
        "id": "t2s_b11_q1",
        "syllabus_node_id": "t2_sains_b11",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Galaksi Bima Sakti dan Galaksi Andromeda mempunyai lengan yang melengkung keluar dari pusat galaksi yang padat dengan bintang. Bagaimanakah kedua-dua galaksi ini dikelaskan?",
        "options_json": {
          "A": "Galaksi elips",
          "B": "Galaksi tidak seragam",
          "C": "Galaksi pilin",
          "D": "Galaksi nebula planet"
        },
        "correct_option": "C",
        "explanation_text": "Galaksi berbentuk pilin (spiral) dicirikan oleh teras tengah yang cerah dikelilingi lengan pilin berputar yang kaya dengan gas, debu dan bintang muda, termasuk Bima Sakti dan Andromeda. Pilihan A berbentuk bujur tanpa lengan; pilihan B tiada bentuk tetap (cth: Awan Magellan); pilihan D ialah fasa kematian bintang, bukan jenis galaksi."
      },
      {
        "id": "t2s_b11_q2",
        "syllabus_node_id": "t2_sains_b11",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Di dalam sebuah nebula yang gelap dan sejuk, bagaimanakah daya tarikan graviti memulakan pembentukan sebutir bintang baharu?",
        "options_json": {
          "A": "Gas oksigen di dalam nebula terbakar secara kimia dengan bantuan angin suria",
          "B": "Graviti menolak debu menjauhi pusat nebula sehingga membentuk planet berbatu yang sejuk",
          "C": "Graviti menarik dan memampatkan gas hidrogen serta debu sehingga suhu teras menjadi cukup tinggi untuk memulakan pelakuran nuklear",
          "D": "Lohong hitam membelah menjadi dua bintang kerdil putih yang panas"
        },
        "correct_option": "C",
        "explanation_text": "Tarikan graviti memampatkan awan gas hidrogen dan debu di dalam nebula menjadi bebola padat; peningkatan tekanan dan suhu yang amat tinggi di teras memulakan pelakuran nuklear hidrogen menjadi helium dan melahirkan bintang. Pilihan B, A dan D salah konsep astrofizik."
      },
      {
        "id": "t2s_b11_q3",
        "syllabus_node_id": "t2_sains_b11",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara senarai berikut, yang manakah menyusun warna bintang mengikut urutan suhu permukaan daripada yang PALING PANAS kepada yang PALING SEJUK?",
        "options_json": {
          "A": "Merah -> Jingga -> Kuning -> Putih -> Biru",
          "B": "Biru -> Putih -> Kuning -> Jingga -> Merah",
          "C": "Kuning -> Biru -> Merah -> Putih -> Jingga",
          "D": "Putih -> Biru -> Jingga -> Kuning -> Merah"
        },
        "correct_option": "B",
        "explanation_text": "Bintang berwarna biru mempunyai suhu permukaan tertinggi (melebihi 25 000 K), diikuti putih, kuning (seperti Matahari ~6 000 K), jingga, dan merah yang paling sejuk (sekitar 3 000 K). Pilihan A songsang sepenuhnya; pilihan C dan D tidak mengikut spektrum suhu bintang."
      },
      {
        "id": "t2s_b11_q4",
        "syllabus_node_id": "t2_sains_b11",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Sebuah bintang mempunyai jisim awal lebih daripada 10 kali ganda jisim Matahari. Selepas kehabisan bahan api hidrogen di terasnya, apakah peringkat akhir yang paling mungkin dialami oleh bintang super besar tersebut?",
        "options_json": {
          "A": "Raksasa merah -> Nebula planet -> Kerdil putih",
          "B": "Raksasa super -> Letupan supernova -> Bintang neutron atau lohong hitam",
          "C": "Kerdil putih -> Nebula -> Komet berais",
          "D": "Raksasa merah -> Kerdil hitam terus tanpa letupan"
        },
        "correct_option": "B",
        "explanation_text": "Bintang berjisim sangat besar mengembang menjadi raksasa super merah sebelum terasnya runtuh dan meletup sebagai supernova, lalu meninggalkan teras sangat padat sama ada sebagai bintang neutron atau lohong hitam. Pilihan A ialah kitar hidup bintang bersaiz sederhana seperti Matahari; pilihan C dan D tidak tepat."
      },
      {
        "id": "t2s_b11_q5",
        "syllabus_node_id": "t2_sains_b11",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Bintang Betelgeuse berwarna merah dengan suhu permukaan sekitar 3 500 K (jauh lebih sejuk daripada Matahari), namun kecerahan mutlaknya ribuan kali lebih terang daripada Matahari. Apakah faktor utama yang menjelaskan kecerahan luar biasa bintang ini?",
        "options_json": {
          "A": "Betelgeuse memantulkan cahaya daripada planet Musytari dan Zuhal",
          "B": "Betelgeuse berada di antara Bumi dengan Matahari pada setiap musim panas",
          "C": "Bintang merah sentiasa memancarkan cahaya lebih bertenaga bagi setiap meter persegi berbanding bintang biru",
          "D": "Saiz dan luas permukaan Betelgeuse yang amat besar sebagai bintang raksasa super"
        },
        "correct_option": "D",
        "explanation_text": "Kecerahan bintang bergantung pada suhu permukaan dan saiznya. Walaupun suhu permukaan Betelgeuse lebih rendah, jejarinya ratusan kali ganda lebih besar daripada Matahari sehingga jumlah cahaya yang dipancarkan dari keseluruhan permukaannya amat tinggi. Pilihan B dan A tidak saintifik; pilihan C salah kerana bintang biru memancarkan lebih banyak tenaga per unit luas."
      },
      {
        "id": "t2s_b12_q1",
        "syllabus_node_id": "t2_sains_b12",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Planet-planet dalam Sistem Suria dibahagikan kepada planet dalaman yang berbatu dan planet luaran yang terdiri daripada gergasi gas atau ais. Antara berikut, kumpulan manakah yang kesemuanya ialah planet gergasi luaran?",
        "options_json": {
          "A": "Utarid, Zuhrah, Bumi dan Marikh",
          "B": "Musytari, Zuhal, Uranus dan Neptun",
          "C": "Marikh, Musytari, Zuhal dan Bumi",
          "D": "Zuhrah, Uranus, Neptun dan Utarid"
        },
        "correct_option": "B",
        "explanation_text": "Empat planet selepas Lingkaran Asteroid iaitu Musytari, Zuhal, Uranus dan Neptun ialah planet luaran yang bersaiz besar, bergas/berais dan berketumpatan rendah. Pilihan A ialah empat planet terestrial berbatu; pilihan C dan D mencampuradukkan kedua-dua kumpulan."
      },
      {
        "id": "t2s_b12_q2",
        "syllabus_node_id": "t2_sains_b12",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Bagaimanakah jarak purata sesuatu planet dari Matahari mempengaruhi tempoh masa yang diambil untuk melengkapkan satu pusingan orbit mengelilingi Matahari?",
        "options_json": {
          "A": "Semakin jauh planet dari Matahari, semakin panjang tempoh peredarannya",
          "B": "Semakin jauh planet dari Matahari, semakin singkat tempoh peredarannya",
          "C": "Semua lapan planet mengambil masa tepat 365.25 hari untuk mengelilingi Matahari",
          "D": "Planet yang lebih besar sentiasa mengelilingi Matahari lebih cepat tanpa mengira jarak"
        },
        "correct_option": "A",
        "explanation_text": "Planet yang lebih jauh mempunyai laluan orbit yang jauh lebih besar dan bergerak pada kelajuan orbit lebih perlahan kerana tarikan graviti Matahari semakin lemah, maka tempoh satu tahunnya menjadi semakin panjang (cth: Utarid 88 hari, Neptun ~165 tahun). Pilihan B, C dan D bercanggah dengan pemerhatian astronomi."
      },
      {
        "id": "t2s_b12_q3",
        "syllabus_node_id": "t2_sains_b12",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Diberi 1 Unit Astronomi (AU) bersamaan dengan 150 juta km. Jika jarak purata planet Musytari dari Matahari ialah 5.2 AU, berapakah jarak tersebut dalam juta km?",
        "options_json": {
          "A": "28.8 juta km",
          "B": "155.2 juta km",
          "C": "780 juta km",
          "D": "7800 juta km"
        },
        "correct_option": "C",
        "explanation_text": "Jarak dalam km = 5.2 AU × 150 juta km/AU = 780 juta km. Pilihan A membahagi 150 ÷ 5.2; pilihan B hanya menambah 150 + 5.2; pilihan D tersilap titik perpuluhan (52 × 150).",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (5.2 * 150) + ' juta km';",
          "ans": "780 juta km"
        }
      },
      {
        "id": "t2s_b12_q4",
        "syllabus_node_id": "t2_sains_b12",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Diberi 1 tahun cahaya bersamaan 9.5 × 10¹² km. Jika sebuah kapal angkasa teori mengukur jarak ke sebuah sistem bintang sejauh 3.8 × 10¹³ km dari Bumi, berapakah jarak sistem bintang tersebut dalam unit tahun cahaya?",
        "options_json": {
          "A": "0.25 tahun cahaya",
          "B": "40 tahun cahaya",
          "C": "36.1 tahun cahaya",
          "D": "4 tahun cahaya"
        },
        "correct_option": "D",
        "explanation_text": "Untuk menukar km kepada tahun cahaya, bahagikan jarak dengan 9.5 × 10¹² km: (3.8 × 10¹³) ÷ (9.5 × 10¹²) = (38 × 10¹²) ÷ (9.5 × 10¹²) = 4 tahun cahaya. Pilihan A terbalik membahagi 9.5 ÷ 38; pilihan C mendarab 3.8 × 9.5; pilihan B tersilap kuasa sepuluh.",
        "check": {
          "type": "js",
          "mode": "exact",
          "code": "return (3.8e13 / 9.5e12) + ' tahun cahaya';",
          "ans": "4 tahun cahaya"
        }
      },
      {
        "id": "t2s_b12_q5",
        "syllabus_node_id": "t2_sains_b12",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Planet Uranus berputar dalam keadaan seolah-olah bergolek di atas satah orbitnya kerana kecondongan paksi putarannya mencapai hampir 98 darjah. Apakah kesan unik fenomena ini terhadap planet Uranus?",
        "options_json": {
          "A": "Setiap kutub mengalami siang berterusan selama puluhan tahun diikuti malam berterusan yang panjang",
          "B": "Uranus tidak mempunyai sebarang musim dan suhu di seluruh permukaannya sentiasa 100 darjah Celsius",
          "C": "Uranus berputar dari barat ke timur pada kelajuan sama dengan Bumi iaitu 24 jam sehari",
          "D": "Tarikan graviti Matahari menjadikan Uranus planet paling panas di Sistem Suria"
        },
        "correct_option": "A",
        "explanation_text": "Kecondongan paksi ekstrem (~98°) menyebabkan satu kutub Uranus menghadap Matahari secara langsung selama hampir separuh tempoh orbitnya (~42 tahun Bumi) sambil kutub bertentangan mengalami musim sejuk gelap berpanjangan. Pilihan B, C dan D tidak tepat."
      },
      {
        "id": "t2s_b13_q1",
        "syllabus_node_id": "t2_sains_b13",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah ciri utama yang membezakan kebanyakan asteroid daripada meteoroid di angkasa lepas?",
        "options_json": {
          "A": "Asteroid bersaiz jauh lebih besar (sehingga ratusan kilometer) dan mengorbit Matahari terutama di Lingkaran Asteroid, manakala meteoroid ialah serpihan kecil",
          "B": "Asteroid diperbuat daripada ais tulen manakala meteoroid ialah bintang kerdil",
          "C": "Asteroid hanya wujud di dalam atmosfera Bumi manakala meteoroid hanya berada di luar galaksi",
          "D": "Meteoroid mempunyai ekor cahaya panjang manakala asteroid bercahaya melalui pelakuran nuklear"
        },
        "correct_option": "A",
        "explanation_text": "Asteroid ialah jasad batuan dan logam bersaiz besar (dari beberapa meter hingga ratusan kilometer) yang tertumpu di Lingkaran Asteroid antara Marikh dan Musytari, manakala meteoroid ialah serpihan batu atau logam kecil yang terapung di angkasa. Pilihan B merujuk kepada komet; pilihan C dan D salah fakta."
      },
      {
        "id": "t2s_b13_q2",
        "syllabus_node_id": "t2_sains_b13",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pada malam tertentu setiap tahun, pemerhati langit dapat melihat puluhan jalur cahaya melintasi langit dalam fenomena yang dikenali sebagai hujan meteor. Bagaimanakah fenomena ini berlaku?",
        "options_json": {
          "A": "Gas nitrogen di termosfera memantulkan cahaya lampu bandar raya",
          "B": "Bintang-bintang di Galaksi Bima Sakti gugur dan terbakar di dalam lautan Bumi",
          "C": "Planet Musytari melontar satelit semula jadinya terus ke arah Bulan",
          "D": "Bumi melintasi jalur serpihan debu dan batu yang ditinggalkan oleh komet sehingga banyak zarah terbakar di atmosfera"
        },
        "correct_option": "D",
        "explanation_text": "Hujan meteor terjadi apabila Bumi bergerak merentasi laluan orbit komet yang dipenuhi debu dan meteoroid kecil; geseran dengan molekul udara menyebabkan zarah tersebut memanas dan terbakar sebagai meteor. Pilihan B, C dan A tidak saintifik."
      },
      {
        "id": "t2s_b13_q3",
        "syllabus_node_id": "t2_sains_b13",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apabila sebuah komet bergerak melengkung melepasi kedudukan paling hampir dengan Matahari lalu mula bergerak menjauhi Matahari, ke arah manakah ekor bercahaya komet itu mengarah?",
        "options_json": {
          "A": "Sentiasa menghala ke arah Matahari kerana ditarik oleh graviti",
          "B": "Sentiasa menghala menjauhi Matahari akibat tiupan angin suria dan tekanan sinaran",
          "C": "Sentiasa mengekor tepat di belakang arah gerakannya sama seperti asap roket",
          "D": "Sentiasa menghala tepat ke arah planet Bumi tidak kira kedudukan komet"
        },
        "correct_option": "B",
        "explanation_text": "Angin suria (zarah bercas daripada Matahari) dan tekanan sinaran cahaya menolak gas serta debu yang terbebas daripada nukleus komet, menyebabkan ekor komet sentiasa mengarah menjauhi Matahari walaupun ketika komet bergerak menjauhi Matahari. Pilihan A, C dan D adalah miskonsepsi lazim."
      },
      {
        "id": "t2s_b13_q4",
        "syllabus_node_id": "t2_sains_b13",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Hentaman asteroid raksasa berdiameter kira-kira 10 km di semenanjung Yucatan sekitar 66 juta tahun dahulu dipercayai mencetuskan kepupusan besar-besaran hidupan termasuk dinosaur bukan unggas. Mekanisme susulan manakah yang paling banyak memusnahkan ekosistem global selepas hentaman itu?",
        "options_json": {
          "A": "Kesan hentaman mempercepatkan putaran Bumi menjadi 2 jam sehari sahaja",
          "B": "Hentaman itu menukar keseluruhan atmosfera Bumi menjadi gas helium tulen",
          "C": "Semua lautan Bumi membeku serta-merta kerana asteroid diperbuat daripada ketulan ais suhu sifar mutlak",
          "D": "Debu dan aerosol tebal menyelubungi atmosfera, menghalang cahaya matahari, meruntuhkan fotosintesis dan menurunkan suhu Bumi secara mendadak"
        },
        "correct_option": "D",
        "explanation_text": "Tenaga hentaman melepaskan kuantiti debu, jelaga dan gas yang amat besar ke stratosfera, menyekat cahaya matahari selama berbulan-bulan atau bertahun-tahun. Ini menghentikan fotosintesis tumbuhan, menyejukkan iklim global dan meruntuhkan rantai makanan. Pilihan B, C dan A bercanggah dengan bukti geologi."
      },
      {
        "id": "t2s_b13_q5",
        "syllabus_node_id": "t2_sains_b13",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Mengapakah saintis astronomi giat menjejak dan memetakan orbit Asteroid Berhampiran Bumi (Near-Earth Asteroid, NEA) seperti kumpulan Apollo dan Aten walaupun kebanyakannya tidak mempamerkan ekor bercahaya?",
        "options_json": {
          "A": "Kerana orbitnya yang merentasi atau menghampiri orbit Bumi boleh terganggu oleh tarikan graviti planet sehingga berisiko melanggar Bumi pada masa hadapan",
          "B": "Kerana asteroid dalam kumpulan ini bercahaya lebih terang daripada Matahari dan boleh membutakan penduduk Bumi",
          "C": "Kerana kesemua NEA ialah planet gergasi gas yang bakal menggantikan kedudukan Bulan",
          "D": "Kerana NEA sentiasa bergerak dari luar Bima Sakti dan akan meletup menjadi supernova"
        },
        "correct_option": "A",
        "explanation_text": "Berbeza daripada asteroid di Lingkaran Asteroid utama, asteroid jenis NEA mempunyai orbit yang melintasi atau menghampiri lintasan orbit Bumi; sedikit gangguan graviti daripada planet berhampiran boleh mengubah laluannya ke arah Bumi, menjadikan pemantauan awal penting untuk keselamatan planet. Pilihan B, C dan D salah dari segi sains."
      }
    ]
  };
});
