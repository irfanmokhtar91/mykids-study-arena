/**
 * Game Arena Shell & Shared Canvas Utilities (`App.GameUtil`, `App.Games`)
 * Hosts 9 play modes:
 * - mix: 🎲 Campuran Pintar (auto-mix of all interactive + arcade games)
 * - 4 True Interactive Touch Mechanics (`swipe`, `match`, `sort`, `builder`)
 * - 4 Studio-Polished Canvas Arcade Games (`fps`, `runner`, `maze`, `puzzle`)
 *
 * Includes 10-second Speed Bonus timer (separate counter), Power-Ups (50/50 + Freeze),
 * 3 Hearts (Practice Save at 0), Boss Q5 stage, Animated Mascot reactions, and Learning Overlay.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  App.GAME_MODES = [
    { id: "mix", category: "mix", name: "Campuran Pintar", icon: "🎲", desc: "Gabungan automatik 8 permainan — setiap soalan berlainan!" },
    { id: "swipe", category: "interactive", name: "Leret Fakta", icon: "👆", desc: "Leret kanan jika tepat, leret kiri jika salah!" },
    { id: "match", category: "interactive", name: "Sambung Pasangan", icon: "🔌", desc: "Tarik kabel sambung soalan dengan jawapan tepat!" },
    { id: "sort", category: "interactive", name: "Isih Pantas", icon: "📦", desc: "Leret kad ke tong TEPAT atau tong BUKAN!" },
    { id: "builder", category: "interactive", name: "Bina Jawapan", icon: "🧱", desc: "Susun kepingan kata atau rumus menjadi jawapan!" },
    { id: "fps", category: "arcade", name: "Target Strike", icon: "🎯", desc: "Tembak dron jawapan tepat di arena!" },
    { id: "runner", category: "arcade", name: "Crate Rush", icon: "🦊", desc: "Lari 4 lorong & rempuh peti jawapan tepat!" },
    { id: "maze", category: "arcade", name: "Maze Runner", icon: "🧭", desc: "Navigasi pagar sesat ke portal jawapan tepat!" },
    { id: "puzzle", category: "arcade", name: "Reactor Puzzle", icon: "🧲", desc: "Seret atau leret teras jawapan ke reaktor!" }
  ];

  const SPEED_BONUS_SEC = 10;
  const FREEZE_MS = 6000;
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

  function getEffectColors(effectId) {
    if (effectId === "fx_rainbow") return ["#ef4444", "#f59e0b", "#10b981", "#38bdf8", "#a855f7"];
    if (effectId === "fx_lightning") return ["#facc15", "#38bdf8", "#fef08a"];
    if (effectId === "fx_fire") return ["#ef4444", "#f97316", "#fde047"];
    if (effectId === "fx_plasma") return ["#a855f7", "#ec4899", "#38bdf8"];
    return ["#38bdf8", "#fde047", "#34d399"];
  }

  function drawFloatingPopups(ctx, popups, dt) {
    for (let i = popups.length - 1; i >= 0; i--) {
      const p = popups[i];
      p.life -= dt;
      p.y -= 36 * dt;
      if (p.life <= 0) {
        popups.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life / p.maxLife));
      ctx.font = "800 15px 'Fredoka', 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = "#18181b";
      ctx.strokeText(p.text, p.x, p.y);
      ctx.fillStyle = p.color || "#fde047";
      ctx.fillText(p.text, p.x, p.y);
      ctx.restore();
    }
  }

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

    ctx.save();
    ctx.fillStyle = shadowColor;
    drawRoundedRect(ctx, x, y + 3, w, h, 10);
    ctx.fill();

    ctx.fillStyle = bg;
    ctx.strokeStyle = border;
    ctx.lineWidth = 2.2;
    drawRoundedRect(ctx, x, y, w, h, 10);
    ctx.fill();
    ctx.stroke();

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
    createGamepadReader,
    getEffectColors,
    drawFloatingPopups
  };

  function resolveModeForQuestion(selectedMode, setNum, idx, totalQ) {
    if (selectedMode !== "mix") {
      return App.MiniGames[selectedMode] ? selectedMode : "fps";
    }
    // Mix Interactive + Arcade smoothly across Q1..Q5
    const seqEven = ["swipe", "fps", "builder", "match", "runner"];
    const seqOdd = ["match", "runner", "sort", "puzzle", "fps"];
    const baseSeq = setNum % 2 === 0 ? seqEven : seqOdd;
    let chosen = baseSeq[(idx + setNum) % baseSeq.length];
    if (idx === totalQ - 1) {
      // Q5 Boss Finale: action-focused finish
      chosen = setNum % 3 === 0 ? "runner" : setNum % 2 === 0 ? "fps" : "sort";
    }
    return App.MiniGames[chosen] ? chosen : "swipe";
  }

  App.Games = {
    startSession: function ({
      container,
      profile,
      grade,
      subject,
      chapter,
      setNum,
      mode,
      questions,
      dlp = false,
      isRevision = false,
      onComplete,
      onExit
    }) {
      let idx = 0;
      let score = 0;
      let speedBonus = 0;
      let streak = 0;
      let maxStreak = 0;
      let hearts = 3;
      let charges5050 = 1;
      let chargesFreeze = 1;
      let frozenMsRemaining = 0;
      let activeElapsedMs = 0;
      let lastTimerTickMs = 0;
      let used5050OnCurrent = false;

      let activeMini = null;
      let timerInterval = null;
      let overlayInterval = null;
      let advanceTimeout = null;
      let destroyed = false;
      const answers = [];
      const bossEmoji = pickBossEmoji(chapter.id);

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
          return `<span class="pill pill-practice" title="Nyawa habis — teruskan dalam Mod Latihan">🛡️ Latihan</span>`;
        }
        return `<span class="pill pill-hearts">${"❤️".repeat(hearts)}${"🖤".repeat(3 - hearts)}</span>`;
      }

      function renderQuestion() {
        if (destroyed) return;
        clearTimers();
        destroyMini();
        overlayDismissFn = null;
        used5050OnCurrent = false;
        frozenMsRemaining = 0;
        activeElapsedMs = 0;

        if (idx >= questions.length) {
          cleanupAll();
          const cleanScore = Math.round(score);
          const pct = Math.round((cleanScore / questions.length) * 100);
          App.Sound.finish(pct >= 60);
          onComplete({ score: cleanScore, total: questions.length, speedBonus, maxStreak, answers, pct });
          return;
        }

        const qObj = questions[idx];
        const isBossRound = idx === questions.length - 1;
        const activeMode = resolveModeForQuestion(mode, setNum, idx, questions.length, grade.id, subject.id, chapter.id, qObj, dlp);
        const miniDef = App.MiniGames[activeMode] || App.MiniGames.fps;
        const modeInfo = App.GAME_MODES.find((m) => m.id === activeMode) || App.GAME_MODES[0];
        const progressPct = Math.round((idx / questions.length) * 100);
        const bossHp = Math.max(0, Math.round(((questions.length - score) / questions.length) * 100));
        const muted = App.Sound.isMuted();

        container.innerHTML = `
          <div class="game-shell mode-${activeMode} ${isBossRound ? "is-boss-round" : ""}">
            <div class="game-topbar">
              <div class="game-nav-actions">
                <button type="button" class="btn-ghost btn-sm" id="btn-quit-game">← Keluar</button>
                <button type="button" class="btn-ghost btn-sm" id="btn-game-sound" title="Bunyi">${muted ? "🔇" : "🔊"}</button>
                <span class="pill pill-qcount ${isBossRound ? "pill-boss" : ""}">${isBossRound ? `👑 BOSS S${idx + 1}/${questions.length}` : `S${idx + 1}/${questions.length}`}</span>
                <span class="pill pill-mode">${modeInfo.icon} ${escapeHtml(modeInfo.name)}</span>
              </div>

              <div class="game-meta">
                <span>${subject.icon} ${escapeHtml(dlp && subject.dlp ? subject.nameEn : subject.name)}</span>
                <span>•</span>
                <span>${isRevision ? "⚡ Kilat" : `Set ${setNum}`}</span>
              </div>

              <div class="game-stats">
                ${renderHeartsHtml()}
                <span class="pill pill-timer" id="speed-timer-pill">⚡ 10.0s</span>
                <span class="pill pill-score" id="live-score-pill">Skor: ${score}</span>
                <span class="pill pill-bonus" id="live-bonus-pill" title="Bonus Pantas (≤10s)">⚡ +${speedBonus}</span>
                <span class="pill pill-streak">🔥 ${streak}</span>
              </div>
            </div>

            <div class="timer-progress-row">
              <div class="progress-track" title="Kemajuan Set">
                <div class="progress-fill" style="width:${progressPct}%"></div>
              </div>
              <div class="speed-track" title="Jawab dalam 10s untuk Bonus Pantas (+1)">
                <div class="speed-fill" id="speed-bar-fill" style="width:100%"></div>
              </div>
              <div class="powerup-strip">
                <button type="button" class="powerup-btn" id="btn-pw-5050" ${charges5050 <= 0 ? "disabled" : ""} title="Buang 2 pilihan salah (cas semula setiap streak 3)">
                  🛡️ 50/50 <span class="pw-cnt">${charges5050}</span>
                </button>
                <button type="button" class="powerup-btn" id="btn-pw-freeze" ${chargesFreeze <= 0 ? "disabled" : ""} title="Bekukan masa bonus 6 saat">
                  ❄️ Beku <span class="pw-cnt">${chargesFreeze}</span>
                </button>
              </div>
            </div>

            <div class="question-banner ${isBossRound ? "boss-banner" : ""}">
              <span class="question-num">${isBossRound ? "👑" : `S${idx + 1}`}</span>
              <div class="question-text">${escapeHtml(qObj.q)}</div>
            </div>

            <div class="canvas-stage ${miniDef.isDomGame ? "is-dom-stage" : ""}" id="canvas-stage">
              ${miniDef.isDomGame ? `<div id="interactive-stage" class="interactive-stage"></div>` : `<canvas id="game-canvas"></canvas>`}
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

        const timerPill = container.querySelector("#speed-timer-pill");
        const speedFill = container.querySelector("#speed-bar-fill");
        const pw5050Btn = container.querySelector("#btn-pw-5050");
        const pwFreezeBtn = container.querySelector("#btn-pw-freeze");

        lastTimerTickMs = performance.now();

        const updateTimerDisplay = () => {
          const now = performance.now();
          const dtMs = Math.max(0, now - lastTimerTickMs);
          lastTimerTickMs = now;

          if (frozenMsRemaining > 0) {
            frozenMsRemaining = Math.max(0, frozenMsRemaining - dtMs);
          } else {
            activeElapsedMs += dtMs;
          }

          const rem = Math.max(0, SPEED_BONUS_SEC - activeElapsedMs / 1000);
          const narrow = global.innerWidth <= 640;

          if (frozenMsRemaining > 0) {
            timerPill.textContent = `❄️ ${(frozenMsRemaining / 1000).toFixed(1)}s`;
            timerPill.classList.add("is-frozen");
            speedFill.classList.add("is-frozen");
          } else {
            timerPill.classList.remove("is-frozen");
            speedFill.classList.remove("is-frozen");
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
          }
        };
        updateTimerDisplay();
        timerInterval = setInterval(updateTimerDisplay, 100);

        pw5050Btn.addEventListener("click", () => {
          if (charges5050 <= 0 || used5050OnCurrent || !activeMini || !activeMini.eliminateTwo) return;
          const ok = activeMini.eliminateTwo();
          if (ok) {
            used5050OnCurrent = true;
            charges5050--;
            pw5050Btn.disabled = true;
            pw5050Btn.querySelector(".pw-cnt").textContent = String(charges5050);
            App.Sound.powerup();
            App.Sound.vibrate(20);
          }
        });

        pwFreezeBtn.addEventListener("click", () => {
          if (chargesFreeze <= 0 || frozenMsRemaining > 0) return;
          chargesFreeze--;
          frozenMsRemaining = FREEZE_MS;
          pwFreezeBtn.disabled = true;
          pwFreezeBtn.querySelector(".pw-cnt").textContent = String(chargesFreeze);
          App.Sound.powerup();
          App.Sound.vibrate(20);
          updateTimerDisplay();
        });

        const mountOpts = {
          canvas: container.querySelector("#game-canvas"),
          stageEl: container.querySelector("#interactive-stage"),
          controlsEl: null,
          qObj,
          gradeId: grade.id,
          subjectId: subject.id,
          chapterId: chapter.id,
          setNum,
          dlp,
          isBossRound,
          equippedEffect: profile.equippedEffect || "default",
          seed: setNum * 31 + idx,
          playerAvatar: profile.avatar || "🦊",
          bossEmoji,
          bossHp,
          onAnswer: (outcome) => {
            if (destroyed) return;
            if (timerInterval) {
              clearInterval(timerInterval);
              timerInterval = null;
            }
            const elapsedSec = activeElapsedMs / 1000;
            const trueAnswer = qObj.options[qObj.correctIndex];

            let isCorrect = false;
            let chosenIdx = -1;
            let chosenText = "-";
            let correctText = trueAnswer;

            if (typeof outcome === "number") {
              chosenIdx = outcome;
              isCorrect = chosenIdx === qObj.correctIndex;
              chosenText = qObj.options[chosenIdx] || "-";
            } else if (outcome && typeof outcome === "object") {
              isCorrect = !!outcome.isCorrect;
              chosenText = outcome.chosenText || (isCorrect ? trueAnswer : "-");
              correctText = outcome.correctText || trueAnswer;
              chosenIdx = qObj.options.indexOf(chosenText);
            }

            if (activeMini && activeMini.showOutcome) {
              activeMini.showOutcome(chosenIdx, isCorrect);
            }

            if (isCorrect) {
              score += 1;
              const gotBonus = elapsedSec <= SPEED_BONUS_SEC;
              if (gotBonus) speedBonus += 1;
              streak++;
              if (streak > maxStreak) maxStreak = streak;

              // Streak 3+ recharges a power-up!
              let rechargedMsg = "";
              if (streak > 0 && streak % 3 === 0) {
                if (charges5050 < 1) {
                  charges5050 = 1;
                  rechargedMsg = " • 🛡️ +50/50!";
                } else if (chargesFreeze < 1) {
                  chargesFreeze = 1;
                  rechargedMsg = " • ❄️ +Beku!";
                } else {
                  charges5050++;
                  rechargedMsg = " • 🛡️ +50/50!";
                }
                setTimeout(() => App.Sound.streakUp(streak), 90);
              } else {
                setTimeout(() => App.Sound.correct(streak), 60);
              }

              answers.push({
                qObj,
                selectedIndex: chosenIdx,
                chosenText,
                correctText,
                isCorrect: true,
                gotBonus,
                elapsedSec
              });

              const scorePill = container.querySelector("#live-score-pill");
              if (scorePill) scorePill.textContent = `Skor: ${score}`;
              const bonusPill = container.querySelector("#live-bonus-pill");
              if (bonusPill) bonusPill.textContent = `⚡ +${speedBonus}`;

              const toast = container.querySelector("#game-toast");
              const miniMascot = App.Mascot ? App.Mascot.render(profile.gradeId, streak >= 2 ? "cheering" : "happy", 34) : "";
              if (toast) {
                toast.classList.remove("hidden");
                toast.className = `toast-banner ${gotBonus ? "toast-full" : "toast-half"}`;
                toast.innerHTML = `${miniMascot}<span>${
                  gotBonus
                    ? `✨ TEPAT! +1 • ⚡ +1 Bonus (${elapsedSec.toFixed(1)}s)${rechargedMsg}`
                    : `✅ TEPAT! +1 (${elapsedSec.toFixed(1)}s)${rechargedMsg}`
                }</span>`;
              }

              advanceTimeout = setTimeout(() => {
                idx++;
                renderQuestion();
              }, 850);
            } else {
              streak = 0;
              hearts = Math.max(0, hearts - 1);
              setTimeout(() => App.Sound.wrong(), 60);
              App.Sound.vibrate([30, 35, 30]);

              answers.push({
                qObj,
                selectedIndex: chosenIdx,
                chosenText,
                correctText,
                isCorrect: false,
                gotBonus: false,
                elapsedSec
              });

              if (activeMini && activeMini.setPaused) activeMini.setPaused(true);

              const studyTip = getStudyGuidance(subject.id, dlp && subject.dlp ? chapter.titleEn : chapter.title);
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

              const mascotSvg = App.Mascot ? App.Mascot.render(profile.gradeId, "encouraging", 44) : "";

              overlay.classList.remove("hidden");
              overlay.innerHTML = `
                <div class="learning-card">
                  <div class="learning-head">
                    <div class="learning-head-left">
                      ${mascotSvg}
                      <strong>${hearts === 0 ? "🛡️ Mod Latihan — Teruskan!" : "❌ Kurang Tepat (-1 ❤️)"}</strong>
                    </div>
                    <span class="countdown-pill" id="overlay-cd">10s</span>
                  </div>
                  <div class="learning-wrong">
                    <span>Jawapan yang kamu pilih:</span>
                    <strong>❌ ${escapeHtml(chosenText)}</strong>
                  </div>
                  <div class="learning-answer">
                    <span>Jawapan tepat yang sebenar:</span>
                    <strong>✅ ${escapeHtml(correctText)}</strong>
                  </div>
                  <p class="learning-exp"><strong>💡 Penerangan:</strong> ${escapeHtml(qObj.explanation)}</p>
                  <div class="learning-tip">
                    <strong>🎯 Cara untuk faham:</strong> ${escapeHtml(studyTip)}
                  </div>
                  <div class="learning-actions">
                    <button type="button" class="btn-secondary" id="btn-overlay-pause">⏸️ Henti Masa</button>
                    <button type="button" class="btn-tactile btn-true" id="btn-overlay-continue">
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
        };

        activeMini = miniDef.mount(mountOpts);
      }

      renderQuestion();
    }
  };
})(window);
