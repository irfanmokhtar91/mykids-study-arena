/**
 * Tingkatan 2 Geografi knowledge map (KSSM, Bab 1-10).
 * Original-wording skill summaries and common pupil misconceptions.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Curriculum = App.Curriculum || {};
  App.Curriculum.t2 = App.Curriculum.t2 || {};

  App.Curriculum.t2.geografi = {
    "units": [
      {
        "id": "b1",
        "name": "Skala dan Jarak",
        "textbookUnit": "Bab 1: Skala dan Jarak",
        "skills": [
          {
            "id": "b1_s1",
            "name": "Jenis Skala dan Penukaran Unit",
            "tests": "Menguji kemahiran murid mengenal pasti skala lurus, skala penyata dan skala wakilan, serta menukar unit sentimeter kepada kilometer dengan betul menggunakan hubungan 1 km = 100 000 cm.",
            "commonMistakes": [
              "Tersilap menukar unit dengan menganggap 1 km = 1 000 cm, sedangkan 1 km = 100 000 cm.",
              "Mengelirukan skala penyata (dalam perkataan, contohnya '1 cm mewakili 1 km') dengan skala wakilan (dalam bentuk nisbah seperti 1:100 000).",
              "Menjumlahkan panjang skala lurus dengan jarak pada peta tanpa menukar unit terlebih dahulu."
            ]
          },
          {
            "id": "b1_s2",
            "name": "Mengukur Jarak Lurus dan Jarak Melengkung pada Peta",
            "tests": "Menguji kebolehan murid mengukur jarak lurus antara dua titik menggunakan pembaris atau jalur kertas, dan mengukur jarak melengkung sepanjang sungai atau jalan menggunakan benang, kemudian menukarkannya kepada jarak sebenar.",
            "commonMistakes": [
              "Mengukur jarak melengkung dengan pembaris lurus sehingga jarak sebenar menjadi lebih pendek daripada sepatutnya.",
              "Lupa menukar jarak pada peta kepada jarak sebenar selepas pengukuran.",
              "Mengukur dari tepi simbol bukan dari pusat simbol pada peta."
            ]
          },
          {
            "id": "b1_s3",
            "name": "Pengiraan Jarak Sebenar dan Penyelesaian Masalah Skala",
            "tests": "Menguji kemahiran murid mengira jarak sebenar menggunakan rumus jarak sebenar = jarak pada peta x penyebut skala, serta menyelesaikan masalah yang melibatkan masa perjalanan dan kelajuan.",
            "commonMistakes": [
              "Mendarab jarak pada peta dengan pengangka skala dan bukannya penyebut skala.",
              "Mengabaikan penukaran unit selepas pendaraban sehingga jawapan dalam sentimeter tetapi ditulis sebagai kilometer.",
              "Menggunakan kelajuan purata yang salah dalam pengiraan masa perjalanan tanpa menyemak unit (km/j berbanding m/s)."
            ]
          }
        ]
      },
      {
        "id": "b2",
        "name": "Peta Topografi",
        "textbookUnit": "Bab 2: Peta Topografi",
        "skills": [
          {
            "id": "b2_s1",
            "name": "Ciri dan Kegunaan Peta Topografi",
            "tests": "Menguji kefahaman murid tentang ciri peta topografi seperti garisan grid, petunjuk, simbol dan singkatan, serta kegunaannya untuk menunjukkan bentuk muka bumi dan ciri budaya sesuatu kawasan.",
            "commonMistakes": [
              "Menyangka peta topografi hanya menunjukkan jalan dan bangunan tanpa mengambil kira bentuk muka bumi seperti bukit dan lembah.",
              "Mengelirukan singkatan peta seperti 'Bg' (bangunan) dengan 'Bkt' (bukit) dalam soalan tafsiran simbol.",
              "Menganggap semua peta topografi mempunyai skala yang sama tanpa menyemak petunjuk peta."
            ]
          },
          {
            "id": "b2_s2",
            "name": "Mentafsir Bentuk Muka Bumi melalui Garisan Kontur dan Keratan Rentas",
            "tests": "Menguji keupayaan murid mentafsir bentuk muka bumi menggunakan garisan kontur, mengenal pasti cerun curam dan landai, serta melukis dan mentafsir keratan rentas.",
            "commonMistakes": [
              "Menyangka garisan kontur yang rapat menunjukkan cerun landai, sedangkan garisan kontur rapat bermaksud cerun curam.",
              "Menganggap nilai kontur bertambah ke bawah tanpa menyemak label ketinggian pada peta.",
              "Melukis keratan rentas tanpa menandakan titik yang betul pada paksi mengufuk mengikut jarak sebenar."
            ]
          },
          {
            "id": "b2_s3",
            "name": "Mentafsir Peta Topografi dan Ciri Budaya",
            "tests": "Menguji kebolehan murid mentafsir peta topografi dengan mengenal pasti pola petempatan, jaringan pengangkutan, guna tanah dan ciri budaya lain serta mengaitkannya dengan bentuk muka bumi.",
            "commonMistakes": [
              "Menyangka petempatan sentiasa tertumpu di kawasan tanah tinggi, sedangkan kebanyakan petempatan tertumpu di tanah pamah berhampiran sungai dan jalan.",
              "Mengabaikan arah aliran sungai yang dapat ditentukan melalui pertemuan anak sungai.",
              "Mentafsir pola petempatan berselerak sebagai berkelompok tanpa menyemak jarak antara simbol bangunan."
            ]
          }
        ]
      },
      {
        "id": "b3",
        "name": "Pengaruh Pergerakan Bumi terhadap Cuaca dan Iklim",
        "textbookUnit": "Bab 3: Pengaruh Pergerakan Bumi terhadap Cuaca dan Iklim",
        "skills": [
          {
            "id": "b3_s1",
            "name": "Putaran Bumi dan Kesan terhadap Cuaca",
            "tests": "Menguji kefahaman murid tentang putaran Bumi pada paksinya dari barat ke timur selama 24 jam serta kesannya seperti kejadian siang dan malam, perbezaan waktu dan pembiasan angin.",
            "commonMistakes": [
              "Menyangka Bumi berputar dari timur ke barat, sedangkan arah putarannya dari barat ke timur.",
              "Menganggap putaran Bumi menyebabkan perubahan musim, sedangkan perubahan musim disebabkan oleh peredaran Bumi mengelilingi Matahari.",
              "Mengelirukan putaran (24 jam) dengan peredaran (365 1/4 hari)."
            ]
          },
          {
            "id": "b3_s2",
            "name": "Peredaran Bumi dan Kejadian Musim",
            "tests": "Menguji keupayaan murid menerangkan peredaran Bumi mengelilingi Matahari dan kesannya seperti kejadian empat musim di kawasan latitud tinggi serta perubahan kedudukan Matahari.",
            "commonMistakes": [
              "Menyangka Malaysia mengalami empat musim, sedangkan Malaysia mengalami iklim khatulistiwa dengan musim hujan dan panas sepanjang tahun.",
              "Menganggap peredaran Bumi menyebabkan siang dan malam, sedangkan ia disebabkan putaran Bumi.",
              "Mengelirukan kecondongan paksi Bumi (23.5 darjah) dengan sudut lintang sesuatu tempat."
            ]
          },
          {
            "id": "b3_s3",
            "name": "Kejadian Gerhana dan Kaitannya dengan Pergerakan Bumi",
            "tests": "Menguji kebolehan murid menerangkan kejadian gerhana Matahari dan gerhana Bulan berdasarkan kedudukan relatif Matahari, Bumi dan Bulan serta kesan bayang-bayang.",
            "commonMistakes": [
              "Mengelirukan gerhana Matahari (Bulan di antara Matahari dan Bumi) dengan gerhana Bulan (Bumi di antara Matahari dan Bulan).",
              "Menyangka gerhana berlaku setiap bulan, sedangkan ia hanya berlaku apabila ketiga-tiga jasad berada dalam satu garisan lurus.",
              "Menganggap gerhana menyebabkan kegelapan mutlak di seluruh Bumi, sedangkan ia hanya melibatkan kawasan bayang-bayang tertentu."
            ]
          }
        ]
      },
      {
        "id": "b4",
        "name": "Cuaca dan Iklim Malaysia",
        "textbookUnit": "Bab 4: Cuaca dan Iklim di Malaysia",
        "skills": [
          {
            "id": "b4_s1",
            "name": "Unsur Cuaca dan Iklim serta Alat Pengukur",
            "tests": "Menguji kefahaman murid tentang unsur cuaca seperti suhu, hujan, kelembapan udara, tekanan udara dan angin, berserta alat pengukur seperti termometer, tolok hujan, higrometer, barometer dan anemometer.",
            "commonMistakes": [
              "Mengelirukan alat pengukur, contohnya menggunakan tolok hujan untuk mengukur kelembapan udara.",
              "Menganggap cuaca dan iklim ialah perkara yang sama, sedangkan cuaca ialah keadaan atmosfera dalam jangka pendek manakala iklim ialah purata jangka panjang.",
              "Menyangka angin diukur menggunakan termometer tanpa mengenal pasti anemometer."
            ]
          },
          {
            "id": "b4_s2",
            "name": "Jenis Hujan dan Faktor Mempengaruhi Iklim Malaysia",
            "tests": "Menguji keupayaan murid menerangkan jenis hujan seperti hujan perolakan, hujan bukit dan hujan frontal, serta faktor yang mempengaruhi iklim Malaysia seperti kedudukan berhampiran khatulistiwa, pengaruh laut dan angin monsun.",
            "commonMistakes": [
              "Mengelirukan hujan perolakan (akibat pemanasan permukaan) dengan hujan bukit (akibat udara dipaksa naik di lereng gunung).",
              "Menyangka Malaysia mengalami iklim sederhana kerana mempunyai hutan hujan tropika.",
              "Mengabaikan pengaruh angin monsun dalam menentukan musim hujan di Malaysia."
            ]
          },
          {
            "id": "b4_s3",
            "name": "Monsun dan Musim di Malaysia",
            "tests": "Menguji kebolehan murid mengenal pasti Monsun Timur Laut (November-Mac) dan Monsun Barat Daya (Mei-September), kawasan yang menerima hujan lebat semasa setiap monsun, serta kesannya terhadap kegiatan manusia.",
            "commonMistakes": [
              "Mengelirukan bulan Monsun Timur Laut dengan Monsun Barat Daya.",
              "Menyangka semua kawasan di Malaysia menerima hujan lebat serentak semasa Monsun Timur Laut, sedangkan Pantai Timur Semenanjung dan Sarawak lebih terjejas.",
              "Menganggap Monsun Barat Daya membawa hujan lebat, sedangkan ia pada umumnya membawa cuaca kering di kebanyakan kawasan."
            ]
          }
        ]
      },
      {
        "id": "b5",
        "name": "Pengangkutan di Malaysia",
        "textbookUnit": "Bab 5: Pengangkutan di Malaysia",
        "skills": [
          {
            "id": "b5_s1",
            "name": "Jenis dan Perkembangan Pengangkutan Darat",
            "tests": "Menguji kefahaman murid tentang jaringan pengangkutan darat di Malaysia yang merangkumi jalan raya, lebuh raya, landasan kereta api dan pengangkutan awam, serta faktor yang mempengaruhi perkembangannya.",
            "commonMistakes": [
              "Menyangka pembinaan lebuh raya hanya bertujuan memendekkan masa perjalanan tanpa mengambil kira kesan terhadap pertumbuhan ekonomi dan petempatan.",
              "Menganggap semua kawasan di Malaysia mempunyai jaringan pengangkutan darat yang sama maju.",
              "Mengelirukan pengangkutan awam dengan pengangkutan persendirian dalam soalan pengelasan."
            ]
          },
          {
            "id": "b5_s2",
            "name": "Pengangkutan Udara dan Air",
            "tests": "Menguji keupayaan murid menerangkan peranan pengangkutan udara dan air di Malaysia, lokasi lapangan terbang utama dan pelabuhan, serta kepentingannya kepada perdagangan antarabangsa dan pelancongan.",
            "commonMistakes": [
              "Menyangka pelabuhan hanya berfungsi untuk mengangkut penumpang tanpa mengambil kira peranan utama dalam perdagangan kargo.",
              "Mengelirukan lapangan terbang antarabangsa dengan lapangan terbang domestik.",
              "Mengabaikan kepentingan Selat Melaka sebagai laluan perkapalan antarabangsa."
            ]
          },
          {
            "id": "b5_s3",
            "name": "Kesan Pengangkutan terhadap Alam Sekitar dan Ekonomi",
            "tests": "Menguji kebolehan murid menilai kesan positif dan negatif perkembangan pengangkutan terhadap ekonomi, sosial dan alam sekitar seperti pencemaran udara, kemalangan dan pertumbuhan bandar.",
            "commonMistakes": [
              "Hanya menyenaraikan kesan positif tanpa menyatakan kesan negatif seperti pencemaran dan kesesakan lalu lintas.",
              "Menganggap pencemaran udara hanya berpunca daripada kilang tanpa mengambil kira kenderaan bermotor.",
              "Mengelirukan kesan sosial (kemalangan, kesesakan) dengan kesan alam sekitar (pencemaran)."
            ]
          }
        ]
      },
      {
        "id": "b6",
        "name": "Telekomunikasi di Malaysia",
        "textbookUnit": "Bab 6: Telekomunikasi di Malaysia",
        "skills": [
          {
            "id": "b6_s1",
            "name": "Jenis dan Peranan Telekomunikasi",
            "tests": "Menguji kefahaman murid tentang jenis telekomunikasi seperti telefon, internet, radio dan televisyen serta peranannya dalam komunikasi, pendidikan, perniagaan dan penyebaran maklumat.",
            "commonMistakes": [
              "Menyangka telekomunikasi hanya merujuk kepada telefon mudah alih tanpa mengambil kira internet, radio, televisyen dan satelit.",
              "Menganggap telekomunikasi hanya memberi kesan positif tanpa menyatakan risiko seperti penyebaran berita palsu.",
              "Mengelirukan telekomunikasi dengan pengangkutan dalam soalan yang menyebut pemindahan maklumat."
            ]
          },
          {
            "id": "b6_s2",
            "name": "Infrastruktur Telekomunikasi di Malaysia",
            "tests": "Menguji keupayaan murid mengenal pasti infrastruktur telekomunikasi seperti menara pemancar, kabel gentian optik, satelit Malaysia dan pusat data, serta taburan infrastruktur tersebut antara bandar dan luar bandar.",
            "commonMistakes": [
              "Menganggap semua kawasan di Malaysia mempunyai liputan internet berkelajuan tinggi yang sama.",
              "Mengelirukan kabel gentian optik dengan kabel elektrik dalam soalan pengelasan infrastruktur.",
              "Menyangka satelit hanya digunakan untuk tujuan ketenteraan tanpa mengambil kira telekomunikasi awam."
            ]
          },
          {
            "id": "b6_s3",
            "name": "Kesan Telekomunikasi dan Langkah Menangani Risiko",
            "tests": "Menguji kebolehan murid menilai kesan positif dan negatif telekomunikasi serta langkah menangani risiko seperti jenayah siber, ketagihan gajet dan penyebaran maklumat palsu.",
            "commonMistakes": [
              "Menyangka keselamatan dalam talian hanya bergantung pada kata laluan tanpa mengambil kira pengesahan dua faktor dan kesedaran pengguna.",
              "Menganggap semua maklumat dalam talian benar tanpa menyemak sumber.",
              "Mengelirukan langkah pencegahan individu dengan tanggungjawab kerajaan dalam soalan yang meminta peranan pelbagai pihak."
            ]
          }
        ]
      },
      {
        "id": "b7",
        "name": "Kepelbagaian Iklim dan Pengaruhnya terhadap Kegiatan Manusia di Asia",
        "textbookUnit": "Bab 7: Kepelbagaian Iklim dan Pengaruhnya terhadap Kegiatan Manusia di Asia",
        "skills": [
          {
            "id": "b7_s1",
            "name": "Jenis Iklim di Asia",
            "tests": "Menguji kefahaman murid tentang jenis iklim utama di Asia seperti iklim khatulistiwa, monsun tropika, gurun, mediterranean, sederhana sejuk dan tundra, serta ciri suhu dan hujan setiap jenis.",
            "commonMistakes": [
              "Menganggap seluruh Asia beriklim khatulistiwa kerana terletak berhampiran garisan khatulistiwa.",
              "Mengelirukan iklim gurun (sangat kering) dengan iklim mediterranean (musim panas kering, musim sejuk lembap).",
              "Menyangka iklim tundra mempunyai pokok besar, sedangkan tumbuhannya terhad kepada lumut dan spesies kecil."
            ]
          },
          {
            "id": "b7_s2",
            "name": "Pengaruh Iklim terhadap Pertanian dan Petempatan",
            "tests": "Menguji keupayaan murid mengaitkan jenis iklim dengan kegiatan pertanian seperti penanaman padi, gandum dan teh, serta pola petempatan dan cara hidup penduduk di Asia.",
            "commonMistakes": [
              "Menyangka padi boleh ditanam di semua jenis iklim tanpa mengambil kira keperluan air yang banyak.",
              "Menganggap petempatan di kawasan gurun sama padat dengan kawasan monsun.",
              "Mengelirukan tanaman yang sesuai untuk iklim sederhana (gandum, epal) dengan tanaman iklim khatulistiwa (getah, kelapa sawit)."
            ]
          },
          {
            "id": "b7_s3",
            "name": "Bencana Alam Berkaitan Iklim di Asia",
            "tests": "Menguji kebolehan murid mengenal pasti bencana alam berkaitan iklim seperti taufan, banjir, kemarau dan gelombang haba di Asia, punca kejadian dan langkah mengurangkan kesannya.",
            "commonMistakes": [
              "Mengelirukan taufan (ribut tropika di lautan) dengan puting beliung (pusaran angin di darat).",
              "Menyangka kemarau hanya berlaku di kawasan gurun tanpa mengambil kira kemarau di kawasan monsun akibat monsun lewat.",
              "Menganggap semua bencana iklim boleh dielakkan sepenuhnya tanpa langkah kesiapsiagaan."
            ]
          }
        ]
      },
      {
        "id": "b8",
        "name": "Pengangkutan di Asia",
        "textbookUnit": "Bab 8: Pengangkutan di Asia",
        "skills": [
          {
            "id": "b8_s1",
            "name": "Jaringan Pengangkutan Utama di Asia",
            "tests": "Menguji kefahaman murid tentang jaringan pengangkutan darat, air dan udara utama di Asia seperti Laluan Sutera, Terusan Suez, Selat Melaka dan lapangan terbang utama, serta peranannya dalam perdagangan.",
            "commonMistakes": [
              "Menyangka Laluan Sutera hanya laluan darat tanpa mengambil kira cabang lautnya.",
              "Mengelirukan Terusan Suez (menghubungkan Laut Mediterranean dan Laut Merah) dengan Terusan Panama.",
              "Menganggap Selat Melaka terletak di antara India dan Sri Lanka, sedangkan ia terletak antara Semenanjung Malaysia dan Sumatera."
            ]
          },
          {
            "id": "b8_s2",
            "name": "Faktor Perkembangan Pengangkutan di Asia",
            "tests": "Menguji keupayaan murid menerangkan faktor yang mempengaruhi perkembangan pengangkutan di Asia seperti bentuk muka bumi, iklim, kemajuan teknologi, pertumbuhan ekonomi dan dasar kerajaan.",
            "commonMistakes": [
              "Menganggap bentuk muka bumi tidak mempengaruhi pembinaan jalan raya dan landasan kereta api.",
              "Menyangka semua negara Asia mempunyai tahap kemajuan pengangkutan yang sama.",
              "Mengabaikan peranan dasar kerajaan dan pelaburan dalam pembangunan infrastruktur pengangkutan."
            ]
          },
          {
            "id": "b8_s3",
            "name": "Kesan Pengangkutan di Asia terhadap Ekonomi dan Alam Sekitar",
            "tests": "Menguji kebolehan murid menilai kesan positif pengangkutan terhadap perdagangan dan pelancongan di Asia serta kesan negatif seperti pencemaran dan tekanan terhadap alam sekitar.",
            "commonMistakes": [
              "Hanya menyatakan kesan ekonomi tanpa menyatakan kesan alam sekitar.",
              "Menganggap pengangkutan moden sentiasa mengurangkan pencemaran berbanding pengangkutan tradisional.",
              "Mengelirukan kesan tempatan (kesesakan bandar) dengan kesan global (pemanasan global) dalam soalan penilaian."
            ]
          }
        ]
      },
      {
        "id": "b9",
        "name": "Pemanasan Global",
        "textbookUnit": "Bab 9: Pemanasan Global",
        "skills": [
          {
            "id": "b9_s1",
            "name": "Konsep Kesan Rumah Hijau dan Pemanasan Global",
            "tests": "Menguji kefahaman murid tentang kesan rumah hijau semula jadi, gas rumah hijau seperti karbon dioksida dan metana, serta perbezaan antara kesan rumah hijau dan pemanasan global.",
            "commonMistakes": [
              "Menyangka kesan rumah hijau sepenuhnya buruk, sedangkan kesan rumah hijau semula jadi diperlukan untuk mengekalkan suhu Bumi.",
              "Menganggap pemanasan global dan penipisan ozon ialah fenomena yang sama.",
              "Mengelirukan karbon dioksida dengan karbon monoksida sebagai gas rumah hijau utama."
            ]
          },
          {
            "id": "b9_s2",
            "name": "Punca dan Kesan Pemanasan Global",
            "tests": "Menguji keupayaan murid menerangkan punca pemanasan global seperti pembakaran bahan api fosil, penyahhutanan dan aktiviti perindustrian, serta kesannya seperti kenaikan aras laut dan perubahan cuaca.",
            "commonMistakes": [
              "Menganggap penyahhutanan tidak berkaitan dengan pemanasan global, sedangkan ia mengurangkan penyerapan karbon dioksida.",
              "Menyangka kesan pemanasan global hanya melibatkan kenaikan suhu tanpa mengambil kira kenaikan aras laut dan kepupusan spesies.",
              "Mengelirukan punca semula jadi (letusan gunung berapi) dengan punca utama antropogenik (aktiviti manusia)."
            ]
          },
          {
            "id": "b9_s3",
            "name": "Langkah Mengurangkan Pemanasan Global",
            "tests": "Menguji kebolehan murid mencadangkan langkah mengurangkan pemanasan global seperti penggunaan tenaga boleh baharu, pengangkutan awam, penanaman semula hutan dan amalan 3R.",
            "commonMistakes": [
              "Menyenaraikan langkah yang tidak berkaitan seperti menambah pembakaran arang batu.",
              "Menganggap satu langkah sahaja sudah mencukupi tanpa mengambil kira keperluan tindakan menyeluruh.",
              "Mengelirukan langkah mitigasi (mengurangkan punca) dengan langkah adaptasi (menyesuaikan diri dengan kesan)."
            ]
          }
        ]
      },
      {
        "id": "b10",
        "name": "Teknologi Hijau",
        "textbookUnit": "Bab 10: Teknologi Hijau",
        "skills": [
          {
            "id": "b10_s1",
            "name": "Konsep dan Ciri Teknologi Hijau",
            "tests": "Menguji kefahaman murid tentang maksud teknologi hijau serta cirinya seperti mengurangkan kesan negatif terhadap alam sekitar, menggalakkan kitar semula dan menggunakan sumber tenaga boleh baharu.",
            "commonMistakes": [
              "Menyangka semua teknologi moden ialah teknologi hijau tanpa menyemak kesan terhadap alam sekitar.",
              "Menganggap teknologi hijau hanya berkaitan tenaga suria tanpa mengambil kira pengurusan sisa, bangunan hijau dan pengangkutan hijau.",
              "Mengelirukan teknologi hijau dengan teknologi tinggi yang mahal."
            ]
          },
          {
            "id": "b10_s2",
            "name": "Tenaga Boleh Baharu di Malaysia",
            "tests": "Menguji keupayaan murid mengenal pasti sumber tenaga boleh baharu di Malaysia seperti tenaga suria, hidro, biojisim dan angin, serta kelebihan dan kekangan setiap sumber.",
            "commonMistakes": [
              "Menyangka bahan api fosil ialah tenaga boleh baharu, sedangkan ia sumber tenaga tidak boleh baharu.",
              "Menganggap tenaga suria sesuai sepenuhnya di semua kawasan tanpa mengambil kira faktor cuaca dan kos pemasangan.",
              "Mengelirukan tenaga hidro (empangan) dengan tenaga geoterma (haba bawah tanah)."
            ]
          },
          {
            "id": "b10_s3",
            "name": "Amalan Teknologi Hijau dan Kelestarian Alam",
            "tests": "Menguji kebolehan murid menghubungkan amalan teknologi hijau seperti 3R, bangunan hijau, pengangkutan elektrik dan pertanian lestari dengan usaha kelestarian alam sekitar.",
            "commonMistakes": [
              "Menganggap amalan 3R hanya bermaksud mengitar semula tanpa mengambil kira reduce (kurangkan) dan reuse (guna semula).",
              "Menyangka bangunan hijau hanya merujuk kepada bangunan yang dicat hijau.",
              "Mengelirukan kelestarian alam dengan penggunaan teknologi semata-mata tanpa perubahan tingkah laku."
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);