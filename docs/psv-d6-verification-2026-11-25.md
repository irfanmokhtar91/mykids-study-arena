# Pendidikan Seni Visual Darjah 6: question bank verification (25/Nov/2026)

Bank: `js/data/psv_d6.js`, 101 original questions in 5 chapters (the DSKP modules): Bahasa SV, Kemahiran, Kreativiti dan Inovasi, Apresiasi, Projek (pameran). Difficulty L/M/H = 31/62/8.
Sources: DSKP KSSR Semakan 2017 PSV Tahun 6 (BPK Sept 2021) and the school textbook "Pendidikan Seni Visual Tahun 6" (DBP 2021), text extracted by Irfan and kept locally in `docs/sources-private/` (git-ignored: copyrighted, repo is public). Items from the textbook carry `src: "BT"` (47 of 101); the rest come from the DSKP text.

## Gates
1. Structure (`scripts/verify-bank.mjs`): 4 distinct options, valid key, explanation, tags, no duplicate prompts (case-insensitive). Passed. No computable answers in this subject.
2. Blind solve (`scripts/export-blind.mjs`, `scripts/compare-blind.mjs`): independent Opus solvers, shuffled, no keys.
   - First 62-item bank (DSKP only): rounds 1-4 ended 62/62 and 62/62 exact after fixes (one ambiguous item replaced, wording fixed, five items moved to the right chapter).
   - After adding 47 textbook items: round 5 and 6 (109 items) 109/109 and 108/109 (the one miss is a textbook-project detail with no general-knowledge answer, since removed).
   - Final bank after the fixes below: round 7 (101 items) 101/101 exact. Solvers have no textbook, so items on textbook details are only confirmed by gate 3.
3. Scope and fidelity check against the textbook and DSKP text (separate solver, searched both files, did not rely on memory): all 47 textbook items trace to a textbook line; none contradicted.
   Problems found and fixed:
   - **DSKP vs textbook conflict on karya/produk.** The DSKP lists mural/arca/alat permainan/kraf tradisional as "karya" and pakaian/alat domestik as "produk", but the textbook labels all four of its projects "Produk" (kotak makanan, arca stabail, wau bulan, beg batik). Four questions built on the DSKP split were removed; a question on the textbook glossary definition of produk was added.
   - Removed DSKP-only worked examples the textbook never teaches and that depend on memorising the DSKP (mural kemasan, mural teknik, lampu hiasan teknik, beg serbaguna) and one trivia item (Cik Lebah box finishing).
   - "Standard 2.1.3" removed from a stem; "Menurut buku teks" added where the textbook and DSKP differ (exhibition scale); "Lukisan" no longer a distractor in the digital-image question (textbook glossary has "lukisan digital").

## Residual notes
- 47 textbook items + about 54 DSKP items. Roughly 15 DSKP-only items still test examples the textbook does not mention (mural media/fungsi/dimensi, lampu hiasan fungsi, pemerhatian, bunting...). Their wrong options are clearly wrong, so they are guessable; remove them if the school follows the textbook strictly.
- Soft flags still raised by solvers (answers correct): poster placed under Menggambar per DSKP; "nilai estetik/kapsyen/gunaan" definitions; lima kelopak bunga raya = Rukun Islam and Rukun Negara is stated in the textbook (some sources say Rukun Negara only).
- Not checked by a teacher; DSKP is a mirror copy, not bpk.moe.gov.my.
- No Mock Exam: PSV has no national paper (`NO_NATIONAL_FORMAT`); practice only.
