# Gemini Context: MyKids Study Arena v5

**Read [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) and [`docs/design-v5.md`](docs/design-v5.md) before making architectural, diagnostic, or syllabus changes.**

## Architecture & Stack Invariants
- **Frontend:** Static vanilla HTML5/CSS/ES6 JS PWA (`index.html`, `js/*.js`, `parent/`). Pure logic modules (`js/gradeBands.js`, `js/weakness.js`, `js/tasks.js`, `js/diagnostics.js`) use the UMD pattern (`module.exports` + `window.App.<Module>`) with strict JSDoc types and zero DOM/storage side effects. No bundler, no TypeScript build step, no UI framework.
- **Backend:** Personal Cloudflare Workers + Cloudflare D1 SQLite (`worker/schema.sql`, `worker/src/*.js`). Never migrate to PostgreSQL/Supabase or use non-personal Cloudflare accounts without explicit approval.
- **Curriculum Baseline (2027):** Darjah 6 (`d6`, KSSR Semakan 2017), Tingkatan 2 (`t2`, KSSM), Tingkatan 4 (`t4`, KSSM). Ignore KP2027 for these cohorts. Never commit or quote copyrighted textbook files from gitignored `docs/sources-private/`.

## Domain Logic Cheat Sheet
- **KPM Grading (`js/gradeBands.js`):** Round `%` to nearest integer (`Math.round`); always show `%` + grade + descriptor.
  - **UASA (`d6`, `t2`; Year 4–6 & Form 1–3):** A `82–100`, B `66–81`, C `50–65`, D `35–49` (False Comfort Alert), E `20–34` (Critical Alert), F `0–19`.
  - **SPM (`t4`; Form 4–5, `verified: false`):** A+ `90–100`, A `80–89`, A- `70–79`, B+ `65–69`, B `60–64`, C+ `55–59`, C `50–54`, D `45–49` / E `40–44` (Pass without Credit / Alert Zone), G `0–39`.
- **Diagnostic Engine Rules:**
  - `CARELESS_RUSH`: `is_correct === false` AND `time_spent_ms < expected_time_ms * 0.4`
  - `CONCEPTUAL_GAP`: `is_correct === false` AND `time_spent_ms >= expected_time_ms * 0.4`
  - `LOW_FLUENCY`: `is_correct === true` AND `time_spent_ms > expected_time_ms * 1.5`
  - `MASTERY`: `is_correct === true` AND `time_spent_ms <= expected_time_ms * 1.5`
  - **Prerequisite Probe:** Trigger prerequisite check when failure rate in a `subtopic_id` with `prerequisite_subtopic_id` is `>= 50%`.
  - **Late-Night Fatigue:** Compare accuracy and `CARELESS_RUSH` rate before `21:00 MYT` vs. `>= 21:00 MYT` (`UTC+8`); warn parents if accuracy drops `>= 20` percentage points.
- **Display & Quality Gates:** Show all dates as `dd/Mon/yyyy` (English 3-letter month). All new content requires independent second-model blind verification + textbook fidelity review + `scripts/verify-bank.mjs` / `scripts/verify-questions.mjs` before shipping.

## On-Demand Prompt Templates
*(Do not run automatically unless explicitly asked.)*
- Syllabus & MCQ dataset generation: [`docs/prompts/syllabus-question-bank.md`](docs/prompts/syllabus-question-bank.md)
- Schema & diagnostic engine tasks: [`docs/prompts/backend-diagnostics.md`](docs/prompts/backend-diagnostics.md)
- Workflow guide: [`docs/prompts/README.md`](docs/prompts/README.md)
