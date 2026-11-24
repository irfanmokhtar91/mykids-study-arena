/**
 * Interactive Touch-First Mini-Games (`App.MiniGames`)
 * - swipe: Leret Fakta (Tinder-style True/False card fling)
 * - match: Sambung Pasangan (Drag/Tap glowing Bezier wire matching)
 * - sort: Isih Pantas (2-Bucket conveyor fling)
 * - builder: Bina Jawapan (Duolingo tactile phrase/formula tile builder)
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.MiniGames = App.MiniGames || {};

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hashSeed(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithRng(rng, arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // ==================== 1. SWIPE (LERET FAKTA) ====================
  App.MiniGames.swipe = {
    isDomGame: true,
    mount: function ({ stageEl, qObj, seed = 1, onAnswer }) {
      let paused = false;
      let answered = false;
      let destroyed = false;

      const rng = mulberry32(hashSeed(`swipe:${qObj.q}:${seed}`));
      const showTrueClaim = rng() >= 0.48;
      const correctText = qObj.options[qObj.correctIndex];
      const wrongOpts = qObj.options.filter((_, idx) => idx !== qObj.correctIndex);
      const proposedText = showTrueClaim ? correctText : wrongOpts[Math.floor(rng() * wrongOpts.length)];

      stageEl.innerHTML = `
        <div class="ig-wrap ig-swipe-wrap">
          <div class="ig-swipe-hint-bar" id="swipe-5050-hint">
            <span>👈 Leret Kiri jika <strong>SALAH</strong> • Leret Kanan jika <strong>TEPAT</strong> 👉</span>
          </div>
          <div class="ig-swipe-arena">
            <div class="ig-swipe-zone ig-zone-false">❌ SALAH</div>
            <div class="ig-swipe-card" id="swipe-card">
              <div class="ig-stamp stamp-true" id="stamp-true">✅ TEPAT!</div>
              <div class="ig-stamp stamp-false" id="stamp-false">❌ SALAH!</div>
              <div class="ig-card-badge">Adakah jawapan cadangan ini TEPAT?</div>
              <div class="ig-card-claim">${esc(proposedText)}</div>
              <div class="ig-card-sub">Leret kad atau ketik butang di bawah</div>
            </div>
            <div class="ig-swipe-zone ig-zone-true">✅ TEPAT</div>
          </div>
          <div class="ig-swipe-actions">
            <button type="button" class="btn-tactile btn-false" id="btn-swipe-false">❌ SALAH</button>
            <button type="button" class="btn-tactile btn-true" id="btn-swipe-true">✅ TEPAT</button>
          </div>
        </div>
      `;

      const card = stageEl.querySelector("#swipe-card");
      const stampTrue = stageEl.querySelector("#stamp-true");
      const stampFalse = stageEl.querySelector("#stamp-false");

      function submitSwipe(pickedTrue) {
        if (paused || answered || destroyed) return;
        answered = true;
        App.Sound.swipe();
        App.Sound.vibrate(18);
        card.style.transition = "transform 0.28s ease, opacity 0.25s ease";
        card.style.transform = `translateX(${pickedTrue ? 140 : -140}px) rotate(${pickedTrue ? 14 : -14}deg)`;
        card.style.opacity = "0.25";

        const isCorrect = pickedTrue === showTrueClaim;
        const chosenText = isCorrect
          ? correctText
          : showTrueClaim
          ? `Menanda SALAH bagi "${proposedText}"`
          : `Menanda TEPAT bagi "${proposedText}"`;
        onAnswer({ isCorrect, chosenText, correctText });
      }

      let dragging = false;
      let startX = 0;
      let curDx = 0;

      function onDown(e) {
        if (paused || answered || destroyed) return;
        e.preventDefault();
        dragging = true;
        startX = e.clientX;
        curDx = 0;
        card.style.transition = "none";
      }

      function onMove(e) {
        if (!dragging || paused || answered || destroyed) return;
        e.preventDefault();
        curDx = e.clientX - startX;
        const rot = curDx * 0.08;
        card.style.transform = `translateX(${curDx}px) rotate(${rot}deg)`;
        const ratio = Math.min(1, Math.abs(curDx) / 72);
        stampTrue.style.opacity = curDx > 10 ? String(ratio) : "0";
        stampFalse.style.opacity = curDx < -10 ? String(ratio) : "0";
      }

      function onUp() {
        if (!dragging) return;
        dragging = false;
        if (curDx > 62) {
          submitSwipe(true);
        } else if (curDx < -62) {
          submitSwipe(false);
        } else {
          card.style.transition = "transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1)";
          card.style.transform = "";
          stampTrue.style.opacity = "0";
          stampFalse.style.opacity = "0";
        }
      }

      function onKey(e) {
        if (paused || answered || destroyed) return;
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          submitSwipe(false);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          submitSwipe(true);
        }
      }

      card.addEventListener("pointerdown", onDown);
      global.addEventListener("pointermove", onMove, { passive: false });
      global.addEventListener("pointerup", onUp);
      global.addEventListener("pointercancel", onUp);
      global.addEventListener("keydown", onKey);
      stageEl.querySelector("#btn-swipe-false").addEventListener("click", () => submitSwipe(false));
      stageEl.querySelector("#btn-swipe-true").addEventListener("click", () => submitSwipe(true));

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        eliminateTwo: () => {
          const hintEl = stageEl.querySelector("#swipe-5050-hint");
          const clueLen = Math.max(2, Math.min(14, Math.ceil(correctText.length * 0.45)));
          if (hintEl) {
            hintEl.innerHTML = `<span class="clue-pill">🛡️ Petunjuk: Jawapan tepat bermula dengan <strong>"${esc(correctText.slice(0, clueLen))}..."</strong></span>`;
          }
          return true;
        },
        showOutcome: (_chosen, isCorrect) => {
          card.classList.add(isCorrect ? "ig-ok" : "ig-bad");
        },
        destroy: () => {
          destroyed = true;
          card.removeEventListener("pointerdown", onDown);
          global.removeEventListener("pointermove", onMove);
          global.removeEventListener("pointerup", onUp);
          global.removeEventListener("pointercancel", onUp);
          global.removeEventListener("keydown", onKey);
        }
      };
    }
  };

  // ==================== 2. MATCH (SAMBUNG PASANGAN / 1-KE-4 KABEL) ====================
  App.MiniGames.match = {
    isDomGame: true,
    mount: function ({ stageEl, gradeId, subjectId, chapterId, qObj, dlp, seed = 1, onAnswer }) {
      let paused = false;
      let answered = false;
      let destroyed = false;

      const rng = mulberry32(hashSeed(`match-ui:${gradeId}:${subjectId}:${chapterId}:${qObj.q}:${seed}`));
      const pairs = App.QuestionEngine.getMatchPairsForQuestion
        ? App.QuestionEngine.getMatchPairsForQuestion(gradeId, subjectId, chapterId, qObj, dlp, seed)
        : null;

      const isSingleMode = !pairs;
      const leftItems = isSingleMode
        ? [{ id: 0, text: qObj.q, answer: qObj.options[qObj.correctIndex], isMain: true, matched: false }]
        : pairs.map((p, idx) => ({ id: idx, text: p.prompt, answer: p.answer, isMain: !!p.isMain, matched: false }));

      const rightItems = isSingleMode
        ? shuffleWithRng(
            rng,
            qObj.options.map((optText, origIdx) => ({
              id: origIdx,
              text: optText,
              isCorrect: origIdx === qObj.correctIndex,
              matched: false,
              eliminated: false
            }))
          )
        : shuffleWithRng(
            rng,
            pairs.map((p, idx) => ({ id: idx, text: p.answer, isCorrect: true, matched: false, eliminated: false }))
          );

      let selectedLeftId = isSingleMode ? 0 : null;
      let dragStart = null; // { side: 'L'|'R', id, x, y, clientX, clientY }
      let pointerCur = null;

      stageEl.innerHTML = `
        <div class="ig-wrap ig-match-wrap" id="match-wrap">
          <div class="ig-match-head">
            <span>${
              isSingleMode
                ? "🔌 Tarik kabel atau ketik jawapan tepat untuk menyambung soalan!"
                : "🔌 Seret atau ketik untuk sambung setiap konsep dengan jawapannya"
            }</span>
            <span class="ig-match-counter" id="match-counter">0/${leftItems.length}</span>
          </div>
          <div class="ig-match-board ${isSingleMode ? "is-single-mode" : ""}" id="match-board">
            <svg class="ig-match-svg" id="match-svg"></svg>
            <div class="ig-match-col" id="match-left-col">
              ${leftItems
                .map(
                  (it) => `
                <button type="button" class="match-node match-left ${it.isMain ? "is-main" : ""} ${isSingleMode ? "selected" : ""}" data-lid="${it.id}">
                  <span class="node-num">${it.id + 1}</span>
                  <span class="node-text">${esc(it.text)}</span>
                  <span class="node-port"></span>
                </button>`
                )
                .join("")}
            </div>
            <div class="ig-match-col" id="match-right-col">
              ${rightItems
                .map(
                  (it) => `
                <button type="button" class="match-node match-right" data-rid="${it.id}">
                  <span class="node-port"></span>
                  <span class="node-text">${esc(it.text)}</span>
                </button>`
                )
                .join("")}
            </div>
          </div>
        </div>
      `;

      const boardEl = stageEl.querySelector("#match-board");
      const svgEl = stageEl.querySelector("#match-svg");
      const counterEl = stageEl.querySelector("#match-counter");
      const completedWires = []; // { lid, rid, color }

      function getPortPos(selector) {
        const el = boardEl.querySelector(selector);
        if (!el) return null;
        const bRect = boardEl.getBoundingClientRect();
        const port = el.querySelector(".node-port") || el;
        const pRect = port.getBoundingClientRect();
        return {
          x: pRect.left + pRect.width / 2 - bRect.left,
          y: pRect.top + pRect.height / 2 - bRect.top
        };
      }

      function makeCurvePath(x1, y1, x2, y2) {
        const dx = Math.max(30, Math.abs(x2 - x1) * 0.52);
        const c1x = x1 + (x2 >= x1 ? dx : -dx);
        const c2x = x2 - (x2 >= x1 ? dx : -dx);
        return `M ${x1} ${y1} C ${c1x} ${y1}, ${c2x} ${y2}, ${x2} ${y2}`;
      }

      function renderWires() {
        if (destroyed) return;
        const paths = completedWires
          .map((w) => {
            const p1 = getPortPos(`[data-lid="${w.lid}"]`);
            const p2 = getPortPos(`[data-rid="${w.rid}"]`);
            if (!p1 || !p2) return "";
            return `<path d="${makeCurvePath(p1.x, p1.y, p2.x, p2.y)}" stroke="${w.color}" stroke-width="5" stroke-linecap="round" fill="none"/>`;
          })
          .join("");

        let livePath = "";
        if (dragStart && pointerCur) {
          const bRect = boardEl.getBoundingClientRect();
          const px = pointerCur.x - bRect.left;
          const py = pointerCur.y - bRect.top;
          livePath = `<path d="${makeCurvePath(dragStart.x, dragStart.y, px, py)}" stroke="#2563eb" stroke-width="4" stroke-dasharray="6 5" stroke-linecap="round" fill="none"/>`;
        }
        svgEl.innerHTML = paths + livePath;
      }

      function clearSelections() {
        if (isSingleMode) return;
        selectedLeftId = null;
        boardEl.querySelectorAll(".match-node.selected").forEach((n) => n.classList.remove("selected"));
      }

      function attemptPair(lid, rid) {
        if (paused || answered || destroyed) return;
        const leftObj = leftItems.find((x) => x.id === lid);
        const rightObj = rightItems.find((x) => x.id === rid);
        if (!leftObj || !rightObj || leftObj.matched || rightObj.matched || rightObj.eliminated) return;

        clearSelections();
        const isPairOk = isSingleMode ? !!rightObj.isCorrect : lid === rid;
        if (isPairOk) {
          leftObj.matched = true;
          rightObj.matched = true;
          completedWires.push({ lid, rid, color: "#10b981" });
          boardEl.querySelector(`[data-lid="${lid}"]`)?.classList.add("matched");
          boardEl.querySelector(`[data-rid="${rid}"]`)?.classList.add("matched");
          const doneCount = leftItems.filter((x) => x.matched).length;
          counterEl.textContent = `${doneCount}/${leftItems.length}`;
          App.Sound.match();
          App.Sound.vibrate(14);
          renderWires();

          if (doneCount === leftItems.length) {
            answered = true;
            const mainAns = qObj.options[qObj.correctIndex];
            onAnswer({ isCorrect: true, chosenText: mainAns, correctText: mainAns });
          }
        } else {
          answered = true;
          completedWires.push({ lid, rid, color: "#ef4444" });
          boardEl.querySelector(`[data-lid="${lid}"]`)?.classList.add("wrong");
          boardEl.querySelector(`[data-rid="${rid}"]`)?.classList.add("wrong");
          renderWires();
          onAnswer({
            isCorrect: false,
            chosenText: isSingleMode ? rightObj.text : `${leftObj.text} ≠ ${rightObj.text}`,
            correctText: isSingleMode ? qObj.options[qObj.correctIndex] : `${leftObj.text} → ${leftObj.answer}`
          });
        }
      }

      function onBoardPointerDown(e) {
        if (paused || answered || destroyed) return;
        const lBtn = e.target.closest(".match-left");
        const rBtn = e.target.closest(".match-right");
        if (!lBtn && !rBtn) return;
        e.preventDefault();

        if (lBtn) {
          const lid = Number(lBtn.getAttribute("data-lid"));
          const item = leftItems.find((x) => x.id === lid);
          if (item && item.matched) return;
          const pos = getPortPos(`[data-lid="${lid}"]`);
          if (pos) dragStart = { side: "L", id: lid, x: pos.x, y: pos.y, clientX: e.clientX, clientY: e.clientY };
          pointerCur = { x: e.clientX, y: e.clientY };
          clearSelections();
          selectedLeftId = lid;
          lBtn.classList.add("selected");
          App.Sound.tileTap();
          renderWires();
        } else if (rBtn) {
          const rid = Number(rBtn.getAttribute("data-rid"));
          const item = rightItems.find((x) => x.id === rid);
          if (!item || item.matched || item.eliminated) return;
          if (!isSingleMode && selectedLeftId !== null) {
            attemptPair(selectedLeftId, rid);
            return;
          }
          const pos = getPortPos(`[data-rid="${rid}"]`);
          if (pos) dragStart = { side: "R", id: rid, x: pos.x, y: pos.y, clientX: e.clientX, clientY: e.clientY };
          pointerCur = { x: e.clientX, y: e.clientY };
          renderWires();
        }
      }

      function onDocMove(e) {
        if (!dragStart || paused || answered || destroyed) return;
        e.preventDefault();
        pointerCur = { x: e.clientX, y: e.clientY };
        renderWires();
      }

      function onDocUp(e) {
        if (!dragStart) return;
        const start = dragStart;
        dragStart = null;
        pointerCur = null;

        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          if (start.side === "L") {
            const rBtn = el.closest(".match-right");
            if (rBtn) {
              attemptPair(start.id, Number(rBtn.getAttribute("data-rid")));
              return;
            }
          } else {
            const lBtn = el.closest(".match-left");
            if (lBtn) {
              attemptPair(Number(lBtn.getAttribute("data-lid")), start.id);
              return;
            }
            const rBtn = el.closest(".match-right");
            if (isSingleMode && rBtn && Number(rBtn.getAttribute("data-rid")) === start.id) {
              attemptPair(0, start.id);
              return;
            }
          }
        }
        renderWires();
      }

      boardEl.addEventListener("pointerdown", onBoardPointerDown);
      global.addEventListener("pointermove", onDocMove, { passive: false });
      global.addEventListener("pointerup", onDocUp);
      global.addEventListener("resize", renderWires);

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        eliminateTwo: () => {
          if (isSingleMode) {
            const wrongItems = shuffleWithRng(
              rng,
              rightItems.filter((r) => !r.isCorrect && !r.eliminated)
            );
            const toDisable = wrongItems.slice(0, 2);
            if (toDisable.length === 0) return false;
            toDisable.forEach((r) => {
              r.eliminated = true;
              const btn = boardEl.querySelector(`[data-rid="${r.id}"]`);
              if (btn) {
                btn.classList.add("ig-eliminated");
                btn.disabled = true;
              }
            });
            return true;
          }
          // Auto-solve 1 unmatched non-main pair (or first unmatched) for free
          const cand = leftItems.find((x) => !x.matched && !x.isMain) || leftItems.find((x) => !x.matched);
          if (!cand) return false;
          attemptPair(cand.id, cand.id);
          return true;
        },
        showOutcome: () => {},
        destroy: () => {
          destroyed = true;
          boardEl.removeEventListener("pointerdown", onBoardPointerDown);
          global.removeEventListener("pointermove", onDocMove);
          global.removeEventListener("pointerup", onDocUp);
          global.removeEventListener("resize", renderWires);
        }
      };
    }
  };

  // ==================== 3. SORT (ISIH PANTAS 2-BUCKET) ====================
  App.MiniGames.sort = {
    isDomGame: true,
    mount: function ({ stageEl, qObj, seed = 1, onAnswer }) {
      let paused = false;
      let answered = false;
      let destroyed = false;

      const rng = mulberry32(hashSeed(`sort:${qObj.q}:${seed}`));
      const correctText = qObj.options[qObj.correctIndex];
      const wrongOpts = shuffleWithRng(
        rng,
        qObj.options.filter((_, idx) => idx !== qObj.correctIndex)
      );
      const deck = shuffleWithRng(rng, [
        { text: correctText, isTrue: true },
        ...wrongOpts.slice(0, 2).map((t) => ({ text: t, isTrue: false }))
      ]);

      let idx = 0;

      stageEl.innerHTML = `
        <div class="ig-wrap ig-sort-wrap">
          <div class="ig-sort-top">
            <span>📦 Isihkan setiap kad: <strong>Leret Kiri (Bukan)</strong> atau <strong>Leret Kanan (Tepat)</strong></span>
            <span class="ig-match-counter" id="sort-progress">Kad 1/${deck.length}</span>
          </div>
          <div class="ig-sort-belt">
            <div class="ig-sort-card" id="sort-card">
              <div class="ig-stamp stamp-true" id="sort-stamp-ok">✅ TEPAT</div>
              <div class="ig-stamp stamp-false" id="sort-stamp-bad">🗑️ BUKAN</div>
              <div class="ig-sort-text" id="sort-card-text"></div>
            </div>
          </div>
          <div class="ig-sort-buckets">
            <button type="button" class="bucket-btn bucket-bad" id="bucket-bad">
              <span class="bucket-ico">🗑️</span>
              <strong>BUKAN JAWAPAN</strong>
            </button>
            <button type="button" class="bucket-btn bucket-ok" id="bucket-ok">
              <span class="bucket-ico">✅</span>
              <strong>JAWAPAN TEPAT</strong>
            </button>
          </div>
        </div>
      `;

      const card = stageEl.querySelector("#sort-card");
      const textEl = stageEl.querySelector("#sort-card-text");
      const progEl = stageEl.querySelector("#sort-progress");
      const stOk = stageEl.querySelector("#sort-stamp-ok");
      const stBad = stageEl.querySelector("#sort-stamp-bad");
      const bBad = stageEl.querySelector("#bucket-bad");
      const bOk = stageEl.querySelector("#bucket-ok");

      function showCurrentCard() {
        if (idx >= deck.length) return;
        progEl.textContent = `Kad ${idx + 1}/${deck.length}`;
        textEl.textContent = deck[idx].text;
        card.style.transition = "none";
        card.style.transform = "scale(0.94)";
        card.style.opacity = "0";
        stOk.style.opacity = "0";
        stBad.style.opacity = "0";
        requestAnimationFrame(() => {
          card.style.transition = "transform 0.2s ease, opacity 0.2s ease";
          card.style.transform = "scale(1)";
          card.style.opacity = "1";
        });
      }

      function sortCurrent(intoTrueBucket) {
        if (paused || answered || destroyed || idx >= deck.length) return;
        const current = deck[idx];
        const cardOk = current.isTrue === intoTrueBucket;

        card.style.transition = "transform 0.22s ease, opacity 0.2s ease";
        card.style.transform = `translate(${intoTrueBucket ? 130 : -130}px, 50px) scale(0.7) rotate(${intoTrueBucket ? 14 : -14}deg)`;
        card.style.opacity = "0";

        if (!cardOk) {
          answered = true;
          (intoTrueBucket ? bOk : bBad).classList.add("bucket-wrong");
          onAnswer({
            isCorrect: false,
            chosenText: current.isTrue
              ? `Membuang jawapan tepat "${current.text}" ke tong BUKAN`
              : `Memilih salah "${current.text}" sebagai TEPAT`,
            correctText
          });
          return;
        }

        App.Sound.swipe();
        App.Sound.vibrate(14);
        idx++;
        if (idx >= deck.length) {
          answered = true;
          onAnswer({ isCorrect: true, chosenText: correctText, correctText });
        } else {
          setTimeout(() => {
            if (!destroyed && !answered) showCurrentCard();
          }, 180);
        }
      }

      let dragging = false;
      let startX = 0;
      let curDx = 0;

      function onDown(e) {
        if (paused || answered || destroyed) return;
        e.preventDefault();
        dragging = true;
        startX = e.clientX;
        curDx = 0;
        card.style.transition = "none";
      }

      function onMove(e) {
        if (!dragging || paused || answered || destroyed) return;
        e.preventDefault();
        curDx = e.clientX - startX;
        card.style.transform = `translateX(${curDx}px) rotate(${curDx * 0.08}deg)`;
        const ratio = Math.min(1, Math.abs(curDx) / 65);
        stOk.style.opacity = curDx > 10 ? String(ratio) : "0";
        stBad.style.opacity = curDx < -10 ? String(ratio) : "0";
      }

      function onUp() {
        if (!dragging) return;
        dragging = false;
        if (curDx > 56) sortCurrent(true);
        else if (curDx < -56) sortCurrent(false);
        else {
          card.style.transition = "transform 0.2s ease";
          card.style.transform = "";
          stOk.style.opacity = "0";
          stBad.style.opacity = "0";
        }
      }

      function onKey(e) {
        if (paused || answered || destroyed) return;
        const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea") return;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          sortCurrent(false);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          sortCurrent(true);
        }
      }

      showCurrentCard();
      card.addEventListener("pointerdown", onDown);
      global.addEventListener("pointermove", onMove, { passive: false });
      global.addEventListener("pointerup", onUp);
      global.addEventListener("pointercancel", onUp);
      global.addEventListener("keydown", onKey);
      bBad.addEventListener("click", () => sortCurrent(false));
      bOk.addEventListener("click", () => sortCurrent(true));

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        eliminateTwo: () => {
          // Remove 1 remaining wrong decoy from deck (auto-cleared)
          const wrongPos = deck.findIndex((c, i) => i >= idx && !c.isTrue);
          if (wrongPos < 0) return false;
          deck.splice(wrongPos, 1);
          App.Sound.powerup();
          if (idx >= deck.length && !answered) {
            answered = true;
            onAnswer({ isCorrect: true, chosenText: correctText, correctText });
          } else {
            showCurrentCard();
          }
          return true;
        },
        showOutcome: () => {},
        destroy: () => {
          destroyed = true;
          card.removeEventListener("pointerdown", onDown);
          global.removeEventListener("pointermove", onMove);
          global.removeEventListener("pointerup", onUp);
          global.removeEventListener("pointercancel", onUp);
          global.removeEventListener("keydown", onKey);
        }
      };
    }
  };

  // ==================== 4. BUILDER (BINA JAWAPAN TACTILE TILES) ====================
  function prepareBuilderData(correctText, wrongOptions, rng) {
    const clean = String(correctText || "").trim();
    const words = clean.split(/\s+/).filter(Boolean);

    // Multi-word answer (2..5 words): arrange word tiles!
    if (words.length >= 2 && words.length <= 5) {
      const targetTokens = words;
      const seenPool = new Set(words.map((w) => w.toLowerCase()));
      const distractors = [];
      wrongOptions.forEach((wo) => {
        String(wo || "")
          .split(/\s+/)
          .filter(Boolean)
          .forEach((w) => {
            if (!seenPool.has(w.toLowerCase()) && distractors.length < 3) {
              seenPool.add(w.toLowerCase());
              distractors.push(w);
            }
          });
      });
      const bank = shuffleWithRng(
        rng,
        [
          ...targetTokens.map((t, i) => ({ id: `t${i}`, text: t, isDecoy: false })),
          ...distractors.map((t, i) => ({ id: `d${i}`, text: t, isDecoy: true }))
        ]
      );
      return { mode: "words", joiner: " ", targetTokens, expectedText: clean, bank };
    }

    // Long single formula or 6+ word phrase: atomic chunk lock!
    if (words.length > 5) {
      const mid = Math.ceil(words.length / 2);
      const p1 = words.slice(0, mid).join(" ");
      const p2 = words.slice(mid).join(" ");
      const wrongParts = [];
      wrongOptions.slice(0, 2).forEach((w) => {
        const ww = String(w || "").split(/\s+/).filter(Boolean);
        if (ww.length >= 2) wrongParts.push(ww.slice(0, Math.ceil(ww.length / 2)).join(" "));
        else if (w) wrongParts.push(w);
      });
      const bank = shuffleWithRng(
        rng,
        [
          { id: "t0", text: p1, isDecoy: false },
          { id: "t1", text: p2, isDecoy: false },
          ...wrongParts.map((t, i) => ({ id: `d${i}`, text: t, isDecoy: true }))
        ]
      );
      return { mode: "chunks", joiner: " ", targetTokens: [p1, p2], expectedText: clean, bank };
    }

    // Short compact answer (numbers/units/single word): tactile lock slots
    const bank = shuffleWithRng(
      rng,
      [
        { id: "t0", text: clean, isDecoy: false },
        ...wrongOptions.slice(0, 3).map((t, i) => ({ id: `d${i}`, text: String(t), isDecoy: true }))
      ]
    );
    return { mode: "slot", joiner: "", targetTokens: [clean], expectedText: clean, bank };
  }

  App.MiniGames.builder = {
    isDomGame: true,
    mount: function ({ stageEl, qObj, seed = 1, onAnswer }) {
      let paused = false;
      let answered = false;
      let destroyed = false;

      const rng = mulberry32(hashSeed(`builder:${qObj.q}:${seed}`));
      const correctText = qObj.options[qObj.correctIndex];
      const wrongOptions = qObj.options.filter((_, idx) => idx !== qObj.correctIndex);
      const data = prepareBuilderData(correctText, wrongOptions, rng);

      const placedIds = [];
      const removedDecoyIds = new Set();

      stageEl.innerHTML = `
        <div class="ig-wrap ig-builder-wrap">
          <div class="ig-builder-hint">
            <span>${data.mode === "slot" ? "🧩 Ketik kepingan jawapan ke dalam slot kunci:" : "🧱 Susun kepingan mengikut urutan jawapan tepat:"}</span>
          </div>
          <div class="ig-builder-tray" id="builder-tray"></div>
          <div class="ig-builder-bank" id="builder-bank"></div>
          <div class="ig-builder-actions">
            <button type="button" class="btn-secondary btn-sm" id="btn-builder-clear">↺ Kosongkan</button>
            <button type="button" class="btn-tactile btn-true" id="btn-builder-check" disabled>⚡ SEMAK JAWAPAN</button>
          </div>
        </div>
      `;

      const trayEl = stageEl.querySelector("#builder-tray");
      const bankEl = stageEl.querySelector("#builder-bank");
      const clearBtn = stageEl.querySelector("#btn-builder-clear");
      const checkBtn = stageEl.querySelector("#btn-builder-check");

      function renderTiles() {
        if (destroyed) return;
        if (placedIds.length === 0) {
          trayEl.innerHTML = `<span class="tray-placeholder">Ketik kepingan di bawah untuk isi jawapan...</span>`;
        } else {
          trayEl.innerHTML = placedIds
            .map((id) => {
              const item = data.bank.find((b) => b.id === id);
              return `<button type="button" class="tile-chip tile-placed" data-placed-id="${id}">${esc(item.text)}</button>`;
            })
            .join("");
        }

        bankEl.innerHTML = data.bank
          .filter((b) => !removedDecoyIds.has(b.id))
          .map((b) => {
            const used = placedIds.includes(b.id);
            return `<button type="button" class="tile-chip ${used ? "tile-used" : ""}" data-bank-id="${b.id}" ${used ? "disabled" : ""}>${esc(b.text)}</button>`;
          })
          .join("");

        checkBtn.disabled = placedIds.length === 0 || answered;
        checkBtn.classList.toggle("ready-pulse", placedIds.length >= data.targetTokens.length && !answered);
      }

      function checkBuiltAnswer() {
        if (paused || answered || destroyed || placedIds.length === 0) return;
        answered = true;
        const built = placedIds
          .map((id) => data.bank.find((b) => b.id === id)?.text || "")
          .join(data.joiner)
          .replace(/\s+/g, " ")
          .trim();
        const isCorrect = built.toLowerCase() === data.expectedText.replace(/\s+/g, " ").trim().toLowerCase();
        trayEl.classList.add(isCorrect ? "tray-ok" : "tray-bad");
        App.Sound.tileTap();
        onAnswer({ isCorrect, chosenText: built || "-", correctText });
      }

      trayEl.addEventListener("click", (e) => {
        if (paused || answered || destroyed) return;
        const btn = e.target.closest("[data-placed-id]");
        if (!btn) return;
        const id = btn.getAttribute("data-placed-id");
        const pos = placedIds.indexOf(id);
        if (pos >= 0) {
          placedIds.splice(pos, 1);
          App.Sound.tileTap();
          renderTiles();
        }
      });

      bankEl.addEventListener("click", (e) => {
        if (paused || answered || destroyed) return;
        const btn = e.target.closest("[data-bank-id]");
        if (!btn) return;
        const id = btn.getAttribute("data-bank-id");
        if (!placedIds.includes(id)) {
          placedIds.push(id);
          App.Sound.tileTap();
          App.Sound.vibrate(10);
          renderTiles();
          if (data.mode === "slot" && placedIds.length === 1) {
            setTimeout(() => checkBuiltAnswer(), 110);
          }
        }
      });

      clearBtn.addEventListener("click", () => {
        if (paused || answered || destroyed) return;
        placedIds.length = 0;
        App.Sound.click();
        renderTiles();
      });

      checkBtn.addEventListener("click", checkBuiltAnswer);

      renderTiles();

      return {
        setPaused: (p) => {
          paused = !!p;
        },
        eliminateTwo: () => {
          let removed = 0;
          for (const b of data.bank) {
            if (b.isDecoy && !removedDecoyIds.has(b.id)) {
              removedDecoyIds.add(b.id);
              const idx = placedIds.indexOf(b.id);
              if (idx >= 0) placedIds.splice(idx, 1);
              removed++;
              if (removed >= 2) break;
            }
          }
          renderTiles();
          return removed > 0;
        },
        showOutcome: () => {},
        destroy: () => {
          destroyed = true;
        }
      };
    }
  };
})(window);
