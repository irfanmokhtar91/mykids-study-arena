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

---
# Update 25/Nov/2026: remaining subjects, scope checks and Tingkatan 4 Matematik

## Remaining 669 static/fact-table questions (BM, BI, Pendidikan Islam, RBT, Matematik Tambahan; Darjah 6, Tingkatan 2, Tingkatan 4)
Same method (shuffled, 7 blind solvers). 669 answered; 662 agree with the key; 2 disagree; 5 had a second defensible option.
- **Wrong key found and fixed:** "Apakah rukun Islam yang keempat?" was keyed as zakat (zakat is the third; puasa is the fourth), and its
  explanation listed "3. Puasa, 4. Zakat". Corrected.
- **Second correct option removed:** hebat/agung synonyms; "Mulai/Pada hari ini"; "Every students" (Every -> All also fixes it);
  double intensifiers (sangat/terlalu ... sekali); beliau/baginda; committee has/have; data was/are; pepsin/trypsin overlap.
- **Non-standard peribahasa replaced:** "Bagai aur di atas bukit" -> "Bagai aur dengan tebing"; "Cangkul angin" -> "Menggantang asap".
- **Religious accuracy:** Tawaf Ifadah is a rukun (not merely wajib); Akidah/Ibadah question templates no longer say "tugas" for names of Allah.
- 54 edited questions were re-checked blind; the last round found no wrong key and no second correct option except one weak distractor, then fixed.
- Remaining quality notes (not wrong keys): many fact-table distractors are borrowed from other rows and are too easy; some "ayat/frasa" labels.

## Syllabus fit (no teacher available, so checked against DSKP text found online; mirrors, not bpk.moe.gov.my)
- Darjah 6 Sains: nervous system and reproduction ARE in the Tahun 6 DSKP (2.1 Pembiakan, 2.2 Sistem Saraf). "Mesin" is only in the level-wide
  Tahap II table, so Mesin is excluded from Darjah 6 graded mock papers (still available for practice).
- Tingkatan 2 Matematik (18 structured items): no part out of scope. Medium confidence: C08(c) expected number, B02 difference of two squares, C03(c) semicircle.
- Tingkatan 4 Matematik (23 structured items): first draft had simple/compound interest (Tingkatan 3) and completing the square / roots-to-equation
  (Additional Mathematics); these were replaced by factorisation-based and financial-planning items, then re-checked: no part out of scope.

## Tingkatan 4 Matematik Kertas 2 pool: 23 items (A 12, B 7, C 4), all verified (code recomputation + blind solve + scope).
Answer 1 of 2 in Bahagian C is scored as the best answered question. Browser test scripts/browser/mock-t4-k2.mjs passes.
