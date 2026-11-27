/**
 * Darjah 6 Reka Bentuk & Teknologi variant question pool (KSSR Semakan 2017, Units 1-3).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, concise explanation, and source ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  const items = [
  {
    "id": "d6_rbt_u1_s1_01",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah maksud produk elektromekanikal dalam reka bentuk teknologi?",
    "options": [
      "Produk yang menggabungkan sistem mekanikal dengan sistem elektrik atau elektronik untuk berfungsi",
      "Produk hiasan yang dibuat daripada kayu dan plastik tanpa sebarang bahagian bergerak",
      "Alatan tangan yang digerakkan sepenuhnya menggunakan tenaga otot manusia",
      "Perkakas dapur yang hanya menggunakan haba tanpa sebarang litar atau gear"
    ],
    "correctIndex": 0,
    "explanation": "Produk elektromekanikal menggabungkan elemen mekanikal (seperti gear, roda atau takal) dengan elemen elektrik atau elektronik (seperti motor, bateri dan suis) supaya dapat beroperasi.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.1"
  },
  {
    "id": "d6_rbt_u1_s1_02",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Antara komponen berikut, yang manakah tergolong dalam elemen elektrik atau elektronik bagi sebuah model kereta mainan bermotor?",
    "options": [
      "Gandar dan roda plastik",
      "Motor arus terus dan suis",
      "Badan kereta daripada kadbod",
      "Takal dan tali getah"
    ],
    "correctIndex": 1,
    "explanation": "Motor arus terus dan suis ialah komponen elektrik atau elektronik, manakala gandar, roda, takal dan tali getah ialah komponen mekanikal atau struktur.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.1"
  },
  {
    "id": "d6_rbt_u1_s1_03",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah fungsi utama sel kering dalam sesuatu projek produk elektromekanikal?",
    "options": [
      "Menukarkan tenaga haba kepada bunyi",
      "Menyambung dan memutuskan litar secara automatik",
      "Membekalkan tenaga elektrik kepada litar projek",
      "Memegang badan projek supaya lebih kukuh"
    ],
    "correctIndex": 2,
    "explanation": "Sel kering atau bateri bertindak sebagai sumber kuasa yang membekalkan tenaga elektrik untuk menggerakkan motor dan komponen lain dalam litar.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_04",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Komponen manakah yang berfungsi menukarkan tenaga elektrik kepada tenaga kinetik atau gerakan putaran dalam model bot?",
    "options": [
      "Suis togel",
      "Pemegang bateri",
      "Wayar penyambung",
      "Motor elektrik"
    ],
    "correctIndex": 3,
    "explanation": "Motor elektrik menukarkan tenaga elektrik daripada bateri kepada tenaga gerakan putaran untuk memusingkan kipas atau roda model bot.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_05",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah peranan suis dalam litar elektrik sebuah model pintu pagar elektrik?",
    "options": [
      "Menghidupkan dan mematikan aliran arus elektrik mengikut keperluan",
      "Menambahkan kelajuan putaran gear secara kekal",
      "Menggantikan fungsi gandar pada roda pintu pagar",
      "Menghasilkan tenaga elektrik apabila pintu pagar ditolak"
    ],
    "correctIndex": 0,
    "explanation": "Suis digunakan untuk menyambung dan memutuskan aliran arus elektrik supaya pengguna dapat mengawal bila pintu pagar perlu dibuka atau dihentikan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_06",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Amir membina sebuah model kren menggunakan motor, bateri, suis, takal dan tali. Mengapakah takal diperlukan bersama motor dalam model kren tersebut?",
    "options": [
      "Untuk menghasilkan arus elektrik tambahan kepada motor",
      "Untuk memindahkan daya tarikan bagi mengangkat beban dengan lebih mudah",
      "Untuk menghentikan aliran elektrik apabila bateri menjadi panas",
      "Untuk mencantikkan bahagian luar badan kren sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Takal ialah komponen mekanikal yang memindahkan daya daripada putaran motor melalui tali untuk mengangkat atau menurunkan beban pada kren.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_07",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Dalam sebuah model kereta kebal mainan, putaran motor elektrik disambungkan kepada gear sebelum menggerakkan roda rantai. Apakah fungsi gear dalam sistem itu?",
    "options": [
      "Menyimpan tenaga elektrik apabila suis dimatikan",
      "Menukarkan warna cahaya lampu pada kereta kebal",
      "Memindahkan dan mengubah kelajuan atau daya putaran dari motor ke roda",
      "Melindungi wayar daripada terputus semasa pemasangan"
    ],
    "correctIndex": 2,
    "explanation": "Gear berfungsi sebagai elemen mekanikal yang memindahkan gerakan putaran serta mengubah kelajuan atau daya kilas dari aci motor ke roda rantai.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_08",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Siti mendapati model botnya masih belum bergerak walaupun kipas sudah dipasang pada motor. Setelah diperiksa, satu daripada wayar penyambung tidak disambung ke pemegang bateri. Apakah kesimpulan yang paling tepat?",
    "options": [
      "Elemen mekanikal pada model bot tersebut terlalu berat",
      "Kipas bot perlu ditukar kepada gear yang lebih besar",
      "Motor elektrik telah rosak kerana menggunakan suis",
      "Litar elektrik tidak lengkap menyebabkan arus elektrik gagal mengalir ke motor"
    ],
    "correctIndex": 3,
    "explanation": "Apabila wayar tidak disambung dengan sempurna ke punca bateri, litar menjadi terbuka dan arus elektrik tidak dapat mengalir untuk menggerakkan motor.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_09",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Sebuah model pintu pagar elektrik dibuka menggunakan motor, gear, trek roda, suis dan bateri. Jika gear pada motor tertanggal daripada gear pada pintu pagar, apakah yang akan berlaku apabila suis dihidupkan?",
    "options": [
      "Motor tetap berputar tetapi pintu pagar tidak bergerak kerana pemindahan daya mekanikal terputus",
      "Pintu pagar tetap bergerak lebih laju kerana tiada beban pada gear",
      "Bateri akan mengecas semula secara automatik kerana motor tidak bekerja",
      "Suis tidak boleh ditekan kerana litar elektrik menjadi terputus"
    ],
    "correctIndex": 0,
    "explanation": "Litar elektrik masih lengkap jadi motor akan berputar, tetapi tanpa sambungan gear, tenaga mekanikal tidak dapat dipindahkan untuk menggerakkan pintu pagar.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s1_10",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Mengapakah gabungan elemen elektrik dan elemen mekanikal penting dalam penghasilan kereta mainan kawalan suis berbanding kereta mainan tolak biasa?",
    "options": [
      "Kereta mainan itu tidak memerlukan sebarang roda atau gandar untuk bergerak",
      "Tenaga elektrik dapat ditukar menjadi gerakan mekanikal yang berterusan apabila suis dihidupkan",
      "Kos pembuatan kereta bermotor sentiasa lebih murah daripada kereta tanpa bateri",
      "Kereta mainan bermotor boleh berfungsi di dalam air tanpa sebarang pengubahsuaian"
    ],
    "correctIndex": 1,
    "explanation": "Sistem elektromekanikal membolehkan kereta bergerak sendiri secara berterusan apabila suis dihidupkan kerana tenaga elektrik daripada bateri memacu motor dan sistem roda.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.1 & 5.2.2"
  },
  {
    "id": "d6_rbt_u1_s2_01",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Apakah tujuan utama menghasilkan lakaran bermaklumat sebelum membina produk elektromekanikal?",
    "options": [
      "Menggantikan keperluan menguji produk selepas siap dibina",
      "Mengelakkan murid daripada menggunakan peralatan memotong di bengkel",
      "Memberi gambaran jelas tentang rupa bentuk, bahan, ukuran dan komponen yang akan digunakan",
      "Memastikan semua murid menghasilkan produk yang sama warna dan saiz"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran bermaklumat membantu murid merancang reka bentuk secara terperinci kerana mengandungi maklumat bahan, ukuran, bentuk serta kedudukan komponen.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.3"
  },
  {
    "id": "d6_rbt_u1_s2_02",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Maklumat manakah yang perlu dicatatkan pada sebuah lakaran bermaklumat model kren elektromekanikal?",
    "options": [
      "Tarikh lahir pereka dan harga jualan di kedai",
      "Nama rakan sekelas yang duduk di sebelah meja",
      "Senarai lagu kegemaran semasa membina projek",
      "Label bahan binaan, dimensi ukuran serta kedudukan motor, suis dan takal"
    ],
    "correctIndex": 3,
    "explanation": "Lakaran bermaklumat mesti menunjukkan maklumat teknikal yang berguna untuk pembinaan seperti jenis bahan, ukuran dan kedudukan komponen elektromekanikal.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.3"
  },
  {
    "id": "d6_rbt_u1_s2_03",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Bilakah penilaian lakaran produk elektromekanikal sebaiknya dilakukan?",
    "options": [
      "Selepas lakaran dihasilkan dan sebelum kerja membina produk dimulakan",
      "Selepas produk siap dicat dan dibentangkan di hadapan kelas",
      "Hanya apabila bateri produk sudah kehabisan tenaga",
      "Selepas semua bahan dipotong tanpa mengikut ukuran"
    ],
    "correctIndex": 0,
    "explanation": "Menilai lakaran sebelum pembinaan membolehkan kelemahan reka bentuk dikesan dan diperbaiki lebih awal tanpa membazirkan bahan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_04",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Antara aspek berikut, yang manakah sesuai dinilai semasa menyemak lakaran sebuah model pintu pagar elektrik?",
    "options": [
      "Bilangan halaman buku latihan yang digunakan",
      "Kesesuaian bahan, keselamatan, kestabilan dan kefungsian sistem pergerakan",
      "Kelajuan murid menulis nota dalam buku teks",
      "Jenama pensel warna yang digunakan pada kertas lukisan"
    ],
    "correctIndex": 1,
    "explanation": "Penilaian lakaran memberi tumpuan kepada aspek kefungsian, keselamatan, kesesuaian bahan, kestabilan struktur dan nilai estetika.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_05",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Apakah maksud membuat penambahbaikan pada lakaran produk elektromekanikal?",
    "options": [
      "Membuang semua catatan ukuran supaya lukisan kelihatan kosong",
      "Menukar projek kepada lukisan pemandangan tanpa komponen elektrik",
      "Mengubah suai atau membetulkan kelemahan reka bentuk pada lakaran supaya produk lebih baik",
      "Meniru bulat-bulat lakaran kumpulan lain tanpa memahami fungsinya"
    ],
    "correctIndex": 2,
    "explanation": "Penambahbaikan bermaksud membaiki atau menambah elemen pada lakaran berdasarkan hasil penilaian agar produk yang bakal dibina lebih berfungsi, selamat dan menarik.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_06",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Farah melakar sebuah model bot bermotor menggunakan kadbod nipis tanpa pelampung atau bahan kalis air. Setelah menilai lakarannya, apakah penambahbaikan paling tepat yang patut dilakukan?",
    "options": [
      "Menambah lebih banyak hiasan kertas di bahagian atas kipas",
      "Mengeluarkan motor dan bateri supaya bot menjadi lebih ringan",
      "Mengurangkan saiz lakaran di atas kertas A4 kepada separuh",
      "Menukar bahan badan bot kepada bahan kalis air dan mudah terapung seperti botol plastik atau polistirena"
    ],
    "correctIndex": 3,
    "explanation": "Kadbod nipis mudah menyerap air dan tenggelam. Menukarnya kepada bahan kalis air yang boleh terapung meningkatkan kefungsian dan ketahanan model bot.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_07",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Dalam lakaran model kereta bermotornya, Hakimi meletakkan pemegang bateri di bahagian paling tinggi di atas bumbung kereta yang sempit. Apakah kelemahan reka bentuk yang boleh dikesan melalui penilaian lakaran ini?",
    "options": [
      "Pusat graviti menjadi tinggi menyebabkan model kereta kurang stabil dan mudah terbalik",
      "Wayar penyambung akan menghasilkan bunyi bising apabila suis ditekan",
      "Roda hadapan tidak boleh berputar walaupun dipasang pada gandar",
      "Sel kering tidak dapat membekalkan arus elektrik jika berada di tempat tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Meletakkan komponen berat seperti bateri terlalu tinggi dan sempit menjejaskan kestabilan struktur. Penilaian lakaran membantu mengesan isu kestabilan ini.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_08",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Lakaran model kren oleh Kumpulan Raj hanya melukis bentuk menara dan tali, tetapi tiada ruang khas untuk meletakkan suis dan pemegang bateri. Mengapakah lakaran itu perlu ditambah baik sebelum membina projek?",
    "options": [
      "Supaya guru tidak perlu memeriksa hasil kerja kumpulan mereka",
      "Supaya susun atur litar elektrik terancang, kemas dan mudah dicapai semasa beroperasi",
      "Supaya model kren boleh berfungsi tanpa memerlukan sebarang sumber kuasa",
      "Supaya bahan binaan tidak perlu diukur atau ditanda terlebih dahulu"
    ],
    "correctIndex": 1,
    "explanation": "Menentukan kedudukan komponen elektrik seperti suis dan pemegang bateri pada lakaran memastikan pemasangan litar nanti kemas, selamat dan berfungsi baik.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.3 & 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_09",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Dua lakaran model kereta kebal dinilai dari segi keselamatan dan kefungsian. Lakaran A meletakkan wayar terdedah di tepi roda rantai yang bergerak, manakala Lakaran B menyembunyikan wayar di dalam ruang badan berpenutup kemas dengan suis di bahagian atas. Lakaran manakah patut dipilih dan mengapa?",
    "options": [
      "Lakaran A kerana wayar mudah terputus jika tersangkut pada roda rantai",
      "Lakaran A kerana susunan wayar di luar menjimatkan masa pemasangan suis",
      "Lakaran B kerana melindungi wayar daripada tersangkut pada bahagian bergerak serta lebih selamat dan kemas",
      "Lakaran B kerana roda rantai tidak lagi memerlukan motor untuk bergerak"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran B lebih baik dari aspek keselamatan, kefungsian dan nilai estetika kerana wayar yang dilindungi dalam badan mengelakkan kerosakan atau tersangkut pada mekanisme roda.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s2_10",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Semasa menilai lakaran model pintu pagar elektrik, Nurin mendapati pintu pagar tiada penyendal pada penghujung landasan. Jika ditambah baik dengan meletakkan penyendal di hujung landasan, apakah kesan positif penambahbaikan itu?",
    "options": [
      "Pintu pagar akan bergerak dua kali ganda lebih laju tanpa bateri",
      "Suis tidak perlu lagi digunakan untuk mengawal pergerakan pintu pagar",
      "Bahan binaan pintu pagar boleh ditukar kepada kertas tisu yang ringan",
      "Pergerakan pintu pagar lebih terkawal dan tidak terbabas keluar dari landasan semasa dibuka"
    ],
    "correctIndex": 3,
    "explanation": "Penambahan penyendal pada penghujung landasan ialah penambahbaikan mekanikal yang memastikan pintu pagar kekal pada laluan yang betul dan tidak terkeluar dari trek.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.4"
  },
  {
    "id": "d6_rbt_u1_s3_01",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Apakah langkah pertama yang perlu dilakukan dalam proses penghasilan projek produk elektromekanikal berdasarkan lakaran?",
    "options": [
      "Mengukur",
      "Membuat kemasan",
      "Menguji kefungsian",
      "Mencantum"
    ],
    "correctIndex": 0,
    "explanation": "Mengikut tujuh langkah penghasilan projek elektromekanikal dalam DSKP, langkah pertama ialah mengukur bahan mengikut dimensi pada lakaran.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_02",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Selepas mengukur dan menanda bahan binaan mengikut lakaran, apakah langkah seterusnya yang perlu dilaksanakan?",
    "options": [
      "Membentangkan projek kepada guru",
      "Memotong bahan mengikut garisan tanda",
      "Menyapu cat kemasan pada papan",
      "Menguji litar elektrik tanpa badan projek"
    ],
    "correctIndex": 1,
    "explanation": "Urutan langkah penghasilan projek ialah mengukur, menanda, memotong, mencantum, membina, menguji kefungsian dan membuat kemasan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_03",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh produk atau model elektromekanikal yang sesuai dihasilkan oleh murid Tahun 6?",
    "options": [
      "Penunu Bunsen dan bikar kaca",
      "Buku skrap sejarah daripada kertas warna",
      "Model kren, model bot atau pintu pagar elektrik",
      "Sudip kayu dan senduk plastik dapur"
    ],
    "correctIndex": 2,
    "explanation": "Contoh produk atau model elektromekanikal yang disenaraikan dalam DSKP termasuk kereta, kereta kebal, bot/kapal, pintu pagar elektrik dan kren.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_04",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Apakah langkah terakhir dalam penghasilan projek elektromekanikal sebelum produk dibentangkan?",
    "options": [
      "Menanda semula ukuran pada bahan baharu",
      "Memotong bahagian yang sudah siap dipasang",
      "Membuka semula semua skru dan gandar",
      "Membuat kemasan supaya produk lebih kemas, selamat dan menarik"
    ],
    "correctIndex": 3,
    "explanation": "Langkah ketujuh atau terakhir ialah membuat kemasan bagi meningkatkan nilai estetika, kekemasan dan keselamatan permukaan produk.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_05",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Apakah amalan keselamatan yang mesti dipatuhi oleh murid semasa memotong dan mencantum bahan projek di bengkel RBT?",
    "options": [
      "Menggunakan alatan yang sesuai dengan cara yang betul serta berhati-hati",
      "Membiarkan gunting dan pisau pemotong berselerak di atas lantai",
      "Menyentuh hujung pistol perekat panas yang sedang dihidupkan",
      "Berlari di dalam bengkel sambil membawa komponen projek"
    ],
    "correctIndex": 0,
    "explanation": "Murid perlu sentiasa menggunakan peralatan yang betul dengan cermat serta mengamalkan langkah keselamatan sepanjang aktiviti amali di bengkel.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_06",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Susunan manakah yang menunjukkan urutan langkah penghasilan projek elektromekanikal yang betul selepas bahan dipotong?",
    "options": [
      "Membuat kemasan -> Membina -> Mencantum -> Menguji kefungsian",
      "Mencantum -> Membina -> Menguji kefungsian -> Membuat kemasan",
      "Menguji kefungsian -> Mencantum -> Membuat kemasan -> Membina",
      "Membina -> Membuat kemasan -> Menguji kefungsian -> Mencantum"
    ],
    "correctIndex": 1,
    "explanation": "Selepas mengukur, menanda dan memotong, murid perlu mencantum, membina produk, menguji kefungsian dan akhirnya membuat kemasan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_07",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Mengapakah langkah menguji kefungsian perlu dilakukan sebelum membuat kemasan akhir pada model kereta kebal?",
    "options": [
      "Supaya cat kemasan dapat mengeringkan wayar elektrik dengan lebih cepat",
      "Kerana bateri hanya boleh dipasang selepas produk dicat sepenuhnya",
      "Untuk memastikan litar dan bahagian mekanikal berfungsi baik supaya pembaikan mudah dibuat tanpa merosakkan kemasan",
      "Untuk mengurangkan bilangan roda yang diperlukan pada kereta kebal"
    ],
    "correctIndex": 2,
    "explanation": "Jika berlaku kerosakan litar atau gear tersekat semasa ujian, pembaikan dapat dibuat dengan mudah sebelum kemasan akhir dilakukan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_08",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Semasa sesi pembentangan produk model kapal bermotor, rakan sekelas menegur bahawa kedudukan suis agak sukar dicapai. Bagaimanakah sikap yang patut ditunjukkan oleh pembentang?",
    "options": [
      "Marah kepada rakan kerana tidak memuji warna model kapal tersebut",
      "Menyembunyikan model kapal dan enggan meneruskan pembentangan",
      "Menuduh guru tidak memberikan masa yang cukup untuk membina projek",
      "Menerima kritikan secara positif dan mencatat cadangan itu sebagai penambahbaikan"
    ],
    "correctIndex": 3,
    "explanation": "Domain afektif dalam RBT menekankan sikap menghargai hasil kerja serta menerima kritikan secara positif dan bertanggungjawab semasa pembentangan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.6"
  },
  {
    "id": "d6_rbt_u1_s3_09",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Daniel terus memotong kepingan papan lapis tanpa mengukur dan menanda terlebih dahulu kerana ingin cepat menyiapkan model pintu pagar elektriknya. Apakah kesan yang paling mungkin berlaku?",
    "options": [
      "Saiz bahagian yang dipotong tidak tepat sehingga sukar dicantum dan membazirkan bahan",
      "Motor elektrik akan berputar ke arah bertentangan secara automatik",
      "Pintu pagar menjadi kalis air dan lebih tahan lama daripada kayu biasa",
      "Langkah membuat kemasan tidak perlu lagi dijalankan pada projek itu"
    ],
    "correctIndex": 0,
    "explanation": "Mengabaikan langkah mengukur dan menanda sebelum memotong menyebabkan potongan tidak menepati ukuran lakaran, sukar dicantum dan mengakibatkan pembaziran bahan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.5"
  },
  {
    "id": "d6_rbt_u1_s3_10",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Untuk mencapai tahap penguasaan tertinggi semasa membentangkan model kren elektromekanikal yang telah dibina secara sistematik dan kemas, apakah perkara utama yang patut dilakukan oleh kumpulan murid tersebut?",
    "options": [
      "Menunjukkan model kren dari jauh tanpa menghidupkan suis atau menerangkan bahannya",
      "Membuat persembahan secara kreatif dengan mendemonstrasikan fungsi kren, menerangkan elemen elektromekanikal serta menjawab soalan dengan bertanggungjawab",
      "Membaca teks buku RBT dari muka surat awal hingga akhir tanpa merujuk produk sendiri",
      "Meminta kumpulan lain membentangkan projek mereka sambil berkemas meja kerja"
    ],
    "correctIndex": 1,
    "explanation": "Pembentangan yang baik menuntut murid membuat persembahan secara kreatif dan bertanggungjawab dengan menerangkan reka bentuk, bahan, elemen elektromekanikal dan menunjukkan kefungsian produk.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 5.2 / SP 5.2.6"
  },
  {
    "id": "d6_rbt_u2_s1_01",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan empat elemen utama dalam sistem robotik?",
    "options": [
      "Sensor, kuasa, kawalan dan pergerakan",
      "Sensor, lampu, warna dan pergerakan",
      "Kuasa, bahan, lakaran dan pergerakan",
      "Kawalan, carta alir, bateri dan hiasan"
    ],
    "correctIndex": 0,
    "explanation": "Mengikut DSKP RBT Tahun 6 (SK 6.5), empat elemen sistem robotik yang perlu ada dalam sesuatu robot ialah sensor, kuasa, kawalan dan pergerakan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.1"
  },
  {
    "id": "d6_rbt_u2_s1_02",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah fungsi elemen kuasa dalam sesebuah sistem robotik?",
    "options": [
      "Mengesan perubahan cahaya atau halangan di hadapan robot",
      "Membekalkan tenaga elektrik supaya robot dapat beroperasi",
      "Memproses semua arahan yang dimasukkan ke dalam atur cara",
      "Menghasilkan bunyi penggera apabila robot berlanggar"
    ],
    "correctIndex": 1,
    "explanation": "Elemen kuasa seperti bateri atau sel kering berfungsi membekalkan tenaga elektrik kepada unit kawalan, sensor dan komponen pergerakan supaya robot dapat berfungsi.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.2"
  },
  {
    "id": "d6_rbt_u2_s1_03",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Elemen sistem robotik yang berfungsi untuk mengesan rangsangan seperti cahaya, bunyi, sentuhan atau halangan ialah ___.",
    "options": [
      "kuasa",
      "kawalan",
      "sensor",
      "pergerakan"
    ],
    "correctIndex": 2,
    "explanation": "Sensor bertindak sebagai deria robot untuk mengesan rangsangan daripada persekitaran seperti cahaya, bunyi, jarak atau sentuhan sebelum menghantar isyarat kepada unit kawalan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.2"
  },
  {
    "id": "d6_rbt_u2_s1_04",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Dalam penghasilan produk robotik di sekolah, apakah bahan yang boleh digunakan untuk membina badan atau struktur produk tersebut?",
    "options": [
      "Hanya logam berat daripada kilang kenderaan",
      "Hanya komponen kaca yang mudah pecah",
      "Hanya bahan plastik baharu yang ditempah khas",
      "Bahan terbuang yang ditambah baik dengan elemen sistem robotik"
    ],
    "correctIndex": 3,
    "explanation": "Catatan SK 6.5 menyatakan bahawa bahan untuk membina produk boleh menggunakan bahan terbuang seperti kotak, botol plastik atau tin yang ditambah baik dan dimasukkan elemen sistem robotik.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / Catatan"
  },
  {
    "id": "d6_rbt_u2_s1_05",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Mengapakah murid perlu menghasilkan lakaran bermaklumat sebelum membina produk robotik?",
    "options": [
      "Untuk menggantikan keperluan menulis atur cara pada komputer",
      "Untuk mengelakkan murid daripada menggunakan sebarang peralatan tangan",
      "Untuk menunjukkan rupa bentuk produk serta kedudukan elemen sistem robotik",
      "Untuk memastikan produk tidak perlu diuji selepas siap dipasang"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran bermaklumat memaparkan reka bentuk produk, bahan yang digunakan serta kedudukan empat elemen sistem robotik bagi memudahkan proses pembinaan dan penyambungan perkakasan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.4"
  },
  {
    "id": "d6_rbt_u2_s1_06",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Aiman membina sebuah robot tong sampah automatik daripada kotak terpakai. Apabila tangan didekatkan ke bahagian atas tong, penutupnya terbuka sendiri. Pasangan elemen manakah yang paling tepat bagi proses tersebut?",
    "options": [
      "Kawalan: penutup terbuka; Pergerakan: kotak terpakai",
      "Sensor: mengesan tangan; Pergerakan: motor membuka penutup",
      "Kuasa: mengesan tangan; Sensor: membekalkan tenaga elektrik",
      "Pergerakan: bateri; Kuasa: motor membuka penutup"
    ],
    "correctIndex": 1,
    "explanation": "Sensor mengesan kehadiran tangan yang menghampiri tong sampah, manakala elemen pergerakan (motor) menggerakkan penutup supaya terbuka.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.2"
  },
  {
    "id": "d6_rbt_u2_s1_07",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Selepas melakar tiga reka bentuk robot pengelap tingkap dan memilih satu lakaran terbaik, apakah tindakan seterusnya yang perlu dilakukan terhadap lakaran tersebut mengikut SP 6.5.5?",
    "options": [
      "Terus membuang dua lakaran lain tanpa membuat sebarang semakan",
      "Menyerahkan lakaran kepada guru tanpa melabelkan bahagiannya",
      "Menilai lakaran yang dipilih untuk membuat penambahbaikan",
      "Menukar terus reka bentuk kepada produk lain tanpa lakaran baharu"
    ],
    "correctIndex": 2,
    "explanation": "Mengikut SP 6.5.5, murid perlu menilai lakaran yang dipilih dari segi kesesuaian bahan, kedudukan elemen robotik dan fungsi untuk membuat penambahbaikan sebelum pembinaan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.5"
  },
  {
    "id": "d6_rbt_u2_s1_08",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Sebuah kereta robotik mempunyai bateri yang penuh dan roda yang dipasang kemas, namun roda tidak berpusing apabila suis dihidupkan kerana unit pengawalnya rosak. Elemen sistem robotik manakah yang terjejas?",
    "options": [
      "Sensor",
      "Kuasa",
      "Pergerakan",
      "Kawalan"
    ],
    "correctIndex": 3,
    "explanation": "Unit pengawal merupakan elemen kawalan yang memproses atur cara dan menghantar arahan kepada motor. Jika elemen kawalan rosak, elemen pergerakan tidak akan menerima arahan untuk beroperasi.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.2"
  },
  {
    "id": "d6_rbt_u2_s1_09",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Farah menilai lakaran robot penyiram pokok automatik yang dibuatnya daripada botol plastik terbuang. Dia mendapati pek bateri diletakkan berhampiran muncung paip air tanpa penutup pelindung. Apakah penambahbaikan terbaik pada lakarannya?",
    "options": [
      "Memindahkan kedudukan pek bateri ke bahagian bertutup yang kalis air dan jauh daripada muncung air",
      "Menggantikan botol plastik terbuang dengan kertas tisu supaya lebih ringan",
      "Membuang elemen kuasa daripada lakaran supaya robot tidak terkena air",
      "Meletakkan sensor sentuhan di dalam air supaya bateri lebih cepat kering"
    ],
    "correctIndex": 0,
    "explanation": "Penilaian lakaran bertujuan mengenal pasti kelemahan keselamatan dan fungsi. Elemen kuasa (pek bateri) mesti dilindungi daripada air bagi mengelakkan litar pintas dan kerosakan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.5"
  },
  {
    "id": "d6_rbt_u2_s1_10",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Sekumpulan murid ingin mencipta robot pengumpul sampah di atas lantai menggunakan bahan terbuang. Mereka sudah memasukkan bateri, motor beroda dan unit pengawal dalam lakaran, tetapi robot perlu berhenti secara automatik sebelum melanggar dinding. Apakah elemen yang masih kurang dan perlu ditambah dalam lakaran?",
    "options": [
      "Elemen kuasa tambahan untuk melajukan pergerakan roda",
      "Elemen sensor untuk mengesan halangan dinding di hadapan robot",
      "Elemen pergerakan kedua untuk menggerakkan dinding",
      "Elemen hiasan berwarna cerah pada badan kotak terbuang"
    ],
    "correctIndex": 1,
    "explanation": "Untuk membolehkan robot mengesan dinding sebelum berlanggar, elemen sensor (seperti sensor jarak atau halangan) perlu ditambah bagi menghantar isyarat kepada elemen kawalan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.4 & 6.5.5"
  },
  {
    "id": "d6_rbt_u2_s2_01",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Mengapakah murid perlu menghasilkan carta alir sebelum menulis atur cara sesebuah robot?",
    "options": [
      "Untuk memaparkan langkah dan urutan tindakan robot secara teratur",
      "Untuk menggantikan bateri sebagai sumber tenaga robot",
      "Untuk melukis rupa luaran badan robot daripada bahan terbuang",
      "Untuk memotong wayar penyambungan perkakasan dengan tepat"
    ],
    "correctIndex": 0,
    "explanation": "Carta alir membantu murid merancang urutan langkah operasi robot dari mula hingga tamat supaya penulisan atur cara lebih tersusun dan mudah disemak.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.6"
  },
  {
    "id": "d6_rbt_u2_s2_02",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Atur cara yang dibina untuk menggerakkan robot hendaklah dihasilkan berpandukan ___.",
    "options": [
      "harga komponen di pasaran",
      "bilangan ahli kumpulan pembina",
      "warna bahan terbuang yang dipilih",
      "carta alir yang telah dibuat"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut SP 6.5.7, murid menghasilkan atur cara yang dikehendaki berpandukan carta alir yang telah dibuat sebelumnya.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.7"
  },
  {
    "id": "d6_rbt_u2_s2_03",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah tujuan membuat simulasi terhadap atur cara robot yang telah dibina pada komputer?",
    "options": [
      "Untuk mengecas bateri robot dengan lebih pantas",
      "Untuk mencantikkan kulit luar bahan terbuang",
      "Untuk menguji perjalanan atur cara dan mengesan kesilapan sebelum dipindahkan ke perkakasan",
      "Untuk memadamkan semua kod atur cara yang telah ditulis"
    ],
    "correctIndex": 2,
    "explanation": "Simulasi membolehkan murid melihat bagaimana atur cara bertindak balas secara maya bagi mengesan sebarang ralat logik dan membuat penambahbaikan sebelum dipindahkan ke perkakasan sebenar.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / Catatan (SP 6.5.7)"
  },
  {
    "id": "d6_rbt_u2_s2_04",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Dalam sebuah carta alir robot lampu malam automatik, simbol manakah yang biasanya digunakan untuk menguji syarat 'Adakah persekitaran gelap?'?",
    "options": [
      "Simbol terminal (bujur)",
      "Simbol proses (segi empat tepat)",
      "Garis anak panah aliran",
      "Simbol pilihan atau syarat (rombus/berlian)"
    ],
    "correctIndex": 3,
    "explanation": "Simbol pilihan berbentuk rombus/berlian digunakan dalam carta alir untuk menguji syarat yang menghasilkan keputusan 'Ya' atau 'Tidak', seperti menyemak keadaan gelap atau terang.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.6"
  },
  {
    "id": "d6_rbt_u2_s2_05",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Susunan manakah yang menunjukkan langkah kerja paling tepat dalam pembangunan perisian robot?",
    "options": [
      "Hasilkan carta alir -> Bina atur cara -> Jalankan simulasi -> Buat penambahbaikan",
      "Jalankan simulasi -> Bina atur cara -> Hasilkan carta alir -> Buat lakaran",
      "Buat penambahbaikan -> Hasilkan carta alir -> Bina atur cara -> Jalankan simulasi",
      "Bina atur cara -> Buang carta alir -> Terus pindahkan ke perkakasan"
    ],
    "correctIndex": 0,
    "explanation": "Urutan yang sistematik mengikut DSKP bermula dengan menghasilkan carta alir (SP 6.5.6), menghasilkan atur cara berpandukan carta alir (SP 6.5.7), membuat simulasi dan melakukan penambahbaikan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.6 & 6.5.7"
  },
  {
    "id": "d6_rbt_u2_s2_06",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Sebuah robot kereta mempunyai carta alir berikut: Mula -> Gerak ke hadapan -> Jika sensor mengesan halangan, berhenti dan undur selama 2 saat -> Ulang langkah. Jika tiada halangan dikesan, apakah tindakan robot tersebut?",
    "options": [
      "Berhenti serta-merta dan berundur selama 2 saat",
      "Terus bergerak ke hadapan",
      "Mematikan bekalan kuasa bateri",
      "Berputar di tempat yang sama tanpa bergerak"
    ],
    "correctIndex": 1,
    "explanation": "Berdasarkan syarat dalam carta alir, tindakan berhenti dan berundur hanya berlaku jika sensor mengesan halangan. Jika tiada halangan, robot terus bergerak ke hadapan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.6"
  },
  {
    "id": "d6_rbt_u2_s2_07",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Semasa menjalankan simulasi atur cara robot palang automatik, Danial mendapati palang turun semula terlalu cepat iaitu selepas 1 saat, sedangkan kereta mainan masih belum sempat melintas. Apakah penambahbaikan atur cara yang perlu dibuat oleh Danial?",
    "options": [
      "Memadamkan arahan sensor daripada atur cara",
      "Menukarkan nama fail atur cara kepada nama baharu",
      "Memanjangkan tempoh masa menunggu sebelum arahan menutup palang dilaksanakan",
      "Mengurangkan kuasa bateri dalam simulasi supaya palang rosak"
    ],
    "correctIndex": 2,
    "explanation": "Hasil simulasi menunjukkan tempoh masa menunggu terlalu singkat. Penambahbaikan dilakukan pada atur cara dengan menambah masa lengah (delay) sebelum palang ditutup.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.7 & Catatan"
  },
  {
    "id": "d6_rbt_u2_s2_08",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Siti membina carta alir bagi robot kipas mini yang hanya berpusing apabila suhu bilik panas. Namun dalam atur caranya, dia terlupa memasukkan blok syarat bacaan sensor dan terus menulis arahan 'hidupkan motor selama-lamanya'. Apakah kesan kesilapan ini semasa simulasi?",
    "options": [
      "Kipas tidak akan berpusing langsung walaupun suhu panas",
      "Kipas akan berpusing apabila suhu sejuk sahaja",
      "Simulasi akan melukis carta alir baharu secara automatik",
      "Kipas akan terus berpusing tanpa henti walaupun suhu bilik tidak panas"
    ],
    "correctIndex": 3,
    "explanation": "Tanpa syarat bacaan sensor dalam atur cara, unit kawalan tidak menyemak keadaan suhu dan terus melaksanakan arahan menghidupkan motor secara berterusan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.7"
  },
  {
    "id": "d6_rbt_u2_s2_09",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Perhatikan penerangan carta alir sebuah robot pengesan garisan hitam: (1) Mula, (2) Baca sensor kiri dan kanan, (3) Jika kedua-dua sensor mengesan warna putih, gerak lurus, (4) Jika sensor kiri mengesan hitam, belok ke kiri, (5) Jika sensor kanan mengesan hitam, belok ke kanan, (6) Ulang langkah 2 hingga 5. Semasa simulasi, apabila kedua-dua sensor serentak mengesan garisan hitam di garisan penamat, robot terus melajak keluar trek kerana tiada arahan untuk keadaan tersebut. Apakah penambahbaikan paling tepat pada carta alir dan atur cara?",
    "options": [
      "Menambah syarat 'Jika kedua-dua sensor mengesan hitam, hentikan motor'",
      "Membuang arahan ulang supaya robot berhenti selepas langkah pertama",
      "Menukarkan arahan belok kiri menjadi gerak lurus",
      "Menggantikan warna garisan trek kepada warna putih sepenuhnya"
    ],
    "correctIndex": 0,
    "explanation": "Dengan menambah cabang syarat apabila kedua-dua sensor mengesan hitam, robot akan berhenti tepat di garisan penamat dan tidak melajak keluar trek.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.6 & 6.5.7"
  },
  {
    "id": "d6_rbt_u2_s2_10",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Hakim menganalisis atur cara robot penggera pintu yang dibuatnya. Mengikut carta alir, penggera sepatutnya berbunyi apabila pintu dibuka (sensor mengesan jarak jauh). Namun dalam simulasi, penggera berbunyi apabila pintu tertutup rapat dan senyap apabila pintu dibuka. Apakah punca masalah dalam atur cara Hakim?",
    "options": [
      "Bateri dalam simulasi telah kehabisan tenaga",
      "Syarat perbandingan jarak dalam atur cara adalah terbalik daripada carta alir",
      "Pintu bahan terbuang terlalu berat untuk digerakkan oleh simulasi",
      "Simbol mula dan tamat dalam carta alir tidak berwarna merah"
    ],
    "correctIndex": 1,
    "explanation": "Tingkah laku yang bertentangan tepat dengan carta alir menunjukkan pengendali syarat (seperti lebih besar/kurang daripada atau benar/palsu) dalam atur cara telah ditulis secara terbalik.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.7 & TP 4"
  },
  {
    "id": "d6_rbt_u2_s3_01",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah panduan utama yang perlu dirujuk oleh murid semasa membina produk dan menyambung perkakasan robot?",
    "options": [
      "Lakaran reka bentuk produk yang telah dipilih dan ditambah baik",
      "Iklan produk robotik di televisyen",
      "Buku latihan mata pelajaran Sejarah",
      "Saiz meja di dalam bengkel sekolah"
    ],
    "correctIndex": 0,
    "explanation": "Mengikut SP 6.5.8, murid membina reka bentuk produk dan penyambungan perkakasan berdasarkan lakaran yang telah dibuat menggunakan peralatan yang sesuai.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.8"
  },
  {
    "id": "d6_rbt_u2_s3_02",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Selepas atur cara berjaya disimulasikan di komputer, apakah langkah seterusnya yang perlu dilakukan mengikut SP 6.5.9?",
    "options": [
      "Menjual produk robotik kepada rakan sekelas",
      "Memindahkan atur cara ke perkakasan robot dan menguji kefungsiannya",
      "Membuka semula semua skru pada badan robot",
      "Memadamkan atur cara dari komputer sebelum diuji"
    ],
    "correctIndex": 1,
    "explanation": "SP 6.5.9 menetapkan bahawa atur cara yang telah dihasilkan perlu dipindahkan pada perkakasan sebenar dan diuji kefungsiannya.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.9"
  },
  {
    "id": "d6_rbt_u2_s3_03",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan amalan keselamatan yang betul semasa memasang perkakasan robotik menggunakan peralatan tangan?",
    "options": [
      "Menyambung wayar kuasa semasa pematerian sedang panas tanpa pengawasan",
      "Menggunakan gunting tumpul untuk menebuk kepingan logam keras",
      "Menggunakan peralatan yang sesuai dan berhati-hati mengikut peraturan bengkel",
      "Membiarkan skru dan wayar terdedah berselerak di atas lantai"
    ],
    "correctIndex": 2,
    "explanation": "Penggunaan peralatan yang sesuai dan pematuhan peraturan keselamatan bengkel penting untuk mengelakkan kecederaan serta memastikan penyambungan perkakasan kemas dan selamat.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.8"
  },
  {
    "id": "d6_rbt_u2_s3_04",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah langkah terakhir selepas produk robotik siap dibina dan diuji kefungsiannya mengikut SP 6.5.10?",
    "options": [
      "Menyimpan robot di dalam stor tanpa sebarang catatan",
      "Menanggalkan semua komponen elektronik daripada badan robot",
      "Menulis semula lakaran pertama tanpa membuat laporan",
      "Membuat rumusan dan membentangkan produk yang telah dibina"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut SP 6.5.10, murid perlu membuat rumusan terhadap projek yang dihasilkan dan membentangkan produk tersebut secara kreatif dan bertanggungjawab.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.10"
  },
  {
    "id": "d6_rbt_u2_s3_05",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Apakah tujuan menguji kefungsian produk robotik selepas atur cara dipindahkan ke perkakasan?",
    "options": [
      "Memastikan perkakasan dan atur cara berfungsi seperti yang dirancang",
      "Menimbang berat bahan terbuang yang digunakan",
      "Mengira bilangan warna pada badan robot",
      "Menghafal nama semua rakan dalam kumpulan"
    ],
    "correctIndex": 0,
    "explanation": "Pengujian kefungsian memastikan penyambungan perkakasan (sensor, kuasa, kawalan, pergerakan) dan atur cara yang dipindahkan benar-benar beroperasi mengikut tujuan reka bentuk.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.9"
  },
  {
    "id": "d6_rbt_u2_s3_06",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Nadia telah siap memasang badan robot daripada botol plastik, menyambung motor, sensor dan pek bateri. Apabila suis dihidupkan, robot tidak melakukan apa-apa tindakan walaupun bateri baharu. Apakah kemungkinan punca yang paling munasabah?",
    "options": [
      "Botol plastik yang digunakan berwarna hijau",
      "Atur cara belum dipindahkan ke unit kawalan atau terdapat penyambungan wayar yang longgar",
      "Nadia belum membentangkan produk tersebut di hadapan kelas",
      "Lakaran produk tidak diwarnakan dengan pensel warna"
    ],
    "correctIndex": 1,
    "explanation": "Jika kuasa sudah ada tetapi robot tidak beroperasi, punca utama biasanya ialah atur cara belum dimuat naik/dipindahkan ke perkakasan atau sambungan wayar pada unit kawalan longgar.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.8 & 6.5.9"
  },
  {
    "id": "d6_rbt_u2_s3_07",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Semasa menjelaskan pemasangan perkakasan pada reka bentuk sebuah robot pengangkut barang, mengapakah kabel penyambungan perlu disusun kemas dan diikat di bahagian dalam atau tepi rangka?",
    "options": [
      "Supaya robot kelihatan lebih berat dan sukar bergerak",
      "Supaya bateri menjadi lebih cepat panas",
      "Supaya wayar tidak tersangkut pada roda yang berpusing atau terputus semasa diuji",
      "Supaya atur cara boleh dipindahkan tanpa komputer"
    ],
    "correctIndex": 2,
    "explanation": "Penyambungan perkakasan yang kemas (TP 6: sistematik dan kemas) mengelakkan wayar daripada tersepit pada bahagian bergerak seperti roda atau tercabut ketika robot beroperasi.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.3 & 6.5.8"
  },
  {
    "id": "d6_rbt_u2_s3_08",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Dalam pembentangan produk robotik (SP 6.5.10), apakah perkara penting yang wajar dimasukkan dalam rumusan oleh sesuatu kumpulan?",
    "options": [
      "Senarai nama murid dari kelas lain yang tidak terlibat",
      "Harga telefon bimbit setiap ahli kumpulan",
      "Cerita rekaan yang tiada kaitan dengan projek",
      "Fungsi produk, kekuatan, kelemahan yang ditemui semasa pengujian serta cadangan penambahbaikan"
    ],
    "correctIndex": 3,
    "explanation": "Rumusan projek yang baik merangkumi pencapaian fungsi produk, cabaran atau kelemahan yang dikesan semasa pengujian kefungsian serta cadangan penambahbaikan pada masa hadapan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.10"
  },
  {
    "id": "d6_rbt_u2_s3_09",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Kumpulan Amir memindahkan atur cara robot penghalang cahaya ke perkakasan. Semasa simulasi di komputer, semuanya berjalan lancar. Namun apabila diuji di atas lantai sebenar, robot bergerak ke belakang sedangkan arahan atur cara meminta ia bergerak ke hadapan. Apakah tindakan semakan yang paling tepat?",
    "options": [
      "Menyemak kekutuban atau arah sambungan wayar motor pada unit kawalan dan memperbaikinya",
      "Membuang sensor cahaya daripada badan robot serta-merta",
      "Menukar lakaran asal supaya robot memang direka untuk bergerak ke belakang",
      "Menggantikan kotak terbuang dengan batu bata supaya lebih perlahan"
    ],
    "correctIndex": 0,
    "explanation": "Apabila simulasi betul tetapi perkakasan bergerak songsang, puncanya ialah sambungan fizikal wayar motor yang terbalik atau arah pemasangan motor yang bertentangan, bukannya kesalahan bahan badan robot.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.8 & 6.5.9"
  },
  {
    "id": "d6_rbt_u2_s3_10",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Semasa pengujian kefungsian robot penyapu mini, didapati sensor halangan berfungsi dengan baik, namun badan robot yang diperbuat daripada kotak kadbod terlalu longgar sehingga roda kiri tidak menyentuh lantai dengan sekata lalu menyebabkan robot asyik membelok ke kiri. Apakah langkah penyelesaian terbaik sebelum pembentangan?",
    "options": [
      "Membiarkan sahaja keadaan itu dan mendakwa robot memang direka untuk berpusing",
      "Mengukuhkan struktur kotak dan melaras semula kedudukan pemasangan roda supaya seimbang di atas lantai",
      "Menanggalkan sensor halangan supaya robot tidak lagi mengesan dinding",
      "Menggantikan bateri dengan bateri yang lebih lemah supaya roda tidak bergerak"
    ],
    "correctIndex": 1,
    "explanation": "Pengujian kefungsian (SP 6.5.9) bertujuan mengesan masalah mekanikal atau perisian untuk diperbaiki. Mengukuhkan struktur dan melaras kedudukan roda memastikan robot bergerak lurus dan boleh dicontohi (TP 6).",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 6.5 / SP 6.5.8, 6.5.9 & TP 6"
  },
  {
    "id": "d6_rbt_u3_s1_01",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Keluarga Aiman sering meninggalkan rumah selama beberapa hari untuk pulang ke kampung. Apabila pulang, mereka mendapati pokok hiasan di halaman rumah layu kerana tiada sesiapa yang menyiramnya. Apakah cadangan produk paling sesuai dibina untuk menyelesaikan situasi ini?",
    "options": [
      "Bekas Penyiram Automatik",
      "Tabung Duit Automatik",
      "Lampu Kereta Automatik",
      "Sistem Penggera Kebakaran"
    ],
    "correctIndex": 0,
    "explanation": "Bekas Penyiram Automatik direka khusus untuk membekalkan air kepada tanaman secara automatik walaupun pemilik tiada di rumah.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.1"
  },
  {
    "id": "d6_rbt_u3_s1_02",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Dalam penghasilan produk di bawah Standard Kandungan 8.1, berapakah bilangan minimum bidang ilmu atau asas teknologi yang telah dipelajari perlu digabungkan?",
    "options": [
      "Satu bidang ilmu sahaja",
      "Sekurang-kurangnya dua bidang ilmu",
      "Tepat empat bidang ilmu",
      "Enam bidang ilmu sekaligus"
    ],
    "correctIndex": 1,
    "explanation": "Nota DSKP SK 8.1 menetapkan bahawa pembinaan produk perlu menggabungkan sekurang-kurangnya dua bidang ilmu yang telah dipelajari.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 (Nota)"
  },
  {
    "id": "d6_rbt_u3_s1_03",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Puan Salma bimbang berlakunya kebakaran di dapur apabila beliau lupa menutup api dapur gas semasa berada di ruang tamu. Produk manakah yang paling sesuai untuk memberi amaran awal dalam situasi ini?",
    "options": [
      "Lampu Kereta Automatik",
      "Bekas Penyiram Automatik",
      "Sistem Penggera Kebakaran",
      "Tabung Duit Automatik"
    ],
    "correctIndex": 2,
    "explanation": "Sistem Penggera Kebakaran dapat mengesan haba atau asap yang luar biasa dan membunyikan amaran awal bagi mengelakkan kebakaran merebak.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.1"
  },
  {
    "id": "d6_rbt_u3_s1_04",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Sebuah model Lampu Kereta Automatik menyala dengan sendiri apabila memasuki terowong gelap dengan menggunakan penderia cahaya, mikropengawal, dan litar lampu. Apakah dua bidang ilmu utama yang digabungkan dalam produk ini?",
    "options": [
      "Teknologi Pertanian dan Artikel Jahitan",
      "Reka Bentuk Makanan dan Pembungkusan Produk",
      "Keselamatan Bengkel dan Reka Bentuk Produk Bertema",
      "Reka Bentuk Produk Elektromekanikal dan Asas Sistem Robotik"
    ],
    "correctIndex": 3,
    "explanation": "Lampu Kereta Automatik menggabungkan sistem elektrik/mekanikal (Elektromekanikal) dengan penderia serta pengaturcaraan mikropengawal (Asas Sistem Robotik).",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s1_05",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Mengapakah murid perlu menyatakan produk yang hendak dibina berdasarkan situasi terlebih dahulu sebelum memulakan lakaran?",
    "options": [
      "Supaya produk yang dihasilkan benar-benar menyelesaikan masalah pengguna",
      "Supaya semua murid membina produk yang sama bentuk dan warnanya",
      "Supaya kos bahan tidak perlu dikira dalam jadual kerja",
      "Supaya dokumentasi tidak perlu disediakan pada akhir projek"
    ],
    "correctIndex": 0,
    "explanation": "Menentukan produk berdasarkan situasi memastikan reka bentuk mempunyai tujuan yang jelas dan dapat menyelesaikan masalah atau keperluan pengguna.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.1"
  },
  {
    "id": "d6_rbt_u3_s1_06",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Siti ingin membina Tabung Duit Automatik yang dapat mengesan duit syiling yang dimasukkan lalu menggerakkan penutup atau pengira syiling secara automatik. Gabungan asas teknologi manakah yang paling sesuai digunakan?",
    "options": [
      "Artikel jahitan dan teknologi pertanian bandar",
      "Asas sistem robotik (penderia dan atur cara) serta produk elektromekanikal (motor)",
      "Reka bentuk makanan dan pembungkusan produk sahaja",
      "Tenaga boleh baharu tanpa sebarang komponen elektrik atau pengaturcaraan"
    ],
    "correctIndex": 1,
    "explanation": "Tabung Duit Automatik memerlukan penderia dan kod atur cara (asas sistem robotik) untuk mengesan syiling serta motor/penggerak (elektromekanikal) untuk menggerakkan mekanismenya.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s1_07",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Pada waktu senja, sesetengah pemandu terlupa menyalakan lampu hadapan kereta sehingga membahayakan pengguna jalan raya lain. Bagaimanakah gabungan teknologi dalam Lampu Kereta Automatik mengatasi masalah ini?",
    "options": [
      "Penderia suhu mengesan kepanasan enjin lalu membunyikan pembaz amaran",
      "Penderia kelembapan mengesan hujan lalu menyiram air pada cermin kereta",
      "Penderia cahaya mengesan tahap kegelapan dan menghantar isyarat kepada mikropengawal untuk menyalakan lampu",
      "Motor servo membuka bonet kereta secara automatik apabila kereta berhenti"
    ],
    "correctIndex": 2,
    "explanation": "Penderia cahaya mengesan keamatan cahaya persekitaran yang rendah (gelap) dan mikropengawal yang telah diatur cara akan menghidupkan lampu kereta secara automatik.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.1 & SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s1_08",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Hafiz mahu membina Bekas Penyiram Automatik untuk tanaman cili di balkoni pangsapuri. Selain pengetahuan Teknologi Pertanian Bandar, gabungan teknologi manakah yang membantu memastikan air hanya disiram apabila tanah kering?",
    "options": [
      "Penggunaan pembaz tanpa penderia untuk berbunyi setiap lima minit",
      "Penggunaan penapis kertas tanpa sebarang sumber kuasa",
      "Penggunaan lampu LED berwarna merah sebagai hiasan pasu",
      "Penggunaan penderia kelembapan tanah, mikropengawal dan pam air mini"
    ],
    "correctIndex": 3,
    "explanation": "Penderia kelembapan tanah mengesan kekeringan medium tanaman dan menghantar isyarat kepada mikropengawal untuk mengaktifkan pam air mini menyiram tanaman.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s1_09",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Kumpulan Merah bercadang membina Sistem Penggera Kebakaran bagi bilik stor sekolah yang berisiko terbakar. Mereka menyenaraikan komponen berikut: papan mikropengawal, pembaz, lampu LED merah, dan penderia kelembapan tanah. Mengapakah cadangan gabungan komponen ini kurang tepat?",
    "options": [
      "Penderia kelembapan tanah tidak sesuai untuk mengesan haba atau asap kebakaran",
      "Papan mikropengawal tidak boleh disambungkan kepada lampu LED merah",
      "Pembaz hanya berfungsi untuk projek Tabung Duit Automatik sahaja",
      "Sistem Penggera Kebakaran tidak memerlukan sebarang penderia"
    ],
    "correctIndex": 0,
    "explanation": "Sistem Penggera Kebakaran memerlukan penderia haba, api atau asap untuk mengesan tanda kebakaran, bukannya penderia kelembapan tanah yang digunakan untuk pertanian.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s1_10",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Kebun komuniti di luar bandar tidak mempunyai punca bekalan elektrik utama, tetapi mendapat cahaya matahari yang terik sepanjang hari dan sering mengalami masalah tanaman layu. Gabungan asas teknologi dan produk manakah yang paling sesuai dicadangkan?",
    "options": [
      "Lampu Kereta Automatik yang menggunakan bateri pakai buang sepenuhnya",
      "Bekas Penyiram Automatik yang menggabungkan Tenaga Boleh Baharu (panel solar), Sistem Robotik dan Teknologi Pertanian",
      "Sistem Penggera Kebakaran yang menggunakan bekalan elektrik rumah",
      "Tabung Duit Automatik yang menggunakan bahan kitar semula tanpa litar elektrik"
    ],
    "correctIndex": 1,
    "explanation": "Ketiadaan bekalan elektrik utama diatasi dengan panel solar (Tenaga Boleh Baharu) yang membekalkan kuasa kepada sistem robotik dan pam air dalam Bekas Penyiram Automatik untuk tanaman.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.1 & SP 8.1.2"
  },
  {
    "id": "d6_rbt_u3_s2_01",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan lakaran bermaklumat dalam penghasilan reka bentuk produk?",
    "options": [
      "Lakaran yang diwarnakan dengan cantik tanpa sebarang tulisan",
      "Lakaran yang dilukis menggunakan pembaris sahaja tanpa ukuran",
      "Lakaran yang dilengkapi label bahan, ukuran, komponen dan fungsi produk",
      "Lakaran yang disalin terus daripada buku teks tanpa perubahan"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran bermaklumat mengandungi butiran penting seperti dimensi/ukuran, jenis bahan, komponen teknologi yang digunakan serta penerangan ringkas fungsi.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.3 & TP 3"
  },
  {
    "id": "d6_rbt_u3_s2_02",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Menurut nota dalam DSKP SK 8.1, lakaran reka bentuk produk boleh dihasilkan dengan menggunakan:",
    "options": [
      "Saiz bebas tanpa sebarang ukuran langsung",
      "Skala penuh atau skala nisbah",
      "Ukuran anggaran tapak tangan sahaja",
      "Skala peta negeri sahaja"
    ],
    "correctIndex": 1,
    "explanation": "DSKP SK 8.1 menyatakan bahawa lakaran produk boleh menggunakan skala penuh (1:1) atau nisbah (contohnya 1:2 atau 1:5).",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 (Nota) / SP 8.1.3"
  },
  {
    "id": "d6_rbt_u3_s2_03",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Mengapakah murid perlu menilai dan membuat penambahbaikan pada lakaran yang telah dipilih sebelum membina produk?",
    "options": [
      "Untuk memanjangkan masa projek supaya tidak perlu membina model",
      "Untuk menambah bilangan bahan supaya kos menjadi lebih mahal",
      "Untuk mengelakkan pembentangan dilakukan di hadapan kelas",
      "Untuk mengenal pasti kelemahan reka bentuk dan memperbaikinya lebih awal"
    ],
    "correctIndex": 3,
    "explanation": "Penilaian lakaran membantu mengesan kekurangan dari segi fungsi, keselamatan, atau saiz sebelum bahan dipotong dan dipasang, sekali gus mengelakkan pembaziran.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.4"
  },
  {
    "id": "d6_rbt_u3_s2_04",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Dalam Standard Pembelajaran 8.1.5, apakah empat perkara yang perlu disediakan oleh murid sebelum membina produk?",
    "options": [
      "Senarai peralatan, bahan, anggaran kos dan jadual kerja",
      "Sijil penyertaan, poster, video dan kad jemputan",
      "Buku log harian, resit bank, peta minda dan borang kaji selidik",
      "Lakaran tiga dimensi, iklan produk, resit jualan dan manual pengguna"
    ],
    "correctIndex": 0,
    "explanation": "SP 8.1.5 menetapkan penyediaan empat perkara iaitu senarai peralatan, bahan, anggaran kos dan jadual kerja.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.5"
  },
  {
    "id": "d6_rbt_u3_s2_05",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah tujuan utama menyediakan jadual kerja sebelum memulakan pembinaan produk?",
    "options": [
      "Untuk menggantikan keperluan membeli bahan projek",
      "Untuk memastikan setiap tugasan pembinaan disiapkan secara teratur dan menepati masa",
      "Untuk menentukan markah akhir murid tanpa perlu membina produk",
      "Untuk menyenaraikan nama pelanggan yang akan membeli produk"
    ],
    "correctIndex": 1,
    "explanation": "Jadual kerja membantu merancang agihan tugas dan tempoh masa setiap fasa supaya projek siap mengikut tarikh yang ditetapkan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.5"
  },
  {
    "id": "d6_rbt_u3_s2_06",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Farah melakar model Lampu Kereta Automatik menggunakan skala nisbah 1:2. Jika panjang sebenar model kereta yang ingin dibina ialah 24 cm, berapakah panjang model itu pada lakarannya?",
    "options": [
      "6 cm",
      "48 cm",
      "12 cm",
      "24 cm"
    ],
    "correctIndex": 2,
    "explanation": "Skala 1:2 bermaksud 1 cm pada lakaran mewakili 2 cm ukuran sebenar. Oleh itu, 24 cm dibahagi 2 bersamaan 12 cm pada lakaran.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.3"
  },
  {
    "id": "d6_rbt_u3_s2_07",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Zaki menyenaraikan anggaran kos bahan untuk membina Sistem Penggera Kebakaran seperti berikut: satu papan mikropengawal berharga RM25, satu pembaz berharga RM5, dua biji lampu LED berharga RM2 setiap satu, dan satu kotak plastik berharga RM6. Berapakah jumlah anggaran kos bahan tersebut?",
    "options": [
      "RM38",
      "RM42",
      "RM36",
      "RM40"
    ],
    "correctIndex": 3,
    "explanation": "Jumlah kos = RM25 (mikropengawal) + RM5 (pembaz) + (2 x RM2 = RM4 untuk LED) + RM6 (kotak plastik) = RM40.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.5"
  },
  {
    "id": "d6_rbt_u3_s2_08",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Semasa menilai lakaran Tabung Duit Automatik, rakan sekelas menegur bahawa tabung itu tertutup rapat dan tiada ruang untuk mengeluarkan wang yang telah penuh. Apakah penambahbaikan terbaik yang patut dilakukan pada lakaran tersebut?",
    "options": [
      "Menambah pintu kecil berkunci atau penutup boleh buka di bahagian bawah atau belakang tabung",
      "Menghilangkan penderia supaya tabung tidak perlu mengesan duit syiling",
      "Menjadikan lubang memasukkan syiling lebih kecil daripada saiz syiling 5 sen",
      "Menggantikan papan mikropengawal dengan pelekat kertas"
    ],
    "correctIndex": 0,
    "explanation": "Menambah pintu kecil berkunci atau penutup boleh buka membolehkan pengguna mengeluarkan wang yang terkumpul dengan mudah tanpa merosakkan badan tabung.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.4"
  },
  {
    "id": "d6_rbt_u3_s2_09",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Dalam lakaran Bekas Penyiram Automatik, Nabil meletakkan papan mikropengawal dan pek bateri di bahagian bawah bersebelahan pasu tanpa penutup pelindung, tepat di bawah muncung penyiram air. Apakah penilaian dan penambahbaikan paling kritikal bagi lakaran ini?",
    "options": [
      "Menukar warna pasu daripada coklat kepada hijau supaya lebih menarik",
      "Memindahkan komponen elektronik ke ruang khas yang bertutup dan kalis air supaya tidak rosak terkena percikan air",
      "Memendekkan tiub penyiram supaya air terus menitis ke atas pek bateri",
      "Menambah tiga lagi pembaz di dalam tanah untuk mencantikkan reka bentuk"
    ],
    "correctIndex": 1,
    "explanation": "Komponen elektronik dan pek bateri berisiko mengalami litar pintas atau kerosakan jika terkena air; memindahkannya ke ruang bertutup dan kalis air adalah penambahbaikan keselamatan dan fungsi yang kritikal.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.4"
  },
  {
    "id": "d6_rbt_u3_s2_10",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Jadual kerja kumpulan Amir menetapkan Minggu 1 untuk lakaran dan senarai bahan, Minggu 2 untuk pembelian bahan, dan Minggu 3 untuk pemasangan model. Jika berlaku kelewatan penghantaran pam air pada Minggu 2, apakah tindakan perancangan paling bijak supaya projek tetap siap tepat pada waktunya?",
    "options": [
      "Berhenti melakukan semua kerja sehingga pam air tiba walaupun rangka model belum dibuat",
      "Membatalkan terus projek dan menukar kepada tajuk baharu pada Minggu 3",
      "Membuat rangka luaran model dan menulis kod atur cara terlebih dahulu sementara menunggu pam air tiba",
      "Mengabaikan pam air dan membina model tanpa fungsi penyiraman"
    ],
    "correctIndex": 2,
    "explanation": "Menyesuaikan jadual kerja dengan menyiapkan tugasan selari seperti pembinaan rangka dan penulisan atur cara mengelakkan pembaziran masa sementara menunggu komponen tiba.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.5"
  },
  {
    "id": "d6_rbt_u3_s3_01",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Menurut DSKP SK 8.1, bagaimanakah status kefungsian produk yang dibina dalam bentuk model?",
    "options": [
      "Model hanya perlu kelihatan cantik tanpa perlu berfungsi",
      "Model mesti bersaiz sama besar dengan bangunan sebenar",
      "Model tidak dibenarkan menggunakan sebarang komponen elektrik",
      "Model boleh dibina dalam skala kecil tetapi mestilah berfungsi"
    ],
    "correctIndex": 3,
    "explanation": "Nota SK 8.1 menjelaskan bahawa pembinaan produk boleh dibuat dalam bentuk model, namun model tersebut mestilah berfungsi mengikut reka bentuk yang dirancang.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 (Nota) / SP 8.1.6"
  },
  {
    "id": "d6_rbt_u3_s3_02",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Apakah amalan keselamatan yang wajib dipatuhi semasa memasang litar elektrik pada model produk berfungsi?",
    "options": [
      "Memastikan bekalan kuasa dimatikan semasa menyambung atau mengubah suai wayar",
      "Menyentuh bahagian logam besi pemateri yang sedang panas dengan jari",
      "Membiarkan wayar terdedah bersentuhan antara kutub positif dan negatif",
      "Membasuh papan mikropengawal dengan air paip sebelum pemasangan"
    ],
    "correctIndex": 0,
    "explanation": "Mematikan bekalan kuasa (suis atau bateri) semasa membuat sambungan litar mengelakkan risiko litar pintas dan kerosakan komponen.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.6"
  },
  {
    "id": "d6_rbt_u3_s3_03",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Mengapakah murid perlu menyediakan dokumentasi mudah setelah selesai membina produk berfungsi?",
    "options": [
      "Untuk menggantikan model produk supaya tidak perlu dibawa ke kelas",
      "Untuk merekodkan proses penghasilan, bahan, kos dan pengujian sebagai rujukan",
      "Untuk menyorokkan kesilapan yang berlaku semasa pembinaan produk",
      "Untuk membolehkan produk dijual di pasar raya dengan segera"
    ],
    "correctIndex": 1,
    "explanation": "Dokumentasi mudah berfungsi sebagai rekod rasmi yang merangkumi idea, lakaran, kos, langkah pembinaan serta hasil pengujian produk.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.7"
  },
  {
    "id": "d6_rbt_u3_s3_04",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Bagaimanakah cara membuat pembentangan hasil produk secara kreatif menurut Standard Pembelajaran 8.1.7?",
    "options": [
      "Membaca senarai harga bahan secara perlahan tanpa menunjukkan model",
      "Menyerahkan kertas catatan kepada guru tanpa bercakap sepatah kata",
      "Menggunakan pelbagai media seperti slaid, poster, video atau demonstrasi model berfungsi",
      "Menayangkan gambar produk lain yang dimuat turun dari internet"
    ],
    "correctIndex": 2,
    "explanation": "SP 8.1.7 menekankan pembentangan secara kreatif menggunakan pelbagai media yang sesuai bagi menerangkan fungsi dan keistimewaan produk.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.7"
  },
  {
    "id": "d6_rbt_u3_s3_05",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Berdasarkan Standard Prestasi Tahap Penguasaan 6 bagi SK 8.1, bagaimanakah ciri produk dan pembentangan yang diharapkan daripada murid?",
    "options": [
      "Produk dibina secara tergesa-gesa tanpa lakaran dan dibentangkan secara ringkas",
      "Produk dibina oleh orang lain dan dibentangkan tanpa pemahaman teknologi",
      "Produk hanya berjaya di atas kertas tanpa sebarang pengujian dibuat",
      "Produk dibina secara sistematik, kemas dan boleh dicontohi serta pembentangan dibuat secara kreatif dan bertanggungjawab"
    ],
    "correctIndex": 3,
    "explanation": "Tafsiran TP 6 dalam DSKP SK 8.1 ialah membina reka bentuk produk secara sistematik, kemas dan boleh dicontohi serta membuat pembentangan secara kreatif dan bertanggungjawab.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 (Standard Prestasi TP 6)"
  },
  {
    "id": "d6_rbt_u3_s3_06",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Susunkan urutan proses penghasilan produk yang betul selepas murid selesai menilai dan menambah baik lakaran pilihan mereka:",
    "options": [
      "Menyediakan senarai peralatan, bahan, kos dan jadual kerja -> Membina produk berfungsi -> Membuat dokumentasi dan pembentangan",
      "Membuat pembentangan -> Membina produk berfungsi -> Menyediakan anggaran kos dan jadual kerja",
      "Membuat dokumentasi -> Membeli bahan tanpa senarai -> Melakar semula produk",
      "Membina produk berfungsi -> Menentukan situasi masalah -> Membuat jadual kerja"
    ],
    "correctIndex": 0,
    "explanation": "Mengikut urutan SP 8.1.5 hingga SP 8.1.7, selepas lakaran ditambah baik, murid menyediakan senarai peralatan, bahan, kos dan jadual kerja, diikuti pembinaan produk berfungsi, dan diakhiri dengan dokumentasi serta pembentangan.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.5 - SP 8.1.7"
  },
  {
    "id": "d6_rbt_u3_s3_07",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Semasa menguji model Lampu Kereta Automatik yang baru siap dipasang, lampu LED tidak menyala apabila penderia cahaya ditutup dengan tangan. Apakah langkah pertama yang paling sistematik untuk menyelesaikan masalah ini?",
    "options": [
      "Membuang keseluruhan model dan membina tabung duit sebagai ganti",
      "Memeriksa sambungan litar, kutub LED, bateri dan kod atur cara pada mikropengawal",
      "Menukar nama projek dalam dokumentasi kepada lampu hiasan biasa",
      "Mengecat semula badan model kereta supaya kelihatan lebih berkilat"
    ],
    "correctIndex": 1,
    "explanation": "Apabila produk gagal berfungsi semasa pengujian, murid perlu menyemak punca teknikal seperti sambungan litar, kekutuban komponen, kuasa bateri dan kod atur cara.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.6"
  },
  {
    "id": "d6_rbt_u3_s3_08",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Apakah himpunan maklumat yang paling lengkap untuk dimasukkan ke dalam dokumentasi mudah penghasilan produk?",
    "options": [
      "Senarai nama rakan sekelas dan jadual waktu mata pelajaran sekolah",
      "Cerita pendek fiksyen tentang penggunaan produk pada masa hadapan sahaja",
      "Penyataan situasi, gabungan teknologi, lakaran bermaklumat, senarai bahan dan kos, langkah kerja serta catatan pengujian",
      "Resit pembelian alat tulis peribadi dan gambar pemandangan sekolah"
    ],
    "correctIndex": 2,
    "explanation": "Dokumentasi mudah yang baik merangkumi keseluruhan proses penghasilan produk daripada situasi masalah, lakaran, bahan dan kos hingga ke langkah pembinaan dan pengujian.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.7"
  },
  {
    "id": "d6_rbt_u3_s3_09",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Kumpulan Haris menguji model Sistem Penggera Kebakaran mereka dengan mendekatkan sumber haba yang selamat pada penderia. Lampu LED amaran menyala terang, tetapi pembaz tidak mengeluarkan sebarang bunyi. Apakah analisis punca masalah yang paling munasabah?",
    "options": [
      "Penderia haba rosak sepenuhnya dan gagal menghantar sebarang isyarat kepada mikropengawal",
      "Bateri telah habis sepenuhnya sehingga tiada satu pun komponen dapat berfungsi",
      "Kotak model terlalu tebal sehingga cahaya lampu LED tidak kelihatan",
      "Sambungan wayar pada pembaz longgar, terbalik kekutubannya, atau pin output pembaz tidak diaktifkan dalam atur cara"
    ],
    "correctIndex": 3,
    "explanation": "Oleh sebab lampu LED menyala apabila haba dikesan, penderia dan bateri masih berfungsi; masalah tertumpu khusus pada laluan pembaz sama ada pendawaian, kekutuban atau kod atur cara pin pembaz.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.6"
  },
  {
    "id": "d6_rbt_u3_s3_10",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Dua kumpulan membentangkan projek Bekas Penyiram Automatik. Kumpulan A hanya membaca teks pada kad manila tanpa menguji model, manakala Kumpulan B menayangkan slaid ringkas tentang kos dan gabungan teknologi, mendemonstrasikan pam air berfungsi secara langsung, serta berkongsi cadangan penambahbaikan masa hadapan. Mengapakah Kumpulan B lebih menepati ciri pembentangan TP 6?",
    "options": [
      "Kumpulan B menggunakan pelbagai media secara kreatif, membuktikan kefungsian produk secara langsung dan bersikap bertanggungjawab berkongsi penambahbaikan",
      "Kumpulan B tidak perlu menyediakan dokumentasi kerana mereka sudah mempunyai slaid",
      "Kumpulan B menggunakan kad manila yang lebih besar berbanding Kumpulan A",
      "Kumpulan B hanya menerangkan harga bahan tanpa menyentuh aspek teknologi"
    ],
    "correctIndex": 0,
    "explanation": "TP 6 menuntut pembentangan yang kreatif menggunakan pelbagai media serta sikap bertanggungjawab seperti membuktikan kefungsian produk dan menyatakan cadangan penambahbaikan secara jujur.",
    "ref": "DSKP RBT Tahun 6 (Semakan 2017), SK 8.1 / SP 8.1.7 & TP 6"
  }
];

  App.Pools.d6.rbt = items;
})(typeof window !== "undefined" ? window : globalThis);
