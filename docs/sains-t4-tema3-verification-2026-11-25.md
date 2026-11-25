# Sains Tingkatan 4, Tema 3 (Bab 8-10): verification record, 25/Nov/2026

Added to `js/data/sains_t4.js` (`App.Data.t4.sains`): `unsur_bahan` 16, `aloi_kaca_seramik` 15, `polimer_getah` 14, `kimia_perubatan` 17 (62 original BM questions). 2 items code-checked (`unsur_bahan#8` sulfur `2.8.6`, `unsur_bahan#14` karbon-14 = 8 neutrons). Bank total: 223 items across 14 chapters (14 code-checked).
Source: KPM KSSM Sains Tingkatan 4 textbook `b08`, `b09`, `b10` (git-ignored text; verified against clean UTF-8 conversions).

## Gates
1. `scripts/verify-bank.mjs`: structure passed (`223 items (14 code-checked), 14 chapters, diff L/M/H 39/147/37, key index spread 55/56/56/56`).
2. Blind solve of the full 223-item bank, seeds 55 and 66, shuffled items and options, keys isolated outside the repo, two Gemini Pro solvers: **223/223 and 223/223** exact agree, 0 disagree, 0 second-option picks.
3. Textbook-fidelity check of the 62 Tema 3 items (Gemini Pro reading `b08`–`b10`): **62/62 OK** (0 incorrect keys, 0 defensible distractors).
4. Fixes applied & re-checked:
   - `aloi_kaca_seramik#13`: replaced the bulb-cover (`kaca soda kapur` `"tahan haba"`) item — which conflicted with `Jadual 9.2` (`takat lebur yang rendah`) and failed an intermediate seed 77 re-check — with a non-contradictory `Jadual 9.2` composition question (`Silika, kalsium karbonat dan natrium karbonat`).
   - Added `"Menurut buku teks"` scoping to `aloi_kaca_seramik#2` (bronze 88%/12%), `#3` (brass 75%/25%), and `#7` (steel corrosion resistance); replaced secondary distractor in `polimer_getah#12` with `"Ia tidak kenyal dan telap terhadap udara"` (contradicted by `Rajah 9.9`).
   - Targeted blind re-check on edited items (seed 88, fresh Gemini Pro solver): **10/10 exact agree, 0 flags**.
5. `scripts/verify-questions.mjs` and `test-blueprints`, `test-mock`, `test-tasks`, `test-weakness`, `test-worker` all pass; `?v=` bumped 17 to 18 in `index.html` and `parent/index.html`.

## Not tested (garbled, incomplete, or contradictory in source)
`Rencana Sains` interleaved columns (`b08`–`b10`), `Rajah 8.4` misaligned periodic-table grid masses, `Aktiviti 8.6` & `Praktis Sumatif 8` shifted tables, `Aktiviti 8.7` blank uses column (beyond Co-60 & P-32 prose), `Jadual 9.1` merged `Keluli`/`Piuter` properties, `Jadual 9.4` monomer quirk (`Neoprena`), `Eksperimen 10.1` blank results table, and `Gambar foto 9.11` vs `Jadual 9.2` contradiction on soda-lime glass heat resistance.

## Wiring
`js/syllabus.js` (`t4.sains`: added `unsur_bahan`, `aloi_kaca_seramik`, `polimer_getah`, `kimia_perubatan` in Bab 8–10 order), `index.html` and `parent/index.html` (`?v=18`).
