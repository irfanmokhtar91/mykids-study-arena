/**
 * Verified Structured Knowledge Fact Tables (`App.FactTables`)
 * Expands static/language/humanities/conceptual chapters across D6, T2, and T4
 * with mutually distinct, zero-duplicate curated tuples so kids get many
 * unique non-repeating sets without repetition across Sets 1..K.
 */
(function (global) {
  const App = (global.App = global.App || {});

  function buildFromTuples(rows, makeQ, makeAns, makeExp) {
    return rows.map((row, idx) => {
      const correctAns = makeAns(row);
      const distractors = [];
      const seen = new Set([correctAns]);
      for (let step = 1; step < rows.length && distractors.length < 3; step++) {
        const cand = makeAns(rows[(idx + step * 3) % rows.length]);
        if (!seen.has(cand)) {
          seen.add(cand);
          distractors.push(cand);
        }
      }
      const qObj = {
        q: makeQ(row),
        options: [correctAns, ...distractors],
        correctIndex: 0,
        explanation: makeExp(row)
      };
      if (row.qEn && row.ansEn) {
        const distEn = [];
        const seenEn = new Set([row.ansEn]);
        for (let step = 1; step < rows.length && distEn.length < 3; step++) {
          const candEn = rows[(idx + step * 3) % rows.length].ansEn;
          if (candEn && !seenEn.has(candEn)) {
            seenEn.add(candEn);
            distEn.push(candEn);
          }
        }
        qObj.qEn = row.qEn;
        qObj.optionsEn = [row.ansEn, ...distEn];
        qObj.explanationEn = row.expEn || qObj.explanation;
      }
      return qObj;
    });
  }

  App.FactTables = {
    d6: {
      bm: {
        peribahasa: buildFromTuples(
          [
            ["Langkah kanan", "Bernasib baik / tepat pada masanya", "'Langkah kanan' bererti datang pada masa yang bertuah."],
            ["Tangkai jering", "Orang yang sangat kedekut", "'Tangkai jering' merujuk kepada sikap bakhil atau kedekut."],
            ["Murah hati", "Suka menderma dan tidak kedekut", "'Murah hati' bermaksud pemurah dan suka membantu."],
            ["Khabar angin", "Berita yang belum tentu sahih / gosip", "'Khabar angin' ialah cerita yang belum disahkan kebenarannya."],
            ["Bulat kata", "Sepakat membuat keputusan bersama", "'Bulat kata' bererti mencapai persetujuan bersama."],
            ["Buah tangan", "Hadiah atau cenderamata yang dibawa ketika melawat", "'Buah tangan' ialah ole-ole atau hadiah kepada tuan rumah."],
            ["Cangkul angin", "Membuat kerja yang sia-sia tanpa hasil", "'Cangkul angin' menggambarkan usaha yang tidak membawa hasil."],
            ["Hati batu", "Degil / tidak mahu mendengar nasihat", "'Hati batu' bermaksud keras kepala atau degil."],
            ["Besar kepala", "Sombong dan tidak mahu mengalah", "'Besar kepala' ialah sikap angkuh atau keras kepala."],
            ["Pasang telinga", "Mendengar dengan penuh teliti", "'Pasang telinga' bererti menumpukan perhatian ketika mendengar."],
            ["Ikat perut", "Mengurangkan makan kerana berjimat atau susah", "'Ikat perut' bererti menahan lapar untuk berjimat."],
            ["Mandi peluh", "Bekerja dengan sangat tekun dan bersungguh-sungguh", "'Mandi peluh' menggambarkan kerja keras hingga berpeluh."],
            ["Bagai tikus membaiki labu", "Cuba membaiki sesuatu tetapi makin merosakkannya", "Orang yang tiada kemahiran membaiki barang akhirnya merosakkannya lagi."],
            ["Bagai aur di atas bukit", "Berserah kepada nasib tanpa kepastian", "Hidup dalam keadaan terdedah tanpa tempat bergantung."],
            ["Seperti ular kena palu", "Bengkang-bengkok dan tidak lurus (jalan)", "Menggambarkan laluan atau garisan yang berliku-liku."]
          ],
          (r) => `Apakah maksud ungkapan '${r[0]}'?`,
          (r) => r[1],
          (r) => r[2]
        ),
        kosa_kata: buildFromTuples(
          [
            ["gigih", "tekun", "'Gigih' bermaksud tekun dan bersungguh-sungguh."],
            ["cekal", "tabah", "'Cekal' seerti dengan tabah menghadapi dugaan."],
            ["mesra", "ramah", "'Mesra' seerti dengan ramah dan mudah bergaul."],
            ["lazat", "enak", "'Lazat' seerti dengan enak dan sedap."],
            ["cekap", "mahir", "'Cekap' bermaksud pantas dan mahir menjalankan tugas."],
            ["amanah", "jujur", "'Amanah' bererti jujur dan boleh dipercayai."],
            ["agung", "mulia", "'Agung' bermaksud tinggi darjat atau mulia."],
            ["pantas", "laju", "'Pantas' seerti dengan laju dan cepat."],
            ["damai", "aman", "'Damai' bermaksud tenang dan aman sentosa."],
            ["hebat", "unggul", "'Hebat' membawa maksud luar biasa atau unggul."],
            ["setia", "patuh", "'Setia' bermaksud taat dan teguh berpegang janji."],
            ["cemerlang", "gemilang", "'Cemerlang' seerti dengan kejayaan yang gemilang."],
            ["berani", "perkasa", "'Berani' bermaksud tidak takut dan perkasa."],
            ["sunyi", "sepi", "'Sunyi' bermaksud senyap dan sepi."],
            ["tulen", "asli", "'Tulen' seerti dengan asli dan tidak bercampur palsu."]
          ],
          (r) => `Pilih kata seerti (sinonim) bagi '${r[0]}':`,
          (r) => r[1],
          (r) => r[2]
        ),
        tatabahasa: buildFromTuples(
          [
            ["sekawan burung / gajah", "Haiwan yang bergerak dalam kumpulan", "Penjodoh bilangan 'sekawan' digunakan untuk kumpulan haiwan."],
            ["sepucuk surat / pistol", "Benda nipis atau senjata api tertentu", "Penjodoh bilangan 'sepucuk' tepat untuk surat dan senapang/pistol."],
            ["sebilah pisau / keris", "Alat yang tajam dan bermata", "Penjodoh bilangan 'sebilah' digunakan untuk senjata dan alat tajam."],
            ["sejambak bunga / kunci", "Benda yang dikumpulkan dalam satu tangkai", "'Sejambak' digunakan untuk bunga yang digubah atau gugusan kunci."],
            ["serumpun serai / buluh", "Tumbuhan yang tumbuh berkelompok rapat", "'Serumpun' digunakan untuk tumbuhan seperti serai, tebu dan buluh."],
            ["sekaki payung / cendawan", "Benda bertangkai yang berkembang di atas", "'Sekaki' tepat untuk payung dan cendawan."],
            ["sepasang kasut / anting-anting", "Benda yang berpasangan dua unit", "'Sepasang' merujuk kepada dua benda yang saling melengkapi."],
            ["selembar kertas / benang", "Benda yang nipis, panjang atau halus", "'Selembar' digunakan untuk kertas, benang, tikar dan rambut."],
            ["sebutir telur / mutiara / peluru", "Objek kecil dan bulat", "'Sebutir' tepat untuk telur, mutiara, beras dan peluru."],
            ["sebidang tanah / tikar / permaidani", "Kawasan atau benda yang luas terbentang", "'Sebidang' digunakan untuk tanah, sawah dan tikar."],
            ["seutas rantai / jam tangan / tali", "Benda yang panjang dan berangkai", "'Seutas' digunakan untuk rantai, tali dan jam tangan."],
            ["sepapan petai / mercun", "Benda yang bersusun berkeping panjang", "'Sepapan' tepat untuk petai dan mercun."],
            ["sebentuk cincin / mata kail", "Benda yang melengkung bulat", "'Sebentuk' digunakan untuk cincin, mata kail dan subang."],
            ["setandan pisang / kelapa", "Buah-buahan yang masih pada tangkai besar", "'Setandan' merujuk kepada buah bertangkai besar seperti pisang dan kelapa."],
            ["sebuku sabun / roti / benang", "Ketulan padat berbentuk buku", "'Sebuku' tepat untuk roti, sabun dan benang."]
          ],
          (r) => `Bilakah penjodoh bilangan '${r[0].split(" ")[0]}' digunakan (contoh: ${r[0]})?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      bi: {
        vocab_idioms: buildFromTuples(
          [
            ["spill the beans", "Reveal a secret accidentally", "'Spill the beans' means to give away a secret."],
            ["under the weather", "Feeling slightly sick or unwell", "'Under the weather' means feeling ill or tired."],
            ["cost an arm and a leg", "Very expensive", "'Cost an arm and a leg' means something costs a lot of money."],
            ["bite the bullet", "Face a difficult situation bravely", "'Bite the bullet' means enduring something tough with courage."],
            ["burn the midnight oil", "Stay up late studying or working", "'Burn the midnight oil' means working late into the night."],
            ["on cloud nine", "Extremely happy", "'On cloud nine' means feeling joyful and thrilled."],
            ["see eye to eye", "Agree completely with someone", "'See eye to eye' means sharing the same opinion."],
            ["raining cats and dogs", "Raining very heavily", "'Raining cats and dogs' describes a heavy downpour."],
            ["cry over spilt milk", "Worry about a past mistake that cannot be changed", "It reminds us not to regret something already done."],
            ["a blessing in disguise", "Something good that seemed bad at first", "An apparent problem turns out to bring a good outcome."],
            ["beat around the bush", "Avoid talking directly about the main topic", "'Beat around the bush' means delaying getting to the point."],
            ["early bird catches the worm", "People who wake up or act early succeed first", "Being prompt gives an advantage."],
            ["actions speak louder than words", "What you do matters more than what you say", "Deeds prove sincerity better than promises."],
            ["judge a book by its cover", "Form an opinion based only on outward appearance", "Usually used negatively: 'Don't judge a book by its cover'."],
            ["kill two birds with one stone", "Solve two tasks with a single action", "Achieving two goals in one effort saves time."]
          ],
          (r) => `What does the English idiom "${r[0]}" mean?`,
          (r) => r[1],
          (r) => r[2]
        ),
        tenses: buildFromTuples(
          [
            ["write (past tense)", "wrote", "Irregular past tense of 'write' is 'wrote' (past participle: written)."],
            ["teach (past tense)", "taught", "Irregular past tense of 'teach' is 'taught'."],
            ["catch (past tense)", "caught", "Irregular past tense of 'catch' is 'caught'."],
            ["bring (past tense)", "brought", "Irregular past tense of 'bring' is 'brought'."],
            ["swim (past tense)", "swam", "Past tense of 'swim' is 'swam' (past participle: swum)."],
            ["speak (past tense)", "spoke", "Past tense of 'speak' is 'spoke' (past participle: spoken)."],
            ["choose (past tense)", "chose", "Past tense of 'choose' is 'chose' (past participle: chosen)."],
            ["break (past tense)", "broke", "Past tense of 'break' is 'broke' (past participle: broken)."],
            ["sleep (past tense)", "slept", "Past tense of 'sleep' is 'slept'."],
            ["keep (past tense)", "kept", "Past tense of 'keep' is 'kept'."],
            ["spend (past tense)", "spent", "Past tense of 'spend' is 'spent'."],
            ["build (past tense)", "built", "Past tense of 'build' is 'built'."],
            ["draw (past tense)", "drew", "Past tense of 'draw' is 'drew' (past participle: drawn)."],
            ["fly (past tense)", "flew", "Past tense of 'fly' is 'flew' (past participle: flown)."],
            ["wear (past tense)", "wore", "Past tense of 'wear' is 'wore' (past participle: worn)."]
          ],
          (r) => `Choose the correct Simple Past Tense for "${r[0]}":`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      sejarah: {
        negeri_malaysia: buildFromTuples(
          [
            ["Johor", "Johor Bahru (Darul Ta'zim)", "Ibu negeri Johor ialah Johor Bahru dan gelarannya Darul Ta'zim."],
            ["Kedah", "Alor Setar (Darul Aman)", "Ibu negeri Kedah ialah Alor Setar dengan gelaran Darul Aman."],
            ["Kelantan", "Kota Bharu (Darul Naim)", "Ibu negeri Kelantan ialah Kota Bharu dengan gelaran Darul Naim."],
            ["Melaka", "Bandaraya Melaka (Bandaraya Bersejarah)", "Melaka berpusat di Bandaraya Melaka dan terkenal sebagai Bandaraya Bersejarah."],
            ["Negeri Sembilan", "Seremban (Darul Khusus)", "Seremban ialah ibu negeri Negeri Sembilan (Darul Khusus)."],
            ["Pahang", "Kuantan (Darul Makmur)", "Kuantan ialah ibu negeri Pahang (Darul Makmur)."],
            ["Perak", "Ipoh (Darul Ridzuan)", "Ipoh ialah ibu negeri Perak (Darul Ridzuan)."],
            ["Perlis", "Kangar (Indera Kayangan)", "Kangar ialah ibu negeri Perlis Indera Kayangan."],
            ["Pulau Pinang", "George Town (Pulau Mutiara)", "George Town ialah ibu negeri Pulau Pinang (Pulau Mutiara)."],
            ["Wilayah Persekutuan Putrajaya", "Putrajaya (Bandar dalam Taman)", "Putrajaya ialah pusat pentadbiran Kerajaan Persekutuan Malaysia."],
            ["Sarawak", "Kuching (Bumi Kenyalang)", "Kuching ialah ibu negeri Sarawak Bumi Kenyalang."],
            ["Wilayah Persekutuan Kuala Lumpur", "Kuala Lumpur (Ibu Negara Malaysia)", "Kuala Lumpur ialah ibu negara dan pusat ekonomi utama Malaysia."],
            ["Wilayah Persekutuan Labuan", "Labuan (Pusat Kewangan Pesisir Antarabangsa)", "Pulau Labuan di luar pantai Sabah ialah Wilayah Persekutuan."]
          ],
          (r) => `Apakah ibu negeri atau pusat pentadbiran dan gelaran bagi ${r[0]}?`,
          (r) => r[1],
          (r) => r[2]
        ),
        pembentukan_malaysia: buildFromTuples(
          [
            ["27 Mei 1961", "Tunku Abdul Rahman mencadangkan gagasan Malaysia di Singapura", "Ucapan bersejarah di Persidangan Persatuan Wartawan Luar Negeri di Singapura."],
            ["Julai 1961", "Penubuhan Jawatankuasa Perundingan Perpaduan Kaum (JPPK)", "JPPK ditubuhkan untuk menerangkan gagasan Malaysia kepada penduduk Sabah dan Sarawak."],
            ["Februari–April 1962", "Suruhanjaya Cobbold meninjau pandangan rakyat Sabah dan Sarawak", "Laporan Cobbold mendapati majoriti rakyat menyokong pembentukan Malaysia."],
            ["Ogos 1962", "Penubuhan Jawatankuasa Antara Kerajaan (JAK)", "JAK merangka perlembagaan dan jaminan hak Sabah dan Sarawak."],
            ["9 Julai 1963", "Perjanjian Malaysia 1963 (MA63) ditandatangani di London", "Dokumen rasmi penubuhan Persekutuan Malaysia."],
            ["Misi PBB (UNMM) 1963", "Mengesahkan sokongan majoriti rakyat Sabah dan Sarawak menyertai Malaysia", "Tinjauan Pertubuhan Bangsa-Bangsa Bersatu mengesahkan pembentukan Malaysia selaras kehendak rakyat."],
            ["9 Ogos 1965", "Singapura berpisah daripada Persekutuan Malaysia", "Singapura keluar secara aman menjadi negara republik berdaulat."],
            ["Lord Cobbold", "Pengerusi Suruhanjaya Cobbold 1962", "Mengetuai tinjauan suara rakyat Borneo bersama wakil British dan Tanah Melayu."],
            ["Dato' Donald Stephens (Tun Fuad Stephens)", "Ketua Menteri pertama negeri Sabah", "Memainkan peranan penting dalam Perjanjian 20 Perkara Sabah."],
            ["Tan Sri Stephen Kalong Ningkan", "Ketua Menteri pertama negeri Sarawak", "Pemimpin politik awal Sarawak selepas pembentukan Malaysia."],
            ["Tun Muhammad Ghazali Shafie", "Ahli penting dari Tanah Melayu dalam Suruhanjaya Cobbold", "Turut bersama Wong Pow Nee mewakili Tanah Melayu dalam Suruhanjaya Cobbold."],
            ["Dato' Wong Pow Nee", "Ketua Menteri Pulau Pinang dan ahli Suruhanjaya Cobbold", "Mewakili Persekutuan Tanah Melayu dalam Suruhanjaya Cobbold."]
          ],
          (r) => `Dalam sejarah Pembentukan Malaysia, apakah kepentingan '${r[0]}'?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      sains: {
        mikroorganisma: buildFromTuples(
          [
            { q: "Protozoa yang bergerak menggunakan silia ialah...", ans: "Paramecium", exp: "Paramecium menggunakan silia halus untuk berenang dalam air tawar.", qEn: "Which protozoan moves using tiny hair-like cilia?", ansEn: "Paramecium", expEn: "Paramecium swims using cilia." },
            { q: "Alga unisel yang mempunyai bintik mata dan flagelum untuk berenang ke arah cahaya ialah...", ans: "Chlamydomonas", exp: "Chlamydomonas melakukan fotosintesis menggunakan kloroplas berbentuk cawan.", qEn: "Which unicellular alga swims toward light using flagella?", ansEn: "Chlamydomonas", expEn: "Chlamydomonas has a cup-shaped chloroplast and flagella." },
            { q: "Kulat mikroskopik yang membiak melalui penunasan dan menghasilkan roti gebu ialah...", ans: "Yis", exp: "Yis membebaskan CO₂ semasa respirasi yang mengembangkan doh roti.", qEn: "Which fungus reproduces by budding and makes bread dough rise?", ansEn: "Yeast", expEn: "Yeast releases CO₂ when making bread rise." },
            { q: "Penyakit kurap pada kulit manusia disebabkan oleh...", ans: "Kulat (Fungi)", exp: "Kulat membiak di kawasan kulit yang lembap dan menyebabkan kegatalan.", qEn: "Ringworm and athlete's foot are caused by...", ansEn: "Fungi", expEn: "Fungal skin infections thrive in damp conditions." },
            { q: "Ubat yang dihasilkan oleh ahli sains daripada kulat Penicillium untuk merawat jangkitan bakteria ialah...", ans: "Antibiotik Penisilin", exp: "Alexander Fleming menemui penisilin daripada kulat Penicillium pada 1928.", qEn: "Which medicine extracted from Penicillium fungus treats bacterial infections?", ansEn: "Penicillin antibiotic", expEn: "Penicillin fights bacterial infections." },
            { q: "Proses membekalkan keimunan tubuh terhadap penyakit virus seperti campak ialah...", ans: "Pemvaksinan", exp: "Vaksin merangsang penghasilan antibodi bagi mencegah jangkitan berbahaya.", qEn: "What protects the body against viral diseases like measles in advance?", ansEn: "Vaccination", expEn: "Vaccination stimulates specific antibody production." },
            { q: "Kulat yang tumbuh pada roti basi lembap dengan sporangium hitam ialah...", ans: "Mukor (kulapuk roti)", exp: "Mukor membiak melalui spora di atas makanan lembap.", qEn: "What black-spored mould grows on damp stale bread?", ansEn: "Mucor (bread mould)", expEn: "Bread mould spreads via airborne spores." },
            { q: "Bakteria dalam usus haiwan dan akar kekacang yang membantu menyuburkan tanah ialah...", ans: "Bakteria pengikat nitrogen / pengurai", exp: "Ia menukarkan sisa organik atau nitrogen udara kepada nutrien untuk tumbuhan.", qEn: "Which helpful bacteria enrich soil nitrates for plants?", ansEn: "Nitrogen-fixing / decomposing bacteria", expEn: "They convert nitrogen or decay organic matter into plant nutrients." },
            { q: "Mengapakah kita perlu memasak air dan makanan hingga mendidih?", ans: "Suhu tinggi membunuh mikroorganisma berbahaya", exp: "Pendidihan memusnahkan kebanyakan bakteria dan patogen penyebab keracunan makanan.", qEn: "Why should water and food be cooked thoroughly?", ansEn: "High temperatures kill harmful microorganisms", expEn: "Heat destroys food-poisoning microbes." },
            { q: "Protozoa yang bergerak dengan memanjangkan pseudopodium (kaki palsu) ialah...", ans: "Amoeba", exp: "Amoeba mengubah bentuk badannya menggunakan pseudopodium untuk bergerak dan menelan makanan.", qEn: "Which protozoan moves by extending false feet called pseudopodia?", ansEn: "Amoeba", expEn: "Amoeba uses pseudopodia for movement and engulfing food." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        ),
        mesin: buildFromTuples(
          [
            { q: "Apakah contoh kegunaan skru dalam kehidupan harian?", ans: "Mengikat kepingan kayu pada tempatnya (skru & pengapit G)", exp: "Skru ialah satah condong yang berlingkar mengelilingi silinder.", qEn: "What is an everyday example of a screw?", ansEn: "Joining wood pieces (wood screw & G-clamp)", expEn: "A screw is a spiral inclined plane." },
            { q: "Bagaimanakah susunan bahagian tuas kelas pertama seperti papan jongkang-jongket?", ans: "Fulkrum berada di tengah antara daya dan beban", exp: "Contoh tuas kelas pertama lain ialah gunting dan playar.", qEn: "How is a first-class lever like a seesaw arranged?", ansEn: "Fulcrum in the middle between effort and load", expEn: "Scissors and pliers are also first-class levers." },
            { q: "Apakah kelebihan utama sistem takal bergabung (takal tetap dan takal bergerak)?", ans: "Mengurangkan daya yang diperlukan untuk mengangkat beban berat", exp: "Lebih banyak tali penyokong takal membantu mengurangkan daya tarikan.", qEn: "What is the main advantage of a combined pulley system?", ansEn: "Reduces the effort needed to lift a heavy load", expEn: "Movable pulleys share the load weight across rope segments." },
            { q: "Dalam basikal, rantai menghubungkan gear hadapan dan gear belakang untuk...", ans: "Memindahkan daya kayuhan pedal ke roda belakang", exp: "Basikal ialah mesin kompleks yang menggabungkan gear, tuas, skru serta roda dan gandar.", qEn: "On a bicycle, the chain links front and rear gears to...", ansEn: "Transfer pedalling force to the rear wheel", expEn: "A bicycle combines gears, levers, screws, and wheels and axles." },
            { q: "Jam tangan mekanikal ialah mesin kompleks yang menggabungkan...", ans: "Gear, skru serta roda dan gandar", exp: "Gear kecil dan besar menggerakkan jarum saat, minit dan jam tepat.", qEn: "A mechanical watch is a complex machine combining...", ansEn: "Gears, screws, and wheel and axle", expEn: "Gears regulate the motion of the watch hands." },
            { q: "Kren pembinaan menggunakan mesin ringkas utama iaitu...", ans: "Takal dan tuas", exp: "Sistem takal memudahkan pengangkatan bahan binaan berat ke bangunan tinggi.", qEn: "A construction crane primarily relies on...", ansEn: "Pulleys and levers", expEn: "Pulleys lift heavy steel and concrete upward." },
            { q: "Dalam pemotong kuku, pemegangnya berfungsi sebagai...", ans: "Tuas untuk menggandakan daya tangan", exp: "Pemegang panjang ialah tuas manakala hujung pemotong ialah baji.", qEn: "In a nail clipper, the handle works as a...", ansEn: "Lever to multiply finger force", expEn: "The lever presses the sharp wedge blades together." },
            { q: "Dalam kereta sorong, di manakah kedudukan beban berbanding fulkrum (roda)?", ans: "Beban di tengah-tengah antara roda dan pemegang (tuas kelas ke-2)", exp: "Kedudukan ini mengurangkan daya mengangkat beban berat.", qEn: "In a wheelbarrow, where is the load relative to the wheel (fulcrum)?", ansEn: "Load in the middle between wheel and handles (2nd-class lever)", expEn: "Class 2 levers make lifting heavy loads easier." },
            { q: "Pengasah pensel mekanikal menggunakan gabungan dua jenis mesin ringkas iaitu...", ans: "Roda dan gandar serta baji", exp: "Pemegang berpusing (roda dan gandar) memusingkan bilah tajam (baji).", qEn: "A crank pencil sharpener combines...", ansEn: "Wheel and axle with a wedge", expEn: "Turning the handle rotates the sharp cutting wedge." },
            { q: "Pembuka tin berputar menggabungkan empat jenis mesin ringkas iaitu...", ans: "Tuas, roda dan gandar, gear serta baji", exp: "Ia gabungan beberapa mesin ringkas untuk memotong penutup tin dengan mudah.", qEn: "A rotary can opener is a complex machine combining...", ansEn: "Lever, wheel and axle, gear, and wedge", expEn: "Multiple simple machines work together cleanly." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        )
      },
      pi: {
        akidah: buildFromTuples(
          [
            ["Al-Khaliq", "Allah Maha Pencipta", "Al-Khaliq bermaksud Allah mencipta seluruh alam daripada tiada."],
            ["Ar-Rahman", "Allah Maha Pemurah", "Ar-Rahman melimpahkan rahmat dan rezeki kepada semua makhluk di dunia."],
            ["Al-Adlu", "Allah Maha Adil", "Setiap keputusan Allah adalah tepat dan tidak menzalimi sesiapapun."],
            ["Al-Hakim", "Allah Maha Bijaksana", "Setiap ciptaan dan syariat Allah mempunyai hikmah."],
            ["As-Sami'", "Allah Maha Mendengar", "Allah mendengar segala bisikan hati dan doa hamba-Nya."],
            ["Al-Basir", "Allah Maha Melihat", "Tiada satu perbuatan pun tersembunyi daripada penglihatan Allah."],
            ["Al-Alim", "Allah Maha Mengetahui", "Ilmu Allah meliputi segala yang zahir dan ghaib."],
            ["Malaikat Munkar & Nakir", "Menyoal manusia di dalam alam kubur (barzakh)", "Kedua-dua malaikat ini menyoal roh di alam barzakh."],
            ["Malaikat Malik", "Menjaga pintu neraka", "Malaikat Malik bertugas mengawal neraka dengan tegas."],
            ["Malaikat Ridwan", "Menjaga pintu syurga", "Malaikat Ridwan mengalu-alukan ahli syurga."],
            ["Yaumul Ba'ath", "Hari kebangkitan semula manusia dari kubur", "Selepas sangkakala kedua ditiup, semua makhluk dibangkitkan."],
            ["Yaumul Hisab", "Hari perhitungan segala amalan manusia", "Setiap amalan baik dan buruk dihitung dengan adil."],
            ["Sirat", "Titian merentangi neraka menuju ke syurga", "Kelajuan melintasi Sirat bergantung pada amalan soleh di dunia."],
            ["Al-Qadir", "Allah Maha Berkuasa", "Allah berkuasa melakukan segala sesuatu mengikut kehendak-Nya."],
            ["Al-Ghafur", "Allah Maha Pengampun", "Allah mengampunkan dosa hamba-Nya yang bertaubat nasuha."]
          ],
          (r) => `Apakah maksud atau tugas bagi '${r[0]}' dalam Akidah Islam?`,
          (r) => r[1],
          (r) => r[2]
        )
      }
    },

    t2: {
      bm: {
        peribahasa: buildFromTuples(
          [
            ["Ukur baju di badan sendiri", "Menyesuaikan perbelanjaan atau cita-cita dengan kemampuan diri", "Jangan berbelanja melebihi kemampuan sebenar."],
            ["Alah bisa tegal biasa", "Pekerjaan sukar menjadi mudah apabila sudah biasa dilakukan", "Latihan berterusan menjadikan tugasan mudah."],
            ["Sediakan payung sebelum hujan", "Bersedia lebih awal sebelum ditimpa kesusahan", "Persiapan awal mencegah kerugian besar."],
            ["Masuk kandang kambing mengembek", "Menyesuaikan diri dengan adat dan budaya tempatan", "Menghormati adat masyarakat di mana kita berada."],
            ["Seperti katak di bawah tempurung", "Orang yang cetek pengetahuan tentang dunia luar", "Kurang membaca dan tidak mengetahui perkembangan semasa."],
            ["Carik-carik bulu ayam, lama-lama bercantum juga", "Perselisihan sesama ahli keluarga akhirnya akan berbaik semula", "Ikatan kekeluargaan tetap kuat walaupun bergaduh."],
            ["Genggam bara api biar sampai jadi arang", "Melakukan kerja susah dengan sabar sehingga berjaya sepenuhnya", "Jangan berhenti di tengah jalan sebelum siap."],
            ["Indah khabar daripada rupa", "Keadaan sebenar tidak sehebat cerita atau iklan yang didengar", "Realiti kurang memuaskan berbanding khabarnya."],
            ["Kalau tidak dipecahkan ruyung, manakan dapat sagunya", "Usaha gigih diperlukan untuk memperoleh kejayaan", "Hasil tidak datang tanpa kerja keras."],
            ["Harapkan pagar, pagar makan padi", "Orang yang dipercayai mengkhianati amanah yang diberikan", "Pecah amanah oleh orang yang dipertanggungjawabkan."],
            ["Bagai aur dengan tebing (Kerjasama)", "Hidup bermuafakat dan saling membantu", "Masyarakat perlu bersatu padu."],
            ["Hujan emas di negeri orang, hujan batu di negeri sendiri", "Walau bagaimana mewah negeri asing, tanah air sendiri tetap lebih baik", "Menghargai negara sendiri melebihi kemewahan di tempat orang."],
            ["Seperti pahat dengan penukul", "Hanya bekerja apabila disuruh atau dipaksa", "Tiada inisiatif sendiri untuk bertindak."],
            ["Bapa borek anak rintik", "Perangai anak lazimnya mengikut sifat atau contoh ibu bapanya", "Teladan ibu bapa mempengaruhi tingkah laku anak."],
            ["Kerbau dipegang pada talinya, manusia dipegang pada janjinya", "Orang bermaruah sentiasa menepati janji yang dilafazkan", "Menegaskan kepentingan integriti dan menepati janji."]
          ],
          (r) => `Apakah maksud peribahasa '${r[0]}'?`,
          (r) => r[1],
          (r) => r[2]
        ),
        komsas: buildFromTuples(
          [
            ["Metafora", "Perbandingan terus tanpa kata pembanding (contoh: lautan ilmu, api kemarahan)", "Menggabungkan unsur konkrit dan abstrak secara langsung."],
            ["Sinkope", "Penyingkatan kata seperti 'tak', 'ku', 'mu', 'nak'", "Menjadikan dialog atau baris sajak lebih ringkas."],
            ["Hiperbola", "Pernyataan berlebih-lebihan atau melampau untuk kesan dramatik", "Contoh: 'hatinya hancur berkecai seribu'."],
            ["Asonansi", "Pengulangan bunyi vokal (a, e, i, o, u) dalam satu baris puisi", "Memberikan kemerduan bunyi vokal."],
            ["Aliterasi", "Pengulangan bunyi konsonan dalam satu baris puisi", "Memberikan rentak bunyi konsonan."],
            ["Responsi", "Pengulangan kata pada bahagian tengah baris-baris berturut", "Anafora di awal, responsi di tengah, epifora di akhir."],
            ["Epifora", "Pengulangan kata yang sama pada akhir baris berturut-turut", "Menegaskan mesej di penghujung baris sajak."],
            ["Inversi", "Pembalikan susunan kata biasa dalam ayat puisi", "Contoh: 'Di situ kita bertemu' berbanding 'Kita bertemu di situ'."],
            ["Latar Tempat", "Lokasi geografi atau ruang sesuatu peristiwa cerita berlaku", "Contoh: di bilik darjah, di tepi pantai."],
            ["Latar Masyarakat", "Gambaran cara hidup, pekerjaan dan nilai sesuatu kelompok dalam cerita", "Contoh: masyarakat yang saling bekerjasama."],
            ["Monolog", "Pertuturan seorang watak bersendirian untuk meluahkan perasaan", "Memperlihatkan konflik dalaman watak."],
            ["Imbas Muka", "Ramalan atau bayangan peristiwa yang bakal berlaku kelak", "Mewujudkan unsur suspen kepada pembaca."],
            ["Syair", "Puisi tradisional 4 baris serangkap dengan rima akhir a-a-a-a tanpa pembayang", "Kesemua empat baris syair ialah maksud cerita."],
            ["Gurindam", "Puisi dua baris serangkap; baris pertama syarat dan baris kedua akibat", "Contoh terkenal ialah Gurindam Dua Belas."],
            ["Klimaks", "Tahap ketegangan paling memuncak sebelum konflik terlerai", "Titik penentu pengakhiran cerita."]
          ],
          (r) => `Dalam istilah KOMSAS, apakah yang dimaksudkan dengan '${r[0]}'?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      bi: {
        vocab_phrasal: buildFromTuples(
          [
            ["take off", "Remove clothing, OR leave the ground (plane)", "Planes 'take off' from runways."],
            ["turn down", "Reject an offer/request, OR lower volume", "She had to 'turn down' the invitation politely."],
            ["carry on", "Continue doing something", "Despite the rain, they decided to 'carry on' hiking."],
            ["get over", "Recover from an illness or disappointment", "It took a week to 'get over' the flu."],
            ["bring up", "Raise a child, OR mention a topic", "Please don't 'bring up' that embarrassing story."],
            ["find out", "Discover a piece of information", "We need to 'find out' when the exam starts."],
            ["come across", "Find something or meet someone by chance", "I 'came across' an old photo in the attic."],
            ["make up", "Invent a story/excuse, OR reconcile after an argument", "Did you 'make up' that excuse?"],
            ["set up", "Arrange or establish a business, club, or tent", "The scouts 'set up' their tents before sunset."],
            ["give away", "Donate items for free, OR reveal a secret", "He decided to 'give away' his old storybooks."],
            ["pick up", "Collect someone/something, OR learn quickly", "Can you 'pick up' the parcel on your way home?"],
            ["hold on", "Wait for a short moment", "'Hold on' a second while I check my bag."],
            ["work out", "Exercise at a gym, OR find a solution", "I hope both teams can 'work out' the problem."],
            ["cut down on", "Reduce consumption of something", "Doctors advise us to 'cut down on' sugary drinks."],
            ["keep up with", "Stay at the same speed or level as others", "Walk slower; I can't 'keep up with' you."]
          ],
          (r) => `What does the phrasal verb "${r[0]}" mean?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      sejarah: {
        alam_melayu: buildFromTuples(
          [
            ["Kerajaan Funan", "Abad ke-1 Masihi di Lembah Sungai Mekong (berpusat di Vyadhapura)", "Kerajaan Alam Melayu terawal yang terkenal dengan pelabuhan Oc Eo."],
            ["Kerajaan Champa", "Diasaskan oleh Chu-Lien pada 192 M di selatan dan tengah Vietnam", "Terkenal dengan kompleks candi di Po Nagar dan My Son."],
            ["Kerajaan Srivijaya", "Berpusat di Palembang sejak 683 M; kuasa maritim terkuat di Selat Melaka", "Menguasai perdagangan maritim Nusantara dan pengajaran Buddha."],
            ["Sistem Pengairan Baray (Angkor)", "Kolam takungan air besar yang mengairi sawah padi pada musim kemarau", "Menjadikan Angkor pengeluar beras utama di Lembah Mekong."],
            ["Kerajaan Majapahit", "Berpusat di Kota Trowulan, Jawa Timur dengan Patih Gajah Mada yang terkenal", "Mencapai zaman kegemilangan di bawah Raja Hayam Wuruk dan Gajah Mada."],
            ["Candi Lembah Bujang", "Bukti seni bina Hindu-Buddha dan pusat peleburan besi awal di Kedah", "Menunjukkan Kedah Tua sudah menjadi pusat perdagangan antarabangsa sejak abad ke-5."],
            ["Kerajaan Gangga Nagara", "Berpusat di kawasan Beruas, Perak sejak abad ke-6", "Terkenal sebagai pelabuhan awal dan penemuan arca Buddha gangsa."],
            ["Pelabuhan Oc Eo", "Pelabuhan utama Kerajaan Funan yang menghubungkan India dan China", "Pedagang asing singgah mendapatkan rempah dan hasil hutan."],
            ["Pelabuhan Pangkalan Bujang", "Pelabuhan utama Kerajaan Kedah Tua dengan Gunung Jerai sebagai mercu tanda", "Gunung Jerai memandu kapal dagang memasuki muara sungai."],
            ["Patih Gajah Mada", "Perdana Menteri agung Majapahit dengan Sumpah Palapa menyatukan Nusantara", "Memperluaskan kekuasaan Majapahit merentasi kepulauan Melayu."],
            ["Suryavarman II", "Raja Angkor yang membina Angkor Wat pada abad ke-12", "Angkor Wat ialah warisan seni bina agung Alam Melayu."],
            ["Jayavarman VII", "Raja Angkor yang membina Angkor Thom dan memperluas empayar hingga Champa", "Terkenal membina banyak hospital dan jalan berturap."],
            ["Bandar Yasodharapura", "Ibu kota awal Kerajaan Angkor sebelum pembinaan Angkor Thom", "Menjadi pusat pentadbiran dan keagamaan Angkor."],
            ["Tulisan Champa Kuno", "Aksara yang berasal daripada skrip Palava digunakan pada batu bersurat Champa", "Batu bersurat Dong Yen Chau ditulis dalam Bahasa Melayu Champa."],
            ["Agama Islam di Alam Melayu", "Mula bertapak kukuh melalui Kerajaan Samudera-Pasai (Pasai) pada abad ke-13", "Sultan Malik al-Salih memeluk Islam dan mengasaskan Pasai."]
          ],
          (r) => `Apakah fakta tepat tentang '${r[0]}' dalam sejarah Alam Melayu?`,
          (r) => r[1],
          (r) => r[2]
        ),
        kesultanan_melaka: buildFromTuples(
          [
            ["Sultan Iskandar Shah", "Gelaran Parameswara selepas memeluk Islam / memerintah awal Melaka", "Menjadikan Melaka negeri Islam dan menarik pedagang Arab/India Muslim."],
            ["Sultan Mansur Shah", "Sultan Melaka ketika empayar mencapai puncak kegemilangan wilayah", "Menakluki Pahang, Kampar dan Siak serta memperkukuh hubungan dengan China."],
            ["Hubungan Melaka–China", "Melaka mendapat naungan keselamatan daripada Maharaja Ming untuk mengelak ancaman Siam", "Lawatan Laksamana Cheng Ho mengukuhkan keselamatan Melaka."],
            ["Laksamana Cheng Ho", "Utusan Maharaja China yang berulang kali berlabuh di Melaka", "Membantu menjaga keamanan perairan Selat Melaka daripada lanun."],
            ["Undang-Undang Laut Melaka", "Mengandungi peraturan pelayaran, tugas nakhoda dan hukum jenayah di atas kapal", "Digubal oleh pembesar Melaka semasa zaman Sultan Mahmud Shah."],
            ["4 Pembesar Berempat", "Bendahara, Penghulu Bendahari, Temenggung dan Laksamana", "Tulang belakang Sistem Pembesar Empat Lipatan Melaka."],
            ["Angin Monsun Barat Daya & Timur Laut", "Angin bermusim yang membawa pedagang dari India dan China bertemu di Melaka", "Kapal berdagang sambil menunggu pertukaran arah angin monsun."],
            ["Nakhoda dalam Undang-Undang Laut", "Berkuasa penuh sebagai 'raja' di atas kapal semasa pelayaran di laut", "Menentukan disiplin anak kapal dan aturan perdagangan laut."],
            ["Perkahwinan diraja (cth: Sultan Mansur Shah dengan puteri Majapahit)", "Strategi diplomasi Sultan Melaka mengeratkan hubungan kuasa asing", "Menjamin kedamaian serantau dan jaringan perdagangan."],
            ["Pengislaman Pasai & Melaka", "Menarik ribuan pedagang Islam dari Gujerat, Arab dan Pasai ke Melaka", "Pelabuhan menjadi makmur kerana layanan adil."],
            ["Kota A Famosa", "Kubu pertahanan batu yang dibina oleh Portugis selepas menawan Melaka pada 1511", "Dibina oleh Alfonso de Albuquerque daripada batu istana dan masjid lama."],
            ["Tun Mutahir", "Bendahara Melaka yang terkorban akibat fitnah di penghujung Kesultanan Melaka", "Kelemahan kepimpinan dalaman menjadi faktor kejatuhan Melaka 1511."],
            ["Sultan Mahmud Shah", "Sultan terakhir Kesultanan Melayu Melaka di Melaka sebelum berundur ke Kampar", "Berusaha beberapa kali melancarkan serangan balas untuk menawan semula Melaka."],
            ["Ufti Wilayah Takluk & Naungan", "Tanda kesetiaan negeri taklukan kepada Melaka serta penghantaran tentera semasa perang", "Mengukuhkan kedudukan Melaka sebagai kuasa unggul."],
            ["Orang Laut", "Tentera laut semula jadi yang setia mengiringi dan melindungi kapal dagang ke Melaka", "Mengelakkan serangan lanun di perairan Selat Melaka."]
          ],
          (r) => `Apakah fakta penting tentang '${r[0]}' dalam Kesultanan Melayu Melaka?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      sains: {
        nutrisi: buildFromTuples(
          [
            { q: "Enzim amilase air liur mencernakan kanji menjadi...", ans: "Maltosa", exp: "Pencernaan kimia kanji bermula di mulut oleh amilase.", qEn: "Salivary amylase breaks starch down into...", ansEn: "Maltose", expEn: "Amylase converts starch into maltose in the mouth." },
            { q: "Enzim pepsin di dalam perut mencernakan protein menjadi...", ans: "Polipeptida", exp: "Pepsin berfungsi dalam medium asid perut (pH ~2).", qEn: "Pepsin in the stomach digests protein into...", ansEn: "Polypeptides", expEn: "Pepsin breaks proteins into polypeptides." },
            { q: "Enzim lipase di usus kecil mencernakan lemak menjadi...", ans: "Asid lemak dan gliserol", exp: "Lipase memecahkan lemak yang telah diemulsikan oleh hempedu.", qEn: "Lipase breaks down fats into...", ansEn: "Fatty acids and glycerol", expEn: "Lipase converts emulsified fats to fatty acids and glycerol." },
            { q: "Ujian Millon (dipanaskan) membentuk mendakan merah bata jika terdapat...", ans: "Protein", exp: "Reagen Millon mengesan kehadiran protein dalam makanan.", qEn: "Millon's test forms a brick-red precipitate in the presence of...", ansEn: "Protein", expEn: "Millon's reagent tests for proteins." },
            { q: "Ujian Emulsi Etanol membentuk emulsi putih keruh apabila menguji...", ans: "Lemak / Lipid", exp: "Lemak larut dalam etanol dan membentuk emulsi keruh apabila ditambah air.", qEn: "The Ethanol Emulsion test produces a cloudy white emulsion for...", ansEn: "Fats / Lipids", expEn: "Lipids form milky emulsions when mixed with ethanol and water." },
            { q: "Kekurangan Vitamin D menyebabkan penyakit tulang lembut pada kanak-kanak iaitu...", ans: "Riket", exp: "Vitamin D diperlukan untuk penyerapan kalsium dan fosforus bagi tulang kuat.", qEn: "Vitamin D deficiency in children causes soft bones, known as...", ansEn: "Rickets", expEn: "Vitamin D is needed to absorb calcium for strong bones." },
            { q: "Kekurangan mineral Iodin boleh menyebabkan pembengkakan kelenjar tiroid iaitu...", ans: "Goiter (Beguk)", exp: "Iodin diperlukan untuk menghasilkan hormon tiroksina.", qEn: "Iodine deficiency causes thyroid gland swelling called...", ansEn: "Goitre", expEn: "Iodine is needed to produce thyroxine." },
            { q: "Kekurangan zat besi (ferum) menyebabkan bilangan sel darah merah rendah iaitu...", ans: "Anemia", exp: "Zat besi membina hemoglobin untuk mengangkut oksigen.", qEn: "Iron deficiency reduces haemoglobin, causing...", ansEn: "Anaemia", expEn: "Iron is a key part of haemoglobin." },
            { q: "Kekurangan kalsium dan fosforus pada usia dewasa menjadikan tulang rapuh iaitu...", ans: "Osteoporosis", exp: "Kalsium menguatkan matriks tulang dan gigi.", qEn: "Lack of calcium in adults makes bones brittle, known as...", ansEn: "Osteoporosis", expEn: "Calcium maintains strong bone density." },
            { q: "Pergerakan gelombang otot sepanjang esofagus untuk menolak makanan ke perut dipanggil...", ans: "Peristalsis", exp: "Pengecutan dan pengenduran otot esofagus berlaku secara luar kawal.", qEn: "Wave-like muscle contractions pushing food down the oesophagus are called...", ansEn: "Peristalsis", expEn: "Peristalsis moves food along the alimentary canal." },
            { q: "Enzim tripsin dari pankreas berfungsi di duodenum dalam medium yang bersifat...", ans: "Beralkali (kira-kira pH 8)", exp: "Pankreas merembeskan amilase, tripsin dan lipase ke duodenum.", qEn: "Trypsin from the pancreas works in the duodenum in a medium that is...", ansEn: "Alkaline (about pH 8)", expEn: "Pancreatic juice aids digestion in the duodenum." },
            { q: "Apakah fungsi asid hidroklorik (HCl) di dalam perut?", ans: "Membunuh bakteria dalam makanan dan menyediakan pH berasid untuk pepsin", exp: "Asid perut juga menghentikan tindakan amilase air liur.", qEn: "What is the role of hydrochloric acid in the stomach?", ansEn: "Kills bacteria in food and provides acidic pH for pepsin", expEn: "Stomach acid disinfects food and activates pepsin." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        ),
        sistem_suria: buildFromTuples(
          [
            { q: "Planet manakah yang paling dekat dengan Matahari?", ans: "Utarid (Mercury)", exp: "Utarid mengorbit Matahari paling dekat (~88 hari Bumi setahun).", qEn: "Which planet is closest to the Sun?", ansEn: "Mercury", expEn: "Mercury has the innermost orbit." },
            { q: "Planet manakah yang digelar 'Planet Merah' kerana permukaan kaya besi oksida?", ans: "Marikh (Mars)", exp: "Debu oksida besi memberi warna kemerahan kepada Marikh.", qEn: "Which planet is called the 'Red Planet' due to iron oxide dust?", ansEn: "Mars", expEn: "Iron oxide makes Mars look reddish." },
            { q: "Planet gergasi manakah yang terkenal dengan sistem gelang ais dan batu yang paling menonjol?", ans: "Zuhal (Saturn)", exp: "Gelang Zuhal sangat lebar dan cerah daripada ais dan debu.", qEn: "Which gas giant is famous for its prominent bright icy ring system?", ansEn: "Saturn", expEn: "Saturn's wide icy rings are clearly visible by telescope." },
            { q: "Planet manakah yang berputar mengiring hampir selari dengan satah orbitnya (98°)?", ans: "Uranus", exp: "Uranus berguling mengiring mengelilingi Matahari dan mempunyai kutub yang pelik.", qEn: "Which planet rotates tilted nearly on its side (~98°)?", ansEn: "Uranus", expEn: "Uranus has an extreme axial tilt of 98 degrees." },
            { q: "Apakah satelit semula jadi (bulan) terbesar milik planet Zuhal yang mempunyai atmosfera tebal?", ans: "Titan", exp: "Titan lebih besar daripada planet Utarid dan mempunyai tasik metana cair.", qEn: "What is Saturn's largest moon, famous for its dense nitrogen atmosphere?", ansEn: "Titan", expEn: "Titan is larger than Mercury and has liquid methane lakes." },
            { q: "Tempoh peredaran Bumi mengelilingi Matahari mengambil masa kira-kira...", ans: "365¼ hari (1 tahun)", exp: "Pecahan suku hari dikumpulkan setiap 4 tahun menjadi tahun lompat.", qEn: "How long does Earth take to revolve around the Sun once?", ansEn: "365¼ days (1 year)", expEn: "Earth completes one solar orbit every 365.25 days." },
            { q: "Daya apakah yang mengekalkan planet sentiasa berada di orbitnya mengelilingi Matahari?", ans: "Tarikan graviti Matahari", exp: "Graviti Matahari menarik planet ke pusat orbit.", qEn: "What force keeps planets in orbit around the Sun?", ansEn: "Sun's gravitational pull", expEn: "Solar gravity provides the centripetal pull." },
            { q: "Fenomena air pasang dan surut lautan di Bumi terutamanya dipengaruhi oleh tarikan graviti...", ans: "Bulan (dan Matahari)", exp: "Bulan yang lebih dekat memberi daya tarikan pasang surut terkuat.", qEn: "Ocean tides on Earth are primarily caused by the gravitational pull of...", ansEn: "The Moon (and the Sun)", expEn: "The Moon's proximity gives it the strongest tidal pull." },
            { q: "Apakah nama lingkaran batuan kecil yang mengorbit di luar orbit Neptun (termasuk Pluto)?", ans: "Lingkaran Kuiper", exp: "Banyak komet jangka pendek dan planet kerdil berasal dari Lingkaran Kuiper.", qEn: "What icy belt of small bodies lies beyond Neptune's orbit?", ansEn: "Kuiper Belt", expEn: "The Kuiper Belt contains icy objects and dwarf planets like Pluto." },
            { q: "Objek terbesar di Lingkaran Asteroid antara Marikh dan Musytari yang dikelaskan sebagai planet kerdil ialah...", ans: "Ceres", exp: "Ceres merupakan satu-satunya planet kerdil yang terletak di Lingkaran Asteroid dalaman.", qEn: "The largest object in the Asteroid Belt between Mars and Jupiter, classified as a dwarf planet, is...", ansEn: "Ceres", expEn: "Ceres is the only dwarf planet in the inner Asteroid Belt." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        )
      }
    },

    t4: {
      bm: {
        peribahasa_spm: buildFromTuples(
          [
            ["Seperti abu di atas tunggul", "Kedudukan atau jawatan yang tidak terjamin dan mudah jatuh", "Angin bertiup sedikit pun abu akan berterbangan."],
            ["Bagai menatang minyak yang penuh", "Memelihara anak dengan penuh kasih sayang dan berhati-hati", "Menjaga supaya tidak tumpah walau setitik."],
            ["Ke bukit sama didaki, ke lurah sama dituruni", "Perhubungan yang akrab dalam susah dan senang", "Sentiasa sehidup semati dalam masyarakat."],
            ["Hati gajah sama dilapah, hati kuman sama dicecah", "Pembahagian hasil atau tugas secara adil tidak kira banyak atau sedikit", "Menekankan keadilan pembahagian rezeki."],
            ["Bagaimana acuan begitulah kuihnya", "Tingkah laku anak menuruti didikan ibu bapanya", "Ibu bapa menjadi cerminan perangai anak."],
            ["Duduk sama rendah, berdiri sama tinggi", "Mempunyai taraf, keupayaan atau kedudukan yang setanding", "Mencapai kejayaan setara bangsa maju lain."],
            ["Tak lapuk dek hujan, tak lekang dek panas", "Adat atau warisan yang kekal relevan sepanjang zaman", "Tidak hilang ditelan perubahan masa."],
            ["Berdiri di atas kaki sendiri", "Berusaha secara berdikari tanpa bergantung pada orang lain", "Mengamalkan sikap berdikari."],
            ["Sudah terhantuk baru tengadah", "Sudah ditimpa musibah barulah mahu insaf dan beringat", "Menyesal hanya selepas perkara buruk berlaku."],
            ["Menangguk di air keruh", "Mengambil kesempatan mencari keuntungan ketika orang lain dalam kesusahan", "Bersikap tidak jujur ketika berlaku kekacauan."],
            ["Bagai menarik rambut di dalam tepung", "Menyelesaikan masalah rumit dengan penuh teliti agar tiada pihak tersinggung", "Rambut tidak putus, tepung tidak berselerak."],
            ["Sambil menyelam minum air", "Melakukan dua atau lebih pekerjaan dalam satu masa yang sama", "Membawa manfaat berganda daripada satu usaha."],
            ["Kais pagi makan pagi, kais petang makan petang", "Hidup dalam kemiskinan yang bergantung pada pendapatan harian", "Perlu bekerja setiap hari untuk menyara makanan hari itu."],
            ["Yang bulat tidak datang menggolek, yang pipih tidak datang melayang", "Kejayaan atau rezeki tidak datang sendiri tanpa usaha", "Mesti berusaha gigih untuk mencapai cita-cita."],
            ["Seekor kerbau membawa lumpur semuanya terpalit", "Kesalahan seorang individu memburukkan nama seluruh kumpulan atau keluarga", "Menjaga disiplin agar tidak memalukan komuniti."]
          ],
          (r) => `Apakah maksud peribahasa SPM '${r[0]}'?`,
          (r) => r[1],
          (r) => r[2]
        ),
        komsas_novel: buildFromTuples(
          [
            ["Protagonis", "Watak utama yang menggerakkan konflik dan peristiwa cerita", "Lazimnya memiliki sifat positif dan berdepan cabaran utama."],
            ["Antagonis", "Watak penentang watak utama yang mencetuskan halangan", "Mencipta ketegangan dramatik dalam plot novel."],
            ["Watak Dinamik", "Watak yang mengalami perubahan sikap atau pemikiran sepanjang cerita", "Contohnya berubah daripada pemarah menjadi penyayang."],
            ["Watak Statik", "Watak yang mengekalkan sifat asal dari awal hingga akhir cerita", "Tidak mengalami perubahan perwatakan ketara."],
            ["Teknik Imbas Kembali", "Watak mengingati semula peristiwa lampau untuk menjelaskan punca konflik", "Mengaitkan masa lalu dengan keadaan sekarang."],
            ["Teknik Suspens", "Peristiwa yang menimbulkan tanda tanya dan debaran kepada pembaca", "Membuatkan pembaca ingin tahu kesudahannya."],
            ["Teknik Kejutan", "Peristiwa yang berlaku secara tiba-tiba di luar jangkaan pembaca", "Menukar hala tuju plot secara mendadak."],
            ["Teknik Dialog", "Perbualan antara dua atau lebih watak dalam karya prosa", "Mendedahkan perwatakan melalui percakapan."],
            ["Permulaan (Eksposisi)", "Tahap awal plot memperkenalkan watak, latar dan bibit persoalan", "Menjadi asas sebelum konflik berkembang."],
            ["Peleraian", "Bahagian akhir plot apabila konflik diselesaikan dengan bahagia atau sedih", "Menutup penceritaan sesuatu novel."],
            ["Metafora (Kajian Puisi)", "Perbandingan secara langsung menggabungkan kata konkrit dan abstrak", "Contoh: 'samudera kehidupan'."],
            ["Personifikasi (Kajian Puisi)", "Memberi sifat atau perbuatan manusia kepada benda mati atau alam", "Contoh: 'ombak mengejar pantai'."],
            ["Anafora (Kajian Puisi)", "Pengulangan kata yang sama pada permulaan baris berturut-turut", "Menguatkan irama dan penegasan sajak."],
            ["Paradoks", "Pernyataan yang kelihatan bertentangan tetapi mengandungi kebenaran", "Contoh: 'kesepian di tengah kota yang bising'."],
            ["Sajak Bebas", "Puisi moden tanpa ikatan jumlah baris, suku kata atau rima tetap", "Berbeza daripada pantun dan syair yang terikat bentuknya."]
          ],
          (r) => `Apakah maksud konsep sastera '${r[0]}' dalam KOMSAS?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      bi: {
        vocab_collocations: buildFromTuples(
          [
            ["make a decision", "Decide after thinking carefully (not 'do a decision')", "Natural collocation: 'make a decision'."],
            ["do homework", "Complete school assignments (not 'make homework')", "Use 'do' with tasks and homework."],
            ["pay attention", "Focus carefully on something (not 'give attention')", "Standard collocation: 'pay attention to'."],
            ["catch a cold", "Become ill with a cold (not 'take a cold')", "We say 'catch a cold' or 'catch the flu'."],
            ["keep a promise", "Do what you promised to do (not 'hold a promise')", "Standard collocation: 'keep a promise'."],
            ["break the ice", "Start friendly conversation in a shy/tense group", "Makes strangers feel comfortable."],
            ["alleviate", "Make pain, suffering, or a problem less severe", "Synonym of ease or reduce."],
            ["detrimental", "Tending to cause harm or damage", "Opposite of beneficial."],
            ["plausible", "Seeming reasonable or believable", "A 'plausible explanation' makes logical sense."],
            ["ambiguous", "Open to more than one interpretation; unclear", "Opposite of clear and explicit."],
            ["eloquent", "Fluent and persuasive in speaking or writing", "Describes an impressive speaker."],
            ["diligent", "Showing care and persistent effort in work", "Synonym of hardworking and conscientious."],
            ["benevolent", "Well-meaning, generous, and kindly", "A benevolent donor supports charities."],
            ["ephemeral", "Lasting for a very short time", "Opposite of permanent or eternal."],
            ["scrutinise", "Examine or inspect closely and thoroughly", "Auditors scrutinise financial figures."]
          ],
          (r) => `What is the accurate meaning or usage of "${r[0]}"?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      sejarah: {
        warisan_negara: buildFromTuples(
          [
            ["Bendahara (Melaka)", "Penasihat utama sultan, ketua hakim dan pemangku sultan jika sultan gering/uzur", "Jawatan pembesar tertinggi dalam Pembesar Empat Lipatan."],
            ["Temenggung (Melaka)", "Ketua polis kota, menjaga keamanan darat dan menyelia sukatan pasar", "Bertanggungjawab mengawal keselamatan darat."],
            ["Laksamana (Melaka)", "Panglima angkatan tentera laut dan pengawal peribadi sultan", "Hang Tuah ialah contoh Laksamana Melaka yang masyhur."],
            ["Syahbandar (Melaka)", "Menguruskan pentadbiran pelabuhan, kutipan cukai kapal dan kebajikan pedagang", "Dilantik mengikut kumpulan pedagang di pelabuhan Melaka."],
            ["Hukum Kanun Melaka", "Undang-undang darat 44 fasal meliputi jenayah, kekeluargaan dan tugas pembesar", "Menjadi rujukan undang-undang negeri Melayu seperti Pahang dan Johor."],
            ["Kerajaan Champa (Ciri Negara Bangsa)", "Kerajaan awal di kawasan Vietnam kini yang mempunyai pentadbiran dan undang-undang sendiri", "Mewarisi tradisi negara bangsa Alam Melayu awal."],
            ["Batu Bersurat Telaga Batu", "Membuktikan sistem pentadbiran dan kesetiaan pembesar kepada Raja Srivijaya", "Mengandungi sumpah taat setia rakyat dan pembesar kepada raja."],
            ["Rakyat Melaka (Golongan)", "Terdiri daripada orang Melayu dan Orang Laut yang setia kepada Sultan", "Mendapat perlindungan raja sebagai balasan ketaatan (waadat)."],
            ["Undang-Undang Pahang & Kedah", "Dipengaruhi oleh Hukum Kanun Melaka", "Menunjukkan kesinambungan undang-undang Kesultanan Melaka."],
            ["Bahasa Melayu di Melaka", "Bahasa pentadbiran, persuratan dan lingua franca di pelabuhan antarabangsa", "Digunakan pedagang dari Timur dan Barat."],
            ["Cap Mohor Diraja", "Tanda pengesahan rasmi titah sultan dan surat diplomatik kerajaan", "Melambangkan kesahan kuasa sultan."],
            ["Jajahan Takluk Melaka", "Wilayah yang diperoleh melalui penaklukan ketenteraan seperti Pahang dan Kampar", "Pembesar Melaka dilantik atau sultan tempatan tunduk kepada Melaka."],
            ["Perkahwinan Diraja (Wilayah Naungan)", "Contohnya perkahwinan Sultan Melaka dengan puteri Majapahit atau Pasai", "Mengukuhkan pengaruh geopolitik secara aman."],
            ["Pembesar Berlapan / Enam Belas", "Pembesar peringkat rendah yang membantu Empat Lipatan menjaga daerah", "Menghubungkan pentadbiran pusat istana dengan mukim dan kampung."],
            ["Kedaulatan Raja", "Kedudukan raja sebagai ketua negeri yang berdaulat dan dihormati rakyat", "Diiktiraf oleh rakyat jelata dan kerajaan asing."]
          ],
          (r) => `Apakah peranan atau maksud '${r[0]}' dalam Warisan Negara Bangsa?`,
          (r) => r[1],
          (r) => r[2]
        ),
        komunis_merdeka: buildFromTuples(
          [
            ["Parti Komunis Malaya (PKM)", "Menyerang ladang dan melancarkan pemberontakan bersenjata mencetuskan Darurat 1948", "Berhasrat menggulingkan kerajaan melalui keganasan menubuhkan republik komunis."],
            ["Min Yuen (Mass Organisation)", "Sayap penyokong komunis membekalkan makanan, ubat dan maklumat kepada PKM", "Disekat melalui penempatan semula Kampung Baru oleh Rancangan Briggs."],
            ["Rundingan Baling (1955)", "Pertemuan Tunku Abdul Rahman dan Chin Peng gagal kerana PKM enggan meletak senjata/bubar parti", "Kerajaan menolak syarat mengiktiraf PKM sebagai parti sah."],
            ["Rombongan Kemerdekaan 1956", "Terdiri daripada 4 wakil Raja Melayu dan 4 wakil Parti Perikatan ke London", "Diketuai Tunku Abdul Rahman menghasilkan Perjanjian London 1956."],
            ["Pakatan Murni (1955)", "Kerjasama UMNO–MCA–MIC membentuk Parti Perikatan bertanding Pilihan Raya MPP 1955", "Membuktikan kesepakatan berbilang kaum kepada British."],
            ["Lord Reid", "Pengerusi Suruhanjaya Reid (ahli dari Britain, India, Pakistan, Australia)", "Merangka Perlembagaan Persekutuan Tanah Melayu Merdeka 1957."],
            ["Kontrak Sosial (Perlembagaan 1957)", "Kesepakatan hak kerakyatan terbuka dengan kedudukan istimewa Melayu, Raja Berperlembagaan, Islam & Bahasa Melayu", "Menjadi asas kestabilan negara merdeka."],
            ["Raja Berperlembagaan", "Kuasa Yang di-Pertuan Agong dan Raja-Raja Melayu tertakluk kepada Perlembagaan Persekutuan", "Mengimbangi sistem demokrasi berparlimen."],
            ["Sir Henry Gurney", "Pesuruhjaya Tinggi British yang terkorban dalam serangan hendap komunis di Bukit Fraser (1951)", "Memulakan Rancangan Briggs sebelum digantikan Sir Gerald Templer."],
            ["Sir Gerald Templer", "Menggunakan strategi Perang Saraf dan mengisytiharkan 'Kawasan Putih' bebas ancaman komunis", "Melaka ialah negeri pertama diisytiharkan Kawasan Putih."],
            ["Kad Pengenalan (Sistem Pendaftaran 1948)", "Diperkenalkan semasa Darurat bagi membezakan penduduk awam daripada pengganas komunis", "Menyekat pergerakan dan sokongan kepada PKM."],
            ["30 Ogos 1957 (Tengah Malam)", "Bendera Union Jack diturunkan dan bendera Persekutuan Tanah Melayu dinaikkan di Padang Kelab Selangor", "Laungan 'Merdeka!' berkumandang tepat jam 12.00 tengah malam."],
            ["Tunku Abdul Rahman Putra Al-Haj", "Bapa Kemerdekaan dan Perdana Menteri Persekutuan Tanah Melayu yang pertama", "Melaungkan 'Merdeka!' sebanyak tujuh kali di Stadium Merdeka pada 31 Ogos 1957."],
            ["Perkara 152 Perlembagaan 1957 (Bahasa Kebangsaan)", "Menetapkan Bahasa Melayu sebagai bahasa kebangsaan untuk menyatukan rakyat berbilang kaum", "Diperuntukkan dalam Perlembagaan Persekutuan Tanah Melayu 1957."],
            ["Special Constables (SC)", "Pasukan polis khas mengawal ladang dan lombong bijih timah daripada serangan komunis", "Ribuan anak tempatan berkhidmat mempertahankan keselamatan awam."]
          ],
          (r) => `Apakah fakta penting tentang '${r[0]}' ke arah Kemerdekaan 1957?`,
          (r) => r[1],
          (r) => r[2]
        )
      },
      biologi: {
        biologi_sel: buildFromTuples(
          [
            { q: "Organel yang mempunyai ribosom melekat dan mengangkut protein baharu ialah...", ans: "Jalinan endoplasma kasar (RER)", exp: "Ribosom pada permukaan RER mensintesis protein untuk eksport.", qEn: "Which organelle has attached ribosomes to transport newly synthesised proteins?", ansEn: "Rough endoplasmic reticulum (RER)", expEn: "Ribosomes on RER synthesise proteins for transport." },
            { q: "Organel tanpa ribosom yang mensintesis lipid serta menyahtoksin dadah dan racun ialah...", ans: "Jalinan endoplasma licin (SER)", exp: "SER menghasilkan lipid dan fosfolipid.", qEn: "Which ribosome-free organelle synthesises lipids and detoxifies drugs?", ansEn: "Smooth endoplasmic reticulum (SER)", expEn: "SER synthesises lipids and detoxifies harmful substances." },
            { q: "Organel yang mengandungi klorofil untuk memerangkap cahaya matahari semasa fotosintesis ialah...", ans: "Kloroplas", exp: "Hanya wujud pada sel tumbuhan hijau dan alga.", qEn: "Which organelle contains chlorophyll to capture light for photosynthesis?", ansEn: "Chloroplast", expEn: "Chloroplasts carry out photosynthesis in plant cells." },
            { q: "Organel berpasangan dalam sel haiwan yang membentuk gentian gelendong semasa pembahagian sel ialah...", ans: "Sentriol", exp: "Sentriol membantu menggerakkan kromosom ke kutub bertentangan.", qEn: "Which paired organelle in animal cells forms spindle fibres during cell division?", ansEn: "Centrioles", expEn: "Centrioles organise spindle fibres in animal cells." },
            { q: "Organel berisi sap sel dalam sel tumbuhan yang mengekalkan kesegahan sel ialah...", ans: "Vakuol (dikelilingi tonoplas)", exp: "Vakuol menyimpan air, gula, garam mineral dan memberi tekanan segah.", qEn: "Which sap-filled organelle maintains turgidity in plant cells?", ansEn: "Central vacuole (with tonoplast)", expEn: "The central vacuole regulates water and turgor pressure." },
            { q: "Organisma unisel berbulu halus (silia) dengan dua nukleus (makronukleus & mikronukleus) ialah...", ans: "Paramecium sp.", exp: "Paramecium menggunakan vakuol mengecut untuk pengosmokawalaturan.", qEn: "Which ciliated unicellular organism has both a macronucleus and micronucleus?", ansEn: "Paramecium sp.", expEn: "Paramecium moves using cilia and regulates water via contractile vacuoles." },
            { q: "Organel khusus dalam Amoeba dan Paramecium yang menyingkirkan air berlebihan secara berkala ialah...", ans: "Vakuol mengecut (Contractile vacuole)", exp: "Menghalang organisma unisel air tawar daripada meletup akibat osmosis.", qEn: "Which organelle expels excess water in freshwater Amoeba and Paramecium?", ansEn: "Contractile vacuole", expEn: "Prevents bursting from continuous osmotic water entry." },
            { q: "Tisu tumbuhan dengan sel mati berdinding lignin sangat tebal untuk sokongan mekanikal ialah...", ans: "Sklerenkima (dan salur xilem)", exp: "Dinding berlignin memberi kekuatan struktur tumbuhan berkayu.", qEn: "Which plant tissue has thick lignified dead cell walls for mechanical support?", ansEn: "Sclerenchyma (and xylem)", expEn: "Lignin reinforces plant stems and vascular bundles." },
            { q: "Tisu haiwan yang melapisi permukaan organ dalaman dan kulit serta melindungi daripada kecederaan ialah...", ans: "Tisu epitelium", exp: "Tisu epitelium melindungi permukaan luar dan rongga badan.", qEn: "Which animal tissue lines skin and internal organ surfaces for protection?", ansEn: "Epithelial tissue", expEn: "Epithelial tissue forms protective linings and glands." },
            { q: "Sel tumbuhan yang mempunyai paling banyak kloroplas di dalam daun untuk fotosintesis ialah...", ans: "Sel mesofil palisad", exp: "Tersusun tegak dan padat di bawah epidermis atas daun menerima cahaya maksimum.", qEn: "Which leaf cells contain the highest density of chloroplasts for photosynthesis?", ansEn: "Palisade mesophyll cells", expEn: "Packed vertically below the upper epidermis to maximise light capture." },
            { q: "Sel khusus pada akar tumbuhan dengan unjuran halus untuk menambahkan luas permukaan serapan air ialah...", ans: "Sel rambut akar", exp: "Sel rambut akar tidak mempunyai kloroplas tetapi mempunyai vakuol besar.", qEn: "Which specialised root cells have hair-like extensions to increase water absorption area?", ansEn: "Root hair cells", expEn: "Root hair extensions maximise surface area for water and ion uptake." },
            { q: "Sepasang sel berbentuk kacang yang mengawal pembukaan dan penutupan stoma pada daun ialah...", ans: "Sel pengawal (Guard cells)", exp: "Perubahan kesegahan sel pengawal membuka stoma untuk pertukaran gas.", qEn: "Which kidney-shaped cells control the opening and closing of stomata?", ansEn: "Guard cells", expEn: "Guard cell turgidity regulates stomatal pore size." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        )
      },
      kimia: {
        ikatan_kimia: buildFromTuples(
          [
            { q: "Apakah susunan elektron stabil yang mempunyai 2 elektron di petala terluar (seperti Helium)?", ans: "Susunan elektron duplet", exp: "Petala pertama penuh dengan 2 elektron mewujudkan kestabilan duplet.", qEn: "What stable outer shell has 2 electrons (like Helium)?", ansEn: "Duplet electron arrangement", expEn: "Helium is stable with 2 electrons in its single shell." },
            { q: "Apakah susunan elektron stabil dengan 8 elektron valens (seperti Neon dan Argon)?", ans: "Susunan elektron oktet", exp: "Atom logam dan bukan logam bertindak balas untuk mencapai oktet yang stabil.", qEn: "What stable arrangement has 8 valence electrons (like Ne and Ar)?", ansEn: "Octet electron arrangement", expEn: "Most atoms react to obtain 8 outer valence electrons." },
            { q: "Apabila atom Magnesium (2.8.2) membentuk ion Mg²⁺, apakah yang berlaku?", ans: "Membebaskan 2 elektron valens mencapai susunan oktet 2.8", exp: "Kehilangan 2 elektron bercas negatif menghasilkan kation bercas +2.", qEn: "When a Magnesium atom (2.8.2) forms an Mg²⁺ ion, it...", ansEn: "Donates 2 valence electrons to achieve 2.8", expEn: "Losing 2 electrons creates a +2 cation." },
            { q: "Apabila atom Oksigen (2.6) membentuk ion oksida O²⁻, apakah yang berlaku?", ans: "Menerima 2 elektron untuk mencapai susunan oktet 2.8", exp: "Penerimaan 2 elektron membentuk anion bercas -2.", qEn: "When an Oxygen atom (2.6) forms an O²⁻ ion, it...", ansEn: "Accepts 2 electrons to achieve 2.8", expEn: "Gaining 2 electrons gives a -2 anion." },
            { q: "Sebatian ionik seperti NaCl membentuk struktur pepejal teratur yang dipanggil...", ans: "Kekisi hablur gergasi (Giant ionic lattice)", exp: "Daya tarikan elektrostatik kuat antara kation dan anion mengikat kekisi.", qEn: "Solid NaCl forms a giant 3D structure called...", ansEn: "Giant ionic crystal lattice", expEn: "Strong electrostatic forces hold alternating + and - ions." },
            { q: "Mengapakah ikatan ganda tiga wujud dalam molekul gas Nitrogen (N₂)?", ans: "Setiap atom N (2.5) berkongsi 3 elektron (3 pasangan elektron) untuk mencapai oktet", exp: "Perkongsian 3 pasangan menjadikan ikatan N≡N sangat kuat.", qEn: "Why does N₂ have a triple covalent bond?", ansEn: "Each N atom (2.5) shares 3 pairs of electrons to reach an octet", expEn: "Three shared electron pairs complete both octets." },
            { q: "Mengapakah pelarut organik (seperti eter dan heksana) boleh melarutkan sebatian kovalen ringkas?", ans: "Sebatian kovalen neutral mudah larut dalam pelarut organik berbanding air berkutub", exp: "Sebatian ion larut dalam air, manakala banyak sebatian kovalen larut dalam pelarut organik.", qEn: "Why do simple covalent molecules dissolve well in organic solvents?", ansEn: "Neutral covalent molecules dissolve readily in non-polar organic solvents", expEn: "Like dissolves like: non-polar covalent molecules mix with organic solvents." },
            { q: "Apakah nama daya tarikan antara molekul berkutub yang mengandungi H terikat kepada F, O atau N?", ans: "Ikatan hidrogen", exp: "Ikatan hidrogen menerangkan takat didih tinggi H₂O, NH₃ dan HF.", qEn: "What strong dipole attraction occurs when H is bonded to F, O, or N?", ansEn: "Hydrogen bond", expEn: "Hydrogen bonding elevates boiling points of H₂O, NH₃, and HF." },
            { q: "Mengapakah intan (struktur kovalen gergasi karbon) sangat keras dan bertakat lebur amat tinggi?", ans: "Setiap atom karbon terikat oleh empat ikatan kovalen kuat dalam rangkaian 3D berterusan", exp: "Struktur kovalen gergasi memerlukan tenaga amat besar untuk memutuskan ikatan kovalen.", qEn: "Why is diamond (giant covalent structure) extremely hard with a very high melting point?", ansEn: "Every carbon atom forms 4 strong covalent bonds in a continuous 3D network", expEn: "Breaking a giant covalent lattice requires enormous energy." },
            { q: "Mengapakah grafit boleh mengkonduksikan elektrik walaupun merupakan struktur kovalen?", ans: "Mempunyai elektron dinyahsetempatkan bebas bergerak di antara lapisan heksagon karbon", exp: "Setiap karbon dalam grafit hanya terikat kepada 3 karbon lain, meninggalkan 1 elektron bebas.", qEn: "Why does graphite conduct electricity despite being covalent?", ansEn: "Delocalised electrons move freely between hexagonal carbon layers", expEn: "One valence electron per carbon is free to conduct along layers." }
          ].map((x) => ({ q: x.q, qEn: x.qEn, ans: x.ans, ansEn: x.ansEn, exp: x.exp, expEn: x.expEn })),
          (r) => r.q,
          (r) => r.ans,
          (r) => r.exp
        )
      },
      pi: {
        ibadah: buildFromTuples(
          [
            ["Miqat Makani jemaah Malaysia (penerbangan ke Jeddah)", "Yalamlam atau Qarnul Manazil (mengikut laluan pesawat)", "Jemaah berniat ihram Haji/Umrah sebelum melintasi sempadan Miqat."],
            ["Tawaf Ifadah (Tawaf Rukun)", "Mengelilingi Kaabah sebanyak 7 pusingan dengan syarat sahnya (wajib selepas wukuf)", "Rukun Haji yang membolehkan jemaah bebas daripada semua larangan ihram selepas tahallul."],
            ["Ibadat Sa'i", "Berjalan ulang-alik dari Bukit Safa ke Bukit Marwah sebanyak 7 kali", "Mengenang pengorbanan Siti Hajar mencari air untuk Nabi Ismail a.s."],
            ["Tahallul Awal", "Tercapai apabila jemaah selesai 2 daripada 3 perkara: melontar Jamrah Kubra, bercukur, dan Tawaf Ifadah", "Membebaskan jemaah daripada larangan ihram kecuali berkaitan nikah/jima'."],
            ["Mabit di Muzdalifah", "Bermalam di Muzdalifah selepas maghrib 9 Zulhijjah dan mengutip batu kecil", "Termasuk dalam wajib Haji sebelum bergerak ke Mina."],
            ["Melontar di Mina (Jamrah)", "Melontar Jamrah Sughra, Wusta dan Kubra pada Hari Tasyrik (11–13 Zulhijjah)", "Setiap jamrah dilontar sebanyak 7 biji anak batu."],
            ["Waktu sembelihan Ibadat Korban", "Selepas solat sunat Aidiladha 10 Zulhijjah hingga terbenam matahari 13 Zulhijjah", "Dilaksanakan sepanjang 4 hari (10 hingga 13 Zulhijjah)."],
            ["Umur minimum haiwan Korban (Lembu / Kerbau)", "Cukup umur 2 tahun dan sihat tanpa cacat yang mengurangkan daging", "Satu bahagian lembu boleh dikongsi sehingga 7 orang."],
            ["Pembahagian daging Akikah yang afdal", "Disunatkan dimasak manis dan dijamukan kepada saudara-mara serta fakir miskin", "Berbeza daripada korban yang afdal disedekahkan secara mentah."],
            ["Akad Ijarah dalam Muamalat Islam", "Kontrak sewa-menyewa manfaat sesuatu barang atau perkhidmatan dengan bayaran dipersetujui", "Contohnya sewa rumah atau sewa kenderaan."],
            ["Akad Takaful (Insurans Islam)", "Sistem perlindungan bersama berteraskan tabarru' (derma ikhlas) bebas riba dan gharar", "Menggantikan insurans konvensional dalam muamalat Islam."],
            ["Larangan Riba al-Nasiah", "Pertambahan bayaran disebabkan penangguhan tempoh bayaran hutang", "Riba adalah haram secara mutlak dalam Al-Quran."]
          ],
          (r) => `Apakah hukum atau maksud '${r[0]}' dalam Ibadah & Muamalat Tingkatan 4?`,
          (r) => r[1],
          (r) => r[2]
        )
      }
    }
  };
})(window);
