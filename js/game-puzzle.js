/**
 * Reactor Puzzle — Real Drag-and-Drop Physics Energy Core Game
 * Controls: Drag any Energy Core into the bottom Reactor Socket (double-tap also launches),
 * OR Arrow keys/WASD/Gamepad to highlight a core + Space/Enter/Button A to launch!
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  App.MiniGames.puzzle = {
    mount: function ({ canvas, qObj, onAnswer }) {
      const ctx = canvas.getContext("2d");
      const cm = App.GameUtil.setupCanvas(canvas);
      const gp = App.GameUtil.createGamepadReader();

      let paused = false;
      let answered = false;
      let destroyed = false;
      let rafId = null;
      let time = 0;
      let selectedIdx = 0;
      let draggingIdx = -1;
      let dragOffX = 0;
      let dragOffY = 0;
      let launchingIdx = -1;
      let lastTapIdx = -1;
      let lastTapTime = 0;
      const particles = [];

      const cores = qObj.options.map((text, idx) => ({
        idx,
        text,
        col: idx % 2,
        row: Math.floor(idx / 2),
        homeX: 0,
        homeY: 0,
        x: 0,
        y: 0,
        w: 140,
        h: 58,
        initialized: false,
        hitState: null
      }));

      function spawnShockwave(x, y, color, count = 22) {
        for (let i = 0; i < count; i++) {
          const ang = (Math.PI * 2 * i) / count;
          const spd = 80 + Math.random() * 170;
          particles.push({
            x,
            y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            r: 3 + Math.random() * 4,
            life: 0.5,
            maxLife: 0.5,
            color
          });
        }
      }

      function getSocket(w, h) {
        const sockW = Math.min(270, w - 36);
        const sockH = Math.min(64, Math.max(48, h * 0.19));
        return {
          x: w * 0.5 - sockW / 2,
          y: h - sockH - 12,
          w: sockW,
          h: sockH,
          cx: w * 0.5,
          cy: h - sockH / 2 - 12
        };
      }

      function commitCore(idx) {
        if (answered) return;
        answered = true;
        draggingIdx = -1;
        launchingIdx = -1;
        const c = cores[idx];
        const isCorrect = idx === qObj.correctIndex;
        c.hitState = isCorrect ? "ok" : "bad";

        const { w, h } = cm.getSize();
        const sock = getSocket(w, h);
        c.x = sock.cx - c.w / 2;
        c.y = sock.cy - c.h / 2;

        App.Sound.unlock();
        spawnShockwave(sock.cx, sock.cy, isCorrect ? "#10b981" : "#ef4444", 24);
        onAnswer(idx);
      }

      function getPointerPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
      }

      function onPointerDown(e) {
        if (paused || answered) return;
        const pos = getPointerPos(e);
        for (let i = cores.length - 1; i >= 0; i--) {
          const c = cores[i];
          if (pos.x >= c.x && pos.x <= c.x + c.w && pos.y >= c.y && pos.y <= c.y + c.h) {
            e.preventDefault();
            selectedIdx = i;
            const now = performance.now();
            if (lastTapIdx === i && now - lastTapTime < 340) {
              // Double-tap launches smoothly into reactor
              launchingIdx = i;
              draggingIdx = -1;
              App.Sound.click();
              return;
            }
            lastTapIdx = i;
            lastTapTime = now;
            draggingIdx = i;
            dragOffX = pos.x - c.x;
            dragOffY = pos.y - c.y;
            App.Sound.click();
            return;
          }
        }
      }

      function onPointerMove(e) {
        if (draggingIdx < 0 || paused || answered) return;
        e.preventDefault();
        const pos = getPointerPos(e);
        const c = cores[draggingIdx];
        c.x = pos.x - dragOffX;
        c.y = pos.y - dragOffY;
      }

      function onPointerUp() {
        if (draggingIdx < 0) return;
        const c = cores[draggingIdx];
        const { w, h } = cm.getSize();
        const sock = getSocket(w, h);
        const coreCx = c.x + c.w / 2;
        const coreCy = c.y + c.h / 2;

        const nearSocket =
          coreCx >= sock.x - 24 &&
          coreCx <= sock.x + sock.w + 24 &&
          coreCy >= sock.y - 28 &&
          coreCy <= sock.y + sock.h + 24;

        if (nearSocket && !paused && !answered) {
          commitCore(draggingIdx);
        } else {
          draggingIdx = -1;
        }
      }

      function onKeyDown(e) {
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        if (paused || answered) return;
        const k = e.key.toLowerCase();
        if (k === "arrowleft" || k === "a") {
          e.preventDefault();
          selectedIdx = (selectedIdx + 3) % 4;
          App.Sound.click();
        } else if (k === "arrowright" || k === "d") {
          e.preventDefault();
          selectedIdx = (selectedIdx + 1) % 4;
          App.Sound.click();
        } else if (k === "arrowup" || k === "w" || k === "arrowdown" || k === "s") {
          e.preventDefault();
          selectedIdx = (selectedIdx + 2) % 4;
          App.Sound.click();
        } else if (k === " " || k === "enter") {
          e.preventDefault();
          launchingIdx = selectedIdx;
        }
      }

      canvas.addEventListener("pointerdown", onPointerDown);
      global.addEventListener("pointermove", onPointerMove, { passive: false });
      global.addEventListener("pointerup", onPointerUp);
      global.addEventListener("keydown", onKeyDown);

      let lastTs = performance.now();
      let padCooldown = 0;

      function tick(now) {
        if (destroyed) return;
        const dt = Math.min(0.05, (now - lastTs) / 1000);
        lastTs = now;

        const { w, h } = cm.getSize();
        const sock = getSocket(w, h);
        const chamberH = Math.max(115, sock.y - 16);
        const cellW = (w - 28) / 2;
        const cellH = chamberH / 2;
        const cardW = Math.min(340, Math.max(116, cellW - 14));
        const cardH = Math.min(82, Math.max(46, cellH - 12));

        cores.forEach((c) => {
          c.w = cardW;
          c.h = cardH;
          c.homeX = 14 + c.col * cellW + (cellW - cardW) / 2;
          c.homeY = 10 + c.row * cellH + (cellH - cardH) / 2;
          if (!c.initialized) {
            c.x = c.homeX;
            c.y = c.homeY;
            c.initialized = true;
          }
        });

        if (!paused) {
          time += dt;
          if (padCooldown > 0) padCooldown -= dt;

          const pad = gp.read();
          if (padCooldown <= 0) {
            if (Math.abs(pad.dx) > 0.5) {
              selectedIdx = (selectedIdx + (pad.dx > 0 ? 1 : 3)) % 4;
              padCooldown = 0.22;
            } else if (Math.abs(pad.dy) > 0.5) {
              selectedIdx = (selectedIdx + 2) % 4;
              padCooldown = 0.22;
            }
          }
          if (pad.actionPressed && !answered && launchingIdx < 0) {
            launchingIdx = selectedIdx;
          }

          cores.forEach((c, i) => {
            if (answered) return;
            if (i === launchingIdx) {
              const tx = sock.cx - c.w / 2;
              const ty = sock.cy - c.h / 2;
              c.x += (tx - c.x) * Math.min(1, dt * 16);
              c.y += (ty - c.y) * Math.min(1, dt * 16);
              if (Math.hypot(tx - c.x, ty - c.y) < 10) {
                commitCore(i);
              }
            } else if (i !== draggingIdx) {
              const floatY = Math.sin(time * 2.2 + i * 1.4) * 4;
              c.x += (c.homeX - c.x) * Math.min(1, dt * 10);
              c.y += (c.homeY + floatY - c.y) * Math.min(1, dt * 10);
            }
          });

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt;
            if (p.life <= 0) particles.splice(i, 1);
          }
        }

        // Draw Workshop Background
        cm.beginFrame(ctx);
        const bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, "#eff6ff");
        bg.addColorStop(1, "#dbeafe");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Subtle blueprint grid
        ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
        ctx.lineWidth = 1;
        for (let gx = 0; gx < w; gx += 28) {
          ctx.beginPath();
          ctx.moveTo(gx, 0);
          ctx.lineTo(gx, h);
          ctx.stroke();
        }
        for (let gy = 0; gy < h; gy += 28) {
          ctx.beginPath();
          ctx.moveTo(0, gy);
          ctx.lineTo(w, gy);
          ctx.stroke();
        }

        // Reactor Socket at bottom center
        const activeCore = draggingIdx >= 0 ? cores[draggingIdx] : null;
        const nearSock =
          activeCore &&
          Math.hypot(activeCore.x + activeCore.w / 2 - sock.cx, activeCore.y + activeCore.h / 2 - sock.cy) < 130;

        ctx.save();
        ctx.fillStyle = nearSock ? "#fef08a" : "#18181b";
        ctx.strokeStyle = nearSock ? "#059669" : "#2563eb";
        ctx.lineWidth = 3;
        App.GameUtil.drawRoundedRect(ctx, sock.x, sock.y, sock.w, sock.h, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = nearSock ? "#18181b" : "#f8fafc";
        ctx.font = "700 13px 'Fredoka', 'Plus Jakarta Sans', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⚡ SERET JAWAPAN KE REAKTOR (ATAU TAP 2×)", sock.cx, sock.cy);
        ctx.restore();

        // Tether beam while dragging near socket
        if (activeCore) {
          ctx.save();
          ctx.strokeStyle = nearSock ? "#10b981" : "#3b82f6";
          ctx.lineWidth = 3;
          ctx.setLineDash([6, 5]);
          ctx.beginPath();
          ctx.moveTo(activeCore.x + activeCore.w / 2, activeCore.y + activeCore.h / 2);
          ctx.lineTo(sock.cx, sock.cy);
          ctx.stroke();
          ctx.restore();
        }

        // Draw non-dragged cores first, dragged core on top
        const order = cores.map((_, i) => i).sort((a, b) => (a === draggingIdx ? 1 : b === draggingIdx ? -1 : 0));
        for (const i of order) {
          const c = cores[i];
          const isSel = i === selectedIdx && draggingIdx < 0;
          const bgCard =
            c.hitState === "ok"
              ? "#dcfce7"
              : c.hitState === "bad"
              ? "#fee2e2"
              : i === draggingIdx
              ? "#fef9c3"
              : "#ffffff";
          const borderCard =
            c.hitState === "ok"
              ? "#059669"
              : c.hitState === "bad"
              ? "#dc2626"
              : isSel || i === draggingIdx
              ? "#2563eb"
              : "#18181b";

          App.GameUtil.drawWrappedCard(ctx, c.x, c.y, c.w, c.h, c.text, {
            bg: bgCard,
            border: borderCard,
            shadowColor: "#18181b",
            maxFont: 14,
            minFont: 9.5
          });
        }

        // Particles
        for (const p of particles) {
          ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;

        rafId = global.requestAnimationFrame(tick);
      }

      rafId = global.requestAnimationFrame(tick);

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        showOutcome: (chosenIdx, isCorrect) => {
          if (cores[chosenIdx]) cores[chosenIdx].hitState = isCorrect ? "ok" : "bad";
          if (!isCorrect && cores[qObj.correctIndex]) cores[qObj.correctIndex].hitState = "ok";
        },
        destroy: () => {
          destroyed = true;
          if (rafId) global.cancelAnimationFrame(rafId);
          canvas.removeEventListener("pointerdown", onPointerDown);
          global.removeEventListener("pointermove", onPointerMove);
          global.removeEventListener("pointerup", onPointerUp);
          global.removeEventListener("keydown", onKeyDown);
          cm.destroy();
        }
      };
    }
  };
})(window);
