import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; const WIDTHS = (process.argv[4]||'360,390,430').split(',').map(Number);
fs.mkdirSync(OUT,{recursive:true});
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'};
const srv = http.createServer((q,s)=>{ let p = decodeURIComponent(q.url.split('?')[0]); if(p==='/')p='/index.html';
  const f = path.join(ROOT,p); if(!f.startsWith(ROOT)||!fs.existsSync(f)){s.writeHead(404);return s.end();}
  s.writeHead(200,{'content-type':mime[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(s);}).listen(0);
const port = srv.address().port;
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:'new',args:['--no-sandbox']});
const measure = () => { const vw = document.documentElement.clientWidth; const bad=[];
  document.querySelectorAll('body *').forEach(el=>{ const r=el.getBoundingClientRect(); const cs=getComputedStyle(el);
    if(cs.display==='none'||cs.visibility==='hidden'||r.width===0) return;
    if(r.right>vw+1||r.left<-1){
      let a=el.parentElement, clipped=false; while(a&&a!==document.body){const c=getComputedStyle(a); if(/(hidden|auto|scroll|clip)/.test(c.overflowX)){const ar=a.getBoundingClientRect(); if(ar.right<=vw+1&&ar.left>=-1){clipped=true;break;}} a=a.parentElement;}
      if(!clipped) bad.push((el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+'.'+String(el.className).split(' ').filter(Boolean).join('.')).slice(0,70)+` L${Math.round(r.left)} R${Math.round(r.right)}`);}});
  return {vw, docScroll:document.documentElement.scrollWidth, bad:[...new Set(bad)].slice(0,12)}; };
const results = [];
const wait = (ms)=>new Promise(r=>setTimeout(r,ms));
for (const w of WIDTHS) {
  const page = await browser.newPage(); await page.setViewport({width:w,height:780,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const ready = async ()=>{ await page.waitForFunction('window.App&&App.Storage',{polling:100}); await wait(400); };
  const snap = async (name)=>{ const m = await page.evaluate(measure); results.push({w,name,...m}); await page.screenshot({path:path.join(OUT,`${name}_${w}.png`)}); };
  await page.goto(`http://localhost:${port}/`,{waitUntil:'domcontentloaded'}); await ready();
  await page.evaluate(()=>{ const S=App.Storage; [['Aisyah Nur Balqis','d6','🦊'],['Muhammad Danish Irfan','t2','🐼'],['Nur Sofea Amira Binti Mokhtar','t4','🦄']].forEach(([n,g,a])=>S.createProfile({name:n,gradeId:g,avatar:a})); });
  const enter = async (i)=>{ await page.reload({waitUntil:'domcontentloaded'}); await ready(); const c = await page.$$('.account-card'); await c[i].click(); await wait(400);
    const s = await page.$$('.subject-card'); await s[0].click(); await wait(300); const h = await page.$$('.chapter-card'); await h[0].click(); await wait(400); };
  for (const [i,label] of [[0,'d6'],[1,'t2'],[2,'t4']]) {
    await page.reload({waitUntil:'domcontentloaded'}); await ready();
    const cards = await page.$$('.account-card'); await cards[i].click(); await wait(500);
    const shop = await page.$('#btn-open-shop'); if(shop){ await shop.click(); await wait(400); await snap(`20_shop_${label}`); }
    await enter(i);
    const nModes = (await page.$$('.mode-pill')).length;
    for (let m=0; m<nModes; m++) {
      const mp = await page.$$('.mode-pill'); if(!mp[m]) break; await mp[m].click(); await wait(250);
      const node = await page.$('.path-node'); if(!node) break; await node.click(); await wait(900);
      await snap(`30_play_${label}_m${m}`);
      await enter(i);
    }
  }
  await page.reload({waitUntil:'domcontentloaded'}); await ready();
  await page.click('#btn-front-parent').catch(()=>{}); await wait(400); await snap('40_parent_pin');
  await page.type('#pin-input','4827').catch(()=>{}); await page.click('#btn-unlock-pin').catch(()=>{}); await wait(800); await snap('41_parent_dashboard');
  await page.close();
}
fs.writeFileSync(path.join(OUT,'report.json'),JSON.stringify(results,null,1));
for (const r of results) console.log(`${String(r.w).padEnd(4)} ${r.name.padEnd(22)} doc=${r.docScroll} ${r.docScroll>r.vw?'OVERFLOW':'ok'} bad=${r.bad.length}${r.bad.length?'\n     '+r.bad.join('\n     '):''}`);
await browser.close(); srv.close();
