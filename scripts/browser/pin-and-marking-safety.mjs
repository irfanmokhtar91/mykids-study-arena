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
const txt = ()=>page.evaluate(()=>document.querySelector('#main-content').innerText);
const url = `http://localhost:${srv.address().port}/`;

// ===================== PART 1: PIN =====================
await page.goto(url,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.createProfile({name:'Danish',gradeId:'t2',avatar:'🐼'}); });
check('fresh install has NO parent PIN', (await page.evaluate(()=>App.Storage.hasParentPin()))===false);
check('1234 does not verify when no PIN is set', (await page.evaluate(()=>App.Storage.verifyParentPin('1234')))===false);
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('#btn-front-parent'); await wait(400);
let t = await txt();
check('parent panel asks to CREATE a PIN (no default hint)', /Cipta PIN Ibu Bapa/.test(t) && !/1234\)/.test(t) && !/Kod lalai/.test(t));
const tryPin = async (a,b)=>{ await page.$eval('#new-pin-1',e=>e.value=''); await page.$eval('#new-pin-2',e=>e.value=''); await page.type('#new-pin-1',a); await page.type('#new-pin-2',b); await page.click('#btn-create-pin'); await wait(250); return page.evaluate(()=>document.getElementById('pin-create-err')?.textContent||''); };
for (const weak of ['1234','0000','1111','4321','2345','123456','999999']) {
  const msg = await tryPin(weak,weak);
  check(`weak PIN ${weak} rejected`, /terlalu mudah/.test(msg) && (await page.evaluate(()=>App.Storage.hasParentPin()))===false);
}
check('mismatched PINs rejected', /tidak sama/.test(await tryPin('4827','4828')));
check('non-digit/short PIN rejected', /4 hingga 6 digit/.test(await tryPin('12a','12a')));
await tryPin('4827','4827'); await wait(500);
t = await txt();
check('strong PIN accepted and panel opens', (await page.evaluate(()=>App.Storage.hasParentPin()))===true && /Dashboard Ibu Bapa/.test(t));
check('1234 still does not verify', (await page.evaluate(()=>App.Storage.verifyParentPin('1234')))===false);
check('new PIN verifies', (await page.evaluate(()=>App.Storage.verifyParentPin('4827')))===true);
// old default in an existing save is discarded on load
await page.evaluate(()=>{ const k=Object.keys(localStorage).find(x=>/mykids/i.test(x)&&!/mock_session/.test(x)); const st=JSON.parse(localStorage.getItem(k)); st.parentPin='1234'; localStorage.setItem(k,JSON.stringify(st)); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
check('legacy saved PIN 1234 is discarded on load', (await page.evaluate(()=>App.Storage.hasParentPin()))===false);
// grade change blocked until a PIN exists
await page.click('.account-edit-btn'); await wait(300); await page.click('.gcard-t4'); await page.click('#btn-save-acc-form'); await wait(300);
t = await page.evaluate(()=>document.getElementById('pin-modal')?.innerText||'');
check('grade change with no PIN asks parent to create one first', /PIN belum ditetapkan/.test(t));
check('and the grade was NOT changed', (await page.evaluate(()=>App.Storage.getState().profiles[0].gradeId))==='t2');
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); });

// ===================== PART 2: marking safety =====================
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('.account-card'); await wait(500);
await page.click('#btn-open-mock'); await wait(400);
const idx = await page.evaluate(()=>[...document.querySelectorAll('.mock-subject')].findIndex(b=>/Matematik/.test(b.innerText)&&!/Tambahan/.test(b.innerText)));
await (await page.$$('.mock-subject'))[idx].click(); await wait(500);
await page.click('[data-start="full"]'); await wait(800);
for (let i=0;i<20;i++){ await page.click('[data-opt="0"]'); if(i<19) await page.click('#mock-next'); await wait(40); }
await page.click('#mock-submit'); await wait(700);
await page.click('#mock-home'); await wait(400);
await page.click('#btn-parent-dash'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
await page.evaluate(()=>document.querySelector('[data-mark-ts]').scrollIntoView()); await wait(150);
await page.click('[data-mark-ts]'); await wait(500);
check('save disabled while nothing is reviewed', (await page.evaluate(()=>document.getElementById('mark-save').disabled))===true);
t = await page.evaluate(()=>document.getElementById('mk-reviewed').textContent);
check('counter shows 0 / 11 reviewed', /0 \/ 11/.test(t));
// review ONLY Bahagian B: tick the first step of every part inside the first section (B)
await page.evaluate(()=>{ const secB=document.querySelectorAll('.mk-section')[0]; secB.querySelectorAll('.mk-part').forEach(el=>el.querySelector('input[data-step]').click()); });
await wait(200);
t = await page.evaluate(()=>document.getElementById('mk-reviewed').textContent);
check('counter shows 5 / 11 after reviewing only B', /5 \/ 11/.test(t));
check('save enabled once something is reviewed', (await page.evaluate(()=>document.getElementById('mark-save').disabled))===false);
await page.click('#mark-save'); await wait(700);
let rec = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {complete:r.complete, grade:r.grade, pct:r.pct, states:r.sections.map(s=>s.state), marked:Object.keys(r.parentMarks||{}).length}; });
check('only B is marked; C stays menunggu', rec.states.join()==='ditanda,ditanda,menunggu');
check('NO grade and not complete (C untouched is NOT scored as 0)', rec.complete===false && rec.grade===null && rec.pct===null);
check('only the 5 reviewed items are stored', rec.marked===5);
t = await page.evaluate(()=>document.querySelector('#main-content').innerText);
check('paper still listed under Kertas Menunggu Tanda', /Kertas Menunggu Tanda/.test(t));
// reopen: B marks preserved, C pending
await page.evaluate(()=>document.querySelector('[data-mark-ts]').scrollIntoView()); await wait(150);
await page.click('[data-mark-ts]'); await wait(500);
const kept = await page.evaluate(()=>{ const secs=document.querySelectorAll('.mk-section'); return {firstSecChecked: secs[0]?.querySelectorAll('input[data-step]:checked').length}; });
t = await page.evaluate(()=>document.getElementById('mk-reviewed').textContent);
check('modal for remaining shows previous B marks kept (5 / 11 reviewed)', /5 \/ 11/.test(t));
// Review C: explicit 0 marks on every part of the C section via the zero box, except tick one step on the first part
await page.evaluate(()=>{ const sections=document.querySelectorAll('.mk-section'); const secC=sections[sections.length-1]; const parts=[...secC.querySelectorAll('.mk-part')]; parts.forEach((el,i)=>{ if(i===0) el.querySelector('input[data-step]').click(); else el.querySelector('.mk-zero-cb').click(); }); });
await wait(200);
check('ticking a step clears the zero box (and vice versa)', await page.evaluate(()=>{ const el=document.querySelector('.mk-section:last-of-type .mk-part'); return !el.querySelector('.mk-zero-cb').checked; }));
t = await page.evaluate(()=>document.getElementById('mk-reviewed').textContent);
check('counter shows 11 / 11', /11 \/ 11/.test(t));
await page.click('#mark-save'); await wait(700);
rec = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {complete:r.complete, grade:r.grade, pct:r.pct, states:r.sections.map(s=>s.state), earned:r.sections.map(s=>s.earned)}; });
check('after everything is reviewed the paper is complete with a grade', rec.complete===true && rec.states.join()==='ditanda,ditanda,ditanda' && !!rec.grade);
check('pct = (A + B + C)/100', rec.pct===Math.round(rec.earned.reduce((a,b)=>a+b,0)));
check('no JS errors', errs.length===0); if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL', JSON.stringify(rec));
await browser.close(); srv.close();
