/**
 * Maze Runner — Real Top-Down Playable 2D Maze Game
 * Top & bottom answer signboards connect to 4 glowing corner portals inside an 11x7 maze.
 * Controls: Arrow keys / WASD, Gamepad stick, On-screen Console D-Pad, or tap any room/card to auto-walk via BFS!
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  const COLS = 11;
  const ROWS = 7;

  // 4 corner portal tiles (TL, TR, BL, BR)
  const PORTAL_SLOTS = [
    { gx: 1, gy: 1, color: "#2563eb", labelBg: "#dbeafe" },
    { gx: 9, gy: 1, color: "#059669", labelBg: "#dcfce7" },
    { gx: 1, gy: 5, color: "#7c3aed", labelBg: "#ede9fe" },
    { gx: 9, gy: 5, color: "#d97706", labelBg: "#fef3c7" }
  ];

  function generateMaze() {
    // 1 = wall, 0 = floor
    const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(1));

    function carve(x, y) {
      grid[y][x] = 0;
      const dirs = [
        [2, 0],
        [-2, 0],
        [0, 2],
        [0, -2]
      ].sort(() => Math.random() - 0.5);
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx > 0 && nx < COLS - 1 && ny > 0 && ny < ROWS - 1 && grid[ny][nx] === 1) {
          grid[y + dy / 2][x + dx / 2] = 0;
          carve(nx, ny);
        }
      }
    }

    carve(5, 3);

    // Braid a few extra loops so maze movement feels arcade-fast
    for (let y = 1; y < ROWS - 1; y += 2) {
      for (let x = 2; x < COLS - 2; x += 2) {
        if (grid[y][x] === 1 && Math.random() < 0.35) {
          grid[y][x] = 0;
        }
      }
    }

    // Ensure center and all 4 corner portals are open
    grid[3][5] = 0;
    PORTAL_SLOTS.forEach((p) => {
      grid[p.gy][p.gx] = 0;
    });
    return grid;
  }

  function findPathBFS(grid, sx, sy, tx, ty) {
    if (sx === tx && sy === ty) return [];
    const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    const parent = {};
    const queue = [[sx, sy]];
    visited[sy][sx] = true;

    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (x === tx && y === ty) {
        const path = [];
        let cur = `${tx},${ty}`;
        while (cur && cur !== `${sx},${sy}`) {
          const [cx, cy] = cur.split(",").map(Number);
          path.unshift({ gx: cx, gy: cy });
          cur = parent[cur];
        }
        return path;
      }
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS && grid[ny][nx] === 0 && !visited[ny][nx]) {
          visited[ny][nx] = true;
          parent[`${nx},${ny}`] = `${x},${y}`;
          queue.push([nx, ny]);
        }
      }
    }
    return [];
  }

  App.MiniGames.maze = {
    mount: function ({ canvas, controlsEl, qObj, playerAvatar, onAnswer }) {
      const ctx = canvas.getContext("2d");
      const cm = App.GameUtil.setupCanvas(canvas);
      const gp = App.GameUtil.createGamepadReader();

      let paused = false;
      let answered = false;
      let destroyed = false;
      let rafId = null;
      let time = 0;

      const grid = generateMaze();
      // Player position in grid coordinate units (center of cell = gx + 0.5, gy + 0.5)
      let px = 5.5;
      let py = 3.5;
      let autoPath = [];
      const heldKeys = new Set();
      let dpadDir = { x: 0, y: 0 };

      const portals = PORTAL_SLOTS.map((slot, idx) => ({
        ...slot,
        idx,
        text: qObj.options[idx],
        hitState: null,
        cardRect: { x: 0, y: 0, w: 120, h: 48 }
      }));

      if (controlsEl) {
        controlsEl.innerHTML = `
          <div class="dpad-console">
            <button type="button" class="ctrl-btn dpad-left" data-dx="-1" data-dy="0">◀</button>
            <button type="button" class="ctrl-btn dpad-up" data-dx="0" data-dy="-1">▲</button>
            <button type="button" class="ctrl-btn dpad-down" data-dx="0" data-dy="1">▼</button>
            <button type="button" class="ctrl-btn dpad-right" data-dx="1" data-dy="0">▶</button>
          </div>`;
        controlsEl.querySelectorAll(".ctrl-btn").forEach((btn) => {
          const dx = Number(btn.getAttribute("data-dx"));
          const dy = Number(btn.getAttribute("data-dy"));
          const start = (e) => {
            e.preventDefault();
            autoPath = [];
            dpadDir = { x: dx, y: dy };
          };
          const stop = () => {
            dpadDir = { x: 0, y: 0 };
          };
          btn.addEventListener("pointerdown", start);
          btn.addEventListener("pointerup", stop);
          btn.addEventListener("pointerleave", stop);
          btn.addEventListener("pointercancel", stop);
        });
      }

      function isWalkable(nx, ny) {
        const radius = 0.28;
        const checks = [
          [nx - radius, ny - radius],
          [nx + radius, ny - radius],
          [nx - radius, ny + radius],
          [nx + radius, ny + radius]
        ];
        for (const [cx, cy] of checks) {
          const gx = Math.floor(cx);
          const gy = Math.floor(cy);
          if (gx < 0 || gx >= COLS || gy < 0 || gy >= ROWS || grid[gy][gx] === 1) {
            return false;
          }
        }
        return true;
      }

      function movePlayer(vx, vy, dt) {
        const speed = 4.6;
        const stepX = vx * speed * dt;
        const stepY = vy * speed * dt;

        if (stepX !== 0) {
          if (isWalkable(px + stepX, py)) {
            px += stepX;
          } else {
            // Corner assist along Y
            const cy = Math.floor(py) + 0.5;
            if (Math.abs(cy - py) < 0.45 && isWalkable(px + stepX, py + Math.sign(cy - py) * 0.14)) {
              py += Math.sign(cy - py) * 2.5 * dt;
            }
          }
        }
        if (stepY !== 0) {
          if (isWalkable(px, py + stepY)) {
            py += stepY;
          } else {
            // Corner assist along X
            const cx = Math.floor(px) + 0.5;
            if (Math.abs(cx - px) < 0.45 && isWalkable(px + Math.sign(cx - px) * 0.14, py + stepY)) {
              px += Math.sign(cx - px) * 2.5 * dt;
            }
          }
        }
      }

      function getLayout(w, h) {
        const cardH = Math.min(62, Math.max(46, Math.round(h * 0.19)));
        const cardW = Math.min(360, (w - 28) / 2);
        const mazeTop = cardH + 14;
        const mazeBot = h - cardH - 14;
        const availH = Math.max(110, mazeBot - mazeTop);
        const availW = w - 20;
        const tile = Math.floor(Math.min(availW / COLS, availH / ROWS));
        const mazeW = tile * COLS;
        const mazeH = tile * ROWS;
        const mazeX = Math.floor((w - mazeW) / 2);
        const mazeY = Math.floor(mazeTop + (availH - mazeH) / 2);
        return { cardH, cardW, mazeX, mazeY, mazeW, mazeH, tile };
      }

      function onPointerDown(e) {
        if (paused || answered) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        const { w, h } = cm.getSize();
        const lay = getLayout(w, h);

        // Check if user tapped one of the 4 corner answer cards -> auto-walk to that portal
        for (const p of portals) {
          const r = p.cardRect;
          if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) {
            autoPath = findPathBFS(grid, Math.floor(px), Math.floor(py), p.gx, p.gy);
            App.Sound.click();
            return;
          }
        }

        // Or tapped directly inside a maze floor cell -> auto-walk there
        const gx = Math.floor((x - lay.mazeX) / lay.tile);
        const gy = Math.floor((y - lay.mazeY) / lay.tile);
        if (gx >= 0 && gx < COLS && gy >= 0 && gy < ROWS && grid[gy][gx] === 0) {
          autoPath = findPathBFS(grid, Math.floor(px), Math.floor(py), gx, gy);
        }
      }

      function onKeyDown(e) {
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        const k = e.key.toLowerCase();
        if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(k)) {
          heldKeys.add(k);
          autoPath = [];
          if (!paused) e.preventDefault();
        }
      }

      function onKeyUp(e) {
        heldKeys.delete(e.key.toLowerCase());
      }

      canvas.addEventListener("pointerdown", onPointerDown);
      global.addEventListener("keydown", onKeyDown);
      global.addEventListener("keyup", onKeyUp);

      let lastTs = performance.now();

      function tick(now) {
        if (destroyed) return;
        const dt = Math.min(0.05, (now - lastTs) / 1000);
        lastTs = now;

        const { w, h } = cm.getSize();
        const lay = getLayout(w, h);

        // Update portal card rects (TL, TR, BL, BR)
        portals[0].cardRect = { x: 10, y: 6, w: lay.cardW, h: lay.cardH };
        portals[1].cardRect = { x: w - 10 - lay.cardW, y: 6, w: lay.cardW, h: lay.cardH };
        portals[2].cardRect = { x: 10, y: h - lay.cardH - 6, w: lay.cardW, h: lay.cardH };
        portals[3].cardRect = { x: w - 10 - lay.cardW, y: h - lay.cardH - 6, w: lay.cardW, h: lay.cardH };

        if (!paused && !answered) {
          time += dt;

          let vx = dpadDir.x;
          let vy = dpadDir.y;
          if (heldKeys.has("arrowleft") || heldKeys.has("a")) vx -= 1;
          if (heldKeys.has("arrowright") || heldKeys.has("d")) vx += 1;
          if (heldKeys.has("arrowup") || heldKeys.has("w")) vy -= 1;
          if (heldKeys.has("arrowdown") || heldKeys.has("s")) vy += 1;

          const pad = gp.read();
          vx += pad.dx;
          vy += pad.dy;

          if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) {
            const len = Math.hypot(vx, vy);
            if (len > 1) {
              vx /= len;
              vy /= len;
            }
            movePlayer(vx, vy, dt);
          } else if (autoPath.length > 0) {
            const next = autoPath[0];
            const tx = next.gx + 0.5;
            const ty = next.gy + 0.5;
            const dx = tx - px;
            const dy = ty - py;
            const dist = Math.hypot(dx, dy);
            if (dist < 0.08) {
              px = tx;
              py = ty;
              autoPath.shift();
            } else {
              const step = Math.min(dist, 5.2 * dt);
              px += (dx / dist) * step;
              py += (dy / dist) * step;
            }
          }

          // Check portal collision
          for (const p of portals) {
            if (Math.hypot(px - (p.gx + 0.5), py - (p.gy + 0.5)) < 0.44) {
              answered = true;
              const isCorrect = p.idx === qObj.correctIndex;
              p.hitState = isCorrect ? "ok" : "bad";
              App.Sound.coin();
              onAnswer(p.idx);
              break;
            }
          }
        }

        // Draw frame
        cm.beginFrame(ctx);
        ctx.fillStyle = "#f4f1ea";
        ctx.fillRect(0, 0, w, h);

        // Connector lines from each corner answer card to its maze portal
        portals.forEach((p) => {
          const r = p.cardRect;
          const cardCx = r.x + r.w / 2;
          const cardCy = r.y < h / 2 ? r.y + r.h : r.y;
          const portCx = lay.mazeX + (p.gx + 0.5) * lay.tile;
          const portCy = lay.mazeY + (p.gy + 0.5) * lay.tile;
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2.5;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(cardCx, cardCy);
          ctx.lineTo(portCx, portCy);
          ctx.stroke();
          ctx.restore();
        });

        // Draw Maze Grid
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 2;
        ctx.fillRect(lay.mazeX, lay.mazeY, lay.mazeW, lay.mazeH);
        ctx.strokeRect(lay.mazeX, lay.mazeY, lay.mazeW, lay.mazeH);

        for (let gy = 0; gy < ROWS; gy++) {
          for (let gx = 0; gx < COLS; gx++) {
            const tx = lay.mazeX + gx * lay.tile;
            const ty = lay.mazeY + gy * lay.tile;
            if (grid[gy][gx] === 1) {
              ctx.fillStyle = "#27272a";
              ctx.fillRect(tx, ty, lay.tile + 0.5, lay.tile + 0.5);
              ctx.fillStyle = "#3f3f46";
              ctx.fillRect(tx + 2, ty + 2, lay.tile - 4, Math.max(3, lay.tile * 0.22));
            }
          }
        }

        // Draw BFS breadcrumb if auto-walking
        if (autoPath.length > 0) {
          ctx.fillStyle = "rgba(37, 99, 235, 0.3)";
          autoPath.forEach((step) => {
            ctx.beginPath();
            ctx.arc(
              lay.mazeX + (step.gx + 0.5) * lay.tile,
              lay.mazeY + (step.gy + 0.5) * lay.tile,
              Math.max(3, lay.tile * 0.14),
              0,
              Math.PI * 2
            );
            ctx.fill();
          });
        }

        // Draw 4 Swirling Corner Portals
        portals.forEach((p) => {
          const cx = lay.mazeX + (p.gx + 0.5) * lay.tile;
          const cy = lay.mazeY + (p.gy + 0.5) * lay.tile;
          const rad = lay.tile * 0.38;
          ctx.save();
          ctx.fillStyle = p.color;
          ctx.strokeStyle = "#18181b";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, rad + Math.sin(time * 5 + p.idx) * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, rad * 0.55, time * 4, time * 4 + Math.PI * 1.35);
          ctx.stroke();
          ctx.restore();
        });

        // Draw Player Avatar inside Maze
        const plX = lay.mazeX + px * lay.tile;
        const plY = lay.mazeY + py * lay.tile;
        const pr = Math.max(10, lay.tile * 0.36);
        ctx.fillStyle = "#fde047";
        ctx.strokeStyle = "#18181b";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(plX, plY, pr, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `${Math.max(14, Math.round(lay.tile * 0.56))}px 'Segoe UI Emoji', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(playerAvatar || "🧭", plX, plY + 1);

        // Draw 4 Answer Signboard Cards
        portals.forEach((p) => {
          const r = p.cardRect;
          const bg =
            p.hitState === "ok"
              ? "#dcfce7"
              : p.hitState === "bad"
              ? "#fee2e2"
              : p.labelBg;
          const border =
            p.hitState === "ok"
              ? "#059669"
              : p.hitState === "bad"
              ? "#dc2626"
              : p.color;
          App.GameUtil.drawWrappedCard(ctx, r.x, r.y, r.w, r.h, p.text, {
            bg,
            border,
            shadowColor: "#18181b",
            maxFont: 13,
            minFont: 9
          });
          // Color beacon dot matching portal
          ctx.fillStyle = p.color;
          ctx.strokeStyle = "#18181b";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(r.x + 10, r.y + 10, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });

        rafId = global.requestAnimationFrame(tick);
      }

      rafId = global.requestAnimationFrame(tick);

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        showOutcome: (chosenIdx, isCorrect) => {
          if (portals[chosenIdx]) portals[chosenIdx].hitState = isCorrect ? "ok" : "bad";
          if (!isCorrect && portals[qObj.correctIndex]) portals[qObj.correctIndex].hitState = "ok";
        },
        destroy: () => {
          destroyed = true;
          if (rafId) global.cancelAnimationFrame(rafId);
          canvas.removeEventListener("pointerdown", onPointerDown);
          global.removeEventListener("keydown", onKeyDown);
          global.removeEventListener("keyup", onKeyUp);
          cm.destroy();
        }
      };
    }
  };
})(window);
