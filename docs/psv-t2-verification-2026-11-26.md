# Pendidikan Seni Visual Tingkatan 2: question bank verification (26/Nov/2026)

Bank: `js/data/psv_t2.js`, 168 original questions in 11 chapters (one per textbook Tajuk). Difficulty L/M/H = 23/88/57.
Source: KPM KSSM textbook "Pendidikan Seni Visual Tingkatan 2" (2017), text extracted by Irfan, kept locally in `docs/sources-private/` (git-ignored). The textbook has 11 Tajuk; the earlier chapter table (9 themes, from the DSKP outline) missed Seni Reka Grafik (Simbol dan Logo) and Seni Foto, which belong to the DSKP area Komunikasi Visual. Both were added.
Facts were first extracted by a reader agent into a fact sheet with line references (kept in the scratchpad), then the questions were written from the sheet; uncertain pairings flagged by the reader (for example Saidin Yahya vs Abdullah Ariff for specific works) were left out.

## Gates
1. Structure (`scripts/verify-bank.mjs`): passed.
2. Blind solve, two independent solvers with shuffled options and no textbook: 160/168 and 159/168 exact. The misses are details only the textbook gives (for example how many techniques the book lists, which flower a stitch makes, where the okok sits on a boat). They are expected for a book-specific bank and are covered by gate 3.
3. Textbook fidelity check (separate solver, searched the book text): every key is stated in or follows from the text; names, works, dates and places match (Shafie bin Jusoh 1947 Kelantan, Gua Tambun hematit, Kampung Boy 1979, STTI 1960, Proton Saga 1985, Ibn Haytham, glossary entries). The book's scrambled diagrams were cross-checked against its Rumusan pages. Problems fixed:
   - seramik: the distractor "Dua" could be read as a book fact (the book says shaping is of two kinds, hand-built and moulded); replaced with "Tujuh".
   - foto: the book says a small pinhole gives a clear image; "terang" (bright) is physically wrong and contradicts another item, so the key is now "semakin jelas".
   - Optional wording fixes applied: "Menurut buku teks" on the Artist Proof item, colour clue first in the moden-concept item, and a hand-embroidery item whose distractor (kerawang) could be read as hand embroidery was replaced.
   Edited items were not re-solved blind.

## Residual notes
- Several facts follow the book but may differ from other sources (for example "Artist Proof written on every print", pinhole camera wording).
- Not checked by a teacher. No national UASA paper for PSV: practice only.
