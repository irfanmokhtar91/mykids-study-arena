import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]);
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,isMobile:true,hasTouch:true});
page.on('pageerror',e=>console.log('PAGEERR',e.message)); page.on('dialog',d=>d.accept());
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage',{polling:100}); await wait(400); };
await page.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); App.Storage.createProfile({name:'Aisyah',gradeId:'d6',avatar:'🦊'}); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
const grade = ()=>page.evaluate(()=>App.Storage.getState().profiles[0].gradeId);
const name = ()=>page.evaluate(()=>App.Storage.getState().profiles[0].name);
const modal = ()=>page.evaluate(()=>!!document.getElementById('pin-modal'));
const results=[]; const check=(n,ok)=>{results.push(ok); console.log(ok?'PASS':'FAIL',n);};
// 1 name-only edit: no modal
await page.click('.account-edit-btn'); await wait(300);
await page.$eval('#acc-name-input',el=>el.value=''); await page.type('#acc-name-input','Aisyah Nur'); await page.click('#btn-save-acc-form'); await wait(300);
check('name-only edit saves without PIN', !(await modal()) && (await name())==='Aisyah Nur');
// 2 grade change: modal, wrong pin
await page.click('.account-edit-btn'); await wait(300); await page.click('.gcard-t2'); await page.click('#btn-save-acc-form'); await wait(300);
check('grade change shows PIN modal', await modal());
check('grade not changed yet', (await grade())==='d6');
await page.type('#pin-modal-input','0000'); await page.click('#pin-modal-ok'); await wait(200);
check('wrong PIN rejected (error shown, grade unchanged)', (await page.evaluate(()=>!document.getElementById('pin-modal-err').classList.contains('hidden'))) && (await grade())==='d6');
await page.type('#pin-modal-input','4827'); await page.click('#pin-modal-ok'); await wait(300);
check('correct PIN applies grade change', (await grade())==='t2' && !(await modal()));
// 3 cancel path
await page.click('.account-edit-btn'); await wait(300); await page.click('.gcard-t4'); await page.click('#btn-save-acc-form'); await wait(300); await page.click('#pin-modal-cancel'); await wait(200);
check('cancel keeps old grade', (await grade())==='t2' && !(await modal()));
// 4 delete needs PIN
await page.click('#btn-delete-acc-form'); await wait(300);
check('delete shows PIN modal and profile still exists', (await modal()) && (await page.evaluate(()=>App.Storage.getState().profiles.length))===1);
await page.type('#pin-modal-input','4827'); await page.click('#pin-modal-ok'); await wait(300);
check('delete with correct PIN removes profile', (await page.evaluate(()=>App.Storage.getState().profiles.length))===0);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL');
await browser.close(); srv.close();
