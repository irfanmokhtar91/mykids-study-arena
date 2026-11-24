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
