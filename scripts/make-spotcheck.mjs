// usage: node scripts/make-spotcheck.mjs <d6|t2|t4> [perSubject=8] [seed=1]  -> docs/spotcheck/<grade>.html
// Random sample of the app's hand-written questions (static + fact-table) so a parent or any teacher can check them against a textbook.
import fs from "node:fs";
import vm from "node:vm";

const grade = process.argv[2];
const per = Number(process.argv[3] || 8);
let seed = Number(process.argv[4] || 1) * 2654435761;
if (!["d6", "t2", "t4"].includes(grade)) { console.error("usage: node scripts/make-spotcheck.mjs <d6|t2|t4> [perSubject] [seed]"); process.exit(1); }
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const shuffle = (a) => { const c = a.slice(); for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ctx = { window: null }; ctx.window = ctx; ctx.global = ctx; vm.createContext(ctx);
for (const f of ["js/syllabus.js", "js/data/d6.js", "js/data/t2.js", "js/data/t4.js", "js/data/t4_extra.js", "js/data/fact_tables.js", "js/data/structured_t2_math.js", "js/data/structured_t4_math.js"]) vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
const App = ctx.App;
const G = App.GRADES[grade];

let n = 0;
const sections = G.subjects.map((sub) => {
  const pool = [];
  const chIds = new Set([...Object.keys((App.Data[grade] || {})[sub.id] || {}), ...Object.keys(((App.FactTables || {})[grade] || {})[sub.id] || {})]);
  chIds.forEach((cid) => {
    const chap = sub.chapters.find((c) => c.id === cid);
    [(((App.Data[grade] || {})[sub.id] || {})[cid]) || [], (((App.FactTables || {})[grade] || {})[sub.id] || {})[cid] || []].forEach((arr) =>
      arr.forEach((q) => pool.push({ q, chapter: chap ? chap.title : cid }))
    );
  });
  const pick = shuffle(pool).slice(0, per);
  const items = pick.map((it) => {
    n++;
    const opts = it.q.options.map((o, k) => `<li class="${k === it.q.correctIndex ? "key" : ""}">${"ABCD"[k]}) ${esc(o)}${k === it.q.correctIndex ? " ✅" : ""}</li>`).join("");
    return `<div class="q"><div class="meta">#${n} • ${esc(it.chapter)}</div><p class="qt">${esc(it.q.q)}</p><ul>${opts}</ul><p class="exp">Penerangan dalam aplikasi: ${esc(it.q.explanation || "-")}</p><p class="chk">Semakan: ☐ Betul &nbsp; ☐ Salah &nbsp; ☐ Tidak pasti &nbsp; ☐ Bukan dalam silibus<br>Catatan: __________________________</p></div>`;
  });
  return pool.length ? `<h2>${esc(sub.icon || "")} ${esc(sub.name)} <small>(${pool.length} soalan dalam bank; sampel ${items.length})</small></h2>${items.join("")}` : "";
});

// structured items (Matematik) if any
const structKey = grade === "t2" ? "t2_math" : grade === "t4" ? "t4_math" : null;
let structured = "";
if (structKey && App.Data.structured && App.Data.structured[structKey]) {
  const items = shuffle(App.Data.structured[structKey].ITEMS).slice(0, 4);
  structured = `<h2>📐 Matematik (soalan berstruktur) <small>sampel ${items.length}</small></h2>` + items.map((it) => {
    n++;
    return `<div class="q"><div class="meta">#${n} • ${esc(it.id)} • Bahagian ${esc(it.part)}</div>${it.stem ? `<p class="qt">${esc(it.stem).replace(/\n/g, "<br>")}</p>` : ""}${it.parts.map((p) => `<p class="qt">${esc(p.label)} ${esc(p.q).replace(/\n/g, "<br>")}</p><p class="exp">Jawapan model: <b>${esc(p.answer)}</b><br>${p.steps.map((s) => `${s.kind}1: ${esc(s.text)}`).join("<br>")}</p>`).join("")}<p class="chk">Semakan: ☐ Betul &nbsp; ☐ Salah &nbsp; ☐ Tidak pasti &nbsp; ☐ Bukan dalam silibus<br>Catatan: __________________________</p></div>`;
  }).join("");
}

const html = `<!doctype html><html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lembaran Semakan Soalan: ${esc(G.name)}</title>
<style>body{font-family:system-ui,Arial,sans-serif;max-width:760px;margin:0 auto;padding:14px;line-height:1.4;color:#18181b}h1{font-size:1.3rem}h2{margin-top:26px;border-bottom:2px solid #18181b;padding-bottom:4px}small{font-weight:400;color:#52525b}.q{border:1.5px solid #18181b;border-radius:10px;padding:10px;margin:10px 0;break-inside:avoid}.meta{font-size:.8rem;color:#52525b}.qt{font-weight:700;margin:6px 0}ul{list-style:none;padding-left:0;margin:6px 0}li{padding:2px 0}li.key{font-weight:700;color:#166534}.exp{font-size:.88rem;color:#3f3f46}.chk{font-size:.9rem;margin-bottom:0}.how{background:#fefce8;border:1.5px solid #ca8a04;border-radius:10px;padding:10px}@media print{.how{border-color:#000}}</style></head><body>
<h1>Lembaran Semakan Soalan: ${esc(G.name)} (${esc(G.subtitle)})</h1>
<div class="how"><b>Cara menyemak (kira-kira 15 minit):</b><ol><li>Buka buku teks atau buku latihan anak untuk bab yang berkenaan.</li><li>Untuk setiap soalan, bandingkan jawapan bertanda ✅ dengan buku teks. Tandakan Betul / Salah / Tidak pasti / Bukan dalam silibus.</li><li>Ambil gambar helaian yang ditanda dan hantar kepada pembangun, atau hantar soalan yang ragu kepada guru melalui WhatsApp (butang "Laporkan" dalam aplikasi).</li></ol>Semua soalan di sini dipilih secara rawak daripada bank soalan buatan tangan. Soalan yang dijana oleh formula (nombor, pecahan, wang) tidak disenaraikan kerana jawapannya dikira oleh kod.</div>
${sections.join("")}${structured}
</body></html>`;
fs.mkdirSync("docs/spotcheck", { recursive: true });
const out = `docs/spotcheck/${grade}.html`;
fs.writeFileSync(out, html, "utf8");
console.log(`${out}: ${n} questions`);
