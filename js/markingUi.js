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
                const picked = prior[slim.id] && Array.isArray(prior[slim.id][i]) ? prior[slim.id][i] : [];
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
                  <div class="mk-sub">Markah bahagian ini: <strong class="mk-sub-val">0</strong> / ${p.marks}</div>
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
          <strong>Jumlah: <span id="mk-total">0</span> markah</strong>
          <button type="button" class="btn-tactile btn-true" id="mark-save">Simpan markah</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);

    const recompute = () => {
      let total = 0;
      wrap.querySelectorAll(".mk-part").forEach((el) => {
        const full = findItem(el.getAttribute("data-item"));
        const p = full && full.parts[Number(el.getAttribute("data-part"))];
        let sub = 0;
        el.querySelectorAll("input[type=checkbox]:checked").forEach((cb) => {
          sub += p ? p.steps[Number(cb.getAttribute("data-step"))].marks : 0;
        });
        el.querySelector(".mk-sub-val").textContent = String(sub);
        total += sub;
      });
      document.getElementById("mk-total").textContent = String(total);
    };
    wrap.addEventListener("change", recompute);
    recompute();

    const close = () => {
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    };
    document.getElementById("mark-close").addEventListener("click", close);
    document.getElementById("mark-save").addEventListener("click", () => {
      const marks = {};
      wrap.querySelectorAll(".mk-part").forEach((el) => {
        const id = el.getAttribute("data-item");
        const i = Number(el.getAttribute("data-part"));
        marks[id] = marks[id] || {};
        marks[id][i] = Array.from(el.querySelectorAll("input[type=checkbox]:checked")).map((cb) => Number(cb.getAttribute("data-step")));
      });
      const updated = App.MockExam.rescoreRecord(record, marks);
      close();
      onSaved(updated);
    });
  }

  App.MarkingUI = { open, pendingRecords, findItem };
})(window);
