(function (global) {
  const ITEMS = [
  {
    "id": "t2_bm_morfologi_s1_1",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Buku itu sangat tebal. Apakah golongan kata bagi perkataan 'sangat'?",
    "options": [
      "Kata penguat",
      "Kata adjektif",
      "Kata bantu",
      "Kata bilangan"
    ],
    "correctIndex": 0,
    "explanation": "'Sangat' ialah kata penguat yang menguatkan kata adjektif 'tebal'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_2",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Dia berlari dengan pantas ke sekolah. Apakah golongan kata bagi perkataan 'dengan'?",
    "options": [
      "Kata seru",
      "Kata sendi nama",
      "Kata penguat",
      "Kata perintah"
    ],
    "correctIndex": 1,
    "explanation": "'Dengan' ialah kata sendi nama yang menghubungkan frasa 'berlari' dengan frasa 'pantas'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_3",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Kami akan berjumpa esok. Apakah golongan kata bagi perkataan 'akan'?",
    "options": [
      "Kata kerja",
      "Kata sendi nama",
      "Kata bantu",
      "Kata nama"
    ],
    "correctIndex": 2,
    "explanation": "'Akan' ialah kata bantu yang menunjukkan perbuatan belum berlaku.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_4",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Wah, cantiknya pemandangan di puncak itu! Apakah golongan kata bagi perkataan 'Wah'?",
    "options": [
      "Kata penguat",
      "Kata perintah",
      "Kata adjektif",
      "Kata seru"
    ],
    "correctIndex": 3,
    "explanation": "'Wah' ialah kata seru yang menyatakan perasaan kagum.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_5",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "M",
    "q": "Murid-murid itu tekun belajar setiap petang. Apakah golongan kata bagi perkataan 'tekun'?",
    "options": [
      "Kata adjektif",
      "Kata kerja",
      "Kata nama",
      "Kata penguat"
    ],
    "correctIndex": 0,
    "explanation": "'Tekun' ialah kata adjektif kerana menerangkan sifat atau keadaan murid.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_6",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Sila masuk ke dalam dewan dengan tertib. Apakah golongan kata bagi perkataan 'Sila'?",
    "options": [
      "Kata bantu",
      "Kata perintah",
      "Kata seru",
      "Kata sendi nama"
    ],
    "correctIndex": 1,
    "explanation": "'Sila' ialah kata perintah yang digunakan untuk menyuruh dengan sopan.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_7",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "M",
    "q": "Keindahan pantai itu memukau para pelancong. Apakah golongan kata bagi perkataan 'keindahan'?",
    "options": [
      "Kata kerja",
      "Kata adjektif",
      "Kata nama terbitan",
      "Kata penguat"
    ],
    "correctIndex": 2,
    "explanation": "'Keindahan' terbentuk daripada apitan ke-...-an dan berfungsi sebagai kata nama terbitan.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_8",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "L",
    "q": "Pensel ini milik saya. Apakah golongan kata bagi perkataan 'saya'?",
    "options": [
      "Kata nama am",
      "Kata sendi nama",
      "Kata bilangan",
      "Kata ganti nama diri"
    ],
    "correctIndex": 3,
    "explanation": "'Saya' ialah kata ganti nama diri pertama yang menggantikan nama penutur.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_9",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "M",
    "q": "Para tetamu sudah tiba di majlis itu. Apakah golongan kata bagi perkataan 'Para'?",
    "options": [
      "Kata bilangan tak tentu",
      "Kata bilangan tentu",
      "Kata penguat",
      "Kata nama"
    ],
    "correctIndex": 0,
    "explanation": "Para merujuk sejumlah orang tanpa menyatakan bilangan yang tepat.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s1_10",
    "unit": "morfologi",
    "skill": "morfologi_s1",
    "diff": "M",
    "q": "Murid itu menulis karangan yang menarik. Apakah golongan kata bagi perkataan 'menulis'?",
    "options": [
      "Kata kerja tak transitif",
      "Kata kerja transitif",
      "Kata nama terbitan",
      "Kata adjektif"
    ],
    "correctIndex": 1,
    "explanation": "'Menulis' ialah kata kerja transitif kerana diikuti objek, iaitu 'karangan'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_1",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "L",
    "q": "Apakah perkataan yang terbentuk daripada imbuhan meN- + tulis?",
    "options": [
      "penulis",
      "ditulis",
      "menulis",
      "tertulis"
    ],
    "correctIndex": 2,
    "explanation": "meN- + tulis menjadi 'menulis' kerana huruf awal 't' gugur.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_2",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "L",
    "q": "Perkataan 'keindahan' terbentuk daripada apitan yang manakah?",
    "options": [
      "meN- ... -kan",
      "peN- ... -an",
      "di- ... -i",
      "ke- ... -an"
    ],
    "correctIndex": 3,
    "explanation": "'Keindahan' terbentuk daripada kata dasar 'indah' yang menerima apitan ke-...-an.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_3",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "L",
    "q": "Apakah kata dasar bagi perkataan 'pembaca'?",
    "options": [
      "baca",
      "pemba",
      "bacaan",
      "membaca"
    ],
    "correctIndex": 0,
    "explanation": "Awalan pem- bergabung dengan kata dasar baca.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_4",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "M",
    "q": "Buku itu mudah terbaca oleh kanak-kanak. Apakah maksud imbuhan ter- dalam perkataan 'terbaca'?",
    "options": [
      "Menyatakan keadaan",
      "Bermaksud dapat di-",
      "Menyatakan perbuatan sudah berlaku",
      "Menyatakan perbuatan berulang"
    ],
    "correctIndex": 1,
    "explanation": "Dalam konteks ini, 'terbaca' bermaksud dapat dibaca.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_5",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "M",
    "q": "Pintu itu diambil oleh ayah. Apakah imbuhan pada perkataan 'diambil'?",
    "options": [
      "di- (kata sendi nama)",
      "ter-",
      "di- (kata kerja pasif)",
      "meN-"
    ],
    "correctIndex": 2,
    "explanation": "'Diambil' menggunakan awalan di- yang menandakan kata kerja pasif.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_6",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "M",
    "q": "Pasukan itu memperbaiki jambatan yang rosak. Apakah apitan pada perkataan 'memperbaiki'?",
    "options": [
      "memper-",
      "peN- ... -an",
      "meN- ... -kan",
      "memper- ... -i"
    ],
    "correctIndex": 3,
    "explanation": "'Memperbaiki' terbentuk daripada apitan memper-...-i pada kata dasar 'baik'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_7",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "L",
    "q": "Kanak-kanak itu berlari di padang. Apakah maksud imbuhan ber- dalam perkataan 'berlari'?",
    "options": [
      "Melakukan sesuatu perbuatan",
      "Mempunyai",
      "Membuat seperti",
      "Menyatakan arah"
    ],
    "correctIndex": 0,
    "explanation": "Awalan ber- di sini menunjukkan perbuatan yang dilakukan, iaitu berlari.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_8",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "M",
    "q": "Permainan itu sungguh menyeronokkan. Apakah apitan pada perkataan 'permainan'?",
    "options": [
      "peN-",
      "per- ... -an",
      "per-",
      "ke- ... -an"
    ],
    "correctIndex": 1,
    "explanation": "'Permainan' terbentuk daripada apitan per-...-an pada kata dasar 'main'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_9",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "M",
    "q": "Dia memasukkan buku ke dalam beg. Apakah apitan pada perkataan 'memasukkan'?",
    "options": [
      "meN-",
      "memper- ... -i",
      "meN- ... -kan",
      "ter- ... -kan"
    ],
    "correctIndex": 2,
    "explanation": "'Memasukkan' terbentuk daripada apitan meN-...-kan pada kata dasar 'masuk'.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_morfologi_s2_10",
    "unit": "morfologi",
    "skill": "morfologi_s2",
    "diff": "H",
    "q": "Pilih perkataan berawalan yang merujuk kepada orang yang menulis.",
    "options": [
      "tulisan",
      "tertulis",
      "menulis",
      "penulis"
    ],
    "correctIndex": 3,
    "explanation": "Awalan peN- pada tulis menghasilkan penulis, iaitu orang yang menulis.",
    "ref": "Morfologi"
  },
  {
    "id": "t2_bm_sintaksis_s1_1",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "L",
    "q": "Ahmad guru. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FN",
      "FN + FK",
      "FN + FA",
      "FN + FSN"
    ],
    "correctIndex": 0,
    "explanation": "'Ahmad' ialah frasa nama sebagai subjek dan 'guru' ialah frasa nama sebagai predikat.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_2",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "L",
    "q": "Kanak-kanak itu menangis. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FN",
      "FN + FK",
      "FN + FA",
      "FN + FSN"
    ],
    "correctIndex": 1,
    "explanation": "'Menangis' ialah frasa kerja, jadi polanya FN + FK.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_3",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "M",
    "q": "Bunga di taman itu sangat wangi. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FK",
      "FN + FN",
      "FN + FA",
      "FN + FSN"
    ],
    "correctIndex": 2,
    "explanation": "'Sangat wangi' ialah frasa adjektif, manakala subjeknya frasa nama.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_4",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "L",
    "q": "Ali ke sekolah. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FK",
      "FN + FA",
      "FN + FN",
      "FN + FSN"
    ],
    "correctIndex": 3,
    "explanation": "'Ke sekolah' ialah frasa sendi nama yang menjadi predikat.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_5",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "H",
    "q": "Ibu membeli ikan di pasar. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FK + FSN",
      "FN + FK",
      "FN + FSN",
      "FN + FN"
    ],
    "correctIndex": 1,
    "explanation": "Subjek ibu ialah frasa nama. Seluruh predikat membeli ikan di pasar ialah frasa kerja yang disertai keterangan tempat.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_6",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "M",
    "q": "Air sungai di belakang rumah itu sungguh jernih. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FK",
      "FN + FA",
      "FN + FN",
      "FN + FSN"
    ],
    "correctIndex": 1,
    "explanation": "'Sungguh jernih' ialah frasa adjektif yang menjadi predikat.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_7",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "M",
    "q": "Pemandangan di pantai itu sungguh indah. Apakah subjek bagi ayat ini?",
    "options": [
      "Pemandangan",
      "di pantai itu",
      "Pemandangan di pantai itu",
      "sungguh indah"
    ],
    "correctIndex": 2,
    "explanation": "Subjek ialah keseluruhan frasa nama 'Pemandangan di pantai itu'.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_8",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "M",
    "q": "Guru mata pelajaran Sains kami sudah tiba. Apakah predikat bagi ayat ini?",
    "options": [
      "Guru mata pelajaran Sains kami",
      "mata pelajaran Sains",
      "kami",
      "sudah tiba"
    ],
    "correctIndex": 3,
    "explanation": "Predikat ialah 'sudah tiba', iaitu frasa kerja yang menceritakan subjek.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_9",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "M",
    "q": "Mereka ke Kuala Lumpur semalam. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FSN",
      "FN + FN",
      "FN + FA",
      "FN + FK"
    ],
    "correctIndex": 0,
    "explanation": "'Ke Kuala Lumpur semalam' ialah frasa sendi nama.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s1_10",
    "unit": "sintaksis",
    "skill": "sintaksis_s1",
    "diff": "L",
    "q": "Jambatan lama itu runtuh semalam. Apakah pola ayat bagi ayat ini?",
    "options": [
      "FN + FN",
      "FN + FK",
      "FN + FA",
      "FN + FSN"
    ],
    "correctIndex": 1,
    "explanation": "'Runtuh' ialah kata kerja tak transitif, jadi predikatnya frasa kerja.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_1",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "L",
    "q": "Dia membaca buku dan adiknya menonton televisyen. Apakah jenis ayat majmuk ini?",
    "options": [
      "Ayat majmuk pancangan relatif",
      "Ayat majmuk pancangan komplemen",
      "Ayat majmuk gabungan",
      "Ayat tunggal"
    ],
    "correctIndex": 2,
    "explanation": "Dua klausa setara digabungkan dengan kata hubung 'dan', jadi ini ayat majmuk gabungan.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_2",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Saya tahu bahawa dia murid yang pandai. Apakah jenis pancangan bagi klausa 'bahawa dia murid yang pandai'?",
    "options": [
      "Pancangan relatif",
      "Pancangan keterangan",
      "Gabungan",
      "Pancangan komplemen"
    ],
    "correctIndex": 3,
    "explanation": "Kata hubung 'bahawa' menandakan klausa komplemen yang menjadi objek kata kerja 'tahu'.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_3",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "L",
    "q": "Jika hujan lebat, kami tidak akan ke padang. Apakah jenis klausa bawahan ini?",
    "options": [
      "Keterangan syarat",
      "Keterangan masa",
      "Keterangan cara",
      "Keterangan sebab"
    ],
    "correctIndex": 0,
    "explanation": "'Jika' menandakan syarat yang mesti dipenuhi.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_4",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Orang yang memakai baju merah itu kawan saya. Apakah jenis pancangan dalam ayat ini?",
    "options": [
      "Pancangan komplemen",
      "Pancangan relatif",
      "Pancangan keterangan",
      "Gabungan"
    ],
    "correctIndex": 1,
    "explanation": "'Yang memakai baju merah itu' ialah klausa relatif yang menerangkan 'orang'.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_5",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "L",
    "q": "Dia berlari kerana dia takut akan anjing itu. Apakah jenis klausa bawahan ini?",
    "options": [
      "Keterangan syarat",
      "Keterangan tujuan",
      "Keterangan sebab",
      "Keterangan pertentangan"
    ],
    "correctIndex": 2,
    "explanation": "'Kerana' menandakan sebab berlakunya perbuatan.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_6",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Walaupun letih, dia tetap menyiapkan kerja rumah. Apakah jenis klausa bawahan ini?",
    "options": [
      "Keterangan syarat",
      "Keterangan cara",
      "Keterangan masa",
      "Keterangan pertentangan"
    ],
    "correctIndex": 3,
    "explanation": "'Walaupun' menandakan pertentangan antara keadaan letih dengan tindakan yang diteruskan.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_7",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Pilih ayat majmuk gabungan yang betul untuk menggabungkan: Siti menyanyi. Siti menari.",
    "options": [
      "Siti menyanyi dan menari.",
      "Siti menyanyi kerana menari.",
      "Siti menyanyi yang menari.",
      "Siti menyanyi bahawa menari."
    ],
    "correctIndex": 0,
    "explanation": "Kata hubung 'dan' menggabungkan dua predikat yang setara.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_8",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Dia bukan bodoh, tetapi dia malas. Apakah jenis ayat majmuk ini?",
    "options": [
      "Ayat majmuk pancangan",
      "Ayat majmuk gabungan",
      "Ayat tunggal",
      "Ayat perintah"
    ],
    "correctIndex": 1,
    "explanation": "'Tetapi' ialah kata hubung gabungan yang menunjukkan pertentangan setara.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_9",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "M",
    "q": "Apabila loceng berbunyi, murid-murid terus keluar. Apakah jenis klausa bawahan ini?",
    "options": [
      "Keterangan syarat",
      "Keterangan sebab",
      "Keterangan masa",
      "Keterangan cara"
    ],
    "correctIndex": 2,
    "explanation": "'Apabila' menandakan masa berlakunya perbuatan utama.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_sintaksis_s2_10",
    "unit": "sintaksis",
    "skill": "sintaksis_s2",
    "diff": "H",
    "q": "Murid yang rajin itu berjaya kerana dia belajar bersungguh-sungguh. Apakah jenis ayat majmuk ini?",
    "options": [
      "Ayat majmuk gabungan",
      "Ayat tunggal",
      "Ayat majmuk pancangan relatif sahaja",
      "Ayat majmuk campuran"
    ],
    "correctIndex": 3,
    "explanation": "Ayat ini menggabungkan klausa relatif 'yang rajin itu' dengan klausa keterangan sebab 'kerana dia belajar bersungguh-sungguh'.",
    "ref": "Sintaksis"
  },
  {
    "id": "t2_bm_peribahasa_s1_1",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "L",
    "q": "Apakah maksud peribahasa 'bagai aur dengan tebing'?",
    "options": [
      "Saling membantu dalam kehidupan",
      "Bersaing untuk mencapai kejayaan",
      "Berpisah untuk selama-lamanya",
      "Bekerja seorang diri tanpa bantuan"
    ],
    "correctIndex": 0,
    "explanation": "Aur dan tebing saling menyokong, iaitu gambaran masyarakat yang saling membantu.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_2",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "L",
    "q": "Apakah maksud peribahasa 'kecil-kecil cili api'?",
    "options": [
      "Kecil dan tidak berguna",
      "Kecil tetapi berani dan berkuasa",
      "Besar tetapi penakut",
      "Kecil serta pemalu"
    ],
    "correctIndex": 1,
    "explanation": "Cili api kecil tetapi pedas, melambangkan orang kecil yang berani dan berpengaruh.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_3",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "L",
    "q": "Apakah maksud peribahasa 'seperti katak di bawah tempurung'?",
    "options": [
      "Pengetahuan yang luas",
      "Kehidupan yang mewah",
      "Pengetahuan yang cetek",
      "Kerja yang cepat siap"
    ],
    "correctIndex": 2,
    "explanation": "Katak di bawah tempurung hanya melihat ruang yang sempit, iaitu orang yang cetek pengetahuannya.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_4",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "L",
    "q": "Apakah maksud peribahasa 'berat sama dipikul, ringan sama dijinjing'?",
    "options": [
      "Memilih kerja yang senang sahaja",
      "Mengharapkan bantuan orang lain",
      "Bekerja mengikut pangkat",
      "Bekerjasama dalam suka dan duka"
    ],
    "correctIndex": 3,
    "explanation": "Peribahasa ini menggambarkan semangat berkongsi beban dan tanggungjawab.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_5",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "M",
    "q": "Apakah maksud peribahasa 'tak kenal maka tak cinta'?",
    "options": [
      "Kenal dahulu sebelum menyayangi sesuatu",
      "Cinta tidak memerlukan alasan",
      "Jangan mengenali orang asing",
      "Cinta hanya untuk keluarga"
    ],
    "correctIndex": 0,
    "explanation": "Perasaan sayang timbul setelah seseorang mengenali sesuatu atau seseorang dengan lebih dekat.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_6",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "M",
    "q": "Apakah maksud peribahasa 'air dicincang tidak akan putus'?",
    "options": [
      "Air yang dicincang akan membeku",
      "Perhubungan kekeluargaan tidak akan terputus",
      "Pertengkaran yang berpanjangan",
      "Perjanjian yang mudah dibatalkan"
    ],
    "correctIndex": 1,
    "explanation": "Hubungan persaudaraan tetap utuh walaupun berlaku perselisihan.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_7",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "M",
    "q": "Apakah maksud peribahasa 'mencurah air ke daun keladi'?",
    "options": [
      "Menanam pokok di dalam air",
      "Pemberian yang tidak ikhlas",
      "Nasihat yang tidak dipedulikan",
      "Kerja yang sia-sia sejak awal"
    ],
    "correctIndex": 2,
    "explanation": "Daun keladi tidak menyerap air yang dicurah, iaitu nasihat yang tidak diendahkan.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_8",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "M",
    "q": "Apakah maksud peribahasa 'harimau mati meninggalkan belang'?",
    "options": [
      "Orang yang mati tanpa nama",
      "Haiwan yang sangat ganas",
      "Orang kaya yang kedekut",
      "Orang yang mati meninggalkan jasa"
    ],
    "correctIndex": 3,
    "explanation": "Orang yang telah pergi tetap dikenang kerana jasa dan budinya.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_9",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "M",
    "q": "Apakah maksud peribahasa 'sudah jatuh ditimpa tangga'?",
    "options": [
      "Kemalangan yang datang berturut-turut",
      "Kejayaan yang sentiasa bertambah",
      "Jatuh daripada tangga yang rosak",
      "Kerja yang dilakukan dua kali"
    ],
    "correctIndex": 0,
    "explanation": "Peribahasa ini menggambarkan nasib malang yang berlaku silih berganti.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s1_10",
    "unit": "peribahasa",
    "skill": "peribahasa_s1",
    "diff": "H",
    "q": "Apakah maksud peribahasa 'kuman di seberang laut nampak, gajah di depan mata tak nampak'?",
    "options": [
      "Penglihatan yang sangat tajam",
      "Kesalahan orang lain yang kecil kelihatan, kesalahan sendiri yang besar tidak kelihatan",
      "Perjalanan yang jauh dan meletihkan",
      "Perbezaan antara haiwan besar dan kecil"
    ],
    "correctIndex": 1,
    "explanation": "Peribahasa ini menyindir orang yang suka mencari kesalahan orang lain tetapi tidak menyedari kesalahan sendiri.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_1",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "L",
    "q": "Dua keluarga jiran sentiasa tolong-menolong ketika kenduri dan bencana. Peribahasa yang paling sesuai ialah...",
    "options": [
      "Seperti katak di bawah tempurung",
      "Mencurah air ke daun keladi",
      "Bagai aur dengan tebing",
      "Harimau mati meninggalkan belang"
    ],
    "correctIndex": 2,
    "explanation": "Sikap saling membantu antara jiran digambarkan oleh 'bagai aur dengan tebing'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_2",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "L",
    "q": "Farid bertubuh kecil tetapi berani menegur pelajar besar yang membuang sampah merata-rata. Peribahasa yang sesuai ialah...",
    "options": [
      "Seperti katak di bawah tempurung",
      "Air dicincang tidak akan putus",
      "Berat sama dipikul, ringan sama dijinjing",
      "Kecil-kecil cili api"
    ],
    "correctIndex": 3,
    "explanation": "Farid kecil tetapi berani, sesuai dengan peribahasa 'kecil-kecil cili api'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_3",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Nasihat guru kepada Haziq tidak diendahkan walaupun sudah berkali-kali dinasihatkan. Peribahasa yang sesuai ialah...",
    "options": [
      "Mencurah air ke daun keladi",
      "Sudah jatuh ditimpa tangga",
      "Tak kenal maka tak cinta",
      "Kecil-kecil cili api"
    ],
    "correctIndex": 0,
    "explanation": "Nasihat yang tidak dipedulikan diibaratkan 'mencurah air ke daun keladi'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_4",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Walaupun selalu bergaduh, dua beradik itu tetap saling menyayangi. Peribahasa yang sesuai ialah...",
    "options": [
      "Bagai aur dengan tebing",
      "Air dicincang tidak akan putus",
      "Seperti katak di bawah tempurung",
      "Harimau mati meninggalkan belang"
    ],
    "correctIndex": 1,
    "explanation": "Hubungan persaudaraan yang tetap utuh diibaratkan 'air dicincang tidak akan putus'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_5",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "L",
    "q": "Amin hanya tahu tentang kampungnya sendiri kerana jarang membaca atau melancong. Peribahasa yang sesuai ialah...",
    "options": [
      "Sudah jatuh ditimpa tangga",
      "Berat sama dipikul, ringan sama dijinjing",
      "Seperti katak di bawah tempurung",
      "Tak kenal maka tak cinta"
    ],
    "correctIndex": 2,
    "explanation": "Pengetahuan yang sempit diibaratkan 'seperti katak di bawah tempurung'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_6",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Puan Salmah suka mengkritik jiran yang membuang sampah, sedangkan rumahnya sendiri penuh dengan sampah. Peribahasa yang sesuai ialah...",
    "options": [
      "Mencurah air ke daun keladi",
      "Kecil-kecil cili api",
      "Bagai aur dengan tebing",
      "Kuman di seberang laut nampak, gajah di depan mata tak nampak"
    ],
    "correctIndex": 3,
    "explanation": "Puan Salmah melihat kesalahan orang lain tetapi tidak nampak kesalahan sendiri yang lebih besar.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_7",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Selepas motosikalnya rosak, dompet Aiman pula dicuri di pasar. Peribahasa yang sesuai ialah...",
    "options": [
      "Sudah jatuh ditimpa tangga",
      "Tak kenal maka tak cinta",
      "Air dicincang tidak akan putus",
      "Harimau mati meninggalkan belang"
    ],
    "correctIndex": 0,
    "explanation": "Kemalangan yang datang berturut-turut diibaratkan 'sudah jatuh ditimpa tangga'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_8",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Penduduk kampung masih mengenang jasa Allahyarham Pak Long yang membina surau kampung. Peribahasa yang sesuai ialah...",
    "options": [
      "Kecil-kecil cili api",
      "Harimau mati meninggalkan belang",
      "Seperti katak di bawah tempurung",
      "Mencurah air ke daun keladi"
    ],
    "correctIndex": 1,
    "explanation": "Jasa orang yang telah meninggal dunia tetap dikenang, iaitu 'harimau mati meninggalkan belang'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_9",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "M",
    "q": "Pasukan bola sepak sekolah berkongsi tugas sama rata semasa kejohanan. Peribahasa yang sesuai ialah...",
    "options": [
      "Bagai aur dengan tebing",
      "Sudah jatuh ditimpa tangga",
      "Berat sama dipikul, ringan sama dijinjing",
      "Tak kenal maka tak cinta"
    ],
    "correctIndex": 2,
    "explanation": "Berkongsi beban dan tanggungjawab secara adil diibaratkan 'berat sama dipikul, ringan sama dijinjing'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_peribahasa_s2_10",
    "unit": "peribahasa",
    "skill": "peribahasa_s2",
    "diff": "H",
    "q": "Mei Lin mula menyayangi kucing peliharaannya selepas mengenalnya beberapa lama. Peribahasa yang paling sesuai ialah...",
    "options": [
      "Bagai aur dengan tebing",
      "Air dicincang tidak akan putus",
      "Kuman di seberang laut nampak, gajah di depan mata tak nampak",
      "Tak kenal maka tak cinta"
    ],
    "correctIndex": 3,
    "explanation": "Perasaan sayang timbul setelah mengenali, iaitu maksud 'tak kenal maka tak cinta'.",
    "ref": "Peribahasa"
  },
  {
    "id": "t2_bm_komsas_s1_1",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "L",
    "q": "Baca baris puisi ini: 'Daun-daun melambai memanggil namaku.' Apakah gaya bahasa dalam baris ini?",
    "options": [
      "Personifikasi",
      "Simile",
      "Hiperbola",
      "Metafora"
    ],
    "correctIndex": 0,
    "explanation": "Daun diberikan sifat manusia, iaitu melambai dan memanggil, jadi ini personifikasi.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_2",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "L",
    "q": "Baca baris puisi ini: 'Senyumannya seperti embun pagi yang sejuk.' Apakah gaya bahasa dalam baris ini?",
    "options": [
      "Metafora",
      "Simile",
      "Personifikasi",
      "Litotes"
    ],
    "correctIndex": 1,
    "explanation": "Kata 'seperti' menunjukkan perbandingan secara langsung, iaitu simile.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_3",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "M",
    "q": "Baca baris puisi ini: 'Kata-katanya pedang yang melukai hati.' Apakah gaya bahasa dalam baris ini?",
    "options": [
      "Simile",
      "Hiperbola",
      "Metafora",
      "Anafora"
    ],
    "correctIndex": 2,
    "explanation": "Kata-kata dibandingkan secara langsung dengan pedang tanpa kata perbandingan, jadi ini metafora.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_4",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "M",
    "q": "Baca baris puisi ini: 'Air matanya mengalir hingga menjadi sungai.' Apakah gaya bahasa dalam baris ini?",
    "options": [
      "Simile",
      "Personifikasi",
      "Epifora",
      "Hiperbola"
    ],
    "correctIndex": 3,
    "explanation": "Gambaran air mata menjadi sungai ialah pernyataan yang dilebih-lebihkan, iaitu hiperbola.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_5",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "L",
    "q": "Baca baris puisi ini: 'Pergi, terus pergi, jangan kembali lagi.' Apakah gaya bahasa dalam baris ini?",
    "options": [
      "Repetisi",
      "Litotes",
      "Simile",
      "Metafora"
    ],
    "correctIndex": 0,
    "explanation": "Kata 'pergi' diulang beberapa kali untuk menegaskan maksud, iaitu repetisi.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_6",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "M",
    "q": "Baca baris puisi ini: 'Bayu berbisik, burung berkicau di dahan.' Apakah gaya bahasa bunyi yang paling menonjol?",
    "options": [
      "Asonansi",
      "Aliterasi",
      "Anafora",
      "Ironi"
    ],
    "correctIndex": 1,
    "explanation": "Pengulangan bunyi konsonan 'b' pada 'bayu', 'berbisik', 'burung', 'berkicau' ialah aliterasi.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_7",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "H",
    "q": "Baca baris puisi ini: 'Engkau sinar pagi, engkau embun, engkau cahaya.' Apakah gaya bahasa pengulangan dalam baris ini?",
    "options": [
      "Epifora",
      "Simile",
      "Anafora",
      "Litotes"
    ],
    "correctIndex": 2,
    "explanation": "Kata 'engkau' diulang pada awal setiap rangkai kata, iaitu anafora.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_8",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "H",
    "q": "Baca dialog ini: 'Bagus sungguh kerja kamu, semua pinggan pecah!' Apakah gaya bahasa dalam dialog ini?",
    "options": [
      "Hiperbola",
      "Personifikasi",
      "Aliterasi",
      "Ironi"
    ],
    "correctIndex": 3,
    "explanation": "Pujian diberikan untuk menyindir keadaan yang sebaliknya, iaitu ironi.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_9",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "M",
    "q": "Pemilik sebuah rumah besar merendah diri semasa menjemput tetamunya: 'Silalah datang ke pondok saya yang buruk ini.' Apakah gaya bahasa dalam ayat ini?",
    "options": [
      "Litotes",
      "Hiperbola",
      "Metafora",
      "Anafora"
    ],
    "correctIndex": 0,
    "explanation": "Penutur merendahkan diri dengan menyebut pondoknya buruk, iaitu litotes.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s1_10",
    "unit": "komsas",
    "skill": "komsas_s1",
    "diff": "H",
    "q": "Baca baris puisi ini: 'Ia datang tanpa salam, pergi tanpa salam.' Apakah gaya bahasa pengulangan dalam baris ini?",
    "options": [
      "Anafora",
      "Epifora",
      "Repetisi kata tunggal",
      "Aliterasi"
    ],
    "correctIndex": 1,
    "explanation": "Frasa 'tanpa salam' diulang pada akhir rangkai kata, iaitu epifora.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_1",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Aku memeluk ibu erat lalu membisikkan terima kasih atas setiap pengorbanannya.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai keberanian",
      "Nilai kejujuran",
      "Nilai kasih sayang",
      "Nilai kesyukuran"
    ],
    "correctIndex": 2,
    "explanation": "Pelukan dan ucapan terima kasih menunjukkan kasih sayang terhadap ibu.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_2",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Walaupun arus deras, dia terjun ke sungai menyelamatkan kanak-kanak itu.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai kesabaran",
      "Nilai kerjasama",
      "Nilai toleransi",
      "Nilai keberanian"
    ],
    "correctIndex": 3,
    "explanation": "Tindakan terjun ke sungai berarus deras menunjukkan keberanian.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_3",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Setiap pagi sebelum ke sekolah, dia menyapu halaman rumah tanpa disuruh.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai tanggungjawab",
      "Nilai keberanian",
      "Nilai patriotisme",
      "Nilai kejujuran"
    ],
    "correctIndex": 0,
    "explanation": "Melakukan tugas tanpa disuruh menunjukkan rasa tanggungjawab.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_4",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Penduduk kampung bergotong-royong membersihkan balai raya.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai kesyukuran",
      "Nilai kerjasama",
      "Nilai kesabaran",
      "Nilai kasih sayang"
    ],
    "correctIndex": 1,
    "explanation": "Bergotong-royong menunjukkan semangat kerjasama antara penduduk.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_5",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Dia mengaku dengan jujur bahawa dia yang memecahkan pasu itu.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai keberanian",
      "Nilai hemah tinggi",
      "Nilai kejujuran",
      "Nilai kesyukuran"
    ],
    "correctIndex": 2,
    "explanation": "Mengaku kesalahan sendiri menunjukkan sifat jujur.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_6",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Dia tabah menerima ujian sakit dan tidak pernah mengeluh.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai kerjasama",
      "Nilai kasih sayang",
      "Nilai patriotisme",
      "Nilai kesabaran"
    ],
    "correctIndex": 3,
    "explanation": "Ketabahan menghadapi ujian tanpa mengeluh menunjukkan kesabaran.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_7",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Keluarga itu bersyukur atas rezeki yang sederhana tetapi cukup.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai kesyukuran",
      "Nilai kejujuran",
      "Nilai keberanian",
      "Nilai toleransi"
    ],
    "correctIndex": 0,
    "explanation": "Rasa cukup dan berterima kasih atas rezeki menunjukkan kesyukuran.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_8",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Murid itu sentiasa menyapa guru dengan sopan dan hormat.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai keberanian",
      "Nilai hormat-menghormati",
      "Nilai kerjasama",
      "Nilai kesyukuran"
    ],
    "correctIndex": 1,
    "explanation": "Menyapa guru dengan sopan menunjukkan sikap hormat-menghormati.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_9",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Dia bangga menyanyikan lagu Negaraku dengan penuh semangat.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai kesabaran",
      "Nilai kejujuran",
      "Nilai semangat patriotik",
      "Nilai kasih sayang"
    ],
    "correctIndex": 2,
    "explanation": "Menyanyikan lagu kebangsaan dengan bangga menunjukkan semangat patriotik.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_komsas_s2_10",
    "unit": "komsas",
    "skill": "komsas_s2",
    "diff": "H",
    "q": "Baca petikan ini: 'Dia menerima kawan daripada pelbagai kaum tanpa membezakan mereka.' Apakah nilai yang dipaparkan?",
    "options": [
      "Nilai keberanian",
      "Nilai tanggungjawab",
      "Nilai kesyukuran",
      "Nilai toleransi"
    ],
    "correctIndex": 3,
    "explanation": "Menerima kawan tanpa mengira kaum menunjukkan sikap toleransi.",
    "ref": "KOMSAS"
  },
  {
    "id": "t2_bm_pemahaman_s1_1",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "L",
    "q": "Baca petikan ini: 'Sekolah Kebangsaan Seri Murni mengadakan Program Sarapan Sihat setiap hari Selasa. Program ini bermula pada pukul 7.00 pagi di kantin sekolah.' Bilakah program itu diadakan?",
    "options": [
      "Setiap hari Selasa",
      "Setiap hari Isnin",
      "Setiap hari Rabu",
      "Setiap hari Khamis"
    ],
    "correctIndex": 0,
    "explanation": "Petikan menyatakan program itu diadakan setiap hari Selasa.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_2",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "L",
    "q": "Baca petikan ini: 'Bapa Nurul bekerja sebagai nelayan di Kuala Selangor. Dia keluar ke laut pada pukul 5.00 pagi dan biasanya pulang pada pukul 12.00 tengah hari.' Pukul berapakah bapa Nurul biasanya pulang dari laut?",
    "options": [
      "Pukul 5.00 pagi",
      "Pukul 12.00 tengah hari",
      "Pukul 7.00 pagi",
      "Pukul 5.00 petang"
    ],
    "correctIndex": 1,
    "explanation": "Petikan menyatakan dia biasanya pulang pada pukul 12.00 tengah hari.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_3",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "L",
    "q": "Baca petikan ini: 'Perpustakaan sekolah menambah 200 buah buku baharu bulan lalu. Buku cerita kanak-kanak merupakan bahan paling banyak dibeli, iaitu 90 buah.' Berapakah bilangan buku cerita kanak-kanak yang dibeli?",
    "options": [
      "20 buah",
      "110 buah",
      "90 buah",
      "200 buah"
    ],
    "correctIndex": 2,
    "explanation": "Petikan menyebut 90 buah buku cerita kanak-kanak dibeli.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_4",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "M",
    "q": "Baca petikan ini: 'Klinik Desa Bandar Baru dibuka dari pukul 8.00 pagi hingga 5.00 petang. Pada hari Sabtu, klinik ini hanya dibuka sehingga pukul 1.00 tengah hari.' Bilakah klinik itu ditutup pada hari Sabtu?",
    "options": [
      "Pukul 8.00 pagi",
      "Pukul 5.00 petang",
      "Pukul 6.00 petang",
      "Pukul 1.00 tengah hari"
    ],
    "correctIndex": 3,
    "explanation": "Petikan menyatakan pada hari Sabtu klinik dibuka sehingga pukul 1.00 tengah hari.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_5",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "M",
    "q": "Baca petikan ini: 'Aiman menyertai kelab catur kerana dia ingin meningkatkan daya fikir. Dia berlatih setiap Rabu selepas waktu persekolahan.' Mengapakah Aiman menyertai kelab catur?",
    "options": [
      "Kerana ingin meningkatkan daya fikir",
      "Kerana ingin menambah kawan",
      "Kerana dipaksa oleh guru",
      "Kerana ingin memenangi hadiah"
    ],
    "correctIndex": 0,
    "explanation": "Petikan menyatakan sebabnya ialah ingin meningkatkan daya fikir.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_6",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "L",
    "q": "Baca petikan ini: 'Hujan turun sejak pagi menyebabkan perlawanan bola sepak di padang sekolah ditangguhkan ke hari Khamis.' Mengapakah perlawanan itu ditangguhkan?",
    "options": [
      "Kerana padang terlalu panas",
      "Kerana hujan turun sejak pagi",
      "Kerana pemain tidak cukup",
      "Kerana hari sudah lewat"
    ],
    "correctIndex": 1,
    "explanation": "Petikan menyebut hujan sejak pagi sebagai punca penangguhan.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_7",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "L",
    "q": "Baca petikan ini: 'Puan Lim menjual nasi lemak dan kuih-muih di gerai hadapan rumahnya. Gerainya paling ramai pelanggan pada waktu pagi.' Apakah makanan yang dijual oleh Puan Lim?",
    "options": [
      "Roti canai dan teh tarik",
      "Mee goreng dan nasi ayam",
      "Nasi lemak dan kuih-muih",
      "Laksa dan cendol"
    ],
    "correctIndex": 2,
    "explanation": "Petikan menyatakan dia menjual nasi lemak dan kuih-muih.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_8",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "M",
    "q": "Baca petikan ini: 'Program gotong-royong di Taman Seri Indah akan diadakan pada 12 Mac. Penduduk diminta berkumpul di dewan serbaguna pada pukul 8.00 pagi.' Di manakah penduduk diminta berkumpul?",
    "options": [
      "Di padang sekolah",
      "Di balai polis",
      "Di tepi tasik",
      "Di dewan serbaguna"
    ],
    "correctIndex": 3,
    "explanation": "Petikan menyatakan penduduk berkumpul di dewan serbaguna.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_9",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "M",
    "q": "Baca petikan ini: 'Encik Ravi menanam sepuluh batang pokok bunga raya di sekeliling rumahnya. Pokok itu disiram dua kali sehari.' Berapa kalikah pokok bunga raya itu disiram dalam sehari?",
    "options": [
      "Dua kali",
      "Sekali",
      "Tiga kali",
      "Sepuluh kali"
    ],
    "correctIndex": 0,
    "explanation": "Petikan menyatakan pokok itu disiram dua kali sehari.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s1_10",
    "unit": "pemahaman",
    "skill": "pemahaman_s1",
    "diff": "M",
    "q": "Baca petikan ini: 'Kelas 6 Bestari memenangi pertandingan nyanyian sempena Bulan Kemerdekaan. Lagu yang dinyanyikan bertajuk Damai Selamanya.' Apakah tajuk lagu yang dinyanyikan oleh Kelas 6 Bestari?",
    "options": [
      "Sejahtera Malaysia",
      "Damai Selamanya",
      "Negaraku Tercinta",
      "Bunga Raya"
    ],
    "correctIndex": 1,
    "explanation": "Petikan menyatakan lagu itu bertajuk Damai Selamanya.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_1",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Ramai murid mengulang kaji pelajaran pada lewat malam. Akibatnya, mereka berasa mengantuk di dalam kelas dan tidak dapat menumpukan perhatian. Prestasi mereka akhirnya menurun.' Apakah rumusan yang paling tepat bagi petikan ini?",
    "options": [
      "Murid perlu belajar sehingga larut malam setiap hari",
      "Prestasi murid menurun kerana guru kurang mengajar",
      "Mengulang kaji lewat malam boleh menjejaskan prestasi kerana murid mengantuk di kelas",
      "Mengantuk di dalam kelas tanda murid rajin"
    ],
    "correctIndex": 2,
    "explanation": "Petikan menghubungkan belajar lewat malam dengan rasa mengantuk dan penurunan prestasi.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_2",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Kampung Sungai Batu kini mempunyai jalan bertaraf tar. Bas dan teksi juga mula masuk ke kampung itu. Anak-anak penduduk kini boleh ke sekolah dengan lebih mudah.' Apakah kesimpulan tentang kesan pembangunan jalan itu?",
    "options": [
      "Penduduk kampung berhenti bekerja",
      "Bilangan murid sekolah berkurang",
      "Kampung itu menjadi sunyi",
      "Kemudahan pengangkutan penduduk bertambah baik"
    ],
    "correctIndex": 3,
    "explanation": "Jalan bertaraf tar dan pengangkutan awam memudahkan perjalanan penduduk.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_3",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Encik Tan mengumpul surat khabar lama setiap minggu. Wang hasil jualan surat khabar itu disumbangkan kepada tabung kebajikan sekolah.' Apakah tujuan Encik Tan mengumpul surat khabar lama?",
    "options": [
      "Untuk menyumbang wang kepada tabung kebajikan sekolah",
      "Untuk dijual kepada rakannya",
      "Untuk membuat hiasan dinding",
      "Untuk membakar sampah"
    ],
    "correctIndex": 0,
    "explanation": "Wang jualan surat khabar lama disumbangkan kepada tabung kebajikan sekolah.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_4",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Pokok bakau di pesisir pantai menahan hakisan ombak. Kawasan itu juga menjadi tempat pembiakan ikan. Oleh itu, pokok bakau perlu dipelihara.' Apakah idea utama petikan ini?",
    "options": [
      "Cara menanam pokok bakau",
      "Kepentingan pokok bakau kepada alam sekitar",
      "Harga ikan di pesisir pantai",
      "Bahaya ombak besar"
    ],
    "correctIndex": 1,
    "explanation": "Petikan menekankan peranan pokok bakau menahan hakisan dan menjadi tempat pembiakan ikan.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_5",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Aina selalu merancang jadual hariannya. Dia menetapkan masa untuk belajar, berehat dan membantu ibu. Kerjanya selesai tepat pada masanya.' Apakah rumusan tentang cara Aina mengurus masa?",
    "options": [
      "Aina tidak suka membantu ibu",
      "Aina belajar tanpa jadual",
      "Perancangan jadual harian membantu kerjanya selesai tepat pada masa",
      "Aina sentiasa menangguhkan kerja"
    ],
    "correctIndex": 2,
    "explanation": "Petikan menunjukkan perancangan jadual menjadikan kerja Aina selesai tepat pada masa.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_6",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Pasar malam Taman Melati semakin sesak kerana tiada tempat letak kereta yang mencukupi. Pengunjung terpaksa meletakkan kenderaan di tepi jalan sehingga mengganggu lalu lintas.' Apakah masalah utama di pasar malam itu?",
    "options": [
      "Terlalu banyak gerai makanan",
      "Harga barang terlalu murah",
      "Pasar malam dibuka terlalu awal",
      "Kekurangan tempat letak kereta"
    ],
    "correctIndex": 3,
    "explanation": "Petikan menyebut kesesakan berlaku kerana tiada tempat letak kereta yang mencukupi.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_7",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "M",
    "q": "Baca petikan ini: 'Murid yang membaca buku setiap hari mempunyai kosa kata yang lebih luas. Mereka juga lebih mudah memahami soalan peperiksaan.' Apakah kesimpulan tentang tabiat membaca?",
    "options": [
      "Membaca membantu penguasaan kosa kata dan pemahaman soalan",
      "Membaca hanya untuk hiburan",
      "Membaca tidak berkaitan dengan peperiksaan",
      "Membaca menjadikan murid malas"
    ],
    "correctIndex": 0,
    "explanation": "Petikan mengaitkan tabiat membaca dengan kosa kata luas dan pemahaman soalan.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_8",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "H",
    "q": "Baca petikan ini: 'Sungai di belakang kilang itu kini berwarna hitam dan berbau busuk. Pemeriksa menemui sisa kilang di saluran yang mengalir ke sungai. Penduduk kampung tidak lagi menggunakan air sungai itu untuk apa-apa tujuan.' Apakah punca keadaan sungai itu?",
    "options": [
      "Musim kemarau yang panjang",
      "Pencemaran daripada kilang",
      "Pembinaan jambatan baharu",
      "Pertambahan ikan di sungai"
    ],
    "correctIndex": 1,
    "explanation": "Sisa yang ditemui di saluran mengaitkan pencemaran dengan kilang.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_9",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "L",
    "q": "Baca petikan ini: 'Ibu menghadiahkan sebatang pen kepada Sara kerana dia berjaya dalam peperiksaan. Sara berjanji akan terus belajar bersungguh-sungguh.' Apakah sebab ibu menghadiahkan pen kepada Sara?",
    "options": [
      "Kerana Sara sudah dewasa",
      "Kerana pen itu sudah rosak",
      "Kerana Sara berjaya dalam peperiksaan",
      "Kerana Sara meminta wang"
    ],
    "correctIndex": 2,
    "explanation": "Petikan menyatakan hadiah diberikan kerana Sara berjaya dalam peperiksaan.",
    "ref": "Pemahaman"
  },
  {
    "id": "t2_bm_pemahaman_s2_10",
    "unit": "pemahaman",
    "skill": "pemahaman_s2",
    "diff": "H",
    "q": "Baca petikan ini: 'Program cuci tangan sebelum makan dijalankan di semua kelas. Bilangan murid yang sakit perut berkurang selepas program itu.' Apakah kesan program cuci tangan?",
    "options": [
      "Murid tidak lagi makan di sekolah",
      "Bilangan kelas bertambah",
      "Murid lebih suka bermain di luar",
      "Bilangan murid yang sakit perut berkurang"
    ],
    "correctIndex": 3,
    "explanation": "Petikan menyatakan bilangan murid yang sakit perut berkurang selepas program dijalankan.",
    "ref": "Pemahaman"
  }
];
  if (typeof module === "object" && module.exports) module.exports = ITEMS;
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.bm = (App.Pools.t2.bm || []).concat(ITEMS);
})(typeof window !== "undefined" ? window : globalThis);
