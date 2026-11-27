/**
 * Full mock exam bank: Darjah 6 UASA Bahasa Melayu (KSSR Semakan 2017, Bahagian A-D).
 * Format follows official KPM UASA specifications. Verified 27/Nov/2026: Gate 1 (scripts/verify-structured-d6.mjs) + Gate 2 blind solve (gemini-4-argon, 0 flags, 100% agreement).
 */
(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.mockObjective = App.Data.mockObjective || {};
    App.Data.mockObjective.d6_bm = { SETS: out.SETS };
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.d6_bm = { ITEMS: out.ITEMS, marksOf: out.marksOf };
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const SETS = [
  {
    "id": "d6bm-A-set1",
    "part": "A",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "tatabahasa",
        "passage": "",
        "q": "Pilih ayat yang menggunakan kata kerja transitif dengan betul.",
        "options": [
          "Puan Salma membincangkan langkah penjimatan air bersama-sama jirannya.",
          "Puan Salma membincangkan tentang langkah penjimatan air bersama-sama jirannya.",
          "Murid-murid Tahun Enam amat menyayangi akan guru kelas mereka.",
          "Encik Lim menceritakan tentang pengalaman beliau semasa melancong di Sabah."
        ],
        "correctIndex": 0,
        "explanation": "Kata kerja transitif seperti 'membincangkan', 'menyayangi', dan 'menceritakan' mesti diikuti terus oleh objek (frasa nama) tanpa menyisipkan kata sendi nama seperti 'tentang' atau 'akan'."
      },
      {
        "chapterId": "imbuhan",
        "passage": "",
        "q": "Pilih ayat yang menggunakan kata berimbuhan dengan betul mengikut hukum Tatabahasa Dewan.",
        "options": [
          "Pihak sekolah akan memperketatkan kawalan keselamatan di pintu pagar utama.",
          "Jawatankuasa penduduk berusaha untuk memperkukuh perpaduan dalam kalangan jiran.",
          "Para pekerja sedang mempastikan peralatan di makmal sains berfungsi dengan baik.",
          "Mesin moden itu digunakan untuk memeroses buah-buahan tempatan menjadi jus."
        ],
        "correctIndex": 1,
        "explanation": "Imbuhan apitan 'memper-...-kan' tidak boleh digabungkan dengan kata adjektif; bentuk yang betul ialah 'memperkukuh' dan 'memperketat'. Selain itu, ejaan yang baku ialah 'memastikan' dan 'memproses'."
      },
      {
        "chapterId": "peribahasa",
        "passage": "",
        "q": "Penduduk Kampung Sejahtera sentiasa bantu-membantu menjayakan majlis kenduri tanpa mengira penat lelah. Peribahasa yang paling sesuai untuk menggambarkan sikap mereka ialah...",
        "options": [
          "bagai mencurah air ke daun keladi",
          "sedikit-sedikit, lama-lama menjadi bukit",
          "berat sama dipikul, ringan sama dijinjing",
          "sesal dahulu pendapatan, sesal kemudian tidak berguna"
        ],
        "correctIndex": 2,
        "explanation": "'Berat sama dipikul, ringan sama dijinjing' bermaksud sesuatu kerja yang susah atau senang dilakukan bersama-sama secara muafakat."
      },
      {
        "chapterId": "ejaan_tanda_baca",
        "passage": "",
        "q": "Pilih ayat yang mempunyai ejaan kata majmuk dan tanda baca yang betul.",
        "options": [
          "\"Bilakah hari keluarga Taman Harmoni akan diadakan!\" tanya Encik Hafiz.",
          "Semua warga negara perlu memikul tanggung jawab menjaga kebersihan alam sekitar.",
          "\"Sila tulis nama penuh dan tanda tangan di sini,\" pesan kerani pejabat itu.",
          "Kerjasama antara penduduk dengan pihak berkuasa tempatan amat membanggakan."
        ],
        "correctIndex": 3,
        "explanation": "'Kerjasama' ialah kata majmuk mantap yang dieja serangkai. Pilihan lain salah kerana tanda seru digunakan dalam ayat tanya, serta kata majmuk mantap 'warganegara', 'tanggungjawab', dan 'tandatangan' dieja terpisah."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Mengapakah Projek Kebun Komuniti Lestari dimulakan di kawasan tanah terbiar itu?",
        "options": [
          "Untuk menghapuskan semak samun serta tempat pembiakan nyamuk aedes",
          "Untuk membina balai raya baharu bagi kegunaan penduduk setempat",
          "Untuk mengadakan pertandingan menanam cili antara murid sekolah",
          "Untuk menjual baja kompos kepada peniaga di pasar pagi komuniti"
        ],
        "correctIndex": 0,
        "explanation": "Berdasarkan perenggan pertama, tanah terbiar itu sebelum ini dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes, lalu dibersihkan untuk dijadikan kebun sayur organik."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Bagaimanakah penduduk Taman Harmoni menyuburkan tanaman di kebun komuniti mereka?",
        "options": [
          "Dengan membeli baja kimia yang berkualiti tinggi di kedai pertanian",
          "Dengan memproses sisa dapur dan daun kering menjadi baja kompos",
          "Dengan menyiram tanaman menggunakan air hujan yang ditakung sahaja",
          "Dengan menanam pokok cili di dalam pasu plastik terpakai"
        ],
        "correctIndex": 1,
        "explanation": "Perenggan kedua menyatakan bahawa penduduk tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering."
      },
      {
        "chapterId": "kosa_kata",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Apakah maksud perkataan 'Inisiatif' dalam perenggan ketiga petikan di atas?",
        "options": [
          "Peraturan ketat yang wajib dipatuhi",
          "Halangan yang menyukarkan sesuatu tugasan",
          "Usaha atau daya usaha yang dimulakan",
          "Keuntungan wang ringgit daripada perniagaan"
        ],
        "correctIndex": 2,
        "explanation": "Dalam konteks ayat tersebut, 'inisiatif murni' merujuk usaha atau langkah baik yang dimulakan oleh penduduk Taman Harmoni melalui projek kebun komuniti."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Berdasarkan petikan, mengapakah penglibatan murid sekolah dalam projek tersebut dianggap bermanfaat?",
        "options": [
          "Mereka dapat menggantikan tugas pekerja pembersihan di balai raya",
          "Mereka dibayar upah lumayan setiap kali menyiram sayur-sayuran",
          "Mereka tidak perlu menghadiri kelas sains di sekolah lagi",
          "Mereka memperoleh pengalaman praktikal sambil memupuk rasa tanggungjawab"
        ],
        "correctIndex": 3,
        "explanation": "Secara tersirat, peluang menyiram tanaman dan mencatat tumbesaran pokok memberi murid pengalaman pembelajaran sains secara praktikal serta memupuk nilai tanggungjawab terhadap komuniti."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Apakah idea utama keseluruhan petikan ini?",
        "options": [
          "Projek kebun komuniti memberi faedah kebersihan, makanan sihat, dan perpaduan",
          "Penanaman cili lebih menguntungkan berbanding dengan penanaman sawi dan bayam",
          "Penduduk taman perumahan dilarang membeli sayur-sayuran dari pasar pagi",
          "Nyamuk aedes hanya membiak di kawasan berhampiran balai raya sahaja"
        ],
        "correctIndex": 0,
        "explanation": "Keseluruhan petikan menerangkan pelaksanaan Projek Kebun Komuniti Lestari yang membersihkan kawasan terbiar, membekalkan sayur organik segar, membantu golongan memerlukan, dan mengeratkan perpaduan."
      },
      {
        "chapterId": "seni_bahasa",
        "passage": "Pada awal tahun ini, Persatuan Penduduk Taman Harmoni melancarkan Projek Kebun Komuniti Lestari di sebidang tanah terbiar berhampiran balai raya. Sebelum ini, kawasan tersebut dipenuhi semak samun dan sering menjadi tempat pembiakan nyamuk aedes. Pengerusi persatuan, Encik Razak, mencadangkan agar kawasan itu dibersihkan secara gotong-royong untuk dijadikan tapak tanaman sayur-sayuran organik.\n\nSetiap hujung minggu, penduduk daripada pelbagai kaum berganding bahu menanam sawi, bayam, dan cili. Mereka tidak menggunakan racun perosak kimia, sebaliknya menghasilkan baja kompos daripada sisa dapur seperti kulit buah-buahan dan daun kering. Murid-murid sekolah di taman itu turut diberi peluang menyiram tanaman serta mencatat tumbesaran pokok sebagai latihan sains harian.\n\nHasil tuaian kebun tersebut diagihkan secara adil kepada warga emas dan keluarga yang memerlukan, manakala selebihnya dijual di pasar pagi komuniti. Inisiatif murni ini bukan sahaja menceriakan persekitaran taman dan membekalkan makanan segar, malah berjaya mengeratkan hubungan silaturahim sesama jiran.",
        "q": "Apakah pengajaran utama yang dapat kita teladani daripada penduduk Taman Harmoni?",
        "options": [
          "Kita hendaklah menjual semua hasil tanaman untuk mengumpul harta",
          "Kita perlulah bekerjasama menjaga alam sekitar dan mengambil berat kebajikan jiran",
          "Kita wajar menyerahkan kerja pembersihan kawasan kepada murid sekolah",
          "Kita mestilah mengelakkan penggunaan baja kompos daripada sisa dapur"
        ],
        "correctIndex": 1,
        "explanation": "Penduduk Taman Harmoni menunjukkan teladan kerjasama menjaga kebersihan alam sekitar dan keprihatinan membantu warga emas serta keluarga yang memerlukan."
      }
    ]
  },
  {
    "id": "d6bm-A-set2",
    "part": "A",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "sintaksis",
        "passage": "",
        "q": "Pilih ayat pasif yang paling gramatis.",
        "options": [
          "Buku catatan kewangan kelab itu telah dicatat oleh saya semalam.",
          "Buku catatan kewangan kelab itu saya telah catat semalam.",
          "Buku catatan kewangan kelab itu telah saya catat semalam.",
          "Buku catatan kewangan kelab itu dicatat oleh kami pada minggu lalu."
        ],
        "correctIndex": 2,
        "explanation": "Bagi ayat pasif kata ganti nama diri pertama ('saya', 'kami'), kata bantu seperti 'telah' mesti diletakkan di hadapan kata ganti nama diri tersebut tanpa imbuhan pasif 'di-' atau kata sendi 'oleh'."
      },
      {
        "chapterId": "tatabahasa",
        "passage": "",
        "q": "Pilih ayat yang menggunakan kata bilangan, kata ganda, dan penjodoh bilangan dengan betul.",
        "options": [
          "Banyak gerai-gerai jualan dibuka sempena Hari Keusahawanan sekolah.",
          "Pak Cik Musa menanam beberapa buah pokok pisang di belakang rumahnya.",
          "Pelbagai kuih-muih tradisional dihidangkan kepada para tetamu-tetamu.",
          "Datuk membeli sebidang tanah sawah untuk mengusahakan tanaman padi."
        ],
        "correctIndex": 3,
        "explanation": "Penjodoh bilangan 'bidang' tepat untuk tanah. Pilihan lain salah kerana 'banyak' dan 'pelbagai' tidak boleh digandingkan dengan kata ganda jamak, 'para' tidak boleh diikuti 'tetamu-tetamu', dan pokok menggunakan 'batang'."
      },
      {
        "chapterId": "kosa_kata",
        "passage": "",
        "q": "Pegawai polis itu sedang ______ siasatan terperinci berhubung kes kecurian basikal di taman perumahan tersebut.",
        "options": [
          "menjalankan",
          "menjalani",
          "menjauhi",
          "merasa"
        ],
        "correctIndex": 0,
        "explanation": "'Menjalankan' bermaksud melaksanakan sesuatu tugas atau siasatan, manakala 'menjalani' bermaksud mengalami atau menerima sesuatu seperti rawatan atau hukuman."
      },
      {
        "chapterId": "seni_bahasa",
        "passage": "",
        "q": "Baca pantun di bawah dengan teliti.\n\nPergi ke pekan membeli raga,\nSinggah sebentar di tepi perigi;\nJujur dan amanah amalan mulia,\nMaruah diri terpelihara tinggi.\n\nApakah maksud pantun tersebut?",
        "options": [
          "Kita hendaklah membeli raga di pekan dan berehat di tepi perigi.",
          "Sikap jujur serta amanah merupakan amalan terpuji yang menjaga kehormatan diri.",
          "Seseorang yang rajin bekerja akan mendapat kekayaan yang melimpah ruah.",
          "Amalan berbudi bahasa hanya perlu diamalkan ketika berada di tempat awam."
        ],
        "correctIndex": 1,
        "explanation": "Maksud pantun empat kerat terletak pada dua baris terakhir (baris maksud), iaitu bersikap jujur dan amanah ialah amalan mulia yang memelihara maruah diri."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Apakah tujuan utama Minggu Inovasi dan Keselamatan Siber dianjurkan di SK Sri Mutiara?",
        "options": [
          "Untuk memilih wakil sekolah ke pertandingan kereta lumba peringkat negeri",
          "Untuk mengumpul botol plastik dan kotak terpakai bagi jualan amal",
          "Untuk memupuk daya cipta murid dan kesedaran penggunaan Internet secara berhemah",
          "Untuk melatih murid menjadi pegawai teknologi maklumat selepas tamat sekolah"
        ],
        "correctIndex": 2,
        "explanation": "Perenggan pertama laporan menyatakan dengan jelas bahawa program ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Apakah nasihat yang diberikan oleh penceramah keselamatan siber kepada murid-murid?",
        "options": [
          "Menggunakan panel suria mini untuk mengecas komputer riba di sekolah",
          "Menyertai kuiz integriti digital bersama-sama ahli keluarga di rumah",
          "Menghasilkan model kenderaan mesra alam menggunakan bahan baharu",
          "Tidak mendedahkan kata laluan atau maklumat peribadi kepada orang asing dalam talian"
        ],
        "correctIndex": 3,
        "explanation": "Perenggan kedua menyatakan bahawa penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya."
      },
      {
        "chapterId": "kosa_kata",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Rangkai kata 'secara berhemah' dalam petikan bermaksud...",
        "options": [
          "dengan penuh tanggungjawab, cermat, dan berbudi pekerti",
          "dengan tergesa-gesa tanpa memikirkan kesannya",
          "secara rahsia daripada pengetahuan ibu bapa",
          "dengan menggunakan perbelanjaan yang sangat besar"
        ],
        "correctIndex": 0,
        "explanation": "'Berhemah' dalam konteks penggunaan Internet bermaksud bersikap cermat, berhati-hati, bijaksana, dan bertanggungjawab."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Mengapakah murid Tahap Dua digalakkan menggunakan bahan kitar semula dan panel suria mini dalam pameran reka cipta?",
        "options": [
          "Kerana sekolah tidak mempunyai bekalan elektrik di dewan utama",
          "Untuk memupuk kesedaran kelestarian alam sekitar serta tenaga bersih",
          "Kerana bahan kitar semula lebih mahal daripada komponen elektronik biasa",
          "Untuk memastikan semua model kereta mainan dapat dijual kepada orang luar"
        ],
        "correctIndex": 1,
        "explanation": "Penggunaan bahan kitar semula dan panel suria mini untuk menghasilkan kenderaan mesra alam secara tersirat bertujuan mendidik murid menghargai amalan kitar semula dan tenaga solar yang mesra alam."
      },
      {
        "chapterId": "pemahaman",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Pernyataan manakah yang TIDAK BENAR tentang Minggu Inovasi dan Keselamatan Siber tersebut?",
        "options": [
          "Program ini berlangsung selama lima hari pada bulan Oktober.",
          "Majlis perasmian disempurnakan oleh Guru Besar SK Sri Mutiara.",
          "Kuiz integriti digital diadakan pada hari perasmian program.",
          "Penceramah jemputan mengingatkan murid agar menjaga maklumat peribadi."
        ],
        "correctIndex": 2,
        "explanation": "Menurut perenggan ketiga, kuiz integriti digital diadakan pada hari penutup program di dewan sekolah, bukan pada hari perasmian."
      },
      {
        "chapterId": "peribahasa",
        "passage": "Laporan Minggu Inovasi dan Keselamatan Siber SK Sri Mutiara\n\nPada 14 hingga 18 Oktober yang lalu, Sekolah Kebangsaan Sri Mutiara telah menganjurkan Minggu Inovasi dan Keselamatan Siber. Program tahunan ini bertujuan untuk memupuk daya cipta murid di samping meningkatkan kesedaran tentang penggunaan Internet secara berhemah. Majlis perasmian telah disempurnakan oleh Guru Besar, Puan Hajah Aminah.\n\nAntara pengisian menarik termasuklah pameran reka cipta sains yang menampilkan pelbagai model kenderaan mesra alam hasil tangan murid Tahap Dua. Murid-murid menggunakan bahan kitar semula seperti botol plastik, kotak terpakai, dan panel suria mini untuk menghasilkan kereta mainan bergerak. Selain itu, ceramah keselamatan siber turut disampaikan oleh pegawai daripada Suruhanjaya Komunikasi dan Multimedia Malaysia. Penceramah menasihati murid supaya tidak berkongsi kata laluan atau maklumat peribadi dengan orang yang tidak dikenali di alam maya.\n\nPada hari penutup, kuiz integriti digital telah diadakan di dewan sekolah. Secara keseluruhannya, program ini berjalan dengan lancar dan mendapat sambutan hangat daripada seluruh warga sekolah.",
        "q": "Apakah peribahasa yang paling tepat dikaitkan dengan nasihat penceramah agar murid berwaspada sebelum menjadi mangsa penipuan siber?",
        "options": [
          "Bagai katak di bawah tempurung",
          "Genggam bara api biar sampai jadi arang",
          "Alah bisa tegal biasa",
          "Sediakan payung sebelum hujan"
        ],
        "correctIndex": 3,
        "explanation": "'Sediakan payung sebelum hujan' bermaksud berwaspada dan membuat persediaan awal sebelum ditimpa kesusahan atau bahaya, sesuai dengan langkah berjaga-jaga melindungi maklumat peribadi di alam maya."
      }
    ]
  }
];

  const ITEMS = [
  {
    "id": "d6bm-B01",
    "chapterId": "pemahaman",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Baca petikan di bawah dengan teliti, kemudian jawab soalan-soalan yang berikutnya.\n\n\"Amalan mengambil sarapan berkhasiat sebelum ke sekolah amat penting untuk membekalkan tenaga serta meningkatkan daya tumpuan murid di dalam kelas. Malangnya, masih ada segelintir murid yang gemar mengambil makanan ringan berbanding dengan makanan seimbang. Ibu bapa disarankan menyediakan hidangan ringkas seperti roti bijirin penuh, telur, dan buah-buahan segar di rumah.\"",
    "parts": [
      {
        "label": "(a)",
        "q": "Senaraikan dua jenis makanan berkhasiat yang disarankan untuk sarapan murid dalam petikan di atas.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan satu makanan berkhasiat daripada petikan dengan tepat (contoh: roti bijirin penuh / telur / buah-buahan segar)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan makanan berkhasiat kedua dengan tepat dan ayat yang gramatis."
          }
        ],
        "answer": "Dua jenis makanan berkhasiat yang disarankan untuk sarapan murid ialah roti bijirin penuh dan telur (atau buah-buahan segar)."
      },
      {
        "label": "(b)",
        "q": "Pada pendapat kamu, apakah kesan yang mungkin berlaku jika seseorang murid kerap meninggalkan sarapan pagi sebelum ke sekolah? Jelaskan dua kesan.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Mengenal pasti kesan pertama yang logik (murid berasa letih/lesu atau sukar menumpukan perhatian)."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Mengenal pasti kesan kedua yang relevan (risiko sakit perut/gastrik atau prestasi akademik merosot)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Huraian lengkap menggunakan ayat yang gramatis dan ejaan yang betul."
          }
        ],
        "answer": "Pada pendapat saya, murid yang kerap meninggalkan sarapan pagi akan mudah berasa letih dan mengantuk sehingga sukar menumpukan perhatian semasa guru mengajar. Selain itu, perut yang kosong terlalu lama boleh menyebabkan sakit perut atau gastrik yang mengganggu proses pembelajaran."
      }
    ]
  },
  {
    "id": "d6bm-B02",
    "chapterId": "sintaksis",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Baca situasi di bawah dengan teliti.\n\nSemasa waktu rehat, kamu ternampak paip air di luar kantin sekolah telah pecah sehingga air bertakung dan menyebabkan laluan pejalan kaki menjadi licin. Ramai murid sedang bergegas menuju ke kantin.",
    "parts": [
      {
        "label": "(a)",
        "q": "Apakah dua tindakan segera yang wajar kamu lakukan ketika melihat situasi tersebut?",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan tindakan keselamatan awal kepada rakan (mengingatkan murid lain supaya berhati-hati atau mengelak kawasan licin)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tindakan melaporkan kerosakan kepada guru bertugas atau pihak pejabat sekolah dengan segera."
          }
        ],
        "answer": "Saya akan segera mengingatkan rakan-rakan yang lalu supaya berhati-hati dan menggunakan laluan alternatif agar tidak tergelincir. Seterusnya, saya akan melaporkan kerosakan paip tersebut kepada guru bertugas atau kerani pejabat sekolah dengan kadar segera."
      },
      {
        "label": "(b)",
        "q": "Cadangkan dua langkah pencegahan yang boleh diambil oleh pihak sekolah supaya kejadian kemalangan di kawasan licin seperti itu tidak berulang pada masa hadapan.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan langkah pertama yang praktikal (contoh: meletakkan papan tanda amaran lantai licin dan kon keselamatan)."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan langkah kedua yang berkesan (contoh: menjalankan pemeriksaan berkala terhadap paip serta memasang alas getah anti-gelincir)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Penyampaian idea yang jelas, koheren, dan menggunakan Bahasa Melayu baku."
          }
        ],
        "answer": "Pihak sekolah boleh menyediakan kon keselamatan dan papan tanda amaran 'Lantai Licin' berhampiran kawasan berair supaya murid sentiasa berwaspada. Di samping itu, pihak sekolah wajar menjalankan pemeriksaan berkala terhadap paip air serta memasang jubin atau alas getah anti-gelincir di laluan utama kantin."
      }
    ]
  },
  {
    "id": "d6bm-B03",
    "chapterId": "tatabahasa",
    "part": "B",
    "level": "sederhana",
    "status": "verified",
    "stem": "Baca petikan di bawah dengan teliti, kemudian jawab soalan-soalan yang berikutnya.\n\n\"Ketika berjalan pulang dari perpustakaan awam, Amirul terjumpa sebuah dompet kulit berwarna coklat di tepi pondok bas. Di dalam dompet itu terdapat wang tunai dan kad pengenalan milik seorang warga emas. Tanpa berfikir panjang, Amirul menyerahkan dompet tersebut kepada pegawai polis di balai polis berhampiran. Pemilik dompet itu amat terharu dan memuji sikap amanah Amirul.\"",
    "parts": [
      {
        "label": "(a)",
        "q": "Tukarkan ayat susunan biasa berikut kepada ayat susunan songsang tanpa mengubah maksud asalnya:\n'Pemilik dompet itu amat terharu.'",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Mengedepankan predikat 'amat terharu' di hadapan subjek 'pemilik dompet itu'."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Binaan ayat susunan songsang tepat dan tidak meletakkan tanda koma antara predikat dengan subjek."
          }
        ],
        "answer": "Amat terharu pemilik dompet itu."
      },
      {
        "label": "(b)",
        "q": "Nyatakan dua nilai murni yang ditunjukkan oleh Amirul berserta contoh tindakannya daripada petikan.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan nilai pertama (amanah / jujur) dengan bukti tidak mengambil wang tunai di dalam dompet."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Menyatakan nilai kedua (prihatin / bertanggungjawab) dengan bukti menyerahkan dompet di balai polis berhampiran."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Jawapan ditulis dalam ayat yang lengkap dan gramatis."
          }
        ],
        "answer": "Nilai murni pertama yang ditunjukkan oleh Amirul ialah jujur dan amanah kerana dia tidak mengambil wang tunai yang dijumpainya. Nilai kedua ialah bertanggungjawab kerana dia segera menyerahkan dompet tersebut kepada pegawai polis agar dapat dikembalikan kepada pemiliknya."
      }
    ]
  },
  {
    "id": "d6bm-B04",
    "chapterId": "pemahaman",
    "part": "B",
    "level": "tinggi",
    "status": "verified",
    "stem": "Teliti maklumat bertulis mengenai Hari Keusahawanan Muda SK Taman Ilmu di bawah.\n\n• Gerai 1: Jualan Makanan dan Minuman Sihat (buah-buahan potong, sandwic telur, dan air mineral)\n• Gerai 2: Jualan Buku Cerita Terpakai (harga antara RM1.00 hingga RM3.00 senaskhah)\n• Gerai 3: Bengkel Menabung Pintar dan Pertandingan Melukis Tabung Kreatif",
    "parts": [
      {
        "label": "(a)",
        "q": "Sekiranya kamu hanya mempunyai wang saku sebanyak RM5.00, gerai manakah yang akan kamu kunjungi terlebih dahulu? Berikan satu alasan yang munasabah.",
        "marks": 2,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Memilih satu gerai secara jelas daripada maklumat yang diberikan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Memberikan alasan yang logik dan bersesuaian dengan jumlah wang saku RM5.00."
          }
        ],
        "answer": "Saya akan mengunjungi Gerai 2 iaitu Jualan Buku Cerita Terpakai terlebih dahulu kerana harga bukunya murah antara RM1.00 hingga RM3.00, jadi saya masih mempunyai baki wang untuk disimpan atau membeli makanan sihat."
      },
      {
        "label": "(b)",
        "q": "Kelab Usahawan Muda sekolah kamu berjaya memperoleh keuntungan sebanyak RM250.00 daripada jualan di Gerai 1. Cadangkan dua cara terbaik untuk menguruskan wang keuntungan tersebut.",
        "marks": 3,
        "steps": [
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan pertama berkaitan simpanan atau modal pusingan kelab (contoh: menyimpan sebahagian wang di dalam akaun bank kelab)."
          },
          {
            "kind": "M",
            "marks": 1,
            "text": "Cadangan kedua berkaitan kebajikan atau aktiviti sekolah (contoh: membeli buku bacaan untuk sudut ilmu atau membantu murid kurang berkemampuan)."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Huraian jelas, matang, dan menggunakan bahasa yang gramatis."
          }
        ],
        "answer": "Sebahagian daripada wang keuntungan tersebut wajar disimpan di dalam tabung kelab sebagai modal pusingan untuk program keusahawanan akan datang. Selebihnya pula boleh digunakan untuk membeli bahan bacaan bagi sudut ilmu kelas atau disumbangkan kepada murid yang kurang berkemampuan."
      }
    ]
  },
  {
    "id": "d6bm-C01",
    "chapterId": "sintaksis",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Baca maklumat tentang langkah-langkah menjaga keselamatan di jalan raya di bawah.\n\n• Memakai topi keledar yang diikat kemas ketika menunggang basikal atau motosikal.\n• Melintas jalan raya menggunakan lintasan belang atau jejantas yang disediakan.\n• Mematuhi lampu isyarat dan arahan pengawal lalu lintas sekolah.\n• Tidak menggunakan telefon bimbit atau fon telinga semasa melintas jalan.\n\nBerdasarkan maklumat di atas, tulis satu perenggan tentang cara-cara menjaga keselamatan diri di jalan raya. Panjangnya jawapan kamu hendaklah sekitar 50 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis satu perenggan lengkap tentang cara-cara menjaga keselamatan diri di jalan raya (~50 patah perkataan).",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1 & 2: Mengolah maklumat pemakaian topi keledar dan penggunaan lintasan belang atau jejantas dengan tepat."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 3 & 4: Mengolah maklumat mematuhi lampu isyarat/arahan pengawal serta mengelakkan telefon bimbit atau fon telinga."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan penanda wacana dan kata hubung yang tepat untuk menjamin kohesi serta koheren perenggan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Binaan ayat yang gramatis tanpa kesalahan imbuhan, kata sendi nama, atau struktur ayat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan DBP dan tanda baca yang tepat serta panjang perenggan menepati anggaran 50 patah perkataan."
          }
        ],
        "answer": "Keselamatan diri di jalan raya amat penting untuk mengelakkan kemalangan. Kita mestilah memakai topi keledar yang diikat kemas semasa menunggang basikal atau motosikal. Selain itu, gunakanlah lintasan belang atau jejantas ketika melintas jalan. Akhir sekali, patuhilah lampu isyarat dan elakkan penggunaan telefon bimbit atau fon telinga agar sentiasa peka dengan persekitaran."
      }
    ]
  },
  {
    "id": "d6bm-C02",
    "chapterId": "pemahaman",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Teliti catatan tentang faedah amalan menabung sejak kecil di bawah.\n\n• Menyediakan wang simpanan untuk kegunaan waktu kecemasan.\n• Membantu meringankan beban kewangan ibu bapa.\n• Memupuk sikap berjimat cermat dan tidak membazir.\n• Membolehkan kita membeli keperluan sekolah atau buku rujukan sendiri.\n\nBerdasarkan catatan di atas, tulis satu perenggan tentang faedah amalan menabung kepada murid. Panjangnya jawapan kamu hendaklah sekitar 50 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis satu perenggan lengkap tentang faedah amalan menabung kepada murid (~50 patah perkataan).",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1 & 2: Menyatakan faedah persediaan waktu kecemasan dan meringankan beban ibu bapa."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 3 & 4: Menyatakan faedah memupuk sikap berjimat cermat serta membeli keperluan sekolah atau buku rujukan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Pertautan idea yang lancar menggunakan penanda wacana yang sesuai (contoh: 'Antara faedahnya', 'Selain itu', 'Kesimpulannya')."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan kosa kata dan tatabahasa Bahasa Melayu baku yang tepat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan, tanda baca, dan jumlah perkataan menepati sasaran sekitar 50 patah perkataan dalam satu perenggan."
          }
        ],
        "answer": "Amalan menabung sejak kecil mendatangkan banyak kebaikan kepada murid. Antaranya, wang simpanan dapat digunakan ketika menghadapi waktu kecemasan dan membantu meringankan beban kewangan ibu bapa. Di samping itu, amalan ini memupuk sikap berjimat cermat agar kita tidak membazir, malah membolehkan kita membeli keperluan sekolah atau buku rujukan dengan wang sendiri."
      }
    ]
  },
  {
    "id": "d6bm-C03",
    "chapterId": "seni_bahasa",
    "part": "C",
    "level": "sederhana",
    "status": "verified",
    "stem": "Baca nota ringkas tentang kepentingan memelihara warisan budaya tradisional di bawah.\n\n• Mengekalkan identiti dan jati diri masyarakat pelbagai kaum di Malaysia.\n• Menjadi daya tarikan kepada pelancong dari dalam dan luar negara.\n• Mengelakkan seni tradisional seperti wau, batik, dan tarian rakyat daripada pupus.\n• Menyemai semangat perpaduan dan rasa hormat antara kaum.\n\nBerdasarkan nota di atas, tulis satu perenggan tentang kepentingan memelihara warisan budaya tradisional. Panjangnya jawapan kamu hendaklah sekitar 50 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis satu perenggan lengkap tentang kepentingan memelihara warisan budaya tradisional (~50 patah perkataan).",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1 & 2: Menyatakan kepentingan mengekalkan identiti masyarakat dan menarik kehadiran pelancong."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 3 & 4: Menyatakan usaha mengelakkan seni tradisional daripada pupus serta menyemai perpaduan antara kaum."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kesinambungan idea yang teratur dalam satu perenggan dengan penanda wacana yang sesuai."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Struktur ayat majmuk dan tunggal yang gramatis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ketepatan ejaan, tanda baca, serta panjang karangan sekitar 50 patah perkataan."
          }
        ],
        "answer": "Warisan budaya tradisional wajar dipelihara supaya identiti masyarakat pelbagai kaum di negara kita terus kekal. Usaha ini juga dapat mengelakkan kesenian seperti wau, batik, dan tarian rakyat daripada pupus ditelan zaman. Selain menjadi tarikan pelancong asing, pemeliharaan warisan budaya turut menyemai semangat perpaduan serta rasa saling menghormati dalam kalangan rakyat."
      }
    ]
  },
  {
    "id": "d6bm-D01",
    "chapterId": "sintaksis",
    "part": "D",
    "level": "tinggi",
    "status": "verified",
    "stem": "Sekolah kamu telah mengadakan majlis sambutan Hari Kebangsaan pada bulan Ogos yang lalu. Tulis sebuah karangan keperihalan untuk menceritakan suasana dan aktiviti sepanjang sambutan tersebut. Panjangnya karangan kamu hendaklah antara 80 hingga 120 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis karangan keperihalan bertajuk 'Suasana Sambutan Hari Kebangsaan di Sekolah Saya' (80–120 patah perkataan).",
        "marks": 20,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Pendahuluan: Menyatakan tarikh, tempat, dan tujuan majlis sambutan Hari Kebangsaan di sekolah."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1: Menggambarkan suasana persiapan awal seperti pemasangan bendera Jalur Gemilang di kawasan sekolah."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 2: Menceritakan acara rasmi perhimpunan seperti nyanyian lagu Negaraku dan ucapan Guru Besar."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 3: Menghuraikan aktiviti menarik yang dijalankan (contoh: persembahan koir, deklamasi sajak, atau pertandingan pakaian beragam)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Penutup: Menyatakan perasaan bangga, nilai patriotisme, dan waktu majlis berakhir."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Format karangan keperihalan dipatuhi sepenuhnya dengan pemerengganan yang jelas."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan kosa kata yang luas dan tepat (contoh: 'berkibar megah', 'patriotisme', 'meriah')."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kepelbagaian binaan ayat tunggal dan ayat majmuk yang gramatis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ketepatan penggunaan imbuhan, kata sendi nama, dan kata hubung mengikut Tatabahasa Dewan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan DBP, tanda baca, dan jumlah perkataan menepati julat 80 hingga 120 patah perkataan."
          }
        ],
        "answer": "Pada 30 Ogos yang lalu, sekolah saya telah mengadakan majlis sambutan Hari Kebangsaan dengan meriahnya. Seawal pagi, kawasan sekolah dihiasi dengan bendera Jalur Gemilang yang berkibar megah. Semua murid dan guru berkumpul di dewan sekolah sambil mengibarkan bendera kecil.\n\nMajlis dimulakan dengan nyanyian lagu Negaraku dan lagu patriotik dengan penuh semangat. Selepas itu, Guru Besar menyampaikan ucapan tentang pentingnya memelihara perpaduan dan keamanan negara.\n\nPelbagai aktiviti menarik turut diadakan, termasuklah pertandingan mendeklamasikan sajak, persembahan koir, dan pertunjukan pakaian tradisional. Para pemenang menerima hadiah yang disampaikan oleh Guru Besar.\n\nMajlis berakhir pada pukul 12.00 tengah hari. Sambutan ini amat bermakna kerana berjaya menyemai semangat patriotisme dalam diri kami."
      }
    ]
  },
  {
    "id": "d6bm-D02",
    "chapterId": "tatabahasa",
    "part": "D",
    "level": "tinggi",
    "status": "verified",
    "stem": "Kamu telah menyertai lawatan sambil belajar anjuran Kelab Sains sekolah kamu ke sebuah ladang pertanian moden. Tulis sepucuk surat kepada sahabat kamu yang tinggal di negeri lain untuk menceritakan pengalaman menarik sepanjang lawatan tersebut. Panjangnya karangan kamu hendaklah antara 80 hingga 120 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis sepucuk surat tidak rasmi kepada sahabat kamu untuk menceritakan pengalaman melawat ladang pertanian moden (80–120 patah perkataan).",
        "marks": 20,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Format surat tidak rasmi: Alamat pengirim, tarikh, kata hadap (menemui sahabatku...), dan kata ganti diri yang sesuai."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Pendahuluan: Bertanyakan khabar sahabat dan menyatakan tujuan menulis surat."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1: Menceritakan ketibaan di ladang pertanian moden dan penerangan daripada pengurus ladang."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 2: Menghuraikan teknologi atau kaedah pertanian moden yang dilihat (contoh: hidroponik, sistem pengairan automatik, atau dron pertanian)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Penutup: Menyatakan pengalaman berharga, harapan agar sahabat membalas surat, serta tandatangan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kesempurnaan format surat tidak rasmi mengikut piawaian KPM (tarikh, panggilan hormat, tandatangan)."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan laras bahasa mesra tetapi tetap baku dan sopan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Pengolahan isi yang koheren dan menarik dengan kosa kata pertanian yang tepat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ketepatan tatabahasa termasuk imbuhan, kata sendi nama, dan struktur ayat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan DBP, tanda baca, serta panjang karangan antara 80 hingga 120 patah perkataan."
          }
        ],
        "answer": "No. 14, Jalan Mawar,\n43000 Kajang, Selangor.\n20 Oktober 2026.\n\nMenemui sahabatku, Daniel, yang berada di Kuching, Sarawak. Semoga saudara sekeluarga sentiasa sihat sejahtera.\n\nTujuan saya menulis surat ini adalah untuk berkongsi pengalaman menyertai lawatan Kelab Sains ke Ladang Pertanian Moden Serdang pada minggu lalu. Setibanya di sana, kami disambut mesra oleh pengurus ladang.\n\nSaya amat kagum melihat tanaman sayur-sayuran yang ditanam menggunakan kaedah hidroponik tanpa tanah. Selain itu, sistem pengairan automatik dan dron digunakan untuk membaja tanaman dengan pantas. Kami juga berpeluang memetik buah tomato segar.\n\nSetakat ini sahaja coretan saya. Semoga kita dapat berjumpa lagi.\n\nSahabatmu,\nAiman"
      }
    ]
  },
  {
    "id": "d6bm-D03",
    "chapterId": "pemahaman",
    "part": "D",
    "level": "tinggi",
    "status": "verified",
    "stem": "Persatuan Ibu Bapa dan Guru (PIBG) sekolah kamu telah menganjurkan Program Gotong-royong Perdana untuk membersihkan dan menceriakan kawasan sekolah. Sebagai setiausaha kelab, tulis sebuah laporan tentang program tersebut. Panjangnya karangan kamu hendaklah antara 80 hingga 120 patah perkataan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis sebuah laporan lengkap mengenai Program Gotong-royong Perdana di sekolah kamu (80–120 patah perkataan).",
        "marks": 20,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Format laporan: Tajuk laporan ditulis dengan huruf besar atau huruf awal setiap perkataan berhuruf besar."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Pendahuluan: Menyatakan tarikh, masa, penganjur, dan tujuan program gotong-royong."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 1: Menceritakan pembahagian tugas dan penglibatan guru, ibu bapa, serta murid."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Isi 2: Menghuraikan aktiviti pembersihan dan keceriaan (contoh: mengecat dinding, membersihkan longkang, menanam pokok bunga)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Penutup & pengakuan pelapor: Menyatakan kesan program, waktu tamat, tarikh laporan, tandatangan, dan jawatan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Format laporan rasmi dipatuhi sepenuhnya tanpa kesilapan susunan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan bahasa laporan yang objektif, formal, dan jelas."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penggunaan kosa kata dan penanda wacana yang sesuai untuk menyambung idea."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Binaan ayat yang gramatis tanpa kesalahan tatabahasa dan imbuhan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan DBP, tanda baca, dan jumlah perkataan menepati julat 80 hingga 120 patah perkataan."
          }
        ],
        "answer": "Laporan Program Gotong-royong Perdana SK Taman Jaya\n\nPada 12 September 2026, Persatuan Ibu Bapa dan Guru SK Taman Jaya telah menganjurkan Program Gotong-royong Perdana bermula pada pukul 8.00 pagi. Program ini bertujuan untuk membersihkan serta menceriakan kawasan sekolah.\n\nGuru besar telah membahagikan peserta yang terdiri daripada ibu bapa, guru, dan murid kepada beberapa kumpulan. Antara tugasan yang dijalankan termasuklah membersihkan longkang, mengecat dinding kantin, dan menanam pokok bunga di taman sains. Semua peserta bekerja dengan penuh semangat muafakat.\n\nSelepas selesai bergotong-royong, para peserta menikmati jamuan ringan di kantin. Program ini tamat pada pukul 12.00 tengah hari dan berjaya mewujudkan persekitaran sekolah yang bersih serta selamat.\n\nDisediakan oleh,\nNurul Huda\n(NURUL HUDA BINTI AZIZ)\nSetiausaha Kelab Kebersihan."
      }
    ]
  }
];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { SETS, ITEMS, marksOf };
});
