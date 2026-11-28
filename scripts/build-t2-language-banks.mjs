import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const letters = "ABCD";

for (const subject of ["bm", "bi"]) {
  require("../js/data/curriculum/t2_" + subject + ".js");
  const { units } = globalThis.App.Curriculum.t2[subject];
  const source = JSON.parse(fs.readFileSync("scripts/diag/wave3_" + subject + "_items.json", "utf8").replace(/^\uFEFF/, ""));
  const prompts = new Set();
  const check = row => {
    assert(units.find(unit => unit.id === row.unit)?.skills.some(skill => skill.id === row.skill), row.skill);
    assert(row.q && !prompts.has(row.q), row.q);
    prompts.add(row.q);
    assert.equal(row.options.length, 4);
    assert.equal(new Set(row.options).size, 4);
    assert(Number.isInteger(row.correctIndex) && row.options[row.correctIndex] && row.explanation);
    assert(["L", "M", "H"].includes(row.diff));
  };
  const items = [];
  const nodes = [];
  const questions = [];
  for (const [index, unit] of units.entries()) {
    for (const skill of unit.skills) {
      const group = source.pool.filter(row => row.skill === skill.id);
      assert.equal(group.length, 10, skill.id);
      group.forEach((row, i) => {
        check(row);
        items.push({ id: ["t2", subject, skill.id, i+1].join("_"), ...row, ref: unit.name });
      });
    }
    const id = ["t2", subject, unit.id].join("_");
    const prerequisite = {sintaksis:"morfologi", reported_passive:"grammar_tenses", error_editing:"grammar_tenses", writing:"reading"}[unit.id];
    nodes.push({ id, subject, grade_level:"t2", chapter_id:unit.id, topic_name:unit.name,
      subtopic_name:unit.skills.map(s => s.name).join(" / "), prerequisite_node_id:prerequisite ? "t2_"+subject+"_"+prerequisite : null,
      expected_time_ms:45000, bloom_level:"Apply" });
    const group = source.diagnostic.filter(row => row.unit === unit.id);
    assert.equal(group.length, 5, unit.id);
    group.forEach((row, i) => {
      check(row);
      const difficulty = [1, 2, index % 2 ? 3 : 2, 3, 4][i];
      const key = questions.length % 4;
      const options = [...row.options];
      [options[key],options[row.correctIndex]] = [options[row.correctIndex],options[key]];
      questions.push({id:id+"_q"+(i+1),syllabus_node_id:id,difficulty_1_to_5:difficulty,
        diff:difficulty<=2?"L":difficulty===3?"M":"H",exam_part:"A",prompt_text:row.q,
        options_json:Object.fromEntries(options.map((option,j)=>[letters[j],option])),correct_option:letters[key],explanation_text:row.explanation});
    });
  }
  assert.equal(items.length, source.pool.length);
  assert.equal(questions.length, source.diagnostic.length);
  const jsonPath = "js/data/diagnostic_t2_"+subject+".json";
  fs.writeFileSync(jsonPath, JSON.stringify({syllabus_nodes:nodes,questions},null,2)+"\n");
  execFileSync(process.execPath, ["scripts/verify-diagnostic-bank.mjs","--sync-js",jsonPath], {stdio:"inherit"});
  const attachment = "  App.Pools.t2."+subject+" = (App.Pools.t2."+subject+" || []).concat(ITEMS);";
  fs.writeFileSync("js/data/pools/t2_"+subject+".js", [
    "(function (global) {", "  const ITEMS = "+JSON.stringify(items,null,2)+";",
    '  if (typeof module === "object" && module.exports) module.exports = ITEMS;',
    "  const App = (global.App = global.App || {});", "  App.Pools = App.Pools || {};",
    "  App.Pools.t2 = App.Pools.t2 || {};", attachment,
    '})(typeof window !== "undefined" ? window : globalThis);', ""
  ].join("\n"));
}
