/**
 * Tingkatan 2 Matematik knowledge map (KSSM, Bab 1-13).
 * Original-wording skill summaries and common pupil misconceptions.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Curriculum = App.Curriculum || {};
  App.Curriculum.t2 = App.Curriculum.t2 || {};

  App.Curriculum.t2.math = {
    "units": [
      {
        "id": "b1",
        "name": "Pola dan Jujukan",
        "textbookUnit": "Bab 1: Pola dan Jujukan",
        "skills": [
          {
            "id": "b1_s1",
            "name": "Pola Nombor, Nombor Fibonacci dan Segi Tiga Pascal",
            "tests": "Menguji kemahiran murid mengenal pasti serta melengkapkan pola set nombor (ganjil, genap, gandaan), Nombor Fibonacci dan Segi Tiga Pascal.",
            "commonMistakes": [
              "Menambah dua nombor yang sama atau hanya melihat beza antara dua sebutan terakhir tanpa mengesahkan bahawa setiap sebutan dalam Nombor Fibonacci ialah hasil tambah dua sebutan sebelumnya.",
              "Tersilap menjumlahkan nombor bersebelahan pada baris atas semasa membina baris baharu dalam Segi Tiga Pascal atau terlupa meletakkan nilai 1 di kedua-dua hujung baris.",
              "Menganggap nombor ganjil atau genap yang disusun dalam jujukan sentiasa mempunyai beza sepunya +1 bukannya +2."
            ]
          },
          {
            "id": "b1_s2",
            "name": "Jujukan serta Memerihalkan Pola dalam Perkataan, Nombor dan Ungkapan Algebra",
            "tests": "Menguji kefahaman murid menentukan sama ada sesuatu set nombor ialah jujukan serta menyatakan polanya dalam bentuk perkataan, nombor dan ungkapan algebra.",
            "commonMistakes": [
              "Menulis pola dalam bentuk perkataan atau operasi tanpa menyatakan nilai awal atau arah tertib (contohnya sekadar menulis 'tambah 4' tanpa menjelaskan operasi terhadap sebutan sebelumnya).",
              "Keliru antara nombor atau simbol pemboleh ubah n (kedudukan sebutan) dengan nilai sebutan itu sendiri apabila membina ungkapan algebra bagi pola.",
              "Mengelaskan set nombor rawak atau susunan yang tidak mengikut satu peraturan tetap sebagai satu jujukan."
            ]
          },
          {
            "id": "b1_s3",
            "name": "Sebutan ke-n (Tn) dan Penyelesaian Masalah Jujukan",
            "tests": "Menguji kebolehan murid menentukan sebutan tertentu dalam sesuatu jujukan menggunakan rumus sebutan ke-n (Tn) serta menyelesaikan masalah berhubung jujukan nombor.",
            "commonMistakes": [
              "Menggantikan nilai sebutan (Tn) ke tempat pemboleh ubah n, atau sebaliknya menggantikan n dengan nilai sebutan pertama apabila mencari sebutan ke-10.",
              "Tersilap menggunakan tanda tambah atau tolak pada pemalar dalam rumus linear Tn = an + b kerana hanya menyemak sebutan pertama sahaja tanpa menguji sebutan kedua dan ketiga.",
              "Menggunakan n dan bukannya (n - 1) ketika mengira beza berulang dari sebutan pertama T1 dalam pola aritmetik."
            ]
          }
        ]
      },
      {
        "id": "b2",
        "name": "Pemfaktoran dan Pecahan Algebra",
        "textbookUnit": "Bab 2: Pemfaktoran dan Pecahan Algebra",
        "skills": [
          {
            "id": "b2_s1",
            "name": "Kembangan Ungkapan Algebra (Satu dan Dua Kurungan)",
            "tests": "Menguji kecekapan murid mengembangkan ungkapan algebra melibatkan satu kurungan dan dua kurungan termasuk kuasa dua binomial serta menggabungkan sebutan serupa.",
            "commonMistakes": [
              "Hanya mendarab sebutan luar dengan sebutan pertama di dalam kurungan dan terlupa mendarab sebutan kedua (contohnya menulis 3(x + 4) = 3x + 4).",
              "Mengembangkan (a + b)² sebagai a² + b² dan (a - b)² sebagai a² - b² dengan mengabaikan sebutan tengah 2ab.",
              "Tersilap menentukan tanda negatif apabila mendarab dua nombor negatif atau apabila simbol tolak berada di hadapan kurungan."
            ]
          },
          {
            "id": "b2_s2",
            "name": "Pemfaktoran Ungkapan Algebra (Faktor Sepunya, Beza Dua Kuasa Dua, Kuadratik dan Pengumpulan)",
            "tests": "Menguji kemahiran murid memfaktorkan ungkapan algebra menggunakan kaedah faktor sepunya terbesar (FSTB), beza dua kuasa dua, pendaraban silang kuadratik dan pengumpulan sebutan.",
            "commonMistakes": [
              "Mengeluarkan sebahagian faktor sepunya sahaja dan bukannya faktor sepunya terbesar (contohnya memfaktorkan 6x² + 12x sebagai 2(3x² + 6x) dan berhenti di situ).",
              "Memfaktorkan x² - y² sebagai (x - y)² bukannya (x + y)(x - y), atau cuba memfaktorkan hasil tambah dua kuasa dua x² + y².",
              "Tersilap memilih pasangan tanda positif dan negatif ketika memfaktorkan ungkapan kuadratik ax² + bx + c, terutamanya apabila pekali b negatif dan c positif."
            ]
          },
          {
            "id": "b2_s3",
            "name": "Operasi dan Permudahan Pecahan Algebra",
            "tests": "Menguji keupayaan murid melaksanakan penambahan, penolakan, pendaraban dan pembahagian pecahan algebra serta mempermudahkannya kepada sebutan terendah.",
            "commonMistakes": [
              "Memansuhkan sebutan tunggal dalam penambahan atau penolakan pada pengangka dan penyebut sebelum memfaktorkan ungkapan (contohnya memansuhkan x dalam (x + 2)/x menjadi 2).",
              "Terus menambah atau menolak pengangka pecahan yang berbeza penyebut tanpa menyamakan penyebut dengan gandaan sepunya terkecil terlebih dahulu.",
              "Lupa menyongsangkan pecahan kedua semasa menukar operasi bahagi kepada darab, atau memansuhkan sebelum memfaktorkan ungkapan kuadratik."
            ]
          }
        ]
      },
      {
        "id": "b3",
        "name": "Rumus Algebra",
        "textbookUnit": "Bab 3: Rumus Algebra",
        "skills": [
          {
            "id": "b3_s1",
            "name": "Membina Rumus Algebra daripada Situasi",
            "tests": "Menguji kemahiran murid menterjemahkan pernyataan masalah harian atau hubungan kuantiti kepada rumus algebra yang betul dengan pemboleh ubah yang sesuai.",
            "commonMistakes": [
              "Menterbalikkan susunan operasi dalam ayat seperti '5 kurang daripada dua kali ganda x' dengan menulis 5 - 2x bukannya 2x - 5.",
              "Mengabaikan unit yang tidak seragam dalam situasi (contohnya menggabungkan minit dan jam atau sen dan ringgit terus ke dalam satu rumus tanpa penukaran).",
              "Menggunakan huruf pemboleh ubah yang sama untuk dua kuantiti berbeza atau menulis ungkapan tanpa tanda sama dengan (=) dan subjek rumus."
            ]
          },
          {
            "id": "b3_s2",
            "name": "Menukar Perkara Rumus (Termasuk Kuasa Dua dan Punca Kuasa Dua)",
            "tests": "Menguji kemahiran murid menyusun semula persamaan bagi menukar perkara rumus melibatkan operasi asas, pecahan, tanda kurung, kuasa dua dan punca kuasa dua.",
            "commonMistakes": [
              "Menukar tanda tambah atau tolak apabila memindahkan sebutan merentas tanda sama dengan dengan cara yang salah atau tersilap mengubah operasi darab menjadi tolak.",
              "Mengambil punca kuasa dua ke atas satu sebutan sahaja di sebelah kanan dan bukannya keseluruhan ungkapan (contohnya daripada A = x² + y menulis x = √A + y).",
              "Tidak mengasingkan pemboleh ubah sasaran yang muncul dua kali menggunakan pemfaktoran sebelum membahagi untuk menjadikannya perkara rumus."
            ]
          },
          {
            "id": "b3_s3",
            "name": "Menentukan Nilai Pemboleh Ubah dalam Rumus",
            "tests": "Menguji kebolehan murid menghitung nilai satu pemboleh ubah dalam rumus algebra setelah diberikan nilai pemboleh ubah lain serta mentafsir jawapan dalam konteks masalah.",
            "commonMistakes": [
              "Lupa mengikut tertib operasi semasa menggantikan nilai negatif ke dalam sebutan berkuasa dua (contohnya mengira -3² sebagai -9 walhal (-3)² = 9).",
              "Mengabaikan tanda kurung apabila menggantikan nilai pecahan atau ungkapan negatif ke dalam rumus yang mempunyai pekali di hadapan pemboleh ubah.",
              "Berhenti selepas mendapat nilai pemboleh ubah perantaraan dan terlupa menukar unit atau menjawab soalan sebenar yang dikehendaki."
            ]
          }
        ]
      },
      {
        "id": "b4",
        "name": "Poligon",
        "textbookUnit": "Bab 4: Poligon",
        "skills": [
          {
            "id": "b4_s1",
            "name": "Sifat Poligon Sekata dan Paksi Simetri",
            "tests": "Menguji pengetahuan murid mengenal pasti poligon sekata dan tak sekata serta menentukan bilangan sisi, bucu, pepenjuru dan paksi simetri bagi poligon sekata.",
            "commonMistakes": [
              "Menganggap semua poligon yang mempunyai sisi sama panjang ialah poligon sekata walaupun sudut pedalamannya tidak sama (contohnya rombus bukan segi empat sama).",
              "Menyangka segi empat tepat atau segi tiga sama kaki mempunyai 4 atau 3 paksi simetri sebagaimana poligon sekata.",
              "Terlupa bahawa bagi poligon sekata dengan n sisi, bilangan paksi simetrinya sentiasa bersamaan dengan n."
            ]
          },
          {
            "id": "b4_s2",
            "name": "Hasil Tambah Sudut Pedalaman (n - 2) × 180°",
            "tests": "Menguji kemahiran murid mengira hasil tambah sudut pedalaman poligon, nilai satu sudut pedalaman poligon sekata serta mencari bilangan sisi apabila hasil tambah sudut diberikan.",
            "commonMistakes": [
              "Menggunakan n × 180° atau (n - 1) × 180° bukannya (n - 2) × 180° untuk menghitung hasil tambah sudut pedalaman poligon.",
              "Terlupa membahagi hasil tambah sudut pedalaman dengan bilangan sisi n ketika mencari nilai satu sudut pedalaman poligon sekata.",
              "Menganggap semua sudut pedalaman dalam poligon tak sekata bernilai sama sebelum membahagikan hasil tambah sudut dengan n."
            ]
          },
          {
            "id": "b4_s3",
            "name": "Sudut Peluaran 360°/n dan Gabungan Poligon",
            "tests": "Menguji kebolehan murid menggunakan sifat hasil tambah sudut peluaran poligon bersamaan 360°, mengira bilangan sisi melalui sudut peluaran 360°/n serta menyelesaikan masalah gabungan poligon.",
            "commonMistakes": [
              "Menyangka hasil tambah sudut peluaran berubah mengikut bilangan sisi poligon seperti sudut pedalaman, bukannya sentiasa 360° bagi semua poligon cembung.",
              "Mengenal pasti sudut refleks atau sudut di antara dua sisi lanjutan sebagai sudut peluaran, bukan sudut penggenap kepada sudut pedalaman pada garis lurus (180° - sudut pedalaman).",
              "Lupa menggunakan sifat sudut pada satu titik (360°) atau garis lurus (180°) apabila dua atau lebih poligon bercantum pada bucu atau sisi yang sama."
            ]
          }
        ]
      },
      {
        "id": "b5",
        "name": "Bulatan",
        "textbookUnit": "Bab 5: Bulatan",
        "skills": [
          {
            "id": "b5_s1",
            "name": "Bahagian Bulatan dan Sifat Simetri Perentas",
            "tests": "Menguji kefahaman murid menamakan bahagian bulatan (pusat, jejari, diameter, perentas, lengkok, sektor, tembereng) serta menggunakan sifat simetri perentas dan teorem berkaitan jejari serenjang.",
            "commonMistakes": [
              "Keliru antara sektor (dibatasi dua jejari dan lengkok) dengan tembereng (dibatasi perentas dan lengkok), atau antara perentas dengan diameter.",
              "Mengandaikan setiap garis yang menyambungkan dua titik pada lilitan pasti melalui pusat bulatan.",
              "Terlupa menggunakan Teorem Pythagoras pada segi tiga bersudut tegak yang dibentuk oleh jejari, jarak dari pusat dan separuh panjang perentas (menggunakan panjang penuh perentas dalam pengiraan)."
            ]
          },
          {
            "id": "b5_s2",
            "name": "Lilitan Bulatan dan Panjang Lengkok (π = 22/7)",
            "tests": "Menguji kemahiran murid mengira lilitan bulatan serta panjang lengkok dan sudut di pusat bulatan menggunakan rumus dengan π = 22/7 (atau 3.142 mengikut keperluan soalan).",
            "commonMistakes": [
              "Menggunakan rumus luas πj² untuk mengira lilitan bulatan, atau menggantikan nilai diameter terus ke tempat jejari j dalam rumus 2πj.",
              "Menentukan perimeter kawasan berlorek berbentuk sektor atau semibulatan dengan hanya mengira panjang lengkok tanpa menambah dua jejari atau diameter yang menutupinya.",
              "Mengambil sudut peluaran atau sudut pelengkap daripada 360° secara salah sebagai sudut di pusat bulatan bagi lengkok major atau minor yang ditanya."
            ]
          },
          {
            "id": "b5_s3",
            "name": "Luas Bulatan dan Luas Sektor (π = 22/7)",
            "tests": "Menguji kebolehan murid mengira luas bulatan, luas sektor dan luas kawasan berlorek melibatkan gabungan bulatan, segi empat dan segi tiga menggunakan π = 22/7.",
            "commonMistakes": [
              "Mengira j² sebagai 2 × j (contohnya 7² = 14) atau mendarab π × diameter² tanpa membahagi diameter kepada jejari terlebih dahulu.",
              "Menggunakan nisbah θ/180° bukannya θ/360° apabila menghitung luas sektor daripada sudut di pusat θ.",
              "Menolak luas bentuk yang salah atau terlupa membahagi dua luas bulatan bagi semibulatan dalam soalan kawasan berlorek."
            ]
          }
        ]
      },
      {
        "id": "b6",
        "name": "Bentuk Geometri Tiga Dimensi",
        "textbookUnit": "Bab 6: Bentuk Geometri Tiga Dimensi",
        "skills": [
          {
            "id": "b6_s1",
            "name": "Sifat Geometri dan Bentangan Bentuk 3D",
            "tests": "Menguji pengetahuan murid mengenal pasti bilangan muka rata, muka melengkung, tepi dan bucu serta memadankan bentuk tiga dimensi (prisma, piramid, silinder, kon, sfera) dengan bentangannya.",
            "commonMistakes": [
              "Mengkelaskan piramid sebagai prisma kerana kedua-duanya mempunyai muka rata berbentuk segi tiga atau segi empat.",
              "Tersilap menentukan bentuk bentangan kon atau silinder (contohnya meletakkan kedua-dua bulatan silinder pada sisi yang sama atau melukis bentangan kon tanpa sektor bulatan).",
              "Mengira bucu dan tepi prisma atau piramid dengan salah kerana tidak membayangkan tapak poligon pada bahagian belakang yang terlindung."
            ]
          },
          {
            "id": "b6_s2",
            "name": "Luas Permukaan Prisma, Piramid, Silinder, Kon dan Sfera (π = 22/7)",
            "tests": "Menguji kemahiran murid mengira jumlah luas permukaan bentuk 3D dan bentuk gabungan termasuk bekas terbuka atau tertutup menggunakan π = 22/7.",
            "commonMistakes": [
              "Menggunakan tinggi tegak piramid atau kon dan bukannya tinggi sendeng (s) ketika mengira luas muka segi tiga piramid atau luas permukaan melengkung kon πjs.",
              "Terus menggunakan rumus luas permukaan penuh silinder (2πj² + 2πjt) bagi bekas silinder terbuka di bahagian atas atau gabungan dua bentuk yang mempunyai muka tercantum.",
              "Lupa menambah semua muka sisi prisma atau menyangka tinggi segi tiga tapak prisma sama dengan panjang prisma."
            ]
          },
          {
            "id": "b6_s3",
            "name": "Isi Padu Prisma, Piramid, Silinder, Kon dan Sfera (π = 22/7)",
            "tests": "Menguji kebolehan murid mengira isi padu prisma, piramid, silinder, kon dan sfera serta menyelesaikan masalah melibatkan aras cecair dan gabungan pepejal menggunakan π = 22/7.",
            "commonMistakes": [
              "Terlupa mendarab dengan pecahan 1/3 bagi isi padu piramid dan kon, atau menggunakan 1/3 bukannya 4/3 bagi isi padu sfera.",
              "Menggunakan tinggi sendeng kon dan bukannya tinggi tegak t dalam rumus isi padu kon 1/3 πj²t.",
              "Keliru menentukan luas keratan rentas prisma (menggunakan muka sisi segi empat tepat sebagai tapak keratan rentas dan bukannya muka segi tiga atau trapezium yang seragam)."
            ]
          }
        ]
      },
      {
        "id": "b7",
        "name": "Koordinat",
        "textbookUnit": "Bab 7: Koordinat",
        "skills": [
          {
            "id": "b7_s1",
            "name": "Jarak antara Dua Titik pada Satah Cartes",
            "tests": "Menguji kemahiran murid menghitung jarak antara dua titik pada satah Cartes sama ada yang mempunyai koordinat-x atau koordinat-y sama mahupun menggunakan rumus jarak √[(x₂ - x₁)² + (y₂ - y₁)²].",
            "commonMistakes": [
              "Menolak koordinat secara terus tanpa mengambil kira tanda negatif (contohnya mengira jarak antara x = -3 dan x = 5 sebagai 5 - 3 = 2 bukannya 5 - (-3) = 8).",
              "Terlupa mengambil punca kuasa dua pada langkah akhir selepas mengira (x₂ - x₁)² + (y₂ - y₁)².",
              "Menambah koordinat x dengan koordinat y dalam kurungan yang sama dan bukannya mengira (x₂ - x₁) dan (y₂ - y₁) secara berasingan."
            ]
          },
          {
            "id": "b7_s2",
            "name": "Koordinat Titik Tengah antara Dua Titik",
            "tests": "Menguji kemahiran murid menentukan koordinat titik tengah bagi tembereng garis yang menyambungkan dua titik serta mencari koordinat satu titik hujung apabila titik tengah diberikan.",
            "commonMistakes": [
              "Menolak kedua-dua koordinat (x₂ - x₁)/2 seperti rumus kecerunan atau jarak dan bukannya menambah (x₁ + x₂)/2.",
              "Menukar susunan koordinat (y, x) atau membahagi dengan 2 ke atas koordinat x sahaja.",
              "Apabila diberi titik tengah dan satu hujung untuk mencari hujung kedua, pelajar mengira titik tengah di antara kedua-dua titik tersebut dan bukannya menyelesaikan persamaan (x₁ + x₂)/2 = x_M."
            ]
          },
          {
            "id": "b7_s3",
            "name": "Penyelesaian Masalah Melibatkan Jarak dan Titik Tengah",
            "tests": "Menguji keupayaan murid mengaplikasikan konsep jarak dan titik tengah untuk mencari bucu bentuk geometri (segi tiga sama kaki, segi empat selari, rombus), perimeter serta skala pada satah Cartes.",
            "commonMistakes": [
              "Mengandaikan paksi-x dan paksi-y sentiasa berskala 1 unit bagi setiap petak grid tanpa menyemak skala pada graf atau maklumat soalan.",
              "Gagal menggunakan sifat pepenjuru segi empat selari atau rombus yang saling membahagi dua sama pada titik tengah yang sama untuk mencari bucu keempat.",
              "Tidak membuktikan kesamaan panjang sisi menggunakan rumus jarak atau lupa mengira panjang semua sisi apabila mencari perimeter poligon pada satah Cartes."
            ]
          }
        ]
      },
      {
        "id": "b8",
        "name": "Graf Fungsi",
        "textbookUnit": "Bab 8: Graf Fungsi",
        "skills": [
          {
            "id": "b8_s1",
            "name": "Konsep Fungsi dan Jenis Hubungan",
            "tests": "Menguji kefahaman murid mengenal pasti hubungan satu kepada satu, banyak kepada satu, satu kepada banyak dan banyak kepada banyak serta menentukan hubungan yang merupakan fungsi melalui pasangan tertib, jadual dan graf.",
            "commonMistakes": [
              "Menyangka hubungan 'banyak kepada satu' bukan fungsi, sedangkan fungsi membenarkan lebih daripada satu nilai domain dipetakan kepada nilai kodomain yang sama (hanya 'satu kepada banyak' dan 'banyak kepada banyak' bukan fungsi).",
              "Keliru antara set domain (input / nilai x) dengan set kodomain atau julat (output / nilai y) dalam rajah anak panah.",
              "Gagal menggunakan ujian garis mencancang dengan betul pada graf untuk menentukan sama ada sesuatu graf mewakili fungsi atau bukan."
            ]
          },
          {
            "id": "b8_s2",
            "name": "Jadual Nilai bagi Fungsi Linear, Kuadratik, Kubik dan Salingan",
            "tests": "Menguji kemahiran murid melengkapkan jadual nilai dan mengenal pasti bentuk graf bagi fungsi linear (y = ax + b), kuadratik (y = ax² + bx + c), kubik (y = ax³ + c) dan salingan (y = a/x).",
            "commonMistakes": [
              "Mendapat nilai negatif apabila mengira kuasa dua bagi nilai x negatif dalam fungsi kuadratik (contohnya menggantikan x = -2 ke dalam y = x² + 1 lalu mendapat -4 + 1 = -3 dan bukannya 4 + 1 = 5).",
              "Menyambung titik-titik graf kuadratik, kubik atau salingan menggunakan pembaris secara garis lurus patah-patah dan bukannya lengkung licin.",
              "Menyambung lengkung graf salingan y = a/x merentas paksi-y (x = 0) sedangkan fungsi tersebut tidak tertakrif apabila x = 0."
            ]
          },
          {
            "id": "b8_s3",
            "name": "Mentafsir Nilai dan Pintasan daripada Graf Fungsi",
            "tests": "Menguji kebolehan murid membaca nilai x atau y daripada graf fungsi, mengenal pasti pintasan-x, pintasan-y serta titik maksimum atau minimum bagi mentafsir situasi harian.",
            "commonMistakes": [
              "Membaca nilai pada skala paksi dengan salah apabila satu petak kecil mewakili pecahan seperti 0.2, 0.5 atau 2 unit.",
              "Tertukar antara pintasan-x (apabila y = 0) dengan pintasan-y (apabila x = 0) semasa menulis koordinat atau nilai pintasan.",
              "Hanya memberikan satu nilai x apabila membaca nilai dari graf fungsi kuadratik yang memotong garis mendatar y = k pada dua titik."
            ]
          }
        ]
      },
      {
        "id": "b9",
        "name": "Laju dan Pecutan",
        "textbookUnit": "Bab 9: Laju dan Pecutan",
        "skills": [
          {
            "id": "b9_s1",
            "name": "Laju dan Penukaran Unit (km/j <-> m/s)",
            "tests": "Menguji kemahiran murid mengira laju, jarak atau masa menggunakan hubungan laju = jarak / masa serta menukar unit laju antara km/j dan m/s (serta unit masa dalam jam dan minit).",
            "commonMistakes": [
              "Mendarab atau membahagi nilai laju secara terbalik ketika menukar km/j kepada m/s (contohnya membahagi dengan 1000 dan mendarab dengan 3600, bukannya × 1000 ÷ 3600 atau ÷ 3.6).",
              "Menukar masa 1 jam 30 minit menjadi 1.3 jam dan bukannya 1.5 jam dalam pengiraan laju.",
              "Menggunakan segi tiga formula secara salah sehingga mengira jarak sebagai laju ÷ masa."
            ]
          },
          {
            "id": "b9_s2",
            "name": "Laju Purata bagi Perjalanan Berperingkat",
            "tests": "Menguji kecekapan murid menghitung laju purata bagi perjalanan berbilang peringkat (termasuk tempoh rehat atau berhenti) menggunakan rumus jumlah jarak dibahagi jumlah masa.",
            "commonMistakes": [
              "Mengira purata aritmetik bagi dua nilai laju (laju₁ + laju₂)/2 dan bukannya menggunakan jumlah jarak ÷ jumlah masa.",
              "Mengabaikan tempoh masa berhenti atau rehat semasa mengira jumlah masa keseluruhan perjalanan.",
              "Gagal mencari jarak bagi setiap peringkat dahulu apabila hanya laju dan masa peringkat diberikan, atau menggunakan unit masa yang bercampur antara minit dan jam."
            ]
          },
          {
            "id": "b9_s3",
            "name": "Pecutan dan Nyahpecutan",
            "tests": "Menguji kebolehan murid mengira pecutan dan nyahpecutan menggunakan rumus (v - u)/t, menukar unit pecutan serta mentafsir nilai negatif sebagai nyahpecutan.",
            "commonMistakes": [
              "Menukar susunan laju awal dan laju akhir kepada (u - v)/t sehingga mendapat tanda positif bagi nyahpecutan atau gagal mengenal pasti nyahpecutan sebagai nilai pecutan negatif.",
              "Mencampuradukkan unit laju dan unit masa tanpa penyelarasan (contohnya laju dalam km/j dan masa dalam saat digunakan terus ke dalam rumus tanpa penukaran unit).",
              "Tidak menyedari bahawa objek yang bergerak dari keadaan pegun mempunyai laju awal u = 0, atau objek yang berhenti mempunyai laju akhir v = 0."
            ]
          }
        ]
      },
      {
        "id": "b10",
        "name": "Kecerunan Garis Lurus",
        "textbookUnit": "Bab 10: Kecerunan Garis Lurus",
        "skills": [
          {
            "id": "b10_s1",
            "name": "Kecerunan daripada Dua Titik m = (y₂ - y₁)/(x₂ - x₁)",
            "tests": "Menguji kemahiran murid menentukan kecerunan garis lurus yang melalui dua titik pada satah Cartes menggunakan rumus m = (y₂ - y₁)/(x₂ - x₁) serta mengenal pasti tanda positif, negatif, sifar dan tidak tertakrif.",
            "commonMistakes": [
              "Terbalik menulis pengangka dan penyebut menjadi (x₂ - x₁)/(y₂ - y₁) (mengira jarak mengufuk dibahagi jarak mencancang).",
              "Tidak konsisten dengan susunan titik pada pengangka dan penyebut, iaitu mengira (y₂ - y₁)/(x₁ - x₂) sehingga menghasilkan tanda yang berlawanan.",
              "Menghilangkan tanda negatif semasa menolak koordinat negatif atau keliru antara kecerunan sifar (garis mengufuk) dengan kecerunan tidak tertakrif (garis mencancang)."
            ]
          },
          {
            "id": "b10_s2",
            "name": "Kecerunan daripada Pintasan-x dan Pintasan-y (m = -y/x)",
            "tests": "Menguji kemahiran murid mengira kecerunan garis lurus menggunakan pintasan-x dan pintasan-y melalui rumus m = -(pintasan-y)/(pintasan-x) serta menentukan arah kecondongan garis.",
            "commonMistakes": [
              "Terlupa tanda negatif pada rumus m = -(pintasan-y)/(pintasan-x) lalu mendapat kecerunan positif bagi garis yang condong ke bawah dari kiri ke kanan.",
              "Menulis kecerunan sebagai -(pintasan-x)/(pintasan-y) dengan meletakkan pintasan-x di pengangka.",
              "Menggunakan panjang segmen positif pada graf tanpa memasukkan tanda negatif bagi pintasan yang berada di sebelah kiri atau bawah asalan."
            ]
          },
          {
            "id": "b10_s3",
            "name": "Penyelesaian Masalah Kecerunan dan Titik Segaris",
            "tests": "Menguji kebolehan murid menyelesaikan masalah melibatkan kecerunan garis lurus termasuk menentukan nilai pemalar koordinat yang tidak diketahui serta membuktikan tiga titik adalah segaris.",
            "commonMistakes": [
              "Menyangka dua garis mempunyai kecerunan yang sama hanya dengan melihat rupa graf secara kasar tanpa membuktikan nilai m₁ = m₂.",
              "Apabila menyelesaikan persamaan (y₂ - y₁)/(x₂ - x₁) = m untuk mencari koordinat tidak diketahui, pelajar tersilap mendarab silang atau tersalah tanda semasa memindahkan negatif.",
              "Menguji titik segaris dengan menyemak titik tengah dan bukannya menyemak kesamaan kecerunan antara pasangan titik dengan satu titik sepunya."
            ]
          }
        ]
      },
      {
        "id": "b11",
        "name": "Transformasi Isometri",
        "textbookUnit": "Bab 11: Transformasi Isometri",
        "skills": [
          {
            "id": "b11_s1",
            "name": "Translasi Vektor (a, b) bagi Imej dan Objek",
            "tests": "Menguji kemahiran murid memerihalkan serta menentukan koordinat imej atau objek di bawah suatu translasi vektor (a, b) pada satah Cartes.",
            "commonMistakes": [
              "Keliru antara pergerakan komponen mengufuk (a) dan mencancang (b) dalam vektor lajur, misalnya bergerak ke atas atau bawah dahulu untuk nilai a.",
              "Menggunakan vektor translasi yang sama secara terus untuk mencari objek daripada imej, bukannya menolak vektor translasi (menukar tanda a dan b).",
              "Mengira jarak di antara dua bucu yang berbeza pada objek dan imej dan bukannya sepasang bucu yang sepadan."
            ]
          },
          {
            "id": "b11_s2",
            "name": "Pantulan pada Paksi-x, Paksi-y dan Garis x = k atau y = k",
            "tests": "Menguji kebolehan murid melukis imej, menentukan koordinat imej dan mengenal pasti paksi pantulan pada paksi-x, paksi-y serta garis lurus x = k atau y = k.",
            "commonMistakes": [
              "Keliru antara garis mencancang x = k dengan garis mengufuk y = k sebagai paksi pantulan.",
              "Sekadar menukar tanda koordinat seperti pantulan pada paksi-x atau paksi-y apabila memantulkan titik pada garis x = k atau y = k (tidak mengira jarak serenjang dari garis pantulan tersebut).",
              "Melukis imej dengan orientasi sama seperti translasi dan bukannya songsang sisi (terbalik) terhadap paksi pantulan."
            ]
          },
          {
            "id": "b11_s3",
            "name": "Putaran 90° atau 180° dan Kekongruenan Transformasi Isometri",
            "tests": "Menguji kemahiran murid menentukan imej, pusat putaran, sudut (90° atau 180°) dan arah putaran (ikut jam atau lawan jam) serta mengenal pasti sifat kekongruenan di bawah transformasi isometri.",
            "commonMistakes": [
              "Tertukar arah putaran ikut jam dengan lawan jam apabila menentukan koordinat imej bagi putaran 90°.",
              "Menggunakan rumus putaran berpusat di asalan (0, 0) secara terus walaupun pusat putaran yang diberi bukan pada asalan.",
              "Mengelaskan pembesaran atau transformasi yang mengubah saiz bentuk sebagai isometri, atau gagal membezakan antara simetri putaran dengan kekongruenan."
            ]
          }
        ]
      },
      {
        "id": "b12",
        "name": "Sukatan Kecenderungan Memusat",
        "textbookUnit": "Bab 12: Sukatan Kecenderungan Memusat",
        "skills": [
          {
            "id": "b12_s1",
            "name": "Mod dan Median Data Tak Terkumpul serta Jadual Kekerapan",
            "tests": "Menguji kemahiran murid menentukan mod dan median daripada set data tak terkumpul, carta palang, plot titik dan jadual kekerapan.",
            "commonMistakes": [
              "Mengambil nilai tengah terus daripada senarai data mentah untuk mencari median tanpa menyusun data mengikut tertib menaik atau menurun terlebih dahulu.",
              "Menyatakan kekerapan tertinggi itu sendiri sebagai mod (contohnya menulis mod = 12 dan bukannya nilai data yang mempunyai kekerapan 12).",
              "Dalam jadual kekerapan, mencari median berdasarkan bilangan baris atau nilai tengah lajur skor tanpa mengambil kira kekerapan terkumpul (N + 1)/2."
            ]
          },
          {
            "id": "b12_s2",
            "name": "Min Data Tak Terkumpul dan Jadual Kekerapan",
            "tests": "Menguji kebolehan murid mengira min bagi set data tak terkumpul dan jadual kekerapan termasuk mencari nilai kekerapan atau data yang tertinggal apabila min diberikan.",
            "commonMistakes": [
              "Membahagi jumlah (skor × kekerapan) dengan bilangan baris dalam jadual kekerapan dan bukannya dengan jumlah keseluruhan kekerapan.",
              "Menjumlahkan nilai skor sahaja tanpa mendarab setiap skor dengan kekerapannya masing-masing.",
              "Terlupa memasukkan nilai data 0 dalam bilangan data (N) ketika membahagi untuk mendapatkan min."
            ]
          },
          {
            "id": "b12_s3",
            "name": "Kesan Perubahan Data dan Pemilihan Sukatan Paling Sesuai",
            "tests": "Menguji kefahaman murid meramalkan kesan perubahan seragam atau kewujudan nilai ekstrem terhadap mod, median dan min serta memilih sukatan kecenderungan memusat paling sesuai bagi sesuatu situasi.",
            "commonMistakes": [
              "Memilih min apabila terdapat nilai ekstrem (pencilan) yang sangat besar atau sangat kecil, sedangkan median lebih sesuai mewakili data tersebut.",
              "Tidak menyedari bahawa untuk data kategori (bukan berangka seperti warna kegemaran atau saiz baju), hanya mod sahaja yang sesuai ditentukan.",
              "Menyangka apabila setiap data didarab dengan pemalar k atau ditambah pemalar c, hanya min sahaja yang berubah manakala median dan mod kekal tidak berubah."
            ]
          }
        ]
      },
      {
        "id": "b13",
        "name": "Kebarangkalian Mudah",
        "textbookUnit": "Bab 13: Kebarangkalian Mudah",
        "skills": [
          {
            "id": "b13_s1",
            "name": "Ruang Sampel dan Kebarangkalian Peristiwa P(A) = n(A)/n(S)",
            "tests": "Menguji kemahiran murid menyenaraikan ruang sampel S dengan tatatanda set yang betul serta mengira kebarangkalian teori suatu peristiwa menggunakan rumus P(A) = n(A)/n(S).",
            "commonMistakes": [
              "Menghitung kebarangkalian melebihi 1 atau negatif, atau menulis jawapan sebagai nisbah (contohnya 2:5) dan bukannya pecahan termudah atau perpuluhan antara 0 hingga 1.",
              "Gagal menyenaraikan semua kesudahan yang mungkin dengan tepat dalam ruang sampel apabila melibatkan dua objek atau syarat tanpa pengembalian.",
              "Menulis n(A) sebagai elemen set dan bukannya bilangan elemen, atau memasukkan kesudahan yang tidak memenuhi syarat ke dalam peristiwa A."
            ]
          },
          {
            "id": "b13_s2",
            "name": "Peristiwa Pelengkap P(A') = 1 - P(A)",
            "tests": "Menguji kefahaman murid mengenal pasti peristiwa pelengkap A' serta menghitung P(A') menggunakan hubungan P(A') = 1 - P(A).",
            "commonMistakes": [
              "Tersilap mengira 1 - P(A) bagi pecahan atau perpuluhan (contohnya menulis 1 - 3/7 = 4/10 atau 1 - 0.35 = 0.75).",
              "Menganggap dua peristiwa yang bukan melengkapkan ruang sampel (seperti mendapat nombor perdana dan nombor genap) sebagai pelengkap antara satu sama lain tanpa menyemak jumlah kesudahan.",
              "Terlupa mengeluarkan elemen peristiwa A daripada ruang sampel S apabila menyenaraikan unsur bagi peristiwa pelengkap A'."
            ]
          },
          {
            "id": "b13_s3",
            "name": "Jangkaan Bilangan Kejadian dan Masalah Kebarangkalian",
            "tests": "Menguji keupayaan murid menyelesaikan masalah harian melibatkan kebarangkalian mudah, menentukan bilangan objek tidak diketahui dalam ruang sampel serta menganggar jangkaan bilangan kejadian dalam sejumlah cubaan.",
            "commonMistakes": [
              "Menggunakan kebarangkalian eksperimen secara langsung sebagai satu kepastian mutlak dan bukannya jangkaan (atau gagal mendarab P(A) dengan jumlah cubaan N).",
              "Menolak atau menambah objek ke dalam ruang sampel tetapi terlupa mengemas kini jumlah keseluruhan n(S) pada penyebut apabila mengira kebarangkalian baharu.",
              "Gagal membentuk persamaan algebra daripada P(A) = x / (jumlah + x) apabila mencari bilangan item baharu yang perlu ditambah untuk mencapai kebarangkalian sasaran."
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
