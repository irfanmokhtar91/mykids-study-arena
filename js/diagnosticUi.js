/**
 * Student Diagnostic Checkup UI (v5 Step 3):
 * picker -> 15-question checkup (silent performance.now() timing, zero countdown pressure) -> kid-friendly result.
 * Resumable via localStorage per profile.
 */
(function (global) {
  const App = (global.App = global.App || {});

  let screen = "pick"; // pick | run | result
  let ctx = null; // { profile, grade, onExit }
  let session = null;
  let lastSummary = null;
  let lastReward = null;
  let lastFeedback = null; // { attempt, item, isLast }

  const esc = (s) =>
    String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const perfNow = () =>
    global.performance && typeof global.performance.now === "function"
      ? global.performance.now()
      : Date.now();

  const sessKey = (pid) => `mykids_diag_session_v1_${pid}`;

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
      /* quota: ignore, session continues in memory */
    }
  }

  function clearSession() {
    session = null;
    lastFeedback = null;
    if (ctx) {
      try {
        global.localStorage.removeItem(sessKey(ctx.profile.id));
      } catch (e) {
        /* ignore */
      }
    }
  }

  function subjectLabel(grade, subjectId) {
    const subj = grade && Array.isArray(grade.subjects)
      ? grade.subjects.find((s) => s.id === subjectId)
      : null;
    return subj ? `${subj.icon || "📘"} ${subj.name}` : subjectId;
  }

  function startBank(bankInfo) {
    const diagData = App.Storage.getDiagnosticData
      ? App.Storage.getDiagnosticData(ctx.profile.id)
      : { attempts: [] };
    session = App.DiagnosticRunner.createSessionState({
      studentId: ctx.profile.id,
      gradeId: ctx.profile.gradeId,
      subjectId: bankInfo.subjectId,
      bank: { syllabus_nodes: bankInfo.nodes, questions: bankInfo.questions },
      priorAttempts: diagData.attempts || [],
      count: App.DiagnosticRunner.DEFAULT_QUESTION_COUNT,
      nowMs: Date.now(),
      perfNow: perfNow()
    });
    lastFeedback = null;
    saveSession();
    screen = "run";
    render();
  }

  function finishSession() {
    const summary = App.DiagnosticRunner.buildSessionSummary(session);
    const reward = App.Storage.saveDiagnosticSession(
      ctx.profile.id,
      summary.sessionRecord,
      summary.attemptLogs
    );
    clearSession();
    lastSummary = summary;
    lastReward = reward;
    screen = "result";
    render();
  }

  function renderPick(el) {
    const banks = App.DiagnosticRunner.getAvailableBanks(App.DiagnosticBanks, ctx.profile.gradeId);
    const saved = loadSession(ctx.profile.id);
    const hasSaved = !!(saved && Array.isArray(saved.items) && !saved.completed_at);

    const resumeHtml = hasSaved
      ? `<div class="mock-resume diag-resume">
          <div>
            <strong>Semakan belum selesai</strong>
            <div class="mock-meta">${esc(subjectLabel(ctx.grade, saved.subjectId))} • Soalan ${Math.min((saved.currentIndex || 0) + 1, saved.items.length)} / ${saved.items.length}</div>
          </div>
          <button type="button" class="btn-tactile btn-true" id="diag-resume-btn">Sambung →</button>
        </div>`
      : "";

    const banksHtml = banks.length
      ? `<div class="mock-subjects">
          ${banks
            .map(
              (b) => `
            <button type="button" class="mock-subject diag-bank-card" data-subj="${esc(b.subjectId)}">
              <span class="ms-icon">🩺</span>
              <span class="ms-body">
                <strong>${esc(subjectLabel(ctx.grade, b.subjectId))}</strong>
                <small>${Math.min(15, b.questionCount)} soalan pantas • ${b.nodeCount} subtopik teras • Tanpa tekanan masa</small>
              </span>
            </button>`
            )
            .join("")}
        </div>`
      : `<div class="mock-paper-card">
          <h3>Belum tersedia untuk ${esc(ctx.grade ? ctx.grade.name : ctx.profile.gradeId)}</h3>
          <p class="mock-note">Set semakan diagnostik berstruktur untuk tahap ini sedang disiapkan dan disemak ketepatannya. Buat masa ini, gunakan latihan bab atau Ujian Percubaan di halaman utama.</p>
        </div>`;

    el.innerHTML = `
      <div class="mock-wrap diag-wrap">
        <div class="mock-head">
          <button type="button" class="btn-secondary btn-sm" id="diag-back">← Kembali</button>
          <h2>🩺 Semakan Diagnostik Pantas</h2>
        </div>
        <p class="diag-intro">Buktikan topik yang kamu sudah kuasai supaya kamu boleh belajar dengan lebih tepat — tak perlu buat beratus soalan yang kamu sudah pandai!</p>
        ${resumeHtml}
        ${banksHtml}
      </div>`;

    el.querySelector("#diag-back").addEventListener("click", () => {
      App.Sound.click();
      ctx.onExit();
    });

    if (hasSaved) {
      el.querySelector("#diag-resume-btn").addEventListener("click", () => {
        App.Sound.click();
        session = saved;
        if (session.awaitingNext && session.attempts.length > session.currentIndex) {
          const item = session.items[session.currentIndex];
          const attempt = session.attempts[session.attempts.length - 1];
          lastFeedback = { attempt, item, isLast: session.currentIndex >= session.items.length - 1 };
        } else {
          lastFeedback = null;
          App.DiagnosticRunner.markQuestionShown(session, perfNow());
          saveSession();
        }
        screen = "run";
        render();
      });
    }

    el.querySelectorAll("[data-subj]").forEach((btn) => {
      btn.addEventListener("click", () => {
        App.Sound.click();
        const sid = btn.getAttribute("data-subj");
        const found = banks.find((b) => b.subjectId === sid);
        if (found) startBank(found);
      });
    });
  }

  function renderRun(el) {
    if (!session || !Array.isArray(session.items) || !session.items.length) {
      screen = "pick";
      render();
      return;
    }
    const item = session.items[session.currentIndex];
    const total = session.items.length;
    const qNo = session.currentIndex + 1;
    const progressPct = Math.round((qNo / total) * 100);
    const fb = lastFeedback;

    const optsHtml = item.options
      .map((o) => {
        let cls = "mock-opt";
        if (fb) {
          if (o.letter === item.correctLetter) cls += " is-picked diag-opt-right";
          else if (o.letter === fb.attempt.picked_option) cls += " diag-opt-wrong";
        }
        return `
          <button type="button" class="${cls}" data-pick="${esc(o.letter)}" ${fb ? "disabled" : ""}>
            <span class="mo-key">${esc(o.letter)}</span>
            <span>${esc(o.text)}</span>
          </button>`;
      })
      .join("");

    const feedbackHtml = fb
      ? `<div class="diag-feedback ${fb.attempt.is_correct ? "is-right" : "is-wrong"}">
          <strong>${fb.attempt.is_correct ? "✅ Tepat! Bagus!" : `💡 Jawapan tepat: ${esc(item.correctLetter)}`}</strong>
          <p>${esc(item.explanation_text)}</p>
          <button type="button" class="btn-tactile btn-true" id="diag-next-btn">${fb.isLast ? "Lihat Keputusan →" : "Soalan Seterusnya →"}</button>
        </div>`
      : "";

    el.innerHTML = `
      <div class="mock-wrap diag-wrap">
        <div class="mock-bar">
          <button type="button" class="btn-secondary btn-sm" id="diag-pause">⏸ Simpan & Keluar</button>
          <span class="diag-progress-lbl">Soalan ${qNo} / ${total}</span>
        </div>
        <div class="mini-progress diag-bar-track"><div class="mini-fill" style="width:${progressPct}%"></div></div>
        <div class="mock-qcard">
          <div class="mock-qno">${esc(item.topic_name || subjectLabel(ctx.grade, session.subjectId))} • ${esc(item.subtopic_name)}</div>
          <div class="mock-q">${esc(item.prompt_text)}</div>
          <div class="mock-opts">${optsHtml}</div>
          ${feedbackHtml}
        </div>
      </div>`;

    el.querySelector("#diag-pause").addEventListener("click", () => {
      App.Sound.click();
      saveSession();
      screen = "pick";
      render();
    });

    if (!fb) {
      el.querySelectorAll("[data-pick]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const picked = btn.getAttribute("data-pick");
          const res = App.DiagnosticRunner.recordQuestionAnswer(session, picked, {
            perfNow: perfNow(),
            nowMs: Date.now()
          });
          if (!res) return;
          if (res.attempt.is_correct) App.Sound.correct();
          else App.Sound.wrong();
          lastFeedback = res;
          saveSession();
          render();
        });
      });
    } else {
      el.querySelector("#diag-next-btn").addEventListener("click", () => {
        App.Sound.click();
        if (fb.isLast) {
          finishSession();
        } else {
          lastFeedback = null;
          App.DiagnosticRunner.advanceToNextQuestion(session, perfNow());
          saveSession();
          render();
        }
      });
    }
  }

  function renderResult(el) {
    const sum = lastSummary;
    if (!sum) {
      screen = "pick";
      render();
      return;
    }
    const rew = lastReward || { earnedXp: 0, earnedCoins: 0 };
    const masteredHtml = sum.masteredSubtopics.length
      ? `<ul class="diag-list">${sum.masteredSubtopics
          .map((s) => `<li>✅ <strong>${esc(s.subtopicName)}</strong> (${s.correct}/${s.total})</li>`)
          .join("")}</ul>`
      : `<p class="mock-note">Teruskan usaha — setiap kesilapan membantu kita tahu topik mana yang perlu diberi tumpuan.</p>`;

    const focusHtml = sum.focusSubtopics.length
      ? `<ul class="diag-list">${sum.focusSubtopics
          .map((s) => `<li>🎯 <strong>${esc(s.subtopicName)}</strong> (${s.correct}/${s.total})</li>`)
          .join("")}</ul>`
      : `<p class="mock-note">Hebat! Semua subtopik dalam semakan ini dijawab tepat.</p>`;

    el.innerHTML = `
      <div class="mock-wrap diag-wrap">
        <div class="mock-head">
          <h2>🎉 Semakan Diagnostik Selesai!</h2>
        </div>
        <div class="mock-grade">
          <strong>${sum.pct}%</strong>
          <span>${sum.score} daripada ${sum.total} soalan tepat</span>
          <small>+${rew.earnedXp} XP • +${rew.earnedCoins} 🪙 Syiling</small>
        </div>
        <div class="mock-paper-card">
          <h3>💪 Topik yang kamu sudah kuasai</h3>
          ${masteredHtml}
        </div>
        <div class="mock-paper-card">
          <h3>🎯 Topik untuk diasah lagi</h3>
          ${focusHtml}
        </div>
        <div class="mock-actions">
          <button type="button" class="btn-tactile btn-true" id="diag-done-home">🏠 Kembali ke Laman Utama</button>
          <button type="button" class="btn-secondary" id="diag-again">🩺 Semakan Lain</button>
        </div>
      </div>`;

    el.querySelector("#diag-done-home").addEventListener("click", () => {
      App.Sound.click();
      ctx.onExit();
    });
    el.querySelector("#diag-again").addEventListener("click", () => {
      App.Sound.click();
      screen = "pick";
      render();
    });
  }

  function render() {
    if (!ctx || !ctx.container) return;
    if (screen === "run") renderRun(ctx.container);
    else if (screen === "result") renderResult(ctx.container);
    else renderPick(ctx.container);
  }

  App.DiagnosticUI = {
    open(container, { profile, grade, onExit }) {
      ctx = { container, profile, grade, onExit };
      session = null;
      lastSummary = null;
      lastReward = null;
      lastFeedback = null;
      screen = "pick";
      render();
    },
    stop() {
      ctx = null;
    }
  };
})(window);
