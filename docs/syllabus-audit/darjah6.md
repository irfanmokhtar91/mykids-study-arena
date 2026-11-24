# Audit: App chapters vs Official DSKP KSSR Semakan 2017, Tahun 6

Scope: Darjah 6 section (`## d6`) of `app_chapters.md`. Subjects: BM, BI, Matematik, Sains, Sejarah, Pendidikan Islam, RBT. KP2027 ignored.

## Source status (read first)

- **Official BPK portal could not be used.** `bpk.moe.gov.my` KSSR Semakan 2017 listing returned HTTP 404, and the homepage has no Tahun 6 DSKP links. All PDFs below come from the **asiemodel.net** mirror (third-party host). Their covers carry the KPM / Bahagian Pembangunan Kurikulum credit line, but I could not check them against the official copies.
- Text was extracted with pypdf from the downloaded PDFs. Files are in `D:\Temp\claude\677529bc86c1fc28\469731ae-29ce-4da1-9147-17396d4bfae9\scratchpad\dskp_d6\` (`*.pdf` and `*.txt`).
- Verdict key: **OK** = app chapter matches an official topic. **WRONG NAME-ORDER** = official topic exists but app name/grouping is wrong. **NOT IN SYLLABUS** = app content not found in the official Tahun 6 text (or only in a non-Y6 table). **UNVERIFIED** = official text exists but could not be read from the PDF, so no verdict either way.
- Numbering: app chapter numbers are not used as a verdict. Sejarah numbers its Tajuk 1–5 while the official numbers are 10–12, so I flag that as a note, not a problem row.
- **Pendidikan Islam PDF:** standards tables (Standard Kandungan / Pembelajaran rows such as 4.1.1, 5.1.1) are in a legacy Arabic-font encoding. pypdf returns garbled text for them, so those rows are UNVERIFIED.

---

## 1. Bahasa Melayu

**(a) Official structure** (Malay, `KSSR BAHASA MELAYU SK TAHUN 6`, cover Sept 2021, Terbitan 2021)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/1.-DSKP-BM-TAHUN-6-SK_isbn.pdf (also linked from https://asiemodel.net/rujukan-dskp/)
- Kemahiran (Standard Kandungan): 1 Mendengar dan Bertutur; 2 Membaca; 3 Menulis; 4 Aspek Seni Bahasa; 5 Aspek Tatabahasa.
- Sistem Bahasa: 1 Tatabahasa (Morfologi, Sintaksis); 2 Sistem Ejaan; 3 Tanda Baca; 4 Sebutan dan Intonasi (incl. pola ayat penyata, tanya, perintah, seruan, songsang, aktif); 5 Kosa Kata; 6 Peribahasa.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| 1 | Tatabahasa & Golongan Kata | OK | Tatabahasa (Morfologi/Sintaksis); "golongan kata" found 4x |
| 2 | Imbuhan & Pengimbuhan | OK | Under Morfologi; "imbuhan" found 7x |
| 3 | Jenis & Struktur Ayat | OK | Sintaksis, pola ayat; "ayat majmuk", "ayat aktif" found |
| 4 | Peribahasa, Simpulan Bahasa & Bidalan | OK | Peribahasa (Sistem Bahasa 6); simpulan bahasa and bidalan each mentioned once |
| 5 | Kosa Kata, Sinonim & Antonim | NOT IN SYLLABUS (partial) | Kosa Kata OK. "sinonim" and "antonim" each 0 hits in official text |
| 6 | Pemahaman & Penulisan | OK | Strands Membaca and Menulis (naming looser than official) |

**(c) Official chapters/strands MISSING from app**
- Mendengar dan Bertutur (Kemahiran 1), no app chapter
- Sistem Ejaan (ejaan kata dasar/terbitan, vokal, kata pinjaman)
- Tanda Baca (noktah, koma, tanda soal, tanda seru, petik, kurungan)
- Sebutan dan Intonasi
- Aspek Seni Bahasa (karya kreatif pelbagai genre)

**Count:** OK 5 / problem 1 / missing 5 (strands)

---

## 2. Bahasa Inggeris

**(a) Official structure** (English, `KSSR Bahasa Inggeris SK Tahun 6`, Jan 2022, Terbitan 2022)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/2.-DSKP-KSSR-Semakan-2017-Bahasa-Inggeris-Tahun-6-SK_ISBN.pdf
- Three themes: World of Self, Family and Friends; World of Stories; World of Knowledge.
- Language skills: Listening, Speaking, Reading, Writing, Language Arts.
- **Year 6 Grammar list** (explicit, section 10): past continuous with past simple; used to; present perfect + ever; present perfect + how long / for / since; comparisons with as, too, not enough; passive voice; future forms will and going to; present simple for future; first conditional; modal verbs for speculation (may, might, could); modal verbs for obligation and advice (should, must, have to); reported speech; indefinite pronouns and adverbs; question tags.
- Recycled from Year 5: question words; adverbs of sequencing; conjunctions; time expressions.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| 1 | Tenses & Verb Forms | OK | Past continuous, present perfect, future forms in Y6 list |
| 2 | Parts of Speech & Prepositions | NOT IN SYLLABUS (partial) | Prepositions only in the **Year 4** grammar list, not Year 6. Indefinite pronouns, adverbs and conjunctions are in the Y6 / recycled list, so parts of speech is partly covered |
| 3 | Passive Voice & Modals | OK | Passive voice and modals listed. First conditional not in the name |
| 4 | Vocabulary & Idioms | NOT IN SYLLABUS (idioms) | "idiom" and "phrasal" 0 hits in Y6 text. Vocabulary via themes is OK |
| 5 | Punctuation & Error Correction | OK | Punctuation is in Writing standards. Error correction not an explicit item |
| 6 | Reading & Functional Language | OK | Reading standards and Year 6 language functions |

**(c) Official items MISSING from app**
- No app chapter title covers: reported speech; question tags; comparisons (as...as, too, not enough); first conditional (not in the Passive & Modals name).
- Tense items that the Tenses chapter may or may not cover (name does not say): used to; present perfect with ever / how long / for / since; past continuous with past simple; will / going to.
- Skill strands: Listening and Speaking (no app chapter).

**Count:** OK 4 / problem 2 / missing 4 clear + 4 possibly covered

---

## 3. Matematik

**(a) Official structure** (Malay, `DSKP KSSR Semakan 2017 Matematik Tahun 6`, cover Sept 2021, Terbitan 2021; 8 Tajuk)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/3.-DSKP-MATEMATIK-TAHUN-6_isbn.pdf
- Cross-check (English edition, cover marked **DRAF**, 12 content standards): https://asiemodel.net/wp-content/uploads/2022/08/3-DSKP-KSSR-Mathematics-Year-6.pdf
- Tajuk: 1.0 Nombor Bulat dan Operasi Asas; 2.0 Pecahan, Perpuluhan dan Peratus; 3.0 Wang; 4.0 Masa dan Waktu; 5.0 Ukuran dan Sukatan; 6.0 Ruang (6.1 Sudut, 6.2 Bulatan, 6.3 Penyelesaian masalah); 7.0 Koordinat, Nisbah dan Kadaran; 8.0 Pengurusan Data dan Kebolehjadian.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| 1 | Nombor & Operasi (Juta & Perpuluhan) | OK | Official 1.0 "Nombor Bulat dan Operasi Asas" includes "pecahan juta" and "perpuluhan juta" (1.1), so the juta/perpuluhan name is supported |
| 2 | Pecahan, Perpuluhan & Peratus | OK | 2.0 |
| 3 | Wang (Untung, Rugi, Diskaun, Faedah) | OK | 3.0; untung, rugi, diskaun and faedah all found |
| 4 | Masa & Waktu (Zon Masa) | OK | 4.0; "zon masa" found |
| 5 | Ukuran & Sukatan | OK | 5.0 |
| 6 | Ruang (Sudut, Bulatan, Perimeter & Luas) | NOT IN SYLLABUS (partial) | Sudut (6.1) and Bulatan (6.2) OK. "Perimeter" 0 hits and no area/luas sub-topic under Ruang. Medium confidence |
| 7 | Koordinat, Nisbah & Kadaran | OK | 7.0 |
| 8 | Pengurusan Data & Kebolehjadian | OK | 8.0 |

**(c) Official tajuk MISSING from app:** none (all 8 tajuk covered).

**Count:** OK 7 / problem 1 / missing 0

---

## 4. Sains

**(a) Official structure** (Malay, `DSKP KSSR Semakan 2017 Sains Tahun 6`, 13 Tema in body)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/4.-DSKP-KSSR-Semakan-2017-Sains-Tahun-6_ISBN_.pdf
- Cross-check (English, 2021 Terbitan): https://asiemodel.net/wp-content/uploads/2022/08/DLP_DSKP-KSSR-Revised-2017-Science-Year-6.pdf
- Tema: 1.0 Kemahiran Saintifik; 2.0 Manusia; 3.0 Mikroorganisma; 4.0 Interaksi antara Hidupan; 5.0 Pemeliharaan dan Pemuliharaan; 6.0 Daya; 7.0 Kelajuan; 8.0 Teknologi Pengawetan Makanan; 9.0 Bahan Buangan; 10.0 Gerhana; 11.0 Galaksi; 12.0 Kestabilan dan Kekuatan (12.1); 13.0 Teknologi (13.1 Kebaikan dan Keburukan).
- Note: the "THEME SCOPE" table (Malay line ~2525) covers Level II content (incl. "Tuas, mesin ringkas dan mesin kompleks"). That table is level-wide, not Y6-specific. I used the Y6 body sections for verdicts.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| U1 | Kemahiran Saintifik & Peraturan Bilik Sains | OK | 1.0 (lab rules: "peraturan"/"makmal" found) |
| U2 | Manusia (Sistem Saraf & Pembiakan) | OK | 2.0 Manusia (sub-topic names not checked one by one) |
| U3 | Mikroorganisma | OK | 3.0 |
| U4 | Interaksi Antara Hidupan | OK | 4.0 |
| U5 | Pemeliharaan & Pemuliharaan | OK | 5.0 |
| U6 | Daya & Kesan Daya | OK | 6.0 |
| U7 | Kelajuan | OK | 7.0 |
| U8 | Pengawetan Makanan & Bahan Buangan | OK | 8.0 and 9.0 |
| U9 | Gerhana, Galaksi & Teknologi Angkasa | NOT IN SYLLABUS (partial) | Gerhana 10.0 and Galaksi 11.0 OK. "Teknologi Angkasa" 0 hits |
| U10 | Mesin Ringkas & Mesin Kompleks | NOT IN SYLLABUS | Machines appear only in the Level II scope table. The Y6 13.0 body has only 13.1 Kebaikan dan Keburukan. Medium confidence |

**(c) Official tema MISSING from app**
- 12.0 Kestabilan dan Kekuatan (12.1)
- 13.1 Kebaikan dan Keburukan Teknologi

**Count:** OK 8 / problem 2 / missing 2

---

## 5. Sejarah

**(a) Official structure** (Malay, `DSKP KSSR SEJARAH TAHUN 6`, cover Sept 2021, Terbitan 2021; Jadual 8 Organisasi Kandungan)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/9.-DSKP-KSSR-SEMAKAN-2017-SEJARAH-TAHUN-6_ISBN.pdf
- Tema: Kemakmuran Negara Kita. Tajuk 10: Negara Malaysia (Pembentukan Malaysia; Negeri-negeri di Malaysia; Rukun Negara). Tajuk 11: Kita Rakyat Malaysia (Kaum dan Etnik; Agama dan Ajaran; Perayaan Masyarakat). Tajuk 12: Pencapaian dan Kebanggaan Negara (Pemimpin Negara di Malaysia; Kemajuan Ekonomi; Sukan Kebanggaan; Malaysia dan Dunia).

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| T1 | Pembentukan Malaysia | OK | Tajuk 10 sub-topic. App numbers it 1; official is Tajuk 10 |
| T2 | Negeri-negeri di Malaysia | OK | Tajuk 10 sub-topic |
| T3 | Rukun Negara & Perpaduan | OK | Rukun Negara under Tajuk 10; "perpaduan" found |
| T4 | Kaum, Agama & Perayaan | OK | Tajuk 11 (all three sub-topics) |
| T5 | Ekonomi, Sukan & Pencapaian Negara | OK (partial) | Tajuk 12. Covers 2 of 4 sub-topics |

Systematic note: app numbers Tajuk 1–5, while the official numbering is Tajuk 10–12. Content is correct.

**(c) Official sub-topics MISSING from app**
- Pemimpin Negara di Malaysia (Tajuk 12)
- Malaysia dan Dunia (Tajuk 12)

**Count:** OK 5 / problem 0 / missing 2

---

## 6. Pendidikan Islam

**(a) Official structure** (Malay, `KSSR PENDIDIKAN ISLAM TAHUN 6`, cover April 2019, Terbitan 2019; 7 bidang)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/Pendidikan-Islam-semakan-2017-T6.pdf
- Bidang: 1 Al-Quran (bacaan, hafazan, kefahaman; tajwid); 2 Hadis; 3 Akidah (3.1 Rukun Iman, 3.2 Rukun Islam, 3.3 Asmaul Husna, 3.4 Sifat 20, 3.5 Penyelewengan Aqidah); 4 Ibadah (4.1 Fardhu Ain, 4.2 Fardhu Kifayah); 5 Sirah (5.1 Sirah Rasulullah); 6 Adab (6.1–6.4); 7 Jawi (7.1–7.4).
- Limitation: the extracted text has bidang-level detail only for Ibadah and Sirah. Sub-topic detail is not in the extracted text, so verdicts for those rows are low confidence.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| 1 | Bidang Al-Quran & Tajwid | OK | Bidang 1; tajwid found in body |
| 2 | Bidang Hadis | OK | Bidang 2 |
| 3 | Bidang Akidah (Nama Allah & Hari Akhirat) | UNVERIFIED (partial) | Bidang focus list (readable): Rukun Iman, Rukun Islam, Asmaul Husna, Sifat 20, Penyelewengan Aqidah. "Hari Akhirat" is not a listed focus item, but Rukun Iman may cover it inside the garbled tables. Asmaul Husna is OK |
| 4 | Bidang Ibadah (Solat Jumaat, Jenazah & Puasa) | UNVERIFIED | Bidang focus list: Fardhu Ain / Fardhu Kifayah. Sub-topic rows 4.1.x / 4.2.x are garbled in the PDF text, so Jumaat, Jenazah and Puasa cannot be confirmed or excluded |
| 5 | Bidang Sirah (Pembukaan Mekah & Hijrah) | UNVERIFIED | Bidang focus list: Sirah Rasulullah. Rows 5.1.x are garbled in the PDF text, so Pembukaan Mekah and Hijrah cannot be confirmed or excluded |
| 6 | Bidang Adab & Akhlak Islamiyah | OK | Bidang 6 (6.1–6.4) |

**(c) Official bidang MISSING from app**
- Bidang 7 Jawi (huruf jawi tunggal; membaca, membina dan menulis ayat; pelbagai teks; Khat Nasakh dan Rikaah)

**Count:** OK 3 / UNVERIFIED 3 / NOT IN SYLLABUS 0 / missing 1 bidang (Jawi). Rows 3–5 cannot be decided from the PDF text.

---

## 7. Reka Bentuk dan Teknologi (RBT)

**(a) Official structure** (Malay, `DSKP KSSR Semakan 2017 RBT Tahun 6`, cover Sept 2021, Terbitan 2021; 3 modules)
- Source: https://asiemodel.net/wp-content/uploads/2022/08/10.-DSKP-KSSR-SEMAKAN-2017-RBT-Tahun-6_12012021_ISBN_.pdf
- Modules (Jadual 8): 5.0 Aplikasi Reka Bentuk dan Teknologi Kejuruteraan (5.2 **Reka Bentuk** Produk Elektromekanikal); 6.0 Reka Bentuk Pengaturcaraan (6.5 Pengenalan Asas Sistem Robotik); 8.0 Pembangunan Produk (8.1 Penghasilan Produk).
- "hidroponik" and "akuaponik": 0 hits. Only one "pertanian" hit.

**(b) Mapping**

| # | App chapter | Verdict | Evidence / note |
|---|---|---|---|
| U1 | Penghasilan Produk Elektromekanikal | WRONG NAME-ORDER | Official 5.2 is "Reka Bentuk Produk Elektromekanikal" (design). "Penghasilan" (production) is 8.1 |
| U2 | Asas Pengaturcaraan & Robotik | OK | 6.5 Pengenalan Asas Sistem Robotik under 6.0 Reka Bentuk Pengaturcaraan |
| U3 | Teknologi Pertanian (Hidroponik) | NOT IN SYLLABUS | No hidroponik or hydroponic text in Y6 DSKP |

**(c) Official modules MISSING from app**
- 8.1 Penghasilan Produk (Pembangunan Produk; product production)

**Count:** OK 1 / problem 2 / missing 1

---

## Summary table

| Subject | App chapters | OK | Problem | Missing |
|---|---|---|---|---|
| Bahasa Melayu | 6 | 5 | 1 NOT IN SYLLABUS (sinonim/antonim) | 5 strands (Mendengar & Bertutur, Ejaan, Tanda Baca, Sebutan, Seni Bahasa) |
| Bahasa Inggeris | 6 | 4 | 2 NOT IN SYLLABUS (prepositions [partial], idioms) | 4 clear grammar items (reported speech, question tags, comparisons, first conditional) plus 4 tense items the app name does not show |
| Matematik | 8 | 7 | 1 NOT IN SYLLABUS (perimeter/luas, partial) | 0 |
| Sains | 10 | 8 | 1 NOT IN SYLLABUS (Teknologi Angkasa), 1 NOT IN SYLLABUS (mesin) | 2 (Kestabilan & Kekuatan; Kebaikan & Keburukan Teknologi) |
| Sejarah | 5 | 5 | 0 | 2 sub-topics (Pemimpin Negara; Malaysia dan Dunia) |
| Pendidikan Islam | 6 | 3 | 0 | 1 bidang (Jawi). 3 rows UNVERIFIED (Akidah partial, Ibadah, Sirah) |
| RBT | 3 | 1 | 1 WRONG NAME-ORDER, 1 NOT IN SYLLABUS | 1 (8.1 Penghasilan Produk) |

## Confidence and what I could not verify

- **Source authority:** No official bpk.moe.gov.my PDF was reachable. All texts come from the asiemodel.net mirror. Treat the verdicts as checked against that mirror, not against the ministry's own file.
- **Versions:** BM, Matematik (Malay), Sejarah and RBT covers say Sept 2021. Sains (EN) says 2021. BI says Jan 2022. PI says April 2019. The Malay Sains cover was not read directly.
- **Matematik:** The English edition is marked DRAF. I used the Malay edition as primary and the English edition only as a cross-check.
- **Pendidikan Islam:** the standards tables are in a legacy Arabic-font encoding that pypdf cannot decode. Ibadah and Sirah sub-topics (and Akidah sub-rows) are UNVERIFIED. Not tried yet: a different PDF mirror or a decoded copy. Fixing this needs another source, not a guess.
- **Matematik Ruang (perimeter/luas):** verdict is based on term searches (perimeter 0 hits; no area sub-topic under 6.0), not a full read of 6.3. Medium confidence.
- **Matematik Bab 1:** now OK. Official 1.1 includes "pecahan juta" and "perpuluhan juta", so the juta/perpuluhan name is supported.
- **BM sinonim/antonim:** 0 hits for sinonim, antonim, seerti, berlawan, lawan, kata seerti and kata berlawan. High confidence in NOT IN SYLLABUS for those terms (kosa kata itself is OK).
- **Sains Mesin (U10):** based on the Y6 body (13.0 = 13.1 only). The Level II scope table includes machines, so this could be a scope disagreement. Medium confidence.
- **Sains U2:** sub-topic names not checked individually.
- **BI:** based on the English Year 6 grammar list. Verdicts assume the Year 4/5 lists are not Year 6 content.
- **Not checked:** the BPK "Dokumen Penjajaran" alignment documents; KP2027 (excluded per the brief); any KBAT or Pentaksiran tables beyond the topic lists.

No project files were modified.
