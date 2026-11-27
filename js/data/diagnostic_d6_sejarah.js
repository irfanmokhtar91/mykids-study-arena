/**
 * Generated from js/data/diagnostic_d6_sejarah.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.d6 = App.DiagnosticBanks.d6 || {};
    App.DiagnosticBanks.d6.sejarah = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "d6_sej_pemb_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "pembentukan_malaysia",
        "topic_name": "Sejarah • Unit 1: Pembentukan Malaysia",
        "subtopic_name": "Idea, Sebab, Tokoh & Negeri Anggota (16 September 1963)",
        "prerequisite_node_id": null,
        "expected_time_ms": 30000,
        "bloom_level": "Remember"
      },
      {
        "id": "d6_sej_pemb_02",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "pembentukan_malaysia",
        "topic_name": "Sejarah • Unit 1: Pembentukan Malaysia",
        "subtopic_name": "Langkah-langkah Pembentukan (JSKM, Cobbold, JAK, UNMM) & Cabaran",
        "prerequisite_node_id": "d6_sej_pemb_01",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      },
      {
        "id": "d6_sej_neg_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "negeri_malaysia",
        "topic_name": "Sejarah • Unit 2: Negeri-negeri di Malaysia",
        "subtopic_name": "Asal Usul Nama, Gelaran Ketua Negeri, Ibu Negeri, Bandar Diraja & Lambang",
        "prerequisite_node_id": "d6_sej_pemb_01",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_sej_rukun_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "rukun_negara",
        "topic_name": "Sejarah • Unit 3: Rukun Negara",
        "subtopic_name": "Latar Belakang (MAGERAN/MAPEN, 31 Ogos 1970), Matlamat & Lima Prinsip",
        "prerequisite_node_id": "d6_sej_pemb_02",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_sej_kaum_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "kaum_budaya",
        "topic_name": "Sejarah • Unit 4–6: Kaum, Agama & Perayaan",
        "subtopic_name": "Kepelbagaian Kaum, Agama/Kepercayaan & Perayaan Utama di Malaysia",
        "prerequisite_node_id": "d6_sej_rukun_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_sej_pemp_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "pemimpin_negara",
        "topic_name": "Sejarah • Unit 7: Pemimpin Negara di Malaysia",
        "subtopic_name": "Perdana Menteri Malaysia, Gelaran & Sumbangan Utama Negara",
        "prerequisite_node_id": "d6_sej_pemb_01",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_sej_ekon_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "ekonomi_sukan",
        "topic_name": "Sejarah • Unit 8–9: Kemajuan Ekonomi & Sukan Kebanggaan",
        "subtopic_name": "Kegiatan Ekonomi (Pertanian, Perindustrian, Pelancongan) & Pencapaian Sukan",
        "prerequisite_node_id": "d6_sej_pemp_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_sej_dunia_01",
        "subject": "sejarah",
        "grade_level": "d6",
        "chapter_id": "malaysia_dunia",
        "topic_name": "Sejarah • Unit 10: Malaysia dan Dunia",
        "subtopic_name": "Kerjasama Serantau & Antarabangsa (ASEAN, Komanwel, OIC, PBB)",
        "prerequisite_node_id": "d6_sej_ekon_01",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "d6sj_pemb_01_q1",
        "syllabus_node_id": "d6_sej_pemb_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah wilayah yang bergabung membentuk Persekutuan Malaysia pada hari pemasyhurannya pada 16 September 1963?",
        "options_json": {
          "A": "Persekutuan Tanah Melayu, Singapura, Brunei dan Sarawak",
          "B": "Persekutuan Tanah Melayu, Singapura, Sarawak dan Sabah",
          "C": "Persekutuan Tanah Melayu, Brunei, Sarawak dan Sabah",
          "D": "Persekutuan Tanah Melayu, Singapura, Indonesia dan Sabah"
        },
        "correct_option": "B",
        "explanation_text": "Persekutuan Malaysia yang diisytiharkan pada 16 September 1963 terdiri daripada Persekutuan Tanah Melayu, Singapura, Sarawak dan Sabah. Pilihan A dan C salah kerana walaupun Brunei terlibat dalam perundingan awal, Brunei tidak menyertai Malaysia; pilihan D salah kerana Indonesia bukan wilayah anggota Malaysia."
      },
      {
        "id": "d6sj_pemb_01_q2",
        "syllabus_node_id": "d6_sej_pemb_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Siapakah tokoh pegawai British paling awal yang mencadangkan penggabungan Sarawak, Sabah, Negeri-negeri Melayu dan Negeri-negeri Selat pada tahun 1887?",
        "options_json": {
          "A": "Sir Malcolm MacDonald",
          "B": "Lord Cobbold",
          "C": "Lord Brassey",
          "D": "Sir Gerald Templer"
        },
        "correct_option": "C",
        "explanation_text": "Lord Brassey (Pengarah Syarikat Berpiagam Borneo Utara British) ialah tokoh paling awal yang mengemukakan cadangan penggabungan tersebut pada tahun 1887, jauh sebelum ucapan Tunku Abdul Rahman pada tahun 1961. Sir Malcolm MacDonald mengemukakan cadangan pada tahun 1951, Lord Cobbold mempengerusikan Suruhanjaya Cobbold pada tahun 1962, manakala Sir Gerald Templer ialah Pesuruhjaya Tinggi British semasa Darurat."
      },
      {
        "id": "d6sj_pemb_01_q3",
        "syllabus_node_id": "d6_sej_pemb_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pasangan tokoh manakah yang kedua-duanya merupakan pemimpin dari Sarawak yang terlibat dalam pembentukan Malaysia?",
        "options_json": {
          "A": "Tun Temenggung Jugah anak Barieng dan Stephen Kalong Ningkan",
          "B": "Tun Datu Mustapha Datu Harun dan Tun Muhammad Fuad Stephens",
          "C": "Lee Kuan Yew dan Tun Temenggung Jugah anak Barieng",
          "D": "Tun Abdul Razak Hussein dan Datu Bandar Abang Haji Mustapha"
        },
        "correct_option": "A",
        "explanation_text": "Tun Temenggung Jugah anak Barieng dan Stephen Kalong Ningkan (Ketua Menteri Sarawak pertama) kedua-duanya ialah pemimpin dari Sarawak. Pilihan B ialah pemimpin dari Sabah; pilihan C menggabungkan tokoh Singapura (Lee Kuan Yew) dengan Sarawak; pilihan D menggabungkan tokoh Tanah Melayu (Tun Abdul Razak) dengan Sarawak."
      },
      {
        "id": "d6sj_pemb_01_q4",
        "syllabus_node_id": "d6_sej_pemb_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Mengapakah Tunku Abdul Rahman mencadangkan penyertaan Sarawak dan Sabah bersama-sama Singapura dalam gagasan Malaysia daripada aspek demografi?",
        "options_json": {
          "A": "Untuk membolehkan British mengekalkan pentadbiran di Borneo",
          "B": "Untuk menggabungkan Tanah Melayu dengan Filipina di bawah Melayu Raya",
          "C": "Untuk menyekat kemajuan pelabuhan perdagangan di Singapura",
          "D": "Untuk mewujudkan keseimbangan kaum antara penduduk di wilayah yang bergabung"
        },
        "correct_option": "D",
        "explanation_text": "Salah satu daripada empat sebab utama pembentukan Malaysia ialah mewujudkan keseimbangan kaum; penyertaan Singapura sahaja tidak memadai tanpa penyertaan penduduk bumiputera di Sarawak dan Sabah. Pilihan A, B dan C bercanggah dengan matlamat sebenar Malaysia iaitu mempercepat kemerdekaan, menjamin keselamatan dan memajukan sosioekonomi."
      },
      {
        "id": "d6sj_pemb_01_q5",
        "syllabus_node_id": "d6_sej_pemb_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Bagaimanakah gagasan Melayu Raya oleh tokoh nasionalis tempatan berbeza daripada gagasan pembentukan Malaysia oleh Tunku Abdul Rahman pada tahun 1961?",
        "options_json": {
          "A": "Melayu Raya hanya menggabungkan Tanah Melayu dan Singapura, manakala gagasan Malaysia melibatkan semua negara Asia Tenggara",
          "B": "Melayu Raya melibatkan Tanah Melayu, Indonesia, Kalimantan dan Filipina, manakala gagasan Malaysia merangkumi Tanah Melayu, Singapura, Sarawak, Sabah dan Brunei",
          "C": "Melayu Raya dicadangkan oleh pentadbir British demi kepentingan ekonomi, manakala gagasan Malaysia dicadangkan oleh Pertubuhan Bangsa-Bangsa Bersatu",
          "D": "Melayu Raya bertujuan mengekalkan pemerintahan kolonial British, manakala gagasan Malaysia bertujuan melewatkan kemerdekaan Sarawak dan Sabah"
        },
        "correct_option": "B",
        "explanation_text": "Gagasan Melayu Raya yang diperjuangkan oleh tokoh tempatan seperti Ibrahim Haji Yaakob dan Dr. Burhanuddin al-Helmy merangkumi Tanah Melayu, Indonesia, Kalimantan dan Filipina, bukannya Tanah Melayu dan Singapura sahaja (pilihan A). Gagasan Malaysia pada tahun 1961 pula dicadangkan oleh Tunku Abdul Rahman melibatkan Tanah Melayu, Singapura, Sarawak, Sabah dan Brunei pada peringkat awal untuk mempercepat kemerdekaan."
      },
      {
        "id": "d6sj_pemb_02_q1",
        "syllabus_node_id": "d6_sej_pemb_02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah tujuan utama penubuhan Suruhanjaya Cobbold pada bulan Januari 1962?",
        "options_json": {
          "A": "Mengadakan pungutan suara rakyat di seluruh Singapura",
          "B": "Menyelesaikan ketegangan diplomatik antara Malaysia dengan Indonesia",
          "C": "Merangka perlembagaan pentadbiran baharu bagi Brunei Darussalam",
          "D": "Meninjau pendapat dan reaksi penduduk Sarawak dan Sabah terhadap gagasan Malaysia"
        },
        "correct_option": "D",
        "explanation_text": "Suruhanjaya Cobbold yang dipengerusikan oleh Lord Cobbold ditugaskan meninjau pendapat dan reaksi penduduk Sarawak dan Sabah mengenai penyertaan dalam Malaysia serta membuat syor perlembagaan. Pungutan suara (referendum) dijalankan oleh kerajaan Singapura (pilihan A), bukannya Suruhanjaya Cobbold."
      },
      {
        "id": "d6sj_pemb_02_q2",
        "syllabus_node_id": "d6_sej_pemb_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Di wilayah manakah pemungutan suara rakyat (referendum) dilaksanakan pada bulan September 1962 bagi menentukan persetujuan penduduk menyertai Malaysia?",
        "options_json": {
          "A": "Singapura",
          "B": "Sarawak",
          "C": "Sabah",
          "D": "Brunei"
        },
        "correct_option": "A",
        "explanation_text": "Referendum atau pemungutan suara rakyat diadakan di Singapura pada 1 September 1962 dan majoriti rakyatnya bersetuju menyertai Malaysia. Ramai murid tersilap menyangka referendum turut diadakan di Sarawak dan Sabah (pilihan B dan C), sedangkan pandangan penduduk Sarawak dan Sabah ditinjau melalui Suruhanjaya Cobbold dan UNMM."
      },
      {
        "id": "d6sj_pemb_02_q3",
        "syllabus_node_id": "d6_sej_pemb_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Pilih susunan kronologi langkah-langkah ke arah pembentukan Malaysia yang betul dari awal hingga akhir.",
        "options_json": {
          "A": "Suruhanjaya Cobbold → Penubuhan JSKM → Perjanjian Malaysia → Penubuhan JAK",
          "B": "Penubuhan JAK → Penubuhan JSKM → Suruhanjaya Cobbold → Penubuhan UNMM",
          "C": "Penubuhan JSKM → Suruhanjaya Cobbold → Penubuhan JAK → Penubuhan UNMM",
          "D": "Penubuhan UNMM → Suruhanjaya Cobbold → Penubuhan JSKM → Pemasyhuran Malaysia"
        },
        "correct_option": "C",
        "explanation_text": "Susunan kronologi yang tepat bermula dengan penubuhan Jawatankuasa Setia Kawan Malaysia (JSKM, Julai 1961), diikuti Suruhanjaya Cobbold (Januari 1962), Jawatankuasa Antara Kerajaan (JAK, Ogos 1962), Perjanjian Malaysia (Julai 1963) dan penubuhan UNMM (Ogos 1963) sebelum pemasyhuran. Pilihan A, B dan D menyalahi urutan masa sebenar."
      },
      {
        "id": "d6sj_pemb_02_q4",
        "syllabus_node_id": "d6_sej_pemb_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah punca utama bantahan kerajaan Filipina terhadap pembentukan Persekutuan Malaysia pada tahun 1963?",
        "options_json": {
          "A": "Bimbang pembentukan Malaysia akan menggugat kedudukan ekonomi Singapura",
          "B": "Membuat tuntutan hak milik ke atas wilayah Sabah",
          "C": "Ingin menyatukan Sarawak dengan parti politik tempatan di Singapura",
          "D": "Membantah keputusan Brunei yang menarik diri daripada perundingan"
        },
        "correct_option": "B",
        "explanation_text": "Filipina membantah pembentukan Malaysia kerana kerajaan Filipina menuntut hak milik ke atas wilayah Sabah. Murid sering mengelirukan alasan Filipina ini dengan bantahan Indonesia yang berpunca daripada kebimbangan terhadap kedudukan negaranya di rantau ini, atau bantahan SUPP di Sarawak yang ingin menubuhkan persekutuan berasingan."
      },
      {
        "id": "d6sj_pemb_02_q5",
        "syllabus_node_id": "d6_sej_pemb_02",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Mengapakah Misi Pertubuhan Bangsa-Bangsa Bersatu ke Malaysia (UNMM) tetap ditubuhkan pada bulan Ogos 1963 walaupun Suruhanjaya Cobbold telah menyiapkan laporannya pada tahun 1962?",
        "options_json": {
          "A": "Kerana laporan Suruhanjaya Cobbold ditolak sepenuhnya oleh kerajaan British di London",
          "B": "Kerana majoriti pengundi Singapura menolak penyertaan dalam referendum 1962",
          "C": "Kerana Jawatankuasa Antara Kerajaan (JAK) gagal menandatangani Perjanjian Malaysia",
          "D": "Kerana Indonesia dan Filipina mahukan pengesahan semula oleh pihak berkecuali (PBB) terhadap kehendak penduduk Sarawak dan Sabah"
        },
        "correct_option": "D",
        "explanation_text": "UNMM ditubuhkan selepas Perjanjian Malaysia atas persetujuan rundingan bersama Indonesia dan Filipina supaya pihak berkecuali (PBB) meninjau dan mengesahkan semula persetujuan penduduk Sarawak dan Sabah. Berbeza dengan Suruhanjaya Cobbold yang meninjau reaksi awal pada tahun 1962, UNMM bertujuan meredakan bantahan serantau, bukannya kerana laporan Cobbold atau JAK gagal (pilihan A dan C)."
      },
      {
        "id": "d6sj_neg_01_q1",
        "syllabus_node_id": "d6_sej_neg_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah gelaran rasmi ketua negeri bagi Negeri Sembilan dan Perlis?",
        "options_json": {
          "A": "Kedua-duanya menggunakan gelaran Sultan",
          "B": "Yang di-Pertua Negeri bagi Negeri Sembilan dan Sultan bagi Perlis",
          "C": "Yang di-Pertuan Besar bagi Negeri Sembilan dan Raja bagi Perlis",
          "D": "Raja bagi Negeri Sembilan dan Yang di-Pertuan Besar bagi Perlis"
        },
        "correct_option": "C",
        "explanation_text": "Tidak semua negeri beraja di Malaysia diketuai oleh Sultan: Negeri Sembilan diketuai oleh Yang di-Pertuan Besar, manakala Perlis diketuai oleh Raja. Pilihan A dan B salah kerana mengelirukan gelaran tersebut dengan Sultan atau Yang di-Pertua Negeri, manakala pilihan D menterbalikkan gelaran kedua-dua negeri."
      },
      {
        "id": "d6sj_neg_01_q2",
        "syllabus_node_id": "d6_sej_neg_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Menurut catatan pedagang Arab, nama negeri Johor berasal daripada perkataan 'Jauhar'. Apakah maksud perkataan 'Jauhar'?",
        "options_json": {
          "A": "Permata berharga",
          "B": "Gelas berkaki",
          "C": "Pokok kayu mahang",
          "D": "Tanah hujung benua"
        },
        "correct_option": "A",
        "explanation_text": "Dalam bahasa Arab, 'Jauhar' bermaksud permata berharga yang dikaitkan dengan asal usul nama Johor. Pilihan B ('gelas berkaki') ialah maksud perkataan Arab 'Qadah' bagi negeri Kedah; pilihan C ('pokok mahang') dikaitkan dengan asal usul nama Pahang; pilihan D merujuk gelaran lama Johor dalam Sulalatus Salatin iaitu 'Ujong Tanah', bukan maksud 'Jauhar'."
      },
      {
        "id": "d6sj_neg_01_q3",
        "syllabus_node_id": "d6_sej_neg_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara padanan negeri dengan tajuk lagu kebesaran negeri berikut, manakah yang TEPAT?",
        "options_json": {
          "A": "Perak — Allah Selamatkan Sultan Kami",
          "B": "Pahang — Allah Lanjutkan Usia Sultan",
          "C": "Kedah — Selamat Sultan",
          "D": "Terengganu dan Kelantan — Selamat Sultan"
        },
        "correct_option": "D",
        "explanation_text": "Negeri Terengganu dan Kelantan berkongsi tajuk lagu kebesaran negeri yang sama iaitu 'Selamat Sultan' (dengan lirik dan melodi berbeza). Pilihan A dan B tertukar kerana lagu Perak ialah 'Allah Lanjutkan Usia Sultan' manakala lagu Pahang ialah 'Allah Selamatkan Sultan Kami'; pilihan C salah kerana lagu Kedah ialah 'Allah Selamatkan Sultan Mahkota'."
      },
      {
        "id": "d6sj_neg_01_q4",
        "syllabus_node_id": "d6_sej_neg_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Antara padanan negeri, ibu negeri dan bandar diraja berikut, manakah yang BETUL?",
        "options_json": {
          "A": "Selangor — Ibu Negeri: Klang | Bandar Diraja: Shah Alam",
          "B": "Perak — Ibu Negeri: Ipoh | Bandar Diraja: Kuala Kangsar",
          "C": "Pahang — Ibu Negeri: Pekan | Bandar Diraja: Kuantan",
          "D": "Perlis — Ibu Negeri: Arau | Bandar Diraja: Kangar"
        },
        "correct_option": "B",
        "explanation_text": "Bagi negeri Perak, pusat pentadbirannya (ibu negeri) ialah Ipoh manakala pusat warisan kesultanannya (bandar diraja) ialah Kuala Kangsar. Pilihan A, C dan D semuanya terbalik antara ibu negeri dengan bandar diraja: Selangor (Shah Alam / Klang), Pahang (Kuantan / Pekan) dan Perlis (Kangar / Arau)."
      },
      {
        "id": "d6sj_neg_01_q5",
        "syllabus_node_id": "d6_sej_neg_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Pernyataan manakah yang BENAR tentang ketua negeri dan lambang bagi negeri tidak beraja serta Wilayah Persekutuan di Malaysia?",
        "options_json": {
          "A": "Keempat-empat negeri tidak beraja mempunyai bandar diraja yang tersendiri walaupun diketuai oleh Yang di-Pertua Negeri",
          "B": "Wilayah Persekutuan Kuala Lumpur, Labuan dan Putrajaya masing-masing menggunakan tajuk lagu rasmi yang berlainan",
          "C": "Pulau Pinang, Melaka, Sabah dan Sarawak diketuai oleh Yang di-Pertua Negeri, manakala ketiga-tiga Wilayah Persekutuan berkongsi lagu rasmi 'Maju dan Sejahtera'",
          "D": "Wilayah Persekutuan Putrajaya mempunyai ibu negeri dan bandar diraja tersendiri di bawah pentadbiran Sultan Selangor"
        },
        "correct_option": "C",
        "explanation_text": "Pulau Pinang, Melaka, Sabah dan Sarawak ialah negeri tidak beraja yang diketuai oleh Yang di-Pertua Negeri (tiada bandar diraja, maka pilihan A salah). Ketiga-tiga Wilayah Persekutuan (Kuala Lumpur, Labuan dan Putrajaya) ditadbir oleh Kerajaan Persekutuan tanpa ibu negeri atau bandar diraja (pilihan D salah) dan berkongsi satu lagu rasmi iaitu 'Maju dan Sejahtera' (pilihan B salah)."
      },
      {
        "id": "d6sj_rukun_01_q1",
        "syllabus_node_id": "d6_sej_rukun_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Bilakah Rukun Negara diisytiharkan secara rasmi oleh Yang di-Pertuan Agong keempat, Tuanku Ismail Nasiruddin Shah?",
        "options_json": {
          "A": "31 Ogos 1970",
          "B": "31 Ogos 1957",
          "C": "16 September 1963",
          "D": "4 Mac 1970"
        },
        "correct_option": "A",
        "explanation_text": "Rukun Negara diisytiharkan secara rasmi pada 31 Ogos 1970 sempena ulang tahun Hari Kebangsaan ke-13. Pilihan B ialah tarikh kemerdekaan Tanah Melayu, pilihan C ialah tarikh pembentukan Malaysia, manakala pilihan D (4 Mac 1970) ialah tarikh penubuhan Jawatankuasa Rukun Negara di bawah MAPEN, bukan tarikh pengisytiharan."
      },
      {
        "id": "d6sj_rukun_01_q2",
        "syllabus_node_id": "d6_sej_rukun_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah prinsip ketiga dan prinsip keempat Rukun Negara mengikut susunan yang betul?",
        "options_json": {
          "A": "Ketiga: Kesetiaan kepada Raja dan Negara | Keempat: Keluhuran Perlembagaan",
          "B": "Ketiga: Kedaulatan Undang-undang | Keempat: Keluhuran Perlembagaan",
          "C": "Ketiga: Keluhuran Perlembagaan | Keempat: Kesopanan dan Kesusilaan",
          "D": "Ketiga: Keluhuran Perlembagaan | Keempat: Kedaulatan Undang-undang"
        },
        "correct_option": "D",
        "explanation_text": "Susunan lima prinsip Rukun Negara ialah: (1) Kepercayaan kepada Tuhan, (2) Kesetiaan kepada Raja dan Negara, (3) Keluhuran Perlembagaan, (4) Kedaulatan Undang-undang, dan (5) Kesopanan dan Kesusilaan. Pilihan B ialah kesilapan paling lazim murid yang menukar prinsip ketiga dengan prinsip keempat."
      },
      {
        "id": "d6sj_rukun_01_q3",
        "syllabus_node_id": "d6_sej_rukun_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Selepas peristiwa 13 Mei 1969, kerajaan telah menubuhkan MAGERAN dan MAPEN. Apakah peranan utama MAPEN (Majlis Perundingan Negara)?",
        "options_json": {
          "A": "Mengambil alih pentadbiran negara dan memulihkan ketenteraman awam semasa darurat",
          "B": "Membincangkan isu perpaduan negara dan membentuk Jawatankuasa Rukun Negara untuk merangka Rukun Negara",
          "C": "Meninjau pendapat penduduk di Sarawak dan Sabah mengenai penyertaan dalam Malaysia",
          "D": "Menggubal dasar kerjasama perdagangan serantau bersama negara-negara anggota ASEAN"
        },
        "correct_option": "B",
        "explanation_text": "MAPEN ditubuhkan di bawah MAGERAN pada Januari 1970 untuk membincangkan isu perpaduan dan menubuhkan Jawatankuasa Rukun Negara bagi merangka ideologi Rukun Negara. Pilihan A ialah peranan MAGERAN sebagai badan pentadbir selepas peristiwa 13 Mei 1969, bukannya MAPEN; pilihan C dan D berkaitan topik lain."
      },
      {
        "id": "d6sj_rukun_01_q4",
        "syllabus_node_id": "d6_sej_rukun_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Aiman sentiasa mematuhi peraturan jalan raya dan tidak melakukan vandalisme kerana menyedari setiap warganegara tertakluk kepada undang-undang negara. Situasi ini paling tepat menggambarkan pengamalan prinsip Rukun Negara yang mana?",
        "options_json": {
          "A": "Kepercayaan kepada Tuhan",
          "B": "Kesetiaan kepada Raja dan Negara",
          "C": "Kedaulatan Undang-undang",
          "D": "Keluhuran Perlembagaan"
        },
        "correct_option": "C",
        "explanation_text": "Kedaulatan Undang-undang menekankan kepatuhan setiap rakyat terhadap undang-undang dan peraturan negara demi menjamin keamanan serta keadilan. Pilihan D (Keluhuran Perlembagaan) pula menekankan kedudukan Perlembagaan Persekutuan sebagai undang-undang tertinggi negara yang mengatasi semua pihak."
      },
      {
        "id": "d6sj_rukun_01_q5",
        "syllabus_node_id": "d6_sej_rukun_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Salah satu daripada lima matlamat Rukun Negara ialah menjamin satu cara yang liberal terhadap tradisi-tradisi kebudayaan yang kaya dan berbagai-bagai corak. Apakah maksud sebenar matlamat ini?",
        "options_json": {
          "A": "Setiap kaum bebas mengamalkan agama, adat resam dan kebudayaan warisan masing-masing selagi selaras dengan perpaduan negara",
          "B": "Semua kaum digalakkan meninggalkan adat resam tradisi masing-masing supaya dapat membentuk satu budaya tunggal yang seragam",
          "C": "Hanya amalan kebudayaan moden yang diperkenalkan dari luar negara dibenarkan dalam sambutan rasmi peringkat kebangsaan",
          "D": "Pengamalan Rukun Negara hanya wajib dilaksanakan melalui lafaz ikrar di perhimpunan sekolah dan tidak melibatkan amalan budaya harian"
        },
        "correct_option": "A",
        "explanation_text": "Sikap liberal terhadap tradisi kebudayaan bermaksud masyarakat Malaysia berfikiran terbuka dan menghormati kebebasan setiap kaum mengamalkan adat resam serta budaya warisan masing-masing demi keharmonian. Pilihan B ialah salah tanggapan lazim bahawa 'liberal' bermaksud meninggalkan adat resam; pilihan D salah kerana Rukun Negara mesti diamalkan dalam kehidupan seharian."
      },
      {
        "id": "d6sj_kaum_01_q1",
        "syllabus_node_id": "d6_sej_kaum_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah nama rumah ibadat bagi penganut agama Sikh di Malaysia?",
        "options_json": {
          "A": "Kuil",
          "B": "Gurdwara",
          "C": "Tokong",
          "D": "Gereja"
        },
        "correct_option": "B",
        "explanation_text": "Rumah ibadat bagi penganut agama Sikh ialah Gurdwara. Murid sering tersilap menamakan rumah ibadat penganut Sikh sebagai kuil (pilihan A), sedangkan kuil ialah rumah ibadat penganut agama Hindu, tokong bagi penganut Buddha atau Taoisme, dan gereja bagi penganut agama Kristian."
      },
      {
        "id": "d6sj_kaum_01_q2",
        "syllabus_node_id": "d6_sej_kaum_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pasangan perayaan, negeri utama sambutan dan tarian tradisional pengiring manakah yang BETUL?",
        "options_json": {
          "A": "Hari Gawai — Sabah — Tarian Sumazau",
          "B": "Pesta Kaamatan — Sarawak — Tarian Ngajat",
          "C": "Pesta Kaamatan — Sabah — Tarian Sumazau",
          "D": "Perayaan Vaisakhi — Melaka — Tarian Branyo"
        },
        "correct_option": "C",
        "explanation_text": "Pesta Kaamatan disambut oleh masyarakat Kadazandusun dan Murut di Sabah dengan persembahan Tarian Sumazau. Pilihan A dan B tersilap menukar negeri dan tarian kerana Hari Gawai disambut di Sarawak bersama Tarian Ngajat; pilihan D salah kerana Tarian Branyo dikaitkan dengan Perayaan San Pedro masyarakat Portugis di Melaka, manakala Vaisakhi diiringi Tarian Bhangra dan Gidha."
      },
      {
        "id": "d6sj_kaum_01_q3",
        "syllabus_node_id": "d6_sej_kaum_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Berdasarkan Perkara 3 Perlembagaan Persekutuan, siapakah yang menjadi Ketua Agama Islam bagi negeri tidak beraja iaitu Pulau Pinang, Melaka, Sabah dan Sarawak?",
        "options_json": {
          "A": "Yang di-Pertuan Agong",
          "B": "Yang di-Pertua Negeri masing-masing",
          "C": "Perdana Menteri Malaysia",
          "D": "Sultan negeri yang paling hampir"
        },
        "correct_option": "A",
        "explanation_text": "Menurut Perkara 3 Perlembagaan Persekutuan, Yang di-Pertuan Agong ialah Ketua Agama Islam bagi negeri baginda sendiri, Wilayah Persekutuan, serta negeri tidak beraja iaitu Pulau Pinang, Melaka, Sabah dan Sarawak. Yang di-Pertua Negeri (pilihan B) ialah ketua negeri tetapi bukan Ketua Agama Islam, manakala Sultan negeri lain (pilihan D) hanya mengetuai agama Islam di negeri masing-masing."
      },
      {
        "id": "d6sj_kaum_01_q4",
        "syllabus_node_id": "d6_sej_kaum_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Dalam pameran kebudayaan sekolah, murid perlu melabel dua alat muzik tradisional tiupan yang diperbuat daripada buluh dan labu kering mengikut negeri asalnya. Label manakah yang TEPAT?",
        "options_json": {
          "A": "Sompoton dari Sarawak dan Engkerurai dari Sabah",
          "B": "Sompoton dari Melaka dan Kompang dari Sabah",
          "C": "Engkerurai dari Pulau Pinang dan Tabla dari Sarawak",
          "D": "Sompoton dari Sabah dan Engkerurai dari Sarawak"
        },
        "correct_option": "D",
        "explanation_text": "Sompoton ialah alat muzik tradisional tiupan daripada buluh dan labu kering yang berasal dari Sabah, manakala Engkerurai ialah alat muzik tradisional serupa yang berasal dari Sarawak. Pilihan A merupakan kekeliruan lazim antara kedua-dua negeri Borneo tersebut; pilihan B dan C menyenaraikan alat muzik paluan seperti kompang dan tabla dengan asal negeri yang salah."
      },
      {
        "id": "d6sj_kaum_01_q5",
        "syllabus_node_id": "d6_sej_kaum_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Seorang murid diminta mengelaskan perayaan di Malaysia mengikut tujuan sambutannya. Kumpulan perayaan manakah yang semuanya disambut bagi tujuan mensyukuri hasil tuaian tanaman atau hasil laut?",
        "options_json": {
          "A": "Hari Raya Aidilfitri, Tahun Baharu Cina, Hari Krismas dan Hari Wesak",
          "B": "Deepavali, Hari Krismas, Jis Pai dan Tahun Baharu Cina",
          "C": "Hari Gawai, Pesta Kaamatan, Vaisakhi dan Perayaan San Pedro",
          "D": "Hari Wesak, Hari Gawai, Deepavali dan Tahon Baro"
        },
        "correct_option": "C",
        "explanation_text": "Hari Gawai, Pesta Kaamatan dan Vaisakhi disambut untuk mensyukuri hasil tuaian tanaman, manakala Perayaan San Pedro disambut masyarakat nelayan Portugis untuk mensyukuri hasil laut. Pilihan A, B dan D mengandungi perayaan bagi tujuan berbeza seperti keagamaan (Aidilfitri, Krismas), memperingati tokoh agama (Wesak), kebaikan mengatasi kejahatan (Deepavali) serta Tahun Baharu Orang Asli (Jis Pai, Tahon Baro)."
      },
      {
        "id": "d6sj_pemp_01_q1",
        "syllabus_node_id": "d6_sej_pemp_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Siapakah Perdana Menteri Malaysia yang digelar sebagai 'Bapa Pembangunan' atas jasanya membangunkan ekonomi dan kawasan luar bandar?",
        "options_json": {
          "A": "Tunku Abdul Rahman Putra Al-Haj",
          "B": "Tun Hussein Onn",
          "C": "Tun Dr. Mahathir Mohamad",
          "D": "Tun Abdul Razak Hussein"
        },
        "correct_option": "D",
        "explanation_text": "Tun Abdul Razak Hussein (Perdana Menteri kedua) diberi gelaran 'Bapa Pembangunan' atas usaha gigihnya membangunkan luar bandar dan memperkenalkan Dasar Ekonomi Baru. Tunku Abdul Rahman ialah 'Bapa Kemerdekaan', Tun Hussein Onn ialah 'Bapa Perpaduan', manakala Tun Dr. Mahathir Mohamad ialah 'Bapa Pemodenan'."
      },
      {
        "id": "d6sj_pemp_01_q2",
        "syllabus_node_id": "d6_sej_pemp_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Dalam sistem pemerintahan demokrasi berparlimen di Malaysia, apakah perbezaan kedudukan antara Yang di-Pertuan Agong dengan Perdana Menteri?",
        "options_json": {
          "A": "Perdana Menteri ialah Ketua Utama Negara, manakala Yang di-Pertuan Agong ialah Ketua Kerajaan",
          "B": "Yang di-Pertuan Agong ialah Ketua Utama Negara, manakala Perdana Menteri ialah Ketua Kerajaan",
          "C": "Kedua-duanya memegang jawatan Ketua Kerajaan secara bergilir setiap lima tahun",
          "D": "Yang di-Pertuan Agong mengetuai Jemaah Menteri di Parlimen, manakala Perdana Menteri melantik Raja-Raja Melayu"
        },
        "correct_option": "B",
        "explanation_text": "Mengikut sistem Raja Berperlembagaan dan Demokrasi Berparlimen di Malaysia, Yang di-Pertuan Agong ialah Ketua Utama Negara manakala Perdana Menteri ialah Ketua Kerajaan yang mengetuai Jemaah Menteri. Pilihan A menterbalikkan kedudukan kedua-dua institusi tersebut, manakala pilihan C dan D tidak menepati Perlembagaan Persekutuan."
      },
      {
        "id": "d6sj_pemp_01_q3",
        "syllabus_node_id": "d6_sej_pemp_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Pembinaan mercu tanda negara seperti Lapangan Terbang Antarabangsa Kuala Lumpur (KLIA), Pusat Pentadbiran Kerajaan Persekutuan Putrajaya dan Menara Berkembar Petronas dilaksanakan semasa kepimpinan siapakah?",
        "options_json": {
          "A": "Tun Dr. Mahathir Mohamad",
          "B": "Tun Abdullah Ahmad Badawi",
          "C": "Tun Hussein Onn",
          "D": "Tunku Abdul Rahman Putra Al-Haj"
        },
        "correct_option": "A",
        "explanation_text": "KLIA, Putrajaya dan Menara Berkembar Petronas ialah antara projek pemodenan ikonik yang dilaksanakan semasa pentadbiran Tun Dr. Mahathir Mohamad yang digelar 'Bapa Pemodenan'. Pilihan B (Tun Abdullah Ahmad Badawi) terkenal dengan gelaran 'Bapa Pembangunan Modal Insan', manakala pilihan C dan D mentadbir sebelum projek tersebut dibina."
      },
      {
        "id": "d6sj_pemp_01_q4",
        "syllabus_node_id": "d6_sej_pemp_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Antara padanan Perdana Menteri, gelaran rasmi dan sumbangan utama berikut, manakah yang TEPAT?",
        "options_json": {
          "A": "Tun Abdul Razak Hussein — Bapa Perpaduan — Memperkenalkan Skim Amanah Saham Nasional (ASN)",
          "B": "Tun Hussein Onn — Bapa Pembangunan — Memperkenalkan Dasar Ekonomi Baru (DEB)",
          "C": "Tun Hussein Onn — Bapa Perpaduan — Memperkenalkan Skim Amanah Saham Nasional (ASN) dan Rukun Tetangga",
          "D": "Tun Abdullah Ahmad Badawi — Bapa Pemodenan — Memperkenalkan gagasan Wawasan 2020"
        },
        "correct_option": "C",
        "explanation_text": "Tun Hussein Onn digelar 'Bapa Perpaduan' dan antara sumbangan utamanya ialah memperkenalkan Skim Amanah Saham Nasional (ASN) serta mengukuhkan Rukun Tetangga. Pilihan A dan B menukar gelaran dan sumbangan Tun Abdul Razak (Bapa Pembangunan, DEB) dengan Tun Hussein Onn; pilihan D tersilap kerana 'Bapa Pemodenan' dan Wawasan 2020 milik Tun Dr. Mahathir Mohamad."
      },
      {
        "id": "d6sj_pemp_01_q5",
        "syllabus_node_id": "d6_sej_pemp_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Pernyataan manakah yang TEPAT menggambarkan bidang tugas rasmi Perdana Menteri Malaysia?",
        "options_json": {
          "A": "Melantik ahli Jemaah Menteri dan duta negara secara langsung tanpa perlu mempersembahkan cadangan kepada Yang di-Pertuan Agong",
          "B": "Mempengerusikan Mesyuarat Jemaah Menteri, menasihati Yang di-Pertuan Agong dan mencadangkan pelantikan ahli Jemaah Menteri kepada baginda",
          "C": "Menumpukan pentadbiran dalam negara sahaja kerana semua hubungan diplomatik luar negara diuruskan sepenuhnya oleh Majlis Raja-Raja",
          "D": "Mempengerusikan Mesyuarat Majlis Raja-Raja setiap lima tahun bagi memilih Yang di-Pertuan Agong yang baharu"
        },
        "correct_option": "B",
        "explanation_text": "Perdana Menteri mempengerusikan Mesyuarat Jemaah Menteri, menasihati Yang di-Pertuan Agong tentang pentadbiran negara dan mempersembahkan cadangan pelantikan Jemaah Menteri kepada baginda. Pilihan A salah kerana kuasa pelantikan rasmi dilakukan oleh Yang di-Pertuan Agong atas nasihat Perdana Menteri; pilihan C salah kerana Perdana Menteri turut menguruskan hubungan diplomatik; pilihan D salah kerana Perdana Menteri hanya mengiringi baginda ke Mesyuarat Majlis Raja-Raja."
      },
      {
        "id": "d6sj_ekon_01_q1",
        "syllabus_node_id": "d6_sej_ekon_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah tujuan utama kegiatan ekonomi tradisional seperti pertanian sara diri yang dijalankan oleh masyarakat negara kita pada zaman dahulu?",
        "options_json": {
          "A": "Untuk menampung keperluan makanan dan kehidupan harian keluarga",
          "B": "Untuk mengeksport hasil tanaman secara besar-besaran ke pasaran Eropah",
          "C": "Untuk mengendalikan kapal korek moden di lombong bijih timah",
          "D": "Untuk menghasilkan produk penapisan petroleum dan gas asli"
        },
        "correct_option": "A",
        "explanation_text": "Kegiatan ekonomi tradisional bercorak sara diri bertujuan menampung keperluan harian diri dan keluarga dengan modal kecil serta peralatan mudah. Pilihan B, C dan D merujuk ciri ekonomi komersial dan moden yang memerlukan modal besar, teknologi jentera seperti kapal korek serta pengeluaran untuk pasaran eksport."
      },
      {
        "id": "d6sj_ekon_01_q2",
        "syllabus_node_id": "d6_sej_ekon_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah model kereta nasional pertama Malaysia yang dikeluarkan oleh syarikat PROTON pada tahun 1985?",
        "options_json": {
          "A": "Perodua Kancil",
          "B": "Proton Wira",
          "C": "Proton Saga",
          "D": "Perodua Myvi"
        },
        "correct_option": "C",
        "explanation_text": "PROTON ditubuhkan pada tahun 1983 dan melancarkan kereta nasional pertama Malaysia iaitu Proton Saga pada tahun 1985. Pilihan A (Perodua Kancil) ialah model pertama syarikat automotif nasional kedua, PERODUA, yang ditubuhkan pada tahun 1993 dan dilancarkan pada tahun 1994; pilihan B dan D dikeluarkan pada tahun-tahun berikutnya."
      },
      {
        "id": "d6sj_ekon_01_q3",
        "syllabus_node_id": "d6_sej_ekon_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Industri hiliran memproses bahan mentah menjadi barangan siap yang bernilai lebih tinggi. Kumpulan produk hiliran manakah yang semuanya dihasilkan daripada kelapa sawit?",
        "options_json": {
          "A": "Tayar kenderaan, sarung tangan perubatan dan benang lateks",
          "B": "Petrol, gas asli cecair dan bahan plastik sintetik",
          "C": "Sarung tangan getah, minyak masak dan tilam getah",
          "D": "Minyak masak, marjerin, sabun dan biodiesel"
        },
        "correct_option": "D",
        "explanation_text": "Minyak masak, marjerin, sabun dan biodiesel merupakan contoh produk hiliran berasaskan kelapa sawit. Pilihan A ialah produk hiliran industri getah; pilihan B ialah produk industri petroleum dan gas; pilihan C bercampur antara produk getah (sarung tangan, tilam) dengan produk sawit (minyak masak)."
      },
      {
        "id": "d6sj_ekon_01_q4",
        "syllabus_node_id": "d6_sej_ekon_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah perbezaan utama antara Rancangan Integrasi Murid untuk Perpaduan (RIMUP) dengan Dasar 1Murid 1Sukan (1M1S) dalam bidang sukan sekolah?",
        "options_json": {
          "A": "RIMUP dianjurkan khusus untuk pelajar institusi pengajian tinggi, manakala 1M1S dikhususkan untuk atlet paralimpik",
          "B": "RIMUP menggalakkan kerjasama aktiviti sukan antara sekolah berlainan aliran, manakala 1M1S mewajibkan setiap murid menyertai sekurang-kurangnya satu sukan",
          "C": "RIMUP hanya melibatkan permainan tradisional di sekolah rendah, manakala 1M1S hanya melibatkan kejohanan Sukan Komanwel",
          "D": "RIMUP dianjurkan di satu negeri tetap setiap tahun, manakala 1M1S diadakan secara bergilir antara negeri setiap dua tahun"
        },
        "correct_option": "B",
        "explanation_text": "Program RIMUP menghimpunkan murid pelbagai kaum daripada sekolah berlainan aliran untuk menyertai aktiviti sukan dan kokurikulum bersama, manakala Dasar 1Murid 1Sukan (1M1S) mewajibkan setiap murid menyertai sekurang-kurangnya satu jenis sukan. Pilihan A merujuk SUKIPT (institusi pengajian tinggi), manakala pilihan D merujuk konsep penganjuran SUKMA secara bergilir antara negeri."
      },
      {
        "id": "d6sj_ekon_01_q5",
        "syllabus_node_id": "d6_sej_ekon_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Antara padanan tokoh sukan negara, bidang sukan dan pengiktirafan berikut, manakah yang BETUL?",
        "options_json": {
          "A": "Tan Sri Dr. M. Jegathesan — Olahraga pecut — Digelar 'Manusia Terpantas Asia'",
          "B": "Allahyarham Dato' Mokhtar Dahari — Olahraga pecut — Digelar 'Manusia Terpantas Asia'",
          "C": "Almarhum Sultan Azlan Shah — Bola sepak — Bekas pemain penyerang kebangsaan",
          "D": "Dato' Nicol Ann David — Badminton — Juara dunia perseorangan wanita lapan kali"
        },
        "correct_option": "A",
        "explanation_text": "Tan Sri Dr. M. Jegathesan ialah legenda olahraga pecut Malaysia yang digelar 'Manusia Terpantas Asia'. Pilihan B ialah kekeliruan lazim kerana Allahyarham Dato' Mokhtar Dahari ialah legenda bola sepak ('Supermokh'); pilihan C salah kerana Almarhum Sultan Azlan Shah ialah tokoh pentadbir sukan hoki ('Bapa Hoki Malaysia'); pilihan D salah kerana Dato' Nicol Ann David ialah juara dunia sukan skuasy, bukan badminton."
      },
      {
        "id": "d6sj_dunia_01_q1",
        "syllabus_node_id": "d6_sej_dunia_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Berapakah bilangan negara pengasas asal yang menandatangani Deklarasi Bangkok bagi menubuhkan ASEAN pada 8 Ogos 1967?",
        "options_json": {
          "A": "Tiga buah negara iaitu Malaysia, Thailand dan Filipina",
          "B": "Sepuluh buah negara Asia Tenggara termasuk Brunei dan Vietnam",
          "C": "Lima buah negara iaitu Malaysia, Indonesia, Singapura, Thailand dan Filipina",
          "D": "Tujuh buah negara termasuk Kemboja dan Laos"
        },
        "correct_option": "C",
        "explanation_text": "ASEAN diasaskan pada 8 Ogos 1967 oleh lima buah negara iaitu Malaysia, Indonesia, Singapura, Thailand dan Filipina. Pilihan A merujuk tiga negara anggota Persatuan Asia Tenggara (ASA) pada tahun 1961; pilihan B ialah kekeliruan lazim kerana Brunei, Vietnam, Laos, Myanmar dan Kemboja hanya menyertai ASEAN secara berperingkat kemudian."
      },
      {
        "id": "d6sj_dunia_01_q2",
        "syllabus_node_id": "d6_sej_dunia_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Antara pertubuhan berikut, manakah yang tergolong sebagai pertubuhan SERANTAU dan bukannya pertubuhan antarabangsa?",
        "options_json": {
          "A": "Pertubuhan Bangsa-Bangsa Bersatu (PBB)",
          "B": "Pertubuhan Kerjasama Islam (OIC)",
          "C": "Komanwel",
          "D": "Persatuan Negara-Negara Asia Tenggara (ASEAN)"
        },
        "correct_option": "D",
        "explanation_text": "ASEAN ialah pertubuhan serantau kerana keanggotaannya melibatkan negara-negara berjiran di rantau Asia Tenggara sahaja. Sebaliknya, PBB (pilihan A), OIC (pilihan B) dan Komanwel (pilihan C) merupakan pertubuhan antarabangsa yang dianggotai oleh negara daripada pelbagai benua di seluruh dunia."
      },
      {
        "id": "d6sj_dunia_01_q3",
        "syllabus_node_id": "d6_sej_dunia_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Antara berikut, sumbangan manakah yang dikaitkan dengan penyertaan aktif Malaysia dalam pertubuhan Komanwel?",
        "options_json": {
          "A": "Menempatkan ibu pejabat pertubuhan di Jeddah, Arab Saudi",
          "B": "Mengisytiharkan Deklarasi Langkawi mengenai alam sekitar dan menentang dasar Aparteid",
          "C": "Menubuhkan Bank Pembangunan Islam (IDB) bagi membantu ekonomi negara anggota",
          "D": "Melantik Tunku Abdul Rahman sebagai Setiausaha Agung pertama pertubuhan tersebut"
        },
        "correct_option": "B",
        "explanation_text": "Melalui Komanwel (beribu pejabat di London), Malaysia menjadi tuan rumah CHOGM 1989 yang melahirkan Deklarasi Langkawi mengenai pemeliharaan alam sekitar serta lantang menentang dasar Aparteid di Afrika Selatan. Pilihan A, C dan D semuanya berkaitan dengan Pertubuhan Kerjasama Islam (OIC), bukan Komanwel."
      },
      {
        "id": "d6sj_dunia_01_q4",
        "syllabus_node_id": "d6_sej_dunia_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah pengiktirafan antarabangsa dalam Pertubuhan Bangsa-Bangsa Bersatu (PBB) yang pernah disandang oleh Tan Sri Razali Ismail dan Datuk Dr. Mazlan Othman?",
        "options_json": {
          "A": "Tan Sri Razali Ismail sebagai Presiden Perhimpunan Agung PBB, manakala Datuk Dr. Mazlan Othman sebagai Pengarah Pejabat Hal Ehwal Angkasa Lepas PBB (UNOOSA)",
          "B": "Tan Sri Razali Ismail sebagai Pengarah Pejabat Hal Ehwal Angkasa Lepas PBB (UNOOSA), manakala Datuk Dr. Mazlan Othman sebagai Presiden Perhimpunan Agung PBB",
          "C": "Kedua-duanya pernah dilantik sebagai Setiausaha Agung Pertubuhan Kerjasama Islam (OIC) yang beribu pejabat di Jeddah",
          "D": "Kedua-duanya mengetuai Misi Pertubuhan Bangsa-Bangsa Bersatu ke Malaysia (UNMM) pada tahun 1963"
        },
        "correct_option": "A",
        "explanation_text": "Tan Sri Razali Ismail pernah dilantik sebagai Presiden Perhimpunan Agung PBB ke-51, manakala ahli astrofizik negara Datuk Dr. Mazlan Othman pernah dilantik sebagai Pengarah Pejabat Hal Ehwal Angkasa Lepas PBB (UNOOSA). Pilihan B menterbalikkan bidang pengiktirafan kedua-dua tokoh tersebut, manakala pilihan C dan D tidak tepat."
      },
      {
        "id": "d6sj_dunia_01_q5",
        "syllabus_node_id": "d6_sej_dunia_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "UNESCO mengiktiraf warisan Malaysia dalam tiga kategori utama iaitu Tapak Warisan Dunia, Daftar Memori Dunia dan Daftar Warisan Budaya Tidak Ketara Kemanusiaan. Padanan kategori dan contoh manakah yang TEPAT?",
        "options_json": {
          "A": "Tapak Warisan Dunia: Mak Yong | Daftar Memori Dunia: Taman Negara Gunung Mulu | Warisan Budaya Tidak Ketara: Batu Bersurat Terengganu",
          "B": "Tapak Warisan Dunia: Sulalatus Salatin | Daftar Memori Dunia: Bandar Bersejarah Melaka | Warisan Budaya Tidak Ketara: Taman Kinabalu",
          "C": "Tapak Warisan Dunia: Dondang Sayang | Daftar Memori Dunia: Lembah Lenggong | Warisan Budaya Tidak Ketara: Hikayat Hang Tuah",
          "D": "Tapak Warisan Dunia: Taman Kinabalu | Daftar Memori Dunia: Batu Bersurat Terengganu | Warisan Budaya Tidak Ketara: Mak Yong"
        },
        "correct_option": "D",
        "explanation_text": "Pengelasan UNESCO yang tepat ialah Tapak Warisan Dunia merangkumi tapak alam semula jadi dan bersejarah seperti Taman Kinabalu, Taman Negara Gunung Mulu, Melaka, George Town dan Lembah Lenggong; Daftar Memori Dunia merangkumi warisan dokumentari seperti Batu Bersurat Terengganu, Sulalatus Salatin dan Hikayat Hang Tuah; Warisan Budaya Tidak Ketara pula merangkumi seni persembahan dan tradisi seperti Mak Yong dan Dondang Sayang."
      }
    ]
  };
});
