/**
 * Main Application Controller (v4.0):
 * - Dedicated Front-Page Account Selector (blank start on new phones, self-service Name + Avatar + Darjah/Tingkatan)
 * - Strictly 1-Account-Per-UI inside kid workspace (grade & theme locked to selected account, explicit Switch Account button)
 * - Winding Adventure Chapter Path (strictly non-repeating Sets 1..K + Flash Revision)
 * - 9 Play Modes (Campuran Pintar + 4 Interactive Touch + 4 Arcade)
 * - Online Family Sync & Jargon-Free Parent Dashboard
 */
(function (global) {
  const App = (global.App = global.App || {});

  let currentView = "accounts"; // 'accounts' | 'home' | 'chapters' | 'sets' | 'shop' | 'playing' | 'results' | 'parent'
  let selectedSubject = null;
  let selectedChapter = null;
  let selectedSetNum = 1;
  let selectedMode = "mix";
  let lastResult = null;
  let parentUnlocked = false;
  let parentUnlockedPin = "";
  let parentAutoSyncStarted = false;
  let parentCloudStatusMsg = "";
  let activeAiPromptTitle = "";
  let activeAiPromptText = "";
  let shopMsg = "";

  // Account selector form state
  let editingAccountId = null; // null | "NEW" | <profileId>
  let draftName = "";
  let draftGradeId = "d6";
  let draftAvatar = "🦊";
  let formErrorMsg = "";
  let pendingInviteCode = "";

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function syncViewportMetrics() {
    const vv = global.visualViewport;
    const h = vv ? Math.round(vv.height) : global.innerHeight;
    const top = vv ? Math.max(0, Math.round(vv.offsetTop)) : 0;
    document.documentElement.style.setProperty("--app-height", `${h}px`);
    document.documentElement.style.setProperty("--vv-top", `${top}px`);
  }

  function syncBodyMode() {
    const profile = App.Storage.getActiveProfile();
    const inKidSpace = !!(profile && currentView !== "accounts" && currentView !== "parent");
    const grade = inKidSpace && App.GRADES ? App.GRADES[profile.gradeId] : null;
    document.body.classList.remove("theme-d6", "theme-t2", "theme-t4");
    if (grade && grade.themeClass) {
      document.body.classList.add(grade.themeClass);
    }
    document.body.classList.toggle("is-playing", currentView === "playing");
    syncViewportMetrics();
    if (currentView === "playing") {
      global.scrollTo(0, 0);
    }
  }

  function getPlayableAvatars(profile) {
    const unlockedPremium = (App.SHOP_ITEMS || [])
      .filter((it) => it.type === "avatar" && profile && profile.unlockedItems && profile.unlockedItems.includes(it.id))
      .map((it) => it.value);
    return Array.from(new Set([...(App.AVATARS || []), ...unlockedPremium]));
  }

  function openAccountEditor(targetId) {
    formErrorMsg = "";
    if (targetId === "NEW") {
      const profiles = App.Storage.getState().profiles || [];
      const usedAvatars = new Set(profiles.map((p) => p.avatar));
      const nextAv = (App.AVATARS || ["🦊"]).find((a) => !usedAvatars.has(a)) || App.AVATARS[0] || "🦊";
      editingAccountId = "NEW";
      draftName = "";
      draftGradeId = "d6";
      draftAvatar = nextAv;
    } else {
      const p = (App.Storage.getState().profiles || []).find((x) => x.id === targetId);
      if (!p) return;
      editingAccountId = p.id;
      draftName = p.name || "";
      draftGradeId = p.gradeId || "d6";
      draftAvatar = p.avatar || "🦊";
    }
    renderMain();
  }

  function renderTopBar() {
    const state = App.Storage.getState();
    const profile = App.Storage.getActiveProfile();
    const muted = App.Sound.isMuted();
    const syncSt = App.CloudSync ? App.CloudSync.getStatus() : { linked: false, code: "" };
    const inKidSpace = !!(profile && currentView !== "accounts" && currentView !== "parent");

    let centerHtml = "";
    let rightControlsHtml = "";

    if (inKidSpace) {
      const grade = App.GRADES[profile.gradeId];
      const displayName = App.Storage.getDisplayName(profile);
      const frameCls = profile.equippedFrame && profile.equippedFrame !== "default" ? `frame-${profile.equippedFrame}` : "";
      centerHtml = `
        <div class="active-account-bar">
          <div class="active-kid-pill pill-${profile.gradeId}">
            <span class="chip-avatar ${frameCls}">${profile.avatar}</span>
            <span class="ak-name">${esc(displayName)}</span>
            <span class="ak-grade">${esc(grade ? grade.name : profile.gradeId)}</span>
          </div>
          <button type="button" class="btn-switch-acc" id="btn-switch-account" title="Tukar ke akaun anak lain">
            <span aria-hidden="true">🔄</span><span class="lbl"> Tukar Akaun</span>
          </button>
        </div>
      `;
      rightControlsHtml = `
        <label class="dlp-toggle" title="Tukar bahasa Matematik & Sains kepada Bahasa Inggeris">
          <input type="checkbox" id="chk-dlp" ${state.dlpEnabled ? "checked" : ""} />
          <span><span aria-hidden="true">🌐</span><span class="lbl"> BM / EN</span></span>
        </label>
        <button class="btn-ghost" id="btn-sound" title="Bunyi" aria-label="Bunyi">${muted ? "🔇" : "🔊"}</button>
        <button class="btn-parent" id="btn-parent-dash" aria-label="Panel Ibu Bapa"><span aria-hidden="true">👨‍👩‍👧‍👦</span><span class="lbl"> Ibu Bapa</span></button>
      `;
    } else {
      centerHtml = syncSt.linked
        ? `<div class="top-sync-pill is-online">🟢 Segerak Online (${esc(syncSt.code)})</div>`
        : pendingInviteCode
        ? `<div class="top-sync-pill is-invite">🔗 Pautan: ${esc(pendingInviteCode)}</div>`
        : "";
      rightControlsHtml = `
        <button class="btn-ghost" id="btn-sound" title="Bunyi">${muted ? "🔇" : "🔊"}</button>
        <button class="btn-parent" id="btn-parent-dash">👨‍👩‍👧‍👦 Ibu Bapa</button>
      `;
    }

    document.getElementById("topbar").classList.toggle("topbar--kid", inKidSpace);
    document.getElementById("topbar").innerHTML = `
      <div class="brand" id="nav-brand">
        <span class="brand-logo">🚀</span>
        <div>
          <div class="brand-title">MyKids Study Arena</div>
          <div class="brand-sub">KSSR & KSSM 2027 • Sifar Ralat</div>
        </div>
      </div>

      ${centerHtml}

      <div class="topbar-actions">${rightControlsHtml}</div>
    `;

    document.getElementById("nav-brand").addEventListener("click", () => {
      App.Sound.click();
      if (inKidSpace) {
        currentView = "home";
      } else {
        editingAccountId = null;
        currentView = "accounts";
      }
      renderAll();
    });

    const switchBtn = document.getElementById("btn-switch-account");
    if (switchBtn) {
      switchBtn.addEventListener("click", () => {
        App.Sound.click();
        selectedSubject = null;
        selectedChapter = null;
        editingAccountId = null;
        shopMsg = "";
        currentView = "accounts";
        renderAll();
      });
    }

    const chkDlp = document.getElementById("chk-dlp");
    if (chkDlp) {
      chkDlp.addEventListener("change", (e) => {
        App.Storage.setDlpEnabled(e.target.checked);
        if (currentView !== "playing") renderMain();
      });
    }

    document.getElementById("btn-sound").addEventListener("click", () => {
      App.Sound.setMuted(!App.Sound.isMuted());
      renderTopBar();
    });

    document.getElementById("btn-parent-dash").addEventListener("click", () => {
      App.Sound.click();
      currentView = "parent";
      renderAll();
    });
  }

  function requestParentPin(message, onOk) {
    const old = document.getElementById("pin-modal");
    if (old) old.parentNode.removeChild(old);
    const wrap = document.createElement("div");
    wrap.id = "pin-modal";
    wrap.className = "pin-modal";
    wrap.innerHTML = `
      <div class="pin-modal-box" role="dialog" aria-modal="true" aria-labelledby="pin-modal-title">
        <h3 id="pin-modal-title">🔒 PIN Ibu Bapa</h3>
        <p>${esc(message)}</p>
        <input type="password" id="pin-modal-input" inputmode="numeric" autocomplete="off" maxlength="12" placeholder="Masukkan PIN" />
        <p class="pin-modal-err hidden" id="pin-modal-err">PIN salah. Cuba lagi.</p>
        <div class="pin-modal-actions">
          <button type="button" class="btn-ghost" id="pin-modal-cancel">Batal</button>
          <button type="button" class="btn-tactile btn-true" id="pin-modal-ok">Sahkan</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    const input = document.getElementById("pin-modal-input");
    const close = () => {
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    };
    const tryOk = () => {
      if (App.Storage.verifyParentPin(input.value.trim())) {
        close();
        onOk();
      } else {
        App.Sound.wrong();
        document.getElementById("pin-modal-err").classList.remove("hidden");
        input.value = "";
        input.focus();
      }
    };
    document.getElementById("pin-modal-ok").addEventListener("click", tryOk);
    document.getElementById("pin-modal-cancel").addEventListener("click", close);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryOk();
      if (e.key === "Escape") close();
    });
    input.focus();
  }

  function renderAccountSelector(main) {
    const state = App.Storage.getState();
    const profiles = state.profiles || [];
    const syncSt = App.CloudSync ? App.CloudSync.getStatus() : { configured: false, linked: false };

    if (profiles.length === 0 && editingAccountId === null) {
      editingAccountId = "NEW";
      draftName = "";
      draftGradeId = "d6";
      draftAvatar = (App.AVATARS && App.AVATARS[0]) || "🦊";
      formErrorMsg = "";
    }

    const inviteBannerHtml =
      pendingInviteCode && !syncSt.linked
        ? `
        <div class="invite-banner">
          <div>
            <strong>🔗 Pautan Keluarga (${esc(pendingInviteCode)}) Dikesan!</strong>
            <span>Sambung telefon ini untuk memuat turun rekod anak-anak secara dalam talian.</span>
          </div>
          <button type="button" class="btn-tactile btn-true btn-sm" id="btn-invite-parent">Sambung Sekarang</button>
        </div>`
        : "";

    const heroHtml = `
      <section class="account-selector-hero">
        <h1>👋 Siapa nak belajar?</h1>
        <p>Pilih profil kamu. Darjah atau Tingkatan disimpan pada setiap profil.</p>
      </section>
      ${inviteBannerHtml}
    `;

    if (editingAccountId !== null) {
      const isNew = editingAccountId === "NEW";
      const editProfile = !isNew ? profiles.find((x) => x.id === editingAccountId) : null;
      const avatars = isNew ? App.AVATARS || ["🦊"] : getPlayableAvatars(editProfile);
      const gradeEntries = Object.values(App.GRADES || {});

      const gradeCardsHtml = gradeEntries
        .map(
          (g) => `
          <button type="button" class="grade-pick-card gcard-${g.id} ${draftGradeId === g.id ? "selected" : ""}" data-grade-id="${g.id}">
            <span class="gcard-badge">${esc(g.badge)}</span>
            <strong>${esc(g.name)}</strong>
            <small>${esc(g.subtitle)}</small>
          </button>`
        )
        .join("");

      const avatarButtonsHtml = avatars
        .map(
          (av) => `
          <button type="button" class="avatar-pick ${av === draftAvatar ? "selected" : ""}" data-avatar="${av}">
            ${av}
          </button>`
        )
        .join("");

      main.innerHTML = `
        ${heroHtml}
        <section class="account-form-card">
          <div class="account-form-head">
            <h2>${isNew ? "✨ Cipta Akaun Anak Baharu" : `✏️ Kemas Kini Akaun (${esc(App.Storage.getDisplayName(editProfile))})`}</h2>
            ${profiles.length > 0 ? `<button type="button" class="btn-ghost btn-sm" id="btn-cancel-acc-form">← Kembali</button>` : ""}
          </div>

          <div class="acc-field-group">
            <label for="acc-name-input"><strong>1. Nama Panggilan Anak:</strong></label>
            <input
              type="text"
              id="acc-name-input"
              maxlength="28"
              placeholder="Contoh: Umar / Aisyah / Sofea"
              value="${esc(draftName)}"
            />
          </div>

          <div class="acc-field-group">
            <label><strong>2. Pilih Darjah atau Tingkatan (Disimpan Pada Akaun Ini):</strong></label>
            <div class="grade-picker-grid">${gradeCardsHtml}</div>
          </div>

          <div class="acc-field-group">
            <label><strong>3. Pilih Avatar Pilihan:</strong></label>
            <div class="avatar-grid">${avatarButtonsHtml}</div>
          </div>

          ${formErrorMsg ? `<p class="form-err">⚠️ ${esc(formErrorMsg)}</p>` : ""}

          <div class="acc-form-actions">
            <button type="button" class="btn-tactile btn-true" id="btn-save-acc-form">
              ${isNew ? "✅ Simpan & Mula Belajar" : "✅ Simpan Perubahan"}
            </button>
            ${
              !isNew
                ? `<button type="button" class="btn-danger-outline" id="btn-delete-acc-form">🗑️ Padam Akaun</button>`
                : ""
            }
          </div>

          ${
            profiles.length === 0
              ? `<div class="acc-empty-sync-note">
                   <span>Sudah ada Kod Keluarga atau fail rekod di telefon lain?</span>
                   <button type="button" class="btn-link" id="btn-empty-open-parent">Buka Panel Ibu Bapa untuk Muat Turun Rekod →</button>
                 </div>`
              : ""
          }
        </section>

        <div class="front-parent-card">
          <div>
            <strong>👨‍👩‍👧‍👦 Panel Ibu Bapa</strong>
            <small>Lihat keputusan, topik lemah, pelan latihan AI & segerak online semua anak.</small>
          </div>
          <button type="button" class="btn-secondary" id="btn-front-parent">Buka Dashboard</button>
        </div>
      `;

      const nameInput = document.getElementById("acc-name-input");
      nameInput.addEventListener("input", (e) => {
        draftName = e.target.value;
      });

      main.querySelectorAll(".grade-pick-card").forEach((btn) => {
        btn.addEventListener("click", () => {
          App.Sound.click();
          draftGradeId = btn.getAttribute("data-grade-id");
          main.querySelectorAll(".grade-pick-card").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      });

      main.querySelectorAll(".avatar-pick").forEach((btn) => {
        btn.addEventListener("click", () => {
          App.Sound.click();
          draftAvatar = btn.getAttribute("data-avatar");
          main.querySelectorAll(".avatar-pick").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      });

      const saveForm = () => {
        const cleanName = nameInput.value.trim();
        draftName = cleanName;
        if (!cleanName) {
          App.Sound.wrong();
          formErrorMsg = "Sila taip nama panggilan anak dahulu sebelum menyimpan.";
          renderMain();
          return;
        }
        const commit = () => {
          App.Sound.unlock();
          if (isNew) {
            App.Storage.createProfile({
              name: cleanName,
              gradeId: draftGradeId,
              avatar: draftAvatar
            });
            editingAccountId = null;
            selectedSubject = null;
            selectedChapter = null;
            currentView = "home";
          } else {
            App.Storage.updateProfile(editingAccountId, {
              name: cleanName,
              gradeId: draftGradeId,
              avatar: draftAvatar
            });
            editingAccountId = null;
          }
          formErrorMsg = "";
          renderAll();
        };
        if (!isNew && editProfile && editProfile.gradeId !== draftGradeId) {
          requestParentPin("Menukar Darjah / Tingkatan memerlukan PIN ibu bapa.", commit);
          return;
        }
        commit();
      };

      document.getElementById("btn-save-acc-form").addEventListener("click", saveForm);
      nameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          saveForm();
        }
      });

      const cancelBtn = document.getElementById("btn-cancel-acc-form");
      if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
          App.Sound.click();
          editingAccountId = null;
          formErrorMsg = "";
          renderMain();
        });
      }

      const delBtn = document.getElementById("btn-delete-acc-form");
      if (delBtn && editProfile) {
        delBtn.addEventListener("click", () => {
          const nm = App.Storage.getDisplayName(editProfile);
          if (global.confirm(`Adakah anda pasti mahu memadam akaun '${nm}' dan semua rekodnya di peranti ini?`)) {
            requestParentPin("Memadam profil memerlukan PIN ibu bapa.", () => {
              App.Storage.deleteProfile(editProfile.id);
              editingAccountId = null;
              formErrorMsg = "";
              renderAll();
            });
          }
        });
      }

      const emptyParentBtn = document.getElementById("btn-empty-open-parent");
      if (emptyParentBtn) {
        emptyParentBtn.addEventListener("click", () => {
          App.Sound.click();
          editingAccountId = null;
          currentView = "parent";
          renderAll();
        });
      }
    } else {
      const accountCardsHtml = profiles
        .map((p) => {
          const g = App.GRADES[p.gradeId] || App.GRADES.d6;
          const name = App.Storage.getDisplayName(p);
          const frameCls = p.equippedFrame && p.equippedFrame !== "default" ? `frame-${p.equippedFrame}` : "";
          return `
            <div class="account-card card-${p.gradeId}" data-pid="${p.id}" role="button" tabindex="0" aria-label="Masuk sebagai ${esc(name)}, ${esc(g.name)}">
              <button type="button" class="account-edit-btn" data-edit-id="${p.id}" title="Edit nama, avatar atau darjah" aria-label="Edit profil ${esc(name)}">✏️</button>
              <div class="acc-avatar-wrap ${frameCls}">${p.avatar || "🦊"}</div>
              <h3 class="acc-name">${esc(name)}</h3>
              <span class="acc-grade-pill pill-${p.gradeId}">${esc(g.name)}</span>
            </div>`;
        })
        .join("");

      main.innerHTML = `
        ${heroHtml}
        <div class="account-grid">
          ${accountCardsHtml}
          <button type="button" class="account-card-add" id="btn-add-account-card">
            <span class="add-plus">＋</span>
            <strong>Tambah Profil</strong>
          </button>
        </div>

        <div class="front-parent-card">
          <div>
            <strong>👨‍👩‍👧‍👦 Panel Ibu Bapa</strong>
            <small>Pantau keputusan semua anak, topik perlu fokus, pelan AI & segerak telefon dalam talian.</small>
          </div>
          <button type="button" class="btn-secondary" id="btn-front-parent">Buka Dashboard</button>
        </div>
      `;

      main.querySelectorAll(".account-card").forEach((card) => {
        card.addEventListener("click", (e) => {
          if (e.target.closest(".account-edit-btn")) return;
          App.Sound.click();
          const pid = card.getAttribute("data-pid");
          App.Storage.setActiveProfile(pid);
          selectedSubject = null;
          selectedChapter = null;
          shopMsg = "";
          currentView = "home";
          renderAll();
        });
      });

      main.querySelectorAll(".account-edit-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          App.Sound.click();
          openAccountEditor(btn.getAttribute("data-edit-id"));
        });
      });

      document.getElementById("btn-add-account-card").addEventListener("click", () => {
        App.Sound.click();
        openAccountEditor("NEW");
      });
    }

    const inviteBtn = document.getElementById("btn-invite-parent");
    if (inviteBtn) {
      inviteBtn.addEventListener("click", () => {
        App.Sound.click();
        editingAccountId = null;
        currentView = "parent";
        renderAll();
      });
    }

    const frontParentBtn = document.getElementById("btn-front-parent");
    if (frontParentBtn) {
      frontParentBtn.addEventListener("click", () => {
        App.Sound.click();
        editingAccountId = null;
        currentView = "parent";
        renderAll();
      });
    }
  }

  function launchSetGame(main, profile, grade, dlp, isRevision = false) {
    const useDlp = !!(dlp && selectedSubject.dlp);
    const questions = isRevision
      ? App.QuestionEngine.getEndlessRevisionSet(
          profile.gradeId,
          selectedSubject.id,
          selectedChapter.id,
          useDlp,
          Math.floor(Date.now() / 1000) % 10000
        )
      : App.QuestionEngine.getSetQuestions(
          profile.gradeId,
          selectedSubject.id,
          selectedChapter.id,
          selectedSetNum,
          useDlp
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
      dlp: useDlp,
      isRevision,
      onExit: () => {
        currentView = "sets";
        renderAll();
      },
      onComplete: (res) => {
        const subjName = useDlp ? selectedSubject.nameEn : selectedSubject.name;
        const chTitle = useDlp ? selectedChapter.titleEn : selectedChapter.title;
        const reward = App.Storage.recordAttempt(profile.id, {
          gradeId: profile.gradeId,
          subjectId: selectedSubject.id,
          subjectName: subjName,
          chapterId: selectedChapter.id,
          chapterTitle: chTitle,
          setNum: selectedSetNum,
          score: res.score,
          total: res.total,
          speedBonus: res.speedBonus || 0,
          maxStreak: res.maxStreak,
          mode: selectedMode,
          answers: res.answers,
          isRevision
        });
        lastResult = {
          ...res,
          earnedXp: reward ? reward.earnedXp : 0,
          earnedCoins: reward ? reward.earnedCoins : 0,
          isRevision
        };
        currentView = "results";
        renderAll();
      }
    });
  }

  function resolveResumeTarget(profile, grade, dlp) {
    if (profile.lastPlayed) {
      const subj = grade.subjects.find((s) => s.id === profile.lastPlayed.subjectId);
      const ch = subj && subj.chapters.find((c) => c.id === profile.lastPlayed.chapterId);
      if (subj && ch) {
        const count = App.QuestionEngine.getChapterSetCount(grade.id, subj.id, ch.id, !!(dlp && subj.dlp));
        const nextSet =
          profile.lastPlayed.setNum < count ? profile.lastPlayed.setNum + 1 : profile.lastPlayed.setNum;
        return { subj, ch, setNum: Math.max(1, Math.min(count, nextSet)) };
      }
    }
    const firstSubj = grade.subjects[0];
    const firstCh = firstSubj.chapters[0];
    return { subj: firstSubj, ch: firstCh, setNum: 1 };
  }

  function renderMain() {
    syncBodyMode();
    const main = document.getElementById("main-content");
    const state = App.Storage.getState();

    if (currentView === "parent") {
      renderParentDashboard(main);
      return;
    }

    const profile = App.Storage.getActiveProfile();
    if (currentView === "accounts" || !profile) {
      currentView = "accounts";
      syncBodyMode();
      renderAccountSelector(main);
      return;
    }

    const grade = App.GRADES[profile.gradeId] || App.GRADES.d6;
    const dlp = state.dlpEnabled;
    const displayName = App.Storage.getDisplayName(profile);

    if (currentView === "home") {
      const totalSetsPlayed = Object.keys(profile.setBest || {}).length;
      const mascotInfo = App.Mascot ? App.Mascot.getInfo(grade.id) : { name: "Koko", tagline: "" };
      const mascotHtml = App.Mascot ? App.Mascot.render(grade.id, "happy", 76) : "";
      const weekDays = App.Storage.getLast7DaysStatus(profile);
      const leaderboard = App.Storage.getSiblingLeaderboard();
      const resumeTarget = resolveResumeTarget(profile, grade, dlp);

      const streakCalHtml = weekDays
        .map(
          (d) => `
          <div class="streak-day ${d.active ? "is-active" : ""} ${d.isToday ? "is-today" : ""}" title="${d.dateKey}">
            <span class="sd-dot">${d.active ? "🔥" : "·"}</span>
            <span class="sd-lbl">${d.dayLabel}</span>
          </div>`
        )
        .join("");

      const leaderboardHtml =
        leaderboard.length >= 2
          ? `
            <section class="leaderboard-card">
              <div class="lb-head">
                <h3>🏆 Carta Mingguan Adik-Beradik</h3>
                <span class="lb-sub">Siapa paling banyak jawapan tepat minggu ini?</span>
              </div>
              <div class="lb-grid">
                ${leaderboard
                  .map((row, i) => {
                    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉";
                    const frameCls = row.equippedFrame && row.equippedFrame !== "default" ? `frame-${row.equippedFrame}` : "";
                    const isMe = row.id === profile.id;
                    return `
                      <div class="lb-row ${isMe ? "lb-me" : ""}">
                        <span class="lb-rank">${medal}</span>
                        <span class="lb-avatar ${frameCls}">${row.avatar}</span>
                        <div class="lb-info">
                          <strong>${esc(row.name)} <small>(${esc(row.gradeName)})</small></strong>
                          <span>🔥 ${row.dailyStreak} hari • ${row.weeklySets} set minggu ini</span>
                        </div>
                        <div class="lb-pts">
                          <strong>${row.weeklyMarks}⭐</strong>
                          <small>${row.xp} XP</small>
                        </div>
                      </div>`;
                  })
                  .join("")}
              </div>
            </section>`
          : "";

      const cards = grade.subjects
        .map((subj) => {
          const chCount = subj.chapters.length;
          const useDlp = !!(dlp && subj.dlp);
          let totalUniqueSets = 0;
          let completed = 0;
          subj.chapters.forEach((ch) => {
            const cSets = App.QuestionEngine.getChapterSetCount(grade.id, subj.id, ch.id, useDlp);
            totalUniqueSets += cSets;
            for (let s = 1; s <= cSets; s++) {
              if (App.Storage.getSetBest(profile, grade.id, subj.id, ch.id, s)) completed++;
            }
          });
          const subjName = useDlp ? subj.nameEn : subj.name;
          const pct = totalUniqueSets > 0 ? Math.min(100, Math.round((completed / totalUniqueSets) * 100)) : 0;
          return `
            <div class="subject-card" data-subj="${subj.id}">
              <div class="subj-icon">${subj.icon}</div>
              <div class="subj-info">
                <h3>${esc(subjName)}</h3>
                <p>${chCount} Bab • ${totalUniqueSets} Set Unik</p>
                <div class="mini-progress">
                  <div class="mini-fill" style="width:${pct}%"></div>
                </div>
                <span class="subj-stat">${completed}/${totalUniqueSets} set selesai</span>
              </div>
            </div>`;
        })
        .join("");

      main.innerHTML = `
        <section class="hero-banner grade-${grade.id}">
          <div class="hero-top-row">
            <div class="hero-mascot-col">${mascotHtml}</div>
            <div class="hero-left">
              <span class="grade-pill">${esc(grade.name)} • ${esc(grade.subtitle)}</span>
              <div class="hero-greet-row">
                <div>
                  <h1>Hai, ${esc(displayName)}! <span class="hero-av frame-${profile.equippedFrame || "default"}">${profile.avatar}</span></h1>
                  <p class="mascot-line"><strong>${esc(mascotInfo.name)}:</strong> "${esc(mascotInfo.tagline)}"</p>
                </div>
                <div class="hero-cta-group">
                  <button type="button" class="btn-tactile btn-true" id="btn-quick-resume">▶ Sambung Latihan</button>
                  <button type="button" class="btn-secondary btn-sm" id="btn-hero-switch-acc">🔄 Tukar Akaun</button>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-bottom-bar">
            <div class="hero-stats">
              <div class="stat-box"><strong>${profile.xp || 0}</strong><span>XP</span></div>
              <div class="stat-box stat-coin"><strong>${profile.coins || 0} 🪙</strong><span>Syiling</span></div>
              <div class="stat-box"><strong>${profile.dailyStreak || 0} 🔥</strong><span>Streak Hari</span></div>
              <div class="stat-box"><strong>${totalSetsPlayed}</strong><span>Set Selesai</span></div>
              <button type="button" class="btn-tactile btn-shop-cta" id="btn-open-shop">🛍️ Kedai Ganjaran</button>
            </div>
            <div class="streak-calendar">
              <span class="sc-title">Kalendar 7 Hari:</span>
              <div class="sc-days">${streakCalHtml}</div>
            </div>
          </div>
        </section>

        ${leaderboardHtml}

        <h2 class="section-title">📚 Semua Subjek (${esc(grade.name)})</h2>
        <div class="subject-grid">${cards}</div>
      `;

      document.getElementById("btn-open-shop").addEventListener("click", () => {
        App.Sound.click();
        shopMsg = "";
        currentView = "shop";
        renderMain();
      });

      document.getElementById("btn-hero-switch-acc").addEventListener("click", () => {
        App.Sound.click();
        selectedSubject = null;
        selectedChapter = null;
        editingAccountId = null;
        currentView = "accounts";
        renderAll();
      });

      document.getElementById("btn-quick-resume").addEventListener("click", () => {
        App.Sound.click();
        selectedSubject = resumeTarget.subj;
        selectedChapter = resumeTarget.ch;
        selectedSetNum = resumeTarget.setNum;
        launchSetGame(main, profile, grade, dlp, false);
      });

      main.querySelectorAll(".subject-card").forEach((card) => {
        card.addEventListener("click", () => {
          App.Sound.click();
          selectedSubject = grade.subjects.find((s) => s.id === card.getAttribute("data-subj"));
          currentView = "chapters";
          renderMain();
        });
      });
    } else if (currentView === "shop") {
      const renderItemShelf = (title, type) => {
        const items = (App.SHOP_ITEMS || []).filter((it) => it.type === type);
        const cardsHtml = items
          .map((it) => {
            const owned = profile.unlockedItems && profile.unlockedItems.includes(it.id);
            const equipped =
              (it.type === "avatar" && profile.avatar === it.value) ||
              (it.type === "frame" && profile.equippedFrame === it.value) ||
              (it.type === "effect" && profile.equippedEffect === it.value);
            const preview =
              it.type === "avatar"
                ? `<div class="shop-preview shop-av">${it.value}</div>`
                : it.type === "frame"
                ? `<div class="shop-preview shop-frame-prev frame-${it.value}">${profile.avatar}</div>`
                : `<div class="shop-preview shop-fx fx-badge-${it.value}">✨</div>`;
            const btnLabel = equipped
              ? "Sedang Dipakai ✅"
              : owned
              ? "Pakai Sekarang"
              : `Buka (${it.price} 🪙)`;
            const btnClass = equipped ? "btn-secondary" : owned ? "btn-tactile btn-true" : "btn-tactile btn-primary-3d";
            return `
              <div class="shop-card ${equipped ? "is-equipped" : owned ? "is-owned" : ""}">
                ${preview}
                <div class="shop-meta">
                  <strong>${esc(it.name)}</strong>
                  <small>${esc(it.desc)}</small>
                </div>
                <button type="button" class="${btnClass} btn-shop-act" data-item-id="${it.id}" ${equipped ? "disabled" : ""}>${btnLabel}</button>
              </div>`;
          })
          .join("");
        return `<h3 class="section-title">${title}</h3><div class="shop-grid">${cardsHtml}</div>`;
      };

      main.innerHTML = `
        <div class="breadcrumb parent-top-bar">
          <div class="breadcrumb-left">
            <button class="btn-ghost" id="btn-back-shop">← Kembali</button>
            <strong>🛍️ Kedai Ganjaran ${esc(displayName)}</strong>
          </div>
          <span class="coin-pill-lg">🪙 ${profile.coins || 0} Syiling</span>
        </div>
        ${shopMsg ? `<div class="shop-alert">${esc(shopMsg)}</div>` : ""}
        ${renderItemShelf("🦸 Avatar Eksklusif", "avatar")}
        ${renderItemShelf("🖼️ Bingkai Juara", "frame")}
        ${renderItemShelf("⚡ Kesan Laser & Jejak Permainan", "effect")}
      `;

      document.getElementById("btn-back-shop").addEventListener("click", () => {
        App.Sound.click();
        currentView = "home";
        renderMain();
      });

      main.querySelectorAll(".btn-shop-act").forEach((btn) => {
        btn.addEventListener("click", () => {
          const itemId = btn.getAttribute("data-item-id");
          const res = App.Storage.buyOrEquipItem(profile.id, itemId);
          if (res.ok) {
            App.Sound.unlock();
            shopMsg =
              res.action === "bought"
                ? `🎉 Tahniah! '${res.item.name}' berjaya dibuka dan terus dipakai!`
                : `✅ '${res.item.name}' kini aktif!`;
            renderTopBar();
          } else {
            App.Sound.wrong();
            shopMsg = `⚠️ ${res.reason}`;
          }
          renderMain();
        });
      });
    } else if (currentView === "chapters" && selectedSubject) {
      const useDlp = !!(dlp && selectedSubject.dlp);
      const subjName = useDlp ? selectedSubject.nameEn : selectedSubject.name;
      const chCards = selectedSubject.chapters
        .map((ch, i) => {
          const chTitle = useDlp ? ch.titleEn : ch.title;
          const setCount = App.QuestionEngine.getChapterSetCount(grade.id, selectedSubject.id, ch.id, useDlp);
          let done = 0;
          let sumPct = 0;
          for (let s = 1; s <= setCount; s++) {
            const rec = App.Storage.getSetBest(profile, grade.id, selectedSubject.id, ch.id, s);
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
                <p>${setCount} Set Unik (${done}/${setCount} selesai)</p>
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
      const useDlp = !!(dlp && selectedSubject.dlp);
      const subjName = useDlp ? selectedSubject.nameEn : selectedSubject.name;
      const chTitle = useDlp ? selectedChapter.titleEn : selectedChapter.title;
      const setCount = App.QuestionEngine.getChapterSetCount(grade.id, selectedSubject.id, selectedChapter.id, useDlp);

      const modePills = App.GAME_MODES.map(
        (m) => `
          <button type="button" class="mode-pill ${selectedMode === m.id ? "active" : ""} cat-${m.category}" data-mode="${m.id}" title="${esc(m.desc)}">
            <span>${m.icon}</span>
            <span>${esc(m.name)}</span>
          </button>`
      ).join("");

      const activeModeInfo = App.GAME_MODES.find((m) => m.id === selectedMode) || App.GAME_MODES[0];

      let nextPlayable = 1;
      for (let s = 1; s <= setCount; s++) {
        if (!App.Storage.getSetBest(profile, grade.id, selectedSubject.id, selectedChapter.id, s)) {
          nextPlayable = s;
          break;
        }
        nextPlayable = setCount;
      }

      const pathNodes = Array.from({ length: setCount }, (_, i) => i + 1)
        .map((s, idx) => {
          const rec = App.Storage.getSetBest(profile, grade.id, selectedSubject.id, selectedChapter.id, s);
          const pct = rec ? Math.round((rec.bestScore / rec.total) * 100) : null;
          const stars = pct === null ? "" : pct >= 90 ? "★★★" : pct >= 60 ? "★★☆" : "★☆☆";
          const isCurrent = s === nextPlayable;
          const isBossNode = s === setCount;
          const offsetX = Math.round(Math.sin(idx * 0.95) * 44);
          return `
            <div class="path-node-wrap" style="transform: translateX(${offsetX}px)">
              ${isCurrent ? `<div class="path-bubble">MULA ▶</div>` : ""}
              <button type="button" class="path-node ${rec ? "is-done" : "is-open"} ${isCurrent ? "is-current" : ""} ${isBossNode ? "is-boss" : ""}" data-set="${s}">
                <span class="node-badge">${isBossNode ? "👑" : s}</span>
                <span class="node-label">Set ${s}</span>
                ${stars ? `<span class="node-stars">${stars}</span>` : ""}
              </button>
              ${rec ? `<div class="node-sub-score">${App.Storage.fmtScore(rec.bestScore)}/${rec.total}${rec.bestBonus ? ` ⚡+${rec.bestBonus}` : ""}</div>` : ""}
            </div>`;
        })
        .join("");

      main.innerHTML = `
        <div class="breadcrumb">
          <button class="btn-ghost" id="btn-back-subj">${selectedSubject.icon} ${esc(subjName)}</button>
          <span>/</span>
          <strong>${esc(chTitle)}</strong>
        </div>

        <div class="mode-picker-box">
          <div class="mode-picker-head">
            <h3>🎮 Pilih Mod Permainan (9 Pilihan)</h3>
            <small>${esc(activeModeInfo.desc)}</small>
          </div>
          <div class="mode-pill-strip">${modePills}</div>
        </div>

        <div class="adventure-path-box">
          <div class="path-head">
            <h3>🗺️ Laluan Cabaran (${setCount} Set Unik • Tiada Soalan Berulang)</h3>
            <span class="path-tip">5 soalan pantas setiap set</span>
          </div>
          <div class="path-spine">
            ${pathNodes}
          </div>
          <div class="flash-revision-bar">
            <button type="button" class="btn-tactile btn-flash" id="btn-flash-revision">
              ⚡ Latihan Kilat Campuran (Ulang Kaji Rawak Tanpa Had)
            </button>
          </div>
        </div>
      `;

      document.getElementById("btn-back-subj").addEventListener("click", () => {
        App.Sound.click();
        currentView = "chapters";
        renderMain();
      });

      main.querySelectorAll(".mode-pill").forEach((m) => {
        m.addEventListener("click", () => {
          App.Sound.click();
          selectedMode = m.getAttribute("data-mode");
          renderMain();
        });
      });

      main.querySelectorAll(".path-node").forEach((btn) => {
        btn.addEventListener("click", () => {
          App.Sound.click();
          selectedSetNum = Number(btn.getAttribute("data-set"));
          launchSetGame(main, profile, grade, dlp, false);
        });
      });

      document.getElementById("btn-flash-revision").addEventListener("click", () => {
        App.Sound.click();
        launchSetGame(main, profile, grade, dlp, true);
      });
    } else if (currentView === "results" && lastResult) {
      const { score, total, speedBonus = 0, maxStreak, answers, pct, earnedXp, earnedCoins = 0, isRevision } = lastResult;
      const rank = pct >= 90 ? "S" : pct >= 80 ? "A" : pct >= 65 ? "B" : "C";
      const useDlp = !!(dlp && selectedSubject.dlp);
      const chTitle = useDlp ? selectedChapter.titleEn : selectedChapter.title;
      const setCount = App.QuestionEngine.getChapterSetCount(grade.id, selectedSubject.id, selectedChapter.id, useDlp);
      const hasNextSet = !isRevision && selectedSetNum < setCount;
      const mascotSvg = App.Mascot ? App.Mascot.render(grade.id, pct >= 60 ? "celebrate" : "encouraging", 82) : "";

      const confettiHtml =
        pct >= 70
          ? `<div class="confetti-burst" aria-hidden="true">${Array.from({ length: 16 }, (_, i) => `<span class="confetti-dot c-${i % 4}" style="--i:${i}"></span>`).join("")}</div>`
          : "";

      const studyTip = App.GameUtil_getStudyGuidance
        ? App.GameUtil_getStudyGuidance(selectedSubject.id, chTitle)
        : "";

      const reviewHtml = answers
        .map((a, i) => {
          const userAns = a.chosenText !== undefined ? a.chosenText : a.qObj.options[a.selectedIndex] || "-";
          const trueAns = a.correctText !== undefined ? a.correctText : a.qObj.options[a.qObj.correctIndex];
          const ptsLabel = a.isCorrect
            ? a.gotBonus
              ? `✅ Betul (+1) • ⚡ Bonus Pantas (${a.elapsedSec.toFixed(1)}s)`
              : `✅ Betul (+1) • ⏱️ ${a.elapsedSec.toFixed(1)}s`
            : `❌ Salah (${a.elapsedSec.toFixed(1)}s)`;
          return `
            <div class="review-item ${a.isCorrect ? "rev-ok" : "rev-bad"}">
              <div class="rev-q"><strong>S${i + 1}:</strong> ${esc(a.qObj.q)}</div>
              <div class="rev-ans">
                <span>Jawapan anda: <strong>${esc(userAns)}</strong> (${ptsLabel})</span>
                ${!a.isCorrect ? `<span>Jawapan tepat: <strong class="true-ans">${esc(trueAns)}</strong></span>` : ""}
              </div>
              <div class="rev-exp">💡 ${esc(a.qObj.explanation)}</div>
              ${!a.isCorrect && studyTip ? `<div class="rev-tip">🎯 <strong>Cara faham:</strong> ${esc(studyTip)}</div>` : ""}
            </div>`;
        })
        .join("");

      main.innerHTML = `
        <div class="result-card">
          ${confettiHtml}
          <div class="result-top">
            ${mascotSvg}
            <span class="rank-badge rank-${rank}">Gred ${rank}</span>
          </div>
          <h2>Markah Ketepatan: ${App.Storage.fmtScore(score)} / ${total} (${pct}%)</h2>
          <div class="result-bonus-row">
            <span class="result-bonus-badge">⚡ Bonus Pantas (≤10s): +${speedBonus}</span>
            <span class="result-coin-badge">+${earnedCoins} 🪙 Syiling</span>
            <span class="result-xp-badge">+${earnedXp} XP • 🔥 ${maxStreak}</span>
          </div>
          <div class="result-actions">
            ${
              hasNextSet
                ? `<button class="btn-tactile btn-true" id="btn-next-set">▶ Terus ke Set ${selectedSetNum + 1}</button>`
                : ""
            }
            <button class="btn-tactile btn-primary-3d" id="btn-retry-set">🔄 Main Semula</button>
            <button class="btn-secondary" id="btn-other-sets">🗺️ Peta Laluan</button>
          </div>
        </div>

        <h3 class="section-title">📋 Semakan Jawapan & Penerangan</h3>
        <div class="review-list">${reviewHtml}</div>
      `;

      const nextBtn = document.getElementById("btn-next-set");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          App.Sound.click();
          selectedSetNum = Math.min(setCount, selectedSetNum + 1);
          launchSetGame(main, profile, grade, dlp, false);
        });
      }
      document.getElementById("btn-retry-set").addEventListener("click", () => {
        App.Sound.click();
        launchSetGame(main, profile, grade, dlp, !!isRevision);
      });
      document.getElementById("btn-other-sets").addEventListener("click", () => {
        App.Sound.click();
        currentView = "sets";
        renderMain();
      });
    }
  }

  function renderParentDashboard(main) {
    const state = App.Storage.getState();

    if (!parentUnlocked) {
      main.innerHTML = `
        <div class="pin-box">
          <h2>🔒 Panel Ibu Bapa</h2>
          <p>Masukkan kod PIN 4-digit untuk melihat prestasi semua anak secara dalam talian, topik perlu fokus, pelan latihan AI & tetapan keluarga. (Kod lalai: <code>1234</code>)</p>
          ${pendingInviteCode ? `<p class="pin-invite-note">🔗 Kod Keluarga <strong>${esc(pendingInviteCode)}</strong> sedia disambungkan selepas PIN dibuka.</p>` : ""}
          <div class="pin-row">
            <input type="password" id="pin-input" maxlength="6" placeholder="PIN (1234)" />
            <button class="btn-tactile btn-primary-3d" id="btn-unlock-pin">Buka</button>
          </div>
          <p class="pin-err hidden" id="pin-err">Kod PIN tidak tepat. Sila cuba lagi.</p>
          <button class="btn-ghost" id="btn-back-kids">← Kembali</button>
        </div>
      `;
      const pinInput = document.getElementById("pin-input");
      const tryUnlock = () => {
        const val = pinInput.value.trim();
        if (App.Storage.verifyParentPin(val)) {
          parentUnlocked = true;
          parentUnlockedPin = val;
          parentAutoSyncStarted = false;
          App.Sound.unlock();
          renderParentDashboard(main);
        } else {
          App.Sound.wrong();
          document.getElementById("pin-err").classList.remove("hidden");
        }
      };
      document.getElementById("btn-back-kids").addEventListener("click", () => {
        currentView = App.Storage.getActiveProfile() ? "home" : "accounts";
        renderAll();
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

    const syncSt = App.CloudSync ? App.CloudSync.getStatus() : { configured: false, linked: false };
    if (syncSt.configured && syncSt.linked && !parentAutoSyncStarted) {
      parentAutoSyncStarted = true;
      App.CloudSync.syncNow().then((res) => {
        if (currentView !== "parent") return;
        if (res.ok) {
          parentCloudStatusMsg = `✅ Rekod terkini disegerakkan dari pelayan online (${App.Storage.fmtDate(res.updatedAt)}).`;
        } else if (res.error) {
          parentCloudStatusMsg = `⚠️ Gagal muat turun online buat masa ini (${res.error}). Memaparkan rekod peranti.`;
        }
        renderTopBar();
        renderParentDashboard(main);
      });
    }

    const profiles = state.profiles || [];
    let totalSetsAll = 0;
    let totalPctSum = 0;
    let pctKidCount = 0;
    let weakTopicTotal = 0;

    const kidCards =
      profiles.length > 0
        ? profiles
            .map((p) => {
              const grade = App.GRADES[p.gradeId] || App.GRADES.d6;
              const displayName = App.Storage.getDisplayName(p);
              const history = p.history || [];
              const report = App.Storage.getFocusReport(p);
              totalSetsAll += report.totalAttempts;
              if (history.length > 0) {
                totalPctSum += report.avgPct;
                pctKidCount++;
              }
              weakTopicTotal += report.weakChapters.length;

              const gradeSelectOpts = Object.values(App.GRADES || {})
                .map((g) => `<option value="${g.id}" ${p.gradeId === g.id ? "selected" : ""}>${esc(g.name)}</option>`)
                .join("");

              const wk = App.Weakness.analyse(p);
              const statusDot = { lemah: "🔴", sederhana: "🟡", kuat: "🟢", baharu: "⚪" };
              const statusCls = { lemah: "tl-red", sederhana: "tl-amber", kuat: "tl-green", baharu: "tl-amber" };
              const trendTxt = { naik: " ⬆️ naik", turun: " ⬇️ turun", tetap: "" };
              const mistakeTxt = (m) => {
                const parts = [];
                if (m.concept) parts.push(`${m.concept} kemungkinan salah faham konsep`);
                if (m.careless) parts.push(`${m.careless} kemungkinan cuai`);
                if (m.timeout) parts.push(`${m.timeout} tidak sempat jawab`);
                if (m.slow) parts.push(`${m.slow} jawab perlahan tetapi salah`);
                return parts.join(", ");
              };
              const chapterStatusHtml =
                wk.chapters.length > 0
                  ? `<div class="weak-box">
                      <strong>🚦 Kekuatan & Kelemahan Mengikut Subjek:</strong>
                      ${wk.subjects
                        .map(
                          (sub) => `
                        <div class="wk-subject">
                          <div class="wk-subject-head">
                            <span>${statusDot[sub.status]} ${esc(sub.subjectName || sub.subjectId)}</span>
                            <strong>${sub.mastery}%</strong>
                          </div>
                          <div class="wk-bar"><span class="${statusCls[sub.status]}" style="width:${Math.max(3, sub.mastery)}%"></span></div>
                          ${sub.chapters
                            .filter((c) => c.status === "lemah")
                            .slice(0, 3)
                            .map(
                              (c) => `
                            <div class="wk-chapter">
                              <div>🔴 <strong>${esc(c.chapterTitle)}</strong> — ${c.mastery}%${c.provisional ? " (sementara)" : ""}${trendTxt[c.trend] || ""}</div>
                              ${mistakeTxt(c.mistakes) ? `<small>${esc(mistakeTxt(c.mistakes))}</small>` : ""}
                            </div>`
                            )
                            .join("")}
                        </div>`
                        )
                        .join("")}
                      <small class="wk-note">Lemah: bawah ${App.Weakness.WEAK_BELOW}%. Kuat: ${App.Weakness.STRONG_AT}% ke atas. Berdasarkan 3 percubaan terkini setiap bab. Jenis kesilapan adalah anggaran, bukan kepastian.</small>
                    </div>`
                  : `<div class="weak-box weak-clear">ℹ️ Anak belum mencuba latihan lagi.</div>`;

              const mistakesHtml =
                report.recentMistakes.length > 0
                  ? `<div class="mistake-log">
                      ${report.recentMistakes
                        .slice(0, 5)
                        .map(
                          (m) => `
                        <div class="mistake-item">
                          <div class="m-meta">${App.Storage.fmtDate(m.ts)} • ${esc(m.subjectName)} (${esc(m.chapterTitle)})</div>
                          <div class="m-q">${esc(m.q)}</div>
                          <div class="m-ans">❌ <span>${esc(m.chosen)}</span> → ✅ <strong>${esc(m.correct)}</strong></div>
                        </div>`
                        )
                        .join("")}
                    </div>`
                  : `<p class="empty-note">Tiada kesilapan direkodkan lagi.</p>`;

              const recent = history
                .slice(0, 4)
                .map(
                  (h) => `
                <li>
                  <span>${App.Storage.fmtDate(h.ts)} • ${esc((h.subjectName || h.subjectId).toUpperCase())} Set ${h.setNum}</span>
                  <strong>${App.Storage.fmtScore(h.score)}/${h.total} (${h.pct}%)${h.speedBonus ? ` ⚡+${h.speedBonus}` : ""}</strong>
                </li>`
                )
                .join("");

              return `
                <div class="parent-kid-card">
                  <div class="pk-head">
                    <div>
                      <h3>${p.avatar} ${esc(displayName)}</h3>
                      <small>${esc(grade.name)} • 🔥 ${p.dailyStreak || 0} hari • ⚡ Bonus Pantas: ${report.totalSpeedBonus}</small>
                    </div>
                    <div class="pk-avg">${history.length ? `${report.avgPct}% purata` : "Belum ada rekod"}</div>
                  </div>
                  <div class="pk-edit">
                    <input type="text" class="rename-input" data-pid="${p.id}" placeholder="Nama anak" value="${esc(p.name || "")}" />
                    <select class="grade-select" data-pid="${p.id}">${gradeSelectOpts}</select>
                    <button class="btn-secondary btn-rename" data-pid="${p.id}">Simpan</button>
                  </div>
                  ${chapterStatusHtml}
                  <h4>📝 Kesilapan Terkini Untuk Dibimbing:</h4>
                  ${mistakesHtml}
                  <h4>Aktiviti Terkini:</h4>
                  <ul class="pk-history">${recent || "<li>Tiada latihan direkodkan lagi.</li>"}</ul>
                  <button type="button" class="btn-tactile btn-primary-3d btn-sm btn-ai-kid" data-pid="${p.id}">✨ Cipta Pelan Latihan AI (${esc(displayName)})</button>
                </div>`;
            })
            .join("")
        : `
          <div class="parent-empty-card">
            <h3>👶 Belum Ada Akaun Anak Didaftarkan</h3>
            <p>Pergi ke muka depan untuk menekan <strong>'+ Tambah Akaun Anak'</strong>, atau sambungkan <strong>Kod Keluarga Online</strong> di bawah untuk memuat turun rekod anak daripada telefon lain.</p>
          </div>`;

    const overallAvg = pctKidCount > 0 ? Math.round(totalPctSum / pctKidCount) : 0;
    const overviewHtml = `
      <div class="parent-overview-strip">
        <div class="pov-box"><strong>${profiles.length}</strong><span>Akaun Anak</span></div>
        <div class="pov-box"><strong>${totalSetsAll}</strong><span>Set Selesai</span></div>
        <div class="pov-box"><strong>${pctKidCount > 0 ? `${overallAvg}%` : "-"}</strong><span>Purata Ketepatan</span></div>
        <div class="pov-box"><strong>${weakTopicTotal}</strong><span>Topik Perlu Fokus</span></div>
      </div>
    `;

    const currentApiUrl = App.getCloudApiUrl ? App.getCloudApiUrl() : "";
    let onlineCardInner = "";
    if (syncSt.configured && syncSt.linked) {
      onlineCardInner = `
        <div class="cloud-linked-row">
          <div>
            <span class="cloud-status-pill is-online">🟢 Disambung Online</span>
            <div class="family-code-display">Kod Keluarga: <strong>${esc(syncSt.code)}</strong></div>
            <small>Segerak terakhir: ${syncSt.lastSyncedAt ? App.Storage.fmtDate(syncSt.lastSyncedAt) : "Sedia"}${syncSt.pendingSync ? " • Menunggu segerak..." : ""}</small>
          </div>
          <div class="cloud-btn-col">
            <button type="button" class="btn-tactile btn-true btn-sm" id="btn-cloud-sync-now">🔄 Muat Turun & Segerak Sekarang</button>
            <button type="button" class="btn-tactile btn-primary-3d btn-sm" id="btn-copy-family-link">📲 Salin / Kongsi Pautan Keluarga</button>
            <button type="button" class="btn-ghost btn-sm" id="btn-cloud-disconnect">Putuskan Sambungan</button>
          </div>
        </div>`;
    } else if (syncSt.configured) {
      onlineCardInner = `
        <div class="cloud-setup-grid">
          <div class="cloud-option-box">
            <strong>Telefon Pertama / Akaun Ibu Bapa Utama</strong>
            <p>Cipta Kod Keluarga baharu supaya semua markah dan kelemahan anak dari mana-mana telefon dikumpul secara online.</p>
            <button type="button" class="btn-tactile btn-true btn-sm" id="btn-cloud-create">✨ Cipta Kod Keluarga Online</button>
          </div>
          <div class="cloud-option-box">
            <strong>Sambung Ke Keluarga Sedia Ada</strong>
            <p>Masukkan Kod Keluarga daripada telefon ibu bapa / pautan WhatsApp untuk berkongsi rekod yang sama.</p>
            <div class="cloud-join-row">
              <input type="text" id="inp-family-code" maxlength="10" placeholder="Kod (cth: K7M4P9)" value="${esc(pendingInviteCode)}" />
              <input type="password" id="inp-family-pin" maxlength="6" placeholder="PIN Keluarga" value="${esc(parentUnlockedPin || "")}" />
              <button type="button" class="btn-tactile btn-primary-3d btn-sm" id="btn-cloud-join">🔗 Sambung</button>
            </div>
          </div>
        </div>`;
    } else {
      onlineCardInner = `
        <div class="cloud-not-configured">
          <p>Pelayan pantauan online peribadi belum disambungkan ke halaman ini lagi. Anda masih boleh menggunakan butang <strong>Simpan / Gabung Rekod</strong> di bawah pada bila-bila masa, atau masukkan pautan pelayan Cloudflare peribadi anda jika sudah dilancarkan:</p>
          <div class="cloud-join-row">
            <input type="url" id="inp-cloud-url" placeholder="https://mykids-study-arena-api.xxx.workers.dev" value="${esc(currentApiUrl)}" />
            <button type="button" class="btn-secondary btn-sm" id="btn-save-cloud-url">Simpan Pautan Pelayan</button>
          </div>
        </div>`;
    }

    const linkedName = App.Storage.getLinkedFileName();

    const aiPanelHtml = activeAiPromptText
      ? `
        <div class="ai-prompt-panel" id="ai-prompt-panel">
          <div class="ai-panel-head">
            <h3>✨ ${esc(activeAiPromptTitle)}</h3>
            <button type="button" class="btn-ghost btn-sm" id="btn-close-ai-panel">✕ Tutup</button>
          </div>
          <p class="ai-panel-desc">Salin arahan di bawah dan tampal ke dalam pembantu AI pilihan anda (contoh: ChatGPT, Gemini atau Claude) untuk membina permainan pemulihan khusus bagi kelemahan anak:</p>
          <textarea class="ai-prompt-textarea" id="ai-prompt-textarea" rows="10" readonly>${esc(activeAiPromptText)}</textarea>
          <div class="sync-actions">
            <button type="button" class="btn-tactile btn-true" id="btn-copy-ai-prompt">📋 Salin Arahan</button>
            <button type="button" class="btn-secondary" id="btn-dl-ai-prompt">📤 Kongsi / Simpan Nota</button>
            <span class="copy-msg" id="ai-copy-msg"></span>
          </div>
        </div>`
      : "";

    main.innerHTML = `
      <div class="breadcrumb parent-top-bar">
        <div class="breadcrumb-left">
          <button class="btn-ghost" id="btn-parent-exit">← Keluar Panel Ibu Bapa</button>
          <strong>👨‍👩‍👧‍👦 Dashboard Ibu Bapa & Penjana Pelan Latihan</strong>
        </div>
        <button type="button" class="btn-tactile btn-primary-3d btn-sm" id="btn-ai-all-kids" ${profiles.length === 0 ? "disabled" : ""}>✨ Cipta Pelan Latihan (Semua Anak: ${profiles.length})</button>
      </div>

      ${overviewHtml}

      <div class="sync-panel cloud-sync-card">
        <h3>☁️ Pantauan Online Semua Anak (Merentas Telefon)</h3>
        ${onlineCardInner}
        ${parentCloudStatusMsg ? `<p class="sync-status">${esc(parentCloudStatusMsg)}</p>` : ""}
      </div>

      ${aiPanelHtml}

      <div class="parent-grid">${kidCards}</div>

      <div class="sync-panel">
        <h3>💾 Simpan & Gabung Rekod Secara Manual (Sandaran Drive / WhatsApp)</h3>
        <p>Tekan satu butang untuk simpan salinan rekod ke <strong>Google Drive, OneDrive atau WhatsApp</strong>. Apabila memulihkan rekod dari telefon anak lain, sistem akan <strong>menggabung markah secara automatik</strong> tanpa memadam rekod anak lain.</p>
        <div class="backup-big-actions">
          <button type="button" class="btn-tactile btn-true backup-hero-btn" id="btn-save-backup">
            <span class="bk-ico">💾</span>
            <span class="bk-txt">
              <strong>Simpan Rekod (Ke Drive / WhatsApp)</strong>
              <small>Muat turun atau kongsi salinan keselamatan semua markah anak</small>
            </span>
          </button>
          <label class="btn-tactile btn-primary-3d backup-hero-btn file-label">
            <span class="bk-ico">📂</span>
            <span class="bk-txt">
              <strong>Pulihkan & Gabung Rekod</strong>
              <small>Pilih fail rekod dari telefon / Google Drive untuk digabung</small>
            </span>
            <input type="file" id="inp-restore-backup" accept=".json,application/json" hidden />
          </label>
        </div>

        ${
          App.Storage.supportsCloudFileSync()
            ? `<div class="pc-sync-row">
                 <button type="button" class="btn-secondary btn-sm" id="btn-link-cloud">💻 Pautkan Folder Auto-Simpan PC (${linkedName ? esc(linkedName) : "Pilih Folder Drive"})</button>
                 <button type="button" class="btn-secondary btn-sm" id="btn-load-cloud">🔄 Gabung Dari Fail PC</button>
               </div>`
            : ""
        }

        <div class="pin-change-row">
          <label>Tukar Kod PIN Ibu Bapa:</label>
          <input type="password" id="new-pin" maxlength="6" placeholder="4-6 digit" />
          <button class="btn-secondary" id="btn-save-pin">Simpan PIN</button>
        </div>
        <p id="sync-status" class="sync-status"></p>
      </div>
    `;

    document.getElementById("btn-parent-exit").addEventListener("click", () => {
      parentUnlocked = false;
      parentUnlockedPin = "";
      parentAutoSyncStarted = false;
      activeAiPromptTitle = "";
      activeAiPromptText = "";
      currentView = App.Storage.getActiveProfile() ? "home" : "accounts";
      renderAll();
    });

    const aiAllBtn = document.getElementById("btn-ai-all-kids");
    if (aiAllBtn && profiles.length > 0) {
      aiAllBtn.addEventListener("click", () => {
        App.Sound.click();
        activeAiPromptTitle = `Pelan Latihan AI — Semua Anak (${profiles.length})`;
        activeAiPromptText = App.Storage.buildAiPromptAllKids();
        renderParentDashboard(main);
      });
    }

    main.querySelectorAll(".btn-ai-kid").forEach((btn) => {
      btn.addEventListener("click", () => {
        App.Sound.click();
        const pid = btn.getAttribute("data-pid");
        const kid = state.profiles.find((x) => x.id === pid);
        if (kid) {
          activeAiPromptTitle = `Pelan Latihan AI — ${App.Storage.getDisplayName(kid)}`;
          activeAiPromptText = App.Storage.buildAiPromptForKid(kid);
          renderParentDashboard(main);
          const panel = document.getElementById("ai-prompt-panel");
          if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Cloud sync actions
    const saveUrlBtn = document.getElementById("btn-save-cloud-url");
    if (saveUrlBtn) {
      saveUrlBtn.addEventListener("click", () => {
        const val = document.getElementById("inp-cloud-url").value.trim();
        App.setCloudApiUrl(val);
        parentCloudStatusMsg = val ? `✅ Pautan pelayan disimpan: ${val}` : "ℹ️ Pautan pelayan dikosongkan.";
        renderParentDashboard(main);
      });
    }

    const createCloudBtn = document.getElementById("btn-cloud-create");
    if (createCloudBtn) {
      createCloudBtn.addEventListener("click", async () => {
        createCloudBtn.disabled = true;
        parentCloudStatusMsg = "⏳ Mencipta Kod Keluarga online...";
        renderParentDashboard(main);
        try {
          const res = await App.CloudSync.createFamily(parentUnlockedPin || state.parentPin);
          parentCloudStatusMsg = `✅ Berjaya! Kod Keluarga anda ialah ${res.familyCode}. Kongsikan kod ini ke telefon lain untuk pantauan online.`;
        } catch (err) {
          parentCloudStatusMsg = `❌ ${err.message}`;
        }
        renderTopBar();
        renderParentDashboard(main);
      });
    }

    const joinCloudBtn = document.getElementById("btn-cloud-join");
    if (joinCloudBtn) {
      joinCloudBtn.addEventListener("click", async () => {
        const code = document.getElementById("inp-family-code").value.trim().toUpperCase();
        const pin = document.getElementById("inp-family-pin").value.trim() || parentUnlockedPin || state.parentPin;
        if (!code) {
          parentCloudStatusMsg = "❌ Sila masukkan Kod Keluarga.";
          renderParentDashboard(main);
          return;
        }
        joinCloudBtn.disabled = true;
        try {
          const res = await App.CloudSync.joinFamily(code, pin);
          pendingInviteCode = "";
          parentCloudStatusMsg = `✅ Disambung ke keluarga ${res.familyCode}! (+${res.addedProfiles || 0} akaun anak, +${res.addedHistory || 0} rekod latihan digabung.)`;
        } catch (err) {
          parentCloudStatusMsg = `❌ ${err.message}`;
        }
        renderTopBar();
        renderParentDashboard(main);
      });
    }

    const syncNowBtn = document.getElementById("btn-cloud-sync-now");
    if (syncNowBtn) {
      syncNowBtn.addEventListener("click", async () => {
        syncNowBtn.disabled = true;
        const res = await App.CloudSync.syncNow();
        parentCloudStatusMsg = res.ok
          ? `✅ Rekod disegerakkan! (+${res.addedProfiles || 0} akaun baharu, +${res.addedHistory || 0} rekod latihan, ${res.updatedSets || 0} set dikemas kini.)`
          : `❌ ${res.error || "Gagal menyegerak buat masa ini."}`;
        renderTopBar();
        renderParentDashboard(main);
      });
    }

    const shareLinkBtn = document.getElementById("btn-copy-family-link");
    if (shareLinkBtn) {
      shareLinkBtn.addEventListener("click", async () => {
        const link = `${global.location.origin}${global.location.pathname}?family=${syncSt.code}`;
        try {
          if (navigator.share) {
            await navigator.share({
              title: "Pautan Keluarga MyKids Study Arena",
              text: `Buka pautan ini dan masukkan PIN Ibu Bapa untuk menyambung telefon anak (Kod Keluarga: ${syncSt.code})`,
              url: link
            });
            parentCloudStatusMsg = `✅ Pautan keluarga (${syncSt.code}) berjaya dikongsi!`;
            renderParentDashboard(main);
            return;
          }
        } catch (err) {
          if (err && err.name === "AbortError") return;
        }
        try {
          await navigator.clipboard.writeText(link);
          parentCloudStatusMsg = `✅ Pautan keluarga disalin: ${link}`;
        } catch (e) {
          parentCloudStatusMsg = `ℹ️ Kod Keluarga: ${syncSt.code} — Pautan: ${link}`;
        }
        renderParentDashboard(main);
      });
    }

    const disconnectBtn = document.getElementById("btn-cloud-disconnect");
    if (disconnectBtn) {
      disconnectBtn.addEventListener("click", () => {
        if (global.confirm("Putuskan telefon ini daripada segerak keluarga dalam talian? Rekod tempatan dalam peranti tidak akan dipadam.")) {
          App.CloudSync.disconnect();
          parentCloudStatusMsg = "ℹ️ Sambungan online diputuskan. Rekod peranti kekal selamat.";
          renderTopBar();
          renderParentDashboard(main);
        }
      });
    }

    const closeAiBtn = document.getElementById("btn-close-ai-panel");
    if (closeAiBtn) {
      closeAiBtn.addEventListener("click", () => {
        activeAiPromptTitle = "";
        activeAiPromptText = "";
        renderParentDashboard(main);
      });
    }

    const copyAiBtn = document.getElementById("btn-copy-ai-prompt");
    if (copyAiBtn) {
      copyAiBtn.addEventListener("click", async () => {
        const ta = document.getElementById("ai-prompt-textarea");
        const msg = document.getElementById("ai-copy-msg");
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(ta.value);
          } else {
            ta.select();
            document.execCommand("copy");
          }
          msg.textContent = "✅ Arahan berjaya disalin!";
        } catch (err) {
          ta.select();
          document.execCommand("copy");
          msg.textContent = "✅ Arahan dipilih — tekan Salin jika perlu.";
        }
      });
    }

    const dlAiBtn = document.getElementById("btn-dl-ai-prompt");
    if (dlAiBtn) {
      dlAiBtn.addEventListener("click", async () => {
        if (navigator.share) {
          try {
            await navigator.share({ title: activeAiPromptTitle, text: activeAiPromptText });
            return;
          } catch (e) {
            if (e && e.name === "AbortError") return;
          }
        }
        const stamp = App.Storage.fmtDate(new Date().toISOString()).replace(/\//g, "");
        const blob = new Blob([activeAiPromptText], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Pelan-Latihan-MyKids-${stamp}.txt`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    main.querySelectorAll(".btn-rename").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pid = btn.getAttribute("data-pid");
        const input = main.querySelector(`.rename-input[data-pid="${pid}"]`);
        const gSel = main.querySelector(`.grade-select[data-pid="${pid}"]`);
        if (input) {
          App.Storage.updateProfile(pid, {
            name: input.value.trim(),
            gradeId: gSel ? gSel.value : undefined
          });
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
          statusEl.textContent = `✅ Fail '${name}' dipautkan! Semua markah baharu akan disimpan automatik ke fail ini.`;
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
          const res = await App.Storage.loadFromCloudFile();
          statusEl.textContent = `✅ Rekod daripada '${res.fileName}' berjaya digabung! (+${res.addedProfiles || 0} akaun, +${res.addedHistory} latihan baharu, ${res.updatedSets} set dikemas kini.)`;
          renderTopBar();
          renderParentDashboard(main);
        } catch (err) {
          statusEl.textContent = `ℹ️ ${err.message}`;
        }
      });
    }

    document.getElementById("btn-save-backup").addEventListener("click", async () => {
      const content = App.Storage.exportJson();
      const fileName = App.Storage.exportBackupFileName();
      try {
        if (typeof File === "function" && navigator.share && navigator.canShare) {
          const file = new File([content], fileName, { type: "application/json" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "Rekod Belajar MyKids",
              text: "Salinan keselamatan rekod belajar anak-anak"
            });
            statusEl.textContent = "✅ Salinan rekod berjaya dihantar / disimpan!";
            return;
          }
        }
      } catch (err) {
        if (err && err.name === "AbortError") {
          statusEl.textContent = "ℹ️ Simpanan dibatalkan.";
          return;
        }
      }

      const blob = new Blob([content], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
      statusEl.textContent = "✅ Fail rekod telah disimpan! Anda boleh muat naik ke Google Drive atau kongsi melalui WhatsApp.";
    });

    document.getElementById("inp-restore-backup").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const summary = App.Storage.mergeBackup(reader.result);
          statusEl.textContent = `✅ Rekod berjaya digabung tanpa memadam markah anak lain! (+${summary.addedProfiles || 0} akaun, +${summary.addedHistory} rekod latihan, ${summary.updatedSets} set dikemas kini.)`;
          renderTopBar();
          renderParentDashboard(main);
        } catch (err) {
          statusEl.textContent = `❌ ${err.message}`;
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("btn-save-pin").addEventListener("click", async () => {
      const np = document.getElementById("new-pin").value.trim();
      const oldPin = parentUnlockedPin || state.parentPin;
      if (App.Storage.setParentPin(np)) {
        parentUnlockedPin = np;
        if (App.CloudSync && App.CloudSync.isLinked()) {
          try {
            await App.CloudSync.updateRemotePin(oldPin, np);
          } catch (err) {
            statusEl.textContent = `⚠️ PIN tempatan ditukar, tetapi pelayan online gagal: ${err.message}`;
            return;
          }
        }
        statusEl.textContent = "✅ Kod PIN baharu berjaya disimpan.";
      } else {
        statusEl.textContent = "❌ Kod PIN mesti 4 hingga 6 digit nombor.";
      }
    });
  }

  function renderAll() {
    syncViewportMetrics();
    renderTopBar();
    renderMain();
  }

  function initApp() {
    try {
      const params = new URLSearchParams(global.location.search || "");
      const fam = params.get("family");
      if (fam) {
        pendingInviteCode = fam.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
      }
    } catch (e) {
      pendingInviteCode = "";
    }
    currentView = "accounts";
    renderAll();
  }

  global.addEventListener("resize", syncViewportMetrics);
  global.addEventListener("orientationchange", syncViewportMetrics);
  if (global.visualViewport) {
    global.visualViewport.addEventListener("resize", syncViewportMetrics);
    global.visualViewport.addEventListener("scroll", syncViewportMetrics);
  }

  document.addEventListener("DOMContentLoaded", initApp);
})(window);
