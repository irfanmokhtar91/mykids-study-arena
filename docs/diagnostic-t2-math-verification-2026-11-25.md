# Tingkatan 2 Matematik Diagnostic Bank (Bab 1–3): verification record, 25/Nov/2026

Added [`js/data/diagnostic_t2_math.json`](../js/data/diagnostic_t2_math.json) and generated UMD bundle [`js/data/diagnostic_t2_math.js`](../js/data/diagnostic_t2_math.js) (`App.DiagnosticBanks.t2.math`): **7 `syllabus_nodes`** and **35 original diagnostic BM MCQs** (5 per subtopic) covering KSSM Tingkatan 2 Matematik Bab 1–3:
- `pola_jujukan` (Bab 1: Pola dan Jujukan): `t2_math_pola_01` (5), `t2_math_pola_02` (5) — 10 items
- `pemfaktoran` (Bab 2: Pemfaktoran dan Pecahan Algebra): `t2_math_alg_01` (5), `t2_math_alg_02` (5), `t2_math_alg_03` (5) — 15 items
- `rumus_algebra` (Bab 3: Rumus Algebra): `t2_math_rumus_01` (5), `t2_math_rumus_02` (5) — 10 items

DSKP scope verified `OK` against official BPK DSKP KSSM Tingkatan 2 Matematik in [`docs/syllabus-audit/tingkatan2.md`](syllabus-audit/tingkatan2.md) (KP2027 ignored for Form 2 cohort). Every distractor targets an explicit Malaysian student misconception documented in `explanation_text`.

## Gates
1. **`scripts/verify-diagnostic-bank.mjs` (Gate 1):** Passed (`t2.math diagnostic: 7 nodes, 35 items (35 code-checked), 3 chapters, diff L/M/H 17/11/7, key spread A/B/C/D 9/9/9/8`).
   - Verified deep equality between `diagnostic_t2_math.json` and `diagnostic_t2_math.js`.
   - Verified `worker/schema.sql` foreign-key and CHECK constraint compliance via in-memory `node:sqlite` (`PRAGMA foreign_keys = ON`) across all 7 `syllabus_nodes` and 35 `questions`.
   - Verified `chapter_id` alignment with `js/syllabus.js` (`App.GRADES.t2` `math`) and multi-point algebraic/numeric uniqueness across all 35 JS `check` rules (`exact` and `equiv` modes).
   - Verified prerequisite chain tracing (`t2_math_alg_03 -> t2_math_alg_02 -> t2_math_alg_01`, `t2_math_rumus_02 -> t2_math_rumus_01`, and `t2_math_pola_02` unprobed probe flag) through `js/diagnostics.js`.
2. **Independent Blind Solve (Gate 2):** Keys strictly isolated outside the repo (`D:/Temp/`); items and A–D options shuffled independently per pass.
   - *(Note: Claude Sonnet 5.5 hit the 5-hour API rate limit resetting 7:10 PM MYT; Irfan approved dual independent Antigravity blind verification.)*
   - Pass 1 (`gemini-4-neon`, seed 77, split batches): **35/35 exact agree, 0 disagree, 0 second-option picks, 0 flags**.
   - Pass 2 (`gemini-4-carbon`, seed 88, split batches): **35/35 exact agree, 0 disagree, 0 second-option picks, 0 flags**.
3. **Regression Suites:** `verify-questions.mjs`, `test-diagnostics.mjs`, `test-weakness.mjs`, `test-tasks.mjs`, `test-worker.mjs`, `test-blueprints.mjs`, and `test-mock.mjs` all pass.

## Wiring
- [`index.html`](../index.html) (`js/data/diagnostic_t2_math.js?v=19`)
- [`parent/index.html`](../parent/index.html) (`../js/data/diagnostic_t2_math.js?v=19`)
