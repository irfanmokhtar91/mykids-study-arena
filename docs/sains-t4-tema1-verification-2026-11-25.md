# Sains Tingkatan 4, Tema 1 (Bab 1-3): verification record, 25/Nov/2026

Added to `js/data/sains_t4.js` (`App.Data.t4.sains`): `langkah_keselamatan` 16, `bantuan_kecemasan` 16, `parameter_kesihatan` 18 (50 original BM questions). 1 item code-checked (`parameter_kesihatan#16` BMI = 22.2 kg m^-2). Bank total: 223 items across 14 chapters (14 code-checked).
Source: KPM KSSM Sains Tingkatan 4 textbook `b01`, `b02`, `b03` (git-ignored text; verified against clean UTF-8 conversions).

## Gates
1. `scripts/verify-bank.mjs`: structure passed (`223 items (14 code-checked), 14 chapters, diff L/M/H 39/147/37, key index spread 55/56/56/56`).
2. Blind solve of the full 223-item bank, seeds 55 and 66, shuffled items and options, keys isolated outside the repo, two Gemini Pro solvers: **223/223 and 223/223** exact agree, 0 disagree, 0 second-option picks.
3. Textbook-fidelity check of the 50 Tema 1 items (Gemini Pro reading `b01`–`b03`): **49/50 OK** initially (`bantuan_kecemasan` 16/16, `parameter_kesihatan` 18/18, `langkah_keselamatan` 15/16).
4. Fixes applied & re-checked:
   - `langkah_keselamatan#6`: removed double-negative `"di luar julat"` phrasing inversion, replaced overlapping pH distractors with safe ranges (`pH antara 5 hingga 9`, `pH antara 6 hingga 8`, `pH 7 sahaja`), and added `"Menurut buku teks"`.
   - Added `"Menurut buku teks"` / `"Menurut Rajah 1.2 buku teks"` scoping to `langkah_keselamatan#13` (dry powder), `parameter_kesihatan#4` (0.1 °C / 1 °C precision), and `parameter_kesihatan#6` (2–3 min duration); fixed Malay phrasing `"Berapakah lama"` -> `"Berapa lama"` in `bantuan_kecemasan#8`.
   - Targeted blind re-check on edited items (seed 88, fresh Gemini Pro solver): **10/10 exact agree, 0 flags**.
5. `scripts/verify-questions.mjs` and `test-blueprints`, `test-mock`, `test-tasks`, `test-weakness`, `test-worker` all pass; `?v=` bumped 17 to 18 in `index.html` and `parent/index.html`.

## Not tested (garbled or shifted in source)
`Rencana Sains` interleaved columns (`b01`–`b03`), `Jadual 1.2` shifted extinguisher rows for Kelas C–F, `Jadual 3.1` shifted hypertension stage labels, `Rajah 2.1`/`Rumusan` circle/concept maps, `Praktis Sumatif 3` Q3 table.

## Wiring
`js/syllabus.js` (`t4.sains`: added `langkah_keselamatan`, `bantuan_kecemasan`, `parameter_kesihatan` in Bab 1–3 order), `index.html` and `parent/index.html` (`?v=18`).
