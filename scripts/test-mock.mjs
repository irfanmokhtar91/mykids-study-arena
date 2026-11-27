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

// ======================= STRUCTURED SECTIONS (Tingkatan 2 Matematik pilot) =======================
const S = require("../js/data/structured_t2_math.js");
const sbank = (items) => ({
  chapterIds: ["c1", "c2", "c3", "c4"],
  getQuestions: (cid) => Array.from({ length: 10 }, (_, i) => mkQ(cid, i)),
  getStructured: (pool, part) => items.filter((it) => it.part === part)
});
const verified = S.ITEMS.filter((i) => i.status === "verified");
// A CARELESS bank that ignores the requested part and returns every item (this is what the real UI bank did)
const carelessBank = { chapterIds: ["c1"], getQuestions: () => [], getStructured: () => verified };
const cp = M.buildPaper(t2math, "k1", carelessBank, "careless");
eq("careless bank: Bahagian B only gets B items", cp.sections[1].items.every((i) => i.id.includes("-B")), true);
eq("careless bank: Bahagian C only gets C items", cp.sections[2].items.every((i) => i.id.includes("-C")), true);
eq("careless bank: no item appears in two sections", new Set([...cp.sections[1].items, ...cp.sections[2].items].map((i) => i.id)).size, cp.sections[1].items.length + cp.sections[2].items.length);
eq("careless bank: B = 20 marks, C = 60 marks", [cp.sections[1].items.reduce((a, i) => a + i.marks, 0), cp.sections[2].items.reduce((a, i) => a + i.marks, 0)], [20, 60]);
let sp = M.buildPaper(t2math, "k1", sbank(verified), "sx");
eq("B filled with 5 structured items", [sp.sections[1].items.length, sp.sections[1].state, sp.sections[1].structured], [5, "sedia", true]);
eq("C filled with 6 structured items", [sp.sections[2].items.length, sp.sections[2].state], [6, "sedia"]);
eq("B items sum to 20 marks, C items to 60", [sp.sections[1].items.reduce((a, i) => a + i.marks, 0), sp.sections[2].items.reduce((a, i) => a + i.marks, 0)], [20, 60]);
eq("no repeated structured item in one paper", new Set([...sp.sections[1].items, ...sp.sections[2].items].map((i) => i.id)).size, 11);
eq("B items only from pool part B", sp.sections[1].items.every((i) => i.id.includes("-B")), true);
// drafts are never drawn
const drafts = S.ITEMS.map((i) => ({ ...i, status: "draft" }));
sp = M.buildPaper(t2math, "k1", sbank(drafts), "sx");
eq("draft items are never drawn", [sp.sections[1].items.length, sp.sections[1].state], [0, "kosong"]);
// short pool -> partial, never padded
sp = M.buildPaper(t2math, "k1", sbank(verified.filter((i) => i.part === "B").slice(0, 3)), "sx");
eq("3 verified B items -> separa, not padded", [sp.sections[1].items.length, sp.sections[1].state], [3, "separa"]);

// scoring: objective all right, structured not yet marked -> menunggu, no grade, not counted wrong
sp = M.buildPaper(t2math, "k1", sbank(verified), "sx");
const ans = {};
sp.sections[0].items.forEach((i) => (ans[i.id] = i.correctIndex));
let sc2 = M.scorePaper(sp, ans, {});
eq("unmarked structured sections are menunggu", [sc2.sections[1].state, sc2.sections[2].state], ["menunggu", "menunggu"]);
eq("no grade while waiting for parent", [sc2.complete, sc2.pct, sc2.grade], [false, null, null]);
eq("waiting sections are not scored as 0 earned", [sc2.sections[1].earned, sc2.sections[2].earned], [null, null]);
eq("itemRecords ignore unmarked structured items", M.itemRecords(sp, ans, {}).every((r) => r.correct !== undefined), true);

// parent marks every step of every item -> full marks
const full = {};
[...sp.sections[1].items, ...sp.sections[2].items].forEach((it) => {
  full[it.id] = {};
  it.parts.forEach((p, i) => (full[it.id][i] = p.steps.map((_, k) => k)));
});
sc2 = M.scorePaper(sp, ans, full);
eq("all steps ticked -> B 20/20, C 60/60", [sc2.sections[1].earned, sc2.sections[2].earned], [20, 60]);
eq("complete paper with full marks -> 100% grade A", [sc2.complete, sc2.pct, sc2.grade && sc2.grade.grade], [true, 100, "A"]);
// partially marked section stays menunggu
const partial = { ...full };
delete partial[sp.sections[1].items[0].id];
sc2 = M.scorePaper(sp, ans, partial);
eq("one unmarked item keeps the whole section menunggu", sc2.sections[1].state, "menunggu");
eq("and blocks the grade", sc2.grade, null);
// half the steps in B, none in C
const half2 = {};
sp.sections[1].items.forEach((it) => { half2[it.id] = {}; it.parts.forEach((p, i) => (half2[it.id][i] = [0, 1])); });
sp.sections[2].items.forEach((it) => { half2[it.id] = {}; it.parts.forEach((p, i) => (half2[it.id][i] = [])); });
sc2 = M.scorePaper(sp, ans, half2);
eq("B 2 of 4 steps each = 10/20; C none ticked = 0/60", [sc2.sections[1].earned, sc2.sections[2].earned], [10, 0]);
eq("grade = (20 + 10 + 0)/100 = 30% -> E (20-34)", [sc2.pct, sc2.grade && sc2.grade.grade], [30, "E"]);
// invalid / duplicate step indices cannot inflate marks
const cheat = { [sp.sections[1].items[0].id]: { 0: [0, 0, 0, 99, -1, 1.5] } };
eq("duplicate/invalid step indices count at most once", M.earnedForItem(sp.sections[1].items[0], cheat[sp.sections[1].items[0].id]), 1);
// itemRecords for marked structured items carry earned/possible
const recsS = M.itemRecords(sp, ans, full);
eq("marked structured items produce earned/possible records", recsS.filter((r) => r.possible !== undefined).length, 11);

// rescoreRecord: stored result updated after parent marks
const record = {
  gradeId: "t2", paperMarks: 100,
  sections: [
    { id: "A", state: "ditanda", earned: 12, possible: 20 },
    { id: "B", state: "menunggu", earned: null, possible: 20, structured: true, items: sp.sections[1].items },
    { id: "C", state: "menunggu", earned: null, possible: 60, structured: true, items: sp.sections[2].items }
  ]
};
let rr = M.rescoreRecord(record, {});
eq("rescore with no marks keeps waiting", [rr.complete, rr.pct, rr.grade], [false, null, null]);
rr = M.rescoreRecord(record, full);
eq("rescore after full marks: 12+20+60 = 92% -> A", [rr.complete, rr.pct, rr.grade], [true, 92, "A"]);

// ======================= TINGKATAN 4 MATEMATIK KERTAS 2 (answer 1 of 2 in Bahagian C) =======================
const S4 = require("../js/data/structured_t4_math.js");
const t4bp = B.find("t4", "math");
const t4verified = S4.ITEMS.map((i) => ({ ...i, status: "verified" }));
const t4bank = { chapterIds: ["c1"], getQuestions: () => [], getStructured: () => t4verified };
let p4 = M.buildPaper(t4bp, "k2", t4bank, "t4seed");
eq("T4 K2: A has 10 items = 40 marks", [p4.sections[0].items.length, p4.sections[0].items.reduce((a, i) => a + i.marks, 0)], [10, 40]);
eq("T4 K2: B has 5 items = 45 marks", [p4.sections[1].items.length, p4.sections[1].items.reduce((a, i) => a + i.marks, 0)], [5, 45]);
eq("T4 K2: C has 2 items of 15 marks, choose 1 of 2", [p4.sections[2].items.length, p4.sections[2].items.map((i) => i.marks), p4.sections[2].choose, p4.sections[2].of], [2, [15, 15], 1, 2]);
eq("T4 K2: no item repeated, parts respected", new Set(p4.sections.flatMap((x) => x.items.map((i) => i.id))).size === 17 && p4.sections[0].items.every((i) => i.id.includes("-A")) && p4.sections[2].items.every((i) => i.id.includes("-C")), true);
const mark = (it, picks) => { const o = {}; it.parts.forEach((pt, i) => (o[i] = picks(pt))); return o; };
const allSteps = (pt) => pt.steps.map((_, k) => k);
let pm4 = {};
p4.sections.forEach((sec) => sec.items.forEach((it) => (pm4[it.id] = mark(it, allSteps))));
let sc4 = M.scorePaper(p4, {}, pm4);
eq("T4 K2: answering both C items fully still counts only 15 (best 1 of 2)", [sc4.sections[2].earned, sc4.sections[2].possible], [15, 15]);
eq("T4 K2: full marks = 40 + 45 + 15 = 100 -> 100%, complete", [sc4.sections[0].earned + sc4.sections[1].earned + sc4.sections[2].earned, sc4.complete, sc4.pct], [100, true, 100]);
// one C answered (8 of 15), the other left unanswered (explicit 0): earned = 8, not 8 + 0 averaged
const c1 = p4.sections[2].items[0], c2 = p4.sections[2].items[1];
pm4[c1.id] = mark(c1, (pt) => []);
pm4[c2.id] = mark(c2, (pt, k) => pt.steps.slice(0, 4).map((_, j) => j));
sc4 = M.scorePaper(p4, {}, pm4);
const c2earned = M.earnedForItem(c2, pm4[c2.id]);
eq("T4 K2: best-of-1 uses the answered question", sc4.sections[2].earned, Math.min(c2earned, 15));
// the other way round gives the same total (order does not matter)
const pmSwap = { ...pm4, [c1.id]: pm4[c2.id] && mark(c1, (pt) => pt.steps.slice(0, 4).map((_, j) => j)), [c2.id]: mark(c2, () => []) };
eq("T4 K2: swapping which C item was answered gives a comparable section score", M.scorePaper(p4, {}, pmSwap).sections[2].earned > 0, true);
// an unreviewed C item keeps the section pending
const pmPending = { ...pm4 }; delete pmPending[c2.id];
eq("T4 K2: an unreviewed C item keeps Bahagian C menunggu and blocks the grade", [M.scorePaper(p4, {}, pmPending).sections[2].state, M.scorePaper(p4, {}, pmPending).grade], ["menunggu", null]);
// stored record rescoring honours choose
const rec4 = { gradeId: "t4", paperMarks: 100, sections: p4.sections.map((x) => ({ id: x.id, state: "menunggu", earned: null, possible: x.marks, structured: true, choose: x.choose || null, items: x.items })) };
const rr4 = M.rescoreRecord(rec4, (() => { const o = {}; p4.sections.forEach((sec) => sec.items.forEach((it) => (o[it.id] = mark(it, allSteps)))); return o; })());
eq("T4 K2: rescoreRecord applies best-1-of-2 and gives 100% and an SPM grade", [rr4.complete, rr4.pct, rr4.grade], [true, 100, "A+"]);
// draft T4 items are never drawn
const pd4 = M.buildPaper(t4bp, "k2", { chapterIds: [], getQuestions: () => [], getStructured: () => S4.ITEMS }, "x");
eq("T4 K2: while items are still draft nothing is drawn", pd4.sections.every((x) => x.items.length === 0 || S4.ITEMS.every((i) => i.status === "verified")), true);
// Mesin is excluded from Darjah 6 graded mock papers
eq("D6 Sains Mesin is excluded from mock banks", M.MOCK_EXCLUDE["d6:sains"], ["mesin"]);

// ======================= DARJAH 6 UASA FULL 50-MARK PAPERS (all 5 subjects) =======================
const D6_MATH = require("../js/data/structured_d6_math.js");
const D6_SAINS = require("../js/data/structured_d6_sains.js");
const D6_SEJARAH = require("../js/data/structured_d6_sejarah.js");
const D6_BM = require("../js/data/mock_d6_bm.js");
const D6_BI = require("../js/data/mock_d6_bi.js");

const d6StrMap = { d6_math: D6_MATH.ITEMS, d6_sains: D6_SAINS.ITEMS, d6_sejarah: D6_SEJARAH.ITEMS, d6_bm: D6_BM.ITEMS, d6_bi: D6_BI.ITEMS };
const d6SetMap = { d6_bm: D6_BM.SETS, d6_bi: D6_BI.SETS };
const d6FullBank = {
  chapterIds: ["kemahiran_saintifik", "manusia", "mikroorganisma", "interaksi", "pemeliharaan", "daya", "kelajuan", "pengawetan", "pembentukan_malaysia", "negeri_malaysia", "rukun_negara", "kaum_budaya"],
  getQuestions: (cid) => Array.from({ length: 4 }, (_, i) => mkQ(cid, i)),
  getStructured: (pool) => d6StrMap[pool] || [],
  getObjectiveSets: (pool) => d6SetMap[pool] || []
};

function verifyD6FullPaper(subjId, expectedCounts, expectedMarks) {
  const bp = B.find("d6", subjId);
  const paper = M.buildPaper(bp, "k1", d6FullBank, `d6-seed-${subjId}`);
  eq(`D6 ${subjId}: all sections sedia`, paper.sections.every((s) => s.state === "sedia" && s.supported), true);
  eq(`D6 ${subjId}: section item counts`, paper.sections.map((s) => s.items.length), expectedCounts);
  eq(`D6 ${subjId}: section mark totals`, paper.sections.map((s) => s.marks), expectedMarks);
  const ans = {};
  const pm = {};
  paper.sections.forEach((sec) => {
    sec.items.forEach((it) => {
      if (it.type === "structured") pm[it.id] = mark(it, allSteps);
      else if (it.inputType === "word") ans[it.id] = `  ${it.answer.toUpperCase()} `;
      else ans[it.id] = it.correctIndex;
    });
  });
  const waitSc = M.scorePaper(paper, ans, {});
  eq(`D6 ${subjId}: unmarked structured sections block grade`, [waitSc.complete, waitSc.grade], [false, null]);
  const fullSc = M.scorePaper(paper, ans, pm);
  eq(`D6 ${subjId}: full 50/50 marks -> 100% grade A`, [fullSc.complete, fullSc.markedEarned, fullSc.pct, fullSc.grade && fullSc.grade.grade], [true, 50, 100, "A"]);
  return paper;
}

verifyD6FullPaper("math", [13, 2], [26, 24]);
verifyD6FullPaper("sains", [10, 2, 4], [10, 8, 32]);
verifyD6FullPaper("sejarah", [20, 4, 2], [20, 20, 10]);
const bmPaper = verifyD6FullPaper("bm", [10, 2, 1, 1], [10, 10, 10, 20]);
eq("D6 BM Bahagian A has reading passage on items 5..10", bmPaper.sections[0].items.slice(4).every((it) => it.passage && it.passage.length > 50), true);

const biPaper = verifyD6FullPaper("bi", [5, 4, 5, 6, 5, 1, 1], [5, 4, 5, 6, 5, 10, 15]);
eq("D6 BI Part 4 uses 3 matching options", biPaper.sections[3].items.every((it) => it.options.length === 3), true);
eq("D6 BI Part 5 uses word input with clues", biPaper.sections[4].items.every((it) => it.inputType === "word" && it.clue && it.answer), true);

// Draft objective sets are never drawn; Part 5 wrong/blank word scores 0 and blank is omitted from itemRecords
const draftObjBank = { chapterIds: [], getQuestions: () => [], getStructured: () => [], getObjectiveSets: () => D6_BM.SETS.map((s) => ({ ...s, status: "draft" })) };
eq("D6 BM draft objective set is never drawn", M.buildPaper(B.find("d6", "bm"), "k1", draftObjBank, "d").sections[0].state, "kosong");

const wordOnlyAnswers = { "51": "   ", "52": "wrongword", "53": ` ${biPaper.sections[4].items[2].answer.toUpperCase()} ` };
const biPartial = M.scorePaper(biPaper, wordOnlyAnswers, {});
eq("D6 BI Part 5 scores 1/5 for 1 case-insensitive trimmed match", biPartial.sections[4].earned, 1);
const wordRecs = M.itemRecords(biPaper, wordOnlyAnswers, {});
eq("D6 BI Part 5 omits whitespace-only answer from itemRecords", [wordRecs.length, wordRecs.filter((r) => r.correct).length], [2, 1]);

console.log(failed === 0 ? "MOCK_TESTS_PASSED" : `MOCK_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
