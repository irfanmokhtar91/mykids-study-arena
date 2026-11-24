import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage&&App.Weakness',{polling:100}); await wait(400); };
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{
  const S=App.Storage; S.setParentPin('4827'); S.createProfile({name:'Aisyah',gradeId:'d6',avatar:'🦊'});
  const id=S.getState().profiles[0].id;
  const mk=(q,ok,chosen,sec)=>({qObj:{q,options:['a','b','c','d'],correctIndex:2,explanation:''},isCorrect:ok,chosenText:chosen,correctText:'c',elapsedSec:sec});
  const rec=(ch,score,answers)=>S.recordAttempt(id,{gradeId:'d6',subjectId:'math',chapterId:ch,setNum:1,score,total:5,speedBonus:0,maxStreak:0,mode:'mix',answers});
  // weak chapter: 3 attempts, 1/5, 0/5, 2/5 -> 3/15 = 20%
  rec('pecahan_peratus',1,[mk('1/2 + 1/4?',true,'c',5),mk('0.5 = ?%',false,'b',2),mk('Q3',false,'-',9),mk('Q4',false,'b',7),mk('Q5',false,'a',6)]);
  rec('pecahan_peratus',0,[mk('0.5 = ?%',false,'b',3),mk('Q2',false,'a',5),mk('Q3',false,'a',5),mk('Q4',false,'a',5),mk('Q5',false,'a',5)]);
  rec('pecahan_peratus',2,[mk('Q1',true,'c',4),mk('Q2',true,'c',4),mk('Q3',false,'a',4),mk('Q4',false,'a',4),mk('Q5',false,'a',4)]);
  // strong chapter
  rec('wang',5,[1,2,3,4,5].map(i=>mk('W'+i,true,'c',3)));
  rec('wang',5,[1,2,3,4,5].map(i=>mk('W'+i,true,'c',3)));
});
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('#btn-front-parent'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
const text = await page.evaluate(()=>document.querySelector('.weak-box')?.innerText||'NO WEAK BOX');
console.log(text);
const ov = await page.evaluate(()=>({vw:document.documentElement.clientWidth, sw:document.documentElement.scrollWidth}));
console.log('overflow check', JSON.stringify(ov));
await page.screenshot({path:path.join(OUT,'wk_parent_360.png'),fullPage:false});
await page.evaluate(()=>document.querySelector('.weak-box')?.scrollIntoView());
await page.screenshot({path:path.join(OUT,'wk_box_360.png')});
console.log('pageerrors', JSON.stringify(errs));
await browser.close(); srv.close();
