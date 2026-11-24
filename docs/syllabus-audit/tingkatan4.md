# Audit: App chapters for Tingkatan 4 (KSSM) vs official DSKP

Scope: `## t4` section of `D:\Temp\claude\677529bc86c1fc28\469731ae-29ce-4da1-9147-17396d4bfae9\scratchpad\app_chapters.md`. KP2027 ignored. Tingkatan 4 in 2027 uses KSSM DSKP.

Downloaded PDFs and extracted text: `D:\Temp\claude\677529bc86c1fc28\469731ae-29ce-4da1-9147-17396d4bfae9\scratchpad\dskp_t4\` (`*.pdf` and `*.txt`).

Verdict key: OK = name and order match the DSKP. OK (scope) = content covered, but merged into one entry. NAME INCOMPLETE = content covered, but the label omits a DSKP topic. WRONG NAME-ORDER = wrong title or numbering. NOT IN SYLLABUS = no matching DSKP topic. PARTIAL = some items match, others not named. UNVERIFIED = no official text obtained.

---

## 0. Source quality

- bpk.moe.gov.my was never returned by search. Every DSKP PDF below is a third-party mirror (asiemodel.net). The text inside carries KPM / Bahagian Pembangunan Kurikulum printing, so the content is the official text, but the download host is not the ministry.
- ipim.jmm.gov.my is a government-hosted DSKP-to-textbook breakdown (not BPK or MOE). Used only for Sejarah.
- asiemodel `DSKP-TAHUN-4-SEJARAH-SEMAKAN-2017.pdf` is the Tahun 4 PRIMARY DSKP. Not Form 4. Discarded.
- No official regular Pendidikan Islam Tingkatan 4 DSKP was found. The asiemodel PI files are Kurikulum Bersepadu Dini (KBD) documents, a different track. Not used for verdicts.
- The BM document is Dokumen Penjajaran Kurikulum 2.0 (Edisi 2), a realignment, not the original DSKP.

## 1. Subject structure (Tingkatan 4 KSSM)

| Item | Finding | Source | Confidence |
|---|---|---|---|
| Three groups | Murid perlu mengambil tiga kumpulan mata pelajaran: Mata Pelajaran Teras, Mata Pelajaran Wajib, Mata Pelajaran Elektif. | https://www.malaysia.gov.my/my/topics/memilih-aliran-akademik (fetched via curl; page content is embedded in its JSON) | High for the three headings |
| Electives and packages | Two elective packages: STEM and Sastera dan Kemanusiaan. A student may take up to 5 electives from 4 groups. Availability depends on the school. | Same page | High |
| Teras/Wajib membership | Membership lists for Teras and Wajib are not in the page text. | Same page | UNVERIFIED |
| Mathematics | Core: "KSSM Mathematics is a core subject that is learned by all pupils". | math.txt, Introduction (asiemodel mirror, KPM 2019) | High |
| Additional Mathematics | Elective: "an elective subject learned at upper secondary level". Core Package (all pupils) plus Elective Package (Solution of Triangles for STEM; Index Numbers for social science). | addmath.txt, Introduction (asiemodel mirror, DLP 29/09/2020) | High |
| Science, Biology, Chemistry, Physics, Additional Science | DSKP intro: three core science subjects (Primary, Lower Secondary, Upper Secondary Science). Elective science subjects offered upper secondary: Additional Science, Biology, Physics, Chemistry. | addsci.txt, bio.txt, chem.txt, Introduction | High for the wording. Whether Upper Secondary Sains is compulsory for Tingkatan 4 was NOT verified. |
| STEM electives (2021 circular) | (i) Sains Tulen dan Matematik Tambahan: Fizik, Kimia, Biologi, Matematik Tambahan. (ii) Sains Gunaan dan Teknologi: Sains Tambahan, Grafik Komunikasi Teknikal, Asas Kelestarian, Pertanian, Sains Rumah Tangga, Reka Cipta, Sains Komputer, Sains Sukan. (iii) Vokasional: long list. | https://ecentral.my/stem/ (secondary; cites Surat Siaran KPM Bil 1 Tahun 2021; circular not fetched) | Medium |
| Sastera Ikhtisas / Sastera dan Kemanusiaan | Examples given: Prinsip Perakaunan, Ekonomi; Perniagaan DSKP describes it as an elective in this group. | https://ecentral.my/pakej-mata-pelajaran-sbp-mrsm/ (search snippet) | Low-medium |

Subjects the app lacks (DSKP or official mention found): Sains (core status to confirm), Sains Tambahan, Sains Komputer, Pertanian, GKT, Perniagaan. Unchecked gaps: Prinsip Perakaunan, Ekonomi, Geografi, PSV, RBT, Pendidikan Seni, PJPK.

## 2. Per-subject verification

### 2.1 Matematik (10 app chapters)

Source: DSKP Matematik Tingkatan 4 dan 5 (Edisi Bahasa Inggeris), MEI 2019, contents p.vii-viii. https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Mathematics-Form-4-and-5_Versi-English.pdf

Official Form 4 topics: Quadratic Functions and Equations in One Variable; Number Bases; Logical Reasoning; Operations on Sets; Network in Graph Theory; Linear Inequalities in Two Variables; Graphs of Motion; Measures of Dispersion for Ungrouped Data; Probability of Combined Events; Consumer Mathematics: Financial Management.

| App chapter | Verdict | Official match |
|---|---|---|
| kuadratik, Bab 1 | OK | Quadratic Functions and Equations in One Variable |
| asas_nombor, Bab 2 | OK | Number Bases |
| penaakulan_logik, Bab 3 | OK | Logical Reasoning |
| operasi_set, Bab 4 | OK | Operations on Sets |
| rangkaian_graf, Bab 5 | OK | Network in Graph Theory |
| ketaksamaan_linear, Bab 6 | OK | Linear Inequalities in Two Variables |
| graf_gerakan, Bab 7 | OK | Graphs of Motion |
| sukatan_serakan, Bab 8 | OK | Measures of Dispersion for Ungrouped Data |
| kebarangkalian, Bab 9 | OK | Probability of Combined Events |
| kewangan, Bab 10 | OK | Consumer Mathematics: Financial Management |

Missing: none. Result: 10 OK. Caveat: English edition; Malay titles not checked.

### 2.2 Matematik Tambahan (10 app chapters)

Source: DSKP Additional Mathematics Form 4 and 5 (DLP 29/09/2020). https://asiemodel.net/wp-content/uploads/2022/08/DSKP-Additional-Mathematics-Form-4-and-5-DLP-dated-29092020.pdf

Official Form 4 topics: Functions; Quadratic Functions; Systems of Equations; Indices, Surds and Logarithms; Progressions; Linear Law; Coordinate Geometry; Vectors; Solution of Triangles; Index Numbers.

| App chapter | Verdict | Official match |
|---|---|---|
| fungsi, Bab 1 | OK | Functions |
| fungsi_kuadratik, Bab 2 | OK | Quadratic Functions |
| sistem_persamaan, Bab 3 | OK | Systems of Equations |
| indeks_surd_log, Bab 4 | OK | Indices, Surds and Logarithms |
| janjang, Bab 5 | OK | Progressions |
| hukum_linear, Bab 6 | OK | Linear Law |
| geometri_koordinat, Bab 7 | OK | Coordinate Geometry |
| vektor, Bab 8 | OK | Vectors |
| penyelesaian_segitiga, Bab 9 | OK | Solution of Triangles (Elective Package, STEM) |
| nombor_indeks, Bab 10 | OK | Index Numbers (Elective Package, social science) |

Missing: none. Result: 10 OK. Bab 9 and Bab 10 are Elective Package topics, so a school not offering that package may skip them. Not an error.

### 2.3 Bahasa Inggeris (3 app chapters)

Source: DSKP KSSM Bahasa Inggeris Tingkatan 4. https://asiemodel.net/wp-content/uploads/2022/08/043_DSKP_KSSM_B_Inggeris_Ting4-1.pdf

Official organisation: four Themes (People and Culture; Health and Environment; Science and Technology; Consumerism and Financial Awareness), four skills, Grammar and Literature in Action (LiA). The DSKP also contains an official "grammar and language functions suitable for Form 4" list (around line 2014 of bi.txt). It is not a chapter structure.

| App chapter | Verdict | Note |
|---|---|---|
| grammar_spm, Advanced Tenses, Clauses & Conditionals | PARTIAL | Official Form 4 grammar list includes present perfect simple/continuous (tenses), zero/first/second conditionals, reported speech, and connectives of contrast, cause and effect (clauses). The words "tenses" and "clauses" are not used. |
| vocab_collocations, Vocabulary, Collocations & Phrasal Verbs | PARTIAL | "Vocabulary" is an official item (17 hits). "Collocations" and "phrasal verbs" are not named anywhere in the DSKP (0 hits each). |
| rational_cloze, Rational Cloze & Error Correction | NOT IN SYLLABUS as a DSKP chapter | "Cloze" does not appear in the DSKP. It is an exam-format item. Relabel as an exam-format item mapped to the Reading skill; do not treat as a chapter. |

MISSING: Literature in Action (17 hits). The four Themes and the four skills (Listening, Speaking, Reading, Writing) are not app chapters.

Result: 0 OK, 2 PARTIAL, 1 NOT IN SYLLABUS as a chapter (exam-format item).

### 2.4 Bahasa Melayu (4 app chapters)

Source: Dokumen Penjajaran Kurikulum 2.0 (Edisi 2), KSSM Bahasa Melayu Tingkatan 4. https://sumberpendidikan.com/wp-content/uploads/2019/01/DPK-2.0-KSSM-Bahasa-Melayu-Tingkatan-4.pdf (realignment, not the original DSKP).

Official structure: 1 Mendengar dan Bertutur; 2 Membaca; 3 Menulis (3.6 Mengedit dan ... includes 3.6.1 Menganalisis kesalahan); 4 Aspek Seni Bahasa (4.1 prosa/puisi; 4.2 peribahasa; 4.3 karya; 4.4 persembahan); 5 Aspek Tatabahasa (5.1 bentuk kata; 5.2 golongan kata; 5.3 ayat, including ayat tunggal/majmuk and ayat penyata/tanya/perintah/seruan).

| App chapter | Verdict | Note |
|---|---|---|
| morfologi_spm, Morfologi & Golongan Kata | OK (topic-level) | 5.1 bentuk kata, 5.2 golongan kata |
| sintaksis_spm, Sintaksis, Ayat Aktif/Pasif & Cakap Ajuk/Pindah | PARTIAL | 5.3 ayat (jenis ayat) matches. Ayat aktif/pasif and cakap ajuk/pindah not seen in the 5.3.1-5.3.4 items read; 5.3.5 onward not checked. |
| peribahasa_spm, Peribahasa & Kesalahan Bahasa | OK (topic-level) | 4.2 peribahasa. Kesalahan Bahasa sits under 3.6.1 Menganalisis kesalahan. |
| komsas_novel, KOMSAS & Pemahaman | OK (topic-level) | 4.1 prosa/puisi. The term KOMSAS is not in this extract. |

MISSING: skill strands 1 (Mendengar dan Bertutur), 2 (Membaca), 3 (Menulis) and 4.3/4.4 are not app chapters.

Result: 3 OK (topic-level), 1 PARTIAL, 0 NOT IN SYLLABUS. Confidence medium (realignment document).

### 2.5 Fizik (6 app chapters)

Source: DSKP KSSM Physics Form 4 and 5 (Edisi Bahasa Inggeris), Table 14 Themes and Learning Areas in Physics, plus Form 4 content headings. https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Physics-Form-4-and-5_Versi-English.pdf (196 pages; print date not checked)

Official Form 4 learning areas: 1.0 Measurement (Elementary Physics); 2.0 Force and Motion (Newtonian Mechanics); 3.0 Gravitation (Newtonian Mechanics); 4.0 Heat (Heat); 5.0 Waves and 6.0 Light and Optics (Waves, Light and Optics).

Form 5 (for reference, not Form 4): 1.0 Force and Motion II; 2.0 Pressure; 3.0 Electric; 4.0 Electromagnetism; 5.0 Electronic; 6.0 Nuclear Physics; 7.0 Quantum Physics.

| App chapter | Verdict | Official match |
|---|---|---|
| pengukuran, Bab 1 | OK | 1.0 Measurement |
| daya_gerakan_1, Bab 2 | OK | 2.0 Force and Motion (Form 4; Form 5 is "Force and Motion II") |
| kegravitian, Bab 3 | OK | 3.0 Gravitation |
| haba, Bab 4 | OK | 4.0 Heat |
| gelombang, Bab 5 | OK | 5.0 Waves |
| cahaya_optik, Bab 6 | OK | 6.0 Light and Optics |

Missing: none. Result: 6 OK. Note: the earlier "possible Form 5" flags were wrong; they came from the combined Sains DSKP and are withdrawn.

### 2.6 Kimia (8 app chapters)

Source: DSKP KSSM Chemistry Form 4 and 5 (Edisi Bahasa Inggeris), Table 14 (Themes and Learning Areas), p.43. https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Chemistry-Form-4-and-5_Versi-English-1.pdf

Official Form 4 learning areas: 1.0 Introduction to Chemistry; 2.0 Matter and Structure of Atom; 3.0 Mole, Chemical Formula and Equation; 4.0 The Periodic Table of Elements; 5.0 Chemical Bonds; 6.0 Acids, Bases and Salts; 7.0 Rate of Reaction; 8.0 Manufactured Substances in Industries.

| App chapter | Verdict | Official match |
|---|---|---|
| pengenalan_kimia, Bab 1 | OK | 1.0 |
| jirim_atom, Bab 2 | OK | 2.0 |
| konsep_mol, Bab 3 | OK | 3.0 |
| jadual_berkala, Bab 4 | OK | 4.0 |
| ikatan_kimia, Bab 5 | OK | 5.0 |
| asid_bes_garam, Bab 6 | OK | 6.0 |
| kadar_tindakbalas, Bab 7 | OK | 7.0 |
| bahan_buatan, Bab 8 | OK | 8.0 |

Missing: none. Result: 8 OK.

### 2.7 Biologi (9 app chapters)

Source: DSKP KSSM Biology Form 4 and 5 (Edisi Bahasa Inggeris), Table 14 and Form 4 content headings. https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Biology-Form-4-and-5_Versi-English.pdf

Form 4 range confirmed from content positions: 14.0 and 15.0 appear in the Form 4 section (lines 4511-4512 of bio.txt), before the "KSSM BIOLOGY FORM 5" header (line 6257). Official Form 4 learning fields: 1.0 Introduction to Biology and Laboratory Rules; 2.0 Biology and Cell Organisation; 3.0 Movement of Substances Across a Plasma Membrane; 4.0 Chemical Composition in a Cell; 5.0 Metabolism and Enzymes; 6.0 Cell Division; 7.0 Cellular Respiration; 8.0 Respiratory System in Humans and Animals; 9.0 Nutrition and Human Digestive System; 10.0 Transport in Humans and Animals; 11.0 Immunity in Humans; 12.0 Coordination and Response in Humans; 13.0 Homeostasis and Human Urinary System; 14.0 Support and Movements in Humans and Animals; 15.0 Sexual Reproduction, Development and Growth in Humans and Animals.

| App chapter | Verdict | Note |
|---|---|---|
| pengenalan_biologi, Bab 1 | OK | 1.0 |
| biologi_sel, Bab 2 | OK | 2.0 |
| membran_plasma, Bab 3 | OK | 3.0 |
| komposisi_kimia, Bab 4 | OK | 4.0 |
| metabolisme_enzim, Bab 5 | OK | 5.0 |
| pembahagian_sel, Bab 6 | OK | 6.0 |
| respirasi_sel, Bab 7 | OK | 7.0 |
| respirasi_haiwan, Bab 8-10 | OK (scope) | 8.0, 9.0, 10.0 merged into one entry |
| keimunan_saraf, Bab 11-15 | NAME INCOMPLETE | Covers 11.0, 12.0, 13.0, 15.0 by name. 14.0 Support and Movements is covered by scope but not named. |

Missing: none (14.0 is in scope but unnamed). Result: 8 OK, 1 OK (scope), 1 NAME INCOMPLETE.

### 2.8 Sejarah (5 app chapters)

Source (government-hosted DSKP-to-textbook breakdown): Perincian DSKP dan Buku Teks Sejarah Tingkatan 4, Tema Pembinaan Negara, Tajuk 9-11 (12 pages). https://ipim.jmm.gov.my/sites/default/files/dockokurikulum/T4_%20DSKP%20VS%20BUKU%20TEKS_ZAR.pdf

Official Form 4 chapters (Bab):
- Tajuk 9 Nasionalisme di Malaysia sebelum Perang Dunia Kedua: Bab 1 Warisan Negara Bangsa (9.1); Bab 2 Kebangkitan Nasionalisme (9.2, 9.3)
- Tajuk 10 Perjuangan Rakyat ke Arah Kemerdekaan Tanah Air: Bab 3 Konflik Dunia dan Pendudukan Jepun di Negara Kita (10.1, 10.2); Bab 4 Era Peralihan Kuasa British di Negara Kita (10.3); Bab 5 Persekutuan Tanah Melayu 1948 (10.4); Bab 6 Ancaman Komunis dan Perisytiharan Darurat (10.4)
- Tajuk 11 Kemerdekaan Persekutuan Tanah Melayu: Bab 7 Usaha ke Arah Kemerdekaan (11.1); Bab 8 Pilihan Raya (11.2); Bab 9 Perlembagaan Persekutuan Tanah Melayu 1957 (11.2); Bab 10 Pemasyhuran Kemerdekaan (11.2)

Tajuk numbering runs 9-11 in this Form 4 file. Tajuk 1-8 are presumed Form 1-3 numbering; the T3 IPIM link returned HTML, not a PDF, so this was not verified.

| App chapter | Verdict | Note |
|---|---|---|
| warisan_negara, Bab 1 | OK | Bab 1 Warisan Negara Bangsa |
| nasionalisme, Bab 2 | OK | Bab 2 Kebangkitan Nasionalisme |
| perang_dunia, Bab 3 | OK | Bab 3 Konflik Dunia dan Pendudukan Jepun |
| malayan_union, Bab 4-5 | WRONG NAME-ORDER | Bab 4 is titled "Era Peralihan Kuasa British". Malayan Union falls within it, but is not the title. Bab 5 = PTM 1948, OK. |
| komunis_merdeka, Bab 6-10 | NAME INCOMPLETE | Scope covers Bab 6-10. The label omits Bab 7 (Usaha ke Arah Kemerdekaan), Bab 9 (Perlembagaan 1957) and Bab 10 (Pemasyhuran Kemerdekaan). |

MISSING: none for Bab 1-10. Result: 3 OK, 1 WRONG NAME-ORDER, 1 NAME INCOMPLETE.

### 2.9 Pendidikan Islam (4 app chapters)

No official regular Tingkatan 4 Pendidikan Islam DSKP was found. The closest documents are KBD bidang DSKPs (different track): Usul al-Din T4 (Bahagian Pendidikan Islam, Sep 2022, https://asiemodel.net/wp-content/uploads/2023/04/DSKP-KBD-Semakan-Usul-al-Din-Ting.-4_3.pdf) and Al-Syariah T4 (Feb 2020, https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-KBD-al-Syariah-Ting.-4.pdf). Neither was used for verdicts.

A secondary textbook table of contents was searched but not confirmed (only fragments: Pelangi Books Form 4 Pendidikan Islam, and unofficial class notes listing Surah al-An'am 162-163, Adab Terhadap Orang Sakit, Wasatiyyah and syirik khafi). Not used for verdicts.

| App chapter | Verdict |
|---|---|
| alquran_hadis | UNVERIFIED |
| akidah | UNVERIFIED |
| ibadah | UNVERIFIED |
| sirah_adab | UNVERIFIED |

Result: 0 verified. Action: obtain the regular KSSM Pendidikan Islam Tingkatan 4 DSKP from bpk.moe.gov.my.

---

## 3. Summary table

| Subject | App items | OK | Problem | Not in syllabus | Partial / unverified | Missing official content |
|---|---|---|---|---|---|---|
| Matematik | 10 | 10 | 0 | 0 | 0 | none |
| Matematik Tambahan | 10 | 10 | 0 | 0 | 0 | none (Elective Package noted) |
| Fizik | 6 | 6 | 0 | 0 | 0 | none |
| Kimia | 8 | 8 | 0 | 0 | 0 | none |
| Biologi | 9 | 7 (+1 scope) | 1 NAME INCOMPLETE | 0 | 0 | none (14.0 in scope, unnamed) |
| Sejarah | 5 | 3 | 1 WRONG NAME-ORDER, 1 NAME INCOMPLETE | 0 | 0 | none for Bab 1-10 |
| Bahasa Melayu | 4 | 3 (topic) | 0 | 0 | 1 PARTIAL | skill strands 1-3, 4.3, 4.4 |
| Bahasa Inggeris | 3 | 0 | 0 | 1 (rational cloze, exam-format) | 2 PARTIAL | Literature in Action, Themes |
| Pendidikan Islam | 4 | 0 | 0 | 0 | 4 UNVERIFIED | unknown (no DSKP) |

Totals: 59 app items. OK (incl. scope/topic-level): 48. Problems: 4 (Biologi NAME INCOMPLETE 1; Sejarah WRONG NAME-ORDER 1 and NAME INCOMPLETE 1; BI rational cloze 1). Partial/unverified: 7 (BM 1 PARTIAL; BI 2 PARTIAL; PI 4 UNVERIFIED). 48 + 4 + 7 = 59.

Subjects the app lacks (verified or mentioned in official/secondary sources): Sains (core status to confirm), Sains Tambahan, Sains Komputer, Pertanian, GKT, Perniagaan. Unchecked gaps: Prinsip Perakaunan, Ekonomi, Geografi, PSV, RBT, Pendidikan Seni, PJPK.

## 4. Sources used

Government-hosted (not BPK/MOE):
- https://ipim.jmm.gov.my/sites/default/files/dockokurikulum/T4_%20DSKP%20VS%20BUKU%20TEKS_ZAR.pdf (Sejarah Tingkatan 4, Tajuk 9-11)
- https://www.malaysia.gov.my/my/topics/memilih-aliran-akademik (elective structure; curl with browser user-agent)

DSKP text via asiemodel.net mirror (content printed by KPM / Bahagian Pembangunan Kurikulum):
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Mathematics-Form-4-and-5_Versi-English.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-Additional-Mathematics-Form-4-and-5-DLP-dated-29092020.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/043_DSKP_KSSM_B_Inggeris_Ting4-1.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Physics-Form-4-and-5_Versi-English.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Chemistry-Form-4-and-5_Versi-English-1.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Biology-Form-4-and-5_Versi-English.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Science-Form-4-and-5_Versi-English.pdf
- https://asiemodel.net/wp-content/uploads/2022/08/DSKP-KSSM-Additional-Science-Form-4-and-5_Versi-English.pdf

Realignment (not original DSKP):
- https://sumberpendidikan.com/wp-content/uploads/2019/01/DPK-2.0-KSSM-Bahasa-Melayu-Tingkatan-4.pdf

Secondary (structure only):
- https://ecentral.my/stem/ (STEM electives; cites Surat Siaran KPM Bil 1 Tahun 2021)
- https://ecentral.my/pakej-mata-pelajaran-sbp-mrsm/ (search snippet only)

Not used (wrong document or wrong track): asiemodel `DSKP-TAHUN-4-SEJARAH-SEMAKAN-2017.pdf` (Tahun 4 primary); asiemodel KBD Usul al-Din and Al-Syariah (KBD track).

## 5. Unverified and not done

- Teras and Wajib membership lists for Tingkatan 4: the malaysia.gov.my page confirms the three group names but not the members.
- Upper Secondary Sains core vs elective status for Tingkatan 4: DSKP intro is ambiguous, not confirmed.
- Regular Pendidikan Islam Tingkatan 4 DSKP: not found. All PI items unverified.
- Original BM Tingkatan 4 DSKP: not found; only Penjajaran 2.0 (topic-level).
- BM 5.3.5 onward (ayat aktif/pasif, cakap ajuk/pindah): not read.
- Sejarah Tajuk 1-8: presumed Form 1-3; the T3 link returned HTML, not the PDF.
- Physics DSKP print date not checked (the mirror has no visible date in the extract).
- BI grammar items: "tenses" and "clauses" are not named in the DSKP; matched by content only.
- STEM electives: from a 2021 circular via a secondary site, not the circular.
- Elective subjects Prinsip Perakaunan, Ekonomi, Geografi, PSV, RBT, Pendidikan Seni, PJPK: not verified.
- All DSKP PDFs are mirror downloads, not bpk.moe.gov.my. Check the download host before publishing verdicts externally.

No project files were modified.
