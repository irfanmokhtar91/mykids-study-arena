import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage&&App.Tasks',{polling:100}); await wait(400); };
const results=[]; const check=(n,ok)=>{results.push(!!ok); console.log(ok?'PASS':'FAIL',n);};
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ window.__opened=[]; window.open=(u)=>{window.__opened.push(u);}; });
await page.evaluate(()=>{
  const S=App.Storage; S.setParentPin('4827'); S.createProfile({name:'Aisyah',gradeId:'d6',avatar:'🦊'});
  const id=S.getState().profiles[0].id;
  const mk=(q,ok,chosen,sec)=>({qObj:{q,options:['a','b','c','d'],correctIndex:2,explanation:''},isCorrect:ok,chosenText:chosen,correctText:'c',elapsedSec:sec});
  const rec=(score,answers)=>S.recordAttempt(id,{gradeId:'d6',subjectId:'math',chapterId:'pecahan_peratus',setNum:1,score,total:5,speedBonus:0,maxStreak:0,mode:'mix',answers});
  rec(1,[mk('A',true,'c',5),mk('B',false,'b',7),mk('C',false,'-',9),mk('D',false,'b',7),mk('E',false,'a',6)]);
  rec(0,[mk('B',false,'b',7),mk('C',false,'a',5),mk('D',false,'a',5),mk('E',false,'a',5),mk('F',false,'a',5)]);
});
// recordAttempt itself should have created the task
const nTasks = await page.evaluate(()=>App.Storage.getState().profiles[0].tasks.length);
check('task auto-created by recordAttempt', nTasks===1);
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('#btn-front-parent'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
const card = await page.evaluate(()=>document.querySelector('.task-card')?.innerText||'');
check('task card renders with diagnosis, steps, target', /Sasaran 70%/.test(card) && /Buat hari ini/.test(card) && /Tanya anak/.test(card));
check('date uses dd/Mon/yyyy', /\d{2}\/[A-Z][a-z]{2}\/\d{4}/.test(card));
const ov = await page.evaluate(()=>({vw:document.documentElement.clientWidth, sw:document.documentElement.scrollWidth}));
check('no horizontal overflow at 360', ov.sw<=ov.vw);
await page.evaluate(()=>document.querySelector('.tasks-box')?.scrollIntoView()); await wait(200);
await page.screenshot({path:path.join(OUT,'task_card_360.png')});
// share
await page.evaluate(()=>{ window.__opened=[]; window.open=(u)=>{window.__opened.push(u);}; });
await page.click('[data-task-action="share"]'); await wait(200);
const opened = await page.evaluate(()=>window.__opened);
check('WhatsApp share opens wa.me with task text', opened.length===1 && opened[0].startsWith('https://wa.me/?text=') && decodeURIComponent(opened[0]).includes('Pecahan'));
// practice launches the right chapter
await page.click('[data-task-action="practice"]'); await wait(500);
const heading = await page.evaluate(()=>document.querySelector('#main-content')?.innerText||'');
check('practice opens the chapter set screen', /Pecahan/.test(heading) && /Laluan Cabaran|Set/.test(heading));
await page.screenshot({path:path.join(OUT,'task_practice_360.png')});
// success: 3 good attempts -> selesai
await page.evaluate(()=>{
  const S=App.Storage; const id=S.getState().profiles[0].id;
  const mk=(q)=>({qObj:{q,options:['a','b','c','d'],correctIndex:2,explanation:''},isCorrect:true,chosenText:'c',correctText:'c',elapsedSec:4});
  for(let i=0;i<3;i++) S.recordAttempt(id,{gradeId:'d6',subjectId:'math',chapterId:'pecahan_peratus',setNum:2+i,score:5,total:5,speedBonus:0,maxStreak:5,mode:'mix',answers:[1,2,3,4,5].map(mk)});
});
const st = await page.evaluate(()=>App.Storage.getState().profiles[0].tasks.map(t=>[t.status,t.result,t.sincePct]));
check('3 good attempts close task as selesai/baik', st.length===1 && st[0][0]==='selesai' && st[0][1]==='baik' && st[0][2]===100);
check('no JS errors', errs.length===0);
if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL');
await browser.close(); srv.close();
