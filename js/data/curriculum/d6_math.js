/**
 * Darjah 6 Matematik knowledge map (KSSR Semakan 2017, Bab 1-8).
 * Original-wording skill summaries and common pupil misconceptions.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Curriculum = App.Curriculum || {};
  App.Curriculum.d6 = App.Curriculum.d6 || {};

  App.Curriculum.d6.math = {
    "units": [
      {
        "id": "b1",
        "name": "Nombor Bulat dan Operasi",
        "textbookUnit": "Bab 1: Nombor Bulat dan Operasi",
        "skills": [
          {
            "id": "b1_s1",
            "name": "Membaca, Menulis dan Pola Nombor hingga 10 000 000",
            "tests": "Menguji kemahiran murid membaca serta menulis nombor hingga 10 000 000 dalam angka dan perkataan serta menentukan pola nombor tertib menaik dan menurun.",
            "commonMistakes": [
              "Mengabaikan digit sifar sebagai pemegang nilai tempat semasa menulis nombor daripada perkataan (contohnya menulis 345 208 bagi tiga juta empat puluh lima ribu dua ratus lapan).",
              "Keliru antara nilai tempat puluh ribu dengan ratus ribu apabila menyebut atau menulis nombor tujuh digit.",
              "Tersilap menentukan beza tetap antara sebutan berturutan atau arah tertib menaik dan menurun dalam pola nombor besar."
            ]
          },
          {
            "id": "b1_s2",
            "name": "Pecahan Juta dan Perpuluhan Juta serta Penukaran",
            "tests": "Menguji kefahaman murid menukar nombor bulat kepada pecahan juta dan perpuluhan juta serta sebaliknya dengan melibatkan penyebut 2, 4, 5, 8 dan 10.",
            "commonMistakes": [
              "Menyangka 3/4 juta bersamaan 340 000 atau 75 000 kerana tersilap mendarab dengan 100 000 bukannya 1 000 000.",
              "Menulis 1 045 000 sebagai 1.45 juta dengan menggugurkan digit sifar selepas titik perpuluhan.",
              "Tidak mempermudahkan pecahan juta ke bentuk termudah atau menukar nombor bercampur dengan salah."
            ]
          },
          {
            "id": "b1_s3",
            "name": "Operasi Asas dan Operasi Bergabung Melibatkan Nombor Bulat, Pecahan Juta dan Perpuluhan Juta",
            "tests": "Menguji kecekapan murid menyelesaikan ayat matematik operasi asas dan operasi bergabung (dengan dan tanpa tanda kurung) yang menggabungkan nombor bulat, pecahan juta dan perpuluhan juta.",
            "commonMistakes": [
              "Mengira operasi secara terus dari kiri ke kanan tanpa mematuhi tertib operasi (darab dan bahagi dahulu sebelum tambah dan tolak, serta tanda kurung didahulukan).",
              "Tersilap menukar pecahan juta kepada perpuluhan juta atau nombor bulat sebelum melaksanakan operasi.",
              "Mengabaikan unit 'juta' pada salah satu nombor sehingga menambah nombor bulat terus dengan nilai perpuluhan juta."
            ]
          },
          {
            "id": "b1_s4",
            "name": "Operasi Asas dan Operasi Bergabung Melibatkan Anu",
            "tests": "Menguji kebolehan murid menentukan nilai anu dalam ayat matematik tambah, tolak, darab, bahagi dan operasi bergabung melibatkan nombor bulat, pecahan juta serta perpuluhan juta.",
            "commonMistakes": [
              "Menggunakan operasi yang sama dan bukannya operasi songsang ketika memindahkan nombor untuk mencari anu (contohnya menyelesaikan x - a = b dengan mengira b - a).",
              "Keliru dengan kedudukan anu dalam penolakan dan pembahagian seperti a - x = b atau a ÷ x = b.",
              "Melupakan langkah tertib operasi apabila mencari nilai anu dalam persamaan dua langkah."
            ]
          },
          {
            "id": "b1_s5",
            "name": "Nombor Perdana, Nombor Gubahan dan Penyelesaian Masalah",
            "tests": "Menguji kefahaman murid mengelaskan nombor perdana dan nombor gubahan dalam lingkungan 100 serta menyelesaikan masalah harian pelbagai langkah bagi topik Nombor Bulat dan Operasi.",
            "commonMistakes": [
              "Menganggap nombor 1 ialah nombor perdana atau nombor gubahan, sedangkan 1 bukan kedua-duanya.",
              "Tersilap mengelaskan nombor ganjil yang boleh dibahagi dengan 3 atau 7 seperti 9, 15, 21, 51, 57, 87 dan 91 sebagai nombor perdana, atau menyangka 2 ialah nombor gubahan kerana ia nombor genap.",
              "Terlepas satu langkah dalam soalan penyelesaian masalah harian seperti pembahagian sama banyak selepas penukaran unit juta."
            ]
          }
        ]
      },
      {
        "id": "b2",
        "name": "Pecahan, Perpuluhan dan Peratus",
        "textbookUnit": "Bab 2: Pecahan, Perpuluhan dan Peratus",
        "skills": [
          {
            "id": "b2_s1",
            "name": "Bahagi Pecahan (Pecahan Wajar dan Nombor Bercampur)",
            "tests": "Menguji keupayaan murid membahagi pecahan wajar dengan nombor bulat, pecahan wajar dengan pecahan wajar, nombor bercampur dengan nombor bulat atau pecahan serta nombor bercampur dengan nombor bercampur dalam bentuk termudah.",
            "commonMistakes": [
              "Menyongsangkan pecahan pertama (yang dibahagi) dan bukannya pecahan pembahagi selepas menukar operasi kepada darab.",
              "Terus mendarab dua pecahan tanpa menyongsangkan pembahagi atau memansuhkan pengangka dengan pengangka.",
              "Membahagikan bahagian nombor bulat dan bahagian pecahan secara berasingan tanpa menukarkan nombor bercampur kepada pecahan tak wajar terlebih dahulu."
            ]
          },
          {
            "id": "b2_s2",
            "name": "Darab dan Bahagi Perpuluhan",
            "tests": "Menguji kemahiran murid mendarab dan membahagi nombor perpuluhan dengan nombor perpuluhan sehingga dua tempat perpuluhan dalam pengiraan terus serta situasi harian.",
            "commonMistakes": [
              "Tersilap meletakkan titik perpuluhan pada hasil darab (contohnya mengira 0.3 × 0.4 = 1.2 kerana tidak menjumlahkan bilangan tempat perpuluhan).",
              "Lupa menggerakkan titik perpuluhan pada nombor yang dibahagi dengan bilangan langkah yang sama seperti pembahagi (contohnya menulis 2.5 ÷ 0.5 = 0.5).",
              "Menggugurkan digit sifar di hadapan atau di tengah hasil bahagi perpuluhan."
            ]
          },
          {
            "id": "b2_s3",
            "name": "Penukaran Perpuluhan dan Peratus serta Tambah dan Tolak Peratus",
            "tests": "Menguji penguasaan murid menukar perpuluhan kepada peratus dan sebaliknya (termasuk melebihi 100%) serta menambah dan menolak nilai peratus.",
            "commonMistakes": [
              "Mendarab atau membahagi dengan 10 bukannya 100 semasa menukar antara perpuluhan dengan peratus (contohnya 1.5 ditulis sebagai 15% atau 175% ditulis sebagai 17.5).",
              "Menolak atau menambah peratus berurutan dengan mengumpul kurungan secara salah seperti mengira 67% - 18% - 9% sebagai 67% - (18% - 9%).",
              "Tersilap mentafsir peratus melebihi 100% dalam perbandingan kuantiti."
            ]
          },
          {
            "id": "b2_s4",
            "name": "Nilai Kuantiti daripada Peratus dan Nilai Peratus daripada Kuantiti",
            "tests": "Menguji kebolehan murid mengira nilai suatu kuantiti apabila diberi peratus (termasuk melebihi 100%) dan menentukan peratusan suatu kuantiti berbanding kuantiti asal.",
            "commonMistakes": [
              "Menukar nisbah secara terbalik apabila mengira peratus daripada kuantiti (mengira jumlah ÷ sebahagian × 100%).",
              "Menambah nilai peratus terus kepada kuantiti asal apabila peratus melebihi 100% (contohnya mengira 140% daripada 2.5 sebagai 2.5 + 1.40).",
              "Tersilap meletakkan titik perpuluhan selepas membahagi dengan 100."
            ]
          },
          {
            "id": "b2_s5",
            "name": "Operasi Bergabung Pecahan, Perpuluhan dan Peratus serta Penyelesaian Masalah",
            "tests": "Menguji kemahiran murid melaksanakan operasi bergabung tambah, tolak, darab dan bahagi melibatkan gabungan pecahan, perpuluhan dan peratus serta menyelesaikan masalah harian bersepadu.",
            "commonMistakes": [
              "Mengabaikan tertib operasi (tanda kurung, darab dan bahagi sebelum tambah dan tolak) apabila menggabungkan pecahan dan perpuluhan.",
              "Tersilap menukar bentuk nombor supaya seragam sebelum mengira (contohnya menukar 3/4 kepada 0.34 atau 25% kepada 2.5).",
              "Memberikan jawapan dalam unit atau bentuk yang berbeza daripada kehendak soalan."
            ]
          }
        ]
      },
      {
        "id": "b3",
        "name": "Wang",
        "textbookUnit": "Bab 3: Wang",
        "skills": [
          {
            "id": "b3_s1",
            "name": "Harga Kos, Harga Jual, Untung dan Rugi",
            "tests": "Menguji keupayaan murid mengenal pasti dan mengira harga kos, harga jual, untung serta rugi bagi satu atau lebih barang termasuk pengiraan peratus untung.",
            "commonMistakes": [
              "Menolak harga jual daripada harga kos ketika mengira keuntungan sehingga mendapat nilai negatif atau terkeliru antara untung dengan rugi.",
              "Menambah untung kepada harga jual apabila diminta mencari harga kos asal sesuatu barang.",
              "Mengabaikan kos tambahan seperti upah atau pengangkutan sebelum membandingkan jumlah harga kos dengan jumlah harga jual."
            ]
          },
          {
            "id": "b3_s2",
            "name": "Diskaun, Rebat dan Baucar",
            "tests": "Menguji kefahaman murid mengenai maksud diskaun, rebat dan baucar serta kebolehan mengira nilai diskaun, peratus diskaun dan harga akhir selepas potongan.",
            "commonMistakes": [
              "Menyatakan nilai potongan diskaun sebagai jawapan akhir sedangkan soalan meminta harga selepas diskaun.",
              "Menolak nilai baucar daripada harga asal terlebih dahulu sebelum mengira peratusan diskaun, bukannya mengikut urutan potongan harga.",
              "Menambah peratus diskaun kepada harga asal atau membahagi diskaun dengan harga selepas diskaun semasa mencari peratus diskaun."
            ]
          },
          {
            "id": "b3_s3",
            "name": "Invois, Bil, Resit dan Cukai Perkhidmatan",
            "tests": "Menguji pengetahuan murid membezakan fungsi invois, bil dan resit serta kemahiran mengira cukai perkhidmatan 6%, diskaun niaga dan jumlah bayaran atau baki.",
            "commonMistakes": [
              "Menukar fungsi dokumen antara invois yang dihantar sebelum bayaran dengan resit yang dikeluarkan sebagai bukti pembayaran rasmi.",
              "Menolak cukai perkhidmatan 6% daripada jumlah bil atau menambah cukai dua kali ke atas harga makanan.",
              "Mengira cukai perkhidmatan 6% daripada jumlah yang sudah termasuk cukai tanpa mencari harga asal terlebih dahulu."
            ]
          },
          {
            "id": "b3_s4",
            "name": "Faedah dan Dividen",
            "tests": "Menguji kebolehan murid mengira faedah simpanan, nilai dividen pelaburan, kadar faedah atau dividen serta jumlah simpanan keseluruhan bagi tempoh satu tahun atau lebih.",
            "commonMistakes": [
              "Mengemukakan nilai faedah semata-mata apabila soalan meminta jumlah wang simpanan keseluruhan selepas satu tahun.",
              "Lupa mendarabkan bilangan tahun atau tersilap menggabungkan kadar dividen dan bonus pada wang pokok yang salah.",
              "Tersilap menukar peratus kadar faedah kepada perpuluhan seperti menganggap 4% sebagai 0.4 dan bukannya 0.04."
            ]
          },
          {
            "id": "b3_s5",
            "name": "Aset, Liabiliti, Insurans, Takaful dan Penyelesaian Masalah Kewangan",
            "tests": "Menguji keupayaan murid mengelaskan aset dan liabiliti, memahami peranan insurans dan takaful serta menyelesaikan masalah kewangan harian berbilang langkah.",
            "commonMistakes": [
              "Mengelirukan pinjaman rumah atau pinjaman kereta yang masih berhutang sebagai aset hanya kerana objek fizikalnya bernilai tinggi.",
              "Menyamaratakan pemilikan dana takaful dengan premium insurans konvensional sedangkan sumbangan takaful dimiliki oleh peserta dalam dana takaful.",
              "Menambah jumlah liabiliti kepada jumlah aset apabila diminta mengira nilai bersih atau beza liabiliti antara dua individu."
            ]
          }
        ]
      },
      {
        "id": "b4",
        "name": "Masa dan Waktu",
        "textbookUnit": "Bab 4: Masa dan Waktu",
        "skills": [
          {
            "id": "b4_s1",
            "name": "Mengenal Zon Masa dan Perbezaan Masa Antara Bandar",
            "tests": "Menguji pemahaman murid tentang konsep 24 zon masa dunia berpandukan Greenwich (UTC+0) serta kemahiran mengira perbezaan masa dan waktu pada hari yang sama.",
            "commonMistakes": [
              "Menolak nombor zon masa positif dengan zon masa negatif secara terus seperti menganggap perbezaan UTC+8 dan UTC-5 ialah 3 jam, bukannya 13 jam.",
              "Menolak perbezaan jam apabila mencari waktu di bandar yang terletak lebih ke timur atau mendahului masa.",
              "Tersilap mengira separuh jam pada zon masa separuh seperti UTC+5:30 atau UTC+9:30 sebagai satu jam penuh."
            ]
          },
          {
            "id": "b4_s2",
            "name": "Menentukan Waktu di Bandar Berlainan Zon Masa Termasuk Lintas Hari",
            "tests": "Menguji kemahiran murid menentukan waktu tempatan dan tarikh yang tepat apabila pengiraan zon masa melintasi tengah malam ke hari berikutnya atau sebelumnya.",
            "commonMistakes": [
              "Mengekalkan tarikh asal walaupun jumlah jam sudah melepasi pukul 24:00 atau undur melepasi pukul 00:00.",
              "Menambah atau menolak tarikh secara terbalik apabila bergerak ke arah barat atau timur merentasi tengah malam.",
              "Tersilap menentukan bilangan hari dalam sesuatu bulan ketika berlaku pertukaran tarikh di hujung bulan."
            ]
          },
          {
            "id": "b4_s3",
            "name": "Penyelesaian Masalah Zon Masa dan Tempoh Penerbangan atau Perjalanan",
            "tests": "Menguji keupayaan murid menyelesaikan masalah berbilang langkah melibatkan tempoh penerbangan, transit, masa berlepas dan masa ketibaan mengikut waktu tempatan.",
            "commonMistakes": [
              "Menolak waktu tempatan ketibaan dengan waktu tempatan berlepas secara langsung tanpa menyelaras perbezaan zon masa terlebih dahulu.",
              "Melaraskan perbezaan zon masa pada arah yang salah semasa menukar waktu tempatan bandar asal kepada waktu tempatan destinasi.",
              "Terlupa memasukkan tempoh masa transit apabila mengira waktu ketibaan penerbangan berbilang peringkat."
            ]
          }
        ]
      },
      {
        "id": "b5",
        "name": "Ukuran dan Sukatan",
        "textbookUnit": "Bab 5: Ukuran dan Sukatan",
        "skills": [
          {
            "id": "b5_s1",
            "name": "Penyelesaian Masalah Melibatkan Panjang dan Jisim (5.1.1)",
            "tests": "Menguji keupayaan murid menyelesaikan masalah harian yang menggabungkan panjang (mm, cm, m) dan jisim (g, kg) menggunakan kaedah kadaran serta penukaran unit yang tepat.",
            "commonMistakes": [
              "Terlupa menukar unit gram kepada kilogram dengan membahagi 1000 dan tersilap membahagi dengan 100.",
              "Mengira jisim bagi satu bahagian sahaja atau menggunakan panjang yang salah tanpa mencari nilai bagi satu unit panjang terlebih dahulu.",
              "Tersilap menentukan nilai yang berkurang daripada aras asal berbanding baki yang tinggal apabila paras bahan dalam bekas menyusut."
            ]
          },
          {
            "id": "b5_s2",
            "name": "Penyelesaian Masalah Melibatkan Panjang dan Isi Padu Cecair (5.1.1)",
            "tests": "Menguji kemahiran murid mengaitkan jarak atau ketinggian aras cecair (mm, cm, m, km) dengan isi padu cecair (ml, ℓ) termasuk masalah perjalanan pergi dan balik.",
            "commonMistakes": [
              "Terlupa menggandakan jarak perjalanan kepada dua kali ganda apabila soalan meminta jumlah penggunaan bahan api bagi perjalanan pergi dan balik.",
              "Tersilap menukar unit meter kepada sentimeter (× 100) atau liter kepada mililiter (× 1000) semasa melengkapkan langkah pengiraan.",
              "Mengelirukan isi padu baki cecair di dalam bekas dengan isi padu cecair yang telah diminum atau dikeluarkan."
            ]
          },
          {
            "id": "b5_s3",
            "name": "Penyelesaian Masalah Melibatkan Jisim dan Isi Padu Cecair (5.1.1)",
            "tests": "Menguji kebolehan murid menyelesaikan masalah kadaran melibatkan jisim bahan (g, kg) dan isi padu cecair (ml, ℓ) dalam situasi resipi, campuran serta sesaran air.",
            "commonMistakes": [
              "Membandingkan nilai dalam liter terus dengan mililiter tanpa menyamakan unit (1 ℓ = 1000 ml) sebelum mengira kadaran.",
              "Terlupa menambah isi padu cecair sedia ada apabila mengira jumlah campuran akhir atau bacaan akhir silinder penyukat.",
              "Menggunakan nisbah bagi satu bahagian tanpa menyemak kuantiti asas dalam resipi seperti 250 g atau 2 ℓ."
            ]
          }
        ]
      },
      {
        "id": "b6",
        "name": "Ruang",
        "textbookUnit": "Bab 6: Ruang",
        "skills": [
          {
            "id": "b6_s1",
            "name": "Membentuk, Mengukur dan Mengelaskan Sudut hingga 180° (6.1.2)",
            "tests": "Menguji pemahaman murid tentang cara menggunakan protraktor (skala dalam dan skala luar), mengukur sudut antara dua garis hingga 180°, serta mengelaskan sudut tirus, tegak, cakah dan garis lurus.",
            "commonMistakes": [
              "Membaca skala yang bertentangan pada protraktor sehingga mendapat sudut penggenap (180° − θ) dan bukannya nilai sudut sebenar.",
              "Menganggap sudut 90° termasuk dalam kumpulan sudut tirus atau sudut cakah, bukannya sudut tegak.",
              "Terlupa menolak bacaan garisan permulaan apabila kedua-dua garis pada protraktor tidak bermula tepat pada 0°."
            ]
          },
          {
            "id": "b6_s2",
            "name": "Poligon Sekata hingga 8 Sisi dan Sudut Pedalamannya (6.1.1)",
            "tests": "Menguji kecekapan murid mengenal pasti poligon sekata hingga 8 sisi (termasuk bilangan sisi dan bucu heptagon sekata) serta menentukan dan membandingkan sudut pedalaman bagi poligon 3, 4, 5, 6 dan 8 sisi.",
            "commonMistakes": [
              "Mengelirukan bilangan sisi antara pentagon (5), heksagon (6), heptagon (7) dan oktagon (8).",
              "Tersilap mengingati nilai satu sudut pedalaman poligon sekata seperti menyangka sudut heksagon sekata ialah 108° (milik pentagon) atau 135° (milik oktagon).",
              "Menjumlahkan sudut pedalaman kedua-dua poligon apabila soalan meminta perbezaan nilai sudut antara dua poligon."
            ]
          },
          {
            "id": "b6_s3",
            "name": "Mengenal Bulatan — Pusat, Jejari dan Diameter (6.2.1, 6.2.2)",
            "tests": "Menguji penguasaan murid terhadap maksud pusat bulatan, lilitan, jejari dan diameter, hubungan d = 2 × r dan r = d ÷ 2, serta melukis bulatan menggunakan jejari tertentu.",
            "commonMistakes": [
              "Mengelirukan jejari dengan diameter dengan menyangka jejari ialah dua kali ganda diameter.",
              "Menganggap ukuran jarak pada pembaris ubah suai daripada 0 cm ke tanda jejari ialah diameter bulatan yang terhasil.",
              "Terlupa menukar unit meter kepada sentimeter terlebih dahulu sebelum membandingkan atau mengira jejari dan diameter."
            ]
          },
          {
            "id": "b6_s4",
            "name": "Penyelesaian Masalah Melibatkan Ruang, Sudut Poligon dan Bulatan (6.3.1)",
            "tests": "Menguji keupayaan murid menyelesaikan masalah gabungan yang melibatkan perimeter poligon sekata, susunan objek bulat sebaris atau di dalam dulang, sudut pada pusat bulatan (360°), dan perancangan ruang.",
            "commonMistakes": [
              "Mendarab bilangan objek bulat dengan jejari dan bukannya diameter (2 × jejari) semasa mencari panjang susunan sebaris.",
              "Membahagi 180° dan bukannya 360° apabila mencari sudut bagi satu sektor dalam satu putaran lengkap bulatan.",
              "Terlupa mengambil kira ruang di kedua-dua sisi (2 × kelegaan) apabila merancang saiz objek di dalam kawasan segi empat sama."
            ]
          }
        ]
      },
      {
        "id": "b7",
        "name": "Koordinat, Nisbah dan Kadaran",
        "textbookUnit": "Bab 7: Koordinat, Nisbah dan Kadaran",
        "skills": [
          {
            "id": "b7_s1",
            "name": "Jarak Mengufuk dan Jarak Mencancang Antara Dua Koordinat (7.1.1)",
            "tests": "Menguji keupayaan murid menentukan jarak mengufuk dan jarak mencancang antara dua titik pada sukuan pertama satah Cartes termasuk menukar unit grid kepada jarak sebenar berdasarkan skala yang diberikan.",
            "commonMistakes": [
              "Menukarkan nilai jarak mengufuk (paksi-x) dengan jarak mencancang (paksi-y) semasa membaca pasangan tertib (x, y).",
              "Lupa mendarabkan bilangan unit pada satah Cartes dengan nilai skala seperti 1 cm mewakili 2 km atau nisbah 1 : 100 000.",
              "Menambahkan kedua-dua nilai koordinat (x1 + x2) bukannya mencari beza mutlak antara dua kedudukan."
            ]
          },
          {
            "id": "b7_s2",
            "name": "Nisbah Antara Dua Kuantiti dan Bentuk Termudah (7.2.1)",
            "tests": "Menguji kemahiran menulis perbandingan dua kuantiti dalam bentuk a : b, menukar unit ukuran yang berbeza kepada unit yang sama terlebih dahulu, serta mempermudahkan nisbah kepada bentuk termudah.",
            "commonMistakes": [
              "Terus menulis nisbah tanpa menyamakan unit terlebih dahulu, misalnya membandingkan gram dengan kilogram secara langsung.",
              "Mempermudahkan nisbah secara separa sahaja tanpa membahagi dengan faktor sepunya terbesar sehingga bentuk termudah.",
              "Menukar susunan sebutan atau keliru antara nisbah bahagian-kepada-bahagian dengan nisbah bahagian-kepada-jumlah."
            ]
          },
          {
            "id": "b7_s3",
            "name": "Menentukan Kuantiti yang Berkadaran (7.3.1)",
            "tests": "Menguji kefahaman murid menggunakan kaedah unitari atau penggandaan nisbah setara untuk mencari satu kuantiti yang tidak diketahui apabila nisbah dan satu kuantiti atau jumlah diberikan.",
            "commonMistakes": [
              "Terus mendarabkan kuantiti yang diberi dengan nombor kedua nisbah tanpa mencari nilai bagi satu bahagian terlebih dahulu.",
              "Membahagikan jumlah keseluruhan dengan satu bahagian sahaja bukannya dengan hasil tambah semua bahagian dalam nisbah.",
              "Salah memadankan kuantiti yang diberi dengan bahagian nisbah yang sepadan apabila susunan nama dalam soalan berbeza."
            ]
          },
          {
            "id": "b7_s4",
            "name": "Penyelesaian Masalah Melibatkan Koordinat, Nisbah dan Kadaran (7.4.1)",
            "tests": "Menguji keupayaan murid menyelesaikan masalah harian pelbagai langkah yang menggabungkan pergerakan koordinat berskala, perubahan kuantiti sebelum nisbah, beza bahagian, dan kadaran.",
            "commonMistakes": [
              "Menggunakan kuantiti asal untuk mengira nisbah terkini walaupun soalan menyatakan berlakunya penambahan atau pengurangan.",
              "Mengelirukan nilai beza bahagian dengan nilai jumlah keseluruhan apabila menentukan nilai satu bahagian.",
              "Tersilap arah pergerakan ke kiri atau ke bawah pada satah Cartes semasa mengira koordinat baharu."
            ]
          }
        ]
      },
      {
        "id": "b8",
        "name": "Pengurusan Data dan Kebolehjadian",
        "textbookUnit": "Bab 8: Pengurusan Data dan Kebolehjadian",
        "skills": [
          {
            "id": "b8_s1",
            "name": "Melengkapkan dan Mentafsir Carta Pai (Sudut, Pecahan dan Peratus) (8.1.1)",
            "tests": "Menguji kemahiran murid mengaitkan sudut carta pai (45°, 90°, 180°) dengan pecahan, peratus dan bilangan data sebenar bagi melengkapkan serta mentafsir maklumat carta pai.",
            "commonMistakes": [
              "Menyangka sudut 45° mewakili 1/4 bulatan sedangkan 45° ialah 1/8 daripada putaran lengkap 360°.",
              "Lupa bahawa jumlah sudut dalam satu carta pai lengkap ialah 360° atau jumlah keseluruhan peratus ialah 100%.",
              "Menentukan mod berdasarkan nilai sudut atau bilangan kecil tanpa membandingkan sektor yang mempunyai kekerapan tertinggi."
            ]
          },
          {
            "id": "b8_s2",
            "name": "Menyatakan Kebolehjadian Peristiwa (8.2.1, 8.2.2)",
            "tests": "Menguji keupayaan murid menentukan sama ada sesuatu peristiwa mungkin atau tidak mungkin berlaku serta mengelaskannya kepada lima tahap kebolehjadian iaitu pasti, besar kemungkinan, sama kemungkinan, kecil kemungkinan dan mustahil.",
            "commonMistakes": [
              "Menyatakan peristiwa yang jarang berlaku sebagai mustahil walaupun sekurang-kurangnya satu kesudahan masih wujud.",
              "Mengelirukan sama kemungkinan dengan besar kemungkinan apabila bilangan kesudahan yang dikehendaki tidak tepat separuh daripada jumlah.",
              "Gagal mengira jumlah kesudahan keseluruhan dengan tepat sebelum menilai nisbah kemungkinan peristiwa tersebut."
            ]
          },
          {
            "id": "b8_s3",
            "name": "Penyelesaian Masalah Melibatkan Carta Pai dan Kebolehjadian (8.3.1)",
            "tests": "Menguji kemahiran murid menyelesaikan masalah harian yang menggabungkan tafsiran carta pai berbilang langkah serta menentukan pelarasan kuantiti bagi mencapai tahap kebolehjadian tertentu.",
            "commonMistakes": [
              "Menggandakan atau membahagikan nilai sektor secara salah apabila nilai satu sektor kecil (45° atau 90°) sahaja diberikan.",
              "Menambah bilangan objek sasaran berdasarkan separuh jumlah asal sahaja untuk menjadikan kebolehjadian sama kemungkinan, tanpa mengambil kira jumlah keseluruhan turut meningkat.",
              "Terlepas pandang maklumat pecahan atau perubahan kuantiti susulan selepas mentafsir nilai awal daripada carta pai."
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
