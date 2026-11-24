# MyKids Study Arena v5 — Design Spec (agreed with Irfan, 24/Nov/2026)

Core purpose: help **parents** see each child's weaknesses and how to fix them. Fun, phone-first, never shows a wrong answer as correct.

## Children and syllabus baseline
- 3 children in 2027: Darjah 6 (KSSR Semakan 2017), Tingkatan 2 (KSSM), Tingkatan 4 (KSSM). National school (SK/SMK), BM medium, Muslim (Pendidikan Islam).
- KP2027 applies only to Tahun 1/Tingkatan 1 in 2027 (Tahun 2/Tingkatan 2 in 2028). **Ignore KP2027** for these children; note any KPM changes in the audit.
- Audit every existing chapter (js/data/) against DSKP KSSR Semakan 2017 Tahun 6, DSKP KSSM Tingkatan 2 and Tingkatan 4. Output a table: OK / wrong name or order / not in syllabus / missing. **No content changes until Irfan approves the table.**
- Tingkatan 4 subject list: Irfan supplies it (school subject-choice letter). Core first, electives after. Sains vs Fizik/Kimia/Biologi depends on stream.

## Exam formats (Mock Exam mode)
- Darjah 6 UASA (50 marks, 1 j 15 min each): BM (A10 OAP, B10, C10 perenggan, D20 karangan); BI (7 parts 5/4/5/6/5/10/15); Matematik (A 13 soalan 26m, B 2 soalan 24m); Sains (A 10 OAP, B 2 soalan 8m, C 4 soalan 32m); Sejarah (A 20 OAP, B 4 soalan 20m, C 2 soalan 10m).
- Tingkatan 2 UASA: BM K1 60m 1j30 + K2 40m 1j; BI Reading 40m 1j30 + Writing 40m 1j; Sejarah/Geografi A20 B40 C20 =80m 2j; Matematik/Sains A20 B20 C60 =100m 2j; Pendidikan Islam 5 bahagian =100m 2j; also Asas Sains Komputer, RBT.
- Tingkatan 4: SPM-style formats from Lembaga Peperiksaan (research and reconfirm before building).
- Tingkatan 4 school papers follow the SPM style. Evidence (sample sent by Irfan, a 2023 PAT Matematik Tingkatan 4 Kertas 2, code 1449/2, 2 j 30 min, Scribd doc 708025093): Bahagian A Q1-10 (3-5 marks each), Bahagian B Q11-15 (9 marks each), Bahagian C Q16 (15 marks); bilingual (BM first, then English); a printed "Rumus Matematik" formula sheet is provided; all answers are structured with working. So the Mock Exam for T4 Matematik needs: formula-sheet panel, per-step "jalan kerja" capture, and marks per question. Only one sample paper seen; confirm against the school's own paper.
- Subjects with no official paper: chapter practice only, no invented formats.
- Source docs: lp.moe.gov.my/lp/files/uasa (Format Pentaksiran dan Pelaporan, Rendah and Menengah).
- Every question carries two tags: chapter + exam part. Weakness is reported by both.

## Weakness engine
- Mastery % per chapter and per skill from last 3 attempts. Weak < 60%, strong >= 85%.
- Mistake type: careless (fast), concept gap (repeated), timed out.
- Weakness radar per subject, ranked weak list, "Fix My Weak Spots" set, trend line.
- Parent **action cards**, pre-written and verified per skill (what is wrong, likely reason, plain explanation, 3-step plan, Practise now). AI-written advice only later and labelled.

## Answer formats
- Objective answers: auto-graded by code. Math final answers: deterministic compare.
- Math working (jalan kerja): finger-draw canvas or photo + typed box with math keypad. Essays: typed or photo.
- Free text is never auto-marked in Phase 1: model answer + checklist, child self-checks, parent confirms.
- Phase 2 premium: AI **suggested** mark with reason and "needs human check" flag. Disclaimer: "AI suggestion only. Parent confirms the final mark." Provider-neutral layer; default DeepSeek V4 Flash; benchmark on ~50 known-mark BM/Matematik answers before paid launch; fallback e.g. Gemini Flash. Only the written answer + question + model answer are sent. Never names, school, IDs, photos. (Prices unverified; fetch official page before quoting.)

## Accounts
- Netflix-style profile selector on front page; edit name, avatar, Darjah/Tingkatan. Grade change and delete need parent PIN (local only).
- Kids work local-first with no login. Unlinked child sees only a simple "My progress" screen (stars, streaks). Detailed weakness and action plans only in the linked parent app.
- Parents sign in with **Google only** (Client ID under irfanmokhtar1991@gmail.com Google Cloud Console). Parent app is a separate installable PWA at /parent/. Later wrap both for Google Play.
- Link by QR from child's phone; history uploads at link time. Parent sees who is linked; multiple parents per child.
- Replaces the undeployed v4 family-code + PIN sync. Worker rewritten. Local PIN stays only for on-device changes.
- Stored: nickname, full name (parent only), current Darjah/Tingkatan, avatar, optional school. No birth year/date. No photos.
- Backend: **personal** Cloudflare only. Never irfanmokhtar@ogmeta.biz.

## Schools, leaderboards, groups (Phase 3)
- School search: static offline file, type-ahead nearest matches, filtered by state; "my school isn't listed" option. Compile and verify list from KPM sources.
- Leaderboards on by default, same year group only, nickname only; parent consent at link time and can switch off. PDPA review before public marketing.
- Weekly points (reset Monday) + all-time; correct answers, bonus for improving a weak chapter; first attempt per set only; daily cap; improvement shown.
- Groups: private (6-char code/link/QR) or open (searchable); admin approves joins; max 50 members, max 5 groups per child; creator is admin; parent can override a child admin and remove members/delete group; Report button.
- Safety: no chat, no photos. Group names from a word list. Nicknames typed, profanity-filtered (BM+EN) and parent-approved. Parent switch "Allow groups" per child (default on); parent sees groups and members.

## Quality rules
- Correctness gate for ALL new content (T4 subjects, model answers, checklists, action cards): independent second-model solve of every item, disagreements reviewed, spot-check against textbook scope. No subject marked ready until it passes. scripts/verify-questions.mjs only checks structure/duplicates/leaks, not correctness.
- Dates shown as dd/Mon/yyyy everywhere.
- Language: Bahasa Melayu UI for kids; keep Malaysian English where English is used.

## Phases
1. **No backend**: phone overflow fix (verify 360/390/430 px), Netflix selector, syllabus audit table, weakness engine (chapter + exam part), Mock Exam mode, local progress screen.
2. Google sign-in, parent PWA, QR linking, dashboard + action cards, working/essay capture, AI suggested marking.
3. School search, leaderboards, groups.

## Needs from Irfan
T4 subject list; Google OAuth Client ID (guided); personal Cloudflare login at Phase 2; DeepSeek key later via secure prompt.

## Round 6 decisions (Irfan, 24/Nov/2026)
### Grade bands (supplied by Irfan; verified against 20 grades on two real Tingkatan 1/3 UASA slips, all match)
- Darjah 4-6 and Tingkatan 1-3 (UASA): A 82-100 Cemerlang, B 66-81 Kepujian, C 50-65 Baik, D 35-49 Memuaskan, E 20-34 Mencapai Tahap Minimum, F 0-19 Belum Mencapai Tahap Minimum. Tahun 1-3 use PBD TP1-TP6 (no UASA).
- Tingkatan 4-5 (school exam, SPM-style scale; UNVERIFIED against a real slip): A+ 90-100, A 80-89, A- 70-79, B+ 65-69, B 60-64, C+ 55-59, C 50-54, D 45-49, E 40-44, G 0-39.
- Show % always; show the grade with its band descriptor.

### Actionable parent task cards
- Each weak chapter -> card: diagnosis (from mistake types), "do this today" (10 min: exact practice set + 2 guiding questions), target + re-test (e.g. >= 70% on 3 sets within 7 days), result tracking (Improved / Same / Worse), and escalation after 3 unsuccessful cycles (suggest asking the teacher, ready-made message). Phase 1: generic by mistake type + auto-linked practice set; chapter-specific coaching notes added as content is verified. Share-to-WhatsApp button (no backend needed).
- Weakness layers: (1) chapter, exam part, mistake type, speed, trend; (2) difficulty level where derivable (official 5:3:2 mix); (3) skill tags on all NEW content. Each report states which layers it used.

### Mock Exam
- Modes: Penuh (real duration, pause/resume) and Mini (one section, 15-20 min, resumable). Papers draw from chapter banks; no repeat inside one paper.
- Objective parts auto-marked. Structured/essay parts: child answers, then sees model answer + method steps (M1/A1 style); parent marks per step in the Parent Panel. Premium (Phase 2): AI-suggested marks (DeepSeek), always labelled and parent-confirmed.
- Original questions only. Commercial/school papers (e.g. SBP Pra-SPM Matematik T4 collection, a 2023 PAT Matematik T4) inform FORMAT only; no question text copied.

### Question generation policy
- More practice via two routes only: (a) rule-based generators run live in the app (answer computed by code); (b) AI-written questions generated OFFLINE into the bank and shipped only after an independent second-model verification + review. Live on-the-fly AI questions are NOT shown to children in the free tier (no verification step). Could be a labelled premium option later.
