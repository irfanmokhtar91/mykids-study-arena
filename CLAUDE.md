@PROJECT_CONTEXT.md

# Repo Operating Rules (Claude / T3 Code)

- Also read `docs/design-v5.md` before changing exam formats, parent linking, or syllabus scope.
- Keep the stack **vanilla HTML5 / UMD ES6 JS (`js/`) + Cloudflare Workers/D1 (`worker/`)** with zero bundler, no TypeScript build step, and no PostgreSQL/Supabase migration unless explicitly requested.
- Keep pure domain modules (`js/gradeBands.js`, `js/weakness.js`, `js/tasks.js`, `js/diagnostics.js`) in UMD format (`module.exports` + `App.<Module>`) with strict JSDoc types and zero DOM/storage writes.
- Keep changes **single-feature per turn** so styling or UI updates never accidentally rewrite diagnostic logic.
- After editing code or question banks, run the relevant Node verification scripts in `scripts/` (such as `test-weakness.mjs`, `test-tasks.mjs`, `test-worker.mjs`, `verify-questions.mjs`, `verify-bank.mjs`).
- Files under `docs/prompts/` (`README.md`, `backend-diagnostics.md`, `syllabus-question-bank.md`) are **reusable prompt templates** for future tasks — do not treat them as active instructions unless the user asks to run one.
