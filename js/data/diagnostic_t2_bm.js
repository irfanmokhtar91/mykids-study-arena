/**
 * Generated from js/data/diagnostic_t2_bm.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.t2 = App.DiagnosticBanks.t2 || {};
    App.DiagnosticBanks.t2.bm = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "t2_bm_morfologi",
        "subject": "bm",
        "grade_level": "t2",
        "chapter_id": "morfologi",
        "topic_name": "Morfologi",
        "subtopic_name": "Golongan kata / Imbuhan",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_bm_sintaksis",
        "subject": "bm",
        "grade_level": "t2",
        "chapter_id": "sintaksis",
        "topic_name": "Sintaksis",
        "subtopic_name": "Pola ayat / Ayat majmuk",
        "prerequisite_node_id": "t2_bm_morfologi",
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_bm_peribahasa",
        "subject": "bm",
        "grade_level": "t2",
        "chapter_id": "peribahasa",
        "topic_name": "Peribahasa",
        "subtopic_name": "Makna kiasan / Aplikasi",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_bm_komsas",
        "subject": "bm",
        "grade_level": "t2",
        "chapter_id": "komsas",
        "topic_name": "KOMSAS",
        "subtopic_name": "Gaya bahasa / Nilai",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      },
      {
        "id": "t2_bm_pemahaman",
        "subject": "bm",
        "grade_level": "t2",
        "chapter_id": "pemahaman",
        "topic_name": "Pemahaman",
        "subtopic_name": "Isi tersurat / Rumusan",
        "prerequisite_node_id": null,
        "expected_time_ms": 45000,
        "bloom_level": "Apply"
      }
    ],
    "questions": [
      {
        "id": "t2_bm_morfologi_q1",
        "syllabus_node_id": "t2_bm_morfologi",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Fatimah ialah seorang guru. Apakah golongan kata bagi perkataan 'Fatimah'?",
        "options_json": {
          "A": "Kata nama khas",
          "B": "Kata nama am",
          "C": "Kata ganti nama diri",
          "D": "Kata adjektif"
        },
        "correct_option": "A",
        "explanation_text": "'Fatimah' ialah nama khusus seseorang, jadi ia kata nama khas."
      },
      {
        "id": "t2_bm_morfologi_q2",
        "syllabus_node_id": "t2_bm_morfologi",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Perkataan 'menari' terbentuk daripada gabungan kata dasar dan imbuhan yang manakah?",
        "options_json": {
          "A": "peN- + tari",
          "B": "meN- + tari",
          "C": "me- + nari",
          "D": "di- + tari"
        },
        "correct_option": "B",
        "explanation_text": "meN- + tari menjadi 'menari' kerana huruf awal 't' gugur."
      },
      {
        "id": "t2_bm_morfologi_q3",
        "syllabus_node_id": "t2_bm_morfologi",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Dia menunjukkan keberanian yang tinggi semasa menghadapi cabaran itu. Apakah golongan kata bagi perkataan 'keberanian'?",
        "options_json": {
          "A": "Kata kerja terbitan",
          "B": "Kata adjektif terbitan",
          "C": "Kata nama terbitan",
          "D": "Kata sendi nama"
        },
        "correct_option": "C",
        "explanation_text": "'Keberanian' terbentuk daripada apitan ke-...-an pada kata adjektif 'berani' dan berfungsi sebagai kata nama terbitan."
      },
      {
        "id": "t2_bm_morfologi_q4",
        "syllabus_node_id": "t2_bm_morfologi",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Perkataan 'melambatkan' terbentuk daripada apitan yang manakah?",
        "options_json": {
          "A": "memper- ... -kan",
          "B": "peN- ... -kan",
          "C": "ter- ... -kan",
          "D": "meN- ... -kan"
        },
        "correct_option": "D",
        "explanation_text": "meN-...-kan + lambat menjadi 'melambatkan'."
      },
      {
        "id": "t2_bm_morfologi_q5",
        "syllabus_node_id": "t2_bm_morfologi",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Ayat yang manakah menggunakan kata adjektif dan kata penguat dengan betul?",
        "options_json": {
          "A": "Dia sangat rajin dan amat tekun.",
          "B": "Dia lebih rajin daripada dengan tekun.",
          "C": "Dia sangat rajin sekali rajin.",
          "D": "Dia rajin sangat daripada tekun."
        },
        "correct_option": "A",
        "explanation_text": "Ayat 'Dia sangat rajin dan amat tekun' menggunakan kata penguat 'sangat' dan 'amat' dengan betul sebelum kata adjektif."
      },
      {
        "id": "t2_bm_sintaksis_q1",
        "syllabus_node_id": "t2_bm_sintaksis",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Adik menangis. Apakah pola ayat bagi ayat ini?",
        "options_json": {
          "A": "FN + FN",
          "B": "FN + FK",
          "C": "FN + FA",
          "D": "FN + FSN"
        },
        "correct_option": "B",
        "explanation_text": "'Adik' ialah frasa nama subjek dan 'menangis' ialah frasa kerja predikat."
      },
      {
        "id": "t2_bm_sintaksis_q2",
        "syllabus_node_id": "t2_bm_sintaksis",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Rumah itu besar. Apakah pola ayat bagi ayat ini?",
        "options_json": {
          "A": "FN + FK",
          "B": "FN + FN",
          "C": "FN + FA",
          "D": "FN + FSN"
        },
        "correct_option": "C",
        "explanation_text": "'Besar' ialah frasa adjektif yang menjadi predikat."
      },
      {
        "id": "t2_bm_sintaksis_q3",
        "syllabus_node_id": "t2_bm_sintaksis",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Aina pergi ke perpustakaan. Apakah pola ayat bagi ayat ini?",
        "options_json": {
          "A": "FN + FSN",
          "B": "FN + FN",
          "C": "FN + FA",
          "D": "FN + FK"
        },
        "correct_option": "D",
        "explanation_text": "Predikat pergi ke perpustakaan ialah frasa kerja yang berintikan kata kerja pergi."
      },
      {
        "id": "t2_bm_sintaksis_q4",
        "syllabus_node_id": "t2_bm_sintaksis",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Saya percaya bahawa dia jujur. Apakah jenis klausa bawahan dalam ayat ini?",
        "options_json": {
          "A": "Pancangan komplemen",
          "B": "Pancangan relatif",
          "C": "Pancangan keterangan",
          "D": "Gabungan"
        },
        "correct_option": "A",
        "explanation_text": "'Bahawa dia jujur' ialah klausa komplemen yang menjadi objek kata kerja 'percaya'."
      },
      {
        "id": "t2_bm_sintaksis_q5",
        "syllabus_node_id": "t2_bm_sintaksis",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Murid yang rajin itu berjaya kerana dia berdisiplin. Apakah jenis ayat majmuk ini?",
        "options_json": {
          "A": "Ayat majmuk gabungan",
          "B": "Ayat majmuk campuran",
          "C": "Ayat majmuk pancangan relatif sahaja",
          "D": "Ayat tunggal"
        },
        "correct_option": "B",
        "explanation_text": "Ayat ini mengandungi klausa relatif 'yang rajin itu' dan klausa keterangan sebab 'kerana dia berdisiplin'."
      },
      {
        "id": "t2_bm_peribahasa_q1",
        "syllabus_node_id": "t2_bm_peribahasa",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Apakah maksud peribahasa 'bulat air kerana pembetung, bulat kata kerana muafakat'?",
        "options_json": {
          "A": "Air mengalir melalui pembetung",
          "B": "Kata-kata orang yang berpengaruh sahaja diterima",
          "C": "Kesepakatan dicapai melalui perundingan bersama",
          "D": "Perundingan yang berpanjangan tanpa hasil"
        },
        "correct_option": "C",
        "explanation_text": "Peribahasa ini menekankan kepentingan bersepakat melalui perundingan."
      },
      {
        "id": "t2_bm_peribahasa_q2",
        "syllabus_node_id": "t2_bm_peribahasa",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Setiap minggu, Ravi menyimpan seringgit daripada wang sakunya. Selepas setahun, wang itu cukup untuk membeli buku yang diingininya. Peribahasa yang manakah sesuai?",
        "options_json": {
          "A": "Seperti katak di bawah tempurung",
          "B": "Harimau mati meninggalkan belang",
          "C": "Mencurah air ke daun keladi",
          "D": "Sedikit-sedikit lama-lama menjadi bukit"
        },
        "correct_option": "D",
        "explanation_text": "Simpanan yang sedikit tetapi berterusan akhirnya menjadi banyak."
      },
      {
        "id": "t2_bm_peribahasa_q3",
        "syllabus_node_id": "t2_bm_peribahasa",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Kerana seorang murid bermain api di stor, seluruh kelas dihukum dan terpaksa membersihkan stor itu. Peribahasa yang sesuai ialah...",
        "options_json": {
          "A": "Seekor kerbau membawa lumpur, semua terpalit",
          "B": "Air dicincang tidak akan putus",
          "C": "Tak kenal maka tak cinta",
          "D": "Bagai aur dengan tebing"
        },
        "correct_option": "A",
        "explanation_text": "Kesalahan seorang menyebabkan orang lain turut menanggung akibat, iaitu 'seekor kerbau membawa lumpur, semua terpalit'."
      },
      {
        "id": "t2_bm_peribahasa_q4",
        "syllabus_node_id": "t2_bm_peribahasa",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Apakah maksud peribahasa 'fikir dahulu pendapatan, sesal kemudian tidak berguna'?",
        "options_json": {
          "A": "Sesal datang sebelum berfikir",
          "B": "Fikirkan masak-masak sebelum bertindak",
          "C": "Pendapatan perlu difikirkan dahulu",
          "D": "Jangan sekali-kali menyesal"
        },
        "correct_option": "B",
        "explanation_text": "Peribahasa ini menasihatkan supaya berfikir sebelum melakukan sesuatu agar tidak menyesal."
      },
      {
        "id": "t2_bm_peribahasa_q5",
        "syllabus_node_id": "t2_bm_peribahasa",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Apakah maksud peribahasa 'bagai kacang lupakan kulit'?",
        "options_json": {
          "A": "Orang yang cepat lupa pelajarannya",
          "B": "Kacang yang tidak boleh dimakan",
          "C": "Orang yang lupa asal usulnya selepas berjaya",
          "D": "Orang yang pemalu dan pendiam"
        },
        "correct_option": "C",
        "explanation_text": "Peribahasa ini merujuk orang yang melupakan asal usul atau jasa orang lain selepas mendapat kejayaan."
      },
      {
        "id": "t2_bm_komsas_q1",
        "syllabus_node_id": "t2_bm_komsas",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca baris puisi ini: 'Bulan tersenyum memandang bumi.' Apakah gaya bahasa dalam baris ini?",
        "options_json": {
          "A": "Simile",
          "B": "Hiperbola",
          "C": "Metafora",
          "D": "Personifikasi"
        },
        "correct_option": "D",
        "explanation_text": "Bulan diberi sifat manusia, iaitu tersenyum, jadi ini personifikasi."
      },
      {
        "id": "t2_bm_komsas_q2",
        "syllabus_node_id": "t2_bm_komsas",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca baris puisi ini: 'Wajahnya bersinar seperti lampu neon.' Apakah gaya bahasa dalam baris ini?",
        "options_json": {
          "A": "Simile",
          "B": "Metafora",
          "C": "Personifikasi",
          "D": "Epifora"
        },
        "correct_option": "A",
        "explanation_text": "Kata 'seperti' menunjukkan perbandingan langsung, iaitu simile."
      },
      {
        "id": "t2_bm_komsas_q3",
        "syllabus_node_id": "t2_bm_komsas",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca baris puisi ini: 'Dia singa di medan perang.' Apakah gaya bahasa dalam baris ini?",
        "options_json": {
          "A": "Simile",
          "B": "Metafora",
          "C": "Litotes",
          "D": "Aliterasi"
        },
        "correct_option": "B",
        "explanation_text": "Dia dibandingkan secara langsung dengan singa tanpa kata perbandingan, jadi ini metafora."
      },
      {
        "id": "t2_bm_komsas_q4",
        "syllabus_node_id": "t2_bm_komsas",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Dia sanggup menggunakan wang simpanannya untuk membantu mangsa banjir.' Apakah nilai yang dipaparkan?",
        "options_json": {
          "A": "Nilai kasih sayang",
          "B": "Nilai keberanian",
          "C": "Nilai keprihatinan",
          "D": "Nilai kesabaran"
        },
        "correct_option": "C",
        "explanation_text": "Tindakan membantu mangsa banjir menunjukkan sifat prihatin terhadap kesusahan orang lain."
      },
      {
        "id": "t2_bm_komsas_q5",
        "syllabus_node_id": "t2_bm_komsas",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Baca baris ini: 'Daun-daun menangis; angin seperti pemuzik.' Apakah gaya bahasa dalam baris ini?",
        "options_json": {
          "A": "Metafora dan hiperbola",
          "B": "Simile dan litotes",
          "C": "Anafora dan epifora",
          "D": "Personifikasi dan simile"
        },
        "correct_option": "D",
        "explanation_text": "'Daun-daun menangis' ialah personifikasi manakala 'angin seperti pemuzik' ialah simile."
      },
      {
        "id": "t2_bm_pemahaman_q1",
        "syllabus_node_id": "t2_bm_pemahaman",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Perkhemahan pengakap diadakan di Hutan Lipur Sungai Tua selama tiga hari dua malam. Peserta perlu membawa bekalan makanan sendiri.' Berapa lamakah perkemahan itu diadakan?",
        "options_json": {
          "A": "Tiga hari dua malam",
          "B": "Satu hari",
          "C": "Dua hari satu malam",
          "D": "Empat hari tiga malam"
        },
        "correct_option": "A",
        "explanation_text": "Petikan menyatakan perkemahan berlangsung selama tiga hari dua malam."
      },
      {
        "id": "t2_bm_pemahaman_q2",
        "syllabus_node_id": "t2_bm_pemahaman",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Kedai buku itu terletak di tingkat dua bangunan lama berhampiran pasar. Kedainya dibuka dari pukul 10.00 pagi hingga 9.00 malam.' Di manakah kedai buku itu terletak?",
        "options_json": {
          "A": "Di tingkat satu bangunan baharu",
          "B": "Di tingkat dua bangunan lama berhampiran pasar",
          "C": "Di dalam pasar",
          "D": "Di hadapan sekolah"
        },
        "correct_option": "B",
        "explanation_text": "Petikan menyatakan kedai itu di tingkat dua bangunan lama berhampiran pasar."
      },
      {
        "id": "t2_bm_pemahaman_q3",
        "syllabus_node_id": "t2_bm_pemahaman",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Penduduk kampung mula menanam sayur di tanah terbiar. Hasilnya dijual di pasar tani setiap Sabtu. Pendapatan tambahan itu membantu mereka menampung perbelanjaan sekolah anak-anak.' Apakah rumusan petikan ini?",
        "options_json": {
          "A": "Penduduk kampung berhenti bekerja di bandar",
          "B": "Pasar tani hanya dibuka pada hari Ahad",
          "C": "Penanaman sayur di tanah terbiar memberi pendapatan tambahan kepada penduduk",
          "D": "Anak-anak penduduk berhenti sekolah"
        },
        "correct_option": "C",
        "explanation_text": "Petikan menunjukkan hasil jualan sayur menjadi pendapatan tambahan penduduk."
      },
      {
        "id": "t2_bm_pemahaman_q4",
        "syllabus_node_id": "t2_bm_pemahaman",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Bas sekolah tiba lewat setiap pagi kerana jalan ke sekolah selalu sesak. Murid terpaksa berjalan kaki sebahagian perjalanan.' Apakah kesimpulan tentang masalah ini?",
        "options_json": {
          "A": "Bas sekolah rosak setiap hari",
          "B": "Murid tidak mahu menaiki bas",
          "C": "Jalan ke sekolah sangat lapang",
          "D": "Kesesakan jalan menyebabkan murid lewat dan terpaksa berjalan kaki"
        },
        "correct_option": "D",
        "explanation_text": "Kesesakan jalan menyebabkan bas lewat dan murid terpaksa berjalan kaki sebahagian perjalanan."
      },
      {
        "id": "t2_bm_pemahaman_q5",
        "syllabus_node_id": "t2_bm_pemahaman",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Baca petikan ini: 'Kedai runcit Pak Samad tidak menjual gula dan beras kerana bekalan daripada pembekal terhenti. Penduduk terpaksa membeli barang itu di pekan yang jauhnya lima kilometer.' Apakah kesan bekalan yang terhenti itu?",
        "options_json": {
          "A": "Penduduk terpaksa membeli barang keperluan di pekan yang jauh",
          "B": "Penduduk berhenti menggunakan gula dan beras",
          "C": "Kedai Pak Samad bertambah ramai pelanggan",
          "D": "Pembekal membuka kedai baharu di kampung"
        },
        "correct_option": "A",
        "explanation_text": "Akibat bekalan terhenti, penduduk terpaksa pergi ke pekan yang jauh untuk membeli barang keperluan."
      }
    ]
  };
});
