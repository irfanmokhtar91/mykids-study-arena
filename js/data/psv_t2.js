/**
 * Pendidikan Seni Visual Tingkatan 2: ORIGINAL practice questions.
 * Source: KPM KSSM textbook "Pendidikan Seni Visual Tingkatan 2" (2017, 11 Tajuk), cross-read with the DSKP KSSM PSV Tingkatan 2 v2.
 * One chapter per textbook Tajuk. Written knowledge only (definitions, classifications, terms, history, named works as the book states).
 * Tags: diff L/M/H, part "A", src "BT". Correct index is spread deterministically (the engine shuffles options at run time).
 * Verification record: docs/psv-t2-verification-2026-11-25.md.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Data = App.Data || {};
  App.Data.t2 = App.Data.t2 || {};

  let n = 0;
  const Q = (q, ok, bad, ex, diff) => {
    const pos = (n++ * 3 + 2) % 4;
    const options = bad.slice();
    options.splice(pos, 0, ok);
    return { q, options, correctIndex: pos, explanation: ex, diff, part: "A", src: "BT" };
  };

  App.Data.t2.psv = {
    // ------------------------------------------------ Tajuk 1
    ragam_hias: [
      Q("Apakah seni ragam hias?", "Hiasan dalam seni kraf atau karya seni", ["Ukuran saiz sesuatu karya", "Harga sesuatu karya seni", "Alat untuk memotong kayu"], "Seni ragam hias atau ornamen ialah hiasan dalam seni kraf atau karya seni.", "L"),
      Q("Antara berikut, yang manakah motif seni ragam hias?", "Awan larat", ["Kad kredit", "Papan hitam", "Pita pengukur"], "Motif seni ragam hias: flora, fauna, geometri, awan larat dan figuratif.", "L"),
      Q("Antara berikut, yang manakah pengangkutan tradisional yang sering dikaitkan dengan seni ragam hias?", "Kereta lembu", ["Kapal terbang", "Kereta api laju", "Roket"], "Beca, kereta lembu dan perahu ialah pengangkutan tradisional yang sering dikaitkan dengan seni ragam hias.", "L"),
      Q("Apakah fungsi seni ragam hias pada beca dan kereta lembu?", "Memaparkan nilai estetik dan menarik perhatian", ["Menambah kelajuan", "Mengurangkan berat", "Mengawal arah"], "Fungsinya ialah memaparkan nilai estetik dan menarik perhatian.", "M"),
      Q("Perkataan 'beca' berasal daripada bahasa Hokkien 'be chia' yang bermaksud apa?", "Kereta kuda", ["Kereta api", "Kapal laut", "Kereta lembu"], "Perkataan 'beca' berasal daripada bahasa Hokkien 'be chia' yang bermaksud kereta kuda.", "H"),
      Q("Komponen manakah pada perahu tradisional yang dihiasi seni ragam hias?", "Bangau", ["Enjin", "Roda", "Stering"], "Komponen perahu yang dihiasi seni ragam hias ialah badan, bangau, okok dan caping.", "M"),
      Q("Apakah bangau pada perahu tradisional?", "Ukiran kayu yang diletakkan di hadapan perahu", ["Sejenis burung laut yang hidup", "Layar perahu", "Tali sauh"], "Bangau ialah ukiran kayu yang diletakkan di hadapan perahu dan biasanya bermotif flora dan fauna.", "M"),
      Q("Apakah fungsi bangau pada perahu?", "Menyangkut galah panjang dan pukat serta menjadi hiasan", ["Menjadi enjin perahu", "Menutup lubang perahu", "Mengukur kedalaman laut"], "Fungsi bangau ialah menyangkut galah panjang dan pukat, di samping menjadi hiasan.", "H"),
      Q("Okok terletak di bahagian mana perahu tradisional?", "Kanan hadapan perahu", ["Kiri belakang perahu", "Di bawah perahu", "Di tengah layar"], "Bangau di bahagian kiri kepala atau di hadapan perahu, manakala okok di bahagian kanan hadapan perahu.", "H"),
      Q("Antara berikut, yang manakah contoh alat permainan rakyat?", "Gasing", ["Pembaris", "Kalkulator", "Kamera"], "Contoh permainan rakyat: wau, gasing dan congkak.", "L"),
      Q("Apakah dua jenis gasing yang disebut dalam buku teks?", "Gasing pangkah dan gasing uri", ["Gasing laut dan gasing darat", "Gasing besar dan gasing kecil sahaja", "Gasing kayu dan gasing besi sahaja"], "Terdapat dua jenis gasing, iaitu gasing pangkah dan gasing uri.", "M"),
      Q("Seni ragam hias wau terdapat pada bahagian mana?", "Sayap dan ekor", ["Tali sahaja", "Hanya pada tangan pemain", "Batang buluh sahaja"], "Seni ragam hias wau terdapat pada bahagian sayap dan ekor.", "M"),
      Q("Antara berikut, yang manakah alat domestik?", "Kukuran", ["Gasing", "Wau bulan", "Perahu kolek"], "Alat domestik berkaitan keperluan harian di rumah, contohnya rehal, kukuran, acuan putu, jebak puyuh, bakul dan nyiru.", "L"),
      Q("Apakah rehal?", "Papan bersilang yang direka untuk meletakkan al-Quran", ["Alat untuk mengikis kelapa", "Alat untuk memerangkap burung", "Alat untuk membuat kuih"], "Rehal ialah sejenis papan bersilang untuk meletakkan al-Quran.", "M"),
      Q("Apakah fungsi kukuran?", "Mengikis isi kelapa", ["Meletakkan al-Quran", "Memerangkap burung puyuh", "Menyimpan air"], "Kukuran mempunyai mata bergerigi untuk mengukur, mengeruk dan mengikis isi kelapa.", "M"),
      Q("Jebak puyuh ialah alat untuk apa?", "Memerangkap burung puyuh", ["Mengikis kelapa", "Meletakkan al-Quran", "Membuat kuih putu"], "Jebak puyuh ialah alat untuk memerangkap burung puyuh.", "M"),
      Q("Siapakah Adiguru Wau Tradisional yang lahir pada tahun 1947 di Kelantan?", "Shafie bin Jusoh", ["Hasni bin Ali", "Rohani binti Md. Piah", "Datuk Lat"], "Shafie bin Jusoh ialah Adiguru Wau Tradisional, lahir pada tahun 1947 di Kelantan.", "H"),
      Q("Hasni bin Ali ialah tukang ulung yang menghasilkan apa?", "Perahu tradisional", ["Wau bulan", "Rehal", "Gasing uri"], "Hasni bin Ali ialah Tukang Ulung Perahu Tradisional dari Terengganu.", "H")
    ],

    // ------------------------------------------------ Tajuk 2
    lukisan: [
      Q("Apakah lukisan menurut buku teks?", "Teknik menggambar atau hasil kerja seni yang menggunakan media kering atau warna yang minimum", ["Seni menggambar dengan media basah sahaja", "Seni membentuk tanah liat", "Seni menyulam kain"], "Lukisan merupakan suatu teknik menggambar atau hasil kerja seni yang menggunakan media kering atau warna yang minimum.", "M"),
      Q("Antara berikut, yang manakah media kering?", "Pensel warna", ["Cat minyak", "Cat air", "Cat akrilik"], "Contoh media kering: pensel, krayon, pen, pastel, arang, pensel warna, dakwat dan kapur.", "L"),
      Q("Lukisan menjadi asas kepada karya seni yang mana?", "Seni catan, seni cetakan dan seni arca", ["Seni masakan", "Seni muzik sahaja", "Seni bunyi"], "Lukisan boleh menjadi hasil karya tersendiri selain asas kepada seni catan, cetakan dan arca.", "M"),
      Q("Manakah lebih awal dihasilkan oleh manusia, lukisan atau tulisan?", "Lukisan", ["Tulisan", "Kedua-duanya serentak", "Tiada kedua-duanya"], "Lukisan lebih awal dihasilkan oleh manusia sebelum tulisan.", "M"),
      Q("Lukisan dinding yang menggambarkan kehidupan masyarakat primitif terdapat di gua mana di Sarawak?", "Gua Kain Hitam, Niah", ["Gua Tambun", "Gua Merapoh", "Gua Batu"], "Lukisan dinding Gua Kain Hitam, Niah, dihasilkan oleh masyarakat peribumi Sarawak.", "H"),
      Q("Lukisan Zaman Neolitik pada dinding Gua Tambun dihasilkan menggunakan bahan apa?", "Hematit berwarna merah", ["Arang hitam", "Cat minyak", "Dakwat Cina"], "Lukisan Gua Tambun dihasilkan menggunakan hematit berwarna merah.", "H"),
      Q("Gua Tambun terletak di negeri mana?", "Perak", ["Pahang", "Sarawak", "Kelantan"], "Gua Tambun, Perak, diiktiraf sebagai warisan kebangsaan pada tahun 2010.", "M"),
      Q("Gua Merapoh terletak di negeri mana?", "Pahang", ["Perak", "Sarawak", "Kedah"], "Lukisan dinding Gua Merapoh, Pahang, menggambarkan figura-figura lidi.", "M"),
      Q("Siapakah digelar Bapa Potret Malaysia?", "Mohamed Hoessein Enas", ["Abdullah Ariff", "Dzulkifli Buyong", "Datuk Lat"], "Mohamed Hoessein Enas ialah Bapa Potret Malaysia dan digelar juga Pelukis Potret Diraja.", "M"),
      Q("Karya 'Kampung Boy' (1979) ialah karya siapa?", "Datuk Lat", ["Abdullah Ariff", "Mohamed Hoessein Enas", "Dzulkifli Buyong"], "Karya terkenal Lat yang dibukukan ialah Kampung Boy (1979).", "L"),
      Q("Datuk Lat ialah pelukis apa?", "Pelukis kartun", ["Pelukis potret diraja", "Pelukis cat minyak", "Pemahat arca"], "Datuk Lat (Datuk Mohammad Nor Khalid) ialah pelukis kartun Malaysia.", "L"),
      Q("Abdullah Ariff terkenal sebagai pelukis apa?", "Pelukis cat air, ilustrator dan pelukis komik", ["Pemahat arca", "Pelukis batik sahaja", "Jurugambar"], "Abdullah Ariff terkenal sebagai pelukis cat air, ilustrator dan pelukis komik.", "M"),
      Q("Apakah tema karya ilustrasi 'The Long Arm Nippon' (1942) oleh Abdullah Ariff?", "Pro-Jepun", ["Pro-British", "Pemandangan gunung", "Kanak-kanak bermain"], "Karya itu ialah ilustrasi berbentuk kartun bertemakan pro-Jepun.", "H"),
      Q("Dzulkifli Buyong gemar menggunakan tema apa dalam karyanya?", "Alam kanak-kanak", ["Peperangan", "Binaan pencakar langit", "Kapal angkasa"], "Dzulkifli Buyong gemar menggunakan alam kanak-kanak sebagai tema, contohnya 'Kelambu' (1964).", "H"),
      Q("Antara berikut, yang manakah teknik seni lukisan?", "Lorekan", ["Tuangan", "Acuan", "Putaran"], "Teknik seni lukisan: lorekan, gosokan, contengan, garisan selari, silang pangkah dan titikan.", "M"),
      Q("Berapakah titik lenyap yang boleh digunakan dalam lukisan perspektif?", "Satu, dua atau tiga titik lenyap", ["Hanya sepuluh titik", "Tiada titik lenyap", "Hanya empat titik"], "Lukisan perspektif boleh dihasilkan dengan satu titik lenyap, dua titik lenyap atau tiga titik lenyap.", "H")
    ],

    // ------------------------------------------------ Tajuk 3
    catan: [
      Q("Apakah catan menurut buku teks?", "Proses menggambar dengan media basah yang disapu ke atas permukaan dua dimensi", ["Proses menggambar dengan arang sahaja", "Proses membentuk tanah liat", "Proses menjahit kain"], "Catan ialah proses menggambar dengan menggunakan media basah yang disapu ke atas pelbagai permukaan 2D.", "M"),
      Q("Seni catan cat air di Malaysia dipercayai berkembang seawal tahun berapa?", "Tahun 1930-an", ["Tahun 1830-an", "Tahun 1990-an", "Tahun 1730-an"], "Seni catan cat air di Malaysia dipercayai berkembang seawal tahun 1930-an.", "M"),
      Q("Pelukis cat air dari negeri mana yang menjadi perintis seni catan moden Malaysia?", "Pulau Pinang", ["Sarawak", "Sabah", "Perlis"], "Pelukis cat air Pulau Pinang menjadi perintis kepada seni catan moden Malaysia.", "M"),
      Q("Karya cat air pelukis awal terpengaruh dengan aliran apa?", "Impresionisme", ["Kubisme", "Surealisme", "Dadaisme"], "Karya cat air pelukis awal terpengaruh dengan gaya aliran impresionisme.", "M"),
      Q("Mengapakah cat air sering digunakan oleh pelukis awal?", "Mudah diperoleh dan sesuai untuk berkarya di luar", ["Sangat mahal dan jarang ada", "Tidak boleh dibawa ke luar", "Hanya sesuai untuk ukiran"], "Cat air mudah diperoleh dan sesuai digunakan untuk menghasilkan karya ketika berada di luar.", "M"),
      Q("Antara berikut, yang manakah pelukis cat air tempatan terawal?", "Yong Mun Sen", ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"], "Pelukis cat air tempatan terawal: Yong Mun Sen, Abdullah Ariff, Kuo Ju Ping, Khaw Sia dan Ibrahim Abu@A.B. Ibrahim.", "M"),
      Q("Pelukis manakah gemar menjadikan bunga orkid sebagai tema karyanya?", "Khaw Sia", ["Abdullah Ariff", "Yong Mun Sen", "Kuo Ju Ping"], "Khaw Sia menggemari tema bunga seperti orkid dan canna.", "H"),
      Q("Karya cat air 'Pokok Mengkuang, Bukit Mertajam' (1950) ialah karya siapa?", "Abdullah Ariff", ["Khaw Sia", "Yong Mun Sen", "Zakariah Noor"], "Karya cat air Abdullah Ariff banyak menampilkan tema landskap, contohnya 'Pokok Mengkuang, Bukit Mertajam' (1950).", "H"),
      Q("Cat akrilik ialah cat jenis apa?", "Cat sintetik yang berasaskan air", ["Cat yang dihasilkan daripada minyak", "Cat daripada sumber alam sahaja", "Cat daripada kuning telur"], "Cat akrilik ialah sejenis cat sintetik yang berasaskan air.", "M"),
      Q("Cat minyak mengandungi bahan apa yang berfungsi untuk mendapatkan kepekatan?", "Minyak pengering (drying oil)", ["Air garam", "Gam kayu", "Kuning telur"], "Cat minyak ialah cat yang mengandungi minyak pengering.", "H"),
      Q("Antara berikut, yang manakah teknik cat air?", "Basah atas basah", ["Gurisan asid", "Lempar alin", "Potongan kayu"], "Teknik cat air: basah atas basah, basah atas kering, kering atas kering dan kering atas basah.", "M"),
      Q("Teknik cat air yang menghasilkan kesan lut sinar dan sapuannya paling sukar dikawal ialah teknik apa?", "Basah atas basah", ["Basah atas kering", "Kering atas kering", "Kering atas basah"], "Teknik basah atas basah menghasilkan kesan lut sinar dan sapuannya paling sukar dikawal.", "H"),
      Q("Teknik cat air yang menggunakan warna cair di atas kertas kering dan mudah dikawal ialah teknik apa?", "Basah atas kering", ["Basah atas basah", "Kering atas basah", "Kering atas kering"], "Teknik basah atas kering menghasilkan kesan legap dan sapuannya mudah dikawal.", "H"),
      Q("Apakah fresko menurut glosari buku teks?", "Lukisan yang dihasilkan dengan mengecat di atas lapisan kapur yang masih basah", ["Lukisan dengan pensel pada kertas kering", "Cetakan pada kain sutera", "Arca daripada tanah liat"], "Fresko ialah lukisan yang dihasilkan dengan cara mengecat di atas lapisan kapur yang masih basah.", "H"),
      Q("Karya 'Joget' (1957, cat minyak) dihasilkan oleh siapa?", "Syed Ahmad Jamal", ["Chuah Thean Teng", "Tay Hooi Keat", "Zakariah Noor"], "Karya 'Joget' (1957, cat minyak) dihasilkan oleh Syed Ahmad Jamal.", "H")
    ],

    // ------------------------------------------------ Tajuk 4
    cetakan: [
      Q("Apakah keunikan seni cetakan berbanding karya seni halus lain?", "Dapat menghasilkan beberapa keping hasil yang disebut edisi", ["Hanya boleh dihasilkan sekali", "Tidak memerlukan sebarang bahan", "Hanya dibuat daripada tanah liat"], "Keunikan seni cetakan ialah dapat menghasilkan beberapa keping hasil yang disebut edisi.", "M"),
      Q("Dalam satu edisi, bagaimanakah semua hasil seni cetakan dianggap?", "Karya asli", ["Salinan palsu", "Tiruan sahaja", "Tidak bernilai"], "Dalam suatu edisi, semua hasil seni cetakan dianggap sebagai karya asli.", "M"),
      Q("Seni cetakan potongan kayu di Singapura pada akhir tahun 1940-an dikaitkan dengan pelukis daripada institusi mana?", "Akademi Nanyang", ["Institut Teknologi MARA", "Universiti Sains Malaysia", "Akademi Seni Eropah"], "Kegiatan seni cetakan potongan kayu oleh pelukis Akademi Nanyang di Singapura pada akhir 1940-an.", "H"),
      Q("Seni cetakan semakin berkembang dengan penubuhan Specialist Teachers' Training Institute (STTI) pada tahun berapa?", "1960", ["1860", "1990", "1920"], "Seni cetakan semakin berkembang dengan penubuhan STTI pada tahun 1960.", "H"),
      Q("Era kontemporari seni cetakan, iaitu daripada konvensional kepada digital, bermula pada dekad mana?", "Tahun 1980-an", ["Tahun 1880-an", "Tahun 1920-an", "Tahun 2020-an"], "Era kontemporari seni cetakan bermula pada 1980-an.", "M"),
      Q("Berapakah kaedah seni cetakan yang disebut dalam buku teks?", "Empat", ["Dua", "Tiga", "Enam"], "Empat kaedah: cetakan timbulan, benaman, planografi dan saring sutera.", "M"),
      Q("Antara berikut, yang manakah kaedah seni cetakan?", "Cetakan benaman", ["Cetakan jahitan", "Cetakan putaran", "Cetakan lempar"], "Kaedah seni cetakan: timbulan, benaman, planografi dan saring sutera.", "L"),
      Q("Potongan kayu dan potongan lino termasuk dalam kaedah cetakan apa?", "Cetakan timbulan", ["Cetakan benaman", "Cetakan saring sutera", "Cetakan planografi"], "Teknik kaedah timbulan: potongan kayu, potongan lino, gurisan kayu dan kolaj.", "M"),
      Q("Litografi termasuk dalam kaedah cetakan apa?", "Cetakan planografi (permukaan)", ["Cetakan timbulan", "Cetakan benaman", "Cetakan saring sutera"], "Teknik kaedah permukaan: litografi, berdasarkan sifat penolakan minyak dengan air dan menggunakan blok batu kapur.", "H"),
      Q("Kaedah cetakan manakah dikenali juga sebagai serigrafi?", "Saring sutera", ["Timbulan", "Benaman", "Planografi"], "Kaedah saring sutera dikenali juga sebagai serigrafi.", "M"),
      Q("Apakah fungsi sekuji dalam seni cetakan?", "Menyapu dakwat atau warna di atas permukaan kertas atau kain", ["Mengukir plat", "Mencairkan dakwat cetak", "Meregangkan pemidang"], "Sekuji digunakan untuk menyapu dakwat atau warna.", "M"),
      Q("Dalam kaedah benaman (intaglio), di manakah dakwat diletakkan?", "Di dalam alur turisan", ["Di atas permukaan tinggi blok", "Di atas permukaan batu kapur sahaja", "Di luar plat"], "Dalam kaedah benaman, dakwat diletakkan di dalam alur turisan dan dicetak menggunakan pemampat atau penggelek.", "H"),
      Q("Kaedah cetakan tertua dalam seni cetakan ialah kaedah apa?", "Timbulan (relief)", ["Planografi", "Benaman", "Saring sutera"], "Kaedah timbulan ialah kaedah tertua dalam seni cetakan.", "H"),
      Q("Menurut buku teks, apakah yang perlu ditulis pada setiap karya seni cetakan mengikut prinsip seni cetakan?", "Artist Proof (AP)", ["Nama kedai", "Harga bahan", "Nama guru"], "Prinsip seni cetakan: menulis 'Artist Proof' (AP) pada setiap karya.", "H"),
      Q("Apakah yang perlu ditandatangani oleh pelukis pada karya seni cetakan?", "Karya itu, berserta jumlah edisi dan nombor siri", ["Hanya bingkai karya", "Hanya kotak penyimpanan", "Hanya resit pembelian"], "Karya mesti ditandatangani oleh pelukis, berserta jumlah kesemua edisi dan nombor siri cetakan.", "H")
    ],

    // ------------------------------------------------ Tajuk 5
    landskap: [
      Q("Apakah landskap menurut buku teks?", "Hiasan reka letak di luar rumah sama ada semula jadi atau buatan manusia", ["Hiasan di dalam bilik sahaja", "Lukisan pada kain", "Seni mengukir kayu"], "Landskap ialah hiasan reka letak di luar rumah, semula jadi seperti tumbuhan, bukit dan tasik, atau buatan manusia seperti bangunan, pergola dan gazebo.", "M"),
      Q("Reka Bentuk Landskap terawal dikesan pada taman mana?", "Taman Gantung Babylon", ["Taman al-Hambra", "Taman Botani Perdana", "Taman Tasik Taiping"], "Reka Bentuk Landskap terawal dikesan pada Taman Gantung Babylon, Iraq, pada tahun 600 SM.", "H"),
      Q("Taman al-Hambra di Sepanyol ialah contoh awal Reka Bentuk Landskap bercirikan apa?", "Islam", ["Jepun", "Thai", "Inggeris"], "Taman al-Hambra yang dibina pada akhir abad ke-11 ialah contoh awal landskap bercirikan Islam.", "M"),
      Q("Perkembangan landskap di Malaysia bermula seawal abad ke-14 pada zaman apa?", "Kesultanan Melayu Melaka", ["Pemerintahan Jepun", "Zaman penjajahan British", "Zaman Merdeka"], "Perkembangan landskap di Malaysia bermula seawal abad ke-14, iaitu zaman Kesultanan Melayu Melaka.", "M"),
      Q("Apakah dua jenis landskap?", "Landskap lembut dan landskap kejur", ["Landskap panas dan sejuk", "Landskap besar dan kecil", "Landskap lama dan baru"], "Landskap dibahagikan kepada landskap lembut (softscape) dan landskap kejur (hardscape).", "M"),
      Q("Landskap lembut merujuk kepada elemen apa?", "Elemen hidup seperti bunga, tumbuhan renek dan pokok", ["Batu dan simen", "Besi dan kaca", "Jalan raya"], "Landskap lembut merujuk kepada elemen-elemen yang hidup.", "L"),
      Q("Antara berikut, yang manakah contoh landskap kejur?", "Laluan pejalan kaki", ["Bunga ros", "Pokok renek", "Rumput"], "Landskap kejur ialah elemen keras atau objek bukan hidup seperti kayu dan batu, contohnya laluan pejalan kaki, arca dan air terjun.", "M"),
      Q("Apakah empat elemen landskap?", "Topografi, tumbuhan, air dan struktur", ["Garisan, rupa, bentuk dan warna", "Pasir, kapur, besi dan kaca", "Imbangan, kontra, ritma dan harmoni"], "Elemen landskap terdiri daripada topografi, tumbuhan, air dan struktur.", "M"),
      Q("Antara berikut, yang manakah prinsip landskap?", "Keringkasan", ["Topografi", "Pancuran air", "Pagar"], "Prinsip landskap: keringkasan, kesatuan, imbangan, penegasan, irama dan kepelbagaian.", "M"),
      Q("Apakah tiga fungsi landskap menurut buku teks?", "Estetik, ekonomi dan fizikal", ["Warna, rupa dan garisan", "Ukir, cetak dan jahit", "Rekreasi, kraf dan bunyi"], "Peranan dan fungsi landskap ialah estetik, ekonomi dan fizikal.", "M"),
      Q("Mengawal hakisan tanah dan memberi teduhan ialah fungsi landskap yang mana?", "Fizikal", ["Estetik", "Ekonomi", "Muzikal"], "Fungsi fizikal landskap termasuk mengawal hakisan tanah, memberi perlindungan atau teduhan dan menyejukkan iklim.", "H"),
      Q("Apakah ergonomik?", "Sains mereka bentuk dan mengatur sesuatu supaya pengguna boleh menggunakannya dengan mudah dan selamat", ["Kajian tentang sejarah seni", "Seni menyulam kain", "Seni cetakan blok"], "Ergonomik ialah sains berkaitan mereka bentuk dan mengatur sesuatu supaya pengguna boleh menggunakannya dengan mudah dan selamat.", "M"),
      Q("Konsep landskap manakah menekankan ciri-ciri bersih, rapi dan kemas tetapi kelihatan moden dan bergaya?", "Inggeris", ["Bali", "Thai", "Jepun"], "Konsep landskap Inggeris mementingkan ciri bersih, rapi dan kemas.", "H"),
      Q("Apakah elemen penting dalam landskap Jepun?", "Batu, air, tumbuhan dan perhiasan", ["Kaca, besi dan simen sahaja", "Pasir sahaja", "Kereta dan jalan raya"], "Elemen penting landskap Jepun ialah batu, air, tumbuhan dan perhiasan.", "H"),
      Q("Konsep landskap Islam bertitik tolak daripada konsep apa?", "Syurga dalam al-Quran", ["Taman istana Jepun", "Taman hutan Thai", "Pemandangan padang pasir sahaja"], "Konsep landskap Islam bertitik tolak daripada konsep syurga dalam al-Quran, diekspresikan sebagai taman yang teduh dengan tumbuhan dan air.", "H")
    ],

    // ------------------------------------------------ Tajuk 6
    hiasan_dalaman: [
      Q("Sejarah Reka Bentuk Hiasan Dalaman bermula sejak zaman apa?", "Zaman purba apabila manusia menghias gua dengan lukisan dinding", ["Zaman komputer", "Zaman angkasa lepas", "Zaman Merdeka Malaysia"], "Sejarah hiasan dalaman bermula sejak zaman purba apabila manusia menghias tempat tinggal di dalam gua dengan lukisan dinding.", "M"),
      Q("Masyarakat purba manakah terkenal dengan lukisan mural pada dinding yang dipercayai mendahului hiasan dalaman?", "Masyarakat Mesir purba", ["Masyarakat Jepun moden", "Masyarakat Viking", "Masyarakat Inca"], "Masyarakat Mesir purba terkenal dengan lukisan mural pada dinding.", "H"),
      Q("Berapakah jenis ruang dalaman yang dibahagikan dalam buku teks?", "Lima", ["Dua", "Tiga", "Sembilan"], "Lima jenis: ruang rumah kediaman, pejabat, bangunan perniagaan, kesihatan dan pameran.", "M"),
      Q("Antara berikut, yang manakah komponen ruang dalaman rumah?", "Ruang tamu", ["Padang permainan", "Tasik buatan", "Jalan raya"], "Komponen ruang dalaman rumah: anjung, ruang tamu, ruang makan, ruang dapur, ruang kerja dan bilik tidur.", "L"),
      Q("Berapakah prinsip Reka Bentuk Hiasan Dalaman yang disenaraikan dalam buku teks?", "Enam", ["Dua", "Empat", "Sepuluh"], "Enam prinsip: imbangan, penegasan, harmoni, kesatuan, kepelbagaian dan kontra.", "M"),
      Q("Elemen Reka Bentuk Hiasan Dalaman terdiri daripada dua jenis. Apakah dua jenis itu?", "Semula jadi dan buatan manusia", ["Besar dan kecil", "Panas dan sejuk", "Lama dan baru"], "Elemen hiasan dalaman terdiri daripada elemen semula jadi dan buatan manusia.", "M"),
      Q("Antara berikut, yang manakah elemen semula jadi dalam hiasan dalaman?", "Tumbuhan kecil", ["Permaidani", "Perabot", "Lampu"], "Elemen semula jadi: tumbuhan kecil, kolam air dan batu-batan. Perabot dan permaidani ialah elemen buatan manusia.", "M"),
      Q("Apakah dua jenis imbangan dalam hiasan dalaman?", "Simetri dan tidak simetri", ["Besar dan kecil", "Panas dan sejuk", "Rata dan bulat"], "Terdapat dua jenis imbangan, iaitu simetri dan tidak simetri.", "M"),
      Q("Penegasan dalam hiasan dalaman menjurus kepada apa?", "Pemusatan fokus pada objek penting", ["Penyingkiran semua objek", "Penggunaan satu warna sahaja", "Pengulangan objek yang sama sahaja"], "Penegasan menjurus kepada pemusatan fokus, iaitu objek penting yang ingin diberikan tumpuan.", "M"),
      Q("Kontra dalam hiasan dalaman dihasilkan dengan unsur seni yang bagaimana?", "Yang bertentangan seperti warna, rupa, jalinan dan ruang", ["Yang sama sepenuhnya", "Yang tidak kelihatan", "Yang tiada warna"], "Kontra dihasilkan dengan unsur seni yang bertentangan.", "H"),
      Q("Ruang yang dipenuhi perabot dan hiasan dipanggil ruang apa?", "Ruang positif", ["Ruang negatif", "Ruang kosong", "Ruang ilusi"], "Ruang positif ialah ruang yang dipenuhi perabot dan hiasan; ruang negatif ialah ruang kosong.", "M"),
      Q("Antara berikut, yang manakah konsep Reka Bentuk Hiasan Dalaman?", "Kontemporari", ["Primitif", "Silinder", "Jahitan"], "Konsep: kontemporari, moden, klasik dan tradisional.", "M"),
      Q("Konsep hiasan dalaman manakah diserlahkan dengan warna hitam, kelabu, perak dan putih serta kelihatan ringkas dan tidak berserabut?", "Moden", ["Tradisional", "Klasik", "Kontemporari"], "Konsep moden ringkas dan tidak berserabut, dengan warna hitam, kelabu, perak dan putih.", "H"),
      Q("Konsep hiasan dalaman manakah menitikberatkan kehalusan seni tradisi berteraskan identiti bangsa?", "Tradisional", ["Moden", "Kontemporari", "Klasik"], "Konsep tradisional menitikberatkan kehalusan seni tradisi berteraskan identiti bangsa dengan warna alam.", "H"),
      Q("Berapakah prinsip ergonomik yang disenaraikan dalam hiasan dalaman?", "Tujuh", ["Tiga", "Lima", "Sepuluh"], "Terdapat tujuh prinsip ergonomik.", "H"),
      Q("Pelan lantai dihasilkan menggunakan alat atau teknik yang mana?", "Pembaris skala dan teknik pengolahan warna (rendering)", ["Penggelek dakwat sahaja", "Roda pemutar sahaja", "Ram pemidang sahaja"], "Pelan lantai dihasilkan menggunakan pembaris skala, tulisan seni bina dan teknik rendering.", "H")
    ],

    // ------------------------------------------------ Tajuk 7
    reka_industri: [
      Q("Apakah Reka Bentuk Industri?", "Produk yang direka untuk keperluan tertentu bagi menjadikan hidup lebih selesa, mudah dan terancang", ["Seni mengukir kayu di hutan", "Lukisan di dinding gua", "Seni menyulam benang"], "Reka Bentuk Industri merujuk kepada produk yang direka untuk keperluan tertentu dengan tujuan menjadikan kehidupan manusia lebih selesa, mudah dan terancang.", "M"),
      Q("Perkembangan Reka Bentuk Industri sejajar dengan peristiwa apa?", "Revolusi Perindustrian di Eropah", ["Perang Dunia Kedua", "Penubuhan Malaysia", "Zaman batu"], "Perkembangan Reka Bentuk Industri berlaku sejajar dengan Revolusi Perindustrian di Eropah pada penghujung abad ke-18.", "M"),
      Q("Kursus Reka Bentuk Industri diperkenalkan pada tahun 1967 di institusi mana?", "Institut Teknologi MARA (kini UiTM)", ["Universiti Sains Malaysia", "Universiti Teknologi Malaysia", "Akademi Nanyang"], "Kursus Reka Bentuk Industri diperkenalkan pada tahun 1967 di Institut Teknologi MARA.", "H"),
      Q("Produk terkenal hasil Reka Bentuk Industri di Malaysia yang dilancarkan pada tahun 1985 ialah apa?", "Kereta Proton Saga", ["Kereta Perodua Kancil", "Kapal terbang Boeing", "Motosikal Honda"], "Kereta Proton Saga dilancarkan pada tahun 1985 dan ialah model kereta pertama di Malaysia.", "M"),
      Q("Berapakah bidang Reka Bentuk Industri yang disenaraikan dalam buku teks?", "Tiga", ["Satu", "Lima", "Tujuh"], "Tiga bidang: reka bentuk produk, reka bentuk perabot dan reka bentuk automotif.", "M"),
      Q("Antara berikut, yang manakah bidang Reka Bentuk Industri?", "Reka bentuk automotif", ["Reka bentuk landskap", "Reka bentuk sulaman", "Reka bentuk cetakan"], "Tiga bidang: produk, perabot dan automotif.", "L"),
      Q("Reka bentuk produk merangkumi apa?", "Perkakasan domestik, aksesori dan peralatan elektrik", ["Hanya kereta", "Hanya kapal laut", "Hanya rumah"], "Reka bentuk produk merangkumi perkakasan domestik, aksesori, peralatan elektrik dan sebagainya.", "M"),
      Q("Reka bentuk perabot meliputi rekaan apa?", "Meja, kerusi, katil, kabinet, rak dan almari", ["Kapal, kereta dan jet", "Gasing, wau dan congkak", "Logo, simbol dan poster"], "Reka bentuk perabot meliputi meja, kerusi, katil, kabinet, rak dan almari.", "M"),
      Q("Reka bentuk automotif melibatkan kenderaan di mana?", "Darat, udara dan laut", ["Hanya di darat", "Hanya di udara", "Hanya di dalam rumah"], "Reka bentuk automotif melibatkan kenderaan darat, udara dan laut seperti motosikal, kereta, jet, kapal laut dan bot.", "M"),
      Q("'Bentuk mengikut fungsi' bermaksud apa?", "Reka bentuk lebih menumpukan aspek fungsi tanpa menekankan estetik dan ergonomik", ["Reka bentuk lebih menekankan bentuk luaran tanpa fungsi", "Reka bentuk tanpa sebarang bentuk", "Reka bentuk yang tidak boleh digunakan"], "Bentuk mengikut fungsi: reka bentuk lebih memberi tumpuan kepada aspek fungsi tanpa menekankan sudut estetik, ergonomik dan kesesuaian reka bentuk.", "H"),
      Q("'Fungsi mengikut bentuk' bermaksud apa?", "Reka bentuk lebih menekankan bentuk luaran dan nilai estetik tanpa mengambil kira fungsi", ["Reka bentuk lebih menumpukan fungsi sahaja", "Reka bentuk yang tiada rupa", "Reka bentuk yang tidak mempunyai warna"], "Fungsi mengikut bentuk: reka bentuk lebih menekankan bentuk luaran dan nilai estetik produk tanpa mengambil kira aspek fungsi.", "H"),
      Q("Apakah ergonomik menurut buku teks?", "Disiplin ilmu mengenai kebolehan, had dan ciri-ciri manusia yang berkaitan dengan reka bentuk", ["Seni menyulam benang", "Kaedah mencetak kayu", "Teknik membakar tanah liat"], "Ergonomik ialah satu disiplin ilmu mengenai kebolehan, had dan ciri-ciri manusia yang berkaitan dengan reka bentuk.", "M"),
      Q("Antara berikut, yang manakah aspek ergonomik yang perlu dipertimbangkan?", "Keselamatan", ["Harga bahan sahaja", "Nama pereka", "Warna kegemaran pereka"], "Aspek ergonomik: keselamatan, keselesaan, kesesuaian, kemudahan penjagaan dan pembaik pulih serta ketahanan.", "M"),
      Q("Antara berikut, yang manakah langkah dalam proses Reka Bentuk Industri?", "Membuat prototaip", ["Menjahit kerawang", "Membakar seramik", "Menggurisi plat asid"], "Proses: mengenal pasti masalah, mengumpul maklumat, kajian, mock up, perbincangan, menyempurnakan reka bentuk, prototaip dan promosi.", "M"),
      Q("Apakah peranan Reka Bentuk Industri kepada negara?", "Membangunkan ekonomi dan menawarkan banyak peluang pekerjaan", ["Mengurangkan semua pekerjaan", "Menghentikan perdagangan", "Menutup kilang"], "Reka Bentuk Industri berperanan membangunkan ekonomi negara dan menawarkan banyak peluang pekerjaan.", "M")
    ],

    // ------------------------------------------------ Tajuk 8
    sulaman: [
      Q("Apakah seni sulaman?", "Seni membuat hiasan motif dengan menggunakan tangan atau mesin", ["Seni membentuk tanah liat", "Seni menggambar dengan pensel", "Seni mengukir batu"], "Seni sulaman merupakan seni membuat hiasan motif dengan menggunakan tangan atau mesin.", "L"),
      Q("Apakah dua jenis seni sulaman?", "Sulaman tangan dan sulaman mesin", ["Sulaman panas dan sejuk", "Sulaman besar dan kecil sahaja", "Sulaman kayu dan sulaman batu"], "Seni sulaman terdiri daripada sulaman tangan dan sulaman mesin.", "L"),
      Q("Antara berikut, yang manakah contoh sulaman tangan?", "Sulaman reben", ["Sulaman mesin jahit", "Sulaman digital sahaja", "Sulaman pada kertas sahaja"], "Contoh sulaman tangan: benang, reben, silang pangkah, tampal dan manik.", "M"),
      Q("Sulaman kerawang ialah contoh sulaman jenis apa?", "Sulaman mesin", ["Sulaman tangan", "Sulaman manik", "Sulaman reben"], "Sulaman mesin ialah sulaman yang dihasilkan menggunakan mesin jahit, contohnya sulaman kerawang.", "H"),
      Q("Sulaman tampal menggunakan bahan apa dengan jahitan insang pari?", "Perca kain", ["Reben sahaja", "Manik sahaja", "Kertas sahaja"], "Sulaman tampal menggunakan perca kain dengan jahitan insang pari.", "M"),
      Q("Sulaman silang pangkah menggunakan jenis kain yang bagaimana?", "Kain berpetak", ["Kain bercorak awan larat", "Kain berlubang kerawang", "Kain getah"], "Sulaman silang pangkah menggunakan kain berpetak dengan jahitan silang pangkah.", "M"),
      Q("Apakah fungsi ram pemidang dalam seni sulaman?", "Menegangkan kain", ["Memotong kain", "Mewarna kain", "Mengukur kain"], "Ram pemidang digunakan untuk menegangkan kain.", "L"),
      Q("Ram jenis apakah yang digunakan untuk sulaman bersaiz besar?", "Ram kayu", ["Ram getah", "Ram kertas", "Ram kaca"], "Ram kayu digunakan untuk sulaman bersaiz besar dan ram getah untuk sulaman bersaiz kecil.", "H"),
      Q("Apakah bahan utama dalam seni sulaman?", "Benang dan reben", ["Tanah liat dan air", "Kayu dan batu", "Dakwat dan kertas"], "Benang dan reben ialah bahan utama dalam seni sulaman.", "L"),
      Q("Seni sulaman boleh dihasilkan dalam tiga bentuk. Antara berikut, yang manakah salah satunya?", "Sulaman timbul", ["Sulaman cair", "Sulaman kering", "Sulaman angin"], "Seni sulaman boleh dihasilkan secara sulaman datar, sulaman timbul atau sulaman kerawang.", "M"),
      Q("Teknik sulaman manakah digunakan untuk menghasilkan bunga ros dan bunga sakura?", "Bullion", ["French knots", "Ribbon stitch", "Jahitan jelujur"], "Teknik bullion digunakan untuk bunga ros dan bunga sakura.", "H"),
      Q("Teknik ribbon stitch digunakan untuk menghasilkan bunga apa?", "Bunga matahari", ["Bunga lavender", "Bunga carnation", "Bunga sakura"], "Teknik ribbon stitch digunakan untuk bunga matahari.", "H"),
      Q("Teknik French knots digunakan untuk menghasilkan bunga apa?", "Bunga lavender", ["Bunga matahari", "Bunga ros", "Bunga carnation"], "Teknik French knots digunakan untuk bunga lavender.", "H"),
      Q("Apakah insang pari menurut glosari buku teks?", "Jahitan untuk mengemaskan tepi kain tanpa kelim", ["Jenis kain berpetak", "Alat untuk menegangkan kain", "Jenis benang emas"], "Insang pari ialah jahitan untuk mengemaskan tepi kain tanpa kelim.", "H"),
      Q("Apakah kerawang menurut glosari buku teks?", "Sulaman yang berlubang-lubang (tebuk tembus)", ["Sulaman daripada reben sahaja", "Sulaman daripada manik sahaja", "Sulaman pada kertas"], "Kerawang ialah sulaman yang berlubang-lubang (tebuk tembus).", "H")
    ],

    // ------------------------------------------------ Tajuk 9
    seramik: [
      Q("Apakah seni seramik?", "Produk yang dihasilkan daripada tanah liat, dikeringkan dengan angin dan dikeraskan dengan api", ["Produk daripada kain dan benang", "Produk daripada kertas dan gam", "Produk daripada kaca cair sahaja"], "Seni seramik ialah produk daripada tanah liat, dikeringkan dengan angin dan dikeraskan dengan api.", "M"),
      Q("Apakah dua jenis seni seramik?", "Tradisional dan kontemporari", ["Besar dan kecil", "Lama dan baharu sahaja tanpa nama", "Kasar dan halus sahaja"], "Seni seramik terbahagi kepada seni seramik tradisional dan kontemporari.", "L"),
      Q("Antara berikut, yang manakah contoh seni seramik tradisional?", "Labu Sayong", ["Mesin pemutar", "Tanur elektrik", "Rotan dan logam perak"], "Contoh seramik tradisional: Labu Sayong (Perak), Tembikar Terenang (Pahang) dan Tembikar Mambong (Kelantan).", "L"),
      Q("Labu Sayong berasal dari negeri mana?", "Perak", ["Kelantan", "Pahang", "Johor"], "Labu Sayong (Perak).", "M"),
      Q("Seni seramik tradisional dikenali juga sebagai apa?", "Tembikar", ["Tenunan", "Songket", "Batik"], "Seni seramik tradisional dikenali juga sebagai tembikar.", "L"),
      Q("Apakah bahan paling penting dalam pembuatan seramik tradisional?", "Tanah liat dan air", ["Kayu dan besi", "Kain dan benang", "Kertas dan gam"], "Bahan paling penting dalam pembuatan seramik tradisional ialah tanah liat dan air.", "L"),
      Q("Seni seramik kontemporari ialah gabungan seramik dengan apa?", "Pelbagai bahan lain seperti logam perak, rotan, tali dan kayu", ["Tiada bahan lain", "Hanya air", "Hanya kertas"], "Seni seramik kontemporari ialah gabungan bahan seramik dengan pelbagai bahan lain.", "M"),
      Q("Apakah tanur menurut glosari buku teks?", "Dapur untuk membakar dan mengering seramik", ["Alat untuk mengukir kayu", "Alat untuk menyulam kain", "Alat untuk mengukur tanah"], "Tanur ialah dapur untuk membakar dan mengering seramik.", "M"),
      Q("Mengapakah tanah liat diuli hingga menjadi doh yang padat?", "Untuk mengeluarkan angin supaya produk tidak mudah pecah apabila dibakar", ["Supaya produk menjadi lebih ringan", "Supaya produk berbau wangi", "Supaya produk menjadi lut sinar"], "Tanah liat diuli untuk mengeluarkan angin supaya produk tidak mudah pecah apabila dibakar.", "H"),
      Q("Berapakah teknik seni seramik yang disenaraikan dalam buku teks?", "Lima", ["Tujuh", "Tiga", "Sepuluh"], "Lima teknik: picit, lingkaran, kepingan, lempar alin dan acuan.", "M"),
      Q("Teknik membentuk seramik yang paling mudah, dengan menekan dan memicit ketulan tanah liat, ialah teknik apa?", "Teknik picit", ["Teknik lingkaran", "Teknik kepingan", "Teknik lempar alin"], "Teknik picit ialah kaedah membentuk yang paling mudah.", "M"),
      Q("Teknik lempar alin terhad kepada bentuk apa?", "Bulat dan silinder", ["Segi tiga dan bintang", "Pipih dan nipis sahaja", "Segi empat sama sahaja"], "Teknik lempar alin terhad kepada bentuk bulat dan silinder, dibentuk dengan mesin atau roda pemutar.", "H"),
      Q("Teknik lempar alin dikenali juga sebagai teknik apa?", "Teknik putaran", ["Teknik picit", "Teknik kepingan", "Teknik acuan"], "Teknik lempar alin juga dikenali dengan teknik putaran.", "H"),
      Q("Apakah slip dalam seni seramik?", "Lumpur tanah liat pekat yang berfungsi sebagai gam pelekat", ["Sejenis tanur", "Sejenis cat minyak", "Sejenis benang"], "Slip ialah lumpur tanah liat pekat yang berfungsi sebagai gam pelekat.", "M"),
      Q("Antara berikut, yang manakah sifat seramik?", "Keras dan kuat tetapi rapuh", ["Lembut dan mudah dilipat", "Mudah terbakar", "Menyerap haba dan elektrik sepenuhnya"], "Sifat seramik: takat lebur tinggi; keras, kuat tetapi rapuh; tiada tindak balas kimia; penebat haba dan elektrik yang baik.", "H")
    ],

    // ------------------------------------------------ Tajuk 10
    reka_grafik: [
      Q("Apakah komunikasi visual menurut buku teks?", "Penyampaian idea melalui simbol dan imej", ["Penyampaian idea melalui bunyi sahaja", "Penyampaian idea melalui bau", "Penyampaian idea melalui rasa"], "Komunikasi Visual ialah penyampaian idea melalui simbol dan imej.", "L"),
      Q("Seni Reka Grafik ialah salah satu bidang di bawah apa?", "Komunikasi Visual", ["Seni Seramik", "Seni Sulaman", "Seni Catan"], "Seni Reka Grafik ialah salah satu bidang di bawah Komunikasi Visual.", "M"),
      Q("Apakah yang dihasilkan oleh gabungan simbol dan imej teks?", "Representasi tampak sesuatu idea atau mesej", ["Bau makanan", "Bunyi muzik", "Rasa manis"], "Gabungan simbol dan imej teks menghasilkan representasi tampak sesuatu idea atau mesej.", "M"),
      Q("Reka bentuk korporat meliputi apa?", "Logo dan penjenamaan", ["Majalah dan buku sahaja", "Pembungkusan sahaja", "Papan tanda sahaja"], "Reka bentuk korporat meliputi logo dan penjenamaan.", "M"),
      Q("Reka bentuk editorial meliputi apa?", "Majalah, surat khabar dan buku", ["Logo dan penjenamaan", "Papan tanda dan pembungkusan", "Laman sesawang sahaja"], "Reka bentuk editorial meliputi majalah, surat khabar dan buku.", "M"),
      Q("Apakah simbol menurut buku teks?", "Reka bentuk grafik yang diringkaskan daripada imej figura manusia, haiwan, alam dan benda", ["Gambar foto yang berwarna penuh", "Lukisan berskala besar", "Arca daripada tanah liat"], "Simbol ialah reka bentuk grafik yang diringkaskan daripada imej figura manusia, haiwan, alam dan benda.", "M"),
      Q("Apakah tujuan simbol dicipta?", "Memudahkan pengguna memahami sesuatu tanpa menggunakan perkataan", ["Menggantikan semua bahasa", "Menyembunyikan mesej", "Menghiasi dinding rumah sahaja"], "Tujuan simbol dicipta adalah untuk memudahkan pengguna memahami sesuatu tanpa perkataan.", "M"),
      Q("Perkataan logo diambil daripada bahasa Yunani 'Logotype' yang bermaksud apa?", "Cetakan perkataan", ["Cetakan gambar", "Lukisan warna", "Bunyi huruf"], "Logotype bermaksud 'cetakan perkataan'.", "H"),
      Q("Logo ialah lambang atau tanda bagi siapa atau apa?", "Perniagaan, kelab, persatuan atau agensi", ["Hanya seorang individu", "Hanya binatang", "Hanya tumbuhan"], "Logo ialah lambang atau tanda bagi sesebuah perniagaan, kelab, persatuan atau agensi.", "M"),
      Q("Antara berikut, yang manakah contoh logo yang disebut dalam buku teks?", "Proton", ["Labu Sayong", "Gasing pangkah", "Okok"], "Contoh logo: Pos Malaysia, Proton, RTM, Malaysia Airports dan FELDA.", "L"),
      Q("Simbol Sukan Olimpik 'Olympic Rings' mempunyai berapa gelung?", "Lima", ["Tiga", "Empat", "Sembilan"], "Olympic Rings mempunyai lima gelung berwarna berlatarkan putih yang mewakili setiap benua.", "M"),
      Q("Antara berikut, yang manakah ciri logo?", "Ringkas, jelas dan mudah diingati", ["Rumit dan sukar dibaca", "Bertukar setiap hari", "Tidak boleh dilihat dari jauh"], "Ciri logo: ringkas, jelas dan mudah diingati, serta penggunaannya dapat bertahan lama.", "M"),
      Q("Antara berikut, yang manakah ciri simbol?", "Menyampaikan mesej tanpa sebarang penerangan", ["Mesti ditulis dengan paragraf panjang", "Tidak mempunyai bentuk", "Hanya boleh difahami oleh satu bangsa"], "Ciri simbol: menyampaikan mesej tanpa sebarang penerangan, bentuk dipermudahkan tetapi mengekalkan sifat asal objek.", "M"),
      Q("Alam semula jadi yang dirujuk dalam jenis simbol dan logo boleh dibahagikan kepada tiga. Antara berikut, yang manakah salah satunya?", "Kosmos", ["Kereta", "Rumah", "Komputer"], "Alam semula jadi dibahagikan kepada kosmos, flora dan fauna.", "H")
    ],

    // ------------------------------------------------ Tajuk 11
    foto: [
      Q("Perkataan fotografi berasal daripada bahasa apa?", "Greek", ["Latin", "Arab", "Cina"], "Perkataan fotografi berasal daripada perkataan Greek: 'photos' (cahaya) dan 'graphein' (melukis).", "M"),
      Q("Perkataan Greek 'photos' bermaksud apa?", "Cahaya", ["Melukis", "Bunyi", "Warna"], "'photos' bermaksud cahaya dan 'graphein' bermaksud melukis.", "M"),
      Q("Apakah kamera pinhole?", "Kamera lubang jarum, iaitu kamera yang paling ringkas", ["Kamera digital yang paling mahal", "Kamera video", "Kamera dengan banyak lensa"], "Kamera pinhole juga dikenali sebagai kamera lubang jarum dan merupakan kamera yang paling ringkas.", "M"),
      Q("Kamera pinhole terdiri daripada apa?", "Kotak kedap cahaya dengan satu lubang jarum dan kertas foto atau filem", ["Kotak berlensa dan skrin", "Dua cermin dan enjin", "Tin kosong tanpa lubang"], "Kamera pinhole terdiri daripada kotak kedap cahaya dengan satu lubang jarum dan kertas foto atau filem pada arah yang bertentangan.", "M"),
      Q("Bagaimanakah imej yang dipancarkan pada kamera pinhole?", "Songsang", ["Tegak seperti objek", "Tidak kelihatan", "Berwarna merah sahaja"], "Cahaya yang masuk melalui lubang kecil memancarkan imej pada arah bertentangan, maka imej yang dipancarkan adalah songsang.", "M"),
      Q("Kamera pinhole sesuai merakam objek yang bagaimana?", "Objek yang pegun", ["Objek yang bergerak laju", "Objek yang terbang", "Objek yang berlari"], "Kamera pinhole merakam objek yang pegun sahaja kerana memerlukan pendedahan cahaya yang lama.", "M"),
      Q("Mengapakah kamera pinhole tidak sesuai merakam objek yang bergerak?", "Memerlukan pendedahan kepada cahaya yang lama kerana lubang kecil hanya membenarkan sedikit cahaya masuk", ["Kerana lubangnya terlalu besar", "Kerana kamera ini bermotor", "Kerana kamera ini tiada kotak"], "Pendedahan cahaya yang lama diperlukan kerana lubang kecil hanya membenarkan sedikit cahaya masuk.", "H"),
      Q("Kamera pinhole ialah kamera paling asas tanpa apa?", "Lensa", ["Kotak", "Lubang", "Kertas foto"], "Kamera pinhole merupakan kamera paling asas tanpa lensa.", "M"),
      Q("Siapakah saintis Islam yang mencipta kamera pinhole?", "Ibn Haytham", ["Ibn Sina", "Al-Khawarizmi", "Al-Razi"], "Kamera pinhole dicipta oleh saintis Islam Ibn Haytham (965-1040 Masihi).", "H"),
      Q("Apakah yang dibuktikan oleh Ibn Haytham menggunakan kamera pinhole?", "Cahaya bergerak dalam satu garis lurus", ["Cahaya bergerak berpusing-pusing", "Cahaya tidak boleh dilihat", "Cahaya hanya wujud pada waktu malam"], "Ibn Haytham membuktikan cahaya bergerak dalam satu garis lurus dan penglihatan dihasilkan oleh cahaya yang masuk ke dalam mata.", "H"),
      Q("Apakah yang berlaku pada imej apabila lubang pada kamera pinhole semakin kecil?", "Imej semakin jelas", ["Imej semakin kabur", "Imej hilang sepenuhnya", "Imej bertukar menjadi muzik"], "Buku teks: semakin kecil lubang, imej yang terhasil semakin jelas; semakin besar lubang, imej semakin kabur.", "H"),
      Q("Apakah nama lain bagi lubang kecil pada kamera pinhole?", "Aperture", ["Lensa", "Kanvas", "Pemidang"], "Lubang kecil pada kamera pinhole juga disebut aperture.", "H"),
      Q("Kamera pinhole berbentuk silinder menghasilkan imej yang bagaimana?", "Cembung seperti lensa fish eye", ["Normal dan rata", "Tidak bergambar", "Berbentuk segi empat"], "Kamera berbentuk silinder menghasilkan imej yang cembung kerana kertas foto melengkung mengikut bentuk silinder.", "H"),
      Q("Kamera pinhole boleh dihasilkan menggunakan bahan terpakai yang mana?", "Kotak, tin dan botol", ["Hanya besi tuang", "Hanya kaca kristal", "Hanya batu"], "Kamera pinhole boleh dihasilkan menggunakan bahan terpakai seperti kotak, tin dan botol.", "L")
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
