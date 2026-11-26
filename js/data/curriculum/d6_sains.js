/**
 * Darjah 6 Sains knowledge map (KSSR Semakan 2017, Unit 1-13).
 * Original-wording skill summaries and common pupil misconceptions.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Curriculum = App.Curriculum || {};
  App.Curriculum.d6 = App.Curriculum.d6 || {};

  App.Curriculum.d6.sains = {
    "units": [
      {
        "id": "u1",
        "name": "Kemahiran Saintifik",
        "textbookUnit": "Unit 1: Kemahiran Saintifik",
        "skills": [
          {
            "id": "u1_s1",
            "name": "Kemahiran Proses Sains Asas (Memerhati, Mengelas, Mengukur, Inferens, Meramal dan Berkomunikasi)",
            "tests": "Menguji kebolehan murid membezakan pemerhatian deria daripada inferens, mengelaskan objek mengikut ciri sepunya, memilih alat dan unit ukuran yang jitu, meramal berdasarkan pola serta menyampaikan maklumat secara sistematik.",
            "commonMistakes": [
              "Mencampuradukkan pemerhatian (apa yang dilihat atau diukur melalui deria) dengan inferens (sebab atau penerangan awal bagi pemerhatian tersebut).",
              "Menganggap ramalan sama seperti tekaan rawak tanpa berpandukan data, pola pemerhatian atau pengalaman lalu.",
              "Mengelaskan objek atau haiwan berdasarkan sifat sementara (seperti lokasi semasa) dan bukannya ciri sepunya fizikal atau biologi yang tetap."
            ]
          },
          {
            "id": "u1_s2",
            "name": "Kemahiran Proses Sains Bersepadu (Perhubungan Ruang dan Masa, Mentafsir Data dan Definisi Secara Operasi)",
            "tests": "Menguji kemahiran murid memerihalkan perubahan parameter mengikut masa, mentafsir maklumat daripada jadual atau carta, serta membina definisi secara operasi berdasarkan apa yang diperhatikan dan dilakukan dalam penyiasatan.",
            "commonMistakes": [
              "Menyatakan definisi secara operasi sebagai maksud teori buku teks dan bukannya pemerhatian yang diukur serta perkara yang dilakukan dalam eksperimen.",
              "Tertukar hubungan antara pemboleh ubah dalam jadual data (menyatakan bertambah apabila nilai sebenarnya berkurang).",
              "Mengabaikan unsur masa atau perubahan beransur apabila menghuraikan kemahiran menggunakan perhubungan ruang dan masa."
            ]
          },
          {
            "id": "u1_s3",
            "name": "Mengawal Pemboleh Ubah, Membuat Hipotesis dan Mengeksperimen",
            "tests": "Menguji keupayaan murid mengenal pasti pemboleh ubah dimanipulasikan, bergerak balas dan dimalarkan dalam sesuatu penyiasatan, membina pernyataan hipotesis yang tepat serta menyusun langkah eksperimen secara saintifik.",
            "commonMistakes": [
              "Menukarkan pemboleh ubah dimanipulasikan (perkara yang diubah oleh penyiasat) dengan pemboleh ubah bergerak balas (hasil yang diukur atau diperhatikan).",
              "Menulis hipotesis sebagai soalan atau harapan umum tanpa mengaitkan hubungan langsung antara pemboleh ubah dimanipulasikan dengan bergerak balas.",
              "Mengubah lebih daripada satu pemboleh ubah dimanipulasikan serentak sehingga menjadikan keputusan eksperimen tidak adil."
            ]
          }
        ]
      },
      {
        "id": "u2",
        "name": "Manusia",
        "textbookUnit": "Unit 2: Manusia",
        "skills": [
          {
            "id": "u2_s1",
            "name": "Organ Pembiakan Manusia dan Fungsinya",
            "tests": "Menguji pengetahuan murid mengenal pasti organ pembiakan lelaki (testis, zakar) dan perempuan (ovari, tiub Fallopio, uterus, faraj) serta fungsi setiap organ dalam sistem pembiakan manusia.",
            "commonMistakes": [
              "Menganggap persenyawaan berlaku di dalam uterus (rahim) atau ovari, sedangkan percantuman sperma dan ovum berlaku di tiub Fallopio.",
              "Tertukar fungsi testis yang menghasilkan sperma dengan zakar yang menyalurkan sperma ke dalam faraj.",
              "Keliru antara peranan faraj sebagai saluran menerima sperma dan laluan kelahiran bayi dengan peranan uterus sebagai tempat embrio berkembang."
            ]
          },
          {
            "id": "u2_s2",
            "name": "Proses Persenyawaan Manusia hingga Kelahiran dan Kepentingan Pembiakan",
            "tests": "Menguji kefahaman murid mengenai urutan proses persenyawaan daripada penyaluran sperma, pembentukan zigot, embrio dan fetus sehingga kelahiran bayi, peranan tali pusat, serta kepentingan pembiakan untuk kemandirian spesies.",
            "commonMistakes": [
              "Tersilap susunan peringkat perkembangan awal antara zigot, embrio dan fetus.",
              "Menyangka lebih daripada satu sperma bercantum dengan satu ovum semasa persenyawaan normal, sedangkan hanya satu sperma bersenyawa dengan satu ovum.",
              "Terlupa fungsi tali pusat yang membekalkan nutrien dan oksigen kepada fetus serta menyingkirkan bahan kumuh daripada tubuh fetus."
            ]
          },
          {
            "id": "u2_s3",
            "name": "Jenis dan Fungsi Sistem Saraf Manusia (Pusat dan Periferi)",
            "tests": "Menguji penguasaan murid terhadap pembahagian sistem saraf pusat (otak dan saraf tunjang) dan sistem saraf periferi (rangkaian saraf), aliran isyarat rangsangan-gerak balas serta perbezaan tindakan terkawal, tindakan luar kawal dan tindakan refleks.",
            "commonMistakes": [
              "Menyangka saraf tunjang tergolong dalam sistem saraf periferi kerana bentuknya memanjang di luar tengkorak.",
              "Mengelirukan tindakan luar kawal (seperti pernafasan dan denyutan jantung yang dikawal otak) dengan tindakan refleks pantas (seperti menarik tangan apabila terkena benda panas yang dikawal oleh saraf tunjang).",
              "Membalikkan arah aliran isyarat daripada organ deria ke sistem saraf pusat dan seterusnya ke bahagian gerak balas."
            ]
          },
          {
            "id": "u2_s4",
            "name": "Kegagalan Fungsi Sistem Saraf Periferi dan Penjagaan Sistem Saraf",
            "tests": "Menguji pengetahuan murid tentang kesan kerosakan sistem saraf periferi seperti Bell's palsy dan masalah keseimbangan tubuh, serta lima amalan utama penjagaan sistem saraf.",
            "commonMistakes": [
              "Menyangka Bell's palsy berpunca daripada kerosakan otot muka semata-mata dan bukannya gangguan pada saraf periferi yang mengawal otot muka.",
              "Menganggap minum minuman beralkohol hanya menjejaskan perut tanpa menyedari kesannya melambatkan penghantaran isyarat dalam sistem saraf.",
              "Mengabaikan kaitan amalan postur yang betul serta pemakaian alat pelindung tubuh (seperti topi keledar) dengan pencegahan kecederaan otak dan saraf tunjang."
            ]
          }
        ]
      },
      {
        "id": "u3",
        "name": "Mikroorganisma",
        "textbookUnit": "Unit 3: Mikroorganisma",
        "skills": [
          {
            "id": "u3_s1",
            "name": "Maksud dan Jenis-jenis Mikroorganisma",
            "tests": "Menguji kebolehan murid menyatakan maksud mikroorganisma serta mengenal pasti lima jenis mikroorganisma (fungi, bakteria, alga, protozoa dan virus) berdasarkan ciri khas dan contoh masing-masing.",
            "commonMistakes": [
              "Mengelaskan alga seperti Chlorella dan Volvox sebagai tumbuhan kecil biasa atau protozoa kerana hidup di dalam air, walhal alga berfotosintesis seperti tumbuhan.",
              "Menyangka virus boleh dilihat menggunakan mikroskop cahaya biasa dan mampu membiak secara bebas di luar sel perumah.",
              "Tertukar contoh antara fungi (yis, Penicillium, kulat roti) dengan bakteria (Salmonella, Streptococcus, Spirillum) atau protozoa (Paramesium, Amoeba)."
            ]
          },
          {
            "id": "u3_s2",
            "name": "Proses Hidup dan Faktor Pertumbuhan Mikroorganisma",
            "tests": "Menguji kefahaman murid tentang bukti tiga proses hidup mikroorganisma (bernafas, bergerak, bertumbuh) dan lima faktor yang mempengaruhi pertumbuhannya (suhu sesuai, kehadiran air, udara, nutrien dan keasidan sesuai).",
            "commonMistakes": [
              "Menyangka doh roti yang dicampur yis tanpa gula langsung tidak mengembang, sedangkan tepung dalam doh turut membekalkan nutrien kepada yis.",
              "Menganggap suhu yang semakin tinggi sentiasa mempercepat pertumbuhan mikroorganisma, sedangkan suhu didih membunuh mikroorganisma.",
              "Terlupa bahawa cuka mewujudkan keadaan berasid yang tidak sesuai sehingga menghalang pertumbuhan mikroorganisma pada jeruk."
            ]
          },
          {
            "id": "u3_s3",
            "name": "Kegunaan dan Keburukan Mikroorganisma",
            "tests": "Menguji keupayaan murid mengenal pasti kegunaan mikroorganisma dalam pembuatan makanan, ubat-ubatan, baja organik dan perawatan sisa kumbahan, di samping keburukannya seperti pereputan gigi, kerosakan makanan serta penyakit berjangkit.",
            "commonMistakes": [
              "Menganggap semua mikroorganisma sentiasa berbahaya dan menyebabkan penyakit tanpa mengiktiraf peranan yis, bakteria yogurt atau fungi Penicillium.",
              "Tersilap memadankan punca penyakit berjangkit seperti menganggap kurap disebabkan oleh virus (sepatutnya fungi) atau beguk disebabkan oleh bakteria (sepatutnya virus).",
              "Menyangka gula secara langsung menghakis gigi tanpa melibatkan tindakan asid yang dihasilkan oleh bakteria mulut daripada sisa gula."
            ]
          }
        ]
      },
      {
        "id": "u4",
        "name": "Interaksi antara Hidupan",
        "textbookUnit": "Unit 4: Interaksi antara Hidupan",
        "skills": [
          {
            "id": "u4_s1",
            "name": "Interaksi antara Haiwan: Mangsa-Pemangsa dan Persaingan",
            "tests": "Menguji kefahaman murid tentang maksud interaksi, hubungan mangsa-pemangsa (termasuk tumbuhan pemangsa serangga) serta perbezaan antara persaingan intraspesies dengan persaingan interspesies beserta faktornya.",
            "commonMistakes": [
              "Memasukkan 'pasangan untuk mengawan' sebagai faktor persaingan interspesies, sedangkan haiwan berlainan spesies tidak bersaing untuk pasangan.",
              "Tertukar istilah intraspesies (spesies yang sama) dengan interspesies (spesies yang berlainan).",
              "Keliru mengenal pasti haiwan mana yang berperanan sebagai pemangsa dan mangsa dalam sesuatu situasi rantai pemburuan."
            ]
          },
          {
            "id": "u4_s2",
            "name": "Simbiosis antara Haiwan (Mutualisme, Parasitisme dan Komensalisme)",
            "tests": "Menguji kebolehan murid membezakan tiga jenis simbiosis antara haiwan berdasarkan kesan kepada kedua-dua pihak serta memadankan contoh pasangan haiwan yang tepat.",
            "commonMistakes": [
              "Mengelirukan komensalisme (satu pihak untung, satu pihak tidak terjejas dan tidak beroleh manfaat) dengan mutualisme (kedua-dua pihak mendapat manfaat).",
              "Menyangka hubungan ikan badut dengan buran ialah komensalisme, sedangkan ikan badut turut menakutkan pemangsa buran lalu memberi manfaat timbal balik (mutualisme).",
              "Tertukar istilah parasit (pihak yang mendapat untung sambil merugikan) dengan perumah (pihak yang menanggung kerugian)."
            ]
          },
          {
            "id": "u4_s3",
            "name": "Interaksi antara Tumbuhan dan Kepentingan Interaksi kepada Ekosistem",
            "tests": "Menguji pengetahuan murid tentang empat faktor persaingan antara tumbuhan (air, cahaya matahari, nutrien, ruang), dua jenis simbiosis tumbuhan (komensalisme dan parasitisme) serta kepentingan interaksi dalam mengekalkan keseimbangan ekosistem.",
            "commonMistakes": [
              "Menyangka pokok orkid atau pokok langsuyar menyerap air dan nutrien daripada pokok perumah seperti parasit, sedangkan kedua-duanya hanya menumpang untuk sokongan dan cahaya (komensalisme).",
              "Menganggap tumbuhan yang bersaing untuk cahaya matahari akan tumbuh lebih rendah berbanding tumbuhan yang mendapat cahaya mencukupi, sedangkan anak benih sesak tumbuh lebih tinggi untuk merebut cahaya.",
              "Mengelirukan bunga pakma dan pokok dedalu sebagai tumbuhan komensalisme walhal kedua-duanya merugikan perumah (parasitisme)."
            ]
          }
        ]
      },
      {
        "id": "u5",
        "name": "Pemeliharaan dan Pemuliharaan",
        "textbookUnit": "Unit 5: Pemeliharaan dan Pemuliharaan",
        "skills": [
          {
            "id": "u5_s1",
            "name": "Haiwan Pupus, Hidupan Terancam dan Faktor Ancaman Kepupusan",
            "tests": "Menguji pengetahuan murid membezakan haiwan yang telah pupus dengan haiwan serta tumbuhan yang diancam kepupusan, di samping mengenal pasti faktor ancaman kepupusan akibat aktiviti manusia dan bencana alam.",
            "commonMistakes": [
              "Mengelaskan haiwan yang hampir pupus tetapi masih wujud (seperti tapir Malaya, orang utan dan burung kenyalang) sebagai haiwan telah pupus.",
              "Menyangka haiwan yang telah pupus seperti burung Dodo atau mamot masih boleh dipulihara di pusat perlindungan.",
              "Gagal membezakan kesan pemanasan global (pencairan ais kutub menenggelamkan habitat pantai) daripada kesan pembuangan plastik atau tumpahan minyak."
            ]
          },
          {
            "id": "u5_s2",
            "name": "Pemeliharaan, Pemuliharaan dan Kepentingannya",
            "tests": "Menguji kebolehan murid membezakan maksud dan langkah pemeliharaan (mengekalkan keadaan asal seimbang) daripada pemuliharaan (mengembalikan kepada keadaan asal) serta menghuraikan kepentingannya kepada alam sekitar.",
            "commonMistakes": [
              "Tertukar maksud serta contoh antara pemeliharaan (seperti mewartakan hutan simpan, pembalakan terpilih, boikot produk terancam, undang-undang) dengan pemuliharaan (seperti pusat rehabilitasi dan penanaman semula pokok).",
              "Menyangka pembalakan terpilih bermaksud menebang semua pokok di sesuatu kawasan hutan secara serentak.",
              "Menganggap tumbuhan darat merupakan pengeluar oksigen terbesar di dunia sedangkan alga di laut dalam menyumbang sebahagian besar bekalan oksigen."
            ]
          }
        ]
      },
      {
        "id": "u6",
        "name": "Daya",
        "textbookUnit": "Unit 6: Daya",
        "skills": [
          {
            "id": "u6_s1",
            "name": "Maksud Daya (Tarikan dan Tolakan) serta Kesan Daya",
            "tests": "Menguji keupayaan murid mengenal pasti daya tarikan dan daya tolakan dalam aktiviti harian (termasuk daya magnet dan graviti) serta lima kesan daya terhadap objek.",
            "commonMistakes": [
              "Mengelaskan aktiviti yang melibatkan kedua-dua tarikan dan tolakan (seperti menggergaji kayu atau menampal doh) sebagai satu jenis daya sahaja.",
              "Menyangka semua daya memerlukan sentuhan fizikal secara langsung, lalu melupakan daya tarikan graviti dan daya magnet.",
              "Keliru antara kesan 'mengubah arah gerakan objek' dengan 'mengubah kelajuan objek' dalam situasi sukan."
            ]
          },
          {
            "id": "u6_s2",
            "name": "Daya Geseran: Maksud, Arah, Kesan Baik dan Kesan Buruk",
            "tests": "Menguji kefahaman murid tentang penghasilan daya geseran apabila dua permukaan bersentuhan, arah tindakannya yang bertentangan dengan arah gerakan, serta kesan baik dan buruknya.",
            "commonMistakes": [
              "Melukis atau menyatakan arah daya geseran sama arah dengan pergerakan objek dan bukannya bertentangan arah.",
              "Menganggap semua daya geseran bersifat merugikan tanpa menyedari kepentingan geseran untuk brek basikal, cengkaman tayar, pemadam dan menyalakan mancis.",
              "Menyangka geseran hanya wujud antara permukaan yang sangat kasar dan langsung tiada di atas permukaan licin."
            ]
          },
          {
            "id": "u6_s3",
            "name": "Faktor Mempengaruhi Daya Geseran dan Cara Mengawal Geseran",
            "tests": "Menguji kebolehan murid meramalkan kesan perubahan jisim objek dan jenis permukaan terhadap daya geseran serta memilih cara yang tepat untuk mengurangkan atau menambahkan geseran.",
            "commonMistakes": [
              "Menyangka objek lebih berat mempunyai geseran lebih rendah atau objek lebih ringan bergerak lebih lambat di atas permukaan yang sama.",
              "Keliru membezakan kaedah mengurangkan geseran (minyak pelincir, bedak papan karom, roda troli) dengan kaedah menambah geseran (grip raket, kain pada penutup ketat, serbuk kapur).",
              "Menganggap luas permukaan sentuhan sebagai faktor utama daya geseran dalam silibus Sains Tahun 6, sedangkan dua faktor utamanya ialah jisim objek dan jenis permukaan."
            ]
          },
          {
            "id": "u6_s4",
            "name": "Tekanan Udara, Hubung Kait dengan Ketinggian dan Aplikasinya",
            "tests": "Menguji pemahaman murid tentang punca tekanan udara (perlanggaran zarah udara), hubungan songsang antara altitud dengan tekanan udara, serta prinsip operasi aplikasi harian seperti penyedut minuman, tin dua lubang, sifon, picagari dan pelocok.",
            "commonMistakes": [
              "Menyangka tekanan udara di puncak gunung lebih tinggi daripada tekanan udara di kaki gunung.",
              "Menganggap penyedut minuman atau picagari 'menarik' cecair melalui daya sedutan semata-mata, sedangkan perbezaan tekanan udara di luar yang lebih tinggi menolak cecair masuk.",
              "Berfikir bahawa botol plastik yang ditutup ketat di puncak gunung akan mengembung dan bukannya kemik apabila dibawa turun ke kaki gunung."
            ]
          }
        ]
      },
      {
        "id": "u7",
        "name": "Kelajuan",
        "textbookUnit": "Unit 7: Kelajuan",
        "skills": [
          {
            "id": "u7_s1",
            "name": "Maksud, Unit Kelajuan dan Hubungan Kelajuan, Jarak dan Masa",
            "tests": "Menguji kefahaman konsep kelajuan sebagai ukuran kepantasan, pemilihan unit piawai yang sesuai (cm/s, m/s, km/j) serta hubungan antara kelajuan, jarak dan masa dalam eksperimen dan perbandingan pergerakan.",
            "commonMistakes": [
              "Memilih unit yang tidak sesuai bagi objek besar atau laju seperti mengukur kelajuan kereta api dalam cm/s.",
              "Menyangka objek yang lebih laju mengambil masa lebih lama untuk menamatkan jarak yang sama.",
              "Menganggap objek yang mencatatkan kelajuan 0 km/j masih bergerak secara perlahan dan bukannya berada dalam keadaan pegun."
            ]
          },
          {
            "id": "u7_s2",
            "name": "Mengira Kelajuan (Kelajuan = Jarak ÷ Masa)",
            "tests": "Menguji kemahiran murid mengira kelajuan objek menggunakan rumus Kelajuan = Jarak ÷ Masa, termasuk menukar unit masa atau jarak serta membandingkan kelajuan beberapa objek.",
            "commonMistakes": [
              "Mendarab jarak dengan masa atau membahagi masa dengan jarak dan bukannya membahagi jarak dengan masa.",
              "Membahagi terus kilometer dengan minit (contohnya 60 km ÷ 30 minit) tanpa menukar minit kepada jam terlebih dahulu untuk memperoleh km/j.",
              "Terlupa menukar minit kepada saat apabila mengira kelajuan dalam m/s."
            ]
          },
          {
            "id": "u7_s3",
            "name": "Mengira Jarak (Jarak = Kelajuan × Masa)",
            "tests": "Menguji keupayaan murid mengira jarak yang dilalui menggunakan rumus Jarak = Kelajuan × Masa termasuk penukaran unit masa dan jarak serta masalah berbilang langkah.",
            "commonMistakes": [
              "Membahagi kelajuan dengan masa dan bukannya mendarab kelajuan dengan masa untuk mencari jarak.",
              "Mendarab kelajuan dalam m/s terus dengan nilai masa dalam minit tanpa menukarnya kepada saat (× 60).",
              "Terlupa menukar masa dalam minit kepada jam (÷ 60) apabila kelajuan diberi dalam km/j."
            ]
          },
          {
            "id": "u7_s4",
            "name": "Mengira Masa (Masa = Jarak ÷ Kelajuan) dan Masalah Pelbagai Langkah",
            "tests": "Menguji kemahiran murid menentukan masa perjalanan menggunakan rumus Masa = Jarak ÷ Kelajuan, menukar jam perpuluhan kepada minit, menyamakan unit km dan m, serta mengira waktu ketibaan atau penjimatan masa.",
            "commonMistakes": [
              "Membahagi kelajuan dengan jarak (Kelajuan ÷ Jarak) dan bukannya Jarak ÷ Kelajuan.",
              "Menukarkan nilai jam perpuluhan kepada minit dengan mendarab 100 (contohnya menganggap 0.2 jam = 20 minit dan bukannya 0.2 × 60 = 12 minit).",
              "Membahagi jarak dalam kilometer terus dengan kelajuan dalam m/s tanpa menukar kilometer kepada meter (× 1000)."
            ]
          }
        ]
      },
      {
        "id": "u8",
        "name": "Teknologi Pengawetan Makanan",
        "textbookUnit": "Unit 8: Teknologi Pengawetan Makanan",
        "skills": [
          {
            "id": "u8_s1",
            "name": "Punca dan Ciri-ciri Kerosakan Makanan",
            "tests": "Menguji pengetahuan murid tentang punca kerosakan makanan akibat tindakan mikroorganisma serta keupayaan mengenal pasti ciri kerosakan bagi susu, roti/nasi, buah/sayur, daging/ayam dan makanan laut melalui deria.",
            "commonMistakes": [
              "Menyangka semua perubahan bau dan rasa masam pada susu berpunca daripada udara sejuk semata-mata, bukannya asid yang dihasilkan oleh bakteria.",
              "Menganggap makanan yang kelihatan elok di luar tidak mungkin rosak walaupun teksturnya telah menjadi lembik, berlendir atau berbau busuk.",
              "Tertukar ciri khusus kerosakan antara kategori makanan seperti ciri berbuih dan berketul-ketul pada susu berbanding tompok kehitaman kulat pada roti."
            ]
          },
          {
            "id": "u8_s2",
            "name": "Kaedah Pengawetan Makanan dan Faktor Pertumbuhan Mikroorganisma",
            "tests": "Menguji kecekapan murid memadankan 11 kaedah pengawetan makanan (pengeringan, pendidihan, pendinginan, penyejukbekuan, pembungkusan vakum, pengetinan, pembotolan, pempasteuran, penjerukan, pemasinan, penyalaian, pelilinan) dengan faktor pertumbuhan mikroorganisma yang dihalang.",
            "commonMistakes": [
              "Mengelirukan pendinginan (suhu sekitar 4°C yang memperlahankan pertumbuhan mikroorganisma) dengan penyejukbekuan (0°C dan ke bawah yang menghentikan pertumbuhan).",
              "Menyangka pempasteuran hanya memanaskan susu sekali sahaja pada suhu rendah tanpa mengetahui proses pendinginan segera pada 4°C selepas pemanasan (63°C/30 minit, 72°C/15 saat atau UHT 135°C/2 saat).",
              "Keliru antara faktor ketiadaan air (pengeringan, pemasinan, penyalaian), ketiadaan udara (pembungkusan vakum) dan keasidan tidak sesuai (penjerukan)."
            ]
          },
          {
            "id": "u8_s3",
            "name": "Gabungan Kaedah dan Kepentingan Teknologi Pengawetan Makanan",
            "tests": "Menguji kebolehan murid mengenal pasti contoh makanan yang diawet dengan lebih daripada satu kaedah atau gabungan kaedah (seperti pemasinan dan pengeringan untuk ikan masin) serta enam kepentingan teknologi pengawetan makanan.",
            "commonMistakes": [
              "Menganggap satu jenis makanan hanya boleh diawet menggunakan satu kaedah pengawetan tunggal sahaja.",
              "Terlepas pandang gabungan kaedah dalam penghasilan makanan tradisional seperti penjerukan ikan bersama garam dan minyak atau pengeringan ikan masin.",
              "Mengabaikan manfaat teknologi pengawetan daripada segi penjimatan ruang penyimpanan, pembekalan makanan luar musim dan kebolehpasaran eksport."
            ]
          }
        ]
      },
      {
        "id": "u9",
        "name": "Bahan Buangan",
        "textbookUnit": "Unit 9: Bahan Buangan",
        "skills": [
          {
            "id": "u9_s1",
            "name": "Jenis Bahan Buangan, Terbiodegradasi dan Tidak Terbiodegradasi",
            "tests": "Menguji kebolehan murid mengelaskan tujuh jenis bahan buangan (kaca, logam, kertas, tinja, plastik, sisa makanan, sisa toksik) kepada kategori terbiodegradasi dan tidak terbiodegradasi serta memahami proses penguraiannya.",
            "commonMistakes": [
              "Mengelaskan kaca atau tin aluminium sebagai bahan terbiodegradasi hanya kerana ia boleh dikitar semula di kilang.",
              "Menyangka kertas tidak terbiodegradasi kerana dihasilkan melalui pemprosesan industri, walhal kertas boleh diuraikan oleh mikroorganisma.",
              "Menganggap minyak masak terpakai atau kulit bawang termasuk dalam sisa toksik dan bukannya sisa makanan."
            ]
          },
          {
            "id": "u9_s2",
            "name": "Kesan Penggunaan Tidak Berhemah dan Pengurusan Terancang (5R dan Tong Kitar Semula)",
            "tests": "Menguji kefahaman murid tentang kesan buruk penggunaan bahan buangan secara tidak berhemah (termasuk kesan sisa organik di sungai), pengasingan mengikut tiga warna tong kitar semula serta amalan 5R dan pembuatan baja kompos.",
            "commonMistakes": [
              "Tertukar warna tong kitar semula: biru (kertas), coklat (kaca) dan jingga (tin aluminium, tin keluli dan plastik).",
              "Menyangka sisa makanan yang dibuang ke dalam sungai tidak memudaratkan hidupan akuatik kerana bersifat terbiodegradasi, sedangkan penguraiannya mengurangkan oksigen terlarut dalam air.",
              "Mengelirukan maksud 5R antara Reduce (kurangkan), Reuse (guna semula), Recycle (kitar semula), Repair (baik pulih) dan Refuse (tolak)."
            ]
          }
        ]
      },
      {
        "id": "u10",
        "name": "Gerhana",
        "textbookUnit": "Unit 10: Gerhana",
        "skills": [
          {
            "id": "u10_s1",
            "name": "Kejadian Gerhana Bulan dan Gerhana Matahari",
            "tests": "Menguji pengetahuan murid tentang susunan kedudukan Matahari, Bumi dan Bulan serta fasa Bulan bagi kejadian gerhana Bulan dan gerhana Matahari, termasuk sebab gerhana tidak berlaku pada setiap bulan.",
            "commonMistakes": [
              "Tertukar objek di tengah antara gerhana Bulan (Bumi di tengah: Matahari–Bumi–Bulan) dengan gerhana Matahari (Bulan di tengah: Matahari–Bulan–Bumi).",
              "Tertukar fasa Bulan bagi kedua-dua fenomena (gerhana Bulan hanya semasa Bulan purnama; gerhana Matahari hanya semasa Bulan baharu).",
              "Menyangka gerhana berlaku setiap bulan pada fasa purnama atau baharu tanpa menyedari kecondongan orbit Bulan kira-kira 5° terhadap orbit Bumi."
            ]
          },
          {
            "id": "u10_s2",
            "name": "Hubung Kait Gerhana dengan Sifat Cahaya, Keselamatan dan Keadaan di Bumi",
            "tests": "Menguji kefahaman murid mengaitkan sifat cahaya (bergerak lurus, tidak menembusi objek legap) dengan zon bayang-bayang umbra dan penumbra, cara pemerhatian selamat, serta perubahan kecerahan, suhu, reaksi haiwan dan air pasang semasa gerhana.",
            "commonMistakes": [
              "Menyangka hanya gerhana Matahari penuh sahaja kelihatan di kawasan lintasan umbra, walhal gerhana Matahari penuh dan separa dapat dilihat di kawasan umbra manakala kawasan penumbra hanya melihat gerhana separa.",
              "Menganggap cahaya gerhana Bulan berbahaya dilihat dengan mata kasar atau sebaliknya menyangka gerhana Matahari selamat dilihat terus tanpa penuras atau kamera lubang jarum.",
              "Terlupa kesan gerhana Bulan terhadap paras air laut pasang yang menjadi lebih tinggi daripada kebiasaan."
            ]
          }
        ]
      },
      {
        "id": "u11",
        "name": "Galaksi",
        "textbookUnit": "Unit 11: Galaksi",
        "skills": [
          {
            "id": "u11_s1",
            "name": "Maksud, Jenis Galaksi dan Ciri Galaksi Bima Sakti",
            "tests": "Menguji pengetahuan murid tentang komposisi galaksi, tiga jenis bentuk galaksi (elips, berpilin, tidak sekata), bentuk khusus Galaksi Bima Sakti (pilin berpalang dengan dua lengan utama) serta rupa pandangan sisinya.",
            "commonMistakes": [
              "Menyangka galaksi hanya terdiri daripada bintang semata-mata tanpa merangkumi gas, debu dan jirim lain.",
              "Mengelaskan bentuk Galaksi Bima Sakti sebagai galaksi elips atau tidak sekata dan bukannya galaksi pilin berpalang.",
              "Tersilap mengenal pasti nama galaksi pilin besar yang paling hampir dengan kita (Galaksi Andromeda) dengan Bima Sakti."
            ]
          },
          {
            "id": "u11_s2",
            "name": "Kedudukan dan Perbandingan Saiz Sistem Suria dalam Galaksi Bima Sakti",
            "tests": "Menguji kefahaman murid tentang kedudukan Sistem Suria di pinggir satu daripada lengan berpilin Galaksi Bima Sakti, sebab Bima Sakti kelihatan seperti jaluran samar dari Bumi, serta perbandingan saiz antara Sistem Suria dengan Bima Sakti.",
            "commonMistakes": [
              "Menyangka Sistem Suria terletak tepat di pusat palang Galaksi Bima Sakti dan bukannya di pinggir salah satu lengan berpilinnya.",
              "Menganggap saiz Sistem Suria hampir sama besar atau lebih besar daripada Galaksi Bima Sakti.",
              "Melupakan analogi perbandingan saiz bahawa jika Sistem Suria sebesar diameter pensel, Bima Sakti meliputi seluruh padang sekolah."
            ]
          }
        ]
      },
      {
        "id": "u12",
        "name": "Kestabilan dan Kekuatan",
        "textbookUnit": "Unit 12: Kestabilan dan Kekuatan",
        "skills": [
          {
            "id": "u12_s1",
            "name": "Kestabilan Objek dan Binaan serta Faktornya",
            "tests": "Menguji kefahaman murid membezakan maksud kestabilan daripada kekuatan, mengenal pasti dua faktor kestabilan (ketinggian dan luas tapak) serta mengaplikasikan konsep pusat graviti dalam situasi harian dan eksperimen.",
            "commonMistakes": [
              "Menganggap binaan yang lebih tinggi adalah lebih stabil, sedangkan kestabilan berkurang apabila ketinggian dan pusat graviti meningkat.",
              "Mencampuradukkan faktor kestabilan (ketinggian, luas tapak) dengan faktor kekuatan struktur (jenis bahan, bentuk struktur).",
              "Mengira atau membandingkan panjang sisi sahaja tanpa mengira keluasan tapak keseluruhan apabila membandingkan kestabilan dua model."
            ]
          },
          {
            "id": "u12_s2",
            "name": "Kekuatan Objek dan Binaan, Faktornya dan Kepentingan Binaan Kuat dan Stabil",
            "tests": "Menguji pengetahuan murid tentang maksud kekuatan, sifat bahan binaan (konkrit, besi, kayu, plastik), kekuatan bentuk struktur (kekuda, lengkungan, kubah, silinder) serta kepentingan binaan yang kuat dan stabil bagi kehidupan lestari.",
            "commonMistakes": [
              "Menyangka struktur kekuda segi tiga atau bentuk lengkungan dan silinder lebih lemah daripada bentuk segiempat sama yang rata.",
              "Menganggap konkrit boleh berkarat atau mereput seperti besi dan kayu.",
              "Keliru antara kekuatan (keupayaan menampung daya/beban tanpa rosak atau berubah bentuk) dengan kestabilan (keupayaan kekal atau kembali ke kedudukan asal tanpa tumbang)."
            ]
          }
        ]
      },
      {
        "id": "u13",
        "name": "Teknologi",
        "textbookUnit": "Unit 13: Teknologi",
        "skills": [
          {
            "id": "u13_s1",
            "name": "Maksud Teknologi, Alat Mengatasi Had Keupayaan dan Perkembangan Pelbagai Bidang",
            "tests": "Menguji kefahaman murid tentang maksud teknologi sebagai aplikasi pengetahuan sains mengatasi had keupayaan manusia, padanan alat dengan had deria/anggota, serta sumbangan teknologi dalam bidang pertanian, perubatan, pengangkutan, komunikasi dan pembinaan.",
            "commonMistakes": [
              "Tertukar fungsi alat penglihatan antara mikroskop (objek sangat seni seperti mikroorganisma) dengan teleskop (objek sangat jauh di angkasa).",
              "Menyangka stetoskop dicipta untuk melihat organ dalaman dan bukannya mendengar bunyi perlahan seperti degupan jantung.",
              "Keliru mengelaskan sumbangan teknologi moden seperti mesin MRI atau kaedah pembinaan pasang siap ke dalam bidang yang salah."
            ]
          },
          {
            "id": "u13_s2",
            "name": "Kebaikan dan Keburukan Teknologi",
            "tests": "Menguji keupayaan murid menilai kesan positif dan kesan negatif penggunaan teknologi moden dalam pertanian, perubatan, pembinaan, komunikasi dan pengangkutan terhadap manusia serta alam sekitar.",
            "commonMistakes": [
              "Menganggap perkembangan teknologi hanya membawa kebaikan semata-mata tanpa menyedari isu e-waste bateri dron, pencerobohan data peribadi atau pencemaran udara.",
              "Menyangka penebangan hutan untuk pembangunan infrastruktur dan kawasan berbukit tidak menjejaskan flora dan fauna.",
              "Terlepas pandang risiko penyalahgunaan ubat-ubatan moden yang boleh mengakibatkan ketagihan."
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
