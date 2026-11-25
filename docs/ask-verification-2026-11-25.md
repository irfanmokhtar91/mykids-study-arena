# Asas Sains Komputer Tingkatan 2: question bank verification (25/Nov/2026)

Bank: `js/data/ask_t2.js`, 67 original questions in 5 chapters (1.1 Perlapanan 13, 1.2 Perenambelasan 13, 2.1 Algoritma 14, 3.1 Kod data 14, 3.2 Struktur kod 13).
Tags: difficulty L/M/H = 23/32/12; part = A (objective). Source of scope: DSKP KSSM ASK Tingkatan 2 v2 (8/Nov/2017), mirror copy, text read in full for the five content standards.

## Gate 1: code recomputation (`scripts/verify-ask.mjs`)
39 of 67 answers carry a `check` and were recomputed independently (base conversions via parseInt/toString, ASCII via charCodeAt, code traces re-run as JavaScript). All match; no distractor equals a computed answer. Structure: 4 distinct options, valid key, explanation, tags, no duplicate prompts (case-insensitive, as the engine dedupes).

## Gate 2: blind solve (`scripts/export-blind.mjs`, `scripts/compare-blind.mjs`)
Items and options shuffled (key letters spread roughly evenly), no keys or explanations shown, three independent Opus solvers on three different shuffles.
- Round 1 (seed 11): 67/67 agree with key, 0 flags. Round 2 (seed 22): 67/67, 0 flags.
- Scope check against the DSKP text found nothing out of scope. Wording points fixed: the six ASCII questions now state the decimal code (the DSKP does not require memorising codes); the debugging-term question was reworded (DSKP wording: mengesan dan membaiki ralat); one nested-loop trace overlapped chapter 3.2 and was changed; "pengkompil" removed from an explanation; the average-of-two-numbers option labels no longer use terms absent from the DSKP.
- Round 3 (seed 33), all 67 re-solved after the 12 edits: 67/67 agree, 0 flags.

## Notes and limits
- Code segments use language-neutral pseudokod (FOR/WHILE/IF/PAPAR). The DSKP text read does not fix a programming language; the school textbook may use another syntax.
- "Ralat sintaks / ralat logik" appear in two items; these are standard textbook terms but are not named in the DSKP text read.
- ASK Mock Exam: the Tingkatan 2 blueprint exists but there is no Bahagian B (pelbagai bentuk) or C (subjektif) pool, so the paper stays "kosong" (not graded) until those are written and verified.
- Not checked by a teacher; the mirror DSKP is not bpk.moe.gov.my.
