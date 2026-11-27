/**
 * Structured subjective questions: Tingkatan 2 KSSM Geografi (Bahagian B 4x10m + Bahagian C 4x10m).
 * All items are 100% original BM, self-contained text (no diagram references), status: "verified".
 * VERIFICATION RECORD (28/Nov/2026): Gate 1 verify-structured-t2.mjs passed; Gate 2 independent blind solve pending.
 */
(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.t2_geografi = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
    /* ==================== BAHAGIAN B (4 items x 10 marks) ==================== */
    {
      "id": "t2ge-B01",
      "chapterId": "skala_jarak",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Skala pada peta membolehkan jarak sebenar di permukaan bumi ditentukan daripada jarak yang diukur pada peta. Terdapat tiga bentuk skala, iaitu skala lurus, skala penyata dan skala wakilan.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan tiga bentuk skala yang lazim digunakan pada peta.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Skala lurus" },
            { "kind": "A", "marks": 1, "text": "Skala penyata" },
            { "kind": "A", "marks": 1, "text": "Skala wakilan" }
          ],
          "answer": "Skala lurus, skala penyata dan skala wakilan."
        },
        {
          "label": "(b)",
          "q": "Sebuah peta mempunyai skala wakilan 1:50 000. Hitungkan jarak sebenar dalam kilometer bagi jarak 6 cm pada peta. Tunjukkan langkah pengiraan.",
          "marks": 4,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Jarak sebenar = 6 cm x 50 000" },
            { "kind": "M", "marks": 1, "text": "= 300 000 cm" },
            { "kind": "M", "marks": 1, "text": "Menukar unit: 1 km = 100 000 cm" },
            { "kind": "A", "marks": 1, "text": "Jawapan akhir: 3 km" }
          ],
          "answer": "Jarak sebenar = 6 x 50 000 = 300 000 cm. Oleh sebab 1 km = 100 000 cm, jarak sebenar ialah 300 000 / 100 000 = 3 km."
        },
        {
          "label": "(c)",
          "q": "Jelaskan mengapa jarak melengkung sepanjang sungai patut diukur menggunakan benang dan bukannya pembaris lurus.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Benang dapat mengikut bentuk melengkung sungai sehingga panjang sebenar laluan dapat diukur dengan tepat" },
            { "kind": "A", "marks": 1, "text": "Pembaris lurus hanya mengukur jarak garis lurus, menyebabkan jarak sebenar menjadi lebih pendek daripada yang sepatutnya" }
          ],
          "answer": "Benang dapat mengikut bentuk melengkung sungai, jadi panjang sebenar laluan dapat diukur dengan tepat. Pembaris lurus hanya mengukur jarak garis lurus dan akan menghasilkan jarak yang lebih pendek daripada jarak sebenar."
        }
      ]
    },
    {
      "id": "t2ge-B02",
      "chapterId": "cuaca_iklim",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Malaysia mengalami iklim khatulistiwa yang panas dan lembap sepanjang tahun. Namun begitu, taburan hujan di Malaysia dipengaruhi oleh angin monsun yang bertiup secara bermusim.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan dua unsur cuaca yang diukur dengan tolok hujan dan termometer.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tolok hujan mengukur jumlah hujan" },
            { "kind": "A", "marks": 1, "text": "Termometer mengukur suhu udara" }
          ],
          "answer": "Tolok hujan mengukur jumlah hujan, manakala termometer mengukur suhu udara."
        },
        {
          "label": "(b)",
          "q": "Bezakan Monsun Timur Laut dengan Monsun Barat Daya dari segi bulan berlakunya dan kesan terhadap hujan di Malaysia.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Monsun Timur Laut berlaku sekitar November hingga Mac dan membawa hujan lebat terutama di Pantai Timur Semenanjung, Sarawak dan Sabah" },
            { "kind": "A", "marks": 2, "text": "Monsun Barat Daya berlaku sekitar Mei hingga September dan lazimnya membawa cuaca lebih kering di kebanyakan kawasan" }
          ],
          "answer": "Monsun Timur Laut berlaku sekitar November hingga Mac dan membawa hujan lebat terutama di Pantai Timur Semenanjung, Sarawak dan Sabah. Monsun Barat Daya berlaku sekitar Mei hingga September dan lazimnya membawa cuaca yang lebih kering di kebanyakan kawasan."
        },
        {
          "label": "(c)",
          "q": "Jelaskan bagaimana hujan bukit terjadi dan mengapa kawasan lereng gunung menerima hujan yang lebih banyak berbanding kawasan di seberangnya.",
          "marks": 4,
          "steps": [
            { "kind": "M", "marks": 2, "text": "Udara lembap dipaksa naik di lereng gunung, menyejuk, mengalami pemeluwapan dan membentuk awan lalu turun sebagai hujan" },
            { "kind": "A", "marks": 2, "text": "Udara yang telah kering turun di seberang gunung menyebabkan kawasan itu menerima hujan yang lebih sedikit (kesan hujan bayang)" }
          ],
          "answer": "Udara lembap dipaksa naik di lereng gunung dan menyejuk, lalu mengalami pemeluwapan, membentuk awan dan turun sebagai hujan. Udara yang telah kering kemudian turun di seberang gunung, menyebabkan kawasan itu menerima hujan yang lebih sedikit."
        }
      ]
    },
    {
      "id": "t2ge-B03",
      "chapterId": "pengangkutan_telekomunikasi",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Malaysia mempunyai jaringan pengangkutan dan telekomunikasi yang berkembang pesat. Kemajuan ini memberi kesan positif kepada ekonomi negara tetapi turut menimbulkan kesan negatif terhadap alam sekitar dan masyarakat.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan dua jenis pengangkutan darat yang utama di Malaysia.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Menyenaraikan dua daripada: jalan raya, lebuh raya, landasan kereta api dan pengangkutan awam darat" }
          ],
          "answer": "Jalan raya dan landasan kereta api."
        },
        {
          "label": "(b)",
          "q": "Jelaskan dua kesan negatif perkembangan pengangkutan terhadap alam sekitar.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Pencemaran udara akibat pembakaran bahan api kenderaan bermotor" },
            { "kind": "A", "marks": 2, "text": "Pencemaran bunyi dan kesesakan lalu lintas yang menjejaskan kualiti hidup penduduk" }
          ],
          "answer": "Perkembangan pengangkutan menyebabkan pencemaran udara akibat pembakaran bahan api kenderaan bermotor, serta pencemaran bunyi dan kesesakan lalu lintas yang menjejaskan kualiti hidup penduduk."
        },
        {
          "label": "(c)",
          "q": "Jelaskan dua langkah yang boleh diambil untuk mengurangkan kesan negatif telekomunikasi terhadap masyarakat.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Meningkatkan kesedaran pengguna tentang keselamatan dalam talian dan penyebaran berita palsu" },
            { "kind": "A", "marks": 2, "text": "Menggalakkan penggunaan pengesahan dua faktor serta mengawal masa penggunaan gajet, terutamanya dalam kalangan murid" }
          ],
          "answer": "Kesedaran pengguna tentang keselamatan dalam talian dan bahaya berita palsu perlu ditingkatkan. Selain itu, penggunaan pengesahan dua faktor dan kawalan masa penggunaan gajet boleh mengurangkan risiko jenayah siber dan ketagihan."
        }
      ]
    },
    {
      "id": "t2ge-B04",
      "chapterId": "pemanasan_global",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Pemanasan global ialah peningkatan suhu purata atmosfera dan lautan bumi. Fenomena ini berlaku akibat peningkatan kepekatan gas rumah hijau dalam atmosfera, dan kesannya mula dikesan melalui perubahan pola cuaca serta kenaikan aras laut.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan dua gas rumah hijau utama yang menyumbang kepada pemanasan global.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Menyenaraikan dua daripada: karbon dioksida, metana, nitrus oksida dan klorofluorokarbon" }
          ],
          "answer": "Karbon dioksida dan metana."
        },
        {
          "label": "(b)",
          "q": "Jelaskan dua punca pemanasan global yang berpunca daripada aktiviti manusia.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Pembakaran bahan api fosil dalam kenderaan, kilang dan jana kuasa membebaskan karbon dioksida" },
            { "kind": "A", "marks": 2, "text": "Penyahhutanan mengurangkan bilangan pokok yang menyerap karbon dioksida, selain pembukaan tanah yang membebaskan karbon tersimpan" }
          ],
          "answer": "Pembakaran bahan api fosil dalam kenderaan, kilang dan jana kuasa membebaskan karbon dioksida ke atmosfera. Penyahhutanan pula mengurangkan bilangan pokok yang menyerap karbon dioksida dan membebaskan karbon yang tersimpan dalam tanah."
        },
        {
          "label": "(c)",
          "q": "Nyatakan dua kesan pemanasan global terhadap Malaysia dan cadangkan dua langkah mengatasinya.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Kesan seperti kenaikan aras laut yang mengancam kawasan pesisir, cuaca tidak menentu, banjir dan kemarau yang lebih kerap" },
            { "kind": "A", "marks": 2, "text": "Langkah seperti penggunaan tenaga boleh baharu, pengangkutan awam, penanaman semula hutan dan amalan 3R" }
          ],
          "answer": "Pemanasan global boleh menyebabkan kenaikan aras laut yang mengancam kawasan pesisir serta cuaca tidak menentu seperti banjir dan kemarau yang lebih kerap. Langkah mengatasinya termasuk penggunaan tenaga boleh baharu, memperbanyakkan penggunaan pengangkutan awam, penanaman semula hutan dan amalan 3R."
        }
      ]
    },

    /* ==================== BAHAGIAN C (4 items offered x 10 marks; pupils answer 2) ==================== */
    {
      "id": "t2ge-C01",
      "chapterId": "iklim_asia",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Asia mempunyai jenis iklim yang sangat pelbagai, daripada iklim khatulistiwa di bahagian tenggara sehingga iklim tundra di bahagian utara. Kepelbagaian iklim ini mempengaruhi kegiatan ekonomi dan cara hidup penduduk di setiap wilayah.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan tiga jenis iklim utama yang terdapat di Asia berserta satu ciri suhu atau hujan bagi setiap jenis.",
          "marks": 6,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Iklim khatulistiwa: panas dan lembap sepanjang tahun dengan hujan tinggi" },
            { "kind": "A", "marks": 2, "text": "Iklim gurun: sangat kering dengan perbezaan suhu siang dan malam yang besar" },
            { "kind": "A", "marks": 2, "text": "Iklim tundra atau iklim sederhana sejuk: musim sejuk yang panjang dan sejuk, tumbuhan terhad" }
          ],
          "answer": "Asia mempunyai iklim khatulistiwa yang panas dan lembap sepanjang tahun dengan hujan tinggi, iklim gurun yang sangat kering dengan perbezaan suhu siang dan malam yang besar, serta iklim tundra yang mengalami musim sejuk panjang dengan tumbuhan yang terhad."
        },
        {
          "label": "(b)",
          "q": "Jelaskan bagaimana iklim mempengaruhi kegiatan pertanian penduduk di Asia.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Kawasan iklim monsun dengan hujan mencukupi sesuai untuk penanaman padi" },
            { "kind": "A", "marks": 2, "text": "Kawasan iklim sederhana sejuk sesuai untuk tanaman seperti gandum, manakala kawasan gurun menyukarkan pertanian tanpa pengairan" }
          ],
          "answer": "Kawasan beriklim monsun yang menerima hujan mencukupi sesuai untuk penanaman padi. Kawasan beriklim sederhana sejuk pula sesuai untuk tanaman seperti gandum, manakala kawasan gurun menyukarkan pertanian tanpa sistem pengairan."
        }
      ]
    },
    {
      "id": "t2ge-C02",
      "chapterId": "iklim_asia",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Bencana alam berkaitan iklim seperti taufan, banjir dan kemarau sering melanda bahagian tertentu di Asia. Bencana ini memberi kesan besar terhadap kehidupan penduduk, terutamanya di kawasan yang padat dengan petempatan dan kegiatan pertanian.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan dua bencana alam berkaitan iklim yang sering berlaku di Asia dan nyatakan kawasan yang sering terjejas.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Taufan yang sering melanda kawasan pesisir timur Asia seperti Filipina, Vietnam dan selatan China" },
            { "kind": "A", "marks": 2, "text": "Banjir monsun dan kemarau yang melanda kawasan monsun Asia Selatan dan Tenggara" }
          ],
          "answer": "Taufan sering melanda kawasan pesisir timur Asia seperti Filipina, Vietnam dan selatan China. Banjir monsun dan kemarau pula sering melanda kawasan monsun Asia Selatan dan Tenggara."
        },
        {
          "label": "(b)",
          "q": "Jelaskan dua kesan bencana iklim terhadap kegiatan ekonomi penduduk Asia.",
          "marks": 6,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Kemusnahan tanaman dan ternakan menyebabkan kerugian kepada petani dan mengancam bekalan makanan" },
            { "kind": "A", "marks": 3, "text": "Kerosakan infrastruktur seperti jalan, jambatan dan rumah menyukarkan pengangkutan serta menjejaskan kegiatan ekonomi setempat" }
          ],
          "answer": "Bencana iklim memusnahkan tanaman dan ternakan sehingga menyebabkan kerugian kepada petani dan mengancam bekalan makanan. Kerosakan infrastruktur seperti jalan, jambatan dan rumah pula menyukarkan pengangkutan serta menjejaskan kegiatan ekonomi setempat."
        }
      ]
    },
    {
      "id": "t2ge-C03",
      "chapterId": "pemanasan_global",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Teknologi hijau diperkenalkan sebagai usaha mengurangkan kesan negatif terhadap alam sekitar. Antara contohnya ialah penggunaan tenaga boleh baharu, bangunan hijau dan amalan 3R dalam kehidupan harian.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan maksud teknologi hijau dan senaraikan dua cirinya.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Maksud: teknologi yang dibangunkan untuk mengurangkan kesan negatif terhadap alam sekitar" },
            { "kind": "A", "marks": 2, "text": "Ciri seperti menggunakan sumber tenaga boleh baharu, menggalakkan kitar semula dan mengurangkan pembebasan bahan pencemar" }
          ],
          "answer": "Teknologi hijau ialah teknologi yang dibangunkan untuk mengurangkan kesan negatif terhadap alam sekitar. Cirinya termasuk menggunakan sumber tenaga boleh baharu, menggalakkan kitar semula dan mengurangkan pembebasan bahan pencemar."
        },
        {
          "label": "(b)",
          "q": "Namakan dua sumber tenaga boleh baharu yang sesuai dibangunkan di Malaysia dan jelaskan satu kelebihan setiap sumber itu.",
          "marks": 6,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Tenaga suria: Malaysia menerima cahaya matahari sepanjang tahun, sesuai untuk penjanaan elektrik tanpa bahan api fosil" },
            { "kind": "A", "marks": 3, "text": "Tenaga hidro atau biojisim: hidro menggunakan aliran sungai, manakala biojisim menggunakan sisa pertanian seperti tandan kelapa sawit" }
          ],
          "answer": "Tenaga suria sesuai dibangunkan di Malaysia kerana negara menerima cahaya matahari sepanjang tahun dan boleh menjana elektrik tanpa bahan api fosil. Tenaga hidro pula menggunakan aliran sungai untuk menjana elektrik, manakala tenaga biojisim menggunakan sisa pertanian seperti tandan kelapa sawit."
        }
      ]
    },
    {
      "id": "t2ge-C04",
      "chapterId": "skala_jarak",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Peta topografi digunakan untuk menunjukkan bentuk muka bumi dan ciri budaya sesuatu kawasan. Pembacaan peta yang tepat bergantung pada kefahaman tentang skala, garisan kontur dan simbol peta.",
      "parts": [
        {
          "label": "(a)",
          "q": "Sebuah peta berskala 1:100 000 menunjukkan jarak 9 cm antara sebuah sekolah dengan sebuah balai polis. Hitungkan jarak sebenar dalam kilometer dan nyatakan tempoh perjalanan jika kelajuan purata ialah 45 km/j.",
          "marks": 6,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Jarak sebenar = 9 cm x 100 000" },
            { "kind": "M", "marks": 1, "text": "= 900 000 cm" },
            { "kind": "A", "marks": 1, "text": "Jarak sebenar = 9 km" },
            { "kind": "M", "marks": 1, "text": "Masa = jarak / kelajuan = 9 / 45" },
            { "kind": "M", "marks": 1, "text": "= 0.2 jam" },
            { "kind": "A", "marks": 1, "text": "= 12 minit" }
          ],
          "answer": "Jarak sebenar = 9 x 100 000 = 900 000 cm = 9 km. Masa perjalanan = 9 / 45 = 0.2 jam = 12 minit."
        },
        {
          "label": "(b)",
          "q": "Jelaskan maksud garisan kontur dan terangkan bagaimana jarak antara garisan kontur dapat menunjukkan kecerunan sesuatu cerun.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Garisan kontur ialah garisan yang menghubungkan titik-titik yang mempunyai ketinggian yang sama" },
            { "kind": "A", "marks": 2, "text": "Garisan kontur yang rapat menunjukkan cerun curam, manakala garisan kontur yang jarang menunjukkan cerun landai" }
          ],
          "answer": "Garisan kontur ialah garisan yang menghubungkan titik-titik yang mempunyai ketinggian yang sama. Garisan kontur yang rapat menunjukkan cerun curam, manakala garisan kontur yang jarang menunjukkan cerun landai."
        }
      ]
    }
  ];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});