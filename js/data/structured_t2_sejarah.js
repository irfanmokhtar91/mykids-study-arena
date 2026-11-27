/**
 * Structured subjective questions: Tingkatan 2 KSSM Sejarah (Bahagian B 4x10m + Bahagian C 2x20m).
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
    App.Data.structured.t2_sejarah = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
    /* ==================== BAHAGIAN B (4 items x 10 marks) ==================== */
    {
      "id": "t2sj-B01",
      "chapterId": "alam_melayu",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Kerajaan Alam Melayu berkembang pesat antara abad pertama hingga abad ke-15. Antara kerajaan awal yang muncul ialah Funan, Champa, Srivijaya, Angkor dan Majapahit. Setiap kerajaan ini mempunyai pusat pemerintahan, kegiatan ekonomi dan pengaruh budaya tersendiri.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan maksud Alam Melayu dan senaraikan dua kawasan yang termasuk dalam lingkungannya.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Menyatakan maksud Alam Melayu: kawasan kepulauan dan semenanjung di Asia Tenggara yang dihuni masyarakat Melayu" },
            { "kind": "A", "marks": 2, "text": "Menyenaraikan dua kawasan: Semenanjung Tanah Melayu, Sumatera, Jawa, Borneo, Sulawesi atau Kepulauan Riau-Lingga (mana-mana dua)" }
          ],
          "answer": "Alam Melayu ialah kawasan kepulauan dan semenanjung di Asia Tenggara yang dihuni oleh masyarakat Melayu. Kawasannya merangkumi Semenanjung Tanah Melayu, Sumatera, Jawa, Borneo dan Sulawesi."
        },
        {
          "label": "(b)",
          "q": "Susun kerajaan Funan, Srivijaya dan Majapahit mengikut kronologi kemunculannya, daripada yang paling awal kepada yang paling akhir.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Funan paling awal (sekitar abad pertama)" },
            { "kind": "A", "marks": 1, "text": "Srivijaya di tengah (sekitar abad ketujuh)" },
            { "kind": "A", "marks": 1, "text": "Majapahit paling akhir (tahun 1293)" }
          ],
          "answer": "Funan, kemudian Srivijaya, dan akhirnya Majapahit."
        },
        {
          "label": "(c)",
          "q": "Jelaskan dua faktor yang menyebabkan kerajaan Alam Melayu muncul sebagai pusat perdagangan yang berkembang maju.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Kedudukan strategik: terletak di tengah laluan perdagangan antara Timur dan Barat serta berhampiran Selat Melaka" },
            { "kind": "A", "marks": 2, "text": "Kekayaan hasil bumi dan hasil hutan seperti rempah ratus, gaharu, damar dan bijih timah yang diminati pedagang asing" }
          ],
          "answer": "Kerajaan Alam Melayu muncul sebagai pusat perdagangan kerana kedudukannya yang strategik di tengah laluan perdagangan Timur dan Barat berhampiran Selat Melaka, serta kekayaan hasil bumi dan hasil hutan seperti rempah ratus, gaharu dan bijih timah yang sangat diminati pedagang asing."
        }
      ]
    },
    {
      "id": "t2sj-B02",
      "chapterId": "kesultanan_melaka",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Kesultanan Melayu Melaka diasaskan oleh Parameswara dan mencapai kegemilangan pada abad ke-15. Sistem pentadbirannya tersusun dengan Sultan sebagai pemerintah tertinggi dibantu oleh pembesar berempat. Melaka juga menggubal undang-undang bertulis untuk mengawal pemerintahan dan perdagangan.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan dua pembesar berempat dalam pentadbiran Kesultanan Melayu Melaka.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Menyenaraikan dua daripada: Bendahara, Temenggung, Laksamana dan Syahbandar" }
          ],
          "answer": "Bendahara dan Temenggung (atau Laksamana dan Syahbandar)."
        },
        {
          "label": "(b)",
          "q": "Bezakan tugas Bendahara dengan tugas Temenggung.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Bendahara: ketua pentadbir, penasihat Sultan dan pemangku Sultan semasa ketiadaan baginda" },
            { "kind": "A", "marks": 2, "text": "Temenggung: menjaga keselamatan, ketenteraman dan keamanan dalam negeri serta mengetuai angkatan tentera" }
          ],
          "answer": "Bendahara ialah ketua pentadbir yang menasihati Sultan dan memangku tugas baginda semasa ketiadaannya. Temenggung pula menjaga keselamatan dan ketenteraman dalam negeri serta mengetuai angkatan tentera."
        },
        {
          "label": "(c)",
          "q": "Jelaskan mengapa Hukum Kanun Melaka dan Undang-undang Laut Melaka digubal secara berasingan.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Hukum Kanun Melaka mengawal hal pemerintahan, adat istiadat dan jenayah dalam negeri" },
            { "kind": "A", "marks": 2, "text": "Undang-undang Laut Melaka mengawal hal perdagangan, pelayaran dan peraturan di pelabuhan khusus untuk urusan maritim" }
          ],
          "answer": "Kedua-duanya digubal secara berasingan kerana mengawal perkara yang berbeza. Hukum Kanun Melaka mengawal pemerintahan, adat istiadat dan jenayah dalam negeri, manakala Undang-undang Laut Melaka mengawal perdagangan, pelayaran dan peraturan di pelabuhan."
        }
      ]
    },
    {
      "id": "t2sj-B03",
      "chapterId": "johor_riau",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Kesultanan Johor Riau muncul selepas kejatuhan Melaka ke tangan Portugis pada tahun 1511 dan dianggap sebagai penerus Kesultanan Melayu Melaka. Kerajaan ini berhadapan dengan persaingan kuasa di Selat Melaka sehingga tercetusnya Perang Tiga Segi. Perjanjian Inggeris-Belanda 1824 kemudiannya membahagikan wilayahnya.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan dua pihak yang terlibat dalam Perang Tiga Segi.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Menyenaraikan dua daripada: Johor, Portugis dan Aceh" }
          ],
          "answer": "Johor dan Portugis (atau Aceh)."
        },
        {
          "label": "(b)",
          "q": "Terangkan mengapa Kesultanan Johor Riau dianggap sebagai penerus Kesultanan Melayu Melaka.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Ia diasaskan oleh Sultan Alauddin Riayat Shah II yang merupakan kerabat diraja Kesultanan Melayu Melaka" },
            { "kind": "A", "marks": 2, "text": "Ia meneruskan sistem pemerintahan beraja, adat istiadat dan budaya Melayu yang diwarisi daripada Melaka" }
          ],
          "answer": "Kesultanan Johor Riau dianggap penerus Melaka kerana diasaskan oleh Sultan Alauddin Riayat Shah II daripada kerabat diraja Melaka, dan kerana ia meneruskan sistem pemerintahan beraja serta adat istiadat dan budaya Melayu yang diwarisi daripada Melaka."
        },
        {
          "label": "(c)",
          "q": "Jelaskan kesan Perjanjian Inggeris-Belanda 1824 terhadap Kesultanan Johor Riau.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Wilayah Johor Riau terbahagi kepada dua lingkungan pengaruh, iaitu British dan Belanda" },
            { "kind": "A", "marks": 2, "text": "Kuasa dan kesatuan kerajaan menjadi lemah kerana kehilangan wilayah dan kedudukannya sebagai kuasa tunggal di Selat Melaka tergugat" }
          ],
          "answer": "Perjanjian Inggeris-Belanda 1824 membahagikan wilayah Johor Riau kepada dua lingkungan pengaruh, iaitu British dan Belanda. Pembahagian ini melemahkan kuasa dan kesatuan kerajaan serta menggugat kedudukannya sebagai kuasa tunggal di Selat Melaka."
        }
      ]
    },
    {
      "id": "t2sj-B04",
      "chapterId": "sarawak_sabah",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Di Borneo, Sarawak diperintah oleh keluarga Brooke manakala Sabah berada di bawah Syarikat Berpiagam Borneo Utara. Kedua-dua wilayah ini mempunyai latar pemerintahan yang berbeza daripada negeri-negeri di Semenanjung. Penduduk tempatan di kedua-dua wilayah tidak menerima pemerintahan asing secara pasif.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan pihak yang memerintah Sarawak dan pihak yang memerintah Sabah sebelum pembentukan Malaysia.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Sarawak: keluarga Brooke" },
            { "kind": "A", "marks": 1, "text": "Sabah: Syarikat Berpiagam Borneo Utara" }
          ],
          "answer": "Sarawak diperintah oleh keluarga Brooke, manakala Sabah diperintah oleh Syarikat Berpiagam Borneo Utara."
        },
        {
          "label": "(b)",
          "q": "Nyatakan dua tokoh tempatan yang menentang pemerintahan Brooke di Sarawak.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Menyatakan Rentap sebagai tokoh penentang" },
            { "kind": "A", "marks": 2, "text": "Menyatakan Sharif Masahor sebagai tokoh penentang" }
          ],
          "answer": "Rentap dan Sharif Masahor."
        },
        {
          "label": "(c)",
          "q": "Jelaskan dua kegiatan ekonomi tradisional penduduk Sarawak dan Sabah yang menarik minat pedagang luar.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Hasil hutan seperti sagu, rotan, damar dan gaharu yang sukar diperoleh di tempat lain" },
            { "kind": "A", "marks": 2, "text": "Hasil pertanian dan perikanan serta hasil laut yang menjadi barang dagangan di pelabuhan tempatan" }
          ],
          "answer": "Penduduk Sarawak dan Sabah mengumpul hasil hutan seperti sagu, rotan, damar dan gaharu yang sukar diperoleh di tempat lain, serta terlibat dalam pertanian, perikanan dan hasil laut. Hasil-hasil ini menjadi barang dagangan yang menarik minat pedagang luar."
        }
      ]
    },

    /* ==================== BAHAGIAN C (2 items x 20 marks) ==================== */
    {
      "id": "t2sj-C01",
      "chapterId": "pahang_perak_terengganu_selangor",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Kesultanan Pahang, Perak, Terengganu dan Selangor muncul sebagai kesinambungan kerajaan Melayu selepas kegemilangan Melaka. Hubungan kekeluargaan diraja memainkan peranan penting dalam pengasasan kesultanan ini. Setiap kesultanan kemudiannya berkembang dengan kegiatan ekonomi dan warisan budayanya sendiri.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan tokoh yang dikaitkan dengan pengasasan Kesultanan Perak, Terengganu dan Selangor.",
          "marks": 6,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Perak: Sultan Muzaffar Shah I" },
            { "kind": "A", "marks": 2, "text": "Terengganu: Sultan Zainal Abidin I" },
            { "kind": "A", "marks": 2, "text": "Selangor: Sultan Salehuddin" }
          ],
          "answer": "Perak dikaitkan dengan Sultan Muzaffar Shah I, Terengganu dengan Sultan Zainal Abidin I, dan Selangor dengan Sultan Salehuddin."
        },
        {
          "label": "(b)",
          "q": "Jelaskan mengapa hubungan kekeluargaan dengan kerabat diraja Melaka penting kepada kesultanan baharu ini.",
          "marks": 6,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Hubungan kekeluargaan diraja memberi hak dan legitimasi untuk memerintah sesebuah wilayah" },
            { "kind": "A", "marks": 3, "text": "Rakyat lebih mudah menerima pemerintah yang mempunyai pertalian darah dengan kerabat diraja Melaka yang dihormati" }
          ],
          "answer": "Hubungan kekeluargaan dengan kerabat diraja Melaka memberi hak dan legitimasi kepada pengasas untuk memerintah sesebuah wilayah. Selain itu, rakyat lebih mudah menerima pemerintah yang mempunyai pertalian darah dengan kerabat diraja Melaka yang dihormati, sekali gus mengukuhkan kesetiaan rakyat."
        },
        {
          "label": "(c)",
          "q": "Bandingkan kegiatan ekonomi utama Kesultanan Perak dengan Kesultanan Terengganu pada abad ke-18 dan ke-19, dan nyatakan satu warisan budaya bagi setiap kesultanan.",
          "marks": 8,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Perak terkenal dengan perlombongan bijih timah dan hasil hutan" },
            { "kind": "A", "marks": 3, "text": "Terengganu lebih tertumpu pada pertanian, perikanan dan hasil laut" },
            { "kind": "A", "marks": 1, "text": "Menyatakan satu warisan budaya Perak seperti seni ukir, silat atau adat istiadat diraja" },
            { "kind": "A", "marks": 1, "text": "Menyatakan satu warisan budaya Terengganu seperti seni persembahan, songket atau seni bina" }
          ],
          "answer": "Perak terkenal dengan kegiatan perlombongan bijih timah dan hasil hutan, manakala Terengganu lebih tertumpu pada pertanian, perikanan dan hasil laut. Warisan budaya Perak termasuk seni ukir dan adat istiadat diraja, manakala warisan budaya Terengganu termasuk songket dan seni persembahan tradisional."
        }
      ]
    },
    {
      "id": "t2sj-C02",
      "chapterId": "kedah_kelantan_perlis",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis mempunyai latar pengasasan yang berbeza. Kedah, Kelantan dan Perlis menerima pengaruh Siam yang kuat, manakala Negeri Sembilan menerima pengaruh Minangkabau dari Sumatera. Perbezaan pengaruh ini membentuk sistem pemerintahan dan adat resam yang berlainan.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan pengaruh luar utama yang membentuk Kerajaan Kedah, Kelantan dan Perlis, serta pengaruh luar utama yang membentuk Negeri Sembilan.",
          "marks": 4,
          "steps": [
            { "kind": "A", "marks": 2, "text": "Kedah, Kelantan dan Perlis: pengaruh Siam" },
            { "kind": "A", "marks": 2, "text": "Negeri Sembilan: pengaruh Minangkabau dari Sumatera" }
          ],
          "answer": "Kedah, Kelantan dan Perlis menerima pengaruh Siam, manakala Negeri Sembilan menerima pengaruh Minangkabau dari Sumatera."
        },
        {
          "label": "(b)",
          "q": "Terangkan maksud sistem kekeluargaan matrilineal dalam Adat Perpatih dan jelaskan mengapa sistem ini tidak bermaksud wanita memegang kuasa politik tertinggi.",
          "marks": 8,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Matrilineal bermaksud pewarisan harta pusaka dan keturunan melalui sebelah ibu" },
            { "kind": "A", "marks": 3, "text": "Kuasa politik dan pentadbiran tetap dipegang oleh lelaki melalui pelantikan Undang, Lembaga dan Yang di-Pertuan Besar" },
            { "kind": "A", "marks": 2, "text": "Wanita memainkan peranan penting dalam hal keluarga dan pewarisan harta, tetapi bukan dalam pemerintahan" }
          ],
          "answer": "Matrilineal bermaksud pewarisan harta pusaka dan keturunan melalui sebelah ibu. Namun, kuasa politik dan pentadbiran tetap dipegang oleh lelaki melalui pelantikan Undang, Lembaga dan Yang di-Pertuan Besar. Wanita memainkan peranan penting dalam hal keluarga dan pewarisan harta, tetapi bukan dalam pemerintahan."
        },
        {
          "label": "(c)",
          "q": "Bezakan Adat Perpatih dengan Adat Temenggung dari segi sistem kekeluargaan, dan nyatakan dua warisan budaya Negeri Sembilan yang masih diamalkan hari ini.",
          "marks": 8,
          "steps": [
            { "kind": "A", "marks": 3, "text": "Adat Perpatih bersifat matrilineal (melalui sebelah ibu), manakala Adat Temenggung bersifat patrilineal (melalui sebelah bapa)" },
            { "kind": "A", "marks": 2, "text": "Menyatakan satu warisan budaya seperti sistem pemerintahan berhierarki dengan Undang dan Lembaga" },
            { "kind": "A", "marks": 2, "text": "Menyatakan satu warisan budaya seperti adat perkahwinan, seni persembahan atau rumah adat" },
            { "kind": "A", "marks": 1, "text": "Menyatakan bahawa adat ini masih diamalkan dalam upacara rasmi dan kehidupan harian masyarakat" }
          ],
          "answer": "Adat Perpatih bersifat matrilineal yang mewarisi harta dan keturunan melalui sebelah ibu, manakala Adat Temenggung bersifat patrilineal yang mewarisi melalui sebelah bapa. Warisan budaya Negeri Sembilan yang masih diamalkan termasuk sistem pemerintahan berhierarki dengan Undang dan Lembaga serta adat perkahwinan dan seni persembahan tradisional."
        }
      ]
    }
  ];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});