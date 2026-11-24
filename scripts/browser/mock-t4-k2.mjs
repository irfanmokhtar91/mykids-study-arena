// usage: node scripts/browser/mock-t4-k2.mjs <project-root> <screenshot-dir>
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
const txt=()=>page.evaluate(()=>document.querySelector('#main-content').innerText);
const noOverflow=async(l)=>{ const o=await page.evaluate(()=>({vw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth})); check('no overflow: '+l,o.sw<=o.vw); };
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); App.Storage.createProfile({name:'Nur',gradeId:'t4',avatar:'🦄'}); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('.account-card'); await wait(500);
await page.click('#btn-open-mock'); await wait(400);
const idx = await page.evaluate(()=>[...document.querySelectorAll('.mock-subject')].findIndex(b=>/Matematik/.test(b.innerText)&&!/Tambahan/.test(b.innerText)));
await (await page.$$('.mock-subject'))[idx].click(); await wait(500);
let t = await txt();
check('SPM blueprint is labelled observed (DICERAP)', /DICERAP/.test(t));
check('Kertas 2 lists A 10/10, B 5/5, C 2/2', /Bahagian A[\s\S]*10\/10 soalan/.test(t) && /Bahagian B[\s\S]*5\/5 soalan/.test(t) && /Bahagian C[\s\S]*2\/2 soalan/.test(t));
check('Kertas 2 shows answer 1 of 2 rule', /jawab 1 daripada 2/.test(t));
await noOverflow('T4 paper screen');
await page.click('[data-start="full"][data-paper="k2"]'); await wait(800);
// type working into every structured item of every section; in C answer only the FIRST item
for (const sec of ['A','B','C']) {
  await page.click(`[data-tab="${sec}"]`); await wait(250);
  const n = await page.evaluate(()=>document.querySelectorAll('.mock-dot').length);
  const limit = sec==='C' ? 1 : n;
  for (let i=0;i<limit;i++){ const tas=await page.$$('.mock-work'); for (const ta of tas) await ta.type('kerja'); if(i<limit-1) await page.click('#mock-next'); await wait(60); }
}
await page.click('[data-tab="C"]'); await wait(200);
t = await txt();
check('exam screen tells the student to answer 1 of 2 in Bahagian C', /Jawab 1 daripada 2/.test(t));
await noOverflow('T4 exam screen'); await page.screenshot({path:path.join(OUT,'t4_k2_C.png')});
await page.click('#mock-submit'); await wait(700);
t = await txt();
check('result: no grade while waiting for parent', /Tiada gred keseluruhan/.test(t));
check('result: A, B and C all menunggu', ['A','B','C'].every(s=>new RegExp('Bahagian '+s+'[\\s\\S]*Menunggu ibu bapa').test(t)));
await page.click('#mock-home'); await wait(400);
await page.click('#btn-parent-dash'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
await page.evaluate(()=>document.querySelector('[data-mark-ts]').scrollIntoView()); await wait(150);
await page.click('[data-mark-ts]'); await wait(500);
t = await page.evaluate(()=>document.getElementById('mark-modal').innerText);
check('marking screen explains answer 1 of 2 for Bahagian C', /Murid menjawab 1 daripada 2/.test(t));
check('marking counter shows 0 / 17', /0 \/ 17/.test(await page.evaluate(()=>document.getElementById('mk-reviewed').textContent)));
await noOverflow('T4 marking screen');
// tick every step everywhere, except the SECOND C item which is "tidak dijawab" (0 marks)
await page.evaluate(()=>{
  const secs=[...document.querySelectorAll('.mk-section')];
  secs.forEach((sec,si)=>{ const isC = si===secs.length-1; const parts=[...sec.querySelectorAll('.mk-part')]; const items=[...new Set(parts.map(p=>p.getAttribute('data-item')))];
    parts.forEach(el=>{ const itemIdx=items.indexOf(el.getAttribute('data-item')); if(isC && itemIdx===1){ el.querySelector('.mk-zero-cb').click(); } else { el.querySelectorAll('input[data-step]').forEach(cb=>{ if(!cb.checked) cb.click(); }); } }); });
});
await wait(200);
check('counter shows 17 / 17', /17 \/ 17/.test(await page.evaluate(()=>document.getElementById('mk-reviewed').textContent)));
await page.click('#mark-save'); await wait(700);
const rec = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {complete:r.complete,pct:r.pct,grade:r.grade,earned:r.sections.map(s=>s.earned),states:r.sections.map(s=>s.state)}; });
check('A earned 40, B earned 45, C earned 15 (best 1 of 2)', rec.earned.join()==='40,45,15');
check('paper complete at 100% with SPM grade A+', rec.complete===true && rec.pct===100 && rec.grade==='A+');
check('chapter-set history untouched', (await page.evaluate(()=>App.Storage.getState().profiles[0].history.length))===0);
check('no JS errors', errs.length===0); if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL', JSON.stringify(rec));
await browser.close(); srv.close();
