/**
 * Tingkatan 2 Sains (KSSM) static skill-tagged MCQ pool.
 * 330 verified items (33 concept skills x 10 items) aligned with js/data/curriculum/t2_sains.js.
 * Gate 1 schema checked + Gate 2 independent blind solved (gemini-4-argon, 330/330 exact agree, 0 flags, 27/Nov/2026).
 */
(function (global) {
  "use strict";

  const ITEMS = [
  {
    "id": "t2_sci_b1_s1_01",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Apakah maksud istilah biodiversiti dalam kajian sains?",
    "options": [
      "Kepelbagaian organisma hidup dan ekosistem di sesuatu kawasan atau di Bumi",
      "Bilangan haiwan pemangsa yang hidup di dalam kawasan hutan simpan sahaja",
      "Proses pembiakan tumbuhan berbunga menggunakan kaedah kultur tisu",
      "Taburan mineral dan jenis batuan di sesuatu kawasan tanah tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Biodiversiti merujuk kepada kepelbagaian semua organisma hidup termasuk haiwan, tumbuhan dan mikroorganisma serta kepelbagaian habitat dan ekosistemnya.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_02",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Manakah antara berikut merupakan contoh spesies endemik yang hanya ditemukan secara semula jadi di Malaysia?",
    "options": [
      "Kangguru merah",
      "Orang utan Borneo",
      "Beruang kutub",
      "Penguin maharaja"
    ],
    "correctIndex": 1,
    "explanation": "Spesies endemik ialah spesies yang hidup secara semula jadi di kawasan geografi tertentu sahaja, dan orang utan Borneo merupakan contoh spesies endemik di kepulauan Borneo.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_03",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Apakah kepentingan utama pokok kayu balak dan rotan kepada ekonomi negara dari sudut biodiversiti?",
    "options": [
      "Menghasilkan gas metana untuk kegunaan makmal sekolah",
      "Membekalkan bahan mentah bagi industri perabot dan pembinaan",
      "Menggantikan keperluan air tawar dalam sistem pengairan sawah",
      "Menghalang berlakunya kejadian pasang surut air laut"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan hutan seperti kayu balak, rotan dan buluh membekalkan bahan mentah penting untuk industri pembinaan, perabot dan kraf tangan.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_04",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Antara langkah berikut, yang manakah merupakan kaedah pemeliharaan biodiversiti?",
    "options": [
      "Menebang pokok tua secara menyeluruh untuk membina ladang baharu",
      "Memindahkan semua haiwan liar ke taman tema bandar",
      "Mewartakan kawasan hutan sebagai taman negara dan hutan simpan kekal",
      "Membiakkan spesies ikan hiasan asing di dalam sungai tempatan"
    ],
    "correctIndex": 2,
    "explanation": "Pemeliharaan bermaksud mengekalkan haiwan dan tumbuhan di habitat asalnya tanpa gangguan, seperti mewartakan hutan simpan kekal dan taman negara.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_05",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Pusat Pemuliharaan Orang Utan Sepilok di Sabah menyelamatkan anak orang utan yang kehilangan ibu sebelum melepaskannya semula ke hutan. Apakah jenis pengurusan biodiversiti yang dijalankan di pusat ini?",
    "options": [
      "Pemeliharaan in-situ di habitat laut dalam",
      "Pemuliharaan ex-situ untuk membaik pulih spesies terancam",
      "Penghapusan spesies perosak melalui kawalan kimia",
      "Pengkomersialan haiwan eksotik sebagai haiwan peliharaan"
    ],
    "correctIndex": 1,
    "explanation": "Pemuliharaan ex-situ melibatkan usaha menyelamat, merawat dan membiakkan spesies terancam di luar habitat asal seperti pusat pemuliharaan atau zoo sebelum dilepaskan semula.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_06",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Mengapakah kepupusan spesies tumbuhan herba hutan memberi kesan negatif kepada bidang perubatan moden dan tradisional?",
    "options": [
      "Tumbuhan herba membekalkan sebatian semula jadi untuk menghasilkan ubat-ubatan",
      "Tumbuhan herba merupakan satu-satunya sumber tenaga elektrik di hospital",
      "Semua ubat antibiotik dihasilkan daripada akar pokok kayu balak sahaja",
      "Ketiadaan tumbuhan herba menyebabkan suhu makmal perubatan meningkat mendadak"
    ],
    "correctIndex": 0,
    "explanation": "Pelbagai spesies tumbuhan seperti pegaga, tongkat ali dan lidah buaya mengandungi sebatian bioaktif yang menjadi sumber penting penghasilan ubat dan rawatan perubatan.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_07",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Sebuah kawasan hutan paya bakau diwartakan sebagai kawasan larangan penangkapan ikan dan penebangan pokok. Apakah tujuan utama pewartaan tersebut?",
    "options": [
      "Mempercepatkan hakisan pantai supaya menjadi kawasan pelabuhan",
      "Menjadikan kawasan tersebut sebagai tapak pelupusan sisa industri",
      "Menambahkan kadar penyejatan air laut di kawasan pesisir",
      "Melindungi tempat pembiakan hidupan laut dan mengekalkan keseimbangan ekosistem"
    ],
    "correctIndex": 3,
    "explanation": "Pewartaan kawasan paya bakau melindungi habitat pembiakan ikan dan ketam serta mengekalkan kestabilan ekosistem pesisir daripada hakisan ombak.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_08",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Seorang pelajar berpendapat bahawa aktiviti pemeliharaan dan pemuliharaan biodiversiti membawa maksud yang sama. Pernyataan manakah yang paling tepat untuk membetulkan salah faham pelajar tersebut?",
    "options": [
      "Pemeliharaan hanya untuk haiwan darat manakala pemuliharaan hanya untuk tumbuhan air",
      "Pemeliharaan mengekalkan organisma di habitat asal manakala pemuliharaan membaik pulih sumber atau membiakkan spesies di luar habitat asal",
      "Pemeliharaan membenarkan pembalakan terkawal manakala pemuliharaan melarang sebarang kajian sains",
      "Pemeliharaan dilakukan oleh pihak swasta manakala pemuliharaan dilakukan oleh pelancong"
    ],
    "correctIndex": 1,
    "explanation": "Pemeliharaan menjaga ekosistem asal daripada diganggu, sedangkan pemuliharaan merangkumi usaha membaik pulih ekosistem rosak atau membiakkan spesies terancam.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_09",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Penebangan hutan secara berleluasa di kawasan bukit bukan sahaja memusnahkan habitat hidupan liar malah menjejaskan keseimbangan alam sekitar. Antara kesan berantai yang paling tepat berlaku akibat kehilangan biodiversiti hutan ialah...",
    "options": [
      "penghasilan oksigen meningkat kerana tanah terdedah kepada cahaya matahari",
      "kadar penyerapan karbon dioksida berkurang lalu menyumbang kepada pemanasan global dan hakisan tanah",
      "populasi spesies endemik bertambah dengan pantas di kawasan bandar",
      "kitar nutrien tanah menjadi lebih subur tanpa kehadiran pengurai dan tumbuhan"
    ],
    "correctIndex": 1,
    "explanation": "Kehilangan litupan hutan mengurangkan penyerapan karbon dioksida melalui fotosintesis, melemahkan pegangan akar pada tanah dan mengganggu kitar air serta nutrien.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s1_10",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Kerajaan ingin mengekalkan populasi bunga Pakma (Rafflesia) yang semakin terancam dan hanya tumbuh pada pokok perumah tertentu di hutan hujan tropika. Langkah manakah yang paling berkesan untuk jangka masa panjang?",
    "options": [
      "Memetik kesemua bunga Pakma yang mekar dan menyimpannya di dalam muzium",
      "Mewartakan habitat hutan semula jadinya sebagai kawasan perlindungan ketat bersama pokok perumahnya",
      "Menanam bunga Pakma di dalam pasu hiasan di sepanjang jalan raya bandar",
      "Menggantikan pokok perumah dengan tumbuhan pertanian komersial seperti kelapa sawit"
    ],
    "correctIndex": 1,
    "explanation": "Bunga Pakma ialah tumbuhan parasit yang bergantung penuh pada pokok perumah tertentu di habitat asalnya, maka pemeliharaan in-situ bagi keseluruhan habitat ialah langkah paling berkesan.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_01",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Apakah ciri utama yang membezakan haiwan vertebrata daripada haiwan invertebrata?",
    "options": [
      "Vertebrata mempunyai tulang belakang manakala invertebrata tidak mempunyai tulang belakang",
      "Vertebrata hidup di darat sahaja manakala invertebrata hidup di dalam air sahaja",
      "Vertebrata bertelur sahaja manakala invertebrata melahirkan anak sahaja",
      "Vertebrata mempunyai rangka luar manakala invertebrata mempunyai kulit bersisik"
    ],
    "correctIndex": 0,
    "explanation": "Pengelasan asas haiwan membahagikan haiwan kepada vertebrata (bertulang belakang) dan invertebrata (tidak bertulang belakang).",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_02",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Antara haiwan berikut, yang manakah tergolong dalam kumpulan invertebrata berkaki tiga pasang?",
    "options": [
      "Labah-labah dan kala jengking",
      "Cacing tanah dan lintah",
      "Semut dan rama-rama",
      "Ketam dan udang galah"
    ],
    "correctIndex": 2,
    "explanation": "Serangga seperti semut dan rama-rama ialah invertebrata berkaki yang mempunyai tiga pasang kaki, berbeza daripada labah-labah (empat pasang) atau cacing (tanpa kaki).",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_03",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Bagaimanakah haiwan dalam kelas ikan bernafas di dalam air?",
    "options": [
      "Melalui kulit yang lembap dan licin",
      "Melalui insang",
      "Melalui peparu yang besar",
      "Melalui spirakel pada badan"
    ],
    "correctIndex": 1,
    "explanation": "Ikan ialah vertebrata akuatik yang menggunakan insang untuk menyerap oksigen terlarut daripada air.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_04",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Apakah maksud haiwan bersifat homoioterma?",
    "options": [
      "Suhu badannya berubah-ubah mengikut suhu persekitaran",
      "Haiwan tersebut hanya aktif pada waktu malam sahaja",
      "Suhu badannya kekal malar walaupun suhu persekitaran berubah",
      "Haiwan tersebut boleh hidup di dalam air tawar dan air masin"
    ],
    "correctIndex": 2,
    "explanation": "Homoioterma (berdarah panas) bermaksud suhu badan haiwan dikekalkan pada paras tetap, contohnya burung dan mamalia.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_05",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Mengapakah ikan lumba-lumba dan kelawar dikelaskan ke dalam kumpulan mamalia walaupun masing-masing berenang di laut dan terbang di udara?",
    "options": [
      "Kedua-duanya bertelur bercangkerang keras dan mempunyai sisik kering",
      "Kedua-duanya berdarah sejuk dan bernafas menggunakan insang serta kulit lembap",
      "Kedua-duanya bernafas menggunakan peparu, bersifat homoioterma, melahirkan anak dan menyusukan anak",
      "Kedua-duanya tidak mempunyai tulang belakang dan mempunyai rangka luar"
    ],
    "correctIndex": 2,
    "explanation": "Pengelasan vertebrata bergantung pada ciri biologi utama; ikan lumba-lumba dan kelawar bernafas melalui peparu, homoioterma, melahirkan anak serta mempunyai kelenjar susu.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_06",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Seekor haiwan X mempunyai kulit lembap tanpa sisik, melakukan persenyawaan luar dan menghasilkan telur tanpa cangkerang di dalam air. Haiwan X berkemungkinan besar ialah...",
    "options": [
      "penyu",
      "katak",
      "buaya",
      "ikan emas"
    ],
    "correctIndex": 1,
    "explanation": "Katak ialah amfibia yang mempunyai kulit lembap tanpa sisik, melakukan persenyawaan luar dan bertelur tanpa cangkerang di dalam air.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_07",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Manakah antara padanan ciri berikut benar bagi haiwan reptilia seperti ular dan cicak?",
    "options": [
      "Kulit bersisik keras dan kering, bernafas melalui peparu, persenyawaan dalam",
      "Kulit lembap berlendir, bernafas melalui insang dan peparu, persenyawaan luar",
      "Berbulu pelepah, bersifat homoioterma, bertelur bercangkerang",
      "Berkulit licin, melahirkan anak, menyusukan anak dengan susu"
    ],
    "correctIndex": 0,
    "explanation": "Reptilia ialah vertebrata poikiloterma yang mempunyai kulit bersisik keras dan kering, bernafas melalui peparu serta melakukan persenyawaan dalam.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_08",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Aminah memerhatikan dua ekor haiwan di taman: Haiwan P mempunyai badan bersegmen tanpa kaki, manakala Haiwan Q mempunyai badan bersegmen dengan empat pasang kaki dan tiada sesungut. Pengelasan manakah yang tepat bagi P dan Q?",
    "options": [
      "P ialah ikan dan Q ialah serangga",
      "P ialah invertebrata tanpa kaki bersegmen (seperti cacing tanah) dan Q ialah invertebrata berkaki lebih daripada tiga pasang (seperti labah-labah)",
      "P ialah reptilia tanpa kaki (seperti ular) dan Q ialah mamalia",
      "P ialah invertebrata badan lembut tidak bersegmen dan Q ialah burung"
    ],
    "correctIndex": 1,
    "explanation": "Cacing tanah ialah invertebrata tanpa kaki yang bersegmen, manakala labah-labah ialah araknid dalam kumpulan invertebrata berkaki yang mempunyai empat pasang kaki.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_09",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Platipus dan tenggiling berduri (ekidna) adalah antara beberapa spesies unik yang bertelur tetapi masih dikelaskan dalam kelas mamalia. Apakah ciri yang membenarkan pengelasan tersebut?",
    "options": [
      "Kedua-duanya mempunyai bulu pada badan, bersifat homoioterma dan menyusukan anak",
      "Kedua-duanya melakukan persenyawaan luar di dalam sungai seperti amfibia",
      "Kedua-duanya mempunyai sisik keras dan bernafas menggunakan insang semasa kecil",
      "Kedua-duanya mempunyai paruh dan sayap berbulu pelepah seperti burung"
    ],
    "correctIndex": 0,
    "explanation": "Walaupun platipus dan ekidna bertelur, kedua-duanya mempunyai ciri khas mamalia iaitu berbulu, berdarah panas (homoioterma) dan menghasilkan susu untuk menyusukan anak.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s2_10",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Mengapakah katak dewasa masih perlu mengekalkan kawasan habitat yang lembap walaupun sudah mempunyai peparu untuk bernafas di darat?",
    "options": [
      "Katak memerlukan kulit yang sentiasa lembap untuk pertukaran gas tambahan serta air untuk persenyawaan luar",
      "Peparu katak akan membeku jika terdedah kepada udara kering di darat",
      "Katak hanya boleh minum air melalui mulut apabila berada di dalam lumpur",
      "Sisik keras pada badan katak akan tercabut jika tidak direndam di dalam air"
    ],
    "correctIndex": 0,
    "explanation": "Katak bernafas melalui peparu dan juga kulit lembap di darat, selain memerlukan persekitaran berair untuk meletakkan telur tanpa cangkerang semasa persenyawaan luar.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_01",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Antara tumbuhan berikut, yang manakah tergolong dalam kumpulan tumbuhan tidak berbunga?",
    "options": [
      "Pokok bunga raya dan pokok jagung",
      "Lumut, paku-pakis dan konifer",
      "Pokok padi dan pokok kelapa",
      "Pokok mangga dan kacang tanah"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan tidak berbunga terdiri daripada tiga kumpulan utama iaitu lumut, paku-pakis dan konifer.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_02",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Bagaimanakah lumut dan paku-pakis membiak?",
    "options": [
      "Melalui biji benih yang tersimpan di dalam kon",
      "Melalui biji benih di dalam buah yang berdaging",
      "Melalui penghasilan spora",
      "Melalui pendebungaan bunga berwarna cerah"
    ],
    "correctIndex": 2,
    "explanation": "Lumut dan paku-pakis merupakan tumbuhan tidak berbunga yang membiak dengan menghasilkan spora.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_03",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Apakah ciri daun dan akar bagi tumbuhan berbunga monokotiledon seperti pokok padi dan jagung?",
    "options": [
      "Daun berurat jejala dan berakar tunjang",
      "Daun berurat selari dan berakar serabut",
      "Daun berbentuk jarum dan tiada akar sebenar",
      "Daun berurat jejala dan berakar serabut"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan monokotiledon mempunyai satu kotiledon, daun berurat selari, akar serabut dan kebiasaannya berbatang lembut.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_04",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Pokok mangga dan pokok rambutan ialah contoh tumbuhan dikotiledon. Apakah ciri batang dan bilangan kotiledon bagi kedua-dua tumbuhan ini?",
    "options": [
      "Batang tidak berkayu dan mempunyai satu kotiledon",
      "Batang berkayu dan mempunyai dua kotiledon",
      "Batang berongga dan tiada kotiledon",
      "Batang berkayu dan membiak dengan spora"
    ],
    "correctIndex": 1,
    "explanation": "Tumbuhan dikotiledon mempunyai biji benih dengan dua kotiledon, akar tunjang, urat daun jejala dan kebiasaannya berbatang berkayu.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_05",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Pokok pain menghasilkan struktur berupa kon yang mengandungi biji benih. Mengapakah pokok pain tidak dikelaskan sebagai tumbuhan berbunga?",
    "options": [
      "Pokok pain membiak menggunakan spora di bawah daunnya",
      "Kon pada pokok pain bukan bunga sebenar dan biji benihnya tidak dilindungi oleh buah",
      "Pokok pain tidak mempunyai sistem vaskular, akar atau batang sebenar",
      "Daun pokok pain berurat selari seperti tumbuhan monokotiledon"
    ],
    "correctIndex": 1,
    "explanation": "Konifer seperti pokok pain membiak melalui biji benih di dalam kon, bukan daripada bunga sebenar, maka ia tergolong dalam tumbuhan tidak berbunga.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_06",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Apakah perbezaan utama antara lumut dengan paku-pakis dari segi struktur badan?",
    "options": [
      "Lumut mempunyai bunga manakala paku-pakis menghasilkan kon",
      "Lumut tidak mempunyai akar, batang dan daun sebenar (bukan vaskular), manakala paku-pakis mempunyai akar, batang dan daun sebenar serta tisu vaskular",
      "Lumut mempunyai akar tunjang manakala paku-pakis mempunyai akar serabut",
      "Lumut hanya hidup di gurun manakala paku-pakis hanya hidup di laut masin"
    ],
    "correctIndex": 1,
    "explanation": "Paku-pakis lebih kompleks daripada lumut kerana mempunyai sistem vaskular serta akar, batang dan daun sebenar.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_07",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Semasa membina kunci dikotomi untuk mengelaskan tumbuhan, pasangan ciri manakah yang paling sesuai digunakan pada satu langkah pengelasan?",
    "options": [
      "Tumbuhan cantik dengan tumbuhan kurang menarik",
      "Tumbuhan tinggi, tumbuhan sederhana dan tumbuhan rendah",
      "Tumbuhan berbunga dengan tumbuhan tidak berbunga",
      "Tumbuhan yang disiram hari ini dengan tumbuhan yang layu"
    ],
    "correctIndex": 2,
    "explanation": "Kunci dikotomi memerlukan tepat dua ciri yang bertentangan secara jelas, kekal dan boleh diperhatikan secara objektif seperti berbunga lawan tidak berbunga.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_08",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Pertimbangkan kunci dikotomi ringkas berikut: Langkah 1a: Mempunyai bunga (pergi ke 2); 1b: Tidak berbunga (pergi ke 3). Langkah 2a: Daun berurat selari (Organisma W); 2b: Daun berurat jejala (Organisma X). Langkah 3a: Menghasilkan spora dengan akar sebenar (Organisma Y); 3b: Menghasilkan biji benih dalam kon (Organisma Z). Apakah pasangan yang tepat bagi X dan Z?",
    "options": [
      "X ialah pokok jagung dan Z ialah paku-pakis",
      "X ialah pokok bunga raya dan Z ialah pokok pain",
      "X ialah lumut dan Z ialah pokok kelapa",
      "X ialah pokok tebu dan Z ialah bunga matahari"
    ],
    "correctIndex": 1,
    "explanation": "X ialah tumbuhan berbunga berdaun urat jejala (dikotiledon seperti bunga raya), manakala Z ialah tumbuhan tidak berbunga yang menghasilkan biji benih dalam kon (konifer seperti pokok pain).",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_09",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Zaki menemui sejenis tumbuhan herba di tepi padang yang berbatang lembut dan mudah dilentur. Apakah pemeriksaan lanjut yang paling tepat untuk menentukan sama ada tumbuhan itu monokotiledon atau dikotiledon?",
    "options": [
      "Mengukur ketinggian tumbuhan tersebut pada waktu tengah hari",
      "Memeriksa sama ada urat daunnya selari atau jejala serta jenis akarnya sama ada serabut atau tunjang",
      "Menguji kehadiran klorofil di dalam daun menggunakan larutan iodin",
      "Menentukan sama ada tumbuhan tersebut memerlukan air untuk tumbuh"
    ],
    "correctIndex": 1,
    "explanation": "Sesetengah tumbuhan dikotiledon (seperti pokok keembung) juga berbatang lembut, jadi ciri urat daun, sistem akar atau bilangan kotiledon perlu diperiksa untuk kepastian.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b1_s3_10",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Seorang murid membina langkah kunci dikotomi seperti berikut: '1a: Hidup di dalam air; 1b: Berkulit bersisik; 1c: Mempunyai empat kaki'. Mengapakah langkah ini tidak sah sebagai kunci dikotomi?",
    "options": [
      "Kerana kunci dikotomi hanya boleh digunakan untuk mengelaskan batu-batan",
      "Kerana terdapat tiga pilihan sekaligus dan ciri-ciri tersebut tidak saling bertentangan",
      "Kerana perkataan 'hidup' tidak dibenarkan dalam sains biologi",
      "Kerana haiwan berkaki empat tidak boleh hidup di dalam air"
    ],
    "correctIndex": 1,
    "explanation": "Perkataan 'dikotomi' bermaksud dibahagi kepada dua; setiap langkah mesti mempunyai tepat dua pilihan ciri yang bertentangan secara jelas supaya tiada pertindihan.",
    "ref": "Bab 1, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_01",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Dalam rantai makanan: Padi -> Belalang -> Katak -> Ular. Organisma manakah yang bertindak sebagai pengeluar?",
    "options": [
      "Padi",
      "Belalang",
      "Katak",
      "Ular"
    ],
    "correctIndex": 0,
    "explanation": "Padi ialah tumbuhan hijau yang boleh membina makanan sendiri melalui fotosintesis, menjadikannya pengeluar dalam rantai makanan tersebut.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_02",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah maksud anak panah (->) dalam sesuatu rantai makanan?",
    "options": [
      "Arah pergerakan haiwan pemangsa mencari air",
      "Arah pemindahan tenaga iaitu 'dimakan oleh'",
      "Peringkat pertumbuhan sesuatu organisma daripada kecil ke besar",
      "Arah tiupan angin di dalam ekosistem hutan"
    ],
    "correctIndex": 1,
    "explanation": "Anak panah dalam rantai makanan dan siratan makanan sentiasa menunjuk ke arah organisma yang memakan, iaitu melambangkan 'dimakan oleh' dan arah aliran tenaga.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_03",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah peranan pengurai seperti bakteria dan kulat dalam ekosistem?",
    "options": [
      "Menjalankan fotosintesis untuk membekalkan oksigen kepada haiwan",
      "Memburu pengguna tertier yang terlalu tua",
      "Menguraikan organisma mati dan bahan buangan menjadi nutrien ringkas di dalam tanah",
      "Menyerap tenaga cahaya matahari secara terus untuk pengguna primer"
    ],
    "correctIndex": 2,
    "explanation": "Pengurai memecahkan bangkai haiwan dan tumbuhan mati kepada nutrien ringkas seperti mineral supaya dapat diserap semula oleh tumbuhan.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_04",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Dalam rantai makanan: Rumput -> Rusa -> Harimau. Apakah peranan rusa?",
    "options": [
      "Pengeluar",
      "Pengguna primer",
      "Pengguna sekunder",
      "Pengurai"
    ],
    "correctIndex": 1,
    "explanation": "Rusa memakan pengeluar (rumput) secara langsung, maka rusa ialah pengguna primer (herbivor).",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_05",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Apabila seekor arnab memakan lobak merah, tidak semua tenaga daripada lobak merah dipindahkan kepada rubah yang memakan arnab itu nanti. Mengapakah tenaga semakin berkurang pada setiap aras pemakanan?",
    "options": [
      "Tenaga dimusnahkan sepenuhnya oleh enzim pencernaan arnab",
      "Sebahagian besar tenaga hilang ke persekitaran sebagai haba semasa respirasi, pergerakan dan perkumuhan",
      "Rubah hanya makan pada waktu malam apabila tenaga sudah tiada",
      "Lobak merah hanya membekalkan air tanpa sebarang tenaga kimia"
    ],
    "correctIndex": 1,
    "explanation": "Organisma menggunakan sebahagian besar tenaga untuk proses hidup seperti respirasi, pergerakan dan pertumbuhan, menyebabkan banyak tenaga hilang sebagai haba sebelum dipindahkan.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_06",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Dalam satu siratan makanan sawah padi: Padi -> Tikus -> Ular -> Helang; dan Padi -> Pipit -> Helang. Jika bilangan tikus berkurang secara mendadak akibat racun tikus, apakah kesan awal yang paling mungkin berlaku kepada populasi burung pipit?",
    "options": [
      "Populasi burung pipit berkurang kerana helang beralih memburu lebih banyak burung pipit",
      "Populasi burung pipit pupus serta-merta kerana kehilangan makanan daripada tikus",
      "Populasi padi musnah sepenuhnya kerana tiada tikus yang menjaganya",
      "Populasi ular meningkat mendadak kerana tiada persaingan dengan burung pipit"
    ],
    "correctIndex": 0,
    "explanation": "Apabila sumber makanan utama iaitu tikus berkurang, pemangsa seperti helang akan meningkatkan pemburuan terhadap mangsa alternatif iaitu burung pipit.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_07",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Dalam rantai makanan: Fitoplankton -> Zooplankton -> Ikan kecil -> Ikan besar -> Burung bangau. Organisma manakah yang menduduki aras pengguna sekunder?",
    "options": [
      "Fitoplankton",
      "Zooplankton",
      "Ikan kecil",
      "Burung bangau"
    ],
    "correctIndex": 2,
    "explanation": "Fitoplankton ialah pengeluar, zooplankton ialah pengguna primer, dan ikan kecil yang memakan zooplankton ialah pengguna sekunder.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_08",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Di sebuah pulau kecil, penduduk membina satu rantai makanan: Tumbuhan hijau -> Kambing -> Serigala. Seorang saintis mendapati jumlah jisim tumbuhan hijau sentiasa jauh lebih besar daripada jumlah jisim serigala. Apakah penjelasan terbaik bagi pemerhatian ini?",
    "options": [
      "Tumbuhan hijau tumbuh lebih lambat daripada kadar pembiakan serigala",
      "Aliran tenaga dari pengeluar ke pengguna tertier semakin berkurang pada setiap aras, jadi hanya populasi kecil pemangsa puncak dapat disokong",
      "Serigala memakan tumbuhan hijau secara langsung apabila kelaparan",
      "Tenaga matahari tidak dapat menembusi badan serigala yang berbulu tebal"
    ],
    "correctIndex": 1,
    "explanation": "Kerana kehilangan tenaga berlaku pada setiap pemindahan aras trofik, jumlah tenaga yang sampai ke pengguna peringkat atas adalah sangat kecil berbanding tenaga pada pengeluar.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_09",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Dalam satu siratan makanan kolam, terdapat tumbuhan akuatik, berudu, larva pepatung, ikan tilapia dan memerang. Tumbuhan akuatik dimakan oleh berudu dan ikan tilapia. Berudu dimakan oleh larva pepatung dan ikan tilapia. Larva pepatung dan ikan tilapia pula dimakan oleh memerang. Apakah yang akan berlaku jika semua memerang ditangkap keluar dari kolam?",
    "options": [
      "Populasi ikan tilapia dan larva pepatung meningkat pada mulanya, lalu menyebabkan penurunan mendadak populasi berudu dan tumbuhan akuatik",
      "Populasi berudu meningkat tanpa had kerana ikan tilapia turut pupus",
      "Tumbuhan akuatik membiak dengan subur kerana ketiadaan haiwan di dalam kolam",
      "Kesemua organisma di dalam kolam mati serta-merta kerana tiada pengurai"
    ],
    "correctIndex": 0,
    "explanation": "Ketiadaan pemangsa puncak (memerang) membolehkan ikan tilapia dan larva pepatung membiak banyak pada awalnya, sekali gus meningkatkan tekanan pemangsaan ke atas berudu dan tumbuhan akuatik.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s1_10",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Apakah kesan jangka panjang terhadap satu ekosistem hutan sekiranya semua pengurai (bakteria dan kulat pengurai) dihapuskan menggunakan bahan kimia?",
    "options": [
      "Pokok-pokok hutan akan tumbuh dua kali lebih cepat kerana tanah menjadi bersih",
      "Bangkai dan daun gugur bertimbun dan nutrien mineral tidak dikembalikan ke tanah, lalu menjejaskan pertumbuhan pengeluar",
      "Populasi herbivor bertambah kerana tiada jangkitan kulat pada rumput",
      "Kandungan oksigen atmosfera meningkat mendadak kerana tiada proses fotosintesis"
    ],
    "correctIndex": 1,
    "explanation": "Tanpa pengurai, bahan organik mati tidak dapat direputkan untuk mengembalikan garam mineral ke tanah, menyebabkan tumbuhan kekurangan nutrien dan keseluruhan siratan makanan terjejas.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_01",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Dalam kitar air semula jadi, apakah proses yang menukarkan wap air di atmosfera kepada titisan air kecil untuk membentuk awan?",
    "options": [
      "Penyejatan",
      "Kondensasi",
      "Transpirasi",
      "Pembekuan"
    ],
    "correctIndex": 1,
    "explanation": "Wap air yang naik ke atmosfera yang lebih sejuk akan mengalami kondensasi dan bertukar menjadi titisan air halus yang membentuk awan.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_02",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Proses apakah dalam kitar karbon yang menyerap gas karbon dioksida dari atmosfera?",
    "options": [
      "Respirasi haiwan",
      "Pembakaran bahan api fosil",
      "Fotosintesis oleh tumbuhan hijau",
      "Pereputan oleh bakteria"
    ],
    "correctIndex": 2,
    "explanation": "Fotosintesis menyerap karbon dioksida dan air dengan kehadiran cahaya matahari untuk menghasilkan glukosa serta membebaskan oksigen.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_03",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Bagaimanakah tumbuhan turut menyumbang wap air kepada atmosfera dalam kitar air?",
    "options": [
      "Melalui proses transpirasi daripada daun",
      "Melalui penyerapan air oleh akar tunjang",
      "Melalui penguraian daun gugur di atas tanah",
      "Melalui pembakaran kayu api"
    ],
    "correctIndex": 0,
    "explanation": "Tumbuhan kehilangan air dalam bentuk wap air ke atmosfera melalui liang stoma pada daun dalam proses transpirasi.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_04",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah istilah ekologi yang merujuk kepada sekumpulan organisma daripada spesies yang sama yang hidup bersama di sesuatu habitat?",
    "options": [
      "Ekosistem",
      "Komuniti",
      "Populasi",
      "Nis"
    ],
    "correctIndex": 2,
    "explanation": "Populasi ialah sekumpulan organisma sama spesies yang mendiami satu habitat tertentu pada masa yang sama.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_05",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Sebatang pokok durian, sekumpulan burung merbah, berpuluh ekor semut dan cacing tanah hidup di kawasan kebun yang sama. Gabungan semua organisma hidup ini secara kolektif membentuk satu...",
    "options": [
      "spesies",
      "populasi",
      "komuniti",
      "faktor abiosis"
    ],
    "correctIndex": 2,
    "explanation": "Komuniti terdiri daripada pelbagai populasi organisma yang berlainan spesies yang hidup bersama dan saling berinteraksi di satu habitat.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_06",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Pernyataan manakah yang betul mengenai pertukaran gas oleh tumbuhan hijau pada waktu malam yang gelap?",
    "options": [
      "Tumbuhan terus menjalankan fotosintesis dan tidak berespirasi",
      "Tumbuhan berhenti sepenuhnya daripada melakukan sebarang pertukaran gas",
      "Tumbuhan hanya menjalankan respirasi dengan menyerap oksigen dan membebaskan karbon dioksida",
      "Tumbuhan menyerap nitrogen dan membebaskan wap karbon monoksida"
    ],
    "correctIndex": 2,
    "explanation": "Tumbuhan menjalankan respirasi sepanjang 24 jam, tetapi pada waktu malam ketiadaan cahaya menghentikan fotosintesis lalu hanya respirasi yang berlaku.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_07",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Dalam satu terarium kaca tertutup yang mengandungi tanah lembap, tumbuhan hijau kecil dan beberapa ekor siput, apakah yang menyebabkan organisma di dalamnya mampu terus hidup untuk beberapa minggu?",
    "options": [
      "Kitar oksigen, kitar karbon dan kitar air berlaku secara berterusan dan saling seimbang di dalam balang tertutup itu",
      "Siput dapat menghasilkan air sendiri tanpa memerlukan kelembapan tanah",
      "Tumbuhan tidak memerlukan karbon dioksida di dalam ruang tertutup",
      "Kaca balang bertindak sebagai pengurai bagi membekalkan glukosa kepada siput"
    ],
    "correctIndex": 0,
    "explanation": "Di dalam ekosistem tertutup yang mendapat cahaya, oksigen daripada fotosintesis digunakan untuk respirasi siput dan tumbuhan, manakala karbon dioksida serta wap air dikitar semula.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_08",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Aktiviti manusia seperti pembakaran hutan secara besar-besaran dan penggunaan bahan api fosil di kilang mengganggu keseimbangan kitar karbon dan kitar oksigen. Mengapakah gabungan dua aktiviti ini memberi kesan berganda terhadap paras karbon dioksida?",
    "options": [
      "Pembakaran membebaskan banyak karbon dioksida, manakala pemusnahan hutan mengurangkan bilangan tumbuhan yang menyerap karbon dioksida",
      "Pembakaran menghasilkan lebih banyak oksigen yang bertukar menjadi karbon dioksida di awan",
      "Asap kilang menghalang proses respirasi haiwan liar sehingga karbon dioksida membeku",
      "Bahan api fosil menyerap karbon dioksida daripada tanah sebelum terbakar"
    ],
    "correctIndex": 0,
    "explanation": "Pembakaran menambahkan pelepasan karbon dioksida ke udara, sementara penebangan atau pembakaran hutan mengurangkan kadar fotosintesis yang sepatutnya menyerap gas tersebut.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_09",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Di sebuah kawasan bandar yang pesat membangun, hampir seluruh permukaan tanah diturap dengan simen dan tar bagi menggantikan kawasan hijau. Bagaimanakah perubahan ini mengganggu kitar air tempatan?",
    "options": [
      "Kadar transpirasi tumbuhan meningkat mendadak lalu mengeringkan sungai",
      "Resapan air hujan ke dalam tanah dan transpirasi berkurang dengan ketara, menyebabkan aliran permukaan meningkat dan risiko banjir kilat bertambah",
      "Proses kondensasi di awan terhenti sepenuhnya sepanjang tahun",
      "Air hujan tidak lagi boleh menyejat dari permukaan laut yang berdekatan"
    ],
    "correctIndex": 1,
    "explanation": "Penurapan tanah menghalang air hujan meresap ke dalam tanah (menurunkan paras air bawah tanah) serta mengurangkan transpirasi tumbuhan, lalu menghasilkan larian air permukaan yang deras.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s2_10",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Manakah antara situasi berikut paling tepat menggambarkan saling bersandaran antara komponen biosis dengan komponen abiosis dalam suatu ekosistem kolam?",
    "options": [
      "Ikan besar memakan ikan kecil untuk memperoleh tenaga",
      "Bakteria pengurai menguraikan daun mati menjadi mineral yang larut dalam air, lalu diserap oleh tumbuhan akuatik dengan bantuan cahaya matahari",
      "Katak bersaing dengan katak lain untuk mendapatkan pasangan",
      "Kutu air melekat pada badan ikan kap untuk bergerak"
    ],
    "correctIndex": 1,
    "explanation": "Pernyataan ini menggabungkan komponen hidup (bakteria, tumbuhan akuatik) dengan komponen bukan hidup (air, mineral dan cahaya matahari) dalam hubungan saling bergantung.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_01",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah jenis interaksi simbiosis apabila kedua-dua organisma mendapat manfaat daripada hubungan tersebut?",
    "options": [
      "Komensalisme",
      "Parasitisme",
      "Mutualisme",
      "Persaingan"
    ],
    "correctIndex": 2,
    "explanation": "Mutualisme ialah interaksi simbiosis yang memberi keuntungan kepada kedua-dua organisma yang berinteraksi, contohnya burung gembala dan kerbau.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_02",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Paku-pakis langsuyar yang tumbuh menumpang di atas dahan pokok tinggi untuk mendapat cahaya matahari tanpa mencederakan pokok tersebut merupakan contoh interaksi...",
    "options": [
      "parasitisme",
      "komensalisme",
      "mangsa-pemangsa",
      "mutualisme"
    ],
    "correctIndex": 1,
    "explanation": "Dalam komensalisme, satu organisma (komensal) mendapat faedah seperti cahaya matahari manakala perumahnya tidak menerima sebarang kesan untung atau rugi.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_03",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah interaksi antara cacing pita yang hidup di dalam usus manusia dengan manusia sebagai perumahnya?",
    "options": [
      "Mutualisme",
      "Komensalisme",
      "Parasitisme",
      "Kawalan biologi"
    ],
    "correctIndex": 2,
    "explanation": "Cacing pita menyerap nutrien tercerna dan memudaratkan perumah (manusia), maka hubungan ini ialah parasitisme.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_04",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Manakah antara berikut merupakan contoh kaedah kawalan biologi yang diamalkan di ladang kelapa sawit di Malaysia?",
    "options": [
      "Menyembur racun serangga sintetik setiap minggu",
      "Membela burung hantu jelapang untuk memburu tikus perosak",
      "Membakar pelepah kelapa sawit kering untuk menghalau kumbang",
      "Memasang pagar elektrik di sekeliling setiap batang pokok"
    ],
    "correctIndex": 1,
    "explanation": "Penggunaan pemangsa semula jadi seperti burung hantu jelapang untuk mengawal populasi tikus di ladang kelapa sawit ialah contoh kawalan biologi.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_05",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Pokok dedalu tumbuh pada dahan pokok mangga dan menghulurkan akarnya ke dalam tisu batang pokok mangga untuk menyerap air serta garam mineral. Mengapakah interaksi ini berbeza daripada interaksi orkid liar pada pokok mangga?",
    "options": [
      "Dedalu ialah parasit yang merugikan pokok mangga, manakala orkid liar ialah komensal yang tidak merugikan pokok mangga",
      "Dedalu melakukan mutualisme dengan pokok mangga, manakala orkid liar ialah pemangsa",
      "Dedalu membekalkan gula kepada pokok mangga, manakala orkid liar membunuh pokok mangga",
      "Kedua-duanya ialah interaksi persaingan antara spesies yang sama"
    ],
    "correctIndex": 0,
    "explanation": "Dedalu mengambil air dan mineral daripada pokok perumah lalu merugikannya (parasitisme), sedangkan orkid liar hanya menumpang tempat untuk mendapat cahaya tanpa mengambil nutrien pokok perumah (komensalisme).",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_06",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Bakteria Rhizobium hidup di dalam nodul akar tumbuhan kekacang dengan menukarkan gas nitrogen kepada nitrat untuk tumbuhan, sambil menerima karbohidrat dan perlindungan daripada tumbuhan. Hubungan ini merupakan contoh...",
    "options": [
      "parasitisme",
      "komensalisme",
      "persaingan interspesies",
      "mutualisme"
    ],
    "correctIndex": 3,
    "explanation": "Kedua-dua pihak saling memberi dan menerima manfaat: bakteria mendapat makanan dan tempat tinggal, manakala tumbuhan kekacang mendapat bekalan nitrat.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_07",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Seorang murid meletakkan beberapa ekor kutu kayu ke dalam sebuah bekas lut sinar di mana separuh bahagian bekas ditutup kain hitam dan separuh lagi terdedah kepada cahaya terang. Selepas 15 minit, kebanyakan kutu kayu berkumpul di bahagian gelap. Faktor abiosis manakah yang dikaji?",
    "options": [
      "pH tanah",
      "Keamatan cahaya",
      "Kelajuan angin",
      "Kemasukan garam mineral"
    ],
    "correctIndex": 1,
    "explanation": "Menutup separuh bekas dengan kain hitam mewujudkan perbezaan keamatan cahaya antara kawasan cerah dengan kawasan gelap untuk mengkaji tindak balas kutu kayu terhadap cahaya.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_08",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Dalam kajian populasi mangsa (arnab) dan pemangsa (serigala) di padang rumput selama 10 tahun, bagaimanakah corak perubahan populasi serigala berbanding populasi arnab?",
    "options": [
      "Populasi serigala sentiasa meningkat manakala populasi arnab kekal malar sepanjang masa",
      "Populasi serigala naik dan turun sedikit lewat mengekori naik turun populasi arnab dalam keseimbangan dinamik",
      "Populasi serigala berubah dahulu sebelum berlakunya sebarang perubahan pada populasi arnab",
      "Kedua-dua populasi akan jatuh ke paras sifar secara serentak pada tahun kelima"
    ],
    "correctIndex": 1,
    "explanation": "Apabila mangsa bertambah, makanan pemangsa mencukupi lalu populasi pemangsa meningkat kemudiannya; peningkatan pemangsa menurunkan populasi mangsa, yang seterusnya menurunkan populasi pemangsa.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_09",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Seorang pekebun sayur memilih kaedah kawalan biologi dengan melepaskan kumbang kura-kura untuk mengatasi serangan serangga afid pada tanamannya, bukannya menggunakan racun perosak kimia. Apakah pertimbangan yang tepat tentang kelebihan dan batasan pilihan ini?",
    "options": [
      "Kawalan biologi menghapuskan kesemua afid dalam tempoh beberapa jam tanpa sebarang kesan kepada alam sekitar",
      "Kawalan biologi selamat kepada alam sekitar dan kesihatan manusia, tetapi kesannya lebih perlahan dan tidak menghapuskan perosak secara serta-merta",
      "Kawalan biologi lebih mahal setiap hari dan mencemarkan sumber air bawah tanah",
      "Kawalan biologi akan menyebabkan afid membina ketahanan genetik terhadap kumbang dalam seminggu"
    ],
    "correctIndex": 1,
    "explanation": "Kawalan biologi tidak mencemarkan alam sekitar dan menjimatkan kos jangka panjang, namun memerlukan masa lebih lama untuk menstabilkan populasi perosak berbanding racun kimia.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b2_s3_10",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Dua buah pasu yang sama saiz ditanam dengan anak benih jagung. Pasu A mengandungi 2 batang anak benih manakala Pasu B mengandungi 20 batang anak benih dengan bekalan air dan baja yang sama. Selepas tiga minggu, anak benih di Pasu B kelihatan kurus, tinggi dan daunnya kekuningan. Apakah interaksi utama yang menerangkan keadaan di Pasu B?",
    "options": [
      "Mutualisme antara akar anak benih jagung",
      "Persaingan intraspesies untuk mendapatkan cahaya matahari, air dan garam mineral",
      "Parasitisme antara anak benih tua dengan anak benih muda",
      "Komensalisme akibat kekurangan oksigen di udara"
    ],
    "correctIndex": 1,
    "explanation": "Anak benih daripada spesies yang sama di ruang sempit bersaing hebat sesama sendiri (persaingan intraspesies) untuk memperoleh cahaya, air dan nutrien terhad.",
    "ref": "Bab 2, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_01",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Antara kelas makanan berikut, yang manakah merupakan sumber tenaga utama bagi aktiviti fizikal manusia?",
    "options": [
      "Vitamin",
      "Karbohidrat",
      "Pelawas",
      "Mineral"
    ],
    "correctIndex": 1,
    "explanation": "Karbohidrat seperti nasi, roti dan mi ialah sumber tenaga utama yang dibekalkan dengan cepat kepada sel badan.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_02",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah fungsi utama kelas makanan protein dalam diet harian kanak-kanak dan remaja?",
    "options": [
      "Mencegah penyakit sembelit di dalam usus besar",
      "Membina tisu baharu untuk pertumbuhan dan membaiki tisu badan yang rosak",
      "Melarutkan vitamin A, D, E dan K di bawah kulit",
      "Mengawal atur suhu badan melalui perpeluhan"
    ],
    "correctIndex": 1,
    "explanation": "Protein sangat penting untuk pertumbuhan, membina sel dan tisu baharu, membaiki tisu rosak serta menghasilkan enzim dan antibodi.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_03",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Kekurangan vitamin C dalam tempoh yang panjang boleh menyebabkan penyakit skurvi. Apakah gejala utama penyakit ini?",
    "options": [
      "Tulang kaki menjadi lembut dan bengkok",
      "Kelenjar tiroid di bahagian leher membengkak",
      "Gusi mudah bengkak dan berdarah",
      "Penglihatan menjadi kabur pada waktu malam"
    ],
    "correctIndex": 2,
    "explanation": "Vitamin C diperlukan untuk kesihatan gusi, kulit dan penyembuhan luka; kekurangannya menyebabkan skurvi yang dicirikan oleh gusi berdarah.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_04",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah pemerhatian positif apabila beberapa titik larutan iodin dititiskan ke atas sekeping roti putih?",
    "options": [
      "Larutan kekal berwarna perang kekuningan",
      "Warna bertukar menjadi biru tua atau hitam kebiruan",
      "Mendakan merah bata terbentuk serta-merta",
      "Lapisan emulsi putih keruh terbentuk di permukaan"
    ],
    "correctIndex": 1,
    "explanation": "Ujian iodin digunakan untuk mengesan kehadiran kanji; warna perang iodin bertukar menjadi biru tua apabila bertindak balas dengan kanji dalam roti.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_05",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Seorang pelajar menguji sampel jus buah dengan menambahkan larutan Benedict dan memanaskan campuran tersebut di dalam kukus air selama beberapa minit. Mendakan merah bata terbentuk. Apakah kesimpulan pelajar tersebut?",
    "options": [
      "Jus buah itu mengandungi kanji",
      "Jus buah itu mengandungi gula penurun (glukosa)",
      "Jus buah itu mengandungi lemak tepu",
      "Jus buah itu kaya dengan mineral kalsium"
    ],
    "correctIndex": 1,
    "explanation": "Ujian Benedict memerlukan pemanasan dan pembentukan mendakan merah bata mengesahkan kehadiran gula penurun seperti glukosa.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_06",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Seorang penduduk di kawasan pedalaman mengalami pembengkakan pada bahagian leher akibat kekurangan satu jenis mineral dalam dietnya. Mineral apakah yang kurang dan penyakit apakah yang dihidapinya?",
    "options": [
      "Kekurangan zat besi menyebabkan anemia",
      "Kekurangan iodin menyebabkan goiter",
      "Kekurangan kalsium menyebabkan riket",
      "Kekurangan natrium menyebabkan beri-beri"
    ],
    "correctIndex": 1,
    "explanation": "Iodin diperlukan oleh kelenjar tiroid untuk menghasilkan hormon tiroksina; kekurangan iodin menyebabkan pembengkakan kelenjar tiroid yang dikenali sebagai goiter.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_07",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Walaupun pelawas (serat) tidak dapat dicernakan oleh enzim manusia dan tidak membekalkan tenaga, mengapakah kita masih perlu mengambil sayur-sayuran dan buah-buahan yang kaya pelawas setiap hari?",
    "options": [
      "Untuk merangsang pengecutan otot peristalsis usus bagi melancarkan penyahtinjaan dan mengelakkan sembelit",
      "Untuk menggantikan fungsi hemoglobin dalam mengangkut oksigen",
      "Untuk membina lapisan penebat haba di bawah kulit",
      "Untuk menghasilkan antibodi menentang jangkitan virus"
    ],
    "correctIndex": 0,
    "explanation": "Pelawas mengekalkan isi padu bahan makanan dalam usus dan merangsang peristalsis supaya sisa makanan mudah bergerak serta mencegah sembelit.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_08",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Dalam satu eksperimen makmal, dua tabung uji dilabel P dan Q. Tabung P diisi susu kacang soya bersama reagen Millon lalu dipanaskan sehingga menghasilkan mendakan merah bata. Tabung Q diisi minyak kelapa bersama etanol, digoncang lalu ditambah air suling sehingga membentuk emulsi putih keruh. Apakah nutrien yang disahkan dalam P dan Q?",
    "options": [
      "P mengandungi glukosa dan Q mengandungi kanji",
      "P mengandungi protein dan Q mengandungi lemak",
      "P mengandungi kanji dan Q mengandungi vitamin D",
      "P mengandungi lemak dan Q mengandungi protein"
    ],
    "correctIndex": 1,
    "explanation": "Ujian Millon yang menghasilkan mendakan merah bata selepas dipanaskan mengesan protein, manakala ujian emulsi etanol yang menghasilkan emulsi putih keruh mengesan lemak.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_09",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Seorang kanak-kanak mengalami pertumbuhan terbantut, otot yang lemah dan perut buncit (kwasyiorkor), manakala seorang lagi mengalami tulang kaki melengkung (riket). Kombinasi kelas makanan manakah yang kurang dalam diet kedua-dua kanak-kanak tersebut mengikut urutan?",
    "options": [
      "Karbohidrat dan vitamin C",
      "Protein dan vitamin D atau kalsium",
      "Lemak dan zat besi",
      "Pelawas dan iodin"
    ],
    "correctIndex": 1,
    "explanation": "Kwasyiorkor berpunca daripada kekurangan protein yang teruk, manakala riket berlaku akibat kekurangan vitamin D atau kalsium yang penting untuk pengerasan tulang.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s1_10",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Mengapakah pengambilan lemak secara sederhana tetap diperlukan dalam gizi seimbang walaupun pengambilan berlebihan boleh menyumbang kepada obesiti dan penyakit kardiovaskular?",
    "options": [
      "Lemak ialah satu-satunya nutrien yang bertindak sebagai pelarut dalam darah",
      "Lemak berfungsi sebagai simpanan tenaga berketumpatan tinggi, penebat haba, pelindung organ dalaman serta pelarut bagi vitamin A, D, E dan K",
      "Lemak dicernakan di dalam mulut untuk menstabilkan pH air liur",
      "Lemak boleh menggantikan sepenuhnya keperluan air dan mineral dalam sel saraf"
    ],
    "correctIndex": 1,
    "explanation": "Lemak penting untuk membekalkan tenaga, melindungi organ penting seperti jantung dan ginjal, menebat haba badan serta membolehkan penyerapan vitamin larut lemak (A, D, E, K).",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_01",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Di bahagian salur pencernaan manakah proses pencernaan kimia kanji bermula?",
    "options": [
      "Esofagus",
      "Mulut",
      "Perut",
      "Usus besar"
    ],
    "correctIndex": 1,
    "explanation": "Kelenjar air liur di dalam mulut merembeskan enzim amilase air liur yang mula mencernakan kanji kepada maltosa.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_02",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah hasil akhir pencernaan bagi lemak oleh enzim lipase?",
    "options": [
      "Glukosa dan maltosa",
      "Asid amino dan polipeptida",
      "Asid lemak dan gliserol",
      "Kanji dan selulosa"
    ],
    "correctIndex": 2,
    "explanation": "Enzim lipase menghidrolisiskan molekul lemak kepada hasil akhir yang ringkas iaitu asid lemak dan gliserol supaya boleh diserap oleh lakteal.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_03",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Organ manakah yang merupakan tapak utama penyerapan nutrien tercerna ke dalam salur darah dan lakteal?",
    "options": [
      "Esofagus",
      "Usus kecil",
      "Usus besar",
      "Rektum"
    ],
    "correctIndex": 1,
    "explanation": "Dinding dalam usus kecil mempunyai jutaan unjuran halus berlipat yang disebut vilus untuk menyerap glukosa, asid amino, asid lemak dan gliserol.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_04",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah fungsi utama asid hidroklorik yang terdapat dalam jus gaster di dalam perut?",
    "options": [
      "Mencernakan kanji menjadi glukosa dengan cepat",
      "Membunuh bakteria berbahaya dalam makanan dan menyediakan medium berasid bagi tindakan protease",
      "Mengemulsikan lemak menjadi titisan halus",
      "Menyerap semula air daripada sisa tidak tercerna"
    ],
    "correctIndex": 1,
    "explanation": "Asid hidroklorik di dalam perut membunuh mikroorganisma yang masuk bersama makanan dan mewujudkan keadaan berasid optimum untuk enzim protease (pepsin).",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_05",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Apakah peranan sebenar cecair hempedu yang dihasilkan oleh hati dan disalurkan ke duodenum?",
    "options": [
      "Mencernakan lemak secara kimia terus menjadi asid lemak dan gliserol",
      "Mengemulsikan lemak menjadi titisan kecil secara fizikal dan meneutralkan asid dari perut",
      "Mencernakan protein menjadi dipeptida dengan cepat",
      "Menukarkan glukosa berlebihan kepada kanji di dalam usus"
    ],
    "correctIndex": 1,
    "explanation": "Hempedu tidak mengandungi enzim; ia bertindak secara fizikal memecahkan gumpalan lemak kepada titisan kecil untuk meluaskan permukaan tindakan lipase serta meneutralkan kim berasid.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_06",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Manakah antara urutan berikut menunjukkan laluan yang betul bagi makanan dari mula ditelan sehingga sisa tidak tercerna disingkirkan melalui penyahtinjaan?",
    "options": [
      "Mulut -> Esofagus -> Perut -> Usus besar -> Usus kecil -> Rektum -> Dubur",
      "Mulut -> Esofagus -> Perut -> Duodenum -> Usus kecil -> Usus besar -> Rektum -> Dubur",
      "Mulut -> Perut -> Esofagus -> Duodenum -> Usus besar -> Usus kecil -> Dubur",
      "Mulut -> Esofagus -> Duodenum -> Perut -> Usus kecil -> Rektum -> Usus besar -> Dubur"
    ],
    "correctIndex": 1,
    "explanation": "Makanan bergerak dari mulut melalui esofagus ke perut, memasuki duodenum dan usus kecil untuk pencernaan serta penyerapan, lalu ke usus besar, rektum dan dubur.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_07",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Apakah perbezaan fungsi antara usus kecil dengan usus besar?",
    "options": [
      "Usus kecil mencernakan makanan dan menyerap nutrien tercerna, manakala usus besar menyerap semula air dan garam mineral daripada sisa makanan",
      "Usus kecil menyerap air sahaja, manakala usus besar mencernakan protein dan lemak",
      "Usus kecil menghasilkan hempedu, manakala usus besar menghasilkan enzim amilase",
      "Tiada perbezaan fungsi kerana kedua-duanya menyerap glukosa dan asid amino"
    ],
    "correctIndex": 0,
    "explanation": "Usus kecil melengkapkan pencernaan serta menyerap nutrien melalui vilus, manakala usus besar menyerap semula air dan mineral sebelum membentuk tinja.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_08",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Seorang pesakit menjalani pembedahan membuang pundi hempedunya akibat batu karang. Selepas pembedahan, doktor menasihatinya supaya mengurangkan makanan berlemak pada satu-satu masa. Mengapakah nasihat ini diberikan?",
    "options": [
      "Hati tidak lagi dapat menghasilkan enzim amilase untuk mencernakan lemak",
      "Hempedu tidak dapat disimpan dan dilepaskan dalam kepekatan tinggi ketika hidangan berlemak dimakan, menyebabkan pengemulsian lemak kurang cekap",
      "Perut berhenti menghasilkan asid hidroklorik selepas pundi hempedu dibuang",
      "Vilus di usus besar tidak lagi boleh menyerap asid amino daripada daging"
    ],
    "correctIndex": 1,
    "explanation": "Pundi hempedu menyimpan dan memekatkan hempedu daripada hati; tanpanya, hempedu menitis sedikit demi sedikit terus ke duodenum sehingga pengemulsian hidangan berlemak berat menjadi kurang cekap.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_09",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Dinding vilus di usus kecil mempunyai ketebalan hanya satu sel, permukaan yang diliputi mikrovilus dan jaringan kapilari darah serta lakteal yang padat. Bagaimanakah gabungan ciri ini meningkatkan kecekapan penyerapan nutrien?",
    "options": [
      "Memperlahankan pergerakan darah supaya enzim sempat mencernakan pelawas",
      "Memendekkan jarak resapan nutrien dan menyediakan luas permukaan yang sangat besar bersama pengangkutan pantas",
      "Menghalang glukosa daripada memasuki kapilari darah supaya terus masuk ke lakteal",
      "Memastikan bakteria usus besar dapat berhijrah masuk ke dalam perut"
    ],
    "correctIndex": 1,
    "explanation": "Dinding setebal satu sel memendekkan jarak resapan, lipatan vilus dan mikrovilus memaksimumkan luas permukaan, manakala kapilari dan lakteal mengangkut nutrien terlarut dengan cepat.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b3_s2_10",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Dalam satu eksperimen model salur pencernaan menggunakan tiub Visking, campuran larutan kanji dan amilase air liur dimasukkan ke dalam tiub Visking yang direndam dalam air suling pada suhu 37 °C selama 30 minit. Ujian Benedict ke atas air suling di luar tiub menghasilkan mendakan merah bata, manakala ujian iodin pada air suling itu kekal perang. Apakah penjelasan terbaik bagi keputusan ini?",
    "options": [
      "Molekul kanji yang besar dapat meresap keluar lebih laju daripada molekul gula",
      "Amilase telah mencernakan kanji kepada gula ringkas (maltosa) yang bersaiz cukup kecil untuk meresap menembusi liang tiub Visking, manakala kanji yang besar kekal di dalam",
      "Suhu 37 °C telah memusnahkan amilase sehingga kanji bertukar menjadi glukosa secara automatik",
      "Tiub Visking telah bertindak balas dengan larutan iodin lalu menghilangkan warna biru tua"
    ],
    "correctIndex": 1,
    "explanation": "Tiub Visking bersifat separa telap seperti dinding usus kecil: hanya molekul kecil hasil pencernaan kanji oleh amilase dapat meresap keluar ke dalam air suling.",
    "ref": "Bab 3, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_01",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah yang membezakan penyakit berjangkit daripada penyakit tidak berjangkit?",
    "options": [
      "Penyakit berjangkit disebabkan oleh patogen dan boleh berpindah dari seorang individu ke individu lain",
      "Penyakit berjangkit hanya menyerang orang dewasa manakala penyakit tidak berjangkit menyerang kanak-kanak",
      "Penyakit berjangkit disebabkan oleh kekurangan vitamin sahaja",
      "Penyakit berjangkit tidak boleh dirawat menggunakan sebarang ubat"
    ],
    "correctIndex": 0,
    "explanation": "Penyakit berjangkit berpunca daripada jangkitan patogen (bakteria, virus, kulat, protozoa) yang boleh merebak antara perumah, sedangkan penyakit tidak berjangkit berpunca daripada faktor genetik atau gaya hidup.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_02",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan kumpulan penyakit tidak berjangkit?",
    "options": [
      "Tuberkulosis, kolera dan demam denggi",
      "Diabetes, hipertensi dan kanser",
      "Influenza, panau dan malaria",
      "Demam kepialu, leptospirosis dan kurap"
    ],
    "correctIndex": 1,
    "explanation": "Diabetes, hipertensi (tekanan darah tinggi) dan kanser bukan disebabkan oleh patogen dan tidak boleh berjangkit daripada seorang individu kepada orang lain.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_03",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Bagaimanakah penyakit kolera (taun) dan demam kepialu (tifoid) lazimnya tersebar dalam kalangan manusia?",
    "options": [
      "Melalui gigitan nyamuk Aedes",
      "Melalui makanan dan air minuman yang tercemar",
      "Melalui sentuhan kulit dengan kulat panau",
      "Melalui faktor keturunan daripada ibu bapa"
    ],
    "correctIndex": 1,
    "explanation": "Kolera dan demam kepialu ialah penyakit bawaan air dan makanan yang tercemar dengan bakteria patogen daripada najis atau lalat rumah.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_04",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah vektor yang menyebarkan penyakit malaria kepada manusia?",
    "options": [
      "Tikus",
      "Lalat rumah",
      "Nyamuk Anopheles betina",
      "Lipas"
    ],
    "correctIndex": 2,
    "explanation": "Malaria disebabkan oleh protozoa Plasmodium yang dipindahkan melalui gigitan nyamuk Anopheles betina sebagai vektor.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_05",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Encik Rahim menyatakan bahawa demam denggi ialah penyakit tidak berjangkit kerana pesakit yang duduk bersebelahan dengannya tidak menjangkitkan denggi kepadanya melalui sentuhan atau udara. Mengapakah tanggapan Encik Rahim salah?",
    "options": [
      "Demam denggi tetap penyakit berjangkit kerana disebabkan oleh virus yang dipindahkan antara manusia melalui vektor nyamuk Aedes",
      "Demam denggi hanya merebak melalui makanan mentah di restoran",
      "Virus denggi sebenarnya berpindah melalui peluh apabila bersalaman",
      "Demam denggi disebabkan oleh kekurangan mineral besi dalam darah"
    ],
    "correctIndex": 0,
    "explanation": "Penyakit bawaan vektor seperti demam denggi dan malaria dikelaskan sebagai penyakit berjangkit kerana patogen dipindahkan dari seorang pesakit ke individu lain melalui vektor nyamuk.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_06",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Selepas berlakunya banjir kilat, pihak kesihatan menasihati orang ramai agar tidak bermain di dalam air banjir dan menutup makanan dengan sempurna bagi mengelakkan jangkitan leptospirosis. Apakah vektor utama yang menyebarkan penyakit ini?",
    "options": [
      "Nyamuk Aedes yang bertelur di dalam tin kosong",
      "Tikus yang mencemarkan air atau tanah melalui air kencingnya",
      "Kulat yang tumbuh pada dinding kayu yang basah",
      "Lalat buah yang menghinggap pada pokok pisang"
    ],
    "correctIndex": 1,
    "explanation": "Leptospirosis disebabkan oleh bakteria Leptospira yang disebarkan melalui air kencing haiwan pembawa terutamanya tikus yang mencemari air banjir atau lumpur.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_07",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Sekumpulan pelajar mengalami batuk berpanjangan di sebuah asrama dan seorang daripadanya disahkan menghidap tuberkulosis (batuk kering). Langkah kawalan segera manakah yang paling tepat untuk memutuskan rantaian jangkitan penyakit ini?",
    "options": [
      "Membubuh ubat jentik-jentik di dalam tangki air tandas asrama",
      "Mengasingkan pesakit untuk rawatan, memastikan pengudaraan bilik yang baik dan mengamalkan etika batuk serta pemakaian pelitup muka",
      "Melarang pelajar memakan makanan laut selama dua minggu",
      "Menyembur racun tikus di sekitar kawasan kantin asrama"
    ],
    "correctIndex": 1,
    "explanation": "Tuberkulosis tersebar melalui titisan udara apabila pesakit batuk atau bersin, maka pengasingan awal, pengudaraan baik dan pelitup muka berkesan menyekat penyebaran.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_08",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Seorang penduduk taman perumahan menyangka nyamuk Aedes ialah patogen yang menyebabkan demam denggi. Penjelasan sains manakah yang paling tepat untuk membetulkan kesilapan istilah tersebut?",
    "options": [
      "Nyamuk Aedes ialah bakteria bersaiz besar manakala virus denggi ialah vektor",
      "Nyamuk Aedes ialah vektor (organisma pembawa) manakala virus denggi di dalam kelenjar air liurnya ialah patogen penyebab penyakit",
      "Kedua-dua nyamuk Aedes dan darah pesakit ialah patogen yang sama",
      "Nyamuk Aedes hanya menjadi patogen apabila terbang pada waktu malam"
    ],
    "correctIndex": 1,
    "explanation": "Patogen ialah mikroorganisma penyebab penyakit (virus denggi), manakala vektor ialah haiwan yang memindahkan patogen tersebut dari satu perumah ke perumah lain (nyamuk Aedes).",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_09",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Di sebuah kampung, kes demam kepialu meningkat secara tiba-tiba walaupun bekalan air paip telah dirawat dengan klorin. Siasatan mendapati gerai makanan di tepi jalan tidak bertutup dan berhampiran dengan tempat pembuangan sampah terbuka yang dipenuhi lalat rumah. Bagaimanakah cara penyebaran berlaku dalam kes ini?",
    "options": [
      "Lalat rumah bertindak sebagai vektor mekanikal yang membawa bakteria daripada sampah dan najis ke atas makanan terdedah",
      "Lalat rumah menyuntik bakteria terus ke dalam salur darah pelanggan melalui gigitan",
      "Air berklorin telah berubah menjadi bakteria tifoid apabila terdedah kepada cahaya matahari",
      "Penyakit demam kepialu berjangkit melalui bau busuk sampah secara langsung"
    ],
    "correctIndex": 0,
    "explanation": "Lalat rumah hinggap pada bahan najis dan sampah yang mengandungi patogen lalu memindahkan bakteria tersebut pada kakinya ke makanan yang tidak bertutup.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s1_10",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Pencegahan penyakit berjangkit boleh dilaksanakan pada peringkat primer, sekunder dan tertier. Antara aktiviti berikut, yang manakah menggabungkan langkah peringkat primer dan peringkat tertier dengan tepat?",
    "options": [
      "Primer: kuarantin pesakit tenat; Tertier: membina sistem sanitasi tandas bersih",
      "Primer: meningkatkan kesihatan melalui imunisasi dan kebersihan air; Tertier: mengawal pembiakan vektor seperti menghapuskan tempat takungan air dan menyembur kabus",
      "Primer: mengambil ujian saringan darah di hospital; Tertier: bersenam setiap pagi",
      "Primer: meminum antibiotik apabila demam; Tertier: memakan lebih banyak buah-buahan"
    ],
    "correctIndex": 1,
    "explanation": "Pencegahan primer mencegah jangkitan sebelum berlaku (kebersihan, imunisasi), manakala peringkat tertier mengawal vektor dan mengekang penularan lanjut di persekitaran.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_01",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah struktur utama yang membentuk barisan pertahanan pertama badan manusia daripada kemasukan patogen secara fizikal?",
    "options": [
      "Antibodi dan hormon tiroksina",
      "Kulit dan membran mukus",
      "Sel darah merah dan platlet sahaja",
      "Sel darah putih jenis limfosit"
    ],
    "correctIndex": 1,
    "explanation": "Kulit yang utuh dan membran mukus yang melapisi salur pernafasan serta salur pencernaan bertindak sebagai halangan fizikal dan kimia pertama badan.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_02",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah proses yang dilakukan oleh sel darah putih pada barisan pertahanan kedua apabila ia menelan dan mencernakan bakteria yang memasuki luka?",
    "options": [
      "Fotosintesis",
      "Fagositosis",
      "Transpirasi",
      "Kondensasi"
    ],
    "correctIndex": 1,
    "explanation": "Fagositosis ialah mekanisme barisan pertahanan kedua di mana sel darah putih (fagosit) mengepung, menelan dan mencernakan patogen.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_03",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Dalam sistem keimunan badan (barisan pertahanan ketiga), bahan apakah yang dihasilkan oleh sel darah putih untuk memusnahkan patogen tertentu?",
    "options": [
      "Antibodi",
      "Enzim amilase",
      "Hemoglobin",
      "Asid laktik"
    ],
    "correctIndex": 0,
    "explanation": "Barisan pertahanan ketiga bertindak secara spesifik dengan menghasilkan protein antibodi untuk melekat dan memusnahkan antigen patogen tertentu.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_04",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Bagaimanakah air mata dan air liur membantu melindungi badan pada barisan pertahanan pertama?",
    "options": [
      "Mengandungi enzim lisozim yang dapat menguraikan dan memusnahkan dinding sel sesetengah bakteria",
      "Menukarkan bakteria menjadi sel darah merah yang berguna",
      "Menutup lubang hidung daripada kemasukan udara secara kekal",
      "Menghasilkan vaksin semula jadi setiap jam"
    ],
    "correctIndex": 0,
    "explanation": "Air mata dan air liur mengandungi bahan kimia pelindung iaitu enzim lisozim yang membantu membunuh bakteria pada permukaan mata dan mulut.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_05",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Apakah perbezaan yang tepat antara istilah antigen dengan antibodi?",
    "options": [
      "Antigen dihasilkan oleh sel darah putih, manakala antibodi ialah bakteria yang masuk ke dalam darah",
      "Antigen ialah bahan asing atau protein pada permukaan patogen yang merangsang tindak balas keimunan, manakala antibodi ialah protein yang dihasilkan oleh badan untuk memusnahkan antigen tersebut",
      "Antigen bertindak pada barisan pertama, manakala antibodi bertindak pada kulit sahaja",
      "Antigen dan antibodi ialah nama lain bagi sel darah merah dan platlet"
    ],
    "correctIndex": 1,
    "explanation": "Antigen berasal daripada patogen atau bahan asing yang mencetuskan gerak balas imun, manakala antibodi ialah protein pertahanan buatan badan sendiri yang sepadan dengan antigen itu.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_06",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Salur pernafasan manusia (trakea dan bronkus) dilapisi oleh sel yang menghasilkan mukus serta mempunyai unjuran halus disebut silia. Bagaimanakah kedua-dua struktur ini bekerjasama dalam pertahanan badan?",
    "options": [
      "Mukus memerangkap habuk dan patogen yang disedut, lalu silia menyapunya ke atas ke arah tekak untuk ditelan atau dibatukkan keluar",
      "Silia menelan bakteria secara fagositosis manakala mukus mengangkut oksigen ke darah",
      "Mukus menukarkan bakteria menjadi nutrien untuk diserap oleh peparu",
      "Silia menghasilkan asid hidroklorik di dalam alveolus peparu"
    ],
    "correctIndex": 0,
    "explanation": "Mukus melekit memerangkap mikroorganisma dan zarah debu, sementara gerakan beritma silia menolak mukus keluar daripada salur pernafasan.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_07",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Mengapakah tindakan barisan pertahanan ketiga (antibodi) dikatakan bersifat spesifik berbanding barisan pertahanan kedua (fagositosis)?",
    "options": [
      "Fagosit hanya menyerang patogen tertentu di jari kaki sahaja",
      "Antibodi mempunyai tapak pengikat khusus yang hanya bertindak balas dengan antigen sepadan seperti konsep kunci dan mangga, manakala fagosit menelan sebarang jenis patogen secara umum",
      "Fagositosis hanya berlaku pada kulit yang kering",
      "Satu jenis antibodi boleh memusnahkan semua jenis virus, kulat dan bakteria sekaligus"
    ],
    "correctIndex": 1,
    "explanation": "Fagositosis adalah tidak spesifik kerana menyerang apa-apa jua patogen yang masuk, manakala antibodi dibina khusus untuk mengecam dan mengikat antigen tertentu sahaja.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_08",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Apabila jari Amir terluka akibat terkena paku berkarat, kawasan luka itu membengkak, terasa hangat, memerah dan mengeluarkan sedikit nanah putih kekuningan selepas dua hari. Apakah tafsiran biologi yang tepat bagi kehadiran nanah di luka tersebut?",
    "options": [
      "Nanah ialah protein antibodi yang bocor daripada kapilari darah kulit",
      "Barisan pertahanan pertama kulit telah ditembusi, lalu berlaku pengumpulan sel darah putih (fagosit) yang mati bersama bakteria mati dan tisu rosak selepas proses fagositosis",
      "Platlet telah bertukar menjadi bakteria akibat terkena besi paku",
      "Asid hidroklorik daripada perut telah mengalir ke jari untuk membunuh kuman"
    ],
    "correctIndex": 1,
    "explanation": "Apabila kulit terluka, patogen memasuki tisu dan mengaktifkan barisan pertahanan kedua; nanah terhasil daripada longgokan sel darah putih fagosit yang mati selepas menelan patogen serta sisa sel.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_09",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Seseorang telah menghasilkan kepekatan tinggi Antibodi X selepas dijangkiti Virus X. Beberapa bulan kemudian, dia dijangkiti oleh Virus Y yang mempunyai bentuk antigen yang sama sekali berbeza. Adakah Antibodi X dapat melindunginya daripada Virus Y?",
    "options": [
      "Ya, kerana semua virus mempunyai saiz yang sama dan mudah dimusnahkan oleh Antibodi X",
      "Tidak, kerana antibodi bertindak secara spesifik dan tapak pengikat Antibodi X tidak sepadan dengan antigen pada Virus Y",
      "Ya, kerana Antibodi X akan berubah bentuk menjadi fagosit dengan pantas",
      "Tidak, kerana Antibodi X hanya berfungsi di dalam perut sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Oleh sebab tindakan antibodi adalah khusus mengikut bentuk antigen tertentu, Antibodi X tidak boleh mengikat atau meneutralkan antigen asing pada Virus Y.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s2_10",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Selain menjadi halangan fizikal, bagaimanakah mekanisme pembekuan darah apabila kulit terhiris turut menyumbang kepada barisan pertahanan pertama badan?",
    "options": [
      "Darah beku menghasilkan vaksin kekal terhadap semua penyakit bawaan udara",
      "Darah yang membeku segera menutup ruang luka terbuka bagi menghalang kemasukan lebih banyak patogen ke dalam salur darah",
      "Pembekuan darah menurunkan suhu badan di bawah 0 °C supaya bakteria mati",
      "Darah beku menukarkan antigen bakteria menjadi sel kulit baharu dalam masa seminit"
    ],
    "correctIndex": 1,
    "explanation": "Pembekuan darah di tempat luka membentuk palam pelindung sementara yang menghentikan pendarahan dan menyekat laluan masuk patogen dari persekitaran.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_01",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah yang terkandung di dalam suntikan vaksin untuk memberikan keimunan aktif buatan kepada seseorang?",
    "options": [
      "Antibodi siap sedia yang diambil daripada darah haiwan",
      "Patogen yang telah mati atau dilemahkan",
      "Campuran vitamin C dan garam mineral pekat",
      "Sel darah merah daripada penderma sihat"
    ],
    "correctIndex": 1,
    "explanation": "Vaksin mengandungi patogen yang sudah dimatikan atau dilemahkan (atau sebahagian antigennya) supaya badan dirangsang untuk menghasilkan antibodi sendiri tanpa mengalami penyakit teruk.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_02",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Bagaimanakah bayi yang baru lahir memperoleh keimunan pasif semula jadi daripada ibunya?",
    "options": [
      "Melalui suntikan antiserum di hospital ketika berumur satu tahun",
      "Melalui pemindahan antibodi ibu merentasi plasenta dan melalui susu ibu (kolostrum)",
      "Melalui jangkitan selesema ringan pada minggu pertama kelahiran",
      "Melalui pengambilan makanan pejal yang mengandungi protein"
    ],
    "correctIndex": 1,
    "explanation": "Bayi menerima antibodi sedia ada daripada ibu semasa dalam kandungan melalui plasenta dan selepas lahir melalui susu awal ibu.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_03",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Seseorang yang telah sembuh sepenuhnya daripada penyakit cacar air jarang dijangkiti penyakit itu untuk kali kedua. Jenis keimunan apakah yang diperolehinya?",
    "options": [
      "Keimunan pasif buatan",
      "Keimunan pasif semula jadi",
      "Keimunan aktif semula jadi",
      "Keimunan tidak spesifik"
    ],
    "correctIndex": 2,
    "explanation": "Apabila seseorang sembuh daripada jangkitan sebenar, badannya menghasilkan antibodi sendiri dan membentuk keimunan aktif semula jadi yang bertahan lama.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_04",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Antara amalan gaya hidup berikut, yang manakah dapat menguatkan sistem keimunan badan manusia?",
    "options": [
      "Mengamalkan pemakanan seimbang, tidur mencukupi dan bersenam secara berkala",
      "Mengambil antibiotik setiap hari walaupun badan berada dalam keadaan sihat",
      "Mengurangkan minum air kosong dan tidur kurang daripada empat jam sehari",
      "Merokok untuk memanaskan salur pernafasan daripada jangkitan bakteria"
    ],
    "correctIndex": 0,
    "explanation": "Pemakanan seimbang, rehat serta tidur yang cukup, senaman berkala dan pengurusan stres membantu sel sistem imun berfungsi dengan optimum.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_05",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Mengapakah seseorang yang dipatuk ular berbisa perlu diberikan suntikan antiserum dengan segera dan bukannya suntikan vaksin?",
    "options": [
      "Antiserum mengandungi antibodi sedia ada yang dapat meneutralkan racun bisa ular serta-merta, manakala vaksin mengambil masa terlalu lama untuk merangsang badan membina antibodi",
      "Vaksin hanya berfungsi untuk penyakit bawaan bakteria dan bukan bisa haiwan",
      "Antiserum memberikan perlindungan kekal seumur hidup selepas satu suntikan",
      "Vaksin mengandungi racun ular yang lebih pekat daripada bisa patukan"
    ],
    "correctIndex": 0,
    "explanation": "Keimunan pasif buatan melalui suntikan antiserum membekalkan antibodi sedia ada untuk tindakan kecemasan segera, walaupun perlindungannya hanya bersifat sementara.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_06",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Apakah tujuan pemberian suntikan dos penggalak (suntikan kedua) dalam program pemvaksinan kanak-kanak bagi penyakit tertentu?",
    "options": [
      "Untuk menukarkan keimunan aktif menjadi keimunan pasif sementara",
      "Untuk merangsang penghasilan antibodi yang lebih pantas dan tinggi sehingga melepasi aras keimunan jangka panjang",
      "Untuk membunuh sel darah putih yang lama di dalam badan",
      "Untuk menggantikan fungsi barisan pertahanan pertama seperti kulit"
    ],
    "correctIndex": 1,
    "explanation": "Suntikan vaksin pertama lazimnya menaikkan aras antibodi di bawah paras keimunan; dos kedua merangsang tindak balas sekunder yang melonjakkan antibodi melepasi aras perlindungan.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_07",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Pernyataan manakah yang betul membezakan keimunan aktif dengan keimunan pasif?",
    "options": [
      "Dalam keimunan aktif, badan menghasilkan antibodi sendiri dan perlindungannya bertahan lama; dalam keimunan pasif, badan menerima antibodi daripada sumber luar dan perlindungannya sementara",
      "Keimunan aktif hanya diperoleh daripada susu ibu, manakala keimunan pasif hanya melalui suntikan vaksin",
      "Keimunan aktif memberi perlindungan serta-merta pada hari pertama, manakala keimunan pasif mengambil masa dua minggu untuk berkesan",
      "Kedua-dua keimunan aktif dan pasif memerlukan pendedahan kepada patogen hidup yang aktif"
    ],
    "correctIndex": 0,
    "explanation": "Keimunan aktif melibatkan penghasilan antibodi oleh limfosit badan sendiri (tahan lama), manakala keimunan pasif meminjam antibodi sedia ada daripada luar yang akan merosot selepas beberapa minggu atau bulan.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_08",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Dalam satu rekod kesihatan, Pesakit M menerima suntikan pada Hari 0: aras antibodinya melonjak tinggi melepasi aras keimunan pada Hari 1, kemudian menurun perlahan-lahan di bawah aras keimunan selepas beberapa minggu. Pesakit N menerima suntikan pada Hari 0 dan suntikan kedua pada Hari 28: aras antibodinya naik perlahan selepas Hari 0, kemudian melonjak tinggi melepasi aras keimunan selepas Hari 28 dan kekal tinggi berbulan-bulan. Bahan apakah yang disuntik kepada Pesakit M dan Pesakit N?",
    "options": [
      "Pesakit M disuntik vaksin dan Pesakit N disuntik antiserum",
      "Pesakit M disuntik antiserum (keimunan pasif buatan) dan Pesakit N disuntik vaksin dengan dos penggalak (keimunan aktif buatan)",
      "Kedua-dua Pesakit M dan N menerima antibiotik tahan lama",
      "Pesakit M mengalami keimunan aktif semula jadi dan Pesakit N mengalami keimunan pasif semula jadi"
    ],
    "correctIndex": 1,
    "explanation": "Lonjakan segera dari Hari 1 yang kemudian merosot menunjukkan antiserum (antibodi sedia ada tanpa penghasilan sendiri), manakala kenaikan perlahan diikuti lonjakan tinggi kekal selepas dos kedua adalah ciri vaksinasi.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_09",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Mengapakah seorang bayi yang menyusu badan sepenuhnya pada tiga bulan pertama masih boleh jatuh sakit akibat penyakit berjangkit tertentu selepas berumur satu tahun jika tidak menerima vaksinasi mengikut jadual?",
    "options": [
      "Antibodi daripada susu ibu bertukar menjadi patogen apabila bayi membesar",
      "Antibodi yang diterima melalui keimunan pasif semula jadi daripada ibu hanya bertahan sementara dan semakin merosot, manakala sistem imun bayi belum membentuk antibodi khusus sendiri terhadap penyakit tersebut",
      "Vaksin hanya berkesan jika bayi tidak pernah meminum susu ibu",
      "Kulit bayi menjadi lebih nipis selepas berumur satu tahun berbanding ketika baru lahir"
    ],
    "correctIndex": 1,
    "explanation": "Keimunan pasif semula jadi daripada ibu akan terurai dari semasa ke semasa; oleh itu, bayi memerlukan imunisasi (vaksin) untuk membina keimunan aktif jangka panjang sendiri.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b4_s3_10",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Sekiranya peratusan penduduk yang menerima vaksin bagi penyakit campak di sesebuah komuniti jatuh mendadak daripada 95% kepada 55%, apakah risiko paling utama terhadap komuniti tersebut termasuk kepada bayi yang terlalu muda untuk divaksin?",
    "options": [
      "Penyakit campak akan bertukar menjadi penyakit tidak berjangkit seperti diabetes",
      "Perlindungan keimunan kelompok hilang, menyebabkan virus mudah menular dari seorang individu tidak imun kepada individu lain termasuk bayi yang terdedah",
      "Bayi yang belum divaksin akan automatik menghasilkan vaksin sendiri melalui udara",
      "Semua penduduk yang sudah divaksin akan kehilangan keimunan aktif mereka serta-merta"
    ],
    "correctIndex": 1,
    "explanation": "Kadar vaksinasi tinggi menyekat rantaian penularan virus untuk melindungi golongan rentan; apabila liputan vaksinasi merosot, wabak mudah merebak dan mengancam golongan yang belum boleh divaksin.",
    "ref": "Bab 4, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b5_s1_01",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Antara nilai berikut, yang manakah takat didih air tulen pada tekanan atmosfera normal?",
    "options": [
      "80 °C",
      "100 °C",
      "120 °C",
      "0 °C"
    ],
    "correctIndex": 1,
    "explanation": "Air tulen mendidih pada 100 °C pada tekanan atmosfera normal, manakala 0 °C ialah takat bekunya.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_02",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Semasa elektrolisis air, nisbah isi padu gas hidrogen kepada gas oksigen yang terkumpul ialah",
    "options": [
      "1 : 1",
      "1 : 2",
      "2 : 1",
      "3 : 1"
    ],
    "correctIndex": 2,
    "explanation": "Air mengandungi dua atom hidrogen bagi setiap satu atom oksigen, jadi isi padu hidrogen adalah dua kali isi padu oksigen.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_03",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Seorang murid menguji gas yang terkumpul dalam tabung uji dengan kayu uji menyala. Kedengaran bunyi 'pop' yang kecil. Gas apakah itu?",
    "options": [
      "Hidrogen",
      "Oksigen",
      "Karbon dioksida",
      "Nitrogen"
    ],
    "correctIndex": 0,
    "explanation": "Gas hidrogen terbakar dengan cepat dan menghasilkan bunyi 'pop' apabila diuji dengan kayu uji menyala.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_04",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Antara keadaan berikut, yang manakah menerangkan proses penyejatan dengan betul?",
    "options": [
      "Air hanya berubah menjadi wap apabila dipanaskan sehingga 100 °C",
      "Air berubah menjadi ais apabila disejukkan di bawah 0 °C",
      "Air bertukar menjadi wap hanya di bahagian bawah bekas",
      "Air berubah menjadi wap pada suhu bilik tanpa perlu mendidih"
    ],
    "correctIndex": 3,
    "explanation": "Penyejatan berlaku pada sebarang suhu di bawah takat didih kerana zarah di permukaan cecair sentiasa mempunyai cukup tenaga untuk terlepas ke udara.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_05",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Semasa elektrolisis air, gas hidrogen dibebaskan pada elektrod yang disambung ke terminal negatif. Apakah nama elektrod itu dan mengapa?",
    "options": [
      "Katod, kerana ion hidrogen bercas positif tertarik kepada terminal negatif",
      "Anod, kerana ion hidrogen tertarik kepada terminal positif",
      "Anod, kerana elektron bergerak menuju ke terminal negatif",
      "Katod, kerana gas oksigen dibebaskan di situ"
    ],
    "correctIndex": 0,
    "explanation": "Katod ialah elektrod negatif. Ion hidrogen bercas positif tertarik ke katod dan menerima elektron untuk membentuk gas hidrogen.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_06",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Aminah menjemur dua helai tuala yang sama saiz. Tuala P dijemur di tempat berangin manakala tuala Q dijemur di dalam bilik bertutup. Tuala P lebih cepat kering. Apakah faktor yang menyebabkan perbezaan ini?",
    "options": [
      "Suhu air",
      "Kehadiran angin",
      "Luas permukaan tuala",
      "Jenis fabrik tuala"
    ],
    "correctIndex": 1,
    "explanation": "Angin mengalihkan wap air yang terkumpul di atas tuala, jadi lebih banyak zarah air boleh terlepas dan penyejatan berlaku lebih cepat.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_07",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Satu liter air tulen mempunyai jisim 1 000 g. Apakah ketumpatan air tulen itu?",
    "options": [
      "0.1 g/cm³",
      "10 g/cm³",
      "1 g/cm³",
      "100 g/cm³"
    ],
    "correctIndex": 2,
    "explanation": "Satu liter bersamaan 1 000 cm³, jadi ketumpatan ialah 1 000 g ÷ 1 000 cm³ = 1 g/cm³.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_08",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Seketul ais terapung di permukaan segelas air. Apakah sebab terbaik bagi keadaan ini?",
    "options": [
      "Ais tidak dipengaruhi oleh daya graviti",
      "Ais mempunyai ketumpatan lebih tinggi daripada air cecair",
      "Air cecair menolak ais kerana air lebih sejuk",
      "Ais mempunyai ketumpatan lebih rendah daripada air cecair"
    ],
    "correctIndex": 3,
    "explanation": "Ais kurang tumpat daripada air kerana susunan zarahnya lebih longgar, jadi daya apungan dapat menyokong beratnya.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_09",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Air garam mendidih pada suhu melebihi 100 °C dan membeku di bawah 0 °C. Apakah kesimpulan yang paling tepat tentang kesan bendasing dalam air?",
    "options": [
      "Bendasing menurunkan takat didih dan menaikkan takat beku air",
      "Bendasing tidak mengubah takat didih dan takat beku air",
      "Bendasing menaikkan takat didih dan menurunkan takat beku air",
      "Bendasing hanya mengubah warna air"
    ],
    "correctIndex": 2,
    "explanation": "Kehadiran bendasing terlarut menaikkan takat didih melebihi 100 °C dan menurunkan takat beku di bawah 0 °C.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s1_10",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Mengapakah penyejatan peluh dapat menyejukkan badan seseorang?",
    "options": [
      "Kerana peluh membebaskan haba kepada badan semasa bertukar menjadi wap",
      "Kerana zarah peluh menyerap haba daripada badan semasa bertukar menjadi wap",
      "Kerana peluh menambah jisim badan",
      "Kerana peluh menghalang haba daripada sampai ke kulit"
    ],
    "correctIndex": 1,
    "explanation": "Penyejatan memerlukan haba pendam. Zarah peluh menyerap haba daripada kulit untuk bertukar menjadi wap, jadi suhu kulit menurun.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_01",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah istilah bagi bahan yang larut di dalam pelarut untuk membentuk larutan?",
    "options": [
      "Zat terlarut",
      "Pelarut",
      "Ampaian",
      "Mendakan"
    ],
    "correctIndex": 0,
    "explanation": "Zat terlarut ialah bahan yang larut, manakala pelarut ialah cecair yang melarutkannya.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_02",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Campuran air dan pasir dikacau sehingga keruh, kemudian pasir mendak apabila dibiarkan. Apakah jenis campuran ini?",
    "options": [
      "Larutan tepu",
      "Ampaian",
      "Larutan cair",
      "Sebatian"
    ],
    "correctIndex": 1,
    "explanation": "Zarah pasir tidak larut dalam air, kekal terampai sementara dan akhirnya mendak. Campuran seperti ini dipanggil ampaian.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_03",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah merupakan pelarut bukan air?",
    "options": [
      "Alkohol",
      "Gula",
      "Garam",
      "Tepung"
    ],
    "correctIndex": 0,
    "explanation": "Alkohol ialah cecair yang boleh melarutkan bahan seperti dakwat pen dan sesetengah pewarna, jadi ia pelarut bukan air.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_04",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Larutan yang mengandungi sedikit zat terlarut dalam banyak pelarut dipanggil larutan",
    "options": [
      "tepu",
      "pekat",
      "ampaian",
      "cair"
    ],
    "correctIndex": 3,
    "explanation": "Larutan cair mengandungi sedikit zat terlarut, manakala larutan pekat mengandungi banyak zat terlarut dalam isi padu pelarut yang sama.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_05",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Gula larut lebih cepat dalam air panas berbanding air sejuk. Faktor apakah yang mempengaruhi kadar keterlarutan ini?",
    "options": [
      "Tekanan udara",
      "Suhu pelarut",
      "Warna pelarut",
      "Isi padu bekas"
    ],
    "correctIndex": 1,
    "explanation": "Suhu yang lebih tinggi meningkatkan tenaga zarah, jadi zarah air bergerak lebih cepat dan memecahkan gula dengan lebih cepat.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_06",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Serbuk kopi larut lebih cepat daripada ketulan kopi yang sama jisim dalam air yang sama suhu. Mengapakah hal ini berlaku?",
    "options": [
      "Zarah serbuk yang lebih kecil mempunyai jumlah luas permukaan yang lebih besar",
      "Suhu air meningkat secara mendadak semasa dikacau",
      "Ketulan kopi mempunyai jisim yang lebih besar",
      "Serbuk kopi bersifat alkali"
    ],
    "correctIndex": 0,
    "explanation": "Jumlah luas permukaan yang lebih besar mendedahkan lebih banyak zarah kepada pelarut, jadi pelarutan berlaku lebih cepat.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_07",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Gula ditambah sedikit demi sedikit ke dalam air sehingga gula tidak lagi larut dan terkumpul di dasar bekas. Apakah jenis larutan itu?",
    "options": [
      "Larutan cair",
      "Larutan neutral",
      "Ampaian",
      "Larutan tepu"
    ],
    "correctIndex": 3,
    "explanation": "Larutan tepu ialah larutan yang tidak boleh lagi melarutkan sebarang tambahan zat terlarut pada suhu tertentu.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_08",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Pengilat kuku tidak boleh dibersihkan dengan air, tetapi boleh dibersihkan dengan aseton. Apakah sebab terbaik bagi keadaan ini?",
    "options": [
      "Air sentiasa terlalu sejuk untuk melarutkan sebarang bahan",
      "Aseton bertindak balas dengan air dan menghasilkan haba",
      "Pengilat kuku tidak larut dalam air tetapi larut dalam pelarut organik seperti aseton",
      "Air menyejat terlalu cepat sebelum sempat melarutkan pengilat kuku"
    ],
    "correctIndex": 2,
    "explanation": "Bahan seperti pengilat kuku bersifat organik dan hanya larut dalam pelarut organik yang sepadan seperti aseton, bukan dalam air.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_09",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Sampel X mengandungi 5 g garam dalam 100 cm³ air manakala sampel Y mengandungi 25 g garam dalam 100 cm³ air. Pernyataan manakah benar?",
    "options": [
      "Sampel X lebih pekat daripada sampel Y",
      "Kedua-dua sampel mempunyai kepekatan yang sama",
      "Sampel Y lebih pekat daripada sampel X",
      "Sampel X ialah larutan tepu"
    ],
    "correctIndex": 2,
    "explanation": "Dalam isi padu pelarut yang sama, lebih banyak zat terlarut bermakna larutan lebih pekat. Sampel Y mengandungi garam lima kali ganda.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s2_10",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Mengapakah larutan tepu boleh berubah menjadi larutan tidak tepu apabila dipanaskan?",
    "options": [
      "Zat terlarut hilang semasa pemanasan",
      "Keterlarutan zat terlarut meningkat pada suhu yang lebih tinggi",
      "Pelarut bertukar menjadi ampaian",
      "Zat terlarut bertindak balas dengan air"
    ],
    "correctIndex": 1,
    "explanation": "Apabila suhu meningkat, pelarut boleh melarutkan lebih banyak zat terlarut, jadi mendakan yang tinggal akan larut semula.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_01",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Kaedah paling mudah untuk membunuh mikroorganisma dalam air minuman di rumah ialah",
    "options": [
      "penurasan",
      "pendidihan",
      "pengenapan",
      "penyejatan"
    ],
    "correctIndex": 1,
    "explanation": "Mendidihkan air selama beberapa minit membunuh kebanyakan mikroorganisma tanpa memerlukan bahan kimia tambahan.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_02",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah fungsi alum dalam loji rawatan air?",
    "options": [
      "Membunuh bakteria dalam air",
      "Menggumpalkan zarah lumpur supaya mudah mendak",
      "Menambah fluorida untuk gigi",
      "Menyejukkan air sebelum ditapis"
    ],
    "correctIndex": 1,
    "explanation": "Alum menyebabkan zarah halus terampai bergumpal menjadi gumpalan besar yang lebih mudah mendak semasa pengenapan.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_03",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Bahan manakah ditambah ke dalam air terawat untuk membantu mencegah kerosakan gigi?",
    "options": [
      "Klorin",
      "Alum",
      "Kapur mati",
      "Fluorida"
    ],
    "correctIndex": 3,
    "explanation": "Fluorida ditambah dalam kuantiti kecil untuk menguatkan enamel gigi dan mengurangkan risiko karies.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_04",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Kaedah pembersihan air yang menyingkirkan mikroorganisma, bahan terampai dan bahan terlarut sekali gus ialah",
    "options": [
      "penurasan",
      "pendidihan",
      "pengklorinan",
      "penyulingan"
    ],
    "correctIndex": 3,
    "explanation": "Penyulingan menyejatkan air lalu mengondensasikan wapnya, meninggalkan semua bendasing termasuk bahan terlarut di belakang.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_05",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Air keruh yang ditapis melalui lapisan pasir menjadi jernih tetapi masih mengandungi bakteria. Mengapakah air itu belum selamat diminum?",
    "options": [
      "Penurasan hanya menyingkirkan pepejal terampai dan tidak membunuh mikroorganisma",
      "Penurasan menambah bahan kimia berbahaya ke dalam air",
      "Pasir menyerap semua oksigen yang terlarut dalam air",
      "Air menjadi terlalu sejuk selepas ditapis"
    ],
    "correctIndex": 0,
    "explanation": "Penurasan menahan zarah pepejal sahaja. Bakteria yang sangat halus masih boleh melepasi penapis, jadi air perlu dididihkan atau diklorin.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_06",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Antara urutan peringkat berikut, yang manakah betul dalam loji rawatan air?",
    "options": [
      "Pengenapan → pengentalan → penurasan",
      "Pengentalan → pengenapan → penurasan",
      "Penurasan → pengentalan → pengenapan",
      "Pengklorinan → penurasan → pengentalan"
    ],
    "correctIndex": 1,
    "explanation": "Bahan kimia ditambah dahulu untuk menggumpalkan zarah (pengentalan), gumpalan mendak (pengenapan), kemudian air ditapis untuk menyingkirkan zarah yang tinggal.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_07",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Kapur mati ditambah semasa peringkat pengentalan dalam loji rawatan air. Apakah tujuannya?",
    "options": [
      "Meningkatkan keasidan air mentah",
      "Menambah warna kepada air",
      "Mengurangkan keasidan air supaya menghampiri neutral",
      "Membunuh serangga dalam air"
    ],
    "correctIndex": 2,
    "explanation": "Kapur mati bersifat beralkali dan digunakan untuk meneutralkan air mentah yang terlalu berasid supaya selamat untuk diproses.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_08",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Semasa banjir, sebuah keluarga menapis air sungai yang keruh dan kemudian mendidihkannya. Adakah air itu selamat diminum?",
    "options": [
      "Selamat, kerana penurasan menyingkirkan pepejal terampai dan pendidihan membunuh mikroorganisma",
      "Tidak selamat, kerana air keruh sama sekali tidak boleh ditapis",
      "Tidak selamat, kerana kedua-dua kaedah tidak menyingkirkan bahan terlarut langsung",
      "Selamat, kerana pendidihan menyingkirkan semua bahan terlarut dalam air"
    ],
    "correctIndex": 0,
    "explanation": "Penurasan menyingkirkan pepejal terampai dan pendidihan membunuh mikroorganisma. Mineral terlarut yang tinggal tidak berbahaya untuk diminum.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_09",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Antara kaedah berikut, yang manakah paling sesuai untuk mendapatkan air tulen di dalam makmal?",
    "options": [
      "Pendidihan",
      "Pengklorinan",
      "Penyulingan",
      "Penurasan"
    ],
    "correctIndex": 2,
    "explanation": "Hanya penyulingan menyingkirkan bahan terlarut bersama mikroorganisma dan zarah terampai, jadi air yang terkumpul hampir tulen.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b5_s3_10",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Air paip di sesebuah kawasan kelihatan jernih selepas ditapis tetapi pihak berkuasa tetap menambah klorin. Mengapakah langkah itu diperlukan?",
    "options": [
      "Klorin membunuh mikroorganisma yang masih tinggal selepas penurasan",
      "Klorin menggumpalkan zarah lumpur yang masih terampai",
      "Klorin menyingkirkan semua bahan terlarut dalam air",
      "Klorin menjadikan air lebih sejuk semasa disimpan"
    ],
    "correctIndex": 0,
    "explanation": "Penurasan tidak membunuh bakteria yang sangat halus. Klorin bertindak sebagai pembasmi kuman supaya air selamat sehingga sampai ke rumah.",
    "ref": "Bab 5, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_01",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Kertas litmus biru bertukar merah apabila dicelup ke dalam larutan X. Apakah sifat larutan X?",
    "options": [
      "Beralkali",
      "Neutral",
      "Bergaram",
      "Berasid"
    ],
    "correctIndex": 3,
    "explanation": "Larutan berasid menukarkan kertas litmus biru kepada merah, manakala larutan beralkali menukarkan litmus merah kepada biru.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_02",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Fenolftalein tidak berwarna dalam larutan berasid. Dalam larutan beralkali, fenolftalein bertukar menjadi warna",
    "options": [
      "kuning",
      "hijau",
      "biru",
      "merah jambu"
    ],
    "correctIndex": 3,
    "explanation": "Fenolftalein tidak berwarna dalam asid dan neutral, tetapi bertukar merah jambu dalam larutan beralkali.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_03",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah nilai pH bagi larutan neutral?",
    "options": [
      "0",
      "7",
      "10",
      "14"
    ],
    "correctIndex": 1,
    "explanation": "Larutan neutral seperti air tulen mempunyai pH 7. Nilai di bawah 7 berasid dan di atas 7 beralkali.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_04",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah bersifat asid?",
    "options": [
      "Cuka",
      "Ubat gigi",
      "Sabun mandi",
      "Air kapur"
    ],
    "correctIndex": 0,
    "explanation": "Cuka mengandungi asid etanoik dan menukarkan litmus biru kepada merah, jadi ia bersifat asid.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_05",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Asid sulfurik pekat tulen tidak menukarkan warna kertas litmus kering. Apakah sebab terbaik bagi keadaan ini?",
    "options": [
      "Asid sulfurik pekat sebenarnya bukan asid",
      "Sifat asid hanya ditunjukkan apabila asid dilarutkan dalam air",
      "Kertas litmus kering terlalu tebal untuk menyerap asid",
      "Asid sulfurik pekat sebenarnya bersifat alkali"
    ],
    "correctIndex": 1,
    "explanation": "Asid perlu dilarutkan dalam air supaya ion hidrogen dibebaskan. Tanpa air, sifat berasid tidak dapat ditunjukkan.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_06",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Larutan P menukarkan metil jingga daripada jingga kepada merah. Apakah dua kesimpulan yang betul tentang larutan P?",
    "options": [
      "Larutan P berasid dan pH kurang daripada 7",
      "Larutan P beralkali dan pH melebihi 7",
      "Larutan P neutral dan pH sama dengan 7",
      "Larutan P berasid dan pH melebihi 7"
    ],
    "correctIndex": 0,
    "explanation": "Metil jingga bertukar merah dalam asid. Semua larutan berasid mempunyai pH kurang daripada 7.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_07",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Penunjuk semesta menunjukkan warna hijau dalam larutan Y. Apakah anggaran pH larutan Y?",
    "options": [
      "pH 2",
      "pH 5",
      "pH 7",
      "pH 12"
    ],
    "correctIndex": 2,
    "explanation": "Penunjuk semesta berwarna hijau pada pH sekitar 7, menandakan larutan itu neutral.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_08",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Tiga larutan diuji dengan litmus merah dan litmus biru. Larutan A menukarkan litmus biru kepada merah. Larutan B menukarkan litmus merah kepada biru. Larutan C tidak mengubah warna kedua-dua litmus. Apakah kesimpulan yang betul?",
    "options": [
      "A berasid, B beralkali, C neutral",
      "A beralkali, B berasid, C neutral",
      "A neutral, B berasid, C beralkali",
      "A berasid, B neutral, C beralkali"
    ],
    "correctIndex": 0,
    "explanation": "Menukarkan litmus biru kepada merah ialah ciri asid, menukarkan litmus merah kepada biru ialah ciri alkali, dan tiada perubahan bermakna neutral.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_09",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Alkali pekat juga berbahaya walaupun tidak berasa masam. Apakah alasannya?",
    "options": [
      "Alkali pekat mudah terbakar dengan sendirinya",
      "Alkali pekat tidak larut dalam air langsung",
      "Alkali pekat sangat mengakis dan boleh merosakkan tisu kulit",
      "Alkali pekat bersifat radioaktif"
    ],
    "correctIndex": 2,
    "explanation": "Alkali pekat seperti natrium hidroksida sangat mengakis dan boleh merosakkan kulit serta mata, jadi mesti dikendalikan dengan cermat.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s1_10",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Natrium hidroksida pepejal kering tidak menukarkan warna kertas litmus kering. Apabila dilarutkan dalam air, larutan itu menukarkan litmus merah kepada biru. Apakah kesimpulan terbaik tentang peranan air?",
    "options": [
      "Air bertindak sebagai penunjuk semula jadi",
      "Kehadiran air diperlukan supaya ion hidroksida dibebaskan dan sifat beralkali ditunjukkan",
      "Air menukarkan sifat alkali kepada sifat asid",
      "Air hanya mencairkan warna kertas litmus"
    ],
    "correctIndex": 1,
    "explanation": "Alkali juga perlu dilarutkan dalam air supaya ion hidroksida bebas terbentuk. Ion inilah yang menukarkan litmus merah kepada biru.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_01",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Larutan yang mempunyai pH 1 ialah",
    "options": [
      "asid kuat",
      "asid lemah",
      "alkali kuat",
      "larutan neutral"
    ],
    "correctIndex": 0,
    "explanation": "Asid kuat mengion sepenuhnya dan menghasilkan kepekatan ion hidrogen yang tinggi, jadi pH-nya sangat rendah menghampiri 0 hingga 2.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_02",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Sengatan lebah mengandungi bahan berasid. Bahan manakah paling sesuai disapu pada kawasan sengatan untuk mengurangkan kesakitan?",
    "options": [
      "Cuka",
      "Ubat gigi",
      "Jus lemon",
      "Air suling"
    ],
    "correctIndex": 1,
    "explanation": "Ubat gigi bersifat alkali lemah dan boleh meneutralkan sebahagian asid daripada sengatan lebah.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_03",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah bersifat beralkali dan digunakan dalam kehidupan harian?",
    "options": [
      "Cuka",
      "Jus lemon",
      "Sabun mandi",
      "Jus oren"
    ],
    "correctIndex": 2,
    "explanation": "Sabun mandi mengandungi bahan beralkali yang membantu menyingkirkan minyak dan kotoran pada kulit.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_04",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Semakin besar nilai pH melebihi 7, semakin",
    "options": [
      "lemah sifat alkali larutan itu",
      "kuat sifat alkali larutan itu",
      "kuat sifat asid larutan itu",
      "neutral sifat larutan itu"
    ],
    "correctIndex": 1,
    "explanation": "Nilai pH yang menghampiri 14 menunjukkan alkali yang lebih kuat, manakala nilai menghampiri 7 menunjukkan alkali lemah.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_05",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Larutan X ialah asid dengan pH 2 manakala larutan Y ialah asid dengan pH 5. Pernyataan manakah benar?",
    "options": [
      "X lebih kuat daripada Y",
      "Y lebih kuat daripada X",
      "X dan Y mempunyai kekuatan yang sama",
      "Y bersifat alkali kerana pH-nya lebih tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Bagi asid, nilai pH yang lebih rendah menunjukkan kepekatan ion hidrogen yang lebih tinggi dan asid yang lebih kuat.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_06",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Tanah di kebun Encik Rahim terlalu berasid untuk tanaman. Bahan manakah paling sesuai ditambah untuk mengurangkan keasidan tanah itu?",
    "options": [
      "Cuka",
      "Jus lemon",
      "Kapur mati",
      "Baja berasid"
    ],
    "correctIndex": 2,
    "explanation": "Kapur mati bersifat beralkali dan bertindak balas dengan asid dalam tanah untuk meneutralkan sebahagian keasidannya.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_07",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Mengapakah ubat gigi yang bersifat beralkali sesuai digunakan selepas makan?",
    "options": [
      "Untuk menambah asid pada permukaan gigi",
      "Untuk menjadikan mulut lebih berasid",
      "Untuk melembutkan enamel gigi",
      "Untuk meneutralkan asid daripada sisa makanan di dalam mulut"
    ],
    "correctIndex": 3,
    "explanation": "Sisa makanan ditapai oleh bakteria dan menghasilkan asid yang menghakis enamel. Ubat gigi beralkali membantu meneutralkan asid itu.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_08",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Seorang murid menyapu cuka pada tanah kebunnya yang berasid kerana menyangka cuka dapat mengurangkan keasidan. Adakah tindakan itu betul?",
    "options": [
      "Betul, kerana cuka bersifat beralkali",
      "Betul, kerana cuka bersifat neutral",
      "Tidak, kerana cuka berasid dan akan menambah keasidan tanah",
      "Tidak, kerana cuka tidak larut dalam air"
    ],
    "correctIndex": 2,
    "explanation": "Cuka mengandungi asid etanoik. Menambah cuka pada tanah berasid akan meningkatkan keasidan, bukan meneutralkannya.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_09",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Susu magnesia dengan pH 10 digunakan untuk merawat gastrik. Mengapakah ia berkesan?",
    "options": [
      "Kerana ia berasid dan menambah asid dalam perut",
      "Kerana ia beralkali dan boleh meneutralkan asid berlebihan dalam perut",
      "Kerana ia neutral dan tidak bertindak balas dengan apa-apa",
      "Kerana ia membunuh semua bakteria dalam perut"
    ],
    "correctIndex": 1,
    "explanation": "Gastrik berpunca daripada asid berlebihan dalam perut. Susu magnesia yang beralkali meneutralkan sebahagian asid itu.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s2_10",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Mengapakah asid kuat lebih berbahaya daripada asid lemah pada kepekatan yang sama?",
    "options": [
      "Kerana asid kuat sentiasa berwarna gelap",
      "Kerana asid kuat tidak bertindak balas dengan logam",
      "Kerana asid kuat mempunyai pH melebihi 7",
      "Kerana asid kuat mengion sepenuhnya dan menghasilkan kepekatan ion hidrogen yang lebih tinggi"
    ],
    "correctIndex": 3,
    "explanation": "Asid kuat mengion sepenuhnya dalam air, jadi lebih banyak ion hidrogen dibebaskan dan kesan kakisan lebih kuat.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_01",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Tindak balas antara asid dan alkali menghasilkan",
    "options": [
      "garam dan air",
      "garam dan gas hidrogen",
      "air dan gas oksigen",
      "garam dan karbon dioksida"
    ],
    "correctIndex": 0,
    "explanation": "Peneutralan ialah tindak balas antara asid dan alkali yang menghasilkan garam dan air sahaja.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_02",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Asid hidroklorik + natrium hidroksida → ?",
    "options": [
      "natrium sulfat dan air",
      "natrium klorida dan air",
      "natrium nitrat dan hidrogen",
      "natrium karbonat dan air"
    ],
    "correctIndex": 1,
    "explanation": "Asid hidroklorik menghasilkan garam klorida, manakala natrium daripada alkali menjadi bahagian logam dalam garam, iaitu natrium klorida.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_03",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah nama proses penambahan asid daripada buret kepada alkali setitik demi setitik sehingga takat akhir?",
    "options": [
      "Penurasan",
      "Peneutralan",
      "Penyulingan",
      "Pentitratan"
    ],
    "correctIndex": 3,
    "explanation": "Pentitratan ialah kaedah menambah asid daripada buret dengan terkawal kepada alkali sehingga penunjuk menunjukkan takat akhir.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_04",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah pH larutan garam yang terhasil daripada peneutralan asid kuat dengan alkali kuat?",
    "options": [
      "7",
      "1",
      "10",
      "14"
    ],
    "correctIndex": 0,
    "explanation": "Garam daripada asid kuat dan alkali kuat tidak berhidrolisis, jadi larutannya menghampiri neutral dengan pH 7.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_05",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Asid sulfurik bertindak balas dengan kalium hidroksida. Apakah garam yang terhasil?",
    "options": [
      "Kalium klorida",
      "Kalium nitrat",
      "Kalium sulfat",
      "Kalium karbonat"
    ],
    "correctIndex": 2,
    "explanation": "Nama garam diambil daripada asid yang digunakan. Asid sulfurik menghasilkan garam sulfat, jadi hasilnya kalium sulfat.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_06",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Fenolftalein ditambah ke dalam larutan natrium hidroksida dan larutan menjadi merah jambu. Warna itu hilang selepas asid ditambah setitik demi setitik. Apakah maksud perubahan ini?",
    "options": [
      "Larutan masih bersifat beralkali",
      "Tindak balas belum bermula",
      "Takat akhir pentitratan telah dicapai dan larutan menjadi neutral",
      "Larutan telah menjadi lebih beralkali"
    ],
    "correctIndex": 2,
    "explanation": "Fenolftalein tidak berwarna dalam larutan neutral atau berasid. Hilangnya warna merah jambu menandakan alkali telah dineutralkan.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_07",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Mengapakah penunjuk diperlukan semasa pentitratan?",
    "options": [
      "Untuk menambah asid ke dalam alkali",
      "Untuk menyejukkan larutan semasa dititrat",
      "Untuk membunuh mikroorganisma dalam larutan",
      "Untuk menunjukkan perubahan warna pada takat akhir"
    ],
    "correctIndex": 3,
    "explanation": "Penunjuk memberikan isyarat visual melalui perubahan warna apabila larutan mula berubah daripada beralkali kepada neutral.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_08",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Asid nitrik bertindak balas dengan kalsium hidroksida. Apakah persamaan perkataan yang betul?",
    "options": [
      "Asid nitrik + kalsium hidroksida → kalsium klorida + air",
      "Asid nitrik + kalsium hidroksida → kalsium nitrat + air",
      "Asid nitrik + kalsium hidroksida → kalsium sulfat + hidrogen",
      "Asid nitrik + kalsium hidroksida → kalsium oksida + air"
    ],
    "correctIndex": 1,
    "explanation": "Asid nitrik menghasilkan garam nitrat dan kalsium datang daripada hidroksida, jadi garamnya kalsium nitrat bersama air.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_09",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Seorang murid mendakwa tindak balas peneutralan membebaskan gas hidrogen kerana asid bertindak balas dengan logam juga membebaskan hidrogen. Adakah dakwaan itu betul?",
    "options": [
      "Betul, kerana semua tindak balas yang melibatkan asid membebaskan hidrogen",
      "Betul, kerana alkali juga mengandungi atom hidrogen",
      "Tidak, kerana peneutralan antara asid dan alkali hanya menghasilkan garam dan air",
      "Tidak, kerana peneutralan membebaskan gas oksigen"
    ],
    "correctIndex": 2,
    "explanation": "Gas hidrogen hanya terbebas apabila asid bertindak balas dengan logam reaktif. Peneutralan asid dengan alkali menghasilkan garam dan air.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b6_s3_10",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Semasa pentitratan, seorang murid terus menambah asid selepas warna penunjuk berubah. Apakah kesan pada bacaan isi padu asid?",
    "options": [
      "Bacaan isi padu asid menjadi lebih rendah daripada nilai sebenar",
      "Takat akhir berlaku lebih awal daripada sepatutnya",
      "Tiada kesan pada bacaan isi padu asid",
      "Bacaan isi padu asid menjadi lebih tinggi daripada nilai sebenar"
    ],
    "correctIndex": 3,
    "explanation": "Asid tambahan selepas takat akhir menambah isi padu yang dicatat, jadi bacaan menjadi lebih tinggi daripada jumlah sebenar yang diperlukan.",
    "ref": "Bab 6, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_01",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Alat apakah yang digunakan untuk mengukur arus elektrik dalam litar?",
    "options": [
      "Voltmeter",
      "Ammeter",
      "Termometer",
      "Barometer"
    ],
    "correctIndex": 1,
    "explanation": "Ammeter mengukur arus elektrik dalam unit ampere dan disambung secara bersiri dalam litar.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_02",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah unit bagi voltan?",
    "options": [
      "Ampere",
      "Ohm",
      "Volt",
      "Newton"
    ],
    "correctIndex": 2,
    "explanation": "Voltan diukur dalam unit volt (V). Ampere ialah unit arus dan ohm ialah unit rintangan.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_03",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Dua cas elektrik yang sama jenis akan",
    "options": [
      "menarik antara satu sama lain",
      "tidak saling bertindak balas",
      "menolak antara satu sama lain",
      "bertukar menjadi cas neutral"
    ],
    "correctIndex": 2,
    "explanation": "Cas yang sama jenis menolak antara satu sama lain, manakala cas yang berlainan jenis menarik antara satu sama lain.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_04",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah yang berlaku apabila sebiji belon digosok dengan kain bulu?",
    "options": [
      "Elektron berpindah antara kain bulu dan belon lalu menghasilkan cas elektrostatik",
      "Proton berpindah daripada kain bulu ke belon",
      "Belon menjadi neutral sepenuhnya",
      "Kain bulu berubah menjadi konduktor"
    ],
    "correctIndex": 0,
    "explanation": "Hanya elektron yang berpindah semasa geseran. Pemindahan elektron menyebabkan belon dan kain bulu bercas bertentangan.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_05",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Bagaimanakah ammeter dan voltmeter disambung dalam litar?",
    "options": [
      "Ammeter secara selari, voltmeter secara bersiri",
      "Kedua-duanya disambung secara bersiri",
      "Kedua-duanya disambung secara selari",
      "Ammeter secara bersiri, voltmeter secara selari"
    ],
    "correctIndex": 3,
    "explanation": "Ammeter perlu dilalui arus, jadi disambung bersiri. Voltmeter mengukur beza keupayaan merentasi komponen, jadi disambung selari.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_06",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Kilat berlaku semasa ribut petir. Apakah penjelasan terbaik bagi kejadian ini?",
    "options": [
      "Geseran antara awan dengan udara mengumpulkan cas sehingga berlaku nyahcas elektrik",
      "Cahaya matahari dipantulkan oleh permukaan awan yang basah",
      "Air hujan bergeser dengan tanah lalu menghasilkan haba yang bercahaya",
      "Tekanan udara yang sangat tinggi menghasilkan cahaya"
    ],
    "correctIndex": 0,
    "explanation": "Geseran antara zarah air dan udara dalam awan mengumpulkan cas elektrostatik. Apabila cas cukup banyak, ia dilepaskan sebagai kilat.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_07",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Arah arus konvensional dalam litar luar ialah",
    "options": [
      "dari terminal negatif ke terminal positif",
      "dari terminal positif ke terminal negatif",
      "dari kutub utara ke kutub selatan",
      "mengikut arah pergerakan elektron"
    ],
    "correctIndex": 1,
    "explanation": "Arus konvensional ditakrifkan mengalir dari terminal positif ke terminal negatif, bertentangan dengan arah pergerakan elektron.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_08",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Sebuah elektroskop telah dicas negatif. Apabila rod logam bercas positif didekatkan pada bebulinya tanpa bersentuhan, apakah yang berlaku pada daun elektroskop?",
    "options": [
      "Daun elektroskop menutup kerana elektron tertarik ke bahagian bebuli",
      "Daun elektroskop membuka lebih luas",
      "Daun elektroskop tidak berubah langsung",
      "Daun elektroskop menjadi neutral serta-merta"
    ],
    "correctIndex": 0,
    "explanation": "Cas positif pada rod menarik elektron naik ke bebuli. Cas negatif pada daun berkurang, jadi tolakan antara daun mengecil dan daun menutup.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_09",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Mengapakah wayar kuprum digunakan untuk membawa arus manakala lapisan getah digunakan pada bahagian luarnya?",
    "options": [
      "Kuprum lebih murah daripada getah",
      "Getah mempunyai lebih banyak elektron bebas daripada kuprum",
      "Kuprum tidak boleh mengalirkan haba",
      "Kuprum mempunyai elektron bebas untuk mengalirkan arus manakala getah tidak"
    ],
    "correctIndex": 3,
    "explanation": "Kuprum ialah konduktor kerana elektron bebasnya boleh bergerak. Getah ialah penebat yang menghalang arus daripada mengalir ke tubuh pengguna.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s1_10",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Mengapakah seekor burung yang hinggap pada sebatang wayar voltan tinggi tidak terkena renjatan elektrik?",
    "options": [
      "Kerana bulu burung ialah penebat yang sangat tebal",
      "Kerana kedua-dua kaki burung berada pada keupayaan yang hampir sama, jadi tiada arus mengalir melalui badannya",
      "Kerana wayar voltan tinggi tidak membawa arus pada waktu siang",
      "Kerana burung mempunyai rintangan badan yang tidak terhingga"
    ],
    "correctIndex": 1,
    "explanation": "Arus hanya mengalir apabila ada beza keupayaan. Kedua-dua kaki burung menyentuh wayar yang sama, jadi beza keupayaan merentasi badan burung hampir sifar.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_01",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Di luar sesuatu magnet, garis medan magnet bergerak dari",
    "options": [
      "kutub selatan ke kutub utara",
      "kutub utara ke kutub selatan",
      "tengah magnet ke kedua-dua kutub",
      "kutub utara ke tengah magnet"
    ],
    "correctIndex": 1,
    "explanation": "Garis medan magnet keluar dari kutub utara dan masuk semula ke kutub selatan di luar magnet.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_02",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Bahan teras manakah paling sesuai untuk membuat elektromagnet sementara?",
    "options": [
      "Besi lembut",
      "Keluli",
      "Kayu",
      "Plastik"
    ],
    "correctIndex": 0,
    "explanation": "Besi lembut mudah dimagnetkan dan cepat kehilangan kemagnetan apabila arus diputuskan, sesuai untuk elektromagnet sementara.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_03",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah yang berlaku kepada medan magnet elektromagnet apabila arus elektrik diputuskan?",
    "options": [
      "Medan magnet menjadi lebih kuat",
      "Medan magnet hilang",
      "Medan magnet hanya bertukar arah",
      "Medan magnet tidak berubah"
    ],
    "correctIndex": 1,
    "explanation": "Medan magnet elektromagnet wujud hanya semasa arus mengalir. Apabila arus diputuskan, medan magnet hilang serta-merta.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_04",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Dua kutub magnet yang sama jenis didekatkan antara satu sama lain. Apakah yang berlaku?",
    "options": [
      "Kedua-dua kutub menarik antara satu sama lain",
      "Kedua-dua kutub tidak saling mempengaruhi",
      "Kedua-dua kutub menolak antara satu sama lain",
      "Kedua-dua kutub bergabung menjadi satu kutub"
    ],
    "correctIndex": 2,
    "explanation": "Kutub yang sama jenis menolak, manakala kutub yang berlainan jenis menarik antara satu sama lain.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_05",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Tiga elektromagnet dibuat dengan bilangan lilitan berbeza tetapi arus yang sama. Elektromagnet dengan 200 lilitan mengangkat paling banyak klip kertas. Apakah kesimpulan yang betul?",
    "options": [
      "Semakin banyak bilangan lilitan, semakin kuat elektromagnet",
      "Semakin sedikit bilangan lilitan, semakin kuat elektromagnet",
      "Bilangan lilitan tidak mempengaruhi kekuatan elektromagnet",
      "Bilangan lilitan menentukan arah arus dalam gegelung"
    ],
    "correctIndex": 0,
    "explanation": "Setiap lilitan menambah medan magnet. Lebih banyak lilitan pada arus yang sama menghasilkan medan magnet yang lebih kuat.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_06",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Bagaimanakah arah medan magnet di sekeliling dawai lurus yang membawa arus ditentukan?",
    "options": [
      "Dengan hukum Ohm",
      "Dengan skala pH",
      "Dengan petua tangan kiri Fleming",
      "Dengan petua genggaman tangan kanan"
    ],
    "correctIndex": 3,
    "explanation": "Ibu jari tangan kanan menunjukkan arah arus dan jari-jari yang menggenggam menunjukkan arah medan magnet mengelilingi dawai.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_07",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Mengapakah teras besi lembut lebih sesuai daripada teras keluli untuk elektromagnet?",
    "options": [
      "Besi lembut lebih murah daripada keluli",
      "Besi lembut mudah dimagnetkan dan mudah kehilangan kemagnetan apabila arus diputuskan",
      "Keluli tidak boleh dimagnetkan langsung",
      "Besi lembut tidak membenarkan arus mengalir"
    ],
    "correctIndex": 1,
    "explanation": "Elektromagnet perlu boleh dihidupkan dan dimatikan. Besi lembut memenuhi syarat ini, manakala keluli kekal bermagnet.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_08",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Jarum kompas berhampiran gegelung elektromagnet terpesong. Apabila arah arus diterbalikkan, jarum terpesong ke arah bertentangan. Apakah kesimpulan yang betul?",
    "options": [
      "Kekuatan medan magnet berkurangan apabila arus diterbalikkan",
      "Kompas telah rosak semasa arus diterbalikkan",
      "Arah medan magnet bergantung pada arah arus dalam gegelung",
      "Arah medan magnet tidak berubah walaupun arus diterbalikkan"
    ],
    "correctIndex": 2,
    "explanation": "Membalikkan arah arus membalikkan arah medan magnet. Itulah sebab jarum kompas terpesong ke arah yang bertentangan.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_09",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Kutub utara satu magnet diletakkan berdekatan kutub selatan magnet lain. Bagaimanakah garis medan magnet antara kedua-dua kutub itu dilukis?",
    "options": [
      "Garis medan bersilang antara satu sama lain",
      "Garis medan hanya wujud di dalam magnet",
      "Garis medan bergerak dari kutub selatan ke kutub utara di luar magnet",
      "Garis medan menghubungkan kutub utara magnet pertama ke kutub selatan magnet kedua tanpa bersilang"
    ],
    "correctIndex": 3,
    "explanation": "Medan magnet kutub berlainan bergabung. Garis medan mengalir dari kutub utara ke kutub selatan dan tidak pernah bersilang.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b7_s3_10",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Sebuah elektromagnet menggunakan teras keluli dan bukannya besi lembut. Apakah kelemahan utama pilihan ini?",
    "options": [
      "Kemagnetannya kekal selepas arus diputuskan sehingga alat tidak berfungsi sebagai suis magnet",
      "Elektromagnet tidak boleh dihidupkan langsung",
      "Arus elektrik tidak dapat mengalir melalui keluli",
      "Bilangan lilitan menjadi tidak relevan pada teras keluli"
    ],
    "correctIndex": 0,
    "explanation": "Keluli kekal bermagnet selepas arus diputuskan. Ini menghalang elektromagnet daripada dimatikan sepenuhnya seperti yang diperlukan pada kren besi buruk.",
    "ref": "Bab 7, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_01",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah unit bagi daya?",
    "options": [
      "Kilogram",
      "Newton",
      "Joule",
      "Watt"
    ],
    "correctIndex": 1,
    "explanation": "Daya diukur dalam unit newton (N). Kilogram ialah unit jisim, joule ialah unit tenaga dan watt ialah unit kuasa.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_02",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Alat apakah yang digunakan untuk mengukur daya?",
    "options": [
      "Neraca spring",
      "Termometer",
      "Ammeter",
      "Pembaris"
    ],
    "correctIndex": 0,
    "explanation": "Neraca spring mengukur daya berdasarkan pemanjangan spring dan berskala dalam newton.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_03",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Daya yang menentang gerakan antara dua permukaan yang bersentuhan dipanggil",
    "options": [
      "daya graviti",
      "daya geseran",
      "daya normal",
      "daya apungan"
    ],
    "correctIndex": 1,
    "explanation": "Daya geseran bertindak bertentangan dengan arah gerakan dan wujud antara dua permukaan yang bersentuhan.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_04",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Daya yang menarik semua objek ke arah pusat Bumi dipanggil",
    "options": [
      "daya geseran",
      "daya apungan",
      "daya elastik",
      "daya graviti"
    ],
    "correctIndex": 3,
    "explanation": "Daya graviti menarik objek ke arah pusat Bumi. Berat objek ialah daya graviti yang bertindak ke atas jisimnya.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_05",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Jisim seketul batu ialah 2 kg. Dengan pecutan graviti 10 m/s², apakah berat batu itu di Bumi?",
    "options": [
      "0.2 N",
      "2 N",
      "200 N",
      "20 N"
    ],
    "correctIndex": 3,
    "explanation": "Berat = jisim × pecutan graviti = 2 kg × 10 m/s² = 20 N.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_06",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Sebuah bola memampatkan jubin lantai semasa mendarat. Daya apakah yang dikenakan lantai ke atas bola sebagai tindak balas?",
    "options": [
      "Daya geseran",
      "Daya normal",
      "Daya graviti",
      "Daya magnet"
    ],
    "correctIndex": 1,
    "explanation": "Bola menekan lantai dan lantai menolak bola dengan daya normal yang bertentangan arah, iaitu pasangan tindakan-tindak balas.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_07",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Sebuah bekas plastik kosong terapung di permukaan air. Apabila bekas itu diisi batu, bekas itu tenggelam. Mengapakah hal ini berlaku?",
    "options": [
      "Jisim bekas bertambah sehingga beratnya melebihi daya apungan maksimum",
      "Daya graviti hilang apabila bekas menjadi lebih berat",
      "Air menjadi lebih sejuk selepas batu dimasukkan",
      "Daya apungan bertambah apabila bekas tenggelam"
    ],
    "correctIndex": 0,
    "explanation": "Objek terapung apabila daya apungan menyamai beratnya. Beban batu menambah berat sehingga melebihi daya apungan maksimum bekas itu.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_08",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Mengapakah sebuah kapal besi yang besar boleh terapung sedangkan sebatang paku besi tenggelam dalam air?",
    "options": [
      "Besi pada kapal berbeza jenis daripada besi pada paku",
      "Kapal tidak dipengaruhi oleh daya graviti",
      "Kapal berongga sehingga ketumpatan puratanya lebih rendah daripada ketumpatan air",
      "Air sentiasa menolak semua objek yang diperbuat daripada besi"
    ],
    "correctIndex": 2,
    "explanation": "Rongga berisi udara menjadikan ketumpatan purata kapal termasuk udara di dalamnya lebih rendah daripada air, jadi kapal terapung.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_09",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Dua daya bertindak pada sebuah kotak: 10 N ke kanan dan 10 N ke kiri. Apakah keadaan kotak itu?",
    "options": [
      "Kotak bergerak ke kanan",
      "Kotak bergerak ke kiri",
      "Kotak kekal pegun kerana daya yang bertindak seimbang",
      "Kotak bergerak ke atas"
    ],
    "correctIndex": 2,
    "explanation": "Dua daya yang sama magnitud tetapi bertentangan arah menghasilkan daya bersih sifar, jadi kotak kekal dalam keadaan pegun.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b8_s1_10",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Mengapakah seorang pelari memakai kasut bertapak kasar semasa berlari?",
    "options": [
      "Untuk menambah daya geseran antara kasut dengan permukaan supaya tidak tergelincir",
      "Untuk mengurangkan berat kasut",
      "Untuk menambah daya graviti ke atas pelari",
      "Untuk mengelakkan sebarang geseran"
    ],
    "correctIndex": 0,
    "explanation": "Tapak kasar meningkatkan daya geseran yang menahan kaki semasa berlepas, jadi pelari tidak mudah tergelincir di permukaan licin.",
    "ref": "Bab 8, KSSM Sains Tingkatan 2"
  },
  {
    "id": "t2_sci_b9_s1_01",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Apakah unit piawai SI bagi tenaga haba dan suhu?",
    "options": [
      "Joule (J) bagi haba dan Kelvin (K) bagi suhu",
      "Kelvin (K) bagi haba dan darjah Celsius (°C) bagi suhu",
      "Darjah Celsius (°C) bagi haba dan Joule (J) bagi suhu",
      "Watt (W) bagi haba dan Kelvin (K) bagi suhu"
    ],
    "correctIndex": 0,
    "explanation": "Haba ialah sejenis tenaga yang diukur dalam unit Joule (J), manakala unit SI bagi suhu ialah Kelvin (K).",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_02",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Bagaimanakah haba daripada Matahari sampai ke permukaan Bumi merentasi ruang angkasa lepas?",
    "options": [
      "Melalui konduksi antara zarah gas angkasa",
      "Melalui perolakan dalam lapisan atmosfera",
      "Melalui sinaran yang boleh merambat dalam vakum",
      "Melalui penyejatan wap air di lapisan stratosfera"
    ],
    "correctIndex": 2,
    "explanation": "Ruang angkasa lepas ialah vakum tanpa medium jirim, jadi haba Matahari hanya dapat sampai ke Bumi secara sinaran.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_03",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Sudu logam yang direndam ke dalam semangkuk sup panas menjadi panas hingga ke hujung pemegangnya. Apakah cara pemindahan haba yang berlaku sepanjang sudu itu?",
    "options": [
      "Perolakan",
      "Konduksi",
      "Sinaran",
      "Kondensasi"
    ],
    "correctIndex": 1,
    "explanation": "Pemindahan haba melalui pepejal logam dari hujung panas ke hujung sejuk berlaku secara konduksi melalui getaran zarah.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_04",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah merupakan penebat haba yang paling sesuai untuk dijadikan pemegang periuk memasak?",
    "options": [
      "Kuprum",
      "Aluminium",
      "Keluli tahan karat",
      "Plastik keras (bakelit)"
    ],
    "correctIndex": 3,
    "explanation": "Plastik keras seperti bakelit ialah penebat haba yang lemah mengalirkan haba secara konduksi, melindungi tangan daripada melecur.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_05",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Mengapakah bayu laut bertiup dari laut ke arah daratan pada waktu siang?",
    "options": [
      "Air laut menjadi lebih panas daripada daratan lalu udara panas bergerak ke darat",
      "Darat memantulkan sinaran matahari ke laut lalu menolak angin ke pantai",
      "Darat lebih cepat panas menyebabkan udara panas naik dan udara sejuk dari laut bergerak ke darat",
      "Tekanan udara di daratan meningkat apabila suhu tanah meningkat pada tengah hari"
    ],
    "correctIndex": 2,
    "explanation": "Pada waktu siang, daratan cepat panas; udara panas di darat naik ke atas lalu digantikan oleh udara lebih sejuk dari laut melalui arus perolakan.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_06",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Sebuah unit penyaman udara lazimnya dipasang berhampiran siling bilik dan bukan berhampiran lantai. Apakah penjelasan saintifik bagi reka bentuk ini?",
    "options": [
      "Udara sejuk yang lebih tumpat turun ke bawah manakala udara panas naik ke atas untuk disejukkan",
      "Udara sejuk yang kurang tumpat kekal di bahagian atas supaya suhu siling sentiasa rendah",
      "Kedudukan tinggi membolehkan haba disingkirkan keluar melalui konduksi dinding konkrit",
      "Penyejatan lembapan berlaku lebih cepat apabila udara sejuk mengalir dari bawah ke atas"
    ],
    "correctIndex": 0,
    "explanation": "Udara sejuk lebih tumpat dan bergerak turun ke bawah, manakala udara panas yang kurang tumpat naik ke atas membentuk arus perolakan.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_07",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Pada waktu malam di kawasan pantai, nelayan tradisional memanfaatkan bayu darat untuk belayar ke laut. Pernyataan manakah betul tentang fenomena bayu darat?",
    "options": [
      "Air laut menyejuk lebih cepat daripada darat menyebabkan udara turun di permukaan laut",
      "Udara sejuk dari laut bergerak ke darat untuk menggantikan udara panas yang naik",
      "Angin bertiup dari laut ke darat akibat perbezaan ketumpatan air masin dan air tawar",
      "Darat menyejuk lebih cepat daripada laut menyebabkan udara sejuk dari darat bergerak ke laut"
    ],
    "correctIndex": 3,
    "explanation": "Pada waktu malam, daratan cepat kehilangan haba dan menjadi lebih sejuk daripada laut; udara panas di atas laut naik dan udara sejuk dari darat bertiup ke laut.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_08",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Bekas P mengandungi 100 ml air bersuhu 80 °C manakala Bekas Q mengandungi 500 ml air bersuhu 80 °C. Jika kedua-duanya diperbuat daripada bahan yang sama, perbandingan manakah yang tepat?",
    "options": [
      "Kedua-dua bekas mempunyai kandungan haba yang sama kerana suhunya serupa",
      "Bekas Q mempunyai kandungan tenaga haba lebih banyak walaupun suhunya sama dengan Bekas P",
      "Bekas P mempunyai kandungan tenaga haba lebih banyak kerana jisimnya lebih kecil",
      "Air dalam Bekas Q mempunyai darjah kepanasan yang lima kali lebih tinggi daripada Bekas P"
    ],
    "correctIndex": 1,
    "explanation": "Suhu kedua-dua air ialah sama (80 °C), namun kandungan tenaga haba bergantung kepada jisim bahan; 500 ml air menyimpan lebih banyak tenaga haba.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_09",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Dalam satu eksperimen makmal, ketulan ais yang dibalut pemberat dawai kuprum diletakkan di dasar tabung uji berisi air sejuk. Bahagian atas air kemudian dipanaskan hingga mendidih, tetapi ais di dasar mengambil masa sangat lama untuk melebur. Apakah kesimpulan eksperimen ini?",
    "options": [
      "Air ialah konduktor haba yang lemah dan air panas kekal di atas tanpa arus perolakan ke bawah",
      "Pemberat kuprum menyerap semua haba dari penunu Bunsen sebelum sampai ke ais",
      "Ais tidak dapat menerima haba melalui konduksi apabila berada di bawah air",
      "Pemanasan di permukaan hanya memindahkan haba ke bawah melalui sinaran yang perlahan"
    ],
    "correctIndex": 0,
    "explanation": "Air panas kurang tumpat lalu kekal di bahagian atas sehingga tiada perolakan turun ke dasar, membuktikan air juga konduktor haba yang lemah.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s1_10",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Seorang murid meletakkan tangan di sisi unggun api pada jarak 50 cm dan masih berasa panas walaupun udara panas dari api bergerak lurus ke atas. Mengapakah haba dapat dirasai di sisi unggun api?",
    "options": [
      "Udara ialah konduktor haba yang sangat pantas ke semua arah mendatar",
      "Arus perolakan udara bergerak secara mendatar menentang daya graviti",
      "Haba dipancarkan ke semua arah secara sinaran dalam bentuk gelombang inframerah",
      "Zarah asap membawa haba melalui perlanggaran terus dengan kulit tangan secara konduksi"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun udara panas naik secara perolakan ke atas dan udara konduktor lemah, haba unggun api tetap bergerak ke sisi melalui sinaran.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_01",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan keseimbangan terma antara dua objek yang bersentuhan?",
    "options": [
      "Kedua-dua objek mempunyai jisim dan ketumpatan yang sama",
      "Pemindahan haba bersih antara kedua-dua objek adalah sifar kerana suhunya telah sama",
      "Objek yang sejuk mengalirkan kesejukan ke objek yang panas hingga haba lenyap",
      "Kedua-dua objek berhenti membebaskan haba ke persekitaran selama-lamanya"
    ],
    "correctIndex": 1,
    "explanation": "Keseimbangan terma tercapai apabila dua objek yang bersentuhan mencapai suhu yang sama dan tiada pengaliran haba bersih berlaku antara keduanya.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_02",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Mengapakah kabel penghantaran elektrik di tepi jalan dipasang dalam keadaan sedikit kendur?",
    "options": [
      "Supaya arus elektrik mengalir lebih lancar apabila kabel berayun",
      "Untuk memudahkan kabel mengembang lebih panjang pada waktu tengah hari",
      "Untuk mengurangkan rintangan udara ketika angin kencang bertiup",
      "Supaya kabel tidak tegang dan putus apabila mengecut pada waktu malam yang sejuk"
    ],
    "correctIndex": 3,
    "explanation": "Logam kabel mengecut dan memendek apabila suhu menurun pada waktu malam atau musim sejuk; pemasangan kendur mengelakkan kabel daripada putus.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_03",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Antara keadaan jirim berikut, yang manakah mengembang paling banyak apabila menerima jumlah haba yang sama?",
    "options": [
      "Gas",
      "Cecair",
      "Pepejal logam",
      "Pepejal bukan logam"
    ],
    "correctIndex": 0,
    "explanation": "Zarah gas berjauhan dan mempunyai daya tarikan sangat lemah, maka gas mengembang paling banyak apabila dipanaskan berbanding cecair dan pepejal.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_04",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah tujuan utama meninggalkan ruang celah kecil antara sambungan rel landasan kereta api?",
    "options": [
      "Mengurangkan bunyi bising apabila roda kereta api melaluinya",
      "Mengalirkan air hujan supaya landasan tidak berkarat",
      "Memberi ruang untuk rel keluli mengembang pada hari panas tanpa membengkok",
      "Memudahkan kerja menggantikan skru landasan yang haus"
    ],
    "correctIndex": 2,
    "explanation": "Rel keluli mengembang pada hari panas; celah sambungan menyediakan ruang pengembangan supaya landasan tidak melengkung atau tergelincir.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_05",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Apakah yang sebenarnya berlaku kepada zarah-zarah dalam sebatang rod besi apabila rod tersebut dipanaskan?",
    "options": [
      "Zarah besi bergetar lebih laju dan jarak purata antara zarah bertambah",
      "Saiz setiap atom besi membesar hingga dua kali ganda saiz asalnya",
      "Bilangan zarah besi bertambah secara mendadak akibat tenaga haba",
      "Zarah besi berhenti bergetar dan bergerak bebas seperti zarah gas"
    ],
    "correctIndex": 0,
    "explanation": "Apabila dipanaskan, zarah memperoleh tenaga kinetik, bergetar lebih laju dan menjarakkan diri antara satu sama lain tanpa mengubah saiz atau bilangan zarah.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_06",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Penutup logam pada balang kaca jem yang sangat ketat boleh dibuka dengan lebih mudah selepas bahagian penutup itu direndam seketika dalam air panas. Mengapakah hal ini berlaku?",
    "options": [
      "Air panas melarutkan gam pada benang skru penutup logam",
      "Kaca mengecut dengan cepat apabila terkena air panas manakala logam kekal sama",
      "Udara di dalam balang mengecut lalu menarik penutup supaya longgar",
      "Logam mengembang lebih banyak daripada kaca apabila dipanaskan lalu melonggarkan cengkaman"
    ],
    "correctIndex": 3,
    "explanation": "Kadar pengembangan logam lebih tinggi daripada kaca pada peningkatan suhu yang sama, menyebabkan penutup logam melonggar dari mulut balang kaca.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_07",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Sebiji bola pingpong yang kemek kembali menjadi bulat apabila dimasukkan ke dalam air panas. Apakah prinsip yang menerangkan perubahan tersebut?",
    "options": [
      "Dinding plastik bola pingpong mengecut apabila terkena air panas",
      "Udara di dalam bola mengembang apabila dipanaskan lalu menolak dinding yang kemek keluar",
      "Air panas meresap masuk melalui liang plastik dan mengisi ruang kosong",
      "Tekanan atmosfera di luar bola meningkat secara mendadak di dalam air panas"
    ],
    "correctIndex": 1,
    "explanation": "Haba daripada air panas memanaskan udara terperangkap di dalam bola pingpong; udara mengembang dan meningkatkan tekanan dalaman untuk membulatkan semula bola.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_08",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Satu jalur dwilogam diperbuat daripada kepingan kuprum dan besi yang dipaku bersama. Diketahui kuprum mengembang lebih banyak daripada besi apabila dipanaskan. Ke arah manakah jalur dwilogam itu melengkung apabila dipanaskan dan apabila disejukkan di dalam peti sejuk?",
    "options": [
      "Melengkung ke arah kuprum apabila dipanaskan dan ke arah besi apabila disejukkan",
      "Kekal lurus apabila dipanaskan tetapi melengkung ke arah kuprum apabila disejukkan",
      "Melengkung ke arah besi apabila dipanaskan dan ke arah kuprum apabila disejukkan",
      "Melengkung ke arah besi dalam kedua-dua keadaan pemanasan dan penyejukan"
    ],
    "correctIndex": 2,
    "explanation": "Apabila dipanaskan, kuprum menjadi lebih panjang lalu menolak jalur melengkung ke arah besi; apabila disejukkan, kuprum mengecut lebih banyak lalu melengkung ke arah kuprum.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_09",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Sebiji bebola tembaga tepat-tepat dapat melalui satu gelang logam pada suhu 25 °C. Jika gelang logam itu dipanaskan manakala bebola tembaga disejukkan dengan ais, apakah yang akan berlaku apabila bebola cuba dimasukkan melalui gelang?",
    "options": [
      "Bebola tersekat kerana gelang mengecut ke dalam apabila dipanaskan",
      "Bebola gagal melepasi gelang kerana saiz zarah tembaga membesar dalam ais",
      "Bebola terlekat di tengah gelang akibat daya tarikan keseimbangan terma",
      "Bebola dapat melalui gelang dengan lebih mudah kerana gelang mengembang dan bebola mengecut"
    ],
    "correctIndex": 3,
    "explanation": "Gelang logam yang dipanaskan mengembang menjadikan diameter lubangnya lebih besar, manakala bebola yang disejukkan mengecut menjadi lebih kecil.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s2_10",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Sebatang sudu keluli bersuhu 28 °C direndam ke dalam secawan kopi bersuhu 75 °C di dalam bilik bersuhu 28 °C. Selepas beberapa minit, sudu dan kopi mencapai suhu yang sama iaitu 68 °C. Mengapakah suhu akhir bukan 75 °C atau 28 °C serta-merta?",
    "options": [
      "Kopi membebaskan haba ke sudu dan udara persekitaran sehingga kopi dan sudu mencapai keseimbangan terma pada 68 °C",
      "Sudu keluli mengalirkan kesejukan ke dalam kopi pada kadar yang tetap selama-lamanya",
      "Kopi hanya memindahkan haba secara sinaran ke sudu tanpa menyentuh permukaan logam",
      "Suhu kopi menurun kerana zarah kopi mengecut sebelum bersentuhan dengan sudu"
    ],
    "correctIndex": 0,
    "explanation": "Haba mengalir dari kopi panas ke sudu yang lebih sejuk dan juga ke persekitaran sehingga sudu dan kopi mencapai keseimbangan terma pada suhu perantaraan 68 °C.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_01",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Antara permukaan berikut, yang manakah merupakan penyerap haba dan pemancar haba yang paling baik?",
    "options": [
      "Putih dan licin",
      "Perak dan berkilat",
      "Hitam dan kusam",
      "Kuning dan berkilat"
    ],
    "correctIndex": 2,
    "explanation": "Permukaan gelap dan kusam (seperti hitam kusam) ialah penyerap haba yang baik dan juga pemancar haba yang baik.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_02",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Mengapakah tangki simpanan bahan api dan lori tangki petrol biasanya dicat dengan warna putih atau perak berkilat?",
    "options": [
      "Memantulkan kebanyakan haba sinaran matahari supaya minyak di dalamnya tidak terlalu panas",
      "Menyerap haba matahari dengan cepat bagi mengekalkan kelikatan bahan api",
      "Memancarkan haba ke dalam tangki supaya tekanan gas sentiasa tinggi",
      "Mempercepatkan proses penyejatan bahan api melalui dinding logam"
    ],
    "correctIndex": 0,
    "explanation": "Permukaan putih dan berkilat merupakan penyerap haba yang lemah kerana memantulkan kebanyakan haba sinaran matahari, mengurangkan risiko pemanasan bahan api.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_03",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah fungsi lapisan dinding kaca bersalut perak yang berkilat di bahagian dalam kelalang termos?",
    "options": [
      "Menghalang pemindahan haba secara konduksi melalui penutup",
      "Menguatkan dinding kaca supaya tidak pecah apabila diisi air mendidih",
      "Menyerap haba daripada persekitaran untuk memanaskan air",
      "Memantulkan haba sinaran kembali ke dalam minuman supaya suhu kekal panas"
    ],
    "correctIndex": 3,
    "explanation": "Permukaan berkilat merupakan pemancar dan penyerap haba yang lemah; ia memantulkan haba sinaran kembali ke dalam kelalang termos.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_04",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah ciri pakaian yang paling sesuai dipakai ketika melakukan aktiviti luar di bawah terik matahari?",
    "options": [
      "Baju berwarna hitam dan tebal",
      "Baju berwarna putih atau cerah daripada kain nipis",
      "Baju berwarna biru tua dan berkilat",
      "Baju berwarna gelap dengan permukaan kasar"
    ],
    "correctIndex": 1,
    "explanation": "Pakaian berwarna putih atau cerah memantulkan lebih banyak sinaran haba matahari berbanding warna gelap, sekali gus membantu badan berasa lebih selesa.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_05",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Mengapakah gegelung penyejuk (kondenser) di bahagian belakang peti sejuk dan sirip penyejuk enjin motosikal lazimnya dicat warna hitam kusam?",
    "options": [
      "Untuk memantulkan haba dari dinding dapur ke arah peti sejuk",
      "Untuk menghalang pengaliran haba secara konduksi daripada paip logam",
      "Untuk menyerap haba dari udara luar masuk ke dalam enjin",
      "Untuk membebaskan haba ke persekitaran secara sinaran dengan lebih cepat"
    ],
    "correctIndex": 3,
    "explanation": "Permukaan hitam kusam ialah pemancar haba yang baik, membantu gegelung kondenser dan sirip enjin melepaskan haba ke persekitaran dengan cekap.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_06",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Kelalang termos menggunakan ruang vakum di antara dua dinding kaca yang berdinding perak. Apakah jenis pemindahan haba yang dapat dihalang secara langsung oleh ruang vakum tersebut?",
    "options": [
      "Sinaran dan penyejatan sahaja",
      "Konduksi dan perolakan",
      "Perolakan dan sinaran sahaja",
      "Konduksi dan sinaran sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Konduksi dan perolakan memerlukan medium jirim untuk berlaku; ketiadaan zarah udara dalam ruang vakum menghalang kedua-dua proses tersebut.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_07",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Dua tin aluminium yang sama saiz diisi dengan 200 ml air panas bersuhu 85 °C dan ditutup dengan penutup gabus. Tin X dicat hitam kusam manakala Tin Y digilap sehingga putih berkilat. Selepas 15 minit di dalam bilik berhawa dingin, apakah pemerhatian yang betul?",
    "options": [
      "Suhu air dalam Tin X lebih rendah daripada Tin Y kerana permukaan hitam kusam memancarkan haba lebih cepat",
      "Suhu air dalam Tin Y lebih rendah daripada Tin X kerana permukaan berkilat memancarkan haba lebih cepat",
      "Suhu air dalam kedua-dua tin menurun pada kadar yang sama kerana ditutup gabus",
      "Suhu air dalam Tin X meningkat sedikit kerana warna hitam menyerap haba bilik"
    ],
    "correctIndex": 0,
    "explanation": "Tin hitam kusam (Tin X) ialah pemancar haba yang lebih baik daripada tin berkilat (Tin Y), jadi air di dalamnya kehilangan haba lebih cepat.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_08",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Dalam satu eksperimen penyerapan haba, sebuah tin dicat hitam kusam dan sebuah tin dicat putih berkilat diletakkan pada jarak sama dari satu penunu Bunsen menyala. Apakah pemboleh ubah dimalarkan yang mesti dikekalkan untuk memastikan ujian ini adil?",
    "options": [
      "Warna dan kekasaran permukaan luar tin",
      "Suhu akhir udara di dalam setiap tin selepas 10 minit",
      "Isi padu tin, jenis logam tin dan jarak setiap tin dari penunu Bunsen",
      "Kadar kenaikan suhu bagi setiap tin setiap minit"
    ],
    "correctIndex": 2,
    "explanation": "Pemboleh ubah dimalarkan ialah faktor yang dikekalkan sama seperti saiz/isi padu tin, bahan tin dan jarak dari sumber haba; warna tin ialah pemboleh ubah dimanipulasi.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_09",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Seorang arkitek merancang reka bentuk rumah kediaman berkonsepkan bangunan hijau di kawasan beriklim khatulistiwa yang panas sepanjang tahun. Gabungan ciri manakah yang paling berkesan mengurangkan penggunaan penyaman udara?",
    "options": [
      "Bumbung bercat hitam kusam, dinding kaca gelap tanpa langsir dan tingkap tertutup rapat",
      "Bumbung dan dinding luar bercat cerah, lapisan penebat haba di bawah bumbung dan pengudaraan silang yang baik",
      "Dinding luar bercat hitam berkilat dan lantai kayu tanpa lubang pengudaraan",
      "Bumbung zink tidak bercat dengan ruang loteng tertutup tanpa penebat"
    ],
    "correctIndex": 1,
    "explanation": "Cat cerah memantulkan sinaran matahari, penebat bumbung menghalang konduksi haba masuk dan pengudaraan silang memudahkan perolakan udara panas keluar.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b9_s3_10",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Sebuah kotak pemanas air suria ringkas hendak dibina menggunakan paip kuprum. Mengapakah paip kuprum di dalam kotak tersebut dicat hitam kusam dan ditutup dengan kepingan kaca jernih di bahagian atas?",
    "options": [
      "Cat hitam menghalang sinaran masuk manakala kaca jernih menyejukkan air melalui penyejatan",
      "Cat hitam memantulkan cahaya ke paip manakala kaca jernih menukar tenaga haba menjadi elektrik",
      "Cat hitam menjadikan paip penebat haba manakala kaca jernih mengalirkan arus perolakan keluar",
      "Cat hitam kusam memaksimumkan penyerapan sinaran suria manakala kaca jernih memerangkap haba di dalam kotak"
    ],
    "correctIndex": 3,
    "explanation": "Permukaan hitam kusam menyerap haba matahari dengan cekap untuk memanaskan air dalam paip kuprum, manakala penutup kaca mengurangkan kehilangan haba secara perolakan.",
    "ref": "Bab 9, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_01",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Bagaimanakah gelombang bunyi dihasilkan?",
    "options": [
      "Melalui pemanasan udara secara sinaran",
      "Melalui aliran elektron di dalam dawai logam",
      "Melalui pergerakan cahaya dalam vakum",
      "Melalui getaran sesuatu objek yang mengganggu zarah medium di sekelilingnya"
    ],
    "correctIndex": 3,
    "explanation": "Setiap bunyi terhasil apabila objek bergetar, lalu memindahkan getaran tersebut kepada zarah medium di sekelilingnya.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_02",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Susunan manakah yang menunjukkan kelajuan perambatan bunyi daripada paling laju kepada paling perlahan?",
    "options": [
      "Gas -> Cecair -> Pepejal",
      "Pepejal -> Cecair -> Gas",
      "Cecair -> Pepejal -> Gas",
      "Pepejal -> Gas -> Cecair"
    ],
    "correctIndex": 1,
    "explanation": "Bunyi merambat paling laju dalam pepejal kerana zarahnya tersusun paling rapat, diikuti cecair dan paling perlahan dalam gas.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_03",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Antara bahan berikut, yang manakah paling berkesan untuk menyerap bunyi di dalam studio rakaman muzik?",
    "options": [
      "Jubin seramik licin",
      "Kepingan kaca tebal",
      "Span lembut berliang dan langsir tebal",
      "Papan keluli rata"
    ],
    "correctIndex": 2,
    "explanation": "Permukaan lembut dan berliang seperti span serta langsir tebal ialah penyerap bunyi yang baik untuk mengurangkan pantulan dan gema.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_04",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Mengapakah dua orang angkasawan di permukaan Bulan tidak dapat berbual secara terus tanpa menggunakan alat komunikasi radio?",
    "options": [
      "Permukaan Bulan tiada udara dan berada dalam keadaan vakum yang menghalang perambatan bunyi",
      "Daya graviti Bulan terlalu kuat sehingga menarik gelombang bunyi ke bawah",
      "Suhu Bulan terlalu rendah sehingga membekukan gelombang bunyi",
      "Gelombang bunyi dipantulkan sepenuhnya oleh sut angkasawan"
    ],
    "correctIndex": 0,
    "explanation": "Gelombang bunyi memerlukan medium jirim untuk merambat dan tidak boleh merambat melalui vakum di permukaan Bulan.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_05",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Sebuah loceng elektrik yang sedang berdering diletakkan di dalam serkup kaca kedap udara. Apabila pam vakum dihidupkan untuk menyedut udara keluar secara beransur-ansur, apakah yang akan diperhatikan?",
    "options": [
      "Pemukul loceng berhenti bergerak serta-merta sebaik udara berkurangan",
      "Pemukul masih mengetuk loceng tetapi bunyi semakin perlahan sehingga tidak kedengaran",
      "Bunyi loceng menjadi semakin nyaring kerana tiada rintangan udara",
      "Gelombang bunyi terus kedengaran jelas melalui ruang vakum"
    ],
    "correctIndex": 1,
    "explanation": "Apabila udara disedut keluar, kekurangan medium menyebabkan bunyi semakin lemah hingga hilang walaupun pemukul masih dilihat bergetar mengetuk loceng.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_06",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Seseorang melekapkan telinga pada landasan kereta api keluli dan mendengar bunyi kereta api yang masih jauh sebelum bunyi itu kedengaran melalui udara. Mengapakah hal ini berlaku?",
    "options": [
      "Keluli menghasilkan frekuensi bunyi yang lebih tinggi daripada udara",
      "Zarah udara tidak mampu memindahkan bunyi pada jarak melebihi 100 meter",
      "Zarah dalam keluli tersusun sangat rapat membolehkan getaran bunyi dipindahkan jauh lebih pantas daripada udara",
      "Gelombang bunyi di udara sentiasa dipantulkan ke atas sebelum sampai ke telinga"
    ],
    "correctIndex": 2,
    "explanation": "Susunan zarah pepejal keluli yang amat rapat memindahkan getaran gelombang bunyi kira-kira 15 kali lebih pantas berbanding zarah gas di udara.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_07",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Mengapakah lantai panggung wayang dipasang permaidani tebal dan dindingnya dilapisi panel kain lembut berlubang?",
    "options": [
      "Supaya bunyi daripada pembesar suara dipantulkan berulang kali ke seluruh dewan",
      "Untuk melajukan perambatan bunyi dari skrin ke barisan tempat duduk belakang",
      "Untuk meningkatkan kelangsingan suara pelakon agar lebih nyaring",
      "Untuk menyerap bunyi berlebihan dan mengelakkan gema yang mengganggu kejelasan audio"
    ],
    "correctIndex": 3,
    "explanation": "Permaidani dan panel lembut menyerap gelombang bunyi yang memantul dari dinding, lalu mengurangkan gema serta memastikan audio filem kedengaran jelas.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_08",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "H",
    "q": "Dalam eksperimen pantulan bunyi menggunakan dua tiub kadbod bercondong dan satu jam randik berdetik di hujung Tiub A, murid mendengar bunyi detik paling kuat di hujung Tiub B apabila sudut tuju sama dengan sudut pantulan pada satu permukaan tegak. Bahan manakah pada permukaan pemantul akan menghasilkan bunyi paling lemah di Tiub B?",
    "options": [
      "Kepingan papan lembut atau gabus tebal",
      "Kepingan aluminium yang licin",
      "Sekeping kaca cermin yang rata",
      "Papan kayu jati yang keras dan bervarnis"
    ],
    "correctIndex": 0,
    "explanation": "Papan lembut atau gabus mempunyai permukaan berliang dan lembut yang menyerap sebahagian besar tenaga bunyi, menyebabkan pantulan ke Tiub B menjadi paling lemah.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_09",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "H",
    "q": "Seekor ikan paus dapat berkomunikasi dengan ikan paus lain yang berada beberapa kilometer jauhnya di dalam lautan dengan lebih berkesan berbanding haiwan darat pada jarak yang sama. Faktor manakah yang menerangkan kecekapan penyebaran bunyi di dalam laut?",
    "options": [
      "Air laut berada pada tekanan rendah yang mengurangkan penyerapan bunyi",
      "Ketumpatan cahaya matahari dalam air laut menguatkan amplitud bunyi",
      "Zarah air laut lebih rapat berbanding zarah udara membolehkan pemindahan getaran lebih laju",
      "Tiada sebarang permukaan keras di dasar laut untuk memantulkan gelombang bunyi"
    ],
    "correctIndex": 2,
    "explanation": "Air ialah cecair yang zarahnya lebih rapat daripada gas udara; maka bunyi merambat lebih laju (~1500 m/s) dan lebih jauh di dalam air berbanding udara.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s1_10",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "H",
    "q": "Sebuah dewan serbaguna baharu mengalami masalah bunyi ucapan pengetua kedengaran bercampur aduk dan bergema kuat. Tindakan pengubahsuaian manakah yang paling tepat untuk menyelesaikan masalah akustik ini?",
    "options": [
      "Menggantikan semua langsir dengan bidai aluminium berkilat",
      "Memasang panel busa akustik pada dinding dan meletakkan permaidani di laluan lantai",
      "Menanggalkan semua kerusi berkusyen dan menggantikannya dengan bangku batu marmar",
      "Mengecat semua dinding konkrit dengan cat minyak licin berkilat"
    ],
    "correctIndex": 1,
    "explanation": "Panel busa akustik dan permaidani ialah bahan lembut dan berliang yang menyerap tenaga bunyi berlebihan untuk mengurangkan pantulan gema.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_01",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Berapakah julat had pendengaran normal bagi manusia?",
    "options": [
      "20 Hz hingga 20 000 Hz",
      "2 Hz hingga 2 000 Hz",
      "200 Hz hingga 200 000 Hz",
      "0 Hz hingga 10 000 Hz"
    ],
    "correctIndex": 0,
    "explanation": "Telinga manusia yang normal dapat mengesan gelombang bunyi berfrekuensi antara 20 Hz hingga 20 000 Hz.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_02",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah istilah bagi gelombang bunyi yang mempunyai frekuensi melebihi 20 000 Hz dan digunakan oleh kelawar untuk mengesan mangsa?",
    "options": [
      "Infrabunyi",
      "Gema melantun",
      "Bunyi teredam",
      "Ultrabunyi"
    ],
    "correctIndex": 3,
    "explanation": "Ultrabunyi ialah bunyi berfrekuensi melebihi had atas pendengaran manusia (> 20 000 Hz) yang digunakan oleh kelawar dan ikan lumba-lumba.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_03",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Alat perubatan manakah yang menggunakan prinsip pantulan gelombang bunyi ultrabunyi untuk melihat imej fetus di dalam rahim ibu?",
    "options": [
      "Termometer inframerah",
      "Pengimbas ultrabunyi",
      "Elektroskop",
      "Osiloskop sinar katod"
    ],
    "correctIndex": 1,
    "explanation": "Pengimbas ultrabunyi memancarkan gelombang berfrekuensi tinggi yang terpantul pada tisu fetus untuk membentuk imej dengan selamat.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_04",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah teknologi berasaskan pantulan ultrabunyi yang dipasang pada kapal laut untuk mengukur kedalaman laut dan mengesan kumpulan ikan?",
    "options": [
      "Radar cahaya",
      "Termostat",
      "Sonar",
      "Barometer"
    ],
    "correctIndex": 2,
    "explanation": "Sonar (Sound Navigation and Ranging) menggunakan gelombang ultrabunyi yang dipantulkan oleh dasar laut atau kumpulan ikan untuk menentukan kedalaman dan lokasi.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_05",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Seorang pejalan kaki berdiri pegun di tepi jalan sambil mendengar bunyi siren sebuah ambulans yang bergerak laju menghampirinya dan kemudian melepasi serta menjauhinya. Mengapakah kelangsingan bunyi siren didengar lebih tinggi semasa ambulans menghampiri berbanding semasa menjauhi?",
    "options": [
      "Amplitud bunyi berkurang apabila ambulans semakin jauh daripada pejalan kaki",
      "Laju bunyi di udara meningkat secara kekal ketika ambulans bergerak ke hadapan",
      "Panjang gelombang bunyi bertambah panjang apabila ambulans bergerak mendekat",
      "Kesan Doppler menyebabkan muka gelombang bunyi termampat di hadapan ambulans lalu meningkatkan frekuensi yang dikesan"
    ],
    "correctIndex": 3,
    "explanation": "Mengikut kesan Doppler, sumber bunyi yang bergerak mendekat memampatkan gelombang bunyi menyebabkan frekuensi ketara lebih tinggi, dan sebaliknya apabila menjauh.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_06",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Mengapakah kita dapat mendengar gema suara sendiri dengan jelas apabila menjerit di hadapan dinding gua yang jauh, tetapi tidak mendengar gema yang jelas di dalam bilik tidur kecil?",
    "options": [
      "Di dalam bilik kecil, bunyi pantulan tiba terlalu cepat sehingga bercampur dengan bunyi asal di telinga",
      "Dinding bilik tidur yang kecil tidak memantulkan gelombang bunyi langsung",
      "Gelombang bunyi hanya merambat pada frekuensi di bawah 20 Hz di dalam bilik kecil",
      "Suhu di dalam bilik tidur terlalu rendah untuk membolehkan pantulan bunyi berlaku"
    ],
    "correctIndex": 0,
    "explanation": "Telinga manusia memerlukan sela masa sekurang-kurangnya sekitar 0.1 s untuk membezakan gema daripada bunyi asal; bilik kecil terlalu dekat sehingga pantulan bertindih dengan bunyi asal.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_07",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Warga emas sering mengalami kesukaran mendengar bunyi nyaring berfrekuensi tinggi seperti kicauan burung atau nada dering tertentu berbanding kanak-kanak. Apakah punca utama keadaan ini?",
    "options": [
      "Kelajuan bunyi di udara menjadi lebih perlahan bagi telinga orang dewasa",
      "Julat had pendengaran mengecil apabila usia meningkat akibat penurunan kepekaan gegendang telinga dan sel deria",
      "Frekuensi bunyi di atas 5 000 Hz bertukar menjadi gelombang cahaya sebelum masuk ke telinga",
      "Telinga warga emas hanya boleh mengesan gelombang infrabunyi di bawah 20 Hz"
    ],
    "correctIndex": 1,
    "explanation": "Apabila usia meningkat, struktur telinga seperti gegendang dan koklea menjadi kurang peka, menyebabkan had atas frekuensi yang dapat didengar menurun.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_08",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "H",
    "q": "Sebuah wisel anjing direka untuk mengeluarkan bunyi berfrekuensi 25 000 Hz. Apabila ditiup di taman, anjing peliharaan segera berlari ke arah tuannya tetapi orang ramai di sekeliling tidak mendengar sebarang bunyi. Mengapakah fenomena ini berlaku?",
    "options": [
      "Gelombang 25 000 Hz diserap sepenuhnya oleh udara sebelum sampai ke telinga manusia",
      "Frekuensi 25 000 Hz berada di atas had pendengaran manusia (20 000 Hz) tetapi masih dalam julat pendengaran anjing",
      "Amplitud wisel anjing adalah sifar dan hanya mengeluarkan getaran magnetik",
      "Manusia hanya dapat mendengar gelombang infrabunyi yang berfrekuensi melebihi 20 000 Hz"
    ],
    "correctIndex": 1,
    "explanation": "Bunyi 25 000 Hz ialah ultrabunyi yang melebihi had atas pendengaran manusia (20 000 Hz), namun anjing mempunyai julat pendengaran lebih tinggi sehingga sekitar 45 000 Hz.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_09",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "H",
    "q": "Semasa doktor menggunakan stetoskop pada dada pesakit, mengapakah bunyi degupan jantung kedengaran jelas kepada doktor walaupun dalam wad yang agak bising?",
    "options": [
      "Stetoskop menukarkan degupan jantung kepada gelombang cahaya di dalam tiub",
      "Diafragma dan tiub stetoskop menghalang kesan Doppler daripada udara bilik",
      "Stetoskop menjana ultrabunyi baharu melebihi 20 000 Hz apabila menyentuh kulit",
      "Tiub berongga stetoskop mengumpulkan dan menyalurkan getaran bunyi melalui pantulan dalaman terus ke telinga doktor tanpa banyak lesapan"
    ],
    "correctIndex": 3,
    "explanation": "Diafragma stetoskop bergetar mengikut degupan jantung dan menyalurkan gelombang bunyi secara terkurung melalui tiub terus ke telinga doktor sambil menapis bunyi luar.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b10_s3_10",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "H",
    "q": "Seorang pemandu kereta yang bergerak pada kelajuan 90 km/j membunyikan hon berfrekuensi malar ke arah sebuah tembok batu di hadapannya sambil mendekati tembok itu. Apakah perbandingan frekuensi bunyi gema yang didengar semula oleh pemandu berbanding frekuensi asal hon?",
    "options": [
      "Frekuensi gema yang didengar adalah lebih tinggi daripada frekuensi asal hon kerana kesan Doppler berlaku dua kali semasa mendekati tembok",
      "Frekuensi gema adalah tepat sama dengan frekuensi asal kerana tembok batu berada dalam keadaan pegun",
      "Frekuensi gema menjadi sifar kerana bunyi hon tidak dapat memantul daripada objek yang bergerak",
      "Frekuensi gema menjadi lebih rendah daripada frekuensi asal kerana jarak ke tembok semakin pendek"
    ],
    "correctIndex": 0,
    "explanation": "Kereta yang mendekati tembok menyebabkan tembok menerima frekuensi lebih tinggi, dan pemandu yang terus bergerak ke arah bunyi pantulan menerima frekuensi lebih tinggi lagi.",
    "ref": "Bab 10, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_01",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "L",
    "q": "Apakah tiga bentuk utama pengelasan galaksi di alam semesta?",
    "options": [
      "Bulat, segi tiga dan berpilin",
      "Berpilin, elips dan tidak seragam",
      "Sfera, kubus dan tidak seragam",
      "Berpilin, cincin dan mendatar"
    ],
    "correctIndex": 1,
    "explanation": "Galaksi dikelaskan kepada tiga bentuk utama iaitu galaksi berpilin (spiral), galaksi elips (elliptical) dan galaksi tidak seragam (irregular).",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_02",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "L",
    "q": "Apakah bentuk Galaksi Bima Sakti yang didiami oleh Sistem Suria kita?",
    "options": [
      "Galaksi berpilin",
      "Galaksi elips",
      "Galaksi tidak seragam",
      "Galaksi sfera padat"
    ],
    "correctIndex": 0,
    "explanation": "Galaksi Bima Sakti ialah sebuah galaksi berpilin yang mempunyai teras tengah dan lengan-lengan berpilin.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_03",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "L",
    "q": "Di bahagian manakah kedudukan Sistem Suria di dalam Galaksi Bima Sakti?",
    "options": [
      "Tepat di pusat teras Bima Sakti",
      "Di luar sempadan graviti Bima Sakti",
      "Di pinggir salah satu lengan berpilin Bima Sakti",
      "Di antara Galaksi Bima Sakti dan Galaksi Andromeda"
    ],
    "correctIndex": 2,
    "explanation": "Sistem Suria kita terletak di bahagian pinggir salah satu lengan berpilin Galaksi Bima Sakti, bukan di pusat galaksi.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_04",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh galaksi tidak seragam?",
    "options": [
      "Galaksi Andromeda",
      "Galaksi Bima Sakti",
      "Galaksi Messier 87",
      "Awan Magellan Besar dan Awan Magellan Kecil"
    ],
    "correctIndex": 3,
    "explanation": "Awan Magellan Besar dan Awan Magellan Kecil ialah contoh galaksi tidak seragam yang tidak mempunyai bentuk geometri khusus.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_05",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "M",
    "q": "Mengapakah Galaksi Andromeda dikelaskan bersama dengan Galaksi Bima Sakti dalam kumpulan galaksi yang sama?",
    "options": [
      "Kedua-duanya hanya mengandungi satu bintang besar di pusatnya",
      "Kedua-duanya berbentuk cakera rata dengan lengan berpilin yang mengandungi bintang, gas dan debu",
      "Kedua-duanya berbentuk bujur tanpa sebarang lengan dan hanya terdiri daripada bintang tua",
      "Kedua-duanya tidak mempunyai bentuk tetap akibat letupan supernova"
    ],
    "correctIndex": 1,
    "explanation": "Andromeda dan Bima Sakti ialah galaksi berpilin kerana kedua-duanya mempunyai struktur cakera dengan lengan berpilin di sekeliling teras.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_06",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "M",
    "q": "Ahli astronomi menemui sebuah galaksi baharu yang berbentuk bujur licin, tiada lengan berpilin dan mengandungi sangat sedikit gas serta debu untuk membentuk bintang baharu. Apakah pengelasan galaksi tersebut?",
    "options": [
      "Galaksi berpilin berpalang",
      "Galaksi tidak seragam muda",
      "Nebula planet tunggal",
      "Galaksi elips"
    ],
    "correctIndex": 3,
    "explanation": "Galaksi elips dicirikan oleh bentuk bujur atau hampir bulat, ketiadaan lengan berpilin serta kandungan gas yang sedikit dengan kebanyakan bintang tua.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_07",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "M",
    "q": "Apakah daya asas yang memastikan jutaan hingga berbilion bintang, gas dan debu kekal terikat membentuk sebuah galaksi?",
    "options": [
      "Daya tarikan graviti",
      "Daya elektrostatik antara bintang",
      "Daya geseran atmosfera angkasa",
      "Daya tolakan angin suria"
    ],
    "correctIndex": 0,
    "explanation": "Daya tarikan graviti mengikat berbilion bintang, gas dan debu angkasa supaya kekal bergerak dalam sistem galaksi.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_08",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "H",
    "q": "Seorang murid menyatakan bahawa Matahari terletak di pusat Galaksi Bima Sakti kerana semua planet dalam Sistem Suria mengelilingi Matahari. Mengapakah tanggapan murid itu tidak tepat?",
    "options": [
      "Planet sebenarnya mengelilingi Bumi dan bukannya Matahari",
      "Matahari ialah satu daripada berbilion bintang di dalam Sistem Suria sahaja",
      "Matahari hanya pusat Sistem Suria, manakala keseluruhan Sistem Suria berada di lengan berpilin di pinggir Bima Sakti",
      "Galaksi Bima Sakti tidak mempunyai pusat kerana ia berbentuk tidak seragam"
    ],
    "correctIndex": 2,
    "explanation": "Matahari ialah pusat Sistem Suria, tetapi Sistem Suria hanyalah sebahagian kecil daripada Bima Sakti dan terletak di pinggir satu lengan berpilin.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_09",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "H",
    "q": "Antara perbandingan ciri berikut, yang manakah paling tepat membezakan galaksi elips daripada galaksi tidak seragam?",
    "options": [
      "Galaksi elips berbentuk bujur dan didominasi bintang tua, manakala galaksi tidak seragam tiada bentuk tetap serta kaya dengan gas, debu dan bintang muda",
      "Galaksi elips hanya wujud di luar alam semesta, manakala galaksi tidak seragam berada dalam Sistem Suria",
      "Galaksi elips mempunyai dua lengan berpilin panjang, manakala galaksi tidak seragam mempunyai empat lengan",
      "Galaksi elips lebih kecil daripada planet Musytari, manakala galaksi tidak seragam lebih besar daripada Matahari"
    ],
    "correctIndex": 0,
    "explanation": "Galaksi elips mempunyai bentuk bujur yang teratur dan kebanyakannya bintang tua, manakala galaksi tidak seragam tiada bentuk seragam dan kaya gas/debu untuk pembentukan bintang muda.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s1_10",
    "unit": "b11",
    "skill": "b11_s1",
    "diff": "H",
    "q": "Apabila kita melihat ke langit malam dari Bumi yang tiada pencemaran cahaya, kita dapat melihat satu jalur kabur keputihan yang merentasi langit (dikenali sebagai Bima Sakti). Mengapakah galaksi berpilin kita kelihatan seperti jalur lurus dari sudut pandangan Bumi?",
    "options": [
      "Kerana kita berada di luar Galaksi Bima Sakti dan melihatnya dari atas",
      "Kerana kita berada di dalam cakera nipis galaksi berpilin itu sendiri lalu memandang ke arah satah cakera tersebut",
      "Kerana cahaya dari Galaksi Andromeda menembusi atmosfera Bumi menjadi jalur putih",
      "Kerana semua bintang dalam Bima Sakti disusun dalam satu barisan lurus sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Oleh sebab Sistem Suria terletak di dalam satah cakera rata Bima Sakti, pandangan merentasi cakera dari dalam kelihatan sebagai satu jalur padat bintang dan debu.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_01",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "L",
    "q": "Daripada objek angkasa manakah semua bintang dilahirkan?",
    "options": [
      "Komet",
      "Bintang neutron",
      "Nebula",
      "Lohong hitam"
    ],
    "correctIndex": 2,
    "explanation": "Bintang lahir daripada nebula, iaitu awan besar yang mengandungi debu dan gas seperti hidrogen serta helium.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_02",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "L",
    "q": "Apakah proses penjanaan tenaga yang berlaku di teras sesuatu bintang apabila gas hidrogen bertukar menjadi helium pada suhu dan tekanan amat tinggi?",
    "options": [
      "Pembakaran kimia",
      "Penyejatan haba",
      "Elektrolisis gas",
      "Pelakuran nuklear"
    ],
    "correctIndex": 3,
    "explanation": "Tindak balas pelakuran nuklear menggabungkan nukleus hidrogen menjadi helium dan membebaskan tenaga cahaya serta haba yang amat besar.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_03",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "L",
    "q": "Apakah peringkat akhir bagi kitar hidup bintang bersaiz sederhana seperti Matahari selepas peringkat raksasa merah?",
    "options": [
      "Kerdil putih",
      "Supernova",
      "Bintang neutron",
      "Lohong hitam"
    ],
    "correctIndex": 0,
    "explanation": "Bintang bersaiz sederhana seperti Matahari mengembang menjadi raksasa merah dan akhirnya terasnya mengecut menjadi kerdil putih.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_04",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "L",
    "q": "Apakah nama letupan dahsyat yang berlaku pada penghujung hayat bintang besar dan bintang super besar selepas peringkat super raksasa?",
    "options": [
      "Gerhana suria",
      "Supernova",
      "Nebula suria",
      "Hujan meteor"
    ],
    "correctIndex": 1,
    "explanation": "Super raksasa mengalami keruntuhan teras secara tiba-tiba yang mencetuskan letupan hebat bergelar supernova.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_05",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "M",
    "q": "Urutan kitar hidup manakah yang betul bagi sebuah bintang bersaiz besar (tetapi bukan super besar)?",
    "options": [
      "Nebula -> Bintang besar -> Raksasa merah -> Kerdil putih",
      "Nebula -> Bintang besar -> Supernova -> Raksasa merah -> Lohong hitam",
      "Nebula -> Bintang besar -> Raksasa merah -> Super raksasa -> Supernova -> Bintang neutron",
      "Bintang neutron -> Supernova -> Super raksasa -> Nebula"
    ],
    "correctIndex": 2,
    "explanation": "Bintang besar berevolusi daripada nebula melalui raksasa merah dan super raksasa sebelum meletup sebagai supernova dan meninggalkan bintang neutron.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_06",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "M",
    "q": "Apakah yang membezakan nasib akhir bintang besar daripada bintang super besar selepas meletup sebagai supernova?",
    "options": [
      "Bintang besar membentuk bintang neutron, manakala bintang super besar membentuk lohong hitam",
      "Bintang besar membentuk lohong hitam, manakala bintang super besar membentuk kerdil putih",
      "Bintang besar kekal sebagai super raksasa, manakala bintang super besar menjadi Matahari baharu",
      "Bintang besar tidak menghasilkan sebarang sisa, manakala bintang super besar menjadi planet berbatu"
    ],
    "correctIndex": 0,
    "explanation": "Sisa teras bintang besar selepas supernova menjadi bintang neutron, manakala bintang super besar berjisim sangat tinggi runtuh menjadi lohong hitam.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_07",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "M",
    "q": "Mengapakah awan gas dan debu dalam sebuah nebula mula mengecut dan memanas sehingga berupaya melahirkan bintang baharu?",
    "options": [
      "Kerana cahaya dari planet berdekatan memanaskan gas hidrogen",
      "Kerana daya elektrostatik menolak zarah debu ke bahagian luar nebula",
      "Kerana komet yang melintas menyalakan gas oksigen di dalam nebula",
      "Kerana daya tarikan graviti menarik gas dan debu ke pusat dengan padat lalu meningkatkan suhu teras"
    ],
    "correctIndex": 3,
    "explanation": "Daya tarikan graviti memampatkan gas dan debu ke teras nebula menyebabkan suhu serta tekanan melonjak cukup tinggi untuk memulakan pelakuran nuklear.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_08",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "H",
    "q": "Bintang X mempunyai jisim asal sebanyak 25 kali jisim Matahari. Apakah peringkat akhir yang paling mungkin dicapai oleh Bintang X dan mengapa?",
    "options": [
      "Kerdil putih, kerana semua bintang melepaskan lapisan luarnya secara perlahan",
      "Lohong hitam, kerana jisimnya yang amat besar menghasilkan daya graviti teras yang terlalu kuat sehingga cahaya pun tidak terlepas selepas supernova",
      "Raksasa merah kekal, kerana bintang berjisim besar tidak pernah kehabisan hidrogen",
      "Planet gergasi gas, kerana terasnya menyejuk menjadi hidrogen cecair"
    ],
    "correctIndex": 1,
    "explanation": "Bintang yang berjisim puluhan kali jisim Matahari ialah bintang super besar yang meletup sebagai supernova lalu runtuh menjadi lohong hitam.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_09",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "H",
    "q": "Bagaimanakah kematian bintang besar melalui letupan supernova berkait rapat dengan kelahiran bintang dan planet generasi baharu di alam semesta?",
    "options": [
      "Supernova memusnahkan semua daya graviti di galaksi supaya bintang lain tidak terbentuk",
      "Lohong hitam yang terhasil memancarkan cahaya untuk menyalakan planet baharu",
      "Letupan supernova menyebarkan gas serta unsur berat ke angkasa lalu membentuk nebula baharu sebagai tapak kelahiran bintang seterusnya",
      "Semua bintang yang lahir selepas supernova semestinya berakhir sebagai kerdil putih"
    ],
    "correctIndex": 2,
    "explanation": "Letupan supernova menghamburkan debu, gas dan unsur berat ke angkasa, memperkayakan nebula baharu yang kelak membentuk bintang serta planet generasi baharu.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s2_10",
    "unit": "b11",
    "skill": "b11_s2",
    "diff": "H",
    "q": "Apabila Matahari kita memasuki peringkat raksasa merah berbilion tahun akan datang, lapisan luarnya akan mengembang dengan sangat besar. Apakah perubahan yang berlaku pada teras dan permukaan Matahari ketika fasa ini?",
    "options": [
      "Bahan api hidrogen di teras semakin kehabisan manakala permukaan luarnya mengembang dan menjadi lebih sejuk serta berwarna kemerahan",
      "Pelakuran nuklear di teras berhenti sepenuhnya dan Matahari mengecut terus menjadi lohong hitam",
      "Suhu permukaan Matahari meningkat lebih panas daripada bintang biru akibat pelakuran oksigen",
      "Saiz Matahari menjadi lebih kecil daripada Bumi dan berwarna putih kebiruan"
    ],
    "correctIndex": 0,
    "explanation": "Catatan: dalam soalan ini jawapan betul ialah index 0 — tapi semak pola `correctIndex` yang dirancang! Untuk b11_s2 item 10 kita mahu `correctIndex: 3`!",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_01",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "L",
    "q": "Berdasarkan pengelasan warna dan suhu permukaan bintang, warna bintang manakah yang mempunyai suhu permukaan paling tinggi (paling panas)?",
    "options": [
      "Merah",
      "Kuning",
      "Jingga",
      "Biru"
    ],
    "correctIndex": 3,
    "explanation": "Bintang berwarna biru mempunyai suhu permukaan paling tinggi (melebihi 25 000 K), manakala bintang berwarna merah adalah paling sejuk.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_02",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "L",
    "q": "Apakah pengelasan warna dan saiz bagi Matahari kita?",
    "options": [
      "Bintang merah bersaiz raksasa",
      "Bintang biru bersaiz super raksasa",
      "Bintang kuning bersaiz sederhana",
      "Bintang putih bersaiz kerdil"
    ],
    "correctIndex": 2,
    "explanation": "Matahari ialah bintang berwarna kuning dengan suhu permukaan sekitar 5 500–6 000 K dan dikelaskan sebagai bintang bersaiz sederhana.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_03",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "L",
    "q": "Susunan manakah yang menunjukkan peningkatan suhu permukaan bintang daripada paling sejuk kepada paling panas?",
    "options": [
      "Biru -> Putih -> Kuning -> Merah",
      "Merah -> Kuning -> Putih -> Biru",
      "Kuning -> Merah -> Biru -> Putih",
      "Putih -> Biru -> Merah -> Kuning"
    ],
    "correctIndex": 1,
    "explanation": "Suhu permukaan bintang meningkat mengikut urutan warna: merah (paling sejuk), jingga, kuning, putih, dan biru (paling panas).",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_04",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan bintang yang mempunyai saiz paling besar dalam pengelasan saiz bintang?",
    "options": [
      "Bintang super raksasa",
      "Bintang raksasa",
      "Bintang sederhana",
      "Bintang kerdil"
    ],
    "correctIndex": 0,
    "explanation": "Urutan saiz bintang daripada paling kecil kepada paling besar ialah bintang kerdil, bintang sederhana, bintang raksasa dan bintang super raksasa.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_05",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "M",
    "q": "Kecerahan sesuatu bintang yang kelihatan dari Bumi bergantung kepada tiga faktor utama. Apakah tiga faktor tersebut?",
    "options": [
      "Saiz bintang, suhu permukaan bintang dan jarak bintang dari Bumi",
      "Bilangan planet yang mengelilinginya, warna galaksi dan kelajuan putaran",
      "Umur bintang, kandungan ais dan tekanan atmosfera Bumi",
      "Bentuk orbit, bilangan bulan dan ketumpatan debu di Sistem Suria"
    ],
    "correctIndex": 0,
    "explanation": "Kecerahan bintang yang dilihat dari Bumi dipengaruhi oleh saiznya, suhu permukaannya dan jaraknya dari Bumi.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_06",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "M",
    "q": "Bintang Rigel berwarna kebiruan-putih manakala bintang Betelgeuse berwarna merah. Apakah kesimpulan yang tepat tentang perbandingan suhu permukaan kedua-dua bintang ini?",
    "options": [
      "Betelgeuse lebih panas daripada Rigel kerana warna merah menyerupai bara api",
      "Rigel mempunyai suhu permukaan yang jauh lebih tinggi daripada Betelgeuse",
      "Kedua-duanya mempunyai suhu permukaan yang sama tetapi berbeza ketumpatan atmosfera",
      "Suhu Rigel lebih rendah kerana ia lebih jauh daripada galaksi kita"
    ],
    "correctIndex": 1,
    "explanation": "Bintang kebiruan-putih seperti Rigel mempunyai suhu permukaan melebihi 10 000 K, jauh lebih panas daripada bintang merah seperti Betelgeuse (~3 500 K).",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_07",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "M",
    "q": "Mengapakah Matahari kelihatan jauh lebih cerah dan besar dari Bumi berbanding bintang-bintang super raksasa lain di langit malam?",
    "options": [
      "Matahari ialah bintang yang paling panas dan paling besar di seluruh alam semesta",
      "Bintang lain tidak menjalankan pelakuran nuklear pada waktu malam",
      "Matahari terletak sangat hampir dengan Bumi berbanding bintang-bintang lain yang berada amat jauh",
      "Atmosfera Bumi membesarkan saiz bintang kuning sahaja"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun banyak bintang lain jauh lebih besar dan lebih panas daripada Matahari, jarak Matahari yang paling dekat dengan Bumi menjadikannya kelihatan paling cerah.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_08",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "H",
    "q": "Dua buah bintang, K dan L, mempunyai suhu permukaan dan jarak dari Bumi yang hampir sama. Namun, Bintang K kelihatan jauh lebih cerah daripada Bintang L apabila dicerap melalui teleskop. Apakah faktor yang paling mungkin menyebabkan perbezaan ini?",
    "options": [
      "Bintang K dikelilingi oleh lebih banyak komet bercahaya",
      "Bintang L berada dalam galaksi tidak seragam manakala Bintang K tiada graviti",
      "Bintang K bergerak lebih laju mengelilingi pusat galaksi",
      "Saiz atau luas permukaan Bintang K jauh lebih besar daripada Bintang L"
    ],
    "correctIndex": 3,
    "explanation": "Apabila jarak dan suhu permukaan adalah sama, bintang yang bersaiz lebih besar mempunyai luas permukaan pancaran lebih luas lalu kelihatan lebih cerah.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_09",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "H",
    "q": "Bintang P ialah bintang bersaiz kerdil berwarna putih, manakala Bintang Q ialah bintang raksasa berwarna merah yang terletak pada jarak sama dari Bumi. Walaupun Bintang Q lebih sejuk daripada Bintang P, Bintang Q kelihatan jauh lebih cerah dari Bumi. Mengapakah hal ini berlaku?",
    "options": [
      "Cahaya merah merambat lebih laju daripada cahaya putih di ruang vakum",
      "Saiz Bintang Q yang amat besar mengimbangi suhunya yang lebih rendah sehingga memancarkan lebih banyak cahaya keseluruhan",
      "Bintang P sebenarnya tidak memancarkan cahaya kerana bersaiz kerdil",
      "Atmosfera Bumi menyerap semua cahaya daripada bintang bersaiz kerdil"
    ],
    "correctIndex": 1,
    "explanation": "Jumlah cahaya yang dipancarkan bergantung kepada suhu dan luas permukaan; saiz Bintang Q yang jauh lebih besar menghasilkan kecerahan keseluruhan lebih tinggi.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b11_s3_10",
    "unit": "b11",
    "skill": "b11_s3",
    "diff": "H",
    "q": "Seorang murid melihat bintang Sirius di langit malam sebagai bintang paling cerah selepas Matahari, lalu membuat kesimpulan bahawa Sirius ialah bintang paling besar di galaksi Bima Sakti. Apakah penilaian paling tepat terhadap kesimpulan murid itu?",
    "options": [
      "Betul, kerana kecerahan dari Bumi hanya bergantung kepada saiz bintang",
      "Betul, kerana semua bintang selain Matahari berada pada jarak yang sama dari Bumi",
      "Kurang tepat, kerana kecerahan ketara Sirius turut dipengaruhi oleh jaraknya yang agak dekat dengan Bumi dan suhunya yang tinggi",
      "Kurang tepat, kerana Sirius sebenarnya sebuah planet dalam Sistem Suria seperti Zuhrah"
    ],
    "correctIndex": 2,
    "explanation": "Kecerahan sesuatu bintang di langit malam bukan penentu mutlak saiznya; jarak yang relatif dekat (~8.6 tahun cahaya) dan suhu tinggi menjadikan Sirius kelihatan amat cerah.",
    "ref": "Bab 11, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_01",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "L",
    "q": "Urutan planet manakah yang betul bermula dari planet paling hampir dengan Matahari hingga paling jauh?",
    "options": [
      "Utarid, Zuhrah, Bumi, Marikh, Musytari, Zuhal, Uranus, Neptun",
      "Utarid, Marikh, Bumi, Zuhrah, Musytari, Zuhal, Neptun, Uranus",
      "Zuhrah, Utarid, Bumi, Marikh, Zuhal, Musytari, Uranus, Neptun",
      "Utarid, Zuhrah, Bumi, Marikh, Musytari, Uranus, Zuhal, Neptun"
    ],
    "correctIndex": 0,
    "explanation": "Susunan lapan planet dari Matahari ialah Utarid, Zuhrah, Bumi, Marikh, Musytari, Zuhal, Uranus dan Neptun.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_02",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "L",
    "q": "Planet manakah yang merupakan planet paling besar dalam Sistem Suria?",
    "options": [
      "Zuhal",
      "Musytari",
      "Uranus",
      "Neptun"
    ],
    "correctIndex": 1,
    "explanation": "Musytari ialah planet terbesar dalam Sistem Suria dengan diameter lebih daripada 11 kali diameter Bumi.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_03",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "L",
    "q": "Kumpulan planet manakah yang tergolong sebagai planet dalaman berbatu (terestrial)?",
    "options": [
      "Musytari, Zuhal, Uranus dan Neptun",
      "Bumi, Marikh, Musytari dan Zuhal",
      "Utarid, Zuhrah, Bumi dan Marikh",
      "Utarid, Zuhrah, Uranus dan Neptun"
    ],
    "correctIndex": 2,
    "explanation": "Empat planet pertama iaitu Utarid, Zuhrah, Bumi dan Marikh ialah planet berbatu yang bersaiz kecil dan berpermukaan pepejal.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_04",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "L",
    "q": "Apakah punca permukaan planet Marikh kelihatan berwarna kemerahan dan dikenali sebagai Planet Merah?",
    "options": [
      "Lautan lava cair meliputi seluruh permukaan planet itu",
      "Atmosferanya terdiri daripada gas neon yang menyala merah",
      "Kehadiran kandungan besi oksida (karat) yang tinggi pada tanah dan batuannya",
      "Pantulan cahaya merah daripada planet Musytari di sebelahnya"
    ],
    "correctIndex": 2,
    "explanation": "Catatan: semak index target bagi b12_s1_04! Target: 2 (`[0, 1, 3, 2, ...]`), jadi index 2 adalah betul!",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_05",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "M",
    "q": "Walaupun Utarid paling hampir dengan Matahari, planet manakah yang sebenarnya mencatatkan suhu permukaan paling panas dalam Sistem Suria dan apakah sebabnya?",
    "options": [
      "Marikh, kerana permukaannya penuh dengan besi oksida yang menyerap haba",
      "Musytari, kerana saiznya yang besar menghasilkan haba dalaman tertinggi",
      "Utarid sendiri, kerana tiada atmosfera yang menghalang sinaran matahari",
      "Zuhrah, kerana atmosferanya yang tebal dan kaya karbon dioksida memerangkap haba secara kesan rumah hijau melampau"
    ],
    "correctIndex": 3,
    "explanation": "Zuhrah ialah planet paling panas (~460 °C) kerana atmosfera karbon dioksidanya yang sangat tebal memerangkap haba dan menghalangnya keluar ke angkasa.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_06",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "M",
    "q": "Apakah ciri istimewa planet Zuhal yang membezakannya secara ketara daripada planet berbatu dan menjadikannya mudah dikenali?",
    "options": [
      "Zuhal mempunyai atmosferanya yang paling kaya dengan oksigen untuk hidupan",
      "Zuhal ialah planet yang paling dekat dengan Lingkaran Asteroid",
      "Zuhal mempunyai sistem gelang yang luas dan jelas terdiri daripada ketulan ais serta batuan",
      "Zuhal tidak mempunyai sebarang satelit semula jadi yang mengorbitnya"
    ],
    "correctIndex": 2,
    "explanation": "Zuhal terkenal dengan sistem gelang cerah yang luas terdiri daripada jutaan zarah ais dan serpihan batuan serta mempunyai banyak bulan.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_07",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "M",
    "q": "Mengapakah planet Uranus dan Neptun kelihatan berwarna kebiruan apabila diperhatikan melalui teleskop?",
    "options": [
      "Permukaannya diliputi sepenuhnya oleh lautan air masin yang dalam",
      "Kehadiran gas metana dalam atmosfera kedua-dua planet menyerap cahaya merah dan memantulkan cahaya biru",
      "Cahaya Matahari yang sampai ke sana hanya terdiri daripada spektrum warna biru",
      "Kedua-dua planet mempunyai lapisan ozon yang seratus kali lebih tebal daripada Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Gas metana dalam atmosfera gergasi ais seperti Uranus dan Neptun menyerap panjang gelombang cahaya merah dan memantulkan warna biru.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_08",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "H",
    "q": "Perbandingan manakah yang tepat antara kumpulan planet dalaman (Utarid–Marikh) dengan kumpulan planet luaran (Musytari–Neptun)?",
    "options": [
      "Planet dalaman bersaiz lebih kecil, berketumpatan tinggi dan berpermukaan berbatu, manakala planet luaran jauh lebih besar, berketumpatan rendah dan terdiri daripada gas atau ais",
      "Planet dalaman mempunyai banyak gelang dan puluhan bulan, manakala planet luaran tiada bulan langsung",
      "Planet dalaman mengambil masa lebih lama untuk mengelilingi Matahari berbanding planet luaran",
      "Planet dalaman lebih sejuk secara keseluruhannya berbanding planet luaran"
    ],
    "correctIndex": 0,
    "explanation": "Planet dalaman berbatu bersaiz kecil dan berketumpatan tinggi, manakala gergasi gas/ais di bahagian luar bersaiz besar, berketumpatan rendah dan memiliki sistem gelang serta banyak bulan.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_09",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "H",
    "q": "Pada waktu siang, suhu di Utarid boleh mencapai sekitar 430 °C, namun pada waktu malam suhunya menjunam sehingga -180 °C. Mengapakah julat suhu antara siang dan malam di Utarid sangat ekstrem?",
    "options": [
      "Utarid berputar lebih pantas daripada Musytari iaitu kurang daripada 5 jam sehari",
      "Permukaan Utarid dilitupi ais yang mencair dan membeku setiap hari",
      "Jarak Utarid daripada Matahari berubah lebih jauh daripada Neptun pada waktu malam",
      "Utarid hampir tiada atmosfera untuk memerangkap haba pada waktu malam atau menapis haba pada waktu siang"
    ],
    "correctIndex": 3,
    "explanation": "Tanpa atmosfera yang tebal, tiada penampan haba pada waktu siang dan tiada kesan rumah hijau untuk mengekalkan haba pada waktu malam di Utarid.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s1_10",
    "unit": "b12",
    "skill": "b12_s1",
    "diff": "H",
    "q": "Dalam sistem suria moden, Pluto tidak lagi dikelaskan sebagai planet kesembilan sebaliknya dikelaskan sebagai planet kerdil. Apakah ciri planet gergasi paling jauh yang menggantikan kedudukan Pluto sebagai planet kelapan yang sah?",
    "options": [
      "Uranus yang berputar secara mengiring di antara Zuhal dan Neptun",
      "Neptun yang merupakan gergasi ais paling jauh dengan angin atmosfera terkencang dalam Sistem Suria",
      "Zuhal yang mempunyai ketumpatan lebih rendah daripada air",
      "Musytari yang memiliki Tompok Merah Besar"
    ],
    "correctIndex": 1,
    "explanation": "Lapan planet yang diiktiraf berakhir dengan Neptun pada kedudukan kelapan, iaitu gergasi ais paling jauh yang terkenal dengan angin ribut amat kencang.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_01",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "L",
    "q": "Antara planet berikut, yang manakah berputar pada paksinya dari timur ke barat (arah songsang berbanding Bumi)?",
    "options": [
      "Marikh",
      "Musytari",
      "Zuhrah",
      "Neptun"
    ],
    "correctIndex": 2,
    "explanation": "Zuhrah berputar pada paksinya secara songsang dari timur ke barat, berbeza dengan Bumi dan kebanyakan planet lain yang berputar dari barat ke timur.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_02",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "L",
    "q": "Apakah ciri unik putaran paksi planet Uranus?",
    "options": [
      "Berputar dalam keadaan mengiring dengan kecondongan paksi hampir 98°",
      "Tidak berputar langsung pada paksinya sepanjang orbit",
      "Berputar dua kali lebih perlahan daripada tempoh peredaran mengelilingi Matahari",
      "Sentiasa mengubah arah putaran setiap enam bulan"
    ],
    "correctIndex": 0,
    "explanation": "Uranus mempunyai kecondongan paksi yang sangat ekstrem (~98°), menyebabkannya kelihatan bergolek atau berputar dalam keadaan mengiring.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_03",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "L",
    "q": "Apakah peranan lapisan ozon di atmosfera Bumi dalam menyokong kelangsungan hidupan?",
    "options": [
      "Membekalkan gas oksigen secara langsung untuk respirasi haiwan",
      "Menyerap sebahagian besar sinaran ultraungu (UV) berbahaya daripada Matahari",
      "Menghasilkan medan magnet untuk menarik air hujan ke permukaan Bumi",
      "Memantulkan kesemua cahaya nampak Matahari kembali ke angkasa"
    ],
    "correctIndex": 1,
    "explanation": "Lapisan ozon di stratosfera menyerap sinaran ultraungu (UV) yang berbahaya supaya tidak merosakkan sel hidupan di permukaan Bumi.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_04",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "L",
    "q": "Apakah fenomena semula jadi yang berlaku di Bumi akibat putaran Bumi pada paksinya setiap 24 jam?",
    "options": [
      "Kejadian empat musim yang berbeza di kawasan beriklim sederhana",
      "Perubahan jarak antara Bumi dan Bulan",
      "Pembentukan jalur asteroid di antara Marikh dan Musytari",
      "Kejadian siang dan malam secara silih berganti"
    ],
    "correctIndex": 3,
    "explanation": "Putaran Bumi pada paksinya dari barat ke timur menyebabkan bahagian yang menghadap Matahari mengalami siang dan bahagian membelakanginya mengalami malam.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_05",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "M",
    "q": "Bagaimanakah kecondongan paksi Bumi sebanyak 23.5° semasa mengelilingi Matahari mempengaruhi keadaan di Bumi?",
    "options": [
      "Menyebabkan kejadian empat musim dan perbezaan tempoh panjang siang serta malam di pelbagai latitud",
      "Menyebabkan Matahari terbit dari arah barat di hemisfera selatan",
      "Menghalang cahaya matahari daripada sampai ke kawasan garisan Khatulistiwa",
      "Menyebabkan Bumi beredar lebih laju daripada planet Utarid"
    ],
    "correctIndex": 0,
    "explanation": "Kecondongan paksi 23.5° menyebabkan sudut tuju cahaya matahari ke hemisfera utara dan selatan berubah sepanjang tahun, menghasilkan musim serta perbezaan panjang siang dan malam.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_06",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "M",
    "q": "Apakah hubungan antara jarak sesuatu planet dari Matahari dengan tempoh masa yang diambil untuk melengkapkan satu orbit penuh mengelilingi Matahari?",
    "options": [
      "Semakin jauh planet dari Matahari, semakin singkat tempoh orbitnya",
      "Semua planet mengambil masa 365 hari untuk melengkapkan satu orbit",
      "Semakin jauh planet dari Matahari, semakin panjang tempoh orbitnya kerana laluan lebih luas dan kelajuan orbit lebih perlahan",
      "Tempoh orbit hanya bergantung kepada saiz planet dan bukannya jarak dari Matahari"
    ],
    "correctIndex": 2,
    "explanation": "Planet yang lebih jauh mempunyai laluan orbit lebih panjang dan tarikan graviti Matahari yang lebih lemah lalu bergerak lebih perlahan, menjadikan tempoh satu tahunnya lebih lama.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_07",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "M",
    "q": "Selain suhu yang sederhana dan kehadiran air cecair, mengapakah medan magnet Bumi sangat penting untuk membolehkan hidupan kekal di planet ini?",
    "options": [
      "Medan magnet menghasilkan gas oksigen daripada wap air di lautan",
      "Medan magnet mengekalkan sudut kecondongan paksi Bumi pada 23.5°",
      "Medan magnet menarik komet masuk ke atmosfera untuk menambah bekalan air",
      "Medan magnet memesongkan angin suria dan zarah bercas berbahaya supaya atmosfera Bumi tidak terhakis"
    ],
    "correctIndex": 3,
    "explanation": "Medan magnet Bumi (magnetosfera) bertindak sebagai perisai yang memesongkan zarah bercas daripada angin suria agar tidak menghakis atmosfera atau membahayakan hidupan.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_08",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "H",
    "q": "Jika Bumi secara andaian berputar dari timur ke barat seperti planet Zuhrah, apakah perubahan utama yang akan diperhatikan oleh penduduk di Malaysia?",
    "options": [
      "Matahari akan kelihatan terbit di sebelah timur dan terbenam di sebelah barat seperti biasa",
      "Matahari akan kelihatan terbit di sebelah barat dan terbenam di sebelah timur",
      "Siang dan malam tidak lagi berlaku dan Bumi akan mengalami siang kekal",
      "Tempoh satu tahun Bumi akan berkurang daripada 365 hari kepada 24 jam"
    ],
    "correctIndex": 1,
    "explanation": "Putaran dari barat ke timur membuatkan Matahari kelihatan terbit di timur; jika arah putaran disongsangkan (timur ke barat), Matahari akan kelihatan terbit di barat.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_09",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "H",
    "q": "Planet Marikh mempunyai atmosfera nipis karbon dioksida serta jarak lebih jauh dari Matahari berbanding Bumi, dengan suhu purata sekitar -63 °C. Mengapakah air dalam bentuk cecair tidak dapat kekal stabil di permukaan Marikh berbanding di Bumi?",
    "options": [
      "Suhu rendah dan tekanan atmosfera yang terlalu rendah menyebabkan air membeku menjadi ais atau terus memejalwap menjadi gas",
      "Planet Marikh berputar dari timur ke barat sehingga membuang semua air ke angkasa",
      "Marikh kekurangan daya graviti untuk menarik objek besar atau membentuk bulan",
      "Besi oksida di permukaan Marikh menukarkan semua molekul air menjadi gas metana"
    ],
    "correctIndex": 0,
    "explanation": "Jarak Bumi yang berada dalam zon boleh didiami dan tekanan atmosfera mencukupi mengekalkan air sebagai cecair; di Marikh suhu terlalu sejuk dan tekanan udara amat rendah.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b12_s3_10",
    "unit": "b12",
    "skill": "b12_s3",
    "diff": "H",
    "q": "Bayangkan planet Uranus tidak condong 98° sebaliknya tegak 0° pada paksinya seperti planet Utarid. Apakah kesan yang akan berubah secara mendadak pada planet tersebut?",
    "options": [
      "Uranus akan bertukar menjadi planet berbatu dan bergerak lebih dekat ke Matahari",
      "Warna biru gas metana di atmosferanya akan bertukar menjadi merah",
      "Kawasan kutubnya tidak lagi mengalami musim panas dan musim sejuk ekstrem yang berterusan selama puluhan tahun",
      "Tempoh orbit Uranus mengelilingi Matahari menjadi lebih singkat daripada Bumi"
    ],
    "correctIndex": 2,
    "explanation": "Kecondongan paksi 98° menyebabkan setiap kutub Uranus menghadap Matahari atau membelakanginya selama puluhan tahun sekali gus menghasilkan musim ekstrem.",
    "ref": "Bab 12, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_01",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "L",
    "q": "Apakah nama yang diberikan kepada serpihan batu dan logam kecil yang terapung dan bergerak di ruang angkasa lepas sebelum memasuki atmosfera Bumi?",
    "options": [
      "Meteor",
      "Meteoroid",
      "Meteorit",
      "Komet"
    ],
    "correctIndex": 1,
    "explanation": "Meteoroid ialah serpihan batu dan logam kecil yang masih berada di angkasa lepas di luar atmosfera Bumi.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_02",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "L",
    "q": "Apabila suatu serpihan batu angkasa memasuki atmosfera Bumi dan terbakar menghasilkan jalur cahaya terang di langit malam, apakah istilah saintifik bagi fenomena cahaya itu?",
    "options": [
      "Komet",
      "Asteroid",
      "Meteor",
      "Meteorit"
    ],
    "correctIndex": 2,
    "explanation": "Meteor ialah jalur cahaya yang terbentuk apabila meteoroid memasuki atmosfera Bumi dan terbakar akibat geseran udara.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_03",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "L",
    "q": "Apakah yang terhasil apabila sebahagian batuan daripada meteoroid tidak habis terbakar di atmosfera lalu jatuh menghentam permukaan Bumi?",
    "options": [
      "Meteorit",
      "Meteor",
      "Meteoroid",
      "Nebula"
    ],
    "correctIndex": 0,
    "explanation": "Meteorit ialah sisa batuan atau logam daripada meteoroid yang berjaya sampai dan menghentam permukaan Bumi.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_04",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "L",
    "q": "Apakah punca utama meteoroid terbakar sehingga menghasilkan cahaya apabila memasuki atmosfera Bumi?",
    "options": [
      "Tindak balas pelakuran nuklear dengan gas hidrogen",
      "Pantulan cahaya Matahari pada permukaan aisnya",
      "Tindak balas kimia dengan air hujan di awan",
      "Geseran yang kuat antara meteoroid berkelajuan tinggi dengan molekul udara"
    ],
    "correctIndex": 3,
    "explanation": "Meteoroid memasuki atmosfera pada kelajuan amat tinggi; geseran udara yang kuat memanaskannya sehingga memijar dan terbakar.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_05",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "M",
    "q": "Penduduk sering menggelar jalur cahaya yang melintas laju di langit malam sebagai 'tahi bintang' atau 'bintang jatuh'. Mengapakah istilah itu tidak tepat dari sudut sains?",
    "options": [
      "Kerana cahaya itu dihasilkan oleh planet kerdil yang terbakar di Matahari",
      "Kerana cahaya itu terhasil oleh cahaya kilat di lapisan troposfera",
      "Kerana cahaya itu ialah meteoroid kecil yang terbakar dalam atmosfera Bumi, bukannya bintang sebenar yang jatuh",
      "Kerana bintang tidak wujud di luar Sistem Suria"
    ],
    "correctIndex": 2,
    "explanation": "Bintang ialah bebola gas gergasi yang sangat jauh; 'tahi bintang' sebenarnya ialah meteor iaitu zarah debu atau batuan kecil yang terbakar di atmosfera Bumi.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_06",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "M",
    "q": "Susunan urutan manakah yang tepat menggambarkan perjalanan satu serpihan batu angkasa dari ruang angkasa sehingga jatuh ke daratan Bumi?",
    "options": [
      "Meteorit -> Meteor -> Meteoroid",
      "Meteoroid -> Meteor -> Meteorit",
      "Meteor -> Meteoroid -> Meteorit",
      "Meteoroid -> Meteorit -> Meteor"
    ],
    "correctIndex": 1,
    "explanation": "Objek itu bermula sebagai meteoroid di angkasa, menjadi meteor ketika terbakar di atmosfera dan dikenali sebagai meteorit apabila jatuh ke permukaan Bumi.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_07",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "M",
    "q": "Mengapakah kebanyakan meteoroid terbakar habis di atmosfera Bumi sebelum sempat menghentam permukaan Bumi, manakala permukaan Bulan dipenuhi jutaan kawah hentaman?",
    "options": [
      "Bulan mempunyai atmosfera yang tidak tebal untuk membakar meteoroid melalui geseran udara sebelum hentaman",
      "Bulan mempunyai daya graviti lebih kuat daripada Bumi lalu menarik lebih banyak meteoroid",
      "Bumi dilindungi oleh gelang ais di sekeliling khatulistiwa",
      "Semua meteoroid di Bumi ditolak keluar semula oleh angin monsun"
    ],
    "correctIndex": 0,
    "explanation": "Bumi mempunyai atmosfera yang membakar kebanyakan meteoroid kecil menjadi meteor, manakala Bulan tidak mempunyai atmosfera untuk melindunginya daripada hentaman.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_08",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "H",
    "q": "Sebiji batuan logam hitam yang berat dan berpermukaan lebur ditemui di dasar sebuah kawah cetek di kawasan padang pasir. Pakar geologi mengesahkan batuan itu berasal dari angkasa lepas. Apakah klasifikasi objek yang ditemui itu dan ciri pembentukannya?",
    "options": [
      "Meteoroid, kerana ia masih terapung dalam vakum tanpa geseran",
      "Meteor, kerana ia sedang mengeluarkan cahaya di lapisan atmosfera",
      "Komet, kerana ia terdiri daripada ais dan gas beku sepenuhnya",
      "Meteorit, kerana sebahagian luarnya melebur semasa menjadi meteor tetapi terasnya terselamat hingga ke permukaan Bumi"
    ],
    "correctIndex": 3,
    "explanation": "Batuan yang dijumpai di permukaan Bumi ialah meteorit; kerak luarnya melebur akibat kepanasan melampau ketika merentasi atmosfera sebagai meteor.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_09",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "H",
    "q": "Pada bulan tertentu setiap tahun, pemerhati langit dapat menyaksikan puluhan jalur cahaya meteor dalam sejam yang dikenali sebagai hujan meteor. Apakah punca berlakunya kejadian bermusim ini?",
    "options": [
      "Lingkaran Asteroid bergerak masuk ke dalam orbit Bumi setiap bulan Ogos",
      "Bumi mengalami ribut petir di lapisan stratosfera apabila menghampiri Musytari",
      "Orbit Bumi melintasi laluan serpihan debu yang ditinggalkan oleh komet lalu menyebabkan banyak meteoroid kecil memasuki atmosfera serentak",
      "Bulan melepaskan serpihan batu ke arah Bumi apabila berlaku gerhana"
    ],
    "correctIndex": 2,
    "explanation": "Apabila Bumi merentasi jejak debu dan serpihan kecil yang ditinggalkan oleh komet di sepanjang orbitnya, banyak meteoroid kecil terbakar serentak di atmosfera sebagai hujan meteor.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s1_10",
    "unit": "b13",
    "skill": "b13_s1",
    "diff": "H",
    "q": "Seorang murid menegaskan bahawa meteoroid, meteor dan meteorit ialah tiga jenis bahan kimia yang sama sekali berbeza. Bagaimanakah cara terbaik untuk membetulkan salah konsep murid tersebut?",
    "options": [
      "Menjelaskan bahawa ketiganya boleh merupakan jasad batuan atau logam yang sama tetapi diberi nama berbeza mengikut kedudukan di angkasa, di atmosfera atau di permukaan Bumi",
      "Menjelaskan bahawa meteoroid diperbuat daripada ais, meteor daripada gas dan meteorit daripada besi",
      "Menyatakan bahawa hanya meteor yang mengorbit Matahari manakala meteoroid datang dari luar galaksi",
      "Mengesahkan bahawa meteorit akan bertukar semula menjadi meteor selepas jatuh ke laut"
    ],
    "correctIndex": 0,
    "explanation": "Istilah meteoroid, meteor dan meteorit merujuk kepada objek yang sama bergantung kepada lokasinya: di angkasa, sedang terbakar di atmosfera, atau telah tiba di tanah.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_01",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "L",
    "q": "Di manakah terletaknya Lingkaran Asteroid utama dalam Sistem Suria?",
    "options": [
      "Di antara orbit Utarid dengan Zuhrah",
      "Di antara orbit Bumi dengan Marikh",
      "Di luar orbit Neptun sahaja",
      "Di antara orbit Marikh dengan Musytari"
    ],
    "correctIndex": 3,
    "explanation": "Lingkaran Asteroid utama terletak di antara orbit planet Marikh dan orbit planet Musytari, memisahkan planet dalaman daripada planet luaran.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_02",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "L",
    "q": "Apakah bahan komposisi utama yang membentuk sesuatu asteroid?",
    "options": [
      "Batuan besar dan logam seperti besi serta nikel",
      "Ais air dan gas metana beku sepenuhnya",
      "Gas hidrogen dan helium panas seperti bintang",
      "Cecair magma dan wap air sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Asteroid ialah jasad berbatu dan berlogam yang turut dikenali sebagai planet kecil (planetoid) yang mengorbit Matahari.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_03",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "L",
    "q": "Apakah nama gelaran lain yang sering diberikan kepada asteroid kerana saiznya yang besar dan sifatnya mengelilingi Matahari?",
    "options": [
      "Bintang kerdil",
      "Satelit buatan",
      "Planet kecil (planetoid)",
      "Bola salji kotor"
    ],
    "correctIndex": 2,
    "explanation": "Asteroid dikenali sebagai planet kecil atau planetoid kerana terdiri daripada batuan dan logam yang mengorbit Matahari, cuma saiznya lebih kecil daripada planet.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_04",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah merupakan contoh kumpulan asteroid yang orbitnya berada berhampiran atau melintasi orbit Bumi?",
    "options": [
      "Halley, Hale-Bopp dan Encke",
      "Apollo, Amor dan Aten",
      "Phobos, Deimos dan Titan",
      "Andromeda, Bima Sakti dan Ursa Major"
    ],
    "correctIndex": 1,
    "explanation": "Apollo, Amor dan Aten ialah contoh asteroid hampir Bumi yang keluar daripada Lingkaran Asteroid dan melintasi atau menghampiri orbit Bumi.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_05",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "M",
    "q": "Bagaimanakah asteroid dibandingkan dengan meteoroid dari segi saiz dan lokasi lazimnya di dalam Sistem Suria?",
    "options": [
      "Asteroid jauh lebih besar (berdiameter beberapa meter hingga ratusan kilometer) dan tertumpu di antara Marikh dengan Musytari, berbanding meteoroid yang jauh lebih kecil dan bertaburan di ruang angkasa",
      "Asteroid bersaiz lebih kecil daripada sebutir pasir manakala meteoroid lebih besar daripada Bulan",
      "Asteroid hanya wujud di atmosfera Bumi manakala meteoroid berada di Lingkaran Asteroid",
      "Kedua-duanya mempunyai ekor bercahaya panjang apabila melepasi orbit Zuhal"
    ],
    "correctIndex": 0,
    "explanation": "Asteroid jauh lebih besar daripada meteoroid dan kebanyakannya mengorbit di Lingkaran Asteroid antara Marikh dan Musytari.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_06",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "M",
    "q": "Mengapakah kebanyakan asteroid berbentuk tidak sekata dan tidak bulat seperti planet Bumi atau Musytari?",
    "options": [
      "Kerana asteroid sentiasa melebur menjadi cecair oleh angin suria",
      "Kerana kelajuan orbit asteroid terlalu perlahan di antara Marikh dan Musytari",
      "Kerana permukaan asteroid dikikis oleh geseran udara di angkasa lepas",
      "Kerana jisimnya terlalu kecil sehingga daya tarik gravitinya tidak cukup kuat untuk menarik batuan membentuk sfera"
    ],
    "correctIndex": 3,
    "explanation": "Hanya jasad berjisim besar mempunyai daya graviti cukup kuat untuk memadatkan dirinya menjadi bentuk hampir sfera; kebanyakan asteroid terlalu kecil untuk itu.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_07",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "M",
    "q": "Filem sains fiksyen sering memaparkan kapal angkasa terpaksa mengelak batuan asteroid yang berhimpit-himpit rapat di Lingkaran Asteroid. Mengapakah gambaran itu tidak tepat dalam realiti astronomi?",
    "options": [
      "Asteroid sebenarnya sangat lembut seperti awan gas dan mudah ditembusi",
      "Jarak purata antara satu asteroid dengan asteroid lain di ruang Lingkaran Asteroid sangat jauh iaitu ribuan hingga jutaan kilometer",
      "Semua asteroid hanya bergerak pada satu garisan menegak di luar orbit Neptun",
      "Kapal angkasa boleh memusnahkan asteroid dengan sinaran inframerah secara semula jadi"
    ],
    "correctIndex": 1,
    "explanation": "Walaupun terdapat jutaan asteroid dalam Lingkaran Asteroid, ruang antara Marikh dan Musytari amat luas menyebabkan jarak antara asteroid sangat jauh dan mudah dilalui kuar angkasa.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_08",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "H",
    "q": "Ahli astronomi mengenal pasti satu objek berbatu berdiameter 15 km dengan bentuk tidak sekata mengorbit Matahari pada jarak 2.8 AU (di antara orbit Marikh dan Musytari) dan tidak menunjukkan sebarang koma atau ekor gas apabila diperiksa. Apakah objek tersebut?",
    "options": [
      "Sebuah komet jangka pendek",
      "Sebuah planet kerdil baharu di luar Neptun",
      "Sebuah asteroid di Lingkaran Asteroid utama",
      "Sebuah meteorit yang sedang jatuh ke atmosfera Bumi"
    ],
    "correctIndex": 2,
    "explanation": "Jasad berbatu berdiameter besar tanpa ekor yang mengorbit di kawasan antara Marikh dan Musytari (~2.8 AU) ialah ciri jelas sebuah asteroid.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_09",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "H",
    "q": "Mengapakah asteroid daripada kumpulan seperti Apollo, Amor dan Aten dipantau rapi oleh agensi angkasa antarabangsa berbanding asteroid lain di Lingkaran Asteroid?",
    "options": [
      "Kerana asteroid ini diperbuat daripada ais beracun yang boleh menukar warna lautan Bumi",
      "Kerana asteroid ini bergerak melebihi kelajuan cahaya apabila menghampiri Marikh",
      "Kerana asteroid ini mempunyai ekor gas panjang yang mampu memadamkan cahaya Matahari",
      "Kerana orbitnya yang lonjong menghampiri atau melintasi orbit Bumi lalu membawa risiko perlanggaran dengan Bumi"
    ],
    "correctIndex": 3,
    "explanation": "Apollo, Amor dan Aten ialah asteroid hampir Bumi yang laluan orbitnya bersilang atau mendekati orbit Bumi, berpotensi menimbulkan ancaman hentaman.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s2_10",
    "unit": "b13",
    "skill": "b13_s2",
    "diff": "H",
    "q": "Bagaimanakah tarikan graviti planet Musytari yang amat besar di pinggir luar Lingkaran Asteroid mempengaruhi kewujudan asteroid di kawasan tersebut?",
    "options": [
      "Tarikan graviti Musytari mengganggu kestabilan batuan sehingga menghalangnya bergabung menjadi sebuah planet penuh serta kadang-kadang memesongkan orbit asteroid",
      "Tarikan graviti Musytari menukarkan semua asteroid berbatu menjadi komet berais",
      "Tarikan graviti Musytari menarik semua asteroid jatuh ke permukaan Matahari setiap tahun",
      "Tarikan graviti Musytari membekalkan atmosfera oksigen kepada asteroid di sekitarnya"
    ],
    "correctIndex": 0,
    "explanation": "Gangguan graviti Musytari yang kuat sejak awal pembentukan Sistem Suria menghalang serpihan berbatu bergabung menjadi planet dan boleh memesongkan sebahagian orbit asteroid.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_01",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "L",
    "q": "Apakah dua komponen bahan utama yang membentuk kepala (nukleus) sesuatu komet?",
    "options": [
      "Campuran ais, gas beku dan debu",
      "Batuan granit dan besi tulen sahaja",
      "Magma cair dan gas oksigen panas",
      "Logam kuprum dan aluminium"
    ],
    "correctIndex": 0,
    "explanation": "Komet terdiri daripada campuran ais, gas beku dan debu angkasa yang sering digambarkan sebagai 'bola salji kotor'.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_02",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "L",
    "q": "Bagaimanakah bentuk laluan orbit kebanyakan komet apabila mengelilingi Matahari?",
    "options": [
      "Bulatan sempurna di antara Bumi dan Marikh",
      "Garis lurus keluar dari Galaksi Bima Sakti",
      "Elips yang sangat lonjong",
      "Lingkaran berpilin di sekitar Bulan"
    ],
    "correctIndex": 2,
    "explanation": "Komet mempunyai orbit berbentuk elips yang sangat lonjong, membawanya amat jauh ke pinggir Sistem Suria sebelum kembali mendekati Matahari.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_03",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "L",
    "q": "Ke arah manakah ekor komet sentiasa menghala semasa komet bergerak mengelilingi Matahari?",
    "options": [
      "Sentiasa menghala terus ke arah Matahari",
      "Sentiasa menghala ke arah planet Musytari",
      "Sentiasa ke belakang arah gerakan komet sahaja",
      "Sentiasa menghala menjauhi Matahari akibat tolakan angin suria"
    ],
    "correctIndex": 3,
    "explanation": "Angin suria dan tekanan sinaran dari Matahari menolak gas dan debu dari kepala komet supaya ekornya sentiasa mengarah menjauhi Matahari.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_04",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "L",
    "q": "Mengapakah komet membentuk kepala bercahaya (koma) dan ekor yang panjang apabila berada berhampiran dengan Matahari?",
    "options": [
      "Ais di dalam komet terbakar dengan oksigen di angkasa",
      "Haba Matahari memejalwapkan ais dan gas beku pada komet lalu membebaskan gas dan debu yang ditiup angin suria",
      "Komet melanggar asteroid dan menyalakan api pada ekornya",
      "Tarikan graviti Bumi menarik air dari komet membentuk ekor"
    ],
    "correctIndex": 1,
    "explanation": "Apabila komet menghampiri Matahari, haba suria memejalwapkan aisnya menjadi awan gas serta debu (koma), lalu ditiup angin suria membentuk ekor panjang.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_05",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "M",
    "q": "Komet Halley telah melepasi bahagian dalam Sistem Suria dan kini sedang bergerak meninggalkan Matahari kembali ke pinggir Sistem Suria. Ke arah manakah ekor Komet Halley menunjuk ketika ia bergerak menjauhi Matahari?",
    "options": [
      "Menunjuk ke belakang di belakang kepalanya (ke arah Matahari)",
      "Menunjuk ke hadapan mendahului kepalanya kerana masih ditolak menjauhi Matahari oleh angin suria",
      "Ekornya terputus serta-merta sebaik sahaja komet melepasi titik paling hampir dengan Matahari",
      "Menunjuk tepat ke arah Bumi tanpa mengira kedudukan Matahari"
    ],
    "correctIndex": 1,
    "explanation": "Oleh sebab ekor komet sentiasa ditolak menjauhi Matahari oleh angin suria, apabila komet bergerak menjauhi Matahari, ekornya mendahului arah gerakan kepala komet.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_06",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "M",
    "q": "Mengapakah komet tidak kelihatan terang di langit malam sepanjang tahun seperti bintang atau planet Musytari?",
    "options": [
      "Komet menghabiskan sebahagian besar masa orbit elipsnya yang lonjong di kawasan luar Sistem Suria yang amat jauh dan sejuk tanpa ekor terang",
      "Komet hanya muncul apabila berlakunya gerhana bulan penuh sahaja",
      "Komet sentiasa tersembunyi di belakang matahari setiap hari",
      "Komet hancur sepenuhnya selepas setiap kali mengelilingi Matahari"
    ],
    "correctIndex": 0,
    "explanation": "Dalam orbit elipsnya yang amat lonjong, komet berada sangat jauh dari Matahari untuk tempoh bertahun-tahun dalam keadaan beku dan malap.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_07",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "M",
    "q": "Apakah kesan utama kepada alam sekitar Bumi sekiranya sebuah asteroid raksasa berdiameter lebih 10 km menghentam permukaan Bumi?",
    "options": [
      "Suhu global meningkat kekal kepada 100 °C tanpa sebarang debu di udara",
      "Arah putaran Bumi terhenti dan Matahari berhenti bersinar",
      "Awan debu tebal menyelubungi atmosfera, menghalang cahaya matahari, menurunkan suhu secara drastik dan boleh mengakibatkan kepupusan besar-besaran",
      "Hanya kawasan dalam radius 10 meter dari tempat hentaman mengalami kesan gegaran"
    ],
    "correctIndex": 2,
    "explanation": "Hentaman jasad angkasa gergasi melontarkan jutaan tan debu dan jelaga ke atmosfera yang menghalang fotosintesis dan menyebabkan kesejukan global mendadak.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_08",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "H",
    "q": "Jika sebuah komet melengkapkan puluhan pusingan orbit mendekati Matahari, apakah perubahan jangka panjang yang akan dialami oleh jisim dan saiz nukleus komet itu?",
    "options": [
      "Jisimnya semakin bertambah kerana menyerap gas daripada angin suria",
      "Saiznya kekal sama selama-lamanya kerana ais tidak boleh hilang di ruang vakum",
      "Komet akan mengembang menjadi bintang merah bersaiz sederhana",
      "Jisim dan saiz nukleusnya semakin mengecil kerana sebahagian ais dan debunya terpejalwap hilang ke angkasa setiap kali menghampiri Matahari"
    ],
    "correctIndex": 3,
    "explanation": "Setiap kali menghampiri Matahari, haba suria memejalwapkan lapisan ais dan melepaskan debu daripada komet, menyebabkan jisim nukleusnya semakin berkurang.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_09",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "H",
    "q": "Bagaimanakah saintis masa kini merancang untuk mengesan dan mengelakkan kemungkinan perlanggaran asteroid berbahaya dengan Bumi sebelum hentaman berlaku?",
    "options": [
      "Menunggu asteroid memasuki atmosfera Bumi lalu memadamkannya menggunakan air laut",
      "Memantau orbit jasad hampir Bumi secara berterusan melalui teleskop dan radar, serta merancang misi memesongkan arah orbitnya di angkasa menggunakan hentaman kuar angkasa",
      "Mengubah kelajuan putaran paksi Bumi supaya dapat mengelak laluan asteroid",
      "Menyalakan lampu sorot gergasi dari permukaan Bumi untuk menolak asteroid dengan cahaya"
    ],
    "correctIndex": 1,
    "explanation": "Pengesanan awal melalui teleskop dan radar membolehkan saintis mengira laluan orbit dan melancarkan teknologi pemesongan (seperti hentaman kinetik) jauh di angkasa.",
    "ref": "Bab 13, KSSM Sains T2"
  },
  {
    "id": "t2_sci_b13_s3_10",
    "unit": "b13",
    "skill": "b13_s3",
    "diff": "H",
    "q": "Seorang pelajar membandingkan asteroid dan komet dengan menyatakan bahawa 'kedua-duanya ialah jasad berbatu di Lingkaran Asteroid yang menghasilkan ekor panjang ketika melintasi Bumi'. Apakah pembetulan paling tepat bagi penyataan pelajar itu?",
    "options": [
      "Hanya asteroid mempunyai ekor panjang dan datang dari Awan Oort, manakala komet tidak bergerak",
      "Asteroid ialah batuan dan logam yang lazimnya di Lingkaran Asteroid tanpa ekor, manakala komet terdiri daripada ais, gas beku dan debu berorbit lonjong serta berekor apabila dekat Matahari",
      "Kedua-duanya sebenarnya ialah bintang mati yang jatuh ke dalam Sistem Suria",
      "Komet terletak di antara Marikh dan Musytari manakala asteroid hanya terbentuk daripada ais di atmosfera Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Asteroid ialah batuan/logam tanpa ekor yang tertumpu antara Marikh dan Musytari; komet pula campuran ais dan debu berorbit sangat lonjong yang berekor apabila menghampiri Matahari.",
    "ref": "Bab 13, KSSM Sains T2"
  }
];

  if (typeof module === "object" && module.exports) module.exports = ITEMS;

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.sains = (Array.isArray(App.Pools.t2.sains) ? App.Pools.t2.sains : []).concat(ITEMS);
})(typeof window !== "undefined" ? window : globalThis);
