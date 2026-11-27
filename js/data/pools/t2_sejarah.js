/**
 * Tingkatan 2 Sejarah (KSSM) static skill-tagged MCQ pool.
 * 270 items (27 skills x 10 items) aligned with js/data/curriculum/t2_sejarah.js.
 * Gate 1 schema checked; Gate 2 independent blind solve (gemini-4-neon, 270/270 exact agree, 0 flags, 28/Nov/2026).
 */
(function (global) {
  "use strict";

  const ITEMS = [
  {
    "id": "t2_sej_b1_s1_01",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Apakah maksud Alam Melayu?",
    "options": [
      "Kawasan merangkumi Semenanjung Tanah Melayu dan Kepulauan Melayu",
      "Kawasan yang terhad kepada Semenanjung Tanah Melayu",
      "Wilayah jajahan Portugis di bahagian Asia Tenggara",
      "Kawasan perdagangan di sekitar Selat Melaka sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Alam Melayu merujuk kawasan yang luas, iaitu Semenanjung Tanah Melayu serta Kepulauan Melayu yang meliputi Sumatera, Jawa, Borneo dan Sulawesi. Istilah yang terhad kepada Semenanjung sahaja ialah Tanah Melayu.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_02",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah BUKAN ciri sesebuah kerajaan Alam Melayu?",
    "options": [
      "Mempunyai raja sebagai pemerintah tertinggi",
      "Ketua kerajaan dipilih melalui pilihan raya",
      "Mempunyai wilayah pengaruh yang tersendiri",
      "Mempunyai rakyat yang mendiami wilayah tersebut"
    ],
    "correctIndex": 1,
    "explanation": "Kerajaan Alam Melayu bersifat pemerintahan beraja, jadi raja mewarisi takhta dan bukannya dipilih melalui pilihan raya. Tiga ciri yang lain memang menjadi asas sesebuah kerajaan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_03",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Kawasan manakah yang termasuk dalam Kepulauan Melayu?",
    "options": [
      "Taiwan",
      "Australia",
      "Sulawesi",
      "New Zealand"
    ],
    "correctIndex": 2,
    "explanation": "Sulawesi ialah salah satu pulau dalam Kepulauan Melayu bersama Sumatera, Jawa dan Borneo. Taiwan, Australia dan New Zealand terletak di luar lingkungan Alam Melayu.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_04",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Siapakah yang memegang kedudukan tertinggi dalam sesebuah kerajaan Alam Melayu?",
    "options": [
      "Bendahara",
      "Syahbandar",
      "Penghulu",
      "Raja"
    ],
    "correctIndex": 3,
    "explanation": "Raja ialah pemerintah tertinggi yang mengetuai pentadbiran, undang-undang dan urusan agama. Bendahara, Syahbandar dan Penghulu hanya membantu raja dalam tugas tertentu.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_05",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "L",
    "q": "Apakah istilah bagi kawasan yang berada di bawah pengaruh sesebuah kerajaan?",
    "options": [
      "Wilayah",
      "Entrepot",
      "Prasasti",
      "Kasta"
    ],
    "correctIndex": 0,
    "explanation": "Wilayah ialah kawasan yang diperintah dan berada di bawah pengaruh seseorang raja. Entrepot pula merujuk pelabuhan pengumpulan barang, manakala prasasti ialah batu bersurat.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_06",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Mengapakah sesebuah penempatan awal masyarakat Melayu belum boleh dianggap sebagai sebuah kerajaan?",
    "options": [
      "Kerana penduduknya masih tinggal di kawasan pedalaman",
      "Kerana belum mempunyai raja, wilayah, rakyat dan pemerintahan tersusun",
      "Kerana kegiatan ekonominya hanya berbentuk pertanian sara diri",
      "Kerana belum menjalinkan hubungan dengan kerajaan China"
    ],
    "correctIndex": 1,
    "explanation": "Sesebuah penempatan hanya menjadi kerajaan apabila mempunyai raja, wilayah pengaruh, rakyat dan sistem pemerintahan yang tersusun. Kedudukan di pedalaman atau jenis kegiatan ekonomi tidak menentukan taraf sesebuah kerajaan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_07",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Apakah perbezaan antara istilah Alam Melayu dengan Tanah Melayu?",
    "options": [
      "Alam Melayu hanya merujuk kawasan di sekitar Selat Melaka",
      "Tanah Melayu merangkumi seluruh Kepulauan Melayu",
      "Alam Melayu merangkumi kawasan lebih luas termasuk Kepulauan Melayu",
      "Kedua-dua istilah merujuk kawasan yang sama luasnya"
    ],
    "correctIndex": 2,
    "explanation": "Alam Melayu meliputi Semenanjung Tanah Melayu dan seluruh Kepulauan Melayu, manakala Tanah Melayu hanya merujuk Semenanjung. Jadi Alam Melayu jauh lebih luas daripada Tanah Melayu.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_08",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "M",
    "q": "Seorang murid mendakwa kerajaan Alam Melayu hanya wujud di Semenanjung Tanah Melayu. Kenyataan manakah paling tepat untuk membetulkan dakwaan itu?",
    "options": [
      "Kerajaan Alam Melayu sebenarnya hanya wujud di Pulau Sumatera",
      "Kerajaan Alam Melayu terletak sepenuhnya di Vietnam dan Kemboja",
      "Kerajaan Alam Melayu hanya muncul selepas kedatangan Islam",
      "Kerajaan Alam Melayu turut berkembang di Sumatera, Jawa, Borneo dan Sulawesi"
    ],
    "correctIndex": 3,
    "explanation": "Kerajaan Alam Melayu bukan hanya di Semenanjung, malah turut berkembang di Sumatera, Jawa, Borneo dan Sulawesi. Dakwaan bahawa kerajaan ini hanya muncul selepas kedatangan Islam juga salah kerana kerajaan awal seperti Funan dan Srivijaya wujud lebih awal.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_09",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Apakah kesimpulan paling tepat tentang hubungan antara raja, wilayah dan rakyat dalam sesebuah kerajaan Alam Melayu?",
    "options": [
      "Raja memerintah wilayah dan rakyat melalui sistem pemerintahan yang tersusun",
      "Raja hanya berperanan dalam urusan agama manakala wilayah ditadbir pedagang",
      "Rakyat boleh memilih raja baharu apabila wilayah bertambah luas",
      "Wilayah sesebuah kerajaan ditentukan sepenuhnya oleh kuasa asing"
    ],
    "correctIndex": 0,
    "explanation": "Ketiga-tiga ciri ini saling berkait: raja memerintah wilayah dan rakyat melalui pembesar serta undang-undang. Raja bukan sekadar simbol agama, dan wilayah tidak ditentukan oleh pedagang atau kuasa asing.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s1_10",
    "unit": "b1",
    "skill": "b1_s1",
    "diff": "H",
    "q": "Mengapakah sesetengah penempatan di pesisir pantai tidak berkembang menjadi kerajaan yang besar walaupun terletak berhampiran laut?",
    "options": [
      "Kerana penduduknya menolak kegiatan perdagangan maritim",
      "Kerana kawasan tersebut tidak mempunyai hasil hutan langsung",
      "Kerana ketiadaan kepimpinan tersusun dan wilayah pengaruh yang jelas",
      "Kerana pedagang asing tidak dibenarkan berlabuh di situ"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan berhampiran laut hanya menjadi kelebihan apabila disertai kepimpinan tersusun dan wilayah pengaruh yang jelas. Tanpa ciri kerajaan tersebut, penempatan itu kekal sebagai petempatan biasa sahaja.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_01",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Kerajaan Funan terletak di kawasan yang kini dikenali sebagai negara",
    "options": [
      "Vietnam",
      "Kemboja",
      "Thailand",
      "Filipina"
    ],
    "correctIndex": 1,
    "explanation": "Funan ialah kerajaan awal yang berpusat di kawasan Kemboja hari ini. Kerajaan yang terletak di Vietnam tengah pula ialah Champa.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_02",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Siapakah pengasas Kerajaan Majapahit?",
    "options": [
      "Hayam Wuruk",
      "Gajah Mada",
      "Raden Wijaya",
      "Dapunta Hyang"
    ],
    "correctIndex": 2,
    "explanation": "Majapahit diasaskan oleh Raden Wijaya di Jawa Timur. Hayam Wuruk ialah raja yang membawa kemuncak kegemilangan, manakala Gajah Mada ialah patih yang terkenal.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_03",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Kerajaan Champa terletak di bahagian tengah kawasan yang kini dikenali sebagai",
    "options": [
      "Kemboja",
      "Thailand",
      "Filipina",
      "Vietnam"
    ],
    "correctIndex": 3,
    "explanation": "Champa terletak di bahagian tengah Vietnam hari ini. Kemboja pula menjadi lokasi kerajaan Funan dan Angkor.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_04",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Di manakah terletaknya pusat pemerintahan Kerajaan Srivijaya?",
    "options": [
      "Palembang",
      "Angkor",
      "Vyadhapura",
      "Trowulan"
    ],
    "correctIndex": 0,
    "explanation": "Srivijaya berpusat di Palembang, Sumatera Selatan. Angkor dan Vyadhapura terletak di Kemboja, manakala Trowulan ialah pusat Majapahit di Jawa Timur.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_05",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "L",
    "q": "Apakah nama candi terkenal yang dibina semasa kegemilangan Kerajaan Angkor?",
    "options": [
      "Borobudur",
      "Angkor Wat",
      "Prambanan",
      "Muara Jambi"
    ],
    "correctIndex": 1,
    "explanation": "Angkor Wat dibina semasa pemerintahan Suryavarman II dan menjadi lambang kegemilangan Angkor. Borobudur dan Prambanan terletak di Jawa, manakala Muara Jambi di Sumatera.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_06",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Susun kerajaan berikut mengikut kronologi kemunculannya, daripada yang paling awal kepada yang paling akhir.",
    "options": [
      "Champa -> Funan -> Majapahit -> Srivijaya",
      "Funan -> Srivijaya -> Champa -> Majapahit",
      "Funan -> Champa -> Srivijaya -> Majapahit",
      "Srivijaya -> Funan -> Champa -> Majapahit"
    ],
    "correctIndex": 2,
    "explanation": "Funan muncul sekitar abad pertama, diikuti Champa pada abad kedua, Srivijaya pada abad ketujuh dan Majapahit pada tahun 1293. Majapahit muncul paling akhir selepas kemerosotan Srivijaya.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_07",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Kerajaan manakah yang muncul selepas kemerosotan Srivijaya dan kemudian menguasai perdagangan di Kepulauan Melayu?",
    "options": [
      "Funan",
      "Champa",
      "Angkor",
      "Majapahit"
    ],
    "correctIndex": 3,
    "explanation": "Majapahit muncul di Jawa Timur dan mengambil alih pengaruh Srivijaya dalam perdagangan di Kepulauan Melayu. Funan, Champa dan Angkor pula merupakan kerajaan yang lebih awal.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_08",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "M",
    "q": "Mengapakah Srivijaya digelar sebagai kerajaan maritim?",
    "options": [
      "Kerana kekuatannya bergantung pada perdagangan laut dan laluan Selat Melaka",
      "Kerana penduduknya hanya menjalankan pertanian padi di pedalaman",
      "Kerana pemerintahnya membina banyak candi di kawasan daratan",
      "Kerana wilayahnya terletak jauh daripada laluan perdagangan utama"
    ],
    "correctIndex": 0,
    "explanation": "Srivijaya menguasai laluan perdagangan laut di Selat Melaka dan menjadi pusat persinggahan pedagang. Kekuatan ini berasaskan perdagangan maritim, bukan pertanian daratan semata-mata.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_09",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Apakah persamaan utama antara Funan, Srivijaya dan Majapahit?",
    "options": [
      "Ketiga-tiganya terletak di Pulau Jawa",
      "Ketiga-tiganya menguasai laluan perdagangan maritim di wilayah masing-masing",
      "Ketiga-tiganya diasaskan oleh kerabat Kesultanan Melaka",
      "Ketiga-tiganya muncul serentak pada abad ke-9"
    ],
    "correctIndex": 1,
    "explanation": "Ketiga-tiga kerajaan ini bergantung pada penguasaan laluan perdagangan maritim untuk mengukuhkan kedudukan. Hanya Majapahit yang berpusat di Jawa, dan Melaka belum wujud ketika kerajaan-kerajaan ini muncul.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s2_10",
    "unit": "b1",
    "skill": "b1_s2",
    "diff": "H",
    "q": "Mengapakah Angkor tidak digolongkan sebagai kerajaan maritim seperti Srivijaya?",
    "options": [
      "Kerana Angkor tidak mempunyai raja dan pembesar",
      "Kerana Angkor terletak di kawasan yang tidak didiami penduduk",
      "Kerana Angkor hanya muncul selepas kejatuhan Majapahit",
      "Kerana kekuatan Angkor berpunca daripada pertanian padi di daratan Kemboja"
    ],
    "correctIndex": 3,
    "explanation": "Kekuatan Angkor berasaskan pertanian padi dan pentadbiran di kawasan daratan Kemboja, bukan penguasaan laluan laut. Angkor juga mempunyai raja dan pembesar serta muncul sebelum Majapahit.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_01",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Apakah faktor utama yang mendorong kemunculan kerajaan Alam Melayu di kawasan pesisir pantai?",
    "options": [
      "Kemudahan mendapatkan senjata moden",
      "Bantuan ketenteraan daripada kuasa Eropah",
      "Kedudukan strategik berhampiran laluan perdagangan",
      "Kemajuan teknologi percetakan"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan strategik di pesisir pantai membolehkan kerajaan mengawal laluan perdagangan dan mengutip cukai. Senjata moden, bantuan Eropah dan teknologi percetakan tidak terlibat dalam kemunculan kerajaan awal.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_02",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Hasil bumi manakah yang menjadi tarikan utama pedagang asing ke Alam Melayu?",
    "options": [
      "Gandum dan barli",
      "Kain bulu dari Britain",
      "Kuda dari Semenanjung Arab",
      "Rempah ratus dan bijih timah"
    ],
    "correctIndex": 3,
    "explanation": "Rempah ratus dan bijih timah ialah hasil bumi Alam Melayu yang sangat dicari pedagang asing. Gandum, kain bulu dan kuda pula dibawa masuk dari luar wilayah ini.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_03",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Antara berikut, yang manakah faktor kemerosotan sesebuah kerajaan Alam Melayu?",
    "options": [
      "Peperangan dan persaingan kuasa",
      "Kedudukan strategik di laluan perdagangan",
      "Kepimpinan raja yang bijaksana",
      "Kemajuan kegiatan perdagangan maritim"
    ],
    "correctIndex": 0,
    "explanation": "Peperangan dan persaingan kuasa melemahkan kerajaan dari segi ekonomi dan pemerintahan. Tiga pilihan lain pula ialah faktor yang menyumbang kepada kemunculan dan kegemilangan kerajaan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_04",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Apakah kesan peralihan laluan perdagangan terhadap sesebuah kerajaan Alam Melayu?",
    "options": [
      "Kerajaan menjadi lebih kuat dan makmur",
      "Kerajaan kehilangan sumber pendapatan dan pengaruh",
      "Kerajaan menambah wilayah pengaruh baharu",
      "Kerajaan menerima bantuan ketenteraan daripada pedagang"
    ],
    "correctIndex": 1,
    "explanation": "Apabila laluan perdagangan beralih, pelabuhan kerajaan itu kehilangan pedagang, seterusnya pendapatan cukai dan pengaruh politiknya berkurang. Peralihan laluan bukan faktor yang menguatkan kerajaan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_05",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "L",
    "q": "Apakah yang biasanya berlaku kepada kerajaan Alam Melayu yang mempunyai pemerintahan lemah?",
    "options": [
      "Kerajaan itu mendapat bantuan perdagangan yang lebih besar",
      "Kerajaan itu menambah hasil bumi dengan lebih cepat",
      "Kerajaan itu mudah dikuasai atau diserang oleh kuasa lain",
      "Kerajaan itu membina lebih banyak candi untuk rakyat"
    ],
    "correctIndex": 2,
    "explanation": "Pemerintahan yang lemah mewujudkan perpecahan dalaman dan menjadikan kerajaan mudah diserang atau dikuasai kuasa lain. Keadaan ini merupakan faktor kemerosotan, bukan kemajuan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_06",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Mengapakah kemunculan sesebuah kerajaan Alam Melayu bergantung pada gabungan beberapa faktor?",
    "options": [
      "Kerana satu faktor sahaja sudah cukup untuk menjamin kemakmuran",
      "Kerana pedagang asing menentukan siapa yang menjadi raja",
      "Kerana kerajaan hanya boleh muncul di kawasan bergunung-ganang",
      "Kerana kedudukan, hasil bumi dan kepimpinan saling menyokong pertumbuhan kerajaan"
    ],
    "correctIndex": 3,
    "explanation": "Kedudukan strategik menarik pedagang, hasil bumi menyediakan barang dagangan, dan kepimpinan yang bijak mengekalkan kestabilan. Gabungan ketiga-tiga faktor inilah yang membolehkan kerajaan muncul dan berkembang.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_07",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Sebuah kerajaan pesisir mengalami kemerosotan selepas pembesar bertelagah sesama sendiri. Apakah faktor kemerosotan yang paling tepat bagi keadaan ini?",
    "options": [
      "Kelemahan dalaman dalam pemerintahan",
      "Kemunculan teknologi pertanian baharu",
      "Peningkatan hasil hutan di wilayahnya",
      "Kedatangan pedagang asing yang semakin ramai"
    ],
    "correctIndex": 0,
    "explanation": "Pertelagahan pembesar ialah kelemahan dalaman yang memecahkan kesetiaan dan pentadbiran kerajaan. Kemunculan teknologi, hasil hutan dan kedatangan pedagang tidak menyebabkan kemerosotan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_08",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "M",
    "q": "Bagaimanakah perdagangan maritim menyumbang kepada kemunculan kerajaan Alam Melayu?",
    "options": [
      "Pedagang asing membina istana untuk raja tempatan",
      "Pelabuhan yang sibuk menjana cukai dan kekayaan untuk pentadbiran kerajaan",
      "Perdagangan menghalang penduduk daripada menetap di pesisir",
      "Perdagangan membolehkan kerajaan menghapuskan sistem pemerintahan"
    ],
    "correctIndex": 1,
    "explanation": "Pelabuhan yang sibuk mengutip cukai daripada pedagang dan menjana kekayaan untuk membiayai pentadbiran serta pertahanan. Kekayaan inilah yang mengukuhkan kedudukan sesebuah kerajaan.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_09",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Mengapakah Srivijaya dan Majapahit sukar mengekalkan penguasaan wilayah yang luas dalam jangka masa panjang?",
    "options": [
      "Kerana kedua-duanya tidak mempunyai angkatan tentera",
      "Kerana kedua-duanya terletak di kawasan tanpa hasil bumi",
      "Kerana wilayah taklukan mudah goyah apabila kerajaan pusat menjadi lemah",
      "Kerana kedua-duanya menolak kegiatan perdagangan maritim"
    ],
    "correctIndex": 2,
    "explanation": "Kesetiaan wilayah taklukan bergantung pada kekuatan kerajaan pusat. Apabila pusat lemah atau berlaku perebutan kuasa, wilayah taklukan mudah melepaskan diri sehingga pengaruh kerajaan menyusut.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b1_s3_10",
    "unit": "b1",
    "skill": "b1_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang faktor kemerosotan kerajaan Alam Melayu?",
    "options": [
      "Kemerosotan biasanya berpunca daripada gabungan kelemahan dalaman dan tekanan luar",
      "Kemerosotan hanya berlaku akibat bencana alam",
      "Kemerosotan hanya berpunca daripada kelemahan ekonomi",
      "Kemerosotan hanya disebabkan oleh serangan kuasa luar"
    ],
    "correctIndex": 0,
    "explanation": "Kerajaan Alam Melayu lazimnya merosot akibat kelemahan dalaman seperti perebutan kuasa dan ekonomi yang lemah, ditambah pula tekanan kuasa luar. Menyandarkan kemerosotan pada satu faktor sahaja tidak tepat.",
    "ref": "Bab 1, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_01",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah kedudukan raja dalam sistem pemerintahan kerajaan Alam Melayu?",
    "options": [
      "Anggota pembesar yang hanya membantu Bendahara",
      "Pegawai pelabuhan yang mengutip cukai pedagang",
      "Pemimpin yang dipilih oleh rakyat setiap lima tahun",
      "Pemerintah tertinggi yang mengetuai pentadbiran, undang-undang dan agama"
    ],
    "correctIndex": 3,
    "explanation": "Raja ialah pemerintah tertinggi dalam sistem beraja. Baginda mengetuai pentadbiran, penggubalan undang-undang dan urusan agama, bukan sekadar membantu pembesar atau mengutip cukai.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_02",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah maksud daulat dalam konteks pemerintahan beraja Alam Melayu?",
    "options": [
      "Kewibawaan dan kekuasaan yang dimiliki oleh raja",
      "Kesalahan menderhaka kepada raja",
      "Cukai yang dikenakan ke atas pedagang asing",
      "Upacara pelantikan pembesar oleh Bendahara"
    ],
    "correctIndex": 0,
    "explanation": "Daulat merujuk kewibawaan dan kekuasaan raja yang dihormati rakyat. Kesalahan menderhaka pula dipanggil derhaka, iaitu konsep yang berbeza.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_03",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah istilah bagi perbuatan melanggar kesetiaan kepada raja?",
    "options": [
      "Daulat",
      "Derhaka",
      "Entrepot",
      "Prasasti"
    ],
    "correctIndex": 1,
    "explanation": "Derhaka ialah kesalahan melanggar kesetiaan kepada raja dan dianggap kesalahan besar. Daulat pula ialah kewibawaan raja, manakala entrepot dan prasasti bukan istilah pemerintahan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_04",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Siapakah pembesar yang mengetuai pentadbiran kerajaan Alam Melayu selepas raja?",
    "options": [
      "Laksamana",
      "Syahbandar",
      "Bendahara",
      "Temenggung"
    ],
    "correctIndex": 2,
    "explanation": "Bendahara ialah pembesar tertinggi yang mengetuai pentadbiran dan menggantikan raja dalam urusan tertentu. Laksamana, Syahbandar dan Temenggung mempunyai tugas khusus yang berbeza.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_05",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "L",
    "q": "Apakah tugas utama seorang Temenggung?",
    "options": [
      "Mengetuai angkatan laut dalam peperangan",
      "Mengurus hal ehwal pedagang asing di pelabuhan",
      "Menggubal undang-undang bersama raja",
      "Menjaga keselamatan dan ketenteraman awam"
    ],
    "correctIndex": 3,
    "explanation": "Temenggung bertanggungjawab menjaga keselamatan dan ketenteraman awam. Tugas mengetuai angkatan laut ialah Laksamana, manakala urusan pedagang asing di pelabuhan ialah tugas Syahbandar.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_06",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Seorang pembesar mengurus kapal dagang asing yang berlabuh serta mengutip cukai di pelabuhan. Apakah jawatan pembesar tersebut?",
    "options": [
      "Syahbandar",
      "Bendahara",
      "Laksamana",
      "Temenggung"
    ],
    "correctIndex": 0,
    "explanation": "Syahbandar ialah ketua pelabuhan yang mengurus hal ehwal pedagang asing, kapal dan cukai. Bendahara mengurus pentadbiran, Laksamana mengetuai angkatan laut dan Temenggung menjaga keselamatan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_07",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Apakah perbezaan tugas antara Bendahara dengan Laksamana?",
    "options": [
      "Bendahara menjaga pelabuhan manakala Laksamana mengutip cukai",
      "Bendahara mengetuai pentadbiran manakala Laksamana mengetuai angkatan laut",
      "Bendahara mengetuai angkatan laut manakala Laksamana mentadbir kerajaan",
      "Kedua-duanya memegang tugas yang sama dalam pentadbiran"
    ],
    "correctIndex": 1,
    "explanation": "Bendahara mengetuai pentadbiran awam, manakala Laksamana mengetuai angkatan laut. Perbezaan tugas ini penting supaya pentadbiran darat dan pertahanan laut diuruskan dengan baik.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_08",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "M",
    "q": "Mengapakah raja dianggap mempunyai kedudukan istimewa dalam sesebuah kerajaan Alam Melayu?",
    "options": [
      "Kerana baginda memiliki kapal dagang paling banyak",
      "Kerana baginda dipilih oleh pedagang asing",
      "Kerana baginda memegang kuasa tertinggi dalam pemerintahan dan undang-undang",
      "Kerana baginda hanya mengurus upacara keagamaan"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan istimewa raja berpunca daripada kuasa tertinggi dalam pemerintahan, undang-undang dan agama. Baginda tidak dipilih oleh pedagang dan bukan sekadar mengurus upacara keagamaan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_09",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Mengapakah konsep daulat penting kepada kestabilan sesebuah kerajaan Alam Melayu?",
    "options": [
      "Kerana daulat menjadikan raja lebih kaya daripada pedagang",
      "Kerana daulat membolehkan rakyat memilih raja baharu",
      "Kerana daulat menghalang pedagang asing daripada berdagang",
      "Kerana daulat mengukuhkan kesetiaan rakyat terhadap pemerintahan raja"
    ],
    "correctIndex": 3,
    "explanation": "Konsep daulat meletakkan raja pada kedudukan yang dihormati dan sukar dicabar, sekali gus mengukuhkan kesetiaan rakyat. Konsep ini berkaitan kuasa dan kewibawaan, bukan kekayaan atau pemilihan raja.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s1_10",
    "unit": "b2",
    "skill": "b2_s1",
    "diff": "H",
    "q": "Bagaimanakah pembesar membantu mengekalkan kestabilan pentadbiran sesebuah kerajaan Alam Melayu?",
    "options": [
      "Pembesar mengumpul cukai tanpa merujuk kepada raja",
      "Pembesar menjalankan tugas khusus mengikut bidang masing-masing",
      "Pembesar memilih raja baharu apabila berlaku peralihan takhta",
      "Pembesar menghalang raja daripada campur tangan dalam pentadbiran"
    ],
    "correctIndex": 1,
    "explanation": "Pembesar seperti Bendahara, Temenggung, Laksamana dan Syahbandar menjalankan tugas khusus mengikut bidang, membolehkan pentadbiran berjalan lancar. Kuasa mereka masih tertakluk kepada raja.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_01",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah maksud pelabuhan entrepot?",
    "options": [
      "Pusat pengumpulan dan pengedaran barang dagangan",
      "Pelabuhan tentera yang menyimpan senjata",
      "Tempat berlabuh kapal nelayan untuk membaiki jaring",
      "Pusat pemerintahan raja di kawasan pedalaman"
    ],
    "correctIndex": 0,
    "explanation": "Entrepot ialah pelabuhan yang menjadi pusat pengumpulan dan pengedaran barang dagangan dari pelbagai kawasan. Ia bukan sekadar tempat kapal berlabuh atau membaiki alatan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_02",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi utama penduduk kerajaan Alam Melayu yang tinggal di kawasan pedalaman?",
    "options": [
      "Perlombongan bijih timah moden",
      "Pertanian dan pengumpulan hasil hutan",
      "Pembinaan kapal layar dagang",
      "Perdagangan mata wang kertas"
    ],
    "correctIndex": 1,
    "explanation": "Penduduk pedalaman menjalankan pertanian serta memungut hasil hutan seperti rotan, damar dan gaharu. Perlombongan moden dan mata wang kertas bukan kegiatan pada zaman tersebut.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_03",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah hasil hutan yang diperdagangkan di kerajaan Alam Melayu?",
    "options": [
      "Gandum",
      "Kain bulu",
      "Gaharu",
      "Bijih besi British"
    ],
    "correctIndex": 2,
    "explanation": "Gaharu ialah hasil hutan yang dicari kerana baunya dan digunakan sebagai bahan dagangan. Gandum, kain bulu dan bijih besi British pula dibawa masuk dari luar Alam Melayu.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_04",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah maksud pertanian sara diri?",
    "options": [
      "Pertanian untuk tanaman eksport yang mahal",
      "Pertanian yang dijalankan dengan jentera besar",
      "Pertanian yang dikendalikan oleh pedagang asing",
      "Pertanian untuk menyara keperluan keluarga sendiri"
    ],
    "correctIndex": 3,
    "explanation": "Pertanian sara diri ialah penanaman untuk keperluan keluarga sendiri, bukan untuk dieksport. Pertanian komersial pula dijalankan untuk pasaran dan perdagangan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_05",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "L",
    "q": "Apakah barang utama yang dibawa oleh pedagang asing untuk ditukar dengan hasil Alam Melayu?",
    "options": [
      "Kain dan barang logam",
      "Padi dan sayur segar",
      "Rotan dan damar",
      "Rempah ratus dan gaharu"
    ],
    "correctIndex": 0,
    "explanation": "Pedagang asing membawa kain, barang logam dan tembikar untuk ditukar dengan hasil tempatan. Padi, rotan, damar dan rempah ratus pula merupakan hasil yang dikeluarkan dari Alam Melayu.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_06",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Mengapakah pedagang asing berminat berdagang di pelabuhan Alam Melayu?",
    "options": [
      "Kerana pelabuhan tersebut menyediakan kapal percuma",
      "Kerana hasil seperti rempah dan bijih timah sukar diperoleh di tempat lain",
      "Kerana pedagang tidak dikenakan sebarang cukai",
      "Kerana pelabuhan tersebut terletak jauh daripada laluan monsun"
    ],
    "correctIndex": 1,
    "explanation": "Hasil bumi dan hasil hutan Alam Melayu seperti rempah ratus dan bijih timah sangat diperlukan di pasaran luar. Pedagang tetap dikenakan cukai, dan pelabuhan di sini terletak pada laluan perdagangan yang penting.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_07",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Apakah perbezaan antara pertanian sara diri dengan pertanian komersial?",
    "options": [
      "Pertanian sara diri menggunakan jentera manakala komersial menggunakan tenaga manusia",
      "Pertanian sara diri dijalankan di laut manakala komersial di darat",
      "Pertanian sara diri untuk keperluan sendiri manakala komersial untuk pasaran",
      "Pertanian sara diri dijalankan oleh pedagang manakala komersial oleh petani"
    ],
    "correctIndex": 2,
    "explanation": "Pertanian sara diri menghasilkan makanan untuk keluarga, sedangkan pertanian komersial menghasilkan tanaman untuk dijual di pasaran. Kedua-duanya dijalankan di darat oleh petani tempatan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_08",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "M",
    "q": "Sebuah pelabuhan menerima lada dari Sumatera, kain dari India dan tembikar dari China sebelum barang tersebut diedarkan semula. Apakah peranan pelabuhan itu?",
    "options": [
      "Pusat pemerintahan raja",
      "Pusat keagamaan Hindu-Buddha",
      "Pusat pengumpulan hasil hutan",
      "Pusat perdagangan entrepot"
    ],
    "correctIndex": 3,
    "explanation": "Pelabuhan yang mengumpul barang dari pelbagai kawasan dan mengedarkannya semula berperanan sebagai entrepot. Peranan ini berbeza daripada pusat pemerintahan atau pusat keagamaan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_09",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Mengapakah kegiatan ekonomi Alam Melayu tidak boleh disimpulkan sebagai perdagangan maritim semata-mata?",
    "options": [
      "Kerana penduduk juga bergantung pada pertanian dan hasil hutan",
      "Kerana perdagangan maritim tidak pernah dijalankan di Alam Melayu",
      "Kerana semua penduduk bekerja sebagai pedagang asing",
      "Kerana kegiatan pertanian hanya dijalankan di kawasan laut"
    ],
    "correctIndex": 0,
    "explanation": "Penduduk Alam Melayu menjalankan pelbagai kegiatan ekonomi, iaitu perdagangan maritim, pertanian dan pengumpulan hasil hutan. Perdagangan maritim memang penting, tetapi bukan satu-satunya kegiatan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s2_10",
    "unit": "b2",
    "skill": "b2_s2",
    "diff": "H",
    "q": "Bagaimanakah hasil hutan menyumbang kepada kedudukan sesebuah pelabuhan Alam Melayu?",
    "options": [
      "Hasil hutan menggantikan sepenuhnya keperluan pedagang asing",
      "Hasil hutan menyebabkan pelabuhan ditutup kepada pedagang tempatan",
      "Hasil hutan menjadi barang dagangan yang menarik kedatangan pedagang",
      "Hasil hutan hanya digunakan untuk membina istana raja"
    ],
    "correctIndex": 2,
    "explanation": "Hasil hutan seperti gaharu, damar dan rotan menjadi barang dagangan yang bernilai, seterusnya menarik lebih ramai pedagang ke pelabuhan. Hasil ini tidak menggantikan pedagang asing mahupun menutup pelabuhan.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_01",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah mata wang yang lazim digunakan dalam perdagangan di kerajaan Alam Melayu?",
    "options": [
      "Wang kertas moden",
      "Keping timah dan syiling logam",
      "Duit syiling plastik",
      "Mata wang dolar Amerika"
    ],
    "correctIndex": 1,
    "explanation": "Mata wang utama ialah keping timah serta syiling emas dan perak. Wang kertas, syiling plastik dan dolar Amerika bukan mata wang yang digunakan pada zaman itu.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_02",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Siapakah yang bertanggungjawab mengutip cukai daripada pedagang di pelabuhan?",
    "options": [
      "Laksamana",
      "Bendahara",
      "Syahbandar",
      "Penghulu"
    ],
    "correctIndex": 2,
    "explanation": "Syahbandar mengurus pelabuhan dan mengutip cukai daripada pedagang mengikut asal dan jenis dagangan. Laksamana, Bendahara dan Penghulu mempunyai tugas lain dalam pentadbiran.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_03",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Undang-undang manakah yang mengawal urusan perdagangan dan pelayaran di laut?",
    "options": [
      "Hukum Kanun Melaka",
      "Adat Perpatih",
      "Undang-undang Tubuh Kerajaan",
      "Undang-undang Laut Melaka"
    ],
    "correctIndex": 3,
    "explanation": "Undang-undang Laut Melaka mengawal hal ehwal pelayaran, perdagangan dan keselamatan di laut. Hukum Kanun Melaka pula mengawal pemerintahan dan jenayah di darat.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_04",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah tujuan cukai dikenakan ke atas pedagang asing di pelabuhan?",
    "options": [
      "Untuk menambah pendapatan kerajaan",
      "Untuk menghalang pedagang asing daripada berdagang",
      "Untuk membiayai pembinaan candi di pedalaman",
      "Untuk membayar gaji kepada pedagang asing"
    ],
    "correctIndex": 0,
    "explanation": "Cukai pelabuhan menambah pendapatan kerajaan untuk membiayai pentadbiran dan pembangunan. Cukai tidak bertujuan menghalang pedagang, kerana pelabuhan memerlukan perdagangan yang ramai.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_05",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "L",
    "q": "Apakah yang dimaksudkan dengan syiling emas dalam konteks mata wang kerajaan Alam Melayu?",
    "options": [
      "Barang dagangan yang dibawa dari India",
      "Wang logam bernilai tinggi yang digunakan dalam perdagangan",
      "Peralatan yang digunakan oleh tukang emas",
      "Cukai yang dikenakan ke atas hasil hutan"
    ],
    "correctIndex": 1,
    "explanation": "Syiling emas ialah wang logam bernilai tinggi yang digunakan dalam urus niaga tertentu. Ia berbeza daripada cukai mahupun barang dagangan biasa.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_06",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Seorang pedagang dari India dan seorang pedagang dari China berlabuh di pelabuhan yang sama. Bagaimanakah cukai dikenakan kepada mereka?",
    "options": [
      "Kedua-duanya membayar cukai yang sama tanpa mengira asal",
      "Hanya pedagang China dikenakan cukai",
      "Cukai dikenakan mengikut asal dan jenis dagangan masing-masing",
      "Kedua-duanya dikecualikan daripada cukai"
    ],
    "correctIndex": 2,
    "explanation": "Cukai pelabuhan dikenakan mengikut asal pedagang dan jenis barang yang dibawa. Jadi kadar cukai boleh berbeza, bukan seragam atau dikecualikan sepenuhnya.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_07",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Apakah perbezaan antara Undang-undang Laut Melaka dengan Hukum Kanun Melaka?",
    "options": [
      "Undang-undang Laut mengawal pemerintahan manakala Hukum Kanun mengawal pelayaran",
      "Kedua-duanya mengawal perkara yang sama di pelabuhan",
      "Undang-undang Laut hanya terpakai kepada pedagang Eropah",
      "Undang-undang Laut mengawal perdagangan di laut manakala Hukum Kanun mengawal pemerintahan dan jenayah"
    ],
    "correctIndex": 3,
    "explanation": "Undang-undang Laut Melaka memberi tumpuan kepada hal ehwal pelayaran dan perdagangan, manakala Hukum Kanun Melaka mengawal pemerintahan, adat dan jenayah. Kedua-duanya saling melengkapi.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_08",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "M",
    "q": "Mengapakah keping timah sesuai dijadikan mata wang dalam perdagangan maritim Alam Melayu?",
    "options": [
      "Kerana timah mempunyai nilai yang diiktiraf dan mudah dibawa",
      "Kerana timah hanya boleh digunakan oleh raja",
      "Kerana timah mudah ditemui di kawasan laut",
      "Kerana timah sukar dicari di luar Alam Melayu"
    ],
    "correctIndex": 0,
    "explanation": "Keping timah diterima kerana nilainya diiktiraf dalam perdagangan dan mudah dibawa oleh pedagang. Timah juga merupakan hasil bumi yang dikenali di kawasan ini.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_09",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Mengapakah sistem percukaian yang teratur penting kepada kegemilangan sesebuah pelabuhan?",
    "options": [
      "Kerana cukai menghalang semua pedagang asing daripada berlabuh",
      "Kerana cukai yang teratur menjamin pendapatan kerajaan dan keadilan kepada pedagang",
      "Kerana cukai membolehkan pedagang memilih pembesar pelabuhan",
      "Kerana cukai menghapuskan keperluan undang-undang laut"
    ],
    "correctIndex": 1,
    "explanation": "Sistem percukaian yang teratur memberi pendapatan tetap kepada kerajaan dan meyakinkan pedagang bahawa urusan mereka diurus secara adil. Cukai yang adil menggalakkan perdagangan, bukan menghalangnya.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b2_s3_10",
    "unit": "b2",
    "skill": "b2_s3",
    "diff": "H",
    "q": "Apakah kesimpulan tentang peranan undang-undang maritim dalam ekonomi kerajaan Alam Melayu?",
    "options": [
      "Undang-undang maritim hanya menyenaraikan jenis barang dagangan",
      "Undang-undang maritim menghalang pedagang tempatan daripada berdagang",
      "Undang-undang maritim menggantikan fungsi Syahbandar di pelabuhan",
      "Undang-undang maritim mewujudkan keyakinan dan melancarkan urusan perdagangan"
    ],
    "correctIndex": 3,
    "explanation": "Undang-undang maritim menetapkan peraturan yang adil, sehingga pedagang yakin berdagang dan urusan pelabuhan berjalan lancar. Ia menyokong tugas Syahbandar, bukan menggantikannya.",
    "ref": "Bab 2, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_01",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah dua golongan utama dalam struktur sosial masyarakat kerajaan Alam Melayu?",
    "options": [
      "Golongan pedagang dan golongan petani",
      "Golongan tentera dan golongan imam",
      "Golongan pemerintah dan golongan diperintah",
      "Golongan asing dan golongan tempatan"
    ],
    "correctIndex": 2,
    "explanation": "Struktur sosial masyarakat Alam Melayu terbahagi kepada golongan pemerintah di lapisan atas dan golongan diperintah di lapisan bawah. Asas pembahagian ini ialah kedudukan dalam pemerintahan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_02",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Siapakah yang tergolong dalam golongan pemerintah dalam masyarakat Alam Melayu?",
    "options": [
      "Petani dan nelayan",
      "Peniaga dan tukang",
      "Hamba dan pekerja",
      "Raja dan pembesar"
    ],
    "correctIndex": 3,
    "explanation": "Golongan pemerintah terdiri daripada raja dan pembesar yang memegang kuasa pentadbiran. Petani, nelayan, peniaga dan hamba pula tergolong dalam golongan diperintah.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_03",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Sistem kasta dalam sesetengah kerajaan Alam Melayu dipengaruhi oleh agama",
    "options": [
      "Hindu-Buddha",
      "Islam",
      "Kristian",
      "Yahudi"
    ],
    "correctIndex": 0,
    "explanation": "Sistem kasta dibawa bersama pengaruh Hindu-Buddha dari India. Pengaruhnya lebih kuat di kerajaan yang berorientasikan Hindu-Buddha seperti Angkor dan Majapahit.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_04",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah golongan yang terletak pada lapisan paling bawah dalam struktur sosial masyarakat Alam Melayu?",
    "options": [
      "Pembesar",
      "Hamba",
      "Syahbandar",
      "Pendeta"
    ],
    "correctIndex": 1,
    "explanation": "Hamba menduduki lapisan paling bawah dalam struktur sosial. Pembesar dan Syahbandar tergolong dalam golongan pemerintah, manakala pendeta pula golongan berilmu yang dihormati.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_05",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "L",
    "q": "Apakah kegiatan utama golongan diperintah dalam masyarakat Alam Melayu?",
    "options": [
      "Menggubal undang-undang kerajaan",
      "Mengetuai angkatan tentera laut",
      "Bekerja sebagai petani, nelayan dan tukang",
      "Mengurus hal ehwal pedagang asing"
    ],
    "correctIndex": 2,
    "explanation": "Golongan diperintah bekerja sebagai petani, nelayan, tukang dan pedagang kecil. Tugas menggubal undang-undang, mengetuai tentera dan mengurus pedagang asing ialah tugas golongan pemerintah.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_06",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Bagaimanakah mobiliti sosial berlaku dalam masyarakat kerajaan Alam Melayu?",
    "options": [
      "Hanya melalui perintah raja tanpa sebarang syarat",
      "Melalui penjualan hasil hutan kepada pedagang",
      "Melalui pemilihan umum yang diadakan setiap tahun",
      "Melalui perkahwinan, pendidikan dan keagamaan"
    ],
    "correctIndex": 3,
    "explanation": "Mobiliti sosial dalam masyarakat Alam Melayu tidak tertutup sepenuhnya kerana seseorang boleh memperbaiki kedudukan melalui perkahwinan, pendidikan dan peranan keagamaan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_07",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Mengapakah sistem kasta tidak diamalkan secara seragam di semua kerajaan Alam Melayu?",
    "options": [
      "Kerana pengaruh Hindu-Buddha lebih kuat di sesetengah kerajaan sahaja",
      "Kerana semua kerajaan menolak pengaruh India",
      "Kerana sistem kasta hanya sesuai untuk kegiatan pertanian",
      "Kerana sistem kasta hanya diamalkan oleh pedagang asing"
    ],
    "correctIndex": 0,
    "explanation": "Sistem kasta berkait rapat dengan pengaruh Hindu-Buddha. Oleh itu, kerajaan yang lebih terdedah kepada pengaruh tersebut lebih kuat mengamalkan kasta berbanding kerajaan lain.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_08",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "M",
    "q": "Apakah perbezaan kedudukan antara pembesar dengan rakyat biasa dalam masyarakat Alam Melayu?",
    "options": [
      "Pembesar bekerja sebagai petani manakala rakyat biasa mengutip cukai",
      "Pembesar membantu raja mentadbir manakala rakyat biasa menjalankan kegiatan harian",
      "Pembesar dipilih oleh rakyat manakala raja dilantik oleh pembesar",
      "Pembesar dan rakyat biasa mempunyai tugas yang sama"
    ],
    "correctIndex": 1,
    "explanation": "Pembesar ialah golongan pemerintah yang membantu raja dalam pentadbiran, manakala rakyat biasa menjalankan kegiatan ekonomi harian. Kedua-duanya berada pada lapisan sosial yang berbeza.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_09",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Mengapakah masyarakat Alam Melayu tidak boleh dianggap sebagai masyarakat kelas tertutup sepenuhnya?",
    "options": [
      "Kerana rakyat boleh menukar raja bila-bila masa",
      "Kerana semua penduduk mempunyai harta yang sama banyak",
      "Kerana terdapat saluran seperti pendidikan dan perkahwinan untuk meningkatkan kedudukan",
      "Kerana sistem kasta tidak pernah wujud di Alam Melayu"
    ],
    "correctIndex": 2,
    "explanation": "Walaupun struktur sosial berlapis, terdapat saluran mobiliti seperti pendidikan, perkahwinan dan peranan keagamaan. Ini bermakna kedudukan sosial tidak kekal sepenuhnya.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s1_10",
    "unit": "b3",
    "skill": "b3_s1",
    "diff": "H",
    "q": "Apakah kesan pengaruh Hindu-Buddha terhadap struktur sosial kerajaan Alam Melayu?",
    "options": [
      "Kedudukan raja dikukuhkan melalui konsep ketuhanan raja",
      "Semua penduduk menjadi pembesar",
      "Golongan pedagang dihapuskan sepenuhnya",
      "Raja kehilangan kuasa dalam pentadbiran"
    ],
    "correctIndex": 0,
    "explanation": "Pengaruh Hindu-Buddha memperkenalkan konsep raja sebagai pemerintah yang berwibawa dan berkait dengan unsur ketuhanan, sekali gus mengukuhkan kedudukan raja dalam struktur sosial.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_01",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah tulisan yang digunakan pada prasasti awal kerajaan Alam Melayu?",
    "options": [
      "Tulisan Jawi",
      "Tulisan Rumi",
      "Tulisan Cina",
      "Tulisan Pallava"
    ],
    "correctIndex": 3,
    "explanation": "Prasasti awal kerajaan Alam Melayu menggunakan tulisan Pallava dan kemudiannya Kawi. Tulisan Jawi muncul lebih lewat selepas kedatangan Islam, manakala Rumi pula diperkenalkan oleh Barat.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_02",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Apakah maksud prasasti?",
    "options": [
      "Batu bersurat yang mengandungi catatan",
      "Manuskrip yang ditulis pada daun lontar",
      "Karya sastera berbentuk pantun",
      "Surat perjanjian antara dua kerajaan"
    ],
    "correctIndex": 0,
    "explanation": "Prasasti ialah batu bersurat yang memuatkan catatan penting seperti perintah raja atau peristiwa. Manuskrip pada daun lontar pula ialah bentuk penulisan yang berbeza.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_03",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Bahasa manakah yang digunakan dalam prasasti awal Alam Melayu?",
    "options": [
      "Bahasa Sanskrit",
      "Bahasa Melayu kuno",
      "Bahasa Arab",
      "Bahasa Inggeris"
    ],
    "correctIndex": 1,
    "explanation": "Prasasti awal Alam Melayu ditulis dalam bahasa Melayu kuno dengan tulisan Pallava atau Kawi. Bahasa Arab dan Inggeris belum digunakan secara meluas pada zaman tersebut.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_04",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah karya kesusasteraan berbentuk puisi?",
    "options": [
      "Hikayat",
      "Sejarah Melayu",
      "Syair dan pantun",
      "Undang-undang Laut Melaka"
    ],
    "correctIndex": 2,
    "explanation": "Syair dan pantun ialah karya berbentuk puisi yang diwarisi masyarakat Alam Melayu. Hikayat dan Sejarah Melayu berbentuk prosa, manakala Undang-undang Laut ialah teks peraturan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_05",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "L",
    "q": "Tulisan manakah yang digunakan oleh masyarakat Alam Melayu selepas kedatangan Islam?",
    "options": [
      "Tulisan Pallava",
      "Tulisan Kawi",
      "Tulisan Brahmi",
      "Tulisan Jawi"
    ],
    "correctIndex": 3,
    "explanation": "Tulisan Jawi mula digunakan selepas kedatangan Islam kerana ia berkait dengan tulisan Arab. Pallava, Kawi dan Brahmi ialah tulisan yang lebih awal.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_06",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Mengapakah prasasti penting kepada pengkaji sejarah kerajaan Alam Melayu?",
    "options": [
      "Kerana prasasti mencatat perintah dan peristiwa yang boleh dijadikan bukti",
      "Kerana prasasti mengandungi peta seluruh Kepulauan Melayu",
      "Kerana prasasti hanya ditulis oleh pedagang asing",
      "Kerana prasasti menggantikan sepenuhnya karya kesusasteraan"
    ],
    "correctIndex": 0,
    "explanation": "Prasasti merekodkan perintah raja dan peristiwa penting, sekali gus menjadi bukti bertulis kepada pengkaji sejarah. Ia bukan peta dan tidak menggantikan karya sastera.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_07",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Apakah perbezaan antara hikayat dengan syair?",
    "options": [
      "Hikayat berbentuk puisi manakala syair berbentuk prosa",
      "Hikayat berbentuk prosa manakala syair berbentuk puisi",
      "Hikayat ditulis dalam tulisan Jawi manakala syair dalam tulisan Pallava",
      "Hikayat dan syair merupakan bentuk karya yang sama"
    ],
    "correctIndex": 1,
    "explanation": "Hikayat ialah karya prosa yang menceritakan kisah atau tokoh, manakala syair ialah puisi berangkap. Perbezaan bentuk ini penting dalam memahami warisan sastera Melayu.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_08",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "M",
    "q": "Seorang pengkaji menemui tulisan Kawi pada sebuah batu bersurat. Apakah yang boleh disimpulkan daripada penemuan ini?",
    "options": [
      "Batu bersurat itu ditulis selepas kedatangan Islam",
      "Batu bersurat itu ditulis oleh pedagang Eropah",
      "Batu bersurat itu berasal dari zaman awal pengaruh Hindu-Buddha",
      "Batu bersurat itu menggunakan tulisan rumi moden"
    ],
    "correctIndex": 2,
    "explanation": "Tulisan Kawi digunakan pada zaman awal pengaruh Hindu-Buddha dalam prasasti. Tulisan ini mendahului penggunaan tulisan Jawi selepas kedatangan Islam.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_09",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Mengapakah kesimpulan bahawa tulisan Jawi telah digunakan sejak awal kemunculan kerajaan Alam Melayu dianggap tidak tepat?",
    "options": [
      "Kerana tulisan Jawi hanya digunakan oleh pedagang India",
      "Kerana tulisan Jawi dicipta pada abad ke-20",
      "Kerana tulisan Jawi tidak pernah digunakan di Alam Melayu",
      "Kerana prasasti awal menggunakan tulisan Pallava dan Kawi, bukan Jawi"
    ],
    "correctIndex": 3,
    "explanation": "Prasasti-prasasti awal menggunakan tulisan Pallava dan Kawi, manakala Jawi mula digunakan selepas kedatangan Islam. Jawi memang pernah digunakan, tetapi bukan sejak awal kemunculan kerajaan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s2_10",
    "unit": "b3",
    "skill": "b3_s2",
    "diff": "H",
    "q": "Apakah kesimpulan tentang perkembangan bahasa dan tulisan dalam kerajaan Alam Melayu?",
    "options": [
      "Bahasa dan tulisan kekal tidak berubah sepanjang zaman",
      "Perkembangan tulisan dipengaruhi kedatangan pengaruh luar seperti Hindu-Buddha dan Islam",
      "Bahasa Melayu kuno tidak pernah digunakan dalam prasasti",
      "Setiap kerajaan hanya menggunakan satu tulisan sepanjang sejarah"
    ],
    "correctIndex": 1,
    "explanation": "Tulisan Pallava dan Kawi datang bersama pengaruh Hindu-Buddha, manakala tulisan Jawi berkembang selepas kedatangan Islam. Perubahan ini menunjukkan bahasa dan tulisan dipengaruhi hubungan dengan dunia luar.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_01",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah maksud animisme?",
    "options": [
      "Kepercayaan bahawa setiap benda mempunyai semangat",
      "Kepercayaan kepada satu Tuhan yang tunggal",
      "Kepercayaan bahawa raja ialah tuhan",
      "Kepercayaan yang hanya diamalkan oleh pedagang asing"
    ],
    "correctIndex": 0,
    "explanation": "Animisme ialah kepercayaan bahawa benda seperti pokok, batu dan sungai mempunyai semangat. Kepercayaan ini wujud sebelum kedatangan agama besar ke Alam Melayu.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_02",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Candi Borobudur di Jawa Tengah dibina sebagai lambang agama",
    "options": [
      "Islam",
      "Buddha",
      "Kristian",
      "Yahudi"
    ],
    "correctIndex": 1,
    "explanation": "Borobudur ialah candi Buddha yang dibina semasa kegemilangan kerajaan di Jawa. Ia berbeza daripada candi Hindu seperti Prambanan dari segi tujuan dan ciri binaannya.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_03",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Pada abad ke manakah kedatangan Islam mula berlaku secara meluas ke Alam Melayu?",
    "options": [
      "Abad ke-5",
      "Abad ke-17",
      "Abad ke-13",
      "Abad ke-19"
    ],
    "correctIndex": 2,
    "explanation": "Islam mula tersebar secara meluas di Alam Melayu sekitar abad ke-13 melalui pedagang Arab, Parsi dan India. Kedatangan Islam bukan berlaku pada abad ke-19 seperti yang sering disangka.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_04",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah persembahan seni tradisional yang menggunakan bayang-bayang patung pada layar?",
    "options": [
      "Gamelan",
      "Seni ukir",
      "Seloka",
      "Wayang kulit"
    ],
    "correctIndex": 3,
    "explanation": "Wayang kulit ialah persembahan yang menggunakan bayang-bayang patung pada layar. Gamelan pula ialah ensembel muzik, manakala seni ukir ialah hasil seni pada kayu atau batu.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_05",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "L",
    "q": "Apakah alat muzik yang menjadi teras persembahan gamelan?",
    "options": [
      "Gong dan alat genderang logam",
      "Serunai dan kompang sahaja",
      "Biola dan piano",
      "Gitar dan dram moden"
    ],
    "correctIndex": 0,
    "explanation": "Gamelan menggunakan gong, genderang logam dan alat berbilah sebagai teras persembahan. Alat muzik Barat seperti biola dan piano bukan bahagian daripada gamelan tradisional.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_06",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Apakah perbezaan antara candi dengan stupa?",
    "options": [
      "Candi ialah tempat ibadat Buddha manakala stupa untuk penganut Hindu",
      "Candi berkait dengan agama Hindu manakala stupa berkait dengan agama Buddha",
      "Candi dan stupa mempunyai bentuk dan tujuan yang sama",
      "Candi hanya dibina oleh pedagang asing manakala stupa oleh raja"
    ],
    "correctIndex": 1,
    "explanation": "Candi lazimnya berkait dengan agama Hindu manakala stupa dengan agama Buddha, walaupun terdapat binaan seperti Borobudur yang menggabungkan kedua-dua unsur. Dalam soalan pengelasan, bezakan ciri utama setiap binaan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_07",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Mengapakah seni bina candi di Alam Melayu dianggap bukti pengaruh India?",
    "options": [
      "Kerana candi dibina menggunakan bahan dari India sahaja",
      "Kerana candi hanya dibina oleh pedagang India",
      "Kerana bentuk dan fungsinya menyerupai candi di India",
      "Kerana candi dibina selepas kedatangan Islam"
    ],
    "correctIndex": 2,
    "explanation": "Bentuk, struktur dan fungsi candi di Alam Melayu menyerupai candi di India, menunjukkan pengaruh budaya Hindu-Buddha. Bahan binaan pula diambil daripada sumber tempatan.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_08",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "M",
    "q": "Bagaimanakah kedatangan Islam mengubah kepercayaan masyarakat Alam Melayu?",
    "options": [
      "Masyarakat mula menyembah raja sebagai tuhan",
      "Masyarakat menolak semua bentuk seni bina",
      "Masyarakat menghapuskan bahasa Melayu",
      "Masyarakat menerima kepercayaan kepada satu Tuhan"
    ],
    "correctIndex": 3,
    "explanation": "Islam memperkenalkan kepercayaan kepada Allah Yang Maha Esa. Perubahan ini berbeza daripada kepercayaan animisme dan penyembahan berhala yang wujud sebelumnya.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_09",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "H",
    "q": "Mengapakah unsur kepercayaan tempatan masih boleh dikesan dalam sesetengah amalan masyarakat selepas kedatangan Islam?",
    "options": [
      "Kerana amalan lama bercampur dengan ajaran baharu dalam kehidupan harian",
      "Kerana Islam tidak pernah diterima di Alam Melayu",
      "Kerana pemerintah melarang sepenuhnya amalan baharu",
      "Kerana pedagang asing memaksa masyarakat menolak Islam"
    ],
    "correctIndex": 0,
    "explanation": "Kedatangan Islam tidak menghapuskan semua amalan lama serta-merta. Dalam sesetengah masyarakat, unsur kepercayaan tempatan kekal bercampur dengan amalan baharu dalam kehidupan harian.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b3_s3_10",
    "unit": "b3",
    "skill": "b3_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang perkembangan kepercayaan dan seni dalam kerajaan Alam Melayu?",
    "options": [
      "Kepercayaan dan seni tidak pernah berubah sepanjang zaman",
      "Hanya pengaruh India yang mempengaruhi seni Alam Melayu",
      "Kepercayaan dan seni berkembang melalui lapisan pengaruh tempatan, Hindu-Buddha dan Islam",
      "Seni bina candi dibina oleh masyarakat selepas kedatangan Islam"
    ],
    "correctIndex": 2,
    "explanation": "Masyarakat Alam Melayu melalui peringkat kepercayaan animisme, pengaruh Hindu-Buddha dan kemudian kedatangan Islam, dan setiap lapisan meninggalkan kesan pada seni serta budaya.",
    "ref": "Bab 3, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_01",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Bagaimanakah kerajaan Alam Melayu menjalinkan hubungan diplomatik dengan China?",
    "options": [
      "Dengan menghantar tentera untuk menakluk China",
      "Dengan menghantar utusan dan pemberian hadiah",
      "Dengan menolak semua hubungan perdagangan",
      "Dengan memindahkan pusat pemerintahan ke China"
    ],
    "correctIndex": 1,
    "explanation": "Hubungan diplomatik dengan China dijalankan secara aman melalui utusan dan pemberian hadiah. Kerajaan Alam Melayu tidak pernah menghantar tentera untuk menakluk China.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_02",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah kesan utama hubungan dengan China terhadap kerajaan Alam Melayu?",
    "options": [
      "Kerajaan Alam Melayu dijajah oleh China",
      "Bahasa Melayu dihapuskan sepenuhnya",
      "Perdagangan dan pengiktirafan politik meningkat",
      "Alam Melayu berhenti berdagang dengan India"
    ],
    "correctIndex": 2,
    "explanation": "Hubungan dengan China meningkatkan perdagangan dan memberi pengiktirafan politik kepada kerajaan Alam Melayu. China tidak menjajah wilayah ini secara langsung.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_03",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Pengaruh India yang paling ketara dalam kerajaan Alam Melayu ialah dalam bidang",
    "options": [
      "ketenteraan dan senjata api",
      "perkapalan moden",
      "percetakan dan surat khabar",
      "agama dan budaya"
    ],
    "correctIndex": 3,
    "explanation": "Pengaruh India paling ketara dalam bidang agama dan budaya seperti Hindu-Buddha, seni bina candi serta kesusasteraan. Pengaruh ketenteraan dan percetakan bukan ciri utama pengaruh India.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_04",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah bentuk hubungan utama antara kerajaan Alam Melayu dengan India?",
    "options": [
      "Perdagangan dan penyebaran budaya",
      "Penjajahan sepenuhnya oleh India",
      "Peperangan yang berterusan",
      "Penghantaran tentera untuk menjaga pelabuhan"
    ],
    "correctIndex": 0,
    "explanation": "Hubungan dengan India berbentuk perdagangan yang membawa bersama pengaruh budaya dan agama. India tidak menjajah kerajaan Alam Melayu.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_05",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "L",
    "q": "Apakah tujuan kerajaan Alam Melayu menghantar utusan ke China?",
    "options": [
      "Untuk memohon bantuan tentera menyerang India",
      "Untuk menjalin persahabatan dan mengukuhkan perdagangan",
      "Untuk menyerahkan wilayah kepada China",
      "Untuk menghantar pelajar mempelajari tulisan Pallava"
    ],
    "correctIndex": 1,
    "explanation": "Utusan dihantar untuk menjalinkan persahabatan, mendapat pengiktirafan dan mengukuhkan hubungan perdagangan dengan China.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_06",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Mengapakah China berminat menjalinkan hubungan dengan kerajaan Alam Melayu?",
    "options": [
      "Kerana ingin menukar penduduknya ke Alam Melayu",
      "Kerana ingin mempelajari tulisan Pallava daripada Alam Melayu",
      "Kerana ingin memperoleh hasil bumi seperti rempah dan timah",
      "Kerana ingin menghalang pedagang India daripada berdagang"
    ],
    "correctIndex": 2,
    "explanation": "China memerlukan hasil bumi Alam Melayu seperti rempah ratus dan bijih timah untuk keperluan penduduknya. Hubungan ini berasaskan kepentingan perdagangan kedua-dua pihak.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_07",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Apakah perbezaan antara pengaruh China dengan pengaruh India terhadap kerajaan Alam Melayu?",
    "options": [
      "China memberi pengaruh agama manakala India memberi pengaruh ketenteraan",
      "Kedua-duanya hanya memberi pengaruh dalam bidang pertanian",
      "Kedua-duanya tidak memberi sebarang pengaruh kepada Alam Melayu",
      "China memberi pengaruh politik dan perdagangan manakala India memberi pengaruh agama dan budaya"
    ],
    "correctIndex": 3,
    "explanation": "China lebih menonjol dalam hubungan politik dan perdagangan, manakala India lebih menonjol dalam penyebaran agama dan budaya seperti Hindu-Buddha.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_08",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "M",
    "q": "Sebuah kerajaan Alam Melayu menghantar hadiah kepada maharaja China. Apakah kesan tindakan tersebut?",
    "options": [
      "Kerajaan itu memperoleh pengiktirafan dan hubungan perdagangan yang lebih baik",
      "Kerajaan itu kehilangan wilayah kepada China",
      "Kerajaan itu terpaksa menukar agama secara paksa",
      "Kerajaan itu dilarang berdagang dengan India"
    ],
    "correctIndex": 0,
    "explanation": "Pemberian hadiah melalui utusan mengeratkan hubungan diplomatik dan membuka peluang perdagangan yang lebih baik. Hubungan ini tidak melibatkan penaklukan atau paksaan agama.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_09",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Mengapakah hubungan diplomatik lebih menguntungkan kerajaan Alam Melayu berbanding peperangan dengan kuasa besar?",
    "options": [
      "Kerana peperangan tidak pernah berlaku di Alam Melayu",
      "Kerana hubungan diplomatik membuka perdagangan dan mengelakkan kemusnahan",
      "Kerana hubungan diplomatik menjamin hasil bumi bertambah sendiri",
      "Kerana hubungan diplomatik membolehkan kerajaan menghapuskan pembesar"
    ],
    "correctIndex": 1,
    "explanation": "Hubungan diplomatik membuka laluan perdagangan dan pertukaran budaya tanpa kemusnahan akibat peperangan. Ini lebih menguntungkan kerana hasil bumi dan pelabuhan dapat terus berkembang.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s1_10",
    "unit": "b4",
    "skill": "b4_s1",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang hubungan kerajaan Alam Melayu dengan China dan India?",
    "options": [
      "Kedua-dua kuasa menjajah Alam Melayu secara kekal",
      "Alam Melayu hanya berhubung dengan China dan menolak India",
      "Hubungan hanya berbentuk peperangan sepanjang zaman",
      "Hubungan bersifat timbal balik yang membawa perdagangan serta pengaruh budaya"
    ],
    "correctIndex": 3,
    "explanation": "Hubungan dengan China dan India bersifat timbal balik: Alam Melayu memperoleh perdagangan dan teknologi, manakala kuasa luar memperoleh hasil bumi serta pengaruh budaya tersebar ke rantau ini.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_01",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah kesan pengaruh Hindu-Buddha terhadap seni bina kerajaan Alam Melayu?",
    "options": [
      "Pembinaan masjid berkubah",
      "Pembinaan bangunan pencakar langit",
      "Pembinaan candi dan stupa",
      "Pembinaan stesen kereta api"
    ],
    "correctIndex": 2,
    "explanation": "Pengaruh Hindu-Buddha membawa pembinaan candi dan stupa sebagai tempat ibadat. Masjid berkubah pula muncul selepas kedatangan Islam.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_02",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Dari manakah pengaruh Islam sampai ke Alam Melayu?",
    "options": [
      "Dari Benua Amerika melalui pelayar",
      "Dari Australia melalui nelayan",
      "Dari Kepulauan Pasifik melalui petani",
      "Dari Timur Tengah melalui pedagang"
    ],
    "correctIndex": 3,
    "explanation": "Pengaruh Islam tiba dari Timur Tengah melalui pedagang Arab, Parsi dan India yang berdagang di pelabuhan Alam Melayu.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_03",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah pengaruh Hindu-Buddha terhadap sistem pemerintahan Alam Melayu?",
    "options": [
      "Raja dianggap mempunyai kedudukan suci dan berwibawa",
      "Raja dipilih melalui pilihan raya",
      "Pembesar menghapuskan jawatan raja",
      "Kuasa raja diserahkan kepada pedagang"
    ],
    "correctIndex": 0,
    "explanation": "Pengaruh Hindu-Buddha mengukuhkan kedudukan raja sebagai pemerintah yang berwibawa, kadangkala dikaitkan dengan unsur ketuhanan. Sistem pemilihan raya tidak wujud pada zaman itu.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_04",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah kesan kedatangan Islam terhadap kesusasteraan Alam Melayu?",
    "options": [
      "Semua karya sastera dimusnahkan",
      "Karya seperti hikayat dan syair ditulis dalam tulisan Jawi",
      "Karya sastera ditulis dalam tulisan Rumi sahaja",
      "Kesusasteraan Melayu berhenti berkembang"
    ],
    "correctIndex": 1,
    "explanation": "Selepas kedatangan Islam, karya sastera seperti hikayat dan syair ditulis dalam tulisan Jawi. Kesusasteraan Melayu terus berkembang, bukan berhenti.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_05",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "L",
    "q": "Apakah ciri seni bina yang muncul di Alam Melayu selepas kedatangan Islam?",
    "options": [
      "Candi berbentuk stupa",
      "Bangunan batu tanpa kubah",
      "Masjid dengan kubah dan menara",
      "Istana kayu tanpa ukiran"
    ],
    "correctIndex": 2,
    "explanation": "Masjid dengan kubah dan menara ialah ciri seni bina yang berkembang selepas kedatangan Islam. Candi dan stupa pula berkait dengan pengaruh Hindu-Buddha.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_06",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Bagaimanakah pengaruh Hindu-Buddha dapat dikesan dalam kesusasteraan Alam Melayu?",
    "options": [
      "Melalui penggunaan tulisan Jawi dalam semua karya",
      "Melalui cerita tentang pedagang Eropah",
      "Melalui penggunaan bahasa Inggeris",
      "Melalui kisah epik seperti Ramayana dan Mahabharata"
    ],
    "correctIndex": 3,
    "explanation": "Kisah epik seperti Ramayana dan Mahabharata berasal daripada tradisi Hindu dan kemudiannya disesuaikan dalam kesusasteraan Alam Melayu.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_07",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Mengapakah pengaruh Hindu-Buddha tidak terhad kepada perkara agama sahaja?",
    "options": [
      "Kerana pengaruh itu turut merangkumi seni bina, kesusasteraan dan pemerintahan",
      "Kerana pengaruh itu hanya melibatkan pedagang asing",
      "Kerana pengaruh itu menghapuskan sistem pemerintahan",
      "Kerana pengaruh itu hanya berlaku di kawasan pedalaman"
    ],
    "correctIndex": 0,
    "explanation": "Pengaruh Hindu-Buddha merangkumi pelbagai aspek kehidupan, iaitu agama, seni bina seperti candi, kesusasteraan dan juga konsep pemerintahan beraja.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_08",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "M",
    "q": "Seorang pengkaji menemui ciri kubah dan menara pada bangunan lama di kawasan pelabuhan. Apakah yang boleh disimpulkan?",
    "options": [
      "Bangunan itu dibina semasa pengaruh Hindu-Buddha",
      "Bangunan itu berkait dengan kedatangan Islam",
      "Bangunan itu dibina oleh pedagang China",
      "Bangunan itu ialah candi Buddha"
    ],
    "correctIndex": 1,
    "explanation": "Kubah dan menara ialah ciri seni bina masjid yang berkembang selepas kedatangan Islam, berbeza daripada bentuk candi dan stupa.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_09",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Mengapakah unsur budaya lama masih kekal walaupun pengaruh Islam telah tersebar luas?",
    "options": [
      "Kerana Islam tidak pernah diterima oleh masyarakat",
      "Kerana pemerintah melarang sepenuhnya amalan baharu",
      "Kerana budaya tempatan dan pengaruh baharu bercampur dalam amalan harian",
      "Kerana pedagang asing menghalang penyebaran Islam"
    ],
    "correctIndex": 2,
    "explanation": "Penyebaran Islam tidak menghapuskan semua unsur budaya lama. Dalam sesetengah amalan, unsur tempatan dan Hindu-Buddha terus bercampur dengan ajaran baharu.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s2_10",
    "unit": "b4",
    "skill": "b4_s2",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang pengaruh budaya luar terhadap Alam Melayu?",
    "options": [
      "Budaya luar disesuaikan dengan budaya tempatan sehingga membentuk ciri tersendiri",
      "Budaya luar diterima sepenuhnya tanpa perubahan",
      "Budaya luar ditolak sepenuhnya oleh masyarakat tempatan",
      "Budaya luar hanya mempengaruhi golongan pedagang"
    ],
    "correctIndex": 0,
    "explanation": "Pengaruh luar tidak diterima secara mentah, sebaliknya disesuaikan dengan budaya tempatan. Hasilnya, Alam Melayu membentuk ciri budaya tersendiri yang berakar pada pengaruh luar.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_01",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah kelebihan utama kedudukan Alam Melayu dalam perdagangan dunia?",
    "options": [
      "Terletak jauh daripada semua laluan laut",
      "Mempunyai kawasan gurun yang luas",
      "Mempunyai iklim sejuk sepanjang tahun",
      "Terletak di antara laluan perdagangan Timur dan Barat"
    ],
    "correctIndex": 3,
    "explanation": "Alam Melayu terletak di tengah-tengah laluan perdagangan antara Timur dan Barat. Kedudukan ini menjadikannya tempat persinggahan dan pusat perdagangan yang penting.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_02",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah nama angin yang menentukan jadual pelayaran pedagang ke Alam Melayu?",
    "options": [
      "Angin monsun",
      "Angin pasat sahaja",
      "Angin puting beliung",
      "Angin darat"
    ],
    "correctIndex": 0,
    "explanation": "Pedagang bergantung pada angin monsun untuk berlayar. Perubahan arah monsun memaksa mereka menunggu di pelabuhan sebelum meneruskan pelayaran.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_03",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah maksud persinggahan dalam konteks perdagangan Alam Melayu?",
    "options": [
      "Tempat pedagang menetap secara kekal",
      "Tempat pedagang berhenti sementara sambil menunggu perubahan monsun",
      "Tempat pembinaan kapal perang",
      "Tempat raja menandatangani perjanjian damai"
    ],
    "correctIndex": 1,
    "explanation": "Persinggahan ialah tempat pedagang berhenti sementara untuk berehat, berdagang dan menunggu perubahan monsun sebelum meneruskan pelayaran.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_04",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Apakah barang dagangan utama yang dibawa pedagang dari Barat ke pelabuhan Alam Melayu?",
    "options": [
      "Rempah ratus dan damar",
      "Bijih timah tempatan",
      "Kain dan barang logam",
      "Padi dan rotan"
    ],
    "correctIndex": 2,
    "explanation": "Barang seperti kain, tembikar dan barang logam dibawa dari Barat ke pelabuhan Alam Melayu untuk ditukar dengan hasil tempatan.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_05",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "L",
    "q": "Selain barang dagangan, apakah bentuk pertukaran lain yang berlaku di pelabuhan Alam Melayu?",
    "options": [
      "Pertukaran penduduk secara paksa",
      "Pertukaran sistem pemerintahan",
      "Pertukaran bahasa rasmi kerajaan",
      "Pertukaran budaya dan teknologi"
    ],
    "correctIndex": 3,
    "explanation": "Pelabuhan Alam Melayu turut menjadi tempat pertukaran budaya. Bahasa, agama dan teknologi baharu tersebar melalui hubungan perdagangan.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_06",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Mengapakah pedagang terpaksa menunggu di pelabuhan Alam Melayu dalam tempoh yang lama?",
    "options": [
      "Kerana mereka menunggu perubahan arah angin monsun",
      "Kerana pelabuhan ditutup pada musim tertentu",
      "Kerana mereka dikehendaki menetap selama setahun",
      "Kerana mereka perlu mempelajari bahasa Melayu"
    ],
    "correctIndex": 0,
    "explanation": "Perubahan angin monsun menentukan arah pelayaran. Pedagang terpaksa menunggu di pelabuhan Alam Melayu sehingga monsun bertukar sebelum boleh meneruskan perjalanan.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_07",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Bagaimanakah Alam Melayu berperanan sebagai pusat pertukaran teknologi?",
    "options": [
      "Penduduk tempatan menolak semua teknologi luar",
      "Pedagang asing memperkenalkan teknik pembinaan dan alat baharu",
      "Raja melarang pertukaran teknologi dengan pedagang",
      "Teknologi hanya dibawa oleh pedagang tempatan"
    ],
    "correctIndex": 1,
    "explanation": "Pedagang asing membawa teknik pembinaan, alat dan kemahiran baharu yang kemudiannya diserap oleh masyarakat tempatan dalam kegiatan harian.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_08",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "M",
    "q": "Apakah kesan kedudukan strategik Alam Melayu terhadap bahasa Melayu?",
    "options": [
      "Bahasa Melayu diharamkan di pelabuhan",
      "Bahasa Melayu digantikan dengan bahasa Arab sepenuhnya",
      "Bahasa Melayu menjadi lingua franca dalam perdagangan",
      "Bahasa Melayu hanya digunakan oleh pedagang China"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan strategik Alam Melayu menjadikan bahasa Melayu bahasa perantaraan (lingua franca) di pelabuhan. Bahasa ini memudahkan komunikasi antara pedagang pelbagai bangsa.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_09",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Mengapakah peranan pusat persinggahan begitu penting kepada ekonomi kerajaan Alam Melayu?",
    "options": [
      "Kerana pedagang tidak perlu membayar cukai di pelabuhan",
      "Kerana persinggahan menghalang pedagang daripada berdagang",
      "Kerana kerajaan dapat menghapuskan kegiatan ekonomi lain",
      "Kerana pedagang yang menunggu berbelanja dan berdagang di pelabuhan"
    ],
    "correctIndex": 3,
    "explanation": "Perniagaan dan perbelanjaan pedagang yang menunggu menggerakkan ekonomi tempatan serta menambah pendapatan cukai. Persinggahan menguntungkan, bukan menghalang, perdagangan.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b4_s3_10",
    "unit": "b4",
    "skill": "b4_s3",
    "diff": "H",
    "q": "Apakah kesimpulan tentang peranan Alam Melayu dalam jaringan perdagangan Timur dan Barat?",
    "options": [
      "Alam Melayu hanya menjadi tempat persinggahan tanpa peranan ekonomi",
      "Alam Melayu menjadi simpulan penghubung yang menyatukan pedagang Timur dan Barat",
      "Alam Melayu terpisah sepenuhnya daripada laluan perdagangan",
      "Alam Melayu hanya berdagang dengan satu kuasa besar sahaja"
    ],
    "correctIndex": 1,
    "explanation": "Alam Melayu bukan sekadar tempat persinggahan, malah menjadi titik pertemuan pedagang Timur dan Barat dalam satu jaringan perdagangan yang saling berkait.",
    "ref": "Bab 4, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_01",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Siapakah pengasas Kesultanan Melayu Melaka?",
    "options": [
      "Parameswara",
      "Tun Perak",
      "Hang Tuah",
      "Sultan Mahmud Shah"
    ],
    "correctIndex": 0,
    "explanation": "Parameswara mengasaskan Kesultanan Melayu Melaka. Tun Perak dan Hang Tuah ialah tokoh penting selepas Melaka berkembang, manakala Sultan Mahmud Shah ialah sultan terakhir sebelum kejatuhan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_02",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Pada tahun bilakah Melaka jatuh ke tangan Portugis?",
    "options": [
      "1498",
      "1511",
      "1641",
      "1786"
    ],
    "correctIndex": 1,
    "explanation": "Melaka jatuh ke tangan Portugis pada tahun 1511. Tahun 1498 ialah tahun kedatangan Portugis ke Timur, manakala 1641 ialah tahun Belanda menguasai Melaka.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_03",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Siapakah Bendahara yang memainkan peranan besar dalam kegemilangan Melaka?",
    "options": [
      "Hang Tuah",
      "Sultan Mansur Shah",
      "Tun Perak",
      "Tun Mutahir"
    ],
    "correctIndex": 2,
    "explanation": "Tun Perak ialah Bendahara Melaka yang berjaya mengukuhkan pentadbiran dan pertahanan Melaka. Hang Tuah pula ialah Laksamana, bukan Bendahara.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_04",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Apakah jawatan yang disandang oleh Hang Tuah dalam Kesultanan Melaka?",
    "options": [
      "Bendahara",
      "Temenggung",
      "Syahbandar",
      "Laksamana"
    ],
    "correctIndex": 3,
    "explanation": "Hang Tuah ialah Laksamana yang mengetuai angkatan laut Melaka. Beliau tidak menyandang jawatan Bendahara, Temenggung atau Syahbandar.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_05",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "L",
    "q": "Kuasa manakah yang menakluki Melaka pada tahun 1511?",
    "options": [
      "Portugis",
      "Belanda",
      "British",
      "Siam"
    ],
    "correctIndex": 0,
    "explanation": "Melaka ditakluki oleh Portugis pada tahun 1511 di bawah pimpinan Alfonso de Albuquerque. Belanda hanya menguasai Melaka pada tahun 1641.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_06",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Mengapakah Melaka mudah ditewaskan oleh Portugis walaupun mempunyai kedudukan yang kuat?",
    "options": [
      "Kerana Melaka tidak mempunyai pelabuhan",
      "Kerana berlaku perpecahan dalam kalangan pembesar",
      "Kerana penduduk Melaka berpindah ke negeri lain",
      "Kerana Melaka tidak pernah berdagang dengan kuasa luar"
    ],
    "correctIndex": 1,
    "explanation": "Perpecahan dalam kalangan pembesar melemahkan pertahanan dan kesetiaan dalaman Melaka. Kelemahan ini memudahkan Portugis menakluk Melaka.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_07",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Apakah perbezaan antara peranan Parameswara dengan Tun Perak dalam sejarah Melaka?",
    "options": [
      "Parameswara mengetuai angkatan laut manakala Tun Perak mengasaskan Melaka",
      "Kedua-duanya mengasaskan Melaka secara bersama",
      "Parameswara mengasaskan Melaka manakala Tun Perak mengukuhkan pentadbirannya",
      "Parameswara ialah Bendahara manakala Tun Perak ialah Sultan"
    ],
    "correctIndex": 2,
    "explanation": "Parameswara berperanan sebagai pengasas Melaka, manakala Tun Perak mengukuhkan pentadbiran dan pertahanan Melaka selepas kerajaan itu berkembang.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_08",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "M",
    "q": "Susun peristiwa berikut mengikut urutan yang betul.",
    "options": [
      "Kejatuhan Melaka -> Pengasasan Melaka -> Pentadbiran Tun Perak",
      "Pentadbiran Tun Perak -> Pengasasan Melaka -> Kejatuhan Melaka",
      "Pengasasan Melaka -> Kejatuhan Melaka -> Pentadbiran Tun Perak",
      "Pengasasan Melaka -> Pentadbiran Tun Perak -> Kejatuhan Melaka"
    ],
    "correctIndex": 3,
    "explanation": "Melaka diasaskan oleh Parameswara, kemudian mencapai kegemilangan di bawah pentadbiran Tun Perak, dan akhirnya jatuh ke tangan Portugis pada tahun 1511.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_09",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Mengapakah kejatuhan Melaka tidak boleh dijelaskan semata-mata melalui serangan Portugis?",
    "options": [
      "Kerana kelemahan dalaman seperti perpecahan pembesar turut melemahkan Melaka",
      "Kerana Portugis tidak pernah menyerang Melaka",
      "Kerana Melaka jatuh akibat bencana alam",
      "Kerana Melaka diserahkan kepada Portugis secara aman"
    ],
    "correctIndex": 0,
    "explanation": "Kejatuhan Melaka berpunca daripada gabungan serangan Portugis dan kelemahan dalaman seperti perpecahan pembesar serta pengkhianatan. Menyalahkan serangan luar sahaja tidak lengkap.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s1_10",
    "unit": "b5",
    "skill": "b5_s1",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang faktor dalaman kejatuhan Melaka?",
    "options": [
      "Kekuatan ekonomi Melaka menyebabkan Portugis berundur",
      "Penduduk Melaka bersatu sepenuhnya menentang Portugis",
      "Kelemahan pemerintahan dan kesetiaan pembesar melemahkan pertahanan Melaka",
      "Melaka jatuh kerana kehilangan hasil hutan"
    ],
    "correctIndex": 2,
    "explanation": "Kelemahan pemerintahan serta perpecahan dan pengkhianatan pembesar melemahkan pertahanan dalaman Melaka, sekali gus memudahkan serangan Portugis berjaya.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_01",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Siapakah yang mengetuai pentadbiran tertinggi Kesultanan Melayu Melaka?",
    "options": [
      "Bendahara",
      "Sultan",
      "Laksamana",
      "Syahbandar"
    ],
    "correctIndex": 1,
    "explanation": "Sultan ialah pemerintah tertinggi Kesultanan Melaka. Bendahara, Laksamana dan Syahbandar membantu Sultan dalam bidang tugas masing-masing.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_02",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah undang-undang yang mengawal pemerintahan dan jenayah di Melaka?",
    "options": [
      "Undang-undang Laut Melaka",
      "Adat Perpatih",
      "Hukum Kanun Melaka",
      "Undang-undang Tubuh Kerajaan"
    ],
    "correctIndex": 2,
    "explanation": "Hukum Kanun Melaka mengawal pemerintahan, adat dan jenayah. Undang-undang Laut Melaka pula khusus kepada urusan pelayaran dan perdagangan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_03",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah gelaran bagi kumpulan pembesar utama yang membantu Sultan Melaka?",
    "options": [
      "Undang",
      "Syuhada",
      "Pendeta",
      "Pembesar Berempat"
    ],
    "correctIndex": 3,
    "explanation": "Pembesar Berempat ialah kumpulan pembesar utama yang membantu Sultan Melaka dalam pentadbiran. Gelaran Undang pula digunakan dalam sistem pemerintahan Negeri Sembilan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_04",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah tugas Bendahara dalam pentadbiran Melaka?",
    "options": [
      "Menjadi ketua pentadbir dan membantu Sultan",
      "Mengetuai angkatan laut",
      "Menjaga keselamatan bandar",
      "Mengurus pedagang asing di pelabuhan"
    ],
    "correctIndex": 0,
    "explanation": "Bendahara ialah ketua pentadbir yang membantu Sultan dalam urusan pemerintahan. Tugas angkatan laut, keselamatan dan pedagang asing dipegang oleh pembesar lain.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_05",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "L",
    "q": "Apakah maksud peranan Sultan sebagai ketua agama dalam Kesultanan Melaka?",
    "options": [
      "Sultan hanya mengurus hal ehwal perdagangan",
      "Sultan mengetuai urusan agama Islam di negeri",
      "Sultan menyerahkan urusan agama kepada pedagang",
      "Sultan menghapuskan undang-undang negeri"
    ],
    "correctIndex": 1,
    "explanation": "Sultan ialah ketua agama Islam dan bertanggungjawab memastikan urusan agama dijalankan dengan baik. Peranan ini berbeza daripada urusan perdagangan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_06",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Apakah perbezaan tugas antara Bendahara dengan Temenggung?",
    "options": [
      "Bendahara menjaga keselamatan manakala Temenggung mentadbir kerajaan",
      "Kedua-duanya mengutip cukai di pelabuhan",
      "Bendahara mentadbir kerajaan manakala Temenggung menjaga keselamatan dan ketenteraman",
      "Kedua-duanya mengetuai angkatan laut"
    ],
    "correctIndex": 2,
    "explanation": "Bendahara mengetuai pentadbiran, manakala Temenggung menjaga keselamatan dan ketenteraman. Pengelasan tugas ini kerap diuji dan sering dikelirukan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_07",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Mengapakah Hukum Kanun Melaka dan Undang-undang Laut Melaka digubal secara berasingan?",
    "options": [
      "Kerana kedua-duanya ditulis oleh pedagang asing",
      "Kerana Melaka mempunyai dua orang Sultan",
      "Kerana undang-undang laut hanya untuk pedagang China",
      "Kerana kedua-duanya mengawal perkara yang berbeza di darat dan di laut"
    ],
    "correctIndex": 3,
    "explanation": "Hukum Kanun Melaka mengawal pemerintahan dan jenayah di darat, manakala Undang-undang Laut Melaka mengawal perdagangan dan pelayaran. Pemisahan ini memudahkan penguatkuasaan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_08",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "M",
    "q": "Seorang pembesar bertanggungjawab menjaga keselamatan jalan raya dan menangkap pencuri. Apakah jawatannya?",
    "options": [
      "Temenggung",
      "Bendahara",
      "Laksamana",
      "Syahbandar"
    ],
    "correctIndex": 0,
    "explanation": "Temenggung bertanggungjawab menjaga keselamatan dan ketenteraman, termasuk menangani jenayah. Bendahara, Laksamana dan Syahbandar mempunyai tugas yang berbeza.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_09",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Mengapakah pembesar berempat tidak boleh dianggap mempunyai kuasa yang sama dengan Sultan?",
    "options": [
      "Kerana mereka memilih Sultan baharu setiap tahun",
      "Kerana mereka hanya menjalankan tugas yang diamanahkan oleh Sultan",
      "Kerana mereka mengawal undang-undang laut sepenuhnya",
      "Kerana mereka adalah pedagang asing"
    ],
    "correctIndex": 1,
    "explanation": "Pembesar berempat membantu Sultan dalam bidang tugas tertentu dan masih tertakluk kepada kuasa Sultan. Dalam hal agama dan adat, Sultan kekal sebagai pihak tertinggi.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s2_10",
    "unit": "b5",
    "skill": "b5_s2",
    "diff": "H",
    "q": "Apakah kesimpulan tentang kepentingan undang-undang bertulis dalam Kesultanan Melaka?",
    "options": [
      "Undang-undang bertulis hanya digunakan oleh pedagang asing",
      "Undang-undang bertulis menghalang Sultan daripada memerintah",
      "Undang-undang bertulis hanya berkaitan hukuman mati",
      "Undang-undang bertulis memastikan pemerintahan dan perdagangan berjalan adil dan teratur"
    ],
    "correctIndex": 3,
    "explanation": "Undang-undang bertulis memberi garis panduan yang jelas dalam pemerintahan dan perdagangan, sekaligus mewujudkan keadilan dan keyakinan dalam kalangan rakyat serta pedagang.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_01",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Mengapakah kedudukan Melaka dianggap strategik untuk perdagangan?",
    "options": [
      "Kerana terletak jauh daripada laluan kapal",
      "Kerana mempunyai kawasan gurun yang luas",
      "Kerana terletak di tengah laluan Selat Melaka",
      "Kerana terletak di kawasan pergunungan tinggi"
    ],
    "correctIndex": 2,
    "explanation": "Melaka terletak di tengah-tengah Selat Melaka yang menjadi laluan utama kapal dagang. Kedudukan ini memudahkan pedagang singgah dan berdagang di Melaka.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_02",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah maksud lingua franca dalam konteks perdagangan Melaka?",
    "options": [
      "Bahasa rasmi kerajaan Melaka sahaja",
      "Bahasa yang hanya dituturkan oleh pembesar",
      "Bahasa yang digunakan dalam upacara keagamaan",
      "Bahasa perantaraan yang digunakan oleh pedagang pelbagai bangsa"
    ],
    "correctIndex": 3,
    "explanation": "Lingua franca ialah bahasa perantaraan yang digunakan untuk berkomunikasi antara pedagang pelbagai bangsa. Di Melaka, bahasa Melayu memainkan peranan ini.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_03",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah peranan Syahbandar di pelabuhan Melaka?",
    "options": [
      "Mengurus hal ehwal pedagang asing dan kapal",
      "Mengetuai angkatan tentera darat",
      "Menggubal undang-undang negeri",
      "Menjaga istana Sultan"
    ],
    "correctIndex": 0,
    "explanation": "Syahbandar mengurus hal ehwal pedagang asing, kapal dan cukai di pelabuhan. Tugas lain seperti tentera darat dan penggubalan undang-undang dipegang oleh pembesar berbeza.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_04",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah kedudukan Melaka dalam penyebaran Islam di rantau ini?",
    "options": [
      "Pusat penyebaran agama Hindu",
      "Pusat penyebaran Islam di Alam Melayu",
      "Kawasan yang menolak Islam sepenuhnya",
      "Pusat perdagangan Kristian"
    ],
    "correctIndex": 1,
    "explanation": "Melaka menjadi pusat penyebaran Islam di Alam Melayu melalui pedagang dan ulama yang datang ke pelabuhannya.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_05",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "L",
    "q": "Apakah kemudahan pelabuhan yang menarik pedagang ke Melaka?",
    "options": [
      "Ketiadaan cukai dan undang-undang",
      "Larangan berdagang dengan pedagang asing",
      "Gudang, tempat berlabuh dan perkhidmatan pelabuhan yang teratur",
      "Pelabuhan yang hanya dibuka sekali setahun"
    ],
    "correctIndex": 2,
    "explanation": "Melaka menyediakan gudang, tempat berlabuh dan perkhidmatan pelabuhan yang teratur, memudahkan urusan pedagang. Kemudahan ini berbeza daripada ketiadaan undang-undang.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_06",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Bagaimanakah bahasa Melayu membantu kegemilangan Melaka?",
    "options": [
      "Bahasa Melayu menghalang pedagang asing daripada berdagang",
      "Bahasa Melayu menggantikan semua bahasa asing",
      "Bahasa Melayu hanya digunakan oleh Sultan",
      "Bahasa Melayu memudahkan komunikasi antara pedagang pelbagai bangsa"
    ],
    "correctIndex": 3,
    "explanation": "Penggunaan bahasa Melayu sebagai bahasa perantaraan memudahkan urusan perdagangan antara pedagang pelbagai bangsa, sekali gus melancarkan aktiviti di pelabuhan Melaka.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_07",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Mengapakah peranan Syahbandar tidak terhad kepada mengutip cukai sahaja?",
    "options": [
      "Kerana Syahbandar juga mengurus hal ehwal pedagang asing dan kapal",
      "Kerana Syahbandar mengetuai angkatan tentera laut",
      "Kerana Syahbandar menggubal undang-undang negeri",
      "Kerana Syahbandar menjaga istana Sultan"
    ],
    "correctIndex": 0,
    "explanation": "Syahbandar bukan hanya mengutip cukai, malah mengurus pedagang asing, kapal dan urusan pelabuhan. Peranan ini menjadikannya penting dalam kelancaran perdagangan.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_08",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "M",
    "q": "Apakah kaitan antara kedudukan Melaka dengan kemunculannya sebagai pusat Islam?",
    "options": [
      "Melaka terletak jauh daripada laluan pedagang Muslim",
      "Kedudukan strategik menarik pedagang Muslim dan ulama ke Melaka",
      "Melaka menghalang pedagang Muslim daripada berlabuh",
      "Melaka hanya menerima pedagang bukan Islam"
    ],
    "correctIndex": 1,
    "explanation": "Kedudukan Melaka di laluan perdagangan utama menarik pedagang Muslim dan ulama, menjadikan Melaka pusat penyebaran Islam di rantau ini.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_09",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Mengapakah kegemilangan Melaka bergantung pada gabungan kedudukan, kemudahan pelabuhan dan pentadbiran yang baik?",
    "options": [
      "Kerana kedudukan sahaja sudah cukup untuk menarik pedagang",
      "Kerana pentadbiran yang baik tidak mempengaruhi perdagangan",
      "Kerana ketiga-tiga faktor saling menyokong keyakinan pedagang untuk berdagang",
      "Kerana kemudahan pelabuhan hanya penting bagi pedagang tempatan"
    ],
    "correctIndex": 2,
    "explanation": "Kedudukan strategik menarik pedagang, kemudahan pelabuhan memudahkan urusan, dan pentadbiran yang baik menjamin keadilan. Gabungan ketiga-tiganya membina keyakinan pedagang.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b5_s3_10",
    "unit": "b5",
    "skill": "b5_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang faktor kegemilangan Melaka?",
    "options": [
      "Melaka gemilang kerana kedudukan strategik serta sistem perdagangan dan pentadbiran yang tersusun",
      "Melaka gemilang semata-mata kerana bantuan Portugis",
      "Melaka gemilang kerana terletak jauh daripada laluan perdagangan",
      "Melaka gemilang kerana menolak semua pedagang asing"
    ],
    "correctIndex": 0,
    "explanation": "Kegemilangan Melaka berpunca daripada kedudukan strategik, kemudahan pelabuhan, pentadbiran yang teratur dan penggunaan bahasa Melayu sebagai lingua franca.",
    "ref": "Bab 5, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_01",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Siapakah yang mengasaskan Kesultanan Johor Riau?",
    "options": [
      "Parameswara",
      "Sultan Zainal Abidin I",
      "Raja Kecil",
      "Sultan Alauddin Riayat Shah II"
    ],
    "correctIndex": 3,
    "explanation": "Kesultanan Johor Riau diasaskan oleh Sultan Alauddin Riayat Shah II, iaitu anak kepada Sultan Mahmud Shah. Parameswara pula pengasas Melaka.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_02",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Kesultanan Johor Riau muncul selepas peristiwa",
    "options": [
      "kejatuhan Melaka pada tahun 1511",
      "pengasasan Melaka oleh Parameswara",
      "kedatangan Belanda ke Melaka pada tahun 1641",
      "pembentukan Malaysia pada tahun 1963"
    ],
    "correctIndex": 0,
    "explanation": "Johor Riau muncul selepas kejatuhan Melaka pada tahun 1511 sebagai penerus Kesultanan Melayu Melaka. Ia tidak diasaskan sebelum Melaka jatuh.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_03",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Antara berikut, yang manakah pernah menjadi pusat pemerintahan Johor Riau?",
    "options": [
      "Palembang",
      "Johor Lama",
      "Trowulan",
      "Angkor"
    ],
    "correctIndex": 1,
    "explanation": "Johor Lama ialah salah satu pusat pemerintahan Johor Riau. Palembang, Trowulan dan Angkor ialah pusat kerajaan lain yang lebih awal.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_04",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Kesultanan Johor Riau dianggap sebagai penerus kepada",
    "options": [
      "Kerajaan Majapahit",
      "Kerajaan Srivijaya",
      "Kesultanan Melayu Melaka",
      "Kesultanan Perak"
    ],
    "correctIndex": 2,
    "explanation": "Johor Riau diteruskan oleh kerabat Kesultanan Melayu Melaka selepas Melaka jatuh. Ia tidak berkait dengan Majapahit atau Srivijaya sebagai penerus.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_05",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "L",
    "q": "Apakah nama lain bagi Kesultanan Johor Riau yang sering digunakan dalam penulisan sejarah?",
    "options": [
      "Kesultanan Aceh",
      "Kesultanan Pahang",
      "Kesultanan Siak",
      "Kesultanan Johor"
    ],
    "correctIndex": 3,
    "explanation": "Kesultanan ini turut dikenali sebagai Kesultanan Johor, terutamanya sebelum pusat pemerintahannya berpindah ke Riau. Aceh, Pahang dan Siak ialah kerajaan lain.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_06",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Mengapakah pusat pemerintahan Johor Riau berpindah beberapa kali?",
    "options": [
      "Kerana ancaman peperangan dan tekanan kuasa luar",
      "Kerana raja ingin melawat pedagang asing",
      "Kerana penduduk memilih pusat pemerintahan baharu",
      "Kerana pusat lama ditenggelami air laut"
    ],
    "correctIndex": 0,
    "explanation": "Ancaman peperangan, terutamanya dengan Portugis dan Aceh, menyebabkan pusat pemerintahan Johor Riau berpindah antara Johor Lama, Batu Sawar dan Riau.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_07",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Apakah hubung kait antara Sultan Alauddin Riayat Shah II dengan Kesultanan Melaka?",
    "options": [
      "Baginda ialah Bendahara Melaka yang menyerah diri",
      "Baginda ialah anak kepada Sultan Mahmud Shah dari Melaka",
      "Baginda ialah pedagang Portugis yang berkahwin dengan puteri Melaka",
      "Baginda tidak mempunyai hubungan dengan Melaka"
    ],
    "correctIndex": 1,
    "explanation": "Sultan Alauddin Riayat Shah II ialah anak Sultan Mahmud Shah, sultan terakhir Melaka. Hubungan kekeluargaan ini menjadi asas legitimasi Johor Riau sebagai penerus Melaka.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_08",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "M",
    "q": "Susun lokasi pusat pemerintahan Johor Riau mengikut urutan yang lazim disebut.",
    "options": [
      "Riau -> Batu Sawar -> Johor Lama",
      "Batu Sawar -> Johor Lama -> Riau",
      "Johor Lama -> Batu Sawar -> Riau",
      "Johor Lama -> Riau -> Batu Sawar"
    ],
    "correctIndex": 2,
    "explanation": "Pusat pemerintahan bermula di Johor Lama, kemudian berpindah ke Batu Sawar dan akhirnya ke Riau. Perpindahan ini berlaku akibat ancaman peperangan.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_09",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Mengapakah Johor Riau boleh mendakwa dirinya sebagai pewaris Melaka?",
    "options": [
      "Kerana Johor Riau terletak berhampiran Melaka",
      "Kerana Johor Riau menggunakan undang-undang Portugis",
      "Kerana Johor Riau menerima bantuan Belanda sepenuhnya",
      "Kerana pengasasnya ialah kerabat Kesultanan Melayu Melaka"
    ],
    "correctIndex": 3,
    "explanation": "Dakwaan sebagai pewaris Melaka berasaskan keturunan pengasasnya daripada kerabat Kesultanan Melaka, bukan semata-mata kedudukan geografi.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s1_10",
    "unit": "b6",
    "skill": "b6_s1",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang perkembangan awal Johor Riau?",
    "options": [
      "Johor Riau kekal sebagai kerajaan kecil tanpa pengaruh",
      "Johor Riau berkembang sebagai penerus Melaka yang berdepan tekanan Portugis dan Aceh",
      "Johor Riau diasaskan sebelum Melaka jatuh",
      "Johor Riau tidak mempunyai pusat pemerintahan tetap"
    ],
    "correctIndex": 1,
    "explanation": "Johor Riau berkembang sebagai penerus Melaka, tetapi terpaksa berdepan tekanan Portugis dan Aceh yang menyebabkan perpindahan pusat pemerintahannya.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_01",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah kuasa-kuasa yang terlibat dalam Perang Tiga Segi?",
    "options": [
      "Johor, Portugis dan Aceh",
      "Johor, Belanda dan Siam",
      "Melaka, China dan India",
      "Johor, Perak dan Pahang"
    ],
    "correctIndex": 0,
    "explanation": "Perang Tiga Segi melibatkan Johor, Portugis dan Aceh yang bersaing untuk menguasai perdagangan di Selat Melaka.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_02",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah punca utama Perang Tiga Segi?",
    "options": [
      "Pertikaian mengenai sempadan pertanian",
      "Persaingan menguasai perdagangan di Selat Melaka",
      "Perebutan takhta Kerajaan Siam",
      "Perselisihan mengenai bahasa rasmi"
    ],
    "correctIndex": 1,
    "explanation": "Perang Tiga Segi berpunca daripada persaingan antara Johor, Portugis dan Aceh untuk menguasai laluan perdagangan yang penting di Selat Melaka.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_03",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Pada tahun bilakah Perjanjian Inggeris-Belanda ditandatangani?",
    "options": [
      "1511",
      "1641",
      "1824",
      "1874"
    ],
    "correctIndex": 2,
    "explanation": "Perjanjian Inggeris-Belanda ditandatangani pada tahun 1824. Perjanjian ini membahagikan Alam Melayu kepada dua lingkungan pengaruh.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_04",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Apakah kesan Perjanjian Inggeris-Belanda 1824 terhadap Johor Riau?",
    "options": [
      "Johor Riau menjadi kerajaan paling kuat di Alam Melayu",
      "Johor Riau menerima seluruh wilayah Melaka",
      "Johor Riau dihapuskan sepenuhnya",
      "Wilayah Johor Riau terpecah kepada dua pengaruh"
    ],
    "correctIndex": 3,
    "explanation": "Perjanjian 1824 memecahkan wilayah Johor Riau kepada dua lingkungan pengaruh, iaitu British dan Belanda. Ia tidak menguntungkan Johor Riau sepenuhnya.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_05",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "L",
    "q": "Kuasa Eropah manakah yang menguasai Melaka selepas tahun 1641?",
    "options": [
      "Belanda",
      "Portugis",
      "Sepanyol",
      "Perancis"
    ],
    "correctIndex": 0,
    "explanation": "Belanda menguasai Melaka selepas mengalahkan Portugis pada tahun 1641. Portugis pula yang menakluki Melaka pada tahun 1511.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_06",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Mengapakah Johor, Portugis dan Aceh bersaing sesama sendiri walaupun semuanya mahu menguasai perdagangan?",
    "options": [
      "Kerana ketiga-tiganya mengamalkan agama yang sama",
      "Kerana masing-masing mahu menguasai laluan dagangan secara berasingan",
      "Kerana ketiga-tiganya bersekutu menentang China",
      "Kerana ketiga-tiganya tidak berminat dengan Selat Melaka"
    ],
    "correctIndex": 1,
    "explanation": "Ketiga-tiga kuasa bersaing kerana masing-masing mahukan kawalan tunggal ke atas laluan perdagangan di Selat Melaka, sehingga kepentingan mereka bercanggah.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_07",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Apakah perbezaan antara punca Perang Tiga Segi dengan punca kejatuhan Melaka?",
    "options": [
      "Perang Tiga Segi berpunca daripada serangan Portugis manakala kejatuhan Melaka daripada persaingan perdagangan",
      "Kedua-duanya berpunca daripada bencana alam",
      "Perang Tiga Segi berpunca daripada persaingan perdagangan manakala kejatuhan Melaka berpunca daripada serangan Portugis",
      "Kedua-duanya tidak melibatkan kuasa asing"
    ],
    "correctIndex": 2,
    "explanation": "Perang Tiga Segi berpunca daripada persaingan perdagangan antara tiga kuasa, manakala kejatuhan Melaka berpunca daripada serangan Portugis pada tahun 1511.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_08",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "M",
    "q": "Bagaimanakah Perjanjian Inggeris-Belanda 1824 mengubah kedudukan Johor Riau dalam Alam Melayu?",
    "options": [
      "Johor Riau menjadi penguasa seluruh Kepulauan Melayu",
      "Johor Riau memperoleh semula wilayah Melaka",
      "Johor Riau tidak terjejas langsung",
      "Johor Riau kehilangan kedudukan sebagai kuasa tunggal di rantau itu"
    ],
    "correctIndex": 3,
    "explanation": "Perjanjian 1824 membahagikan wilayah Johor Riau antara pengaruh British dan Belanda, menyebabkan Johor Riau kehilangan kedudukan sebagai kuasa tunggal di rantau tersebut.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_09",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Mengapakah Perjanjian Inggeris-Belanda 1824 dianggap tidak menguntungkan Johor Riau sepenuhnya?",
    "options": [
      "Kerana perjanjian itu memecahkan wilayah dan mengurangkan kuasa Johor Riau",
      "Kerana perjanjian itu memberi Johor Riau seluruh wilayah Belanda",
      "Kerana perjanjian itu menghapuskan perdagangan di Selat Melaka",
      "Kerana perjanjian itu menjadikan Johor Riau kuasa Eropah"
    ],
    "correctIndex": 0,
    "explanation": "Perjanjian 1824 membahagikan wilayah Johor Riau kepada dua lingkungan pengaruh, seterusnya melemahkan kuasa dan kesatuan kerajaan tersebut.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s2_10",
    "unit": "b6",
    "skill": "b6_s2",
    "diff": "H",
    "q": "Apakah kesimpulan tentang kesan persaingan kuasa terhadap Johor Riau?",
    "options": [
      "Persaingan kuasa memperkukuh Johor Riau sebagai kuasa tunggal",
      "Persaingan kuasa tidak memberi kesan kepada Johor Riau",
      "Persaingan kuasa melemahkan Johor Riau dan membuka ruang campur tangan Eropah",
      "Persaingan kuasa menyatukan Johor Riau dengan Aceh"
    ],
    "correctIndex": 2,
    "explanation": "Persaingan antara Johor, Portugis dan Aceh melemahkan Johor Riau dari segi ekonomi dan politik, sekali gus membuka ruang kepada campur tangan kuasa Eropah.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_01",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah karya agung yang dikaitkan dengan warisan Kesultanan Melayu Melaka dan Johor Riau?",
    "options": [
      "Hikayat Hang Tuah sahaja",
      "Sulalatus Salatin (Sejarah Melayu)",
      "Undang-undang Laut Melaka",
      "Syair Siti Zubaidah"
    ],
    "correctIndex": 1,
    "explanation": "Sulalatus Salatin atau Sejarah Melayu ialah karya agung yang mencatat sejarah kesultanan Melayu. Ia bermula pada zaman Melaka dan disalin semula kemudian.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_02",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah bentuk pemerintahan yang diwarisi oleh Kesultanan Johor Riau daripada Melaka?",
    "options": [
      "Sistem republik",
      "Sistem pemilihan raja melalui undian",
      "Sistem pemerintahan beraja",
      "Sistem pemerintahan oleh pedagang"
    ],
    "correctIndex": 2,
    "explanation": "Johor Riau mewarisi sistem pemerintahan beraja daripada Melaka, dengan Sultan sebagai pemerintah tertinggi dan pembesar membantu pentadbiran.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_03",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Di kawasan manakah pengaruh budaya Melayu Johor Riau terus berkembang?",
    "options": [
      "Kepulauan Andaman",
      "Pulau Taiwan",
      "Kepulauan Hawaii",
      "Kepulauan Riau"
    ],
    "correctIndex": 3,
    "explanation": "Pengaruh budaya Melayu Johor Riau terus berkembang di Kepulauan Riau, terutamanya dalam bidang bahasa, sastera dan adat.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_04",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah gelaran pembesar yang membantu Sultan dalam pentadbiran Johor Riau?",
    "options": [
      "Bendahara dan Temenggung",
      "Undang dan Lembaga",
      "Syahbandar dan Penghulu",
      "Pendeta dan Guru"
    ],
    "correctIndex": 0,
    "explanation": "Johor Riau meneruskan gelaran pembesar seperti Bendahara dan Temenggung yang diwarisi daripada Melaka. Undang dan Lembaga pula khusus kepada Negeri Sembilan.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_05",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "L",
    "q": "Apakah warisan budaya Johor Riau yang masih kekal sehingga kini?",
    "options": [
      "Penggunaan tulisan Pallava dalam urusan rasmi",
      "Adat istiadat dan kesenian Melayu",
      "Sistem kasta Hindu dalam pentadbiran",
      "Upacara penyembahan candi"
    ],
    "correctIndex": 1,
    "explanation": "Adat istiadat dan kesenian Melayu Johor Riau terus diwarisi sehingga kini. Tulisan Pallava dan upacara candi tidak lagi digunakan.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_06",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Mengapakah Sulalatus Salatin penting kepada kajian sejarah Johor Riau?",
    "options": [
      "Kerana karya itu ditulis oleh pedagang Portugis",
      "Kerana karya itu hanya mengandungi pantun",
      "Kerana karya itu mencatat sejarah kesultanan Melayu termasuk Melaka dan Johor",
      "Kerana karya itu ditulis dalam tulisan Pallava"
    ],
    "correctIndex": 2,
    "explanation": "Sulalatus Salatin merekodkan sejarah kesultanan Melayu dan menjadi rujukan penting kepada pengkaji sejarah Johor Riau serta Melaka.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_07",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Bagaimanakah budaya Johor Riau menunjukkan kesinambungan daripada warisan Melaka?",
    "options": [
      "Melalui penggunaan undang-undang Portugis",
      "Melalui penghapusan semua gelaran pembesar",
      "Melalui penolakan bahasa Melayu",
      "Melalui penerusan adat istiadat, sastera dan sistem pemerintahan beraja"
    ],
    "correctIndex": 3,
    "explanation": "Johor Riau meneruskan adat istiadat, sastera dan sistem pemerintahan beraja daripada Melaka, menunjukkan kesinambungan budaya Melayu.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_08",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "M",
    "q": "Apakah perbezaan antara gelaran pembesar Johor Riau dengan struktur pembesar Melaka?",
    "options": [
      "Johor Riau meneruskan gelaran seperti Bendahara dan Temenggung dengan penyesuaian tersendiri",
      "Johor Riau menghapuskan semua gelaran pembesar",
      "Johor Riau menggunakan gelaran Undang seperti Negeri Sembilan",
      "Johor Riau menyerahkan kuasa pentadbiran kepada pedagang"
    ],
    "correctIndex": 0,
    "explanation": "Johor Riau meneruskan gelaran pembesar seperti Bendahara dan Temenggung, tetapi struktur dan kuasa masing-masing disesuaikan dengan keadaan kerajaan tersebut.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_09",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Mengapakah Sulalatus Salatin tidak boleh dianggap ditulis sepenuhnya pada zaman Johor Riau?",
    "options": [
      "Kerana karya itu ditulis oleh pedagang Belanda",
      "Kerana karya itu bermula pada zaman Melaka dan disalin semula kemudian",
      "Kerana karya itu hanya ditulis pada abad ke-20",
      "Kerana karya itu tidak mencatat sejarah Melaka"
    ],
    "correctIndex": 1,
    "explanation": "Sulalatus Salatin bermula pada zaman Melaka dan kemudiannya disalin serta ditambah semasa zaman Johor Riau. Gagal membezakan dua lapisan zaman ini membawa kepada anggapan yang salah.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b6_s3_10",
    "unit": "b6",
    "skill": "b6_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang warisan Johor Riau?",
    "options": [
      "Warisan Johor Riau terpisah sepenuhnya daripada Melaka",
      "Warisan Johor Riau hanya berbentuk seni bina candi",
      "Warisan Johor Riau hilang sepenuhnya selepas tahun 1824",
      "Warisan Johor Riau meneruskan kesinambungan budaya dan pemerintahan Melaka"
    ],
    "correctIndex": 3,
    "explanation": "Johor Riau meneruskan kesinambungan budaya Melaka dalam adat, sastera dan pemerintahan beraja, walaupun pusat pemerintahannya berpindah dan wilayahnya terpecah.",
    "ref": "Bab 6, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_01",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Kesultanan Pahang dan Perak diasaskan oleh kerabat daripada",
    "options": [
      "Kesultanan Aceh",
      "Kerajaan Majapahit",
      "Kesultanan Melayu Melaka",
      "Kerajaan Siam"
    ],
    "correctIndex": 2,
    "explanation": "Kesultanan Pahang dan Perak diasaskan oleh kerabat Kesultanan Melayu Melaka. Hubungan kekeluargaan ini menjadi asas legitimasi pemerintahan kedua-dua kesultanan.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_02",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Siapakah tokoh yang dikaitkan dengan pengasasan Kesultanan Perak?",
    "options": [
      "Sultan Zainal Abidin I",
      "Sultan Salehuddin",
      "Sultan Alauddin Riayat Shah II",
      "Sultan Muzaffar Shah I"
    ],
    "correctIndex": 3,
    "explanation": "Kesultanan Perak diasaskan oleh Sultan Muzaffar Shah I, iaitu kerabat Kesultanan Melaka. Sultan Zainal Abidin I pula dikaitkan dengan Terengganu.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_03",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah asas legitimasi pemerintahan Kesultanan Pahang dan Perak?",
    "options": [
      "Hubungan kekeluargaan dengan Kesultanan Melayu Melaka",
      "Pemilihan raja oleh pedagang asing",
      "Penaklukan oleh kerajaan Siam",
      "Perjanjian dengan kerajaan Belanda"
    ],
    "correctIndex": 0,
    "explanation": "Kedua-dua kesultanan meletakkan hubungan kekeluargaan dengan kerabat Melaka sebagai asas legitimasi pemerintahan mereka.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_04",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Kerajaan manakah yang merupakan salah satu kesultanan Melayu yang diasaskan oleh kerabat Melaka?",
    "options": [
      "Aceh",
      "Pahang",
      "Brunei",
      "Sulu"
    ],
    "correctIndex": 1,
    "explanation": "Pahang ialah antara kesultanan yang diasaskan oleh kerabat Melaka. Aceh, Brunei dan Sulu mempunyai latar pengasasan yang berbeza.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_05",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "L",
    "q": "Apakah gelaran pemerintah tertinggi dalam Kesultanan Pahang dan Perak?",
    "options": [
      "Raja Muda",
      "Bendahara",
      "Sultan",
      "Undang"
    ],
    "correctIndex": 2,
    "explanation": "Kedua-dua kesultanan diperintah oleh Sultan sebagai pemerintah tertinggi, dengan pembesar membantu pentadbiran. Raja Muda dan Bendahara ialah jawatan di bawah Sultan.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_06",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Mengapakah hubungan kekeluargaan dengan Melaka penting kepada Kesultanan Pahang dan Perak?",
    "options": [
      "Kerana hubungan itu membolehkan kedua-dua negeri menerima cukai Melaka",
      "Kerana hubungan itu menghalang kedua-dua negeri daripada berdagang",
      "Kerana hubungan itu menjadikan kedua-dua negeri tanah jajahan Portugis",
      "Kerana hubungan itu mengukuhkan hak memerintah dan kesetiaan rakyat"
    ],
    "correctIndex": 3,
    "explanation": "Hubungan kekeluargaan dengan Melaka memberi kesahihan kepada pemerintah baharu dan mengukuhkan kesetiaan rakyat terhadap kesultanan tersebut.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_07",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Apakah perbezaan pengasas antara Kesultanan Pahang dengan Kesultanan Perak?",
    "options": [
      "Pahang dikaitkan dengan kerabat Melaka manakala Perak diasaskan oleh Sultan Muzaffar Shah I",
      "Pahang diasaskan oleh pedagang asing manakala Perak oleh kerabat Melaka",
      "Kedua-duanya diasaskan oleh Sultan Zainal Abidin I",
      "Kedua-duanya diasaskan oleh kerabat Johor sahaja"
    ],
    "correctIndex": 0,
    "explanation": "Kedua-dua kesultanan berkait dengan kerabat Melaka, tetapi tokoh pengasasnya berbeza. Perak dikaitkan dengan Sultan Muzaffar Shah I.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_08",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "M",
    "q": "Bagaimanakah Kesultanan Pahang dan Perak meneruskan amalan pentadbiran Melaka?",
    "options": [
      "Dengan menghapuskan jawatan Bendahara",
      "Dengan mengekalkan sistem pemerintahan beraja dan jawatan pembesar",
      "Dengan menyerahkan pentadbiran kepada pedagang asing",
      "Dengan mengamalkan sistem pilihan raya"
    ],
    "correctIndex": 1,
    "explanation": "Kedua-dua kesultanan meneruskan sistem pemerintahan beraja serta jawatan pembesar seperti Bendahara, sekali gus mengekalkan kesinambungan pentadbiran Melaka.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_09",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Mengapakah pengasasan kesultanan oleh kerabat diraja lebih mudah diterima oleh rakyat?",
    "options": [
      "Kerana kerabat diraja membawa senjata moden",
      "Kerana rakyat diberi hak mengundi pemerintah",
      "Kerana keturunan diraja dianggap mempunyai hak dan kewibawaan memerintah",
      "Kerana kerabat diraja menolak semua adat tempatan"
    ],
    "correctIndex": 2,
    "explanation": "Keturunan diraja dianggap mempunyai hak serta kewibawaan memerintah, sehingga pemerintahan mereka lebih mudah diterima dan dihormati oleh rakyat.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s1_10",
    "unit": "b7",
    "skill": "b7_s1",
    "diff": "H",
    "q": "Apakah kesimpulan tentang hubungan Pahang, Perak dan Melaka?",
    "options": [
      "Ketiga-tiganya berkongsi warisan kerajaan Melayu melalui hubungan kekeluargaan diraja",
      "Ketiga-tiganya tidak mempunyai hubungan sejarah",
      "Pahang dan Perak ialah tanah jajahan Portugis",
      "Pahang dan Perak menolak sistem pemerintahan beraja"
    ],
    "correctIndex": 0,
    "explanation": "Pahang dan Perak berkongsi warisan kerajaan Melayu dengan Melaka melalui hubungan kekeluargaan diraja, yang menjadi asas pemerintahan dan budaya mereka.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_01",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Siapakah tokoh yang dikaitkan dengan pengasasan Kesultanan Terengganu?",
    "options": [
      "Sultan Salehuddin",
      "Sultan Muzaffar Shah I",
      "Sultan Alauddin Riayat Shah II",
      "Sultan Zainal Abidin I"
    ],
    "correctIndex": 3,
    "explanation": "Kesultanan Terengganu dikaitkan dengan Sultan Zainal Abidin I. Sultan Salehuddin pula dikaitkan dengan pengasasan Kesultanan Selangor.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_02",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Pengaruh kerabat manakah yang kuat dalam pengasasan Kesultanan Selangor?",
    "options": [
      "Kerabat Bugis",
      "Kerabat Minangkabau",
      "Kerabat Siam",
      "Kerabat Portugis"
    ],
    "correctIndex": 0,
    "explanation": "Kesultanan Selangor diasaskan dengan pengaruh kerabat Bugis yang mempunyai hubungan dengan Johor Riau. Minangkabau pula berkait dengan Negeri Sembilan.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_03",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Kesultanan Selangor diasaskan oleh tokoh bernama",
    "options": [
      "Sultan Zainal Abidin I",
      "Sultan Salehuddin",
      "Sultan Muzaffar Shah I",
      "Raja Kecil"
    ],
    "correctIndex": 1,
    "explanation": "Sultan Salehuddin dikaitkan dengan pengasasan Kesultanan Selangor. Raja Kecil pula ialah tokoh dalam sejarah Johor Riau.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_04",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Kesultanan Terengganu diasaskan oleh Sultan Zainal Abidin I yang berasal daripada keturunan",
    "options": [
      "pedagang Arab di Kuala Terengganu",
      "kerajaan Siam di utara",
      "kerabat diraja Johor Riau",
      "kerajaan Bugis di Selangor"
    ],
    "correctIndex": 2,
    "explanation": "Sultan Zainal Abidin I ialah kerabat diraja Johor Riau yang dihantar memerintah Terengganu, dan kesultanan itu kemudiannya berkembang sebagai kerajaan Melayu tersendiri.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_05",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "L",
    "q": "Apakah pengaruh Johor Riau terhadap pengasasan Selangor?",
    "options": [
      "Johor menghantar tentera untuk menghapuskan Selangor",
      "Johor menyerahkan seluruh wilayahnya kepada Selangor",
      "Johor melantik pedagang asing sebagai Sultan Selangor",
      "Pengasas Selangor berasal daripada kerabat Bugis yang berkait dengan Johor"
    ],
    "correctIndex": 3,
    "explanation": "Pengasas Selangor berasal daripada kerabat Bugis yang mempunyai hubungan dengan Johor Riau, jadi pengasasan Selangor tidak terpisah daripada Johor.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_06",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Mengapakah pengasas Terengganu dan Selangor sering dikelirukan dalam soalan padanan?",
    "options": [
      "Kerana kedua-dua kesultanan diasaskan pada zaman yang hampir sama oleh tokoh berbeza",
      "Kerana kedua-duanya diasaskan oleh tokoh yang sama",
      "Kerana kedua-duanya terletak di Borneo",
      "Kerana kedua-duanya tidak mempunyai sultan"
    ],
    "correctIndex": 0,
    "explanation": "Kedua-dua kesultanan diasaskan pada zaman yang hampir sama, tetapi oleh tokoh berbeza. Terengganu dikaitkan dengan Sultan Zainal Abidin I, manakala Selangor dengan Sultan Salehuddin.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_07",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Apakah perbezaan latar pengasasan antara Kesultanan Terengganu dengan Kesultanan Selangor?",
    "options": [
      "Terengganu diasaskan oleh kerabat Bugis manakala Selangor oleh Sultan Zainal Abidin I",
      "Terengganu diasaskan oleh kerabat diraja Johor Riau manakala Selangor oleh kerabat Bugis",
      "Kedua-duanya diasaskan oleh pedagang Portugis",
      "Kedua-duanya tidak mempunyai hubungan dengan kerajaan Melayu lain"
    ],
    "correctIndex": 1,
    "explanation": "Terengganu diasaskan oleh Sultan Zainal Abidin I daripada kerabat diraja Johor Riau, manakala Selangor diasaskan oleh kerabat Bugis yang mempunyai hubungan dengan Johor Riau.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_08",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "M",
    "q": "Bagaimanakah hubungan dengan Johor Riau mempengaruhi kedudukan Kesultanan Selangor?",
    "options": [
      "Hubungan itu menjadikan Selangor tanah jajahan Portugis",
      "Hubungan itu menghalang Selangor daripada mempunyai sultan",
      "Hubungan itu memberi kesahihan kepada pemerintah Selangor",
      "Hubungan itu menghapuskan adat Melayu di Selangor"
    ],
    "correctIndex": 2,
    "explanation": "Hubungan dengan kerabat Bugis Johor Riau memberi kesahihan kepada pemerintah Selangor serta mengukuhkan kedudukannya dalam kalangan kerajaan Melayu.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_09",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "H",
    "q": "Mengapakah Kesultanan Selangor tidak boleh dianggap diasaskan secara terpisah daripada kerajaan Melayu lain?",
    "options": [
      "Kerana Selangor terletak di kawasan Borneo",
      "Kerana Selangor tidak pernah mempunyai sultan",
      "Kerana Selangor diasaskan oleh pedagang Belanda",
      "Kerana pengasasnya mempunyai hubungan dengan kerabat Bugis Johor Riau"
    ],
    "correctIndex": 3,
    "explanation": "Pengasas Selangor mempunyai hubungan dengan kerabat Bugis Johor Riau, jadi pengasasan Selangor terikat dengan jaringan kerajaan Melayu yang sedia ada.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s2_10",
    "unit": "b7",
    "skill": "b7_s2",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang pengasasan Terengganu dan Selangor?",
    "options": [
      "Kedua-duanya terpisah daripada tradisi kerajaan Melayu",
      "Kedua-duanya berkembang daripada jaringan kerajaan Melayu yang sedia ada",
      "Kedua-duanya diasaskan oleh kerajaan Siam",
      "Kedua-duanya menolak sistem pemerintahan beraja"
    ],
    "correctIndex": 1,
    "explanation": "Terengganu dan Selangor berkembang daripada jaringan kerajaan Melayu yang sedia ada melalui hubungan diraja dan kerabat Bugis, bukan secara terpisah.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_01",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi utama yang terkenal di Perak?",
    "options": [
      "Perlombongan bijih timah",
      "Penangkapan ikan paus",
      "Penanaman gandum",
      "Pembinaan kapal layar"
    ],
    "correctIndex": 0,
    "explanation": "Perak terkenal dengan perlombongan bijih timah yang menjadi kegiatan ekonomi penting di negeri itu.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_02",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi yang terkenal di Terengganu?",
    "options": [
      "Perlombongan bijih timah sahaja",
      "Hasil laut dan pertanian",
      "Pembinaan kapal terbang",
      "Pengeluaran gandum"
    ],
    "correctIndex": 1,
    "explanation": "Terengganu lebih terkenal dengan hasil laut dan pertanian berbanding perlombongan bijih timah. Kegiatan ini menyokong ekonomi penduduk pesisir.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_03",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah hasil utama yang terkenal di Pahang?",
    "options": [
      "Gandum",
      "Bijih timah British",
      "Hasil hutan",
      "Kain bulu"
    ],
    "correctIndex": 2,
    "explanation": "Pahang terkenal dengan hasil hutan seperti kayu-kayan, rotan dan damar. Gandum, bijih timah British dan kain bulu pula bukan hasil tempatan.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_04",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah warisan budaya yang menjadi kebanggaan Kesultanan Selangor?",
    "options": [
      "Upacara penyembahan candi",
      "Penggunaan tulisan Pallava",
      "Sistem kasta Hindu",
      "Adat istiadat Melayu dan seni persembahan"
    ],
    "correctIndex": 3,
    "explanation": "Selangor mewarisi adat istiadat Melayu serta seni persembahan sebagai warisan budaya. Unsur candi dan tulisan Pallava bukan warisan kesultanan ini.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_05",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi tradisional yang masih dijalankan di kawasan pesisir Terengganu?",
    "options": [
      "Perikanan",
      "Perlombongan arang batu",
      "Pembuatan kereta",
      "Penanaman gandum"
    ],
    "correctIndex": 0,
    "explanation": "Perikanan masih menjadi kegiatan ekonomi tradisional penting di kawasan pesisir Terengganu, selain pertanian.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_06",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Mengapakah kegiatan ekonomi keempat-empat kesultanan tidak boleh dianggap seragam?",
    "options": [
      "Kerana keempat-empatnya hanya bergantung pada bijih timah",
      "Kerana setiap negeri mempunyai sumber semula jadi dan pengaruh tempatan yang berbeza",
      "Kerana keempat-empatnya tidak menjalankan kegiatan ekonomi",
      "Kerana semuanya terletak di kawasan gurun"
    ],
    "correctIndex": 1,
    "explanation": "Setiap negeri mempunyai sumber semula jadi dan pengaruh tempatan yang berbeza, jadi kegiatan ekonominya juga berbeza. Perak terkenal dengan bijih timah, Pahang dengan hasil hutan dan Terengganu dengan hasil laut.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_07",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Bagaimanakah hasil hutan menyumbang kepada ekonomi Kesultanan Pahang?",
    "options": [
      "Hasil hutan menghalang pedagang daripada masuk ke Pahang",
      "Hasil hutan hanya digunakan untuk upacara keagamaan",
      "Hasil hutan menjadi barang dagangan dan sumber pendapatan penduduk",
      "Hasil hutan menggantikan sepenuhnya kegiatan pertanian"
    ],
    "correctIndex": 2,
    "explanation": "Hasil hutan seperti rotan, damar dan kayu-kayan menjadi barang dagangan serta sumber pendapatan. Ia tidak menghalang pedagang dan tidak menggantikan pertanian sepenuhnya.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_08",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "M",
    "q": "Seorang pedagang ingin membeli bijih timah dalam jumlah besar. Negeri manakah yang paling sesuai dikunjunginya?",
    "options": [
      "Terengganu",
      "Pahang",
      "Kelantan",
      "Perak"
    ],
    "correctIndex": 3,
    "explanation": "Perak ialah negeri yang terkenal dengan perlombongan bijih timah. Terengganu lebih terkenal dengan hasil laut dan pertanian, manakala Pahang dengan hasil hutan.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_09",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Mengapakah warisan budaya keempat-empat kesultanan berbeza walaupun semuanya kerajaan Melayu?",
    "options": [
      "Kerana pengaruh tempatan dan sejarah pengasasan masing-masing berbeza",
      "Kerana keempat-empatnya menolak budaya Melayu",
      "Kerana keempat-empatnya terletak di luar Alam Melayu",
      "Kerana keempat-empatnya tidak mempunyai adat istiadat"
    ],
    "correctIndex": 0,
    "explanation": "Perbezaan pengaruh tempatan dan sejarah pengasasan menyebabkan warisan budaya setiap kesultanan mempunyai ciri tersendiri, walaupun semuanya berakar pada budaya Melayu.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b7_s3_10",
    "unit": "b7",
    "skill": "b7_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang kegiatan ekonomi kesultanan Pahang, Perak, Terengganu dan Selangor?",
    "options": [
      "Semua negeri bergantung sepenuhnya pada bijih timah",
      "Semua negeri hanya menjalankan perdagangan maritim",
      "Setiap negeri menggunakan sumber semula jadi tempatan mengikut keadaan geografinya",
      "Tiada kegiatan ekonomi tradisional di negeri-negeri tersebut"
    ],
    "correctIndex": 2,
    "explanation": "Setiap negeri menggunakan sumber semula jadi yang ada mengikut keadaan geografi masing-masing, seperti bijih timah di Perak serta hasil laut dan pertanian di Terengganu.",
    "ref": "Bab 7, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_01",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Pengaruh kuasa manakah yang kuat dalam pembentukan Kerajaan Kedah dan Kelantan?",
    "options": [
      "Minangkabau",
      "Siam",
      "Portugis",
      "Brunei"
    ],
    "correctIndex": 1,
    "explanation": "Kedah dan Kelantan berada dalam lingkungan pengaruh Siam. Pengaruh Minangkabau pula lebih kuat di Negeri Sembilan.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_02",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Pengasasan Negeri Sembilan berkait rapat dengan kedatangan orang",
    "options": [
      "Bugis dari Sulawesi",
      "Siam dari utara",
      "Minangkabau dari Sumatera",
      "Portugis dari Melaka"
    ],
    "correctIndex": 2,
    "explanation": "Negeri Sembilan dibentuk melalui kedatangan orang Minangkabau dari Sumatera. Pengaruh Bugis pula lebih ketara di Selangor.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_03",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Perlis pada suatu ketika berada di bawah pengaruh negeri",
    "options": [
      "Johor",
      "Pahang",
      "Terengganu",
      "Kedah"
    ],
    "correctIndex": 3,
    "explanation": "Perlis pada suatu ketika berada di bawah pengaruh Kedah sebelum dipisahkan sebagai negeri tersendiri. Perlis tidak diasaskan oleh kerabat Johor atau Pahang.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_04",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah negeri yang terkenal dengan amalan Adat Perpatih?",
    "options": [
      "Negeri Sembilan",
      "Kelantan",
      "Perlis",
      "Kedah"
    ],
    "correctIndex": 0,
    "explanation": "Adat Perpatih diamalkan secara khusus di Negeri Sembilan, dibawa bersama kedatangan orang Minangkabau. Kelantan, Perlis dan Kedah tidak mengamalkan adat ini secara meluas.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_05",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "L",
    "q": "Apakah negeri yang pada awalnya tidak menjadi negeri berasingan daripada Kedah?",
    "options": [
      "Selangor",
      "Perlis",
      "Pahang",
      "Johor"
    ],
    "correctIndex": 1,
    "explanation": "Perlis pada asalnya berada di bawah pengaruh Kedah sebelum dipisahkan. Selangor, Pahang dan Johor mempunyai sejarah pengasasan yang berbeza.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_06",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Mengapakah pengaruh Siam dan Minangkabau sering dikelirukan dalam soalan pengelasan?",
    "options": [
      "Kerana kedua-duanya mempengaruhi negeri yang sama",
      "Kerana kedua-duanya berasal dari Alam Melayu",
      "Kerana kedua-duanya mempengaruhi negeri Melayu yang berbeza",
      "Kerana kedua-duanya menolak sistem pemerintahan beraja"
    ],
    "correctIndex": 2,
    "explanation": "Pengaruh Siam menonjol di Kedah, Kelantan dan Perlis, manakala pengaruh Minangkabau menonjol di Negeri Sembilan. Perbezaan ini penting dalam soalan pengelasan negeri.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_07",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Bagaimanakah pengaruh Minangkabau membentuk Negeri Sembilan?",
    "options": [
      "Melalui penaklukan tentera Siam ke atas Negeri Sembilan",
      "Melalui perjanjian dengan kerajaan Portugis",
      "Melalui penghantaran pembesar dari Melaka",
      "Melalui kedatangan pendatang Minangkabau yang membentuk penempatan dan adat tersendiri"
    ],
    "correctIndex": 3,
    "explanation": "Negeri Sembilan dibentuk melalui kedatangan pendatang Minangkabau yang membawa adat serta cara hidup tersendiri, terutamanya Adat Perpatih.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_08",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "M",
    "q": "Apakah perbezaan pengaruh luar antara Kedah dengan Negeri Sembilan?",
    "options": [
      "Kedah dipengaruhi Siam manakala Negeri Sembilan dipengaruhi Minangkabau",
      "Kedah dipengaruhi Minangkabau manakala Negeri Sembilan dipengaruhi Siam",
      "Kedua-duanya dipengaruhi Portugis",
      "Kedua-duanya tidak dipengaruhi kuasa luar"
    ],
    "correctIndex": 0,
    "explanation": "Kedah berada dalam lingkungan pengaruh Siam, manakala Negeri Sembilan dibentuk oleh pengaruh Minangkabau. Perbezaan ini menjadi asas perbandingan antara kedua-dua negeri.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_09",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Mengapakah Negeri Sembilan tidak boleh dianggap diasaskan oleh kerabat Melaka?",
    "options": [
      "Kerana Negeri Sembilan terletak di Sumatera",
      "Kerana pembentukannya berkait dengan kedatangan orang Minangkabau",
      "Kerana Negeri Sembilan tidak mempunyai penduduk",
      "Kerana Negeri Sembilan diasaskan oleh pedagang Portugis"
    ],
    "correctIndex": 1,
    "explanation": "Negeri Sembilan terbentuk daripada penempatan orang Minangkabau yang membawa adat tersendiri, bukan daripada kerabat Kesultanan Melaka.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s1_10",
    "unit": "b8",
    "skill": "b8_s1",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang pembentukan Kedah, Kelantan, Negeri Sembilan dan Perlis?",
    "options": [
      "Keempat-empatnya diasaskan oleh kerabat Melaka",
      "Keempat-empatnya terletak di bawah pengaruh Portugis",
      "Keempat-empatnya tidak mempunyai sistem pemerintahan",
      "Keempat-empatnya dibentuk oleh pengaruh luar dan keadaan tempatan yang berbeza"
    ],
    "correctIndex": 3,
    "explanation": "Setiap negeri terbentuk melalui gabungan pengaruh luar dan keadaan tempatan yang berbeza, seperti Siam di Kedah dan Kelantan serta Minangkabau di Negeri Sembilan.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_01",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah maksud sistem kekeluargaan matrilineal?",
    "options": [
      "Pewarisan harta melalui sebelah bapa",
      "Pemilihan raja melalui undian rakyat",
      "Pewarisan harta dan keturunan melalui sebelah ibu",
      "Kuasa politik dipegang sepenuhnya oleh wanita"
    ],
    "correctIndex": 2,
    "explanation": "Matrilineal merujuk pewarisan harta dan keturunan melalui sebelah ibu. Ia tidak bermaksud wanita memegang kuasa politik tertinggi.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_02",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah adat yang diamalkan di Negeri Sembilan yang berkait dengan sistem matrilineal?",
    "options": [
      "Adat Temenggung",
      "Hukum Kanun Melaka",
      "Undang-undang Laut Melaka",
      "Adat Perpatih"
    ],
    "correctIndex": 3,
    "explanation": "Adat Perpatih diamalkan di Negeri Sembilan dan berkait dengan sistem kekeluargaan matrilineal. Adat Temenggung lebih bersifat patrilineal.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_03",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Siapakah yang dipilih untuk mengetuai sesuatu kawasan dalam sistem pemerintahan Negeri Sembilan?",
    "options": [
      "Undang",
      "Bendahara",
      "Syahbandar",
      "Laksamana"
    ],
    "correctIndex": 0,
    "explanation": "Undang dipilih untuk mengetuai kawasan dalam sistem pemerintahan Negeri Sembilan. Bendahara, Syahbandar dan Laksamana ialah jawatan dalam pentadbiran Melaka.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_04",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah ciri utama Adat Temenggung?",
    "options": [
      "Bersifat matrilineal",
      "Bersifat patrilineal",
      "Diamalkan khusus di Negeri Sembilan",
      "Tidak mengiktiraf keturunan"
    ],
    "correctIndex": 1,
    "explanation": "Adat Temenggung bersifat patrilineal, iaitu keturunan dan pewarisan melalui sebelah bapa. Adat Perpatih pula bersifat matrilineal.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_05",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "L",
    "q": "Apakah gelaran bagi pemerintah tertinggi di Negeri Sembilan?",
    "options": [
      "Sultan",
      "Bendahara",
      "Yang di-Pertuan Besar",
      "Raja Muda"
    ],
    "correctIndex": 2,
    "explanation": "Negeri Sembilan diperintah oleh Yang di-Pertuan Besar yang dipilih daripada kalangan Undang. Gelaran Sultan digunakan oleh kebanyakan negeri Melayu lain.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_06",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Mengapakah Adat Perpatih tidak boleh dianggap diamalkan di semua negeri Melayu?",
    "options": [
      "Kerana adat ini hanya diamalkan di Kelantan",
      "Kerana adat ini telah dihapuskan sepenuhnya",
      "Kerana adat ini hanya untuk pedagang asing",
      "Kerana adat ini khusus diamalkan di Negeri Sembilan"
    ],
    "correctIndex": 3,
    "explanation": "Adat Perpatih khusus diamalkan di Negeri Sembilan kerana berkait dengan kedatangan orang Minangkabau. Negeri Melayu lain lazimnya mengamalkan Adat Temenggung.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_07",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Apakah perbezaan antara Adat Perpatih dengan Adat Temenggung?",
    "options": [
      "Adat Perpatih bersifat matrilineal manakala Adat Temenggung bersifat patrilineal",
      "Adat Perpatih bersifat patrilineal manakala Adat Temenggung bersifat matrilineal",
      "Kedua-duanya bersifat matrilineal",
      "Kedua-duanya tidak mengiktiraf keturunan"
    ],
    "correctIndex": 0,
    "explanation": "Adat Perpatih mewariskan harta dan keturunan melalui sebelah ibu, manakala Adat Temenggung melalui sebelah bapa. Perbezaan ini menjadi asas kepada ciri sosial kedua-dua adat.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_08",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "M",
    "q": "Bagaimanakah Undang dipilih dalam sistem pemerintahan Negeri Sembilan?",
    "options": [
      "Melalui pilihan raya umum seluruh negeri",
      "Daripada kalangan pembesar tempatan mengikut adat yang diamalkan",
      "Dengan dilantik oleh kerajaan Siam",
      "Dengan diwarisi secara automatik oleh anak sulung"
    ],
    "correctIndex": 1,
    "explanation": "Undang dipilih daripada kalangan pembesar tempatan mengikut adat yang diamalkan di Negeri Sembilan. Sistem ini berbeza daripada pewarisan takhta secara automatik.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_09",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "H",
    "q": "Mengapakah sistem matrilineal tidak bermaksud wanita memegang kuasa politik tertinggi?",
    "options": [
      "Kerana wanita dilarang menyertai upacara adat",
      "Kerana sistem ini hanya melibatkan pedagang asing",
      "Kerana matrilineal hanya merujuk pewarisan harta dan keturunan melalui ibu",
      "Kerana sistem ini menghapuskan jawatan Undang"
    ],
    "correctIndex": 2,
    "explanation": "Matrilineal merujuk pewarisan harta dan keturunan melalui sebelah ibu, bukan pengagihan kuasa politik. Kuasa politik kekal dalam struktur pemerintahan seperti Yang di-Pertuan Besar dan Undang.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s2_10",
    "unit": "b8",
    "skill": "b8_s2",
    "diff": "H",
    "q": "Apakah kesimpulan tentang sistem pemerintahan dan adat di Negeri Sembilan?",
    "options": [
      "Sistem pemerintahan dan adatnya dipengaruhi kedatangan orang Minangkabau",
      "Sistem pemerintahan dan adatnya diwarisi terus daripada Melaka",
      "Sistem pemerintahan dan adatnya ditentukan oleh Portugis",
      "Sistem pemerintahan dan adatnya tidak pernah berubah"
    ],
    "correctIndex": 0,
    "explanation": "Sistem pemerintahan dan adat Negeri Sembilan, termasuk Adat Perpatih dan pemilihan Undang, dipengaruhi kedatangan orang Minangkabau dari Sumatera.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_01",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi utama yang terkenal di Kelantan?",
    "options": [
      "Perlombongan bijih timah",
      "Pembinaan kapal terbang",
      "Penanaman gandum",
      "Pertanian padi dan perikanan"
    ],
    "correctIndex": 3,
    "explanation": "Kelantan terkenal dengan pertanian padi, perikanan dan perusahaan tradisional. Kegiatan perlombongan bijih timah lebih dikaitkan dengan negeri seperti Perak.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_02",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah warisan budaya yang terkenal di Kelantan?",
    "options": [
      "Persembahan wayang kulit dan seni ukir",
      "Pembinaan candi Hindu",
      "Penggunaan tulisan Pallava",
      "Sistem kasta dalam pentadbiran"
    ],
    "correctIndex": 0,
    "explanation": "Kelantan terkenal dengan seni persembahan seperti wayang kulit serta seni ukir. Candi dan tulisan Pallava bukan warisan budaya utama negeri ini.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_03",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah kegiatan pertanian yang menjadi tunjang ekonomi tradisional Kedah?",
    "options": [
      "Perlombongan arang batu",
      "Penanaman padi",
      "Penanaman gandum",
      "Pembinaan kilang keluli"
    ],
    "correctIndex": 1,
    "explanation": "Kedah terkenal sebagai kawasan penanaman padi yang penting. Kegiatan ini menyokong ekonomi penduduk sejak zaman tradisional.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_04",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah ciri warisan budaya Negeri Sembilan yang berkait dengan orang Minangkabau?",
    "options": [
      "Candi berbentuk stupa",
      "Masjid berkubah gaya Timur Tengah sahaja",
      "Seni bina rumah beratap melengkung menyerupai tanduk kerbau",
      "Menara tinggi gaya Eropah"
    ],
    "correctIndex": 2,
    "explanation": "Rumah tradisional Negeri Sembilan dengan bumbung melengkung menyerupai tanduk kerbau mencerminkan pengaruh Minangkabau.",
    "ref": "Bab 9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_05",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi tradisional yang dijalankan di kawasan pesisir Kelantan?",
    "options": [
      "Perlombongan bijih timah",
      "Penanaman getah sahaja",
      "Pembinaan kapal terbang",
      "Perikanan"
    ],
    "correctIndex": 3,
    "explanation": "Perikanan ialah kegiatan ekonomi tradisional penting di kawasan pesisir Kelantan, selain pertanian padi di kawasan pedalaman.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_06",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Mengapakah Kelantan tidak boleh dianggap terkenal dengan perlombongan bijih timah?",
    "options": [
      "Kerana kegiatannya lebih tertumpu pada padi, perikanan dan perusahaan tradisional",
      "Kerana Kelantan tidak mempunyai penduduk",
      "Kerana Kelantan terletak di luar Semenanjung",
      "Kerana Kelantan tidak pernah menjalankan kegiatan ekonomi"
    ],
    "correctIndex": 0,
    "explanation": "Kegiatan ekonomi Kelantan lebih tertumpu pada pertanian padi, perikanan dan perusahaan tradisional. Bijih timah lebih dikaitkan dengan negeri seperti Perak.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_07",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Bagaimanakah pengaruh Siam dapat dikesan dalam warisan budaya Kedah dan Kelantan?",
    "options": [
      "Melalui penggunaan tulisan Pallava dalam urusan rasmi",
      "Melalui unsur seni persembahan dan seni bina tempatan",
      "Melalui sistem kasta Hindu",
      "Melalui upacara penyembahan candi"
    ],
    "correctIndex": 1,
    "explanation": "Pengaruh Siam dapat dikesan melalui unsur seni persembahan dan seni bina tempatan di Kedah dan Kelantan. Tulisan Pallava dan candi pula berkait dengan pengaruh Hindu-Buddha yang lebih awal.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_08",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "M",
    "q": "Mengapakah kegiatan ekonomi Kedah dan Perlis mempunyai banyak persamaan?",
    "options": [
      "Kerana kedua-duanya bergantung pada pertanian padi di kawasan yang berhampiran",
      "Kerana kedua-duanya terkenal dengan perlombongan bijih timah",
      "Kerana kedua-duanya terletak di pesisir pantai timur Semenanjung",
      "Kerana kedua-duanya tidak mempunyai kawasan pertanian"
    ],
    "correctIndex": 0,
    "explanation": "Kedah dan Perlis terletak berhampiran dan berkongsi keadaan geografi yang sesuai untuk penanaman padi, menyebabkan kegiatan ekonomi kedua-duanya banyak persamaan.",
    "ref": "Bab 8, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_09",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "H",
    "q": "Mengapakah warisan budaya keempat-empat negeri tidak seragam?",
    "options": [
      "Kerana keempat-empatnya menolak budaya Melayu",
      "Kerana keempat-empatnya terletak di luar Alam Melayu",
      "Kerana keempat-empatnya tidak mempunyai adat resam",
      "Kerana pengaruh Siam, Minangkabau dan tempatan berbeza antara negeri"
    ],
    "correctIndex": 3,
    "explanation": "Perbezaan pengaruh luar seperti Siam dan Minangkabau serta keadaan tempatan menyebabkan warisan budaya setiap negeri mempunyai ciri tersendiri.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b8_s3_10",
    "unit": "b8",
    "skill": "b8_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang warisan budaya dan ekonomi Kedah, Kelantan, Negeri Sembilan dan Perlis?",
    "options": [
      "Semua negeri mempunyai warisan dan ekonomi yang sama",
      "Warisan dan ekonomi setiap negeri dipengaruhi keadaan geografi serta pengaruh luar",
      "Semua negeri bergantung pada bijih timah",
      "Tiada kegiatan ekonomi tradisional di negeri-negeri tersebut"
    ],
    "correctIndex": 1,
    "explanation": "Keadaan geografi dan pengaruh luar seperti Siam dan Minangkabau membentuk warisan budaya serta kegiatan ekonomi yang berbeza antara negeri.",
    "ref": "Bab 8-9, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_01",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Siapakah tokoh yang memulakan pemerintahan Brooke di Sarawak?",
    "options": [
      "James Brooke",
      "Sultan Omar Ali Saifuddin",
      "Rentap",
      "Sharif Masahor"
    ],
    "correctIndex": 0,
    "explanation": "James Brooke ialah tokoh yang memulakan pemerintahan Brooke di Sarawak. Sultan Omar Ali Saifuddin pula dikaitkan dengan sejarah Brunei.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_02",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Apakah nama syarikat yang memerintah Sabah sebelum pembentukan Malaysia?",
    "options": [
      "Syarikat Hindia Timur Belanda",
      "Syarikat Berpiagam Borneo Utara",
      "Syarikat Borneo Sarawak",
      "Syarikat Dagang Melaka"
    ],
    "correctIndex": 1,
    "explanation": "Sabah diperintah oleh Syarikat Berpiagam Borneo Utara. Sarawak pula diperintah oleh keluarga Brooke.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_03",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Siapakah tokoh tempatan yang menentang pemerintahan Brooke di Sarawak?",
    "options": [
      "James Brooke",
      "Sultan Omar Ali Saifuddin",
      "Rentap",
      "Sultan Salehuddin"
    ],
    "correctIndex": 2,
    "explanation": "Rentap ialah tokoh tempatan yang menentang pemerintahan Brooke di Sarawak. Sharif Masahor juga merupakan tokoh penentang yang lain.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_04",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Pemerintahan Brooke berlaku di negeri",
    "options": [
      "Sabah",
      "Perlis",
      "Negeri Sembilan",
      "Sarawak"
    ],
    "correctIndex": 3,
    "explanation": "Pemerintahan Brooke berlaku di Sarawak. Sabah pula berada di bawah Syarikat Berpiagam Borneo Utara.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_05",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "L",
    "q": "Apakah kesan pemerintahan Brooke terhadap penduduk tempatan Sarawak?",
    "options": [
      "Berlaku penentangan oleh tokoh tempatan seperti Rentap",
      "Penduduk menerima pemerintahan tanpa sebarang tentangan",
      "Penduduk dihantar ke Sabah secara paksa",
      "Penduduk kehilangan semua hasil hutan"
    ],
    "correctIndex": 0,
    "explanation": "Penduduk tempatan tidak menerima pemerintahan Brooke secara pasif. Tokoh seperti Rentap dan Sharif Masahor mengetuai penentangan terhadap pemerintahan tersebut.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_06",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Mengapakah James Brooke tidak boleh dianggap sebagai pemerintah Sabah?",
    "options": [
      "Kerana beliau hanya seorang pedagang di Melaka",
      "Kerana beliau memerintah Sarawak manakala Sabah diperintah Syarikat Berpiagam Borneo Utara",
      "Kerana beliau menolak semua bentuk pemerintahan",
      "Kerana beliau memerintah Negeri Sembilan"
    ],
    "correctIndex": 1,
    "explanation": "James Brooke memerintah Sarawak. Sabah pula berada di bawah Syarikat Berpiagam Borneo Utara, jadi kedua-dua wilayah ini mempunyai pemerintahan berbeza.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_07",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Apakah perbezaan pemerintahan antara Sarawak dengan Sabah pada abad ke-19?",
    "options": [
      "Sarawak diperintah Syarikat Berpiagam Borneo Utara manakala Sabah oleh keluarga Brooke",
      "Kedua-duanya diperintah oleh Kesultanan Melaka",
      "Sarawak diperintah keluarga Brooke manakala Sabah oleh Syarikat Berpiagam Borneo Utara",
      "Kedua-duanya tidak mempunyai pemerintah"
    ],
    "correctIndex": 2,
    "explanation": "Sarawak diperintah oleh keluarga Brooke, manakala Sabah diperintah oleh Syarikat Berpiagam Borneo Utara. Perbezaan ini kerap dikelirukan dalam soalan pengelasan.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_08",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "M",
    "q": "Bagaimanakah penentangan tokoh tempatan menunjukkan penduduk Sarawak tidak menerima pemerintahan Brooke secara pasif?",
    "options": [
      "Penduduk menyerahkan semua hasil hutan kepada Brooke",
      "Penduduk memilih Brooke sebagai raja melalui undian",
      "Penduduk berpindah ke Sabah secara sukarela",
      "Tokoh seperti Rentap mengetuai tentangan terhadap pemerintahan tersebut"
    ],
    "correctIndex": 3,
    "explanation": "Penentangan oleh tokoh seperti Rentap dan Sharif Masahor membuktikan penduduk tempatan menolak pemerintahan Brooke, bukan menerimanya secara pasif.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_09",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Mengapakah penyerahan Sarawak kepada Brooke tidak boleh dikelirukan dengan pembentukan Malaysia pada tahun 1963?",
    "options": [
      "Kerana penyerahan Sarawak kepada Brooke berlaku lebih awal daripada pembentukan Malaysia",
      "Kerana kedua-dua peristiwa berlaku pada tahun yang sama",
      "Kerana pembentukan Malaysia berlaku sebelum penyerahan Sarawak",
      "Kerana penyerahan Sarawak tidak pernah berlaku"
    ],
    "correctIndex": 0,
    "explanation": "Penyerahan Sarawak kepada Brooke berlaku pada abad ke-19, jauh lebih awal daripada pembentukan Malaysia pada tahun 1963. Kedua-dua peristiwa ini berbeza dari segi masa dan konteks.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s1_10",
    "unit": "b9",
    "skill": "b9_s1",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang pemerintahan di Sarawak dan Sabah?",
    "options": [
      "Kedua-dua wilayah diperintah oleh keluarga Brooke",
      "Kedua-dua wilayah tidak mempunyai pemerintahan",
      "Kedua-dua wilayah mempunyai bentuk pemerintahan berbeza yang menimbulkan penentangan tempatan",
      "Kedua-dua wilayah diperintah oleh Kesultanan Melaka"
    ],
    "correctIndex": 2,
    "explanation": "Sarawak diperintah keluarga Brooke dan Sabah oleh Syarikat Berpiagam Borneo Utara, dan kedua-dua pemerintahan berdepan penentangan penduduk tempatan.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_01",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah kaum utama di Sarawak?",
    "options": [
      "Kadazandusun",
      "Iban",
      "Bajau",
      "Murut"
    ],
    "correctIndex": 1,
    "explanation": "Iban ialah kaum utama di Sarawak. Kadazandusun, Bajau dan Murut pula ialah kaum utama di Sabah.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_02",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Antara berikut, yang manakah kaum utama di Sabah?",
    "options": [
      "Iban",
      "Bidayuh",
      "Kadazandusun",
      "Melanau"
    ],
    "correctIndex": 2,
    "explanation": "Kadazandusun ialah kaum utama di Sabah. Iban, Bidayuh dan Melanau pula ialah kaum di Sarawak.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_03",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah kaum yang tinggal di rumah panjang di Sarawak dan terkenal dengan tarian ngajat?",
    "options": [
      "Bajau",
      "Murut",
      "Kadazandusun",
      "Iban"
    ],
    "correctIndex": 3,
    "explanation": "Kaum Iban di Sarawak tinggal di rumah panjang dan terkenal dengan tarian ngajat. Bajau, Murut dan Kadazandusun pula kaum di Sabah.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_04",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Kaum manakah yang dikenali sebagai 'Kadazan' di Sabah?",
    "options": [
      "Kadazandusun",
      "Melanau",
      "Bidayuh",
      "Iban"
    ],
    "correctIndex": 0,
    "explanation": "Kadazandusun ialah kaum di Sabah yang turut dikenali sebagai Kadazan. Melanau, Bidayuh dan Iban pula kaum di Sarawak.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_05",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "L",
    "q": "Apakah kaum di Sarawak yang tinggal berhampiran kawasan pesisir dan terkenal dengan sagu?",
    "options": [
      "Bajau",
      "Melanau",
      "Murut",
      "Kadazandusun"
    ],
    "correctIndex": 1,
    "explanation": "Melanau ialah kaum di Sarawak yang tinggal berhampiran kawasan pesisir dan terkenal dengan pemprosesan sagu. Bajau, Murut dan Kadazandusun pula kaum di Sabah.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_06",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Mengapakah kaum Iban dan Kadazandusun sering dikelirukan dalam soalan pengelasan?",
    "options": [
      "Kerana kedua-duanya kaum yang sama",
      "Kerana kedua-duanya berasal dari Semenanjung",
      "Kerana kedua-duanya kaum utama di Borneo tetapi berasal dari negeri berbeza",
      "Kerana kedua-duanya tidak mempunyai budaya"
    ],
    "correctIndex": 2,
    "explanation": "Iban ialah kaum utama di Sarawak, manakala Kadazandusun di Sabah. Kedua-duanya kaum di Borneo, tetapi berasal dari negeri yang berbeza.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_07",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Apakah persamaan antara kaum Iban, Bidayuh dan Melanau?",
    "options": [
      "Ketiga-tiganya kaum utama di Sabah",
      "Ketiga-tiganya berasal dari Semenanjung",
      "Ketiga-tiganya tidak tinggal di Borneo",
      "Ketiga-tiganya kaum utama di Sarawak"
    ],
    "correctIndex": 3,
    "explanation": "Iban, Bidayuh dan Melanau ialah kaum utama di Sarawak. Kaum utama di Sabah pula termasuk Kadazandusun, Bajau dan Murut.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_08",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "M",
    "q": "Seorang pelancong ingin menyaksikan tarian ngajat. Kaum manakah yang patut beliau kunjungi?",
    "options": [
      "Iban",
      "Bajau",
      "Murut",
      "Kadazandusun"
    ],
    "correctIndex": 0,
    "explanation": "Tarian ngajat ialah tarian tradisional kaum Iban di Sarawak. Bajau, Murut dan Kadazandusun pula mempunyai persembahan budaya tersendiri.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_09",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Mengapakah tidak semua kaum di Sarawak dan Sabah tinggal di rumah panjang?",
    "options": [
      "Kerana rumah panjang hanya untuk pedagang asing",
      "Kerana amalan itu lebih lazim dalam kalangan sesetengah kaum tertentu",
      "Kerana rumah panjang dilarang di Borneo",
      "Kerana semua kaum menolak rumah panjang"
    ],
    "correctIndex": 1,
    "explanation": "Rumah panjang lazim dalam kalangan sesetengah kaum seperti Iban, tetapi tidak diamalkan oleh semua kaum. Budaya Sarawak dan Sabah sangat beragam.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s2_10",
    "unit": "b9",
    "skill": "b9_s2",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang kepelbagaian etnik di Sarawak dan Sabah?",
    "options": [
      "Semua kaum mempunyai budaya yang sama",
      "Hanya satu kaum yang tinggal di kedua-dua negeri",
      "Budaya kaum di Borneo tidak berkait dengan Alam Melayu",
      "Setiap kaum mempunyai budaya dan amalan tersendiri"
    ],
    "correctIndex": 3,
    "explanation": "Sarawak dan Sabah mempunyai kepelbagaian etnik yang besar, dan setiap kaum mempunyai budaya, pakaian serta amalan tersendiri.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_01",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi tradisional utama penduduk Sarawak dan Sabah?",
    "options": [
      "Perlombongan minyak sudah sejak awal",
      "Pembangunan kilang moden",
      "Pertanian, perikanan dan hasil hutan",
      "Penerbangan komersial"
    ],
    "correctIndex": 2,
    "explanation": "Pertanian, perikanan dan pengumpulan hasil hutan ialah kegiatan ekonomi tradisional utama penduduk Sarawak dan Sabah.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_02",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah hasil hutan yang terkenal dari Sarawak dan Sabah?",
    "options": [
      "Gandum dan barli",
      "Kain bulu dan bijih timah Eropah",
      "Kuda dan unta",
      "Sagu dan rotan"
    ],
    "correctIndex": 3,
    "explanation": "Sagu dan rotan ialah hasil hutan yang terkenal dari Sarawak dan Sabah. Gandum, kain bulu dan bijih timah Eropah bukan hasil tempatan.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_03",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Bagaimanakah Sarawak dan Sabah berhubung dengan kerajaan Alam Melayu?",
    "options": [
      "Melalui perdagangan hasil hutan dan hasil laut",
      "Melalui penaklukan seluruh Semenanjung",
      "Melalui penolakan semua hubungan perdagangan",
      "Melalui perang yang berterusan sepanjang zaman"
    ],
    "correctIndex": 0,
    "explanation": "Sarawak dan Sabah berhubung dengan kerajaan Alam Melayu melalui perdagangan hasil hutan dan hasil laut, bukan melalui penaklukan.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_04",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah kegiatan ekonomi yang lazim dijalankan di kawasan pesisir Sarawak dan Sabah?",
    "options": [
      "Perlombongan bijih timah",
      "Perikanan",
      "Penanaman gandum",
      "Pembinaan kapal terbang"
    ],
    "correctIndex": 1,
    "explanation": "Perikanan ialah kegiatan lazim di kawasan pesisir Sarawak dan Sabah, selain pertanian dan pengumpulan hasil hutan.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_05",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "L",
    "q": "Apakah hasil laut yang menjadi barang dagangan di Sarawak dan Sabah?",
    "options": [
      "Gandum dan barli",
      "Kain bulu dari Britain",
      "Ikan dan hasil laut kering",
      "Bijih timah dari Eropah"
    ],
    "correctIndex": 2,
    "explanation": "Ikan dan hasil laut kering menjadi barang dagangan penting di Sarawak dan Sabah. Gandum, kain bulu dan bijih timah Eropah dibawa masuk dari luar.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_06",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Mengapakah kegiatan ekonomi Sarawak dan Sabah tidak boleh dianggap hanya berbentuk perlombongan moden?",
    "options": [
      "Kerana kedua-dua wilayah tidak mempunyai hasil hutan",
      "Kerana semua penduduk bekerja di bandar",
      "Kerana perlombongan tidak pernah dijalankan di sana",
      "Kerana kegiatan tradisional seperti pertanian dan hasil hutan lebih dominan"
    ],
    "correctIndex": 3,
    "explanation": "Pada zaman tersebut, kegiatan tradisional seperti pertanian, perikanan dan pengumpulan hasil hutan lebih dominan. Perlombongan moden bukan kegiatan utama masyarakat ketika itu.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_07",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Bagaimanakah hasil hutan Sarawak dan Sabah menarik minat pedagang luar?",
    "options": [
      "Hasil seperti sagu dan rotan sukar diperoleh di tempat lain",
      "Hasil hutan tersebut hanya digunakan oleh penduduk tempatan",
      "Pedagang luar dilarang membeli hasil hutan",
      "Hasil hutan tidak mempunyai nilai dagangan"
    ],
    "correctIndex": 0,
    "explanation": "Hasil seperti sagu dan rotan sukar diperoleh di tempat lain, menjadikannya barang dagangan yang menarik minat pedagang luar.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_08",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "M",
    "q": "Seorang pedagang ingin memperoleh sagu dalam kuantiti besar. Kawasan manakah yang paling sesuai?",
    "options": [
      "Perlis",
      "Sarawak",
      "Negeri Sembilan",
      "Melaka"
    ],
    "correctIndex": 1,
    "explanation": "Sagu ialah hasil hutan yang terkenal dari Sarawak dan Sabah. Perlis, Negeri Sembilan dan Melaka pula terkenal dengan kegiatan ekonomi lain.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_09",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Mengapakah hasil hutan Sarawak dan Sabah penting dalam jaringan perdagangan Alam Melayu?",
    "options": [
      "Kerana hasil hutan menggantikan semua hasil laut",
      "Kerana hasil hutan menyebabkan perdagangan dihentikan",
      "Kerana hasil hutan menjadi barang dagangan yang menghubungkan Borneo dengan pelabuhan Alam Melayu",
      "Kerana hasil hutan hanya digunakan dalam upacara keagamaan"
    ],
    "correctIndex": 2,
    "explanation": "Hasil hutan seperti sagu dan rotan menghubungkan Sarawak serta Sabah dengan pelabuhan Alam Melayu melalui kegiatan perdagangan yang menguntungkan kedua-dua pihak.",
    "ref": "Bab 10, KSSM Sejarah T2"
  },
  {
    "id": "t2_sej_b9_s3_10",
    "unit": "b9",
    "skill": "b9_s3",
    "diff": "H",
    "q": "Apakah kesimpulan terbaik tentang kegiatan ekonomi Sarawak dan Sabah pada zaman tradisional?",
    "options": [
      "Kegiatan ekonomi berasaskan sumber semula jadi tempatan dan terhubung dengan Alam Melayu",
      "Kegiatan ekonomi hanya berbentuk perlombongan moden",
      "Kegiatan ekonomi terpisah sepenuhnya daripada Alam Melayu",
      "Kegiatan ekonomi hanya dijalankan oleh pedagang asing"
    ],
    "correctIndex": 0,
    "explanation": "Kegiatan ekonomi Sarawak dan Sabah berasaskan sumber semula jadi tempatan seperti pertanian, perikanan dan hasil hutan, serta terhubung dengan jaringan perdagangan Alam Melayu.",
    "ref": "Bab 10, KSSM Sejarah T2"
  }
];

  if (typeof module === "object" && module.exports) module.exports = ITEMS;

  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.t2 = App.Pools.t2 || {};
  App.Pools.t2.sejarah = (Array.isArray(App.Pools.t2.sejarah) ? App.Pools.t2.sejarah : []).concat(ITEMS);
})(typeof window !== "undefined" ? window : globalThis);
