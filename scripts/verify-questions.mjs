/**
 * Automated verification script:
 * Loads syllabus, generators, static data, fact tables, and questionEngine in a Node vm context
 * and enforces for EVERY grade, subject, chapter (BM & DLP EN):
 * - Zero empty/malformed sets
 * - Every set has valid options (>=4), valid correctIndex, non-empty explanation, zero NaN/undefined
 * - STRICT ZERO CROSS-SET REPEATS: no question prompt repeats anywhere in Set 1..K of a chapter!
 * - STRICT ZERO MATCH-MODE CROSS-SET LEAKAGE: extra match pairs never borrow from Set 1..K!
 * - Zero unsimplified fractions (gcd > 1) inside calculation prompts
 * - Every chapter has >= 2 complete 5-question disjoint sets
 * - Every chapter with generators hits full 12 complete 5-question sets (60 unique prompts)
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const ctx = {
  window: {},
  console,
  Math,
  Date,
  Set,
  Map,
  Array,
  Number,
  String,
  Object,
  JSON,
  parseFloat,
  parseInt,
  isNaN
};
ctx.window = ctx;

const files = [
  "js/syllabus.js",
  "js/generators.js",
  "js/data/d6.js",
  "js/data/t2.js",
  "js/data/t4.js",
  "js/data/t4_extra.js",
  "js/data/ask_t2.js",
  "js/data/psv_d6.js",
  "js/data/pjpk_d6.js",
  "js/data/psv_t2.js",
  "js/data/fact_tables.js",
  "js/questionEngine.js"
];

for (const f of files) {
  const code = fs.readFileSync(path.join(root, f), "utf8");
  vm.runInNewContext(code, ctx, { filename: f });
}

const App = ctx.App;
let totalSetsChecked = 0;
let totalQuestionsChecked = 0;
const errors = [];
const genChaptersNot12 = [];
const setCountHist = {};

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,?!]+$/g, "")
    .trim();
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

for (const [gradeId, grade] of Object.entries(App.GRADES)) {
  for (const subj of grade.subjects) {
    for (const ch of subj.chapters) {
      const hasGen = !!(App.Generators && App.Generators[gradeId] && App.Generators[gradeId][ch.id] && App.Generators[gradeId][ch.id].length);
      for (const dlp of subj.dlp ? [false, true] : [false]) {
        const setCount = App.QuestionEngine.getChapterSetCount(gradeId, subj.id, ch.id, dlp);
        if (!dlp) setCountHist[setCount] = (setCountHist[setCount] || 0) + 1;

        if (setCount < 2) {
          errors.push(`TOO FEW SETS (<2): ${gradeId}/${subj.id}/${ch.id} dlp=${dlp} has ${setCount} sets`);
        }
        if (hasGen && setCount < 12) {
          genChaptersNot12.push(`${gradeId}/${subj.id}/${ch.id} (dlp=${dlp}): ${setCount}/12 sets`);
        }

        const chapterSeenQ = new Set();
        const firstQuestions = [];

        for (let setNum = 1; setNum <= setCount; setNum++) {
          totalSetsChecked++;
          const qs = App.QuestionEngine.getSetQuestions(gradeId, subj.id, ch.id, setNum, dlp);
          if (!qs || qs.length !== App.QUESTIONS_PER_SET) {
            errors.push(`BAD SET SIZE: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp} len=${qs ? qs.length : 0}`);
            continue;
          }
          firstQuestions.push({ setNum, qObj: qs[0] });

          for (let i = 0; i < qs.length; i++) {
            totalQuestionsChecked++;
            const q = qs[i];
            if (!q.q || /NaN|undefined/.test(q.q)) {
              errors.push(`BAD PROMPT: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${q.q}`);
            }
            const nq = norm(q.q);
            if (chapterSeenQ.has(nq)) {
              errors.push(`CROSS-SET OR IN-SET DUPLICATE Q: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp}: ${q.q}`);
            }
            chapterSeenQ.add(nq);

            if (/hitung|calculate/i.test(q.q)) {
              const fracs = q.q.match(/\b(\d+)\/(\d+)\b/g) || [];
              for (const fr of fracs) {
                const [a, b] = fr.split("/").map(Number);
                if (a > 0 && b > 1 && a < b && b <= 20 && gcd(a, b) > 1) {
                  errors.push(`UNSIMPLIFIED FRACTION IN PROMPT: ${gradeId}/${subj.id}/${ch.id} set ${setNum}: ${fr} in "${q.q}"`);
                }
              }
            }

            if (!Array.isArray(q.options) || q.options.length < 4) {
              errors.push(`BAD OPTIONS (<4): ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            } else {
              const optSet = new Set(q.options.map((o) => String(o).trim()));
              if (optSet.size !== q.options.length) {
                errors.push(`DUPLICATE OPTIONS: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${JSON.stringify(q.options)}`);
              }
              if (q.options.some((o) => !o || /NaN|undefined/.test(o))) {
                errors.push(`BAD OPTION VALUE: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${JSON.stringify(q.options)}`);
              }
            }
            if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
              errors.push(`BAD CORRECT INDEX: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
            if (!q.explanation || /NaN|undefined/.test(q.explanation)) {
              errors.push(`BAD EXPLANATION: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
          }
        }

        // Enforce 0 match-mode cross-set leakage across EVERY set in this chapter
        for (const { setNum, qObj } of firstQuestions) {
          const pairs = App.QuestionEngine.getMatchPairsForQuestion(gradeId, subj.id, ch.id, qObj, dlp, setNum * 13);
          if (pairs) {
            for (const pr of pairs) {
              if (!pr.isMain && chapterSeenQ.has(norm(pr.prompt))) {
                errors.push(`MATCH-MODE CROSS-SET LEAK: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp}: "${pr.prompt}"`);
              }
            }
          }
        }
      }
    }
  }
}

console.log(`Checked ${totalSetsChecked} sets, ${totalQuestionsChecked} question instances (0 cross-set repeat & 0 match-leak checks enabled).`);
console.log("Set counts per chapter (BM):", setCountHist);
if (genChaptersNot12.length > 0) {
  console.log("Generator chapters with <12 sets:", genChaptersNot12);
}

if (errors.length > 0) {
  console.error(`FOUND ${errors.length} ERRORS:`);
  errors.slice(0, 30).forEach((e) => console.error("  " + e));
  process.exit(1);
} else if (genChaptersNot12.length > 0) {
  console.error("Generator chapters failed to hit 12 unique sets!");
  process.exit(1);
} else {
  console.log("ALL CHECKS PASSED WITH 0 ERRORS, 0 CROSS-SET DUPLICATES & 0 MATCH LEAKS!");
}
