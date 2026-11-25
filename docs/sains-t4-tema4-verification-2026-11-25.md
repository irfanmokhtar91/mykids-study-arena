# Sains Tingkatan 4, Tema 4 (Bab 11-12): verification record, 25/Nov/2026

Added to `js/data/sains_t4.js`: gerakan_linear 15, jatuh_bebas_inersia 15, tenaga_nuklear 16 (46 original questions written by Claude). Bank total 111 (Tema 2: 65). 11 questions code-checked (calculations and genetics crosses).
Source: KPM KSSM Sains Tingkatan 4 textbook b11, b12 (git-ignored text).

- Gate 1 `verify-bank.mjs`: passed.
- Blind solve of the whole 111-item bank, seeds 33 and 44, shuffled, keys in a separate folder, two opus solvers: **111/111 and 111/111** agree. Flags: inertia-unit question (reworded to a statement about the textbook, so kg is no longer arguable); g = 10 m s^-2 is the textbook value; 24-25 C range is in the textbook.
- Textbook-fidelity check of the 46 new items (opus, b11/b12): **46/46 OK**, no problems. Notes: the 105 m motorcycle item is the book's worked example (kept, answer verified); "dua troli" wording is clarified by the options.
- `verify-questions.mjs` and the blueprint, mock, tasks and weakness tests pass; `?v=` now 17.
