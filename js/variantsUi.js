/**
 * Latihan Rawak UI ("Adaptive Variant Pools", v5):
 * setup (unit checklist) -> 10-question adaptive run (silent performance.now() timing) -> skill summary result.
 */
(function (global) {
  const App = (global.App = global.App || {});

  const LETTERS = ["A", "B", "C", "D"];
  const DIFF_LABELS = { L: "Mudah", M: "Sederhana", H: "Cabar" };

  let screen = "setup"; // setup | run | result
  let ctx = null; // { profile, grade, onExit, onProfileUpdate }
  let selectedSubjectId = null;
  let vState = null;
  let vSession = null;
  let currentQuestion = null;
  let lastFeedback = null;
  let lastSummary = null;
  let lastReward = null;
  let lastDateStr = "";
  let questionStartPerf = 0;
  let isSubmitting = false;

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

  function getPools() {
    if (!ctx || !ctx.grade || !App.Variants) return [];
    return App.Variants.getAvailablePools(App.Pools, App.Curriculum, ctx.grade.id);
  }

  function resolveActivePool() {
    const pools = getPools();
    if (!pools.length) return null;
    const found = selectedSubjectId ? pools.find((p) => p.subjectId === selectedSubjectId) : null;
    const active = found || pools[0];
    selectedSubjectId = active.subjectId;
    return active;
  }

  function getSubjectName(grade, subjectId) {
    const subj =
      grade && Array.isArray(grade.subjects)
        ? grade.subjects.find((s) => s.id === subjectId)
        : null;
    return subj ? subj.name : subjectId;
  }

  function findUnit(curriculum, unitId) {
    if (!curriculum || !Array.isArray(curriculum.units)) return null;
    return curriculum.units.find((u) => u && u.id === unitId) || null;
  }

  function findSkill(unit, skillId) {
    if (!unit || !Array.isArray(unit.skills)) return null;
    return unit.skills.find((s) => s && s.id === skillId) || null;
  }

  function buildFreshSeed(sessionCount) {
    const step = Math.imul((Number(sessionCount) || 0) + 1, 2654435761);
    return ((Date.now() ^ step) >>> 0) || 1;
  }

  function startSession(activePool) {
    if (!ctx || !activePool || !App.Variants || !App.Storage) return;
    const subjectId = activePool.subjectId;
    const validIds = new Set((activePool.curriculum.units || []).map((u) => u.id));
    const tickedUnits = App.Storage.getVariantUnits(ctx.profile.id, ctx.grade.id, subjectId).filter((id) =>
      validIds.has(id)
    );
    if (!tickedUnits.length) return;

    const rawState = App.Storage.getVariantState(ctx.profile.id, ctx.grade.id, subjectId);
    const baseState = App.Variants.normalizeState(rawState);
    const freshSeed = buildFreshSeed(baseState.sessionCount);

    const created = App.Variants.createSession({
      pool: activePool.pool,
      tickedUnits,
      state: baseState,
      count: App.Variants.SESSION_LENGTH,
      seed: freshSeed
    });

    const drawn = App.Variants.drawNextQuestion(activePool.pool, created.session, created.state);
    vSession = drawn.session;
    vState = drawn.state;
    currentQuestion = drawn.question;
    App.Storage.saveVariantState(ctx.profile.id, ctx.grade.id, subjectId, vState);

    if (!currentQuestion) {
      screen = "setup";
      render();
      return;
    }

    lastFeedback = null;
    lastSummary = null;
    lastReward = null;
    isSubmitting = false;
    screen = "run";
    render();
  }

  function finishSession(activePool) {
    if (!ctx || !activePool || !vSession) return;
    const subjectId = activePool.subjectId;
    const subjName = getSubjectName(ctx.grade, subjectId);
    const answers = Array.isArray(vSession.answers) ? vSession.answers : [];
    const total = answers.length;
    let score = 0;
    let streak = 0;
    let maxStreak = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] && (answers[i].isCorrect || answers[i].correct)) {
        score += 1;
        streak += 1;
        if (streak > maxStreak) maxStreak = streak;
      } else {
        streak = 0;
      }
    }

    lastReward = App.Storage.recordAttempt(ctx.profile.id, {
      gradeId: ctx.grade.id,
      subjectId,
      subjectName: subjName,
      chapterId: "latihan_rawak",
      chapterTitle: "Latihan Rawak (" + subjName + ")",
      setNum: "Rawak",
      score,
      total,
      speedBonus: 0,
      maxStreak,
      mode: "variant",
      answers,
      isVariant: true,
      unitIds: vSession.tickedUnits.slice()
    });

    if (typeof ctx.onProfileUpdate === "function") ctx.onProfileUpdate();
    lastSummary = App.Variants.summarizeSession(vSession, vState, activePool.curriculum);
    lastDateStr = App.Storage.fmtDate(new Date().toISOString());
    screen = "result";
    render();
  }

  function renderSetup(el) {
    const pools = getPools();
    const active = resolveActivePool();
    if (!active) {
      el.innerHTML = `
        <div class="mock-wrap vr-wrap">
          <div class="mock-head">
            <button type="button" class="btn-secondary btn-sm" id="vr-back">← Kembali</button>
            <h2>🔀 Latihan Rawak</h2>
          </div>
          <div class="mock-paper-card">
            <h3>Belum tersedia untuk ${esc(ctx.grade ? ctx.grade.name : ctx.profile.gradeId)}</h3>
            <p class="mock-note">Bank soalan Latihan Rawak untuk tahap ini sedang disiapkan.</p>
          </div>
        </div>`;
      el.querySelector("#vr-back").addEventListener("click", () => {
        App.Sound.click();
        ctx.onExit();
      });
      return;
    }

    const subjectId = active.subjectId;
    const subjName = getSubjectName(ctx.grade, subjectId);
    const units = Array.isArray(active.curriculum.units) ? active.curriculum.units : [];
    const savedState = App.Variants.normalizeState(
      App.Storage.getVariantState(ctx.profile.id, ctx.grade.id, subjectId)
    );
    const tickedSet = new Set(App.Storage.getVariantUnits(ctx.profile.id, ctx.grade.id, subjectId));

    const unitCounts = {};
    for (let i = 0; i < active.pool.length; i++) {
      const q = active.pool[i];
      if (q && q.unit) unitCounts[q.unit] = (unitCounts[q.unit] || 0) + 1;
    }

    const subjPickerHtml =
      pools.length > 1
        ? `<div class="vr-subj-pills" role="group" aria-label="Pilih subjek">
            ${pools
              .map(
                (p) =>
                  `<button type="button" class="vr-subj-pill ${p.subjectId === subjectId ? "is-active" : ""}" data-vr-subj="${esc(p.subjectId)}">${esc(getSubjectName(ctx.grade, p.subjectId))}</button>`
              )
              .join("")}
          </div>`
        : "";

    const unitsHtml = units
      .map((u) => {
        const skills = Array.isArray(u.skills) ? u.skills : [];
        const unitQCount = unitCounts[u.id] || 0;
        let hasProgress = false;
        let masteredCount = 0;
        for (let i = 0; i < skills.length; i++) {
          const skState = savedState.skills[skills[i].id];
          if (skState && skState.attempts > 0) {
            hasProgress = true;
            if (App.Variants.isSkillMastered(skState)) masteredCount += 1;
          }
        }
        const masteryMeta = hasProgress ? ` • ${masteredCount}/${skills.length} kuat` : "";
        const checked = tickedSet.has(u.id) ? "checked" : "";
        return `
          <label class="vr-unit-item">
            <input type="checkbox" class="vr-unit-chk" data-unit-id="${esc(u.id)}" ${checked}>
            <span class="vr-unit-body">
              <strong class="vr-unit-title">${esc(u.textbookUnit || u.name)}</strong>
              <small class="vr-unit-meta">${skills.length} kemahiran • ${unitQCount} soalan${esc(masteryMeta)}</small>
            </span>
          </label>`;
      })
      .join("");

    const initialCount = units.filter((u) => tickedSet.has(u.id)).length;

    el.innerHTML = `
      <div class="mock-wrap vr-wrap">
        <div class="mock-head">
          <button type="button" class="btn-secondary btn-sm" id="vr-back">← Kembali</button>
          <h2>🔀 Latihan Rawak • ${esc(subjName)}</h2>
        </div>
        ${subjPickerHtml}
        <div class="mock-paper-card">
          <h3>Bab yang sudah dipelajari</h3>
          <p class="vr-intro">Tandakan unit yang sudah kamu pelajari di sekolah. Soalan akan dipilih daripada unit yang ditanda sahaja.</p>
          <div class="vr-bulk-actions">
            <button type="button" class="btn-secondary btn-sm" id="vr-select-all">Pilih Semua</button>
            <button type="button" class="btn-secondary btn-sm" id="vr-clear-all">Kosongkan</button>
          </div>
          <div class="vr-unit-list">${unitsHtml}</div>
          <p class="vr-reminder" id="vr-empty-msg" ${initialCount > 0 ? "hidden" : ""}>Sila tandakan sekurang-kurangnya 1 unit sebelum mula.</p>
          <div class="vr-start-wrap">
            <button type="button" class="btn-tactile btn-true" id="vr-start-btn" ${initialCount === 0 ? "disabled" : ""}>▶ Mula Latihan Rawak (10 Soalan)</button>
          </div>
        </div>
      </div>`;

    const syncTicks = () => {
      const chks = el.querySelectorAll(".vr-unit-chk");
      const selected = [];
      chks.forEach((chk) => {
        if (chk.checked) selected.push(chk.getAttribute("data-unit-id"));
      });
      App.Storage.setVariantUnits(ctx.profile.id, ctx.grade.id, subjectId, selected);
      const startBtn = el.querySelector("#vr-start-btn");
      const emptyMsg = el.querySelector("#vr-empty-msg");
      if (startBtn) startBtn.disabled = selected.length === 0;
      if (emptyMsg) emptyMsg.hidden = selected.length > 0;
    };

    el.querySelector("#vr-back").addEventListener("click", () => {
      App.Sound.click();
      ctx.onExit();
    });

    el.querySelectorAll("[data-vr-subj]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextId = btn.getAttribute("data-vr-subj");
        if (nextId && nextId !== selectedSubjectId) {
          App.Sound.click();
          selectedSubjectId = nextId;
          renderSetup(el);
        }
      });
    });

    el.querySelectorAll(".vr-unit-chk").forEach((chk) => {
      chk.addEventListener("change", () => {
        App.Sound.click();
        syncTicks();
      });
    });

    el.querySelector("#vr-select-all").addEventListener("click", () => {
      App.Sound.click();
      el.querySelectorAll(".vr-unit-chk").forEach((chk) => {
        chk.checked = true;
      });
      syncTicks();
    });

    el.querySelector("#vr-clear-all").addEventListener("click", () => {
      App.Sound.click();
      el.querySelectorAll(".vr-unit-chk").forEach((chk) => {
        chk.checked = false;
      });
      syncTicks();
    });

    el.querySelector("#vr-start-btn").addEventListener("click", () => {
      App.Sound.click();
      startSession(active);
    });
  }

  function renderRun(el) {
    const active = resolveActivePool();
    if (!active || !vSession || !currentQuestion) {
      screen = "setup";
      render();
      return;
    }

    const q = currentQuestion;
    const fb = lastFeedback;
    const total = vSession.targetCount || App.Variants.SESSION_LENGTH;
    const qNo = fb ? vSession.answers.length : vSession.answers.length + 1;
    const progressPct = total > 0 ? Math.min(100, Math.round((qNo / total) * 100)) : 0;

    const unitObj = findUnit(active.curriculum, q.unit);
    const skillObj = findSkill(unitObj, q.skill);
    const unitName = unitObj ? unitObj.name || unitObj.textbookUnit || q.unit : q.unit;
    const skillName = skillObj ? skillObj.name || q.skill : q.skill;
    const diffText = DIFF_LABELS[q.diff] || DIFF_LABELS.L;

    const optsHtml = (Array.isArray(q.options) ? q.options : [])
      .map((optText, idx) => {
        let cls = "mock-opt";
        if (fb) {
          if (idx === q.correctIndex) cls += " is-picked diag-opt-right";
          else if (idx === fb.attempt.selectedIndex) cls += " diag-opt-wrong";
        }
        return `
          <button type="button" class="${cls}" data-idx="${idx}" ${fb ? "disabled" : ""}>
            <span class="mo-key">${esc(LETTERS[idx] || String(idx + 1))}</span>
            <span>${esc(optText)}</span>
          </button>`;
      })
      .join("");

    const feedbackHtml = fb
      ? `<div class="diag-feedback ${fb.attempt.isCorrect ? "is-right" : "is-wrong"}">
          <strong>${fb.attempt.isCorrect ? "✅ Tepat! Bagus!" : `💡 Jawapan tepat: ${esc(LETTERS[q.correctIndex] || "")}`}</strong>
          ${q.explanation ? `<p>${esc(q.explanation)}</p>` : ""}
          ${!fb.attempt.isCorrect ? `<p class="vr-retry-note">Soalan lain bagi kemahiran ini akan diuji semula nanti.</p>` : ""}
          <button type="button" class="btn-tactile btn-true" id="vr-next-btn">${fb.completed ? "Lihat Keputusan →" : "Soalan Seterusnya →"}</button>
        </div>`
      : "";

    el.innerHTML = `
      <div class="mock-wrap vr-wrap">
        <div class="mock-bar">
          <button type="button" class="btn-secondary btn-sm" id="vr-quit">← Keluar</button>
          <span class="diag-progress-lbl">Soalan ${qNo} / ${total}</span>
        </div>
        <div class="mini-progress diag-bar-track"><div class="mini-fill" style="width:${progressPct}%"></div></div>
        <div class="mock-qcard">
          <div class="mock-qno vr-eyebrow">
            <span>${esc(unitName)} • ${esc(skillName)}</span>
            <span class="vr-diff-pill vr-diff-${esc(q.diff)}">${esc(diffText)}</span>
          </div>
          <div class="mock-q">${esc(q.q)}</div>
          <div class="mock-opts">${optsHtml}</div>
          ${feedbackHtml}
        </div>
      </div>`;

    if (!fb) {
      questionStartPerf = perfNow();
    }

    el.querySelector("#vr-quit").addEventListener("click", () => {
      App.Sound.click();
      vSession = null;
      currentQuestion = null;
      lastFeedback = null;
      isSubmitting = false;
      screen = "setup";
      render();
    });

    if (!fb) {
      el.querySelectorAll("[data-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (isSubmitting || lastFeedback) return;
          isSubmitting = true;
          const timeSpentMs = Math.max(0, Math.round(perfNow() - questionStartPerf));
          const selectedIndex = Number(btn.getAttribute("data-idx"));
          const res = App.Variants.recordAnswer(vState, vSession, {
            question: currentQuestion,
            selectedIndex,
            timeSpentMs,
            nowMs: Date.now()
          });
          vState = res.state;
          vSession = res.session;
          App.Storage.saveVariantState(ctx.profile.id, ctx.grade.id, active.subjectId, vState);

          if (res.attempt.isCorrect) App.Sound.correct();
          else App.Sound.wrong();

          lastFeedback = {
            attempt: res.attempt,
            completed: Boolean(vSession && vSession.completed)
          };
          isSubmitting = false;
          render();
        });
      });
    } else {
      el.querySelector("#vr-next-btn").addEventListener("click", () => {
        App.Sound.click();
        if (vSession.completed) {
          finishSession(active);
          return;
        }
        const drawn = App.Variants.drawNextQuestion(active.pool, vSession, vState);
        vSession = drawn.session;
        vState = drawn.state;
        App.Storage.saveVariantState(ctx.profile.id, ctx.grade.id, active.subjectId, vState);
        if (!drawn.question) {
          finishSession(active);
          return;
        }
        currentQuestion = drawn.question;
        lastFeedback = null;
        isSubmitting = false;
        render();
      });
    }
  }

  function statusBadgeHtml(status) {
    if (status === "kuat") return `<span class="vr-status is-kuat">🟢 Kuat</span>`;
    if (status === "lemah") return `<span class="vr-status is-lemah">🔴 Lemah</span>`;
    return `<span class="vr-status is-pending">⚪ Belum cukup data</span>`;
  }

  function renderResult(el) {
    const active = resolveActivePool();
    const sum = lastSummary;
    if (!sum || !active) {
      screen = "setup";
      render();
      return;
    }

    const rew = lastReward || { earnedXp: 0, earnedCoins: 0 };
    const skillsHtml = sum.skills.length
      ? `<div class="vr-skill-list">
          ${sum.skills
            .map(
              (s) => `
            <div class="vr-skill-row">
              <div class="vr-skill-top">
                <div class="vr-skill-info">
                  <span class="vr-skill-unit">${esc(s.unitName)}</span>
                  <strong class="vr-skill-name">${esc(s.skillName)}</strong>
                </div>
                ${statusBadgeHtml(s.status)}
              </div>
              <small class="vr-skill-meta">${s.correct}/${s.attempts} tepat • ${s.uniqueCorrect}/3 soalan berbeza</small>
            </div>`
            )
            .join("")}
        </div>`
      : `<p class="mock-note">Tiada rekod kemahiran dalam sesi ini.</p>`;

    el.innerHTML = `
      <div class="mock-wrap vr-wrap">
        <div class="mock-head">
          <h2>🎉 Latihan Rawak Selesai!</h2>
        </div>
        <div class="mock-grade">
          <strong>${sum.pct}%</strong>
          <span>${sum.score} daripada ${sum.total} soalan tepat</span>
          <small>+${rew.earnedXp} XP • +${rew.earnedCoins} 🪙 Syiling • ${esc(lastDateStr)}</small>
        </div>
        <div class="mock-paper-card">
          <h3>📊 Ringkasan Kemahiran</h3>
          ${skillsHtml}
        </div>
        <div class="mock-actions">
          <button type="button" class="btn-tactile btn-true" id="vr-play-again">🔄 Main Lagi</button>
          <button type="button" class="btn-secondary" id="vr-change-units">☑️ Tukar Bab</button>
          <button type="button" class="btn-secondary" id="vr-home">🏠 Laman Utama</button>
        </div>
      </div>`;

    el.querySelector("#vr-play-again").addEventListener("click", () => {
      App.Sound.click();
      startSession(active);
    });

    el.querySelector("#vr-change-units").addEventListener("click", () => {
      App.Sound.click();
      vSession = null;
      currentQuestion = null;
      lastFeedback = null;
      screen = "setup";
      render();
    });

    el.querySelector("#vr-home").addEventListener("click", () => {
      App.Sound.click();
      ctx.onExit();
    });
  }

  function render() {
    if (!ctx || !ctx.container) return;
    if (screen === "run") renderRun(ctx.container);
    else if (screen === "result") renderResult(ctx.container);
    else renderSetup(ctx.container);
  }

  App.VariantsUI = {
    open(container, { profile, grade, onExit, onProfileUpdate }) {
      ctx = { container, profile, grade, onExit, onProfileUpdate };
      selectedSubjectId = null;
      vState = null;
      vSession = null;
      currentQuestion = null;
      lastFeedback = null;
      lastSummary = null;
      lastReward = null;
      lastDateStr = "";
      isSubmitting = false;
      screen = "setup";
      render();
    },
    stop() {
      ctx = null;
      vSession = null;
      currentQuestion = null;
      lastFeedback = null;
      isSubmitting = false;
    }
  };
})(window);
