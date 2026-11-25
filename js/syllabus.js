/**
 * 2027 Malaysian Curriculum Syllabus (KSSR Semakan & KSSM)
 * Grades: Darjah 6 (d6), Tingkatan 2 (t2), Tingkatan 4 STEM (t4)
 * Includes BM & DLP (English) titles for Math/Science subjects.
 */
(function (global) {
  const App = (global.App = global.App || {});

  App.SETS_PER_CHAPTER = 12; // max unique sets for generator chapters
  App.QUESTIONS_PER_SET = 5; // Bite-sized 5-question Duolingo-style sets

  App.GRADES = {
    d6: {
      id: "d6",
      name: "Darjah 6",
      subtitle: "KSSR Semakan (2027)",
      badge: "Year 6",
      themeClass: "theme-d6",
      color: "#10b981",
      subjects: [
        {
          id: "bm",
          name: "Bahasa Melayu",
          nameEn: "Bahasa Melayu",
          icon: "📖",
          dlp: false,
          chapters: [
            { id: "tatabahasa", title: "Tatabahasa & Golongan Kata", titleEn: "Grammar & Word Classes" },
            { id: "imbuhan", title: "Imbuhan & Pengimbuhan", titleEn: "Affixes & Morphology" },
            { id: "sintaksis", title: "Jenis & Struktur Ayat", titleEn: "Sentence Types & Structure" },
            { id: "peribahasa", title: "Peribahasa, Simpulan Bahasa & Bidalan", titleEn: "Proverbs & Idioms" },
            { id: "kosa_kata", title: "Kosa Kata, Sinonim & Antonim", titleEn: "Vocabulary, Synonyms & Antonyms" },
            { id: "pemahaman", title: "Pemahaman & Penulisan", titleEn: "Comprehension & Writing" }
          ]
        },
        {
          id: "bi",
          name: "Bahasa Inggeris",
          nameEn: "English (CEFR)",
          icon: "🔤",
          dlp: false,
          chapters: [
            { id: "tenses", title: "Tenses & Verb Forms", titleEn: "Tenses & Verb Forms" },
            { id: "parts_of_speech", title: "Parts of Speech & Prepositions", titleEn: "Parts of Speech & Prepositions" },
            { id: "conditionals_passive", title: "Passive Voice & Modals", titleEn: "Passive Voice & Modals" },
            { id: "vocab_idioms", title: "Vocabulary & Idioms", titleEn: "Vocabulary & Idioms" },
            { id: "punctuation_error", title: "Punctuation & Error Correction", titleEn: "Punctuation & Error Correction" },
            { id: "reading_comp", title: "Reading & Functional Language", titleEn: "Reading & Functional Language" }
          ]
        },
        {
          id: "math",
          name: "Matematik",
          nameEn: "Mathematics (DLP)",
          icon: "🔢",
          dlp: true,
          chapters: [
            { id: "nombor_operasi", title: "Bab 1: Nombor & Operasi (Juta & Perpuluhan)", titleEn: "Ch 1: Whole Numbers & Operations" },
            { id: "pecahan_peratus", title: "Bab 2: Pecahan, Perpuluhan & Peratus", titleEn: "Ch 2: Fractions, Decimals & Percentages" },
            { id: "wang", title: "Bab 3: Wang (Untung, Rugi, Diskaun, Faedah)", titleEn: "Ch 3: Money (Profit, Loss, Discount, Interest)" },
            { id: "masa_waktu", title: "Bab 4: Masa & Waktu (Zon Masa)", titleEn: "Ch 4: Time & Time Zones" },
            { id: "ukuran_sukatan", title: "Bab 5: Ukuran & Sukatan", titleEn: "Ch 5: Measurement" },
            { id: "ruang", title: "Bab 6: Ruang (Sudut, Bulatan, Perimeter & Luas)", titleEn: "Ch 6: Space (Angles, Circles, Perimeter & Area)" },
            { id: "koordinat_nisbah", title: "Bab 7: Koordinat, Nisbah & Kadaran", titleEn: "Ch 7: Coordinates, Ratio & Proportion" },
            { id: "data_kebolehjadian", title: "Bab 8: Pengurusan Data & Kebolehjadian", titleEn: "Ch 8: Data Handling & Likelihood" }
          ]
        },
        {
          id: "sains",
          name: "Sains",
          nameEn: "Science (DLP)",
          icon: "🔬",
          dlp: true,
          chapters: [
            { id: "kemahiran_saintifik", title: "Unit 1: Kemahiran Saintifik & Peraturan Bilik Sains", titleEn: "Unit 1: Scientific Skills" },
            { id: "manusia", title: "Unit 2: Manusia (Sistem Saraf & Pembiakan)", titleEn: "Unit 2: Humans (Nervous & Reproductive Systems)" },
            { id: "mikroorganisma", title: "Unit 3: Mikroorganisma", titleEn: "Unit 3: Microorganisms" },
            { id: "interaksi", title: "Unit 4: Interaksi Antara Hidupan", titleEn: "Unit 4: Interaction Among Living Things" },
            { id: "pemeliharaan", title: "Unit 5: Pemeliharaan & Pemuliharaan", titleEn: "Unit 5: Preservation & Conservation" },
            { id: "daya", title: "Unit 6: Daya & Kesan Daya", titleEn: "Unit 6: Force & Its Effects" },
            { id: "kelajuan", title: "Unit 7: Kelajuan", titleEn: "Unit 7: Speed" },
            { id: "pengawetan", title: "Unit 8: Pengawetan Makanan & Bahan Buangan", titleEn: "Unit 8: Food Preservation & Waste" },
            { id: "gerhana_buruj", title: "Unit 9: Gerhana, Galaksi & Teknologi Angkasa", titleEn: "Unit 9: Eclipses, Galaxies & Space Tech" },
            { id: "mesin", title: "Unit 10: Mesin Ringkas & Mesin Kompleks", titleEn: "Unit 10: Simple & Complex Machines" }
          ]
        },
        {
          id: "sejarah",
          name: "Sejarah",
          nameEn: "History",
          icon: "🏛️",
          dlp: false,
          chapters: [
            { id: "pembentukan_malaysia", title: "Tajuk 1: Pembentukan Malaysia", titleEn: "Topic 1: Formation of Malaysia" },
            { id: "negeri_malaysia", title: "Tajuk 2: Negeri-negeri di Malaysia", titleEn: "Topic 2: States in Malaysia" },
            { id: "rukun_negara", title: "Tajuk 3: Rukun Negara & Perpaduan", titleEn: "Topic 3: Rukun Negara & Unity" },
            { id: "kaum_budaya", title: "Tajuk 4: Kaum, Agama & Perayaan di Malaysia", titleEn: "Topic 4: Ethnicities & Cultures" },
            { id: "ekonomi_sukan", title: "Tajuk 5: Ekonomi, Sukan & Pencapaian Negara", titleEn: "Topic 5: Economy, Sports & Achievements" }
          ]
        },
        {
          id: "pi",
          name: "Pendidikan Islam",
          nameEn: "Islamic Education",
          icon: "🕌",
          dlp: false,
          chapters: [
            { id: "alquran_tajwid", title: "Bidang Al-Quran & Tajwid", titleEn: "Al-Quran & Tajwid" },
            { id: "hadis", title: "Bidang Hadis", titleEn: "Hadith" },
            { id: "akidah", title: "Bidang Akidah (Nama Allah & Hari Akhirat)", titleEn: "Aqidah" },
            { id: "ibadah", title: "Bidang Ibadah (Solat Jumaat, Jenazah & Puasa)", titleEn: "Ibadah" },
            { id: "sirah", title: "Bidang Sirah (Pembukaan Mekah & Hijrah)", titleEn: "Sirah" },
            { id: "adab", title: "Bidang Adab & Akhlak Islamiyah", titleEn: "Adab & Akhlak" }
          ]
        },
        {
          id: "rbt",
          name: "Reka Bentuk & Teknologi",
          nameEn: "Design & Technology (RBT)",
          icon: "⚙️",
          dlp: false,
          chapters: [
            { id: "elektromekanikal", title: "Unit 1: Reka Bentuk Produk Elektromekanikal", titleEn: "Unit 1: Design of Electromechanical Products" },
            { id: "pengaturcaraan", title: "Unit 2: Asas Pengaturcaraan & Robotik", titleEn: "Unit 2: Basic Programming & Robotics" },
            { id: "hidroponik", title: "Unit 3: Teknologi Pertanian (Hidroponik)", titleEn: "Unit 3: Hydroponics" }
          ]
        },
        {
          id: "psv",
          name: "Pendidikan Seni Visual",
          nameEn: "Visual Arts Education (PSV)",
          icon: "🎨",
          dlp: false,
          chapters: [
            { id: "bahasa_sv", title: "Modul 1: Bahasa Seni Visual", titleEn: "Module 1: Visual Art Language" },
            { id: "kemahiran_sv", title: "Modul 2: Kemahiran Seni Visual", titleEn: "Module 2: Visual Art Skills" },
            { id: "kreativiti_sv", title: "Modul 3: Kreativiti dan Inovasi", titleEn: "Module 3: Creativity and Innovation" },
            { id: "apresiasi_sv", title: "Modul 4: Apresiasi Seni Visual", titleEn: "Module 4: Art Appreciation" },
            { id: "projek_sv", title: "Modul 5: Projek Seni Visual (Pameran)", titleEn: "Module 5: Visual Art Project (Exhibition)" }
          ]
        },
        {
          id: "pjpk",
          name: "Pendidikan Jasmani & Kesihatan",
          nameEn: "Physical & Health Education (PJPK)",
          icon: "🏃",
          dlp: false,
          chapters: [
            { id: "kecergasan", title: "Konsep Kecergasan & Kecergasan Fizikal (Unit 9-10)", titleEn: "Fitness Concepts & Health-Based Fitness" },
            { id: "gimnastik_berirama", title: "Gimnastik Asas & Pergerakan Berirama (Unit 1-2)", titleEn: "Basic Gymnastics & Rhythmic Movement" },
            { id: "permainan", title: "Permainan: Serangan, Jaring, Pukul & Memadang (Unit 3-5)", titleEn: "Games: Invasion, Net, Striking & Fielding" },
            { id: "olahraga", title: "Olahraga Asas (Unit 6)", titleEn: "Basic Athletics" },
            { id: "akuatik_rekreasi", title: "Akuatik Asas, Rekreasi & Kesenggangan (Unit 7-8)", titleEn: "Basic Aquatics & Recreation" },
            { id: "kesihatan_reproduktif", title: "Kesihatan Diri, Reproduktif & Penyalahgunaan Bahan (Unit 11)", titleEn: "Personal & Reproductive Health, Substance Abuse" },
            { id: "mental_keluarga", title: "Mental, Emosi, Keluarga & Perhubungan (Unit 11)", titleEn: "Mental & Emotional Health, Family, Relationships" },
            { id: "penyakit_keselamatan", title: "Penyakit & Keselamatan Komuniti (Unit 11)", titleEn: "Disease & Community Safety" },
            { id: "pemakanan_pertolongan", title: "Pemakanan & Pertolongan Cemas (Unit 12-13)", titleEn: "Nutrition & First Aid" }
          ]
        }
      ]
    },

    t2: {
      id: "t2",
      name: "Tingkatan 2",
      subtitle: "KSSM (2027)",
      badge: "Form 2",
      themeClass: "theme-t2",
      color: "#3b82f6",
      subjects: [
        {
          id: "bm",
          name: "Bahasa Melayu",
          nameEn: "Bahasa Melayu",
          icon: "📖",
          dlp: false,
          chapters: [
            { id: "morfologi", title: "Morfologi & Kesalahan Kata", titleEn: "Morphology & Word Errors" },
            { id: "sintaksis", title: "Sintaksis & Ayat Majmuk", titleEn: "Syntax & Compound Sentences" },
            { id: "peribahasa", title: "Peribahasa & Ungkapan Menarik", titleEn: "Proverbs & Expressions" },
            { id: "komsas", title: "KOMSAS (Prosa, Puisi & Nilai Murni)", titleEn: "Literature (KOMSAS)" },
            { id: "pemahaman", title: "Pemahaman & Rumusan", titleEn: "Comprehension & Summary" }
          ]
        },
        {
          id: "bi",
          name: "Bahasa Inggeris",
          nameEn: "English (CEFR)",
          icon: "🔤",
          dlp: false,
          chapters: [
            { id: "grammar_tenses", title: "Grammar: Tenses, Modals & Conditionals", titleEn: "Grammar: Tenses, Modals & Conditionals" },
            { id: "reported_passive", title: "Reported Speech & Passive Voice", titleEn: "Reported Speech & Passive Voice" },
            { id: "vocab_phrasal", title: "Vocabulary & Phrasal Verbs", titleEn: "Vocabulary & Phrasal Verbs" },
            { id: "error_editing", title: "Error Identification & Text Completion", titleEn: "Error Identification & Text Completion" }
          ]
        },
        {
          id: "math",
          name: "Matematik",
          nameEn: "Mathematics (DLP)",
          icon: "📐",
          dlp: true,
          chapters: [
            { id: "pola_jujukan", title: "Bab 1: Pola & Jujukan", titleEn: "Ch 1: Patterns & Sequences" },
            { id: "pemfaktoran", title: "Bab 2: Pemfaktoran & Pecahan Algebra", titleEn: "Ch 2: Factorisation & Algebraic Fractions" },
            { id: "rumus_algebra", title: "Bab 3: Rumus Algebra", titleEn: "Ch 3: Algebraic Formulae" },
            { id: "poligon", title: "Bab 4: Poligon", titleEn: "Ch 4: Polygons" },
            { id: "bulatan", title: "Bab 5: Bulatan", titleEn: "Ch 5: Circles" },
            { id: "bentuk_3d", title: "Bab 6: Bentuk Geometri Tiga Dimensi", titleEn: "Ch 6: Three-Dimensional Geometrical Shapes" },
            { id: "koordinat", title: "Bab 7: Koordinat", titleEn: "Ch 7: Coordinates" },
            { id: "graf_fungsi", title: "Bab 8: Graf Fungsi", titleEn: "Ch 8: Graphs of Functions" },
            { id: "laju_pecutan", title: "Bab 9: Laju & Pecutan", titleEn: "Ch 9: Speed & Acceleration" },
            { id: "kecerunan", title: "Bab 10: Kecerunan Garis Lurus", titleEn: "Ch 10: Gradient of a Straight Line" },
            { id: "transformasi", title: "Bab 11: Transformasi Isometri", titleEn: "Ch 11: Isometric Transformations" },
            { id: "sukatan_kecenderungan", title: "Bab 12: Sukatan Kecenderungan Memusat", titleEn: "Ch 12: Measures of Central Tendencies" },
            { id: "kebarangkalian", title: "Bab 13: Kebarangkalian Mudah", titleEn: "Ch 13: Simple Probability" }
          ]
        },
        {
          id: "sains",
          name: "Sains",
          nameEn: "Science (DLP)",
          icon: "🧪",
          dlp: true,
          chapters: [
            { id: "biodiversiti", title: "Bab 1: Biodiversiti", titleEn: "Ch 1: Biodiversity" },
            { id: "ekosistem", title: "Bab 2: Ekosistem", titleEn: "Ch 2: Ecosystem" },
            { id: "nutrisi", title: "Bab 3: Nutrisi", titleEn: "Ch 3: Nutrition" },
            { id: "kesihatan", title: "Bab 4: Kesihatan Manusia", titleEn: "Ch 4: Human Health" },
            { id: "air_larutan", title: "Bab 5: Air & Larutan", titleEn: "Ch 5: Water & Solution" },
            { id: "asid_alkali", title: "Bab 6: Asid & Alkali", titleEn: "Ch 6: Acid & Alkali" },
            { id: "elektrik_magnet", title: "Bab 7: Keelektrikan & Kemagnetan", titleEn: "Ch 7: Electricity & Magnetism" },
            { id: "daya_gerakan", title: "Bab 8: Daya & Gerakan", titleEn: "Ch 8: Force & Motion" },
            { id: "haba", title: "Bab 9: Haba", titleEn: "Ch 9: Heat" },
            { id: "gelombang_bunyi", title: "Bab 10: Gelombang Bunyi", titleEn: "Ch 10: Sound Waves" },
            { id: "bintang_galaksi", title: "Bab 11: Bintang & Galaksi", titleEn: "Ch 11: Stars & Galaxies" },
            { id: "sistem_suria", title: "Bab 12: Sistem Suria & Meteoroid", titleEn: "Ch 12: Solar System & Meteoroids" }
          ]
        },
        {
          id: "sejarah",
          name: "Sejarah",
          nameEn: "History",
          icon: "🏰",
          dlp: false,
          chapters: [
            { id: "alam_melayu", title: "Bab 1–4: Kerajaan Alam Melayu", titleEn: "Ch 1–4: Malay World Kingdoms" },
            { id: "kesultanan_melaka", title: "Bab 5: Kesultanan Melayu Melaka", titleEn: "Ch 5: Malacca Sultanate" },
            { id: "johor_riau", title: "Bab 6: Kesultanan Johor Riau", titleEn: "Ch 6: Johor-Riau Sultanate" },
            { id: "kedah_kelantan_perlis", title: "Bab 8–9: Kerajaan Kedah, Kelantan, Negeri Sembilan, Perlis & Warisan", titleEn: "Ch 8–9: Kedah, Kelantan, Negeri Sembilan, Perlis & Heritage" },
            { id: "sarawak_sabah", title: "Bab 10: Warisan Sarawak & Sabah", titleEn: "Ch 10: Sarawak & Sabah Heritage" }
          ]
        },
        {
          id: "geografi",
          name: "Geografi",
          nameEn: "Geography",
          icon: "🌍",
          dlp: false,
          chapters: [
            { id: "skala_jarak", title: "Bab 1–2: Skala, Jarak & Peta Topografi", titleEn: "Ch 1–2: Scale, Distance & Topographic Maps" },
            { id: "cuaca_iklim", title: "Bab 3–4: Pengaruh Pergerakan Bumi & Cuaca Malaysia", titleEn: "Ch 3–4: Earth's Movement & Malaysian Climate" },
            { id: "pengangkutan_telekomunikasi", title: "Bab 5–6: Pengangkutan & Telekomunikasi di Malaysia", titleEn: "Ch 5–6: Transport & Telecommunications" },
            { id: "iklim_asia", title: "Bab 7–8: Kepelbagaian Iklim & Pengangkutan Asia", titleEn: "Ch 7–8: Asian Climates & Transport" },
            { id: "pemanasan_global", title: "Bab 9–10: Pemanasan Global & Teknologi Hijau", titleEn: "Ch 9–10: Global Warming & Green Tech" }
          ]
        },
        {
          id: "pi",
          name: "Pendidikan Islam",
          nameEn: "Islamic Education",
          icon: "🕌",
          dlp: false,
          chapters: [
            { id: "alquran_hadis", title: "Al-Quran, Tajwid & Hadis", titleEn: "Al-Quran, Tajwid & Hadith" },
            { id: "akidah", title: "Akidah (Kekuasaan Allah & Malaikat)", titleEn: "Aqidah" },
            { id: "ibadah", title: "Ibadah (Solat Jamak Qasar, Puasa & Zakat)", titleEn: "Ibadah" },
            { id: "sirah_adab", title: "Sirah & Adab Islamiyah", titleEn: "Sirah & Adab" }
          ]
        },
        {
          id: "rbt",
          name: "Reka Bentuk & Teknologi",
          nameEn: "Design & Technology (RBT)",
          icon: "🛠️",
          dlp: false,
          chapters: [
            { id: "masalah_inventif", title: "Bab 1: Penyelesaian Masalah Secara Inventif", titleEn: "Ch 1: Inventive Problem Solving" },
            { id: "aplikasi_teknologi", title: "Bab 2: Teknologi Pembuatan, Mekanikal & Elektrik", titleEn: "Ch 2: Manufacturing, Mechanical & Electrical Tech" },
            { id: "elektronik_akuaponik", title: "Bab 3: Reka Bentuk Elektronik, Akuaponik & Makanan", titleEn: "Ch 3: Electronics, Aquaponics & Food Design" }
          ]
        },
        {
          id: "ask",
          name: "Asas Sains Komputer",
          nameEn: "Computer Science Basics (ASK)",
          icon: "💻",
          dlp: false,
          chapters: [
            { id: "sistem_perlapanan", title: "1.1 Sistem Nombor Perlapanan", titleEn: "1.1 Octal Number System" },
            { id: "sistem_perenambelasan", title: "1.2 Sistem Nombor Perenambelasan", titleEn: "1.2 Hexadecimal Number System" },
            { id: "algoritma", title: "2.1 Pembangunan Algoritma", titleEn: "2.1 Algorithm Development" },
            { id: "kod_data", title: "3.1 Persekitaran Kod Arahan", titleEn: "3.1 Coding Environment" },
            { id: "kod_struktur", title: "3.2 Struktur Kod Arahan", titleEn: "3.2 Coding Structures" }
          ]
        },
        {
          id: "psv",
          name: "Pendidikan Seni Visual",
          nameEn: "Visual Arts Education (PSV)",
          icon: "🎨",
          dlp: false,
          chapters: [
            { id: "ragam_hias", title: "Tajuk 1: Seni Ragam Hias (Pengangkutan, Alat Permainan Rakyat & Alat Domestik)", titleEn: "Topic 1: Decorative Art" },
            { id: "lukisan", title: "Tajuk 2: Seni Lukisan", titleEn: "Topic 2: Drawing" },
            { id: "catan", title: "Tajuk 3: Seni Catan", titleEn: "Topic 3: Painting" },
            { id: "cetakan", title: "Tajuk 4: Seni Cetakan", titleEn: "Topic 4: Printmaking" },
            { id: "landskap", title: "Tajuk 5: Reka Bentuk Landskap", titleEn: "Topic 5: Landscape Design" },
            { id: "hiasan_dalaman", title: "Tajuk 6: Reka Bentuk Hiasan Dalaman", titleEn: "Topic 6: Interior Design" },
            { id: "reka_industri", title: "Tajuk 7: Reka Bentuk Industri", titleEn: "Topic 7: Industrial Design" },
            { id: "sulaman", title: "Tajuk 8: Seni Sulaman", titleEn: "Topic 8: Embroidery" },
            { id: "seramik", title: "Tajuk 9: Seni Seramik", titleEn: "Topic 9: Ceramics" },
            { id: "reka_grafik", title: "Tajuk 10: Seni Reka Grafik (Simbol & Logo)", titleEn: "Topic 10: Graphic Design" },
            { id: "foto", title: "Tajuk 11: Seni Foto", titleEn: "Topic 11: Photography" }
          ]
        },
        {
          id: "pjpk",
          name: "Pendidikan Jasmani & Kesihatan",
          nameEn: "Physical & Health Education (PJPK)",
          icon: "🏃",
          dlp: false,
          chapters: [
            { id: "kecergasan", title: "Kecergasan Fizikal Berdasarkan Kesihatan (Unit 8)", titleEn: "Health-Based Physical Fitness" },
            { id: "gimnastik_berirama", title: "Gimnastik Asas & Pergerakan Berirama (Unit 1-2)", titleEn: "Basic Gymnastics & Rhythmic Movement" },
            { id: "bolabaling_ragbi", title: "Bola Baling & Ragbi Sentuh (Unit 3)", titleEn: "Handball & Touch Rugby" },
            { id: "takraw_kriket", title: "Sepak Takraw & Kriket (Unit 4-5)", titleEn: "Sepak Takraw & Cricket" },
            { id: "olahraga_rekreasi", title: "Olahraga Asas, Rekreasi & Kesenggangan (Unit 6-7)", titleEn: "Athletics & Recreation" },
            { id: "kesihatan_reproduktif", title: "Kesihatan Diri & Penyalahgunaan Bahan", titleEn: "Personal Health & Substance Abuse" },
            { id: "mental_keluarga", title: "Mental & Emosi, Kekeluargaan, Perhubungan", titleEn: "Mental Health, Family & Relationships" },
            { id: "penyakit_keselamatan", title: "Penyakit & Keselamatan", titleEn: "Disease & Safety" },
            { id: "pemakanan_pertolongan", title: "Pemakanan & Pertolongan Cemas", titleEn: "Nutrition & First Aid" }
          ]
        }
      ]
    },

    t4: {
      id: "t4",
      name: "Tingkatan 4",
      subtitle: "KSSM Aliran STEM (2027)",
      badge: "Form 4 STEM",
      themeClass: "theme-t4",
      color: "#8b5cf6",
      subjects: [
        {
          id: "bm",
          name: "Bahasa Melayu",
          nameEn: "Bahasa Melayu",
          icon: "📖",
          dlp: false,
          chapters: [
            { id: "morfologi_spm", title: "Morfologi & Golongan Kata SPM", titleEn: "SPM Morphology" },
            { id: "sintaksis_spm", title: "Sintaksis, Ayat Aktif/Pasif & Cakap Ajuk/Pindah", titleEn: "SPM Syntax" },
            { id: "peribahasa_spm", title: "Peribahasa & Kesalahan Bahasa", titleEn: "Proverbs & Language Errors" },
            { id: "komsas_novel", title: "KOMSAS & Pemahaman", titleEn: "Literature & Comprehension" }
          ]
        },
        {
          id: "bi",
          name: "Bahasa Inggeris",
          nameEn: "English (CEFR SPM)",
          icon: "🔤",
          dlp: false,
          chapters: [
            { id: "grammar_spm", title: "Advanced Tenses, Clauses & Conditionals", titleEn: "Advanced Tenses & Clauses" },
            { id: "vocab_collocations", title: "Vocabulary, Collocations & Phrasal Verbs", titleEn: "Vocabulary & Collocations" },
            { id: "rational_cloze", title: "Cloze Text & Error Correction (Format Peperiksaan)", titleEn: "Cloze Text & Error Correction (Exam Format)" }
          ]
        },
        {
          id: "math",
          name: "Matematik",
          nameEn: "Mathematics (DLP)",
          icon: "📊",
          dlp: true,
          chapters: [
            { id: "kuadratik", title: "Bab 1: Fungsi & Persamaan Kuadratik", titleEn: "Ch 1: Quadratic Functions & Equations" },
            { id: "asas_nombor", title: "Bab 2: Asas Nombor", titleEn: "Ch 2: Number Bases" },
            { id: "penaakulan_logik", title: "Bab 3: Penaakulan Logik", titleEn: "Ch 3: Logical Reasoning" },
            { id: "operasi_set", title: "Bab 4: Operasi Set", titleEn: "Ch 4: Operations on Sets" },
            { id: "rangkaian_graf", title: "Bab 5: Rangkaian dalam Teori Graf", titleEn: "Ch 5: Network in Graph Theory" },
            { id: "ketaksamaan_linear", title: "Bab 6: Ketaksamaan Linear dalam Dua Pemboleh Ubah", titleEn: "Ch 6: Linear Inequalities in Two Variables" },
            { id: "graf_gerakan", title: "Bab 7: Graf Gerakan", titleEn: "Ch 7: Graphs of Motion" },
            { id: "sukatan_serakan", title: "Bab 8: Sukatan Serakan Data Tak Terkumpul", titleEn: "Ch 8: Measures of Dispersion" },
            { id: "kebarangkalian", title: "Bab 9: Kebarangkalian Peristiwa Bergabung", titleEn: "Ch 9: Probability of Combined Events" },
            { id: "kewangan", title: "Bab 10: Matematik Pengguna: Pengurusan Kewangan", titleEn: "Ch 10: Consumer Math: Financial Management" }
          ]
        },
        {
          id: "addmath",
          name: "Matematik Tambahan",
          nameEn: "Additional Mathematics (DLP)",
          icon: "∫",
          dlp: true,
          chapters: [
            { id: "fungsi", title: "Bab 1: Fungsi", titleEn: "Ch 1: Functions" },
            { id: "fungsi_kuadratik", title: "Bab 2: Fungsi Kuadratik", titleEn: "Ch 2: Quadratic Functions" },
            { id: "sistem_persamaan", title: "Bab 3: Sistem Persamaan", titleEn: "Ch 3: Systems of Equations" },
            { id: "indeks_surd_log", title: "Bab 4: Indeks, Surd & Logaritma", titleEn: "Ch 4: Indices, Surds & Logarithms" },
            { id: "janjang", title: "Bab 5: Janjang (JA & JG)", titleEn: "Ch 5: Progressions (AP & GP)" },
            { id: "hukum_linear", title: "Bab 6: Hukum Linear", titleEn: "Ch 6: Linear Law" },
            { id: "geometri_koordinat", title: "Bab 7: Geometri Koordinat", titleEn: "Ch 7: Coordinate Geometry" },
            { id: "vektor", title: "Bab 8: Vektor", titleEn: "Ch 8: Vectors" },
            { id: "penyelesaian_segitiga", title: "Bab 9: Penyelesaian Segitiga", titleEn: "Ch 9: Solution of Triangles" },
            { id: "nombor_indeks", title: "Bab 10: Nombor Indeks", titleEn: "Ch 10: Index Numbers" }
          ]
        },
        {
          id: "fizik",
          name: "Fizik",
          nameEn: "Physics (DLP)",
          icon: "⚡",
          dlp: true,
          chapters: [
            { id: "pengukuran", title: "Bab 1: Pengukuran", titleEn: "Ch 1: Measurement" },
            { id: "daya_gerakan_1", title: "Bab 2: Daya dan Gerakan I", titleEn: "Ch 2: Force and Motion I" },
            { id: "kegravitian", title: "Bab 3: Kegravitian", titleEn: "Ch 3: Gravitation" },
            { id: "haba", title: "Bab 4: Haba", titleEn: "Ch 4: Heat" },
            { id: "gelombang", title: "Bab 5: Gelombang", titleEn: "Ch 5: Waves" },
            { id: "cahaya_optik", title: "Bab 6: Cahaya dan Optik", titleEn: "Ch 6: Light and Optics" }
          ]
        },
        {
          id: "kimia",
          name: "Kimia",
          nameEn: "Chemistry (DLP)",
          icon: "⚗️",
          dlp: true,
          chapters: [
            { id: "pengenalan_kimia", title: "Bab 1: Pengenalan kepada Kimia", titleEn: "Ch 1: Introduction to Chemistry" },
            { id: "jirim_atom", title: "Bab 2: Jirim dan Struktur Atom", titleEn: "Ch 2: Matter and Atomic Structure" },
            { id: "konsep_mol", title: "Bab 3: Konsep Mol, Formula & Persamaan Kimia", titleEn: "Ch 3: Mole Concept, Formulae & Equations" },
            { id: "jadual_berkala", title: "Bab 4: Jadual Berkala Unsur", titleEn: "Ch 4: Periodic Table of Elements" },
            { id: "ikatan_kimia", title: "Bab 5: Ikatan Kimia", titleEn: "Ch 5: Chemical Bonds" },
            { id: "asid_bes_garam", title: "Bab 6: Asid, Bes dan Garam", titleEn: "Ch 6: Acids, Bases and Salts" },
            { id: "kadar_tindakbalas", title: "Bab 7: Kadar Tindak Balas", titleEn: "Ch 7: Rate of Reaction" },
            { id: "bahan_buatan", title: "Bab 8: Bahan Buatan dalam Industri", titleEn: "Ch 8: Manufactured Substances in Industry" }
          ]
        },
        {
          id: "biologi",
          name: "Biologi",
          nameEn: "Biology (DLP)",
          icon: "🧬",
          dlp: true,
          chapters: [
            { id: "pengenalan_biologi", title: "Bab 1: Pengenalan kepada Biologi & Peraturan Makmal", titleEn: "Ch 1: Introduction to Biology" },
            { id: "biologi_sel", title: "Bab 2: Biologi Sel & Organisasi Sel", titleEn: "Ch 2: Cell Biology & Organisation" },
            { id: "membran_plasma", title: "Bab 3: Pergerakan Bahan Merentas Membran Plasma", titleEn: "Ch 3: Movement Across Plasma Membrane" },
            { id: "komposisi_kimia", title: "Bab 4: Komposisi Kimia dalam Sel", titleEn: "Ch 4: Chemical Composition in a Cell" },
            { id: "metabolisme_enzim", title: "Bab 5: Metabolisme & Enzim", titleEn: "Ch 5: Metabolism & Enzymes" },
            { id: "pembahagian_sel", title: "Bab 6: Pembahagian Sel (Mitosis & Meiosis)", titleEn: "Ch 6: Cell Division (Mitosis & Meiosis)" },
            { id: "respirasi_sel", title: "Bab 7: Respirasi Sel", titleEn: "Ch 7: Cellular Respiration" },
            { id: "respirasi_haiwan", title: "Bab 8–10: Sistem Respirasi, Nutrisi & Pengangkutan", titleEn: "Ch 8–10: Respiration, Nutrition & Transport" },
            { id: "keimunan_saraf", title: "Bab 11–15: Keimunan, Koordinasi, Sokongan & Pergerakan, Homeostasis & Pembiakan", titleEn: "Ch 11–15: Immunity, Coordination, Support & Movement, Homeostasis & Reproduction" }
          ]
        },
        {
          id: "sains",
          name: "Sains",
          nameEn: "Science (core)",
          icon: "🔬",
          dlp: false,
          chapters: [
            { id: "teknologi_hijau", title: "Bab 4: Teknologi Hijau dalam Melestarikan Alam", titleEn: "Ch 4: Green Technology" },
            { id: "genetik", title: "Bab 5: Genetik", titleEn: "Ch 5: Genetics" },
            { id: "sokongan_pertumbuhan", title: "Bab 6: Sokongan, Pergerakan dan Pertumbuhan", titleEn: "Ch 6: Support, Movement and Growth" },
            { id: "koordinasi_badan", title: "Bab 7: Koordinasi Badan", titleEn: "Ch 7: Body Coordination" }
          ]
        },
        {
          id: "sejarah",
          name: "Sejarah",
          nameEn: "History",
          icon: "📜",
          dlp: false,
          chapters: [
            { id: "warisan_negara", title: "Bab 1: Warisan Negara Bangsa", titleEn: "Ch 1: Heritage of the Nation-State" },
            { id: "nasionalisme", title: "Bab 2: Kebangkitan Nasionalisme", titleEn: "Ch 2: Rise of Nationalism" },
            { id: "perang_dunia", title: "Bab 3: Konflik Dunia & Pendudukan Jepun", titleEn: "Ch 3: World Conflict & Japanese Occupation" },
            { id: "malayan_union", title: "Bab 4–5: Era Peralihan Kuasa British (Malayan Union) & Persekutuan Tanah Melayu 1948", titleEn: "Ch 4–5: British Transition Era (Malayan Union) & Federation of Malaya 1948" },
            { id: "komunis_merdeka", title: "Bab 6–10: Ancaman Komunis, Usaha ke Arah Kemerdekaan, Pilihan Raya, Perlembagaan 1957 & Pemasyhuran Kemerdekaan", titleEn: "Ch 6–10: Emergency, Road to Independence, Elections, 1957 Constitution & Proclamation" }
          ]
        },
        {
          id: "pi",
          name: "Pendidikan Islam",
          nameEn: "Islamic Education",
          icon: "🕌",
          dlp: false,
          chapters: [
            { id: "alquran_hadis", title: "Al-Quran, Tajwid & Hadis", titleEn: "Al-Quran, Tajwid & Hadith" },
            { id: "akidah", title: "Akidah (Perkara Membatalkan Iman & Ajaran Sesat)", titleEn: "Aqidah" },
            { id: "ibadah", title: "Ibadah (Haji, Umrah, Sembelihan, Korban & Muamalat)", titleEn: "Ibadah" },
            { id: "sirah_adab", title: "Sirah (Khulafa ar-Rasyidin, Kerajaan Umaiyah/Abbasiyah) & Adab", titleEn: "Sirah & Adab" }
          ]
        },
        {
          id: "pjpk",
          name: "Pendidikan Jasmani & Kesihatan",
          nameEn: "Physical & Health Education (PJPK)",
          icon: "🏃",
          dlp: false,
          chapters: [
            { id: "kecergasan", title: "Kecergasan Fizikal Berdasarkan Kesihatan (Unit 6)", titleEn: "Health-Based Physical Fitness" },
            { id: "kesihatan_reproduktif", title: "Kesihatan Diri & Penyalahgunaan Bahan (Jerat Dadah)", titleEn: "Personal Health & Substance Abuse" },
            { id: "mental_keluarga", title: "Mental & Emosi, Kekeluargaan, Perhubungan", titleEn: "Mental Health, Family & Relationships" },
            { id: "penyakit_keselamatan", title: "Penyakit (Talasemia) & Keselamatan (Pemerdagangan Manusia)", titleEn: "Disease & Safety" },
            { id: "pemakanan_pertolongan", title: "Pemakanan (Suplemen) & Pertolongan Cemas (CPR)", titleEn: "Nutrition & First Aid" }
          ]
        }
      ]
    }
  };
})(window);
