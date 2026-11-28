(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.mockObjective = App.Data.mockObjective || {};
    App.Data.mockObjective.t2_bm = { SETS: out.SETS };
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const SETS = [
  {
    "id": "set-A",
    "part": "A",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "morfologi",
        "q": "Kata nama terbitan daripada kata dasar 'bersih' ialah ___.",
        "options": [
          "kebersihan",
          "membersihkan",
          "terbersih"
        ],
        "correctIndex": 0,
        "explanation": "Apitan ke-...-an membentuk kata nama abstrak daripada kata adjektif bersih.",
        "passage": ""
      },
      {
        "chapterId": "morfologi",
        "q": "Pilih penjodoh bilangan untuk dua ___ tikar.",
        "options": [
          "ulas",
          "helai",
          "batang"
        ],
        "correctIndex": 1,
        "explanation": "Helai digunakan untuk benda yang lebar dan nipis seperti tikar.",
        "passage": ""
      },
      {
        "chapterId": "morfologi",
        "q": "Bas itu berhenti ___ hadapan sekolah.",
        "options": [
          "ke",
          "dari",
          "di"
        ],
        "correctIndex": 2,
        "explanation": "Di menunjukkan tempat bas berhenti.",
        "passage": ""
      },
      {
        "chapterId": "morfologi",
        "q": "Pilih kata kerja transitif dalam ayat 'Amir menyusun kerusi sebelum pulang'.",
        "options": [
          "menyusun",
          "sebelum",
          "pulang"
        ],
        "correctIndex": 0,
        "explanation": "Menyusun memerlukan objek, iaitu kerusi.",
        "passage": ""
      },
      {
        "chapterId": "morfologi",
        "q": "Mereka saling ___ semasa latihan.",
        "options": [
          "berbantuan-bantuan",
          "membantu",
          "bantu-membantu"
        ],
        "correctIndex": 1,
        "explanation": "Saling sudah membawa maksud berbalas-balas, jadi kata kerja tidak perlu digandakan.",
        "passage": ""
      },
      {
        "chapterId": "sintaksis",
        "q": "Apakah pola ayat 'Kakaknya seorang jururawat'?",
        "options": [
          "FN + FK",
          "FN + FA",
          "FN + FN"
        ],
        "correctIndex": 2,
        "explanation": "Kakaknya ialah frasa nama subjek dan seorang jururawat ialah frasa nama predikat.",
        "passage": ""
      },
      {
        "chapterId": "sintaksis",
        "q": "Tukarkan 'Saya telah mengecat pintu itu' kepada ayat pasif.",
        "options": [
          "Pintu itu telah saya cat.",
          "Pintu itu saya telah cat.",
          "Saya telah dicat oleh pintu itu."
        ],
        "correctIndex": 0,
        "explanation": "Dalam ayat pasif diri pertama, saya diletakkan terus sebelum kata kerja dasar cat.",
        "passage": ""
      },
      {
        "chapterId": "sintaksis",
        "q": "Pilih kata hubung sebab. 'Pertandingan ditangguhkan ___ gelanggang licin.'",
        "options": [
          "walaupun",
          "kerana",
          "supaya"
        ],
        "correctIndex": 1,
        "explanation": "Kerana memperkenalkan sebab pertandingan ditangguhkan.",
        "passage": ""
      },
      {
        "chapterId": "sintaksis",
        "q": "Apakah jenis ayat 'Tolong tutup tingkap itu'?",
        "options": [
          "Ayat tanya",
          "Ayat penyata",
          "Ayat permintaan"
        ],
        "correctIndex": 2,
        "explanation": "Kata tolong menandakan permintaan.",
        "passage": ""
      },
      {
        "chapterId": "peribahasa",
        "q": "Penduduk bergotong-royong membina jambatan. Peribahasa yang sesuai ialah ___.",
        "options": [
          "berat sama dipikul, ringan sama dijinjing",
          "bagai melepaskan batuk di tangga",
          "seperti katak di bawah tempurung"
        ],
        "correctIndex": 0,
        "explanation": "Peribahasa ini merujuk kepada kerjasama ketika memikul tanggungjawab.",
        "passage": ""
      },
      {
        "chapterId": "pemahaman",
        "q": "Siapakah yang mencadangkan pertukaran benih?",
        "options": [
          "Pengusaha kantin",
          "Sara",
          "Bendahari"
        ],
        "correctIndex": 1,
        "explanation": "Sara mengemukakan cadangan selepas bendahari membentangkan masalah kos.",
        "passage": "Pada mulanya, kelab taman membeli anak pokok setiap bulan. Apabila bendahari menunjukkan bahawa kos semakin meningkat, Sara mencadangkan pertukaran benih dengan penduduk. Pertukaran pertama diadakan di kantin kerana dewan sedang dibaiki. Setiap paket dilabel dengan nama tumbuhan dan tarikh benih dikumpulkan. Selepas tiga bulan, wang yang dijimatkan digunakan untuk membeli tangki air hujan."
      },
      {
        "chapterId": "pemahaman",
        "q": "Mengapakah kantin dipilih?",
        "options": [
          "Terdapat tangki di kantin",
          "Benih disimpan di kantin",
          "Dewan sedang dibaiki"
        ],
        "correctIndex": 2,
        "explanation": "Petikan menyatakan bahawa dewan sedang dibaiki ketika pertukaran pertama diadakan.",
        "passage": "Pada mulanya, kelab taman membeli anak pokok setiap bulan. Apabila bendahari menunjukkan bahawa kos semakin meningkat, Sara mencadangkan pertukaran benih dengan penduduk. Pertukaran pertama diadakan di kantin kerana dewan sedang dibaiki. Setiap paket dilabel dengan nama tumbuhan dan tarikh benih dikumpulkan. Selepas tiga bulan, wang yang dijimatkan digunakan untuk membeli tangki air hujan."
      },
      {
        "chapterId": "pemahaman",
        "q": "Maklumat manakah tercatat di samping nama tumbuhan?",
        "options": [
          "Tarikh benih dikumpulkan",
          "Harga anak pokok",
          "Nama pembeli"
        ],
        "correctIndex": 0,
        "explanation": "Label merekodkan nama tumbuhan dan masa benih dikumpulkan.",
        "passage": "Pada mulanya, kelab taman membeli anak pokok setiap bulan. Apabila bendahari menunjukkan bahawa kos semakin meningkat, Sara mencadangkan pertukaran benih dengan penduduk. Pertukaran pertama diadakan di kantin kerana dewan sedang dibaiki. Setiap paket dilabel dengan nama tumbuhan dan tarikh benih dikumpulkan. Selepas tiga bulan, wang yang dijimatkan digunakan untuk membeli tangki air hujan."
      },
      {
        "chapterId": "pemahaman",
        "q": "Apakah bukti bahawa pertukaran itu membantu kewangan kelab?",
        "options": [
          "Bendahari menjual paket",
          "Kelab dapat membeli tangki dengan wang penjimatan",
          "Kelab membaiki dewan"
        ],
        "correctIndex": 1,
        "explanation": "Pembelian tangki menggunakan wang penjimatan menunjukkan manfaat kewangan secara langsung.",
        "passage": "Pada mulanya, kelab taman membeli anak pokok setiap bulan. Apabila bendahari menunjukkan bahawa kos semakin meningkat, Sara mencadangkan pertukaran benih dengan penduduk. Pertukaran pertama diadakan di kantin kerana dewan sedang dibaiki. Setiap paket dilabel dengan nama tumbuhan dan tarikh benih dikumpulkan. Selepas tiga bulan, wang yang dijimatkan digunakan untuk membeli tangki air hujan."
      },
      {
        "chapterId": "pemahaman",
        "q": "Tajuk manakah paling sesuai?",
        "options": [
          "Cara Membina Tangki",
          "Kantin Baharu Sekolah",
          "Pertukaran Benih Membantu Kelab Taman"
        ],
        "correctIndex": 2,
        "explanation": "Petikan menerangkan bagaimana pertukaran benih mengurangkan perbelanjaan kelab.",
        "passage": "Pada mulanya, kelab taman membeli anak pokok setiap bulan. Apabila bendahari menunjukkan bahawa kos semakin meningkat, Sara mencadangkan pertukaran benih dengan penduduk. Pertukaran pertama diadakan di kantin kerana dewan sedang dibaiki. Setiap paket dilabel dengan nama tumbuhan dan tarikh benih dikumpulkan. Selepas tiga bulan, wang yang dijimatkan digunakan untuk membeli tangki air hujan."
      }
    ]
  }
];
  return { SETS };
});
