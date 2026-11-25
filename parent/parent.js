/** Parent app: Google sign-in, link children with a code/QR, view weaknesses, tasks and answer photos, mark structured answers. */
(function (global) {
  const App = global.App;
  const SESSION_KEY = "mykids_parent_session";
  const root = document.getElementById("app");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (v) => {
    const d = new Date(v);
    return isNaN(d) ? "-" : `${String(d.getDate()).padStart(2, "0")}/${MON[d.getMonth()]}/${d.getFullYear()}`;
  };
  const api0 = () => App.getCloudApiUrl();
  let session = null;
  let msg = { text: "", err: false };
  let childData = null;
  const photoCache = {};

  const loadSession = () => {
    try {
      session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch (e) {
      session = null;
    }
  };
  const saveSession = (s) => {
    session = s;
    try {
      if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) {
      /* ignore */
    }
  };
  const setMsg = (text, err) => {
    msg = { text, err: !!err };
  };
  const msgHtml = () => (msg.text ? `<p class="p-msg ${msg.err ? "p-err" : ""}">${esc(msg.text)}</p>` : "");

  async function api(path, opts) {
    const o = opts || {};
    const h = {};
    if (session && session.token) h.authorization = `Bearer ${session.token}`;
    if (o.body !== undefined) h["content-type"] = "application/json";
    let res;
    try {
      res = await fetch(api0() + path, { method: o.method || "GET", headers: h, body: o.body !== undefined ? JSON.stringify(o.body) : undefined });
    } catch (e) {
      throw new Error("Tiada sambungan internet");
    }
    let data = null;
    try {
      data = await res.json();
    } catch (e) {
      /* none */
    }
    if (res.status === 401 && session) saveSession(null);
    if (!res.ok) throw Object.assign(new Error((data && data.error) || `Ralat ${res.status}`), { status: res.status });
    return data;
  }

  // Photos come from the server with the parent's login; the marking screen asks for them by id.
  App.PhotoStore = {
    async getURL(id) {
      if (!childData || !session) return null;
      const key = `${childData.id}|${id}`;
      if (photoCache[key]) return photoCache[key];
      try {
        const res = await fetch(`${api0()}/api/parent/photo/${encodeURIComponent(childData.id)}/${encodeURIComponent(id)}`, { headers: { authorization: `Bearer ${session.token}` } });
        if (!res.ok) return null;
        photoCache[key] = URL.createObjectURL(await res.blob());
        return photoCache[key];
      } catch (e) {
        return null;
      }
    }
  };

  async function signInWithIdToken(idToken) {
    const r = await api("/api/auth/google", { method: "POST", body: { idToken } });
    saveSession({ token: r.session, name: r.parent.name, email: r.parent.email });
    return r;
  }
  global.__signInWithIdToken = signInWithIdToken; // used by the automated test with a locally signed token

  const pairCodeFromUrl = () => {
    const c = new URLSearchParams(location.search).get("pair");
    return c ? c.toUpperCase().replace(/[^A-Z0-9]/g, "") : "";
  };
  const pendingPair = () => sessionStorage.getItem("mykids_pending_pair") || "";

  async function claim(code) {
    code = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (code.length < 6) return setMsg("Kod tidak lengkap.", true);
    try {
      const r = await api("/api/pair/claim", { method: "POST", body: { code } });
      sessionStorage.removeItem("mykids_pending_pair");
      history.replaceState(null, "", location.pathname);
      setMsg(`✅ ${r.displayName} berjaya dihubungkan.`);
    } catch (e) {
      setMsg(e.message, true);
    }
  }

  function loginView() {
    const code = pairCodeFromUrl() || pendingPair();
    if (code) sessionStorage.setItem("mykids_pending_pair", code);
    root.innerHTML = `<div class="p-card"><h2>👨‍👩‍👧‍👦 Ibu Bapa • MyKids Study Arena</h2>
      <p>Log masuk dengan akaun Google anda untuk melihat kelemahan anak, tugasan dan gambar jawapan, serta menanda kertas.</p>
      ${code ? `<p class="p-msg">Kod penghubung <strong>${esc(code)}</strong> akan digunakan selepas log masuk.</p>` : ""}
      ${msgHtml()}
      <div id="g-btn"></div>
      <p><small>Hanya nama, gred, keputusan latihan dan gambar jawapan anak disimpan, dan hanya dapat dilihat oleh ibu bapa yang dihubungkan. Anda boleh memadam semuanya pada bila-bila masa.</small></p></div>`;
    const init = () => {
      if (!global.google || !global.google.accounts || !App.GOOGLE_CLIENT_ID) return false;
      global.google.accounts.id.initialize({
        client_id: App.GOOGLE_CLIENT_ID,
        callback: async (resp) => {
          try {
            await signInWithIdToken(resp.credential);
            setMsg("");
            await afterLogin();
          } catch (e) {
            setMsg(e.message, true);
            loginView();
          }
        }
      });
      global.google.accounts.id.renderButton(document.getElementById("g-btn"), { theme: "outline", size: "large", text: "signin_with", shape: "pill" });
      return true;
    };
    if (!init()) {
      let tries = 0;
      const t = setInterval(() => {
        if (init() || ++tries > 40) clearInterval(t);
      }, 250);
    }
  }

  async function afterLogin() {
    const code = pairCodeFromUrl() || pendingPair();
    if (code) await claim(code);
    return homeView();
  }

  async function homeView() {
    childData = null;
    let kids = [];
    try {
      kids = (await api("/api/parent/children")).children;
    } catch (e) {
      if (!session) return loginView();
      setMsg(e.message, true);
    }
    const gradeName = (id) => (App.GRADES && App.GRADES[id] ? App.GRADES[id].name : id);
    root.innerHTML = `<div class="p-bar"><strong>👋 ${esc(session.name || session.email || "")}</strong><span><button class="btn-ghost btn-sm" id="p-logout">Log keluar</button></span></div>
      ${msgHtml()}
      <div class="p-card"><h3>Anak-anak</h3>
        ${
          kids.length
            ? kids
                .map(
                  (k) =>
                    `<div class="p-kid"><div><strong>${esc(k.displayName)}</strong><br><small>${esc(gradeName(k.gradeId))}${k.snapshotUpdatedAt ? ` • dikemas kini ${fmtDate(k.snapshotUpdatedAt)}` : " • belum segerak"}</small></div><button class="btn-tactile btn-true btn-sm" data-open="${esc(k.id)}">Buka</button></div>`
                )
                .join("<hr>")
            : "<p>Belum ada anak dihubungkan.</p>"
        }
      </div>
      <div class="p-card"><h3>➕ Hubungkan anak</h3>
        <p>Pada telefon anak: Panel Ibu Bapa → Hubungkan Ibu Bapa. Imbas kod QR, atau taip kod 8 aksara di sini.</p>
        <input class="p-input" id="p-code" maxlength="10" placeholder="KOD" autocomplete="off" />
        <p><button class="btn-tactile btn-true" id="p-claim">Hubungkan</button></p></div>
      <div class="p-card"><button class="btn-ghost btn-sm" id="p-delete-account">🗑️ Padam akaun saya dan semua data</button></div>`;
    document.getElementById("p-logout").addEventListener("click", () => {
      saveSession(null);
      setMsg("");
      loginView();
    });
    root.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => childView(b.getAttribute("data-open"))));
    document.getElementById("p-claim").addEventListener("click", async () => {
      await claim(document.getElementById("p-code").value);
      homeView();
    });
    document.getElementById("p-delete-account").addEventListener("click", async () => {
      if (!confirm("Padam akaun anda dan semua data anak yang tiada ibu bapa lain? Tindakan ini tidak boleh dibatalkan.")) return;
      try {
        await api("/api/parent/account", { method: "DELETE" });
        saveSession(null);
        setMsg("Akaun dipadam.");
        loginView();
      } catch (e) {
        setMsg(e.message, true);
        homeView();
      }
    });
  }

  function mergeMarks(profile, marks) {
    (marks || []).forEach((m) => {
      const rec = (profile.mockResults || []).find((r) => r.ts === m.recordTs);
      if (rec) Object.assign(rec, App.MockExam.rescoreRecord(rec, m.parentMarks));
    });
  }

  async function childView(id) {
    let r;
    let diagServer = null;
    try {
      [r, diagServer] = await Promise.all([
        api(`/api/parent/child/${encodeURIComponent(id)}`),
        api(`/api/parent/child/${encodeURIComponent(id)}/diagnostics`).catch(() => null)
      ]);
    } catch (e) {
      setMsg(e.message, true);
      return homeView();
    }
    childData = r.child;
    const p = r.child.snapshot && r.child.snapshot.profile;
    const diagSources = App.DiagnosticReport.mergeDiagnosticSources({
      studentId: id,
      gradeId: r.child.gradeId,
      profile: p,
      serverDiagnostics: diagServer,
      diagnosticBanks: App.DiagnosticBanks
    });
    const back = `<div class="p-bar"><button class="btn-ghost btn-sm" id="p-back">← Kembali</button><button class="btn-ghost btn-sm" id="p-refresh">🔄</button></div>`;
    if (!p) {
      const diagOnly = diagSources.attempts.length
        ? App.DiagnosticReport.renderCardHtml(
            App.DiagnosticReport.buildReportData({
              studentId: id,
              studentName: r.child.displayName,
              gradeId: r.child.gradeId,
              sessions: diagSources.sessions,
              attempts: diagSources.attempts,
              syllabusNodes: diagSources.syllabusNodes
            })
          )
        : "";
      root.innerHTML = `${back}<div class="p-card"><h3>${esc(r.child.displayName)}</h3><p>Telefon anak belum menghantar data. Buka aplikasi di telefon anak dan tekan Segerak dalam Panel Ibu Bapa.</p></div>${diagOnly}`;
    } else {
      mergeMarks(p, r.marks);
      root.innerHTML = `${back}${msgHtml()}${kidHtml(r.child, p, diagSources)}
        <div class="p-card"><button class="btn-ghost btn-sm" id="p-remove">Putuskan dan padam anak ini daripada akaun saya</button></div>`;
      root.querySelectorAll("[data-mark-ts]").forEach((b) =>
        b.addEventListener("click", () => {
          const rec = (p.mockResults || []).find((x) => x.ts === b.getAttribute("data-mark-ts"));
          if (!rec) return;
          App.MarkingUI.open(p, rec, async (updated) => {
            try {
              await api("/api/parent/marks", { method: "POST", body: { childId: id, recordTs: rec.ts, parentMarks: updated.parentMarks } });
              setMsg("✅ Markah disimpan. Ia akan sampai ke telefon anak apabila ia disegerakkan.");
            } catch (e) {
              setMsg(e.message, true);
            }
            childView(id);
          });
        })
      );
      root.querySelectorAll("[data-wa]").forEach((b) => b.addEventListener("click", () => window.open(`https://wa.me/?text=${encodeURIComponent(b.getAttribute("data-wa"))}`, "_blank")));
    }
    App.DiagnosticReport.bindActions(root);
    document.getElementById("p-back").addEventListener("click", () => {
      setMsg("");
      homeView();
    });
    document.getElementById("p-refresh").addEventListener("click", () => childView(id));
    const rm = document.getElementById("p-remove");
    if (rm)
      rm.addEventListener("click", async () => {
        if (!confirm("Putuskan anak ini? Jika anda ibu bapa terakhir, semua data anak dipadam dari pelayan.")) return;
        try {
          await api(`/api/parent/child/${encodeURIComponent(id)}`, { method: "DELETE" });
          setMsg("Dipadam.");
        } catch (e) {
          setMsg(e.message, true);
        }
        homeView();
      });
  }

  function kidHtml(child, p, diagSources) {
    const W = App.Weakness;
    const T = App.Tasks;
    const diagInfo = App.DiagnosticReport.buildReportData({
      studentId: child.id,
      studentName: child.displayName,
      gradeId: child.gradeId,
      sessions: diagSources ? diagSources.sessions : p.diagnosticSessions || [],
      attempts: diagSources ? diagSources.attempts : p.diagnosticAttempts || [],
      syllabusNodes: diagSources
        ? diagSources.syllabusNodes
        : App.DiagnosticReport.collectSyllabusNodes(child.gradeId, App.DiagnosticBanks)
    });
    const diagHtml = App.DiagnosticReport.renderCardHtml(diagInfo);
    const statusDot = { lemah: "🔴", sederhana: "🟡", kuat: "🟢", baharu: "⚪" };
    const statusCls = { lemah: "tl-red", sederhana: "tl-amber", kuat: "tl-green", baharu: "tl-amber" };
    const wk = W.analyse(p);
    const mistakeTxt = (m) =>
      [m.concept && `${m.concept} kemungkinan salah faham konsep`, m.careless && `${m.careless} kemungkinan cuai`, m.timeout && `${m.timeout} tidak sempat jawab`, m.slow && `${m.slow} jawab perlahan tetapi salah`]
        .filter(Boolean)
        .join(", ");
    const subjects = wk.chapters.length
      ? `<div class="weak-box"><strong>🚦 Kekuatan & Kelemahan Mengikut Subjek:</strong>${wk.subjects
          .map(
            (s) => `
        <div class="wk-subject"><div class="wk-subject-head"><span>${statusDot[s.status]} ${esc(s.subjectName || s.subjectId)}</span><strong>${s.mastery}%</strong></div>
        <div class="wk-bar"><span class="${statusCls[s.status]}" style="width:${Math.max(3, s.mastery)}%"></span></div>
        ${s.chapters
          .filter((c) => c.status === "lemah")
          .slice(0, 3)
          .map((c) => `<div class="wk-chapter"><div>🔴 <strong>${esc(c.chapterTitle)}</strong> — ${c.mastery}%${c.provisional ? " (sementara)" : ""}</div>${mistakeTxt(c.mistakes) ? `<small>${esc(mistakeTxt(c.mistakes))}</small>` : ""}</div>`)
          .join("")}</div>`
          )
          .join("")}
        <small class="wk-note">Lemah: bawah ${W.WEAK_BELOW}%. Kuat: ${W.STRONG_AT}% ke atas. Berdasarkan 3 percubaan terkini setiap bab. Jenis kesilapan adalah anggaran.</small></div>`
      : `<div class="weak-box weak-clear">ℹ️ Anak belum mencuba latihan lagi.</div>`;

    const mock = W.analyseMock(p, (i) => App.MarkingUI.findItem(i));
    const mockHtml = mock.papers.length
      ? `<div class="weak-box wk-mock"><strong>📑 Prestasi Mengikut Bahagian Kertas (Ujian Percubaan):</strong>${mock.papers
          .map((paper) => {
            const adv = W.mockAdvice(paper);
            const bp = App.Blueprints.find(paper.gradeId, paper.subjectId);
            const bpPaper = bp && bp.papers.find((x) => x.id === paper.paperId);
            return `<div class="wk-subject"><div class="wk-subject-head"><span>${esc(paper.subjectName || paper.subjectId)} • ${esc(bpPaper ? bpPaper.name : paper.paperId)}</span><small>${paper.attempts} percubaan</small></div>
          ${paper.parts.map((pt) => `<div class="wk-chapter"><div>Bahagian ${esc(pt.part)}: <strong>${pt.pct}%</strong></div></div>`).join("")}
          ${adv.length ? `<ul class="wk-advice">${adv.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>`;
          })
          .join("")}<small class="wk-note">Bahagian yang menunggu tanda ibu bapa tidak dikira sebagai salah.</small></div>`
      : "";

    const pending = App.MarkingUI.pendingRecords(p);
    const markHtml = pending.length
      ? `<div class="tasks-box"><h4>📝 Kertas Menunggu Tanda</h4>${pending
          .slice(0, 6)
          .map(
            (r) => `<div class="task-card"><div class="task-title">${esc(r.subjectName || r.subjectId)} • ${fmtDate(r.ts)}</div>
        <div class="task-meta">Bahagian ${esc(r.sections.filter((x) => x.state === "menunggu").map((x) => x.id).join(", "))} perlu ditanda.</div>
        <div class="task-actions"><button type="button" class="btn-tactile btn-true btn-sm" data-mark-ts="${esc(r.ts)}">✍️ Tanda sekarang</button></div></div>`
          )
          .join("")}</div>`
      : "";

    const tasks = (p.tasks || []).filter((t) => t.status === "aktif" || t.status === "rujuk_guru").slice(0, 4);
    const tasksHtml = tasks.length
      ? `<div class="tasks-box"><h4>📋 Tugasan Untuk Ibu Bapa</h4>${tasks
          .map((t) => {
            const g = T.guidance(t);
            const since = T.attemptsSince(p, t);
            const share = `Tugasan ${child.displayName}: ${t.subjectName || t.subjectId} - ${t.chapterTitle}. ${g.diagnosis} ${g.steps.join(" ")}`;
            return `<div class="task-card ${t.status === "rujuk_guru" ? "is-referral" : ""}"><div class="task-title">📌 ${esc(t.subjectName || t.subjectId)} • ${esc(t.chapterTitle)}</div>
          <div class="task-meta">Kitaran ${t.cycle}/${T.CYCLE_LIMIT} • Markah semasa ${t.baseline}% • Sasaran ${t.target}% dalam ${t.need} percubaan • Tarikh akhir ${fmtDate(t.dueTs)}</div>
          <div class="task-progress">Percubaan baharu: ${Math.min(since.count, t.need)}/${t.need}${since.count ? ` • purata ${since.pct}%` : ""}</div>
          <p class="task-diag">${esc(g.diagnosis)}</p><strong>Buat hari ini (10 minit):</strong><ol>${g.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
          <strong>Tanya anak:</strong><ul>${g.questions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          ${t.status === "rujuk_guru" ? `<p class="task-diag">Sudah ${t.cycle} kitaran tanpa mencapai sasaran. Cadangan: rujuk guru mata pelajaran.</p>` : ""}
          <div class="task-actions"><button class="btn-secondary btn-sm" data-wa="${esc(share)}">📤 Kongsi WhatsApp</button></div></div>`;
          })
          .join("")}</div>`
      : "";

    const reports = (p.reports || []).filter((r) => !r.done);
    const reportsHtml = reports.length
      ? `<div class="tasks-box"><h4>🚩 Soalan Dilaporkan Anak (${reports.length})</h4>${reports
          .slice(0, 6)
          .map(
            (r) => `<div class="task-card"><div class="task-title">${esc(r.subjectName || r.subjectId)}</div><p class="task-diag">${esc(r.q)}</p>
        <ul>${(r.options || []).map((o, k) => `<li>${"ABCD"[k] || k + 1}) ${esc(o)}${o === r.keyAnswer ? " ✅ (jawapan dalam aplikasi)" : ""}</li>`).join("")}</ul></div>`
          )
          .join("")}<small>Selesaikan laporan pada telefon anak.</small></div>`
      : "";

    const hist = (p.history || [])
      .slice(0, 5)
      .map((h) => `<li><span>${fmtDate(h.ts)} • ${esc((h.subjectName || h.subjectId || "").toUpperCase())} Set ${h.setNum}</span><strong>${h.pct}%</strong></li>`)
      .join("");
    const grade = App.GRADES && App.GRADES[child.gradeId];
    return `<div class="parent-kid-card"><div class="pk-head"><div><h3>${esc(p.avatar || "🙂")} ${esc(child.displayName)}</h3><small>${esc(grade ? grade.name : child.gradeId)} • 🔥 ${p.dailyStreak || 0} hari • dikemas kini ${fmtDate(child.snapshotUpdatedAt)}</small></div></div>
      ${diagHtml}${subjects}${mockHtml}${tasksHtml}${markHtml}${reportsHtml}<h4>Aktiviti Terkini:</h4><ul class="pk-history">${hist || "<li>Tiada latihan.</li>"}</ul></div>`;
  }

  function start() {
    if (!App || !App.Weakness || !App.MarkingUI || !App.Tasks || !App.Diagnostics || !App.DiagnosticReport || !App.getCloudApiUrl) return setTimeout(start, 50);
    loadSession();
    if (session && session.token) afterLogin().catch(() => loginView());
    else loginView();
  }
  start();
})(window);
