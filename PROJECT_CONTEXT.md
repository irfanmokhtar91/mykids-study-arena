# Project Context: MyKids Study Arena v5 (Diagnostic EdTech App)

> Persistent architectural & domain context for **MyKids Study Arena**. Read alongside [`docs/design-v5.md`](docs/design-v5.md) before making product, schema, diagnostic, or syllabus changes.
> Note: Templates under [`docs/prompts/`](docs/prompts/README.md) are **on-demand task prompts**, not standing instructions to execute automatically.

---

## 1. Product Vision & Core Differentiator
- **Target Buyer:** Malaysian parents whose children attend tuition and study late into the night, yet still achieve mediocre grades.
- **Target End-User:** Malaysian school students across Primary Year 4–6, Lower Secondary Form 1–3, and Upper Secondary Form 4–5.
  - **Active 2027 family baseline** (per `docs/design-v5.md`): **Darjah 6** (`d6`, KSSR Semakan 2017), **Tingkatan 2** (`t2`, KSSM), and **Tingkatan 4** (`t4`, KSSM). National school (SK/SMK), BM medium. **Ignore KP2027** for these cohorts (KP2027 starts with Tahun 1 / Tingkatan 1 in 2027).
- **Core Value Proposition:** This is **NOT** a bulk homework or infinite-practice platform. It is an **automated learning diagnostic ("MRI scan")** designed to pinpoint *why* a student is losing marks so parents can direct tuition and self-study efficiently.
- **UX Philosophy:**
  - **Student View (`index.html`, `js/`):** Fast, low-friction, low-pressure diagnostic checkups (10–15 minutes) and bite-sized game/mock-exam modes. Never feel like surveillance; frame around *"prove what you know so you can study less."* Phone-first (360/390/430 px safe), Bahasa Melayu UI for kids (with DLP English where applicable).
  - **Parent View (`parent/`):** Plain-language, actionable insights (no raw data clutter) highlighting root-cause knowledge gaps, exam habits, study-time fatigue, actionable task cards, and ready-to-share WhatsApp summaries.

---

## 2. Current Architecture & Stack Invariants (Reconciled with `docs/design-v5.md`)
Keep the existing repository stack. **Do not** introduce TypeScript build pipelines, React/Next.js bundlers, or PostgreSQL/Supabase unless Irfan explicitly asks for a stack migration.

- **Frontend (Static PWA on GitHub Pages):**
  - Student app: `index.html`, `css/styles.css`, `js/*.js`.
  - Parent PWA: `parent/index.html`, `parent/parent.js`.
  - **Pure Domain Modules (`js/gradeBands.js`, `js/weakness.js`, `js/tasks.js`, and future `js/diagnostics.js`):**
    - Use the existing **UMD wrapper** (`module.exports` for Node tests + `window.App.<Module>` for browser globals), zero DOM/storage writes, and strict **JSDoc** type annotations.
- **Backend & Database (Personal Cloudflare Workers + D1 SQLite):**
  - Lives in `worker/` (`worker/schema.sql`, `worker/src/*.js`).
  - Deployed strictly to Irfan's **personal** Cloudflare account (never `irfanmokhtar@ogmeta.biz`).
  - Kids work local-first (`js/storage.js`) with no login; parents sign in with **Google Sign-In only** and link children via QR/code (`parents`, `children`, `links`, `pairs`, `marks`, `photos`, `rate` in `worker/schema.sql`).
  - Future diagnostic tables (`syllabus_nodes`, `questions`, `assessment_sessions`, `attempt_logs`) extend `worker/schema.sql` cleanly in SQLite/D1 syntax without breaking existing tables.
- **Question Banks & Syllabus:**
  - Syllabus definitions: `js/syllabus.js` (`App.GRADES`), exam blueprints: `js/data/blueprints.js`.
  - Question banks: `js/data/*.js` (`App.Data.<grade>.<subject>`, e.g., `App.Data.t4.sains`).
  - Copyrighted textbook extracts belong strictly in gitignored `docs/sources-private/` — never committed or copied verbatim into questions or docs.

---

## 3. Malaysian KPM Grading Rules (Strict Domain Logic)
Auto-select the grading lookup table based on `student.grade_level` / `gradeId` (implemented in `js/gradeBands.js`).
- Round percentages to the nearest whole number (`Math.round`) before banding.
- **Always** display `%` alongside the grade and band descriptor.

### A. UASA Scale (`Year 4`, `Year 5`, `Year 6`, `Form 1`, `Form 2`, `Form 3` -> `d6`, `t2`)
*(Verified against 20 grades on real UASA slips; Tahun 1–3 use PBD TP1–TP6, no UASA.)*
- `82–100`: **A** (`Cemerlang` — Pass)
- `66–81`: **B** (`Kepujian` — Pass)
- `50–65`: **C** (`Baik` — Pass)
- `35–49`: **D** (`Memuaskan` — Pass / **"False Comfort" Alert Zone**, `isFalseComfortZone: true`)
- `20–34`: **E** (`Mencapai Tahap Minimum` — Minimum Pass / **Critical Alert Zone**, `isFalseComfortZone: true`)
- `0–19`: **F** (`Belum Mencapai Tahap Minimum` — Fail)

### B. SPM Scale (`Form 4`, `Form 5` -> `t4`)
*(School-exam scale; marked `verified: false` in `js/gradeBands.js` until verified against a real slip.)*
- `90–100`: **A+** (`Cemerlang Tertinggi`) | `80–89`: **A** (`Cemerlang Tinggi`) | `70–79`: **A-** (`Cemerlang`) — Distinction
- `65–69`: **B+** (`Kepujian Tertinggi`) | `60–64`: **B** (`Kepujian Tinggi`) | `55–59`: **C+** (`Kepujian Atas`) | `50–54`: **C** (`Kepujian`) — Credit / Kepujian
- `45–49`: **D** (`Lulus Atas`) | `40–44`: **E** (`Lulus`) — Pass without Credit / **Alert Zone** (`isFalseComfortZone: true`)
- `0–39`: **G** (`Gagal` — Fail)

---

## 4. Core Diagnostic Engine Rules (Must Track on Every Attempt)
Extends the v5 weakness & task rules in `js/weakness.js` (`< 60%` lemah, `>= 85%` kuat, last 3 attempts window) and `js/tasks.js` (target `>= 70%` over 3 attempts in 7 days, escalate `rujuk_guru` after 3 cycles).

Every diagnostic question attempt must capture `is_correct`, `time_spent_ms`, `expected_time_ms`, `answered_at_myt` (local MYT `UTC+8`), `topic_id` (chapter), `subtopic_id` (skill/subtopic node), and `prerequisite_subtopic_id` (when mapped).

1. **Careless vs. Clueless Classification:**
   - `is_correct === false` AND `time_spent_ms < (expected_time_ms * 0.4)` -> **`CARELESS_RUSH`** (Exam habit issue, not a conceptual gap).
   - `is_correct === false` AND `time_spent_ms >= (expected_time_ms * 0.4)` -> **`CONCEPTUAL_GAP`** (Needs targeted re-teaching).
   - `is_correct === true` AND `time_spent_ms > (expected_time_ms * 1.5)` -> **`LOW_FLUENCY`** (Knows concept, risks running out of exam time).
   - `is_correct === true` AND `time_spent_ms <= (expected_time_ms * 1.5)` -> **`MASTERY`**.
   - *Backward compatibility:* Preserve handling for unanswered/timed-out items (`timeout` in `js/weakness.js`) and legacy logs that lack `expected_time_ms`.
2. **Prerequisite Root-Cause Tracing:**
   - If a student fails `>= 50%` of questions in a `subtopic_id` that has a mapped `prerequisite_subtopic_id`, trigger a diagnostic probe on the prerequisite before recommending higher-level drills.
3. **Late-Night Fatigue Detection:**
   - Compare accuracy and `CARELESS_RUSH` rate before `21:00 MYT` vs. at/after `21:00 MYT`. Surface a fatigue warning to parents if accuracy drops by `>= 20` percentage points in late-night sessions.
4. **Parent Diagnostic Summary Contract:**
   - **Top 1 Strength** (to reinforce confidence)
   - **Top 1 Root-Cause Weakness** (tracing back to `prerequisite_node_id` if applicable)
   - **Habit Alert** (ratio of `CARELESS_RUSH` vs. `CONCEPTUAL_GAP`, plus post-21:00 MYT fatigue drop-off if detected)
   - **Actionable Tuition Prescription** (1 concrete sentence a parent can send to a tutor / WhatsApp)

---

## 5. Quality, Verification & Display Standards
- **Correctness Gate:** Every new question batch, model answer, checklist, or action card MUST pass an independent second-model blind solve + textbook fidelity review before shipping. Never ship unverified AI-generated questions to children.
- **Automated Checks:** Run relevant Node verification scripts in `scripts/` (e.g., `node scripts/verify-questions.mjs`, `node scripts/verify-bank.mjs`, `node scripts/test-weakness.mjs`, `node scripts/test-tasks.mjs`, `node scripts/test-worker.mjs`) after edits.
- **Dates & Timezone:** Every date shown to users/parents MUST use `dd/Mon/yyyy` with English 3-letter month (e.g., `25/Nov/2026`). Timezone is Malaysia Time (`MYT`, `UTC+8`).
- **Single-Feature Scope:** Keep implementation prompts and edits focused on a single feature per turn so UI changes never overwrite diagnostic logic.

---

## 6. Reusable Prompt Templates
- Workflow guide: [`docs/prompts/README.md`](docs/prompts/README.md)
- Schema & diagnostic engine prompt: [`docs/prompts/backend-diagnostics.md`](docs/prompts/backend-diagnostics.md)
- Malaysian KPM syllabus & question bank prompt: [`docs/prompts/syllabus-question-bank.md`](docs/prompts/syllabus-question-bank.md)
