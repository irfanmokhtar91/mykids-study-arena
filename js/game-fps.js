/**
 * Target Strike (FPS Arena) — Real Playable HTML5 Canvas Shooting Gallery
 * Controls: Mouse/Touch aim & shoot directly on drones, or WASD/Arrows/Gamepad + Space/Enter/A.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  App.MiniGames.fps = {
    mount: function ({ canvas, qObj, bossEmoji, bossHp, isBossRound, equippedEffect, onAnswer }) {
      const ctx = canvas.getContext("2d");
      const cm = App.GameUtil.setupCanvas(canvas);
      const gp = App.GameUtil.createGamepadReader();
      const fxColors = App.GameUtil.getEffectColors ? App.GameUtil.getEffectColors(equippedEffect) : ["#38bdf8", "#fde047", "#34d399"];

      let paused = false;
      let answered = false;
      let destroyed = false;
      let rafId = null;
      let time = 0;
      let shakeTime = 0;
      let bossHitFlash = 0;
      let laser = null; // { x1, y1, x2, y2, life, color }
      const particles = [];
      const popups = [];
      const stars = Array.from({ length: 28 }, (_, i) => ({
        x: ((i * 73) % 100) / 100,
        y: ((i * 41) % 60) / 100,
        r: (i % 3) + 0.8,
        spd: 0.015 + (i % 4) * 0.008
      }));

      const keys = new Set();
      let aimX = 0.5; // normalized 0..1
      let aimY = 0.5;
      let hasPointer = false;

      // 4 drones arranged in a 2x2 non-overlapping formation in middle arena
      const drones = qObj.options.map((text, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        return {
          idx,
          text,
          col,
          row,
          phase: idx * 1.55,
          x: 0,
          y: 0,
          w: 140,
          h: 60,
          eliminated: false,
          hitState: null // 'ok' | 'bad' | null
        };
      });

      function spawnParticles(x, y, color, count = 18) {
        for (let i = 0; i < count; i++) {
          const ang = (Math.PI * 2 * i) / count + Math.random() * 0.4;
          const spd = 70 + Math.random() * 190;
          particles.push({
            x,
            y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            r: 3 + Math.random() * 4,
            life: 0.45 + Math.random() * 0.25,
            maxLife: 0.7,
            color
          });
        }
      }

      function fireAt(px, py) {
        if (paused || answered) return;
        const { w, h } = cm.getSize();
        const tx = w * 0.5;
        const ty = h - 22;

        App.Sound.shoot();
        App.Sound.vibrate(14);
        laser = { x1: tx, y1: ty - 14, x2: px, y2: py, life: 0.18, color: fxColors[0] };
        shakeTime = 0.14;

        // Check hit on any active drone card
        for (const d of drones) {
          if (d.eliminated) continue;
          if (px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {
            answered = true;
            const isCorrect = d.idx === qObj.correctIndex;
            d.hitState = isCorrect ? "ok" : "bad";
            laser.color = isCorrect ? "#34d399" : "#ef4444";
            if (isCorrect) {
              bossHitFlash = 0.35;
              if (isBossRound) App.Sound.bossHit();
              popups.push({ x: px, y: py - 10, text: isBossRound ? "💥 BOSS HIT!" : "✨ +1!", color: "#34d399", life: 0.85, maxLife: 0.85 });
              spawnParticles(px, py, "#34d399", 24);
              spawnParticles(w * 0.5, 42, fxColors[1] || "#fde047", 16);
            } else {
              spawnParticles(px, py, "#ef4444", 18);
            }
            onAnswer(d.idx);
            return;
          }
        }
        // Missed shot spark
        spawnParticles(px, py, fxColors[0], 8);
      }

      function getPointerPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: clientX - rect.left,
          y: clientY - rect.top
        };
      }

      let hasInteracted = false;
      let isTouchAiming = false;

      function isOverAnyDrone(px, py) {
        return drones.some((d) => px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h);
      }

      function onPointerMove(e) {
        const { w, h } = cm.getSize();
        const pos = getPointerPos(e);
        aimX = Math.max(0.03, Math.min(0.97, pos.x / Math.max(1, w)));
        aimY = Math.max(0.05, Math.min(0.92, pos.y / Math.max(1, h)));
        hasPointer = true;
      }

      function onPointerDown(e) {
        if (paused || answered) return;
        e.preventDefault();
        hasInteracted = true;
        const { w, h } = cm.getSize();
        const pos = getPointerPos(e);
        aimX = Math.max(0.03, Math.min(0.97, pos.x / Math.max(1, w)));
        aimY = Math.max(0.05, Math.min(0.92, pos.y / Math.max(1, h)));
        hasPointer = true;
        if (isOverAnyDrone(pos.x, pos.y)) {
          fireAt(pos.x, pos.y);
        } else {
          isTouchAiming = true;
        }
      }

      function onPointerUp(e) {
        if (!isTouchAiming) return;
        isTouchAiming = false;
        if (paused || answered) return;
        const { w, h } = cm.getSize();
        const px = aimX * w;
        const py = aimY * h;
        if (isOverAnyDrone(px, py)) {
          fireAt(px, py);
        }
      }

      function onKeyDown(e) {
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        const k = e.key.toLowerCase();
        if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(k)) {
          keys.add(k);
          hasInteracted = true;
          if (!paused) e.preventDefault();
        } else if ((k === " " || k === "enter") && !paused && !answered) {
          e.preventDefault();
          hasInteracted = true;
          const { w, h } = cm.getSize();
          fireAt(aimX * w, aimY * h);
        }
      }

      function onKeyUp(e) {
        keys.delete(e.key.toLowerCase());
      }

      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerdown", onPointerDown);
      global.addEventListener("pointerup", onPointerUp);
      global.addEventListener("pointercancel", onPointerUp);
      global.addEventListener("keydown", onKeyDown);
      global.addEventListener("keyup", onKeyUp);

      let lastTs = performance.now();

      function tick(now) {
        if (destroyed) return;
        const dt = Math.min(0.05, (now - lastTs) / 1000);
        lastTs = now;

        const { w, h } = cm.getSize();

        if (!paused) {
          time += dt;

          // Keyboard & Gamepad aiming
          let mx = 0;
          let my = 0;
          if (keys.has("arrowleft") || keys.has("a")) mx -= 1;
          if (keys.has("arrowright") || keys.has("d")) mx += 1;
          if (keys.has("arrowup") || keys.has("w")) my -= 1;
          if (keys.has("arrowdown") || keys.has("s")) my += 1;

          const pad = gp.read();
          if (Math.abs(pad.dx) > 0) mx += pad.dx;
          if (Math.abs(pad.dy) > 0) my += pad.dy;

          if (mx !== 0 || my !== 0) {
            aimX = Math.max(0.04, Math.min(0.96, aimX + mx * dt * 0.72));
            aimY = Math.max(0.08, Math.min(0.9, aimY + my * dt * 0.72));
            hasPointer = true;
          }
          if (pad.actionPressed && !answered) {
            fireAt(aimX * w, aimY * h);
          }

          if (shakeTime > 0) shakeTime = Math.max(0, shakeTime - dt);
          if (bossHitFlash > 0) bossHitFlash = Math.max(0, bossHitFlash - dt);
          if (laser) {
            laser.life -= dt;
            if (laser.life <= 0) laser = null;
          }

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt;
            if (p.life <= 0) particles.splice(i, 1);
          }
        }

        // Layout drones cleanly inside safe 2x2 quadrants
        const compactH = h < 390;
        const topReserved = compactH ? 44 : Math.max(58, h * 0.21);
        const botReserved = compactH ? 36 : Math.max(52, h * 0.18);
        const arenaH = Math.max(110, h - topReserved - botReserved);
        const cellW = (w - 22) / 2;
        const cellH = arenaH / 2;
        const cardW = Math.min(340, Math.max(115, cellW - 14));
        const cardH = Math.min(86, Math.max(46, cellH - 12));
        const ampX = Math.max(3, Math.min(18, (cellW - cardW) * 0.4));
        const ampY = Math.max(2, Math.min(10, (cellH - cardH) * 0.35));

        drones.forEach((d) => {
          const cx = 11 + d.col * cellW + cellW / 2;
          const cy = topReserved + d.row * cellH + cellH / 2;
          const bobX = Math.sin(time * 1.45 + d.phase) * ampX;
          const bobY = Math.cos(time * 1.9 + d.phase) * ampY;
          d.w = cardW;
          d.h = cardH;
          d.x = cx - cardW / 2 + bobX;
          d.y = cy - cardH / 2 + bobY;
        });

        // Draw frame
        cm.beginFrame(ctx);
        ctx.save();
        if (shakeTime > 0) {
          ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
        }

        // Background cyber shooting range
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, isBossRound ? "#2e1065" : "#0f172a");
        grad.addColorStop(0.65, isBossRound ? "#4c1d95" : "#1e1b4b");
        grad.addColorStop(1, "#090d16");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Parallax drifting starfield
        stars.forEach((st) => {
          const sx = ((st.x + time * st.spd) % 1) * w;
          const sy = st.y * h;
          ctx.fillStyle = `rgba(255, 255, 255, ${0.35 + 0.35 * Math.sin(time * 3 + st.x * 10)})`;
          ctx.beginPath();
          ctx.arc(sx, sy, st.r, 0, Math.PI * 2);
          ctx.fill();
        });

        // Perspective grid lines on floor
        ctx.strokeStyle = "rgba(56, 189, 248, 0.18)";
        ctx.lineWidth = 1;
        const horizonY = h * 0.55;
        for (let i = -6; i <= 6; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.5 + i * 24, horizonY);
          ctx.lineTo(w * 0.5 + i * (w * 0.22), h);
          ctx.stroke();
        }
        for (let r = 0; r < 5; r++) {
          const t = ((r / 5) + ((time * 0.35) % 0.2)) % 1;
          const ry = horizonY + t * t * (h - horizonY);
          ctx.beginPath();
          ctx.moveTo(0, ry);
          ctx.lineTo(w, ry);
          ctx.stroke();
        }

        // Hovering Chapter Boss in upper center
        const bossX = w * 0.5 + Math.sin(time * 1.6) * 28;
        const bossY = (compactH ? 18 : 28) + Math.sin(time * 3.1) * 3;
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (bossHitFlash > 0) {
          ctx.shadowColor = "#ef4444";
          ctx.shadowBlur = 18;
        }
        ctx.font = `${compactH ? 26 : 34}px 'Segoe UI Emoji', sans-serif`;
        ctx.fillText(bossEmoji || "👾", bossX, bossY);
        ctx.restore();

        // Boss mini-shield indicator
        const barY = compactH ? 34 : 48;
        ctx.fillStyle = "rgba(255,255,255,0.14)";
        App.GameUtil.drawRoundedRect(ctx, w * 0.5 - 56, barY, 112, 7, 4);
        ctx.fill();
        ctx.fillStyle = bossHp > 40 ? "#ef4444" : "#f59e0b";
        App.GameUtil.drawRoundedRect(ctx, w * 0.5 - 56, barY, Math.max(0, 112 * (bossHp / 100)), 7, 4);
        ctx.fill();

        // Draw drones
        const px = aimX * w;
        const py = aimY * h;
        for (const d of drones) {
          if (d.eliminated) {
            ctx.save();
            ctx.globalAlpha = 0.25;
            App.GameUtil.drawWrappedCard(ctx, d.x, d.y, d.w, d.h, "✖ DIBUANG", {
              bg: "#334155",
              border: "#64748b",
              textColor: "#cbd5e1",
              shadowColor: "#090d16",
              maxFont: 12,
              minFont: 9
            });
            ctx.restore();
            continue;
          }
          const hovered = hasPointer && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h;
          // Drone wing bars
          ctx.fillStyle = hovered ? "#ef4444" : fxColors[0];
          ctx.fillRect(d.x - 7, d.y + d.h * 0.35, 7, d.h * 0.3);
          ctx.fillRect(d.x + d.w, d.y + d.h * 0.35, 7, d.h * 0.3);

          const bg =
            d.hitState === "ok"
              ? "#dcfce7"
              : d.hitState === "bad"
              ? "#fee2e2"
              : hovered
              ? "#fef2f2"
              : "#ffffff";
          const border =
            d.hitState === "ok"
              ? "#059669"
              : d.hitState === "bad"
              ? "#dc2626"
              : hovered
              ? "#ef4444"
              : "#18181b";

          App.GameUtil.drawWrappedCard(ctx, d.x, d.y, d.w, d.h, d.text, {
            bg,
            border,
            textColor: "#18181b",
            shadowColor: "#090d16",
            maxFont: 14,
            minFont: 9.5
          });
        }

        // Laser beam
        if (laser) {
          ctx.save();
          ctx.strokeStyle = laser.color;
          ctx.lineWidth = 6;
          ctx.shadowColor = laser.color;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.moveTo(laser.x1, laser.y1);
          ctx.lineTo(laser.x2, laser.y2);
          ctx.stroke();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }

        // Particles & Floating Popups
        for (const p of particles) {
          ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        if (App.GameUtil.drawFloatingPopups) {
          App.GameUtil.drawFloatingPopups(ctx, popups, paused ? 0 : dt);
        }

        // Blaster Turret at bottom center
        const tx = w * 0.5;
        const ty = h - 18;
        const ang = Math.atan2(py - ty, px - tx);
        ctx.save();
        ctx.translate(tx, ty);
        ctx.rotate(ang + Math.PI / 2);
        ctx.fillStyle = "#38bdf8";
        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 2;
        App.GameUtil.drawRoundedRect(ctx, -7, -28, 14, 24, 5);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#fde047";
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Crosshair with LOCK! indicator when aimed over a drone
        const lockedOn = hasPointer && isOverAnyDrone(px, py);
        ctx.save();
        ctx.strokeStyle = lockedOn ? "#34d399" : "#ef4444";
        ctx.lineWidth = lockedOn ? 2.8 : 2;
        ctx.beginPath();
        ctx.arc(px, py, lockedOn ? 18 : 14, 0, Math.PI * 2);
        ctx.moveTo(px - 22, py);
        ctx.lineTo(px - 8, py);
        ctx.moveTo(px + 8, py);
        ctx.lineTo(px + 22, py);
        ctx.moveTo(px, py - 22);
        ctx.lineTo(px, py - 8);
        ctx.moveTo(px, py + 8);
        ctx.lineTo(px, py + 22);
        ctx.stroke();
        if (lockedOn && isTouchAiming) {
          ctx.fillStyle = "#34d399";
          ctx.font = "800 10px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText("LOCK!", px, py - 24);
        }
        ctx.restore();

        // Subtle bottom gesture hint before first touch
        if (!hasInteracted && !answered) {
          ctx.save();
          const hint = w < 440 ? "🎯 Ketik dron atau seret & lepas tembak" : "🎯 Ketik dron atau seret jari untuk bidik & lepas untuk tembak";
          ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
          const tw = Math.min(w - 24, ctx.measureText(hint).width + 20);
          ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
          App.GameUtil.drawRoundedRect(ctx, (w - tw) / 2, h - 46, tw, 20, 10);
          ctx.fill();
          ctx.fillStyle = "#fde047";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(hint, w / 2, h - 36);
          ctx.restore();
        }

        ctx.restore();
        rafId = global.requestAnimationFrame(tick);
      }

      rafId = global.requestAnimationFrame(tick);

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        eliminateTwo: () => {
          const wrongs = drones.filter((d) => d.idx !== qObj.correctIndex && !d.eliminated);
          let removed = 0;
          wrongs.slice(0, 2).forEach((d) => {
            d.eliminated = true;
            spawnParticles(d.x + d.w / 2, d.y + d.h / 2, "#94a3b8", 16);
            removed++;
          });
          return removed > 0;
        },
        showOutcome: (chosenIdx, isCorrect) => {
          if (drones[chosenIdx]) {
            drones[chosenIdx].hitState = isCorrect ? "ok" : "bad";
          }
          if (!isCorrect && drones[qObj.correctIndex]) {
            drones[qObj.correctIndex].hitState = "ok";
          }
        },
        destroy: () => {
          destroyed = true;
          if (rafId) global.cancelAnimationFrame(rafId);
          canvas.removeEventListener("pointermove", onPointerMove);
          canvas.removeEventListener("pointerdown", onPointerDown);
          global.removeEventListener("pointerup", onPointerUp);
          global.removeEventListener("pointercancel", onPointerUp);
          global.removeEventListener("keydown", onKeyDown);
          global.removeEventListener("keyup", onKeyUp);
          cm.destroy();
        }
      };
    }
  };
})(window);
