/**
 * Tingkatan 2 Geografi (KSSM) static skill-tagged MCQ pool.
 * 300 items (30 skills x 10 items) aligned with js/data/curriculum/t2_geografi.js.
 * Gate 1 schema checked; Gate 2 independent blind solve (gemini-4-neon, 300/300 exact agree, 0 flags, 28/Nov/2026).
 */
(function (global) {
  "use strict";

  const ITEMS = [
  {
    "id": "t2_geo_b1_s1_01",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Apakah maksud skala pada sebuah peta?",
    "options": [
      "Arah mata angin yang ditunjukkan oleh anak panah utara pada peta",
      "Bilangan simbol yang digunakan dalam petunjuk peta",
      "Nisbah antara jarak yang diukur pada peta dengan jarak sebenar di permukaan bumi",
      "Beza ketinggian antara dua tempat yang ditandakan pada peta"
    ],
    "correctIndex": 2,
    "explanation": "Skala ialah perbandingan jarak pada peta dengan jarak sebenar di permukaan bumi, contohnya 1:50 000. Pilihan lain menerangkan ciri peta yang berlainan sama sekali.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_02",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah BUKAN jenis skala yang digunakan pada peta?",
    "options": [
      "Skala wakilan",
      "Skala suhu",
      "Skala lurus",
      "Skala penyata"
    ],
    "correctIndex": 1,
    "explanation": "Peta menggunakan tiga jenis skala iaitu skala lurus, skala penyata dan skala wakilan. Skala suhu ialah unit pengukuran haba dan tiada kaitan dengan peta.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_03",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Skala yang ditulis dalam bentuk \"1 cm mewakili 1 km\" tergolong dalam jenis skala yang manakah?",
    "options": [
      "Skala lurus",
      "Skala penyata",
      "Skala wakilan",
      "Skala kontur"
    ],
    "correctIndex": 1,
    "explanation": "Skala penyata dinyatakan dalam bentuk ayat atau perkataan. Skala wakilan pula dalam bentuk nisbah seperti 1:100 000, manakala skala lurus berupa garis bergraduasi.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_04",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Skala yang ditulis dalam bentuk nisbah seperti 1:100 000 dikenali sebagai skala yang manakah?",
    "options": [
      "Skala wakilan",
      "Skala penyata",
      "Skala lurus",
      "Skala kontur"
    ],
    "correctIndex": 0,
    "explanation": "Skala wakilan ditulis dalam bentuk nisbah tanpa unit, dan nilai 1:100 000 bermaksud 1 unit pada peta mewakili 100 000 unit yang sama di permukaan bumi.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_05",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Berapakah bilangan sentimeter dalam satu kilometer?",
    "options": [
      "10 000 cm",
      "100 000 cm",
      "1 000 000 cm",
      "1 000 cm"
    ],
    "correctIndex": 1,
    "explanation": "Satu kilometer bersamaan 1 000 meter dan setiap meter bersamaan 100 cm, jadi 1 km = 1 000 x 100 = 100 000 cm.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_06",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Skala 1:250 000 ditukar kepada skala penyata dalam unit kilometer. Pernyataan manakah yang betul?",
    "options": [
      "1 cm mewakili 2.5 km",
      "1 cm mewakili 0.25 km",
      "1 cm mewakili 250 km",
      "1 cm mewakili 25 km"
    ],
    "correctIndex": 0,
    "explanation": "250 000 cm dibahagi 100 000 cm memberi 2.5, jadi 1 cm pada peta mewakili 2.5 km. Pilihan 25 km berlaku jika tersalah bahagi dengan 10 000.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_07",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Sebuah peta mempunyai skala penyata \"1 cm mewakili 500 m\". Apakah skala wakilan yang sepadan dengannya?",
    "options": [
      "1:500 000",
      "1:500",
      "1:5 000",
      "1:50 000"
    ],
    "correctIndex": 3,
    "explanation": "500 m bersamaan 50 000 cm, jadi skala wakilannya ialah 1:50 000. Pilihan 1:5 000 timbul jika 500 m tersilap dianggap 5 000 cm.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_08",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Skala penyata \"1 cm mewakili 4 km\" ditukar kepada skala wakilan. Hasil penukaran yang betul ialah:",
    "options": [
      "1:4 000 000",
      "1:4 000",
      "1:40 000",
      "1:400 000"
    ],
    "correctIndex": 3,
    "explanation": "Empat kilometer bersamaan 4 x 100 000 = 400 000 cm, maka skala wakilannya 1:400 000. Pilihan 1:40 000 tersilap kerana menggunakan 1 km = 10 000 cm.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_09",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Sebuah peta sekolah menggunakan skala lurus dengan setiap 1 cm mewakili 200 m. Sekiranya seorang murid mengukur 7.5 cm antara padang dan kantin, berapakah jarak sebenar dalam kilometer?",
    "options": [
      "1.5 km",
      "15 km",
      "0.15 km",
      "150 km"
    ],
    "correctIndex": 0,
    "explanation": "1 cm mewakili 200 m, jadi 7.5 cm mewakili 7.5 x 200 = 1 500 m. Menukar 1 500 m kepada kilometer memberi 1.5 km, bukan 15 km yang lazimnya berlaku akibat tersalah letak titik perpuluhan.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s1_10",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Peta A berskala 1:25 000 manakala peta B berskala 1:100 000. Kesimpulan manakah paling tepat tentang kedua-dua peta itu?",
    "options": [
      "Peta B lebih banyak butiran kerana penyebut skalanya lebih besar",
      "Peta A menunjukkan kawasan lebih luas tetapi kurang butiran berbanding peta B",
      "Peta A menunjukkan kawasan lebih kecil tetapi lebih banyak butiran berbanding peta B",
      "Kedua-dua peta menunjukkan kawasan yang sama luas kerana menggunakan unit cm"
    ],
    "correctIndex": 2,
    "explanation": "Penyebut skala yang lebih kecil bermaksud skala lebih besar, iaitu setiap cm pada peta mewakili jarak sebenar yang lebih pendek. Oleh itu peta A meliputi kawasan lebih kecil tetapi memaparkan butiran dengan lebih terperinci.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_01",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Apakah alat yang paling sesuai untuk mengukur jarak melengkung seperti sebatang sungai pada peta?",
    "options": [
      "Protaktor",
      "Kompas magnetik",
      "Benang atau tali halus",
      "Jangka lukis"
    ],
    "correctIndex": 2,
    "explanation": "Benang halus boleh dibentuk mengikut liku sungai pada peta, kemudian diluruskan dan diukur dengan pembaris. Pembaris lurus akan memendekkan jarak melengkung yang sebenar.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_02",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Jarak lurus antara dua tempat pada peta paling tepat diukur dengan menggunakan:",
    "options": [
      "Jam randik dan kalkulator",
      "Pita ukur 30 meter",
      "Benang yang diikat pada paku",
      "Pembaris atau jalur kertas yang ditanda"
    ],
    "correctIndex": 3,
    "explanation": "Jarak lurus diukur dengan pembaris, dan jalur kertas yang ditanda hujung kedua-dua titik juga boleh digunakan. Pita ukur 30 m hanya sesuai untuk kerja di lapangan.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_03",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Dari bahagian manakah pada simbol sesuatu tempat pengukuran jarak sepatutnya dimulakan dan diakhiri?",
    "options": [
      "Dari tepi kiri simbol ke tepi kanan simbol kedua",
      "Dari pusat simbol tempat pertama ke pusat simbol tempat kedua",
      "Dari sempadan peta ke sempadan peta yang bertentangan",
      "Dari hujung nama tempat yang tertulis pada peta"
    ],
    "correctIndex": 1,
    "explanation": "Pengukuran jarak hendaklah bermula dan berakhir pada pusat simbol supaya jarak yang diperoleh mewakili kedudukan sebenar tempat itu, bukan saiz simbol yang dilukis.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_04",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Apakah kesan utama jika seorang murid mengukur jarak melengkung sebatang jalan dengan pembaris lurus sahaja?",
    "options": [
      "Jarak sebenar yang diperoleh menjadi lebih panjang daripada sepatutnya",
      "Jarak sebenar yang diperoleh menjadi lebih pendek daripada sepatutnya",
      "Skala peta bertukar secara automatik kepada skala yang lebih besar",
      "Jarak yang diperoleh tetap sama kerana jalan itu lurus"
    ],
    "correctIndex": 1,
    "explanation": "Pembaris lurus tidak mengikut liku jalan, jadi panjang yang diukur lebih pendek daripada panjang sebenar laluan. Benang perlu digunakan untuk memperoleh jarak yang lebih tepat.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_05",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Jarak pada peta yang diukur dengan benang perlu ditukar kepada jarak sebenar dengan cara:",
    "options": [
      "Membahagi panjang benang dengan nilai kontur",
      "Menambah panjang benang dengan jarak grid",
      "Menolak panjang benang daripada nilai skala",
      "Mendarab panjang benang dengan penyebut skala"
    ],
    "correctIndex": 3,
    "explanation": "Selepas benang diluruskan dan diukur, nilai dalam cm didarab dengan penyebut skala untuk memperoleh jarak sebenar dalam cm sebelum ditukar kepada kilometer.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_06",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Pada peta berskala 1:50 000, jarak lurus antara Balai Polis dan Sekolah Kebangsaan diukur 6 cm. Berapakah jarak sebenar dalam kilometer?",
    "options": [
      "3 km",
      "30 km",
      "300 km",
      "0.3 km"
    ],
    "correctIndex": 0,
    "explanation": "6 cm x 50 000 = 300 000 cm, dan 300 000 cm dibahagi 100 000 memberi 3 km. Pilihan 30 km timbul jika lupa membahagi dengan 100 000.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_07",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Sepanjang sebatang sungai pada peta berskala 1:25 000, benang yang diluruskan berukuran 8.4 cm. Berapakah panjang sebenar sungai itu?",
    "options": [
      "210 km",
      "210 m",
      "2.1 km",
      "21 km"
    ],
    "correctIndex": 2,
    "explanation": "8.4 cm x 25 000 = 210 000 cm, dan 210 000 cm bersamaan 2.1 km. Jawapan 210 m salah kerana penukaran 1 km = 1 000 cm digunakan.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_08",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Dua buah kampung terletak 12 cm antara satu sama lain pada peta berskala 1:100 000. Sebuah basikal bergerak pada kelajuan purata 24 km/j. Berapakah masa perjalanan yang diperlukan?",
    "options": [
      "1 jam",
      "2 jam",
      "30 minit",
      "45 minit"
    ],
    "correctIndex": 2,
    "explanation": "12 cm x 100 000 = 1 200 000 cm iaitu 12 km. Masa = jarak / kelajuan = 12 / 24 = 0.5 jam, bersamaan 30 minit.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_09",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Jarak lurus antara titik P dan titik Q ialah 4 cm pada peta berskala 1:200 000. Laluan jalan yang melengkung antara kedua-dua titik itu pula berukuran 6.2 cm menggunakan benang. Apakah beza jarak sebenar antara laluan melengkung dengan jarak lurus?",
    "options": [
      "44 km",
      "4.4 km",
      "8 km",
      "12.4 km"
    ],
    "correctIndex": 1,
    "explanation": "Jarak lurus = 4 x 200 000 = 800 000 cm = 8 km. Laluan melengkung = 6.2 x 200 000 = 1 240 000 cm = 12.4 km. Bezanya 12.4 - 8 = 4.4 km, manakala 12.4 km ialah jumlah laluan melengkung sahaja.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s2_10",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Seorang murid mengukur jarak antara dua bangunan pada peta berskala 1:20 000 dan mendapat 5 cm. Rakan sekelasnya pula mengukur dari tepi simbol ke tepi simbol dan mendapat 5.6 cm. Mengapakah bacaan rakan itu berbeza?",
    "options": [
      "Kerana pengukuran dari tepi simbol merangkumi lebar simbol, bukan jarak antara pusatnya",
      "Kerana pembaris yang digunakan tidak mempunyai unit sentimeter",
      "Kerana jarak sebenar antara bangunan itu memang tidak tetap",
      "Kerana skala peta berubah mengikut saiz simbol yang dilukis"
    ],
    "correctIndex": 0,
    "explanation": "Simbol bangunan mempunyai lebar. Mengukur dari tepi ke tepi menambah lebar kedua-dua simbol ke dalam jarak, sedangkan jarak yang betul diukur dari pusat ke pusat simbol.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_01",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Bagaimanakah jarak sebenar dikira daripada jarak yang diukur pada peta?",
    "options": [
      "Jarak pada peta dibahagi dengan penyebut skala",
      "Jarak pada peta ditambah dengan selang kontur tertinggi",
      "Jarak pada peta didarab dengan pengangka skala",
      "Jarak pada peta didarab dengan penyebut skala"
    ],
    "correctIndex": 3,
    "explanation": "Rumusnya ialah jarak sebenar = jarak pada peta x penyebut skala. Menggunakan pengangka skala yang bernilai 1 akan menghasilkan jarak sebenar yang tidak berubah.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_02",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Pada peta berskala 1:50 000, satu sentimeter pada peta mewakili jarak sebenar berapa kilometer?",
    "options": [
      "500 km",
      "0.5 km",
      "5 km",
      "50 km"
    ],
    "correctIndex": 1,
    "explanation": "50 000 cm bersamaan 0.5 km kerana 1 km = 100 000 cm. Pilihan 5 km tersilap dengan menggunakan 1 km = 10 000 cm.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_03",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Untuk menukar jarak sebenar yang diperoleh dalam sentimeter kepada kilometer, nilai itu perlu dibahagi dengan:",
    "options": [
      "100 000",
      "1 000 000",
      "1 000",
      "10 000"
    ],
    "correctIndex": 0,
    "explanation": "Satu kilometer bersamaan 100 000 cm, jadi jarak dalam cm mesti dibahagi 100 000 untuk ditukar kepada km. Membahagi dengan 1 000 hanya menukar cm kepada meter.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_04",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Bagaimanakah masa perjalanan antara dua tempat dikira apabila jarak sebenar dan kelajuan purata diketahui?",
    "options": [
      "Masa = jarak pada peta / kelajuan purata",
      "Masa = jarak sebenar x kelajuan purata",
      "Masa = kelajuan purata / jarak sebenar",
      "Masa = jarak sebenar / kelajuan purata"
    ],
    "correctIndex": 3,
    "explanation": "Masa perjalanan diperoleh dengan membahagi jarak sebenar dengan kelajuan purata, dengan unit jarak dalam km dan kelajuan dalam km/j supaya masa dinyatakan dalam jam.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_05",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Masa perjalanan sebanyak 0.5 jam bersamaan berapa minit?",
    "options": [
      "45 minit",
      "50 minit",
      "15 minit",
      "30 minit"
    ],
    "correctIndex": 3,
    "explanation": "Satu jam bersamaan 60 minit, jadi 0.5 jam = 0.5 x 60 = 30 minit. Penukaran ini penting selepas jarak sebenar dibahagi dengan kelajuan purata kerana jawapan lazimnya dalam bentuk jam perpuluhan.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_06",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Dua kampung terpisah 5 cm pada peta berskala 1:80 000. Sebuah motosikal bergerak antara kedua-dua kampung itu dengan kelajuan purata 30 km/j. Berapakah masa perjalanan yang diambil?",
    "options": [
      "20 minit",
      "6 minit",
      "8 minit",
      "12 minit"
    ],
    "correctIndex": 2,
    "explanation": "5 cm x 80 000 = 400 000 cm iaitu 4 km. Masa = 4 / 30 jam = 0.1333 jam, dan 0.1333 x 60 = 8 minit.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_07",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Sebuah tasik buatan terletak 4.5 cm dari sebuah pekan pada peta berskala 1:150 000. Apakah jarak sebenar antara tasik itu dengan pekan tersebut?",
    "options": [
      "0.675 km",
      "675 m",
      "6.75 km",
      "67.5 km"
    ],
    "correctIndex": 2,
    "explanation": "4.5 cm x 150 000 = 675 000 cm, dan 675 000 cm / 100 000 = 6.75 km. Pilihan 675 m salah kerana membahagi dengan 1 000 dan bukannya 100 000.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_08",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Sebuah lebuh raya yang panjang sebenar 18 km hendak dilukis pada peta berskala 1:60 000. Berapakah panjang lebuh raya itu pada peta?",
    "options": [
      "12 cm",
      "30 cm",
      "108 cm",
      "3 cm"
    ],
    "correctIndex": 1,
    "explanation": "18 km = 1 800 000 cm. Panjang pada peta = 1 800 000 / 60 000 = 30 cm. Pilihan 108 cm timbul jika jarak dalam km terus didarab dengan 6.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_09",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Sebuah kereta bertolak dari pekan A pada 9.00 pagi dan tiba di pekan B pada 9.40 pagi. Jarak antara kedua-dua pekan pada peta berskala 1:60 000 ialah 8 cm. Apakah kelajuan purata kereta itu?",
    "options": [
      "7.2 km/j",
      "12 km/j",
      "72 km/j",
      "6 km/j"
    ],
    "correctIndex": 0,
    "explanation": "8 cm x 60 000 = 480 000 cm iaitu 4.8 km. Masa perjalanan 40 minit bersamaan 2/3 jam, jadi kelajuan = 4.8 / (2/3) = 7.2 km/j.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b1_s3_10",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Pada peta berskala 1:250 000, jarak dua tempat ialah 7 cm. Seorang murid menjawab 1 750 km sedangkan jawapan betul ialah 17.5 km. Apakah kesilapan utama dalam jawapan murid itu?",
    "options": [
      "Murid menambah jarak peta dengan penyebut skala",
      "Murid mendarab dengan pengangka skala dan bukannya penyebut skala",
      "Murid tidak menukar 1 750 000 cm kepada kilometer, sepatutnya 17.5 km",
      "Murid menggunakan skala 1:2 500 dan bukannya 1:250 000"
    ],
    "correctIndex": 2,
    "explanation": "7 x 250 000 = 1 750 000 cm. Nilai itu perlu dibahagi 100 000 untuk menjadi 17.5 km. Jawapan 1 750 km timbul apabila murid membahagi dengan 1 000 dan bukannya 100 000, iaitu penukaran unit yang salah.",
    "ref": "Bab 1, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_01",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah ciri utama yang membezakan peta topografi daripada peta biasa?",
    "options": [
      "Peta topografi tidak mempunyai skala dan petunjuk peta",
      "Peta topografi hanya digunakan untuk menunjukkan sempadan negara",
      "Peta topografi hanya menunjukkan jalan raya dan bangunan sahaja",
      "Peta topografi menunjukkan bentuk muka bumi serta ciri fizikal dan ciri budaya sesuatu kawasan"
    ],
    "correctIndex": 3,
    "explanation": "Peta topografi memaparkan bentuk muka bumi seperti bukit dan cerun melalui garisan kontur di samping ciri budaya seperti jalan, bangunan dan petempatan.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_02",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah maksud singkatan \"Bkt\" pada peta topografi?",
    "options": [
      "Bendang",
      "Batang",
      "Bangunan",
      "Bukit"
    ],
    "correctIndex": 3,
    "explanation": "Bkt ialah singkatan bagi bukit, iaitu ciri fizikal yang biasanya ditandakan bersama nilai ketinggian pada peta topografi.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_03",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah kegunaan utama garisan grid pada peta topografi?",
    "options": [
      "Menandakan kawasan yang mempunyai hutan simpan",
      "Menentukan kedudukan atau lokasi sesuatu tempat dengan lebih tepat",
      "Menunjukkan arah aliran sungai dan anak sungai",
      "Mengukur suhu harian sesuatu kawasan"
    ],
    "correctIndex": 1,
    "explanation": "Garisan grid membentuk rujukan bernombor yang membolehkan kedudukan sesuatu ciri dinyatakan dengan tepat menggunakan bacaan grid.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_04",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah fungsi petunjuk peta dalam sesebuah peta topografi?",
    "options": [
      "Menerangkan maksud simbol dan singkatan yang digunakan pada peta",
      "Menyenaraikan nama semua kampung dalam kawasan tersebut",
      "Menunjukkan ketinggian sebenar setiap bangunan",
      "Mengira bilangan garisan kontur pada peta"
    ],
    "correctIndex": 0,
    "explanation": "Petunjuk peta ialah senarai simbol beserta maksudnya. Tanpa petunjuk, murid tidak dapat mentafsir simbol seperti Bkt, Sg atau Kg dengan betul.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_05",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Antara ciri berikut, yang manakah tergolong sebagai ciri fizikal pada peta topografi?",
    "options": [
      "Lebuh raya",
      "Balai polis",
      "Kilang papan",
      "Sungai"
    ],
    "correctIndex": 3,
    "explanation": "Sungai ialah ciri fizikal iaitu bentuk muka bumi semula jadi. Balai polis, kilang dan lebuh raya pula ialah ciri budaya yang dibina oleh manusia.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_06",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Dua peta topografi bagi kawasan yang berbeza mempunyai skala 1:25 000 dan 1:50 000. Apakah langkah pertama yang perlu dilakukan sebelum membandingkan jarak dalam kedua-dua peta itu?",
    "options": [
      "Menyemak skala pada petunjuk setiap peta dan menukar jarak kepada jarak sebenar",
      "Menganggap kedua-dua peta menggunakan skala yang sama",
      "Mengukur jarak dengan benang dan terus menulis jawapan dalam kilometer",
      "Menjumlahkan kedua-dua jarak peta tanpa mengira skala"
    ],
    "correctIndex": 0,
    "explanation": "Setiap peta mempunyai skala sendiri, jadi jarak pada peta mesti ditukar kepada jarak sebenar sebelum dibandingkan. Membandingkan bacaan cm mentah akan memberi kesimpulan palsu.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_07",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Mengapakah peta topografi lebih sesuai digunakan oleh jurutera untuk merancang pembinaan jalan berbanding peta jalan biasa?",
    "options": [
      "Kerana peta topografi hanya memaparkan kawasan bandar yang rata",
      "Kerana peta topografi menggunakan warna terang untuk semua jalan",
      "Kerana peta topografi menunjukkan bentuk muka bumi dan ketinggian yang membantu mengelakkan cerun curam",
      "Kerana peta topografi tidak memerlukan skala semasa pengukuran"
    ],
    "correctIndex": 2,
    "explanation": "Relief yang ditunjukkan oleh garisan kontur membolehkan jurutera menilai kecerunan tanah, memilih laluan yang lebih rata dan menganggarkan kerja pemotongan bukit.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_08",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Pada peta topografi, simbol berbentuk bangunan kecil berlabel \"Kg\" dan simbol segi empat berlabel \"Stn\" ditemui bersebelahan jalan. Apakah maksud kedua-dua singkatan itu?",
    "options": [
      "Kawasan gurun dan stesen kajicuaca",
      "Kilang getah dan stadium",
      "Kampung dan stesen",
      "Ketinggian gunung dan sungai"
    ],
    "correctIndex": 2,
    "explanation": "Kg ialah singkatan bagi kampung, iaitu ciri petempatan, manakala Stn ialah singkatan bagi stesen seperti stesen kereta api atau stesen bas.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_09",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Seorang pegawai perancang bandar perlu memilih lokasi baharu untuk taman perumahan. Maklumat peta topografi manakah paling penting untuk mengelakkan kawasan berisiko tanah runtuh?",
    "options": [
      "Bilangan simbol bangunan yang sedia ada di kawasan itu",
      "Kepadatan garisan kontur yang menunjukkan kecerunan cerun",
      "Warna yang digunakan untuk mewarnakan kawasan hutan",
      "Bilangan garisan grid yang melintasi kawasan itu"
    ],
    "correctIndex": 1,
    "explanation": "Garisan kontur yang rapat menunjukkan cerun curam yang berisiko tinggi untuk pembinaan. Bilangan simbol atau garisan grid tidak memberikan maklumat tentang kecerunan tanah.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s1_10",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Dua peta topografi meliputi kawasan hutan yang sama. Peta X berskala 1:10 000 manakala peta Y berskala 1:50 000. Seorang penyelidik mahu menanda denai kecil antara dua kem. Peta manakah lebih sesuai dan mengapa?",
    "options": [
      "Peta X kerana skalanya lebih besar dan memaparkan butiran kecil dengan lebih jelas",
      "Peta Y kerana penyebut skala yang besar sentiasa menunjukkan butiran yang lebih halus",
      "Kedua-dua peta sama sesuai kerana menunjukkan kawasan yang sama",
      "Peta Y kerana meliputi kawasan yang lebih luas dan lebih mudah dibawa ke lapangan"
    ],
    "correctIndex": 0,
    "explanation": "Penyebut skala yang lebih kecil bermaksud skala lebih besar, jadi 1:10 000 memberi butiran yang lebih halus. Peta Y yang meliputi kawasan lebih luas akan menggabungkan denai kecil menjadi satu garisan kabur.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_01",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah maksud garisan kontur?",
    "options": [
      "Garisan yang menunjukkan sempadan antara dua buah negeri",
      "Garisan yang menandakan laluan sungai dari hulu ke hilir",
      "Garisan yang menghubungkan semua jalan raya di sesuatu kawasan",
      "Garisan yang menghubungkan titik-titik yang sama tinggi dari aras laut"
    ],
    "correctIndex": 3,
    "explanation": "Garisan kontur menyambungkan tempat-tempat yang mempunyai ketinggian yang sama di atas aras laut, dan himpunan garisan ini menggambarkan bentuk muka bumi.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_02",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah tanda pada garisan kontur yang menunjukkan nilai ketinggiannya?",
    "options": [
      "Nombor yang dicetak pada selang-selang garisan kontur",
      "Simbol bintang pada puncak tertinggi sahaja",
      "Titik hitam pada pertemuan dua garisan kontur",
      "Anak panah berwarna merah pada setiap garisan kontur"
    ],
    "correctIndex": 0,
    "explanation": "Nilai ketinggian dicetak pada garisan kontur pada selang tertentu, dan selang kontur juga dinyatakan pada petunjuk peta, misalnya 100 m.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_03",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah maksud selang kontur?",
    "options": [
      "Beza ketinggian antara dua garisan kontur berturutan",
      "Panjang setiap garisan kontur yang dilukis pada peta",
      "Bilangan garisan kontur yang terdapat pada satu peta",
      "Jarak mendatar antara dua garisan kontur berturutan pada peta"
    ],
    "correctIndex": 0,
    "explanation": "Selang kontur ialah beza nilai ketinggian antara dua garisan kontur yang bersebelahan, contohnya 100 m. Jarak mendatar antara dua kontur ialah konsep berlainan yang tidak dinamakan selang kontur.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_04",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Garisan kontur yang rapat pada peta menunjukkan ciri muka bumi yang manakah?",
    "options": [
      "Kawasan tanah rata",
      "Lembangan sungai yang dalam",
      "Cerun landai",
      "Cerun curam"
    ],
    "correctIndex": 3,
    "explanation": "Garisan kontur yang rapat bermaksud ketinggian berubah dengan cepat dalam jarak mendatar yang pendek, iaitu cerun curam. Garisan kontur yang jarang pula menunjukkan cerun landai.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_05",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah ciri garisan kontur pada puncak sebuah bukit?",
    "options": [
      "Garisan kontur melengkung ke bawah mengikut arah lurah",
      "Garisan kontur bertemu dan berpotong antara satu sama lain",
      "Garisan kontur membentuk bulatan kecil di tengah dengan nilai tertinggi",
      "Garisan kontur hilang sepenuhnya di kawasan puncak"
    ],
    "correctIndex": 2,
    "explanation": "Puncak bukit diwakili oleh garisan kontur tertutup yang paling kecil di tengah, dengan nilai ketinggian tertinggi. Garisan kontur tidak pernah bertemu atau berpotong.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_06",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Sebuah peta topografi mempunyai selang kontur 50 m. Garisan kontur berturutan dari kaki bukit ke puncak bernilai 150 m, 200 m dan 250 m. Berapakah nilai garisan kontur seterusnya selepas 250 m jika cerun terus menaik?",
    "options": [
      "250 m",
      "300 m",
      "350 m",
      "200 m"
    ],
    "correctIndex": 1,
    "explanation": "Cerun yang menaik bermaksud nilai kontur bertambah sebanyak selang kontur 50 m. Garisan selepas 250 m ialah 250 + 50 = 300 m.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_07",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Kawasan P mempunyai garisan kontur yang berjarak 4 mm antara satu sama lain, manakala kawasan Q mempunyai garisan kontur berjarak 12 mm. Kedua-dua kawasan mempunyai selang kontur yang sama. Apakah kesimpulan yang betul?",
    "options": [
      "Kecerunan kedua-dua kawasan tidak dapat dibandingkan",
      "Kawasan P lebih curam daripada kawasan Q",
      "Kawasan Q lebih curam daripada kawasan P",
      "Kedua-dua kawasan mempunyai kecerunan yang sama"
    ],
    "correctIndex": 1,
    "explanation": "Jarak antara kontur yang lebih kecil pada kawasan P bermaksud ketinggian naik lebih cepat dalam jarak mendatar yang pendek, sekali gus menunjukkan cerun yang lebih curam.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_08",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Titik X terletak di kawasan antara garisan kontur 200 m dengan garisan kontur 225 m, tanpa sebarang garisan kontur lain di antaranya. Apakah anggaran ketinggian titik X?",
    "options": [
      "Kurang daripada 200 m",
      "Antara 200 m dan 225 m",
      "Tepat 225 m kerana ia garisan kontur terdekat",
      "Antara 225 m dan 250 m"
    ],
    "correctIndex": 1,
    "explanation": "Titik yang terletak di antara dua garisan kontur mempunyai ketinggian antara nilai kedua-dua garisan itu, iaitu antara 200 m dan 225 m. Nilai tepat 225 m hanya terletak pada garisan kontur itu sendiri.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_09",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Garisan kontur yang melengkung membentuk huruf V dengan hujung V menunjuk ke arah ketinggian yang lebih tinggi menunjukkan ciri muka bumi yang manakah?",
    "options": [
      "Lurah atau lembah sungai",
      "Puncak bukit yang rata",
      "Dataran tinggi yang luas",
      "Tanjung yang menganjur ke laut"
    ],
    "correctIndex": 0,
    "explanation": "Lengkung V yang menghala ke arah kontur lebih tinggi menandakan lurah, iaitu lembah yang biasanya dialiri sungai dan merupakan laluan air mengalir ke bawah. Lengkung yang menghala ke arah kontur lebih rendah pula menunjukkan rabung.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s2_10",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Titik R terletak pada garisan kontur 275 m dan titik S terletak pada garisan kontur 350 m. Jarak mendatar antara R dan S pada peta berskala 1:25 000 ialah 6 cm. Apakah kecerunan purata antara R dan S?",
    "options": [
      "1 dalam 5",
      "1 dalam 10",
      "1 dalam 20",
      "1 dalam 50"
    ],
    "correctIndex": 2,
    "explanation": "Beza tinggi = 350 - 275 = 75 m. Jarak mendatar sebenar = 6 cm x 25 000 = 150 000 cm = 1 500 m. Kecerunan = 75 / 1 500 = 1 dalam 20.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_01",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah maksud pola petempatan berkelompok pada peta topografi?",
    "options": [
      "Bangunan yang dibina di puncak bukit secara berasingan",
      "Bangunan yang dibina rapat antara satu sama lain dalam satu kawasan",
      "Bangunan yang tersebar jauh antara satu sama lain tanpa pola",
      "Bangunan yang dibina di sepanjang sungai sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Petempatan berkelompok menunjukkan rumah atau bangunan yang dibina rapat dan bertumpu di satu kawasan, lazimnya berhampiran jalan, sungai atau pusat kegiatan.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_02",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah maksud pola petempatan berselerak?",
    "options": [
      "Bangunan yang disusun dalam bentuk barisan lurus",
      "Bangunan yang hanya terletak di kawasan bandar",
      "Bangunan yang terpisah jauh antara satu sama lain tanpa tumpuan",
      "Bangunan yang dibina rapat mengelilingi satu balai raya"
    ],
    "correctIndex": 2,
    "explanation": "Petempatan berselerak menunjukkan rumah yang berjauhan, biasanya di kawasan pertanian luar bandar seperti kebun getah atau sawah yang luas.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_03",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Bagaimanakah arah aliran sungai dapat ditentukan pada peta topografi?",
    "options": [
      "Dengan melihat warna simbol bangunan di tepi sungai",
      "Dengan mengira bilangan garisan grid yang melintasi sungai",
      "Dengan menyemak bilangan jambatan di sepanjang sungai",
      "Dengan melihat pertemuan anak sungai yang mengalir ke sungai utama"
    ],
    "correctIndex": 3,
    "explanation": "Anak sungai sentiasa mengalir masuk ke sungai utama, bukan sebaliknya. Arah pertemuan ini menunjukkan arah aliran air dari hulu ke hilir.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_04",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Di manakah kebanyakan petempatan utama lazimnya tertumpu pada peta topografi?",
    "options": [
      "Di kawasan tanah pamah berhampiran sungai dan jalan raya",
      "Di puncak bukit yang tinggi dan terpencil",
      "Di kawasan cerun curam yang tidak boleh dibina",
      "Di kawasan hutan tebal tanpa jalan masuk"
    ],
    "correctIndex": 0,
    "explanation": "Tanah pamah menyediakan ruang rata untuk pembinaan, air daripada sungai dan akses jalan raya. Faktor ini menjadikan kawasan tersebut tumpuan petempatan dan kegiatan ekonomi.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_05",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah maksud guna tanah dalam tafsiran peta topografi?",
    "options": [
      "Luas tanah yang diukur dalam unit hektar pada peta",
      "Bilangan garisan kontur yang melintasi sesuatu kawasan",
      "Ketinggian tanah diukur dari aras laut",
      "Kegiatan atau tujuan sesuatu kawasan tanah digunakan seperti pertanian atau perindustrian"
    ],
    "correctIndex": 3,
    "explanation": "Guna tanah menerangkan cara sesuatu kawasan dimanfaatkan, contohnya sawah padi, kelapa sawit, hutan simpan atau kawasan perindustrian, dan ditunjukkan melalui simbol serta warna peta.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_06",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Pada sebuah peta topografi, simbol rumah terletak rapat di sepanjang jalan utama berhampiran sebuah jambatan. Pola petempatan manakah yang paling tepat?",
    "options": [
      "Petempatan terpencil tanpa hubungan dengan jalan raya",
      "Petempatan bermusim yang berpindah setiap bulan",
      "Petempatan berkelompok atau berjajar di sepanjang jalan",
      "Petempatan berselerak kerana setiap rumah mempunyai alamat sendiri"
    ],
    "correctIndex": 2,
    "explanation": "Rumah yang dibina rapat dan tersusun di sepanjang jalan utama menunjukkan pola berkelompok atau berjajar. Akses jalan dan jambatan menjadi tarikan utama petempatan.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_07",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Sebuah peta topografi menunjukkan kawasan hutan di bahagian utara dan sawah padi di bahagian selatan yang lebih rendah. Apakah tafsiran paling munasabah?",
    "options": [
      "Ketinggian kawasan tidak mempengaruhi jenis guna tanah",
      "Bahagian selatan yang rata dan rendah lebih sesuai untuk penanaman padi",
      "Kawasan hutan di utara lebih rata berbanding kawasan sawah",
      "Sawah padi hanya boleh ditanam di kawasan cerun curam"
    ],
    "correctIndex": 1,
    "explanation": "Sawah padi memerlukan tanah rata yang boleh menakung air pengairan. Kawasan berbukit atau berhutan pula biasanya dibiarkan sebagai hutan simpan atau digunakan untuk tanaman lain.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_08",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Mengapakah jaringan jalan raya pada peta topografi biasanya lebih padat di kawasan tanah pamah berbanding kawasan tanah tinggi?",
    "options": [
      "Tanah pamah tidak memerlukan jaringan jalan untuk pengangkutan",
      "Pembinaan jalan di tanah pamah lebih murah dan penduduk lebih ramai di sana",
      "Kawasan tanah tinggi tidak mempunyai sebarang kegiatan ekonomi",
      "Jalan raya di tanah tinggi tidak boleh dilalui oleh kenderaan"
    ],
    "correctIndex": 1,
    "explanation": "Tanah pamah yang rata mengurangkan kos pembinaan dan penyelenggaraan jalan, manakala kepadatan penduduk serta kegiatan ekonomi yang tinggi mewujudkan permintaan yang lebih besar.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_09",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Pada sebuah peta topografi, sebuah sungai mengalir dari kawasan berkontur 300 m ke kawasan berkontur 100 m. Sebuah pekan terletak di bahagian hilir dan sebuah perkampungan kecil di bahagian hulu. Apakah kesimpulan paling tepat tentang risiko banjir?",
    "options": [
      "Kedua-dua kawasan mempunyai risiko yang sama kerana menggunakan sungai yang sama",
      "Risiko banjir tidak berkaitan dengan ketinggian sesuatu kawasan",
      "Pekan di hilir lebih berisiko kerana air berkumpul di kawasan rendah",
      "Perkampungan di hulu lebih berisiko kerana air mengalir ke atas"
    ],
    "correctIndex": 2,
    "explanation": "Air mengalir dari ketinggian tinggi ke ketinggian rendah. Kawasan rendah di hilir menerima air yang berkumpul dari seluruh lembangan, jadi risiko banjir di situ lebih tinggi.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b2_s3_10",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Dua peta topografi meliputi kawasan yang berbeza. Peta P menunjukkan rumah yang dibina rapat di sepanjang jalan dan berhampiran kilang. Peta Q menunjukkan rumah yang berjauhan di kawasan kebun getah. Apakah perbandingan paling tepat tentang punca perbezaan pola petempatan itu?",
    "options": [
      "Peta P mempunyai tumpuan peluang pekerjaan dan kemudahan manakala peta Q bergantung pada kegiatan pertanian yang memerlukan tanah luas",
      "Peta Q lebih padat penduduk kerana rumahnya lebih besar",
      "Peta P menunjukkan petempatan berselerak kerana rumah dibina di tepi jalan",
      "Kedua-dua peta menunjukkan pola petempatan yang sama bentuknya"
    ],
    "correctIndex": 0,
    "explanation": "Kilang dan jalan menyediakan pekerjaan serta kemudahan, jadi rumah tertumpu berhampiran. Kegiatan seperti kebun getah memerlukan kawasan luas, menyebabkan rumah dibina berjauhan di tengah kebun masing-masing.",
    "ref": "Bab 2, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_01",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Berapakah tempoh masa Bumi mengambil untuk melengkapkan satu putaran pada paksinya?",
    "options": [
      "30 hari",
      "365 1/4 hari",
      "12 jam",
      "24 jam"
    ],
    "correctIndex": 3,
    "explanation": "Bumi berputar pada paksinya sekali dalam tempoh kira-kira 24 jam. Tempoh 365 1/4 hari pula ialah masa Bumi melengkapkan satu peredaran mengelilingi Matahari.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_02",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Ke arah manakah Bumi berputar pada paksinya?",
    "options": [
      "Dari timur ke barat",
      "Dari barat ke timur",
      "Dari utara ke selatan",
      "Dari selatan ke utara"
    ],
    "correctIndex": 1,
    "explanation": "Bumi berputar dari barat ke timur. Kesan putaran ini menyebabkan Matahari kelihatan terbit di sebelah timur dan terbenam di sebelah barat.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_03",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Kejadian siang dan malam di Bumi disebabkan oleh:",
    "options": [
      "Putaran Bumi pada paksinya",
      "Kecondongan paksi Bumi sebanyak 23.5 darjah sahaja",
      "Perubahan kedudukan Bulan mengelilingi Bumi",
      "Peredaran Bumi mengelilingi Matahari"
    ],
    "correctIndex": 0,
    "explanation": "Bahagian Bumi yang menghadap Matahari mengalami siang manakala bahagian yang membelakangi Matahari mengalami malam. Keadaan ini berubah akibat putaran Bumi pada paksinya.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_04",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Mengapakah berlakunya perbezaan waktu antara kawasan timur dan barat di Malaysia?",
    "options": [
      "Kerana Bumi berputar dari timur ke barat sehingga kawasan barat lebih sejuk",
      "Kerana jarak antara kawasan timur dan barat terlalu jauh untuk diukur",
      "Kerana semua kawasan di Bumi berkongsi waktu yang sama sepanjang tahun",
      "Kerana Bumi berputar dari barat ke timur sehingga kawasan timur menerima cahaya Matahari lebih dahulu"
    ],
    "correctIndex": 3,
    "explanation": "Putaran dari barat ke timur menyebabkan kawasan yang terletak lebih ke timur menghadap Matahari lebih awal, lalu mengalami siang dan waktu yang lebih awal.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_05",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah nama paksi khayalan yang melintasi pusat Bumi dari kutub utara ke kutub selatan?",
    "options": [
      "Garisan meridian utama",
      "Garisan tarikh antarabangsa",
      "Garisan khatulistiwa",
      "Paksi Bumi"
    ],
    "correctIndex": 3,
    "explanation": "Paksi Bumi ialah garis khayalan yang condong 23.5 darjah dari garis menegak, dan Bumi berputar mengelilingi paksi inilah.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_06",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Jika Bumi berputar 360 darjah dalam 24 jam, berapakah sudut putaran Bumi dalam tempoh 6 jam?",
    "options": [
      "45 darjah",
      "60 darjah",
      "90 darjah",
      "120 darjah"
    ],
    "correctIndex": 2,
    "explanation": "Kadar putaran ialah 360 / 24 = 15 darjah sejam. Dalam 6 jam, Bumi berputar 15 x 6 = 90 darjah.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_07",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Sebuah kapal terbang berlepas dari Kota Kinabalu pada pukul 8.00 pagi waktu Malaysia dan mendarat di sebuah bandar yang terletak lebih ke barat. Berdasarkan putaran Bumi, bandingkan waktu tempatan di bandar itu dengan waktu tempatan di Kota Kinabalu pada saat yang sama.",
    "options": [
      "Waktu tempatan di kedua-dua bandar sentiasa sama tepat",
      "Waktu tempatan ditentukan oleh peredaran Bumi mengelilingi Matahari",
      "Waktu tempatan di bandar itu lebih lewat berbanding Kota Kinabalu",
      "Waktu tempatan di bandar itu lebih awal berbanding Kota Kinabalu"
    ],
    "correctIndex": 2,
    "explanation": "Bumi berputar dari barat ke timur, jadi kawasan di sebelah timur menyambut siang lebih awal. Pada saat yang sama, bandar yang terletak lebih ke barat mempunyai waktu tempatan yang lebih lewat, dengan setiap 15 darjah longitud mewakili satu jam.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_08",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Bumi berputar kira-kira 15 darjah bagi setiap jam. Jika bandar P berada 45 darjah ke timur bandar Q, berapakah beza waktu tempatan antara kedua-dua bandar itu?",
    "options": [
      "2 jam",
      "3 jam",
      "4 jam",
      "1 jam"
    ],
    "correctIndex": 1,
    "explanation": "Beza longitud 45 darjah dibahagi kadar 15 darjah sejam memberi 3 jam. Bandar P yang berada di timur akan mengalami waktu 3 jam lebih awal.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_09",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Sebuah satelit mencatat bahawa cahaya Matahari mula menyinari sebuah pantai di timur Malaysia pada pukul 6.30 pagi, sementara sebuah pantai di barat Malaysia masih gelap pada waktu yang sama. Apakah penjelasan paling tepat bagi keadaan ini?",
    "options": [
      "Bumi berputar dari barat ke timur menyebabkan pantai di timur menyongsong Matahari lebih dahulu",
      "Matahari bergerak mengelilingi Bumi dari timur ke barat dalam tempoh 24 jam",
      "Bulan menghalang cahaya Matahari daripada sampai ke pantai di barat",
      "Pantai di barat lebih tinggi dari aras laut sehingga cahaya lambat sampai"
    ],
    "correctIndex": 0,
    "explanation": "Bumi berputar dari barat ke timur, jadi bahagian timur masuk ke kawasan yang diterangi Matahari lebih awal. Matahari sebenarnya tidak mengelilingi Bumi; itu hanya kesan pemerhatian dari Bumi.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s1_10",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Seorang murid menyatakan bahawa putaran Bumi menyebabkan berlakunya musim di kawasan latitud tinggi. Penilaian manakah paling tepat?",
    "options": [
      "Betul, kerana putaran Bumi selama 24 jam mengubah kedudukan Matahari",
      "Betul, kerana putaran Bumi dan peredaran Bumi memberi kesan yang sama",
      "Salah, kerana musim disebabkan oleh peredaran Bumi mengelilingi Matahari serta kecondongan paksi Bumi",
      "Salah, kerana musim hanya berlaku di kawasan khatulistiwa"
    ],
    "correctIndex": 2,
    "explanation": "Putaran Bumi menyebabkan siang, malam dan perbezaan waktu, manakala musim berlaku kerana peredaran Bumi mengelilingi Matahari bersama kecondongan paksi Bumi sebanyak 23.5 darjah.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_01",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Berapakah tempoh masa Bumi melengkapkan satu peredaran mengelilingi Matahari?",
    "options": [
      "365 1/4 hari",
      "24 jam",
      "30 hari",
      "180 hari"
    ],
    "correctIndex": 0,
    "explanation": "Bumi beredar mengelilingi Matahari sekali dalam tempoh kira-kira 365 1/4 hari, iaitu satu tahun. Tempoh 24 jam pula ialah masa satu putaran pada paksinya.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_02",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Kejadian empat musim di kawasan latitud tinggi disebabkan oleh:",
    "options": [
      "Putaran Bumi pada paksinya setiap 24 jam",
      "Perubahan jarak antara Bumi dengan Bulan",
      "Pergerakan angin monsun di kawasan tropika",
      "Peredaran Bumi mengelilingi Matahari bersama kecondongan paksi Bumi"
    ],
    "correctIndex": 3,
    "explanation": "Semasa Bumi beredar, kecondongan paksi 23.5 darjah menyebabkan kejadian sinaran Matahari bergilir antara hemisfera utara dan selatan, lalu menghasilkan empat musim.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_03",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Berapakah sudut kecondongan paksi Bumi?",
    "options": [
      "45 darjah",
      "66.5 darjah",
      "15 darjah",
      "23.5 darjah"
    ],
    "correctIndex": 3,
    "explanation": "Paksi Bumi condong sebanyak 23.5 darjah daripada garis menegak. Kecondongan inilah yang menyebabkan kejadian musim berubah sepanjang tahun.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_04",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah jenis iklim yang dialami oleh Malaysia?",
    "options": [
      "Iklim khatulistiwa dengan musim hujan dan panas",
      "Iklim gurun yang sangat kering",
      "Iklim mediterranean dengan empat musim",
      "Iklim sederhana sejuk"
    ],
    "correctIndex": 0,
    "explanation": "Malaysia terletak berhampiran garisan khatulistiwa, jadi mengalami iklim khatulistiwa dengan suhu tinggi dan hujan sepanjang tahun, bukan empat musim seperti kawasan latitud tinggi.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_05",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah nama garisan lintang yang menerima sinaran Matahari paling tegak pada bulan Jun?",
    "options": [
      "Garisan Jadi",
      "Garisan Tarikh Antarabangsa",
      "Garisan Khatulistiwa",
      "Garisan Sartan"
    ],
    "correctIndex": 3,
    "explanation": "Pada bulan Jun, Matahari berada tegak di Garisan Sartan di hemisfera utara, menyebabkan musim panas di sana dan musim sejuk di hemisfera selatan.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_06",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Sebuah bandar di hemisfera utara mengalami siang yang lebih panjang pada bulan Jun berbanding bulan Disember. Apakah sebab utama keadaan ini?",
    "options": [
      "Bandar itu terletak pada latitud yang berubah setiap bulan",
      "Bandar itu lebih dekat dengan Bulan pada bulan Jun",
      "Kecondongan paksi Bumi menyebabkan hemisfera utara lebih condong ke arah Matahari pada bulan Jun",
      "Bumi berputar lebih perlahan pada bulan Jun di hemisfera utara"
    ],
    "correctIndex": 2,
    "explanation": "Pada bulan Jun, hemisfera utara condong ke arah Matahari, jadi kawasan di sana menerima sinaran lebih lama dan siangnya lebih panjang. Kelajuan putaran Bumi tidak berubah.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_07",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Pernyataan manakah yang membezakan putaran Bumi daripada peredaran Bumi dengan tepat?",
    "options": [
      "Putaran mengambil 365 1/4 hari manakala peredaran mengambil 24 jam",
      "Putaran mengambil 24 jam pada paksi Bumi manakala peredaran mengambil 365 1/4 hari mengelilingi Matahari",
      "Putaran menyebabkan musim manakala peredaran menyebabkan siang dan malam",
      "Putaran dan peredaran kedua-duanya mengambil masa 24 jam"
    ],
    "correctIndex": 1,
    "explanation": "Putaran ialah gerakan Bumi berputar pada paksinya dalam 24 jam yang menyebabkan siang dan malam. Peredaran ialah gerakan mengelilingi Matahari selama 365 1/4 hari yang menyebabkan kejadian musim.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_08",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Mengapakah negara di hemisfera utara mengalami musim sejuk pada bulan Disember?",
    "options": [
      "Kerana hemisfera utara menerima lebih banyak hujan pada bulan itu",
      "Kerana hemisfera utara condong menjauhi Matahari sehingga sinaran sampai pada sudut yang rendah",
      "Kerana Bumi berada paling jauh dari Matahari pada bulan Disember sahaja",
      "Kerana putaran Bumi menjadi lebih lambat pada bulan Disember"
    ],
    "correctIndex": 1,
    "explanation": "Pada bulan Disember, hemisfera utara condong menjauhi Matahari. Sinaran Matahari sampai pada sudut yang rendah dan kurang tertumpu, jadi suhu menurun dan musim sejuk berlaku.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_09",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Sebuah stesen kajicuaca di Norway merekodkan tempoh siang 18 jam pada bulan Jun dan hanya 6 jam pada bulan Disember. Apakah kesimpulan yang paling tepat?",
    "options": [
      "Tempoh siang berubah kerana jarak Norway dari Matahari berbeza sebanyak 12 jam",
      "Tempoh siang berubah kerana Bulan memantulkan lebih banyak cahaya pada bulan Jun",
      "Norway berada berhampiran kutub utara dan perbezaan panjang siang disebabkan kecondongan paksi Bumi semasa peredaran",
      "Norway berada di khatulistiwa dan panjang siang berubah akibat putaran Bumi"
    ],
    "correctIndex": 2,
    "explanation": "Kawasan berhampiran kutub utara mengalami perbezaan panjang siang yang sangat besar antara bulan Jun dan Disember kerana kecondongan paksi Bumi semasa peredaran. Di khatulistiwa, panjang siang hampir sama sepanjang tahun.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s2_10",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Dua buah bandar terletak pada latitud yang sama tetapi pada hemisfera yang berbeza. Bandar P berada di hemisfera utara manakala bandar Q di hemisfera selatan. Apakah yang dijangka berlaku pada bulan Julai?",
    "options": [
      "Bandar P mengalami musim panas manakala bandar Q mengalami musim sejuk",
      "Bandar P mengalami musim sejuk manakala bandar Q mengalami musim panas",
      "Kedua-dua bandar mengalami musim luruh serentak",
      "Kedua-dua bandar mengalami musim yang sama kerana latitudnya sama"
    ],
    "correctIndex": 0,
    "explanation": "Pada bulan Julai, hemisfera utara condong ke arah Matahari sehingga mengalami musim panas, manakala hemisfera selatan menjauhi Matahari dan mengalami musim sejuk. Latitud yang sama tidak bermakna musim yang sama jika hemisfera berbeza.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_01",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah kedudukan jasad semasa kejadian gerhana Matahari?",
    "options": [
      "Bumi berada di antara Matahari dan Bulan",
      "Bulan berada di antara Matahari dan Bumi",
      "Matahari berada di antara Bumi dan Bulan",
      "Bulan dan Bumi berada pada sisi bertentangan Matahari"
    ],
    "correctIndex": 1,
    "explanation": "Gerhana Matahari berlaku apabila Bulan berada di antara Matahari dan Bumi, lalu bayang-bayang Bulan jatuh ke atas permukaan Bumi.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_02",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah kedudukan jasad semasa kejadian gerhana Bulan?",
    "options": [
      "Matahari berada di antara Bumi dan Bulan",
      "Bumi dan Bulan berada pada kedudukan yang sama",
      "Bulan berada di antara Matahari dan Bumi",
      "Bumi berada di antara Matahari dan Bulan"
    ],
    "correctIndex": 3,
    "explanation": "Gerhana Bulan berlaku apabila Bumi berada di antara Matahari dan Bulan, menyebabkan Bulan memasuki bayang-bayang Bumi.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_03",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah syarat utama yang membolehkan gerhana berlaku?",
    "options": [
      "Matahari, Bumi dan Bulan berada dalam satu garisan lurus",
      "Bumi berada paling jauh dari Matahari pada tahun itu",
      "Bulan berada pada jarak paling dekat dengan bintang",
      "Ketiga-tiga jasad berada pada sudut 90 darjah antara satu sama lain"
    ],
    "correctIndex": 0,
    "explanation": "Gerhana hanya berlaku apabila Matahari, Bumi dan Bulan berada dalam satu garisan lurus supaya bayang-bayang dapat jatuh pada jasad yang lain.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_04",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Kawasan di Bumi yang diliputi bayang-bayang Bulan semasa gerhana Matahari dipanggil:",
    "options": [
      "Lembangan sinaran",
      "Umbra dan penumbra",
      "Zon waktu tempatan",
      "Kawasan lintang tinggi"
    ],
    "correctIndex": 1,
    "explanation": "Bayang-bayang Bulan terbahagi kepada umbra iaitu bahagian paling gelap di tengah dan penumbra yang lebih cerah di sekelilingnya. Kawasan dalam umbra mengalami gerhana penuh.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_05",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Mengapakah gerhana tidak berlaku pada setiap bulan walaupun Bulan mengelilingi Bumi setiap bulan?",
    "options": [
      "Kerana Bulan tidak menerima cahaya Matahari pada kebanyakan bulan",
      "Kerana Bumi berputar terlalu laju untuk membentuk bayang-bayang",
      "Kerana Matahari bergerak menjauhi Bumi setiap bulan",
      "Kerana orbit Bulan condong sedikit terhadap orbit Bumi mengelilingi Matahari"
    ],
    "correctIndex": 3,
    "explanation": "Orbit Bulan condong kira-kira 5 darjah terhadap orbit Bumi. Oleh itu ketiga-tiga jasad jarang berada tepat dalam satu garisan lurus, jadi gerhana hanya berlaku beberapa kali setahun.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_06",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Seorang murid melihat Bulan kelihatan kemerah-merahan dan gelap sedikit pada waktu malam. Kejadian ini paling mungkin ialah:",
    "options": [
      "Gerhana Bulan kerana Bulan berada di antara Bumi dan Matahari",
      "Putaran Bumi yang menyebabkan Bulan berpindah tempat",
      "Gerhana Bulan kerana Bulan memasuki bayang-bayang Bumi",
      "Gerhana Matahari kerana Bulan menghalang cahaya Matahari"
    ],
    "correctIndex": 2,
    "explanation": "Semasa gerhana Bulan, Bulan bergerak masuk ke dalam bayang-bayang Bumi. Cahaya Matahari yang melalui atmosfera Bumi dibiaskan sedikit dan memberi warna kemerahan pada Bulan.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_07",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Mengapakah gerhana Matahari penuh hanya dapat dilihat di kawasan yang terletak dalam umbra Bulan?",
    "options": [
      "Kerana hanya kawasan dalam umbra menerima bayang-bayang paling gelap daripada Bulan",
      "Kerana kawasan di luar umbra lebih tinggi dari aras laut",
      "Kerana penumbra menghalang semua cahaya Matahari daripada sampai ke Bumi",
      "Kerana umbra bergerak lebih perlahan daripada penumbra"
    ],
    "correctIndex": 0,
    "explanation": "Umbra ialah bahagian bayang-bayang paling gelap di mana semua cahaya Matahari terhalang. Kawasan yang hanya berada dalam penumbra masih menerima sebahagian cahaya dan mengalami gerhana separa.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_08",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Semasa gerhana Bulan, Bulan kelihatan merah walaupun berada dalam bayang-bayang Bumi. Apakah penjelasan paling tepat?",
    "options": [
      "Bintang-bintang lain menerangi Bulan semasa gerhana",
      "Cahaya Matahari dibiaskan oleh atmosfera Bumi dan warna merah paling banyak sampai ke Bulan",
      "Bulan mengeluarkan cahaya merahnya sendiri semasa gerhana",
      "Cahaya Bulan dipantulkan oleh laut di permukaan Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Atmosfera Bumi membiaskan cahaya Matahari ke arah Bulan. Gelombang warna biru lebih banyak terselerak manakala warna merah dapat menembusi atmosfera dan sampai ke Bulan.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_09",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "H",
    "q": "Seorang pemerhati di Kuala Lumpur tidak dapat melihat gerhana Matahari penuh, tetapi pemerhati di kawasan lain di Malaysia dapat melihatnya. Apakah penjelasan paling tepat?",
    "options": [
      "Umbra Bulan meliputi kawasan yang terhad sahaja di permukaan Bumi",
      "Kuala Lumpur berada di hemisfera selatan manakala kawasan lain di hemisfera utara",
      "Gerhana Matahari hanya berlaku di kawasan yang mempunyai laut",
      "Kuala Lumpur berada lebih tinggi sehingga bayang-bayang Bulan tidak sampai"
    ],
    "correctIndex": 0,
    "explanation": "Umbra Bulan hanya meliputi jalur sempit di permukaan Bumi. Kawasan di luar jalur itu hanya mengalami gerhana separa atau tidak melihat gerhana langsung walaupun berada di negara yang sama.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b3_s3_10",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "H",
    "q": "Seorang murid menyatakan bahawa gerhana Matahari berlaku apabila Bumi melintas di antara Matahari dan Bulan. Murid kedua pula menyatakan gerhana Bulan berlaku apabila Bulan melintas di antara Matahari dan Bumi. Penilaian manakah paling tepat?",
    "options": [
      "Kedua-dua pernyataan itu betul hanya jika Bulan berada paling jauh",
      "Kedua-dua pernyataan itu betul",
      "Kedua-dua pernyataan itu tertukar antara satu sama lain",
      "Hanya pernyataan murid pertama yang betul"
    ],
    "correctIndex": 2,
    "explanation": "Kedua-dua murid telah menukar kedudukan jasad. Gerhana Matahari berlaku apabila Bulan di antara Matahari dan Bumi, manakala gerhana Bulan berlaku apabila Bumi di antara Matahari dan Bulan.",
    "ref": "Bab 3, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_01",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah alat yang digunakan untuk mengukur suhu udara?",
    "options": [
      "Barometer",
      "Termometer",
      "Higrometer",
      "Anemometer"
    ],
    "correctIndex": 1,
    "explanation": "Termometer mengukur suhu udara dalam unit darjah Celsius. Barometer mengukur tekanan udara dan higrometer mengukur kelembapan udara.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_02",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah alat yang digunakan untuk mengukur jumlah hujan yang turun di sesuatu kawasan?",
    "options": [
      "Termometer maksimum",
      "Anemometer",
      "Tolok hujan",
      "Barometer"
    ],
    "correctIndex": 2,
    "explanation": "Tolok hujan mengumpul dan mengukur jumlah hujan dalam unit milimeter. Barometer pula mengukur tekanan udara, bukan jumlah hujan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_03",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah maksud kelembapan udara?",
    "options": [
      "Berat udara yang menekan permukaan bumi pada sesuatu tempat",
      "Kelajuan angin yang bergerak dari kawasan tekanan tinggi",
      "Jumlah haba yang diterima dari Matahari setiap hari",
      "Jumlah wap air yang terkandung dalam udara pada sesuatu masa"
    ],
    "correctIndex": 3,
    "explanation": "Kelembapan udara ialah kandungan wap air dalam udara dan diukur dengan higrometer dalam unit peratus. Barometer pula mengukur tekanan udara, bukan kelembapan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_04",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah perbezaan antara cuaca dengan iklim?",
    "options": [
      "Cuaca ialah keadaan atmosfera jangka pendek manakala iklim ialah purata jangka panjang",
      "Cuaca ialah purata jangka panjang manakala iklim ialah keadaan atmosfera jangka pendek",
      "Cuaca hanya berlaku di kawasan tropika manakala iklim di kawasan sederhana",
      "Cuaca dan iklim merujuk kepada perkara yang sama tetapi unitnya berbeza"
    ],
    "correctIndex": 0,
    "explanation": "Cuaca ialah keadaan atmosfera pada sesuatu masa dalam jangka pendek seperti hari ini, manakala iklim ialah purata keadaan cuaca sesuatu kawasan dalam tempoh panjang sekurang-kurangnya 30 tahun.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_05",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah alat yang digunakan untuk mengukur tekanan udara?",
    "options": [
      "Tolok hujan",
      "Anemometer",
      "Higrometer",
      "Barometer"
    ],
    "correctIndex": 3,
    "explanation": "Barometer mengukur tekanan udara, lazimnya dalam unit milibar atau hektopascal. Anemometer mengukur kelajuan angin dan higrometer mengukur kelembapan udara.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_06",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Sebuah stesen kajicuaca merekodkan suhu 32 darjah Celsius pada pukul 2 petang dan 24 darjah Celsius pada pukul 5 pagi. Apakah julat suhu harian di stesen itu?",
    "options": [
      "56 darjah Celsius",
      "6 darjah Celsius",
      "8 darjah Celsius",
      "10 darjah Celsius"
    ],
    "correctIndex": 2,
    "explanation": "Julat suhu harian ialah beza antara suhu tertinggi dengan suhu terendah, iaitu 32 - 24 = 8 darjah Celsius. Menjumlahkan kedua-dua nilai tidak menghasilkan julat.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_07",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Seorang murid ingin mengukur kelembapan udara di dalam bilik darjah. Alat manakah yang paling sesuai dan apakah unitnya?",
    "options": [
      "Termometer, diukur dalam darjah Celsius",
      "Higrometer, diukur dalam peratus",
      "Barometer, diukur dalam milimeter",
      "Anemometer, diukur dalam kilometer sejam"
    ],
    "correctIndex": 1,
    "explanation": "Higrometer mengukur kandungan wap air dalam udara, dan kelembapan relatif dinyatakan dalam peratus. Termometer mengukur suhu, bukan kelembapan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_08",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Sebuah stesen merekodkan suhu 30 darjah Celsius, kelembapan 85 peratus dan hujan 12 mm bagi satu hari tertentu. Data tersebut menerangkan:",
    "options": [
      "Bacaan suhu purata tahunan stesen tersebut",
      "Keadaan cuaca pada hari itu di stesen tersebut",
      "Iklim stesen tersebut bagi tempoh 30 tahun",
      "Unsur iklim bagi seluruh dunia"
    ],
    "correctIndex": 1,
    "explanation": "Bacaan beberapa unsur atmosfera bagi satu hari menerangkan keadaan cuaca hari itu. Iklim memerlukan purata jangka panjang sekurang-kurangnya 30 tahun.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_09",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Suhu di sebuah kawasan pergunungan menurun kira-kira 6 darjah Celsius bagi setiap kenaikan 1 000 m. Suhu di kaki bukit pada aras 500 m ialah 28 darjah Celsius. Apakah anggaran suhu di aras 2 500 m?",
    "options": [
      "24 darjah Celsius",
      "12 darjah Celsius",
      "16 darjah Celsius",
      "22 darjah Celsius"
    ],
    "correctIndex": 2,
    "explanation": "Beza ketinggian = 2 500 - 500 = 2 000 m. Penurunan suhu = 6 x 2 = 12 darjah Celsius, jadi anggaran suhu = 28 - 12 = 16 darjah Celsius.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s1_10",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Sebuah stesen merekodkan suhu bagi empat hari berturut-turut: 30, 32, 28 dan 34 darjah Celsius. Berapakah suhu purata bagi empat hari itu?",
    "options": [
      "31 darjah Celsius",
      "32 darjah Celsius",
      "34 darjah Celsius",
      "29 darjah Celsius"
    ],
    "correctIndex": 0,
    "explanation": "Jumlah suhu = 30 + 32 + 28 + 34 = 124 darjah Celsius. Suhu purata = 124 / 4 = 31 darjah Celsius. Pilihan 32 ialah bacaan kedua, bukan purata.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_01",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Hujan yang berlaku apabila udara lembap panas naik secara menegak akibat pemanasan permukaan bumi dipanggil:",
    "options": [
      "Hujan bukit",
      "Hujan perolakan",
      "Hujan frontal",
      "Hujan asid"
    ],
    "correctIndex": 1,
    "explanation": "Hujan perolakan berlaku apabila permukaan bumi dipanaskan, udara lembap naik, menyejuk dan wap air terkondensasi menjadi awan yang akhirnya menurunkan hujan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_02",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Hujan yang berlaku apabila udara lembap dipaksa naik menaiki lereng gunung dipanggil:",
    "options": [
      "Hujan perolakan",
      "Hujan frontal",
      "Hujan batu",
      "Hujan bukit"
    ],
    "correctIndex": 3,
    "explanation": "Hujan bukit atau hujan orografik berlaku apabila udara lembap dipaksa naik di lereng gunung, menyejuk lalu membentuk awan dan hujan di lereng yang menghadap arah angin.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_03",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah faktor utama yang menyebabkan Malaysia mengalami suhu tinggi dan hujan sepanjang tahun?",
    "options": [
      "Kedudukan Malaysia di kawasan altitud yang sangat tinggi",
      "Kedudukan Malaysia berhampiran garisan khatulistiwa",
      "Kedudukan Malaysia di kawasan latitud sederhana sejuk",
      "Kedudukan Malaysia di tengah-tengah benua Asia"
    ],
    "correctIndex": 1,
    "explanation": "Malaysia terletak berhampiran garisan khatulistiwa dan menerima sinaran Matahari secara menegak hampir sepanjang tahun, jadi suhu tinggi dan hujan kerap berlaku.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_04",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah angin monsun?",
    "options": [
      "Angin yang hanya berlaku semasa kejadian taufan",
      "Angin yang bertiup dari laut ke darat pada waktu siang sahaja",
      "Angin bermusim yang bertukar arah setiap tahun disebabkan perbezaan tekanan udara",
      "Angin tempatan yang bertiup di kawasan pergunungan pada waktu malam"
    ],
    "correctIndex": 2,
    "explanation": "Monsun ialah angin bermusim yang bertukar arah mengikut musim, iaitu Monsun Timur Laut dan Monsun Barat Daya, akibat perbezaan tekanan udara antara daratan Asia dan lautan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_05",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah kesan pergerakan angin lembap naik di lereng gunung terhadap suhu udara di puncak berbanding di kaki gunung?",
    "options": [
      "Suhu udara di kaki gunung dan puncak sentiasa sama",
      "Suhu udara di puncak lebih tinggi daripada di kaki gunung",
      "Suhu udara tidak berubah kerana angin tidak membawa haba",
      "Suhu udara di kaki gunung menjadi lebih tinggi daripada di puncak"
    ],
    "correctIndex": 3,
    "explanation": "Udara menyejuk apabila naik dan suhu turun kira-kira 6 darjah Celsius setiap 1 000 m. Oleh itu suhu di kaki gunung lebih tinggi daripada suhu di puncak.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_06",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Udara lembap naik menaiki lereng gunung yang menghadap angin dan menurunkan hujan di lereng tersebut. Apakah keadaan yang dijangka di lereng sebelah sana iaitu lereng terlindung?",
    "options": [
      "Udara menjadi lebih lembap kerana semua wap air berkumpul di sana",
      "Kawasan itu menerima hujan yang lebih lebat daripada lereng menghadap angin",
      "Suhu di lereng terlindung menurun lebih banyak daripada lereng menghadap angin",
      "Udara menjadi kering dan kawasan itu menerima hujan yang jauh lebih sedikit"
    ],
    "correctIndex": 3,
    "explanation": "Selepas hujan turun di lereng yang menghadap angin, udara yang sampai ke lereng terlindung sudah kering. Kawasan di lereng terlindung ialah kawasan bayang hujan yang menerima hujan lebih sedikit.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_07",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Apakah pengaruh laut terhadap iklim Malaysia?",
    "options": [
      "Laut mengekalkan kelembapan udara yang tinggi dan menyederhanakan suhu kawasan pesisir",
      "Laut menyebabkan suhu pesisir sentiasa lebih rendah daripada kawasan pedalaman",
      "Laut mengurangkan jumlah hujan di kawasan pesisir sepanjang tahun",
      "Laut menghalang pembentukan angin monsun di dalam negara"
    ],
    "correctIndex": 0,
    "explanation": "Laut yang mengelilingi Malaysia membekalkan wap air kepada atmosfera, jadi kelembapan udara tinggi dan hujan kerap. Air yang menyerap serta melepaskan haba perlahan juga menyederhanakan julat suhu pesisir.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_08",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Pada waktu siang, tanah di daratan menjadi panas lebih cepat daripada laut. Apakah kesannya terhadap arah angin?",
    "options": [
      "Angin tidak bertiup kerana kedua-dua kawasan mempunyai tekanan yang sama",
      "Angin bertiup secara menegak ke atas di kawasan laut sahaja",
      "Angin bertiup dari laut ke darat kerana tekanan udara di darat lebih rendah",
      "Angin bertiup dari darat ke laut kerana tekanan udara di darat lebih tinggi"
    ],
    "correctIndex": 2,
    "explanation": "Daratan yang panas menaikkan udara sehingga tekanan di darat menjadi lebih rendah berbanding laut. Angin lalu bertiup dari laut yang lebih bertekanan tinggi menuju ke darat sebagai bayu laut.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_09",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Sebuah kawasan pedalaman di Semenanjung Malaysia mengalami lebih banyak hujan pada petang berbanding kawasan pesisir berdekatan. Situasi ini paling sesuai dijelaskan oleh:",
    "options": [
      "Hujan perolakan yang terbentuk apabila udara lembap panas naik pada sebelah tengah hari hingga petang",
      "Hujan frontal yang terbentuk apabila dua jisim udara bertemu di kawasan pedalaman",
      "Hujan bukit yang terbentuk di kawasan tanah pamah pedalaman",
      "Hujan asid yang berpunca daripada pencemaran kilang di pedalaman"
    ],
    "correctIndex": 0,
    "explanation": "Hujan perolakan lazimnya berlaku pada waktu petang selepas pemanasan maksimum permukaan bumi pada tengah hari. Hujan bukit pula memerlukan lereng gunung dan hujan frontal berlaku di kawasan latitud tinggi.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s2_10",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Sebuah lembah antara dua banjaran gunung menerima hujan yang sangat sedikit berbanding lereng yang menghadap angin. Analisis manakah paling tepat?",
    "options": [
      "Lembah itu lebih sejuk sehingga hujan tidak dapat terbentuk langsung",
      "Lembah itu terletak lebih dekat dengan laut sehingga angin tidak sampai",
      "Lembah itu terletak di kawasan bayang hujan kerana udara tiba dalam keadaan kering selepas hujan turun di lereng menghadap angin",
      "Lembah itu lebih rendah sehingga semua wap air tenggelam ke bawah dan hilang"
    ],
    "correctIndex": 2,
    "explanation": "Udara lembap kehilangan sebahagian besar wap airnya apabila dipaksa naik di lereng menghadap angin. Apabila ia turun di seberang, udara sudah kering sehingga lembah di kawasan bayang hujan menerima hujan amat sedikit.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_01",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Bilakah Monsun Timur Laut bertiup di Malaysia?",
    "options": [
      "Bulan April hingga Jun",
      "Bulan November hingga Mac",
      "Bulan Mei hingga September",
      "Bulan Julai hingga Oktober"
    ],
    "correctIndex": 1,
    "explanation": "Monsun Timur Laut bertiup kira-kira dari bulan November hingga Mac. Monsun Barat Daya pula bertiup kira-kira dari bulan Mei hingga September.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_02",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Bilakah Monsun Barat Daya bertiup di Malaysia?",
    "options": [
      "Bulan Mei hingga September",
      "Bulan November hingga Mac",
      "Bulan Disember hingga Februari",
      "Bulan Januari hingga April"
    ],
    "correctIndex": 0,
    "explanation": "Monsun Barat Daya bertiup kira-kira dari bulan Mei hingga September dan umumnya membawa cuaca yang lebih kering di kebanyakan kawasan Malaysia.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_03",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Kawasan manakah di Malaysia yang paling terjejas dengan hujan lebat semasa Monsun Timur Laut?",
    "options": [
      "Selangor dan Melaka",
      "Pantai Barat Semenanjung dan Perak",
      "Pantai Timur Semenanjung dan Sarawak",
      "Pulau Pinang dan Kedah"
    ],
    "correctIndex": 2,
    "explanation": "Angin Monsun Timur Laut yang membawa wap air dari Laut China Selatan bertiup ke arah Pantai Timur Semenanjung dan Sarawak, menyebabkan hujan lebat dan banjir di kawasan tersebut.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_04",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah ciri utama cuaca di kebanyakan kawasan Malaysia semasa Monsun Barat Daya?",
    "options": [
      "Cuaca lebih lembap dan hujan lebat setiap hari",
      "Suhu menurun sehingga berlakunya salji",
      "Angin bertiup lebih perlahan dan kabus tebal berterusan",
      "Cuaca lebih kering dan kurang hujan"
    ],
    "correctIndex": 3,
    "explanation": "Semasa Monsun Barat Daya, angin datang dari arah barat daya yang lebih kering sehingga kebanyakan kawasan mengalami cuaca lebih kering, walaupun beberapa kawasan pantai barat masih menerima hujan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_05",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah maksud monsun?",
    "options": [
      "Angin bermusim yang bertukar arah mengikut musim",
      "Hujan yang turun dengan tiba-tiba pada waktu petang",
      "Tekanan udara yang menurun pada waktu malam",
      "Keadaan suhu yang berubah setiap jam"
    ],
    "correctIndex": 0,
    "explanation": "Monsun ialah angin bermusim yang bertiup dari daratan ke lautan atau sebaliknya mengikut musim, dan ia mempengaruhi musim hujan di Malaysia.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_06",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Seorang nelayan di pantai timur Semenanjung Malaysia tidak keluar ke laut pada bulan Disember kerana keadaan laut yang sangat bergelora. Monsun manakah yang menyebabkan keadaan ini?",
    "options": [
      "Bayu gunung",
      "Monsun Timur Laut",
      "Monsun Barat Daya",
      "Bayu laut"
    ],
    "correctIndex": 1,
    "explanation": "Monsun Timur Laut yang bertiup dari November hingga Mac membawa angin kencang dan laut bergelora di Laut China Selatan, lalu menjejaskan kegiatan nelayan di pantai timur.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_07",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Sebuah ladang di kawasan pantai barat Semenanjung menghadapi risiko hujan lebat pada bulan November. Apakah penjelasan yang paling sesuai bagi keadaan itu?",
    "options": [
      "Monsun Barat Daya yang membawa udara kering dari Lautan Hindi",
      "Bayu laut yang kuat pada waktu petang di kawasan pantai",
      "Tekanan udara yang tinggi berterusan di kawasan ladang",
      "Monsun Timur Laut yang bertiup melintasi Laut China Selatan bertembung dengan angin dari Selat Melaka"
    ],
    "correctIndex": 3,
    "explanation": "Pada akhir tahun, semasa peralihan monsun, angin Monsun Timur Laut boleh bertembung dengan angin dari Selat Melaka di kawasan pantai barat, lalu menghasilkan hujan lebat dan ribut petir, terutamanya pada bulan November. Pantai barat biasanya terlindung daripada Monsun Timur Laut oleh Banjaran Titiwangsa, tetapi pertembungan angin ini tetap boleh membawa hujan.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_08",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Sawah padi di Pantai Timur Semenanjung amat bergantung pada hujan Monsun Timur Laut. Apakah kesan hujan tersebut terhadap penanaman padi di kawasan itu?",
    "options": [
      "Hujan lebat memusnahkan semua tanaman sehingga padi tidak boleh ditanam",
      "Cuaca kering menyebabkan padi memerlukan pengairan tambahan sepanjang tahun",
      "Suhu yang rendah menyebabkan padi membeku dan mati",
      "Bekalan air yang banyak membolehkan sawah padi ditanam dengan lebih meluas"
    ],
    "correctIndex": 3,
    "explanation": "Hujan lebat semasa Monsun Timur Laut membekalkan air yang mencukupi untuk sawah padi, dan kawasan pantai timur seperti Kelantan serta Terengganu memang terkenal dengan penanaman padi.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_09",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Sebuah syarikat pelancongan ingin merancang pakej ke Pulau Perhentian. Data menunjukkan pulau itu menghadapi angin kencang dan ombak besar antara bulan November hingga Februari. Cadangan manakah paling tepat?",
    "options": [
      "Menjadualkan pakej utama pada bulan Januari kerana hujan lebat menarik pelancong",
      "Menjadualkan pakej utama sepanjang tahun tanpa mengambil kira monsun",
      "Menjadualkan pakej utama pada bulan Jun kerana Monsun Barat Daya membawa cuaca lebih tenang di pantai timur",
      "Menjadualkan pakej utama pada bulan Disember kerana Monsun Timur Laut membawa laut yang tenang"
    ],
    "correctIndex": 2,
    "explanation": "Pulau Perhentian terletak di pantai timur dan terjejas teruk oleh Monsun Timur Laut antara November hingga Februari. Bulan Jun berada dalam tempoh Monsun Barat Daya yang lebih kering dan tenang, sesuai untuk aktiviti laut.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b4_s3_10",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Dua kawasan di Malaysia menerima taburan hujan yang berbeza. Kawasan X menerima hujan paling banyak pada bulan Disember manakala kawasan Y menerima hujan paling banyak pada bulan Oktober hingga November. Apakah tafsiran paling munasabah?",
    "options": [
      "X berkemungkinan di pantai timur yang terjejas Monsun Timur Laut manakala Y mungkin terjejas pertembungan angin monsun pada akhir tahun",
      "X berada di kawasan gurun manakala Y berada di kawasan tundra",
      "X dan Y berada pada latitud yang sama tetapi berbeza altitud",
      "X menerima hujan perolakan manakala Y hanya menerima hujan bukit"
    ],
    "correctIndex": 0,
    "explanation": "Hujan lebat Disember di pantai timur sejajar dengan Monsun Timur Laut. Hujan Oktober hingga November di kawasan lain lazimnya berkaitan pertembungan angin monsun pada tempoh peralihan antara monsun.",
    "ref": "Bab 4, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_01",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Apakah lebuh raya?",
    "options": [
      "Laluan khas untuk basikal dan pejalan kaki di bandar",
      "Jalan raya utama bertaraf tinggi yang membolehkan kenderaan bergerak laju dengan kawalan masuk",
      "Jalan kampung sempit yang menghubungkan rumah penduduk",
      "Laluan kereta api yang dibina di atas tanah tinggi"
    ],
    "correctIndex": 1,
    "explanation": "Lebuh raya ialah jalan raya utama bertaraf tinggi dengan kawalan masuk, biasanya mempunyai beberapa lorong dan had laju lebih tinggi untuk perjalanan jauh antara bandar.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_02",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Apakah nama projek landasan kereta api yang menghubungkan pantai timur Semenanjung Malaysia dengan Pelabuhan Klang di pantai barat?",
    "options": [
      "Laluan Kereta Api Tanah Melayu",
      "Transit Aliran Ringan Lembah Klang",
      "Laluan Rel Antara Bandar Sabah",
      "Laluan Rel Pantai Timur (ECRL)"
    ],
    "correctIndex": 3,
    "explanation": "Laluan Rel Pantai Timur atau East Coast Rail Link menghubungkan kawasan pantai timur seperti Kuantan dan Tumpat dengan Pelabuhan Klang, dan bertujuan merancakkan pembangunan ekonomi di pantai timur.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_03",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah contoh pengangkutan awam darat?",
    "options": [
      "Bas ekspres",
      "Lori barang milik syarikat",
      "Motosikal peribadi",
      "Kereta persendirian"
    ],
    "correctIndex": 0,
    "explanation": "Bas ekspres ialah pengangkutan awam kerana perkhidmatannya terbuka kepada orang ramai dengan bayaran tambang. Kereta dan motosikal persendirian serta lori barang bukan pengangkutan awam.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_04",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Apakah faktor utama yang mempengaruhi pembinaan jaringan jalan raya di kawasan tanah tinggi?",
    "options": [
      "Kekurangan kenderaan bermotor di kawasan tersebut",
      "Bentuk muka bumi yang curam dan memerlukan kos pembinaan lebih tinggi",
      "Bilangan penduduk yang sentiasa lebih ramai daripada kawasan tanah pamah",
      "Ketiadaan hujan sepanjang tahun di kawasan tanah tinggi"
    ],
    "correctIndex": 1,
    "explanation": "Pembinaan jalan raya di kawasan tanah tinggi memerlukan pemotongan bukit, pembinaan jambatan dan terowong serta kos penyelenggaraan lebih tinggi kerana bentuk muka bumi yang curam.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_05",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Apakah fungsi utama stesen bas dan terminal bas dalam jaringan pengangkutan darat?",
    "options": [
      "Tempat menyimpan kereta yang rosak secara kekal",
      "Tempat menjual tiket kapal laut dan kapal terbang",
      "Tempat membaiki janakuasa elektrik untuk bandar",
      "Tempat kenderaan berhenti untuk menaikkan dan menurunkan penumpang"
    ],
    "correctIndex": 3,
    "explanation": "Stesen dan terminal bas berfungsi sebagai titik persilangan laluan bas, iaitu tempat penumpang menaiki dan menuruni bas serta bertukar laluan.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_06",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Sebuah lebuh raya baharu dibina yang memendekkan masa perjalanan antara dua bandar daripada 4 jam kepada 2.5 jam. Apakah kesan utama pembinaan itu terhadap kegiatan ekonomi penduduk di sepanjang laluan?",
    "options": [
      "Kegiatan pertanian dihentikan kerana jalan berturap",
      "Kos pengangkutan barang meningkat kerana jalan lebih panjang",
      "Perniagaan dan industri lebih mudah berkembang kerana barang dapat dihantar lebih cepat",
      "Semua penduduk berpindah ke luar negara"
    ],
    "correctIndex": 2,
    "explanation": "Masa perjalanan yang lebih pendek mengurangkan kos pengangkutan dan memudahkan penghantaran barang serta pergerakan pekerja, lalu merangsang pertumbuhan perniagaan dan industri.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_07",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Apakah perbezaan utama antara pengangkutan awam dengan pengangkutan persendirian?",
    "options": [
      "Pengangkutan awam digunakan bersama oleh orang ramai dengan bayaran tambang, manakala pengangkutan persendirian dimiliki oleh individu",
      "Pengangkutan awam hanya bergerak di atas rel, manakala pengangkutan persendirian di jalan raya",
      "Pengangkutan awam tidak memerlukan pemandu, manakala pengangkutan persendirian memerlukan pemandu",
      "Pengangkutan awam hanya wujud di kawasan luar bandar"
    ],
    "correctIndex": 0,
    "explanation": "Ciri utama pengangkutan awam ialah perkhidmatan kepada umum dengan tambang, seperti bas, kereta api dan teksi. Pengangkutan persendirian dimiliki atau digunakan oleh individu untuk kegunaan sendiri.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_08",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Mengapakah jaringan pengangkutan darat lebih padat di kawasan pantai barat Semenanjung Malaysia berbanding kawasan pedalaman?",
    "options": [
      "Kerana bentuk muka bumi pantai barat lebih bergunung-ganang",
      "Kerana kawasan pantai barat lebih rata, padat penduduk dan menjadi tumpuan kegiatan ekonomi",
      "Kerana kawasan pantai barat tidak mempunyai sungai yang perlu diseberangi",
      "Kerana kawasan pedalaman tidak boleh dihubungkan dengan jalan raya langsung"
    ],
    "correctIndex": 1,
    "explanation": "Tanah pamah yang rata, kepadatan penduduk yang tinggi dan tumpuan industri serta pelabuhan di pantai barat menjadikan permintaan terhadap jalan raya dan landasan kereta api lebih tinggi.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_09",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Sebuah bandar kecil yang dahulunya terpencil kini dilalui oleh lebuh raya baharu. Dua tahun kemudian, bilangan kilang dan pusat perniagaan di bandar itu meningkat. Kesimpulan manakah paling tepat?",
    "options": [
      "Kemudahan pengangkutan menjadi pemangkin pembangunan ekonomi tempatan",
      "Kilang itu berpindah ke bandar kerana jalan raya menjadi lebih sunyi",
      "Penduduk bandar berhenti bekerja kerana jalan raya dibina",
      "Lebuh raya mengurangkan permintaan terhadap pengangkutan barang"
    ],
    "correctIndex": 0,
    "explanation": "Akses yang baik mengurangkan kos penghantaran dan meluaskan pasaran, jadi pelabur lebih berminat membuka kilang dan perniagaan di kawasan tersebut. Inilah kesan pengganda pembangunan pengangkutan.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s1_10",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Sebuah kerajaan tempatan ingin mengurangkan kesesakan lalu lintas di pusat bandar. Cadangan manakah paling seimbang dari segi keperluan penduduk?",
    "options": [
      "Melarang penduduk keluar rumah pada waktu puncak",
      "Membina lebih banyak tempat letak kereta percuma di pusat bandar",
      "Menambah laluan bas dan memperbaiki kemudahan pengangkutan awam supaya lebih ramai memilihnya",
      "Menutup semua jalan raya di pusat bandar kepada semua kenderaan"
    ],
    "correctIndex": 2,
    "explanation": "Meningkatkan kualiti dan liputan pengangkutan awam mengurangkan bilangan kenderaan persendirian di jalan raya tanpa menyekat keperluan penduduk untuk bergerak.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_01",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah fungsi utama sesebuah pelabuhan?",
    "options": [
      "Tempat mengukur kelajuan angin di kawasan pantai",
      "Tempat berlabuhnya kapal serta mengendalikan barang kargo dan penumpang",
      "Tempat berlepas dan mendaratnya kapal terbang penumpang",
      "Tempat menyimpan hasil pertanian sebelum ditanam"
    ],
    "correctIndex": 1,
    "explanation": "Pelabuhan ialah tempat kapal berlabuh dan berperanan mengendalikan kargo serta penumpang. Peranan utamanya dalam perdagangan antarabangsa ialah pengendalian kargo.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_02",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah lapangan terbang antarabangsa utama di Malaysia?",
    "options": [
      "Lapangan Terbang Antarabangsa Kuala Lumpur (KLIA)",
      "Lapangan Terbang Taiping",
      "Lapangan Terbang Bintulu",
      "Lapangan Terbang Subang"
    ],
    "correctIndex": 0,
    "explanation": "KLIA ialah pintu masuk antarabangsa utama Malaysia. Lapangan terbang seperti Subang, Taiping dan Bintulu pula lebih bersifat domestik atau serantau.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_03",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah peranan utama Selat Melaka dalam pengangkutan air?",
    "options": [
      "Kawasan penangkapan ikan yang tertutup kepada kapal asing",
      "Laluan alternatif bagi kapal terbang kargo",
      "Laluan perkapalan antarabangsa yang menghubungkan Lautan Hindi dengan Laut China Selatan",
      "Laluan kereta api yang menghubungkan Malaysia dengan Thailand"
    ],
    "correctIndex": 2,
    "explanation": "Selat Melaka ialah salah satu laluan perkapalan tersibuk di dunia kerana menghubungkan Lautan Hindi dengan Laut China Selatan dan menjadi laluan dagang utama antara Timur dan Barat.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_04",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah perbezaan antara lapangan terbang antarabangsa dengan lapangan terbang domestik?",
    "options": [
      "Antarabangsa tidak mempunyai menara kawalan manakala domestik mempunyai menara kawalan",
      "Antarabangsa terletak di kawasan pedalaman manakala domestik di kawasan bandar",
      "Antarabangsa mengendalikan penerbangan ke luar negara manakala domestik dalam negara sahaja",
      "Antarabangsa hanya untuk pesawat kargo manakala domestik untuk penumpang"
    ],
    "correctIndex": 2,
    "explanation": "Lapangan terbang antarabangsa mempunyai kemudahan kastam dan imigresen untuk penerbangan merentas negara. Lapangan terbang domestik hanya mengendalikan penerbangan dalam negara.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_05",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah jenis barang yang paling sesuai diangkut menggunakan kapal kargo melalui laut?",
    "options": [
      "Barang mudah rosak yang perlu dihantar dalam beberapa jam",
      "Barang pukal yang berat seperti bijih timah dan minyak sawit",
      "Surat rasmi yang perlu sampai dalam satu hari",
      "Haiwan peliharaan pelancong asing"
    ],
    "correctIndex": 1,
    "explanation": "Kapal kargo sesuai untuk barang pukal dalam kuantiti besar kerana kos pengangkutan per tan lebih murah, walaupun masa perjalanan lebih lama berbanding kapal terbang.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_06",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Sebuah syarikat ingin mengeksport buah-buahan segar ke Jepun dalam masa dua hari. Mod pengangkutan manakah paling sesuai?",
    "options": [
      "Kapal kargo laut",
      "Kapal terbang",
      "Kereta api barang",
      "Lori barang melalui jalan darat"
    ],
    "correctIndex": 1,
    "explanation": "Buah segar mudah rosak dan perlu sampai dengan cepat. Pengangkutan udara ialah pilihan terbaik walaupun kos lebih tinggi kerana masa perjalanan jauh lebih singkat.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_07",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Mengapakah pelabuhan Klang menjadi pelabuhan terpenting di Malaysia?",
    "options": [
      "Kerana pelabuhan itu terletak di kawasan tanah tinggi yang sejuk",
      "Kerana semua kapal asing dilarang menggunakan pelabuhan lain",
      "Kerana pelabuhan itu hanya mengendalikan penumpang pelancong",
      "Kerana kedudukannya di Selat Melaka dan berhampiran kawasan industri Lembah Klang"
    ],
    "correctIndex": 3,
    "explanation": "Kedudukan strategik di Selat Melaka serta sokongan kawasan perindustrian Lembah Klang menjadikan Pelabuhan Klang pusat pengendalian kargo utama negara.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_08",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Apakah sumbangan pengangkutan udara kepada sektor pelancongan Malaysia?",
    "options": [
      "Mengurangkan bilangan pelancong kerana tambang pesawat tinggi",
      "Menghalang pelancong daripada mengunjungi pulau",
      "Menggantikan sepenuhnya peranan pelabuhan dalam perdagangan",
      "Memudahkan pelancong asing tiba dengan cepat dan membuka akses ke destinasi jauh"
    ],
    "correctIndex": 3,
    "explanation": "Penerbangan antarabangsa menghubungkan Malaysia dengan negara lain dalam masa beberapa jam sahaja, dan penerbangan domestik memudahkan pelancong bergerak ke destinasi seperti Langkawi dan Sabah.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_09",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Sebuah syarikat pengeluar perabot ingin mengeksport 40 tan perabot ke Eropah dan mahu kos pengangkutan ditekan serendah mungkin. Syarikat kedua pula mengeksport ubat-ubatan yang perlu sampai dalam 24 jam. Pilihan manakah paling tepat bagi kedua-dua syarikat?",
    "options": [
      "Kedua-dua syarikat menggunakan kereta api",
      "Kedua-dua syarikat menggunakan lori melalui jalan darat",
      "Perabot melalui kapal kargo dan ubat melalui kapal terbang",
      "Perabot melalui kapal terbang dan ubat melalui kapal kargo"
    ],
    "correctIndex": 2,
    "explanation": "Perabot ialah barang pukal yang berat tetapi tidak mudah rosak, jadi kapal kargo paling menjimatkan kos. Ubat perlu sampai segera dan memerlukan kawalan suhu, maka pengangkutan udara lebih sesuai.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s2_10",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Apakah kesan jangka panjang jika Selat Melaka menjadi tidak selamat untuk perkapalan antarabangsa?",
    "options": [
      "Kapal dagang terpaksa menggunakan laluan lebih jauh sehingga kos perdagangan Malaysia meningkat",
      "Semua negara akan berhenti berdagang melalui laut selama-lamanya",
      "Pelabuhan di Malaysia akan menjadi lebih sibuk kerana kapal berkumpul",
      "Pengangkutan udara tidak lagi diperlukan untuk eksport"
    ],
    "correctIndex": 0,
    "explanation": "Laluan alternatif seperti melalui Selat Sunda atau laut terbuka menambah jarak, masa dan kos bahan api. Kos tambahan itu akhirnya meningkatkan harga barang dagangan Malaysia.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_01",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah kesan negatif perkembangan pengangkutan terhadap alam sekitar?",
    "options": [
      "Pertambahan peluang pekerjaan di bandar",
      "Perluasan pasaran barang tempatan",
      "Pencemaran udara akibat asap kenderaan bermotor",
      "Peningkatan bilangan pelancong asing"
    ],
    "correctIndex": 2,
    "explanation": "Kenderaan bermotor membebaskan gas seperti karbon monoksida dan karbon dioksida yang mencemarkan udara. Pilihan lain ialah kesan positif terhadap ekonomi dan sosial.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_02",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah punca utama pencemaran udara di kawasan bandar besar?",
    "options": [
      "Penanaman pokok di tepi jalan raya",
      "Pembinaan taman rekreasi di tengah bandar",
      "Asap daripada kenderaan bermotor dan kilang",
      "Hujan yang turun pada waktu petang"
    ],
    "correctIndex": 2,
    "explanation": "Kenderaan bermotor dan kilang membebaskan gas serta habuk ke udara. Penanaman pokok pula membantu menapis sebahagian bahan pencemar dan bukan puncanya.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_03",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Kesesakan lalu lintas pada waktu puncak tergolong dalam kategori kesan yang manakah?",
    "options": [
      "Kesan budaya",
      "Kesan sosial",
      "Kesan alam sekitar",
      "Kesan politik"
    ],
    "correctIndex": 1,
    "explanation": "Kesesakan lalu lintas menjejaskan masa perjalanan, produktiviti kerja dan keselesaan pengguna, jadi ia dikelaskan sebagai kesan sosial. Kesan alam sekitar melibatkan pencemaran.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_04",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah kesan positif pembinaan lebuh raya terhadap ekonomi negara?",
    "options": [
      "Menghalang pelabur asing daripada melabur di kawasan luar bandar",
      "Melancarkan pengangkutan barang dan menggalakkan pertumbuhan ekonomi kawasan",
      "Meningkatkan jumlah kemalangan di jalan kampung",
      "Mengurangkan bilangan pekerja dalam sektor pengangkutan"
    ],
    "correctIndex": 1,
    "explanation": "Lebuh raya mempercepat perjalanan barang dan orang, mengurangkan kos logistik dan merangsang aktiviti ekonomi di sepanjang laluannya.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_05",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah maksud kemalangan jalan raya dalam konteks kesan sosial pengangkutan?",
    "options": [
      "Kejadian yang menyebabkan kecederaan serta kerugian harta benda kepada pengguna jalan raya",
      "Pencemaran gas yang dilepaskan oleh kenderaan ke udara",
      "Kerosakan pada permukaan jalan akibat hujan lebat",
      "Peningkatan bilangan kenderaan yang didaftarkan setiap tahun"
    ],
    "correctIndex": 0,
    "explanation": "Kemalangan jalan raya memberi kesan sosial kerana melibatkan kecederaan, kematian dan kerugian harta benda pengguna. Kerosakan permukaan jalan pula kesan fizikal terhadap infrastruktur.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_06",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Sebuah lebuh raya baharu merentasi kawasan hutan. Apakah kesan negatif yang paling mungkin berlaku terhadap alam sekitar?",
    "options": [
      "Bilangan pokok di dalam hutan bertambah dengan cepat",
      "Suhu kawasan hutan menurun secara mendadak",
      "Sungai di kawasan itu menjadi lebih jernih",
      "Kawasan hutan berkurangan dan habitat hidupan liar terpecah"
    ],
    "correctIndex": 3,
    "explanation": "Pembinaan lebuh raya melibatkan penebangan pokok dan pemisahan habitat. Haiwan sukar bergerak antara dua bahagian hutan yang terpisah, lalu mengancam kelangsungan hidup mereka.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_07",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Bagaimanakah penggunaan pengangkutan awam dapat mengurangkan pencemaran udara di bandar?",
    "options": [
      "Pengangkutan awam bergerak lebih perlahan sehingga kurang asap dikeluarkan",
      "Pengangkutan awam mengalihkan semua kenderaan ke kawasan luar bandar",
      "Satu bas yang membawa 40 penumpang mengurangkan penggunaan 40 kereta persendirian",
      "Bas menggunakan bahan api yang tidak pernah menghasilkan asap langsung"
    ],
    "correctIndex": 2,
    "explanation": "Setiap bas boleh menggantikan puluhan kereta persendirian, jadi jumlah kenderaan di jalan raya dan jumlah gas yang dilepaskan berkurangan walaupun bas menggunakan bahan api.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_08",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Mengapakah kenderaan elektrik dianggap lebih mesra alam berbanding kenderaan yang menggunakan petrol?",
    "options": [
      "Kenderaan elektrik boleh bergerak tanpa jalan raya",
      "Kenderaan elektrik tidak memerlukan tenaga untuk bergerak",
      "Kenderaan elektrik menggunakan petrol yang lebih murah",
      "Kenderaan elektrik tidak mengeluarkan asap ekzos semasa digunakan"
    ],
    "correctIndex": 3,
    "explanation": "Kenderaan elektrik tidak membakar bahan api dalam enjinnya, jadi ia tidak melepaskan gas ekzos. Namun ia masih bergantung kepada sumber elektrik yang perlu dijana dengan cara yang lebih bersih.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_09",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Sebuah bandar mempunyai jumlah kenderaan yang sama tetapi kadar kesesakan meningkat setiap tahun. Data pula menunjukkan bilangan penduduk bandar itu meningkat sebanyak 15 peratus manakala panjang jalan kekal sama. Analisis manakah paling tepat?",
    "options": [
      "Permintaan terhadap pengangkutan meningkat lebih pantas berbanding penyediaan infrastruktur jalan",
      "Kesesakan meningkat kerana jalan raya bertambah pendek setiap tahun",
      "Bilangan kenderaan yang sama tidak boleh menyebabkan kesesakan pada bila-bila masa",
      "Penduduk bandar lebih suka berjalan kaki berbanding memandu"
    ],
    "correctIndex": 0,
    "explanation": "Pertambahan penduduk bermaksud lebih banyak perjalanan walaupun bilangan kenderaan dilaporkan sama dalam data. Kapasiti jalan yang tidak berubah tidak mampu menampung permintaan yang meningkat.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b5_s3_10",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Sebuah kampung bersebelahan lebuh raya baharu mengeluh kerana bunyi bising dan asap kenderaan berterusan walaupun pendapatan penduduk meningkat. Penilaian manakah paling seimbang?",
    "options": [
      "Pembangunan pengangkutan hanya menguntungkan alam sekitar tanpa sebarang kesan buruk",
      "Kuasa beli penduduk yang tinggi secara automatik menghapuskan kesan bunyi bising",
      "Kebisingan lebuh raya tidak berkaitan dengan kegiatan pengangkutan",
      "Pembangunan pengangkutan memberi manfaat ekonomi tetapi menimbulkan kos alam sekitar dan sosial yang perlu dikawal"
    ],
    "correctIndex": 3,
    "explanation": "Pendapatan yang meningkat menunjukkan manfaat ekonomi, manakala bunyi dan asap ialah kos sosial serta alam sekitar. Penilaian yang seimbang mesti mengambil kira kedua-dua aspek dan langkah mengurangkan kesannya.",
    "ref": "Bab 5, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_01",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah maksud telekomunikasi?",
    "options": [
      "Penyimpanan hasil pertanian dalam gudang tertutup",
      "Penghantaran maklumat dari satu tempat ke tempat lain menggunakan isyarat elektronik",
      "Pergerakan manusia dan barang antara dua kawasan",
      "Pembinaan jalan raya untuk mempercepat perjalanan"
    ],
    "correctIndex": 1,
    "explanation": "Telekomunikasi ialah penghantaran maklumat seperti suara, teks dan imej melalui medium seperti kabel, gelombang radio atau satelit. Pengangkutan pula memindahkan manusia dan barang.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_02",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah BUKAN contoh teknologi telekomunikasi?",
    "options": [
      "Kereta api elektrik",
      "Radio",
      "Televisyen",
      "Internet"
    ],
    "correctIndex": 0,
    "explanation": "Radio, televisyen dan internet memindahkan maklumat. Kereta api elektrik pula alat pengangkutan yang memindahkan manusia dan barang, bukan maklumat.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_03",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah peranan utama internet dalam bidang pendidikan?",
    "options": [
      "Menjual alat tulis di peringkat antarabangsa",
      "Mengawal suhu bilik darjah secara automatik",
      "Membolehkan murid mengakses bahan pembelajaran dan kelas dalam talian",
      "Menggantikan semua guru di semua sekolah sepenuhnya"
    ],
    "correctIndex": 2,
    "explanation": "Internet membuka akses kepada bahan pembelajaran, video pengajaran dan kelas dalam talian tanpa mengira lokasi, tetapi ia tidak menggantikan peranan guru sepenuhnya.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_04",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah saluran telekomunikasi yang paling sesuai untuk menyampaikan maklumat secara serentak kepada sejumlah besar penduduk di kawasan terpencil yang tidak mempunyai talian internet?",
    "options": [
      "Papan tanda di jalan raya",
      "Kertas edaran di pintu pagar rumah",
      "Surat rasmi melalui pejabat pos",
      "Siaran radio"
    ],
    "correctIndex": 3,
    "explanation": "Siaran radio menggunakan gelombang yang boleh diterima di kawasan luas termasuk kawasan tanpa talian internet, dan ia menyampaikan maklumat serentak kepada ramai pendengar.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_05",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah peranan telekomunikasi dalam bidang perniagaan?",
    "options": [
      "Membolehkan urusan jual beli dan pembayaran dijalankan secara dalam talian",
      "Menghalang perniagaan daripada berhubung dengan pelanggan",
      "Mengurangkan keperluan pengangkutan barang secara keseluruhan",
      "Menyebabkan semua kedai fizikal ditutup secara automatik"
    ],
    "correctIndex": 0,
    "explanation": "Telekomunikasi membolehkan perniagaan e-dagang, pembayaran elektronik dan komunikasi pantas dengan pembekal serta pelanggan di mana-mana lokasi.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_06",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Seorang peniaga di kampung ingin menjual hasil kraftangannya kepada pelanggan di luar negara. Bagaimanakah telekomunikasi dapat membantu beliau?",
    "options": [
      "Menggunakan radio untuk memaparkan gambar produk secara terperinci",
      "Membuka kedai dalam talian untuk memaparkan produk dan menerima pesanan dari luar negara",
      "Menghantar wang tunai melalui kapal kargo laut",
      "Menunggu pelanggan asing datang sendiri ke kampung"
    ],
    "correctIndex": 1,
    "explanation": "Kedai dalam talian membolehkan produk dipaparkan dengan gambar dan harga, pesanan diterima serta pembayaran dibuat dari mana-mana negara tanpa kehadiran fizikal peniaga.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_07",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Apakah kelebihan utama komunikasi melalui internet berbanding surat biasa?",
    "options": [
      "Maklumat tidak boleh disimpan dalam bentuk elektronik",
      "Maklumat hanya boleh dihantar pada waktu pejabat",
      "Maklumat perlu ditulis dengan tangan terlebih dahulu",
      "Maklumat sampai dalam beberapa saat dan boleh diterima oleh ramai orang serentak"
    ],
    "correctIndex": 3,
    "explanation": "E-mel dan aplikasi pesanan menyampaikan maklumat dalam masa beberapa saat kepada banyak penerima serentak. Surat biasa mengambil masa hari atau minggu untuk sampai.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_08",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Mengapakah telekomunikasi penting dalam pengurusan bencana seperti banjir?",
    "options": [
      "Telekomunikasi dapat menghentikan hujan daripada turun",
      "Telekomunikasi menghalang air sungai daripada melimpah",
      "Telekomunikasi membina tembok penahan banjir secara automatik",
      "Amaran awal dapat disebarkan dengan pantas kepada penduduk untuk berpindah ke tempat selamat"
    ],
    "correctIndex": 3,
    "explanation": "Sistem amaran melalui SMS, radio dan pembesar suara membolehkan penduduk menerima arahan berpindah lebih awal. Telekomunikasi tidak boleh mengubah cuaca atau menghalang air daripada melimpah.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_09",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Sebuah sekolah di kawasan luar bandar menjalankan kelas dalam talian. Sepanjang sesi, murid sering kehilangan sambungan manakala isyarat di kawasan itu tidak stabil. Apakah punca paling munasabah?",
    "options": [
      "Bilangan murid dalam kelas itu terlalu ramai",
      "Komputer sekolah itu menggunakan monitor yang terlalu besar",
      "Liputan rangkaian di kawasan luar bandar lebih terhad berbanding kawasan bandar",
      "Murid itu tidak mempunyai buku teks yang mencukupi"
    ],
    "correctIndex": 2,
    "explanation": "Kawasan luar bandar sering mempunyai kurang menara pemancar dan kabel gentian optik, jadi isyarat rangkaian lebih lemah. Ini masalah liputan infrastruktur, bukan masalah buku atau saiz monitor.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s1_10",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Seorang pelajar mendakwa bahawa telekomunikasi hanya membawa kesan positif kepada masyarakat. Penilaian manakah paling tepat?",
    "options": [
      "Dakwaan itu tidak tepat kerana telekomunikasi turut membuka ruang penyebaran berita palsu dan jenayah siber",
      "Dakwaan itu tepat kerana semua maklumat dalam talian telah disemak oleh kerajaan",
      "Dakwaan itu tepat kerana telekomunikasi tidak boleh disalahgunakan",
      "Dakwaan itu tidak tepat kerana telekomunikasi hanya memberi kesan buruk"
    ],
    "correctIndex": 0,
    "explanation": "Telekomunikasi menyumbang kepada pendidikan dan ekonomi, tetapi juga membawa risiko seperti berita palsu, penipuan dalam talian dan ketagihan gajet. Kedua-dua sudut perlu dinilai.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_01",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah fungsi menara pemancar dalam sistem telekomunikasi?",
    "options": [
      "Menyaring air hujan sebelum memasuki longkang",
      "Memancar dan menerima isyarat telefon serta data tanpa wayar",
      "Menyimpan fail-fail pengguna dalam cakera keras",
      "Menyalurkan bekalan elektrik ke seluruh kawasan perumahan"
    ],
    "correctIndex": 1,
    "explanation": "Menara pemancar menyampaikan isyarat antara telefon bimbit dengan rangkaian. Pusat data pula yang menyimpan fail, manakala bekalan elektrik diuruskan oleh grid kuasa.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_02",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah kabel gentian optik?",
    "options": [
      "Kabel yang menghubungkan janakuasa angin ke kincir angin",
      "Kabel yang menghantar data dalam bentuk denyutan cahaya pada kelajuan tinggi",
      "Kabel logam yang menyalurkan bekalan elektrik ke rumah",
      "Kabel yang digunakan untuk menambat kapal di pelabuhan"
    ],
    "correctIndex": 1,
    "explanation": "Gentian optik diperbuat daripada kaca halus yang menghantar cahaya untuk membawa data. Ia boleh membawa banyak data dengan cepat dan kurang terjejas oleh gangguan elektromagnet.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_03",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah nama satelit Malaysia yang digunakan untuk tujuan telekomunikasi?",
    "options": [
      "MEASAT",
      "TiungSAT",
      "RazakSAT",
      "Angkasawan-1"
    ],
    "correctIndex": 0,
    "explanation": "MEASAT ialah siri satelit Malaysia yang menyediakan perkhidmatan penyiaran dan telekomunikasi. TiungSAT dan RazakSAT pula satelit kecil untuk tujuan penyelidikan dan penginderaan jauh.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_04",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah fungsi pusat data dalam infrastruktur telekomunikasi?",
    "options": [
      "Menapis air minuman untuk penduduk bandar",
      "Menyimpan, memproses dan mengurus data pelayan serta perkhidmatan dalam talian",
      "Memancarkan siaran radio ke seluruh negara tanpa kabel",
      "Menjana tenaga elektrik daripada cahaya matahari"
    ],
    "correctIndex": 1,
    "explanation": "Pusat data menempatkan pelayan yang menyimpan data dan menjalankan aplikasi. Tanpa pusat data, perkhidmatan awan, laman web dan aplikasi mudah alih tidak dapat berfungsi.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_05",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Mengapakah taburan menara pemancar tidak sekata antara kawasan bandar dan luar bandar?",
    "options": [
      "Kos pembinaan tinggi dan bilangan pengguna lebih ramai di kawasan bandar",
      "Penduduk luar bandar tidak dibenarkan menggunakan telefon bimbit",
      "Kawasan luar bandar tidak mempunyai bekalan elektrik langsung",
      "Menara pemancar hanya boleh dibina di kawasan tanah tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Pembangunan menara memerlukan kos besar, dan syarikat telekomunikasi memberi keutamaan kepada kawasan dengan bilangan pengguna yang tinggi supaya pelaburan lebih berbaloi.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_06",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Sebuah sekolah di pedalaman kini mempunyai sambungan internet yang stabil berbanding sebelum ini. Perubahan infrastruktur manakah paling mungkin menyebabkan keadaan ini?",
    "options": [
      "Penambahan bilangan buku dalam perpustakaan sekolah",
      "Pembinaan padang bola sepak baharu di sekolah",
      "Penggantian kerusi bilik darjah dengan kerusi plastik",
      "Pemasangan kabel gentian optik atau pembinaan menara pemancar berhampiran sekolah"
    ],
    "correctIndex": 3,
    "explanation": "Sambungan internet memerlukan infrastruktur telekomunikasi seperti gentian optik atau menara pemancar. Kemudahan fizikal sekolah seperti buku dan kerusi tidak mempengaruhi liputan rangkaian.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_07",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Mengapakah kabel gentian optik lebih sesuai untuk menghantar data dalam kuantiti besar berbanding kabel tembaga?",
    "options": [
      "Kabel tembaga tidak boleh disambungkan kepada komputer",
      "Gentian optik boleh menghantar data tanpa bekalan elektrik ke peranti",
      "Gentian optik membawa isyarat cahaya yang lebih pantas dan kurang terjejas oleh gangguan elektromagnet",
      "Gentian optik lebih murah kerana diperbuat daripada plastik biasa"
    ],
    "correctIndex": 2,
    "explanation": "Data dihantar sebagai denyutan cahaya yang kelajuannya tinggi dan tidak terjejas oleh gangguan elektromagnet seperti kabel tembaga, jadi isyarat kekal jelas pada jarak jauh.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_08",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Apakah kelebihan satelit telekomunikasi berbanding kabel dasar laut?",
    "options": [
      "Satelit menghantar data tanpa sebarang kos penyelenggaraan",
      "Satelit tidak memerlukan stesen penerima di permukaan bumi",
      "Satelit menggunakan tenaga daripada air laut",
      "Satelit boleh menyediakan liputan kepada kawasan pedalaman dan pulau yang tidak dilalui kabel"
    ],
    "correctIndex": 3,
    "explanation": "Satelit boleh meliputi kawasan yang sukar dicapai oleh kabel seperti pulau kecil dan pedalaman. Namun satelit tetap memerlukan kos pelancaran dan penyelenggaraan yang tinggi.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_09",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Sebuah kampung di pedalaman Sabah mempunyai isyarat telefon yang lemah tetapi isyarat satelit yang baik. Cadangan manakah paling sesuai untuk menyediakan perkhidmatan internet di kampung itu?",
    "options": [
      "Menggunakan perkhidmatan internet berasaskan satelit melalui antena parabola",
      "Membina terowong bawah tanah untuk kabel tembaga sepanjang 200 km",
      "Memindahkan seluruh kampung ke pusat bandar terdekat",
      "Menambah bilangan telefon awam berwayar di balai raya"
    ],
    "correctIndex": 0,
    "explanation": "Apabila liputan darat lemah, sambungan satelit ialah pilihan praktikal kerana ia tidak bergantung pada menara berhampiran. Membina kabel sejauh 200 km melibatkan kos yang tidak berpatutan.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s2_10",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Sebuah syarikat telekomunikasi ingin memperluas liputan internet di kawasan luar bandar tetapi kos pembinaan menara sangat tinggi. Strategi manakah paling wajar?",
    "options": [
      "Menghentikan perkhidmatan di kawasan bandar untuk menjimatkan kos",
      "Mengurangkan kualiti perkhidmatan di kawasan yang telah mempunyai liputan",
      "Bekerjasama dengan kerajaan dan beberapa syarikat lain untuk berkongsi kos serta infrastruktur menara",
      "Menaikkan harga tambahan kepada pelanggan di kawasan bandar sahaja tanpa sebarang pelaburan"
    ],
    "correctIndex": 2,
    "explanation": "Perkongsian infrastruktur mengurangkan kos setiap syarikat dan mempercepat liputan di kawasan kurang menguntungkan. Langkah lain tidak menambah liputan atau merugikan pengguna sedia ada.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_01",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah maksud jenayah siber?",
    "options": [
      "Kemalangan jalan raya yang berlaku pada waktu malam",
      "Pencemaran udara akibat asap kilang",
      "Pembalakan haram di kawasan hutan simpan",
      "Kesalahan yang dilakukan menggunakan komputer dan rangkaian internet"
    ],
    "correctIndex": 3,
    "explanation": "Jenayah siber termasuk penipuan dalam talian, penggodaman dan pencurian data yang dilakukan melalui peranti serta rangkaian. Ia berbeza daripada jenayah fizikal biasa.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_02",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah maksud berita palsu?",
    "options": [
      "Berita yang disiarkan oleh stesen televisyen kerajaan",
      "Berita yang disiarkan pada waktu tengah malam",
      "Berita yang ditulis dalam bahasa asing",
      "Maklumat yang tidak benar tetapi disebarkan seolah-olah berita sahih"
    ],
    "correctIndex": 3,
    "explanation": "Berita palsu ialah maklumat yang direka atau diputarbelitkan dan disebarkan sebagai berita benar. Ia boleh mengelirukan masyarakat dan mencetuskan panik.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_03",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah langkah keselamatan paling asas untuk melindungi akaun dalam talian?",
    "options": [
      "Menggunakan kata laluan yang kuat dan tidak dikongsi dengan orang lain",
      "Menulis kata laluan pada kertas dan menampalkannya pada skrin",
      "Menggunakan kata laluan yang sama di semua akaun",
      "Memberi kata laluan kepada semua rakan sekelas"
    ],
    "correctIndex": 0,
    "explanation": "Kata laluan yang kuat serta dirahsiakan menghalang orang lain daripada memasuki akaun. Menggunakan kata laluan sama di semua akaun bermakna satu kebocoran boleh menjejaskan semua akaun.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_04",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah maksud pengesahan dua faktor?",
    "options": [
      "Langkah keselamatan yang memerlukan dua cara pengesahan sebelum membenarkan masuk ke akaun",
      "Kaedah menghantar maklumat kepada dua orang rakan",
      "Proses membuka akaun dengan dua alamat e-mel berbeza",
      "Cara memadam dua fail yang tidak diperlukan"
    ],
    "correctIndex": 0,
    "explanation": "Pengesahan dua faktor menggabungkan sesuatu yang pengguna tahu seperti kata laluan dengan sesuatu yang pengguna miliki seperti kod sekali guna, lalu menyukarkan pencerobohan.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_05",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah kesan negatif ketagihan gajet terhadap murid?",
    "options": [
      "Waktu tidur murid bertambah setiap malam",
      "Masa untuk belajar dan bersosial berkurangan serta tumpuan menurun",
      "Prestasi akademik meningkat secara automatik",
      "Murid menjadi lebih aktif dalam kegiatan luar bilik darjah"
    ],
    "correctIndex": 1,
    "explanation": "Penggunaan gajet yang berlebihan mengurangkan masa untuk belajar, tidur dan berinteraksi secara bersemuka, selain menjejaskan tumpuan dalam pembelajaran.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_06",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Seorang murid menerima mesej yang mendakwa beliau memenangi hadiah wang tunai dan diminta menekan pautan serta memasukkan nombor akaun bank. Apakah tindakan paling wajar?",
    "options": [
      "Menghantar mesej itu kepada semua rakan agar mereka juga menang",
      "Membalas mesej dengan kata laluan perbankan",
      "Mengabaikan mesej itu dan menyemak kesahihannya dengan pihak berkuasa atau orang dewasa",
      "Terus memasukkan nombor akaun bank kerana hadiah itu mungkin benar"
    ],
    "correctIndex": 2,
    "explanation": "Mesej seperti ini lazimnya penipuan yang bertujuan mencuri maklumat perbankan. Mengabaikan pautan dan menyemak kesahihan dengan orang dewasa atau pihak berkuasa ialah langkah paling selamat.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_07",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Bagaimanakah murid dapat mengelakkan diri daripada menyebarkan berita palsu?",
    "options": [
      "Menyebarkan mesej dengan lebih pantas daripada orang lain",
      "Menyemak sumber dan tarikh maklumat sebelum menkongsi kepada orang lain",
      "Menkongsi semua mesej yang diterima kerana ia datang dari rakan",
      "Menambah tajuk yang lebih menarik sebelum menyebarkan mesej"
    ],
    "correctIndex": 1,
    "explanation": "Menyemak sumber rasmi dan tarikh maklumat memastikan kandungan itu sahih dan masih relevan sebelum dikongsi. Mesej daripada rakan belum tentu benar.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_08",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Apakah peranan kerajaan dalam menangani jenayah siber di Malaysia?",
    "options": [
      "Menyerahkan semua akaun media sosial kepada syarikat asing",
      "Menutup semua sekolah yang menggunakan komputer",
      "Menggubal undang-undang dan menubuhkan agensi khusus untuk menyiasat kes jenayah siber",
      "Melarang sepenuhnya penggunaan internet oleh semua penduduk"
    ],
    "correctIndex": 2,
    "explanation": "Kerajaan menggubal undang-undang siber dan menggerakkan agensi serta polis untuk menyiasat serta mendakwa pesalah. Larangan menyeluruh terhadap internet tidak praktikal dan tidak dilaksanakan.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_09",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Sebuah sekolah menerima laporan bahawa murid-murid berkongsi pautan yang mengandungi maklumat tidak sahih tentang kejadian bencana. Cadangan manakah paling menyeluruh?",
    "options": [
      "Memadam semua akaun media sosial murid tanpa kebenaran ibu bapa",
      "Mengarahkan murid supaya menyebarkan pautan itu kepada lebih ramai orang",
      "Mengadakan kempen kesedaran literasi media serta menubuhkan saluran rasmi sekolah untuk pengesahan maklumat",
      "Melarang murid membawa telefon ke sekolah tanpa memberi sebarang penerangan"
    ],
    "correctIndex": 2,
    "explanation": "Kempen literasi media membina kemahiran menilai maklumat, manakala saluran rasmi memberi rujukan sahih yang boleh dipercayai. Larangan semata-mata tanpa pendidikan tidak mengubah tingkah laku murid.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b6_s3_10",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Seorang murid berkata keselamatan dalam talian sepenuhnya tanggungjawab kerajaan, manakala rakan sekelasnya berkata ia sepenuhnya tanggungjawab individu. Penilaian manakah paling tepat?",
    "options": [
      "Keselamatan dalam talian tidak melibatkan sebarang tanggungjawab",
      "Kedua-dua pihak memainkan peranan kerana kerajaan menguatkuasakan undang-undang manakala individu menjaga tingkah laku dalam talian",
      "Hanya kerajaan bertanggungjawab kerana individu tidak mampu menjaga kata laluan sendiri",
      "Hanya individu bertanggungjawab kerana kerajaan tiada kuasa menggubal undang-undang"
    ],
    "correctIndex": 1,
    "explanation": "Keselamatan dalam talian memerlukan gabungan tindakan kerajaan seperti penguatkuasaan undang-undang dan penyedia perkhidmatan bersama amalan berhati-hati oleh setiap pengguna.",
    "ref": "Bab 6, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_01",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah ciri utama iklim khatulistiwa?",
    "options": [
      "Suhu sangat rendah dan salji sepanjang tahun",
      "Hujan hanya turun sekali setahun dengan jumlah kecil",
      "Suhu tinggi dan hujan lebat sepanjang tahun",
      "Musim panas yang kering dan musim sejuk yang lembap"
    ],
    "correctIndex": 2,
    "explanation": "Iklim khatulistiwa berlaku berhampiran garisan khatulistiwa dan dicirikan oleh suhu tinggi serta hujan lebat hampir sepanjang tahun. Iklim yang berselang musim panas kering dengan musim sejuk lembap ialah iklim mediterranean.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_02",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah ciri iklim gurun?",
    "options": [
      "Musim sejuk yang bersalji dan musim panas yang pendek",
      "Kelembapan udara yang sangat tinggi sepanjang tahun",
      "Hujan sangat sedikit dan julat suhu harian sangat besar",
      "Hujan lebat sepanjang tahun dengan suhu tinggi"
    ],
    "correctIndex": 2,
    "explanation": "Kawasan gurun menerima hujan kurang daripada 250 mm setahun. Langit yang cerah menyebabkan suhu siang sangat panas dan malam pula sejuk, jadi julat suhu hariannya besar.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_03",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Bagaimanakah ciri iklim mediterranean berbeza daripada iklim gurun?",
    "options": [
      "Iklim mediterranean hanya berlaku di kawasan khatulistiwa",
      "Iklim mediterranean mengalami musim sejuk yang lembap manakala iklim gurun kering sepanjang tahun",
      "Iklim mediterranean lebih kering daripada iklim gurun sepanjang tahun",
      "Iklim mediterranean tidak mempunyai musim panas yang kering"
    ],
    "correctIndex": 1,
    "explanation": "Iklim mediterranean mempunyai musim panas yang kering tetapi musim sejuk yang lembap kerana pengaruh angin barat. Iklim gurun pula kekurangan hujan sepanjang tahun.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_04",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah tumbuhan utama yang tumbuh di kawasan iklim tundra?",
    "options": [
      "Pokok kaktus gergasi dan kelapa",
      "Rumput, lumut dan pokok renek kecil",
      "Pokok kelapa sawit yang tinggi",
      "Hutan hujan tropika yang tebal"
    ],
    "correctIndex": 1,
    "explanation": "Tundra mengalami musim tumbuh yang sangat pendek dengan tanah yang membeku sebahagian tahun. Hanya rumput, lumut dan tumbuhan kecil dapat tumbuh di kawasan ini.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_05",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah ciri iklim monsun tropika?",
    "options": [
      "Suhu tinggi sepanjang tahun dengan musim hujan dan musim kering yang jelas",
      "Suhu rendah sepanjang tahun dengan salji tebal",
      "Hujan sedikit dengan julat suhu harian yang sangat besar",
      "Musim panas kering dan musim sejuk lembap tanpa musim hujan"
    ],
    "correctIndex": 0,
    "explanation": "Kawasan monsun tropika seperti di Asia Selatan dan Asia Tenggara mengalami suhu tinggi sepanjang tahun, dengan musim hujan lebat dan musim kering yang bertukar mengikut arah monsun.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_06",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Sebuah kawasan di Asia mempunyai julat suhu harian yang besar, hujan kurang daripada 250 mm setahun dan tumbuhan berduri. Kawasan itu berkemungkinan besar mengalami iklim:",
    "options": [
      "Khatulistiwa",
      "Tundra",
      "Sederhana sejuk",
      "Gurun"
    ],
    "correctIndex": 3,
    "explanation": "Gabungan hujan sangat sedikit, julat suhu harian besar dan tumbuhan berduri seperti kaktus ialah ciri iklim gurun. Iklim khatulistiwa pula lembap dengan hujan lebat.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_07",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Mengapakah seluruh Asia tidak boleh dikatakan beriklim khatulistiwa walaupun Asia dilalui garisan khatulistiwa?",
    "options": [
      "Kerana semua kawasan di Asia mempunyai suhu yang sama",
      "Kerana iklim hanya ditentukan oleh kegiatan manusia",
      "Kerana Asia terbentang dari kawasan khatulistiwa hingga ke latitud tinggi yang beriklim sejuk",
      "Kerana garisan khatulistiwa sebenarnya tidak melintasi benua Asia"
    ],
    "correctIndex": 2,
    "explanation": "Asia meliputi kawasan seluas dari khatulistiwa sehingga kawasan Artik. Perbezaan latitud, altitud dan kedudukan dari lautan menghasilkan pelbagai jenis iklim seperti gurun, mediterranean dan tundra.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_08",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Apakah pengaruh altitud terhadap iklim di kawasan tanah tinggi Asia?",
    "options": [
      "Suhu meningkat apabila altitud meningkat sehingga kawasan tinggi lebih panas",
      "Altitud tidak memberi pengaruh kepada suhu sesuatu kawasan",
      "Altitud hanya mempengaruhi warna tanah di kawasan tinggi",
      "Suhu menurun apabila altitud meningkat sehingga kawasan tinggi lebih sejuk"
    ],
    "correctIndex": 3,
    "explanation": "Udara menipis dan menyejuk apabila altitud meningkat. Inilah sebab kawasan pergunungan di Asia seperti Himalaya kekal sejuk walaupun terletak di latitud rendah.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_09",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Dua kawasan di Asia terletak pada latitud yang hampir sama tetapi mempunyai iklim yang jauh berbeza. Kawasan P berhampiran laut dan menerima hujan lebat manakala kawasan Q di pedalaman menerima hujan sedikit. Apakah tafsiran paling tepat?",
    "options": [
      "Kedudukan terhadap laut dan jarak dari lautan mempengaruhi jumlah hujan yang diterima",
      "Latitud yang sama menjamin jumlah hujan yang sama di semua kawasan",
      "Kawasan pedalaman sentiasa lebih lembap daripada kawasan pesisir",
      "Iklim hanya bergantung pada ketinggian bangunan di kawasan tersebut"
    ],
    "correctIndex": 0,
    "explanation": "Laut membekalkan wap air kepada kawasan pesisir, manakala kawasan pedalaman yang jauh dari lautan menerima lebih sedikit wap air. Faktor kedudukan terhadap laut menerangkan perbezaan hujan walaupun latitudnya sama.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s1_10",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Sebuah ekspedisi merentasi Asia dari selatan ke utara. Pemerhati merekodkan hutan hujan tropika, kemudian hutan monsun, seterusnya padang rumput dan akhirnya tundra. Apakah penjelasan paling tepat bagi turutan itu?",
    "options": [
      "Perubahan iklim itu disebabkan oleh kemajuan teknologi di setiap kawasan",
      "Turutan itu berlaku kerana ketinggian laut berubah di setiap kawasan",
      "Turutan itu berlaku kerana Asia berputar pada paksinya",
      "Perubahan latitud menyebabkan perubahan sudut sinaran Matahari dan suhu sehingga jenis iklim berubah"
    ],
    "correctIndex": 3,
    "explanation": "Semakin jauh dari khatulistiwa, sudut sinaran Matahari menjadi lebih rendah dan suhu menurun. Perubahan ini menghasilkan turutan iklim daripada tropika lembap hingga tundra yang sejuk.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_01",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Tanaman manakah paling sesuai ditanam di kawasan beriklim monsun tropika yang menerima banyak hujan?",
    "options": [
      "Gandum",
      "Epal",
      "Kurma",
      "Padi"
    ],
    "correctIndex": 3,
    "explanation": "Padi memerlukan air yang banyak dan suhu tinggi, jadi kawasan monsun tropika dengan hujan lebat paling sesuai. Gandum dan epal pula sesuai untuk iklim sederhana.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_02",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Tanaman manakah yang paling sesuai ditanam di kawasan beriklim sederhana sejuk?",
    "options": [
      "Koko",
      "Kelapa sawit",
      "Getah",
      "Gandum"
    ],
    "correctIndex": 3,
    "explanation": "Gandum sesuai untuk kawasan sederhana dengan musim tumbuh yang berbeza suhu. Kelapa sawit, getah dan koko pula tanaman iklim khatulistiwa.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_03",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Mengapakah kawasan gurun mempunyai kepadatan petempatan yang sangat rendah?",
    "options": [
      "Kekurangan air dan suhu melampau menyukarkan kehidupan serta pertanian",
      "Kawasan gurun terlalu sejuk untuk didiami sepanjang tahun",
      "Kawasan gurun diliputi hutan tebal yang sukar dibuka",
      "Kawasan gurun menerima hujan terlalu lebat sehingga sering dilanda banjir"
    ],
    "correctIndex": 0,
    "explanation": "Air ialah keperluan asas untuk minuman dan pertanian. Kekurangan air serta suhu melampau di gurun menghadkan kegiatan manusia, jadi petempatan hanya tertumpu di oasis atau bandar tertentu.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_04",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Di manakah kebanyakan petempatan utama di Asia tertumpu?",
    "options": [
      "Di kawasan tanah pamah berhampiran sungai dan pesisir pantai",
      "Di puncak gunung yang tinggi dan sejuk",
      "Di tengah-tengah kawasan gurun yang kering",
      "Di kawasan tundra yang membeku sepanjang tahun"
    ],
    "correctIndex": 0,
    "explanation": "Tanah pamah yang subur, bekalan air daripada sungai dan kemudahan pengangkutan di pesisir pantai menjadikan kawasan ini tumpuan petempatan utama di Asia.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_05",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Apakah tanaman yang sesuai ditanam di kawasan iklim khatulistiwa seperti Malaysia?",
    "options": [
      "Kurma dan kaktus",
      "Getah dan kelapa sawit",
      "Gandum dan barli",
      "Anggur dan zaitun"
    ],
    "correctIndex": 1,
    "explanation": "Getah dan kelapa sawit memerlukan suhu tinggi serta hujan sepanjang tahun, iaitu ciri iklim khatulistiwa. Anggur dan zaitun pula memerlukan iklim mediterranean.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_06",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Sebuah ladang ingin menanam padi di kawasan gurun yang mempunyai sistem pengairan moden. Apakah cabaran utama yang perlu diatasi?",
    "options": [
      "Suhu yang terlalu rendah menyebabkan benih padi membeku",
      "Tanah gurun terlalu basah untuk penanaman padi",
      "Tiada tenaga kerja di kawasan gurun",
      "Kekurangan air hujan menyebabkan bekalan air perlu dipam dari sumber lain"
    ],
    "correctIndex": 3,
    "explanation": "Padi memerlukan air bertakung sepanjang musim tumbuh, sedangkan hujan di gurun hampir tiada. Sistem pengairan dan pam air diperlukan, dan kos itulah cabaran terbesarnya.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_07",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Bagaimanakah iklim monsun mempengaruhi jadual penanaman padi di Asia Selatan?",
    "options": [
      "Petani berhenti menanam padi semasa musim hujan kerana terlalu sejuk",
      "Petani menanam padi semasa musim hujan apabila bekalan air mencukupi",
      "Petani menanam padi semasa musim kering kerana tiada banjir",
      "Petani menanam padi sepanjang tahun tanpa mengira musim"
    ],
    "correctIndex": 1,
    "explanation": "Musim hujan monsun membekalkan air yang diperlukan untuk sawah. Oleh itu penanaman padi biasanya bermula pada awal musim hujan dan bergantung kepada hujan yang tiba tepat pada masanya.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_08",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Mengapakah kegiatan penternakan nomad lebih lazim di kawasan padang rumput dan gurun Asia berbanding kawasan hutan tropika?",
    "options": [
      "Kawasan gurun mempunyai air yang lebih mencukupi daripada hutan tropika",
      "Hutan tropika tidak boleh menampung sebarang bentuk pertanian",
      "Padang rumput menyediakan rumput untuk ternakan, memaksa pengembala berpindah mencari padang baharu",
      "Kawasan hutan tropika mempunyai terlalu banyak rumput untuk ternakan"
    ],
    "correctIndex": 2,
    "explanation": "Rumput di padang rumput kering dan habis dengan cepat, jadi pengembala berpindah ke kawasan lain secara bermusim. Hutan tropika pula padat dengan pokok dan lebih sesuai untuk pertanian tanaman.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_09",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "H",
    "q": "Sebuah kawasan di Asia Selatan menerima monsun lewat tiga minggu. Apakah kesan paling langsung terhadap kegiatan pertanian penduduk?",
    "options": [
      "Petani terpaksa menanam gandum sebagai ganti pada minggu yang sama",
      "Bekalan air menjadi berlebihan sehingga semua tanaman bertambah hasil",
      "Sawah padi kekurangan air dan penanaman terpaksa ditangguhkan sehingga hasil berkurangan",
      "Suhu kawasan itu menurun sehingga tanaman membeku"
    ],
    "correctIndex": 2,
    "explanation": "Monsun membawa sebahagian besar hujan tahunan. Kelewatannya menyebabkan sawah kekurangan air semasa tempoh penanaman, lalu menangguhkan penanaman dan mengurangkan hasil.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s2_10",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "H",
    "q": "Dua kampung di Asia mempunyai penduduk yang sama ramai. Kampung X terletak di lembah sungai beriklim monsun manakala kampung Y terletak di pinggir gurun. Analisis manakah paling tepat?",
    "options": [
      "Kampung X lebih berpotensi membangun kerana air, tanah subur dan hasil pertanian yang lebih banyak",
      "Kampung Y lebih berpotensi membangun kerana kawasan gurun tidak pernah dilanda banjir",
      "Kedua-dua kampung mempunyai potensi yang sama kerana bilangan penduduknya sama",
      "Kampung Y lebih berpotensi kerana iklim kering mengurangkan kos pembinaan rumah"
    ],
    "correctIndex": 0,
    "explanation": "Air dan tanah subur menyokong pertanian yang menjadi asas ekonomi luar bandar. Ketiadaan banjir di gurun tidak menggantikan keperluan air untuk minuman, pertanian dan ternakan.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_01",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah maksud taufan?",
    "options": [
      "Pusaran angin kecil yang terbentuk di kawasan daratan",
      "Hujan lebat yang turun tanpa angin",
      "Kemarau panjang yang berlaku di kawasan gurun",
      "Ribut tropika yang terbentuk di atas lautan dengan angin berpusing kuat"
    ],
    "correctIndex": 3,
    "explanation": "Taufan ialah sistem ribut tropika yang terbentuk di atas lautan panas dengan angin kencang berpusing serta hujan lebat. Puting beliung pula pusaran angin kecil di daratan.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_02",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah punca utama kemarau di kawasan yang biasanya menerima monsun?",
    "options": [
      "Hujan yang turun terlalu kerap sepanjang tahun",
      "Suhu yang menurun secara mendadak pada waktu malam",
      "Pembinaan empangan yang terlalu banyak di kawasan tersebut",
      "Monsun yang lewat atau gagal membawa hujan pada tempoh yang dijangkakan"
    ],
    "correctIndex": 3,
    "explanation": "Kemarau di kawasan monsun lazimnya berlaku apabila monsun lewat atau membawa hujan kurang daripada biasa, sehingga tanah dan sungai mengering.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_03",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah ciri puting beliung yang membezakannya daripada taufan?",
    "options": [
      "Puting beliung tidak mempunyai angin berpusing sama sekali",
      "Puting beliung terbentuk di darat dengan skala lebih kecil manakala taufan terbentuk di laut dengan skala besar",
      "Puting beliung terbentuk di laut manakala taufan terbentuk di darat",
      "Puting beliung mengambil masa berhari-hari manakala taufan berlaku dalam beberapa minit"
    ],
    "correctIndex": 1,
    "explanation": "Puting beliung ialah pusaran angin berskala kecil yang terbentuk di darat dan bertahan singkat. Taufan terbentuk di lautan tropika, berskala besar dan boleh bertahan beberapa hari.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_04",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah langkah kesiapsiagaan yang paling sesuai bagi penduduk di kawasan yang sering dilanda banjir?",
    "options": [
      "Membina rumah di tengah sungai untuk mengelakkan air bertakung",
      "Menyediakan beg kecemasan dan mengetahui laluan pemindahan ke pusat pemindahan",
      "Menunggu sehingga air naik ke paras bumbung sebelum bertindak",
      "Membuang semua bekalan makanan supaya tidak rosak"
    ],
    "correctIndex": 1,
    "explanation": "Beg kecemasan dengan dokumen, ubat dan makanan serta pengetahuan tentang laluan pemindahan membolehkan penduduk bertindak pantas sebelum banjir menjadi teruk.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_05",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah kesan gelombang haba terhadap kesihatan penduduk?",
    "options": [
      "Risiko strok haba dan dehidrasi meningkat, terutamanya kepada warga emas",
      "Penduduk mengalami hipotermia kerana badan terlalu sejuk",
      "Semua penyakit berjangkit hilang sepenuhnya",
      "Kadar hujan meningkat sehingga boleh mengelakkannya"
    ],
    "correctIndex": 0,
    "explanation": "Suhu yang sangat tinggi untuk tempoh panjang menyebabkan badan sukar menyejuk, lalu meningkatkan risiko strok haba dan dehidrasi, terutama dalam kalangan warga emas dan kanak-kanak.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_06",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Mengapakah penduduk di kawasan monsun Asia lebih terdedah kepada banjir semasa musim hujan?",
    "options": [
      "Hujan lebat berterusan serta sungai melimpah kerana isipadu air melebihi kapasiti saliran",
      "Suhu menjadi terlalu tinggi sehingga air sungai mendidih",
      "Angin monsun membawa pasir yang menutup semua sungai",
      "Tanah menjadi lebih tinggi setiap kali hujan turun"
    ],
    "correctIndex": 0,
    "explanation": "Musim monsun membawa hujan berterusan dalam jumlah besar. Apabila air melebihi kapasiti sungai dan parit saliran, air melimpah ke kawasan petempatan dan menyebabkan banjir.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_07",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Bagaimanakah penanaman pokok bakau di pesisir pantai dapat mengurangkan kesan taufan atau tsunami?",
    "options": [
      "Pokok bakau mengeluarkan haba untuk menyejukkan atmosfera",
      "Pokok bakau bertindak sebagai penghalang semula jadi yang mengurangkan tenaga ombak dan angin",
      "Pokok bakau menyerap semua air laut melalui akar dan menyimpannya",
      "Pokok bakau mengubah arah taufan ke kawasan lain"
    ],
    "correctIndex": 1,
    "explanation": "Akar dan batang bakau yang padat memperlahankan aliran air serta angin, jadi tenaga ombak yang sampai ke kawasan petempatan berkurangan.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_08",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Mengapakah kemarau sering menjejaskan bekalan makanan secara berantai?",
    "options": [
      "Kemarau hanya menjejaskan keindahan alam dan bukan bekalan makanan",
      "Kemarau menyebabkan tanah menjadi lebih subur setiap tahun",
      "Hasil pertanian dan ternakan menurun sehingga bekalan serta harga makanan terjejas di pasaran",
      "Kemarau meningkatkan jumlah hasil padi secara mendadak"
    ],
    "correctIndex": 2,
    "explanation": "Tumbuhan dan haiwan memerlukan air. Apabila kemarau menurunkan hasil tanaman dan ternakan, bekalan makanan berkurang, harga meningkat dan kumpulan berpendapatan rendah paling terkesan.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_09",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Sebuah kawasan pesisir Asia menerima laporan amaran taufan dua hari lebih awal. Cadangan manakah paling berkesan untuk pihak berkuasa tempatan?",
    "options": [
      "Mengarahkan pemindahan sementara penduduk dari kawasan rendah dan menutup laluan berisiko",
      "Meminta penduduk menunggu keterangan lanjut selepas taufan mula melanda",
      "Menutup semua sekolah tetapi membenarkan penduduk kekal di rumah yang rendah",
      "Menjalankan aktiviti pelancongan di jeti sementara menunggu taufan"
    ],
    "correctIndex": 0,
    "explanation": "Amaran awal hanya berguna jika diikuti tindakan pemindahan. Kawasan rendah yang terdedah kepada ribut dan ombak besar harus dikosongkan sebelum taufan tiba.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b7_s3_10",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Dua bandar di Asia mengalami masalah alam sekitar yang berbeza. Bandar P sering dilanda banjir monsun manakala bandar Q sering mengalami kekurangan air. Pendekatan manakah paling sesuai bagi kedua-dua bandar?",
    "options": [
      "Bandar P mengurangkan hujan manakala bandar Q menambah hujan",
      "Kedua-dua bandar memindahkan semua penduduk ke kawasan gurun",
      "Bandar P memperbaiki saliran dan rizab banjir manakala bandar Q membina kemudahan penakungan serta kitar semula air",
      "Kedua-dua bandar membina jeti pelancongan sebagai penyelesaian"
    ],
    "correctIndex": 2,
    "explanation": "Banjir dikawal dengan kapasiti saliran, pengekalan kawasan hijau dan rizab banjir. Kekurangan air diatasi dengan penakungan air hujan, pengurusan empangan dan kitar semula air. Setiap masalah memerlukan pendekatan berbeza.",
    "ref": "Bab 7, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_01",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah peranan Laluan Sutera dalam jaringan pengangkutan Asia?",
    "options": [
      "Laluan kereta api moden yang menghubungkan Kuala Lumpur dengan Bangkok",
      "Terusan buatan manusia yang menghubungkan Laut Mediterranean dengan Laut Merah",
      "Laluan bas yang menghubungkan semua ibu negara Asia Tenggara",
      "Jaringan laluan darat dan laut yang menghubungkan China dengan Timur Tengah dan Eropah"
    ],
    "correctIndex": 3,
    "explanation": "Laluan Sutera ialah jaringan laluan perdagangan bersejarah yang merangkumi laluan darat melalui Asia Tengah dan cabang laut, menghubungkan China dengan Timur Tengah serta Eropah. Jaringan ini menunjukkan kepentingan pengangkutan darat dan laut dalam perdagangan Asia.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_02",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah dua laut yang dihubungkan oleh Terusan Suez?",
    "options": [
      "Laut China Selatan dan Lautan Hindi",
      "Laut Kaspia dan Laut Hitam",
      "Laut Andaman dan Laut Sulu",
      "Laut Mediterranean dan Laut Merah"
    ],
    "correctIndex": 3,
    "explanation": "Terusan Suez di Mesir menghubungkan Laut Mediterranean dengan Laut Merah, lalu memendekkan pelayaran kapal antara Eropah dan Asia tanpa perlu mengelilingi Afrika.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_03",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Selat Melaka terletak di antara kawasan manakah?",
    "options": [
      "Semenanjung Malaysia dan pulau Sumatera",
      "India dan Sri Lanka",
      "Jepun dan Korea",
      "Arab Saudi dan Mesir"
    ],
    "correctIndex": 0,
    "explanation": "Selat Melaka terletak di antara Semenanjung Malaysia dengan pulau Sumatera, dan menjadi laluan perkapalan penting antara Lautan Hindi dengan Laut China Selatan.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_04",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah peranan utama lapangan terbang utama di Asia dalam jaringan pengangkutan dunia?",
    "options": [
      "Menjadi hab penerbangan yang menghubungkan penumpang dan kargo antara benua",
      "Menyimpan barang sumbangan untuk diedarkan melalui kapal",
      "Menjana tenaga elektrik untuk bandar berdekatan",
      "Menjadi tempat menyimpan kereta api laju"
    ],
    "correctIndex": 0,
    "explanation": "Hab penerbangan seperti di Singapura, Hong Kong dan Kuala Lumpur mengumpul laluan dari pelbagai kawasan dan menyambungkannya ke benua lain, memudahkan pemindahan penumpang serta kargo.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_05",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah laluan laut yang penting untuk perdagangan minyak dari Timur Tengah ke Asia Timur?",
    "options": [
      "Terusan Kiel diikuti Selat Dover",
      "Selat Hormuz diikuti Selat Melaka",
      "Terusan Panama diikuti Laut Baltik",
      "Selat Bering diikuti Laut Artik"
    ],
    "correctIndex": 1,
    "explanation": "Kapal tangki minyak dari Teluk Parsi keluar melalui Selat Hormuz, kemudian melalui Lautan Hindi dan Selat Melaka menuju ke Asia Timur.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_06",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Mengapakah Terusan Suez penting kepada ekonomi Malaysia walaupun terletak jauh dari negara ini?",
    "options": [
      "Kerana terusan itu membekalkan minyak kepada Malaysia secara percuma",
      "Kerana terusan itu terletak di dalam perairan Malaysia",
      "Kerana kapal dagang Malaysia ke Eropah menjimatkan masa serta kos perjalanan melalui terusan itu",
      "Kerana terusan itu menjadi tempat berlabuhnya kapal penumpang Malaysia"
    ],
    "correctIndex": 2,
    "explanation": "Laluan melalui Terusan Suez jauh lebih pendek berbanding mengelilingi Afrika. Pengurangan masa dan bahan api menurunkan kos eksport Malaysia ke pasaran Eropah.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_07",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Sebuah kapal dari China ingin menuju ke Eropah. Laluan manakah paling menjimatkan masa?",
    "options": [
      "Melalui Terusan Panama dan Lautan Atlantik",
      "Melalui Selat Melaka, Lautan Hindi dan Terusan Suez",
      "Melalui Lautan Pasifik dan mengelilingi Tanjung Harapan",
      "Melalui Selat Bering dan Laut Artik"
    ],
    "correctIndex": 1,
    "explanation": "Laluan melalui Selat Melaka dan Terusan Suez ialah laluan tersingkat ke Eropah. Mengelilingi Tanjung Harapan menambah ribuan kilometer dan beberapa hari pelayaran.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_08",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Apakah kelebihan kereta api laju berbanding kapal terbang untuk perjalanan antara bandar dalam jarak sederhana?",
    "options": [
      "Kereta api laju tidak memerlukan landasan khas",
      "Kereta api laju boleh menyeberangi lautan tanpa jambatan",
      "Masa menunggu lebih singkat dan stesen terletak berhampiran pusat bandar",
      "Kereta api laju bergerak lebih pantas daripada kapal terbang dalam semua keadaan"
    ],
    "correctIndex": 2,
    "explanation": "Kapal terbang memerlukan proses daftar masuk, pemeriksaan keselamatan dan perjalanan ke lapangan terbang. Stesen kereta api laju biasanya di tengah bandar, jadi jumlah masa perjalanan lebih singkat untuk jarak sederhana.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_09",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Sebuah pelabuhan di Asia menghadapi kesesakan kerana terlalu banyak kapal melalui satu selat yang sempit. Apakah kesan paling munasabah terhadap perdagangan serantau?",
    "options": [
      "Kesesakan itu tidak menjejaskan masa penghantaran barang",
      "Harga barang menurun kerana lebih banyak kapal berkumpul",
      "Kapal terpaksa menunggu lebih lama sehingga kos pengangkutan dan harga barang meningkat",
      "Semua kapal bertukar menjadi kapal terbang secara automatik"
    ],
    "correctIndex": 2,
    "explanation": "Kesesakan di laluan sempit menambah masa menunggu dan penggunaan bahan api. Kos tambahan ini dipindahkan kepada pengeluar dan pengguna melalui kenaikan harga barang.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s1_10",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Idea moden Laluan Sutera Darat dan Laut menghubungkan China dengan Eropah melalui Asia Tengah dan Asia Barat. Apakah kesan positif yang paling ketara bagi negara di sepanjang laluan itu?",
    "options": [
      "Laluan itu mengurangkan keperluan pelabuhan laut di Asia",
      "Peluang perdagangan dan pelaburan infrastruktur pengangkutan meningkat di kawasan tersebut",
      "Semua negara di sepanjang laluan itu berhenti berdagang dengan negara lain",
      "Laluan itu hanya digunakan untuk perjalanan pelancong sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Laluan utama membuka akses pasaran dan menarik pelaburan dalam jalan raya, kereta api dan pelabuhan, lalu merancakkan pertumbuhan ekonomi negara yang dilalui.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_01",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Mengapakah pembinaan jalan raya di kawasan pergunungan Asia lebih sukar berbanding di kawasan tanah pamah?",
    "options": [
      "Kawasan pergunungan tidak mempunyai penduduk langsung",
      "Kawasan pergunungan tidak menerima hujan sepanjang tahun",
      "Kawasan pergunungan terlalu rata untuk dibina jalan raya",
      "Bentuk muka bumi yang curam memerlukan pemotongan bukit, jambatan dan terowong"
    ],
    "correctIndex": 3,
    "explanation": "Cerun curam, lembah dalam dan risiko tanah runtuh memerlukan kerja kejuruteraan tambahan seperti terowong dan jambatan, sehingga kos serta masa pembinaan meningkat.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_02",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Bagaimanakah iklim mempengaruhi pembinaan pengangkutan di Asia?",
    "options": [
      "Iklim tidak mempengaruhi pembinaan pengangkutan di mana-mana kawasan",
      "Iklim hanya mempengaruhi warna kenderaan yang digunakan",
      "Hujan lebat memudahkan pembinaan jalan tanpa sebarang masalah",
      "Kawasan bersalji dan berais memerlukan jalan serta landasan yang tahan cuaca melampau"
    ],
    "correctIndex": 3,
    "explanation": "Salji, fros dan ais boleh merosakkan permukaan jalan serta landasan, manakala hujan lebat dan banjir mengancam kestabilan cerun. Bahan dan reka bentuk yang sesuai diperlukan.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_03",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah peranan kemajuan teknologi dalam perkembangan pengangkutan di Asia?",
    "options": [
      "Menghalang pembinaan terowong di kawasan pergunungan",
      "Menjadikan semua jalan raya tidak perlu diturap",
      "Membolehkan kereta api laju dan pesawat moden bergerak lebih pantas serta lebih selamat",
      "Mengurangkan keperluan penyelenggaraan semua kenderaan kepada sifar"
    ],
    "correctIndex": 2,
    "explanation": "Teknologi seperti enjin cekap bahan api, sistem kawalan isyarat dan bahan binaan baharu membolehkan kenderaan bergerak lebih pantas dan keselamatan perjalanan lebih terjamin.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_04",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Mengapakah dasar kerajaan penting dalam perkembangan pengangkutan sesebuah negara?",
    "options": [
      "Dasar kerajaan hanya terhad kepada penjualan tiket bas",
      "Kerajaan hanya bertanggungjawab menjaga kebersihan kenderaan persendirian",
      "Kerajaan menyediakan dana, merancang laluan dan menggubal dasar untuk pembangunan infrastruktur",
      "Kerajaan tidak mempunyai peranan dalam pembinaan jalan raya"
    ],
    "correctIndex": 2,
    "explanation": "Pembinaan lebuh raya dan landasan kereta api memerlukan pelaburan besar. Kerajaan merancang jaringan, memperuntukkan dana dan menetapkan dasar supaya pembangunan berlaku secara menyeluruh.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_05",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah kesan pertumbuhan ekonomi terhadap permintaan pengangkutan di Asia?",
    "options": [
      "Permintaan terhadap pengangkutan barang dan manusia meningkat apabila ekonomi berkembang",
      "Permintaan terhadap pengangkutan menurun apabila ekonomi berkembang",
      "Ekonomi yang berkembang mengurangkan keperluan pelabuhan",
      "Pertumbuhan ekonomi hanya melibatkan sektor pertanian sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Apabila perniagaan dan pendapatan meningkat, lebih banyak barang perlu dihantar dan lebih ramai orang bergerak, jadi permintaan terhadap pengangkutan bertambah.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_06",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Sebuah negara di Asia ingin membina landasan kereta api merentasi kawasan pergunungan dan lembah. Faktor manakah paling perlu diberi pertimbangan utama?",
    "options": [
      "Jumlah iklan yang akan disiarkan di televisyen",
      "Bentuk muka bumi yang memerlukan terowong, jambatan dan cerun stabil",
      "Warna cat yang digunakan pada gerabak kereta api",
      "Bilangan pelancong asing yang akan menaiki kereta api"
    ],
    "correctIndex": 1,
    "explanation": "Landasan kereta api memerlukan kecerunan yang terkawal. Kawasan pergunungan memaksa pembinaan terowong serta jambatan besar dan penilaian kestabilan cerun, dan ini kos terbesar projek.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_07",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Mengapakah pembinaan pelabuhan di Asia tertumpu di kawasan teluk yang dalam?",
    "options": [
      "Kedalaman air tidak mempengaruhi pemilihan lokasi pelabuhan",
      "Air yang dalam membolehkan kapal besar berlabuh dan teluk melindungi kapal daripada ombak",
      "Air yang cetek lebih sesuai untuk kapal kargo besar",
      "Teluk yang dalam menghalang kapal daripada memasuki pelabuhan"
    ],
    "correctIndex": 1,
    "explanation": "Kapal kargo moden memerlukan kedalaman tertentu untuk berlabuh. Teluk yang dalam dan terlindung memberi keselamatan daripada gelombang besar serta memudahkan pergerakan kapal.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_08",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Apakah kesan kemajuan teknologi pembinaan terowong terhadap jaringan pengangkutan di Asia?",
    "options": [
      "Terowong menghalang pertumbuhan ekonomi di kawasan pergunungan",
      "Terowong hanya sesuai dibina di kawasan laut dalam",
      "Laluan pengangkutan boleh dilalui terus melalui gunung dan memendekkan masa perjalanan",
      "Pengangkutan tidak lagi memerlukan sebarang infrastruktur"
    ],
    "correctIndex": 2,
    "explanation": "Terowong membolehkan jalan raya dan landasan kereta api menembusi gunung tanpa memanjat lereng yang curam, lalu memendekkan jarak dan masa perjalanan.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_09",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "H",
    "q": "Dua negara di Asia mempunyai ekonomi yang berkembang pesat. Negara P melabur besar dalam kereta api laju antarabandar manakala negara Q membina lebuh raya baharu. Apakah pertimbangan paling penting bagi perbezaan pilihan itu?",
    "options": [
      "Kereta api laju sesuai untuk laluan berpenduduk padat manakala lebuh raya memberi fleksibiliti ke kawasan kurang padat",
      "Kereta api laju lebih murah dibina daripada jalan raya di semua kawasan",
      "Lebuh raya tidak memerlukan penyelenggaraan sepanjang tahun",
      "Negara Q tidak mempunyai penduduk yang perlu bergerak"
    ],
    "correctIndex": 0,
    "explanation": "Pengangkutan rel lebih cekap untuk kawasan berpenduduk padat kerana ia boleh membawa ramai penumpang dalam satu masa. Jalan raya pula memberi akses pintu ke pintu ke kawasan yang lebih tersebar.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s2_10",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "H",
    "q": "Sebuah kawasan pedalaman Asia yang kaya dengan hasil pertanian tidak membangun walaupun mempunyai tenaga kerja yang ramai. Analisis manakah paling tepat tentang punca keadaan itu?",
    "options": [
      "Hasil pertanian tidak diperlukan oleh penduduk di kawasan mana-mana",
      "Kawasan pedalaman sentiasa kekurangan tenaga kerja",
      "Bentuk muka bumi tidak pernah mempengaruhi pembinaan jalan",
      "Kekurangan jaringan pengangkutan menyukarkan hasil dihantar ke pasaran dengan kos berpatutan"
    ],
    "correctIndex": 3,
    "explanation": "Tanpa jalan dan sistem pengangkutan yang baik, hasil pertanian lambat sampai ke pasaran dan kos penghantaran tinggi. Hasil yang kaya tidak memberi pulangan ekonomi jika akses terhad.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_01",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah kesan positif perkembangan pengangkutan terhadap ekonomi Asia?",
    "options": [
      "Semua kegiatan ekonomi berhenti kerana jalan raya dibina",
      "Harga barang import sentiasa meningkat tanpa sebab",
      "Hubungan dagang antara negara menjadi terputus",
      "Perdagangan antarabangsa dan sektor pelancongan berkembang lebih pesat"
    ],
    "correctIndex": 3,
    "explanation": "Pengangkutan yang cekap memudahkan barang dihantar ke pasaran antarabangsa dan membolehkan pelancong bergerak antara negara, sekali gus merancakkan kedua-dua sektor.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_02",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah kesan negatif pengangkutan terhadap alam sekitar di Asia?",
    "options": [
      "Pembukaan peluang pekerjaan dalam sektor logistik",
      "Pencemaran udara dan bunyi akibat pertambahan kenderaan",
      "Peningkatan pendapatan penduduk bandar",
      "Perluasan pasaran eksport barangan"
    ],
    "correctIndex": 1,
    "explanation": "Kenderaan bermotor membebaskan gas pencemar dan menghasilkan bunyi bising. Pertambahan bilangan kenderaan di bandar besar Asia menjadikan pencemaran ini semakin serius.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_03",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah maksud pencemaran bunyi dalam konteks pengangkutan?",
    "options": [
      "Peningkatan jumlah kenderaan di jalan raya pada waktu malam",
      "Kerja pembinaan jalan yang menggunakan batu kerikil",
      "Penggunaan hon yang dibenarkan oleh undang-undang",
      "Bunyi bising yang berlebihan daripada kenderaan sehingga mengganggu keselesaan dan kesihatan"
    ],
    "correctIndex": 3,
    "explanation": "Pencemaran bunyi berlaku apabila bunyi daripada kenderaan, kapal terbang dan kereta api melebihi tahap selesa, lalu mengganggu tidur, tumpuan dan kesihatan penduduk.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_04",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah kesan tempatan yang lazim dialami oleh bandar besar di Asia akibat pertambahan kenderaan?",
    "options": [
      "Penutupan semua pusat perniagaan",
      "Kesesakan lalu lintas pada waktu puncak",
      "Penurunan suhu bandar secara mendadak",
      "Pengurangan bilangan penduduk bandar"
    ],
    "correctIndex": 1,
    "explanation": "Bilangan kenderaan yang melebihi kapasiti jalan menyebabkan kesesakan pada waktu puncak, terutamanya di bandar besar dengan kepadatan penduduk yang tinggi.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_05",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Bagaimanakah pengangkutan menyumbang kepada pemanasan global?",
    "options": [
      "Pembakaran bahan api fosil oleh kenderaan membebaskan karbon dioksida ke atmosfera",
      "Pengangkutan mengurangkan jumlah karbon dioksida di udara",
      "Kenderaan menyerap haba Matahari dan menyimpannya di dalam enjin",
      "Jalan raya bertindak sebagai penebat haba di permukaan bumi"
    ],
    "correctIndex": 0,
    "explanation": "Kenderaan yang menggunakan petrol dan diesel membebaskan karbon dioksida iaitu gas rumah hijau utama. Penambahan gas ini memperkuat kesan rumah hijau dan menyumbang kepada pemanasan global.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_06",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Mengapakah pembinaan lebuh raya baharu kadang-kadang dikritik oleh penduduk tempatan walaupun ia mempercepat perjalanan?",
    "options": [
      "Pembinaan itu mengambil tanah, menebang pokok dan memisahkan kawasan petempatan",
      "Lebuh raya baharu tidak boleh digunakan oleh kenderaan bermotor",
      "Lebuh raya baharu memperlambatkan perjalanan antara bandar",
      "Lebuh raya baharu mengurangkan bilangan kenderaan di jalan lama"
    ],
    "correctIndex": 0,
    "explanation": "Pembinaan lebuh raya melibatkan pengambilan tanah, penebangan pokok dan pemisahan kawasan komuniti. Kesan sosial dan alam sekitar ini perlu diimbangi dengan manfaat pengangkutan.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_07",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Apakah langkah yang dapat mengurangkan pencemaran udara daripada sektor pengangkutan di bandar Asia?",
    "options": [
      "Menambah bilangan kereta persendirian di jalan raya",
      "Membina lebih banyak stesen minyak di tengah bandar",
      "Memendekkan tempoh penyelenggaraan kenderaan",
      "Menggalakkan pengangkutan awam, kenderaan elektrik dan berjalan kaki"
    ],
    "correctIndex": 3,
    "explanation": "Pengangkutan awam dan kenderaan elektrik mengurangkan pembakaran bahan api fosil, manakala berjalan kaki menghapuskan pelepasan langsung untuk perjalanan pendek.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_08",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Sebuah pulau pelancongan di Asia menerima terlalu ramai pelancong pada musim cuti sehingga kemudahan pelabuhan tidak mencukupi. Apakah kesan paling munasabah?",
    "options": [
      "Alam sekitar pulau bertambah baik secara automatik",
      "Kemudahan pelabuhan bertambah sendiri tanpa pelaburan",
      "Kesesakan, penurunan kualiti perkhidmatan dan tekanan terhadap alam sekitar pulau",
      "Bilangan pelancong bertambah tanpa had sehingga tiada masalah"
    ],
    "correctIndex": 2,
    "explanation": "Bilangan pelancong yang melebihi kapasiti pelabuhan dan kemudahan pulau menyebabkan kesesakan, perkhidmatan merosot dan tekanan terhadap sumber serta ekosistem pulau.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_09",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "H",
    "q": "Sebuah negara Asia merancang pembinaan lapangan terbang baharu berhampiran kawasan hutan simpan. Kajian manakah paling wajar dilakukan sebelum projek diteruskan?",
    "options": [
      "Kajian bilangan iklan pelancongan di media sosial",
      "Kajian harga tiket kapal laut berdekatan",
      "Kajian impak alam sekitar yang menilai kesan bunyi, habitat dan kualiti udara",
      "Kajian warna cat bangunan terminal lapangan terbang"
    ],
    "correctIndex": 2,
    "explanation": "Kajian impak alam sekitar menilai kesan bunyi pesawat, kemusnahan habitat dan pelepasan bahan pencemar. Ia membolehkan langkah pencegahan dirancang sebelum projek bermula.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b8_s3_10",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "H",
    "q": "Sebuah bandar di Asia berjaya mengurangkan kesesakan lalu lintas tetapi paras pencemaran udara tidak menurun. Apakah penjelasan paling munasabah?",
    "options": [
      "Bilangan perjalanan tetap sama dan bahan pencemar juga datang daripada kilang serta sumber lain",
      "Pengurangan kesesakan secara automatik menghapuskan semua pencemaran",
      "Kilang tidak pernah melepaskan bahan pencemar ke udara",
      "Pencemaran udara hanya berpunca daripada bunyi kenderaan"
    ],
    "correctIndex": 0,
    "explanation": "Kesesakan boleh berkurang melalui pengurusan lalu lintas tanpa mengurangkan jumlah perjalanan atau pelepasan. Kilang, pembakaran terbuka dan sumber lain turut menyumbang kepada pencemaran udara.",
    "ref": "Bab 8, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_01",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Apakah maksud kesan rumah hijau?",
    "options": [
      "Proses atmosfera memantulkan semua haba Matahari keluar dari Bumi",
      "Proses pembinaan rumah hijau untuk menanam sayur di kawasan sejuk",
      "Proses penipisan lapisan ozon oleh gas klorofluorokarbon",
      "Proses atmosfera memerangkap sebahagian haba Matahari supaya suhu Bumi kekal sesuai"
    ],
    "correctIndex": 3,
    "explanation": "Gas rumah hijau dalam atmosfera menyerap dan memerangkap sebahagian haba yang dipancarkan dari permukaan Bumi, lalu mengekalkan suhu purata Bumi pada paras yang membolehkan kehidupan.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_02",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah gas rumah hijau utama?",
    "options": [
      "Nitrogen",
      "Oksigen",
      "Helium",
      "Karbon dioksida"
    ],
    "correctIndex": 3,
    "explanation": "Karbon dioksida ialah gas rumah hijau utama yang dibebaskan oleh pembakaran bahan api fosil. Nitrogen dan oksigen ialah gas utama atmosfera tetapi tidak menjadi punca utama kesan rumah hijau.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_03",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Apakah maksud pemanasan global?",
    "options": [
      "Perubahan arah putaran Bumi pada paksinya",
      "Peningkatan suhu purata atmosfera dan lautan Bumi dalam jangka panjang",
      "Penurunan suhu purata Bumi pada waktu malam sahaja",
      "Peningkatan kelembapan udara di kawasan khatulistiwa"
    ],
    "correctIndex": 1,
    "explanation": "Pemanasan global ialah kenaikan suhu purata permukaan Bumi dalam tempoh panjang akibat penambahan gas rumah hijau daripada kegiatan manusia.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_04",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Mengapakah kesan rumah hijau semula jadi penting kepada kehidupan di Bumi?",
    "options": [
      "Ia mengawal kelajuan putaran Bumi",
      "Ia mengekalkan suhu Bumi supaya tidak terlalu sejuk untuk kehidupan",
      "Ia menghalang semua cahaya Matahari daripada sampai ke Bumi",
      "Ia menghapuskan semua gas berbahaya di atmosfera"
    ],
    "correctIndex": 1,
    "explanation": "Tanpa kesan rumah hijau semula jadi, haba akan terlepas ke angkasa dengan cepat dan suhu purata Bumi menjadi terlalu rendah untuk menyokong kehidupan.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_05",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah BUKAN gas rumah hijau?",
    "options": [
      "Oksigen",
      "Nitrus oksida",
      "Metana",
      "Karbon dioksida"
    ],
    "correctIndex": 0,
    "explanation": "Oksigen ialah gas yang diperlukan untuk pernafasan dan pembakaran, tetapi ia tidak tergolong sebagai gas rumah hijau. Metana, karbon dioksida dan nitrus oksida ialah gas rumah hijau.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_06",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Apakah perbezaan antara kesan rumah hijau dengan pemanasan global?",
    "options": [
      "Kesan rumah hijau ialah proses semula jadi memerangkap haba manakala pemanasan global ialah kenaikan suhu akibat proses itu diperkuat",
      "Kesan rumah hijau berlaku hanya pada waktu malam manakala pemanasan global pada waktu siang",
      "Kesan rumah hijau hanya berlaku di kawasan kutub manakala pemanasan global di khatulistiwa",
      "Kedua-duanya merujuk kepada fenomena yang sama tanpa sebarang perbezaan"
    ],
    "correctIndex": 0,
    "explanation": "Kesan rumah hijau ialah mekanisme semula jadi yang mengekalkan haba. Apabila kepekatan gas rumah hijau meningkat, haba yang terperangkap bertambah dan suhu purata Bumi naik, iaitu pemanasan global.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_07",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Mengapakah penipisan lapisan ozon tidak sama dengan pemanasan global?",
    "options": [
      "Kedua-duanya disebabkan oleh gas hidrogen sahaja",
      "Penipisan ozon berkaitan penyusutan lapisan pelindung sinaran ultraviolet manakala pemanasan global berkaitan peningkatan suhu purata",
      "Penipisan ozon hanya berlaku di lautan manakala pemanasan global di daratan",
      "Penipisan ozon menyekat haba manakala pemanasan global menyejukkan Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Lapisan ozon melindungi Bumi daripada sinaran ultraviolet dan boleh menipis akibat klorofluorokarbon. Pemanasan global pula berkaitan peningkatan suhu akibat gas rumah hijau. Kedua-duanya fenomena berasingan.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_08",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Sebuah kilang membebaskan banyak gas ke atmosfera. Gas manakah paling berkaitan secara langsung dengan peningkatan kesan rumah hijau?",
    "options": [
      "Nitrogen yang diambil dari udara sekeliling",
      "Helium yang digunakan dalam belon hiasan",
      "Karbon dioksida daripada pembakaran arang batu",
      "Oksigen yang dialirkan ke dalam dapur peleburan"
    ],
    "correctIndex": 2,
    "explanation": "Pembakaran arang batu menghasilkan karbon dioksida yang berpanjangan dalam atmosfera dan merupakan penyumbang utama kesan rumah hijau serta pemanasan global.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_09",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Seorang murid menyatakan bahawa kesan rumah hijau sepenuhnya buruk dan harus dihapuskan daripada atmosfera. Penilaian manakah paling tepat?",
    "options": [
      "Pernyataan itu tidak tepat kerana kesan rumah hijau semula jadi diperlukan untuk mengekalkan suhu Bumi",
      "Pernyataan itu tepat kerana semua gas rumah hijau hanya dihasilkan oleh manusia",
      "Pernyataan itu tepat kerana Bumi tidak memerlukan sebarang haba",
      "Pernyataan itu tidak tepat kerana kesan rumah hijau hanya berlaku di kawasan gurun"
    ],
    "correctIndex": 0,
    "explanation": "Gas rumah hijau semula jadi mengekalkan suhu Bumi pada paras yang sesuai untuk kehidupan. Masalah timbul apabila kepekatannya bertambah akibat aktiviti manusia sehingga pemanasan berlaku terlalu cepat.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s1_10",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Metana ialah gas rumah hijau yang lebih kuat daripada karbon dioksida per unit jisim. Sumber utamanya termasuklah ternakan ruminan dan tapak pelupusan sampah. Apakah kesimpulan paling tepat?",
    "options": [
      "Metana hanya dibebaskan oleh kenderaan petrol di jalan raya",
      "Kepekatan metana di atmosfera tidak mempengaruhi suhu Bumi",
      "Mengurangkan pembaziran makanan dan menguruskan sampah dengan baik boleh mengurangkan pelepasan metana",
      "Metana tidak mempunyai kaitan dengan kegiatan manusia langsung"
    ],
    "correctIndex": 2,
    "explanation": "Sisa makanan yang mereput di tapak pelupusan menghasilkan metana, dan ternakan ruminan turut membebaskan metana daripada proses pencernaan. Mengurangkan pembaziran makanan dan mengurus sampah secara betul menurunkan pelepasan gas ini.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_01",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah punca utama pemanasan global?",
    "options": [
      "Penanaman semula hutan secara besar-besaran",
      "Penggunaan tenaga suria dan angin",
      "Amalan kitar semula sampah di rumah",
      "Pembakaran bahan api fosil seperti arang batu dan petroleum"
    ],
    "correctIndex": 3,
    "explanation": "Pembakaran bahan api fosil membebaskan karbon dioksida dalam kuantiti besar. Pilihan lain pula ialah langkah yang membantu mengurangkan pemanasan global.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_02",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Bagaimanakah penyahhutanan menyumbang kepada pemanasan global?",
    "options": [
      "Penebangan pokok mengurangkan jumlah kenderaan di jalan raya",
      "Pokok yang ditebang tidak lagi menyerap karbon dioksida daripada atmosfera",
      "Pokok yang ditebang membebaskan oksigen dalam jumlah besar",
      "Penebangan pokok menambah bilangan hutan yang menyerap haba"
    ],
    "correctIndex": 1,
    "explanation": "Pokok menyerap karbon dioksida melalui proses fotosintesis. Apabila hutan ditebang, keupayaan menyerap gas itu berkurang dan sebahagian karbon yang tersimpan turut terbebas.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_03",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah kesan pemanasan global terhadap aras laut?",
    "options": [
      "Aras laut menurun kerana air laut bertukar menjadi ais",
      "Aras laut kekal sama kerana jumlah air di Bumi tidak berubah",
      "Aras laut berkurangan kerana lebih banyak air meresap ke dalam tanah",
      "Aras laut meningkat kerana ais di kutub mencair dan air laut mengembang"
    ],
    "correctIndex": 3,
    "explanation": "Suhu yang meningkat mencairkan glasier dan lapisan ais di kutub. Air laut yang lebih panas juga mengembang, dan kedua-dua proses ini menaikkan aras laut.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_04",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah kesan pemanasan global terhadap cuaca?",
    "options": [
      "Suhu Bumi menurun secara berterusan",
      "Cuaca menjadi lebih ekstrem seperti gelombang haba dan hujan lebat yang tidak menentu",
      "Cuaca menjadi sama sepanjang tahun di semua kawasan",
      "Hujan berhenti turun di semua kawasan Bumi"
    ],
    "correctIndex": 1,
    "explanation": "Peningkatan suhu mengganggu kitaran air dan pola atmosfera, sehingga kejadian cuaca ekstrem seperti gelombang haba, kemarau panjang dan hujan lebat menjadi lebih kerap.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_05",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah punca pemanasan global akibat aktiviti perindustrian?",
    "options": [
      "Pelepasan asap kilang yang mengandungi karbon dioksida dan gas rumah hijau lain",
      "Penanaman pokok di kawasan kilang",
      "Penggunaan air hujan dalam proses pengilangan",
      "Pembinaan bumbung hijau di atas bangunan kilang"
    ],
    "correctIndex": 0,
    "explanation": "Kilang membakar bahan api untuk menjana tenaga dan melepaskan karbon dioksida serta gas lain. Langkah hijau seperti penanaman pokok pula membantu mengurangkan kesan itu.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_06",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Sebuah kawasan hutan seluas 10 hektar ditebang untuk pembangunan. Apakah kesan langsung yang dijangka terhadap keupayaan kawasan itu menyerap karbon dioksida?",
    "options": [
      "Keupayaan menyerap karbon dioksida berkurangan kerana bilangan pokok berkurang",
      "Keupayaan menyerap karbon dioksida bertambah kerana kawasan itu lebih lapang",
      "Keupayaan menyerap karbon dioksida tidak berubah kerana tanah masih ada",
      "Keupayaan menyerap karbon dioksida bertambah kerana bangunan menyerap gas"
    ],
    "correctIndex": 0,
    "explanation": "Pokok menyerap karbon dioksida semasa fotosintesis. Semakin sedikit pokok, semakin rendah kapasiti penyerapan, dan karbon yang tersimpan dalam pokok pula terbebas apabila ia dibakar atau mereput.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_07",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Mengapakah kenaikan aras laut mengancam kawasan petempatan pesisir?",
    "options": [
      "Air laut menjadi tawar sehingga sesuai untuk minuman",
      "Penduduk pesisir menerima lebih banyak hujan secara automatik",
      "Kawasan rendah di pesisir mudah ditenggelami air dan hakisan pantai meningkat",
      "Kawasan pesisir menjadi lebih tinggi kerana air laut bertambah"
    ],
    "correctIndex": 2,
    "explanation": "Aras laut yang lebih tinggi menenggelamkan kawasan rendah, mempercepat hakisan pantai dan boleh memasukkan air masin ke dalam sumber air tawar penduduk.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_08",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Sebuah pulau kecil di Asia kehilangan sebahagian kawasan pantainya setiap dekad. Faktor manakah paling munasabah di sebalik keadaan itu?",
    "options": [
      "Pengurangan jumlah sampah di kawasan pantai",
      "Pembinaan lebih banyak rumah di bahagian tengah pulau",
      "Kenaikan aras laut akibat pencairan ais dan pengembangan air laut",
      "Penambahan bilangan pokok bakau di pinggir pulau"
    ],
    "correctIndex": 2,
    "explanation": "Kenaikan aras laut akibat pemanasan global menggerus kawasan rendah pulau, terutamanya jika tiada penghalang semula jadi seperti bakau untuk mengurangkan tenaga ombak.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_09",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Sebuah negara ingin mengurangkan pelepasan karbon dioksida daripada sektor tenaga. Cadangan manakah paling berkesan dari segi jangka panjang?",
    "options": [
      "Mengurangkan pelepasan hanya dengan membina cerobong yang lebih tinggi",
      "Memindahkan janakuasa arang batu ke kawasan pedalaman",
      "Menggantikan sebahagian janakuasa arang batu dengan tenaga suria dan angin",
      "Menambah kapasiti janakuasa arang batu untuk menyokong industri"
    ],
    "correctIndex": 2,
    "explanation": "Tenaga suria dan angin tidak membebaskan karbon dioksida semasa menjana elektrik. Penukaran sumber tenaga mengurangkan pelepasan secara menyeluruh, sedangkan cerobong tinggi atau pemindahan lokasi hanya mengalihkan pencemaran.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s2_10",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Sebuah letusan gunung berapi membebaskan sejumlah besar karbon dioksida dalam satu kejadian, tetapi kesan jangka panjangnya kepada pemanasan global lebih kecil berbanding kegiatan manusia. Apakah penjelasan paling tepat?",
    "options": [
      "Letusan gunung berapi membebaskan lebih banyak gas berbanding seluruh kegiatan manusia",
      "Pelepasan manusia berterusan setiap tahun dan berterusan menambah gas rumah hijau dalam atmosfera",
      "Letusan gunung berapi tidak pernah membebaskan sebarang karbon dioksida",
      "Kegiatan manusia tidak membebaskan gas rumah hijau langsung"
    ],
    "correctIndex": 1,
    "explanation": "Pembakaran bahan api fosil berterusan setiap hari dan tahun demi tahun, jadi jumlahnya terkumpul dalam atmosfera. Letusan gunung berapi bersifat jarang dan pelepasan karbonnya jauh lebih kecil berbanding jumlah kumulatif manusia.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_01",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah langkah mengurangkan pemanasan global?",
    "options": [
      "Membuka lebih banyak kawasan hutan untuk pembangunan",
      "Meningkatkan penggunaan kereta persendirian",
      "Meningkatkan penggunaan tenaga boleh baharu seperti tenaga suria",
      "Menambah pembakaran arang batu untuk menjana elektrik"
    ],
    "correctIndex": 2,
    "explanation": "Tenaga boleh baharu seperti suria, angin dan hidro tidak membebaskan karbon dioksida semasa menjana elektrik. Langkah lain pula menambah pelepasan gas rumah hijau.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_02",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah maksud amalan 3R?",
    "options": [
      "Read, Recall dan Revise iaitu membaca, mengingat dan mengulang kaji",
      "Run, Ride dan Relay iaitu berlari, berbasikal dan berganti",
      "Reduce, Repair dan Rebuild iaitu mengurangkan, membaiki dan membina semula",
      "Reduce, Reuse dan Recycle iaitu mengurangkan, menggunakan semula dan mengitar semula"
    ],
    "correctIndex": 3,
    "explanation": "3R merujuk kepada Reduce (kurangkan penggunaan), Reuse (guna semula) dan Recycle (kitar semula). Amalan ini mengurangkan sampah dan penggunaan sumber baharu.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_03",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Bagaimanakah penggunaan pengangkutan awam membantu mengurangkan pemanasan global?",
    "options": [
      "Ia mengurangkan bilangan kenderaan persendirian dan jumlah gas rumah hijau yang dibebaskan",
      "Ia meningkatkan bilangan kenderaan di jalan raya",
      "Ia membolehkan lebih banyak bahan api fosil dibakar",
      "Ia menghalang penanaman pokok di kawasan bandar"
    ],
    "correctIndex": 0,
    "explanation": "Satu bas atau tren dapat membawa ramai penumpang berbanding kereta persendirian, jadi jumlah bahan api yang dibakar dan gas rumah hijau yang dilepaskan berkurangan.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_04",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah manfaat penanaman semula hutan terhadap pemanasan global?",
    "options": [
      "Pokok meningkatkan suhu kawasan sekeliling secara mendadak",
      "Pokok menyerap karbon dioksida dan mengurangkan kepekatan gas rumah hijau",
      "Pokok membebaskan karbon dioksida dalam jumlah besar",
      "Pokok menghalang hujan daripada turun ke tanah"
    ],
    "correctIndex": 1,
    "explanation": "Pokok menyerap karbon dioksida semasa fotosintesis dan menyimpan karbon dalam batang serta daunnya. Penanaman semula hutan menambah kapasiti penyerapan karbon.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_05",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Mengapakah kecekapan tenaga penting dalam mengurangkan pemanasan global?",
    "options": [
      "Kecekapan tenaga hanya berkaitan dengan harga barang",
      "Kecekapan tenaga menambah pelepasan gas rumah hijau",
      "Peranti cekap tenaga menggunakan kurang elektrik sehingga kurang bahan api fosil dibakar",
      "Peranti cekap tenaga sentiasa menggunakan lebih banyak elektrik"
    ],
    "correctIndex": 2,
    "explanation": "Sebahagian besar elektrik dijana daripada bahan api fosil. Apabila peranti menggunakan elektrik dengan lebih cekap, penjanaan kuasa berkurang dan pelepasan karbon dioksida turut menurun.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_06",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Sebuah sekolah ingin mengurangkan pelepasan karbon dioksidanya. Amalan manakah paling berkesan untuk dilaksanakan secara menyeluruh?",
    "options": [
      "Membakar sampah sekolah di belakang padang",
      "Menukar semua tingkap kepada tingkap tertutup tanpa pengudaraan",
      "Memasang lampu cekap tenaga dan menggalakkan pelajar berkongsi kenderaan ke sekolah",
      "Menambah bilangan penghawa dingin di setiap bilik darjah"
    ],
    "correctIndex": 2,
    "explanation": "Lampu cekap tenaga mengurangkan penggunaan elektrik, manakala perkongsian kenderaan mengurangkan perjalanan kereta persendirian. Kedua-duanya menurunkan pembakaran bahan api fosil secara langsung.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_07",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Apakah perbezaan antara langkah mitigasi dengan langkah adaptasi dalam menangani pemanasan global?",
    "options": [
      "Mitigasi menyesuaikan diri dengan kesan manakala adaptasi mengurangkan punca pelepasan",
      "Kedua-dua langkah merujuk kepada perkara yang sama",
      "Mitigasi hanya melibatkan penanaman pokok manakala adaptasi hanya melibatkan pemakaian topi",
      "Mitigasi mengurangkan punca pelepasan gas rumah hijau manakala adaptasi menyesuaikan diri dengan kesan yang sudah berlaku"
    ],
    "correctIndex": 3,
    "explanation": "Mitigasi seperti penukaran kepada tenaga boleh baharu mengurangkan pelepasan gas. Adaptasi seperti membina benteng di pesisir pantai pula membantu masyarakat menghadapi kesan kenaikan aras laut yang sudah berlaku.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_08",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Mengapakah satu langkah sahaja tidak mencukupi untuk menangani pemanasan global?",
    "options": [
      "Pemanasan global tidak berkaitan dengan kegiatan manusia",
      "Pelepasan gas rumah hijau datang daripada pelbagai sektor seperti tenaga, pengangkutan dan pertanian",
      "Pemanasan global hanya disebabkan oleh satu jenis kilang sahaja",
      "Langkah tunggal sentiasa memberi kesan yang lebih besar daripada gabungan langkah"
    ],
    "correctIndex": 1,
    "explanation": "Tenaga, pengangkutan, industri, pertanian dan pembuangan sampah semuanya menyumbang pelepasan. Tindakan menyeluruh diperlukan supaya jumlah pelepasan berkurangan dengan berkesan.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_09",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Sebuah bandar pesisir menghadapi kenaikan aras laut dan banjir pada musim hujan. Cadangan manakah menggabungkan langkah mitigasi dan adaptasi dengan tepat?",
    "options": [
      "Membina benteng dan memulihkan hutan bakau sambil mengurangkan pelepasan karbon dioksida bandar",
      "Hanya membina benteng tanpa mengurangkan pelepasan karbon dioksida",
      "Meningkatkan pelepasan kilang supaya ekonomi bertambah baik",
      "Memindahkan semua penduduk tanpa sebarang usaha mengurangkan pelepasan"
    ],
    "correctIndex": 0,
    "explanation": "Benteng dan pemulihan bakau ialah langkah adaptasi untuk melindungi pesisir. Pengurangan pelepasan karbon dioksida pula langkah mitigasi yang menangani punca kenaikan aras laut. Gabungan keduanya paling menyeluruh.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b9_s3_10",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Sebuah kilang mendakwa telah menjadi mesra alam kerana menanam 200 pokok di halaman kilang. Namun pelepasan gas rumah hijaunya masih tidak berubah. Penilaian manakah paling tepat?",
    "options": [
      "Kilang itu sudah sepenuhnya mesra alam kerana telah menanam pokok",
      "Penanaman pokok menyebabkan pelepasan gas rumah hijau bertambah",
      "Pokok di halaman kilang menyerap semua jenis bahan pencemar udara",
      "Penanaman pokok memberi manfaat tetapi tidak mencukupi jika pelepasan gas rumah hijau kilang dikekalkan"
    ],
    "correctIndex": 3,
    "explanation": "Pokok menyerap beberapa bahan pencemar dan karbon dioksida, tetapi keupayaan itu terhad. Pelepasan utama perlu dikurangkan melalui teknologi dan bahan api yang lebih bersih supaya perubahan benar-benar berlaku.",
    "ref": "Bab 9, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_01",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Apakah maksud teknologi hijau?",
    "options": [
      "Teknologi yang menggunakan warna hijau pada semua produk elektronik",
      "Teknologi yang dibangunkan untuk mengurangkan kesan negatif terhadap alam sekitar",
      "Teknologi yang menggunakan sepenuhnya bahan api fosil untuk menjana tenaga",
      "Teknologi yang hanya bertujuan menambah bilangan kilang di bandar"
    ],
    "correctIndex": 1,
    "explanation": "Teknologi hijau direka untuk mengurangkan pencemaran dan penggunaan sumber, termasuk tenaga boleh baharu, pengurusan sisa dan bangunan cekap tenaga.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_02",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah ciri teknologi hijau?",
    "options": [
      "Meningkatkan pelepasan gas rumah hijau",
      "Menambah jumlah sisa yang dibuang ke sungai",
      "Menggunakan bahan api fosil dalam kuantiti yang lebih besar",
      "Menggalakkan penggunaan sumber tenaga boleh baharu"
    ],
    "correctIndex": 3,
    "explanation": "Teknologi hijau mengutamakan sumber boleh baharu, kecekapan tenaga dan pengurangan sisa. Pilihan lain ialah ciri teknologi yang merosakkan alam sekitar.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_03",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Apakah maksud pembangunan lestari?",
    "options": [
      "Pembangunan yang menghentikan semua kegiatan ekonomi",
      "Pembangunan yang hanya melibatkan pembinaan bangunan tinggi",
      "Pembangunan yang memenuhi keperluan hari ini tanpa menjejaskan keperluan generasi akan datang",
      "Pembangunan yang mengutamakan keuntungan hari ini tanpa mengambil kira masa depan"
    ],
    "correctIndex": 2,
    "explanation": "Pembangunan lestari mengimbangi pertumbuhan ekonomi, kesejahteraan sosial dan pemuliharaan alam sekitar supaya sumber kekal untuk generasi akan datang.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_04",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah BUKAN contoh teknologi hijau?",
    "options": [
      "Penjana arang batu berkapasiti besar",
      "Sistem pengumpulan air hujan",
      "Panel solar",
      "Lampu jimat tenaga"
    ],
    "correctIndex": 0,
    "explanation": "Penjana arang batu membakar bahan api fosil dan membebaskan karbon dioksida dalam kuantiti besar. Panel solar, lampu jimat tenaga dan pengumpulan air hujan pula mengurangkan penggunaan sumber.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_05",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "L",
    "q": "Apakah maksud kecekapan tenaga?",
    "options": [
      "Penggunaan tenaga dalam jumlah yang sebesar mungkin setiap hari",
      "Penambahan bilangan peralatan elektrik di dalam rumah",
      "Penggunaan tenaga hanya pada waktu malam",
      "Penggunaan tenaga secara minimum untuk menghasilkan kerja atau perkhidmatan yang sama"
    ],
    "correctIndex": 3,
    "explanation": "Kecekapan tenaga bermaksud kita memperoleh hasil yang sama dengan kurang tenaga, contohnya lampu LED yang menggunakan kuasa lebih rendah berbanding lampu pijar.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_06",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Sebuah sekolah ingin mengurangkan penggunaan elektrik tanpa mengurangkan keperluan pembelajaran. Langkah manakah paling tepat menerangkan ciri teknologi hijau?",
    "options": [
      "Membeli peralatan elektronik baharu tanpa menyemak penggunaan kuasa",
      "Menukar lampu pijar kepada lampu LED yang cekap tenaga di semua bilik darjah",
      "Menambah penghawa dingin supaya bilik darjah lebih sejuk",
      "Menghidupkan semua lampu pada waktu siang tanpa mengira keperluan"
    ],
    "correctIndex": 1,
    "explanation": "Lampu LED memberi kecerahan yang sama dengan kurang kuasa. Ini ciri teknologi hijau kerana kualiti perkhidmatan dikekalkan manakala penggunaan tenaga dan pelepasan karbon berkurangan.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_07",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Mengapakah teknologi hijau tidak semestinya bermaksud teknologi yang paling tinggi dan paling mahal?",
    "options": [
      "Teknologi hijau hanya dibangunkan di negara maju sahaja",
      "Teknologi hijau tidak mempunyai kaitan dengan kos atau alam sekitar",
      "Teknologi sederhana seperti pengumpulan air hujan dan kitar semula juga melindungi alam sekitar",
      "Teknologi hijau wajib menggunakan komponen mikroelektronik termahal"
    ],
    "correctIndex": 2,
    "explanation": "Langkah sederhana seperti menadah air hujan, menggunakan semula bekas dan mengasingkan sampah tetap mengurangkan penggunaan sumber. Yang menjadi ukuran ialah kesan terhadap alam sekitar, bukan harga.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_08",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "M",
    "q": "Sebuah syarikat menyatakan produk baharunya ialah produk hijau kerana kotaknya berwarna hijau. Apakah penilaian paling tepat?",
    "options": [
      "Warna hijau pada kotak membuktikan semua bahan produk boleh dikitar semula",
      "Kotak berwarna hijau sentiasa menggunakan kurang kertas",
      "Produk itu pasti menggunakan tenaga boleh baharu sepenuhnya",
      "Warna kemasan bukan penentu kerana teknologi hijau dinilai daripada kesan sebenar terhadap alam sekitar"
    ],
    "correctIndex": 3,
    "explanation": "Teknologi hijau dinilai daripada bahan yang digunakan, tenaga yang diperlukan dan sisa yang dihasilkan. Warna pembungkusan tidak mengubah kesan produk terhadap alam sekitar.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_09",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "H",
    "q": "Dua kilang menghasilkan produk yang sama. Kilang X menggunakan bahan mentah kitar semula dan tenaga suria manakala kilang Y menggunakan bahan mentah baharu dan arang batu. Apakah kesimpulan paling tepat tentang kesan kedua-dua kilang?",
    "options": [
      "Kilang X menghasilkan jejak karbon yang lebih rendah kerana kurang pembakaran bahan api fosil dan kurang sisa bahan mentah",
      "Kilang Y lebih mesra alam kerana menggunakan bahan mentah yang baharu",
      "Kedua-dua kilang memberi kesan alam sekitar yang sama kerana menghasilkan produk yang sama",
      "Kilang X membebaskan lebih banyak karbon dioksida kerana menggunakan tenaga suria"
    ],
    "correctIndex": 0,
    "explanation": "Bahan mentah kitar semula mengurangkan keperluan perlombongan dan penebangan, manakala tenaga suria tidak membebaskan karbon dioksida semasa menjana elektrik. Gabungan ini menurunkan jumlah kesan alam sekitar.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s1_10",
    "unit": "b10",
    "skill": "b10_s1",
    "diff": "H",
    "q": "Sebuah peranti moden menggunakan elektrik yang sangat sedikit tetapi diperbuat daripada bahan yang sukar dikitar semula dan cepat rosak. Bolehkah peranti itu dianggap teknologi hijau sepenuhnya?",
    "options": [
      "Tidak, kerana kitaran hayat penuh termasuk bahan, ketahanan dan pelupusan peranti perlu dinilai",
      "Ya, kerana penggunaan elektrik yang rendah sudah mencukupi untuk semua kriteria",
      "Ya, kerana peranti itu menggunakan teknologi moden yang tinggi",
      "Tidak, kerana tiada peranti moden yang boleh menggunakan elektrik rendah"
    ],
    "correctIndex": 0,
    "explanation": "Penilaian teknologi hijau merangkumi keseluruhan kitaran hayat. Peranti yang cepat rosak dan sukar dikitar semula menghasilkan sisa elektronik, walaupun penggunaan elektriknya rendah.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_01",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah sumber tenaga boleh baharu di Malaysia?",
    "options": [
      "Arang batu",
      "Gas asli",
      "Tenaga suria",
      "Petroleum"
    ],
    "correctIndex": 2,
    "explanation": "Tenaga suria boleh diperbaharui secara berterusan. Petroleum, arang batu dan gas asli ialah bahan api fosil yang akan habis dan tergolong sebagai tenaga tidak boleh baharu.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_02",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "L",
    "q": "Apakah sumber utama tenaga hidro di Malaysia?",
    "options": [
      "Cahaya Matahari yang dipantulkan oleh laut",
      "Air yang mengalir deras di empangan dan sungai",
      "Haba yang terhasil daripada pembakaran arang batu",
      "Angin yang bertiup di kawasan pesisir pantai"
    ],
    "correctIndex": 1,
    "explanation": "Tenaga hidro dijana apabila air yang mengalir memutarkan turbin di empangan. Malaysia mempunyai beberapa empangan hidroelektrik besar seperti di Bakun dan Kenyir.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_03",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "L",
    "q": "Apakah maksud tenaga biojisim?",
    "options": [
      "Tenaga yang dihasilkan daripada bahan organik seperti sisa pertanian dan kayu",
      "Tenaga yang dihasilkan daripada pembelahan atom uranium",
      "Tenaga yang dihasilkan daripada haba bawah permukaan bumi",
      "Tenaga yang dihasilkan daripada gelombang laut sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Biojisim merujuk bahan organik seperti sisa kelapa sawit, sekam padi dan kayu yang boleh dibakar atau diproses untuk menghasilkan tenaga. Ia berbeza daripada tenaga nuklear dan geoterma.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_04",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "L",
    "q": "Mengapakah tenaga suria menjadi pilihan utama di Malaysia?",
    "options": [
      "Malaysia tidak mempunyai sumber tenaga lain langsung",
      "Panel solar tidak memerlukan ruang pemasangan",
      "Malaysia menerima cahaya Matahari yang banyak sepanjang tahun",
      "Malaysia mempunyai salji sepanjang tahun untuk menyejukkan panel solar"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan Malaysia berhampiran khatulistiwa memberi sinaran Matahari yang banyak sepanjang tahun, jadi panel solar dapat menjana elektrik dengan lebih konsisten.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_05",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "L",
    "q": "Apakah kelebihan tenaga boleh baharu dari segi alam sekitar?",
    "options": [
      "Ia menghasilkan lebih banyak karbon dioksida berbanding arang batu",
      "Ia hanya boleh digunakan sekali sahaja sebelum habis",
      "Ia memerlukan pembakaran bahan api fosil setiap hari",
      "Ia tidak akan habis dan mengeluarkan kurang gas rumah hijau semasa menjana tenaga"
    ],
    "correctIndex": 3,
    "explanation": "Sumber seperti suria, angin dan hidro diperbaharui secara semula jadi dan tidak membebaskan karbon dioksida semasa menjana elektrik, berbeza dengan bahan api fosil.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_06",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "M",
    "q": "Sebuah rumah di kawasan pedalaman tidak mempunyai sambungan grid elektrik. Sistem tenaga manakah paling sesuai dipasang di bumbung rumah itu?",
    "options": [
      "Turbin gas asli berskala perindustrian",
      "Panel solar dengan bateri simpanan",
      "Janakuasa arang batu berkapasiti besar",
      "Empangan hidroelektrik berskala besar"
    ],
    "correctIndex": 1,
    "explanation": "Panel solar bersama bateri boleh dipasang di bumbung tanpa memerlukan grid atau infrastruktur besar. Pilihan lain memerlukan skala infrastruktur yang tidak sesuai untuk satu rumah.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_07",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "M",
    "q": "Apakah kekangan utama pembinaan empangan hidroelektrik berskala besar?",
    "options": [
      "Kos pembinaan tinggi dan kawasan luas perlu ditenggelami",
      "Air sungai tidak boleh memutarkan turbin",
      "Empangan tidak boleh menghasilkan elektrik",
      "Empangan hanya boleh dibina di kawasan gurun"
    ],
    "correctIndex": 0,
    "explanation": "Empangan besar memerlukan pelaburan modal yang besar dan pembinaan takungan boleh menenggelamkan hutan serta kawasan petempatan, sekali gus menjejaskan ekosistem dan komuniti.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_08",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "M",
    "q": "Mengapakah tenaga angin kurang meluas digunakan di Malaysia berbanding tenaga suria?",
    "options": [
      "Kelajuan angin di kebanyakan kawasan Malaysia tidak cukup kuat dan konsisten",
      "Turbin angin tidak boleh menghasilkan elektrik di kawasan tropika",
      "Angin di Malaysia mengandungi terlalu banyak haba",
      "Malaysia tidak mempunyai kawasan pesisir pantai"
    ],
    "correctIndex": 0,
    "explanation": "Turbin angin memerlukan angin yang kuat dan berterusan. Di kebanyakan kawasan Malaysia kelajuan angin rendah dan berubah-ubah, jadi penjanaan tenaga angin kurang berkesan berbanding suria.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_09",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "H",
    "q": "Sebuah ladang kelapa sawit menghasilkan sisa tandan kosong dalam kuantiti besar setiap hari. Cadangan manakah paling sesuai untuk memanfaatkan sisa itu sebagai sumber tenaga?",
    "options": [
      "Menyimpan sisa dalam gudang tertutup tanpa digunakan",
      "Memproses sisa biojisim untuk menjana tenaga elektrik atau haba di kilang",
      "Membuang sisa ke sungai berhampiran untuk mengelakkan kos",
      "Membakar sisa secara terbuka tanpa kawalan di kawasan ladang"
    ],
    "correctIndex": 1,
    "explanation": "Sisa biojisim seperti tandan kosong boleh digunakan sebagai bahan api untuk penjanaan tenaga. Pembakaran terbuka tanpa kawalan atau pembuangan ke sungai pula mencemarkan udara dan air.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s2_10",
    "unit": "b10",
    "skill": "b10_s2",
    "diff": "H",
    "q": "Dua kawasan ingin memasang sistem tenaga boleh baharu. Kawasan P terletak di kawasan tanah tinggi berbukit dengan sungai deras, manakala kawasan Q terletak di dataran terbuka yang panas sepanjang tahun. Padanan manakah paling sesuai?",
    "options": [
      "Kawasan P sesuai untuk tenaga suria manakala kawasan Q sesuai untuk tenaga hidro",
      "Kedua-dua kawasan hanya sesuai untuk tenaga arang batu",
      "Kedua-dua kawasan tidak sesuai untuk sebarang tenaga boleh baharu",
      "Kawasan P sesuai untuk tenaga hidro manakala kawasan Q sesuai untuk tenaga suria"
    ],
    "correctIndex": 3,
    "explanation": "Kawasan P mempunyai sungai deras yang sesuai memutarkan turbin hidro. Kawasan Q yang terbuka dan panas menerima sinaran Matahari yang banyak, sesuai untuk panel solar.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_01",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah maksud bangunan hijau?",
    "options": [
      "Bangunan yang dibina di tengah hutan tanpa sebarang jalan masuk",
      "Bangunan yang menggunakan penghawa dingin sepanjang masa",
      "Bangunan yang direka untuk menjimatkan tenaga, air dan mengurangkan kesan terhadap alam sekitar",
      "Bangunan yang dicat dengan warna hijau di semua permukaan"
    ],
    "correctIndex": 2,
    "explanation": "Bangunan hijau menggunakan reka bentuk cekap tenaga, pengudaraan semula jadi, pengumpulan air hujan dan bahan mesra alam. Warna cat bukan kriteria bangunan hijau.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_02",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah maksud amalan Reduce dalam 3R?",
    "options": [
      "Memproses semula bahan buangan menjadi produk baharu",
      "Membuang semua barang lama ke tempat pembuangan sampah",
      "Mengurangkan penggunaan barang dan bahan yang tidak diperlukan",
      "Menggunakan semula barang lama untuk tujuan lain"
    ],
    "correctIndex": 2,
    "explanation": "Reduce bermaksud mengurangkan penggunaan sumber dari awal. Ia merupakan langkah paling berkesan kerana jika sesuatu barang tidak dibeli, tiada sampah dihasilkan langsung.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_03",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah contoh amalan Reuse?",
    "options": [
      "Menanam botol kaca di dalam tanah",
      "Menggunakan semula botol kaca untuk menyimpan bahan kering",
      "Membuang botol kaca ke dalam tong sampah biasa",
      "Membakar botol kaca di belakang rumah"
    ],
    "correctIndex": 1,
    "explanation": "Reuse bermaksud menggunakan semula barang yang masih boleh berfungsi untuk tujuan lain. Ini mengurangkan keperluan menghasilkan barang baharu dan mengurangkan sampah.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_04",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah kepentingan pengangkutan elektrik dalam usaha kelestarian alam?",
    "options": [
      "Ia meningkatkan pelepasan karbon monoksida di jalan raya",
      "Ia memerlukan lebih banyak pembakaran petrol setiap hari",
      "Ia menjadikan kenderaan bergerak lebih lambat tanpa sebab",
      "Ia mengurangkan pelepasan asap ekzos dan pencemaran udara di kawasan bandar"
    ],
    "correctIndex": 3,
    "explanation": "Kenderaan elektrik tidak membebaskan gas ekzos semasa digunakan, jadi kualiti udara bandar dapat diperbaiki walaupun penjanaan elektriknya perlu diambil kira dari segi sumber.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_05",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "L",
    "q": "Apakah maksud pertanian lestari?",
    "options": [
      "Pertanian yang menjaga kesuburan tanah dan alam sekitar untuk jangka panjang",
      "Pertanian yang menggunakan baja kimia tanpa had untuk hasil maksimum",
      "Pertanian yang menebang semua pokok di kawasan ladang",
      "Pertanian yang membakar sisa tanaman setiap hari"
    ],
    "correctIndex": 0,
    "explanation": "Pertanian lestari mengekalkan kesuburan tanah melalui kaedah seperti penggiliran tanaman, penggunaan kompos dan pemuliharaan air supaya tanah kekal produktif untuk generasi akan datang.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_06",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Sebuah sekolah ingin mengurangkan sisa makanan di kantin. Amalan 3R manakah paling berkesan untuk dilaksanakan terlebih dahulu?",
    "options": [
      "Menghantar sisa makanan ke tempat pembuangan sampah setiap hari",
      "Mengurangkan saiz hidangan mengikut keperluan murid sebelum sisa terhasil",
      "Membeli bekas pelupusan sampah yang lebih besar",
      "Menanam semua sisa makanan di halaman sekolah"
    ],
    "correctIndex": 1,
    "explanation": "Reduce ialah langkah pertama dan paling berkesan kerana ia menghalang sisa daripada terhasil. Tong sampah besar atau penghantaran ke tapak pelupusan hanya mengubah tempat sisa itu berakhir.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_07",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Mengapakah pengasingan sampah di punca penting dalam amalan kitar semula?",
    "options": [
      "Pengasingan sampah menambah jumlah sampah yang perlu dilupuskan",
      "Sampah yang bercampur lebih mudah dikitar semula",
      "Pengasingan sampah hanya berguna di kawasan luar bandar",
      "Bahan kitar semula yang tidak bercampur dengan sisa lain lebih mudah dan murah diproses"
    ],
    "correctIndex": 3,
    "explanation": "Apabila kertas, plastik dan logam dicampur dengan sisa makanan, bahan itu tercemar dan sukar dikitar semula. Pengasingan di punca mengekalkan kualiti bahan kitar semula.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_08",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "M",
    "q": "Apakah ciri reka bentuk yang menjadikan sesebuah bangunan lebih mesra alam?",
    "options": [
      "Tingkap yang sentiasa tertutup tanpa pengudaraan",
      "Penggunaan lampu pijar di seluruh bangunan",
      "Pengudaraan semula jadi, pencahayaan siang yang cukup dan pengumpulan air hujan",
      "Bilangan penghawa dingin yang banyak di setiap bilik"
    ],
    "correctIndex": 2,
    "explanation": "Pengudaraan semula jadi dan pencahayaan siang mengurangkan keperluan penghawa dingin serta lampu elektrik. Pengumpulan air hujan pula mengurangkan penggunaan air bersih.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_09",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "H",
    "q": "Sebuah kilang ingin mengurangkan sisa pembungkusan tetapi masih perlu melindungi produk semasa penghantaran. Cadangan manakah paling seimbang?",
    "options": [
      "Menggunakan pembungkusan yang boleh dikitar semula dan menyesuaikan saiznya dengan produk",
      "Menambah lapisan plastik berlebihan untuk memastikan produk selamat",
      "Menggunakan pembungkusan pakai buang tanpa sebarang label kitar semula",
      "Membungkus produk dengan kertas bercampur plastik dan sisa makanan"
    ],
    "correctIndex": 0,
    "explanation": "Saiz pembungkusan yang sesuai mengurangkan bahan yang digunakan, manakala bahan yang boleh dikitar semula membolehkan ia diproses semula selepas digunakan tanpa mengorbankan perlindungan produk.",
    "ref": "Bab 10, KSSM Geografi T2"
  },
  {
    "id": "t2_geo_b10_s3_10",
    "unit": "b10",
    "skill": "b10_s3",
    "diff": "H",
    "q": "Sebuah komuniti berjaya memasang panel solar tetapi pembuangan sampah masih tidak terkawal. Penilaian manakah paling tepat tentang kelestarian alam komuniti itu?",
    "options": [
      "Pembuangan sampah tidak mempunyai kesan kepada kelestarian alam",
      "Kelestarian belum tercapai sepenuhnya kerana kelestarian memerlukan perubahan tingkah laku menyeluruh",
      "Kelestarian sudah tercapai kerana panel solar membekalkan elektrik percuma",
      "Panel solar secara automatik menguruskan semua sampah komuniti"
    ],
    "correctIndex": 1,
    "explanation": "Kelestarian merangkumi tenaga, air, sisa dan tingkah laku harian. Teknologi sahaja tidak mencukupi jika sampah masih dibuang secara tidak teratur kerana ia tetap mencemarkan alam.",
    "ref": "Bab 10, KSSM Geografi T2"
  }
];

  if (typeof module === "object" && module.exports) module.exports = ITEMS;

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.geografi = (Array.isArray(App.Pools.t2.geografi) ? App.Pools.t2.geografi : []).concat(ITEMS);
})(typeof window !== "undefined" ? window : globalThis);
