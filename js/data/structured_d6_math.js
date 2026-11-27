/**
 * Structured subjective questions: Darjah 6 UASA Matematik (KSSR Semakan 2017, Bahagian A 13x2m + Bahagian B 2x12m).
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
    App.Data.structured.d6_math = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
  {
    "id": "d6m-A01",
    "chapterId": "nombor_operasi",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Tukarkan 3 5/8 juta kepada nombor bulat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "3 5/8 × 1 000 000 = (29/8) × 1 000 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "3 625 000"
          }
        ],
        "answer": "3 625 000",
        "check": [
          3625000
        ]
      }
    ]
  },
  {
    "id": "d6m-A02",
    "chapterId": "nombor_operasi",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Hitung nilai bagi 2.45 juta + 3/4 juta − 680 000. Nyatakan jawapan dalam nombor bulat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "2 450 000 + 750 000 − 680 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "2 520 000"
          }
        ],
        "answer": "2 520 000",
        "check": [
          2520000
        ]
      }
    ]
  },
  {
    "id": "d6m-A03",
    "chapterId": "nombor_operasi",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Diberi 4.2 juta − p = 1 750 000. Cari nilai p dalam nombor bulat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "p = 4 200 000 − 1 750 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "2 450 000"
          }
        ],
        "answer": "2 450 000",
        "check": [
          2450000
        ]
      }
    ]
  },
  {
    "id": "d6m-A04",
    "chapterId": "pecahan_peratus",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Hitung 2 1/4 ÷ 3/8.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(9/4) × (8/3)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "6"
          }
        ],
        "answer": "6",
        "check": [
          6
        ]
      }
    ]
  },
  {
    "id": "d6m-A05",
    "chapterId": "pecahan_peratus",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah tangki mengandungi 4.86 liter air. Semua air itu dituangkan sama banyak ke dalam botol berkapasiti 0.27 liter setiap satu. Berapakah bilangan botol yang dapat diisi penuh?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "4.86 ÷ 0.27 = 486 ÷ 27"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "18"
          }
        ],
        "answer": "18 buah botol",
        "check": [
          18
        ]
      }
    ]
  },
  {
    "id": "d6m-A06",
    "chapterId": "pecahan_peratus",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Jisim sebakul mangga pada bulan lepas ialah 16 kg. Jisim mangga yang dituai pada bulan ini ialah 135% daripada jisim bulan lepas. Hitung jisim mangga, dalam kg, pada bulan ini.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(135/100) × 16"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "21.6 kg"
          }
        ],
        "answer": "21.6 kg",
        "check": [
          21.6
        ]
      }
    ]
  },
  {
    "id": "d6m-A07",
    "chapterId": "wang",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Harga kos sebuah basikal ialah RM320. Encik Halim menjual basikal itu dengan keuntungan 25%. Hitung harga jual basikal itu.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "RM320 + (25/100 × RM320) atau RM320 + RM80"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM400"
          }
        ],
        "answer": "RM400",
        "check": [
          400
        ]
      }
    ]
  },
  {
    "id": "d6m-A08",
    "chapterId": "wang",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Puan Salma makan malam di sebuah restoran dengan jumlah harga makanan RM150. Cukai perkhidmatan sebanyak 6% dikenakan ke atas bil tersebut. Berapakah jumlah bayaran yang perlu dijelaskan oleh Puan Salma?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "RM150 + (6/100 × RM150) atau RM150 + RM9"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM159"
          }
        ],
        "answer": "RM159",
        "check": [
          159
        ]
      }
    ]
  },
  {
    "id": "d6m-A09",
    "chapterId": "wang",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Aiman mempunyai jumlah aset bernilai RM48 500 dan jumlah liabiliti sebanyak RM19 750. Hitung nilai bersih kewangan Aiman, dalam RM.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "RM48 500 − RM19 750"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM28 750"
          }
        ],
        "answer": "RM28 750",
        "check": [
          28750
        ]
      }
    ]
  },
  {
    "id": "d6m-A10",
    "chapterId": "masa_waktu",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Kuala Lumpur berada pada zon masa UTC+8 manakala New York berada pada zon masa UTC−5. Berapakah beza masa, dalam jam, antara Kuala Lumpur dengan New York?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "8 − (−5) atau 8 + 5"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "13 jam"
          }
        ],
        "answer": "13 jam",
        "check": [
          13
        ]
      }
    ]
  },
  {
    "id": "d6m-A11",
    "chapterId": "masa_waktu",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah pesawat berlepas dari Kuala Lumpur (UTC+8) pada jam 0915 dan tiba di Dubai (UTC+4) selepas penerbangan selama 7 jam. Pukul berapakah pesawat itu tiba mengikut waktu tempatan Dubai? (Nyatakan angka 4 digit sistem 24 jam)",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "0915 + 7 jam = 1615 (waktu Kuala Lumpur); 1615 − 4 jam"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1215"
          }
        ],
        "answer": "Jam 1215",
        "check": [
          1215
        ]
      }
    ]
  },
  {
    "id": "d6m-A12",
    "chapterId": "masa_waktu",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah kapal terbang berlepas dari London (UTC+0) pada jam 1800 hari Isnin dan tiba di Kuala Lumpur (UTC+8) pada jam 1400 hari Selasa. Hitung tempoh penerbangan itu dalam jam.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Waktu berlepas dalam UTC+8 = 1800 + 8 jam = 0200 hari Selasa"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1400 − 0200 = 12 jam"
          }
        ],
        "answer": "12 jam",
        "check": [
          12
        ]
      }
    ]
  },
  {
    "id": "d6m-A13",
    "chapterId": "ukuran_sukatan",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebatang paip besi sepanjang 3 m berjisim 4.5 kg. Hitung jisim, dalam kg, bagi 5 m paip besi yang sama jenis.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(4.5 ÷ 3) × 5"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "7.5 kg"
          }
        ],
        "answer": "7.5 kg",
        "check": [
          7.5
        ]
      }
    ]
  },
  {
    "id": "d6m-A14",
    "chapterId": "ukuran_sukatan",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah kereta menggunakan 4.5 liter petrol untuk perjalanan sejauh 60 km. Berapakah isi padu petrol, dalam liter, yang diperlukan untuk perjalanan pergi dan balik antara dua bandar yang berjarak 100 km?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Jarak pergi dan balik = 2 × 100 = 200 km; (200 ÷ 60) × 4.5"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "15 liter"
          }
        ],
        "answer": "15 liter",
        "check": [
          15
        ]
      }
    ]
  },
  {
    "id": "d6m-A15",
    "chapterId": "ukuran_sukatan",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Untuk membuat 2 liter air sirap, 250 g gula diperlukan. Berapakah jisim gula, dalam kg, yang diperlukan untuk membuat 12 liter air sirap yang sama kepekatannya?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(12 ÷ 2) × 250 g = 1 500 g"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1.5 kg"
          }
        ],
        "answer": "1.5 kg",
        "check": [
          1.5
        ]
      }
    ]
  },
  {
    "id": "d6m-A16",
    "chapterId": "ruang",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah pentagon sekata mempunyai panjang sisi 9.5 cm setiap satu. Hitung perimeter, dalam cm, pentagon sekata itu.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "5 × 9.5 cm"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "47.5 cm"
          }
        ],
        "answer": "47.5 cm",
        "check": [
          47.5
        ]
      }
    ]
  },
  {
    "id": "d6m-A17",
    "chapterId": "ruang",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sudut pedalaman bagi sebuah oktagon sekata ialah 135° manakala sudut pedalaman bagi sebuah segi tiga sama sisi ialah 60°. Hitung beza antara kedua-dua sudut pedalaman itu, dalam darjah.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "135° − 60°"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "75°"
          }
        ],
        "answer": "75°",
        "check": [
          75
        ]
      }
    ]
  },
  {
    "id": "d6m-A18",
    "chapterId": "ruang",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebanyak 6 biji kek cawan berbentuk bulatan yang sama saiz disusun rapat dalam satu baris lurus. Jika jejari setiap kek cawan ialah 3.5 cm, hitung jumlah panjang susunan kek cawan itu, dalam cm.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Diameter = 2 × 3.5 = 7 cm; 6 × 7 cm"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "42 cm"
          }
        ],
        "answer": "42 cm",
        "check": [
          42
        ]
      }
    ]
  },
  {
    "id": "d6m-A19",
    "chapterId": "koordinat_nisbah",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Pada satah Cartes, titik P berada pada koordinat (2, 3) dan titik Q berada pada koordinat (7, 3). Jika 1 unit pada satah Cartes mewakili 4 km, hitung jarak mengufuk sebenar, dalam km, dari titik P ke titik Q.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(7 − 2) × 4 km"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "20 km"
          }
        ],
        "answer": "20 km",
        "check": [
          20
        ]
      }
    ]
  },
  {
    "id": "d6m-A20",
    "chapterId": "koordinat_nisbah",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Nisbah bilangan guli merah kepada guli biru di dalam sebuah kotak ialah 3 : 5. Jika terdapat 24 biji guli merah, hitung jumlah keseluruhan guli di dalam kotak itu.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(24 ÷ 3) × (3 + 5) = 8 × 8"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "64 biji"
          }
        ],
        "answer": "64 biji",
        "check": [
          64
        ]
      }
    ]
  },
  {
    "id": "d6m-A21",
    "chapterId": "koordinat_nisbah",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Panjang seutas reben ialah 80 cm dan panjang seutas tali ialah 2 m. Nisbah panjang reben kepada panjang tali dalam bentuk termudah ialah a : b. Hitung nilai a + b.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "80 cm : 200 cm = 2 : 5"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "a + b = 2 + 5 = 7"
          }
        ],
        "answer": "7",
        "check": [
          7
        ]
      }
    ]
  },
  {
    "id": "d6m-A22",
    "chapterId": "data_kebolehjadian",
    "part": "A",
    "level": "rendah",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah carta pai menunjukkan sukan kegemaran 120 orang murid. Sektor bola sepak mempunyai sudut 90°. Hitung bilangan murid yang menggemari bola sepak.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(90° ÷ 360°) × 120"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "30 orang"
          }
        ],
        "answer": "30 orang",
        "check": [
          30
        ]
      }
    ]
  },
  {
    "id": "d6m-A23",
    "chapterId": "data_kebolehjadian",
    "part": "A",
    "level": "sederhana",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Sebuah carta pai mewakili jualan 200 buah buku. Sektor buku cerita ialah 45°, sektor buku latihan ialah 180° dan selebihnya ialah buku rujukan. Berapakah bilangan buku rujukan yang dijual?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Sudut buku rujukan = 360° − 45° − 180° = 135°; (135° ÷ 360°) × 200"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "75 buah"
          }
        ],
        "answer": "75 buah",
        "check": [
          75
        ]
      }
    ]
  },
  {
    "id": "d6m-A24",
    "chapterId": "data_kebolehjadian",
    "part": "A",
    "level": "tinggi",
    "status": "verified",
    "stem": "",
    "parts": [
      {
        "label": "",
        "q": "Di dalam sebuah beg terdapat 5 biji bola merah dan 11 biji bola biru. Berapakah bilangan bola merah yang perlu ditambah supaya kebolehjadian memilih sebiji bola merah menjadi sama kemungkinan?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "11 − 5"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "6 biji"
          }
        ],
        "answer": "6 biji",
        "check": [
          6
        ]
      }
    ]
  },
  {
    "id": "d6m-B01",
    "chapterId": "nombor_operasi",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Sebuah kilang menghasilkan 1.8 juta botol air mineral pada bulan Januari. Pengeluaran pada bulan Februari ialah 3/4 juta botol lebih banyak daripada bulan Januari.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tukarkan bilangan botol yang dihasilkan pada bulan Januari kepada nombor bulat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "1.8 × 1 000 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1 800 000"
          }
        ],
        "answer": "1 800 000 botol",
        "check": [
          1800000
        ]
      },
      {
        "label": "(b)",
        "q": "Hitung jumlah botol air mineral yang dihasilkan pada bulan Januari dan bulan Februari.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "3/4 juta = 750 000"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Bulan Februari = 1 800 000 + 750 000 = 2 550 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Jumlah = 1 800 000 + 2 550 000 = 4 350 000"
          }
        ],
        "answer": "4 350 000 botol",
        "check": [
          4350000
        ]
      },
      {
        "label": "(c)",
        "q": "Sebanyak 15% daripada jumlah pengeluaran dua bulan itu telah rosak dan tidak dapat dijual. Hitung bilangan botol yang masih elok untuk dijual.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Peratus botol elok = 100% − 15% = 85% (atau rosak = 15/100 × 4 350 000)"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "85/100 × 4 350 000 (atau 4 350 000 − 652 500)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "3 697 500"
          }
        ],
        "answer": "3 697 500 botol",
        "check": [
          3697500
        ]
      },
      {
        "label": "(d)",
        "q": "Semua botol yang masih elok itu dibungkus sama banyak ke dalam kotak. Setiap kotak memuatkan 25 botol air mineral. Jika setiap kotak dijual pada harga RM18, hitung jumlah hasil jualan, dalam RM.",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Bilangan kotak = 3 697 500 ÷ 25"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "147 900 kotak"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Jumlah jualan = 147 900 × RM18"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM2 662 200"
          }
        ],
        "answer": "RM2 662 200",
        "check": [
          2662200
        ]
      }
    ]
  },
  {
    "id": "d6m-B02",
    "chapterId": "wang",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Puan Aminah membeli 40 helai baju kurung pada harga kos RM65 sehelai. Beliau membayar kos penghantaran sebanyak RM200 untuk semua baju tersebut.",
    "parts": [
      {
        "label": "(a)",
        "q": "Hitung jumlah harga kos keseluruhan yang ditanggung oleh Puan Aminah.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "(40 × RM65) + RM200"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM2 800"
          }
        ],
        "answer": "RM2 800",
        "check": [
          2800
        ]
      },
      {
        "label": "(b)",
        "q": "Puan Aminah menetapkan harga jual asal sehelai baju kurung itu ialah RM105. Sempena jualan akhir tahun, beliau memberikan diskaun sebanyak 20% bagi setiap helai baju. Hitung harga jual sehelai baju selepas diskaun.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Nilai diskaun = 20/100 × RM105 = RM21"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "RM105 − RM21"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM84"
          }
        ],
        "answer": "RM84",
        "check": [
          84
        ]
      },
      {
        "label": "(c)",
        "q": "Semua 40 helai baju kurung itu habis dijual pada harga diskaun RM84 sehelai. Hitung peratus keuntungan yang diperoleh Puan Aminah berdasarkan jumlah harga kos keseluruhan.",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Jumlah jualan = 40 × RM84 = RM3 360"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Keuntungan = RM3 360 − RM2 800 = RM560"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "(560 ÷ 2 800) × 100%"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "20%"
          }
        ],
        "answer": "20%",
        "check": [
          20
        ]
      },
      {
        "label": "(d)",
        "q": "Puan Aminah menyimpan kesemua wang keuntungannya sebanyak RM560 ke dalam akaun simpanan dengan kadar faedah 3.5% setahun. Hitung jumlah wang dalam akaun itu selepas 1 tahun.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Faedah = 3.5/100 × RM560"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Faedah = RM19.60"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Jumlah = RM560 + RM19.60 = RM579.60"
          }
        ],
        "answer": "RM579.60",
        "check": [
          579.6
        ]
      }
    ]
  },
  {
    "id": "d6m-B03",
    "chapterId": "masa_waktu",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Zarif menaiki penerbangan dari Kuala Lumpur (UTC+8) ke London (UTC+0). Penerbangan itu berlepas dari Kuala Lumpur pada jam 2230 hari Jumaat dan mengambil masa selama 13 jam untuk tiba di London.",
    "parts": [
      {
        "label": "(a)",
        "q": "Hitung beza masa, dalam jam, antara Kuala Lumpur dengan London.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "8 − 0"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "8 jam"
          }
        ],
        "answer": "8 jam",
        "check": [
          8
        ]
      },
      {
        "label": "(b)",
        "q": "Nyatakan waktu di London (UTC+0) ketika pesawat itu berlepas dari Kuala Lumpur pada jam 2230 hari Jumaat. (Nyatakan angka 4 digit sistem 24 jam)",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "2230 − 8 jam"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "1430 pada hari Jumaat"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1430"
          }
        ],
        "answer": "Jam 1430 (hari Jumaat)",
        "check": [
          1430
        ]
      },
      {
        "label": "(c)",
        "q": "Hitung waktu ketibaan Zarif di London mengikut waktu tempatan London (UTC+0). (Nyatakan angka sistem 24 jam)",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "1430 hari Jumaat + 13 jam"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "2730 − 2400 = 0330"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Hari bertukar kepada hari Sabtu"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Jam 0330 hari Sabtu"
          }
        ],
        "answer": "Jam 0330 (hari Sabtu)",
        "check": [
          330
        ]
      },
      {
        "label": "(d)",
        "q": "Setelah tiba di London pada jam 0330 waktu tempatan, Zarif menunggu selama 2 jam 45 minit sebelum menaiki kereta api selama 1 jam 30 minit ke rumah saudaranya. Pukul berapakah Zarif tiba di rumah saudaranya mengikut waktu tempatan London? (Nyatakan angka sistem 24 jam)",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Jumlah tempoh = 2 jam 45 minit + 1 jam 30 minit = 4 jam 15 minit"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "0330 + 4 jam 15 minit"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Jam 0745"
          }
        ],
        "answer": "Jam 0745",
        "check": [
          745
        ]
      }
    ]
  },
  {
    "id": "d6m-B04",
    "chapterId": "ukuran_sukatan",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Encik Danial membancuh air limau untuk majlis sukan sekolah. Mengikut resipi asas, 1.5 liter air limau memerlukan 180 g gula dan 240 ml pati limau.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan nisbah jisim gula (dalam g) kepada isi padu pati limau (dalam ml) bagi resipi asas dalam bentuk termudah a : b, kemudian hitung nilai a + b.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "180 : 240 = 3 : 4"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "a + b = 3 + 4 = 7"
          }
        ],
        "answer": "3 : 4 (a + b = 7)",
        "check": [
          7
        ]
      },
      {
        "label": "(b)",
        "q": "Encik Danial ingin menyediakan 12 liter air limau menggunakan resipi yang sama. Hitung jisim gula, dalam kg, yang diperlukan.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Bilangan bahagian = 12 ÷ 1.5 = 8"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Jisim gula = 8 × 180 g = 1 440 g"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1.44 kg"
          }
        ],
        "answer": "1.44 kg",
        "check": [
          1.44
        ]
      },
      {
        "label": "(c)",
        "q": "Hitung isi padu pati limau, dalam liter, yang diperlukan untuk menyediakan 12 liter air limau itu.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "8 × 240 ml = 1 920 ml"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "1 920 ÷ 1 000"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "1.92 liter"
          }
        ],
        "answer": "1.92 liter",
        "check": [
          1.92
        ]
      },
      {
        "label": "(d)",
        "q": "Semua 12 liter air limau itu dituangkan ke dalam cawan bersaiz 250 ml setiap satu. Jika 75% daripada bilangan cawan itu telah diminum oleh murid, berapakah bilangan cawan air limau yang masih tinggal?",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Bilangan cawan = 12 000 ml ÷ 250 ml = 48 cawan"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Peratus baki = 100% − 75% = 25%"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "25/100 × 48"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "12 cawan"
          }
        ],
        "answer": "12 cawan",
        "check": [
          12
        ]
      }
    ]
  },
  {
    "id": "d6m-B05",
    "chapterId": "ruang",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Rina mereka bentuk sebuah taman mini yang mempunyai sebuah kolam ikan berbentuk heksagon sekata dengan panjang setiap sisi 1.6 m. Di tepi kolam itu pula terdapat satu tapak pasu bunga berbentuk segi empat sama berukuran 84 cm × 84 cm.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan sudut pedalaman bagi sebuah heksagon sekata, dalam darjah.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Mengenal pasti heksagon sekata mempunyai 6 sisi sekata"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "120°"
          }
        ],
        "answer": "120°",
        "check": [
          120
        ]
      },
      {
        "label": "(b)",
        "q": "Rina ingin memasang pagar di sekeliling kolam heksagon sekata itu. Jika kos pagar ialah RM15 bagi setiap meter, hitung jumlah kos pagar itu, dalam RM.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Perimeter = 6 × 1.6 m = 9.6 m"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Kos = 9.6 × RM15"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "RM144"
          }
        ],
        "answer": "RM144",
        "check": [
          144
        ]
      },
      {
        "label": "(c)",
        "q": "Pada tapak segi empat sama berukuran 84 cm × 84 cm itu, Rina menyusun pasu bunga berbentuk bulatan yang sama saiz secara rapat dalam 3 baris dan 3 lajur sehingga memenuhi ruang. Hitung diameter satu pasu bunga itu, dalam cm.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "3 pasu disusun rapat sepanjang 84 cm"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Diameter = 84 cm ÷ 3"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "28 cm"
          }
        ],
        "answer": "28 cm",
        "check": [
          28
        ]
      },
      {
        "label": "(d)",
        "q": "Hitung jejari satu pasu bunga itu (dalam cm) dan sudut bagi satu sektor (dalam darjah) jika sebuah bulatan hiasan dibahagikan kepada 8 sektor yang sama besar pada pusat bulatan.",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Jejari = 28 cm ÷ 2"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "14 cm"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Sudut satu sektor = 360° ÷ 8"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "45°"
          }
        ],
        "answer": "Jejari = 14 cm; Sudut sektor = 45°",
        "check": [
          14,
          45
        ]
      }
    ]
  },
  {
    "id": "d6m-B06",
    "chapterId": "data_kebolehjadian",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Sebuah carta pai menunjukkan jualan 320 buah buku di Kedai Buku Cerdik dalam seminggu. Sektor buku fiksyen ialah 180°, sektor buku rujukan ialah 90°, sektor buku komik ialah 45° dan selebihnya ialah sektor majalah.",
    "parts": [
      {
        "label": "(a)",
        "q": "Hitung sudut bagi sektor majalah, dalam darjah.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "360° − (180° + 90° + 45°)"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "45°"
          }
        ],
        "answer": "45°",
        "check": [
          45
        ]
      },
      {
        "label": "(b)",
        "q": "Hitung bilangan buku rujukan yang dijual pada minggu itu.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Pecahan buku rujukan = 90° ÷ 360° = 1/4"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "(1/4) × 320"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "80 buah"
          }
        ],
        "answer": "80 buah",
        "check": [
          80
        ]
      },
      {
        "label": "(c)",
        "q": "Hitung beza antara bilangan buku fiksyen dengan bilangan majalah yang dijual pada minggu itu.",
        "marks": 4,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Buku fiksyen = (180° ÷ 360°) × 320 = 160 buah"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Majalah = (45° ÷ 360°) × 320 = 40 buah"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "160 − 40"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "120 buah"
          }
        ],
        "answer": "120 buah",
        "check": [
          120
        ]
      },
      {
        "label": "(d)",
        "q": "Kesemua 80 buah buku rujukan dan 40 buah majalah dimasukkan ke dalam sebuah kotak untuk cabutan bertuah. Berapakah bilangan majalah yang perlu ditambah ke dalam kotak itu supaya kebolehjadian mencabut sebuah majalah menjadi sama kemungkinan?",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Bilangan majalah perlu sama dengan bilangan buku rujukan iaitu 80 buah"
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "80 − 40"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "40 buah"
          }
        ],
        "answer": "40 buah",
        "check": [
          40
        ]
      }
    ]
  }
];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});
