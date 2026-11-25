# PJPK Tingkatan 4: question bank verification (25/Nov/2026)

Bank: `js/data/pjpk_t4.js`, 85 original questions in 5 chapters (fitness and health only; the book's sports units are practical and not covered). Difficulty L/M/H = 10/57/18.
Source: KPM KSSM textbook "Pendidikan Jasmani dan Pendidikan Kesihatan Tingkatan 4" (cetakan pertama 2019), text extracted by Irfan, kept locally in `docs/sources-private/` (git-ignored). PJPK is compulsory for every Tingkatan 4 student (confirmed by a third-party guide, EduPartner; not official). It is not examined in SPM, so practice only.
A reader agent built a fact sheet with line references first. Items avoided on purpose: heart-rate and WHR band edges (the book's tables overlap or contradict), the Karvonen "220 - umur" formula (the book does not give it), BMI (no formula), explicit sexual content, sexting and legal-penalty details.

## Gates
1. Structure (`scripts/verify-bank.mjs`): passed.
2. Blind solve (two independent solvers, shuffled, no textbook): 86/86 and 86/86 exact on the first 86 items.
3. Textbook fidelity check (separate solver searched the book): no item fails; fartlek, tabata, WHR, SEGAK months, seven depression types, talasemia facts, Akta 670, six CPR stages and 999 all match. Fixes applied after the check and the blind solvers' comments: counts and book-specific figures now say "Menurut buku teks" (the book states some figures that differ from other sources, for example WHO and a "kepantasan" focus for fartlek); the loose amino-acid item was removed; the talasemia "dua jenis" item now says "pembahagian ... dalam buku teks"; "Methaphetamine" corrected to methamphetamine; the file header now states exactly which sexual-health topics are included (protective only: abstinence as the skill of saying no, avoiding cyber-sex addiction).
   The edited items were not re-solved blind.

## Residual notes
- Book facts that differ from other sources are labelled "Menurut buku teks".
- Not checked by a teacher.
