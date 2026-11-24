# Question-bank answer verification (24-25/Nov/2026)

Why: graded Mock Exam papers (Tingkatan 4 Kertas 1; Bahagian A of Tingkatan 2 and Darjah 6) draw on older hand-written
and fact-table questions whose answer keys had never been independently checked. `scripts/verify-questions.mjs` only
checks structure, duplicates and leaks, not correctness.

## Scope checked (844 questions, static + fact-table items)
- Tingkatan 4: Matematik, Fizik, Kimia, Biologi, Sejarah
- Tingkatan 2: Matematik, Sains, Sejarah, Geografi, Pendidikan Islam
- Darjah 6: Sains, Sejarah
- NOT checked: items produced by `generators.js` (answers computed by code, e.g. most Matematik items), and subjects with no graded
  paper yet (BM, BI, RBT, Tingkatan 4 BM/BI/Pendidikan Islam/Matematik Tambahan, Darjah 6 BM/BI/PI/RBT/Matematik).

## Method
1. Export questions and options WITHOUT keys. Round 1 used the bank's raw order (answer always option A); the solvers noticed
   the pattern, so round 1 is only used for its flags.
2. Round 2: item order and option order randomly shuffled (key letters spread A 217 / B 221 / C 190 / D 216), 8 independent
   blind solvers (Opus), each told to choose ALL correct options and flag ambiguity/errors.
3. Compare blind picks with the keys (`compare_bank.mjs`, kept in the scratchpad, not the repo).

## Result of round 2
- 844 answered; 841 exactly agree with the key; 0 disagree; 3 had a second defensible option; 0 had none.
- 75 questions flagged for wording or distractor quality (most are weak distractors borrowed from other fact-table rows).

## Fixes applied (45 items changed, all re-checked blind: 45/45 agree, 0 ambiguous)
Wrong or misleading wording corrected, including: Singapore "busiest port in the world" (now Southeast Asia);
"pembiasan angin" -> "pesongan angin" (Coriolis); molarity question restated (n = MV/1000 relation); UHT vs pasteurisation
wording; Cobbold Commission dates (Feb-Apr 1962); Labuan/Kuala Lumpur/Putrajaya no longer called "negeri";
Force 136 no longer called a local force; Japanese administration = Gunseikanbu; "four factors" key now lists four;
panau/kurap wording (yeast overlap removed); pepsin/trypsin overlap removed; pencil-sharpener vs can-opener overlap removed;
Champa / Kedaulatan Raja overlap removed; planet question restated as "farthest from the Sun".

## Still open (quality, not wrong keys)
- Fact-table items borrow wrong options from other rows, so some distractors are silly ("Anemia" for an enzyme question).
  This makes some questions too easy. A proper fix is rewriting distractors per item.
- Minor: T027 (yeast also a fungus), T030 (rotary sharpener also has gears), T032 (Cobbold option C close to A).
- Subjects/chapters outside the checked scope above still need the same blind check before any paper that uses them is graded.
- Syllabus fit (is each question in the DSKP chapter?) was flagged by the solvers for some Darjah 6 Sains items that look like
  Tingkatan 1-3 content (nervous system, human reproduction, air pressure). Needs a teacher or DSKP check.
