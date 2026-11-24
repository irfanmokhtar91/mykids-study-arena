# Browser tests (headless Chrome, phone viewport)

These drive the real app. They need `puppeteer-core` (not a project dependency) and Chrome:

    npm i --no-save puppeteer-core
    node scripts/browser/mock-full-paper.mjs <project-root> <screenshot-dir>

Chrome path is hard-coded to `C:/Program Files/Google/Chrome/Application/chrome.exe`; edit if different.
Run all unit tests first: `node scripts/test-weakness.mjs`, `test-tasks`, `test-blueprints`, `test-mock`, `verify-structured`, `verify-questions`.

- layout-overflow.mjs: every screen at 360/390/430 px, reports elements past the screen edge (args: root, out, widths)
- mock-full-paper.mjs: a child sits Tingkatan 2 Matematik A+B+C, a parent marks it, grade appears
- pin-and-marking-safety.mjs: no default PIN, weak PINs rejected, partial marking never yields a grade
- pin-gate.mjs: PIN needed to change grade or delete a profile
- parent-tasks.mjs, weakness-dashboard.mjs: parent task cards and weakness report
- scroll-one-finger.mjs: real one-finger touch scrolling on the long screens (regression test: overflow hidden on html/body broke it)
- mock-t4-k2.mjs: a full Tingkatan 4 Matematik Kertas 2 (A, B, C answer 1 of 2), parent marking, SPM grade
- photo-answers.mjs: photo answers: camera/gallery, automatic compression (2 MB -> ~240 KB), 3-photo limit, resume, parent viewer, orphan clean-up
- mock-weakness-view.mjs: parent dashboard weakness by paper part (Bahagian A/B/C), method-vs-accuracy mark loss, advice
