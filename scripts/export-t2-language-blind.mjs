import fs from "node:fs";
import { randomInt } from "node:crypto";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const [questionsFile, keyFile] = process.argv.slice(2);
if (!questionsFile || !keyFile || questionsFile === keyFile) throw new Error("Supply separate question and key paths.");
const prompts = [];
const key = [];
function add(ref, q, options, answer) {
  const id = prompts.length + 1;
  if (options) {
    const order = options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = randomInt(i+1);
      [order[i],order[j]] = [order[j],order[i]];
    }
    prompts.push(id+". "+q+"\n"+order.map((n,i)=>String.fromCharCode(65+i)+") "+options[n]).join(" | "));
    key.push({id,ref,answer:String.fromCharCode(65+order.indexOf(answer))});
  } else {
    prompts.push(id+". "+q);
    key.push({id,ref,answer});
  }
}
for (const s of ["bm","bi"]) {
  for (const it of require("../js/data/pools/t2_"+s+".js")) add(it.id,it.q,it.options,it.correctIndex);
  for (const it of require("../js/data/diagnostic_t2_"+s+".json").questions)
    add(it.id,it.prompt_text,Object.values(it.options_json),"ABCD".indexOf(it.correct_option));
  for (const set of require("../js/data/mock_t2_"+s+".js").SETS) {
    for (const [i,it] of set.items.entries()) add(s+"/"+set.id+"/"+i,
      [it.passage || set.passage,it.q].filter(Boolean).join("\n"),it.options,it.options ? it.correctIndex : it.answer);
  }
  for (const it of require("../js/data/structured_t2_"+s+".js").ITEMS)
    for (const part of it.parts) add(it.id,it.stem+"\n"+part.q,null,part.answer);
}
fs.writeFileSync(questionsFile,prompts.join("\n\n")+"\n");
fs.writeFileSync(keyFile,JSON.stringify(key,null,2)+"\n");
