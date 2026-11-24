// usage: node phase2-e2e.mjs <project-root> <screenshot-dir>   (needs puppeteer-core; run a copy from a folder that has node_modules)
// Full Phase 2 loop on one machine: child phone links to a parent (QR/code) -> syncs data + photos -> parent signs in (fake Google key),
// sees weakness data and the answer photos, marks the paper -> marks flow back to the child phone -> parent deletes the child.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { pathToFileURL } from 'node:url'; import puppeteer from 'puppeteer-core';
const ROOT = path.resolve(process.argv[2]); const OUT = process.argv[3]; fs.mkdirSync(OUT, { recursive: true });
const imp = (p) => import(pathToFileURL(path.join(ROOT, p)).href);
const { createApp } = await imp('worker/src/core.js'); const { MemoryStore } = await imp('worker/test/memory-store.js');
const { signSession, b64urlEncode, textToB64url } = await imp('worker/src/crypto.js');

// ---------- fake Google + local API (in-memory store, same code as the Worker)
const kp = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
const pub = await crypto.subtle.exportKey('jwk', kp.publicKey);
const CLIENT_ID = 'e2e-client.apps.googleusercontent.com';
const fetchImpl = async (u) => (String(u).includes('certs') ? new Response(JSON.stringify({ keys: [{ ...pub, kid: 'k1', alg: 'RS256', use: 'sig' }] }), { status: 200 }) : new Response('no', { status: 404 }));
const idToken = async () => { const h = textToB64url(JSON.stringify({ alg: 'RS256', kid: 'k1', typ: 'JWT' })); const p = textToB64url(JSON.stringify({ iss: 'https://accounts.google.com', aud: CLIENT_ID, sub: 'g-e2e', email: 'mama@example.com', email_verified: true, name: 'Mama', exp: Math.floor(Date.now() / 1000) + 3600 })); const s = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', kp.privateKey, new TextEncoder().encode(`${h}.${p}`)); return `${h}.${p}.${b64urlEncode(s)}`; };
const store = new MemoryStore();
const app = createApp({ store, env: { GOOGLE_CLIENT_ID: CLIENT_ID, SESSION_SECRET: 'e2e-secret-e2e-secret-e2e-secret', ALLOWED_ORIGINS: 'http://localhost:8080' }, fetchImpl });
const api = http.createServer(async (q, s) => {
  const chunks = []; for await (const c of q) chunks.push(c); const body = Buffer.concat(chunks);
  const headers = {}; for (const [k, v] of Object.entries(q.headers)) headers[k] = v;
  const res = await app.handle(new Request(`http://localhost:8799${q.url}`, { method: q.method, headers, body: ['GET', 'HEAD'].includes(q.method) ? undefined : body }));
  const out = {}; res.headers.forEach((v, k) => (out[k] = v)); s.writeHead(res.status, out); s.end(Buffer.from(await res.arrayBuffer()));
}).listen(8799);
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };
const srv = http.createServer((q, s) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html'; const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { s.writeHead(404); return s.end(); } s.writeHead(200, { 'content-type': mime[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(s); }).listen(8080);

const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new', args: ['--no-sandbox'] });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const results = []; const check = (n, ok) => { results.push(!!ok); console.log(ok ? 'PASS' : 'FAIL', n); };
const errs = [];
const newPage = async (ctx, w = 360, h = 780) => { const pg = await ctx.newPage(); await pg.setViewport({ width: w, height: h, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  pg.on('pageerror', (e) => errs.push(e.message)); pg.on('dialog', (d) => d.accept());
  await pg.evaluateOnNewDocument(() => { try { localStorage.setItem('mykids_cloud_api_override', 'http://localhost:8799'); } catch (e) { /* ignore */ } }); return pg; };

// ================= CHILD PHONE
const childCtx = await browser.createBrowserContext();
const child = await newPage(childCtx);
const ready = async () => { await child.waitForFunction('window.App&&App.Storage&&App.MockUI&&App.PhotoStore&&App.Cloud&&App.CloudUi', { polling: 100 }); await wait(400); };
await child.goto('http://localhost:8080/', { waitUntil: 'domcontentloaded' }); await ready();
await child.evaluate(() => { App.Storage.setParentPin('4827'); App.Storage.createProfile({ name: 'Danish', gradeId: 't2', avatar: '🐼' }); });
await child.reload({ waitUntil: 'domcontentloaded' }); await ready();
// a structured Math paper with a photo answer
await child.click('.account-card'); await wait(500); await child.click('#btn-open-mock'); await wait(400);
const idx = await child.evaluate(() => [...document.querySelectorAll('.mock-subject')].findIndex((b) => /Matematik/.test(b.innerText) && !/Tambahan/.test(b.innerText)));
await (await child.$$('.mock-subject'))[idx].click(); await wait(500);
await child.click('[data-start="full"]'); await wait(800); await child.click('[data-tab="B"]'); await wait(300);
await child.evaluate(async () => { const c = document.createElement('canvas'); c.width = 1800; c.height = 2400; const x = c.getContext('2d'); x.fillStyle = '#fbf8ef'; x.fillRect(0, 0, 1800, 2400); x.fillStyle = '#1b1b2f'; x.font = 'bold 120px cursive'; x.fillText('3x + 5 = 20', 100, 300); x.fillText('x = 5', 100, 500);
  const blob = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.9)); const input = document.querySelectorAll('input.mock-photo-input')[1]; const dt = new DataTransfer(); dt.items.add(new File([blob], 'a.jpg', { type: 'image/jpeg' })); input.files = dt.files; input.dispatchEvent(new Event('change', { bubbles: true })); });
await child.waitForFunction("document.querySelector('.mock-thumb img')", { timeout: 15000 }); await wait(500);
await child.click('#mock-submit'); await wait(900); await child.click('#mock-home'); await wait(400);
check('child has a pending structured paper with 1 photo', await child.evaluate(() => { const r = App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return r.sections.some((s) => s.state === 'menunggu') && JSON.stringify(r.photos).includes('"0":['); }));
await child.click('#btn-parent-dash'); await wait(400); await child.type('#pin-input', '4827'); await child.click('#btn-unlock-pin'); await wait(900);
check('parent panel on the child phone shows the new link card', await child.evaluate(() => /Pantauan Ibu Bapa/.test(document.body.innerText) && !!document.querySelector('[data-cloud-link]')));
await child.evaluate(() => document.querySelector('[data-cloud-link]').scrollIntoView()); await wait(150);
await child.click('[data-cloud-link]'); await child.waitForSelector('.pair-code', { timeout: 15000 });
const code = await child.evaluate(() => document.querySelector('.pair-code').textContent.trim());
check('pairing modal shows an 8-character code and a real QR (svg)', /^[A-Z0-9]{8}$/.test(code) && await child.evaluate(() => !!document.querySelector('.pair-qr svg rect, .pair-qr svg path, .pair-qr svg')));
check('pairing link points at the parent page', await child.evaluate((c) => document.querySelector('.pair-modal').innerText.includes('/parent/?pair=' + c), code));
await child.screenshot({ path: path.join(OUT, 'pair_modal.png') });

// ================= PARENT PHONE (separate browser profile)
const parentCtx = await browser.createBrowserContext();
const parent = await newPage(parentCtx, 400, 820);
await parent.goto(`http://localhost:8080/parent/?pair=${code}`, { waitUntil: 'domcontentloaded' });
await parent.waitForFunction('window.__signInWithIdToken', { timeout: 15000 }); await wait(500);
check('signed-out parent sees the Google sign-in page and the pending code', await parent.evaluate((c) => document.body.innerText.includes(c) && /Log masuk/.test(document.body.innerText), code));
const tok = await idToken();
await parent.evaluate(async (t) => { await window.__signInWithIdToken(t); }, tok);
await parent.reload({ waitUntil: 'domcontentloaded' });
await parent.waitForFunction("document.querySelector('[data-open]')", { timeout: 15000 });
check('after sign-in the code is claimed and the child is listed', await parent.evaluate(() => /Danish/.test(document.body.innerText)));
await parent.screenshot({ path: path.join(OUT, 'parent_home.png') });

// child phone notices the claim and links itself
await child.waitForFunction(() => { const l = JSON.parse(localStorage.getItem('mykids_cloud_v2') || '{}'); return Object.values(l).some((x) => x.deviceToken); }, { timeout: 20000, polling: 500 });
check('child phone received its device token after the parent claimed the code', true);
await child.waitForFunction(() => { const l = JSON.parse(localStorage.getItem('mykids_cloud_v2') || '{}'); return Object.values(l).some((x) => x.lastSyncAt); }, { timeout: 25000, polling: 500 });
const lk = await child.evaluate(() => Object.values(JSON.parse(localStorage.getItem('mykids_cloud_v2')))[0]);
check('first sync done and the photo was uploaded', lk.lastSyncAt > 0 && (lk.uploaded || []).length === 1 && !lk.lastError);

// parent views the child
await parent.click('[data-open]'); await parent.waitForSelector('[data-mark-ts]', { timeout: 15000 });
check('parent sees the child dashboard with a paper waiting to be marked', await parent.evaluate(() => /Menunggu Tanda/.test(document.body.innerText)));
const ov = await parent.evaluate(() => ({ vw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth })); check('parent page has no horizontal overflow', ov.sw <= ov.vw);
await parent.screenshot({ path: path.join(OUT, 'parent_child.png') });
await parent.click('[data-mark-ts]'); await parent.waitForSelector('.mk-part', { timeout: 10000 }); await wait(1200);
const shown = await parent.evaluate(() => ({ n: document.querySelectorAll('.mk-photo-open img').length, ok: [...document.querySelectorAll('.mk-photo-open img')].every((i) => i.naturalWidth > 0) }));
check('parent sees the answer photo loaded from the server', shown.n === 1 && shown.ok);
// review every part: tick the first step of each part where possible, "0 markah" for part with no steps
await parent.evaluate(() => { document.querySelectorAll('.mk-part').forEach((el) => { const cb = el.querySelector('input[data-step]'); if (cb) { cb.checked = true; cb.dispatchEvent(new Event('change', { bubbles: true })); } else { const z = el.querySelector('.mk-zero-cb'); z.checked = true; z.dispatchEvent(new Event('change', { bubbles: true })); } }); });
await parent.screenshot({ path: path.join(OUT, 'parent_marking.png') });
await parent.click('#mark-save'); await wait(1200);
check('marks saved to the server', await parent.evaluate(() => /Markah disimpan/.test(document.body.innerText)));
check('server holds the parent marks', store.marks.size === 1);

// marks reach the child phone
const before = await child.evaluate(() => { const r = App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return { pending: r.sections.filter((s) => s.state === 'menunggu').length, marks: !!r.parentMarks && Object.keys(r.parentMarks).length }; });
await child.evaluate(() => document.querySelector('[data-cloud-sync]').scrollIntoView()); await child.click('[data-cloud-sync]'); await wait(2500);
const after = await child.evaluate(() => { const r = App.Storage.getMockResults(App.Storage.getState().profiles[0].id)[0]; return { pending: r.sections.filter((s) => s.state === 'menunggu').length, marks: !!r.parentMarks && Object.keys(r.parentMarks).length }; });
check(`marks applied on the child phone (pending ${before.pending} -> ${after.pending})`, before.pending > 0 && after.pending < before.pending && after.marks > 0);

// privacy: child device cannot read parent data; no token = no access
const noAuth = await parent.evaluate(async () => (await fetch('http://localhost:8799/api/parent/children')).status); check('parent API refuses calls without a login', noAuth === 401);

// delete
await parent.click('#p-back'); await parent.waitForSelector('[data-open]'); await parent.click('[data-open]'); await parent.waitForSelector('#p-remove');
await parent.click('#p-remove'); await wait(1200);
check('last parent removing the child deletes all child data on the server', store.children.size === 0 && store.photos.size === 0 && store.marks.size === 0);
check('no JS errors on any page', errs.length === 0); if (errs.length) console.log(errs);
console.log(results.every(Boolean) ? 'ALL_PASS' : 'SOME_FAIL');
await browser.close(); srv.close(); api.close(); process.exit(0);
