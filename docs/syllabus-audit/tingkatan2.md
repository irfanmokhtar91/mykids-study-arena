# Audit: Tingkatan 2 chapter list vs official DSKP KSSM

Scope: app section `## t2` of `scratchpad\app_chapters.md`. KP2027 ignored (Tingkatan 2 in 2027 still on KSSM DSKP).
Downloads and extracted text: `scratchpad\dskp_t2\pdfs\` and `scratchpad\extract\`.

## Source reliability (read first)

- **No official BPK PDF was obtained.** `bpk.moe.gov.my` DSKP Tingkatan 2 pages returned HTTP 404 and `ppdkmy.moe.gov.my` did not resolve from this machine.
- The PDFs used are third-party mirrors. Matematik, Geografi and Bahasa Inggeris are BPK-issued DSKP text (BPK cover, "April 2016" / 2017 issue) on asiemodel.net. Their content is read directly from the PDF text.
- Sains and Bahasa Melayu are **2020 Dokumen Penjajaran (realignment) documents** on sumberpendidikan.com. They list DSKP Bidang/Tajuk, but they are not the full DSKP.
- Sejarah is a **partial** IPIM mapping document (Tema Warisan Negara only).
- Pendidikan Islam and RBT: no readable PDF was obtained. Only anyflip flipbooks (HTML) and commercial/textbook pages were found. **Not verified.**

---

## 1. Matematik

(a) Official list (DSKP Matematik Tingkatan 2, BPK, April 2016, p.29 "Organisasi Kandungan"):
Source: https://asiemodel.net/wp-content/uploads/2022/08/058-DSKP-KSSM-Tingkatan-2-Matematik-v2-2_021117_Cover.pdf
(cross-checked against the English edition https://asiemodel.net/wp-content/uploads/2022/08/9-DSKP-KSSM-Mathematics-Form-2.pdf, same 13 titles)

1. Pola dan Jujukan
2. Pemfaktoran dan Pecahan Algebra
3. Rumus Algebra
4. Poligon
5. Bulatan
6. Bentuk Geometri Tiga Dimensi
7. Koordinat
8. Graf Fungsi
9. Laju dan Pecutan
10. Kecerunan Garis Lurus
11. Transformasi Isometri
12. Sukatan Kecenderungan Memusat
13. Kebarangkalian Mudah

(b) Mapping

| App chapter | Verdict |
|---|---|
| Bab 1: Pola & Jujukan | OK |
| Bab 2: Pemfaktoran & Pecahan Algebra | OK |
| Bab 3: Rumus Algebra | OK |
| Bab 4: Poligon | OK |
| Bab 5: Bulatan | OK |
| Bab 6: Bentuk Geometri Tiga Dimensi | OK |
| Bab 7: Koordinat | OK |
| Bab 8: Graf Fungsi | OK |
| Bab 9: Laju & Pecutan | OK |
| Bab 10: Kecerunan Garis Lurus | OK |
| Bab 11: Transformasi Isometri | OK |
| Bab 12: Sukatan Kecenderungan Memusat | OK |
| Bab 13: Kebarangkalian Mudah | OK |

Result: 13 OK, 0 problem.

(c) Official chapters missing from app: none.

Confidence: high (text read from BPK DSKP PDF, numbering and order match).

---

## 2. Bahasa Inggeris

(a) Official structure (DSKP KSSM Bahasa Inggeris Tingkatan 2, BPK, 2017):
Source: https://asiemodel.net/wp-content/uploads/2022/08/51-DSKP-KSSM-Tingkatan-2-Bahasa-Inggeris-CEFR-v2.pdf

The DSKP is **not organised into chapters**. It is organised by language skill and a grammar syllabus:
- 1.0 Listening, 2.0 Speaking, 3.0 Reading, 4.0 Writing, 5.0 Literature in Action (content and learning standards).
- Syllabus: four themes (People and Culture; Health and Environment; Science and Technology; Consumerism and Financial Awareness).
- Grammar (Language Awareness) list, 11 items: (1) present simple and continuous review, (2) quantifiers (all, both, any, a few, a lot of, too much/many), (3) past simple and continuous review, (4) question forms and indirect questions, (5) adjectives ending -ed/-ing, (6) comparatives and superlatives, (7) countable and uncountable nouns, (8) modals of rules and obligation (must, mustn't, have to, don't have to, had to, didn't have to), (9) question tags, (10) passive (present and past simple), (11) infinitive of purpose.
- The DSKP text contains **no** mention of conditionals, reported/indirect speech (except question forms), phrasal verbs, or error-identification as named items.

(b) Mapping

| App chapter | Verdict |
|---|---|
| Grammar: Tenses, Modals & Conditionals | PROBLEM: tenses and modals are in the syllabus (items 1, 3, 8); "conditionals" is NOT IN SYLLABUS |
| Reported Speech & Passive Voice | PROBLEM: passive (item 10) is in the syllabus; "reported speech" is NOT IN SYLLABUS |
| Vocabulary & Phrasal Verbs | PROBLEM: vocabulary is linked to the four themes; "phrasal verbs" is NOT IN SYLLABUS |
| Error Identification & Text Completion | NOT IN SYLLABUS as a named item (closest: Reading and Writing skill standards, not verifiable as a chapter) |

Result: 0 clean OK, 4 problem (partial matches). Structural mismatch: the app uses grammar-topic chapters, the DSKP uses skill strands.

(c) Official content MISSING from app:
- Four themes (People and Culture; Health and Environment; Science and Technology; Consumerism and Financial Awareness)
- Grammar items: quantifiers; question forms and indirect questions; -ed/-ing adjectives; comparatives and superlatives; countable/uncountable nouns; question tags; infinitive of purpose
- Strands: 1.0 Listening, 2.0 Speaking, 3.0 Writing, 5.0 Literature in Action

Confidence: high on the text found; medium that the DSKP has no other grammar list (I read the whole syllabus section).

---

## 3. Sains

(a) Official Bidang/Tajuk (realignment document derived from DSKP KSSM Sains Tingkatan 2, 2020; read directly from PDF):
Source: https://sumberpendidikan.com/wp-content/uploads/2017/07/4_KSSM_DPK_SAINS-TING-2_com.pdf

- 4.0 Kesihatan Manusia (4.1 Penyakit berjangkit dan tidak berjangkit; 4.2 Pertahanan badan)
- 5.0 Air dan Larutan (5.1 Sifat fizik air; 5.2 Larutan dan kadar; 5.3 Pembersihan dan ...)
- 6.0 Asid dan Alkali (6.1 Sifat asid dan alkali; 6.2 Peneutralan)
- 7.0 Keelektrikan dan Kemagnetan (7.1 Keelektrikan; 7.2 Pengaliran arus elektrik; 7.3 Kemagnetan)
- 8.0 Daya dan Gerakan (8.1 Daya; 8.2 Kesan daya)
- 9.0 Haba (9.1 to 9.4)
- 10.0 Gelombang Bunyi
- 11.0 Bintang dan Galaksi dalam Alam Semesta
- 12.0 Sistem Suria
- 13.0 Meteoroid, Asteroid, Komet

Bidang 1.0 to 3.0 (Biodiversiti, Ekosistem, Nutrisi) do **not** appear in the PDF text I extracted (extraction starts at 4.0). Their existence rests on a secondary anyflip description of the 2016 DSKP, not on text I read. **Unverified.**

(b) Mapping

| App chapter | Verdict |
|---|---|
| Bab 1: Biodiversiti | UNVERIFIED (Bidang 1.0 not in extracted text) |
| Bab 2: Ekosistem | UNVERIFIED (Bidang 2.0 not in extracted text) |
| Bab 3: Nutrisi | UNVERIFIED (Bidang 3.0 not in extracted text) |
| Bab 4: Kesihatan Manusia | OK |
| Bab 5: Air & Larutan | OK |
| Bab 6: Asid & Alkali | OK |
| Bab 7: Keelektrikan & Kemagnetan | OK |
| Bab 8: Daya & Gerakan | OK |
| Bab 9: Haba | OK |
| Bab 10: Gelombang Bunyi | OK |
| Bab 11: Bintang & Galaksi | OK |
| Bab 12: Sistem Suria & Meteoroid | OK (merges 12.0 and 13.0; asteroid and comet not named) |

Result: 9 OK, 0 problem, 3 unverified.

(c) Official chapters MISSING from app: none confirmed from the text read. Bidang 1.0 to 3.0 cannot be checked. Possibly the app should name Asteroid and Komet under the Sistem Suria item.

Confidence: high for 4.0 to 13.0 (read from the document); low for 1.0 to 3.0.

---

## 4. Sejarah

(a) Official (partial): IPIM "Perincian DSKP dan Buku Teks Sejarah Tingkatan 2", Tema Warisan Negara, 6 pages:
Source: https://ipim.jmm.gov.my/sites/default/files/dockokurikulum/T2_DSKP%20VS%20BUKU%20TEKS_ZAR.pdf

- Tajuk 5: Kerajaan Alam Melayu (Bab 1 to 4 in the textbook mapping)
- Tajuk 6: Kesultanan Melayu Melaka sebagai asas (textbook Bab 5 Kesultanan Melayu Melaka; Bab 6 Kesultanan Johor Riau; Bab 7 Kesultanan Pahang, Perak, Terengganu dan Selangor; Bab 8 Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis; Bab 9 Warisan Kedah, Kelantan, N9 dan Perlis; Bab 10 Sarawak dan Sabah)

The mapping document covers Tema Warisan Negara only. Its numbering mixes DSKP Tajuk and textbook Bab, and some standard numbers in the PDF text are garbled. Official full Sejarah DSKP Tingkatan 2 text: **not obtained**.

(b) Mapping

| App chapter | Verdict |
|---|---|
| Bab 1–4: Kerajaan Alam Melayu | OK (Tajuk 5) |
| Bab 5: Kesultanan Melayu Melaka | OK (Tajuk 6) |
| Bab 6: Kesultanan Johor Riau | OK (Tajuk 6, textbook Bab 6) |
| Bab 7–8: Kedah, Kelantan, N9, Perlis & Warisan | WRONG NAME-ORDER: textbook Bab 7 is Pahang, Perak, Terengganu and Selangor; Bab 8 is Kedah, Kelantan, Negeri Sembilan and Perlis. The app label "N9" is a typo for Negeri Sembilan |
| Bab 9–10: Warisan Sarawak & Sabah | WRONG NAME-ORDER: textbook Bab 9 is the Warisan of Kedah, Kelantan, N9 and Perlis; Bab 10 is Sarawak and Sabah |

Result: 3 OK, 2 problem (numbering/grouping, and the Bab 7 topic missing).

(c) MISSING from app: Kesultanan Pahang, Perak, Terengganu dan Selangor (textbook Bab 7). Full Tajuk list beyond the IPIM mapping is **unverified**.

Confidence: medium-high for Tajuk 5 and 6 content; low for the rest.

---

## 5. Geografi

(a) Official (DSKP Geografi Tingkatan 2, BPK, April 2016), Organisasi Kandungan:
Source: https://asiemodel.net/wp-content/uploads/2022/08/064-DSKP-KSSM-Tingkatan-2-Geografi-v2.pdf

- 1.0 Kemahiran Geografi: 1.1 Skala dan Jarak; 1.2 Peta Topografi
- 2.0 Geografi Fizikal: Cuaca dan Iklim: 2.1 Pengaruh Pergerakan Bumi Terhadap Cuaca dan Iklim; 2.2 Cuaca dan Iklim di Malaysia
- 3.0 Geografi Manusia: Pengangkutan dan Telekomunikasi: 3.1 Pengangkutan di Malaysia; 3.2 Telekomunikasi di Malaysia
- 4.0 Geografi Kawasan: Asia: 4.1 Kepelbagaian Iklim dan Pengaruhnya Terhadap Kegiatan ...; 4.2 Jenis dan Kemajuan Pengangkutan di Asia
- 5.0 Isu dan Pengurusan Alam Sekitar: 5.1 Pemanasan Global; 5.2 Teknologi Hijau
- Panduan Kerja Lapangan (fieldwork guide, pp.33 onward)

(b) Mapping (app uses textbook-style "Bab" numbers; the content is matched to the DSKP sub-units)

| App chapter | Verdict |
|---|---|
| Bab 1–2: Skala, Jarak & Peta Topografi | OK (1.1 + 1.2) |
| Bab 3–4: Pengaruh Pergerakan Bumi & Cuaca Malaysia | OK (2.1 + 2.2) |
| Bab 5–6: Pengangkutan & Telekomunikasi di Malaysia | OK (3.1 + 3.2) |
| Bab 7–8: Kepelbagaian Iklim & Pengangkutan Asia | OK (4.1 + 4.2) |
| Bab 9–10: Pemanasan Global & Teknologi Hijau | OK (5.1 + 5.2) |

Result: 5 OK, 0 problem.

(c) MISSING from app: Panduan Kerja Lapangan (fieldwork guide; a mandatory component, not a numbered chapter). Confidence high.

---

## 6. Bahasa Melayu

(a) Official (partial): Dokumen Penjajaran Kurikulum BM Tingkatan 2 KSSM, 2020 (realignment, not the full DSKP):
Source: https://sumberpendidikan.com/wp-content/uploads/2017/07/1_KSSM_DPK_BAHASA-MELAYU-TING-2_com.pdf

Strands read from the PDF:
- 1.0 Kemahiran Mendengar dan Bertutur (1.1 ...; 1.8 Mengulas sesuatu)
- 2.0 Kemahiran Membaca
- 3.0 Kemahiran Menulis
- 4.0 Aspek Seni Bahasa: 4.1 memahami dan mengapresiasi karya sastera (prosa, puisi); 4.2 bandingan semacam, peribahasa, kata-kata hikmat, kiasan, bahasa berirama; 4.3 menghasilkan karya fiksyen dan puisi; 4.4 mempersembahkan prosa, puisi dan karya kreatif (pantun)
- 5.0 Aspek Tatabahasa: 5.1 memahami dan menggunakan golongan kata (kata ganti nama, akronim ...)
Sub-items 5.2 onward were not legible in the extraction.

(b) Mapping

| App chapter | Verdict |
|---|---|
| Morfologi & Kesalahan Kata | UNVERIFIED (closest is 5.0 Tatabahasa; no explicit "morfologi" heading found) |
| Sintaksis & Ayat Majmuk | UNVERIFIED (5.2+ not legible) |
| Peribahasa & Ungkapan Menarik | OK (4.2) |
| KOMSAS (Prosa, Puisi & Nilai Murni) | OK-ish (4.1 karya sastera; KOMSAS set-text not named in the DPK) |
| Pemahaman & Rumusan | OK-ish (2.0 Membaca; "rumusan" not named) |

Result: 3 OK-ish, 2 unverified, 0 clearly wrong.

(c) MISSING from app (candidates from strands): Mendengar dan Bertutur (1.0); Menulis / karangan (3.0); Karya kreatif fiksyen dan puisi (4.3); Persembahan / pantun (4.4).

Confidence: low-medium. The full official BM DSKP was not read.

---

## 7. Pendidikan Islam

(a) Official: **not obtained.** Candidates found: anyflip "061 DSKP KSSM Tingkatan 2 Pendidikan Islam v2" (HTML flipbook, not extractable with the tools used). No PDF.

(b) Mapping: all four app items (Al-Quran, Tajwid & Hadis; Akidah; Ibadah; Sirah & Adab) **UNVERIFIED.**

(c) MISSING: unknown.

Confidence: none.

---

## 8. Reka Bentuk dan Teknologi (RBT)

(a) Official: **not obtained.** Searches returned only a Tingkatan 3 DSKP on anyflip, textbooks, and commercial workbooks. No Tingkatan 2 PDF.

(b) Mapping: all three app items (Bab 1 Penyelesaian Masalah Secara Inventif; Bab 2 Teknologi Pembuatan, Mekanikal & Elektrik; Bab 3 Reka Bentuk Elektronik, Akuaponik & Makanan) **UNVERIFIED.**

(c) MISSING: unknown.

Confidence: none.

---

## Subject not in scope of the DSKP check: Asas Sains Komputer

The user states KPM lists Asas Sains Komputer for Tingkatan 1 to 3. I did not verify this against the KPM list. If confirmed, it is a **missing subject candidate** for the app (not in the t2 section). No DSKP was checked for it.

---

## Summary table

| Subject | OK | Problem | Unverified / partial | Missing candidates |
|---|---|---|---|---|
| Matematik | 13 | 0 | 0 | none |
| Bahasa Inggeris | 0 | 4 (partial) | 0 | themes, 7+ grammar items, skill strands |
| Sains | 9 | 0 | 3 (Bidang 1.0–3.0) | none confirmed |
| Sejarah | 3 | 2 | Tajuk list beyond Tajuk 6 | Pahang/Perak/Terengganu/Selangor (Bab 7) |
| Geografi | 5 | 0 | 0 | Panduan Kerja Lapangan |
| Bahasa Melayu | 3 (OK-ish) | 0 | 2 | Mendengar/Bertutur, Menulis, karya kreatif, persembahan |
| Pendidikan Islam | 0 | 0 | 4 | unknown |
| RBT | 0 | 0 | 3 | unknown |

## Unverified / could not verify

- Official BPK PDFs were not reachable (bpk.moe.gov.my 404; ppdkmy.moe.gov.my did not resolve). All "official" text is from third-party mirrors.
- Sains and BM sources are 2020 realignment documents, not the full DSKP.
- Sejarah: only Tema Warisan Negara (Tajuk 5 and 6) was read.
- Pendidikan Islam and RBT: no PDF read at all.
- Asas Sains Komputer: not verified.
- The app's Bab numbering in several subjects (Sejarah, Geografi, Sains 1–3) appears to come from textbooks; the DSKP uses Tema/Bidang/Tajuk numbering.
