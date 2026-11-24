// usage: node scripts/browser/mock-weakness-view.mjs <project-root> <screenshot-dir>
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage&&App.Weakness&&App.MarkingUI&&App.Data&&App.Data.structured',{polling:100}); await wait(400); };
const results=[]; const check=(n,ok)=>{results.push(!!ok); console.log(ok?'PASS':'FAIL',n);};
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{
  const S=App.Storage; S.setParentPin('4827'); S.createProfile({name:'Danish',gradeId:'t2',avatar:'🐼'});
  const id=S.getState().profiles[0].id;
  const pool=App.Data.structured.t2_math.ITEMS.filter(i=>i.part==='B').slice(0,5);
  const slim=(it)=>({id:it.id,chapterId:it.chapterId,part:it.part,marks:it.parts.reduce((a,p)=>a+p.marks,0),parts:it.parts.map(p=>({marks:p.marks,steps:p.steps.map(s=>({marks:s.marks}))}))});
  // the child only earned the accuracy (A) steps: all method (M) steps were lost
  const parentMarks={}; let earnedB=0;
  pool.forEach(it=>{ parentMarks[it.id]={}; it.parts.forEach((p,i)=>{ const picks=[]; p.steps.forEach((st,k)=>{ if(st.kind==='A'){ picks.push(k); earnedB+=st.marks; } }); parentMarks[it.id][i]=picks; }); });
  const mk=(ts)=>({ts,gradeId:'t2',subjectId:'math',subjectName:'Matematik',paperId:'k1',mode:'full',paperMarks:100,
    sections:[{id:'A',state:'ditanda',earned:18,possible:20},{id:'B',state:'ditanda',earned:earnedB,possible:20,structured:true,items:pool.map(slim)},{id:'C',state:'menunggu',earned:null,possible:60,structured:true,items:[]}],
    parentMarks,complete:false,pct:null,grade:null,items:[]});
  S.saveMockResult(id,mk(new Date(Date.now()-86400000).toISOString())); S.saveMockResult(id,mk(new Date().toISOString()));
});
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('#btn-front-parent'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
const text = await page.evaluate(()=>document.querySelector('.wk-mock')?.innerText||'NO BLOCK');
console.log(text);
check('block shows the paper and number of attempts', /Matematik/.test(text) && /2 percubaan/.test(text));
check('Bahagian A shown as strong (90%)', /Bahagian A[\s\S]*90%/.test(text));
check('Bahagian B shown as weak (50%)', /Bahagian B[\s\S]*50%/.test(text));
check('Bahagian C (waiting for the parent) is NOT shown as a score', !/Bahagian C[\s\S]{0,40}\d+%/.test(text));
check('method marks lost, accuracy marks kept', /kaedah \(M\) 20, jawapan tepat \(A\) 0/.test(text));
check('advice: show working steps', /langkah kerja/.test(text));
check('advice: strong objective but weak structured', /mahir soalan objektif/.test(text));
check('advice: weakest part named', /Bahagian B paling lemah/.test(text));
const ov = await page.evaluate(()=>({vw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth}));
check('no overflow at 360', ov.sw<=ov.vw);
await page.evaluate(()=>document.querySelector('.wk-mock').scrollIntoView()); await wait(200);
await page.screenshot({path:path.join(OUT,'mock_weakness.png')});
check('no JS errors', errs.length===0); if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL');
await browser.close(); srv.close();
