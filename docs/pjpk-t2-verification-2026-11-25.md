# PJPK Tingkatan 2: question bank verification (25/Nov/2026)

Bank: `js/data/pjpk_t2.js`, 138 original questions in 9 chapters (grouped from the textbook units). Difficulty L/M/H = 26/83/29.
Source: KPM KSSM textbook "Pendidikan Jasmani dan Pendidikan Kesihatan Tingkatan 2" (2017), text extracted by Irfan, kept locally in `docs/sources-private/` (git-ignored). A reader agent built a fact sheet with line references first; questions were written from it. Court dimensions known only from diagram labels, the book's contradictory exercise-frequency figures, the Karvonen worked example (no final answer), sexual-orientation topics and anything flagged uncertain were left out.

## Gates
1. Structure (`scripts/verify-bank.mjs`): passed.
2. Blind solve (two independent solvers, shuffled, no textbook): 138/138 and 136/138 exact. Misses: which ragam is listed for tarian inang, and the point value of a try without naming the game (the item now says ragbi sentuh).
3. Textbook fidelity check (separate solver searched the book): no item fails; all keys are stated in the book; sport figures (7 bola baling players, 5 touches, 5 points for a try, 3 amaran, 3 takraw players, boling 3 phases, lompat jauh 4 phases, lembing 4 phases), FITT, generation bands, hypertension 140/90, food storage 4 deg C / 4 hours and T.O.T.A.P.S. all match. Fixes applied: mengadang distractor "kepala" replaced; try and tripod and amaran items now say "Menurut buku teks" (real-world rules differ: a try is 1 point in touch rugby in other rule sets, tripod lashing names vary, race-walking warnings are red/yellow paddles); a liver-disease distractor that the book lists elsewhere replaced; the first-aid definition now quotes the book exactly.
   Edited items were not re-solved blind.

## Residual notes
- Book-specific facts that may differ from other sources are labelled "Menurut buku teks" where I noticed them.
- Health topics follow the book's wording only; sexual-orientation items were not written.
- Not checked by a teacher. PJPK has no national UASA paper: practice only.
