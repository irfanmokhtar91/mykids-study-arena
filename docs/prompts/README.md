# Prompt Templates & T3 Code Workflow

> **Note:** Files in `docs/prompts/` are **on-demand templates** to copy/paste or reference explicitly when starting a feature. Agents should NOT execute them automatically unless asked.

## Context Files in This Repo
- [`PROJECT_CONTEXT.md`](../../PROJECT_CONTEXT.md) — Master domain rules, KPM grading scales, diagnostic engine specification, and stack invariants.
- [`CLAUDE.md`](../../CLAUDE.md) — Auto-imports `@PROJECT_CONTEXT.md` and sets repo rules for Claude / T3 Code.
- [`GEMINI.md`](../../GEMINI.md) — Context & invariant cheat sheet for Gemini sessions.
- [`.cursorrules`](../../.cursorrules) — IDE rules mirroring `PROJECT_CONTEXT.md`.
- [`docs/design-v5.md`](../design-v5.md) — Full v5 product spec, exam blueprints, and parent/child workflows.

---

## Quick Workflow Tip for T3 Code (Single-Feature Per Turn)
Keep each prompt to T3 Code strictly **single-feature per turn** so styling or UI work never rewrites your diagnostic logic:

1. **Step 1 — Schema & Diagnostic Engine:**
   Feed [`docs/prompts/backend-diagnostics.md`](backend-diagnostics.md) to extend [`worker/schema.sql`](../../worker/schema.sql) (Cloudflare D1 SQLite) and implement `js/diagnostics.js` (UMD JS + JSDoc, wired with `js/gradeBands.js` / `js/weakness.js`) + `scripts/test-diagnostics.mjs`.
2. **Step 2 — Syllabus Tree & Diagnostic Question Bank:**
   Feed [`docs/prompts/syllabus-question-bank.md`](syllabus-question-bank.md) to Gemini (leveraging its large context window) to generate structured KPM syllabus nodes and diagnostic MCQs for **1 subject & 1 grade level** (e.g., Form 2 Mathematics / `t2` Matematik), verify with an independent second-model blind solve + textbook fidelity check + `scripts/verify-bank.mjs`, and import into `js/data/`.
3. **Step 3 — Student Diagnostic Checkup Runner:**
   Prompt T3 Code:
   > *"Build the Student Diagnostic Checkup mode (`js/app.js`, `js/questionEngine.js`) that pulls 15 diagnostic questions, silently measures `time_spent_ms` per question using `performance.now()`, and saves attempts to local history (`js/storage.js`) and D1 `attempt_logs`."*
4. **Step 4 — Parent Diagnostic Report & WhatsApp Summary:**
   Prompt T3 Code:
   > *"Build the Parent Diagnostic Report view (`parent/parent.js`) consuming `App.Diagnostics.generateParentDiagnosticSummary()` with a 'Copy WhatsApp Summary' button."*
