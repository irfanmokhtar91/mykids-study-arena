/** Parent-panel card for linking each child to a parent (QR / code) and syncing. Uses App.Cloud. */
(function (global) {
  const App = (global.App = global.App || {});
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (ts) => (App.Storage && App.Storage.fmtDate ? App.Storage.fmtDate(ts) : new Date(ts).toLocaleString());
  let statusMsg = "";
  let activeModal = null;

  function cardHtml(profiles) {
    if (!App.Cloud || !App.Cloud.isConfigured()) {
      return `<h3>☁️ Pantauan Ibu Bapa</h3><p class="cloud-not-configured">Pelayan belum disambungkan. Aplikasi masih berfungsi sepenuhnya di telefon ini.</p>`;
    }
    const rows = (profiles || [])
      .map((p) => {
        const link = App.Cloud.getLink(p.id);
        const linked = link && link.childId && link.deviceToken;
        const name = esc(App.Storage.getDisplayName(p));
        if (!linked) {
          return `<div class="cloud-row"><div><strong>${p.avatar || "🙂"} ${name}</strong><br><small>Belum dihubungkan</small></div>
            <button type="button" class="btn-tactile btn-true btn-sm" data-cloud-link="${esc(p.id)}">🔗 Hubungkan Ibu Bapa</button></div>`;
        }
        const last = link.lastSyncAt ? `Segerak: ${esc(fmt(link.lastSyncAt))}` : "Belum segerak";
        const err = link.lastError ? `<br><small class="cloud-err">⚠️ ${esc(link.lastError)}</small>` : "";
        return `<div class="cloud-row"><div><strong>${p.avatar || "🙂"} ${name}</strong> <span class="cloud-status-pill is-online">🟢 Dihubungkan</span><br><small>${last}</small>${err}</div>
          <div class="cloud-btn-col">
            <button type="button" class="btn-tactile btn-true btn-sm" data-cloud-sync="${esc(p.id)}">🔄 Segerak</button>
            <button type="button" class="btn-secondary btn-sm" data-cloud-link="${esc(p.id)}">➕ Ibu Bapa Lain</button>
            <button type="button" class="btn-ghost btn-sm" data-cloud-unlink="${esc(p.id)}">Putuskan</button>
          </div></div>`;
      })
      .join("");
    return `<h3>☁️ Pantauan Ibu Bapa (Log Masuk Google)</h3>
      <p class="cloud-help">Hubungkan setiap anak dengan akaun Google ibu atau bapa. Selepas itu, markah, kelemahan dan gambar jawapan boleh dilihat dari telefon ibu bapa, dan markah ibu bapa kembali ke telefon anak.</p>
      ${statusMsg ? `<p class="cloud-msg">${esc(statusMsg)}</p>` : ""}${rows || "<p>Tiada profil anak.</p>"}`;
  }

  function closeModal() {
    if (activeModal) {
      activeModal.cancelled = true;
      activeModal.el.remove();
      activeModal = null;
    }
  }

  async function openPairModal(profileId, rerender) {
    closeModal();
    const profile = (App.Storage.getState().profiles || []).find((p) => p.id === profileId);
    if (!profile) return;
    const el = document.createElement("div");
    el.className = "pin-modal pair-modal";
    el.innerHTML = `<div class="pin-modal-box"><h3>Hubungkan ${esc(App.Storage.getDisplayName(profile))}</h3><p id="pair-body">Menjana kod...</p><button type="button" class="btn-ghost" id="pair-cancel">Batal</button></div>`;
    document.body.appendChild(el);
    const state = { el, cancelled: false };
    activeModal = state;
    el.querySelector("#pair-cancel").addEventListener("click", closeModal);
    const body = el.querySelector("#pair-body");
    let pair;
    try {
      pair = await App.Cloud.startPair(profile);
    } catch (e) {
      body.textContent = `Gagal menjana kod: ${e.message}`;
      return;
    }
    if (state.cancelled) return;
    const code = pair.code;
    body.innerHTML = `<span>Pada telefon ibu/bapa, buka kamera dan imbas kod QR ini, atau pergi ke halaman ibu bapa dan taip kod di bawah. Kod sah 15 minit.</span>
      <div class="pair-qr">${App.Cloud.qrSvg(pair.url)}</div>
      <div class="pair-code" style="font-size:2rem;font-weight:800;letter-spacing:.2em;text-align:center">${esc(code)}</div>
      <p style="word-break:break-all"><small>${esc(pair.url)}</small></p>
      <button type="button" class="btn-secondary btn-sm" id="pair-share">📲 Kongsi pautan (WhatsApp)</button>
      <p id="pair-wait"><small>Menunggu ibu bapa mengesahkan...</small></p>`;
    el.querySelector("#pair-share").addEventListener("click", () => {
      const text = `Pautan untuk menghubungkan ${App.Storage.getDisplayName(profile)} dalam MyKids Study Arena (kod ${code}, sah 15 minit): ${pair.url}`;
      global.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    });
    const result = await App.Cloud.waitForClaim(profile, pair, { cancelled: () => state.cancelled });
    if (state.cancelled) return;
    if (result.linked) {
      statusMsg = `✅ ${App.Storage.getDisplayName(profile)} sudah dihubungkan.`;
      closeModal();
      App.Cloud.syncProfile(profile.id).then(() => rerender && rerender());
      if (rerender) rerender();
    } else {
      body.textContent = "Kod telah tamat tempoh. Tutup dan cuba lagi.";
    }
  }

  function bind(root, rerender) {
    root.querySelectorAll("[data-cloud-link]").forEach((b) => b.addEventListener("click", () => openPairModal(b.getAttribute("data-cloud-link"), rerender)));
    root.querySelectorAll("[data-cloud-sync]").forEach((b) =>
      b.addEventListener("click", async () => {
        b.disabled = true;
        b.textContent = "Menyegerak...";
        const r = await App.Cloud.syncProfile(b.getAttribute("data-cloud-sync"));
        statusMsg = r.ok ? `✅ Disegerakkan. ${r.marksApplied ? `${r.marksApplied} markah ibu bapa diterima. ` : ""}${r.photosUploaded ? `${r.photosUploaded} gambar dihantar.` : ""}` : `⚠️ Gagal segerak: ${r.error}`;
        if (rerender) rerender();
      })
    );
    root.querySelectorAll("[data-cloud-unlink]").forEach((b) =>
      b.addEventListener("click", () => {
        if (!global.confirm("Putuskan sambungan di telefon ini? Data di pelayan kekal sehingga ibu bapa memadamkannya dalam aplikasi ibu bapa.")) return;
        App.Cloud.unlink(b.getAttribute("data-cloud-unlink"));
        statusMsg = "Sambungan diputuskan di telefon ini.";
        if (rerender) rerender();
      })
    );
  }

  App.CloudUi = { cardHtml, bind, closeModal };
})(window);
