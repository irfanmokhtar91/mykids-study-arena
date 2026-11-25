# Pendidikan Seni Visual Darjah 6: question bank verification (25/Nov/2026)

Bank: `js/data/psv_d6.js`, 62 original questions in 5 chapters (the DSKP modules): Bahasa SV 13, Kemahiran 12, Kreativiti dan Inovasi 14, Apresiasi 10, Projek (pameran) 11. Difficulty L/M/H = 20/36/6.
Source of facts: DSKP KSSR Semakan 2017 PSV Tahun 6 (BPK Sept 2021), full text read; every item uses only terms/examples stated there. The two textbook links Irfan sent (Scribd, FlipHTML5) could not be read by the tooling (Scribd shows only an AI summary; FlipHTML5 pages are encoded), so the bank is NOT yet checked against the textbook.

## Gates
1. Structure (`scripts/verify-bank.mjs`): 4 distinct options, valid key, explanation, tags, no duplicate prompts (case-insensitive). Passed. No computable answers in this subject.
2. Blind solve (`scripts/export-blind.mjs`, `scripts/compare-blind.mjs`), independent Opus solvers, shuffled items/options, no keys:
   - Round 1 (57 items): 55 exact, 1 disagree (renjisan/percikan, replaced), 1 second option (kad ucapan vs pakaian as "produk", fixed).
   - Round 2 (57 items): 56 exact, 1 second option (same item).
   - After 20 edits: round 3 (62 items) 62/62 exact; round 4 (62 items, different shuffle) 62/62 exact.
   - Two last edits after round 4 (a distractor in the "produk" question changed to "Lukisan"; "Menurut DSKP," added to the poster question) were not re-solved.
3. DSKP scope check (separate solver reading the DSKP text): no item beyond Tahun 6. Fixed: five items built on the DSKP's lakaran-idea worked examples (mural, beg serbaguna, lampu hiasan) were in the wrong chapter and depended on an example the child cannot see; they are now self-contained scenarios in Kreativiti dan Inovasi, and Kemahiran got five new items from standards 2.1.1-2.1.3 and the karya/produk note. Counts of unsur seni/prinsip rekaan now say "menurut kurikulum".

## Residual notes
- Soft flags that remain (solvers still answered correctly): poster is placed under Menggambar per the DSKP (some sources place it under corak/grafik); "karya vs produk" examples follow the DSKP lists exactly; "nilai estetik", "kapsyen" and "nilai gunaan" are not defined in the DSKP but are standard Tahun 6 terms.
- Not checked by a teacher; DSKP is a mirror copy, not bpk.moe.gov.my. Check against the textbook when readable text is available.
- No Mock Exam: PSV has no national paper (`NO_NATIONAL_FORMAT`); practice only.
