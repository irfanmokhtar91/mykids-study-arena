/**
 * Tingkatan 2 Sains knowledge map (KSSM, Bab 1-13).
 * Original-wording skill summaries and common student misconceptions.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Curriculum = App.Curriculum || {};
  App.Curriculum.t2 = App.Curriculum.t2 || {};

  App.Curriculum.t2.sains = {
    "units": [
      {
        "id": "b1",
        "name": "Biodiversiti",
        "textbookUnit": "Bab 1: Biodiversiti",
        "skills": [
          {
            "id": "b1_s1",
            "name": "Kepelbagaian Organisma dan Kepentingan Biodiversiti",
            "tests": "Menguji kefahaman murid mengenai maksud biodiversiti yang merangkumi kepelbagaian organisma hidup dan habitatnya, kepentingan biodiversiti sebagai sumber makanan, perubatan, bahan mentah dan keseimbangan alam, serta langkah pemeliharaan dan pemuliharaan seperti pewartaan hutan simpan dan spesies endemik.",
            "commonMistakes": [
              "Menyangka biodiversiti hanya merujuk kepada kepelbagaian haiwan di hutan tanpa mengambil kira tumbuhan, mikroorganisma dan kepelbagaian ekosistem.",
              "Mencampuradukkan istilah pemeliharaan (mengekalkan haiwan dan tumbuhan di habitat asal tanpa diganggu) dengan pemuliharaan (membaik pulih sumber atau memindahkan spesies terancam ke pusat pembiakan).",
              "Menganggap spesies endemik bermaksud spesies yang telah pupus, sedangkan ia merujuk kepada spesies yang hanya hidup secara semula jadi di sesuatu kawasan geografi tertentu."
            ]
          },
          {
            "id": "b1_s2",
            "name": "Pengelasan Haiwan (Vertebrata dan Invertebrata)",
            "tests": "Menguji kebolehan murid mengelaskan haiwan kepada vertebrata (ikan, amfibia, reptilia, burung, mamalia) dan invertebrata (berkaki dan tanpa kaki), mengenal pasti ciri pembiakan, cara bernafas, penutup badan serta sifat poikiloterma atau homoioterma.",
            "commonMistakes": [
              "Mengelaskan kelawar sebagai burung kerana boleh terbang dan ikan paus atau ikan lumba-lumba sebagai ikan kerana hidup di dalam air, sedangkan kedua-duanya adalah mamalia.",
              "Tertukar ciri antara amfibia (kulit lembap, persenyawaan luar, telur tiada cangkerang) dengan reptilia (kulit bersisik kering, bernafas melalui peparu sahaja, persenyawaan dalam).",
              "Menyangka semua haiwan invertebrata mempunyai badan lembut tanpa kaki, sedangkan serangga, labah-labah dan ketam ialah invertebrata berkaki yang mempunyai rangka luar."
            ]
          },
          {
            "id": "b1_s3",
            "name": "Pengelasan Tumbuhan (Berbunga Monokotiledon/Dikotiledon dan Tidak Berbunga) serta Kunci Dikotomi",
            "tests": "Menguji kemahiran murid membezakan tumbuhan tidak berbunga (lumut, paku-pakis, konifer) daripada tumbuhan berbunga monokotiledon dan dikotiledon berdasarkan kotiledon, akar, urat daun dan batang, serta membina atau mentafsir kunci dikotomi.",
            "commonMistakes": [
              "Menganggap konifer seperti pokok pain termasuk dalam tumbuhan berbunga kerana menghasilkan kon, sedangkan ia tumbuhan tidak berbunga yang tidak menghasilkan bunga sebenar.",
              "Tertukar ciri monokotiledon (akar serabut, urat daun selari, batang lembut) dengan dikotiledon (akar tunjang, urat daun jejala, batang berkayu).",
              "Memilih ciri yang tidak berpasangan dan bertentangan secara jelas (seperti menggunakan tiga pilihan serentak atau ciri sementara) semasa membina kunci dikotomi."
            ]
          }
        ]
      },
      {
        "id": "b2",
        "name": "Ekosistem",
        "textbookUnit": "Bab 2: Ekosistem",
        "skills": [
          {
            "id": "b2_s1",
            "name": "Aliran Tenaga dalam Rantai Makanan dan Siratan Makanan",
            "tests": "Menguji keupayaan murid mengenal pasti pengeluar, pengguna primer, sekunder, tertier dan pengurai dalam rantai makanan serta siratan makanan, arah anak panah yang menunjukkan aliran tenaga, dan meramal kesan perubahan populasi terhadap organisma lain.",
            "commonMistakes": [
              "Melukis anak panah dari pemangsa ke mangsa dengan anggapan anak panah bermaksud 'memakan', sedangkan anak panah menunjukkan arah pemindahan tenaga iaitu 'dimakan oleh'.",
              "Menyangka 100% tenaga daripada pengeluar dipindahkan kepada pengguna peringkat seterusnya, sedangkan sebahagian besar tenaga hilang sebagai haba semasa respirasi, pergerakan dan perkumuhan.",
              "Mengabaikan peranan pengurai (bakteria dan kulat) yang menguraikan organisma mati untuk mengembalikan nutrien ke dalam tanah."
            ]
          },
          {
            "id": "b2_s2",
            "name": "Kitar Nutrien (Kitar Air, Kitar Karbon dan Kitar Oksigen) serta Saling Bersandaran",
            "tests": "Menguji kefahaman murid terhadap proses dalam kitar air (penyejatan, transpirasi, kondensasi, kerpasan), kitar karbon dan kitar oksigen (fotosintesis, respirasi, pembakaran, pereputan), serta saling bersandaran antara komponen hidup dengan bukan hidup.",
            "commonMistakes": [
              "Menyangka tumbuhan hanya menjalankan fotosintesis sepanjang masa dan tidak menjalankan respirasi, sedangkan tumbuhan turut berespirasi selama 24 jam dengan membebaskan karbon dioksida.",
              "Terlupa peranan transpirasi tumbuhan dalam membekalkan wap air ke atmosfera bagi melengkapkan kitar air semula jadi.",
              "Keliru antara istilah populasi (sekumpulan organisma sama spesies), komuniti (pelbagai populasi di satu habitat) dan ekosistem (interaksi komuniti dengan komponen bukan hidup)."
            ]
          },
          {
            "id": "b2_s3",
            "name": "Interaksi antara Organisma (Simbiosis, Mangsa-Pemangsa, Persaingan, Kawalan Biologi) dan Faktor Ekosistem",
            "tests": "Menguji kebolehan murid membezakan simbiosis (mutualisme, komensalisme, parasitisme), interaksi mangsa-pemangsa dan persaingan, menilai kebaikan serta kekurangan kawalan biologi (seperti burung hantu di ladang kelapa sawit), serta mengenal pasti faktor abiosis seperti suhu, cahaya dan pH.",
            "commonMistakes": [
              "Mengelirukan komensalisme (satu pihak untung, satu lagi tidak terjejas seperti paku-pakis langsuyar pada pokok) dengan parasitisme (satu pihak untung dan merugikan perumah seperti cacing pita atau dedalu).",
              "Menyangka kawalan biologi menghapuskan perosak serta-merta seperti racun kimia, sedangkan kesannya lebih perlahan tetapi selamat kepada alam sekitar.",
              "Menganggap graf mangsa-pemangsa sentiasa mendatar, walhal populasi pemangsa sentiasa berubah sedikit lewat mengekori naik turun populasi mangsa."
            ]
          }
        ]
      },
      {
        "id": "b3",
        "name": "Nutrisi",
        "textbookUnit": "Bab 3: Nutrisi",
        "skills": [
          {
            "id": "b3_s1",
            "name": "Kelas Makanan, Fungsi dan Ujian Makanan (Iodin, Benedict, Millon, Emulsi Etanol)",
            "tests": "Menguji pengetahuan murid tentang tujuh kelas makanan (karbohidrat, protein, lemak, vitamin, mineral, pelawas, air), sumber, fungsi serta penyakit kekurangan seperti skurvi, kwasyiorkor, riket dan goiter, bersama prosedur serta pemerhatian positif ujian makanan.",
            "commonMistakes": [
              "Tertukar kegunaan ujian Iodin (menguji kanji kepada biru tua) dengan ujian Benedict (menguji glukosa/gula penurun dengan pemanasan kepada mendakan merah bata).",
              "Menyangka pelawas (serat) membekalkan tenaga atau dicernakan menjadi glukosa, sedangkan pelawas tidak dicerna tetapi penting untuk merangsang peristalsis dan mengelakkan sembelit.",
              "Keliru antara pasangan penyakit kekurangan vitamin dan mineral, seperti menyangka kekurangan vitamin D menyebabkan skurvi atau kekurangan besi menyebabkan goiter."
            ]
          },
          {
            "id": "b3_s2",
            "name": "Pencernaan Fizikal dan Kimia (Enzim Amilase, Protease, Lipase, Hempedu), Penyerapan Vilus dan Penyahtinjaan",
            "tests": "Menguji kefahaman murid mengenai laluan salur pencernaan, peranan enzim amilase, protease dan lipase beserta hasil akhir pencernaan, fungsi hempedu mengemulsikan lemak, ciri penyesuaian vilus di usus kecil serta penyerapan air di usus besar sebelum penyahtinjaan.",
            "commonMistakes": [
              "Menyangka hempedu ialah enzim yang mencernakan lemak secara kimia menjadi asid lemak dan gliserol, sedangkan hempedu hanya mengemulsikan lemak menjadi titisan kecil (tindakan fizikal) dan meneutralkan asid dari perut.",
              "Tersilap menyangka pencernaan protein bermula di dalam mulut, sedangkan amilase air liur hanya mencernakan kanji dan pencernaan protein bermula di dalam perut oleh protease.",
              "Keliru antara tempat penyerapan nutrien tercerna (di vilus usus kecil) dengan tempat penyerapan semula air dan mineral daripada sisa tidak tercerna (di usus besar)."
            ]
          },
          {
            "id": "b3_s3",
            "name": "Nilai Kalori Makanan dan Pengiraan Keperluan Tenaga",
            "tests": "Menguji kemahiran murid mengira jumlah nilai kalori makanan berdasarkan jisim hidangan dan jadual nilai kalori (kJ atau kcal), serta menilai keperluan tenaga harian mengikut faktor jantina, umur, saiz badan, pekerjaan, keadaan kesihatan dan iklim.",
            "commonMistakes": [
              "Lupa menukarkan atau mendarabkan nilai kalori per 100 g dengan jisim sebenar makanan yang dimakan (contohnya mengambil terus nilai bagi 100 g untuk hidangan 250 g).",
              "Tersalah membandingkan faktor keperluan tenaga antara individu, seperti menyangka perempuan memerlukan lebih banyak tenaga daripada lelaki pada umur dan aktiviti yang sama.",
              "Mencampuradukkan unit kilojoule (kJ) dan kilokalori (kcal) dalam pengiraan tanpa penukaran unit yang betul (1 kcal ≈ 4.2 kJ)."
            ]
          }
        ]
      },
      {
        "id": "b4",
        "name": "Kesihatan Manusia",
        "textbookUnit": "Bab 4: Kesihatan Manusia",
        "skills": [
          {
            "id": "b4_s1",
            "name": "Penyakit Berjangkit dan Tidak Berjangkit serta Cara Jangkitan (Udara, Air, Sentuhan, Vektor)",
            "tests": "Menguji keupayaan murid membezakan penyakit berjangkit yang disebabkan oleh patogen dengan penyakit tidak berjangkit, mengenal pasti cara penyebaran melalui udara, air, sentuhan dan vektor (nyamuk Aedes, nyamuk Anopheles, lalat rumah, tikus), serta kaedah pencegahan.",
            "commonMistakes": [
              "Mengelaskan penyakit berjangkit bawaan vektor seperti demam denggi atau malaria sebagai penyakit tidak berjangkit hanya kerana tidak berjangkit melalui sentuhan langsung.",
              "Menyangka nyamuk Aedes adalah patogen yang menyebabkan demam denggi, sedangkan nyamuk itu ialah vektor pembawa virus denggi.",
              "Menganggap penyakit genetik atau gaya hidup seperti diabetes, hipertensi dan kanser boleh merebak melalui perkongsian makanan atau udara."
            ]
          },
          {
            "id": "b4_s2",
            "name": "Mekanisme Pertahanan Badan (Barisan Pertama, Kedua Fagositosis, Ketiga Antibodi dan Antigen)",
            "tests": "Menguji kefahaman murid mengenai tiga barisan pertahanan badan iaitu halangan fizikal/kimia pada barisan pertama (kulit, membran mukus), tindakan sel darah putih menelan patogen secara fagositosis pada barisan kedua, dan penghasilan antibodi khusus terhadap antigen pada barisan ketiga.",
            "commonMistakes": [
              "Tertukar istilah antigen (bahan asing atau protein pada patogen yang merangsang tindak balas) dengan antibodi (protein yang dihasilkan oleh sel darah putih untuk memusnahkan antigen).",
              "Menyangka satu jenis antibodi boleh melawan semua jenis patogen secara umum, sedangkan tindakan antibodi adalah khusus kepada antigen tertentu sahaja.",
              "Mengelirukan mekanisme fagositosis pada barisan pertahanan kedua (tindakan tidak spesifik) dengan penghasilan antibodi pada barisan ketiga (tindakan spesifik)."
            ]
          },
          {
            "id": "b4_s3",
            "name": "Keimunan Pasif dan Aktif (Semula Jadi dan Buatan) serta Amalan Kesihatan",
            "tests": "Menguji kebolehan murid membezakan keimunan aktif (semula jadi selepas sembuh jangkitan; buatan melalui suntikan vaksin) dengan keimunan pasif (semula jadi melalui susu ibu/plasenta; buatan melalui suntikan antiserum), mentafsir graf aras antibodi serta menghuraikan amalan menguatkan sistem keimunan.",
            "commonMistakes": [
              "Tertukar kandungan antara vaksin (patogen yang mati atau dilemahkan untuk merangsang badan menghasilkan antibodi sendiri) dengan antiserum (mengandungi antibodi sedia ada).",
              "Menyangka keimunan pasif buatan memberikan perlindungan kekal seumur hidup, sedangkan ia hanya sementara untuk tindakan segera kerana badan tidak menghasilkan antibodi sendiri.",
              "Salah membaca graf keimunan aktif buatan yang memerlukan dos penggalak kedua supaya aras keimunan melepasi paras perlindungan jangka panjang."
            ]
          }
        ]
      },
      {
        "id": "b5",
        "name": "Air dan Larutan",
        "textbookUnit": "Bab 5: Air dan Larutan",
        "skills": [
          {
            "id": "b5_s1",
            "name": "Sifat Fizik Air, Komposisi Unsur (Elektrolisis) dan Proses Penyejatan",
            "tests": "Menguji pengetahuan murid mengenai sifat fizik air tulen (takat lebur 0 °C, takat didih 100 °C, ketumpatan 1 g/cm³, tegangan permukaan, tindakan kapilari), ujian gas hidrogen dan oksigen daripada elektrolisis air (nisbah isi padu 2:1) serta faktor kadar penyejatan.",
            "commonMistakes": [
              "Tertukar elektrod tempat pembebasan gas semasa elektrolisis air: hidrogen terhasil di katod (terminal negatif, bunyi 'pop' dengan kayu uji menyala) manakala oksigen di anod (terminal positif, menyalakan kayu uji berbara).",
              "Menganggap penyejatan dan pendidihan adalah sama, sedangkan penyejatan berlaku pada sebarang suhu di bawah takat didih dan hanya di permukaan cecair.",
              "Menyangka kehadiran bendasing seperti garam menurunkan takat didih air, sedangkan bendasing meningkatkan takat didih melebihi 100 °C dan merendahkan takat beku di bawah 0 °C."
            ]
          },
          {
            "id": "b5_s2",
            "name": "Larutan Cair, Pekat, Tepu, Ampaian dan Kadar Keterlarutan",
            "tests": "Menguji kefahaman murid membezakan zat terlarut, pelarut, larutan (cair, pekat, tepu) dan ampaian, mengenal pasti pelarut bukan air (seperti alkohol, turpentin, aseton) serta faktor yang meningkatkan kadar keterlarutan (suhu, kacauan, saiz zat terlarut).",
            "commonMistakes": [
              "Menganggap campuran air kapur atau air berlumpur yang keruh ialah larutan, sedangkan ia merupakan ampaian kerana zarah tidak larut dan mendak apabila dibiarkan.",
              "Keliru antara kadar keterlarutan (kelajuan zat melarut yang dipengaruhi kacauan dan saiz zarah) dengan keterlarutan maksimum pada suhu tertentu.",
              "Menganggap air sebagai pelarut universal yang boleh melarutkan semua bahan termasuk cat minyak, gris dan pengilat kuku tanpa memerlukan pelarut organik."
            ]
          },
          {
            "id": "b5_s3",
            "name": "Kaedah Pembersihan Air dan Sistem Pembekalan Air Terawat",
            "tests": "Menguji kebolehan murid membandingkan kaedah pembersihan air (penurasan, pendidihan, pengklorinan, penyulingan) dari segi keupayaan menyingkirkan bahan terampai, mikroorganisma dan bahan terlarut, serta mengenal pasti urutan peringkat loji rawatan air dan fungsi bahan kimia seperti alum, kapur mati, klorin dan fluorida.",
            "commonMistakes": [
              "Menyangka air yang jernih selepas proses penurasan sudah selamat terus diminum, sedangkan penurasan hanya menyingkirkan pepejal terampai dan tidak membunuh mikroorganisma atau menyingkirkan bahan terlarut.",
              "Tertukar peranan alum (menggumpalkan zarah lumpur dalam pengentalan) dengan kapur mati atau kalsium hidroksida (mengurangkan keasidan air).",
              "Menganggap pengklorinan dapat menyingkirkan bahan kimia terlarut, sedangkan hanya penyulingan yang menghasilkan air tulen bebas daripada mikroorganisma, zarah terampai dan bahan terlarut."
            ]
          }
        ]
      },
      {
        "id": "b6",
        "name": "Asid dan Alkali",
        "textbookUnit": "Bab 6: Asid dan Alkali",
        "skills": [
          {
            "id": "b6_s1",
            "name": "Sifat Asid dan Alkali, Peranan Air serta Penunjuk (Litmus, Fenolftalein, Metil Jingga, Skala pH)",
            "tests": "Menguji kefahaman murid mengenai sifat asid dan alkali, keperluan kehadiran air untuk menunjukkan sifat berasid atau beralkali, perubahan warna penunjuk (kertas litmus, fenolftalein, metil jingga, penunjuk semesta) dan bacaan skala pH (0–14).",
            "commonMistakes": [
              "Menyangka asid glasial kering atau pepejal natrium hidroksida kering boleh menukarkan warna kertas litmus kering tanpa kehadiran air.",
              "Tertukar perubahan warna kertas litmus: asid menukarkan litmus biru ke merah, manakala alkali menukarkan litmus merah ke biru.",
              "Menganggap bahan beralkali lebih selamat daripada asid dan tidak bersifat mengakis, sedangkan alkali pekat juga sangat mengakis dan berbahaya."
            ]
          },
          {
            "id": "b6_s2",
            "name": "Kekuatan Asid dan Alkali serta Aplikasi Bahan Berasid dan Beralkali dalam Kehidupan Harian",
            "tests": "Menguji kebolehan murid mengaitkan nilai pH dengan kekuatan asid dan alkali (semakin kecil pH di bawah 7 semakin kuat asid; semakin besar pH melebihi 7 semakin kuat alkali) serta memadankan kegunaan bahan berasid dan beralkali seperti cuka, ubat gigi, susu magnesia dan kapur mati dalam kehidupan harian.",
            "commonMistakes": [
              "Menyangka nilai pH yang lebih besar bermakna sifat asid lebih kuat, sedangkan asid kuat mempunyai nilai pH yang sangat rendah menghampiri 0 hingga 2.",
              "Menganggap semua bahan makanan bersifat neutral atau menganggap buah sitrus dan cuka bersifat alkali kerana rasanya.",
              "Tersilap memilih bahan untuk merawat tanah atau sengatan haiwan, seperti menyapu cuka pada tanah berasid atau pada sengatan lebah yang sudah pun berasid."
            ]
          },
          {
            "id": "b6_s3",
            "name": "Tindak Balas Peneutralan (Asid + Alkali -> Garam + Air) dan Kaedah Pentitratan",
            "tests": "Menguji penguasaan murid menulis persamaan perkataan tindak balas peneutralan antara asid dengan alkali untuk membentuk garam dan air, menamakan garam yang terhasil daripada asid tertentu, serta menerangkan prosedur pentitratan dan mengenal pasti takat akhir berdasarkan perubahan warna penunjuk.",
            "commonMistakes": [
              "Tersilap menamakan garam daripada tindak balas peneutralan (contohnya menggabungkan asid hidroklorik dengan natrium hidroksida sebagai 'natrium sulfat' dan bukannya 'natrium klorida').",
              "Menyangka tindak balas peneutralan membebaskan gas hidrogen seperti tindak balas asid dengan logam reaktif.",
              "Terlupa menghentikan penambahan asid dari buret sebaik sahaja warna penunjuk (contohnya fenolftalein daripada merah jambu kepada tidak berwarna) berubah pada takat akhir pentitratan."
            ]
          }
        ]
      },
      {
        "id": "b7",
        "name": "Keelektrikan dan Kemagnetan",
        "textbookUnit": "Bab 7: Keelektrikan dan Kemagnetan",
        "skills": [
          {
            "id": "b7_s1",
            "name": "Elektrostatik, Cas Elektrik, Arus, Voltan dan Rintangan",
            "tests": "Menguji kefahaman murid mengenai penghasilan cas elektrostatik melalui geseran, tarikan dan tolakan antara cas, pengesanan cas menggunakan elektroskop, kejadian kilat, serta hubungan konsep dan alat pengukur bagi arus elektrik (ammeter), voltan (voltmeter) dan rintangan.",
            "commonMistakes": [
              "Menyangka cas positif (proton) yang berpindah apabila dua penebat digeserkan, sedangkan hanya elektron (cas negatif) yang berpindah.",
              "Tertukar cara sambungan alat pengukur: menyambungkan ammeter secara selari dan voltmeter secara bersiri dengan komponen litar.",
              "Mengelirukan arah pengaliran arus konvensional (positif ke negatif) dengan arah pengaliran elektron (negatif ke positif)."
            ]
          },
          {
            "id": "b7_s2",
            "name": "Hukum Ohm (V = IR) serta Pengiraan Litar Siri dan Litar Selari",
            "tests": "Menguji kemahiran murid menggunakan rumus Hukum Ohm (V = IR) dan rumus rintangan berkesan, arus serta voltan dalam litar siri (R = R1 + R2, I sama, V = V1 + V2) dan litar selari (1/R = 1/R1 + 1/R2, V sama, I = I1 + I2) serta membandingkan kelebihan litar selari di rumah.",
            "commonMistakes": [
              "Menggunakan formula jumlah terus (R1 + R2) untuk mencari rintangan berkesan dalam litar selari, atau terlupa menyongsangkan hasil tambah pecahan 1/R untuk mendapatkan nilai R.",
              "Menyangka arus elektrik tetap sama di setiap cabang litar selari dan voltan pula terbahagi seperti dalam litar siri.",
              "Tersilap menyusun semula rumus V = IR apabila diminta mencari nilai arus (I = V / R) atau rintangan (R = V / I)."
            ]
          },
          {
            "id": "b7_s3",
            "name": "Medan Magnet, Elektromagnet dan Faktor Kekuatan Elektromagnet",
            "tests": "Menguji kebolehan murid melukis dan mentafsir corak garis medan magnet daripada kutub utara ke kutub selatan, menentukan arah medan magnet dawai lurus menggunakan petua genggaman tangan kanan serta menganalisis faktor yang meningkatkan kekuatan elektromagnet (arus, bilangan lilitan gegelung, teras besi lembut).",
            "commonMistakes": [
              "Melukis anak panah garis medan magnet dari kutub selatan ke kutub utara di luar magnet, atau melukis garis medan magnet bersilang antara satu sama lain.",
              "Menggunakan teras keluli untuk membuat elektromagnet sementara dan menyangka sifat kemagnetannya hilang serta-merta selepas suis dimatikan.",
              "Tertukar penggunaan ibu jari (arah arus) dengan jari-jari lain yang menggenggam (arah medan magnet) dalam petua genggaman tangan kanan."
            ]
          }
        ]
      },
      {
        "id": "b8",
        "name": "Daya dan Gerakan",
        "textbookUnit": "Bab 8: Daya dan Gerakan",
        "skills": [
          {
            "id": "b8_s1",
            "name": "Jenis Daya, Ciri Daya, Pengukuran (Neraca Spring) dan Hukum Daya Seimbang serta Keapungan",
            "tests": "Menguji pengetahuan murid mengenai jenis daya (graviti, geseran, normal, apungan, elastik), sifat vektor daya (magnitud, arah, titik aplikasi), pengukuran daya dalam unit Newton (N) dengan neraca spring, daya tindakan dan tindak balas (Hukum Newton Ketiga) serta syarat objek terapung atau tenggelam.",
            "commonMistakes": [
              "Mencampuradukkan jisim (kg) dengan berat (N) sebagai kuantiti yang sama, sedangkan berat ialah daya graviti yang bertindak ke atas jisim.",
              "Menyangka objek terapung kerana tiada daya graviti bertindak ke atasnya, sedangkan objek terapung apabila daya apungan sama dengan berat objek atau ketumpatannya lebih rendah daripada cecair.",
              "Menganggap permukaan objek yang licin tidak mempunyai daya geseran langsung atau melukis arah daya geseran mengikut arah gerakan."
            ]
          },
          {
            "id": "b8_s2",
            "name": "Momen Daya (M = F × d) dan Keseimbangan Tuas",
            "tests": "Menguji kemahiran murid mengelaskan tuas kelas pertama, kedua dan ketiga berdasarkan kedudukan fulkrum, beban dan daya, serta mengira momen daya (M = F × d dalam N m) dan menyelesaikan masalah keseimbangan tuas (daya × jarak daya = beban × jarak beban).",
            "commonMistakes": [
              "Tertukar pengelasan tuas kelas kedua (beban di tengah seperti kereta sorong dan pemecah buah keras) dengan tuas kelas ketiga (daya di tengah seperti penyepit ais dan joran pancing).",
              "Menggunakan jarak dalam sentimeter (cm) secara langsung dalam rumus M = F × d apabila jawapan dikehendaki dalam unit piawai Newton meter (N m).",
              "Mengukur jarak serenjang daripada hujung objek dan bukannya dari fulkrum ke titik tindakan daya atau beban."
            ]
          },
          {
            "id": "b8_s3",
            "name": "Tekanan (P = F / A), Tekanan Gas, Tekanan Atmosfera dan Aplikasi Kedalaman Cecair",
            "tests": "Menguji penguasaan murid mengira tekanan pepejal (P = F / A) dan mengaitkan luas permukaan dengan tekanan, menerangkan teori kinetik bagi tekanan gas (suhu dan isi padu), fenomena tekanan atmosfera (penyedut minuman, pam sedut, tin kemik) serta hubungan tekanan cecair dengan kedalaman (empangan, kapal selam).",
            "commonMistakes": [
              "Menyangka luas permukaan sentuhan yang lebih besar menghasilkan tekanan yang lebih tinggi bagi daya yang sama, sedangkan tekanan berkadar songsang dengan luas permukaan (P = F / A).",
              "Lupa menukarkan unit luas permukaan daripada cm² kepada m² (÷ 10 000) apabila mengira tekanan dalam unit Pascal (Pa atau N/m²).",
              "Menerangkan penyedut minuman berfungsi kerana 'kuasa sedutan mulut menarik air ke atas', sedangkan pengurangan tekanan udara di dalam penyedut membolehkan tekanan atmosfera di luar menolak cecair naik."
            ]
          }
        ]
      },
      {
        "id": "b9",
        "name": "Haba",
        "textbookUnit": "Bab 9: Haba",
        "skills": [
          {
            "id": "b9_s1",
            "name": "Suhu Berbanding Haba dan Pengaliran Haba (Konduksi, Perolakan, Sinaran)",
            "tests": "Menguji kefahaman murid membezakan haba (bentuk tenaga yang diukur dalam Joule) daripada suhu (darjah kepanasan yang diukur dalam °C), serta mengenal pasti kaedah pengaliran haba secara konduksi dalam pepejal, perolakan dalam bendalir (bayu laut dan bayu darat) dan sinaran melalui vakum.",
            "commonMistakes": [
              "Menganggap haba dan suhu sebagai perkara yang sama sehingga menyangka dua objek bersuhu sama mempunyai kandungan tenaga haba yang sama walaupun jisim dan bahannya berbeza.",
              "Tertukar arah kejadian bayu laut (waktu siang, darat lebih cepat panas menyebabkan udara naik dan udara sejuk dari laut bergerak ke darat) dengan bayu darat (waktu malam).",
              "Menyangka haba daripada Matahari sampai ke Bumi melalui konduksi atau perolakan, sedangkan ruang angkasa ialah vakum dan hanya membenarkan pemindahan haba secara sinaran."
            ]
          },
          {
            "id": "b9_s2",
            "name": "Keseimbangan Terma, Prinsip Pengembangan dan Pengecutan Jirim serta Kegunaannya",
            "tests": "Menguji keupayaan murid menerangkan keseimbangan terma antara dua objek bersentuhan sehingga suhunya sama, kesan pengembangan dan pengecutan pepejal, cecair dan gas apabila dipanaskan atau disejukkan, serta aplikasi seperti jalur dwilogam dalam termostat, ruang sambungan landasan kereta api dan kabel elektrik kendur.",
            "commonMistakes": [
              "Menyangka saiz zarah jirim membesar apabila dipanaskan, sedangkan zarah bergetar dan bergerak lebih laju lalu menjarakkan diri antara satu sama lain.",
              "Menganggap arah lengkungan jalur dwilogam membengkok ke arah logam yang lebih banyak mengembang, sedangkan ia melengkung ke arah logam yang kurang mengembang.",
              "Menyangka 'sejuk' mengalir daripada objek sejuk ke objek panas untuk mencapai keseimbangan terma, sedangkan haba sentiasa mengalir dari objek lebih panas ke objek lebih sejuk."
            ]
          },
          {
            "id": "b9_s3",
            "name": "Penyerap dan Pemancar Haba yang Baik atau Lemah serta Aplikasi Harian",
            "tests": "Menguji pengetahuan murid tentang hubungan warna dan jenis permukaan (gelap dan kusam berbanding putih dan berkilat) terhadap kadar penyerapan dan pemancaran haba, serta aplikasinya dalam reka bentuk kelalang termos, tangki minyak, pakaian dan bangunan.",
            "commonMistakes": [
              "Menyangka permukaan hitam dan kusam hanya merupakan penyerap haba yang baik tetapi pemancar haba yang lemah, sedangkan penyerap haba yang baik juga ialah pemancar haba yang baik.",
              "Keliru tentang fungsi dinding vakum dan lapisan perak berkilat di dalam kelalang termos: vakum menghalang konduksi dan perolakan, manakala permukaan berkilat memantul serta mengurangkan kehilangan haba melalui sinaran.",
              "Menganggap warna cerah atau berkilat menyerap lebih banyak haba matahari berbanding warna gelap dalam eksperimen tin yang terdedah kepada sumber haba."
            ]
          }
        ]
      },
      {
        "id": "b10",
        "name": "Gelombang Bunyi",
        "textbookUnit": "Bab 10: Gelombang Bunyi",
        "skills": [
          {
            "id": "b10_s1",
            "name": "Ciri Gelombang Bunyi (Pemindahan Melalui Medium, Pantulan dan Penyerapan Bunyi)",
            "tests": "Menguji kefahaman murid bahawa bunyi dihasilkan oleh getaran dan memerlukan medium (pepejal, cecair, gas) untuk merambat, perbezaan kelajuan bunyi dalam pelbagai medium, serta ciri permukaan keras yang memantulkan bunyi berbanding permukaan lembut yang menyerap bunyi.",
            "commonMistakes": [
              "Menyangka bunyi bergerak paling laju di dalam udara berbanding cecair dan pepejal, sedangkan bunyi merambat paling laju dalam pepejal kerana zarahnya tersusun sangat rapat.",
              "Menganggap gelombang bunyi boleh merambat di dalam vakum seperti gelombang cahaya di angkasa lepas.",
              "Menganggap permaidani, langsir tebal atau papan lembut digunakan di panggung wayang untuk memantulkan bunyi supaya lebih kuat, sedangkan bahan tersebut berfungsi menyerap bunyi bagi mengurangkan gema."
            ]
          },
          {
            "id": "b10_s2",
            "name": "Pengiraan Kelajuan Bunyi dan Jarak Gema (d = vt / 2) serta Kesan Frekuensi dan Amplitud",
            "tests": "Menguji kemahiran murid mengira jarak kedalaman laut atau jarak tebing menggunakan rumus gema dan sonar (d = vt / 2), serta membandingkan kesan perubahan frekuensi terhadap kelangsingan bunyi dan perubahan amplitud terhadap kenyaringan bunyi pada bentuk gelombang osiloskop.",
            "commonMistakes": [
              "Lupa membahagikan hasil darab v × t dengan 2 dalam pengiraan jarak gema atau kedalaman sonar walaupun masa t yang diberi ialah masa perjalanan ulang-alik bunyi.",
              "Tertukar hubungan antara frekuensi dan amplitud: menyangka amplitud menentukan kelangsingan bunyi dan frekuensi menentukan kenyaringan bunyi.",
              "Tersilap mentafsir bilangan gelombang lebih banyak dalam tempoh masa sama pada skrin osiloskop sebagai bunyi lebih kuat dan bukannya bunyi lebih nyaring (berfrekuensi tinggi)."
            ]
          },
          {
            "id": "b10_s3",
            "name": "Fenomena Gema, Had Pendengaran, Ultrabunyi dan Kesan Doppler dalam Kehidupan",
            "tests": "Menguji pengetahuan murid mengenai julat had pendengaran manusia (20 Hz hingga 20 000 Hz), penggunaan alat bantuan pendengaran dan stetoskop, aplikasi pantulan bunyi dan ultrabunyi (sonar, pengimejan fetus), serta perubahan frekuensi yang didengar akibat kesan Doppler apabila sumber bunyi atau pendengar bergerak.",
            "commonMistakes": [
              "Menyangka had pendengaran semua haiwan sama seperti manusia, sedangkan kelawar dan ikan lumba-lumba mendengar dan menghasilkan ultrabunyi melebihi 20 000 Hz.",
              "Menerangkan kesan Doppler sebagai perubahan kenyaringan bunyi semata-mata apabila ambulans mendekat dan menjauh, sedangkan kesan Doppler merujuk kepada perubahan frekuensi (kelangsingan) yang dikesan.",
              "Menganggap gema berlaku di dalam bilik tidur kecil apabila mendengar suara sendiri, sedangkan jarak minimum pemantul mesti cukup jauh supaya bunyi pantulan kedengaran terpisah daripada bunyi asal."
            ]
          }
        ]
      },
      {
        "id": "b11",
        "name": "Bintang dan Galaksi dalam Alam Semesta",
        "textbookUnit": "Bab 11: Bintang dan Galaksi dalam Alam Semesta",
        "skills": [
          {
            "id": "b11_s1",
            "name": "Jenis Galaksi (Berpilin, Elips, Tidak Seragam) termasuk Bima Sakti",
            "tests": "Menguji kebolehan murid mengelaskan tiga bentuk utama galaksi iaitu galaksi berpilin (seperti Bima Sakti dan Andromeda), galaksi elips (seperti Ursa Major dan Messier 87) dan galaksi tidak seragam (seperti Awan Magellan Besar dan Kecil), serta menyatakan kedudukan Sistem Suria di pinggir salah satu lengan berpilin Bima Sakti.",
            "commonMistakes": [
              "Menyangka Sistem Suria atau Bumi terletak di pusat galaksi Bima Sakti, sedangkan Sistem Suria berada di salah satu lengan berpilin di bahagian pinggir galaksi tersebut.",
              "Menganggap Bima Sakti ialah satu-satunya galaksi di alam semesta atau mencampuradukkan istilah 'galaksi' dengan 'Sistem Suria'.",
              "Keliru mengenal pasti bentuk galaksi elips (berbentuk bujur atau hampir bulat tanpa lengan berpilin) dengan galaksi tidak seragam (tiada bentuk khusus yang tetap)."
            ]
          },
          {
            "id": "b11_s2",
            "name": "Kitar Hidup Bintang Bersaiz Sederhana, Besar dan Super Besar",
            "tests": "Menguji penguasaan murid terhadap peringkat kelahiran bintang daripada nebula melalui daya tarikan graviti dan pelakuran nuklear, serta perbezaan laluan evolusi dan peringkat akhir bagi bintang bersaiz sederhana (raksasa merah -> kerdil putih), bintang besar (super raksasa -> supernova -> bintang neutron) dan bintang super besar (super raksasa -> supernova -> lohong hitam).",
            "commonMistakes": [
              "Menyangka semua bintang termasuk Matahari akan meletup sebagai supernova dan bertukar menjadi lohong hitam, sedangkan bintang bersaiz sederhana seperti Matahari berakhir sebagai kerdil putih.",
              "Tertukar peringkat akhir antara bintang besar (berakhir sebagai bintang neutron) dengan bintang super besar (berakhir sebagai lohong hitam).",
              "Menganggap nebula ialah peringkat selepas bintang mati sahaja dan bukan awan debu serta gas hidrogen yang menjadi tempat kelahiran bintang baharu."
            ]
          },
          {
            "id": "b11_s3",
            "name": "Pengelasan Bintang Berdasarkan Suhu Permukaan, Warna, Saiz dan Kecerahan",
            "tests": "Menguji kefahaman murid mengenai ciri pengelasan bintang iaitu warna dan suhu permukaan (biru paling panas hingga merah paling sejuk), saiz (kerdil, sederhana, raksasa, super raksasa), ketumpatan dan kecerahan relatif yang bergantung kepada saiz, suhu serta jarak dari Bumi.",
            "commonMistakes": [
              "Menyangka bintang berwarna merah adalah paling panas dan bintang berwarna biru paling sejuk kerana dipengaruhi maksud warna api atau paip air dalam kehidupan harian.",
              "Menganggap bintang yang kelihatan paling cerah dari Bumi semestinya merupakan bintang yang paling besar atau paling panas tanpa mengambil kira faktor jaraknya dari Bumi.",
              "Menyangka Matahari ialah bintang terbesar dan paling panas di alam semesta sedangkan Matahari merupakan bintang kuning bersaiz sederhana."
            ]
          }
        ]
      },
      {
        "id": "b12",
        "name": "Sistem Suria",
        "textbookUnit": "Bab 12: Sistem Suria",
        "skills": [
          {
            "id": "b12_s1",
            "name": "Susunan, Ciri Fizik dan Atmosfera Lapan Planet dalam Sistem Suria",
            "tests": "Menguji pengetahuan murid mengenai urutan lapan planet dari Matahari (Utarid, Zuhrah, Bumi, Marikh, Musytari, Zuhal, Uranus, Neptun), pengelasan planet dalaman berbatu berbanding planet gergasi gas/ais, serta ciri unik setiap planet seperti suhu ekstrem Zuhrah akibat kesan rumah hijau, gelang Zuhal dan keadaan atmosfera.",
            "commonMistakes": [
              "Menyangka Utarid ialah planet paling panas dalam Sistem Suria kerana paling hampir dengan Matahari, sedangkan Zuhrah lebih panas disebabkan atmosfera karbon dioksidanya yang tebal memerangkap haba.",
              "Masih menyenaraikan Pluto sebagai planet kesembilan dalam Sistem Suria dan bukan sebagai planet kerdil.",
              "Tersilap urutan planet selepas Marikh, terutamanya tertukar kedudukan antara Uranus dan Neptun."
            ]
          },
          {
            "id": "b12_s2",
            "name": "Pengiraan Jarak Planet dalam Unit Astronomi (AU) dan Tahun Cahaya (ly)",
            "tests": "Menguji kemahiran murid menukarkan jarak antara planet daripada kilometer (km) kepada Unit Astronomi (1 AU ≈ 1.5 × 10^8 km) dan Tahun Cahaya (1 ly ≈ 9.5 × 10^12 km) serta membandingkan kedudukan relatif planet daripada Matahari.",
            "commonMistakes": [
              "Menganggap Tahun Cahaya (ly) ialah unit ukuran masa kerana terdapat perkataan 'tahun', sedangkan ia merupakan unit jarak yang dilalui cahaya dalam satu tahun.",
              "Tersalah mendarab dan bukannya membahagi dengan 1.5 × 10^8 km apabila menukarkan jarak dalam km kepada unit AU (atau sebaliknya).",
              "Terlupa bahawa jarak Bumi ke Matahari bersamaan tepat 1.0 AU sebagai rujukan asas pengiraan jarak planet lain."
            ]
          },
          {
            "id": "b12_s3",
            "name": "Faktor Kesesuaian Bumi Menyokong Hidupan serta Kesan Putaran dan Kecondongan Paksi Planet",
            "tests": "Menguji kefahaman murid mengenai faktor Bumi mampu menyokong hidupan (julat suhu sesuai, air dalam bentuk cecair, atmosfera beroksigen dan lapisan ozon, cahaya matahari mencukupi, medan magnet) serta kesan putaran paksi, tempoh pusingan dan arah putaran songsang Zuhrah dan Uranus (putaran mengiring).",
            "commonMistakes": [
              "Menyangka semua planet berputar pada paksinya dari barat ke timur seperti Bumi, sedangkan Zuhrah berputar dari timur ke barat dan Uranus berputar dalam keadaan mengiring.",
              "Menganggap semakin jauh planet dari Matahari semakin laju halaju orbitnya dan semakin singkat tempoh satu tahun planet tersebut.",
              "Terlepas pandang kaitan antara kecondongan paksi Bumi (23.5°) dengan kejadian empat musim dan perbezaan panjang siang serta malam."
            ]
          }
        ]
      },
      {
        "id": "b13",
        "name": "Meteoroid, Asteroid, Komet",
        "textbookUnit": "Bab 13: Meteoroid, Asteroid, Komet",
        "skills": [
          {
            "id": "b13_s1",
            "name": "Ciri dan Perbezaan antara Meteoroid, Meteor dan Meteorit",
            "tests": "Menguji kebolehan murid membezakan meteoroid (serpihan batu atau logam kecil yang terapung di angkasa), meteor (jalur cahaya apabila meteoroid memasuki atmosfera Bumi dan terbakar akibat geseran) dan meteorit (batu sisa yang tidak habis terbakar lalu menghentam permukaan Bumi membentuk kawah).",
            "commonMistakes": [
              "Menyangka meteoroid, meteor dan meteorit ialah tiga objek angkasa berlainan jenis, sedangkan ketiga-tiganya merujuk kepada objek sama pada lokasi atau peringkat yang berbeza.",
              "Menganggap tahi bintang (meteor) ialah bintang sebenar yang jatuh dari langit ke Bumi.",
              "Tertukar antara istilah meteor (terbakar dan kelihatan bercahaya di atmosfera) dengan meteorit (sampai ke permukaan Bumi)."
            ]
          },
          {
            "id": "b13_s2",
            "name": "Ciri, Orbit dan Lokasi Lingkaran Asteroid Utama",
            "tests": "Menguji pengetahuan murid mengenai komposisi asteroid (batuan besar dan logam dikenali sebagai planet kecil), lokasi Lingkaran Asteroid utama yang mengorbit Matahari di antara planet Marikh dengan Musytari, serta contoh asteroid berhampiran Bumi seperti Apollo, Amor dan Aten.",
            "commonMistakes": [
              "Menyangka Lingkaran Asteroid berada di antara Bumi dengan Marikh atau di luar orbit Neptun (Lingkaran Kuiper), sedangkan Lingkaran Asteroid utama terletak di antara Marikh dan Musytari.",
              "Menganggap asteroid mempunyai ekor bercahaya panjang seperti komet ketika mengorbit Matahari.",
              "Membayangkan asteroid bergerak terlalu rapat antara satu sama lain sehingga kapal angkasa tidak boleh melaluinya tanpa berlanggar."
            ]
          },
          {
            "id": "b13_s3",
            "name": "Struktur Komet, Pergerakan Orbit dan Langkah Mengelakkan Perlanggaran Jasad Angkasa dengan Bumi",
            "tests": "Menguji kefahaman murid mengenai komponen komet (kepala berais dan berdebu serta ekor gas/debu), bentuk orbit elips yang sangat lonjong, arah ekor komet yang sentiasa menjauhi Matahari akibat tiupan angin suria, kesan perlanggaran asteroid dengan Bumi serta langkah pemantauan saintis bagi mengelakkan hentaman.",
            "commonMistakes": [
              "Menyangka ekor komet sentiasa menghala ke belakang arah gerakannya, sedangkan ekor komet sentiasa mengarah menjauhi Matahari kerana tolakan angin suria walaupun komet bergerak menjauhi Matahari.",
              "Menganggap komet diperbuat daripada batu pepejal dan logam sepenuhnya seperti asteroid, sedangkan komet terdiri daripada campuran ais, gas beku dan debu.",
              "Menyangka komet mudah kelihatan di langit setiap malam sepanjang tahun, sedangkan komet hanya menghasilkan ekor yang terang apabila menghampiri Matahari pada orbit elipsnya."
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
