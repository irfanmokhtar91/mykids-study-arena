/**
 * Main Application Controller: Profile selection, inline name/avatar setup,
 * Subject/Chapter/Set 1-12 browser, DLP toggle, Game Mode launcher,
 * Results & Answer Review, and PIN-locked Parent Dashboard.
 */
(function (global) {
  const App = (global.App = global.App || {});

  let currentView = "home"; // 'home' | 'chapters' | 'sets' | 'playing' | 'results' | 'parent'
  let selectedSubject = null;
  let selectedChapter = null;
  let selectedSetNum = 1;
  let selectedMode = "runner";
  let lastResult = null;
  let parentUnlocked = false;
  let editingProfile = false;
  let draftAvatar = null;

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTopBar() {
    const state = App.Storage.getState();
    const profile = App.Storage.getActiveProfile();
    const muted = App.Sound.isMuted();

    const profileChips = state.profiles
      .map((p) => {
        const displayName = App.Storage.getDisplayName(p);
        const unnamed = !(p.name && p.name.trim());
        return `
          <button class="profile-chip ${p.id === profile.id ? "active" : ""}" data-profile-id="${p.id}">
            <span class="chip-avatar">${p.avatar}</span>
            <span>${esc(displayName)}</span>
            ${unnamed ? `<span class="chip-dot" title="Belum isi nama">Isi Nama</span>` : ""}
          </button>`;
      })
      .join("");

    document.getElementById("topbar").innerHTML = `
      <div class="brand" id="nav-home">
        <span class="brand-logo">🚀</span>
        <div>
          <div class="brand-title">MyKids Study Arena</div>
          <div class="brand-sub">KSSR & KSSM 2027 • Zero-Mistake Verified</div>
        </div>
      </div>

      <div class="profile-switcher">${profileChips}</div>

      <div class="topbar-actions">
        <label class="dlp-toggle" title="Tukar bahasa Matematik & Sains kepada Bahasa Inggeris (DLP)">
          <input type="checkbox" id="chk-dlp" ${state.dlpEnabled ? "checked" : ""} />
          <span>DLP (EN)</span>
        </label>
        <button class="btn-ghost" id="btn-sound" title="Bunyi">${muted ? "🔇" : "🔊"}</button>
        <button class="btn-parent" id="btn-parent-dash">👨‍👩‍👧‍👦 Ibu Bapa</button>
      </div>
    `;

    document.getElementById("nav-home").addEventListener("click", () => {
      App.Sound.click();
      currentView = "home";
      renderMain();
    });

    document.querySelectorAll(".profile-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        App.Sound.click();
        App.Storage.setActiveProfile(btn.getAttribute("data-profile-id"));
        currentView = "home";
        selectedSubject = null;
        selectedChapter = null;
        editingProfile = false;
        draftAvatar = null;
        renderAll();
      });
    });

    document.getElementById("chk-dlp").addEventListener("change", (e) => {
      App.Storage.setDlpEnabled(e.target.checked);
      if (currentView !== "playing") renderMain();
    });

    document.getElementById("btn-sound").addEventListener("click", () => {
      App.Sound.setMuted(!App.Sound.isMuted());
      renderTopBar();
    });

    document.getElementById("btn-parent-dash").addEventListener("click", () => {
      App.Sound.click();
      currentView = "parent";
      renderMain();
    });
  }

  function syncViewportMetrics() {
    const vv = global.visualViewport;
    const h = vv ? Math.round(vv.height) : global.innerHeight;
    const top = vv ? Math.max(0, Math.round(vv.offsetTop)) : 0;
    document.documentElement.style.setProperty("--app-height", `${h}px`);
    document.documentElement.style.setProperty("--vv-top", `${top}px`);
  }

  function syncBodyMode() {
    document.body.classList.toggle("is-playing", currentView === "playing");
    syncViewportMetrics();
    if (currentView === "playing") {
      global.scrollTo(0, 0);
    }
  }

  function launchSetGame(main, profile, grade, dlp) {
    const questions = App.QuestionEngine.getSetQuestions(
      profile.gradeId,
      selectedSubject.id,
      selectedChapter.id,
      selectedSetNum,
      dlp && selectedSubject.dlp
    );
    currentView = "playing";
    syncBodyMode();
    App.Games.startSession({
      container: main,
      profile,
      grade,
      subject: selectedSubject,
      chapter: selectedChapter,
      setNum: selectedSetNum,
      mode: selectedMode,
      questions,
      onExit: () => {
        currentView = "sets";
        renderMain();
      },
      onComplete: (res) => {
        const reward = App.Storage.recordAttempt(profile.id, {
          gradeId: profile.gradeId,
          subjectId: selectedSubject.id,
          chapterId: selectedChapter.id,
          setNum: selectedSetNum,
          score: res.score,
          total: res.total,
          maxStreak: res.maxStreak,
          mode: selectedMode
        });
        lastResult = { ...res, earnedXp: reward ? reward.earnedXp : 0 };
        currentView = "results";
        renderTopBar();
        renderMain();
      }
    });
  }

  function renderMain() {
    syncBodyMode();
    const main = document.getElementById("main-content");
    const state = App.Storage.getState();
    const profile = App.Storage.getActiveProfile();
    const grade = App.GRADES[profile.gradeId];
    const dlp = state.dlpEnabled;
    const hasCustomName = !!(profile.name && profile.name.trim());
    const displayName = App.Storage.getDisplayName(profile);

    if (currentView === "home") {
      const totalSetsPlayed = Object.keys(profile.setBest || {}).length;
      const cards = grade.subjects
        .map((subj) => {
          const chCount = subj.chapters.length;
          const totalSets = chCount * App.SETS_PER_CHAPTER;
          let completed = 0;
          subj.chapters.forEach((ch) => {
            for (let s = 1; s <= App.SETS_PER_CHAPTER; s++) {
              if (profile.setBest[`${subj.id}:${ch.id}:${s}`]) completed++;
            }
          });
          const subjName = dlp && subj.dlp ? subj.nameEn : subj.name;
          return `
            <div class="subject-card" data-subj="${subj.id}">
              <div class="subj-icon">${subj.icon}</div>
              <div class="subj-info">
                <h3>${esc(subjName)}</h3>
                <p>${chCount} Bab • ${totalSets} Set Latihan</p>
                <div class="mini-progress">
                  <div class="mini-fill" style="width:${Math.round((completed / totalSets) * 100)}%"></div>
                </div>
                <span class="subj-stat">${completed}/${totalSets} set selesai</span>
              </div>
            </div>`;
        })
        .join("");

      const showEditor = !hasCustomName || editingProfile;
      const activeAvatar = draftAvatar || profile.avatar;
      const avatarButtons = (App.AVATARS || ["🦊", "🚀", "⚡"])
        .map(
          (av) => `
          <button type="button" class="avatar-pick ${av === activeAvatar ? "selected" : ""}" data-avatar="${av}">
            ${av}
          </button>`
        )
        .join("");

      const heroBodyHtml = showEditor
        ? `
          <div class="profile-setup-card">
            <div class="setup-head">
              <strong>✏️ Isi Nama & Pilih Avatar Kamu (${esc(grade.name)})</strong>
              ${hasCustomName ? `<button type="button" class="btn-ghost btn-sm" id="btn-cancel-edit">Batal</button>` : ""}
            </div>
            <div class="setup-input-row">
              <input
                type="text"
                id="inp-kid-name"
                maxlength="28"
                placeholder="Taip nama kamu di sini..."
                value="${esc(profile.name || "")}"
              />
              <button type="button" class="btn-primary" id="btn-save-kid-name">Simpan</button>
            </div>
            <div class="avatar-grid">${avatarButtons}</div>
          </div>`
        : `
          <div class="hero-greet-row">
            <h1>Hai, ${esc(displayName)}! ${profile.avatar}</h1>
            <button type="button" class="btn-secondary btn-sm" id="btn-edit-profile">✏️ Tukar Nama & Avatar</button>
          </div>
          <p>Pilih subjek di bawah, pilih bab, dan main salah satu daripada 4 mod permainan!</p>`;

      main.innerHTML = `
        <section class="hero-banner grade-${grade.id}" style="--accent:${grade.color}">
          <div class="hero-left">
            <span class="grade-pill">${esc(grade.name)} • ${esc(grade.subtitle)}</span>
            ${heroBodyHtml}
          </div>
          <div class="hero-stats">
            <div class="stat-box"><strong>${profile.xp || 0}</strong><span>Jumlah XP</span></div>
            <div class="stat-box"><strong>${profile.streakBest || 0} 🔥</strong><span>Rekod Streak</span></div>
            <div class="stat-box"><strong>${totalSetsPlayed}</strong><span>Set Selesai</span></div>
          </div>
        </section>

        <h2 class="section-title">📚 Semua Subjek (${esc(grade.name)})</h2>
        <div class="subject-grid">${cards}</div>
      `;

      if (showEditor) {
        const nameInput = document.getElementById("inp-kid-name");
        const saveProfile = () => {
          const val = nameInput.value.trim();
          App.Storage.updateProfile(profile.id, {
            name: val,
            avatar: draftAvatar || profile.avatar
          });
          editingProfile = false;
          draftAvatar = null;
          App.Sound.unlock();
          renderAll();
        };

        document.getElementById("btn-save-kid-name").addEventListener("click", saveProfile);
        nameInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            saveProfile();
          }
        });

        main.querySelectorAll(".avatar-pick").forEach((avBtn) => {
          avBtn.addEventListener("click", () => {
            App.Sound.click();
            draftAvatar = avBtn.getAttribute("data-avatar");
            main.querySelectorAll(".avatar-pick").forEach((b) => b.classList.remove("selected"));
            avBtn.classList.add("selected");
          });
        });

        const cancelBtn = document.getElementById("btn-cancel-edit");
        if (cancelBtn) {
          cancelBtn.addEventListener("click", () => {
            App.Sound.click();
            editingProfile = false;
            draftAvatar = null;
            renderMain();
          });
        }
      } else {
        document.getElementById("btn-edit-profile").addEventListener("click", () => {
          App.Sound.click();
          editingProfile = true;
          draftAvatar = profile.avatar;
          renderMain();
        });
      }

      main.querySelectorAll(".subject-card").forEach((card) => {
        card.addEventListener("click", () => {
          App.Sound.click();
          selectedSubject = grade.subjects.find((s) => s.id === card.getAttribute("data-subj"));
          currentView = "chapters";
          renderMain();
        });
      });
    } else if (currentView === "chapters" && selectedSubject) {
      const subjName = dlp && selectedSubject.dlp ? selectedSubject.nameEn : selectedSubject.name;
      const chCards = selectedSubject.chapters
        .map((ch, i) => {
          const chTitle = dlp && selectedSubject.dlp ? ch.titleEn : ch.title;
          let done = 0;
          let sumPct = 0;
          for (let s = 1; s <= App.SETS_PER_CHAPTER; s++) {
            const rec = profile.setBest[`${selectedSubject.id}:${ch.id}:${s}`];
            if (rec) {
              done++;
              sumPct += Math.round((rec.bestScore / rec.total) * 100);
            }
          }
          const avg = done > 0 ? Math.round(sumPct / done) : null;
          return `
            <div class="chapter-card" data-ch="${ch.id}">
              <div class="ch-num">Bab ${i + 1}</div>
              <div class="ch-body">
                <h3>${esc(chTitle)}</h3>
                <p>${App.SETS_PER_CHAPTER} Set Soalan (${done}/${App.SETS_PER_CHAPTER} selesai)</p>
              </div>
              <div class="ch-badge">${avg !== null ? `${avg}%` : "Baru"}</div>
            </div>`;
        })
        .join("");

      main.innerHTML = `
        <div class="breadcrumb">
          <button class="btn-ghost" id="btn-back-home">← Semua Subjek</button>
          <span>/</span>
          <strong>${selectedSubject.icon} ${esc(subjName)}</strong>
        </div>
        <h2 class="section-title">Pilih Bab untuk Latihan</h2>
        <div class="chapter-list">${chCards}</div>
      `;

      document.getElementById("btn-back-home").addEventListener("click", () => {
        App.Sound.click();
        currentView = "home";
        renderMain();
      });

      main.querySelectorAll(".chapter-card").forEach((c) => {
        c.addEventListener("click", () => {
          App.Sound.click();
          selectedChapter = selectedSubject.chapters.find((x) => x.id === c.getAttribute("data-ch"));
          currentView = "sets";
          renderMain();
        });
      });
    } else if (currentView === "sets" && selectedSubject && selectedChapter) {
      const subjName = dlp && selectedSubject.dlp ? selectedSubject.nameEn : selectedSubject.name;
      const chTitle = dlp && selectedSubject.dlp ? selectedChapter.titleEn : selectedChapter.title;

      const modeCards = App.GAME_MODES.map(
        (m) => `
        <button class="mode-card ${selectedMode === m.id ? "active" : ""}" data-mode="${m.id}">
          <span class="mode-icon">${m.icon}</span>
          <div>
            <strong>${m.name}</strong>
            <small>${m.desc}</small>
          </div>
        </button>`
      ).join("");

      const setButtons = Array.from({ length: App.SETS_PER_CHAPTER }, (_, i) => i + 1)
        .map((s) => {
          const rec = profile.setBest[`${selectedSubject.id}:${selectedChapter.id}:${s}`];
          const pct = rec ? Math.round((rec.bestScore / rec.total) * 100) : null;
          const stars = pct === null ? "☆☆☆" : pct >= 90 ? "★★★" : pct >= 70 ? "★★☆" : "★☆☆";
          return `
            <button class="set-card ${rec ? "played" : ""}" data-set="${s}">
              <div class="set-num">Set ${s}</div>
              <div class="set-stars">${stars}</div>
              <div class="set-score">${rec ? `${App.Storage.fmtScore(rec.bestScore)}/${rec.total} (${pct}%)` : "Mula Set"}</div>
            </button>`;
        })
        .join("");

      main.innerHTML = `
        <div class="breadcrumb">
          <button class="btn-ghost" id="btn-back-subj">${selectedSubject.icon} ${esc(subjName)}</button>
          <span>/</span>
          <strong>${esc(chTitle)}</strong>
        </div>

        <div class="mode-picker-box">
          <h3>🎮 Langkah 1: Pilih Mod Permainan</h3>
          <div class="mode-grid">${modeCards}</div>
        </div>

        <h3 class="section-title">📝 Langkah 2: Pilih Set Soalan (1–${App.SETS_PER_CHAPTER})</h3>
        <div class="set-grid">${setButtons}</div>
      `;

      document.getElementById("btn-back-subj").addEventListener("click", () => {
        App.Sound.click();
        currentView = "chapters";
        renderMain();
      });

      main.querySelectorAll(".mode-card").forEach((m) => {
        m.addEventListener("click", () => {
          App.Sound.click();
          selectedMode = m.getAttribute("data-mode");
          renderMain();
        });
      });

      main.querySelectorAll(".set-card").forEach((btn) => {
        btn.addEventListener("click", () => {
          App.Sound.click();
          selectedSetNum = Number(btn.getAttribute("data-set"));
          launchSetGame(main, profile, grade, dlp);
        });
      });
    } else if (currentView === "results" && lastResult) {
      const { score, total, maxStreak, answers, pct, earnedXp } = lastResult;
      const rank = pct >= 90 ? "S" : pct >= 80 ? "A" : pct >= 65 ? "B" : "C";
      const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🌟" : pct >= 50 ? "👍" : "💪";
      const confettiHtml =
        pct >= 70
          ? `<div class="confetti-burst" aria-hidden="true">${Array.from({ length: 16 }, (_, i) => `<span class="confetti-dot c-${i % 4}" style="--i:${i}"></span>`).join("")}</div>`
          : "";

      const reviewHtml = answers
        .map((a, i) => {
          const userAns = a.qObj.options[a.selectedIndex];
          const trueAns = a.qObj.options[a.qObj.correctIndex];
          const ptsLabel = a.isCorrect
            ? a.points === 1
              ? `✅ +1.0 (${a.elapsedSec.toFixed(1)}s)`
              : `⏱️ +0.5 (>10s: ${a.elapsedSec.toFixed(1)}s)`
            : "❌ 0";
          return `
            <div class="review-item ${a.isCorrect ? "rev-ok" : "rev-bad"}">
              <div class="rev-q"><strong>S${i + 1}:</strong> ${esc(a.qObj.q)}</div>
              <div class="rev-ans">
                <span>Jawapan anda: <strong>${esc(userAns)}</strong> (${ptsLabel})</span>
                ${!a.isCorrect ? `<span>Jawapan tepat: <strong class="true-ans">${esc(trueAns)}</strong></span>` : ""}
              </div>
              <div class="rev-exp">💡 ${esc(a.qObj.explanation)}</div>
            </div>`;
        })
        .join("");

      main.innerHTML = `
        <div class="result-card">
          ${confettiHtml}
          <div class="result-top">
            <span class="result-emoji">${emoji}</span>
            <span class="rank-badge rank-${rank}">Gred ${rank}</span>
          </div>
          <h2>Markah: ${App.Storage.fmtScore(score)} / ${total} (${pct}%)</h2>
          <p>+${earnedXp} XP diperoleh • Streak Terbaik: ${maxStreak} 🔥</p>
          <div class="result-actions">
            <button class="btn-primary" id="btn-retry-set">🔄 Main Semula Set ${selectedSetNum}</button>
            <button class="btn-secondary" id="btn-other-sets">📚 Pilih Set Lain</button>
          </div>
        </div>

        <h3 class="section-title">📋 Semakan Jawapan & Penerangan</h3>
        <div class="review-list">${reviewHtml}</div>
      `;

      document.getElementById("btn-retry-set").addEventListener("click", () => {
        App.Sound.click();
        launchSetGame(main, profile, grade, dlp);
      });
      document.getElementById("btn-other-sets").addEventListener("click", () => {
        App.Sound.click();
        currentView = "sets";
        renderMain();
      });
    } else if (currentView === "parent") {
      renderParentDashboard(main);
    }
  }

  function getWeakChapters(profile) {
    const byChapter = {};
    const setBest = profile.setBest || {};
    Object.entries(setBest).forEach(([key, rec]) => {
      const [subjId, chId] = key.split(":");
      const chKey = `${subjId}:${chId}`;
      if (!byChapter[chKey]) byChapter[chKey] = { subjId, chId, sumPct: 0, count: 0 };
      byChapter[chKey].sumPct += Math.round((rec.bestScore / rec.total) * 100);
      byChapter[chKey].count++;
    });

    return Object.values(byChapter)
      .map((item) => ({
        ...item,
        avgPct: Math.round(item.sumPct / item.count)
      }))
      .filter((item) => item.avgPct < 70)
      .sort((a, b) => a.avgPct - b.avgPct)
      .slice(0, 4);
  }

  function renderParentDashboard(main) {
    const state = App.Storage.getState();

    if (!parentUnlocked) {
      main.innerHTML = `
        <div class="pin-box">
          <h2>🔒 Panel Ibu Bapa</h2>
          <p>Masukkan PIN 4-digit untuk melihat prestasi semua anak & tetapan sandaran Cloud Drive. (PIN lalai: <code>1234</code>)</p>
          <div class="pin-row">
            <input type="password" id="pin-input" maxlength="6" placeholder="PIN (1234)" />
            <button class="btn-primary" id="btn-unlock-pin">Buka</button>
          </div>
          <p class="pin-err hidden" id="pin-err">PIN salah. Cuba lagi.</p>
          <button class="btn-ghost" id="btn-back-kids">← Kembali</button>
        </div>
      `;
      const pinInput = document.getElementById("pin-input");
      const tryUnlock = () => {
        const val = pinInput.value.trim();
        if (App.Storage.verifyParentPin(val)) {
          parentUnlocked = true;
          App.Sound.unlock();
          renderParentDashboard(main);
        } else {
          App.Sound.wrong();
          document.getElementById("pin-err").classList.remove("hidden");
        }
      };
      document.getElementById("btn-back-kids").addEventListener("click", () => {
        currentView = "home";
        renderMain();
      });
      document.getElementById("btn-unlock-pin").addEventListener("click", tryUnlock);
      pinInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          tryUnlock();
        }
      });
      return;
    }

    const kidCards = state.profiles
      .map((p) => {
        const grade = App.GRADES[p.gradeId];
        const displayName = App.Storage.getDisplayName(p);
        const history = p.history || [];
        const avgPct =
          history.length > 0 ? Math.round(history.reduce((s, h) => s + h.pct, 0) / history.length) : 0;
        const weak = getWeakChapters(p);
        const weakHtml =
          weak.length > 0
            ? `<div class="weak-box">
                <strong>⚠️ Bab Perlu Perhatian (&lt;70%):</strong>
                <div class="weak-tags">
                  ${weak.map((w) => `<span class="weak-tag">${esc(w.subjId.toUpperCase())} • ${esc(w.chId)} (${w.avgPct}%)</span>`).join("")}
                </div>
              </div>`
            : "";

        const recent = history
          .slice(0, 6)
          .map(
            (h) => `
          <li>
            <span>${h.subjectId.toUpperCase()} (${h.chapterId}) Set ${h.setNum}</span>
            <strong>${App.Storage.fmtScore(h.score)}/${h.total} (${h.pct}%)</strong>
          </li>`
          )
          .join("");

        return `
          <div class="parent-kid-card">
            <div class="pk-head">
              <div>
                <h3>${p.avatar} ${esc(displayName)}</h3>
                <small>${esc(grade.name)} • ${p.xp || 0} XP</small>
              </div>
              <div class="pk-avg">${history.length ? `${avgPct}% purata` : "Belum ada rekod"}</div>
            </div>
            <div class="pk-edit">
              <input type="text" class="rename-input" data-pid="${p.id}" placeholder="Nama anak (belum diisi)" value="${esc(p.name || "")}" />
              <button class="btn-secondary btn-rename" data-pid="${p.id}">Simpan Nama</button>
            </div>
            ${weakHtml}
            <h4>Aktiviti Terkini:</h4>
            <ul class="pk-history">${recent || "<li>Tiada latihan direkodkan lagi.</li>"}</ul>
          </div>`;
      })
      .join("");

    const linkedName = App.Storage.getLinkedFileName();

    main.innerHTML = `
      <div class="breadcrumb">
        <button class="btn-ghost" id="btn-parent-exit">← Keluar Panel Ibu Bapa</button>
        <strong>👨‍👩‍👧‍👦 Dashboard Ibu Bapa & Sandaran Cloud Drive</strong>
      </div>

      <div class="parent-grid">${kidCards}</div>

      <div class="sync-panel">
        <h3>☁️ Simpan & Segerak Markah (Google Drive / OneDrive / Peranti Lain)</h3>
        <p>Anda boleh pautkan fail JSON terus ke folder <strong>OneDrive</strong> atau <strong>Google Drive</strong> anda di PC supaya setiap markah disimpan automatik, atau eksport/import fail JSON secara manual.</p>
        <div class="sync-actions">
          ${
            App.Storage.supportsCloudFileSync()
              ? `<button class="btn-primary" id="btn-link-cloud">💾 Pautkan Fail Auto-Simpan (${linkedName ? esc(linkedName) : "Pilih Folder Drive"})</button>
                 <button class="btn-secondary" id="btn-load-cloud">📂 Muat Naik Dari Fail Drive</button>`
              : ""
          }
          <button class="btn-secondary" id="btn-export-json">⬇️ Eksport JSON</button>
          <label class="btn-secondary file-label">
            ⬆️ Import JSON
            <input type="file" id="inp-import-json" accept=".json,application/json" hidden />
          </label>
        </div>
        <div class="pin-change-row">
          <label>Tukar PIN Ibu Bapa:</label>
          <input type="password" id="new-pin" maxlength="6" placeholder="4-6 digit" />
          <button class="btn-secondary" id="btn-save-pin">Tukar PIN</button>
        </div>
        <p id="sync-status" class="sync-status"></p>
      </div>
    `;

    document.getElementById("btn-parent-exit").addEventListener("click", () => {
      parentUnlocked = false;
      currentView = "home";
      renderMain();
    });

    main.querySelectorAll(".btn-rename").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pid = btn.getAttribute("data-pid");
        const input = main.querySelector(`.rename-input[data-pid="${pid}"]`);
        if (input) {
          App.Storage.updateProfile(pid, { name: input.value.trim() });
          renderTopBar();
          renderParentDashboard(main);
        }
      });
    });

    const statusEl = document.getElementById("sync-status");

    const linkBtn = document.getElementById("btn-link-cloud");
    if (linkBtn) {
      linkBtn.addEventListener("click", async () => {
        try {
          const name = await App.Storage.linkCloudFileSave();
          statusEl.textContent = `✅ Fail '${name}' dipautkan! Semua markah baharu akan disimpan ke fail ini.`;
          renderParentDashboard(main);
        } catch (err) {
          statusEl.textContent = `ℹ️ ${err.message}`;
        }
      });
    }

    const loadBtn = document.getElementById("btn-load-cloud");
    if (loadBtn) {
      loadBtn.addEventListener("click", async () => {
        try {
          const name = await App.Storage.loadFromCloudFile();
          statusEl.textContent = `✅ Data berjaya dimuatkan daripada '${name}'.`;
          renderTopBar();
          renderParentDashboard(main);
        } catch (err) {
          statusEl.textContent = `ℹ️ ${err.message}`;
        }
      });
    }

    document.getElementById("btn-export-json").addEventListener("click", () => {
      const blob = new Blob([App.Storage.exportJson()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mykids-study-scores-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      statusEl.textContent = "✅ Fail JSON berjaya dimuat turun.";
    });

    document.getElementById("inp-import-json").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          App.Storage.importJson(reader.result);
          statusEl.textContent = "✅ Fail JSON berjaya diimport!";
          renderTopBar();
          renderParentDashboard(main);
        } catch (err) {
          statusEl.textContent = `❌ Ralat import: ${err.message}`;
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("btn-save-pin").addEventListener("click", () => {
      const np = document.getElementById("new-pin").value.trim();
      if (App.Storage.setParentPin(np)) {
        statusEl.textContent = "✅ PIN baharu disimpan.";
      } else {
        statusEl.textContent = "❌ PIN mesti 4 hingga 6 digit nombor.";
      }
    });
  }

  function renderAll() {
    syncViewportMetrics();
    renderTopBar();
    renderMain();
  }

  global.addEventListener("resize", syncViewportMetrics);
  global.addEventListener("orientationchange", syncViewportMetrics);
  if (global.visualViewport) {
    global.visualViewport.addEventListener("resize", syncViewportMetrics);
    global.visualViewport.addEventListener("scroll", syncViewportMetrics);
  }

  document.addEventListener("DOMContentLoaded", renderAll);
})(window);
