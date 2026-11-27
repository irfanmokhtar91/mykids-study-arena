/**
 * Darjah 6 Pendidikan Jasmani & Pendidikan Kesihatan variant question pool (KSSR Semakan 2017, Units 1-13).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, concise explanation, and textbook page ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  const items = [
  {
    "id": "d6_pjpk_u1_s1_01",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah maksud singkatan MAG dalam sukan gimnastik?",
    "options": [
      "Men's Artistic Gymnastics",
      "Modern Aerobic Gymnastics",
      "Malaysian Artistic Group",
      "Mixed Acrobatic Gymnastics"
    ],
    "correctIndex": 0,
    "explanation": "MAG merujuk kepada Gimnastik Artistik Lelaki atau Men's Artistic Gymnastics.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 1"
  },
  {
    "id": "d6_pjpk_u1_s1_02",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Antara acara berikut, yang manakah dipertandingkan dalam Gimnastik Artistik Wanita (WAG)?",
    "options": [
      "Palang Jajar",
      "Alang Imbangan",
      "Kekuda Berpelana",
      "Gelang Roman"
    ],
    "correctIndex": 1,
    "explanation": "Gimnastik Artistik Wanita (WAG) bersaing dalam acara Senaman Lantai, Palang Bertingkat, Melombol dan Alang Imbangan. Tiga acara lain adalah untuk lelaki (MAG).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 1"
  },
  {
    "id": "d6_pjpk_u1_s1_03",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Dalam aktiviti single-leg circle, otot kaki yang manakah diperlukan untuk mengekalkan keseimbangan anggota badan?",
    "options": [
      "Otot bisep",
      "Otot pektoralis",
      "Otot hamstring",
      "Otot deltoid"
    ],
    "correctIndex": 2,
    "explanation": "Single-leg circle memerlukan kekuatan otot kaki seperti hamstring bagi mengekalkan keseimbangan anggota badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2"
  },
  {
    "id": "d6_pjpk_u1_s1_04",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Bagaimanakah postur badan yang betul semasa melakukan aktiviti kereta sorong dua arah dan dirian tangan dinamik?",
    "options": [
      "Membongkok ke sisi",
      "Menunduk sambil merapatkan dagu",
      "Melentikkan pinggang secara berlebihan",
      "Postur badan sentiasa tegap"
    ],
    "correctIndex": 3,
    "explanation": "Postur badan perlu tegap untuk memastikan imbangan badan kekal stabil semasa melakukan kereta sorong dan dirian tangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2"
  },
  {
    "id": "d6_pjpk_u1_s1_05",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Apakah faktor utama yang mempengaruhi kestabilan sesuatu objek atau formasi piramid?",
    "options": [
      "Ketinggian dan luas tapak",
      "Warna pakaian dan jenis tilam",
      "Bilangan penonton dan tempoh masa",
      "Kelajuan larian dan arah angin"
    ],
    "correctIndex": 0,
    "explanation": "Kestabilan objek atau formasi piramid dipengaruhi oleh ketinggian dan luas tapak; semakin luas tapak, semakin stabil piramid tersebut.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 4"
  },
  {
    "id": "d6_pjpk_u1_s1_06",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Semasa melakukan single-leg circle, murid membongkok sambil mencangkung dengan sebelah kaki lurus dan sebelah lagi difleksikan. Apabila kaki lurus dipusingkan 180 darjah, apakah yang berlaku?",
    "options": [
      "Kedua-dua belah kaki diangkat serentak dari lantai",
      "Kaki dan kedua-dua belah tangan bergilir-gilir menampung badan",
      "Murid melompat ke udara sambil menepuk tangan",
      "Hanya sebelah tangan sahaja menyentuh lantai sepanjang masa"
    ],
    "correctIndex": 1,
    "explanation": "Semasa kaki yang lurus dipusingkan 180 darjah dalam single-leg circle, kaki dan kedua-dua belah tangan akan bergilir-gilir menampung badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2"
  },
  {
    "id": "d6_pjpk_u1_s1_07",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Dalam aktiviti kereta sorong dua arah, seorang murid memegang kaki dua orang rakan di sebelah-menyebelah. Mengapakah salah seorang murid perlu memberikan isyarat sebelum bergerak?",
    "options": [
      "Supaya mereka dapat berehat lebih lama di tengah lantai",
      "Supaya mereka boleh menukar pasangan dengan cepat",
      "Supaya ketiga-tiga murid dapat bergerak secara serentak",
      "Supaya murid yang memegang kaki dapat melepaskan pegangan"
    ],
    "correctIndex": 2,
    "explanation": "Isyarat diberikan supaya ketiga-tiga murid yang menjadi kereta sorong dan murid yang memegang kaki dapat bergerak serentak dan seimbang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2-3"
  },
  {
    "id": "d6_pjpk_u1_s1_08",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Apakah langkah penting yang mesti dipastikan oleh murid yang melakukan dirian tangan dinamik sebelum menggerakkan tangannya ke hadapan?",
    "options": [
      "Menutup mata supaya lebih fokus",
      "Membengkokkan kedua-dua siku serentak",
      "Menarik kaki daripada pegangan rakan",
      "Memastikan sebelah tapak tangan berada dalam keadaan stabil"
    ],
    "correctIndex": 3,
    "explanation": "Murid perlu memastikan sebelah tapak tangan stabil menampung badan terlebih dahulu sebelum menggerakkan tangan yang satu lagi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2-3"
  },
  {
    "id": "d6_pjpk_u1_s1_09",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Kumpulan Amir ingin membina formasi piramid enam orang yang paling stabil dan sukar tumbang. Apakah susunan yang paling tepat berdasarkan prinsip kestabilan?",
    "options": [
      "Meletakkan lebih ramai ahli di bahagian tapak bawah dengan kedudukan luas serta ahli yang ringan di bahagian atas",
      "Meletakkan seorang ahli sahaja di bahagian tapak bawah dan lima orang ahli berdiri di atas bahunya",
      "Memastikan semua ahli berdiri rapat-rapat supaya tapak piramid menjadi sekecil mungkin",
      "Membina piramid setinggi mungkin dengan semua ahli meluruskan badan secara menegak"
    ],
    "correctIndex": 0,
    "explanation": "Semakin luas tapak dan semakin rendah pusat graviti, semakin stabil sesuatu formasi piramid. Meletakkan lebih ramai ahli di tapak bawah meluaskan tapak sokongan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 4"
  },
  {
    "id": "d6_pjpk_u1_s1_10",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Ketika melakukan dirian tangan dinamik, Zaki bergerak terlalu laju sehingga penyokong yang memegang kakinya gagal mengikut rentak dan Zaki hilang imbangan. Bagaimanakah cara terbaik untuk mengatasi masalah ini?",
    "options": [
      "Zaki perlu bergerak lebih pantas tanpa menunggu penyokongnya",
      "Zaki dan penyokongnya perlu bergerak bersama-sama secara terkawal selepas setiap tapak tangan stabil",
      "Penyokong perlu melepaskan kaki Zaki sebaik sahaja Zaki mula melangkah tangan",
      "Zaki perlu membongkokkan badannya supaya tidak terlalu tegap"
    ],
    "correctIndex": 1,
    "explanation": "Dalam dirian tangan dinamik, murid yang memegang kaki mesti bergerak bersama-sama murid yang melakukan dirian tangan, dan setiap tapak tangan perlu stabil sebelum tangan sebelah lagi digerakkan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 2"
  },
  {
    "id": "d6_pjpk_u1_s2_01",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Mengapakah murid perlu melakukan fleksi lutut semasa mendarat selepas lompat layangan?",
    "options": [
      "Untuk menambah ketinggian lompatan seterusnya",
      "Untuk memusingkan badan sebanyak 180 darjah",
      "Untuk menyerap daya pendaratan",
      "Untuk meluruskan badan ke belakang"
    ],
    "correctIndex": 2,
    "explanation": "Fleksi lutut semasa mendarat bertujuan untuk menyerap daya agar pendaratan selamat dan tidak mencederakan sendi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 5"
  },
  {
    "id": "d6_pjpk_u1_s2_02",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Apakah tujuan mengayun tangan dari bawah dan lurus ke atas semasa memulakan lompat layangan?",
    "options": [
      "Mengurangkan kelajuan larian landas",
      "Mengelakkan kaki daripada menyentuh papan anjal",
      "Memudahkan rakan memegang pinggang",
      "Meningkatkan daya lonjakan tubuh badan"
    ],
    "correctIndex": 3,
    "explanation": "Ayunan tangan dari bawah dan lurus ke atas membantu meningkatkan daya lonjakan supaya tubuh badan dapat melayang lebih tinggi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 5"
  },
  {
    "id": "d6_pjpk_u1_s2_03",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Dalam aktiviti Lompatan Gasing, berapakah sudut putaran menegak di udara yang dipelajari oleh murid Tahun 6?",
    "options": [
      "180 darjah",
      "45 darjah",
      "90 darjah",
      "360 darjah"
    ],
    "correctIndex": 0,
    "explanation": "Murid melakukan Lompatan Gasing dengan putaran menegak sebanyak 180 darjah di udara.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 6"
  },
  {
    "id": "d6_pjpk_u1_s2_04",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Berapakah jarak antara tiga orang murid yang disarankan di atas tilam semasa melakukan aktiviti Lompat Tiga Serangkai?",
    "options": [
      "Lebih kurang setengah meter",
      "Lebih kurang satu meter",
      "Lebih kurang tiga meter",
      "Lebih kurang lima meter"
    ],
    "correctIndex": 1,
    "explanation": "Dalam aktiviti Lompat Tiga Serangkai (triple roll), jarak antara tiga orang murid di atas tilam adalah lebih kurang satu meter.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 7"
  },
  {
    "id": "d6_pjpk_u1_s2_05",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Mengapakah tangan perlu sentiasa kering semasa membuat genggaman pada palang dalam aktiviti Gayut dan Ayun?",
    "options": [
      "Supaya palang tidak berkarat",
      "Supaya baju tidak kotor",
      "Tangan yang basah boleh menyebabkan genggaman terlepas",
      "Tangan yang basah menjadikan ayunan terlalu laju"
    ],
    "correctIndex": 2,
    "explanation": "Tangan yang basah atau berpeluh licin boleh menyebabkan genggaman pada palang terlepas dan mengakibatkan kecederaan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_pjpk_u1_s2_06",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Dalam aktiviti Guling Keyakinan, murid boleh menggabungkan guling depan dan guling belakang. Bilakah guling belakang sesuai dilakukan?",
    "options": [
      "Apabila murid mahu berhenti terus daripada bersenam",
      "Apabila murid ingin melompat melepasi peti lombol",
      "Apabila tiada tilam gimnastik disediakan di dewan",
      "Apabila terdapat halangan di hadapan dan murid ingin berpatah balik"
    ],
    "correctIndex": 3,
    "explanation": "Apabila murid sedang dalam situasi guling depan tetapi terdapat halangan di hadapan dan ingin berpatah balik, guling belakang boleh dilakukan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 8"
  },
  {
    "id": "d6_pjpk_u1_s2_07",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Bagaimanakah susunan pergerakan dalam aktiviti Lompat Tiga Serangkai apabila Murid A berada di tengah, Murid B di sebelah kanan, dan Murid C di sebelah kiri?",
    "options": [
      "Murid A berguling ke kanan di bawah Murid B yang melonjak, kemudian Murid B berguling ke kiri dan Murid C melonjak, diikuti Murid C berguling ke kanan dan Murid A melonjak",
      "Ketiga-tiga murid berguling ke arah yang sama secara serentak tanpa ada yang melonjak",
      "Murid B dan Murid C berguling dahulu sebelum Murid A melonjak di tempat yang sama",
      "Murid A melonjak melepasi Murid B dan Murid C yang berdiri tegak tanpa berguling"
    ],
    "correctIndex": 0,
    "explanation": "Murid A berguling ke kanan di bawah Murid B yang tangkas melonjak, kemudian Murid B berguling ke kiri sementara Murid C melonjak, dan seterusnya Murid C berguling ke kanan manakala Murid A melonjak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 7"
  },
  {
    "id": "d6_pjpk_u1_s2_08",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Antara berikut, yang manakah merupakan tiga jenis genggaman pada palang yang dipelajari dalam aktiviti Gayut dan Ayun?",
    "options": [
      "Genggaman sisi, genggaman silang dan genggaman rapat",
      "Genggaman atas, genggaman bawah dan genggaman campuran",
      "Genggaman depan, genggaman belakang dan genggaman bebas",
      "Genggaman satu jari, genggaman dua tangan dan genggaman longgar"
    ],
    "correctIndex": 1,
    "explanation": "Tiga jenis genggaman pada palang yang dipelajari ialah genggaman atas, genggaman bawah dan genggaman campuran.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 9"
  },
  {
    "id": "d6_pjpk_u1_s2_09",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Fatin sukar menyempurnakan putaran menegak 180 darjah di udara semasa melakukan Lompatan Gasing. Apakah tindakan pembetulan yang paling berkesan untuk membantunya?",
    "options": [
      "Berlari lebih perlahan sebelum melonjak supaya badan terasa ringan",
      "Mendarat dengan kaki lurus dahulu sebelum memusingkan badan",
      "Menghasilkan daya lonjakan yang lebih tinggi supaya mempunyai masa yang cukup untuk berputar di udara",
      "Melakukan guling belakang di atas papan anjal sebelum melompat"
    ],
    "correctIndex": 2,
    "explanation": "Daya yang dihasilkan semasa melonjak tinggi akan memudahkan murid membuat putaran 180 darjah dan pelbagai aksi lain seperti Gaya Pike dan Gaya Tuck di udara.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 6"
  },
  {
    "id": "d6_pjpk_u1_s2_10",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Sekumpulan murid mahu mencuba aktiviti lompat layangan menggunakan papan anjal dan bergayut pada palang. Antara tindakan berikut, yang manakah paling tepat untuk memastikan keselamatan menyeluruh sebelum dan semasa aktiviti?",
    "options": [
      "Memakai kasut bertapak licin, melakukan regangan selepas selesai sahaja, dan berlatih bersendirian",
      "Terus melompat tanpa memanaskan badan supaya tenaga tidak habis sebelum giliran",
      "Membasahkan tapak tangan sebelum memegang palang dan meluruskan lutut semasa mendarat",
      "Memanaskan badan, memastikan papan anjal berfungsi baik, memakai pakaian sesuai, dan berlatih dengan bantuan rakan di bawah pengawasan guru"
    ],
    "correctIndex": 3,
    "explanation": "Keselamatan gimnastik memerlukan aktiviti memanaskan badan dan regangan, pemeriksaan alat seperti papan anjal, pakaian yang sesuai, serta bantuan rakan dan pengawasan guru.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 5, 9"
  },
  {
    "id": "d6_pjpk_u2_s1_01",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan pergerakan lokomotor?",
    "options": [
      "Pergerakan yang menyebabkan perubahan kedudukan atau tempat",
      "Pergerakan yang dilakukan sambil duduk di atas kerusi",
      "Pergerakan anggota badan tanpa mengubah kedudukan tempat",
      "Pergerakan yang hanya menggunakan jari dan pergelangan tangan"
    ],
    "correctIndex": 0,
    "explanation": "Pergerakan lokomotor ialah pergerakan yang menyebabkan perubahan kedudukan badan dari satu tempat ke tempat yang lain.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_pjpk_u2_s1_02",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan pergerakan bukan lokomotor?",
    "options": [
      "Pergerakan berlari dan melompat merentasi padang",
      "Pergerakan yang dilakukan tanpa mengubah kedudukan tempat",
      "Pergerakan berguling dari hujung tilam ke hujung yang lain",
      "Pergerakan berjalan laju mengikut garisan lurus"
    ],
    "correctIndex": 1,
    "explanation": "Pergerakan bukan lokomotor ialah pergerakan yang dilakukan di tempat yang sama tanpa mengubah kedudukan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_pjpk_u2_s1_03",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Apakah peluang utama yang diperoleh murid melalui aktiviti pergerakan gimnastik berirama mengikut muzik?",
    "options": [
      "Menunjukkan kekuatan fizikal secara individu sahaja",
      "Mengelakkan diri daripada berinteraksi dengan rakan",
      "Berkomunikasi serta melahirkan perasaan melalui pergerakan",
      "Menguji kelajuan larian pecut jarak jauh"
    ],
    "correctIndex": 2,
    "explanation": "Pergerakan berirama memberi peluang kepada murid untuk berkomunikasi serta melahirkan perasaan melalui pergerakan mengikut muzik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_pjpk_u2_s1_04",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Antara nilai murni berikut, yang manakah paling penting diamalkan apabila ahli kumpulan perlu melakukan pergerakan berirama yang sama dan serentak?",
    "options": [
      "Mementingkan diri sendiri",
      "Berlumba-lumba untuk menonjol seorang diri",
      "Berputus asa apabila tersilap langkah",
      "Kerjasama dan kesepakatan antara ahli kumpulan"
    ],
    "correctIndex": 3,
    "explanation": "Pergerakan berirama berkumpulan memerlukan pergerakan yang sama dan serentak, justeru nilai kerjasama dan kesepakatan amat diperlukan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_pjpk_u2_s1_05",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Selain tarian singa, nyatakan dua contoh tarian tradisional lain yang disebut dalam penilaian pergerakan berirama Unit 2.",
    "options": [
      "Tarian kuda kepang dan tarian kolattam",
      "Tarian balet dan tarian tango",
      "Tarian waltz dan tarian hip-hop",
      "Tarian salsa dan tarian tap"
    ],
    "correctIndex": 0,
    "explanation": "Dalam Uji Minda Unit 2, murid mengenal pasti lokomotor, bukan lokomotor dan konsep pergerakan bagi tarian singa, tarian kuda kepang dan tarian kolattam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 14"
  },
  {
    "id": "d6_pjpk_u2_s1_06",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Dalam satu persembahan berirama, Mei Ling berdiri setempat sambil menghayunkan tangan dan membongkokkan badan ke hadapan mengikut rentak lagu. Apakah jenis pergerakan yang dilakukan oleh Mei Ling?",
    "options": [
      "Pergerakan lokomotor kerana tangannya bergerak jauh",
      "Pergerakan bukan lokomotor kerana kedudukan kakinya tidak berpindah tempat",
      "Pergerakan langkah lurus kerana badannya membongkok",
      "Pergerakan imbangan piramid kerana dilakukan mengikut lagu"
    ],
    "correctIndex": 1,
    "explanation": "Menghayun tangan dan membongkokkan badan sambil berdiri setempat tidak mengubah kedudukan tempat, maka ia tergolong dalam pergerakan bukan lokomotor.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11"
  },
  {
    "id": "d6_pjpk_u2_s1_07",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Antara gabungan berikut, yang manakah kesemuanya tergolong dalam pergerakan lokomotor?",
    "options": [
      "Berdiri tegak, memusingkan kepala dan menepuk tangan",
      "Membongkok, mengilas badan dan mengayun lengan di tempat sama",
      "Berjalan dengan langkah lurus, berlari dan melompat ke hadapan",
      "Mencangkung, meregangkan otot dan duduk bersila"
    ],
    "correctIndex": 2,
    "explanation": "Berjalan dengan langkah lurus, berlari dan melompat menyebabkan badan berpindah dari satu tempat ke tempat lain, iaitu pergerakan lokomotor.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11, 14"
  },
  {
    "id": "d6_pjpk_u2_s1_08",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Mengapakah langkah lurus perlu diselaraskan dengan tempoh irama muzik dalam persembahan gimnastik berirama?",
    "options": [
      "Supaya muzik dapat dimatikan lebih awal",
      "Supaya murid tidak perlu menggunakan pergerakan bukan lokomotor",
      "Supaya setiap ahli dapat bergerak mengikut haluan masing-masing secara bebas",
      "Supaya pergerakan kumpulan kelihatan kemas, seragam dan menepati rentak"
    ],
    "correctIndex": 3,
    "explanation": "Penyelarasan langkah lurus dengan tempo muzik memastikan pergerakan kumpulan kelihatan seragam, kemas dan selaras dengan konsep pergerakan berirama.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11, 14"
  },
  {
    "id": "d6_pjpk_u2_s1_09",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Kumpulan 6 Bijak mendapati pergerakan langkah lurus mereka sering bercanggah apabila digabungkan dengan pergerakan bukan lokomotor semasa latihan Hari Guru. Apakah langkah terbaik untuk mengatasi kesukaran ini?",
    "options": [
      "Berlatih secara berperingkat mengikut kiraan rentak yang sama sebelum menggabungkan langkah lurus dan pergerakan bukan lokomotor bersama muzik",
      "Membuang semua pergerakan bukan lokomotor dan hanya berdiri setempat",
      "Menukar lagu kepada rentak yang sangat laju tanpa mengira langkah",
      "Membenarkan ketua kumpulan sahaja yang melakukan langkah lurus"
    ],
    "correctIndex": 0,
    "explanation": "Latihan berperingkat mengikut kiraan rentak membantu semua ahli menyelaraskan peralihan antara pergerakan lokomotor (langkah lurus) dan bukan lokomotor sebelum mengikut muzik penuh.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11, 14"
  },
  {
    "id": "d6_pjpk_u2_s1_10",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Dalam analisis persembahan tarian kuda kepang, bagaimanakah murid dapat membezakan fasa lokomotor dan bukan lokomotor dengan tepat?",
    "options": [
      "Fasa lokomotor ialah ketika penari menggerakkan kepala di tempat yang sama, manakala bukan lokomotor ialah ketika penari menunggang kuda kepang mengelilingi pentas",
      "Fasa lokomotor ialah ketika penari melangkah dan bergerak berpindah ruang mengikut rentak, manakala bukan lokomotor ialah ketika penari menghayun atau mengimbang badan di satu kedudukan tetap",
      "Kedua-dua fasa adalah sama kerana tarian tradisional tidak melibatkan perubahan tempat",
      "Fasa bukan lokomotor hanya berlaku apabila muzik berhenti sepenuhnya"
    ],
    "correctIndex": 1,
    "explanation": "Pergerakan lokomotor melibatkan perpindahan tempat (seperti melangkah dan bergerak dalam formasi), manakala bukan lokomotor melibatkan pergerakan badan di kedudukan tetap.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 11, 14"
  },
  {
    "id": "d6_pjpk_u2_s2_01",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Tarian singa merupakan tarian tradisional kebudayaan masyarakat manakah di negara kita dan Asia?",
    "options": [
      "Kaum India",
      "Kaum Kadazan",
      "Kaum Cina",
      "Kaum Iban"
    ],
    "correctIndex": 2,
    "explanation": "Tarian singa merupakan tarian tradisional kebudayaan kaum Cina di negara kita dan di negara Asia yang lain.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12"
  },
  {
    "id": "d6_pjpk_u2_s2_02",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Dalam aktiviti Singa Kreatif, bagaimanakah arah pergerakan untuk situasi singa memakan buah?",
    "options": [
      "Berlari ke belakang dengan pantas",
      "Berguling ke kiri dan ke kanan",
      "Melompat melepasi tali di lantai",
      "Bergerak dari bawah ke atas seperti hendak mengambil buah limau"
    ],
    "correctIndex": 3,
    "explanation": "Arahan bagi situasi singa memakan buah ialah pergerakan dari bawah ke atas seperti gerakan singa hendak mengambil buah limau.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12"
  },
  {
    "id": "d6_pjpk_u2_s2_03",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah bahan terbuang yang dicadangkan dalam aktiviti pengayaan untuk mereka prop tarian singa?",
    "options": [
      "Kotak",
      "Kaca pecah",
      "Besi tajam",
      "Dawai berduri"
    ],
    "correctIndex": 0,
    "explanation": "Murid digalakkan bekerjasama dengan rakan untuk mereka prop tarian daripada bahan terbuang seperti kotak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12"
  },
  {
    "id": "d6_pjpk_u2_s2_04",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Apakah perkara utama yang perlu dipastikan pada kawasan pergerakan sebelum melakukan aktiviti Gerakan Seni tarian singa?",
    "options": [
      "Kawasan mempunyai banyak kerusi di tengah laluan",
      "Kawasan tiada halangan dan tiada benda tajam",
      "Lantai dibasahkan dengan air",
      "Lampu dewan dipadamkan sepenuhnya"
    ],
    "correctIndex": 1,
    "explanation": "Demi keselamatan, murid perlu memastikan kawasan pergerakan bebas daripada sebarang halangan dan benda tajam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 13"
  },
  {
    "id": "d6_pjpk_u2_s2_05",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Dalam aktiviti Gerakan Seni di kelas, bagaimanakah murid mengetahui pergerakan tarian singa yang perlu dilakukan apabila muzik dimainkan?",
    "options": [
      "Meniru pergerakan penonton di luar dewan",
      "Berdiri diam tanpa berbuat apa-apa",
      "Merujuk kad arahan pergerakan yang diberikan kepada setiap kumpulan",
      "Menggunakan papan anjal dan palang"
    ],
    "correctIndex": 2,
    "explanation": "Setiap kumpulan diberikan kad arahan pergerakan dan melakukan pergerakan berdasarkan kad arahan tersebut apabila muzik dimainkan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 13"
  },
  {
    "id": "d6_pjpk_u2_s2_06",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Bagaimanakah lakuan pergerakan bagi situasi singa mencari makanan dalam aktiviti Gerakan Seni?",
    "options": [
      "Melompat melepasi tali seperti melompat melepasi parit",
      "Berlari laju secara lurus seperti mengejar sesuatu",
      "Duduk diam seperti baru terjaga daripada lena",
      "Bergerak ke atas, kemudian ke kiri dan ke kanan"
    ],
    "correctIndex": 3,
    "explanation": "Arahan bagi situasi singa mencari makanan ialah pergerakan ke atas, kemudian ke kiri dan ke kanan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 13"
  },
  {
    "id": "d6_pjpk_u2_s2_07",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Antara berikut, padanan situasi tarian singa dan arahannya yang manakah BETUL?",
    "options": [
      "Situasi singa melompat melepasi parit: melompat melepasi tali yang direntangkan",
      "Situasi singa terjaga daripada lena: berlari pecut mengelilingi dewan",
      "Situasi singa berlari: bergerak dari bawah ke atas mengambil buah limau",
      "Situasi singa memakan buah: membongkok mencari makanan ke kiri dan ke kanan"
    ],
    "correctIndex": 0,
    "explanation": "Situasi singa melompat melepasi parit dilakukan dengan melompat melepasi tali seperti melompat melepasi parit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_pjpk_u2_s2_08",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Mengapakah guru meminta setiap kumpulan bertukar kad arahan selepas satu pusingan aktiviti Gerakan Seni?",
    "options": [
      "Supaya murid hanya menghafal satu pergerakan sahaja",
      "Supaya setiap kumpulan berpeluang mencuba dan menguasai pelbagai situasi pergerakan tarian singa",
      "Supaya muzik dapat dihentikan lebih cepat",
      "Supaya kumpulan yang kalah tidak perlu bergerak lagi"
    ],
    "correctIndex": 1,
    "explanation": "Pertukaran kad arahan membolehkan setiap kumpulan mengalami dan melakukan pelbagai situasi pergerakan tarian singa yang berbeza untuk dinilai oleh guru.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 13"
  },
  {
    "id": "d6_pjpk_u2_s2_09",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Kumpulan Wei Ming ingin menggabungkan tiga situasi tarian singa menjadi satu rangkaian pergerakan mengikut tempo muzik: mula-mula terjaga, diikuti mencari mangsa, dan akhirnya melompat rintangan. Urutan pergerakan manakah yang paling tepat?",
    "options": [
      "Melompat melepasi tali -> bergerak dari bawah ke atas -> berlari mengejar sesuatu",
      "Berlari mengejar sesuatu -> melompat melepasi tali -> gerak ke kiri dan ke kanan",
      "Gerak singa terjaga daripada lena -> gerak ke atas, kiri dan kanan mencari makanan -> melompat melepasi tali seperti melepasi parit",
      "Gerak mengambil buah limau -> duduk diam -> melompat ke belakang"
    ],
    "correctIndex": 2,
    "explanation": "Urutan yang tepat ialah situasi singa terjaga daripada lena, diikuti pergerakan ke atas, kiri dan kanan (mencari makanan), dan diakhiri dengan melompat melepasi tali (melepasi parit).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_pjpk_u2_s2_10",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Semasa membuat prop kepala singa daripada kotak terbuang untuk persembahan tarian singa, apakah ciri rekaan yang paling perlu diutamakan oleh murid?",
    "options": [
      "Kotak yang sangat berat dan menutup seluruh penglihatan mata murid",
      "Menggunakan dawai tajam yang terjulur keluar supaya nampak garang",
      "Membuat prop yang terlalu besar sehingga menghalang pergerakan melompat dan berlari",
      "Prop yang ringan, kukuh, tidak mempunyai bahagian tajam, serta mempunyai ruang penglihatan yang jelas untuk keselamatan pergerakan"
    ],
    "correctIndex": 3,
    "explanation": "Prop daripada bahan terbuang seperti kotak perlu selamat (tiada bucu atau bahan tajam) dan tidak menghalang penglihatan atau pergerakan lokomotor seperti berlari dan melompat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 12-13"
  },
  {
    "id": "d6_pjpk_u3_s1_01",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Antara permainan berikut, yang manakah termasuk dalam kategori serangan?",
    "options": [
      "Bola jaring, bola baling dan futsal",
      "Badminton, pingpong dan tenis",
      "Lompat tinggi, lompat jauh dan lontar peluru",
      "Gimnastik berirama dan tarian singa"
    ],
    "correctIndex": 0,
    "explanation": "Bola jaring, bola baling dan futsal merupakan contoh permainan kategori serangan yang memerlukan pasukan menyerang untuk menjaringkan gol dan bertahan menghalang serangan lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 15"
  },
  {
    "id": "d6_pjpk_u3_s1_02",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Bagaimanakah cara seorang pemain menunjukkan kepada rakannya bahawa dia telah bersedia untuk menerima bola dalam permainan Bulatan Gembira?",
    "options": [
      "Berpusing membelakangkan rakan yang memegang bola",
      "Melambai tangan sebagai tanda bersedia menerima bola",
      "Duduk di atas garisan tepi padang",
      "Berlari keluar daripada kawasan permainan"
    ],
    "correctIndex": 1,
    "explanation": "Pemain yang hendak menerima bola akan melambai tangan sebagai tanda bersedia serta memastikan dirinya mempunyai ruang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_pjpk_u3_s1_03",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Apakah tindakan yang perlu dilakukan oleh pemain apabila bola yang dihantar oleh rakan adalah tinggi?",
    "options": [
      "Menunggu bola jatuh ke tanah dahulu",
      "Menundukkan kepala serendah mungkin",
      "Melompat untuk mendapatkan bola tersebut",
      "Membiarkan pihak lawan mengambil bola"
    ],
    "correctIndex": 2,
    "explanation": "Jika bola dihantar tinggi, pemain yang menerima bola boleh melompat untuk mendapatkan bola tersebut.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_pjpk_u3_s1_04",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Dalam permainan Bulatan Gembira, berapakah tempoh masa maksimum yang dibenarkan untuk seseorang pemain memegang bola sebelum menghantarnya kepada rakan?",
    "options": [
      "Sepuluh saat",
      "Lima saat",
      "Satu minit",
      "Tiga saat"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut peraturan permainan Bulatan Gembira, pemain diberi masa tiga saat sahaja untuk menghantar bola kepada rakan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_pjpk_u3_s1_05",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Dalam permainan Bola Pantas, rakan yang hendak menerima bola perlu bijak mencari ruang. Mengapakah tindakan ini penting?",
    "options": [
      "Untuk membebaskan diri daripada dikawal oleh pihak lawan",
      "Untuk berehat jauh daripada kawasan gol",
      "Supaya bola dapat keluar daripada gelanggang",
      "Supaya pengadil tidak nampak kedudukan pemain"
    ],
    "correctIndex": 0,
    "explanation": "Mencari ruang membolehkan pemain membebaskan diri daripada kawalan pihak lawan supaya rakan mudah membuat hantaran yang tepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 17"
  },
  {
    "id": "d6_pjpk_u3_s1_06",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Bagaimanakah satu mata diperoleh oleh pasukan yang menyerang dalam permainan Bulatan Gembira?",
    "options": [
      "Apabila pemain berjaya mengelecek bola selama lima minit",
      "Apabila pemain penyerang menghantar bola kepada rakan yang berada di dalam gelung",
      "Apabila pemain berjaya menyepak bola keluar dari padang",
      "Apabila semua pemain berdiri di tengah gelanggang"
    ],
    "correctIndex": 1,
    "explanation": "Dalam Bulatan Gembira, pemain yang menyerang perlu menghantar bola kepada rakan yang berada di dalam gelung untuk mendapatkan satu mata.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16"
  },
  {
    "id": "d6_pjpk_u3_s1_07",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Dalam permainan Bola Pantas, bilakah jaringan gol dikira sah untuk mendapatkan satu mata?",
    "options": [
      "Apabila bola dijaringkan dari luar kawasan permainan",
      "Apabila penjaring berada di dalam kawasan pasukannya sendiri",
      "Apabila pemain penyerang berada di dalam kawasan lawan semasa menjaringkan gol",
      "Apabila bola disambut oleh pemain lawan"
    ],
    "correctIndex": 2,
    "explanation": "Dalam permainan Bola Pantas, jaringan hanya boleh dibuat apabila pemain penyerang berada di dalam kawasan lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 17"
  },
  {
    "id": "d6_pjpk_u3_s1_08",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Apakah dua perkara penting yang perlu dipastikan oleh penghantar bola sebelum melepaskan hantaran kepada rakannya?",
    "options": [
      "Rakan sedang membelakangi bola dan dikawal oleh dua orang lawan",
      "Bola dihantar perlahan-lahan tanpa melihat kedudukan pengadang",
      "Penghantar menunggu melebihi tiga saat sebelum bergerak",
      "Rakan yang menerima telah bersedia dan pihak lawan tidak dapat mengadang hantaran tersebut"
    ],
    "correctIndex": 3,
    "explanation": "Bola perlu dihantar pantas dan tepat kepada rakan yang telah bersedia dan tidak dikawal agar pihak lawan tidak dapat mengadang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16-17"
  },
  {
    "id": "d6_pjpk_u3_s1_09",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Hafiz memegang bola dan melihat dua rakannya: Rakan X berada paling dekat tetapi dikawal rapat oleh dua pemain lawan, manakala Rakan Y berada agak jauh di ruang kosong dan sedang melambai tangan. Apakah keputusan terbaik Hafiz?",
    "options": [
      "Menghantar bola dengan pantas dan tepat kepada Rakan Y yang bebas di ruang kosong",
      "Menghantar bola perlahan-lahan kepada Rakan X supaya mudah dipintas",
      "Memegang bola lebih daripada lima saat sehingga pengadil meniup wisel",
      "Berdiri diam tanpa menghantar bola kepada sesiapa"
    ],
    "correctIndex": 0,
    "explanation": "Pemain perlu bijak memilih rakan yang tidak dikawal dan telah bersedia (melambai tangan) serta menghantar bola dengan pantas dan tepat supaya tidak diadang pihak lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16-17"
  },
  {
    "id": "d6_pjpk_u3_s1_10",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Mengapakah pemain yang hendak menerima bola digalakkan bergerak ke kiri dan ke kanan sebelum menerima hantaran?",
    "options": [
      "Untuk membuang masa permainan 5 : 1 : 5 minit",
      "Untuk melepaskan diri daripada kawalan pengadang dan membuka ruang hantaran yang jelas bagi rakan",
      "Untuk mengelirukan rakan sepasukan sendiri supaya tidak menghantar bola",
      "Untuk melanggar peraturan kawasan permainan 10 meter x 20 meter"
    ],
    "correctIndex": 1,
    "explanation": "Pergerakan ke kiri dan ke kanan membantu penerima bola melepaskan diri daripada kawalan pihak lawan serta mencari ruang yang sesuai untuk menerima hantaran tepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 16-17"
  },
  {
    "id": "d6_pjpk_u3_s2_01",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah tujuan utama pemain melakukan kemahiran mengacah dalam permainan kategori serangan seperti Bola Bakul Tepat?",
    "options": [
      "Untuk menghentikan masa permainan",
      "Untuk memulangkan bola kepada pengadil",
      "Untuk mengelirukan pemain lawan dan melepasi pengadang",
      "Untuk mengelakkan rakan sepasukan menyentuh bola"
    ],
    "correctIndex": 2,
    "explanation": "Pemain mengacah bertujuan mengelirukan pemain lawan dan melepasi pengadang untuk menghantar bola kepada rakan atau melakukan jaringan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 18"
  },
  {
    "id": "d6_pjpk_u3_s2_02",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah dilarang sama sekali demi keselamatan pemain semasa melakukan takel dalam permainan kategori serangan?",
    "options": [
      "Memintas hantaran bola pihak lawan",
      "Mengawal bola selepas berjaya melakukan takel",
      "Menghantar bola kepada rakan di hadapan",
      "Melakukan takel secara terjahan kasar yang boleh mencederakan pihak lawan"
    ],
    "correctIndex": 3,
    "explanation": "Pemain tidak dibenarkan melakukan takel secara terjahan kasar hingga boleh mendatangkan kecederaan kepada pihak lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_pjpk_u3_s2_03",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Mengapakah kepantasan pergerakan sangat penting semasa pemain cuba melepasi pihak lawan yang melakukan adangan?",
    "options": [
      "Supaya pengadang tidak sempat bertindak balas menghalang laluan serangan",
      "Supaya pemain cepat berasa penat dan dapat berehat",
      "Supaya bola mudah terlepas daripada kawalan tangan atau kaki",
      "Supaya pihak lawan mendapat peluang memintas bola"
    ],
    "correctIndex": 0,
    "explanation": "Kepantasan pergerakan membolehkan penyerang melepasi pengadang sebelum pengadang sempat menutup ruang atau menghalang hantaran dan jaringan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 18, 20"
  },
  {
    "id": "d6_pjpk_u3_s2_04",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Selepas berjaya memintas hantaran bola atau melakukan takel terhadap pihak lawan, apakah langkah segera yang perlu dilakukan oleh pemain?",
    "options": [
      "Menyepak bola keluar dari kawasan permainan",
      "Mengawal bola dahulu sebelum menghantarnya kepada rakan di posisi yang sesuai",
      "Berdiri pegun sambil memegang bola sehingga dirampas semula",
      "Menolak pemain lawan yang berada di hadapan"
    ],
    "correctIndex": 1,
    "explanation": "Pemain yang bijak perlu cekap melakukan pintasan atau takel serta mengawal bola sebelum menghantarnya kepada rakan di posisi yang sesuai.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_pjpk_u3_s2_05",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Apakah saiz kawasan permainan yang digunakan bagi aktiviti permainan kecil takel dan pintasan dalam Unit 3?",
    "options": [
      "5 meter x 5 meter",
      "50 meter x 100 meter",
      "10 meter x 20 meter",
      "2 meter x 4 meter"
    ],
    "correctIndex": 2,
    "explanation": "Kawasan permainan yang ditetapkan bagi aktiviti tersebut ialah 10 meter x 20 meter dengan masa permainan 5 : 1 : 5 minit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_pjpk_u3_s2_06",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Apakah kesan yang mungkin berlaku jika seseorang pemain tidak mempunyai keseimbangan tubuh badan yang baik semasa mengelecek bola?",
    "options": [
      "Pemain akan lebih mudah melepasi tiga orang pengadang sekaligus",
      "Pemain dapat menjaringkan gol dari jarak yang lebih jauh",
      "Pemain tidak perlu mengikut peraturan permainan",
      "Pemain mudah terjatuh, hilang kawalan bola, dan bola senang dirampas oleh pihak lawan"
    ],
    "correctIndex": 3,
    "explanation": "Keseimbangan tubuh badan semasa mengelecek membantu melepasi pihak lawan; tanpa keseimbangan, pemain mudah hilang kawalan bola atau terjatuh.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 20"
  },
  {
    "id": "d6_pjpk_u3_s2_07",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Bagaimanakah kombinasi kemahiran mengacah dan mengelecek membantu pasukan Abu dalam permainan Bola Bakul Tepat?",
    "options": [
      "Mengelirukan pengadang untuk membuka ruang bagi mengelecek melepasi adangan dan melakukan jaringan",
      "Membuatkan pengadang berkumpul di kawasan gol pasukan Abu sendiri",
      "Membolehkan pemain memegang bola tanpa bergerak selama satu minit",
      "Menghalang rakan sepasukan daripada menerima bola"
    ],
    "correctIndex": 0,
    "explanation": "Mengacah mengelirukan pemain lawan dan membuka ruang untuk pemain mengelecek melepasi adangan serta menjaringkan gol atau menghantar bola kepada rakan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 18"
  },
  {
    "id": "d6_pjpk_u3_s2_08",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Mengapakah pemain pertahanan perlu membaca pergerakan penghantar bola lawan ketika cuba melakukan pintasan?",
    "options": [
      "Supaya dia dapat melakukan terjahan kasar terhadap penghantar bola",
      "Supaya dia dapat menjangka arah hantaran dan memintas bola sebelum sampai kepada penerima lawan",
      "Supaya dia dapat meninggalkan kawasan permainan lebih awal",
      "Supaya pihak lawan mudah menjaringkan gol"
    ],
    "correctIndex": 1,
    "explanation": "Membaca arah hantaran membolehkan pemain pertahanan bertindak pantas memintas bola sebelum diterima oleh pemain lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 19"
  },
  {
    "id": "d6_pjpk_u3_s2_09",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Dalam satu perlawanan 6 lawan 6, pemain A1 berjaya memintas hantaran bola daripada pemain lawan B2 kepada B5 di bahagian tengah. Rakan sepasukan A2 dikawal rapat oleh B1, manakala rakan A4 berada di ruang terbuka berhampiran kawasan gol lawan tanpa pengawal. Ke manakah A1 paling sesuai menghantar bola?",
    "options": [
      "Menghantar bola ke belakang kepada penjaga gol sendiri walaupun tidak tertekan",
      "Menghantar bola kepada A2 yang sedang dikawal rapat oleh B1",
      "Menghantar bola kepada A4 yang berada di ruang terbuka di posisi sesuai untuk menyerang dan menjaringkan gol",
      "Menendang bola keluar padang untuk memulakan semula permainan"
    ],
    "correctIndex": 2,
    "explanation": "Selepas memintas bola, pemain perlu mengawal bola dan menghantarnya kepada rakan di posisi yang sesuai serta bebas daripada kawalan (A4) untuk mencipta peluang jaringan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 19-20"
  },
  {
    "id": "d6_pjpk_u3_s2_10",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Dalam situasi serangan balas, Daniel cuba mengelecek melepasi seorang pengadang tetapi pengadang itu menutup laluannya. Pada masa yang sama, seorang lagi pertahanan lawan berlari laju dari sisi untuk melakukan takel. Apakah tindakan paling bijak dan selamat untuk Daniel?",
    "options": [
      "Menolak pengadang di hadapannya dengan bahu supaya jatuh",
      "Terus berlari lurus merempuh pengadang tanpa mengawal bola",
      "Melakukan terjahan ke arah kaki pertahanan yang datang dari sisi",
      "Menggunakan gerakan mengacah sambil mengekalkan keseimbangan badan untuk mencari ruang menghantar bola kepada rakan yang bebas"
    ],
    "correctIndex": 3,
    "explanation": "Mengacah sambil mengekalkan keseimbangan badan membolehkan Daniel mengelirukan pengadang dan membuka ruang untuk menghantar bola kepada rakan dengan selamat tanpa melanggar peraturan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 18-20"
  },
  {
    "id": "d6_pjpk_u4_s1_01",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Antara alatan berikut, yang manakah tergolong dalam permainan kategori jaring?",
    "options": [
      "Bola takraw",
      "Kayu hoki",
      "Bet kriket",
      "Bola sofbol"
    ],
    "correctIndex": 0,
    "explanation": "Bola takraw digunakan dalam permainan sepak takraw yang tergolong dalam kategori jaring bersama-sama badminton, pingpong, tenis dan bola tampar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 21"
  },
  {
    "id": "d6_pjpk_u4_s1_02",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah maksud kemahiran voli dalam permainan kategori jaring seperti pickleball?",
    "options": [
      "Pukulan yang dilakukan selepas bola melantun dua kali",
      "Pukulan yang dilakukan sebelum bola menyentuh gelanggang",
      "Hantaran bola menggunakan kedua-dua belah kaki",
      "Servis yang dilakukan dari luar garisan belakang"
    ],
    "correctIndex": 1,
    "explanation": "Voli ialah pukulan yang dilakukan sebelum bola menyentuh permukaan gelanggang dan selalunya berlaku berdekatan jaring.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_pjpk_u4_s1_03",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Di bahagian gelanggang manakah pukulan voli paling kerap dilakukan dalam permainan kategori jaring?",
    "options": [
      "Di luar garisan tepi gelanggang",
      "Di sudut belakang gelanggang sendiri",
      "Di kawasan berdekatan jaring",
      "Di belakang garisan servis"
    ],
    "correctIndex": 2,
    "explanation": "Pemain bertindak pantas melakukan pukulan voli di kawasan hadapan atau berdekatan jaring sebelum bola menyentuh lantai.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_pjpk_u4_s1_04",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Bagaimanakah kedudukan kaki yang betul semasa seorang pemain melakukan pukulan voli kilas?",
    "options": [
      "Kedua-dua kaki dirapatkan tanpa bergerak",
      "Kaki dibuka seluas mungkin sambil melompat",
      "Tumit kaki diangkat tinggi sambil berundur",
      "Kaki hendaklah menyilang badan semasa memukul"
    ],
    "correctIndex": 3,
    "explanation": "Dalam lakuan voli kilas, kaki hendaklah menyilang badan bagi memastikan imbangan dan jangkauan pukulan yang betul.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_pjpk_u4_s1_05",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Apakah perkara utama yang perlu difikirkan oleh pemain sebelum melakukan servis ke kawasan lawan?",
    "options": [
      "Daya dan sasaran ke ruang kosong",
      "Warna kasut pemain pasukan lawan",
      "Bilangan penonton di tepi gelanggang",
      "Ketinggian bumbung dewan sukan"
    ],
    "correctIndex": 0,
    "explanation": "Semasa melakukan servis, pemain perlu memikirkan daya yang sesuai dan sasaran ke ruang kosong supaya sukar dikembalikan oleh pihak lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 22"
  },
  {
    "id": "d6_pjpk_u4_s1_06",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Dalam permainan bola tampar mini, rakan sepasukan menghantar bola kepada Amir yang berada di hadapan. Apakah kemahiran yang perlu dilakukan oleh Amir untuk menghantar bola itu kepada rakannya?",
    "options": [
      "Melakukan servis bawah ke luar gelanggang",
      "Menyangga bola kepada rakan sepasukan",
      "Melompat dan menangkap bola dengan dua tangan",
      "Membiarkan bola jatuh di dalam gelanggang sendiri"
    ],
    "correctIndex": 1,
    "explanation": "Apabila menerima bola atau servis dalam permainan seperti bola tampar, pemain perlu menyangga bola kepada rakan sepasukan supaya serangan balas dapat disusun.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 23"
  },
  {
    "id": "d6_pjpk_u4_s1_07",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Mengapakah pemain yang menerima servis perlu memberikan fokus sepenuhnya kepada pergerakan bola atau bulu tangkis?",
    "options": [
      "Supaya dapat menukar alatan permainan dengan cepat",
      "Supaya pengadil tidak meniup wisel kesalahan",
      "Supaya dapat mengembalikan bola ke gelanggang lawan dengan berkesan",
      "Supaya perlawanan dapat ditamatkan lebih awal"
    ],
    "correctIndex": 2,
    "explanation": "Fokus kepada pergerakan bola atau bulu tangkis membantu pemain bersedia dan mengembalikan hantaran ke kawasan lawan dengan berkesan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 22-23"
  },
  {
    "id": "d6_pjpk_u4_s1_08",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Dalam permainan pickleball, bola dihantar laju ke sebelah kiri badan Syafiqah yang menggunakan tangan kanan. Apakah kemahiran paling sesuai yang perlu dipilihnya sebelum bola menyentuh lantai?",
    "options": [
      "Servis bawah",
      "Menyangga bola",
      "Adangan belakang badan",
      "Voli kilas"
    ],
    "correctIndex": 3,
    "explanation": "Apabila bola datang ke sebelah bukan dominan (kiri bagi pemain tangan kanan) sebelum menyentuh lantai berdekatan jaring, pukulan voli kilas paling sesuai digunakan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 24"
  },
  {
    "id": "d6_pjpk_u4_s1_09",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Bagaimanakah cara terbaik untuk seorang pemain memastikan servisnya tepat ke sasaran di kawasan belakang gelanggang lawan?",
    "options": [
      "Menggunakan daya yang mencukupi sambil menyasarkan ruang kosong di bahagian belakang",
      "Menggunakan daya yang paling perlahan supaya bola jatuh berhampiran jaring",
      "Memukul bola secara mendatar dengan mata tertutup ke arah pengadang lawan",
      "Melakukan voli kilas sebaik sahaja bola melantun di gelanggang sendiri"
    ],
    "correctIndex": 0,
    "explanation": "Servis ke bahagian belakang memerlukan daya yang cukup kuat serta sasaran tepat ke ruang kosong di kawasan belakang gelanggang lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 22, 26"
  },
  {
    "id": "d6_pjpk_u4_s1_10",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Apakah perbezaan utama antara lakuan voli pepat dengan voli kilas dalam permainan kategori jaring?",
    "options": [
      "Voli pepat dilakukan selepas bola melantun, manakala voli kilas dilakukan sebelum bola melantun",
      "Voli pepat dilakukan di sebelah dominan badan, manakala voli kilas melibatkan kaki menyilang badan di sebelah bukan dominan",
      "Voli pepat hanya digunakan semasa servis, manakala voli kilas digunakan untuk adangan",
      "Voli pepat menggunakan belakang badan, manakala voli kilas menggunakan kaki"
    ],
    "correctIndex": 1,
    "explanation": "Kedua-dua voli dilakukan sebelum bola menyentuh gelanggang, tetapi voli pepat dilakukan pada sisi dominan manakala voli kilas dilakukan pada sisi bertentangan dengan gerak kaki menyilang badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 24, 26"
  },
  {
    "id": "d6_pjpk_u4_s2_01",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah tujuan utama kemahiran adangan dilakukan dalam permainan kategori jaring?",
    "options": [
      "Memulakan permainan dari garisan belakang",
      "Menyerahkan bola kepada pihak lawan secara percuma",
      "Menghalang bola rejaman lawan daripada masuk ke gelanggang sendiri",
      "Menukar giliran servis antara dua kumpulan"
    ],
    "correctIndex": 2,
    "explanation": "Adangan ialah kemahiran pertahanan untuk menghalang bola yang direjam oleh pihak lawan daripada melepasi jaring ke gelanggang sendiri.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_02",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Anggota badan manakah yang dibenarkan untuk melakukan adangan dalam permainan kategori jaring?",
    "options": [
      "Tangan, kaki dan kepala sahaja",
      "Kepala dan bahu sahaja",
      "Kaki dan lutut sahaja",
      "Tangan, kaki dan belakang badan"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut buku teks, anggota badan yang dibenarkan untuk melakukan adangan bergantung pada jenis permainan termasuklah tangan, kaki dan belakang badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25-26"
  },
  {
    "id": "d6_pjpk_u4_s2_03",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Bilakah masa yang paling baik untuk pemain pertahanan melonjak bagi melakukan adangan?",
    "options": [
      "Sejurus selepas pemain lawan mula melonjak untuk melakukan rejaman",
      "Selepas bola rejaman jatuh ke atas lantai gelanggang",
      "Sebelum pemain lawan menerima servis daripada pasukannya",
      "Ketika pengadil sedang mencatat mata di tepi gelanggang"
    ],
    "correctIndex": 0,
    "explanation": "Adangan yang lebih baik biasanya dilakukan sejurus selepas pemain pasukan lawan mula melonjak untuk melakukan rejaman.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_04",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Apakah yang perlu dilakukan oleh posisi badan pengadang ketika melompat untuk mengadang bola?",
    "options": [
      "Membuka ruang seluas-luasnya di hadapan jaring",
      "Menutup ruang kemungkinan bola yang telah direjam",
      "Berpaling membelakangkan gelanggang lawan sepenuhnya",
      "Merendahkan badan di belakang garisan servis"
    ],
    "correctIndex": 1,
    "explanation": "Posisi badan ketika adangan perlu menutup ruang kemungkinan laluan bola yang direjam oleh pihak lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_05",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Semakin kecil sudut adangan dengan jaring, semakin _______ sudut pantulan bola yang jatuh ke gelanggang lawan.",
    "options": [
      "besar",
      "jauh",
      "kecil",
      "tinggi"
    ],
    "correctIndex": 2,
    "explanation": "Semakin kecil sudut adangan dengan jaring, semakin kecil sudut pantulan bola yang jatuh ke gelanggang lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_06",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Fakhrul melakukan adangan dengan sudut yang kecil berhampiran jaring. Di kawasan manakah bola berkemungkinan besar akan jatuh di gelanggang lawan?",
    "options": [
      "Di luar garisan belakang gelanggang lawan",
      "Di sudut paling belakang gelanggang lawan",
      "Di belakang pengadil garisan tepi",
      "Di kawasan berdekatan jaring"
    ],
    "correctIndex": 3,
    "explanation": "Sudut adangan yang kecil menghasilkan sudut pantulan yang kecil, sekali gus meningkatkan peluang bola jatuh di kawasan berdekatan jaring gelanggang lawan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_07",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Dalam permainan sepak takraw, pemain lawan bersedia melakukan rejaman lipat. Apakah tindakan adangan yang betul dilakukan oleh pemain pertahanan?",
    "options": [
      "Melompat tinggi menggunakan belakang badan atau kaki untuk menutup ruang rejaman",
      "Menahan bola menggunakan kedua-dua tapak tangan di atas jaring",
      "Berlari ke garisan belakang sambil membongkokkan badan",
      "Menunggu bola melantun di lantai sebelum menyangga"
    ],
    "correctIndex": 0,
    "explanation": "Dalam sepak takraw, pemain tidak boleh menggunakan tangan, sebaliknya boleh melompat menggunakan belakang badan atau kaki untuk melakukan adangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_08",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Ira melompat untuk mengadang terlalu awal sebelum penyerang lawan mula melonjak. Apakah kesan yang mungkin berlaku?",
    "options": [
      "Sudut pantulan bola menjadi semakin kecil",
      "Ira sudah mula turun ketika lawan baru memukul bola, lalu ruang rejaman terbuka",
      "Pasukan Ira terus mendapat satu mata kemenangan",
      "Bola akan terhenti di udara tanpa melepasi jaring"
    ],
    "correctIndex": 1,
    "explanation": "Jika melonjak terlalu awal, pengadang akan mula turun sebelum bola direjam dan gagal menutup ruang rejaman dengan berkesan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_09",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Seorang murid melakukan adangan pertama paling rapat dengan jaring, kemudian bergerak selangkah ke belakang untuk melakukan adangan kedua. Apakah perbezaan pergerakan bola jatuh antara kedua-dua situasi tersebut?",
    "options": [
      "Adangan kedua menghasilkan bola jatuh lebih rapat dengan jaring berbanding adangan pertama",
      "Kedua-dua adangan menyebabkan bola sentiasa keluar dari gelanggang",
      "Adangan pertama yang rapat dengan jaring menyebabkan bola jatuh lebih dekat dengan jaring lawan berbanding adangan kedua",
      "Adangan kedua menjadikan sudut adangan dengan jaring lebih kecil daripada adangan pertama"
    ],
    "correctIndex": 2,
    "explanation": "Adangan paling rapat dengan jaring menghasilkan sudut adangan dan sudut pantulan yang lebih kecil, jadi bola jatuh lebih dekat dengan jaring berbanding apabila mengadang selangkah ke belakang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25"
  },
  {
    "id": "d6_pjpk_u4_s2_10",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Dua orang pengadang melompat serentak. Pengadang X menutup ruang arah rejaman sejurus lawan melonjak, manakala Pengadang Y melonjak lewat dan tidak menutup ruang. Situasi adangan manakah yang lebih baik dan mengapa?",
    "options": [
      "Pengadang Y lebih baik kerana dia dapat melihat keseluruhan gelanggang dari bawah",
      "Kedua-duanya sama baik selagi mereka berada berdekatan dengan jaring",
      "Pengadang Y lebih baik kerana lompatan lewat mengelakkan sentuhan dengan jaring",
      "Pengadang X lebih baik kerana masa lonjakan dan posisi badannya berjaya menutup ruang rejaman lawan"
    ],
    "correctIndex": 3,
    "explanation": "Adangan yang berkesan memerlukan masa lonjakan sejurus lawan mula melonjak serta posisi badan yang menutup ruang kemungkinan bola direjam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 25-26"
  },
  {
    "id": "d6_pjpk_u5_s1_01",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan kemahiran asas dalam permainan kategori pukul dan memadang?",
    "options": [
      "Membaling, menangkap, memukul, menahan dan berlari",
      "Menyangga, mengumpan, merejam dan mengadang",
      "Menggelecek, menanduk, menjaring dan menendang",
      "Melompat jauh, melompat tinggi dan berjalan kaki"
    ],
    "correctIndex": 0,
    "explanation": "Kemahiran asas permainan kategori pukul dan memadang merangkumi membaling, menangkap, memukul, menahan serta melakukan larian.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 27, 32"
  },
  {
    "id": "d6_pjpk_u5_s1_02",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan pemasaan (timing) dalam kemahiran memukul bola yang dibaling?",
    "options": [
      "Tempoh masa rehat antara dua pusingan permainan",
      "Keselarasan masa antara kelajuan bola yang dibaling dengan ayunan pemukul",
      "Bilangan langkah larian dari satu tapak ke tapak yang lain",
      "Masa yang diambil oleh pemadang untuk menukar giliran"
    ],
    "correctIndex": 1,
    "explanation": "Pemasaan (timing) ialah keselarasan antara kelajuan bola yang dibaling dengan masa mengayun bet bagi mendapatkan pukulan yang tepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29"
  },
  {
    "id": "d6_pjpk_u5_s1_03",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Apakah yang perlu dilakukan oleh seorang pembaling sekiranya ingin menghantar bola dengan laju ke arah pemukul?",
    "options": [
      "Mengurangkan ayunan tangan semasa melepaskan bola",
      "Membaling bola dengan aras yang terlalu tinggi",
      "Menambah daya yang kuat semasa melakukan balingan",
      "Berdiri diam tanpa menggerakkan bahu dan kaki"
    ],
    "correctIndex": 2,
    "explanation": "Pembaling perlu menambah daya yang kuat untuk menghantar bola laju ke arah pemukul.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29, 32"
  },
  {
    "id": "d6_pjpk_u5_s1_04",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Bagaimanakah kelajuan ayunan bet yang sesuai apabila seorang pemukul menerima balingan bola yang laju?",
    "options": [
      "Mengayun bet dengan sangat perlahan",
      "Memberhentikan bet di belakang badan",
      "Melepaskan bet sebelum bola tiba",
      "Mengayun bet dengan lebih pantas"
    ],
    "correctIndex": 3,
    "explanation": "Apabila menerima balingan bola laju, pemukul perlu mengayun bet lebih pantas supaya pemasaan pukulan tepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29"
  },
  {
    "id": "d6_pjpk_u5_s1_05",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Mengapakah kemahiran menahan bola dengan alat pemukul digunakan dalam permainan kategori pukul dan memadang?",
    "options": [
      "Untuk mengelirukan pihak lawan dengan meletakkan bola di kawasan dekat",
      "Untuk memukul bola setinggi mungkin ke luar padang",
      "Untuk memastikan bola sentiasa bergerak ke belakang pemukul",
      "Untuk menggantikan tugas penjaga tapak"
    ],
    "correctIndex": 0,
    "explanation": "Menahan bola dengan alatan pemukul boleh mengelirukan pihak lawan kerana bola hanya bergerak perlahan dan jatuh berhampiran zon hadapan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 30"
  },
  {
    "id": "d6_pjpk_u5_s1_06",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Semasa menahan bola yang dibaling laju, Alex perlu menyerap daya kelajuan pada kayu pemukul. Apakah tujuan tindakan serap daya tersebut?",
    "options": [
      "Untuk menambah kelajuan bola supaya pergi lebih jauh",
      "Untuk mengurangkan kelajuan lantunan bola pada kayu pemukul",
      "Untuk mematahkan kayu pemukul ketika menyentuh bola",
      "Untuk memastikan bola melambung tinggi ke udara"
    ],
    "correctIndex": 1,
    "explanation": "Menyerap daya kelajuan semasa menahan bola bertujuan mengurangkan kelajuan lantunan bola pada kayu pemukul agar bola jatuh berhampiran zon sasaran.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 30"
  },
  {
    "id": "d6_pjpk_u5_s1_07",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Dalam latihan memukul bola yang dibaling perlahan, bagaimanakah sepatutnya kelajuan ayunan bet pemukul?",
    "options": [
      "Ayun bet sekuat-kuatnya tanpa melihat bola",
      "Ayun bet lebih pantas sebelum pembaling melepaskan bola",
      "Kawal kelajuan ayunan supaya tidak terlalu awal dan selaras dengan ketibaan bola perlahan",
      "Pegang bet secara menegak di tepi kaki sahaja"
    ],
    "correctIndex": 2,
    "explanation": "Kelajuan ayunan bet perlu disesuaikan dengan kelajuan bola; bagi bola perlahan, pemukul perlu mengawal ayunan agar pemasaan (timing) tepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29"
  },
  {
    "id": "d6_pjpk_u5_s1_08",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Apakah langkah yang perlu dilakukan oleh pemukul semasa menahan bola supaya bola menuju ke zon markah yang diingini?",
    "options": [
      "Memusingkan badan membelakangi pembaling",
      "Mengayun pemukul dengan daya maksimum ke atas",
      "Menutup mata sejurus sebelum bola menyentuh kayu",
      "Menghalakan permukaan pemukul ke arah yang dikehendaki"
    ],
    "correctIndex": 3,
    "explanation": "Untuk mengawal arah bola yang ditahan, pemukul perlu menghalakan permukaan pemukul ke arah kawasan yang dikehendaki sambil menyerap daya.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 30"
  },
  {
    "id": "d6_pjpk_u5_s1_09",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Apakah yang akan berlaku sekiranya seorang pemukul tidak menyerap daya semasa menahan bola yang dibaling laju dengan alat pemukul?",
    "options": [
      "Bola akan melantun laju dan bergerak jauh ke arah pemadang, sekali gus memudahkan pemadang menangkapnya",
      "Bola akan berhenti terus di atas tanah di hadapan kaki pemukul",
      "Bola akan bertukar arah menjadi balingan perlahan secara automatik",
      "Pemukul akan mendapat mata bonus kerana bola tidak bergerak"
    ],
    "correctIndex": 0,
    "explanation": "Tanpa serapan daya, bola yang dibaling laju akan melantun dengan kelajuan tinggi dan bergerak jauh ke kawasan pemadang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 30, 32"
  },
  {
    "id": "d6_pjpk_u5_s1_10",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Gurjit Singh perlu melakukan tiga jenis balingan iaitu balingan laju, sederhana dan perlahan secara berturut-turut. Bagaimanakah penggunaan daya yang betul untuk ketiga-tiga balingan tersebut?",
    "options": [
      "Daya paling kecil untuk balingan laju, daya sederhana untuk balingan sederhana, daya paling kuat untuk balingan perlahan",
      "Daya paling kuat untuk balingan laju, daya sederhana untuk balingan sederhana, daya paling kecil untuk balingan perlahan",
      "Daya yang sama kuat digunakan untuk ketiga-tiga jenis balingan",
      "Daya hanya diperlukan untuk balingan perlahan sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Kelajuan balingan berkadar terus dengan daya yang digunakan: daya kuat menghasilkan balingan laju, daya sederhana untuk balingan sederhana, dan daya kecil untuk balingan perlahan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29, 32"
  },
  {
    "id": "d6_pjpk_u5_s2_01",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Apakah tujuan utama kemahiran menangkap bola dengan kemas oleh pasukan pemadang?",
    "options": [
      "Untuk membolehkan pemukul berlari dengan lebih selesa",
      "Untuk menamatkan permainan sebelum semua ahli memukul",
      "Untuk mematikan pemukul atau pelari pasukan lawan",
      "Untuk memberikan mata tambahan kepada pasukan pemukul"
    ],
    "correctIndex": 2,
    "explanation": "Kemahiran menangkap bola yang kemas dapat mematikan pemukul atau pelari sekiranya bola pukulan ditangkap terlebih dahulu.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_02",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Manakah antara berikut merupakan senarai peralatan asas yang diperlukan dalam permainan sofbol?",
    "options": [
      "Raket, bulu tangkis, jaring dan tiang",
      "Kayu hoki, bola keras dan pelindung tulang kering",
      "Bola takraw, jaring tinggi dan kasut kanvas",
      "Bola kecil (11–12 inci), pemukul, sarung tangan dan helmet"
    ],
    "correctIndex": 3,
    "explanation": "Peralatan asas sofbol ialah bola kecil berukuran lilit 11–12 inci, pemukul, sarung tangan dan helmet.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_03",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Mengapakah pemadang perlu melakukan serap daya semasa menangkap bola yang dipukul laju?",
    "options": [
      "Untuk mengurangkan kelajuan bola semasa menangkapnya",
      "Untuk melantunkan bola semula ke arah pemukul",
      "Untuk menambah jarak larian pelari tapak",
      "Untuk menukar zon memadang dengan cepat"
    ],
    "correctIndex": 0,
    "explanation": "Serap daya mengurangkan hentakan dan kelajuan bola ketika ditangkap supaya bola tidak terlepas daripada tangan atau sarung tangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_04",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Bagaimanakah cara pasukan pemukul memperoleh mata dalam permainan kategori pukul dan memadang?",
    "options": [
      "Dengan menangkap bola yang dibaling oleh rakan",
      "Dengan memukul bola dan melakukan larian tapak",
      "Dengan meletakkan bola di atas tee tanpa berlari",
      "Dengan membaling bola keluar dari kawasan zon"
    ],
    "correctIndex": 1,
    "explanation": "Pemukul akan berusaha mendapatkan mata menerusi larian tapak selepas melakukan pukulan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 28-29, 31"
  },
  {
    "id": "d6_pjpk_u5_s2_05",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Bilakah dua kumpulan dalam permainan kategori pukul dan memadang akan bertukar peranan?",
    "options": [
      "Selepas seorang sahaja ahli kumpulan membuat pukulan",
      "Sebaik sahaja bola pertama ditangkap oleh pemadang",
      "Setelah semua ahli kumpulan pemukul selesai melakukan pukulan",
      "Apabila pemadang berjaya membuat satu balingan lurus"
    ],
    "correctIndex": 2,
    "explanation": "Dalam permainan latihan kelas seperti Kami Juara dan Pukulan Pantas, kedua-dua kumpulan bertukar peranan setelah semua ahli kumpulan pemukul selesai melakukan pukulan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 28-29"
  },
  {
    "id": "d6_pjpk_u5_s2_06",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Dalam permainan Penangkap Hebat (Unit 5), bola yang dipukul melambung jauh ke kawasan paling belakang iaitu Zon 1. Apakah jenis tangkapan dan balingan yang perlu dilakukan oleh pemadang di zon tersebut?",
    "options": [
      "Menangkap dan melakukan balingan rendah atau leret",
      "Menangkap dan melakukan balingan lurus",
      "Menahan bola dengan kayu pemukul di tepi garisan",
      "Menangkap dan melakukan balingan tinggi serta jauh"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut pembahagian zon dalam Penangkap Hebat, Zon 1 melibatkan menangkap serta balingan tinggi dan jauh, Zon 2 balingan lurus, dan Zon 3 balingan rendah/leret.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_07",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Seorang pemukul berjaya memukul bola dengan kuat tetapi bola tersebut melambung dan terus ditangkap oleh pemadang di udara sebelum menyentuh tanah. Apakah status pemukul itu?",
    "options": [
      "Pemukul dikira mati",
      "Pemukul mendapat tiga mata penuh",
      "Pemukul perlu mengulang pukulan dari atas tee",
      "Pemukul bertukar menjadi pembaling serta-merta"
    ],
    "correctIndex": 0,
    "explanation": "Pemukul atau pelari dikira mati jika bola pukulan terlebih dahulu ditangkap oleh pemadang sebelum menyentuh tanah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_08",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Bola pukulan bergerak leret di atas padang menuju ke Zon 3. Apakah kemahiran yang perlu digunakan oleh pemadang untuk menguasai bola tersebut?",
    "options": [
      "Menangkap bola tinggi di atas kepala",
      "Menangkap bola rendah dan melakukan balingan rendah atau leret",
      "Melompat tinggi dan menepis bola dengan sebelah kaki",
      "Menunggu bola berhenti sendiri sebelum berlari ke tapak"
    ],
    "correctIndex": 1,
    "explanation": "Di Zon 3, pemadang perlu menangkap bola rendah dan melakukan balingan rendah atau leret.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_09",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Mengapakah pemasaan (timing) dan serap daya perlu digabungkan semasa menangkap bola lurus yang dipukul laju di Zon 2?",
    "options": [
      "Supaya bola dapat dipukul semula ke arah pemukul tanpa berhenti",
      "Supaya pemadang tidak perlu memakai sarung tangan atau helmet",
      "Supaya tangan dapat menangkap bola tepat pada masanya dan mengurangkan kelajuan bola agar tidak terlepas",
      "Supaya bola melantun keluar daripada sarung tangan ke arah tapak"
    ],
    "correctIndex": 2,
    "explanation": "Pemasaan yang tepat membolehkan tangan menutup bola pada waktu yang betul, manakala serap daya mengurangkan kelajuan bola agar tangkapan kekal kemas.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 31"
  },
  {
    "id": "d6_pjpk_u5_s2_10",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Dalam permainan Pukulan Pantas, Kumpulan A mengumpul 14 mata dan Kumpulan B mengumpul 11 mata setelah kedua-dua kumpulan selesai memukul dan memadang. Apakah keputusan permainan itu dan faktor utama kejayaan Kumpulan A?",
    "options": [
      "Kumpulan B menang kerana berjaya membaling dengan daya yang lebih perlahan",
      "Permainan seri kerana kedua-dua kumpulan telah bertukar peranan sekali",
      "Kumpulan A menang kerana mereka tidak perlu berlari ke tapak selepas memukul",
      "Kumpulan A menang kerana mengumpul mata tertinggi hasil pukulan tepat dan larian tapak yang berjaya"
    ],
    "correctIndex": 3,
    "explanation": "Kumpulan yang mengumpul mata tertinggi ialah pemenang, dan mata diperoleh melalui pukulan tepat serta larian terus ke tapak tanpa dimatikan oleh pemadang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 29, 31"
  },
  {
    "id": "d6_pjpk_u6_s1_01",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah jarak dan bilangan halangan bagi acara lari berpagar kategori 12 tahun ke bawah mengikut peraturan MSSM?",
    "options": [
      "80 meter dengan lapan halangan berketinggian 0.762 meter",
      "100 meter dengan sepuluh halangan berketinggian 1.00 meter",
      "60 meter dengan enam halangan berketinggian 0.50 meter",
      "200 meter dengan lima halangan berketinggian 0.90 meter"
    ],
    "correctIndex": 0,
    "explanation": "Jarak acara lari berpagar 12 tahun ke bawah ialah sejauh 80 meter dengan menggunakan lapan halangan berketinggian 0.762 meter.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 34"
  },
  {
    "id": "d6_pjpk_u6_s1_02",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah jarak acara lumba jalan kaki yang dipertandingkan di peringkat sekolah rendah bagi kategori lelaki dan perempuan 12 tahun ke bawah?",
    "options": [
      "800 meter",
      "2000 meter",
      "5000 meter",
      "400 meter"
    ],
    "correctIndex": 1,
    "explanation": "Acara sukan lumba jalan kaki yang dipertandingkan di peringkat sekolah rendah ialah 2000 meter untuk kategori lelaki dan perempuan 12 tahun ke bawah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 37"
  },
  {
    "id": "d6_pjpk_u6_s1_03",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah bentuk larian landas yang digunakan dalam lompat tinggi gaya Fosbury Flop?",
    "options": [
      "Larian berbentuk zig-zag",
      "Larian bulat mengelilingi tilam",
      "Larian landas berbentuk huruf \"J\"",
      "Larian mengundur dari palang"
    ],
    "correctIndex": 2,
    "explanation": "Lompat tinggi gaya Fosbury Flop menggunakan teknik larian landas berbentuk \"J\" sebelum melonjak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 41"
  },
  {
    "id": "d6_pjpk_u6_s1_04",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Bahagian badan manakah yang sepatutnya mendarat di atas tilam dalam aktiviti lompat tinggi gaya Fosbury Flop?",
    "options": [
      "Kedua-dua belah tapak kaki secara menegak",
      "Bahagian hadapan muka dan dahi",
      "Kedua-dua belah siku yang diluruskan",
      "Bahagian bahu diikuti guling ke belakang"
    ],
    "correctIndex": 3,
    "explanation": "Untuk mengurangkan hentakan dalam gaya Fosbury Flop, murid mesti cuba mendarat pada bahunya dan menggunakan guling ke belakang untuk menyerap kesan jatuhan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 40, 46"
  },
  {
    "id": "d6_pjpk_u6_s1_05",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Apakah langkah keselamatan yang perlu dipastikan di kawasan pendaratan lompat jauh sebelum murid melakukan lompatan?",
    "options": [
      "Pasir untuk mendarat digembur dan diratakan",
      "Kawasan pasir disiram air sehingga bertakung",
      "Tilam tebal diletakkan di atas landasan larian",
      "Batu kecil ditaburkan di dalam petak pasir"
    ],
    "correctIndex": 0,
    "explanation": "Pasir untuk mendarat perlu digembur dan diratakan sebelum melakukan lompatan bagi mengelakkan kecederaan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 39"
  },
  {
    "id": "d6_pjpk_u6_s1_06",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Mengapakah seorang pelari beritma perlu menggunakan jumlah langkah yang konsisten dari satu halangan ke satu halangan?",
    "options": [
      "Supaya pelari dapat berhenti rehat sebelum setiap halangan",
      "Supaya pergerakan larian beritma menjadi lancar dan kelajuan kekal terkawal",
      "Supaya jarak antara halangan bertambah jauh secara semula jadi",
      "Supaya kaki dapat melangkah serapat mungkin dengan halangan"
    ],
    "correctIndex": 1,
    "explanation": "Penetapan jumlah langkah yang konsisten dari satu halangan ke satu halangan melancarkan pergerakan larian beritma dan mengekalkan kelajuan larian.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 34-35"
  },
  {
    "id": "d6_pjpk_u6_s1_07",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Semasa melakukan lumba jalan kaki, apakah peraturan asas bagi pergerakan kaki hadapan dan kaki belakang?",
    "options": [
      "Kedua-dua kaki mesti berada di udara serentak pada setiap langkah",
      "Lutut kaki hadapan mesti dibengkokkan semasa tumit mencecah tanah",
      "Kaki hadapan lurus semasa tumit mencecah permukaan dan kaki belakang tidak terangkat sebelum tumit hadapan mencecah permukaan",
      "Tumit kaki belakang diangkat tinggi terlebih dahulu sebelum melangkah"
    ],
    "correctIndex": 2,
    "explanation": "Dalam teknik jalan kaki yang betul, kaki di hadapan hendaklah lurus semasa tumit mencecah permukaan dan kaki di belakang tidak boleh terangkat sebelum tumit kaki hadapan mencecah permukaan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 37"
  },
  {
    "id": "d6_pjpk_u6_s1_08",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Dalam lompat tinggi gaya Fosbury Flop, murid diingatkan supaya merapatkan dagu ke dada dan menutup mulut semasa mendarat. Mengapakah langkah ini penting?",
    "options": [
      "Supaya lompatan mendapat jarak mendatar yang lebih jauh",
      "Supaya pelompat dapat melihat rakan di belakang landasan",
      "Supaya kelajuan larian landas berbentuk J meningkat",
      "Supaya tidak tergigit lidah dan mengurangkan risiko kecederaan leher"
    ],
    "correctIndex": 3,
    "explanation": "Dagu dirapatkan pada dada untuk bersedia berguling ke belakang dengan selamat, manakala mulut mesti ditutup supaya tidak tergigit lidah semasa hentakan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 40"
  },
  {
    "id": "d6_pjpk_u6_s1_09",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Apakah yang akan berlaku sekiranya seorang murid menyertai aktiviti berjalan kaki dalam tempoh yang lama tanpa minum air kosong secukupnya?",
    "options": [
      "Murid berisiko mengalami kekejangan otot akibat dehidrasi",
      "Sudut rotasi pinggul murid akan mengecil secara automatik",
      "Langkah kaki murid akan menjadi semakin panjang dan laju",
      "Otot kaki murid menjadi lebih kuat serta tidak mudah letih"
    ],
    "correctIndex": 0,
    "explanation": "Peserta lumba jalan kaki yang berjalan dalam tempoh lama tanpa minum air kosong secukupnya sebelum, semasa dan selepas aktiviti berisiko mendapat kekejangan otot akibat dehidrasi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 36, 46"
  },
  {
    "id": "d6_pjpk_u6_s1_10",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "Zhafran ingin memperoleh jarak lompatan yang jauh dalam acara lompat jauh, tetapi lonjakannya terlalu tinggi ke atas. Mengapakah lonjakan tersebut tidak membantunya?",
    "options": [
      "Kerana larian landas hanya berguna untuk acara lompat tinggi",
      "Kerana lonjakan yang terlalu tinggi mengurangkan pergerakan ke hadapan dan tidak membantu meningkatkan jarak",
      "Kerana ayunan tangan hanya diperlukan selepas mendarat di atas pasir",
      "Kerana pasir yang digembur mengurangkan kuasa tolakan kaki"
    ],
    "correctIndex": 1,
    "explanation": "Lonjakan yang terlalu tinggi tidak membantu meningkatkan jarak lompat jauh; jarak yang baik dipengaruhi oleh larian pantas, lonjakan (take off), sudut lonjakan yang sesuai, dan ayunan tangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 38-39"
  },
  {
    "id": "d6_pjpk_u6_s2_01",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah susunan empat fasa yang betul dalam acara merejam objek berbentuk rod?",
    "options": [
      "Fasa Ikut Lajak, Fasa Rejaman, Fasa Lari Landas, Fasa Persediaan",
      "Fasa Lari Landas, Fasa Persediaan, Fasa Ikut Lajak, Fasa Rejaman",
      "Fasa Persediaan, Fasa Lari Landas, Fasa Rejaman, Fasa Ikut Lajak",
      "Fasa Persediaan, Fasa Putaran, Fasa Rotasi, Fasa Pelepasan"
    ],
    "correctIndex": 2,
    "explanation": "Empat fasa acara merejam objek berbentuk rod mengikut urutan ialah Fasa Persediaan, Fasa Lari Landas, Fasa Rejaman dan Fasa Ikut Lajak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 42"
  },
  {
    "id": "d6_pjpk_u6_s2_02",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Berapakah sudut pelepasan yang sesuai semasa merejam objek berbentuk rod untuk mendapatkan jarak rejaman yang baik?",
    "options": [
      "10° hingga 15°",
      "60° hingga 75°",
      "80° hingga 90°",
      "30° hingga 40°"
    ],
    "correctIndex": 3,
    "explanation": "Objek berbentuk rod perlu dilepaskan pada sudut yang sesuai iaitu antara 30° hingga 40°.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 42"
  },
  {
    "id": "d6_pjpk_u6_s2_03",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah empat fasa yang terdapat dalam acara membaling objek berbentuk sfera bertali?",
    "options": [
      "Fasa Persediaan, Fasa Putaran, Fasa Rotasi, Fasa Pelepasan",
      "Fasa Persediaan, Fasa Lari Landas, Fasa Rejaman, Fasa Ikut Lajak",
      "Fasa Larian, Fasa Lonjakan, Fasa Layangan, Fasa Pendaratan",
      "Fasa Permulaan, Fasa Hayunan, Fasa Melompat, Fasa Berhenti"
    ],
    "correctIndex": 0,
    "explanation": "Acara membaling objek berbentuk sfera bertali terdiri daripada empat fasa iaitu Fasa Persediaan, Fasa Putaran, Fasa Rotasi dan Fasa Pelepasan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 44, 46"
  },
  {
    "id": "d6_pjpk_u6_s2_04",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Pada sudut berapakah objek berbentuk sfera bertali perlu dilepaskan apabila kelajuan pusingan badan berada pada tahap maksimum?",
    "options": [
      "15°",
      "40°",
      "75°",
      "90°"
    ],
    "correctIndex": 1,
    "explanation": "Objek berbentuk sfera bertali dilepaskan apabila kelajuan pusingan badan mencapai tahap maksimum iaitu pada sudut 40° sambil mengawal keseimbangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 44"
  },
  {
    "id": "d6_pjpk_u6_s2_05",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Apakah amalan keselamatan yang wajib dipatuhi semasa membawa objek berbentuk rod selepas melakukan rejaman?",
    "options": [
      "Berlari pantas sambil melambung objek ke udara",
      "Menghalakan mata objek ke arah rakan di hadapan",
      "Jangan membawa objek berbentuk rod dengan matanya menghala ke atas",
      "Memegang bahagian hujung objek dan mengheretnya di atas trek"
    ],
    "correctIndex": 2,
    "explanation": "Langkah keselamatan yang ditetapkan ialah jangan membawa objek berbentuk rod dengan matanya ke atas serta sentiasa memastikan ruang rejaman selamat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 43"
  },
  {
    "id": "d6_pjpk_u6_s2_06",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Dalam fasa rotasi acara membaling objek berbentuk sfera bertali, mengapakah pelontar perlu membawa berat badannya berlawanan dengan kedudukan objek tersebut?",
    "options": [
      "Supaya objek jatuh terus di hadapan kaki pelontar",
      "Supaya pelontar dapat berhenti berpusing serta-merta",
      "Supaya kaki hadapan tidak perlu dijadikan penahan",
      "Supaya keseimbangan badan kekal terkawal semasa melakukan pusingan pantas"
    ],
    "correctIndex": 3,
    "explanation": "Membawa berat badan berlawanan dengan kedudukan objek semasa rotasi membantu mengekalkan imbangan badan ketika berpusing dengan kaki sebagai penahan (pivot).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 44"
  },
  {
    "id": "d6_pjpk_u6_s2_07",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Apakah fungsi menekan tumit kaki hadapan ke tanah serta menyilangkan tangan selepas melepaskan objek dalam fasa ikut lajak acara merejam objek berbentuk rod?",
    "options": [
      "Menghentikan larian ke hadapan dan menstabilkan kedudukan badan",
      "Menambah sudut pelepasan objek menjadi lebih daripada 60°",
      "Memulakan fasa persediaan untuk rejaman kedua secara terus",
      "Mengelakkan mata daripada melihat arah sasaran"
    ],
    "correctIndex": 0,
    "explanation": "Dalam fasa ikut lajak, menekan tumit kaki hadapan ke tanah dapat menghentikan larian manakala merendahkan badan dan menyilangkan tangan membantu menstabilkan imbangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 42"
  },
  {
    "id": "d6_pjpk_u6_s2_08",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Dalam acara membaling objek berbentuk sfera bertali, berapakah bilangan pusingan badan yang biasa dilakukan semasa fasa rotasi dan apakah peranan kaki semasa berpusing?",
    "options": [
      "1 pusingan sahaja dengan kedua-dua kaki melompat serentak",
      "3 atau 4 kali pusingan mengikut kesesuaian dengan kaki bertindak sebagai penahan (pivot)",
      "10 kali pusingan sambil berjalan ke hadapan",
      "2 pusingan sambil duduk di atas lantai"
    ],
    "correctIndex": 1,
    "explanation": "Dalam fasa rotasi, badan dipusingkan sebanyak 3 atau 4 kali mengikut kesesuaian dengan kaki bertindak sebagai penahan (pivot).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 44"
  },
  {
    "id": "d6_pjpk_u6_s2_09",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Edward melepaskan objek berbentuk rod pada sudut yang terlalu tinggi ke udara. Bagaimanakah jarak rejaman yang terhasil dan mengapa keadaan ini berlaku?",
    "options": [
      "Jarak rejaman menjadi paling jauh kerana objek berada lebih lama di udara",
      "Jarak rejaman tidak berubah kerana sudut pelepasan tidak memberi sebarang kesan",
      "Jarak rejaman menjadi tidak jauh kerana objek pergi terlalu tinggi dan dipengaruhi rintangan udara",
      "Jarak rejaman bertambah dua kali ganda kerana daya graviti berkurangan"
    ],
    "correctIndex": 2,
    "explanation": "Jika dilepaskan terlalu tinggi, objek akan pergi terlalu tinggi dan tidak jauh kerana kesan rintangan udara serta kekurangan komponen pergerakan mendatar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 43, 46"
  },
  {
    "id": "d6_pjpk_u6_s2_10",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Semasa fasa pelepasan objek berbentuk sfera bertali, Jason meluruskan kaki hadapan, memfleksikan sedikit kaki belakang, melentikkan belakang badan dan mengayun tangan ke atas dengan laju. Apakah kesan gabungan lakuan ini terhadap balingannya?",
    "options": [
      "Menjadikan kelajuan pusingan berkurang sebelum pelepasan",
      "Menyebabkan objek terlepas ke belakang garisan balingan",
      "Mengelakkan objek daripada melayang melepasi jarak 5 meter",
      "Menghasilkan daya dan kelajuan maksimum pada sudut pelepasan yang sesuai untuk balingan jauh"
    ],
    "correctIndex": 3,
    "explanation": "Gabungan lakuan kaki hadapan lurus, kaki belakang sedikit fleksi, lentikan belakang badan dan ayunan tangan pantas ke atas menyalurkan kuasa maksimum ketika pelepasan pada sudut 40°.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 44-45"
  },
  {
    "id": "d6_pjpk_u7_s1_01",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Apakah ciri utama alatan yang sesuai digunakan untuk menyelamatkan mangsa lemas secara serta-merta di dalam kolam?",
    "options": [
      "Mudah terapung dan ringan",
      "Berat dan mudah tenggelam",
      "Diperbuat daripada logam padu",
      "Bersaiz sangat kecil dan tajam"
    ],
    "correctIndex": 0,
    "explanation": "Alatan bantuan menyelamat di air seperti bola, tong bertali, pool noodle, dan papan keribas mestilah mudah terapung dan ringan supaya dapat membantu mangsa kekal terapung.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48"
  },
  {
    "id": "d6_pjpk_u7_s1_02",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan alat bantuan menyelamat di air yang boleh digunakan dalam situasi kecemasan di kolam?",
    "options": [
      "Batu bata",
      "Pool noodle",
      "Kasut kulit",
      "Bola boling"
    ],
    "correctIndex": 1,
    "explanation": "Pool noodle ialah alat yang ringan dan mudah terapung, menjadikannya sesuai sebagai alat bantuan menyelamat di dalam kolam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48"
  },
  {
    "id": "d6_pjpk_u7_s1_03",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Mengapakah kita dilarang terjun terus ke dalam kolam untuk menyelamatkan mangsa tanpa membuat pemerhatian terlebih dahulu?",
    "options": [
      "Supaya air kolam tidak menjadi keruh",
      "Kerana pakaian renang boleh menjadi rosak",
      "Kerana kita mungkin tidak mengetahui kedalaman kolam",
      "Supaya mangsa dapat berenang sendiri ke tepi"
    ],
    "correctIndex": 2,
    "explanation": "Kita tidak boleh terjun ke dalam kolam tanpa mengetahui kedalaman kolam kerana perbuatan itu boleh membahayakan keselamatan diri penyelamat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48"
  },
  {
    "id": "d6_pjpk_u7_s1_04",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Dalam teknik Egg Beater Kick semasa menjejak air, bagaimanakah pergerakan kedua-dua belah kaki dilakukan?",
    "options": [
      "Digerakkan lurus ke atas dan ke bawah serentak",
      "Dirapatkan dan tidak digerakkan langsung",
      "Ditendang ke belakang seperti katak serentak",
      "Dikuakkan secara rotasi berlainan arah"
    ],
    "correctIndex": 3,
    "explanation": "Dalam teknik Egg Beater Kick, kedua-dua belah kaki dikuakkan secara rotasi berlainan arah manakala sendi lutut dan pergelangan kaki digerakkan secara longgar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 49"
  },
  {
    "id": "d6_pjpk_u7_s1_05",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Bagaimanakah kedudukan badan semasa melakukan teknik Tendang Keribas Menegak untuk mengekalkan apungan?",
    "options": [
      "Seperti menunggang basikal",
      "Menelentang rata di permukaan air",
      "Meniarap dengan tangan lurus ke hadapan",
      "Membongkok sepenuhnya ke dasar kolam"
    ],
    "correctIndex": 0,
    "explanation": "Semasa melakukan teknik Tendang Keribas Menegak, kedudukan badan adalah seperti menunggang basikal dengan kedua-dua belah kaki menendang secara menegak dan berselang-seli.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 49"
  },
  {
    "id": "d6_pjpk_u7_s1_06",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Seorang rakan tergelincir dan kelihatan lemas berhampiran tebing atau tepi kolam. Apakah teknik menyelamat serta-merta yang paling sesuai digunakan?",
    "options": [
      "Membaling batu ke arahnya sebagai isyarat",
      "Menghulur alat bantuan menyelamat seperti kayu panjang atau tuala",
      "Terjun terus ke dalam kolam untuk memeluknya",
      "Menunggu sehingga mangsa hanyut ke tengah kolam"
    ],
    "correctIndex": 1,
    "explanation": "Jika mangsa berada dekat di tepi kolam, teknik menghulur (reaching rescue) menggunakan alat bantuan seperti kayu panjang, tuala, atau papan keribas adalah paling sesuai.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48, 52"
  },
  {
    "id": "d6_pjpk_u7_s1_07",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Mengapakah penyelamat perlu merendahkan badan ketika menarik mangsa menggunakan teknik menghulur di tepi kolam?",
    "options": [
      "Supaya penyelamat dapat melihat dasar kolam dengan jelas",
      "Supaya mangsa tidak berasa segan ketika ditarik",
      "Supaya kedudukan penyelamat lebih stabil dan tidak tertarik ke dalam air",
      "Supaya alat bantuan menyelamat menjadi lebih berat"
    ],
    "correctIndex": 2,
    "explanation": "Merendahkan badan menjadikan pusat graviti lebih rendah dan kedudukan penyelamat lebih stabil ketika menarik mangsa supaya penyelamat tidak turut terjatuh ke dalam kolam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48"
  },
  {
    "id": "d6_pjpk_u7_s1_08",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Apakah persamaan penting pada pergerakan sendi lutut dan pergelangan kaki antara teknik Egg Beater Kick dengan teknik Tendang Keribas Menegak?",
    "options": [
      "Kedua-duanya memerlukan sendi dikunci dengan ketat",
      "Kedua-duanya hanya menggunakan pergerakan jari kaki",
      "Kedua-duanya tidak melibatkan pergerakan lutut",
      "Kedua-duanya memerlukan sendi lutut dan pergelangan kaki digerakkan secara longgar"
    ],
    "correctIndex": 3,
    "explanation": "Dalam kedua-dua teknik menjejak air tersebut, sendi pada lutut dan pergelangan kaki perlu digerakkan secara longgar bagi menghasilkan apungan yang berkesan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 49"
  },
  {
    "id": "d6_pjpk_u7_s1_09",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Amir ternampak seorang kanak-kanak hampir lemas di tengah kolam yang jauh dari jangkauan tangan atau kayu. Alat dan teknik manakah yang paling tepat untuk digunakan oleh Amir?",
    "options": [
      "Membaling tong bertali atau bola ke arah mangsa (throwing rescue)",
      "Menghulurkan tuala dari tepi kolam (reaching rescue)",
      "Terjun ke dalam kolam dengan segera tanpa alat bantuan",
      "Menggunakan papan keribas untuk menghulur dari tepi kolam"
    ],
    "correctIndex": 0,
    "explanation": "Apabila mangsa berada jauh di tengah kolam, teknik membaling (throwing rescue) menggunakan alat mudah terapung seperti tong bertali atau bola membolehkan bantuan sampai tanpa penyelamat perlu terjun.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 48, 52"
  },
  {
    "id": "d6_pjpk_u7_s1_10",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Semasa berlatih menjejak air, Jason mendapati badannya cepat tenggelam walaupun kakinya menendang dengan kuat. Berdasarkan teknik yang betul, apakah pembetulan yang perlu dilakukan oleh Jason?",
    "options": [
      "Menegangkan keseluruhan otot kaki dan mengunci sendi lutut",
      "Melonggarkan sendi lutut dan pergelangan kaki serta mengekalkan posisi badan seperti menunggang basikal atau rotasi kaki yang sekata",
      "Menjatuhkan kepala ke dalam air sambil menahan nafas",
      "Mengangkat kedua-dua belah tangan tinggi ke udara sepanjang masa"
    ],
    "correctIndex": 1,
    "explanation": "Sendi lutut dan pergelangan kaki yang kaku mengurangkan daya apungan; melonggarkan sendi tersebut serta mengekalkan postur dan kuakan tangan membantu mengekalkan apungan semasa menjejak air.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 49"
  },
  {
    "id": "d6_pjpk_u7_s2_01",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Apakah langkah pertama semasa melakukan kemahiran renang kuak rangkak?",
    "options": [
      "Menelentang dan mendepakan tangan",
      "Duduk di tepi kolam dan menendang air",
      "Tiarap dan apungkan badan sambil menjangkau tangan ke hadapan",
      "Menyelam ke dasar kolam terlebih dahulu"
    ],
    "correctIndex": 2,
    "explanation": "Langkah pertama kuak rangkak ialah tiarap dan apungkan badan serta jangkau tangan ke hadapan sebelum menguak tangan secara selang-seli.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_pjpk_u7_s2_02",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Dalam renang kuak rangkak, bagaimanakah pergerakan tangan dilakukan?",
    "options": [
      "Dikuakkan serentak kedua-dua belah tangan ke belakang",
      "Dilipat di sisi badan sepanjang renangan",
      "Digerakkan dalam bulatan kecil di bawah dada sahaja",
      "Dikuakkan secara selang-seli"
    ],
    "correctIndex": 3,
    "explanation": "Dalam kuak rangkak, selepas tangan dijangkau ke hadapan, kedua-dua belah tangan dikuakkan secara selang-seli.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_pjpk_u7_s2_03",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Apakah jenis tendangan kaki yang digunakan dalam kemahiran renang kuak rangkak?",
    "options": [
      "Tendangan keribas",
      "Tendangan gunting",
      "Tendangan sisi",
      "Tendangan rotasi"
    ],
    "correctIndex": 0,
    "explanation": "Kuak rangkak menggunakan tendangan keribas bagi membantu pergerakan badan ke hadapan di dalam air.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_pjpk_u7_s2_04",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Semasa melakukan renang kuak rangkak, ke arah manakah muka perenang perlu ditolehkan untuk mengambil nafas?",
    "options": [
      "Ke bawah menghadap dasar kolam",
      "Ke sisi",
      "Ke belakang menghadap kaki",
      "Lurus ke atas langit"
    ],
    "correctIndex": 1,
    "explanation": "Dalam kuak rangkak, perenang mengambil nafas ketika muka ditolehkan ke sisi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_pjpk_u7_s2_05",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Dalam kemahiran kuak dada, bilakah perenang perlu menghembus nafas?",
    "options": [
      "Ketika muka berada di luar permukaan air sepenuhnya",
      "Hanya selepas tamat berenang 20 meter",
      "Ketika kepala berada di dalam air",
      "Sebelum melangkah masuk ke dalam kolam"
    ],
    "correctIndex": 2,
    "explanation": "Semasa melakukan kuak dada, perenang menolak tangan lurus ke hadapan untuk meluncur sambil menghembus nafas ketika kepala berada di dalam air.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 50-51"
  },
  {
    "id": "d6_pjpk_u7_s2_06",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Susun langkah pergerakan tangan dan pernafasan kuak dada berikut mengikut urutan yang betul:\n1. Dongakkan kepala dan tarik nafas.\n2. Tangan diluruskan ke hadapan.\n3. Tangan dikuakkan ke luar.",
    "options": [
      "1, 2, 3",
      "3, 2, 1",
      "2, 1, 3",
      "2, 3, 1"
    ],
    "correctIndex": 3,
    "explanation": "Dalam kuak dada, tangan diluruskan ke hadapan terlebih dahulu (2), kemudian dikuakkan ke luar (3), diikuti dengan mendongakkan kepala dan menarik nafas (1).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 50"
  },
  {
    "id": "d6_pjpk_u7_s2_07",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Apakah lakuan kaki yang dilakukan selepas mendongakkan kepala dan menarik nafas dalam kemahiran kuak dada?",
    "options": [
      "Fleksikan lutut dan bawa kaki ke arah punggung sebelum menendang ke belakang",
      "Luruskan kedua-dua belah kaki dan lakukan tendangan keribas laju",
      "Silangkan kedua-dua belah buku lali tanpa membengkokkan lutut",
      "Tarik kedua-dua belah lutut ke dada dan berhenti berenang"
    ],
    "correctIndex": 0,
    "explanation": "Selepas mendongakkan kepala dan menarik nafas dalam kuak dada, perenang perlu memfleksikan lutut, membawa kaki ke arah punggung, dan melakukan tendangan ke belakang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_pjpk_u7_s2_08",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Bagaimanakah perbezaan kekerapan mengambil nafas antara kuak rangkak dengan kuak dada yang diajar dalam buku teks?",
    "options": [
      "Kuak rangkak mengambil nafas setiap kuak, manakala kuak dada selepas empat kali kuak",
      "Kuak rangkak boleh mengambil nafas selepas dua atau tiga kali kuak, manakala kuak dada selepas setiap kuak atau dua kali kuak",
      "Kedua-duanya hanya membenarkan pengambilan nafas selepas sepuluh meter",
      "Kuak rangkak tidak memerlukan pernafasan di dalam air berbanding kuak dada"
    ],
    "correctIndex": 1,
    "explanation": "Teknik pernafasan kuak rangkak boleh dilakukan selepas dua kali kuak (atau tiga kali kuak satu nafas), manakala kuak dada mengambil nafas selepas setiap kuak atau dua kali kuak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_pjpk_u7_s2_09",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Semasa berenang kuak rangkak sejauh 20 meter, Faris menahan nafas sepanjang muka berada di dalam air dan hanya menghembus nafas apabila menoleh ke sisi sebelum menarik nafas. Mengapakah cara ini kurang berkesan?",
    "options": [
      "Kerana menoleh ke sisi akan menyebabkan kaki berhenti menendang",
      "Kerana air kolam akan masuk ke dalam telinga dengan cepat",
      "Kerana masa muka di sisi terlalu singkat untuk menghembus dan menarik nafas sekaligus; nafas patut dihembus ketika muka di dalam air",
      "Kerana menahan nafas menjadikan badan lebih laju tanpa perlu menguak tangan"
    ],
    "correctIndex": 2,
    "explanation": "Perenang perlu menghembus nafas ketika kepala dan muka berada di dalam air supaya apabila muka ditolehkan ke sisi, perenang dapat terus menarik nafas dengan lancar tanpa tercungap-cungap.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 50-51"
  },
  {
    "id": "d6_pjpk_u7_s2_10",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Dalam aktiviti berganti-ganti 20 meter, seorang murid memilih untuk melakukan kuak dada. Selepas menendang kaki ke belakang, apakah tindakan seterusnya untuk mengekalkan kelancaran luncuran kuak dada?",
    "options": [
      "Terus mendongakkan kepala tinggi tanpa meluruskan tangan",
      "Menendang kaki secara keribas sambil menahan nafas",
      "Menguak tangan ke belakang dengan lutut sentiasa terlipat",
      "Menolak tangan lurus ke hadapan untuk meluncur sambil menghembus nafas ketika kepala di dalam air"
    ],
    "correctIndex": 3,
    "explanation": "Selepas tendangan kaki ke belakang dalam kuak dada, perenang menolak tangan lurus ke hadapan untuk meluncur dengan rintangan air yang minimum sambil menghembus nafas di dalam air.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 51"
  },
  {
    "id": "d6_pjpk_u8_s1_01",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah kegunaan utama arah mata angin dalam aktiviti pandu arah?",
    "options": [
      "Mengukur kelajuan larian peserta",
      "Menjadi panduan untuk menentukan arah",
      "Menentukan masa tamat permainan",
      "Mengira bilangan ahli dalam kumpulan"
    ],
    "correctIndex": 1,
    "explanation": "Mata angin digunakan sebagai panduan untuk menentukan arah semasa memandu arah, dalam pelayaran, serta semasa menggunakan kompas dan peta.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_pjpk_u8_s1_02",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan dua jenis kompas yang sesuai digunakan dalam aktiviti pandu arah?",
    "options": [
      "Kompas kayu dan kompas plastik",
      "Kompas air dan kompas angin",
      "Kompas digital dan kompas analog",
      "Kompas matahari dan kompas bintang"
    ],
    "correctIndex": 2,
    "explanation": "Berdasarkan buku teks, dua jenis kompas yang boleh digunakan untuk aktiviti pandu arah ialah kompas jenis digital dan kompas jenis analog.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55, 58"
  },
  {
    "id": "d6_pjpk_u8_s1_03",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah arah mata angin yang terletak tepat di antara arah Utara dengan arah Timur?",
    "options": [
      "Barat Laut",
      "Tenggara",
      "Barat Daya",
      "Timur Laut"
    ],
    "correctIndex": 3,
    "explanation": "Arah Timur Laut terletak di antara arah Utara dengan arah Timur pada kompas arah mata angin.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_pjpk_u8_s1_04",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Dalam permainan Kad Misteri, apakah nilai utama yang diperlukan antara ahli kumpulan untuk menjejak laluan hingga ke garisan penamat?",
    "options": [
      "Kerjasama antara ahli kumpulan",
      "Persaingan sesama ahli kumpulan sendiri",
      "Sikap mementingkan diri sendiri",
      "Bekerja secara bersendirian tanpa berbincang"
    ],
    "correctIndex": 0,
    "explanation": "Aktiviti pandu arah seperti permainan Kad Misteri memerlukan kerjasama antara ahli kumpulan untuk mentafsir maklumat dan menyelesaikan tugasan di setiap stesen.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 54-55"
  },
  {
    "id": "d6_pjpk_u8_s1_05",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Apakah langkah keselamatan yang perlu diutamakan sebelum dan semasa menjalankan aktiviti pandu arah?",
    "options": [
      "Berlari sekuat hati tanpa melihat hadapan",
      "Memastikan laluan dan ruang aktiviti selamat serta mengutamakan keselamatan diri",
      "Meninggalkan ahli kumpulan yang lambat di belakang",
      "Menggunakan laluan semak tanpa kebenaran guru"
    ],
    "correctIndex": 1,
    "explanation": "Peserta perlu memastikan laluan dan ruang untuk melakukan aktiviti selamat serta sentiasa mengutamakan keselamatan diri.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 54-55"
  },
  {
    "id": "d6_pjpk_u8_s1_06",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Sebuah kumpulan sedang menghadap ke arah Selatan. Jika mereka perlu berpusing ke arah mata angin yang terletak di antara Selatan dengan Barat, ke arah manakah mereka harus bergerak?",
    "options": [
      "Tenggara",
      "Timur Laut",
      "Barat Daya",
      "Barat Laut"
    ],
    "correctIndex": 2,
    "explanation": "Arah mata angin di antara Selatan dengan Barat ialah Barat Daya (manakala antara Selatan dengan Timur ialah Tenggara).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_pjpk_u8_s1_07",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Pada kad maklumat Stesen 6 dalam aktiviti pandu arah, tertulis arahan: 'Terus bergerak 250 langkah dan bearing 252°, mercu tanda: Khemah penamat.' Apakah tujuan menyertakan bearing dan mercu tanda pada kad tersebut?",
    "options": [
      "Untuk mengelirukan kumpulan lawan supaya sesat",
      "Untuk memanjangkan tempoh masa permainan",
      "Untuk menggantikan keperluan menggunakan kompas",
      "Untuk membantu kumpulan menentukan arah tepat menggunakan kompas dan mengesahkan lokasi stesen"
    ],
    "correctIndex": 3,
    "explanation": "Bearing kompas (seperti 252°) memberi panduan arah yang tepat dengan kompas, manakala mercu tanda membantu mengesahkan bahawa kumpulan telah tiba di lokasi yang betul.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_pjpk_u8_s1_08",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Bagaimanakah pemenang ditentukan dalam permainan Kad Misteri semasa aktiviti pandu arah?",
    "options": [
      "Kumpulan yang paling awal tiba di garisan penamat dan berjaya menyelesaikan semua tugasan",
      "Kumpulan yang mengumpulkan paling banyak kad tanpa menyelesaikan tugasan",
      "Kumpulan yang mempunyai paling ramai ahli",
      "Kumpulan yang berjalan paling jauh melebihi garisan penamat"
    ],
    "correctIndex": 0,
    "explanation": "Dalam permainan Kad Misteri, kumpulan yang berjaya menjejak laluan hingga ke garisan penamat serta mentafsir dan menyelesaikan semua tugasan stesen terlebih dahulu dikira sebagai pemenang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 54-55"
  },
  {
    "id": "d6_pjpk_u8_s1_09",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Dalam permainan Kad Misteri, kumpulan Hazriq membaca petunjuk: '70% keperluan asas badan. Jika kurang boleh menyebabkan dehidrasi.' Mercu tanda di stesen berikutnya ialah jambatan. Apakah jawapan bagi petunjuk tersebut sebelum mereka bergerak?",
    "options": [
      "Lemak",
      "Air",
      "Karbohidrat",
      "Vitamin"
    ],
    "correctIndex": 1,
    "explanation": "Air membentuk kira-kira 70% keperluan asas badan dan kekurangan air boleh menyebabkan dehidrasi. Aktiviti Kad Misteri menguji keupayaan mentafsir maklumat bertulis sambil memandu arah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 54"
  },
  {
    "id": "d6_pjpk_u8_s1_10",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Kumpulan A tiba di Stesen 5 dengan cepat, tetapi mereka terlupa membawa kompas yang dibekalkan oleh guru untuk menuju ke Stesen 6 yang mempunyai arahan bearing 252°. Apakah kesan utama situasi ini kepada kumpulan A?",
    "options": [
      "Mereka boleh mengira bearing 252° hanya dengan melihat jam tangan digital",
      "Mereka akan menang secara automatik kerana sudah sampai ke Stesen 5",
      "Mereka sukar menentukan arah bearing 252° dengan tepat dan berisiko tersasar daripada mercu tanda khemah penamat",
      "Mereka dibenarkan menukar arah mercu tanda mengikut kehendak sendiri"
    ],
    "correctIndex": 2,
    "explanation": "Kompas diperlukan untuk membaca dan mengikut arah bearing tertentu seperti 252°. Tanpa kompas, kumpulan sukar memastikan laluan yang tepat ke mercu tanda penamat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 55"
  },
  {
    "id": "d6_pjpk_u8_s2_01",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Dalam permainan tradisional Libat, bagaimanakah cara menentukan siapa yang akan menjadi pengejar pada permulaan permainan?",
    "options": [
      "Murid yang paling tinggi dipilih terus",
      "Murid yang memakai kasut berwarna cerah",
      "Guru melantik murid yang paling lambat berlari",
      "Melakukan undian dalam kumpulan"
    ],
    "correctIndex": 3,
    "explanation": "Permainan Libat dimulakan dengan membuat undian untuk menentukan pemain yang menjadi pengejar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_pjpk_u8_s2_02",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Apakah dua cara yang boleh dilakukan oleh pelari untuk menyelamatkan diri daripada disentuh oleh pengejar dalam permainan Libat?",
    "options": [
      "Memegang tiang atau berhenti sambil mendepakan tangan dan menjerit 'berhenti'",
      "Duduk mencangkung atau baring di atas padang",
      "Berlari keluar daripada kawasan sekolah",
      "Menyorok di dalam bilik darjah"
    ],
    "correctIndex": 0,
    "explanation": "Dalam permainan Libat, pelari boleh menyelamatkan diri dengan memegang tiang atau berhenti dengan mendepakan tangan sambil menjerit 'berhenti'.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_pjpk_u8_s2_03",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Apakah peraturan keselamatan yang mesti dipatuhi ketika bermain permainan Libat?",
    "options": [
      "Memakai sarung tangan tebal semasa mengejar",
      "Elakkan menolak rakan ketika berlari dan pastikan ruang aktiviti selamat",
      "Menarik baju rakan supaya mudah disentuh",
      "Berlari dengan mata tertutup"
    ],
    "correctIndex": 1,
    "explanation": "Aspek keselamatan dalam permainan Libat menekankan agar ruang melakukan aktiviti dipastikan selamat dan pemain mengelakkan daripada menolak rakan ketika berlari.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56"
  },
  {
    "id": "d6_pjpk_u8_s2_04",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Dalam permainan Hidup Mati, apakah yang perlu dilakukan oleh seorang pemain sebaik sahaja dia berjaya dicuit oleh pengejar?",
    "options": [
      "Berlari lebih laju untuk mengejar pemain lain",
      "Keluar dari padang dan duduk di tepi",
      "Berdiri setempat sambil mengangkat tangan menandakan dia telah 'mati'",
      "Menjerit 'berhenti' sambil memegang tiang"
    ],
    "correctIndex": 2,
    "explanation": "Dalam permainan Hidup Mati, pemain yang berjaya dicuit oleh pengejar akan 'mati' dengan berdiri setempat sambil mengangkat tangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_pjpk_u8_s2_05",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Bagaimanakah seorang pemain yang telah 'mati' dalam permainan Hidup Mati boleh 'hidup' semula?",
    "options": [
      "Apabila pengejar menjerit perkataan 'hidup'",
      "Selepas mengira sehingga sepuluh saat",
      "Apabila dia melompat setempat sebanyak tiga kali",
      "Apabila dia dicuit oleh pemain lain yang masih bebas"
    ],
    "correctIndex": 3,
    "explanation": "Pemain yang telah 'mati' (berdiri setempat sambil mengangkat tangan) akan 'hidup' semula jika dicuit oleh pemain lain.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_pjpk_u8_s2_06",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Bilakah pertukaran peranan pengejar berlaku dalam permainan Libat berbanding permainan Hidup Mati?",
    "options": [
      "Dalam Libat, peranan bertukar apabila pengejar menyentuh seorang pelari; dalam Hidup Mati, pengejar bertukar selepas semua pemain telah 'mati'",
      "Dalam Libat, pengejar bertukar setiap lima minit; dalam Hidup Mati, pengejar tidak pernah bertukar",
      "Dalam kedua-dua permainan, pengejar bertukar setiap kali ada pemain yang menjerit",
      "Dalam Hidup Mati, pengejar bertukar sebaik sahaja seorang pemain dicuit"
    ],
    "correctIndex": 0,
    "explanation": "Dalam Libat, peranan pengejar bertukar sebaik sahaja pengejar berjaya menyentuh pelari. Dalam Hidup Mati, permainan tamat apabila semua pemain telah 'mati' dan barulah pengejar baharu ditukar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56-57"
  },
  {
    "id": "d6_pjpk_u8_s2_07",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Apakah kemahiran fizikal utama yang diuji melalui permainan tradisional Libat dan Hidup Mati?",
    "options": [
      "Kemahiran mengimbangkan badan di atas kayu",
      "Kepantasan berlari dan kecekapan mengelakkan diri daripada disentuh pengejar",
      "Kekuatan membaling objek berat ke sasaran jauh",
      "Kebolehan menyelam dan menahan nafas di dalam air"
    ],
    "correctIndex": 1,
    "explanation": "Kedua-dua permainan ini menguji kepantasan berlari serta kecekapan mengelakkan diri daripada disentuh atau dicuit oleh pengejar, sekali gus meningkatkan kecergasan fizikal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56-57"
  },
  {
    "id": "d6_pjpk_u8_s2_08",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Dalam permainan Hidup Mati, tiga orang rakan Mary telah 'mati' dan berdiri setempat sambil mengangkat tangan. Apakah strategi terbaik yang patut dilakukan oleh Mary untuk membantu kumpulannya?",
    "options": [
      "Berdiri diam di penjuru padang supaya tidak penat",
      "Memegang tiang berdekatan dan menjerit 'berhenti'",
      "Menggunakan kepantasan dan ketangkasan untuk mencuit rakan-rakan yang 'mati' sambil mengelak daripada pengejar",
      "Menyerah diri kepada pengejar supaya permainan cepat tamat"
    ],
    "correctIndex": 2,
    "explanation": "Pemain yang masih bebas boleh 'menghidupkan' semula rakan yang telah 'mati' dengan mencuit mereka sambil mengelakkan diri daripada dicuit oleh pengejar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_pjpk_u8_s2_09",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Sebagai pengejar dalam permainan Hidup Mati, apakah strategi paling berkesan untuk 'mematikan' semua pemain dengan cepat tanpa melanggar peraturan?",
    "options": [
      "Berdiri di satu tempat sahaja dan menunggu pemain datang",
      "Menolak pemain lain supaya jatuh dan mudah dicuit",
      "Mengejar seorang pemain sahaja tanpa mempedulikan pemain yang telah 'mati'",
      "Mencuit pemain secara pantas sambil mengawal kawasan berhampiran pemain yang sudah 'mati' supaya tidak sempat dicuit oleh pemain lain"
    ],
    "correctIndex": 3,
    "explanation": "Jika pengejar tidak mengawal atau memerhatikan pemain yang sudah 'mati', pemain lain akan mudah 'menghidupkan' mereka semula. Strategi mengawal kawasan sekitar pemain yang 'mati' sambil mengejar pelari lain membantu menamatkan permainan dengan lebih cepat.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 57"
  },
  {
    "id": "d6_pjpk_u8_s2_10",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Cikgu ingin mengubah suai permainan Libat supaya lebih mencabar untuk murid Tahun 6 tanpa menjejaskan keselamatan. Antara pengubahsuaian berikut, yang manakah paling sesuai?",
    "options": [
      "Mengehadkan bilangan tiang keselamatan atau mengecilkan sempadan kawasan larian dengan pengawasan guru",
      "Membenarkan pemain menolak rakan lain untuk melambatkan larian mereka",
      "Menjalankan permainan di kawasan tangga sekolah yang sempit",
      "Menghapuskan peraturan bertukar peranan supaya hanya seorang murid mengejar selama-lamanya"
    ],
    "correctIndex": 0,
    "explanation": "Mengehadkan bilangan tiang keselamatan atau melaraskan keluasan kawasan permainan yang selamat dapat meningkatkan cabaran taktikal dan kepantasan sambil mengekalkan keselamatan pemain.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 56, 58"
  },
  {
    "id": "d6_pjpk_u9_s1_01",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Mengapakah kita perlu melakukan aktiviti memanaskan badan sebelum memulakan latihan sukan?",
    "options": [
      "Supaya otot-otot lebih bersedia untuk melakukan aktiviti seterusnya",
      "Supaya badan cepat berasa letih sebelum latihan bermula",
      "Untuk menurunkan kadar nadi ke tahap paling rendah",
      "Untuk menggantikan keperluan minum air semasa bersenam"
    ],
    "correctIndex": 0,
    "explanation": "Aktiviti memanaskan badan secara umum dan khusus dilakukan supaya otot-otot lebih bersedia untuk melakukan aktiviti fizikal seterusnya dan meningkatkan kadar nadi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_pjpk_u9_s1_02",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh aktiviti memanaskan badan?",
    "options": [
      "Regangan statik sambil duduk",
      "Regangan otot gluteus secara statik",
      "Berlari setempat dengan lutut tinggi dan lompat bintang",
      "Berbaring tenang di atas tikar"
    ],
    "correctIndex": 2,
    "explanation": "Aktiviti memanaskan badan termasuklah berlari setempat dengan lutut tinggi, lompat tali, aktiviti separa cangkung, lunges berjalan, dan lompat bintang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_pjpk_u9_s1_03",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Apakah tujuan melakukan aktiviti menyejukkan badan selepas selesai menjalankan aktiviti fizikal?",
    "options": [
      "Untuk meningkatkan kadar nadi ke tahap maksimum",
      "Agar sistem badan kembali ke tahap normal",
      "Supaya otot menjadi tegang dan kejang",
      "Untuk memulakan latihan intensiti tinggi yang baharu"
    ],
    "correctIndex": 1,
    "explanation": "Aktiviti menyejukkan badan dengan mengurangkan intensiti pergerakan serta melakukan regangan statik bertujuan agar sistem badan kembali ke tahap normal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s1_04",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Apakah jenis regangan yang dilakukan semasa aktiviti menyejukkan badan?",
    "options": [
      "Regangan balistik dengan henjutan kuat",
      "Lompatan berulang kali tanpa henti",
      "Larian pecut jarak dekat",
      "Regangan statik seperti regangan otot hamstring dan kuadriseps"
    ],
    "correctIndex": 3,
    "explanation": "Semasa menyejukkan badan, kita mengurangkan intensiti pergerakan dan melakukan regangan statik seperti regangan otot hamstring, aduktor, gluteus, abduktor, kuadriseps, deltoid, dan latissimus dorsi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s1_05",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Berapakah kadar denyutan jantung yang dikekalkan semasa melakukan senaman intensiti rendah?",
    "options": [
      "50% daripada kemampuan maksimumnya",
      "100% daripada kemampuan maksimumnya",
      "10% daripada kemampuan maksimumnya",
      "95% daripada kemampuan maksimumnya"
    ],
    "correctIndex": 0,
    "explanation": "Senaman intensiti rendah ialah senaman yang dapat mengekalkan denyutan jantung pada kadar yang stabil, iaitu sebanyak 50% daripada kemampuan maksimumnya dan berlangsung dalam jangka masa yang agak lama.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_pjpk_u9_s1_06",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Sebelum memanaskan badan, kadar nadi Zarith ialah 70 dsm. Selepas melakukan aktiviti memanaskan badan seperti lompat tali dan lunges berjalan, kadar nadinya meningkat kepada 120 dsm. Apakah yang ditunjukkan oleh peningkatan ini?",
    "options": [
      "Zarith mengalami kecederaan otot yang serius",
      "Zarith tidak sesuai melakukan sebarang aktiviti sukan",
      "Badan dan sistem peredaran darah Zarith telah bersedia untuk memulakan latihan",
      "Zarith telah menamatkan aktiviti menyejukkan badan"
    ],
    "correctIndex": 2,
    "explanation": "Peningkatan kadar nadi daripada 70 dsm kepada 120 dsm selepas memanaskan badan menunjukkan badan dan otot-otot telah bersedia untuk memulakan latihan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_pjpk_u9_s1_07",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Antara berikut, yang manakah menerangkan ciri senaman intensiti rendah dengan tepat?",
    "options": [
      "Berlangsung dalam tempoh beberapa saat sahaja dengan usaha maksimum",
      "Mengekalkan denyutan jantung stabil pada kadar 50% kemampuan maksimum dalam jangka masa agak lama",
      "Dilakukan hanya selepas pemain mengalami keletihan melampau",
      "Tidak melibatkan pergerakan otot atau sendi langsung"
    ],
    "correctIndex": 1,
    "explanation": "Senaman intensiti rendah mengekalkan denyutan jantung stabil pada kadar 50% daripada kemampuan maksimum dan berlangsung dalam jangka masa yang agak lama.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60"
  },
  {
    "id": "d6_pjpk_u9_s1_08",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Manakah antara pasangan otot dan fasa aktiviti berikut yang tepat untuk dilakukan selepas bermain badminton?",
    "options": [
      "Lompat bintang laju semasa fasa menyejukkan badan",
      "Lari pecut 50 meter semasa fasa menyejukkan badan",
      "Aktiviti separa cangkung berulang semasa fasa menyejukkan badan",
      "Regangan statik otot deltoid, hamstring, dan kuadriseps semasa fasa menyejukkan badan"
    ],
    "correctIndex": 3,
    "explanation": "Selepas bermain badminton, fasa menyejukkan badan melibatkan pengurangan intensiti pergerakan dan regangan statik pada otot-otot seperti deltoid, hamstring, dan kuadriseps.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s1_09",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Selepas perlawanan bola jaring yang rancak, Aina terus duduk di bangku tanpa berjalan perlahan atau melakukan regangan statik. Mengapakah amalan Aina itu tidak digalakkan?",
    "options": [
      "Kerana sistem badan perlu diturunkan intensitinya secara beransur-ansur melalui aktiviti menyejukkan badan agar kembali ke tahap normal",
      "Kerana duduk di bangku akan meningkatkan kadar nadi melebihi 200 dsm",
      "Kerana aktiviti menyejukkan badan hanya wajib dilakukan oleh pemain lelaki sahaja",
      "Kerana regangan statik hanya sesuai dilakukan sebelum tidur pada waktu malam"
    ],
    "correctIndex": 0,
    "explanation": "Berhenti secara mendadak tidak membantu sistem badan kembali ke tahap normal dengan lancar; aktiviti menyejukkan badan melalui pengurangan intensiti pergerakan dan regangan statik diperlukan selepas bersukan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s1_10",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Susun urutan sesi latihan kecergasan yang lengkap dan betul bagi seorang murid Tahun 6:\nI. Melakukan regangan statik dan mengurangkan intensiti pergerakan.\nII. Melakukan aktiviti memanaskan badan umum dan khusus.\nIII. Menjalankan latihan sukan utama seperti badminton.",
    "options": [
      "I, II, III",
      "III, II, I",
      "II, III, I",
      "II, I, III"
    ],
    "correctIndex": 2,
    "explanation": "Sesi latihan yang betul bermula dengan memanaskan badan umum dan khusus (II), diikuti latihan utama (III), dan diakhiri dengan aktiviti menyejukkan badan termasuk regangan statik (I).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 60-61"
  },
  {
    "id": "d6_pjpk_u9_s2_01",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Bilakah waktu yang paling sesuai untuk mengambil bacaan Kadar Nadi Rehat (KNR)?",
    "options": [
      "Sejurus selepas menamatkan larian pecut 100 meter",
      "Pada waktu pagi selepas bangun daripada tidur",
      "Ketika sedang berasa marah atau terkejut",
      "Selepas makan tengah hari sambil berjalan"
    ],
    "correctIndex": 1,
    "explanation": "Kadar Nadi Rehat (KNR) diambil pada waktu pagi selepas bangun daripada tidur, dan bacaannya diambil selama seminit untuk beberapa hari berturut-turut.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_02",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah formula yang digunakan untuk mengira Kadar Nadi Maksimum (KNM)?",
    "options": [
      "200 - berat badan",
      "220 + umur",
      "180 - umur",
      "220 - umur"
    ],
    "correctIndex": 3,
    "explanation": "Berdasarkan buku teks PJPK Tahun 6, Kadar Nadi Maksimum (KNM) dikira menggunakan formula: 220 - umur.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_03",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah nama formula yang digunakan untuk mengira Kadar Nadi Latihan (KNL) dengan mengambil kira Kadar Nadi Rehat dan Kadar Nadi Maksimum?",
    "options": [
      "Formula Karvonen",
      "Formula Pythagoras",
      "Formula Newton",
      "Formula Archimedes"
    ],
    "correctIndex": 0,
    "explanation": "Formula Karvonen digunakan untuk mengira Kadar Nadi Latihan (KNL) berdasarkan Kadar Nadi Rehat (KNR) dan Kadar Nadi Maksimum (KNM).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_04",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Apakah kegunaan Kadar Nadi Pemulihan (KNP) dalam aktiviti kecergasan?",
    "options": [
      "Mengira umur sebenar seseorang murid",
      "Menentukan panjang padang bola sepak",
      "Mengukur tempoh kadar nadi kembali kepada keadaan Kadar Nadi Rehat (KNR)",
      "Menggantikan bacaan Kadar Nadi Maksimum (KNM)"
    ],
    "correctIndex": 2,
    "explanation": "Kadar Nadi Pemulihan (KNP) digunakan untuk mengukur tempoh kadar denyutan nadi kembali kepada keadaan KNR selepas melakukan aktiviti fizikal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_05",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Bagaimanakah cara mengambil bacaan Kadar Nadi Pemulihan (KNP) selepas melakukan aktiviti fizikal?",
    "options": [
      "Mengambil bacaan sekali sahaja pada keesokan paginya",
      "Mengambil kadar denyutan nadi setiap minit selepas melakukan aktiviti fizikal",
      "Mengambil bacaan sebelum memulakan aktiviti memanaskan badan",
      "Mengambil bacaan hanya apabila murid berasa lapar"
    ],
    "correctIndex": 1,
    "explanation": "Untuk mengukur Kadar Nadi Pemulihan (KNP), ambil kadar denyutan nadi setiap minit selepas melakukan aktiviti fizikal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_06",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Rani ialah seorang murid Tahun 6 yang berumur 12 tahun. Berapakah Kadar Nadi Maksimum (KNM) bagi Rani?",
    "options": [
      "198 dsm",
      "232 dsm",
      "212 dsm",
      "208 dsm"
    ],
    "correctIndex": 3,
    "explanation": "Menggunakan formula KNM = 220 - umur, maka 220 - 12 = 208 denyutan seminit (dsm).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_07",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Mengapakah bacaan Kadar Nadi Rehat (KNR) digalakkan diambil selama seminit pada beberapa hari berturut-turut?",
    "options": [
      "Untuk mendapatkan purata bacaan Kadar Nadi Rehat yang lebih tepat dan konsisten",
      "Kerana kadar nadi sentiasa sifar pada hari pertama",
      "Supaya murid tidak perlu lagi mengira Kadar Nadi Maksimum",
      "Untuk memastikan kadar nadi meningkat setiap pagi"
    ],
    "correctIndex": 0,
    "explanation": "Mengambil bacaan KNR pada waktu pagi selepas bangun tidur selama seminit untuk beberapa hari berturut-turut membantu memperoleh nilai rehat yang tepat dan konsisten.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_08",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Apakah tujuan utama seseorang atlet atau murid mengira Kadar Nadi Latihan (KNL)?",
    "options": [
      "Untuk mengetahui waktu tidur yang mencukupi",
      "Untuk membandingkan ketinggian dengan rakan sebaya",
      "Untuk merancang intensiti aktiviti fizikal yang sesuai semasa latihan",
      "Untuk mengelakkan diri daripada melakukan regangan"
    ],
    "correctIndex": 2,
    "explanation": "Dengan mengira KNR dan KNM untuk mendapatkan Kadar Nadi Latihan (KNL), murid dapat merancang intensiti aktiviti fizikal yang sesuai.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_09",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Daniel berumur 12 tahun (KNR = 68 dsm) dan abangnya berumur 22 tahun (KNR = 68 dsm). Jika kedua-duanya mengira Kadar Nadi Maksimum (KNM), apakah kesimpulan yang benar?",
    "options": [
      "Abangnya mempunyai KNM yang lebih tinggi iaitu 208 dsm",
      "Daniel mempunyai KNM yang lebih tinggi (208 dsm) berbanding abangnya (198 dsm)",
      "Kedua-duanya mempunyai KNM yang sama kerana KNR mereka sama",
      "KNM tidak bergantung pada umur tetapi bergantung pada ketinggian"
    ],
    "correctIndex": 1,
    "explanation": "Berdasarkan formula KNM = 220 - umur, KNM Daniel ialah 220 - 12 = 208 dsm, manakala KNM abangnya ialah 220 - 22 = 198 dsm. Semakin meningkat umur, semakin rendah nilai KNM.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u9_s2_10",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Dua orang murid mempunyai KNR yang sama iaitu 70 dsm. Selepas berjoging selama 15 minit, kadar nadi Murid X kembali ke 70 dsm dalam masa 3 minit, manakala Murid Y mengambil masa 8 minit. Berdasarkan konsep Kadar Nadi Pemulihan (KNP), apakah yang dapat dirumuskan?",
    "options": [
      "Murid Y mempunyai tahap pemulihan kardiovaskular yang lebih cepat daripada Murid X",
      "Murid X tidak melakukan aktiviti berjoging dengan betul",
      "Kedua-dua murid mempunyai tahap kecergasan pemulihan yang sama",
      "Murid X mempunyai kadar pemulihan nadi yang lebih baik kerana kembali ke KNR dalam tempoh lebih singkat"
    ],
    "correctIndex": 3,
    "explanation": "Kadar Nadi Pemulihan (KNP) mengukur tempoh kadar nadi kembali kepada keadaan KNR selepas aktiviti fizikal. Tempoh pemulihan yang lebih singkat (3 minit berbanding 8 minit) menunjukkan pemulihan yang lebih baik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 61"
  },
  {
    "id": "d6_pjpk_u10_s1_01",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan lima komponen kecergasan berdasarkan kesihatan?",
    "options": [
      "Kapasiti aerobik, kelenturan, daya tahan otot, kekuatan otot dan komposisi badan",
      "Kelajuan, ketangkasan, kuasa, imbangan dan masa tindak balas",
      "Kapasiti aerobik, kelajuan, koordinasi, kekuatan otot dan imbangan",
      "Kelenturan, kuasa, daya tahan otot, ketangkasan dan komposisi badan"
    ],
    "correctIndex": 0,
    "explanation": "Lima komponen kecergasan berdasarkan kesihatan ialah kapasiti aerobik, kelenturan, daya tahan otot, kekuatan otot dan komposisi badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 63"
  },
  {
    "id": "d6_pjpk_u10_s1_02",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Dalam prinsip FITT, huruf 'I' merujuk kepada ________.",
    "options": [
      "Imbangan",
      "Intensiti",
      "Intervensi",
      "Isipadu"
    ],
    "correctIndex": 1,
    "explanation": "Prinsip FITT terdiri daripada Frequency (Kekerapan), Intensity (Intensiti), Time (Masa) dan Type (Jenis).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 63"
  },
  {
    "id": "d6_pjpk_u10_s1_03",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Berdasarkan carta intensiti umur kanak-kanak 12 tahun, berapakah julat kadar nadi sasaran bagi zon intensiti rendah?",
    "options": [
      "104 hingga 125 denyutan seminit",
      "146 hingga 166 denyutan seminit",
      "125 hingga 146 denyutan seminit",
      "170 hingga 190 denyutan seminit"
    ],
    "correctIndex": 2,
    "explanation": "Bagi kanak-kanak berumur 12 tahun, zon intensiti rendah (60-70% KN maks) ialah 125 hingga 146 denyutan seminit (dsm).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 64"
  },
  {
    "id": "d6_pjpk_u10_s1_04",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Apakah jenis aktiviti yang sesuai dilakukan untuk meningkatkan kapasiti aerobik?",
    "options": [
      "Regangan statik selama 15 saat",
      "Biceps curl sebanyak enam ulangan",
      "Larian ulang-alik 10 meter dan berbasikal statik",
      "Plank selama 30 saat di atas tikar senaman"
    ],
    "correctIndex": 2,
    "explanation": "Aktiviti seperti larian ulang-alik 10 meter, berbasikal statik dan naik turun bangku selama 30 minit secara berterusan dapat meningkatkan kapasiti aerobik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 64-65"
  },
  {
    "id": "d6_pjpk_u10_s1_05",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Apakah maksud penyakit hipokinetik?",
    "options": [
      "Penyakit berjangkit yang merebak melalui udara",
      "Penyakit yang disebabkan oleh alahan makanan laut",
      "Penyakit keturunan yang sukar dirawat sejak lahir",
      "Kumpulan penyakit yang berkaitan dengan amalan hidup kurang aktif dan tidak bersenam"
    ],
    "correctIndex": 3,
    "explanation": "Penyakit hipokinetik ialah kumpulan penyakit yang berkaitan dengan amalan hidup kurang aktif dan tidak bersenam, seperti penyakit jantung, obesiti, hipertensi dan diabetes melitus.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 69"
  },
  {
    "id": "d6_pjpk_u10_s1_06",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Jason dan Malini melakukan senaman kekuatan otot dengan enam ulangan untuk dua set, manakala bagi latihan daya tahan otot mereka menggunakan kaedah tetapan masa selama 30 saat setiap lakuan. Mengapakah kaedah latihan kedua-duanya berbeza?",
    "options": [
      "Kekuatan otot menggunakan ulangan rendah dengan bebanan, manakala daya tahan otot melatih otot bertahan dalam tempoh masa lebih lama",
      "Kekuatan otot hanya melibatkan otot kaki, manakala daya tahan otot hanya melibatkan otot tangan",
      "Daya tahan otot tidak memerlukan sebarang beban berat badan semasa bersenam",
      "Kekuatan otot perlu dilakukan setiap hari tanpa rehat berbanding daya tahan otot"
    ],
    "correctIndex": 0,
    "explanation": "Latihan kekuatan otot menekankan bebanan dengan ulangan yang sedikit (6 ulangan, 2 set), manakala latihan daya tahan otot meningkatkan intensiti melalui ketetapan masa seperti 30 saat bagi menguji keupayaan otot bertahan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 66-67"
  },
  {
    "id": "d6_pjpk_u10_s1_07",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Sundra melakukan regangan statik dan bertahan selama 10 hingga 15 saat pada setiap posisi sebelum acara larian. Dalam prinsip FITT, tempoh bertahan 10 hingga 15 saat bagi regangan statik tersebut mewakili aspek ________.",
    "options": [
      "Frequency (Kekerapan)",
      "Intensity (Intensiti)",
      "Type (Jenis)",
      "Test (Ujian)"
    ],
    "correctIndex": 1,
    "explanation": "Dalam latihan regangan statik Sundra, bertahan selama 10 hingga 15 saat merupakan tahap kesukaran atau beban regangan iaitu Intensity (Intensiti), manakala melakukannya setiap hari ialah Frequency dan memilih regangan dinamik/statik ialah Type.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 68"
  },
  {
    "id": "d6_pjpk_u10_s1_08",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Mengapakah murid digalakkan bersenam sekurang-kurangnya tiga kali seminggu dan tidak berhenti bersenam melebihi tempoh 48 jam secara berterusan?",
    "options": [
      "Supaya otot menjadi terlalu besar dalam masa dua hari",
      "Kerana berat badan akan meningkat mendadak jika berehat satu jam",
      "Kerana kesan senaman terakhir yang dilakukan akan berkurangan jika tiada aktiviti sekurang-kurangnya 48 jam",
      "Kerana kadar nadi rehat akan jatuh ke sifar selepas 48 jam"
    ],
    "correctIndex": 2,
    "explanation": "Jika tiada sebarang aktiviti fizikal dilakukan dalam tempoh sekurang-kurangnya 48 jam, kesan latihan atau senaman terakhir yang dilakukan akan mula berkurangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 67, 69"
  },
  {
    "id": "d6_pjpk_u10_s1_09",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Azimah yang berumur 12 tahun mengayuh basikal statik pada kelajuan tetap selama 30 minit pada hari Selasa. Pada hari Rabu, dia menukar tempoh kayuhan kepada 45 minit pada kelajuan yang sama dan mendapati kadar nadinya meningkat kepada 153 dsm. Apakah kesimpulan yang paling tepat berdasarkan situasi ini?",
    "options": [
      "Intensiti senaman menurun apabila tempoh masa kayuhan dipanjangkan",
      "Kadar nadi 153 dsm menunjukkan Azimah berada di zon intensiti sangat rendah",
      "Kelajuan tetap menyebabkan intensiti senaman sentiasa sama walaupun masa berubah",
      "Memanjangkan tempoh masa kayuhan meningkatkan intensiti senaman ke zon sederhana (146-166 dsm)"
    ],
    "correctIndex": 3,
    "explanation": "Semakin lama tempoh masa kayuhan, semakin tinggi intensiti senaman. Kadar nadi 153 dsm bagi murid berumur 12 tahun berada dalam julat zon sasaran intensiti sederhana iaitu 146-166 dsm.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 64-65"
  },
  {
    "id": "d6_pjpk_u10_s1_10",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Farid telah menjalani latihan daya tahan otot secara konsisten tiga kali seminggu. Selepas seminggu, dia berasa kecewa kerana belum nampak peningkatan prestasi ototnya. Apakah nasihat yang paling tepat berdasarkan prinsip fisiologi sukan dalam buku teks?",
    "options": [
      "Teruskan latihan kerana badan mula menunjukkan kesan latihan daya tahan otot selepas dua minggu",
      "Berhenti bersenam selama seminggu supaya otot dapat pulih sepenuhnya",
      "Tukarkan semua latihan kepada regangan statik sahaja",
      "Gandakan bebanan kepada tahap maksimum setiap hari tanpa rehat"
    ],
    "correctIndex": 0,
    "explanation": "Badan kita akan mula menunjukkan kesan latihan daya tahan otot dua minggu setelah latihan dilaksanakan secara konsisten.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 66"
  },
  {
    "id": "d6_pjpk_u10_s2_01",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah tujuan aktiviti merekodkan data ukuran tinggi dan berat badan murid dilakukan dua kali setahun?",
    "options": [
      "Untuk memilih wakil sekolah dalam acara larian pecut",
      "Untuk melihat kadar pertumbuhan murid sama ada normal atau sebaliknya",
      "Untuk menentukan kumpulan rumah sukan pada setiap awal tahun",
      "Untuk mengira jumlah kalori makanan yang perlu dimakan setiap jam"
    ],
    "correctIndex": 1,
    "explanation": "Aktiviti merekodkan data tinggi dan berat badan dua kali setahun bertujuan melihat kadar pertumbuhan murid sama ada normal atau sebaliknya bagi merancang tindakan susulan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 69"
  },
  {
    "id": "d6_pjpk_u10_s2_02",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Antara berikut, ujian yang manakah termasuk dalam bateri Ujian SEGAK?",
    "options": [
      "Lari Pecut 100 Meter",
      "Lontar Peluru",
      "Naik Turun Bangku 3 Minit",
      "Lompat Jauh Berdiri"
    ],
    "correctIndex": 2,
    "explanation": "Empat ujian dalam bateri Ujian SEGAK ialah Naik Turun Bangku 3 Minit, Tekan Tubi, Ringkuk Tubi Separa dan Jangkauan Melunjur.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_pjpk_u10_s2_03",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Dalam Ujian SEGAK, komponen kecergasan apakah yang diukur oleh ujian Jangkauan Melunjur?",
    "options": [
      "Kapasiti aerobik",
      "Kekuatan otot tangan",
      "Daya tahan otot abdomen",
      "Kelenturan"
    ],
    "correctIndex": 3,
    "explanation": "Ujian Jangkauan Melunjur mengukur tahap kelenturan bahagian belakang badan dan otot hamstring murid.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_pjpk_u10_s2_04",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Berdasarkan Keputusan Norma Keseluruhan Ujian SEGAK, murid yang mendapat jumlah skor keseluruhan 18 hingga 20 markah akan menerima pencapaian ________.",
    "options": [
      "5 Bintang (Kecergasan Sangat Tinggi)",
      "4 Bintang (Kecergasan Tinggi)",
      "3 Bintang (Cergas)",
      "2 Bintang (Kurang Cergas)"
    ],
    "correctIndex": 0,
    "explanation": "Jumlah skor 18 hingga 20 markah melayakkan murid mendapat 5 Bintang dengan status Kecergasan Sangat Tinggi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 71"
  },
  {
    "id": "d6_pjpk_u10_s2_05",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Apakah status kecergasan bagi murid yang memperoleh jumlah skor keseluruhan antara 12 hingga 14 markah dalam Ujian SEGAK?",
    "options": [
      "Tidak Cergas",
      "Cergas",
      "Kurang Cergas",
      "Kecergasan Sangat Tinggi"
    ],
    "correctIndex": 1,
    "explanation": "Jumlah skor keseluruhan 12 hingga 14 markah bersamaan dengan pencapaian 3 Bintang iaitu status Cergas.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 71"
  },
  {
    "id": "d6_pjpk_u10_s2_06",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Ali mendapat skor 5 bagi Naik Turun Bangku, skor 4 bagi Tekan Tubi, skor 4 bagi Ringkuk Tubi Separa, dan skor 1 bagi Jangkauan Melunjur (19 cm). Mengapakah Cikgu Rosli mencadangkan Ali melakukan regangan merpati dan regangan hamstring satu kaki?",
    "options": [
      "Kerana Ali mendapat skor paling tinggi dalam ujian Naik Turun Bangku",
      "Kerana skor Tekan Tubi Ali hanya mencapai tahap sederhana",
      "Kerana Ali lemah dalam komponen kelenturan apabila hanya mendapat skor 1 bagi Jangkauan Melunjur",
      "Kerana regangan tersebut wajib dilakukan untuk menggantikan ujian SEGAK"
    ],
    "correctIndex": 2,
    "explanation": "Ali mendapat skor 1 (19 cm) bagi Jangkauan Melunjur yang mengukur kelenturan, maka Cikgu Rosli mencadangkan aktiviti regangan statik untuk meningkatkan kelenturannya.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70-71"
  },
  {
    "id": "d6_pjpk_u10_s2_07",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Dalam norma SEGAK lelaki berumur 12 tahun, skor 5 bagi Naik Turun Bangku 3 Minit ialah 77 denyutan seminit dan ke bawah, manakala skor 1 ialah 147 denyutan seminit dan ke atas. Apakah maksud bacaan denyutan seminit yang rendah selepas ujian tersebut?",
    "options": [
      "Murid tersebut terlalu letih dan tidak cukup oksigen",
      "Murid tersebut melakukan ujian dengan cara yang salah",
      "Jantung murid tidak mengepam darah semasa aktiviti dijalankan",
      "Kapasiti aerobik dan tahap pemulihan jantung murid adalah sangat baik"
    ],
    "correctIndex": 3,
    "explanation": "Kadar denyutan nadi yang lebih rendah selepas ujian Naik Turun Bangku 3 Minit menunjukkan jantung cekap mengepam darah dan cepat pulih, menandakan kapasiti aerobik yang tinggi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_pjpk_u10_s2_08",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Aina ialah seorang murid perempuan berumur 12 tahun. Dalam ujian SEGAK, dia mencatatkan 16 ulangan bagi Tekan Tubi dan 13 ulangan bagi Ringkuk Tubi Separa. Berdasarkan norma SEGAK perempuan (Tekan Tubi skor 4: 18-20, skor 3: 13-17; Ringkuk Tubi Separa skor 4: 15-17, skor 3: 11-14), berapakah jumlah skor bagi kedua-dua ujian tersebut?",
    "options": [
      "6 markah",
      "7 markah",
      "8 markah",
      "5 markah"
    ],
    "correctIndex": 0,
    "explanation": "16 ulangan Tekan Tubi (perempuan 12 tahun) berada dalam julat 13-17 (skor 3) dan 13 ulangan Ringkuk Tubi Separa berada dalam julat 11-14 (skor 3). Jumlah skor ialah 3 + 3 = 6 markah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70"
  },
  {
    "id": "d6_pjpk_u10_s2_09",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Selepas mendapati skor Jangkauan Melunjurnya rendah, Ali merancang pelan intervensi dengan memilih enam aktiviti regangan statik, bertahan 15 hingga 30 saat, rehat 30 saat, dan melakukan dua hingga tiga ulangan setiap sesi. Mengapakah pendekatan Ali ini berkesan untuk meningkatkan gred SEGAK keseluruhannya?",
    "options": [
      "Kerana dia hanya melatih otot tangan tanpa melibatkan otot kaki",
      "Kerana aktiviti intervensi yang terancang dan khusus pada komponen lemah dapat meningkatkan skor Jangkauan Melunjur sekali gus menambah jumlah markah keseluruhan",
      "Kerana dia melakukan regangan tanpa tempoh rehat langsung antara ulangan",
      "Kerana regangan statik selama 30 saat dapat menggantikan markah ujian Naik Turun Bangku"
    ],
    "correctIndex": 1,
    "explanation": "Merancang intervensi khusus berdasarkan prinsip FITT pada komponen yang lemah (kelenturan) akan meningkatkan skor komponen tersebut dan melonjakkan jumlah skor keseluruhan SEGAK.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 70-71"
  },
  {
    "id": "d6_pjpk_u10_s2_10",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Siti memperoleh skor 3 bagi Naik Turun Bangku, skor 3 bagi Tekan Tubi, skor 3 bagi Ringkuk Tubi Separa, tetapi tidak sempat melengkapkan ujian Jangkauan Melunjur kerana terpaksa pulang awal. Berdasarkan Norma Keseluruhan Ujian SEGAK, apakah keputusan keseluruhannya?",
    "options": [
      "Mendapat 2 Bintang (Kurang Cergas) dengan jumlah 9 markah",
      "Mendapat 1 Bintang (Tidak Cergas) dengan jumlah 9 markah",
      "Tiada skor dan Tiada Bintang kerana tidak melengkapkan semua empat ujian SEGAK",
      "Mendapat 3 Bintang (Cergas) secara automatik kerana tiga ujian telah lulus"
    ],
    "correctIndex": 2,
    "explanation": "Mengikut Norma Keseluruhan Ujian SEGAK, murid yang tidak melengkapkan keempat-empat ujian akan diberikan status 'Tiada skor' dan 'Tiada Bintang' (Tidak Melengkapkan Ujian SEGAK).",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 71"
  },
  {
    "id": "d6_pjpk_u11_s1_01",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah nama hormon yang mengawal kematangan dan perkembangan organ seks lelaki?",
    "options": [
      "Hormon estrogen",
      "Hormon insulin",
      "Hormon adrenalin",
      "Hormon testosteron"
    ],
    "correctIndex": 3,
    "explanation": "Hormon testosteron ialah hormon yang mengawal kematangan dan perkembangan organ seks lelaki, manakala estrogen untuk perempuan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 75"
  },
  {
    "id": "d6_pjpk_u11_s1_02",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah perubahan fizikal biasa yang dialami apabila seseorang memasuki alam remaja?",
    "options": [
      "Suara berubah dan jerawat tumbuh di muka",
      "Gigi susu mula tumbuh buat pertama kali",
      "Tinggi badan menyusut secara mendadak",
      "Rambut bertukar menjadi putih sepenuhnya"
    ],
    "correctIndex": 0,
    "explanation": "Apabila memasuki alam remaja, perubahan fizikal seperti perubahan suara dan pertumbuhan jerawat di muka adalah normal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 75"
  },
  {
    "id": "d6_pjpk_u11_s1_03",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Berdasarkan sajak 'Hargai Perubahan', bagaimanakah remaja lelaki dan perempuan harus menghargai perubahan fizikal diri mereka?",
    "options": [
      "Sentiasa mengasingkan diri daripada rakan sebaya",
      "Menjaga kebersihan diri, berpakaian sopan dan menjaga pergaulan",
      "Mengabaikan penampilan diri kerana berasa malu",
      "Meniru gaya berpakaian yang menjolok mata"
    ],
    "correctIndex": 1,
    "explanation": "Sajak 'Hargai Perubahan' menekankan bahawa remaja perlu menerima perubahan fizikal, menjaga kebersihan tubuh badan, berpakaian sopan dan menjaga pergaulan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 74-75"
  },
  {
    "id": "d6_pjpk_u11_s1_04",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan kemahiran asertif?",
    "options": [
      "Kebolehan memaksa rakan mengikut kehendak kita",
      "Sikap berdiam diri walaupun berasa tidak selesa dengan ajakan rakan",
      "Keupayaan menyatakan pendapat dan perasaan secara jelas dan jujur tanpa dipengaruhi orang lain",
      "Tindakan melarikan diri tanpa memberi sebarang penjelasan"
    ],
    "correctIndex": 2,
    "explanation": "Kemahiran asertif ialah keupayaan menyatakan pendapat dan perasaan sama ada positif atau negatif secara jelas dan jujur tanpa dipengaruhi oleh orang lain.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 77"
  },
  {
    "id": "d6_pjpk_u11_s1_05",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "L",
    "q": "Antara situasi berikut, yang manakah boleh mendorong kepada tingkah laku seksual yang negatif?",
    "options": [
      "Belajar berkumpulan di perpustakaan sekolah bersama guru",
      "Menyertai aktiviti gotong-royong membersihkan kawasan taman",
      "Bersenam di padang sekolah pada waktu petang bersama keluarga",
      "Menonton bahan pornografi dan berdua-duaan di dalam kelas yang sunyi"
    ],
    "correctIndex": 3,
    "explanation": "Menonton bahan pornografi, berdua-duaan di tempat sunyi, melepak di taman dan berpeleseran di pusat hiburan merupakan aktiviti yang mendorong tingkah laku seksual.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 76, 78"
  },
  {
    "id": "d6_pjpk_u11_s1_06",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Karim mengajak Sandra datang ke rumahnya pada hari Ahad untuk menonton video bersama rakan lelaki lain ketika ibu bapanya tiada di rumah. Bagaimanakah Sandra patut mengaplikasikan kemahiran asertif?",
    "options": [
      "Menolak dengan sopan dan tegas bahawa tidak wajar dia berada di rumah bersama kawan lelaki tanpa pengawasan ibu bapa",
      "Bersorak dan memarahi Karim di hadapan rakan-rakan lain",
      "Mengikuti sahaja ajakan Karim supaya persahabatan mereka tidak terjejas",
      "Berjanji akan datang tetapi tidak hadir tanpa memberitahu Karim"
    ],
    "correctIndex": 0,
    "explanation": "Sandra perlu menolak secara jelas, jujur dan sopan ('Maafkan saya, Karim. Tidak sopan kalau saya berada di rumah kamu bersama-sama kawan lelaki yang lain') menggunakan kemahiran asertif.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 77"
  },
  {
    "id": "d6_pjpk_u11_s1_07",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Mengapakah remaja perlu menjauhi perbualan mesej lucah dan pergaulan tanpa batasan?",
    "options": [
      "Kerana ia boleh menjimatkan bateri telefon pintar",
      "Kerana perbuatan tersebut boleh mendorong ketagihan aktiviti seksual, hamil sebelum nikah dan jangkitan penyakit seksual seperti HIV/AIDS",
      "Kerana ia hanya menyebabkan pelajar dimarahi guru disiplin sahaja",
      "Kerana perbualan mesej lucah hanya memberi kesan kepada orang dewasa sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Risiko tingkah laku seksual tidak sihat termasuklah ketagihan melakukan aktiviti seksual, hubungan seksual atau hamil sebelum nikah, serta jangkitan penyakit seksual seperti HIV dan AIDS.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 78"
  },
  {
    "id": "d6_pjpk_u11_s1_08",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "M",
    "q": "Apakah kesan tingkah laku seksual terhadap keluarga mangsa dan keluarga pemangsa?",
    "options": [
      "Keluarga akan menjadi lebih terkenal dalam komuniti",
      "Hubungan kekeluargaan menjadi semakin erat tanpa sebarang tekanan",
      "Keluarga berasa malu, dipandang serong atau dipulau oleh masyarakat, serta mengalami stres dan konflik",
      "Keluarga hanya perlu membayar denda kecil tanpa menjejaskan maruah"
    ],
    "correctIndex": 2,
    "explanation": "Kedua-dua keluarga mangsa dan pemangsa akan menanggung rasa malu, dipandang serong atau dipulau masyarakat, mengalami stres, konflik serta menanggung kos rawatan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 79"
  },
  {
    "id": "d6_pjpk_u11_s1_09",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "H",
    "q": "Nadia berasa risau apabila menyedari mukanya mula berjerawat dan bentuk badannya berubah berbanding ketika di Tahun 4. Dia enggan menyertai aktiviti sukan sekolah kerana berasa malu. Apakah penilaian yang paling tepat terhadap situasi Nadia?",
    "options": [
      "Nadia patut terus mengasingkan diri sehingga jerawatnya hilang sepenuhnya",
      "Perubahan tersebut menunjukkan Nadia mengalami penyakit kulit yang serius",
      "Nadia tidak perlu menjaga kebersihan muka kerana jerawat akan hilang sendiri tanpa dicuci",
      "Perubahan itu adalah proses normal kematangan remaja akibat hormon; Nadia perlu menerima perubahan diri, menjaga kebersihan dan kekal aktif"
    ],
    "correctIndex": 3,
    "explanation": "Perubahan fizikal akibat hormon estrogen dan testosteron adalah normal bagi remaja. Remaja perlu menghargai perubahan diri dengan menjaga kebersihan dan tidak berasa rendah diri.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 74-75, 92"
  },
  {
    "id": "d6_pjpk_u11_s1_10",
    "unit": "u11",
    "skill": "u11_s1",
    "diff": "H",
    "q": "Dalam perjalanan pulang dari kelas tambahan pada waktu petang, Rina memilih untuk berjalan kaki seorang diri melalui lorong sunyi kerana mahu cepat sampai ke rumah. Mengapakah tindakan Rina ini berisiko tinggi?",
    "options": [
      "Berjalan berseorangan di tempat sunyi mendedahkan diri kepada ancaman keselamatan dan tingkah laku seksual daripada pemangsa",
      "Berjalan di lorong sunyi boleh menyebabkan kaki cepat lenguh",
      "Lorong sunyi selalunya lebih panjang jaraknya berbanding jalan utama",
      "Rakan-rakannya akan berasa marah kerana Rina pulang lebih awal"
    ],
    "correctIndex": 0,
    "explanation": "Demi keselamatan diri, remaja perlu mengelakkan berjalan berseorangan di tempat yang sunyi kerana situasi ini mendedahkan mereka kepada risiko menjadi mangsa tingkah laku seksual.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 76, 79"
  },
  {
    "id": "d6_pjpk_u11_s2_01",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Berdasarkan lirik lagu Boria Antidadah, apakah antara punca utama seseorang terjebak dalam penyalahgunaan dadah?",
    "options": [
      "Terlalu rajin mengulang kaji pelajaran di rumah",
      "Pengaruh rakan sebaya dan rasa ingin tahu yang membara",
      "Mengamalkan pemakanan seimbang setiap hari",
      "Menyertai aktiviti kokurikulum di sekolah"
    ],
    "correctIndex": 1,
    "explanation": "Lirik Boria Antidadah menyatakan bahawa punca mengambil dadah berbahaya termasuklah pengaruh daripada rakan sebaya, rasa ingin tahu yang membara dan kesepian untuk rasa gembira.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_pjpk_u11_s2_02",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Apakah kesan pengambilan dadah secara berlebihan terhadap nyawa seseorang?",
    "options": [
      "Menjadikan badan lebih bertenaga",
      "Meningkatkan daya ingatan dalam pelajaran",
      "Membawa maut kepada pengguna",
      "Menyembuhkan penyakit kronik"
    ],
    "correctIndex": 2,
    "explanation": "Dadah amat berbahaya kerana boleh merosakkan fikiran, menyebabkan hidup tidak tenang dan membawa maut jika diambil secara berlebihan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_pjpk_u11_s2_03",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Mengapakah dadah digelar sebagai 'musuh negara nombor satu'?",
    "options": [
      "Kerana dadah terlalu mahal untuk dibeli oleh murid sekolah",
      "Kerana dadah hanya digunakan oleh atlet profesional",
      "Kerana dadah boleh menggantikan ubat-ubatan di hospital",
      "Kerana dadah memusnahkan generasi harapan bangsa, negara dan agama"
    ],
    "correctIndex": 3,
    "explanation": "Dadah merupakan musuh negara nombor satu kerana ia merosakkan generasi pembina negara, memusnahkan bangsa dan agama.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_pjpk_u11_s2_04",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Apakah pesanan penting ibu bapa apabila berhadapan dengan orang yang tidak dikenali yang cuba memberikan minuman atau barang?",
    "options": [
      "Jangan mengambil sebarang barang atau minuman daripada orang yang tidak dikenali",
      "Ambil sahaja jika minuman itu kelihatan sedap dan masih tertutup",
      "Minta wang tunai sebagai ganti minuman tersebut",
      "Simpan barang tersebut di dalam beg sekolah untuk dimakan kemudian"
    ],
    "correctIndex": 0,
    "explanation": "Kita mestilah berkata 'TIDAK' dan tidak mengambil sebarang barang atau minuman daripada orang yang tidak dikenali bagi mengelakkan risiko terpedaya dengan dadah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 81"
  },
  {
    "id": "d6_pjpk_u11_s2_05",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "L",
    "q": "Apakah perasaan yang akan dialami oleh pelajar yang ditangkap kerana terlibat dalam penyalahgunaan dadah?",
    "options": [
      "Berasa bangga kerana mendapat perhatian ramai",
      "Berasa malu dan menjejaskan maruah diri serta keluarga",
      "Berasa gembira kerana tidak perlu ke sekolah",
      "Berasa tenang tanpa sebarang kebimbangan"
    ],
    "correctIndex": 1,
    "explanation": "Pelajar yang ditangkap kerana dadah akan berasa malu dan turut memalukan keluarga serta menjejaskan masa depan mereka.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 81"
  },
  {
    "id": "d6_pjpk_u11_s2_06",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Ketika menunggu bas di luar kawasan sekolah, seorang lelaki yang tidak dikenali menghampiri Amirul dan menghulurkan sebotol air minuman percuma. Apakah tindakan terbaik yang perlu dilakukan oleh Amirul?",
    "options": [
      "Minum air tersebut sedikit demi menjaga hati lelaki itu",
      "Mengambil botol air itu dan memberikannya kepada rakan lain",
      "Menolak dengan sopan sambil berkata 'Tidak mengapa, bekalan air saya masih ada' dan menjauhkan diri",
      "Mengikuti lelaki itu ke keretanya untuk melihat minuman lain"
    ],
    "correctIndex": 2,
    "explanation": "Amirul perlu menolak pelawaan orang yang tidak dikenali dengan tegas dan sopan serta mengingati pesanan ibu bapa agar tidak menerima barang daripada orang asing.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 81"
  },
  {
    "id": "d6_pjpk_u11_s2_07",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Bagaimanakah pemilihan rakan yang baik dapat membantu murid menjauhi penyalahgunaan dadah?",
    "options": [
      "Rakan yang baik akan membiarkan kita mencuba apa sahaja benda baharu",
      "Rakan yang baik sentiasa mengajak melepak di pusat hiburan hingga lewat malam",
      "Rakan yang baik tidak pernah menegur kesilapan yang kita lakukan",
      "Rakan yang baik boleh membantu ketika susah dan tidak memujuk ke arah perkara negatif"
    ],
    "correctIndex": 3,
    "explanation": "Lirik Boria Antidadah menekankan kepentingan memilih rakan yang boleh membantu ketika dicari serta menjauhi pujukan kawan-kawan yang mengajak ke arah najis dadah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_pjpk_u11_s2_08",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "M",
    "q": "Apakah kesan jangka panjang penyalahgunaan dadah terhadap kehidupan harian seseorang penagih?",
    "options": [
      "Fikiran menjadi rosak, diri tidak bermaya, hidup tidak tenang dan selalu tertekan",
      "Hubungan dengan ahli keluarga dan jiran tetangga menjadi semakin rapat",
      "Prestasi kerja dan pelajaran meningkat dengan lebih pantas",
      "Penagih akan sentiasa berasa cergas walaupun tidak makan"
    ],
    "correctIndex": 0,
    "explanation": "Penyalahgunaan dadah merosakkan fikiran, menyebabkan diri tidak bermaya, hidup sentiasa tertekan, dan diibaratkan hidup bagai bangkai bernyawa.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80"
  },
  {
    "id": "d6_pjpk_u11_s2_09",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "H",
    "q": "Zaki berasa sangat kesepian selepas berpindah ke sekolah baharu. Seorang senior mengajaknya mencuba sejenis pil yang didakwa boleh menghilangkan rasa sedih dan memberi kegembiraan. Mengapakah Zaki perlu menolak ajakan tersebut?",
    "options": [
      "Kerana pil itu mungkin hanya berkesan selama satu jam sahaja",
      "Kerana rasa kesepian dan ingin tahu sering dijadikan umpan oleh pengedar atau rakan negatif untuk menjerumuskan mangsa ke dalam ketagihan dadah",
      "Kerana Zaki perlu membayar harga pil tersebut pada keesokan harinya",
      "Kerana senior tersebut tidak mempunyai kebenaran daripada ketua kelas"
    ],
    "correctIndex": 1,
    "explanation": "Pengedar dadah sering mencari mangsa yang terleka, kesepian atau mempunyai rasa ingin tahu yang tinggi. Menolak ajakan tersebut melindungi Zaki daripada terjebak dalam ketagihan dadah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80-81"
  },
  {
    "id": "d6_pjpk_u11_s2_10",
    "unit": "u11",
    "skill": "u11_s2",
    "diff": "H",
    "q": "Sebuah keratan akhbar melaporkan ramai pelajar sekolah ditahan kerana terlibat dalam penyalahgunaan dadah. Selain memberi kesan buruk kepada pelajar itu sendiri, apakah kesan langsung situasi ini kepada masyarakat dan negara?",
    "options": [
      "Kos pembinaan sekolah baharu akan berkurangan secara automatik",
      "Masyarakat akan berasa lebih selamat apabila keluar pada waktu malam",
      "Masalah sosial meningkat, imej komuniti terjejas dan negara kehilangan generasi pelapis yang berwibawa",
      "Hubungan antara jiran tetangga menjadi lebih harmoni tanpa sebarang konflik"
    ],
    "correctIndex": 2,
    "explanation": "Penyalahgunaan dadah dalam kalangan pelajar bukan sahaja memalukan diri dan keluarga, malah menjejaskan ketenteraman masyarakat serta memusnahkan generasi pembina negara.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 80-81"
  },
  {
    "id": "d6_pjpk_u11_s3_01",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "L",
    "q": "Menurut Pertubuhan Kesihatan Sedunia (WHO), berapakah lingkungan umur peringkat remaja?",
    "options": [
      "7 tahun hingga 12 tahun",
      "10 tahun hingga 17 tahun",
      "15 tahun hingga 30 tahun",
      "12 tahun hingga 24 tahun"
    ],
    "correctIndex": 3,
    "explanation": "Menurut Pertubuhan Kesihatan Sedunia (WHO), umur peringkat remaja adalah dari 12 tahun hingga 24 tahun.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 82"
  },
  {
    "id": "d6_pjpk_u11_s3_02",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh perubahan emosi yang normal bagi seseorang remaja?",
    "options": [
      "Mudah beremosi, cepat marah, sensitif dan ingin disayangi",
      "Tidak pernah berasa sedih walau apa pun yang berlaku",
      "Sentiasa bersikap tenang dalam semua situasi sukar",
      "Hilang keupayaan untuk berkomunikasi dengan orang lain"
    ],
    "correctIndex": 0,
    "explanation": "Setiap remaja akan mengalami perubahan emosi seperti mudah beremosi, sedih, cepat marah, sensitif, tidak sabar dan ingin disayangi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 82"
  },
  {
    "id": "d6_pjpk_u11_s3_03",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "L",
    "q": "Apakah maksud perubahan naluri seksual pada peringkat remaja?",
    "options": [
      "Perasaan benci terhadap semua rakan di sekolah",
      "Perasaan mula tertarik dengan individu yang berlainan jantina",
      "Keinginan untuk tinggal berseorangan di hutan",
      "Perubahan suara menjadi semakin garau"
    ],
    "correctIndex": 1,
    "explanation": "Perubahan naluri seksual bermaksud seseorang remaja mula berasa tertarik dengan individu yang berlainan jantina.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 82"
  },
  {
    "id": "d6_pjpk_u11_s3_04",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan tekanan positif?",
    "options": [
      "Reaksi keliru dan gelisah yang menjejaskan selera makan",
      "Keadaan apabila seseorang memarahi rakan tanpa sebab",
      "Tindak balas yang baik dari segi fizikal, emosi dan mental terhadap situasi atau punca tekanan",
      "Sikap berputus asa apabila gagal dalam sesuatu ujian"
    ],
    "correctIndex": 2,
    "explanation": "Tekanan positif ialah tindak balas yang baik dari segi fizikal, emosi dan mental seseorang terhadap situasi atau punca tekanan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 86"
  },
  {
    "id": "d6_pjpk_u11_s3_05",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan kepentingan hubungan kekeluargaan yang baik?",
    "options": [
      "Menyebabkan anggota keluarga saling bersaing secara tidak sihat",
      "Mengurangkan komunikasi antara ibu bapa dan anak-anak",
      "Menggalakkan sikap mementingkan diri sendiri di rumah",
      "Memupuk rasa tanggungjawab, tolong-menolong dan mewujudkan ikatan kasih sayang"
    ],
    "correctIndex": 3,
    "explanation": "Hubungan kekeluargaan yang baik memupuk rasa tanggungjawab, membina keluarga bahagia, mengeratkan hubungan, saling menyokong dan tolong-menolong.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 85"
  },
  {
    "id": "d6_pjpk_u11_s3_06",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "M",
    "q": "Arif mula berasa tertarik kepada rakan perempuan di kelasnya dan ingin mengurus naluri seksual tersebut secara sihat. Apakah aktiviti yang paling sesuai dilakukan oleh Arif?",
    "options": [
      "Beriadah dan bersukan, menyertai program keagamaan serta membantu aktiviti gotong-royong",
      "Menghabiskan masa bersendirian di dalam bilik sambil melayari laman web tidak berfaedah",
      "Mengajak rakan perempuannya melepak di pusat hiburan setiap hujung minggu",
      "Mengabaikan pelajaran kerana terlalu memikirkan perasaannya"
    ],
    "correctIndex": 0,
    "explanation": "Naluri seksual remaja dapat diurus dengan baik melalui aktiviti berfaedah seperti beriadah dan bersukan, menyertai program berbentuk keagamaan dan aktiviti gotong-royong.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 83"
  },
  {
    "id": "d6_pjpk_u11_s3_07",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "M",
    "q": "Beto dimarahi oleh ibu bapanya kerana keputusan ujian Matematik yang kurang memuaskan. Selepas berbincang dengan rakannya, Beto mula belajar secara berjadual dan mengulang kaji pelajaran dengan kerap sehingga keputusannya meningkat. Mengapakah tindakan Beto ini dikategorikan sebagai tekanan positif?",
    "options": [
      "Kerana dia terus menyendiri dan hilang selera makan",
      "Kerana tekanan tersebut mendorongnya bertindak secara membina untuk memperbaiki prestasi dirinya",
      "Kerana dia menyalahkan guru Matematik atas kegagalannya",
      "Kerana dia berhenti menonton televisyen selama-lamanya"
    ],
    "correctIndex": 1,
    "explanation": "Tekanan yang dihadapi Beto menjadi tekanan positif apabila ia mendorongnya belajar secara berjadual dan mengulang kaji sehingga berjaya meningkatkan keputusan ujian.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 86"
  },
  {
    "id": "d6_pjpk_u11_s3_08",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "M",
    "q": "Amir baru sahaja kehilangan ibu tersayang yang meninggal dunia akibat sakit. Bagaimanakah Amir dan adiknya menunjukkan sikap positif dalam menghadapi situasi kehilangan tersebut?",
    "options": [
      "Meratapi pemergian ibu tanpa mahu bercakap dengan ayah",
      "Menyalahkan diri sendiri atas penyakit yang menimpa ibu",
      "Reda dengan ketentuan, saling menyokong bersama ayah, berjanji menjadi anak yang baik dan membantu menjaga adik",
      "Mengabaikan pelajaran di sekolah kerana terlalu sedih"
    ],
    "correctIndex": 2,
    "explanation": "Amir dan adiknya reda atas kehilangan ibu serta berjanji menjadi anak yang baik dan membantu menjaga adik bersama ayah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 84"
  },
  {
    "id": "d6_pjpk_u11_s3_09",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "H",
    "q": "Sejak memasuki Tahun 6, Shuhada berasa keliru kerana dia sering cepat marah dan terlalu sensitif terhadap teguran rakan. Jika dibiarkan berterusan, perkara ini boleh menjejaskan persahabatannya. Apakah langkah paling berkesan untuk Shuhada mengurus perubahan emosi ini?",
    "options": [
      "Memarahi semula rakan-rakannya supaya mereka tidak berani menegurnya lagi",
      "Menyembunyikan perasaannya daripada semua orang termasuk ibu bapa",
      "Berhenti bergaul dengan rakan sebaya sehingga tamat sekolah rendah",
      "Berbincang masalah dengan ibu bapa atau guru kaunseling, mengawal perasaan marah, sentiasa bersyukur dan berfikiran positif"
    ],
    "correctIndex": 3,
    "explanation": "Cara mengurus perubahan emosi remaja termasuklah berbincang masalah dengan ibu bapa, berjumpa guru kaunseling, mengawal perasaan marah, belajar bersama rakan sebaya, sentiasa berfikiran positif dan bersyukur.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 82-83"
  },
  {
    "id": "d6_pjpk_u11_s3_10",
    "unit": "u11",
    "skill": "u11_s3",
    "diff": "H",
    "q": "Maharaj gagal dalam ujian Matematik dan berasa takut untuk memberitahu ibu bapanya. Akibatnya, dia tidak dapat menumpukan perhatian di kelas, sentiasa gelisah, menyendiri dan hilang selera makan. Apakah cadangan terbaik untuk membantu Maharaj mengurus tekanan negatif tersebut?",
    "options": [
      "Berterus-terang dan berbincang dengan ibu bapa atau rakan untuk menyelesaikan masalah, berdoa, bersabar serta berusaha berubah menjadi lebih baik",
      "Memalsukan markah ujian supaya ibu bapanya tidak mengetahui kegagalannya",
      "Terus menyendiri di dalam bilik sehingga keputusan ujian seterusnya keluar",
      "Menjauhkan diri daripada guru Matematik supaya tidak ditanya tentang ujian"
    ],
    "correctIndex": 0,
    "explanation": "Maharaj mengalami tekanan negatif. Cara mengurus tekanan negatif ialah berterus-terang dan berbincang dengan ahli keluarga atau rakan, berfikiran positif, bersabar, berdoa dan berusaha berubah menjadi lebih baik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 86-87"
  },
  {
    "id": "d6_pjpk_u11_s4_01",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "L",
    "q": "Apakah organ utama yang mengalami keradangan akibat jangkitan virus Hepatitis A, B, C, D dan E?",
    "options": [
      "Paru-paru",
      "Hati",
      "Jantung",
      "Buah pinggang"
    ],
    "correctIndex": 1,
    "explanation": "Hepatitis ialah penyakit yang menyebabkan keradangan hati akibat jangkitan virus hepatitis A, B, C, D dan E.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 88"
  },
  {
    "id": "d6_pjpk_u11_s4_02",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "L",
    "q": "Bagaimanakah virus HIV boleh tersebar daripada seorang individu kepada individu yang lain?",
    "options": [
      "Melalui bersalaman dan berkongsi meja belajar",
      "Melalui gigitan nyamuk di kawasan semak",
      "Melalui hubungan seks yang tidak selamat dan berkongsi jarum suntikan",
      "Melalui udara apabila seseorang itu batuk atau bersin"
    ],
    "correctIndex": 2,
    "explanation": "HIV dan AIDS boleh tersebar melalui hubungan seks yang tidak selamat dan berkongsi jarum suntikan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 88-89"
  },
  {
    "id": "d6_pjpk_u11_s4_03",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan simptom bagi penyakit bawaan air dan bawaan makanan?",
    "options": [
      "Rambut gugur dan sakit gigi",
      "Ruam pada kulit dan sakit telinga",
      "Sakit sendi lutut dan rabun malam",
      "Sakit perut, muntah, cirit-birit dan demam"
    ],
    "correctIndex": 3,
    "explanation": "Simptom penyakit bawaan air dan bawaan makanan termasuklah sakit perut, muntah, cirit-birit dan demam.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 89"
  },
  {
    "id": "d6_pjpk_u11_s4_04",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "L",
    "q": "Menurut Kamus Pelajar Edisi Keempat, apakah yang dimaksudkan dengan komuniti?",
    "options": [
      "Keseluruhan orang yang tinggal di suatu tempat, daerah, negara dan sebagainya di bawah satu pemerintahan",
      "Kumpulan murid yang belajar di dalam bilik darjah yang sama sahaja",
      "Sekumpulan individu yang bekerja di sebuah syarikat swasta",
      "Ahli keluarga yang tinggal di dalam sebuah rumah sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Komuniti bermaksud keseluruhan orang yang tinggal di suatu tempat, daerah, negara dan sebagainya di bawah satu pemerintahan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 90"
  },
  {
    "id": "d6_pjpk_u11_s4_05",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh pengaruh positif dalam komuniti terhadap keselamatan diri?",
    "options": [
      "Buli dan melepak di simpang jalan",
      "Aktiviti gotong-royong, sambutan hari perayaan dan membantu jiran melintas jalan",
      "Membuang sampah merata-rata hingga kawasan menjadi kotor",
      "Mengganggu ketenteraman jiran pada waktu malam"
    ],
    "correctIndex": 1,
    "explanation": "Pengaruh positif dalam komuniti termasuklah aktiviti gotong-royong, sambutan hari perayaan dan membantu jiran melintas jalan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 90"
  },
  {
    "id": "d6_pjpk_u11_s4_06",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "M",
    "q": "Apakah pernyataan yang paling tepat mengenai rawatan bagi pesakit HIV dan AIDS?",
    "options": [
      "Boleh disembuhkan sepenuhnya dalam masa seminggu dengan minum air yang banyak",
      "Boleh dirawat dengan mengambil vaksin Hepatitis B secara berkala",
      "Tiada ubat khusus untuk menyembuhkannya, tetapi penggunaan ubat antivirus dapat melambatkan proses penyakit ini",
      "Hanya memerlukan rehat di rumah tanpa perlu berjumpa doktor"
    ],
    "correctIndex": 2,
    "explanation": "Tiada ubat khusus bagi merawat HIV dan AIDS, namun penggunaan ubat antivirus dapat melambatkan proses perkembangan penyakit tersebut.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 89"
  },
  {
    "id": "d6_pjpk_u11_s4_07",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "M",
    "q": "Bagaimanakah kita dapat mencegah penyakit bawaan air dan bawaan makanan daripada menjangkiti ahli keluarga?",
    "options": [
      "Memakan makanan mentah tanpa perlu dibasuh terlebih dahulu",
      "Berkongsi pinggan dan sudu tanpa membasuhnya dengan sabun",
      "Menggunakan air sungai yang keruh untuk membancuh minuman",
      "Memastikan sumber air bersih, membasuh makanan segar, membasuh alatan hidangan dan membasuh tangan sebelum makan"
    ],
    "correctIndex": 3,
    "explanation": "Langkah pencegahan penyakit bawaan air dan makanan ialah memastikan sumber air bersih, menjauhi makanan mentah, membasuh makanan segar, membasuh alatan hidangan dengan bersih dan membasuh tangan sebelum makan dan minum.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 89"
  },
  {
    "id": "d6_pjpk_u11_s4_08",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "M",
    "q": "Ramli suka membuli rakan-rakan di kawasan kejiranannya dan sering mengajak mereka melepak. Bagaimanakah kamu dapat mengelakkan diri daripada terpengaruh dengan sikap negatif Ramli?",
    "options": [
      "Saling menasihati ke arah kebaikan, menolak pelawaannya dengan tegas dan menyertai aktiviti berfaedah bersama komuniti",
      "Mengikut sahaja perbuatan Ramli supaya tidak dibuli olehnya",
      "Membalas perbuatan Ramli dengan membuli murid yang lebih kecil",
      "Mengurung diri di dalam rumah dan tidak bertegur sapa dengan semua jiran"
    ],
    "correctIndex": 0,
    "explanation": "Kita perlu saling menasihati jika berada dalam kalangan pengaruh negatif, menjauhi perbuatan buli serta melepak, dan melibatkan diri dengan aktiviti positif komuniti.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 90, 94"
  },
  {
    "id": "d6_pjpk_u11_s4_09",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "H",
    "q": "Penduduk di sebuah taman perumahan mendapati kawasan sekitar rumah Pak Abu yang kurang sihat kelihatan berselerak dan tidak terurus sehingga ditemui haiwan berbisa di situ. Apakah tindakan terbaik yang patut dilakukan oleh komuniti tersebut?",
    "options": [
      "Memarahi Pak Abu dan melarangnya keluar dari rumah",
      "Bekerjasama bergotong-royong membantu Pak Abu membersihkan kawasan rumahnya demi keselamatan bersama dan mengeratkan muhibah",
      "Membiarkan sahaja keadaan itu kerana kawasan tersebut milik persendirian Pak Abu",
      "Berpindah ke kawasan perumahan lain dengan segera"
    ],
    "correctIndex": 1,
    "explanation": "Bergotong-royong membantu Pak Abu membersihkan kawasan rumahnya dapat menghapuskan ancaman haiwan berbisa, menjaga keselamatan komuniti dan mengeratkan semangat muhibah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 91"
  },
  {
    "id": "d6_pjpk_u11_s4_10",
    "unit": "u11",
    "skill": "u11_s4",
    "diff": "H",
    "q": "Selepas makan tengah hari di sebuah gerai yang kurang bersih, Danial mengalami sakit perut, muntah dan cirit-birit. Selain merujuk pakar perubatan dan makan ubat seperti yang dicadangkan, apakah langkah pencegahan utama yang perlu diamalkan oleh peniaga makanan untuk mengelakkan kes berulang?",
    "options": [
      "Menutup gerai hanya pada hari cuti umum sahaja",
      "Menyediakan makanan mentah secara terbuka tanpa penutup",
      "Memastikan sistem pembentungan teratur, menggunakan sumber air bersih dan membasuh alatan hidangan serta bahan segar dengan bersih",
      "Menggalakkan pelanggan berkongsi cawan minuman yang sama"
    ],
    "correctIndex": 2,
    "explanation": "Penyakit bawaan air dan makanan serta Hepatitis dapat dicegah melalui sumber air bersih, sistem pembentungan yang teratur, membasuh alatan hidangan dan makanan segar dengan bersih serta amalan membasuh tangan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 88-89"
  },
  {
    "id": "d6_pjpk_u12_s1_01",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Secara umumnya, apakah dua fungsi utama makanan kepada tubuh badan manusia?",
    "options": [
      "Membekalkan tenaga dan membantu proses tumbesaran",
      "Menggantikan keperluan air dan mengurangkan waktu tidur",
      "Menghilangkan rasa bosan dan menambahkan berat badan",
      "Mengelakkan senaman harian dan melembutkan otot"
    ],
    "correctIndex": 0,
    "explanation": "Makanan diperlukan untuk meneruskan kehidupan yang sempurna kerana makanan membekalkan tenaga dan membantu proses tumbesaran tubuh.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_02",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan makanan segar?",
    "options": [
      "Makanan yang disimpan di dalam tin kedap udara bersama bahan pengawet",
      "Makanan daripada haiwan atau tumbuhan yang belum diproses atau dimasak",
      "Makanan yang telah dikeringkan melalui proses dehidrasi di kilang",
      "Makanan sejuk beku yang sedia untuk digoreng terus di rumah"
    ],
    "correctIndex": 1,
    "explanation": "Makanan segar ialah makanan yang berasal daripada haiwan atau tumbuhan yang belum melalui sebarang pemprosesan atau dimasak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_03",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh kaedah untuk menghasilkan makanan yang diproses?",
    "options": [
      "Menyiram dan membaja pokok sayur",
      "Memetik buah-buahan terus dari kebun",
      "Pengetinan, pembekuan, dan dehidrasi",
      "Mencuci ikan menggunakan air paip bersih"
    ],
    "correctIndex": 2,
    "explanation": "Makanan yang diproses ialah makanan yang telah melalui proses pengetinan, pembekuan, penyejukan, dehidrasi, dan membasmi kuman atau nyahkuman.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_04",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Manakah antara senarai berikut mengandungi contoh makanan segar semata-mata?",
    "options": [
      "Sardin dalam tin, mi segera, dan nuget ayam",
      "Kismis kering, susu kotak UHT, dan sosej",
      "Biskut berinti, kerepek kentang, dan kek cawan",
      "Ikan kembung mentah, bayam hijau, dan buah betik"
    ],
    "correctIndex": 3,
    "explanation": "Ikan kembung mentah, bayam hijau, dan buah betik berasal daripada haiwan dan tumbuhan serta belum diproses atau dimasak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_05",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "L",
    "q": "Daging segar yang dibeli di pasar merupakan sumber nutrien utama bagi tubuh badan, iaitu ________.",
    "options": [
      "protein",
      "pelawas",
      "gula ringkas",
      "karbohidrat"
    ],
    "correctIndex": 0,
    "explanation": "Daging merupakan makanan segar yang membekalkan sumber protein untuk membantu pembinaan dan pembaikan tisu badan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 100"
  },
  {
    "id": "d6_pjpk_u12_s1_06",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Ibu Aiman membeli buah mangga segar, ikan bawal mentah, dan sardin dalam tin di pasar raya. Antara barangan tersebut, yang manakah tergolong sebagai makanan yang diproses?",
    "options": [
      "Buah mangga segar",
      "Sardin dalam tin",
      "Ikan bawal mentah",
      "Buah mangga dan ikan bawal"
    ],
    "correctIndex": 1,
    "explanation": "Sardin dalam tin telah melalui proses pengetinan serta nyahkuman, manakala buah mangga segar dan ikan bawal mentah ialah makanan segar.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 95-96"
  },
  {
    "id": "d6_pjpk_u12_s1_07",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Adakah makanan segar dan makanan yang diproses kedua-duanya boleh memberi khasiat kepada tubuh badan?",
    "options": [
      "Tidak, hanya makanan segar sahaja yang mempunyai khasiat",
      "Ya, tetapi makanan diproses perlu dimakan setiap jam tanpa had",
      "Ya, kedua-duanya berkhasiat jika diambil mengikut keperluan dan tidak berlebihan",
      "Tidak, makanan diproses hanya mengandungi racun berbahaya"
    ],
    "correctIndex": 2,
    "explanation": "Kedua-dua jenis makanan berkhasiat sekiranya diambil mengikut keperluan tubuh dan tidak dimakan secara berlebihan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_08",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "M",
    "q": "Proses mengeringkan buah anggur sehingga menjadi kismis untuk tahan lebih lama dikenali sebagai proses ________.",
    "options": [
      "pengetinan",
      "pembekuan",
      "penyejukan",
      "dehidrasi"
    ],
    "correctIndex": 3,
    "explanation": "Dehidrasi ialah proses menyingkirkan kandungan air daripada makanan supaya tahan lebih lama, seperti penghasilan buah-buahan kering.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96"
  },
  {
    "id": "d6_pjpk_u12_s1_09",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "H",
    "q": "Chee Ming dan bapanya membeli sayur sawi, telur ayam, dan bebola ikan sejuk beku di pasar raya. Mengapakah bebola ikan sejuk beku dikategorikan sebagai makanan yang diproses walaupun mengandungi isi ikan?",
    "options": [
      "Kerana isinya telah melalui pengolahan bahan serta proses pembekuan di kilang",
      "Kerana bebola ikan tidak berasal daripada haiwan laut",
      "Kerana bebola ikan perlu dimasak menggunakan kuali sebelum dimakan",
      "Kerana bebola ikan dijual di pasar raya dan bukan di pasar basah"
    ],
    "correctIndex": 0,
    "explanation": "Bebola ikan sejuk beku telah melalui pemprosesan bahan dan proses pembekuan, berbeza dengan ikan segar yang belum diproses.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 95-96"
  },
  {
    "id": "d6_pjpk_u12_s1_10",
    "unit": "u12",
    "skill": "u12_s1",
    "diff": "H",
    "q": "Mengapakah seseorang murid digalakkan untuk lebih kerap memilih makanan segar berbanding makanan yang diproses dalam diet harian?",
    "options": [
      "Makanan segar tidak perlu dibasuh sebelum dimakan",
      "Makanan segar mengekalkan nutrien semula jadi tanpa tambahan bahan pengawet, garam, atau gula berlebihan",
      "Makanan segar lebih tahan lama pada suhu bilik selama beberapa tahun",
      "Makanan segar tidak membekalkan sebarang tenaga kepada badan"
    ],
    "correctIndex": 1,
    "explanation": "Makanan segar belum melalui pemprosesan industri yang sering menambah bahan pengawet, garam, atau gula berlebihan, sekali gus memberi faedah kesihatan yang lebih baik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96-97"
  },
  {
    "id": "d6_pjpk_u12_s2_01",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Apakah kesan yang boleh berlaku sekiranya makanan yang diproses dimakan secara berlebihan dan tanpa kawalan?",
    "options": [
      "Tumbesaran badan menjadi lebih pantas dan cergas",
      "Daya tahan badan meningkat dengan mendadak",
      "Boleh menyebabkan pelbagai penyakit seperti obesiti dan diabetes",
      "Gigi menjadi lebih kuat dan bebas daripada karies"
    ],
    "correctIndex": 2,
    "explanation": "Pengambilan makanan yang diproses secara berlebihan dan tanpa kawalan boleh menyebabkan pelbagai penyakit seperti obesiti, diabetes, dan tekanan darah tinggi.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96-97"
  },
  {
    "id": "d6_pjpk_u12_s2_02",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Amalan memakan gula-gula secara berlebihan setiap hari boleh merosakkan ________.",
    "options": [
      "telinga",
      "rambut",
      "kuku",
      "gigi"
    ],
    "correctIndex": 3,
    "explanation": "Kandungan gula yang tinggi dalam gula-gula boleh merosakkan gigi jika diambil secara berlebihan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 100"
  },
  {
    "id": "d6_pjpk_u12_s2_03",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Apakah panduan rasmi daripada Kementerian Kesihatan Malaysia (KKM) yang digunakan untuk merancang pemakanan seimbang seharian?",
    "options": [
      "Piramid Makanan Malaysia 2020",
      "Jadual Waktu Kecergasan Negara",
      "Buku Panduan Pertolongan Cemas",
      "Senarai Harga Barangan Pasar Raya"
    ],
    "correctIndex": 0,
    "explanation": "Piramid Makanan Malaysia 2020 oleh Kementerian Kesihatan Malaysia (KKM) menjadi panduan merancang menu pemakanan seimbang.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98"
  },
  {
    "id": "d6_pjpk_u12_s2_04",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Dalam Piramid Makanan Malaysia, kumpulan makanan yang manakah perlu dimakan dalam kuantiti yang paling sedikit?",
    "options": [
      "Sayur-sayuran dan buah-buahan",
      "Lemak, minyak, gula, dan garam",
      "Nasi, mi, roti, dan bijirin",
      "Ikan, ayam, daging, dan kekacang"
    ],
    "correctIndex": 1,
    "explanation": "Lemak, minyak, gula, dan garam terletak di puncak piramid makanan dan perlu diambil dalam kuantiti yang sedikit sahaja.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98, 100"
  },
  {
    "id": "d6_pjpk_u12_s2_05",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "L",
    "q": "Selain memilih makanan yang berkhasiat, bagaimanakah amalan waktu makan yang baik dapat mengurangkan risiko penyakit?",
    "options": [
      "Makan pada waktu tengah malam sahaja setiap hari",
      "Makan dengan jumlah yang sangat banyak sekali sehari",
      "Makan mengikut waktu yang betul dan tetap seperti sarapan, makan tengah hari, dan makan malam",
      "Menggantikan semua waktu makan utama dengan snek ringan"
    ],
    "correctIndex": 2,
    "explanation": "Mengamalkan pemakanan seimbang pada waktu yang betul dan tetap (seperti sarapan 7:00 pagi, makan tengah hari 12:00 tengah hari, makan malam 7:00 malam) membantu mengekalkan kesihatan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98"
  },
  {
    "id": "d6_pjpk_u12_s2_06",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Mengikut Piramid Makanan Malaysia 2020 (KKM), kumpulan makanan yang berada di aras paling bawah dan perlu diambil paling banyak setiap hari ialah ________.",
    "options": [
      "susu dan produk tenusu",
      "ikan, ayam, dan telur",
      "lemak, minyak, dan gula",
      "sayur-sayuran dan buah-buahan"
    ],
    "correctIndex": 3,
    "explanation": "Dalam Piramid Makanan Malaysia 2020, sayur-sayuran dan buah-buahan berada di aras tapak (paling bawah) dan disarankan diambil paling banyak.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98"
  },
  {
    "id": "d6_pjpk_u12_s2_07",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Faris gemar makan mi segera, sosej goreng, dan minum minuman berkarbonat hampir setiap hari. Apakah risiko kesihatan jangka panjang yang paling mungkin dialaminya?",
    "options": [
      "Berat badan berlebihan dan masalah tekanan darah tinggi akibat garam serta gula yang tinggi",
      "Kekurangan selera makan akibat makanan terlalu tawar",
      "Tulang menjadi terlalu kuat dan sukar dilentur",
      "Badan mendapat terlalu banyak serat daripada sayur segar"
    ],
    "correctIndex": 0,
    "explanation": "Makanan diproses seperti mi segera, sosej, dan minuman bergula mengandungi garam, lemak, serta gula yang tinggi dan boleh menyebabkan obesiti serta penyakit kronik.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96-97"
  },
  {
    "id": "d6_pjpk_u12_s2_08",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "M",
    "q": "Sandra makan sarapan pada pukul 7:00 pagi, makan tengah hari pada pukul 12:00 tengah hari, dan makan malam pada pukul 7:00 malam. Mengapakah tabiat ini wajar dicontohi?",
    "options": [
      "Kerana dia hanya makan makanan dalam tin pada waktu tersebut",
      "Kerana waktu makan yang tetap bersama pilihan makanan berkhasiat mengurangkan risiko penyakit",
      "Kerana dia dapat mengelakkan diri daripada minum air kosong",
      "Kerana waktu makan malam pukul 7:00 malam membolehkan dia makan gula-gula sebelum tidur"
    ],
    "correctIndex": 1,
    "explanation": "Amalan pemakanan seimbang dengan waktu makan yang betul dan tetap membantu tubuh mendapat tenaga yang stabil serta mengurangkan risiko penyakit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98"
  },
  {
    "id": "d6_pjpk_u12_s2_09",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "H",
    "q": "Menu makan tengah hari Nabil terdiri daripada nasi putih, ayam goreng bersalut tepung, dan air sirap manis. Apakah penambahbaikan terbaik untuk menjadikan menu ini seimbang mengikut Piramid Makanan Malaysia 2020?",
    "options": [
      "Menambah dua ketul lagi ayam goreng bersalut tepung",
      "Menukar nasi putih kepada kerepek kentang bergaram",
      "Menambah hidangan sayur-sayuran dan buah-buahan serta menggantikan air manis dengan air kosong",
      "Mengurangkan nasi dan menambah sos cili serta mayonis yang banyak"
    ],
    "correctIndex": 2,
    "explanation": "Menu Nabil kekurangan sayur-sayuran dan buah-buahan (aras tapak Piramid Makanan Malaysia 2020) serta mengandungi gula berlebihan daripada air manis.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 98"
  },
  {
    "id": "d6_pjpk_u12_s2_10",
    "unit": "u12",
    "skill": "u12_s2",
    "diff": "H",
    "q": "Dua label makanan menunjukkan Produk X (ikan sardin segar yang dibungkus bersih) mengandungi 60 mg natrium per hidangan, manakala Produk Y (sardin dalam tin) mengandungi 450 mg natrium per hidangan. Apakah kesimpulan yang paling tepat untuk amalan pemakanan sihat?",
    "options": [
      "Produk Y lebih baik dimakan setiap hari kerana natrium membantu membunuh semua kuman dalam badan",
      "Produk X tidak mempunyai sebarang nutrien kerana kandungan natriumnya terlalu rendah",
      "Kedua-dua produk mempunyai kesan yang sama walaupun dimakan dalam kuantiti berlebihan",
      "Produk X lebih sesuai dipilih untuk pengambilan kerap, manakala Produk Y perlu dikawal pengambilannya"
    ],
    "correctIndex": 3,
    "explanation": "Makanan yang diproses seperti makanan dalam tin biasanya mempunyai kandungan garam (natrium) yang lebih tinggi, jadi pengambilannya perlu dikawal bagi mengurangkan risiko penyakit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 96-98"
  },
  {
    "id": "d6_pjpk_u13_s1_01",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Apakah fungsi utama kain kasa steril yang terdapat di dalam peti pertolongan cemas?",
    "options": [
      "Melindungi luka daripada jangkitan kuman",
      "Memotong pakaian mangsa yang melekat",
      "Meringankan rasa pening kepala mangsa",
      "Mengambil cebisan kaca daripada luka"
    ],
    "correctIndex": 0,
    "explanation": "Kain kasa steril berfungsi untuk melindungi luka daripada terdedah dan dijangkiti kuman.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_02",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Alatan manakah yang digunakan untuk membunuh kuman pada bahagian luka dan membersihkan luka?",
    "options": [
      "Minyak angin",
      "Antiseptik",
      "Pin penyemat",
      "Kain anduh"
    ],
    "correctIndex": 1,
    "explanation": "Antiseptik digunakan untuk membunuh kuman pada bahagian luka serta membersihkan luka.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_03",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Apakah kegunaan kain anduh di dalam peti pertolongan cemas?",
    "options": [
      "Menampal luka kecil di jari tangan",
      "Menyapu ubat krim pada kulit melecur",
      "Dijadikan penyokong kepada anggota yang cedera",
      "Mematikan ikatan pembalut pada kaki"
    ],
    "correctIndex": 2,
    "explanation": "Kain anduh dijadikan penyokong kepada anggota badan mangsa yang cedera.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_04",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Apakah fungsi pengepit (tweezer) semasa memberi rawatan pertolongan cemas?",
    "options": [
      "Membalut pergelangan tangan yang terseliuh",
      "Memotong pita pelekat atau kain pembalut",
      "Mengelakkan sentuhan langsung dengan darah mangsa",
      "Mengambil cebisan kaca, kayu, atau duri yang tertusuk pada luka"
    ],
    "correctIndex": 3,
    "explanation": "Pengepit digunakan untuk mengambil benda asing seperti cebisan kaca, kayu, atau duri yang tertusuk pada luka.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_05",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "L",
    "q": "Mengapakah sarung tangan perubatan penting untuk dipakai sebelum mengendalikan mangsa yang mengalami luka berdarah?",
    "options": [
      "Mengelakkan sentuhan langsung dengan mangsa yang berdarah dan mengurangkan risiko jangkitan penyakit",
      "Memudahkan kerja memotong plaster menggunakan jari tangan",
      "Supaya mangsa tidak berasa sakit apabila luka disentuh",
      "Menggantikan fungsi kain kasa untuk membalut luka"
    ],
    "correctIndex": 0,
    "explanation": "Sarung tangan perubatan mengelakkan sentuhan langsung dengan darah mangsa serta mengurangkan risiko jangkitan penyakit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_06",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Apakah peranan Buku Panduan Pertolongan Cemas yang disimpan di dalam peti pertolongan cemas?",
    "options": [
      "Sebagai lapik untuk menahan darah daripada menitis",
      "Sebagai rujukan ringkas semasa bertindak menggunakan kandungan peti pertolongan cemas",
      "Sebagai catatan kehadiran murid yang cedera di sekolah",
      "Sebagai penanda aras harga ubat-ubatan yang dibeli"
    ],
    "correctIndex": 1,
    "explanation": "Buku Panduan Pertolongan Cemas berfungsi sebagai rujukan ringkas semasa bertindak menggunakan peralatan dan bahan dalam peti pertolongan cemas.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102"
  },
  {
    "id": "d6_pjpk_u13_s1_07",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Apakah teknologi terkini yang turut dimasukkan ke dalam peti pertolongan cemas untuk menyejukkan bahagian yang tercedera dengan pantas?",
    "options": [
      "Pemetik api",
      "Termometer raksa",
      "Pek sejuk segera",
      "Minyak masak"
    ],
    "correctIndex": 2,
    "explanation": "Pek sejuk segera merupakan teknologi terkini yang ada di dalam peti pertolongan cemas.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 103"
  },
  {
    "id": "d6_pjpk_u13_s1_08",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "M",
    "q": "Semasa permainan menyusun peti pertolongan cemas, murid-murid mendapati terdapat sebatang pemetik api di dalamnya. Apakah tindakan yang betul?",
    "options": [
      "Simpan pemetik api untuk memanaskan gunting",
      "Gunakan pemetik api untuk mengeringkan luka berdarah",
      "Letakkan pemetik api bersama ubat luka untuk kecemasan",
      "Keluarkan pemetik api kerana ia bukan alatan yang perlu ada dalam peti pertolongan cemas"
    ],
    "correctIndex": 3,
    "explanation": "Pemetik api bukan alatan yang perlu ada di dalam peti pertolongan cemas dan boleh mendatangkan bahaya.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 103"
  },
  {
    "id": "d6_pjpk_u13_s1_09",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "H",
    "q": "Ketika menyertai aktiviti perkhemahan di hutan, seorang rakan mengalami kecederaan di lengan tetapi kain anduh di dalam peti pertolongan cemas telah kehabisan. Objek di sekeliling manakah yang paling sesuai dijadikan alternatif sementara?",
    "options": [
      "Skaf pengakap atau baju bersih yang dilipat segi tiga",
      "Daun kering yang dikutip di atas tanah",
      "Tali rafia nipis yang diikat terus pada luka terbuka",
      "Ranting kayu tajam yang diikat pada leher"
    ],
    "correctIndex": 0,
    "explanation": "Kain bersih seperti skaf atau baju boleh dijadikan alternatif kepada kain anduh untuk menyokong anggota yang cedera ketika kecemasan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102-103"
  },
  {
    "id": "d6_pjpk_u13_s1_10",
    "unit": "u13",
    "skill": "u13_s1",
    "diff": "H",
    "q": "Mengapakah penggunaan kain kasa (gauze) perlu digabungkan dengan pin penyemat atau plaster apabila merawat luka pada bahagian kaki?",
    "options": [
      "Untuk menggantikan fungsi antiseptik membunuh kuman",
      "Untuk mengelakkan luka bertambah sejuk semasa berjalan",
      "Untuk memastikan kain kasa yang menutup luka kekal kemas dan tidak mudah tertanggal",
      "Untuk mengurangkan rasa pening kepala selepas kecederaan"
    ],
    "correctIndex": 2,
    "explanation": "Kain kasa menampal atau menutup luka, manakala pin penyemat atau plaster digunakan untuk mematikan dan mengemaskan balutan supaya tidak tertanggal.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102, 104"
  },
  {
    "id": "d6_pjpk_u13_s2_01",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Apakah langkah pertama yang perlu dilakukan sebelum mengendalikan mangsa yang mengalami kecederaan melecur?",
    "options": [
      "Terus menyapu minyak angin pada bahagian melecur",
      "Memakai sarung tangan perubatan terlebih dahulu",
      "Menutup bahagian melecur dengan kain anduh",
      "Menarik pakaian mangsa dengan kuat"
    ],
    "correctIndex": 1,
    "explanation": "Sebelum mengendalikan mangsa melecur, pembantu mula hendaklah memakai sarung tangan perubatan untuk mengelakkan jangkitan.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_02",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Berapa lamakah air bersih perlu dialirkan ke bahagian kulit yang melecur untuk membersih dan menyejukkan kawasan tersebut?",
    "options": [
      "1 hingga 2 minit",
      "3 hingga 5 minit",
      "30 hingga 45 minit",
      "10 hingga 15 minit"
    ],
    "correctIndex": 3,
    "explanation": "Bahagian yang melecur hendaklah dialirkan air bersih selama 10 hingga 15 minit.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_03",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Selepas bahagian melecur dibersihkan dengan air bersih, apakah bahan yang perlu disapu pada kawasan tersebut?",
    "options": [
      "Gel melecur (burn gel) atau krim antiseptik",
      "Minyak angin atau ubat gigi",
      "Serbuk kopi atau tepung gandum",
      "Garam halus dan air suam"
    ],
    "correctIndex": 0,
    "explanation": "Selepas bahagian melecur dibersihkan, sapukan burn gel atau krim antiseptik pada bahagian melecur.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_04",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Alatan manakah yang paling sesuai digunakan untuk memotong pakaian yang telah melekat pada kulit mangsa yang melecur?",
    "options": [
      "Pin penyemat",
      "Kapas",
      "Gunting",
      "Plaster"
    ],
    "correctIndex": 2,
    "explanation": "Gunting digunakan untuk memotong pakaian yang telah melekat pada kulit yang melecur dengan berhati-hati.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102, 104"
  },
  {
    "id": "d6_pjpk_u13_s2_05",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "L",
    "q": "Setelah burn gel atau krim antiseptik disapu pada kulit yang melecur, apakah alatan yang digunakan untuk menutup bahagian tersebut?",
    "options": [
      "Kapas kering dan minyak angin",
      "Pembalut dan kain kasa steril",
      "Pengepit dan sarung tangan",
      "Buku panduan dan pek sejuk"
    ],
    "correctIndex": 1,
    "explanation": "Pembalut dan kain kasa steril digunakan untuk menutup bahagian melecur agar tidak terdedah dan mudah dijangkiti kuman.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_06",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Semasa membersihkan kawasan kulit yang melecur, mengapakah pengepit (tweezer) dan kapas digunakan?",
    "options": [
      "Kapas untuk membalut lengan, pengepit untuk menyapu krim antiseptik",
      "Kapas untuk mengikat balutan, pengepit untuk memotong seluar mangsa",
      "Kapas untuk menahan darah, pengepit untuk menyokong anggota patah",
      "Kapas untuk membersihkan kawasan melecur, pengepit untuk mengambil cebisan kain yang melekat"
    ],
    "correctIndex": 3,
    "explanation": "Kapas digunakan untuk membersihkan bahagian melecur dan pengepit digunakan untuk mengambil cebisan kain yang telah melekat pada kulit yang melecur.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_07",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Antara situasi kecederaan melecur berikut, yang manakah memerlukan perhatian segera oleh doktor perubatan dan tidak memadai dengan rawatan peti pertolongan cemas sahaja?",
    "options": [
      "Kawasan melecur terlalu besar, melibatkan organ sensitif seperti mata, atau tisu otot terbakar",
      "Kulit jari hanya kemerahan sedikit selepas menyentuh cawan air suam",
      "Kecederaan melecet kecil di bahagian lutut akibat terjatuh di atas rumput",
      "Luka calar ringan sepanjang satu sentimeter pada tapak tangan"
    ],
    "correctIndex": 0,
    "explanation": "Mangsa melecur perlu mendapat perhatian doktor perubatan jika kawasan melecur terlalu besar, melibatkan organ sensitif seperti mata, tisu otot terbakar, atau kecederaan parah.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_08",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "M",
    "q": "Amin terjatuh ketika bermain di padang dan mengalami kecederaan melecet pada sikunya. Apakah urutan tindakan yang betul menggunakan peralatan peti pertolongan cemas?",
    "options": [
      "Balut siku dengan kain anduh, kemudian baru cuci dengan air kotor",
      "Pakai sarung tangan perubatan, bersihkan luka dengan kapas dan antiseptik, kemudian tampal dengan kain kasa atau plaster",
      "Sapukan minyak angin pada siku yang berdarah, lalu biarkan terbuka",
      "Gunakan pengepit untuk menarik kulit siku yang melecet tanpa mencucinya"
    ],
    "correctIndex": 1,
    "explanation": "Untuk merawat luka melecet, pakai sarung tangan perubatan dahulu, bersihkan luka menggunakan kapas dan antiseptik, dan tutup luka dengan kain kasa atau plaster.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 102, 105"
  },
  {
    "id": "d6_pjpk_u13_s2_09",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "H",
    "q": "Susun langkah merawat kecederaan melecur mengikut urutan yang betul:\nI. Sapu burn gel atau krim antiseptik.\nII. Tutup bahagian melecur dengan kain kasa steril dan pembalut.\nIII. Pakai sarung tangan perubatan dan potong pakaian yang melekat.\nIV. Alirkan air bersih selama 10 hingga 15 minit serta bersihkan dengan kapas.",
    "options": [
      "III, I, IV, II",
      "IV, III, I, II",
      "III, IV, I, II",
      "I, III, IV, II"
    ],
    "correctIndex": 2,
    "explanation": "Urutan yang betul ialah mengenal pasti kawasan melecur (pakai sarung tangan dan potong pakaian), membersihkan (alirkan air bersih 10-15 minit dan guna kapas), menyapu antiseptik atau burn gel, dan menutup bahagian melecur dengan pembalut dan kain kasa steril.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  },
  {
    "id": "d6_pjpk_u13_s2_10",
    "unit": "u13",
    "skill": "u13_s2",
    "diff": "H",
    "q": "Mengapakah seseorang pembantu mula dilarang menarik pakaian yang telah melekat pada kulit mangsa melecur menggunakan tangan kosong?",
    "options": [
      "Kerana pakaian tersebut boleh digunakan semula sebagai kain anduh",
      "Kerana tindakan itu akan menyejukkan kulit mangsa terlalu cepat",
      "Kerana krim antiseptik hanya boleh disapu di atas pakaian tersebut",
      "Kerana menarik pakaian melekat boleh menyebabkan kulit terkoyak lebih teruk dan meningkatkan risiko jangkitan kuman"
    ],
    "correctIndex": 3,
    "explanation": "Pakaian yang melekat pada kulit melecur mesti dipotong dengan gunting dan cebisannya diambil dengan pengepit selepas memakai sarung tangan bagi mengelakkan kecederaan kulit lebih parah serta jangkitan kuman.",
    "ref": "Buku Teks PJPK Tahun 6 (Semakan 2017), m/s 104"
  }
];

  App.Pools.d6.pjpk = items;
})(typeof window !== "undefined" ? window : globalThis);
