# PJPK Darjah 6: question bank verification (25/Nov/2026)

Bank: `js/data/pjpk_d6.js`, 115 original questions in 9 chapters. Difficulty L/M/H = 28/71/16. Chapters group the textbook units (Unit 1-13).
Sources: DSKP KSSR Semakan 2017 PJPK Tahun 6 (BPK Sept 2021) and the school textbook "Pendidikan Jasmani dan Pendidikan Kesihatan Tahun 6 SK (Semakan 2017)", DBP/My Bookpal, cetakan pertama 2021, 13 unit (OCR text from Irfan, kept locally in `docs/sources-private/`, git-ignored). 109 items are from the textbook (`src: "BT"`), 6 from the DSKP text.
Earlier file `pjpk_tahun6_buku_teks.txt` (DBP 2015/2019) is the OLD KSSR book (no FITT, no single-leg circle, no health part) and was NOT used.

## Gates
1. Structure (`scripts/verify-bank.mjs`): 4 distinct options, valid key, explanation, tags, no duplicate prompt. One computed item (KNM = 220 - 12 = 208) recomputed by code. Passed.
2. Blind solve (independent Opus solvers, shuffled, no keys, no textbook): round 1 115/116 and round 2 115/116 (the same item, voli pepat/kilas, unknown without the DSKP); after the fixes below, round 3 on the final 115 items: 115/115 exact.
3. Textbook/DSKP fidelity check (separate solver, searched both texts): no wrong key; textbook contradicts no item. Special checks passed: SEGAK 5 bintang = 18-20 markah, KNM = 220 - umur, 30-40 degree javelin angle, 2000 m walk for 12-year-olds, 10-15 minute burn rinsing (OCR "lo" read as 10 and consistent elsewhere), rescue pairing (membaling = jauh/tengah kolam, menghulur = dekat/tepi kolam).
   Fixed after the check: the pyramid-size item removed (textbook draws a three-person pyramid, DSKP says more than three); the Beto/Maharaj story rewritten so it matches the book (Zamri advises Maharaj to be honest with his parents); rescue-stance wording matches the book ("merendahkan badan supaya lebih stabil ketika menarik mangsa"); the two landing items now say "lompat tinggi"; a vague distractor tightened; a reason that the book never states replaced by the book's own rule; items whose figures differ from other sources now say "Menurut buku teks" (WHO 12-24 years, 2000 m, two weeks, SEGAK stars, bat swing).

## Residual notes
- Facts that follow the textbook but differ from other sources: WHO remaja age band (the textbook says 12-24; WHO usually says 10-19), muscle-endurance effects after two weeks, burn rinsing 10-15 minutes (current first-aid advice is about 20). The questions are labelled "Menurut buku teks" where relevant; revisit if the school teaches different figures.
- Health topics (puberty, hormones, HIV/AIDS, drugs, assertiveness) use the textbook's own wording only and avoid sexual detail. Sexual-behaviour risks in the textbook are not tested.
- The textbook OCR is noisy. Items rely on passages the checker read cleanly; re-check against the printed book if possible.
- No national UASA paper for PJPK: practice only (`NO_NATIONAL_FORMAT`). Not checked by a teacher.
