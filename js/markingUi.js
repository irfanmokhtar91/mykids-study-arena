/**
 * Parent marking screen (v5): tick the method/accuracy steps a child earned on structured mock-exam questions.
 * Marks are awarded ONLY by the parent. This screen never guesses or auto-marks free text.
 */
(function (global) {
  const App = (global.App = global.App || {});

  const esc = (s) =>
    String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function findItem(id) {
    const pools = (App.Data && App.Data.structured) || {};
    for (const key of Object.keys(pools)) {
      const hit = pools[key].ITEMS.find((it) => it.id === id);
      if (hit) return hit;
    }
    return null;
  }

  function pendingRecords(profile) {
    return (profile.mockResults || []).filter((r) => (r.sections || []).some((s) => s.state === "menunggu"));
  }

  /** Open the marking overlay for one stored result record. */
  function open(profile, record, onSaved) {
    const old = document.getElementById("mark-modal");
    if (old && old.parentNode) old.parentNode.removeChild(old);

    const structuredSections = record.sections.filter((s) => s.structured);
    const typed = record.typed || {};
    const prior = record.parentMarks || {};

    const body = structuredSections
      .map((sec) => {
        const items = (sec.items || [])
          .map((slim, qi) => {
            const full = findItem(slim.id);
            if (!full) return `<div class="mk-missing">Soalan ${esc(slim.id)} tidak ditemui dalam bank soalan.</div>`;
            const parts = full.parts
              .map((p, i) => {
                const ans = typed[slim.id] && typed[slim.id][i];
                const hasPrior = !!(prior[slim.id] && Array.isArray(prior[slim.id][i]));
                const picked = hasPrior ? prior[slim.id][i] : [];
                const priorZero = hasPrior && picked.length === 0;
                return `
                <div class="mk-part" data-item="${esc(slim.id)}" data-part="${i}">
                  <div class="mk-q"><strong>${esc(p.label)}</strong> ${esc(p.q).replace(/\n/g, "<br>")}</div>
                  <div class="mk-child"><em>Jawapan anak:</em> ${ans ? esc(ans).replace(/\n/g, "<br>") : "<span class=\"mk-none\">(tiada jawapan ditaip)</span>"}</div>
                  <div class="mk-model"><em>Jawapan model:</em> <strong>${esc(p.answer)}</strong></div>
                  <ul class="mk-steps">
                    ${p.steps
                      .map(
                        (st, k) => `
                      <li><label><input type="checkbox" data-step="${k}" ${picked.includes(k) ? "checked" : ""} /> <span class="mk-kind">${esc(st.kind)}${st.marks}</span> ${esc(st.text)}</label></li>`
                      )
                      .join("")}
                  </ul>
                  <label class="mk-zero"><input type="checkbox" class="mk-zero-cb" ${priorZero ? "checked" : ""} /> 0 markah (anak tidak menunjukkan langkah / tidak dijawab)</label>
                  <div class="mk-sub">Markah bahagian ini: <strong class="mk-sub-val">0</strong> / ${p.marks} <span class="mk-state">disemak</span></div>
                </div>`;
              })
              .join("");
            return `
              <div class="mk-item">
                <h4>Soalan ${esc(sec.id)}${qi + 1}</h4>
                ${full.stem ? `<p class="mk-stem">${esc(full.stem).replace(/\n/g, "<br>")}</p>` : ""}
                ${parts}
              </div>`;
          })
          .join("");
        return `<section class="mk-section"><h3>Bahagian ${esc(sec.id)} (${sec.possible} markah)</h3>${items}</section>`;
      })
      .join("");

    const wrap = document.createElement("div");
    wrap.id = "mark-modal";
    wrap.className = "mark-modal";
    wrap.innerHTML = `
      <div class="mark-box" role="dialog" aria-modal="true">
        <div class="mark-head">
          <h2>📝 Tanda Kertas: ${esc(record.subjectName || record.subjectId)}</h2>
          <button type="button" class="btn-ghost btn-sm" id="mark-close">✕ Tutup</button>
        </div>
        <p class="mk-note">Tandakan langkah yang anak dapat. M = markah kaedah, A = markah jawapan tepat. Hanya ibu bapa yang menentukan markah. Jangan tanda jika anak tidak menunjukkan langkah itu.</p>
        ${body}
        <div class="mark-foot">
          <div><strong>Jumlah: <span id="mk-total">0</span> markah</strong><br /><small id="mk-reviewed"></small></div>
          <button type="button" class="btn-tactile btn-true" id="mark-save">Simpan markah</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);

    const partState = (el) => {
      const steps = Array.from(el.querySelectorAll("input[data-step]:checked"));
      const zero = el.querySelector(".mk-zero-cb").checked;
      return { steps, zero, reviewed: steps.length > 0 || zero };
    };
    const itemKeys = () => {
      const m2 = new Map();
      wrap.querySelectorAll(".mk-part").forEach((el) => {
        const id = el.getAttribute("data-item");
        if (!m2.has(id)) m2.set(id, []);
        m2.get(id).push(el);
      });
      return m2;
    };
    const recompute = () => {
      let total = 0;
      wrap.querySelectorAll(".mk-part").forEach((el) => {
        const full = findItem(el.getAttribute("data-item"));
        const p = full && full.parts[Number(el.getAttribute("data-part"))];
        const st = partState(el);
        let sub = 0;
        st.steps.forEach((cb) => {
          sub += p ? p.steps[Number(cb.getAttribute("data-step"))].marks : 0;
        });
        el.querySelector(".mk-sub-val").textContent = String(sub);
        const badge = el.querySelector(".mk-state");
        badge.textContent = st.reviewed ? "disemak" : "belum disemak";
        badge.className = "mk-state " + (st.reviewed ? "is-ok" : "is-todo");
        total += sub;
      });
      document.getElementById("mk-total").textContent = String(total);
      const items = itemKeys();
      let reviewed = 0;
      items.forEach((els) => {
        if (els.every((el) => partState(el).reviewed)) reviewed++;
      });
      document.getElementById("mk-reviewed").textContent = `${reviewed} / ${items.size} soalan telah disemak`;
      document.getElementById("mark-save").disabled = reviewed === 0;
    };
    wrap.addEventListener("change", (e) => {
      const el = e.target.closest && e.target.closest(".mk-part");
      if (el && e.target.classList.contains("mk-zero-cb") && e.target.checked) {
        el.querySelectorAll("input[data-step]").forEach((cb) => (cb.checked = false));
      } else if (el && e.target.hasAttribute("data-step") && e.target.checked) {
        el.querySelector(".mk-zero-cb").checked = false;
      }
      recompute();
    });
    recompute();

    const close = () => {
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    };
    document.getElementById("mark-close").addEventListener("click", close);
    document.getElementById("mark-save").addEventListener("click", () => {
      const items = itemKeys();
      const marks = { ...(record.parentMarks || {}) };
      let reviewed = 0;
      items.forEach((els, id) => {
        if (!els.every((el) => partState(el).reviewed)) return; // not fully reviewed: stays pending, never scored as 0
        reviewed++;
        marks[id] = {};
        els.forEach((el) => {
          marks[id][Number(el.getAttribute("data-part"))] = partState(el).steps.map((cb) => Number(cb.getAttribute("data-step")));
        });
      });
      if (reviewed < items.size) {
        const left = items.size - reviewed;
        if (!global.confirm(`${left} soalan belum disemak. Soalan itu kekal menunggu dan gred penuh tidak akan dikira sehingga semuanya disemak. Simpan yang sudah disemak?`)) return;
      }
      const updated = App.MockExam.rescoreRecord(record, marks);
      close();
      onSaved(updated);
    });
  }

  App.MarkingUI = { open, pendingRecords, findItem };
})(window);
