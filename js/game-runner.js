/**
 * Crate Rush (Crash-style 4-Lane Runner) — Real Playable HTML5 Canvas Game
 * Controls: Left/Right or A/D, swipe, tap a lane/crate, on-screen D-Pad/Boost, or Gamepad.
 * Space / Up / Boost dashes straight into the crate in your current lane!
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  App.MiniGames.runner = {
    mount: function ({ canvas, controlsEl, qObj, playerAvatar, onAnswer }) {
      const ctx = canvas.getContext("2d");
      const cm = App.GameUtil.setupCanvas(canvas);
      const gp = App.GameUtil.createGamepadReader();

      let paused = false;
      let answered = false;
      let destroyed = false;
      let rafId = null;
      let time = 0;

      let targetLane = 1;
      let playerLanePos = 1; // smooth interpolation
      let boosting = false;
      let crateProgress = 0; // 0 = top, 1 = player collision line
      let shakeTime = 0;
      const particles = [];

      const crates = qObj.options.map((text, lane) => ({
        lane,
        text,
        hitState: null,
        cardRect: { x: 0, y: 0, w: 80, h: 60 }
      }));

      // Decorative collectible coins between player and crates
      const coins = [
        { lane: 0, yFrac: 0.42, collected: false },
        { lane: 1, yFrac: 0.56, collected: false },
        { lane: 2, yFrac: 0.48, collected: false },
        { lane: 3, yFrac: 0.62, collected: false }
      ];

      function spawnBurst(x, y, color, count = 20) {
        for (let i = 0; i < count; i++) {
          const ang = Math.random() * Math.PI * 2;
          const spd = 60 + Math.random() * 190;
          particles.push({
            x,
            y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            r: 3 + Math.random() * 5,
            life: 0.5 + Math.random() * 0.2,
            maxLife: 0.7,
            color
          });
        }
      }

      function moveLane(delta) {
        if (paused || answered) return;
        targetLane = Math.max(0, Math.min(3, targetLane + delta));
        App.Sound.click();
      }

      function triggerBoost() {
        if (paused || answered) return;
        boosting = true;
      }

      function resolveLaneCollision(lane) {
        if (answered) return;
        answered = true;
        const chosen = crates[lane];
        const isCorrect = lane === qObj.correctIndex;
        chosen.hitState = isCorrect ? "ok" : "bad";

        const { w, h } = cm.getSize();
        const laneW = (w - 24) / 4;
        const cx = 12 + lane * laneW + laneW / 2;
        const cy = h * 0.76;

        App.Sound.smash();
        shakeTime = 0.18;
        spawnBurst(cx, cy, isCorrect ? "#10b981" : "#ef4444", 26);
        if (isCorrect) spawnBurst(cx, cy, "#fde047", 14);
        onAnswer(lane);
      }

      // On-screen controls for phone / iPad
      if (controlsEl) {
        controlsEl.innerHTML = `
          <div class="dpad-strip">
            <button type="button" class="ctrl-btn" id="run-left">◀ Kiri</button>
            <button type="button" class="ctrl-btn ctrl-action" id="run-boost">⚡ REMPUH PETI</button>
            <button type="button" class="ctrl-btn" id="run-right">Kanan ▶</button>
          </div>`;
        controlsEl.querySelector("#run-left").addEventListener("click", () => moveLane(-1));
        controlsEl.querySelector("#run-boost").addEventListener("click", triggerBoost);
        controlsEl.querySelector("#run-right").addEventListener("click", () => moveLane(1));
      }

      let swipeStartX = null;

      function onPointerDown(e) {
        if (paused || answered) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        swipeStartX = clientX;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const { w, h } = cm.getSize();

        // Check staggered/crate answer card hit first so phone taps hit the right lane accurately
        let hitLane = -1;
        for (const c of crates) {
          const r = c.cardRect;
          if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) {
            hitLane = c.lane;
            break;
          }
        }
        const lane =
          hitLane >= 0
            ? hitLane
            : Math.max(0, Math.min(3, Math.floor(((x - 12) / Math.max(1, w - 24)) * 4)));
        const wasSameLane = lane === targetLane;
        targetLane = lane;
        // Tapping a crate/card or tapping the current lane dashes straight into the crate
        if (hitLane >= 0 || y < h * 0.55 || wasSameLane) {
          triggerBoost();
        } else {
          App.Sound.click();
        }
      }

      function onPointerUp(e) {
        if (swipeStartX === null || paused || answered) return;
        const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const dx = clientX - swipeStartX;
        swipeStartX = null;
        if (Math.abs(dx) > 36) {
          moveLane(dx > 0 ? 1 : -1);
        }
      }

      function onKeyDown(e) {
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        const k = e.key.toLowerCase();
        if (k === "arrowleft" || k === "a") {
          e.preventDefault();
          moveLane(-1);
        } else if (k === "arrowright" || k === "d") {
          e.preventDefault();
          moveLane(1);
        } else if (k === " " || k === "arrowup" || k === "w" || k === "enter") {
          if (!paused && !answered) {
            e.preventDefault();
            triggerBoost();
          }
        }
      }

      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointerup", onPointerUp);
      global.addEventListener("keydown", onKeyDown);

      let lastTs = performance.now();
      let padCooldown = 0;

      function tick(now) {
        if (destroyed) return;
        const dt = Math.min(0.05, (now - lastTs) / 1000);
        lastTs = now;

        const { w, h } = cm.getSize();

        if (!paused) {
          time += dt;
          if (padCooldown > 0) padCooldown -= dt;
          if (shakeTime > 0) shakeTime = Math.max(0, shakeTime - dt);

          const pad = gp.read();
          if (padCooldown <= 0 && Math.abs(pad.dx) > 0.5) {
            moveLane(pad.dx > 0 ? 1 : -1);
            padCooldown = 0.22;
          }
          if (pad.actionPressed) triggerBoost();

          // Smooth lane glide
          playerLanePos += (targetLane - playerLanePos) * Math.min(1, dt * 16);

          if (!answered) {
            // Crates enter swiftly into readable zone, then march at readable speed (~14s total)
            const speed = boosting ? 2.6 : crateProgress < 0.22 ? 0.24 : 0.056;
            crateProgress += speed * dt;

            // Collect coins along the way
            coins.forEach((c) => {
              if (!c.collected && Math.abs(playerLanePos - c.lane) < 0.35 && crateProgress > c.yFrac - 0.15) {
                c.collected = true;
                App.Sound.coin();
                const lw = (w - 24) / 4;
                spawnBurst(12 + c.lane * lw + lw / 2, h * 0.78, "#fde047", 8);
              }
            });

            if (crateProgress >= 1) {
              crateProgress = 1;
              resolveLaneCollision(targetLane);
            }
          }

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt;
            if (p.life <= 0) particles.splice(i, 1);
          }
        }

        // Draw Jungle-Arcade 4-Lane Track
        cm.beginFrame(ctx);
        ctx.save();
        if (shakeTime > 0) {
          ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
        }

        const bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, "#14532d");
        bg.addColorStop(0.35, "#166534");
        bg.addColorStop(1, "#78350f");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Wooden plank track bed
        const trackX = 12;
        const trackW = w - 24;
        const laneW = trackW / 4;

        for (let l = 0; l < 4; l++) {
          const lx = trackX + l * laneW;
          ctx.fillStyle = l === targetLane ? "#fef3c7" : l % 2 === 0 ? "#f5e6c8" : "#ead3ad";
          ctx.fillRect(lx, 0, laneW, h);
          ctx.strokeStyle = "#18181b";
          ctx.lineWidth = 2;
          ctx.strokeRect(lx, 0, laneW, h);

          // Scrolling lane chevrons
          ctx.fillStyle = "rgba(24, 24, 27, 0.12)";
          const scrollOffset = (time * 160) % 48;
          for (let y = -48 + scrollOffset; y < h; y += 48) {
            ctx.beginPath();
            ctx.moveTo(lx + laneW * 0.35, y + 12);
            ctx.lineTo(lx + laneW * 0.5, y);
            ctx.lineTo(lx + laneW * 0.65, y + 12);
            ctx.lineTo(lx + laneW * 0.5, y + 7);
            ctx.closePath();
            ctx.fill();
          }
        }

        // Coins
        coins.forEach((c) => {
          if (c.collected) return;
          const cx = trackX + c.lane * laneW + laneW / 2;
          const cy = h * 0.72 + Math.sin(time * 5 + c.lane) * 5;
          ctx.fillStyle = "#facc15";
          ctx.strokeStyle = "#18181b";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });

        // Draw 4 Crates (1 per lane); on narrow phones (<500px), stagger wide cards in 2 rows
        const narrowPhone = w < 500;
        if (narrowPhone) {
          const boxW = Math.max(46, laneW - 10);
          const boxH = 30;
          const cardW = Math.min(200, Math.round(w * 0.45));
          const cardH = Math.min(76, Math.max(48, Math.round(h * 0.19)));
          const totalBlockH = boxH + 8 + cardH * 2 + 6;
          const startY = 8;
          const endY = Math.max(startY + 12, h * 0.77 - totalBlockH);
          const curY = startY + crateProgress * (endY - startY);

          crates.forEach((c) => {
            const laneCx = trackX + c.lane * laneW + laneW / 2;
            const bx = laneCx - boxW / 2;
            const by = curY;

            // Physical wooden crate in the lane
            ctx.fillStyle = c.lane === targetLane ? "#f59e0b" : "#b45309";
            ctx.strokeStyle = "#18181b";
            ctx.lineWidth = 2.2;
            App.GameUtil.drawRoundedRect(ctx, bx, by, boxW, boxH, 7);
            ctx.fill();
            ctx.stroke();

            // Staggered wide answer card
            const isRow1 = c.lane === 1 || c.lane === 3;
            const cardY = by + boxH + 8 + (isRow1 ? cardH + 6 : 0);
            let cardX;
            if (c.lane === 0) cardX = 8;
            else if (c.lane === 1) cardX = Math.max(8, Math.round(w * 0.5 - cardW - 4));
            else if (c.lane === 2) cardX = Math.min(w - cardW - 8, Math.round(w * 0.5 + 4));
            else cardX = w - cardW - 8;

            c.cardRect = { x: cardX, y: cardY, w: cardW, h: cardH };

            // Stem connecting crate to wide answer card
            ctx.save();
            ctx.strokeStyle = c.lane === targetLane ? "#d97706" : "#18181b";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(laneCx, by + boxH);
            ctx.lineTo(cardX + cardW / 2, cardY);
            ctx.stroke();
            ctx.restore();
          });

          // Draw wide cards after stems so cards always sit cleanly on top
          crates.forEach((c) => {
            const r = c.cardRect;
            const bgCard =
              c.hitState === "ok"
                ? "#dcfce7"
                : c.hitState === "bad"
                ? "#fee2e2"
                : c.lane === targetLane
                ? "#fffbeb"
                : "#ffffff";
            const borderCard =
              c.hitState === "ok"
                ? "#059669"
                : c.hitState === "bad"
                ? "#dc2626"
                : c.lane === targetLane
                ? "#d97706"
                : "#18181b";

            App.GameUtil.drawWrappedCard(ctx, r.x, r.y, r.w, r.h, c.text, {
              bg: bgCard,
              border: borderCard,
              shadowColor: "#78350f",
              maxFont: 13,
              minFont: 9.5
            });
          });
        } else {
          const crateH = Math.min(110, Math.max(66, h * 0.27));
          const crateW = Math.max(64, laneW - 10);
          const startY = 8;
          const endY = h * 0.8 - crateH * 0.55;
          const curY = startY + crateProgress * (endY - startY);

          crates.forEach((c) => {
            const cx = trackX + c.lane * laneW + (laneW - crateW) / 2;
            const cy = curY;
            c.cardRect = { x: cx, y: cy, w: crateW, h: crateH };

            // Wooden crate frame
            ctx.fillStyle = c.lane === targetLane ? "#f59e0b" : "#b45309";
            ctx.strokeStyle = "#18181b";
            ctx.lineWidth = 2.5;
            App.GameUtil.drawRoundedRect(ctx, cx, cy, crateW, crateH, 10);
            ctx.fill();
            ctx.stroke();

            // Inner answer card on crate
            const bgCard =
              c.hitState === "ok"
                ? "#dcfce7"
                : c.hitState === "bad"
                ? "#fee2e2"
                : c.lane === targetLane
                ? "#fffbeb"
                : "#ffffff";
            const borderCard =
              c.hitState === "ok"
                ? "#059669"
                : c.hitState === "bad"
                ? "#dc2626"
                : "#18181b";

            App.GameUtil.drawWrappedCard(ctx, cx + 4, cy + 4, crateW - 8, crateH - 8, c.text, {
              bg: bgCard,
              border: borderCard,
              shadowColor: "#78350f",
              maxFont: 13.5,
              minFont: 9
            });
          });
        }

        // Player Avatar at bottom
        const px = trackX + playerLanePos * laneW + laneW / 2;
        const py = h * 0.84 + Math.abs(Math.sin(time * 10)) * -6;

        // Shadow under player
        ctx.fillStyle = "rgba(24, 24, 27, 0.28)";
        ctx.beginPath();
        ctx.ellipse(px, h * 0.88, 22, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        // Player badge
        ctx.fillStyle = "#fde047";
        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(px, py, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = "28px 'Segoe UI Emoji', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(playerAvatar || "🦊", px, py + 1);

        // Particles
        for (const p of particles) {
          ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        ctx.restore();
        rafId = global.requestAnimationFrame(tick);
      }

      rafId = global.requestAnimationFrame(tick);

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        showOutcome: (chosenIdx, isCorrect) => {
          if (crates[chosenIdx]) crates[chosenIdx].hitState = isCorrect ? "ok" : "bad";
          if (!isCorrect && crates[qObj.correctIndex]) crates[qObj.correctIndex].hitState = "ok";
        },
        destroy: () => {
          destroyed = true;
          if (rafId) global.cancelAnimationFrame(rafId);
          canvas.removeEventListener("pointerdown", onPointerDown);
          canvas.removeEventListener("pointerup", onPointerUp);
          global.removeEventListener("keydown", onKeyDown);
          cm.destroy();
        }
      };
    }
  };
})(window);
