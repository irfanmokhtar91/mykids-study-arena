/**
 * Asas Sains Komputer (ASK) Tingkatan 2: ORIGINAL practice questions (KSSM DSKP Tingkatan 2, v2 8/Nov/2017).
 * Chapters follow the DSKP: 1.1 Sistem Nombor Perlapanan, 1.2 Sistem Nombor Perenambelasan, 2.1 Pembangunan Algoritma,
 * 3.1 Persekitaran Kod Arahan, 3.2 Struktur Kod Arahan.
 *
 * Tags: diff = L/M/H (official 5:3:2 intent), part = "A" (objective, Bahagian A style).
 * check (optional) = machine-checkable answer, recomputed by scripts/verify-ask.mjs:
 *   { type: "conv", n, from, to, ans }  base conversion      { type: "ascii", ch, base, ans }  ASCII code of a character
 *   { type: "js", code, ans }            trace of a code segment, re-executed as an independent JavaScript equivalent
 * Code segments are written in language-neutral pseudokod (the DSKP does not fix a language in the text read).
 * Verification record: docs/ask-verification-2026-11-25.md. Items are shown to children only after that record is complete.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Data = App.Data || {};
  App.Data.t2 = App.Data.t2 || {};
  App.Data.t2.ask = {
    // ---------------------------------------------------------------- 1.1 Sistem Nombor Perlapanan
    sistem_perlapanan: [
      { q: "Berapakah asas bagi sistem nombor perlapanan?", options: ["2", "8", "10", "16"], correctIndex: 1, explanation: "Sistem nombor perlapanan (oktal) menggunakan asas 8.", diff: "L", part: "A" },
      { q: "Digit manakah yang TIDAK boleh wujud dalam nombor perlapanan?", options: ["0", "5", "7", "8"], correctIndex: 3, explanation: "Nombor perlapanan hanya menggunakan digit 0 hingga 7. Digit 8 dan 9 tidak wujud.", diff: "L", part: "A" },
      { q: "Antara nombor berikut, yang manakah nombor perlapanan yang sah?", options: ["1289", "5681", "3704", "7108"], correctIndex: 2, explanation: "3704 hanya mengandungi digit 0 hingga 7. Nombor lain mengandungi digit 8 atau 9.", diff: "L", part: "A" },
      { q: "Berapakah bilangan bit perduaan yang diwakili oleh satu digit perlapanan?", options: ["2", "3", "4", "8"], correctIndex: 1, explanation: "8 = 2 pangkat 3, maka satu digit perlapanan mewakili 3 bit perduaan.", diff: "M", part: "A", check: { type: "js", code: "return String(Math.log2(8))", ans: "3" } },
      { q: "Tukarkan nombor perpuluhan 25 kepada nombor perlapanan.", options: ["13", "31", "32", "41"], correctIndex: 1, explanation: "25 / 8 = 3 baki 1. Baca baki dari bawah ke atas: 31.", diff: "M", part: "A", check: { type: "conv", n: "25", from: 10, to: 8, ans: "31" } },
      { q: "Tukarkan nombor perpuluhan 64 kepada nombor perlapanan.", options: ["80", "100", "101", "40"], correctIndex: 1, explanation: "64 = 1 x 8 x 8, maka 64 dalam perlapanan ialah 100.", diff: "M", part: "A", check: { type: "conv", n: "64", from: 10, to: 8, ans: "100" } },
      { q: "Tukarkan nombor perlapanan 57 kepada nombor perpuluhan.", options: ["39", "45", "47", "57"], correctIndex: 2, explanation: "5 x 8 + 7 x 1 = 40 + 7 = 47.", diff: "M", part: "A", check: { type: "conv", n: "57", from: 8, to: 10, ans: "47" } },
      { q: "Tukarkan nombor perlapanan 144 kepada nombor perpuluhan.", options: ["92", "100", "108", "144"], correctIndex: 1, explanation: "1 x 64 + 4 x 8 + 4 x 1 = 64 + 32 + 4 = 100.", diff: "M", part: "A", check: { type: "conv", n: "144", from: 8, to: 10, ans: "100" } },
      { q: "Tukarkan nombor perduaan 110101 kepada nombor perlapanan.", options: ["35", "53", "56", "65"], correctIndex: 3, explanation: "Kumpulkan 3 bit dari kanan: 110 | 101 = 6 | 5, maka 65.", diff: "M", part: "A", check: { type: "conv", n: "110101", from: 2, to: 8, ans: "65" } },
      { q: "Tukarkan nombor perlapanan 752 kepada nombor perduaan.", options: ["111101010", "111110010", "101111010", "111101001"], correctIndex: 0, explanation: "Tukar setiap digit kepada 3 bit: 7 = 111, 5 = 101, 2 = 010. Hasilnya 111101010.", diff: "H", part: "A", check: { type: "conv", n: "752", from: 8, to: 2, ans: "111101010" } },
      { q: "Kod ASCII bagi huruf besar A ialah 65 dalam nombor perpuluhan. Apakah kod ini dalam nombor perlapanan?", options: ["60", "101", "141", "65"], correctIndex: 1, explanation: "Kod ASCII 'A' ialah 65 (perpuluhan). 65 = 1 x 64 + 0 x 8 + 1, iaitu 101 dalam perlapanan.", diff: "M", part: "A", check: { type: "ascii", ch: "A", base: 8, ans: "101" } },
      { q: "Kod ASCII bagi huruf kecil a ialah 97 dalam nombor perpuluhan. Apakah kod ini dalam nombor perlapanan?", options: ["101", "97", "141", "151"], correctIndex: 2, explanation: "Kod ASCII 'a' ialah 97 (perpuluhan). 97 = 1 x 64 + 4 x 8 + 1, iaitu 141 dalam perlapanan.", diff: "H", part: "A", check: { type: "ascii", ch: "a", base: 8, ans: "141" } },
      { q: "Kod ASCII bagi aksara '0' (angka sifar sebagai aksara) ialah 48 dalam nombor perpuluhan. Apakah kod ini dalam nombor perlapanan?", options: ["0", "30", "48", "60"], correctIndex: 3, explanation: "Kod ASCII aksara '0' ialah 48 (perpuluhan). 48 = 6 x 8 + 0, iaitu 60 dalam perlapanan.", diff: "H", part: "A", check: { type: "ascii", ch: "0", base: 8, ans: "60" } }
    ],

    // ---------------------------------------------------------------- 1.2 Sistem Nombor Perenambelasan
    sistem_perenambelasan: [
      { q: "Berapakah asas bagi sistem nombor perenambelasan?", options: ["8", "10", "16", "32"], correctIndex: 2, explanation: "Sistem nombor perenambelasan (heksadesimal) menggunakan asas 16.", diff: "L", part: "A" },
      { q: "Dalam nombor perenambelasan, huruf B mewakili nilai perpuluhan berapa?", options: ["10", "11", "12", "13"], correctIndex: 1, explanation: "A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.", diff: "L", part: "A", check: { type: "conv", n: "B", from: 16, to: 10, ans: "11" } },
      { q: "Antara berikut, yang manakah nombor perenambelasan yang sah?", options: ["3G5", "1H2", "7K1", "2F9"], correctIndex: 3, explanation: "Digit sah ialah 0 hingga 9 dan A hingga F. Huruf G, H dan K tidak sah.", diff: "L", part: "A" },
      { q: "Berapakah bilangan bit perduaan yang diwakili oleh satu digit perenambelasan?", options: ["2", "3", "4", "8"], correctIndex: 2, explanation: "16 = 2 pangkat 4, maka satu digit perenambelasan mewakili 4 bit perduaan.", diff: "M", part: "A", check: { type: "js", code: "return String(Math.log2(16))", ans: "4" } },
      { q: "Tukarkan nombor perpuluhan 255 kepada nombor perenambelasan.", options: ["EE", "F0", "FF", "1FF"], correctIndex: 2, explanation: "255 / 16 = 15 baki 15. 15 ialah F, maka hasilnya FF.", diff: "M", part: "A", check: { type: "conv", n: "255", from: 10, to: 16, ans: "FF" } },
      { q: "Tukarkan nombor perenambelasan 1A kepada nombor perpuluhan.", options: ["11", "17", "26", "36"], correctIndex: 2, explanation: "1 x 16 + A x 1 = 16 + 10 = 26.", diff: "M", part: "A", check: { type: "conv", n: "1A", from: 16, to: 10, ans: "26" } },
      { q: "Tukarkan nombor perenambelasan 3C kepada nombor perpuluhan.", options: ["60", "39", "48", "75"], correctIndex: 0, explanation: "3 x 16 + C x 1 = 48 + 12 = 60.", diff: "M", part: "A", check: { type: "conv", n: "3C", from: 16, to: 10, ans: "60" } },
      { q: "Tukarkan nombor perpuluhan 100 kepada nombor perenambelasan.", options: ["46", "64", "6A", "100"], correctIndex: 1, explanation: "100 / 16 = 6 baki 4. Baca baki dari bawah ke atas: 64.", diff: "M", part: "A", check: { type: "conv", n: "100", from: 10, to: 16, ans: "64" } },
      { q: "Tukarkan nombor perduaan 10111110 kepada nombor perenambelasan.", options: ["BE", "EB", "9E", "BA"], correctIndex: 0, explanation: "Kumpulkan 4 bit dari kanan: 1011 | 1110 = B | E, maka BE.", diff: "M", part: "A", check: { type: "conv", n: "10111110", from: 2, to: 16, ans: "BE" } },
      { q: "Tukarkan nombor perenambelasan 2D kepada nombor perduaan.", options: ["100111", "101101", "110101", "101011"], correctIndex: 1, explanation: "2 = 0010 dan D = 1101. Hasilnya 00101101, iaitu 101101.", diff: "H", part: "A", check: { type: "conv", n: "2D", from: 16, to: 2, ans: "101101" } },
      { q: "Kod ASCII bagi huruf besar A ialah 65 dalam nombor perpuluhan. Apakah kod ini dalam nombor perenambelasan?", options: ["41", "65", "14", "A1"], correctIndex: 0, explanation: "Kod ASCII 'A' ialah 65 (perpuluhan). 65 = 4 x 16 + 1, iaitu 41 dalam perenambelasan.", diff: "M", part: "A", check: { type: "ascii", ch: "A", base: 16, ans: "41" } },
      { q: "Kod ASCII bagi huruf kecil a ialah 97 dalam nombor perpuluhan. Apakah kod ini dalam nombor perenambelasan?", options: ["41", "51", "71", "61"], correctIndex: 3, explanation: "Kod ASCII 'a' ialah 97 (perpuluhan). 97 = 6 x 16 + 1, iaitu 61 dalam perenambelasan.", diff: "H", part: "A", check: { type: "ascii", ch: "a", base: 16, ans: "61" } },
      { q: "Kod ASCII bagi huruf besar Z ialah 90 dalam nombor perpuluhan. Apakah kod ini dalam nombor perenambelasan?", options: ["5A", "5B", "A5", "90"], correctIndex: 0, explanation: "Kod ASCII 'Z' ialah 90 (perpuluhan). 90 = 5 x 16 + 10, iaitu 5A dalam perenambelasan.", diff: "H", part: "A", check: { type: "ascii", ch: "Z", base: 16, ans: "5A" } }
    ],

    // ---------------------------------------------------------------- 2.1 Pembangunan Algoritma
    algoritma: [
      { q: "Dalam carta alir, simbol berbentuk berlian (diamond) digunakan untuk menunjukkan apa?", options: ["Mula atau Tamat", "Proses", "Keputusan (pilihan)", "Input atau Output"], correctIndex: 2, explanation: "Simbol berlian mewakili keputusan yang mempunyai dua laluan, Ya atau Tidak.", diff: "L", part: "A" },
      { q: "Dalam carta alir, simbol berbentuk bujur (terminator) digunakan untuk menunjukkan apa?", options: ["Mula atau Tamat", "Proses", "Keputusan", "Input atau Output"], correctIndex: 0, explanation: "Simbol bujur menandakan titik mula dan titik tamat sesuatu algoritma.", diff: "L", part: "A" },
      { q: "Dalam carta alir, simbol segi empat selari digunakan untuk menunjukkan apa?", options: ["Keputusan", "Proses pengiraan", "Mula atau Tamat", "Input atau Output"], correctIndex: 3, explanation: "Segi empat selari mewakili data yang dimasukkan (input) atau dipaparkan (output).", diff: "L", part: "A" },
      { q: "Struktur kawalan manakah yang melaksanakan sesuatu blok arahan berulang kali?", options: ["Jujukan", "Pilihan", "Ulangan", "Input"], correctIndex: 2, explanation: "Struktur kawalan ulangan (for, while-do) mengulang blok arahan.", diff: "L", part: "A" },
      { q: "Apakah yang dimaksudkan dengan struktur kawalan pilihan bersarang?", options: ["Struktur pilihan yang berada di dalam struktur pilihan yang lain", "Satu arahan yang diulang sepuluh kali", "Arahan yang dilaksanakan satu demi satu tanpa syarat", "Struktur ulangan tanpa syarat berhenti"], correctIndex: 0, explanation: "Dalam pilihan bersarang, satu struktur if berada di dalam if yang lain.", diff: "L", part: "A" },
      { q: "Struktur kawalan ulangan 'for' paling sesuai digunakan apabila apa diketahui?", options: ["Bilangan ulangan diketahui terlebih dahulu", "Jawapan akhir diketahui", "Nama pemboleh ubah diketahui", "Jenis data diketahui"], correctIndex: 0, explanation: "Gelung for lazimnya digunakan apabila bilangan ulangan telah ditetapkan.", diff: "L", part: "A" },
      {
        q: "Perhatikan pseudokod berikut.\n\nSET jumlah = 0\nFOR i = 1 TO 4\n  jumlah = jumlah + i\nEND FOR\nPAPAR jumlah\n\nApakah output pseudokod ini?",
        options: ["4", "10", "24", "14"], correctIndex: 1, explanation: "jumlah = 1 + 2 + 3 + 4 = 10.", diff: "M", part: "A",
        check: { type: "js", code: "let j=0; for (let i=1;i<=4;i++) j=j+i; return String(j)", ans: "10" }
      },
      {
        q: "Perhatikan pseudokod berikut.\n\nSET x = 1\nWHILE x < 20 DO\n  x = x * 2\nEND WHILE\nPAPAR x\n\nApakah output pseudokod ini?",
        options: ["16", "20", "32", "40"], correctIndex: 2, explanation: "x menjadi 2, 4, 8, 16, 32. Apabila x = 32, syarat x < 20 palsu dan gelung berhenti. Output ialah 32.", diff: "M", part: "A",
        check: { type: "js", code: "let x=1; while (x<20) x=x*2; return String(x)", ans: "32" }
      },
      {
        q: "Perhatikan pseudokod berikut.\n\nINPUT markah\nIF markah >= 80 THEN\n  PAPAR \"A\"\nELSE IF markah >= 60 THEN\n  PAPAR \"B\"\nELSE\n  PAPAR \"C\"\nEND IF\n\nJika markah = 72, apakah output?",
        options: ["A", "C", "B", "A dan B"], correctIndex: 2, explanation: "72 tidak >= 80, tetapi 72 >= 60, maka output ialah B.", diff: "M", part: "A",
        check: { type: "js", code: "const m=72; if (m>=80) return 'A'; else if (m>=60) return 'B'; else return 'C'", ans: "B" }
      },
      {
        q: "Berapa kali perkataan \"Hai\" dipaparkan oleh pseudokod berikut?\n\nFOR i = 2 TO 6\n  PAPAR \"Hai\"\nEND FOR",
        options: ["4", "5", "6", "2"], correctIndex: 1, explanation: "i bernilai 2, 3, 4, 5 dan 6, iaitu 5 nilai. Maka \"Hai\" dipaparkan 5 kali.", diff: "M", part: "A",
        check: { type: "js", code: "let c=0; for (let i=2;i<=6;i++) c++; return String(c)", ans: "5" }
      },
      {
        q: "Pseudokod berikut bertujuan mengira purata dua nombor a dan b.\n\npurata = a + b / 2\n\nApakah ralat dalam pseudokod ini dan pembetulannya?",
        options: ["Tukar kepada purata = a + b", "Pembahagian dibuat sebelum penambahan; tukar kepada purata = (a + b) / 2", "Tiada ralat", "Tukar kepada purata = a / 2 + b"], correctIndex: 1, explanation: "Pembahagian dilakukan dahulu: a + (b / 2). Kurungan diperlukan supaya a + b dijumlahkan dahulu. Contoh a = 4, b = 8: kod asal beri 8, sepatutnya 6.", diff: "M", part: "A",
        check: { type: "js", code: "const a=4,b=8; return (a+b/2)===8 && ((a+b)/2)===6 ? 'ok' : 'no'", ans: "ok" }
      },
      {
        q: "Perhatikan pseudokod berikut.\n\nSET n = 5\nWHILE n > 0 DO\n  PAPAR n\nEND WHILE\n\nApakah ralat dalam pseudokod ini?",
        options: ["Nilai n tidak dikurangkan dalam gelung, maka gelung tidak berhenti", "Pemboleh ubah n mesti bernilai 0", "WHILE tidak boleh digunakan dengan PAPAR", "Syarat n > 0 mesti ditukar kepada n < 0 supaya gelung berjalan"], correctIndex: 0, explanation: "n sentiasa 5, maka syarat n > 0 sentiasa benar dan gelung berulang tanpa henti. Tambah n = n - 1 di dalam gelung.", diff: "M", part: "A" },
      {
        q: "Perhatikan pseudokod berikut.\n\nSET kiraan = 0\nFOR i = 1 TO 3\n  FOR j = 1 TO 2\n    kiraan = kiraan + 1\n  END FOR\nEND FOR\nPAPAR kiraan\n\nApakah output pseudokod ini?",
        options: ["5", "9", "8", "6"], correctIndex: 3, explanation: "Gelung luar berulang 3 kali dan gelung dalam 2 kali setiap kali. Jumlah = 3 x 2 = 6.", diff: "H", part: "A",
        check: { type: "js", code: "let k=0; for (let i=1;i<=3;i++) for (let j=1;j<=2;j++) k=k+1; return String(k)", ans: "6" }
      },
      {
        q: "Perhatikan pseudokod berikut.\n\nSET jumlah = 0\nFOR i = 1 TO 6\n  IF i > 3 THEN\n    jumlah = jumlah + i\n  END IF\nEND FOR\nPAPAR jumlah\n\nApakah output pseudokod ini?",
        options: ["21", "6", "15", "9"], correctIndex: 2, explanation: "Hanya nilai i = 4, 5 dan 6 ditambah: 4 + 5 + 6 = 15.", diff: "H", part: "A",
        check: { type: "js", code: "let j=0; for (let i=1;i<=6;i++) { if (i>3) j=j+i; } return String(j)", ans: "15" }
      }
    ],

    // ---------------------------------------------------------------- 3.1 Persekitaran Kod Arahan
    kod_data: [
      { q: "Apakah jenis data yang sesuai bagi nilai 25?", options: ["integer", "double", "char", "string"], correctIndex: 0, explanation: "25 ialah nombor bulat, maka jenis datanya integer.", diff: "L", part: "A" },
      { q: "Apakah jenis data yang sesuai bagi nilai 3.14?", options: ["integer", "boolean", "double", "char"], correctIndex: 2, explanation: "3.14 ialah nombor perpuluhan, maka jenis datanya double.", diff: "L", part: "A" },
      { q: "Apakah jenis data yang sesuai bagi satu aksara tunggal seperti 'A'?", options: ["string", "char", "boolean", "integer"], correctIndex: 1, explanation: "Jenis data char menyimpan satu aksara.", diff: "L", part: "A" },
      { q: "Apakah jenis data yang sesuai bagi perkataan \"Selamat\"?", options: ["char", "boolean", "double", "string"], correctIndex: 3, explanation: "Jenis data string menyimpan jujukan aksara seperti perkataan atau ayat.", diff: "L", part: "A" },
      { q: "Jenis data manakah yang hanya menyimpan nilai true atau false?", options: ["boolean", "integer", "string", "double"], correctIndex: 0, explanation: "Jenis data boolean hanya mempunyai dua nilai, true dan false.", diff: "L", part: "A" },
      { q: "Apakah jenis data bagi nilai \"123\" (ditulis dalam tanda petik)?", options: ["integer", "double", "string", "boolean"], correctIndex: 2, explanation: "Nilai dalam tanda petik dianggap teks, maka jenis datanya string walaupun mengandungi angka.", diff: "M", part: "A" },
      { q: "Antara berikut, yang manakah jenis data paling sesuai untuk menyimpan harga RM12.50?", options: ["integer", "double", "char", "boolean"], correctIndex: 1, explanation: "Harga mempunyai perpuluhan, maka jenis data double sesuai.", diff: "M", part: "A" },
      { q: "Apakah perbezaan utama antara pemboleh ubah dan pemalar?", options: ["Pemboleh ubah tidak boleh menyimpan nombor", "Nilai pemboleh ubah boleh berubah semasa atur cara berjalan, nilai pemalar tidak boleh berubah", "Pemalar hanya menyimpan teks", "Pemboleh ubah hanya digunakan sekali"], correctIndex: 1, explanation: "Nilai pemboleh ubah boleh diubah. Nilai pemalar ditetapkan dan tidak berubah.", diff: "L", part: "A" },
      { q: "Fungsi manakah yang digunakan untuk menerima data daripada pengguna?", options: ["Fungsi output", "Fungsi input", "Fungsi operator", "Fungsi pemalar"], correctIndex: 1, explanation: "Fungsi input menerima data yang dimasukkan oleh pengguna.", diff: "L", part: "A" },
      { q: "Apakah nilai bagi ungkapan 7 > 3 ?", options: ["false", "7", "true", "3"], correctIndex: 2, explanation: "Operator perbandingan memberi hasil boolean. 7 lebih besar daripada 3, maka hasilnya true.", diff: "L", part: "A", check: { type: "js", code: "return String(7>3)", ans: "true" } },
      { q: "Apakah nilai bagi ungkapan (4 > 2) AND (3 > 5) ?", options: ["true", "false", "4", "5"], correctIndex: 1, explanation: "4 > 2 ialah true, 3 > 5 ialah false. AND hanya true jika kedua-duanya true, maka hasilnya false.", diff: "M", part: "A", check: { type: "js", code: "return String((4>2)&&(3>5))", ans: "false" } },
      { q: "Apakah nilai bagi ungkapan (4 > 2) OR (3 > 5) ?", options: ["false", "true", "4", "5"], correctIndex: 1, explanation: "OR adalah true jika salah satu ungkapan true. 4 > 2 ialah true, maka hasilnya true.", diff: "M", part: "A", check: { type: "js", code: "return String((4>2)||(3>5))", ans: "true" } },
      {
        q: "Perhatikan kod segmen berikut.\n\na = 7\nb = 2\nPAPAR a + b * 3\n\nApakah output kod segmen ini?",
        options: ["27", "13", "9", "15"], correctIndex: 1, explanation: "Pendaraban dilakukan dahulu: b * 3 = 6. Kemudian 7 + 6 = 13.", diff: "M", part: "A",
        check: { type: "js", code: "const a=7,b=2; return String(a+b*3)", ans: "13" }
      },
      {
        q: "Nilai pemboleh ubah umur ialah 15. Apakah nilai bagi ungkapan (umur >= 13) AND (umur <= 17) ?",
        options: ["false", "15", "13", "true"], correctIndex: 3, explanation: "15 >= 13 ialah true dan 15 <= 17 ialah true. AND kedua-duanya true memberi true.", diff: "H", part: "A",
        check: { type: "js", code: "const umur=15; return String((umur>=13)&&(umur<=17))", ans: "true" }
      }
    ],

    // ---------------------------------------------------------------- 3.2 Struktur Kod Arahan
    kod_struktur: [
      { q: "Apakah yang dimaksudkan dengan struktur kawalan jujukan?", options: ["Arahan dilaksanakan satu demi satu mengikut turutan", "Arahan dilaksanakan berdasarkan syarat", "Arahan diulang sehingga syarat dipenuhi", "Arahan dilaksanakan secara rawak"], correctIndex: 0, explanation: "Dalam jujukan, setiap arahan dilaksanakan mengikut turutan dari atas ke bawah.", diff: "L", part: "A" },
      { q: "Struktur kawalan manakah yang melaksanakan arahan tertentu hanya jika syarat dipenuhi?", options: ["Jujukan", "Pilihan", "Ulangan", "Input"], correctIndex: 1, explanation: "Struktur kawalan pilihan (if) memilih arahan berdasarkan syarat.", diff: "L", part: "A" },
      { q: "Atur cara anda memberi hasil yang salah selepas dijalankan. Apakah langkah yang sesuai?", options: ["Mengesan dan membaiki ralat dalam kod", "Memadam semua kod dan berhenti", "Menukar nama pemboleh ubah sahaja", "Menjalankan atur cara sekali lagi tanpa mengubah apa-apa"], correctIndex: 0, explanation: "DSKP menetapkan murid mengesan dan membaiki ralat pada kod arahan yang dihasilkan, kemudian menguji semula.", diff: "L", part: "A" },
      { q: "Atur cara dijalankan tanpa mesej ralat tetapi memberi jawapan yang salah. Jenis ralat apakah ini?", options: ["Ralat sintaks", "Ralat logik", "Ralat ejaan arahan", "Ralat peranti"], correctIndex: 1, explanation: "Atur cara berjalan kerana tatabahasa arahan betul, tetapi langkah penyelesaian salah.", diff: "M", part: "A" },
      { q: "Menulis kata kunci arahan dengan ejaan yang salah menyebabkan jenis ralat apa?", options: ["Ralat logik", "Ralat perkakasan", "Ralat sintaks", "Ralat pemaparan"], correctIndex: 2, explanation: "Melanggar peraturan penulisan bahasa atur cara menyebabkan ralat sintaks.", diff: "M", part: "A" },
      {
        q: "Perhatikan kod segmen berikut.\n\nx = 10\nIF x > 5 THEN\n  x = x + 2\nELSE\n  x = x - 2\nEND IF\nPAPAR x\n\nApakah output kod segmen ini?",
        options: ["8", "12", "10", "17"], correctIndex: 1, explanation: "x > 5 adalah true, maka x = 10 + 2 = 12.", diff: "M", part: "A",
        check: { type: "js", code: "let x=10; if (x>5) x=x+2; else x=x-2; return String(x)", ans: "12" }
      },
      {
        q: "Perhatikan kod segmen berikut.\n\nFOR i = 1 TO 3\n  PAPAR i * i\nEND FOR\n\nApakah output kod segmen ini? (setiap nilai dipaparkan dipisahkan dengan ruang)",
        options: ["1 2 3", "1 4 9", "1 8 27", "3 6 9"], correctIndex: 1, explanation: "i = 1, 2, 3 memberi i x i = 1, 4, 9.", diff: "M", part: "A",
        check: { type: "js", code: "const o=[]; for (let i=1;i<=3;i++) o.push(i*i); return o.join(' ')", ans: "1 4 9" }
      },
      {
        q: "Perhatikan kod segmen berikut.\n\nk = 3\nWHILE k > 0 DO\n  PAPAR k\n  k = k - 1\nEND WHILE\n\nApakah output kod segmen ini? (setiap nilai dipisahkan dengan ruang)",
        options: ["1 2 3", "3 2 1 0", "3 2 1", "0 1 2"], correctIndex: 2, explanation: "k dipaparkan 3, 2, 1. Apabila k = 0, syarat k > 0 palsu dan gelung berhenti sebelum 0 dipaparkan.", diff: "M", part: "A",
        check: { type: "js", code: "let k=3; const o=[]; while (k>0) { o.push(k); k=k-1; } return o.join(' ')", ans: "3 2 1" }
      },
      {
        q: "Susun langkah berikut mengikut turutan yang betul bagi atur cara menambah dua nombor.\n\nP. PAPAR hasil\nQ. INPUT a dan b\nR. hasil = a + b",
        options: ["P, Q, R", "Q, R, P", "R, Q, P", "Q, P, R"], correctIndex: 1, explanation: "Data dimasukkan dahulu (Q), kemudian dikira (R), akhir sekali dipaparkan (P).", diff: "M", part: "A" },
      {
        q: "Atur cara bertujuan memaparkan nombor 1 hingga 5, tetapi memaparkan 0 hingga 4.\n\nFOR i = 0 TO 4\n  PAPAR i\nEND FOR\n\nApakah pembetulan yang betul?",
        options: ["Tukar kepada FOR i = 1 TO 5", "Tukar PAPAR kepada INPUT", "Tukar FOR kepada IF", "Tambah satu lagi PAPAR di luar gelung"], correctIndex: 0, explanation: "Nilai permulaan mesti 1 dan nilai akhir mesti 5. Ini ralat logik, bukan ralat sintaks.", diff: "M", part: "A" },
      {
        q: "Perhatikan kod segmen berikut.\n\numur = 17\nada_lesen = false\nIF umur >= 17 THEN\n  IF ada_lesen THEN\n    PAPAR \"Boleh memandu\"\n  ELSE\n    PAPAR \"Perlu lesen\"\n  END IF\nELSE\n  PAPAR \"Terlalu muda\"\nEND IF\n\nApakah output kod segmen ini?",
        options: ["Boleh memandu", "Perlu lesen", "Terlalu muda", "Tiada output"], correctIndex: 1, explanation: "umur >= 17 adalah true, maka masuk pilihan dalam. ada_lesen ialah false, maka output ialah Perlu lesen.", diff: "H", part: "A",
        check: { type: "js", code: "const umur=17, lesen=false; if (umur>=17) { if (lesen) return 'Boleh memandu'; else return 'Perlu lesen'; } else return 'Terlalu muda'", ans: "Perlu lesen" }
      },
      {
        q: "Perhatikan kod segmen berikut.\n\njumlah = 0\nFOR i = 1 TO 5\n  IF i < 4 THEN\n    jumlah = jumlah + i\n  END IF\nEND FOR\nPAPAR jumlah\n\nApakah output kod segmen ini?",
        options: ["6", "15", "9", "3"], correctIndex: 0, explanation: "Hanya i = 1, 2 dan 3 ditambah: 1 + 2 + 3 = 6.", diff: "H", part: "A",
        check: { type: "js", code: "let j=0; for (let i=1;i<=5;i++) { if (i<4) j=j+i; } return String(j)", ans: "6" }
      },
      {
        q: "Perhatikan kod segmen berikut.\n\nberat = 3\nIF berat <= 1 THEN\n  kos = 5\nELSE IF berat <= 2 THEN\n  kos = 8\nELSE\n  kos = 12\nEND IF\nPAPAR kos\n\nApakah output kod segmen ini?",
        options: ["5", "8", "3", "12"], correctIndex: 3, explanation: "3 tidak <= 1 dan tidak <= 2, maka cabang ELSE dilaksanakan dan kos = 12.", diff: "H", part: "A",
        check: { type: "js", code: "const b=3; let k; if (b<=1) k=5; else if (b<=2) k=8; else k=12; return String(k)", ans: "12" }
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
