# Sains Tingkatan 4, Tema 2 (Bab 4-7): verification record, 25/Nov/2026

Bank: `js/data/sains_t4.js` (`App.Data.t4.sains`), 65 original BM questions written by Claude (no delegated authoring).
Chapters: teknologi_hijau 15, genetik 16, sokongan_pertumbuhan 18, koordinasi_badan 16. Difficulty L/M/H 14/43/8.
Source: KPM KSSM Sains Tingkatan 4 textbook (text kept in git-ignored `docs/sources-private/`; not committed).

## Gates
1. `scripts/verify-bank.mjs`: structure passed; 5 genetics crosses code-recomputed with `check:{type:"js"}` (Tt x Tt = 25% tt; TT x tt = 100% tall; XY x XX = 50% male; XHY x XHXh = 25% XhY; XbY x XBXb = 50% colour-blind).
2. Blind solve, two seeds (11 and 22), shuffled items and options, keys held in a separate folder, two opus solvers: **65/65 and 65/65 agree with the key**, 0 second-option picks. Two flags (first GBI mosque, air-conditioner range) are textbook-specific facts the solver answered from general knowledge; both agreed with the key.
3. Textbook-fidelity check (opus agent reading b04-b07): **65/65 supported by the textbook**, no distractor made correct by the book. Notes acted on: adrenalina question reworded so it no longer infers the adrenal gland from the snake example; file header corrected to say only growth-hormone imbalance effects are tested.
4. `scripts/verify-questions.mjs` (1799 sets, 0 errors) and `test-blueprints`, `test-mock`, `test-tasks`, `test-weakness` (and `test-worker`) all pass.

## Not tested (garbled in the source or sensitive)
Thyroxine and insulin imbalance effects, Rencana Sains boxes, meiosis II stage labels, amniosentesis/kariotip step order, some diagram labels.

## Wiring
`js/syllabus.js` (t4 subject `sains`, 4 chapters), `index.html` script tag, `scripts/verify-questions.mjs`; `?v=` bumped 15 to 16 in `index.html` and `parent/index.html`.
