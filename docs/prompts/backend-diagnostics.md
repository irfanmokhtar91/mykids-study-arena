# Prompt 2: Database Schema, Diagnostic Engine & Test Suite

> **On-Demand Template** — Paste or reference this prompt in T3 Code / Claude when implementing **Step 1** (D1 schema extension + `js/diagnostics.js`). Do not execute automatically unless explicitly requested.

```text
Act as a senior full-stack EdTech architect. Using PROJECT_CONTEXT.md and docs/design-v5.md, design and implement the diagnostic database schema extension and pure JavaScript analytics engine for MyKids Study Arena v5.

Architectural Constraints:
- Keep the existing stack: Cloudflare D1 (SQLite) in worker/schema.sql and pure UMD ES6 JavaScript with strict JSDoc types in js/ (zero bundler, no TypeScript build step, no Supabase/PostgreSQL).
- Do NOT drop or break existing tables in worker/schema.sql (parents, children, links, pairs, marks, photos, rate).
- Reuse js/gradeBands.js (App.GradeBands) and preserve compatibility with legacy logs used by js/weakness.js.
- Write clean, strictly JSDoc-typed JavaScript with zero placeholder comments.

Requirements:
1. Database Schema Extension (Cloudflare D1 / SQLite in worker/schema.sql):
   - Keep `children` and `links` as the student/parent relationship (optionally add `school_type TEXT` to `children` via a safe additive migration/schema update if needed).
   - Add `syllabus_nodes` (`id`, `subject`, `grade_level`, `topic_name`, `subtopic_name`, `prerequisite_node_id`, `expected_time_ms`, `bloom_level`).
   - Add `questions` (`id`, `syllabus_node_id`, `difficulty_1_to_5`, `prompt_text`, `options_json`, `correct_option`, `explanation_text`).
   - Add `assessment_sessions` (`id`, `student_id` referencing `children(id)`, `session_type` CHECK IN ('INITIAL_DIAGNOSTIC', 'WEEKLY_CHECKUP'), `started_at`, `completed_at`).
   - Add `attempt_logs` (`id`, `session_id`, `student_id`, `question_id`, `syllabus_node_id`, `is_correct`, `time_spent_ms`, `error_classification`, `answered_at_myt`).

2. Pure UMD Diagnostic Engine (`js/diagnostics.js`, exposing `App.Diagnostics` in browser and `module.exports` in Node):
   - `classifyAttempt(isCorrect, timeSpentMs, expectedTimeMs)` returning `'MASTERY' | 'LOW_FLUENCY' | 'CARELESS_RUSH' | 'CONCEPTUAL_GAP'` (with safe fallback handling when `expectedTimeMs` is missing/zero or an item was unanswered).
   - `calculateKpmGrade(percentage, gradeLevel)` returning `{ grade, descriptor, isFalseComfortZone, scale, verified }` aligned with `js/gradeBands.js` (UASA D/E and SPM D/E flagged as `isFalseComfortZone: true`).
   - `generateParentDiagnosticSummary(studentId, attempts, syllabusNodes)` outputting:
     - Top 1 Strength (to reinforce confidence)
     - Top 1 Root-Cause Weakness (tracing back to `prerequisite_node_id` when failure rate in a subtopic with a prerequisite is >= 50%)
     - Habit Alert (ratio of `CARELESS_RUSH` vs `CONCEPTUAL_GAP`, plus post-21:00 MYT fatigue warning if accuracy drops >= 20 percentage points compared to pre-21:00 MYT sessions)
     - Actionable Tuition Prescription (1 concrete sentence a parent can send to a tutor / WhatsApp)

3. Automated Unit Tests (`scripts/test-diagnostics.mjs`):
   - Cover all UASA and SPM grade bands including false-comfort zones, all 4 `classifyAttempt` branches + edge cases, prerequisite root-cause tracing (>= 50% threshold), and pre/post-21:00 MYT fatigue detection (>= 20% drop).
   - Run `node scripts/test-diagnostics.mjs` and existing `scripts/test-*.mjs` suites and confirm all pass.
```
