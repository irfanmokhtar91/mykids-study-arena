/**
 * Darjah 6 Sejarah variant question pool (KSSR Semakan 2017, Units 1-10).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, short explanation, and textbook page ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  App.Pools.d6.sejarah = [
    {
      "id": "d6_sej_u1_s1_01",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "L",
      "q": "Siapakah pengarah Syarikat Borneo Utara British yang mengemukakan cadangan awal pada tahun 1887 untuk menyatukan Sarawak, Sabah, Negeri-negeri Melayu dan Negeri-negeri Selat?",
      "options": [
        "Sir Anthony Abell",
        "Lord Cameron Cobbold",
        "Lord Brassey",
        "Malcolm MacDonald"
      ],
      "correctIndex": 2,
      "explanation": "Lord Brassey yang berkhidmat sebagai Pengarah Syarikat Borneo Utara British mencadangkan penggabungan wilayah Borneo dengan Tanah Melayu dan Negeri-negeri Selat pada tahun 1887.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_sej_u1_s1_02",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "L",
      "q": "Apakah nama konsep penggabungan yang diperjuangkan oleh Ibrahim Haji Yaakob dan Harun Aminurrashid pada tahun 1938?",
      "options": [
        "Negeri-negeri Selat",
        "Melayu Raya",
        "Persekutuan Borneo",
        "Gabungan Asia Tenggara"
      ],
      "correctIndex": 1,
      "explanation": "Pada tahun 1938, Ibrahim Haji Yaakob dan Harun Aminurrashid memperjuangkan idea penyatuan wilayah melalui konsep Melayu Raya.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_sej_u1_s1_03",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "L",
      "q": "Pada tahun 1955, Tunku Abdul Rahman Putra Al-Haj mencadangkan empat wilayah menyertai Persekutuan Tanah Melayu. Wilayah manakah yang TIDAK termasuk dalam cadangan beliau?",
      "options": [
        "Indonesia",
        "Sarawak",
        "Singapura",
        "Brunei"
      ],
      "correctIndex": 0,
      "explanation": "Dalam cadangan tahun 1955 oleh Tunku Abdul Rahman, hanya Sarawak, Sabah, Singapura dan Brunei yang diusulkan menyertai Persekutuan Tanah Melayu, bukan Indonesia.",
      "ref": "Unit 1, m/s 4"
    },
    {
      "id": "d6_sej_u1_s1_04",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "L",
      "q": "Pada tahun 1951, seorang Gabenor Jeneral British di Asia Tenggara telah berbincang dengan pemimpin tempatan tentang rancangan penggabungan wilayah. Siapakah tokoh tersebut?",
      "options": [
        "Malcolm MacDonald",
        "Lord Brassey",
        "Sir David Watherston",
        "Sir Anthony Abell"
      ],
      "correctIndex": 0,
      "explanation": "Malcolm MacDonald selaku Gabenor Jeneral British di Asia Tenggara pada tahun 1951 mengadakan beberapa rundingan bersama pemimpin Tanah Melayu, Sarawak, Sabah dan Singapura.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_sej_u1_s1_05",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "L",
      "q": "Mengapakah faktor ancaman komunis di Singapura dan Sarawak mendorong penubuhan Malaysia?",
      "options": [
        "Sarawak merancang membentuk pakatan pertahanan berasingan dengan negara jiran",
        "Pihak British mahu menyerahkan seluruh pentadbiran ketenteraan kepada Singapura",
        "Pengalaman Persekutuan Tanah Melayu dapat membantu membendung ancaman tersebut",
        "Singapura memerlukan bantuan kewangan untuk membina pelabuhan perdagangan baharu"
      ],
      "correctIndex": 2,
      "explanation": "Persekutuan Tanah Melayu berpengalaman menangani ancaman komunis, jadi penyatuan dalam Malaysia membolehkan ancaman di Singapura dan Sarawak dibendung bersama.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_sej_u1_s1_06",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "M",
      "q": "Susun urutan tokoh yang mengemukakan idea awal penubuhan Malaysia daripada yang paling awal hingga yang paling akhir.",
      "options": [
        "Lord Brassey -> Malcolm MacDonald -> Tunku Abdul Rahman -> Ibrahim Haji Yaakob",
        "Malcolm MacDonald -> Lord Brassey -> Ibrahim Haji Yaakob -> Tunku Abdul Rahman",
        "Ibrahim Haji Yaakob -> Lord Brassey -> Tunku Abdul Rahman -> Malcolm MacDonald",
        "Lord Brassey -> Ibrahim Haji Yaakob -> Malcolm MacDonald -> Tunku Abdul Rahman"
      ],
      "correctIndex": 3,
      "explanation": "Susunan tahun yang tepat ialah Lord Brassey (1887), diikuti Ibrahim Haji Yaakob bersama Harun Aminurrashid (1938), Malcolm MacDonald (1951) dan Tunku Abdul Rahman (1955).",
      "ref": "Unit 1, m/s 4-5"
    },
    {
      "id": "d6_sej_u1_s1_07",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "M",
      "q": "Mengapakah penggabungan antara Persekutuan Tanah Melayu dengan Singapura sahaja dianggap kurang wajar dari sudut kependudukan?",
      "options": [
        "Pihak British melarang penyertaan Singapura tanpa kelulusan Filipina",
        "Kemasukan Singapura semata-mata akan mewujudkan ketidakseimbangan antara kaum",
        "Jumlah penduduk Persekutuan Tanah Melayu terlalu sedikit berbanding Singapura",
        "Penduduk Singapura menolak sebarang kerjasama ekonomi dengan Tanah Melayu"
      ],
      "correctIndex": 1,
      "explanation": "Penggabungan dengan Singapura sahaja akan mengakibatkan ketidakseimbangan kaum, justeru penyertaan Sarawak, Sabah dan Brunei diperlukan untuk mengimbangi jumlah penduduk.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_sej_u1_s1_08",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "M",
      "q": "Apakah kesan utama yang ingin dicapai menerusi matlamat membangunkan sosioekonomi dalam pembentukan Malaysia?",
      "options": [
        "Mengurangkan peranan sektor perdagangan maritim di Selat Melaka",
        "Menghalang campur tangan luar dalam pilihan raya peringkat negeri",
        "Mempercepat kemajuan prasarana serta meningkatkan taraf hidup rakyat",
        "Menyeragamkan sistem pemerintahan beraja di semua negeri Borneo"
      ],
      "correctIndex": 2,
      "explanation": "Pembentukan Malaysia bermatlamat mempercepat pembangunan infrastruktur, sosial dan ekonomi agar taraf hidup penduduk dapat ditingkatkan.",
      "ref": "Unit 1, m/s 7"
    },
    {
      "id": "d6_sej_u1_s1_09",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "H",
      "q": "Bagaimanakah gagasan Melayu Raya pada tahun 1938 berbeza daripada cadangan Tunku Abdul Rahman pada tahun 1955?",
      "options": [
        "Melayu Raya hanya melibatkan penyatuan Tanah Melayu dengan Negeri-negeri Selat",
        "Cadangan Tunku Abdul Rahman memasukkan seluruh Kepulauan Indonesia ke dalam persekutuan",
        "Cadangan tahun 1955 dikemukakan oleh pegawai kanan Syarikat Borneo Utara British",
        "Melayu Raya turut meliputi Kalimantan, Filipina dan Indonesia selain Tanah Melayu dan Singapura"
      ],
      "correctIndex": 3,
      "explanation": "Konsep Melayu Raya merangkumi kawasan lebih luas iaitu Tanah Melayu, Singapura, seluruh Kalimantan, Kepulauan Filipina dan Kepulauan Indonesia, manakala cadangan 1955 hanya membabitkan Tanah Melayu, Sarawak, Sabah, Singapura dan Brunei.",
      "ref": "Unit 1, m/s 4-5"
    },
    {
      "id": "d6_sej_u1_s1_10",
      "unit": "u1",
      "skill": "u1_s1",
      "diff": "H",
      "q": "Seorang murid diminta merumuskan faedah penggabungan kepada wilayah Borneo dan Singapura berdasarkan sebab-sebab pembentukan Malaysia. Rumusan manakah yang PALING tepat?",
      "options": [
        "Wilayah terbabit kekal di bawah pentadbiran British sehingga akhir abad ke-20",
        "Hanya negeri di Semenanjung menikmati kemajuan hasil sumber asli serantau",
        "Wilayah berkenaan dapat mempercepat kemerdekaan sambil menikmati kemajuan infrastruktur dan keselamatan",
        "Wilayah tersebut dibenarkan menubuhkan angkatan tentera berasingan daripada kerajaan pusat"
      ],
      "correctIndex": 2,
      "explanation": "Melalui pembentukan Malaysia, Sarawak, Sabah, Singapura dan Brunei dapat mempercepat kemerdekaan di samping menikmati jaminan keselamatan serta pembangunan infrastruktur, sosial dan ekonomi.",
      "ref": "Unit 1, m/s 6-7"
    },
    {
      "id": "d6_sej_u1_s2_01",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "L",
      "q": "Di lokasi manakah Tunku Abdul Rahman mengumumkan cadangan pembentukan Malaysia buat julung-julung kalinya?",
      "options": [
        "City Hall, Singapura",
        "Hotel Adelphi, Singapura",
        "Bangunan Parlimen, Kuala Lumpur",
        "Dewan Undangan Negeri, Kuching"
      ],
      "correctIndex": 1,
      "explanation": "Tunku Abdul Rahman membuat pengumuman mengenai cadangan pembentukan Malaysia di Hotel Adelphi, Singapura.",
      "ref": "Unit 1, m/s 8"
    },
    {
      "id": "d6_sej_u1_s2_02",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "L",
      "q": "Apakah tujuan utama Jawatankuasa Setia Kawan Malaysia (JSKM) ditubuhkan?",
      "options": [
        "Menjalankan pemungutan suara rakyat di seluruh pulau Singapura",
        "Menggubal perlembagaan baharu bersama wakil kerajaan Indonesia",
        "Meyakinkan para pemimpin Sarawak dan Sabah mengenai penubuhan Malaysia",
        "Menentukan tarikh pembubaran Syarikat Borneo Utara British"
      ],
      "correctIndex": 2,
      "explanation": "JSKM ditubuhkan bagi memberikan keyakinan kepada pemimpin-pemimpin di Sarawak dan Sabah tentang rancangan pembentukan Malaysia.",
      "ref": "Unit 1, m/s 8"
    },
    {
      "id": "d6_sej_u1_s2_03",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "L",
      "q": "Apakah hasil dapatan laporan Suruhanjaya Cobbold mengenai sokongan penduduk Sarawak dan Sabah terhadap pembentukan Malaysia?",
      "options": [
        "Semua penduduk menolak cadangan tersebut",
        "Satu pertiga daripada penduduk menyokong",
        "Dua pertiga daripada penduduk menyokong",
        "Separuh daripada penduduk bersetuju"
      ],
      "correctIndex": 2,
      "explanation": "Laporan yang diserahkan oleh Suruhanjaya Cobbold kepada pihak British dan Persekutuan Tanah Melayu mendapati dua pertiga penduduk Sarawak dan Sabah menyokong penubuhan Malaysia.",
      "ref": "Unit 1, m/s 8"
    },
    {
      "id": "d6_sej_u1_s2_04",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "L",
      "q": "Bilakah Perjanjian Malaysia dimeterai di London?",
      "options": [
        "16 September 1965",
        "9 Julai 1963",
        "16 September 1963",
        "9 Julai 1961"
      ],
      "correctIndex": 1,
      "explanation": "Majlis menandatangani Perjanjian Malaysia di London berlangsung pada 9 Julai 1963 sebelum pemasyhuran rasmi pada 16 September 1963.",
      "ref": "Unit 1, m/s 9"
    },
    {
      "id": "d6_sej_u1_s2_05",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "L",
      "q": "Apakah nama misi yang diwujudkan oleh Pertubuhan Bangsa-Bangsa Bersatu (PBB) untuk mengesahkan persetujuan penduduk Sarawak dan Sabah?",
      "options": [
        "United Nations Malaysia Mission (UNMM)",
        "Jawatankuasa Setia Kawan Malaysia (JSKM)",
        "Suruhanjaya Cobbold",
        "Majlis Perundingan Malaysia (MPM)"
      ],
      "correctIndex": 0,
      "explanation": "PBB menubuhkan United Nations Malaysia Mission (UNMM) bagi mengesahkan secara rasmi persetujuan rakyat Sarawak dan Sabah terhadap penubuhan Malaysia.",
      "ref": "Unit 1, m/s 9"
    },
    {
      "id": "d6_sej_u1_s2_06",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "M",
      "q": "Apakah fungsi jawatankuasa JAK yang dianggotai oleh wakil British, Persekutuan Tanah Melayu, Sarawak dan Sabah?",
      "options": [
        "Menyediakan rangka perlembagaan supaya hak dan kepentingan Sarawak serta Sabah terpelihara",
        "Mengetuai misi penerangan ke Filipina untuk meredakan ketegangan",
        "Menilai pendapat penduduk Singapura menerusi pungutan suara rakyat",
        "Menyelaras bantuan keselamatan bagi menangani konfrontasi negara jiran"
      ],
      "correctIndex": 0,
      "explanation": "Mesyuarat persediaan JAK diadakan untuk merangka perlembagaan yang dapat melindungi kepentingan negeri Sarawak dan Sabah dalam persekutuan baharu.",
      "ref": "Unit 1, m/s 9"
    },
    {
      "id": "d6_sej_u1_s2_07",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "M",
      "q": "Bagaimanakah persetujuan rakyat Singapura diperoleh selepas rundingan antara Persekutuan Tanah Melayu dengan Singapura dijalankan?",
      "options": [
        "Melalui pengutipan memorandum bertulis oleh anggota Suruhanjaya Cobbold",
        "Melalui pengisytiharan terus oleh pegawai British tanpa merujuk kepada penduduk",
        "Melalui penilaian misi khas Pertubuhan Bangsa-Bangsa Bersatu di City Hall",
        "Melalui referendum iaitu pemungutan suara rakyat yang memaparkan sokongan penduduk"
      ],
      "correctIndex": 3,
      "explanation": "Selepas rundingan antara kedua-dua pihak, referendum diadakan di Singapura dan keputusannya membuktikan rakyat Singapura bersetuju menyertai Malaysia.",
      "ref": "Unit 1, m/s 9"
    },
    {
      "id": "d6_sej_u1_s2_09",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "H",
      "q": "Apakah perbezaan fungsi antara Suruhanjaya Cobbold dengan United Nations Malaysia Mission (UNMM) dalam proses pembentukan Malaysia?",
      "options": [
        "Suruhanjaya Cobbold mengendalikan referendum Singapura, manakala UNMM mengetuai lawatan ke Sarawak",
        "Suruhanjaya Cobbold meninjau reaksi awal penduduk Sarawak dan Sabah, manakala UNMM mengesahkan persetujuan mereka sebelum pemasyhuran",
        "Suruhanjaya Cobbold merangka perlembagaan negeri, manakala UNMM memujuk Brunei menyertai Malaysia",
        "Suruhanjaya Cobbold menandatangani perjanjian di London, manakala UNMM melantik pemimpin JSKM"
      ],
      "correctIndex": 1,
      "explanation": "Suruhanjaya Cobbold dihantar lebih awal untuk meninjau reaksi penduduk Sarawak dan Sabah, manakala UNMM ditubuhkan oleh PBB selepas Perjanjian Malaysia untuk mengesahkan persetujuan penduduk kedua-dua negeri tersebut.",
      "ref": "Unit 1, m/s 8-9"
    },
    {
      "id": "d6_sej_u1_s2_10",
      "unit": "u1",
      "skill": "u1_s2",
      "diff": "H",
      "q": "Dalam satu projek sejarah, murid diminta menyenaraikan ahli Suruhanjaya Cobbold. Kumpulan tokoh manakah yang kesemuanya menganggotai suruhanjaya itu?",
      "options": [
        "Lord Cameron Cobbold, Tun Muhammad Ghazali Shafie dan Tan Sri Wong Pow Nee",
        "Tunku Abdul Rahman, Tun Abdul Razak Hussein dan Tun V. T. Sambanthan",
        "Sir Anthony Abell, Tun Datu Mustapha dan Tun Temenggung Jugah",
        "Sir David Watherston, Lee Kuan Yew dan Donald Stephens"
      ],
      "correctIndex": 0,
      "explanation": "Lima ahli Suruhanjaya Cobbold ialah Lord Cameron Cobbold, Sir David Watherston, Sir Anthony Abell, Tun Muhammad Ghazali Shafie dan Tan Sri Wong Pow Nee.",
      "ref": "Unit 1, m/s 8"
    },
    {
      "id": "d6_sej_u1_s3_01",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "L",
      "q": "Selain Persekutuan Tanah Melayu, wilayah manakah yang bergabung membentuk negara Malaysia pada 16 September 1963?",
      "options": [
        "Sabah, Singapura dan Brunei",
        "Sarawak, Sabah dan Singapura",
        "Brunei, Singapura dan Kalimantan",
        "Sarawak, Sabah dan Brunei"
      ],
      "correctIndex": 1,
      "explanation": "Malaysia ditubuhkan pada 16 September 1963 menerusi gabungan Persekutuan Tanah Melayu, Sarawak, Sabah dan Singapura, manakala Brunei menolak penyertaan.",
      "ref": "Unit 1, m/s 15"
    },
    {
      "id": "d6_sej_u1_s3_02",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "L",
      "q": "Apakah peristiwa yang berlaku berkaitan penyertaan Singapura dalam Malaysia pada tahun 1965?",
      "options": [
        "Singapura bergabung semula dengan Brunei",
        "Singapura berpisah daripada Malaysia",
        "Singapura menganjurkan referendum rakyat",
        "Singapura menandatangani Perjanjian Malaysia"
      ],
      "correctIndex": 1,
      "explanation": "Singapura menjadi sebahagian daripada Malaysia ketika penubuhannya pada tahun 1963, namun berpisah daripada Malaysia pada tahun 1965.",
      "ref": "Unit 1, m/s 15"
    },
    {
      "id": "d6_sej_u1_s3_03",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "L",
      "q": "Siapakah pemimpin People's Action Party (PAP) yang menyokong pembentukan Malaysia bagi menyekat ideologi komunis di Singapura?",
      "options": [
        "Tan Sri Wong Pow Nee",
        "Donald Stephens",
        "Lee Kuan Yew",
        "Tun Abdul Razak Hussein"
      ],
      "correctIndex": 2,
      "explanation": "Lee Kuan Yew yang mengetuai PAP menyokong idea pembentukan Malaysia untuk membendung penyebaran ideologi komunis di Singapura.",
      "ref": "Unit 1, m/s 11"
    },
    {
      "id": "d6_sej_u1_s3_04",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "L",
      "q": "Apakah sumbangan penting Donald Stephens (Tun Muhammad Fuad Stephens), pemimpin UNKO, dalam usaha merealisasikan pembentukan Malaysia?",
      "options": [
        "Mengetuai delegasi Persekutuan Tanah Melayu di London",
        "Meneliti draf laporan Suruhanjaya Cobbold bersama Jawatankuasa Kabinet",
        "Membentuk gabungan Perikatan Sarawak untuk menyokong Malaysia",
        "Mencadangkan penubuhan Jawatankuasa Setia Kawan Malaysia (JSKM)"
      ],
      "correctIndex": 3,
      "explanation": "Donald Stephens selaku pemimpin United National Kadazan Organization (UNKO) mencadangkan penubuhan JSKM bagi menjayakan rancangan pembentukan Malaysia.",
      "ref": "Unit 1, m/s 12"
    },
    {
      "id": "d6_sej_u1_s3_05",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "L",
      "q": "Selain jawatan Timbalan Perdana Menteri Persekutuan Tanah Melayu, apakah peranan Tun Abdul Razak Hussein dalam proses pembentukan Malaysia?",
      "options": [
        "Menggalas peranan dalam jawatankuasa JAK",
        "Menjadi ketua bagi parti SNAP di Sarawak",
        "Mewakili parti MIC dalam Jawatankuasa Kabinet",
        "Menganggotai Suruhanjaya Cobbold di Sarawak"
      ],
      "correctIndex": 0,
      "explanation": "Tun Abdul Razak Hussein yang merupakan Timbalan Perdana Menteri dan pemimpin UMNO turut memainkan peranan dalam jawatankuasa JAK.",
      "ref": "Unit 1, m/s 10"
    },
    {
      "id": "d6_sej_u1_s3_06",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "M",
      "q": "Padanan manakah yang TEPAT antara tokoh dengan parti politik yang dipimpinnya?",
      "options": [
        "Tun Datu Mustapha Datu Harun — PANAS",
        "Tun Temenggung Jugah anak Barieng — PESAKA",
        "Datu Bandar Abang Haji Mustapha — UNKO",
        "Tan Sri Datuk Amar Stephen Kalong Ningkan — USNO"
      ],
      "correctIndex": 1,
      "explanation": "Tun Temenggung Jugah anak Barieng ialah pemimpin Parti Pesaka Anak Sarawak (PESAKA), manakala Stephen Kalong Ningkan memimpin SNAP, Datu Bandar Abang Haji Mustapha memimpin PANAS dan Tun Datu Mustapha memimpin USNO.",
      "ref": "Unit 1, m/s 10-12"
    },
    {
      "id": "d6_sej_u1_s3_07",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "M",
      "q": "Bagaimanakah peranan Tun V. T. Sambanthan berbeza daripada peranan Tan Sri Wong Pow Nee berkaitan Suruhanjaya Cobbold?",
      "options": [
        "Tun V. T. Sambanthan menjadi ahli suruhanjaya dari Sabah, manakala Tan Sri Wong Pow Nee menandatangani perjanjian di London",
        "Tun V. T. Sambanthan memimpin parti MCA, manakala Tan Sri Wong Pow Nee memimpin parti MIC",
        "Tun V. T. Sambanthan meneliti draf laporan suruhanjaya bersama Kabinet, manakala Tan Sri Wong Pow Nee menemu ramah penduduk Sarawak dan Sabah sebagai ahli suruhanjaya",
        "Tun V. T. Sambanthan mencadangkan JSKM, manakala Tan Sri Wong Pow Nee mengetuai delegasi Tanah Melayu"
      ],
      "correctIndex": 2,
      "explanation": "Tan Sri Wong Pow Nee (MCA) bertugas sebagai wakil Tanah Melayu dalam Suruhanjaya Cobbold yang menemu ramah penduduk serta meneliti memorandum, manakala Tun V. T. Sambanthan (MIC) meneliti draf laporan suruhanjaya itu bersama Jawatankuasa Kabinet.",
      "ref": "Unit 1, m/s 13"
    },
    {
      "id": "d6_sej_u1_s3_08",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "M",
      "q": "Siapakah tokoh yang mengisytiharkan dan menandatangani dokumen Pemasyhuran Malaysia yang berkuat kuasa pada 16 September 1963?",
      "options": [
        "Tunku Abdul Rahman Putra Al-Haj",
        "Tun Datu Mustapha Datu Harun",
        "Tun Muhammad Ghazali Shafie",
        "Datu Bandar Abang Haji Mustapha"
      ],
      "correctIndex": 0,
      "explanation": "Tunku Abdul Rahman Putra Al-Haj selaku Perdana Menteri Malaysia merupakan tokoh yang mengisytiharkan serta menandatangani dokumen Pemasyhuran Malaysia.",
      "ref": "Unit 1, m/s 14"
    },
    {
      "id": "d6_sej_u1_s3_09",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "H",
      "q": "Perhatikan dua kumpulan tokoh di bawah:\n- Kumpulan X: Tun Datu Mustapha Datu Harun, Donald Stephens\n- Kumpulan Y: Tan Sri Datuk Amar Stephen Kalong Ningkan, Datu Bandar Abang Haji Mustapha\nApakah perbezaan utama antara Kumpulan X dengan Kumpulan Y?",
      "options": [
        "Kumpulan X mewakili Persekutuan Tanah Melayu dalam Suruhanjaya Cobbold, manakala Kumpulan Y mewakili Singapura dalam rundingan perlembagaan",
        "Kumpulan X hanya terlibat selepas pemisahan Singapura, manakala Kumpulan Y mengetuai delegasi PBB",
        "Kumpulan X membantah pembentukan Malaysia pada awalnya, manakala Kumpulan Y mengadakan pungutan suara rakyat",
        "Kumpulan X ialah pemimpin dari Sabah yang menerangkan penubuhan Malaysia dan mencadangkan JSKM, manakala Kumpulan Y ialah pemimpin dari Sarawak yang menggerakkan sokongan tempatan"
      ],
      "correctIndex": 3,
      "explanation": "Tun Datu Mustapha (USNO) dan Donald Stephens (UNKO) ialah tokoh penting dari Sabah, sedangkan Stephen Kalong Ningkan (SNAP) dan Datu Bandar Abang Haji Mustapha (PANAS) ialah pemimpin dari Sarawak.",
      "ref": "Unit 1, m/s 11-12"
    },
    {
      "id": "d6_sej_u1_s3_10",
      "unit": "u1",
      "skill": "u1_s3",
      "diff": "H",
      "q": "Berdasarkan kandungan dokumen Pemasyhuran Malaysia, apakah perubahan besar terhadap kedudukan Sabah, Sarawak dan Singapura mulai 16 September 1963?",
      "options": [
        "Ketiga-tiga negeri itu tidak lagi menjadi jajahan takluk British dan bersatu dalam Malaysia yang merdeka serta berdaulat",
        "Ketiga-tiga negeri itu membentuk sebuah persekutuan berasingan bersama Brunei di Borneo",
        "Ketiga-tiga negeri itu kekal berada di bawah naungan undang-undang British buat sementara waktu",
        "Ketiga-tiga negeri itu menyerahkan kuasa pentadbiran sepenuhnya kepada kerajaan Singapura"
      ],
      "correctIndex": 0,
      "explanation": "Dokumen Pemasyhuran Malaysia menegaskan bahawa mulai 16 September 1963, Sabah, Sarawak dan Singapura tamat menjadi jajahan takluk Baginda Queen serta disekutukan dengan Persekutuan Tanah Melayu menjadi negara Malaysia yang berdaulat.",
      "ref": "Unit 1, m/s 14"
    },
    {
      "id": "d6_sej_u1_s4_01",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "L",
      "q": "Apakah dua buah negara jiran yang menyuarakan bantahan terhadap usaha pembentukan Malaysia?",
      "options": [
        "Indonesia dan Filipina",
        "Indonesia dan Thailand",
        "Filipina dan Brunei",
        "Brunei dan Singapura"
      ],
      "correctIndex": 0,
      "explanation": "Proses pembentukan Malaysia berdepan tentangan luar daripada negara Indonesia dan Filipina sebelum ketegangan itu berjaya dipulihkan.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_02",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "L",
      "q": "Apakah tindakan yang diisytiharkan oleh Indonesia terhadap Malaysia antara tahun 1963 hingga tahun 1966?",
      "options": [
        "Referendum",
        "Pemasyhuran",
        "Konfrontasi",
        "Permuafakatan"
      ],
      "correctIndex": 2,
      "explanation": "Dari tahun 1963 hingga tahun 1966, Indonesia melancarkan konfrontasi terhadap Malaysia.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_03",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "L",
      "q": "Dalam sejarah pembentukan Malaysia, apakah maksud perkataan \"konfrontasi\"?",
      "options": [
        "Kerjasama ekonomi antara negara berjiran",
        "Pertentangan terhadap sesuatu pihak",
        "Pemungutan suara rakyat untuk menentukan status wilayah",
        "Rundingan damai bagi menamatkan pertikaian sempadan"
      ],
      "correctIndex": 1,
      "explanation": "Konfrontasi membawa maksud pertentangan dengan sesuatu pihak, seperti sikap penentangan Indonesia terhadap penubuhan Malaysia.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_04",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "L",
      "q": "Parti politik manakah di Sarawak yang menentang cadangan pembentukan Malaysia?",
      "options": [
        "Parti Negara Sarawak (PANAS)",
        "Parti Pesaka Anak Sarawak (PESAKA)",
        "Sarawak United People's Party (SUPP)",
        "Sarawak National Party (SNAP)"
      ],
      "correctIndex": 2,
      "explanation": "Sarawak United People's Party (SUPP) menolak rancangan pembentukan Malaysia, berbeza dengan parti seperti PESAKA, PANAS dan SNAP yang menyokongnya.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_05",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "L",
      "q": "Mengapakah kerajaan Filipina menentang penubuhan Malaysia?",
      "options": [
        "Filipina mahu menyatukan Sarawak dengan Kepulauan Indonesia",
        "Filipina mendakwa Sabah merupakan sebahagian daripada wilayah negaranya",
        "Filipina tidak dijemput menyertai mesyuarat Jawatankuasa Setia Kawan Malaysia",
        "Filipina menganggap perjanjian di London tidak sah dari segi perlembagaan"
      ],
      "correctIndex": 1,
      "explanation": "Filipina menimbulkan cabaran terhadap pembentukan Malaysia apabila negara itu mendakwa Sabah sebagai sebahagian daripada wilayahnya.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_06",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "M",
      "q": "Apakah sebab utama Sarawak United People's Party (SUPP) menolak rancangan penyertaan ke dalam Malaysia?",
      "options": [
        "Parti itu mahu menubuhkan sebuah persekutuan berasingan meliputi Brunei, Sarawak dan Borneo Utara",
        "Parti itu bersetuju supaya wilayah Sarawak diserahkan kepada pentadbiran Indonesia",
        "Parti itu berpendapat Tanah Melayu terlalu jauh untuk menghantar bantuan ekonomi",
        "Parti itu berhasrat mengekalkan Sarawak di bawah pentadbiran Syarikat Borneo Utara British"
      ],
      "correctIndex": 0,
      "explanation": "SUPP menolak rancangan pembentukan Malaysia kerana berkeinginan menubuhkan sebuah persekutuan tersendiri yang terdiri daripada Brunei, Sarawak dan Borneo Utara (Sabah).",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_07",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "M",
      "q": "Mengapakah Indonesia mengisytiharkan konfrontasi terhadap Malaysia pada tahun 1963?",
      "options": [
        "Indonesia mahu menubuhkan gabungan ketenteraan bersama Filipina di Sabah",
        "Indonesia menuntut supaya Singapura kekal sebagai tanah jajahan British",
        "Indonesia membantah penyertaan Brunei dalam Perjanjian Malaysia di London",
        "Indonesia beranggapan penubuhan Malaysia mengancam kedudukan negaranya"
      ],
      "correctIndex": 3,
      "explanation": "Indonesia mengambil pendirian bermusuhan dan mengisytiharkan konfrontasi kerana berpandangan bahawa pembentukan Malaysia mengancam kedudukan negaranya.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_08",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "M",
      "q": "Bagaimanakah Tunku Abdul Rahman bersama para pemimpin negara menangani cabaran keraguan masyarakat terhadap rancangan penubuhan Malaysia?",
      "options": [
        "Berusaha memberikan penerangan dan meyakinkan masyarakat tentang matlamat pembentukan Malaysia",
        "Menguatkuasakan larangan perbincangan awam di seluruh Sarawak dan Sabah",
        "Menangguhkan semua mesyuarat Jawatankuasa Setia Kawan Malaysia sehingga tahun 1966",
        "Meminta Filipina bertindak sebagai pengantara dengan parti politik di Borneo"
      ],
      "correctIndex": 0,
      "explanation": "Tunku Abdul Rahman serta pemimpin tempatan giat berusaha menerangkan dan meyakinkan masyarakat akan tujuan sebenar pembentukan Malaysia, termasuk melalui mesyuarat JSKM.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u1_s4_09",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "H",
      "q": "Bandingkan bentuk tentangan daripada SUPP dengan bantahan daripada Indonesia dan Filipina. Pernyataan manakah yang PALING tepat?",
      "options": [
        "Ketiga-tiga pihak tersebut melancarkan konfrontasi bersenjata secara serentak sehingga tahun 1966",
        "Penolakan SUPP ialah cabaran luaran oleh negara jiran, manakala Indonesia dan Filipina ialah parti politik di Sarawak",
        "Penolakan SUPP ialah cabaran dalaman yang mahukan persekutuan Borneo sendiri, manakala Indonesia dan Filipina ialah cabaran luaran berhubung ancaman kedudukan dan tuntutan wilayah",
        "SUPP menentang Malaysia kerana menuntut Sabah, manakala Filipina ingin menggabungkan Brunei, Sarawak dan Borneo Utara"
      ],
      "correctIndex": 2,
      "explanation": "Cabaran pembentukan Malaysia merangkumi pihak dalaman dan luaran: SUPP merupakan parti tempatan Sarawak yang menginginkan persekutuan Brunei, Sarawak dan Borneo Utara, manakala Indonesia serta Filipina ialah negara luar dengan isu kedudukan serantau dan tuntutan Sabah.",
      "ref": "Unit 1, m/s 16-17"
    },
    {
      "id": "d6_sej_u1_s4_10",
      "unit": "u1",
      "skill": "u1_s4",
      "diff": "H",
      "q": "Peribahasa \"Carik-carik bulu ayam, akhirnya bercantum juga\" digunakan dalam menghuraikan sejarah hubungan Malaysia dengan Indonesia serta Filipina. Apakah iktibar utama di sebalik ungkapan ini?",
      "options": [
        "Negara yang berjiran wajar memutuskan hubungan diplomatik secara kekal selepas berlakunya perselisihan",
        "Persengketaan serantau hanya boleh diselesaikan sekiranya satu negara menyerahkan wilayahnya kepada pihak lawan",
        "Sebarang pertikaian antarabangsa akan berakhir sendiri tanpa memerlukan rundingan atau persefahaman",
        "Permuafakatan antara pemimpin mampu memulihkan hubungan tegang serta memupuk kerjasama demi kemakmuran serantau"
      ],
      "correctIndex": 3,
      "explanation": "Walaupun berlaku ketegangan pada peringkat awal, permuafakatan para pemimpin memulihkan semula hubungan antara Malaysia, Indonesia dan Filipina demi kemakmuran dan perpaduan serantau.",
      "ref": "Unit 1, m/s 16"
    },
    {
      "id": "d6_sej_u2_s1_01",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "L",
      "q": "Berdasarkan catatan sejarah Kedah, perkataan 'Kheddah' yang dikaitkan dengan nama negeri itu membawa maksud apa?",
      "options": [
        "Cawan berkaki",
        "Kelapa hanyut",
        "Perangkap gajah",
        "Buah pinang"
      ],
      "correctIndex": 2,
      "explanation": "Perkataan 'Kheddah' bermaksud perangkap gajah, manakala 'Qadah' dalam bahasa Arab pula merujuk kepada gelas atau cawan berkaki.",
      "ref": "Unit 2, m/s 22"
    },
    {
      "id": "d6_sej_u2_s1_02",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "L",
      "q": "Apakah maksud istilah 'nagari' dalam dialek Minangkabau yang dikaitkan dengan pembentukan nama Negeri Sembilan?",
      "options": [
        "Kuala sungai",
        "Batu permata",
        "Pasar pedagang",
        "Wilayah"
      ],
      "correctIndex": 3,
      "explanation": "Perkataan negeri berasal daripada istilah Minangkabau iaitu 'nagari' yang bererti wilayah, merujuk kepada gabungan sembilan buah luak asal pada tahun 1773.",
      "ref": "Unit 2, m/s 23"
    },
    {
      "id": "d6_sej_u2_s1_03",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "L",
      "q": "Dalam karya sejarah Sulalatus Salatin, negeri Johor pernah dirujuk dengan satu nama lain. Apakah nama tersebut?",
      "options": [
        "Ujong Tanah",
        "Pulo Ka Satu",
        "Malakat",
        "Inderapura"
      ],
      "correctIndex": 0,
      "explanation": "Naskhah Sulalatus Salatin mencatatkan Johor sebagai Ujong Tanah, manakala Inderapura ialah nama bagi Pahang.",
      "ref": "Unit 2, m/s 24"
    },
    {
      "id": "d6_sej_u2_s1_04",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "L",
      "q": "Sumber makanan apakah yang banyak ditanam di kawasan pantai barat Sabah sehingga dikaitkan dengan asal usul nama negeri itu?",
      "options": [
        "Buah pinang",
        "Pisang saba",
        "Buah kelapa",
        "Pokok mahang"
      ],
      "correctIndex": 1,
      "explanation": "Nama Sabah sering dikaitkan dengan pisang saba yang banyak ditanam penduduk di kawasan pantai barat negeri tersebut sebagai bekalan makanan.",
      "ref": "Unit 2, m/s 25"
    },
    {
      "id": "d6_sej_u2_s1_05",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "L",
      "q": "Kegiatan melombong bijih timah menyebabkan muara pertemuan Sungai Klang dengan sebatang lagi sungai dipenuhi lumpur sehingga melahirkan nama Kuala Lumpur. Sungai satu lagi itu ialah apa?",
      "options": [
        "Sungai Serak",
        "Sungai Selangor",
        "Sungai Gombak",
        "Sungai Pahang"
      ],
      "correctIndex": 2,
      "explanation": "Nama Kuala Lumpur berkait rapat dengan kawasan pertemuan Sungai Gombak dan Sungai Klang yang berlumpur akibat aktiviti perlombongan bijih timah.",
      "ref": "Unit 2, m/s 25"
    },
    {
      "id": "d6_sej_u2_s1_06",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "M",
      "q": "Antara pasangan negeri dan sumber galian atau logam berikut, manakah yang sepadan mengikut catatan asal usul namanya?",
      "options": [
        "Pahang dengan batu permata bernilai",
        "Kelantan dengan bijih timah putih",
        "Perak dengan bahan galian sarawak",
        "Sarawak dengan logam antimoni"
      ],
      "correctIndex": 3,
      "explanation": "Nama Sarawak dikaitkan dengan bijih galian sarawak serta istilah Portugis 'cerava' yang merujuk kepada sejenis logam antimoni.",
      "ref": "Unit 2, m/s 23-25"
    },
    {
      "id": "d6_sej_u2_s1_07",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "M",
      "q": "Ketiga-tiga negeri iaitu Kedah, Melaka, dan Johor mempunyai catatan asal usul nama yang berkait dengan perkataan atau sumber Arab. Padanan manakah yang tepat?",
      "options": [
        "Kedah: Qadah; Melaka: Malakat; Johor: Jauhar",
        "Kedah: Qadah; Melaka: Pulo Ka Satu; Johor: Inderapura",
        "Kedah: Kheddah; Melaka: Ujong Tanah; Johor: Jauhar",
        "Kedah: Kadaram; Melaka: Malakat; Johor: Pura"
      ],
      "correctIndex": 0,
      "explanation": "Menurut sumber Arab, 'Qadah' bermaksud gelas berkaki bagi Kedah, 'Malakat' bermaksud perhimpunan pedagang bagi Melaka, dan 'Jauhar' bermaksud batu permata bagi Johor.",
      "ref": "Unit 2, m/s 22-24"
    },
    {
      "id": "d6_sej_u2_s1_08",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "M",
      "q": "Beberapa buah negeri di Malaysia dikaitkan namanya dengan fenomena cahaya di langit atau suasana terang. Pasangan negeri manakah yang berkongsi ciri asal usul tersebut?",
      "options": [
        "Sabah dan Sarawak",
        "Negeri Sembilan dan Selangor",
        "Terengganu dan Kelantan",
        "Perlis dan Pulau Pinang"
      ],
      "correctIndex": 2,
      "explanation": "Terengganu dikaitkan dengan ungkapan 'terangnya ganu' yang merujuk kepada pelangi, manakala Kelantan pula berasal daripada kata 'kilatan' iaitu cahaya terang yang dilihat masyarakat Patani.",
      "ref": "Unit 2, m/s 24-25"
    },
    {
      "id": "d6_sej_u2_s1_09",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "H",
      "q": "Seorang murid mendapati nama Pahang, Kelantan, Pulau Pinang, dan Sabah turut dikaitkan dengan tumbuhan tempatan. Apakah kesimpulan paling munasabah tentang cara penamaan tempat pada zaman dahulu?",
      "options": [
        "Setiap negeri diwajibkan memilih satu nama pokok sahaja sebagai identiti rasmi negeri",
        "Penamaan negeri berasaskan tumbuhan hanya berlaku di negeri Semenanjung Tanah Melayu",
        "Semua nama negeri hanya mula direkodkan selepas kedatangan pedagang dari benua Eropah",
        "Persekitaran alam semula jadi dan hasil bumi sering menjadi rujukan utama masyarakat terdahulu"
      ],
      "correctIndex": 3,
      "explanation": "Banyak nama negeri berkait dengan tumbuhan, sungai, dan hasil galian di sekitarnya, sekali gus memupuk rasa bangga terhadap warisan alam tempatan.",
      "ref": "Unit 2, m/s 22, 24-25"
    },
    {
      "id": "d6_sej_u2_s1_10",
      "unit": "u2",
      "skill": "u2_s1",
      "diff": "H",
      "q": "Aiman membaca dua penjelasan berlainan tentang asal usul nama Perak, iaitu kilatan ikan di dalam air dan warna bijih timah putih yang berkilat. Mengapakah sesebuah negeri mempunyai lebih daripada satu versi asal usul namanya?",
      "options": [
        "Kerana catatan sejarah terdahulu hanya ditulis dalam tulisan Tamil dan Siam semata-mata",
        "Kerana masyarakat silam tidak dapat membezakan antara hidupan sungai dengan logam galian",
        "Kerana maklumat asal usul nama negeri diperoleh daripada pelbagai sumber bertulis serta tradisi lisan",
        "Kerana nama negeri sentiasa berubah setiap kali pertukaran ketua negeri berlaku"
      ],
      "correctIndex": 2,
      "explanation": "Sejarah asal usul nama negeri di Malaysia direkodkan melalui pelbagai sumber lisan dan bertulis daripada catatan tempatan mahupun pedagang luar.",
      "ref": "Unit 2, m/s 22-23"
    },
    {
      "id": "d6_sej_u2_s2_01",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Apakah gelaran rasmi bagi ketua negeri untuk negeri Perlis?",
      "options": [
        "Yang di-Pertua Negeri",
        "Sultan",
        "Yang di-Pertuan Besar",
        "Raja"
      ],
      "correctIndex": 3,
      "explanation": "Negeri Perlis menggunakan gelaran Raja bagi ketua negerinya, berbeza daripada tujuh negeri lain yang memakai gelaran Sultan.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_02",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Gelaran 'Yang di-Pertuan Besar' dikhaskan kepada ketua negeri bagi negeri mana?",
      "options": [
        "Perlis",
        "Terengganu",
        "Melaka",
        "Negeri Sembilan"
      ],
      "correctIndex": 3,
      "explanation": "Di Malaysia, hanya Negeri Sembilan menggunakan gelaran Yang di-Pertuan Besar sebagai ketua negeri.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_03",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Siapakah yang berperanan sebagai ketua negeri bagi Wilayah Persekutuan?",
      "options": [
        "Yang di-Pertuan Besar",
        "Raja Perlis",
        "Yang di-Pertuan Agong",
        "Yang di-Pertua Negeri"
      ],
      "correctIndex": 2,
      "explanation": "Wilayah Persekutuan Kuala Lumpur, Labuan, dan Putrajaya berada di bawah naungan Yang di-Pertuan Agong sebagai ketua negeri.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_04",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Antara negeri berikut, negeri manakah yang ketua negerinya memakai gelaran Sultan?",
      "options": [
        "Pulau Pinang",
        "Pahang",
        "Sabah",
        "Sarawak"
      ],
      "correctIndex": 1,
      "explanation": "Pahang menggunakan gelaran Sultan, manakala Pulau Pinang, Sarawak, dan Sabah diketuai oleh Yang di-Pertua Negeri.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_05",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "M",
      "q": "Kumpulan negeri manakah yang kesemuanya diketuai oleh Yang di-Pertua Negeri?",
      "options": [
        "Negeri Sembilan, Melaka, Johor, dan Sabah",
        "Pulau Pinang, Selangor, Terengganu, dan Kelantan",
        "Perlis, Kedah, Perak, dan Pahang",
        "Pulau Pinang, Melaka, Sarawak, dan Sabah"
      ],
      "correctIndex": 3,
      "explanation": "Empat buah negeri yang melantik Yang di-Pertua Negeri sebagai ketua negeri ialah Pulau Pinang, Melaka, Sarawak, dan Sabah.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_06",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "M",
      "q": "Pernyataan perbandingan manakah yang tepat tentang gelaran ketua-ketua negeri di Malaysia?",
      "options": [
        "Semua negeri di Malaysia Timur diketuai oleh seorang Sultan",
        "Hanya dua buah negeri sahaja yang diketuai oleh Yang di-Pertua Negeri",
        "Bilangan negeri bergelar Raja lebih banyak daripada negeri bergelar Sultan",
        "Sebanyak tujuh buah negeri memakai gelaran Sultan bagi ketua negerinya"
      ],
      "correctIndex": 3,
      "explanation": "Tujuh buah negeri yang menggunakan gelaran Sultan ialah Kedah, Perak, Selangor, Johor, Pahang, Terengganu, dan Kelantan.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_07",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "M",
      "q": "Faris pernah menetap di Johor, kemudian berpindah ke Negeri Sembilan sebelum berpindah lagi ke Melaka. Apakah urutan gelaran ketua negeri bagi ketiga-tiga negeri itu?",
      "options": [
        "Raja, diikuti Sultan, dan seterusnya Yang di-Pertua Negeri",
        "Sultan, diikuti Yang di-Pertuan Besar, dan seterusnya Yang di-Pertua Negeri",
        "Sultan, diikuti Raja, dan seterusnya Yang di-Pertuan Agong",
        "Yang di-Pertuan Besar, diikuti Sultan, dan seterusnya Yang di-Pertua Negeri"
      ],
      "correctIndex": 1,
      "explanation": "Johor diketuai oleh Sultan, Negeri Sembilan diketuai oleh Yang di-Pertuan Besar, dan Melaka diketuai oleh Yang di-Pertua Negeri.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_08",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "H",
      "q": "Mengapakah kewujudan gelaran yang berbeza-beza bagi ketua negeri di Malaysia penting untuk diketahui oleh setiap warganegara?",
      "options": [
        "Supaya murid hanya menumpukan kesetiaan kepada ketua negeri tempat kelahiran sendiri",
        "Supaya rakyat mengenali serta menghargai keunikan sistem pemerintahan setiap negeri",
        "Supaya rakyat dapat memilih gelaran ketua negeri yang paling disukai oleh mereka",
        "Supaya semua negeri menyeragamkan gelaran ketua negeri kepada satu nama sahaja"
      ],
      "correctIndex": 1,
      "explanation": "Gelaran yang berbeza antara ketua negeri menyerlahkan keunikan warisan pemerintahan Malaysia yang wajar dihormati oleh seluruh rakyat.",
      "ref": "Unit 2, m/s 26"
    },
    {
      "id": "d6_sej_u2_s2_09",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Kawasan manakah di Malaysia yang tidak memiliki ibu negeri dan juga tidak memiliki bandar diraja?",
      "options": [
        "Negeri Sembilan",
        "Wilayah Persekutuan",
        "Sarawak",
        "Pulau Pinang"
      ],
      "correctIndex": 1,
      "explanation": "Wilayah Persekutuan tidak mempunyai ibu negeri dan tidak mempunyai bandar diraja seperti negeri-negeri lain.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s2_10",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Antara berikut, binaan atau tempat manakah yang lazimnya dapat dilihat di sesebuah bandar diraja?",
      "options": [
        "Pelabuhan kontena dan kilang pembuatan berat",
        "Kawasan perindustrian berteknologi tinggi sahaja",
        "Lapangan terbang antarabangsa semata-mata",
        "Bangunan pembesar, kedai lama, serta muzium dan galeri"
      ],
      "correctIndex": 3,
      "explanation": "Bandar diraja menempatkan pelbagai warisan sejarah seperti istana, bangunan pembesar, kedai lama, muzium, galeri, dan monumen.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s2_11",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "L",
      "q": "Antara faktor berikut, manakah yang mendorong perkembangan pesat sesebuah ibu negeri?",
      "options": [
        "Mempunyai bilangan istana lama yang paling banyak",
        "Menghalang pembinaan bangunan pejabat serta pusat pendidikan",
        "Menjadi tumpuan pekerjaan dan dilengkapi kemudahan asas",
        "Terletak jauh daripada institusi pendidikan dan pentadbiran"
      ],
      "correctIndex": 2,
      "explanation": "Ibu negeri berkembang maju hasil pembangunan pentadbiran, kemudahan asas, kewujudan institusi pendidikan, serta tumpuan peluang pekerjaan.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s2_12",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "M",
      "q": "Antara pernyataan berikut, manakah yang tepat membandingkan kedudukan ibu negeri dan bandar diraja di Malaysia?",
      "options": [
        "Hanya beberapa buah negeri di Malaysia yang mempunyai ibu negeri",
        "Semua negeri mempunyai bandar diraja tetapi tidak mempunyai ibu negeri",
        "Setiap Wilayah Persekutuan memiliki sekurang-kurangnya sebuah bandar diraja",
        "Setiap negeri mempunyai ibu negeri, namun hanya beberapa negeri mempunyai bandar diraja"
      ],
      "correctIndex": 3,
      "explanation": "Kesemua 13 buah negeri memiliki ibu negeri masing-masing, tetapi hanya sebahagian negeri mempunyai bandar diraja, manakala Wilayah Persekutuan tiada kedua-duanya.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s2_13",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "M",
      "q": "Sebuah bandar menempatkan pejabat pentadbiran utama kerajaan negeri, kemudahan asas lengkap, institusi pendidikan, dan banyak peluang pekerjaan. Peranan bandar ini menepati ciri apa?",
      "options": [
        "Bandar sempadan kerana mengawal perairan negeri",
        "Bandar pelabuhan kerana ketiadaan pusat pentadbiran",
        "Ibu negeri kerana pembangunan pentadbiran dan kemudahan asasnya",
        "Bandar diraja kerana menempatkan monumen silam"
      ],
      "correctIndex": 2,
      "explanation": "Ibu negeri berkembang sebagai pusat pentadbiran negeri yang turut menyediakan kemudahan asas, institusi pendidikan, dan tumpuan pekerjaan.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s2_14",
      "unit": "u2",
      "skill": "u2_s2",
      "diff": "H",
      "q": "Sebagai rakyat yang mencintai negara, apakah tindakan terbaik untuk menjaga warisan sejarah seperti istana dan bangunan pentadbiran lama di bandar diraja atau ibu negeri?",
      "options": [
        "Membiarkan monumen sejarah rosak kerana bangunan lama tidak lagi diperlukan",
        "Memelihara, memulihara, dan menghargai binaan sejarah agar terus kekal untuk generasi baharu",
        "Merobohkan bangunan pentadbiran lama untuk digantikan dengan pusat beli-belah moden",
        "Menconteng dinding kedai lama dan istana sebagai bukti lawatan pelancong"
      ],
      "correctIndex": 1,
      "explanation": "Rakyat bertanggungjawab memelihara, memulihara, dan menghargai warisan sejarah negeri seperti istana dan bangunan pentadbiran lama sebagai tanda cinta akan negara.",
      "ref": "Unit 2, m/s 27"
    },
    {
      "id": "d6_sej_u2_s3_01",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "L",
      "q": "Apakah tajuk lagu kebesaran rasmi bagi negeri Sarawak?",
      "options": [
        "Melaka Maju Jaya",
        "Ibu Pertiwiku",
        "Untuk Negeri Kita",
        "Sabah Tanah Airku"
      ],
      "correctIndex": 1,
      "explanation": "Lagu kebesaran rasmi negeri Sarawak bertajuk 'Ibu Pertiwiku'.",
      "ref": "Unit 2, m/s 29"
    },
    {
      "id": "d6_sej_u2_s3_02",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "L",
      "q": "Lagu rasmi yang bertajuk 'Untuk Negeri Kita' dimiliki oleh negeri mana?",
      "options": [
        "Melaka",
        "Perak",
        "Selangor",
        "Pulau Pinang"
      ],
      "correctIndex": 3,
      "explanation": "'Untuk Negeri Kita' ialah tajuk lagu rasmi bagi negeri Pulau Pinang.",
      "ref": "Unit 2, m/s 30"
    },
    {
      "id": "d6_sej_u2_s3_03",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "L",
      "q": "Apakah tajuk lagu rasmi yang dikongsi oleh Wilayah Persekutuan Kuala Lumpur, Labuan, dan Putrajaya?",
      "options": [
        "Lagu Bangsa Johor",
        "Duli Yang Maha Mulia",
        "Maju dan Sejahtera",
        "Sabah Tanah Airku"
      ],
      "correctIndex": 2,
      "explanation": "Ketiga-tiga Wilayah Persekutuan berkongsi lagu rasmi yang sama bertajuk 'Maju dan Sejahtera'.",
      "ref": "Unit 2, m/s 30"
    },
    {
      "id": "d6_sej_u2_s3_04",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "L",
      "q": "Apakah tajuk lagu rasmi bagi negeri Selangor?",
      "options": [
        "Selamat Sultan",
        "Duli Yang Maha Mulia",
        "Allah Lanjutkan Usia Sultan",
        "Allah Selamatkan Sultan Kami"
      ],
      "correctIndex": 1,
      "explanation": "Lagu rasmi negeri Selangor ialah 'Duli Yang Maha Mulia', manakala 'Allah Lanjutkan Usia Sultan' untuk Perak dan 'Allah Selamatkan Sultan Kami' untuk Pahang.",
      "ref": "Unit 2, m/s 28-29"
    },
    {
      "id": "d6_sej_u2_s3_05",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "L",
      "q": "Apakah peranan utama bendera, lagu, dan jata bagi setiap negeri di Malaysia?",
      "options": [
        "Menggantikan peranan ibu negeri sebagai pusat pentadbiran negeri",
        "Menjadi identiti serta lambang kemegahan dan kedaulatan negeri",
        "Menentukan jumlah kutipan cukai tahunan bagi sesebuah negeri",
        "Memisahkan penduduk luar bandar daripada penduduk kawasan bandar"
      ],
      "correctIndex": 1,
      "explanation": "Bendera, lagu, dan jata berfungsi sebagai identiti rasmi serta lambang kemegahan dan kedaulatan bagi setiap negeri.",
      "ref": "Unit 2, m/s 20, 30-31"
    },
    {
      "id": "d6_sej_u2_s3_06",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "M",
      "q": "Terdapat dua buah negeri di Pantai Timur Semenanjung Malaysia yang menggunakan tajuk lagu rasmi yang sama, iaitu 'Selamat Sultan'. Kedua-dua negeri tersebut ialah apa?",
      "options": [
        "Terengganu dan Kelantan",
        "Johor dan Negeri Sembilan",
        "Perak dan Pahang",
        "Kedah dan Selangor"
      ],
      "correctIndex": 0,
      "explanation": "Kedua-dua negeri Terengganu dan Kelantan mempunyai lagu rasmi yang bertajuk 'Selamat Sultan'.",
      "ref": "Unit 2, m/s 28-29"
    },
    {
      "id": "d6_sej_u2_s3_07",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "M",
      "q": "Tajuk lagu negeri Perak, Kedah, dan Pahang mengandungi doa kesejahteraan untuk Sultan. Padanan manakah yang tepat antara negeri dengan tajuk lagunya?",
      "options": [
        "Pahang: Allah Lanjutkan Usia Sultan",
        "Kedah: Allah Selamatkan Sultan Mahkota",
        "Perak: Allah Selamatkan Sultan Kami",
        "Kedah: Allah Lanjutkan Usia Sultan"
      ],
      "correctIndex": 1,
      "explanation": "Lagu rasmi Kedah ialah 'Allah Selamatkan Sultan Mahkota', lagu Pahang ialah 'Allah Selamatkan Sultan Kami', dan lagu Perak ialah 'Allah Lanjutkan Usia Sultan'.",
      "ref": "Unit 2, m/s 29"
    },
    {
      "id": "d6_sej_u2_s3_08",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "M",
      "q": "Dalam satu pertandingan koir antara negeri, tiga buah lagu rasmi dipersembahkan mengikut urutan: 'Ibu Pertiwiku', 'Untuk Negeri Kita', dan 'Maju dan Sejahtera'. Urutan negeri atau wilayah yang tepat ialah apa?",
      "options": [
        "Sabah, Melaka, dan Selangor",
        "Sarawak, Pulau Pinang, dan Wilayah Persekutuan",
        "Pulau Pinang, Sarawak, dan Pahang",
        "Sarawak, Terengganu, dan Kelantan"
      ],
      "correctIndex": 1,
      "explanation": "'Ibu Pertiwiku' ialah lagu Sarawak, 'Untuk Negeri Kita' ialah lagu Pulau Pinang, dan 'Maju dan Sejahtera' ialah lagu Wilayah Persekutuan.",
      "ref": "Unit 2, m/s 29-30"
    },
    {
      "id": "d6_sej_u2_s3_09",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "H",
      "q": "Semasa menyertai program pertukaran murid di negeri lain, lagu rasmi negeri tuan rumah dimainkan pada awal majlis. Apakah sikap yang wajar ditunjukkan dan sebabnya?",
      "options": [
        "Enggan mendengar lagu tersebut supaya tidak melupakan identiti negeri kelahiran sendiri",
        "Duduk diam sahaja kerana hanya lagu kebangsaan yang melambangkan kedaulatan negara kita",
        "Berbual dengan rakan kerana lagu negeri lain hanya perlu dihormati oleh anak jati negeri itu",
        "Berdiri tegak dengan tertib kerana menghormati identiti setiap negeri memupuk rasa sayang dan setia kepada negara"
      ],
      "correctIndex": 3,
      "explanation": "Rakyat perlu menghormati bendera, lagu, dan jata setiap negeri sebagai lambang kemegahan negeri bagi menyuburkan semangat sayang dan setia akan negara.",
      "ref": "Unit 2, m/s 30, 33"
    },
    {
      "id": "d6_sej_u2_s3_10",
      "unit": "u2",
      "skill": "u2_s3",
      "diff": "H",
      "q": "Guru meminta murid mendengar lagu negeri dalam kumpulan dan menerangkan maksud liriknya kepada rakan lain. Apakah tujuan utama aktiviti tersebut?",
      "options": [
        "Melatih murid mengubah suai reka bentuk jata negeri supaya lebih moden",
        "Membandingkan tempo muzik lagu antara negeri Semenanjung dengan Malaysia Timur",
        "Membimbing murid mentafsir makna lambang negeri serta menghayati identiti negeri dan negara",
        "Menguji ingatan murid terhadap nama pereka bendera semua negara jiran"
      ],
      "correctIndex": 2,
      "explanation": "Memahami maksud lirik lagu negeri membantu murid mentafsir simbol kenegerian dan memupuk rasa bangga serta sayang akan negeri dan negara.",
      "ref": "Unit 2, m/s 21, 30"
    },
    {
      "id": "d6_sej_u3_s1_01",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "L",
      "q": "Bilakah Rukun Negara dimasyhurkan secara rasmi bersempena dengan ulang tahun Hari Kebangsaan ke-13?",
      "options": [
        "13 Mei 1969",
        "4 Mac 1970",
        "31 Ogos 1970",
        "31 Ogos 1957"
      ],
      "correctIndex": 2,
      "explanation": "Rukun Negara dimasyhurkan sebagai Pengisytiharan Diraja pada 31 Ogos 1970 ketika sambutan ulang tahun Hari Kebangsaan yang ke-13.",
      "ref": "Unit 3, m/s 36"
    },
    {
      "id": "d6_sej_u3_s1_02",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "L",
      "q": "Badan manakah yang mengendalikan pentadbiran negara sejurus selepas peristiwa 13 Mei 1969 sebelum Rukun Negara dirangka?",
      "options": [
        "Jawatankuasa Rukun Negara",
        "Majlis Gerakan Negara (MAGERAN)",
        "Majlis Perundingan Negara (MAPEN)",
        "Suruhanjaya Perlembagaan"
      ],
      "correctIndex": 1,
      "explanation": "Selepas berlakunya peristiwa 13 Mei 1969, pentadbiran negara dijalankan oleh Majlis Gerakan Negara (MAGERAN) sebelum Rukun Negara dibentuk.",
      "ref": "Unit 3, m/s 36"
    },
    {
      "id": "d6_sej_u3_s1_03",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "L",
      "q": "Siapakah yang mengisytiharkan Rukun Negara sebagai Pengisytiharan Diraja pada tahun 1970?",
      "options": [
        "Yang di-Pertuan Agong Keempat",
        "Ketua Jawatankuasa Kesatuan Sekerja",
        "Yang di-Pertuan Agong Pertama",
        "Wakil Kerajaan Negeri Sarawak"
      ],
      "correctIndex": 0,
      "explanation": "Pengisytiharan Diraja Rukun Negara disempurnakan oleh Yang di-Pertuan Agong Keempat, iaitu Tuanku Sultan Ismail Nasiruddin Shah Ibni Almarhum Sultan Zainal Abidin.",
      "ref": "Unit 3, m/s 36"
    },
    {
      "id": "d6_sej_u3_s1_04",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "L",
      "q": "Berdasarkan faktor pengasingan tempat tinggal semasa pentadbiran British, di manakah kebanyakan kaum India menetap?",
      "options": [
        "Di pusat bandar utama",
        "Di kawasan perlombongan timah",
        "Di kawasan perladangan",
        "Di perkampungan pedalaman"
      ],
      "correctIndex": 2,
      "explanation": "Pengasingan tempat tinggal menyebabkan kaum India tertumpu di kawasan ladang, kaum Cina di kawasan bandar, dan kaum Melayu di kampung serta pedalaman.",
      "ref": "Unit 3, m/s 37"
    },
    {
      "id": "d6_sej_u3_s1_05",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "L",
      "q": "Apakah kegiatan ekonomi utama kaum Melayu yang mewujudkan jurang ekonomi pada era pentadbiran British?",
      "options": [
        "Perlombongan bijih timah",
        "Perniagaan borong",
        "Pertanian sara diri",
        "Perladangan getah"
      ],
      "correctIndex": 2,
      "explanation": "Semasa pentadbiran British, kaum Melayu kebanyakannya mengusahakan pertanian sara diri, manakala kaum Cina terlibat dalam perlombongan dan perniagaan serta kaum India dalam sektor perladangan.",
      "ref": "Unit 3, m/s 37"
    },
    {
      "id": "d6_sej_u3_s1_06",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "M",
      "q": "Susun urutan peristiwa pembentukan Rukun Negara daripada kejadian terawal hingga akhir.\n\nI. Rukun Negara dimasyhurkan pada sambutan Hari Kebangsaan ke-13\nII. Negara ditadbir oleh Majlis Gerakan Negara (MAGERAN)\nIII. Tercetusnya peristiwa rusuhan kaum pada 13 Mei 1969\nIV. Jawatankuasa di bawah MAPEN merangka Rukun Negara",
      "options": [
        "III, IV, II, I",
        "III, II, IV, I",
        "II, III, IV, I",
        "IV, III, II, I"
      ],
      "correctIndex": 1,
      "explanation": "Urutan sejarah yang tepat bermula dengan peristiwa 13 Mei 1969, diikuti pentadbiran MAGERAN, perangkaan oleh jawatankuasa di bawah MAPEN pada 4 Mac 1970, dan pemasyhuran pada 31 Ogos 1970.",
      "ref": "Unit 3, m/s 36"
    },
    {
      "id": "d6_sej_u3_s1_07",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "M",
      "q": "Mengapakah pengasingan tempat tinggal antara kaum menjadi salah satu punca Rukun Negara perlu diperkenalkan?",
      "options": [
        "Pekerja dari luar dilarang bekerja dalam sektor perladangan",
        "Semua kaum bersaing menguasai sektor pertanian sara diri",
        "Peluang masyarakat pelbagai kaum untuk bergaul menjadi terhad",
        "Penduduk kampung terpaksa berhijrah ke bandar secara serentak"
      ],
      "correctIndex": 2,
      "explanation": "Apabila setiap kaum tinggal berasingan di kampung, bandar, dan ladang, peluang untuk berinteraksi dan mengenali antara satu sama lain berkurangan.",
      "ref": "Unit 3, m/s 37"
    },
    {
      "id": "d6_sej_u3_s1_09",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "H",
      "q": "Bagaimanakah dasar pentadbiran British yang membawa masuk tenaga kerja luar mengikut sektor ekonomi telah menjejaskan hubungan antara kaum sebelum tahun 1970?",
      "options": [
        "Penduduk kawasan ladang berpindah beramai-ramai untuk tinggal di kawasan kampung",
        "Masyarakat di pedalaman cepat menguasai bidang perlombongan di kawasan bandar",
        "Jurang ekonomi yang tidak seimbang serta kurangnya pergaulan melemahkan perpaduan",
        "Semua kaum mendapat pendapatan yang setara dalam sektor perniagaan moden"
      ],
      "correctIndex": 2,
      "explanation": "Pemisahan bidang pekerjaan dan kawasan tempat tinggal mewujudkan perbezaan taraf ekonomi serta menghalang interaksi harian, sekali gus merenggangkan perpaduan kaum.",
      "ref": "Unit 3, m/s 37"
    },
    {
      "id": "d6_sej_u3_s1_10",
      "unit": "u3",
      "skill": "u3_s1",
      "diff": "H",
      "q": "Dalam sesi pembentangan kelas, kumpulan Aiman diminta menjelaskan perkaitan antara perbezaan fahaman politik dengan pengenalan Rukun Negara. Pernyataan manakah yang paling tepat?",
      "options": [
        "Perbezaan fahaman politik memaksa semua wakil kumpulan agama dan kesatuan sekerja menarik diri daripada kerajaan",
        "Perbezaan fahaman politik merenggangkan kaum hingga mencetuskan rusuhan, lalu Rukun Negara diperkenalkan bagi memupuk semangat kekitaan",
        "Perbezaan fahaman politik menyebabkan MAPEN menggubal Rukun Negara sebelum kemerdekaan",
        "Perbezaan fahaman politik berlaku kerana rakyat menolak pentadbiran MAGERAN pada tahun 1970"
      ],
      "correctIndex": 1,
      "explanation": "Fahaman politik yang berbeza menimbulkan ketegangan hubungan kaum sehingga tercetusnya peristiwa 13 Mei 1969; oleh itu Rukun Negara dibentuk untuk mengukuhkan perpaduan dan semangat kekitaan.",
      "ref": "Unit 3, m/s 36-37"
    },
    {
      "id": "d6_sej_u3_s2_01",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "L",
      "q": "Apakah prinsip ketiga dalam susunan lima prinsip Rukun Negara?",
      "options": [
        "Keluhuran Perlembagaan",
        "Kesopanan dan Kesusilaan",
        "Kesetiaan kepada Raja dan Negara",
        "Kedaulatan Undang-undang"
      ],
      "correctIndex": 0,
      "explanation": "Lima prinsip Rukun Negara mengikut susunan ialah Kepercayaan kepada Tuhan, Kesetiaan kepada Raja dan Negara, Keluhuran Perlembagaan, Kedaulatan Undang-undang, serta Kesopanan dan Kesusilaan.",
      "ref": "Unit 3, m/s 38"
    },
    {
      "id": "d6_sej_u3_s2_02",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "L",
      "q": "Siapakah yang diiktiraf sebagai Ketua Utama Negara menurut Prinsip Kedua Rukun Negara?",
      "options": [
        "Perdana Menteri Malaysia",
        "Yang Dipertua Dewan Rakyat",
        "Yang di-Pertuan Agong",
        "Ketua Hakim Negara"
      ],
      "correctIndex": 2,
      "explanation": "Prinsip Kesetiaan kepada Raja dan Negara menuntut rakyat mencurahkan taat setia sepenuhnya kepada Yang di-Pertuan Agong sebagai Ketua Utama Negara.",
      "ref": "Unit 3, m/s 40"
    },
    {
      "id": "d6_sej_u3_s2_03",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "L",
      "q": "Apakah inti pati prinsip ketiga Rukun Negara, iaitu Keluhuran Perlembagaan?",
      "options": [
        "Rakyat boleh mengubah peraturan negara mengikut keinginan sendiri",
        "Semua aktiviti sukan dikawal sepenuhnya oleh peraturan antarabangsa",
        "Perlembagaan Persekutuan mengatasi semua institusi lain sebagai sumber perundangan paling utama di Malaysia",
        "Tradisi tempatan lebih utama daripada undang-undang bertulis negara"
      ],
      "correctIndex": 2,
      "explanation": "Keluhuran Perlembagaan bermakna Perlembagaan Persekutuan merupakan undang-undang paling tinggi dan tiada institusi yang boleh mengatasi ketertinggiannya.",
      "ref": "Unit 3, m/s 41"
    },
    {
      "id": "d6_sej_u3_s2_04",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "L",
      "q": "Antara berikut, yang manakah merupakan salah satu daripada lima matlamat Rukun Negara?",
      "options": [
        "Mengehadkan amalan cara hidup demokrasi kepada kawasan bandar sahaja",
        "Menyeragamkan satu jenis budaya tunggal bagi seluruh negara",
        "Mengutamakan kekayaan negara untuk golongan yang berniaga sahaja",
        "Membina masyarakat progresif yang memanfaatkan sains dan teknologi moden"
      ],
      "correctIndex": 3,
      "explanation": "Salah satu cita-cita dalam matlamat Rukun Negara ialah membangunkan sebuah masyarakat yang progresif dengan penggunaan sains dan teknologi moden.",
      "ref": "Unit 3, m/s 38"
    },
    {
      "id": "d6_sej_u3_s2_05",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "L",
      "q": "Apakah kesan utama apabila rakyat mengamalkan prinsip Kesopanan dan Kesusilaan?",
      "options": [
        "Membentuk warga yang tertib, berbudi pekerti tinggi dan saling menghormati dalam suasana aman",
        "Memberikan kuasa kepada mana-mana pertubuhan mengatasi perlembagaan",
        "Menggantikan peranan mahkamah dalam mengadili kes kesalahan lalu lintas",
        "Mewajibkan penggunaan peralatan sains moden dalam upacara adat resam"
      ],
      "correctIndex": 0,
      "explanation": "Amalan nilai murni di bawah prinsip Kesopanan dan Kesusilaan membentuk warga yang tertib, berbudi pekerti tinggi, saling memahami dan sepakat dalam hidup bermasyarakat.",
      "ref": "Unit 3, m/s 43"
    },
    {
      "id": "d6_sej_u3_s2_06",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "M",
      "q": "Salah satu matlamat Rukun Negara ialah membentuk sebuah masyarakat yang adil. Bagaimanakah keadilan tersebut dinyatakan dalam matlamat Rukun Negara?",
      "options": [
        "Kemakmuran negara dapat dinikmati bersama secara adil dan saksama",
        "Semua penduduk diwajibkan bekerja di dalam sektor kerajaan sahaja",
        "Setiap warganegara perlu tinggal di kawasan bandar yang sama",
        "Rakyat dikecualikan daripada peraturan negara jika membantu jiran"
      ],
      "correctIndex": 0,
      "explanation": "Matlamat mewujudkan masyarakat yang adil bertujuan memastikan hasil kemakmuran negara dapat dikongsi serta dinikmati oleh seluruh rakyat dengan saksama.",
      "ref": "Unit 3, m/s 38"
    },
    {
      "id": "d6_sej_u3_s2_07",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "M",
      "q": "Apabila ayah Geetha dimasukkan ke hospital, Geetha sekeluarga bersama jiran-jiran pelbagai kaum berdoa untuk kesembuhannya mengikut ajaran agama masing-masing. Prinsip Rukun Negara manakah yang paling tepat digambarkan oleh situasi ini?",
      "options": [
        "Kepercayaan kepada Tuhan",
        "Kedaulatan Undang-undang",
        "Kesetiaan kepada Raja dan Negara",
        "Keluhuran Perlembagaan"
      ],
      "correctIndex": 0,
      "explanation": "Tindakan berdoa menurut kepercayaan masing-masing sambil menghormati amalan agama jiran mencerminkan prinsip Kepercayaan kepada Tuhan.",
      "ref": "Unit 3, m/s 39, 48"
    },
    {
      "id": "d6_sej_u3_s2_08",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "M",
      "q": "Amsyar sentiasa mematuhi papan tanda trafik dan peraturan keselamatan jalan raya ketika berbasikal pergi dan balik dari sekolah. Perlakuan Amsyar menepati prinsip...",
      "options": [
        "Kepercayaan kepada Tuhan",
        "Kesetiaan kepada Raja dan Negara",
        "Kedaulatan Undang-undang",
        "Kesopanan dan Kesusilaan"
      ],
      "correctIndex": 2,
      "explanation": "Prinsip Kedaulatan Undang-undang mewajibkan setiap warganegara menghormati serta mematuhi segala peraturan dan undang-undang demi keselamatan dan keharmonian bersama.",
      "ref": "Unit 3, m/s 42, 48"
    },
    {
      "id": "d6_sej_u3_s2_09",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "H",
      "q": "Ramai murid masih keliru antara prinsip Keluhuran Perlembagaan dengan Kedaulatan Undang-undang. Pernyataan manakah yang membezakan kedua-dua prinsip tersebut dengan betul?",
      "options": [
        "Keluhuran Perlembagaan hanya diguna pakai di Parlimen, manakala Kedaulatan Undang-undang hanya untuk penunggang basikal",
        "Keluhuran Perlembagaan membolehkan institusi awam memansuhkan perlembagaan, manakala Kedaulatan Undang-undang membolehkan rakyat memilih peraturan sesuka hati",
        "Keluhuran Perlembagaan melatih sikap berbudi bahasa, manakala Kedaulatan Undang-undang memupuk taat setia kepada raja",
        "Keluhuran Perlembagaan menegaskan Perlembagaan Persekutuan melebihi mana-mana institusi, manakala Kedaulatan Undang-undang menuntut kepatuhan rakyat terhadap undang-undang"
      ],
      "correctIndex": 3,
      "explanation": "Keluhuran Perlembagaan merujuk kepada kedudukan tertinggi Perlembagaan Persekutuan yang wajib diterima dan dipertahankan, manakala Kedaulatan Undang-undang menekankan sikap patuh rakyat terhadap undang-undang negara.",
      "ref": "Unit 3, m/s 41-42"
    },
    {
      "id": "d6_sej_u3_s2_10",
      "unit": "u3",
      "skill": "u3_s2",
      "diff": "H",
      "q": "Sekolah Kebangsaan Mutiara menganjurkan pameran ciptaan sains digital di samping persembahan tarian dan pakaian tradisional pelbagai kaum. Penganjuran ini menyokong gabungan dua matlamat Rukun Negara, iaitu...",
      "options": [
        "Menyeragamkan semua bentuk tarian tradisi serta mengehadkan akses teknologi kepada murid bandar",
        "Memelihara sistem pilihan raya sekolah serta mengurangkan penglibatan murid dalam sains",
        "Membina masyarakat progresif berasaskan sains moden serta bersikap terbuka terhadap kepelbagaian tradisi budaya",
        "Menggantikan adat warisan lama dengan peralatan moden serta mengurangkan pergaulan kaum"
      ],
      "correctIndex": 2,
      "explanation": "Pameran ciptaan sains digital sejajar dengan matlamat membina masyarakat progresif yang menggunakan sains dan teknologi moden, manakala persembahan budaya pelbagai kaum menyokong sikap liberal terhadap tradisi kebudayaan yang kaya.",
      "ref": "Unit 3, m/s 38"
    },
    {
      "id": "d6_sej_u3_s3_01",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "L",
      "q": "Dalam pembentukan jati diri masyarakat Malaysia melalui Rukun Negara, apakah yang dimaksudkan dengan sifat integriti?",
      "options": [
        "Sikap bersaing sehingga sanggup melanggar peraturan",
        "Sifat amanah dan jujur secara konsisten yang menghalang seseorang daripada melakukan perbuatan curang",
        "Kebebasan melakukan aktiviti tanpa perlu berdisiplin",
        "Keinginan untuk hidup bersendirian tanpa jiran tetangga"
      ],
      "correctIndex": 1,
      "explanation": "Integriti bermaksud mempunyai sikap kejujuran yang tulus dan tidak berubah dalam setiap tindakan serta tanggungjawab harian.",
      "ref": "Unit 3, m/s 46"
    },
    {
      "id": "d6_sej_u3_s3_02",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "L",
      "q": "Antara berikut, kumpulan lambang kedaulatan negara manakah yang wajib dihormati oleh rakyat yang bersemangat patriotik?",
      "options": [
        "Nama jalan perumahan, buku nota dan pakaian sukan murid",
        "Papan tanda sekolah, jadual kelas dan lencana persatuan",
        "Kad perpustakaan, resit kedai buku dan jadual peperiksaan",
        "Bendera Jalur Gemilang, Jata Negara dan lagu Negaraku"
      ],
      "correctIndex": 3,
      "explanation": "Semangat patriotik yang dipupuk melalui Rukun Negara melahirkan rakyat yang sentiasa menghormati lambang kedaulatan negara seperti Jalur Gemilang, Jata Negara, dan lagu Negaraku.",
      "ref": "Unit 3, m/s 45"
    },
    {
      "id": "d6_sej_u3_s3_03",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "L",
      "q": "Bagaimanakah pegangan agama dan kepercayaan yang kukuh melalui Rukun Negara membentuk sahsiah rakyat Malaysia?",
      "options": [
        "Melahirkan sikap rendah diri, bersyukur dan menjauhi rasuah",
        "Menggalakkan individu mengabaikan tanggungjawab di sekolah",
        "Mendorong seseorang bersikap dengki terhadap kejayaan jiran",
        "Menjadikan rakyat bersikap sombong terhadap budaya kaum lain"
      ],
      "correctIndex": 0,
      "explanation": "Masyarakat yang patuh akan ajaran agama akan sentiasa bersyukur, merendah diri, serta terhindar daripada gejala buruk seperti dengki, khianat, rasuah, dan dadah.",
      "ref": "Unit 3, m/s 44"
    },
    {
      "id": "d6_sej_u3_s3_04",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "L",
      "q": "Apakah amalan buruk di sekolah yang dapat dielakkan apabila seorang murid menghayati sifat integriti?",
      "options": [
        "Membantu guru menyusun buku di pusat sumber",
        "Meniru jawapan rakan ketika peperiksaan",
        "Beratur dengan kemas di kantin sekolah",
        "Menyertai aktiviti gotong-royong di kelas"
      ],
      "correctIndex": 1,
      "explanation": "Murid yang berintegriti tinggi bersikap jujur terhadap usaha sendiri dan tidak akan terlibat dalam amalan negatif seperti meniru dalam peperiksaan.",
      "ref": "Unit 3, m/s 46"
    },
    {
      "id": "d6_sej_u3_s3_05",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "L",
      "q": "Mengapakah peranan Rukun Negara dalam memupuk sikap menghormati undang-undang amat penting kepada masyarakat?",
      "options": [
        "Menggantikan tugas pihak berkuasa dalam mengendalikan kes kemalangan jalan raya",
        "Membimbing rakyat agar tidak terjebak dalam kegiatan jenayah yang menggugat keselamatan",
        "Menggalakkan pelajar mengutamakan pertandingan tanpa perlu mematuhi syarat",
        "Membolehkan setiap penduduk menggubal peraturan jalan raya mengikut citarasa sendiri"
      ],
      "correctIndex": 1,
      "explanation": "Penghormatan terhadap undang-undang mendidik rakyat menjauhi kegiatan jenayah dan penyalahgunaan dadah supaya negara terus aman dan sejahtera.",
      "ref": "Unit 3, m/s 45"
    },
    {
      "id": "d6_sej_u3_s3_06",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "M",
      "q": "Semasa perhimpunan pagi di sekolah, murid-murid berdiri tegak dan menyanyikan lagu Negaraku dengan penuh tertib ketika Jalur Gemilang dinaikkan. Tingkah laku ini menunjukkan peranan Rukun Negara dalam...",
      "options": [
        "Menjamin pembahagian peluang perniagaan yang sama rata di kawasan bandar",
        "Membentuk masyarakat yang patriotik dan menghormati lambang negara",
        "Menggubal peraturan baharu bagi persatuan sukan di peringkat daerah",
        "Mengelakkan perbuatan meniru semasa ujian bertulis di dalam bilik darjah"
      ],
      "correctIndex": 1,
      "explanation": "Berdiri tegak ketika menyanyikan lagu Negaraku dan menghormati Jalur Gemilang adalah cerminan semangat cinta akan negara yang dipupuk sejak kanak-kanak.",
      "ref": "Unit 3, m/s 45"
    },
    {
      "id": "d6_sej_u3_s3_07",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "M",
      "q": "Penduduk Taman Sentosa yang berbilang kaum bergilir-gilir menyertai gotong-royong membersihkan dewan komuniti serta saling menghormati sambutan perayaan jiran. Amalan ini membuktikan peranan Rukun Negara untuk...",
      "options": [
        "Memaksa semua penduduk mengamalkan satu jenis sambutan perayaan sahaja",
        "Mengasingkan kawasan kediaman penduduk mengikut bidang pekerjaan mereka",
        "Menentukan hukuman berat kepada jiran yang tidak hadir dalam mesyuarat",
        "Mengukuhkan perpaduan melalui semangat permuafakatan dan sikap toleransi"
      ],
      "correctIndex": 3,
      "explanation": "Semangat permuafakatan, kerjasama, dan toleransi membantu rakyat memahami serta menghormati budaya kaum lain sekali gus mengukuhkan perpaduan masyarakat.",
      "ref": "Unit 3, m/s 45-46"
    },
    {
      "id": "d6_sej_u3_s3_08",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "M",
      "q": "Selepas tamat aktiviti kokurikulum, Mardiana melihat seorang nenek bertongkat sukar melintas jalan lalu segera memimpinnya hingga ke seberang dengan selamat. Tindakan Mardiana menzahirkan peranan Rukun Negara dalam...",
      "options": [
        "Menerapkan nilai murni serta tingkah laku berbudi pekerti mulia",
        "Melatih kemahiran mempertahankan sempadan negara daripada ancaman luar",
        "Menguji kepantasan penggunaan teknologi moden dalam perhubungan",
        "Menyemak kesahihan peraturan lalu lintas yang diluluskan Parlimen"
      ],
      "correctIndex": 0,
      "explanation": "Sikap prihatin dan bersopan santun membantu warga emas mencerminkan penerapan nilai murni yang mewujudkan hubungan saling menghormati dalam masyarakat.",
      "ref": "Unit 3, m/s 46, 48"
    },
    {
      "id": "d6_sej_u3_s3_09",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "H",
      "q": "Mengapakah sifat integriti yang dipupuk melalui Rukun Negara penting bukan sahaja semasa di sekolah rendah, malah hingga ke alam dewasa?",
      "options": [
        "Sifat integriti hanya digunakan semasa menjawab soalan peperiksaan sebelum ditinggalkan selepas tamat sekolah",
        "Murid yang mempunyai sifat integriti akan dikecualikan daripada sebarang ujian bertulis sepanjang persekolahan",
        "Sifat jujur yang teguh membina jati diri unggul yang menentukan kecemerlangan dalam pelajaran, kerjaya dan kehidupan",
        "Kejujuran memastikan seseorang memperoleh jawatan tinggi dengan mudah tanpa perlu berusaha dan berdisiplin"
      ],
      "correctIndex": 2,
      "explanation": "Integriti membentuk keperibadian mulia yang berkekalan, mempengaruhi kejayaan dalam pendidikan dan kerjaya, serta menjauhkan diri daripada perlakuan tidak jujur.",
      "ref": "Unit 3, m/s 46"
    },
    {
      "id": "d6_sej_u3_s3_10",
      "unit": "u3",
      "skill": "u3_s3",
      "diff": "H",
      "q": "Bagaimanakah penghayatan Rukun Negara oleh seseorang individu akhirnya menyumbang kepada kestabilan dan kemajuan seluruh negara?",
      "options": [
        "Penghayatan Rukun Negara membolehkan rakyat mengabaikan peraturan negara semasa musim perayaan",
        "Kemajuan negara hanya bergantung kepada penduduk bandar tanpa memerlukan toleransi masyarakat luar bandar",
        "Individu yang berbudi bahasa, patuh undang-undang dan berintegriti membentuk masyarakat harmoni yang memacu kemajuan negara",
        "Kestabilan negara terjamin dengan hanya menghafal teks ikrar tanpa perlu diamalkan dalam pergaulan"
      ],
      "correctIndex": 2,
      "explanation": "Apabila setiap individu berbudi pekerti dan saling menghormati, masyarakat akan hidup bertolak ansur dan harmoni; keadaan masyarakat yang sejahtera inilah yang mengukuhkan kestabilan serta kemajuan negara.",
      "ref": "Unit 3, m/s 44-46, 49"
    },
    {
      "id": "d6_sej_u4_s1_01",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "L",
      "q": "Antara kaum berikut, yang manakah merupakan penduduk etnik paling ramai di Sarawak serta terkenal dengan busana wanita bertenun pua kumbu?",
      "options": [
        "Kaum Iban",
        "Kaum Kadazandusun",
        "Kaum Bidayuh",
        "Kaum Melanau"
      ],
      "correctIndex": 0,
      "explanation": "Kaum Iban merupakan kaum terbesar di Sarawak, manakala kaum wanita mereka menggayakan busana tenunan pua kumbu ketika Hari Gawai dan majlis perkahwinan.",
      "ref": "Unit 4, m/s 52"
    },
    {
      "id": "d6_sej_u4_s1_02",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "L",
      "q": "Masyarakat Orang Asli di Semenanjung Malaysia dikelompokkan kepada tiga cabang utama, iaitu...",
      "options": [
        "Negrito, Senoi dan Melayu Proto",
        "Negrito, Bajau dan Melayu Proto",
        "Senoi, Murut dan Melayu Proto",
        "Kelabit, Senoi dan Negrito"
      ],
      "correctIndex": 0,
      "explanation": "Tiga kumpulan terbesar masyarakat Orang Asli di Semenanjung Malaysia ialah Negrito atau Semang, Senoi dan Melayu Proto.",
      "ref": "Unit 4, m/s 53"
    },
    {
      "id": "d6_sej_u4_s1_03",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "L",
      "q": "Apakah nama pakaian tradisional bagi kaum lelaki dalam masyarakat Cina?",
      "options": [
        "Ceongsam",
        "Changsan",
        "Doti",
        "Kelambi"
      ],
      "correctIndex": 1,
      "explanation": "Lelaki Cina menggayakan changsan sebagai pakaian tradisional, manakala wanita Cina memakai ceongsam; kelambi pula dipakai lelaki Iban dan doti dipakai lelaki India.",
      "ref": "Unit 4, m/s 52"
    },
    {
      "id": "d6_sej_u4_s1_04",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "L",
      "q": "Masyarakat Siam di negara kita menyambut ketibaan tahun baharu mereka dengan mengadakan perayaan apa?",
      "options": [
        "Hari Gawai",
        "Perayaan Songkran",
        "Pesta Kaul",
        "Pesta Kaamatan"
      ],
      "correctIndex": 1,
      "explanation": "Kaum Siam yang kebanyakannya menetap di Kedah, Kelantan, Perlis, Pulau Pinang dan Perak menyambut perayaan Songkran pada tahun baharu mereka.",
      "ref": "Unit 4, m/s 54"
    },
    {
      "id": "d6_sej_u4_s1_05",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "L",
      "q": "Di manakah letaknya Muzium Seni Kraf Orang Asli yang membantu memelihara warisan kesenian masyarakat tersebut?",
      "options": [
        "Bandar Hilir, Melaka",
        "Jalan Damansara, Kuala Lumpur",
        "Kota Belud, Sabah",
        "Tambunan, Sabah"
      ],
      "correctIndex": 1,
      "explanation": "Muzium Seni Kraf Orang Asli terletak di Jalan Damansara, Kuala Lumpur untuk membantu mengekalkan warisan budaya kesenian Orang Asli.",
      "ref": "Unit 4, m/s 53"
    },
    {
      "id": "d6_sej_u4_s1_06",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "M",
      "q": "Pasangan manakah yang tepat menggambarkan asal perkahwinan campur dan bahasa pertuturan kaum di Malaysia?",
      "options": [
        "Serani: orang Portugis dengan penduduk tempatan; bertutur bahasa Kristang dan Inggeris",
        "Baba dan Nyonya: pedagang India dengan penduduk tempatan; bertutur bahasa Melayu kreol",
        "Sikh: pedagang Arab dengan penduduk tempatan; bertutur bahasa Punjabi",
        "Chetti: pedagang China dengan penduduk tempatan; bertutur bahasa Melayu Baba"
      ],
      "correctIndex": 0,
      "explanation": "Kaum Serani atau Eurasia terbentuk daripada perkahwinan campur orang Portugis dengan penduduk tempatan dan menggunakan bahasa Kristang serta bahasa Inggeris.",
      "ref": "Unit 4, m/s 53-54"
    },
    {
      "id": "d6_sej_u4_s1_07",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "M",
      "q": "Seorang tetamu wanita daripada masyarakat Sikh menghadiri sebuah majlis rasmi dengan memakai pakaian tradisional kaumnya. Apakah pakaian yang digayakannya?",
      "options": [
        "Baju panjang hingga lutut bersama seluar tahmat",
        "Salwar kameez yang dipadankan dengan selendang dupatta",
        "Busana tenunan pua kumbu bersama hiasan kepala",
        "Kebaya bersulam bersama kain batik sarung"
      ],
      "correctIndex": 1,
      "explanation": "Wanita Sikh mengenakan salwar kameez bersama dupatta atau selendang, manakala lelaki Sikh memakai baju panjang hingga lutut bersama tahmat dan sarban.",
      "ref": "Unit 4, m/s 54"
    },
    {
      "id": "d6_sej_u4_s1_08",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "M",
      "q": "Kumpulan manakah yang kesemua kaumnya merupakan penduduk tempatan di negeri Sabah?",
      "options": [
        "Murut, Rungus dan Orang Sungai",
        "Melanau, Bidayuh dan Lun Bawang",
        "Kayan, Iranun dan Bidayuh",
        "Kenyah, Kelabit dan Penan"
      ],
      "correctIndex": 0,
      "explanation": "Murut, Rungus dan Orang Sungai ialah antara kaum yang menetap di Sabah, manakala Kenyah, Kelabit, Penan, Melanau, Bidayuh, Kayan dan Lun Bawang berada di Sarawak.",
      "ref": "Unit 4, m/s 55"
    },
    {
      "id": "d6_sej_u4_s1_09",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "H",
      "q": "Walaupun masyarakat Baba dan Nyonya serta masyarakat Chetti berbeza dari segi asal usul pedagang terdahulu, kedua-dua kaum di Melaka ini berkongsi ciri budaya yang serupa. Apakah persamaan tersebut?",
      "options": [
        "Kedua-duanya bertutur menggunakan bahasa Kristang sebagai bahasa harian",
        "Kedua-duanya menyambut perayaan Songkran di wat setiap tahun",
        "Kedua-duanya memakai baju burung dan kelambi semasa perkahwinan",
        "Kedua-duanya menggayakan kebaya bersulam dengan kain batik sarung"
      ],
      "correctIndex": 3,
      "explanation": "Masyarakat Baba dan Nyonya serta masyarakat Chetti di Melaka banyak berasimilasi dengan budaya tempatan sehingga kedua-duanya memakai kebaya bersulam dan berkain batik sarung.",
      "ref": "Unit 4, m/s 53-54"
    },
    {
      "id": "d6_sej_u4_s1_10",
      "unit": "u4",
      "skill": "u4_s1",
      "diff": "H",
      "q": "Murid di sebuah sekolah rendah saling berkongsi cerita tentang bahasa, adat serta busana kaum masing-masing semasa Minggu Kebudayaan. Mengapakah amalan ini penting kepada negara?",
      "options": [
        "Membolehkan semua kaum menggunakan satu dialek pertuturan yang seragam",
        "Mengelakkan pengaruh pakaian moden dalam kalangan murid sekolah rendah",
        "Mengurangkan jumlah perayaan kebudayaan yang perlu disambut di sekolah",
        "Menyemai sikap bertoleransi serta rasa cinta akan tanah air demi perpaduan"
      ],
      "correctIndex": 3,
      "explanation": "Usaha mengenali, mempelajari dan berkongsi maklumat tentang kepelbagaian kaum memupuk toleransi antara kaum sebagai asas perpaduan dan melahirkan rakyat yang cinta akan tanah air.",
      "ref": "Unit 4, m/s 55"
    },
    {
      "id": "d6_sej_u4_s2_01",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "L",
      "q": "Sebelum negara mencapai kemerdekaan, corak petempatan masyarakat di Tanah Melayu ditentukan oleh faktor apa?",
      "options": [
        "Jarak kampung daripada pusat pentadbiran negeri",
        "Jenis kegiatan ekonomi atau pekerjaan mereka",
        "Bilangan ahli keluarga dalam sesebuah rumah",
        "Tahap pendidikan formal setiap keluarga"
      ],
      "correctIndex": 1,
      "explanation": "Sebelum merdeka, taburan petempatan penduduk terbentuk mengikut kegiatan ekonomi yang berbeza atau jenis pekerjaan masing-masing.",
      "ref": "Unit 4, m/s 56"
    },
    {
      "id": "d6_sej_u4_s2_02",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "L",
      "q": "Di manakah tumpuan petempatan masyarakat Cina sebelum merdeka dan apakah pekerjaan utama mereka?",
      "options": [
        "Di pekan dan bandar sebagai pelombong dan peniaga",
        "Di kawasan pedalaman sebagai pengutip hasil hutan",
        "Di kawasan ladang sebagai buruh dan pekerja pelabuhan",
        "Di persisiran pantai sebagai nelayan dan pembuat perahu"
      ],
      "correctIndex": 0,
      "explanation": "Pada masa dahulu, masyarakat Cina kebanyakannya mendiami kawasan pekan serta bandar dan menjalankan kegiatan perlombongan serta perniagaan.",
      "ref": "Unit 4, m/s 56"
    },
    {
      "id": "d6_sej_u4_s2_03",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "L",
      "q": "Apakah kegiatan ekonomi utama masyarakat Orang Asli di kawasan pedalaman Semenanjung Malaysia pada zaman dahulu?",
      "options": [
        "Menghasilkan kraf tangan, berburu dan mengutip hasil hutan",
        "Menjalankan perniagaan borong di bandar pelabuhan",
        "Bekerja dalam sektor perkhidmatan awam kerajaan",
        "Mengusahakan kilang memproses getah secara besar-besaran"
      ],
      "correctIndex": 0,
      "explanation": "Masyarakat Orang Asli yang tinggal di pedalaman Perak, Selangor, Pahang, Kelantan dan Terengganu mengusahakan kraf tangan, berburu serta mengutip hasil hutan.",
      "ref": "Unit 4, m/s 56"
    },
    {
      "id": "d6_sej_u4_s2_04",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "L",
      "q": "Antara kaum di Sarawak berikut, kumpulan manakah yang mendiami persisiran pantai serta bergiat sebagai pengusaha sagu dan pembuat perahu?",
      "options": [
        "Bidayuh, Kenyah dan Kelabit",
        "Iban, Murut dan Rungus",
        "Melayu, Melanau dan Kedayan",
        "Bisaya, Kelabit dan Penan"
      ],
      "correctIndex": 2,
      "explanation": "Di Sarawak pada masa dahulu, kaum Melayu, Melanau dan Kedayan tinggal di persisiran pantai sambil bekerja sebagai pedagang, pembuat perahu dan pengusaha sagu.",
      "ref": "Unit 4, m/s 57"
    },
    {
      "id": "d6_sej_u4_s2_05",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "L",
      "q": "Kaum manakah di pedalaman Sabah yang terkenal dengan kemahiran seni perusahaan kreatif pada masa dahulu?",
      "options": [
        "Kaum Suluk",
        "Kaum Bajau",
        "Kaum Iranun",
        "Kaum Rungus"
      ],
      "correctIndex": 3,
      "explanation": "Kebanyakan kaum Rungus dan Kadazandusun tinggal di kawasan pedalaman Sabah, dan kaum Rungus dikenali ramai dalam bidang seni perusahaan kreatif.",
      "ref": "Unit 4, m/s 57"
    },
    {
      "id": "d6_sej_u4_s2_06",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "M",
      "q": "Bagaimanakah pembahagian lokasi petempatan antara kaum Iban dengan kaum Kenyah di Sarawak pada zaman dahulu?",
      "options": [
        "Kaum Iban di pinggir bandar, manakala kaum Kenyah di persisiran pantai",
        "Kaum Iban di kawasan ladang getah, manakala kaum Kenyah di pelabuhan",
        "Kaum Iban di persisiran pantai, manakala kaum Kenyah di pekan",
        "Kaum Iban di lembah sungai, manakala kaum Kenyah di kawasan pedalaman"
      ],
      "correctIndex": 3,
      "explanation": "Kaum Iban dan Bisaya dahulu tinggal berhampiran lembah sungai sebagai petani, manakala kaum Bidayuh, Kenyah dan Kelabit mendiami kawasan pedalaman.",
      "ref": "Unit 4, m/s 57"
    },
    {
      "id": "d6_sej_u4_s2_08",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "M",
      "q": "Apakah persamaan kegiatan ekonomi antara kaum Melayu Brunei, Iranun dan Suluk di Sabah dengan kaum Melayu, Melanau dan Kedayan di Sarawak pada masa dahulu?",
      "options": [
        "Menetap di lembah sungai untuk menghasilkan kraf tangan rotan",
        "Menetap di pinggir bandar bagi bekerja dalam sektor perlombongan",
        "Menetap di persisiran pantai serta menjadi pedagang dan pembuat perahu",
        "Menetap di kawasan pedalaman untuk menanam padi sawah dan padi bukit"
      ],
      "correctIndex": 2,
      "explanation": "Kedua-dua kelompok kaum persisiran pantai di Sabah dan Sarawak ini menjalankan kegiatan perdagangan serta pembuatan perahu di kawasan pantai.",
      "ref": "Unit 4, m/s 57"
    },
    {
      "id": "d6_sej_u4_s2_09",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "H",
      "q": "Apakah perubahan ketara yang dapat dilihat apabila membandingkan corak petempatan serta ekonomi rakyat Malaysia dahulu dengan keadaan masa kini?",
      "options": [
        "Setiap kaum masih digalakkan menjalankan satu jenis pekerjaan tradisi sahaja",
        "Penduduk pedalaman berpindah sepenuhnya ke kawasan pelabuhan utama",
        "Rakyat pelbagai kaum kini hidup bersama secara aman tanpa pengasingan tempat tinggal dan kegiatan ekonomi tidak lagi terikat kepada satu kaum",
        "Kegiatan pertanian dan perikanan tidak lagi menjadi sumber rezeki penduduk"
      ],
      "correctIndex": 2,
      "explanation": "Selepas merdeka dan pembentukan Malaysia, usaha pembangunan negara menampakkan kejayaan sehingga rakyat pelbagai kaum hidup bersama secara aman tanpa pemisahan petempatan.",
      "ref": "Unit 4, m/s 56-57"
    },
    {
      "id": "d6_sej_u4_s2_10",
      "unit": "u4",
      "skill": "u4_s2",
      "diff": "H",
      "q": "Berdasarkan perkembangan negara selepas pembentukan Malaysia, apakah sikap masyarakat yang membolehkan pelbagai kaum hidup bersama secara aman tanpa pemisahan petempatan?",
      "options": [
        "Mengehadkan peluang pekerjaan tertentu kepada penduduk bandar sahaja",
        "Mengamalkan toleransi dan meletakkan kesejahteraan negara melebihi kepentingan diri",
        "Mengutamakan keuntungan peribadi melebihi keperluan masyarakat setempat",
        "Mengasingkan kawasan perumahan mengikut latar belakang pekerjaan masing-masing"
      ],
      "correctIndex": 1,
      "explanation": "Penerapan sikap toleransi dan kesanggupan rakyat mengutamakan kesejahteraan negara melebihi kepentingan diri telah membentuk Malaysia yang aman dan bersatu padu.",
      "ref": "Unit 4, m/s 57"
    },
    {
      "id": "d6_sej_u4_s3_01",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "L",
      "q": "Alat muzik tradisional Melayu bernama angklung diperbuat daripada buluh yang diikat pada sejenis rangka. Apakah nama rangka tersebut?",
      "options": [
        "Serombong",
        "Ancak",
        "Belulang",
        "Poring"
      ],
      "correctIndex": 1,
      "explanation": "Angklung dihasilkan daripada buluh yang diikat pada bahagian rangka yang dikenali sebagai ancak.",
      "ref": "Unit 4, m/s 58"
    },
    {
      "id": "d6_sej_u4_s3_02",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "L",
      "q": "Alat muzik masyarakat Cina yang terdiri daripada sepasang piring bulat rata daripada kepingan gangsa dikenali sebagai...",
      "options": [
        "Liu qin",
        "Zhudi",
        "Bo",
        "Talam"
      ],
      "correctIndex": 2,
      "explanation": "Bo atau po ialah alat muzik masyarakat Cina berbentuk sepasang piring bulat rata daripada kepingan gangsa, manakala talam ialah alat muzik gangsa masyarakat India.",
      "ref": "Unit 4, m/s 59"
    },
    {
      "id": "d6_sej_u4_s3_03",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "L",
      "q": "Apakah alat muzik bertali daripada kayu meranti yang popular dimainkan oleh kaum Kayan, Kelabit dan Kenyah di Sarawak?",
      "options": [
        "Engkerumong",
        "Sape",
        "Sompoton",
        "Tongkungon"
      ],
      "correctIndex": 1,
      "explanation": "Sape diperbuat daripada kayu meranti dan dipasang tali untuk dipetik, serta banyak dimainkan dalam kalangan kaum Kayan, Kelabit dan Kenyah.",
      "ref": "Unit 4, m/s 60"
    },
    {
      "id": "d6_sej_u4_s3_04",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "L",
      "q": "Tarian tradisional masyarakat India yang melambangkan alam semesta melalui gerak tubuh tertentu dan sering menjadi pembuka tirai persembahan kebudayaan ialah...",
      "options": [
        "Tarian Sewang",
        "Tarian Bhangra",
        "Tarian Bharata Natyam",
        "Tarian Makyung"
      ],
      "correctIndex": 2,
      "explanation": "Tarian Bharata Natyam menzahirkan maksud tentang alam semesta melalui pergerakan tubuh dan ditarikan sebagai pembuka tirai acara kebudayaan masyarakat India.",
      "ref": "Unit 4, m/s 62"
    },
    {
      "id": "d6_sej_u4_s3_05",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "L",
      "q": "Mengapakah Tarian Sumazau dipersembahkan oleh masyarakat Kadazandusun di Sabah?",
      "options": [
        "Untuk mengajar pahlawan cara berperang pada zaman silam",
        "Untuk menghormati semangat padi serta memeriahkan Pesta Kaamatan",
        "Untuk mengiringi upacara perubatan masyarakat di pedalaman",
        "Untuk meraikan pembukaan premis perniagaan baharu di bandar"
      ],
      "correctIndex": 1,
      "explanation": "Tarian Sumazau oleh kaum Kadazan atau sumayau oleh kaum Dusun dipersembahkan dengan iringan gong bagi menghormati semangat padi dan semasa Pesta Kaamatan.",
      "ref": "Unit 4, m/s 63"
    },
    {
      "id": "d6_sej_u4_s3_06",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "M",
      "q": "Apakah persamaan bahan binaan antara alat muzik sompoton dari Sabah dengan alat muzik engkerurai dari Sarawak?",
      "options": [
        "Kedua-duanya diperbuat daripada kayu merbau dan kulit kambing",
        "Kedua-duanya mempunyai tujuh tali logam yang dipetik dengan jari",
        "Kedua-duanya menggabungkan batang buluh yang dipasang pada labu kering",
        "Kedua-duanya menggunakan kepingan logam gangsa yang diketuk"
      ],
      "correctIndex": 2,
      "explanation": "Sompoton yang terkenal di Sabah serta engkerurai yang terkenal dalam kalangan kaum Iban di Sarawak sama-sama dibuat daripada batang buluh yang dipasang pada buah labu kering.",
      "ref": "Unit 4, m/s 60"
    },
    {
      "id": "d6_sej_u4_s3_07",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "M",
      "q": "Apakah perbezaan cara persembahan Tarian Zapin pada masa dahulu berbanding dengan masa kini?",
      "options": [
        "Dahulu hanya ditarikan oleh lelaki, kini turut ditarikan berpasangan lelaki dan wanita",
        "Dahulu ditarikan semasa Pesta Kaamatan, kini ditarikan pada Tahun Baharu Cina",
        "Dahulu diiringi gong dan canang sahaja, kini diiringi dram dhol dan harmonika",
        "Dahulu dipersembahkan di istana sahaja, kini ditarikan semasa upacara ritual"
      ],
      "correctIndex": 0,
      "explanation": "Pada masa lampau, Tarian Zapin hanya ditarikan oleh kaum lelaki, namun pada masa ini tarian tersebut turut dipersembahkan secara berpasangan oleh lelaki dan wanita.",
      "ref": "Unit 4, m/s 61"
    },
    {
      "id": "d6_sej_u4_s3_08",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "M",
      "q": "Penari Tarian Sewang menghiasi tubuh dengan selempang daripada daun kelapa, daun palas, bunga-bungaan dan kulit kayu. Masyarakat manakah yang memiliki tarian ini dan apakah antara alat muzik pengiringnya?",
      "options": [
        "Kaum Sikh; diiringi dram dhol kayu besar dan tamborin",
        "Kaum Kadazandusun; diiringi kulintangan dan tontog",
        "Kaum Iban; diiringi engkerumong dan ketebong",
        "Masyarakat Orang Asli; diiringi buluh centong, kereb dan pensol"
      ],
      "correctIndex": 3,
      "explanation": "Tarian Sewang ialah tarian identiti masyarakat Orang Asli untuk upacara ritual perubatan dan majlis keramaian dengan iringan buluh centong, gendang, kereb, pensol dan tetawak.",
      "ref": "Unit 4, m/s 63"
    },
    {
      "id": "d6_sej_u4_s3_09",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "H",
      "q": "Pembuatan alat muzik tradisional di Malaysia menggunakan bahan seperti kulit lembu, buluh poring, kayu pokok nangka dan lilin kelulut. Apakah kesimpulan terbaik tentang pencipta alat muzik tersebut?",
      "options": [
        "Mereka mengimport semua bahan mentah dari Timur Tengah dan India",
        "Mereka hanya menghasilkan alat muzik menggunakan bahan galian logam",
        "Mereka bijak memanfaatkan sumber alam dan bahan semula jadi di sekeliling",
        "Mereka mencipta alat muzik tanpa mengambil kira bunyi yang terhasil"
      ],
      "correctIndex": 2,
      "explanation": "Penggunaan kayu keras, buluh, kulit haiwan dan sumber alam lain membuktikan kebijaksanaan pencipta dahulu memanfaatkan bahan semula jadi yang terdapat di persekitaran mereka.",
      "ref": "Unit 4, m/s 58, 60"
    },
    {
      "id": "d6_sej_u4_s3_10",
      "unit": "u4",
      "skill": "u4_s3",
      "diff": "H",
      "q": "Sebuah keluarga ingin menjemput kumpulan kebudayaan bagi memeriahkan majlis pembukaan kedai baharu mereka sebagai simbol keamanan dan kebahagiaan. Tarian dan alat muzik manakah yang paling sesuai dipilih?",
      "options": [
        "Tarian Bhangra bersama iringan harmonika dan tamborin",
        "Tarian Singa bersama iringan bo, gendang besar dan gong",
        "Tarian Ngajat bersama iringan bebendai, ketebong dan tawak",
        "Tarian Makyung bersama iringan rebab, serunai dan kesi"
      ],
      "correctIndex": 1,
      "explanation": "Tarian Singa dipersembahkan semasa Tahun Baharu Cina, pembukaan kedai baharu dan sambutan tetamu kehormat dengan iringan bo, gendang besar serta gong sebagai lambang keharmonian, keamanan dan kebahagiaan.",
      "ref": "Unit 4, m/s 61"
    },
    {
      "id": "d6_sej_u4_s4_01",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "L",
      "q": "Pada zaman dahulu sebelum guli digunakan, apakah bahan yang dijadikan buah dalam permainan congkak?",
      "options": [
        "Biji getah atau batu kecil",
        "Buah dadu dan buah hitam putih",
        "Kepingan kertas tebal dan bulu ayam",
        "Kayu meranti dan tali rotan"
      ],
      "correctIndex": 0,
      "explanation": "Dahulu, pemain congkak menggali lubang di atas tanah dan menggunakan biji getah atau batu kecil sebagai buah congkak sebelum digantikan dengan papan congkak serta guli.",
      "ref": "Unit 4, m/s 64"
    },
    {
      "id": "d6_sej_u4_s4_02",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "L",
      "q": "Permainan batu seremban yang menggunakan lima atau tujuh biji batu kecil turut dikenali dengan nama lain, iaitu...",
      "options": [
        "Tating lawi dan chap teh",
        "Selambut dan batu tujuh",
        "Go dan weiqi",
        "Gasing uri dan gasing pangkah"
      ],
      "correctIndex": 1,
      "explanation": "Selain nama batu seremban, permainan anjung ini turut disebut sebagai selambut dan batu tujuh.",
      "ref": "Unit 4, m/s 64"
    },
    {
      "id": "d6_sej_u4_s4_03",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "L",
      "q": "Permainan anjung tradisional manakah yang menyerupai permainan dam ular serta memerlukan pemain bergerak mengikut angka buah dadu?",
      "options": [
        "Chaturangam",
        "Diabolo",
        "Weiqi",
        "Paramapadham"
      ],
      "correctIndex": 3,
      "explanation": "Paramapadham dimainkan oleh dua hingga empat orang seperti dam ular dan pemain bergerak berpandukan angka buah dadu hingga ke petak penamat.",
      "ref": "Unit 4, m/s 65"
    },
    {
      "id": "d6_sej_u4_s4_04",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "L",
      "q": "Masyarakat Melayu menyebut permainan chap teh sebagai tating lawi. Bagaimanakah pemenang permainan ini ditentukan?",
      "options": [
        "Peserta yang paling pantas sampai ke garisan penamat",
        "Pemain yang berjaya mencatat jumlah tatingan paling banyak",
        "Pasukan yang berjaya menyentuh paling ramai ahli lawan",
        "Pemain yang berjaya menewaskan raja pihak lawan"
      ],
      "correctIndex": 1,
      "explanation": "Dalam permainan chap teh atau tating lawi, pemain menating bola lawi daripada bulu ayam dan pemenang ditentukan menerusi bilangan tatingan terbanyak.",
      "ref": "Unit 4, m/s 66"
    },
    {
      "id": "d6_sej_u4_s4_05",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "L",
      "q": "Apakah nama permainan kawasan lapang yang dimainkan oleh masyarakat Melanau di Sarawak semasa Pesta Kaul dengan membina struktur kayu berbentuk piramid?",
      "options": [
        "Wau",
        "Sepak raga",
        "Sepak manggis",
        "Tibau"
      ],
      "correctIndex": 3,
      "explanation": "Permainan tibau oleh masyarakat Melanau menggunakan binaan kayu bertingkat berbentuk piramid dengan untaian tali rotan sebagai buaian semasa Pesta Kaul.",
      "ref": "Unit 4, m/s 67"
    },
    {
      "id": "d6_sej_u4_s4_06",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "M",
      "q": "Antara berikut, senarai manakah yang mengandungi kesemua permainan tradisional kategori kawasan lapang?",
      "options": [
        "Sepak raga, chap teh, kabaddi dan tibau",
        "Wau, tibau, sepak manggis dan gasing",
        "Congkak, batu seremban, wau dan gasing",
        "Go, yoyo Cina, chaturangam dan paramapadham"
      ],
      "correctIndex": 1,
      "explanation": "Wau, tibau, sepak manggis dan gasing merupakan permainan kawasan lapang, manakala congkak, batu seremban, go, yoyo Cina, chaturangam dan paramapadham ialah permainan anjung serta sepak raga, chap teh dan kabaddi ialah permainan laman.",
      "ref": "Unit 4, m/s 64-67"
    },
    {
      "id": "d6_sej_u4_s4_07",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "M",
      "q": "Dalam permainan kabaddi, berapa orangkah pemain bagi setiap pasukan dan bagaimanakah mata diperoleh?",
      "options": [
        "Tujuh orang sepasukan; mata diperoleh apabila penyerang berjaya menyentuh pemain lawan",
        "Empat orang sepasukan; mata diperoleh mengikut jumlah buah yang ditimang di belakang tangan",
        "Dua orang sepasukan; mata diperoleh dengan menendang bola rotan ke arah bungkusan hadiah",
        "Lima orang sepasukan; mata diperoleh melalui tatingan bola lawi tertinggi"
      ],
      "correctIndex": 0,
      "explanation": "Kabaddi dimainkan oleh dua pasukan dengan tujuh orang pemain setiap pasukan, dan mata diberi kepada pasukan yang penyerangnya berjaya menyentuh pemain lawan sehingga tersingkir.",
      "ref": "Unit 4, m/s 66"
    },
    {
      "id": "d6_sej_u4_s4_08",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "M",
      "q": "Apakah perbezaan utama antara permainan Go (Weiqi) dengan Chaturangam dalam kategori permainan anjung?",
      "options": [
        "Go bertujuan menguasai kawasan papan lebih besar, manakala Chaturangam bertujuan menewaskan raja lawan",
        "Go dimainkan secara perseorangan, manakala Chaturangam dimainkan oleh empat pemain",
        "Go menggunakan lima biji batu kecil, manakala Chaturangam menggunakan dadu bernombor",
        "Go menggunakan papan berlubang untuk guli, manakala Chaturangam dimainkan di kawasan lapang"
      ],
      "correctIndex": 0,
      "explanation": "Pemain Go mengatur strategi menggunakan buah hitam dan putih untuk menguasai kawasan papan yang lebih luas, manakala Chaturangam ialah simulasi peperangan untuk menewaskan raja pihak lawan.",
      "ref": "Unit 4, m/s 64-65"
    },
    {
      "id": "d6_sej_u4_s4_09",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "H",
      "q": "Mengapakah permainan wau dan sepak manggis memerlukan kawasan lapang yang terbuka untuk dimainkan?",
      "options": [
        "Wau dimainkan dengan menimang buah pada tangan, manakala sepak manggis menggunakan buaian rotan",
        "Kedua-dua permainan menggunakan papan kayu besar yang tidak muat diletakkan di anjung rumah",
        "Wau memerlukan ruang angin untuk terbang tinggi, manakala sepak manggis memerlukan tiang tinggi untuk menggantung hadiah",
        "Kedua-dua permainan hanya boleh disertai oleh sekurang-kurangnya tujuh orang pemain dalam satu pasukan"
      ],
      "correctIndex": 2,
      "explanation": "Wau perlu diterbangkan melawan arus angin yang kuat manakala sepak manggis memerlukan ruang bagi peserta menendang bola raga ke arah bungkusan hadiah pada tiang tinggi.",
      "ref": "Unit 4, m/s 67"
    },
    {
      "id": "d6_sej_u4_s4_10",
      "unit": "u4",
      "skill": "u4_s4",
      "diff": "H",
      "q": "Permainan seperti sepak raga dan chap teh yang dahulunya dikaitkan dengan kaum tertentu kini dimainkan bersama-sama oleh semua kaum serta diiktiraf sebagai warisan kebangsaan. Apakah faedah utama perkembangan ini?",
      "options": [
        "Mengelakkan kanak-kanak daripada bermain secara berkumpulan di halaman",
        "Mengurangkan keperluan murid mengenali sejarah kesultanan negara",
        "Memupuk semangat kerjasama, persaingan sihat dan perpaduan antara kaum",
        "Membolehkan permainan tradisional menggantikan semua jenis sukan moden di sekolah"
      ],
      "correctIndex": 2,
      "explanation": "Penyertaan pelbagai kaum dalam permainan tradisional mampu memupuk nilai kerjasama, kreativiti, persaingan sihat dan semangat toleransi demi perpaduan masyarakat.",
      "ref": "Unit 4, m/s 64-67"
    },
    {
      "id": "d6_sej_u4_s5_01",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "L",
      "q": "Apakah ciri utama cerita rakyat dalam masyarakat Malaysia?",
      "options": [
        "Berkembang secara lisan daripada satu generasi ke generasi lain tanpa pemilik khusus",
        "Ditulis oleh seorang pengarang moden yang memegang hak cipta sepenuhnya",
        "Dikhaskan untuk persembahan tarian istana oleh golongan bangsawan sahaja",
        "Hanya mengandungi fakta sejarah rasmi tentang pentadbiran kerajaan"
      ],
      "correctIndex": 0,
      "explanation": "Cerita rakyat merupakan kisah warisan masyarakat yang disampaikan dan berkembang secara lisan serta dimiliki bersama tanpa pemilik tertentu.",
      "ref": "Unit 4, m/s 68"
    },
    {
      "id": "d6_sej_u4_s5_02",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "L",
      "q": "Manakah antara berikut menyenaraikan jenis-jenis cerita rakyat yang terdapat dalam masyarakat Malaysia?",
      "options": [
        "Skrip drama moden, novel sains dan catatan harian",
        "Berita, laporan kajian, rencana dan surat rasmi",
        "Pantun, syair, gurindam dan seloka",
        "Legenda, mitos, cerita asal usul dan cerita jenaka"
      ],
      "correctIndex": 3,
      "explanation": "Cerita rakyat merangkumi pelbagai jenis termasuklah legenda, mitos, cerita asal usul, cerita jenaka, cerita binatang dan cerita hikayat.",
      "ref": "Unit 4, m/s 68"
    },
    {
      "id": "d6_sej_u4_s5_03",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "L",
      "q": "Dalam kisah Si Luncai dengan Labu-labunya, bagaimanakah Si Luncai menyelamatkan diri daripada dicampakkan ke tengah laut?",
      "options": [
        "Dia merayu kepada raja supaya hukuman terhadapnya dibatalkan serta-merta",
        "Dia menggantikan dirinya di dalam guni dengan labu air lalu berenang menggunakan dua biji labu",
        "Dia mematahkan pendayung perahu dan memaksa pesuruh raja berpatah balik",
        "Dia berenang menentang arus laut tanpa sebarang alat bantuan"
      ],
      "correctIndex": 1,
      "explanation": "Si Luncai keluar dari guni ketika pesuruh raja leka, mengisi beberapa biji labu air ke dalam guni tersebut lalu terjun dan berenang ke pantai dengan bantuan dua biji labu.",
      "ref": "Unit 4, m/s 69"
    },
    {
      "id": "d6_sej_u4_s5_04",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "L",
      "q": "Dalam legenda Sarawak, apakah kemahiran khusus Puteri Santubong dan Puteri Sejinjang yang membantu memakmurkan Kampung Pasir Kuning serta Kampung Pasir Putih?",
      "options": [
        "Menanam padi bukit dan memburu di hutan",
        "Menenun kain dan menumbuk padi",
        "Bermain alat muzik sape dan menari ngajat",
        "Membuat perahu dan mengutip hasil hutan"
      ],
      "correctIndex": 1,
      "explanation": "Puteri Santubong mempunyai kemahiran menenun kain manakala Puteri Sejinjang cekap menumbuk padi sehingga kedua-dua kampung berjiran itu menjadi makmur.",
      "ref": "Unit 4, m/s 70"
    },
    {
      "id": "d6_sej_u4_s5_05",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "L",
      "q": "Dalam legenda masyarakat Sabah, istilah nunuk ragang merujuk kepada sejenis pokok apa?",
      "options": [
        "Pokok kayu ara merah",
        "Pokok buluh poring",
        "Pokok meranti putih",
        "Pokok kelapa gading"
      ],
      "correctIndex": 0,
      "explanation": "Menurut glosari buku teks, nunuk ragang bermaksud sejenis pokok kayu ara merah yang berkait rapat dengan legenda kemunculan kaum di Tambunan dan Ranau.",
      "ref": "Unit 4, m/s 72"
    },
    {
      "id": "d6_sej_u4_s5_06",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "M",
      "q": "Apakah kesan buruk yang berlaku apabila Puteri Santubong dan Puteri Sejinjang melanggar syarat tidak boleh bergaduh sesama sendiri?",
      "options": [
        "Kedua-dua puteri berjaya melarikan diri ke kayangan bersama Putera Serapi",
        "Gunung Santubong menjadi sumbing manakala kepala Puteri Sejinjang terpecah menjadi beberapa buah pulau",
        "Semua tanaman padi dan hasil tenunan penduduk kampung bertukar menjadi batu",
        "Kampung Pasir Kuning dan Kampung Pasir Putih tenggelam dilanda ombak besar"
      ],
      "correctIndex": 1,
      "explanation": "Akibat melanggar sumpah, pukulan antan menyebabkan Gunung Santubong menjadi sumbing dan tikaman batang belidah memecahkan kepala Puteri Sejinjang menjadi Pulau Kera, Pulau Satang serta Pulau Talang-talang.",
      "ref": "Unit 4, m/s 70-71"
    },
    {
      "id": "d6_sej_u4_s5_07",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "M",
      "q": "Menurut Legenda Nunuk Ragang, bagaimanakah kemunculan pelbagai kaum dan dialek di Tambunan serta Ranau berlaku?",
      "options": [
        "Penduduk berpindah akibat kawasan Sungai Liwagu dilanda kemarau panjang",
        "Penduduk berlayar menggunakan perahu kayu meranti ke pulau-pulau berasingan",
        "Penduduk berpecah selepas berlaku pergaduhan antara dua orang puteri kayangan",
        "Penduduk terjatuh di tempat berlainan dari sayap seekor ayam gergasi lalu membina petempatan berbeza"
      ],
      "correctIndex": 3,
      "explanation": "Penduduk di Sungai Liwagu menaiki sayap seekor ayam gergasi merah bertaji emas dan terjatuh di lokasi berbeza setiap kali sayap dikibarkan, lalu membuka petempatan dan dialek masing-masing.",
      "ref": "Unit 4, m/s 72"
    },
    {
      "id": "d6_sej_u4_s5_08",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "M",
      "q": "Mengapakah Si Luncai dijatuhi hukuman oleh raja dan bagaimanakah dia mengalihkan perhatian pesuruh raja di dalam perahu?",
      "options": [
        "Kerana melanggar syarat kayangan; mengalihkan perhatian dengan memukul gendang",
        "Kerana mempermain-mainkan raja dan pembesar; mengalihkan perhatian dengan mengajarkan lagu hingga mereka leka",
        "Kerana mencuri labu air raja; mengalihkan perhatian dengan membaling buah labu ke laut",
        "Kerana enggan mendayung perahu; mengalihkan perhatian dengan berpura-pura sakit"
      ],
      "correctIndex": 1,
      "explanation": "Si Luncai dihukum kerana mempermain-mainkan raja serta pembesar, lalu dia melekakan pesuruh raja yang kepenatan dengan menyanyikan lagu berulang kali semasa berkayuh.",
      "ref": "Unit 4, m/s 69"
    },
    {
      "id": "d6_sej_u4_s5_09",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "H",
      "q": "Apakah pengajaran utama yang wajar dicontohi oleh murid apabila membandingkan kesudahan kisah Si Luncai dengan Legenda Santubong Sang Puteri?",
      "options": [
        "Kita perlu mempertahankan pendirian dengan kekerasan apabila berlaku perselisihan",
        "Kita digalakkan menipu rakan sekelas apabila menghadapi tugasan yang sukar",
        "Kita hendaklah berfikiran kreatif menghadapi cabaran serta mengelakkan pertelingkahan yang merugikan",
        "Kita tidak perlu mematuhi peraturan sekiranya mempunyai kemahiran yang lebih tinggi"
      ],
      "correctIndex": 2,
      "explanation": "Kisah Si Luncai menonjolkan kepentingan menggunakan akal fikiran yang pantas ketika kesusahan, manakala kisah Puteri Santubong dan Puteri Sejinjang mengingatkan kita agar menepati janji dan menjauhi pergaduhan.",
      "ref": "Unit 4, m/s 69-71"
    },
    {
      "id": "d6_sej_u4_s5_10",
      "unit": "u4",
      "skill": "u4_s5",
      "diff": "H",
      "q": "Seorang murid membaca ketiga-tiga cerita rakyat dalam Unit 4 untuk pembentangan di dalam kelas. Pengelasan dan manfaat manakah yang paling tepat?",
      "options": [
        "Ketiga-tiga kisah itu ialah cerita binatang yang ditulis oleh pengarang tunggal di istana",
        "Hanya kisah Si Luncai merupakan cerita rakyat milik bersama, manakala dua lagi kisah berhak cipta persendirian",
        "Santubong Sang Puteri dan Nunuk Ragang hanyalah hiburan semata-mata tanpa sebarang unsur pengajaran",
        "Santubong Sang Puteri dan Nunuk Ragang ialah cerita legenda tempatan, dan ketiga-tiga kisah itu menyampaikan nasihat, pengajaran serta hiburan"
      ],
      "correctIndex": 3,
      "explanation": "Dalam Unit 4, kisah Santubong Sang Puteri dan Nunuk Ragang dinyatakan sebagai cerita legenda, dan ketiga-tiga cerita rakyat ini berfungsi memberikan nasihat, pengajaran serta hiburan kepada masyarakat.",
      "ref": "Unit 4, m/s 68-72"
    },
    {
      "id": "d6_sej_u5_s1_01",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "L",
      "q": "Bagaimanakah agama dan ajaran utama mula tersebar dalam kalangan masyarakat di negara kita pada zaman dahulu?",
      "options": [
        "Melalui penglibatan pihak pemerintah, para pedagang, dan golongan agama",
        "Melalui perjanjian perdagangan moden dengan kuasa Barat",
        "Melalui pertukaran pelajar antarabangsa ke rantau Asia Timur",
        "Melalui penguatkuasaan undang-undang buruh di kawasan bandar"
      ],
      "correctIndex": 0,
      "explanation": "Agama dan ajaran utama tersebar di Malaysia melalui tiga saluran utama, iaitu peranan pemerintah, kedatangan pedagang, serta sumbangan golongan agama.",
      "ref": "Unit 5, m/s 78"
    },
    {
      "id": "d6_sej_u5_s1_02",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "L",
      "q": "Apakah dua asas utama kepercayaan yang menjadi pegangan penganut agama Islam?",
      "options": [
        "Hukum Karma dan Rukun Negara",
        "Rukun Iman dan Rukun Islam",
        "Empat Kebenaran Mulia dan Veda",
        "Rukun Tetangga dan kitab Hadis"
      ],
      "correctIndex": 1,
      "explanation": "Penganut agama Islam menyembah Allah Yang Maha Esa serta berpegang kepada dua teras kepercayaan iaitu Rukun Islam dan Rukun Iman berpandukan al-Quran dan Hadis.",
      "ref": "Unit 5, m/s 78"
    },
    {
      "id": "d6_sej_u5_s1_03",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "L",
      "q": "Penganut agama Kristian menumpukan hari Ahad untuk melaksanakan aktiviti keagamaan di gereja dengan berpandukan kitab suci yang dikenali sebagai ________.",
      "options": [
        "Analek",
        "Tipitaka",
        "Bible",
        "Veda"
      ],
      "correctIndex": 2,
      "explanation": "Kitab suci bagi penganut agama Kristian ialah Bible, manakala hari Ahad dikhaskan untuk aktiviti keagamaan di gereja.",
      "ref": "Unit 5, m/s 78"
    },
    {
      "id": "d6_sej_u5_s1_04",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "L",
      "q": "Siapakah tokoh pengasas agama Buddha yang ajarannya berteraskan Empat Kebenaran Mulia?",
      "options": [
        "Guru Nanak",
        "Siddharta Gautama",
        "Lao Tzu",
        "Kung Fu Tze"
      ],
      "correctIndex": 1,
      "explanation": "Siddharta Gautama yang digelar Buddha merupakan pengasas agama Buddha dengan ajaran Empat Kebenaran Mulia yang dicapai menerusi Jalan Lapan Lapis Mulia.",
      "ref": "Unit 5, m/s 79"
    },
    {
      "id": "d6_sej_u5_s1_05",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "L",
      "q": "Apakah nama kitab suci yang menjadi pegangan utama penganut agama Sikh?",
      "options": [
        "Kitab Veda",
        "Tao Te Ching",
        "Kitab Tipitaka",
        "Sri Guru Granth Sahib"
      ],
      "correctIndex": 3,
      "explanation": "Agama Sikh yang diasaskan oleh Guru Nanak mempercayai satu Tuhan iaitu Waheguru, dan kitab sucinya dikenali sebagai Sri Guru Granth Sahib.",
      "ref": "Unit 5, m/s 79"
    },
    {
      "id": "d6_sej_u5_s1_06",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "M",
      "q": "Dalam kepercayaan penganut agama Hindu, bagaimanakah Hukum Karma berkait dengan kehidupan seseorang?",
      "options": [
        "Mengaitkan perbuatan seseorang ketika hidup dengan kelahiran semula sesudah mati",
        "Menentukan hari khusus bagi penganut berkumpul di kuil setiap minggu",
        "Menggalakkan penganut mematuhi prinsip kesusilaan terhadap ibu bapa",
        "Mewajibkan penganut mempelajari riwayat hidup tokoh pengasas agama tersebut"
      ],
      "correctIndex": 0,
      "explanation": "Penganut agama Hindu yang berpandukan kitab Veda mempercayai Hukum Karma, iaitu perkaitan antara kelakuan manusia semasa hidup dengan kelahiran semula selepas kematian.",
      "ref": "Unit 5, m/s 79"
    },
    {
      "id": "d6_sej_u5_s1_07",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "M",
      "q": "Manakah padanan yang tepat antara ajaran utama (Konfusius atau Tao) di Malaysia dengan pengasas, nilai atau kitabnya?",
      "options": [
        "Ajaran Tao — Diasaskan oleh Kung Fu Tze — Buku Analek",
        "Ajaran Konfusius — Diasaskan oleh Lao Tzu — Buku Tao Te Ching",
        "Ajaran Tao — Menekankan Jalan Lapan Lapis Mulia — Buku Dao De Jing",
        "Ajaran Konfusius — Menekankan ketaatan kepada ibu bapa — Buku Analek"
      ],
      "correctIndex": 3,
      "explanation": "Ajaran Konfusius diasaskan oleh Kung Fu Tze dan dihimpunkan dalam buku Analek yang mengutamakan prinsip moral seperti perikemanusiaan, kesusilaan, dan ketaatan kepada ibu bapa.",
      "ref": "Unit 5, m/s 80"
    },
    {
      "id": "d6_sej_u5_s1_08",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "M",
      "q": "Mengapakah penganut ajaran Tao mengutamakan kehidupan yang harmoni dengan alam semesta?",
      "options": [
        "Kerana buku Analek mewajibkan penjagaan alam sekitar di kawasan bandar",
        "Kerana ajaran tersebut menyamakan alam semula jadi dengan dewa laut",
        "Kerana mereka berpegang kepada konsep kelahiran semula dalam kitab Veda",
        "Kerana mereka percaya perjalanan hidup manusia ditentukan oleh Tao yang bererti 'jalan'"
      ],
      "correctIndex": 3,
      "explanation": "Menurut ajaran Tao yang diasaskan oleh Lao Tzu dalam buku Tao Te Ching, perkataan Tao bererti 'jalan' yang menentukan kehidupan manusia, lalu keharmonian dengan alam semesta amat dititikberatkan.",
      "ref": "Unit 5, m/s 80"
    },
    {
      "id": "d6_sej_u5_s1_09",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "H",
      "q": "Seorang murid sedang menyusun kad nota tentang satu agama di Malaysia:\n• Pengikutnya berasal daripada satu kumpulan kaum yang sama.\n• Tradisi keagamaannya berkait rapat dengan sejarah serta budaya kaum tersebut.\n• Ajarannya diasaskan oleh Guru Nanak dan penganutnya beriman kepada satu Tuhan bernama Waheguru.\nBerdasarkan ciri di atas, pasangan agama dan kitab sucinya yang tepat ialah ________.",
      "options": [
        "Agama Buddha — Kitab Tipitaka",
        "Agama Hindu — Kitab Veda",
        "Agama Sikh — Sri Guru Granth Sahib",
        "Agama Islam — al-Quran dan Hadis"
      ],
      "correctIndex": 2,
      "explanation": "Agama Sikh dianuti oleh kaum Sikh yang tradisinya berkait rapat dengan sejarah dan budaya kaum mereka, mempercayai satu Tuhan iaitu Waheguru, dan berpandukan kitab suci Sri Guru Granth Sahib.",
      "ref": "Unit 5, m/s 79"
    },
    {
      "id": "d6_sej_u5_s1_10",
      "unit": "u5",
      "skill": "u5_s1",
      "diff": "H",
      "q": "Amir mengelaskan agama dan ajaran di Malaysia kepada dua kumpulan: Kumpulan X (berpandukan kitab suci keagamaan) dan Kumpulan Y (ajaran falsafah moral yang terkandung dalam buku himpunan ajaran pengasasnya). Pasangan manakah yang tergolong dalam Kumpulan Y?",
      "options": [
        "Ajaran Konfusius dan Ajaran Tao",
        "Agama Buddha dan Ajaran Konfusius",
        "Agama Hindu dan Agama Buddha",
        "Agama Sikh dan Ajaran Tao"
      ],
      "correctIndex": 0,
      "explanation": "Islam, Kristian, Buddha, Hindu, dan Sikh merupakan agama yang mempunyai kitab suci masing-masing, manakala ajaran Konfusius (buku Analek) dan ajaran Tao (buku Tao Te Ching) ialah ajaran moral dan falsafah kehidupan.",
      "ref": "Unit 5, m/s 78-80"
    },
    {
      "id": "d6_sej_u5_s2_01",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "L",
      "q": "Apakah istilah bagi kepercayaan tradisional masyarakat yang dipengaruhi oleh unsur alam semesta?",
      "options": [
        "Hukum Karma",
        "Ajaran Tao",
        "Animisme",
        "Kaamatan"
      ],
      "correctIndex": 2,
      "explanation": "Animisme ialah kepercayaan tradisional masyarakat yang dipengaruhi oleh alam semesta.",
      "ref": "Unit 5, m/s 81"
    },
    {
      "id": "d6_sej_u5_s2_02",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "L",
      "q": "Mengapakah masyarakat Orang Asli suku Mah Meri di Pulau Carey melaksanakan upacara Puja Pantai?",
      "options": [
        "Untuk meraikan hasil tuaian padi pertama bersama penduduk kampung",
        "Untuk menghalau gangguan kuasa ghaib sebelum membuka kebun baharu",
        "Untuk memohon perlindungan serta pengampunan daripada semangat laut",
        "Untuk menjamu makanan kepada tetamu selepas upacara kematian"
      ],
      "correctIndex": 2,
      "explanation": "Suku Mah Meri di Pulau Carey mengadakan upacara Puja Pantai bagi mendapatkan perlindungan dan pengampunan daripada semangat laut.",
      "ref": "Unit 5, m/s 81"
    },
    {
      "id": "d6_sej_u5_s2_03",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "L",
      "q": "Siapakah tokoh penyair yang menjalankan upacara Miring dengan jampi mantera dalam masyarakat Iban?",
      "options": [
        "Bobohizan",
        "Lemambang",
        "Petara",
        "Kinorohingan"
      ],
      "correctIndex": 1,
      "explanation": "Dalam masyarakat Iban, upacara Miring bagi memuja Petara dimulakan dengan jampi mantera dan dilaksanakan oleh seorang penyair yang digelar Lemambang.",
      "ref": "Unit 5, m/s 82"
    },
    {
      "id": "d6_sej_u5_s2_04",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "L",
      "q": "Apakah tujuan masyarakat Bisaya di Sarawak menjalankan upacara Tamarok?",
      "options": [
        "Memohon perlindungan daripada semangat laut di pesisir pantai",
        "Menyingkirkan kuasa ghaib daripada tubuh orang yang sakit",
        "Memuja semangat padi semasa musim menuai",
        "Menyampaikan alamat dan petanda melalui mimpi seseorang"
      ],
      "correctIndex": 1,
      "explanation": "Masyarakat Bisaya di Sarawak melaksanakan upacara Tamarok untuk menghalau kuasa ghaib daripada badan pesakit.",
      "ref": "Unit 5, m/s 82"
    },
    {
      "id": "d6_sej_u5_s2_05",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "L",
      "q": "Apakah upacara kepercayaan terhadap semangat padi yang diamalkan oleh masyarakat Kadazandusun ketika Pesta Kaamatan?",
      "options": [
        "Upacara Miring",
        "Upacara Tamarok",
        "Upacara Magavau",
        "Upacara Ngeduang"
      ],
      "correctIndex": 2,
      "explanation": "Masyarakat Kadazandusun mempercayai semangat padi dengan mengadakan upacara Magavau (Maga'au) yang dipimpin oleh Bobohizan semasa Pesta Kaamatan di Sabah.",
      "ref": "Unit 5, m/s 83"
    },
    {
      "id": "d6_sej_u5_s2_06",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "M",
      "q": "Bagaimanakah kepercayaan suku Temiar dan Semai tentang punca penyakit dapat dibandingkan dengan amalan perubatan tradisional masyarakat Bisaya?",
      "options": [
        "Kedua-duanya mengaitkan penyakit dengan kuasa jahat atau ghaib yang dihalau melalui upacara",
        "Kedua-duanya menggunakan tarian Pesta Kaamatan untuk mengubat pesakit",
        "Kedua-duanya bergantung kepada mimpi yang disampaikan oleh Kinorohingan",
        "Kedua-duanya memuja semangat laut dengan menjamu tetamu di pantai"
      ],
      "correctIndex": 0,
      "explanation": "Suku Temiar dan Semai mempercayai penyakit disebabkan oleh kuasa jahat lalu mengadakan ritual untuk menghalaunya, manakala masyarakat Bisaya menjalankan upacara Tamarok bagi menghalau kuasa ghaib daripada pesakit.",
      "ref": "Unit 5, m/s 81-82"
    },
    {
      "id": "d6_sej_u5_s2_07",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "M",
      "q": "Manakah pernyataan yang tepat tentang perbezaan upacara tradisional antara etnik Bajau di pantai barat dengan pantai timur Sabah?",
      "options": [
        "Bajau di Semporna menjamu makanan kepada tetamu si mati, manakala Bajau di Kota Belud melarang jamuan tersebut",
        "Bajau di Kota Belud menjamu tetamu sebagai sedekah dalam upacara Ngeduang, manakala Bajau di Semporna menghormati warisan nenek moyang melalui Mag'ombo",
        "Bajau di Kota Belud menjalankan Mag'ombo, manakala Bajau di Semporna menjalankan Ngeduang",
        "Bajau di Kota Belud memuja semangat padi, manakala Bajau di Semporna memuja semangat laut"
      ],
      "correctIndex": 1,
      "explanation": "Etnik Bajau di pantai barat Sabah (Kota Belud) mengamalkan upacara Ngeduang iaitu keluarga si mati menjamu tetamu sebagai sedekah, manakala di pantai timur (Semporna) mereka mengadakan Mag'ombo bagi menghargai warisan turun-temurun nenek moyang.",
      "ref": "Unit 5, m/s 83"
    },
    {
      "id": "d6_sej_u5_s2_08",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "M",
      "q": "Antara padanan masyarakat, negeri, dan unsur kepercayaan berikut, manakah yang betul?",
      "options": [
        "Mah Meri — Sabah — Semangat padi",
        "Bisaya — Sarawak — Kuasa ghaib",
        "Kadazandusun — Sarawak — Petara",
        "Iban — Sabah — Kinorohingan"
      ],
      "correctIndex": 1,
      "explanation": "Masyarakat Bisaya di Sarawak mempercayai kuasa ghaib, manakala kaum Iban di Sarawak mempercayai Petara dan kaum Kadazandusun di Sabah mempercayai Kinorohingan serta semangat padi.",
      "ref": "Unit 5, m/s 81-83"
    },
    {
      "id": "d6_sej_u5_s2_09",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "H",
      "q": "Seorang pengkaji membandingkan kepercayaan dua komuniti di Malaysia Timur:\n• Komuniti P membaca jampi mantera sebelum meneroka kawasan pertanian baharu.\n• Komuniti Q menjalankan upacara khas yang diketuai oleh ketua bomoh untuk menghormati semangat padi.\nApakah Komuniti P dan Komuniti Q?",
      "options": [
        "P ialah kaum Bisaya; Q ialah kaum Kadazandusun",
        "P ialah suku Semai; Q ialah kaum Iban",
        "P ialah kaum Bajau; Q ialah suku Mah Meri",
        "P ialah kaum Iban; Q ialah kaum Bisaya"
      ],
      "correctIndex": 0,
      "explanation": "Kaum Bisaya di Sarawak yang bekerja sebagai petani membaca jampi mantera untuk mengelakkan gangguan kuasa ghaib semasa membuka kawasan pertanian baharu, manakala kaum Kadazandusun di Sabah menjalankan upacara Magavau yang diketuai Bobohizan bagi semangat padi.",
      "ref": "Unit 5, m/s 82-83"
    },
    {
      "id": "d6_sej_u5_s2_10",
      "unit": "u5",
      "skill": "u5_s2",
      "diff": "H",
      "q": "Mengapakah pendedahan tentang kepelbagaian kepercayaan tradisional seperti Puja Pantai, Miring, dan Mag'ombo penting kepada murid sekolah di Malaysia?",
      "options": [
        "Supaya murid dapat memahami dan menghormati budaya kaum lain demi mengekalkan keharmonian hidup",
        "Supaya semua rakyat Malaysia mengamalkan upacara tradisional yang seragam di setiap negeri",
        "Supaya kepercayaan animisme dapat menggantikan peruntukan agama rasmi di peringkat persekutuan",
        "Supaya murid mengetahui bahawa semua upacara tradisional hanya wujud di Semenanjung Malaysia"
      ],
      "correctIndex": 0,
      "explanation": "Memahami serta menghormati agama dan budaya pelbagai kaum dapat memupuk sikap bertimbang rasa dan menjamin kehidupan masyarakat yang aman serta sejahtera.",
      "ref": "Unit 5, m/s 83"
    },
    {
      "id": "d6_sej_u5_s3_01",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "L",
      "q": "Apakah yang dinyatakan dalam Perkara 3(1) Perlembagaan Persekutuan?",
      "options": [
        "Islam ialah agama Persekutuan, manakala agama lain bebas diamalkan secara aman dan damai",
        "Yang di-Pertuan Agong menjadi Ketua Agama Islam di seluruh negeri beraja di Tanah Melayu",
        "Setiap kumpulan agama bebas menguruskan hartanah tempat ibadat sendiri",
        "Sebarang pindaan hal agama hanya memerlukan kelulusan mesyuarat majlis perbandaran"
      ],
      "correctIndex": 0,
      "explanation": "Perkara 3(1) menetapkan bahawa Islam ialah agama bagi Persekutuan, tetapi agama lain boleh diamalkan dengan aman dan damai di mana-mana bahagian Persekutuan.",
      "ref": "Unit 5, m/s 84"
    },
    {
      "id": "d6_sej_u5_s3_02",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "L",
      "q": "Siapakah yang diperuntukkan sebagai Ketua Agama Islam bagi negeri Melaka, Pulau Pinang, Sabah, dan Sarawak menurut Perkara 3(3)?",
      "options": [
        "Yang di-Pertuan Agong",
        "Yang di-Pertua Negeri masing-masing",
        "Majlis Mesyuarat Kerajaan Negeri",
        "Ketua Menteri setiap negeri"
      ],
      "correctIndex": 0,
      "explanation": "Berdasarkan Perkara 3(3) Perlembagaan Persekutuan, perlembagaan negeri Melaka, Pulau Pinang, Sabah, dan Sarawak memperuntukkan kedudukan Yang di-Pertuan Agong sebagai Ketua Agama Islam di negeri berkenaan.",
      "ref": "Unit 5, m/s 84"
    },
    {
      "id": "d6_sej_u5_s3_03",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "L",
      "q": "Wilayah manakah yang meletakkan Yang di-Pertuan Agong sebagai Ketua Agama Islam di bawah Perkara 3(5)?",
      "options": [
        "Melaka, Pulau Pinang, dan Sabah",
        "Kuching, Kota Kinabalu, dan Johor Bahru",
        "Kuala Lumpur, Labuan, dan Putrajaya",
        "Kelantan, Terengganu, dan Pahang"
      ],
      "correctIndex": 2,
      "explanation": "Perkara 3(5) memperuntukkan bahawa Yang di-Pertuan Agong menjadi Ketua Agama Islam bagi Wilayah Persekutuan Kuala Lumpur, Labuan, dan Putrajaya.",
      "ref": "Unit 5, m/s 84"
    },
    {
      "id": "d6_sej_u5_s3_04",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "L",
      "q": "Hak apakah yang dijamin kepada setiap individu di bawah Perkara 11(1) Perlembagaan Persekutuan?",
      "options": [
        "Hak melantik Ketua Agama Islam di peringkat Wilayah Persekutuan",
        "Hak menubuhkan negeri baharu berdasarkan kepercayaan kumpulan masing-masing",
        "Hak menganuti dan mengamalkan agama serta tertakluk kepada fasal (4) untuk mengembangkannya",
        "Hak menggubal undang-undang syariah tanpa rujukan pihak berkuasa"
      ],
      "correctIndex": 2,
      "explanation": "Perkara 11(1) Perlembagaan Persekutuan menjamin hak tiap-tiap orang untuk menganuti, mengamalkan agamanya, dan tertakluk kepada fasal (4), mengembangkannya.",
      "ref": "Unit 5, m/s 85"
    },
    {
      "id": "d6_sej_u5_s3_05",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "L",
      "q": "Apakah hak yang diberikan kepada setiap kumpulan agama menerusi Perkara 11(3)(a) Perlembagaan Persekutuan?",
      "options": [
        "Hak mentadbir dan menguruskan hal ehwal agamanya sendiri",
        "Hak menggantikan cuti umum negeri dengan sambutan perayaan sendiri",
        "Hak mewajibkan penduduk setempat menyertai upacara mereka",
        "Hak meminda peruntukan Perkara 3 tanpa perkenan raja"
      ],
      "correctIndex": 0,
      "explanation": "Perkara 11(3)(a) menyatakan bahawa tiap-tiap kumpulan agama berhak menguruskan hal ehwal agamanya sendiri.",
      "ref": "Unit 5, m/s 85"
    },
    {
      "id": "d6_sej_u5_s3_06",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "M",
      "q": "Apakah syarat penting yang mesti dipatuhi sekiranya terdapat cadangan untuk mengubah kedudukan agama Islam dalam Perlembagaan Persekutuan?",
      "options": [
        "Mendapat undian majoriti daripada kalangan pelajar institusi pengajian tinggi",
        "Mendapat sokongan persatuan penduduk di semua Wilayah Persekutuan",
        "Mendapat titah perkenan Yang di-Pertuan Agong dan Raja-Raja Melayu",
        "Mendapat kelulusan bertulis daripada semua ketua rumah ibadat"
      ],
      "correctIndex": 2,
      "explanation": "Sebarang perubahan berkaitan kedudukan agama Islam dalam Perlembagaan Persekutuan perlu mendapat titah perkenan Yang di-Pertuan Agong serta Raja-Raja Melayu.",
      "ref": "Unit 5, m/s 84"
    },
    {
      "id": "d6_sej_u5_s3_08",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "M",
      "q": "Antara gabungan tempat berikut, manakah yang kesemuanya TIDAK diketuai oleh Sultan atau Raja dalam hal ehwal agama Islam, sebaliknya diletakkan di bawah Yang di-Pertuan Agong menurut Perkara 3?",
      "options": [
        "Selangor, Sabah, dan Terengganu",
        "Pulau Pinang, Sarawak, dan Labuan",
        "Perak, Kedah, dan Kelantan",
        "Johor, Melaka, dan Negeri Sembilan"
      ],
      "correctIndex": 1,
      "explanation": "Yang di-Pertuan Agong menjadi Ketua Agama Islam di negeri tidak beraja (Melaka, Pulau Pinang, Sabah, dan Sarawak) mengikut Perkara 3(3) serta Wilayah Persekutuan (Kuala Lumpur, Labuan, dan Putrajaya) mengikut Perkara 3(5).",
      "ref": "Unit 5, m/s 84"
    },
    {
      "id": "d6_sej_u5_s3_09",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "H",
      "q": "Seorang murid berpendapat bahawa kedudukan Islam sebagai agama Persekutuan bermakna agama lain tidak dibenarkan mengadakan amalan keagamaan di Malaysia. Mengapakah pendapat itu kurang tepat berdasarkan Perlembagaan Persekutuan?",
      "options": [
        "Kerana Perkara 11(3)(a) melarang aktiviti keagamaan dijalankan oleh mana-mana kumpulan",
        "Kerana Perkara 3(3) memindahkan semua urusan agama lain kepada kerajaan negeri",
        "Kerana Perkara 3(1) dan Perkara 11(1) menjamin agama lain boleh diamalkan dengan aman dan damai",
        "Kerana Malaysia tidak mempunyai sebarang peruntukan tentang agama Persekutuan"
      ],
      "correctIndex": 2,
      "explanation": "Walaupun Perkara 3(1) menetapkan Islam sebagai agama Persekutuan, peruntukan yang sama bersama Perkara 11(1) menjamin hak penganut agama lain untuk menganuti dan mengamalkan agama mereka secara aman dan damai.",
      "ref": "Unit 5, m/s 84-85"
    },
    {
      "id": "d6_sej_u5_s3_10",
      "unit": "u5",
      "skill": "u5_s3",
      "diff": "H",
      "q": "Perhatikan senarai kes berikut:\n(I) Seorang warganegara bebas memilih serta mengamalkan ajaran agamanya.\n(II) Urusan agama Islam di Putrajaya berada di bawah naungan Yang di-Pertuan Agong.\n(III) Kedudukan Raja di negeri beraja diiktiraf sebagai Ketua Agama Islam negerinya.\nPadanan fasal Perlembagaan yang tepat bagi (I), (II), dan (III) secara berturutan ialah ________.",
      "options": [
        "Perkara 11(1), Perkara 3(5), Perkara 3(2)",
        "Perkara 3(1), Perkara 3(3), Perkara 11(1)",
        "Perkara 11(3)(a), Perkara 3(2), Perkara 3(5)",
        "Perkara 3(5), Perkara 11(1), Perkara 3(3)"
      ],
      "correctIndex": 0,
      "explanation": "Hak individu menganuti dan mengamalkan agama termaktub dalam Perkara 11(1), Ketua Agama Islam Wilayah Persekutuan dalam Perkara 3(5), manakala kedudukan Raja sebagai Ketua Agama Islam di negerinya dalam Perkara 3(2).",
      "ref": "Unit 5, m/s 84-85"
    },
    {
      "id": "d6_sej_u5_s4_01",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "L",
      "q": "Apakah nama rumah ibadat bagi penganut agama Sikh di Malaysia?",
      "options": [
        "Tokong",
        "Kuil",
        "Wat",
        "Gurdwara"
      ],
      "correctIndex": 3,
      "explanation": "Rumah ibadat penganut agama Sikh dikenali sebagai gurdwara, manakala kuil untuk penganut Hindu serta tokong atau wat untuk penganut Buddha.",
      "ref": "Unit 5, m/s 88"
    },
    {
      "id": "d6_sej_u5_s4_02",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "L",
      "q": "Berdasarkan contoh Wat Boonyaram di Padang Sera, rumah ibadat wat menjadi tempat ibadat masyarakat Siam beragama Buddha di negeri ________.",
      "options": [
        "Melaka dan Johor",
        "Sabah dan Sarawak",
        "Kedah dan Perlis",
        "Negeri Sembilan dan Pahang"
      ],
      "correctIndex": 2,
      "explanation": "Wat seperti Wat Boonyaram di Padang Sera, Kedah ialah rumah ibadat bagi masyarakat Siam beragama Buddha di negeri Kedah dan Perlis.",
      "ref": "Unit 5, m/s 87"
    },
    {
      "id": "d6_sej_u5_s4_03",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "L",
      "q": "Apakah keistimewaan Masjid Negara di Kuala Lumpur dari segi reka bentuk dan kapasiti jemaahnya?",
      "options": [
        "Dibina sepenuhnya daripada kaca berwarna dan menempatkan 5 000 jemaah",
        "Merupakan bangunan granit tertua yang meniru reka bentuk Masjid Agung Demak",
        "Dibina pada abad ke-18 berunsurkan seni bina Alam Melayu di Nilam Puri",
        "Menggabungkan seni bina moden, Islam, dan tempatan serta mampu memuatkan 15 000 jemaah"
      ],
      "correctIndex": 3,
      "explanation": "Masjid Negara di Kuala Lumpur memadukan ciri seni bina moden, Islam, dan tempatan serta berupaya menampung 15 000 orang jemaah pada satu-satu masa.",
      "ref": "Unit 5, m/s 86"
    },
    {
      "id": "d6_sej_u5_s4_04",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "L",
      "q": "Apakah keunikan Kuil Arulmigu Sri Rajakaliamman di Jalan Tebrau, Johor Bahru yang tercatat dalam Malaysia Book of Records?",
      "options": [
        "Kuil kaca pertama dan satu-satunya yang terdapat di Malaysia",
        "Kuil bersejarah yang menggabungkan seni bina Moor dan moden",
        "Kuil tertua yang digunakan bersama oleh penganut Buddha dan Tao",
        "Kuil batu granit yang paling awal dibina di Semenanjung Malaysia"
      ],
      "correctIndex": 0,
      "explanation": "Kuil Arulmigu Sri Rajakaliamman di Johor Bahru dibina semula daripada kaca dan diiktiraf dalam Malaysia Book of Records sebagai kuil kaca pertama dan satu-satunya di Malaysia.",
      "ref": "Unit 5, m/s 88"
    },
    {
      "id": "d6_sej_u5_s4_05",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "L",
      "q": "Di manakah terletaknya Gereja St. Michael yang merupakan gereja granit tertua di Malaysia?",
      "options": [
        "George Town, Pulau Pinang",
        "Sandakan, Sabah",
        "Hang Tuah Jaya, Melaka",
        "Kuching, Sarawak"
      ],
      "correctIndex": 1,
      "explanation": "Gereja St. Michael yang terletak di Sandakan, Sabah ialah gereja tertua di negeri Sabah dan gereja granit tertua di Malaysia.",
      "ref": "Unit 5, m/s 87"
    },
    {
      "id": "d6_sej_u5_s4_06",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "M",
      "q": "Apakah maklumat yang tepat tentang penggunaan Tokong Cheng Hoon Teng di Melaka yang dibina pada tahun 1645?",
      "options": [
        "Ia dibina oleh seorang ulama dari Sumatera mengikut reka bentuk Jawa Tengah",
        "Ia digunakan oleh kedua-dua penganut agama Buddha dan ajaran Tao dalam upacara keagamaan",
        "Ia menjadi tapak warisan di bawah Akta Warisan Kebangsaan dengan seni bina Moor",
        "Ia merupakan wat terbesar di utara Semenanjung bagi komuniti Siam"
      ],
      "correctIndex": 1,
      "explanation": "Tokong Cheng Hoon Teng yang bermaksud 'Kediaman di Awan Hijau' dibina pada tahun 1645 di Melaka dan digunakan oleh penganut agama Buddha serta ajaran Tao dalam upacara keagamaan.",
      "ref": "Unit 5, m/s 87"
    },
    {
      "id": "d6_sej_u5_s4_07",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "M",
      "q": "Manakah perbandingan yang tepat antara Masjid Kampung Laut di Kelantan dengan Masjid Al-Qadim di Sarawak?",
      "options": [
        "Masjid Kampung Laut didirikan oleh ulama dari Sumatera, manakala Masjid Al-Qadim merupakan masjid moden di Putrajaya",
        "Masjid Kampung Laut bercirikan seni bina Alam Melayu, manakala Masjid Al-Qadim mengikut reka bentuk Masjid Agung Demak di Jawa Tengah",
        "Masjid Kampung Laut terletak di Sibu, manakala Masjid Al-Qadim terletak di Kota Bharu",
        "Masjid Kampung Laut dibina pada tahun 1830, manakala Masjid Al-Qadim dibina pada abad ke-18"
      ],
      "correctIndex": 1,
      "explanation": "Masjid Kampung Laut di Nilam Puri, Kota Bharu dibina pada abad ke-18 dengan ciri seni bina Alam Melayu, manakala Masjid Al-Qadim di Sibu dibina pada tahun 1830 oleh Tuan Haji Salam Minangkabau mengikut reka bentuk Masjid Agung Demak.",
      "ref": "Unit 5, m/s 86-87"
    },
    {
      "id": "d6_sej_u5_s4_08",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "M",
      "q": "Apakah gabungan pengaruh seni bina yang terdapat pada Wadda Gurdwara Sahib di Pulau Pinang yang juga dikenali dengan nama asal Diamond Jubilee Sikh Temple?",
      "options": [
        "Seni bina granit Eropah Utara dan seni bina Siam",
        "Seni bina kaca tempatan dan seni bina Cina klasik",
        "Seni bina Alam Melayu dan seni bina Jawa Tengah",
        "Seni bina moden dan seni bina Moor yang menggabungkan unsur Afrika Utara, Portugal, serta Sepanyol"
      ],
      "correctIndex": 3,
      "explanation": "Wadda Gurdwara Sahib di George Town merupakan tapak warisan di bawah Akta Warisan Kebangsaan yang menggabungkan seni bina moden dan seni bina Moor (gabungan Afrika Utara dengan Portugal serta Sepanyol).",
      "ref": "Unit 5, m/s 88"
    },
    {
      "id": "d6_sej_u5_s4_09",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "H",
      "q": "Murid Tahun 6 mengadakan lawatan sambil belajar ke sebuah rumah ibadat kaum lain sempena projek Sejarah. Ketika tiba di sana, sekumpulan penganut sedang khusyuk menjalankan upacara keagamaan. Tindakan manakah yang menunjukkan pemahaman terbaik tentang adab di rumah ibadat?",
      "options": [
        "Bergurau senda dengan rakan di ruang ibadat supaya suasana lawatan menjadi lebih ceria",
        "Mengkritik perbezaan cara ibadat penganut tersebut secara terbuka di hadapan orang ramai",
        "Memasuki kawasan upacara tanpa izin penganjur untuk mengambil gambar dari jarak dekat",
        "Menjaga kesopanan diri, merendahkan suara, dan tidak mengganggu kelancaran upacara yang sedang berlangsung"
      ],
      "correctIndex": 3,
      "explanation": "Sebagai warganegara yang prihatin, kita hendaklah menjaga adab kesopanan ketika berada di rumah ibadat, termasuk bersikap bertimbang rasa dan tidak mengganggu penganut yang sedang beribadat.",
      "ref": "Unit 5, m/s 88, 91"
    },
    {
      "id": "d6_sej_u5_s4_10",
      "unit": "u5",
      "skill": "u5_s4",
      "diff": "H",
      "q": "Mengapakah setiap warganegara Malaysia perlu memahami dan mengamalkan adab kesopanan apabila berada di mana-mana rumah ibadat, walaupun bukan rumah ibadat agamanya sendiri?",
      "options": [
        "Kerana sikap hormat-menghormati dan bertimbang rasa di rumah ibadat memupuk perpaduan masyarakat dan kesejahteraan negara",
        "Kerana semua rumah ibadat di Malaysia mempunyai peraturan seni bina dan upacara yang sama",
        "Kerana undang-undang mewajibkan setiap rakyat menukar agama selepas melawat rumah ibadat",
        "Kerana rumah ibadat hanya dibuka untuk tujuan pelancongan luar negara sahaja"
      ],
      "correctIndex": 0,
      "explanation": "Rumah ibadat memainkan peranan penting dalam kehidupan penganutnya; menjaga adab kesopanan serta bersikap bertimbang rasa membantu melahirkan masyarakat harmoni dan negara yang sejahtera.",
      "ref": "Unit 5, m/s 88, 91"
    },
    {
      "id": "d6_sej_u6_s1_01",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "L",
      "q": "Apakah perayaan masyarakat Islam yang diraikan pada 1 Syawal selepas menunaikan ibadah puasa selama sebulan?",
      "options": [
        "Hari Raya Aidilfitri",
        "Hari Raya Aidiladha",
        "Hari Wesak",
        "Hari Genggulang"
      ],
      "correctIndex": 0,
      "explanation": "Umat Islam meraikan Hari Raya Aidilfitri pada 1 Syawal mengikut kalendar Islam sebagai tanda kegembiraan selepas sebulan berpuasa.",
      "ref": "Unit 6, m/s 94"
    },
    {
      "id": "d6_sej_u6_s1_02",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "L",
      "q": "Sambutan Tahun Baharu Cina berlanjutan selama 15 hari dan berakhir dengan perayaan apa?",
      "options": [
        "Hari Tasyrik",
        "Tawun Empai",
        "Chap Goh Meh",
        "Pesta Kaamatan"
      ],
      "correctIndex": 2,
      "explanation": "Sambutan Tahun Baharu Cina bermula pada hari pertama kalendar Cina dan diraikan selama 15 hari hingga hari Chap Goh Meh.",
      "ref": "Unit 6, m/s 94"
    },
    {
      "id": "d6_sej_u6_s1_03",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "L",
      "q": "Persembahan tarian tradisional apakah yang diadakan di rumah panjang semasa sambutan Hari Gawai pada 1 Jun?",
      "options": [
        "Tarian Bhangra",
        "Tarian sumazau",
        "Tarian ngajat",
        "Tarian branyo"
      ],
      "correctIndex": 2,
      "explanation": "Kaum Dayak, Iban, dan Bidayuh menyambut Hari Gawai pada 1 Jun dengan mengadakan persembahan tarian ngajat di dalam rumah panjang.",
      "ref": "Unit 6, m/s 95"
    },
    {
      "id": "d6_sej_u6_s1_04",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "L",
      "q": "Nyanyian gembira atau puji-pujian dari rumah ke rumah semasa sambutan Krismas pada 25 Disember dikenali sebagai apa?",
      "options": [
        "Magavau",
        "Gidha",
        "Karol",
        "Kolam"
      ],
      "correctIndex": 2,
      "explanation": "Penganut agama Kristian menyambut Krismas pada 25 Disember dengan bertukar hadiah dan menyanyikan karol dari rumah ke rumah.",
      "ref": "Unit 6, m/s 95"
    },
    {
      "id": "d6_sej_u6_s1_05",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "L",
      "q": "Di manakah kaum Sikh berkumpul untuk melaksanakan upacara sembahyang sempena sambutan Vaisakhi?",
      "options": [
        "Di pelabuhan nelayan",
        "Di Gurdwara",
        "Di balai raya kampung",
        "Di rumah panjang"
      ],
      "correctIndex": 1,
      "explanation": "Pada 14 haribulan Vaisakh mengikut kalendar Sikh, kaum Sikh mengadakan upacara sembahyang di Gurdwara dan mempersembahkan tarian Bhangra serta Gidha di luar kawasan Gurdwara.",
      "ref": "Unit 6, m/s 96"
    },
    {
      "id": "d6_sej_u6_s1_06",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "M",
      "q": "Padanan manakah yang betul antara suku kaum Orang Asli dengan nama sambutan Tahun Baharu mereka?",
      "options": [
        "Suku Temuan — Tawun Empai",
        "Suku Mah Meri — Tawun Empai",
        "Suku Semai — Tahun Bahauk",
        "Suku Jakun — Jis Pai"
      ],
      "correctIndex": 1,
      "explanation": "Suku Mah Meri menyebut sambutan Tahun Baharu sebagai Tawun Empai, manakala suku Jakun menyebutnya Tahon Baro, suku Semai sebagai Jis Pai, dan suku Temuan sebagai Tahun Bahauk.",
      "ref": "Unit 6, m/s 96"
    },
    {
      "id": "d6_sej_u6_s1_07",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "M",
      "q": "Antara amalan berikut, kumpulan aktiviti manakah yang kesemuanya berkaitan dengan sambutan Pesta Kaamatan di Sabah?",
      "options": [
        "Menghias kapal nelayan, tarian branyo, dan pemberian daging korban",
        "Ritual Magavau oleh Bobohizan, tarian sumazau, dan Unduk Ngadau",
        "Menghias rumah dengan kolam, menyalakan pelita, dan tarian ngajat",
        "Memandikan patung Buddha, mengagihkan makanan kepada sami, dan karol"
      ],
      "correctIndex": 1,
      "explanation": "Semasa Pesta Kaamatan pada bulan Mei, kaum Kadazandusun dan Murut mengadakan upacara Magavau oleh Bobohizan, tarian sumazau, dan pertandingan Unduk Ngadau.",
      "ref": "Unit 6, m/s 95"
    },
    {
      "id": "d6_sej_u6_s1_08",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "M",
      "q": "Bagaimanakah amalan perayaan Thaipusam berbeza daripada sambutan Deepavali bagi masyarakat Hindu?",
      "options": [
        "Thaipusam disambut pada bulan Aippasi dengan menghias rumah menggunakan kolam",
        "Thaipusam melibatkan pembayar niat membawa persembahan kepada Dewa Murugan antara akhir Januari hingga awal Februari",
        "Thaipusam disambut pada bulan Mei dengan memandikan patung suci sebagai tanda penyucian diri",
        "Thaipusam disambut selama 15 hari berturut-turut dan diakhiri dengan makan malam keluarga"
      ],
      "correctIndex": 1,
      "explanation": "Thaipusam disambut pada bulan penuh antara akhir Januari hingga awal Februari apabila pembayar niat membawa persembahan kepada Dewa Murugan, manakala Deepavali disambut pada bulan Aippasi dengan hiasan kolam dan pelita.",
      "ref": "Unit 6, m/s 95"
    },
    {
      "id": "d6_sej_u6_s1_09",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "H",
      "q": "Semasa bercuti di Melaka pada bulan Jun, keluarga Aiman menyaksikan deretan kapal dihias cantik serta persembahan tarian branyo oleh penduduk keturunan Portugis. Apakah perayaan yang sedang disaksikan oleh mereka?",
      "options": [
        "Pesta Kaamatan bagi mensyukuri hasil tuaian padi",
        "Hari Moyang untuk mendoakan kesejahteraan kampung",
        "Sambutan Vaisakhi bagi meraikan hasil tanaman",
        "Perayaan San Pedro bagi meraikan penaung nelayan"
      ],
      "correctIndex": 3,
      "explanation": "Masyarakat berketurunan Portugis di Melaka menyambut perayaan San Pedro pada bulan Jun dengan menghias kapal dan menarikan tarian branyo untuk meraikan penaung nelayan.",
      "ref": "Unit 6, m/s 96"
    },
    {
      "id": "d6_sej_u6_s1_10",
      "unit": "u6",
      "skill": "u6_s1",
      "diff": "H",
      "q": "Seorang murid membaca catatan tentang dua perayaan: Perayaan X melibatkan pengagihan makanan kepada sami pada bulan Mei, manakala Perayaan Y diteruskan selama tiga hari Tasyrik dengan amalan bersedekah daging korban. Apakah Perayaan X dan Perayaan Y?",
      "options": [
        "X ialah Thaipusam dan Y ialah Hari Raya Aidiladha",
        "X ialah Deepavali dan Y ialah Hari Raya Aidilfitri",
        "X ialah Hari Wesak dan Y ialah Hari Raya Aidiladha",
        "X ialah Vaisakhi dan Y ialah Hari Raya Aidilfitri"
      ],
      "correctIndex": 2,
      "explanation": "Hari Wesak disambut pada bulan Mei dengan aktiviti mengagihkan makanan kepada sami dan memandikan patung Buddha Siddharta, manakala Hari Raya Aidiladha pada 10 Zulhijah diteruskan pada hari Tasyrik (11 hingga 13 Zulhijah) dengan ibadah korban serta sedekah daging.",
      "ref": "Unit 6, m/s 94, 96"
    },
    {
      "id": "d6_sej_u6_s2_01",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "L",
      "q": "Mengikut pengelasan tujuan sambutan perayaan di Malaysia, apakah tujuan utama perayaan Deepavali?",
      "options": [
        "Mensyukuri hasil tanaman",
        "Meraikan permulaan tahun baharu",
        "Mengingati tokoh agama",
        "Mengharapkan unsur baik mengatasi kejahatan"
      ],
      "correctIndex": 3,
      "explanation": "Deepavali disambut dengan harapan agar unsur kebaikan dan kecerahan mengatasi kejahatan serta kegelapan.",
      "ref": "Unit 6, m/s 97"
    },
    {
      "id": "d6_sej_u6_s2_02",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "L",
      "q": "Perayaan manakah yang diraikan khusus untuk mengingati tokoh agama, iaitu peristiwa penting dalam kehidupan Siddharta Gautama?",
      "options": [
        "Thaipusam",
        "Hari Wesak",
        "Vaisakhi",
        "San Pedro"
      ],
      "correctIndex": 1,
      "explanation": "Hari Wesak dikelaskan di bawah tujuan mengingati tokoh agama kerana berkait rapat dengan kelahiran, kesempurnaan fikiran, dan hari nirwana Siddharta Gautama.",
      "ref": "Unit 6, m/s 96-97"
    },
    {
      "id": "d6_sej_u6_s2_03",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "L",
      "q": "Antara berikut, perayaan manakah yang disambut bagi memenuhi tuntutan keagamaan?",
      "options": [
        "Hari Raya Aidiladha",
        "Pesta Kaamatan",
        "Tahon Baro",
        "Tahun Baharu Cina"
      ],
      "correctIndex": 0,
      "explanation": "Hari Raya Aidiladha bersama-sama Hari Raya Aidilfitri, Krismas, dan Thaipusam tergolong dalam perayaan yang bertujuan keagamaan.",
      "ref": "Unit 6, m/s 97"
    },
    {
      "id": "d6_sej_u6_s2_04",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "L",
      "q": "Mengapakah masyarakat Orang Asli suku Semai meraikan sambutan Hari Genggulang?",
      "options": [
        "Menyambut kepulangan ahli keluarga dari bandar",
        "Memperingati hari kelahiran tokoh agama",
        "Meraikan hasil tangkapan ikan di laut",
        "Berdoa supaya kampung sentiasa sejahtera"
      ],
      "correctIndex": 3,
      "explanation": "Suku Semai menyambut Hari Genggulang dengan berdoa agar wujud kesejahteraan dan keamanan di kampung mereka.",
      "ref": "Unit 6, m/s 96"
    },
    {
      "id": "d6_sej_u6_s2_05",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "L",
      "q": "Apakah kesan utama apabila rakyat Malaysia saling menghormati kepelbagaian sambutan dan adab perayaan?",
      "options": [
        "Setiap kaum hanya bergaul dengan komuniti sendiri",
        "Semua kaum menyambut perayaan pada tarikh yang sama",
        "Tradisi masyarakat terdahulu tidak lagi perlu diamalkan",
        "Masyarakat hidup harmoni dan negara kekal sejahtera"
      ],
      "correctIndex": 3,
      "explanation": "Sikap menghormati kepelbagaian sambutan serta memelihara warisan perayaan dapat memupuk perpaduan dan mengekalkan keharmonian negara.",
      "ref": "Unit 6, m/s 97, 105"
    },
    {
      "id": "d6_sej_u6_s2_06",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "M",
      "q": "Kumpulan perayaan manakah yang kesemuanya disambut untuk mensyukuri hasil tanaman atau hasil laut?",
      "options": [
        "Tahun Baharu Cina, Jis Pai, Tahun Bahauk, dan Hari Wesak",
        "Hari Raya Aidilfitri, Krismas, Thaipusam, dan Deepavali",
        "Hari Raya Aidiladha, Deepavali, Tahon Baro, dan Tawun Empai",
        "Hari Gawai, Pesta Kaamatan, Vaisakhi, dan San Pedro"
      ],
      "correctIndex": 3,
      "explanation": "Hari Gawai, Pesta Kaamatan, dan Vaisakhi diraikan bagi mensyukuri hasil tanaman atau tuaian, manakala San Pedro diraikan oleh komuniti nelayan berketurunan Portugis.",
      "ref": "Unit 6, m/s 97"
    },
    {
      "id": "d6_sej_u6_s2_07",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "M",
      "q": "Dalam carta tujuan perayaan masyarakat Malaysia, Tahun Baharu Cina diletakkan dalam kategori yang sama dengan sambutan manakah?",
      "options": [
        "Hari Gawai dan Pesta Kaamatan",
        "Jis Pai dan Tahon Baro",
        "Hari Wesak dan Deepavali",
        "Thaipusam dan Krismas"
      ],
      "correctIndex": 1,
      "explanation": "Tahun Baharu Cina, Jis Pai (suku Semai), Tahon Baro (suku Jakun), Tahun Bahauk (suku Temuan), dan Tawun Empai (suku Mah Meri) sama-sama dikelaskan di bawah tujuan meraikan tahun baharu.",
      "ref": "Unit 6, m/s 96-97"
    },
    {
      "id": "d6_sej_u6_s2_08",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "M",
      "q": "Apakah persamaan tujuan antara sambutan Pesta Kaamatan oleh kaum Kadazandusun dan Murut dengan perayaan San Pedro oleh masyarakat Portugis di Melaka?",
      "options": [
        "Kedua-duanya menzahirkan rasa syukur terhadap rezeki hasil bumi atau hasil laut",
        "Kedua-duanya bertujuan mengharapkan unsur kebaikan mengalahkan kejahatan",
        "Kedua-duanya diadakan untuk memperingati peristiwa penting tokoh agama",
        "Kedua-duanya disambut pada bulan Disember untuk meraikan tahun baharu"
      ],
      "correctIndex": 0,
      "explanation": "Walaupun berbeza komuniti dan latar pekerjaan antara petani dengan nelayan, Pesta Kaamatan dan San Pedro sama-sama tergolong dalam tujuan mensyukuri hasil tanaman atau hasil laut.",
      "ref": "Unit 6, m/s 95-97"
    },
    {
      "id": "d6_sej_u6_s2_09",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "H",
      "q": "Mei Ling mengelaskan empat kad perayaan (Krismas, Thaipusam, Deepavali, dan Hari Wesak) mengikut lima kategori tujuan sambutan dalam buku teks. Bagi dua perayaan yang tidak dimasukkan di bawah kategori 'Keagamaan' dalam carta tersebut, padanan tujuannya yang tepat ialah...",
      "options": [
        "Thaipusam untuk mensyukuri hasil tuaian, manakala Krismas untuk unsur kebaikan",
        "Krismas untuk mengingati tokoh agama, manakala Thaipusam untuk tahun baharu",
        "Deepavali untuk unsur baik mengatasi kejahatan, manakala Hari Wesak mengingati tokoh agama",
        "Hari Wesak untuk tahun baharu, manakala Deepavali untuk mensyukuri hasil tanaman"
      ],
      "correctIndex": 2,
      "explanation": "Dalam pengelasan tujuan perayaan, Krismas dan Thaipusam berada di bawah tujuan keagamaan, Deepavali di bawah mengharapkan unsur baik mengatasi kejahatan, dan Hari Wesak di bawah mengingati tokoh agama.",
      "ref": "Unit 6, m/s 97"
    },
    {
      "id": "d6_sej_u6_s2_10",
      "unit": "u6",
      "skill": "u6_s2",
      "diff": "H",
      "q": "Pada hari Deepavali, jiran kamu yang beragama Hindu menjemput keluarga kamu berkunjung ke rumahnya. Mengapakah amalan menghormati perayaan dan adat resam kaum lain penting kepada negara?",
      "options": [
        "Menggabungkan semua perayaan kaum menjadi satu sambutan rasmi sahaja",
        "Menggantikan amalan tradisi lama dengan sambutan dalam talian sahaja",
        "Memastikan setiap kaum hanya mempelajari adat resam komuniti sendiri",
        "Membentuk masyarakat bersatu padu demi negara yang aman dan maju"
      ],
      "correctIndex": 3,
      "explanation": "Penghayatan dan penghormatan terhadap budaya serta perayaan kaum lain mengeratkan perpaduan dalam masyarakat, seterusnya membentuk negara yang aman, sejahtera, dan maju.",
      "ref": "Unit 6, m/s 97, 105"
    },
    {
      "id": "d6_sej_u6_s3_01",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "L",
      "q": "Pada zaman dahulu, bagaimanakah masyarakat kebiasaannya menyampaikan ucapan sempena musim perayaan?",
      "options": [
        "Memuat naik video swafoto ke laman sesawang",
        "Menggunakan aplikasi media sosial di telefon pintar",
        "Menghantar kad ucapan melalui pos atau serahan tangan",
        "Mengirim pesanan melalui media elektronik"
      ],
      "correctIndex": 2,
      "explanation": "Dahulu, kad ucapan perayaan dihantar melalui perkhidmatan pos atau diserahkan secara langsung dengan tangan, berbeza daripada penggunaan media elektronik dan media sosial pada masa ini.",
      "ref": "Unit 6, m/s 98"
    },
    {
      "id": "d6_sej_u6_s3_02",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "L",
      "q": "Apakah perubahan yang berlaku dalam cara merakam gambar keluarga pada hari perayaan berbanding zaman dahulu?",
      "options": [
        "Keluarga kini tidak lagi mengambil gambar pada hari raya",
        "Gambar kini hanya boleh diambil oleh jurugambar di studio khas",
        "Gambar keluarga dahulu terus dimuat naik ke media sosial",
        "Keluarga kini mengambil swafoto menggunakan telefon pintar atau kamera digital"
      ],
      "correctIndex": 3,
      "explanation": "Dahulu, masyarakat mengambil foto keluarga di kedai gambar, sedangkan kini mereka sering merakam swafoto bersama-sama keluarga menggunakan kamera digital atau telefon pintar lalu memuat naiknya ke media sosial.",
      "ref": "Unit 6, m/s 98"
    },
    {
      "id": "d6_sej_u6_s3_03",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "L",
      "q": "Bagaimanakah kaedah penyediaan kuih perayaan pada masa kini berbanding zaman dahulu?",
      "options": [
        "Menggunakan peralatan tradisional tanpa sebarang mesin moden",
        "Disediakan hanya secara gotong-royong di rumah ketua kampung",
        "Dilarang dijual di kedai supaya tradisi lama terpelihara",
        "Menggunakan peralatan moden dan kuih raya juga mudah dibeli siap"
      ],
      "correctIndex": 3,
      "explanation": "Kini, penggunaan peralatan moden memudahkan penyediaan kuih selain kuih raya mudah dibeli, berbanding dahulu yang menggunakan bahan dan kaedah tradisional secara bergotong-royong.",
      "ref": "Unit 6, m/s 99"
    },
    {
      "id": "d6_sej_u6_s3_05",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "L",
      "q": "Berapakah bilangan perayaan utama yang diiktiraf dalam sambutan Rumah Terbuka Malaysia oleh kerajaan?",
      "options": [
        "Lapan perayaan",
        "Sepuluh perayaan",
        "Empat perayaan",
        "Enam perayaan"
      ],
      "correctIndex": 3,
      "explanation": "Rumah Terbuka Malaysia merangkumi enam perayaan utama, iaitu Hari Raya Aidilfitri, Tahun Baharu Cina, Deepavali, Hari Gawai, Pesta Kaamatan, dan Krismas.",
      "ref": "Unit 6, m/s 100"
    },
    {
      "id": "d6_sej_u6_s3_06",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "M",
      "q": "Apakah bentuk perubahan yang dapat dilihat dalam tradisi makan besar malam Tahun Baharu Cina pada masa kini?",
      "options": [
        "Makan besar tidak lagi disertai oleh ahli keluarga yang terdekat",
        "Tradisi kekal diraikan namun ada keluarga memilih restoran atau hotel",
        "Tradisi makan besar telah digantikan sepenuhnya dengan pemberian kad ucapan",
        "Semua keluarga diwajibkan memasak secara gotong-royong di halaman rumah"
      ],
      "correctIndex": 1,
      "explanation": "Tradisi makan besar malam Tahun Baharu Cina masih kekal, namun selain berkumpul di rumah seperti dahulu, kini terdapat keluarga yang memilih untuk menikmatinya di restoran atau hotel.",
      "ref": "Unit 6, m/s 99"
    },
    {
      "id": "d6_sej_u6_s3_07",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "M",
      "q": "Bagaimanakah penyertaan sambutan Hari Gawai pada masa ini berbeza daripada zaman dahulu?",
      "options": [
        "Kini hanya golongan petani dibenarkan menyertai upacara sambutan tersebut",
        "Dahulu disambut pelbagai kaum, kini terhad kepada satu suku sahaja",
        "Sambutannya kini terbuka dan turut disertai masyarakat berbilang kaum daripada latar kerjaya yang pelbagai",
        "Dahulu disambut di hotel, manakala kini hanya di rumah panjang"
      ],
      "correctIndex": 2,
      "explanation": "Pada zaman dahulu, Hari Gawai diraikan oleh golongan petani kaum Dayak dengan pelbagai upacara ritual, tetapi kini kemeriahannya turut diraikan oleh pelbagai kaum tanpa mengira pekerjaan.",
      "ref": "Unit 6, m/s 100"
    },
    {
      "id": "d6_sej_u6_s3_08",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "M",
      "q": "Apakah pembaharuan yang diterapkan dalam pemilihan pemenang pertandingan Unduk Ngadau semasa Pesta Kaamatan pada masa ini?",
      "options": [
        "Peserta kini turut diuji pengetahuannya tentang latar sejarah dan cara hidup masyarakat terdahulu melalui sesi tanya jawab",
        "Pertandingan hanya menilai kemahiran membuat kuih tradisional",
        "Semangat Huminodun tidak lagi dikenali dalam kalangan peserta",
        "Pemilihan pemenang digantikan dengan persembahan tarian branyo"
      ],
      "correctIndex": 0,
      "explanation": "Jika dahulu pemilihan pemenang Unduk Ngadau berasaskan semangat Huminodun, kini peserta juga dinilai melalui sesi soal jawab mengenai sejarah dan kehidupan masyarakat lampau.",
      "ref": "Unit 6, m/s 100"
    },
    {
      "id": "d6_sej_u6_s3_09",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "H",
      "q": "Dalam sebuah forum sekolah, Farid menyatakan bahawa semua amalan perayaan zaman dahulu telah pupus akibat teknologi moden. Pernyataan manakah yang paling tepat untuk menyangkal pandangan Farid berdasarkan amalan masyarakat kini?",
      "options": [
        "Semua kuih perayaan masih dibuat secara gotong-royong tanpa mesin moden",
        "Semua keluarga masih mengirim kad ucapan melalui pos tanpa media sosial",
        "Amalan balik kampung, kunjung-mengunjungi, duit raya, dan angpau masih kekal",
        "Masyarakat kini masih bergantung kepada kedai gambar untuk merakam foto"
      ],
      "correctIndex": 2,
      "explanation": "Walaupun cara menghantar ucapan, merakam gambar, dan menyediakan kuih mengalami perubahan moden, amalan teras seperti balik ke kampung, kunjung-mengunjungi, serta pemberian duit raya dan angpau tetap kekal.",
      "ref": "Unit 6, m/s 98-101"
    },
    {
      "id": "d6_sej_u6_s3_10",
      "unit": "u6",
      "skill": "u6_s3",
      "diff": "H",
      "q": "Kelab Sejarah sekolah menganjurkan pameran bertajuk 'Rumah Terbuka Malaysia Sebagai Wadah Perpaduan'. Antara senarai berikut, gabungan perayaan manakah yang kesemuanya termasuk dalam enam sambutan rasmi Rumah Terbuka Malaysia?",
      "options": [
        "Tahun Baharu Cina, Hari Wesak, Krismas, dan Hari Moyang",
        "Hari Gawai, Pesta Kaamatan, Thaipusam, dan Jis Pai",
        "Hari Raya Aidilfitri, San Pedro, Deepavali, dan Vaisakhi",
        "Hari Raya Aidilfitri, Tahun Baharu Cina, Hari Gawai, dan Pesta Kaamatan"
      ],
      "correctIndex": 3,
      "explanation": "Enam perayaan yang diiktiraf dalam Rumah Terbuka Malaysia ialah Hari Raya Aidilfitri, Tahun Baharu Cina, Deepavali, Hari Gawai, Pesta Kaamatan, dan Krismas, yang menggalakkan orang ramai berkunjung-kunjungan demi perpaduan.",
      "ref": "Unit 6, m/s 100-101"
    },
    {
      "id": "d6_sej_u7_s1_01",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "L",
      "q": "Siapakah yang melantik Perdana Menteri Malaysia secara rasmi selepas calon tersebut memperoleh sokongan majoriti Ahli Dewan Rakyat?",
      "options": [
        "Ketua Setiausaha Negara",
        "Majlis Raja-Raja",
        "Speaker Dewan Rakyat",
        "Yang di-Pertuan Agong"
      ],
      "correctIndex": 3,
      "explanation": "Sebagai Ketua Utama Negara, Yang di-Pertuan Agong melantik Perdana Menteri secara rasmi setelah calon itu mendapat sokongan majoriti daripada Ahli Dewan Rakyat.",
      "ref": "Unit 7, m/s 108"
    },
    {
      "id": "d6_sej_u7_s1_02",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "L",
      "q": "Jawatan Perdana Menteri mula diwujudkan di negara kita selepas peristiwa bersejarah yang berlaku pada 31 Ogos 1957. Apakah peristiwa tersebut?",
      "options": [
        "Kemerdekaan Persekutuan Tanah Melayu",
        "Penubuhan Majlis Gerakan Negara",
        "Penubuhan Pertubuhan Kebangsaan Melayu Bersatu",
        "Pembentukan Gagasan Malaysia"
      ],
      "correctIndex": 0,
      "explanation": "Jawatan Perdana Menteri mula wujud selepas Tanah Melayu mencapai kemerdekaan pada 31 Ogos 1957 dan terus dikekalkan dalam pentadbiran negara.",
      "ref": "Unit 7, m/s 108"
    },
    {
      "id": "d6_sej_u7_s1_03",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "L",
      "q": "Antara berikut, Perdana Menteri Malaysia manakah yang dikurniakan gelaran Bapa Perpaduan atas jasanya kepada negara?",
      "options": [
        "Tunku Abdul Rahman Putra Al-Haj",
        "Tun Abdullah bin Ahmad Badawi",
        "Tun Hussein bin Onn",
        "Tun Abdul Razak bin Hussein"
      ],
      "correctIndex": 2,
      "explanation": "Tun Hussein bin Onn, Perdana Menteri ketiga, diberi gelaran Bapa Perpaduan atas sumbangan beliau memperkukuh perpaduan rakyat Malaysia.",
      "ref": "Unit 7, m/s 111"
    },
    {
      "id": "d6_sej_u7_s1_04",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "L",
      "q": "Tun Abdullah bin Ahmad Badawi menerima gelaran tertentu bersempena dengan sumbangannya memajukan negara. Apakah gelaran tersebut?",
      "options": [
        "Bapa Kemerdekaan",
        "Bapa Pembangunan",
        "Bapa Pemodenan",
        "Bapa Pembangunan Modal Insan"
      ],
      "correctIndex": 3,
      "explanation": "Tun Abdullah bin Ahmad Badawi dikenali sebagai Bapa Pembangunan Modal Insan, manakala gelaran lain merujuk kepada Tunku Abdul Rahman, Tun Abdul Razak dan Tun Dr. Mahathir Mohamad.",
      "ref": "Unit 7, m/s 113"
    },
    {
      "id": "d6_sej_u7_s1_05",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "L",
      "q": "Siapakah yang dilantik sebagai Perdana Menteri Malaysia kesembilan pada 20 Ogos 2021?",
      "options": [
        "Dato' Seri Ismail Sabri bin Yaakob",
        "Tun Abdullah bin Ahmad Badawi",
        "Tan Sri Mahiaddin bin Md Yassin",
        "Dato' Sri Mohd Najib bin Tun Abdul Razak"
      ],
      "correctIndex": 0,
      "explanation": "Dato' Seri Ismail Sabri bin Yaakob mula berkhidmat sebagai Perdana Menteri kesembilan pada 20 Ogos 2021 selepas pentadbiran Tan Sri Mahiaddin bin Md Yassin.",
      "ref": "Unit 7, m/s 115"
    },
    {
      "id": "d6_sej_u7_s1_06",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "M",
      "q": "Sebelum bergelar Perdana Menteri keempat, Tun Dr. Mahathir bin Mohamad mempunyai latar belakang pendidikan dalam bidang perubatan. Di negeri manakah beliau pernah berkhidmat sebagai pegawai perubatan?",
      "options": [
        "Kedah dan Perlis",
        "Pahang dan Selangor",
        "Pulau Pinang dan Perak",
        "Johor dan Melaka"
      ],
      "correctIndex": 0,
      "explanation": "Tun Dr. Mahathir bin Mohamad pernah bertugas sebagai pegawai perubatan di Alor Setar, Jitra dan Langkawi di Kedah serta di Perlis sebelum menjadi Menteri Pelajaran dan Perdana Menteri.",
      "ref": "Unit 7, m/s 112"
    },
    {
      "id": "d6_sej_u7_s1_07",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "M",
      "q": "Antara Perdana Menteri Malaysia berikut, siapakah yang pernah berkhidmat sebagai Menteri Besar Johor sebelum memegang jawatan Perdana Menteri?",
      "options": [
        "Tun Hussein bin Onn",
        "Tan Sri Mahiaddin bin Md Yassin",
        "Dato' Sri Mohd Najib bin Tun Abdul Razak",
        "Tun Abdul Razak bin Hussein"
      ],
      "correctIndex": 1,
      "explanation": "Tan Sri Mahiaddin bin Md Yassin pernah menjadi Menteri Besar Johor, manakala Tun Abdul Razak dan Dato' Sri Mohd Najib pernah menjadi Menteri Besar Pahang.",
      "ref": "Unit 7, m/s 115"
    },
    {
      "id": "d6_sej_u7_s1_08",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "M",
      "q": "Pada zaman Kesultanan Melayu Melaka, pembesar yang menjadi ketua kerajaan dikenali sebagai Bendahara. Apakah jawatan yang setara dengan peranan tersebut dalam pentadbiran Malaysia masa kini?",
      "options": [
        "Menteri Besar",
        "Perdana Menteri",
        "Pegawai Daerah",
        "Yang di-Pertuan Agong"
      ],
      "correctIndex": 1,
      "explanation": "Jika dahulu Bendahara bertindak sebagai ketua pembesar yang menguruskan kerajaan Melaka, kini peranan mengetuai pentadbiran kerajaan negara dipegang oleh Perdana Menteri.",
      "ref": "Unit 7, m/s 108"
    },
    {
      "id": "d6_sej_u7_s1_09",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "H",
      "q": "Sejak tahun 1957 hingga 2021, terdapat sembilan orang Perdana Menteri yang direkodkan dalam buku teks, tetapi hanya lapan individu berbeza pernah memegang jawatan tersebut. Mengapakah keadaan ini berlaku?",
      "options": [
        "Tunku Abdul Rahman dilantik semula selepas pembentukan Malaysia pada tahun 1963",
        "Dato' Sri Mohd Najib menggantikan bapanya secara langsung selepas peristiwa tahun 1976",
        "Tun Dr. Mahathir Mohamad dilantik sebagai Perdana Menteri keempat dan sekali lagi sebagai Perdana Menteri ketujuh",
        "Tun Abdul Razak memegang jawatan tersebut selama dua penggal berturut-turut selepas pilihan raya"
      ],
      "correctIndex": 2,
      "explanation": "Tun Dr. Mahathir bin Mohamad menerajui kerajaan buat kali pertama dari tahun 1981 hingga 2003 sebagai Perdana Menteri keempat dan dilantik semula dari tahun 2018 hingga 2020 sebagai Perdana Menteri ketujuh.",
      "ref": "Unit 7, m/s 112, 114"
    },
    {
      "id": "d6_sej_u7_s1_10",
      "unit": "u7",
      "skill": "u7_s1",
      "diff": "H",
      "q": "Antara pasangan berikut, manakah yang memadankan Perdana Menteri Malaysia dengan negeri kelahirannya dan jawatan yang pernah disandang sebelum menjadi Perdana Menteri dengan tepat?",
      "options": [
        "Tun Abdullah bin Ahmad Badawi — Kedah — Pegawai Perubatan",
        "Tun Hussein bin Onn — Perak — Menteri Besar Perak",
        "Dato' Sri Mohd Najib bin Tun Abdul Razak — Pahang — Menteri Besar Pahang",
        "Dato' Seri Ismail Sabri bin Yaakob — Johor — Pengurus Perhubungan Awam Petronas"
      ],
      "correctIndex": 2,
      "explanation": "Dato' Sri Mohd Najib bin Tun Abdul Razak dilahirkan di Kuala Lipis, Pahang dan pernah memegang jawatan Menteri Besar Pahang sebelum dilantik menjadi Perdana Menteri keenam.",
      "ref": "Unit 7, m/s 114"
    },
    {
      "id": "d6_sej_u7_s2_01",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "L",
      "q": "Dalam sistem pemerintahan negara, siapakah yang berperanan memberikan nasihat kepada Yang di-Pertuan Agong berkaitan dengan hal ehwal pentadbiran negara?",
      "options": [
        "Perdana Menteri",
        "Setiausaha Kerajaan Negeri",
        "Yang di-Pertua Negeri",
        "Ketua Polis Negara"
      ],
      "correctIndex": 0,
      "explanation": "Antara bidang tugas rasmi Perdana Menteri ialah menjadi penasihat kepada Yang di-Pertuan Agong dalam urusan pemerintahan dan pentadbiran negara.",
      "ref": "Unit 7, m/s 116"
    },
    {
      "id": "d6_sej_u7_s2_02",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "L",
      "q": "Selain menasihati Yang di-Pertuan Agong, apakah tugas Perdana Menteri apabila berlangsungnya Mesyuarat Majlis Raja-Raja?",
      "options": [
        "Memilih Yang di-Pertuan Agong baharu",
        "Menggubal undang-undang negeri secara bersendirian",
        "Mengiringi Yang di-Pertuan Agong ke mesyuarat tersebut",
        "Mengesahkan pelantikan hakim mahkamah tinggi"
      ],
      "correctIndex": 2,
      "explanation": "Perdana Menteri bertanggungjawab mengiringi Yang di-Pertuan Agong menghadiri Mesyuarat Majlis Raja-Raja.",
      "ref": "Unit 7, m/s 116"
    },
    {
      "id": "d6_sej_u7_s2_03",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "L",
      "q": "Mesyuarat Jemaah Menteri yang pertama selepas negara mencapai kemerdekaan telah dipengerusikan oleh seorang pemimpin negara. Siapakah pemimpin tersebut?",
      "options": [
        "Tun Dr. Mahathir bin Mohamad",
        "Tun Abdul Razak bin Hussein",
        "Tun Hussein bin Onn",
        "Tunku Abdul Rahman Putra Al-Haj"
      ],
      "correctIndex": 3,
      "explanation": "Sebagai Perdana Menteri pertama selepas kemerdekaan, Tunku Abdul Rahman Putra Al-Haj telah mempengerusikan Mesyuarat Jemaah Menteri yang pertama.",
      "ref": "Unit 7, m/s 116"
    },
    {
      "id": "d6_sej_u7_s2_04",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "L",
      "q": "Sebagai ketua pentadbir utama negara, apakah peranan Perdana Menteri terhadap dasar-dasar kerajaan?",
      "options": [
        "Mengetuai pasukan keselamatan di sempadan negara",
        "Menggantikan tugas semua pegawai daerah",
        "Merangka hala tuju serta menyatukan pelaksanaan dasar kerajaan di semua kementerian",
        "Menguruskan kutipan cukai di peringkat majlis bandaran"
      ],
      "correctIndex": 2,
      "explanation": "Perdana Menteri bertindak sebagai ketua pentadbir utama yang merancang serta menyelaraskan dasar negara supaya pentadbiran berjalan lancar.",
      "ref": "Unit 7, m/s 117"
    },
    {
      "id": "d6_sej_u7_s2_05",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "L",
      "q": "Apakah tujuan utama Perdana Menteri mencadangkan pelantikan duta, diplomat dan konsulat untuk bertugas di luar negara?",
      "options": [
        "Menjadi wakil rasmi kerajaan Malaysia untuk membina hubungan serta persefahaman dengan negara asing",
        "Menguruskan pilihan raya bagi rakyat Malaysia di dalam negara",
        "Mengawasi pentadbiran kerajaan tempatan di setiap negeri",
        "Mengetuai mesyuarat Jemaah Menteri semasa Perdana Menteri bercuti"
      ],
      "correctIndex": 0,
      "explanation": "Pelantikan duta, diplomat dan konsulat bertujuan mewakili Malaysia di negara luar serta mengukuhkan kerjasama antara negara.",
      "ref": "Unit 7, m/s 117"
    },
    {
      "id": "d6_sej_u7_s2_06",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "M",
      "q": "Selepas pilihan raya umum selesai dan Perdana Menteri dilantik, bagaimanakah barisan Jemaah Menteri dibentuk mengikut amalan pentadbiran negara?",
      "options": [
        "Ketua-ketua Setiausaha Kementerian melantik menteri bagi setiap kementerian",
        "Perdana Menteri mengemukakan nama calon menteri kepada Yang di-Pertuan Agong bagi urusan pelantikan rasmi",
        "Majlis Raja-Raja memilih semua menteri tanpa cadangan Perdana Menteri",
        "Jemaah Menteri melantik Perdana Menteri melalui undian sulit"
      ],
      "correctIndex": 1,
      "explanation": "Perdana Menteri bertugas mengemukakan senarai cadangan ahli Jemaah Menteri kepada Yang di-Pertuan Agong untuk dilantik secara rasmi.",
      "ref": "Unit 7, m/s 116"
    },
    {
      "id": "d6_sej_u7_s2_07",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "M",
      "q": "Seorang Perdana Menteri melakukan lawatan kerja ke kawasan pertanian luar bandar untuk melihat sendiri hasil projek pembangunan penduduk setempat. Tindakan ini menepati tanggungjawab beliau untuk...",
      "options": [
        "menjalin hubungan diplomatik dengan negara jiran",
        "mencadangkan pelantikan konsulat di luar negara",
        "mengiringi Yang di-Pertuan Agong ke mesyuarat rasmi",
        "memastikan dasar pembangunan meningkatkan kesejahteraan rakyat"
      ],
      "correctIndex": 3,
      "explanation": "Lawatan kerja ke kawasan projek pertanian luar bandar mencerminkan peranan Perdana Menteri memastikan dasar pembangunan negara dilaksanakan demi kesejahteraan rakyat.",
      "ref": "Unit 7, m/s 117"
    },
    {
      "id": "d6_sej_u7_s2_08",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "M",
      "q": "Seorang Perdana Menteri menerima kunjungan rasmi ketua negara asing bagi membincangkan kerjasama dua hala antara kedua-dua buah negara. Situasi ini menggambarkan peranan beliau dalam...",
      "options": [
        "pembentukan barisan Jemaah Menteri baharu",
        "menjalin hubungan diplomatik dan persahabatan antarabangsa",
        "penyelarasan Ketua Setiausaha Kementerian",
        "pemantauan projek pertanian luar bandar"
      ],
      "correctIndex": 1,
      "explanation": "Pertemuan rasmi dengan ketua negara asing menggambarkan tugas Perdana Menteri dalam membina hubungan diplomatik dan persahabatan di peringkat antarabangsa.",
      "ref": "Unit 7, m/s 117"
    },
    {
      "id": "d6_sej_u7_s2_10",
      "unit": "u7",
      "skill": "u7_s2",
      "diff": "H",
      "q": "Sebuah kementerian menghadapi kesukaran menyelaraskan pelaksanaan projek pembangunan dengan kementerian lain. Berdasarkan bidang tugas Perdana Menteri, langkah manakah yang paling tepat untuk menyelesaikan isu tersebut?",
      "options": [
        "Mengadakan mesyuarat bersama-sama Ketua Setiausaha Kementerian untuk menyelaraskan dasar",
        "Menunggu pelantikan konsulat baharu sebelum memulakan perbincangan",
        "Membawa isu tersebut terus kepada Mesyuarat Majlis Raja-Raja untuk diputuskan",
        "Menyerahkan pengurusan projek itu kepada duta Malaysia di luar negara"
      ],
      "correctIndex": 0,
      "explanation": "Sebagai ketua pentadbir utama, Perdana Menteri bermesyuarat dengan Ketua-ketua Setiausaha Kementerian bagi merancang dan menyelaraskan dasar antara kementerian dengan berkesan.",
      "ref": "Unit 7, m/s 117"
    },
    {
      "id": "d6_sej_u7_s3_01",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "L",
      "q": "Apakah kejayaan besar negara yang berjaya direalisasikan di bawah kepimpinan Tunku Abdul Rahman Putra Al-Haj pada 16 September 1963?",
      "options": [
        "Pelancaran Dasar Ekonomi Baru",
        "Pembinaan Pusat Pentadbiran Putrajaya",
        "Pembentukan Malaysia",
        "Penubuhan Majlis Gerakan Negara"
      ],
      "correctIndex": 2,
      "explanation": "Selain memperjuangkan kemerdekaan pada tahun 1957 melalui rundingan, Tunku Abdul Rahman Putra Al-Haj berjaya merealisasikan pembentukan Malaysia pada 16 September 1963.",
      "ref": "Unit 7, m/s 118"
    },
    {
      "id": "d6_sej_u7_s3_02",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "L",
      "q": "Program Rukun Tetangga telah diperkenalkan oleh Tun Hussein Onn dengan matlamat utama untuk...",
      "options": [
        "membangunkan sektor perindustrian berteknologi tinggi",
        "menarik pelaburan asing ke Koridor Wilayah Ekonomi",
        "memupuk perpaduan dalam kalangan masyarakat pelbagai kaum",
        "membantu rakyat yang terjejas semasa Perintah Kawalan Pergerakan"
      ],
      "correctIndex": 2,
      "explanation": "Tun Hussein Onn memperkenalkan Program Rukun Tetangga bagi menggalakkan keharmonian dan perpaduan antara rakyat berbilang kaum.",
      "ref": "Unit 7, m/s 119"
    },
    {
      "id": "d6_sej_u7_s3_03",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "L",
      "q": "Pembinaan Pusat Pentadbiran Putrajaya, Lapangan Terbang Antarabangsa Kuala Lumpur (KLIA) dan Menara Berkembar Petronas dilaksanakan bagi merealisasikan Wawasan 2020 di bawah kepimpinan...",
      "options": [
        "Dato' Sri Mohd Najib Tun Abdul Razak",
        "Tun Abdul Razak Hussein",
        "Tun Abdullah Ahmad Badawi",
        "Tun Dr. Mahathir Mohamad"
      ],
      "correctIndex": 3,
      "explanation": "Di bawah kepimpinan Tun Dr. Mahathir Mohamad, Wawasan 2020 diperkenalkan berserta pembinaan mercu tanda moden seperti Putrajaya, KLIA dan Menara Berkembar Petronas.",
      "ref": "Unit 7, m/s 119"
    },
    {
      "id": "d6_sej_u7_s3_04",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "L",
      "q": "Pelan apakah yang diperkenalkan oleh Tun Abdullah Ahmad Badawi bagi membentuk sebuah masyarakat yang beretika dan bermoral?",
      "options": [
        "Program Transformasi Kerajaan",
        "Dasar Ekonomi Baru",
        "Wawasan 2020",
        "Pelan Integriti Nasional"
      ],
      "correctIndex": 3,
      "explanation": "Tun Abdullah Ahmad Badawi memperkenalkan Pelan Integriti Nasional (PIN) dengan matlamat melahirkan masyarakat yang bermoral dan beretika.",
      "ref": "Unit 7, m/s 119"
    },
    {
      "id": "d6_sej_u7_s3_05",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "L",
      "q": "Konsep Keluarga Malaysia yang menekankan keterangkuman masyarakat pelbagai agama, kaum dan usia telah diperkenalkan oleh...",
      "options": [
        "Tan Sri Mahiaddin Md Yassin",
        "Dato' Seri Ismail Sabri Yaakob",
        "Tun Hussein Onn",
        "Dato' Sri Mohd Najib Tun Abdul Razak"
      ],
      "correctIndex": 1,
      "explanation": "Dato' Seri Ismail Sabri Yaakob memperkenalkan konsep Keluarga Malaysia bagi memastikan nasib setiap ahli masyarakat terbela serta meraikan keterangkuman semua kaum dan agama.",
      "ref": "Unit 7, m/s 120"
    },
    {
      "id": "d6_sej_u7_s3_06",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "M",
      "q": "Selepas negara menghadapi peristiwa 13 Mei 1969, Tun Abdul Razak Hussein memperkenalkan Dasar Ekonomi Baru (DEB). Apakah dua matlamat utama dasar tersebut?",
      "options": [
        "Membina kilang besi dan keluli serta memajukan industri perkapalan",
        "Menubuhkan koridor ekonomi wilayah dan menggalakkan pelaburan luar",
        "Mengurangkan kadar kemiskinan penduduk serta merapatkan jurang ekonomi dan sosial antara kaum",
        "Menyalurkan bantuan kewangan PKP dan menubuhkan Majlis Tindakan Ekonomi"
      ],
      "correctIndex": 2,
      "explanation": "Dasar Ekonomi Baru (DEB) digubal di bawah kepimpinan Tun Abdul Razak Hussein untuk membasmi kemiskinan rakyat dan menyusun semula masyarakat pelbagai kaum.",
      "ref": "Unit 7, m/s 118"
    },
    {
      "id": "d6_sej_u7_s3_07",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "M",
      "q": "Penubuhan The Heavy Industries Corporation of Malaysia Berhad (HICOM) telah memacu sektor perindustrian berteknologi tinggi negara. Bidang perindustrian manakah yang menjadi tumpuan HICOM?",
      "options": [
        "Pertanian padi, tanaman getah dan penternakan",
        "Pelancongan desa, perhotelan dan perbankan runcit",
        "Pembuatan perabot kayu, tekstil dan kraftangan",
        "Kejuruteraan automotif, perkapalan, besi dan penapisan petroleum"
      ],
      "correctIndex": 3,
      "explanation": "HICOM memberi tumpuan kepada industri berat berteknologi tinggi termasuk kejuruteraan automotif, perkapalan, besi dan keluli serta kilang penapisan petroleum.",
      "ref": "Unit 7, m/s 119"
    },
    {
      "id": "d6_sej_u7_s3_08",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "M",
      "q": "Selain Gagasan 1Malaysia, Dato' Sri Mohd Najib Tun Abdul Razak melancarkan Program Transformasi Kerajaan (GTP). Apakah sasaran utama pelaksanaan program tersebut?",
      "options": [
        "Menjadikan Malaysia negara berpendapatan tinggi selaras dengan Wawasan 2020",
        "Membina koridor ekonomi wilayah di selatan Semenanjung Malaysia",
        "Memudahkan pemilikan saham syarikat berhad oleh kaum bumiputera",
        "Mengembalikan keamanan negara selepas peristiwa 13 Mei 1969"
      ],
      "correctIndex": 0,
      "explanation": "Program Transformasi Kerajaan (GTP) dilancarkan untuk membawa Malaysia mencapai taraf negara berpendapatan tinggi selari dengan matlamat Wawasan 2020.",
      "ref": "Unit 7, m/s 120"
    },
    {
      "id": "d6_sej_u7_s3_09",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "H",
      "q": "Seorang murid membandingkan langkah pemimpin negara dalam menangani cabaran ekonomi rakyat:\n• Pemimpin X memulihkan ekonomi dan keselamatan selepas peristiwa 13 Mei 1969.\n• Pemimpin Y menubuhkan Majlis Tindakan Ekonomi (MTE) dan menyalurkan bantuan kewangan semasa pandemik COVID-19.\n\nSiapakah Pemimpin X dan Pemimpin Y?",
      "options": [
        "Tun Hussein Onn dan Dato' Sri Mohd Najib Tun Abdul Razak",
        "Tunku Abdul Rahman dan Dato' Seri Ismail Sabri Yaakob",
        "Tun Abdul Razak Hussein dan Tan Sri Mahiaddin Md Yassin",
        "Tun Dr. Mahathir Mohamad dan Tun Abdullah Ahmad Badawi"
      ],
      "correctIndex": 2,
      "explanation": "Tun Abdul Razak Hussein memulihkan keamanan melalui MAGERAN serta melancarkan DEB selepas peristiwa 13 Mei 1969, manakala Tan Sri Mahiaddin Md Yassin menubuhkan MTE dan menyediakan peruntukan kewangan membantu rakyat semasa PKP pandemik COVID-19.",
      "ref": "Unit 7, m/s 118, 120"
    },
    {
      "id": "d6_sej_u7_s3_10",
      "unit": "u7",
      "skill": "u7_s3",
      "diff": "H",
      "q": "Kerajaan melaksanakan pelbagai dasar untuk menyeimbangkan pembangunan ekonomi serta memperkukuh perpaduan kaum. Pasangan pemimpin dan inisiatif manakah yang menepati tujuan pembangunan wilayah ekonomi yang seimbang?",
      "options": [
        "Tunku Abdul Rahman Putra Al-Haj — Penubuhan Malaysia pada tahun 1963",
        "Dato' Sri Mohd Najib Tun Abdul Razak — Moto Rakyat Didahulukan, Pencapaian Diutamakan",
        "Tun Hussein Onn — Amanah Saham Nasional Berhad untuk kaum bumiputera",
        "Tun Abdullah Ahmad Badawi — Koridor Wilayah Ekonomi seperti Iskandar Malaysia"
      ],
      "correctIndex": 3,
      "explanation": "Koridor Wilayah Ekonomi seperti Iskandar Malaysia di Johor diperkenalkan oleh Tun Abdullah Ahmad Badawi khusus untuk memastikan pembangunan ekonomi lebih seimbang di seluruh wilayah dan menarik pelaburan besar.",
      "ref": "Unit 7, m/s 119"
    },
    {
      "id": "d6_sej_u8_s1_01",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "L",
      "q": "Apakah dua sektor utama yang menjadi asas kepada kegiatan ekonomi awal di negara kita?",
      "options": [
        "Pelancongan dan perhotelan",
        "Perkapalan dan telekomunikasi",
        "Pertanian dan perlombongan",
        "Perbankan dan insurans"
      ],
      "correctIndex": 2,
      "explanation": "Pada peringkat awal, kegiatan ekonomi masyarakat Malaysia tertumpu kepada sektor pertanian dan perlombongan sebelum berkembang menjadi lebih moden.",
      "ref": "Unit 8, m/s 126"
    },
    {
      "id": "d6_sej_u8_s1_02",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "L",
      "q": "Peralatan manakah yang lazim digunakan oleh petani semasa menjalankan kegiatan ekonomi tradisional?",
      "options": [
        "Jentera penuai dan pam air",
        "Kapal korek dan jentolak",
        "Traktor dan kren",
        "Cangkul dan sabit"
      ],
      "correctIndex": 3,
      "explanation": "Ekonomi tradisional dijalankan secara kecil-kecilan menggunakan peralatan ringkas seperti cangkul dan sabit.",
      "ref": "Unit 8, m/s 126"
    },
    {
      "id": "d6_sej_u8_s1_03",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "L",
      "q": "Apakah tujuan utama masyarakat terdahulu mengusahakan ekonomi tradisional?",
      "options": [
        "Membina rangkaian kilang pemprosesan berskala besar",
        "Menampung keperluan harian diri dan ahli keluarga",
        "Menjual hasil tanaman ke pasaran antarabangsa",
        "Menarik pelaburan syarikat asing ke kawasan luar bandar"
      ],
      "correctIndex": 1,
      "explanation": "Kegiatan ekonomi tradisional bersifat sara diri, iaitu hasilnya digunakan terutamanya untuk memenuhi keperluan sendiri dan keluarga.",
      "ref": "Unit 8, m/s 126"
    },
    {
      "id": "d6_sej_u8_s1_04",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "L",
      "q": "Bagaimanakah aktiviti melombong dilaksanakan secara tradisional pada peringkat awal?",
      "options": [
        "Menggunakan kapal korek berjentera",
        "Menggunakan kaedah mendulang",
        "Menggerudi telaga di dasar laut dalam",
        "Menggali terowong bawah tanah moden"
      ],
      "correctIndex": 1,
      "explanation": "Kaedah mendulang ialah cara tradisional yang digunakan oleh pelombong awal tanpa bantuan jentera berat.",
      "ref": "Unit 8, m/s 126"
    },
    {
      "id": "d6_sej_u8_s1_05",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "L",
      "q": "Di kawasan manakah terletaknya lombong emas yang menjadi contoh kegiatan perlombongan komersial?",
      "options": [
        "Lembah Bujang, Kedah",
        "Miri, Sarawak",
        "Sungai Lebir, Kelantan",
        "Tanjung Malim, Perak"
      ],
      "correctIndex": 2,
      "explanation": "Lombong emas di Sungai Lebir, Kelantan merupakan antara contoh aktiviti sektor perlombongan secara komersial.",
      "ref": "Unit 8, m/s 127"
    },
    {
      "id": "d6_sej_u8_s1_06",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "M",
      "q": "Mengapakah kegiatan ekonomi komersial memerlukan modal yang besar berbanding ekonomi tradisional?",
      "options": [
        "Kerana hasil jualan hanya dipasarkan di kampung berdekatan",
        "Kerana petani hanya menanam padi untuk keluarga sendiri",
        "Kerana ia menggunakan mesin moden dan tenaga buruh yang ramai",
        "Kerana pekerja tidak dibayar gaji sepanjang tempoh menuai"
      ],
      "correctIndex": 2,
      "explanation": "Ekonomi komersial dijalankan di ladang dan lombong berskala besar yang memerlukan jentera moden serta ramai pekerja, lalu menuntut modal yang tinggi.",
      "ref": "Unit 8, m/s 126-127"
    },
    {
      "id": "d6_sej_u8_s1_07",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "M",
      "q": "Pasangan manakah yang tepat bagi menggambarkan penggunaan teknologi dalam sektor ekonomi komersial?",
      "options": [
        "Sektor perlombongan — penggunaan kapal korek",
        "Sektor pertanian — kaedah mendulang",
        "Sektor pertanian — penggerudian luar pesisir",
        "Sektor perlombongan — penggunaan sabit"
      ],
      "correctIndex": 0,
      "explanation": "Dalam ekonomi komersial, sektor perlombongan menggunakan jentera kapal korek, manakala sektor pertanian menggunakan jentera penuai.",
      "ref": "Unit 8, m/s 127"
    },
    {
      "id": "d6_sej_u8_s1_08",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "M",
      "q": "Apakah kesan ketara pengenalan ekonomi komersial terhadap petempatan dan guna tanah di Malaysia?",
      "options": [
        "Penduduk luar bandar menghentikan penggunaan mesin",
        "Kegiatan mendulang menggantikan penggunaan kapal korek",
        "Kawasan perladangan berkembang dan bandar baharu dibuka di tapak lombong",
        "Semua kawasan sawah padi ditutup serta-merta"
      ],
      "correctIndex": 2,
      "explanation": "Ekonomi komersial merancakkan pembukaan kawasan ladang pertanian serta melahirkan bandar-bandar baharu di sekitar kawasan perlombongan.",
      "ref": "Unit 8, m/s 127"
    },
    {
      "id": "d6_sej_u8_s1_09",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "H",
      "q": "Encik Halim menanam padi di petak kecil menggunakan cangkul untuk makan sekeluarga, manakala Syarikat Jaya menguruskan ladang getah yang luas dengan jentera untuk eksport. Apakah rumusan paling tepat tentang situasi ini?",
      "options": [
        "Encik Halim dan Syarikat Jaya sama-sama menjalankan ekonomi komersial",
        "Kedua-dua pihak bergantung sepenuhnya kepada peralatan moden bagi tujuan eksport",
        "Encik Halim mengamalkan ekonomi komersial manakala Syarikat Jaya bersifat sara diri",
        "Encik Halim menjalankan ekonomi tradisional manakala Syarikat Jaya mengamalkan ekonomi komersial"
      ],
      "correctIndex": 3,
      "explanation": "Ciri tanaman kecil-kecilan dengan alat ringkas untuk kegunaan keluarga ialah ekonomi tradisional, manakala perladangan luas untuk eksport ialah ekonomi komersial.",
      "ref": "Unit 8, m/s 126-127"
    },
    {
      "id": "d6_sej_u8_s1_10",
      "unit": "u8",
      "skill": "u8_s1",
      "diff": "H",
      "q": "Bagaimanakah peralihan daripada ekonomi tradisional kepada ekonomi komersial membantu memakmurkan negara?",
      "options": [
        "Mengurangkan jumlah pekerja dalam semua sektor ekonomi supaya kos ladang dapat dihapuskan",
        "Meningkatkan hasil pengeluaran untuk pasaran tempatan dan eksport bagi menambah pendapatan negara",
        "Menggantikan semua kawasan bandar perlombongan dengan hutan simpan semula jadi",
        "Menyekat kemasukan peralatan moden agar kaedah pertanian lama terus kekal dominan"
      ],
      "correctIndex": 1,
      "explanation": "Pengeluaran komersial memenuhi permintaan tempatan dan eksport luar negara, sekali gus menjana pendapatan negara dan membawa kemakmuran.",
      "ref": "Unit 8, m/s 127"
    },
    {
      "id": "d6_sej_u8_s2_01",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "L",
      "q": "Bilakah industri getah dan kelapa sawit mula bertapak sebagai kegiatan ekonomi penting di negara kita?",
      "options": [
        "Sejak pertengahan tahun 1990-an",
        "Sejak awal tahun 2018",
        "Sejak akhir abad ke-18",
        "Sejak awal abad ke-20"
      ],
      "correctIndex": 3,
      "explanation": "Kedua-dua industri perladangan utama ini, iaitu getah dan kelapa sawit, bermula sejak awal abad ke-20.",
      "ref": "Unit 8, m/s 129"
    },
    {
      "id": "d6_sej_u8_s2_02",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "L",
      "q": "Antara hasil berikut, pasangan manakah merupakan barangan eksport daripada industri getah?",
      "options": [
        "Sarung tangan dan benang lateks",
        "Biodiesel sawit dan minyak masak",
        "Gas memasak dan minyak pelincir",
        "Minyak mentah dan sabun"
      ],
      "correctIndex": 0,
      "explanation": "Industri getah menghasilkan produk eksport seperti sarung tangan getah dan benang lateks.",
      "ref": "Unit 8, m/s 129"
    },
    {
      "id": "d6_sej_u8_s2_03",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "L",
      "q": "Di manakah dan pada tahun berapakah industri petroleum negara kita mula berkembang?",
      "options": [
        "Pada tahun 1983 di Shah Alam, Selangor",
        "Pada tahun 1985 di Sungai Lebir, Kelantan",
        "Pada tahun 1993 di Pulau Langkawi, Kedah",
        "Pada tahun 1910 di Miri, Sarawak"
      ],
      "correctIndex": 3,
      "explanation": "Sejarah industri petroleum Malaysia bermula di Miri, Sarawak pada tahun 1910.",
      "ref": "Unit 8, m/s 130"
    },
    {
      "id": "d6_sej_u8_s2_04",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "L",
      "q": "Apakah nama gelaran bagi telaga minyak terawal yang dibina di Miri, Sarawak?",
      "options": [
        "Istana Kenangan",
        "Kilim Geoforest Park",
        "Kota A Famosa",
        "The Grand Old Lady"
      ],
      "correctIndex": 3,
      "explanation": "The Grand Old Lady di Miri, Sarawak diiktiraf sebagai telaga minyak yang pertama di negara kita.",
      "ref": "Unit 8, m/s 131"
    },
    {
      "id": "d6_sej_u8_s2_05",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "L",
      "q": "Apakah maksud biodiesel yang turut dihasilkan melalui industri kelapa sawit?",
      "options": [
        "Bahan api yang diperbuat daripada sisa atau bahan organik",
        "Getah asli cair yang dipintal menjadi benang halus",
        "Batang kayu getah yang diproses untuk membuat kerusi",
        "Minyak mentah petroleum yang ditapis di kawasan darat"
      ],
      "correctIndex": 0,
      "explanation": "Biodiesel merujuk kepada bahan buangan organik yang diproses supaya dapat digunakan sebagai bahan api.",
      "ref": "Unit 8, m/s 129"
    },
    {
      "id": "d6_sej_u8_s2_06",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "M",
      "q": "Kegiatan manakah yang paling tepat menggambarkan contoh industri hiliran daripada sektor perladangan getah?",
      "options": [
        "Mencari gali sumber petroleum di luar pesisir pantai",
        "Menghasilkan perabot daripada kayu pokok getah",
        "Menjual buah kelapa sawit mentah secara terus ke kilang",
        "Mengusahakan stesen minyak di kawasan lebuh raya"
      ],
      "correctIndex": 1,
      "explanation": "Industri hiliran ialah kegiatan lanjutan daripada ekonomi utama, contohnya memproses kayu getah untuk menghasilkan perabot.",
      "ref": "Unit 8, m/s 129"
    },
    {
      "id": "d6_sej_u8_s2_07",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "M",
      "q": "Bagaimanakah industri kelapa sawit menyumbang kepada keperluan harian pengguna serta industri asas tani?",
      "options": [
        "Menyediakan kemudahan pelantar minyak bagi operasi cari gali laut dalam",
        "Meningkatkan bekalan makanan tempatan serta diproses menjadi minyak, sabun dan biodiesel",
        "Membekalkan benang lateks untuk kegunaan kilang tekstil",
        "Menghasilkan tayar motosikal dan komponen badan kereta"
      ],
      "correctIndex": 1,
      "explanation": "Selain memajukan industri asas tani bagi bekalan makanan tempatan, kelapa sawit diproses menjadi produk harian seperti minyak, sabun dan biodiesel sawit.",
      "ref": "Unit 8, m/s 129"
    },
    {
      "id": "d6_sej_u8_s2_08",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "M",
      "q": "Selain kerja cari gali di pelantar minyak, apakah sumbangan PETRONAS dalam melahirkan usahawan dan tenaga mahir tempatan?",
      "options": [
        "Menganjurkan pertandingan memilih nama kereta nasional pertama",
        "Membina kilang pembuatan perabot kayu getah di setiap negeri",
        "Membuka peluang perniagaan stesen minyak dan menawarkan biasiswa ke universiti",
        "Membuka ladang getah baharu bagi setiap keluarga di bandar"
      ],
      "correctIndex": 2,
      "explanation": "Industri petroleum menerusi PETRONAS melahirkan usahawan melalui pembukaan stesen minyak serta menyediakan biasiswa pengajian tinggi seperti di Universiti Teknologi PETRONAS.",
      "ref": "Unit 8, m/s 130-131"
    },
    {
      "id": "d6_sej_u8_s2_09",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "H",
      "q": "Mengapakah penglibatan PETRONAS sebagai penaja utama acara sukan permotoran seperti Grand Prix Malaysia dianggap bermanfaat kepada ekonomi negara?",
      "options": [
        "Mengurangkan keperluan tenaga kerja tempatan di pusat pemprosesan darat",
        "Memperkukuh imej antarabangsa sambil menjana pendapatan melalui penganjuran sukan tersebut",
        "Menjadikan semua rakyat Malaysia bekerja sebagai pelumba kereta profesional",
        "Menggantikan sepenuhnya peranan eksport kelapa sawit dan getah negara"
      ],
      "correctIndex": 1,
      "explanation": "Penajaan acara antarabangsa seperti Grand Prix Malaysia menarik tumpuan dunia kepada jenama negara dan meningkatkan pendapatan menerusi penganjuran sukan.",
      "ref": "Unit 8, m/s 130-131"
    },
    {
      "id": "d6_sej_u8_s2_10",
      "unit": "u8",
      "skill": "u8_s2",
      "diff": "H",
      "q": "Apakah persamaan utama antara sumbangan industri getah dan kelapa sawit dengan industri petroleum dan gas kepada masyarakat Malaysia?",
      "options": [
        "Kedua-duanya menawarkan peluang pekerjaan yang banyak serta menyumbang kepada pendapatan negara",
        "Kedua-duanya bergantung kepada kaedah mendulang tanpa penggunaan teknologi moden",
        "Kedua-duanya hanya memasarkan produk untuk kegunaan penduduk di kawasan pedalaman",
        "Kedua-duanya beroperasi sepenuhnya di luar pesisir pantai tanpa kemudahan di darat"
      ],
      "correctIndex": 0,
      "explanation": "Baik sektor perladangan getah dan sawit mahupun sektor petroleum dan gas, kedua-duanya membuka banyak peluang pekerjaan dan menjana pendapatan tinggi kepada negara.",
      "ref": "Unit 8, m/s 129-131"
    },
    {
      "id": "d6_sej_u8_s3_01",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "L",
      "q": "Bilakah industri automotif diperkenalkan di Malaysia dan di manakah kilang kereta nasional pertama dibina?",
      "options": [
        "Tahun 1993 di Tanjung Malim, Perak",
        "Tahun 2005 di Sepang, Selangor",
        "Tahun 1983 di Shah Alam, Selangor",
        "Tahun 1985 di Miri, Sarawak"
      ],
      "correctIndex": 2,
      "explanation": "Industri automotif Malaysia bermula pada tahun 1983 dengan penubuhan kilang pertama PROTON di Shah Alam, Selangor.",
      "ref": "Unit 8, m/s 132"
    },
    {
      "id": "d6_sej_u8_s3_02",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "L",
      "q": "Apakah model kereta pertama yang dikeluarkan oleh syarikat PERODUA pada tahun 1994?",
      "options": [
        "Perodua Nippa",
        "Perodua Kancil",
        "Proton 1.3L",
        "Proton Saga"
      ],
      "correctIndex": 1,
      "explanation": "PERODUA yang ditubuhkan pada tahun 1993 mengeluarkan model sulungnya iaitu Perodua Kancil pada tahun 1994.",
      "ref": "Unit 8, m/s 133"
    },
    {
      "id": "d6_sej_u8_s3_03",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "L",
      "q": "Sejak tahun bilakah Kempen Tahun Melawat Malaysia mula dianjurkan bagi menarik kedatangan pelancong?",
      "options": [
        "Tahun 1983",
        "Tahun 1994",
        "Tahun 1990",
        "Tahun 2007"
      ],
      "correctIndex": 2,
      "explanation": "Promosi Kempen Tahun Melawat Malaysia telah dimulakan sejak tahun 1990 untuk menggalakkan kedatangan pelancong ke negara kita.",
      "ref": "Unit 8, m/s 134"
    },
    {
      "id": "d6_sej_u8_s3_04",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "L",
      "q": "Pasangan tarikan pelancongan dan negeri manakah yang dipadankan dengan betul?",
      "options": [
        "Kota A Famosa — Perak",
        "Gunung Kinabalu — Sarawak",
        "Istana Kenangan — Melaka",
        "Candi Bukit Batu Pahat — Kedah"
      ],
      "correctIndex": 3,
      "explanation": "Candi Bukit Batu Pahat di Lembah Bujang terletak di Kedah; Kota A Famosa di Melaka, Istana Kenangan di Perak dan Gunung Kinabalu di Sabah.",
      "ref": "Unit 8, m/s 134-135"
    },
    {
      "id": "d6_sej_u8_s3_05",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "L",
      "q": "Apakah kekerapan penganjuran pameran maritim dan aeroangkasa antarabangsa (LIMA) di Pulau Langkawi?",
      "options": [
        "Setiap lima tahun sekali",
        "Setiap dua tahun sekali",
        "Setiap sepuluh tahun sekali",
        "Dua kali dalam setahun"
      ],
      "correctIndex": 1,
      "explanation": "Pameran LIMA dianjurkan pada setiap dua tahun di Pulau Langkawi, Kedah.",
      "ref": "Unit 8, m/s 136"
    },
    {
      "id": "d6_sej_u8_s3_06",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "M",
      "q": "Pernyataan manakah yang tepat mengenai perkembangan terkini dan pasaran luar negara bagi pengeluar kereta nasional kita?",
      "options": [
        "Kilang kedua PROTON dibuka di United Kingdom pada tahun 2005",
        "Model Proton Saga dinamakan melalui undian antarabangsa di Jepun",
        "PROTON bekerjasama dengan Geely Holding Group pada 2018 manakala PERODUA mengeksport Nippa ke United Kingdom",
        "PERODUA ditubuhkan pada tahun 1983 hasil kerjasama dengan Geely"
      ],
      "correctIndex": 2,
      "explanation": "Pada tahun 2018, PROTON menjalin usaha sama dengan Geely Holding Group bagi model baharu, manakala PERODUA berjaya mengeksport model Nippa ke United Kingdom.",
      "ref": "Unit 8, m/s 132-133"
    },
    {
      "id": "d6_sej_u8_s3_07",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "M",
      "q": "Pelancong luar tinggal sementara bersama keluarga penduduk kampung untuk merasai aktiviti pertanian dan penternakan. Apakah jenis pelancongan ini?",
      "options": [
        "Pameran maritim dan aeroangkasa",
        "Agropelancongan berkonsepkan inap desa",
        "Pelancongan sukan permotoran",
        "Pelancongan bangunan bersejarah"
      ],
      "correctIndex": 1,
      "explanation": "Agropelancongan berteraskan pertanian, perikanan, penternakan dan industri asas tani, dengan konsep inap desa membolehkan pelancong merasai cara hidup penduduk tempatan.",
      "ref": "Unit 8, m/s 136"
    },
    {
      "id": "d6_sej_u8_s3_08",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "M",
      "q": "Bagaimanakah keharmonian masyarakat berbilang kaum membantu memajukan sektor pelancongan di Malaysia?",
      "options": [
        "Mengurangkan kepelbagaian juadah tempatan supaya lebih seragam",
        "Menggantikan kawasan pulau dan tanah tinggi dengan pusat perindustrian berat",
        "Menjamin keselamatan pelancong serta mempamerkan keunikan budaya dan aneka makanan",
        "Membolehkan semua tapak bersejarah ditutup daripada kunjungan pelawat luar"
      ],
      "correctIndex": 2,
      "explanation": "Keharmonian kaum mewujudkan suasana selamat untuk pelancong, di samping keunikan budaya dan kepelbagaian makanan yang menjadi tarikan utama.",
      "ref": "Unit 8, m/s 135"
    },
    {
      "id": "d6_sej_u8_s3_09",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "H",
      "q": "Apakah impak jangka panjang kejayaan pelancaran Proton Saga (1985) dan penubuhan PERODUA (1993) terhadap struktur ekonomi Malaysia?",
      "options": [
        "Mengembalikan ekonomi negara kepada kegiatan pertanian sara diri semata-mata",
        "Mengehadkan jualan kenderaan hanya untuk kegunaan kakitangan kilang di Shah Alam",
        "Menghapuskan keperluan terhadap sektor pelancongan dan perladangan",
        "Memacu kemajuan industri berat serta teknologi tempatan sekali gus merancakkan ekonomi"
      ],
      "correctIndex": 3,
      "explanation": "Kejayaan kereta nasional merangsang perkembangan industri berat dan keupayaan teknologi negara serta menyumbang secara ketara kepada pertumbuhan ekonomi.",
      "ref": "Unit 8, m/s 132-133"
    },
    {
      "id": "d6_sej_u8_s3_10",
      "unit": "u8",
      "skill": "u8_s3",
      "diff": "H",
      "q": "Mengapakah penganjuran acara seperti perlumbaan Formula One di Sepang, Le Tour de Langkawi dan Festival Muzik Hutan Hujan Sedunia di Sarawak penting bagi ekonomi negara?",
      "options": [
        "Acara tersebut menarik pelancong peminat sukan dan muzik sekali gus mempromosikan Malaysia di peringkat dunia",
        "Acara tersebut hanya dihadiri oleh penduduk dari negeri penganjur sahaja",
        "Acara tersebut menggantikan keperluan memulihara warisan seni bina tradisional",
        "Acara tersebut bertujuan menghentikan aktiviti inap desa dan pertanian tempatan"
      ],
      "correctIndex": 0,
      "explanation": "Penganjuran sukan dan festival muzik bertaraf antarabangsa berjaya menarik pelancong khusus dan mengukuhkan nama Malaysia sebagai destinasi pelancongan global.",
      "ref": "Unit 8, m/s 136"
    },
    {
      "id": "d6_sej_u8_s4_01",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "L",
      "q": "Pada tahun berapakah kempen 'Beli Barangan Buatan Malaysia' mula dilancarkan?",
      "options": [
        "Tahun 1985",
        "Tahun 1993",
        "Tahun 1974",
        "Tahun 2005"
      ],
      "correctIndex": 0,
      "explanation": "Kempen 'Beli Barangan Buatan Malaysia' dilancarkan pada tahun 1985 untuk menggalakkan rakyat menyokong produk tempatan.",
      "ref": "Unit 8, m/s 137"
    },
    {
      "id": "d6_sej_u8_s4_02",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "L",
      "q": "Manakah antara berikut merupakan produk pertanian keluaran jenama Malaysia?",
      "options": [
        "Minyak masak dan buah nanas",
        "Minyak petrol dan gas memasak",
        "Minyak pelincir dan bateri kenderaan",
        "Kereta dan motosikal"
      ],
      "correctIndex": 0,
      "explanation": "Dalam pengelasan produk buatan Malaysia, minyak masak, sabun, buah durian dan buah nanas termasuk dalam kategori produk pertanian.",
      "ref": "Unit 8, m/s 137"
    },
    {
      "id": "d6_sej_u8_s4_03",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "L",
      "q": "Produk manakah yang terhasil daripada industri petroleum buatan Malaysia?",
      "options": [
        "Sabun mandi dan buah durian",
        "Gas memasak dan minyak pelincir kenderaan",
        "Perabot kayu getah dan benang lateks",
        "Minyak masak dan nanas tin"
      ],
      "correctIndex": 1,
      "explanation": "Produk petroleum keluaran negara merangkumi minyak petrol, gas untuk memasak dan minyak pelincir kenderaan.",
      "ref": "Unit 8, m/s 137"
    },
    {
      "id": "d6_sej_u8_s4_04",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "L",
      "q": "Apakah yang dimaksudkan dengan istilah e-dagang dalam perkembangan perdagangan moden?",
      "options": [
        "Aktiviti membeli dan menjual barangan atau perkhidmatan secara dalam talian menerusi Internet",
        "Pembinaan bangunan pencakar langit sebagai pusat pentadbiran",
        "Pengeksportan hasil pertanian melalui kapal kargo tradisional",
        "Pertukaran barangan secara terus di pasar tani luar bandar"
      ],
      "correctIndex": 0,
      "explanation": "E-dagang bermaksud proses menjalankan urusan perniagaan menggunakan rangkaian Internet.",
      "ref": "Unit 8, m/s 138"
    },
    {
      "id": "d6_sej_u8_s4_05",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "L",
      "q": "Apakah yang dilambangkan oleh kewujudan bangunan pencakar langit terhadap pencapaian ekonomi negara?",
      "options": [
        "Menunjukkan sektor pertanian tradisional semakin bertambah",
        "Menandakan penutupan semua kawasan pelancongan alam semula jadi",
        "Menjadi simbol fizikal kemajuan pesat dan kekukuhan ekonomi Malaysia",
        "Menggantikan peranan rangkaian Internet dalam aktiviti perniagaan"
      ],
      "correctIndex": 2,
      "explanation": "Pembangunan bangunan pencakar langit menjadi mercu tanda kemajuan serta lambang kemakmuran ekonomi Malaysia.",
      "ref": "Unit 8, m/s 138"
    },
    {
      "id": "d6_sej_u8_s4_06",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "M",
      "q": "Mengapakah barangan jenama Malaysia daripada sektor pertanian, automotif dan petroleum mendapat sambutan di luar negara?",
      "options": [
        "Kerana mutu keluaran tersebut telah menepati piawaian tempatan dan antarabangsa",
        "Kerana harganya sentiasa diberi secara percuma di pasaran dunia",
        "Kerana produk tempatan dihasilkan tanpa menggunakan sebarang jentera",
        "Kerana kempen Beli Barangan Buatan Malaysia hanya disasarkan kepada pelancong asing"
      ],
      "correctIndex": 0,
      "explanation": "Produk keluaran Malaysia mencapai tahap kualiti yang tinggi sehingga mampu memenuhi keperluan pasaran tempatan dan antarabangsa.",
      "ref": "Unit 8, m/s 137"
    },
    {
      "id": "d6_sej_u8_s4_07",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "M",
      "q": "Apakah peranan jaringan perhubungan moden yang terancang dalam menyokong pencapaian ekonomi negara?",
      "options": [
        "Membatasi pergerakan penduduk agar kekal berada di kawasan pedalaman",
        "Memastikan semua aktiviti perdagangan kembali kepada kaedah sara diri",
        "Memacu kelangsungan pembangunan ekonomi dan memelihara kesejahteraan rakyat",
        "Mengurangkan kepentingan kegiatan e-dagang dalam kalangan peniaga kecil"
      ],
      "correctIndex": 2,
      "explanation": "Jaringan perhubungan moden yang terancang mendorong kesinambungan pembangunan ekonomi serta meningkatkan kesejahteraan rakyat.",
      "ref": "Unit 8, m/s 138"
    },
    {
      "id": "d6_sej_u8_s4_08",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "M",
      "q": "Seorang pengguna ingin menyokong keluaran Malaysia dengan membeli satu produk automotif dan satu produk pertanian. Pilihan manakah yang tepat?",
      "options": [
        "Minyak pelincir dan motosikal",
        "Motosikal dan buah nanas",
        "Minyak petrol dan kereta",
        "Gas memasak dan buah durian"
      ],
      "correctIndex": 1,
      "explanation": "Motosikal tergolong dalam produk automotif manakala buah nanas ialah produk pertanian; minyak petrol, gas memasak dan minyak pelincir ialah produk petroleum.",
      "ref": "Unit 8, m/s 137"
    },
    {
      "id": "d6_sej_u8_s4_09",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "H",
      "q": "Bagaimanakah perkembangan kegiatan e-dagang memberi kelebihan kepada rakyat biasa untuk memajukan ekonomi negara?",
      "options": [
        "Membolehkan semua usahawan beroperasi tanpa memerlukan bekalan barangan",
        "Menghapuskan penggunaan jaringan perhubungan moden dalam urusan penghantaran",
        "Membolehkan individu memulakan perniagaan digital dari mana-mana sahaja sekali gus merancakkan ekonomi setempat",
        "Mewajibkan setiap keluarga membina bangunan pencakar langit di kawasan bandar"
      ],
      "correctIndex": 2,
      "explanation": "Pertumbuhan e-dagang membuka peluang perniagaan dalam talian kepada rakyat agar mereka turut menyumbang kepada pembangunan ekonomi negara.",
      "ref": "Unit 8, m/s 138"
    },
    {
      "id": "d6_sej_u8_s4_10",
      "unit": "u8",
      "skill": "u8_s4",
      "diff": "H",
      "q": "Mengapakah sokongan rakyat terhadap barangan jenama Malaysia penting seiring dengan pembangunan infrastruktur dan perdagangan moden?",
      "options": [
        "Supaya rakyat hanya bergantung kepada ekonomi tradisional untuk keperluan harian",
        "Supaya industri tempatan terus berkembang maju dan kemakmuran negara dapat dikongsi bersama",
        "Agar semua barangan import dilarang masuk terus ke dalam negara",
        "Agar kawasan perindustrian berat dipindahkan sepenuhnya ke luar negara"
      ],
      "correctIndex": 1,
      "explanation": "Sokongan rakyat membeli dan mengutamakan produk buatan Malaysia membantu ekonomi tempatan terus berkembang supaya kemakmuran negara dinikmati bersama.",
      "ref": "Unit 8, m/s 137-138, 141"
    },
    {
      "id": "d6_sej_u9_s1_01",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "L",
      "q": "Badan sukan manakah yang ditubuhkan pada tahun 1960 bagi memajukan sukan badminton di Malaysia?",
      "options": [
        "Kesatuan Olahraga Malaysia (KOM)",
        "Konfederasi Hoki Malaysia (MHC)",
        "Persatuan Bola Sepak Malaysia (FAM)",
        "Persatuan Badminton Malaysia (BAM)"
      ],
      "correctIndex": 3,
      "explanation": "Persatuan Badminton Malaysia (BAM) ditubuhkan pada tahun 1960 untuk memajukan sukan badminton serta menganjurkan Kejohanan Badminton Kebangsaan.",
      "ref": "Unit 9, m/s 144"
    },
    {
      "id": "d6_sej_u9_s1_02",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "L",
      "q": "Siapakah pemain bola sepak Pulau Pinang yang pernah meraih pengiktirafan antarabangsa melalui Anugerah Puskas FIFA pada tahun 2016?",
      "options": [
        "Mohd Faiz Subri",
        "Soh Chin Ann",
        "James Wong",
        "Safawi Rasid"
      ],
      "correctIndex": 0,
      "explanation": "Mohd Faiz Subri berjaya memenangi Anugerah Puskas FIFA 2016 ketika beraksi bersama pasukan bola sepak Pulau Pinang.",
      "ref": "Unit 9, m/s 144"
    },
    {
      "id": "d6_sej_u9_s1_03",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "L",
      "q": "Kesatuan Olahraga Amatur Malaysia (KOAM) yang ditubuhkan pada tahun 1952 kini dikenali dengan nama apa?",
      "options": [
        "Majlis Sukan Sekolah Malaysia (MSSM)",
        "Kesatuan Olahraga Malaysia (KOM)",
        "Konfederasi Hoki Malaysia (MHC)",
        "Majlis Olimpik Malaysia (MOM)"
      ],
      "correctIndex": 1,
      "explanation": "KOAM yang menggerakkan sukan olahraga negara sejak tahun 1952 kini dikenali sebagai Kesatuan Olahraga Malaysia (KOM).",
      "ref": "Unit 9, m/s 145"
    },
    {
      "id": "d6_sej_u9_s1_04",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "L",
      "q": "Apakah pencapaian bersejarah yang dilakar oleh Pandelela Rinong anak Pamg untuk kontinjen Malaysia?",
      "options": [
        "Menjadi atlet wanita pertama membawa bendera Malaysia di Sukan Olimpik",
        "Meraih pingat perak berbasikal trek di Olimpik Tokyo",
        "Menjuarai Kejohanan Skuasy Terbuka Dunia sebanyak lapan kali",
        "Mengetuai pasukan hoki negara dari tahun 2000 hingga 2006"
      ],
      "correctIndex": 0,
      "explanation": "Pandelela Rinong merupakan atlet terjun papan anjal yang menjadi atlet wanita pertama membawa bendera kontinjen negara semasa pembukaan Sukan Olimpik serta penyumbang pingat gangsa pertama negara di Sukan Olimpik London 2012.",
      "ref": "Unit 9, m/s 146"
    },
    {
      "id": "d6_sej_u9_s1_05",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "L",
      "q": "Atlet paralimpik negara, Bonnie Bunyau Gustin, mengharumkan nama Malaysia pada peringkat dunia dalam acara sukan apa?",
      "options": [
        "Angkat berat",
        "Lontar peluru",
        "Lari pecut 100 meter",
        "Lompat jauh"
      ],
      "correctIndex": 0,
      "explanation": "Bonnie Bunyau Gustin meraih pingat emas dan memecahkan rekod dunia acara angkat berat pada Kejohanan Piala Dunia Para Powerlifting Fazza Dubai 2021 serta memenangi emas Sukan Paralimpik Tokyo 2020.",
      "ref": "Unit 9, m/s 148"
    },
    {
      "id": "d6_sej_u9_s1_06",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "M",
      "q": "Mengapakah pelumba basikal negara, Mohd Azizulhasni Awang yang digelar 'The Pocket Rocketman', menjadi kebanggaan rakyat Malaysia?",
      "options": [
        "Beliau mengumpul lapan pingat emas dalam acara renang Sukan SEA",
        "Beliau merangkul enam kali gelaran Mr. Asia bagi kategori heavyweight",
        "Beliau mengetuai pasukan badminton negara menjuarai Piala Thomas lima kali",
        "Beliau memenangi emas Kejohanan Dunia 2017 dan perak Olimpik Tokyo 2020"
      ],
      "correctIndex": 3,
      "explanation": "Mohd Azizulhasni Awang meraih pingat emas di Kejohanan Dunia Berbasikal Trek UCI 2017 di Hong Kong serta pingat perak di Sukan Olimpik Tokyo 2020.",
      "ref": "Unit 9, m/s 147"
    },
    {
      "id": "d6_sej_u9_s1_07",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "M",
      "q": "Bagaimanakah pasukan Team Secret MY membuktikan kebolehan anak muda Malaysia dalam bidang e-sukan pada tahun 2021?",
      "options": [
        "Menduduki tempat ketujuh dunia dalam Kejohanan Final Global PUBG Mobile",
        "Memenangi pingat emas acara terjun di Tokyo pada tahun tersebut",
        "Menjuarai Kejohanan Badminton Terbuka All England acara beregu",
        "Melayakkan pasukan bola sepak negara ke pusingan akhir Sukan Olimpik"
      ],
      "correctIndex": 0,
      "explanation": "Team Secret MY mewakili Malaysia dalam Kejohanan Final Global PUBG Mobile (PMGC) 2021 dan berjaya menempatkan diri di kedudukan ketujuh terbaik dunia.",
      "ref": "Unit 9, m/s 147"
    },
    {
      "id": "d6_sej_u9_s1_08",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "M",
      "q": "Pasangan manakah yang tepat antara atlet paralimpik negara dengan acara yang dimenangi mereka pada Sukan Paralimpik Rio 2016?",
      "options": [
        "Abdul Latif Romly — Angkat berat para",
        "Mohamad Ridzuan Mohamad Puzi — Lontar peluru F20",
        "Muhammad Ziyad Zolkefli — Lontar peluru F20",
        "Bonnie Bunyau Gustin — Lari 100 meter T36"
      ],
      "correctIndex": 2,
      "explanation": "Muhammad Ziyad Zolkefli memenangi emas acara lontar peluru F20 dengan rekod dunia 16.84 meter di Rio 2016, manakala Mohamad Ridzuan memenangi 100 meter T36 dan Abdul Latif memenangi lompat jauh T20.",
      "ref": "Unit 9, m/s 148"
    },
    {
      "id": "d6_sej_u9_s1_09",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "H",
      "q": "Berdasarkan perkembangan sukan badminton, bola sepak, olahraga dan hoki di Malaysia, apakah persamaan peranan keempat-empat persatuan sukan kebangsaan tersebut?",
      "options": [
        "Menentukan giliran negeri yang menjadi tuan rumah Sukan Komanwel setiap empat tahun",
        "Menggantikan peranan sekolah dalam mewajibkan penyertaan murid dalam sukan",
        "Menganjurkan pertandingan tempatan bagi mengasah bakat atlet ke pentas antarabangsa",
        "Menguruskan kejohanan e-sukan bagi pelajar institusi pengajian tinggi"
      ],
      "correctIndex": 2,
      "explanation": "Persatuan seperti BAM, FAM, KOM dan MHC masing-masing menganjurkan kejohanan kebangsaan serta melahirkan pemain berwibawa untuk mewakili negara di peringkat antarabangsa.",
      "ref": "Unit 9, m/s 144-145"
    },
    {
      "id": "d6_sej_u9_s1_10",
      "unit": "u9",
      "skill": "u9_s1",
      "diff": "H",
      "q": "Amir meneliti biodata Nicol Ann David, S. Kuhan, Nurul Huda Abdullah dan Abdul Latif Romly. Apakah kesimpulan paling tepat tentang kejayaan mereka?",
      "options": [
        "Pingat antarabangsa hanya dimenangi oleh atlet dalam acara renang dan skuasy",
        "Atlet pelbagai kaum dan keupayaan mampu mengangkat martabat Malaysia di persada dunia",
        "Kejayaan sukan dunia hanya mampu dicapai melalui acara berpasukan seperti hoki",
        "Pencapaian tertinggi negara hanya berlaku dalam temasya sukan peringkat sekolah"
      ],
      "correctIndex": 1,
      "explanation": "Pelibatan cemerlang atlet daripada pelbagai kaum termasuk atlet paralimpik dalam pelbagai jenis sukan membuktikan keupayaan Malaysia mengharumkan nama negara pada peringkat antarabangsa.",
      "ref": "Unit 9, m/s 146-148"
    },
    {
      "id": "d6_sej_u9_s2_02",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "L",
      "q": "Apakah ketetapan utama di bawah Dasar 1Murid 1Sukan (1M1S) yang bermula pada tahun 2011?",
      "options": [
        "Setiap murid perlu mewakili negeri masing-masing dalam temasya SUKMA",
        "Setiap murid perlu melibatkan diri dalam sekurang-kurangnya satu bidang sukan",
        "Setiap sekolah mesti menganjurkan temasya sukan peringkat antarabangsa",
        "Setiap kelas diwajibkan membentuk pasukan bola sepak dan hoki"
      ],
      "correctIndex": 1,
      "explanation": "Melalui Dasar 1Murid 1Sukan (1M1S) yang bermula pada tahun 2011, setiap murid terlibat dalam sekurang-kurangnya satu jenis sukan untuk memupuk semangat kesukanan dan perpaduan.",
      "ref": "Unit 9, m/s 149"
    },
    {
      "id": "d6_sej_u9_s2_03",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "L",
      "q": "Apakah temasya sukan terbesar di dalam negara yang mula dianjurkan pada tahun 1986 secara bergilir-gilir mengikut negeri?",
      "options": [
        "Sukan Institusi Pendidikan Tinggi (SUKIPT)",
        "Temasya Sukan Malaysia (SUKMA)",
        "Kejohanan Pestabola Merdeka",
        "Kejohanan Majlis Sukan Sekolah Malaysia (MSSM)"
      ],
      "correctIndex": 1,
      "explanation": "Temasya Sukan Malaysia (SUKMA) yang bermula pada tahun 1986 merupakan kejohanan sukan terbesar dalam negara yang dihoskan secara bergilir-gilir oleh setiap negeri.",
      "ref": "Unit 9, m/s 150"
    },
    {
      "id": "d6_sej_u9_s2_04",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "L",
      "q": "Golongan manakah yang menjadi sasaran penyertaan bagi kejohanan Sukan Institusi Pendidikan Tinggi (SUKIPT)?",
      "options": [
        "Murid tahun enam di sekolah kebangsaan",
        "Pemain kelab profesional dari luar negara",
        "Bekas atlet kebangsaan yang telah bersara",
        "Atlet pada peringkat institusi pengajian tinggi"
      ],
      "correctIndex": 3,
      "explanation": "SUKIPT merupakan temasya sukan yang dikhususkan kepada atlet di peringkat institusi pengajian tinggi (IPT) untuk memperkukuh perpaduan serta keharmonian kaum.",
      "ref": "Unit 9, m/s 150"
    },
    {
      "id": "d6_sej_u9_s2_05",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "L",
      "q": "Temasya Sukan Paralimpik yang diadakan pada peringkat kebangsaan dan antarabangsa dianjurkan khusus untuk golongan mana?",
      "options": [
        "Atlet profesional acara sukan permotoran",
        "Atlet remaja sekolah berasrama penuh",
        "Peserta sukan air dan perahu layar negeri",
        "Atlet dalam kalangan Orang Kurang Upaya (OKU)"
      ],
      "correctIndex": 3,
      "explanation": "Sukan Paralimpik merupakan temasya sukan bagi Orang Kurang Upaya (OKU) yang turut menyuntik semangat perpaduan kaum.",
      "ref": "Unit 9, m/s 150"
    },
    {
      "id": "d6_sej_u9_s2_07",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "M",
      "q": "Mengapakah Kejohanan Majlis Sukan Sekolah Malaysia (MSSM) yang diadakan setiap tahun penting kepada pembangunan sukan negara?",
      "options": [
        "Menjadi kejohanan khas penuntut universiti sebelum menyertai Sukan Olimpik",
        "Menentukan lokasi penganjuran kejohanan sukan permotoran antarabangsa",
        "Menjemput pasukan sukan luar negara untuk melancong ke sekolah tempatan",
        "Menjadi medan atlet remaja mengembangkan bakat sukan sambil membentuk perpaduan masyarakat"
      ],
      "correctIndex": 3,
      "explanation": "Kejohanan tahunan MSSM memberi ruang kepada atlet remaja menyerlahkan bakat sukan di samping membina perpaduan dalam masyarakat Malaysia.",
      "ref": "Unit 9, m/s 149"
    },
    {
      "id": "d6_sej_u9_s2_08",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "M",
      "q": "Selain membentuk masyarakat yang harmoni, apakah peluang yang terbuka kepada atlet berpotensi tinggi melalui temasya SUKMA?",
      "options": [
        "Dikecualikan daripada menyertai program sukan di sekolah atau universiti",
        "Dilantik terus menjadi ketua kontinjen Sukan Paralimpik",
        "Berpeluang mewakili serta mengharumkan nama negara pada peringkat antarabangsa",
        "Diberikan hak mutlak menubuhkan persatuan sukan kebangsaan baharu"
      ],
      "correctIndex": 2,
      "explanation": "Atlet yang menyerlah dan berpotensi tinggi dalam SUKMA berpeluang melangkah lebih jauh untuk mengharumkan nama Malaysia di pentas antarabangsa.",
      "ref": "Unit 9, m/s 150"
    },
    {
      "id": "d6_sej_u9_s2_09",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "H",
      "q": "Sekolah Kebangsaan Taman Indah dan Sekolah Jenis Kebangsaan Tamil Maju merancang menganjurkan karnival sukan bersama untuk murid berbilang kaum. Inisiatif manakah yang paling tepat menggambarkan usaha tersebut?",
      "options": [
        "Rancangan Integrasi Murid Untuk Perpaduan (RIMUP)",
        "Kejohanan Hoki Piala Sultan Azlan Shah",
        "Temasya Sukan Malaysia (SUKMA)",
        "Kejohanan Sukan Institusi Pendidikan Tinggi (SUKIPT)"
      ],
      "correctIndex": 0,
      "explanation": "Kerjasama menjalankan aktiviti sukan antara sekolah berlainan aliran untuk menyatukan murid pelbagai kaum merupakan matlamat utama program RIMUP.",
      "ref": "Unit 9, m/s 149"
    },
    {
      "id": "d6_sej_u9_s2_10",
      "unit": "u9",
      "skill": "u9_s2",
      "diff": "H",
      "q": "Mengapakah perpaduan dan keharmonian kaum yang terjalin melalui program sukan seperti 1M1S, MSSM, SUKMA dan SUKIPT amat bernilai kepada Malaysia?",
      "options": [
        "Membolehkan murid berhenti menyertai aktiviti kokurikulum selain sukan",
        "Mengelakkan atlet tempatan daripada perlu bertanding di luar negara",
        "Mengurangkan keperluan membina kemudahan sukan baharu di setiap negeri",
        "Menjadi pendorong penting kepada kestabilan dan pembangunan negara"
      ],
      "correctIndex": 3,
      "explanation": "Perpaduan serta keharmonian kaum yang dipupuk menerusi pelbagai kegiatan sukan menjadi pemangkin kepada kemajuan dan pembangunan negara.",
      "ref": "Unit 9, m/s 149-150"
    },
    {
      "id": "d6_sej_u9_s3_01",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "L",
      "q": "Apakah faktor utama yang membuatkan Malaysia diyakini menjadi tuan rumah kepada pelbagai kejohanan sukan bertaraf antarabangsa?",
      "options": [
        "Menjuarai kejohanan bola sepak Piala Dunia sebanyak dua kali",
        "Menjadi negara pengasas bagi semua persekutuan sukan dunia",
        "Memiliki kemudahan serta infrastruktur sukan yang lengkap",
        "Mempunyai jumlah penduduk paling besar di benua Asia"
      ],
      "correctIndex": 2,
      "explanation": "Malaysia diberikan kepercayaan menjadi tuan rumah temasya sukan antarabangsa kerana negara kita dilengkapi infrastruktur sukan yang baik dan menyeluruh.",
      "ref": "Unit 9, m/s 151"
    },
    {
      "id": "d6_sej_u9_s3_02",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "L",
      "q": "Pada tahun berapakah nama Kejohanan Sukan SEAP ditukar dan dikenali secara rasmi sebagai Sukan SEA?",
      "options": [
        "Tahun 1977",
        "Tahun 2017",
        "Tahun 1959",
        "Tahun 1989"
      ],
      "correctIndex": 0,
      "explanation": "Sukan SEAP mula dipertandingkan pada tahun 1959 dan mula dikenali sebagai Sukan SEA (Southeast Asian Games) pada tahun 1977.",
      "ref": "Unit 9, m/s 151"
    },
    {
      "id": "d6_sej_u9_s3_03",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "L",
      "q": "Berapa kalikah kejohanan badminton Piala Thomas telah berlangsung dengan Malaysia sebagai tuan rumah?",
      "options": [
        "Empat kali",
        "Dua kali",
        "Sepuluh kali",
        "Enam kali"
      ],
      "correctIndex": 3,
      "explanation": "Malaysia telah menganjurkan kejohanan badminton Piala Thomas sebanyak enam kali di Stadium Negara dan Stadium Putra, Bukit Jalil.",
      "ref": "Unit 9, m/s 152"
    },
    {
      "id": "d6_sej_u9_s3_04",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "L",
      "q": "Apakah haiwan yang dipilih sebagai maskot rasmi semasa Malaysia menjadi tuan rumah temasya Sukan Komanwel?",
      "options": [
        "Orang Utan",
        "Burung Kenyalang",
        "Kancil",
        "Harimau Malaya"
      ],
      "correctIndex": 0,
      "explanation": "Dalam penganjuran Sukan Komanwel di Malaysia dengan Stadium Nasional Bukit Jalil sebagai stadium utama, imej Orang Utan dipilih sebagai maskot manakala bunga raya menjadi logo kejohanan.",
      "ref": "Unit 9, m/s 153"
    },
    {
      "id": "d6_sej_u9_s3_05",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "L",
      "q": "Di manakah lokasi berlangsungnya kejohanan sukan perahu layar Piala Monsun di Malaysia sejak tahun 2005?",
      "options": [
        "Litar Antarabangsa Sepang, Selangor",
        "Putrajaya",
        "Pulau Langkawi, Kedah",
        "Pulau Duyong, Terengganu"
      ],
      "correctIndex": 3,
      "explanation": "Malaysia menjadi tuan rumah siri kejohanan sukan perahu layar Piala Monsun sejak tahun 2005 di Pulau Duyong, Terengganu sebagai acara penutup kalendar kejohanan tersebut.",
      "ref": "Unit 9, m/s 153"
    },
    {
      "id": "d6_sej_u9_s3_06",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "M",
      "q": "Bagaimanakah penganjuran perlumbaan basikal antarabangsa Le Tour de Langkawi membantu sektor pelancongan Malaysia?",
      "options": [
        "Kejohanan ini diadakan sepuluh tahun sekali bagi mengumpul dana pelaburan asing",
        "Laluan perlumbaan yang menjelajah ke seluruh negara mempromosikan lokasi pelancongan Malaysia",
        "Pelumba hanya bersaing di kawasan pesisir Pulau Langkawi tanpa keluar ke negeri lain",
        "Acara tersebut hanya dijalankan di dalam stadium tertutup di ibu kota"
      ],
      "correctIndex": 1,
      "explanation": "Nama Le Tour de Langkawi diambil sempena lokasi pelepasan di Pulau Langkawi, Kedah dan laluannya yang merentasi seluruh negara membantu memperkenalkan destinasi pelancongan Malaysia.",
      "ref": "Unit 9, m/s 152"
    },
    {
      "id": "d6_sej_u9_s3_07",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "M",
      "q": "Padanan manakah yang betul antara kejohanan sukan permotoran antarabangsa dengan lokasi penganjurannya di Malaysia?",
      "options": [
        "Formula One di Pulau Duyong dan MotoGP di Stadium Negara",
        "Formula E di Stadium Merdeka dan Formula One di Bukit Jalil",
        "Superbike World Championship di Pulau Langkawi dan Formula E di Sepang",
        "Formula One di Litar Antarabangsa Sepang dan Formula E di Putrajaya"
      ],
      "correctIndex": 3,
      "explanation": "Malaysia menjadi tuan rumah Formula One sejak tahun 2000 di Litar Antarabangsa Sepang (SIC) manakala kejohanan Formula E pula dianjurkan di Putrajaya pada tahun 2014.",
      "ref": "Unit 9, m/s 153"
    },
    {
      "id": "d6_sej_u9_s3_08",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "M",
      "q": "Apakah tujuan Malaysia menganjurkan Kejohanan Pestabola Merdeka yang berlangsung dari tahun 1957 hingga 2013?",
      "options": [
        "Memperingati hari kemerdekaan negara melalui kejohanan bola sepak antarabangsa",
        "Memilih pasukan kebangsaan untuk bertanding di Sukan Komanwel",
        "Menguji kekuatan stadium baharu sebelum temasya Sukan SEA bermula",
        "Mengumpul dana khas bagi membina litar perlumbaan bertaraf dunia"
      ],
      "correctIndex": 0,
      "explanation": "Kejohanan Pestabola Merdeka dianjurkan bagi memperingati hari kemerdekaan negara dengan penyertaan pasukan dari negara jiran, Asia dan Eropah, dan Malaysia pernah muncul juara sebanyak 10 kali.",
      "ref": "Unit 9, m/s 153"
    },
    {
      "id": "d6_sej_u9_s3_09",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "H",
      "q": "Apakah perkembangan ketara yang dicatatkan ketika Malaysia menjadi tuan rumah Kejohanan Hoki Piala Dunia tahun 2002 di Stadium Hoki Nasional, Bukit Jalil?",
      "options": [
        "Disertai oleh 16 buah negara dan menjadi jumlah penyertaan terbanyak",
        "Dipindahkan semula ke Stadium Merdeka untuk mengehadkan bilangan penonton",
        "Dikhaskan hanya kepada pasukan hoki dari negara anggota Asia Tenggara",
        "Digabungkan secara serentak dengan pertandingan badminton Piala Thomas"
      ],
      "correctIndex": 0,
      "explanation": "Penganjuran Kejohanan Hoki Piala Dunia tahun 2002 di Bukit Jalil merekodkan penyertaan terbanyak iaitu sebanyak 16 buah negara, sekali gus mendorong pembangunan sukan hoki tanah air.",
      "ref": "Unit 9, m/s 152"
    },
    {
      "id": "d6_sej_u9_s3_10",
      "unit": "u9",
      "skill": "u9_s3",
      "diff": "H",
      "q": "Mengapakah peranan Malaysia sebagai tuan rumah temasya sukan bertaraf dunia seperti Sukan SEA, Sukan Komanwel dan sukan permotoran membawa keuntungan menyeluruh kepada negara?",
      "options": [
        "Mengurangkan jumlah pelancong asing supaya kemudahan sukan sentiasa lengang",
        "Merapatkan hubungan antarabangsa, mengharumkan nama negara dan menjanakan ekonomi melalui pelancongan",
        "Menggantikan semua pertandingan sukan kebangsaan dengan acara jemputan luar negara",
        "Menjadikan pelajar sekolah tidak perlu menyertai latihan sukan tempatan"
      ],
      "correctIndex": 1,
      "explanation": "Penganjuran sukan antarabangsa merapatkan hubungan serantau serta negara Komanwel, meningkatkan imej Malaysia di peringkat dunia, menarik pelancong asing dan menyumbang kepada pembangunan ekonomi negara.",
      "ref": "Unit 9, m/s 151-153"
    },
    {
      "id": "d6_sej_u9_s4_01",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "L",
      "q": "Tokoh kepimpinan sukan manakah yang diberi gelaran 'Bapa Hoki Malaysia' atas sumbangan besar baginda memajukan sukan hoki negara?",
      "options": [
        "Dr. M. Jegathesan",
        "Dato' Peter Velappan",
        "Dato' Sieh Kok Chi",
        "Sultan Azlan Muhibbuddin Shah"
      ],
      "correctIndex": 3,
      "explanation": "Sultan Azlan Muhibbuddin Shah Ibni Almarhum Sultan Yussuf Izzuddin Shah dikenali sebagai 'Bapa Hoki Malaysia' kerana jasa baginda dalam kemajuan sukan hoki tanah air.",
      "ref": "Unit 9, m/s 154"
    },
    {
      "id": "d6_sej_u9_s4_02",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "L",
      "q": "Mengapakah Dr. M. Jegathesan digelar sebagai 'Manusia Terpantas Asia'?",
      "options": [
        "Menjaringkan 89 gol untuk pasukan bola sepak kebangsaan Malaysia",
        "Mengetuai jawatankuasa pengelola kejohanan Piala Dunia FIFA di Asia",
        "Menjuarai Kejohanan Badminton Terbuka All England pada tahun 1966",
        "Mencatat kejayaan cemerlang sebagai pelari pecut di Sukan Asia dan Olimpik"
      ],
      "correctIndex": 3,
      "explanation": "Dr. M. Jegathesan ialah atlet pecut negara yang mewakili Malaysia dalam tiga edisi Sukan Olimpik (1960, 1964 dan 1968) serta memenangi tiga emas acara pecut pada Sukan Asia Bangkok.",
      "ref": "Unit 9, m/s 155"
    },
    {
      "id": "d6_sej_u9_s4_03",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "L",
      "q": "Siapakah pemain badminton perseorangan lelaki Malaysia yang berjaya menjuarai Kejohanan Badminton Terbuka All England pada tahun 1966?",
      "options": [
        "Mokhtar Dahari",
        "Tan Aik Huang",
        "Punch Gunalan",
        "Rabuan Pit"
      ],
      "correctIndex": 1,
      "explanation": "Tan Aik Huang ialah jaguh badminton perseorangan terdahulu yang memenangi Terbuka All England 1966, pingat emas Sukan Komanwel serta membantu negara meraih Piala Thomas.",
      "ref": "Unit 9, m/s 155"
    },
    {
      "id": "d6_sej_u9_s4_04",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "L",
      "q": "Apakah gelaran ikonik yang diberikan oleh masyarakat Malaysia kepada legenda bola sepak negara, Mokhtar Dahari?",
      "options": [
        "The Pocket Rocketman",
        "Bapa Bola Sepak Moden",
        "Raja Pecut Asia",
        "Supermokh"
      ],
      "correctIndex": 3,
      "explanation": "Mokhtar Dahari digelar 'Supermokh' atas kecemerlangannya mewakili negara sebanyak 167 kali, menjaringkan 89 gol serta membantu Malaysia menjuarai Pestabola Merdeka tahun 1973, 1974 dan 1976.",
      "ref": "Unit 9, m/s 155"
    },
    {
      "id": "d6_sej_u9_s4_05",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "L",
      "q": "Dalam bidang sukan apakah M. Rajamani mengharumkan nama Malaysia pada peringkat Sukan SEAP, Sukan Asia dan Sukan Olimpik?",
      "options": [
        "Terjun papan anjal",
        "Olahraga acara balapan",
        "Renang gaya bebas",
        "Badminton beregu wanita"
      ],
      "correctIndex": 1,
      "explanation": "M. Rajamani merupakan atlet olahraga wanita negara yang cemerlang dalam acara 200 meter, 400 meter, 800 meter dan 4x100 meter pada peringkat antarabangsa.",
      "ref": "Unit 9, m/s 155"
    },
    {
      "id": "d6_sej_u9_s4_06",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "M",
      "q": "Apakah peranan penting yang pernah digalas oleh Dato' Peter Velappan semasa Kejohanan Piala Dunia FIFA pertama di Asia pada tahun 2002?",
      "options": [
        "Beraksi sebagai penyerang utama pasukan bola sepak kebangsaan",
        "Mengilhamkan penganjuran Kejohanan Hoki Piala Sultan Azlan Shah",
        "Mengetuai Majlis Olimpik Malaysia sebagai Setiausaha Agung sejak 1992",
        "Menjawat tugas sebagai Pengarah Koordinasi Jawatankuasa Pengelola kejohanan itu"
      ],
      "correctIndex": 3,
      "explanation": "Selain lama berkhidmat sebagai Setiausaha Agung Konfederasi Bola Sepak Asia (AFC) dari 1978 hingga 2007, Dato' Peter Velappan menjadi Pengarah Koordinasi Jawatankuasa Pengelola Piala Dunia FIFA 2002 di Jepun dan Korea Selatan.",
      "ref": "Unit 9, m/s 154"
    },
    {
      "id": "d6_sej_u9_s4_07",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "M",
      "q": "Sebelum berkhidmat sebagai Setiausaha Agung Majlis Olimpik Malaysia (MOM) dari tahun 1992 hingga 2015, dalam sukan apakah Dato' Sieh Kok Chi menyumbangkan pingat perak Sukan SEAP?",
      "options": [
        "Bola sepak",
        "Polo air",
        "Lumba basikal",
        "Hoki padang"
      ],
      "correctIndex": 1,
      "explanation": "Dato' Sieh Kok Chi memulakan penglibatan sebagai atlet polo air negara yang meraih pingat perak dalam Sukan SEAP edisi 1965, 1967 dan 1969 sebelum berkhidmat dalam MOM.",
      "ref": "Unit 9, m/s 154"
    },
    {
      "id": "d6_sej_u9_s4_08",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "M",
      "q": "Apakah bukti pengiktirafan antarabangsa serta legasi berterusan Sultan Azlan Muhibbuddin Shah dalam sukan hoki?",
      "options": [
        "Baginda menjadi jurulatih bola sepak negara ke pusingan kelayakan Olimpik",
        "Baginda dilantik sebagai Naib Presiden FIH dan mengilhamkan Piala Sultan Azlan Shah",
        "Baginda mencatat rekod dunia dalam sukan angkat berat paralimpik",
        "Baginda memenangi tiga pingat emas acara pecut di Sukan Asia Bangkok"
      ],
      "correctIndex": 1,
      "explanation": "Sultan Azlan Muhibbuddin Shah pernah dilantik sebagai Naib Presiden Federation International Hockey (FIH) dari 1992 hingga 2000 serta mengilhamkan Kejohanan Hoki Piala Sultan Azlan Shah yang disertai lapan pasukan terbaik dunia.",
      "ref": "Unit 9, m/s 154"
    },
    {
      "id": "d6_sej_u9_s4_09",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "H",
      "q": "Sekumpulan murid mengkaji pencapaian Dr. M. Jegathesan, M. Rajamani, Tan Aik Huang dan Mokhtar Dahari. Mengapakah jasa atlet terdahulu ini penting dihargai oleh generasi muda?",
      "options": [
        "Kecemerlangan atlet pelbagai kaum ini membuktikan keupayaan negara dan menjadi inspirasi kini",
        "Mereka menjadi penganjur tunggal kejohanan Sukan Komanwel di ibu negara",
        "Mereka menggubal Dasar 1Murid 1Sukan untuk semua sekolah rendah kebangsaan",
        "Kesemua tokoh tersebut pernah mengetuai pasukan e-sukan Malaysia ke luar negara"
      ],
      "correctIndex": 0,
      "explanation": "Pengorbanan dan kejayaan atlet terdahulu daripada pelbagai kaum telah mengharumkan nama negara serta menjadi inspirasi kepada pembangunan sukan masa ini.",
      "ref": "Unit 9, m/s 155"
    },
    {
      "id": "d6_sej_u9_s4_10",
      "unit": "u9",
      "skill": "u9_s4",
      "diff": "H",
      "q": "Berdasarkan Unit 9, bagaimanakah peranan pemimpin sukan negara dan atlet legenda terdahulu saling melengkapi dalam membangunkan sukan Malaysia?",
      "options": [
        "Kedua-dua golongan hanya menumpukan pertandingan daerah tanpa penyertaan luar negara",
        "Atlet legenda mentadbir semua persatuan sukan antarabangsa secara bersendirian",
        "Kepimpinan sukan yang berwibawa digabungkan dengan kegigihan atlet melonjakkan nama Malaysia",
        "Pemimpin sukan menggantikan tempat atlet untuk bertanding dalam kejohanan dunia"
      ],
      "correctIndex": 2,
      "explanation": "Kejayaan sukan negara hingga peringkat antarabangsa terhasil daripada kerjasama serta kegigihan pemimpin sukan yang memegang jawatan penting organisasi bersama pencapaian cemerlang para atlet.",
      "ref": "Unit 9, m/s 154-155"
    },
    {
      "id": "d6_sej_u10_s1_01",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "L",
      "q": "Apakah ciri utama yang menentukan sesuatu pakatan negara digolongkan sebagai pertubuhan serantau?",
      "options": [
        "Ahlinya terdiri daripada beberapa negara yang berdekatan secara geografi",
        "Kesemua negara anggotanya berkongsi sejarah penjajahan British",
        "Keahliannya dibuka kepada semua negara merdeka di seluruh dunia",
        "Semua negara ahlinya menggunakan bahasa rasmi yang seragam"
      ],
      "correctIndex": 0,
      "explanation": "Pertubuhan serantau merujuk kepada kerjasama antara beberapa buah negara yang terletak berjiran dalam rantau yang sama.",
      "ref": "Unit 10, m/s 162"
    },
    {
      "id": "d6_sej_u10_s1_02",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "L",
      "q": "Antara yang berikut, manakah gabungan tiga buah negara yang menganggotai SEAFET dan ASA?",
      "options": [
        "Thailand, Indonesia dan Vietnam",
        "Persekutuan Tanah Melayu, Singapura dan Brunei",
        "Persekutuan Tanah Melayu, Thailand dan Filipina",
        "Malaysia, Indonesia dan Singapura"
      ],
      "correctIndex": 2,
      "explanation": "Kedua-dua pertubuhan serantau awal iaitu SEAFET dan ASA disertai oleh Persekutuan Tanah Melayu bersama Thailand dan Filipina.",
      "ref": "Unit 10, m/s 162"
    },
    {
      "id": "d6_sej_u10_s1_03",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "L",
      "q": "Manakah antara negara berikut merupakan antara lima ahli asal ketika ASEAN mula diwujudkan pada tahun 1967?",
      "options": [
        "Brunei, Myanmar dan Thailand",
        "Malaysia, Indonesia dan Singapura",
        "Filipina, Brunei dan Vietnam",
        "Vietnam, Laos dan Kemboja"
      ],
      "correctIndex": 1,
      "explanation": "Pada peringkat awal penubuhannya tahun 1967, ASEAN disertai oleh lima negara pengasas iaitu Malaysia, Indonesia, Thailand, Filipina dan Singapura.",
      "ref": "Unit 10, m/s 162"
    },
    {
      "id": "d6_sej_u10_s1_04",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "L",
      "q": "Mengapakah Malaysia hanya menyertai Pertubuhan Bangsa-Bangsa Bersatu (PBB) dan Komanwel bermula pada tahun 1957?",
      "options": [
        "Malaysia baru menandatangani perjanjian sempadan dengan negara jiran",
        "Malaysia ingin menyertai pakatan negara membangun di benua Afrika terlebih dahulu",
        "Malaysia mula layak menyertainya setelah memperoleh kemerdekaan pada tahun tersebut",
        "Kedua-dua pertubuhan tersebut baru sahaja ditubuhkan pada tahun berkenaan"
      ],
      "correctIndex": 2,
      "explanation": "Malaysia menyertai Komanwel dan PBB pada tahun 1957 sejurus selepas negara mencapai kemerdekaan.",
      "ref": "Unit 10, m/s 163"
    },
    {
      "id": "d6_sej_u10_s1_05",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "L",
      "q": "Apakah latar belakang sejarah yang menghubungkan sebahagian besar negara anggota Komanwel?",
      "options": [
        "Menjadikan agama Islam sebagai teras kerjasama negara",
        "Terletak berhampiran antara satu sama lain di Asia Tenggara",
        "Pernah berada di bawah pemerintahan kolonial British",
        "Ditubuhkan khusus oleh negara membangun di Amerika Selatan"
      ],
      "correctIndex": 2,
      "explanation": "Komanwel menghimpunkan negara-negara yang dahulunya merupakan tanah jajahan British.",
      "ref": "Unit 10, m/s 163"
    },
    {
      "id": "d6_sej_u10_s1_06",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "M",
      "q": "Apakah fakta yang tepat mengenai penglibatan awal Malaysia dalam Pertubuhan Kerjasama Islam (OIC)?",
      "options": [
        "Malaysia hanya menyertai OIC selepas penubuhan ASEAN oleh lima negara jiran",
        "Malaysia menjadi ahli sejak OIC ditubuhkan pada tahun 1969 dengan 57 ahli awal",
        "Malaysia menyertai OIC bersama negara bekas tanah jajahan British pada tahun 1957",
        "Malaysia menyertai OIC pada tahun 1970 bersama 120 buah negara membangun"
      ],
      "correctIndex": 1,
      "explanation": "Malaysia menyertai OIC sejak penubuhannya pada tahun 1969, yang pada peringkat awal disertai oleh 57 buah negara.",
      "ref": "Unit 10, m/s 163"
    },
    {
      "id": "d6_sej_u10_s1_07",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "M",
      "q": "Sebuah pertubuhan antarabangsa disertai Malaysia sejak tahun 1970 dan menghimpunkan 120 negara membangun dari benua Asia, Afrika serta Amerika Selatan. Apakah pertubuhan tersebut?",
      "options": [
        "Association of Southeast Asia (ASA)",
        "Pertubuhan Kerjasama Islam (OIC)",
        "Pergerakan Negara-negara Berkecuali (NAM)",
        "Pertubuhan Bangsa-Bangsa Bersatu (PBB)"
      ],
      "correctIndex": 2,
      "explanation": "Malaysia menyertai Pergerakan Negara-negara Berkecuali (NAM) sejak tahun 1970, yang dianggotai oleh 120 negara membangun dari Asia, Afrika dan Amerika Selatan.",
      "ref": "Unit 10, m/s 163"
    },
    {
      "id": "d6_sej_u10_s1_08",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "M",
      "q": "Walaupun Malaysia mengamalkan dasar berbaik-baik dengan negara luar, dengan negara manakah Malaysia tidak menjalin hubungan diplomatik?",
      "options": [
        "Mozambique dan Rwanda",
        "Austria dan Arab Saudi",
        "Israel dan Korea Utara",
        "Kemboja dan Myanmar"
      ],
      "correctIndex": 2,
      "explanation": "Malaysia memilih untuk tidak mengadakan sebarang hubungan diplomatik dengan negara Israel dan Korea Utara.",
      "ref": "Unit 10, m/s 162"
    },
    {
      "id": "d6_sej_u10_s1_09",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "H",
      "q": "Seorang murid mengelompokkan OIC, NAM dan PBB bersama SEAFET di bawah kategori pertubuhan antarabangsa. Mengapakah pengelompokan tersebut kurang tepat?",
      "options": [
        "PBB hanya terbuka kepada negara bekas jajahan British seperti Komanwel",
        "NAM sepatutnya digolongkan sebagai pertubuhan serantau bagi negara Asia sahaja",
        "OIC tidak wajar dimasukkan kerana hanya disertai negara di Asia Tenggara",
        "SEAFET merupakan pakatan negara berjiran di rantau ini, bukan pertubuhan antarabangsa"
      ],
      "correctIndex": 3,
      "explanation": "SEAFET ialah pertubuhan serantau yang disertai oleh negara berjiran (Persekutuan Tanah Melayu, Thailand dan Filipina), manakala OIC, NAM dan PBB ialah pertubuhan antarabangsa.",
      "ref": "Unit 10, m/s 162-163"
    },
    {
      "id": "d6_sej_u10_s1_10",
      "unit": "u10",
      "skill": "u10_s1",
      "diff": "H",
      "q": "Berdasarkan pelibatan Malaysia dalam pelbagai pertubuhan luar sejak tahun 1957, apakah matlamat jangka panjang di sebalik dasar luar negara kita?",
      "options": [
        "Memelihara keselamatan negara, kemakmuran ekonomi serta keharmonian rakyat",
        "Menggantikan peranan pertubuhan antarabangsa dengan pakatan serantau tunggal",
        "Menyeragamkan sistem pentadbiran tempatan mengikut model negara maju",
        "Membatasi hubungan perdagangan hanya dengan negara jiran di Asia Tenggara"
      ],
      "correctIndex": 0,
      "explanation": "Malaysia menjalinkan hubungan baik melalui pertubuhan serantau dan antarabangsa demi menjamin keselamatan, memupuk keharmonian rakyat dan meningkatkan kemakmuran negara.",
      "ref": "Unit 10, m/s 160, 162-163"
    },
    {
      "id": "d6_sej_u10_s2_01",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "L",
      "q": "Di bandar manakah terletaknya pusat pentadbiran atau ibu pejabat ASEAN?",
      "options": [
        "Kuala Lumpur, Malaysia",
        "Bangkok, Thailand",
        "Jakarta, Indonesia",
        "Manila, Filipina"
      ],
      "correctIndex": 2,
      "explanation": "Ibu pejabat bagi ASEAN ditempatkan di Jakarta, Indonesia.",
      "ref": "Unit 10, m/s 164"
    },
    {
      "id": "d6_sej_u10_s2_02",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "L",
      "q": "Bilakah tarikh rasmi penubuhan ASEAN dan berapakah jumlah negara anggotanya pada masa kini?",
      "options": [
        "11 Disember 1931 dengan 5 negara anggota",
        "24 Oktober 1945 dengan 54 negara anggota",
        "8 Ogos 1967 dengan 10 negara anggota",
        "25 September 1969 dengan 57 negara anggota"
      ],
      "correctIndex": 2,
      "explanation": "ASEAN ditubuhkan pada 8 Ogos 1967 dan kini menghimpunkan 10 buah negara di rantau Asia Tenggara.",
      "ref": "Unit 10, m/s 164"
    },
    {
      "id": "d6_sej_u10_s2_03",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "L",
      "q": "Pada logo rasmi ASEAN, apakah lambang yang dibawa oleh warna biru dan warna kuning masing-masing?",
      "options": [
        "Perpaduan serta impian negara pengasas",
        "Keamanan dan kestabilan serta kemakmuran",
        "Semangat dinamisme serta kesatuan serantau",
        "Kesucian serta semangat yang membara"
      ],
      "correctIndex": 1,
      "explanation": "Warna biru pada logo ASEAN membawa erti keamanan dan kestabilan, manakala warna kuning melambangkan kemakmuran.",
      "ref": "Unit 10, m/s 165"
    },
    {
      "id": "d6_sej_u10_s2_04",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "L",
      "q": "Apakah maksud ikatan sepuluh tangkai padi yang terpampang di tengah logo ASEAN?",
      "options": [
        "Sepuluh perjanjian perdagangan bebas yang telah dimeterai bersama kuasa besar",
        "Kejayaan negara anggota mengeluarkan hasil pertanian sebagai sumber ekonomi utama",
        "Aspirasi penubuhan ASEAN yang disatukan oleh persahabatan dan perpaduan sepuluh ahli",
        "Sepuluh tahun tempoh perancangan untuk mewujudkan kestabilan politik serantau"
      ],
      "correctIndex": 2,
      "explanation": "Sepuluh tangkai padi melambangkan impian pengasasan ASEAN yang diikat oleh semangat persahabatan serta perpaduan sepuluh negara anggotanya.",
      "ref": "Unit 10, m/s 165"
    },
    {
      "id": "d6_sej_u10_s2_05",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "L",
      "q": "Manakah antara berikut bukan matlamat penubuhan ASEAN?",
      "options": [
        "Mengeratkan kerjasama latihan, penyelidikan dan meninggikan taraf hidup",
        "Memastikan keamanan serta kestabilan politik rantau terpelihara",
        "Menubuhkan pasukan ketenteraan bersama untuk menyerang negara luar",
        "Memacu pertumbuhan ekonomi, sosial serta pembangunan budaya"
      ],
      "correctIndex": 2,
      "explanation": "ASEAN ditubuhkan untuk memupuk keamanan, ekonomi, sosial, budaya, latihan serta penyelidikan bagi meningkatkan taraf hidup penduduk, bukan untuk membentuk pakatan perang.",
      "ref": "Unit 10, m/s 164"
    },
    {
      "id": "d6_sej_u10_s2_06",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "M",
      "q": "Apakah dua projek atau pusat kerjasama yang dibangunkan di Malaysia hasil penyertaan dalam ASEAN?",
      "options": [
        "Penubuhan UIAM di Selangor dan pembinaan ibu pejabat PBB",
        "Projek perindustrian baja urea di Bintulu serta pusat RECSAM di Pulau Pinang",
        "Penganjuran Sukan Komanwel dan penubuhan Bank Pembangunan Islam",
        "Pembinaan ibu pejabat Sekretariat ASEAN di Kuala Lumpur dan zon bebas cukai"
      ],
      "correctIndex": 1,
      "explanation": "Melalui ASEAN, Malaysia meraih kerjasama projek perindustrian baja urea di Bintulu, Sarawak serta pembinaan pusat RECSAM di Pulau Pinang bagi bidang pendidikan sains dan matematik.",
      "ref": "Unit 10, m/s 165"
    },
    {
      "id": "d6_sej_u10_s2_07",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "M",
      "q": "Apakah tujuan utama Deklarasi Kuala Lumpur 1971 yang mengisytiharkan ASEAN sebagai Kawasan Aman, Bebas dan Berkecuali (ZOPFAN)?",
      "options": [
        "Menghalang campur tangan kuasa luar demi mengekalkan kestabilan serantau",
        "Menyeragamkan kurikulum pendidikan sains dan matematik di sekolah",
        "Membuka pasaran barangan tempatan ke negara bekas jajahan British",
        "Menyatukan pentadbiran semua negara anggota di bawah satu parlimen"
      ],
      "correctIndex": 0,
      "explanation": "Pengisytiharan ZOPFAN menerusi Deklarasi Kuala Lumpur 1971 bertujuan mengelakkan campur tangan kuasa asing bagi menjamin keamanan dan kestabilan politik ASEAN.",
      "ref": "Unit 10, m/s 165"
    },
    {
      "id": "d6_sej_u10_s2_08",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "M",
      "q": "Selain lima negara pengasas asal, negara manakah yang menyertai ASEAN sebagai anggota baharu pada peringkat lebih kemudian?",
      "options": [
        "Indonesia, Brunei, Laos, Singapura dan Kemboja",
        "Brunei, Vietnam, Laos, Myanmar dan Kemboja",
        "Kemboja, Laos, Malaysia, Myanmar dan Vietnam",
        "Vietnam, Thailand, Filipina, Myanmar dan Brunei"
      ],
      "correctIndex": 1,
      "explanation": "Anggota baharu yang menyertai ASEAN selepas lima pengasas asal ialah Brunei (1984), Vietnam (1995), Laos dan Myanmar (1997) serta Kemboja (1999).",
      "ref": "Unit 10, m/s 164"
    },
    {
      "id": "d6_sej_u10_s2_09",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "H",
      "q": "Antara pasangan tindakan berikut, manakah yang tepat menggambarkan sumbangan Malaysia kepada ASEAN dan bukannya faedah yang diterima?",
      "options": [
        "Menjadi hos Mesyuarat Menteri-Menteri Luar ASEAN dan menyertai SEAMEO",
        "Pembinaan pusat RECSAM di Pulau Pinang dan penganjuran Sukan SEA",
        "Pembangunan kilang baja urea di Bintulu dan pengisytiharan ZOPFAN",
        "Mendapat pinjaman pembangunan serta peluang melanjutkan pengajian tinggi"
      ],
      "correctIndex": 0,
      "explanation": "Menjadi tuan rumah Mesyuarat Menteri-Menteri Luar ASEAN dan menyertai SEAMEO merupakan sumbangan Malaysia, manakala RECSAM, Sukan SEA dan projek baja urea di Bintulu dikategorikan sebagai faedah penyertaan.",
      "ref": "Unit 10, m/s 165"
    },
    {
      "id": "d6_sej_u10_s2_10",
      "unit": "u10",
      "skill": "u10_s2",
      "diff": "H",
      "q": "Bagaimanakah penglibatan Malaysia dalam isu pencerobohan Vietnam terhadap Kemboja dan konflik di selatan Filipina mencerminkan matlamat ASEAN?",
      "options": [
        "Menunjukkan Malaysia berhasrat mengawal dasar dalam negeri negara jiran",
        "Membuktikan keupayaan Malaysia memainkan peranan aktif menjaga keamanan serantau",
        "Menggalakkan negara anggota bergantung kepada bantuan ketenteraan kuasa besar",
        "Memastikan projek perindustrian serantau hanya dijalankan di kawasan bergolak"
      ],
      "correctIndex": 1,
      "explanation": "Usaha Malaysia membantu menangani isu Kemboja dan meredakan konflik politik di selatan Filipina merupakan sumbangan diplomatik ke arah menjamin keamanan serta kestabilan politik ASEAN.",
      "ref": "Unit 10, m/s 164-165"
    },
    {
      "id": "d6_sej_u10_s3_01",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "L",
      "q": "Di manakah letaknya ibu pejabat Sekretariat Komanwel?",
      "options": [
        "Vienna, Austria",
        "Jeddah, Arab Saudi",
        "New York, Amerika Syarikat",
        "London, England"
      ],
      "correctIndex": 3,
      "explanation": "Pusat pentadbiran atau ibu pejabat Sekretariat Komanwel terletak di London, England.",
      "ref": "Unit 10, m/s 166"
    },
    {
      "id": "d6_sej_u10_s3_02",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "L",
      "q": "Walaupun majoriti ahli Komanwel ialah bekas tanah jajahan British, manakah dua negara anggota yang menjadi pengecualian?",
      "options": [
        "Brunei dan Kemboja",
        "Afrika Selatan dan Namibia",
        "Bosnia dan Herzegovina serta Lubnan",
        "Mozambique dan Republik Rwanda"
      ],
      "correctIndex": 3,
      "explanation": "Daripada 54 negara anggota Komanwel, hampir semuanya bekas tanah jajahan British kecuali Mozambique dan Republik Rwanda.",
      "ref": "Unit 10, m/s 166"
    },
    {
      "id": "d6_sej_u10_s3_03",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "L",
      "q": "Siapakah pemimpin Malaysia yang telah diberi kepercayaan menjadi Setiausaha Agung OIC yang pertama?",
      "options": [
        "Datuk Dr. Mazlan Othman",
        "Tunku Abdul Rahman Putra Al-Haj",
        "Tan Sri Razali Ismail",
        "Tun Dr. Mahathir Mohamad"
      ],
      "correctIndex": 1,
      "explanation": "Perdana Menteri Malaysia pertama, Tunku Abdul Rahman Putra Al-Haj, telah dilantik memegang jawatan Setiausaha Agung OIC yang sulung.",
      "ref": "Unit 10, m/s 168"
    },
    {
      "id": "d6_sej_u10_s3_04",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "L",
      "q": "Apakah tiga bahasa rasmi yang digunakan dalam urusan Pertubuhan Kerjasama Islam (OIC)?",
      "options": [
        "Bahasa Arab, Sepanyol dan Mandarin",
        "Bahasa Inggeris, Rusia dan Perancis",
        "Bahasa Melayu, Arab dan Inggeris",
        "Bahasa Arab, Inggeris dan Perancis"
      ],
      "correctIndex": 3,
      "explanation": "Tiga bahasa rasmi OIC ialah bahasa Arab, bahasa Inggeris dan bahasa Perancis, manakala pejabatnya berpusat di Jeddah, Arab Saudi.",
      "ref": "Unit 10, m/s 168"
    },
    {
      "id": "d6_sej_u10_s3_05",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "L",
      "q": "Apakah peluang yang diperoleh oleh golongan pelajar serta belia Malaysia melalui penyertaan dalam Komanwel?",
      "options": [
        "Mengetuai perhimpunan agung tahunan di New York",
        "Mendapat pinjaman kewangan terus daripada Bank Pembangunan Islam",
        "Memohon biasiswa pengajian tinggi dan menyertai persidangan belia",
        "Menyertai pasukan pemerhati di sempadan negara luar"
      ],
      "correctIndex": 2,
      "explanation": "Penyertaan dalam Komanwel membuka peluang kepada rakyat melanjutkan pengajian tinggi menerusi biasiswa Komanwel serta menghantar belia ke persidangan belia anjuran Sekretariat Komanwel.",
      "ref": "Unit 10, m/s 167"
    },
    {
      "id": "d6_sej_u10_s3_06",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "M",
      "q": "Pada tahun 1989, Malaysia menjadi tuan rumah mesyuarat CHOGM dan mengisytiharkan Deklarasi Langkawi. Apakah fokus utama deklarasi tersebut?",
      "options": [
        "Pemeliharaan dan isu berkaitan dengan alam sekitar",
        "Penyelarasan tarikh penganjuran Sukan Komanwel di Kuala Lumpur",
        "Penubuhan zon bebas senjata nuklear di Asia Tenggara",
        "Penubuhan universiti Islam bertaraf antarabangsa di Malaysia"
      ],
      "correctIndex": 0,
      "explanation": "Deklarasi Langkawi 1989 yang diisytiharkan semasa Malaysia menganjurkan CHOGM menumpukan kepada isu penjagaan alam sekitar.",
      "ref": "Unit 10, m/s 167"
    },
    {
      "id": "d6_sej_u10_s3_07",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "M",
      "q": "Mengapakah Malaysia lantang mengecam dasar Aparteid di Afrika Selatan melalui platform Komanwel?",
      "options": [
        "Dasar itu menyekat penggunaan bahasa Inggeris di sekolah kebangsaan",
        "Dasar itu menindas dan membezakan penduduk berasaskan warna kulit",
        "Dasar itu menaikkan cukai eksport produk pertanian Malaysia ke Eropah",
        "Dasar itu menghalang kemasukan negara Afrika ke dalam ASEAN"
      ],
      "correctIndex": 1,
      "explanation": "Dasar Aparteid membezakan layanan terhadap penduduk berdasarkan warna kulit. Desakan bersama Malaysia dan negara Komanwel membantu menamatkannya pada tahun 1993.",
      "ref": "Unit 10, m/s 167"
    },
    {
      "id": "d6_sej_u10_s3_08",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "M",
      "q": "Bagaimanakah Malaysia menyumbang kepada bidang kewangan dan pendidikan dalam kalangan negara anggota OIC?",
      "options": [
        "Menubuhkan Sekretariat Komanwel di London dan menganjurkan Sukan Komanwel",
        "Membantu menubuhkan Bank Pembangunan Islam (1975) serta UIAM (1983)",
        "Menghantar pasukan pengaman ke Congo pada tahun 1961 dan Namibia pada 1989",
        "Membina pusat latihan RECSAM pada tahun 1971 dan kilang baja urea di Sarawak"
      ],
      "correctIndex": 1,
      "explanation": "Malaysia membantu penubuhan Bank Pembangunan Islam pada tahun 1975 serta menubuhkan Universiti Islam Antarabangsa Malaysia (UIAM) pada tahun 1983, di samping menerima bantuan pinjaman dan biasiswa.",
      "ref": "Unit 10, m/s 169"
    },
    {
      "id": "d6_sej_u10_s3_09",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "H",
      "q": "Manakah antara senarai berikut menghimpunkan sumbangan Malaysia khusus dalam pertubuhan OIC sahaja?",
      "options": [
        "Mengutarakan konsep ZOPFAN, meredakan konflik selatan Filipina dan menyertai SEAMEO",
        "Menangani isu Bosnia dan Herzegovina, menyokong rakyat Palestin dan menganjurkan Persidangan OIC 1974 serta 2003",
        "Mengisytiharkan Deklarasi Langkawi, menjadi tuan rumah CHOGM 1989 dan menentang dasar Aparteid",
        "Menjadi tuan rumah Sukan Komanwel 1998, menubuhkan UIAM dan menghantar pengaman ke Lubnan"
      ],
      "correctIndex": 1,
      "explanation": "Menangani isu Bosnia dan Herzegovina (1991), menyokong penuh perjuangan rakyat Palestin serta menganjurkan Persidangan OIC pada tahun 1974 dan 2003 ialah sumbangan Malaysia dalam OIC.",
      "ref": "Unit 10, m/s 167, 169"
    },
    {
      "id": "d6_sej_u10_s3_10",
      "unit": "u10",
      "skill": "u10_s3",
      "diff": "H",
      "q": "Bagaimanakah kerjasama bidang perdagangan dan kesihatan dalam Komanwel memberi manfaat nyata kepada rakyat Malaysia?",
      "options": [
        "Menghadkan penjualan barangan buatan tempatan hanya kepada negara bekas jajahan British",
        "Mewajibkan negara anggota menghantar doktor tempatan berkhidmat secara tetap di England",
        "Meluaskan pasaran eksport Malaysia dan membolehkan perkongsian data bagi menangani wabak seperti COVID-19",
        "Menggantikan semua undang-undang perdagangan negara dengan peraturan Sekretariat Komanwel"
      ],
      "correctIndex": 2,
      "explanation": "Dalam Komanwel, barangan Malaysia lebih mudah menembusi pasaran antarabangsa khususnya negara anggota, manakala kerjasama kesihatan membolehkan perkongsian maklumat dan data untuk melawan wabak seperti COVID-19.",
      "ref": "Unit 10, m/s 167"
    },
    {
      "id": "d6_sej_u10_s4_01",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "L",
      "q": "Bilakah Pertubuhan Bangsa-Bangsa Bersatu (PBB) ditubuhkan dan di manakah lokasi ibu pejabatnya?",
      "options": [
        "25 September 1969 di Jeddah, Arab Saudi",
        "8 Ogos 1967 di Jakarta, Indonesia",
        "11 Disember 1931 di London, England",
        "24 Oktober 1945 di New York, Amerika Syarikat"
      ],
      "correctIndex": 3,
      "explanation": "PBB ditubuhkan pada 24 Oktober 1945 selepas berakhirnya Perang Dunia Kedua dan beribu pejabat di New York, Amerika Syarikat.",
      "ref": "Unit 10, m/s 170"
    },
    {
      "id": "d6_sej_u10_s4_02",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "L",
      "q": "Manakah antara bahasa berikut termasuk dalam enam bahasa rasmi yang digunakan oleh PBB?",
      "options": [
        "Melayu, Arab dan Inggeris",
        "Jepun, Perancis dan Sepanyol",
        "Mandarin, Rusia dan Sepanyol",
        "Jerman, Mandarin dan Rusia"
      ],
      "correctIndex": 2,
      "explanation": "Enam bahasa rasmi PBB ialah bahasa Arab, Mandarin, Inggeris, Perancis, Rusia dan Sepanyol.",
      "ref": "Unit 10, m/s 170"
    },
    {
      "id": "d6_sej_u10_s4_03",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "L",
      "q": "Apakah jawatan penting PBB yang pernah disandang oleh Datuk Dr. Mazlan Othman?",
      "options": [
        "Pengerusi Perhimpunan Agung PBB sesi ke-51",
        "Pengarah Hal Ehwal Angkasa Lepas PBB",
        "Setiausaha Agung Pertubuhan Kerjasama Islam",
        "Presiden Persidangan Antarabangsa Dadah"
      ],
      "correctIndex": 1,
      "explanation": "Datuk Dr. Mazlan Othman mendapat pengiktirafan apabila dilantik sebagai Pengarah Hal Ehwal Angkasa Lepas PBB (1999-2002 dan 2007) untuk melaporkan aktiviti angkasa lepas kepada anggota PBB.",
      "ref": "Unit 10, m/s 172"
    },
    {
      "id": "d6_sej_u10_s4_04",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "L",
      "q": "Apakah bidang kerjasama utama agensi khas PBB iaitu UNESCO bagi mempromosikan keamanan dunia?",
      "options": [
        "Sukan, belia dan pertanian serantau",
        "Kewangan, perbankan Islam dan pelaburan",
        "Pertahanan, perkapalan dan perdagangan bebas",
        "Pendidikan, sains dan budaya"
      ],
      "correctIndex": 3,
      "explanation": "UNESCO ialah agensi khas PBB yang memupuk keamanan dunia menerusi kerjasama antarabangsa dalam bidang pendidikan, sains dan budaya.",
      "ref": "Unit 10, m/s 171"
    },
    {
      "id": "d6_sej_u10_s4_05",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "L",
      "q": "Manakah lokasi di Malaysia yang diiktiraf sebagai Tapak Warisan Dunia UNESCO Kategori Alam Semula Jadi pada tahun 2000?",
      "options": [
        "Warisan Arkeologi Lembah Lenggong, Perak",
        "Bandar Bersejarah Melaka dan George Town",
        "Kota A Famosa dan Dewan Bandaraya Pulau Pinang",
        "Taman Negara Gunung Mulu dan Taman Kinabalu"
      ],
      "correctIndex": 3,
      "explanation": "Taman Negara Gunung Mulu di Sarawak dan Taman Kinabalu di Sabah telah diiktiraf sebagai Tapak Warisan Dunia Kategori Alam Semula Jadi pada tahun 2000.",
      "ref": "Unit 10, m/s 173"
    },
    {
      "id": "d6_sej_u10_s4_06",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "M",
      "q": "Apakah bentuk pengiktirafan yang diterima oleh anggota Pasukan Pengaman PBB dari Malaysia atas khidmat cemerlang mereka di luar negara?",
      "options": [
        "Pemberian biasiswa pendidikan daripada Sekretariat Komanwel",
        "Penyenaraian kem tentera dalam Daftar Memori Dunia",
        "Penganugerahan sijil dan pingat perkhidmatan PBB",
        "Pelantikan tetap dalam Majlis Keselamatan PBB"
      ],
      "correctIndex": 2,
      "explanation": "Pasukan Pengaman PBB Malaysia yang bertugas di negara seperti Congo, Namibia, Somalia, Bosnia dan Herzegovina serta Lubnan diiktiraf dengan pemberian sijil dan pingat perkhidmatan PBB.",
      "ref": "Unit 10, m/s 171-172"
    },
    {
      "id": "d6_sej_u10_s4_07",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "M",
      "q": "Apakah pencapaian Malaysia ketika mendesak usaha antarabangsa memerangi gejala penyalahgunaan dadah melalui PBB?",
      "options": [
        "Mewajibkan kesemua negara ahli PBB mengharamkan ubat-ubatan moden mulai tahun 1987",
        "Mendorong Persidangan Antarabangsa Dadah di Vienna dengan Tun Dr. Mahathir Mohamad sebagai Presiden",
        "Menjadikan Kuala Lumpur sebagai ibu pejabat kekal agensi antidadah antarabangsa",
        "Menubuhkan pasukan pemerhati dadah di sempadan Iran-Iraq pada tahun 1990"
      ],
      "correctIndex": 1,
      "explanation": "Desakan Malaysia mendorong penganjuran Persidangan Antarabangsa Dadah di Vienna, Austria pada Jun 1987, di mana Perdana Menteri keempat Tun Dr. Mahathir Mohamad dilantik sebagai Presiden persidangan.",
      "ref": "Unit 10, m/s 171"
    },
    {
      "id": "d6_sej_u10_s4_08",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "M",
      "q": "Mengapakah nama Tan Sri Razali Ismail tercatat dalam sejarah pengiktirafan PBB kepada warganegara Malaysia?",
      "options": [
        "Beliau pernah menjadi Pengerusi Majlis Keselamatan PBB dan Pengerusi Perhimpunan Agung PBB sesi ke-51",
        "Beliau mengetuai Lembaga Eksekutif UNESCO pada tahun 2017",
        "Beliau mengetuai misi pengaman Malaysia pertama ke Congo dan Somalia",
        "Beliau melaporkan aktiviti angkasa lepas kepada negara anggota PBB"
      ],
      "correctIndex": 0,
      "explanation": "Tan Sri Razali Ismail diiktiraf atas peranan beliau sebagai Pengerusi Majlis Keselamatan PBB (1989-1990) dan Pengerusi Perhimpunan Agung PBB sesi ke-51.",
      "ref": "Unit 10, m/s 172"
    },
    {
      "id": "d6_sej_u10_s4_09",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "H",
      "q": "Manakah padanan item dan kategori pengiktirafan UNESCO yang tepat kesemuanya?",
      "options": [
        "Tapak Warisan Dunia Kategori Alam Semula Jadi: Lembah Lenggong dan George Town",
        "Tapak Warisan Dunia Kategori Kebudayaan: Batu Bersurat Terengganu dan Hikayat Hang Tuah",
        "Daftar Warisan Budaya Tidak Ketara Kemanusiaan: Makyung, Dondang Sayang, Silat dan Wangkang",
        "Daftar Memori Dunia: Makyung, Silat dan Dondang Sayang"
      ],
      "correctIndex": 2,
      "explanation": "Makyung (2005), Dondang Sayang (2018), Silat (2019) dan Wangkang (2020) tergolong dalam Daftar Warisan Budaya Tidak Ketara Kemanusiaan, manakala manuskrip dan batu bersurat berada dalam Daftar Memori Dunia serta tapak bersejarah dalam kategori kebudayaan.",
      "ref": "Unit 10, m/s 173"
    },
    {
      "id": "d6_sej_u10_s4_10",
      "unit": "u10",
      "skill": "u10_s4",
      "diff": "H",
      "q": "Bagaimanakah penyertaan Malaysia dalam Majlis Keselamatan PBB serta UNESCO membantu memelihara imej negara di persada global?",
      "options": [
        "Malaysia menggunakan kuasa pembatal tetap dalam PBB untuk menggubal undang-undang antarabangsa secara bersendirian",
        "Malaysia menyumbang sebagai ahli tidak tetap Majlis Keselamatan, memperjuangkan penyelesaian adil isu Palestin serta prinsip Pendidikan untuk Semua",
        "Malaysia hanya menyokong negara serantau Asia Tenggara dan mengabaikan konflik di benua lain",
        "Malaysia mengutamakan bantuan kewangan ketenteraan berbanding rundingan damai dalam setiap krisis dunia"
      ],
      "correctIndex": 1,
      "explanation": "Malaysia menunjukkan kewibawaan melalui pelantikan sebagai ahli tidak tetap Majlis Keselamatan PBB (termasuk 2015-2016), membela hak rakyat Palestin, menghantar pasukan pengaman serta memperjuangkan Pendidikan untuk Semua dalam UNESCO.",
      "ref": "Unit 10, m/s 170-171"
    }
  ];
})(window);
