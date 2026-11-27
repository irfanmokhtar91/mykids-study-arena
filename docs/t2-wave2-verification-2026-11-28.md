# Tingkatan 2 Wave 2 Verification Record — Sejarah & Geografi

**Date:** 28/Nov/2026 (MYT, UTC+8)
**Scope:** Tingkatan 2 KSSM `sejarah` and `geografi` — Latihan Rawak pools, Ujian Diagnostik banks, UASA structured (Bahagian B/C) papers, plus a blueprint correction.
**Wave 1 (Math & Sains)** shipped separately in commit `539498e`.

---

## 1. Authoring pipeline

| Stage | Who | Notes |
|---|---|---|
| Content authoring (MCQ pools) | `deepseek-v4.1-flash-1017` child agents, one per subject | Gemini-only rule relaxed on Irfan's explicit instruction to trial DeepSeek authoring. |
| Curriculum maps, diagnostic banks, UASA structured items | Orchestrating agent | Written directly because these encode the skill/ID contract the pools must match. |
| Gate 1 (structure) | Node scripts | `verify-math-gen.mjs`, `verify-structured-t2.mjs`, `verify-diagnostic-bank.mjs` |
| Gate 2 (independent blind solve) | `gemini-4-neon` child agents | Different model family from the author, so independence holds. |

`deepseek-v4-pro` returns HTTP 402 on this account; only `deepseek-v4.1-flash-1017` / `deepseek-v4-flash` are usable.

---

## 2. Deliverables

### 2.1 Latihan Rawak (skill-tagged MCQ pools)

| File | Items | Units | Skills | Difficulty L/M/H |
|---|---|---|---|---|
| `js/data/curriculum/t2_sejarah.js` | — | 9 | 27 | — |
| `js/data/pools/t2_sejarah.js` | 270 | 9 | 27 | 135 / 81 / 54 |
| `js/data/curriculum/t2_geografi.js` | — | 10 | 30 | — |
| `js/data/pools/t2_geografi.js` | 300 | 10 | 30 | 150 / 90 / 60 |

Every skill has exactly 10 items at 5 L / 3 M / 2 H. Key index is balanced within each skill (each of 0–3 used ≥ 2 times, never > 3).

### 2.2 Ujian Diagnostik (MRI scan)

| File | Nodes | Items | Chapters | Difficulty L/M/H | Key A/B/C/D |
|---|---|---|---|---|---|
| `js/data/diagnostic_t2_sejarah.json` (+ `.js`) | 11 | 55 | 6 | 27 / 17 / 11 | 14/14/14/13 |
| `js/data/diagnostic_t2_geografi.json` (+ `.js`) | 11 | 55 | 5 | 27 / 17 / 11 | 14/14/14/13 |

Both banks carry prerequisite chains that satisfy the generic root-cause probe and trace checks in `verify-diagnostic-bank.mjs`.

### 2.3 UASA structured (Bahagian B/C)

| File | Items | B marks | C marks | Chapters covered |
|---|---|---|---|---|
| `js/data/structured_t2_sejarah.js` | 6 (4 B + 2 C) | 4 × 10 m | 2 × 20 m | 6 / 6 |
| `js/data/structured_t2_geografi.js` | 8 (4 B + 4 C) | 4 × 10 m | 4 × 10 m | 5 / 5 |

`verify-structured-t2.mjs` was generalised to take per-subject mark maps and an `--only` / `--allow-draft` flag, so Sejarah (B10/C20) and Geografi (B10/C10) can be validated alongside Math/Sains (B4/C10).

### 2.4 Blueprint correction

`js/data/blueprints.js` — Tingkatan 2 Geografi Bahagian B was `sec("B", ..., 3, 40, "subjective")`, i.e. 3 questions for 40 marks (13.33 marks each — impossible to mark cleanly). Corrected to **4 × 10 marks**, matching the UASA Menengah Bahagian B structure. Bahagian C note clarified (4 offered × 10 m, answer 2).

All Tingkatan 2 blueprint section marks now sum exactly to the declared paper total.

---

## 3. Gate 1 results (structure)

```
verify-diagnostic-bank.mjs    DIAGNOSTIC_BANK_GATE1_PASSED
  t2.sejarah  11 nodes, 55 items, 6 chapters, diff 27/17/11, key 14/14/14/13
  t2.geografi 11 nodes, 55 items, 5 chapters, diff 27/17/11, key 14/14/14/13
verify-structured-t2.mjs      ALL_T2_STRUCTURED_VERIFIED
  t2_math 22 (B:12 C:10) · t2_sains 22 (B:10 C:12)
  t2_sejarah 6 (B:4 C:2) · t2_geografi 8 (B:4 C:4)
verify-math-gen.mjs           T2_SEJARAH_POOL_VERIFIED 270 items / 27 skills / 9 units
                              T2_GEOGRAFI_POOL_VERIFIED 300 items / 30 skills / 10 units
```

---

## 4. Gate 2 results (independent blind solve, `gemini-4-neon`)

Solver received questions only — no key, no explanations, options shuffled with a seed.

| Bank | Answered | Exact agree | Disagree | Second-option | Flagged-but-agree |
|---|---|---|---|---|---|
| `t2_sejarah` pool (270) | 270/270 | **269** | **0** | 1 | 26 |
| `t2_geografi` pool (300) | 300/300 | **300** | **0** | 0 | 7 |
| `diagnostic_t2_sejarah` (55) | 55/55 | **54** | **0** | 1 | 13 |
| `diagnostic_t2_geografi` (55) | 55/55 | **55** | **0** | 0 | 2 |

**Zero hard disagreements across all 680 items.** The single second-option case (`t2_sejarah_b01_q2`, Angkor vs Funan both in Kemboja) was resolved by narrowing the stem.

### 4.1 Flags raised and how each was handled

**Corrected (genuine defects):**

| Item | Problem | Fix |
|---|---|---|
| `t2_sej_b7_s2_04` | Claimed Terengganu linked to Melaka by royal marriage; the textbook lineage is Johor Riau | Rewritten to test Sultan Zainal Abidin I as Johor Riau royalty |
| `t2_sej_b7_s2_07` | Same marriage claim in a comparison stem | Rewritten to Johor-Riau vs Bugis founding |
| `t2_sej_b7_s1_07` | Stem implied Pahang and Perak had different founding origins, but both are Melaka royalty | Stem now contrasts the specific founder, not the origin |
| `t2_sej_b7_s2_08` | "Sultan Salahuddin" — misspelling | Corrected to **Sultan Salehuddin** across pool and curriculum |
| `t2_sej_b4_s3_04` | Listed tembikar as a Western import; it is mainly Chinese | Option narrowed to "kain dan barang logam" |
| `t2_sej_b3_s3_06` (candi/stupa) | Explanation implied candi is exclusively Hindu (Borobudur is a counter-example) | Explanation now notes the syncretic cases |
| `t2_sej_b8_s2_08` | "Undang elected from pembesar" — imprecise | Explanation clarified: elected by Lembaga per adat |
| `t2_geo_b8_s1_01` | "Apakah Laluan Sutera?" read as a Sejarah question | Re-anchored to its transport-network role in Bab 8 |
| `t2_geo_b1_s3_10` | Explanation said the pupil "did not convert" (1 750 km implies ÷1000) | Explanation now names the ÷1 000 error explicitly |
| `t2_geo_b3_s1_07` | Time-zone item ambiguous ("lebih lewat") | Stem now says "bandar yang terletak lebih ke barat" and asks to compare at the same moment |
| `t2_geo_b4_s2_05` | Asked about temperature "di kaki gunung" (foot) rather than the peak | Reframed as peak vs foot |
| `t2_geo_b4_s3_08` | Rice-yield causal link read as ambiguous | Stem now states the dependency, asks for the effect |
| `t2_geo_b4_s3_07` | West-coast November rain attributed flatly to Monsun Timur Laut | Explanation now frames it as the monsoon transition and notes the Titiwangsa shielding |
| `t2_geo_b3_s2_04` | "musim hujan dan panas" implied distinct seasons | Stem/explanation now say continuous equatorial heat and rain, not four seasons |

**Accepted as correct (solver's scope claim is wrong):**

- Brooke rule and SBUB administration of Sarawak/Sabah **is** Tingkatan 2 Bab 10. Verified against `docs/syllabus-audit/tingkatan2.md`, which maps the IPIM DSKP document: *"Bab 10 Sarawak dan Sabah"* sits under Tajuk 6 of Tingkatan 2.
- Local resistance (Rentap, Sharif Masahor) falls under the same Bab 10 unit.
- Badan B 4 × 10 marks is the correct UASA Menengah shape; the old 3/40 was the defect.

**Accepted as tolerable (item still has one unambiguously correct answer):**

- Items where three options are plainly false and the key is the only defensible statement. These are flagged for a future polish pass but do not ship an incorrect answer.

---

## 5. Wiring

- `index.html`: added `structured_t2_sejarah.js`, `structured_t2_geografi.js`, `diagnostic_t2_sejarah.js`, `diagnostic_t2_geografi.js`, `curriculum/t2_sejarah.js`, `pools/t2_sejarah.js`, `curriculum/t2_geografi.js`, `pools/t2_geografi.js`; asset version bumped `v=28` → `v=29`.
- `parent/index.html`: added the four structured/diagnostic scripts; asset version bumped to `v=29`.
- `js/mockExam.js`: added `t2:sejarah:k1:B/C` and `t2:geografi:k1:B/C` to `STRUCTURED_MAP`.

## 6. Test coverage added

| Script | New assertions |
|---|---|
| `test-variants.mjs` | Section 18: 4 subjects auto-detect, mixed sessions with retry, every pool item maps to a real skill/unit |
| `test-mock.mjs` | T2 Sejarah and T2 Geografi full 80/80 papers, section counts/marks, unmarked-B/C block grading, Parent MarkingUI resolution |
| `test-diagnostic-runner.mjs` | Section 6: both Wave 2 banks list, 15-question selection covers all 11 nodes, prerequisite prioritisation |
| `test-diagnostic-report.mjs` | T2 node count raised to 52 across 4 subjects |

Full suite: **9/9 test scripts pass**, **7/7 verification scripts pass**.

```
test-weakness             WEAKNESS_TESTS_PASSED
test-tasks                TASK_TESTS_PASSED
test-diagnostics          DIAGNOSTICS_TESTS_PASSED
test-blueprints           BLUEPRINT_TESTS_PASSED
test-diagnostic-runner    DIAGNOSTIC_RUNNER_TESTS_PASSED
test-diagnostic-report    DIAGNOSTIC_REPORT_TESTS_PASSED
test-worker               WORKER_TESTS_PASSED
test-mock                 MOCK_TESTS_PASSED
test-variants             VARIANT_TESTS_PASSED (48)
```

## 7. New tooling

| Script | Purpose |
|---|---|
| `scripts/export-pool-blind.mjs` | Export any `App.Pools.<grade>.<subject>` bank for blind solving, with `--batch N` splitting |
| `scripts/build-diagnostic-bank.mjs` | Build a diagnostic JSON from an authored item list, auto-rotating the answer key A/B/C/D |

## 8. Residual risk

Gate 2 was performed by a single independent model (`gemini-4-neon`), not a panel. Agreement is 100% on Geografi and 98.2–99.6% with **zero** contradictions on Sejarah. The items most worth a human/teacher spot-check before wide release are the Bab 7 founder-matching items (Terengganu, Selangor, Perak), where one misspelling and one wrong-lineage claim were both caught at this stage.