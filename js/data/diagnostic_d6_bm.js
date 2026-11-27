/**
 * Generated from js/data/diagnostic_d6_bm.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.d6 = App.DiagnosticBanks.d6 || {};
    App.DiagnosticBanks.d6.bm = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "d6_bm_kosa_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "kosa_kata",
        "topic_name": "BM • Kosa Kata & Makna Kata",
        "subtopic_name": "Sinonim, Antonim, Kata Banyak Makna & Kosa Kata Konteks",
        "prerequisite_node_id": null,
        "expected_time_ms": 30000,
        "bloom_level": "Remember"
      },
      {
        "id": "d6_bm_tata_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "tatabahasa",
        "topic_name": "BM • Tatabahasa & Golongan Kata",
        "subtopic_name": "Kata Nama, Kata Ganti Nama, Penjodoh Bilangan, Kata Adjektif & Kata Sendi Nama",
        "prerequisite_node_id": "d6_bm_kosa_01",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_bm_imb_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "imbuhan",
        "topic_name": "BM • Imbuhan & Pengimbuhan",
        "subtopic_name": "Imbuhan Awalan, Akhiran, Apitan & Kata Kerja Transitif/Tak Transitif",
        "prerequisite_node_id": "d6_bm_tata_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bm_eja_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "ejaan_tanda_baca",
        "topic_name": "BM • Sistem Ejaan & Tanda Baca",
        "subtopic_name": "Ejaan Kata Majmuk, Kata Pinjaman & Tanda Baca Baku",
        "prerequisite_node_id": "d6_bm_tata_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bm_sint_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "sintaksis",
        "topic_name": "BM • Jenis & Struktur Ayat",
        "subtopic_name": "Ayat Aktif-Pasif (KGND 1/2/3), Ayat Majmuk & Ayat Cakap Ajuk/Pindah",
        "prerequisite_node_id": "d6_bm_imb_01",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      },
      {
        "id": "d6_bm_peri_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "peribahasa",
        "topic_name": "BM • Peribahasa, Simpulan Bahasa & Bidalan",
        "subtopic_name": "Simpulan Bahasa, Perumpamaan & Pepatah dalam Konteks",
        "prerequisite_node_id": "d6_bm_kosa_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bm_seni_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "seni_bahasa",
        "topic_name": "BM • Aspek Seni Bahasa",
        "subtopic_name": "Pantun, Syair, Sajak, Seloka & Gurindam (Maksud, Rima & Pengajaran)",
        "prerequisite_node_id": "d6_bm_peri_01",
        "expected_time_ms": 40000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_bm_pema_01",
        "subject": "bm",
        "grade_level": "d6",
        "chapter_id": "pemahaman",
        "topic_name": "BM • Pemahaman & Penulisan",
        "subtopic_name": "Pemahaman Petikan Tersurat, Tersirat & Rumusan Kontekstual",
        "prerequisite_node_id": "d6_bm_sint_01",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "d6bm_kosa_01_q1",
        "syllabus_node_id": "d6_bm_kosa_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih perkataan sinonim bagi perkataan \"muhibah\" dalam ayat berikut:\n\n\"Penduduk Taman Harmoni hidup dalam suasana muhibah walaupun berbeza kaum dan agama.\"",
        "options_json": {
          "A": "mesra dan bersatu padu",
          "B": "riuh-rendah dan bising",
          "C": "terasing dan sunyi",
          "D": "tegang dan bermusuhan"
        },
        "correct_option": "A",
        "explanation_text": "Perkataan \"muhibah\" bermaksud semangat persahabatan, kemesraan dan perpaduan antara masyarakat berbilang kaum, maka pilihan A paling tepat. Pilihan B merujuk suasana bising, pilihan C merujuk kesunyian, manakala pilihan D (\"tegang dan bermusuhan\") ialah antonim kepada muhibah."
      },
      {
        "id": "d6bm_kosa_01_q2",
        "syllabus_node_id": "d6_bm_kosa_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih perkataan antonim bagi perkataan \"telus\" dalam ayat berikut:\n\n\"Bendahari kelab itu sentiasa bersikap telus ketika membentangkan laporan kewangan kepada semua ahli.\"",
        "options_json": {
          "A": "terbuka",
          "B": "jujur",
          "C": "berselindung",
          "D": "terus terang"
        },
        "correct_option": "C",
        "explanation_text": "Dalam konteks pengurusan kewangan, \"telus\" bermaksud terbuka, jelas dan tidak menyembunyikan sebarang maklumat, maka antonimnya ialah \"berselindung\" (pilihan C). Pilihan A (\"terbuka\"), pilihan B (\"jujur\") dan pilihan D (\"terus terang\") merupakan sinonim atau perkataan yang seerti dengan \"telus\"."
      },
      {
        "id": "d6bm_kosa_01_q3",
        "syllabus_node_id": "d6_bm_kosa_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Lengkapkan ayat di bawah dengan perkataan yang paling tepat.\n\n\"Pak Mail membersihkan ________ ayam kampungnya pada setiap awal pagi agar ternakannya tidak dijangkiti penyakit.\"",
        "options_json": {
          "A": "kandang",
          "B": "reban",
          "C": "sangkar",
          "D": "kolam"
        },
        "correct_option": "B",
        "explanation_text": "Perkataan \"reban\" digunakan khusus untuk tempat kurungan haiwan unggas seperti ayam dan itik. Pilihan A (\"kandang\") khusus untuk haiwan berkaki empat seperti lembu dan kambing, pilihan C (\"sangkar\") untuk burung atau haiwan kecil berjeriji, manakala pilihan D (\"kolam\") untuk ternakan air seperti ikan."
      },
      {
        "id": "d6bm_kosa_01_q4",
        "syllabus_node_id": "d6_bm_kosa_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih perkataan yang paling sesuai untuk melengkapkan ayat berikut:\n\n\"Sebelum memulakan perniagaan kek cawan, kakak menyusun ________ bulanan bagi mengawal perbelanjaan bahan mentah dan mengelakkan pembaziran.\"",
        "options_json": {
          "A": "pulangan",
          "B": "inflasi",
          "C": "subsidi",
          "D": "belanjawan"
        },
        "correct_option": "D",
        "explanation_text": "\"Belanjawan\" bermaksud rancangan anggaran pendapatan dan perbelanjaan untuk mengawal aliran wang, tepat dengan konteks mengelakkan pembaziran. Pilihan A (\"pulangan\") bermaksud hasil keuntungan, pilihan B (\"inflasi\") merujuk kenaikan harga barangan secara umum, dan pilihan C (\"subsidi\") ialah bantuan kewangan daripada pihak kerajaan."
      },
      {
        "id": "d6bm_kosa_01_q5",
        "syllabus_node_id": "d6_bm_kosa_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Pilih ayat-ayat yang menggunakan perkataan banyak makna \"tajam\" dengan betul.\n\nI. Pisau pemotong sayur itu sangat tajam sehingga perlu dikendalikan dengan berhati-hati.\nII. Penglihatan burung helang sangat tajam kerana mampu mengesan mangsa dari udara.\nIII. Arus sungai yang tajam itu menghalang penduduk kampung daripada menyeberanginya.\nIV. Teguran guru disiplin itu agak tajam namun bertujuan menyedarkan murid yang melanggar peraturan.",
        "options_json": {
          "A": "I, II dan IV sahaja",
          "B": "I dan II sahaja",
          "C": "II, III dan IV sahaja",
          "D": "I, III dan IV sahaja"
        },
        "correct_option": "A",
        "explanation_text": "Kata banyak makna \"tajam\" tepat digunakan dalam ayat I (mudah memotong), ayat II (deria penglihatan yang jelas dan kuat) serta ayat IV (kata-kata atau teguran yang pedas), maka pilihan A betul. Ayat III salah kerana kekuatan aliran air sungai sepatutnya digambarkan dengan perkataan \"deras\", bukannya \"tajam\"."
      },
      {
        "id": "d6bm_tata_01_q1",
        "syllabus_node_id": "d6_bm_tata_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih kata ganti nama diri yang paling sesuai untuk melengkapkan ayat berikut:\n\n\"Guru Besar sekolah kami akan bersara pada bulan hadapan. ________ telah berkhidmat dalam bidang pendidikan selama tiga puluh tahun.\"",
        "options_json": {
          "A": "Baginda",
          "B": "Beliau",
          "C": "Mereka",
          "D": "Kalian"
        },
        "correct_option": "B",
        "explanation_text": "Kata ganti nama diri ketiga \"Beliau\" digunakan untuk merujuk seseorang yang dihormati seperti guru besar, pemimpin atau ibu bapa. Pilihan A (\"Baginda\") khusus untuk raja dan sultan, pilihan C (\"Mereka\") untuk orang yang ramai, manakala pilihan D (\"Kalian\") ialah kata ganti nama diri kedua bagi bilangan ramai."
      },
      {
        "id": "d6bm_tata_01_q2",
        "syllabus_node_id": "d6_bm_tata_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih penjodoh bilangan yang tepat untuk melengkapkan ayat di bawah.\n\n\"Datuk menanam beberapa ________ serai di belakang rumah untuk kegunaan masakan harian keluarga kami.\"",
        "options_json": {
          "A": "batang",
          "B": "helai",
          "C": "gugus",
          "D": "rumpun"
        },
        "correct_option": "D",
        "explanation_text": "Penjodoh bilangan \"rumpun\" digunakan bagi tumbuhan yang tumbuh berkelompok pada satu perdu seperti serai, buluh, tebu dan pandan. Pilihan A (\"batang\") untuk objek panjang seperti pensel atau pokok tunggal, pilihan B (\"helai\") untuk benda nipis seperti daun, dan pilihan C (\"gugus\") untuk benda berkelompok bertangkai seperti anggur atau kunci."
      },
      {
        "id": "d6bm_tata_01_q3",
        "syllabus_node_id": "d6_bm_tata_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang menggunakan kata sendi nama dengan betul mengikut Tatabahasa Dewan.",
        "options_json": {
          "A": "Hadiah kecemerlangan itu diterima daripada pihak Persatuan Ibu Bapa dan Guru.",
          "B": "Mesyuarat agung kelab koperasi akan diadakan di hari Sabtu hadapan.",
          "C": "Beg tenunan tradisional itu diperbuat dari daun mengkuang yang telah dikeringkan.",
          "D": "Sumbangan derma kilat tersebut telah diserahkan ke mangsa banjir di pusat pemindahan."
        },
        "correct_option": "A",
        "explanation_text": "Kata sendi nama \"daripada\" dalam pilihan A tepat kerana menunjukkan punca atau organisasi (\"pihak Persatuan Ibu Bapa dan Guru\"). Pilihan B salah kerana keterangan masa memerlukan \"pada\" (\"pada hari Sabtu\"), pilihan C salah kerana bahan asal memerlukan \"daripada\", dan pilihan D salah kerana sasaran manusia memerlukan \"kepada\"."
      },
      {
        "id": "d6bm_tata_01_q4",
        "syllabus_node_id": "d6_bm_tata_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang menggunakan kata adjektif dan kata penguat dengan betul mengikut Tatabahasa Dewan.",
        "options_json": {
          "A": "Kelas Tahun Enam Bijak dipilih sebagai bilik darjah yang paling terbersih pada bulan ini.",
          "B": "Pemandangan sawah padi yang menguning di kampung datuk terlalu indah sekali.",
          "C": "Air tasik di taman rekreasi itu sungguh jernih sehingga ikan-ikan kecil kelihatan jelas.",
          "D": "Bangunan menara berkembar itu merupakan struktur yang tertinggi sekali di kawasan tersebut."
        },
        "correct_option": "C",
        "explanation_text": "Binaan \"sungguh jernih\" dalam pilihan C tepat kerana kata penguat bebas \"sungguh\" hadir sebelum kata adjektif tunggal tanpa pengulangan darjah penghabisan. Pilihan A (\"paling terbersih\") dan pilihan D (\"tertinggi sekali\") salah kerana awalan \"ter-\" tidak boleh digabungkan dengan \"paling\" atau \"sekali\", manakala pilihan B salah kerana penguat hadapan \"terlalu\" tidak boleh digandingkan dengan \"sekali\"."
      },
      {
        "id": "d6bm_tata_01_q5",
        "syllabus_node_id": "d6_bm_tata_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Antara ayat yang berikut, yang manakah betul penggunaan tatabahasanya mengikut Tatabahasa Dewan?",
        "options_json": {
          "A": "Tujuan utama kempen kitar semula ini ialah untuk memupuk kesedaran menjaga alam sekitar.",
          "B": "Sukan tradisional yang menjadi kebanggaan negara ini ialah congkak, wau bulan dan gasing.",
          "C": "Pihak sekolah telah menyediakan berbagai kemudahan sukan bagi semua murid-murid di padang itu.",
          "D": "Hanya peserta yang telah mendaftar sahaja dibenarkan memasuki dewan pertandingan tersebut."
        },
        "correct_option": "B",
        "explanation_text": "Pilihan B tepat kerana kata pemeri \"ialah\" hadir di hadapan frasa nama (\"congkak, wau bulan dan gasing\"). Pilihan A salah kerana kata pemeri di hadapan frasa sendi nama (\"untuk memupuk...\") wajib menggunakan \"adalah\", pilihan C mengandungi kesalahan \"berbagai\" (sepatutnya \"pelbagai\" atau \"berbagai-bagai\") serta kelewahan \"semua murid-murid\", dan pilihan D lewah kerana menggandingkan \"hanya\" dengan \"sahaja\"."
      },
      {
        "id": "d6bm_imb_01_q1",
        "syllabus_node_id": "d6_bm_imb_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih kata berimbuhan yang betul untuk melengkapkan ayat berikut:\n\n\"Ayah sedang ________ pagar kayu rumah kami dengan warna biru muda supaya kelihatan lebih ceria.\"",
        "options_json": {
          "A": "mencat",
          "B": "mengcat",
          "C": "mengecat",
          "D": "menyekat"
        },
        "correct_option": "C",
        "explanation_text": "Kata dasar satu suku kata seperti \"cat\" wajib menerima awalan \"menge-\" mengikut hukum morfofonemik bahasa Melayu, menjadikannya \"mengecat\" (pilihan C). Pilihan A (\"mencat\") dan pilihan B (\"mengcat\") menyalahi hukum pengimbuhan kata satu suku kata, manakala pilihan D (\"menyekat\") berasal daripada kata dasar \"sekat\" yang membawa maksud berbeza."
      },
      {
        "id": "d6bm_imb_01_q2",
        "syllabus_node_id": "d6_bm_imb_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang menggunakan kata kerja transitif dengan betul mengikut Tatabahasa Dewan.",
        "options_json": {
          "A": "Ahli jawatankuasa kelab sedang membincangkan jadual latihan bola jaring minggu hadapan.",
          "B": "Guru kaunseling itu menceritakan tentang pengalaman kerjayanya kepada murid Tahun Enam.",
          "C": "Setiap anak mestilah menyayangi akan kedua-dua ibu bapa mereka sepanjang hayat.",
          "D": "Para peserta kem motivasi itu telah mengetahui akan peraturan keselamatan di kawasan tapak perkhemahan."
        },
        "correct_option": "A",
        "explanation_text": "Kata kerja transitif aktif seperti \"membincangkan\" mesti diikuti secara langsung oleh objek frasa nama tanpa disisipkan kata sendi nama, menjadikan pilihan A tepat. Pilihan B (\"menceritakan tentang\"), pilihan C (\"menyayangi akan\") dan pilihan D (\"mengetahui akan\") salah kerana menyisipkan kata sendi nama antara kata kerja transitif dengan objeknya."
      },
      {
        "id": "d6bm_imb_01_q3",
        "syllabus_node_id": "d6_bm_imb_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih pasangan perkataan berimbuhan yang paling tepat untuk melengkapkan ayat berikut:\n\n\"Datuk perlu ________ rawatan fisioterapi di hospital pada setiap minggu, manakala doktor pakar pula ________ pemeriksaan berkala terhadap tahap kesihatannya.\"",
        "options_json": {
          "A": "menjalankan ... menjalani",
          "B": "menjalani ... menjalani",
          "C": "menjalankan ... menjalankan",
          "D": "menjalani ... menjalankan"
        },
        "correct_option": "D",
        "explanation_text": "Imbuhan apitan \"menjalani\" bermaksud mengalami atau menerima sesuatu seperti rawatan, manakala \"menjalankan\" bermaksud melaksanakan tugas seperti pemeriksaan perubatan; oleh itu pilihan D tepat. Pilihan A terbalik maksudnya, manakala pilihan B dan C menggunakan satu bentuk imbuhan sahaja tanpa membezakan penerima rawatan dengan pelaksana tugas."
      },
      {
        "id": "d6bm_imb_01_q4",
        "syllabus_node_id": "d6_bm_imb_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang mengandungi penggunaan kata berimbuhan awalan \"meN-\" yang betul dari segi ejaan dan hukum morfofonemik.",
        "options_json": {
          "A": "Kilang makanan itu memeroses buah nanas segar untuk dijadikan jem dan minuman dalam tin.",
          "B": "Pengawas bertugas sentiasa memastikan semua suis kipas ditutup sebelum pintu kelas dikunci.",
          "C": "Pasukan inovasi sekolah itu mempromosikan ciptaan mereka sambil mensasarkan pingat emas.",
          "D": "Jawatankuasa pertandingan telah mempilih lima orang peserta terbaik untuk mewakili daerah ke peringkat negeri."
        },
        "correct_option": "B",
        "explanation_text": "Pilihan B tepat kerana huruf awal \"p\" pada kata dasar \"pasti\" luluh apabila menerima apitan \"meN-...-kan\" menjadi \"memastikan\". Pilihan A salah kerana kata pinjaman bergugus konsonan \"proses\" mengekalkan huruf \"p\" (\"memproses\"), manakala pilihan C (\"mensasarkan\") dan pilihan D (\"mempilih\") salah kerana kata dasar \"sasar\" dan \"pilih\" wajib meluluhkan huruf awal menjadi \"menyasarkan\" dan \"memilih\"."
      },
      {
        "id": "d6bm_imb_01_q5",
        "syllabus_node_id": "d6_bm_imb_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Berdasarkan hukum pengimbuhan Tatabahasa Dewan, ayat manakah yang menggunakan imbuhan \"memper-\" atau \"memper-...-kan\" dengan betul?",
        "options_json": {
          "A": "Pihak sekolah bercadang untuk memperbesarkan lagi ruang perpustakaan demi keselesaan murid.",
          "B": "Langkah penguatkuasaan itu dilaksanakan bagi memperketatkan kawalan keselamatan di pintu pagar.",
          "C": "Gotong-royong komuniti dapat memperkukuh semangat kejiranan dalam kalangan penduduk setempat.",
          "D": "Para sukarelawan berusaha memperluaskan jaringan bantuan makanan kepada mangsa bencana alam."
        },
        "correct_option": "C",
        "explanation_text": "Mengikut hukum Tatabahasa Dewan, kata adjektif seperti \"kukuh\", \"besar\", \"ketat\" dan \"luas\" hanya boleh menerima awalan \"memper-\" tanpa akhiran \"-kan\" bagi membawa maksud menjadikan lebih, maka \"memperkukuh\" dalam pilihan C adalah tepat. Pilihan A (\"memperbesarkan\"), pilihan B (\"memperketatkan\") dan pilihan D (\"memperluaskan\") menyalahi hukum pengimbuhan kata adjektif dan sepatutnya dieja \"memperbesar\", \"memperketat\" dan \"memperluas\"."
      },
      {
        "id": "d6bm_eja_01_q1",
        "syllabus_node_id": "d6_bm_eja_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara kumpulan kata majmuk yang berikut, yang manakah kesemuanya dieja dengan betul mengikut Sistem Ejaan Bahasa Melayu DBP?",
        "options_json": {
          "A": "kerja sama, tanggung jawab, antarabangsa",
          "B": "bandaraya, pasaraya, olahraga",
          "C": "terimakasih, sukarela, setiausaha",
          "D": "kerjasama, tanggungjawab, warganegara"
        },
        "correct_option": "D",
        "explanation_text": "Perkataan \"kerjasama\", \"tanggungjawab\" dan \"warganegara\" dalam pilihan D tergolong dalam 15 kata majmuk mantap yang wajib dieja serangkai. Pilihan A memisahkan kata majmuk mantap (\"kerja sama\", \"tanggung jawab\"), manakala pilihan B (\"bandaraya\", \"pasaraya\") dan pilihan C (\"terimakasih\") merapatkan kata majmuk biasa yang sepatutnya dieja terpisah iaitu \"bandar raya\", \"pasar raya\" dan \"terima kasih\"."
      },
      {
        "id": "d6bm_eja_01_q2",
        "syllabus_node_id": "d6_bm_eja_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang mempunyai ejaan yang betul bagi kata sendi nama dan partikel.",
        "options_json": {
          "A": "Kejohanan merentas desa peringkat daerah itu akan diadakan disekolah kami pada hujung minggu ini.",
          "B": "Walaupun hujan turun dengan lebat, majlis perasmian di dewan terbuka itu tetap diteruskan.",
          "C": "Apapun yang berlaku, kita tidak patut berputus asa ketika menghadapi cabaran.",
          "D": "Buku latihan itu diletakkan diatas meja guru sebelum perhimpunan pagi bermula."
        },
        "correct_option": "B",
        "explanation_text": "Pilihan B tepat kerana kata hubung \"Walaupun\" dieja serangkai, kata sendi tempat \"di dewan\" dieja terpisah dan imbuhan pasif \"diteruskan\" dieja serangkai. Pilihan A (\"disekolah\") dan pilihan D (\"diatas\") salah kerana kata sendi nama \"di\" wajib dijarakkan daripada kata nama tempat atau arah, manakala pilihan C (\"Apapun\") salah kerana partikel \"pun\" pada kata ganti nama perlu dieja terpisah sebagai \"Apa-apa pun\"."
      },
      {
        "id": "d6bm_eja_01_q3",
        "syllabus_node_id": "d6_bm_eja_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara ayat yang berikut, yang manakah menggunakan ejaan kata pinjaman dan kata terbitan yang betul mengikut kamus Dewan Bahasa dan Pustaka?",
        "options_json": {
          "A": "Pihak berkuasa telah mengambil tindakkan tegas terhadap pemandu yang melanggar lampu isyarat.",
          "B": "Atlet itu mengalami masalah dihidrasi kerana kurang minum air selepas berlari di bawah matahari terik.",
          "C": "Setiap pegawai perubatan mestilah mengamalkan sikap profesional ketika merawat pesakit di klinik.",
          "D": "Guru kelas menggalakan murid supaya menyertai aktiviti kokurikulum bagi mencungkil bakat mereka."
        },
        "correct_option": "C",
        "explanation_text": "Ejaan \"profesional\" dalam pilihan C menepati ejaan baku kata pinjaman DBP (satu huruf \"f\" dan satu huruf \"s\"). Pilihan A salah kerana \"tindak + -an\" sepatutnya dieja \"tindakan\", pilihan B salah kerana ejaan baku DBP ialah \"dehidrasi\", manakala pilihan D salah kerana \"galak + meN-...-kan\" wajib mengekalkan dua huruf \"k\" iaitu \"menggalakkan\"."
      },
      {
        "id": "d6bm_eja_01_q4",
        "syllabus_node_id": "d6_bm_eja_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang menggunakan tanda baca yang betul sepenuhnya.",
        "options_json": {
          "A": "\"Wah, cantiknya lukisan batik yang kamu hasilkan ini!\" puji Cikgu Farah kepada Aina.",
          "B": "\"Wah! Cantiknya lukisan batik yang kamu hasilkan ini,\" puji Cikgu Farah kepada Aina.",
          "C": "\"Wah, cantiknya lukisan batik yang kamu hasilkan ini.\" Puji Cikgu Farah kepada Aina.",
          "D": "\"Wah, cantiknya lukisan batik yang kamu hasilkan ini\"! puji Cikgu Farah kepada Aina."
        },
        "correct_option": "A",
        "explanation_text": "Pilihan A tepat kerana tanda koma diletakkan selepas kata seru \"Wah\", tanda seru berada di hujung ayat seruan di dalam tanda petik penutup, dan perkataan \"puji\" bermula dengan huruf kecil. Pilihan B salah kerana meletakkan tanda seru sejurus selepas kata seru, pilihan C salah kerana menggunakan noktah dan huruf besar \"Puji\", manakala pilihan D meletakkan tanda seru di luar tanda petik."
      },
      {
        "id": "d6bm_eja_01_q5",
        "syllabus_node_id": "d6_bm_eja_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Pilih ayat yang mengeja kata majmuk terbitan atau kata majmuk gandaan dengan betul.",
        "options_json": {
          "A": "Syarikat tempatan itu telah mengambilalih pengurusan ladang kelapa sawit tersebut pada awal tahun.",
          "B": "Balai raya-balai raya di daerah ini telah dibersihkan untuk dijadikan pusat pemindahan sementara.",
          "C": "Proses pengenal pastian baka padi berkualiti tinggi memerlukan penyelidikan saintifik yang teliti.",
          "D": "Program sukaneka muhibah itu bertujuan untuk menyatupadukan penduduk kampung yang berbilang kaum."
        },
        "correct_option": "D",
        "explanation_text": "Apabila kata majmuk seperti \"satu padu\" menerima imbuhan apitan (\"meN-...-kan\"), ejaannya wajib dirapatkan menjadi \"menyatupadukan\", maka pilihan D adalah tepat. Pilihan A salah kerana kata majmuk berawalan sahaja mesti dieja terpisah (\"mengambil alih\"), pilihan B salah kerana penggandaan kata majmuk biasa hanya menggandakan kata pertama (\"balai-balai raya\"), dan pilihan C salah kerana kata majmuk berapitan mesti serangkai (\"pengenalpastian\")."
      },
      {
        "id": "d6bm_sint_01_q1",
        "syllabus_node_id": "d6_bm_sint_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih ayat pasif yang paling tepat bagi ayat aktif yang berikut:\n\n\"Saya telah menyiapkan tugasan projek sains itu semalam.\"",
        "options_json": {
          "A": "Tugasan projek sains itu telah saya siapkan semalam.",
          "B": "Tugasan projek sains itu saya telah siapkan semalam.",
          "C": "Tugasan projek sains itu telah disiapkan oleh saya semalam.",
          "D": "Tugasan projek sains itu disiapkan oleh saya telah semalam."
        },
        "correct_option": "A",
        "explanation_text": "Bagi ayat pasif kata ganti nama diri pertama (\"saya\"), kata bantu (\"telah\") mesti hadir di hadapan kata ganti nama diri dan imbuhan \"di-\" serta \"oleh\" tidak boleh digunakan, menjadikan pilihan A (\"telah saya siapkan\") tepat. Pilihan B salah kerana menyisipkan kata bantu antara \"saya\" dengan \"siapkan\", manakala pilihan C dan D salah kerana menggunakan binaan \"di-... oleh\" yang hanya khusus untuk kata ganti nama diri ketiga."
      },
      {
        "id": "d6bm_sint_01_q2",
        "syllabus_node_id": "d6_bm_sint_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih ayat majmuk yang gramatis penggunaan kata hubungnya mengikut Tatabahasa Dewan.",
        "options_json": {
          "A": "Pertandingan bola sepak itu terpaksa ditangguhkan oleh kerana hujan turun dengan lebat.",
          "B": "Amirul mengulang kaji pelajaran dengan tekun tetapi mendapat keputusan yang cemerlang.",
          "C": "Ibu menyiram pokok bunga di halaman rumah sementara ayah membaca surat khabar jika menunggu sarapan.",
          "D": "Kita hendaklah memakai topi keledar dengan kemas supaya keselamatan kepala terjamin ketika menunggang basikal."
        },
        "correct_option": "D",
        "explanation_text": "Pilihan D tepat kerana kata hubung pancangan keterangan \"supaya\" menyatakan tujuan dan \"ketika\" menyatakan waktu dengan tepat. Pilihan A salah kerana binaan \"oleh kerana\" tidak gramatis (sepatutnya \"kerana\" atau \"oleh sebab\"), pilihan B salah menggunakan kata hubung pertentangan \"tetapi\" untuk hubungan tujuan, dan pilihan C salah menggunakan kata hubung syarat \"jika\" untuk keterangan masa."
      },
      {
        "id": "d6bm_sint_01_q3",
        "syllabus_node_id": "d6_bm_sint_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih ayat susunan songsang yang betul bagi ayat susunan biasa yang berikut:\n\n\"Pengawas sekolah itu sungguh jujur ketika menjalankan tugasnya.\"",
        "options_json": {
          "A": "Sungguh jujur, pengawas sekolah itu ketika menjalankan tugasnya.",
          "B": "Sungguh jujur pengawas sekolah itu ketika menjalankan tugasnya.",
          "C": "Pengawas sekolah itu sungguh jujur oleh sebab menjalankan tugasnya.",
          "D": "Sungguh jujur menjalankan tugasnya pengawas sekolah itu."
        },
        "correct_option": "B",
        "explanation_text": "Dalam ayat susunan songsang melalui pendepanan frasa adjektif, predikat (\"Sungguh jujur\") diletakkan di hadapan subjek (\"pengawas sekolah itu\") tanpa tanda koma di antaranya, menjadikan pilihan B tepat. Pilihan A salah kerana meletakkan tanda koma antara predikat dengan subjek, pilihan C kekal dalam susunan biasa sambil mengubah maksud masa kepada sebab, dan pilihan D menggugurkan kata hubung \"ketika\" sehingga mencacatkan struktur ayat."
      },
      {
        "id": "d6bm_sint_01_q4",
        "syllabus_node_id": "d6_bm_sint_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih ayat cakap pindah yang paling tepat bagi ayat cakap ajuk di bawah.\n\n\"Jangan bermain berhampiran dengan longkang besar itu, Nabil,\" pesan ibu.",
        "options_json": {
          "A": "Ibu bertanya kepada Nabil supaya tidak bermain berhampiran dengan longkang besar itu.",
          "B": "Ibu memuji Nabil agar jangan bermain berhampiran dengan longkang besar itu.",
          "C": "Ibu berpesan kepada Nabil supaya tidak bermain berhampiran dengan longkang besar itu.",
          "D": "Ibu berpesan kepada Nabil supaya jangan bermain berhampiran dengan longkang besar ini."
        },
        "correct_option": "C",
        "explanation_text": "Dalam ayat cakap pindah, kata larangan \"Jangan\" ditukarkan kepada \"supaya tidak\" dan kata pelapor \"pesan\" dikekalkan maksudnya sebagai \"berpesan kepada Nabil\", menjadikan pilihan C tepat. Pilihan A salah menggunakan kata pelapor \"bertanya\", pilihan B salah menggunakan \"memuji\", manakala pilihan D masih mengekalkan kata perintah \"jangan\" serta menukar kata tunjuk \"itu\" kepada \"ini\"."
      },
      {
        "id": "d6bm_sint_01_q5",
        "syllabus_node_id": "d6_bm_sint_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Teliti keempat-empat ayat di bawah dan tentukan ayat yang mematuhi semua hukum sintaksis Tatabahasa Dewan.",
        "options_json": {
          "A": "Laporan belanjawan kelab keusahawanan itu mesti kamu semak sebelum diserahkan kepada guru penasihat.",
          "B": "Laporan belanjawan kelab keusahawanan itu kamu mesti semak sebelum diserahkan kepada guru penasihat.",
          "C": "Laporan belanjawan kelab keusahawanan itu mesti disemak oleh kamu sebelum diserahkan kepada guru penasihat.",
          "D": "Laporan belanjawan kelab keusahawanan itu mesti kamu menyemak sebelum diserahkan kepada guru penasihat."
        },
        "correct_option": "A",
        "explanation_text": "Bagi ayat pasif kata ganti nama diri kedua (\"kamu\"), rumus Tatabahasa Dewan ialah \"kata bantu + KGND kedua + kata kerja dasar tanpa awalan meN-/di-\", menjadikan \"mesti kamu semak\" dalam pilihan A tepat. Pilihan B salah kerana menyisipkan kata bantu di tengah frasa pasif, pilihan C salah kerana menggunakan binaan pasif \"di-... oleh\" bagi KGND kedua, dan pilihan D salah kerana mengekalkan awalan aktif \"meN-\" (\"menyemak\")."
      },
      {
        "id": "d6bm_peri_01_q1",
        "syllabus_node_id": "d6_bm_peri_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pilih simpulan bahasa yang paling sesuai untuk melengkapkan ayat di bawah.\n\n\"Farhan disukai oleh jiran-jirannya kerana dia seorang anak muda yang ________ dan sentiasa membantu warga emas mengangkat barang.\"",
        "options_json": {
          "A": "ringan mulut",
          "B": "ringan tulang",
          "C": "berat tulang",
          "D": "keras kepala"
        },
        "correct_option": "B",
        "explanation_text": "Simpulan bahasa \"ringan tulang\" bermaksud rajin bekerja dan suka menghulurkan bantuan, menepati sikap Farhan dalam ayat. Pilihan A (\"ringan mulut\") bermaksud peramah atau suka bercakap, pilihan C (\"berat tulang\") bermaksud pemalas, manakala pilihan D (\"keras kepala\") bermaksud degil."
      },
      {
        "id": "d6bm_peri_01_q2",
        "syllabus_node_id": "d6_bm_peri_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Siti menyimpan baki wang sakunya sebanyak dua ringgit pada setiap hari persekolahan sehingga berjaya membeli sebuah basikal baharu pada hujung tahun. Peribahasa yang paling tepat menggambarkan amalan Siti ialah ________.",
        "options_json": {
          "A": "hangat-hangat tahi ayam",
          "B": "bagai aur dengan tebing",
          "C": "sedikit-sedikit, lama-lama menjadi bukit",
          "D": "sesal dahulu pendapatan, sesal kemudian tidak berguna"
        },
        "correct_option": "C",
        "explanation_text": "Peribahasa \"sedikit-sedikit, lama-lama menjadi bukit\" bermaksud usaha atau tabungan yang dilakukan sedikit demi sedikit akhirnya akan menjadi banyak, tepat dengan amalan Siti. Pilihan A bermaksud usaha yang tidak bersungguh-sungguh, pilihan B bermaksud saling membantu, dan pilihan D bermaksud perlu berfikir sebelum bertindak agar tidak menyesal."
      },
      {
        "id": "d6bm_peri_01_q3",
        "syllabus_node_id": "d6_bm_peri_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Lengkapkan ayat di bawah dengan peribahasa yang paling sesuai.\n\n\"Penduduk kampung berjaya membina jambatan kayu yang rosak akibat banjir dalam masa sehari sahaja kerana mereka mengamalkan semangat ________.\"",
        "options_json": {
          "A": "menangguk di air keruh",
          "B": "harapkan pagar, pagar makan padi",
          "C": "bagai mencurah air ke daun keladi",
          "D": "berat sama dipikul, ringan sama dijinjing"
        },
        "correct_option": "D",
        "explanation_text": "Peribahasa \"berat sama dipikul, ringan sama dijinjing\" bermaksud sikap bermuafakat dan bekerjasama menanggung susah senang bersama, selari dengan semangat gotong-royong penduduk kampung. Pilihan A bermaksud mengambil kesempatan dalam kesusahan orang lain, pilihan B bermaksud pecah amanah, dan pilihan C bermaksud nasihat yang tidak diendahkan."
      },
      {
        "id": "d6bm_peri_01_q4",
        "syllabus_node_id": "d6_bm_peri_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Puan Salma dan suaminya mendidik serta menjaga anak bongsu mereka dengan penuh kasih sayang dan perhatian yang rapi sejak kecil lagi. Perumpamaan yang paling tepat bagi situasi ini ialah ________.",
        "options_json": {
          "A": "bagai menatang minyak yang penuh",
          "B": "bagai isi dengan kuku",
          "C": "bagai layang-layang putus tali",
          "D": "bagai mencurah garam ke laut"
        },
        "correct_option": "A",
        "explanation_text": "Perumpamaan \"bagai menatang minyak yang penuh\" bermaksud memelihara atau mendidik anak dengan penuh kasih sayang dan sangat berhati-hati, tepat dengan tindakan Puan Salma dan suaminya. Pilihan B merujuk hubungan persahabatan yang erat, pilihan C bermaksud hilang arah tujuan, dan pilihan D bermaksud melakukan pekerjaan yang sia-sia."
      },
      {
        "id": "d6bm_peri_01_q5",
        "syllabus_node_id": "d6_bm_peri_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Baca situasi di bawah dengan teliti.\n\n\"Encik Hakim dilantik sebagai bendahari persatuan penduduk kerana dipercayai ramai. Namun begitu, beliau telah menyalahgunakan wang kutipan tersebut untuk kepentingan peribadinya sendiri.\"\n\nPeribahasa manakah yang paling tepat menggambarkan perbuatan Encik Hakim?",
        "options_json": {
          "A": "Berani kerana benar, takut kerana salah",
          "B": "Harapkan pagar, pagar makan padi",
          "C": "Malang tidak berbau",
          "D": "Sediakan payung sebelum hujan"
        },
        "correct_option": "B",
        "explanation_text": "Peribahasa \"Harapkan pagar, pagar makan padi\" bermaksud seseorang yang diberi kepercayaan untuk menjaga sesuatu amanah tetapi dia sendiri yang mengkhianatinya, menepati perbuatan pecah amanah Encik Hakim. Pilihan A merujuk keberanian mempertahankan kebenaran, pilihan C merujuk kecelakaan yang berlaku secara tidak diduga, dan pilihan D bermaksud membuat persediaan awal sebelum kesusahan menimpa."
      },
      {
        "id": "d6bm_seni_01_q1",
        "syllabus_node_id": "d6_bm_seni_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca pantun di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\nTerbang merpati di pohon jati,\nSinggah berehat di dahan sena;\nJaga kebersihan sepenuh hati,\nHidup pun sihat badan sempurna.\n\nApakah maksud utama pantun di atas?",
        "options_json": {
          "A": "Burung merpati gemar hinggap di atas pokok jati dan sena.",
          "B": "Kita perlu memelihara pokok hutan untuk tempat burung berehat.",
          "C": "Amalan menjaga kebersihan dengan bersungguh-sungguh menjamin kesihatan tubuh badan.",
          "D": "Seseorang yang kerap berehat di bawah pokok akan hidup lebih lama."
        },
        "correct_option": "C",
        "explanation_text": "Maksud pantun empat kerat terletak pada baris ketiga dan keempat (\"Jaga kebersihan sepenuh hati / Hidup pun sihat badan sempurna\"), iaitu menjaga kebersihan akan menjamin kesihatan tubuh badan (pilihan C). Pilihan A, B dan D salah kerana mentafsir baris pembayang (baris pertama dan kedua) sebagai maksud pantun."
      },
      {
        "id": "d6bm_seni_01_q2",
        "syllabus_node_id": "d6_bm_seni_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca rangkap puisi tradisional di bawah dengan teliti.\n\nDengarlah pesan wahai saudara,\nBekerjasama membina negara,\nJangan dibiar sengketa membara,\nAgar hidupmu kekal sejahtera.\n\nBerdasarkan ciri bentuk dan rimanya, puisi di atas ialah ________.",
        "options_json": {
          "A": "syair, kerana mempunyai rima akhir a-a-a-a dan keempat-empat baris merupakan isi",
          "B": "pantun empat kerat, kerana dua baris pertama berfungsi sebagai pembayang",
          "C": "gurindam, kerana setiap rangkap terdiri daripada dua baris bersyarat dan jawapan",
          "D": "sajak, kerana tidak terikat dengan jumlah baris dan pola rima tertentu"
        },
        "correct_option": "A",
        "explanation_text": "Puisi di atas ialah syair kerana mempunyai empat baris serangkap dengan rima akhir yang sama iaitu a-a-a-a (\"saudara\", \"negara\", \"membara\", \"sejahtera\") dan kesemua barisnya menyampaikan isi tanpa pembayang (pilihan A). Pilihan B salah kerana pantun mempunyai pembayang dan rima a-b-a-b, pilihan C salah kerana gurindam berangkap dua baris, dan pilihan D salah kerana sajak ialah puisi moden berbentuk bebas."
      },
      {
        "id": "d6bm_seni_01_q3",
        "syllabus_node_id": "d6_bm_seni_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih baris pembayang yang paling sesuai untuk melengkapkan pantun empat kerat di bawah mengikut skema rima yang tepat.\n\nIndah mekar bunga melati,\n________________________________;\nSifat amanah tersemat di hati,\nTinggi budi disanjung negeri.",
        "options_json": {
          "A": "Harum mewangi di tepi laman",
          "B": "Tumbuh subur di taman berseri",
          "C": "Kejujuran mesti kita amalkan hari-hari",
          "D": "Dipetik dara pada waktu petang"
        },
        "correct_option": "B",
        "explanation_text": "Baris kedua pantun mesti berupa pembayang dan menepati skema rima a-b-a-b dengan baris keempat (\"negeri\"), maka pilihan B (\"Tumbuh subur di taman berseri\") paling tepat kerana berakhir dengan bunyi \"-ri\". Pilihan A (\"laman\") dan pilihan D (\"petang\") tidak menepati rima akhir baris keempat, manakala pilihan C mengandungi unsur isi maksud terus yang tidak sesuai diletakkan pada bahagian pembayang."
      },
      {
        "id": "d6bm_seni_01_q4",
        "syllabus_node_id": "d6_bm_seni_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca sajak di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\nSeberkas lidi teguh bersatu,\nMenyapu kotoran di halaman desa,\nAndai terlerai satu per satu,\nMudahlah patah ditiup masa.\n\nBegitulah kita warga merdeka,\nWalau berbeza adat dan bahasa,\nGenggam erat ikatan mesra,\nAman makmur bumi tercinta.\n\nApakah pengajaran utama yang ingin disampaikan oleh penyajak melalui kiasan \"seberkas lidi\"?",
        "options_json": {
          "A": "Penduduk desa perlu menggunakan penyapu lidi untuk membersihkan halaman rumah pada setiap hari.",
          "B": "Lidi kelapa yang disimpan secara berasingan lebih tahan lama dan sukar patah.",
          "C": "Masyarakat yang mempunyai adat dan bahasa yang berbeza tidak dapat bekerjasama.",
          "D": "Perpaduan yang kukuh menjadikan masyarakat kuat dan menjamin keamanan negara."
        },
        "correct_option": "D",
        "explanation_text": "Kiasan \"seberkas lidi teguh bersatu\" melambangkan kekuatan perpaduan masyarakat berbilang kaum yang menjamin keamanan dan kemakmuran negara, menjadikan pilihan D tepat. Pilihan A dan B mentafsir kiasan sajak secara harfiah, manakala pilihan C bercanggah dengan mesej penyajak yang menyeru perpaduan walaupun berbeza adat dan bahasa."
      },
      {
        "id": "d6bm_seni_01_q5",
        "syllabus_node_id": "d6_bm_seni_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Baca puisi tradisional di bawah dengan teliti.\n\nAduhai rakan dengarlah cerita,\nKisah si Bujang leka bermimpi,\nBuku dibiarkan berhabuk di meja,\nMasa berlalu tidak dipeduli,\nEsok peperiksaan baru menggelabah,\nMenyesal pun sudah tiada gunanya.\n\nMengapakah karya di atas dikelaskan sebagai seloka dan apakah mesej tersiratnya?",
        "options_json": {
          "A": "Berbentuk dua baris berpasangan dengan rima sama, serta memuji sikap rajin belajar.",
          "B": "Mempunyai pembayang dan maksud berima a-b-a-b, serta menasihati murid agar banyak berehat.",
          "C": "Berbentuk puisi bebas berunsur sindiran halus, serta mengingatkan murid agar membuat persediaan awal dan menghargai masa.",
          "D": "Terdiri daripada empat baris berima a-a-a-a, serta mengisahkan kejayaan seseorang dalam peperiksaan."
        },
        "correct_option": "C",
        "explanation_text": "Seloka ialah puisi tradisional berbentuk bebas (tidak terikat dengan jumlah baris atau rima tetap) yang mengandungi unsur jenaka atau sindiran halus untuk menyampaikan pengajaran; dalam petikan ini, sindiran terhadap si Bujang mengingatkan murid supaya menghargai masa dan belajar lebih awal (pilihan C). Pilihan A merujuk ciri gurindam, pilihan B merujuk ciri pantun, dan pilihan D merujuk ciri syair yang kesemuanya tidak sepadan dengan bentuk serta mesej petikan."
      },
      {
        "id": "d6bm_pema_01_q1",
        "syllabus_node_id": "d6_bm_pema_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca petikan di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\n\"Kempen Makan Secara Sihat di Sekolah Kebangsaan Murni memperkenalkan konsep 'Suku Suku Separuh' kepada semua murid. Melalui panduan ini, separuh pinggan hendaklah diisi dengan buah-buahan dan sayur-sayuran, suku pinggan dengan sumber karbohidrat seperti nasi, dan suku lagi dengan sumber protein seperti ikan atau ayam. Selain itu, murid digalakkan minum air kosong sekurang-kurangnya enam hingga lapan gelas sehari serta mengurangkan minuman bergula.\"\n\nBerdasarkan petikan, bahagian manakah pada pinggan yang perlu diisi dengan kuantiti paling banyak?",
        "options_json": {
          "A": "Sumber karbohidrat seperti nasi dan roti",
          "B": "Sumber protein seperti ikan dan ayam",
          "C": "Minuman manis dan makanan ringan",
          "D": "Buah-buahan dan sayur-sayuran"
        },
        "correct_option": "D",
        "explanation_text": "Petikan menyatakan secara tersurat bahawa separuh pinggan perlu diisi dengan buah-buahan dan sayur-sayuran, iaitu bahagian yang paling banyak berbanding karbohidrat (suku) dan protein (suku), maka pilihan D tepat. Pilihan A dan B hanya meliputi suku bahagian pinggan, manakala pilihan C bercanggah dengan panduan untuk mengurangkan minuman bergula."
      },
      {
        "id": "d6bm_pema_01_q2",
        "syllabus_node_id": "d6_bm_pema_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca petikan di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\n\"Semasa kejadian ribut petir, orang ramai dinasihatkan supaya segera masuk ke dalam bangunan yang kukuh dan menjauhi kawasan lapang seperti padang atau pantai. Elakkan berteduh di bawah pokok yang tinggi kerana pokok mudah disambar kilat. Pengguna juga perlu mencabut palam peralatan elektrik di rumah bagi mengelakkan kerosakan akibat lonjakan arus elektrik, dan menunggu sekurang-kurangnya 30 minit selepas bunyi guruh terakhir sebelum kembali melakukan aktiviti di luar rumah.\"\n\nBilakah waktu yang selamat untuk menyambung semula aktiviti di luar rumah selepas ribut petir?",
        "options_json": {
          "A": "Sebaik sahaja hujan mulai berhenti walaupun guruh masih kedengaran.",
          "B": "Sekurang-kurangnya 30 minit selepas bunyi guruh yang terakhir kedengaran.",
          "C": "Selepas semua palam peralatan elektrik di dalam rumah dipasang semula.",
          "D": "Lima minit selepas berteduh di bawah pokok yang tinggi dan rimbun."
        },
        "correct_option": "B",
        "explanation_text": "Petikan menyatakan dengan jelas bahawa aktiviti di luar rumah hanya selamat disambung selepas menunggu sekurang-kurangnya 30 minit daripada bunyi guruh terakhir (pilihan B). Pilihan A dan C tidak menepati tempoh keselamatan yang dinyatakan, manakala pilihan D salah kerana petikan melarang orang ramai berteduh di bawah pokok tinggi."
      },
      {
        "id": "d6bm_pema_01_q3",
        "syllabus_node_id": "d6_bm_pema_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca petikan di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\n\"Kelab Reka Cipta Sekolah Kebangsaan Seri Jaya telah mencipta sistem siraman automatik berasaskan tenaga suria untuk kebun sayur sekolah mereka. Sistem ini dilengkapi pengesan kelembapan tanah yang akan mengaktifkan pam air hanya apabila tanah menjadi kering. Sejak alat tersebut digunakan, penggunaan air di kebun sekolah berkurangan sebanyak 40 peratus dan tanaman kekal subur walaupun sepanjang cuti sekolah.\"\n\nApakah kelebihan tersirat paling utama sistem siraman automatik ini kepada pihak sekolah?",
        "options_json": {
          "A": "Mengurangkan pembaziran air dan menjimatkan tenaga kerja semasa cuti sekolah.",
          "B": "Menghapuskan keperluan menggunakan cahaya matahari untuk pertumbuhan sayur.",
          "C": "Membolehkan kebun sayur disiram secara berterusan tanpa henti sepanjang hari.",
          "D": "Menghasilkan baja organik secara automatik apabila tanah menjadi lembap."
        },
        "correct_option": "A",
        "explanation_text": "Berdasarkan bukti bahawa penggunaan air berkurangan 40 peratus dan tanaman kekal subur sepanjang cuti sekolah tanpa siraman manual, kelebihan tersirat utama ialah penjimatan air dan tenaga kerja (pilihan A). Pilihan B dan D tidak disokong oleh petikan, manakala pilihan C salah kerana pengesan hanya mengaktifkan pam apabila tanah kering, bukannya berterusan."
      },
      {
        "id": "d6bm_pema_01_q4",
        "syllabus_node_id": "d6_bm_pema_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca petikan di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\n\"Ketika pulang dari kedai buku, Danish ternampak sebuah dompet kulit tercicir di tepi perhentian bas. Di dalamnya terdapat sejumlah wang tunai dan sekeping kad pengenalan milik seorang warga emas yang tinggal di taman perumahan bersebelahan. Tanpa berfikir panjang, Danish segera memaklumkan hal itu kepada ayahnya lalu mereka berdua memulangkan dompet tersebut terus ke rumah pemiliknya. Pemilik dompet itu berasa amat terharu dan cuba menghulurkan wang sagu hati, namun Danish menolaknya dengan sopan.\"\n\nApakah dua nilai murni yang paling jelas terpancar melalui tindakan Danish?",
        "options_json": {
          "A": "Berjimat cermat dan berani menegur kesilapan orang lain",
          "B": "Rajin membaca buku dan menghormati jiran tetangga",
          "C": "Kejujuran dan keikhlasan dalam membantu orang lain",
          "D": "Berdaya saing dan mementingkan keuntungan diri sendiri"
        },
        "correct_option": "C",
        "explanation_text": "Tindakan Danish memulangkan dompet yang mengandungi wang tunai membuktikan sifat kejujuran, manakala keputusannya menolak wang sagu hati dengan sopan mencerminkan keikhlasan tanpa mengharapkan balasan (pilihan C). Pilihan A, B dan D tidak menepati bukti peristiwa utama yang dipaparkan dalam petikan."
      },
      {
        "id": "d6bm_pema_01_q5",
        "syllabus_node_id": "d6_bm_pema_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Baca petikan di bawah dengan teliti, kemudian jawab soalan yang berikutnya.\n\n\"Usahawan tani muda, Puan Hanim, memasarkan kerepek pisang hasil ladang keluarganya melalui platform e-dagang sejak dua tahun lalu. Pada mulanya, jualan beliau agak perlahan kerana pembungkusan produk kurang menarik dan maklumat tarikh luput tidak dicetak dengan jelas. Setelah beliau menaik taraf reka bentuk bungkusan menjadi kedap udara serta memaparkan label nutrisi lengkap, tempahan pelanggan meningkat tiga kali ganda hingga menembusi pasaran luar negeri. Beliau turut menyisihkan 20 peratus daripada untung bersih bulanan sebagai simpanan kecemasan perniagaan.\"\n\nBerdasarkan keseluruhan petikan, rumusan manakah yang paling tepat tentang faktor kejayaan perniagaan Puan Hanim?",
        "options_json": {
          "A": "Perniagaan melalui platform e-dagang sentiasa menjamin keuntungan segera tanpa perlu menjaga kualiti pembungkusan.",
          "B": "Puan Hanim menghentikan jualan dalam talian dan beralih kepada jualan di pasar malam untuk meningkatkan tempahan.",
          "C": "Seluruh untung bersih bulanan perniagaan telah dibelanjakan untuk membeli ladang pisang yang baharu.",
          "D": "Penambahbaikan kualiti pembungkusan dan maklumat produk yang jelas berjaya meningkatkan kepercayaan pelanggan serta jualan."
        },
        "correct_option": "D",
        "explanation_text": "Rumusan dalam pilihan D tepat kerana menggabungkan punca dan kesan utama petikan, iaitu peningkatan kualiti pembungkusan kedap udara serta label nutrisi yang jelas berjaya menggandakan tempahan pelanggan. Pilihan A bercanggah dengan cabaran awal jualan beliau, pilihan B menyimpang daripada fakta teks, dan pilihan C tersalah tafsir kerana hanya 20 peratus untung bersih disimpan sebagai dana kecemasan."
      }
    ]
  };
});
