/**
 * Parent Diagnostic Report Formatter & Renderer (v5 Step 4).
 * Pure UMD module with JSDoc types consuming App.Diagnostics.generateParentDiagnosticSummary().
 * Surfaces Top 1 Strength, Top 1 Root-Cause Weakness (with prerequisite tracing/probes),
 * Habit Alert (CARELESS_RUSH vs CONCEPTUAL_GAP + post-21:00 MYT fatigue), and a 1-sentence
 * Actionable Tuition Prescription + Copy/Share WhatsApp Summary.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./diagnostics.js"));
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticReport = factory(App.Diagnostics);
  }
})(typeof window !== "undefined" ? window : globalThis, function (Diagnostics) {
  "use strict";

  const MYT_OFFSET_MS = 8 * 60 * 60 * 1000;
  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const GRADE_LABELS = {
    d6: "Darjah 6",
    t2: "Tingkatan 2",
    t4: "Tingkatan 4"
  };

  const esc = (s) =>
    String(s === undefined || s === null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  /**
   * Format a timestamp in MYT (UTC+8) strictly as `dd/Mon/yyyy` (English 3-letter month).
   *
   * @param {string|number|Date|null|undefined} isoOrMs
   * @returns {string}
   */
  function formatDateDdMonYyyy(isoOrMs) {
    if (isoOrMs === null || isoOrMs === undefined || isoOrMs === "") return "-";

    if (typeof isoOrMs === "string") {
      const s = isoOrMs.trim();
      if (!s) return "-";
      const hasZone = /(?:z|[+-]\d{2}:?\d{2})$/i.test(s);
      if (!hasZone) {
        const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
        if (m) {
          const mon = MONTHS_EN[Number(m[2]) - 1];
          if (mon) return `${m[3]}/${mon}/${m[1]}`;
        }
      }
    }

    let ms;
    if (typeof isoOrMs === "number") ms = isoOrMs;
    else if (isoOrMs instanceof Date) ms = isoOrMs.getTime();
    else ms = Date.parse(String(isoOrMs));

    if (!Number.isFinite(ms)) return "-";
    const d = new Date(ms + MYT_OFFSET_MS);
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const mon = MONTHS_EN[d.getUTCMonth()];
    return `${dd}/${mon}/${d.getUTCFullYear()}`;
  }

  /**
   * Merge syllabus nodes from server D1 payload and local curated diagnostic banks.
   *
   * @param {string} gradeId
   * @param {Record<string, Record<string, object>>|null|undefined} diagnosticBanks
   * @param {Array<object>|null|undefined} serverNodes
   * @returns {Array<object>}
   */
  function collectSyllabusNodes(gradeId, diagnosticBanks, serverNodes) {
    const byId = new Map();
    const gradeBanks = diagnosticBanks && diagnosticBanks[gradeId];
    if (gradeBanks && typeof gradeBanks === "object") {
      Object.values(gradeBanks).forEach((bank) => {
        ((bank && bank.syllabus_nodes) || []).forEach((n) => {
          if (n && n.id) byId.set(n.id, n);
        });
      });
    }
    (Array.isArray(serverNodes) ? serverNodes : []).forEach((n) => {
      if (n && n.id) byId.set(n.id, n);
    });
    return Array.from(byId.values());
  }

  /**
   * Merge diagnostic sessions, attempts, and syllabus nodes from local snapshot and D1 server.
   *
   * @param {{ studentId?: string, gradeId?: string, profile?: object|null, serverDiagnostics?: object|null, diagnosticBanks?: object|null }} params
   * @returns {{ sessions: object[], attempts: object[], syllabusNodes: object[], latestSession: object|null }}
   */
  function mergeDiagnosticSources(params) {
    const p = params || {};
    const profile = p.profile || {};
    const server = p.serverDiagnostics || {};
    const gradeId = p.gradeId || profile.gradeId || "d6";
    const targetSid = p.studentId || profile.id || null;

    const sessMap = new Map();
    (Array.isArray(profile.diagnosticSessions) ? profile.diagnosticSessions : []).forEach((s) => {
      if (s && s.id) sessMap.set(s.id, s);
    });
    (Array.isArray(server.sessions) ? server.sessions : []).forEach((s) => {
      if (s && s.id) sessMap.set(s.id, { ...(sessMap.get(s.id) || {}), ...s });
    });
    const sessions = Array.from(sessMap.values()).sort((a, b) =>
      String(b.started_at || "").localeCompare(String(a.started_at || ""))
    );

    const attMap = new Map();
    (Array.isArray(profile.diagnosticAttempts) ? profile.diagnosticAttempts : []).forEach((a) => {
      if (!a || !a.id) return;
      const normalized =
        targetSid && (!a.student_id || (profile.id && a.student_id === profile.id))
          ? { ...a, student_id: targetSid }
          : a;
      attMap.set(a.id, normalized);
    });
    (Array.isArray(server.attempts) ? server.attempts : []).forEach((a) => {
      if (!a || !a.id) return;
      const merged = { ...(attMap.get(a.id) || {}), ...a };
      if (targetSid && !merged.student_id) merged.student_id = targetSid;
      attMap.set(a.id, merged);
    });
    const attempts = Array.from(attMap.values()).sort((a, b) =>
      String(b.answered_at_myt || "").localeCompare(String(a.answered_at_myt || ""))
    );

    const syllabusNodes = collectSyllabusNodes(gradeId, p.diagnosticBanks, server.syllabusNodes);
    return {
      sessions,
      attempts,
      syllabusNodes,
      latestSession: sessions[0] || null
    };
  }

  function formatNodeTitle(node) {
    if (!node) return "";
    const sub = node.subtopicName || node.nodeId || node.id || "";
    if (node.topicName && node.topicName !== sub) return `${node.topicName} (${sub})`;
    return sub;
  }

  function alertZoneText(overallGrade) {
    if (!overallGrade) return "";
    if (overallGrade.alertLevel === "FALSE_COMFORT") {
      return "⚠️ Zon Selesa Palsu (D 35–49%): Lulus di atas kertas, tetapi asas masih rapuh.";
    }
    if (overallGrade.alertLevel === "CRITICAL") {
      return "🚨 Zon Kritikal (E 20–34%): Tahap minimum sahaja — perlukan pemulihan asas segera.";
    }
    if (overallGrade.alertLevel === "PASS_WITHOUT_CREDIT") {
      return "⚠️ Zon Amaran (D/E 40–49%): Lulus tanpa kepujian — berisiko dalam peperiksaan SPM.";
    }
    if (overallGrade.alertLevel === "FAIL") {
      return "❌ Gagal: Perlukan bimbingan konsep asas sebelum latih tubi berat.";
    }
    return "";
  }

  /**
   * Build structured report data + plain-language WhatsApp summary for a child.
   *
   * @param {{ studentId?: string|null, studentName?: string, gradeId?: string, sessions?: object[], attempts?: object[], syllabusNodes?: object[] }} params
   * @returns {object}
   */
  function buildReportData(params) {
    const p = params || {};
    const studentId = p.studentId !== undefined ? p.studentId : null;
    const studentName = String(p.studentName || "Anak").trim() || "Anak";
    const gradeId = String(p.gradeId || "d6");
    const gradeLabel = GRADE_LABELS[gradeId] || gradeId;
    const sessions = Array.isArray(p.sessions) ? p.sessions : [];
    const attempts = Array.isArray(p.attempts) ? p.attempts : [];
    const syllabusNodes = Array.isArray(p.syllabusNodes) ? p.syllabusNodes : [];

    const summary = Diagnostics.generateParentDiagnosticSummary(studentId, attempts, syllabusNodes, {
      gradeLevel: gradeId
    });

    const latestTs =
      (sessions[0] && (sessions[0].completed_at || sessions[0].started_at)) ||
      (attempts[0] && (attempts[0].answered_at_myt || attempts[0].answeredAtMyt)) ||
      null;
    const lastCheckupDate = formatDateDdMonYyyy(latestTs);

    if (summary.totalAttempts === 0) {
      return {
        studentId,
        studentName,
        gradeId,
        gradeLabel,
        lastCheckupDate,
        sessionCount: sessions.length,
        summary,
        whatsappText: ""
      };
    }

    const og = summary.overallGrade;
    const alertNote = alertZoneText(og);
    const gradeLine = og
      ? `Skor Keseluruhan: ${og.pct}% (Gred ${og.grade} - ${og.descriptor})${!og.verified ? " [Skala sekolah belum disahkan slip rasmi]" : ""}${alertNote ? ` | ${alertNote}` : ""}`
      : `Skor Keseluruhan: ${summary.overallPct}%`;

    const strengthLine = summary.topStrength
      ? `💪 Kekuatan Utama: ${formatNodeTitle(summary.topStrength)} (${summary.topStrength.accuracyPct}% tepat)`
      : "💪 Kekuatan Utama: Belum dikenal pasti (0% tepat dalam semakan ini)";

    let weaknessLine = "🎯 Punca Kelemahan Utama: Tiada kelemahan ketara dikesan.";
    const w = summary.topRootCauseWeakness;
    if (w) {
      if (w.needsPrerequisiteProbe && w.probeNode) {
        weaknessLine = `🎯 Punca Kelemahan Utama: Semak asas dahulu — "${formatNodeTitle(w.probeNode)}" (dicetuskan oleh ${w.observedFailureRatePct}% ralat dalam ${w.triggeredFromLabel || formatNodeTitle(w)})`;
      } else if (w.triggeredFromNodeId) {
        weaknessLine = `🎯 Punca Kelemahan Utama: Asas "${formatNodeTitle(w)}" (${w.failureRatePct}% ralat, dikesan daripada kelemahan dalam ${w.triggeredFromLabel})`;
      } else {
        weaknessLine = `🎯 Punca Kelemahan Utama: ${formatNodeTitle(w)} (${w.failureRatePct}% ralat)`;
      }
    }

    const ha = summary.habitAlert;
    const habitItems = [
      `Cuai pantas (CARELESS_RUSH): ${ha.carelessRushCount}`,
      `Jurang konsep (CONCEPTUAL_GAP): ${ha.conceptualGapCount}`,
      `Nisbah ${ha.ratioLabel}`
    ];
    if (ha.lowFluencyCount > 0) habitItems.push(`Jawapan betul tetapi perlahan (LOW_FLUENCY): ${ha.lowFluencyCount}`);
    if (ha.lateNightFatigue && ha.lateNightFatigue.detected) {
      habitItems.push(
        `🌙 Keletihan selepas 21:00 MYT: ketepatan turun ${ha.lateNightFatigue.accuracyDropPct}% (${ha.lateNightFatigue.before21.accuracyPct}% sebelum 9 malam vs ${ha.lateNightFatigue.after21.accuracyPct}% lewat malam)`
      );
    }

    const whatsappText = [
      `🩺 Laporan Diagnostik — ${studentName} (${gradeLabel}, ${lastCheckupDate})`,
      gradeLine,
      strengthLine,
      weaknessLine,
      `⚡ Tabiat Ujian: ${habitItems.join(" • ")}`,
      `📝 Cadangan Tuisyen: ${summary.tuitionPrescription}`
    ].join("\n");

    return {
      studentId,
      studentName,
      gradeId,
      gradeLabel,
      lastCheckupDate,
      sessionCount: sessions.length,
      summary,
      whatsappText
    };
  }

  /**
   * Render the Parent Diagnostic Report HTML card.
   *
   * @param {object} reportData
   * @returns {string}
   */
  function renderCardHtml(reportData) {
    const r = reportData || {};
    const s = r.summary;
    if (!s || s.totalAttempts === 0) {
      return `<div class="diag-report-box is-empty">
        <div class="diag-report-head">
          <strong>🩺 Laporan Diagnostik ("MRI Scan")</strong>
        </div>
        <p class="diag-report-empty">Anak belum melengkapkan semakan diagnostik 15 soalan. Minta anak buka <strong>🩺 Semakan Diagnostik</strong> di telefon mereka untuk mengesan punca kelemahan dan tabiat menjawab.</p>
      </div>`;
    }

    const og = s.overallGrade;
    const alertNote = alertZoneText(og);
    const alertCls = og && og.alertLevel === "CRITICAL" ? "is-critical" : og && (og.isFalseComfortZone || og.alertLevel === "FAIL") ? "is-warn" : "";

    const strengthText = s.topStrength
      ? `${esc(formatNodeTitle(s.topStrength))} — <strong>${s.topStrength.accuracyPct}%</strong> tepat (${s.topStrength.correct}/${s.topStrength.attempts})`
      : "Belum dikenal pasti (0% tepat dalam semakan ini).";

    const w = s.topRootCauseWeakness;
    let weaknessHtml = "Tiada kelemahan ketara dikesan.";
    if (w) {
      if (w.needsPrerequisiteProbe && w.probeNode) {
        weaknessHtml = `<span class="diag-probe-pill">Semak asas dahulu</span> <strong>${esc(formatNodeTitle(w.probeNode))}</strong> — dicetuskan oleh <strong>${w.observedFailureRatePct}% ralat</strong> dalam ${esc(w.triggeredFromLabel || formatNodeTitle(w))}.`;
      } else if (w.triggeredFromNodeId) {
        weaknessHtml = `Asas <strong>${esc(formatNodeTitle(w))}</strong> (${w.failureRatePct}% ralat) — dikesan semasa menjejak kelemahan dalam ${esc(w.triggeredFromLabel)}.`;
      } else {
        weaknessHtml = `<strong>${esc(formatNodeTitle(w))}</strong> — ${w.failureRatePct}% ralat (${w.wrong}/${w.attempts} salah).`;
      }
    }

    const ha = s.habitAlert;
    const fatigue = ha.lateNightFatigue;
    const fatigueHtml =
      fatigue && fatigue.detected
        ? `<div class="diag-fatigue-warn">🌙 <strong>Amaran Keletihan Lewat Malam (≥ 21:00 MYT):</strong> Ketepatan jatuh <strong>${fatigue.accuracyDropPct} mata peratusan</strong> (${fatigue.before21.accuracyPct}% sebelum 9 malam berbanding ${fatigue.after21.accuracyPct}% pada/selepas 9 malam MYT).</div>`
        : "";

    return `<div class="diag-report-box">
      <div class="diag-report-head">
        <div>
          <strong>🩺 Laporan Diagnostik ("MRI Scan")</strong>
          <small class="diag-report-meta">${esc(r.lastCheckupDate)} • ${s.totalAttempts} soalan${r.sessionCount ? ` • ${r.sessionCount} sesi` : ""}</small>
        </div>
        ${
          og
            ? `<div class="diag-grade-pill ${alertCls}"><strong>${og.pct}%</strong><span>Gred ${esc(og.grade)} • ${esc(og.descriptor)}</span></div>`
            : ""
        }
      </div>
      ${alertNote ? `<div class="diag-alert-banner ${alertCls}">${esc(alertNote)}</div>` : ""}
      ${og && !og.verified ? `<div class="diag-unverified-note">* Skala gred SPM ialah anggaran sekolah dan belum disahkan dengan slip peperiksaan sebenar.</div>` : ""}
      <div class="diag-insight-grid">
        <div class="diag-insight-item is-strength">
          <span class="diag-insight-lbl">💪 Kekuatan Utama</span>
          <p>${strengthText}</p>
        </div>
        <div class="diag-insight-item is-weakness">
          <span class="diag-insight-lbl">🎯 Punca Kelemahan Utama</span>
          <p>${weaknessHtml}</p>
        </div>
        <div class="diag-insight-item is-habit">
          <span class="diag-insight-lbl">⚡ Tabiat Ujian</span>
          <p>Cuai pantas (<code>CARELESS_RUSH</code>): <strong>${ha.carelessRushCount}</strong> • Jurang konsep (<code>CONCEPTUAL_GAP</code>): <strong>${ha.conceptualGapCount}</strong> (nisbah <strong>${esc(ha.ratioLabel)}</strong>)${ha.lowFluencyCount > 0 ? ` • Perlahan tetapi betul (<code>LOW_FLUENCY</code>): <strong>${ha.lowFluencyCount}</strong>` : ""}.</p>
          ${fatigueHtml}
        </div>
        <div class="diag-insight-item is-prescription">
          <span class="diag-insight-lbl">📝 Cadangan Tuisyen (Untuk Guru / Tutor)</span>
          <p>${esc(s.tuitionPrescription)}</p>
        </div>
      </div>
      <div class="task-actions diag-report-actions">
        <button type="button" class="btn-tactile btn-true btn-sm" data-diag-copy="${esc(r.whatsappText)}">📋 Copy WhatsApp Summary</button>
        <button type="button" class="btn-secondary btn-sm" data-diag-wa="${esc(r.whatsappText)}">📤 Kongsi WhatsApp</button>
      </div>
    </div>`;
  }

  /**
   * Copy text to clipboard with safe fallback for non-HTTPS / WebView environments.
   *
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async function copyText(text) {
    const val = String(text || "");
    if (!val) return false;
    try {
      if (globalThis.navigator && globalThis.navigator.clipboard && typeof globalThis.navigator.clipboard.writeText === "function") {
        await globalThis.navigator.clipboard.writeText(val);
        return true;
      }
    } catch (e) {
      /* fallback to textarea copy */
    }
    try {
      if (typeof document !== "undefined" && document.body) {
        const ta = document.createElement("textarea");
        ta.value = val;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return !!ok;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  /**
   * Bind Copy WhatsApp Summary & Share WhatsApp actions inside `container`.
   *
   * @param {HTMLElement|null|undefined} container
   */
  function bindActions(container) {
    if (!container || typeof container.querySelectorAll !== "function") return;

    container.querySelectorAll("[data-diag-copy]").forEach((btn) => {
      if (btn.dataset.diagBound === "1") return;
      btn.dataset.diagBound = "1";
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-diag-copy") || "";
        const ok = await copyText(text);
        const orig = btn.dataset.origLabel || btn.textContent;
        btn.dataset.origLabel = orig;
        btn.textContent = ok ? "✅ Ringkasan disalin!" : "⚠️ Gagal salin — guna Kongsi WhatsApp";
        setTimeout(() => {
          btn.textContent = orig;
        }, 2500);
      });
    });

    container.querySelectorAll("[data-diag-wa]").forEach((btn) => {
      if (btn.dataset.diagBound === "1") return;
      btn.dataset.diagBound = "1";
      btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-diag-wa") || "";
        if (typeof globalThis.open === "function") {
          globalThis.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
        }
      });
    });
  }

  return {
    formatDateDdMonYyyy,
    collectSyllabusNodes,
    mergeDiagnosticSources,
    buildReportData,
    renderCardHtml,
    copyText,
    bindActions
  };
});
