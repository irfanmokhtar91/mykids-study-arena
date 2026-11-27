/**
 * Structured subjective questions: Tingkatan 2 KSSM Sains (Bahagian B 10x4m + Bahagian C 12x10m).
 * All items are 100% original BM, self-contained text (no diagram references), status: "verified".
 * VERIFICATION RECORD (27/Nov/2026): Gate 1 verify-structured-t2.mjs passed; Gate 2 independent blind solve (gemini-4-argon) verified 22/22 items (68/68 parts, t2s-C01(c) revised & rechecked 0 flags).
 */
(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.t2_sains = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
    /* ==================== BAHAGIAN B (10 items * 4 marks) ==================== */
    {
      "id": "t2s-B01",
      "chapterId": "biodiversiti",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Semasa ekspedisi sains di Hutan Simpan Endau-Rompin, sekumpulan murid Tingkatan 2 merekodkan organisma berikut: seekor harimau belang, dua ekor burung enggang, lima pokok meranti, seekor ular sawa, beratus-ratus ekor semut dan beberapa ekor cacing tanah di bawah batang kayu reput.",
      "parts": [
        {
          "label": "(a)",
          "q": "Apakah yang dimaksudkan dengan biodiversiti? Nyatakan dua kepentingan biodiversiti kepada manusia.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Menyatakan maksud biodiversiti: kepelbagaian organisma hidup di bumi atau di sesuatu habitat" },
            { "kind": "A", "marks": 1, "text": "Menyatakan dua kepentingan seperti sumber makanan, ubat-ubatan, bahan binaan, keseimbangan ekosistem atau rekreasi (mana-mana dua)" }
          ],
          "answer": "Biodiversiti ialah kepelbagaian organisma hidup di bumi atau sesuatu habitat. Kepentingannya termasuk membekalkan sumber makanan dan ubat-ubatan serta mengekalkan keseimbangan ekosistem."
        },
        {
          "label": "(b)",
          "q": "Kelaskan haiwan yang direkodkan kepada dua contoh vertebrata dan dua contoh invertebrata.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Vertebrata: harimau belang, burung enggang, ular sawa (mana-mana dua)" },
            { "kind": "A", "marks": 1, "text": "Invertebrata: semut dan cacing tanah" }
          ],
          "answer": "Vertebrata: harimau belang dan burung enggang (atau ular sawa). Invertebrata: semut dan cacing tanah."
        }
      ]
    },
    {
      "id": "t2s-B02",
      "chapterId": "ekosistem",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Dalam satu rantai makanan di sawah padi, padi dimakan oleh tikus, tikus dimakan oleh ular dan ular dimakan oleh burung helang. Petani di kawasan itu mula menggunakan racun tikus secara berlebihan untuk melindungi tanaman mereka.",
      "parts": [
        {
          "label": "(a)",
          "q": "Susun organisma tersebut mengikut aras trofik dalam piramid nombor dari aras paling bawah ke aras paling atas serta nyatakan peranannya.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Aras 1 (paling bawah): Padi (pengeluar); Aras 2: Tikus (pengguna primer)" },
            { "kind": "A", "marks": 1, "text": "Aras 3: Ular (pengguna sekunder); Aras 4 (paling atas): Burung helang (pengguna tertier)" }
          ],
          "answer": "Aras 1 (bawah): Padi (pengeluar). Aras 2: Tikus (pengguna primer). Aras 3: Ular (pengguna sekunder). Aras 4 (atas): Burung helang (pengguna tertier)."
        },
        {
          "label": "(b)",
          "q": "Ramalkan kesan penggunaan racun tikus secara berlebihan terhadap populasi ular dan burung helang. Berikan sebab.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Populasi ular berkurang kerana kekurangan makanan (tikus) atau mati termakan tikus beracun" },
            { "kind": "M", "marks": 1, "text": "Populasi burung helang turut berkurang kerana kekurangan ular sebagai sumber makanan" }
          ],
          "answer": "Populasi ular akan berkurang kerana tikus yang menjadi makanannya mati atau mengandungi racun; seterusnya populasi burung helang juga menurun akibat kekurangan ular."
        }
      ]
    },
    {
      "id": "t2s-B03",
      "chapterId": "nutrisi",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Seorang murid menjalankan ujian makanan ke atas dua sampel cecair makanan, J dan K. Apabila larutan iodin dititiskan ke dalam sampel J, warnanya berubah daripada perang kekuningan menjadi biru tua. Apabila sampel K dicampurkan dengan larutan natrium hidroksida dan beberapa titik larutan kuprum(II) sulfat, campuran berubah warna kepada ungu.",
      "parts": [
        {
          "label": "(a)",
          "q": "Kenal pasti nutrien yang hadir dalam sampel J dan sampel K.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Sampel J mengandungi kanji (karbohidrat)" },
            { "kind": "A", "marks": 1, "text": "Sampel K mengandungi protein" }
          ],
          "answer": "Sampel J mengandungi kanji, manakala sampel K mengandungi protein."
        },
        {
          "label": "(b)",
          "q": "Namakan enzim yang mencernakan nutrien dalam sampel J di dalam mulut serta nyatakan hasil pencernaan awalnya.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Enzim amilase air liur" },
            { "kind": "A", "marks": 1, "text": "Hasil pencernaan: maltosa" }
          ],
          "answer": "Enzim amilase air liur mencernakan kanji kepada maltosa di dalam mulut."
        }
      ]
    },
    {
      "id": "t2s-B04",
      "chapterId": "kesihatan",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Selepas musim tengkujuh, sebuah kampung berhampiran kawasan takungan air mencatat peningkatan kes demam denggi dan penyakit kencing manis dalam kalangan penduduk.",
      "parts": [
        {
          "label": "(a)",
          "q": "Kategorikan demam denggi dan penyakit kencing manis kepada penyakit berjangkit atau penyakit tidak berjangkit, dan nyatakan vektor bagi demam denggi.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Demam denggi ialah penyakit berjangkit manakala kencing manis ialah penyakit tidak berjangkit" },
            { "kind": "A", "marks": 1, "text": "Vektor demam denggi ialah nyamuk Aedes (betina)" }
          ],
          "answer": "Demam denggi ialah penyakit berjangkit yang disebarkan oleh vektor nyamuk Aedes, manakala kencing manis ialah penyakit tidak berjangkit."
        },
        {
          "label": "(b)",
          "q": "Cadangkan dua langkah pencegahan fizikal di persekitaran rumah untuk memutuskan kitar hidup vektor demam denggi tersebut.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Menghapuskan atau membersihkan bekas air bertakung (seperti tayar lama, pasu bunga dan longkang tersumbat)" },
            { "kind": "A", "marks": 1, "text": "Menutup rapat bekas simpanan air atau memasukkan ubat pembunuh jentik-jentik (larvisid/Abate)" }
          ],
          "answer": "Menghapuskan takungan air di persekitaran rumah seperti tayar lama dan piring pasu bunga, serta menutup rapat bekas simpanan air atau memasukkan pembunuh jentik-jentik."
        }
      ]
    },
    {
      "id": "t2s-B05",
      "chapterId": "air_larutan",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Dalam satu eksperimen elektrolisis air tulen yang ditambah sedikit asid sulfurik cair, arus elektrik dialirkan melalui dua elektrod karbon. Selepas 15 minit, isi padu gas yang terkumpul di katod ialah 18 cm³ manakala di anod ialah 9 cm³.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan gas yang terkumpul di katod dan gas yang terkumpul di anod, serta nyatakan fungsi penambahan asid sulfurik cair.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Katod: gas hidrogen; Anod: gas oksigen" },
            { "kind": "A", "marks": 1, "text": "Asid sulfurik cair ditambah untuk meningkatkan kekonduksian elektrik air" }
          ],
          "answer": "Gas hidrogen terkumpul di katod dan gas oksigen terkumpul di anod. Asid sulfurik cair ditambah untuk meningkatkan kekonduksian elektrik air."
        },
        {
          "label": "(b)",
          "q": "Terangkan ujian kimia ringkas untuk mengenal pasti gas yang terkumpul di anod dan nyatakan kesimpulan tentang komposisi molekul air.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Memasukkan kayu uji berbara ke dalam tabung uji di anod; kayu uji berbara menyala semula" },
            { "kind": "A", "marks": 1, "text": "Air terdiri daripada gabungan hidrogen dan oksigen dalam nisbah isi padu 2 : 1 (H₂O)" }
          ],
          "answer": "Ujian: Kayu uji berbara menyala semula apabila dimasukkan ke dalam gas di anod (oksigen). Kesimpulan: Molekul air terdiri daripada hidrogen dan oksigen dalam nisbah 2 : 1."
        }
      ]
    },
    {
      "id": "t2s-B06",
      "chapterId": "asid_alkali",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Dua jenis larutan tanpa label, Larutan X dan Larutan Y, diuji menggunakan kertas litmus merah dan kertas litmus biru lembap. Larutan X menukarkan kertas litmus biru menjadi merah dan tidak mengubah kertas litmus merah. Larutan Y menukarkan kertas litmus merah menjadi biru dan terasa licin apabila disentuh.",
      "parts": [
        {
          "label": "(a)",
          "q": "Kenal pasti sifat kimia Larutan X dan Larutan Y serta nyatakan julat nilai pH bagi setiap larutan.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Larutan X bersifat asid dengan nilai pH kurang daripada 7 (pH < 7)" },
            { "kind": "A", "marks": 1, "text": "Larutan Y bersifat alkali dengan nilai pH lebih daripada 7 (pH > 7)" }
          ],
          "answer": "Larutan X bersifat asid (pH kurang daripada 7), manakala Larutan Y bersifat alkali (pH lebih daripada 7)."
        },
        {
          "label": "(b)",
          "q": "Jika seorang murid disengat oleh lebah yang bisanya bersifat asid, nyatakan satu bahan harian yang sesuai disapu untuk melegakan kesakitan dan namakan tindak balas yang berlaku.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Bahan beralkali seperti larutan natrium bikarbonat / serbuk penaik / ubat gigi / losen kalamina" },
            { "kind": "A", "marks": 1, "text": "Tindak balas peneutralan" }
          ],
          "answer": "Sapu bahan beralkali lemah seperti larutan serbuk penaik (natrium bikarbonat) atau losen kalamina untuk melakukan tindak balas peneutralan."
        }
      ]
    },
    {
      "id": "t2s-B07",
      "chapterId": "elektrik_magnet",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Sebuah litar elektrik ringkas mengandungi sel kering 6 V yang disambungkan secara bersiri dengan dua perintang bernilai 4 Ω dan 8 Ω serta sebuah ammeter.",
      "parts": [
        {
          "label": "(a)",
          "q": "Hitung jumlah rintangan berkesan dalam litar itu, dan seterusnya hitung bacaan ammeter.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Jumlah rintangan bersiri, R = 4 Ω + 8 Ω = 12 Ω" },
            { "kind": "A", "marks": 1, "text": "Arus, I = V / R = 6 V / 12 Ω = 0.5 A" }
          ],
          "answer": "Jumlah rintangan berkesan = 12 Ω; bacaan ammeter = 0.5 A."
        },
        {
          "label": "(b)",
          "q": "Jika perintang 8 Ω digantikan dengan perintang 2 Ω, apakah yang berlaku kepada bacaan ammeter? Berikan sebab.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Bacaan ammeter meningkat (menjadi 6 / (4 + 2) = 1.0 A)" },
            { "kind": "M", "marks": 1, "text": "Kerana jumlah rintangan litar berkurang kepada 6 Ω, membenarkan arus yang lebih besar mengalir bagi voltan yang tetap" }
          ],
          "answer": "Bacaan ammeter meningkat kepada 1.0 A kerana rintangan keseluruhan litar berkurang (menjadi 6 Ω), menyebabkan arus mengalir bertambah."
        }
      ]
    },
    {
      "id": "t2s-B08",
      "chapterId": "daya_gerakan",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Seorang pekerja menggunakan sebatang tuas untuk mengangkat sebongkah batu seberat 600 N yang diletakkan pada jarak 0.4 m dari fulkrum. Daya usaha dikenakan pada hujung satu lagi pada jarak 1.6 m dari fulkrum, dengan fulkrum berada di antara beban dan daya usaha.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan kelas tuas tersebut dan berikan satu contoh alat lain yang tergolong dalam kelas tuas yang sama.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tuas kelas pertama" },
            { "kind": "A", "marks": 1, "text": "Contoh: gunting, playar, penukul kuku atau jongkang-jongket (mana-mana satu)" }
          ],
          "answer": "Tuas kelas pertama; contoh alat lain ialah gunting (atau playar / jongkang-jongket)."
        },
        {
          "label": "(b)",
          "q": "Hitung daya usaha minimum yang diperlukan untuk mengimbangi batu tersebut menggunakan prinsip momen daya.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Beban × jarak beban = Daya × jarak daya; 600 × 0.4 = Daya × 1.6 (iaitu 240 = 1.6 × Daya)" },
            { "kind": "A", "marks": 1, "text": "Daya = 240 / 1.6 = 150 N" }
          ],
          "answer": "Daya usaha = (600 × 0.4) / 1.6 = 150 N."
        }
      ]
    },
    {
      "id": "t2s-B09",
      "chapterId": "haba",
      "part": "B",
      "level": "rendah",
      "status": "verified",
      "stem": "Semasa berkhemah pada waktu malam yang sejuk, sekumpulan pengakap memanaskan air di dalam cerek logam di atas unggun api. Mereka turut duduk mengelilingi unggun api pada jarak selamat untuk memanaskan badan.",
      "parts": [
        {
          "label": "(a)",
          "q": "Kenal pasti cara pengaliran haba yang memindahkan haba dari dasar cerek ke seluruh air di dalam cerek, dan cara haba sampai ke tangan pengakap yang berada di sisi unggun api.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Di dalam air cerek: perolakan (air panas naik ke atas dan air sejuk turun ke bawah)" },
            { "kind": "A", "marks": 1, "text": "Ke sisi unggun api: sinaran (pemindahan haba tanpa memerlukan medium)" }
          ],
          "answer": "Haba dipindahkan ke seluruh air melalui perolakan, manakala haba sampai ke tangan pengakap di sisi unggun api secara sinaran."
        },
        {
          "label": "(b)",
          "q": "Mengapakah pemegang cerek logam lazimnya diperbuat daripada plastik atau kayu?",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Plastik dan kayu ialah penebat haba (pengkonduksi haba yang lemah)" },
            { "kind": "A", "marks": 1, "text": "Mengurangkan pengaliran haba secara konduksi ke tangan supaya pengguna tidak melecur ketika memegang cerek" }
          ],
          "answer": "Plastik dan kayu ialah penebat haba yang melambatkan pengaliran haba secara konduksi daripada badan cerek ke tangan agar tidak melecur."
        }
      ]
    },
    {
      "id": "t2s-B10",
      "chapterId": "gelombang_bunyi",
      "part": "B",
      "level": "sederhana",
      "status": "verified",
      "stem": "Sebuah kapal penyelidikan laut memancarkan gelombang ultrasonik secara menegak ke dasar laut untuk mengukur kedalaman lautan. Kedalaman dasar laut di lokasi tersebut ialah 2 250 m dan kelajuan bunyi di dalam air laut ialah 1 500 m s⁻¹.",
      "parts": [
        {
          "label": "(a)",
          "q": "Nyatakan satu sebab mengapa gelombang bunyi tidak dapat merambat di angkasa lepas yang vakum.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Bunyi ialah gelombang mekanikal yang memerlukan medium (pepejal, cecair atau gas) untuk merambat" },
            { "kind": "A", "marks": 1, "text": "Ruang vakum tidak mengandungi sebarang zarah jirim untuk memindahkan getaran bunyi" }
          ],
          "answer": "Bunyi memerlukan medium berzarah untuk merambat; ruang vakum tiada zarah jirim untuk memindahkan getaran bunyi."
        },
        {
          "label": "(b)",
          "q": "Hitung jumlah masa yang diambil untuk gema gelombang ultrasonik itu dikesan semula oleh kapal.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Menggunakan d = (v × t) / 2, maka t = (2 × d) / v = (2 × 2 250) / 1 500 = 4 500 / 1 500" },
            { "kind": "A", "marks": 1, "text": "t = 3.0 s (atau 3 saat)" }
          ],
          "answer": "t = (2 × 2 250) / 1 500 = 3.0 saat."
        }
      ]
    },

    /* ==================== BAHAGIAN C (12 items * 10 marks, 1 per chapterId) ==================== */
    {
      "id": "t2s-C01",
      "chapterId": "biodiversiti",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Seorang ahli botani mengkaji empat jenis tumbuhan di taman botani dan merekodkan ciri-cirinya:\n\n| Tumbuhan | Penghasilan bunga | Jenis urat daun | Jenis akar | Bilangan kotiledon |\n|---|---|---|---|---|\n| Tumbuhan P | Berbunga | Urat selari | Akar serabut | Satu kotiledon |\n| Tumbuhan Q | Berbunga | Urat jejala | Akar tunjang | Dua kotiledon |\n| Tumbuhan R | Tidak berbunga | Daun berbentuk jarum | Akar tunjang | Menghasilkan kon |\n| Tumbuhan S | Tidak berbunga | Daun pelepah (frond) | Akar serabut | Membiak melalui spora |",
      "parts": [
        {
          "label": "(a)",
          "q": "Kelaskan Tumbuhan P dan Tumbuhan Q kepada kumpulan tumbuhan berbunga yang tepat dan berikan satu contoh sebenar bagi setiap kumpulan.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tumbuhan P ialah monokotiledon manakala Tumbuhan Q ialah dikotiledon" },
            { "kind": "A", "marks": 1, "text": "Contoh monokotiledon (P): pokok jagung / padi / kelapa / rumput (mana-mana satu)" },
            { "kind": "A", "marks": 1, "text": "Contoh dikotiledon (Q): pokok bunga raya / durian / mangga / keembung (mana-mana satu)" }
          ],
          "answer": "Tumbuhan P ialah monokotiledon (contoh: pokok jagung atau padi), manakala Tumbuhan Q ialah dikotiledon (contoh: pokok bunga raya atau mangga)."
        },
        {
          "label": "(b)",
          "q": "Kenal pasti kumpulan tumbuhan tidak berbunga bagi Tumbuhan R dan Tumbuhan S.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tumbuhan R: Konifer (contoh: pokok pain)" },
            { "kind": "A", "marks": 1, "text": "Tumbuhan S: Paku-pakis" }
          ],
          "answer": "Tumbuhan R ialah konifer manakala Tumbuhan S ialah paku-pakis."
        },
        {
          "label": "(c)",
          "q": "Nyatakan perbezaan ciri batang antara Tumbuhan P dengan Tumbuhan Q, dan namakan satu lagi kumpulan tumbuhan tidak berbunga selain konifer dan paku-pakis.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tumbuhan P (monokotiledon) mempunyai batang tidak berkayu (lembut), manakala Tumbuhan Q (dikotiledon) lazimnya mempunyai batang berkayu" },
            { "kind": "A", "marks": 1, "text": "Kumpulan tumbuhan tidak berbunga lain: Lumut" }
          ],
          "answer": "Tumbuhan P berbatang tidak berkayu (lembut) manakala Tumbuhan Q lazimnya berbatang berkayu. Satu lagi kumpulan tumbuhan tidak berbunga ialah lumut."
        },
        {
          "label": "(d)",
          "q": "Aktiviti pembalakan haram mengancam spesies tumbuhan nadir di hutan hujan tropika. Cadangkan tiga langkah pemuliharaan biodiversiti (termasuk in-situ dan ex-situ) untuk melindungi spesies tersebut.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Pemuliharaan in-situ: mewartakan hutan simpan kekal, taman negara atau santuari hidupan liar" },
            { "kind": "A", "marks": 1, "text": "Pemuliharaan ex-situ: memelihara spesimen di taman botani, bank biji benih atau pusat penyelidikan di luar habitat asal" },
            { "kind": "A", "marks": 1, "text": "Penguatkuasaan undang-undang hutan serta penanaman semula hutan (penghutanan semula)" }
          ],
          "answer": "Langkahnya termasuk mewartakan taman negara dan hutan simpan (in-situ), menyimpan anak pokok atau biji benih di taman botani dan bank benih (ex-situ), serta menguatkuasakan undang-undang anti-pembalakan haram dan penghutanan semula."
        }
      ]
    },
    {
      "id": "t2s-C02",
      "chapterId": "ekosistem",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Sekumpulan penyelidik pertanian memantau populasi ulat bungkus dan tumbuhan kelapa sawit di dua ladang bersebelahan selama enam bulan:\n\n| Bulan | Ladang A (disembur racun serangga kimia) - Populasi ulat bungkus | Ladang B (dilepaskan burung hantu dan serangga pemangsa) - Populasi ulat bungkus |\n|---|---|---|\n| 1 | 500 ekor | 500 ekor |\n| 2 | 120 ekor | 380 ekor |\n| 4 | 420 ekor | 140 ekor |\n| 6 | 650 ekor | 75 ekor |",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan kaedah pengawalan perosak yang digunakan di Ladang B dan nyatakan jenis interaksi ekologi yang terlibat.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Kawalan biologi" },
            { "kind": "A", "marks": 1, "text": "Interaksi mangsa-pemangsa" }
          ],
          "answer": "Kaedah di Ladang B ialah kawalan biologi yang melibatkan interaksi mangsa-pemangsa."
        },
        {
          "label": "(b)",
          "q": "Mengapakah populasi ulat bungkus di Ladang A meningkat semula dengan mendadak pada bulan ke-4 dan ke-6 walaupun racun serangga telah digunakan?",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Sebahagian ulat bungkus membina kerintangan terhadap racun serangga kimia tersebut lalu terus membiak" },
            { "kind": "M", "marks": 1, "text": "Racun serangga turut membunuh pemangsa semula jadi ulat bungkus di Ladang A" },
            { "kind": "A", "marks": 1, "text": "Tanpa pemangsa semula jadi dan dengan adanya rintangan racun, populasi ulat bungkus membiak tanpa kawalan" }
          ],
          "answer": "Ulat bungkus yang terselamat membentuk kerintangan terhadap racun kimia dan pada masa yang sama racun membunuh pemangsa semula jadinya, membolehkan populasi ulat bungkus membiak pesat."
        },
        {
          "label": "(c)",
          "q": "Berikan dua kelebihan kaedah kawalan biologi di Ladang B berbanding penggunaan racun kimia, serta satu kelemahan kawalan biologi yang perlu dipantau.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Kelebihan 1: Tidak mencemarkan alam sekitar, tanah dan sumber air" },
            { "kind": "A", "marks": 1, "text": "Kelebihan 2: Lebih murah dalam jangka masa panjang dan tidak membunuh organisma bukan sasaran yang berfaedah" },
            { "kind": "A", "marks": 1, "text": "Kelemahan: Mengambil masa lebih lama untuk menunjukkan kesan atau berisiko mengganggu keseimbangan ekosistem jika pemangsa memakan spesies lain" }
          ],
          "answer": "Kelebihan: mesra alam tanpa pencemaran bahan kimia dan lebih menjimatkan dalam jangka panjang. Kelemahan: kesannya lebih perlahan dan berisiko menjejaskan spesies tempatan lain jika tidak dikawal."
        },
        {
          "label": "(d)",
          "q": "Bagaimanakah penebangan pokok di pinggir ladang tersebut secara besar-besaran boleh mengganggu kitar oksigen dan kitar karbon di atmosfera?",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Pengurangan tumbuhan hijau mengurangkan kadar fotosintesis yang menyerap karbon dioksida dan membebaskan oksigen" },
            { "kind": "A", "marks": 1, "text": "Kepekatan karbon dioksida meningkat manakala bekalan oksigen berkurang, menyebabkan kesan rumah hijau dan pemanasan global" }
          ],
          "answer": "Penebangan pokok mengurangkan fotosintesis, menyebabkan kurang karbon dioksida diserap dan kurang oksigen dibebaskan, seterusnya meningkatkan paras karbon dioksida atmosfera."
        }
      ]
    },
    {
      "id": "t2s-C03",
      "chapterId": "nutrisi",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Jadual berikut menunjukkan sajian makan tengah hari Aiman beserta nilai kalori bagi setiap 100 g makanan tersebut:\n\n| Makanan | Jisim diambil | Nilai kalori (kcal per 100 g) |\n|---|---|---|\n| Nasi putih | 200 g | 130 kcal |\n| Ayam panggang | 150 g | 180 kcal |\n| Sayur bayam tumis | 100 g | 45 kcal |\n| Air kosong | 250 g | 0 kcal |",
      "parts": [
        {
          "label": "(a)",
          "q": "Hitung jumlah nilai kalori bagi keseluruhan makan tengah hari Aiman. Tunjukkan langkah pengiraan anda.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Kalori nasi = (200 / 100) × 130 = 260 kcal; kalori bayam = 45 kcal" },
            { "kind": "M", "marks": 1, "text": "Kalori ayam = (150 / 100) × 180 = 270 kcal; jumlah = 260 + 270 + 45 + 0" },
            { "kind": "A", "marks": 1, "text": "Jumlah nilai kalori = 575 kcal" }
          ],
          "answer": "Nasi: 2 × 130 = 260 kcal; Ayam: 1.5 × 180 = 270 kcal; Bayam: 45 kcal; Air: 0 kcal. Jumlah = 260 + 270 + 45 = 575 kcal."
        },
        {
          "label": "(b)",
          "q": "Nyatakan kelas makanan utama bagi nasi putih dan ayam panggang, serta fungsi utama setiap satunya kepada badan.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Nasi putih: karbohidrat — membekalkan tenaga kepada badan" },
            { "kind": "A", "marks": 1, "text": "Ayam panggang: protein — untuk pertumbuhan dan membaiki tisu badan yang rosak" }
          ],
          "answer": "Nasi putih membekalkan karbohidrat sebagai sumber tenaga utama, manakala ayam panggang membekalkan protein untuk pertumbuhan dan pembaikan tisu."
        },
        {
          "label": "(c)",
          "q": "Huraikan proses pencernaan kimia bagi protein daripada ayam panggang bermula di perut sehingga hasil akhirnya diserap di usus kecil.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Di perut, enzim protease (pepsin) dalam jus gastrik mencernakan protein kepada polipeptida" },
            { "kind": "M", "marks": 1, "text": "Di duodenum dan usus kecil, enzim protease daripada jus pankreas dan jus usus mencernakan polipeptida kepada asid amino" },
            { "kind": "A", "marks": 1, "text": "Molekul asid amino yang ringkas dan larut diserap ke dalam kapilari darah melalui vilus usus kecil" }
          ],
          "answer": "Di perut, protease mencernakan protein kepada polipeptida. Di usus kecil, protease terus mencernakan polipeptida menjadi asid amino yang kemudiannya diserap oleh vilus ke dalam aliran darah."
        },
        {
          "label": "(d)",
          "q": "Aiman ialah atlet remaja berumur 14 tahun yang berlatih bola sepak setiap petang. Adakah keperluan kalori hariannya lebih tinggi atau lebih rendah berbanding seorang kerani pejabat dewasa yang tidak aktif? Jelaskan.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Lebih tinggi" },
            { "kind": "M", "marks": 1, "text": "Remaja sedang membesar dan mempunyai tahap aktiviti fizikal yang tinggi memerlukan lebih banyak tenaga untuk pertumbuhan dan pergerakan otot" }
          ],
          "answer": "Lebih tinggi kerana sebagai remaja aktif bersukan, Aiman memerlukan lebih banyak tenaga untuk pertumbuhan badan serta aktiviti fizikal yang berat."
        }
      ]
    },
    {
      "id": "t2s-C04",
      "chapterId": "kesihatan",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Dua orang pesakit, Faris dan Danial, menerima rawatan pencegahan terhadap jangkitan bakteria berbahaya di sebuah klinik. Faris diberikan suntikan vaksin yang mengandungi patogen lemah, dan kepekatan antibodi dalam darahnya meningkat perlahan selepas dos pertama lalu melonjak melebihi aras keimunan selepas dos penggalak serta kekal lama. Danial pula dipatuk haiwan berbisa lalu diberikan suntikan antiserum, menyebabkan kepekatan antibodi dalam darahnya melonjak serta-merta melebihi aras keimunan tetapi menurun dengan cepat dalam beberapa minggu.",
      "parts": [
        {
          "label": "(a)",
          "q": "Kenal pasti jenis keimunan yang diperoleh oleh Faris dan Danial.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Faris: Keimunan aktif buatan" },
            { "kind": "A", "marks": 1, "text": "Danial: Keimunan pasif buatan" }
          ],
          "answer": "Faris memperoleh keimunan aktif buatan, manakala Danial memperoleh keimunan pasif buatan."
        },
        {
          "label": "(b)",
          "q": "Mengapakah kepekatan antibodi dalam darah Danial meningkat serta-merta selepas suntikan tetapi tidak kekal lama, berbanding Faris yang memerlukan dos penggalak namun perlindungannya kekal lama?",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Suntikan antiserum kepada Danial mengandungi antibodi sedia ada, jadi perlindungannya serta-merta tanpa menunggu badan menghasilkannya" },
            { "kind": "M", "marks": 1, "text": "Antibodi luar itu akan terurai/disingkirkan dari badan Danial kerana sel darah putihnya tidak dirangsang menghasilkan antibodi sendiri" },
            { "kind": "A", "marks": 1, "text": "Vaksin pada Faris merangsang sel darah putih (limfosit) menghasilkan antibodi sendiri dan membentuk sel memori, manakala dos penggalak meningkatkan antibodi melepasi aras keimunan untuk jangka panjang" }
          ],
          "answer": "Danial menerima antibodi sedia ada daripada antiserum yang bertindak serta-merta tetapi cepat terurai. Faris menerima vaksin yang merangsang limfosit menghasilkan antibodi sendiri dan sel memori, dengan dos penggalak memastikan aras keimunan kekal lama."
        },
        {
          "label": "(c)",
          "q": "Terangkan bagaimana barisan pertahanan pertama dan barisan pertahanan kedua badan manusia berfungsi menghalang patogen sebelum antibodi bertindak.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Barisan pertahanan pertama: kulit bertindak sebagai penghalang fizikal (dan peluh/sebum/mukus di salur pernafasan/asid hidroklorik di perut membunuh atau memerangkap patogen)" },
            { "kind": "M", "marks": 1, "text": "Barisan pertahanan kedua: proses fagositosis oleh sel darah putih (fagosit)" },
            { "kind": "A", "marks": 1, "text": "Fagosit menelan dan mencernakan patogen yang berjaya menembusi kulit atau membran mukus" }
          ],
          "answer": "Barisan pertama terdiri daripada kulit dan membran mukus sebagai penghalang fizikal serta bahan kimia seperti asid perut. Barisan kedua melibatkan sel darah putih yang menjalankan fagositosis untuk menelan dan memusnahkan patogen."
        },
        {
          "label": "(d)",
          "q": "Berikan dua faktor gaya hidup yang boleh melemahkan sistem keimunan seseorang murid.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Kurang tidur atau rehat / tekanan emosi (stres) yang berpanjangan" },
            { "kind": "A", "marks": 1, "text": "Pemakanan tidak seimbang / pendedahan kepada asap rokok atau pencemaran udara (mana-mana dua yang tepat)" }
          ],
          "answer": "Kurang tidur dan rehat yang mencukupi, tekanan perasaan berpanjangan, pemakanan tidak seimbang atau pendedahan kepada asap rokok."
        }
      ]
    },
    {
      "id": "t2s-C05",
      "chapterId": "air_larutan",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Seorang murid menyiasat masa yang diambil untuk 50 ml air tersejat sepenuhnya di bawah tiga keadaan berbeza menggunakan piring penyejat yang sama saiz kecuali keadaan C:\n\n| Keadaan | Suhu persekitaran (°C) | Kelajuan kipas | Luas permukaan air (cm²) | Masa untuk kering sepenuhnya (minit) |\n|---|---|---|---|---|\n| A | 30 | Kipas dimatikan | 40 | 120 |\n| B | 30 | Kipas berkelajuan tinggi | 40 | 55 |\n| C | 40 | Kipas berkelajuan tinggi | 80 | 18 |",
      "parts": [
        {
          "label": "(a)",
          "q": "Berdasarkan perbandingan antara Keadaan A dengan Keadaan B, apakah faktor yang dikaji dan mengapakah masa penyejatan berkurang dengan ketara dalam Keadaan B?",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Faktor yang dikaji: pergerakan udara" },
            { "kind": "M", "marks": 1, "text": "Udara yang bergerak (angin kipas) meniup dan membawa wap air di atas permukaan air pergi dengan cepat" },
            { "kind": "A", "marks": 1, "text": "Kelembapan udara di permukaan air kekal rendah, maka lebih banyak molekul air dapat tersejat dengan lebih cepat" }
          ],
          "answer": "Faktor yang dikaji ialah pergerakan udara. Angin daripada kipas membawa wap air di atas permukaan air pergi dengan pantas, membolehkan penyejatan berlaku lebih cepat."
        },
        {
          "label": "(b)",
          "q": "Mengapakah Keadaan C mencatat masa penyejatan paling singkat (18 minit)? Jelaskan dua faktor yang bertindak serentak dalam Keadaan C berbanding Keadaan B.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Suhu lebih tinggi (40 °C berbanding 30 °C) memberi molekul air lebih tenaga kinetik untuk terlepas ke udara" },
            { "kind": "A", "marks": 1, "text": "Luas permukaan terdedah lebih besar (80 cm² berbanding 40 cm²) membolehkan lebih banyak molekul air terlepas serentak" }
          ],
          "answer": "Suhu lebih tinggi membekalkan tenaga kinetik lebih besar kepada molekul air, manakala luas permukaan terdedah yang lebih besar membolehkan lebih banyak molekul air tersejat serentak."
        },
        {
          "label": "(c)",
          "q": "Dalam aktiviti lain, murid melarutkan garam biasa dalam air suling pada suhu bilik sehingga sedikit garam mendak dan tidak lagi larut walaupun dikacau. Namakan jenis larutan yang terhasil dan cadangkan dua cara untuk melarutkan baki garam yang mendak itu.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Larutan tepu" },
            { "kind": "A", "marks": 1, "text": "Cara 1: Memanaskan larutan (meningkatkan suhu air)" },
            { "kind": "A", "marks": 1, "text": "Cara 2: Menambahkan lebih banyak pelarut (air suling)" }
          ],
          "answer": "Larutan tepu. Baki garam boleh dilarutkan dengan memanaskan larutan tersebut atau menambah lebih banyak air suling."
        },
        {
          "label": "(d)",
          "q": "Nyatakan satu kaedah pembersihan air yang mampu menyingkirkan kedua-dua bahan terampai dan garam mineral terlarut untuk menghasilkan air tulen, serta namakan satu kaedah untuk membunuh mikroorganisma dalam bekalan air minuman awam.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Penyulingan (menghasilkan air suling yang bebas bahan terampai, mineral terlarut dan mikroorganisma)" },
            { "kind": "A", "marks": 1, "text": "Pengklorinan (atau pendidihan / penyinaran ultraungu)" }
          ],
          "answer": "Penyulingan menghasilkan air tulen tanpa bahan terampai dan mineral terlarut; pengklorinan digunakan untuk membunuh mikroorganisma dalam bekalan air awam."
        }
      ]
    },
    {
      "id": "t2s-C06",
      "chapterId": "asid_alkali",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Seorang murid menjalankan eksperimen pentitratan dengan menitis asid hidroklorik cair dari buret sedikit demi sedikit ke dalam kelalang kon yang mengandungi 25 cm³ larutan natrium hidroksida dan tiga titik penunjuk fenolftalein. Pada permulaan, campuran berwarna merah jambu. Selepas 20 cm³ asid hidroklorik ditambah, warna larutan bertukar menjadi tidak berwarna tepat pada takat akhir.",
      "parts": [
        {
          "label": "(a)",
          "q": "Namakan tindak balas kimia yang berlaku antara asid hidroklorik dengan natrium hidroksida, dan tulis persamaan perkataan bagi tindak balas ini.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tindak balas peneutralan" },
            { "kind": "M", "marks": 1, "text": "Menyatakan bahan tindak balas: Asid hidroklorik + Natrium hidroksida" },
            { "kind": "A", "marks": 1, "text": "Hasil lengkap: Asid hidroklorik + Natrium hidroksida → Natrium klorida + Air" }
          ],
          "answer": "Peneutralan. Persamaan perkataan: Asid hidroklorik + Natrium hidroksida → Natrium klorida + Air."
        },
        {
          "label": "(b)",
          "q": "Apakah nilai pH larutan di dalam kelalang kon tepat pada takat akhir apabila warna merah jambu bertukar menjadi tidak berwarna? Terangkan mengapa warna itu berubah.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "pH = 7 (larutan menjadi neutral)" },
            { "kind": "M", "marks": 1, "text": "Semua alkali (natrium hidroksida) telah dineutralkan sepenuhnya oleh asid, dan fenolftalein tidak berwarna dalam larutan neutral atau berasid" }
          ],
          "answer": "Nilai pH ialah 7 kerana semua natrium hidroksida telah dineutralkan sepenuhnya oleh asid; penunjuk fenolftalein menjadi tidak berwarna dalam keadaan neutral."
        },
        {
          "label": "(c)",
          "q": "Jadual ujian kertas pH menunjukkan: Air limau (pH 2), Air suling (pH 7), Ubat gigi (pH 8), Pencuci longkang (pH 13). Susun bahan tersebut mengikut kekuatan sifat kealkalian atau keasidan dengan mengenal pasti asid kuat, alkali lemah dan alkali kuat.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Asid kuat: Air limau (pH 2)" },
            { "kind": "A", "marks": 1, "text": "Alkali lemah: Ubat gigi (pH 8)" },
            { "kind": "A", "marks": 1, "text": "Alkali kuat: Pencuci longkang (pH 13)" }
          ],
          "answer": "Air limau ialah asid kuat (pH 2), ubat gigi ialah alkali lemah (pH 8), dan pencuci longkang ialah alkali kuat (pH 13)."
        },
        {
          "label": "(d)",
          "q": "Seorang petani mendapati tanah kebun sayurnya terlalu berasid (pH 4.5) dan menyebabkan tanaman tidak subur. Cadangkan bahan yang perlu ditabur pada tanah itu dan jelaskan kesannya.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Menabur kapur mati (kalsium hidroksida) atau batu kapur hancur (kalsium karbonat)" },
            { "kind": "M", "marks": 1, "text": "Bahan beralkali tersebut meneutralkan keasidan tanah dan menaikkan pH tanah ke julat sesuai sekitar pH 6.5–7" }
          ],
          "answer": "Petani perlu menabur kapur mati atau serbuk batu kapur yang bersifat alkali untuk meneutralkan asid berlebihan dalam tanah."
        }
      ]
    },
    {
      "id": "t2s-C07",
      "chapterId": "elektrik_magnet",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Dalam satu eksperimen elektrik, dua perintang P (4 Ω) dan Q (12 Ω) disambungkan secara selari kepada satu bekalan kuasa 12 V yang dilengkapi ammeter utama. Dalam eksperimen kedua, dawai kuprum berpenebat dililitkan pada sebatang teras besi lembut dan disambungkan kepada sel kering serta reostat untuk menarik klip kertas besi.",
      "parts": [
        {
          "label": "(a)",
          "q": "Bagi litar selari pertama, hitung rintangan berkesan gabungan perintang P dan Q, dan seterusnya hitung bacaan ammeter utama.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3" },
            { "kind": "A", "marks": 1, "text": "Rintangan berkesan, R = 3 Ω" },
            { "kind": "A", "marks": 1, "text": "Arus utama, I = V / R = 12 V / 3 Ω = 4 A" }
          ],
          "answer": "Rintangan berkesan = 3 Ω; bacaan ammeter utama = 4 A."
        },
        {
          "label": "(b)",
          "q": "Jika perintang P dan Q tersebut disambungkan pula secara bersiri kepada bekalan 12 V yang sama, hitung arus baharu yang mengalir dalam litar.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "R_siri = 4 Ω + 12 Ω = 16 Ω" },
            { "kind": "A", "marks": 1, "text": "I_baharu = 12 V / 16 Ω = 0.75 A" }
          ],
          "answer": "Rintangan siri = 16 Ω; arus baharu = 0.75 A."
        },
        {
          "label": "(c)",
          "q": "Nyatakan dua kelebihan menyambungkan lampu dan peralatan elektrik di rumah secara litar selari berbanding litar bersiri.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Setiap lampu boleh dihidupkan dan dimatikan secara berasingan menggunakan suis masing-masing (dan menerima voltan penuh yang sama)" },
            { "kind": "A", "marks": 1, "text": "Jika satu lampu terbakar atau rosak, lampu lain di laluan cabang berbeza masih boleh menyala" }
          ],
          "answer": "Setiap peralatan boleh dikawal secara berasingan dengan voltan penuh yang sama, dan kerosakan pada satu cabang tidak memadamkan peralatan pada cabang lain."
        },
        {
          "label": "(d)",
          "q": "Bagi elektromagnet dalam eksperimen kedua, nyatakan dua cara untuk meningkatkan bilangan klip kertas yang dapat ditarik, dan terangkan mengapa teras besi lembut dipilih berbanding teras keluli untuk elektromagnet sementara.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Menambahkan bilangan lilitan gegelung dawai pada teras besi lembut" },
            { "kind": "A", "marks": 1, "text": "Meningkatkan arus elektrik yang mengalir (mengurangkan rintangan reostat atau menambah bilangan sel kering)" },
            { "kind": "M", "marks": 1, "text": "Besi lembut mudah dimagnetkan apabila arus mengalir dan cepat kehilangan kemagnetan sebaik sahaja suis dibuka" }
          ],
          "answer": "Kekuatan elektromagnet ditingkatkan dengan menambah bilangan lilitan dawai dan meningkatkan arus elektrik. Teras besi lembut dipilih kerana ia mudah dimagnetkan serta cepat hilang kemagnetannya apabila arus dimatikan."
        }
      ]
    },
    {
      "id": "t2s-C08",
      "chapterId": "daya_gerakan",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Sebuah bongkah kayu padu berbentuk kuboid berjisim 6 kg (berat = 60 N, dengan g = 10 N kg⁻¹) berukuran panjang 0.5 m, lebar 0.3 m dan tinggi 0.2 m. Bongkah itu diletakkan di atas pasir lembut mengikut dua kedudukan: Orientasi X menggunakan tapak 0.5 m × 0.3 m, manakala Orientasi Y menggunakan tapak 0.3 m × 0.2 m.",
      "parts": [
        {
          "label": "(a)",
          "q": "Hitung tekanan yang dikenakan oleh bongkah kayu ke atas pasir dalam Orientasi X dan Orientasi Y.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Luas X = 0.5 × 0.3 = 0.15 m²; Luas Y = 0.3 × 0.2 = 0.06 m²" },
            { "kind": "A", "marks": 1, "text": "Tekanan X = 60 / 0.15 = 400 Pa (atau N m⁻²)" },
            { "kind": "A", "marks": 1, "text": "Tekanan Y = 60 / 0.06 = 1 000 Pa (atau N m⁻²)" }
          ],
          "answer": "Tekanan Orientasi X = 400 Pa; Tekanan Orientasi Y = 1 000 Pa."
        },
        {
          "label": "(b)",
          "q": "Orientasi manakah yang menyebabkan bongkah terbenam lebih dalam ke dalam pasir? Terangkan sebabnya.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Orientasi Y" },
            { "kind": "M", "marks": 1, "text": "Kerana luas permukaan sentuhan lebih kecil, menghasilkan tekanan lebih tinggi bagi berat daya yang sama" }
          ],
          "answer": "Orientasi Y kerana luas permukaan sentuhannya lebih kecil, lalu menghasilkan tekanan lebih tinggi ke atas pasir."
        },
        {
          "label": "(c)",
          "q": "Apabila bongkah kayu itu diletakkan ke dalam tangki air berketumpatan 1 000 kg m⁻³, adakah ia akan terapung atau tenggelam? Buktikan dengan pengiraan ketumpatan.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Isi padu = 0.5 × 0.3 × 0.2 = 0.03 m³; Ketumpatan = 6 kg / 0.03 m³ = 200 kg m⁻³" },
            { "kind": "A", "marks": 1, "text": "Terapung kerana ketumpatan bongkah kayu (200 kg m⁻³) lebih rendah daripada ketumpatan air (1 000 kg m⁻³)" }
          ],
          "answer": "Ketumpatan bongkah = 6 / 0.03 = 200 kg m⁻³. Bongkah akan terapung kerana ketumpatannya lebih kecil daripada ketumpatan air (1 000 kg m⁻³)."
        },
        {
          "label": "(d)",
          "q": "Mengapakah tayar traktor ladang dibuat sangat lebar, dan bagaimanakah penyedut minuman berfungsi menaikkan air ke mulut apabila disedut?",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Tayar lebar meningkatkan luas permukaan sentuhan untuk mengurangkan tekanan supaya traktor tidak mudah terbenam dalam tanah lembut" },
            { "kind": "M", "marks": 1, "text": "Apabila udara disedut dari penyedut minuman, tekanan udara di dalam penyedut menjadi lebih rendah daripada tekanan atmosfera" },
            { "kind": "A", "marks": 1, "text": "Tekanan atmosfera di luar yang lebih tinggi menekan permukaan air dalam gelas lalu menolak air naik melalui penyedut" }
          ],
          "answer": "Tayar lebar mengurangkan tekanan ke atas tanah supaya traktor tidak terbenam. Bagi penyedut minuman, menyedut udara menurunkan tekanan di dalamnya lalu tekanan atmosfera luar yang lebih tinggi menolak air naik ke atas."
        }
      ]
    },
    {
      "id": "t2s-C09",
      "chapterId": "haba",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Dua kelalang kon yang sama saiz dan bahan diisi dengan 200 ml air sejuk bersuhu awal 25 °C. Kelalang J dicat hitam kusam di permukaan luarnya, manakala Kelalang K dicat putih berkilat. Kedua-dua kelalang diletakkan pada jarak yang sama iaitu 20 cm dari satu lampu pemanas inframerah selama 15 minit:\n\n| Kelalang | Permukaan luar | Suhu awal (°C) | Suhu selepas 15 minit (°C) |\n|---|---|---|---|\n| J | Hitam kusam | 25 | 43 |\n| K | Putih berkilat | 25 | 31 |",
      "parts": [
        {
          "label": "(a)",
          "q": "Hitung kenaikan suhu air dalam kedua-dua kelalang dan nyatakan pemboleh ubah yang dimanipulasikan dalam penyiasatan ini.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Kenaikan suhu Kelalang J = 43 − 25 = 18 °C; Kelalang K = 31 − 25 = 6 °C" },
            { "kind": "A", "marks": 1, "text": "Pemboleh ubah dimanipulasikan: warna dan keadaan permukaan luar kelalang (hitam kusam dan putih berkilat)" }
          ],
          "answer": "Kenaikan suhu Kelalang J ialah 18 °C dan Kelalang K ialah 6 °C. Pemboleh ubah dimanipulasikan ialah jenis/warna permukaan luar kelalang."
        },
        {
          "label": "(b)",
          "q": "Apakah kesimpulan eksperimen ini tentang sifat penyerapan haba sinaran bagi permukaan hitam kusam berbanding permukaan putih berkilat? Bagaimana pula jika kedua-dua kelalang diisi air panas 80 °C dan dibiarkan menyejuk?",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Permukaan hitam kusam ialah penyerap haba sinaran yang lebih baik berbanding permukaan putih berkilat (yang banyak memantulkan haba)" },
            { "kind": "M", "marks": 1, "text": "Jika diisi air panas 80 °C, Kelalang J (hitam kusam) akan menyejuk lebih cepat" },
            { "kind": "A", "marks": 1, "text": "Kerana permukaan hitam kusam juga merupakan pembebas (pemancar) haba sinaran yang lebih baik daripada permukaan putih berkilat" }
          ],
          "answer": "Permukaan hitam kusam menyerap haba lebih baik berbanding putih berkilat. Apabila diisi air panas, Kelalang J juga membebaskan haba lebih cepat kerana permukaan hitam kusam ialah pembebas haba yang lebih baik."
        },
        {
          "label": "(c)",
          "q": "Berdasarkan konsep haba ini, terangkan dua ciri reka bentuk bangunan konsep hijau yang sesuai di negara beriklim panas seperti Malaysia.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Mengecat dinding luar dan bumbung dengan warna cerah/putih atau berkilat untuk memantulkan haba matahari" },
            { "kind": "A", "marks": 1, "text": "Memasang tingkap kaca berganda berpenebat atau bumbung bertebat serta pengudaraan silang (perolakan) untuk mengurangkan kemasukan haba" }
          ],
          "answer": "Mengecat bangunan dengan warna cerah untuk memantulkan haba sinaran matahari, dan menggunakan kaca berganda atau bahan penebat haba serta tingkap pengudaraan untuk aliran perolakan."
        },
        {
          "label": "(d)",
          "q": "Sebuah seterika elektrik automatik menggunakan jalur dwilogam yang terdiri daripada lapisan kuprum dan besi yang dilekatkan bersama. Terangkan bagaimana jalur dwilogam memutuskan litar pemanas apabila seterika menjadi terlalu panas, diberi kuprum mengembang lebih banyak daripada besi apabila dipanaskan.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Apabila dipanaskan, kuprum mengembang lebih banyak daripada besi" },
            { "kind": "M", "marks": 1, "text": "Perbezaan kadar pengembangan ini menyebabkan jalur dwilogam membengkok ke arah sisi besi" },
            { "kind": "A", "marks": 1, "text": "Pembengkokan tersebut membuka sesentuh suis lalu memutuskan litar elektrik seterika (dan menyambung semula apabila sejuk)" }
          ],
          "answer": "Apabila panas, kuprum mengembang lebih banyak daripada besi sehingga jalur dwilogam membengkok ke arah besi, membuka sesentuh dan memutuskan arus elektrik."
        }
      ]
    },
    {
      "id": "t2s-C10",
      "chapterId": "gelombang_bunyi",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Dalam suatu kajian fizik, kelajuan bunyi diukur dalam tiga medium berbeza pada suhu bilik:\n\n| Medium | Keadaan jirim | Kelajuan bunyi (m s⁻¹) |\n|---|---|---|\n| P (Oksigen) | Gas | 330 |\n| Q (Air tulen) | Cecair | 1 500 |\n| R (Keluli) | Pepejal | 5 100 |",
      "parts": [
        {
          "label": "(a)",
          "q": "Terangkan mengapa kelajuan bunyi paling tinggi dalam Medium R (keluli) berbanding Medium P (oksigen).",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Zarah-zarah dalam pepejal (keluli) tersusun sangat rapat dan padat berbanding zarah gas yang berjauhan" },
            { "kind": "A", "marks": 1, "text": "Getaran tenaga bunyi dapat dipindahkan daripada satu zarah ke zarah bersebelahan dengan lebih cepat dan cekap dalam pepejal" }
          ],
          "answer": "Zarah dalam keluli tersusun sangat rapat, membolehkan getaran bunyi dipindahkan dari satu zarah ke zarah lain jauh lebih cepat berbanding gas oksigen."
        },
        {
          "label": "(b)",
          "q": "Seorang pendaki berdiri menghadap sebuah tebing batu yang tinggi di kawasan pergunungan di mana kelajuan bunyi di udara ialah 340 m s⁻¹. Dia menjerit dan mendengar gema suaranya selepas 2.5 saat. Hitung jarak antara pendaki dengan tebing batu tersebut.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Menggunakan rumus jarak pantulan bunyi: d = (v × t) / 2" },
            { "kind": "M", "marks": 1, "text": "d = (340 × 2.5) / 2 = 850 / 2" },
            { "kind": "A", "marks": 1, "text": "d = 425 m" }
          ],
          "answer": "d = (340 × 2.5) / 2 = 425 m."
        },
        {
          "label": "(c)",
          "q": "Sebuah ambulans membunyikan siren berfrekuensi tetap semasa bergerak laju mendekati seorang pemerhati di tepi jalan, kemudian melepasi dan menjauhinya. Namakan fenomena ini dan terangkan perubahan kelangsingan bunyi siren yang didengari pemerhati pada kedua-dua keadaan tersebut.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Kesan Doppler" },
            { "kind": "M", "marks": 1, "text": "Apabila ambulans menghampiri pemerhati, muka gelombang bunyi termampat dan frekuensi bertambah, maka bunyi kedengaran lebih langsing (kelangsingan tinggi)" },
            { "kind": "A", "marks": 1, "text": "Apabila ambulans menjauhi pemerhati, gelombang bunyi meregang dan frekuensi berkurang, maka bunyi kedengaran kurang langsing (kelangsingan rendah)" }
          ],
          "answer": "Fenomena ini ialah Kesan Doppler. Ketika ambulans menghampiri, frekuensi yang diterima bertambah dan bunyi kedengaran lebih langsing; apabila menjauhi, frekuensi berkurang dan kelangsingan menjadi lebih rendah."
        },
        {
          "label": "(d)",
          "q": "Nyatakan julat frekuensi pendengaran manusia normal dan cadangkan satu bahan yang sesuai dipasang pada dinding pawagam untuk mengurangkan gema berlebihan.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Julat pendengaran manusia normal: 20 Hz hingga 20 000 Hz" },
            { "kind": "A", "marks": 1, "text": "Bahan lembut atau berliang seperti panel busa akustik, permaidani tebal atau langsir tebal untuk menyerap bunyi" }
          ],
          "answer": "Julat pendengaran manusia ialah 20 Hz hingga 20 000 Hz. Dinding pawagam sesuai dilapisi bahan lembut dan berliang seperti panel busa akustik atau permaidani tebal untuk menyerap gema."
        }
      ]
    },
    {
      "id": "t2s-C11",
      "chapterId": "bintang_galaksi",
      "part": "C",
      "level": "sederhana",
      "status": "verified",
      "stem": "Seorang ahli astronomi memerhati tiga bintang berbeza melalui teleskop angkasa dan merekodkan warna serta anggaran suhunya: Bintang Rigel (berwarna putih kebiruan, suhu sangat tinggi ~12 000 K), Matahari (berwarna kuning, suhu ~5 800 K), dan Bintang Betelgeuse (berwarna merah, suhu ~3 500 K).",
      "parts": [
        {
          "label": "(a)",
          "q": "Berdasarkan data pemerhatian tersebut, nyatakan hubungan antara warna bintang dengan suhu permukaannya, serta susun ketiga-tiga bintang itu daripada paling panas kepada paling sejuk.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Bintang berwarna biru/putih kebiruan mempunyai suhu paling tinggi manakala bintang berwarna merah mempunyai suhu paling rendah" },
            { "kind": "A", "marks": 1, "text": "Susunan paling panas ke paling sejuk: Rigel → Matahari → Betelgeuse" }
          ],
          "answer": "Bintang biru atau putih kebiruan paling panas manakala bintang merah paling sejuk. Susunan paling panas ke paling sejuk ialah Rigel, diikuti Matahari, dan kemudian Betelgeuse."
        },
        {
          "label": "(b)",
          "q": "Terangkan bagaimana sesebuah bintang seperti Matahari terbentuk di dalam nebula.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Nebula ialah awan besar yang terdiri daripada debu dan gas (terutamanya hidrogen dan helium)" },
            { "kind": "M", "marks": 1, "text": "Daya tarikan graviti yang kuat menarik gas dan debu ke pusat sehingga menjadi sangat padat dan terasnya menjadi amat panas" },
            { "kind": "A", "marks": 1, "text": "Apabila suhu dan tekanan teras cukup tinggi, tindak balas pelakuran nuklear hidrogen kepada helium bermula lalu membentuk bintang yang bersinar" }
          ],
          "answer": "Gas hidrogen dan debu dalam nebula ditarik oleh daya graviti yang kuat ke pusat sehingga menjadi padat dan amat panas, memulakan pelakuran nuklear yang melahirkan bintang."
        },
        {
          "label": "(c)",
          "q": "Bandingkan peringkat akhir kitar hidup bintang bersaiz sederhana (seperti Matahari) dengan bintang super raksasa yang sangat besar (lebih 10 kali jisim Matahari) selepas fasa raksasa merah atau super raksasa merah.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Bintang bersaiz sederhana (Matahari) menjadi kerdil putih (setelah membentuk nebula planet)" },
            { "kind": "M", "marks": 1, "text": "Bintang super masif mengalami letupan supernova" },
            { "kind": "A", "marks": 1, "text": "Selepas supernova, bintang super masif membentuk bintang neutron atau lohong hitam" }
          ],
          "answer": "Bintang bersaiz sederhana seperti Matahari berakhir sebagai kerdil putih, manakala bintang sangat besar meletup sebagai supernova lalu menjadi bintang neutron atau lohong hitam."
        },
        {
          "label": "(d)",
          "q": "Namakan galaksi yang menempatkan Sistem Suria kita dan nyatakan bentuk galaksi tersebut.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Galaksi Bima Sakti" },
            { "kind": "A", "marks": 1, "text": "Berbentuk pilin (spiral)" }
          ],
          "answer": "Sistem Suria terletak dalam galaksi Bima Sakti yang berbentuk pilin."
        }
      ]
    },
    {
      "id": "t2s-C12",
      "chapterId": "sistem_suria",
      "part": "C",
      "level": "tinggi",
      "status": "verified",
      "stem": "Jadual berikut memaparkan maklumat bagi beberapa planet dalam Sistem Suria (1 AU = 1.5 × 10⁸ km):\n\n| Planet | Jarak purata dari Matahari (AU) | Tempoh orbit (tahun Bumi) | Suhu permukaan purata (°C) |\n|---|---|---|---|\n| Utarid | 0.39 | 0.24 | 167 |\n| Zuhrah | 0.72 | 0.62 | 464 |\n| Bumi | 1.00 | 1.00 | 15 |\n| Musytari | 5.20 | 11.86 | -110 |\n| Neptun | 30.05 | 164.80 | -200 |",
      "parts": [
        {
          "label": "(a)",
          "q": "Hitung jarak purata planet Musytari dari Matahari dalam kilometer, dan nyatakan satu sebab mengapa ahli astronomi menggunakan unit AU dalam Sistem Suria berbanding kilometer.",
          "marks": 3,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Jarak Musytari = 5.20 × (1.5 × 10⁸ km)" },
            { "kind": "A", "marks": 1, "text": "= 7.8 × 10⁸ km (atau 780 000 000 km)" },
            { "kind": "A", "marks": 1, "text": "Unit AU mengelakkan penggunaan angka terlalu besar dan memudahkan perbandingan jarak relatif planet dengan jarak Bumi ke Matahari" }
          ],
          "answer": "Jarak Musytari = 5.20 × 1.5 × 10⁸ = 7.8 × 10⁸ km (780 000 000 km). Unit AU memudahkan pengendalian nombor jarak angkasa yang sangat besar."
        },
        {
          "label": "(b)",
          "q": "Nyatakan hubungan antara jarak planet dari Matahari dengan tempoh orbitnya, serta terangkan mengapa suhu permukaan Zuhrah (464 °C) jauh lebih panas daripada Utarid (167 °C) walaupun Zuhrah lebih jauh dari Matahari.",
          "marks": 2,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Semakin jauh jarak planet dari Matahari, semakin panjang tempoh orbitnya mengelilingi Matahari" },
            { "kind": "M", "marks": 1, "text": "Zuhrah mempunyai atmosfera sangat tebal yang kaya dengan gas karbon dioksida, memerangkap haba dengan kuat melalui kesan rumah hijau melampau" }
          ],
          "answer": "Semakin jauh planet dari Matahari, semakin panjang tempoh orbitnya. Zuhrah lebih panas daripada Utarid kerana atmosferanya yang tebal dan kaya karbon dioksida memerangkap haba melalui kesan rumah hijau yang kuat."
        },
        {
          "label": "(c)",
          "q": "Bezakan antara meteoroid, meteor dan meteorit apabila jasad batuan kecil angkasa memasuki ruang atmosfera Bumi.",
          "marks": 3,
          "steps": [
            { "kind": "A", "marks": 1, "text": "Meteoroid ialah serpihan batu dan logam kecil yang terapung dan bergerak di angkasa lepas" },
            { "kind": "A", "marks": 1, "text": "Meteor ialah meteoroid yang memasuki atmosfera Bumi dan terbakar akibat geseran udara menghasilkan jalur cahaya" },
            { "kind": "A", "marks": 1, "text": "Meteorit ialah sisa meteor yang tidak habis terbakar dan berjaya jatuh ke permukaan Bumi" }
          ],
          "answer": "Meteoroid berada di angkasa lepas; apabila memasuki atmosfera Bumi dan terbakar menghasilkan cahaya ia dipanggil meteor; jika sisanya jatuh ke permukaan Bumi ia dipanggil meteorit."
        },
        {
          "label": "(d)",
          "q": "Terangkan mengapa arah ekor komet sentiasa menghala menjauhi Matahari semasa komet bergerak mengelilingi Matahari dalam orbit elips.",
          "marks": 2,
          "steps": [
            { "kind": "M", "marks": 1, "text": "Apabila komet menghampiri Matahari, haba Matahari mengewapkan ais pada nukleus komet lalu membebaskan gas dan debu" },
            { "kind": "A", "marks": 1, "text": "Tiupan angin suria daripada Matahari menolak gas dan debu tersebut supaya sentiasa mengarah menjauhi Matahari" }
          ],
          "answer": "Haba Matahari mengewapkan ais komet menjadi gas dan debu, lalu tiupan angin suria menolak ekor gas dan debu itu supaya sentiasa menjauhi Matahari."
        }
      ]
    }
  ];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});
