// usage: node scripts/browser/scroll-one-finger.mjs <project-root> [urlOverride]
// Drives REAL one-finger touch events (CDP Input.dispatchTouchEvent) on every long screen and checks the page moves.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]);
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:640,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const cdp = await page.createCDPSession();
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage',{polling:100}); await wait(400); };
const results=[]; const check=(n,ok)=>{results.push(!!ok); console.log(ok?'PASS':'FAIL',n);};
const scrollY=()=>page.evaluate(()=>Math.round(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0));
const docH=()=>page.evaluate(()=>Math.max(document.documentElement.scrollHeight,document.body.scrollHeight));
async function drag(x, y0, y1, steps = 12) {
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0 }] });
  for (let i = 1; i <= steps; i++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + ((y1 - y0) * i) / steps }] }); await wait(16); }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
}
// one finger, drag upwards over the middle of the screen => the page must scroll down
async function oneFingerScroll(label){
  const h = await docH(); const vh = 640;
  if (h <= vh + 40) { console.log('SKIP', label, '(page not taller than the screen)'); return; }
  await page.evaluate(()=>window.scrollTo(0,0)); await wait(100);
  const before = await scrollY();
  await drag(180, 520, 220);
  await wait(500);
  const after = await scrollY();
  check(`one-finger scroll moves the page: ${label} (${before} -> ${after})`, after > before + 50);
}
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); [['Aisyah Nur Balqis','d6','🦊'],['Muhammad Danish Irfan','t2','🐼'],['Nur Sofea Amira','t4','🦄']].forEach(([n,g,a])=>App.Storage.createProfile({name:n,gradeId:g,avatar:a})); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await oneFingerScroll('profile selector');
await (await page.$$('.account-card'))[0].click(); await wait(500);
await oneFingerScroll('kid home');
const subj = await page.$$('.subject-card'); if (subj[0]) { await subj[0].click(); await wait(400); await oneFingerScroll('chapters'); }
const ch = await page.$$('.chapter-card'); if (ch[0]) { await ch[0].click(); await wait(500); await oneFingerScroll('sets (chapter path)'); }
await page.evaluate(()=>{ document.getElementById('btn-parent-dash').click(); }); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
await oneFingerScroll('parent dashboard');
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL');
await browser.close(); srv.close();
