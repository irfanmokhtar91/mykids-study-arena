/**
 * Darjah 6 Pendidikan Seni Visual variant question pool (KSSR Semakan 2017, Units 1-10).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, concise explanation, and source ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  const items = [
  {
    "id": "d6_psv_u1_s1_01",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Dalam sesuatu karya catan pemandangan, apakah jenis bentuk yang terhasil pada permukaan kertas yang rata?",
    "options": [
      "Bentuk ilusi",
      "Bentuk konkrit",
      "Bentuk terbuka",
      "Bentuk fizikal"
    ],
    "correctIndex": 0,
    "explanation": "Catan ialah karya dua dimensi pada permukaan rata seperti kertas atau kanvas, maka objek yang dilukis dengan struktur dan bayang menghasilkan bentuk ilusi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 8-9"
  },
  {
    "id": "d6_psv_u1_s1_02",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah tiga jenis media basah yang lazimnya digunakan untuk menghasilkan karya catan?",
    "options": [
      "Pensel, arang dan krayon",
      "Cat air, cat poster dan cat minyak",
      "Pen penanda, pensel warna dan kapur",
      "Kertas warna, gam dan gunting"
    ],
    "correctIndex": 1,
    "explanation": "Catan merupakan hasil seni dua dimensi pada kertas atau kanvas yang menggunakan cat air, cat poster dan cat minyak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_psv_u1_s1_03",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Kesan duri halus yang dilakarkan pada permukaan lukisan pokok kaktus mewujudkan unsur seni apa?",
    "options": [
      "Jalinan sentuh",
      "Imbangan simetri",
      "Jalinan tampak",
      "Ruang nyata"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran duri halus pada lukisan dua dimensi hanya dapat dilihat dengan mata dan tidak dapat dirasa timbulnya dengan sentuhan, jadi ia merupakan jalinan tampak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 8"
  },
  {
    "id": "d6_psv_u1_s1_04",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Dalam karya catan pemandangan, bahagian ruang ilusi terbahagi kepada tiga, iaitu ruang hadapan, ruang tengah dan ___________.",
    "options": [
      "ruang tepi",
      "ruang atas",
      "ruang bawah",
      "ruang belakang"
    ],
    "correctIndex": 3,
    "explanation": "Pembahagian ruang ilusi dalam karya catan pemandangan terdiri daripada ruang hadapan, ruang tengah dan ruang belakang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_psv_u1_s1_05",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Bagaimanakah garisan tegak pada lukisan bangunan tinggi seperti Menara Kuala Lumpur boleh ditafsirkan dalam bahasa seni visual?",
    "options": [
      "Menunjukkan kekukuhan, kestabilan dan keteguhan",
      "Menunjukkan pergerakan ombak yang beralun lembut",
      "Menimbulkan suasana cemas dan tidak menentu",
      "Menampakkan kelembutan serta kelenturan objek"
    ],
    "correctIndex": 0,
    "explanation": "Garisan tegak berfungsi sebagai tafsiran yang melambangkan kekukuhan, kestabilan dan keteguhan sesuatu struktur.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 8"
  },
  {
    "id": "d6_psv_u1_s1_06",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Aiman mewarnakan pokok kaktus dengan warna jingga manakala latar belakang karyanya diwarnakan dengan warna biru. Apakah prinsip rekaan yang terhasil daripada gandingan warna tersebut?",
    "options": [
      "Harmoni",
      "Kontra",
      "Imbangan simetri",
      "Ritma dan pergerakan"
    ],
    "correctIndex": 1,
    "explanation": "Penggunaan warna yang berlawanan atau berbeza seperti jingga pada objek utama dan biru pada latar mewujudkan kesan kontra pada karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 8"
  },
  {
    "id": "d6_psv_u1_s1_07",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Mengapakah penggunaan warna sejuk pada latar belakang yang bergunung-ganang sering dipilih dalam karya catan pemandangan?",
    "options": [
      "Untuk menghasilkan jalinan sentuh pada kertas lukisan",
      "Untuk menjadikan objek di belakang kelihatan paling besar",
      "Untuk memberikan kesan ketenangan dan harmoni pada karya",
      "Untuk mewujudkan imbangan simetri kiri dan kanan"
    ],
    "correctIndex": 2,
    "explanation": "Warna sejuk seperti biru dan hijau pada latar gunung-ganang menimbulkan rasa damai, tenang serta kesan harmoni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_psv_u1_s1_08",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Dalam sebuah catan pemandangan jalan kampung, sebuah motosikal dilukis lebih besar di bahagian kanan berbanding objek di bahagian kiri. Apakah jenis imbangan yang wujud?",
    "options": [
      "Imbangan simetri",
      "Imbangan jejari",
      "Imbangan mendatar",
      "Imbangan tidak simetri"
    ],
    "correctIndex": 3,
    "explanation": "Kedudukan objek yang lebih berat atau besar di sebelah kanan berbanding kiri menghasilkan imbangan tidak simetri yang masih kelihatan stabil.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_psv_u1_s1_09",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Siti melukis beberapa batang pokok kaktus yang saling bertindih dengan menggunakan teknik silang pangkah serta menambahkan bayang pada objek. Apakah dua kesan bahasa seni visual yang paling ketara daripada gabungan teknik tersebut?",
    "options": [
      "Ruang melalui pertindihan objek dan bentuk ilusi melalui struktur serta bayang",
      "Jalinan sentuh melalui kertas lukisan dan bentuk konkrit tiga dimensi",
      "Imbangan simetri melalui garisan paksi dan penegasan melalui warna panas",
      "Ruang nyata melalui ukuran kedalaman dan harmoni melalui warna sejuk"
    ],
    "correctIndex": 0,
    "explanation": "Pertindihan antara beberapa objek mewujudkan kesan ruang pada karya dua dimensi, manakala struktur dan bayang menimbulkan bentuk ilusi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 8"
  },
  {
    "id": "d6_psv_u1_s1_10",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Jika seorang murid ingin menonjolkan kesan ton warna cerah dan gelap pada sebuah objek di ruang hadapan catannya, mengapakah langkah ini penting dalam penghasilan karya?",
    "options": [
      "Supaya karya tersebut boleh disentuh bentuk konkritnya dari pelbagai arah",
      "Supaya objek kelihatan berdimensi dan membentuk ilusi kedalaman pada permukaan rata",
      "Supaya semua garisan pada lukisan menjadi seragam tanpa kepelbagaian",
      "Supaya warna panas dan warna sejuk tidak bercampur pada palet"
    ],
    "correctIndex": 1,
    "explanation": "Kesan ton warna yang cerah dan gelap serta penghasilan bayang dapat menimbulkan bentuk ilusi agar objek di ruang hadapan kelihatan nyata pada permukaan dua dimensi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_psv_u1_s2_01",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Apakah fungsi utama tetingkap fokus dalam aktiviti melukis pemandangan di persekitaran luar?",
    "options": [
      "Untuk memotong kertas lukisan mengikut saiz yang seragam",
      "Untuk mengeringkan cat air pada permukaan kertas",
      "Untuk memfokuskan sesuatu objek tertentu yang hendak dilukis",
      "Untuk mencantumkan kad manila menjadi bekas portfolio"
    ],
    "correctIndex": 2,
    "explanation": "Tetingkap fokus berfungsi untuk memfokuskan sesuatu objek atau bahagian pemandangan tertentu untuk dilukis di persekitaran atau kawasan lapang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 12"
  },
  {
    "id": "d6_psv_u1_s2_02",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Dalam penghasilan karya lukisan, apakah maksud 'ruang dalam' pada permukaan dua dimensi?",
    "options": [
      "Ruang kosong di bahagian tepi bingkai gambar",
      "Ruang tertutup di dalam kotak simpanan alat tulis",
      "Ruang di hadapan yang paling dekat dengan penonton",
      "Ruang ilusi yang kelihatan jauh dan luas di bahagian belakang"
    ],
    "correctIndex": 3,
    "explanation": "Ruang dalam merupakan ruang ilusi yang kelihatan jauh dan luas pada permukaan dua dimensi, iaitu kedudukan ruang di belakang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_psv_u1_s2_03",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Alat lukisan manakah yang sesuai digunakan untuk menghasilkan garisan tebal bagi menimbulkan kesan penegasan pada karya?",
    "options": [
      "Pen penanda",
      "Pensel warna",
      "Pemadam getah",
      "Berus cat air"
    ],
    "correctIndex": 0,
    "explanation": "Penggunaan pen penanda menghasilkan garisan tebal yang dapat menimbulkan penegasan pada karya lukisan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_psv_u1_s2_04",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Siapakah kartunis terkenal Malaysia yang menghasilkan karya Kampung Boy (1979) dengan menerapkan unsur garisan dalam lukisannya?",
    "options": [
      "Tan Sri P. Ramlee",
      "Datuk Mohammad Nor bin Mohammad Khalid (Lat)",
      "Profesor Ungku Aziz",
      "Datuk Sudirman Haji Arshad"
    ],
    "correctIndex": 1,
    "explanation": "Datuk Mohammad Nor bin Mohammad Khalid yang dikenali sebagai Lat ialah kartunis Malaysia terkenal dengan karya Kampung Boy (1979) yang menerapkan unsur garisan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_psv_u1_s2_05",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Bagaimanakah garisan perspektif membantu pelukis semasa melakar pemandangan menggunakan tetingkap fokus?",
    "options": [
      "Menjadikan permukaan kertas berasa kasar apabila disentuh",
      "Menukarkan warna panas kepada warna sejuk secara automatik",
      "Memperlihatkan kesan ruang jauh dan dekat pada karya dua dimensi",
      "Menghilangkan keperluan melukis objek di ruang hadapan"
    ],
    "correctIndex": 2,
    "explanation": "Garisan perspektif memberikan kesan ruang serta memperlihatkan perbezaan jarak jauh dan dekat pada penghasilan karya dua dimensi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_psv_u1_s2_06",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Ketika melukis botol air berbentuk silinder secara peniruan, Farhan melakarkan garisan mengikut lengkungan permukaan luar botol tersebut. Apakah teknik garisan yang digunakan oleh Farhan?",
    "options": [
      "Teknik garisan zig-zag",
      "Teknik garisan selari",
      "Teknik garisan putus-putus",
      "Teknik garisan kontur"
    ],
    "correctIndex": 3,
    "explanation": "Teknik garisan kontur digunakan mengikut struktur objek seperti bentuk silinder bagi menimbulkan bentuk dengan lebih jelas dan berstruktur.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_psv_u1_s2_07",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Mengapakah lorekan pada objek di bahagian hadapan lukisan pemandangan dibuat lebih jelas berbanding objek yang jauh di belakang?",
    "options": [
      "Untuk menjelaskan jarak, saiz antara objek dan menimbulkan jalinan tampak",
      "Untuk memastikan kertas lukisan tidak mudah koyak semasa dipadam",
      "Untuk mengurangkan penggunaan pensel warna pada ruang hadapan",
      "Untuk menjadikan objek di belakang kelihatan lebih dekat dengan penonton"
    ],
    "correctIndex": 0,
    "explanation": "Hasil lorekan yang lebih jelas pada objek di hadapan serta penggunaan garisan tebal dan halus menjelaskan jarak, saiz antara objek dan jalinan tampak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 12"
  },
  {
    "id": "d6_psv_u1_s2_08",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Bagaimanakah bidang menggambar seperti lukisan alat tulis atau pemandangan dapat digabungkan dengan bidang membentuk dan membuat binaan?",
    "options": [
      "Dengan membuang semua lakaran penerokaan selepas sesi pembelajaran",
      "Dengan menghasilkan produk berguna seperti pelapik tetikus atau bingkai gambar daripada kadbod",
      "Dengan mencampurkan cat air ke dalam bahan plastik terpakai",
      "Dengan melukis di atas permukaan air sebelum dipindahkan ke kertas"
    ],
    "correctIndex": 1,
    "explanation": "Karya menggambar boleh digabungkan dengan bidang membentuk dan membuat binaan seperti menghasilkan pelapik tetikus atau memotong kadbod untuk membuat bingkai gambar.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 11, 13"
  },
  {
    "id": "d6_psv_u1_s2_09",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Nadia ingin melukis pemandangan deretan pokok di tepi padang sekolah yang menghala ke kawasan jauh. Apakah gabungan langkah yang paling tepat untuk menghasilkan kedalaman ruang dalam lukisannya?",
    "options": [
      "Menggunakan warna cerah di bahagian belakang dan melukis pokok belakang lebih besar",
      "Melorek semua pokok dengan pen penanda tebal supaya saiznya kelihatan sama rata",
      "Menggunakan tetingkap fokus, melakar garisan perspektif dan mewarnakan bahagian dalam dengan warna lebih gelap",
      "Mengelakkan pertindihan antara pokok supaya setiap objek berdiri berasingan tanpa bayang"
    ],
    "correctIndex": 2,
    "explanation": "Tetingkap fokus membantu membahagikan ruang, garisan perspektif menunjukkan jarak jauh dan dekat, manakala warna lebih gelap membantu menimbulkan kedalaman ruang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_psv_u1_s2_10",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Dalam satu latihan penerokaan media kering, murid melukis beberapa alat tulis menggunakan pensel, pen dan pen penanda dengan teknik silang pangkah, garisan selari dan zig-zag. Apakah prinsip rekaan yang terhasil daripada perlakuan ini dan di manakah hasil penerokaan itu patut disimpan?",
    "options": [
      "Prinsip kesatuan; disimpan di dalam tong kitar semula kelas",
      "Prinsip imbangan simetri; ditampal terus pada papan kenyataan luar sekolah",
      "Prinsip harmoni; dilipat kecil tanpa label untuk kegunaan minggu hadapan",
      "Prinsip kepelbagaian; dikumpulkan dan disimpan di dalam portfolio seni"
    ],
    "correctIndex": 3,
    "explanation": "Melakar pelbagai jenis garisan dengan media berbeza mewujudkan prinsip kepelbagaian, dan semua hasil penerokaan hendaklah disimpan kemas di dalam portfolio seni sebagai rujukan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 10-11, 13"
  },
  {
    "id": "d6_psv_u2_s1_01",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah tiga dimensi ukuran yang terdapat pada sesuatu karya berbentuk konkrit seperti arca?",
    "options": [
      "Ketinggian, kelebaran dan kedalaman",
      "Kepanjangan, kecerahan dan kelajuan",
      "Ketebalan, kepekatan dan kehalusan",
      "Kejelasan, keseragaman dan kecairan"
    ],
    "correctIndex": 0,
    "explanation": "Karya tiga dimensi bersifat konkrit, dapat disentuh, dilihat dari pelbagai sudut serta mengandungi ketinggian, kelebaran dan kedalaman.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_psv_u2_s1_02",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan nilai 'estetik' pada sesuatu hasil karya seni?",
    "options": [
      "Kos bahan mentah yang dibeli di kedai alat tulis",
      "Keindahan dan kecantikan yang terdapat pada karya seni",
      "Tempoh masa yang diambil untuk menyiapkan binaan",
      "Berat keseluruhan bahan logam dan plastik yang digunakan"
    ],
    "correctIndex": 1,
    "explanation": "Dalam bahasa seni visual, estetik bermaksud keindahan dan kecantikan yang terdapat pada sesuatu hasil karya seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_psv_u2_s1_03",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Bagaimanakah karya arca asemblaj dihasilkan?",
    "options": [
      "Dengan melakar menggunakan pensel di atas kertas lukisan",
      "Dengan menekap permukaan daun menggunakan krayon",
      "Dengan mencantumkan pelbagai bahan dan media terpakai",
      "Dengan menggunting gambar daripada majalah lalu menampalnya"
    ],
    "correctIndex": 2,
    "explanation": "Arca asemblaj merupakan hasil karya tiga dimensi yang dibina melalui cantuman pelbagai bahan dan media seperti besi, logam dan plastik terpakai.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_psv_u2_s1_04",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah jenis jalinan yang terhasil apabila seseorang menyentuh permukaan arca asemblaj yang diperbuat daripada besi, logam dan plastik bergerigi?",
    "options": [
      "Jalinan ilusi",
      "Jalinan tampak",
      "Jalinan perspektif",
      "Jalinan sentuh"
    ],
    "correctIndex": 3,
    "explanation": "Bahan cantuman seperti besi, logam dan plastik yang kasar serta bergerigi menghasilkan jalinan sentuh kerana dapat dirasai secara fizikal.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_psv_u2_s1_05",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Antara yang berikut, manakah contoh bentuk konkrit yang sering diolah dalam pelbagai komposisi arca asemblaj?",
    "options": [
      "Silinder, segi empat dan bulatan",
      "Garisan selari, zig-zag dan kontur",
      "Warna panas, warna sejuk dan warna neutral",
      "Ruang hadapan, ruang tengah dan ruang belakang"
    ],
    "correctIndex": 0,
    "explanation": "Dalam pembinaan arca asemblaj, bentuk konkrit seperti silinder, segi empat dan bulatan diolah dalam pelbagai komposisi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_psv_u2_s1_06",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Sebuah arca berbentuk hati berwarna merah diletakkan di tengah-tengah kawasan taman hijau yang lapang. Mengapakah arca tersebut berjaya mewujudkan prinsip penegasan dan kontra?",
    "options": [
      "Kerana arca tersebut dibuat daripada kertas lukisan yang nipis",
      "Kerana warna merah yang cerah dan kedudukannya di kawasan lapang menarik perhatian pengunjung",
      "Kerana warna merah sama dengan warna rumput di sekeliling taman",
      "Kerana arca tersebut hanya boleh dilihat dari sebelah belakang sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Warna merah menimbulkan kontra dengan persekitaran, manakala pembinaannya di kawasan lapang mewujudkan penegasan yang menarik perhatian pengunjung.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_psv_u2_s1_07",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Dalam penghasilan arca asemblaj, mengapakah pengkarya perlu memilih dan menyusun atur bahan cantuman dari bahagian kaki hingga ke kepala dengan teliti?",
    "options": [
      "Supaya arca kelihatan bercelaru dan tidak mempunyai titik fokus",
      "Supaya bahan logam tidak perlu dicantumkan antara satu sama lain",
      "Supaya terhasilnya kesatuan serta harmoni dari segi bentuk dan ruang",
      "Supaya karya berubah menjadi lukisan dua dimensi yang rata"
    ],
    "correctIndex": 2,
    "explanation": "Pemilihan bahan cantuman yang sesuai mewujudkan kesatuan, manakala olahan susun atur dari kaki hingga kepala menghasilkan harmoni dari segi bentuk dan ruang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_psv_u2_s1_08",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Sebuah arca moden dibina dengan bentuk yang tidak sama antara bahagian kiri dan kanan, namun binaan tersebut tetap teguh dan tidak mudah tumbang. Apakah prinsip rekaan yang ditunjukkan?",
    "options": [
      "Imbangan simetri yang kaku",
      "Kepelbagaian media basah",
      "Kontra antara ruang dalam dan ruang terbuka",
      "Imbangan tidak simetri yang stabil dan kukuh"
    ],
    "correctIndex": 3,
    "explanation": "Arca boleh dibina dalam imbangan tidak simetri pada bentuknya sambil tetap menampakkan keteguhan dan kestabilan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_psv_u2_s1_09",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Hakim membina arca asemblaj berbentuk figura manusia menggunakan tin minuman, skru besi dan botol plastik terpakai. Dia mengecat bahagian badan arca dengan warna merah terang sementara bahagian tangan arca dihalakan ke hadapan. Apakah peranan kedua-dua pilihan reka bentuk tersebut?",
    "options": [
      "Warna merah mewujudkan kontra yang mengelakkan kebosanan, manakala bentuk tangan menjadi titik fokus yang memberi makna",
      "Warna merah menghasilkan jalinan tampak, manakala bentuk tangan menjadikan arca tidak stabil",
      "Warna merah menghilangkan nilai estetik karya, manakala bentuk tangan mengurangkan kedalaman ruang",
      "Warna merah menjadikan karya dua dimensi, manakala bentuk tangan mewujudkan imbangan simetri"
    ],
    "correctIndex": 0,
    "explanation": "Penggunaan warna merah pada badan arca menimbulkan kontra untuk menarik perhatian dan mengelakkan kebosanan, manakala bentuk tangan arca memberi makna dan menjadi titik fokus.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_psv_u2_s1_10",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Apakah perbezaan paling tepat antara karya catan pemandangan dalam Unit 1 dengan karya arca dalam Unit 2 dari segi sifat bentuk dan cara pengamatan?",
    "options": [
      "Catan mempunyai bentuk konkrit dan boleh disentuh, manakala arca hanya mempunyai bentuk ilusi",
      "Catan bersifat dua dimensi dengan bentuk ilusi, manakala arca bersifat tiga dimensi dengan bentuk konkrit yang boleh dilihat dari pelbagai sudut",
      "Catan hanya menggunakan bahan terpakai, manakala arca hanya menggunakan pensel warna",
      "Kedua-dua karya hanya mempunyai ketinggian dan kelebaran tanpa sebarang kedalaman"
    ],
    "correctIndex": 1,
    "explanation": "Catan ialah karya 2D yang menampilkan bentuk ilusi pada permukaan rata, manakala arca ialah karya 3D berbentuk konkrit yang mempunyai ketinggian, kelebaran, kedalaman serta dapat dilihat dari pelbagai sudut.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 9, 14"
  },
  {
    "id": "d6_psv_u2_s2_01",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan 'tanggam' dalam aktiviti pembinaan arca stabail?",
    "options": [
      "Sejenis cat kilat yang disapu pada permukaan kertas",
      "Alat untuk mengukur jarak ruang belakang pada lukisan",
      "Sambungan bertakuk-takuk supaya cantuman menjadi rapat dan teguh",
      "Corak berulang yang dicetak menggunakan pembalut gelembung"
    ],
    "correctIndex": 2,
    "explanation": "Tanggam ialah sambungan yang bertakuk-takuk (seperti pada kayu atau kepingan bod) supaya bahagian yang disambungkan menjadi rapat dan teguh.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 16-17"
  },
  {
    "id": "d6_psv_u2_s2_02",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah dua jenis bahan kepingan yang sesuai digunakan untuk membentuk arca stabail secara teknik tanggam?",
    "options": [
      "Kertas tisu dan plastik lut sinar",
      "Tanah liat lembut dan air",
      "Kain kapas dan benang jahit",
      "Bod impra dan bod busa"
    ],
    "correctIndex": 3,
    "explanation": "Bod impra dan bod busa merupakan bahan kepingan yang kukuh dan mudah dipotong keratan rentasnya untuk membuat sambungan tanggam bagi arca stabail.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_psv_u2_s2_03",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah langkah keselamatan yang perlu diberi perhatian utama semasa memotong kepingan bod impra untuk membuat tanggam?",
    "options": [
      "Berhati-hati semasa menggunakan alat pemotong supaya tidak mencederakan tangan",
      "Memotong bod di atas permukaan air yang mengalir",
      "Menggunakan tangan kosong untuk mengoyakkan bod impra yang tebal",
      "Memotong sambil berlari di dalam bilik seni"
    ],
    "correctIndex": 0,
    "explanation": "Murid diingatkan supaya sentiasa berhati-hati semasa memotong kepingan bod bagi mengelakkan kemalangan atau kecederaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_psv_u2_s2_04",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Dalam penghasilan arca stabail, bagaimanakah cara menghasilkan corak hiasan pada permukaan kepingan bod berbentuk bulat?",
    "options": [
      "Membakar bahagian tepi bod dengan api",
      "Menyusun rupa yang sama secara berulang-ulang dengan pelekat hiasan",
      "Merendam bod di dalam cat minyak selama seminggu",
      "Melipat bod menjadi saiz sekecil mungkin"
    ],
    "correctIndex": 1,
    "explanation": "Corak pada permukaan rupa bulat boleh dihasilkan menggunakan pelekat hiasan dengan menyusun rupa yang sama secara berulang-ulang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 16-17"
  },
  {
    "id": "d6_psv_u2_s2_05",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Dalam aktiviti membina kotak kreatif, mengapakah murid perlu membuka bahagian kotak terpakai satu persatu terlebih dahulu?",
    "options": [
      "Untuk membuang kotak tersebut dengan lebih cepat",
      "Untuk menjadikan kotak tersebut sebagai bahan catan air",
      "Untuk mengamati lipatannya dan menjadikannya templat rujukan",
      "Untuk mengurangkan berat kertas lukisan"
    ],
    "correctIndex": 2,
    "explanation": "Membuka bahagian kotak satu persatu membolehkan murid mengamati lipatan secara teliti dan menjadikan bukaan kotak sebagai templat rujukan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 18"
  },
  {
    "id": "d6_psv_u2_s2_06",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Mengapakah reka bentuk arca stabail perlu dimulakan dari tapak yang lebih luas dan besar?",
    "options": [
      "Supaya arca kelihatan terapung di udara",
      "Supaya warna pelekat hiasan tidak mudah tanggal",
      "Supaya potongan tanggam tidak perlu disambungkan",
      "Supaya arca berada dalam keadaan seimbang, stabil dan kukuh"
    ],
    "correctIndex": 3,
    "explanation": "Membina arca bermula dari tapak yang lebih luas dan besar penting untuk memastikan imbangan dan kestabilan supaya binaan tidak mudah tumbang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 17"
  },
  {
    "id": "d6_psv_u2_s2_07",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Apakah dua bidang seni visual yang digabungkan apabila murid menghasilkan arca stabail yang dihiasi dengan pelekat corak berulang?",
    "options": [
      "Bidang membentuk dan membuat binaan dengan bidang membuat corak dan rekaan",
      "Bidang menggambar dengan bidang mengenal kraf tradisional",
      "Bidang catan minyak dengan bidang anyaman buluh",
      "Bidang membuat corak dengan bidang cetakan kayu sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Penghasilan arca stabail yang dihiasi corak berulang menggabungkan bidang membentuk dan membuat binaan dengan bidang membuat corak dan rekaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 17"
  },
  {
    "id": "d6_psv_u2_s2_08",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Semasa menghasilkan kotak kreatif daripada kad manila, apakah kesan pemilihan warna terang pada permukaan luar kotak tersebut?",
    "options": [
      "Menjadikan kotak kelihatan samar-samar dan sukar dilihat",
      "Memberikan kesan penegasan dan daya tarikan pada karya",
      "Menghilangkan bentuk konkrit pada binaan kotak",
      "Menjadikan kotak tersebut tidak mempunyai ruang dalaman"
    ],
    "correctIndex": 1,
    "explanation": "Pemilihan warna terang pada permukaan kotak memberikan kesan penegasan dan daya tarikan kepada hasil karya binaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_psv_u2_s2_09",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Arca stabail yang dibina oleh Amir daripada bod busa asyik condong ke sebelah kiri dan mudah jatuh apabila disentuh sedikit. Apakah punca utama masalah tersebut dan bagaimanakah cara membaikinya?",
    "options": [
      "Warna bod tidak cukup cerah; dia perlu menampal lebih banyak pelekat di bahagian atas",
      "Bod busa terlalu nipis; dia perlu menyapu cat poster pada keseluruhan permukaan",
      "Tapaknya terlalu sempit dan tanggam kurang rapat; dia perlu membesarkan bahagian tapak dan memastikan cantuman tanggam dibuat dengan teliti",
      "Coraknya tidak berulang; dia perlu melukis garisan silang pangkah pada tapak"
    ],
    "correctIndex": 2,
    "explanation": "Kestabilan arca stabail bergantung pada imbangan, cantuman tanggam yang teliti serta pembinaan tapak yang lebih luas dan besar.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 17"
  },
  {
    "id": "d6_psv_u2_s2_10",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Lina menggunakan templat bukaan kotak piza untuk melakar dan membina sebuah kotak simpanan baharu daripada kad manila, lalu melukis corak bunga pada bahagian luarnya. Apakah tiga ciri utama yang terdapat pada hasil karya Lina?",
    "options": [
      "Bentuk ilusi, jalinan tampak sahaja dan tidak boleh dilihat dari belakang",
      "Tiada ukuran kedalaman, hanya menggunakan teknik catan dan bersifat sementara",
      "Dibina tanpa imbangan, tiada ruang dan tidak menggabungkan sebarang bidang",
      "Bentuk konkrit yang dapat dilihat dari pelbagai arah, mempunyai ruang melalui kedalaman, serta menggabungkan bidang binaan dengan menggambar atau membuat corak"
    ],
    "correctIndex": 3,
    "explanation": "Kotak binaan ialah bentuk konkrit yang dilihat dari pelbagai arah, mempunyai ruang hasil perbezaan jarak serta kedalaman, dan permukaan luarnya boleh digabungkan dengan bidang menggambar atau membuat corak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_psv_u3_s1_01",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Antara persekitaran berikut, manakah yang merupakan contoh ruang terbuka?",
    "options": [
      "Pemandangan taman bunga yang luas dan lapang",
      "Bilik tidur yang berdinding dan sempit",
      "Ruang tamu rumah yang terhad keluasannya",
      "Bahagian dalam sebuah almari pakaian"
    ],
    "correctIndex": 0,
    "explanation": "Pemandangan taman bunga yang luas dan lapang merupakan ruang terbuka, manakala kawasan yang sempit dan terhad seperti ruang tamu ialah ruang tertutup.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20"
  },
  {
    "id": "d6_psv_u3_s1_02",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Mengapakah ruang tamu di dalam sebuah rumah dikategorikan sebagai ruang tertutup?",
    "options": [
      "Kerana terdapat banyak warna merah di dalamnya",
      "Kerana kawasannya sempit dan terhad",
      "Kerana tidak mempunyai sebarang perabot",
      "Kerana terdedah kepada cahaya matahari secara langsung"
    ],
    "correctIndex": 1,
    "explanation": "Ruang tamu merupakan ruang tertutup kerana kawasannya sempit dan terhad berbanding ruang di kawasan lapang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20"
  },
  {
    "id": "d6_psv_u3_s1_03",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Antara media kering berikut, manakah yang digunakan dalam aktiviti menggambar secara lukisan?",
    "options": [
      "Cat air dan cat tempera",
      "Cat minyak dan turpentin",
      "Pensel, pensel warna, pen penanda dan oil pastel",
      "Gam cecair dan kanji"
    ],
    "correctIndex": 2,
    "explanation": "Lukisan menghasilkan imej menggunakan media kering seperti pensel, pensel warna, pen penanda dan oil pastel.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 21"
  },
  {
    "id": "d6_psv_u3_s1_04",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Apakah kesan yang wujud apabila garisan pada lukisan dilukis secara rapat-rapat?",
    "options": [
      "Menghasilkan ruang terbuka",
      "Menukarkan warna sekunder kepada warna asas",
      "Menjadikan kertas lukisan berbentuk tiga dimensi",
      "Mewujudkan bentuk ilusi"
    ],
    "correctIndex": 3,
    "explanation": "Kesan garisan yang dilukis secara rapat akan mewujudkan bentuk ilusi pada karya lukisan dua dimensi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20"
  },
  {
    "id": "d6_psv_u3_s1_05",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Dalam satu lukisan flora dan fauna, warna hijau digunakan pada dedaun manakala warna merah kekuningan digunakan pada burung kakak tua. Apakah kategori bagi warna hijau dan warna merah kekuningan?",
    "options": [
      "Hijau ialah warna sekunder; merah kekuningan ialah warna tertier",
      "Hijau ialah warna asas; merah kekuningan ialah warna neutral",
      "Kedua-duanya ialah warna asas",
      "Hijau ialah warna tertier; merah kekuningan ialah warna sekunder"
    ],
    "correctIndex": 0,
    "explanation": "Warna hijau ialah warna sekunder yang memberikan rasa damai, manakala merah kekuningan ialah warna tertier yang menjadi daya tarikan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 21"
  },
  {
    "id": "d6_psv_u3_s1_06",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Dalam lukisan seekor burung yang bertenggek di hadapan sebatang pokok, bagaimanakah cara yang betul untuk menunjukkan kedudukan ruang antara kedua-dua objek tersebut?",
    "options": [
      "Melukis pokok di belakang lebih besar dan lebih terang daripada burung",
      "Melukis burung di hadapan lebih jelas dan besar dengan kedudukan bertindih di hadapan pokok",
      "Melukis burung dan pokok dengan saiz yang betul-betul sama tanpa pertindihan",
      "Mewarnakan seluruh kertas dengan warna hitam tanpa garisan"
    ],
    "correctIndex": 1,
    "explanation": "Objek yang berada di hadapan kelihatan lebih jelas dan besar berbanding objek di belakang, dan pertindihan objek mewujudkan kesan ruang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20-21"
  },
  {
    "id": "d6_psv_u3_s1_07",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Apakah perbezaan antara bentuk ilusi dengan bentuk konkrit berdasarkan sifat dimensinya?",
    "options": [
      "Bentuk ilusi hanya terdapat pada arca, manakala bentuk konkrit hanya pada poster",
      "Bentuk ilusi boleh dipegang, manakala bentuk konkrit hanya boleh dilihat",
      "Bentuk ilusi bersifat dua dimensi seperti ilustrasi dan foto, manakala bentuk konkrit bersifat tiga dimensi",
      "Tiada perbezaan antara kedua-dua bentuk tersebut"
    ],
    "correctIndex": 2,
    "explanation": "Bentuk ilusi bersifat dua dimensi yang digambarkan melalui ilustrasi, gambar foto, catan atau poster, berbeza dengan bentuk konkrit yang bersifat tiga dimensi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 14, 20"
  },
  {
    "id": "d6_psv_u3_s1_08",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Sebuah lukisan alam semula jadi menggabungkan objek flora dan fauna serta menggunakan pelbagai jenis garisan, rupa dan jalinan tampak. Apakah prinsip rekaan yang terhasil?",
    "options": [
      "Imbangan simetri",
      "Kesatuan seragam",
      "Kontra suhu",
      "Kepelbagaian"
    ],
    "correctIndex": 3,
    "explanation": "Prinsip kepelbagaian wujud melalui olahan pelbagai jenis garisan, rupa dan jalinan tampak serta gabungan objek flora dan fauna.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 21"
  },
  {
    "id": "d6_psv_u3_s1_09",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Zarul melukis sebuah taman bunga menggunakan oil pastel. Dia melukis sekuntum bunga berwarna merah terang di ruang hadapan dan mewarnakan kawasan rumput di belakang dengan warna hijau lembut. Apakah dua kesan prinsip rekaan yang berjaya dihasilkan oleh Zarul?",
    "options": [
      "Penegasan pada bunga merah yang menarik perhatian dan harmoni/rasa damai daripada warna sekunder hijau",
      "Imbangan tidak simetri pada bunga merah dan jalinan sentuh daripada oil pastel",
      "Ruang tertutup pada taman bunga dan bentuk konkrit pada bunga merah",
      "Kesatuan mutlak tanpa sebarang perbezaan warna pada seluruh lukisan"
    ],
    "correctIndex": 0,
    "explanation": "Bunga berwarna merah mewujudkan penegasan kerana menonjol dan menarik perhatian, manakala penggunaan warna sekunder hijau memberikan rasa damai dan harmoni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20-21"
  },
  {
    "id": "d6_psv_u3_s1_10",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Mengapakah lukisan dua buah objek yang dilukis bersebelahan tanpa bayang dan tanpa pertindihan kelihatan leper berbanding lukisan dua objek yang saling bertindih serta mempunyai bayang?",
    "options": [
      "Kerana lukisan tanpa bayang menggunakan terlalu banyak garisan rapat",
      "Kerana pertindihan objek dan bayang berfungsi menimbulkan kesan bentuk ilusi serta jarak ruang antara objek",
      "Kerana objek yang bertindih menukarkan kertas lukisan menjadi ruang tertutup",
      "Kerana bayang hanya boleh dilukis menggunakan cat air dan bukan media kering"
    ],
    "correctIndex": 1,
    "explanation": "Kedudukan dua objek yang saling bertindih dan mempunyai bayang akan menimbulkan kesan bentuk serta ruang antara objek, menjadikan lukisan tidak kelihatan leper.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 20"
  },
  {
    "id": "d6_psv_u3_s2_01",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah bahan yang sesuai digunakan untuk menghasilkan jalinan tampak melalui teknik capan?",
    "options": [
      "Kacang hijau dan gam",
      "Kain felt dan gunting",
      "Pembalut gelembung dan cat air",
      "Daun plastik dan dawai"
    ],
    "correctIndex": 2,
    "explanation": "Teknik capan menggunakan pembalut gelembung dan cat air menghasilkan kesan corak berbintik yang mewujudkan jalinan tampak pada karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 22"
  },
  {
    "id": "d6_psv_u3_s2_02",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Antara bahan berikut, manakah yang boleh ditampal menggunakan teknik kolaj untuk menghasilkan jalinan sentuh pada karya?",
    "options": [
      "Warna air cair",
      "Pen warna",
      "Pensel grafit",
      "Kacang hijau dan daun plastik"
    ],
    "correctIndex": 3,
    "explanation": "Jalinan sentuh terhasil melalui teknik kolaj yang menampal bahan alam semula jadi atau bahan bertekstur seperti kacang hijau dan daun plastik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 22"
  },
  {
    "id": "d6_psv_u3_s2_03",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah bahan utama yang digunting dan disusun untuk menghasilkan karya menggunakan teknik montaj?",
    "options": [
      "Gambar bercetak",
      "Kepingan logam",
      "Biji kacang hijau",
      "Pembalut gelembung"
    ],
    "correctIndex": 0,
    "explanation": "Teknik montaj menggunakan bahan gambar bercetak (seperti daripada majalah atau sumber internet yang dicetak) untuk disusun menjadi komposisi karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 23-24"
  },
  {
    "id": "d6_psv_u3_s2_04",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Selain teknik capan dan lukisan silang pangkah, apakah dua teknik lain yang boleh menghasilkan kesan jalinan tampak?",
    "options": [
      "Teknik tanggam dan teknik anyaman",
      "Teknik gosokan dan teknik cetakan",
      "Teknik kolaj batu dan teknik asemblaj",
      "Teknik ukiran kayu dan teknik tempaan"
    ],
    "correctIndex": 1,
    "explanation": "Selain teknik capan dan lukisan silang pangkah, teknik gosokan dan cetakan juga boleh digunakan untuk menghasilkan kesan jalinan tampak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 22"
  },
  {
    "id": "d6_psv_u3_s2_05",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah bahan yang digunakan dalam teknik kolaj untuk membentuk pokok kaktus yang mempunyai jalinan sentuh lembut pada karya?",
    "options": [
      "Pen warna",
      "Kertas lukisan nipis",
      "Kain felt",
      "Cat poster"
    ],
    "correctIndex": 2,
    "explanation": "Teknik kolaj pada kain felt dapat membentuk pokok kaktus yang mempunyai jalinan sentuh apabila disentuh.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_psv_u3_s2_06",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Mengapakah seseorang pengkarya digalakkan menggabungkan kepelbagaian teknik dan bahan seperti montaj, kolaj dan lukisan dalam satu karya?",
    "options": [
      "Untuk memendekkan tempoh penyimpanan di dalam fail",
      "Untuk mengelakkan penggunaan unsur garisan dalam karya",
      "Untuk menyukarkan pengunjung memahami tema karya",
      "Untuk menimbulkan daya tarikan dan mewujudkan variasi"
    ],
    "correctIndex": 3,
    "explanation": "Kepelbagaian teknik dan bahan dalam menghasilkan karya dapat menimbulkan daya tarikan serta mewujudkan variasi pada hasil seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 23"
  },
  {
    "id": "d6_psv_u3_s2_07",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Dalam aktiviti menghasilkan karya bertemakan pokok kaktus, bagaimanakah cara membentuk beberapa imej pokok kaktus daripada kertas warna dengan kemas dan seimbang?",
    "options": [
      "Menggunakan teknik lipat dan gunting pada kertas warna",
      "Menekap pembalut gelembung yang disapu cat air",
      "Menampal kacang hijau mengikut bentuk segi empat",
      "Melorek latar belakang dengan pen penanda hitam"
    ],
    "correctIndex": 0,
    "explanation": "Teknik lipat dan gunting digunakan untuk membentuk imej pokok kaktus daripada kertas warna secara kreatif.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_psv_u3_s2_08",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Apakah contoh produk gabungan bidang menggambar dengan bidang membentuk dan membuat binaan yang boleh dihasilkan daripada karya teknik campuran?",
    "options": [
      "Arca asemblaj besi di tengah padang",
      "Hiasan dinding, kad ucapan dan buku nota",
      "Tetingkap fokus daripada kadbod kosong",
      "Bekas kotak piza tanpa hiasan"
    ],
    "correctIndex": 1,
    "explanation": "Hasil karya bidang menggambar boleh digabungkan dengan bidang membentuk dan membuat binaan seperti menghasilkan hiasan dinding, kad ucapan dan buku nota.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 23, 25"
  },
  {
    "id": "d6_psv_u3_s2_09",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Mei Ling mencetak gambar sebuah pasu besar lalu menampalnya pada kertas lukisan. Kemudian, dia menyusun beberapa imej pokok kaktus secara seragam di atas pasu tersebut dengan teknik montaj. Apakah dua prinsip rekaan yang paling ketara dalam gubahan Mei Ling?",
    "options": [
      "Kontra dan imbangan tidak simetri kerana semua objek berwarna berbeza",
      "Penegasan dan pergerakan kerana pasu lebih kecil daripada kaktus",
      "Harmoni yang memberikan ketenangan melalui susunan seragam dan kesatuan melalui gabungan pelbagai bentuk",
      "Jalinan sentuh dan bentuk konkrit kerana pasu diperbuat daripada tanah liat"
    ],
    "correctIndex": 2,
    "explanation": "Penggunaan bentuk, jalinan dan warna yang disusun secara seragam menimbulkan harmoni serta ketenangan, manakala pemilihan pelbagai bentuk pokok kaktus mewujudkan kesatuan dalam gubahan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_psv_u3_s2_10",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Dalam satu projek kad ucapan, Adam menggabungkan lukisan pensel warna pada latar kad dengan tampalan potongan kain felt berbentuk pokok kaktus. Bagaimanakah kedua-dua teknik ini saling melengkapi dari segi bahasa seni visual?",
    "options": [
      "Lukisan pensel warna menghasilkan jalinan sentuh manakala kain felt menghasilkan ruang dalam",
      "Kedua-dua teknik hanya menghasilkan bentuk konkrit tiga dimensi tanpa unsur garisan",
      "Lukisan pensel warna menghilangkan kesan harmoni manakala kain felt mewujudkan teknik cetakan",
      "Lukisan pensel warna menggunakan garisan untuk menimbulkan jalinan tampak yang harmoni, manakala kolaj kain felt menambah jalinan sentuh yang nyata"
    ],
    "correctIndex": 3,
    "explanation": "Lukisan pensel warna membentuk garisan yang menimbulkan kesan jalinan tampak yang harmoni, manakala teknik kolaj menggunakan kain felt menghasilkan jalinan sentuh pada karya gabungan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_psv_u4_s1_01",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Karya kotak makanan Cik Lebah dan Madu menggabungkan dua bidang seni visual, iaitu bidang menggambar dengan bidang _____.",
    "options": [
      "membentuk dan membuat binaan",
      "membuat corak dan rekaan",
      "mengenal kraf tradisional",
      "cetakan dan lukisan digital"
    ],
    "correctIndex": 0,
    "explanation": "Produk kotak makanan Cik Lebah dan Madu ialah karya gabungan antara bidang menggambar dengan bidang membentuk dan membuat binaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26"
  },
  {
    "id": "d6_psv_u4_s1_02",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah tema pemilihan hal benda yang digunakan dalam penghasilan karya gabungan Cik Lebah dan Madu?",
    "options": [
      "Tumbuhan",
      "Serangga",
      "Kenderaan",
      "Hidupan laut"
    ],
    "correctIndex": 1,
    "explanation": "Pemilihan hal benda dalam Unit 4 bertemakan serangga seperti lebah, pepatung, kupu-kupu dan kumbang dengan lebah sebagai hal benda yang dipilih.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26"
  },
  {
    "id": "d6_psv_u4_s1_03",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah yang terhasil apabila permulaan dan penghujung sesuatu garisan bertemu semasa membuat lakaran perkembangan idea?",
    "options": [
      "Bentuk",
      "Jalinan",
      "Rupa",
      "Ruang"
    ],
    "correctIndex": 2,
    "explanation": "Pertemuan antara permulaan dengan penghujung garisan akan menghasilkan rupa, dan olahan rupa yang berulang boleh menghasilkan corak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 27"
  },
  {
    "id": "d6_psv_u4_s1_04",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah saiz templat hamparan kotak yang dilakarkan pada kad manila bagi projek Cik Lebah dan Madu?",
    "options": [
      "Saiz A5",
      "Saiz A4",
      "Saiz B4",
      "Saiz A3"
    ],
    "correctIndex": 3,
    "explanation": "Lakaran templat hamparan kotak untuk projek Cik Lebah dan Madu disediakan dalam saiz A3 di atas kad manila.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 29"
  },
  {
    "id": "d6_psv_u4_s1_05",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Antara berikut, apakah tiga teknik dan proses utama yang digunakan untuk menghasilkan kotak makanan Cik Lebah dan Madu?",
    "options": [
      "Lukisan, lipatan dan cantuman",
      "Catan, kolaj dan anyaman",
      "Cetakan, resis dan gosokan",
      "Ukiran, luakan dan acuan"
    ],
    "correctIndex": 0,
    "explanation": "Penghasilan kotak makanan berkonsepkan reka bentuk 3D ini menggunakan teknik dan proses lukisan, lipatan dan cantuman.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26"
  },
  {
    "id": "d6_psv_u4_s1_06",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Mengapakah imbangan simetri diaplikasikan pada bahagian kanan dan kiri rekaan kotak makanan Cik Lebah dan Madu?",
    "options": [
      "Untuk mengurangkan penggunaan kad manila semasa memotong",
      "Supaya binaan kotak menjadi lebih stabil dan kukuh",
      "Agar warna latar belakang kelihatan lebih terang dan berkilat",
      "Untuk memudahkan proses mencetak gambar foto pada kertas A4"
    ],
    "correctIndex": 1,
    "explanation": "Imbangan simetri wujud pada bahagian kanan dan kiri kotak supaya binaan kotak tersebut lebih stabil dan kukuh apabila digunakan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 29"
  },
  {
    "id": "d6_psv_u4_s1_07",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Semasa menghasilkan motif lebah pada kotak, murid mencoret pelbagai jenis garisan seperti garisan beralun, sendeng dan silang pangkah menggunakan pen. Apakah unsur seni yang timbul daripada coretan tersebut?",
    "options": [
      "Jalinan sentuh",
      "Ruang ilusi",
      "Jalinan tampak",
      "Imbangan tidak simetri"
    ],
    "correctIndex": 2,
    "explanation": "Pelbagai jenis garisan yang dicoret pada motif lebah dan sarang lebah dengan pen dan pen warna akan menimbulkan jalinan tampak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 30"
  },
  {
    "id": "d6_psv_u4_s1_08",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Dalam sesi apresiasi seni kotak Cik Lebah dan Madu, bagaimanakah prinsip kesatuan dapat dilihat pada permukaan kotak tersebut?",
    "options": [
      "Melalui penggunaan ikatan reben yang panjang pada penutup kotak",
      "Melalui gabungan warna gelap sahaja pada keseluruhan kad manila",
      "Melalui penggunaan gam dan pita pelekat pada bahagian cantuman",
      "Melalui gabungan rupa organik dan pengulangan susunan rupa geometri"
    ],
    "correctIndex": 3,
    "explanation": "Karya kotak Cik Lebah dan Madu mengandungi prinsip kesatuan yang dapat dilihat melalui gabungan rupa organik dan pengulangan susunan rupa geometri.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 33"
  },
  {
    "id": "d6_psv_u4_s1_09",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Seorang murid ingin melakar perkembangan idea badan dan sarang lebah secara ringkas sebelum memilih rekaan untuk diaplikasikan pada kotak pembungkusan. Mengapakah media kering dan teknik lukisan paling sesuai digunakan pada peringkat ini?",
    "options": [
      "Kerana media kering hanya boleh digunakan pada kad keras bersaiz A3 selepas karya siap sepenuhnya",
      "Kerana media kering tidak memerlukan sebarang lakaran templat hamparan kotak pada peringkat seterusnya",
      "Kerana teknik lukisan menggunakan pensel mampu menghasilkan bentuk tiga dimensi secara automatik tanpa perlu dilipat",
      "Kerana media kering seperti pensel dan pen memudahkan olahan rupa berulang dibuat dengan cepat dan kemas sebelum penentuan reka letak"
    ],
    "correctIndex": 3,
    "explanation": "Pada peringkat perkembangan idea, media kering seperti pensel dan pen melalui teknik lukisan digunakan untuk mengolah idea hal benda dan corak rupa berulang dengan mudah sebelum diaplikasikan pada kotak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 27"
  },
  {
    "id": "d6_psv_u4_s1_10",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Jika seorang murid melukis motif lebah dan sarang madu secara terus pada kad manila A3 tanpa melakukan kajian warna dan lakaran reka letak terlebih dahulu, apakah kesan utama terhadap hasil karya gabungannya?",
    "options": [
      "Kotak makanan tidak dapat dilipat kerana pen penanda akan melunturkan kad manila",
      "Susunan motif, padanan warna dan keseimbangan rekaan pada bahagian hadapan serta sisi kotak berkemungkinan tidak teratur",
      "Ikatan reben pada kemasan kotak tidak akan dapat mengikat bahagian penutup kotak",
      "Gambar foto karya tidak boleh dicetak pada kertas A4 menggunakan komputer"
    ],
    "correctIndex": 1,
    "explanation": "Lakaran reka letak dan kajian warna membantu menentukan susunan motif yang seimbang serta pemilihan media dan warna yang harmoni sebelum proses melukis pada hamparan kotak dilakukan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 28-30"
  },
  {
    "id": "d6_psv_u4_s2_01",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah jenis media yang digunakan untuk menghasilkan lakaran perkembangan idea dan karya kotak makanan Cik Lebah dan Madu?",
    "options": [
      "Media basah seperti cat akrilik",
      "Media arca seperti tanah liat",
      "Media kering seperti pensel, pen, pen penanda dan pen warna",
      "Media cetakan seperti dakwat lino dan penggelek"
    ],
    "correctIndex": 2,
    "explanation": "Karya kotak Cik Lebah dan Madu menggunakan pelbagai jenis media kering seperti pensel, pen, pen penanda dan pen warna.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 33"
  },
  {
    "id": "d6_psv_u4_s2_02",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah bahan yang digunakan sebagai kemasan untuk menghias kotak makanan Cik Lebah dan Madu selepas siap dicantumkan?",
    "options": [
      "Dawai halus",
      "Manik kaca",
      "Semburan pengilat",
      "Ikatan reben"
    ],
    "correctIndex": 3,
    "explanation": "Selepas kotak siap dilipat dan dicantumkan, kotak dihias dengan ikatan reben sebagai kemasan karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26, 31"
  },
  {
    "id": "d6_psv_u4_s2_03",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Selain gam, apakah bahan lain yang boleh digunakan untuk mencantumkan bahagian lipatan kotak makanan Cik Lebah dan Madu?",
    "options": [
      "Pita pelekat",
      "Lidi tebal",
      "Kain felt",
      "Oil pastel"
    ],
    "correctIndex": 0,
    "explanation": "Selain gam, murid juga boleh menggunakan pita pelekat untuk mencantumkan bahagian sisi hasil karya kotak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_psv_u4_s2_04",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah alat yang dicadangkan untuk merakamkan gambar foto hasil karya kotak makanan Cik Lebah dan Madu?",
    "options": [
      "Mesin pengimbas atau mesin fotostat",
      "Kamera digital atau kamera telefon pintar",
      "Projektor LCD atau papan pintar",
      "Pensel warna atau pen penanda"
    ],
    "correctIndex": 1,
    "explanation": "Gambar hasil karya dirakam menggunakan kamera digital atau kamera telefon pintar sebelum dipindahkan ke komputer untuk dicetak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 32"
  },
  {
    "id": "d6_psv_u4_s2_05",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah fungsi utama produk kotak Cik Lebah dan Madu yang dihasilkan dalam Unit 4?",
    "options": [
      "Sebagai alat permainan bermotor",
      "Sebagai bingkai gambar dinding",
      "Sebagai kotak pembungkusan makanan atau madu",
      "Sebagai bekas menyimpan alat tulis kayu"
    ],
    "correctIndex": 2,
    "explanation": "Karya kotak Cik Lebah dan Madu mempunyai nilai gunaan dan berfungsi sebagai kotak pembungkusan makanan atau madu.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26, 33"
  },
  {
    "id": "d6_psv_u4_s2_06",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Pilih susunan langkah yang betul semasa menghasilkan kotak makanan Cik Lebah dan Madu.",
    "options": [
      "Potong kad manila -> Ikat reben -> Lakar hamparan kotak -> Warna latar belakang",
      "Tampal cantuman -> Lakar motif lebah -> Lipat sisi kotak -> Potong hasil karya",
      "Warna dengan pen penanda -> Tampal kad keras A3 -> Lakar templat -> Gunting kotak",
      "Lakar hamparan kotak dan motif -> Warna motif dan latar belakang -> Potong dan lipat -> Tampal cantuman dan hias reben"
    ],
    "correctIndex": 3,
    "explanation": "Proses penghasilan bermula dengan melakar hamparan kotak dan motif, mewarna motif serta latar belakang, memotong dan melipat bahagian sisi, lalu menampal cantuman serta menghias dengan ikatan reben.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 30-31"
  },
  {
    "id": "d6_psv_u4_s2_07",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Selepas gambar foto hasil karya kotak dicetak pada kertas A4, bagaimanakah cara membuat kemasan pada gambar foto tersebut?",
    "options": [
      "Membingkaikannya dengan menampalkannya pada kad keras bersaiz A3",
      "Menyembur gambar foto dengan semburan pengilat di atas kad manila",
      "Melipat gambar foto menjadi bentuk kotak tiga dimensi yang kecil",
      "Menggunting gambar foto mengikut bentuk lebah dan menampalkannya pada kotak"
    ],
    "correctIndex": 0,
    "explanation": "Gambar foto hasil karya yang dicetak pada kertas A4 dibingkaikan dengan menampalkannya pada kad keras bersaiz A3.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 32"
  },
  {
    "id": "d6_psv_u4_s2_08",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Selain pen penanda, pensel warna dan oil pastel, apakah media lain yang boleh digunakan untuk menghasilkan kajian warna bagi karya Cik Lebah dan Madu?",
    "options": [
      "Kain felt, dawai halus dan kulit telur",
      "Pistol perekat panas, lidi dan batu hiasan",
      "Modelling clay, gam kuat dan kad busa",
      "Pen warna, cat air dan cat poster"
    ],
    "correctIndex": 3,
    "explanation": "Media lain seperti pen warna, cat air dan cat poster juga boleh digunakan untuk menghasilkan kajian warna.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 28"
  },
  {
    "id": "d6_psv_u4_s2_09",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Mengapakah murid perlu menyiapkan keseluruhan aktiviti melukis, mencoret garisan dan mewarna latar belakang pada kad manila sebelum memotong dan mencantumkan kotak?",
    "options": [
      "Supaya pen penanda tidak kehabisan dakwat apabila digunakan pada permukaan yang kecil",
      "Supaya permukaan rata mudah dilukis dan diwarna dengan kemas serta sekata tanpa menjejaskan struktur lipatan kotak",
      "Kerana kad manila bersaiz A3 hanya boleh dipotong selepas semua cat air kering sepenuhnya",
      "Kerana ikatan reben perlu dipasang sebelum garisan silang pangkah dilukis pada sarang lebah"
    ],
    "correctIndex": 1,
    "explanation": "Melukis dan mewarna ketika hamparan kotak masih rata membolehkan murid menghasilkan garisan, jalinan tampak dan warna latar belakang secara teliti dan kemas sebelum kotak dipotong, dilipat dan dicantumkan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 30-31"
  },
  {
    "id": "d6_psv_u4_s2_10",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Dalam sesi apresiasi seni menggunakan kaedah Jalan Galeri (Gallery Walk), seorang murid menyatakan bahawa kotak pembungkusannya mempunyai nilai gunaan. Apakah maksud pernyataan tersebut?",
    "options": [
      "Karya tersebut menggunakan media kering yang paling mahal di pasaran",
      "Karya tersebut hanya sesuai diletakkan di dalam bingkai gambar bersaiz A3",
      "Karya tersebut bukan sekadar hiasan tetapi berfungsi secara praktikal sebagai pembungkusan makanan atau madu",
      "Karya tersebut dihasilkan melalui teknik cetakan dan boleh dijual dalam bentuk fail digital"
    ],
    "correctIndex": 2,
    "explanation": "Nilai gunaan bermaksud karya seni yang dihasilkan mempunyai fungsi praktikal dalam kehidupan harian, iaitu boleh dijadikan kotak pembungkusan madu atau makanan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 26, 33"
  },
  {
    "id": "d6_psv_u5_s1_01",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah produk yang dihasilkan dalam karya gabungan Unit 5: Si Cilik Koi?",
    "options": [
      "Arca stabail yang berfungsi sebagai alat permainan",
      "Kotak makanan tiga dimensi bertemakan hidupan air",
      "Mobail gantung daripada kertas origami berwarna",
      "Diorama dasar laut daripada tanah liat sepenuhnya"
    ],
    "correctIndex": 0,
    "explanation": "Produk yang dihasilkan dalam Unit 5 ialah arca stabail yang berfungsi sebagai alat permainan dengan gabungan bidang menggambar (catan) dan membentuk serta membuat binaan (stabail).",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 34, 45"
  },
  {
    "id": "d6_psv_u5_s1_02",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah gabungan bahan yang dipilih dalam penentuan media dan bahan untuk membentuk badan dan kepala ikan koi?",
    "options": [
      "Botol minuman 500 ml dan kad manila",
      "Penggulung tisu dan kulit telur",
      "Lipatan kertas origami dan kad keras",
      "Modelling clay dan batang aiskrim"
    ],
    "correctIndex": 1,
    "explanation": "Penentuan bahan yang dipilih dalam buku teks ialah cantuman penggulung tisu dan kulit telur untuk membentuk badan dan kepala ikan koi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 35"
  },
  {
    "id": "d6_psv_u5_s1_03",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah bahan yang digunakan untuk membuat bahagian sirip dan ekor ikan koi pada lakaran reka bentuk ikan?",
    "options": [
      "Kulit telur",
      "Penutup botol",
      "Kad busa",
      "Cawan kertas"
    ],
    "correctIndex": 2,
    "explanation": "Kad busa digunakan sebagai sirip dan ekor ikan koi kerana ia mudah digunting mengikut lakaran dan ringan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 36, 42"
  },
  {
    "id": "d6_psv_u5_s1_04",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah jenis bahan yang diperlukan untuk membina bahagian tapak arca stabail Si Cilik Koi?",
    "options": [
      "Bahan yang lut sinar, lembut dan mudah bengkok",
      "Bahan yang ringan, nipis dan terapung di air",
      "Bahan yang berongga, rapuh dan mudah pecah",
      "Bahan yang lebih berat, kukuh dan rata"
    ],
    "correctIndex": 3,
    "explanation": "Bahagian tapak arca stabail memerlukan bahan yang lebih berat, kukuh dan rata seperti kadbod supaya arca stabil dan permukaan rata sesuai untuk aktiviti catan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 36"
  },
  {
    "id": "d6_psv_u5_s1_05",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah unsur seni yang wujud pada badan ikan koi apabila manik dan dawai halus ditampal serta diikat sebagai corak?",
    "options": [
      "Jalinan tampak",
      "Rupa geometri",
      "Jalinan sentuh",
      "Garisan grid"
    ],
    "correctIndex": 2,
    "explanation": "Manik pada badan ikan dan ikatan dawai halus pada mulut ikan menghasilkan permukaan timbul yang dapat dirasa, iaitu mewujudkan jalinan sentuh.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 36, 43"
  },
  {
    "id": "d6_psv_u5_s1_06",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Semasa mewarnakan latar belakang catan pada tapak arca stabail, bagaimanakah ton warna digunakan untuk mewujudkan unsur ruang jauh dan dekat?",
    "options": [
      "Ton warna lebih cerah di bahagian hadapan dan lebih gelap di bahagian belakang",
      "Ton warna lebih gelap di bahagian hadapan dan lebih terang di bahagian belakang",
      "Semua bahagian diwarnakan dengan satu warna putih rata tanpa ton",
      "Bahagian sisi kotak sahaja yang diwarnakan dengan warna gelap"
    ],
    "correctIndex": 1,
    "explanation": "Latar belakang catan diwarnakan dengan ton warna yang lebih gelap di hadapan dan terang di belakang untuk mewujudkan unsur ruang jauh dan dekat.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 40"
  },
  {
    "id": "d6_psv_u5_s1_07",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Dalam sesi apresiasi seni Si Cilik Koi, bagaimanakah prinsip ritma dan pergerakan diterapkan pada karya tersebut?",
    "options": [
      "Melalui penggunaan cat poster putih sebagai lapisan asas kotak kadbod",
      "Melalui cantuman pistol perekat panas pada bahagian bawah tapak kotak",
      "Melalui semburan pengilat pada keseluruhan cawan kertas dan batu hiasan",
      "Melalui susunan manik pada dawai halus yang kelihatan seakan-akan buih bergerak bersama ikan"
    ],
    "correctIndex": 3,
    "explanation": "Prinsip ritma dan pergerakan diterapkan melalui susunan manik pada dawai halus yang kelihatan seakan-akan buih bergerak bersama-sama ikan yang berenang di dalam air.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 45"
  },
  {
    "id": "d6_psv_u5_s1_08",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Apakah kepentingan prinsip imbangan simetri dalam pembinaan kotak tapak dan sistem roda pada arca stabail Si Cilik Koi?",
    "options": [
      "Membolehkan arca berpusing dengan seimbang dan stabil pada paksinya",
      "Memastikan warna cat poster tidak pudar apabila terkena cahaya matahari",
      "Mengelakkan kulit telur daripada retak semasa diwarnakan dengan berus",
      "Menjadikan tekstur batu dan cangkerang lebih berkilat tanpa pengilat"
    ],
    "correctIndex": 0,
    "explanation": "Prinsip imbangan simetri pada kotak tapak dan roda membolehkan arca stabail berpusing dengan seimbang dan stabil pada paksinya apabila pemusing roda digerakkan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39, 45"
  },
  {
    "id": "d6_psv_u5_s1_09",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Jika seorang murid menggantikan tapak kadbod yang tebal dengan kertas lukisan nipis untuk membina kotak separa terbuka arca stabail, apakah masalah utama yang akan berlaku semasa arca dimainkan?",
    "options": [
      "Kulit telur akan tertanggal daripada penggulung tisu dengan sendirinya",
      "Kertas lukisan tidak dapat menyerap warna pensel warna semasa kajian warna",
      "Tapak tidak cukup berat dan kukuh untuk menampung paksi lidi serta daya pusingan roda sehingga arca mudah tumbang atau koyak",
      "Manik pada dawai halus akan berubah menjadi jalinan tampak yang rata"
    ],
    "correctIndex": 2,
    "explanation": "Tapak arca stabail memerlukan bahan yang lebih berat, kukuh dan rata seperti kadbod supaya mampu menyokong sistem dua roda, paksi penyedut minuman dan pergerakan arca ikan koi secara stabil.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 36, 38-39"
  },
  {
    "id": "d6_psv_u5_s1_10",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Mengapakah lakaran perkembangan idea ikan koi dilukis daripada beberapa sudut pandangan seperti pandangan atas, pandangan sisi dan pandangan belakang sebelum membina arca?",
    "options": [
      "Supaya murid dapat memilih sudut yang paling mudah untuk dicetak pada kertas A4",
      "Kerana ikan koi tidak boleh dilihat dari bahagian hadapan dalam lakaran seni visual",
      "Kerana cat poster hanya boleh disapu selepas tiga lukisan berbeza ditampal pada kadbod",
      "Supaya bentuk tiga dimensi serta kedudukan struktur seperti sirip, ekor, sisik dan badan ikan dapat dirancang secara menyeluruh sebelum cantuman dibuat"
    ],
    "correctIndex": 3,
    "explanation": "Lakaran pelbagai sudut pandangan membantu murid memahami struktur penuh hal benda dan merancang reka bentuk tiga dimensi (3D) ikan koi dengan tepat sebelum proses binaan dan cantuman.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 34-35"
  },
  {
    "id": "d6_psv_u5_s2_01",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah bahan yang diletakkan pada bahagian atas kotak tapak arca stabail untuk dijadikan paksi bagi memasukkan lidi roda 2?",
    "options": [
      "Penyedut minuman",
      "Cawan kertas",
      "Kain felt",
      "Kad busa"
    ],
    "correctIndex": 0,
    "explanation": "Penyedut minuman ditebuk dan ditampalkan pada bahagian atas kotak sebagai paksi untuk memasukkan lidi roda 2.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39"
  },
  {
    "id": "d6_psv_u5_s2_02",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah fungsi modelling clay dalam pembinaan sistem roda pada tapak arca stabail Si Cilik Koi?",
    "options": [
      "Sebagai pengganti cawan kertas pada tapak ikan",
      "Sebagai pengunci bagi mengawal pergerakan lidi roda 1",
      "Sebagai bahan hiasan tambahan di sekeliling batu kolam",
      "Sebagai lapisan asas sebelum menyapu cat poster putih"
    ],
    "correctIndex": 1,
    "explanation": "Modelling clay dilekatkan sebagai pengunci bagi mengawal pergerakan lidi roda 1 supaya sistem roda berfungsi dengan baik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39"
  },
  {
    "id": "d6_psv_u5_s2_03",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Mengapakah cat poster putih disapukan terlebih dahulu pada sekeliling kotak kadbod sebelum mewarnakan latar belakang catan?",
    "options": [
      "Untuk melekatkan penutup botol pada lidi tebal",
      "Untuk mengeringkan gam kuat dengan lebih pantas",
      "Sebagai lapisan pertama sebelum mewarnakan ton warna latar belakang",
      "Untuk menggantikan fungsi penyembur pengilat pada kemasan akhir"
    ],
    "correctIndex": 2,
    "explanation": "Sekeliling kotak kadbod diwarnakan dengan cat poster putih sebagai lapisan pertama sebelum latar belakang dan rupa objek diwarnakan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 40"
  },
  {
    "id": "d6_psv_u5_s2_04",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah tujuan menyembur karya tapak arca stabail dengan penyembur pengilat sebagai kemasan?",
    "options": [
      "Supaya kad busa boleh ditanggalkan semula dengan mudah",
      "Supaya roda 1 dan roda 2 melekat kekal tanpa bergerak",
      "Supaya warna cat poster bertukar menjadi warna pastel",
      "Supaya karya tahan lebih lama dan warnanya tidak pudar"
    ],
    "correctIndex": 3,
    "explanation": "Penyembur pengilat disembur sebagai kemasan supaya hasil karya tahan lebih lama dan tidak pudar.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 41"
  },
  {
    "id": "d6_psv_u5_s2_05",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Dalam projek arca stabail 'Si Cilik Koi' (Unit 5), bahan bertekstur lembut manakah yang digunakan untuk membalut penggulung tisu yang telah dileperkan hujungnya bagi membentuk badan ikan?",
    "options": [
      "Kain felt",
      "Kertas lukisan",
      "Kulit telur",
      "Kad manila"
    ],
    "correctIndex": 0,
    "explanation": "Hujung penggulung tisu dileperkan dan dibalut dengan kain felt dengan kemasnya untuk dijadikan badan ikan koi.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 42"
  },
  {
    "id": "d6_psv_u5_s2_06",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Bagaimanakah kedudukan roda 1 dan roda 2 perlu diselaraskan di dalam kotak tapak arca stabail supaya ikan koi dapat digerakkan dengan lancar?",
    "options": [
      "Roda 1 diletakkan di luar kotak dan diikat dengan dawai halus pada roda 2",
      "Roda 1 dan roda 2 mesti diselaraskan supaya bersentuhan pada bahagian atas untuk menghasilkan daya pergerakan",
      "Roda 1 dan roda 2 hendaklah dijauhkan sekurang-kurangnya lima sentimeter supaya tidak bergeser",
      "Roda 2 ditampalkan terus pada dasar kadbod dengan pistol perekat panas"
    ],
    "correctIndex": 1,
    "explanation": "Roda 1 perlu diselaraskan supaya bersentuhan dengan roda 2 pada bahagian atas bagi menghasilkan daya untuk menggerakkan arca ikan koi dengan lancarnya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39"
  },
  {
    "id": "d6_psv_u5_s2_07",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Apakah langkah keselamatan dan kebersihan yang perlu diamalkan semasa membina dan mewarna arca stabail Si Cilik Koi?",
    "options": [
      "Menebuk kulit telur menggunakan pistol perekat panas yang sedang panas",
      "Menyembur pengilat di dalam bekas tertutup tanpa alas permukaan",
      "Berhati-hati semasa menebuk penutup botol dan kulit telur serta mengalas tapak arca sebelum mewarna dan menyembur pengilat",
      "Menggunakan tangan kosong untuk meratakan gam kuat pada penyedut minuman"
    ],
    "correctIndex": 2,
    "explanation": "Murid perlu berhati-hati semasa menebuk penutup botol, menggunakan pistol perekat panas dan menebuk kulit telur dengan hujung gunting, serta mengalas tapak arca sebelum mewarna dan menyembur pengilat.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 38, 41-42"
  },
  {
    "id": "d6_psv_u5_s2_08",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Dalam bahagian Penghasilan Gambar Karya Unit 5, bagaimanakah karya Si Cilik Koi didokumentasikan selain merakamkannya dengan kamera telefon pintar?",
    "options": [
      "Melukis semula karya pada kertas lukisan, mewarna dengan media kering dan meletakkannya pada bingkai gambar",
      "Mencetak templat kotak bersaiz A3 dan memotongnya menjadi gambar dua dimensi",
      "Mengambil gambar menggunakan kamera digital dan menampalnya pada kad busa",
      "Menyapu cat poster putih di atas kertas lukisan lalu menampal kulit telur"
    ],
    "correctIndex": 0,
    "explanation": "Gambar karya Si Cilik Koi dihasilkan dengan melukis semula karya pada kertas lukisan, mewarnakannya dengan pelbagai media kering merujuk kajian warna, dan meletakkannya pada bingkai gambar sebagai kemasan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 44"
  },
  {
    "id": "d6_psv_u5_s2_09",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Apabila pemusing roda pada sisi kotak digerakkan, roda 1 berputar tetapi ikan koi di atas tapak tidak berpusing. Berdasarkan mekanisme binaan arca stabail, apakah punca paling mungkin berlakunya keadaan tersebut?",
    "options": [
      "Cat poster putih pada sekeliling kotak masih belum disembur dengan penyembur pengilat",
      "Roda 1 tidak bersentuhan dengan roda 2 pada bahagian atas atau lidi roda 2 tidak terpasang dengan baik pada lubang bawah badan ikan",
      "Kain felt yang membalut badan ikan koi terlalu nipis berbanding kad busa pada sirip",
      "Batu hiasan dan cangkerang pada permukaan kotak tidak dilekatkan dengan gam kuat"
    ],
    "correctIndex": 1,
    "explanation": "Pergerakan ikan koi bergantung pada sentuhan antara roda 1 dengan roda 2 yang memindahkan daya kepada lidi roda 2 yang dicantumkan pada lubang di bawah badan ikan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39, 43"
  },
  {
    "id": "d6_psv_u5_s2_10",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Jika pistol perekat panas tidak tersedia di dalam bilik seni semasa membina tapak arca stabail daripada kadbod, apakah bahan alternatif yang dinyatakan dalam buku teks untuk mencantumkan tapak arca dan bahan hiasannya?",
    "options": [
      "Gam kuat",
      "Oil pastel",
      "Cat air",
      "Pen warna"
    ],
    "correctIndex": 0,
    "explanation": "Nota guru dan senarai alat bahan menyatakan bahawa selain pistol perekat panas, bahan lain seperti gam kuat juga boleh digunakan untuk menghasilkan tapak arca stabail serta melekatkan bahan hiasan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 39, 41"
  },
  {
    "id": "d6_psv_u6_s1_01",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh susunan corak terancang?",
    "options": [
      "Susunan sisik ikan",
      "Susunan tiupan",
      "Susunan renjisan",
      "Susunan titisan"
    ],
    "correctIndex": 0,
    "explanation": "Susunan sisik ikan ialah salah satu jenis susunan corak terancang selain susunan dam, turun separa, cerminan, ogee dan berpancar. Tiupan, renjisan dan titisan ialah teknik corak tidak terancang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_psv_u6_s1_02",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Selain teknik stensilan, teknik manakah yang boleh digunakan untuk menghasilkan susunan corak terancang?",
    "options": [
      "Tiupan dan pualaman",
      "Lukisan, kolaj dan capan",
      "Ikatan dan celupan",
      "Renjisan dan percikan"
    ],
    "correctIndex": 1,
    "explanation": "Corak terancang boleh dihasilkan menggunakan teknik stensilan, lukisan, kolaj dan capan. Tiupan, pualaman, ikatan dan celupan serta renjisan dan percikan ialah teknik corak tidak terancang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_psv_u6_s1_03",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah fungsi penggunaan warna kontra dalam penghasilan karya corak terancang?",
    "options": [
      "Menjadikan semua motif kelihatan sama rata",
      "Menghilangkan kesan jalinan pada permukaan karya",
      "Menarik perhatian dan mengelakkan kebosanan",
      "Mengurangkan jumlah rupa geometri yang digunakan"
    ],
    "correctIndex": 2,
    "explanation": "Penggunaan warna kontra dalam susunan corak terancang bertujuan untuk menarik perhatian penonton serta mengelakkan rasa bosan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_psv_u6_s1_04",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Dalam penghasilan kulit buku nota bercorak sisik ikan menggunakan teknik kolaj, apakah rupa geometri yang diulang untuk membentuk corak tersebut?",
    "options": [
      "Rupa segi tiga sama",
      "Rupa segi empat tepat",
      "Rupa bujur memanjang",
      "Rupa separa bulatan"
    ],
    "correctIndex": 3,
    "explanation": "Corak sisik ikan pada kulit buku nota dihasilkan dengan mengulang rupa geometri berbentuk separa bulatan secara teratur.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_psv_u6_s1_05",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Teknik kolaj yang menampal rupa separa bulat dan motif bunga pada kulit buku nota menghasilkan unsur jalinan jenis apa?",
    "options": [
      "Jalinan sentuh",
      "Jalinan tampak",
      "Jalinan ilusi",
      "Jalinan maya"
    ],
    "correctIndex": 0,
    "explanation": "Tampalan berlapis menggunakan teknik kolaj menghasilkan permukaan timbul yang dapat dirasa dengan jari, iaitu jalinan sentuh.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_psv_u6_s1_06",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Bagaimanakah kesan harmoni dan keseimbangan diwujudkan pada keseluruhan karya susunan corak sisik ikan?",
    "options": [
      "Menggunakan satu warna gelap pada seluruh latar",
      "Menghasilkan saiz rupa yang sama dan disusun secara sekata",
      "Menampal motif secara rawak tanpa jarak tertentu",
      "Menggabungkan garisan beralun yang tidak sekata"
    ],
    "correctIndex": 1,
    "explanation": "Dalam susunan corak sisik ikan, penggunaan saiz rupa yang sama dan disusun secara sekata dapat mewujudkan kesan harmoni serta keseimbangan pada keseluruhan karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_psv_u6_s1_07",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Untuk mewujudkan kesan pergerakan pada corak garisan berpancar, bagaimanakah saiz rupa yang ditampal perlu disusun?",
    "options": [
      "Semua rupa mesti bersaiz kecil dan bertindih",
      "Rupa di belakang lebih besar daripada rupa di hadapan",
      "Rupa di hadapan bersaiz lebih besar daripada rupa di belakang",
      "Rupa disusun secara menegak dengan saiz yang seragam"
    ],
    "correctIndex": 2,
    "explanation": "Menampal rupa di hadapan bersaiz lebih besar daripada rupa di belakang mengikut kedudukan ruang dan jarak mewujudkan kesan ritma dan pergerakan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 52"
  },
  {
    "id": "d6_psv_u6_s1_08",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Apakah kesan bahasa seni visual yang terhasil apabila rupa yang berbeza saiz disusun pada garisan beralun untuk menghias bakul sampah mini?",
    "options": [
      "Kesan imbangan simetri",
      "Kesan penegasan warna",
      "Kesan jalinan sentuh",
      "Kesan ruang ilusi"
    ],
    "correctIndex": 3,
    "explanation": "Susunan rupa yang berbeza saiz pada garisan beralun mewujudkan ruang ilusi, iaitu kelihatan seolah-olah terdapat kedalaman ruang pada permukaan karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 53"
  },
  {
    "id": "d6_psv_u6_s1_09",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Seorang murid menghias beg kertas dengan menyusun rupa bulat secara sekata menggunakan gabungan warna sejuk dan warna panas. Apakah kesan utama yang terhasil daripada susunan tersebut?",
    "options": [
      "Kesan tumpuan dan pergerakan",
      "Kesan jalinan sentuh dan kesatuan",
      "Kesan ruang nyata dan keteguhan",
      "Kesan imbangan tidak simetri"
    ],
    "correctIndex": 0,
    "explanation": "Penggunaan warna sejuk dan warna panas pada rupa bulat yang disusun secara sekata memberikan kesan tumpuan serta pergerakan pada rekaan beg kertas.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 53"
  },
  {
    "id": "d6_psv_u6_s1_10",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Mengapakah olahan rupa geometri dan garisan titik-titik yang diulang secara teratur penting dalam sesuatu rekaan corak terancang seperti sarung kusyen?",
    "options": [
      "Untuk membolehkan pewarna fabrik meresap secara bebas tanpa kawalan",
      "Untuk memperlihatkan kesatuan serta mewujudkan ritma dan pergerakan",
      "Untuk menjadikan corak kelihatan tidak terancang dan spontan",
      "Untuk mengelakkan penggunaan sebarang prinsip kontra pada karya"
    ],
    "correctIndex": 1,
    "explanation": "Olahan rupa yang sama memperlihatkan kesatuan, manakala susunan rupa geometri dan garisan titik-titik yang berulang mewujudkan ritma dan pergerakan pada corak terancang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_psv_u6_s2_01",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Dalam aktiviti menghasilkan karya Dompet Lemon Kesayanganku, teknik apakah yang digunakan untuk mencorak kertas lukisan?",
    "options": [
      "Teknik capan",
      "Teknik stensilan",
      "Teknik resis",
      "Teknik pualaman"
    ],
    "correctIndex": 2,
    "explanation": "Karya Dompet Lemon Kesayanganku menggunakan teknik resis dengan melukis motif menggunakan oil pastel sebelum disapu pewarna makanan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_02",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Mengapakah motif lemon perlu dilukis semula menggunakan oil pastel sebelum mewarnakan kertas lukisan dengan pewarna makanan?",
    "options": [
      "Supaya kertas lukisan menjadi lebih tebal dan keras",
      "Supaya warna latar cepat kering apabila disapu berus",
      "Supaya motif lemon dapat ditanggalkan selepas siap",
      "Untuk menghalang sapuan warna daripada bercampur"
    ],
    "correctIndex": 3,
    "explanation": "Oil pastel bersifat kalis air, maka garisannya menghalang sapuan pewarna makanan berasaskan air daripada bercampur antara satu bahagian dengan bahagian lain.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_03",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah kategori warna bagi warna kuning yang disapukan pada buah lemon dalam karya Dompet Lemon Kesayanganku?",
    "options": [
      "Warna primer",
      "Warna sekunder",
      "Warna tertier",
      "Warna neutral"
    ],
    "correctIndex": 0,
    "explanation": "Kuning ialah warna primer (warna asas), manakala hijau pada daun ialah warna sekunder dan biru kehijauan pada latar ialah warna tertier.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_04",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Bahan manakah yang digunakan sebagai tapak utama untuk membentuk struktur dompet dalam projek Dompet Lemon Kesayanganku?",
    "options": [
      "Kain kapas tebal",
      "Kad busa",
      "Kertas tisu",
      "Kad gelugur"
    ],
    "correctIndex": 1,
    "explanation": "Hasil corak teknik resis ditampalkan pada kad busa menggunakan pita pelekat dua muka sebelum kad busa dilipat menjadi poket dan penutup dompet.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_psv_u6_s2_05",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah kegunaan pita velkro pada bahagian dalam rekaan Dompet Lemon Kesayanganku?",
    "options": [
      "Menghalang pewarna makanan daripada melimpah",
      "Mencantumkan kertas lukisan dengan berus warna",
      "Membolehkan dompet ditutup rapat dan kemas",
      "Menjadi bahan hiasan pada bahagian luar poket"
    ],
    "correctIndex": 2,
    "explanation": "Pita velkro dilekatkan pada bahagian dalam dompet supaya penutup dompet dapat ditutup dengan rapat dan kemas.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_psv_u6_s2_06",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Mengapakah warna tertier iaitu biru kehijauan dipilih untuk disapu pada bahagian latar corak lemon?",
    "options": [
      "Untuk menyeragamkan warna daun hijau dengan latar",
      "Untuk menukarkan corak terancang menjadi corak bebas",
      "Untuk mengurangkan ketebalan garisan oil pastel",
      "Untuk menimbulkan kesan kontra terhadap motif lemon"
    ],
    "correctIndex": 3,
    "explanation": "Sapuan warna tertier biru kehijauan pada bahagian latar menimbulkan kesan kontra yang menyerlahkan motif buah lemon berwarna kuning dan daun hijau.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_07",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Apakah dua bidang seni visual yang digabungkan dalam penghasilan projek Dompet Lemon Kesayanganku?",
    "options": [
      "Membuat corak dan rekaan dengan membentuk dan membuat binaan",
      "Menggambar dengan mengenal kraf tradisional",
      "Menggambar dengan membuat corak dan rekaan",
      "Membentuk dan membuat binaan dengan mengenal kraf tradisional"
    ],
    "correctIndex": 0,
    "explanation": "Penghasilan corak resis merupakan bidang membuat corak dan rekaan, manakala pembentukan dompet daripada kad busa ialah bidang membentuk dan membuat binaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_psv_u6_s2_08",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Bagaimanakah susunan motif lemon dan pemilihan warna dalam Dompet Lemon Kesayanganku dapat memperlihatkan prinsip kesatuan?",
    "options": [
      "Motif dilukis dengan saiz yang tidak menentu tanpa garisan",
      "Susunan motif secara berselang-seli dan warna kontra menonjolkan kesatuan tema",
      "Semua bahagian diwarnakan dengan satu warna primer sahaja",
      "Motif dilipat dan digunting secara rawak pada kad busa"
    ],
    "correctIndex": 1,
    "explanation": "Susunan motif lemon secara berselang-seli bersama penggunaan warna yang kontra memperlihatkan kesan kesatuan dari segi tema pada keseluruhan karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_09",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Ketika menyapu pewarna makanan pada corak resis motif buah lemon, Amir mendapati warna kuning buah lemon dan warna biru kehijauan latar bercampur di beberapa tempat. Apakah punca paling munasabah bagi masalah tersebut?",
    "options": [
      "Amir menggunakan kad busa yang terlalu nipis untuk melipat dompet",
      "Amir menyusun motif lemon secara berselang-seli pada kertas lukisan",
      "Garisan oil pastel pada sempadan motif tidak ditekan dengan rata dan bersambung",
      "Pewarna makanan hanya sesuai digunakan bersama cat minyak dan bukan oil pastel"
    ],
    "correctIndex": 2,
    "explanation": "Dalam teknik resis, garisan oil pastel mesti dilukis dengan kemas dan bersambung untuk menghalang pewarna makanan daripada meresap dan bercampur antara ruang motif dengan latar.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_psv_u6_s2_10",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Jika seorang murid ingin membina sendiri dompet gabungan bidang seperti Dompet Lemon Kesayanganku tetapi kehabisan gam biasa, bahan perekat manakah dalam senarai alat dan bahan projek yang perlu digunakan untuk melekatkan corak dan membentuk poket pada kad busa?",
    "options": [
      "Oil pastel dan berus",
      "Palet dan pewarna makanan",
      "Pengokot dan tali rafia",
      "Pita pelekat dua muka"
    ],
    "correctIndex": 3,
    "explanation": "Berdasarkan alat dan bahan projek, pita pelekat dua muka digunakan untuk menampal hasil karya pada kad busa serta melekatkan bahagian poket dompet.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_psv_u7_s1_01",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Apakah maksud corak tidak terancang dalam bidang membuat corak dan rekaan?",
    "options": [
      "Corak yang dihasilkan secara bebas tanpa motif tertentu dan terjadi tanpa dirancang",
      "Corak yang dihasilkan mengikut grid geometri yang diukur dengan pembaris",
      "Corak yang menggunakan susunan sisik ikan dan cerminan secara berulang",
      "Corak yang ditekap menggunakan blok stensil secara berurutan"
    ],
    "correctIndex": 0,
    "explanation": "Corak tidak terancang dihasilkan secara bebas tanpa mempunyai motif tertentu dan kesannya terjadi secara tidak dirancang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_psv_u7_s1_02",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Antara berikut, teknik manakah yang tergolong dalam penghasilan corak tidak terancang?",
    "options": [
      "Stensilan, kolaj dan lukisan",
      "Titisan, tiupan, serta ikatan dan celupan",
      "Susunan dam dan susunan ogee",
      "Ukiran timbul dan tebuk tembus"
    ],
    "correctIndex": 1,
    "explanation": "Teknik corak tidak terancang merangkumi titisan, tiupan, ikatan dan celupan, renjisan dan percikan, lipatan dan guntingan serta pualaman.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_psv_u7_s1_03",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Gabungan warna merah, kuning dan jingga pada corak pualaman tergolong dalam kumpulan suhu warna apa?",
    "options": [
      "Warna sejuk",
      "Warna neutral",
      "Warna panas",
      "Warna tertier"
    ],
    "correctIndex": 2,
    "explanation": "Warna merah, jingga dan kuning tergolong dalam kumpulan warna panas yang sering dikaitkan dengan luahan emosi yang bertenaga.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_psv_u7_s1_04",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Apakah jenis jalinan yang ditunjukkan oleh corak pualaman serta kesan ikatan dan celupan pada permukaan karya?",
    "options": [
      "Jalinan sentuh",
      "Jalinan timbul",
      "Jalinan konkrit",
      "Jalinan tampak"
    ],
    "correctIndex": 3,
    "explanation": "Corak pualaman serta kesan ikatan dan celupan hanya dapat dilihat dengan mata pada permukaan yang rata, maka ia menampilkan unsur jalinan tampak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 56-57"
  },
  {
    "id": "d6_psv_u7_s1_05",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Bagaimanakah aktiviti ikatan dan celupan dijalankan untuk menghasilkan corak pada kain?",
    "options": [
      "Kain diikat atau disimpul terlebih dahulu, kemudian dicelup ke dalam bancuhan pewarna fabrik",
      "Kain dilukis dengan oil pastel sebelum disapu cat minyak secara rata",
      "Kain digunting menjadi kepingan kecil dan ditampal di atas kad busa",
      "Kain ditiup menggunakan penyedut minuman selepas dititiskan cat air"
    ],
    "correctIndex": 0,
    "explanation": "Ikatan dan celupan ialah aktiviti mengikat atau menyimpul kain sebelum mencelupkannya ke dalam bancuhan pewarna fabrik untuk menghasilkan corak berbeza.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_psv_u7_s1_06",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Dalam penghasilan beg simpanan alat digital menggunakan teknik ikatan dan celupan, bagaimanakah kesan harmoni diwujudkan?",
    "options": [
      "Melalui penggunaan warna panas sahaja tanpa ikatan",
      "Melalui pengulangan warna yang terhasil daripada celupan",
      "Melalui cantuman kepingan kertas krep pada bahagian tepi",
      "Melalui ukiran motif bunga pada permukaan kain kapas"
    ],
    "correctIndex": 1,
    "explanation": "Pengulangan warna yang terhasil daripada proses ikatan dan celupan menimbulkan kesan harmoni, manakala warna kontra memberikan daya tarikan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_psv_u7_s1_07",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Antara kesan corak ikatan dan celupan berikut, kesan manakah yang mewujudkan penegasan dan tumpuan pada bahagian tengah kain?",
    "options": [
      "Kesan corak melintang",
      "Kesan corak bersegi",
      "Kesan corak berpancar",
      "Kesan corak berpusar"
    ],
    "correctIndex": 2,
    "explanation": "Kesan corak berpancar mewujudkan penegasan dan tumpuan pada bahagian tengah, manakala corak berpusar mewujudkan ritma dan pergerakan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 59"
  },
  {
    "id": "d6_psv_u7_s1_08",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Apakah perbezaan kesan bahasa seni visual antara corak ikatan dan celupan bersegi dengan corak melintang?",
    "options": [
      "Corak bersegi menghasilkan warna selari, manakala corak melintang menghasilkan ritma dan pergerakan",
      "Corak bersegi menghasilkan jalinan sentuh, manakala corak melintang menghasilkan jalinan tampak",
      "Corak bersegi menghasilkan tumpuan di tengah, manakala corak melintang menghasilkan ruang ilusi",
      "Corak bersegi menghasilkan pecahan warna yang seimbang, manakala corak melintang menghasilkan kesan warna yang selari"
    ],
    "correctIndex": 3,
    "explanation": "Kesan corak bersegi menghasilkan pecahan warna yang seimbang, manakala kesan corak melintang menghasilkan kesan warna yang selari.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 59"
  },
  {
    "id": "d6_psv_u7_s1_09",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Nadia ingin menghasilkan corak ikatan dan celupan yang menampakkan pergerakan memutar serta aliran warna yang berirama pada kain kapasnya. Kesan corak manakah yang paling sesuai dipilih?",
    "options": [
      "Kesan corak berpusar",
      "Kesan corak melintang",
      "Kesan corak bersegi",
      "Kesan corak dam"
    ],
    "correctIndex": 0,
    "explanation": "Kesan corak berpusar melalui teknik ikatan dan celupan secara khusus mewujudkan kesan ritma dan pergerakan pada hasil karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 59"
  },
  {
    "id": "d6_psv_u7_s1_10",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Seorang murid berkata bahawa teknik ikatan dan celupan ialah corak terancang kerana kain perlu dilipat terlebih dahulu sebelum diikat. Mengapakah pernyataan tersebut tidak tepat?",
    "options": [
      "Kerana teknik ikatan dan celupan menggunakan cat minyak seperti teknik pualaman",
      "Kerana corak terhasil daripada serapan pewarna secara bebas tanpa motif tetap yang dirancang",
      "Kerana teknik ikatan dan celupan hanya boleh dilakukan pada kertas tisu dan bukan kain",
      "Kerana setiap lipatan kain menghasilkan jalinan sentuh yang seragam di seluruh permukaan"
    ],
    "correctIndex": 1,
    "explanation": "Walaupun kain dilipat dan diikat, resapan pewarna fabrik ke dalam lipatan kain berlaku secara bebas dan tidak menentu tanpa motif tertentu, menjadikannya corak tidak terancang.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 56-57"
  },
  {
    "id": "d6_psv_u7_s2_01",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah sesuai diteroka dalam aktiviti ikatan dan celupan?",
    "options": [
      "Kad gelugur dan kad busa",
      "Kepingan aluminium dan plastik keras",
      "Kain kapas tebal, kertas tisu dan kertas kain serba guna",
      "Kulit kayu dan dawai hiasan"
    ],
    "correctIndex": 2,
    "explanation": "Bahan yang sesuai untuk aktiviti ikatan dan celupan kerana sifatnya yang menyerap warna ialah kain kapas tebal, kain kapas nipis, kertas kain serba guna dan kertas tisu.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 58"
  },
  {
    "id": "d6_psv_u7_s2_02",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Media pewarna manakah yang boleh digunakan untuk menghasilkan corak ikatan dan celupan selain pewarna batik?",
    "options": [
      "Oil pastel dan krayon",
      "Pensel warna dan arang",
      "Cat minyak dan gam kuat",
      "Pewarna dakwat, pewarna makanan dan cat air"
    ],
    "correctIndex": 3,
    "explanation": "Dalam penerokaan media ikatan dan celupan, murid boleh menggunakan pewarna dakwat, pewarna makanan, pewarna batik dan cat air.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 58"
  },
  {
    "id": "d6_psv_u7_s2_03",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Dalam penghasilan Sarung Botol Idamanku, bahan apakah yang digunakan untuk mengikat kain yang telah dilipat dan digulung?",
    "options": [
      "Tali rafia",
      "Dawai hiasan",
      "Pita velkro",
      "Reben satin"
    ],
    "correctIndex": 0,
    "explanation": "Kain yang telah dilipat menjadi rupa segi tiga dan digulung ke bawah diikat menggunakan tali rafia dengan ketat dan kemas sebelum dicelup.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_psv_u7_s2_04",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Apakah tujuan mencelup kain sepenuhnya ke dalam bancuhan pewarna makanan semasa membuat Sarung Botol Idamanku?",
    "options": [
      "Supaya tali rafia mudah terputus dengan sendiri",
      "Supaya hasil karya mempunyai kesan warna yang sekata dan menarik",
      "Supaya kain felt di bahagian dalam tidak perlu digam",
      "Supaya kain menjadi keras dan tidak boleh dilipat"
    ],
    "correctIndex": 1,
    "explanation": "Mencelup kain sepenuhnya ke dalam pewarna memastikan bahagian yang terdedah mendapat kesan warna yang sekata dan menarik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_psv_u7_s2_05",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Alat apakah yang digunakan untuk mencantumkan bahagian kanan dan kiri sarung botol serta menguatkan cantuman antara kain dengan reben?",
    "options": [
      "Pengokot",
      "Gunting",
      "Pistol perekat panas",
      "Pita pelekat kertas"
    ],
    "correctIndex": 2,
    "explanation": "Pistol perekat panas digunakan untuk mencantumkan bahagian kiri dan kanan kain serta menguatkan cantuman reben sebagai tali sarung botol.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_psv_u7_s2_06",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Apakah kombinasi warna pewarna makanan yang dicadangkan dalam projek Sarung Botol Idamanku untuk mendapatkan kesan kontra?",
    "options": [
      "Biru muda, biru tua dan ungu",
      "Hitam, kelabu dan putih",
      "Coklat, kuning air dan jingga pucat",
      "Kuning, hijau dan merah"
    ],
    "correctIndex": 3,
    "explanation": "Kain dicelup ke dalam pewarna makanan berwarna kuning, hijau dan merah untuk menghasilkan kesan kontra yang menarik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_psv_u7_s2_07",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Apakah urutan langkah yang betul selepas kain sarung botol dicelup dengan pewarna makanan sehingga siap ditampal pada kain felt?",
    "options": [
      "Keringkan kain, buka tali ikatan, kemudian tampal pada kain felt dengan pita pelekat dua muka",
      "Buka tali ikatan semasa kain basah, gosok dengan seterika, kemudian tampal dengan pistol perekat panas",
      "Tampal kain bersama tali ikatan pada kain felt, kemudian baru buka ikatannya",
      "Celup kain felt ke dalam pewarna, kemudian balut pada botol plastik"
    ],
    "correctIndex": 0,
    "explanation": "Selepas dicelup, kain perlu dikeringkan dan dibuka tali ikatannya terlebih dahulu sebelum ditampalkan pada kain felt menggunakan pita pelekat dua muka.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_psv_u7_s2_08",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Selain sarung botol minuman, karya ikatan dan celupan juga boleh digabungkan dengan bidang membentuk dan membuat binaan untuk menghasilkan objek seperti apa?",
    "options": [
      "Lukisan pemandangan",
      "Penanda buku",
      "Cap jari atas kanvas",
      "Ukiran kayu tebuk"
    ],
    "correctIndex": 1,
    "explanation": "Hasil karya ikatan dan celupan boleh digabungkan dengan bidang membentuk dan membuat binaan untuk menghasilkan barangan berfungsi seperti penanda buku dan sarung botol.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 59, 61"
  },
  {
    "id": "d6_psv_u7_s2_09",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Selepas membuka ikatan tali rafia pada kain kapasnya, Faris mendapati hampir keseluruhan kain berwarna kuning tanpa corak putih atau garisan sempadan yang jelas. Apakah kesilapan yang mungkin dilakukan oleh Faris?",
    "options": [
      "Faris menggunakan kain kapas yang menyerap air dengan baik",
      "Faris menggunakan tiga jenis warna yang berbeza semasa mencelup",
      "Faris mengikat tali rafia dengan longgar sehingga pewarna meresap ke bahagian berikat",
      "Faris mengeringkan kain di bawah cahaya matahari sebelum membuka ikatan"
    ],
    "correctIndex": 2,
    "explanation": "Ikatan tali rafia mesti ketat dan kemas untuk menghalang pewarna daripada meresap masuk ke bahagian yang diikat. Ikatan yang longgar menyebabkan warna meresap ke seluruh kain.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_psv_u7_s2_10",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Mengapakah penggunaan pistol perekat panas lebih digalakkan berbanding pita pelekat dua muka ketika memasang reben sebagai tali pada Sarung Botol Idamanku?",
    "options": [
      "Kerana pistol perekat panas dapat menghasilkan corak berpusar pada reben",
      "Kerana pita pelekat dua muka hanya boleh digunakan pada kertas tisu",
      "Kerana pistol perekat panas dapat menukarkan warna kain felt menjadi lebih cerah",
      "Kerana pistol perekat panas menguatkan cantuman antara kain dengan reben supaya tidak mudah tercabut"
    ],
    "correctIndex": 3,
    "explanation": "Pistol perekat panas bertujuan untuk menguatkan cantuman antara kain dengan reben agar tali sarung botol kukuh apabila menampung berat botol minuman, dengan syarat murid berhati-hati menggunakannya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_psv_u8_s1_01",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh alat perhiasan diri dalam seni kraf tradisional masyarakat tempatan?",
    "options": [
      "Loket, pending, dokoh dan cucuk sanggul",
      "Pasu pualaman, sarung botol dan dompet",
      "Bakul sampah mini, tabung dan beg kertas",
      "Buku atur cara, poster dan kain rentang"
    ],
    "correctIndex": 0,
    "explanation": "Koleksi alat perhiasan diri kraf tradisional merangkumi loket, pending, cucuk sanggul, gelang tangan, gelang kaki, dokoh dan tanjak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 62-66"
  },
  {
    "id": "d6_psv_u8_s1_02",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah bahan utama yang biasa digunakan untuk membuat loket dan pending tradisional?",
    "options": [
      "Kertas krep dan kad busa",
      "Emas atau perak serta batu permata",
      "Tali rafia dan kain kapas",
      "Plastik dan pita pelekat dua muka"
    ],
    "correctIndex": 1,
    "explanation": "Loket ialah hiasan di rantai leher yang diperbuat daripada emas atau perak serta batu permata, manakala pending juga diperbuat daripada emas atau perak dengan pintalan tali emas dan batu permata.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 62-63"
  },
  {
    "id": "d6_psv_u8_s1_03",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Pada bahagian tubuh manakah perhiasan pending dipakai dalam pakaian tradisional Melayu?",
    "options": [
      "Pada sanggul rambut",
      "Pada pergelangan kaki",
      "Pada bahagian bawah dada dan pinggang",
      "Pada bahagian kepala sebagai penutup"
    ],
    "correctIndex": 2,
    "explanation": "Pending ialah perhiasan pada bahagian bawah dada dan pinggang yang digunakan oleh kaum lelaki untuk mengikat kain atau samping.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 63"
  },
  {
    "id": "d6_psv_u8_s1_04",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah nama lain bagi tanjak yang digunakan sebagai penutup kepala dalam pakaian masyarakat Melayu?",
    "options": [
      "Dokoh atau loket",
      "Pending atau kerongsang",
      "Sanggul atau cekak",
      "Destar atau tengkolok"
    ],
    "correctIndex": 3,
    "explanation": "Tanjak ialah kain yang diikat untuk menutup kepala sebagai pelengkap pakaian masyarakat Melayu dan turut dikenali dengan nama destar atau tengkolok.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 66"
  },
  {
    "id": "d6_psv_u8_s1_05",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Selain sebagai perhiasan diri, apakah fungsi cucuk sanggul bagi wanita pada zaman dahulu?",
    "options": [
      "Sebagai senjata untuk melindungi diri",
      "Sebagai pengikat kain atau samping",
      "Sebagai penanda buku bacaan",
      "Sebagai alat mengukur saiz kepala"
    ],
    "correctIndex": 0,
    "explanation": "Pada zaman dahulu, wanita memakai cucuk sanggul sebagai perhiasan diri dan juga sebagai senjata untuk melindungi diri.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 64"
  },
  {
    "id": "d6_psv_u8_s1_06",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Pada loket tradisional, bagaimanakah prinsip penegasan diwujudkan?",
    "options": [
      "Melalui penggunaan rantai leher yang panjang",
      "Melalui saiz motif bunga yang besar di bahagian tengah loket",
      "Melalui bentuk loket yang rata tanpa sebarang ukiran",
      "Melalui warna latar yang sama dengan warna baju"
    ],
    "correctIndex": 1,
    "explanation": "Penegasan pada loket wujud melalui saiz motif bunga yang besar di bahagian tengah yang menjadi fokus utama keseluruhan loket.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 62"
  },
  {
    "id": "d6_psv_u8_s1_07",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Apakah jenis teknik ukiran pada loket yang menimbulkan jalinan sentuh dan memberikan nilai estetik?",
    "options": [
      "Ukiran pualaman",
      "Ukiran lipatan dan guntingan",
      "Ukiran tebuk tembus",
      "Ukiran resis minyak"
    ],
    "correctIndex": 2,
    "explanation": "Loket diukir secara tebuk tembus yang menimbulkan jalinan sentuh serta memberikan nilai estetik pada karya tersebut.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 62"
  },
  {
    "id": "d6_psv_u8_s1_08",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Apakah peranan imbangan simetri pada rekaan pending yang berbentuk lancip?",
    "options": [
      "Mewujudkan kesan pergerakan berpusar di sekeliling pinggang",
      "Menjadikan permukaan pending licin tanpa jalinan sentuh",
      "Menghasilkan corak tidak terancang yang bebas pada kerawang",
      "Memberikan keteguhan yang sama di bahagian kiri dan kanan"
    ],
    "correctIndex": 3,
    "explanation": "Imbangan simetri pada rekaan pending memberikan keteguhan dan keseimbangan rupa yang sama di bahagian kiri dan kanan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 63"
  },
  {
    "id": "d6_psv_u8_s1_09",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Dalam mencerakinkan bahasa seni visual pada pending, mengapakah pending dikatakan mempunyai bentuk konkrit?",
    "options": [
      "Kerana pending bersifat tiga dimensi, dapat disentuh dan dilihat dari pelbagai arah",
      "Kerana pending hanya dilukis secara rata di atas kertas lukisan dua dimensi",
      "Kerana pending diperbuat daripada bancuhan simen dan batu kerikil",
      "Kerana pending mempunyai warna panas dan sejuk yang berulang"
    ],
    "correctIndex": 0,
    "explanation": "Bentuk konkrit merujuk kepada objek bersifat tiga dimensi yang dapat disentuh secara fizikal dan dilihat dari pelbagai arah, seperti pending yang berukiran timbul.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 63"
  },
  {
    "id": "d6_psv_u8_s1_10",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Antara ciri berikut, manakah yang menunjukkan persamaan peranan antara pending dan cucuk sanggul dalam masyarakat Melayu tradisional?",
    "options": [
      "Kedua-duanya dipakai di kepala oleh kaum lelaki sebagai lambang kuasa",
      "Kedua-duanya berfungsi sebagai alat perhiasan diri dan juga alat perlindungan diri",
      "Kedua-duanya dihasilkan menggunakan teknik origami dengan kertas bunga",
      "Kedua-duanya diukir secara tebuk tembus pada kepingan kerongsang plastik"
    ],
    "correctIndex": 1,
    "explanation": "Pending berfungsi sebagai hiasan pengikat samping, lambang kuasa dan alat perlindungan diri, manakala cucuk sanggul dipakai wanita sebagai perhiasan diri dan senjata untuk melindungi diri.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 63-64"
  },
  {
    "id": "d6_psv_u8_s2_01",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Dalam penghasilan karya Cucuk Sanggul Sang Puteri, apakah hal benda yang dijadikan motif utama hiasan?",
    "options": [
      "Motif bulan dan bintang",
      "Motif sisik ikan dan dam",
      "Motif rupa bunga",
      "Motif buah lemon"
    ],
    "correctIndex": 2,
    "explanation": "Aktiviti Cucuk Sanggul Sang Puteri meneroka media dan teknik untuk menghasilkan cucuk sanggul bermotifkan rupa bunga.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 64"
  },
  {
    "id": "d6_psv_u8_s2_02",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah digunakan untuk membuat bunga dan rangka dalam projek Cucuk Sanggul Sang Puteri?",
    "options": [
      "Pewarna makanan, tali rafia dan botol plastik",
      "Oil pastel, cat air dan berus lukisan",
      "Kertas tisu, kain kapas dan pistol perekat panas",
      "Cekak rambut, kertas krep, dawai hiasan dan manik hiasan"
    ],
    "correctIndex": 3,
    "explanation": "Alat dan bahan projek Cucuk Sanggul Sang Puteri terdiri daripada cekak rambut, kertas krep, dawai hiasan, gunting, gam kuat dan manik hiasan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 65"
  },
  {
    "id": "d6_psv_u8_s2_03",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Apakah teknik yang digunakan untuk menghasilkan karya Tanjak Seri Kencana?",
    "options": [
      "Teknik origami",
      "Teknik resis",
      "Teknik capan",
      "Teknik pualaman"
    ],
    "correctIndex": 0,
    "explanation": "Tanjak Seri Kencana dihasilkan menggunakan teknik origami iaitu teknik melipat kertas atau bahan sesuai untuk membentuk tanjak.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 66"
  },
  {
    "id": "d6_psv_u8_s2_04",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Apakah bentuk hiasan yang dilakar dan digunting daripada kad busa untuk ditampal di bahagian tengah Tanjak Seri Kencana?",
    "options": [
      "Rupa daun dan cendawan",
      "Rupa bintang dan bulan",
      "Rupa separa bulatan bersisik",
      "Rupa pucuk ubi dan bunga raya"
    ],
    "correctIndex": 1,
    "explanation": "Rupa bintang dan bulan dilakarkan dan digunting pada kad busa sebelum ditampalkan di bahagian tengah tanjak bersama manik hiasan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 67"
  },
  {
    "id": "d6_psv_u8_s2_05",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Di manakah lokasi yang sesuai untuk mengadakan Pameran Seni Visual Penggal Dua yang berskala lebih besar?",
    "options": [
      "Di dalam beg sekolah masing-masing",
      "Di rumah pengkarya secara bersendirian",
      "Di kantin atau di dewan sekolah",
      "Di tempat letak kenderaan awam"
    ],
    "correctIndex": 2,
    "explanation": "Berbanding pameran berskala kecil pada penggal satu, Pameran Seni Visual Penggal Dua diadakan pada skala lebih besar seperti di kantin atau di dewan sekolah.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 46"
  },
  {
    "id": "d6_psv_u8_s2_06",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Mengapakah lilitan bunga pada cekak rambut semasa membuat Cucuk Sanggul Sang Puteri perlu dimulakan pada bahagian tengah?",
    "options": [
      "Supaya dawai hiasan dapat dipotong menjadi lebih pendek",
      "Supaya kertas krep tidak perlu digunting kepada empat bahagian",
      "Supaya gam kuat dapat kering dalam masa satu saat",
      "Supaya kedudukan bunga seimbang di sebelah kiri dan kanan"
    ],
    "correctIndex": 3,
    "explanation": "Melilitkan bunga bermula pada bahagian tengah cucuk sanggul memastikan kedudukan bunga seimbang di bahagian kiri dan kanan cekak rambut.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 65"
  },
  {
    "id": "d6_psv_u8_s2_07",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Dalam langkah menghasilkan Tanjak Seri Kencana menggunakan kertas bunga, apakah yang perlu dilakukan selepas kertas dilipat menjadi rupa segi tiga?",
    "options": [
      "Lipat bahagian bawah secara berselang-seli sebanyak empat kali dengan kemas",
      "Gunting kertas menjadi empat bahagian dan lilit pada dawai hiasan",
      "Celupkan kertas ke dalam pewarna makanan selama lima minit",
      "Tampal kertas terus ke atas kad gelugur menggunakan pita velkro"
    ],
    "correctIndex": 0,
    "explanation": "Selepas kertas bunga dilipat kepada rupa segi tiga, bahagian bawahnya dilipat secara berselang-seli sebanyak empat kali sebelum hujungnya dicantumkan dengan pengokot mengikut saiz kepala.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 67"
  },
  {
    "id": "d6_psv_u8_s2_08",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Antara maklumat berikut, yang manakah wajib ditulis pada label kapsyen hasil karya yang dipamerkan semasa Pameran Seni Visual Penggal Dua?",
    "options": [
      "Nombor telefon ibu bapa dan alamat rumah",
      "Nama pengkarya, tajuk karya, media, saiz karya, tahun dan harga",
      "Senarai nama semua ahli jawatankuasa kebersihan sekolah",
      "Jumlah markah ujian bertulis mata pelajaran lain"
    ],
    "correctIndex": 1,
    "explanation": "Kapsyen pada hasil karya pameran mesti menyertakan nama pengkarya, tajuk karya, media, saiz karya, tahun dan harga karya untuk jualan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 47"
  },
  {
    "id": "d6_psv_u8_s2_09",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Semasa Pameran Seni Visual Penggal Dua berlangsung, seorang pengunjung memuji hasil tanjak kamu dan bertanya tentang keistimewaannya. Apakah tindakan apresiasi seni visual yang paling tepat?",
    "options": [
      "Menyuruh pengunjung membaca buku teks sendiri tanpa bercakap",
      "Menyimpan karya tersebut ke dalam kotak penyimpanan dengan segera",
      "Bercerita tentang karya sendiri, menerangkan harga jika ingin dibeli dan menerima ulasan secara bertatasusila",
      "Menilai kelemahan karya rakan lain secara lantang di hadapan pengunjung"
    ],
    "correctIndex": 2,
    "explanation": "Semasa pameran, murid perlu bercerita tentang karya sendiri kepada pengunjung, memberi pandangan secara bertatasusila, bersedia mendengar ulasan dan menerangkan harga jika ada pengunjung berminat membeli.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 48"
  },
  {
    "id": "d6_psv_u8_s2_10",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Selepas Pameran Seni Visual Penggal Dua berakhir, jawatankuasa murid perlu melaksanakan beberapa tindakan penutup. Antara berikut, tindakan manakah yang BUKAN sebahagian daripada tugas selepas pameran?",
    "options": [
      "Membersihkan tempat pameran dan melabel kotak penyimpanan hasil karya",
      "Membincangkan kelebihan, kelemahan dan penambahbaikan pameran bersama ahli jawatankuasa",
      "Mengumpulkan hasil jualan karya untuk disumbangkan kepada kelab sekolah",
      "Memuat naik video promosi jemputan pameran dan melantik ahli jawatankuasa baharu untuk pameran yang baru tamat"
    ],
    "correctIndex": 3,
    "explanation": "Pelantikan jawatankuasa dan promosi video pendek dilakukan sebelum pameran, manakala selepas pameran murid perlu membersihkan tempat, memberi sijil penghargaan, berbincang penambahbaikan, melabel kotak penyimpanan dan menyumbangkan hasil jualan kepada kelab sekolah.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 46-47, 49"
  },
  {
    "id": "d6_psv_u9_s1_01",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Karya model Wau Bulan Sirih Pinang menggabungkan bidang mengenal kraf tradisional dengan bidang",
    "options": [
      "membuat corak dan rekaan",
      "menggambar secara digital",
      "membentuk dan membuat binaan",
      "seni cetakan timbul"
    ],
    "correctIndex": 0,
    "explanation": "Model wau bulan sirih pinang merupakan karya gabungan antara bidang mengenal kraf tradisional dengan bidang membuat corak dan rekaan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 68"
  },
  {
    "id": "d6_psv_u9_s1_02",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Dalam projek Unit 9, murid menghasilkan model 'Wau Bulan Sirih Pinang' yang mempunyai struktur berangka. Apakah bentuk reka bentuk dan fungsi produk tersebut?",
    "options": [
      "Dua Dimensi (2D) dan alas meja",
      "Tiga Dimensi (3D) dan permainan",
      "Dua Dimensi (2D) dan penanda buku",
      "Tiga Dimensi (3D) dan bekas penyimpanan"
    ],
    "correctIndex": 1,
    "explanation": "Produk Wau Bulan Sirih Pinang mempunyai reka bentuk Tiga Dimensi (3D) dan berfungsi sebagai permainan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 68"
  },
  {
    "id": "d6_psv_u9_s1_03",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Dalam penghasilan lakaran perkembangan idea wau bulan, media kering manakah yang digunakan melalui teknik lukisan?",
    "options": [
      "Cat air, cat poster dan berus",
      "Pewarna batik, bekas air dan palet",
      "Pensel, pen dan pen penanda",
      "Krayon, gam PVA dan kertas krep"
    ],
    "correctIndex": 2,
    "explanation": "Lakaran perkembangan idea boleh dihasilkan menggunakan media kering seperti pensel, pen dan pen penanda melalui teknik lukisan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 69"
  },
  {
    "id": "d6_psv_u9_s1_04",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Hal benda yang dipilih untuk motif utama pada model wau bulan dalam Unit 9 bertemakan flora, iaitu",
    "options": [
      "daun bunga seri pagi",
      "daun betik",
      "daun keladi",
      "daun sirih"
    ],
    "correctIndex": 3,
    "explanation": "Walaupun daun bunga seri pagi, daun betik dan daun keladi turut disenaraikan sebagai contoh flora, hal benda yang dipilih ialah daun sirih.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 68"
  },
  {
    "id": "d6_psv_u9_s1_05",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan enam bahagian utama pada rangka wau bulan?",
    "options": [
      "Kepala, leher, sayap, pinggang, bulan penuh dan bilah ekor",
      "Kepala, bahu, sayap, badan, bulan sabit dan kaki",
      "Puncak, leher, lengan, pinggang, bulatan dan rambu",
      "Hulu, leher, kepak, bingkai, bulan penuh dan tangkai"
    ],
    "correctIndex": 0,
    "explanation": "Bahagian-bahagian rangka wau bulan terdiri daripada kepala, leher, sayap, pinggang, bulan penuh dan bilah ekor.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_psv_u9_s1_06",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Mengapakah corak susunan cerminan sering digunakan dalam menghias permukaan wau bulan?",
    "options": [
      "Untuk mengurangkan bilangan bahan yang diperlukan",
      "Untuk mewujudkan imbangan simetri pada keseluruhan karya",
      "Untuk menjadikan permukaan wau bulan lebih nipis",
      "Untuk menggantikan penggunaan templat rupa wau bulan"
    ],
    "correctIndex": 1,
    "explanation": "Corak susunan cerminan sering digunakan bagi mewujudkan imbangan simetri pada keseluruhan hasil karya wau bulan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_psv_u9_s1_07",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Apakah ciri bahan yang amat dititikberatkan semasa membuat penentuan media dan bahan bagi model wau bulan?",
    "options": [
      "Bahan yang berat dan kalis air",
      "Bahan yang lut sinar dan berkilat",
      "Bahan yang mudah lentur dan mudah dipotong",
      "Bahan yang bertekstur kasar dan sukar dilipat"
    ],
    "correctIndex": 2,
    "explanation": "Pemilihan bahan yang sesuai seperti bahan mudah lentur dan mudah dipotong amat dititikberatkan supaya wau bulan dapat dihasilkan dengan lebih tepat dan kemas.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 71"
  },
  {
    "id": "d6_psv_u9_s1_08",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Dalam glosari Pendidikan Seni Visual, apakah maksud istilah 'olahan idea'?",
    "options": [
      "Susunan reka letak bahan untuk membentuk satu rekaan",
      "Garis lurus yang membahagikan suatu bentuk kepada dua bahagian",
      "Lakaran yang dihasilkan menggunakan bantuan komputer",
      "Perkembangan dan eksplorasi daripada buah fikiran untuk menghasilkan karya terbaik"
    ],
    "correctIndex": 3,
    "explanation": "Olahan idea bermaksud sesuatu perkembangan dan eksplorasi daripada buah fikiran manusia untuk menghasilkan karya yang terbaik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 90 (Glosari)"
  },
  {
    "id": "d6_psv_u9_s1_09",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Seorang murid ingin memastikan motif daun sirih yang dilakarkan pada bahagian sayap dan bilah ekor kelihatan seragam dan terancang. Langkah perkembangan idea manakah yang perlu dilakukan sebelum menentukan media?",
    "options": [
      "Membuat lakaran idea motif, reka letak corak dan kajian warna",
      "Terus memotong kadbod menggunakan gunting tanpa templat",
      "Menampal manik hiasan pada kad busa sebelum melukis motif",
      "Mengokot kertas krep pada bahagian kepala dan sayap wau"
    ],
    "correctIndex": 0,
    "explanation": "Sebelum penentuan media dan bahan, murid perlu membuat lakaran idea motif pada sayap dan bilah ekor, lakaran idea reka letak corak serta kajian warna.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 70-71"
  },
  {
    "id": "d6_psv_u9_s1_10",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Mengapakah paksi penting dalam penghasilan corak susunan cerminan pada rangka wau bulan?",
    "options": [
      "Paksi berfungsi sebagai pemegang wau bulan semasa bermain",
      "Paksi membahagikan bentuk kepada dua bahagian yang sama saiz dan seimbang",
      "Paksi menentukan jenis warna panas atau warna sejuk pada kajian warna",
      "Paksi menghalang kertas krep daripada terkoyak semasa persembahan"
    ],
    "correctIndex": 1,
    "explanation": "Menurut glosari, paksi ialah satu garis lurus yang membahagikan suatu bentuk atau rajah kepada dua bahagian yang sama saiz dan seimbang, sekali gus membantu menghasilkan susunan cerminan yang simetri.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 70, 90 (Glosari)"
  },
  {
    "id": "d6_psv_u9_s2_01",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah teknik dan proses utama yang digunakan untuk menghasilkan model Wau Bulan Sirih Pinang?",
    "options": [
      "Tiupan, renjisan dan percikan",
      "Ukiran timbul dan tenunan",
      "Kolaj, gunting dan tampal",
      "Batik canting dan celupan"
    ],
    "correctIndex": 2,
    "explanation": "Teknik dan proses yang digunakan untuk menghasilkan model Wau Bulan Sirih Pinang ialah kolaj, gunting dan tampal.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 68"
  },
  {
    "id": "d6_psv_u9_s2_02",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Bahan manakah yang digunakan untuk membentuk lapisan asas atau rangka utama wau bulan menggunakan templat?",
    "options": [
      "Kertas krep",
      "Batang aiskrim",
      "Dawai bulu warna",
      "Kadbod"
    ],
    "correctIndex": 3,
    "explanation": "Langkah pertama penghasilan karya ialah melakarkan rupa wau bulan menggunakan templat pada kadbod dan mengguntingnya dengan teliti.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 72"
  },
  {
    "id": "d6_psv_u9_s2_03",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Mengapakah kain felt tebal dilipat dua sebelum digunting mengikut templat rupa wau bulan?",
    "options": [
      "Untuk mendapatkan bukaan yang sama pada kedua-dua belah",
      "Untuk menjimatkan penggunaan gam kuat semasa menampal",
      "Untuk menjadikan kain felt lebih nipis dan lut sinar",
      "Untuk memudahkan pemasangan batang aiskrim pada kepala wau"
    ],
    "correctIndex": 0,
    "explanation": "Kain felt tebal dilipat dua supaya mendapat bukaan yang sama saiz dan seimbang antara bahagian kiri dengan kanan wau bulan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 72"
  },
  {
    "id": "d6_psv_u9_s2_04",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah fungsi batang aiskrim yang dicantumkan pada bahagian bawah wau bulan?",
    "options": [
      "Sebagai pemberat pada bahagian ekor",
      "Sebagai pemegang semasa bermain",
      "Sebagai pengikat rambu kertas krep",
      "Sebagai bingkai untuk gambar karya"
    ],
    "correctIndex": 1,
    "explanation": "Batang aiskrim dicantumkan pada bahagian bawah wau bulan untuk dijadikan pemegang semasa bermain.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 74"
  },
  {
    "id": "d6_psv_u9_s2_05",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Alat apakah yang digunakan untuk mencantumkan rambu wau pada bahagian kiri dan kanan kadbod wau bulan?",
    "options": [
      "Penebuk kertas",
      "Pemidang kayu",
      "Pengokot",
      "Canting"
    ],
    "correctIndex": 2,
    "explanation": "Rambu wau dicantumkan pada kadbod wau bulan menggunakan pengokot pada bahagian kiri dan kanan.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 73-74"
  },
  {
    "id": "d6_psv_u9_s2_06",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Bagaimanakah kesan kontra diwujudkan pada kemasan rambu wau bulan menggunakan kertas krep?",
    "options": [
      "Menggunting kertas krep menjadi bentuk bulat kecil",
      "Menggunakan satu warna kertas krep yang sama dengan warna kadbod",
      "Melipat kertas krep secara menegak tanpa mengguntingnya",
      "Menggunting kertas krep secara selari dan mencantumkan tiga jenis warna"
    ],
    "correctIndex": 3,
    "explanation": "Kertas krep digunting secara selari untuk dijadikan rambu wau, kemudian tiga jenis warna dicantumkan untuk mewujudkan kesan kontra pada kemasan karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 73"
  },
  {
    "id": "d6_psv_u9_s2_07",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Penggunaan bahan seperti kad busa, dawai bulu warna, manik hiasan dan kertas krep pada model wau bulan dapat menimbulkan unsur seni",
    "options": [
      "jalinan sentuh",
      "bentuk ilusi",
      "ruang ilusi",
      "perspektif"
    ],
    "correctIndex": 0,
    "explanation": "Penggunaan pelbagai bahan yang boleh dirasa permukaannya seperti kad busa, dawai bulu warna, manik hiasan dan kertas krep mewujudkan jalinan sentuh yang memberi tarikan pada karya.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 73, 75"
  },
  {
    "id": "d6_psv_u9_s2_08",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Mengapakah kain felt yang telah dihiasi motif corak cerminan ditampalkan pada kadbod wau bulan?",
    "options": [
      "Untuk memudahkan kertas krep ditanggalkan semula",
      "Untuk membuatkan struktur dan bentuk wau bulan lebih kukuh",
      "Untuk menutup kesan garisan pensel pada kad busa",
      "Untuk mengurangkan berat keseluruhan model wau bulan"
    ],
    "correctIndex": 1,
    "explanation": "Cantuman kain felt yang telah dihiasi pada kadbod wau bulan akan membuatkan struktur dan bentuk wau bulan menjadi lebih kukuh.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 74"
  },
  {
    "id": "d6_psv_u9_s2_09",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Sekiranya model wau bulan hendak digunakan dalam persembahan tarian, apakah sifat kertas yang paling sesuai dipilih untuk membuat rambu pada bahagian kemasannya?",
    "options": [
      "Kertas yang sangat nipis dan mudah koyak supaya ringan",
      "Kertas yang mudah menyerap air supaya warna lebih terang",
      "Kertas yang bersifat tahan lasak supaya tidak mudah koyak semasa digunakan",
      "Kertas yang terlalu tebal dan keras supaya tidak bergerak langsung"
    ],
    "correctIndex": 2,
    "explanation": "Tip buku teks menasihatkan agar memilih kertas yang bersifat tahan lasak untuk membuat rambu supaya kertas tidak mudah koyak semasa wau bulan dimainkan atau digunakan dalam persembahan tarian.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 74"
  },
  {
    "id": "d6_psv_u9_s2_10",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Selepas model wau bulan siap dihasilkan, murid diminta melukis semula wau bulan tersebut pada kertas lukisan dan membingkaikannya dengan potongan kadbod. Apakah tujuan utama aktiviti ini dilakukan?",
    "options": [
      "Untuk menggantikan model wau bulan yang telah rosak",
      "Untuk menguji ketahanan gam kuat pada kain felt",
      "Untuk menghasilkan templat baharu bagi murid tahun hadapan",
      "Untuk penghasilan gambar karya bagi tujuan pameran dan sesi apresiasi seni"
    ],
    "correctIndex": 3,
    "explanation": "Aktiviti melukis semula hasil karya, mewarnakan dan membingkaikannya dengan potongan kadbod bertujuan menghasilkan gambar karya untuk dipamerkan serta digunakan semasa sesi apresiasi seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 75"
  },
  {
    "id": "d6_psv_u10_s1_01",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Apakah fungsi produk Beg Batik Rekaanku yang dihasilkan dalam Unit 10?",
    "options": [
      "Bekas makanan",
      "Penyimpanan alatan seni",
      "Beg pakaian sukan",
      "Fail kertas peperiksaan"
    ],
    "correctIndex": 1,
    "explanation": "Produk Beg Batik dalam Unit 10 direka bentuk dalam bentuk Tiga Dimensi (3D) dan berfungsi untuk penyimpanan alatan seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 76"
  },
  {
    "id": "d6_psv_u10_s1_02",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Hal benda bertemakan flora yang dipilih sebagai motif utama pada beg batik dalam Unit 10 ialah",
    "options": [
      "bunga orkid",
      "bunga teratai",
      "bunga raya",
      "bunga rafflesia"
    ],
    "correctIndex": 2,
    "explanation": "Hal benda yang dipilih untuk motif batik dalam Unit 10 ialah bunga raya (Hibiscus rosa-sinensis), iaitu bunga kebangsaan Malaysia.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 76"
  },
  {
    "id": "d6_psv_u10_s1_03",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Alat bermuncung yang diperbuat daripada tembaga dan digunakan untuk mengalirkan lilin panas pada permukaan kain semasa melukis corak batik ialah",
    "options": [
      "pemidang kayu",
      "pengokot",
      "penebuk",
      "canting"
    ],
    "correctIndex": 3,
    "explanation": "Canting ialah alat bermuncung yang diperbuat daripada tembaga untuk mengalirkan lilin panas pada kain semasa proses menghasilkan batik lukis.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 79, 90 (Glosari)"
  },
  {
    "id": "d6_psv_u10_s1_04",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Dalam penghasilan batik bunga raya di dalam kelas, bahan manakah yang digunakan untuk menggantikan lilin cair?",
    "options": [
      "Gam PVA bermuncung tirus",
      "Cat poster",
      "Pita pelekat dua muka",
      "Pewarna makanan"
    ],
    "correctIndex": 0,
    "explanation": "Bahan seperti krayon, oil pastel dan gam boleh menggantikan lilin cair. Dalam projek ini, gam PVA bermuncung tirus digunakan untuk melukis garisan resis batik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 79, 81"
  },
  {
    "id": "d6_psv_u10_s1_05",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Apakah jenis susunan corak motif bunga raya yang digunakan pada kain batik untuk mewujudkan kesatuan pada keseluruhan karya?",
    "options": [
      "Susunan cerminan",
      "Susunan dam",
      "Susunan sisik ikan",
      "Susunan batu-bata"
    ],
    "correctIndex": 1,
    "explanation": "Motif bunga raya yang disusun secara susunan dam dapat mewujudkan kesatuan pada keseluruhan karya batik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_psv_u10_s1_06",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Mengapakah kain kapas perlu dipotong lebih besar daripada saiz pemidang kayu bersaiz A3 sebelum diregangkan?",
    "options": [
      "Untuk membolehkan kain dilipat menjadi poket beg terus di atas pemidang",
      "Untuk mengelakkan pewarna batik daripada terkena meja kerja",
      "Untuk memudahkan proses melipat dan meregangkan kain pada pemidang kayu",
      "Untuk memastikan motif bunga raya boleh dilukis di bahagian luar pemidang"
    ],
    "correctIndex": 2,
    "explanation": "Kain kapas dipotong lebih besar daripada pemidang kayu bersaiz A3 untuk memudahkan proses melipat dan meregangkan kain menggunakan pengokot.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_psv_u10_s1_07",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Apakah kepentingan melukis garisan gam PVA secara tebal, teliti dan tidak terputus serta mengeringkannya sepenuhnya sebelum mewarna?",
    "options": [
      "Supaya kain kapas mudah ditanggalkan dari pemidang kayu",
      "Supaya warna latar dan warna motif dapat bercampur secara sekata",
      "Supaya gam PVA mudah dicuci selepas proses mewarna selesai",
      "Supaya gam dapat menolak warna dengan berkesan dan mengelakkan warna bercampur"
    ],
    "correctIndex": 3,
    "explanation": "Gam PVA mempunyai kadar kelikatan tinggi untuk menolak warna dengan berkesan, manakala garisan tebal yang tidak putus serta kering sepenuhnya memudahkan sapuan warna agar kemas dan tidak bercampur.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 81"
  },
  {
    "id": "d6_psv_u10_s1_08",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Semasa proses mewarnakan batik bunga raya, bagaimanakah cara menghasilkan ton warna pada bahagian kelopak bunga raya?",
    "options": [
      "Menitikkan warna kuning pada bahagian tengah kelopak yang berwarna merah supaya bercampur",
      "Mewarnakan kelopak dengan warna biru selepas latar kering",
      "Menyapu gam PVA di atas warna merah yang masih basah",
      "Menggunakan warna hijau kekuningan pada keseluruhan kelopak"
    ],
    "correctIndex": 0,
    "explanation": "Selepas mewarnakan kelopak dengan warna merah, warna kuning dititikkan pada bahagian tengah kelopak supaya bercampur dengan warna merah untuk menghasilkan ton warna.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 82"
  },
  {
    "id": "d6_psv_u10_s1_09",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Mengapakah murid dinasihatkan supaya mewarnakan motif bunga raya terlebih dahulu sebelum mewarnakan bahagian latar kain batik?",
    "options": [
      "Kerana pewarna biru untuk latar hanya boleh melekat selepas warna merah kering",
      "Supaya warna motif utama dapat dikawal dengan kemas tanpa dicemari oleh warna latar",
      "Kerana gam PVA akan cair jika latar diwarnakan terlebih dahulu",
      "Supaya daun bunga raya tidak perlu diwarnakan dengan warna hijau kekuningan"
    ],
    "correctIndex": 1,
    "explanation": "Mewarnakan motif bunga raya terlebih dahulu sebelum latar kain membantu memastikan warna latar tidak bercampur dengan warna motif dan hasil sapuan kekal kemas.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 82-83"
  },
  {
    "id": "d6_psv_u10_s1_10",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Dalam pemilihan hal benda bertemakan flora, bunga raya mempunyai lima kelopak yang melambangkan nilai tertentu di Malaysia. Apakah yang dilambangkan oleh lima kelopak bunga raya tersebut?",
    "options": [
      "Lima prinsip bahasa seni visual dan unsur rekaan",
      "Lima jenis teknik penghasilan batik tradisional",
      "Rukun Islam dan Rukun Negara",
      "Lima bidang utama dalam Pendidikan Seni Visual"
    ],
    "correctIndex": 2,
    "explanation": "Berdasarkan informasi buku teks, bunga raya (Hibiscus rosa-sinensis) ialah bunga kebangsaan Malaysia dan lima kelopaknya merupakan lambang Rukun Islam dan Rukun Negara.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 76"
  },
  {
    "id": "d6_psv_u10_s2_01",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Dalam penghasilan rekaan beg alatan seni, bahan manakah yang dipotong dua helai dan ditampalkan pada sisi kanan dan kiri kain batik sebagai tali pemegang beg?",
    "options": [
      "Kertas krep",
      "Pita velkro",
      "Kain felt kuning",
      "Reben"
    ],
    "correctIndex": 3,
    "explanation": "Dua helai reben dipotong untuk dijadikan tali pemegang beg dan ditampalkan pada bahagian sisi kanan dan kiri kain batik.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 84"
  },
  {
    "id": "d6_psv_u10_s2_02",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah bahan yang ditampalkan di sekeliling beg batik supaya beg dapat ditutup dengan rapat dan kemas?",
    "options": [
      "Pita velkro",
      "Dawai bulu warna",
      "Manik hiasan",
      "Gam PVA"
    ],
    "correctIndex": 0,
    "explanation": "Pita velkro ditampalkan di sekeliling beg untuk memastikan rekaan beg dapat ditutup rapat dan kemas.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 85"
  },
  {
    "id": "d6_psv_u10_s2_03",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah bahan kemasan yang digunakan untuk menghias bahagian dalam dan luar beg batik mengikut kreativiti murid?",
    "options": [
      "Batang aiskrim",
      "Manik hiasan",
      "Pengikat gegelang",
      "Kertas lukisan"
    ],
    "correctIndex": 1,
    "explanation": "Kemasan beg batik dilakukan dengan menampal manik hiasan pada bahagian dalam dan luar beg mengikut kreativiti.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 76, 85"
  },
  {
    "id": "d6_psv_u10_s2_04",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah tujuan utama penghasilan Buku Foto Seni pada penghujung buku teks?",
    "options": [
      "Untuk menggantikan buku latihan tulis murid",
      "Untuk dijadikan alas semasa mewarnakan batik",
      "Untuk mengumpulkan gambar hasil karya murid sepanjang penggal satu dan penggal dua",
      "Untuk menyimpan alatan tajam seperti gunting dan pengokot"
    ],
    "correctIndex": 2,
    "explanation": "Buku Foto Seni ialah sebuah folio untuk mengumpulkan gambar hasil karya murid sepanjang penggal satu dan penggal dua.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 88"
  },
  {
    "id": "d6_psv_u10_s2_05",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Dalam penghasilan Buku Foto Seni, kertas jenis apakah yang dicadangkan dalam tip buku teks untuk mencetak gambar agar mendapat hasil yang berkualiti?",
    "options": [
      "Kertas surat khabar",
      "Kertas tisu",
      "Kertas kadbod tebal",
      "Kertas glos"
    ],
    "correctIndex": 3,
    "explanation": "Tip penghasilan Buku Foto Seni menyatakan bahawa murid boleh mencetak gambar pada kertas glos untuk mendapatkan hasil gambar yang berkualiti.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 88"
  },
  {
    "id": "d6_psv_u10_s2_06",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Semasa menampal kain felt kuning pada bahagian kanan dan kiri beg untuk dijadikan poket, mengapakah bahagian atas kain felt itu tidak boleh ditampal pita pelekat dua muka?",
    "options": [
      "Supaya poket mempunyai ruang bukaan di bahagian atas untuk memasukkan alatan seni",
      "Supaya kain felt mudah tertanggal apabila beg dilipat",
      "Supaya pita velkro dapat dilekatkan di tengah-tengah poket",
      "Supaya tali pemegang reben dapat diselitkan melalui poket"
    ],
    "correctIndex": 0,
    "explanation": "Bahagian yang tidak ditampalkan pita pelekat dua muka perlu berada di bahagian atas supaya menjadi bukaan poket beg untuk menyimpan alatan seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 85"
  },
  {
    "id": "d6_psv_u10_s2_07",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Dalam sesi apresiasi seni beg batik, bagaimanakah gabungan warna biru pada latar kain dengan warna merah pada kelopak bunga raya memberi kesan kepada karya?",
    "options": [
      "Menjadikan permukaan beg terasa kasar apabila disentuh",
      "Gabungan warna sejuk dan warna panas menimbulkan kesan kontra serta menarik perhatian",
      "Menghasilkan ruang ilusi tiga dimensi pada bahagian dalam beg",
      "Menghilangkan garisan resis gam PVA pada keseluruhan kain kapas"
    ],
    "correctIndex": 1,
    "explanation": "Gabungan warna sejuk (biru) sebagai warna latar dengan warna panas (merah) pada motif kelopak bunga raya menimbulkan kesan kontra serta menarik perhatian.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 83, 87"
  },
  {
    "id": "d6_psv_u10_s2_08",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Apakah maklumat wajib yang perlu ditulis di bawah gambar proses dan hasil karya dalam Buku Foto Seni?",
    "options": [
      "Harga bahan dan tarikh pembelian alatan",
      "Senarai nama rakan sekelas dan markah ujian",
      "Tajuk karya, media dan teknik",
      "Alamat rumah dan nombor telefon murid"
    ],
    "correctIndex": 2,
    "explanation": "Murid perlu menulis tajuk karya, media dan teknik di bawah gambar proses dan hasil karya dengan menggunakan pen (dan boleh menambah bahasa seni visual serta eksplorasi sebagai kapsyen).",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 88"
  },
  {
    "id": "d6_psv_u10_s2_09",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Seorang murid telah menebuk semua kertas warna dan kulit kad keras bagi Buku Foto Seni menggunakan penebuk kertas. Apakah langkah seterusnya untuk menjilid buku foto seni tersebut?",
    "options": [
      "Menampal pita pelekat dua muka pada keseluruhan muka surat",
      "Mengokot bahagian tengah kulit kad keras dengan dawai kokot",
      "Menyapu gam PVA di sepanjang tepi kertas yang ditebuk",
      "Memasang pengikat gegelang pada kertas yang telah ditebuk"
    ],
    "correctIndex": 3,
    "explanation": "Selepas menebuk semua kertas warna dan kulit buku dengan penebuk kertas, murid perlu memasang pengikat gegelang pada kertas yang telah ditebuk untuk menjilid Buku Foto Seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 89"
  },
  {
    "id": "d6_psv_u10_s2_10",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Dalam pameran hasil karya Beg Batik Rekaanku, mengapakah gambar foto karya yang dicetak pada kertas A4 dibingkaikan pada kad keras dan dipamerkan bersama-sama beg batik sebenar?",
    "options": [
      "Untuk memaparkan dokumentasi visual karya secara kemas bagi menyokong sesi apresiasi seni",
      "Untuk menutup bahagian beg batik yang tidak sempat diwarnakan",
      "Untuk menggantikan fungsi pita velkro pada bahagian tepi beg",
      "Untuk membolehkan karya tersebut dijadikan kulit Buku Foto Seni secara terus"
    ],
    "correctIndex": 0,
    "explanation": "Mencetak gambar foto hasil karya pada kertas A4, membingkaikannya pada kad keras dan mempamerkannya bersama karya sebenar membantu mendokumentasikan hasil karya dengan kemas bagi sesi pameran dan apresiasi seni.",
    "ref": "Buku Teks PSV Tahun 6 (Semakan 2017), m/s 86-87"
  }
];

  App.Pools.d6.psv = items;
})(typeof window !== "undefined" ? window : globalThis);
