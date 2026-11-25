/**
 * Darjah 6 Bahasa Melayu variant question pool (KSSR Semakan 2017, Tema 1-9 / Unit 1-27).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, short explanation, and textbook/DSKP ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  App.Pools.d6.bm = [
    {
      "id": "d6_bm_t1_s1_01",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "L",
      "q": "Pilih ayat yang menggunakan kata nama am dan kata nama khas dengan betulnya.",
      "options": [
        "Pak Cik razak membelikan datuk sebuah telefon pintar jenama Suria sempena Hari Bapa.",
        "Pak cik Razak membelikan Datuk sebuah Telefon Pintar jenama Suria sempena Hari Bapa.",
        "Pak Cik Razak membelikan datuk sebuah telefon pintar jenama suria sempena hari bapa.",
        "Pak Cik Razak membelikan datuk sebuah telefon pintar jenama Suria sempena Hari Bapa."
      ],
      "correctIndex": 3,
      "explanation": "'Pak Cik Razak', 'Suria' dan 'Hari Bapa' ialah kata nama khas yang mesti berhuruf besar, manakala 'datuk' dan 'telefon pintar' ialah kata nama am yang berhuruf kecil.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_bm_t1_s1_02",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "L",
      "q": "Datuk Haji Mansor menerima Anugerah Tokoh Warga Emas peringkat daerah pada tahun ini. _____ sentiasa menjadi sumber inspirasi kepada seluruh ahli keluarga kami.",
      "options": [
        "Baginda",
        "Beliau",
        "Mereka",
        "Kalian"
      ],
      "correctIndex": 1,
      "explanation": "'Beliau' ialah kata ganti nama diri ketiga tunggal yang digunakan untuk orang yang dihormati seperti Datuk Haji Mansor.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_bm_t1_s1_03",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "L",
      "q": "Keluarga Amirul menyewa _____ calet kayu yang menghadap ke dusun durian milik Pak Long Hamid.",
      "options": [
        "sekeping",
        "sebidang",
        "sebatang",
        "sebuah"
      ],
      "correctIndex": 3,
      "explanation": "Penjodoh bilangan 'buah' digunakan untuk bangunan atau binaan seperti calet dan rumah.",
      "ref": "Unit 2, m/s 11"
    },
    {
      "id": "d6_bm_t1_s1_04",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "L",
      "q": "Ayah menggunakan _____ pisau lipat untuk memotong buah mangga yang baru dipetik di kebun datuk.",
      "options": [
        "sebatang",
        "sekeping",
        "sebuah",
        "sebilah"
      ],
      "correctIndex": 3,
      "explanation": "Penjodoh bilangan 'bilah' digunakan untuk benda yang tajam dan runcing seperti pisau, parang dan gunting.",
      "ref": "Unit 2, m/s 11"
    },
    {
      "id": "d6_bm_t1_s1_05",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "L",
      "q": "\"_____ yang telah menyusun album foto keluarga di atas meja ruang tamu itu?\" tanya ibu kepada kakak.",
      "options": [
        "Bagaimanakah",
        "Siapakah",
        "Bilakah",
        "Apakah"
      ],
      "correctIndex": 1,
      "explanation": "Kata ganti nama tanya 'Siapakah' digunakan untuk menanyakan orang.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_bm_t1_s1_06",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "M",
      "q": "\"Ayah, biarlah _____ berdua sahaja yang mengemas bengkel pertukangan ini sementara ayah berehat,\" kata Faris dan adiknya kepada Encik Roslan.",
      "options": [
        "mereka",
        "kalian",
        "kita",
        "kami"
      ],
      "correctIndex": 3,
      "explanation": "'Kami' ialah kata ganti nama diri pertama jamak yang tidak menyertakan orang yang diajak bercakap (ayah).",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_bm_t1_s1_07",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "M",
      "q": "Kakak menghadiahkan _____ bunga mawar dan _____ poskad ucapan kepada ibu bersempena dengan sambutan Hari Ibu.",
      "options": [
        "sebatang ... selembar",
        "serumpun ... sebidang",
        "sejambak ... sekeping",
        "sehelai ... sebuah"
      ],
      "correctIndex": 2,
      "explanation": "'Sejambak' sesuai untuk bunga yang digubah atau dikumpul bersama, manakala 'sekeping' digunakan untuk benda pipih seperti poskad.",
      "ref": "Pengayaan, m/s 20"
    },
    {
      "id": "d6_bm_t1_s1_08",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "M",
      "q": "\"Cuba lihat calet di seberang sungai _____! Di situlah keluarga kita pernah menginap dua tahun lalu,\" kata abang sambil menuding jari ke arah bangunan kayu itu.",
      "options": [
        "itu",
        "sini",
        "ini",
        "mana"
      ],
      "correctIndex": 0,
      "explanation": "Kata ganti nama tunjuk umum 'itu' digunakan untuk menunjukkan benda atau tempat yang jauh daripada penutur.",
      "ref": "Unit 1, m/s 6"
    },
    {
      "id": "d6_bm_t1_s1_09",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan kata nama am, kata nama khas dan kata ganti nama dengan betulnya.",
      "options": [
        "\"Ibu, kami berdua telah membelikan sehelai selendang sutera buat nenek sempena Hari Ibu,\" kata Danish dan adiknya kepada Puan Liza.",
        "\"Ibu, kami berdua telah membelikan sekeping selendang sutera buat nenek sempena hari ibu,\" kata Danish dan adiknya kepada Puan Liza.",
        "\"Ibu, mereka berdua telah membelikan sehelai selendang sutera buat nenek sempena Hari Ibu,\" kata Danish dan adiknya kepada Puan Liza.",
        "\"Ibu, kita berdua telah membelikan sehelai selendang Sutera buat Nenek sempena Hari Ibu,\" kata Danish dan adiknya kepada Puan Liza."
      ],
      "correctIndex": 0,
      "explanation": "Dalam pilihan pertama, 'kami' tepat kerana tidak melibatkan ibu, 'sehelai' tepat untuk selendang, 'nenek' dan 'selendang sutera' ditulis dengan huruf kecil, serta 'Hari Ibu' ditulis dengan huruf besar.",
      "ref": "Unit 1, m/s 6 & Pengayaan, m/s 20"
    },
    {
      "id": "d6_bm_t1_s1_10",
      "unit": "t1",
      "skill": "t1_s1",
      "diff": "H",
      "q": "Pilih ayat yang mempunyai kesalahan penggunaan penjodoh bilangan.",
      "options": [
        "Abang membeli tiga helai baju sejuk sebelum bertolak ke Tanah Tinggi Cameron.",
        "Kakak meletakkan dua buah gambar percutian keluarga di dalam album baharu.",
        "Nenek menghidangkan beberapa potong kuih bingka kepada tetamu yang baru tiba.",
        "Ayah memetik beberapa biji buah strawberi yang masak ranum di kebun itu."
      ],
      "correctIndex": 1,
      "explanation": "Gambar ialah benda yang nipis dan pipih, maka penjodoh bilangan yang tepat ialah 'keping' ('dua keping gambar'), bukannya 'buah'.",
      "ref": "Unit 2, m/s 11 & Pengayaan, m/s 20"
    },
    {
      "id": "d6_bm_t1_s2_01",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "L",
      "q": "Semasa melancong ke luar negara, keluarga Haikal tidak melepaskan peluang untuk _____ pakaian tradisional masyarakat tempatan.",
      "options": [
        "memperagakan",
        "peraga",
        "berperaga",
        "diperagakan"
      ],
      "correctIndex": 0,
      "explanation": "Kata kerja transitif aktif 'memperagakan' tepat digunakan selepas kata sendi 'untuk' dan diikuti objek 'pakaian tradisional masyarakat tempatan'.",
      "ref": "Unit 2, m/s 12"
    },
    {
      "id": "d6_bm_t1_s2_02",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "L",
      "q": "Datuk dan nenek _____ gembira apabila melihat semua anak cucu pulang berkumpul pada hujung minggu.",
      "options": [
        "menghidangkan",
        "menyambut",
        "tersenyum",
        "meraikan"
      ],
      "correctIndex": 2,
      "explanation": "'Tersenyum' ialah kata kerja tak transitif tanpa pelengkap yang tidak memerlukan objek kata nama selepasnya.",
      "ref": "Unit 3, m/s 18"
    },
    {
      "id": "d6_bm_t1_s2_03",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "L",
      "q": "Mak usu yang _____ dari negara Jepun itu kini semakin fasih bertutur dalam bahasa Melayu.",
      "options": [
        "berbual",
        "berasal",
        "bertandang",
        "tinggal"
      ],
      "correctIndex": 1,
      "explanation": "Kata kerja tak transitif berpelengkap 'berasal' berpasangan dengan frasa sendi nama 'dari negara Jepun' untuk menyatakan tempat asal.",
      "ref": "Unit 3, m/s 18"
    },
    {
      "id": "d6_bm_t1_s2_04",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "L",
      "q": "Ayat manakah yang mengandungi kata kerja transitif?",
      "options": [
        "Pak long baru tiba dari Johor Bahru sebentar tadi.",
        "Adik sedang tidur nyenyak di atas sofa ruang tamu.",
        "Ibu merakamkan detik indah keluarga kami di tepi pantai.",
        "Mereka berbual-bual di beranda rumah hingga waktu petang."
      ],
      "correctIndex": 2,
      "explanation": "'Merakamkan' ialah kata kerja transitif kerana menerima objek langsung 'detik indah keluarga kami' sebagai penyambut.",
      "ref": "Unit 2, m/s 12"
    },
    {
      "id": "d6_bm_t1_s2_05",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "L",
      "q": "Walaupun tinggal di asrama, Shafiq tidak pernah lupa untuk _____ poskad kepada ibunya di kampung pada setiap bulan.",
      "options": [
        "membaca",
        "mengirimkan",
        "menerima",
        "menyimpan"
      ],
      "correctIndex": 1,
      "explanation": "Kata kerja transitif 'mengirimkan' paling sesuai dengan konteks menghantar poskad kepada ibu di kampung.",
      "ref": "Penilaian, m/s 22"
    },
    {
      "id": "d6_bm_t1_s2_06",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "M",
      "q": "Pilih ayat yang mengandungi kata kerja tak transitif berpelengkap.",
      "options": [
        "Kucing peliharaan adik sedang tidur di atas sofa.",
        "Adik menyusun buku cerita di dalam bilik bacaan.",
        "Abang sulung saya menjadi seorang doktor di hospital daerah.",
        "Kakak melipat pakaian yang sudah kering di ruang tamu."
      ],
      "correctIndex": 2,
      "explanation": "'Menjadi' ialah kata kerja tak transitif berpelengkap yang memerlukan frasa nama 'seorang doktor' sebagai pelengkap untuk menyempurnakan maksud ayat (tidak boleh berdiri tanpa pelengkap dan tidak boleh dipasifkan). 'Menyusun' dan 'melipat' ialah kata kerja transitif, manakala 'tidur' ialah kata kerja tak transitif tanpa pelengkap.",
      "ref": "Unit 3, m/s 18"
    },
    {
      "id": "d6_bm_t1_s2_07",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "M",
      "q": "Ayat manakah yang betul penggunaan kata kerja transitifnya?",
      "options": [
        "Nenek menceritakan tentang kisah zaman mudanya kepada cucu-cucu sebelum tidur.",
        "Ibu sedang memasakkan lauk kegemaran ayah di dapur sejak pagi tadi.",
        "Abang amat menyayangi akan adik bongsunya yang baru berusia lima tahun itu.",
        "Nenek menceritakan kisah zaman mudanya kepada cucu-cucu sebelum tidur."
      ],
      "correctIndex": 3,
      "explanation": "Kata kerja transitif mesti diikuti terus oleh objek tanpa kata sendi nama ('tentang' dan 'akan' adalah salah), manakala 'memasakkan' perlu diikuti objek benefaktif ('memasakkan ayah lauk').",
      "ref": "Unit 2, m/s 12"
    },
    {
      "id": "d6_bm_t1_s2_08",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "M",
      "q": "Bersempena dengan sambutan Hari Bapa, Aiman _____ ayahnya seutas jam tangan yang dibeli dengan wang simpanannya.",
      "options": [
        "dihadiahi",
        "dihadiahkan",
        "menghadiahi",
        "menghadiahkan"
      ],
      "correctIndex": 2,
      "explanation": "Imbuhan apitan 'meN-...-i' ('menghadiahi') digunakan apabila kata kerja aktif diikuti terus oleh objek penerima ('ayahnya'), diikuti objek barang ('seutas jam tangan').",
      "ref": "Unit 2, m/s 12 & Pengayaan, m/s 20"
    },
    {
      "id": "d6_bm_t1_s2_09",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "H",
      "q": "Pilih ayat pasif yang paling tepat tatabahasanya.",
      "options": [
        "Hidangan makan malam yang lazat itu telah kami sediakan untuk menyambut kepulangan abang.",
        "Surat khabar yang dibeli oleh ayah pagi tadi telah dibaca oleh saya di ruang tamu.",
        "Gambar kenangan percutian keluarga itu telah kami memuat naik ke dalam album digital.",
        "Baju sejuk yang tebal itu telah dibawa oleh kamu ke Tanah Tinggi Cameron semalam."
      ],
      "correctIndex": 0,
      "explanation": "Ayat pasif kata ganti nama diri pertama ('kami') tidak menerima awalan 'di-' atau 'me-' dan kata bantu 'telah' mendahului pelaku ('telah kami sediakan'). Pilihan lain salah kerana mengekalkan awalan aktif 'me-' ('telah kami memuat naik') serta menggunakan binaan 'di-... oleh' bagi kata ganti nama diri pertama dan kedua ('dibaca oleh saya', 'dibawa oleh kamu').",
      "ref": "Unit 2, m/s 12 & Pengayaan, m/s 20"
    },
    {
      "id": "d6_bm_t1_s2_10",
      "unit": "t1",
      "skill": "t1_s2",
      "diff": "H",
      "q": "Antara ayat berikut, yang manakah menggunakan kata kerja tak transitif dengan betulnya?",
      "options": [
        "Mereka sekeluarga duduk bersila beralaskan tikar mengkuang di beranda rumah.",
        "Keluarga Puan Marina melancong Pulau Pangkor pada cuti penggal yang lalu.",
        "Datuk selalu menasihati agar kami menjaga adab ketika bertandang.",
        "Adik sedang melayari di ruang tamu bersama-sama kakak."
      ],
      "correctIndex": 0,
      "explanation": "'Beralaskan' ialah kata kerja tak transitif berpelengkap yang diikuti pelengkap 'tikar mengkuang', manakala ayat lain tertinggal kata sendi atau objek transitif.",
      "ref": "Unit 3, m/s 18 & Penilaian, m/s 22"
    },
    {
      "id": "d6_bm_t1_s3_01",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "L",
      "q": "Farah seorang anak yang _____ kerana dia selalu menolong ibunya menyapu halaman rumah dan mencuci pinggan tanpa disuruh.",
      "options": [
        "kaki bangku",
        "ringan tulang",
        "tangkai jering",
        "berat mulut"
      ],
      "correctIndex": 1,
      "explanation": "Simpulan bahasa 'ringan tulang' bermaksud rajin bekerja atau suka membantu orang lain.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_bm_t1_s3_02",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "L",
      "q": "Ayah menasihati kami agar mengemas stor rumah dengan bersungguh-sungguh dan tidak melakukan kerja _____.",
      "options": [
        "bagai menatang minyak yang penuh",
        "bagai bulan dipagar bintang",
        "bagai melepaskan batuk di tangga",
        "seperti anjing dengan kucing"
      ],
      "correctIndex": 2,
      "explanation": "Peribahasa 'bagai melepaskan batuk di tangga' bermaksud melakukan sesuatu kerja secara sambil lewa atau tidak bersungguh-sungguh.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_bm_t1_s3_03",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "L",
      "q": "Apakah maksud peribahasa 'bagai menatang minyak yang penuh' dalam konteks penjagaan anak-anak oleh ibu bapa?",
      "options": [
        "Membiarkan anak-anak berdikari tanpa pengawasan orang tua",
        "Mendidik anak-anak dengan hukuman yang keras dan tegas",
        "Memberikan semua kemewahan kebendaan tanpa nasihat dan bimbingan",
        "Memelihara dan menyayangi anak-anak dengan penuh perhatian serta kasih sayang"
      ],
      "correctIndex": 3,
      "explanation": "'Bagai menatang minyak yang penuh' bermaksud menjaga atau memelihara seseorang dengan penuh kasih sayang dan berhati-hati.",
      "ref": "Unit 1, m/s 5 & Pengukuhan, m/s 21"
    },
    {
      "id": "d6_bm_t1_s3_04",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "L",
      "q": "Baca rangkap seloka di bawah ini dengan telitinya.\n\nPergi bercuti membawa peranti,\nDari pagi hingga ke malam hari,\nIndah pemandangan tidak dihiraukan lagi,\nAhli keluarga duduk sepi seorang diri.\n\nApakah teguran yang ingin disampaikan melalui seloka di atas?",
      "options": [
        "Ahli keluarga tidak digalakkan melancong ke tempat yang jauh",
        "Anak-anak perlu membawa telefon bimbit ketika pergi bercuti",
        "Kita tidak patut leka dengan peranti sehingga mengabaikan keluarga ketika bercuti",
        "Penggunaan peranti pintar sangat berguna untuk merakamkan gambar"
      ],
      "correctIndex": 2,
      "explanation": "Seloka tersebut menyindir sikap ahli keluarga yang terlalu asyik dengan peranti sehingga tidak menikmati masa bersama keluarga semasa bercuti.",
      "ref": "Unit 2, m/s 10"
    },
    {
      "id": "d6_bm_t1_s3_05",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "L",
      "q": "Baca rangkap sajak di bawah ini.\n\nAnakku,\nWalau jauh beribu batu merentasi benua,\nKasih ibu umpama pelita yang menyala,\nSentiasa menerangi ruang hatimu.\n\nUngkapan 'umpama pelita yang menyala' dalam sajak di atas bermaksud _____.",
      "options": [
        "kasih sayang ibu tetap teguh dan memberi kekuatan kepada anak walaupun berjauhan",
        "anak perlu pulang ke tanah air sebelum hari bertukar menjadi gelap",
        "ibu berasa sunyi kerana tinggal bersendirian tanpa ahli keluarga",
        "ibu sentiasa memasang lampu di rumah pada setiap malam untuk menunggu anak"
      ],
      "correctIndex": 0,
      "explanation": "'Pelita yang menyala' melambangkan kasih sayang ibu yang berterusan dan memberi semangat kepada anaknya di perantauan.",
      "ref": "Unit 3, m/s 17"
    },
    {
      "id": "d6_bm_t1_s3_06",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "M",
      "q": "Setiap ahli keluarga Encik Roslan berganding bahu membersihkan kawasan rumah pusaka datuk sebelum majlis kenduri bermula. Situasi ini bertepatan dengan peribahasa _____.",
      "options": [
        "seperti isi dengan kuku",
        "seperti kacang lupakan kulit",
        "berat sama dipikul, ringan sama dijinjing",
        "air dicincang tidak akan putus"
      ],
      "correctIndex": 2,
      "explanation": "'Berat sama dipikul, ringan sama dijinjing' bermaksud bekerjasama atau saling membantu ketika senang mahupun susah.",
      "ref": "Unit 1, m/s 5"
    },
    {
      "id": "d6_bm_t1_s3_07",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "M",
      "q": "Baca rangkap seloka berikut:\n\nAyah sibuk menyemak bil air dan api,\nIbu pula leka menggoreng ikan di dapur,\nAnak-anak duduk melingkar di hadapan televisyen,\nSemua menjerit lapar apabila azan hampir berkumandang.\n\nMengapakah puisi di atas digolongkan sebagai seloka?",
      "options": [
        "Mempunyai pembayang pada dua baris pertama dan maksud pada dua baris akhir",
        "Berbentuk puisi bebas yang mengandungi unsur jenaka dan sindiran terhadap gelagat keluarga",
        "Mengisahkan sejarah tokoh pejuang kemerdekaan negara dengan nada yang sedih",
        "Terikat dengan rima akhir a-b-a-b dan bilangan suku kata yang tetap"
      ],
      "correctIndex": 1,
      "explanation": "Seloka ialah puisi tradisional berbentuk bebas yang mengandungi unsur sindiran, jenaka atau gurau senda terhadap tingkah laku masyarakat atau keluarga.",
      "ref": "Unit 2, m/s 10"
    },
    {
      "id": "d6_bm_t1_s3_08",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "M",
      "q": "Kumpulan Irfan ingin mempersembahkan sajak kekeluargaan di atas pentas dengan cara melagukan sajak tersebut tanpa menggunakan sebarang alat muzik. Teknik persembahan ini dikenali sebagai _____.",
      "options": [
        "mimos",
        "dekon",
        "pantomin",
        "mestamu"
      ],
      "correctIndex": 3,
      "explanation": "Mestamu bermaksud melagukan puisi tanpa iringan muzik, manakala dekon ialah deklamasi dan lakon, dan mimos pula menekankan gerakan badan serta ekspresi muka.",
      "ref": "Unit 3, m/s 17"
    },
    {
      "id": "d6_bm_t1_s3_09",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "H",
      "q": "Baca pantun di bawah ini dengan telitinya.\n\nBawa bakul ke kebun mangga,\nPetik sebiji buat juadah;\nJaga tutur dalam keluarga,\nHati tenang hidup pun indah.\n\nApakah pengajaran utama yang sesuai dikaitkan dengan baris maksud pantun tersebut?",
      "options": [
        "Kita perlulah berkebun buah-buahan untuk menambah pendapatan ahli keluarga",
        "Ahli keluarga wajar berdiam diri supaya tidak berlaku perselisihan faham",
        "Ibu bapa harus menyediakan juadah yang lazat pada setiap hari untuk anak-anak",
        "Setiap ahli keluarga hendaklah menjaga pertuturan yang sopan agar keharmonian terpelihara"
      ],
      "correctIndex": 3,
      "explanation": "Baris maksud 'Jaga tutur dalam keluarga, hati tenang hidup pun indah' menekankan adab bertutur dengan sopan demi ketenangan dan keharmonian keluarga.",
      "ref": "Pengukuhan, m/s 21"
    },
    {
      "id": "d6_bm_t1_s3_10",
      "unit": "t1",
      "skill": "t1_s3",
      "diff": "H",
      "q": "Baca petikan sajak di bawah ini.\n\nDi perantauan ini kuikat tekad,\nMengumpul keringat demi sebuah harapan,\nKiriman wang saban bulan menjadi bukti,\nKasih seorang anak tidak pernah terhenti.\n\nBerdasarkan sajak tersebut, apakah sifat terpuji yang dimiliki oleh penyajak?",
      "options": [
        "Gemar mengembara ke luar negara untuk menikmati keindahan alam sekitar",
        "Gigih berusaha di perantauan dan bertanggungjawab menyara keluarga di kampung",
        "Sanggup melupakan pelajaran demi mencari kekayaan di negara orang",
        "Menghabiskan masa lapang dengan menghantar hadiah mewah kepada rakan-rakan"
      ],
      "correctIndex": 1,
      "explanation": "Ungkapan 'mengumpul keringat' menunjukkan kegigihan bekerja, manakala 'kiriman wang saban bulan' membuktikan rasa tanggungjawab terhadap keluarga.",
      "ref": "Unit 3, m/s 17"
    },
    {
      "id": "d6_bm_t1_s4_01",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "L",
      "q": "Setiap hujung minggu, Damia akan menemani neneknya di kebun sayur belakang rumah. Pada pagi Sabtu itu, neneknya mengadu pening kepala akibat cuaca yang agak terik. Tanpa berlengah, Damia segera memimpin neneknya masuk ke dalam rumah, membancuh segelas air suam serta menyapu minyak angin pada dahi neneknya. Selepas neneknya berehat dengan selesanya, Damia menyambung tugas menyiram anak benih sawi di kebun sehingga selesai.\n\nMengapakah Damia segera membawa neneknya masuk ke dalam rumah?",
      "options": [
        "Neneknya mengadu pening kepala kerana cuaca agak terik",
        "Dia mahu meminta izin neneknya untuk menyiram anak benih sawi",
        "Kerja-kerja di kebun sayur sudah pun siap sepenuhnya",
        "Dia ingin berehat di ruang tamu sambil minum air suam"
      ],
      "correctIndex": 0,
      "explanation": "Petikan jelas menyatakan Damia memimpin neneknya masuk ke dalam rumah kerana neneknya mengadu pening kepala akibat cuaca yang agak terik.",
      "ref": "Unit 1, m/s 3"
    },
    {
      "id": "d6_bm_t1_s4_02",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "L",
      "q": "Pada cuti sekolah yang lalu, keluarga Puan Rohaya memilih untuk menginap di sebuah inap desa di kawasan sawah padi. Di sana, anak-anaknya berpeluang menyaksikan cara petani menanam padi serta merasai keenakan kuih tradisional kampung. Percutian singkat itu turut membolehkan mereka melupakan kesibukan kerja harian seketika. Hubungan antara mereka menjadi semakin akrab setelah melakukan pelbagai aktiviti bersama-sama.\n\nBerdasarkan petikan, apakah manfaat utama yang diperoleh keluarga Puan Rohaya daripada percutian tersebut?",
      "options": [
        "Anak-anaknya berjaya memenangi pertandingan memasak kuih tradisional",
        "Mereka dapat berpindah terus ke kampung untuk mengelakkan kesesakan bandar",
        "Mereka dapat membeli tanah sawah padi untuk dijadikan tapak perniagaan",
        "Mereka memperoleh pengalaman baharu dan dapat mengeratkan ikatan kekeluargaan"
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyebut mereka menyaksikan penanaman padi, merasai kuih tradisional dan menjadi semakin akrab.",
      "ref": "Unit 2, m/s 8"
    },
    {
      "id": "d6_bm_t1_s4_03",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "L",
      "q": "Walaupun bertugas sebagai jururawat di Kuching, Kakak Munirah sentiasa berhubung dengan ibu bapanya di Melaka melalui panggilan video pada setiap malam minggu. Setiap kali menerima gaji, dia akan memperuntukkan sejumlah wang untuk membantu menampung kos ubat-ubatan ayahnya yang menghidap sakit jantung. Selain itu, Munirah sering mengingatkan adik-adiknya supaya rajin mengulang kaji pelajaran dan membantu ibu menguruskan rumah. Keprihatinannya membuatkan seluruh keluarga berasa amat bersyukur.\n\nBagaimanakah Kakak Munirah membantu meringankan beban keluarganya dari jauh?",
      "options": [
        "Dia pulang ke Melaka pada setiap hujung minggu untuk memasak",
        "Dia meminta adik-adiknya bekerja sambilan selepas waktu sekolah",
        "Dia mengajak ibu bapanya berpindah ke Kuching dengan segera",
        "Dia mengirimkan wang bagi menampung kos ubat-ubatan ayahnya"
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan Kakak Munirah memperuntukkan sejumlah wang daripada gajinya untuk menampung kos ubat-ubatan ayahnya.",
      "ref": "Unit 3, m/s 14–15"
    },
    {
      "id": "d6_bm_t1_s4_04",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "L",
      "q": "Haziq terpaksa tinggal di asrama sekolah kerana jarak rumahnya di pedalaman agak jauh dari bandar. Pada minggu pertama, dia berasa kekok dengan jadual harian yang padat di asrama. Namun begitu, dia tetap berazam untuk menyesuaikan diri demi mengejar cita-citanya menjadi seorang doktor. Setiap dua minggu, Haziq menghantar poskad kepada ibu bapanya agar mereka tidak berasa bimbang.\n\nMengapakah Haziq menghantar poskad kepada ibu bapanya?",
      "options": [
        "Kerana peraturan asrama mewajibkan murid menulis poskad setiap minggu",
        "Untuk meminta izin pulang ke rumah pada setiap hujung minggu",
        "Untuk menenangkan hati ibu bapanya supaya mereka tidak risau akan keadaannya",
        "Untuk memberitahu rakan-rakannya tentang kemudahan baharu di asrama"
      ],
      "correctIndex": 2,
      "explanation": "Menurut ayat terakhir petikan, Haziq menghantar poskad agar ibu bapanya tidak berasa bimbang.",
      "ref": "Penilaian, m/s 22"
    },
    {
      "id": "d6_bm_t1_s4_05",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "L",
      "q": "\"Sikap anak-anak yang cakna terhadap kesihatan ibu bapa amat terpuji,\" ujar Cikgu Nora.\n\nPerkataan 'cakna' dalam ayat di atas paling sesuai digantikan dengan perkataan _____.",
      "options": [
        "berkecil hati",
        "tawar hati",
        "ambil berat",
        "acuh tak acuh"
      ],
      "correctIndex": 2,
      "explanation": "Menurut Kamus Dewan, 'cakna' bermaksud mengambil peduli atau ambil berat terhadap sesuatu perkara.",
      "ref": "Unit 1, m/s 3"
    },
    {
      "id": "d6_bm_t1_s4_06",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "M",
      "q": "Walaupun datuk sudah berusia lanjut, beliau tidak pernah culas dalam menguruskan kebun sayur di belakang rumahnya. Setiap pagi, beliau menyiram tanaman dan mencabut rumput rumpai dengan tekunnya. Hasil tanaman tersebut bukan sahaja mencukupi untuk keperluan keluarga, malah sering diagihkan kepada jiran tetangga. Pada waktu petang pula, datuk meluangkan masa bercerita dengan cucu-cucunya di beranda rumah.\n\nPerkataan 'culas' dalam petikan bermaksud _____.",
      "options": [
        "tergesa-gesa",
        "lalai atau malas",
        "berhati-hati",
        "bersemangat"
      ],
      "correctIndex": 1,
      "explanation": "Dalam konteks ayat tersebut, datuk rajin dan tekun berkebun setiap pagi tanpa bersikap malas atau lalai ('culas').",
      "ref": "Unit 3, m/s 14"
    },
    {
      "id": "d6_bm_t1_s4_07",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "M",
      "q": "Hadirin yang dihormati, sesebuah keluarga bahagia terbentuk apabila setiap ahlinya saling menghormati dan bertolak ansur. Ibu bapa hendaklah meluangkan masa yang berkualiti bersama anak-anak walaupun sibuk mencari rezeki. Anak-anak pula perlu memainkan peranan dengan membantu mengemas rumah dan menjaga adik-adik. Apabila beban tugas dikongsi bersama, suasana rumah tangga akan sentiasa aman dan ceria.\n\nBerdasarkan petikan syarahan, apakah kesan jika anak-anak membantu ibu bapa melakukan kerja rumah?",
      "options": [
        "Ibu bapa dapat berhenti bekerja untuk berehat sepenuh masa di rumah",
        "Beban kerja dapat diringankan dan keharmonian keluarga terus terpelihara",
        "Semua ahli keluarga akan mendapat hadiah daripada jiran tetangga",
        "Anak-anak tidak perlu lagi mengulang kaji pelajaran di sekolah"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menerangkan bahawa apabila beban tugas dikongsi bersama, suasana rumah tangga menjadi aman dan ceria.",
      "ref": "Pengukuhan, m/s 21"
    },
    {
      "id": "d6_bm_t1_s4_08",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "M",
      "q": "Aktiviti sukaneka semasa Hari Keluarga mampu mempererat hubungan antara sanak saudara yang jarang-jarang bertemu.\n\nApakah perkataan yang berlawanan maksud dengan 'mempererat'?",
      "options": [
        "merenggangkan",
        "mengukuhkan",
        "memupuk",
        "menjalinkan"
      ],
      "correctIndex": 0,
      "explanation": "'Mempererat' bermaksud menjadikan lebih rapat atau kukuh, maka kata lawannya ialah 'merenggangkan'.",
      "ref": "Unit 2, m/s 8"
    },
    {
      "id": "d6_bm_t1_s4_09",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "H",
      "q": "Sepanjang tempoh perintah berkurung, keluarga Encik Firdaus tidak dapat pulang menziarahi nenek di kampung seperti kelaziman setiap tahun. Bagi mengubati kerinduan, mereka mengadakan panggilan video pada setiap hujung minggu untuk berbual dengan nenek. Anak-anak Encik Firdaus turut menunjukkan lukisan serta hasil masakan mereka menerusi skrin telefon. Walaupun meriah, nenek tetap mengakui bahawa suasana bersemuka di kampung jauh lebih bermakna baginya.\n\nApakah kesimpulan yang paling tepat berdasarkan petikan di atas?",
      "options": [
        "Teknologi membantu keluarga kekal berhubung, namun pertemuan bersemuka tetap lebih istimewa",
        "Nenek tidak gemar menggunakan telefon pintar kerana skrinnya terlalu kecil",
        "Anak-anak Encik Firdaus lebih suka tinggal di bandar berbanding pulang ke kampung",
        "Keluarga Encik Firdaus lupa akan tanggungjawab mereka terhadap nenek di kampung"
      ],
      "correctIndex": 0,
      "explanation": "Petikan menunjukkan panggilan video merapatkan hubungan ketika berjauhan, tetapi nenek masih menganggap pertemuan bersemuka lebih bermakna.",
      "ref": "Unit 3, m/s 13–15"
    },
    {
      "id": "d6_bm_t1_s4_10",
      "unit": "t1",
      "skill": "t1_s4",
      "diff": "H",
      "q": "Ketika banjir melanda kawasan perumahan mereka, Puan Norizan segera mengejutkan ketiga-tiga orang anaknya yang sedang nyenyak tidur. Walaupun kakinya tercedera akibat terpijak serpihan kayu, beliau tetap memapah anak-anaknya naik ke tingkat atas rumah jiran yang lebih selamat. Beliau langsung tidak menghiraukan kesakitan diri selagi keselamatan anak-anaknya belum terjamin. Mujurlah pasukan penyelamat tiba sejam kemudian untuk membawa mereka ke pusat pemindahan.\n\nApakah nilai murni utama yang terserlah melalui tindakan Puan Norizan?",
      "options": [
        "Kepatuhan terhadap arahan pasukan penyelamat di pusat pemindahan",
        "Kebijaksanaan meramalkan keadaan cuaca pada musim tengkujuh",
        "Pengorbanan dan kasih sayang seorang ibu yang mengutamakan keselamatan anak-anak",
        "Kerajinan mengemas rumah sebelum berlakunya bencana alam"
      ],
      "correctIndex": 2,
      "explanation": "Walaupun cedera pada kaki, Puan Norizan tetap mengutamakan keselamatan anak-anaknya melebihi kesakitan dirinya sendiri.",
      "ref": "Unit 1, m/s 2"
    },
    {
      "id": "d6_bm_t2_s1_01",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "L",
      "q": "Udara pada waktu pagi di kawasan taman yang dipenuhi pokok hijau itu sungguh _____ dan menyamankan.",
      "options": [
        "segar",
        "kecil-kecilan",
        "sebersih",
        "hijau daun"
      ],
      "correctIndex": 0,
      "explanation": "'Segar' ialah kata adjektif tunggal yang tepat untuk menerangkan keadaan udara yang nyaman dan bersih.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_02",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "L",
      "q": "Antara perkataan yang berikut, yang manakah merupakan kata adjektif terbitan?",
      "options": [
        "kuning",
        "terbersih",
        "indah",
        "rendah"
      ],
      "correctIndex": 1,
      "explanation": "'Terbersih' terbentuk daripada kata dasar adjektif 'bersih' yang menerima awalan 'ter-', menjadikannya kata adjektif terbitan. 'Indah', 'kuning', dan 'rendah' pula ialah kata adjektif tunggal.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_03",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "L",
      "q": "Apabila bekalan elektrik terputus secara tiba-tiba pada waktu malam, seluruh kawasan perumahan itu menjadi _____.",
      "options": [
        "gelap-gelita",
        "terkecil",
        "harum semerbak",
        "manis buah"
      ],
      "correctIndex": 0,
      "explanation": "Kata adjektif ganda 'gelap-gelita' membawa maksud sangat gelap dan paling tepat menggambarkan keadaan apabila bekalan elektrik terputus pada waktu malam.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_04",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "L",
      "q": "Murid-murid berasa _____ apabila melihat kawasan kantin sekolah sentiasa bersih, kemas dan bebas daripada lalat.",
      "options": [
        "hitam legam",
        "hijau daun",
        "bulat hati",
        "senang hati"
      ],
      "correctIndex": 3,
      "explanation": "Kata adjektif majmuk 'senang hati' bermaksud gembira atau berasa tenteram dan puas.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_05",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "L",
      "q": "Pilih ayat yang mengandungi kata adjektif majmuk.",
      "options": [
        "Sayur-sayuran yang baru dipetik dari kebun komuniti itu masih segar dan rangup.",
        "Kawasan halaman rumah Encik Azman kelihatan seindah taman bunga.",
        "Murid yang rajin membaca itu terkenal sebagai pelajar yang terang hati.",
        "Bilik darjah yang kemas dan bersih menjadikan murid-murid lebih selesa."
      ],
      "correctIndex": 2,
      "explanation": "'Terang hati' ialah kata adjektif majmuk yang terbina daripada gabungan dua kata dasar yang membawa makna mudah memahami sesuatu.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_06",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "M",
      "q": "Perkataan 'terkecil' dalam frasa 'kuman yang terkecil sukar dilihat dengan mata kasar' tergolong dalam kata adjektif bentuk _____.",
      "options": [
        "terbitan",
        "majmuk",
        "tunggal",
        "ganda"
      ],
      "correctIndex": 0,
      "explanation": "'Terkecil' ialah kata adjektif terbitan yang terbentuk daripada kata adjektif tunggal 'kecil' dengan awalan 'ter-'.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_07",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "M",
      "q": "Pilih ayat yang betul penggunaan kata adjektifnya.",
      "options": [
        "Kantin sekolah kami dipilih sebagai kantin yang paling terbersih di daerah ini.",
        "Kuku yang panjang amat sekali berisiko memerangkap kotoran serta kuman berbahaya.",
        "Taman rekreasi itu menjadi kawasan paling bersih selepas aktiviti gotong-royong dijalankan.",
        "Bilik tidur yang terkemas sekali menjamin keselesaan dan tidur yang lena."
      ],
      "correctIndex": 2,
      "explanation": "Kata penguat 'paling bersih' adalah gramatis, manakala 'paling terbersih', 'terkemas sekali' dan 'amat sekali' menyalahi hukum kata penguat Tatabahasa Dewan.",
      "ref": "Unit 5, m/s 36 & Unit 6, m/s 41"
    },
    {
      "id": "d6_bm_t2_s1_08",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "M",
      "q": "\"Selepas dibersihkan oleh penduduk setempat, halaman dewan orang ramai ini kelihatan _____ taman bunga,\" kata Puan Normah dengan gembiranya.",
      "options": [
        "bersihkan",
        "kebersihan",
        "bersih-bersih",
        "sebersih"
      ],
      "correctIndex": 3,
      "explanation": "Kata adjektif terbitan 'sebersih' membawa maksud sama bersih dengan taman bunga dan paling sesuai melengkapkan frasa 'kelihatan sebersih taman bunga'.",
      "ref": "Unit 5, m/s 36"
    },
    {
      "id": "d6_bm_t2_s1_09",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "H",
      "q": "Ayat manakah yang menggunakan kedua-dua jenis kata adjektif terbitan dan kata adjektif ganda dengan tepatnya?",
      "options": [
        "Kesihatan badan amat penting supaya kita tidak berasa letih-lesu ketika belajar.",
        "Bilik tidur yang kemas dan wangi membantu kita memperoleh tidur yang nyenyak sekali.",
        "Pokok-pokok bunga di taman rekreasi yang terbersih di bandar itu kelihatan segar-bugar selepas disiram pada waktu pagi.",
        "Kawasan padang sekolah itu amat luas dan bersih kerana sentiasa diselia oleh pekerja."
      ],
      "correctIndex": 2,
      "explanation": "'Terbersih' ialah kata adjektif terbitan berawalan 'ter-' dan 'segar-bugar' ialah kata adjektif ganda. 'Kesihatan' pula ialah kata nama terbitan, bukan kata adjektif terbitan.",
      "ref": "Unit 5, m/s 36 & Unit 6, m/s 41–42"
    },
    {
      "id": "d6_bm_t2_s1_10",
      "unit": "t2",
      "skill": "t2_s1",
      "diff": "H",
      "q": "Pilih ayat yang betul ejaan kata majmuknya mengikut sistem ejaan Dewan Bahasa dan Pustaka.",
      "options": [
        "Ibu bapa hendaklah sentiasa menitikberatkan masa tidur yang berkualiti demi kesihatan anak-anak.",
        "Amalan gayahidup sihat dapat mencegah masalah kegemukan sejak usia muda.",
        "Adik membuang sampah sarap yang bertaburan di dalam bilik tidur dengan senanghati.",
        "Ibu bapa mestilah mengambilberat tentang waktu tidur dan pemakanan anak-anak."
      ],
      "correctIndex": 0,
      "explanation": "'Menitikberatkan' dieja bercantum kerana menerima apitan 'meN-...-kan', manakala 'mengambil berat', 'senang hati' dan 'gaya hidup' mesti dieja terpisah.",
      "ref": "Unit 6, m/s 41"
    },
    {
      "id": "d6_bm_t2_s2_01",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "L",
      "q": "Pendedahan kepada cahaya biru skrin telefon pintar terlalu lama boleh _____ saraf mata kanak-kanak.",
      "options": [
        "berkerosakan",
        "terdedah",
        "merosakkan",
        "merosak"
      ],
      "correctIndex": 2,
      "explanation": "Kata kerja transitif 'merosakkan' tepat digunakan untuk menyatakan perbuatan yang memberi kesan kerosakan kepada objek 'saraf mata kanak-kanak'.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_02",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "L",
      "q": "Kanak-kanak yang kurang mendapat rehat yang cukup akan _____ lesu di dalam kelas.",
      "options": [
        "menimbulkan",
        "kelihatan",
        "menghadapi",
        "menyebabkan"
      ],
      "correctIndex": 1,
      "explanation": "'Kelihatan' ialah kata kerja tak transitif yang boleh diikuti kata adjektif 'lesu', manakala pilihan lain memerlukan objek kata nama.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_03",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "L",
      "q": "Ibu bapa wajar _____ tempoh penggunaan gajet anak-anak supaya mereka tidak mengalami masalah rabun jauh.",
      "options": [
        "berjaga",
        "bermain",
        "melihatkan",
        "memantau"
      ],
      "correctIndex": 3,
      "explanation": "'Memantau' ialah kata kerja transitif yang membawa maksud mengawasi atau memerhati sesuatu dengan telitinya.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_04",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "L",
      "q": "Ayat manakah yang menggunakan kata kerja tak transitif?",
      "options": [
        "Doktor mata memeriksa tahap penglihatan murid Tahun Enam di dewan.",
        "Adik jatuh pengsan akibat tidak bersarapan sebelum bersenam di padang.",
        "Penggunaan gajet secara berlebihan menjejaskan kualiti tidur seseorang.",
        "Puan Halimah membaca risalah tentang pemakanan seimbang di klinik."
      ],
      "correctIndex": 1,
      "explanation": "'Jatuh', 'bersarapan' dan 'bersenam' dalam pilihan kedua ialah kata kerja tak transitif kerana tidak memerlukan objek penyambut.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_05",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "L",
      "q": "Kita perlulah _____ pemakanan yang berzat serta bersenam sekurang-kurangnya tiga kali seminggu.",
      "options": [
        "beramal",
        "mengamalkan",
        "pengamalan",
        "diamalkan"
      ],
      "correctIndex": 1,
      "explanation": "Kata kerja transitif aktif 'mengamalkan' tepat digunakan sebelum frasa nama objek 'pemakanan yang berzat'.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_06",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "M",
      "q": "Pilih ayat yang mempunyai kesalahan penggunaan kata kerja transitif.",
      "options": [
        "Ibu menasihati abang supaya berehat selepas mengulang kaji pelajaran.",
        "Pakar pemakanan itu membincangkan tentang bahaya makanan segera kepada pelajar.",
        "Doktor Siti menerangkan punca penyakit rabun jauh kepada murid-murid.",
        "Sinar cahaya biru dari skrin komputer dapat menembusi lapisan mata."
      ],
      "correctIndex": 1,
      "explanation": "Kata kerja transitif 'membincangkan' mesti diikuti terus oleh objek ('membincangkan bahaya makanan segera'), tanpa kata sendi 'tentang'.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_07",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "M",
      "q": "Pilih ayat bertemakan kesihatan dan kebersihan yang mengandungi kata kerja tak transitif berpelengkap.",
      "options": [
        "Pengambilan gula yang berlebihan boleh menjadi punca utama penyakit kencing manis.",
        "Murid-murid sedang berjoging di sekitar taman rekreasi pada waktu petang.",
        "Ahli Kelab Doktor Muda membersihkan kawasan sekolah bersama-sama guru.",
        "Abang menggosok gigi dua kali sehari sebelum tidur pada waktu malam."
      ],
      "correctIndex": 0,
      "explanation": "'Menjadi' ialah kata kerja tak transitif berpelengkap kerana memerlukan frasa nama pelengkap ('punca utama penyakit kencing manis') yang tidak boleh dipasifkan.",
      "ref": "Unit 4, m/s 30"
    },
    {
      "id": "d6_bm_t2_s2_08",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "M",
      "q": "Datuk perlu _____ rawatan fisioterapi di hospital selama enam minggu untuk memulihkan kekuatan otot kakinya.",
      "options": [
        "menjalani",
        "menjalankan",
        "dijalankan",
        "berjalan"
      ],
      "correctIndex": 0,
      "explanation": "'Menjalani' bermaksud mengalami atau menerima sesuatu proses seperti rawatan, manakala 'menjalankan' dilakukan oleh petugas atau pihak yang mengendalikan rawatan.",
      "ref": "Unit 4, m/s 26 & 30"
    },
    {
      "id": "d6_bm_t2_s2_10",
      "unit": "t2",
      "skill": "t2_s2",
      "diff": "H",
      "q": "Antara ayat berikut, yang manakah TIDAK gramatis?",
      "options": [
        "Jururawat itu tersenyum manis ketika menyambut kedatangan pesakit di kaunter.",
        "Wajah pesakit yang kurang tidur itu kelihatan pucat dan tidak bermaya.",
        "Puan Aini sering berbincang tentang diet seimbang dengan pakar nutrisi di klinik kesihatan.",
        "Doktor pakar itu sedang membincangkan tentang cara-cara mencegah demam denggi di dewan sekolah."
      ],
      "correctIndex": 3,
      "explanation": "Ayat ini tidak gramatis kerana kata kerja transitif 'membincangkan' mesti diikuti terus oleh frasa nama sebagai objek tanpa kata sendi nama 'tentang' (sepatutnya 'membincangkan cara-cara...' atau 'berbincang tentang cara-cara...').",
      "ref": "Unit 4, m/s 27 & 30"
    },
    {
      "id": "d6_bm_t2_s3_01",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "L",
      "q": "Baca pantun di bawah ini.\n\nHarum mewangi bunga melati,\nDisusun cantik di atas dulang;\nJaga kebersihan setiap hari,\nKuman berbahaya pasti menghilang.\n\nApakah maksud yang disampaikan dalam pantun di atas?",
      "options": [
        "Menjaga kebersihan secara berterusan dapat menjauhkan kita daripada jangkitan kuman",
        "Semua jenis kuman hanya hidup di tempat yang mempunyai bau yang busuk",
        "Bunga melati perlu ditanam di halaman rumah supaya udara menjadi wangi",
        "Dulang makanan harus dicuci dengan air bunga sebelum dihidangkan"
      ],
      "correctIndex": 0,
      "explanation": "Dua baris akhir merupakan maksud pantun yang menyeru kita menjaga kebersihan setiap hari agar bebas daripada kuman berbahaya.",
      "ref": "Unit 4, m/s 29"
    },
    {
      "id": "d6_bm_t2_s3_02",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "L",
      "q": "Teliti rangkap pantun berikut:\n\nPagi hari membeli ketupat,\nBawa pulang bersama halia;\nMakan sayur badan pun sihat,\nHidup ceria sepanjang usia.\n\nApakah skema rima akhir bagi pantun tersebut?",
      "options": [
        "a-a-b-b",
        "a-a-a-a",
        "a-b-b-a",
        "a-b-a-b"
      ],
      "correctIndex": 3,
      "explanation": "Baris pertama dan ketiga berakhir dengan bunyi '-at' ('ketupat', 'sihat'), manakala baris kedua dan keempat berakhir dengan bunyi '-ia' ('halia', 'usia'), iaitu rima a-b-a-b.",
      "ref": "Unit 4, m/s 29"
    },
    {
      "id": "d6_bm_t2_s3_03",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "L",
      "q": "Baca rangkap sajak di bawah ini.\n\nRuang ini kubersihkan dengan teliti,\nLantai dimop setiap sudut disanitasi,\nTiada lagi habuk mahupun hama,\nAgar pelajar sihat dan selesa.\n\nApakah pengajaran yang terdapat dalam rangkap sajak di atas?",
      "options": [
        "Kerja membersihkan bilik hanya perlu dilakukan apabila terdapat habuk",
        "Pelajar dilarang memasuki bilik darjah jika lantai masih basah",
        "Semua pelajar mesti membawa penyapu sendiri dari rumah ke sekolah",
        "Kebersihan ruang perlu dijaga rapi demi keselesaan dan kesihatan bersama"
      ],
      "correctIndex": 3,
      "explanation": "Sajak menggambarkan usaha membersihkan serta mensanitasi ruang secara teliti supaya warga sekolah sihat dan selesa.",
      "ref": "Unit 6, m/s 39"
    },
    {
      "id": "d6_bm_t2_s3_04",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "L",
      "q": "Pihak sekolah memasang papan tanda bertulis 'Bawa Bekas Makanan Sendiri Demi Alam Sekitar' di kantin. Apakah tujuan utama ungkapan tersebut dipamerkan?",
      "options": [
        "Memastikan murid membuang semua bekas plastik di dalam tong kompos",
        "Menggalakkan murid mengurangkan penggunaan plastik pakai buang secara berhemah",
        "Melarang semua murid daripada membeli makanan di kantin sekolah",
        "Menggantikan peranan pekerja kantin semasa waktu rehat sekolah"
      ],
      "correctIndex": 1,
      "explanation": "Membawa bekas makanan sendiri membantu mengurangkan sisa plastik sekali guna yang boleh mencemarkan alam sekitar.",
      "ref": "Unit 5, m/s 34–35"
    },
    {
      "id": "d6_bm_t2_s3_05",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "L",
      "q": "Baca rangkap seni kata lagu di bawah ini.\n\nBasuh tangan dengan sabun selalu,\nGosok celah jari hingga ke kuku,\nKeringkan tangan dengan tuala bersih,\nKuman tiada badan pun sihat.\n\nApakah perkara utama yang disarankan melalui seni kata lagu di atas?",
      "options": [
        "Mengamalkan cara mencuci dan mengeringkan tangan yang betul",
        "Membeli sabun wangi yang mahal untuk mencuci pakaian sekolah",
        "Menggunakan krim pelembap sebelum keluar bermain di padang",
        "Menyimpan tuala basah di dalam beg sekolah selepas waktu rehat"
      ],
      "correctIndex": 0,
      "explanation": "Seni kata lagu tersebut menekankan langkah mencuci tangan dengan sabun sehingga bersih dan mengeringkannya dengan tuala.",
      "ref": "Unit 6, m/s 40"
    },
    {
      "id": "d6_bm_t2_s3_06",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "M",
      "q": "Lengkapkan pantun berikut dengan baris pembayang yang paling sesuai.\n\nPergi ke kebun memetik langsat,\n__________________________;\nAmalkan bersenam supaya sihat,\nJaga kebersihan setiap hari.",
      "options": [
        "Langsat dimakan bersama rakan",
        "Makanlah buah untuk kesihatan",
        "Tampak sekawan burung kenari",
        "Disimpan elok di dalam peti"
      ],
      "correctIndex": 2,
      "explanation": "Baris pembayang 'Tampak sekawan burung kenari' mempunyai rima akhir '-ari' yang tepat dengan 'hari' pada baris keempat serta melengkapkan gambaran suasana di kebun.",
      "ref": "Unit 4, m/s 29"
    },
    {
      "id": "d6_bm_t2_s3_07",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "M",
      "q": "Pilih baris maksud yang paling tepat untuk melengkapkan pantun di bawah ini.\n\nPutih berseri bunga kemboja,\nTumbuh subur di tepi titi;\nCuci tangan sebelum bekerja,\n__________________________.",
      "options": [
        "Janganlah bermain di kawasan yang kotor",
        "Supaya tangan kelihatan lebih putih berseri",
        "Kebersihan dijaga sepenuh hati",
        "Elakkan makan makanan manis pada waktu malam"
      ],
      "correctIndex": 2,
      "explanation": "'Kebersihan dijaga sepenuh hati' menepati rima akhir '-ti' ('titi') dan melengkapkan maksud pantun tentang kepentingan mencuci tangan.",
      "ref": "Unit 4, m/s 29"
    },
    {
      "id": "d6_bm_t2_s3_08",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "M",
      "q": "Baca rangkap sajak di bawah ini.\n\nKepala berdenyut nafas terasa berat,\nKulit tubuh hangat tanda demam melarat,\nNamun tenang hati di ruang rawatan,\nMenanti sembuh dengan penuh kesabaran.\n\nApakah keadaan yang digambarkan oleh penyajak dalam rangkap tersebut?",
      "options": [
        "Kebimbangan pesakit yang enggan menerima rawatan daripada doktor",
        "Ketabahan seseorang yang sedang mengalami gejala demam ketika menerima rawatan",
        "Keletihan petugas kesihatan membersihkan bilik rawatan sekolah",
        "Kegembiraan seorang murid yang baru memenangi acara sukan"
      ],
      "correctIndex": 1,
      "explanation": "Baris pertama dan kedua menunjukkan gejala demam, manakala baris ketiga dan keempat menggambarkan ketenangan dan kesabaran pesakit di ruang rawatan.",
      "ref": "Unit 6, m/s 39"
    },
    {
      "id": "d6_bm_t2_s3_09",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "H",
      "q": "Berdasarkan panduan penulisan pantun empat kerat, apakah langkah awal yang disarankan sebelum membina baris pembayang?",
      "options": [
        "Menentukan dua baris maksud pantun terlebih dahulu, kemudian mencari perkataan yang berima sama untuk baris pembayang",
        "Membina dua baris pembayang tentang alam sekitar tanpa menentukan mesej yang ingin disampaikan",
        "Menulis empat baris ayat cerita secara bebas tanpa perlu memikirkan rima tengah dan rima akhir",
        "Menyamakan maksud baris pertama dan baris kedua dengan isi baris ketiga dan keempat"
      ],
      "correctIndex": 0,
      "explanation": "Untuk mencipta pantun dengan mudah, penulis menulis dua baris maksud dahulu, mencari perkataan yang berima sama, lalu membina dua baris pembayang mengikut skema rima a-b-a-b.",
      "ref": "Unit 4, m/s 29"
    },
    {
      "id": "d6_bm_t2_s3_10",
      "unit": "t2",
      "skill": "t2_s3",
      "diff": "H",
      "q": "Baca pantun di bawah ini dengan telitinya.\n\nMembeli kuih di pekan lama,\nDibungkus rapi daun keladi;\nSisa makanan diasingkan bersama,\nBaja kompos suburkan bumi.\n\nBagaimanakah amalan dalam baris maksud pantun tersebut menyokong konsep kelestarian alam?",
      "options": [
        "Mengitar semula sisa makanan menjadi baja organik untuk menyuburkan tanaman",
        "Menanam pokok keladi di kawasan kantin untuk mencantikkan pemandangan",
        "Menggunakan pembungkus plastik agar makanan tahan lebih lama",
        "Menjual lebihan makanan di pasar malam untuk mengelakkan pembaziran"
      ],
      "correctIndex": 0,
      "explanation": "Pengasingan sisa makanan untuk dijadikan baja kompos mengurangkan sampah serta menyuburkan tanah secara semula jadi.",
      "ref": "Unit 5, m/s 34–35"
    },
    {
      "id": "d6_bm_t2_s4_01",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "L",
      "q": "Sejak mengalami kecederaan saraf akibat terjatuh, Pak Cik Osman kerap mengunjungi klinik pemulihan untuk menjalani sesi fisioterapi. Pada peringkat awal, pegawai pemulihan memanfaatkan peralatan terapi ultrabunyi bagi memeriksa tindak balas saraf kakinya. Selain itu, beliau menerima rawatan terapi manual serta dibantu melakukan senaman pasif kerana masih belum berupaya menggerakkan sendi sendiri. Setelah beberapa minggu, Pak Cik Osman beransur pulih dan bersedia mencuba latihan pergerakan ringan.\n\nMengapakah pegawai pemulihan menggunakan peralatan terapi ultrabunyi dalam rawatan Pak Cik Osman?",
      "options": [
        "Untuk membimbing pesakit berenang di dalam kolam khas",
        "Untuk menggantikan keperluan rawatan terapi manual",
        "Untuk mengukur tekanan darah pesakit sebelum bersenam",
        "Untuk memeriksa tindak balas saraf pada kaki pesakit"
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan pegawai pemulihan memanfaatkan peralatan terapi ultrabunyi bagi memeriksa tindak balas saraf kaki Pak Cik Osman.",
      "ref": "Unit 4, m/s 26–27"
    },
    {
      "id": "d6_bm_t2_s4_02",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "L",
      "q": "Untuk memastikan tubuh kekal bertenaga dan sihat, Azim merancang menu harian berpandukan Piramid Makanan Malaysia 2020. Menurut panduan tersebut, minuman air kosong antara enam hingga lapan gelas sehari amat digalakkan. Bagi kumpulan makanan utama pula, sumber karbohidrat disarankan sebanyak tiga hingga lima sajian, manakala sayur-sayuran pula dua hingga tiga sajian setiap hari. Sebaliknya, hidangan yang mengandungi banyak garam, gula, minyak serta lemak hendaklah dikurangkan.\n\nBerdasarkan petikan, berapakah jumlah sajian sayur-sayuran yang disarankan setiap hari?",
      "options": [
        "6 hingga 8 sajian",
        "3 hingga 5 sajian",
        "1 hingga 2 sajian",
        "2 hingga 3 sajian"
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan sayur-sayuran disarankan diambil sebanyak dua hingga tiga sajian setiap hari.",
      "ref": "Unit 4, m/s 28"
    },
    {
      "id": "d6_bm_t2_s4_03",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "L",
      "q": "Penjagaan kebersihan diri amat penting bagi murid yang melangkah ke alam remaja kerana berlakunya perubahan hormon pada tubuh. Rambut perlu dicuci dua hingga tiga kali seminggu dengan syampu yang sesuai bagi mengelakkan masalah kelemumur serta bau yang kurang menyenangkan. Selain itu, kuku tangan dan kaki hendaklah sentiasa dipotong pendek agar kotoran dan kuman tidak terperangkap di celahnya. Amalan memberus gigi termasuk bahagian lidah pula dapat memastikan nafas kekal segar sepanjang hari.\n\nMengapakah remaja digalakkan memotong kuku secara berkala?",
      "options": [
        "Untuk mengelakkan kuman dan kotoran daripada terkumpul di celah kuku",
        "Untuk mengurangkan penghasilan kelemumur pada kulit kepala",
        "Untuk mengawal perubahan hormon yang berlaku pada kulit muka",
        "Untuk memastikan nafas sentiasa berbau segar apabila bercakap"
      ],
      "correctIndex": 0,
      "explanation": "Petikan menyatakan kuku perlu dipotong pendek agar kotoran dan kuman tidak terperangkap di celahnya.",
      "ref": "Unit 5, m/s 32"
    },
    {
      "id": "d6_bm_t2_s4_04",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "L",
      "q": "Kenderaan ambulans di negara kita telah mengalami banyak perubahan seiring dengan kemajuan teknologi perubatan. Pada era 1950-an, ambulans bersaiz besar hanya berfungsi sebagai pengangkut pesakit tanpa peralatan rawatan canggih. Menjelang tahun 1963, saiz ambulans menjadi lebih kecil supaya dapat bergerak dengan lebih pantas di jalan raya. Kini, ambulans moden dilengkapi alat pemantau jantung serta mesin bantuan pernafasan bagi menyelamatkan nyawa pesakit ketika dalam perjalanan ke hospital.\n\nApakah kelebihan ambulans moden berbanding ambulans pada era 1950-an?",
      "options": [
        "Mampu membawa lapan orang pesakit secara serentak",
        "Dilengkapi peralatan sokongan perubatan seperti alat pemantau jantung",
        "Tidak memerlukan petugas kesihatan untuk mengiringi pesakit",
        "Hanya digunakan untuk mengangkut pesakit dari kawasan desa sahaja"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menerangkan ambulans moden kini dilengkapi alat pemantau jantung dan mesin bantuan pernafasan.",
      "ref": "Unit 6, m/s 38"
    },
    {
      "id": "d6_bm_t2_s4_05",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "L",
      "q": "Pesakit yang mengalami kecederaan saraf perlu menjalani proses rehabilitasi selama beberapa bulan di hospital.\n\nApakah maksud perkataan 'rehabilitasi' dalam ayat tersebut?",
      "options": [
        "pemulihan semula",
        "pencegahan awal",
        "pembedahan segera",
        "pemeriksaan mata"
      ],
      "correctIndex": 0,
      "explanation": "'Rehabilitasi' dalam konteks perubatan bermaksud proses pemulihan semula kesihatan atau keupayaan fizikal pesakit.",
      "ref": "Unit 4, m/s 26–27"
    },
    {
      "id": "d6_bm_t2_s4_06",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "M",
      "q": "Jam pintar kesihatan kini menjadi pilihan ramai kerana mampu merekodkan kadar denyutan nadi dan jumlah langkah harian pemakainya. Peranti ini turut mengeluarkan amaran sekiranya pengguna duduk terlalu lama tanpa melakukan sebarang pergerakan fizikal. Selain itu, pengguna dapat memantau tempoh tidur berkualiti mereka pada setiap malam melalui aplikasi telefon pintar. Dengan adanya data tersebut, seseorang itu lebih mudah merancang gaya hidup yang aktif dan sihat.\n\nApakah ramalan yang paling munasabah tentang fungsi jam pintar kesihatan pada masa hadapan?",
      "options": [
        "Hospital dan klinik kesihatan akan ditutup kerana tidak lagi diperlukan",
        "Jam pintar berkemungkinan dapat mengesan tanda awal gangguan kesihatan dan menghantar maklumat terus kepada doktor",
        "Jam pintar akan menggantikan fungsi makanan berzat dalam Piramid Makanan",
        "Pengguna tidak perlu lagi tidur pada waktu malam apabila memakai jam pintar"
      ],
      "correctIndex": 1,
      "explanation": "Berdasarkan perkembangan pemantauan nadi dan tidur, ramalan yang logik ialah keupayaan mengesan tanda awal gangguan kesihatan serta perkongsian data perubatan dengan doktor.",
      "ref": "Pengayaan, m/s 44"
    },
    {
      "id": "d6_bm_t2_s4_07",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "M",
      "q": "Setelah membuat ujian darah di hospital, doktor mengesahkan bahawa Danish menghidap diabetes jenis satu. Doktor menerangkan bahawa penyakit itu berlaku apabila paras gula dalam darah meningkat melebihi tahap normal. Antara gejala awal yang dialami oleh Danish termasuklah kerap membuang air kecil dan mudah berasa dahaga. Oleh itu, ibu Danish perlu mengawal pemakanan hariannya dengan ketat di samping memastikan suntikan insulin diberikan mengikut jadual.\n\nApakah rumusan yang paling tepat berdasarkan petikan di atas?",
      "options": [
        "Penyakit diabetes hanya boleh dikesan selepas pesakit menjalani rawatan fisioterapi",
        "Pesakit diabetes tidak dibenarkan minum air kosong walaupun berasa sangat dahaga",
        "Penghidap diabetes jenis satu memerlukan kawalan pemakanan dan rawatan insulin yang berdisiplin",
        "Ujian darah di hospital tidak mampu mengenal pasti jenis penyakit diabetes"
      ],
      "correctIndex": 2,
      "explanation": "Petikan merumuskan bahawa ibu Danish perlu mengawal pemakanan dengan ketat serta memberikan suntikan insulin mengikut jadual.",
      "ref": "Penilaian, m/s 46"
    },
    {
      "id": "d6_bm_t2_s4_08",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "M",
      "q": "Doktor menasihati ibu bapa agar segera membawa anak ke klinik sekiranya gejala demam berpanjangan tidak surut.\n\nPerkataan 'gejala' dalam ayat di atas membawa maksud _____.",
      "options": [
        "ubatan",
        "halangan",
        "petanda",
        "rawatan"
      ],
      "correctIndex": 2,
      "explanation": "'Gejala' bermaksud tanda-tanda atau petanda sesuatu penyakit yang mula kelihatan.",
      "ref": "Penilaian, m/s 46"
    },
    {
      "id": "d6_bm_t2_s4_09",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "H",
      "q": "Doktor mencadangkan datuk menjalani rawatan di dalam kolam air suam khas bagi mengurangkan tekanan pada sendi ketika bersenam.\n\nApakah istilah perubatan yang tepat bagi kaedah rawatan tersebut?",
      "options": [
        "apnea tidur",
        "hidroterapi",
        "terapi ultrabunyi",
        "elektroterapi"
      ],
      "correctIndex": 1,
      "explanation": "'Hidroterapi' ialah rawatan pemulihan fizikal yang menggunakan air untuk membantu pergerakan pesakit.",
      "ref": "Unit 4, m/s 27"
    },
    {
      "id": "d6_bm_t2_s4_10",
      "unit": "t2",
      "skill": "t2_s4",
      "diff": "H",
      "q": "Program kawalan denggi menggunakan nyamuk berwolbachia merupakan kaedah biologi yang selamat kepada manusia dan alam sekitar. Bekas hitam khas diletakkan di kawasan sasaran untuk membiakkan nyamuk yang membawa bakteria semula jadi tersebut. Apabila nyamuk Aedes berwolbachia mengawan dengan nyamuk Aedes liar, penularan virus denggi dapat disekat tanpa penggunaan racun serangga. Oleh itu, penduduk setempat dinasihatkan supaya tidak mengalihkan atau merosakkan bekas hitam tersebut.\n\nApakah kesan yang mungkin berlaku sekiranya penduduk membuang bekas hitam berwolbachia itu kerana menyangkanya sampah?",
      "options": [
        "Nyamuk berwolbachia akan membiak dengan lebih pantas di dalam longkang yang tersumbat",
        "Penggunaan racun kimia tidak lagi diperlukan kerana semua nyamuk Aedes mati serta-merta",
        "Penduduk akan terhindar daripada demam denggi tanpa perlu menjaga kebersihan rumah",
        "Usaha membiakkan nyamuk berwolbachia terganggu lalu menyebabkan populasi nyamuk pembawa denggi sukar dikawal"
      ],
      "correctIndex": 3,
      "explanation": "Kerana bekas hitam berfungsi membiakkan dan memantau nyamuk berwolbachia, membuangnya akan menjejaskan program kawalan denggi secara biologi.",
      "ref": "Unit 6, m/s 37"
    },
    {
      "id": "d6_bm_t3_s1_01",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "L",
      "q": "Pemandu kereta itu memperlahankan kenderaannya ______ terlihat papan tanda lintasan hidupan liar di tepi lebuh raya.",
      "options": [
        "tetapi",
        "apabila",
        "supaya",
        "bahawa"
      ],
      "correctIndex": 1,
      "explanation": "Kata hubung pancangan keterangan 'apabila' menyatakan waktu atau masa sesuatu peristiwa berlaku.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_02",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "L",
      "q": "Semua peserta konvoi berbasikal wajib memakai topi keledar ______ pad siku sebelum kayuhan bermula.",
      "options": [
        "lalu",
        "atau",
        "dan",
        "kerana"
      ],
      "correctIndex": 2,
      "explanation": "Kata hubung gabungan 'dan' menggabungkan dua perkara yang kedua-duanya wajib dipakai oleh peserta.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_03",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "L",
      "q": "Pengguna diingatkan ______ sentiasa memeriksa maklumat akaun peniaga sebelum membuat bayaran secara dalam talian.",
      "options": [
        "supaya",
        "sambil",
        "manakala",
        "kecuali"
      ],
      "correctIndex": 0,
      "explanation": "Kata hubung pancangan keterangan 'supaya' menunjukkan tujuan atau harapan tindakan yang diingatkan.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_04",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "L",
      "q": "Ibu mengunci semua tingkap di tingkat bawah, ______ ayah pula memeriksa kunci pintu pagar sebelum bertolak ke kampung.",
      "options": [
        "bahawa",
        "kerana",
        "manakala",
        "sambil"
      ],
      "correctIndex": 2,
      "explanation": "Kata hubung gabungan 'manakala' digunakan untuk menghubungkan dua perbuatan berbeza yang dilakukan oleh dua subjek berlainan pada masa yang sama.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_05",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "L",
      "q": "Pengawal keselamatan itu meronda kawasan perumahan pada waktu malam ______ memastikan tiada penceroboh masuk.",
      "options": [
        "untuk",
        "bahawa",
        "yang",
        "walaupun"
      ],
      "correctIndex": 0,
      "explanation": "Kata hubung 'untuk' melengkapkan frasa kerja yang menyatakan tujuan rondaan dijalankan.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_06",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "M",
      "q": "Risalah keselamatan itu menerangkan bahawa pengunjung taman tema perlu mematuhi had ketinggian yang ditetapkan.\n\nPerkataan 'bahawa' dalam ayat di atas ialah ______.",
      "options": [
        "kata hubung pancangan relatif",
        "kata hubung gabungan",
        "kata hubung pancangan komplemen",
        "kata hubung pancangan keterangan"
      ],
      "correctIndex": 2,
      "explanation": "Menurut Tatabahasa Dewan, 'bahawa' ialah kata hubung pancangan komplemen yang melengkapkan klausa utama.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_07",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "M",
      "q": "Nizam menutup semua suis peralatan elektrik ______ mengemas dokumen penting sebelum berpindah ke pusat pemindahan sementara.",
      "options": [
        "jika",
        "bahawa",
        "lalu",
        "tetapi"
      ],
      "correctIndex": 2,
      "explanation": "Kata hubung gabungan 'lalu' menunjukkan perbuatan yang dilakukan secara berturutan oleh subjek yang sama.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_08",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "M",
      "q": "Laluan khas ______ dibina merentasi lebuh raya itu dapat mengurangkan risiko kemalangan melibatkan gajah liar.\n\nKata hubung yang paling sesuai untuk melengkapkan ayat di atas termasuk dalam golongan ______.",
      "options": [
        "kata hubung pancangan komplemen",
        "kata hubung pancangan relatif",
        "kata hubung gabungan",
        "kata hubung pancangan keterangan"
      ],
      "correctIndex": 1,
      "explanation": "Kata hubung yang sesuai ialah 'yang', iaitu satu-satunya kata hubung pancangan relatif dalam bahasa Melayu.",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_09",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan kata hubung dengan BETULnya mengikut Tatabahasa Dewan.",
      "options": [
        "Haziq memakai topi keledar melainkan mengikat talinya dengan kemas sebelum menunggang basikal.",
        "Setiap pengguna jalan raya perlu mematuhi had laju hingga mengurangkan risiko kemalangan maut.",
        "Kerajaan membina jambatan khas itu bahawa haiwan liar dapat menyeberangi jalan raya dengan teratur.",
        "Penduduk kampung segera berpindah ke pusat pemindahan sementara apabila paras air sungai meningkat secara mendadak."
      ],
      "correctIndex": 3,
      "explanation": "Kata hubung pancangan keterangan waktu 'apabila' digunakan dengan tepatnya untuk menghubungkan klausa keterangan masa. Ayat lain salah kerana menggunakan 'melainkan' (sepatutnya 'serta'), 'bahawa' (sepatutnya 'supaya' atau 'agar'), dan 'hingga' (sepatutnya 'untuk' atau 'bagi').",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s1_10",
      "unit": "t3",
      "skill": "t3_s1",
      "diff": "H",
      "q": "Manakah antara ayat berikut yang mengandungi kata hubung pancangan keterangan?",
      "options": [
        "Farah membaca panduan keselamatan pembelian dalam talian lalu mencatat langkah pentingnya.",
        "Berita tersebut melaporkan bahawa jalan masuk ke kawasan perkelahan telah ditutup.",
        "Sarung tangan dan kasut sukan perlu disimpan di dalam lokar keselamatan.",
        "Pengunjung pantai segera beredar ke kawasan selamat apabila siren amaran tsunami berbunyi."
      ],
      "correctIndex": 3,
      "explanation": "'apabila' ialah kata hubung pancangan keterangan waktu. Pilihan A menggunakan 'dan' (gabungan), C menggunakan 'bahawa' (komplemen), dan D menggunakan 'lalu' (gabungan).",
      "ref": "Unit 7, m/s 54"
    },
    {
      "id": "d6_bm_t3_s2_01",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "L",
      "q": "\"Laluan denai ini kelihatan lebih landai berbanding dengan laluan semalam, bukan?\" tanya Aiman.\n\"______, laluan ini memang lebih selamat untuk dilalui oleh ahli kumpulan kita,\" balas ketua pendaki itu.",
      "options": [
        "Hatta",
        "Benar",
        "Maka",
        "Jua"
      ],
      "correctIndex": 1,
      "explanation": "'Benar' ialah kata pembenar yang mengesahkan penyataan Aiman. 'Hatta' dan 'Maka' ialah kata pangkal ayat, manakala 'Jua' ialah kata penegas.",
      "ref": "Unit 8, m/s 62"
    },
    {
      "id": "d6_bm_t3_s2_02",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "L",
      "q": "Pengunjung taman tema itu berjalan ______ menuju ke pintu keluar kecemasan selepas hujan lebat turun dengan tiba-tiba.",
      "options": [
        "arkian",
        "pantas",
        "sahaja",
        "betul"
      ],
      "correctIndex": 1,
      "explanation": "'pantas' dalam frasa 'berjalan pantas' berfungsi sebagai kata adverba yang menerangkan kata kerja 'berjalan'.",
      "ref": "Unit 8, m/s 61"
    },
    {
      "id": "d6_bm_t3_s2_03",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "L",
      "q": "\"Sila______ beratur mengikut garisan kuning sebelum menaiki permainan gelongsor air itu,\" pesan petugas keselamatan kepada kanak-kanak.",
      "options": [
        "-lah",
        "-kah",
        "pun",
        "-tah"
      ],
      "correctIndex": 0,
      "explanation": "Partikel '-lah' ialah kata penegas yang digunakan untuk menegaskan kata perintah 'sila'.",
      "ref": "Unit 8, m/s 61"
    },
    {
      "id": "d6_bm_t3_s2_04",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "L",
      "q": "______, kumpulan pengakap itu pun meneruskan perjalanan menuruni lereng bukit dengan berhati-hatinya.",
      "options": [
        "Sahaja",
        "Hatta",
        "Jua",
        "Betul"
      ],
      "correctIndex": 1,
      "explanation": "'Hatta' ialah kata pangkal ayat yang hadir di hadapan ayat sebagai penanda kesinambungan wacana cerita. 'Sahaja' dan 'Jua' ialah kata penegas, manakala 'Betul' ialah kata pembenar.",
      "ref": "Unit 8, m/s 62"
    },
    {
      "id": "d6_bm_t3_s2_05",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "L",
      "q": "Antara perkataan yang berikut, yang manakah merupakan kata pembenar?",
      "options": [
        "Juga",
        "Ya",
        "Alkisah",
        "Sentiasa"
      ],
      "correctIndex": 1,
      "explanation": "Tiga kata pembenar dalam bahasa Melayu ialah 'ya', 'benar', dan 'betul'. 'Juga' ialah kata penegas, 'Alkisah' ialah kata pangkal ayat, dan 'Sentiasa' ialah kata adverba.",
      "ref": "Unit 8, m/s 62"
    },
    {
      "id": "d6_bm_t3_s2_06",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "M",
      "q": "Penduduk di kawasan berisiko banjir ______ diingatkan oleh pihak berkuasa agar membuat persediaan awal sebelum musim tengkujuh.\n\nApakah kata adverba yang paling sesuai untuk melengkapkan ayat di atas?",
      "options": [
        "hatta",
        "sering",
        "sahaja",
        "hanya"
      ],
      "correctIndex": 1,
      "explanation": "'Sering' ialah kata adverba yang menerangkan kekerapan kata kerja 'diingatkan'. 'Hanya' dan 'sahaja' ialah kata penegas, manakala 'hatta' ialah kata pangkal ayat.",
      "ref": "Unit 8, m/s 61"
    },
    {
      "id": "d6_bm_t3_s2_07",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "M",
      "q": "Teliti perkataan 'Sebermula', 'pun', dan 'sentiasa' dalam tiga ayat berikut:\nI. Sebermula, masuklah pendekar itu ke kawasan hutan tebal.\nII. Apa-apa pun yang berlaku, utamakan keselamatan diri.\nIII. Murid-murid sentiasa diingatkan supaya mematuhi peraturan makmal.\n\nApakah golongan kata yang betul mengikut urutan?",
      "options": [
        "Kata pembenar, kata adverba, kata penegas",
        "Kata penegas, kata pangkal ayat, kata adverba",
        "Kata pangkal ayat, kata penegas, kata adverba",
        "Kata pangkal ayat, kata pembenar, kata adverba"
      ],
      "correctIndex": 2,
      "explanation": "'Sebermula' ialah kata pangkal ayat, 'pun' ialah kata penegas, dan 'sentiasa' ialah kata adverba yang menerangkan kata kerja 'diingatkan'.",
      "ref": "Unit 8, m/s 61–62"
    },
    {
      "id": "d6_bm_t3_s2_08",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "M",
      "q": "Dalam ayat manakah kata yang berada di dalam tanda petik tunggal merupakan kata adverba?",
      "options": [
        "Kanak-kanak itu dinasihati supaya 'sentiasa' mengutamakan keselamatan ketika bermain di taman.",
        "'Adapun' buah hutan yang berduri itu tidak boleh dimakan sesuka hati.",
        "Kejadian kemalangan itu 'jua' menjadi pengajaran kepada semua pemandu.",
        "'Ya', pintu kecemasan itu mesti bebas daripada sebarang halangan pada setiap masa."
      ],
      "correctIndex": 0,
      "explanation": "'Sentiasa' ialah kata adverba yang menerangkan kata kerja 'mengutamakan'. 'Adapun' ialah kata pangkal ayat, 'jua' ialah kata penegas, dan 'Ya' ialah kata pembenar.",
      "ref": "Unit 8, m/s 61–62"
    },
    {
      "id": "d6_bm_t3_s2_09",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "H",
      "q": "Pilih ayat yang BETUL penggunaan dan ejaan kata penegasnya mengikut Tatabahasa Dewan.",
      "options": [
        "Pengunjung tidak dibenarkan membawa botol kaca masuk ke kawasan kolam renang kah?",
        "Pasukan penyelamat itupun terus mengharungi arus banjir demi membantu warga emas yang terperangkap.",
        "Apa tah lagi persediaan yang perlu dilakukan sebelum rombongan itu bertolak ke taman negara?",
        "Penduduk di kawasan rendah itu pun segera mengemas barang keperluan sebelum paras air sungai meningkat."
      ],
      "correctIndex": 3,
      "explanation": "Kata penegas 'pun' dalam 'itu pun' mesti dieja terpisah daripada kata sebelumnya. Kesalahan pada ayat lain ialah 'renang kah' (sepatutnya 'renangkah'), 'Apa tah' (sepatutnya 'Apatah'), dan 'itupun' (sepatutnya 'itu pun').",
      "ref": "Unit 8, m/s 61"
    },
    {
      "id": "d6_bm_t3_s2_10",
      "unit": "t3",
      "skill": "t3_s2",
      "diff": "H",
      "q": "Baca petikan klasik berikut:\n\"Alkisah maka tersebutlah perkataan lima orang pengembara yang mendaki gunung yang curam. Hatta, sampailah mereka di lereng bukit yang licin. 'Benar, laluan ini amat berbahaya jika kita tidak berwaspada,' kata ketua kumpulan itu.\"\n\nManakah pernyataan yang TEPAT tentang kata tugas dalam petikan di atas?",
      "options": [
        "'Hatta' ialah kata pembenar manakala 'Alkisah' ialah kata penegas.",
        "'Alkisah' ialah kata penegas yang boleh diletakkan di hujung ayat.",
        "'Alkisah' dan 'Hatta' ialah kata pangkal ayat, manakala 'Benar' ialah kata pembenar.",
        "'Alkisah' dan 'Benar' kedua-duanya ialah kata pangkal ayat."
      ],
      "correctIndex": 2,
      "explanation": "'Alkisah' dan 'Hatta' menjadi penanda kesinambungan di pangkal ayat (kata pangkal ayat), manakala 'Benar' mengesahkan penyataan ketua kumpulan (kata pembenar).",
      "ref": "Unit 8, m/s 62"
    },
    {
      "id": "d6_bm_t3_s3_01",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "L",
      "q": "Antara perkataan yang berikut, yang manakah merupakan kata berimbuhan sisipan?",
      "options": [
        "gementar",
        "saliran",
        "kejadian",
        "berlumpur"
      ],
      "correctIndex": 0,
      "explanation": "'gementar' terbentuk daripada kata dasar 'gentar' yang disisipkan imbuhan sisipan '-em-'. 'berlumpur' berawalan, 'saliran' berakhiran, dan 'kejadian' berapitan.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_02",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "L",
      "q": "Pasukan penyelamat segera ______ tali keselamatan kepada mangsa banjir yang terperangkap di atas bumbung rumah.",
      "options": [
        "penghulur",
        "menghulurkan",
        "dihulur",
        "berhulur"
      ],
      "correctIndex": 1,
      "explanation": "Ayat aktif transitif dengan objek 'tali keselamatan' memerlukan kata kerja berimbuhan apitan 'menghulurkan'.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_03",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "L",
      "q": "Perkataan 'selamatkan' dan 'jauhi' tergolong dalam kategori kata berimbuhan ______.",
      "options": [
        "sisipan",
        "apitan",
        "awalan",
        "akhiran"
      ],
      "correctIndex": 3,
      "explanation": "'selamatkan' (selamat + -kan) dan 'jauhi' (jauh + -i) hanya menerima imbuhan akhiran di hujung kata dasar.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_04",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "L",
      "q": "Pemandu bas sekolah itu menghantar kenderaannya ke pusat pemeriksaan supaya sistem brek dan tayar dapat ______ dengan telitinya.",
      "options": [
        "diservis",
        "menyervis",
        "berservis",
        "terservis"
      ],
      "correctIndex": 0,
      "explanation": "Binaan pasif selepas 'dapat' memerlukan kata kerja berawalan 'di-' iaitu 'diservis'.",
      "ref": "Unit 9, m/s 71"
    },
    {
      "id": "d6_bm_t3_s3_05",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "L",
      "q": "Kabel elektrik yang ______ di atas jalan raya selepas ribut semalam amat berbahaya kepada orang ramai.",
      "options": [
        "menyeliratkan",
        "berselirat",
        "perseliratan",
        "diselirat"
      ],
      "correctIndex": 1,
      "explanation": "'berselirat' (ber- + selirat) bermaksud bersimpang-siur atau kusut dan tepat digunakan untuk menggambarkan keadaan kabel elektrik yang tumbang.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_06",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "M",
      "q": "Antara kelompok perkataan yang berikut, yang manakah kesemuanya ialah kata berimbuhan apitan?",
      "options": [
        "kejadian, bertaburan, membersihkan",
        "terjatuh, keselamatan, sinambung",
        "memastikan, selamatkan, pengawal",
        "peronda, laluan, kemalangan"
      ],
      "correctIndex": 0,
      "explanation": "'kejadian' (ke-...-an), 'bertaburan' (ber-...-an), dan 'membersihkan' (meN-...-kan) kesemuanya menerima imbuhan apitan.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_07",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "M",
      "q": "Pekerja majlis perbandaran sedang ______ semula garisan kuning di lintasan pejalan kaki yang telah pudar warnanya.",
      "options": [
        "mencat",
        "mengecat",
        "mengcat",
        "bercat"
      ],
      "correctIndex": 1,
      "explanation": "Kata dasar satu suku kata seperti 'cat' menerima awalan 'menge-' lalu menjadi 'mengecat'.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_08",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "M",
      "q": "Tangan Puan Salma mula ______ ketika melihat air bah naik dengan cepatnya ke halaman rumah.",
      "options": [
        "serabut",
        "sinambung",
        "gementar",
        "gemilang"
      ],
      "correctIndex": 2,
      "explanation": "'Gementar' (kata dasar 'gentar' dengan sisipan '-em-') bermaksud bergetar atau menggigil kerana takut atau cemas.",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_09",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan kata berimbuhan dengan BETULnya mengikut Tatabahasa Dewan.",
      "options": [
        "Pengunjung pantai dinasihati supaya menjauhkan kawasan ombak besar semasa musim tengkujuh.",
        "Pihak berkuasa tempatan segera membersihkan longkang yang tersumbat untuk mengelakkan banjir kilat.",
        "Anggota bomba sedang mempastikan tiada mangsa yang tertinggal di dalam bangunan.",
        "Ibu bapa perlu menasihat anak-anak tentang bahaya bermain mercun pada waktu malam."
      ],
      "correctIndex": 1,
      "explanation": "Semua perkataan berimbuhan ('membersihkan', 'tersumbat', dan 'mengelakkan') digunakan dengan tepatnya. Kesalahan imbuhan pada ayat lain ialah 'menasihat' (sepatutnya 'menasihati'), 'mempastikan' (sepatutnya 'memastikan'), dan 'menjauhkan kawasan' (sepatutnya 'menjauhi kawasan').",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s3_10",
      "unit": "t3",
      "skill": "t3_s3",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan kata berimbuhan dengan BETULnya mengikut konteks.",
      "options": [
        "Air longkang yang tersumbat itu telah dibersihkan oleh penduduk bagi melancarkan saliran air hujan.",
        "Pengurus taman rekreasi itu menasihat pengunjung agar sentiasa berwaspada di denai yang licin.",
        "Semua peserta perkhemahan perlu berkerjasama mendirikan khemah sebelum hari beransur gelap.",
        "Penduduk di lereng bukit diminta menjauhkan kawasan cerun yang retak selepas hujan lebat."
      ],
      "correctIndex": 0,
      "explanation": "Semua kata berimbuhan ('tersumbat', 'dibersihkan', 'melancarkan', dan 'saliran') digunakan dengan tepatnya. Kesalahan pada ayat lain ialah 'menjauhkan kawasan' (sepatutnya 'menjauhi kawasan'), 'menasihat' (sepatutnya 'menasihati'), dan 'berkerjasama' (sepatutnya 'bekerjasama').",
      "ref": "Unit 9, m/s 67"
    },
    {
      "id": "d6_bm_t3_s4_01",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "L",
      "q": "Pilih ayat yang mempunyai ejaan yang BETUL keseluruhannya.",
      "options": [
        "Tindakkan pantas penduduk kampung berjaya mengawal kebakaran belukar itu.",
        "Cuaca panas melampau boleh menyebabkan badan mengalami masalah dihidrasi.",
        "Penggunaan topi keledar yang menepati piawaian dapat melindungi kepala penunggang.",
        "Pihak bomba segera menjalankan pemantauan di kawasan cerun yang merbahaya itu."
      ],
      "correctIndex": 2,
      "explanation": "Semua perkataan dalam ayat tentang penggunaan topi keledar dieja dengan betulnya. Ejaan yang salah dalam ayat lain ialah 'Tindakkan' (sepatutnya 'Tindakan'), 'merbahaya' (sepatutnya 'berbahaya'), dan 'dihidrasi' (sepatutnya 'dehidrasi').",
      "ref": "Unit 9, m/s 65"
    },
    {
      "id": "d6_bm_t3_s4_02",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "L",
      "q": "Pilih ayat seruan yang menggunakan tanda baca yang BETUL.",
      "options": [
        "\"Wah! canggihnya alat pengesan asap yang baharu dipasang di makmal itu.\"",
        "\"Amboi, berhati-hatinya kamu ketika melintas jalan raya.\"",
        "\"Awas, ada tanah runtuh di lereng bukit itu\" jerit pengawal keselamatan.",
        "\"Amboi, kemasnya susunan kit kecemasan di dalam beg ini!\""
      ],
      "correctIndex": 3,
      "explanation": "Ayat seruan yang betul meletakkan tanda koma (,) selepas kata seru 'Amboi' dan tanda seru (!) di hujung ayat sebelum tanda petik penutup.",
      "ref": "Unit 9, m/s 65"
    },
    {
      "id": "d6_bm_t3_s4_03",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "L",
      "q": "Lengkapkan wacana berikut supaya mempunyai kohesi yang tepat:\n\"Penduduk di Taman Harmoni akan pulang ke kampung sempena musim perayaan. Sebelum bertolak, ______ telah mendaftarkan kediaman masing-masing dalam Kempen Rumah Selamat.\"",
      "options": [
        "ia",
        "beliau",
        "di sana",
        "mereka"
      ],
      "correctIndex": 3,
      "explanation": "Kata ganti nama diri ketiga jamak 'mereka' merujuk kembali kepada 'Penduduk di Taman Harmoni' untuk mewujudkan kohesi rujukan. 'Beliau' dan 'ia' ialah kata ganti nama tunggal, manakala 'di sana' ialah kata arah tempat.",
      "ref": "Unit 7, m/s 52"
    },
    {
      "id": "d6_bm_t3_s4_04",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "L",
      "q": "Apakah maksud 'koheren' dalam penghasilan sesuatu karangan atau catatan?",
      "options": [
        "Penggunaan tanda baca yang lengkap pada setiap hujung ayat.",
        "Penyalinan semula dialog watak tanpa sebarang pengubahsuaian.",
        "Penambahan kata imbuhan sisipan pada setiap perenggan karangan.",
        "Kesinambungan idea yang teratur dan logik dalam sesebuah wacana."
      ],
      "correctIndex": 3,
      "explanation": "Koheren merujuk kepada kesinambungan idea yang berurutan dan bermakna antara ayat dengan perenggan dalam sesebuah wacana.",
      "ref": "Unit 7, m/s 52"
    },
    {
      "id": "d6_bm_t3_s4_05",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "L",
      "q": "Pilih penanda wacana yang paling sesuai untuk menyambung idea secara koheren:\n\"Penunggang basikal perlu memeriksa brek sebelum memulakan perjalanan. ______, mereka mestilah memakai pakaian berwarna cerah agar mudah dilihat oleh pemandu lain.\"",
      "options": [
        "Namun begitu",
        "Sebaliknya",
        "Oleh sebab itu",
        "Selain itu"
      ],
      "correctIndex": 3,
      "explanation": "'Selain itu' digunakan untuk menambah maklumat atau langkah keselamatan yang selari dengan ayat sebelumnya.",
      "ref": "Unit 7, m/s 52"
    },
    {
      "id": "d6_bm_t3_s4_06",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "M",
      "q": "Baca ayat berikut:\n\"Gejala strok haba menyebabkan pesakit berasa pening, kekajangan otot, dan mual?\" jelas Pegawai Kesihatan itu.\n\nApakah dua kesalahan yang terdapat dalam ayat di atas?",
      "options": [
        "Ejaan 'haba' dan huruf besar pada 'Pegawai'",
        "Tanda petik penutup dan ejaan 'otot'",
        "Ejaan 'kekajangan' dan penggunaan tanda tanya (?)",
        "Ejaan 'pesakit' dan tanda koma selepas 'pening'"
      ],
      "correctIndex": 2,
      "explanation": "Ejaan baku ialah 'kekejangan', manakala ayat penyata dalam cakap ajuk sebelum ungkapan pengiring perlu diakhiri dengan tanda koma (,) bukan tanda tanya (?).",
      "ref": "Unit 9, m/s 65"
    },
    {
      "id": "d6_bm_t3_s4_07",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "M",
      "q": "Pilih ayat yang mengandungi kesalahan ejaan Dewan Bahasa dan Pustaka.",
      "options": [
        "Basikal baharu itu dilengkapi loceng serta lampu pemantul cahaya di bahagian belakang.",
        "Justeru, kita perlu menyemak latar belakang peniaga sebelum membeli barang dalam talian.",
        "Anggota penyelamat sentiasa bersedia menghadapi sebarang kecemasan.",
        "Murid-murid diberi taklimat tentang pelbagai langkah keselamatan disekolah sebelum lawatan bermula."
      ],
      "correctIndex": 3,
      "explanation": "Kata sendi nama 'di' yang menunjukkan tempat mestilah dieja terpisah daripada kata nama, iaitu 'di sekolah', bukan 'disekolah'.",
      "ref": "Unit 9, m/s 65"
    },
    {
      "id": "d6_bm_t3_s4_08",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "M",
      "q": "Baca petikan catatan berikut:\n\"8:00 pagi: Kami tiba di pusat pemindahan sementara dengan selamatnya. Petugas kebajikan mengagihkan selimut kepada mangsa banjir. ______ 10:00 pagi: Hujan masih turun dengan lebatnya.\"\n\nAyat manakah yang paling sesuai diisikan pada tempat kosong supaya perenggan menjadi koheren?",
      "options": [
        "Abang membeli kasut sukan baharu di kedai peralatan sukan.",
        "Selepas itu, kami mendengar taklimat keselamatan daripada ketua penyelaras pusat tersebut.",
        "Taman tema air itu menawarkan diskaun tiket kepada keluarga.",
        "Air laut di pantai sangat jernih untuk aktiviti menyelam."
      ],
      "correctIndex": 1,
      "explanation": "Pilihan B mengekalkan kesinambungan idea (koheren) tentang aktiviti mangsa banjir di pusat pemindahan sementara mengikut urutan masa.",
      "ref": "Unit 7, m/s 52"
    },
    {
      "id": "d6_bm_t3_s4_09",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "H",
      "q": "Pilih ayat cakap ajuk yang menggunakan tanda baca dan huruf besar yang BETUL keseluruhannya.",
      "options": [
        "\"Sila tutup injap utama gas jika terbau kebocoran.\" Kata pegawai bomba itu.",
        "\"Jangan hampiri tebing sungai apabila air mula keruh dan berarus deras,\" pesan datuk.",
        "\"Cepat berpindah ke tempat yang tinggi\"! Arah ketua kampung kepada penduduk.",
        "\"Mengapakah kita perlu menjauhi tiang elektrik yang tumbang,\" tanya Rina."
      ],
      "correctIndex": 1,
      "explanation": "Ayat C meletakkan tanda koma di dalam tanda petik sebelum ungkapan pengiring 'pesan datuk' yang bermula dengan huruf kecil.",
      "ref": "Unit 9, m/s 65"
    },
    {
      "id": "d6_bm_t3_s4_10",
      "unit": "t3",
      "skill": "t3_s4",
      "diff": "H",
      "q": "Teliti dua ayat di bawah:\n\"Kumpulan pendaki itu membawa peta serta alat kompas ke dalam hutan. Peralatan ______ amat berguna sekiranya ______ tersesat dari laluan asal.\"\n\nApakah dua unsur kohesi rujukan yang paling tepat untuk melengkapkan wacana tersebut?",
      "options": [
        "ini ... beliau",
        "tersebut ... mereka",
        "tersebut ... ia",
        "itu ... engkau"
      ],
      "correctIndex": 1,
      "explanation": "'tersebut' merujuk kembali kepada 'peta serta alat kompas' yang baru disebut, manakala 'mereka' merujuk kepada 'Kumpulan pendaki itu'.",
      "ref": "Unit 7, m/s 52"
    },
    {
      "id": "d6_bm_t3_s5_01",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "L",
      "q": "Kes penipuan belian dalam talian semakin membimbangkan apabila ramai pembeli terpedaya dengan harga jualan yang terlalu murah. Pihak berkuasa menasihati pengguna agar menyemak nombor akaun bank peniaga melalui portal rasmi sebelum membuat sebarang pindahan wang. Selain itu, pembeli perlu menyimpan resit pembayaran digital sebagai bukti sekiranya berlaku sebarang masalah. Pembeli juga tidak boleh berkongsi kata laluan perbankan atau kod pengesahan dengan pihak ketiga.\n\nBerdasarkan petikan, apakah langkah awal yang perlu diambil oleh pengguna sebelum memindahkan wang kepada peniaga?",
      "options": [
        "Berkongsi kod pengesahan bank dengan rakan terdekat.",
        "Memadamkan resit pembayaran digital selepas barang diterima.",
        "Membeli barang yang ditawarkan pada harga paling murah.",
        "Menyemak nombor akaun bank peniaga melalui portal rasmi."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa pengguna dinasihati menyemak nombor akaun bank peniaga melalui portal rasmi sebelum membuat pindahan wang.",
      "ref": "Unit 7, m/s 50–51"
    },
    {
      "id": "d6_bm_t3_s5_02",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "L",
      "q": "Papan tanda di tepi lebuh raya itu tertera kata-kata hikmat 'Pandu cermat jiwa selamat'. Apakah maksud utama kata-kata hikmat tersebut?",
      "options": [
        "Kenderaan baharu tidak memerlukan pemeriksaan keselamatan sebelum perjalanan jauh.",
        "Sikap berhati-hati semasa memandu dapat mengelakkan kemalangan dan menyelamatkan nyawa.",
        "Pemandu digalakkan memandu dengan lajunya supaya cepat tiba di destinasi.",
        "Penumpang sahaja yang perlu bertanggungjawab menjaga keselamatan di jalan raya."
      ],
      "correctIndex": 1,
      "explanation": "Kata-kata hikmat 'Pandu cermat jiwa selamat' menegaskan bahawa pemanduan berhemah dan berhati-hati dapat melindungi nyawa pengguna jalan raya.",
      "ref": "Unit 7, m/s 53; Unit 8, m/s 60"
    },
    {
      "id": "d6_bm_t3_s5_03",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "L",
      "q": "Apabila paras air sungai meningkat akibat hujan berterusan, penduduk di kawasan rendah diarahkan supaya segera berpindah ke pusat pemindahan sementara pada waktu siang. Sebelum meninggalkan rumah, ketua keluarga mestilah mematikan semua suis utama bekalan elektrik dan menyimpan dokumen penting di dalam bekas kalis air. Ketika berada di kawasan banjir, kanak-kanak dilarang keras bermain air atau menghampiri tiang elektrik yang tumbang. Langkah ini penting bagi mengelakkan risiko renjatan elektrik serta penyakit bawaan air.\n\nMengapakah suis utama bekalan elektrik perlu dimatikan sebelum berpindah ke pusat pemindahan sementara?",
      "options": [
        "Agar penduduk dapat berpindah ke pusat pemindahan pada waktu malam.",
        "Supaya dokumen penting tidak rosak terkena air hujan.",
        "Bagi mengelakkan risiko bahaya seperti renjatan elektrik apabila rumah dinaiki air.",
        "Untuk menjimatkan bil elektrik sepanjang musim tengkujuh."
      ],
      "correctIndex": 2,
      "explanation": "Petikan menjelaskan bahawa langkah keselamatan sebelum dan semasa banjir diambil bagi mengelakkan risiko renjatan elektrik apabila air melimpah.",
      "ref": "Unit 9, m/s 64"
    },
    {
      "id": "d6_bm_t3_s5_04",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "L",
      "q": "Penduduk kampung berganding bahu membersihkan longkang yang tersumbat sebelum musim tengkujuh tiba. Sikap berwaspada ini bertepatan dengan peribahasa ______.",
      "options": [
        "keras kepala",
        "lambat seperti siput",
        "bagai telur di hujung tanduk",
        "sediakan payung sebelum hujan"
      ],
      "correctIndex": 3,
      "explanation": "'sediakan payung sebelum hujan' bermaksud bersiap sedia lebih awal sebelum ditimpa kesusahan atau bencana.",
      "ref": "Unit 9, m/s 64, 66"
    },
    {
      "id": "d6_bm_t3_s5_05",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "L",
      "q": "Penduduk kampung yang tinggal berhampiran dengan tebing sungai yang mula terhakis itu berada dalam keadaan yang amat genting dan berbahaya, ______.\n\nPilih peribahasa yang paling sesuai untuk melengkapkan ayat di atas.",
      "options": [
        "ringan tulang",
        "bagai telur di hujung tanduk",
        "seperti katak di bawah tempurung",
        "bagai aur dengan tebing"
      ],
      "correctIndex": 1,
      "explanation": "'Bagai telur di hujung tanduk' ialah peribahasa yang bermaksud berada dalam keadaan yang sangat berbahaya atau genting.",
      "ref": "Unit 9, m/s 66"
    },
    {
      "id": "d6_bm_t3_s5_06",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "M",
      "q": "Jika gegaran gempa bumi berlaku semasa anda berada di dalam bangunan sekolah, murid-murid dinasihati agar kekal bertenang dan tidak panik. Segera tunduk dan berlindung di bawah meja yang kukuh sambil melindungi kepala serta muka dengan kedua-dua belah tangan. Jauhi tingkap kaca, rak buku yang tinggi, dan objek berat yang mudah jatuh. Setelah gegaran berhenti sepenuhnya, keluarlah dari bangunan menggunakan tangga mengikut laluan kecemasan dan berkumpul di padang yang lapang.\n\nBerdasarkan petikan, apakah tindakan yang perlu dilakukan sebaik-baik sahaja gegaran berhenti?",
      "options": [
        "Membuka semua tingkap kaca untuk melihat keadaan di luar bangunan.",
        "Keluar menggunakan tangga melalui laluan kecemasan dan berkumpul di padang yang lapang.",
        "Terus bersembunyi di bawah meja sehingga waktu persekolahan tamat.",
        "Mengemas semua buku di atas rak yang tinggi terlebih dahulu."
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan dengan jelasnya bahawa setelah gegaran berhenti sepenuhnya, murid perlu keluar menggunakan tangga mengikut laluan kecemasan ke padang yang lapang.",
      "ref": "Unit 9, m/s 70"
    },
    {
      "id": "d6_bm_t3_s5_07",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "M",
      "q": "Walaupun siren amaran kepala air sudah berbunyi, segelintir pengunjung masih enggan meninggalkan tebing sungai kerana leka mengambil gambar.\n\nPeribahasa manakah yang paling tepat menggambarkan sikap pengunjung yang degil itu serta bahaya yang bakal menimpa mereka?",
      "options": [
        "Ambil berat ... seperti enau dalam belukar",
        "Bersatu hati ... bagai isi dengan kuku",
        "Keras kepala ... bagai telur di hujung tanduk",
        "Ringan tulang ... malang tidak berbau"
      ],
      "correctIndex": 2,
      "explanation": "'Keras kepala' bermaksud degil dan tidak mahu mendengar nasihat, manakala 'bagai telur di hujung tanduk' menggambarkan keadaan yang sangat berbahaya atau genting.",
      "ref": "Unit 9, m/s 66"
    },
    {
      "id": "d6_bm_t3_s5_08",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "M",
      "q": "Penubuhan Pasukan Bomba Komuniti Orang Asli di kawasan pedalaman bertujuan menjadi penggerak awal apabila berlaku kes kecemasan seperti kebakaran dan bencana banjir. Lokasi penempatan yang jauh di kawasan berbukit menyebabkan jentera bomba dari bandar mengambil masa yang lebih lama untuk tiba. Oleh itu, ahli pasukan komuniti dilatih oleh Jabatan Bomba dan Penyelamat Malaysia untuk memadamkan api peringkat awal serta menggunakan radio amatur bagi memohon bantuan unit udara. Pengalaman mereka memahami selok-belok hutan juga amat membantu kelancaran operasi menyelamat.\n\nApakah peranan utama Pasukan Bomba Komuniti Orang Asli berdasarkan petikan?",
      "options": [
        "Bertindak sebagai penggerak awal mengawal kebakaran dan kecemasan sebelum bantuan tiba.",
        "Mengawal jentera bomba berat dari bandar ke kawasan perumahan.",
        "Menggantikan sepenuhnya tugas anggota bomba di kawasan bandar besar.",
        "Membina jalan raya baharu merentasi kawasan berbukit di pedalaman."
      ],
      "correctIndex": 0,
      "explanation": "Petikan menyatakan bahawa pasukan ini menjadi penggerak awal untuk melakukan tindakan pencegahan dan kawalan kecemasan sementara menunggu ketibaan pihak bomba.",
      "ref": "Bacaan Luas, m/s 72"
    },
    {
      "id": "d6_bm_t3_s5_09",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "H",
      "q": "Baca situasi berikut:\n\"Semasa pulang dari sekolah, Amirul ternampak sebuah kereta dipandu laju di kawasan lintasan pelajar walaupun papan tanda had laju telah dipasang. Pak Cik Samad menegur sikap pemandu tersebut kerana bahaya boleh menimpa sesiapa sahaja pada bila-bila masa.\"\n\nKombinasi peribahasa dan kata-kata hikmat yang paling tepat untuk menggambarkan teguran Pak Cik Samad ialah ______.",
      "options": [
        "'lambat seperti siput' dan 'masa itu emas'",
        "'ringan tulang' dan 'membaca jambatan ilmu'",
        "'malang tidak berbau' dan 'pandu cermat jiwa selamat'",
        "'bagai aur dengan tebing' dan 'bahasa jiwa bangsa'"
      ],
      "correctIndex": 2,
      "explanation": "'Malang tidak berbau' bermaksud kecelakaan boleh berlaku secara tiba-tiba tanpa amaran, manakala kata-kata hikmat 'pandu cermat jiwa selamat' menegaskan kepentingan memandu dengan berhati-hati demi keselamatan nyawa.",
      "ref": "Unit 7, m/s 53; Unit 9, m/s 66"
    },
    {
      "id": "d6_bm_t3_s5_10",
      "unit": "t3",
      "skill": "t3_s5",
      "diff": "H",
      "q": "Ketika berjalan pulang melalui lorong sunyi, Mei Ling dan rakan-rakannya terbau asap tebal dari kawasan belukar di tepi jalan. Mereka mendapati api mula menyambar rumput kering dan semakin marak kerana angin bertiup agak kencang. Mei Ling teringat akan kawasan perumahan yang terletak hanya beberapa puluh meter dari belukar tersebut. Tanpa berlengah, Mei Ling segera mengeluarkan telefon bimbitnya untuk bertindak.\n\nBerdasarkan petikan, apakah ramalan tindakan paling wajar dan selamat yang akan dilakukan oleh Mei Ling?",
      "options": [
        "Menghubungi talian kecemasan 999 dari jarak yang selamat serta memaklumkan kejadian itu kepada penduduk berhampiran.",
        "Merakam video kebakaran dari jarak dekat untuk dimuat naik ke media sosial terlebih dahulu.",
        "Menunggu di tepi belukar sehingga api padam dengan sendirinya sebelum pulang ke rumah.",
        "Mendekati belukar yang terbakar itu untuk memadamkan api seorang diri menggunakan ranting kayu."
      ],
      "correctIndex": 0,
      "explanation": "Dalam situasi kebakaran belukar yang marak berhampiran kawasan perumahan, tindakan paling selamat ialah menghubungi talian kecemasan 999 dari jarak selamat dan memberi amaran kepada penduduk.",
      "ref": "Unit 8, m/s 57"
    },
    {
      "id": "d6_bm_t4_s1_01",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "L",
      "q": "Antara yang berikut, yang manakah merupakan kata majmuk kiasan (simpulan bahasa)?",
      "options": [
        "jam tangan",
        "balai raya",
        "buah tangan",
        "urus setia"
      ],
      "correctIndex": 2,
      "explanation": "'buah tangan' ialah kata majmuk kiasan yang bermaksud hadiah atau ole-ole. 'jam tangan' dan 'balai raya' ialah rangkai kata bebas, manakala 'urus setia' ialah istilah khusus.",
      "ref": "Unit 11, m/s 86"
    },
    {
      "id": "d6_bm_t4_s1_02",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "L",
      "q": "Encik Muthu membawa pulang sekotak kuih tradisional sebagai ______ untuk jirannya yang berbangsa Melayu selepas menghadiri jamuan.",
      "options": [
        "anak emas",
        "buah tangan",
        "kaki bola",
        "pilih kasih"
      ],
      "correctIndex": 1,
      "explanation": "'buah tangan' bermaksud barang atau makanan yang dibawa sebagai pemberian ketika mengunjungi seseorang.",
      "ref": "Unit 11, m/s 86"
    },
    {
      "id": "d6_bm_t4_s1_03",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "L",
      "q": "Semua ahli kelab bola sepak sekolah itu dilayan secara adil oleh jurulatih tanpa sikap ______ walaupun berlainan kaum.",
      "options": [
        "kaki ayam",
        "manis mulut",
        "pilih kasih",
        "ringan tulang"
      ],
      "correctIndex": 2,
      "explanation": "'pilih kasih' bermaksud bersikap berat sebelah atau melebihkan seseorang berbanding orang lain.",
      "ref": "Unit 12, m/s 92"
    },
    {
      "id": "d6_bm_t4_s1_05",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "L",
      "q": "Sukarelawan daripada pelbagai kaum telah bergotong-royong mengecat ______ di Taman Harmoni menjelang sambutan Hari Kebangsaan.",
      "options": [
        "balai raya",
        "darah panas",
        "kaki bola",
        "garis pusat"
      ],
      "correctIndex": 0,
      "explanation": "'balai raya' ialah kata majmuk rangkai kata bebas yang merujuk kepada bangunan tempat penduduk kampung atau taman bermesyuarat dan berkumpul.",
      "ref": "Unit 11, m/s 86"
    },
    {
      "id": "d6_bm_t4_s1_06",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "M",
      "q": "Pilih pasangan kata majmuk yang BETUL ejaannya mengikut sistem ejaan kata majmuk mantap Dewan Bahasa dan Pustaka.",
      "options": [
        "bandaraya, setiausaha",
        "terimakasih, jawatankuasa",
        "tanggung jawab, sukarela",
        "kerjasama, warganegara"
      ],
      "correctIndex": 3,
      "explanation": "'kerjasama' dan 'warganegara' ialah antara 15 kata majmuk mantap yang dieja rapat. 'bandaraya' dan 'terimakasih' salah (sepatutnya 'bandar raya', 'terima kasih'), manakala 'tanggung jawab' sepatutnya dieja rapat ('tanggungjawab').",
      "ref": "Unit 12, m/s 92"
    },
    {
      "id": "d6_bm_t4_s1_07",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "M",
      "q": "Baca perenggan pendek berikut:\n\"Ahli jawatankuasa Minggu Citra Malaysia mengadakan mesyuarat pada pukul lapan pagi. Puan Salma selaku ketua urus setia meletakkan buah tangan untuk rakan-rakan di atas meja tulis di bilik mesyuarat.\"\n\nPengelasan yang betul bagi kata majmuk 'meja tulis', 'urus setia', dan 'buah tangan' ialah ______.",
      "options": [
        "kiasan, istilah khusus, rangkai kata bebas",
        "rangkai kata bebas, kiasan, istilah khusus",
        "istilah khusus, rangkai kata bebas, kiasan",
        "rangkai kata bebas, istilah khusus, kiasan"
      ],
      "correctIndex": 3,
      "explanation": "'meja tulis' ialah kata majmuk rangkai kata bebas, 'urus setia' ialah kata majmuk istilah khusus, dan 'buah tangan' ialah kata majmuk kiasan (pemberian atau hadiah yang dibawa ketika berkunjung).",
      "ref": "Unit 11, m/s 86"
    },
    {
      "id": "d6_bm_t4_s1_08",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "M",
      "q": "Pilih kata majmuk yang menerima imbuhan dengan ejaan yang BETUL.",
      "options": [
        "menyatupadu",
        "menyatupadukan",
        "mengubah suaian",
        "mengambilalih"
      ],
      "correctIndex": 1,
      "explanation": "Apabila kata majmuk menerima imbuhan apitan seperti 'meN-...-kan', ejaannya dicantumkan menjadi satu perkataan iaitu 'menyatupadukan'.",
      "ref": "Unit 12, m/s 89, 96"
    },
    {
      "id": "d6_bm_t4_s1_09",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan bentuk penggandaan kata majmuk yang BETUL mengikut Tatabahasa Dewan.",
      "options": [
        "Balai-balai raya dan pusat-pusat sumber di kawasan itu digunakan untuk aktiviti kemasyarakatan.",
        "Penduduk kampung berkerjasama membersihkan balai raya-balai raya di taman perumahan.",
        "Peserta sukan membawa alat tulis-alat tulis untuk melukis sepanduk perpaduan.",
        "Wakil rakyat serta setia-setiausaha badan amal menghadiri majlis rumah terbuka."
      ],
      "correctIndex": 0,
      "explanation": "Penggandaan kata majmuk biasa hanya menggandakan unsur pertama ('balai-balai raya', 'pusat-pusat sumber'). Kata majmuk mantap pula digandakan keseluruhannya ('setiausaha-setiausaha', bukan 'setia-setiausaha').",
      "ref": "Unit 11, m/s 86; Pengayaan, m/s 94"
    },
    {
      "id": "d6_bm_t4_s1_10",
      "unit": "t4",
      "skill": "t4_s1",
      "diff": "H",
      "q": "Manakah antara ayat berikut yang mengandungi kata majmuk terbitan yang dieja dengan BETULnya?",
      "options": [
        "Semua peserta perlu menanda tangani borang kebenaran sebelum menyertai perkhemahan.",
        "Ahli kelab muzik itu berkerjasama menjayakan persembahan lagu rakyat pelbagai kaum.",
        "Jawatankuasa program telah mengambilalih tugas pendaftaran peserta larian amal.",
        "Penduduk Taman Muhibah sepakat mengubah suai kedai lama menjadi pusat bacaan komuniti."
      ],
      "correctIndex": 3,
      "explanation": "Kata majmuk yang hanya menerima awalan 'meN-' tetap dieja terpisah seperti 'mengubah suai' dan 'mengambil alih' (maka 'mengambilalih' salah). 'Berkerjasama' salah kerana bentuk bakunya ialah 'bekerjasama', manakala 'menanda tangani' salah kerana kata majmuk mantap 'tandatangan' dengan apitan 'meN-...-i' dieja rapat sebagai 'menandatangani'.",
      "ref": "Unit 11, m/s 81; Unit 12, m/s 92"
    },
    {
      "id": "d6_bm_t4_s2_01",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "L",
      "q": "Ibu bapa sewajarnya ______ anak-anak agar berkawan mesra dengan rakan berbilang kaum sejak kecil.",
      "options": [
        "digalakkan",
        "galakan",
        "menggalakkan",
        "mengalakkan"
      ],
      "correctIndex": 2,
      "explanation": "Kata kerja transitif aktif yang betul daripada kata dasar 'galak' dengan apitan 'meN-...-kan' ialah 'menggalakkan'. 'Mengalakkan' salah ejaan, 'galakan' ialah kata nama, dan 'digalakkan' ialah kata kerja pasif.",
      "ref": "Unit 10, m/s 78"
    },
    {
      "id": "d6_bm_t4_s2_02",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "L",
      "q": "Program Malam Kebudayaan itu disertai oleh murid ______ pelbagai kaum di sekolah kami.",
      "options": [
        "kepada",
        "dari",
        "daripada",
        "untuk"
      ],
      "correctIndex": 2,
      "explanation": "Kata sendi nama 'daripada' digunakan untuk menyatakan punca atau asal bagi manusia, manakala 'dari' digunakan untuk arah, tempat, dan masa.",
      "ref": "Unit 10, m/s 75"
    },
    {
      "id": "d6_bm_t4_s2_03",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "L",
      "q": "Guru besar sentiasa ______ murid-murid menyertai pasukan beruniform bagi memupuk semangat muhibah.",
      "options": [
        "menggalakkan",
        "bergalakkan",
        "digalakkan",
        "mengalakan"
      ],
      "correctIndex": 0,
      "explanation": "Kata dasar 'galak' apabila menerima apitan 'meN-...-kan' akan dieja dengan dua huruf 'g' dan dua huruf 'k' menjadi 'menggalakkan'.",
      "ref": "Unit 10, m/s 78"
    },
    {
      "id": "d6_bm_t4_s2_04",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "L",
      "q": "Usaha murid pelbagai kaum berganding bahu membersihkan surau dan balai raya itu ______ sangat murni serta wajar dicontohi.",
      "options": [
        "merupakan",
        "adalah",
        "ialah",
        "iaitu"
      ],
      "correctIndex": 1,
      "explanation": "Kata pemeri 'adalah' digunakan di hadapan frasa adjektif ('sangat murni') atau frasa sendi nama. 'Ialah' dan 'merupakan' hanya hadir di hadapan frasa nama, manakala 'iaitu' ialah kata hubung penerangan.",
      "ref": "Unit 10, m/s 78"
    },
    {
      "id": "d6_bm_t4_s2_05",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "L",
      "q": "Amalan kunjung-mengunjungi pada hari perayaan dapat ______ perasaan syak wasangka dalam kalangan jiran tetangga.",
      "options": [
        "mengelakkan",
        "mengelakan",
        "terelak",
        "dielakkan"
      ],
      "correctIndex": 0,
      "explanation": "Kata dasar 'elak' yang menerima apitan 'meN-...-kan' dieja dengan dua huruf 'k' menjadi 'mengelakkan' dan berfungsi sebagai kata kerja transitif aktif yang tepat bagi ayat tersebut.",
      "ref": "Penilaian, m/s 96"
    },
    {
      "id": "d6_bm_t4_s2_06",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "M",
      "q": "Teliti ayat berikut yang mengandungi dua kesalahan ejaan kata terbitan:\n\"Penduduk taman perumahan itu berkerjasama membersihkan kawasan padang menjelang program pekhemahan belia.\"\n\nPemurnian yang paling tepat bagi dua perkataan yang salah itu ialah ______.",
      "options": [
        "'berkerjasama' -> 'mengerjasamakan', 'pekhemahan' -> 'dikhemahkan'",
        "'berkerjasama' -> 'bekerjasama', 'pekhemahan' -> 'perkhemahan'",
        "'berkerjasama' -> 'dikerjasamakan', 'pekhemahan' -> 'berkhemahan'",
        "'berkerjasama' -> 'sekerjasama', 'pekhemahan' -> 'khemah-khemah'"
      ],
      "correctIndex": 1,
      "explanation": "Awalan 'beR-' pada kata 'kerja' mengalami pengguguran 'r' menjadi 'bekerjasama', manakala kata nama terbitan bagi aktiviti berkhemah dieja 'perkhemahan' dengan awalan 'per-'.",
      "ref": "Unit 10, m/s 78; Unit 12, m/s 92"
    },
    {
      "id": "d6_bm_t4_s2_07",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "M",
      "q": "Baca ayat berikut:\n\"Kami berharapkan agar sukan rakyat yang diadakan di padang sekolah dapat memupuk perpaduan kaum.\"\n\nApakah pembetulan yang paling tepat bagi kesalahan imbuhan dalam ayat tersebut?",
      "options": [
        "Menukar 'berharapkan' kepada 'berharap'",
        "Menukar 'diadakan' kepada 'mengadakan'",
        "Menukar 'memupuk' kepada 'dipupuk'",
        "Menukar 'berharapkan' kepada 'diharapkan'"
      ],
      "correctIndex": 0,
      "explanation": "Kata kerja 'berharapkan' hanya digunakan bersama objek frasa nama (contohnya 'berharapkan bantuan'), bukannya di hadapan kata hubung 'agar'. Sebelum klausa yang bermula dengan 'agar', kata kerja tak transitif 'berharap' hendaklah digunakan.",
      "ref": "Unit 10, m/s 78"
    },
    {
      "id": "d6_bm_t4_s2_08",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "M",
      "q": "Pilih ayat yang BETUL penggunaan kata pemeri ('ialah' atau 'adalah') mengikut Tatabahasa Dewan.",
      "options": [
        "Hadiah sagu hati tersebut ialah daripada pihak penganjur program komuniti.",
        "Berita tentang kejayaan pasukan tarian sekolah itu ialah amat membanggakan.",
        "Persembahan tarian tradisional itu ialah acara kemuncak dalam Minggu Citra Malaysia.",
        "Ketua urus setia majlis perpaduan itu adalah Encik Ismail bin Zakaria."
      ],
      "correctIndex": 2,
      "explanation": "Kata pemeri 'ialah' digunakan di hadapan frasa nama ('acara kemuncak dalam Minggu Citra Malaysia'). Penggunaan 'ialah' di hadapan frasa adjektif ('amat membanggakan') atau frasa sendi nama ('daripada pihak penganjur') adalah salah, manakala 'adalah' tidak boleh hadir di hadapan frasa nama ('Encik Ismail bin Zakaria').",
      "ref": "Unit 10, m/s 78; Penilaian, m/s 96"
    },
    {
      "id": "d6_bm_t4_s2_10",
      "unit": "t4",
      "skill": "t4_s2",
      "diff": "H",
      "q": "Teliti petikan pendek berikut yang mengandungi dua kesalahan bahasa:\n\"Inisiatif menyemai perpaduan perlu mula sejak usia muda melalui kegiatan luar darjah seperti pekhemahan antara sekolah.\"\n\nManakah pasangan pembetulan yang paling tepat?",
      "options": [
        "'mula' -> 'bermula', 'pekhemahan' -> 'perkhemahan'",
        "'mula' -> 'dimula', 'pekhemahan' -> 'berkhemahan'",
        "'mula' -> 'memula', 'pekhemahan' -> 'dikhemahkan'",
        "'mula' -> 'permulaan', 'pekhemahan' -> 'khemahan'"
      ],
      "correctIndex": 0,
      "explanation": "Selepas kata bantu 'perlu', kata kerja tak transitif yang betul ialah 'bermula', manakala kata nama terbitan bagi aktiviti berkhemah dieja 'perkhemahan' dengan awalan 'per-'.",
      "ref": "Unit 10, m/s 78"
    },
    {
      "id": "d6_bm_t4_s3_01",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "L",
      "q": "Baca rangkap pantun berikut:\n\nPergi ke pekan membeli halia,\nSinggah sebentar di gerai nyonya;\nHidup bermuafakat amalan mulia,\nAgar harmoni kekal selamanya.\n\nApakah mesej utama yang disampaikan dalam rangkap pantun di atas?",
      "options": [
        "Sikap bermuafakat merupakan amalan terpuji untuk mengekalkan keharmonian hidup.",
        "Kita digalakkan membeli halia di pekan pada setiap hujung minggu.",
        "Keharmonian hidup hanya dapat dicapai melalui aktiviti perniagaan.",
        "Gerai makanan di pekan sering dikunjungi oleh penduduk kampung."
      ],
      "correctIndex": 0,
      "explanation": "Mesej pantun terletak pada dua baris maksud (baris 3 dan 4) yang menyeru masyarakat mengamalkan muafakat demi keharmonian.",
      "ref": "Unit 11, m/s 85"
    },
    {
      "id": "d6_bm_t4_s3_02",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "L",
      "q": "\"Walaupun penduduk di taman ini berbeza budaya dan agama, semua keputusan tentang kebersihan kawasan diputuskan secara perbincangan bersama.\"\n\nPeribahasa manakah yang paling sesuai dengan situasi di atas?",
      "options": [
        "Retak menanti belah",
        "Bulat air kerana pembetung, bulat manusia kerana muafakat",
        "Bagai enau dalam belukar, melepaskan pucuk masing-masing",
        "Menangguk di air keruh"
      ],
      "correctIndex": 1,
      "explanation": "'Bulat air kerana pembetung, bulat manusia kerana muafakat' bermaksud kata sepakat yang dicapai melalui permesyuaratan atau perbincangan bersama.",
      "ref": "Unit 10, m/s 79"
    },
    {
      "id": "d6_bm_t4_s3_03",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "L",
      "q": "Baca rangkap syair berikut:\n\nWahai sahabat seia sekata,\nBuangkan jauh sengketa dan dusta,\nKasih disemai di dalam cinta,\nAman sentosa negara kita.\n\nApakah pengajaran utama daripada rangkap syair di atas?",
      "options": [
        "Kita mestilah menjauhi permusuhan dan menyemai kasih sayang demi keamanan negara.",
        "Kita perlu mengasingkan diri daripada jiran yang berbeza pendapat.",
        "Kita haruslah bercakap dengan nada yang kuat ketika berbincang dengan sahabat.",
        "Kita hendaklah bersaing untuk menjadi juara dalam setiap pertandingan."
      ],
      "correctIndex": 0,
      "explanation": "Syair tersebut menasihati sahabat agar menjauhi sengketa dan dusta serta menyemai kasih sayang supaya negara kekal aman sentosa.",
      "ref": "Unit 11, m/s 84"
    },
    {
      "id": "d6_bm_t4_s3_04",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "L",
      "q": "Baca rangkap pantun berikut:\n\nTumbuh subur pohon kuini,\nTempat berteduh di waktu petang;\nHidup berjiran saling menyantuni,\nSusah senang sama ditatang.\n\nPeribahasa 'berat sama dipikul, ringan sama dijinjing' yang sejajar dengan maksud pantun di atas bererti ______.",
      "options": [
        "bekerjasama dan saling membantu dalam menghadapi susah mahupun senang",
        "membuat kerja pada waktu petang supaya cepat selesai",
        "mengambil kesempatan atas kesusahan yang dialami oleh rakan",
        "mengangkat barang yang berat seorang diri tanpa meminta bantuan"
      ],
      "correctIndex": 0,
      "explanation": "Peribahasa 'berat sama dipikul, ringan sama dijinjing' bermaksud kesusahan dan kesenangan dihadapi bersama-sama melalui semangat kerjasama dan bantu-membantu.",
      "ref": "Unit 10, m/s 79"
    },
    {
      "id": "d6_bm_t4_s3_05",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "L",
      "q": "Baca petikan sajak berikut:\n\nKita umpama seberkas lidi,\nTeguh berpadu tidak mudah patah,\nMenghadapi cabaran bersama-sama.\n\nMengapakah penyajak mengibaratkan perpaduan masyarakat seperti 'seberkas lidi'?",
      "options": [
        "Kerana setiap individu perlu hidup bersendirian tanpa bergantung pada orang lain.",
        "Kerana seberkas lidi hanya digunakan untuk menyapu halaman sekolah.",
        "Kerana bersatu padu menjadikan masyarakat kuat dan tidak mudah dikalahkan.",
        "Kerana sebatang lidi lebih kukuh berbanding banyak batang lidi yang diikat."
      ],
      "correctIndex": 2,
      "explanation": "Sebatang lidi mudah dipatahkan, tetapi apabila diikat menjadi seberkas, lidi menjadi sangat kuat—melambangkan kekuatan rakyat yang bersatu padu.",
      "ref": "Unit 12, m/s 91"
    },
    {
      "id": "d6_bm_t4_s3_06",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "M",
      "q": "Teliti rangkap pantun empat kerat berikut:\n\nIndah sungguh pohon cemara,\nTumbuh subur di tepi kali;\nHidup bersatu rakyat sejahtera,\nBudi bahasa diamalkan sekali.\n\nApakah rima akhir dan bahagian maksud bagi pantun di atas?",
      "options": [
        "Rima akhir a-b-b-a; maksudnya pada baris 2 dan 3.",
        "Rima akhir a-a-a-a; maksudnya pada baris 1 dan 2.",
        "Rima akhir a-a-b-b; maksudnya pada baris 1 hingga 4.",
        "Rima akhir a-b-a-b; maksudnya pada baris 3 dan 4."
      ],
      "correctIndex": 3,
      "explanation": "Pantun empat kerat berima akhir berselang a-b-a-b ('cemara'/'sejahtera', 'kali'/'sekali'), dengan baris 1–2 sebagai pembayang dan baris 3–4 sebagai maksud.",
      "ref": "Unit 11, m/s 85"
    },
    {
      "id": "d6_bm_t4_s3_07",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "M",
      "q": "Baca rangkap seloka berikut:\n\nUsah menangguk di air keruh,\nTatkala kawan sedang berduka,\nHulurkan tangan biarlah teguh,\nBantu-membantu tanpa mengira bangsa.\n\nApakah sikap yang ditegah oleh penyair dalam baris pertama seloka di atas?",
      "options": [
        "Mengambil kesempatan mencari keuntungan ketika orang lain dalam kesusahan.",
        "Menghulurkan derma kepada mangsa bencana alam.",
        "Berbincang secara baik apabila timbul salah faham.",
        "Membersihkan sungai yang tercemar bersama penduduk kampung."
      ],
      "correctIndex": 0,
      "explanation": "Peribahasa 'menangguk di air keruh' bermaksud mengambil kesempatan atau mencari keuntungan ketika orang lain berada dalam kesusahan atau kekacauan.",
      "ref": "Unit 10, m/s 79"
    },
    {
      "id": "d6_bm_t4_s3_08",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "M",
      "q": "Perpaduan dalam pasukan bola sepak sekolah mula goyah akibat sikap beberapa orang pemain yang saling menyalahkan selepas tewas dalam perlawanan pertama.\n\nJika keadaan ini berterusan, situasi tersebut boleh diibaratkan sebagai '______', dan sekiranya satu pihak terus bermusuhan, seluruh pasukan akan musnah '______'.",
      "options": [
        "bagai retak menanti belah ... ibarat telur sesangkak, pecah sebiji, pecah semuanya",
        "bukit sama didaki, lurah sama dituruni ... bersatu kita teguh",
        "bagai aur dengan tebing ... melentur buluh biarlah dari rebungnya",
        "bagai kacang lupakan kulit ... air dicencang tidak akan putus"
      ],
      "correctIndex": 0,
      "explanation": "'bagai retak menanti belah' bermaksud perselisihan yang hampir mencetuskan perpecahan besar, manakala 'ibarat telur sesangkak, pecah sebiji, pecah semuanya' bermaksud kesatuan akan musnah apabila ahli berpecah.",
      "ref": "Unit 10, m/s 76, 79"
    },
    {
      "id": "d6_bm_t4_s3_09",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "H",
      "q": "Baca kedua-dua rangkap puisi tradisional berikut:\n\nPuisi X:\nDengarlah tuan satu nasihat,\nHidup berjiran janganlah liat,\nTolong-menolong amalan sihat,\nPasti tercapai segala hajat.\n\nPuisi Y:\nBunga melati di tepi laman,\nDipetik gadis di hujung desa;\nHormati rakan serta teman,\nHidup harmoni sepanjang masa.\n\nManakah perbandingan bentuk yang TEPAT antara Puisi X dengan Puisi Y?",
      "options": [
        "Puisi X ialah pantun empat kerat yang mempunyai pembayang pada baris awal, manakala Puisi Y ialah syair berima a-b-a-b.",
        "Puisi X ialah syair yang berima akhir a-a-a-a dan kesemua barisnya membawa isi, manakala Puisi Y ialah pantun yang mempunyai pembayang dan maksud.",
        "Kedua-dua Puisi X dan Puisi Y ialah sajak moden yang tidak terikat pada sebarang pola rima akhir.",
        "Puisi X ialah seloka yang bersifat menyindir, manakala Puisi Y ialah syair yang berima akhir a-a-a-a."
      ],
      "correctIndex": 1,
      "explanation": "Puisi X ialah syair (rima akhir sama a-a-a-a dan keempat-empat baris menyampaikan nasihat), manakala Puisi Y ialah pantun empat kerat (rima a-b-a-b dengan dua baris pembayang dan dua baris maksud).",
      "ref": "Unit 11, m/s 84–85"
    },
    {
      "id": "d6_bm_t4_s3_10",
      "unit": "t4",
      "skill": "t4_s3",
      "diff": "H",
      "q": "Baca rangkap sajak berikut:\n\nMeski warna kulit kita berbeza,\nMeski budaya berlainan rupa,\nDi bawah satu langit yang sama,\nKita melangkah menuju cita,\nKerana muhibah teras kejayaan.\n\nApakah kesimpulan terbaik yang dapat dibuat berdasarkan rangkap sajak di atas?",
      "options": [
        "Perbezaan budaya menjadi halangan utama untuk rakyat mencapai cita-cita bersama.",
        "Kepelbagaian kaum dan budaya tidak menghalang masyarakat untuk bersatu menuju kejayaan.",
        "Setiap kaum hendaklah mengamalkan budaya yang sama supaya tidak berlaku perselisihan.",
        "Kejayaan negara hanya bergantung pada usaha golongan muda di bandar raya."
      ],
      "correctIndex": 1,
      "explanation": "Sajak tersebut menegaskan bahawa walaupun berbeza warna kulit dan budaya, semangat muhibah membolehkan rakyat melangkah bersama menuju kejayaan.",
      "ref": "Unit 12, m/s 91"
    },
    {
      "id": "d6_bm_t4_s4_01",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "L",
      "q": "Pada setiap petang, Rani, Hakim, dan Mei Ling berkumpul di balai raya untuk berlatih bermain kompang dan angklung. Pada mulanya, mereka sering tersilap rentak kerana belum biasa memainkan alat muzik tradisional itu. Namun begitu, mereka tidak berputus asa dan saling mengajar dengan penuh kesabaran. Kini, kumpulan muzik remaja itu sering diundang membuat persembahan dalam majlis peringkat daerah dengan membawakan lagu pelbagai kaum.\n\nApakah nilai murni yang paling jelas ditunjukkan oleh Rani, Hakim, dan Mei Ling ketika menghadapi kesukaran pada awal latihan?",
      "options": [
        "Keinginan untuk bersaing secara individu demi hadiah wang tunai.",
        "Sikap berbangga diri dengan kebolehan masing-masing.",
        "Kesediaan untuk menukar alat muzik apabila melakukan kesilapan.",
        "Kesungguhan dan saling membantu tanpa berputus asa."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa mereka tidak berputus asa dan saling mengajar dengan penuh kesabaran sehingga berjaya membuat persembahan.",
      "ref": "Unit 11, m/s 82–83"
    },
    {
      "id": "d6_bm_t4_s4_02",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "L",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nJawatankuasa Rukun Tetangga Taman Harmoni merancang untuk mengadakan Hari Sukaneka Muhibah pada hari Ahad. Bagi memastikan semua penghuni dapat menyertai acara tersebut dengan selesa, pihak penganjur menyusun jadual pertandingan sukan rakyat agar tidak bertembung dengan waktu solat penduduk. Selain itu, minuman dan kuih-muih yang disediakan di gerai komuniti dipastikan sesuai untuk dinikmati oleh semua golongan tanpa mengira pantang larang pemakanan. Langkah teliti ini membuatkan seluruh kejiranan berasa dihargai dan gembira hadir bersama keluarga.\n\nMengapakah pihak penganjur menyusun jadual sukaneka supaya tidak bertembung dengan waktu solat?",
      "options": [
        "Kerana pengadil pertandingan hanya bertugas pada waktu petang.",
        "Untuk memendekkan tempoh pertandingan supaya selesai sebelum pagi.",
        "Kerana dewan serba guna hanya dibuka pada waktu tengah hari.",
        "Supaya penduduk dapat menunaikan solat dan menyertai acara dengan selesa."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa pihak penganjur menyusun jadual agar tidak bertembung dengan waktu solat bagi memastikan semua penghuni dapat menyertai acara tersebut dengan selesa.",
      "ref": "Unit 12, m/s 88"
    },
    {
      "id": "d6_bm_t4_s4_03",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "L",
      "q": "Teliti maksud ungkapan yang bercetak tebal dalam ayat berikut.\n\nSikap keterbukaan dan keikhlasan dalam pergaulan harian dapat mengikis perasaan **syak wasangka** sesama jiran yang berlainan budaya.\n\nApakah maksud ungkapan **syak wasangka** dalam ayat di atas?",
      "options": [
        "Semangat kesukanan yang tinggi dalam pasukan",
        "Rasa curiga atau tidak percaya terhadap orang lain",
        "Keazaman untuk memenangi sesuatu pertandingan",
        "Amalan bergotong-royong membersihkan taman permainan"
      ],
      "correctIndex": 1,
      "explanation": "'syak wasangka' bermaksud perasaan curiga, ragu-ragu, atau berprasangka buruk terhadap orang lain.",
      "ref": "Unit 12, m/s 89"
    },
    {
      "id": "d6_bm_t4_s4_04",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "L",
      "q": "Di tepi sebuah kolam, sekumpulan bangau sering mencari ikan bersama-sama manakala sekumpulan kura-kura pula menjaga tebing daripada ancaman musang. Suatu hari, seekor bangau mengejek pergerakan kura-kura yang lambat sehingga mencetuskan pertengkaran antara kedua-dua kelompok itu. Tidak lama kemudian, seekor musang mula menyelinap ke tepi kolam kerana tiada lagi pengawal yang memberi amaran. Menyedari bahaya tersebut, ketua bangau segera memohon maaf dan mengajak semua haiwan berbaik-baik semula demi keselamatan bersama.\n\nApakah kesan awal yang berlaku akibat pertengkaran antara bangau dengan kura-kura?",
      "options": [
        "Semua ikan di dalam kolam berenang meninggalkan kawasan itu.",
        "Musang membantu bangau menangkap ikan di tengah kolam.",
        "Kura-kura bertindak membina sarang baharu di atas pokok yang tinggi.",
        "Ancaman musuh mudah menghampiri kerana tiada lagi kerjasama menjaga keselamatan."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa musang mula menyelinap ke tepi kolam kerana perpecahan menyebabkan tiada lagi pengawal yang memberi amaran.",
      "ref": "Unit 10, m/s 76–77"
    },
    {
      "id": "d6_bm_t4_s4_05",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "L",
      "q": "Semangat ______ amat penting apabila masyarakat berbilang kaum tinggal berjiran supaya setiap pihak saling memahami dan menghormati adat resam masing-masing.\n\nPilih perkataan yang paling sesuai diisikan pada tempat kosong.",
      "options": [
        "toleransi",
        "keangkuhan",
        "kealpaan",
        "persengketaan"
      ],
      "correctIndex": 0,
      "explanation": "'toleransi' bermaksud sikap sabar dan saling bertolak ansur serta menghormati perbezaan pendapat, agama, atau budaya orang lain.",
      "ref": "Unit 12, m/s 89"
    },
    {
      "id": "d6_bm_t4_s4_06",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "M",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nProgram Pertukaran Keluarga Angkat peringkat kebangsaan yang diadakan di Kampung Seri Damai menghimpunkan remaja dari Semenanjung, Sarawak, dan Sabah selama lima hari. Sepanjang program, para peserta tinggal bersama keluarga angkat berlainan negeri untuk mengenali dialek tempatan, resipi masakan kampung, dan adat menyambut tetamu. Penyelaras program menjelaskan bahawa mempelajari budaya komuniti lain tidak sesekali melunturkan jati diri peserta, malah menyuburkan rasa hormat dan keakraban merentas wilayah. Menjelang majlis penutup, semua peserta berjaya mempersembahkan sketsa pendek secara berkumpulan hasil muafakat bersama.\n\nApakah mesej utama yang ditekankan oleh penyelaras program dalam petikan di atas?",
      "options": [
        "Mempelajari dialek tempatan menyukarkan peserta berkomunikasi dengan keluarga sendiri.",
        "Peserta program pertukaran hanya dibenarkan memasak hidangan dari negeri masing-masing.",
        "Mengenali budaya komuniti lain memperkukuh rasa hormat dan keakraban tanpa melunturkan jati diri asal.",
        "Persembahan sketsa berkumpulan perlu dijalankan secara berasingan mengikut negeri asal."
      ],
      "correctIndex": 2,
      "explanation": "Petikan menyatakan bahawa penyelaras program menegaskan mempelajari budaya komuniti lain tidak melunturkan jati diri, sebaliknya menyuburkan rasa hormat dan keakraban.",
      "ref": "Unit 12, m/s 89"
    },
    {
      "id": "d6_bm_t4_s4_07",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "M",
      "q": "Menurut seorang bekas pemain bola sepak negara, keserasian dalam pasukan kebangsaan pada era 1970-an terjalin sejak pemain-pemain berbilang kaum itu masih di bangku sekolah. Ketika beraksi di padang, mereka berkongsi kemudahan latihan dan berjuang bersama-sama demi maruah lencana pada dada tanpa mengira keturunan. Sokongan padu daripada penyokong pelbagai bangsa di stadium turut menyemarakkan semangat juang mereka. Hal ini membuktikan bahawa sukan bukan sekadar medan meraih kemenangan, malah menjadi wadah penyatuan rakyat.\n\nApakah maksud ungkapan 'berjuang demi maruah lencana pada dada' dalam konteks petikan?",
      "options": [
        "Bermain bersungguh-sungguh untuk mengharumkan nama dan martabat negara.",
        "Berlatih secara berasingan mengikut kaum sebelum perlawanan bermula.",
        "Mengumpulkan lencana sukan sebagai koleksi peribadi di rumah.",
        "Membeli jersi pasukan baharu yang mempunyai lambang kelab tempatan."
      ],
      "correctIndex": 0,
      "explanation": "Lencana pada dada jersi pasukan kebangsaan melambangkan bendera atau identiti negara, justeru ungkapan itu bermaksud berjuang demi martabat negara.",
      "ref": "Unit 12, m/s 90"
    },
    {
      "id": "d6_bm_t4_s4_08",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "M",
      "q": "Sukarelawan di Pusat Bacaan Komuniti Chow Kit mengajar kanak-kanak daripada keluarga berpendapatan rendah tanpa mengira latar belakang. Selain bimbingan pelajaran, kelas seni dan latihan bola sepak turut diadakan bagi memupuk semangat muhibah.\n\nPerkataan 'muhibah' dalam petikan di atas paling tepat bermaksud ______.",
      "options": [
        "bantuan kewangan yang diberikan secara berterusan setiap bulan",
        "perasaan mesra, kasih sayang, dan persahabatan yang erat sesama masyarakat",
        "persaingan sengit untuk memperoleh keputusan cemerlang",
        "kemahiran melukis dan bermain bola sepak secara profesional"
      ],
      "correctIndex": 1,
      "explanation": "'muhibah' bermaksud kemesraan, kasih sayang, dan keharmonian dalam perhubungan antara anggota masyarakat.",
      "ref": "Unit 12, m/s 92"
    },
    {
      "id": "d6_bm_t4_s4_09",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "H",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nDi pinggir sebuah sawah padi, Sang Kerbau dan sekawan Burung Bangau telah lama menjalin persahabatan erat. Setiap pagi, Burung Bangau membantu memakan serangga perosak yang hinggap di badan Sang Kerbau, manakala Sang Kerbau pula membenarkan rakannya berteduh di bawah perutnya apabila angin kencang bertiup. Apabila musim kemarau melanda dan kolam berhampiran menjadi kering, Burung Bangau yang terbang tinggi segera meninjau kawasan lembah dan menunjukkan mata air tersembunyi kepada Sang Kerbau. Berkat kerjasama itu, kedua-duanya berjaya mengharungi musim kering dengan selamat.\n\nBerdasarkan petikan, apakah yang diramalkan akan berlaku sekiranya Burung Bangau bersikap mementingkan diri sendiri semasa musim kemarau?",
      "options": [
        "Serangga perosak di sawah padi akan membina kolam air untuk Sang Kerbau.",
        "Angin kencang tidak akan bertiup sepanjang musim kemarau di pinggir sawah.",
        "Sang Kerbau berkemungkinan besar menghadapi kesukaran mencari sumber air dan terancam kesihatannya.",
        "Sang Kerbau akan terbang mencari mata air baharu di puncak gunung."
      ],
      "correctIndex": 2,
      "explanation": "Dalam petikan, Sang Kerbau bergantung pada tinjauan Burung Bangau dari udara untuk menemui mata air tersembunyi ketika kolam kering; tanpa bantuan itu, Sang Kerbau sukar mendapat air semasa kemarau.",
      "ref": "Pemulihan, m/s 93"
    },
    {
      "id": "d6_bm_t4_s4_10",
      "unit": "t4",
      "skill": "t4_s4",
      "diff": "H",
      "q": "Bazar Ramadan dan majlis rumah terbuka hari perayaan sering menjadi titik pertemuan masyarakat Malaysia yang berbilang kaum. Pengunjung bukan sahaja datang untuk menikmati pelbagai juadah istimewa, malah berpeluang berbual mesra dengan peniaga dan rakan berlainan agama. Tuan rumah pula sentiasa memastikan makanan yang dihidangkan menepati keperluan serta pantang larang tetamu yang hadir. Keadaan ini menjadikan makanan sebagai jambatan budaya yang mengeratkan perpaduan nasional.\n\nManakah pernyataan yang menggabungkan ILMU dan NILAI daripada petikan di atas dengan tepatnya?",
      "options": [
        "Ilmu: Jenis kuih tempatan sukar dibuat; Nilai: Berjimat cermat semasa berbelanja.",
        "Ilmu: Bazar Ramadan hanya dikunjungi satu kaum; Nilai: Kejujuran dalam berniaga.",
        "Ilmu: Kepelbagaian juadah tempatan menjadi medium pertemuan budaya; Nilai: Prihatin dan menghormati pantang larang kaum lain.",
        "Ilmu: Tetamu perlu membawa makanan sendiri ke majlis; Nilai: Keberanian mencuba resipi baharu."
      ],
      "correctIndex": 2,
      "explanation": "Ilmu ialah pengetahuan yang diperoleh daripada teks (makanan menjadi jambatan pertemuan budaya), manakala nilai ialah amalan baik yang ditunjukkan (prihatin terhadap pantang larang tetamu berbilang agama).",
      "ref": "Unit 12, m/s 87"
    },
    {
      "id": "d6_bm_t5_s1_01",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "L",
      "q": "Antara kata ganda penuh berikut, yang manakah membawa makna tunggal?",
      "options": [
        "rama-rama",
        "perahu-perahu",
        "daun-daun",
        "gerai-gerai"
      ],
      "correctIndex": 0,
      "explanation": "'Rama-rama' ialah kata ganda penuh yang merujuk kepada satu jenis serangga (makna tunggal), manakala 'perahu-perahu', 'daun-daun', dan 'gerai-gerai' membawa makna jamak (banyak).",
      "ref": "Unit 13, m/s 102"
    },
    {
      "id": "d6_bm_t5_s1_02",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "L",
      "q": "Lengkapkan ayat di bawah dengan kata ganda penuh yang paling sesuai.\n\nPenduduk di Mukah mengikat _________ plastik secara memanjang bagi menandakan lorong perlumbaan bidar lukut.",
      "options": [
        "botol-botol",
        "kura-kura",
        "kunang-kunang",
        "biri-biri"
      ],
      "correctIndex": 0,
      "explanation": "'Botol-botol' bermaksud banyak botol dan sesuai dengan konteks menandakan lorong perlumbaan bidar lukut. Pilihan lain ialah kata ganda penuh nama haiwan yang membawa makna tunggal.",
      "ref": "Unit 13, m/s 102"
    },
    {
      "id": "d6_bm_t5_s1_03",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "L",
      "q": "Pilih kata ganda separa yang paling tepat untuk melengkapkan ayat berikut.\n\nPara pengukir kayu menggunakan _________ untuk memastikan sudut pada bingkai pintu tradisional tepat.",
      "options": [
        "lelangit",
        "tetikus",
        "sesiku",
        "rerambut"
      ],
      "correctIndex": 2,
      "explanation": "'Sesiku' ialah kata ganda separa yang bermaksud alat berbentuk siku untuk menyukat sudut tepat. 'Lelangit' (bahagian atas rongga mulut), 'rerambut' (salur atau rambut halus), dan 'tetikus' (peranti komputer) tidak sesuai dengan konteks.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_04",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "L",
      "q": "Isi tempat kosong dengan kata ganda separa yang betul.\n\nSemua _________ yang hadir ke majlis persembahan Awang Batil di Balai Seni Negara diberikan buku atur cara.",
      "options": [
        "pepatung",
        "jejari",
        "sesiku",
        "tetamu"
      ],
      "correctIndex": 3,
      "explanation": "'Tetamu' ialah kata ganda separa daripada kata dasar 'tamu' yang membawa maksud orang yang diundang atau berkunjung ke sesuatu majlis.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_05",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "L",
      "q": "Pilih kata ganda separa yang paling sesuai untuk melengkapkan ayat berikut.\n\nAngin petang meniup _________ kering di halaman rumah nenek sehingga berterbangan di udara.",
      "options": [
        "jejari",
        "dedaun",
        "sesiku",
        "kekuda"
      ],
      "correctIndex": 1,
      "explanation": "'Dedaun' ialah kata ganda separa daripada kata dasar 'daun' yang bermaksud daun-daun. 'Jejari' (bahagian roda atau bulatan), 'sesiku' (alat menyukat sudut tepat), dan 'kekuda' (penyangga kayu) tidak sesuai dengan konteks.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_06",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "M",
      "q": "Pilih ayat yang menggunakan kata ganda penuh dengan betul mengikut peraturan Tatabahasa Dewan.",
      "options": [
        "Semua penonton-penonton bersorak riang apabila perlumbaan tamat.",
        "Perahu-perahu bidar lukut itu dihiasi dengan layar daun kering yang cantik.",
        "Pelbagai daun-daun kering dikumpulkan untuk menghiasi pelamin adat.",
        "Banyak gerai-gerai di tebing sungai itu menjual hidangan tradisi tempatan."
      ],
      "correctIndex": 1,
      "explanation": "Kata ganda penuh yang bermakna jamak ('gerai-gerai', 'penonton-penonton', 'daun-daun') tidak boleh didahului oleh kata bilangan tak tentu seperti 'banyak', 'semua', atau 'pelbagai'. Pilihan B betul kerana tiada kata bilangan tak tentu di hadapan 'perahu-perahu'.",
      "ref": "Unit 13, m/s 102"
    },
    {
      "id": "d6_bm_t5_s1_07",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "M",
      "q": "Pilih kata ganda separa berimbuhan yang paling tepat bagi melengkapkan ayat di bawah.\n\nTopeng kayu yang dipakai oleh penglipur lara itu kelihatan _________ apabila disinari lampu pentas.",
      "options": [
        "kemerah-merahan",
        "bermerah-merah",
        "merah-merahan",
        "kemerahan-merahan"
      ],
      "correctIndex": 0,
      "explanation": "Imbuhan apitan 'ke-...-an' bersama penggandaan separa kata dasar membentuk 'kemerah-merahan' yang bermaksud agak merah atau menyerupai warna merah.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_08",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "M",
      "q": "Kumpulan perkataan manakah yang kesemuanya terdiri daripada kata ganda separa?",
      "options": [
        "kuih-muih, sesiku, lauk-pauk",
        "rama-rama, bersalam-salaman, dedaun",
        "tetamu, sesiku, dedaun",
        "daun-daun, tetamu, kawan-kawan"
      ],
      "correctIndex": 2,
      "explanation": "'Tetamu' (tamu), 'sesiku' (siku), dan 'dedaun' (daun) kesemuanya ialah kata ganda separa kerana menggandakan suku kata pertama kata dasar sahaja. 'Rama-rama', 'daun-daun', dan 'kawan-kawan' ialah kata ganda penuh; 'kuih-muih' dan 'lauk-pauk' ialah kata ganda berentak; manakala 'bersalam-salaman' ialah kata ganda berimbuhan.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_09",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "H",
      "q": "Pilih ayat yang BETUL dari segi penggunaan kata ganda penuh dan kata ganda separa.",
      "options": [
        "Seekor rama-rama berwarna jingga hinggap di atas dedaun hijau di taman mini.",
        "Semua pelukis-pelukis batik mempamerkan hasil karya masing-masing di dewan.",
        "Pelbagai kuih-kuih tradisional dijual di gerai Pesta Kesenian Rakyat itu.",
        "Banyak daun-daun kering berguguran di halaman balai seni pada waktu pagi."
      ],
      "correctIndex": 0,
      "explanation": "'Seekor rama-rama' betul kerana 'rama-rama' ialah kata ganda penuh bermakna tunggal, manakala 'dedaun' ialah kata ganda separa yang gramatis. Ayat lain salah kerana menggabungkan kata bilangan tak tentu ('pelbagai', 'semua', 'banyak') dengan kata ganda penuh yang sudah membawa maksud jamak.",
      "ref": "Unit 13, m/s 102; Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s1_10",
      "unit": "t5",
      "skill": "t5_s1",
      "diff": "H",
      "q": "Dalam ayat manakah kata ganda separa digunakan dengan BETUL mengikut maksud dan tatabahasanya?",
      "options": [
        "Tukang kebun menyapu kekuda kering yang berguguran di bawah pokok mangga.",
        "Pekerja pentas menyusun kepingan papan di atas rerambut besi sebelum mengecatnya.",
        "Tukang kayu itu menggunakan sesiku untuk memastikan sudut bingkai pintu tepat 90 darjah.",
        "Para tetamu-tetamu kehormat disambut mesra oleh ahli jawatankuasa kampung."
      ],
      "correctIndex": 2,
      "explanation": "'Sesiku' ialah kata ganda separa yang bermaksud alat berbentuk siku untuk menyukat sudut tepat 90 darjah. 'Para tetamu-tetamu' salah gandaan dan lewah (sepatutnya 'para tetamu'), manakala 'kekuda' (penyangga kayu, bukan daun) dan 'rerambut' (salur atau rambut halus, bukan penyangga besi) salah dari segi makna.",
      "ref": "Unit 14, m/s 108"
    },
    {
      "id": "d6_bm_t5_s2_01",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "L",
      "q": "Pilih kata ganda berentak yang paling sesuai untuk melengkapkan ayat berikut.\n\nPerkampungan penenun kain baraburu di pesisiran pantai itu sungguh tenang dan jauh daripada _________ kota.",
      "options": [
        "hiruk-pikuk",
        "mandi-manda",
        "gopoh-gapah",
        "kusut-masai"
      ],
      "correctIndex": 0,
      "explanation": "'Hiruk-pikuk' bermaksud keadaan yang sangat bising atau riuh dan paling sesuai menggambarkan suasana kota yang berbeza dengan kampung yang tenang.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_02",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "L",
      "q": "Lengkapkan ayat di bawah dengan kata ganda berentak yang betul.\n\nProses mengikis serat daun nanas untuk dijadikan benang tenunan mesti dilakukan dengan cermat dan tidak boleh secara _________.",
      "options": [
        "riuh-rendah",
        "gopoh-gapah",
        "ulang-alik",
        "ramah-tamah"
      ],
      "correctIndex": 1,
      "explanation": "'Gopoh-gapah' bermaksud tergesa-gesa atau terburu-buru, berlawanan dengan kerja seni tenunan yang memerlukan ketelitian.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_03",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "L",
      "q": "Pilih kata ganda berentak yang paling sesuai.\n\nBenang daun nanas yang telah direndam dengan pewarna semula jadi menghasilkan kain tenunan yang _________.",
      "options": [
        "suku-sakat",
        "warna-warni",
        "gunung-ganang",
        "lintang-pukang"
      ],
      "correctIndex": 1,
      "explanation": "'Warna-warni' bermaksud beraneka warna dan tepat menggambarkan hasil benang yang telah dicelup dengan pelbagai pewarna asli.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_04",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "L",
      "q": "Isi tempat kosong dengan kata ganda berentak bebas yang betul.\n\nSemasa sambutan Hari Raya, keluarga Irfan gemar menziarahi _________ yang tinggal di kampung berdekatan.",
      "options": [
        "lauk-pauk",
        "saudara-mara",
        "kayu-kayan",
        "sayur-mayur"
      ],
      "correctIndex": 1,
      "explanation": "'Saudara-mara' bermaksud kaum kerabat atau sanak saudara dan digolongkan sebagai kata ganda berentak bebas.",
      "ref": "Unit 15, m/s 113; Pengayaan, m/s 115"
    },
    {
      "id": "d6_bm_t5_s2_05",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "L",
      "q": "Lengkapkan ayat di bawah dengan kata ganda berentak yang tepat.\n\nPenduduk kampung bekerjasama melalui aktiviti _________ untuk menghias balai raya sempena Malam Kebudayaan.",
      "options": [
        "gotong-royong",
        "bolak-balik",
        "huru-hara",
        "cerai-berai"
      ],
      "correctIndex": 0,
      "explanation": "'Gotong-royong' bermaksud amalan melakukan sesuatu kerja secara bersama-sama atau bermuafakat.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_06",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "M",
      "q": "Antara kata ganda berentak berikut, yang manakah tergolong dalam kata ganda berentak pengulangan vokal (persamaan bunyi vokal)?",
      "options": [
        "lauk-pauk",
        "kusut-masai",
        "bolak-balik",
        "mandi-manda"
      ],
      "correctIndex": 0,
      "explanation": "'Lauk-pauk' mempunyai persamaan bunyi vokal (a-u) pada kedua-dua bahagian kata, menjadikannya kata ganda berentak pengulangan vokal. 'Bolak-balik' dan 'mandi-manda' ialah pengulangan konsonan, manakala 'kusut-masai' ialah kata ganda berentak bebas.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_08",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "M",
      "q": "Kata ganda berentak manakah yang dikelaskan sebagai kata ganda berentak bebas?",
      "options": [
        "bolak-balik",
        "lauk-pauk",
        "kusut-masai",
        "kuih-muih"
      ],
      "correctIndex": 2,
      "explanation": "'Kusut-masai' tidak mempunyai pola pengulangan vokal atau konsonan yang tetap pada kata dasarnya, maka ia tergolong dalam kata ganda berentak bebas. 'Bolak-balik' ialah pengulangan konsonan, manakala 'kuih-muih' dan 'lauk-pauk' ialah pengulangan vokal.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_09",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan kata ganda berentak dengan betul tanpa sebarang kesalahan tatabahasa.",
      "options": [
        "Pelbagai jenis-jenis kuih-muih tradisional dihidangkan di atas meja panjang.",
        "Mereka saling bergotong-royong mengangkat kerusi ke dalam balai raya kampung.",
        "Penduduk taman perumahan itu bergotong-royong membersihkan dewan serba guna menjelang sambutan perayaan.",
        "Keadaan jalan raya itu menjadi paling sesak dan bolak-balik sekali pada waktu puncak."
      ],
      "correctIndex": 2,
      "explanation": "'Bergotong-royong' (daripada kata ganda berentak pengulangan vokal 'gotong-royong') digunakan dengan gramatis tanpa kata yang lewah. Ayat lain salah kerana menggabungkan 'paling ... sekali' dan salah guna makna 'bolak-balik', menggandakan 'pelbagai jenis-jenis kuih-muih' secara lewah, serta menggabungkan 'saling' dengan 'bergotong-royong' yang sudah membawa maksud kerjasama bersama.",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s2_10",
      "unit": "t5",
      "skill": "t5_s2",
      "diff": "H",
      "q": "Baca ayat di bawah dan tentukan jenis kata ganda berentak bagi perkataan yang bergaris mengikut susunan.\n\nPengunjung yang baru selesai __mandi-manda__ di air terjun itu berambut __kusut-masai__ sebelum menikmati __lauk-pauk__ tradisional bersama-sama.",
      "options": [
        "pengulangan konsonan, bebas, pengulangan vokal",
        "bebas, pengulangan konsonan, pengulangan vokal",
        "pengulangan konsonan, pengulangan vokal, bebas",
        "pengulangan vokal, bebas, pengulangan konsonan"
      ],
      "correctIndex": 0,
      "explanation": "'Mandi-manda' ialah kata ganda berentak pengulangan konsonan (m-n-d); 'kusut-masai' ialah kata ganda berentak bebas tanpa persamaan pola bunyi vokal atau konsonan; dan 'lauk-pauk' ialah pengulangan vokal (a-u).",
      "ref": "Unit 15, m/s 113"
    },
    {
      "id": "d6_bm_t5_s3_01",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "L",
      "q": "Baca pantun di bawah ini dan jawab soalan berikutnya.\n\nHarum mewangi bunga melati,\nDipetik gadis di tepi laman;\nPermainan kercang menguji hati,\nWarisan berharga sepanjang zaman.\n\nApakah maksud rangkap pantun di atas?",
      "options": [
        "Gadis kampung gemar bermain kercang setiap petang di halaman rumah.",
        "Permainan tradisional kercang menguji kesabaran diri dan merupakan khazanah bernilai.",
        "Bunga melati di tepi laman perlu dipetik untuk dijadikan hiasan permainan.",
        "Permainan kercang hanya dimainkan oleh golongan tua pada zaman dahulu."
      ],
      "correctIndex": 1,
      "explanation": "Maksud pantun terletak pada baris ketiga dan keempat. Pantun ini menyatakan bahawa permainan kercang menguji kesabaran atau ketabahan hati serta menjadi warisan berharga sepanjang masa.",
      "ref": "Pemulihan, m/s 114"
    },
    {
      "id": "d6_bm_t5_s3_02",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "L",
      "q": "Teliti rangkap syair di bawah.\n\nBusana Melayu warisan bangsa,\nDipakai indah setiap masa,\nBerpesak kemas tampak selesa,\nDilengkap samping segak sentiasa.\n\nApakah ciri rima akhir bagi rangkap syair tersebut?",
      "options": [
        "a-b-a-b",
        "a-a-b-b",
        "a-a-a-a",
        "a-b-b-a"
      ],
      "correctIndex": 2,
      "explanation": "Keempat-empat baris syair tersebut berakhir dengan suku kata yang sama iaitu '-sa' (bangsa, masa, selesa, sentiasa), membentuk pola rima akhir 'a-a-a-a'.",
      "ref": "Unit 15, m/s 111"
    },
    {
      "id": "d6_bm_t5_s3_03",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "L",
      "q": "Baca petikan seni kata lagu di bawah.\n\nGemersik rebab mengalun irama,\nTari sumazau bersatu bersama,\nSewang dan joget menghibur sukma,\nBudaya berbilang kekal utama.\n\nApakah mesej utama yang ingin disampaikan dalam seni kata lagu tersebut?",
      "options": [
        "Tarian moden lebih diminati oleh generasi muda berbanding tarian tradisi.",
        "Alat muzik rebab hanya boleh dimainkan ketika persembahan tarian sumazau.",
        "Setiap negeri mempunyai seorang guru tarian yang terkenal.",
        "Kepelbagaian muzik dan tarian tradisional mencerminkan kekayaan budaya yang perlu dikekalkan."
      ],
      "correctIndex": 3,
      "explanation": "Seni kata lagu menyebut alat muzik rebab serta tarian sumazau, sewang, dan joget yang menceriakan jiwa serta menegaskan agar budaya pelbagai kaum terus diutamakan.",
      "ref": "Unit 14, m/s 107"
    },
    {
      "id": "d6_bm_t5_s3_04",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "L",
      "q": "Peribahasa 'tak lapuk dek hujan, tak lekang dek panas' sering dikaitkan dengan permainan tradisional seperti sepak raga tuju. Apakah maksud peribahasa ini?",
      "options": [
        "Sesuatu adat atau warisan yang kekal utuh dan tidak hilang ditelan zaman.",
        "Sesuatu benda yang diperbuat daripada kayu tahan lasak apabila direndam air.",
        "Sesuatu perbuatan yang dilakukan secara tergesa-gesa sebelum hari hujan.",
        "Sesuatu permainan yang hanya sesuai dimainkan ketika musim kemarau."
      ],
      "correctIndex": 0,
      "explanation": "'Tak lapuk dek hujan, tak lekang dek panas' bermaksud adat, tradisi, atau warisan yang tetap kekal dan tidak mudah dilupakan walaupun zaman berubah.",
      "ref": "Unit 13, m/s 101"
    },
    {
      "id": "d6_bm_t5_s3_05",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "L",
      "q": "Sebelum menghasilkan poster bertemakan seni bina rumah Melayu lama, Mei Ling mengunjungi perpustakaan awam untuk meneliti buku sejarah dan majalah warisan bagi memperluas pengetahuannya.\n\nKata-kata hikmat manakah yang paling tepat menggambarkan amalan Mei Ling?",
      "options": [
        "Bersatu teguh, bercerai roboh",
        "Masa itu emas",
        "Berakit-rakit ke hulu, berenang-renang ke tepian",
        "Membaca jambatan ilmu"
      ],
      "correctIndex": 3,
      "explanation": "Amalan mengunjungi perpustakaan dan membaca pelbagai bahan rujukan untuk menambah pengetahuan bertepatan dengan kata-kata hikmat 'Membaca jambatan ilmu'.",
      "ref": "Unit 15, m/s 112"
    },
    {
      "id": "d6_bm_t5_s3_06",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "M",
      "q": "Baca pantun di bawah dengan teliti.\n\nPohon melati tumbuh di taman,\nHarum semerbak di waktu pagi;\nAdab berkunjung jadikan pedoman,\nHati tuan rumah pasti dihargai.\n\nApakah pengajaran utama daripada pantun tersebut?",
      "options": [
        "Kita digalakkan melawat rumah jiran pada waktu pagi sahaja.",
        "Kita mestilah menjaga masa supaya tidak lewat pulang ke rumah.",
        "Kita perlu menanam pokok bunga di taman rumah agar kelihatan bersih.",
        "Kita hendaklah mengamalkan sopan santun ketika bertandang demi menghormati tuan rumah."
      ],
      "correctIndex": 3,
      "explanation": "Baris maksud pantun menekankan agar adab berkunjung dijadikan pegangan supaya perasaan dan kehormatan tuan rumah sentiasa terpelihara.",
      "ref": "Unit 13, m/s 100"
    },
    {
      "id": "d6_bm_t5_s3_07",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "M",
      "q": "Baca rangkap syair berikut.\n\nTenunan halus daripada nanas,\nDikerja tekun tanpa rasa malas,\nCorak nan indah berseri jelas,\nAgar warisan tidak terlepas.\n\nApakah nilai murni yang paling ketara dalam rangkap syair tersebut?",
      "options": [
        "Kebijaksanaan berpidato dalam bahasa istana.",
        "Ketekunan dan kegigihan memelihara seni tenunan tradisi.",
        "Keberanian menempuh cabaran di lautan luas.",
        "Kerjasama menjayakan sukan rakyat di padang."
      ],
      "correctIndex": 1,
      "explanation": "Frasa 'dikerja tekun tanpa rasa malas' dan 'agar warisan tidak terlepas' jelas menggambarkan nilai ketekunan dalam memelihara seni tenunan tradisional.",
      "ref": "Unit 15, m/s 111, 113"
    },
    {
      "id": "d6_bm_t5_s3_08",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "M",
      "q": "Irfan berasa _________ apabila diberi peluang menubuhkan kelab sepak raga tuju dan menunjuk cara permainan itu kepada rakan-rakannya di sekolah.\n\nSimpulan bahasa yang paling sesuai untuk mengisi tempat kosong ialah",
      "options": [
        "besar hati",
        "tawar hati",
        "kecil hati",
        "keras hati"
      ],
      "correctIndex": 0,
      "explanation": "'Besar hati' bermaksud berasa bangga dan gembira kerana diberi kepercayaan atau penghormatan. 'Kecil hati' (tersinggung), 'tawar hati' (hilang minat), dan 'keras hati' (degil) tidak sesuai.",
      "ref": "Unit 13, m/s 101"
    },
    {
      "id": "d6_bm_t5_s3_09",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "H",
      "q": "Lengkapkan pantun berikut dengan memilih baris keempat yang paling tepat dari segi rima dan maksud.\n\nPergi ke sungai mengail ikan,\nDapat seekor si ikan baung;\nSeni budaya perlu dilestarikan,\n__________________________.",
      "options": [
        "Supaya sungai tidak terkurung",
        "Kerana harganya mahal berbilang",
        "Sebelum hari beransur petang",
        "Supaya terus subur dan disanjung"
      ],
      "correctIndex": 3,
      "explanation": "Baris kedua berakhir dengan rima '-ung' ('baung'), maka baris keempat juga mesti berakhir dengan rima '-ung' serta menyambung maksud melestarikan seni budaya dengan logik, iaitu 'Supaya terus subur dan disanjung'. 'Supaya sungai tidak terkurung' menepati rima '-ung' tetapi tidak berkaitan dengan maksud baris ketiga, manakala dua pilihan lain salah dari segi rima akhir.",
      "ref": "Pemulihan, m/s 114"
    },
    {
      "id": "d6_bm_t5_s3_10",
      "unit": "t5",
      "skill": "t5_s3",
      "diff": "H",
      "q": "Mun Chew mengambil masa berhari-hari untuk menyiapkan tanglung buatan tangannya dengan penuh kesabaran walaupun prosesnya rumit sehingga berjaya menghasilkan tanglung yang indah.\n\nPeribahasa manakah yang paling sesuai menggambarkan sikap Mun Chew?",
      "options": [
        "Genggam bara api biar sampai jadi arang",
        "Sudah terhantuk baru tengadah",
        "Seperti katak di bawah tempurung",
        "Bagai melepaskan batuk di tangga"
      ],
      "correctIndex": 0,
      "explanation": "'Genggam bara api biar sampai jadi arang' bermaksud melakukan sesuatu pekerjaan yang sukar dengan tabah dan sabar sehingga berjaya diselesaikan sepenuhnya.",
      "ref": "Unit 14, m/s 106"
    },
    {
      "id": "d6_bm_t5_s4_01",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "L",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nSetiap petang Sabtu, Mak Cik Rosnah mengumpulkan remaja kampung di anjung rumahnya untuk mengajar seni anyaman tikar mengkuang. Daun mengkuang yang telah dilayur dan direndam dengan pewarna semula jadi dianyam membentuk corak pucuk rebung serta bunga cengkih. Beliau tidak mengenakan sebarang bayaran kerana bimbang kemahiran lama itu akan lenyap ditelan zaman sekiranya anak muda tidak berminat mempelajarinya. Hasil anyaman para pelajarnya kini turut dipamerkan di balai raya kampung sebagai tarikan pelawat.\n\nMengapakah Mak Cik Rosnah mengajar remaja kampung menganyam tikar mengkuang secara percuma?",
      "options": [
        "Kerana beliau khuatir kemahiran tradisional tersebut akan pupus jika tidak diwarisi anak muda.",
        "Kerana pihak pelancong memaksanya membuka kelas anyaman di balai raya.",
        "Kerana beliau mempunyai terlalu banyak daun mengkuang di belakang rumah.",
        "Kerana semua remaja kampung wajib lulus ujian anyaman sebelum tamat sekolah."
      ],
      "correctIndex": 0,
      "explanation": "Petikan menyebut bahawa Mak Cik Rosnah tidak mengenakan bayaran kerana bimbang kemahiran lama itu akan lenyap ditelan zaman jika anak muda tidak berminat mempelajarinya.",
      "ref": "Unit 13, m/s 99"
    },
    {
      "id": "d6_bm_t5_s4_02",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "L",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nPenonton yang menghadiri pementasan teater budaya di auditorium hendaklah mematuhi beberapa peraturan asas demi keselesaan bersama. Sebelum tirai dibuka, setiap pengunjung disarankan menukar telefon bimbit kepada mod senyap dan mengambil tempat duduk sepuluh minit lebih awal. Sepanjang persembahan berlangsung, penonton dilarang berbual dengan suara yang kuat atau mengambil gambar menggunakan lampu kilat kerana perbuatan itu boleh mengganggu tumpuan pelakon di pentas. Sikap berdisiplin ini mencerminkan penghargaan tinggi masyarakat terhadap penggiat seni.\n\nBerdasarkan petikan, tindakan manakah yang perlu dielakkan oleh penonton semasa pementasan berlangsung?",
      "options": [
        "Berbual dengan suara kuat dan mengambil gambar menggunakan lampu kilat",
        "Memberikan tepukan penghargaan selepas persembahan selesai",
        "Menukar telefon bimbit kepada mod senyap sebelum persembahan bermula",
        "Mengambil tempat duduk sepuluh minit lebih awal daripada jadual"
      ],
      "correctIndex": 0,
      "explanation": "Petikan menyatakan bahawa penonton dilarang berbual dengan suara yang kuat atau mengambil gambar menggunakan lampu kilat sepanjang persembahan berlangsung.",
      "ref": "Unit 13, m/s 100"
    },
    {
      "id": "d6_bm_t5_s4_03",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "L",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nTarian zapin merupakan antara tarian rakyat yang amat popular dalam kalangan masyarakat di negeri Johor dan masih dipersembahkan hingga kini. Penari bergerak secara berpasangan atau berkumpulan dengan langkah kaki yang tangkas mengikut alunan petikan gambus serta paluan marwas. Busana tradisional seperti baju Melayu lengkap bersamping bagi penari lelaki dan baju kurung atau kebaya labuh bagi penari wanita menyerikan lagi persembahan. Keindahan gerak tari ini bukan sahaja menghiburkan penonton, malah memelihara kehalusan budaya warisan bangsa.\n\nBerdasarkan petikan, alat muzik manakah yang mengiringi persembahan tarian zapin?",
      "options": [
        "Gitar elektrik dan kompang",
        "Gambus dan marwas",
        "Biola moden dan dram",
        "Seruling buluh dan piano"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyebut secara langsung bahawa penari zapin melangkah mengikut alunan petikan gambus serta paluan marwas.",
      "ref": "Unit 14, m/s 104-105"
    },
    {
      "id": "d6_bm_t5_s4_04",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "L",
      "q": "Teliti maksud perkataan yang bercetak tebal dalam ayat berikut.\n\nUkiran bermotif awan larat pada bingkai cermin kayu itu mempunyai nilai **estetika** yang sangat tinggi.\n\nPerkataan **estetika** dalam ayat di atas bermaksud",
      "options": [
        "keindahan dalam karya seni",
        "harga jualan di pasaran",
        "tempoh masa pembuatan",
        "kekuatan bahan kayu"
      ],
      "correctIndex": 0,
      "explanation": "Menurut Kamus Dewan, 'estetika' bermaksud keindahan atau nilai seni yang terkandung dalam sesuatu karya atau rekaan.",
      "ref": "Unit 14, m/s 104; Penilaian, m/s 117"
    },
    {
      "id": "d6_bm_t5_s4_05",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "L",
      "q": "Teliti maksud perkataan yang bercetak tebal dalam ayat berikut.\n\nPasukan kompang sekolah berlatih mengikut **tempo** yang sekata supaya paluan mereka kedengaran harmoni ketika mengiringi perarakan.\n\nPerkataan **tempo** bermaksud",
      "options": [
        "nama pengarang lagu tradisional Melayu",
        "kadar kelajuan atau rentak dalam muzik",
        "jenis bahan yang digunakan untuk membuat kompang",
        "bilangan penonton yang menyaksikan persembahan"
      ],
      "correctIndex": 1,
      "explanation": "Dalam istilah muzik, 'tempo' merujuk kepada kadar cepat atau lambatnya sesuatu rentak atau irama lagu dimainkan.",
      "ref": "Unit 15, m/s 110"
    },
    {
      "id": "d6_bm_t5_s4_06",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "M",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nSeni ukiran kayu pada dinding dan bingkai tingkap rumah tradisional Melayu bukan sekadar hiasan luaran, malah mempunyai fungsi praktikal yang tersendiri. Pengukir mahir lazimnya memilih kayu keras yang tahan serangan anai-anai seperti kayu merbau atau cengal sebelum melukis lakaran motif flora. Bagi bahagian atas pintu, teknik ukiran tebuk tembus sering digunakan untuk menghasilkan lubang-lubang halus yang mengikut alur corak daun dan sulur. Melalui kaedah ini, cahaya semula jadi dapat masuk dan aliran udara sejuk bebas beredar ke dalam ruang rumah.\n\nMengapakah teknik ukiran tebuk tembus sering diterapkan pada bahagian atas pintu rumah tradisional Melayu?",
      "options": [
        "Untuk membolehkan cahaya masuk dan melancarkan pengaliran udara sejuk ke dalam rumah.",
        "Untuk memastikan warna cat kayu kelihatan lebih terang pada waktu malam.",
        "Untuk mengurangkan berat daun pintu semasa dibuka oleh penghuni rumah.",
        "Untuk mengelakkan kayu merbau daripada diserang serangga perosak."
      ],
      "correctIndex": 0,
      "explanation": "Petikan menjelaskan bahawa lubang-lubang halus daripada ukiran tebuk tembus membolehkan cahaya semula jadi masuk serta melancarkan peredaran udara sejuk ke dalam ruang rumah.",
      "ref": "Unit 15, m/s 109"
    },
    {
      "id": "d6_bm_t5_s4_07",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "M",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nPuan Hasnah merupakan seorang tukang tembikar berpengalaman yang menghasilkan labu sayong di bengkel keluarganya. Tanah liat yang dipilih terlebih dahulu diuli sehingga lembut sebelum dibentuk menggunakan teknik picitan dan roda pemutar. Setelah permukaan labu digilap dengan batu sungai, beliau menyalainya di atas bara sabut kelapa sehingga bertukar warna menjadi hitam berkilat. Bagi memenuhi kehendak pembeli moden, Puan Hasnah sentiasa menghasilkan corak ukiran seperti bunga tanjung dan pucuk rebung mengikut tempahan pelanggan.\n\nBukti manakah yang menunjukkan Puan Hasnah prihatin terhadap permintaan pembeli masa kini?",
      "options": [
        "Beliau menggilap permukaan tembikar menggunakan batu sungai.",
        "Beliau menyalai labu di atas bara sabut kelapa sehingga berwarna hitam.",
        "Beliau menguli tanah liat sehingga lembut sebelum membentuk labu sayong.",
        "Beliau menghasilkan corak ukiran pada labu sayong mengikut tempahan pelanggan."
      ],
      "correctIndex": 3,
      "explanation": "Ayat terakhir petikan menyatakan bahawa bagi memenuhi kehendak pembeli moden, Puan Hasnah menghasilkan corak ukiran mengikut tempahan pelanggan.",
      "ref": "Penilaian, m/s 117"
    },
    {
      "id": "d6_bm_t5_s4_08",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "M",
      "q": "Teliti maksud perkataan yang bercetak tebal dalam ayat berikut.\n\nPelakon teater bangsawan tidak berpandukan skrip bertulis, sebaliknya mereka menguasai sinopsis cerita lalu melakukan **improvisasi** dialog secara spontan di atas pentas.\n\nPerkataan **improvisasi** paling tepat bermaksud",
      "options": [
        "membaca teks ucapan rasmi dari atas kertas",
        "menukar pakaian watak di belakang tirai pentas",
        "menggubah atau melakonkan sesuatu secara spontan tanpa persediaan skrip bertulis",
        "menghafal dialog pelakon lain tanpa perubahan"
      ],
      "correctIndex": 2,
      "explanation": "'Improvisasi' bermaksud mencipta, menggubah, atau menyampaikan dialog serta lakonan secara serta-merta (spontan) tanpa terikat kepada skrip bertulis.",
      "ref": "Bacaan Luas, m/s 118"
    },
    {
      "id": "d6_bm_t5_s4_09",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "H",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nMun Chew belajar seni membuat tanglung daripada datuknya agar warisan keluarganya tidak pupus ditelan masa. Walaupun tanglung tidak lagi digunakan sebagai sumber cahaya harian, beliau tetap tekun menyiapkannya menggunakan bahan kitar semula. Bagi menggantikan nyalaan api lilin yang berisiko menyebabkan kebakaran, Mun Chew memilih lampu diod pancaran cahaya. Beliau yakin usaha kecil itu mampu membentuk jati diri serta memupuk rasa cinta akan budaya.\n\nBerdasarkan tindakan Mun Chew, apakah gabungan sifat yang paling tepat menggambarkan perwatakannya?",
      "options": [
        "Menolak semua bentuk teknologi baharu demi mengekalkan tradisi.",
        "Pemalas dan sering bergantung kepada bantuan orang lain.",
        "Menghargai warisan budaya, kreatif mengolah bahan, dan rasional mengutamakan keselamatan.",
        "Cepat berputus asa apabila menghadapi kesukaran teknik moden."
      ],
      "correctIndex": 2,
      "explanation": "Mun Chew menghargai warisan dengan mempelajari seni membuat tanglung daripada datuknya, bersikap kreatif menggunakan bahan kitar semula, dan bertindak rasional memilih lampu diod pancaran cahaya untuk mengelakkan risiko kebakaran.",
      "ref": "Unit 14, m/s 106"
    },
    {
      "id": "d6_bm_t5_s4_10",
      "unit": "t5",
      "skill": "t5_s4",
      "diff": "H",
      "q": "Baca petikan di bawah dan jawab soalan.\n\nPersembahan dikir barat di negeri pantai timur menampilkan gandingan unik antara tukang karut, tok juara, dengan barisan awak-awak yang duduk bersila membentuk separuh bulatan. Dalam pementasan tersebut, tok juara memulakan nyanyian berpandukan lagu yang telah digubah lebih awal sebelum diikuti suara beramai-ramai oleh awak-awak sambil menepuk tangan mengikut rentak. Sebaliknya, tukang karut perlu berfikir pantas untuk mencipta rangkap pantun secara spontan berdasarkan isu semasa atau tema majlis yang dihadiri. Kecekapan menggubah kata-kata bersahaja tanpa skrip bertulis inilah yang sering mengundang sorakan gemuruh para hadirin.\n\nApakah perbezaan utama antara peranan tok juara dengan tukang karut berdasarkan petikan?",
      "options": [
        "Tok juara mencipta pantun tanpa skrip manakala tukang karut hanya mengulang suara awak-awak.",
        "Tok juara memulakan lagu yang digubah lebih awal manakala tukang karut mencipta pantun secara spontan.",
        "Tok juara duduk di barisan belakang pentas manakala tukang karut menepuk tangan tanpa menyanyi.",
        "Tok juara mengiringi persembahan dengan alat muzik moden manakala tukang karut membaca skrip rasmi."
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan bahawa tok juara memulakan nyanyian berdasarkan lagu yang digubah lebih awal, manakala tukang karut perlu pantas mencipta rangkap pantun secara spontan tanpa skrip bertulis.",
      "ref": "Bacaan Luas, m/s 118"
    },
    {
      "id": "d6_bm_t6_s1_01",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "L",
      "q": "Pilih ayat tunggal yang tepat berdasarkan situasi di makmal sains.",
      "options": [
        "Suhu air meningkat dengan cepat apabila bikar itu dipanaskan di atas penunu Bunsen.",
        "Murid-murid memakai cermin mata keselamatan kerana mereka menjalankan eksperimen di makmal.",
        "Faris menyukat isi padu air di dalam silinder penyukat lalu mencatat bacaannya di dalam buku nota.",
        "Kanta pembesar itu memfokuskan cahaya matahari pada sekeping kertas."
      ],
      "correctIndex": 3,
      "explanation": "Ayat tunggal hanya mempunyai satu subjek ('Kanta pembesar itu') dan satu predikat ('memfokuskan cahaya matahari pada sekeping kertas') tanpa sebarang kata hubung. Pilihan lain ialah ayat majmuk kerana menggunakan kata hubung 'lalu', 'apabila', dan 'kerana'.",
      "ref": "Unit 16 (m/s 120-126, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_02",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "L",
      "q": "Lengkapkan peluasan subjek menggunakan klausa relatif yang paling tepat dalam ayat berikut:\n\n\"Alat pengesan asap ______ berbunyi nyaring sebaik sahaja mengesan kepulan asap.\"",
      "options": [
        "yang dipasang di siling makmal itu",
        "kerana mengesan bahaya kebakaran",
        "lalu memberikan amaran awal",
        "supaya semua murid segera keluar"
      ],
      "correctIndex": 0,
      "explanation": "Klausa relatif 'yang dipasang di siling makmal itu' memperluas frasa nama subjek 'Alat pengesan asap' secara gramatis sebelum predikat 'berbunyi nyaring...'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_03",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "L",
      "q": "Gabungkan dua ayat tunggal di bawah supaya menjadi ayat majmuk yang paling tepat maknanya.\n\nAyat 1: Hakimi menggunakan perisian penyuntingan audio.\nAyat 2: Suara rakamannya lebih jelas.",
      "options": [
        "Hakimi menggunakan perisian penyuntingan audio kecuali suara rakamannya lebih jelas.",
        "Hakimi menggunakan perisian penyuntingan audio sambil suara rakamannya lebih jelas.",
        "Hakimi menggunakan perisian penyuntingan audio supaya suara rakamannya lebih jelas.",
        "Hakimi menggunakan perisian penyuntingan audio tetapi suara rakamannya lebih jelas."
      ],
      "correctIndex": 2,
      "explanation": "Ayat kedua menyatakan tujuan kepada tindakan dalam ayat pertama, maka kata hubung keterangan tujuan 'supaya' ialah gabungan yang tepat.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_04",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "L",
      "q": "Antara berikut, manakah ayat majmuk gabungan?",
      "options": [
        "Guru memberitahu kami bahawa pameran teknologi akan bermula esok.",
        "Lengan robotik itu boleh mengangkat kotak yang berat dengan stabil.",
        "Pencetak tiga dimensi menghasilkan model rumah manakala pengimbas merekodkan bentuknya.",
        "Pengguna telefon pintar perlu mengemas kini aplikasi supaya peranti selamat."
      ],
      "correctIndex": 2,
      "explanation": "Ayat majmuk gabungan menggabungkan dua klausa setara menggunakan kata hubung gabungan seperti 'manakala'. Pilihan lain ialah ayat majmuk pancangan ('yang', 'supaya', 'bahawa').",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_05",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "L",
      "q": "Pilih ayat yang mengalami peluasan predikat untuk menerangkan cara inovasi itu berfungsi.",
      "options": [
        "Projek inovasi yang memenangi pingat emas itu dibina oleh murid sekolah.",
        "Bekas kompos automatik itu mengisar sisa makanan dengan menggunakan bilah pengisar keluli.",
        "Bekas kompos automatik yang berwarna hijau itu diletakkan di sudut taman.",
        "Kumpulan murid Tahun Enam itu menghasilkan bekas kompos automatik."
      ],
      "correctIndex": 1,
      "explanation": "Frasa keterangan cara 'dengan menggunakan bilah pengisar keluli' memperluas bahagian predikat bagi menjelaskan cara bekas kompos itu mengisar sisa makanan.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_06",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "M",
      "q": "Baca ayat di bawah dengan teliti.\n\n\"Mikroskop digital yang disambungkan ke skrin komputer itu memaparkan struktur sel daun dengan jelas.\"\n\nBahagian manakah yang merupakan peluasan subjek dalam ayat tersebut?",
      "options": [
        "memaparkan struktur sel daun",
        "yang disambungkan ke skrin komputer",
        "dengan jelas",
        "Mikroskop digital"
      ],
      "correctIndex": 1,
      "explanation": "'Mikroskop digital' ialah inti subjek, manakala klausa relatif 'yang disambungkan ke skrin komputer' memperluas subjek tersebut sebelum penentu 'itu'.",
      "ref": "Unit 16 (m/s 120-126, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_07",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "M",
      "q": "Pilih ayat tunggal daripada empat pilihan di bawah.",
      "options": [
        "Kereta kawalan jauh yang menggunakan panel suria itu bergerak pantas.",
        "Kereta kawalan jauh itu berhenti bergerak kerana baterinya sudah kehabisan cas.",
        "Kereta kawalan jauh itu bergerak pantas lalu melintasi garisan penamat.",
        "Kereta kawalan jauh berkuasa suria ciptaan Danish bergerak pantas di atas litar ujian."
      ],
      "correctIndex": 3,
      "explanation": "Ayat C hanya terdiri daripada satu subjek ('Kereta kawalan jauh berkuasa suria ciptaan Danish') dan satu predikat ('bergerak pantas di atas litar ujian') tanpa sebarang kata hubung.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_08",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "M",
      "q": "Bagaimanakah ayat tunggal \"Pasukan inovasi sekolah mencipta tong sampah pintar.\" paling tepat diluaskan pada bahagian predikat untuk menyatakan tujuan?",
      "options": [
        "Pasukan inovasi sekolah mencipta tong sampah pintar di bengkel Reka Bentuk dan Teknologi.",
        "Pasukan inovasi sekolah mencipta tong sampah pintar pada minggu lalu.",
        "Pasukan inovasi sekolah mencipta tong sampah pintar untuk memudahkan pengasingan sisa kitar semula.",
        "Pasukan inovasi sekolah yang gigih itu mencipta tong sampah pintar."
      ],
      "correctIndex": 2,
      "explanation": "Frasa keterangan 'untuk memudahkan pengasingan sisa kitar semula' memperluas predikat bagi menyatakan tujuan penciptaan tong sampah pintar.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_09",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "H",
      "q": "Baca ayat di bawah dengan teliti.\n\n\"Dron penyelamat yang dilengkapi kamera terma itu diterbangkan ke kawasan hutan supaya pasukan bomba dapat mengesan mangsa sesat dengan pantas.\"\n\nApakah binaan peluasan yang terdapat dalam ayat tersebut?",
      "options": [
        "Peluasan subjek melalui kata hubung gabungan dan peluasan predikat melalui kata seru.",
        "Peluasan subjek melalui klausa relatif dan peluasan predikat melalui klausa keterangan tujuan.",
        "Ayat tunggal yang mempunyai dua subjek dan satu predikat tanpa kata hubung.",
        "Peluasan predikat melalui klausa komplemen dan peluasan objek melalui kata bilangan."
      ],
      "correctIndex": 1,
      "explanation": "Klausa 'yang dilengkapi kamera terma' memperluas subjek 'Dron penyelamat', manakala klausa 'supaya pasukan bomba dapat mengesan mangsa sesat dengan pantas' memperluas predikat dengan keterangan tujuan.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s1_10",
      "unit": "t6",
      "skill": "t6_s1",
      "diff": "H",
      "q": "Teliti tiga maklumat berikut:\n1. Penggera pintu rumah berbunyi.\n2. Pintu dibuka pada waktu malam.\n3. Pemilik rumah menerima amaran pada telefon pintar.\n\nAntara ayat berikut, manakah gabungan ayat majmuk yang paling gramatis dan tepat maknanya?",
      "options": [
        "Penggera pintu rumah berbunyi supaya pintu dibuka pada waktu malam tetapi pemilik rumah menerima amaran pada telefon pintar.",
        "Penggera pintu rumah berbunyi sambil pintu dibuka pada waktu malam melainkan pemilik rumah menerima amaran pada telefon pintar.",
        "Apabila pintu dibuka pada waktu malam, penggera pintu rumah akan berbunyi dan pemilik rumah menerima amaran pada telefon pintar.",
        "Penggera pintu rumah berbunyi walaupun pintu dibuka pada waktu malam kerana pemilik rumah menerima amaran pada telefon pintar."
      ],
      "correctIndex": 2,
      "explanation": "Kata hubung keterangan masa/syarat 'Apabila' dan kata hubung gabungan 'dan' menyusun hubungan sebab-akibat serta kejadian berurutan secara logik dan gramatis.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.3.1)"
    },
    {
      "id": "d6_bm_t6_s2_01",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "L",
      "q": "Cip komputer di dalam komputer riba itu mampu ______ ribuan data dalam masa sesaat.",
      "options": [
        "menproses",
        "memeroses",
        "memproses",
        "memperoses"
      ],
      "correctIndex": 2,
      "explanation": "Kata pinjaman yang bermula dengan gugus konsonan 'pr' seperti 'proses' mengekalkan huruf 'p' apabila menerima imbuhan awalan 'meN-', lalu menjadi 'memproses'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_02",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "L",
      "q": "Air laut berubah menjadi wap air akibat haba matahari melalui proses ______.",
      "options": [
        "penyejatan",
        "penyejukan",
        "pemeluwapan",
        "pembekuan"
      ],
      "correctIndex": 0,
      "explanation": "Penyejatan ialah istilah sains bagi proses perubahan cecair kepada gas atau wap air apabila menerima haba.",
      "ref": "Unit 16 (m/s 120-126, DSKP 5.2.2)"
    },
    {
      "id": "d6_bm_t6_s2_03",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "L",
      "q": "Model awal robot pembersih pantai itu akan ______ di makmal sebelum diuji di kawasan sebenar.",
      "options": [
        "kesempurnaan",
        "tersempurna",
        "disempurnakan",
        "menyempurnakan"
      ],
      "correctIndex": 2,
      "explanation": "Subjek ayat ialah 'Model awal robot pembersih pantai itu', maka kata kerja pasif berimbuhan apitan 'di-...-kan' ('disempurnakan') paling tepat melengkapkan ayat.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_04",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "L",
      "q": "Sebelum menghasilkan produk secara besar-besaran, pasukan reka cipta membina ______ untuk menguji kebolehfungsian idea mereka.",
      "options": [
        "mikrocip",
        "litar",
        "penderia",
        "prototaip"
      ],
      "correctIndex": 3,
      "explanation": "Prototaip ialah model awal atau contoh pertama sesuatu rekaan baharu yang dibina untuk tujuan ujian dan penambahbaikan.",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.2.2)"
    },
    {
      "id": "d6_bm_t6_s2_05",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "L",
      "q": "Lampu jalan pintar itu dipasang bersama ______ cahaya supaya dapat menyala secara automatik apabila hari gelap.",
      "options": [
        "menderia",
        "terderia",
        "penderia",
        "deriaan"
      ],
      "correctIndex": 2,
      "explanation": "Awalan 'peN-' pada kata dasar 'deria' membentuk kata nama alat 'penderia' (sensor) yang berfungsi mengesan perubahan cahaya.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_06",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "M",
      "q": "Sistem kecerdasan buatan memudahkan ______ corak kerosakan pada panel suria sebelum bekalan elektrik terganggu.",
      "options": [
        "pengenal pastian",
        "dikenal pasti",
        "mengenalpastikan",
        "pengenalpastian"
      ],
      "correctIndex": 3,
      "explanation": "Apabila kata majmuk 'kenal pasti' menerima imbuhan apitan 'peN-...-an', kedua-dua kata dieja serangkai menjadi 'pengenalpastian'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.2.2)"
    },
    {
      "id": "d6_bm_t6_s2_07",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "M",
      "q": "Pilih ayat yang menggunakan kata berimbuhan dengan tepat.",
      "options": [
        "Jurutera tersebut mencuba menglap kanta mesin pengimbas dengan kain lembut.",
        "Saintis muda itu mencampuraduk dua jenis cecair kimia di dalam balang kaca.",
        "Panel solar itu membekali tenaga elektrik kepada seluruh bangunan makmal.",
        "Panel solar itu membekalkan tenaga elektrik kepada seluruh bangunan makmal."
      ],
      "correctIndex": 3,
      "explanation": "Imbuhan apitan 'meN-...-kan' pada 'membekalkan' tepat diikuti objek yang diberikan ('tenaga elektrik'). Pilihan lain salah kerana sepatutnya 'mengelap', 'membekalkan', dan 'mencampuradukkan'.",
      "ref": "Unit 16 (m/s 120-126, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_08",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "M",
      "q": "Robot penyedut habuk pintar membantu penghuni rumah menjaga ______ lantai tanpa perlu menyapu setiap hari.",
      "options": [
        "membersihkan",
        "dibersihkan",
        "kebersihan",
        "pembersihan"
      ],
      "correctIndex": 2,
      "explanation": "Kata nama terbitan berapitan 'ke-...-an' ('kebersihan') merujuk keadaan bersih yang dijaga, manakala 'pembersihan' merujuk perbuatan atau proses mencuci.",
      "ref": "Unit 16 (m/s 120-126, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_09",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "H",
      "q": "Kenal pasti ayat yang betul pengimbuhannya mengikut hukum Tatabahasa Dewan.",
      "options": [
        "Pemasangan panel suria pada bumbung sekolah dapat menjimatkan kos bil elektrik.",
        "Jurutera muda itu mempastikan setiap sambungan wayar robot berfungsi dengan baik.",
        "Murid-murid itu mengcat badan model robot solar dengan warna perak sebelum pertandingan bermula.",
        "Saintis itu menghadiahi ciptaan penapis air mesra alam kepada penduduk kampung."
      ],
      "correctIndex": 0,
      "explanation": "'Menjimatkan' tepat digunakan sebelum frasa nama 'kos bil elektrik'. Pilihan lain salah kerana 'mempastikan' (sepatutnya 'memastikan'), 'menghadiahi ciptaan... kepada...' (sepatutnya 'menghadiahkan ciptaan... kepada...'), dan 'mengcat' (sepatutnya 'mengecat' bagi kata dasar satu suku kata).",
      "ref": "Unit 18 (m/s 133-142, DSKP 5.2.1)"
    },
    {
      "id": "d6_bm_t6_s2_10",
      "unit": "t6",
      "skill": "t6_s2",
      "diff": "H",
      "q": "Perkataan 'mengautomasikan' dalam ayat \"Kilang moden itu mengautomasikan pembungkusan produk.\" paling tepat ditukar kepada kata nama proses berikut:\n\n\"______ pembungkusan produk di kilang moden itu menjimatkan masa dan tenaga kerja.\"",
      "options": [
        "Berautomasikan",
        "Diautomasikan",
        "Keautomasian",
        "Pengautomasian"
      ],
      "correctIndex": 3,
      "explanation": "Kata kerja apitan 'meN-...-kan' ('mengautomasikan') apabila ditukarkan kepada kata nama terbitan yang menyatakan proses menjadi 'peN-...-an', iaitu 'Pengautomasian'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 5.2.2)"
    },
    {
      "id": "d6_bm_t6_s3_01",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "L",
      "q": "Pilih ayat yang menggunakan ejaan kata majmuk mantap dengan betul.",
      "options": [
        "Setiap ahli pasukan memikul tanggung jawab menjaga peralatan di dalam makmal.",
        "Pertandingan inovasi antara bangsa itu disertai oleh murid dari sepuluh buah negara.",
        "Ketua pasukan menurunkan tanda tangan pada borang penyertaan pameran sains.",
        "Kejayaan projek robotik sekolah itu hasil kerjasama erat antara murid dengan guru."
      ],
      "correctIndex": 3,
      "explanation": "'Kerjasama', 'antarabangsa', 'tanggungjawab', dan 'tandatangan' ialah antara 15 kata majmuk mantap yang wajib dieja serangkai.",
      "ref": "Unit 18 (m/s 133-142, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_02",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "L",
      "q": "Pilih ayat yang betul penggunaan kata sendi nama 'di' dan imbuhan 'di-'.",
      "options": [
        "Bahan uji kaji itu disimpan didalam peti sejuk khas.",
        "Bahan uji kaji itu di simpan didalam peti sejuk khas.",
        "Bahan uji kaji itu di simpan di dalam peti sejuk khas.",
        "Bahan uji kaji itu disimpan di dalam peti sejuk khas."
      ],
      "correctIndex": 3,
      "explanation": "Imbuhan pasif 'di-' pada kata kerja 'disimpan' dieja serangkai, manakala kata sendi nama 'di' yang menunjukkan tempat ('di dalam') dieja terpisah.",
      "ref": "Unit 16 (m/s 120-126, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_03",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "L",
      "q": "Lengkapkan ayat berikut dengan ejaan yang betul mengikut kamus Dewan Bahasa dan Pustaka:\n\n\"Pameran sains itu menampilkan ______ alat kawalan jauh yang amat ______.\"",
      "options": [
        "reka bentuk ... canggeh",
        "reka bentuk ... canggih",
        "rekabentuk ... canggih",
        "rekabentuk ... canggeh"
      ],
      "correctIndex": 1,
      "explanation": "Kata majmuk bebas 'reka bentuk' hendaklah dieja terpisah sebagai dua perkataan, manakala 'canggih' dieja dengan huruf 'i' pada suku kata akhir mengikut hukum keselarasan vokal.",
      "ref": "Unit 17 (m/s 127-132, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_04",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "L",
      "q": "Pilih ayat yang menggunakan tanda sempang (-) dengan betul.",
      "options": [
        "Pada abad ke21, penghantaran laporan kajian sains sering dibuat melalui emel.",
        "Pada abad ke-21, penghantaran laporan kajian sains sering dibuat melalui emel.",
        "Pada abad ke 21, penghantaran laporan kajian sains sering dibuat melalui e-mel.",
        "Pada abad ke-21, penghantaran laporan kajian sains sering dibuat melalui e-mel."
      ],
      "correctIndex": 3,
      "explanation": "Tanda sempang digunakan antara awalan 'ke-' dengan angka ('ke-21') serta pada gabungan huruf dengan kata dasar seperti 'e-mel'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_05",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "L",
      "q": "Pilih ayat yang betul penggunaan kata pemeri 'ialah' atau 'adalah'.",
      "options": [
        "Tenaga suria adalah sumber tenaga bersih yang tidak mencemarkan alam.",
        "Ciri utama lampu LED ialah sangat tahan lama dan menjimatkan elektrik.",
        "Alat pengukur suhu cecair di makmal sains adalah termometer digital.",
        "Sistem penapisan air terbaharu itu adalah sangat canggih dan mesra pengguna."
      ],
      "correctIndex": 3,
      "explanation": "Kata pemeri 'adalah' hadir di hadapan frasa adjektif ('sangat canggih dan mesra pengguna') atau frasa sendi nama, manakala 'ialah' wajib hadir di hadapan frasa nama.",
      "ref": "Unit 16 (m/s 120-126, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_06",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "M",
      "q": "Pilih ayat yang betul penggunaan kata sendi nama 'dari' dan 'daripada'.",
      "options": [
        "Tenaga elektrik daripada panel suria itu lebih jimat dari bateri biasa.",
        "Bekas tanaman pintar itu diperbuat daripada botol plastik terpakai.",
        "Pameran inovasi itu berlangsung daripada pukul 9:00 pagi hingga pukul 4:00 petang.",
        "Bekas tanaman pintar itu diperbuat dari botol plastik terpakai."
      ],
      "correctIndex": 1,
      "explanation": "Kata sendi nama 'daripada' digunakan untuk menyatakan bahan asal kejadian sesuatu benda dan perbandingan, manakala 'dari' digunakan bagi masa, tempat, dan arah.",
      "ref": "Unit 18 (m/s 133-142, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_07",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "M",
      "q": "Ayat di bawah mengandungi kesalahan kelewahan bahasa.\n\n\"Semua murid-murid dikehendaki memakai apron makmal sebelum menjalankan uji kaji.\"\n\nPilih ayat yang telah dimurnikan dengan tepat.",
      "options": [
        "Semua para murid dikehendaki memakai apron makmal sebelum menjalankan uji kaji.",
        "Semua murid-murid adalah dikehendaki memakai apron makmal sebelum menjalankan uji kaji.",
        "Semua murid dikehendaki memakai apron makmal sebelum menjalankan uji kaji.",
        "Setiap murid-murid dikehendaki memakai apron makmal sebelum menjalankan uji kaji."
      ],
      "correctIndex": 2,
      "explanation": "Kata bilangan himpunan 'semua' sudah membawa maksud jamak, maka kata nama yang mengikutinya tidak perlu digandakan ('murid', bukan 'murid-murid') dan tidak boleh digabungkan dengan 'para'.",
      "ref": "Unit 16 (m/s 120-126, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_08",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "M",
      "q": "Pilih ayat yang paling gramatis dan bebas daripada kesalahan penggunaan penanda wacana atau kata hubung.",
      "options": [
        "Pencemaran plastik semakin membimbangkan; oleh itu, murid mencipta beg mesra alam daripada kanji ubi.",
        "Murid mencipta beg mesra alam daripada kanji ubi agar supaya pencemaran plastik dapat dikurangkan.",
        "Murid mencipta beg mesra alam daripada kanji ubi demi untuk mengurangkan pencemaran plastik.",
        "Sebab kerana pencemaran plastik semakin membimbangkan, murid mencipta beg mesra alam daripada kanji ubi."
      ],
      "correctIndex": 0,
      "explanation": "Penanda wacana 'oleh itu' digunakan dengan tepat untuk menyatakan kesan. Pilihan lain lewah kerana menggabungkan dua kata hubung serentak ('sebab kerana', 'demi untuk', 'agar supaya').",
      "ref": "Unit 18 (m/s 133-142, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_09",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "H",
      "q": "Kenal pasti ayat yang bebas daripada sebarang kesalahan ejaan, tanda baca, dan tatabahasa.",
      "options": [
        "Selain mengurangkan sisa elektronik, projek kitar semula komponen komputer itu turut memupuk kesedaran teknologi hijau.",
        "Selain mengurangkan sisa lektronik, projek kitar semula komponen komputer itu juga turut memupuk kesedaran teknologi hijau.",
        "Selain dari mengurangkan sisa elektronik projek kitar semula komponen komputer itu turut memupuk kesedaran teknologi hijau.",
        "Selain daripada mengurangkan sisa elektronik; projek kitar semula komponen komputer itu turut memupuk kesedaran teknologi hijau."
      ],
      "correctIndex": 0,
      "explanation": "Ayat A menggunakan ejaan 'elektronik' yang betul, koma selepas frasa pendahulu ayat, serta bebas daripada kelewahan 'juga turut' atau penggunaan salah 'selain dari'.",
      "ref": "Unit 18 (m/s 133-142, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s3_10",
      "unit": "t6",
      "skill": "t6_s3",
      "diff": "H",
      "q": "Ayat berikut tidak gramatis:\n\n\"Laporan hasil eksperimen pemisahan campuran itu telah disiapkan oleh kami sebelum waktu rehat.\"\n\nPilih pembetulan ayat yang paling tepat mengikut hukum ayat pasif Tatabahasa Dewan.",
      "options": [
        "Laporan hasil eksperimen pemisahan campuran itu telah kami siapkan sebelum waktu rehat.",
        "Laporan hasil eksperimen pemisahan campuran itu kami telah siapkan sebelum waktu rehat.",
        "Laporan hasil eksperimen pemisahan campuran itu telah disiapkan kami sebelum waktu rehat.",
        "Laporan hasil eksperimen pemisahan campuran itu telah kami menyiapkan sebelum waktu rehat."
      ],
      "correctIndex": 0,
      "explanation": "Bagi ayat pasif kata ganti nama diri pertama ('kami'), binaan 'di-... oleh kami' adalah salah. Kata bantu 'telah' mesti diletakkan di hadapan pelaku 'kami' diikuti kata kerja tanpa awalan ('siapkan').",
      "ref": "Unit 16 (m/s 120-126, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t6_s4_01",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "L",
      "q": "Apabila sebatang pensel dimasukkan ke dalam gelas yang berisi air, pensel itu kelihatan seolah-olah bengkok di permukaan air. Fenomena ini bukan berlaku kerana pensel tersebut patah, sebaliknya disebabkan oleh pembiasan cahaya. Cahaya bergerak lebih perlahan apabila melalui air berbanding dengan udara. Oleh itu, arah laluan cahaya berubah lalu menghasilkan kesan visual tersebut pada mata kita.\n\nMengapakah pensel di dalam gelas berisi air kelihatan bengkok?",
      "options": [
        "Pensel kayu akan membengkok apabila menyerap air dengan cepat.",
        "Cahaya bergerak lebih laju di dalam air berbanding dengan di udara.",
        "Arah laluan cahaya berubah apabila melalui medium yang berbeza.",
        "Air di dalam gelas memantulkan keseluruhan cahaya matahari ke udara."
      ],
      "correctIndex": 2,
      "explanation": "Petikan menyatakan bahawa cahaya bergerak lebih perlahan di dalam air berbanding dengan udara, menyebabkan arah laluan cahaya berubah (pembiasan) dan menghasilkan kesan pensel kelihatan bengkok.",
      "ref": "Unit 16 (m/s 120-126, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t6_s4_02",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "L",
      "q": "Keluarga Encik Azman memasang sistem pencahayaan pintar di rumah baharu mereka. Sistem ini membolehkan lampu ruang tamu dan halaman rumah dikawal melalui aplikasi telefon pintar walaupun mereka berada di luar kawasan. Selain itu, pemasa automatik akan memadamkan lampu pada pukul 6:30 pagi setiap hari. Langkah ini berjaya mengurangkan pembaziran tenaga elektrik dan menjimatkan bil bulanan keluarga mereka.\n\nApakah manfaat utama sistem pencahayaan pintar yang dipasang oleh keluarga Encik Azman?",
      "options": [
        "Memastikan semua lampu di dalam rumah menyala sepanjang siang dan malam.",
        "Menggantikan penggunaan telefon pintar dengan suis dinding tradisional.",
        "Mengurangkan pembaziran elektrik dan menjimatkan bil bulanan.",
        "Menghalang ahli keluarga daripada keluar rumah selepas pukul 6:30 pagi."
      ],
      "correctIndex": 2,
      "explanation": "Ayat terakhir petikan menyatakan secara langsung bahawa langkah tersebut mengurangkan pembaziran tenaga elektrik dan menjimatkan bil bulanan keluarga.",
      "ref": "Unit 17 (m/s 127-132, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t6_s4_03",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "L",
      "q": "\"Penggunaan beg beli-belah daripada gentian jagung merupakan langkah mesra alam yang wajar dicontohi.\"\n\nApakah maksud rangkai kata 'mesra alam' dalam ayat tersebut?",
      "options": [
        "Memerlukan tempoh ribuan tahun untuk mereput di dalam tanah.",
        "Dihasilkan di kilang besar dengan kos yang sangat tinggi.",
        "Tidak mendatangkan kemudaratan atau pencemaran kepada alam sekitar.",
        "Mudah dibawa ke pasar raya pada setiap hujung minggu."
      ],
      "correctIndex": 2,
      "explanation": "Rangkai kata 'mesra alam' bermaksud sifat sesuatu produk atau tindakan yang selamat dan tidak mencemarkan atau merosakkan alam sekitar.",
      "ref": "Unit 18 (m/s 133-142, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t6_s4_04",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "L",
      "q": "Sekumpulan murid Tahun Enam telah mencipta tong kitar semula pintar yang dinamakan Eko-Imbas. Tong ini dilengkapi pengimbas kod bar untuk mengenal pasti jenis bahan buangan seperti tin aluminium dan botol plastik. Setelah bahan dimasukkan, skrin kecil pada tong akan memaparkan mata ganjaran untuk pengguna. Inovasi ini bertujuan menggalakkan amalan pengasingan sisa pepejal di sekolah.\n\nBagaimanakah tong Eko-Imbas mengenal pasti jenis bahan buangan?",
      "options": [
        "Melalui warna baju murid yang berdiri di hadapan skrin kecil.",
        "Dengan menimbang berat sisa makanan di dalam ruang simpanan khas.",
        "Melalui arahan suara yang diberikan oleh pengguna sebelum membuang sampah.",
        "Dengan menggunakan pengimbas kod bar yang dipasang pada tong tersebut."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa tong Eko-Imbas dilengkapi pengimbas kod bar untuk mengenal pasti jenis bahan buangan seperti tin aluminium dan botol plastik.",
      "ref": "Unit 18 (m/s 133-142, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t6_s4_05",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "L",
      "q": "\"Enjin kenderaan elektrik beroperasi dengan lebih cekap kerana kurang tenaga terbazir dalam bentuk haba.\"\n\nPerkataan yang paling sesuai menggantikan kata 'cekap' dalam konteks ayat ini ialah ______.",
      "options": [
        "pantas",
        "garang",
        "sukar",
        "efisien"
      ],
      "correctIndex": 3,
      "explanation": "Dalam konteks operasi mesin atau enjin yang meminimumkan pembaziran tenaga, perkataan 'cekap' seerti dengan 'efisien'.",
      "ref": "Unit 17 (m/s 127-132, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t6_s4_06",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "M",
      "q": "Di kawasan pulau terpencil, penduduk sering menghadapi kekurangan bekalan air tawar yang bersih semasa musim kemarau. Bagi mengatasi masalah ini, jurutera membina loji penyahgaraman mudah alih yang dikuasakan oleh tenaga suria. Air laut dipanaskan sehingga tersejat menjadi wap air, manakala garam serta bendasing tertinggal di dalam takungan. Wap air bersih itu kemudian disejukkan melalui proses kondensasi untuk menghasilkan air minuman. Kini, penduduk pulau dapat menikmati bekalan air bersih tanpa bergantung sepenuhnya pada air hujan.\n\nBerdasarkan petikan, mengapakah garam tidak bercampur dengan air minuman yang terhasil?",
      "options": [
        "Garam tertinggal di dalam takungan semasa air laut tersejat menjadi wap.",
        "Tenaga suria melarutkan garam sehingga hilang daripada air laut.",
        "Proses kondensasi menukarkan garam laut menjadi wap air tawar.",
        "Garam ditapis menggunakan kain kasa sebelum air hujan dikumpulkan."
      ],
      "correctIndex": 0,
      "explanation": "Petikan menjelaskan bahawa semasa pemanasan air laut, hanya air yang tersejat menjadi wap air manakala garam serta bendasing tertinggal di dalam takungan.",
      "ref": "Unit 16 (m/s 120-126, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t6_s4_07",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "M",
      "q": "Kemajuan teknologi moden bukan sahaja membantu golongan biasa, malah membuka peluang pembelajaran yang lebih luas kepada murid berkeperluan khas. Pencetak Braille berkuasa tinggi membolehkan bahan bacaan digital ditukarkan kepada teks timbul dengan pantas. Di samping itu, perisian pembaca skrin membantu murid kurang penglihatan melayari bahan rujukan di Internet secara berdikari. Hal ini membuktikan bahawa teknologi mampu merapatkan jurang pendidikan dalam kalangan masyarakat.\n\nApakah kesimpulan yang paling tepat berdasarkan petikan di atas?",
      "options": [
        "Murid berkeperluan khas tidak lagi memerlukan buku teks bercetak di sekolah.",
        "Perisian pembaca skrin hanya boleh digunakan oleh murid yang mahir mencetak Braille.",
        "Teknologi membantu murid berkeperluan khas belajar dengan lebih berdikari dan setara.",
        "Internet tidak sesuai digunakan untuk mencari bahan rujukan pembelajaran harian."
      ],
      "correctIndex": 2,
      "explanation": "Keseluruhan petikan menekankan bahawa alat seperti pencetak Braille dan perisian pembaca skrin membolehkan murid berkeperluan khas belajar secara berdikari sekali gus merapatkan jurang pendidikan.",
      "ref": "Unit 17 (m/s 127-132, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t6_s4_08",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "M",
      "q": "\"Reka bentuk bangunan sekolah masa hadapan menekankan penggunaan tenaga lestari bagi mengurangkan pelepasan karbon.\"\n\nMaksud perkataan 'lestari' dalam ayat di atas ialah ______.",
      "options": [
        "murah dan boleh dibeli oleh semua murid",
        "sementara dan hanya digunakan pada waktu malam",
        "kekal dan tidak merosakkan keseimbangan alam",
        "rumit serta memerlukan pembaikan setiap minggu"
      ],
      "correctIndex": 2,
      "explanation": "Dalam konteks tenaga dan alam sekitar, 'lestari' bermaksud berkekalan, berterusan serta tidak memusnahkan keseimbangan alam sekitar.",
      "ref": "Unit 18 (m/s 133-142, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t6_s4_09",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "H",
      "q": "Dua orang murid dari Terengganu menjalankan kajian untuk menghasilkan cat penebat haba daripada serbuk kulit telur terbuang. Kalsium karbonat semula jadi di dalam kulit telur didapati berupaya memantulkan sebahagian sinaran haba apabila dicampurkan ke dalam cat berasaskan air. Hasil ujian makmal menunjukkan suhu di dalam model rumah yang disapu cat tersebut lebih rendah tiga darjah Celsius berbanding dengan model kawalan. Penemuan ini bukan sahaja mengurangkan sisa dapur, malah berpotensi menjimatkan penggunaan penyaman udara. Pihak sekolah merancang untuk mempatenkan formula mesra alam tersebut selepas ujian lanjutan selesai.\n\nApakah nilai inovasi terpenting yang terserlah daripada kajian murid tersebut?",
      "options": [
        "Membuktikan bahawa penyaman udara tidak lagi berfungsi pada suhu tinggi.",
        "Mengubah bahan buangan domestik menjadi produk penjimatan tenaga yang bernilai.",
        "Menggantikan semua bumbung rumah dengan kulit telur bagi menahan hujan.",
        "Menjual kulit telur mentah kepada kilang pembinaan tanpa sebarang pemprosesan."
      ],
      "correctIndex": 1,
      "explanation": "Kajian ini berjaya memanfaatkan sisa buangan (kulit telur) menjadi bahan penebat haba dalam cat yang menurunkan suhu bangunan dan berpotensi menjimatkan elektrik.",
      "ref": "Unit 18 (m/s 133-142, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t6_s4_10",
      "unit": "t6",
      "skill": "t6_s4",
      "diff": "H",
      "q": "Walaupun gajet pintar menawarkan maklumat di hujung jari, pengguna muda perlu bersikap bijaksana agar tidak leka. Tanpa kawalan masa yang berdisiplin, teknologi yang seharusnya menjadi pembantu boleh berubah menjadi punca kemerosotan fokus belajar. Oleh sebab itu, bimbingan ibu bapa dan kesedaran diri amat penting dalam menentukan had penggunaan peranti digital setiap hari. Keseimbangan antara masa skrin dengan aktiviti fizikal memastikan teknologi benar-benar memajukan diri kita.\n\nApakah mesej tersirat yang ingin disampaikan oleh penulis?",
      "options": [
        "Fokus belajar murid hanya bergantung pada kelajuan capaian Internet di rumah.",
        "Teknologi membawa manfaat sekiranya digunakan dengan kawalan kendiri yang baik.",
        "Maklumat di hujung jari sentiasa salah dan mengganggu kefahaman murid.",
        "Gajet pintar perlu diharamkan sepenuhnya daripada kegunaan murid sekolah."
      ],
      "correctIndex": 1,
      "explanation": "Petikan menekankan bahawa teknologi sangat berguna sebagai pembantu pembelajaran tetapi mesti diimbangi dengan disiplin masa dan kawalan diri supaya fokus belajar tidak terjejas.",
      "ref": "Unit 17 (m/s 127-132, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t7_s1_01",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "L",
      "q": "Pilih ayat penyata yang betul berdasarkan aktiviti penternakan moden.",
      "options": [
        "Kolam ternakan ikan tilapia itu dilengkapi kincir air untuk membekalkan oksigen.",
        "Sila periksa tahap keasidan air kolam sebelum memberi ikan makan.",
        "Berapakah jumlah anak ikan tilapia yang dilepaskan ke dalam kolam itu?",
        "Wah, besarnya saiz ikan tilapia di dalam kolam ternakan itu!"
      ],
      "correctIndex": 0,
      "explanation": "Ayat A menyatakan fakta tentang kelengkapan kolam ternakan dan diakhiri noktah, iaitu ciri ayat penyata. Pilihan lain ialah ayat seruan, ayat tanya, dan ayat perintah.",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_02",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "L",
      "q": "Lengkapkan ayat seruan di bawah dengan kata seru yang paling sesuai.\n\n\"______, suburnya pokok cili fertigasi di kebun komuniti taman ini!\"",
      "options": [
        "Wah",
        "Cis",
        "Aduh",
        "Nah"
      ],
      "correctIndex": 0,
      "explanation": "Kata seru 'Wah' digunakan untuk menyatakan perasaan kagum atau hairan terhadap sesuatu yang menarik, seperti kesuburan tanaman cili.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_03",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "L",
      "q": "Antara berikut, manakah ayat larangan yang sesuai diucapkan di kawasan kandang kambing?",
      "options": [
        "Jangan berikan makanan masin kepada anak kambing yang baru lahir itu.",
        "Sila pakai kasut but sebelum melangkah masuk ke kawasan kandang.",
        "Tolong bersihkan bekas minuman kambing di sudut kandang itu.",
        "Susun guni makanan ternakan itu di atas pelantar kayu supaya tidak lembap."
      ],
      "correctIndex": 0,
      "explanation": "Ayat larangan menggunakan kata larangan seperti 'jangan', 'usah', atau 'dilarang' untuk menegah seseorang daripada melakukan sesuatu.",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_04",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "L",
      "q": "Pilih ayat tanya yang paling gramatis mengikut hukum Tatabahasa Dewan.",
      "options": [
        "Apakah sebabnya daun pokok sawi itu bertukar kekuningan!",
        "Daun pokok sawi itu bertukar kekuningankah mengapa?",
        "Daun pokok sawi itu mengapakah bertukar kekuningan?",
        "Mengapakah daun pokok sawi itu bertukar kekuningan?"
      ],
      "correctIndex": 3,
      "explanation": "'Mengapakah daun pokok sawi itu bertukar kekuningan?' betul dari segi struktur dan tanda soal (?). Pilihan lain salah kerana meletakkan 'mengapakah' di tengah ayat, menggunakan tanda seru (!), atau menggabungkan '-kah' dan 'mengapa' secara janggal.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_05",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "L",
      "q": "Lengkapkan ayat silaan berikut:\n\n\"______ nikmati madu kelulut asli yang baru dituai dari ladang kami.\"",
      "options": [
        "Jemput",
        "Usah",
        "Tolong",
        "Harap"
      ],
      "correctIndex": 0,
      "explanation": "Ayat silaan menggunakan kata silaan seperti 'sila' atau 'jemput' untuk mempersilakan seseorang melakukan sesuatu dengan sopan.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_06",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "M",
      "q": "Baca ayat perintah berikut:\n\n\"Minta semua peserta projek kebun bandar mencatat jumlah tuaian sayur setiap minggu.\"\n\nApakah subjenis ayat perintah tersebut?",
      "options": [
        "Ayat permintaan",
        "Ayat silaan",
        "Ayat suruhan",
        "Ayat larangan"
      ],
      "correctIndex": 0,
      "explanation": "Penggunaan kata permintaan 'Minta' (seperti juga 'tolong' dan 'harap') menandakan ayat tersebut tergolong dalam ayat permintaan.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_07",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "M",
      "q": "Pilih ayat seruan yang paling tepat untuk mengucapkan tahniah kepada seorang penternak muda yang berjaya.",
      "options": [
        "Eh, usaha gigih kamu menternak udang galah telah membuahkan hasil yang lumayan!",
        "Syabas, usaha gigih kamu menternak udang galah telah membuahkan hasil yang lumayan!",
        "Amboi, usaha gigih kamu menternak udang galah telah membuahkan hasil yang lumayan!",
        "Syabas! usaha gigih kamu menternak udang galah telah membuahkan hasil yang lumayan."
      ],
      "correctIndex": 1,
      "explanation": "Kata seru 'Syabas' digunakan untuk menyatakan rasa gembira atau tahniah atas kejayaan, diikuti tanda koma dan diakhiri tanda seru (!) di hujung ayat.",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_08",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "M",
      "q": "Antara ayat berikut, manakah ayat tanya tertutup yang memerlukan jawapan 'ya' atau 'tidak'?",
      "options": [
        "Sistem akuaponik sesuai dipasang di halaman rumah yang sempit.",
        "Bilakah sistem akuaponik sesuai dipasang di kawasan halaman rumah yang sempit?",
        "Di manakah sistem akuaponik sesuai dipasang di kawasan halaman rumah yang sempit?",
        "Adakah sistem akuaponik sesuai dipasang di kawasan halaman rumah yang sempit?"
      ],
      "correctIndex": 3,
      "explanation": "Ayat tanya tertutup ialah ayat tanya yang memerlukan jawapan 'ya' atau 'tidak' dan dibina menggunakan kata penanya 'Adakah' serta diakhiri tanda soal (?). Pilihan lain ialah ayat tanya terbuka ('Di manakah', 'Bilakah') dan ayat penyata.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_09",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "H",
      "q": "Baca ayat penyata di bawah:\n\n\"Encik Razak menggunakan sabut kelapa sebagai medium tanaman hidroponik kerana bahan itu mampu mengekalkan kelembapan akar.\"\n\nPilih ayat tanya yang paling tepat jika jawapan yang dikehendaki ialah \"kerana bahan itu mampu mengekalkan kelembapan akar\".",
      "options": [
        "Apakah bahan yang digunakan oleh Encik Razak sebagai medium tanaman hidroponik?",
        "Mengapakah Encik Razak menggunakan sabut kelapa sebagai medium tanaman hidroponik?",
        "Siapakah yang menggunakan sabut kelapa sebagai medium tanaman hidroponik?",
        "Bagaimanakah Encik Razak memproses sabut kelapa untuk tanaman hidroponik?"
      ],
      "correctIndex": 1,
      "explanation": "Bahagian jawapan yang bermula dengan 'kerana...' menyatakan sebab, maka kata tanya yang paling tepat ialah 'Mengapakah'.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s1_10",
      "unit": "t7",
      "skill": "t7_s1",
      "diff": "H",
      "q": "Teliti empat ayat berikut yang mewakili pelbagai jenis ayat. Ayat manakah yang salah dari segi binaan jenis ayat atau tanda bacanya?",
      "options": [
        "Sistem pengairan titis menyalurkan air terus ke zon akar tanaman secara terkawal.",
        "Aduhai, kasihan sungguh melihat anak itik yang kesejukan di tepi kolam itu!",
        "Apakah jenis baja organik yang sesuai digunakan untuk menyuburkan tanaman sawi itu!",
        "Tolong pastikan pintu pagar kebun sayur dikunci rapat sebelum pulang."
      ],
      "correctIndex": 2,
      "explanation": "Ayat 'Apakah jenis baja organik yang sesuai digunakan untuk menyuburkan tanaman sawi itu!' ialah ayat tanya, oleh itu wajib diakhiri dengan tanda soal (?), bukan tanda seru (!).",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.3.2)"
    },
    {
      "id": "d6_bm_t7_s2_01",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "L",
      "q": "Pak Cik Samad sangat disenangi oleh pekerja ladang ternakannya kerana sikapnya yang ______ membantu membersihkan reban setiap pagi.",
      "options": [
        "cepat tangan",
        "ringan mulut",
        "ringan tulang",
        "berat tulang"
      ],
      "correctIndex": 2,
      "explanation": "Simpulan bahasa 'ringan tulang' bermaksud rajin bekerja dan suka membantu.",
      "ref": "Unit 19 (m/s 144-150, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_02",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "L",
      "q": "Petani muda itu sanggup ______ di bawah terik matahari demi memastikan tanaman nanasnya membuahkan hasil berkualiti tinggi.",
      "options": [
        "mandi peluh",
        "atas pagar",
        "buah tangan",
        "angkat kaki"
      ],
      "correctIndex": 0,
      "explanation": "Simpulan bahasa 'mandi peluh' bermaksud bekerja keras dengan bersungguh-sungguh sehingga berpeluh.",
      "ref": "Unit 20 (m/s 151-156, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_03",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "L",
      "q": "Puan Salma menyimpan sebahagian kecil keuntungan jualan telur puyuh setiap hari sehingga akhirnya mampu membeli mesin penetas baharu. Keadaan ini sesuai dengan peribahasa ______.",
      "options": [
        "sudah jatuh ditimpa tangga",
        "harapkan pagar, pagar makan padi",
        "bagaimana acuan, begitulah kuihnya",
        "sedikit-sedikit, lama-lama menjadi bukit"
      ],
      "correctIndex": 3,
      "explanation": "Peribahasa 'sedikit-sedikit, lama-lama menjadi bukit' bermaksud usaha atau simpanan kecil yang dilakukan secara berterusan akhirnya akan membuahkan hasil besar.",
      "ref": "Unit 19 (m/s 144-150, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_04",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "L",
      "q": "Sistem akuaponik membolehkan Afiq menternak ikan keli dan menanam sayur bayam secara serentak dalam satu kitaran air. Peribahasa yang paling tepat menggambarkan kaedah ini ialah ______.",
      "options": [
        "bagai kacang lupakan kulit",
        "sambil menyelam minum air",
        "melentur buluh biarlah dari rebungnya",
        "nasi sudah menjadi bubur"
      ],
      "correctIndex": 1,
      "explanation": "'Sambil menyelam minum air' bermaksud melakukan dua pekerjaan atau memperoleh dua manfaat dalam satu masa yang sama.",
      "ref": "Unit 21 (m/s 157-166, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_05",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "L",
      "q": "Sebelum musim tengkujuh tiba, pengusaha kebun sayur itu membina parit saliran yang lebih dalam bagi mengelakkan tanaman rosak akibat banjir. Tindakan ini menepati maksud peribahasa ______.",
      "options": [
        "sediakan payung sebelum hujan",
        "sudah terhantuk baru tengadah",
        "seperti ketam mengajar anaknya berjalan betul",
        "air dicencang tidak akan putus"
      ],
      "correctIndex": 0,
      "explanation": "'Sediakan payung sebelum hujan' bermaksud bersiap sedia lebih awal sebelum ditimpa kesusahan atau bencana.",
      "ref": "Unit 20 (m/s 151-156, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_06",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "M",
      "q": "Pada mulanya, percubaan Hafiz menanam strawberi di tanah rendah menemui kegagalan, namun dia terus membuat kajian suhu dan baja sehingga berjaya menuai buah yang manis. Peribahasa yang paling sesuai dengan kesungguhan Hafiz ialah ______.",
      "options": [
        "jika tidak dipecahkan ruyung, manakan dapat sagunya",
        "bulat air kerana pembetung, bulat manusia kerana muafakat",
        "lembu punya susu, sapi dapat nama",
        "seperti mencurah air ke daun keladi"
      ],
      "correctIndex": 0,
      "explanation": "'Jika tidak dipecahkan ruyung, manakan dapat sagunya' bermaksud cita-cita atau kejayaan tidak akan tercapai tanpa usaha yang bersungguh-sungguh.",
      "ref": "Unit 21 (m/s 157-166, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_07",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "M",
      "q": "\"Walaupun menghadapi cabaran cuaca panas dan harga makanan ternakan yang meningkat, Amirul berpegang pada prinsip 'genggam bara api biar sampai jadi arang'.\"\n\nApakah maksud peribahasa tersebut dalam ayat di atas?",
      "options": [
        "Menyerahkan tugas berat kepada rakan kongsi tanpa pengawasan.",
        "Membakar sisa pertanian di hujung ladang pada waktu petang.",
        "Meneruskan sesuatu pekerjaan yang sukar dengan tabah sehingga mencapai kejayaan.",
        "Menghentikan projek penternakan apabila keuntungan mula menurun."
      ],
      "correctIndex": 2,
      "explanation": "'Genggam bara api biar sampai jadi arang' membawa maksud melakukan pekerjaan yang sukar dengan penuh kesabaran dan ketabahan hingga berhasil.",
      "ref": "Unit 19 (m/s 144-150, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_08",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "M",
      "q": "Pilih ayat yang menggunakan peribahasa dengan tepat mengikut konteks pertanian dan usaha.",
      "options": [
        "Encik Johan bersikap hangat-hangat tahi ayam kerana berjaya meluaskan kebun halianya ke lima buah daerah.",
        "Kejayaan petani itu menanam anggur di kawasan bandar ibarat melepaskan batuk di tangga.",
        "Modal perniagaan baja kompos itu hilang begitu sahaja bagai isi dengan kuku.",
        "Penduduk kampung berganding bahu seperti aur dengan tebing untuk membina rumah hijau komuniti."
      ],
      "correctIndex": 3,
      "explanation": "'Seperti aur dengan tebing' bermaksud saling tolong-menolong dan bekerjasama. Pilihan lain menggunakan peribahasa yang berlawanan makna dengan konteks kejayaan atau kerugian.",
      "ref": "Unit 20 (m/s 151-156, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_09",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "H",
      "q": "Baca situasi di bawah:\n\n\"Sebelum membuka ladang ternakan lembu tenusu berskala besar, Syarikat Tani Maju menilai modal kewangan, keluasan tanah, dan bilangan tenaga kerja yang dimiliki terlebih dahulu agar tidak menanggung hutang berlebihan.\"\n\nPeribahasa manakah yang paling tepat menggambarkan kebijaksanaan perancangan tersebut?",
      "options": [
        "Berat sama dipikul, ringan sama dijinjing",
        "Seperti katak di bawah tempurung",
        "Ukur baju di badan sendiri",
        "Kais pagi makan pagi, kais petang makan petang"
      ],
      "correctIndex": 2,
      "explanation": "'Ukur baju di badan sendiri' bermaksud melakukan atau merancang sesuatu projek mengikut kemampuan diri sendiri supaya tidak terbeban.",
      "ref": "Unit 21 (m/s 157-166, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s2_10",
      "unit": "t7",
      "skill": "t7_s2",
      "diff": "H",
      "q": "Teliti dialog ringkas berikut:\n\nFarah: \"Saya teringin mengusahakan kebun bandar secara hidroponik, tetapi saya tidak mempunyai ruang tanah yang luas.\"\nCikgu Lim: \"Jangan risau, Farah. Gunakan rak bertingkat di koridor rumah. Bak kata peribahasa, ______.\"\n\nPeribahasa manakah yang paling sesuai dilengkapkan oleh Cikgu Lim?",
      "options": [
        "sudah dapat gading bertuah, tanduk tidak berguna lagi",
        "harapkan pagar, pagar makan padi",
        "bagai enau dalam belukar, melepaskan pucuk masing-masing",
        "hendak seribu daya, tak hendak seribu dalih"
      ],
      "correctIndex": 3,
      "explanation": "'Hendak seribu daya, tak hendak seribu dalih' bermaksud jika seseorang benar-benar mahu melakukan sesuatu, dia akan mencari ikhtiar walaupun terdapat kekangan.",
      "ref": "Unit 21 (m/s 157-166, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_01",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "L",
      "q": "Pak Cik Hashim mengusahakan ______ tanah terbiar di hujung kampung untuk menanam pokok jagung manis.",
      "options": [
        "sekeping",
        "sebidang",
        "sebatang",
        "sebuah"
      ],
      "correctIndex": 1,
      "explanation": "Penjodoh bilangan bagi kawasan tanah, kebun, atau sawah yang luas ialah 'bidang'.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_02",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "L",
      "q": "Ibu menanam lima ______ serai wangi di sudut halaman rumah untuk kegunaan memasak.",
      "options": [
        "tandan",
        "ulas",
        "bilah",
        "rumpun"
      ],
      "correctIndex": 3,
      "explanation": "Tumbuhan yang tumbuh berkelompok daripada satu pangkal seperti serai, tebu, buluh, dan padi menggunakan penjodoh bilangan 'rumpun'.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_03",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "L",
      "q": "Pekerja ladang itu mengasah dua ______ sabit yang tajam sebelum keluar menuai buah kelapa sawit.",
      "options": [
        "buah",
        "batang",
        "bilah",
        "butir"
      ],
      "correctIndex": 2,
      "explanation": "Penjodoh bilangan bagi benda yang tajam atau bermata seperti sabit, parang, dan pisau ialah 'bilah'.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_04",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "L",
      "q": "Setiap petang, Danish membantu datuknya membersihkan ______ ayam yang luas supaya ternakan itu sentiasa sihat.",
      "options": [
        "sarang",
        "reban",
        "kolam",
        "jelapang"
      ],
      "correctIndex": 1,
      "explanation": "Tempat memelihara ayam dipanggil 'reban'. 'Kolam' untuk ternakan air seperti ikan, 'sarang' untuk tempat burung bertelur atau tinggal, dan 'jelapang' untuk menyimpan padi.",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_05",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "L",
      "q": "Kaedah penanaman ______ menyalurkan air dan larutan baja secara terus ke akar pokok melalui paip titisan.",
      "options": [
        "pemangkasan",
        "penanaman bergilir",
        "pembajaan tabur",
        "fertigasi"
      ],
      "correctIndex": 3,
      "explanation": "Fertigasi ialah kaedah penanaman moden yang menggabungkan pembajaan dan pengairan titis secara serentak ke zon akar pokok.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_06",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "M",
      "q": "\"Datuk memotong se______ pisang nangka dari kebun, lalu memberikan dua ______ pisang itu kepada jiran sebelah.\"\n\nPilih pasangan penjodoh bilangan yang paling tepat.",
      "options": [
        "gugus ... biji",
        "rumpun ... keping",
        "batang ... ulas",
        "tandan ... sisir"
      ],
      "correctIndex": 3,
      "explanation": "Keseluruhan gugusan buah pisang pada satu tangkai utama menggunakan 'tandan', manakala bahagian susunan pisang yang diceraikan daripadanya menggunakan 'sisir' (atau 'sikat').",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_07",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "M",
      "q": "Dari atas bukit itu, kelihatan se______ lembu tenusu sedang meragut rumput segar manakala tiga ______ kambing berteduh di bawah pokok rendang.",
      "options": [
        "gerombolan ... batang",
        "angkatan ... biji",
        "kawan ... ekor",
        "pasukan ... buah"
      ],
      "correctIndex": 2,
      "explanation": "Kumpulan haiwan secara kolektif menggunakan penjodoh bilangan 'kawan', manakala bilangan individu haiwan menggunakan 'ekor'.",
      "ref": "Unit 19 (m/s 144-150, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_08",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "M",
      "q": "Sisa sayur-sayuran dan daun kering yang direputkan secara semula jadi untuk menyuburkan tanah tanaman dikenali sebagai ______.",
      "options": [
        "racun serangga",
        "baja kompos",
        "sabut kelapa",
        "baja kimia"
      ],
      "correctIndex": 1,
      "explanation": "Baja kompos terhasil daripada proses pereputan bahan organik seperti sisa tumbuhan dan daun kering.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_09",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "H",
      "q": "Pilih ayat yang menggunakan penjodoh bilangan dengan betul keseluruhannya.",
      "options": [
        "Di sebelah empat petak sawah padi itu, terdapat tiga rumpun serai wangi dan dua batang pokok rambutan.",
        "Di sebelah empat keping sawah padi itu, terdapat tiga butir serai wangi dan dua tangkai pokok rambutan.",
        "Di sebelah empat buah sawah padi itu, terdapat tiga pangsa serai wangi dan dua bilah pokok rambutan.",
        "Di sebelah empat helai sawah padi itu, terdapat tiga ulas serai wangi dan dua buah pokok rambutan."
      ],
      "correctIndex": 0,
      "explanation": "Sawah padi diukur mengikut 'petak', tumbuhan yang tumbuh berkelompok seperti serai wangi menggunakan 'rumpun', dan pokok menggunakan 'batang'.",
      "ref": "Unit 20 (m/s 151-156, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s3_10",
      "unit": "t7",
      "skill": "t7_s3",
      "diff": "H",
      "q": "Baca pernyataan berikut:\n\n\"Penternak memilih ______ lembu yang tahan lasak terhadap cuaca tropika, manakala pekebun memelihara lebah kelulut di dusun buah-buahan untuk membantu proses ______ bunga.\"\n\nPilih pasangan kosa kata yang paling tepat.",
      "options": [
        "benih ... pengawetan",
        "spesies ... penyejatan",
        "baka ... pendebungaan",
        "zuriat ... penapaian"
      ],
      "correctIndex": 2,
      "explanation": "Istilah 'baka' merujuk keturunan atau jenis haiwan ternakan yang mempunyai ciri tertentu, manakala 'pendebungaan' ialah pemindahan debunga pada bunga untuk persenyawaan buah.",
      "ref": "Unit 21 (m/s 157-166, DSKP 5.1.1)"
    },
    {
      "id": "d6_bm_t7_s4_01",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "L",
      "q": "Encik Fauzi mengusahakan ternakan lebah kelulut di kawasan dusun buah-buahan milik keluarganya. Lebah kelulut tidak mempunyai sengat, maka haiwan kecil ini selamat dipelihara berhampiran kawasan rumah. Selain menghasilkan madu yang kaya dengan khasiat, lebah kelulut juga membantu mendebungakan bunga pokok buah-buahan. Hasil jualan madu kelulut tersebut menjadi sumber pendapatan sampingan yang lumayan kepada keluarga Encik Fauzi.\n\nMengapakah lebah kelulut selamat dipelihara berhampiran kawasan rumah?",
      "options": [
        "Lebah kelulut memakan buah-buahan yang telah gugur ke tanah.",
        "Madu kelulut tidak digemari oleh serangga perosak tanaman.",
        "Lebah kelulut hanya aktif terbang pada waktu malam sahaja.",
        "Lebah kelulut tidak mempunyai sengat yang berbahaya."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan secara jelas bahawa lebah kelulut tidak mempunyai sengat, justeru selamat dipelihara berhampiran rumah.",
      "ref": "Unit 19 (m/s 144-150, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_02",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "L",
      "q": "Kelab Pertanian Sekolah Kebangsaan Taman Harmoni menjalankan projek tanaman sayur secara hidroponik di tepi makmal sains. Melalui kaedah ini, anak benih sawi ditanam di dalam cawan berlubang yang berisi batu kerikil halus dan sabut kelapa tanpa menggunakan tanah. Air yang mengandungi nutrien lengkap dipam ke dalam takung supaya akar tanaman sentiasa mendapat bekalan zat. Selepas empat minggu, sayur sawi yang segar dan bebas racun kimia berjaya dituai.\n\nApakah bahan yang digunakan di dalam cawan berlubang untuk menyokong anak benih sawi tersebut?",
      "options": [
        "Racun kimia dan serbuk kayu kering.",
        "Batu kerikil halus dan sabut kelapa.",
        "Daun kering dan sisa makanan dapur.",
        "Tanah liat hitam dan pasir sungai."
      ],
      "correctIndex": 1,
      "explanation": "Ayat kedua petikan menerangkan bahawa anak benih ditanam di dalam cawan berlubang yang berisi batu kerikil halus dan sabut kelapa.",
      "ref": "Unit 20 (m/s 151-156, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_03",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "L",
      "q": "Teliti maklumat berikut:\n- Haiwan ternakan: Kambing boer\n- Kelebihan: Daging kurang lemak dan cepat membesar\n- Makanan utama: Rumput napier dan dedak\n\nPilih olahan ayat yang paling tepat dan lengkap berdasarkan kesemua maklumat di atas.",
      "options": [
        "Kambing boer hanya memakan daging yang kurang lemak dan rumput napier di dalam kandang.",
        "Daging kambing boer tidak sesuai dimakan kerana haiwan itu cepat membesar.",
        "Rumput napier dan dedak cepat membesar apabila dimakan oleh kambing boer setiap hari.",
        "Kambing boer yang diberi makan rumput napier dan dedak cepat membesar serta menghasilkan daging yang kurang lemak."
      ],
      "correctIndex": 3,
      "explanation": "Pilihan D menggabungkan ketiga-tiga maklumat (haiwan, makanan, dan kelebihan) dalam satu ayat majmuk yang gramatis tanpa mengubah fakta.",
      "ref": "Unit 19 (m/s 144-150, DSKP 3.3.1)"
    },
    {
      "id": "d6_bm_t7_s4_04",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "L",
      "q": "Penduduk pangsapuri Sri Melor mengubah ruang bumbung bangunan yang terbiar menjadi kebun komuniti bandar. Mereka menggunakan botol plastik terpakai dan bekas polistirena sebagai pasu untuk menanam pokok pudina, daun kesum, dan cili padi. Setiap pagi hujung minggu, penduduk bergilir-gilir menyiram tanaman serta berkongsi hasil tuaian sesama jiran. Aktiviti ini bukan sahaja menjimatkan perbelanjaan dapur, malah mengeratkan hubungan silaturahim dalam kalangan komuniti.\n\nApakah tujuan utama penduduk pangsapuri Sri Melor menggunakan botol plastik terpakai dan bekas polistirena?",
      "options": [
        "Sebagai atap baharu bagi melindungi ruang bumbung daripada hujan.",
        "Sebagai pasu untuk menanam tanaman herba dan sayur-sayuran.",
        "Untuk dijual semula kepada kilang kitar semula di bandar.",
        "Untuk menakung air hujan bagi kegunaan mencuci kenderaan."
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan bahawa botol plastik terpakai dan bekas polistirena dijadikan pasu bagi menanam pokok pudina, daun kesum, dan cili padi.",
      "ref": "Unit 20 (m/s 151-156, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_05",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "L",
      "q": "Susun ayat-ayat di bawah supaya menjadi pengolahan perenggan yang berturutan tentang penanaman jagung:\n\n1. Biji benih jagung dimasukkan ke dalam lubang sedalam tiga sentimeter.\n2. Batas tanah digemburkan dan dicampurkan dengan baja organik.\n3. Selepas kira-kira sepuluh minggu, tongkol jagung yang matang sedia dituai.\n4. Anak pokok disiram setiap pagi dan petang agar tumbuh subur.",
      "options": [
        "2, 1, 4, 3",
        "1, 2, 3, 4",
        "3, 2, 1, 4",
        "2, 4, 1, 3"
      ],
      "correctIndex": 0,
      "explanation": "Urutan proses bertani yang logik bermula dengan penyediaan tanah (2), penanaman biji benih (1), penjagaan dan penyiraman (4), dan diakhiri penuaian hasil (3).",
      "ref": "Unit 21 (m/s 157-166, DSKP 3.3.1)"
    },
    {
      "id": "d6_bm_t7_s4_06",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "M",
      "q": "Penternakan ikan air tawar boleh dijalankan sama ada di dalam kolam tanah mahupun di dalam sangkar yang diletakkan di sungai. Di dalam kolam tanah, penternak perlu mengawal mutu air serta membersihkan dasar kolam secara berkala bagi mengelakkan pengumpulan sisa makanan. Sebaliknya, sangkar ikan di sungai menerima aliran air semula jadi yang sentiasa membekalkan oksigen terlarut kepada ikan. Walau bagaimanapun, penternak sangkar perlu berwaspada ketika musim hujan lebat kerana arus deras boleh merosakkan jaring sangkar. Oleh itu, pemilihan kaedah ternakan bergantung pada lokasi dan tahap pengurusan yang mampu disediakan oleh penternak.\n\nBerdasarkan petikan, apakah kelebihan penternakan ikan di dalam sangkar sungai berbanding dengan kolam tanah?",
      "options": [
        "Penternak sangkar tidak menghadapi sebarang risiko ketika musim hujan lebat.",
        "Aliran air sungai semula jadi sentiasa membekalkan oksigen kepada ikan.",
        "Jaring sangkar sungai bertahan selamanya tanpa perlu diperiksa oleh penternak.",
        "Ikan di dalam sangkar sungai tidak memerlukan makanan tambahan langsung."
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan bahawa sangkar ikan di sungai menerima aliran air semula jadi yang sentiasa membekalkan oksigen terlarut kepada ikan.",
      "ref": "Unit 21 (m/s 157-166, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_07",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "M",
      "q": "Dahulu, penternak ayam kampung bergantung sepenuhnya pada ibu ayam untuk mengeramkan telur sehingga menetas. Kaedah tradisional ini mengambil masa yang lama dan jumlah anak ayam yang hidup sering terjejas akibat cuaca tidak menentu. Kini, penggunaan mesin penetas telur automatik membolehkan suhu dan kelembapan dikawal pada tahap optimum sepanjang masa. Hasilnya, kadar penetasan telur meningkat sehingga melebihi lapan puluh peratus dalam setiap pusingan. Perubahan ini membantu penternak kecil menggandakan pengeluaran dan memenuhi permintaan pasaran dengan lebih stabil.\n\nApakah kesan langsung penggunaan mesin penetas telur automatik kepada penternak kecil?",
      "options": [
        "Penternak tidak lagi perlu memasarkan anak ayam kepada pengguna.",
        "Tempoh pengeraman telur menjadi lebih perlahan berbanding kaedah tradisional.",
        "Kadar penetasan telur meningkat dan pengeluaran menjadi lebih stabil.",
        "Ibu ayam kampung berhenti bertelur apabila cuaca menjadi terlalu panas."
      ],
      "correctIndex": 2,
      "explanation": "Dua ayat terakhir petikan menjelaskan bahawa kadar penetasan meningkat melebihi 80 peratus dan membantu penternak kecil menggandakan pengeluaran serta menstabilkan bekalan pasaran.",
      "ref": "Unit 19 (m/s 144-150, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_08",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "M",
      "q": "Olah nota ringkas berikut menjadi satu ayat yang padat dan gramatis.\n\nNota 1: Baja organik daripada tahi cacing vermikompos selamat untuk tanaman.\nNota 2: Baja organik ini membaiki struktur tanah kebun.\nNota 3: Baja organik ini tidak membahayakan kesihatan pengguna.",
      "options": [
        "Baja organik daripada tahi cacing vermikompos selamat untuk tanaman dan baja organik ini membaiki struktur tanah kebun dan baja organik ini tidak membahayakan kesihatan.",
        "Walaupun selamat untuk tanaman, baja organik daripada tahi cacing vermikompos membaiki struktur tanah kebun.",
        "Struktur tanah kebun membaiki baja organik daripada tahi cacing vermikompos supaya kesihatan pengguna selamat.",
        "Baja organik daripada tahi cacing vermikompos selamat untuk tanaman kerana mampu membaiki struktur tanah kebun serta tidak membahayakan kesihatan pengguna."
      ],
      "correctIndex": 3,
      "explanation": "Pilihan A menggabungkan ketiga-tiga isi dengan kata hubung 'kerana' dan 'serta' tanpa mengulang subjek secara lewah dan mengekalkan maksud asal.",
      "ref": "Unit 20 (m/s 151-156, DSKP 3.3.1)"
    },
    {
      "id": "d6_bm_t7_s4_09",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "H",
      "q": "Para pesawah di Kedah semakin menggalakkan penggunaan burung hantu jelapang sebagai agen kawalan biologi di sawah padi. Seekor burung hantu dewasa mampu memburu beberapa ekor tikus sawah pada setiap malam tanpa merosakkan pokok padi. Pendekatan semula jadi ini mengurangkan kebergantungan pesawah terhadap racun tikus kimia yang mahal dan berisiko mencemarkan sumber air. Selain menjaga keseimbangan ekosistem sawah, kos operasi pesawah pada setiap musim menuai juga dapat dijimatkan. Kejayaan ini membuktikan bahawa kerjasama antara manusia dengan alam semula jadi mampu menjamin kelestarian pengeluaran makanan negara.\n\nMengapakah penggunaan burung hantu jelapang dianggap lebih mampan berbanding penggunaan racun tikus kimia?",
      "options": [
        "Racun tikus kimia hanya berkesan membasmi serangga kecil dan bukannya tikus sawah.",
        "Burung hantu jelapang memakan semua haiwan di dalam sawah termasuk pokok padi yang matang.",
        "Burung hantu jelapang dapat membantu pesawah menuai padi dengan lebih pantas pada waktu malam.",
        "Mengawal populasi tikus secara semula jadi sambil menjaga kebersihan air dan menjimatkan kos."
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan bahawa burung hantu memburu tikus tanpa merosakkan padi, mengelakkan pencemaran sumber air oleh racun kimia, serta menjimatkan kos operasi pesawah.",
      "ref": "Unit 21 (m/s 157-166, DSKP 2.1.2)"
    },
    {
      "id": "d6_bm_t7_s4_10",
      "unit": "t7",
      "skill": "t7_s4",
      "diff": "H",
      "q": "Baca pernyataan di bawah:\n\n\"Penggunaan dron penyembur baja di kawasan sawah padi yang luas dapat menjimatkan masa kerja sebanyak separuh serta memastikan taburan cecair baja lebih sekata.\"\n\nPilih olahan ayat dengan maksud yang paling setara dan tepat tanpa mengubah fakta asal.",
      "options": [
        "Semburan baja menggunakan dron di sawah padi yang luas mempercepat kerja hingga dua kali ganda dan meratakan agihan baja cecair.",
        "Penggunaan dron membolehkan baja cecair ditabur di kawasan perumahan berhampiran sawah dengan sangat cepat.",
        "Dron penyembur baja hanya berfungsi di sawah padi yang sempit dan mengambil masa dua kali lebih lama daripada biasa.",
        "Pesawah tidak perlu lagi menggunakan baja cecair apabila mengendalikan dron di kawasan sawah padi."
      ],
      "correctIndex": 0,
      "explanation": "Menjimatkan masa kerja sebanyak separuh (50%) bermaksud kerja menjadi dua kali ganda lebih pantas, manakala taburan yang lebih sekata bermakna agihan lebih rata.",
      "ref": "Unit 21 (m/s 157-166, DSKP 3.3.1)"
    },
    {
      "id": "d6_bm_t8_s1_01",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "L",
      "q": "Tukarkan ayat aktif berikut kepada ayat pasif yang gramatis mengikut Tatabahasa Dewan.\n\n\"Saya mencatat semua perbelanjaan harian di dalam buku rekod kewangan.\"",
      "options": [
        "Semua perbelanjaan harian saya mencatat di dalam buku rekod kewangan.",
        "Buku rekod kewangan mencatat semua perbelanjaan harian saya.",
        "Semua perbelanjaan harian dicatat oleh saya di dalam buku rekod kewangan.",
        "Semua perbelanjaan harian saya catat di dalam buku rekod kewangan."
      ],
      "correctIndex": 3,
      "explanation": "Bagi kata ganti nama diri pertama ('saya'), ayat pasif tidak boleh menggunakan imbuhan 'di-' dan kata sendi 'oleh', serta kata kerja tidak berimbuhan 'meN-'. Bentuk yang betul ialah 'saya catat'.",
      "ref": "Unit 24 (m/s 179-188, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_02",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "L",
      "q": "Pilih ayat pasif yang paling tepat bagi ayat aktif berikut.\n\n\"Peniaga muda itu membungkus kerepek pisang dengan kemas sebelum menghantarnya kepada pelanggan.\"",
      "options": [
        "Kerepek pisang itu membungkus oleh peniaga muda itu dengan kemas sebelum menghantarnya kepada pelanggan.",
        "Kerepek pisang itu dibungkus oleh peniaga muda itu dengan kemas sebelum dihantar kepada pelanggan.",
        "Pelanggan membungkus kerepek pisang itu dengan kemas untuk peniaga muda.",
        "Kerepek pisang itu peniaga muda bungkus dengan kemas sebelum menghantarnya kepada pelanggan."
      ],
      "correctIndex": 1,
      "explanation": "'Peniaga muda itu' ialah kata ganti nama diri ketiga, maka kata kerja pasif mesti berimbuhan 'di-' diikuti kata sendi 'oleh' ('dibungkus oleh peniaga muda itu').",
      "ref": "Unit 23 (m/s 173-178, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_03",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "L",
      "q": "Pilih ayat pasif yang paling gramatis mengikut Tatabahasa Dewan untuk melengkapkan perbualan guru dengan petugas koperasi sekolah.",
      "options": [
        "Wang baki pelanggan perlu dikira oleh kamu dengan teliti.",
        "Wang baki pelanggan kamu perlu kira dengan teliti.",
        "Wang baki pelanggan telah mengira oleh kamu dengan teliti.",
        "Wang baki pelanggan perlu kamu kira dengan teliti."
      ],
      "correctIndex": 3,
      "explanation": "Kata ganti nama diri kedua ('kamu') dalam ayat pasif tidak menerima 'di-... oleh' dan kata bantu ('perlu') mesti mendahului kata ganti nama diri.",
      "ref": "Unit 22 (m/s 168-172, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_04",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "L",
      "q": "Tukarkan ayat pasif berikut kepada ayat aktif yang betul.\n\n\"Keuntungan jualan hari kantin telah kami agihkan ke dalam tabung kelas.\"",
      "options": [
        "Kami telah mengagihkan keuntungan jualan hari kantin ke dalam tabung kelas.",
        "Kami telah diagihkan keuntungan jualan hari kantin ke dalam tabung kelas.",
        "Keuntungan jualan hari kantin mengagihkan kami ke dalam tabung kelas.",
        "Tabung kelas telah mengagihkan keuntungan jualan hari kantin kami."
      ],
      "correctIndex": 0,
      "explanation": "Subjek ayat aktif ialah pelaku ('Kami') diikuti kata bantu ('telah'), kata kerja aktif transitif ('mengagihkan'), dan objek ('keuntungan jualan hari kantin').",
      "ref": "Unit 23 (m/s 173-178, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_05",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "L",
      "q": "Antara ayat yang berikut, manakah ayat aktif yang betul?",
      "options": [
        "Separuh daripada wang saku Aiman disimpan olehnya di dalam tabung buluh.",
        "Tabung buluh itu akan saya isi dengan wang baki belanja sekolah.",
        "Aiman menyimpan separuh daripada wang sakunya di dalam tabung buluh.",
        "Buku akaun simpanan itu telah disemak oleh pegawai bank pagi tadi."
      ],
      "correctIndex": 2,
      "explanation": "Ayat pertama menggunakan kata kerja aktif transitif 'menyimpan' dengan pelaku 'Aiman' sebagai subjek, manakala pilihan lain ialah ayat pasif.",
      "ref": "Unit 24 (m/s 179-188, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_06",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "M",
      "q": "Tukarkan ayat aktif berikut kepada ayat pasif yang paling gramatis mengikut Tatabahasa Dewan.\n\n\"Kami tidak membazirkan wang saku untuk membeli barangan yang kurang berfaedah.\"",
      "options": [
        "Wang saku tidak kami bazirkan untuk membeli barangan yang kurang berfaedah.",
        "Wang saku kami tidak dibazirkan untuk membeli barangan yang kurang berfaedah.",
        "Wang saku tidak dibazirkan oleh kami untuk membeli barangan yang kurang berfaedah.",
        "Wang saku kami tidak membazirkan untuk membeli barangan yang kurang berfaedah."
      ],
      "correctIndex": 0,
      "explanation": "Kata nafi 'tidak' diletakkan sebelum kata ganti nama diri pertama ('kami') dan kata kerja pasif tanpa imbuhan 'di-' ('bazirkan').",
      "ref": "Unit 24 (m/s 179-188, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_08",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "M",
      "q": "Pilih ayat pasif yang mengandungi kesalahan tatabahasa mengikut Tatabahasa Dewan.",
      "options": [
        "Pelan perniagaan koperasi sekolah sedang disediakan oleh ahli jawatankuasa.",
        "Produk kraf tangan itu dipromosikan oleh usahawan muda melalui media sosial.",
        "Resit pembelian tersebut harus anda simpan sebagai bukti jaminan barangan.",
        "Senarai harga barangan itu telah dipamerkan oleh kami di hadapan gerai."
      ],
      "correctIndex": 3,
      "explanation": "Frasa 'telah dipamerkan oleh kami' salah mengikut Tatabahasa Dewan kerana 'kami' ialah kata ganti nama diri pertama. Sepatutnya ditulis 'telah kami pamerkan'.",
      "ref": "Unit 23 (m/s 173-178, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_09",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "H",
      "q": "Pilih tukaran ayat pasif yang paling tepat mengikut Tatabahasa Dewan bagi ayat aktif berikut.\n\n\"Saya akan mempromosikan kuih tradisional ini secara dalam talian selepas pekerja kedai membungkusnya.\"",
      "options": [
        "Kuih tradisional ini akan dipromosikan oleh saya secara dalam talian selepas pekerja kedai membungkusnya.",
        "Kuih tradisional ini akan saya promosikan secara dalam talian selepas dibungkus oleh pekerja kedai.",
        "Kuih tradisional ini saya akan promosikan secara dalam talian selepas dibungkus oleh pekerja kedai.",
        "Kuih tradisional ini akan saya promosikan secara dalam talian selepas pekerja kedai bungkus."
      ],
      "correctIndex": 1,
      "explanation": "Klausa pertama menggunakan pasif KGND pertama ('akan saya promosikan') manakala klausa kedua menggunakan pasif KGND ketiga ('dibungkus oleh pekerja kedai').",
      "ref": "Unit 22 (m/s 168-172, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s1_10",
      "unit": "t8",
      "skill": "t8_s1",
      "diff": "H",
      "q": "Ayat pasif berikut mengandungi satu kesalahan tatabahasa mengikut Tatabahasa Dewan:\n\n\"Modal perniagaan itu kamu telah gunakan untuk membeli bahan mentah di pasar borong.\"\n\nApakah pembetulan yang paling tepat?",
      "options": [
        "Menukarkan 'Modal perniagaan itu' kepada 'Oleh modal perniagaan itu'",
        "Menukarkan 'kamu telah gunakan' kepada 'telah digunakan oleh kamu'",
        "Menukarkan 'untuk membeli' kepada 'untuk dibeli'",
        "Menukarkan 'kamu telah gunakan' kepada 'telah kamu gunakan'"
      ],
      "correctIndex": 3,
      "explanation": "Kata bantu 'telah' tidak boleh dipisahkan daripada kata kerja pasif oleh kata ganti nama diri kedua ('kamu'); susunan yang betul mengikut Tatabahasa Dewan ialah 'telah kamu gunakan'.",
      "ref": "Unit 23 (m/s 173-178, DSKP 5.3.3)"
    },
    {
      "id": "d6_bm_t8_s2_01",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "L",
      "q": "Nurul menyimpan baki wang sakunya sebanyak RM2 setiap hari di dalam tabung. Selepas setahun, wang simpanannya mencecah ratusan ringgit.\n\nSituasi ini sesuai dengan peribahasa...",
      "options": [
        "sedikit-sedikit, lama-lama menjadi bukit",
        "air dicincang tidak akan putus",
        "seperti katak di bawah tempurung",
        "bagai aur dengan tebing"
      ],
      "correctIndex": 0,
      "explanation": "'Sedikit-sedikit, lama-lama menjadi bukit' bermaksud usaha atau simpanan secara sedikit tetapi berterusan akhirnya akan membuahkan hasil yang banyak.",
      "ref": "Unit 24 (m/s 179-188, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_02",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "L",
      "q": "Kedai runcit Pak Mat terpaksa _______ kerana kekurangan pelanggan dan menanggung kerugian berterusan.",
      "options": [
        "ikat perut",
        "ambil berat",
        "gulung tikar",
        "buka mata"
      ],
      "correctIndex": 2,
      "explanation": "Simpulan bahasa 'gulung tikar' bermaksud menutup perniagaan atau mengalami muflis akibat kerugian.",
      "ref": "Unit 23 (m/s 173-178, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_03",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "L",
      "q": "Apakah maksud simpulan bahasa 'tangkai jering'?",
      "options": [
        "Orang yang terlalu kedekut",
        "Orang yang gemar menabung",
        "Orang yang rajin bekerja",
        "Orang yang pandai berniaga"
      ],
      "correctIndex": 0,
      "explanation": "'Tangkai jering' ialah simpulan bahasa yang bermaksud orang yang sangat kedekut atau lokek untuk mengeluarkan wang.",
      "ref": "Unit 24 (m/s 179-188, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_04",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "L",
      "q": "Encik Faris bersungguh-sungguh memajukan perusahaan madu kelulutnya dari pagi hingga ke petang tanpa mengenal penat lelah.\n\nSikap Encik Faris yang bekerja keras itu bersesuaian dengan simpulan bahasa...",
      "options": [
        "buta huruf",
        "membanting tulang",
        "berat tulang",
        "makan angin"
      ],
      "correctIndex": 1,
      "explanation": "'Membanting tulang' bermaksud bekerja keras dengan penuh tenaga dan kesungguhan untuk mencari rezeki.",
      "ref": "Unit 22 (m/s 168-172, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_05",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "L",
      "q": "Puan Salma tidak membelanjakan kesemua wang gajinya, sebaliknya beliau menyimpannya untuk menghadapi sebarang kecemasan pada masa hadapan.\n\nPeribahasa yang paling sesuai ialah...",
      "options": [
        "ukur baju di badan sendiri",
        "malu bertanya sesat jalan",
        "bagai pinang dibelah dua",
        "sediakan payung sebelum hujan"
      ],
      "correctIndex": 3,
      "explanation": "'Sediakan payung sebelum hujan' bermaksud membuat persediaan awal sebelum menghadapi kesusahan atau kecemasan.",
      "ref": "Unit 24 (m/s 179-188, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_06",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "M",
      "q": "Ketika membeli peralatan sekolah, Amir hanya membeli barangan yang benar-benar diperlukan mengikut kemampuannya tanpa mengikut nafsu.\n\nAmalan Amir bertepatan dengan peribahasa...",
      "options": [
        "di mana ada kemahuan, di situ ada jalan",
        "ukur baju di badan sendiri",
        "biar lambat asalkan selamat",
        "hendak seribu daya, tak hendak seribu dalih"
      ],
      "correctIndex": 1,
      "explanation": "'Ukur baju di badan sendiri' bermaksud berbelanja atau bertindak mengikut kemampuan kewangan diri sendiri.",
      "ref": "Unit 24 (m/s 179-188, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_07",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "M",
      "q": "Pada mulanya, perniagaan bakeri milik Kak Laila menghadapi beberapa masalah promosi, namun beliau tetap tabah meneruskannya sehingga berjaya.\n\nPeribahasa yang paling tepat menggambarkan ketabahan beliau ialah...",
      "options": [
        "bagai melepaskan batuk di tangga",
        "sudah jatuh ditimpa tangga",
        "genggam bara api biar sampai jadi arang",
        "indah khabar daripada rupa"
      ],
      "correctIndex": 2,
      "explanation": "'Genggam bara api biar sampai jadi arang' bermaksud mengerjakan sesuatu usaha yang sukar dengan tabah dan sabar sehingga berjaya.",
      "ref": "Unit 23 (m/s 173-178, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_08",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "M",
      "q": "Azim ragu-ragu untuk memulakan projek jualan tanaman hidroponik kerana bimbang menghadapi kesukaran pada peringkat awal. Gurunya menasihati Azim supaya berani berusaha kerana kejayaan tidak akan diperoleh tanpa usaha yang gigih.\n\nNasihat guru itu sejajar dengan peribahasa...",
      "options": [
        "kalau tidak dipecahkan ruyung, manakan dapat sagunya",
        "sudah terang lagi bersuluh",
        "harapkan pagar, pagar makan padi",
        "berani kerana benar, takut kerana salah"
      ],
      "correctIndex": 0,
      "explanation": "'Kalau tidak dipecahkan ruyung, manakan dapat sagunya' bermaksud cita-cita atau keuntungan tidak akan tercapai tanpa berusaha bersungguh-sungguh.",
      "ref": "Unit 22 (m/s 168-172, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_09",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "H",
      "q": "Pasangan peribahasa dan maksud manakah yang SALAH?",
      "options": [
        "Ukur baju di badan sendiri — berbelanja mengikut kemampuan diri",
        "Cepat kaki ringan tangan — mengambil kesempatan menipu pelanggan demi mengaut untung",
        "Ikat perut — menahan lapar kerana berjimat atau kesempitan wang",
        "Ringan tulang — rajin bekerja dan cekap melaksanakan tugas"
      ],
      "correctIndex": 1,
      "explanation": "'Cepat kaki ringan tangan' bermaksud rajin dan pantas membantu atau melaksanakan kerja, bukannya menipu pelanggan.",
      "ref": "Unit 23 (m/s 173-178, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s2_10",
      "unit": "t8",
      "skill": "t8_s2",
      "diff": "H",
      "q": "Sebelum meminjam wang daripada pihak bank untuk membuka gerai makanan, Encik Danial menyemak jadual bayaran balik serta risiko perniagaan dengan teliti supaya tidak menyesal kemudian hari.\n\nTindakan Encik Danial menepati peribahasa...",
      "options": [
        "harimau mati meninggalkan belang, manusia mati meninggalkan nama",
        "air tenang jangan disangka tiada buaya",
        "nasi sudah menjadi bubur",
        "sesal dahulu pendapatan, sesal kemudian tidak berguna"
      ],
      "correctIndex": 3,
      "explanation": "'Sesal dahulu pendapatan, sesal kemudian tidak berguna' menasihati kita agar berfikir dan merancang dengan teliti sebelum membuat keputusan supaya tidak menyesal kemudian.",
      "ref": "Unit 24 (m/s 179-188, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t8_s3_01",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "L",
      "q": "Pilih ayat yang mempunyai ejaan yang betul.",
      "options": [
        "Puan Hana membandingkan harga barang keperluan di pasarraia sebelum membuat pembelian.",
        "Puan Hana membandingkan harga barang keperluan di pasar-raya sebelum membuat pembelian.",
        "Puan Hana membandingkan harga barang keperluan di pasar raya sebelum membuat pembelian.",
        "Puan Hana membandingkan harga barang keperluan di pasaraya sebelum membuat pembelian."
      ],
      "correctIndex": 2,
      "explanation": "Mengikut ejaan Dewan Bahasa dan Pustaka (DBP), kata majmuk 'pasar raya' hendaklah dieja terpisah sebagai dua perkataan.",
      "ref": "Unit 24 (m/s 179-188, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t8_s3_02",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "L",
      "q": "Modal permulaan perniagaan koperasi sekolah itu diperoleh _______ sumbangan Persatuan Ibu Bapa dan Guru.",
      "options": [
        "daripada",
        "ke",
        "dari",
        "pada"
      ],
      "correctIndex": 0,
      "explanation": "Kata sendi nama 'daripada' digunakan untuk menyatakan punca atau sumber yang datang daripada manusia, organisasi, atau benda abstrak.",
      "ref": "Unit 22 (m/s 168-172, DSKP 5.1.4)"
    },
    {
      "id": "d6_bm_t8_s3_03",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "L",
      "q": "_______ setiap hujung bulan, bapa akan mengasingkan sebahagian pendapatannya untuk simpanan pendidikan anak-anak.",
      "options": [
        "Pada",
        "Di",
        "Kepada",
        "Ke"
      ],
      "correctIndex": 0,
      "explanation": "Kata sendi nama 'pada' digunakan di hadapan perkataan yang menunjukkan masa atau waktu, bukan 'di'.",
      "ref": "Unit 24 (m/s 179-188, DSKP 5.1.4)"
    },
    {
      "id": "d6_bm_t8_s3_04",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "L",
      "q": "Setiap _______ jual beli di kaunter koperasi hendaklah direkodkan di dalam buku tunai.",
      "options": [
        "urusniaga",
        "urus niaga",
        "uruz niaga",
        "urus-niaga"
      ],
      "correctIndex": 1,
      "explanation": "Kata majmuk 'urus niaga' dieja secara terpisah dan bukannya dirapatkan atau disempangkan.",
      "ref": "Unit 23 (m/s 173-178, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t8_s3_05",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "L",
      "q": "Pilih ayat yang menggunakan tanda baca yang betul.",
      "options": [
        "\"Berapakah harga sekilogram keropok lekor ini,\" tanya Puan Zainab kepada penjual itu?",
        "\"Berapakah harga sekilogram keropok lekor ini?\" tanya Puan Zainab kepada penjual itu.",
        "\"Berapakah harga sekilogram keropok lekor ini!\" tanya Puan Zainab kepada penjual itu?",
        "\"Berapakah harga sekilogram keropok lekor ini?\" Tanya Puan Zainab kepada penjual itu."
      ],
      "correctIndex": 1,
      "explanation": "Ayat tanya dalam cakap ajuk berakhir dengan tanda soal di dalam tanda petik, diikuti huruf kecil pada kata kerja pelaporan 'tanya' dan titik di hujung ayat.",
      "ref": "Unit 22 (m/s 168-172, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t8_s3_06",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "M",
      "q": "Pilih ayat yang menggunakan kata sendi nama dengan betul.",
      "options": [
        "Usahawan itu berasa gembira di atas kejayaan produknya menembusi pasaran luar.",
        "Keuntungan perniagaan itu telah diagihkan ke semua ahli koperasi.",
        "Kuih tradisional yang dijual di gerai itu diperbuat dari tepung pulut dan santan.",
        "Peniaga itu menyerahkan resit bayaran kepada pelanggannya dengan mesra."
      ],
      "correctIndex": 3,
      "explanation": "'Kepada' tepat digunakan untuk sasaran manusia ('pelanggannya'). Pilihan lain salah kerana sepatutnya 'kepada semua ahli', 'diperbuat daripada' (asal bahan), dan 'atas kejayaan' (perkara abstrak).",
      "ref": "Unit 23 (m/s 173-178, DSKP 5.1.4)"
    },
    {
      "id": "d6_bm_t8_s3_07",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "M",
      "q": "Pilih ayat yang mengandungi kesalahan ejaan.",
      "options": [
        "Ejen jualan itu menerima komisen berdasarkan jumlah tempahan bulanan.",
        "Semua ahli koperasi perlu menggembeleng tenaga untuk menjayakan Karnival Usahawan Muda.",
        "Senarai harga terkini boleh dirujuk pada katalog yang disediakan oleh syarikat.",
        "Pelanggan yang membeli melebihi RM100 akan menerima baucar diskaun."
      ],
      "correctIndex": 1,
      "explanation": "Ejaan DBP yang betul bagi kata berimbuhan tersebut ialah 'menggembleng' (kata dasar 'gembleng'), bukannya 'menggembeleng'.",
      "ref": "Unit 23 (m/s 173-178, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t8_s3_08",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "M",
      "q": "Perniagaan dalam talian semakin mendapat sambutan _______ kemudahan pembayaran tanpa tunai yang pantas.",
      "options": [
        "demi untuk",
        "sebab kerana",
        "oleh sebab",
        "sejak dari"
      ],
      "correctIndex": 2,
      "explanation": "Ungkapan kata sendi yang gramatis untuk menyatakan punca sebelum frasa nama ialah 'oleh sebab'. 'Sejak dari', 'sebab kerana', dan 'demi untuk' merupakan bentuk yang lewah dan tidak gramatis.",
      "ref": "Unit 22 (m/s 168-172, DSKP 5.1.4)"
    },
    {
      "id": "d6_bm_t8_s3_09",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "H",
      "q": "Pilih ayat yang betul penggunaan tanda baca dan ejaannya.",
      "options": [
        "Puan Aminah membeli alat tulis, buku latihan dan kalkulator di Kedai Buku Maju sebelum memulakan perniagaan kecil kecilan.",
        "Puan Aminah membeli alat tulis; buku latihan dan kalkulator di Kedai Buku Maju sebelum memulakan perniagaan kecil-kecilan.",
        "Puan Aminah membeli alat-tulis, buku latihan dan kalkulator di kedai buku Maju sebelum memulakan perniagaan kecil-kecilan.",
        "Puan Aminah membeli alat tulis, buku latihan dan kalkulator di Kedai Buku Maju sebelum memulakan perniagaan kecil-kecilan."
      ],
      "correctIndex": 3,
      "explanation": "'Alat tulis' dieja terpisah tanpa sempang, nama khas 'Kedai Buku Maju' menggunakan huruf besar, kata ganda 'kecil-kecilan' bersempang, dan koma memisahkan senarai.",
      "ref": "Unit 24 (m/s 179-188, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t8_s3_10",
      "unit": "t8",
      "skill": "t8_s3",
      "diff": "H",
      "q": "Pilih ayat yang gramatis dan bebas daripada kesalahan kata sendi nama serta ejaan.",
      "options": [
        "Dari masa ke semasa, keuntungan yang diperolehi daripada jualan atas talian terus meningkat.",
        "Dari semasa ke semasa, keuntungan yang diperoleh daripada jualan dalam talian terus meningkat.",
        "Dari semasa ke semasa, keuntungan yang diperoleh dari jualan dalam talian terus meningkat.",
        "Dari semasa ke masa, keuntungan yang diperolehi daripada jualan dalam talian terus meningkat."
      ],
      "correctIndex": 1,
      "explanation": "Bentuk yang baku ialah 'Dari semasa ke semasa', kata kerja pasif 'diperoleh' (tanpa '-i'), kata sendi punca 'daripada', dan istilah 'dalam talian'.",
      "ref": "Unit 23 (m/s 173-178, DSKP 3.3.2, 5.1.4)"
    },
    {
      "id": "d6_bm_t8_s4_01",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "L",
      "q": "Danial menerima wang saku sebanyak RM5.00 setiap hari daripada ibunya. Setiap pagi, dia membawa bekal makanan dari rumah untuk menjimatkan perbelanjaan di kantin. Baki wang sakunya akan dimasukkan ke dalam tabung khas di bilik tidurnya. Pada hujung bulan, Danial menyimpan wang terkumpul itu ke dalam akaun simpanannya di bank.\n\nMengapakah Danial membawa bekal makanan dari rumah?",
      "options": [
        "Untuk mendapatkan hadiah percuma daripada bank",
        "Untuk menjimatkan perbelanjaan wang sakunya",
        "Kerana makanan di kantin sekolah tidak sedap",
        "Kerana ibunya menyuruhnya menjual bekal tersebut"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan dengan jelas bahawa Danial membawa bekal makanan dari rumah untuk menjimatkan perbelanjaan di kantin.",
      "ref": "Unit 24 (m/s 179-188, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t8_s4_02",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "L",
      "q": "Penduduk Kampung Sentosa mengusahakan tanaman ubi kayu di tanah terbiar sejak dua tahun lalu. Hasil tanaman tersebut diproses menjadi kerepek ubi pelbagai perisa untuk dijual kepada pemborong. Usaha ini bukan sahaja menambah pendapatan keluarga, malah membuka peluang pekerjaan kepada belia setempat. Kini, produk kampung mereka turut dipasarkan melalui platform e-dagang.\n\nBagaimanakah penduduk Kampung Sentosa memasarkan produk mereka selain menjual kepada pemborong?",
      "options": [
        "Mengedarkannya secara percuma di sekolah",
        "Menggunakan platform e-dagang",
        "Membuka pasar raya di luar negara",
        "Menjual ubi kayu mentah di tepi lebuh raya"
      ],
      "correctIndex": 1,
      "explanation": "Ayat terakhir petikan menyatakan bahawa produk kampung mereka turut dipasarkan melalui platform e-dagang.",
      "ref": "Unit 22 (m/s 168-172, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t8_s4_03",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "L",
      "q": "Koperasi Sekolah Kebangsaan Seri Murni menjual pelbagai alat tulis, buku nota dan lencana sekolah pada harga yang berpatutan. Murid tahun enam dilantik secara bergilir-gilir untuk membantu guru koperasi menjaga kaunter jualan pada waktu rehat. Melalui aktiviti ini, murid dapat mempelajari cara mengira baki wang dan merekodkan jualan harian. Keuntungan tahunan koperasi pula digunakan untuk membiayai aktiviti kokurikulum murid.\n\nApakah faedah yang diperoleh murid yang bertugas di koperasi sekolah?",
      "options": [
        "Mendapat alat tulis dan buku nota secara percuma setiap hari",
        "Mempelajari cara mengira baki wang dan merekodkan jualan",
        "Dibenarkan keluar rehat lebih awal daripada murid lain",
        "Menerima gaji bulanan daripada pihak koperasi sekolah"
      ],
      "correctIndex": 1,
      "explanation": "Menurut petikan, murid dapat mempelajari cara mengira baki wang dan merekodkan jualan harian melalui tugas di kaunter koperasi.",
      "ref": "Unit 23 (m/s 173-178, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t8_s4_04",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "L",
      "q": "Puan Rosnah mengeluarkan wang simpanannya sebanyak RM500 sebagai _______ untuk memulakan perniagaan kek cawan dari rumah.",
      "options": [
        "subsidi",
        "modal",
        "cukai",
        "denda"
      ],
      "correctIndex": 1,
      "explanation": "'Modal' bermaksud wang atau harta yang digunakan sebagai pangkal atau pokok untuk memulakan dan menjalankan perniagaan.",
      "ref": "Unit 23 (m/s 173-178, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t8_s4_05",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "L",
      "q": "Keluarga Encik Hakim menyediakan _______ bulanan setiap awal bulan bagi memastikan perbelanjaan dapur tidak melebihi pendapatan mereka.",
      "options": [
        "belanjawan",
        "dividen",
        "komisen",
        "invois"
      ],
      "correctIndex": 0,
      "explanation": "'Belanjawan' bermaksud anggaran atau rancangan terperinci mengenai pendapatan dan perbelanjaan untuk sesuatu tempoh.",
      "ref": "Unit 24 (m/s 179-188, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t8_s4_06",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "M",
      "q": "Nurin mula menghasilkan penyepit rambut daripada reben terpakai sebagai hobi pada hujung minggu. Rakan-rakannya memuji kekemasan hasil tangan Nurin dan berminat untuk membelinya. Dengan bimbingan ibunya, Nurin mengira kos bahan, menetapkan harga jualan yang munasabah serta mempromosikan produknya melalui katalog digital. Dalam tempoh tiga bulan, hasil jualannya membolehkan Nurin membeli mesin jahit mini tanpa meminta wang daripada ibu bapanya.\n\nApakah faktor utama yang mendorong Nurin memulakan jualan penyepit rambut?",
      "options": [
        "Pujian dan minat rakan-rakan terhadap hasil tangannya",
        "Dia mendapat pinjaman modal daripada pihak bank",
        "Dia disuruh oleh guru untuk memenuhi kerja sekolah",
        "Dia ingin menggantikan mesin jahit ibunya yang rosak"
      ],
      "correctIndex": 0,
      "explanation": "Pada mulanya penyepit rambut dibuat sebagai hobi, namun pujian dan minat rakan-rakan untuk membelinya mendorong Nurin mula menjualnya.",
      "ref": "Unit 23 (m/s 173-178, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t8_s4_07",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "M",
      "q": "Ramai murid gagal menabung kerana sukar membezakan antara keperluan dengan kehendak. Keperluan ialah perkara asas yang wajib dipenuhi seperti makanan berkhasiat, pakaian seragam dan buku pelajaran. Sebaliknya, kehendak ialah barangan tambahan seperti permainan video atau alat tulis berjenama mahal yang masih boleh ditangguhkan. Jika seseorang mengutamakan keperluan terlebih dahulu, wangnya dapat diuruskan dengan lebih terancang.\n\nApakah kesan positif apabila seseorang mengutamakan keperluan berbanding dengan kehendak?",
      "options": [
        "Pengurusan kewangan menjadi lebih terancang",
        "Seseorang tidak perlu lagi membeli makanan dan buku pelajaran",
        "Seseorang dapat memiliki semua alat tulis berjenama",
        "Jumlah wang saku yang diterima akan bertambah secara automatik"
      ],
      "correctIndex": 0,
      "explanation": "Petikan menyatakan bahawa mengutamakan keperluan terlebih dahulu membolehkan wang seseorang diuruskan dengan lebih terancang.",
      "ref": "Unit 24 (m/s 179-188, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t8_s4_08",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "M",
      "q": "Penjual jus buah itu memperoleh hasil jualan sebanyak RM250 sehari, namun setelah ditolak kos membeli buah, gula, cawan dan ais sebanyak RM150, _______ yang diperolehnya ialah RM100.",
      "options": [
        "kos operasi",
        "modal pusingan",
        "nilai pasaran",
        "untung bersih"
      ],
      "correctIndex": 3,
      "explanation": "'Untung bersih' ialah baki keuntungan sebenar yang diperoleh setelah jumlah jualan ditolak semua kos perbelanjaan.",
      "ref": "Unit 22 (m/s 168-172, DSKP 2.2.1)"
    },
    {
      "id": "d6_bm_t8_s4_09",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "H",
      "q": "Syarikat Kraf Lestari mengalami penurunan jualan mendadak apabila pesaing baharu menawarkan produk yang serupa pada harga lebih murah. Pengurus syarikat tersebut tidak terus menurunkan harga, sebaliknya meneliti maklum balas pelanggan untuk menambah baik reka bentuk pembungkusan yang lebih mesra alam. Mereka juga memperkenalkan sistem ganjaran mata bagi pelanggan setia yang membeli berulang kali. Langkah strategik itu berjaya menarik semula pelanggan tanpa mengurangkan kualiti produk.\n\nMengapakah pengurus Syarikat Kraf Lestari memilih untuk menambah baik pembungkusan dan memperkenalkan ganjaran mata berbanding menurunkan harga produk?",
      "options": [
        "Untuk menutup operasi pesaing baharu dalam masa yang singkat",
        "Untuk mengekalkan kualiti produk sambil menarik dan mengekalkan kesetiaan pelanggan",
        "Kerana syarikat tidak mempunyai rekod kos pengeluaran barangan",
        "Kerana kos pembungkusan mesra alam adalah percuma sepenuhnya"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menjelaskan bahawa langkah strategik tersebut dilakukan berdasarkan maklum balas pelanggan untuk menarik semula pembeli tanpa mengurangkan kualiti produk.",
      "ref": "Unit 23 (m/s 173-178, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t8_s4_10",
      "unit": "t8",
      "skill": "t8_s4",
      "diff": "H",
      "q": "Encik Azhar bercadang memperbesar bengkel perabotnya kerana menerima tempahan yang semakin meningkat. Walaupun ditawarkan pinjaman tanpa dokumen oleh pihak yang tidak berlesen, beliau menolak tawaran tersebut kerana bimbang dikenakan kadar faedah yang melampau. Sebaliknya, Encik Azhar menyediakan penyata aliran tunai yang lengkap untuk memohon pembiayaan rasmi daripada institusi kewangan berdaftar. Bagi beliau, perancangan yang teliti menjamin kelangsungan perniagaan dalam jangka panjang.\n\nApakah pengajaran utama yang dapat diambil daripada tindakan Encik Azhar dalam petikan tersebut?",
      "options": [
        "Penyata aliran tunai hanya diperlukan oleh syarikat perabot yang mengalami kerugian",
        "Tempahan yang banyak membuktikan perniagaan tidak memerlukan perancangan kewangan",
        "Usahawan perlu bijak menilai risiko dan memilih saluran pembiayaan yang sah serta terancang",
        "Peniaga harus menerima apa-apa sahaja pinjaman demi mempercepat pembesaran bengkel"
      ],
      "correctIndex": 2,
      "explanation": "Encik Azhar menolak pinjaman tidak berlesen yang berisiko tinggi dan memilih pembiayaan rasmi dengan penyata aliran tunai yang lengkap demi kelangsungan perniagaan.",
      "ref": "Unit 24 (m/s 179-188, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s1_01",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "L",
      "q": "Tukarkan ayat susunan biasa berikut kepada ayat susunan songsang yang betul.\n\n\"Pengawas sekolah itu sungguh jujur.\"",
      "options": [
        "Pengawas sekolah yang sungguh jujur itu.",
        "Sungguh jujur pengawas sekolah itu.",
        "Jujur pengawas sekolah itu sungguh.",
        "Pengawas itu sungguh jujur sekolah."
      ],
      "correctIndex": 1,
      "explanation": "Predikat frasa adjektif 'Sungguh jujur' dikedepankan mendahului subjek 'pengawas sekolah itu' tanpa meletakkan tanda koma di antara kedua-duanya.",
      "ref": "Unit 25 (m/s 190-196, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_02",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "L",
      "q": "Tukarkan ayat susunan songsang berikut kepada ayat susunan biasa yang tepat.\n\n\"Memulangkan dompet yang ditemuinya kepada guru bertugas murid tahun enam itu.\"",
      "options": [
        "Murid tahun enam itu memulangkan dompet yang ditemuinya kepada guru bertugas.",
        "Dompet yang ditemuinya oleh murid tahun enam itu memulangkan kepada guru bertugas.",
        "Kepada guru bertugas murid tahun enam itu memulangkan dompet yang ditemuinya.",
        "Guru bertugas memulangkan dompet yang ditemuinya kepada murid tahun enam itu."
      ],
      "correctIndex": 0,
      "explanation": "Dalam susunan biasa, subjek ('Murid tahun enam itu') diletakkan di hadapan, diikuti predikat ('memulangkan dompet yang ditemuinya kepada guru bertugas').",
      "ref": "Unit 27 (m/s 203-209, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_03",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "L",
      "q": "Antara ayat yang berikut, manakah ayat susunan songsang yang betul?",
      "options": [
        "Kejujuran merupakan asas jati diri setiap insan.",
        "Peniaga gerai itu menimbang buah mangga dengan tepat.",
        "Semua murid perlu mematuhi peraturan peperiksaan sekolah.",
        "Amat mulia budi pekerti pemuda yang memulangkan telefon bimbit itu."
      ],
      "correctIndex": 3,
      "explanation": "Ayat ketiga mendepankan predikat frasa adjektif ('Amat mulia') sebelum subjek ('budi pekerti pemuda yang memulangkan telefon bimbit itu').",
      "ref": "Unit 27 (m/s 203-209, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_04",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "L",
      "q": "Pilih ayat susunan songsang yang paling tepat bagi ayat susunan biasa berikut.\n\n\"Ketua kelas itu mencatat nama murid yang hadir dengan telus.\"",
      "options": [
        "Mencatat nama murid yang hadir dengan telus ketua kelas itu.",
        "Nama murid yang hadir dicatat oleh ketua kelas itu dengan telus.",
        "Dengan telus ketua kelas itu mencatat.",
        "Ketua kelas itu dengan telus mencatat nama murid yang hadir."
      ],
      "correctIndex": 0,
      "explanation": "Keseluruhan predikat ('Mencatat nama murid yang hadir dengan telus') dikedepankan mendahului subjek ('ketua kelas itu') tanpa tanda koma. Pilihan lain tidak lengkap, berbentuk ayat pasif biasa, atau masih bersusunan biasa.",
      "ref": "Unit 25 (m/s 190-196, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_05",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "L",
      "q": "Pilih ayat susunan biasa yang paling tepat bagi ayat susunan songsang berikut.\n\n\"Sedang bertugas di pintu pagar sekolah pengawas yang berdedikasi itu.\"",
      "options": [
        "Pengawas yang sedang berdedikasi itu bertugas di pintu pagar sekolah.",
        "Di pintu pagar sekolah pengawas yang berdedikasi itu sedang bertugas.",
        "Pengawas yang berdedikasi itu sedang bertugas di pintu pagar sekolah.",
        "Bertugas di pintu pagar sekolah sedang pengawas yang berdedikasi itu."
      ],
      "correctIndex": 2,
      "explanation": "Subjek ayat ini ialah 'Pengawas yang berdedikasi itu' dan predikatnya ialah 'sedang bertugas di pintu pagar sekolah'.",
      "ref": "Unit 25 (m/s 190-196, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_06",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "M",
      "q": "Tukarkan ayat susunan biasa berikut kepada ayat susunan songsang yang betul.\n\n\"Para hakim itu sentiasa menegakkan keadilan dengan penuh integriti.\"",
      "options": [
        "Sentiasa menegakkan keadilan dengan penuh integriti para hakim itu.",
        "Keadilan sentiasa ditegakkan oleh para hakim itu dengan penuh integriti.",
        "Menegakkan keadilan para hakim itu sentiasa dengan penuh integriti.",
        "Para hakim itu dengan penuh integriti sentiasa menegakkan keadilan."
      ],
      "correctIndex": 0,
      "explanation": "Keseluruhan predikat ('Sentiasa menegakkan keadilan dengan penuh integriti') dikedepankan mendahului subjek ('para hakim itu') tanpa tanda koma.",
      "ref": "Unit 26 (m/s 197-202, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_07",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "M",
      "q": "Pilih ayat susunan songsang yang betul bagi ayat berikut.\n\n\"Sifat amanah dalam kalangan pemimpin murid amat penting untuk keharmonian sekolah.\"",
      "options": [
        "Amat penting sifat amanah dalam kalangan pemimpin murid untuk keharmonian sekolah.",
        "Untuk keharmonian sekolah sifat amanah amat penting.",
        "Keharmonian sekolah amat penting untuk sifat amanah dalam kalangan pemimpin murid.",
        "Amat penting, sifat amanah dalam kalangan pemimpin murid untuk keharmonian sekolah."
      ],
      "correctIndex": 0,
      "explanation": "Frasa adjektif predikat ('Amat penting') dikedepankan tanpa koma di hadapan subjek ('sifat amanah dalam kalangan pemimpin murid') diikuti keterangan.",
      "ref": "Unit 25 (m/s 190-196, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_08",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "M",
      "q": "Antara yang berikut, manakah ayat susunan songsang dan BUKAN ayat pasif susunan biasa?",
      "options": [
        "Amanah majikan itu dipikul oleh pekerjanya dengan penuh tanggungjawab.",
        "Kesalahan rakan karibnya tidak disembunyikan oleh Amirah.",
        "Penuh dengan nilai kejujuran ucapan pengetua pada perhimpunan pagi tadi.",
        "Buku rekod kehadiran itu telah saya tandatangani dengan jujur."
      ],
      "correctIndex": 2,
      "explanation": "'Penuh dengan nilai kejujuran' ialah predikat yang dikedepankan mendahului subjek 'ucapan pengetua pada perhimpunan pagi tadi'. Tiga pilihan lain ialah ayat pasif susunan biasa.",
      "ref": "Unit 26 (m/s 197-202, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_09",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "H",
      "q": "Dalam ayat susunan songsang berikut, apakah bahagian PREDIKAT ayat tersebut?\n\n\"Berikrar untuk menolak segala bentuk rasuah dan penipuan para peserta kem kepimpinan itu.\"",
      "options": [
        "para peserta kem kepimpinan itu",
        "Berikrar untuk menolak segala bentuk rasuah dan penipuan",
        "segala bentuk rasuah dan penipuan",
        "kem kepimpinan itu"
      ],
      "correctIndex": 1,
      "explanation": "Dalam ayat susunan songsang ini, frasa kerja 'Berikrar untuk menolak segala bentuk rasuah dan penipuan' ialah predikat yang mendahului subjek 'para peserta kem kepimpinan itu'.",
      "ref": "Unit 26 (m/s 197-202, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s1_10",
      "unit": "t9",
      "skill": "t9_s1",
      "diff": "H",
      "q": "Pilih ayat susunan songsang yang paling gramatis mengikut Tatabahasa Dewan.",
      "options": [
        "Menolak segala bentuk rasuah dengan tegas oleh penjawat awam yang berintegriti itu.",
        "Segala bentuk rasuah ditolak dengan tegas oleh penjawat awam yang berintegriti itu.",
        "Amat mulia sikap penjawat awam yang menolak segala bentuk rasuah itu.",
        "Penjawat awam yang berintegriti itu menolak segala bentuk rasuah dengan tegas."
      ],
      "correctIndex": 2,
      "explanation": "Predikat frasa adjektif ('Amat mulia') dikedepankan mendahului subjek ('sikap penjawat awam yang menolak segala bentuk rasuah itu') tanpa tanda koma. Pilihan lain ialah ayat pasif susunan biasa, binaan ayat yang tidak gramatis, dan ayat aktif susunan biasa.",
      "ref": "Unit 27 (m/s 203-209, DSKP 5.3.4)"
    },
    {
      "id": "d6_bm_t9_s2_01",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "L",
      "q": "Guru besar menyeru semua murid agar _______ nilai kejujuran dalam setiap tugasan sekolah.",
      "options": [
        "mengamalkan",
        "beramalkan",
        "amalan",
        "diamalkan"
      ],
      "correctIndex": 0,
      "explanation": "Subjek 'semua murid' memerlukan kata kerja transitif aktif berapitan 'meN-...-kan' iaitu 'mengamalkan' sebelum objek 'nilai kejujuran'.",
      "ref": "Unit 25 (m/s 190-196, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_02",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "L",
      "q": "Pilih ayat bertemakan integriti yang betul ejaan kata majmuk mantapnya.",
      "options": [
        "Setiap murid mempunyai tanggungjawab untuk menjaga nama baik sekolah.",
        "Setiap murid mempunyai tanggung jawab untuk menjaga nama baik sekolah.",
        "Setiap murid mempunyai tanggongjawab untuk menjaga nama baik sekolah.",
        "Setiap murid mempunyai tanggung-jawab untuk menjaga nama baik sekolah."
      ],
      "correctIndex": 0,
      "explanation": "Kata majmuk mantap 'tanggungjawab' mesti dieja rapat sebagai satu perkataan.",
      "ref": "Unit 25 (m/s 190-196, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_03",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "L",
      "q": "Seseorang yang amanah tidak akan _______ kepercayaan yang diberikan oleh rakan atau majikannya.",
      "options": [
        "menkhianati",
        "mengkhianatkan",
        "berkhianati",
        "mengkhianati"
      ],
      "correctIndex": 3,
      "explanation": "Kata dasar 'khianat' menerima awalan 'meng-' dan akhiran '-i' menjadi 'mengkhianati' apabila diikuti objek bernyawa atau abstrak ('kepercayaan').",
      "ref": "Unit 26 (m/s 197-202, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_04",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "L",
      "q": "Sebagai pemandu yang berintegriti, Encik Zaki sentiasa _______ peraturan jalan raya walaupun tiada anggota polis di persimpangan itu.",
      "options": [
        "mengingkari",
        "membantah",
        "menentang",
        "mematuhi"
      ],
      "correctIndex": 3,
      "explanation": "Kata kerja yang paling tepat dengan konteks pemandu berintegriti dan objek 'peraturan jalan raya' ialah 'mematuhi'.",
      "ref": "Unit 26 (m/s 197-202, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_05",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "L",
      "q": "_______ persatuan penduduk itu menandatangani surat pengesahan derma dengan telus sebelum menyerahkannya kepada bendahari.",
      "options": [
        "Setiausaha",
        "Setia-usaha",
        "Setia usaha",
        "Setiausahawan"
      ],
      "correctIndex": 0,
      "explanation": "Kata majmuk mantap 'setiausaha' dieja rapat sebagai satu perkataan mengikut sistem ejaan DBP.",
      "ref": "Unit 25 (m/s 190-196, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_06",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "M",
      "q": "Pilih ayat yang mengandungi kesalahan pengimbuhan.",
      "options": [
        "Pengawas itu menjalankan tugas mengawal disiplin murid dengan penuh dedikasi.",
        "Peniaga yang jujur tidak akan menyembunyikan kerosakan barangan yang dijual.",
        "Pengawas yang amanah itu mempastikan semua murid beratur dengan tertib di kantin sekolah.",
        "Kita wajar mensyukuri rezeki yang halal hasil usaha sendiri."
      ],
      "correctIndex": 2,
      "explanation": "Kata kerja 'mempastikan' salah dari segi hukum pengimbuhan meN- kerana huruf awal 'p' pada kata dasar 'pasti' mesti luluh menjadi 'm', iaitu 'memastikan'. Imbuhan 'menjalankan', 'mengawal', 'mensyukuri', dan 'menyembunyikan' adalah betul.",
      "ref": "Unit 26 (m/s 197-202, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_07",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "M",
      "q": "Baca ayat berikut:\n\n\"Ketua kampung itu menolak rasuah kerana beliau berpegang tegoh pada prinsip amanah dan tidak mahu mengabaikan tanggung jawab kepada penduduk.\"\n\nApakah dua kesalahan ejaan yang terdapat dalam ayat tersebut?",
      "options": [
        "'rasuah' (sepatutnya 'raswah') dan 'mengabaikan' (sepatutnya 'diabaikan')",
        "'menolak' (sepatutnya 'ditolak') dan 'prinsip' (sepatutnya 'prensip')",
        "'amanah' (sepatutnya 'amanat') dan 'penduduk' (sepatutnya 'pendudok')",
        "'tegoh' (sepatutnya 'teguh') dan 'tanggung jawab' (sepatutnya 'tanggungjawab')"
      ],
      "correctIndex": 3,
      "explanation": "Mengikut hukum keselarasan vokal DBP, ejaan yang betul ialah 'teguh', manakala kata majmuk mantap 'tanggungjawab' dieja rapat.",
      "ref": "Unit 25 (m/s 190-196, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_08",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "M",
      "q": "Proses pengundian pemilihan Ketua Murid di Sekolah Kebangsaan Taman Jaya dilaksanakan secara _______ agar keputusannya adil dan diyakini semua pihak.",
      "options": [
        "telus",
        "curang",
        "kabur",
        "keliru"
      ],
      "correctIndex": 0,
      "explanation": "'Telus' bermaksud terbuka, jujur, dan tidak menyembunyikan sebarang perkara yang boleh menimbulkan keraguan.",
      "ref": "Unit 26 (m/s 197-202, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_09",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "H",
      "q": "Ayat di bawah mengandungi kesalahan imbuhan dan pemilihan kata:\n\n\"Sebagai seorang yang berintegriti, kita perlulah menjauhkan amalan meniru semasa peperiksaan supaya keputusan yang diperolehi benar-benar membanggakan.\"\n\nPilih pemurnian ayat yang paling tepat.",
      "options": [
        "Sebagai seorang yang berintegriti, kita perlulah dijauhi amalan meniru semasa peperiksaan supaya keputusan yang diperolehi benar-benar membanggakan.",
        "Sebagai seorang yang berintegriti, kita perlulah menjauhi amalan meniru semasa peperiksaan supaya keputusan yang diperoleh benar-benar membanggakan.",
        "Sebagai seorang yang berintegriti, kita perlulah menjauhkan amalan meniru semasa peperiksaan supaya keputusan yang diperoleh benar-benar membanggakan.",
        "Sebagai seorang yang berintegriti, kita perlulah menjauhi daripada amalan meniru semasa peperiksaan supaya keputusan yang diperoleh benar-benar membanggakan."
      ],
      "correctIndex": 1,
      "explanation": "'Menjauhi' (bermakna mengelakkan sesuatu) tepat diikuti objek 'amalan meniru', manakala bentuk pasif yang baku ialah 'diperoleh' tanpa akhiran '-i'.",
      "ref": "Unit 27 (m/s 203-209, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s2_10",
      "unit": "t9",
      "skill": "t9_s2",
      "diff": "H",
      "q": "Pilih ayat yang betul sepenuhnya dari segi ejaan, imbuhan dan penggunaan kata.",
      "options": [
        "Pegawai penguat kuasa itu menjalankan penyiasatan secara proffesional demi menegakkan keadilan.",
        "Pegawai penguatkuasa itu menjalankan siasatan secara proffesional demi menegakkan keadilan.",
        "Pegawai penguat kuasa itu menjalani siasatan secara profesional demi untuk menegakkan keadilan.",
        "Pegawai penguat kuasa itu menjalankan siasatan secara profesional demi menegakkan keadilan."
      ],
      "correctIndex": 3,
      "explanation": "'Penguat kuasa' dieja dua perkataan, kata kerja yang tepat ialah 'menjalankan', ejaan DBP ialah 'profesional', dan 'demi' tidak perlu diikuti 'untuk'.",
      "ref": "Unit 26 (m/s 197-202, DSKP 3.3.2)"
    },
    {
      "id": "d6_bm_t9_s3_01",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "L",
      "q": "Baca pantun di bawah:\n\nBunga melati di tepi laman,\nHarum mewangi di waktu pagi;\nSifat jujur jadikan amalan,\nAgar diri sentiasa disanjungi.\n\nApakah mesej utama yang ingin disampaikan dalam pantun tersebut?",
      "options": [
        "Kita hendaklah mengamalkan sifat jujur supaya sentiasa dihormati",
        "Keharuman bunga melati lebih penting daripada budi bahasa",
        "Kita perlu menanam bunga melati di halaman rumah setiap pagi",
        "Orang yang jujur hanya disanjungi pada waktu pagi sahaja"
      ],
      "correctIndex": 0,
      "explanation": "Maksud pantun terdapat pada dua baris terakhir yang menyeru pembaca mengamalkan sifat jujur agar sentiasa disanjungi dan dihormati.",
      "ref": "Unit 27 (m/s 203-209, DSKP 4.2.2)"
    },
    {
      "id": "d6_bm_t9_s3_02",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "L",
      "q": "Semua murid mempercayai bendahari kelab itu untuk menjaga wang kutipan, namun dia tergamak menggunakan wang tersebut untuk kepentingan peribadi.\n\nPerbuatan itu umpama...",
      "options": [
        "sedikit-sedikit, lama-lama menjadi bukit",
        "bagai aur dengan tebing",
        "melentur buluh biarlah dari rebungnya",
        "harapkan pagar, pagar makan padi"
      ],
      "correctIndex": 3,
      "explanation": "'Harapkan pagar, pagar makan padi' bermaksud orang yang diberi kepercayaan untuk menjaga sesuatu amanah telah mengkhianati kepercayaan tersebut.",
      "ref": "Unit 25 (m/s 190-196, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t9_s3_03",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "L",
      "q": "Farah tidak gentar memberikan keterangan yang sebenarnya kepada guru disiplin kerana dia yakin dirinya tidak bersalah.\n\nSikap Farah menepati peribahasa...",
      "options": [
        "berani kerana benar, takut kerana salah",
        "sesal dahulu pendapatan, sesal kemudian tidak berguna",
        "ukur baju di badan sendiri",
        "malu bertanya sesat jalan"
      ],
      "correctIndex": 0,
      "explanation": "'Berani kerana benar, takut kerana salah' bermaksud seseorang yang berada di pihak yang benar tidak akan berasa takut untuk menyatakan kebenaran.",
      "ref": "Unit 27 (m/s 203-209, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t9_s3_04",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "L",
      "q": "Baca pantun dua kerat di bawah:\n\nBuah berangan di dalam dulang,\nAmanah orang janganlah hilang.\n\nApakah nilai yang ditekankan dalam pantun tersebut?",
      "options": [
        "Kebersihan tempat tinggal",
        "Kepentingan menjaga kesihatan",
        "Kegigihan mencari rezeki",
        "Keikhlasan dan tanggungjawab menjaga amanah"
      ],
      "correctIndex": 3,
      "explanation": "Baris maksud 'Amanah orang janganlah hilang' menegaskan kewajipan menjaga amanah yang diberikan oleh orang lain.",
      "ref": "Unit 25 (m/s 190-196, DSKP 4.2.2)"
    },
    {
      "id": "d6_bm_t9_s3_05",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "L",
      "q": "Baca pantun di bawah:\n\nTanam serai di tepi batu,\nAnak merpati terbang ke dahan;\nUsah berdusta setiap waktu,\nKelak hilang segala kepercayaan.\n\nApakah pola rima akhir bagi pantun di atas?",
      "options": [
        "a-b-b-a",
        "a-b-a-b",
        "a-a-b-b",
        "a-a-a-a"
      ],
      "correctIndex": 1,
      "explanation": "Akhiran bunyi baris pertama ('batu') sepadan dengan baris ketiga ('waktu'), manakala baris kedua ('dahan') sepadan dengan baris keempat ('kepercayaan'), membentuk pola a-b-a-b.",
      "ref": "Unit 27 (m/s 203-209, DSKP 4.3.1)"
    },
    {
      "id": "d6_bm_t9_s3_06",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "M",
      "q": "Baca petikan sajak di bawah:\n\nBiar poket tidak berisi,\nJangan digadai harga diri;\nRasuah ditolak teguh berdiri,\nAmanah dijunjung sepanjang hari.\n\nApakah pengajaran yang terdapat dalam rangkap sajak tersebut?",
      "options": [
        "Kita hendaklah mengumpul kekayaan tanpa mengira cara",
        "Kita perlu berdiri teguh hanya apabila mempunyai wang yang banyak",
        "Kita mestilah menolak rasuah dan mempertahankan maruah diri walaupun hidup sederhana",
        "Harga diri seseorang bergantung sepenuhnya pada isi poketnya"
      ],
      "correctIndex": 2,
      "explanation": "Sajak tersebut menyeru agar kita tidak menggadai maruah diri demi wang, sebaliknya menolak rasuah dan menjunjung amanah sepanjang masa.",
      "ref": "Unit 26 (m/s 197-202, DSKP 4.2.2)"
    },
    {
      "id": "d6_bm_t9_s3_07",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "M",
      "q": "Encik Azmi tetap menepati janjinya untuk menyiapkan tempahan baju sukan sekolah sebelum tarikh yang ditetapkan walaupun menghadapi kekangan masa.\n\nSikap beliau selaras dengan peribahasa...",
      "options": [
        "bagai kaca terhempas ke batu",
        "bagai menatang minyak yang penuh",
        "air tenang jangan disangka tiada buaya",
        "kerbau dipegang pada talinya, manusia dipegang pada janjinya"
      ],
      "correctIndex": 3,
      "explanation": "'Kerbau dipegang pada talinya, manusia dipegang pada janjinya' bermaksud janji yang telah dilafazkan oleh seseorang wajib ditepati.",
      "ref": "Unit 25 (m/s 190-196, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t9_s3_08",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "M",
      "q": "Baca pantun di bawah:\n\nIndah sungguh pemandangan di desa,\nAir mengalir jernih di kali;\nJika pemimpin jujur sentiasa,\nRakyat sejahtera hidup harmoni.\n\nApakah maksud yang tersirat dalam pantun di atas?",
      "options": [
        "Rakyat perlu berpindah ke desa untuk menikmati kehidupan yang harmoni",
        "Pemandangan desa yang indah hanya terdapat di tepi sungai yang jernih",
        "Kejujuran seseorang pemimpin akan menjamin keharmonian dan kesejahteraan rakyat",
        "Kejujuran pemimpin tidak memberi kesan kepada kesejahteraan rakyat"
      ],
      "correctIndex": 2,
      "explanation": "Dua baris maksud pantun menggambarkan hubungan langsung antara pemimpin yang jujur dengan kesejahteraan serta keharmonian hidup rakyat.",
      "ref": "Unit 26 (m/s 197-202, DSKP 4.2.2)"
    },
    {
      "id": "d6_bm_t9_s3_09",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "H",
      "q": "Baca rangkap sajak di bawah:\n\nTangan yang bersih menolak habuan,\nMata yang celik menilai kebenaran;\nIntegriti ibarat kompas haluan,\nMembimbing bangsa ke mercu kejayaan.\n\nApakah maksud ungkapan \"Integriti ibarat kompas haluan\" dalam sajak tersebut?",
      "options": [
        "Habuan yang ditolak akan digantikan dengan kompas oleh pihak pemimpin",
        "Nilai integriti menjadi panduan utama yang mengarahkan masyarakat ke arah kejayaan",
        "Alat kompas hanya boleh digunakan oleh orang yang mempunyai tangan yang bersih",
        "Bangsa yang berjaya tidak memerlukan kebenaran untuk menentukan hala tuju"
      ],
      "correctIndex": 1,
      "explanation": "Metafora 'kompas haluan' bermaksud penunjuk arah atau panduan yang membimbing sesuatu bangsa menuju ke puncak kejayaan.",
      "ref": "Unit 26 (m/s 197-202, DSKP 4.3.1)"
    },
    {
      "id": "d6_bm_t9_s3_10",
      "unit": "t9",
      "skill": "t9_s3",
      "diff": "H",
      "q": "Walaupun pekerja itu berkali-kali memalsukan dokumen tuntutan perjalanan tanpa dikesan, namun akhirnya penipuannya terbongkar juga semasa proses audit tahunan.\n\nSituasi ini paling tepat dikaitkan dengan peribahasa...",
      "options": [
        "sepandai-pandai tupai melompat, akhirnya jatuh ke tanah juga",
        "bagai mencurah garam ke laut",
        "bagai melepaskan anjing tersepit",
        "cubit paha kanan, paha kiri terasa juga"
      ],
      "correctIndex": 0,
      "explanation": "'Sepandai-pandai tupai melompat, akhirnya jatuh ke tanah juga' bermaksud sepandai mana pun seseorang menyembunyikan perbuatan salah, akhirnya akan terbongkar juga.",
      "ref": "Unit 27 (m/s 203-209, DSKP 4.1.1)"
    },
    {
      "id": "d6_bm_t9_s4_01",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "L",
      "q": "Sewaktu berjalan pulang dari padang sekolah, Haikal ternampak seutas jam tangan berjenama di atas bangku kantin. Tanpa berfikir panjang, Haikal mengambil jam tangan itu dan menyerahkannya kepada guru bertugas di bilik guru. Pada petang itu, pemilik jam tangan tersebut datang menuntutnya dengan penuh rasa syukur. Guru besar turut memuji kejujuran Haikal di hadapan murid lain.\n\nApakah tindakan Haikal selepas menemui jam tangan tersebut?",
      "options": [
        "Membiarkannya sahaja di atas bangku kantin",
        "Menyimpannya di dalam beg sekolah sehingga keesokan hari",
        "Menjualnya kepada rakan di padang sekolah",
        "Menyerahkannya kepada guru bertugas di bilik guru"
      ],
      "correctIndex": 3,
      "explanation": "Petikan menyatakan dengan jelas bahawa Haikal mengambil jam tangan tersebut dan menyerahkannya kepada guru bertugas di bilik guru.",
      "ref": "Unit 27 (m/s 203-209, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t9_s4_02",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "L",
      "q": "Pak Karim berniaga buah-buahan tempatan di Pasar Tani Sri Aman sejak sepuluh tahun lalu. Beliau sentiasa memastikan alat penimbangnya berada pada kedudukan sifar sebelum menimbang buah pelanggan. Sekiranya terdapat buah yang rosak atau lebam, Pak Karim akan mengasingkannya dan tidak menjualnya kepada pembeli. Sikap jujur itu menyebabkan gerainya sentiasa menjadi pilihan utama pelanggan tetap.\n\nMengapakah gerai Pak Karim sentiasa menjadi pilihan utama pelanggan tetap?",
      "options": [
        "Kerana beliau memberikan buah-buahan secara percuma setiap minggu",
        "Kerana gerainya terletak bersebelahan dengan balai polis",
        "Kerana beliau menjual buah-buahan yang rosak pada harga tinggi",
        "Kerana beliau berniaga dengan jujur serta memastikan timbangan tepat dan buah berkualiti"
      ],
      "correctIndex": 3,
      "explanation": "Menurut petikan, sikap jujur Pak Karim yang memastikan timbangan tepat dan mengasingkan buah rosak membuatkan pelanggan tetap memilih gerainya.",
      "ref": "Unit 25 (m/s 190-196, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t9_s4_03",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "L",
      "q": "Setiap kelas di Sekolah Kebangsaan Seri Jaya mempunyai jadual bertugas harian untuk menjaga kebersihan dan keselamatan peralatan bilik darjah. Murid-murid dilatih supaya tidak menconteng meja atau merosakkan kerusi sekolah. Jika ternampak suis kipas atau lampu masih terpasang selepas tamat waktu persekolahan, mereka akan mematikannya dengan segera. Amalan ini memupuk sikap bertanggungjawab dan menghargai kemudahan awam.\n\nApakah perkara yang akan dilakukan oleh murid sekiranya suis kipas masih terpasang selepas tamat waktu persekolahan?",
      "options": [
        "Membuka tingkap kelas supaya bilik darjah tidak panas",
        "Mematikan suis kipas tersebut dengan segera",
        "Membiarkannya sahaja kerana bukan giliran bertugas mereka",
        "Melaporkan perkara itu kepada tukang kebun keesokan harinya"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan bahawa murid akan mematikan suis kipas atau lampu dengan segera apabila tamat waktu persekolahan.",
      "ref": "Unit 25 (m/s 190-196, DSKP 2.3.1)"
    },
    {
      "id": "d6_bm_t9_s4_04",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "L",
      "q": "Puan Salbiah merupakan seorang kerani kewangan yang sangat _______ kerana tidak pernah menyalahgunakan wang syarikat sepanjang perkhidmatannya.",
      "options": [
        "angkuh",
        "curiga",
        "cuai",
        "amanah"
      ],
      "correctIndex": 3,
      "explanation": "'Amanah' bermaksud jujur dan dapat dipercayai dalam menjaga sesuatu tanggungjawab atau harta yang diserahkan.",
      "ref": "Unit 25 (m/s 190-196, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_05",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "L",
      "q": "Perbuatan memberi atau menerima wang suapan untuk mendapatkan sesuatu kelebihan secara tidak sah dikenali sebagai gejala _______.",
      "options": [
        "hibah",
        "zakat",
        "rasuah",
        "derma"
      ],
      "correctIndex": 2,
      "explanation": "'Rasuah' bermaksud pemberian atau penerimaan suapan sama ada wang atau hadiah untuk memalsukan kebenaran atau menyalahgunakan kuasa.",
      "ref": "Unit 26 (m/s 197-202, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_06",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "M",
      "q": "Sebagai Ketua Pengawas sekolah, Aisyah sentiasa mematuhi peraturan sekolah sebelum menegur murid lain. Suatu hari, adik kandungnya sendiri datang lewat ke sekolah tanpa alasan yang munasabah. Walaupun berat hati, Aisyah tetap merekodkan nama adiknya dalam buku catatan pengawas mengikut prosedur yang sama seperti murid lain. Tindakan tegas dan adil itu membuatkan warga sekolah semakin menghormati kepimpinannya.\n\nApakah nilai integriti yang paling terserlah melalui tindakan Aisyah terhadap adiknya?",
      "options": [
        "Bersikap adil dan tidak pilih kasih dalam menguatkuasakan peraturan",
        "Menunjukkan kuasa sebagai ketua pengawas kepada murid baharu",
        "Sentiasa membela ahli keluarga dalam apa-apa jua keadaan",
        "Mengelakkan diri daripada menjalankan tugas di pagar sekolah"
      ],
      "correctIndex": 0,
      "explanation": "Aisyah menguatkuasakan prosedur yang sama terhadap adik kandungnya sendiri tanpa memilih kasih, membuktikan keadilan dalam kepimpinannya.",
      "ref": "Unit 25 (m/s 190-196, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_07",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "M",
      "q": "Dalam era digital, pelajar mudah memperoleh pelbagai bahan rujukan daripada Internet untuk menyiapkan tugasan sekolah. Namun demikian, menyalin hasil penulisan orang lain secara bulat-bulat dan mengakuinya sebagai karya sendiri merupakan satu kesalahan etika. Murid yang berintegriti akan mencatat sumber rujukan dengan tepat serta mengolah maklumat menggunakan ayat sendiri. Langkah ini bukan sahaja menghormati hak cipta penulis asal, malah melatih murid berfikir secara kreatif.\n\nMengapakah murid yang berintegriti perlu mencatat sumber rujukan ketika menggunakan bahan daripada Internet?",
      "options": [
        "Untuk memanjangkan karangan supaya mendapat markah penuh",
        "Untuk menghormati hak cipta penulis asal dan mengelakkan kesalahan etika",
        "Supaya guru tidak perlu menyemak tugasan tersebut",
        "Kerana bahan daripada Internet tidak boleh dibaca tanpa catatan sumber"
      ],
      "correctIndex": 1,
      "explanation": "Petikan menyatakan bahawa mencatat sumber rujukan dan mengolah maklumat sendiri bertujuan menghormati hak cipta penulis asal serta mengelakkan kesalahan etika.",
      "ref": "Unit 27 (m/s 203-209, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_08",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "M",
      "q": "Perkataan 'akauntabiliti' dalam pengurusan organisasi bermaksud sikap _______ terhadap segala keputusan dan tindakan yang dilaksanakan.",
      "options": [
        "mementingkan diri",
        "bertanggungjawab sepenuhnya",
        "tergesa-gesa",
        "lepas tangan"
      ],
      "correctIndex": 1,
      "explanation": "'Akauntabiliti' merujuk kepada sifat bertanggungjawab sepenuhnya untuk menjelaskan dan menanggung akibat sesuatu tugas atau keputusan.",
      "ref": "Unit 26 (m/s 197-202, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_09",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "H",
      "q": "Semasa ujian Matematik berlangsung, Syafiq menyedari kertas jawapan rakan di sebelahnya terdedah dan mudah dilihat. Pada mulanya, dia hampir tergoda untuk menjeling bagi menyemak jawapan soalan yang sukar. Namun, Syafiq segera teringat akan pesanan ayahnya bahawa kejayaan yang diperoleh melalui penipuan tidak akan membawa kepuasan sebenar. Dia menumpukan perhatian semula pada kertasnya dan menjawab mengikut kemampuan diri sendiri.\n\nApakah punca utama yang menghalang Syafiq daripada meniru jawapan rakannya?",
      "options": [
        "Kesedarannya terhadap nilai kejujuran hasil nasihat ayahnya",
        "Pengawas peperiksaan sedang berdiri tepat di sebelah mejanya",
        "Dia yakin jawapan rakan di sebelahnya itu semuanya salah",
        "Masa menjawab ujian telah pun tamat ketika itu"
      ],
      "correctIndex": 0,
      "explanation": "Syafiq tidak meniru kerana teringat akan pesanan ayahnya bahawa kejayaan melalui penipuan tidak membawa kepuasan sebenar.",
      "ref": "Unit 27 (m/s 203-209, DSKP 2.3.2)"
    },
    {
      "id": "d6_bm_t9_s4_10",
      "unit": "t9",
      "skill": "t9_s4",
      "diff": "H",
      "q": "Integriti merupakan tunjang utama kestabilan dan kemakmuran sesebuah negara. Apabila setiap warganegara melaksanakan tugas dengan amanah, wang awam dapat disalurkan sepenuhnya untuk membina prasarana seperti sekolah, hospital dan jalan raya. Sebaliknya, amalan penyelewengan hanya akan merugikan rakyat serta menjejaskan keyakinan pelabur asing. Oleh itu, pembudayaan integriti perlu dipupuk sejak bangku sekolah agar lahir generasi pemimpin masa hadapan yang bersih dan berwibawa.\n\nApakah perkaitan antara integriti dengan pembangunan prasarana negara berdasarkan petikan di atas?",
      "options": [
        "Pembudayaan integriti hanya perlu diamalkan oleh pekerja binaan jalan raya",
        "Penyelewengan wang awam membantu mempercepat pembinaan prasarana negara",
        "Pelaksanaan tugas secara amanah memastikan wang awam disalurkan sepenuhnya untuk kemudahan rakyat",
        "Pelabur asing akan membina semua sekolah dan hospital secara percuma"
      ],
      "correctIndex": 2,
      "explanation": "Petikan menjelaskan bahawa apabila tugas dilaksanakan dengan amanah, wang awam dapat disalurkan sepenuhnya untuk membina kemudahan rakyat tanpa penyelewengan.",
      "ref": "Unit 26 (m/s 197-202, DSKP 2.3.2)"
    }
  ];
})(window);
