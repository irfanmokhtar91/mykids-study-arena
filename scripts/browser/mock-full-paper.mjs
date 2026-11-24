import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; page.on('pageerror',e=>errs.push(e.message)); page.on('dialog',d=>d.accept());
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage&&App.MockUI&&App.MarkingUI',{polling:100}); await wait(400); };
const results=[]; const check=(n,ok)=>{results.push(!!ok); console.log(ok?'PASS':'FAIL',n);};
const noOverflow = async(label)=>{ const o=await page.evaluate(()=>({vw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth})); check('no overflow: '+label, o.sw<=o.vw); };
const txt = ()=>page.evaluate(()=>document.querySelector('#main-content').innerText);
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); App.Storage.createProfile({name:'Danish',gradeId:'t2',avatar:'🐼'}); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('.account-card'); await wait(500);
await page.click('#btn-open-mock'); await wait(400);
let t = await txt();
check('picker now offers Bahagian A, B, C for Matematik', /Matematik[\s\S]{0,120}Bahagian A, Bahagian B, Bahagian C/.test(t));
const idx = await page.evaluate(()=>[...document.querySelectorAll('.mock-subject')].findIndex(b=>/Matematik/.test(b.innerText)&&!/Tambahan/.test(b.innerText)));
await (await page.$$('.mock-subject'))[idx].click(); await wait(500);
t = await txt();
check('paper screen shows 5/5 and 6/6 structured questions', /Bahagian B[\s\S]*5\/5 soalan/.test(t) && /Bahagian C[\s\S]*6\/6 soalan/.test(t));
check('Penuh duration is now the real 120 min', /Penuh \(120 min\)/.test(t));
await page.click('[data-start="full"]'); await wait(800);
// Section A: answer first option of every question
for (let i=0;i<20;i++){ await page.click('[data-opt="0"]'); if(i<19) await page.click('#mock-next'); await wait(60); }
// Section B
await page.click('[data-tab="B"]'); await wait(300);
t = await txt();
check('structured question shows marks and answer box', /4 markah/.test(t) && !!(await page.$('.mock-work')));
await noOverflow('structured exam screen'); await page.screenshot({path:path.join(OUT,'full_B_question.png')});
for (let i=0;i<5;i++){ const tas=await page.$$('.mock-work'); for (const ta of tas) await ta.type('jalan kerja anak'); if(i<4) await page.click('#mock-next'); await wait(80); }
// Section C
await page.click('[data-tab="C"]'); await wait(300);
for (let i=0;i<6;i++){ const tas=await page.$$('.mock-work'); for (const ta of tas) await ta.type('jawapan'); if(i<5) await page.click('#mock-next'); await wait(80); }
await page.screenshot({path:path.join(OUT,'full_C_question.png')});
await page.click('#mock-submit'); await wait(700);
t = await txt();
check('result: NO grade yet (structured waiting)', /Tiada gred keseluruhan/.test(t));
check('result: B and C say waiting for parent', /Bahagian B[\s\S]*Menunggu ibu bapa menanda/.test(t) && /Bahagian C[\s\S]*Menunggu ibu bapa menanda/.test(t));
check('structured items are not listed as wrong answers', !/Semak jawapan salah[\s\S]*Jujukan/.test(t));
await noOverflow('result with waiting sections'); await page.screenshot({path:path.join(OUT,'full_result_waiting.png')});
const rec0 = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {complete:r.complete, pct:r.pct, grade:r.grade, states:r.sections.map(s=>s.state), aEarned:r.sections[0].earned, typedItems:Object.keys(r.typed||{}).length}; });
check('stored record: incomplete, no grade, B/C menunggu', rec0.complete===false && rec0.grade===null && rec0.states.join()==='ditanda,menunggu,menunggu');
console.log('DEBUG typedItems', rec0.typedItems);
console.log('DEBUG ids', JSON.stringify(await page.evaluate(()=>{const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {B:r.sections[1].items.map(i=>i.id), C:r.sections[2].items.map(i=>i.id), typed:Object.keys(r.typed)};})));
check('stored child typed working for 11 questions', rec0.typedItems===11);
// ---- parent marks
await page.click('#mock-home'); await wait(400);
await page.click('#btn-parent-dash'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
t = await page.evaluate(()=>document.querySelector('#main-content').innerText);
check('parent dashboard lists paper waiting to be marked', /Kertas Menunggu Tanda/.test(t) && /Tanda sekarang/.test(t));
await page.evaluate(()=>document.querySelector('[data-mark-ts]').scrollIntoView()); await wait(150);
await page.click('[data-mark-ts]'); await wait(500);
t = await page.evaluate(()=>document.getElementById('mark-modal').innerText);
check('marking screen shows child answer and model answer', /jalan kerja anak/.test(t) && /Jawapan model/.test(t));
check('marking screen shows M/A steps', /M1/.test(t) && /A1/.test(t));
await noOverflow('marking screen'); await page.screenshot({path:path.join(OUT,'full_marking.png')});
// tick HALF of the steps of every part (every other checkbox starting with the first)
const boxes = await page.$$('#mark-modal input[data-step]');
for (let i=0;i<boxes.length;i++){ if(i%2===0) await boxes[i].click(); }
await page.evaluate(()=>{ document.querySelectorAll('.mk-part').forEach(el=>{ if(!el.querySelector('input[data-step]:checked')) el.querySelector('.mk-zero-cb').click(); }); });
const totalShown = await page.evaluate(()=>Number(document.getElementById('mk-total').textContent));
await page.click('#mark-save'); await wait(600);
const rec1 = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {complete:r.complete, pct:r.pct, grade:r.grade, states:r.sections.map(s=>s.state), earned:r.sections.map(s=>s.earned)}; });
check('after marking: all sections ditanda and paper complete', rec1.complete===true && rec1.states.join()==='ditanda,ditanda,ditanda');
const sumEarned = rec1.earned.reduce((a,b)=>a+b,0);
check('paper % equals (A + B + C earned) / 100', rec1.pct===Math.round(sumEarned));
console.log('DEBUG totalShown', totalShown, 'earned', JSON.stringify(rec1.earned), 'boxes', boxes.length);
check('marks entered in modal equal B + C earned in the record', totalShown===rec1.earned[1]+rec1.earned[2]);
check('a grade letter is now produced', ['A','B','C','D','E','F'].includes(rec1.grade));
t = await page.evaluate(()=>document.querySelector('#main-content').innerText);
check('paper no longer listed as waiting', !/Kertas Menunggu Tanda/.test(t));
// weakness engine untouched by mock
check('chapter-set history untouched', (await page.evaluate(()=>App.Storage.getState().profiles[0].history.length))===0);
check('no JS errors', errs.length===0); if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL', JSON.stringify(rec1));
await browser.close(); srv.close();
