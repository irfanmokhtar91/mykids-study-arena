/**
 * Game Arena Shell & Shared Canvas Utilities (`App.GameUtil`)
 * Hosts 4 real interactive Canvas mini-games (zero A/B/C/D buttons):
 * - fps: Target Strike (FPS Arena)
 * - runner: Crate Rush (4-Lane Runner)
 * - maze: Maze Runner (Top-Down Maze)
 * - puzzle: Reactor Puzzle (Drag-and-Drop Physics)
 *
 * Includes 10-second Speed Mark timer (<=10s = 1.0 mark, >10s = 0.5 mark),
 * 3 Hearts (Practice Save at 0 so kids finish all questions), and a
 * <=10-second auto-countdown Learning Overlay on wrong answers.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  App.GAME_MODES = [
    { id: "fps", name: "Target Strike", icon: "🎯", desc: "Tembak dron jawapan tepat di arena!" },
    { id: "runner", name: "Crate Rush", icon: "🦊", desc: "Lari 4 lorong & rempuh peti jawapan tepat!" },
    { id: "maze", name: "Maze Runner", icon: "🧭", desc: "Navigasi pagar sesat ke portal jawapan tepat!" },
    { id: "puzzle", name: "Reactor Puzzle", icon: "🧲", desc: "Seret & pasangkan teras jawapan ke reaktor!" }
  ];

  const SPEED_BONUS_SEC = 10;
  const BOSS_EMOJIS = ["👾", "🤖", "🐉", "🦖", "🐙"];

  function pickBossEmoji(chapterId) {
    let sum = 0;
    for (let i = 0; i < chapterId.length; i++) sum += chapterId.charCodeAt(i);
    return BOSS_EMOJIS[sum % BOSS_EMOJIS.length];
  }

  function getStudyGuidance(subjectId, chapterTitle) {
    if (subjectId === "math" || subjectId === "addmath") {
      return `Semak semula rumus dan langkah pengiraan dalam ${chapterTitle}. Tulis setiap langkah di atas kertas sebelum memilih jawapan.`;
    }
    if (subjectId === "fizik" || subjectId === "kimia") {
      return `Periksa definisi, unit SI atau formula bagi ${chapterTitle}, dan kaitkan dengan prinsip asas yang diterangkan di atas.`;
    }
    if (subjectId === "sains" || subjectId === "biologi") {
      return `Fahami proses dan kata kunci utama dalam ${chapterTitle} (bukan sekadar menghafal). Buat peta minda ringkas bagi konsep ini.`;
    }
    if (subjectId === "bm" || subjectId === "bi") {
      return `Baca keseluruhan ayat dan kenal pasti petunjuk masa, subjek/objek, atau imbuhan yang tepat dalam ${chapterTitle}.`;
    }
    if (subjectId === "pi") {
      return `Rujuk semula hukum, dalil atau sirah berkaitan dalam ${chapterTitle} dan ulang kaji perbezaan istilah pentingnya.`;
    }
    return `Ulang kaji nota ringkas dan fakta utama bagi ${chapterTitle}, kemudian perhatikan perbezaan antara pilihan kamu dan jawapan tepat.`;
  }

  App.GameUtil_getStudyGuidance = getStudyGuidance;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ==================== SHARED CANVAS & INPUT UTILITIES ====================
  function drawRoundedRect(ctx, x, y, w, h, r) {
    const rad = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rad, y);
    ctx.lineTo(x + w - rad, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
    ctx.lineTo(x + w, y + h - rad);
    ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
    ctx.lineTo(x + rad, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
    ctx.lineTo(x, y + rad);
    ctx.quadraticCurveTo(x, y, x + rad, y);
    ctx.closePath();
  }

  function wrapLines(ctx, text, maxW) {
    const words = String(text || "").split(/\s+/);
    const lines = [];
    let current = "";
    for (const w of words) {
      if (!w) continue;
      const test = current ? current + " " + w : w;
      if (ctx.measureText(test).width <= maxW) {
        current = test;
      } else {
        if (current) lines.push(current);
        if (ctx.measureText(w).width <= maxW) {
          current = w;
        } else {
          // Break very long single word cleanly
          let chunk = "";
          for (const ch of w) {
            if (ctx.measureText(chunk + ch).width <= maxW) {
              chunk += ch;
            } else {
              if (chunk) lines.push(chunk);
              chunk = ch;
            }
          }
          current = chunk;
        }
      }
    }
    if (current) lines.push(current);
    return lines.length ? lines : [""];
  }

  function drawWrappedCard(ctx, x, y, w, h, text, opts = {}) {
    const bg = opts.bg || "#ffffff";
    const border = opts.border || "#18181b";
    const textColor = opts.textColor || "#18181b";
    const shadowColor = opts.shadowColor || "#18181b";
    const maxFont = opts.maxFont || 14;
    const minFont = opts.minFont || 9;
    const padX = 8;
    const padY = 6;
    const availW = Math.max(24, w - padX * 2);
    const availH = Math.max(16, h - padY * 2);

    // Shadow
    ctx.save();
    ctx.fillStyle = shadowColor;
    drawRoundedRect(ctx, x, y + 3, w, h, 10);
    ctx.fill();

    // Card fill & border
    ctx.fillStyle = bg;
    ctx.strokeStyle = border;
    ctx.lineWidth = 2.2;
    drawRoundedRect(ctx, x, y, w, h, 10);
    ctx.fill();
    ctx.stroke();

    // Auto-fit font size & wrap
    let fontSize = maxFont;
    let lines = [];
    let lineH = fontSize * 1.22;
    while (fontSize >= minFont) {
      ctx.font = `700 ${fontSize}px 'Plus Jakarta Sans', 'Segoe UI', sans-serif`;
      lines = wrapLines(ctx, text, availW);
      lineH = fontSize * 1.22;
      if (lines.length * lineH <= availH) break;
      fontSize -= 0.5;
    }

    // Clamp lines if still slightly tall
    const maxLines = Math.max(1, Math.floor(availH / lineH));
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      const last = lines[maxLines - 1];
      lines[maxLines - 1] = last.length > 3 ? last.slice(0, -2) + "…" : last;
    }

    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const totalH = lines.length * lineH;
    const startY = y + (h - totalH) / 2 + lineH / 2;
    lines.forEach((line, i) => {
      ctx.fillText(line, x + w / 2, startY + i * lineH);
    });
    ctx.restore();
  }

  function setupCanvas(canvas) {
    let w = 640;
    let h = 360;
    let dpr = Math.min(2, global.devicePixelRatio || 1);

    function resize() {
      const parent = canvas.parentElement;
      const rect = (parent || canvas).getBoundingClientRect();
      w = Math.max(260, Math.floor(rect.width));
      h = Math.max(200, Math.floor(rect.height));
      dpr = Math.min(2, global.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    resize();
    let ro = null;
    if (typeof global.ResizeObserver === "function" && canvas.parentElement) {
      ro = new global.ResizeObserver(resize);
      ro.observe(canvas.parentElement);
    }
    global.addEventListener("resize", resize);

    return {
      getSize: () => ({ w, h }),
      beginFrame: (ctx) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
      },
      destroy: () => {
        if (ro) ro.disconnect();
        global.removeEventListener("resize", resize);
      }
    };
  }

  function createGamepadReader() {
    let prevAction = false;
    return {
      read: () => {
        try {
          if (!navigator.getGamepads) return { dx: 0, dy: 0, actionPressed: false };
          const pads = navigator.getGamepads();
          const pad = pads && pads[0];
          if (!pad) return { dx: 0, dy: 0, actionPressed: false };
          const ax = pad.axes[0] || 0;
          const ay = pad.axes[1] || 0;
          let dx = Math.abs(ax) > 0.25 ? ax : 0;
          let dy = Math.abs(ay) > 0.25 ? ay : 0;
          if (pad.buttons[14]?.pressed) dx = -1;
          if (pad.buttons[15]?.pressed) dx = 1;
          if (pad.buttons[12]?.pressed) dy = -1;
          if (pad.buttons[13]?.pressed) dy = 1;
          const actNow = !!(pad.buttons[0]?.pressed || pad.buttons[1]?.pressed);
          const actionPressed = actNow && !prevAction;
          prevAction = actNow;
          return { dx, dy, actionPressed };
        } catch (e) {
          return { dx: 0, dy: 0, actionPressed: false };
        }
      }
    };
  }

  App.GameUtil = {
    setupCanvas,
    drawRoundedRect,
    drawWrappedCard,
    createGamepadReader
  };

  // ==================== GAME SESSION CONTROLLER ====================
  App.Games = {
    startSession: function ({ container, profile, grade, subject, chapter, setNum, mode, questions, onComplete, onExit }) {
      let idx = 0;
      let score = 0;
      let speedBonus = 0;
      let streak = 0;
      let maxStreak = 0;
      let hearts = 3;
      let activeMini = null;
      let timerInterval = null;
      let overlayInterval = null;
      let advanceTimeout = null;
      let qStartMs = 0;
      let destroyed = false;
      const answers = [];
      const bossEmoji = pickBossEmoji(chapter.id);

      const safeMode = App.MiniGames[mode] ? mode : "fps";

      function clearTimers() {
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
        if (overlayInterval) {
          clearInterval(overlayInterval);
          overlayInterval = null;
        }
        if (advanceTimeout) {
          clearTimeout(advanceTimeout);
          advanceTimeout = null;
        }
      }

      function destroyMini() {
        if (activeMini) {
          activeMini.destroy();
          activeMini = null;
        }
      }

      function cleanupAll() {
        destroyed = true;
        clearTimers();
        destroyMini();
        global.removeEventListener("keydown", onOverlayKeyDown);
      }

      let overlayDismissFn = null;
      function onOverlayKeyDown(e) {
        if (overlayDismissFn && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          overlayDismissFn();
        }
      }
      global.addEventListener("keydown", onOverlayKeyDown);

      function renderHeartsHtml() {
        if (hearts <= 0) {
          return `<span class="pill pill-practice" title="Nyawa habis — teruskan dalam Mod Latihan">🛡️ Mod Latihan</span>`;
        }
        const filled = "❤️".repeat(hearts);
        const empty = "🖤".repeat(3 - hearts);
        return `<span class="pill pill-hearts">${filled}${empty}</span>`;
      }

      function renderQuestion() {
        if (destroyed) return;
        clearTimers();
        destroyMini();
        overlayDismissFn = null;

        if (idx >= questions.length) {
          cleanupAll();
          const cleanScore = Math.round(score);
          const pct = Math.round((cleanScore / questions.length) * 100);
          App.Sound.finish(pct >= 60);
          onComplete({ score: cleanScore, total: questions.length, speedBonus, maxStreak, answers, pct });
          return;
        }

        const qObj = questions[idx];
        const progressPct = Math.round((idx / questions.length) * 100);
        const bossHp = Math.max(0, Math.round(((questions.length - score) / questions.length) * 100));
        const muted = App.Sound.isMuted();
        const modeInfo = App.GAME_MODES.find((m) => m.id === safeMode) || App.GAME_MODES[0];

        container.innerHTML = `
          <div class="game-shell mode-${safeMode}">
            <div class="game-topbar">
              <div class="game-nav-actions">
                <button type="button" class="btn-ghost btn-sm" id="btn-quit-game">← Keluar</button>
                <button type="button" class="btn-ghost btn-sm" id="btn-game-sound" title="Bunyi">${muted ? "🔇" : "🔊"}</button>
                <span class="pill pill-qcount">S${idx + 1}/${questions.length}</span>
                <span class="pill pill-mode">${modeInfo.icon} ${escapeHtml(modeInfo.name)}</span>
              </div>

              <div class="game-meta">
                <span>${subject.icon} ${escapeHtml(subject.name)}</span>
                <span>•</span>
                <span>Set ${setNum}</span>
                <span>•</span>
                <span>S${idx + 1}/${questions.length}</span>
              </div>

              <div class="game-stats">
                ${renderHeartsHtml()}
                <span class="pill pill-timer" id="speed-timer-pill">⚡ 10.0s</span>
                <span class="pill pill-score" id="live-score-pill">Skor: ${score}</span>
                <span class="pill pill-bonus" id="live-bonus-pill" title="Bonus Pantas (≤10s) — kiraan berasingan">⚡ +${speedBonus}</span>
                <span class="pill pill-streak">🔥 ${streak}</span>
              </div>
            </div>

            <div class="timer-progress-row">
              <div class="progress-track" title="Kemajuan Set">
                <div class="progress-fill" style="width:${progressPct}%"></div>
              </div>
              <div class="speed-track" title="Jawab dalam 10 saat untuk mendapat +1 Bonus Pantas (kiraan berasingan)">
                <div class="speed-fill" id="speed-bar-fill" style="width:100%"></div>
              </div>
            </div>

            <div class="question-banner">
              <span class="question-num">S${idx + 1}</span>
              <div class="question-text">${escapeHtml(qObj.q)}</div>
            </div>

            <div class="canvas-stage" id="canvas-stage">
              <canvas id="game-canvas"></canvas>
              <div class="toast-banner hidden" id="game-toast"></div>
              <div class="learning-overlay hidden" id="learning-overlay"></div>
            </div>
          </div>
        `;

        container.querySelector("#btn-quit-game").addEventListener("click", () => {
          cleanupAll();
          App.Sound.click();
          onExit();
        });

        const soundBtn = container.querySelector("#btn-game-sound");
        soundBtn.addEventListener("click", () => {
          App.Sound.setMuted(!App.Sound.isMuted());
          soundBtn.textContent = App.Sound.isMuted() ? "🔇" : "🔊";
        });

        // Start 10.0s Speed Bonus timer (accuracy mark stays 1 regardless)
        qStartMs = performance.now();
        const timerPill = container.querySelector("#speed-timer-pill");
        const speedFill = container.querySelector("#speed-bar-fill");

        const updateTimerDisplay = () => {
          const elapsed = (performance.now() - qStartMs) / 1000;
          const rem = Math.max(0, SPEED_BONUS_SEC - elapsed);
          const narrow = global.innerWidth <= 640;
          if (rem > 0) {
            timerPill.textContent = narrow ? `⚡ ${rem.toFixed(1)}s` : `⚡ Bonus ${rem.toFixed(1)}s`;
            timerPill.classList.remove("half-mark");
            speedFill.style.width = `${Math.round((rem / SPEED_BONUS_SEC) * 100)}%`;
            speedFill.classList.remove("half-mark");
          } else {
            timerPill.textContent = narrow ? `⏱️ Biasa` : `⏱️ Masa Biasa (+1)`;
            timerPill.classList.add("half-mark");
            speedFill.style.width = "100%";
            speedFill.classList.add("half-mark");
          }
        };
        updateTimerDisplay();
        timerInterval = setInterval(updateTimerDisplay, 100);

        const canvasEl = container.querySelector("#game-canvas");

        activeMini = App.MiniGames[safeMode].mount({
          canvas: canvasEl,
          controlsEl: null,
          qObj,
          playerAvatar: profile.avatar || "🦊",
          bossEmoji,
          bossHp,
          onAnswer: (chosenIdx) => {
            if (destroyed) return;
            if (timerInterval) {
              clearInterval(timerInterval);
              timerInterval = null;
            }
            const elapsedSec = (performance.now() - qStartMs) / 1000;
            const isCorrect = chosenIdx === qObj.correctIndex;

            if (activeMini && activeMini.showOutcome) {
              activeMini.showOutcome(chosenIdx, isCorrect);
            }

            if (isCorrect) {
              score += 1;
              const gotBonus = elapsedSec <= SPEED_BONUS_SEC;
              if (gotBonus) speedBonus += 1;
              streak++;
              if (streak > maxStreak) maxStreak = streak;
              setTimeout(() => App.Sound.correct(streak), 60);

              answers.push({ qObj, selectedIndex: chosenIdx, isCorrect: true, gotBonus, elapsedSec });

              const scorePill = container.querySelector("#live-score-pill");
              if (scorePill) scorePill.textContent = `Skor: ${score}`;
              const bonusPill = container.querySelector("#live-bonus-pill");
              if (bonusPill) bonusPill.textContent = `⚡ +${speedBonus}`;

              const toast = container.querySelector("#game-toast");
              if (toast) {
                toast.classList.remove("hidden");
                toast.className = `toast-banner ${gotBonus ? "toast-full" : "toast-half"}`;
                toast.textContent = gotBonus
                  ? `✨ TEPAT! +1 Markah • ⚡ +1 Bonus (${elapsedSec.toFixed(1)}s)`
                  : `✅ TEPAT! +1 Markah (${elapsedSec.toFixed(1)}s)`;
              }

              advanceTimeout = setTimeout(() => {
                idx++;
                renderQuestion();
              }, 850);
            } else {
              streak = 0;
              hearts = Math.max(0, hearts - 1);
              setTimeout(() => App.Sound.wrong(), 60);

              answers.push({ qObj, selectedIndex: chosenIdx, isCorrect: false, gotBonus: false, elapsedSec });

              if (activeMini && activeMini.setPaused) activeMini.setPaused(true);

              const wrongChosen = qObj.options[chosenIdx] || "-";
              const trueAnswer = qObj.options[qObj.correctIndex];
              const studyTip = getStudyGuidance(subject.id, chapter.title);
              const overlay = container.querySelector("#learning-overlay");
              let secLeft = 10;
              let countdownPaused = false;

              const proceedNext = () => {
                overlayDismissFn = null;
                if (overlayInterval) {
                  clearInterval(overlayInterval);
                  overlayInterval = null;
                }
                App.Sound.click();
                idx++;
                renderQuestion();
              };
              overlayDismissFn = proceedNext;

              overlay.classList.remove("hidden");
              overlay.innerHTML = `
                <div class="learning-card">
                  <div class="learning-head">
                    <strong>${hearts === 0 ? "🛡️ Mod Latihan — Teruskan!" : "❌ Kurang Tepat (-1 ❤️)"}</strong>
                    <span class="countdown-pill" id="overlay-cd">10s</span>
                  </div>
                  <div class="learning-wrong">
                    <span>Kenapa salah — jawapan yang kamu pilih:</span>
                    <strong>❌ ${escapeHtml(wrongChosen)}</strong>
                  </div>
                  <div class="learning-answer">
                    <span>Jawapan tepat yang sebenar:</span>
                    <strong>✅ ${escapeHtml(trueAnswer)}</strong>
                  </div>
                  <p class="learning-exp"><strong>💡 Penerangan:</strong> ${escapeHtml(qObj.explanation)}</p>
                  <div class="learning-tip">
                    <strong>🎯 Cara untuk faham:</strong> ${escapeHtml(studyTip)}
                  </div>
                  <div class="learning-actions">
                    <button type="button" class="btn-secondary" id="btn-overlay-pause">⏸️ Henti Masa</button>
                    <button type="button" class="btn-primary" id="btn-overlay-continue">
                      Teruskan (<span id="btn-cd-num">10</span>s) →
                    </button>
                  </div>
                </div>
              `;

              const pauseBtn = overlay.querySelector("#btn-overlay-pause");
              pauseBtn.addEventListener("click", () => {
                countdownPaused = !countdownPaused;
                pauseBtn.textContent = countdownPaused ? "▶️ Sambung Masa" : "⏸️ Henti Masa";
                const cd1 = overlay.querySelector("#overlay-cd");
                if (cd1) cd1.textContent = countdownPaused ? "⏸️ Jeda" : `${secLeft}s`;
              });

              overlay.querySelector("#btn-overlay-continue").addEventListener("click", proceedNext);

              overlayInterval = setInterval(() => {
                if (countdownPaused) return;
                secLeft--;
                const cd1 = overlay.querySelector("#overlay-cd");
                const cd2 = overlay.querySelector("#btn-cd-num");
                if (cd1) cd1.textContent = `${secLeft}s`;
                if (cd2) cd2.textContent = `${secLeft}`;
                if (secLeft <= 0) {
                  proceedNext();
                }
              }, 1000);
            }
          }
        });
      }

      renderQuestion();
    }
  };
})(window);
