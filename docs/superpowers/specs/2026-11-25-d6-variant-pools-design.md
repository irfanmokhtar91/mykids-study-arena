# Darjah 6 variant pools and "Latihan Rawak" mode (design)

Status: approved by Irfan in conversation (25/Nov/2026). Single feature per turn: this doc covers the content model; the engine/UI come after the first pools exist.

## Intent
Pupils who get a question wrong must not be able to win by memorising the set. Every question must also point to a textbook unit and skill so the parent report can say exactly where marks are lost. Textbooks are references for how to write and mark questions; they are never copied.

## Goals
- Normal chapter sets stay as they are (fixed, repeatable; repetition is fine for Sejarah).
- New "Latihan Rawak" mode draws only from chapters the pupil has covered (pupil ticks them, or progress decides). Never the whole book.
- Wrong answer -> replaced by a different question on the same skill at the same or easier difficulty. Same question returns only after other items. A skill is mastered only after correct answers on different questions.
- Every new question carries `unit`, `skill`, `diff` (L/M/H, mix 5:3:2).
- A committed, original-wording knowledge map per subject (units, skills, what is tested, typical mistakes).

## Non-goals / anti-goals
- No verbatim textbook text, no page images committed (they stay in gitignored `docs/sources-private/`).
- No unverified AI questions shipped to children (blind-solve x2 + textbook fidelity check).
- No stack change (vanilla UMD JS).

## Approaches considered
- A. Generators/templates for number-driven content (Matematik; Sains Kelajuan/Daya).
- B. Deep hand-written pool per skill (6-10 near-equivalent items) for BM, Sejarah, Sains concepts, BI.
- Chosen: A for Matematik and Sains calculations, B elsewhere (Irfan). B authoring is delegated to Gemini Orchestrator (Neon) because of its larger context; Claude builds engine/tags/generators and runs the verification gate.

## File contracts
- Knowledge map: `js/data/curriculum/d6_<subject>.js` -> `App.Curriculum.d6.<subject> = { units: [{ id, name, textbookUnit, skills: [{ id, name, tests, commonMistakes: [] }] }] }`
- Pool: `js/data/pools/d6_<subject>.js` -> `App.Pools.d6.<subject> = [ { id, unit, skill, diff, q, options:[4], correctIndex, explanation, ref } ]` (Sains also `qEn`, `optionsEn`, `explanationEn`). `ref` = textbook page/section for reviewers only, no quoted text.
- Pool size: >= 8 items per skill, mix 5:3:2 L:M:H, no duplicate options, exactly one defensible answer.

## Left to the builder
Engine selection algorithm, UI of the mode, how "covered chapters" is stored (local-first, `js/storage.js`).
