import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const G = require("../js/gradeBands.js");
const B = require("../js/data/blueprints.js");
const M = require("../js/mockExam.js");

let failed = 0;
const eq = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? "PASS" : "FAIL", name, ok ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`);
  if (!ok) failed++;
};

// ---- Grade band boundaries (UASA) ----
const u = (p) => G.gradeFor("t2", p).grade;
eq("UASA 82 -> A, 81 -> B", [u(82), u(81)], ["A", "B"]);
eq("UASA 66 -> B, 65 -> C", [u(66), u(65)], ["B", "C"]);
eq("UASA 50 -> C, 49 -> D", [u(50), u(49)], ["C", "D"]);
eq("UASA 35 -> D, 34 -> E", [u(35), u(34)], ["D", "E"]);
eq("UASA 20 -> E, 19 -> F", [u(20), u(19)], ["E", "F"]);
eq("UASA 0 -> F, 100 -> A", [u(0), u(100)], ["F", "A"]);
// the 20 real grades from Irfan's two slips (marks -> grade)
const slips = [[57, "C"], [80, "B"], [46, "D"], [25, "E"], [47, "D"], [50, "C"], [46, "D"], [50, "C"], [80, "B"], [68, "B"],
  [63, "C"], [76, "B"], [22, "E"], [64, "C"], [53, "C"], [73, "B"], [67, "B"], [78, "B"], [72, "B"], [55, "C"]];
eq("all 20 real slip grades reproduced", slips.every(([m, g]) => u(m) === g), true);
eq("d6 uses UASA too", G.gradeFor("d6", 66).grade, "B");
// ---- SPM (t4) ----
const s = (p) => G.gradeFor("t4", p).grade;
eq("SPM 90 -> A+, 89 -> A", [s(90), s(89)], ["A+", "A"]);
eq("SPM 80 -> A, 79 -> A-", [s(80), s(79)], ["A", "A-"]);
eq("SPM 70 -> A-, 69 -> B+", [s(70), s(69)], ["A-", "B+"]);
eq("SPM 40 -> E, 39 -> G", [s(40), s(39)], ["E", "G"]);
eq("SPM flagged unverified", G.gradeFor("t4", 75).verified, false);
eq("rounds to nearest whole number", [G.gradeFor("t2", 81.6).grade, G.gradeFor("t2", 81.4).grade], ["A", "B"]);

// ---- Paper building with a fake bank ----
const mkQ = (c, i) => ({ q: `${c} soalan ${i}`, options: ["a", "b", "c", "d"], correctIndex: i % 4, explanation: "e" });
const bank = (chapters, n) => ({
  chapterIds: chapters,
  getQuestions: (cid) => Array.from({ length: n }, (_, i) => mkQ(cid, i))
});
const t2math = B.find("t2", "math");
let paper = M.buildPaper(t2math, "k1", bank(["c1", "c2", "c3", "c4"], 10), "seed1");
const A = paper.sections[0];
eq("T2 Matematik A has 20 items", A.items.length, 20);
eq("T2 Matematik A state sedia", A.state, "sedia");
eq("A items worth 1 mark each (20/20)", A.items.every((i) => i.marks === 1), true);
eq("no repeated question inside one paper", new Set(A.items.map((i) => i.q)).size, 20);
eq("every chapter represented", new Set(A.items.map((i) => i.chapterId)).size, 4);
eq("items tagged with part", A.items.every((i) => i.part === "A"), true);
eq("B and C stay empty (no fake sections)", [paper.sections[1].items.length, paper.sections[1].state, paper.sections[2].items.length, paper.sections[2].state], [0, "kosong", 0, "kosong"]);
eq("same seed -> same paper", JSON.stringify(M.buildPaper(t2math, "k1", bank(["c1", "c2", "c3", "c4"], 10), "seed1").sections[0].items.map((i) => i.q)), JSON.stringify(A.items.map((i) => i.q)));
eq("different seed -> different order", JSON.stringify(M.buildPaper(t2math, "k1", bank(["c1", "c2", "c3", "c4"], 10), "seed2").sections[0].items.map((i) => i.q)) !== JSON.stringify(A.items.map((i) => i.q)), true);

// short bank -> partial, never padded
paper = M.buildPaper(t2math, "k1", bank(["c1"], 7), "s");
eq("short bank gives 7 items, state separa", [paper.sections[0].items.length, paper.sections[0].state], [7, "separa"]);

// unsupported subjects are not filled at all
const bm = M.buildPaper(B.find("t2", "bm"), "k1", bank(["c1"], 30), "s");
eq("BM A (needs passages) is not filled", [bm.sections[0].supported, bm.sections[0].items.length], [false, 0]);
const d6m = M.buildPaper(B.find("d6", "math"), "k1", bank(["c1"], 30), "s");
eq("D6 Matematik has no auto-markable section", d6m.sections.every((x) => x.items.length === 0), true);

// ---- Scoring ----
paper = M.buildPaper(t2math, "k1", bank(["c1", "c2", "c3", "c4"], 10), "seed1");
const allRight = {};
paper.sections[0].items.forEach((i) => (allRight[i.id] = i.correctIndex));
let sc = M.scorePaper(paper, allRight);
eq("A all correct = 20/20", [sc.sections[0].earned, sc.sections[0].possible], [20, 20]);
eq("paper NOT complete (B, C empty) -> no grade", [sc.complete, sc.pct, sc.grade], [false, null, null]);
eq("partial label names only Bahagian A", sc.markedLabel, "Bahagian A sahaja");
eq("missing sections listed", sc.missing.map((m) => m.id), ["B", "C"]);
// unanswered items are 0 earned but not an error
sc = M.scorePaper(paper, {});
eq("no answers = 0/20, still not complete", [sc.sections[0].earned, sc.complete], [0, false]);
// half right
const half = {};
paper.sections[0].items.forEach((i, idx) => (half[i.id] = idx < 10 ? i.correctIndex : (i.correctIndex + 1) % 4));
eq("10 of 20 correct = 10/20", M.scorePaper(paper, half).sections[0].earned, 10);

// A fully-supported fake paper WOULD get a grade (guard proves the grade path works)
const fakeBp = { gradeId: "t2", subjectId: "pi", source: "x", papers: [{ id: "k1", name: "t", minutes: 60, marks: 20, sections: [{ id: "A", label: "A", types: ["OAP"], count: 20, marks: 20, kind: "objective" }] }] };
const fp = M.buildPaper(fakeBp, "k1", bank(["x", "y"], 20), "q");
const fr = {};
fp.sections[0].items.forEach((i, idx) => (fr[i.id] = idx < 17 ? i.correctIndex : (i.correctIndex + 1) % 4));
const fsc = M.scorePaper(fp, fr);
eq("complete paper gets pct and grade (17/20 = 85% -> A)", [fsc.complete, fsc.pct, fsc.grade && fsc.grade.grade], [true, 85, "A"]);

// ---- Item records for the weakness engine ----
const recs = M.itemRecords(paper, { A1: paper.sections[0].items[0].correctIndex });
eq("only answered items produce records", recs.length, 1);
eq("record has chapter + part + correct flag", Object.keys(recs[0]).sort(), ["chapterId", "correct", "part"]);

console.log(failed === 0 ? "MOCK_TESTS_PASSED" : `MOCK_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
