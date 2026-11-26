/**
 * Darjah 6 Sains variant question pool (KSSR Semakan 2017, Units 1-13 concept skills).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, short explanation, and textbook page ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  const items = [
  {
    "id": "d6_sci_u1_s1_01",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Nadia menyentuh permukaan kulit durian lalu mendapati kulitnya berduri tajam dan berbau kuat. Apakah kemahiran proses sains yang digunakan oleh Nadia?",
    "options": [
      "Memerhati",
      "Meramal",
      "Mengelas",
      "Membuat inferens"
    ],
    "correctIndex": 0,
    "explanation": "Mengumpul maklumat tentang objek menggunakan deria sentuhan dan bau ialah kemahiran memerhati.",
    "ref": "Unit 1, m/s 5, 11"
  },
  {
    "id": "d6_sci_u1_s1_02",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Semasa menyiasat kereta belon, Haziq mengukur jarak pergerakan menggunakan pembaris dan mencatatkan bacaan 42 cm. Kemahiran proses sains manakah yang diaplikasikan?",
    "options": [
      "Mengelas",
      "Membuat hipotesis",
      "Mentafsirkan data",
      "Mengukur dan menggunakan nombor"
    ],
    "correctIndex": 3,
    "explanation": "Menggunakan alat piawai seperti pembaris untuk mendapatkan nilai berangka (42 cm) ialah kemahiran mengukur dan menggunakan nombor.",
    "ref": "Unit 1, m/s 5"
  },
  {
    "id": "d6_sci_u1_s1_03",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Pak Teh mengasingkan itik, ayam, lembu dan kambing di ladangnya kepada kumpulan bertelur dan kumpulan melahirkan anak. Apakah kemahiran yang dilaksanakan oleh Pak Teh?",
    "options": [
      "Meramal",
      "Berkomunikasi",
      "Mengelas",
      "Membuat inferens"
    ],
    "correctIndex": 2,
    "explanation": "Mengasing dan mengumpulkan haiwan mengikut ciri sepunya cara pembiakan ialah kemahiran mengelas.",
    "ref": "Unit 1, m/s 12"
  },
  {
    "id": "d6_sci_u1_s1_04",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Selepas melepaskan tiga buah kereta belon, Mei Ling membina jadual dan carta palang untuk membentangkan keputusan penyiasatan kepada rakan sekelasnya. Apakah kemahiran tersebut?",
    "options": [
      "Mengawal pemboleh ubah",
      "Berkomunikasi",
      "Memerhati",
      "Meramal"
    ],
    "correctIndex": 1,
    "explanation": "Menyampaikan hasil penyiasatan melalui jadual, graf atau carta palang ialah kemahiran berkomunikasi.",
    "ref": "Unit 1, m/s 6, 11"
  },
  {
    "id": "d6_sci_u1_s1_05",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Pernyataan manakah yang merupakan satu inferens yang munasabah tentang sehelai daun pokok keembung yang layu walaupun diletakkan di kawasan terbuka?",
    "options": [
      "Daun pokok keembung itu berwarna kekuningan dan gugur ke tanah",
      "Pokok keembung itu layu kerana tidak disiram air selama beberapa hari",
      "Tinggi anak pokok keembung itu ialah 14 cm pada hari kelima",
      "Anak pokok itu mungkin akan mati pada minggu hadapan"
    ],
    "correctIndex": 1,
    "explanation": "Inferens ialah sebab awal yang munasabah bagi menerangkan pemerhatian mengapa pokok itu layu.",
    "ref": "Unit 1, m/s 6, 11"
  },
  {
    "id": "d6_sci_u1_s1_06",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Berdasarkan ujian meluncur kereta mainan, jisim 100 g bergerak sejauh 60 cm, jisim 150 g sejauh 45 cm, dan jisim 200 g sejauh 30 cm. Berapakah jarak yang dijangka bagi kereta mainan berjisim 250 g?",
    "options": [
      "15 cm",
      "35 cm",
      "40 cm",
      "50 cm"
    ],
    "correctIndex": 0,
    "explanation": "Mengikut pola jadual, setiap pertambahan 50 g mengurangkan jarak sebanyak 15 cm, maka bagi 250 g jarak ramalan ialah 30 − 15 = 15 cm.",
    "ref": "Unit 1, m/s 5, 7"
  },
  {
    "id": "d6_sci_u1_s1_07",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Mangga A mempunyai jisim 400 g dan rasa masam, manakala mangga B dari kebun lain berjisim 600 g dan rasa manis. Pemerhatian manakah yang menyokong inferens bahawa pokok mangga B mendapat nutrien yang lebih mencukupi?",
    "options": [
      "Mangga B ditanam di kawasan tanah yang lebih tinggi",
      "Mangga A dijangka lebih cepat busuk apabila disimpan",
      "Kedua-dua biji mangga dipetik pada waktu pagi yang sama",
      "Saiz buah mangga B lebih besar berbanding saiz buah mangga A"
    ],
    "correctIndex": 3,
    "explanation": "Pemerhatian fizikal lain seperti saiz buah mangga B yang lebih besar menyokong inferens bahawa pokoknya mendapat keperluan asas yang mencukupi.",
    "ref": "Unit 1, m/s 11"
  },
  {
    "id": "d6_sci_u1_s1_08",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Mengapakah ahli sains perlu memisahkan antara pemerhatian dengan inferens semasa menulis laporan uji kaji?",
    "options": [
      "Supaya bacaan alat pengukur tidak perlu direkodkan dalam jadual",
      "Kerana inferens sentiasa lebih tepat berbanding hasil ukuran piawai",
      "Kerana pemerhatian ialah fakta yang dikesan deria manakala inferens ialah penerangan yang belum tentu benar",
      "Supaya semua objek dalam eksperimen dapat dikelaskan dalam satu kumpulan"
    ],
    "correctIndex": 2,
    "explanation": "Pemerhatian merupakan fakta langsung daripada deria atau alat pengukur, sedangkan inferens ialah kesimpulan awal atau sebab yang masih perlu diuji.",
    "ref": "Unit 1, m/s 6, 11"
  },
  {
    "id": "d6_sci_u1_s1_09",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Syarif mendapati dua buah kereta belon yang serupa bergerak pada jarak yang berbeza: kereta P sejauh 52 cm dan kereta Q sejauh 21 cm. Dia menyimpulkan udara dalam belon P lebih banyak daripada belon Q. Apakah gabungan kemahiran proses sains yang ditunjukkan dari mula hingga akhir?",
    "options": [
      "Mendefinisi secara operasi -> Mengawal pemboleh ubah",
      "Meramal -> Mengelas",
      "Mengukur dan menggunakan nombor -> Membuat inferens",
      "Membuat hipotesis -> Meramal"
    ],
    "correctIndex": 2,
    "explanation": "Membaca ukuran jarak (52 cm dan 21 cm) ialah mengukur dan menggunakan nombor, manakala menyatakan sebab jarak berbeza ialah membuat inferens.",
    "ref": "Unit 1, m/s 5-6"
  },
  {
    "id": "d6_sci_u1_s1_10",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Seorang murid meletakkan sekeping syiling, sehelai daun kering, sebatang sudu besi dan sekeping kayu aiskrim ke dalam besen air. Dia mengelaskan objek kepada 'tenggelam' dan 'timbul'. Jika sudu besi diganti dengan mangkuk keluli kosong yang boleh terapung, apakah prinsip pengelasan yang paling wajar dibuatnya?",
    "options": [
      "Mengubah definisi kayu sebagai bahan logam",
      "Menilai semula ciri sepunya berdasarkan keupayaan objek timbul atau tenggelam dan bukan jenis bahan semata-mata",
      "Mengeluarkan sudu dan mangkuk daripada eksperimen supaya jadual seragam",
      "Meramalkan semua objek keluli pasti tenggelam walaupun berbentuk mangkuk"
    ],
    "correctIndex": 1,
    "explanation": "Pengelasan yang tepat mesti konsisten dengan ciri sepunya yang dipilih (timbul atau tenggelam) berdasarkan pemerhatian sebenar.",
    "ref": "Unit 1, m/s 4, 12"
  },
  {
    "id": "d6_sci_u1_s2_01",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Amir memerhatikan saiz seketul ais yang diletakkan di atas piring semakin mengecil dari minit ke-0 hingga minit ke-15. Kemahiran proses sains manakah yang terlibat?",
    "options": [
      "Menggunakan perhubungan ruang dan masa",
      "Mengelas",
      "Mendefinisi secara operasi",
      "Mengawal pemboleh ubah"
    ],
    "correctIndex": 0,
    "explanation": "Memerihalkan perubahan saiz, bentuk atau kedudukan objek mengikut pertambahan masa ialah kemahiran menggunakan perhubungan ruang dan masa.",
    "ref": "Unit 1, m/s 7"
  },
  {
    "id": "d6_sci_u1_s2_02",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Berdasarkan jadual hasil tuaian padi: kaedah sabit menghasilkan 1.5 hektar sehari, manakala kaedah jentera menghasilkan 5 hektar sehari. Apakah tafsiran data yang betul?",
    "options": [
      "Penggunaan sabit menuai keluasan tanah yang lebih besar berbanding jentera",
      "Jenis tanaman padi berubah apabila jentera digunakan",
      "Masa menuai menggunakan sabit dan jentera adalah sama panjang",
      "Penggunaan jentera berjaya menuai keluasan tanah yang lebih besar berbanding sabit"
    ],
    "correctIndex": 3,
    "explanation": "Data menunjukkan 5 hektar (jentera) adalah lebih luas daripada 1.5 hektar (sabit).",
    "ref": "Unit 1, m/s 11"
  },
  {
    "id": "d6_sci_u1_s2_03",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan kemahiran 'mendefinisi secara operasi' dalam suatu penyiasatan sains?",
    "options": [
      "Menghafal maksud istilah saintifik yang terdapat dalam kamus dewan",
      "Meneka keputusan akhir sebelum menjalankan ujian",
      "Menyenaraikan semua alat dan bahan sebelum eksperimen bermula",
      "Memberi tafsiran tentang sesuatu konsep melalui perkara yang dilakukan dan diperhatikan dalam penyiasatan"
    ],
    "correctIndex": 3,
    "explanation": "Definisi secara operasi menerangkan konsep berdasarkan apa yang diperhatikan atau diukur serta tindakan yang dijalankan dalam eksperimen.",
    "ref": "Unit 1, m/s 7, 11"
  },
  {
    "id": "d6_sci_u1_s2_04",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Dalam perlumbaan kereta belon di bilik sains, murid memerhatikan saiz belon semakin mengecil apabila tempoh pergerakan kereta bertambah. Apakah perubahan yang berlaku mengikut masa?",
    "options": [
      "Jisim botol plastik semakin bertambah",
      "Panjang penyedut minuman semakin memendek",
      "Saiz belon semakin berkurang",
      "Bilangan penutup botol semakin berkurang"
    ],
    "correctIndex": 2,
    "explanation": "Apabila udara keluar untuk menggerakkan kereta, saiz belon berkurang apabila masa bergerak bertambah.",
    "ref": "Unit 1, m/s 7"
  },
  {
    "id": "d6_sci_u1_s2_05",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Jadual menunjukkan masa mengalir keluar 100 ml cecair: susu segar mengambil 2 saat manakala syampu mengambil 8 saat. Apakah rumusan daripada data tersebut?",
    "options": [
      "Susu segar lebih likat daripada syampu",
      "Susu segar mengambil masa lebih singkat untuk mengalir kerana kurang likat",
      "Syampu mengalir lebih laju berbanding susu segar",
      "Kedua-dua cecair mempunyai isi padu dan kelikatan yang sama"
    ],
    "correctIndex": 1,
    "explanation": "Tempoh 2 saat adalah lebih singkat berbanding 8 saat, menunjukkan susu segar kurang likat dan mengalir lebih cepat.",
    "ref": "Unit 1, m/s 12"
  },
  {
    "id": "d6_sci_u1_s2_06",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Siti menguji pertumbuhan kulapuk di atas roti yang direnjis air. Selepas 5 hari, tompok kulapuk ialah 2 cm², dan pada hari ke-7 meningkat kepada 5 cm². Pernyataan manakah menunjukkan kemahiran perhubungan ruang dan masa?",
    "options": [
      "Luas pertumbuhan kulapuk di atas roti semakin bertambah dari hari ke-5 hingga hari ke-7",
      "Kulapuk tumbuh kerana roti mempunyai kelembapan yang sesuai",
      "Roti yang disimpan di tempat gelap tidak boleh dimakan lagi",
      "Tompok kulapuk dijangka berwarna hitam kehijauan"
    ],
    "correctIndex": 0,
    "explanation": "Menghubungkan pertambahan luas kulapuk (ruang) dari hari ke-5 hingga ke-7 (masa) ialah kemahiran perhubungan ruang dan masa.",
    "ref": "Unit 1, m/s 7"
  },
  {
    "id": "d6_sci_u1_s2_07",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Dalam penyiasatan kelajuan kereta belon, bagaimanakah cara mendefinisikan secara operasi bagi 'kereta belon yang paling laju'?",
    "options": [
      "Kereta belon yang dapat bergerak pada jarak yang paling jauh dalam satu percubaan",
      "Kereta belon yang menggunakan botol plastik paling cantik",
      "Kereta belon yang mempunyai empat penutup botol sebagai roda",
      "Kereta belon yang dihasilkan oleh murid paling cepat"
    ],
    "correctIndex": 0,
    "explanation": "Berdasarkan aktiviti kereta belon dalam buku teks, kereta yang bergerak paling jauh dikenal pasti sebagai kereta yang paling laju.",
    "ref": "Unit 1, m/s 7"
  },
  {
    "id": "d6_sci_u1_s2_08",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Jadual merekodkan suhu air dalam bikar: 0 minit (90°C), 5 minit (75°C), 10 minit (62°C), 15 minit (51°C). Tafsirkan pola perubahan data tersebut.",
    "options": [
      "Suhu air meningkat secara tetap setiap 5 minit",
      "Suhu air kekal malar sepanjang 15 minit pemerhatian",
      "Suhu air mula mendidih semula selepas minit ke-10",
      "Suhu air menurun secara beransur-ansur apabila masa bertambah"
    ],
    "correctIndex": 3,
    "explanation": "Bacaan suhu turun daripada 90°C kepada 51°C sepanjang 15 minit, iaitu menurun apabila masa bertambah.",
    "ref": "Unit 1, m/s 7, 11"
  },
  {
    "id": "d6_sci_u1_s2_09",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Murid menyiasat penyerapan air oleh tiga jenis kain (P, Q, R) bersaiz sama yang dicelupkan ke dalam 100 ml air selama 1 minit. Baki air dalam bikar dicatat. Bagaimanakah definisi secara operasi bagi 'kain yang paling tinggi kadar penyerapan'?",
    "options": [
      "Kain yang paling tebal dan berbulu apabila dipegang",
      "Kain yang paling cepat kering apabila dijemur di bawah matahari",
      "Kain yang meninggalkan isi padu baki air paling sedikit di dalam bikar selepas 1 minit",
      "Kain yang meninggalkan isi padu baki air paling banyak di dalam bikar"
    ],
    "correctIndex": 2,
    "explanation": "Lebih banyak air diserap oleh kain bermakna baki air yang tertinggal di dalam bikar adalah paling sedikit.",
    "ref": "Unit 1, m/s 7, 11"
  },
  {
    "id": "d6_sci_u1_s2_10",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Satu carta palang menunjukkan tinggi anak pokok cili pada hari ke-14: Pasu A (2 biji benih) = 18 cm, Pasu B (6 biji benih) = 21 cm, Pasu C (12 biji benih) = 25 cm. Mengapakah tafsiran 'semakin sesak anak pokok, semakin tinggi batangnya' perlu digabungkan dengan pemerhatian ukur lilit batang sebelum membuat kesimpulan pokok mana lebih subur?",
    "options": [
      "Kerana bilangan biji benih tidak perlu dibilang dalam penyiasatan tumbuhan",
      "Kerana pokok yang tumbuh tinggi akibat bersaing merebut cahaya biasanya berbatang kurus dan lemah",
      "Kerana ketinggian pokok hanya boleh diukur menggunakan jam randik",
      "Kerana cahaya matahari tidak mempengaruhi pertumbuhan anak benih cili"
    ],
    "correctIndex": 1,
    "explanation": "Mentafsir data secara menyeluruh mengelakkan salah faham: batang tinggi akibat persaingan cahaya sering kali kurus dan kurang subur.",
    "ref": "Unit 1, m/s 11"
  },
  {
    "id": "d6_sci_u1_s3_01",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Dalam eksperimen menyiasat kesan saiz belon terhadap jarak pergerakan kereta belon, apakah pemboleh ubah yang dimanipulasikan?",
    "options": [
      "Jarak pergerakan kereta belon",
      "Saiz belon",
      "Jenis botol plastik yang digunakan",
      "Permukaan lantai bilik sains"
    ],
    "correctIndex": 1,
    "explanation": "Pemboleh ubah dimanipulasikan ialah perkara yang sengaja diubah-ubah oleh murid, iaitu saiz belon.",
    "ref": "Unit 1, m/s 4"
  },
  {
    "id": "d6_sci_u1_s3_02",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Apabila menguji kesan jisim kereta belon dengan melekatkan bilangan duit syiling 10 sen yang berbeza di atas kereta yang sama, apakah pemboleh ubah yang dimalarkan?",
    "options": [
      "Saiz belon yang ditiup dan jenis kereta belon",
      "Jarak pergerakan kereta belon",
      "Bilangan duit syiling 10 sen",
      "Jisim keseluruhan kereta belon"
    ],
    "correctIndex": 0,
    "explanation": "Saiz belon dan jenis botol/kereta mesti dikekalkan sama supaya hanya jisim yang mempengaruhi jarak pergerakan.",
    "ref": "Unit 1, m/s 7-8"
  },
  {
    "id": "d6_sci_u1_s3_03",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Manakah antara pernyataan berikut merupakan hipotesis yang betul bagi penyiasatan hubungan antara jisim kereta belon dengan jarak pergerakan?",
    "options": [
      "Adakah jisim kereta belon mempengaruhi jarak pergerakannya?",
      "Kereta belon perlu dilepaskan di atas permukaan lantai yang rata",
      "Kita menggunakan duit syiling 10 sen untuk menambah jisim kereta belon",
      "Semakin ringan jisim kereta belon, semakin jauh jarak pergerakan kereta itu"
    ],
    "correctIndex": 3,
    "explanation": "Hipotesis ialah pernyataan umum yang menghubungkaitkan pemboleh ubah dimanipulasikan (jisim) dengan bergerak balas (jarak).",
    "ref": "Unit 1, m/s 7-8"
  },
  {
    "id": "d6_sci_u1_s3_04",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Dalam penyiasatan menumpahkan 100 ml susu segar dan 100 ml syampu untuk mengukur masa mengalir keluar, apakah pemboleh ubah bergerak balas?",
    "options": [
      "Jenis cecair yang diuji",
      "Isi padu cecair (100 ml)",
      "Masa yang diambil untuk cecair mengalir keluar sehingga habis",
      "Saiz silinder penyukat"
    ],
    "correctIndex": 2,
    "explanation": "Pemboleh ubah bergerak balas ialah hasil atau bacaan yang diukur pada akhir ujian, iaitu masa cecair mengalir keluar.",
    "ref": "Unit 1, m/s 12"
  },
  {
    "id": "d6_sci_u1_s3_05",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Selepas mengumpul dan mentafsirkan data eksperimen, apakah langkah terakhir dalam format laporan eksperimen saintifik?",
    "options": [
      "Menyenaraikan alat dan bahan",
      "Menulis penyataan masalah",
      "Menentukan sama ada hipotesis diterima atau tidak serta menyatakan kesimpulan",
      "Menjalankan langkah eksperimen semula"
    ],
    "correctIndex": 2,
    "explanation": "Laporan eksperimen diakhiri dengan bahagian kesimpulan untuk menilai penerimaan hipotesis.",
    "ref": "Unit 1, m/s 8"
  },
  {
    "id": "d6_sci_u1_s3_06",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Susun urutan langkah awal merancang satu eksperimen yang betul sebelum mengumpul data:\n1. Membina hipotesis\n2. Mengenal pasti pemboleh ubah\n3. Menentukan tujuan dan penyataan masalah\n4. Menyediakan alat dan bahan",
    "options": [
      "1 -> 3 -> 4 -> 2",
      "3 -> 1 -> 2 -> 4",
      "2 -> 3 -> 1 -> 4",
      "4 -> 2 -> 1 -> 3"
    ],
    "correctIndex": 1,
    "explanation": "Mengikut format laporan eksperimen buku teks, susunannya ialah Tujuan/Penyataan masalah (3) -> Hipotesis (1) -> Pemboleh ubah (2) -> Alat dan bahan (4).",
    "ref": "Unit 1, m/s 8"
  },
  {
    "id": "d6_sci_u1_s3_07",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Farah ingin menyiasat kesan suhu air terhadap kelarutan gula. Dia melarutkan satu sudu gula dalam 100 ml air sejuk dan dua sudu gula dalam 100 ml air panas, lalu mengacau hanya air panas itu. Mengapakah ujian Farah tidak adil?",
    "options": [
      "Dia mengubah beberapa faktor serentak iaitu kuantiti gula dan pengacauan selain suhu air",
      "Dia sepatutnya menukar jenis bekas daripada gelas kepada botol plastik",
      "Dia tidak mencatat warna gelas yang digunakan",
      "Dia menggunakan isi padu air yang sama iaitu 100 ml"
    ],
    "correctIndex": 0,
    "explanation": "Ujian yang adil hanya membenarkan satu pemboleh ubah dimanipulasikan (suhu air), manakala kuantiti gula dan cara mengacau mesti dimalarkan.",
    "ref": "Unit 1, m/s 4, 8"
  },
  {
    "id": "d6_sci_u1_s3_08",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Mengapakah ahli kumpulan perlu menggunakan botol plastik yang sama jenis dan saiz apabila menguji kesan saiz belon terhadap jarak kereta belon?",
    "options": [
      "Supaya setiap murid mendapat ukuran jarak yang tepat sama",
      "Supaya belon tidak mengecil selepas dilepaskan",
      "Kerana botol plastik berbeza tidak dapat ditebuk lubang untuk penyedut minuman",
      "Supaya perbezaan jarak benar-benar berpunca daripada saiz belon dan bukan jisim atau bentuk kereta"
    ],
    "correctIndex": 3,
    "explanation": "Memalarkan jenis, bentuk dan jisim kereta memastikan hanya saiz belon menjadi faktor yang mempengaruhi keputusan.",
    "ref": "Unit 1, m/s 4"
  },
  {
    "id": "d6_sci_u1_s3_09",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Seorang petani membandingkan hasil padi antara petak A (dituai guna sabit: 1.5 hektar) dan petak B (dituai guna jentera: 5 hektar). Berdasarkan penyiasatan ini, apakah pasangan pemboleh ubah yang tepat?",
    "options": [
      "Dimanipulasikan: keluasan tanah; Bergerak balas: kaedah tuaian",
      "Dimanipulasikan: bilangan petani; Bergerak balas: berat padi; Dimalarkan: keluasan tanah",
      "Dimanipulasikan: jenis tanaman; Bergerak balas: masa tuaian; Dimalarkan: kaedah tuaian",
      "Dimanipulasikan: kaedah padi dituai; Bergerak balas: keluasan tanah yang dituai; Dimalarkan: jenis tanaman"
    ],
    "correctIndex": 3,
    "explanation": "Kaedah tuaian (sabit vs jentera) diubah-ubah, keluasan tanah yang berjaya dituai ialah hasil yang diukur, dan jenis tanaman ialah yang dimalarkan.",
    "ref": "Unit 1, m/s 11"
  },
  {
    "id": "d6_sci_u1_s3_10",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Dalam aktiviti membina kincir botol, murid ingin menguji sama ada bilangan bilah kipas mempengaruhi kelajuan putaran kincir di hadapan kipas siling. Manakah set kawalan yang paling tepat untuk memastikan kesahihan eksperimen?",
    "options": [
      "Ubah bilangan bilah kipas dan kelajuan kipas siling, serta malarkan saiz botol",
      "Ubah jarak kincir dari kipas siling; malarkan bilangan bilah kipas; ukur saiz bilah",
      "Ubah bilangan bilah kipas; ukur bilangan putaran dalam 30 saat; malarkan jarak dari kipas siling, kelajuan kipas siling dan saiz setiap bilah",
      "Ubah saiz botol plastik; malarkan bilangan bilah kipas; ukur suhu udara"
    ],
    "correctIndex": 2,
    "explanation": "Hanya bilangan bilah dimanipulasikan, kadar putaran (bilangan pusingan dalam tempoh tetap) ialah bergerak balas, dan jarak, kelajuan angin serta saiz bilah dimalarkan.",
    "ref": "Unit 1, m/s 8, 10"
  },
  {
    "id": "d6_sci_u2_s1_01",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah fungsi utama testis dalam sistem pembiakan lelaki?",
    "options": [
      "Menyalurkan sperma ke dalam organ pembiakan perempuan",
      "Menghasilkan sperma apabila lelaki mencapai akil baligh",
      "Menyimpan embrio sehingga tempoh kelahiran",
      "Menghasilkan ovum setiap bulan"
    ],
    "correctIndex": 1,
    "explanation": "Testis berfungsi sebagai tempat penghasilan sperma dalam sistem pembiakan lelaki.",
    "ref": "Unit 2, m/s 14, 17"
  },
  {
    "id": "d6_sci_u2_s1_02",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Organ pembiakan perempuan yang manakah menghasilkan ovum atau 'telur' pada setiap bulan?",
    "options": [
      "Ovari",
      "Uterus",
      "Faraj",
      "Tiub Fallopio"
    ],
    "correctIndex": 0,
    "explanation": "Ovari berfungsi menghasilkan ovum setiap bulan selepas seorang perempuan mencapai akil baligh.",
    "ref": "Unit 2, m/s 15, 17"
  },
  {
    "id": "d6_sci_u2_s1_03",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Di bahagian manakah dalam sistem pembiakan perempuan berlakunya proses persenyawaan antara sperma dengan ovum?",
    "options": [
      "Tiub Fallopio",
      "Uterus",
      "Ovari",
      "Faraj"
    ],
    "correctIndex": 0,
    "explanation": "Sperma berenang menuju ke ovum dan proses persenyawaan berlaku di dalam tiub Fallopio.",
    "ref": "Unit 2, m/s 15-16"
  },
  {
    "id": "d6_sci_u2_s1_04",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah nama lain bagi uterus dalam sistem pembiakan perempuan?",
    "options": [
      "Zigot",
      "Salur Fallopio",
      "Tali pusat",
      "Rahim"
    ],
    "correctIndex": 3,
    "explanation": "Uterus juga dikenali sebagai rahim, iaitu tempat embrio berkembang dan membesar.",
    "ref": "Unit 2, m/s 15"
  },
  {
    "id": "d6_sci_u2_s1_05",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Organ manakah yang menyalurkan sperma daripada lelaki ke dalam organ pembiakan perempuan?",
    "options": [
      "Testis",
      "Faraj",
      "Zakar",
      "Ovari"
    ],
    "correctIndex": 2,
    "explanation": "Zakar menyalurkan sperma ke dalam faraj perempuan semasa proses pembiakan.",
    "ref": "Unit 2, m/s 14, 16"
  },
  {
    "id": "d6_sci_u2_s1_06",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Padankan organ berikut dengan fungsinya yang tepat:\n1. Faraj\n2. Uterus\n3. Tiub Fallopio",
    "options": [
      "1: menghasilkan ovum; 2: tempat persenyawaan; 3: saluran menerima sperma",
      "1: saluran menerima sperma; 2: tempat embrio berkembang; 3: tempat persenyawaan berlaku",
      "1: tempat embrio membesar; 2: saluran menerima sperma; 3: menghasilkan ovum",
      "1: tempat persenyawaan berlaku; 2: menghasilkan ovum; 3: tempat fetus membesar"
    ],
    "correctIndex": 1,
    "explanation": "Faraj menerima sperma (dan laluan lahir bayi), uterus tempat embrio berkembang, dan tiub Fallopio ialah lokasi persenyawaan.",
    "ref": "Unit 2, m/s 15, 30"
  },
  {
    "id": "d6_sci_u2_s1_07",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Apakah ciri yang membolehkan sperma bergerak menghampiri ovum di dalam sistem pembiakan perempuan?",
    "options": [
      "Sperma ditolak oleh dinding uterus",
      "Sperma berenang menggunakan ekornya",
      "Sperma ditarik oleh ovari menggunakan graviti",
      "Sperma terapung bersama udara yang disedut"
    ],
    "correctIndex": 1,
    "explanation": "Sperma mempunyai ekor yang membolehkannya berenang ke arah ovum di tiub Fallopio.",
    "ref": "Unit 2, m/s 16"
  },
  {
    "id": "d6_sci_u2_s1_08",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Bagaimanakah kehamilan kembar boleh berlaku berdasarkan fungsi ovari?",
    "options": [
      "Apabila ovari membebaskan lebih daripada satu ovum pada satu masa dan berjaya disenyawakan",
      "Apabila satu sperma membahagi menjadi tiga di dalam zakar",
      "Apabila uterus menghasilkan dua ovum serentak tanpa persenyawaan",
      "Apabila sperma bercantum dengan sel kulit di faraj"
    ],
    "correctIndex": 0,
    "explanation": "Jika ovari melepaskan lebih daripada satu ovum pada masa yang sama dan kedua-duanya disenyawakan oleh sperma, kelahiran kembar boleh berlaku.",
    "ref": "Unit 2, m/s 15"
  },
  {
    "id": "d6_sci_u2_s1_09",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Disebabkan masalah kesihatan, kedua-dua bahagian ovari seorang wanita terpaksa dibuang melalui pembedahan. Adakah beliau masih berpeluang melahirkan anak secara semula jadi?",
    "options": [
      "Ya, kerana tiub Fallopio akan mengambil alih penghasilan ovum",
      "Ya, selagi uterus masih berada dalam keadaan sihat",
      "Tidak, kerana sperma tidak lagi boleh memasuki faraj",
      "Tidak, kerana tiada lagi organ yang dapat menghasilkan ovum untuk disenyawakan"
    ],
    "correctIndex": 3,
    "explanation": "Tanpa kedua-dua ovari, ovum tidak dapat dihasilkan, justeru proses persenyawaan secara semula jadi tidak boleh berlaku.",
    "ref": "Unit 2, m/s 31, 223"
  },
  {
    "id": "d6_sci_u2_s1_10",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Jika kedua-dua tiub Fallopio seorang wanita tersumbat sepenuhnya, peringkat manakah dalam proses pembiakan yang terhenti terlebih dahulu?",
    "options": [
      "Penghasilan ovum di dalam ovari",
      "Pembentukan sperma di dalam testis pasangan",
      "Pertemuan dan percantuman antara sperma dengan ovum",
      "Pengeluaran susu oleh ibu selepas kelahiran"
    ],
    "correctIndex": 2,
    "explanation": "Tiub Fallopio ialah laluan dan tempat pertemuan sperma dengan ovum; jika tersumbat, persenyawaan tidak dapat berlaku.",
    "ref": "Unit 2, m/s 15-16"
  },
  {
    "id": "d6_sci_u2_s2_01",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Ovum yang telah berjaya disenyawakan oleh satu sperma dikenali sebagai _____.",
    "options": [
      "fetus",
      "embrio",
      "zigot",
      "bayi"
    ],
    "correctIndex": 2,
    "explanation": "Percantuman sperma dan ovum menghasilkan zigot sebelum ia membahagi membentuk embrio.",
    "ref": "Unit 2, m/s 16"
  },
  {
    "id": "d6_sci_u2_s2_02",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Lebih kurang berapa lamakah fetus kekal berkembang di dalam uterus ibu sehingga organ-organnya cukup lengkap untuk dilahirkan?",
    "options": [
      "Sembilan minggu",
      "Sembilan bulan",
      "Enam bulan",
      "Dua belas bulan"
    ],
    "correctIndex": 1,
    "explanation": "Fetus berkembang di dalam uterus selama lebih kurang sembilan bulan sebelum dilahirkan sebagai bayi.",
    "ref": "Unit 2, m/s 17"
  },
  {
    "id": "d6_sci_u2_s2_03",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Melalui bahagian manakah fetus menerima bekalan nutrien dan oksigen daripada ibunya semasa berada di dalam uterus?",
    "options": [
      "Tali pusat",
      "Tiub Fallopio",
      "Ovari",
      "Saraf tunjang"
    ],
    "correctIndex": 0,
    "explanation": "Tali pusat menghubungkan fetus dengan ibu untuk membekalkan nutrien dan oksigen serta menyingkirkan bahan kumuh.",
    "ref": "Unit 2, m/s 17"
  },
  {
    "id": "d6_sci_u2_s2_04",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah kepentingan utama proses pembiakan kepada manusia?",
    "options": [
      "Membolehkan manusia bergerak dengan lebih pantas",
      "Mengawal suhu badan ketika waktu malam",
      "Mengurangkan penggunaan sumber makanan di Bumi",
      "Menambah bilangan individu dan memastikan kemandirian spesies manusia"
    ],
    "correctIndex": 3,
    "explanation": "Pembiakan menambah populasi baharu dan mengelakkan kepupusan spesies manusia.",
    "ref": "Unit 2, m/s 14, 18, 30"
  },
  {
    "id": "d6_sci_u2_s2_05",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Setelah cukup tempoh kehamilan, melalui saluran manakah bayi dilahirkan secara normal?",
    "options": [
      "Tiub Fallopio",
      "Tali pusat",
      "Ovari",
      "Faraj"
    ],
    "correctIndex": 3,
    "explanation": "Selepas kira-kira sembilan bulan di dalam uterus, fetus dilahirkan melalui faraj sebagai bayi.",
    "ref": "Unit 2, m/s 17"
  },
  {
    "id": "d6_sci_u2_s2_06",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Susun peringkat perkembangan awal manusia selepas berlakunya persenyawaan mengikut urutan yang betul.",
    "options": [
      "Embrio -> Zigot -> Fetus -> Bayi",
      "Zigot -> Fetus -> Embrio -> Bayi",
      "Zigot -> Embrio -> Fetus -> Bayi",
      "Fetus -> Embrio -> Zigot -> Bayi"
    ],
    "correctIndex": 2,
    "explanation": "Ovum tersenyawa membentuk zigot, kemudian membahagi menjadi embrio, berkembang sebagai fetus, dan akhirnya lahir sebagai bayi.",
    "ref": "Unit 2, m/s 16-17, 30"
  },
  {
    "id": "d6_sci_u2_s2_07",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Apakah yang berlaku pada peringkat embrio sejurus selepas zigot membahagi membentuk banyak sel?",
    "options": [
      "Embrio kekal di dalam ovari sehingga bayi lahir",
      "Embrio berkembang di dalam uterus dan membentuk fetus",
      "Embrio berenang keluar melalui tiub Fallopio ke faraj",
      "Embrio berhenti membahagi dan bertukar menjadi sperma"
    ],
    "correctIndex": 1,
    "explanation": "Zigot membahagi menjadi embrio, dan embrio terus membesar di dalam uterus menjadi fetus.",
    "ref": "Unit 2, m/s 16-17"
  },
  {
    "id": "d6_sci_u2_s2_08",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Apakah kesilapan yang terdapat dalam pernyataan berikut?\n'Berpuluh-puluh sperma bercantum dengan satu ovum di dalam uterus untuk membentuk zigot.'",
    "options": [
      "Hanya satu sperma bersenyawa dengan satu ovum, dan proses ini berlaku di tiub Fallopio",
      "Persenyawaan berlaku di dalam ovari oleh dua ekor sperma sahaja",
      "Zigot tidak terbentuk daripada percantuman sperma dan ovum",
      "Persenyawaan berlaku di luar tubuh manusia pada peringkat fetus"
    ],
    "correctIndex": 0,
    "explanation": "Hanya satu sperma bercantum dengan satu ovum dan tempat persenyawaan ialah tiub Fallopio, bukan uterus.",
    "ref": "Unit 2, m/s 16"
  },
  {
    "id": "d6_sci_u2_s2_09",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Selain menyalurkan nutrien dan oksigen kepada fetus yang sedang membesar, apakah satu lagi peranan penting tali pusat bagi menjamin kesihatan fetus?",
    "options": [
      "Menyingkirkan bahan kumuh daripada tubuh fetus",
      "Menghasilkan sperma tambahan di dalam uterus",
      "Mengawal tindakan refleks bayi sebelum dilahirkan",
      "Menggantikan fungsi paru-paru ibu sepanjang kehamilan"
    ],
    "correctIndex": 0,
    "explanation": "Tali pusat bukan sahaja membekalkan nutrien dan oksigen, malah menyingkirkan bahan kumuh daripada fetus.",
    "ref": "Unit 2, m/s 17"
  },
  {
    "id": "d6_sci_u2_s2_10",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Encik Ahmad mempunyai 3 orang anak yang kini berkembang menjadi keluarga seramai 12 orang termasuk cucu. Ramalkan kesan jangka panjang jika tiada seorang pun generasi baharu membiak di Bumi.",
    "options": [
      "Populasi manusia meningkat perlahan sebelum menjadi stabil",
      "Tempoh perkembangan fetus akan memendek kepada tiga bulan",
      "Manusia akan membiak melalui pembahagian sel seperti bakteria",
      "Bilangan manusia merosot secara beransur-ansur dan akhirnya spesies manusia pupus"
    ],
    "correctIndex": 3,
    "explanation": "Tanpa pembiakan, tiada individu baharu terhasil untuk menggantikan generasi lama, mengakibatkan spesies manusia terancam dan pupus.",
    "ref": "Unit 2, m/s 18, 30"
  },
  {
    "id": "d6_sci_u2_s3_01",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah dua bahagian utama yang membentuk sistem saraf pusat manusia?",
    "options": [
      "Otak dan rangkaian saraf",
      "Saraf tunjang dan organ deria",
      "Otak dan saraf tunjang",
      "Neuron dan otot rangka"
    ],
    "correctIndex": 2,
    "explanation": "Sistem saraf manusia terbahagi kepada sistem saraf pusat (otak dan saraf tunjang) dan sistem saraf periferi (rangkaian saraf).",
    "ref": "Unit 2, m/s 21, 30"
  },
  {
    "id": "d6_sci_u2_s3_02",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah nama unit asas yang membina sistem saraf manusia?",
    "options": [
      "Zigot",
      "Sel saraf atau neuron",
      "Sel darah merah",
      "Spora"
    ],
    "correctIndex": 1,
    "explanation": "Unit asas sistem saraf manusia dikenali sebagai sel saraf atau neuron.",
    "ref": "Unit 2, m/s 21"
  },
  {
    "id": "d6_sci_u2_s3_03",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Manakah antara berikut merupakan contoh tindakan luar kawal yang dikawal oleh otak?",
    "options": [
      "Menari mengikut rentak lagu",
      "Denyutan jantung dan pernafasan",
      "Bercakap dengan rakan",
      "Menulis nota dalam buku latihan"
    ],
    "correctIndex": 1,
    "explanation": "Denyutan jantung, pernafasan, pencernaan dan peredaran darah berlaku tanpa disedari sebagai tindakan luar kawal.",
    "ref": "Unit 2, m/s 22-23"
  },
  {
    "id": "d6_sci_u2_s3_04",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah fungsi utama sistem saraf periferi?",
    "options": [
      "Menghantar isyarat antara bahagian tubuh dengan sistem saraf pusat",
      "Mencerna makanan di dalam perut",
      "Menghasilkan sel darah baharu di dalam tulang",
      "Mengeluarkan hormon pembiakan setiap bulan"
    ],
    "correctIndex": 0,
    "explanation": "Rangkaian saraf periferi membawa isyarat dari bahagian tubuh ke sistem saraf pusat dan menghantar arahan dari pusat ke seluruh tubuh.",
    "ref": "Unit 2, m/s 25, 30"
  },
  {
    "id": "d6_sci_u2_s3_05",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Tindakan manakah yang merupakan tindakan refleks?",
    "options": [
      "Memerhatikan kelopak bunga raya yang mekar",
      "Mengangkat beg sekolah sebelum ke kelas",
      "Minum segelas air selepas bermain bola",
      "Menarik tangan serta-merta apabila tersentuh cerek panas"
    ],
    "correctIndex": 3,
    "explanation": "Menarik tangan dengan pantas apabila terkena objek panas ialah tindakan refleks tanpa perlu difikirkan.",
    "ref": "Unit 2, m/s 24"
  },
  {
    "id": "d6_sci_u2_s3_06",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Siti mendengar deringan telefon lalu mengangkat telefon tersebut untuk menjawab panggilan. Susun urutan aliran isyarat yang betul bagi tindakan ini.",
    "options": [
      "Tangan -> Telinga -> Saraf tunjang -> Otak",
      "Rangsangan bunyi -> Otak -> Telinga -> Saraf tunjang",
      "Rangsangan bunyi -> Telinga -> Otak -> Tangan mengangkat telefon",
      "Otak -> Telinga -> Rangsangan bunyi -> Tangan"
    ],
    "correctIndex": 2,
    "explanation": "Mengangkat telefon ialah tindakan terkawal: rangsangan dikesan organ deria (telinga), dihantar ke otak, dan otak mengarahkan tangan bergerak balas.",
    "ref": "Unit 2, m/s 22, 223"
  },
  {
    "id": "d6_sci_u2_s3_07",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Apakah perbezaan utama antara tindakan terkawal dengan tindakan refleks?",
    "options": [
      "Tindakan terkawal tidak menggunakan saraf periferi manakala tindakan refleks hanya menggunakan otak",
      "Tindakan terkawal hanya berlaku semasa tidur manakala tindakan refleks hanya semasa makan",
      "Tindakan terkawal disedari dan dikoordinasi oleh otak, manakala tindakan refleks berlaku pantas tanpa disedari dan dikawal oleh saraf tunjang",
      "Tindakan refleks mengambil masa beberapa minit untuk bertindak balas"
    ],
    "correctIndex": 2,
    "explanation": "Tindakan terkawal disedari di bawah kawalan otak; tindakan refleks berlaku serta-merta tanpa disedari di bawah kawalan saraf tunjang.",
    "ref": "Unit 2, m/s 22-24"
  },
  {
    "id": "d6_sci_u2_s3_08",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Semasa berjalan di laman rumah tanpa memakai selipar, kaki Amin terpijak duri tajam dan terangkat serta-merta. Bahagian sistem saraf pusat manakah yang mengarahkan gerak balas pantas tersebut?",
    "options": [
      "Otak sahaja tanpa melalui saraf lain",
      "Saraf tunjang",
      "Tali pusat",
      "Organ deria telinga"
    ],
    "correctIndex": 1,
    "explanation": "Dalam tindakan refleks seperti terpijak benda tajam, saraf tunjang menerima isyarat dan terus mengarahkan kaki mengangkat diri.",
    "ref": "Unit 2, m/s 24, 30"
  },
  {
    "id": "d6_sci_u2_s3_09",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Seorang murid mengelaskan 'pencernaan makanan' dan 'bersin apabila hidung dimasuki habuk' ke dalam kumpulan yang sama kerana kedua-duanya berlaku tanpa disedari. Bagaimanakah kamu boleh membezakan kedua-dua tindakan itu secara lebih tepat?",
    "options": [
      "Pencernaan ialah tindakan luar kawal berterusan yang dikawal otak, manakala bersin ialah tindakan refleks pantas terhadap rangsangan",
      "Pencernaan ialah tindakan terkawal manakala bersin ialah tindakan luar kawal berterusan",
      "Bersin melibatkan deria penglihatan manakala pencernaan melibatkan deria sentuhan",
      "Pencernaan hanya berlaku sekali sehari manakala bersin berlaku setiap minit"
    ],
    "correctIndex": 0,
    "explanation": "Buku teks membezakan tindakan luar kawal (pernafasan, denyutan jantung, pencernaan, peredaran darah) daripada tindakan refleks pantas terhadap rangsangan luar (bersin akibat habuk, terpijak duri, terkena panas).",
    "ref": "Unit 2, m/s 23-24"
  },
  {
    "id": "d6_sci_u2_s3_10",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Ali terhidu bau masakan kari yang sedap dari dapur lalu berjalan ke arah dapur. Jika saraf periferi di bahagian kakinya mengalami gangguan teruk sementara hidung dan otaknya sihat, apakah yang akan berlaku?",
    "options": [
      "Ali tidak dapat mengesan bau kari tetapi kakinya tetap berjalan sendiri ke dapur",
      "Ali akan mengalami Bell's palsy serta-merta pada tangannya",
      "Saraf tunjang akan menggantikan deria bau Ali di hidung",
      "Ali dapat menghidu bau kari tetapi isyarat arahan dari otak ke otot kaki terganggu lalu menyukarkan pergerakan"
    ],
    "correctIndex": 3,
    "explanation": "Deria bau dan otak masih berfungsi, tetapi saraf periferi ke kaki yang rosak mengganggu penghantaran arahan gerak balas ke kaki.",
    "ref": "Unit 2, m/s 25, 28"
  },
  {
    "id": "d6_sci_u2_s4_01",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "L",
    "q": "Keadaan manakah yang berlaku apabila saraf periferi pada otot muka rosak sehingga menyebabkan separuh muka menjadi herot dan pesakit sukar senyum atau menutup mata?",
    "options": [
      "Beguk",
      "Kurap",
      "Influenza",
      "Bell's palsy"
    ],
    "correctIndex": 3,
    "explanation": "Bell's palsy terjadi akibat kerosakan saraf periferi pada bahagian otot muka.",
    "ref": "Unit 2, m/s 25, 31"
  },
  {
    "id": "d6_sci_u2_s4_02",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "L",
    "q": "Berapa jamkah tempoh tidur harian yang disyorkan untuk menguatkan rangkaian sistem saraf dan daya ingatan kita?",
    "options": [
      "3 hingga 4 jam sehari",
      "5 hingga 6 jam sehari",
      "7 hingga 8 jam sehari",
      "12 hingga 14 jam sehari"
    ],
    "correctIndex": 2,
    "explanation": "Tidur mencukupi antara tujuh hingga lapan jam sehari menguatkan rangkaian sistem saraf dan daya ingatan.",
    "ref": "Unit 2, m/s 27"
  },
  {
    "id": "d6_sci_u2_s4_03",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "L",
    "q": "Vitamin dan nutrien manakah yang penting dalam pemakanan seimbang untuk menjaga kesihatan sistem saraf?",
    "options": [
      "Gula dan lemak tepu berlebihan",
      "Vitamin B kompleks serta mineral",
      "Garam pekat sahaja",
      "Pewarna makanan tiruan"
    ],
    "correctIndex": 1,
    "explanation": "Makanan seimbang yang mengandungi vitamin B kompleks dan mineral penting bagi menjaga sistem saraf.",
    "ref": "Unit 2, m/s 26"
  },
  {
    "id": "d6_sci_u2_s4_04",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "L",
    "q": "Mengapakah penunggang motosikal diwajibkan memakai topi keledar dari sudut penjagaan sistem saraf?",
    "options": [
      "Untuk mengelakkan kecederaan pada otak sekiranya berlaku kemalangan",
      "Untuk menambahkan kelajuan motosikal di lebuh raya",
      "Untuk mengelakkan kerosakan pada jari kaki",
      "Untuk menggantikan fungsi organ deria telinga"
    ],
    "correctIndex": 0,
    "explanation": "Topi keledar ialah alat pelindung tubuh yang melindungi kepala dan otak daripada kecederaan semasa kemalangan.",
    "ref": "Unit 2, m/s 27"
  },
  {
    "id": "d6_sci_u2_s4_05",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "L",
    "q": "Apakah kesan tabiat meminum minuman beralkohol terhadap sistem saraf manusia?",
    "options": [
      "Melambatkan penghantaran isyarat dalam sistem saraf",
      "Mempercepat gerak balas refleks saraf tunjang",
      "Menambahkan bilangan neuron baharu dalam masa singkat",
      "Mengelakkan berlakunya Bell's palsy"
    ],
    "correctIndex": 0,
    "explanation": "Alkohol melambatkan penghantaran isyarat dalam sistem saraf sehingga menjejaskan koordinasi badan.",
    "ref": "Unit 2, m/s 26"
  },
  {
    "id": "d6_sci_u2_s4_06",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "M",
    "q": "Seorang pesakit tiba-tiba sering terjatuh dan hilang keseimbangan ketika berjalan. Doktor mendapati isyarat dari kaki ke sistem saraf pusat terganggu. Bahagian manakah berkemungkinan besar terjejas?",
    "options": [
      "Kelenjar air liur di mulut",
      "Saraf periferi di kelopak mata",
      "Organ pembiakan lelaki",
      "Saraf periferi di bahagian kaki"
    ],
    "correctIndex": 3,
    "explanation": "Kerosakan saraf periferi pada bahagian kaki mengganggu isyarat imbangan tubuh ketika berjalan.",
    "ref": "Unit 2, m/s 25"
  },
  {
    "id": "d6_sci_u2_s4_07",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "M",
    "q": "Mengapakah seseorang penunggang basikal lasak atau peluncur papan roda memakai alat pelindung belakang tubuh selain topi keledar?",
    "options": [
      "Untuk mengurangkan geseran tayar dengan jalan raya",
      "Untuk merangsang penghasilan vitamin B kompleks pada kulit",
      "Untuk melindungi saraf tunjang daripada kecederaan jika terjatuh",
      "Untuk menghalang bunyi bising daripada masuk ke otak"
    ],
    "correctIndex": 2,
    "explanation": "Alat pelindung belakang tubuh melindungi tulang belakang yang menempatkan saraf tunjang daripada tercedera.",
    "ref": "Unit 2, m/s 27"
  },
  {
    "id": "d6_sci_u2_s4_08",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "M",
    "q": "Bagaimanakah amalan duduk dan berdiri dengan postur yang betul membantu menjaga sistem saraf?",
    "options": [
      "Menggalakkan pembebasan oksigen di paru-paru tanpa perlu bernafas",
      "Mengelakkan tekanan atau kecederaan pada tulang belakang dan saraf tunjang",
      "Membolehkan seseorang tidur kurang daripada empat jam sehari",
      "Mengelakkan keperluan memakan makanan yang mengandungi mineral"
    ],
    "correctIndex": 1,
    "explanation": "Postur yang betul semasa berdiri, duduk atau mengangkat barang mengelakkan kecederaan pada sistem saraf, terutamanya saraf tunjang.",
    "ref": "Unit 2, m/s 27"
  },
  {
    "id": "d6_sci_u2_s4_09",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "H",
    "q": "Pak Cik Kamal menghidap Bell's palsy di sebelah kanan wajahnya. Ramalkan gabungan kesan harian yang paling tepat akan dialaminya jika penyakit itu belum pulih.",
    "options": [
      "Hilang deria penglihatan sepenuhnya dan lumpuh kedua-dua belah tangan",
      "Sukar tersenyum simetri, sukar menutup sebelah mata dan air liur mudah meleleh",
      "Hilang kawalan pernafasan automatik semasa tidur malam",
      "Tidak dapat mendengar bunyi deringan telefon dengan sebelah telinga kiri"
    ],
    "correctIndex": 1,
    "explanation": "Bell's palsy menjejaskan saraf periferi otot muka di sebelah bahagian wajah, menyebabkan kesukaran senyum, menutup mata dan mengawal otot muka tersebut.",
    "ref": "Unit 2, m/s 25"
  },
  {
    "id": "d6_sci_u2_s4_10",
    "unit": "u2",
    "skill": "u2_s4",
    "diff": "H",
    "q": "Rani sering tidur hanya 4 jam sehari dan jarang mengambil sayur serta bijirin dalam dietnya, manakala adiknya tidur 8 jam sehari serta makan makanan seimbang. Mengapakah prestasi daya ingatan dan tumpuan adiknya di kelas lebih baik?",
    "options": [
      "Tidur 7-8 jam bersama pengambilan vitamin B kompleks dan mineral menguatkan rangkaian sistem saraf",
      "Kurang tidur menyebabkan otak menjadi terlalu aktif dan kehabisan glukosa dalam sekelip mata",
      "Sayur-sayuran menghasilkan alkohol semula jadi untuk mempercepat isyarat saraf",
      "Adiknya mempunyai sistem saraf periferi yang tidak memerlukan otak"
    ],
    "correctIndex": 0,
    "explanation": "Tidur yang mencukupi (7-8 jam) dan diet seimbang kaya vitamin B kompleks serta mineral menyokong kekuatan rangkaian sistem saraf dan ingatan.",
    "ref": "Unit 2, m/s 26-27"
  },
  {
    "id": "d6_sci_u3_s1_01",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Apakah maksud mikroorganisma?",
    "options": [
      "Haiwan kecil yang hanya hidup di kawasan gurun",
      "Benda bukan hidup yang terdapat di dalam tanah dan air",
      "Tumbuhan parasit yang tumbuh pada batang pokok besar",
      "Hidupan seni yang tidak dapat dilihat dengan mata kasar"
    ],
    "correctIndex": 3,
    "explanation": "Mikro bermaksud seni atau halus dan organisma bermaksud hidupan; mikroorganisma ialah hidupan seni yang tidak dapat dilihat oleh mata kasar.",
    "ref": "Unit 3, m/s 34, 49"
  },
  {
    "id": "d6_sci_u3_s1_02",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Antara lima jenis mikroorganisma, yang manakah merupakan mikroorganisma paling seni dan hanya dapat dilihat menggunakan mikroskop elektron?",
    "options": [
      "Fungi",
      "Alga",
      "Virus",
      "Protozoa"
    ],
    "correctIndex": 2,
    "explanation": "Virus ialah mikroorganisma yang paling seni dan hanya dapat diperhatikan menggunakan mikroskop elektron.",
    "ref": "Unit 3, m/s 35, 50"
  },
  {
    "id": "d6_sci_u3_s1_03",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Jenis mikroorganisma manakah yang mempunyai klorofil dan mampu membuat makanannya sendiri melalui proses fotosintesis?",
    "options": [
      "Virus",
      "Bakteria",
      "Alga",
      "Protozoa"
    ],
    "correctIndex": 2,
    "explanation": "Alga mempunyai sifat tumbuhan termasuk klorofil untuk menjalankan proses fotosintesis.",
    "ref": "Unit 3, m/s 35, 50"
  },
  {
    "id": "d6_sci_u3_s1_04",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Manakah antara pasangan berikut kesemuanya tergolong dalam kumpulan bakteria?",
    "options": [
      "Yis dan Penicillium",
      "Salmonella, Streptococcus dan Escherichia coli",
      "Paramesium dan Amoeba",
      "Chlorella, Volvox dan Chlamydomonas"
    ],
    "correctIndex": 1,
    "explanation": "Salmonella, Streptococcus, Spirillum dan Escherichia coli ialah contoh bakteria.",
    "ref": "Unit 3, m/s 34"
  },
  {
    "id": "d6_sci_u3_s1_05",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Bagaimanakah fungi seperti kulat roti (Rhizopus) membiak?",
    "options": [
      "Melalui spora",
      "Melalui pertunasan di dalam sel manusia",
      "Dengan menghasilkan biji benih halus",
      "Melalui proses fotosintesis di dalam air"
    ],
    "correctIndex": 0,
    "explanation": "Fungi membiak melalui spora dan hidup dengan mereputkan objek tempat tinggalnya untuk menyerap nutrien.",
    "ref": "Unit 3, m/s 34, 50"
  },
  {
    "id": "d6_sci_u3_s1_06",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Sekumpulan murid memerhatikan setitis air kolam di bawah mikroskop cahaya. Mereka melihat organisma kecil bernama Paramesium bergerak lincah mencari makanan. Dalam kumpulan manakah Paramesium dikelaskan?",
    "options": [
      "Virus kerana hanya boleh hidup di dalam ikan",
      "Alga kerana hidup di dalam air kolam yang terdedah cahaya",
      "Fungi kerana menyerap makanan daripada air",
      "Protozoa kerana mempunyai sifat haiwan dan bergerak dalam habitat berair"
    ],
    "correctIndex": 3,
    "explanation": "Protozoa seperti Paramesium dan Amoeba hidup dalam habitat berair (kolam, tasik, sungai) dan bergerak seperti haiwan untuk mendapatkan makanan.",
    "ref": "Unit 3, m/s 35, 50"
  },
  {
    "id": "d6_sci_u3_s1_07",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Apakah ciri unik virus yang membezakannya daripada bakteria, fungi, alga dan protozoa?",
    "options": [
      "Virus hidup secara berkoloni di atas roti yang lembap",
      "Virus membuat makanan sendiri apabila mendapat cahaya matahari",
      "Virus wujud dalam bentuk sfera, rod dan lingkaran sahaja",
      "Virus hanya dapat hidup dan membiak apabila berada di dalam benda hidup lain"
    ],
    "correctIndex": 3,
    "explanation": "Virus hanya mampu hidup dan membiak apabila berada di dalam sel benda hidup lain sebagai perumah.",
    "ref": "Unit 3, m/s 35"
  },
  {
    "id": "d6_sci_u3_s1_08",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Antara bentuk berikut, bentuk fizikal manakah yang biasanya ditemukan pada kumpulan bakteria?",
    "options": [
      "Bintang, kiub dan piramid",
      "Kubah, lengkungan dan kekuda",
      "Sfera, rod dan lingkaran",
      "Filamen bercabang sahaja"
    ],
    "correctIndex": 2,
    "explanation": "Bakteria wujud dalam bentuk asas iaitu sfera, rod atau lingkaran.",
    "ref": "Unit 3, m/s 34, 50"
  },
  {
    "id": "d6_sci_u3_s1_09",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Seorang murid menemui empat hidupan mikro: X menghasilkan makanan dengan klorofil, Y mengurai sisa roti dan membiak dengan spora, Z bergerak mencari makan dalam air tasik, manakala W ialah bakteriofaj. Padanan X, Y, Z, W yang betul ialah:",
    "options": [
      "X: Protozoa; Y: Bakteria; Z: Alga; W: Fungi",
      "X: Alga; Y: Fungi; Z: Protozoa; W: Virus",
      "X: Alga; Y: Bakteria; Z: Fungi; W: Virus",
      "X: Fungi; Y: Alga; Z: Virus; W: Bakteria"
    ],
    "correctIndex": 1,
    "explanation": "X (fotosintesis) = alga, Y (pereputan + spora) = fungi, Z (bergerak dalam air) = protozoa, dan W (bakteriofaj) = virus.",
    "ref": "Unit 3, m/s 34-35"
  },
  {
    "id": "d6_sci_u3_s1_10",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Mengapakah makmal hospital menggunakan mikroskop elektron dan bukannya mikroskop cahaya biasa apabila hendak mengesan jenis virus seperti Virus Influenza atau COVID-19?",
    "options": [
      "Kerana saiz virus terlalu seni untuk dilihat dengan kuasa pembesaran mikroskop cahaya biasa",
      "Kerana virus bergerak terlalu pantas di bawah kanta mikroskop cahaya",
      "Kerana virus mempunyai klorofil yang memantulkan cahaya cermin mikroskop",
      "Kerana mikroskop cahaya hanya boleh digunakan untuk melihat sampel air sungai"
    ],
    "correctIndex": 0,
    "explanation": "Virus ialah mikroorganisma yang paling seni, jauh lebih kecil daripada bakteria dan protozoa, justeru hanya boleh dilihat dengan mikroskop elektron.",
    "ref": "Unit 3, m/s 35, 215"
  },
  {
    "id": "d6_sci_u3_s2_01",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Dalam eksperimen membuktikan mikroorganisma bernafas, yis dicampurkan ke dalam air suam dan gula lalu mulut botol dipasang belon. Apakah pemerhatian yang dilihat selepas 30 minit?",
    "options": [
      "Ukur lilit belon semakin bertambah",
      "Belon mengecut dan tersedut ke dalam botol",
      "Air suam membeku di dasar botol",
      "Warna gula berubah menjadi biru pekat"
    ],
    "correctIndex": 0,
    "explanation": "Yis bernafas dan membebaskan gas yang menyebabkan belon mengembang lalu ukur lilitnya bertambah.",
    "ref": "Unit 3, m/s 36-37, 40"
  },
  {
    "id": "d6_sci_u3_s2_02",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah tiga proses hidup yang dijalankan oleh mikroorganisma seperti yang dibuktikan dalam buku teks Sains Tahun 6?",
    "options": [
      "Berlari, bertumbuh dan bertukar warna",
      "Berfikir, bergerak dan melahirkan anak",
      "Memasak, bernafas dan memancarkan cahaya",
      "Bernafas, bergerak dan bertumbuh"
    ],
    "correctIndex": 3,
    "explanation": "Tiga proses hidup mikroorganisma ialah bernafas, bergerak dan bertumbuh.",
    "ref": "Unit 3, m/s 36-39, 49"
  },
  {
    "id": "d6_sci_u3_s2_03",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Sekeping roti disembur sedikit air dan disimpan di dalam beg plastik berzip di tempat gelap selama tujuh hari. Apakah perubahan pada roti dari hari kelima hingga hari ketujuh?",
    "options": [
      "Yis di atas roti menghasilkan gula baharu",
      "Roti bertukar menjadi keras dan bersih",
      "Saiz kulapuk roti bertambah",
      "Kulapuk hilang kerana ketiadaan cahaya matahari"
    ],
    "correctIndex": 2,
    "explanation": "Kehadiran air dan nutrien membolehkan fungi bertumbuh sehingga saiz kulapuk pada roti bertambah.",
    "ref": "Unit 3, m/s 39-40"
  },
  {
    "id": "d6_sci_u3_s2_04",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Mengapakah sayur asparagus yang dipek secara vakum dapat bertahan lebih lama berbanding sayur yang diletakkan di tempat terbuka?",
    "options": [
      "Kerana suhu di dalam pek vakum mencapai takat didih",
      "Kerana ketiadaan udara menghalang pertumbuhan mikroorganisma",
      "Kerana pek vakum menambah keasidan sayur",
      "Kerana sayur menerima lebih banyak nutrien di dalam plastik"
    ],
    "correctIndex": 1,
    "explanation": "Pembungkusan vakum mengeluarkan udara; ketiadaan udara membantutkan pertumbuhan mikroorganisma.",
    "ref": "Unit 3, m/s 42"
  },
  {
    "id": "d6_sci_u3_s2_05",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Mengapakah yis kering di dalam peket plastik belum bertumbuh dan masih tidak aktif?",
    "options": [
      "Kerana yis tersebut telah pupus",
      "Kerana keperluan untuk pertumbuhannya seperti air dan nutrien masih tidak mencukupi",
      "Kerana yis hanya boleh hidup di dalam air laut masin",
      "Kerana peket plastik berwarna gelap memusnahkan yis"
    ],
    "correctIndex": 1,
    "explanation": "Mikroorganisma hanya aktif dan bertumbuh apabila semua faktor keperluannya (air, nutrien, udara, suhu dan keasidan sesuai) mencukupi.",
    "ref": "Unit 3, m/s 40"
  },
  {
    "id": "d6_sci_u3_s2_06",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Tiga botol susu segar (A, B, C) disimpan selama tiga hari: A di dalam peti sejuk, B pada suhu bilik, dan C dididihkan lalu ditutup dalam termos. Botol susu yang manakah paling cepat rosak?",
    "options": [
      "Botol B kerana suhu bilik adalah sesuai untuk pertumbuhan mikroorganisma",
      "Botol A kerana suhu sejuk mengaktifkan bakteria",
      "Botol C kerana haba termos menghidupkan bakteria baharu",
      "Ketiga-tiga botol rosak pada masa yang tepat sama"
    ],
    "correctIndex": 0,
    "explanation": "Suhu bilik sesuai untuk pembiakan mikroorganisma, manakala suhu rendah peti sejuk melambatkannya dan pendidihan membunuh mikroorganisma.",
    "ref": "Unit 3, m/s 40-41"
  },
  {
    "id": "d6_sci_u3_s2_07",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Dalam uji kaji membuktikan faktor kehadiran nutrien, bakteria dikulturkan di dalam bikar berisi air suling dan bikar berisi susu segar selama tiga hari. Apakah ramalan yang paling tepat?",
    "options": [
      "Lebih banyak bakteria tumbuh di dalam air suling kerana airnya jernih",
      "Air suling bertukar menjadi yogurt dalam masa tiga hari",
      "Tiada bakteria bertumbuh dalam kedua-dua bikar",
      "Bakteria bertumbuh dengan banyak di dalam susu segar kerana ia mengandungi nutrien"
    ],
    "correctIndex": 3,
    "explanation": "Susu segar membekalkan nutrien untuk pertumbuhan bakteria, manakala air suling tidak mengandungi nutrien.",
    "ref": "Unit 3, m/s 43"
  },
  {
    "id": "d6_sci_u3_s2_08",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Sebiji epal dihiris dua: hirisan P direndam dalam larutan cuka dan hirisan Q direndam dalam air pili biasa. Selepas beberapa hari, hirisan Q berkulat tetapi hirisan P kekal elok. Apakah faktor pertumbuhan yang diuji?",
    "options": [
      "Kehadiran udara",
      "Kehadiran cahaya",
      "Keasidan yang sesuai",
      "Suhu persekitaran"
    ],
    "correctIndex": 2,
    "explanation": "Larutan cuka mempunyai keasidan yang tinggi yang tidak sesuai untuk pertumbuhan mikroorganisma.",
    "ref": "Unit 3, m/s 44"
  },
  {
    "id": "d6_sci_u3_s2_09",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Seorang pembuat roti terlupa memasukkan gula ke dalam adunan doh yang sudah dicampur dengan yis dan air suam. Adakah saiz doh tersebut masih bertambah selepas dibiarkan 20 minit?",
    "options": [
      "Tidak, kerana yis mati serta-merta tanpa gula pasir",
      "Tidak, kerana air suam membunuh semua yis di dalam tepung",
      "Ya, kerana tepung dalam doh itu sendiri membekalkan nutrien untuk yis bernafas dan mengaktifkan doh",
      "Ya, tetapi hanya jika doh itu disimpan di dalam peti sejuk beku"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun tiada gula tambahan, tepung doh membekalkan nutrien bagi yis bernafas dan membebaskan gas sehingga doh mengembang.",
    "ref": "Unit 3, m/s 50, 223"
  },
  {
    "id": "d6_sci_u3_s2_10",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Alia memerhatikan dua keping roti kering A dan B dalam beg plastik berzip yang ditutup rapat. Hanya roti B dicelupkan ke dalam air sebelum disimpan selama seminggu. Roti B ditumbuhi kulapuk hitam sedangkan roti A masih elok. Jika roti B diletakkan pula di dalam peti sejuk beku pada hari pertama, apakah kesannya?",
    "options": [
      "Kulapuk tumbuh lebih cepat kerana kelembapan bergabung dengan kesejukan",
      "Pertumbuhan kulapuk terhenti walaupun terdapat air kerana suhu terlalu rendah tidak sesuai untuk fungi",
      "Roti A pula akan ditumbuhi bakteria kerana kekurangan air",
      "Air di dalam roti B akan bertukar menjadi larutan cuka berasid"
    ],
    "correctIndex": 1,
    "explanation": "Mikroorganisma memerlukan kesemua faktor asas termasuk suhu yang sesuai; suhu takat beku menghentikan pertumbuhannya meskipun air hadir.",
    "ref": "Unit 3, m/s 40-42"
  },
  {
    "id": "d6_sci_u3_s3_01",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Mikroorganisma manakah yang digunakan untuk membuat roti menjadi lembut dan gebu serta menghasilkan tapai?",
    "options": [
      "Yis",
      "Virus Influenza",
      "Amoeba",
      "Salmonella"
    ],
    "correctIndex": 0,
    "explanation": "Yis (sejenis fungi) digunakan dalam pembuatan roti dan tapai.",
    "ref": "Unit 3, m/s 44"
  },
  {
    "id": "d6_sci_u3_s3_02",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Penisilin ialah sejenis antibiotik yang digunakan untuk melawan jangkitan bakteria berbahaya. Apakah jenis mikroorganisma yang menghasilkannya?",
    "options": [
      "Protozoa",
      "Alga",
      "Virus",
      "Fungi"
    ],
    "correctIndex": 3,
    "explanation": "Sesetengah fungi (Penicillium) digunakan untuk menghasilkan antibiotik penisilin.",
    "ref": "Unit 3, m/s 45"
  },
  {
    "id": "d6_sci_u3_s3_03",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Bakteria apakah yang sering menyebabkan keracunan makanan apabila seseorang memakan makanan atau minuman yang tercemar?",
    "options": [
      "Rhizopus",
      "Paramesium",
      "Chlorella",
      "Salmonella"
    ],
    "correctIndex": 3,
    "explanation": "Keracunan makanan berlaku akibat tindakan bakteria Salmonella daripada sumber yang tercemar.",
    "ref": "Unit 3, m/s 46"
  },
  {
    "id": "d6_sci_u3_s3_04",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Bagaimanakah bakteria membantu manusia dalam loji rawatan sisa kumbahan?",
    "options": [
      "Menukarkan sisa plastik kepada air bersih",
      "Menghasilkan haba untuk mendidihkan air sungai",
      "Menguraikan sisa organik dan membantu pereputan tinja",
      "Membekalkan oksigen kepada ikan di loji kumbahan"
    ],
    "correctIndex": 2,
    "explanation": "Bakteria menguraikan sisa organik dalam tinja di loji kumbahan sebagai sebahagian daripada rawatan sisa.",
    "ref": "Unit 3, m/s 45"
  },
  {
    "id": "d6_sci_u3_s3_05",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Penyakit beguk yang menyebabkan bengkak pada pipi dan leher serta demam campak disebabkan oleh jangkitan _____.",
    "options": [
      "protozoa",
      "virus",
      "alga",
      "fungi"
    ],
    "correctIndex": 1,
    "explanation": "Influenza (selesema), demam campak dan beguk ialah penyakit berjangkit yang disebabkan oleh virus.",
    "ref": "Unit 3, m/s 46"
  },
  {
    "id": "d6_sci_u3_s3_06",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Amirah suka makan gula-gula sebelum tidur tanpa memberus gigi sehingga menyebabkan giginya berlubang. Terangkan bagaimana mikroorganisma menyebabkan kerosakan gigi tersebut.",
    "options": [
      "Bakteria dalam mulut menghasilkan asid daripada gula dan sisa makanan lalu mereputkan gigi",
      "Virus pada gusi memakan lapisan kalsium gigi secara langsung",
      "Fungi tumbuh dan menghasilkan spora di permukaan enamel gigi",
      "Alga menyerap nutrien daripada akar gigi semasa tidur"
    ],
    "correctIndex": 0,
    "explanation": "Bakteria pada mulut menukarkan gula dan sisa makanan kepada asid yang menghakis dan mereputkan gigi.",
    "ref": "Unit 3, m/s 45"
  },
  {
    "id": "d6_sci_u3_s3_07",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Padankan jenis makanan dengan mikroorganisma yang terlibat dalam pembuatannya mengikut buku teks Sains Tahun 6:\n1. Tempe\n2. Yogurt\n3. Keju",
    "options": [
      "1: Fungi (ragi); 2: Bakteria; 3: Bakteria dan fungi",
      "1: Protozoa; 2: Alga; 3: Virus",
      "1: Bakteria; 2: Fungi; 3: Protozoa dan bakteria",
      "1: Virus; 2: Yis; 3: Alga"
    ],
    "correctIndex": 0,
    "explanation": "Fungi digunakan untuk membuat tempe, bakteria untuk yogurt, dan gabungan bakteria serta fungi untuk membuat keju.",
    "ref": "Unit 3, m/s 44, 48"
  },
  {
    "id": "d6_sci_u3_s3_08",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Mengapakah pertumbuhan fungi pada permukaan daun tanaman sayur-sayuran menjejaskan hasil tuaian petani?",
    "options": [
      "Kerana fungi menarik lebih banyak serangga pendebunga",
      "Kerana fungi membekalkan terlalu banyak nitrogen kepada akar",
      "Kerana fungi menukarkan tumbuhan menjadi kulapuk roti dalam masa sejam",
      "Kerana fungi mengganggu proses fotosintesis pada daun tanaman"
    ],
    "correctIndex": 3,
    "explanation": "Fungi yang menjangkiti daun merosakkan permukaan daun dan mengganggu proses fotosintesis tumbuhan.",
    "ref": "Unit 3, m/s 46"
  },
  {
    "id": "d6_sci_u3_s3_09",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Dalam penghasilan tempe, kacang soya yang telah direbus dan disejukkan digaulkan dengan ragi tempe lalu disimpan dalam beg plastik berzip yang ditebuk lubang kecil di tempat bersuhu bilik. Mengapakah lubang kecil perlu ditebuk pada beg plastik?",
    "options": [
      "Supaya air hujan dapat masuk ke dalam kacang soya",
      "Supaya bakteria Salmonella dapat keluar daripada bungkusan",
      "Membenarkan aliran udara agar fungi ragi tempe dapat bernafas dan bertumbuh secara aktif",
      "Mengurangkan suhu kacang soya di bawah takat beku"
    ],
    "correctIndex": 2,
    "explanation": "Lubang pada beg plastik membekalkan udara agar fungi dalam ragi tempe dapat menjalankan proses hidup dan menukarkan kacang soya menjadi tempe.",
    "ref": "Unit 3, m/s 48"
  },
  {
    "id": "d6_sci_u3_s3_10",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Seorang penternak mencampurkan tinja haiwan bersama serbuk kayu untuk menghasilkan baja kompos, manakala doktor pula menyuntik vaksin kepada bayi. Apakah persamaan peranan mikroorganisma dalam kedua-dua situasi ini?",
    "options": [
      "Kedua-duanya menggunakan protozoa untuk membunuh parasit berbahaya",
      "Kedua-duanya memanfaatkan tindakan mikroorganisma untuk kebaikan manusia dalam bidang pertanian dan perubatan",
      "Kedua-duanya bergantung kepada tindakan antibiotik penisilin sahaja",
      "Kedua-duanya memerlukan pembungkusan vakum supaya tiada udara masuk"
    ],
    "correctIndex": 1,
    "explanation": "Bakteria menguraikan tinja menjadi baja organik (pertanian), manakala fungi/bakteria/virus digunakan menghasilkan vaksin yang merangsang antibodi (perubatan).",
    "ref": "Unit 3, m/s 45"
  },
  {
    "id": "d6_sci_u4_s1_01",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah maksud interaksi antara hidupan?",
    "options": [
      "Proses haiwan menukar warna kulit mengikut cuaca",
      "Hubungan antara hidupan yang saling bergantung antara satu sama lain untuk mendapatkan keperluan asas",
      "Pergerakan haiwan secara berkumpulan ke tempat yang lebih sejuk",
      "Penghasilan makanan oleh tumbuhan hijau pada waktu siang"
    ],
    "correctIndex": 1,
    "explanation": "Interaksi antara hidupan ialah hubungan saling bergantung antara hidupan bagi memperoleh keperluan asas untuk terus hidup.",
    "ref": "Unit 4, m/s 52, 65"
  },
  {
    "id": "d6_sci_u4_s1_02",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Seekor burung helang menyambar seekor arnab di padang rumput untuk dimakan. Apakah peranan burung helang dalam interaksi tersebut?",
    "options": [
      "Pemangsa",
      "Perumah",
      "Mangsa",
      "Parasit"
    ],
    "correctIndex": 0,
    "explanation": "Pemangsa ialah haiwan yang memburu dan memakan haiwan lain (arnab ialah mangsa, burung helang ialah pemangsa).",
    "ref": "Unit 4, m/s 52-53"
  },
  {
    "id": "d6_sci_u4_s1_03",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah jenis interaksi apabila dua ekor burung tiung jantan bergaduh untuk mendapatkan burung tiung betina?",
    "options": [
      "Persaingan interspesies",
      "Mangsa-pemangsa",
      "Simbiosis komensalisme",
      "Persaingan intraspesies"
    ],
    "correctIndex": 3,
    "explanation": "Persaingan antara individu daripada spesies yang sama (burung tiung dengan burung tiung) ialah persaingan intraspesies.",
    "ref": "Unit 4, m/s 54"
  },
  {
    "id": "d6_sci_u4_s1_04",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Burung hering dan singa berebut bangkai haiwan yang sama di savana. Interaksi ini ialah contoh _____.",
    "options": [
      "persaingan intraspesies",
      "mutualisme",
      "persaingan interspesies",
      "parasitisme"
    ],
    "correctIndex": 2,
    "explanation": "Burung hering dan singa ialah spesies yang berlainan yang bersaing untuk sumber makanan yang terhad, maka ia ialah persaingan interspesies.",
    "ref": "Unit 4, m/s 55"
  },
  {
    "id": "d6_sci_u4_s1_05",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Antara faktor berikut, yang manakah TIDAK menyebabkan persaingan interspesies antara haiwan berlainan spesies?",
    "options": [
      "Makanan yang terhad",
      "Sumber air yang terhad",
      "Pasangan untuk mengawan",
      "Tempat tinggal atau kawasan yang terhad"
    ],
    "correctIndex": 2,
    "explanation": "Pasangan untuk mengawan hanya menjadi faktor persaingan bagi haiwan yang sama spesies (intraspesies), bukan interspesies.",
    "ref": "Unit 4, m/s 54-55"
  },
  {
    "id": "d6_sci_u4_s1_06",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Apakah jenis interaksi yang berlaku antara seekor lalat dengan pokok perangkap lalat Venus?",
    "options": [
      "Persaingan interspesies untuk mendapatkan cahaya",
      "Mangsa-pemangsa antara tumbuhan pemangsa dan serangga",
      "Simbiosis mutualisme antara pokok dan lalat",
      "Komensalisme kerana lalat menumpang tanpa merugikan pokok"
    ],
    "correctIndex": 1,
    "explanation": "Pokok perangkap lalat Venus memerangkap dan memakan serangga seperti lalat, menjadikannya interaksi mangsa-pemangsa.",
    "ref": "Unit 4, m/s 52"
  },
  {
    "id": "d6_sci_u4_s1_07",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Di sebuah kolam air semasa musim kemarau, sekumpulan kuda belang dan sekumpulan gnu minum dari lopak air yang semakin kering. Apakah jenis persaingan yang berlaku dan faktornya?",
    "options": [
      "Persaingan interspesies kerana sumber air terhad",
      "Persaingan intraspesies kerana faktor pasangan",
      "Persaingan interspesies kerana faktor tempat tinggal",
      "Simbiosis mutualisme antara kuda belang dan gnu"
    ],
    "correctIndex": 0,
    "explanation": "Kuda belang dan gnu ialah dua spesies berbeza yang bersaing mendapatkan sumber air yang terhad.",
    "ref": "Unit 4, m/s 55"
  },
  {
    "id": "d6_sci_u4_s1_08",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Antara pasangan situasi haiwan berikut, manakah yang menunjukkan persaingan intraspesies untuk mempertahankan kawasan atau tempat tinggal?",
    "options": [
      "Burung tiram menghalau burung camar daripada mendekati kawasannya",
      "Sekawan burung bangau mencari ikan di sawah padi",
      "Kumpulan dubuk berkumpul di sekitar bangkai rusa",
      "Dua ekor badak air bertarung di tepi sungai untuk mempertahankan kawasan masing-masing"
    ],
    "correctIndex": 3,
    "explanation": "Badak air dengan badak air ialah spesies sama (intraspesies), manakala burung tiram dan burung camar ialah spesies berbeza (interspesies).",
    "ref": "Unit 4, m/s 54-55"
  },
  {
    "id": "d6_sci_u4_s1_09",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Dalam dua ekosistem berasingan: Kawasan X mempunyai 20 ekor singa dan 2 ekor rusa yang tinggal, manakala Kawasan Y mempunyai 2 ekor singa dan 30 ekor rusa. Ramalkan keamatan persaingan intraspesies antara singa di kedua-dua kawasan tersebut.",
    "options": [
      "Singa di Kawasan X akan bersaing untuk mendapatkan pasangan berlainan spesies",
      "Persaingan antara singa di Kawasan Y lebih sengit kerana terdapat banyak rusa",
      "Kedua-dua kawasan tidak mengalami sebarang persaingan intraspesies",
      "Persaingan antara singa di Kawasan X lebih sengit kerana makanan sangat terhad berbanding bilangan singa"
    ],
    "correctIndex": 3,
    "explanation": "Apabila nisbah pemangsa tinggi berbanding sumber makanan yang sangat terhad (Kawasan X), persaingan sesama spesies menjadi jauh lebih sengit.",
    "ref": "Unit 4, m/s 54"
  },
  {
    "id": "d6_sci_u4_s1_10",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Perhatikan dua interaksi di lautan: penyu memakan obor-obor, dan burung laut pula memakan anak penyu yang baru menetas menuju ke laut. Apakah peranan penyu dalam kedua-dua interaksi tersebut?",
    "options": [
      "Penyu sentiasa menjadi pemangsa dalam kedua-dua interaksi",
      "Penyu bertindak sebagai mangsa kepada obor-obor dan pemangsa kepada burung laut",
      "Penyu bertindak sebagai pemangsa terhadap obor-obor, tetapi anak penyu menjadi mangsa kepada burung laut",
      "Penyu bersaing secara intraspesies dengan obor-obor"
    ],
    "correctIndex": 2,
    "explanation": "Satu jenis haiwan boleh menjadi pemangsa kepada haiwan yang dimakannya dan pada masa lain menjadi mangsa kepada pemburu yang lebih besar.",
    "ref": "Unit 4, m/s 52-53"
  },
  {
    "id": "d6_sci_u4_s2_01",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah tiga jenis interaksi simbiosis antara haiwan?",
    "options": [
      "Mangsa-pemangsa, intraspesies dan interspesies",
      "Mutualisme, parasitisme dan komensalisme",
      "Fotosintesis, respirasi dan penguraian",
      "Persaingan, pembiakan dan pemeliharaan"
    ],
    "correctIndex": 1,
    "explanation": "Simbiosis ialah hubungan rapat antara dua spesies haiwan yang terbahagi kepada mutualisme, parasitisme dan komensalisme.",
    "ref": "Unit 4, m/s 56-57, 65"
  },
  {
    "id": "d6_sci_u4_s2_02",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Ikan remora melekatkan diri pada badan ikan jerung untuk mendapat pengangkutan, perlindungan dan sisa makanan, manakala ikan jerung tidak mendapat manfaat mahupun kerugian. Apakah jenis simbiosis ini?",
    "options": [
      "Komensalisme",
      "Parasitisme",
      "Mutualisme",
      "Mangsa-pemangsa"
    ],
    "correctIndex": 0,
    "explanation": "Komensalisme memberi manfaat kepada satu pihak sahaja tanpa merugikan atau memberi faedah kepada pihak yang satu lagi.",
    "ref": "Unit 4, m/s 57, 66"
  },
  {
    "id": "d6_sci_u4_s2_03",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Dalam interaksi antara kucing dengan sengkenit yang menghisap darahnya, apakah istilah yang diberikan kepada kucing?",
    "options": [
      "Perumah",
      "Parasit",
      "Pemangsa",
      "Komensal"
    ],
    "correctIndex": 0,
    "explanation": "Dalam parasitisme, pihak yang mengalami kerugian ialah perumah (kucing), manakala pihak yang untung ialah parasit (sengkenit).",
    "ref": "Unit 4, m/s 57"
  },
  {
    "id": "d6_sci_u4_s2_04",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Burung hinggap di dalam mulut buaya yang terbuka untuk memakan sisa makanan di celah gigi buaya. Apakah kebaikan yang diperoleh oleh buaya?",
    "options": [
      "Buaya mendapat pengangkutan percuma ke darat",
      "Buaya tidak mendapat sebarang kebaikan atau kerugian",
      "Buaya mendapat perlindungan daripada ikan jerung",
      "Gigi buaya dibersihkan daripada sisa makanan"
    ],
    "correctIndex": 3,
    "explanation": "Buaya dan burung ialah contoh mutualisme: burung kenyang dan gigi buaya menjadi bersih.",
    "ref": "Unit 4, m/s 56"
  },
  {
    "id": "d6_sci_u4_s2_05",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Pasangan hidupan manakah yang merupakan contoh interaksi komensalisme?",
    "options": [
      "Ikan badut dan buran",
      "Cacing pita dan usus manusia",
      "Teritip dan cangkerang ketam",
      "Kucing dan sengkenit"
    ],
    "correctIndex": 2,
    "explanation": "Teritip mendapat pengangkutan percuma di atas cangkerang ketam manakala ketam tidak terjejas atau mendapat faedah.",
    "ref": "Unit 4, m/s 57, 66"
  },
  {
    "id": "d6_sci_u4_s2_06",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Ikan badut bersembunyi di sebalik tentakel buran yang bersengat. Mengapakah hubungan antara ikan badut dan buran digolongkan sebagai mutualisme dan bukannya komensalisme?",
    "options": [
      "Kerana buran menghisap darah daripada kulit ikan badut",
      "Kerana buran melindungi ikan badut daripada pemangsa dan ikan badut pula menakutkan pemangsa buran seperti ikan rama-rama",
      "Kerana ikan badut melekat kekal pada cangkerang buran tanpa bergerak",
      "Kerana buran tidak mendapat sebarang faedah daripada kehadiran ikan badut"
    ],
    "correctIndex": 1,
    "explanation": "Kedua-dua pihak saling memberi faedah: buran melindungi ikan badut dan ikan badut menghalau pemangsa buran.",
    "ref": "Unit 4, m/s 56"
  },
  {
    "id": "d6_sci_u4_s2_07",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Cacing pita hidup di dalam usus manusia. Apakah kesan interaksi parasitisme ini terhadap manusia sebagai perumah?",
    "options": [
      "Usus manusia menjadi lebih bersih daripada sisa makanan",
      "Perumah boleh mendapat penyakit dan kehilangan berat badan",
      "Manusia mendapat perlindungan tambahan daripada jangkitan bakteria",
      "Tiada kesan positif mahupun negatif kepada kesihatan manusia"
    ],
    "correctIndex": 1,
    "explanation": "Cacing pita menyerap makanan dalam usus perumah sehingga perumah boleh jatuh sakit dan susut berat badan.",
    "ref": "Unit 4, m/s 56"
  },
  {
    "id": "d6_sci_u4_s2_08",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Sekumpulan kutu tinggal di atas bulu seekor lembu dengan menggigit kulitnya, manakala burung gembala pula mematuk kutu tersebut dari badan lembu. Nyatakan dua jenis simbiosis yang wujud terhadap lembu.",
    "options": [
      "Kutu–lembu ialah parasitisme; burung–lembu ialah mutualisme",
      "Kutu–lembu ialah mutualisme; burung–lembu ialah parasitisme",
      "Kutu–lembu ialah komensalisme; burung–lembu ialah mangsa-pemangsa",
      "Kedua-duanya ialah interaksi komensalisme"
    ],
    "correctIndex": 0,
    "explanation": "Kutu merugikan lembu (parasitisme), manakala burung mendapat makanan sementara lembu bebas daripada kutu (mutualisme).",
    "ref": "Unit 4, m/s 56-57"
  },
  {
    "id": "d6_sci_u4_s2_09",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Seekor umang-umang meletakkan buran di atas cangkerangnya untuk menyamar daripada pemangsa, manakala buran memperoleh sisa makanan dan dibawa bergerak ke kawasan baharu. Apakah perbezaan hubungan ini berbanding teritip di atas cangkerang ketam?",
    "options": [
      "Umang-umang dengan buran ialah parasitisme kerana buran terlalu berat untuk cangkerang",
      "Kedua-dua pasangan tidak melibatkan sebarang perkaitan makanan atau perlindungan",
      "Teritip–ketam ialah mutualisme kerana ketam mendapat perlindungan daripada teritip",
      "Umang-umang dengan buran ialah mutualisme kerana kedua-duanya beroleh manfaat, berbanding teritip–ketam yang bersifat komensalisme"
    ],
    "correctIndex": 3,
    "explanation": "Jika kedua-dua pihak mendapat faedah (perlindungan dan makanan/pengangkutan), ia mutualisme; teritip hanya menguntungkan teritip tanpa memberi faedah kepada ketam (komensalisme).",
    "ref": "Unit 4, m/s 56-57"
  },
  {
    "id": "d6_sci_u4_s2_10",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Mengapakah kebanyakan parasit seperti sengkenit atau cacing pita tidak membunuh perumahnya dengan serta-merta?",
    "options": [
      "Kerana perumah juga membekalkan pengangkutan ke laut dalam",
      "Kerana parasit mempunyai klorofil untuk menghasilkan makanan sendiri jika perumah mati",
      "Kerana parasit bergantung hidup kepada nutrien atau darah daripada perumah yang masih hidup",
      "Kerana kematian perumah akan menukarkan parasitisme kepada mutualisme"
    ],
    "correctIndex": 2,
    "explanation": "Parasit memerlukan perumah yang terus hidup sebagai sumber nutrien atau tempat tinggal berterusan.",
    "ref": "Unit 4, m/s 56-57"
  },
  {
    "id": "d6_sci_u4_s3_01",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Apakah empat faktor yang menyebabkan persaingan antara tumbuhan?",
    "options": [
      "Air, makanan, pasangan dan kawasan",
      "Pasangan, cahaya matahari, udara dan tanah",
      "Air, cahaya matahari, nutrien dan ruang",
      "Oksigen, suhu, ruang dan angin"
    ],
    "correctIndex": 2,
    "explanation": "Tumbuhan bersaing untuk mendapatkan keperluan asas yang terhad iaitu air, cahaya matahari, nutrien dan ruang.",
    "ref": "Unit 4, m/s 59-61, 65"
  },
  {
    "id": "d6_sci_u4_s3_02",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Dua jenis interaksi simbiosis antara tumbuhan yang dipelajari dalam Sains Tahun 6 ialah _____.",
    "options": [
      "mutualisme dan mangsa-pemangsa",
      "komensalisme dan parasitisme",
      "intraspesies dan interspesies",
      "komensalisme dan mutualisme"
    ],
    "correctIndex": 1,
    "explanation": "Interaksi simbiosis antara tumbuhan dalam buku teks terdiri daripada dua jenis iaitu komensalisme dan parasitisme.",
    "ref": "Unit 4, m/s 62, 65"
  },
  {
    "id": "d6_sci_u4_s3_03",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Pokok orkid dan pokok langsuyar hidup menumpang di atas batang pokok besar untuk mendapatkan sokongan dan cahaya matahari tanpa menjejaskan pokok perumah. Apakah jenis simbiosis ini?",
    "options": [
      "Komensalisme",
      "Parasitisme",
      "Persaingan ruang",
      "Mangsa-pemangsa"
    ],
    "correctIndex": 0,
    "explanation": "Pokok orkid dan langsuyar mendapat manfaat (sokongan dan cahaya) manakala pokok perumah tidak rugi atau untung (komensalisme).",
    "ref": "Unit 4, m/s 62"
  },
  {
    "id": "d6_sci_u4_s3_04",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Mengapakah bunga pakma dikelaskan sebagai parasit kepada pokok perumahnya?",
    "options": [
      "Kerana ia menghalang serangga pemangsa daripada menghinggapi perumah",
      "Kerana akarnya hanya menumpang di kulit luar pokok tanpa menyerap apa-apa",
      "Kerana ia membekalkan baja organik kepada pokok perumah",
      "Kerana ia tidak dapat berfotosintesis lalu menyerap air dan nutrien daripada pokok perumah"
    ],
    "correctIndex": 3,
    "explanation": "Bunga pakma dan pokok dedalu menyerap air serta nutrien daripada pokok perumah lalu merugikan perumah tersebut.",
    "ref": "Unit 4, m/s 62-63"
  },
  {
    "id": "d6_sci_u4_s3_05",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Di ladang kelapa sawit, petani memelihara burung hantu untuk membendung masalah serangan tikus. Apakah kepentingan interaksi hidupan yang dimanfaatkan?",
    "options": [
      "Menambahkan kadar pencemaran bahan toksik di ladang",
      "Menggalakkan persaingan tumbuhan mendapatkan cahaya",
      "Menukarkan interaksi mangsa-pemangsa kepada parasitisme",
      "Mengawal populasi haiwan perosak secara semula jadi dalam ekosistem"
    ],
    "correctIndex": 3,
    "explanation": "Kehadiran burung hantu sebagai pemangsa mengawal populasi tikus di ladang kelapa sawit bagi mengekalkan keseimbangan alam.",
    "ref": "Unit 4, m/s 63"
  },
  {
    "id": "d6_sci_u4_s3_06",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Lima belas biji benih kacang hijau ditanam di dalam pasu A dan tiga biji ditanam di dalam pasu B yang sama saiz. Kedua-dua pasu ditutup kotak yang ditebuk lubang kecil di bahagian atas. Apakah pemerhatian selepas tiga minggu?",
    "options": [
      "Akar pokok dalam pasu A tumbuh lebih besar tanpa persaingan",
      "Pokok dalam pasu B tumbuh lebih tinggi kerana terlalu banyak air",
      "Pokok dalam pasu A tumbuh lebih tinggi daripada pasu B kerana bersaing merebut cahaya matahari",
      "Pokok dalam kedua-dua pasu terbantut pada ketinggian yang tepat sama"
    ],
    "correctIndex": 2,
    "explanation": "Pokok yang ditanam rapat dalam pasu A tumbuh lebih tinggi dan kurus untuk bersaing mendapatkan cahaya matahari yang terhad.",
    "ref": "Unit 4, m/s 60-61"
  },
  {
    "id": "d6_sci_u4_s3_07",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Dalam penyiasatan persaingan tumbuhan, akar anak pokok di dalam pasu yang mempunyai 3 biji benih didapati lebih sihat berbanding pasu yang mempunyai 10 biji benih walaupun disiram jumlah air yang sama. Apakah faktor persaingan tersebut?",
    "options": [
      "Cahaya matahari",
      "Air",
      "Keasidan tanah",
      "Suhu persekitaran"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan yang kurang sesak mendapat bekalan air yang lebih mencukupi untuk pertumbuhan akar yang sihat.",
    "ref": "Unit 4, m/s 60-61"
  },
  {
    "id": "d6_sci_u4_s3_08",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Seorang tukang kebun mendapati sebatang dahan pokok mangganya semakin layu dan bahagian batangnya mati akibat dililit oleh pokok dedalu. Mengapakah hal ini terjadi?",
    "options": [
      "Pokok dedalu menyerap air dan nutrien secara langsung daripada batang pokok mangga",
      "Pokok dedalu sekadar menumpang seperti orkid tanpa mengganggu batang mangga",
      "Pokok mangga bersaing secara intraspesies dengan pokok dedalu",
      "Pokok dedalu memberi manfaat kepada pokok mangga dengan membekalkan cahaya"
    ],
    "correctIndex": 0,
    "explanation": "Pokok dedalu ialah parasit tumbuhan yang menyerap air dan nutrien daripada batang perumah sehingga boleh mematikan bahagian batang tersebut.",
    "ref": "Unit 4, m/s 63"
  },
  {
    "id": "d6_sci_u4_s3_09",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "H",
    "q": "Bagaimanakah persaingan antara pokok di dalam hutan hujan tropika membantu mengekalkan sumber semula jadi jangka panjang?",
    "options": [
      "Hanya tumbuhan yang kuat dan mandiri berjaya terus hidup lalu menghasilkan baka anak yang berkualiti",
      "Semua pokok yang lemah terus berkembang biak dengan banyak",
      "Persaingan menghentikan pertumbuhan semua tumbuhan baharu di lantai hutan",
      "Persaingan menyebabkan semua tumbuhan berubah menjadi tumbuhan parasit"
    ],
    "correctIndex": 0,
    "explanation": "Persaingan memastikan tumbuhan yang lebih mandiri terus hidup dan membiak menghasilkan baka yang berkualiti, mengekalkan sumber semula jadi.",
    "ref": "Unit 4, m/s 64-65"
  },
  {
    "id": "d6_sci_u4_s3_10",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "H",
    "q": "Aina membandingkan bekas A (15 anak benih kacang hijau, tanpa baja) dengan bekas B (15 anak benih kacang hijau, ditabur baja secara sekata), kedua-duanya disiram air sama banyak di kawasan lapang. Selepas tiga minggu, daun pokok dalam bekas B lebih hijau dan subur. Jika seorang rakan mendakwa pertumbuhan berbeza disebabkan oleh cahaya matahari, mengapakah dakwaan itu salah?",
    "options": [
      "Kerana ruang pasu B lebih kecil berbanding pasu A",
      "Kerana tumbuhan tidak memerlukan cahaya matahari selepas ditanam melebihi seminggu",
      "Kerana baja menghalang penyerapan cahaya matahari oleh anak pokok",
      "Kerana kedua-dua bekas mempunyai jarak tanaman sama dan diletakkan di tempat lapang yang sama, hanya penambahan baja (nutrien) dibezakan"
    ],
    "correctIndex": 3,
    "explanation": "Bilangan benih, jarak, jumlah air dan cahaya dimalarkan; hanya kehadiran baja (nutrien) yang dimanipulasikan dalam bekas B.",
    "ref": "Unit 4, m/s 61"
  },
  {
    "id": "d6_sci_u5_s1_01",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan istilah 'pupus' bagi sesuatu spesies haiwan?",
    "options": [
      "Bilangan haiwan tersebut berkurangan buat sementara waktu pada musim sejuk",
      "Haiwan tersebut dipindahkan ke taman negara atau hutan simpan",
      "Haiwan tersebut telah lenyap sama sekali dari muka bumi",
      "Haiwan tersebut berhijrah ke lautan yang lebih dalam"
    ],
    "correctIndex": 2,
    "explanation": "Pupus bermaksud sesuatu spesies haiwan atau hidupan telah lenyap sama sekali dari muka bumi dan tidak wujud lagi.",
    "ref": "Unit 5, m/s 68"
  },
  {
    "id": "d6_sci_u5_s1_02",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Antara haiwan berikut, kumpulan manakah yang KESEMUANYA telah pupus?",
    "options": [
      "Tapir Malaya, burung kenyalang dan dugong",
      "Burung Dodo, mamot dan serigala Tasmania",
      "Quagga, orang utan dan badak sumbu",
      "Harimau Malaya, gajah dan harimau bertaring lengkung"
    ],
    "correctIndex": 1,
    "explanation": "Burung Dodo, mamot, serigala Tasmania, dinosaur, Quagga dan harimau bertaring lengkung ialah haiwan yang telah pupus.",
    "ref": "Unit 5, m/s 68-69, 85"
  },
  {
    "id": "d6_sci_u5_s1_03",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Manakah antara tumbuhan di Malaysia berikut sedang diancam kepupusan?",
    "options": [
      "Rumput lalang dan pokok keladi",
      "Bunga pakma, periuk kera dan orkid selipar",
      "Pokok jagung dan pokok kacang hijau",
      "Pokok pisang dan pokok kelapa sawit"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan terancam termasuk bunga pakma, periuk kera, orkid selipar, pokok tongkat ali, meranti, keruing dan cengal.",
    "ref": "Unit 5, m/s 70-71, 85"
  },
  {
    "id": "d6_sci_u5_s1_04",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah haiwan pupus yang separuh badannya menyerupai kuda manakala separuh lagi menyerupai kuda belang?",
    "options": [
      "Quagga",
      "Tapir Malaya",
      "Serigala Tasmania",
      "Mamot"
    ],
    "correctIndex": 0,
    "explanation": "Quagga mempunyai bahagian badan separa kuda dan separa kuda belang sebelum pupus akibat diburu kulit dan dagingnya.",
    "ref": "Unit 5, m/s 69"
  },
  {
    "id": "d6_sci_u5_s1_05",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Aktiviti pembinaan jalan raya, bandar baharu secara tidak terancang dan pembakaran hutan menimbulkan ancaman utama yang dikenali sebagai _____.",
    "options": [
      "pemanasan global",
      "pemuliharaan semula jadi",
      "bencana alam",
      "pemusnahan habitat"
    ],
    "correctIndex": 3,
    "explanation": "Penerokaan tidak terancang dan pembakaran hutan memusnahkan habitat semula jadi haiwan serta tumbuhan.",
    "ref": "Unit 5, m/s 72"
  },
  {
    "id": "d6_sci_u5_s1_06",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Bagaimanakah pembebasan gas karbon dioksida secara berlebihan daripada kilang dan kenderaan boleh mengancam hidupan di kawasan pantai?",
    "options": [
      "Gas karbon dioksida menukarkan air laut menjadi terlalu masin",
      "Asap kilang menyebabkan haiwan di pantai tidak dapat melihat makanan",
      "Pemanasan global mencairkan ais kutub lalu meningkatkan paras air laut yang menenggelamkan habitat pantai",
      "Lapisan haba di atmosfera membekukan air laut sepanjang tahun"
    ],
    "correctIndex": 2,
    "explanation": "Pemanasan global akibat gas perangkap haba menaikkan suhu bumi, mencairkan ais kutub dan menaikkan paras laut sehingga habitat pantai tenggelam.",
    "ref": "Unit 5, m/s 74"
  },
  {
    "id": "d6_sci_u5_s1_07",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Padankan haiwan atau tumbuhan terancam dengan punca pemburuan haram terhadapnya:\n1. Tenggiling\n2. Gajah\n3. Bunga pakma",
    "options": [
      "1: perhiasan mewah; 2: ubat tradisional; 3: makanan eksotik",
      "1: pakaian kulit; 2: baja organik; 3: bahan binaan rumah",
      "1: makanan; 2: gading dijadikan perhiasan mewah; 3: ubat tradisional",
      "1: ubat tradisional; 2: makanan; 3: perhiasan mewah"
    ],
    "correctIndex": 2,
    "explanation": "Tenggiling diburu untuk dijadikan makanan, gajah untuk gadingnya sebagai perhiasan mewah, dan bunga pakma dijual untuk ubat tradisional.",
    "ref": "Unit 5, m/s 72"
  },
  {
    "id": "d6_sci_u5_s1_08",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Mengapakah haiwan yang bersaiz besar seperti gajah dan harimau Malaya lebih berisiko diancam kepupusan berbanding haiwan bersaiz kecil?",
    "options": [
      "Kerana haiwan besar tidak boleh membiak pada musim hujan",
      "Kerana haiwan bersaiz besar memerlukan kawasan habitat dan sumber makanan yang luas untuk terus hidup",
      "Kerana haiwan bersaiz besar tidak pandai berinteraksi dengan hidupan lain",
      "Kerana haiwan kecil kebal terhadap tumpahan minyak dan sisa toksik"
    ],
    "correctIndex": 1,
    "explanation": "Haiwan besar memerlukan saiz habitat yang luas; apabila hutan diteroka, haiwan ini paling terjejas berbanding haiwan kecil.",
    "ref": "Unit 5, m/s 71, 224"
  },
  {
    "id": "d6_sci_u5_s1_09",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Dalam sebuah carta pengelasan burung: Burung X berada di cabang 'Pupus' manakala Burung Y berada di cabang 'Terancam'. Seorang pelajar mencadangkan membina pusat penetasan untuk memulihara Burung X dan Burung Y. Apakah kesilapan dalam cadangan pelajar itu?",
    "options": [
      "Burung X (seperti Burung Dodo) tidak boleh dipulihara lagi kerana spesiesnya telah pupus dan tiada lagi individu hidup",
      "Burung Y tidak memerlukan pusat pemuliharaan kerana ia sudah hampir pupus",
      "Kedua-dua burung sebenarnya boleh dipulihara dengan mewartakan hutan simpan",
      "Pusat penetasan hanya sesuai untuk haiwan zaman ais seperti mamot"
    ],
    "correctIndex": 0,
    "explanation": "Spesies yang telah pupus seperti burung Dodo lenyap sepenuhnya dari bumi dan mustahil dibiakkan semula di pusat pemuliharaan.",
    "ref": "Unit 5, m/s 68, 86, 224"
  },
  {
    "id": "d6_sci_u5_s1_10",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Burung Dodo dari Pulau Mauritius tidak boleh terbang dan bersarang di atas tanah. Selain diburu oleh pelayar manusia, faktor manakah yang mempercepat kepupusan burung ini?",
    "options": [
      "Peningkatan paras air laut akibat kilang perindustrian moden",
      "Pertandingan merebut pasangan dengan burung kenyalang",
      "Kemunculan pokok dedalu yang menyerap air di pulau tersebut",
      "Telurnya yang terdedah di tanah dimakan oleh haiwan seperti tikus dan kucing yang dibawa masuk"
    ],
    "correctIndex": 3,
    "explanation": "Di Pulau Mauritius, burung Dodo yang tidak pandai terbang diburu oleh pelayar manakala telurnya dimakan oleh tikus dan kucing.",
    "ref": "Unit 5, m/s 68"
  },
  {
    "id": "d6_sci_u5_s2_01",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah maksud pemeliharaan haiwan dan tumbuhan?",
    "options": [
      "Menangkap haiwan liar untuk dipelihara di rumah",
      "Menebang semua pokok tua di hutan simpan",
      "Mengembalikan haiwan yang cedera dari bandar ke kawasan hutan",
      "Langkah mengekalkan haiwan dan tumbuhan kepada keadaan asal yang seimbang"
    ],
    "correctIndex": 3,
    "explanation": "Pemeliharaan ialah langkah mengekalkan haiwan dan tumbuhan pada keadaan asal yang seimbang sebelum rosak.",
    "ref": "Unit 5, m/s 75, 224"
  },
  {
    "id": "d6_sci_u5_s2_02",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Antara aktiviti berikut, manakah yang merupakan langkah PEMULIHARAAN?",
    "options": [
      "Memboikot pembelian produk daripada spesies terancam",
      "Menguatkuasakan undang-undang hidupan liar",
      "Membina pusat rehabilitasi orang utan dan menanam semula pokok di kawasan dibalak",
      "Mengadakan kempen kesedaran Hari Hidupan Liar Sedunia"
    ],
    "correctIndex": 2,
    "explanation": "Pemuliharaan (mengembalikan kepada keadaan asal) merangkumi pembinaan pusat pemuliharaan/rehabilitasi dan penanaman semula pokok.",
    "ref": "Unit 5, m/s 78-79, 85"
  },
  {
    "id": "d6_sci_u5_s2_03",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah tujuan menjalankan pembalakan secara terpilih di kawasan hutan?",
    "options": [
      "Supaya semua anak pokok turut ditebang sekali gus",
      "Hanya pokok matang yang sesuai ditebang sementara pokok belum matang dibiarkan membesar untuk melindungi habitat",
      "Mengubah kawasan hutan menjadi tapak perindustrian",
      "Memudahkan pemburu haram mengesan haiwan liar"
    ],
    "correctIndex": 1,
    "explanation": "Pembalakan terpilih hanya menebang pokok yang sesuai dan membiarkan pokok belum matang membesar bagi mengurangkan impak kepada alam sekitar.",
    "ref": "Unit 5, m/s 75"
  },
  {
    "id": "d6_sci_u5_s2_04",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Tasik Bera di Pahang ialah kawasan tanah lembap pertama di Malaysia yang diwartakan sebagai _____.",
    "options": [
      "Tapak RAMSAR",
      "Taman Marin",
      "Pusat Rehabilitasi Penyu",
      "Ladang Pembalakan Terpilih"
    ],
    "correctIndex": 0,
    "explanation": "Tasik Bera merupakan Tapak RAMSAR (tanah lembap yang dilindungi) pertama di Malaysia.",
    "ref": "Unit 5, m/s 77"
  },
  {
    "id": "d6_sci_u5_s2_05",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Bagaimanakah amalan mengurangkan penggunaan kertas dan mengitar semula kertas membantu memelihara hutan?",
    "options": [
      "Mengurangkan aktiviti penebangan pokok sebagai bahan mentah kertas",
      "Menjadikan pokok kayu cengal tumbuh dua kali lebih tinggi",
      "Menukarkan kertas lama menjadi baja toksik",
      "Menambahkan permintaan terhadap produk kulit haiwan"
    ],
    "correctIndex": 0,
    "explanation": "Mengurangkan dan mengitar semula kertas mengurangkan kebergantungan kepada pokok baharu, sekali gus mengurangkan penebangan hutan.",
    "ref": "Unit 5, m/s 77, 80"
  },
  {
    "id": "d6_sci_u5_s2_06",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Mengapakah pusat pemuliharaan penyu ditubuhkan di kawasan pantai pendaratan penyu?",
    "options": [
      "Untuk menjual telur penyu kepada pelancong asing",
      "Untuk melatih penyu mencari makanan di kolam air tawar",
      "Untuk memastikan penyu kekal di daratan sepanjang hayatnya",
      "Untuk memantau penyu bertelur, melindungi daripada gangguan dan meningkatkan kadar anak penyu yang menetas dilepaskan ke laut"
    ],
    "correctIndex": 3,
    "explanation": "Pusat pemuliharaan penyu melindungi penyu betina dan telurnya supaya lebih banyak anak penyu menetas dengan selamat dan dilepaskan ke laut.",
    "ref": "Unit 5, m/s 78"
  },
  {
    "id": "d6_sci_u5_s2_07",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Apakah tujuan anak-anak orang utan yang terpisah daripada ibunya ditempatkan di pusat rehabilitasi orang utan terlebih dahulu sebelum dihantar ke hutan?",
    "options": [
      "Kerana orang utan tidak dapat membiak di kawasan hutan simpan",
      "Supaya orang utan boleh dijadikan haiwan peliharaan di rumah",
      "Supaya anak orang utan dapat dilatih memanjat dan mencari makanan agar mampu hidup di habitat hutan sebenar",
      "Untuk menukarkan diet orang utan daripada buah-buahan kepada daging"
    ],
    "correctIndex": 2,
    "explanation": "Anak orang utan dilatih di pusat rehabilitasi supaya berdikari dan mampu meneruskan hidup apabila dilepaskan semula ke hutan sebenar.",
    "ref": "Unit 5, m/s 78"
  },
  {
    "id": "d6_sci_u5_s2_08",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Berdasarkan fakta Sains Info dalam Unit 5, pengeluar gas oksigen terbesar di dunia bukanlah pokok di hutan darat, sebaliknya ialah _____.",
    "options": [
      "pokok paku pakis di gua batu kapur",
      "alga yang tumbuh di laut dalam",
      "bakteria di dalam loji kumbahan",
      "pokok bakau di muara sungai"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuh-tumbuhan membekalkan sebahagian kecil oksigen sahaja; pengeluar oksigen terbesar di dunia ialah alga di laut.",
    "ref": "Unit 5, m/s 81"
  },
  {
    "id": "d6_sci_u5_s2_09",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Bilangan gajah di Hutan X merosot daripada 55 ekor pada tahun 2015 kepada 15 ekor pada tahun 2017, tetapi meningkat semula kepada 45 ekor pada tahun 2019. Apakah penjelasan paling logik bagi pemulihan populasi dari 2017 ke 2019?",
    "options": [
      "Berlaku bencana tanah runtuh di dalam Hutan X pada tahun 2018",
      "Hutan X telah diwartakan sebagai kawasan dilindungi serta usaha pemeliharaan dan pemuliharaan berjaya dilaksanakan",
      "Pemburu haram menambah aktiviti menangkap gajah untuk mendapatkan gading",
      "Semua gajah tersebut ialah spesies pupus yang dicipta semula di makmal"
    ],
    "correctIndex": 1,
    "explanation": "Peningkatan semula populasi gajah mencerminkan kejayaan langkah pemeliharaan dan pemuliharaan seperti penguatkuasaan undang-undang dan pewartaan hutan simpan.",
    "ref": "Unit 5, m/s 86, 224"
  },
  {
    "id": "d6_sci_u5_s2_10",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Sebagai pengguna di sebuah kedai ubat tradisional, seorang pelancong ditawarkan produk diperbuat daripada sisik tenggiling dan kelopak bunga pakma. Apakah tindakan terbaik dan sebabnya yang berlandaskan pemeliharaan alam?",
    "options": [
      "Memboikot dan menolak pembelian produk spesies terancam untuk menghentikan permintaan pemburuan haram",
      "Membeli sedikit sahaja supaya peniaga tidak rugi",
      "Membeli produk tersebut lalu menanam sisiknya di hutan simpan",
      "Menyuruh peniaga menjualnya secara dalam talian sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Memboikot penjualan produk daripada spesies terancam ialah langkah pemeliharaan penting bagi menghapuskan eksploitasi dan pemburuan haram.",
    "ref": "Unit 5, m/s 76, 79"
  },
  {
    "id": "d6_sci_u6_s1_01",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan daya?",
    "options": [
      "Jumlah jisim yang dimiliki oleh suatu objek pegun",
      "Lapisan udara yang menyelimuti permukaan Bumi",
      "Ukuran kepantasan pergerakan objek dalam satu saat",
      "Tarikan atau tolakan yang bertindak ke atas sesuatu objek"
    ],
    "correctIndex": 3,
    "explanation": "Daya ialah tarikan atau tolakan yang bertindak ke atas sesuatu objek.",
    "ref": "Unit 6, m/s 88, 110"
  },
  {
    "id": "d6_sci_u6_s1_02",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Antara aktiviti berikut, yang manakah melibatkan DAYA TOLAKAN?",
    "options": [
      "Menarik zip bekas pensel untuk membukanya",
      "Membuka penutup komputer riba ke arah kita",
      "Menekan butang papan kekunci komputer",
      "Menarik tali layang-layang ke bawah"
    ],
    "correctIndex": 2,
    "explanation": "Daya tolakan menggerakkan objek menjauhi kita, seperti menekan papan kekunci atau menekan pengepit kertas.",
    "ref": "Unit 6, m/s 88"
  },
  {
    "id": "d6_sci_u6_s1_03",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Seorang murid menekan tiub ubat gigi dan menguli ketulan tanah liat menjadi bentuk pasu. Kesan daya manakah yang ditunjukkan?",
    "options": [
      "Daya menghentikan objek yang bergerak",
      "Daya mengubah arah gerakan objek",
      "Daya mengubah bentuk objek",
      "Daya menggerakkan objek pegun"
    ],
    "correctIndex": 2,
    "explanation": "Tiub ubat gigi dan tanah liat berubah bentuk apabila daya dikenakan ke atasnya.",
    "ref": "Unit 6, m/s 90"
  },
  {
    "id": "d6_sci_u6_s1_04",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Penjaga gol menampan bola sepak yang menuju tepat ke arah gawang sehingga bola itu terhenti di tangannya. Apakah kesan daya tersebut?",
    "options": [
      "Daya mengubah bentuk bola menjadi leper kekal",
      "Daya menghentikan objek yang bergerak",
      "Daya menambahkan kelajuan bola",
      "Daya menggerakkan objek pegun"
    ],
    "correctIndex": 1,
    "explanation": "Menahan bola daripada memasuki gawang ialah contoh kesan daya menghentikan objek yang sedang bergerak.",
    "ref": "Unit 6, m/s 91"
  },
  {
    "id": "d6_sci_u6_s1_05",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah jenis daya bagi daya graviti Bumi yang menyebabkan bola yang dilontarkan ke atas jatuh semula ke tanah?",
    "options": [
      "Daya tarikan",
      "Daya tolakan",
      "Daya geseran",
      "Daya elastik"
    ],
    "correctIndex": 0,
    "explanation": "Daya graviti Bumi ialah daya tarikan yang menarik semua objek ke arah pusat Bumi tanpa perlu bersentuhan.",
    "ref": "Unit 6, m/s 89, 224"
  },
  {
    "id": "d6_sci_u6_s1_06",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Zaki mendekatkan dua batang magnet bar yang mempunyai kutub yang sama (Utara dengan Utara) dan mendapati kedua-duanya saling menjauhi. Apakah jenis daya yang bertindak?",
    "options": [
      "Daya tarikan bersentuhan",
      "Daya tarikan graviti sahaja",
      "Daya geseran udara di dalam bilik",
      "Daya tolakan tanpa sentuhan antara kutub magnet yang sama"
    ],
    "correctIndex": 3,
    "explanation": "Dua kutub magnet yang sama saling menolak antara satu sama lain tanpa perlu bersentuhan secara fizikal.",
    "ref": "Unit 6, m/s 89"
  },
  {
    "id": "d6_sci_u6_s1_07",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Semasa perlawanan badminton, Faris memukul bulu tangkis yang datang ke arahnya supaya melantun semula ke gelanggang pihak lawan. Kesan daya yang paling ketara ialah _____.",
    "options": [
      "daya menggerakkan objek pegun",
      "daya menghasilkan tekanan udara rendah",
      "daya mengubah bahan binaan bulu tangkis",
      "daya mengubah arah gerakan objek"
    ],
    "correctIndex": 3,
    "explanation": "Memukul bulu tangkis mengubah arah pergerakan objek tersebut menuju ke arah lawan.",
    "ref": "Unit 6, m/s 90"
  },
  {
    "id": "d6_sci_u6_s1_08",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Apabila sebatang sikat plastik digosok dengan kain kering, ia dapat menarik cebisan kertas kecil ke arahnya. Apakah daya yang menyebabkan tarikan tersebut?",
    "options": [
      "Tekanan atmosfera",
      "Daya geseran",
      "Daya elektrostatik",
      "Daya mampatan spring"
    ],
    "correctIndex": 2,
    "explanation": "Sikat plastik yang digosok kain menghasilkan cas lalu menarik cebisan kertas melalui daya elektrostatik.",
    "ref": "Unit 6, m/s 91"
  },
  {
    "id": "d6_sci_u6_s1_09",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Seorang pemain boling melontar bola boling ke arah pin boling yang tersusun diam, lalu pin-pin itu terjatuh. Di sebatang sungai pula, seorang pendayung kayak menghadapi ombak kuat dari arah hadapan sehingga kayaknya menjadi perlahan. Apakah perbandingan kesan daya dalam kedua-dua situasi ini?",
    "options": [
      "Bola boling mengubah bentuk pin; ombak menghentikan kayak pegun",
      "Bola boling menggerakkan objek pegun (pin); ombak mengubah kelajuan objek yang sedang bergerak (kayak)",
      "Kedua-duanya menunjukkan daya mengubah arah pergerakan sahaja",
      "Kedua-duanya melibatkan daya tarikan tanpa sentuhan"
    ],
    "correctIndex": 1,
    "explanation": "Bola boling menggerakkan pin yang pegun, manakala daya ombak mengubah (mengurangkan) kelajuan kayak yang sedang bergerak.",
    "ref": "Unit 6, m/s 91"
  },
  {
    "id": "d6_sci_u6_s1_10",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Chua memampatkan sebatang spring dengan kedua-dua tapak tangannya, kemudian meregangkan spring tersebut dengan menarik kedua-dua hujungnya. Mengapakah aktiviti terhadap spring itu menunjukkan peranan kedua-dua jenis daya?",
    "options": [
      "Memampatkan spring mengenakan daya tolakan ke dalam, manakala meregangkan spring mengenakan daya tarikan ke luar",
      "Memampatkan spring mengenakan daya tarikan, manakala meregangkan spring mengenakan daya geseran",
      "Spring hanya bertindak balas terhadap daya magnet dan elektrostatik",
      "Bentuk spring tidak berubah apabila dimampatkan atau diregangkan"
    ],
    "correctIndex": 0,
    "explanation": "Mampatan menggunakan daya tolakan untuk memendekkan spring manakala regangan menggunakan daya tarikan untuk memanjangkan spring.",
    "ref": "Unit 6, m/s 89"
  },
  {
    "id": "d6_sci_u6_s2_01",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan daya geseran?",
    "options": [
      "Daya yang terhasil apabila dua permukaan bersentuhan antara satu sama lain",
      "Daya yang menarik semua objek ke arah pusat Bumi",
      "Daya tolakan yang dihasilkan oleh bateri kereta mainan",
      "Daya yang hanya wujud di dalam angkasa lepas"
    ],
    "correctIndex": 0,
    "explanation": "Daya geseran terhasil apabila dua permukaan objek bersentuhan antara satu sama lain.",
    "ref": "Unit 6, m/s 93, 110"
  },
  {
    "id": "d6_sci_u6_s2_02",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Jika sebuah skuter sedang bergerak ke arah timur di atas jalan rata, ke arah manakah daya geseran bertindak?",
    "options": [
      "Ke arah timur (sama arah gerakan)",
      "Tiada arah tetap",
      "Ke arah atas menjauhi permukaan jalan",
      "Ke arah barat (bertentangan dengan arah pergerakan)"
    ],
    "correctIndex": 3,
    "explanation": "Daya geseran sentiasa bertindak pada arah yang bertentangan dengan arah pergerakan objek.",
    "ref": "Unit 6, m/s 93"
  },
  {
    "id": "d6_sci_u6_s2_03",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Manakah antara berikut merupakan kebaikan kesan daya geseran dalam kehidupan harian?",
    "options": [
      "Tapak kasut menjadi haus sehingga mudah tergelincir",
      "Enjin kereta mudah rosak selepas digunakan lama",
      "Pad brek basikal memperlahankan dan menghentikan basikal yang bergerak",
      "Skru berkarat sukar dilonggarkan dengan pemutar skru"
    ],
    "correctIndex": 2,
    "explanation": "Pad brek menghentikan basikal menggunakan geseran ialah kebaikan daya geseran.",
    "ref": "Unit 6, m/s 95-96"
  },
  {
    "id": "d6_sci_u6_s2_04",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Bagaimanakah batang mancis dapat menyala apabila digores pada sisi kotak mancis?",
    "options": [
      "Tekanan udara sejuk meniup keluar api dari dalam kotak",
      "Daya geseran menghasilkan haba yang menyalakan bahan mudah terbakar di hujung mancis",
      "Kesan magnet pada kotak mancis mencetuskan percikan",
      "Daya graviti menarik api ke hujung batang kayu"
    ],
    "correctIndex": 1,
    "explanation": "Geseran antara hujung mancis dan sisi kotak menghasilkan haba yang menyalakan bahan mudah terbakar pada batang mancis.",
    "ref": "Unit 6, m/s 95"
  },
  {
    "id": "d6_sci_u6_s2_05",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah keburukan daya geseran apabila seseorang menggosok atau menggerudi dinding konkrit secara berterusan?",
    "options": [
      "Dinding menjadi terlalu licin seperti kaca",
      "Bunyi yang kuat terhasil sehingga menyebabkan pencemaran bunyi",
      "Mata gerudi menjadi lebih tajam secara semula jadi",
      "Penutup botol menjadi mudah dibuka"
    ],
    "correctIndex": 1,
    "explanation": "Kerja menggerudi menghasilkan bunyi bising yang kuat sebagai salah satu kesan buruk geseran.",
    "ref": "Unit 6, m/s 96"
  },
  {
    "id": "d6_sci_u6_s2_06",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Mengapakah tayar kereta baharu mempunyai corak alur dan bunga yang dalam pada permukaannya?",
    "options": [
      "Untuk menambahkan cengkaman tayar kereta di atas permukaan jalan melalui daya geseran",
      "Untuk mengurangkan geseran supaya kereta meluncur di atas air hujan",
      "Untuk menjadikan tayar lebih ringan dan tahan karat",
      "Untuk mengurangkan bunyi enjin kereta semasa memandu"
    ],
    "correctIndex": 0,
    "explanation": "Corak pada bunga tayar menambah geseran dan cengkaman tayar di atas jalan, terutama semasa membrek atau hujan.",
    "ref": "Unit 6, m/s 95"
  },
  {
    "id": "d6_sci_u6_s2_07",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Dalam aktiviti papan nota berklip yang dicondongkan perlahan-lahan, pengasah pensel plastik mula menggelongsor pada sudut 18°, manakala pemadam getah hanya mula menggelongsor pada sudut 32°. Mengapakah pemadam memerlukan sudut kecondongan lebih tinggi?",
    "options": [
      "Sudut inklinometer tidak mengukur kecondongan permukaan",
      "Pemadam tidak mempunyai jisim yang ditarik oleh graviti",
      "Pengasah pensel mempunyai tapak getah yang lebih melekat",
      "Daya geseran antara pemadam dengan kertas lebih tinggi berbanding pengasah pensel"
    ],
    "correctIndex": 3,
    "explanation": "Permukaan getah pemadam menghasilkan daya geseran lebih besar terhadap kertas, memerlukan kecondongan lebih curam untuk mula menggelongsor.",
    "ref": "Unit 6, m/s 94"
  },
  {
    "id": "d6_sci_u6_s2_08",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Mengapakah seorang tukang kayu menggosok permukaan papan kayu yang kasar menggunakan kertas pasir sebelum mengecatnya?",
    "options": [
      "Untuk menambahkan haba sehingga kayu terbakar sedikit",
      "Untuk menambahkan jisim papan kayu tersebut",
      "Untuk memanfaatkan daya geseran bagi melicinkan permukaan kayu yang kasar",
      "Untuk mengurangkan tekanan udara di dalam bengkel"
    ],
    "correctIndex": 2,
    "explanation": "Kertas pasir menggunakan daya geseran secara berfaedah untuk mengikis dan melicinkan permukaan kayu yang kasar.",
    "ref": "Unit 6, m/s 95"
  },
  {
    "id": "d6_sci_u6_s2_09",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Pada musim sejuk, Ali menggosok kedua-dua tapak tangannya dengan laju untuk memanaskan badan. Manakala pada kereta keluarganya, mekanik menasihati supaya menukar minyak enjin secara berkala. Bagaimanakah peranan geseran berbeza dalam kedua-dua situasi ini?",
    "options": [
      "Kedua-duanya menunjukkan kesan buruk geseran yang menghasilkan pencemaran bunyi",
      "Pada tapak tangan, geseran merosakkan kulit; dalam enjin, geseran diperlukan untuk menghentikan omboh",
      "Pada tapak tangan, haba daripada geseran dimanfaatkan; dalam enjin, geseran berulang membawa kerosakan dan perlu dikurangkan",
      "Haba hanya terhasil dalam enjin dan tidak terhasil pada kulit tangan"
    ],
    "correctIndex": 2,
    "explanation": "Geseran menghasilkan haba yang berguna ketika menggosok tangan, tetapi geseran berulang dalam enjin menyebabkan kehausan dan kerosakan komponen.",
    "ref": "Unit 6, m/s 95-96, 112"
  },
  {
    "id": "d6_sci_u6_s2_10",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Jika daya geseran dihapuskan sama sekali di permukaan lantai kelas, apakah kesan paling tepat yang akan berlaku kepada seseorang murid yang cuba berjalan?",
    "options": [
      "Murid itu dapat berlari dua kali lebih pantas serta berhenti bila-bila masa",
      "Tapak kasut tidak dapat mencengkam lantai menyebabkan murid sukar melangkah atau mudah tergelincir jatuh",
      "Jisim badan murid bertambah secara mendadak",
      "Murid akan terapung ke udara kerana ketiadaan graviti"
    ],
    "correctIndex": 1,
    "explanation": "Tanpa geseran antara tapak kasut dengan lantai, tiada cengkaman untuk menolak kaki ke hadapan atau menahan kaki daripada tergelincir.",
    "ref": "Unit 6, m/s 95-96"
  },
  {
    "id": "d6_sci_u6_s3_01",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Apakah dua faktor utama yang mempengaruhi daya geseran mengikut silibus Sains Tahun 6?",
    "options": [
      "Jisim objek dan jenis permukaan",
      "Warna objek dan suhu bilik",
      "Bentuk objek dan kelajuan angin",
      "Isi padu objek dan ketinggian tempat"
    ],
    "correctIndex": 0,
    "explanation": "Dua faktor yang mempengaruhi daya geseran ialah jisim objek dan jenis permukaan sentuhan.",
    "ref": "Unit 6, m/s 97-98, 110"
  },
  {
    "id": "d6_sci_u6_s3_02",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Apabila jisim sesebuah kotak yang ditarik di atas lantai ditambah dengan meletakkan beberapa buah buku teks di atasnya, apakah yang berlaku kepada daya geseran?",
    "options": [
      "Daya geseran semakin berkurang",
      "Daya geseran bertindak sama arah dengan tarikan",
      "Daya geseran kekal sifar",
      "Daya geseran semakin bertambah"
    ],
    "correctIndex": 3,
    "explanation": "Semakin bertambah jisim objek, semakin bertambah daya geseran yang terhasil.",
    "ref": "Unit 6, m/s 97, 224"
  },
  {
    "id": "d6_sci_u6_s3_03",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Sebiji sel kering dilepaskan menuruni landasan condong yang sama. Di atas permukaan manakah sel kering akan bergerak paling jauh?",
    "options": [
      "Kertas pasir kasar",
      "Permaidani tebal",
      "Kain tuala berbulu",
      "Permukaan plastik atau kaca licin"
    ],
    "correctIndex": 3,
    "explanation": "Permukaan licin menghasilkan daya geseran paling kecil, membolehkan sel kering bergerak lebih jauh berbanding permukaan kasar.",
    "ref": "Unit 6, m/s 98"
  },
  {
    "id": "d6_sci_u6_s3_04",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Bagaimanakah cara mengurangkan daya geseran pada papan karom supaya buah karom mudah meluncur?",
    "options": [
      "Mengalas papan dengan kertas pasir",
      "Menyiram air sabun ke atas papan karom",
      "Menaburkan bedak atau tepung di atas permukaan papan karom",
      "Melekatkan kain kasar pada setiap buah karom"
    ],
    "correctIndex": 2,
    "explanation": "Menaburkan bedak atau tepung melicinkan permukaan papan karom dan mengurangkan daya geseran.",
    "ref": "Unit 6, m/s 99, 110"
  },
  {
    "id": "d6_sci_u6_s3_05",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Ayah mendapati penutup kaca sebuah balang jem terlalu ketat dan tangannya asyik terlepas. Apakah cara yang betul untuk menambahkan geseran supaya penutup mudah dipulas?",
    "options": [
      "Menyapu minyak gris pada penutup balang",
      "Menggunakan sehelai kain kering untuk membalut dan memulas penutup",
      "Menaburkan bedak pada tapak tangan",
      "Merendam tangan dalam minyak masak"
    ],
    "correctIndex": 1,
    "explanation": "Menggunakan kain menambah daya geseran dan cengkaman antara tangan dengan penutup balang.",
    "ref": "Unit 6, m/s 100, 110"
  },
  {
    "id": "d6_sci_u6_s3_06",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "Raju ingin memindahkan kotak berisi buku-buku berat di pusat sumber. Apakah alat yang sesuai untuk mengurangkan daya geseran antara kotak dengan lantai?",
    "options": [
      "Meletakkan kotak di atas troli yang beroda",
      "Mengalas lantai dengan tikar getah tebal",
      "Memakai sarung tangan bergetah tebal",
      "Menaburkan pasir halus di laluan kotak"
    ],
    "correctIndex": 0,
    "explanation": "Penggunaan troli beroda mengurangkan geseran antara kotak berat dengan lantai supaya lebih mudah ditolak atau ditarik.",
    "ref": "Unit 6, m/s 99, 110"
  },
  {
    "id": "d6_sci_u6_s3_07",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "Kotak P dan kotak Q mempunyai jisim yang sama. Kotak P ditolak sejauh 3 m di atas lantai simen kasar dalam masa 10 saat, manakala kotak Q mengambil 5 saat di atas jubin licin. Mengapakah kotak P lebih lambat?",
    "options": [
      "Kerana permukaan kasar menghasilkan daya geseran lebih tinggi terhadap kotak P berbanding permukaan licin pada kotak Q",
      "Kerana kotak P lebih berat berbanding kotak Q",
      "Kerana kotak Q bergerak menggunakan tekanan udara tinggi",
      "Kerana jarak laluan kotak P adalah dua kali lebih jauh"
    ],
    "correctIndex": 0,
    "explanation": "Jisim kedua-dua kotak adalah sama, jadi faktor yang membezakan masa gerakan ialah jenis permukaan sentuhan (kasar vs licin).",
    "ref": "Unit 6, m/s 111-112, 224"
  },
  {
    "id": "d6_sci_u6_s3_08",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "Pemegang raket badminton yang licin menyebabkan raket mudah tergelincir daripada genggaman pemain ketika berpeluh. Apakah tindakan paling berkesan untuk mengatasi masalah ini?",
    "options": [
      "Menyapu minyak pelincir pada pemegang raket",
      "Menggosok tapak tangan dengan bedak bayi sebelum memegang raket",
      "Menyimpan raket di dalam peti sejuk sebelum bermain",
      "Memasang pembalut cengkaman (grip) pada pemegang raket untuk menambah daya geseran"
    ],
    "correctIndex": 3,
    "explanation": "Memasang grip raket menambahkan daya geseran dan cengkaman tangan pada pemegang raket.",
    "ref": "Unit 6, m/s 100, 110"
  },
  {
    "id": "d6_sci_u6_s3_09",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "H",
    "q": "Dalam eksperimen takal dan pemberat 50 g, sebuah buku latihan mula bergerak di atas meja apabila 3 unit pemberat (150 g) digantung. Apabila senaskhah buku teks diletakkan di atas buku latihan itu, 7 unit pemberat (350 g) pula diperlukan. Apakah definisi secara operasi bagi daya geseran dalam eksperimen ini?",
    "options": [
      "Daya yang menentang gerakan apabila permukaan bersentuhan",
      "Ketebalan buku teks Sains yang digunakan",
      "Bilangan atau jumlah jisim pemberat 50 g yang diperlukan untuk mula menggerakkan buku di atas meja",
      "Ketinggian meja daripada lantai bilik sains"
    ],
    "correctIndex": 2,
    "explanation": "Definisi secara operasi merujuk perkara yang diperhatikan atau diukur dalam eksperimen, iaitu bilangan/jumlah pemberat yang diperlukan untuk memulakan gerakan buku.",
    "ref": "Unit 6, m/s 97"
  },
  {
    "id": "d6_sci_u6_s3_10",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "H",
    "q": "Kereta api Maglev menggunakan daya tarikan dan tolakan elektromagnet untuk terapung sedikit di atas landasan tanpa roda menyentuh rel. Bagaimanakah prinsip ini membolehkan Maglev bergerak amat pantas?",
    "options": [
      "Dengan menambahkan jisim keseluruhan kereta api di atas rel",
      "Dengan mengurangkan sentuhan permukaan sekali gus meminimumkan daya geseran yang menghalang gerakan",
      "Dengan menyapu minyak gris pada keseluruhan landasan sepanjang ratusan kilometer",
      "Dengan menggunakan kipas udara di dalam setiap gerabak"
    ],
    "correctIndex": 1,
    "explanation": "Pengapungan elektromagnet menghapuskan sentuhan langsung antara badan kereta api dan rel, sekali gus mengurangkan daya geseran dengan drastik.",
    "ref": "Unit 6, m/s 99"
  },
  {
    "id": "d6_sci_u6_s4_01",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "L",
    "q": "Bagaimanakah tekanan udara di dalam sebiji belon yang ditiup terhasil?",
    "options": [
      "Getah belon menarik zarah udara dari luar secara magnetik",
      "Zarah-zarah udara di dalam belon bergerak rawak dan berlanggar dengan permukaan dalam belon lalu mengenakan daya",
      "Zarah-zarah udara membeku dan menjadi keras di dinding belon",
      "Suhu bilik menukarkan getah belon menjadi gas"
    ],
    "correctIndex": 1,
    "explanation": "Tekanan udara terhasil apabila zarah-zarah udara yang bergerak secara rawak berlanggar dengan permukaan sesuatu objek dan mengenakan daya.",
    "ref": "Unit 6, m/s 101-102"
  },
  {
    "id": "d6_sci_u6_s4_02",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "L",
    "q": "Mengapakah pendaki di puncak Gunung Kinabalu mengalami tekanan udara yang lebih rendah berbanding di kaki gunung?",
    "options": [
      "Kerana semakin bertambah ketinggian dari aras laut, semakin berkurang bilangan zarah udara dan perlanggarannya",
      "Kerana graviti di puncak gunung menarik zarah udara ke angkasa",
      "Kerana pokok di puncak gunung menyerap semua tekanan udara",
      "Kerana cahaya matahari memecahkan zarah udara di kaki gunung"
    ],
    "correctIndex": 0,
    "explanation": "Semakin tinggi sesuatu tempat dari aras laut, bilangan zarah udara semakin berkurang lalu perlanggaran zarah dan tekanan udara menjadi rendah.",
    "ref": "Unit 6, m/s 105-106"
  },
  {
    "id": "d6_sci_u6_s4_03",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "L",
    "q": "Alat manakah yang menggunakan aplikasi tekanan udara untuk menanggalkan kotoran tersumbat di dalam saluran paip singki?",
    "options": [
      "Troli beroda",
      "Penyedut kertas",
      "Pembaris meter",
      "Pelocok"
    ],
    "correctIndex": 3,
    "explanation": "Pelocok menghasilkan tekanan rendah apabila ditekan, dan apabila ditarik tekanan lebih tinggi di dalam paip menolak kotoran tersumbat.",
    "ref": "Unit 6, m/s 108, 111"
  },
  {
    "id": "d6_sci_u6_s4_04",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "L",
    "q": "Mengapakah kita perlu menebuk DUA lubang pada bahagian atas tin susu pekat supaya susu dapat mengalir keluar dengan mudah?",
    "options": [
      "Supaya susu menjadi lebih manis apabila terdedah udara",
      "Untuk mengurangkan berat tin susu sebelum dituang",
      "Lubang kedua membolehkan tekanan udara di luar masuk dan menolak susu mengalir keluar melalui lubang pertama",
      "Supaya susu mendidih dengan cepat"
    ],
    "correctIndex": 2,
    "explanation": "Dengan satu lubang sahaja, tekanan udara luar menghalang susu keluar; lubang kedua membenarkan tekanan udara luar masuk menolak susu keluar.",
    "ref": "Unit 6, m/s 107"
  },
  {
    "id": "d6_sci_u6_s4_05",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "L",
    "q": "Apakah yang berlaku kepada sebiji botol plastik kosong yang ditutup ketat di puncak gunung tinggi apabila dibawa turun sehingga tiba di kaki gunung?",
    "options": [
      "Botol plastik itu akan meletup keluar",
      "Saiz botol plastik mengembang dua kali ganda",
      "Botol plastik itu akan menjadi kemik",
      "Botol plastik menjadi lebih ringan tanpa sebarang perubahan bentuk"
    ],
    "correctIndex": 2,
    "explanation": "Tekanan udara di dalam botol (sama dengan puncak gunung) lebih rendah daripada tekanan udara di kaki gunung, lalu tekanan luar yang tinggi menekan botol menjadi kemik.",
    "ref": "Unit 6, m/s 105"
  },
  {
    "id": "d6_sci_u6_s4_06",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "M",
    "q": "Terangkan bagaimana air sirap dapat naik ke dalam mulut apabila kita menyedut penyedut minuman.",
    "options": [
      "Air ditarik terus oleh otot lidah tanpa melibatkan udara",
      "Sedutan mengurangkan zarah udara dan merendahkan tekanan di dalam penyedut, lalu tekanan udara luar yang lebih tinggi menolak air masuk ke dalam penyedut",
      "Tekanan udara di dalam penyedut meningkat lebih tinggi daripada atmosfera",
      "Dinding gelas mengecut untuk memancutkan air ke atas"
    ],
    "correctIndex": 1,
    "explanation": "Mengurangkan zarah udara dalam penyedut mewujudkan tekanan rendah; tekanan atmosfera di luar menolak permukaan air ke dalam penyedut minuman.",
    "ref": "Unit 6, m/s 102"
  },
  {
    "id": "d6_sci_u6_s4_07",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "M",
    "q": "Sekeping kad tebal diletakkan di atas mulut gelas yang berisi penuh air, kemudian gelas diterbalikkan dan tangan dialihkan secara perlahan. Air tidak tumpah dan kad kekal melekat. Mengapakah kejadian ini berlaku?",
    "options": [
      "Tekanan udara dari luar bertindak ke atas menolak kad tebal menahan berat air",
      "Kertas kad menjadi gam apabila terkena air",
      "Tiada daya graviti bertindak ke atas air di dalam gelas yang terbalik",
      "Zarah udara di dalam gelas menarik kad ke atas"
    ],
    "correctIndex": 0,
    "explanation": "Tekanan udara luar (tekanan atmosfera) bertindak ke semua arah termasuk menolak kad tebal ke atas, mengimbangi berat air di dalam gelas.",
    "ref": "Unit 6, m/s 103"
  },
  {
    "id": "d6_sci_u6_s4_08",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "M",
    "q": "Semasa mengisi ubat cecair menggunakan picagari, omboh ditarik ke atas. Apakah keadaan tekanan di dalam picagari pada ketika itu?",
    "options": [
      "Tekanan di dalam picagari menjadi lebih tinggi daripada tekanan luar",
      "Tekanan di dalam dan di luar picagari kekal sama",
      "Tiada zarah udara wujud di luar botol ubat",
      "Tekanan rendah terhasil di dalam picagari, membolehkan tekanan udara luar yang lebih tinggi menolak cecair masuk"
    ],
    "correctIndex": 3,
    "explanation": "Menarik omboh menghasilkan kawasan bertekanan rendah di dalam picagari; tekanan udara luar yang lebih tinggi menolak cecair ubat masuk.",
    "ref": "Unit 6, m/s 108"
  },
  {
    "id": "d6_sci_u6_s4_09",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "H",
    "q": "Dalam aktiviti botol plastik berisi penuh air yang ditutup ketat, tiga lubang (A, B, C) ditebuk di bahagian bawah dan lubang D di bahagian atas. Apabila pin di A, B dan C dicabut sementara lubang D masih bertutup, air hampir tidak keluar. Mengapakah air terus memancut keluar sejurus pin di lubang D dicabut?",
    "options": [
      "Air di bahagian atas menjadi lebih panas apabila terkena udara",
      "Lubang A, B dan C mengecil selepas pin D dicabut",
      "Lubang D menghilangkan daya graviti terhadap botol plastik",
      "Udara dari luar masuk melalui lubang D dan mengenakan tekanan udara ke atas permukaan air untuk menolaknya keluar"
    ],
    "correctIndex": 3,
    "explanation": "Selagi D bertutup, tekanan udara luar menahan air di lubang bawah; membuka lubang D membolehkan tekanan udara menekan permukaan air dari atas.",
    "ref": "Unit 6, m/s 103"
  },
  {
    "id": "d6_sci_u6_s4_10",
    "unit": "u6",
    "skill": "u6_s4",
    "diff": "H",
    "q": "Seorang murid menggunakan tiub sifon untuk memindahkan air dari tangki ikan ke baldi. Kedua-dua hujung tiub diletakkan pada paras ketinggian yang sama dan air berhenti mengalir. Bagaimanakah dia dapat memulakan semula aliran air melalui sifon itu?",
    "options": [
      "Menutup kedua-dua hujung tiub dengan plastisin",
      "Mengangkat baldi lebih tinggi daripada paras tangki ikan",
      "Meletakkan hujung keluar tiub sifon lebih rendah daripada tangki ikan supaya air mengalir keluar, menghasilkan tekanan rendah di dalam tiub dan ditolak oleh tekanan udara luar",
      "Menebuk lubang kecil di bahagian tengah tiub sifon"
    ],
    "correctIndex": 2,
    "explanation": "Sifon berfungsi apabila dua hujung diletakkan pada ketinggian berbeza (hujung keluar lebih rendah), lalu tekanan rendah dalam tiub membolehkan tekanan luar menolak air.",
    "ref": "Unit 6, m/s 107"
  },
  {
    "id": "d6_sci_u7_s1_01",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan kelajuan?",
    "options": [
      "Jumlah masa yang diambil oleh suatu objek yang berhenti",
      "Ukuran kepantasan pergerakan suatu objek dari suatu tempat ke tempat yang lain",
      "Jarak keseluruhan antara dua garisan lurus tanpa mengambil kira masa",
      "Daya tolakan yang dihasilkan oleh enjin kereta"
    ],
    "correctIndex": 1,
    "explanation": "Kelajuan ialah ukuran kepantasan pergerakan suatu objek dari suatu tempat ke tempat yang lain.",
    "ref": "Unit 7, m/s 114, 124"
  },
  {
    "id": "d6_sci_u7_s1_02",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Antara tiga unit berikut, kumpulan manakah merupakan unit ukuran kelajuan yang piawai?",
    "options": [
      "cm/s, m/s dan km/j",
      "kg, g dan ml",
      "cm, m dan km",
      "saat, minit dan jam"
    ],
    "correctIndex": 0,
    "explanation": "Unit kelajuan ialah sentimeter per saat (cm/s), meter per saat (m/s) dan kilometer per jam (km/j).",
    "ref": "Unit 7, m/s 115, 124"
  },
  {
    "id": "d6_sci_u7_s1_03",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Unit manakah yang PALING sesuai digunakan untuk mengukur kelajuan seekor siput yang merangkak di atas daun?",
    "options": [
      "cm/s",
      "km/j",
      "m/j",
      "km/s"
    ],
    "correctIndex": 0,
    "explanation": "Siput bergerak amat perlahan dalam jarak pendek beberapa sentimeter setiap saat, maka unit cm/s paling sesuai.",
    "ref": "Unit 7, m/s 115, 121"
  },
  {
    "id": "d6_sci_u7_s1_04",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Dalam perlumbaan larian 100 meter di padang sekolah, pelari yang mencatat masa paling singkat untuk tiba di garisan penamat ialah pelari yang _____.",
    "options": [
      "paling perlahan",
      "mengambil laluan paling jauh",
      "berlari pada kelajuan 0 m/s",
      "paling laju"
    ],
    "correctIndex": 3,
    "explanation": "Bagi jarak yang sama, objek yang bergerak lebih laju mengambil masa yang lebih singkat untuk tiba.",
    "ref": "Unit 7, m/s 116, 124"
  },
  {
    "id": "d6_sci_u7_s1_05",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Sebuah lori mencatatkan kelajuan 0 km/j selama satu jam. Apakah keadaan lori tersebut?",
    "options": [
      "Bergerak secara mengundur",
      "Bergerak lebih laju daripada basikal",
      "Berada dalam keadaan pegun (tidak bergerak)",
      "Bergerak sejauh 1 km setiap minit"
    ],
    "correctIndex": 2,
    "explanation": "Kelajuan 0 km/j bermaksud tiada jarak dilalui dalam masa tertentu, iaitu objek berada dalam keadaan pegun.",
    "ref": "Unit 7, m/s 121, 224"
  },
  {
    "id": "d6_sci_u7_s1_06",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Dalam tempoh masa 10 saat yang sama, kereta mainan A bergerak sejauh 5 m manakala kereta mainan B bergerak sejauh 4 m. Apakah perbandingan kelajuan yang tepat?",
    "options": [
      "Kereta mainan B lebih laju daripada kereta mainan A",
      "Kereta mainan A lebih laju daripada kereta mainan B kerana bergerak lebih jauh dalam masa yang ditetapkan",
      "Kedua-dua kereta mempunyai kelajuan yang sama kerana masanya sama",
      "Kereta mainan B bergerak pada kelajuan 0 m/s"
    ],
    "correctIndex": 1,
    "explanation": "Dalam tempoh masa yang ditetapkan, objek yang bergerak lebih jauh mempunyai kelajuan yang lebih tinggi.",
    "ref": "Unit 7, m/s 116"
  },
  {
    "id": "d6_sci_u7_s1_07",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Apakah maksud kelajuan '100 meter/minit' yang dicatat bagi seorang pejalan kaki?",
    "options": [
      "Pejalan kaki itu mengambil masa 100 minit untuk berjalan 1 meter",
      "Pejalan kaki itu bergerak sejauh 100 meter dalam masa 1 minit",
      "Pejalan kaki itu berlari sejauh 100 kilometer dalam 1 minit",
      "Pejalan kaki itu berhenti rehat setiap 100 meter"
    ],
    "correctIndex": 1,
    "explanation": "Kelajuan 100 meter/minit bermakna jarak 100 meter dilalui dalam tempoh masa satu minit.",
    "ref": "Unit 7, m/s 115"
  },
  {
    "id": "d6_sci_u7_s1_08",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Mengapakah unit sentimeter per saat (cm/s) tidak sesuai digunakan untuk merekodkan kelajuan sebuah kereta di lebuh raya?",
    "options": [
      "Kerana kereta bergerak dalam jarak jauh yang lebih sesuai diukur dalam kilometer dan jam (km/j)",
      "Kerana unit cm/s hanya boleh digunakan untuk haiwan di dalam air",
      "Kerana meter laju kereta tidak boleh mengukur jarak dalam satu saat",
      "Kerana semua kereta bergerak pada kelajuan tetap 10 cm/s"
    ],
    "correctIndex": 0,
    "explanation": "Jarak perjalanan kereta jauh (dalam kilometer), maka unit km/j jauh lebih praktikal berbanding cm/s yang menghasilkan angka terlalu besar.",
    "ref": "Unit 7, m/s 115, 224"
  },
  {
    "id": "d6_sci_u7_s1_09",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Sani melepaskan kereta mainan menuruni landasan condong sepanjang 1 m sambil mengubah bilangan buku di bawah hujung landasan: 1 buku (10 saat), 3 buku (6 saat), 5 buku (2 saat). Mengapakah bilangan buku ditambah dan apakah kesimpulannya?",
    "options": [
      "Untuk menambah panjang landasan; semakin panjang landasan, semakin perlahan kereta",
      "Untuk mengurangkan geseran meja; masa kekal sama pada setiap ujian",
      "Untuk menambah jisim kereta mainan; semakin berat kereta, semakin lama masa diambil",
      "Untuk meninggikan kecondongan landasan bagi meningkatkan kelajuan; semakin bertambah kelajuan, semakin singkat masa diambil untuk jarak tetap 1 m"
    ],
    "correctIndex": 3,
    "explanation": "Menambah buku meninggikan landasan supaya kereta mainan bergerak lebih laju, justeru masa untuk menempuh jarak tetap 1 m berkurang.",
    "ref": "Unit 7, m/s 117, 126"
  },
  {
    "id": "d6_sci_u7_s1_10",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Seorang pelari merentasi empat stesen berjarak 50 m setiap selang (50 m, 100 m, 150 m, 200 m). Masa kumulatifnya ialah 8 s, 17 s, 28 s, dan 42 s. Mengapakah kelajuan pelari tersebut tidak seragam dan apakah ramalan jika dia meneruskan larian hingga 400 m?",
    "options": [
      "Kelajuannya seragam 6 m/s; masa hingga 400 m ialah tepat 42 saat",
      "Pelari semakin laju di stesen terakhir kerana mengambil 14 saat bagi 50 m terakhir berbanding 8 saat pada 50 m pertama",
      "Pelari semakin keletihan menyebabkan selang masa setiap 50 m bertambah dan kelajuannya semakin berkurang menuju 400 m",
      "Kelajuannya meningkat menjadi dua kali ganda selepas 200 m"
    ],
    "correctIndex": 2,
    "explanation": "Selang masa bagi setiap 50 m meningkat (8 s -> 9 s -> 11 s -> 14 s), menunjukkan kelajuan menurun akibat keletihan dan dijangka terus menurun hingga 400 m.",
    "ref": "Unit 7, m/s 122"
  },
  {
    "id": "d6_sci_u8_s1_01",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah punca utama makanan menjadi rosak?",
    "options": [
      "Makanan disimpan di dalam tin yang kedap udara",
      "Makanan dibersihkan dengan air sebelum dimasak",
      "Tindakan mikroorganisma seperti bakteria dan kulat yang menguraikan makanan",
      "Suhu peti sejuk diturunkan di bawah 0°C"
    ],
    "correctIndex": 2,
    "explanation": "Makanan rosak akibat tindakan mikroorganisma (bakteria dan kulat) yang menguraikan bahan makanan kompleks menjadi bentuk ringkas.",
    "ref": "Unit 8, m/s 128, 145"
  },
  {
    "id": "d6_sci_u8_s1_02",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Antara ciri berikut, manakah yang menunjukkan susu segar di dalam kotak telah rosak?",
    "options": [
      "Tekstur susu menjadi cair jernih tanpa bau",
      "Susu berbuih-buih, berketul-ketul, berbau busuk dan berasa masam",
      "Susu berubah warna menjadi hijau daun dan berlendir",
      "Kotak susu menjadi kemik akibat tekanan udara"
    ],
    "correctIndex": 1,
    "explanation": "Susu yang rosak kelihatan berbuih-buih dan berketul-ketul, berbau busuk serta berasa masam.",
    "ref": "Unit 8, m/s 128, 145"
  },
  {
    "id": "d6_sci_u8_s1_03",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Sekeping roti yang dibiarkan di atas meja selama seminggu kelihatan bertompok kehitaman. Apakah tompok kehitaman tersebut?",
    "options": [
      "Kulat (mikroorganisma)",
      "Gula yang menghablur",
      "Serbuk garam halus",
      "Minyak masak terpakai"
    ],
    "correctIndex": 0,
    "explanation": "Roti dan nasi yang rosak ditumbuhi tompok-tompok kehitaman iaitu kulat.",
    "ref": "Unit 8, m/s 128"
  },
  {
    "id": "d6_sci_u8_s1_04",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah ciri kerosakan yang dapat dikesan melalui deria bau, sentuhan dan penglihatan pada daging ayam mentah yang terbiar lama pada suhu bilik?",
    "options": [
      "Mempunyai lapisan lilin putih yang berkilat",
      "Berasa masam, berbuih-buih dan berketul-ketul",
      "Menjadi kering, rangup dan berbau wangi",
      "Kelihatan kehitaman, berbau busuk dan berlendir"
    ],
    "correctIndex": 3,
    "explanation": "Daging ayam dan lembu yang rosak akan kelihatan kehitaman, berbau busuk dan berlendir.",
    "ref": "Unit 8, m/s 129, 145"
  },
  {
    "id": "d6_sci_u8_s1_05",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Deria manakah yang digunakan untuk mengesan ciri kerosakan makanan seperti bau busuk, rasa masam, tekstur berlendir dan perubahan warna?",
    "options": [
      "Deria pendengaran sahaja",
      "Deria rasa sahaja tanpa melihat makanan",
      "Deria pendengaran dan sentuhan sahaja",
      "Deria penglihatan, bau, rasa dan sentuhan"
    ],
    "correctIndex": 3,
    "explanation": "Ciri kerosakan makanan dikesan melalui deria penglihatan, deria bau, deria rasa dan deria sentuhan.",
    "ref": "Unit 8, m/s 129"
  },
  {
    "id": "d6_sci_u8_s1_06",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Mengapakah susu yang telah rosak berasa masam apabila dirasa?",
    "options": [
      "Kerana susu menyerap gas oksigen yang berasa masam dari udara",
      "Kerana bekas plastik melarutkan cuka ke dalam susu",
      "Kerana bakteria di dalam susu menguraikan nutrien susu dan menghasilkan asid",
      "Kerana kandungan air di dalam susu telah kering sepenuhnya"
    ],
    "correctIndex": 2,
    "explanation": "Bakteria dalam susu menghasilkan asid semasa bertumbuh dan menguraikan susu, menyebabkan susu berasa masam.",
    "ref": "Unit 8, m/s 128"
  },
  {
    "id": "d6_sci_u8_s1_07",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Ibu membeli dua bungkus nasi lemak pada pukul 12:30 tengah hari tetapi terperangkap dalam kesesakan lalu lintas sehingga pukul 3:30 petang di dalam kereta yang hangat. Nasi lemak itu didapati basi. Apakah faktor yang menyebabkan nasi lemak cepat rosak?",
    "options": [
      "Pembungkusan kertas menghalang semua haba daripada keluar",
      "Kandungan air dalam nasi dan suhu persekitaran yang hangat menggalakkan pertumbuhan bakteria dan kulat",
      "Cahaya matahari membekukan bakteria di dalam sambal",
      "Kesesakan lalu lintas menghasilkan gas yang menyalut nasi"
    ],
    "correctIndex": 1,
    "explanation": "Suhu persekitaran yang sesuai serta kandungan air dan nutrien dalam nasi lemak mempercepat pembiakan mikroorganisma sehingga nasi berlendir dan basi.",
    "ref": "Unit 8, m/s 127-129"
  },
  {
    "id": "d6_sci_u8_s1_08",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Di pasar basah, Mak Cik Salma menyentuh seekor ikan dan mendapati isinya lembik, melekit dan berbau busuk. Apakah maksud proses yang telah berlaku pada ikan tersebut?",
    "options": [
      "Penguraian bahan organik daripada bentuk kompleks kepada ringkas oleh mikroorganisma",
      "Pengawetan makanan melalui penyejukbekuan",
      "Penyingkiran air melalui pemasinan",
      "Proses pelilinan semula jadi kulit ikan"
    ],
    "correctIndex": 0,
    "explanation": "Penguraian ialah proses mikroorganisma menguraikan bahan organik daripada bentuk kompleks kepada bentuk ringkas sehingga makanan rosak.",
    "ref": "Unit 8, m/s 128-129"
  },
  {
    "id": "d6_sci_u8_s1_09",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Dalam aktiviti pemerhatian makanan selama seminggu, potongan epal, sayur sawi dan nasi dicelupkan ke dalam sedikit air lalu ditutup di dalam bekas plastik pada suhu bilik. Mengapakah potongan yang dicelup air lebih cepat berkulat dan berlendir berbanding makanan kering?",
    "options": [
      "Air di dalam bekas membekalkan kelembapan dan melarutkan nutrien supaya mikroorganisma dapat bertumbuh aktif bersama kehadiran udara dan suhu sesuai",
      "Air pili menukarkan buah epal dan sayur menjadi bakteria secara langsung",
      "Bekas bertutup rapat mewujudkan suhu melebihi 72°C di dalamnya",
      "Keasidan air pili membantu mematikan semua bakteria berfaedah"
    ],
    "correctIndex": 0,
    "explanation": "Kehadiran air (kelembapan) bersama udara, nutrien dan suhu bilik memenuhi kesemua syarat pertumbuhan mikroorganisma yang merosakkan makanan.",
    "ref": "Unit 8, m/s 128, 130-131"
  },
  {
    "id": "d6_sci_u8_s1_10",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Semasa memeriksa makanan sebelum memasak, mengapakah murid tidak digalakkan terus merasa makanan yang disyaki telah rosak menggunakan lidah jika tanda kerosakan lain sudah jelas?",
    "options": [
      "Kerana deria rasa tidak pernah mengesan makanan masam",
      "Kerana merasa makanan rosak akan menyebabkan makanan tersebut bertambah rosak",
      "Kerana makanan rosak mempunyai suhu terlalu tinggi untuk disentuh lidah",
      "Kerana makanan yang sudah kelihatan berkulat, berlendir atau berbau busuk mungkin mengandungi bakteria berbahaya seperti Salmonella yang boleh menyebabkan keracunan makanan"
    ],
    "correctIndex": 3,
    "explanation": "Jika penglihatan (berkulat/berubah warna), bau (busuk) atau sentuhan (berlendir/lembik) sudah mengesahkan kerosakan, memakannya boleh mengakibatkan keracunan makanan.",
    "ref": "Unit 8, m/s 129, 145"
  },
  {
    "id": "d6_sci_u8_s2_01",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Apakah tujuan utama pengawetan makanan?",
    "options": [
      "Menjadikan makanan lebih mahal di pasaran",
      "Menambah kadar air di dalam makanan kering",
      "Menghalang atau melambatkan pertumbuhan mikroorganisma supaya makanan tahan lebih lama",
      "Mempercepat proses penguraian bahan organik"
    ],
    "correctIndex": 2,
    "explanation": "Pengawetan makanan ialah proses melambatkan makanan daripada rosak dengan menghalang atau melambatkan pertumbuhan mikroorganisma.",
    "ref": "Unit 8, m/s 131, 145"
  },
  {
    "id": "d6_sci_u8_s2_02",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Kaedah pengawetan manakah yang menyimpan sayur-sayuran dan hasil tenusu pada suhu sekitar 4°C untuk memperlahankan pertumbuhan mikroorganisma?",
    "options": [
      "Penyejukbekuan",
      "Pendinginan",
      "Pendidihan",
      "Penyalaian"
    ],
    "correctIndex": 1,
    "explanation": "Pendinginan menyimpan makanan pada suhu sekitar 4°C (pertumbuhan perlahan), manakala penyejukbekuan pada takat beku 0°C dan ke bawah.",
    "ref": "Unit 8, m/s 132"
  },
  {
    "id": "d6_sci_u8_s2_03",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Bagaimanakah kaedah pelilinan membantu mengekalkan kesegaran buah-buahan dan sayur-sayuran seperti epal dan tomato?",
    "options": [
      "Lilin membunuh mikroorganisma melalui pendidihan",
      "Salutan lilin menghalang udara dan air daripada menembusi permukaan makanan",
      "Lilin menukarkan permukaan buah menjadi berkeasidan tinggi",
      "Lilin menyejukkan buah hingga di bawah 0°C"
    ],
    "correctIndex": 1,
    "explanation": "Salutan lilin menghalang udara dan air menembusi permukaan makanan sekali gus mencegah pertumbuhan mikroorganisma.",
    "ref": "Unit 8, m/s 134"
  },
  {
    "id": "d6_sci_u8_s2_04",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Kaedah manakah yang menyingkirkan kelembapan makanan dengan cara melumurkan kuantiti garam yang banyak ke atas ikan atau telur?",
    "options": [
      "Pemasinan",
      "Pempasteuran",
      "Pembungkusan vakum",
      "Pembotolan"
    ],
    "correctIndex": 0,
    "explanation": "Pemasinan melumurkan garam yang banyak untuk menyingkirkan air/kelembapan daripada makanan.",
    "ref": "Unit 8, m/s 134"
  },
  {
    "id": "d6_sci_u8_s2_05",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Mengapakah jeruk mangga yang direndam di dalam cuka atau larutan gula pekat tahan lebih lama?",
    "options": [
      "Mangga telah dimasak pada suhu 135°C",
      "Udara di dalam balang jeruk membekukan bakteria",
      "Cuka membekalkan nutrien tambahan kepada kulat",
      "Keasidan atau kepekatan larutan tidak sesuai bagi pertumbuhan mikroorganisma"
    ],
    "correctIndex": 3,
    "explanation": "Penjerukan merendam makanan dalam cuka, larutan gula atau garam pekat mewujudkan keadaan keasidan yang tidak sesuai untuk mikroorganisma.",
    "ref": "Unit 8, m/s 134"
  },
  {
    "id": "d6_sci_u8_s2_06",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Apakah perbezaan utama antara kaedah pendinginan dengan kaedah penyejukbekuan terhadap mikroorganisma?",
    "options": [
      "Pendinginan menyingkirkan air, manakala penyejukbekuan menyingkirkan udara",
      "Pendinginan membunuh semua mikroorganisma, manakala penyejukbekuan sekadar memperlahankannya",
      "Pendinginan (4°C) memperlahankan pertumbuhan mikroorganisma, manakala penyejukbekuan (0°C dan ke bawah) menghentikan proses pertumbuhannya",
      "Kedua-duanya dijalankan pada suhu 63°C selama 30 minit"
    ],
    "correctIndex": 2,
    "explanation": "Pendinginan sekitar 4°C menjadikan pertumbuhan mikroorganisma perlahan, sedangkan takat beku 0°C dan ke bawah menghentikan pertumbuhannya.",
    "ref": "Unit 8, m/s 132"
  },
  {
    "id": "d6_sci_u8_s2_07",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Dalam proses pempasteuran susu dan jus buah, apakah langkah suhu yang betul mengikut buku teks?",
    "options": [
      "Disejukkan pada 0°C tanpa dipanaskan terlebih dahulu",
      "Dipanaskan pada 100°C selama 2 jam dan dibiarkan pada suhu bilik",
      "Dipanaskan pada 63°C selama 30 minit atau 72°C selama 15 saat (atau UHT 135°C selama 2 saat), diikuti pendinginan segera pada 4°C",
      "Direndam dalam larutan garam pekat selama seminggu"
    ],
    "correctIndex": 2,
    "explanation": "Pempasteuran menggunakan pemanasan suhu terkawal (63°C/30 min, 72°C/15 s, atau UHT 135°C/2 s) untuk membunuh mikroorganisma, diikuti pendinginan segera ke 4°C.",
    "ref": "Unit 8, m/s 133"
  },
  {
    "id": "d6_sci_u8_s2_08",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Bagaimanakah kaedah pengetinan dan pembotolan memastikan makanan di dalamnya dapat bertahan lama?",
    "options": [
      "Hanya kerana makanan disimpan pada suhu sekitar 4°C",
      "Menggunakan haba suhu tinggi untuk mematikan mikroorganisma serta memateri atau menutup bekas kedap udara untuk menghalang kemasukan udara",
      "Menambahkan lapisan lilin di bahagian dalam tin",
      "Menjemur tin makanan di bawah cahaya matahari selama tujuh hari"
    ],
    "correctIndex": 1,
    "explanation": "Pengetinan dan pembotolan menggabungkan suhu tinggi (membunuh mikroorganisma) dan pembungkusan kedap udara (ketiadaan udara).",
    "ref": "Unit 8, m/s 133"
  },
  {
    "id": "d6_sci_u8_s2_09",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Dalam projek pengawetan cili melalui kaedah pendidihan (cili kisar dimasak sehingga pekat), dua sudu besar minyak masak digunakan dan cili disimpan dalam bekas bertutup. Mengapakah minyak masak digunakan dalam penyediaan cili kisar tahan lama ini?",
    "options": [
      "Lapisan minyak membantu menyekat udara serta membantu pemanasan sekata bagi menghalang pertumbuhan mikroorganisma",
      "Minyak masak menukarkan suhu cili kepada 0°C apabila disimpan",
      "Minyak masak melarutkan lebih banyak oksigen untuk mikroorganisma",
      "Minyak masak menjadikan cili kering seperti proses penyalaian"
    ],
    "correctIndex": 0,
    "explanation": "Selain pendidihan suhu tinggi yang mematikan mikroorganisma, minyak masak membantu mengelakkan sentuhan udara dan mengekalkan kepekatan cili kisar.",
    "ref": "Unit 8, m/s 138, 143"
  },
  {
    "id": "d6_sci_u8_s2_10",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Puan Fatimah menimbang 150 g cili segar sebelum menjemurnya di bawah cahaya matahari selama tujuh hari. Selepas kering, jisim cili berkurang dengan ketara kepada sekitar 40 g. Mengapakah jisim cili berkurang dan bagaimanakah hal ini mengawet cili?",
    "options": [
      "Vitamin dalam cili tersejat ke udara; mikroorganisma tidak mendapat warna merah",
      "Cili kering menyerap gas karbon dioksida yang lebih ringan daripada air",
      "Biji cili jatuh melalui dawai pelapik semasa dijemur",
      "Kandungan air di dalam cili telah tersejat keluar akibat haba matahari; ketiadaan air menghalang mikroorganisma daripada hidup dan membiak"
    ],
    "correctIndex": 3,
    "explanation": "Pengeringan menyingkirkan kandungan air (sebab utama penurunan jisim), menyebabkan mikroorganisma tidak boleh bertumbuh akibat ketiadaan air.",
    "ref": "Unit 8, m/s 132, 135"
  },
  {
    "id": "d6_sci_u8_s3_01",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Bolehkah sejenis makanan seperti cili segar atau buah jambu diawet menggunakan lebih daripada satu kaedah pengawetan yang berbeza?",
    "options": [
      "Tidak boleh, setiap makanan hanya sesuai untuk satu kaedah tunggal",
      "Hanya makanan kering boleh dibungkus secara vakum",
      "Hanya makanan laut sahaja boleh diawet dengan pelbagai kaedah",
      "Ya, satu jenis makanan boleh diawet dengan pelbagai kaedah seperti pengeringan, penjerukan atau penyejukbekuan"
    ],
    "correctIndex": 3,
    "explanation": "Satu jenis makanan boleh diawet menggunakan pelbagai kaedah pengawetan berbeza bergantung kepada tujuan dan jenis produk.",
    "ref": "Unit 8, m/s 135-138, 145"
  },
  {
    "id": "d6_sci_u8_s3_02",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Apakah gabungan kaedah pengawetan yang digunakan untuk menghasilkan ikan kering masin tradisional di bawah cahaya matahari?",
    "options": [
      "Penyejukbekuan dan pendidihan",
      "Pempasteuran dan pelilinan",
      "Pemasinan dan pengeringan",
      "Pembotolan dan penjerukan"
    ],
    "correctIndex": 2,
    "explanation": "Ikan dilumur dengan garam (pemasinan) dan dijemur di bawah matahari terik (pengeringan) untuk menyingkirkan air.",
    "ref": "Unit 8, m/s 139"
  },
  {
    "id": "d6_sci_u8_s3_03",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Ibu memproses lebihan rendang daging kenduri dengan memasaknya hingga kering menjadi serondeng daging. Kepentingan pengawetan makanan manakah yang diamalkan?",
    "options": [
      "Memudahkan produk dieksport melalui kapal laut",
      "Mengelakkan dan mencegah pembaziran makanan",
      "Menjimatkan ruang peti sejuk beku",
      "Menjadikan daging berasa masam seperti jeruk"
    ],
    "correctIndex": 1,
    "explanation": "Mengolah lebihan makanan menjadi serondeng memanjangkan hayat simpanan dan mengelakkan pembaziran makanan.",
    "ref": "Unit 8, m/s 140"
  },
  {
    "id": "d6_sci_u8_s3_04",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Buah rambutan dan durian ialah buah-buahan bermusim. Bagaimanakah teknologi pengawetan seperti membuat jem atau penyejukbekuan membantu pengguna?",
    "options": [
      "Membolehkan pembekalan dan kenikmatan makanan bermusim di luar musim sepanjang tahun",
      "Mengubah rasa buah menjadi tawar tanpa gula",
      "Mengurangkan tempoh simpanan buah kepada dua hari sahaja",
      "Memerlukan ruang simpanan gudang yang lebih besar"
    ],
    "correctIndex": 0,
    "explanation": "Pengawetan membolehkan makanan bermusim disimpan dan dinikmati di luar musimnya.",
    "ref": "Unit 8, m/s 141"
  },
  {
    "id": "d6_sci_u8_s3_05",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Apakah fungsi label tarikh luput seperti 'GUNA SEBELUM 14 APRIL 2027' pada makanan yang diawet?",
    "options": [
      "Menunjukkan tempoh makanan tersebut masih sesuai dan selamat untuk dimakan sebelum tarikh berkenaan",
      "Menunjukkan tarikh makanan mula ditanam di ladang",
      "Menunjukkan suhu yang diperlukan di dalam peti sejuk",
      "Menandakan bilangan bahan pengawet di dalam tin"
    ],
    "correctIndex": 0,
    "explanation": "Tarikh luput memaklumkan pengguna batas waktu makanan diawet sesuai dan selamat untuk dimakan.",
    "ref": "Unit 8, m/s 142"
  },
  {
    "id": "d6_sci_u8_s3_06",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "Dalam aktiviti membuat jeruk ikan, ikan dibersihkan, dijemur di bawah cahaya matahari selama dua jam, dilumur garam dan direndam sehingga tenggelam dalam minyak masak di bekas bertutup. Apakah faktor pertumbuhan mikroorganisma yang disekat oleh langkah-langkah gabungan ini?",
    "options": [
      "Nutrien dalam ikan ditambah oleh garam halus",
      "Suhu diturunkan di bawah 0°C melalui minyak masak",
      "Keasidan tinggi dihasilkan oleh cahaya matahari",
      "Air disingkirkan melalui jemuran dan garam; udara disekat oleh minyak masak dan bekas bertutup"
    ],
    "correctIndex": 3,
    "explanation": "Jemuran (pengeringan) dan garam (pemasinan) menyingkirkan air, manakala rendaman minyak dalam bekas bertutup menyekat kemasukan udara.",
    "ref": "Unit 8, m/s 143"
  },
  {
    "id": "d6_sci_u8_s3_07",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "Mengapakah makanan di dalam tin dan botol kaca menjadi pilihan penting bagi bekalan bantuan ketika berlaku banjir besar atau musim kemarau?",
    "options": [
      "Kerana tin makanan memerlukan bekalan elektrik berterusan",
      "Kerana makanan dalam tin tidak mempunyai tarikh luput sampai bila-bila",
      "Kerana ia mudah disusun menjimatkan ruang, tahan lama dan tersedia sebagai makanan sedia dimakan",
      "Kerana botol kaca sentiasa terapung di atas air banjir"
    ],
    "correctIndex": 2,
    "explanation": "Makanan bertin dan berbotol mudah disimpan, menjimatkan ruang, tahan lama serta mudah dijadikan bekalan sedia dimakan semasa musibah.",
    "ref": "Unit 8, m/s 141-142"
  },
  {
    "id": "d6_sci_u8_s3_08",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "Puan Anis membeli ikan salai yang dibungkus kedap tanpa udara dan disimpan di dalam ruang sejuk beku pasar raya. Berapa jenis kaedah pengawetan yang digabungkan ke atas ikan itu?",
    "options": [
      "Satu kaedah sahaja iaitu pendinginan",
      "Tiga kaedah iaitu penyalaian, pembungkusan vakum dan penyejukbekuan",
      "Dua kaedah iaitu penjerukan dan pelilinan",
      "Empat kaedah termasuk pempasteuran dan pembotolan"
    ],
    "correctIndex": 1,
    "explanation": "Ikan salai yang divakumkan dan disejukbekukan menggabungkan penyalaian, pembungkusan vakum dan penyejukbekuan agar bertahan jauh lebih lama.",
    "ref": "Unit 8, m/s 146, 225"
  },
  {
    "id": "d6_sci_u8_s3_09",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "H",
    "q": "Sebuah syarikat tempatan ingin mengeksport produk santan kelapa dari Malaysia ke negara Eropah menggunakan kapal laut yang mengambil masa berminggu-minggu. Kaedah manakah paling sesuai bagi memastikan santan kekal segar dan menjimatkan ruang kargo?",
    "options": [
      "Memasukkan santan ke dalam mangkuk plastik terbuka dan disimpan pada suhu bilik",
      "Memproses santan menggunakan pempasteuran suhu tinggi (UHT) atau pengetinan dalam pek atau tin kedap udara yang mudah disusun",
      "Menaburkan garam pada santan mentah dan dijemur di bawah matahari",
      "Menyalut kotak kertas biasa dengan minyak masak"
    ],
    "correctIndex": 1,
    "explanation": "Pengetinan atau pemprosesan UHT kedap udara mematikan mikroorganisma, menghalang udara masuk dan membolehkan produk disusun kemas untuk eksport jarak jauh.",
    "ref": "Unit 8, m/s 133, 141"
  },
  {
    "id": "d6_sci_u8_s3_10",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "H",
    "q": "Dalam penghasilan keropok inang-inang tradisional daripada nasi lebihan, adunan nasi nipis dimasak atas kuali panas lalu dijemur di bawah cahaya matahari sehingga kering sebelum disimpan dalam bekas berpenutup. Apakah dua prinsip utama di sebalik ketahanan keropok ini?",
    "options": [
      "Pemanasan dan penyingkiran air sehingga kering, serta penyimpanan tertutup bagi mengelakkan kelembapan masuk semula",
      "Penyejukan pada 4°C dan penjerukan dengan cuka",
      "Penambahan udara lembap dan pemasinan ringan sahaja",
      "Penyalutan lilin di permukaan setiap kepingan nasi"
    ],
    "correctIndex": 0,
    "explanation": "Memasak dan menjemur menyingkirkan air agar mikroorganisma tidak tumbuh, manakala bekas bertutup menghalang wap air persekitaran meresap kembali.",
    "ref": "Unit 8, m/s 144"
  },
  {
    "id": "d6_sci_u9_s1_01",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Apakah maksud bahan buangan?",
    "options": [
      "Bahan yang sentiasa diperlukan untuk membina rumah baharu",
      "Barang perhiasan mewah yang disimpan di dalam peti besi",
      "Bahan mentah yang baru dituai dari kebun sayur",
      "Bahan yang tidak diperlukan dan tidak mahu disimpan lagi"
    ],
    "correctIndex": 3,
    "explanation": "Bahan buangan ialah bahan yang tidak lagi diperlukan dan tidak mahu disimpan.",
    "ref": "Unit 9, m/s 148, 163"
  },
  {
    "id": "d6_sci_u9_s1_02",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan bahan buangan terbiodegradasi?",
    "options": [
      "Bahan logam yang dileburkan di dalam kilang kitar semula",
      "Bahan yang kekal tidak berubah di dalam tanah selama ratusan tahun",
      "Bahan yang boleh diuraikan oleh mikroorganisma seperti bakteria dan fungi",
      "Bahan toksik berbahaya daripada bengkel kenderaan"
    ],
    "correctIndex": 2,
    "explanation": "Bahan buangan terbiodegradasi boleh diuraikan oleh mikroorganisma dan mengembalikan nutrien ke dalam tanah.",
    "ref": "Unit 9, m/s 150, 163"
  },
  {
    "id": "d6_sci_u9_s1_03",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Antara bahan buangan berikut, manakah yang tergolong dalam kumpulan BAHAN BUANGAN TERBIODEGRADASI?",
    "options": [
      "Botol kaca, tin aluminium dan sisa toksik",
      "Beg plastik, penyedut minuman dan cermin pecah",
      "Sisa makanan, daun kering, kertas dan tinja",
      "Besi buruk, botol plastik dan tin keluli"
    ],
    "correctIndex": 2,
    "explanation": "Bahan organik termasuk sisa makanan, daun kering, tinja serta kertas tergolong sebagai bahan buangan terbiodegradasi.",
    "ref": "Unit 9, m/s 150, 163"
  },
  {
    "id": "d6_sci_u9_s1_04",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Kulit bawang, tulang ayam, kulit telur dan minyak masak terpakai di dapur dikategorikan sebagai jenis bahan buangan _____.",
    "options": [
      "sisa toksik",
      "sisa makanan",
      "kaca",
      "logam"
    ],
    "correctIndex": 1,
    "explanation": "Bahan buangan domestik dari dapur termasuk kulit bawang, tulang ayam, kulit telur, sisa sayur dan minyak masak terpakai ialah sisa makanan.",
    "ref": "Unit 9, m/s 149"
  },
  {
    "id": "d6_sci_u9_s1_05",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Manakah antara bahan berikut merupakan contoh sisa toksik?",
    "options": [
      "Asap dan sisa bahan kimia daripada bengkel kenderaan serta kilang perindustrian",
      "Surat khabar dan kotak kadbod lama",
      "Tinja haiwan ternakan di ladang",
      "Daun-daun kering di halaman rumah"
    ],
    "correctIndex": 0,
    "explanation": "Sisa toksik meliputi asap berbahaya dan sisa bahan kimia dari bengkel atau industri yang boleh mengancam nyawa.",
    "ref": "Unit 9, m/s 149, 163"
  },
  {
    "id": "d6_sci_u9_s1_06",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Mengapakah bahan buangan tidak terbiodegradasi seperti botol plastik dan tin logam mencemarkan alam sekitar jika dibuang ke dalam tanah?",
    "options": [
      "Kerana ia mengembalikan terlalu banyak nutrien ke dalam tanah",
      "Kerana ia hanya larut dalam air hujan dan bertukar menjadi kertas",
      "Kerana ia cepat mereput menjadi baja kompos dalam seminggu",
      "Kerana ia tidak boleh diuraikan oleh mikroorganisma dan kekal di persekitaran untuk tempoh yang sangat lama"
    ],
    "correctIndex": 3,
    "explanation": "Bahan tidak terbiodegradasi tidak dapat diuraikan oleh bakteria atau fungi, menyebabkan ia terkumpul lama dan mencemarkan alam sekitar.",
    "ref": "Unit 9, m/s 151"
  },
  {
    "id": "d6_sci_u9_s1_07",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Seorang murid melihat tanda 'Kitar Semula' pada botol kaca dan kotak kadbod lalu berpendapat kedua-duanya ialah bahan terbiodegradasi. Betulkan kesilapan konsep murid tersebut.",
    "options": [
      "Kedua-dua kaca dan kertas adalah bahan tidak terbiodegradasi",
      "Semua bahan yang boleh dikitar semula pasti tidak boleh dibuang ke tong sampah",
      "Kaca ialah bahan terbiodegradasi manakala kertas tidak terbiodegradasi",
      "Kertas (kotak kadbod) ialah bahan terbiodegradasi yang boleh diurai mikroorganisma, manakala kaca ialah bahan tidak terbiodegradasi walaupun kedua-duanya boleh dikitar semula"
    ],
    "correctIndex": 3,
    "explanation": "Kebolehuraian oleh mikroorganisma berbeza daripada kebolehkitaran semula: kotak kertas boleh terurai secara biologi, sedangkan kaca tidak terbiodegradasi.",
    "ref": "Unit 9, m/s 150-151"
  },
  {
    "id": "d6_sci_u9_s1_08",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Apakah faedah proses penguraian bahan buangan terbiodegradasi oleh mikroorganisma terhadap kesuburan tanah?",
    "options": [
      "Menjadikan tanah mengandungi banyak serpihan plastik dan kaca",
      "Menghalang pertumbuhan semua akar pokok di kebun",
      "Mengembalikan nutrien semula jadi ke dalam tanah",
      "Menukarkan tanah kebun menjadi sisa toksik"
    ],
    "correctIndex": 2,
    "explanation": "Ketika bahan organik diuraikan oleh bakteria dan fungi, nutrien dikembalikan ke dalam tanah untuk menyuburkan tumbuhan.",
    "ref": "Unit 9, m/s 150"
  },
  {
    "id": "d6_sci_u9_s1_09",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Majalah lama, botol kosmetik kaca, tin minuman ringan, daun kering dan bekas makanan plastik dikumpulkan selepas aktiviti gotong-royong. Pengelasan manakah yang betul?",
    "options": [
      "Terbiodegradasi: majalah lama, tin minuman ringan; Tidak terbiodegradasi: daun kering, botol kosmetik kaca, bekas plastik",
      "Terbiodegradasi: majalah lama, daun kering; Tidak terbiodegradasi: botol kosmetik kaca, tin minuman ringan, bekas makanan plastik",
      "Terbiodegradasi: daun kering sahaja; Tidak terbiodegradasi: majalah lama, kaca, tin, plastik",
      "Terbiodegradasi: bekas plastik, majalah lama; Tidak terbiodegradasi: daun kering, kaca, tin"
    ],
    "correctIndex": 1,
    "explanation": "Majalah (kertas) dan daun kering ialah bahan terbiodegradasi; kaca, logam (tin) dan plastik ialah bahan tidak terbiodegradasi.",
    "ref": "Unit 9, m/s 150-151, 159"
  },
  {
    "id": "d6_sci_u9_s1_10",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Mengapakah ayah Jesy menyuruhnya mengasingkan bahan buangan domestik kepada bahan terbiodegradasi dan tidak terbiodegradasi sebelum dilupuskan?",
    "options": [
      "Kerana bahan terbiodegradasi boleh diuraikan menjadi baja kompos, manakala bahan tidak terbiodegradasi seperti plastik, kaca dan logam perlu dihantar ke pusat kitar semula atau dilupuskan dengan kaedah sesuai agar tidak mencemarkan alam",
      "Supaya kedua-dua jenis bahan dapat dibakar sekali gus di belakang rumah",
      "Kerana bahan tidak terbiodegradasi akan mereput lebih cepat jika bercampur sisa makanan",
      "Supaya lori sampah tidak perlu mengutip tong sampah pada setiap minggu"
    ],
    "correctIndex": 0,
    "explanation": "Pengasingan memudahkan proses pengurusan lanjut: bahan terbiodegradasi diproses sebagai kompos manakala bahan tidak terbiodegradasi dikitar semula atau diurus khas.",
    "ref": "Unit 9, m/s 150, 157, 160"
  },
  {
    "id": "d6_sci_u9_s2_01",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah warna tong kitar semula yang dikhaskan untuk membuang bahan buangan KERTAS seperti surat khabar, majalah dan kotak kadbod?",
    "options": [
      "Biru",
      "Coklat",
      "Jingga",
      "Hijau"
    ],
    "correctIndex": 0,
    "explanation": "Tong kitar semula berwarna biru adalah untuk kertas, coklat untuk kaca, dan jingga untuk tin aluminium, tin keluli dan plastik.",
    "ref": "Unit 9, m/s 159"
  },
  {
    "id": "d6_sci_u9_s2_02",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Tong kitar semula berwarna jingga digunakan untuk membuang bahan buangan jenis apakah?",
    "options": [
      "Sisa makanan dan daun kering",
      "Surat khabar dan buku lama",
      "Botol kaca dan cermin pecah",
      "Tin aluminium, tin keluli dan plastik"
    ],
    "correctIndex": 3,
    "explanation": "Tong kitar semula berwarna jingga dikhususkan bagi tin aluminium, tin keluli dan barangan plastik.",
    "ref": "Unit 9, m/s 159"
  },
  {
    "id": "d6_sci_u9_s2_03",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Dalam amalan 5R, tindakan membaiki perabot atau peralatan yang rosak daripada terus membuangnya dikenali sebagai _____.",
    "options": [
      "Refuse (tolak)",
      "Reduce (kurangkan)",
      "Repair (baik pulih)",
      "Recycle (kitar semula)"
    ],
    "correctIndex": 2,
    "explanation": "Repair bermaksud membaik pulih alatan yang rosak supaya dapat terus digunakan dan menjimatkan perbelanjaan.",
    "ref": "Unit 9, m/s 158, 161"
  },
  {
    "id": "d6_sci_u9_s2_04",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Mengapakah sisa bahan buangan di rumah perlu dibungkus dan diikat dengan kemas sebelum dimasukkan ke dalam tong sampah?",
    "options": [
      "Supaya berat sampah menjadi lebih ringan",
      "Untuk mengelakkan bahan buangan terdedah kepada haiwan pembawa penyakit seperti tikus dan lalat",
      "Supaya sisa plastik bertukar menjadi kompos dalam plastik",
      "Untuk memudahkan hujan melarutkan sampah tersebut"
    ],
    "correctIndex": 1,
    "explanation": "Membungkus dan mengikat sampah dengan kemas mengelakkan bau dan tarikan haiwan perosak pembawa penyakit seperti lalat dan tikus.",
    "ref": "Unit 9, m/s 156, 163"
  },
  {
    "id": "d6_sci_u9_s2_05",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah amalan berhemah ketika membeli-belah di pasar raya untuk mengurangkan pembuangan beg plastik?",
    "options": [
      "Meminta dua lapis beg plastik bagi setiap barang",
      "Membawa beg guna semula sendiri dan menolak penggunaan beg plastik",
      "Membuang semua plastik pembungkus di longkang luar pasar raya",
      "Menggunakan penyedut minuman plastik yang baharu setiap jam"
    ],
    "correctIndex": 1,
    "explanation": "Membawa beg guna semula (Reuse) dan menolak beg plastik serta penyedut minuman yang tidak perlu (Refuse) mengurangkan bahan buangan plastik.",
    "ref": "Unit 9, m/s 153, 158"
  },
  {
    "id": "d6_sci_u9_s2_06",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Walaupun sisa makanan merupakan bahan terbiodegradasi, mengapakah kita dilarang membuangnya ke dalam sungai?",
    "options": [
      "Kerana penguraian sisa makanan di dalam air sungai mengurangkan kandungan oksigen terlarut dan boleh membunuh hidupan akuatik",
      "Kerana sisa makanan bertukar menjadi logam berat di dalam sungai",
      "Kerana ikan di sungai tidak boleh memakan bahan organik",
      "Kerana sisa makanan akan membekukan aliran sungai"
    ],
    "correctIndex": 0,
    "explanation": "Penguraian sisa makanan oleh mikroorganisma di dalam sungai menggunakan oksigen, menyebabkan kandungan oksigen dalam air berkurang dan hidupan akuatik mati.",
    "ref": "Unit 9, m/s 152, 163"
  },
  {
    "id": "d6_sci_u9_s2_07",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Bagaimanakah botol minuman plastik terpakai diproses semula di kilang kitar semula untuk dijadikan pakaian seperti kemeja?",
    "options": [
      "Botol dibakar sehingga menjadi abu hitam lalu disapu ke atas kain",
      "Botol digunting terus menjadi bentuk lengan baju",
      "Botol direndam di dalam air cuka selama setahun sehingga bertukar kapas",
      "Botol dibersihkan, diasingkan warna, dihancurkan kepada cebisan kecil menjadi serat plastik, dipintal menjadi benang plastik dan ditenun menjadi fabrik"
    ],
    "correctIndex": 3,
    "explanation": "Kira-kira lapan botol plastik dibersihkan, diasingkan warna, dihancurkan menjadi serat plastik, dipintal menjadi benang dan ditenun menjadi fabrik pakaian.",
    "ref": "Unit 9, m/s 154"
  },
  {
    "id": "d6_sci_u9_s2_08",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Apakah langkah yang betul dalam carta alir pengurusan bahan buangan terancang bagi sisa yang BOLEH TERURAI selepas dikutip oleh pihak berkuasa tempatan dan diasingkan di pusat pengumpulan?",
    "options": [
      "Dihantar terus ke kilang pemprosesan plastik",
      "Dibuang terus ke laut dalam",
      "Dihantar ke pusat baja kompos",
      "Dihantar ke tapak pelupusan bersama sisa toksik"
    ],
    "correctIndex": 2,
    "explanation": "Mengikut carta pengurusan terancang buku teks, bahan boleh terurai diasingkan ke pusat baja kompos, bahan boleh dikitar semula ke kilang kitar semula, dan baki ke tempat pelupusan.",
    "ref": "Unit 9, m/s 160"
  },
  {
    "id": "d6_sci_u9_s2_09",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Murid Tahun 6 membuat projek baja kompos menggunakan bekas berlubang yang diisi berselang-seli dengan lapisan tanah dan cebisan sisa sayur, kulit telur, kulit pisang serta daun kering. Mengapakah campuran itu perlu disembur air setiap hari dan digaul seminggu sekali?",
    "options": [
      "Untuk mencuci sisa sayur supaya kembali segar dimakan",
      "Untuk menenggelamkan semua daun kering supaya menjadi bahan tidak terbiodegradasi",
      "Membekalkan kelembapan dan aliran udara yang mencukupi agar mikroorganisma dapat menguraikan bahan organik dengan cekap menjadi baja kompos",
      "Untuk mematikan kesemua bakteria dan fungi di dalam bekas"
    ],
    "correctIndex": 2,
    "explanation": "Mikroorganisma pengurai memerlukan air dan udara (melalui lubang bekas serta penggaulan berkala) untuk menguraikan sisa organik menjadi baja kompos.",
    "ref": "Unit 9, m/s 162"
  },
  {
    "id": "d6_sci_u9_s2_10",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Sebuah bandar kerap mengalami banjir kilat setiap kali hujan lebat dan ditemui banyak botol plastik, pembungkus makanan dan beg plastik tersekat di dalam sistem perparitan, manakala penyu di pesisir pantai pula didapati mati termakan plastik. Cadangkan gabungan amalan 5R yang paling berkesan untuk menangani punca masalah ini.",
    "options": [
      "Menggunakan tong berwarna biru untuk membuang semua sisa plastik dan makanan bersama-sama",
      "Menolak beg/penyedut plastik sekali guna (Refuse), membawa beg guna semula (Reuse), dan mengasingkan plastik ke tong jingga untuk dikitar semula (Recycle)",
      "Membuang semua plastik ke dalam sungai supaya tidak tersekat di longkang bandar",
      "Membakar sampah plastik secara terbuka di tepi pantai setiap petang"
    ],
    "correctIndex": 1,
    "explanation": "Mengurangkan dan menolak plastik sekali guna, menggunakan beg guna semula serta menyalurkan plastik ke tong jingga kitar semula mencegah sumbatan longkang dan pencemaran laut.",
    "ref": "Unit 9, m/s 153, 159, 161"
  },
  {
    "id": "d6_sci_u10_s1_01",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Bagaimanakah susunan kedudukan objek angkasa dalam satu garis lurus semasa berlakunya GERHANA BULAN?",
    "options": [
      "Matahari – Bumi – Bulan",
      "Matahari – Bulan – Bumi",
      "Bumi – Matahari – Bulan",
      "Bulan – Matahari – Bumi"
    ],
    "correctIndex": 0,
    "explanation": "Gerhana Bulan berlaku apabila Bumi berada di antara Matahari dengan Bulan dalam satu garis lurus.",
    "ref": "Unit 10, m/s 166, 176"
  },
  {
    "id": "d6_sci_u10_s1_02",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Gerhana Matahari hanya berlaku semasa fasa _____ dan pada waktu _____.",
    "options": [
      "Bulan purnama; waktu malam",
      "Bulan separa; waktu senja sahaja",
      "Bulan sabit; waktu tengah malam",
      "Bulan baharu; waktu siang"
    ],
    "correctIndex": 3,
    "explanation": "Gerhana Matahari hanya berlaku semasa fasa Bulan baharu (apabila Bulan di antara Matahari dengan Bumi) dan pada waktu siang.",
    "ref": "Unit 10, m/s 168, 176"
  },
  {
    "id": "d6_sci_u10_s1_03",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Semasa fasa Bulan manakah fenomena gerhana Bulan dapat berlaku?",
    "options": [
      "Bulan baharu",
      "Bulan sabit",
      "Bulan hampir purnama",
      "Bulan purnama"
    ],
    "correctIndex": 3,
    "explanation": "Gerhana Bulan hanya berlaku semasa fasa Bulan purnama apabila Bumi berada di antara Matahari dan Bulan.",
    "ref": "Unit 10, m/s 166, 176"
  },
  {
    "id": "d6_sci_u10_s1_04",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Semasa fenomena gerhana Matahari, bayang-bayang objek manakah yang terbentuk di atas permukaan Bumi?",
    "options": [
      "Bayang-bayang Bumi",
      "Bayang-bayang Matahari",
      "Bayang-bayang Bulan",
      "Bayang-bayang planet Marikh"
    ],
    "correctIndex": 2,
    "explanation": "Bulan menghalang cahaya matahari daripada sampai ke Bumi lalu membentuk bayang-bayang Bulan di permukaan Bumi.",
    "ref": "Unit 10, m/s 168"
  },
  {
    "id": "d6_sci_u10_s1_05",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Mengapakah Bulan masih kelihatan berwarna merah keperangan semasa gerhana Bulan penuh dan bukan gelap sepenuhnya?",
    "options": [
      "Kerana Bulan mengeluarkan api merah dari dalam permukaannya",
      "Kerana kesan serakan dan pembiasan cahaya matahari melalui atmosfera Bumi",
      "Kerana cahaya lampu bandar di Bumi memantul ke Bulan",
      "Kerana Matahari berubah warna menjadi merah setiap bulan"
    ],
    "correctIndex": 1,
    "explanation": "Warna perang kemerahan semasa gerhana Bulan penuh disebabkan oleh serakan dan pembiasan cahaya matahari melalui atmosfera Bumi.",
    "ref": "Unit 10, m/s 166, 171"
  },
  {
    "id": "d6_sci_u10_s1_06",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Walaupun fasa Bulan purnama dan fasa Bulan baharu berulang setiap bulan, mengapakah gerhana Bulan dan gerhana Matahari TIDAK berlaku pada setiap bulan?",
    "options": [
      "Kerana orbit Bulan yang mengelilingi Bumi condong kira-kira 5° kepada orbit Bumi mengelilingi Matahari, jadi ketiga-tiganya tidak sentiasa sebaris lurus",
      "Kerana Matahari sentiasa menukar jaraknya daripada Bumi setiap minggu",
      "Kerana Bulan berhenti mengorbit Bumi selama enam bulan setahun",
      "Kerana awan tebal menutup cahaya matahari di angkasa lepas"
    ],
    "correctIndex": 0,
    "explanation": "Kecondongan orbit Bulan sekitar 5° menyebabkan Bulan sering berada di atas atau di bawah garisan lurus bayang-bayang Bumi/Matahari.",
    "ref": "Unit 10, m/s 167, 169"
  },
  {
    "id": "d6_sci_u10_s1_07",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Dalam aktiviti simulasi model gerhana menggunakan lampu suluh, plastisin sfera pada tengah bulatan plastik, dan kepala jarum peniti di tepi bulatan, apakah yang diwakili oleh setiap alat tersebut?",
    "options": [
      "Lampu suluh: Matahari; Plastisin sfera: Bumi; Kepala jarum peniti: Bulan",
      "Lampu suluh: Bulan; Plastisin sfera: Matahari; Jarum peniti: Bumi",
      "Lampu suluh: Bintang jauh; Plastisin sfera: Bulan; Jarum peniti: Bumi",
      "Lampu suluh: Bumi; Plastisin sfera: Matahari; Jarum peniti: Awan"
    ],
    "correctIndex": 0,
    "explanation": "Lampu suluh bertindak sebagai sumber cahaya (Matahari), sfera plastisin di tengah mewakili Bumi, dan kepala jarum peniti yang mengorbit di tepi mewakili Bulan.",
    "ref": "Unit 10, m/s 170"
  },
  {
    "id": "d6_sci_u10_s1_08",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Pada pukul 9:45 malam hingga 11:10 malam, penduduk Malaysia menyaksikan sebahagian dan keseluruhan permukaan Bulan menjadi gelap keperangan sebelum cerah semula. Apakah jenis gerhana ini dan kedudukan Bulan?",
    "options": [
      "Gerhana Matahari kerana Bulan menutup Matahari",
      "Gerhana Matahari kerana Bumi menghalang cahaya Bulan",
      "Gerhana Bulan kerana fasa Bulan berada pada peringkat Bulan baharu",
      "Gerhana Bulan kerana Bulan mengorbit merentasi kawasan bayang-bayang Bumi"
    ],
    "correctIndex": 3,
    "explanation": "Kejadian pada waktu malam melibatkan Bulan purnama memasuki bayang-bayang Bumi ialah fenomena gerhana Bulan.",
    "ref": "Unit 10, m/s 166, 171"
  },
  {
    "id": "d6_sci_u10_s1_09",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Mengapakah gerhana Bulan boleh disaksikan dalam tempoh lebih lama dan di kawasan Bumi yang lebih luas berbanding gerhana Matahari?",
    "options": [
      "Kerana saiz Bulan jauh lebih besar daripada Bumi dan bayangnya meliputi separuh sistem suria",
      "Kerana cahaya matahari bergerak dalam bentuk lengkungan semasa waktu malam",
      "Kerana Bumi jauh lebih besar daripada Bulan, maka bayang-bayang Bumi yang terbentuk pada Bulan lebih besar berbanding bayang-bayang kecil Bulan di permukaan Bumi",
      "Kerana kelajuan putaran Bumi berhenti setiap kali fasa Bulan purnama"
    ],
    "correctIndex": 2,
    "explanation": "Bumi lebih besar daripada Bulan sehingga menghasilkan kon bayang-bayang Bumi yang besar untuk dilalui Bulan, manakala bayang Bulan yang jatuh ke Bumi jauh lebih sempit.",
    "ref": "Unit 10, m/s 166, 168, 171-172"
  },
  {
    "id": "d6_sci_u10_s1_10",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Pada satu fasa Bulan baharu, orbit Bulan berada kira-kira 5° di atas garisan antara Matahari dan Bumi sehingga bayang-bayang Bulan jatuh di atas Bumi di angkasa. Apakah fenomena yang berlaku di Bumi pada waktu itu?",
    "options": [
      "Gerhana Matahari penuh berlaku di seluruh khatulistiwa",
      "Tiada gerhana Matahari berlaku kerana bayang-bayang Bulan tidak terkena pada permukaan Bumi",
      "Gerhana Bulan separa berlaku pada waktu tengah hari",
      "Matahari terbenam selama dua jam lebih awal"
    ],
    "correctIndex": 1,
    "explanation": "Jika bayang-bayang Bulan berada di atas atau di bawah Bumi akibat kecondongan orbit 5°, ia tidak jatuh ke permukaan Bumi maka tiada gerhana Matahari berlaku.",
    "ref": "Unit 10, m/s 169"
  },
  {
    "id": "d6_sci_u10_s2_01",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah dua sifat cahaya yang berkait rapat dengan pembentukan bayang-bayang umbra dan penumbra semasa kejadian gerhana?",
    "options": [
      "Cahaya bergerak secara berlingkar dan menembusi objek legap",
      "Cahaya bergerak dalam satu garis lurus dan tidak dapat menembusi objek legap seperti Bumi dan Bulan",
      "Cahaya boleh membengkok melepasi objek legap tanpa membentuk bayang",
      "Cahaya hanya bergerak pada waktu siang sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Cahaya bergerak dalam garis lurus dan dihalang oleh objek legap (Bumi dan Bulan), menghasilkan kawasan bayang umbra dan penumbra.",
    "ref": "Unit 10, m/s 171, 176"
  },
  {
    "id": "d6_sci_u10_s2_02",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah perbezaan antara bayangan UMBRA dengan bayangan PENUMBRA?",
    "options": [
      "Umbra ialah bahagian bayang-bayang yang sangat gelap, manakala penumbra ialah kawasan sebahagiannya gelap di sekeliling umbra",
      "Umbra ialah kawasan terang benderang, penumbra ialah kawasan gelap sepenuhnya",
      "Umbra hanya wujud semasa gerhana Bulan, penumbra hanya semasa gerhana Matahari",
      "Umbra selalu lebih besar daripada penumbra semasa gerhana Matahari"
    ],
    "correctIndex": 0,
    "explanation": "Umbra ialah teras bayang yang sangat gelap dan kecil, manakala penumbra ialah kawasan sebahagian gelap di sekeliling umbra.",
    "ref": "Unit 10, m/s 168, 172"
  },
  {
    "id": "d6_sci_u10_s2_03",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah bahaya melihat gerhana Matahari secara terus dengan mata kasar tanpa penuras cahaya?",
    "options": [
      "Menyebabkan kulit tangan menjadi gelap",
      "Tiada sebarang bahaya kerana cahaya Matahari tertutup",
      "Menyebabkan kita tidak dapat melihat Bulan purnama lagi",
      "Boleh merosakkan mata selama-lamanya"
    ],
    "correctIndex": 3,
    "explanation": "Melihat Matahari atau gerhana Matahari secara terus dengan mata kasar sangat berbahaya dan boleh merosakkan mata secara kekal.",
    "ref": "Unit 10, m/s 173, 176"
  },
  {
    "id": "d6_sci_u10_s2_04",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Antara alat berikut, yang manakah SELAMAT digunakan untuk menyaksikan fenomena gerhana Matahari?",
    "options": [
      "Kanta pembesar biasa dan cermin mata hitam biasa",
      "Teropong biasa tanpa penuras",
      "Cermin mata khas berturas penuras suria atau kamera lubang jarum",
      "Mata kasar dari atas bumbung rumah"
    ],
    "correctIndex": 2,
    "explanation": "Gerhana Matahari hanya boleh dilihat menggunakan cermin mata khas berturas atau secara tidak langsung melalui kamera lubang jarum.",
    "ref": "Unit 10, m/s 173, 175, 225"
  },
  {
    "id": "d6_sci_u10_s2_05",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah perubahan keadaan persekitaran di Bumi semasa berlakunya gerhana Matahari penuh pada waktu siang?",
    "options": [
      "Langit menjadi semakin cerah dan suhu meningkat mendadak",
      "Semua air laut surut sepenuhnya dalam sekelip mata",
      "Keadaan sekeliling menjadi semakin gelap seperti waktu malam, suhu menurun dan haiwan pulang ke sarangnya",
      "Haiwan nokturnal masuk tidur manakala burung siang terus berkicau riang"
    ],
    "correctIndex": 2,
    "explanation": "Semasa gerhana Matahari penuh, cahaya matahari terhalang menjadikan persekitaran gelap, suhu menurun dan haiwan pulang ke sarang.",
    "ref": "Unit 10, m/s 174, 176"
  },
  {
    "id": "d6_sci_u10_s2_06",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Mengapakah gerhana Bulan SELAMAT dilihat secara terus menggunakan mata kasar berbanding gerhana Matahari?",
    "options": [
      "Kerana jarak Bulan lebih jauh daripada Matahari",
      "Kerana Bulan tidak memancarkan cahaya sendiri, sebaliknya hanya memantulkan cahaya matahari ke Bumi dalam keamatan yang rendah",
      "Kerana gerhana Bulan berlaku pada waktu siang ketika matahari terang",
      "Kerana atmosfera Bumi menukarkan cahaya Bulan menjadi cahaya sejuk"
    ],
    "correctIndex": 1,
    "explanation": "Bulan tidak menghasilkan cahaya sendiri dan hanya memantulkan cahaya matahari, jadi melihat gerhana Bulan dengan mata kasar adalah selamat.",
    "ref": "Unit 10, m/s 171, 225"
  },
  {
    "id": "d6_sci_u10_s2_07",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Apakah fenomena gerhana Matahari yang dapat disaksikan oleh penduduk yang berada di sepanjang kawasan lintasan bayangan UMBRA berbanding PENUMBRA?",
    "options": [
      "Umbra: gerhana Matahari penuh dan gerhana Matahari separa; Penumbra: gerhana Matahari separa sahaja",
      "Umbra: gerhana Matahari separa sahaja; Penumbra: gerhana Matahari penuh",
      "Umbra: gerhana Bulan penuh; Penumbra: gerhana Bulan separa",
      "Kedua-dua kawasan hanya dapat melihat gerhana Matahari penuh"
    ],
    "correctIndex": 0,
    "explanation": "Sepanjang lintasan umbra dapat menyaksikan gerhana Matahari penuh dan separa, manakala kawasan penumbra hanya menyaksikan gerhana Matahari separa.",
    "ref": "Unit 10, m/s 168, 172, 176"
  },
  {
    "id": "d6_sci_u10_s2_08",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Apakah perubahan yang berlaku kepada keadaan air laut di jeti semasa fenomena gerhana Bulan berbanding fasa Bulan sabit?",
    "options": [
      "Paras air laut menjadi amat cetek dan kering",
      "Air laut bertukar warna menjadi merah terang",
      "Tiada sebarang pasang surut berlaku di laut",
      "Kedudukan air laut pasang menjadi lebih tinggi daripada kebiasaan"
    ],
    "correctIndex": 3,
    "explanation": "Semasa gerhana Bulan (fasa Bulan purnama sejajar dengan Bumi dan Matahari), paras air laut pasang adalah lebih tinggi daripada kebiasaan.",
    "ref": "Unit 10, m/s 175-176"
  },
  {
    "id": "d6_sci_u10_s2_09",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Semasa gerhana Matahari di Sarawak pada 26 Disember 2019, sekumpulan murid membina kamera lubang jarum menggunakan kadbod dan kerajang aluminium yang ditebuk lubang halus. Bagaimanakah mereka menggunakan alat ini dengan selamat?",
    "options": [
      "Mengintai Matahari secara terus melalui lubang jarum tersebut dengan sebelah mata",
      "Meletakkan kamera di dalam besen air untuk memantulkan sinar matahari ke mata",
      "Memakai kerajang aluminium itu di atas kanta cermin mata hitam",
      "Membiarkan cahaya matahari melalui lubang jarum supaya membentuk imej unjuran yang jelas di atas sekeping kadbod putih lain untuk diperhatikan"
    ],
    "correctIndex": 3,
    "explanation": "Kamera lubang jarum memancarkan imej matahari ke atas permukaan skrin kadbod kedua, membolehkan pemerhatian secara tidak langsung dan selamat.",
    "ref": "Unit 10, m/s 175"
  },
  {
    "id": "d6_sci_u10_s2_10",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Dalam satu rajah gerhana Bulan, kedudukan A berada di zon penumbra Bumi manakala kedudukan B di zon umbra Bumi sepenuhnya. Jika Bulan bergerak dari kedudukan A ke kedudukan B, apakah urutan fasa gerhana yang diperhatikan dari Bumi?",
    "options": [
      "Gerhana Matahari separa -> Gerhana Matahari penuh",
      "Gerhana Bulan penuh -> Bulan sabit",
      "Gerhana Bulan separa -> Gerhana Bulan penuh",
      "Bulan baharu -> Gerhana Bulan separa"
    ],
    "correctIndex": 2,
    "explanation": "Apabila Bulan melintasi penumbra (A) ia mengalami gerhana Bulan separa, dan apabila masuk sepenuhnya ke umbra (B) ia mengalami gerhana Bulan penuh.",
    "ref": "Unit 10, m/s 171"
  },
  {
    "id": "d6_sci_u11_s1_01",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan galaksi?",
    "options": [
      "Sebiji planet besar yang mengorbit Matahari bersama asteroid",
      "Suatu sistem yang terdiri daripada berjuta-juta bintang, gas, debu dan jirim lain",
      "Satu lapisan atmosfera di sekeliling Bumi yang memantulkan cahaya",
      "Kumpulan lapan planet di dalam Sistem Suria sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Galaksi ialah suatu sistem yang terdiri daripada berjuta-juta bintang, gas, debu dan jirim lain yang mengorbit pusat galaksi masing-masing.",
    "ref": "Unit 11, m/s 180, 190"
  },
  {
    "id": "d6_sci_u11_s1_02",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah tiga jenis bentuk galaksi utama yang ditunjukkan dalam buku teks Sains Tahun 6?",
    "options": [
      "Galaksi elips, galaksi berpilin dan galaksi tidak sekata",
      "Kubus, sfera dan silinder",
      "Galaksi segitiga, galaksi kekuda dan galaksi kubah",
      "Galaksi kecil, galaksi sederhana dan galaksi purnama"
    ],
    "correctIndex": 0,
    "explanation": "Tiga jenis bentuk galaksi yang diperkenalkan ialah galaksi elips, galaksi berpilin dan galaksi tidak sekata.",
    "ref": "Unit 11, m/s 182"
  },
  {
    "id": "d6_sci_u11_s1_03",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah bentuk khusus bagi Galaksi Bima Sakti yang mengandungi Sistem Suria kita?",
    "options": [
      "Galaksi pilin berpalang",
      "Galaksi elips",
      "Galaksi tidak sekata",
      "Galaksi bujur rata"
    ],
    "correctIndex": 0,
    "explanation": "Galaksi Bima Sakti ialah galaksi berbentuk pilin berpalang yang mempunyai dua lengan utama dan pusat palang yang cerah.",
    "ref": "Unit 11, m/s 184, 190"
  },
  {
    "id": "d6_sci_u11_s1_04",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah nama teleskop angkasa yang merakam beribu-ribu titik cahaya kecil di langit yang sebenarnya terdiri daripada galaksi-galaksi jauh?",
    "options": [
      "Teleskop Dasar Laut",
      "Mikroskop Elektron Negara",
      "Kamera Lubang Jarum",
      "Teleskop Angkasa Hubble"
    ],
    "correctIndex": 3,
    "explanation": "Teleskop Angkasa Hubble berjaya merakam imej ribuan galaksi yang kelihatan seperti titik-titik cahaya di alam semesta.",
    "ref": "Unit 11, m/s 180-181"
  },
  {
    "id": "d6_sci_u11_s1_05",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Bagaimanakah rupa pandangan sisi Galaksi Bima Sakti apabila dilihat dari sebelah tepi?",
    "options": [
      "Seperti sebuah kiub bersegi empat tepat",
      "Seperti satu garis lurus tanpa sebarang bonjolan",
      "Seperti sebuah cakera nipis yang membonjol pada bahagian tengah",
      "Seperti dua buah bulan sabit yang terpisah"
    ],
    "correctIndex": 2,
    "explanation": "Pandangan sisi Galaksi Bima Sakti kelihatan seperti sebuah cakera nipis yang membonjol di bahagian tengahnya disebabkan pusat bintang yang tebal.",
    "ref": "Unit 11, m/s 184, 190"
  },
  {
    "id": "d6_sci_u11_s1_06",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Mengapakah ahli astronomi atau orang Roman purba menamakan galaksi kita sebagai Bima Sakti atau Milky Way?",
    "options": [
      "Kerana pusat galaksi menghasilkan cecair putih",
      "Kerana jaluran cahaya bintang yang samar-samar merentangi langit malam kelihatan seumpama tumpahan susu",
      "Kerana hanya terdapat seribu bintang sahaja di dalam galaksi ini",
      "Kerana Bima Sakti hanya kelihatan pada waktu tengah hari"
    ],
    "correctIndex": 1,
    "explanation": "Orang Roman purba menggambarkan jaluran bintang bercahaya samar merentangi langit malam seumpama tumpahan susu di langit.",
    "ref": "Unit 11, m/s 183"
  },
  {
    "id": "d6_sci_u11_s1_07",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Apakah nama galaksi pilin yang besar dan terletak paling hampir dengan kita yang dapat dilihat dengan mata kasar dari hemisfera utara di langit yang sangat gelap?",
    "options": [
      "Galaksi Orion",
      "Galaksi Andromeda",
      "Galaksi Bima Sakti",
      "Galaksi Suria"
    ],
    "correctIndex": 1,
    "explanation": "Galaksi Andromeda ialah galaksi pilin besar yang berada paling dekat dengan galaksi kita.",
    "ref": "Unit 11, m/s 181"
  },
  {
    "id": "d6_sci_u11_s1_08",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Berapakah anggaran bilangan galaksi di alam semesta serta bilangan bintang yang terkandung di dalam sesebuah galaksi?",
    "options": [
      "Berbilion-bilion galaksi dengan setiap galaksi bersaiz daripada beberapa juta hingga beberapa trilion bintang",
      "Hanya 10 galaksi dan setiap galaksi ada 8 bintang",
      "Beratus-ratus galaksi dengan hanya satu bintang di pusatnya",
      "Satu galaksi tunggal sahaja iaitu Galaksi Bima Sakti"
    ],
    "correctIndex": 0,
    "explanation": "Alam semesta mengandungi berbilion-bilion galaksi dengan saiz antara beberapa juta sehingga beberapa trilion bintang yang mengorbit pusat galaksi.",
    "ref": "Unit 11, m/s 180, 190"
  },
  {
    "id": "d6_sci_u11_s1_09",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "H",
    "q": "Dalam satu gambar rajah Galaksi Bima Sakti dari pandangan atas, bahagian P menunjuk kepada jalur bintang cerah dan lurus di tengah, manakala Q menunjuk kepada cabang lengkung yang berputar keluar dari tengah. Padanan bahagian P dan Q ialah:",
    "options": [
      "P: Sistem Suria; Q: Orbit Bumi",
      "P: Galaksi Andromeda; Q: Galaksi tidak sekata",
      "P: Lengan berpilin galaksi; Q: Pusat palang galaksi",
      "P: Pusat palang galaksi; Q: Lengan berpilin galaksi"
    ],
    "correctIndex": 3,
    "explanation": "Sebagai galaksi pilin berpalang, bahagian tengah yang memanjang cerah ialah pusat palang galaksi dan cabang melengkung di luarnya ialah lengan berpilin galaksi.",
    "ref": "Unit 11, m/s 184, 191, 225"
  },
  {
    "id": "d6_sci_u11_s1_10",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "H",
    "q": "Seorang murid melihat gambar ribuan titik kecil yang dirakam Teleskop Angkasa Hubble dan menyangka setiap titik itu hanyalah sebutir bintang. Mengapakah tanggapan itu kurang tepat?",
    "options": [
      "Titik-titik itu sebenarnya hanyalah debu pada kanta teleskop",
      "Semua titik itu ialah lapan buah planet dalam Sistem Suria",
      "Kebanyakan titik cahaya kecil dalam gambar rakaman jauh itu sebenarnya ialah keseluruhan galaksi lain yang setiap satunya mengandungi jutaan atau trilion bintang",
      "Titik-titik tersebut ialah asteroid yang melintasi Bulan"
    ],
    "correctIndex": 2,
    "explanation": "Gambar medan dalam Teleskop Angkasa Hubble memaparkan ribuan galaksi yang kelihatan seperti titik kecil kerana jaraknya yang amat jauh di alam semesta.",
    "ref": "Unit 11, m/s 181"
  },
  {
    "id": "d6_sci_u11_s2_01",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Di manakah terletaknya Sistem Suria kita di dalam Galaksi Bima Sakti?",
    "options": [
      "Tepat di tengah-tengah pusat palang Galaksi Bima Sakti",
      "Di luar kawasan Galaksi Bima Sakti berhampiran Galaksi Andromeda",
      "Di pinggir satu daripada lengan berpilin Galaksi Bima Sakti",
      "Di bahagian atas bonjolan tanpa sebarang bintang"
    ],
    "correctIndex": 2,
    "explanation": "Sistem Suria (Matahari, Bumi dan tujuh planet lain) terletak di pinggir satu daripada lengan berpilin Galaksi Bima Sakti.",
    "ref": "Unit 11, m/s 185"
  },
  {
    "id": "d6_sci_u11_s2_02",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Apakah perbandingan saiz Sistem Suria berbanding saiz keseluruhan Galaksi Bima Sakti?",
    "options": [
      "Saiz Sistem Suria hampir sama besar dengan Galaksi Bima Sakti",
      "Saiz Sistem Suria adalah sangat kecil berbanding saiz Galaksi Bima Sakti",
      "Saiz Sistem Suria dua kali lebih besar daripada Galaksi Bima Sakti",
      "Saiz Matahari meliputi separuh daripada Galaksi Bima Sakti"
    ],
    "correctIndex": 1,
    "explanation": "Sistem Suria hanyalah sebahagian amat kecil di pinggir lengan berpilin Galaksi Bima Sakti yang sangat luas.",
    "ref": "Unit 11, m/s 187, 190"
  },
  {
    "id": "d6_sci_u11_s2_03",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Dalam analogi buku teks Sains Tahun 6, jika saiz Sistem Suria diandaikan sebesar diameter sebatang pensel, bagaimanakah anggaran saiz Galaksi Bima Sakti?",
    "options": [
      "Meliputi seluruh kawasan padang sekolah",
      "Sebesar sekeping pemadam pensel",
      "Sebesar sebuah buku latihan",
      "Sebesar bola hoki sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Analogi menunjukkan jika Sistem Suria sebesar diameter pensel, Galaksi Bima Sakti seluas seluruh kawasan padang sekolah.",
    "ref": "Unit 11, m/s 187, 192"
  },
  {
    "id": "d6_sci_u11_s2_04",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Apakah nama satu-satunya bintang yang berada di pusat Sistem Suria kita?",
    "options": [
      "Bumi",
      "Andromeda",
      "Bulan",
      "Matahari"
    ],
    "correctIndex": 3,
    "explanation": "Matahari ialah bintang di dalam Sistem Suria yang juga merupakan salah satu daripada jutaan bintang di dalam Galaksi Bima Sakti.",
    "ref": "Unit 11, m/s 184-185, 192"
  },
  {
    "id": "d6_sci_u11_s2_05",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Mengapakah kita dapat melihat sebahagian jaluran Galaksi Bima Sakti di langit malam yang gelap di kawasan luar bandar?",
    "options": [
      "Kerana Bima Sakti terletak di antara Bumi dengan Bulan",
      "Kerana Galaksi Bima Sakti beredar di sekeliling Bumi setiap 24 jam",
      "Kerana cahaya lampu bandar memantulkan jaluran putih ke langit",
      "Kerana Bumi berada di dalam Galaksi Bima Sakti dan kedudukannya di pinggir lengan berpilin menghadap ke bahagian lain galaksi"
    ],
    "correctIndex": 3,
    "explanation": "Bumi terletak di dalam Galaksi Bima Sakti (di pinggir lengan berpilin), jadi pada malam yang sangat gelap kita melihat sebahagian cakera dan lengannya dari dalam.",
    "ref": "Unit 11, m/s 179, 183, 185"
  },
  {
    "id": "d6_sci_u11_s2_06",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Selain Matahari, Bumi dan tujuh planet lain, adakah objek seperti asteroid, meteoroid dan komet juga tergolong di dalam Galaksi Bima Sakti?",
    "options": [
      "Tidak, asteroid dan komet hanya wujud di galaksi elips",
      "Tidak, hanya bintang sahaja yang dibenarkan berada di dalam galaksi",
      "Ya, kerana asteroid, meteoroid dan komet merupakan ahli Sistem Suria yang berada di dalam Galaksi Bima Sakti",
      "Hanya komet berada di dalam Bima Sakti manakala planet tidak"
    ],
    "correctIndex": 2,
    "explanation": "Kesemua ahli Sistem Suria termasuk Matahari, lapan planet, asteroid, meteoroid dan komet terletak di dalam Galaksi Bima Sakti.",
    "ref": "Unit 11, m/s 184, 186"
  },
  {
    "id": "d6_sci_u11_s2_07",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Susun struktur alam semesta berikut mengikut urutan saiz daripada yang PALING KECIL kepada yang PALING BESAR.",
    "options": [
      "Galaksi Bima Sakti -> Sistem Suria -> Bumi -> Alam Semesta",
      "Bumi -> Sistem Suria -> Galaksi Bima Sakti -> Alam Semesta",
      "Sistem Suria -> Bumi -> Alam Semesta -> Galaksi Bima Sakti",
      "Alam Semesta -> Galaksi Bima Sakti -> Sistem Suria -> Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Bumi ialah planet dalam Sistem Suria, Sistem Suria ialah sebahagian kecil Galaksi Bima Sakti, dan Bima Sakti ialah satu daripada bilionan galaksi dalam Alam Semesta.",
    "ref": "Unit 11, m/s 184-187"
  },
  {
    "id": "d6_sci_u11_s2_08",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Mengapakah jaluran cahaya Galaksi Bima Sakti sukar dilihat oleh penduduk di pusat bandar besar walaupun pada malam yang tidak berawan?",
    "options": [
      "Kerana cahaya Bima Sakti terlalu samar dan tenggelam oleh cahaya terang lampu bandar",
      "Kerana Bima Sakti hanya kelihatan di kawasan kutub utara",
      "Kerana bangunan tinggi menghalang putaran bintang",
      "Kerana bintang-bintang Bima Sakti padam selepas pukul 8 malam"
    ],
    "correctIndex": 0,
    "explanation": "Galaksi Bima Sakti bercahaya samar-samar, justeru hanya dapat diperhatikan pada waktu malam di kawasan yang sangat gelap dan jauh daripada pencemaran cahaya.",
    "ref": "Unit 11, m/s 179, 183"
  },
  {
    "id": "d6_sci_u11_s2_09",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "H",
    "q": "Dalam simulasi di padang sekolah, murid A berdiri di tengah sebagai pusat Galaksi Bima Sakti, satu bulatan jejari 30 m dilakar sebagai sempadan galaksi, dan sebiji bola hoki diletakkan di titik F berhampiran sempadan luar sebagai Sistem Suria. Jika dalam simulasi lain, saiz Sistem Suria dibesarkan menjadi tiga kali ganda saiz bola hoki tersebut mengikut skala yang sama, berapakah jejari bulatan baharu bagi Galaksi Bima Sakti?",
    "options": [
      "90 m",
      "30 m",
      "10 m",
      "60 m"
    ],
    "correctIndex": 0,
    "explanation": "Apabila skala objek rujukan (bola hoki mewakili Sistem Suria) digandakan sebanyak 3 kali, jejari kawasan yang mewakili Galaksi Bima Sakti turut bertambah 3 kali iaitu 30 m × 3 = 90 m.",
    "ref": "Unit 11, m/s 188"
  },
  {
    "id": "d6_sci_u11_s2_10",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "H",
    "q": "Dalam aktiviti cakera kertas Galaksi Bima Sakti yang diputarkan dengan tali, murid menandakan kedudukan Sistem Suria bukan di lubang tengah cakera, sebaliknya hampir ke tepi cakera. Mengapakah penandaan kedudukan ini penting bagi ketepatan model?",
    "options": [
      "Kerana jika diletakkan di tepi, cakera akan berputar lebih laju",
      "Kerana Matahari mengorbit di luar cakera Galaksi Bima Sakti",
      "Kerana lubang tengah cakera mewakili Bumi sahaja",
      "Kerana ia menggambarkan kedudukan sebenar Sistem Suria di pinggir salah satu lengan berpilin dan bukan di pusat palang galaksi"
    ],
    "correctIndex": 3,
    "explanation": "Menandakan Sistem Suria berhampiran pinggir cakera (bukan pusat) menepati kedudukan astronomi sebenar Sistem Suria pada lengan berpilin Bima Sakti.",
    "ref": "Unit 11, m/s 185-186"
  },
  {
    "id": "d6_sci_u12_s1_01",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan kestabilan objek dan binaan?",
    "options": [
      "Keupayaan objek menampung beban berat tanpa patah",
      "Ketahanan bahan logam terhadap karat dalam jangka masa panjang",
      "Keupayaan objek dan binaan untuk kekal atau kembali ke kedudukan asalnya",
      "Kebolehan binaan dibina tanpa menggunakan simen"
    ],
    "correctIndex": 2,
    "explanation": "Kestabilan ialah keupayaan objek dan binaan kekal tegak atau kembali ke kedudukan asal tanpa mudah tumbang.",
    "ref": "Unit 12, m/s 194, 209"
  },
  {
    "id": "d6_sci_u12_s1_02",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Apakah dua faktor yang mempengaruhi kestabilan objek dan binaan?",
    "options": [
      "Jenis bahan dan bentuk struktur",
      "Ketinggian dan luas tapak",
      "Warna cat dan suhu persekitaran",
      "Tekanan udara dan daya geseran"
    ],
    "correctIndex": 1,
    "explanation": "Kestabilan dipengaruhi oleh ketinggian dan luas tapak, manakala kekuatan dipengaruhi oleh jenis bahan dan bentuk struktur.",
    "ref": "Unit 12, m/s 195-196, 209"
  },
  {
    "id": "d6_sci_u12_s1_03",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Bagaimanakah ketinggian sesuatu objek mempengaruhi tahap kestabilannya?",
    "options": [
      "Semakin bertambah ketinggian objek, semakin bertambah kestabilannya",
      "Semakin berkurang ketinggian objek (lebih rendah), semakin bertambah kestabilannya",
      "Ketinggian tidak memberi sebarang kesan kepada kestabilan",
      "Objek yang sangat tinggi sentiasa mempunyai pusat graviti di atas tanah"
    ],
    "correctIndex": 1,
    "explanation": "Objek yang lebih rendah mempunyai pusat graviti lebih rendah dan lebih stabil; semakin tinggi objek, semakin berkurang kestabilannya.",
    "ref": "Unit 12, m/s 194-195, 209"
  },
  {
    "id": "d6_sci_u12_s1_04",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Mengapakah zirafah mengangkangkan kedua-dua kaki hadapannya ketika menunduk untuk minum air di sungai?",
    "options": [
      "Untuk meluaskan tapak dan merendahkan ketinggian badannya supaya lebih stabil",
      "Untuk menambahkan kelajuan larian ketika dikejar singa",
      "Untuk mengurangkan geseran kaki di atas pasir",
      "Untuk memudahkan leher menjadi lebih panjang"
    ],
    "correctIndex": 0,
    "explanation": "Mengangkangkan kaki meluaskan tapak dan merendahkan pusat graviti serta ketinggian zirafah supaya tidak tumbang semasa minum.",
    "ref": "Unit 12, m/s 198"
  },
  {
    "id": "d6_sci_u12_s1_05",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan pusat graviti suatu objek?",
    "options": [
      "Bahagian tapak yang paling sempit pada sesuatu binaan",
      "Sudut kecondongan papan apabila blok mula jatuh",
      "Daya tolakan angin terhadap bumbung bangunan",
      "Titik tengah pada ketinggian suatu objek"
    ],
    "correctIndex": 3,
    "explanation": "Pusat graviti ialah titik tengah pada ketinggian suatu objek; semakin rendah pusat graviti, semakin stabil objek itu.",
    "ref": "Unit 12, m/s 194"
  },
  {
    "id": "d6_sci_u12_s1_06",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Pasu bunga A lebih tinggi dan bertapak sempit berbanding pasu bunga B yang rendah dan bertapak lebar. Pasu bunga manakah lebih stabil apabila ditiup angin?",
    "options": [
      "Pasu bunga A kerana ketinggiannya menahan tiupan angin",
      "Kedua-duanya tumbang pada masa yang tepat sama",
      "Pasu bunga B kerana ketinggiannya lebih rendah dan luas tapaknya lebih besar",
      "Pasu bunga A kerana pusat gravitinya lebih tinggi"
    ],
    "correctIndex": 2,
    "explanation": "Ketinggian rendah serta luas tapak yang besar meningkatkan kestabilan objek seperti pasu bunga B.",
    "ref": "Unit 12, m/s 195, 210"
  },
  {
    "id": "d6_sci_u12_s1_07",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Dua blok kayu yang sama saiz (A diletakkan secara melintang pada sisi terlebar, B diberdirikan secara menegak pada sisi tersempit) diletakkan di atas papan nipis yang dicondongkan perlahan-lahan. Blok manakah yang tumbang dahulu dan mengapa?",
    "options": [
      "Blok A tumbang dahulu kerana luas tapaknya besar",
      "Kedua-dua blok menggelongsor tanpa tumbang",
      "Blok B tumbang dahulu kerana lebih tinggi dan luas tapaknya kecil lalu kestabilannya rendah",
      "Blok A tumbang dahulu kerana pusat gravitinya terlalu rendah"
    ],
    "correctIndex": 2,
    "explanation": "Blok B yang diberdirikan lebih tinggi dan bertapak sempit kurang stabil lalu mudah tumbang dahulu apabila papan dicondongkan.",
    "ref": "Unit 12, m/s 210, 225"
  },
  {
    "id": "d6_sci_u12_s1_08",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Adam membina model bertapak 28 cm × 28 cm dan tinggi 20 cm, manakala Raju membina model bertapak 16 cm × 2 cm dan tinggi 32 cm. Bandingkan luas tapak dan kestabilan binaan mereka.",
    "options": [
      "Binaan Raju lebih stabil kerana panjang 32 cm lebih besar daripada 28 cm",
      "Binaan Adam mempunyai luas tapak 784 cm² dan lebih rendah, menjadikannya jauh lebih stabil berbanding binaan Raju (32 cm²)",
      "Luas tapak binaan Raju adalah lebih besar daripada binaan Adam",
      "Kestabilan hanya bergantung kepada warna blok plastik"
    ],
    "correctIndex": 1,
    "explanation": "Luas tapak binaan Adam (784 cm²) lebih besar dan ketinggiannya lebih rendah (20 cm) berbanding Raju (32 cm², tinggi 32 cm).",
    "ref": "Unit 12, m/s 195"
  },
  {
    "id": "d6_sci_u12_s1_09",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "H",
    "q": "Sebuah bas dua tingkat direka supaya semua komponen enjin dan tangki bahan api yang berat diletakkan di bahagian bawah badan bas, bukan di bumbung. Bagaimanakah rekaan ini meningkatkan keselamatan semasa mengambil selekoh?",
    "options": [
      "Menjadikan pusat graviti bas lebih rendah supaya bas lebih stabil dan tidak mudah terbalik",
      "Meninggikan pusat graviti bas supaya tayar kurang bergeser dengan jalan",
      "Mengurangkan luas tapak roda bas di jalan raya",
      "Mengurangkan jumlah jisim keseluruhan bas kepada sifar"
    ],
    "correctIndex": 0,
    "explanation": "Meletakkan beban berat di bahagian bawah merendahkan pusat graviti keseluruhan bas, meningkatkan kestabilannya.",
    "ref": "Unit 12, m/s 194-195"
  },
  {
    "id": "d6_sci_u12_s1_10",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "H",
    "q": "Dalam eksperimen menyiasat hubungan luas tapak dengan kestabilan menggunakan 15 tin minuman sama saiz di atas kadbod yang digoyang ke hadapan dan ke belakang, bagaimanakah cara mendefinisikan secara operasi kestabilan susunan tin itu?",
    "options": [
      "Ketebalan dinding aluminium pada tin minuman",
      "Kelajuan angin daripada kipas siling",
      "Bilangan warna yang dicat pada setiap tin",
      "Masa yang diambil untuk susunan tin mula tumbang apabila kadbod digerakkan berulang kali"
    ],
    "correctIndex": 3,
    "explanation": "Definisi secara operasi kestabilan dalam eksperimen ini diukur melalui tempoh masa yang diambil sebelum tin mula jatuh apabila kadbod digerakkan.",
    "ref": "Unit 12, m/s 197-198, 205"
  },
  {
    "id": "d6_sci_u12_s2_01",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Apakah maksud kekuatan objek dan binaan?",
    "options": [
      "Jisim minimum yang diperlukan untuk menggerakkan kotak",
      "Keupayaan objek kekal berdiri apabila ditiup angin sahaja",
      "Ukuran luas tapak sesuatu jambatan gantung",
      "Keupayaan objek menampung daya yang akan merosakkan atau menukarkan bentuk strukturnya"
    ],
    "correctIndex": 3,
    "explanation": "Kekuatan ialah keupayaan objek atau binaan menampung daya/beban tanpa rosak atau berubah bentuk strukturnya.",
    "ref": "Unit 12, m/s 199, 209"
  },
  {
    "id": "d6_sci_u12_s2_02",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Antara bahan binaan berikut, yang manakah mempunyai sifat sangat kuat, tidak terbakar, tidak berkarat dan tidak mereput?",
    "options": [
      "Kayu",
      "Plastik",
      "Konkrit",
      "Kadbod"
    ],
    "correctIndex": 2,
    "explanation": "Konkrit sangat kuat, tidak terbakar, tidak berkarat dan tidak mereput, menjadikannya bahan binaan utama bangunan moden.",
    "ref": "Unit 12, m/s 199, 209"
  },
  {
    "id": "d6_sci_u12_s2_03",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Bentuk struktur binaan manakah yang terdiri daripada rangkaian tiang berbentuk segi tiga yang mampu menampung beban berat pada bumbung rumah dan jambatan?",
    "options": [
      "Kubah",
      "Kekuda",
      "Lengkungan",
      "Kubus"
    ],
    "correctIndex": 1,
    "explanation": "Bentuk struktur kekuda ialah rangkaian tiang yang membentuk segi tiga dan amat kukuh menampung beban.",
    "ref": "Unit 12, m/s 200"
  },
  {
    "id": "d6_sci_u12_s2_04",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Apakah bentuk struktur berbentuk hemisfera yang sangat kuat dan sering digunakan pada bumbung stadium tanpa memerlukan tiang sokongan di tengah?",
    "options": [
      "Kubah",
      "Alang kuboid",
      "Kekuda rata",
      "Piramid tapak segi empat"
    ],
    "correctIndex": 0,
    "explanation": "Kubah berbentuk hemisfera ialah struktur kuat yang tidak memerlukan tiang sokongan di bahagian tengah ruang seperti bumbung stadium.",
    "ref": "Unit 12, m/s 200"
  },
  {
    "id": "d6_sci_u12_s2_05",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Manakah antara berikut ialah kepentingan membina bangunan dan jambatan yang kuat dan stabil?",
    "options": [
      "Selamat digunakan, tahan lama, tidak mudah rosak dan menjimatkan kos membaik pulih",
      "Struktur mudah runtuh dalam masa setahun supaya dapat dibina semula",
      "Menambahkan beban pencemaran sisa binaan setiap bulan",
      "Memerlukan pengawasan harian daripada pemadam api"
    ],
    "correctIndex": 0,
    "explanation": "Binaan yang kuat dan stabil selamat untuk pengguna, tidak mudah rosak, bertahan lama dan menjimatkan kos penyelenggaraan.",
    "ref": "Unit 12, m/s 206, 209"
  },
  {
    "id": "d6_sci_u12_s2_06",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Mengapakah struktur rumah api di tengah laut biasanya dibina dalam bentuk silinder?",
    "options": [
      "Kerana bentuk silinder menghalang cahaya lampu daripada kelihatan",
      "Kerana bentuk silinder mudah dilipat dan dibawa di dalam bot",
      "Kerana bentuk silinder lebih mudah berkarat apabila terkena air laut",
      "Kerana bentuk silinder mengurangkan rintangan angin serta merupakan bentuk struktur yang teguh dan mantap"
    ],
    "correctIndex": 3,
    "explanation": "Struktur berbentuk silinder teguh, mantap dan mampu mengurangkan rintangan angin kencang di laut atau kawasan tinggi.",
    "ref": "Unit 12, m/s 204"
  },
  {
    "id": "d6_sci_u12_s2_07",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Sebuah jambatan kayu di sebuah kampung telah reput selepas 10 tahun dan tidak selamat dilalui, lalu digantikan dengan jambatan besi yang kekal kukuh. Faktor kekuatan binaan manakah yang ditunjukkan?",
    "options": [
      "Luas tapak",
      "Ketinggian jambatan",
      "Jenis bahan binaan",
      "Arah tiupan angin"
    ],
    "correctIndex": 2,
    "explanation": "Besi ialah logam yang lebih kuat dan tahan lasak berbanding kayu yang boleh mereput apabila terdedah kepada cuaca.",
    "ref": "Unit 12, m/s 199, 206"
  },
  {
    "id": "d6_sci_u12_s2_08",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Dalam uji kaji kekuatan alang kad manila, murid membentuk alang segi tiga, alang silinder dan alang kuboid daripada helaian kad manila bersaiz sama 24 cm × 12 cm lalu menggantung pemberat di tengahnya. Alang manakah paling kuat menampung pemberat paling banyak?",
    "options": [
      "Kepingan kad manila yang rata tanpa lipatan paling kuat",
      "Alang silinder atau alang segi tiga lebih kuat berbanding alang kuboid dan kepingan kad rata",
      "Alang kuboid tanpa lipatan segi tiga mampu menampung beban paling berat",
      "Semua bentuk struktur menampung bilangan pemberat yang tepat sama"
    ],
    "correctIndex": 1,
    "explanation": "Bentuk struktur melengkung (silinder) dan segi tiga mampu mengagihkan daya dengan lebih baik berbanding bentuk kuboid atau kepingan rata.",
    "ref": "Unit 12, m/s 202-204"
  },
  {
    "id": "d6_sci_u12_s2_09",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "H",
    "q": "Seorang jurutera membandingkan jambatan berstruktur lengkungan dengan jambatan alang lurus biasa untuk merentasi lembah sungai yang dilalui lori berat. Mengapakah struktur lengkungan dipilih?",
    "options": [
      "Struktur lengkungan menjadikan permukaan jalan berombak supaya lori bergerak laju",
      "Struktur lengkungan membolehkan beban dari bahagian atas dialirkan ke penyokong tepi sehingga menjadikan jambatan lebih kuat menampung daya",
      "Struktur lengkungan hanya boleh dibuat daripada plastik ringan",
      "Struktur lengkungan menjadikan jambatan lebih tinggi supaya pusat gravitinya meningkat"
    ],
    "correctIndex": 1,
    "explanation": "Bentuk lengkungan menyokong dan mengagihkan daya beban dengan lebih berkesan, meningkatkan kekuatan keseluruhan jambatan.",
    "ref": "Unit 12, m/s 200"
  },
  {
    "id": "d6_sci_u12_s2_10",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "H",
    "q": "Dalam projek kitar semula 'Bangku Botol', murid menggunakan 18 biji botol plastik berpenutup yang dipadankan secara berpasangan (bahagian atas dipotong dan dimasukkan ke botol utuh) lalu diikat rapat berangkai dengan pita pelekat lebar membentuk satu tapak lebar. Mengapakah bangku botol plastik ini mampu menampung berat manusia dengan selamat?",
    "options": [
      "Susunan botol berbentuk silinder yang padat dan rapat menggabungkan kekuatan struktur silinder dan luas tapak yang besar serta rendah untuk kestabilan",
      "Plastik berubah menjadi besi apabila dipotong",
      "Penutup botol menghasilkan tekanan udara rendah di dalam bilik",
      "Pita pelekat lebar menukarkan jisim manusia menjadi lebih ringan"
    ],
    "correctIndex": 0,
    "explanation": "Bentuk silinder setiap botol menyokong daya mampatan secara kuat manakala susunan rapat berkumpulan menghasilkan luas tapak besar serta ketinggian rendah agar stabil.",
    "ref": "Unit 12, m/s 204, 207"
  },
  {
    "id": "d6_sci_u13_s1_01",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan teknologi?",
    "options": [
      "Penggunaan peralatan elektrik mewah untuk hiburan semata-mata",
      "Proses semula jadi tumbuhan menjalankan fotosintesis",
      "Penghasilan bahan buangan elektronik daripada bateri lama",
      "Aplikasi pengetahuan sains untuk membantu mengatasi had keupayaan manusia"
    ],
    "correctIndex": 3,
    "explanation": "Teknologi ialah satu aplikasi pengetahuan sains untuk membantu manusia mengatasi had keupayaan deria dan anggota badan mereka.",
    "ref": "Unit 13, m/s 212, 221"
  },
  {
    "id": "d6_sci_u13_s1_02",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Cikgu Lim perlu menyampaikan ucapan di hadapan ratusan murid di tapak perhimpunan sekolah yang luas tetapi suaranya tidak cukup kuat. Alat manakah mengatasi had keupayaan tersebut?",
    "options": [
      "Mikroskop dan stetoskop",
      "Teleskop dan mesin sinar-X",
      "Mikrofon dan pembesar suara",
      "Telefon dan dron"
    ],
    "correctIndex": 2,
    "explanation": "Mikrofon dan pembesar suara membolehkan suara yang perlahan diperkuat dan didengar dengan jelas oleh orang ramai.",
    "ref": "Unit 13, m/s 212, 222"
  },
  {
    "id": "d6_sci_u13_s1_03",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Seorang doktor menggunakan stetoskop semasa memeriksa pesakit di klinik. Had keupayaan manakah yang diatasi oleh stetoskop?",
    "options": [
      "Mata tidak dapat melihat objek di angkasa lepas",
      "Tangan tidak mampu mengangkat barang berat",
      "Telinga tidak mampu mendengar bunyi yang sangat perlahan seperti degupan jantung",
      "Mata tidak dapat melihat bakteria pada makanan"
    ],
    "correctIndex": 2,
    "explanation": "Stetoskop membantu doktor mengatasi had pendengaran untuk mendengar bunyi perlahan seperti degupan jantung dan pernafasan dengan jelas.",
    "ref": "Unit 13, m/s 213, 221"
  },
  {
    "id": "d6_sci_u13_s1_04",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Apakah kegunaan utama mesin ultra bunyi, mesin sinar-X dan mesin MRI dalam bidang perubatan?",
    "options": [
      "Membaja tanaman di ladang kelapa sawit",
      "Mengesan penyakit atau kecederaan di dalam tubuh manusia yang tidak dapat dilihat dengan mata kasar",
      "Menyampaikan maklumat pembelajaran secara dalam talian",
      "Mengukuhkan struktur rumah pasang siap"
    ],
    "correctIndex": 1,
    "explanation": "Peralatan pengimejan perubatan seperti sinar-X, ultra bunyi dan MRI membantu doktor mengesan penyakit di dalam organ tubuh.",
    "ref": "Unit 13, m/s 215"
  },
  {
    "id": "d6_sci_u13_s1_05",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Penggunaan kapal selam dalam bidang pengangkutan laut bukan sahaja membuktikan kemajuan teknologi kejuruteraan maritim, malah penting untuk _____.",
    "options": [
      "mengukuhkan sistem pertahanan negara",
      "menghasilkan vaksin di dasar laut",
      "menggantikan fungsi terowong SMART",
      "meracun rumpai di sawah padi"
    ],
    "correctIndex": 0,
    "explanation": "Dalam bidang pengangkutan laut, kapal selam mengukuhkan pertahanan negara manakala kapal persiaran membuka peluang pelancongan.",
    "ref": "Unit 13, m/s 216"
  },
  {
    "id": "d6_sci_u13_s1_06",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Padankan had keupayaan manusia dengan ciptaan teknologi yang mengatasinya:\n1. Tidak boleh melihat objek sangat seni\n2. Tidak boleh melihat objek sangat jauh di angkasa\n3. Tidak boleh berkomunikasi dalam jarak jauh",
    "options": [
      "1: Teleskop; 2: Mikroskop; 3: Stetoskop",
      "1: Telefon bimbit; 2: Mikroskop; 3: Teleskop",
      "1: Stetoskop; 2: Mikrofon; 3: Roket",
      "1: Mikroskop; 2: Teleskop; 3: Telefon"
    ],
    "correctIndex": 3,
    "explanation": "Mikroskop untuk objek seni (mikroorganisma), teleskop untuk objek jauh di angkasa (planet/galaksi), dan telefon untuk komunikasi jarak jauh.",
    "ref": "Unit 13, m/s 212-213, 221"
  },
  {
    "id": "d6_sci_u13_s1_07",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Apakah kelebihan pembinaan rumah pasang siap berbanding kaedah pembinaan konvensional bata demi bata di tapak binaan?",
    "options": [
      "Kaedah pasang siap memerlukan masa sepuluh kali lebih lama",
      "Rumah pasang siap tidak memerlukan sebarang asas atau tapak yang stabil",
      "Rumah pasang siap hanya boleh dibina menggunakan kertas dan kayu lembut",
      "Komponen dihasilkan di kilang dan dicantumkan di tapak, menjadikan pembinaan jauh lebih pantas dan kos lebih rendah"
    ],
    "correctIndex": 3,
    "explanation": "Kaedah pasang siap mencantumkan komponen buatan kilang sehingga memendekkan masa pembinaan dan mengurangkan kos.",
    "ref": "Unit 13, m/s 217"
  },
  {
    "id": "d6_sci_u13_s1_08",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Bagaimanakah teknologi pertanian dan penternakan moden seperti dron pembaja, sistem agihan makanan ayam automatik dan bioteknologi penternakan membantu negara?",
    "options": [
      "Menggantikan terus peranan petani di seluruh negara dengan kapal persiaran",
      "Menjadikan tanaman tidak memerlukan air dan cahaya matahari lagi",
      "Memudahkan urusan, menjimatkan masa serta tenaga dan meningkatkan kualiti serta hasil makanan secara berterusan",
      "Menambahkan bilangan serangga perosak di ladang"
    ],
    "correctIndex": 2,
    "explanation": "Teknologi pertanian menjimatkan masa dan tenaga manusia sambil meningkatkan kualiti dan bekalan sumber makanan secara berterusan.",
    "ref": "Unit 13, m/s 214, 222"
  },
  {
    "id": "d6_sci_u13_s1_09",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "H",
    "q": "Pembinaan Terowong Jalan dan Pengurusan Air Banjir (SMART) di Kuala Lumpur merupakan satu kejayaan besar dalam bidang pembinaan. Bagaimanakah terowong dwifungsi ini membantu warga kota?",
    "options": [
      "Mengumpulkan semua sampah plastik daripada sungai untuk dijadikan pakaian",
      "Berfungsi melancarkan laluan kenderaan semasa lalu lintas biasa dan melencongkan air hujan berlebihan untuk mengurangkan kerugian akibat banjir kilat",
      "Menghasilkan tenaga elektrik untuk melancarkan roket angkasa",
      "Menyimpan stok makanan bertin bagi seluruh negara"
    ],
    "correctIndex": 1,
    "explanation": "Terowong SMART menggabungkan fungsi jalan raya dan pengurusan air banjir bagi mengurangkan kemalangan serta kerugian akibat banjir kilat di ibu kota.",
    "ref": "Unit 13, m/s 217"
  },
  {
    "id": "d6_sci_u13_s1_10",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "H",
    "q": "Semasa kelas pembelajaran terpaksa dijalankan dari rumah, murid menyertai kelas video dan menghantar tugasan melalui capaian Internet jalur lebar, manakala seorang pesakit luar bandar mendapatkan ubat hasil penyelidikan vaksin baharu. Apakah persamaan peranan perkembangan teknologi dalam kedua-dua bidang ini?",
    "options": [
      "Kedua-duanya mengatasi kekangan jarak dan meningkatkan kualiti serta keselesaan hidup manusia dalam komunikasi dan perubatan",
      "Kedua-duanya tergolong dalam bidang pengangkutan udara",
      "Kedua-duanya menghapuskan keperluan menjaga sistem saraf manusia",
      "Kedua-duanya hanya berfungsi tanpa capaian elektrik atau kajian sains"
    ],
    "correctIndex": 0,
    "explanation": "Perkembangan komunikasi (jalur lebar/Internet) dan perubatan (ubat/vaksin) saling melengkapi untuk menjadikan kehidupan manusia lebih mudah, sihat dan selesa.",
    "ref": "Unit 13, m/s 215, 217"
  },
  {
    "id": "d6_sci_u13_s2_01",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Apakah kebaikan utama penggunaan dron dalam kerja menyembur racun dan baja di sawah padi?",
    "options": [
      "Membantu petani menjimatkan masa dan tenaga",
      "Menggalakkan penghasilan bahan buangan elektronik",
      "Menghasilkan gas karbon dioksida yang lebih pekat",
      "Merosakkan semua daun tanaman padi"
    ],
    "correctIndex": 0,
    "explanation": "Dron pertanian menyembur kawasan yang luas dengan cepat, sekali gus menjimatkan masa dan tenaga petani.",
    "ref": "Unit 13, m/s 218, 221"
  },
  {
    "id": "d6_sci_u13_s2_02",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Apakah keburukan yang timbul daripada pelupusan bateri litium dron yang mempunyai jangka hayat terhad secara tidak terancang?",
    "options": [
      "Memanjangkan hayat semua tanaman sayur-sayuran",
      "Menambahkan kesuburan tanah di kawasan ladang",
      "Menurunkan suhu bumi di kutub utara",
      "Meningkatkan jumlah bahan buangan elektronik (e-waste) dan mencemarkan alam sekitar"
    ],
    "correctIndex": 3,
    "explanation": "Bateri litium dron mempunyai jangka hayat terhad dan pelupusannya menyumbang kepada lambakan e-waste serta pencemaran alam.",
    "ref": "Unit 13, m/s 218, 221"
  },
  {
    "id": "d6_sci_u13_s2_03",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Apakah risiko atau keburukan apabila ubat-ubatan moden disalahgunakan tanpa nasihat doktor?",
    "options": [
      "Meningkatkan kecergasan badan secara kekal",
      "Mengurangkan pencemaran udara di bandar",
      "Boleh menyebabkan ketagihan dan memudaratkan kesihatan",
      "Menguatkan sistem saraf tunjang dengan serta-merta"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun ubat merawat penyakit, penyalahgunaan ubat-ubatan membawa kepada ketagihan.",
    "ref": "Unit 13, m/s 218, 221"
  },
  {
    "id": "d6_sci_u13_s2_04",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Apakah kesan negatif penggunaan Internet dan perkongsian maklumat digital yang terlalu meluas jika keselamatan siber diabaikan?",
    "options": [
      "Tempoh penghantaran mesej menjadi lebih lambat daripada surat pos",
      "Data peribadi mudah diceroboh dan disalahgunakan oleh pihak tidak bertanggungjawab",
      "Semua pokok hutan di kawasan bukit akan tumbang",
      "Bateri kereta menjadi lebih tahan lama"
    ],
    "correctIndex": 1,
    "explanation": "Keburukan teknologi komunikasi termasuk risiko pencerobohan dan penyalahgunaan data peribadi.",
    "ref": "Unit 13, m/s 219, 221"
  },
  {
    "id": "d6_sci_u13_s2_05",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Pertambahan kenderaan berenjin memudahkan pergerakan manusia, namun apakah kesan buruknya terhadap alam sekitar?",
    "options": [
      "Menghasilkan baja kompos di tepi jalan",
      "Pembebasan gas berbahaya yang menyumbang kepada pencemaran udara",
      "Menaikkan paras oksigen di dalam bandar",
      "Mengelakkan berlakunya pemanasan global"
    ],
    "correctIndex": 1,
    "explanation": "Peningkatan kenderaan berenjin membebaskan gas berbahaya seperti karbon dioksida dan karbon monoksida yang mencemarkan udara.",
    "ref": "Unit 13, m/s 219, 221"
  },
  {
    "id": "d6_sci_u13_s2_06",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Perkembangan teknologi kejenteraan pembinaan membolehkan kawasan berbukit diteroka untuk membina perumahan dan lebuh raya. Apakah kesan sampingan negatif yang perlu dikawal?",
    "options": [
      "Kemusnahan flora dan fauna akibat aktiviti penebangan hutan untuk pembangunan infrastruktur",
      "Ketagihan ubat-ubatan dalam kalangan pekerja binaan",
      "Kekurangan rangkaian jalur lebar di kawasan pantai",
      "Penurunan jumlah kenderaan di jalan raya"
    ],
    "correctIndex": 0,
    "explanation": "Penerokaan hutan dan kawasan berbukit bagi membina infrastruktur boleh memusnahkan habitat serta menjejaskan flora dan fauna.",
    "ref": "Unit 13, m/s 218, 221"
  },
  {
    "id": "d6_sci_u13_s2_07",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Padankan contoh kebaikan dan keburukan dalam bidang yang sama:\nBidang: Komunikasi\nKebaikan: Perkongsian maklumat pantas dan tanpa batas\nKeburukan: _____",
    "options": [
      "Pelupusan bateri litium menyebabkan e-waste",
      "Pembebasan asap hitam daripada ekzos lori",
      "Flora dan fauna musnah akibat penebangan hutan",
      "Data peribadi mudah diceroboh dan disalahgunakan"
    ],
    "correctIndex": 3,
    "explanation": "Dalam bidang komunikasi, kemudahan perkongsian maklumat yang pantas diiringi keburukan pencerobohan data peribadi.",
    "ref": "Unit 13, m/s 219, 221"
  },
  {
    "id": "d6_sci_u13_s2_08",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Mengapakah manusia masih perlu terus mencipta teknologi baharu walaupun teknologi sedia ada kadangkala membawa kesan buruk?",
    "options": [
      "Supaya teknologi baharu dapat lebih banyak menggunakan bahan toksik",
      "Supaya manusia berhenti menggunakan deria penglihatan dan pendengaran",
      "Untuk mencipta inovasi yang lebih mesra alam, cekap dan terus membantu menyelesaikan masalah kehidupan manusia dengan kesan sampingan minimum",
      "Untuk memastikan semua kawasan hutan digantikan dengan bangunan"
    ],
    "correctIndex": 2,
    "explanation": "Inovasi berterusan bertujuan meningkatkan kualiti hidup sambil memperbaiki kelemahan teknologi lama (contohnya kenderaan elektrik atau pertanian hijau).",
    "ref": "Unit 13, m/s 214, 219"
  },
  {
    "id": "d6_sci_u13_s2_09",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "H",
    "q": "Sebuah ladang besar ingin menukar penggunaan jentera semburan berenjin petrol kepada dron elektrik berkuasa bateri litium. Apakah pertimbangan seimbang antara kebaikan dan cabaran yang perlu dirancang oleh pengurus ladang itu?",
    "options": [
      "Bateri litium boleh ditanam terus ke dalam tanah kebun sebagai baja organik",
      "Dron sama sekali tiada kesan buruk terhadap alam sekitar kerana menggunakan bateri",
      "Dron menjimatkan masa dan tenaga serta mengurangkan asap di ladang, namun pengurus perlu merancang pelupusan bateri terpakai secara terurus agar tidak mencetuskan pencemaran e-waste",
      "Dron akan melambatkan kerja membaja berbanding semburan manual"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun dron menjimatkan masa dan tenaga, bateri litium yang tamat hayatnya menjadi bahan buangan elektronik (e-waste) yang mesti diuruskan dengan betul.",
    "ref": "Unit 13, m/s 218"
  },
  {
    "id": "d6_sci_u13_s2_10",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "H",
    "q": "Dalam satu forum tentang kelestarian teknologi, seorang murid berkata: 'Semua teknologi moden harus diharamkan kerana ia menyebabkan pencemaran udara dan pencerobohan data.' Hujah manakah paling tepat untuk membalas kenyataan tersebut secara saintifik?",
    "options": [
      "Teknologi tidak pernah menyebabkan pencemaran udara atau masalah data",
      "Teknologi seperti perubatan, pertanian moden dan komunikasi amat diperlukan untuk kesihatan, bekalan makanan dan kemudahan hidup, justeru penggunaannya hendaklah dikawal secara beretika dan lestari bukannya diharamkan",
      "Pencemaran udara hanya berlaku di kawasan luar bandar tanpa teknologi",
      "Jika semua teknologi diharamkan, manusia masih boleh melihat virus menggunakan mata kasar"
    ],
    "correctIndex": 1,
    "explanation": "Teknologi membawa manfaat besar (merawat penyakit, menghasilkan makanan, memudahkan komunikasi); cabaran negatifnya diatasi melalui kawalan beretika dan inovasi lestari.",
    "ref": "Unit 13, m/s 218-219, 222"
  }
];

  App.Pools.d6.sains = (Array.isArray(App.Pools.d6.sains) ? App.Pools.d6.sains : []).concat(items);
})(typeof window !== "undefined" ? window : globalThis);
