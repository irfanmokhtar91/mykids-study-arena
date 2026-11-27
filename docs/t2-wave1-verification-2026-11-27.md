# Tingkatan 2 Wave 1 (Core STEM) Verification Record — 27/Nov/2026

All Wave 1 (Core STEM: Matematik & Sains + Sejarah Bab 7 syllabus fix) assets are 100% original KSSM Bahasa Melayu wording and passed both **Gate 1** (automated structural, math, determinacy, blueprint, and prerequisite checks) and **Gate 2** (independent blind solve using `gemini-4-argon` with `compare-blind.mjs` achieving 100% exact agreement and 0 unresolved flags).

## 1. Syllabus & Chapter Bank Repairs

- **`js/syllabus.js`:**
  - Updated `t2.sains` chapter `sistem_suria` title/titleEn to clarify Bab 12–13 coverage (*Sistem Suria, Meteoroid, Asteroid & Komet*).
  - Inserted missing KSSM Sejarah Tingkatan 2 chapter `pahang_perak_terengganu_selangor` (*Bab 7: Kesultanan Pahang, Perak, Terengganu & Selangor*) immediately after `johor_riau`.
- **`js/data/t2.js`:**
  - Added 10 original MCQs for `pahang_perak_terengganu_selangor`.
  - Replaced 4 misplaced Perak/Selangor/Terengganu MCQs in `kedah_kelantan_perlis` with genuine Perlis, Negeri Sembilan, and Kedah items.
  - **Gate 1:** `node scripts/verify-questions.mjs` -> 1,850 sets, 9,250 question instances, 0 errors.
  - **Gate 2 (`gemini-4-argon`):** 14/14 exact agreement, 0 flags (`scripts/compare-blind.mjs`).

## 2. Matematik Tingkatan 2 (`t2.math` — KSSM Bab 1–13)

| Track | File | Scale / Coverage | Gate 1 | Gate 2 (`gemini-4-argon`) |
|---|---|---|---|---|
| Curriculum | `js/data/curriculum/t2_math.js` | 13 units (`b1`–`b13`), 39 skills (`b1_s1`–`b13_s3`) | Skill IDs & common mistakes validated | — |
| Latihan Rawak | `js/data/pools/t2_math_gen.js` | 117 procedural generators (39 skills × `L/M/H`, >= 3 templates each; registers on `App.Pools.t2.math` & `App.Generators.pools.t2.math`, `App.Generators.t2` untouched) | `verify-math-gen.mjs`: 117 × 300 seeds = 35,100 runs, 0 errors | `p1` 36/36 + `b1_s2_L` revised `makeBroken` 3/3 (0 flags), `p2` 45/45 (0 flags), `p3` 36/36 (0 flags) |
| Ujian Diagnostik | `js/data/diagnostic_t2_math.json` + `.js` | 17 nodes, 85 items (85 code-checked, all 13 chapters; `t2m_bul_01_q4` rounded cleanly) | `verify-diagnostic-bank.mjs` (`minPerChapter = 5`): passed | 35 original + 50 Bab 4–13 (`50/50` exact agree, 0 flags) |
| Peperiksaan UASA (Bhg B/C) | `js/data/structured_t2_math.js` | 22 items (12 × 4m Bhg B + 10 × 10m Bhg C covering all 13 chapters, `status: "verified"`) | `verify-structured.mjs` & `verify-structured-t2.mjs`: passed | 18 original (43/43 parts) + `t2m-B11, B12, C09, C10` (`8/8` numeric sub-parts exact, 0 flags) |

## 3. Sains Tingkatan 2 (`t2.sains` — KSSM Bab 1–13)

| Track | File | Scale / Coverage | Gate 1 | Gate 2 (`gemini-4-argon`) |
|---|---|---|---|---|
| Curriculum | `js/data/curriculum/t2_sains.js` | 13 units (`b1`–`b13`), 39 skills (33 concept + 6 numeric) | Skill IDs & common mistakes validated | — |
| Latihan Rawak (Static + Gen) | `js/data/pools/t2_sains.js` + `js/data/pools/t2_sains_gen.js` | 330 static concept MCQs (33 × 10) + 18 numeric generators (6 × `L/M/H`, >= 3 templates each) = 348 entries | `verify-math-gen.mjs`: 18 × 300 = 5,400 runs + 330 static, 0 errors | 330/330 static (`0` flags) + 36/36 sampled generators (`0` flags) |
| Ujian Diagnostik | `js/data/diagnostic_t2_sains.json` + `.js` | 13 nodes, 65 items (9 code-checked, all 12 `syllabus.js` chapters) | `verify-diagnostic-bank.mjs`: passed | 65/65 exact agree (`0` flags) |
| Peperiksaan UASA (Bhg B/C) | `js/data/structured_t2_sains.js` | 22 items (10 × 4m Bhg B + 12 × 10m Bhg C covering all 12 `syllabus.js` chapters, `status: "verified"`) | `verify-structured-t2.mjs`: passed | 22/22 items (`68/68` sub-parts + `t2s-C01(c)` revised & rechecked `0` flags) |

## 4. App & Parent PWA Wiring (`?v=28`)

- **`js/mockExam.js`:** Added `t2:sains:k1:B` (`pool: "t2_sains", part: "B"`) and `t2:sains:k1:C` (`pool: "t2_sains", part: "C"`).
- **`index.html`:** Wired `structured_t2_sains.js`, `diagnostic_t2_sains.js`, `curriculum/t2_math.js`, `pools/t2_math_gen.js`, `curriculum/t2_sains.js`, `pools/t2_sains.js`, `pools/t2_sains_gen.js`, and bumped modified scripts to `?v=28`.
- **`parent/index.html`:** Wired `structured_t2_sains.js` and `diagnostic_t2_sains.js` and bumped modified scripts to `?v=28` (loads all 30 T2 diagnostic syllabus nodes: 17 Math + 13 Sains).
- **Automated Test Extensions:** Added T2 Wave 1 assertions to `scripts/verify-structured-t2.mjs`, `scripts/verify-math-gen.mjs`, `scripts/test-variants.mjs` (Section 17), `scripts/test-mock.mjs`, `scripts/test-diagnostic-runner.mjs` (Section 5), and `scripts/test-diagnostic-report.mjs`.
