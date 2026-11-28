(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.t2_bm = out;
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ITEMS = [
  {
    "id": "t2-bm-s1",
    "part": "k1_B",
    "chapterId": "sintaksis",
    "status": "verified",
    "level": "sederhana",
    "stem": "Para murid-murid sedang berkumpul di dewan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Betulkan frasa yang lewah dan jelaskan sebabnya.",
        "answer": "Para murid Para sudah menunjukkan jamak.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Para murid"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Para sudah menunjukkan jamak."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s2",
    "part": "k1_B",
    "chapterId": "sintaksis",
    "status": "verified",
    "level": "sederhana",
    "stem": "Hadiah itu adalah sebuah buku.",
    "parts": [
      {
        "label": "(a)",
        "q": "Gantikan kata pemeri yang salah dan berikan sebab.",
        "answer": "ialah Predikat ialah frasa nama.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "ialah"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Predikat ialah frasa nama."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s3",
    "part": "k1_B",
    "chapterId": "sintaksis",
    "status": "verified",
    "level": "sederhana",
    "stem": "Saya menerima surat dari kakak.",
    "parts": [
      {
        "label": "(a)",
        "q": "Betulkan kata sendi dan jelaskan pilihan anda.",
        "answer": "daripada Kakak ialah orang yang menjadi sumber surat.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "daripada"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kakak ialah orang yang menjadi sumber surat."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s4",
    "part": "k1_B",
    "chapterId": "sintaksis",
    "status": "verified",
    "level": "sederhana",
    "stem": "Pokok itu ditanam oleh saya.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis semula ayat pasif yang betul serta nyatakan peraturannya.",
        "answer": "Pokok itu saya tanam. Pelaku diri pertama mendahului kata kerja tanpa awalan di-.",
        "marks": 2,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Pokok itu saya tanam."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Pelaku diri pertama mendahului kata kerja tanpa awalan di-."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s5",
    "part": "k1_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Hujan lebat menyebabkan jambatan kayu licin. Suri meletakkan papan amaran di kedua-dua hujung jambatan, kemudian menelefon ketua kampung. Keesokan harinya, penduduk memasang susur tangan dan menampal jalur antiegelincir.",
    "parts": [
      {
        "label": "(a)",
        "q": "Nyatakan dua tindakan awal Suri.",
        "answer": "Meletakkan papan amaran. Menelefon ketua kampung.",
        "marks": 4,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Meletakkan papan amaran."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Menelefon ketua kampung."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s6",
    "part": "k1_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Hujan lebat menyebabkan jambatan kayu licin. Suri meletakkan papan amaran di kedua-dua hujung jambatan, kemudian menelefon ketua kampung. Keesokan harinya, penduduk memasang susur tangan dan menampal jalur antiegelincir.",
    "parts": [
      {
        "label": "(a)",
        "q": "Bagaimanakah kedua-dua pembaikan membantu pengguna?",
        "answer": "Susur tangan membantu pengguna mengimbangi badan. Jalur menambah cengkaman tapak kasut.",
        "marks": 4,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Susur tangan membantu pengguna mengimbangi badan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Jalur menambah cengkaman tapak kasut."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s7",
    "part": "k1_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Hujan lebat menyebabkan jambatan kayu licin. Suri meletakkan papan amaran di kedua-dua hujung jambatan, kemudian menelefon ketua kampung. Keesokan harinya, penduduk memasang susur tangan dan menampal jalur antiegelincir.",
    "parts": [
      {
        "label": "(a)",
        "q": "Berikan dua nilai yang ditunjukkan oleh Suri berserta bukti.",
        "answer": "Prihatin kerana memberi amaran kepada pengguna. Bertanggungjawab kerana melaporkan bahaya kepada ketua kampung.",
        "marks": 4,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Prihatin kerana memberi amaran kepada pengguna."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Bertanggungjawab kerana melaporkan bahaya kepada ketua kampung."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s8",
    "part": "k1_B",
    "chapterId": "komsas",
    "status": "verified",
    "level": "sederhana",
    "stem": "Berdasarkan novel Tingkatan 2 yang anda pelajari.",
    "parts": [
      {
        "label": "(a)",
        "q": "Namakan novel dan watak. Huraikan dua peristiwa yang memperlihatkan nilai watak tersebut serta kesannya.",
        "answer": "Terima respons mengikut novel murid. Semak setiap peristiwa dan kesannya dengan teks novel.",
        "marks": 10,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Tajuk novel tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Nama watak tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Peristiwa berkaitan dengan watak: 1"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Butiran peristiwa tepat: 1"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Nilai sesuai: 1"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kesan yang munasabah: 1"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Peristiwa berkaitan dengan watak: 2"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Butiran peristiwa tepat: 2"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Nilai sesuai: 2"
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kesan yang munasabah: 2"
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s9",
    "part": "k1_C",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Di sekolah kami, kipas dimatikan ketika bilik kosong. Langsir diselak supaya cahaya matahari menerangi kelas. Pengawas mencatat bacaan meter setiap minggu. Guru melaporkan suis rosak kepada juruteknik. Kelab Sains pula mempamerkan carta penggunaan untuk mengingatkan murid tentang sasaran penjimatan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Ringkaskan langkah penjimatan elektrik dalam 40 patah perkataan atau kurang.",
        "answer": "Sekolah menjimatkan elektrik dengan mematikan kipas, menggunakan cahaya semula jadi, memantau meter, melaporkan kerosakan dan memaparkan penggunaan elektrik untuk meningkatkan kesedaran.",
        "marks": 15,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Mematikan kipas."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Menggunakan cahaya semula jadi."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Memantau bacaan meter."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Melaporkan kerosakan suis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Memaparkan penggunaan elektrik."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Ayat gramatis."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Kosa kata tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Ejaan betul."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Susunan koheren."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Dalam had perkataan."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s10",
    "part": "k2_A",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Hebahan: Bengkel Baiki Basikal, Sabtu, 9 pagi, dewan sekolah. Bawa basikal dan topi keledar.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis pesanan pendek untuk mengajak rakan menyertai bengkel.",
        "answer": "Amir, mari kita sertai Bengkel Baiki Basikal di dewan sekolah pada hari Sabtu pukul sembilan pagi. Bawa basikal dan topi keledar supaya kita dapat berlatih dengan selamat.",
        "marks": 10,
        "steps": [
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengajak rakan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menamakan bengkel."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan hari dan waktu."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Menyatakan tempat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Mengingatkan rakan membawa peralatan."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Sapaan sesuai."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Idea tersusun."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Ayat lengkap."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Ejaan tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tanda baca tepat."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s11",
    "part": "k2_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Pilih satu tajuk karangan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Ceritakan pengalaman membantu jiran ketika hujan lebat.",
        "answer": "Petang Sabtu itu, saya sedang mengulang kaji pelajaran apabila terdengar ketukan di pintu. Jiran kami, Mak Cik Salmah, berdiri di luar sambil memegang sebuah kotak. Air sudah mula memasuki ruang tamunya.\n\nSaya segera memanggil ayah. Setelah ayah memastikan laluan antara rumah kami selamat, saya membantu Mak Cik Salmah membawa buku dan dokumen ke rumah kami. Adik pula menyediakan tuala dan minuman panas. Ketika mengangkat sebuah album gambar, saya nampak wajah jiran saya berubah lega. Album itulah satu-satunya simpanan gambar zaman kecil anak-anaknya.\n\nSelepas hujan reda dan air surut, kami menyusun semula barang yang diselamatkan. Saya sedar bahawa bantuan yang kelihatan kecil bagi kita mungkin amat besar maknanya kepada orang lain.",
        "marks": 30,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 1 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 1."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 1."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 2 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 2."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 2."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 3 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 3."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 3."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Pendahuluan sesuai."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Perenggan tersusun."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penutup berkesan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ayat gramatis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kosa kata tepat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Variasi ayat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tanda baca tepat."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s12",
    "part": "k2_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Pilih satu tajuk karangan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Huraikan cara-cara menarik minat murid untuk membaca.",
        "answer": "Minat membaca boleh dipupuk apabila murid mudah memperoleh bahan yang menarik. Sebuah bakul buku di sudut kelas membolehkan murid membaca ketika menunggu pelajaran bermula. Buku di dalamnya perlu ditukar secara berkala supaya sentiasa ada pilihan baharu.\n\nGuru juga boleh memberi murid peluang mencadangkan bahan. Murid yang gemar sukan mungkin bermula dengan kisah seorang atlet, manakala peminat sains mungkin memilih buku tentang angkasa. Kebebasan memilih menjadikan membaca satu keseronokan.\n\nSelain itu, setiap minggu seorang murid boleh memperkenalkan buku pilihannya tanpa mendedahkan pengakhiran cerita. Rakan yang tertarik boleh meminjam buku itu selepas sesi perkongsian. Dengan bahan yang dekat, pilihan yang pelbagai dan galakan rakan, membaca boleh menjadi kebiasaan harian.",
        "marks": 30,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 1 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 1."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 1."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 2 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 2."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 2."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 3 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 3."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 3."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Pendahuluan sesuai."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Perenggan tersusun."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penutup berkesan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ayat gramatis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kosa kata tepat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Variasi ayat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tanda baca tepat."
          }
        ]
      }
    ]
  },
  {
    "id": "t2-bm-s13",
    "part": "k2_B",
    "chapterId": "pemahaman",
    "status": "verified",
    "level": "sederhana",
    "stem": "Pilih satu tajuk karangan.",
    "parts": [
      {
        "label": "(a)",
        "q": "Tulis ucapan ketua kelas sempena majlis perpisahan guru.",
        "answer": "Yang diraikan Cikgu Farah dan rakan-rakan yang saya kasihi, selamat pagi.\n\nSebagai ketua kelas, saya ingin mengucapkan terima kasih kepada cikgu. Kami masih ingat hari pertama cikgu meminta kami berucap. Ramai yang tunduk memandang meja. Cikgu memberi kami masa untuk berlatih secara berpasangan sehingga kami berani berdiri di hadapan kelas.\n\nCikgu juga mengajar kami supaya mendengar dengan sabar. Apabila seorang rakan terlupa baris ucapannya, cikgu menunggu dan memberi kata semangat. Kini kami cuba berbuat demikian apabila rakan memerlukan bantuan.\n\nWalaupun cikgu akan berpindah, kami akan terus menggunakan apa yang telah cikgu ajarkan. Semoga cikgu gembira di sekolah baharu. Terimalah buku kenangan ini sebagai tanda penghargaan daripada kami semua. Sekian, terima kasih.",
        "marks": 30,
        "steps": [
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 1 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 1."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 1."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 2 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 2."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 2."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Isi 3 berkaitan dengan tajuk."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Huraian menyokong isi 3."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Contoh atau butiran khusus untuk isi 3."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Pendahuluan sesuai."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Perenggan tersusun."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Penutup berkesan."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ayat gramatis."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Kosa kata tepat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Variasi ayat."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Ejaan tepat."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Tanda baca tepat."
          }
        ]
      }
    ]
  }
];
  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { ITEMS, marksOf };
});