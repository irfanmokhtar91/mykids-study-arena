// usage: node scripts/browser/photo-answers.mjs <project-root> <screenshot-dir>
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html'; const f = path.join(ROOT,p);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();} s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const page = await browser.newPage(); await page.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const errs=[]; page.on('pageerror',e=>errs.push(e.message)); page.on('dialog',d=>d.accept());
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const ready=async()=>{ await page.waitForFunction('window.App&&App.Storage&&App.MockUI&&App.PhotoStore&&App.MarkingUI',{polling:100}); await wait(400); };
const results=[]; const check=(n,ok)=>{results.push(!!ok); console.log(ok?'PASS':'FAIL',n);};
const noOverflow=async(l)=>{ const o=await page.evaluate(()=>({vw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth})); check('no overflow: '+l,o.sw<=o.vw); };
const url=`http://localhost:${srv.address().port}/`;
await page.goto(url,{waitUntil:'domcontentloaded'}); await ready();
await page.evaluate(()=>{ App.Storage.setParentPin('4827'); App.Storage.createProfile({name:'Danish',gradeId:'t2',avatar:'🐼'}); });
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('.account-card'); await wait(500);
await page.click('#btn-open-mock'); await wait(400);
const idx = await page.evaluate(()=>[...document.querySelectorAll('.mock-subject')].findIndex(b=>/Matematik/.test(b.innerText)&&!/Tambahan/.test(b.innerText)));
await (await page.$$('.mock-subject'))[idx].click(); await wait(500);
await page.click('[data-start="full"]'); await wait(800);
await page.click('[data-tab="B"]'); await wait(300);
check('every structured question offers camera and gallery buttons', await page.evaluate(()=>!!document.querySelector('input.mock-photo-input[capture]') && document.querySelectorAll('input.mock-photo-input').length>=2));
// ---- build a big synthetic photo of "handwriting on ruled paper" and feed it to the real file input
const attach = (part, label) => page.evaluate(async (part,label)=>{
  const c=document.createElement('canvas'); c.width=3600; c.height=4800; const x=c.getContext('2d');
  x.fillStyle='#fbf8ef'; x.fillRect(0,0,c.width,c.height);
  x.strokeStyle='#9bb3d6'; x.lineWidth=3; for(let y=240;y<c.height;y+=120){ x.beginPath(); x.moveTo(0,y); x.lineTo(c.width,y); x.stroke(); }
  x.fillStyle='#1b1b2f'; x.font='bold 190px cursive'; for(let i=0;i<9;i++){ x.fillText(label+' = '+(i*7+3)+'x² − '+(i+5),160,480+i*420); }
  x.strokeStyle='#1b1b2f'; x.lineWidth=9; for(let i=0;i<260;i++){ x.beginPath(); let px=Math.random()*3400,py=300+Math.random()*4200; x.moveTo(px,py); for(let k=0;k<4;k++){ px+=Math.random()*160-80; py+=Math.random()*120-60; x.lineTo(px,py);} x.stroke(); }
  for(let i=0;i<30000;i++){ x.fillStyle='rgba(0,0,0,'+(Math.random()*0.08)+')'; x.fillRect(Math.random()*c.width,Math.random()*c.height,3,3); }
  const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',0.95)); window.__orig=blob;
  const input=document.querySelectorAll('input.mock-photo-input')[part*2+1]; // gallery button of that part
  const dt=new DataTransfer(); dt.items.add(new File([blob],'jawapan.jpg',{type:'image/jpeg'})); input.files=dt.files; input.dispatchEvent(new Event('change',{bubbles:true}));
  return blob.size;
},part,label);
const origBytes = await attach(0,'f(x)');
check('synthetic photo is realistically large (> 1.5 MB)', origBytes > 1.5*1024*1024);
await page.waitForFunction("document.querySelector('.mock-thumb img')", {timeout:15000});
await wait(400);
const info = await page.evaluate(async ()=>{
  const ids = Object.values(JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k=>/mock_session/.test(k)))).photos)[0]['0'];
  const rec = await App.PhotoStore.get(ids[0]); const bmp = await createImageBitmap(rec.blob); const orig = await createImageBitmap(window.__orig);
  // readability proxy: downscale both to 400px wide and compare brightness per pixel
  const thumb = async (b)=>{ const w=400,h=Math.round(400*b.height/b.width); const c=document.createElement('canvas'); c.width=w; c.height=h; const x=c.getContext('2d'); x.drawImage(b,0,0,w,h); return x.getImageData(0,0,w,h).data; };
  const A=await thumb(bmp), B=await thumb(orig); let d=0; const n=Math.min(A.length,B.length)/4; for(let i=0;i<n;i++){ d+=Math.abs((A[i*4]+A[i*4+1]+A[i*4+2])/3-(B[i*4]+B[i*4+1]+B[i*4+2])/3); }
  return {n:ids.length,type:rec.blob.type,bytes:rec.blob.size,w:bmp.width,h:bmp.height,meanDiff:d/n};
});
check('stored as JPEG', info.type==='image/jpeg');
check(`compressed to <= 400 KB (${Math.round(origBytes/1024)} KB -> ${Math.round(info.bytes/1024)} KB)`, info.bytes <= 400*1024);
check(`longest side capped at 1600 px but kept >= 1280 px (${info.w}x${info.h})`, Math.max(info.w,info.h) <= 1600 && Math.max(info.w,info.h) >= 1280);
check(`readability preserved: mean brightness difference vs original ${info.meanDiff.toFixed(1)}/255 < 12`, info.meanDiff < 12);
check('thumbnail shown with a size label', await page.evaluate(()=>/\d+ KB/.test(document.querySelector('.mock-thumb small')?.textContent||'') && document.querySelector('.mock-thumb img').naturalWidth>0));
check('status explains the compression', /dimampatkan kepada/.test(await page.evaluate(()=>document.querySelector('[data-photo-status="0"]').textContent)));
await noOverflow('exam screen with photo thumbnail'); await page.screenshot({path:path.join(OUT,'photo_exam.png')});
// ---- limit of 3 photos per part
await attach(0,'g(x)'); await wait(700); await attach(0,'h(x)'); await wait(700); await attach(0,'k(x)'); await wait(900);
const n3 = await page.evaluate(()=>document.querySelectorAll('[data-thumbs="0"] .mock-thumb').length);
check('at most 3 photos per question part', n3===3);
check('photo buttons are disabled when the limit is reached', await page.evaluate(()=>[...document.querySelectorAll('.mock-photo-input[data-part="0"]')].every(i=>i.disabled)));
// delete one
await page.click('[data-thumbs="0"] .mock-thumb-del'); await wait(500);
check('a photo can be removed (2 left, buttons enabled again)', await page.evaluate(()=>document.querySelectorAll('[data-thumbs="0"] .mock-thumb').length===2 && [...document.querySelectorAll('.mock-photo-input[data-part="0"]')].every(i=>!i.disabled)));
// ---- persists across a reload (resume)
await page.click('#mock-pause'); await wait(400);
await page.reload({waitUntil:'domcontentloaded'}); await ready();
await page.click('.account-card'); await wait(400); await page.click('#btn-open-mock'); await wait(400);
await page.click('#mock-resume'); await wait(700);
await page.click('[data-tab="B"]'); await wait(500);
check('photos survive closing the browser (resume shows 2 thumbnails)', await page.evaluate(()=>document.querySelectorAll('[data-thumbs="0"] .mock-thumb img').length===2));
// ---- submit, then the parent sees the photos
await page.click('#mock-submit'); await wait(800);
const rec = await page.evaluate(()=>{ const r=App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return {photoItems:Object.keys(r.photos||{}).length, first:Object.values(r.photos||{})[0]}; });
check('result record keeps only photo ids (not image data)', rec.photoItems===1 && Array.isArray(rec.first['0']) && rec.first['0'].length===2 && typeof rec.first['0'][0]==='string');
check('localStorage holds no image data (< 200 KB total)', await page.evaluate(()=>{ let n=0; for(const k of Object.keys(localStorage)) n+=(localStorage.getItem(k)||'').length; return n<200*1024; }));
await page.click('#mock-home'); await wait(400);
await page.click('#btn-parent-dash'); await wait(400);
await page.type('#pin-input','4827'); await page.click('#btn-unlock-pin'); await wait(800);
await page.evaluate(()=>document.querySelector('[data-mark-ts]').scrollIntoView()); await wait(150);
await page.click('[data-mark-ts]'); await wait(900);
const shown = await page.evaluate(()=>({n:document.querySelectorAll('.mk-photo-open img').length, ok:[...document.querySelectorAll('.mk-photo-open img')].every(i=>i.naturalWidth>0)}));
check('parent marking screen shows the 2 photos', shown.n===2 && shown.ok);
await noOverflow('marking screen with photos'); await page.screenshot({path:path.join(OUT,'photo_marking.png')});
await page.click('.mk-photo-open'); await wait(300);
check('tapping a photo opens the full-size viewer', await page.evaluate(()=>!!document.getElementById('photo-viewer') && document.getElementById('pv-img').naturalWidth>0));
await page.click('#pv-zoom'); await wait(150);
check('zoom button enlarges the photo', await page.evaluate(()=>document.getElementById('pv-img').classList.contains('is-zoomed')));
await noOverflow('photo viewer'); await page.click('#pv-close'); await wait(150);
// ---- orphan clean-up keeps referenced photos, deletes the rest
const purge = await page.evaluate(async ()=>{ await App.PhotoStore.put('orphan|x|y|0|1', new Blob([new Uint8Array(1000)],{type:'image/jpeg'}), {}); const before=(await App.PhotoStore.allIds()).length; const removed=await App.PhotoStore.purgeExcept(App.MockUI.keepPhotoIds()); const after=await App.PhotoStore.allIds(); return {before,removed,after:after.length,orphanGone:!after.includes('orphan|x|y|0|1')}; });
check('purge removes the orphan photo and keeps the 2 referenced ones', purge.orphanGone && purge.after===2 && purge.removed>=1);
check('no JS errors', errs.length===0); if(errs.length) console.log(errs);
console.log(results.every(Boolean)?'ALL_PASS':'SOME_FAIL');
await browser.close(); srv.close();
