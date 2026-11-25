# Prompt 3: Malaysian KPM Syllabus & Question Bank Generator

> **On-Demand Template** — Use this in Gemini (leveraging its large context window) for **Step 2** to generate structured KPM syllabus nodes and diagnostic MCQs.
>
> **Mandatory Pre-Shipping Verification (per `PROJECT_CONTEXT.md` & `docs/design-v5.md`):**
> Before importing generated questions into `js/data/*.js`, every batch MUST pass:
> 1. An independent second-model blind solve + disagreement review,
> 2. Spot-check against official KPM DSKP scope / textbook factsheets (never commit files from `docs/sources-private/`), and
> 3. `node scripts/verify-bank.mjs` and `node scripts/verify-questions.mjs`.

```text
Act as a Malaysian KPM curriculum specialist (KSSR Semakan 2017 / KSSM DSKP). Ignore KP2027 (which only applies to Tahun 1 / Tingkatan 1 starting 2027). Generate a structured JSON dataset for MyKids Study Arena targeting [INSERT SUBJECT & LEVEL, e.g., Form 2 Mathematics / Year 6 Science].

Output valid JSON containing two arrays: `syllabus_nodes` and `questions`.

1. `syllabus_nodes`:
   - Break down [INSERT 2–3 CHAPTERS] into granular subtopics using ONLY official DSKP scope for that chapter and grade level (never bleed content from other chapters or year groups).
   - Fields per node:
     - `id` (unique string slug)
     - `subject` (e.g., `math`, `sains`, `bm`, `bi`)
     - `grade_level` (`d6`, `t2`, or `t4`, or explicit KPM level string)
     - `chapter_id` (matching `js/syllabus.js` chapter ID where applicable)
     - `topic_name`
     - `subtopic_name`
     - `prerequisite_node_id` (referencing an earlier foundational subtopic ID, or `null`)
     - `expected_time_ms` (realistic exam pacing in milliseconds)
     - `bloom_level` (`"Remember" | "Understand" | "Apply" | "Analyze"`)

2. `questions`:
   - Generate 5 original diagnostic multiple-choice questions per subtopic following an adaptive difficulty mix (~50% low `L`, ~30% medium `M`, ~20% high `H`).
   - Do NOT copy wording from textbooks, school papers, or commercial workbooks.
   - Fields per question:
     - `id`
     - `syllabus_node_id`
     - `difficulty_1_to_5` (integer 1–5)
     - `diff` (`"L" | "M" | "H"`)
     - `exam_part` (e.g., `"A"`)
     - `prompt_text`
     - `options_json` (`{ "A": "...", "B": "...", "C": "...", "D": "..." }`)
     - `correct_option` (`"A" | "B" | "C" | "D"`)
     - `explanation_text`
     - `check` (optional deterministic JS expression + expected string answer `{ "type": "js", "code": "...", "ans": "..." }` for numeric/calculation items so `scripts/verify-bank.mjs` can recompute them)
   - Design distractors (wrong options) around **real Malaysian student misconceptions** (e.g., sign errors in algebra, unit conversion mistakes, misreading "kecuali" / "not", fraction simplification errors), and explicitly note which misconception each wrong option represents in `explanation_text`.
   - Use natural Malaysian exam phrasing (English or Bahasa Melayu depending on subject, matching current KPM DLP / non-DLP standards).
```
