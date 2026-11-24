/**
 * Mock Exam screens (v5): picker -> paper/mode -> exam -> result.
 * Exam-style: no instant feedback. Resumable (session kept in localStorage per profile).
 */
(function (global) {
  const App = (global.App = global.App || {});

  let screen = "pick"; // pick | paper | run | result
  let ctx = null; // { profile, grade, onExit }
  let pickedSubject = null;
  let pickedPaperId = null;
  let session = null; // see newSession()
  let lastScore = null;
  let lastPaper = null;
  let timerHandle = null;
  let lastPapersInSubject = 1;

  const esc = (s) =>
    String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const sessKey = (pid) => `mykids_mock_session_v1_${pid}`;
  function loadSession(pid) {
    try {
      const raw = global.localStorage.getItem(sessKey(pid));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function saveSession() {
    if (!session || !ctx) return;
    try {
      global.localStorage.setItem(sessKey(ctx.profile.id), JSON.stringify(session));
    } catch (e) {
      /* quota: ignore, exam still works in memory */
    }
  }
  function clearSession() {
    session = null;
    if (ctx) {
      try {
        global.localStorage.removeItem(sessKey(ctx.profile.id));
      } catch (e) {
        /* ignore */
      }
    }
  }

  function stopTimer() {
    if (timerHandle) {
      global.clearInterval(timerHandle);
      timerHandle = null;
    }
  }

  function fmtClock(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return (h ? `${h}:` : "") + String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  }

  function getBank(subject) {
    const gradeId = ctx.profile.gradeId;
    const excluded = (App.MockExam.MOCK_EXCLUDE || {})[`${gradeId}:${subject.id}`] || [];
    return {
      chapterIds: subject.chapters.map((c) => c.id).filter((id) => !excluded.includes(id)),
      getStructured: (pool) => {
        const p = App.Data && App.Data.structured && App.Data.structured[pool];
        return p ? p.ITEMS : [];
      },
      getQuestions: (cid) => {
        const n = App.QuestionEngine.getChapterSetCount(gradeId, subject.id, cid, false);
        const all = [];
        for (let i = 1; i <= n; i++) {
          App.QuestionEngine.getSetQuestions(gradeId, subject.id, cid, i, false).forEach((q) => all.push(q));
        }
        return all;
      }
    };
  }

  function buildFor(subject, paperId, seed) {
    const bp = App.Blueprints.find(ctx.profile.gradeId, subject.id);
    return App.MockExam.buildPaper(bp, paperId, getBank(subject), seed);
  }

  /** Time allowed: the real duration scaled to the marks that this app can actually supply. */
  function allowedMs(paper, sectionIds) {
    const included = paper.sections.filter((s) => sectionIds.includes(s.id));
    const share = included.reduce((a, s) => a + s.marks, 0) / paper.marks;
    return Math.max(5, Math.round(paper.minutes * share)) * 60000;
  }

  function supportedSections(paper) {
    return paper.sections.filter((s) => s.items.length > 0);
  }

  // ------------------------------------------------------------------ screens
  function renderPick(main) {
    const gradeId = ctx.profile.gradeId;
    const none = (App.Blueprints.NO_NATIONAL_FORMAT[gradeId] || []);
    const resumable = loadSession(ctx.profile.id);
    const rows = ctx.grade.subjects
      .map((sub) => {
        const bp = App.Blueprints.find(gradeId, sub.id);
        let badge;
        let can = false;
        if (!bp) {
          badge =
            gradeId === "t4"
              ? "Format SPM sedang dikaji. Belum tersedia."
              : none.includes(sub.id)
              ? "Tiada format kertas kebangsaan (kertas ditetapkan sekolah). Guna latihan bab."
              : "Format kertas belum ditambah.";
        } else {
          const probe = bp.papers.map((p) => {
            const secs = p.sections.filter((s) => App.MockExam.isSupported(gradeId, sub.id, p.id, s.id));
            return secs.map((s) => `Bahagian ${s.id}`);
          }).flat();
          if (probe.length) {
            can = true;
            badge = `✅ Tersedia: ${probe.join(", ")}. Bahagian lain belum ada soalan dan tidak dinilai.`;
          } else {
            badge = "⚠️ Belum ada soalan yang sesuai dengan format kertas ini.";
          }
        }
        return `
          <button type="button" class="mock-subject ${can ? "" : "is-off"}" data-sub="${esc(sub.id)}" ${can ? "" : "disabled"}>
            <span class="ms-icon">${esc(sub.icon || "📘")}</span>
            <span class="ms-body"><strong>${esc(sub.name)}</strong><small>${esc(badge)}</small></span>
          </button>`;
      })
      .join("");
    main.innerHTML = `
      <section class="mock-wrap">
        <div class="mock-head">
          <button type="button" class="btn-ghost btn-sm" id="mock-exit">← Kembali</button>
          <h2>📝 Ujian Percubaan</h2>
        </div>
        <p class="mock-note">Format kertas diambil daripada dokumen rasmi KPM. Gred keseluruhan hanya dipaparkan apabila semua bahagian ada soalan dan telah ditanda.</p>
        ${resumable ? `<div class="mock-resume"><span>Ada ujian belum selesai.</span><button type="button" class="btn-tactile btn-true btn-sm" id="mock-resume">▶ Sambung</button></div>` : ""}
        <div class="mock-subjects">${rows}</div>
      </section>`;
    document.getElementById("mock-exit").addEventListener("click", () => ctx.onExit());
    const rb = document.getElementById("mock-resume");
    if (rb) rb.addEventListener("click", resume);
    main.querySelectorAll(".mock-subject:not([disabled])").forEach((b) =>
      b.addEventListener("click", () => {
        App.Sound.click();
        pickedSubject = ctx.grade.subjects.find((s) => s.id === b.getAttribute("data-sub"));
        screen = "paper";
        render(main);
      })
    );
  }

  function renderPaper(main) {
    const gradeId = ctx.profile.gradeId;
    const bp = App.Blueprints.find(gradeId, pickedSubject.id);
    const paperCards = bp.papers
      .map((p) => {
        const built = buildFor(pickedSubject, p.id, "preview");
        const have = supportedSections(built);
        const sectionLines = built.sections
          .map((s) => {
            const st = s.items.length ? `${s.items.length}/${bp.papers.find((x) => x.id === p.id).sections.find((x) => x.id === s.id).count} soalan` : "belum ada soalan";
            return `<li>Bahagian ${esc(s.id)}: ${esc(s.label)} • ${s.marks} markah • <em>${esc(st)}</em>${s.choose ? ` • jawab ${s.choose} daripada ${s.of}` : ""}</li>`;
          })
          .join("");
        return `
          <div class="mock-paper-card">
            <h3>${esc(p.name)}</h3>
            <p class="mock-meta">Kertas sebenar: ${p.minutes} minit, ${p.marks} markah</p>
            <ul class="mock-sections">${sectionLines}</ul>
            ${
              have.length
                ? `<div class="mock-actions">
                    <button type="button" class="btn-tactile btn-true btn-sm" data-start="full" data-paper="${esc(p.id)}">▶ Penuh (${Math.round(allowedMs(built, have.map((s) => s.id)) / 60000)} min)</button>
                    ${have
                      .map(
                        (s) => `<button type="button" class="btn-secondary btn-sm" data-start="mini" data-paper="${esc(p.id)}" data-sec="${esc(s.id)}">Mini: Bahagian ${esc(s.id)} (${Math.round(allowedMs(built, [s.id]) / 60000)} min)</button>`
                      )
                      .join("")}
                  </div>
                  <p class="mock-note">Masa dikira mengikut bahagian yang ada, bukan masa kertas penuh. Boleh jeda dan sambung semula.</p>`
                : `<p class="mock-note">Kertas ini belum ada bahagian yang boleh dijalankan.</p>`
            }
          </div>`;
      })
      .join("");
    main.innerHTML = `
      <section class="mock-wrap">
        <div class="mock-head">
          <button type="button" class="btn-ghost btn-sm" id="mock-back">← Subjek</button>
          <h2>${esc(pickedSubject.icon || "")} ${esc(pickedSubject.name)}</h2>
        </div>
        <p class="mock-meta">Sumber format: ${esc(bp.source)}</p>
        ${paperCards}
      </section>`;
    document.getElementById("mock-back").addEventListener("click", () => {
      screen = "pick";
      render(main);
    });
    main.querySelectorAll("[data-start]").forEach((b) =>
      b.addEventListener("click", () => {
        App.Sound.click();
        const paperId = b.getAttribute("data-paper");
        const mode = b.getAttribute("data-start");
        const seed = String(Date.now());
        const paper = buildFor(pickedSubject, paperId, seed);
        const sectionIds = mode === "mini" ? [b.getAttribute("data-sec")] : supportedSections(paper).map((s) => s.id);
        session = {
          gradeId,
          subjectId: pickedSubject.id,
          paperId,
          seed,
          mode,
          sectionIds,
          answers: {},
          cur: { sec: sectionIds[0], idx: 0 },
          remainingMs: allowedMs(paper, sectionIds),
          startedAt: Date.now()
        };
        saveSession();
        startRun(main);
      })
    );
  }

  function resume() {
    const s = loadSession(ctx.profile.id);
    if (!s) return;
    const sub = ctx.grade.subjects.find((x) => x.id === s.subjectId);
    if (!sub || s.gradeId !== ctx.profile.gradeId) return;
    session = s;
    pickedSubject = sub;
    startRun(document.getElementById("main-content"));
  }

  function startRun(main) {
    lastPaper = buildFor(pickedSubject, session.paperId, session.seed);
    screen = "run";
    render(main);
    stopTimer();
    let last = Date.now();
    timerHandle = global.setInterval(() => {
      const now = Date.now();
      session.remainingMs -= now - last;
      last = now;
      const el = document.getElementById("mock-clock");
      if (el) el.textContent = fmtClock(session.remainingMs);
      if (Math.round(session.remainingMs / 1000) % 5 === 0) saveSession();
      if (session.remainingMs <= 0) finish(true);
    }, 1000);
  }

  function currentSection() {
    return lastPaper.sections.find((s) => s.id === session.cur.sec);
  }

  function photoList(itemId, part) {
    session.photos = session.photos || {};
    session.photos[itemId] = session.photos[itemId] || {};
    session.photos[itemId][part] = session.photos[itemId][part] || [];
    return session.photos[itemId][part];
  }

  async function renderThumbs(main, item, part) {
    const box = main.querySelector(`[data-thumbs="${part}"]`);
    if (!box) return;
    const ids = photoList(item.id, part);
    const cells = [];
    for (const id of ids) {
      const rec = await App.PhotoStore.get(id);
      const url = rec && rec.blob ? URL.createObjectURL(rec.blob) : null;
      if (!url) continue;
      const kb = Math.max(1, Math.round(rec.blob.size / 1024));
      cells.push(`<div class="mock-thumb"><img src="${url}" alt="Foto jawapan" /><button type="button" class="mock-thumb-del" data-del="${esc(id)}" aria-label="Buang gambar">✕</button><small>${kb} KB</small></div>`);
    }
    box.innerHTML = cells.join("");
    box.querySelectorAll("[data-del]").forEach((b) =>
      b.addEventListener("click", async () => {
        const id = b.getAttribute("data-del");
        const list = photoList(item.id, part);
        const at = list.indexOf(id);
        if (at >= 0) list.splice(at, 1);
        await App.PhotoStore.remove(id);
        saveSession();
        renderThumbs(main, item, part);
      })
    );
    main.querySelectorAll(`.mock-photo-input[data-part="${part}"]`).forEach((inp) => (inp.disabled = ids.length >= App.PhotoStore.MAX_PER_PART));
  }

  function wirePhotos(main, item) {
    item.parts.forEach((p, part) => renderThumbs(main, item, part));
    main.querySelectorAll(".mock-photo-input").forEach((inp) =>
      inp.addEventListener("change", async () => {
        const part = Number(inp.getAttribute("data-part"));
        const status = main.querySelector(`[data-photo-status="${part}"]`);
        const files = Array.from(inp.files || []);
        inp.value = "";
        for (const file of files) {
          const list = photoList(item.id, part);
          if (list.length >= App.PhotoStore.MAX_PER_PART) {
            if (status) status.textContent = `Maksimum ${App.PhotoStore.MAX_PER_PART} gambar bagi bahagian ini.`;
            break;
          }
          if (!/^image\//.test(file.type)) {
            if (status) status.textContent = "Sila pilih fail gambar.";
            continue;
          }
          try {
            if (status) status.textContent = "Memampatkan gambar...";
            const out = await App.PhotoStore.compress(file);
            const id = App.PhotoStore.photoId(ctx.profile.id, session.seed, item.id, part, `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`);
            await App.PhotoStore.put(id, out.blob, { w: out.width, h: out.height, bytes: out.bytes });
            list.push(id);
            saveSession();
            if (status) status.textContent = `Disimpan: ${Math.round(out.originalBytes / 1024)} KB dimampatkan kepada ${Math.round(out.bytes / 1024)} KB (${out.width}×${out.height}).`;
          } catch (e) {
            if (status) status.textContent = "Gambar tidak dapat disimpan. Cuba ambil semula.";
          }
        }
        renderThumbs(main, item, part);
      })
    );
  }

  /** Every photo id referenced by a stored result or a paused exam: everything else can be deleted. */
  function keepPhotoIds() {
    const keep = [];
    const profiles = (App.Storage.getState().profiles || []);
    profiles.forEach((p) => {
      (p.mockResults || []).forEach((r) => Object.values(r.photos || {}).forEach((byPart) => Object.values(byPart).forEach((ids) => keep.push(...ids))));
      const sess = loadSession(p.id);
      if (sess && sess.photos) Object.values(sess.photos).forEach((byPart) => Object.values(byPart).forEach((ids) => keep.push(...ids)));
    });
    return keep;
  }

  function renderRun(main) {
    const sec = currentSection();
    const item = sec.items[session.cur.idx];
    const tabs = session.sectionIds
      .map((id) => {
        const s = lastPaper.sections.find((x) => x.id === id);
        const done = s.items.filter((it) => session.answers[it.id] !== undefined && (typeof session.answers[it.id] !== "object" || Object.values(session.answers[it.id]).some((v) => String(v).trim()))).length;
        return `<button type="button" class="mock-tab ${id === session.cur.sec ? "is-on" : ""}" data-tab="${esc(id)}">Bahagian ${esc(id)} <small>${done}/${s.items.length}</small></button>`;
      })
      .join("");
    const dots = sec.items
      .map((it, i) => `<button type="button" class="mock-dot ${i === session.cur.idx ? "is-on" : ""} ${session.answers[it.id] !== undefined && (typeof session.answers[it.id] !== "object" || Object.values(session.answers[it.id]).some((v) => String(v).trim())) ? "is-done" : ""}" data-idx="${i}" aria-label="Soalan ${i + 1}">${i + 1}</button>`)
      .join("");
    const isStructured = item.type === "structured";
    const opts = (item.options || [])
      .map(
        (o, i) => `<button type="button" class="mock-opt ${session.answers[item.id] === i ? "is-picked" : ""}" data-opt="${i}"><span class="mo-key">${"ABCD"[i] || i + 1}</span><span>${esc(o)}</span></button>`
      )
      .join("");
    main.innerHTML = `
      <section class="mock-wrap mock-run">
        <div class="mock-bar">
          <strong>${esc(pickedSubject.name)}</strong>
          <span class="mock-clock" id="mock-clock">${fmtClock(session.remainingMs)}</span>
          <button type="button" class="btn-ghost btn-sm" id="mock-pause">⏸ Jeda</button>
        </div>
        <div class="mock-tabs">${tabs}</div>
        <div class="mock-qcard">
          <div class="mock-qno">Soalan ${session.cur.idx + 1} / ${sec.items.length}${isStructured ? ` • ${item.marks} markah` : ""}${sec.choose ? ` • Jawab ${sec.choose} daripada ${sec.of || sec.items.length} soalan` : ""}</div>
          ${
            isStructured
              ? `${item.stem ? `<p class="mock-q">${esc(item.stem).replace(/\n/g, "<br>")}</p>` : ""}
                 ${item.parts
                   .map(
                     (p, i) => `
                   <div class="mock-sub">
                     <p class="mock-q">${p.label ? `<strong>${esc(p.label)}</strong> ` : ""}${esc(p.q).replace(/\n/g, "<br>")} <small>[${p.marks} markah]</small></p>
                     <div class="mock-photo">
                       <div class="mock-photo-actions">
                         <label class="btn-tactile btn-true btn-sm mock-photo-btn">📷 Ambil foto jawapan<input type="file" accept="image/*" capture="environment" class="mock-photo-input" data-part="${i}" hidden /></label>
                         <label class="btn-secondary btn-sm mock-photo-btn">🖼️ Pilih gambar<input type="file" accept="image/*" class="mock-photo-input" data-part="${i}" hidden /></label>
                       </div>
                       <div class="mock-thumbs" data-thumbs="${i}"></div>
                       <small class="mock-note mock-photo-status" data-photo-status="${i}">Tulis jawapan di atas kertas, kemudian ambil foto. Gambar dimampatkan secara automatik supaya jimat data dan tulisan masih jelas. Maksimum ${App.PhotoStore.MAX_PER_PART} gambar.</small>
                     </div>
                     <textarea class="mock-work" data-part="${i}" rows="3" placeholder="Atau taip jawapan di sini (pilihan)">${esc((session.answers[item.id] || {})[i] || "")}</textarea>
                   </div>`
                   )
                   .join("")}
                 <p class="mock-note">Jalan kerja (foto atau taip) ditanda oleh ibu bapa selepas kertas dihantar.</p>`
              : `<p class="mock-q">${esc(item.q)}</p><div class="mock-opts">${opts}</div>`
          }
        </div>
        <div class="mock-dots">${dots}</div>
        <div class="mock-nav">
          <button type="button" class="btn-ghost btn-sm" id="mock-prev" ${session.cur.idx === 0 ? "disabled" : ""}>← Sebelum</button>
          <button type="button" class="btn-ghost btn-sm" id="mock-next" ${session.cur.idx >= sec.items.length - 1 ? "disabled" : ""}>Seterusnya →</button>
          <button type="button" class="btn-tactile btn-true btn-sm" id="mock-submit">Hantar</button>
        </div>
      </section>`;
    if (isStructured) wirePhotos(main, item);
    main.querySelectorAll(".mock-work").forEach((ta) =>
      ta.addEventListener("input", () => {
        const cur = session.answers[item.id] && typeof session.answers[item.id] === "object" ? session.answers[item.id] : {};
        cur[ta.getAttribute("data-part")] = ta.value.slice(0, 1500);
        session.answers[item.id] = cur;
        saveSession();
      })
    );
    main.querySelectorAll("[data-opt]").forEach((b) =>
      b.addEventListener("click", () => {
        session.answers[item.id] = Number(b.getAttribute("data-opt"));
        saveSession();
        renderRun(main);
      })
    );
    main.querySelectorAll("[data-idx]").forEach((b) =>
      b.addEventListener("click", () => {
        session.cur.idx = Number(b.getAttribute("data-idx"));
        renderRun(main);
      })
    );
    main.querySelectorAll("[data-tab]").forEach((b) =>
      b.addEventListener("click", () => {
        session.cur = { sec: b.getAttribute("data-tab"), idx: 0 };
        renderRun(main);
      })
    );
    document.getElementById("mock-prev").addEventListener("click", () => {
      session.cur.idx = Math.max(0, session.cur.idx - 1);
      renderRun(main);
    });
    document.getElementById("mock-next").addEventListener("click", () => {
      session.cur.idx = Math.min(sec.items.length - 1, session.cur.idx + 1);
      renderRun(main);
    });
    document.getElementById("mock-pause").addEventListener("click", () => {
      stopTimer();
      saveSession();
      screen = "pick";
      render(main);
    });
    document.getElementById("mock-submit").addEventListener("click", () => {
      const unanswered = session.sectionIds.reduce(
        (n, id) => n + lastPaper.sections.find((x) => x.id === id).items.filter((it) => session.answers[it.id] === undefined || (typeof session.answers[it.id] === "object" && !Object.values(session.answers[it.id]).some((v) => String(v).trim()))).length,
        0
      );
      const msg = unanswered ? `Masih ada ${unanswered} soalan belum dijawab. Hantar sekarang?` : "Hantar jawapan sekarang?";
      if (global.confirm(msg)) finish(false);
    });
  }

  function finish(timedOut) {
    stopTimer();
    // Score only the sections that were actually attempted in this run.
    const scoped = {
      ...lastPaper,
      sections: lastPaper.sections.map((s) => (session.sectionIds.includes(s.id) ? s : { ...s, items: [], supported: false, state: "kosong" }))
    };
    lastPapersInSubject = App.Blueprints.find(session.gradeId, session.subjectId).papers.length;
    lastScore = App.MockExam.scorePaper(scoped, session.answers);
    lastScore.timedOut = !!timedOut;
    lastScore.scoped = scoped;
    const rec = {
      ts: new Date().toISOString(),
      gradeId: session.gradeId,
      subjectId: session.subjectId,
      subjectName: pickedSubject.name,
      paperId: session.paperId,
      mode: session.mode,
      paperMarks: scoped.marks,
      photos: (() => {
        const out = {};
        scoped.sections.forEach((sec) =>
          sec.items.forEach((it) => {
            const byPart = session.photos && session.photos[it.id];
            if (it.type === "structured" && byPart) {
              const keep = {};
              Object.keys(byPart).forEach((k) => { if (byPart[k].length) keep[k] = byPart[k].slice(); });
              if (Object.keys(keep).length) out[it.id] = keep;
            }
          })
        );
        return out;
      })(),
      typed: (() => {
        const t = {};
        scoped.sections.forEach((s) =>
          s.items.forEach((it) => {
            if (it.type === "structured" && session.answers[it.id] && typeof session.answers[it.id] === "object") t[it.id] = session.answers[it.id];
          })
        );
        return t;
      })(),
      sections: lastScore.sections.map((x) => {
        const base = { id: x.id, state: x.state, earned: x.earned, possible: x.possible };
        const sec = scoped.sections.find((s) => s.id === x.id);
        if (sec && sec.structured && sec.items.length) {
          base.structured = true;
          base.choose = sec.choose || null;
          base.of = sec.of || null;
          base.items = sec.items.map((it) => ({
            id: it.id,
            chapterId: it.chapterId,
            part: it.part,
            marks: it.marks,
            parts: it.parts.map((p) => ({ marks: p.marks, steps: p.steps.map((st) => ({ marks: st.marks })) }))
          }));
        }
        return base;
      }),
      complete: lastScore.complete,
      pct: lastScore.pct,
      grade: lastScore.grade ? lastScore.grade.grade : null,
      items: App.MockExam.itemRecords(scoped, session.answers)
    };
    App.Storage.saveMockResult(ctx.profile.id, rec);
    lastPaper = scoped;
    const answers = session.answers;
    clearSession();
    session = { answers };
    screen = "result";
    render(document.getElementById("main-content"));
  }

  function renderResult(main) {
    const sc = lastScore;
    const rows = sc.sections
      .map((s) => {
        if (s.state === "ditanda") {
          return `<tr><td>Bahagian ${esc(s.id)}</td><td>${s.earned}/${s.possible}</td><td>${s.structured ? "ditanda ibu bapa" : `${s.correct}/${s.total} betul`}</td></tr>`;
        }
        if (s.state === "menunggu") {
          return `<tr class="is-muted"><td>Bahagian ${esc(s.id)}</td><td>-/${s.possible}</td><td>⏳ Menunggu ibu bapa menanda (Panel Ibu Bapa → Tanda Kertas)</td></tr>`;
        }
        if (!lastPaper.sections.find((x) => x.id === s.id).items.length) {
          return `<tr class="is-muted"><td>Bahagian ${esc(s.id)}</td><td>-/${s.possible}</td><td>Tidak dinilai: belum ada soalan atau perlu ditanda ibu bapa</td></tr>`;
        }
        return `<tr class="is-muted"><td>Bahagian ${esc(s.id)}</td><td>-/${s.possible}</td><td>Tidak dinilai</td></tr>`;
      })
      .join("");
    const gradeBlock = sc.complete
      ? `<div class="mock-grade"><strong>${sc.grade.grade}</strong><span>${sc.pct}% • ${esc(sc.grade.label)}</span>${lastPapersInSubject > 1 ? `<small>Gred bagi kertas ini sahaja (bukan gred subjek). Gred subjek memerlukan semua kertas.</small>` : ""}${sc.grade.verified ? "" : `<small>Skala gred belum disahkan dengan slip sebenar.</small>`}</div>`
      : `<div class="mock-grade is-partial"><strong>Tiada gred keseluruhan</strong><span>${sc.markedLabel ? `Hanya ${esc(sc.markedLabel)} dinilai (${sc.markedEarned}/${sc.markedPossible} markah). ` : ""}Bahagian lain belum ada soalan atau belum ditanda ibu bapa, jadi gred kertas penuh tidak boleh dikira dengan jujur.</span></div>`;
    const wrong = [];
    lastPaper.sections.forEach((s) =>
      s.items.forEach((it) => {
        if (it.type === "structured") return; // marked by a parent, never auto-judged here
        const a = session.answers[it.id];
        if (a !== it.correctIndex) wrong.push({ it, a });
      })
    );
    const review = wrong.length
      ? `<h3>Semak jawapan salah (${wrong.length})</h3>` +
        wrong
          .map(
            ({ it, a }) => `
          <div class="mock-review">
            <div class="m-q">${esc(it.q)}</div>
            <div class="m-ans">${a === undefined ? "⏱️ Tidak dijawab" : `❌ ${esc(it.options[a])}`} → ✅ <strong>${esc(it.options[it.correctIndex])}</strong></div>
            ${it.explanation ? `<small>${esc(it.explanation)}</small>` : ""}
            <button type="button" class="btn-report" data-mock-report="${esc(it.id)}">🚩 Laporkan soalan ini</button>
          </div>`
          )
          .join("")
      : `<p class="mock-note">Semua soalan yang dinilai betul. 🎉</p>`;
    main.innerHTML = `
      <section class="mock-wrap">
        <div class="mock-head"><h2>Keputusan</h2></div>
        ${sc.timedOut ? `<p class="mock-note">⏱️ Masa tamat. Jawapan dihantar secara automatik.</p>` : ""}
        ${gradeBlock}
        <table class="mock-table"><thead><tr><th>Bahagian</th><th>Markah</th><th>Catatan</th></tr></thead><tbody>${rows}</tbody></table>
        ${review}
        <div class="mock-actions">
          <button type="button" class="btn-tactile btn-true" id="mock-again">Ujian lain</button>
          <button type="button" class="btn-ghost" id="mock-home">Utama</button>
        </div>
      </section>`;
    main.querySelectorAll("[data-mock-report]").forEach((b) =>
      b.addEventListener("click", () => {
        const found = wrong.find((w) => w.it.id === b.getAttribute("data-mock-report"));
        if (!found) return;
        const added = App.Storage.addReport(ctx.profile.id, {
          gradeId: ctx.profile.gradeId,
          subjectId: pickedSubject.id,
          subjectName: pickedSubject.name,
          chapterTitle: (pickedSubject.chapters.find((c) => c.id === found.it.chapterId) || {}).title || "",
          q: found.it.q,
          options: found.it.options,
          keyAnswer: found.it.options[found.it.correctIndex],
          chosen: found.a === undefined ? "" : found.it.options[found.a]
        });
        b.textContent = added ? "✅ Dilaporkan" : "✅ Sudah dilaporkan";
        b.disabled = true;
      })
    );
    document.getElementById("mock-again").addEventListener("click", () => {
      screen = "pick";
      render(main);
    });
    document.getElementById("mock-home").addEventListener("click", () => ctx.onExit());
  }

  function render(main) {
    if (screen !== "run") stopTimer();
    if (screen === "pick") renderPick(main);
    else if (screen === "paper") renderPaper(main);
    else if (screen === "run") renderRun(main);
    else renderResult(main);
  }

  App.MockUI = {
    open(main, context) {
      ctx = context;
      screen = "pick";
      session = null;
      render(main);
    },
    render(main, context) {
      ctx = context;
      render(main);
    },
    stop: stopTimer,
    keepPhotoIds
  };
})(window);
