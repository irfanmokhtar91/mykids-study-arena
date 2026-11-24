/**
 * Game Arena Engine: 4 selectable game modes sharing the exact same
 * verified question bank & grading engine.
 * Modes: 'fps' (Target Strike), 'runner' (Crate Runner), 'puzzle' (Vault Puzzle), 'classic' (Trivia Show)
 */
(function (global) {
  const App = (global.App = global.App || {});

  App.GAME_MODES = [
    { id: "runner", name: "Crate Runner", icon: "🦊", desc: "Lompat & pecahkan peti gaya Crash!" },
    { id: "fps", name: "Target Strike", icon: "🎯", desc: "Tembak sasaran & kalahkan Bos Bab!" },
    { id: "puzzle", name: "Vault Puzzle", icon: "🧩", desc: "Buka kunci peti besi dengan kombo!" },
    { id: "classic", name: "Trivia Show", icon: "⚡", desc: "Kuiz pantas klasik dengan 50/50!" }
  ];

  const BOSS_EMOJIS = ["👾", "🤖", "🐉", "🦖", "🐙"];

  function pickBossEmoji(chapterId) {
    let sum = 0;
    for (let i = 0; i < chapterId.length; i++) sum += chapterId.charCodeAt(i);
    return BOSS_EMOJIS[sum % BOSS_EMOJIS.length];
  }

  App.Games = {
    startSession: function ({ container, profile, grade, subject, chapter, setNum, mode, questions, onComplete, onExit }) {
      let idx = 0;
      let score = 0;
      let streak = 0;
      let maxStreak = 0;
      let locked = false;
      let lifelineUsed = false;
      let lastOutcome = null; // 'ok' | 'bad' | null
      const answers = []; // { qObj, selectedIndex, isCorrect }
      const bossEmoji = pickBossEmoji(chapter.id);

      function cleanup() {
        document.removeEventListener("keydown", onKeyDown);
      }

      function onKeyDown(e) {
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;

        if (!locked) {
          const key = e.key.toLowerCase();
          const map = { "1": 0, "a": 0, "2": 1, "b": 1, "3": 2, "c": 2, "4": 3, "d": 3 };
          if (key in map) {
            const btn = container.querySelector(`.option-btn[data-idx="${map[key]}"]`);
            if (btn && !btn.disabled) {
              e.preventDefault();
              btn.click();
            }
          }
        } else if (e.key === "Enter") {
          const nextBtn = container.querySelector("#btn-next-q");
          if (nextBtn) {
            e.preventDefault();
            nextBtn.click();
          }
        }
      }

      document.addEventListener("keydown", onKeyDown);

      function render() {
        if (idx >= questions.length) {
          cleanup();
          const pct = Math.round((score / questions.length) * 100);
          App.Sound.finish(pct >= 60);
          onComplete({ score, total: questions.length, maxStreak, answers, pct });
          return;
        }

        const qObj = questions[idx];
        const progressPct = Math.round((idx / questions.length) * 100);
        const bossHp = Math.max(0, Math.round(((questions.length - score) / questions.length) * 100));
        const comboMult = streak >= 5 ? "×3" : streak >= 2 ? "×2" : "×1";

        let modeBanner = "";
        if (mode === "fps") {
          modeBanner = `
            <div class="arena-hud fps-hud">
              <div class="hud-left">
                <span class="boss-avatar">${bossEmoji}</span>
                <div>
                  <strong>TARGET STRIKE</strong>
                  <div class="hud-sub">Bos: ${escapeHtml(chapter.title)}</div>
                </div>
              </div>
              <div class="boss-bar-wrap">
                <span class="boss-hp-label">HP Bos: ${bossHp}%</span>
                <div class="boss-bar"><div class="boss-fill" style="width:${bossHp}%"></div></div>
              </div>
            </div>`;
        } else if (mode === "runner") {
          const trackCells = questions
            .map((_, i) => {
              if (i < idx) {
                return `<span class="track-step ${answers[i]?.isCorrect ? "step-ok" : "step-bad"}">${
                  answers[i] && answers[i].isCorrect ? "💎" : "💥"
                }</span>`;
              }
              if (i === idx) return `<span class="track-step step-now">🏃</span>`;
              return `<span class="track-step">📦</span>`;
            })
            .join("");
          modeBanner = `
            <div class="arena-hud runner-hud">
              <div><strong>🦊 CRATE RUNNER</strong> <span class="hud-sub">Pecahkan peti jawapan tepat!</span></div>
              <div class="runner-track">${trackCells}</div>
            </div>`;
        } else if (mode === "puzzle") {
          const nodes = questions
            .map((_, i) => {
              const cls = i < idx ? (answers[i]?.isCorrect ? "node-ok" : "node-bad") : i === idx ? "node-active" : "";
              return `<span class="vault-node ${cls}">${i + 1}</span>`;
            })
            .join("");
          modeBanner = `
            <div class="arena-hud puzzle-hud">
              <div><strong>🧩 VAULT PUZZLE</strong> <span class="hud-sub">Nyalakan semua nod litar</span></div>
              <div class="vault-nodes">${nodes}</div>
            </div>`;
        } else {
          modeBanner = `
            <div class="arena-hud classic-hud">
              <div class="hud-left">
                <strong>⚡ TRIVIA SHOW</strong>
                <span class="combo-pill">Kombo ${comboMult}</span>
              </div>
              <button class="btn-lifeline" id="btn-5050" ${lifelineUsed ? "disabled" : ""}>
                50:50 ${lifelineUsed ? "(Digunakan)" : "(1×)"}
              </button>
            </div>`;
        }

        const letters = ["A", "B", "C", "D"];
        const optionsHtml = qObj.options
          .map((opt, i) => {
            const extraCls =
              mode === "fps"
                ? "opt-target"
                : mode === "runner"
                ? "opt-crate"
                : mode === "puzzle"
                ? "opt-tile"
                : "opt-classic";
            return `
              <button class="option-btn ${extraCls}" data-idx="${i}">
                <span class="opt-letter">${letters[i] || i + 1}</span>
                <span class="opt-text">${escapeHtml(opt)}</span>
              </button>`;
          })
          .join("");

        container.innerHTML = `
          <div class="game-shell mode-${mode}">
            <div class="game-topbar">
              <button class="btn-ghost" id="btn-quit-game">← Keluar</button>
              <div class="game-meta">
                <span>${subject.icon} ${escapeHtml(subject.name)}</span>
                <span>•</span>
                <span>Set ${setNum}</span>
                <span>•</span>
                <span>Soalan ${idx + 1}/${questions.length}</span>
              </div>
              <div class="game-stats">
                <span class="pill pill-score">Skor: ${score}</span>
                <span class="pill pill-streak">🔥 ${streak}</span>
              </div>
            </div>

            <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%"></div></div>

            ${modeBanner}

            <div class="question-card" id="question-card">
              <div class="question-top-row">
                <span class="question-num">Soalan ${idx + 1}</span>
                <span class="kbd-hint">Pintasan: A–D / 1–4</span>
              </div>
              <div class="question-text">${escapeHtml(qObj.q)}</div>
            </div>

            <div class="options-grid" id="options-grid">
              ${optionsHtml}
            </div>

            <div class="feedback-box hidden" id="feedback-box"></div>
          </div>
        `;

        container.querySelector("#btn-quit-game").addEventListener("click", () => {
          cleanup();
          App.Sound.click();
          onExit();
        });

        const btn5050 = container.querySelector("#btn-5050");
        if (btn5050) {
          btn5050.addEventListener("click", () => {
            if (lifelineUsed || locked) return;
            lifelineUsed = true;
            App.Sound.click();
            btn5050.disabled = true;
            btn5050.textContent = "50:50 (Digunakan)";
            const wrongIndices = qObj.options
              .map((_, i) => i)
              .filter((i) => i !== qObj.correctIndex);
            for (let k = 0; k < Math.min(2, wrongIndices.length); k++) {
              const btn = container.querySelector(`.option-btn[data-idx="${wrongIndices[k]}"]`);
              if (btn) {
                btn.disabled = true;
                btn.classList.add("opt-eliminated");
              }
            }
          });
        }

        const optBtns = container.querySelectorAll(".option-btn");
        optBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            if (locked) return;
            locked = true;
            const chosen = Number(btn.getAttribute("data-idx"));
            const isCorrect = chosen === qObj.correctIndex;
            lastOutcome = isCorrect ? "ok" : "bad";

            if (mode === "fps") App.Sound.shoot();
            else if (mode === "runner") App.Sound.smash();
            else if (mode === "puzzle") App.Sound.unlock();

            if (isCorrect) {
              score++;
              streak++;
              if (streak > maxStreak) maxStreak = streak;
              setTimeout(() => App.Sound.correct(streak), 70);
            } else {
              streak = 0;
              setTimeout(() => App.Sound.wrong(), 70);
            }

            answers.push({ qObj, selectedIndex: chosen, isCorrect });

            const qCard = container.querySelector("#question-card");
            if (qCard) {
              qCard.classList.add(isCorrect ? "anim-pop" : "anim-shake");
            }

            optBtns.forEach((b) => {
              b.disabled = true;
              const bi = Number(b.getAttribute("data-idx"));
              if (bi === qObj.correctIndex) b.classList.add("opt-correct");
              else if (bi === chosen && !isCorrect) b.classList.add("opt-wrong");
            });

            const hitTag =
              mode === "fps"
                ? isCorrect
                  ? "💥 KENA! (-HP Bos)"
                  : "💨 TERSASAR!"
                : mode === "runner"
                ? isCorrect
                  ? "💎 PETI PECAH! (+15 XP)"
                  : "💥 TERLANGGAR!"
                : isCorrect
                ? "✅ Tepat sekali! (+15 XP)"
                : "❌ Kurang tepat!";

            const fb = container.querySelector("#feedback-box");
            fb.classList.remove("hidden");
            fb.className = `feedback-box ${isCorrect ? "fb-ok" : "fb-bad"}`;
            fb.innerHTML = `
              <div class="fb-header">
                <strong>${hitTag}</strong>
                <button class="btn-primary" id="btn-next-q">
                  ${idx + 1 < questions.length ? "Soalan Seterusnya (Enter) →" : "Lihat Keputusan 🏆"}
                </button>
              </div>
              <p class="fb-exp"><strong>Penerangan:</strong> ${escapeHtml(qObj.explanation)}</p>
            `;

            container.querySelector("#btn-next-q").addEventListener("click", () => {
              App.Sound.click();
              locked = false;
              lastOutcome = null;
              idx++;
              render();
            });
          });
        });
      }

      render();
    }
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})(window);
