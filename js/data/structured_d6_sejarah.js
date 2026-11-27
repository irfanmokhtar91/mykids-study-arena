/**
 * Structured subjective questions: Darjah 6 UASA Sejarah (KSSR Semakan 2017, Bahagian B 4x5m + Bahagian C 2x5m).
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
    App.Data.structured.d6_sejarah = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
  {
    "id": "d6sj-B01",
    "chapterId": "pembentukan_malaysia",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Idea pembentukan Malaysia telah dicetuskan oleh beberapa tokoh sebelum direalisasikan secara rasmi pada tahun 1963. Pada 27 Mei 1961, Tunku Abdul Rahman Putra al-Haj telah mengumumkan gagasan pembentukan Malaysia dalam satu majlis di Singapura.",
    "parts": [
      {
        "label": "(a)",
        "q": "Namakan tokoh British yang pertama kali mencadangkan idea penggabungan Tanah Melayu dengan wilayah sekitarnya pada tahun 1887.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan Lord Brassey sebagai tokoh pertama mencadangkan idea penggabungan pada tahun 1887."
          }
        ],
        "answer": "Lord Brassey."
      },
      {
        "label": "(b)",
        "q": "Nyatakan dua sebab utama pembentukan Malaysia yang dikemukakan oleh Tunku Abdul Rahman.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan sebab pertama seperti menjamin keselamatan dan membendung ancaman komunis."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan sebab kedua seperti mewujudkan keseimbangan kaum atau mempercepatkan kemerdekaan wilayah terlibat dan memajukan ekonomi."
          }
        ],
        "answer": "1. Menjamin keselamatan serantau daripada ancaman komunis.\n2. Mewujudkan keseimbangan kaum serta memajukan ekonomi bersama."
      },
      {
        "label": "(c)",
        "q": "Senaraikan dua wilayah yang menyertai Persekutuan Tanah Melayu untuk membentuk Malaysia pada 16 September 1963.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyenaraikan satu wilayah anggota yang betul (contoh: Sarawak atau Sabah)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyenaraikan wilayah anggota kedua yang betul (contoh: Sabah atau Singapura)."
          }
        ],
        "answer": "Sarawak dan Sabah (atau Singapura)."
      }
    ]
  },
  {
    "id": "d6sj-B02",
    "chapterId": "pembentukan_malaysia",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Pembentukan Malaysia melibatkan beberapa langkah penting secara berperingkat dan permuafakatan sebelum pemasyhuran rasminya pada 16 September 1963.",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah tujuan penubuhan Suruhanjaya Cobbold pada tahun 1962?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan tujuan meninjau pandangan atau reaksi penduduk."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan secara tepat penduduk Sarawak dan Sabah terhadap gagasan pembentukan Malaysia."
          }
        ],
        "answer": "Meninjau pandangan dan reaksi penduduk di Sarawak dan Sabah terhadap gagasan pembentukan Malaysia."
      },
      {
        "label": "(b)",
        "q": "Nyatakan tarikh Perjanjian Malaysia ditandatangani di London.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tarikh tepat 9 Julai 1963."
          }
        ],
        "answer": "9 Julai 1963."
      },
      {
        "label": "(c)",
        "q": "Namakan sebuah negara jiran yang membantah pembentukan Malaysia serta berikan satu cara Malaysia memulihkan hubungan diplomatik dengan negara tersebut.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan negara yang membantah iaitu Indonesia (atau Filipina)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan cara pemulihan diplomatik melalui rundingan damai dan perjanjian pemulihan hubungan."
          }
        ],
        "answer": "Indonesia; hubungan dipulihkan melalui rundingan damai dan perjanjian pemulihan hubungan diplomatik antara kedua-dua negara."
      }
    ]
  },
  {
    "id": "d6sj-B03",
    "chapterId": "negeri_malaysia",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Malaysia terdiri daripada 13 buah negeri dan tiga Wilayah Persekutuan yang mempunyai sistem pentadbiran, gelaran ketua negeri serta pusat pentadbiran masing-masing.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan gelaran ketua negeri bagi negeri-negeri berikut: (i) Perlis dan (ii) Negeri Sembilan.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan gelaran ketua negeri Perlis ialah Raja."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan gelaran ketua negeri Negeri Sembilan ialah Yang di-Pertuan Besar."
          }
        ],
        "answer": "(i) Perlis: Raja\n(ii) Negeri Sembilan: Yang di-Pertuan Besar"
      },
      {
        "label": "(b)",
        "q": "Senaraikan dua buah negeri di Malaysia yang diketuai oleh Yang di-Pertua Negeri.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan satu negeri tidak beraja yang betul (contoh: Melaka atau Pulau Pinang)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan negeri tidak beraja kedua yang betul (contoh: Sabah atau Sarawak)."
          }
        ],
        "answer": "Melaka dan Pulau Pinang (atau Sabah / Sarawak)."
      },
      {
        "label": "(c)",
        "q": "Apakah perbezaan utama antara fungsi ibu negeri dengan bandar diraja?",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menjelaskan ibu negeri ialah pusat pentadbiran negeri manakala bandar diraja ialah pusat warisan sejarah yang mempunyai istana."
          }
        ],
        "answer": "Ibu negeri berfungsi sebagai pusat pentadbiran negeri, manakala bandar diraja merupakan pusat warisan sejarah yang menempatkan istana dan monumen diraja."
      }
    ]
  },
  {
    "id": "d6sj-B04",
    "chapterId": "negeri_malaysia",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Setiap negeri dan Wilayah Persekutuan di Malaysia mempunyai asal usul nama yang unik berdasarkan sumber sejarah, bahasa asing dan unsur alam serta lambang identiti seperti lagu kebesaran negeri.",
    "parts": [
      {
        "label": "(a)",
        "q": "Berdasarkan sumber sejarah dan bahasa asing, padankan asal usul nama berikut dengan negeri yang betul: (i) 'Jauhar' (permata berharga) dan (ii) 'Qadah' (gelas berkaki).",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Memadankan 'Jauhar' dengan negeri Johor."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Memadankan 'Qadah' dengan negeri Kedah."
          }
        ],
        "answer": "(i) Johor\n(ii) Kedah"
      },
      {
        "label": "(b)",
        "q": "Namakan dua buah negeri di Pantai Timur Semenanjung Malaysia yang berkongsi tajuk lagu kebesaran negeri yang sama iaitu 'Selamat Sultan'.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan Terengganu."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan Kelantan."
          }
        ],
        "answer": "Terengganu dan Kelantan."
      },
      {
        "label": "(c)",
        "q": "Nyatakan tajuk lagu rasmi bagi Wilayah Persekutuan Kuala Lumpur, Labuan dan Putrajaya.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tajuk lagu rasmi Wilayah Persekutuan ialah 'Maju dan Sejahtera'."
          }
        ],
        "answer": "Maju dan Sejahtera."
      }
    ]
  },
  {
    "id": "d6sj-B05",
    "chapterId": "rukun_negara",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Rukun Negara merupakan ideologi kebangsaan Malaysia yang dirangka oleh Majlis Perundingan Negara (MAPEN) bagi memupuk perpaduan dalam kalangan rakyat berbilang kaum.",
    "parts": [
      {
        "label": "(a)",
        "q": "Bilakah Rukun Negara diisytiharkan secara rasmi oleh Yang di-Pertuan Agong keempat?",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tarikh pengisytiharan rasmi iaitu 31 Ogos 1970."
          }
        ],
        "answer": "31 Ogos 1970."
      },
      {
        "label": "(b)",
        "q": "Lengkapkan susunan prinsip Rukun Negara berikut mengikut urutan yang betul: (i) Prinsip ketiga dan (ii) Prinsip keempat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan prinsip ketiga ialah Keluhuran Perlembagaan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan prinsip keempat ialah Kedaulatan Undang-undang."
          }
        ],
        "answer": "(i) Keluhuran Perlembagaan\n(ii) Kedaulatan Undang-undang"
      },
      {
        "label": "(c)",
        "q": "Berikan dua matlamat utama pengenalan Rukun Negara kepada masyarakat Malaysia.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan matlamat pertama seperti mencapai perpaduan yang lebih erat dalam kalangan masyarakat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan matlamat kedua seperti memelihara cara hidup demokratik atau mencipta masyarakat yang adil dan bersikap liberal terhadap tradisi budaya."
          }
        ],
        "answer": "1. Mencapai perpaduan yang lebih erat dalam kalangan seluruh masyarakat.\n2. Memelihara cara hidup demokratik (atau mencipta masyarakat yang adil serta bersikap liberal terhadap tradisi budaya)."
      }
    ]
  },
  {
    "id": "d6sj-B06",
    "chapterId": "kaum_budaya",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Malaysia kaya dengan kepelbagaian kaum, etnik, perayaan dan seni budaya tradisional di Semenanjung Malaysia, Sabah dan Sarawak.",
    "parts": [
      {
        "label": "(a)",
        "q": "Senaraikan dua daripada tiga cabang utama masyarakat Orang Asli di Semenanjung Malaysia.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan satu cabang utama yang betul (contoh: Negrito atau Senoi)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan cabang utama kedua yang betul (contoh: Senoi atau Melayu Proto)."
          }
        ],
        "answer": "Negrito dan Senoi (atau Melayu Proto)."
      },
      {
        "label": "(b)",
        "q": "Padankan perayaan tradisional berikut dengan tarian tradisional yang sinonim dengannya: (i) Hari Gawai dan (ii) Pesta Kaamatan.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Memadankan Hari Gawai dengan Tarian Ngajat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Memadankan Pesta Kaamatan dengan Tarian Sumazau."
          }
        ],
        "answer": "(i) Hari Gawai: Tarian Ngajat\n(ii) Pesta Kaamatan: Tarian Sumazau"
      },
      {
        "label": "(c)",
        "q": "Namakan alat muzik tradisional daripada buluh dan labu kering yang berasal dari negeri Sabah.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan Sompoton sebagai alat muzik tradisional dari Sabah."
          }
        ],
        "answer": "Sompoton."
      }
    ]
  },
  {
    "id": "d6sj-B07",
    "chapterId": "kaum_budaya",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Perlembagaan Persekutuan menjamin keharmonian hidup rakyat pelbagai agama dan kepercayaan di Malaysia melalui peruntukan undang-undang yang jelas.",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah kedudukan agama Islam dan hak penganut agama lain seperti yang termaktub dalam Perkara 3 Perlembagaan Persekutuan?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan agama Islam ialah agama bagi Persekutuan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan agama-agama lain boleh diamalkan dengan aman dan damai di mana-mana bahagian Persekutuan."
          }
        ],
        "answer": "Agama Islam ialah agama bagi Persekutuan, tetapi agama-agama lain boleh diamalkan dengan aman dan damai."
      },
      {
        "label": "(b)",
        "q": "Siapakah Ketua Agama Islam bagi negeri-negeri tidak beraja seperti Melaka, Pulau Pinang, Sabah dan Sarawak?",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan Yang di-Pertuan Agong sebagai Ketua Agama Islam bagi negeri tidak beraja."
          }
        ],
        "answer": "Yang di-Pertuan Agong."
      },
      {
        "label": "(c)",
        "q": "Nyatakan nama rumah ibadat bagi penganut agama Sikh dan kitab rujukan utama bagi agama Hindu.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan rumah ibadat penganut Sikh ialah Gurdwara."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan kitab rujukan utama agama Hindu ialah Veda."
          }
        ],
        "answer": "Rumah ibadat penganut Sikh: Gurdwara.\nKitab rujukan agama Hindu: Veda."
      }
    ]
  },
  {
    "id": "d6sj-B08",
    "chapterId": "pemimpin_negara",
    "part": "B",
    "level": "rendah",
    "status": "verified",
    "stem": "Setiap Perdana Menteri Malaysia telah memberikan sumbangan besar kepada pembangunan negara sejak kemerdekaan pada tahun 1957 dan dikurniakan gelaran khas atas jasa bakti mereka.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan gelaran rasmi bagi Perdana Menteri Malaysia yang berikut: (i) Tun Abdul Razak bin Dato' Hussein dan (ii) Tun Hussein bin Dato' Onn.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan gelaran Tun Abdul Razak ialah Bapa Pembangunan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan gelaran Tun Hussein Onn ialah Bapa Perpaduan."
          }
        ],
        "answer": "(i) Bapa Pembangunan\n(ii) Bapa Perpaduan"
      },
      {
        "label": "(b)",
        "q": "Namakan dasar pembangunan ekonomi yang diperkenalkan oleh Tun Abdul Razak bin Dato' Hussein pada tahun 1970 untuk membasmi kemiskinan dan menyusun semula masyarakat.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan Dasar Ekonomi Baru (DEB)."
          }
        ],
        "answer": "Dasar Ekonomi Baru (DEB)."
      },
      {
        "label": "(c)",
        "q": "Nyatakan dua projek mercu tanda atau dasar utama yang dilaksanakan semasa pentadbiran Tun Dr. Mahathir Mohamad sebagai Perdana Menteri keempat.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan satu pencapaian seperti pembinaan Menara Berkembar Petronas, KLIA atau Putrajaya."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan pencapaian kedua seperti memperkenalkan Wawasan 2020 atau penubuhan syarikat kereta nasional PROTON."
          }
        ],
        "answer": "1. Pembinaan Menara Berkembar Petronas / Lapangan Terbang Antarabangsa Kuala Lumpur (KLIA) / Putrajaya.\n2. Memperkenalkan Wawasan 2020 (atau penubuhan industri automotif nasional PROTON)."
      }
    ]
  },
  {
    "id": "d6sj-B09",
    "chapterId": "pemimpin_negara",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Perdana Menteri merupakan ketua kerajaan yang memainkan peranan penting dalam menguruskan pentadbiran negara berlandaskan Perlembagaan Persekutuan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Jelaskan peranan Perdana Menteri dalam hubungan pentadbiran dengan Yang di-Pertuan Agong berkaitan pelantikan Jemaah Menteri dan duta negara.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan Perdana Menteri mengemukakan cadangan atau menasihati Yang di-Pertuan Agong."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan Yang di-Pertuan Agong yang memperkenankan pelantikan Jemaah Menteri dan duta tersebut."
          }
        ],
        "answer": "Perdana Menteri menasihati dan mengemukakan cadangan nama Jemaah Menteri serta duta negara kepada Yang di-Pertuan Agong untuk diperkenankan pelantikannya."
      },
      {
        "label": "(b)",
        "q": "Nyatakan dua bidang tugas rasmi lain yang dilaksanakan oleh Perdana Menteri di dalam dan luar negara.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan tugas dalam negara seperti mempengerusikan Mesyuarat Jemaah Menteri atau menyelaras dasar pembangunan negara."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tugas luar negara seperti menjalinkan dan memperkukuh hubungan diplomatik dengan negara luar."
          }
        ],
        "answer": "1. Mempengerusikan Mesyuarat Jemaah Menteri dan menyelaras dasar pembangunan negara.\n2. Menjalinkan hubungan diplomatik dengan negara luar."
      },
      {
        "label": "(c)",
        "q": "Apakah tugas Perdana Menteri apabila Yang di-Pertuan Agong menghadiri Mesyuarat Majlis Raja-Raja?",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan Perdana Menteri mengiringi Yang di-Pertuan Agong ke Mesyuarat Majlis Raja-Raja."
          }
        ],
        "answer": "Mengiringi Yang di-Pertuan Agong ke Mesyuarat Majlis Raja-Raja."
      }
    ]
  },
  {
    "id": "d6sj-B10",
    "chapterId": "ekonomi_sukan",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Ekonomi Malaysia telah berkembang daripada kegiatan ekonomi tradisional sara diri kepada ekonomi moden berteraskan komoditi, industri pembuatan dan perkhidmatan digital.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan satu perbezaan antara kegiatan perlombongan bijih timah secara tradisional dengan cara moden dari segi peralatan yang digunakan.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan kaedah tradisional menggunakan alat ringkas seperti dulang (mendulang)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan kaedah moden menggunakan jentera berteknologi seperti kapal korek atau pam kelikir."
          }
        ],
        "answer": "Perlombongan tradisional menggunakan alat ringkas seperti dulang untuk mendulang, manakala perlombongan moden menggunakan jentera besar seperti kapal korek."
      },
      {
        "label": "(b)",
        "q": "Di manakah lokasi telaga minyak pertama Malaysia yang dikenali sebagai 'The Grand Old Lady'?",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan lokasi telaga minyak tersebut di Miri, Sarawak."
          }
        ],
        "answer": "Miri, Sarawak."
      },
      {
        "label": "(c)",
        "q": "Namakan model kereta pertama yang dikeluarkan oleh PROTON pada tahun 1985 serta nyatakan satu contoh kemajuan transaksi perniagaan moden berasaskan ICT di Malaysia.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan model kereta pertama PROTON ialah Proton Saga."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan kemajuan perniagaan berasaskan ICT seperti e-dagang (perniagaan dalam talian)."
          }
        ],
        "answer": "Model kereta pertama PROTON: Proton Saga.\nKemajuan berasaskan ICT: Perdagangan elektronik (e-dagang) melalui Internet."
      }
    ]
  },
  {
    "id": "d6sj-B11",
    "chapterId": "ekonomi_sukan",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Sukan bukan sahaja melahirkan atlet bertaraf dunia yang mengharumkan nama Malaysia, malah menjadi alat perpaduan rakyat serta pemacu sektor pelancongan sukan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah perbezaan antara Dasar 1Murid 1Sukan (1M1S) dengan Rancangan Integrasi Murid untuk Perpaduan (RIMUP) dalam bidang sukan sekolah?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menjelaskan 1M1S mewajibkan setiap murid menyertai sekurang-kurangnya satu jenis sukan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menjelaskan RIMUP menggalakkan kerjasama dan penyertaan sukan antara murid daripada sekolah pelbagai aliran."
          }
        ],
        "answer": "Dasar 1Murid 1Sukan mewajibkan setiap murid menyertai sekurang-kurangnya satu sukan di sekolah, manakala RIMUP menganjurkan aktiviti sukan bersama antara murid daripada sekolah pelbagai aliran."
      },
      {
        "label": "(b)",
        "q": "Namakan kejohanan sukan peringkat kebangsaan yang dianjurkan secara bergilir antara negeri di Malaysia bagi mencungkil bakat atlet muda.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan Sukan Malaysia (SUKMA)."
          }
        ],
        "answer": "Sukan Malaysia (SUKMA)."
      },
      {
        "label": "(c)",
        "q": "Namakan tokoh atlet olahraga negara yang digelar 'Manusia Terpantas Asia' serta nyatakan lokasi penganjuran perlumbaan Formula One di Malaysia.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan Dr. M. Jegathesan sebagai 'Manusia Terpantas Asia'."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan lokasi perlumbaan Formula One ialah di Litar Antarabangsa Sepang."
          }
        ],
        "answer": "Tokoh atlet: Dr. M. Jegathesan.\nLokasi Formula One: Litar Antarabangsa Sepang."
      }
    ]
  },
  {
    "id": "d6sj-B12",
    "chapterId": "malaysia_dunia",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Malaysia mengamalkan dasar luar yang aktif dengan menyertai pelbagai pertubuhan serantau dan antarabangsa seperti ASEAN, Komanwel, OIC dan Pertubuhan Bangsa-Bangsa Bersatu (PBB).",
    "parts": [
      {
        "label": "(a)",
        "q": "Namakan dua pertubuhan serantau terawal yang pernah disertai Malaysia sebelum penubuhan ASEAN pada tahun 1967.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menamakan pertubuhan serantau awal pertama iaitu SEAFET (Perjanjian Persahabatan dan Ekonomi Asia Tenggara)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan pertubuhan serantau awal kedua iaitu ASA (Persatuan Asia Tenggara)."
          }
        ],
        "answer": "SEAFET dan ASA."
      },
      {
        "label": "(b)",
        "q": "Nyatakan satu sumbangan penting Malaysia dalam Komanwel berkaitan alam sekitar dan satu sumbangan berkaitan hak asasi manusia.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan sumbangan alam sekitar ialah Deklarasi Langkawi."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan sumbangan hak asasi ialah menentang dasar Aparteid di Afrika Selatan."
          }
        ],
        "answer": "Alam sekitar: Mengisytiharkan Deklarasi Langkawi.\nHak asasi manusia: Menentang dasar Aparteid di Afrika Selatan."
      },
      {
        "label": "(c)",
        "q": "Berikan satu contoh tapak warisan di Malaysia yang mendapat pengiktirafan sebagai Tapak Warisan Dunia UNESCO.",
        "marks": 1,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan satu contoh Tapak Warisan Dunia UNESCO yang sah di Malaysia (contoh: Taman Negara Gunung Mulu, Taman Kinabalu, Bandar Bersejarah Melaka dan George Town, atau Lembah Lenggong)."
          }
        ],
        "answer": "Taman Negara Gunung Mulu (atau Taman Kinabalu / Bandar Bersejarah Melaka dan George Town / Lembah Lenggong)."
      }
    ]
  },
  {
    "id": "d6sj-C01",
    "chapterId": "pembentukan_malaysia",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Kejayaan pembentukan Malaysia pada 16 September 1963 dicapai melalui rundingan, toleransi dan permuafakatan antara pemimpin Tanah Melayu, Sarawak, Sabah serta Singapura tanpa pertumpahan darah.",
    "parts": [
      {
        "label": "(a)",
        "q": "Pada pendapat anda, mengapakah pendekatan rundingan dan peninjauan pendapat rakyat lebih berkesan berbanding penggunaan kekerasan dalam menyelesaikan pertikaian?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan rundingan dapat mengelakkan konflik, permusuhan atau peperangan yang merugikan rakyat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan peninjauan pendapat rakyat memastikan keputusan yang dicapai adil, dipersetujui bersama dan menjamin kestabilan jangka panjang."
          }
        ],
        "answer": "Pendekatan rundingan dapat mengelakkan pertumpahan darah dan permusuhan, manakala peninjauan pendapat rakyat memastikan keputusan yang dibuat adil serta dipersetujui bersama demi keamanan jangka panjang."
      },
      {
        "label": "(b)",
        "q": "Cadangkan tiga cara murid sekolah dapat meneladani semangat permuafakatan tokoh pembentukan Malaysia dalam kehidupan seharian di sekolah.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan pertama: berbincang secara baik dan menghormati pendapat rakan semasa kerja berkumpulan."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan kedua: mengelakkan pergaduhan dan menyelesaikan salah faham melalui perundingan atau bantuan guru."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Cadangan ketiga: bekerjasama dengan rakan daripada pelbagai kaum dan latar belakang untuk menjayakan aktiviti sekolah."
          }
        ],
        "answer": "1. Berbincang secara berhemah dan menghormati pendapat rakan semasa aktiviti kumpulan.\n2. Menyelesaikan salah faham melalui rundingan atau nasihat guru tanpa bergaduh.\n3. Bekerjasama dengan rakan berbilang kaum untuk menjayakan program sekolah."
      }
    ]
  },
  {
    "id": "d6sj-C02",
    "chapterId": "rukun_negara",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Amalan prinsip Rukun Negara bukan sekadar lafaz ikrar semasa perhimpunan sekolah, malah perlu dihayati dalam tingkah laku harian termasuk ketika menggunakan media sosial.",
    "parts": [
      {
        "label": "(a)",
        "q": "Bagaimanakah prinsip kelima Rukun Negara, iaitu Kesopanan dan Kesusilaan, dapat membantu murid menggunakan media sosial secara bertanggungjawab?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan murid akan menggunakan bahasa yang sopan dan tidak menghina atau membuli orang lain secara dalam talian."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan murid akan menghormati sensitiviti kaum serta agama orang lain demi menjaga keharmonian masyarakat."
          }
        ],
        "answer": "Murid akan sentiasa menggunakan bahasa yang sopan dan tidak melakukan buli siber, serta menghormati sensitiviti kaum dan agama demi mengekalkan keharmonian."
      },
      {
        "label": "(b)",
        "q": "Jelaskan tiga tindakan yang boleh anda lakukan di sekolah untuk membuktikan penghayatan terhadap prinsip Kedaulatan Undang-undang.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Tindakan pertama: mematuhi semua peraturan sekolah seperti datang tepat pada waktunya dan memakai pakaian seragam yang kemas."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Tindakan kedua: menjaga harta benda sekolah dan tidak melakukan vandalisme."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tindakan ketiga: menghormati tugas pengawas serta guru dalam menguatkuasakan disiplin sekolah."
          }
        ],
        "answer": "1. Mematuhi peraturan sekolah seperti hadir tepat pada masa dan berpakaian kemas.\n2. Menjaga kemudahan sekolah dengan baik dan tidak merosakkan harta benda awam.\n3. Menghormati guru serta pengawas yang menjalankan tugas menjaga disiplin."
      }
    ]
  },
  {
    "id": "d6sj-C03",
    "chapterId": "kaum_budaya",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Semasa musim perayaan utama di Malaysia, amalan Rumah Terbuka sering diadakan bagi meraikan jiran tetangga serta rakan-rakan daripada pelbagai kaum dan agama.",
    "parts": [
      {
        "label": "(a)",
        "q": "Mengapakah amalan mengunjungi rumah terbuka rakan berlainan kaum penting dalam memupuk perpaduan di Malaysia?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan amalan ini mengeratkan hubungan silaturahim dan kemesraan antara kaum."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan amalan ini memupuk sikap saling memahami dan menghormati budaya serta adat resam masyarakat lain."
          }
        ],
        "answer": "Amalan ini dapat mengeratkan hubungan silaturahim antara jiran serta memupuk rasa saling memahami dan menghormati budaya kaum lain."
      },
      {
        "label": "(b)",
        "q": "Nyatakan tiga adab yang perlu dipatuhi oleh murid apabila melawat rumah ibadat atau menghadiri majlis perayaan kaum lain.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Adab pertama: berpakaian sopan dan kemas sesuai dengan tempat yang dikunjungi."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Adab kedua: menjaga tingkah laku, tidak membuat bising dan mematuhi arahan penjaga tempat ibadat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Adab ketiga: tidak menyentuh barang larangan atau mempersendakan upacara keagamaan dan adat tuan rumah."
          }
        ],
        "answer": "1. Memakai pakaian yang sopan dan kemas.\n2. Menjaga ketenteraman, tidak berbuat bising dan mematuhi peraturan di rumah ibadat tersebut.\n3. Tidak mempersendakan upacara atau menyentuh peralatan keagamaan tanpa kebenaran."
      }
    ]
  },
  {
    "id": "d6sj-C04",
    "chapterId": "pemimpin_negara",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Pemimpin negara terdahulu telah menunjukkan kecekalan, kebijaksanaan dan sifat berintegriti dalam membangunkan Malaysia daripada sebuah negara baharu kepada negara yang maju dan disegani.",
    "parts": [
      {
        "label": "(a)",
        "q": "Pada pendapat anda, apakah dua ciri kepimpinan yang perlu ada pada seseorang pemimpin negara bagi memastikan rakyat hidup sejahtera?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan ciri pertama seperti amanah, jujur dan berintegriti dalam mentadbir negara."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan ciri kedua seperti adil, berpandangan jauh dan mengutamakan kebajikan semua rakyat tanpa mengira kaum."
          }
        ],
        "answer": "1. Amanah dan berintegriti dalam menjalankan tugas.\n2. Bersikap adil, berwawasan dan mengutamakan kebajikan rakyat."
      },
      {
        "label": "(b)",
        "q": "Cadangkan tiga cara murid tahun enam dapat menghargai jasa pemimpin negara dan menyumbang kepada masa depan Malaysia.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Cara pertama: belajar bersungguh-sungguh untuk menjadi warganegara yang berilmu dan berkemahiran."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Cara kedua: menjaga nama baik sekolah dan negara serta mengamalkan nilai patriotisme."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Cara ketiga: mengambil bahagian dalam sambutan Hari Kebangsaan dan Hari Malaysia serta memelihara perpaduan kaum."
          }
        ],
        "answer": "1. Belajar bersungguh-sungguh untuk membekalkan diri dengan ilmu pengetahuan.\n2. Mengamalkan semangat patriotisme serta menjaga nama baik sekolah dan negara.\n3. Memelihara perpaduan kaum dan menyertai sambutan Hari Kebangsaan dengan penuh bangga."
      }
    ]
  },
  {
    "id": "d6sj-C05",
    "chapterId": "ekonomi_sukan",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Kerajaan giat menggalakkan Kempen Beli Barangan Buatan Malaysia serta penglibatan murid dalam aktiviti sukan berpasukan demi kemajuan ekonomi dan perpaduan negara.",
    "parts": [
      {
        "label": "(a)",
        "q": "Terangkan dua kebaikan sekiranya rakyat Malaysia mengutamakan pembelian barangan keluaran tempatan berbanding barangan import.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan kebaikan pertama seperti membantu meningkatkan pendapatan pengusaha tempatan dan ekonomi negara."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan kebaikan kedua seperti mewujudkan lebih banyak peluang pekerjaan kepada rakyat tempatan dan mengurangkan pengaliran wang ke luar negara."
          }
        ],
        "answer": "1. Meningkatkan pendapatan pengusaha tempatan serta merancakkan ekonomi negara.\n2. Mewujudkan lebih banyak peluang pekerjaan dan mengurangkan pengaliran wang keluar."
      },
      {
        "label": "(b)",
        "q": "Bagaimanakah penyertaan murid dalam sukan berpasukan seperti bola jaring atau hoki di sekolah dapat memupuk semangat perpaduan dan patriotisme?",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan pemain berbilang kaum perlu bekerjasama dan berkomunikasi sebagai satu pasukan."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan sukan mendidik murid menerima kekalahan secara berhemah dan menghormati pihak lawan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan kejayaan atlet berbilang kaum mewakili sekolah atau negara melahirkan rasa bangga dan cinta akan negara."
          }
        ],
        "answer": "1. Melatih murid berbilang kaum bekerjasama dan saling menyokong demi mencapai kemenangan bersama.\n2. Memupuk semangat kesukanan serta sikap menghormati rakan dan pihak lawan.\n3. Melahirkan rasa bangga dan cinta akan negara apabila berjuang mengharumkan nama sekolah atau Malaysia."
      }
    ]
  },
  {
    "id": "d6sj-C06",
    "chapterId": "malaysia_dunia",
    "part": "C",
    "level": "tinggi",
    "status": "verified",
    "stem": "Pengiktirafan tapak warisan negara oleh UNESCO dan peranan aktif Malaysia dalam pertubuhan antarabangsa seperti ASEAN serta Komanwel meningkatkan imej negara di mata dunia.",
    "parts": [
      {
        "label": "(a)",
        "q": "Mengapakah rakyat Malaysia perlu memelihara tapak warisan yang diiktiraf oleh UNESCO seperti Taman Kinabalu dan Bandar Bersejarah Melaka?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan pemeliharaan mengekalkan khazanah alam dan sejarah untuk tatapan generasi akan datang."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tapak warisan tersebut menarik pelancong asing dan menaikkan nama baik Malaysia di peringkat antarabangsa."
          }
        ],
        "answer": "Pemeliharaan tapak warisan dapat mengekalkan khazanah sejarah serta alam semula jadi untuk generasi akan datang, di samping menarik pelancong dan mengharumkan nama negara."
      },
      {
        "label": "(b)",
        "q": "Cadangkan tiga amalan mesra alam yang boleh dilakukan oleh murid di sekolah sejajar dengan semangat Deklarasi Langkawi dalam melindungi alam sekitar.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Amalan pertama: mengasingkan dan mengitar semula sampah seperti kertas, plastik dan tin aluminium."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Amalan kedua: menjimatkan penggunaan air dan elektrik di bilik darjah serta tandas sekolah."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Amalan ketiga: menyertai kempen menanam pokok dan menjaga kebersihan kawasan sekolah."
          }
        ],
        "answer": "1. Mengamalkan kitar semula bahan terpakai seperti kertas dan botol plastik.\n2. Menjimatkan penggunaan air dan tenaga elektrik di sekolah.\n3. Menyertai aktiviti penanaman pokok dan gotong-royong membersihkan kawasan sekolah."
      }
    ]
  }
];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});
