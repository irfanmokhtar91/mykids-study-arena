/**
 * Structured subjective questions: Darjah 6 UASA Sains (KSSR Semakan 2017, Bahagian B 2x4m + Bahagian C 4x8m).
 * Format follows official KPM UASA specifications. Verified 27/Nov/2026: Gate 1 (scripts/verify-structured-d6.mjs) + Gate 2 blind solve (gemini-4-argon, 0 flags, 100% agreement).
 */
(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.d6_sains = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
  {
    "id": "d6s-B01",
    "chapterId": "manusia",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Sistem saraf manusia terbahagi kepada sistem saraf pusat dan sistem saraf periferi. Apabila jari Amir tercucuk jarum secara tiba-tiba, dia terus menarik tangannya dengan pantas sebelum sempat berfikir.",
    "parts": [
      {
        "label": "(a)",
        "q": "Namakan dua organ utama yang membentuk sistem saraf pusat manusia.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan otak"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan saraf tunjang"
          }
        ],
        "answer": "Otak dan saraf tunjang."
      },
      {
        "label": "(b)",
        "q": "Apakah jenis tindakan yang ditunjukkan oleh Amir apabila dia menarik tangannya dengan pantas, dan bahagian manakah dalam sistem saraf pusat yang mengawal tindakan tersebut?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengenal pasti tindakan refleks"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan saraf tunjang sebagai pengawal tindakan refleks"
          }
        ],
        "answer": "Tindakan refleks, yang dikawal oleh saraf tunjang."
      }
    ]
  },
  {
    "id": "d6s-B02",
    "chapterId": "interaksi",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Dalam ekosistem, hidupan saling berinteraksi melalui pelbagai jenis simbiosis. Pasangan A melibatkan burung gembala yang memakan kutu pada badan kerbau. Pasangan B melibatkan pokok orkid yang tumbuh melekat pada batang pokok besar untuk mendapatkan cahaya matahari tanpa menyerap nutrien daripada pokok tersebut.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan jenis simbiosis bagi Pasangan A dan terangkan kesannya kepada kedua-dua haiwan tersebut.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan mutualisme"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Menerangkan burung gembala mendapat makanan manakala kerbau bebas daripada parasit/kutu"
          }
        ],
        "answer": "Mutualisme; kedua-dua pihak mendapat manfaat iaitu burung gembala memperoleh makanan dan kerbau terlepas daripada gangguan kutu."
      },
      {
        "label": "(b)",
        "q": "Nyatakan jenis simbiosis bagi Pasangan B dan berikan sebab mengapa pokok besar tidak mengalami kerugian.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan komensalisme"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Menerangkan pokok orkid hanya menumpang untuk sokongan dan cahaya tanpa mengambil air atau nutrien daripada pokok besar"
          }
        ],
        "answer": "Komensalisme; pokok orkid hanya menumpang pada batang pokok besar untuk mendapat cahaya matahari dan tidak menyerap air atau nutrien daripada perumahnya."
      }
    ]
  },
  {
    "id": "d6s-B03",
    "chapterId": "pemeliharaan",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Burung Dodo dan harimau bertaring lengkung merupakan contoh haiwan yang telah pupus, manakala tapir Malaya dan orang utan pula tergolong dalam haiwan yang diancam kepupusan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah perbezaan antara haiwan yang telah pupus dengan haiwan yang diancam kepupusan?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan haiwan pupus sudah tiada lagi di muka bumi"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan haiwan terancam masih wujud tetapi populasinya semakin berkurang dan berisiko pupus"
          }
        ],
        "answer": "Haiwan pupus ialah haiwan yang telah lenyap dan tidak lagi wujud di muka bumi, manakala haiwan diancam kepupusan masih wujud tetapi bilangannya semakin sedikit."
      },
      {
        "label": "(b)",
        "q": "Cadangkan satu langkah pemeliharaan dan satu langkah pemuliharaan yang boleh diambil untuk menyelamatkan orang utan.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan satu langkah pemeliharaan yang tepat (contoh: mewartakan hutan simpan / menguatkuasakan undang-undang pemburuan haram)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan satu langkah pemuliharaan yang tepat (contoh: menubuhkan pusat rehabilitasi orang utan / menanam semula pokok di habitat terjejas)"
          }
        ],
        "answer": "Pemeliharaan: Mewartakan kawasan hutan simpan atau menguatkuasakan undang-undang anti-pemburuan haram. Pemuliharaan: Menempatkan orang utan di pusat rehabilitasi atau menanam semula pokok hutan."
      }
    ]
  },
  {
    "id": "d6s-B04",
    "chapterId": "pengawetan",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Puan Salma ingin memastikan ikan kembung dan buah mangga muda yang dibelinya tahan lebih lama. Dia menyapu garam yang banyak lalu menjemur ikan kembung di bawah cahaya matahari terik, manakala hirisan buah mangga muda direndam di dalam larutan cuka dan gula.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan dua kaedah pengawetan makanan yang digabungkan oleh Puan Salma untuk mengawet ikan kembung tersebut.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan pemasinan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan pengeringan"
          }
        ],
        "answer": "Pemasinan dan pengeringan."
      },
      {
        "label": "(b)",
        "q": "Namakan kaedah pengawetan bagi buah mangga muda dan terangkan bagaimana cuka dapat menghalang pertumbuhan mikroorganisma.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan penjerukan"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Menerangkan cuka mewujudkan keadaan berasid yang tidak sesuai untuk pertumbuhan mikroorganisma"
          }
        ],
        "answer": "Penjerukan; cuka mewujudkan keadaan berasid yang tidak sesuai sehingga membantutkan pertumbuhan mikroorganisma."
      }
    ]
  },
  {
    "id": "d6s-B05",
    "chapterId": "bahan_buangan",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Keluarga Hakim mengasingkan sisa buangan rumah kepada empat jenis iaitu surat khabar lama, botol kaca sos, tin minuman aluminium dan kulit buah-buahan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Kelaskan empat bahan buangan tersebut kepada bahan terbiodegradasi dan bahan tidak terbiodegradasi.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Terbiodegradasi: surat khabar lama dan kulit buah-buahan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tidak terbiodegradasi: botol kaca sos dan tin minuman aluminium"
          }
        ],
        "answer": "Terbiodegradasi: surat khabar lama dan kulit buah-buahan. Tidak terbiodegradasi: botol kaca sos dan tin minuman aluminium."
      },
      {
        "label": "(b)",
        "q": "Nyatakan warna tong kitar semula yang betul bagi botol kaca sos dan tin minuman aluminium.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Botol kaca sos: tong berwarna coklat"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tin minuman aluminium: tong berwarna jingga"
          }
        ],
        "answer": "Botol kaca sos dimasukkan ke dalam tong berwarna coklat, manakala tin minuman aluminium dimasukkan ke dalam tong berwarna jingga."
      }
    ]
  },
  {
    "id": "d6s-B06",
    "chapterId": "galaksi",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Sistem Suria kita berada di dalam sebuah galaksi yang dikenali sebagai Galaksi Bima Sakti.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan bentuk Galaksi Bima Sakti dan di bahagian manakah terletaknya Sistem Suria di dalam galaksi tersebut?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan bentuk pilin berpalang (berpilin)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan Sistem Suria terletak di pinggir salah satu lengan berpilinnya"
          }
        ],
        "answer": "Galaksi Bima Sakti berbentuk pilin berpalang, dan Sistem Suria terletak di pinggir salah satu lengan berpilinnya."
      },
      {
        "label": "(b)",
        "q": "Bandingkan saiz Sistem Suria dengan saiz Galaksi Bima Sakti menggunakan satu analogi yang sesuai, dan namakan satu galaksi berpilin lain yang paling hampir dengan kita.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan saiz Sistem Suria sangat kecil berbanding Bima Sakti (contoh analogi: jika Sistem Suria sebesar diameter pensel, Bima Sakti meliputi seluruh padang sekolah)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan Galaksi Andromeda"
          }
        ],
        "answer": "Sistem Suria amat kecil berbanding Galaksi Bima Sakti (ibarat diameter sebatang pensel berbanding keluasan sebuah padang sekolah); galaksi berpilin terdekat ialah Galaksi Andromeda."
      }
    ]
  },
  {
    "id": "d6s-B07",
    "chapterId": "teknologi",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Perkembangan teknologi membantu manusia mengatasi had keupayaan deria dan anggota badan dalam pelbagai bidang seperti perubatan dan pertanian.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan alat teknologi yang digunakan untuk mengatasi had keupayaan berikut:\n(i) Mendengar bunyi degupan jantung yang perlahan.\n(ii) Memerhatikan objek yang sangat seni seperti bakteria.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "(i) Stetoskop"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "(ii) Mikroskop"
          }
        ],
        "answer": "(i) Stetoskop. (ii) Mikroskop."
      },
      {
        "label": "(b)",
        "q": "Penggunaan dron dalam bidang pertanian semakin meluas. Berikan satu kebaikan dan satu keburukan penggunaan teknologi dron tersebut.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Kebaikan: menyembur racun atau baja dengan lebih cepat, sekata dan menjimatkan tenaga kerja"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Keburukan: bateri dron yang rosak menghasilkan sisa elektronik (e-waste) atau kos pembelian dan penyelenggaraan yang tinggi"
          }
        ],
        "answer": "Kebaikan: Menyembur baja atau racun perosak secara pantas dan sekata. Keburukan: Menghasilkan sisa elektronik (e-waste) daripada bateri terpakai serta memerlukan kos yang tinggi."
      }
    ]
  },
  {
    "id": "d6s-B08",
    "chapterId": "kelajuan",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Sebuah kereta api elektrik bergerak sejauh 240 km dari Stesen P ke Stesen Q dalam masa 2 jam. Selepas itu, kereta api tersebut meneruskan perjalanan sejauh 180 km dari Stesen Q ke Stesen R dengan kelajuan 90 km/j.",
    "parts": [
      {
        "label": "(a)",
        "q": "Hitung kelajuan kereta api itu semasa bergerak dari Stesen P ke Stesen Q.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menggunakan rumus Kelajuan = Jarak ÷ Masa = 240 km ÷ 2 jam"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "120 km/j"
          }
        ],
        "answer": "120 km/j"
      },
      {
        "label": "(b)",
        "q": "Hitung masa yang diambil oleh kereta api itu untuk bergerak dari Stesen Q ke Stesen R.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menggunakan rumus Masa = Jarak ÷ Kelajuan = 180 km ÷ 90 km/j"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "2 jam"
          }
        ],
        "answer": "2 jam"
      }
    ]
  },
  {
    "id": "d6s-C01",
    "chapterId": "kemahiran_saintifik",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Sekumpulan murid Tahun 6 menjalankan satu penyiasatan untuk mengkaji kadar penyejukan air panas di dalam tiga buah bikar yang diperbuat daripada bahan berbeza iaitu kaca, plastik dan keluli. Setiap bikar diisi dengan 200 ml air panas bersuhu awal 80°C dan diletakkan di atas meja makmal yang sama. Suhu air dicatat selepas 15 minit seperti jadual di bawah:\n\n| Jenis bahan bikar | Suhu awal (°C) | Suhu selepas 15 minit (°C) |\n|---|---|---|\n| Keluli | 80 | 45 |\n| Kaca | 80 | 56 |\n| Plastik | 80 | 64 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan tujuan penyiasatan ini.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menghubungkan jenis bahan bikar (pemboleh ubah dimanipulasikan)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Dengan suhu air selepas 15 minit / kadar penyejukan air (pemboleh ubah bergerak balas)"
          }
        ],
        "answer": "Untuk menyiasat hubungan antara jenis bahan bikar dengan suhu air selepas 15 minit (kadar penyejukan air)."
      },
      {
        "label": "(b)",
        "q": "Kenal pasti pemboleh ubah bergerak balas dan satu pemboleh ubah dimalarkan dalam penyiasatan ini.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah bergerak balas: suhu air selepas 15 minit"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimalarkan: isi padu air panas (200 ml) / suhu awal air (80°C) / masa pemanasan atau penyejukan (15 minit)"
          }
        ],
        "answer": "Pemboleh ubah bergerak balas: suhu air selepas 15 minit. Pemboleh ubah dimalarkan: isi padu air panas (200 ml) atau suhu awal air (80°C)."
      },
      {
        "label": "(c)",
        "q": "Nyatakan satu inferens berdasarkan perbezaan suhu akhir air di dalam bikar keluli berbanding bikar plastik.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan keluli merupakan konduktor haba yang lebih baik berbanding plastik"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyebabkan haba daripada air panas hilang ke persekitaran dengan lebih cepat melalui bikar keluli"
          }
        ],
        "answer": "Keluli ialah konduktor haba yang lebih baik berbanding plastik (penebat haba), maka haba dari air panas hilang lebih cepat ke persekitaran melalui bikar keluli."
      },
      {
        "label": "(d)",
        "q": "Nyatakan definisi secara operasi bagi penebat haba yang lebih baik dalam penyiasatan ini, dan ramalkan suhu air jika bikar polistirena digunakan.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Definisi secara operasi: bahan yang mengekalkan suhu air lebih tinggi selepas 15 minit apabila 200 ml air 80°C diletakkan di dalamnya"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Ramalan yang munasabah: melebihi 64°C (contoh: 68°C hingga 74°C)"
          }
        ],
        "answer": "Penebat haba yang lebih baik ialah bahan bikar yang menyebabkan suhu air selepas 15 minit kekal paling tinggi. Ramalan suhu bagi bikar polistirena ialah melebihi 64°C (contohnya sekitar 70°C)."
      }
    ]
  },
  {
    "id": "d6s-C02",
    "chapterId": "mikroorganisma",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Farah menjalankan eksperimen untuk mengkaji kesan suhu air terhadap aktiviti yis. Dia memasukkan 1 sudu yis dan 1 sudu gula ke dalam tiga botol berlabel X, Y dan Z yang mengandungi 100 ml air pada suhu berbeza, lalu memasangkan belon pada mulut setiap botol. Selepas 20 minit, lilitan belon diukur seperti jadual berikut:\n\n| Botol | Suhu air (°C) | Lilitan belon selepas 20 minit (cm) |\n|---|---|---|\n| X | 10 | 8 |\n| Y | 37 | 22 |\n| Z | 95 | 0 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan dua pemerhatian yang dapat dibuat berdasarkan keputusan jadual di atas.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Lilitan belon pada botol Y (37°C) adalah paling besar (22 cm)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Belon pada botol Z (95°C) tidak mengembang langsung (0 cm)"
          }
        ],
        "answer": "Lilitan belon pada botol Y (suhu 37°C) adalah paling besar iaitu 22 cm, manakala belon pada botol Z (suhu 95°C) tidak mengembang langsung (0 cm)."
      },
      {
        "label": "(b)",
        "q": "Berikan inferens bagi pemerhatian pada botol Y dan botol Z.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Botol Y: suhu 37°C adalah suhu suam yang sesuai untuk yis bernafas dan membebaskan gas karbon dioksida dengan aktif"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Botol Z: suhu 95°C terlalu panas lalu membunuh yis sehingga tiada gas dibebaskan"
          }
        ],
        "answer": "Dalam botol Y, suhu 37°C sesuai untuk yis bernafas secara aktif dan membebaskan banyak gas karbon dioksida. Dalam botol Z, suhu 95°C yang terlalu tinggi telah membunuh yis."
      },
      {
        "label": "(c)",
        "q": "Apakah jenis mikroorganisma bagi yis, dan apakah proses hidup yang dibuktikan melalui pengembangan belon tersebut?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Jenis mikroorganisma: fungi"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Proses hidup: bernafas"
          }
        ],
        "answer": "Yis ialah fungi, dan pengembangan belon membuktikan mikroorganisma bernafas."
      },
      {
        "label": "(d)",
        "q": "Dalam satu eksperimen lain, Farah tidak memasukkan gula tetapi mencampurkan yis ke dalam tepung gandum dan air suam untuk membuat doh roti. Didapati doh masih mengembang sedikit. Terangkan mengapa.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Tepung gandum mengandungi karbohidrat/kanji yang membekalkan nutrien kepada yis"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Yis masih dapat bertumbuh dan bernafas membebaskan gas yang mengembangkan doh"
          }
        ],
        "answer": "Tepung gandum membekalkan nutrien kepada yis, membolehkan yis terus bernafas dan menghasilkan gas yang mengembangkan doh."
      }
    ]
  },
  {
    "id": "d6s-C03",
    "chapterId": "interaksi",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Sekumpulan murid menyiasat pertumbuhan anak benih kacang hijau di dalam dua pasu bersaiz sama yang mengandungi jenis tanah dan jumlah air siraman yang sama, diletakkan di halaman sekolah yang mendapat cahaya matahari. Pasu P ditanam dengan 3 anak benih, manakala Pasu Q ditanam dengan 25 anak benih. Selepas 10 hari, keputusan dicatat seperti berikut:\n\n| Pasu | Bilangan anak benih | Purata ketinggian batang (cm) | Saiz daun dan keadaan batang |\n|---|---|---|---|\n| P | 3 | 12 | Daun lebar, batang tegap |\n| Q | 25 | 21 | Daun kecil, batang kurus dan lemah |",
    "parts": [
      {
        "label": "(a)",
        "q": "Berdasarkan penyiasatan pertumbuhan anak benih kacang hijau itu, nyatakan pemboleh ubah dimanipulasikan dan satu pemboleh ubah dimalarkan.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimanipulasikan: bilangan anak benih di dalam pasu"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimalarkan: saiz pasu / jenis tanah / kuantiti air siraman / tempoh masa (10 hari)"
          }
        ],
        "answer": "Pemboleh ubah dimanipulasikan: bilangan anak benih di dalam pasu. Pemboleh ubah dimalarkan: saiz pasu, jenis tanah atau kuantiti air siraman."
      },
      {
        "label": "(b)",
        "q": "Mengapakah anak benih di dalam Pasu Q tumbuh lebih tinggi tetapi mempunyai batang yang kurus dan daun yang kecil?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Anak benih di dalam Pasu Q mengalami persaingan intraspesies yang sengit"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Untuk mendapatkan keperluan asas iaitu cahaya matahari, air, nutrien dan ruang yang terhad (tumbuh tinggi untuk merebut cahaya)"
          }
        ],
        "answer": "Anak benih di dalam Pasu Q bersaing sesama sendiri secara hebat untuk mendapatkan cahaya matahari, air, nutrien dan ruang; batangnya memanjang tinggi untuk merebut cahaya matahari tetapi kekal kurus dan berdaun kecil kerana kekurangan nutrien dan air."
      },
      {
        "label": "(c)",
        "q": "Nyatakan hubungan (hipotesis) antara bilangan anak benih di dalam pasu dengan tahap persaingan serta kesuburan anak benih.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Semakin bertambah bilangan anak benih di dalam pasu, semakin meningkat persaingan antara tumbuhan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Semakin berkurang kesuburan / saiz daun anak benih"
          }
        ],
        "answer": "Semakin bertambah bilangan anak benih di dalam pasu, semakin tinggi tahap persaingan dan semakin kurang subur pertumbuhan anak benih."
      },
      {
        "label": "(d)",
        "q": "Bagaimanakah seorang petani boleh mengaplikasikan dapatan penyiasatan ini untuk memastikan pokok jagung di ladangnya tumbuh subur dan menghasilkan buah yang besar?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menanam anak benih dengan jarak yang sesuai (tidak terlalu rapat)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Supaya setiap pokok mendapat cahaya matahari, air, nutrien dan ruang yang mencukupi tanpa persaingan yang tinggi"
          }
        ],
        "answer": "Petani perlu menanam anak benih jagung pada jarak yang sesuai dan tidak terlalu rapat supaya persaingan untuk air, nutrien, ruang dan cahaya matahari dapat dikurangkan."
      }
    ]
  },
  {
    "id": "d6s-C04",
    "chapterId": "daya",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Hafiz menjalankan satu penyiasatan untuk mengkaji kesan jenis permukaan terhadap jarak gerakan sebuah kereta mainan yang berjisim 200 g. Kereta mainan itu ditolak dengan daya yang sama di atas tiga permukaan mendatar yang berbeza. Jarak yang dilalui oleh kereta mainan sebelum berhenti dicatat seperti berikut:\n\n| Jenis permukaan | Jarak pergerakan kereta mainan (cm) |\n|---|---|\n| Kertas pasir | 35 |\n| Papan lapis | 90 |\n| Kepingan kaca | 145 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan pemboleh ubah dimanipulasikan dan pemboleh ubah bergerak balas dalam penyiasatan ini.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimanipulasikan: jenis permukaan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah bergerak balas: jarak pergerakan kereta mainan sebelum berhenti"
          }
        ],
        "answer": "Pemboleh ubah dimanipulasikan: jenis permukaan. Pemboleh ubah bergerak balas: jarak pergerakan kereta mainan sebelum berhenti."
      },
      {
        "label": "(b)",
        "q": "Mengapakah jarak pergerakan kereta mainan di atas kepingan kaca paling jauh berbanding di atas kertas pasir?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Kepingan kaca mempunyai permukaan yang paling licin"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menghasilkan daya geseran yang paling kecil berbanding kertas pasir yang kasar"
          }
        ],
        "answer": "Permukaan kepingan kaca paling licin sehingga menghasilkan daya geseran yang paling kecil, berbanding permukaan kertas pasir yang kasar dan menghasilkan daya geseran yang besar."
      },
      {
        "label": "(c)",
        "q": "Jika Hafiz meletakkan pemberat tambahan seberat 300 g di atas kereta mainan itu dan menolaknya di atas papan lapis dengan daya yang sama, ramalkan apa yang berlaku kepada jarak pergerakannya dan nyatakan sebabnya.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Ramalan: jarak pergerakan menjadi kurang daripada 90 cm"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Sebab: pertambahan jisim objek meningkatkan daya geseran antara tayar dan permukaan"
          }
        ],
        "answer": "Jarak pergerakan menjadi kurang daripada 90 cm kerana pertambahan jisim objek meningkatkan daya geseran."
      },
      {
        "label": "(d)",
        "q": "Berikan satu cara untuk mengurangkan daya geseran pada papan karom dan satu cara untuk menambahkan daya geseran pada pemegang raket badminton.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengurangkan geseran pada papan karom: menaburkan serbuk bedak"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menambahkan geseran pada pemegang raket: membalut pemegang dengan pita grip bergetah/bercorak"
          }
        ],
        "answer": "Menaburkan bedak di atas papan karom untuk mengurangkan geseran; membalut pemegang raket dengan pita grip bergetah untuk menambahkan geseran."
      }
    ]
  },
  {
    "id": "d6s-C05",
    "chapterId": "daya",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Dalam satu aktiviti kelas, Cikgu Lina menyediakan dua tin susu pekat bertutup penuh, iaitu Tin A dan Tin B. Beliau menebuk satu lubang kecil pada penutup Tin A, manakala dua lubang kecil ditebuk pada bahagian bertentangan penutup Tin B. Apabila kedua-dua tin dicondongkan, susu pekat keluar dengan lancar dari Tin B tetapi menitis sangat perlahan dan tersekat-sekat dari Tin A.",
    "parts": [
      {
        "label": "(a)",
        "q": "Mengapakah susu pekat keluar dengan lebih lancar dari Tin B berbanding Tin A?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Lubang kedua pada Tin B membenarkan udara dari luar masuk ke dalam tin"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyamakan/meningkatkan tekanan udara di dalam tin bagi menolak susu pekat keluar dengan lancar"
          }
        ],
        "answer": "Lubang kedua pada Tin B membolehkan udara masuk ke dalam tin supaya tekanan udara di dalam dan di luar tin seimbang serta menolak susu keluar dengan lancar."
      },
      {
        "label": "(b)",
        "q": "Terangkan bagaimana tekanan udara membolehkan seseorang menyedut minuman menggunakan penyedut minuman.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Apabila udara disedut keluar, tekanan udara di dalam penyedut minuman menjadi lebih rendah daripada tekanan udara di luar"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tekanan udara di luar yang lebih tinggi menolak permukaan minuman naik ke dalam penyedut minuman"
          }
        ],
        "answer": "Menyedut udara mengurangkan tekanan di dalam penyedut minuman, lalu tekanan udara di luar yang lebih tinggi menolak minuman naik ke dalam penyedut."
      },
      {
        "label": "(c)",
        "q": "Seorang pendaki menutup rapat sebotol air plastik kosong di puncak Gunung Kinabalu, lalu membawanya turun ke kaki gunung. Ramalkan keadaan botol itu di kaki gunung dan terangkan sebabnya.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Ramalan: botol plastik tersebut menjadi kemik"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Sebab: tekanan udara di kaki gunung lebih tinggi daripada tekanan udara rendah yang terperangkap di dalam botol dari puncak gunung"
          }
        ],
        "answer": "Botol plastik akan menjadi kemik kerana tekanan udara di kaki gunung lebih tinggi berbanding tekanan udara rendah di dalam botol yang ditutup di puncak gunung."
      },
      {
        "label": "(d)",
        "q": "Nyatakan hubungan antara ketinggian (altitud) sesuatu tempat dengan tekanan udara, serta punca kewujudan tekanan udara.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Semakin tinggi altitud, semakin rendah tekanan udara"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tekanan udara terhasil akibat perlanggaran zarah-zarah udara pada sesuatu permukaan"
          }
        ],
        "answer": "Semakin bertambah ketinggian (altitud), semakin berkurang tekanan udara. Tekanan udara wujud akibat perlanggaran zarah-zarah udara pada permukaan objek."
      }
    ]
  },
  {
    "id": "d6s-C06",
    "chapterId": "kelajuan",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Daniel menyiasat kelajuan sebuah kereta mainan yang dilepaskan dari puncak landasan condong sepanjang 180 cm pada tiga ketinggian yang berbeza. Masa yang diambil oleh kereta mainan untuk sampai ke hujung landasan dicatat seperti jadual di bawah:\n\n| Ketinggian landasan (cm) | Panjang landasan (cm) | Masa diambil (s) |\n|---|---|---|\n| 10 | 180 | 6 |\n| 20 | 180 | 4 |\n| 30 | 180 | 3 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Berdasarkan penyiasatan kereta mainan di atas landasan condong itu, nyatakan pemboleh ubah dimanipulasikan dan satu pemboleh ubah dimalarkan.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimanipulasikan: ketinggian landasan condong"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimalarkan: panjang landasan (180 cm) / jenis kereta mainan / jisim kereta mainan"
          }
        ],
        "answer": "Pemboleh ubah dimanipulasikan: ketinggian landasan condong. Pemboleh ubah dimalarkan: panjang landasan (180 cm) atau jenis kereta mainan."
      },
      {
        "label": "(b)",
        "q": "Nyatakan pola perubahan masa yang diambil apabila ketinggian landasan bertambah, dan nyatakan hubungan antara ketinggian landasan dengan kelajuan kereta mainan.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pola masa: berkurang"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Hubungan: semakin tinggi landasan condong, semakin laju pergerakan kereta mainan"
          }
        ],
        "answer": "Masa yang diambil berkurang. Semakin tinggi landasan condong, semakin bertambah kelajuan kereta mainan."
      },
      {
        "label": "(c)",
        "q": "Hitung kelajuan kereta mainan apabila ketinggian landasan ialah 20 cm (dalam unit cm/s).",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Kelajuan = Jarak ÷ Masa = 180 cm ÷ 4 s"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "45 cm/s"
          }
        ],
        "answer": "45 cm/s"
      },
      {
        "label": "(d)",
        "q": "Berdasarkan pengiraan bagi ketinggian 30 cm, kereta mainan bergerak pada kelajuan 60 cm/s. Hitung jarak yang akan dilalui oleh kereta mainan itu jika ia terus bergerak pada kelajuan tetap tersebut selama 5 saat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Jarak = Kelajuan × Masa = 60 cm/s × 5 s"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "300 cm"
          }
        ],
        "answer": "300 cm (atau 3 m)"
      }
    ]
  },
  {
    "id": "d6s-C07",
    "chapterId": "pengawetan",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Siti menjalankan satu penyiasatan dengan meletakkan empat ketul daging ayam mentah yang sama saiz ke dalam empat bekas berbeza selama 5 hari. Keadaan daging ayam selepas 5 hari dicatat seperti jadual berikut:\n\n| Bekas | Kaedah penyimpanan | Keadaan daging ayam selepas 5 hari |\n|---|---|---|\n| K | Dibiar terdedah pada suhu bilik (30°C) | Berbau busuk, berlendir dan bertukar warna |\n| L | Disimpan di dalam peti sejuk bahagian dingin (4°C) | Berbau sedikit masam dan mula lembik |\n| M | Disimpan di dalam peti sejuk bahagian sejuk beku (-18°C) | Segar, keras dan tiada bau busuk |\n| N | Disadur lilin nipis pada suhu bilik (30°C) | Rosak dan berbau busuk |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan dua ciri kerosakan daging ayam yang diperhatikan pada bekas K.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Berbau busuk"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Berlendir atau bertukar warna"
          }
        ],
        "answer": "Berbau busuk, berlendir dan bertukar warna."
      },
      {
        "label": "(b)",
        "q": "Terangkan perbezaan keadaan daging ayam antara bekas L (4°C) dan bekas M (-18°C).",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Pendinginan pada 4°C hanya memperlahankan pertumbuhan mikroorganisma"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Penyejukbekuan pada -18°C menghentikan pertumbuhan mikroorganisma sepenuhnya menyebabkan daging kekal segar"
          }
        ],
        "answer": "Pendinginan pada 4°C (bekas L) hanya memperlahankan pertumbuhan mikroorganisma, manakala penyejukbekuan pada -18°C (bekas M) menghentikan pertumbuhan mikroorganisma."
      },
      {
        "label": "(c)",
        "q": "Mengapakah kaedah pelilinan pada bekas N tidak berkesan untuk mengawet daging ayam mentah berbanding buah-buahan seperti epal?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Daging ayam mengandungi kelembapan tinggi dan bakteria sedia ada di dalamnya"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pelilinan hanya sesuai melambatkan kehilangan air pada kulit buah/sayur dan tidak menghentikan aktiviti mikroorganisma pada daging"
          }
        ],
        "answer": "Pelilinan hanya sesuai untuk buah-buahan dan sayur-sayuran bagi melambatkan kehilangan air, sedangkan daging ayam mempunyai kandungan air dan bakteria yang masih aktif membiak pada suhu bilik."
      },
      {
        "label": "(d)",
        "q": "Nyatakan dua kepentingan teknologi pengawetan makanan kepada manusia.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengelakkan pembaziran makanan / memastikan bekalan makanan berterusan di luar musim"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Memudahkan penyimpanan, pengangkutan dan pengeksportan makanan ke tempat jauh"
          }
        ],
        "answer": "Mengelakkan pembaziran makanan dan memastikan bekalan makanan tersedia sepanjang masa serta mudah dieksport atau disimpan."
      }
    ]
  },
  {
    "id": "d6s-C08",
    "chapterId": "bahan_buangan",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Sekumpulan aktivis alam sekitar memantau keadaan sebatang sungai yang berdekatan dengan sebuah pasar basah. Sisa makanan seperti isi perut ikan dan sayur-sayuran busuk sering dibuang terus ke dalam sungai tersebut. Jadual di bawah menunjukkan bacaan kandungan oksigen terlarut dan bilangan ikan yang hidup di tiga lokasi berbeza:\n\n| Lokasi sungai | Jarak dari pasar basah (m) | Kandungan oksigen terlarut (mg/L) | Bilangan ikan hidup ditemui |\n|---|---|---|---|\n| Hulu (sebelum pasar) | 0 | 8.5 | 42 |\n| Berhampiran pasar | 50 | 2.1 | 4 |\n| Hilir sungai | 500 | 5.4 | 19 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan pemboleh ubah dimanipulasikan dan pemboleh ubah bergerak balas berdasarkan jadual penyiasatan di atas.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah dimanipulasikan: lokasi sungai / jarak dari pasar basah"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah bergerak balas: kandungan oksigen terlarut / bilangan ikan hidup ditemui"
          }
        ],
        "answer": "Pemboleh ubah dimanipulasikan: lokasi sungai (jarak dari pasar basah). Pemboleh ubah bergerak balas: kandungan oksigen terlarut dan bilangan ikan hidup."
      },
      {
        "label": "(b)",
        "q": "Sisa makanan ialah bahan terbiodegradasi. Mengapakah pembuangan sisa makanan ke dalam sungai masih menyebabkan kandungan oksigen terlarut menjunam dan ikan mati?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Mikroorganisma pengurai membiak dengan pesat untuk menguraikan sisa makanan tersebut"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Proses penguraian menggunakan banyak oksigen terlarut dalam air sehingga ikan kekurangan oksigen dan mati"
          }
        ],
        "answer": "Penguraian sisa makanan oleh mikroorganisma secara besar-besaran menggunakan banyak oksigen terlarut dalam air sungai, menyebabkan hidupan akuatik kekurangan oksigen."
      },
      {
        "label": "(c)",
        "q": "Cadangkan satu cara pengurusan sisa makanan yang terancang bagi peniaga pasar basah supaya sisa tersebut tidak dibuang ke sungai.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengumpul sisa makanan (sayur-sayuran/kulit buah) untuk dijadikan baja kompos"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Atau menghantar sisa ke pusat pengumpulan sisa organik berjadual supaya tidak mencemarkan sungai"
          }
        ],
        "answer": "Mengumpulkan sisa sayur-sayuran dan buah-buahan untuk diproses menjadi baja kompos atau mengasingkannya ke dalam tong sisa organik berjadual."
      },
      {
        "label": "(d)",
        "q": "Dalam amalan 5R, bezakan antara amalan 'Refuse' (Tolak) dengan 'Reduce' (Kurangkan) apabila membeli-belah di pasar.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Refuse (Tolak): menolak terus penggunaan beg plastik atau barangan sekali guna yang tidak diperlukan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Reduce (Kurangkan): mengurangkan jumlah pembelian atau penggunaan bahan yang menghasilkan sisa buangan"
          }
        ],
        "answer": "Refuse bermaksud menolak terus barangan sekali guna seperti beg plastik, manakala Reduce bermaksud mengurangkan kuantiti penggunaan bahan yang menghasilkan sisa."
      }
    ]
  },
  {
    "id": "d6s-C09",
    "chapterId": "gerhana_buruj",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Dalam satu simulasi makmal sains, seorang guru menyusun lampu suluh (mewakili Matahari), sebiji glob kecil (mewakili Bumi) dan sebiji bola pingpong (mewakili Bulan) di atas satu garis lurus di dalam bilik gelap.\n- Susunan X: Lampu suluh -> Bola pingpong -> Glob.\n- Susunan Y: Lampu suluh -> Glob -> Bola pingpong.",
    "parts": [
      {
        "label": "(a)",
        "q": "Kenal pasti fenomena gerhana yang diwakili oleh Susunan X dan Susunan Y, serta nyatakan fasa Bulan ketika setiap gerhana itu berlaku.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Susunan X: Gerhana Matahari (berlaku semasa fasa Bulan baharu)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Susunan Y: Gerhana Bulan (berlaku semasa fasa Bulan purnama)"
          }
        ],
        "answer": "Susunan X ialah Gerhana Matahari (fasa Bulan baharu) dan Susunan Y ialah Gerhana Bulan (fasa Bulan purnama)."
      },
      {
        "label": "(b)",
        "q": "Berdasarkan sifat cahaya, terangkan bagaimana bayang-bayang umbra dan penumbra terbentuk semasa Susunan X.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Cahaya bergerak lurus dan tidak dapat menembusi objek legap (Bulan)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Membentuk kawasan bayang-bayang gelap penuh (umbra) dan kawasan bayang-bayang separa gelap (penumbra) di permukaan Bumi"
          }
        ],
        "answer": "Cahaya Matahari bergerak lurus dan dihalang oleh Bulan yang legap, lalu membentuk zon bayang-bayang gelap sepenuhnya (umbra) dan separa gelap (penumbra) di atas Bumi."
      },
      {
        "label": "(c)",
        "q": "Mengapakah fenomena gerhana tidak berlaku pada setiap bulan walaupun fasa Bulan baharu dan Bulan purnama berlaku setiap bulan?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Orbit Bulan mengelilingi Bumi condong kira-kira 5 darjah berbanding satah orbit Bumi mengelilingi Matahari"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyebabkan Matahari, Bumi dan Bulan tidak sentiasa berada pada satu garis lurus yang tepat setiap bulan"
          }
        ],
        "answer": "Orbit Bulan condong kira-kira 5° berbanding orbit Bumi mengelilingi Matahari, maka Matahari, Bumi dan Bulan jarang berada pada satu garis lurus yang tepat setiap bulan."
      },
      {
        "label": "(d)",
        "q": "Nyatakan satu cara yang selamat untuk memerhatikan gerhana Matahari dan satu kesan gerhana Bulan penuh terhadap paras air laut di Bumi.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Cara selamat: menggunakan cermin mata penuras suria khas atau kamera lubang jarum (bukan mata kasar)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kesan gerhana Bulan: menyebabkan paras air laut pasang menjadi lebih tinggi daripada biasa"
          }
        ],
        "answer": "Gunakan penuras suria khas atau kamera lubang jarum untuk memerhatikan gerhana Matahari; gerhana Bulan pula menyebabkan paras air laut pasang menjadi lebih tinggi daripada biasa."
      }
    ]
  },
  {
    "id": "d6s-C10",
    "chapterId": "kestabilan_kekuatan",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Aiman menguji kestabilan empat buah model kon kayu pepejal (J, K, L dan M) yang diletakkan di atas sekeping papan rata. Papan itu kemudian dicondongkan perlahan-lahan dan sudut kecondongan papan ketika setiap model mula tumbang dicatat dalam jadual di bawah:\n\n| Model | Ketinggian (cm) | Luas tapak (cm²) | Sudut kecondongan ketika mula tumbang (°) |\n|---|---|---|---|\n| J | 20 | 16 | 18 |\n| K | 10 | 16 | 32 |\n| L | 10 | 36 | 48 |\n| M | 20 | 36 | 29 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan model yang paling stabil dan model yang paling kurang stabil dalam penyiasatan ini.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Paling stabil: Model L (tumbang pada sudut terbesar 48°)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Paling kurang stabil: Model J (tumbang pada sudut terkecil 18°)"
          }
        ],
        "answer": "Model L paling stabil dan Model J paling kurang stabil."
      },
      {
        "label": "(b)",
        "q": "Berdasarkan perbandingan antara Model J dan Model K, apakah faktor yang mempengaruhi kestabilan objek dan bagaimanakah ia memberi kesan?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Faktor: ketinggian objek (dengan luas tapak yang sama iaitu 16 cm²)"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Semakin rendah objek (semakin rendah pusat graviti), semakin stabil objek tersebut"
          }
        ],
        "answer": "Ketinggian objek; apabila luas tapak sama, objek yang lebih rendah mempunyai pusat graviti yang lebih rendah dan lebih stabil."
      },
      {
        "label": "(c)",
        "q": "Berdasarkan perbandingan antara Model K dan Model L, nyatakan faktor kedua yang mempengaruhi kestabilan serta hubungannya.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Faktor kedua: luas tapak"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Semakin besar luas tapak, semakin bertambah kestabilan objek"
          }
        ],
        "answer": "Luas tapak; semakin besar luas tapak sesuatu objek, semakin stabil objek tersebut."
      },
      {
        "label": "(d)",
        "q": "Mengapakah penumpang bas dua tingkat digalakkan duduk di tingkat bawah berbanding berdiri di tingkat atas? Kaitkan jawapan anda dengan konsep pusat graviti.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Penumpang di tingkat bawah merendahkan kedudukan pusat graviti bas"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menjadikan bas lebih stabil dan tidak mudah terbalik ketika melalui selekoh"
          }
        ],
        "answer": "Duduk di tingkat bawah merendahkan pusat graviti bas, sekali gus menjadikan bas lebih stabil dan mengurangkan risiko terbalik."
      }
    ]
  },
  {
    "id": "d6s-C11",
    "chapterId": "kestabilan_kekuatan",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Sekumpulan murid membina tiga model jambatan daripada dua helai kad manila yang sama jenis dan saiz di antara dua blok kayu berjarak 20 cm. Beban syiling 50 sen diletakkan satu demi satu di tengah jambatan sehingga jambatan runtuh:\n\n| Model jambatan | Bentuk struktur | Bilangan syiling maksimum sebelum runtuh |\n|---|---|---|\n| R | Kepingan rata sahaja | 3 |\n| S | Dilipat bentuk silinder / bergelugur | 14 |\n| T | Disokong lengkungan dan kekuda segi tiga | 26 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah tujuan penyiasatan ini dan nyatakan pemboleh ubah bergerak balasnya?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Tujuan: menyiasat hubungan antara bentuk struktur jambatan dengan kekuatan jambatan (bilangan syiling maksimum sebelum runtuh)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pemboleh ubah bergerak balas: bilangan syiling maksimum sebelum jambatan runtuh"
          }
        ],
        "answer": "Tujuan: Untuk menyiasat hubungan antara bentuk struktur jambatan dengan kekuatannya. Pemboleh ubah bergerak balas: bilangan syiling maksimum yang dapat ditampung sebelum runtuh."
      },
      {
        "label": "(b)",
        "q": "Apakah perbezaan antara maksud kekuatan dengan kestabilan sesuatu binaan?",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Kekuatan ialah keupayaan binaan menampung beban atau daya tanpa rosak, patah atau berubah bentuk"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kestabilan ialah keupayaan binaan untuk kekal tegak atau kembali ke kedudukan asal tanpa tumbang"
          }
        ],
        "answer": "Kekuatan ialah keupayaan binaan menampung beban tanpa rosak atau runtuh, manakala kestabilan ialah keupayaan binaan untuk tidak mudah tumbang."
      },
      {
        "label": "(c)",
        "q": "Mengapakah Model T dapat menampung bilangan syiling paling banyak berbanding Model R?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Bentuk lengkungan dan kekuda segi tiga mengagihkan daya/beban secara sekata ke seluruh struktur dan tiang sokongan"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Manakala kepingan rata menumpukan beban di bahagian tengah sahaja sehingga mudah melengkung dan runtuh"
          }
        ],
        "answer": "Struktur lengkungan dan kekuda segi tiga pada Model T mengagihkan beban dengan sekata ke bahagian penyokong, berbanding Model R yang rata di mana beban tertumpu di tengah."
      },
      {
        "label": "(d)",
        "q": "Dalam pembinaan jambatan sebenar, keluli dan konkrit bertetulang sering digunakan. Nyatakan satu sifat kekuatan bagi konkrit dan satu langkah keselamatan bagi mengelakkan keluli daripada menjadi lemah.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Sifat konkrit: sangat kuat/tahan mampatan dan tidak mereput atau berkarat"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Langkah menjaga keluli: mengecat atau menyalut keluli bagi mencegah pengaratan"
          }
        ],
        "answer": "Konkrit sangat tahan daya mampatan serta tidak berkarat atau mereput; keluli pula perlu dicat atau disalut untuk mencegah pengaratan yang boleh melemahkan strukturnya."
      }
    ]
  },
  {
    "id": "d6s-C12",
    "chapterId": "manusia",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Rizal dan Faris menjalankan ujian masa tindak balas sistem saraf. Faris memegang pembaris 30 cm secara menegak di atas tangan Rizal yang bersedia untuk menangkapnya tanpa amaran. Apabila Faris melepaskan pembaris, jarak pembaris jatuh sebelum ditangkap oleh Rizal dicatat dalam tiga keadaan berbeza:\n\n| Keadaan Rizal | Purata jarak pembaris jatuh (cm) |\n|---|---|\n| Segar selepas tidur mencukupi | 11 |\n| Selepas bersenam ringan | 12 |\n| Sangat letih dan mengantuk pada lewat malam | 24 |",
    "parts": [
      {
        "label": "(a)",
        "q": "Berdasarkan ujian ini, terangkan aliran isyarat dalam sistem saraf Rizal daripada rangsangan hingga gerak balas menangkap pembaris.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Organ deria (mata) mengesan rangsangan lalu menghantar impuls melalui saraf periferi ke sistem saraf pusat (otak)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Otak mentafsir isyarat dan menghantar arahan melalui saraf periferi ke otot tangan untuk menangkap pembaris"
          }
        ],
        "answer": "Mata mengesan pembaris jatuh dan menghantar isyarat melalui saraf periferi ke otak; otak mentafsir dan menghantar isyarat gerak balas melalui saraf periferi ke otot tangan untuk menangkapnya."
      },
      {
        "label": "(b)",
        "q": "Adakah tindakan menangkap pembaris ini merupakan tindakan terkawal atau tindakan luar kawal? Berikan sebab anda.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Tindakan terkawal"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Kerana tindakan ini berlaku secara sedar dan dikawal oleh otak"
          }
        ],
        "answer": "Tindakan terkawal kerana dilakukan secara sedar mengikut kehendak dan dikawal oleh otak."
      },
      {
        "label": "(c)",
        "q": "Mengapakah purata jarak pembaris jatuh paling jauh (24 cm) apabila Rizal sangat letih dan mengantuk?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Keletihan dan kurang tidur melambatkan penghantaran serta pemprosesan isyarat dalam sistem saraf"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyebabkan masa tindak balas Rizal menjadi lebih perlahan"
          }
        ],
        "answer": "Keletihan dan kekurangan tidur melambatkan pemprosesan dan penghantaran isyarat saraf, menyebabkan tindak balas menjadi lambat."
      },
      {
        "label": "(d)",
        "q": "Nyatakan dua amalan penjagaan sistem saraf manusia yang baik selain mendapat tidur yang mencukupi.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengambil pemakanan seimbang (kaya vitamin B) / minum air mencukupi / bersenam secara berkala"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengelakkan minuman beralkohol dan dadah / memakai topi keledar atau tali pinggang keledar / mengamalkan postur badan yang betul"
          }
        ],
        "answer": "Mengamalkan pemakanan seimbang, mengelakkan minuman beralkohol serta memakai alat pelindung seperti topi keledar bagi melindungi otak dan saraf tunjang."
      }
    ]
  }
];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});
