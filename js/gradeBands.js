/**
 * Grade bands (v5). Supplied by Irfan, 24/Nov/2026.
 *  - d6 / t2 (UASA, Tahun 4-6 and Tingkatan 1-3): verified against 20 grades on two real UASA slips.
 *  - t4 (Tingkatan 4-5 school exam, SPM-style scale): NOT verified against a real slip.
 * Percentages are rounded to the nearest whole number before banding.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.GradeBands = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const UASA = [
    { min: 82, grade: "A", label: "Cemerlang" },
    { min: 66, grade: "B", label: "Kepujian" },
    { min: 50, grade: "C", label: "Baik" },
    { min: 35, grade: "D", label: "Memuaskan" },
    { min: 20, grade: "E", label: "Mencapai Tahap Minimum" },
    { min: 0, grade: "F", label: "Belum Mencapai Tahap Minimum" }
  ];
  const SPM = [
    { min: 90, grade: "A+", label: "Cemerlang Tertinggi" },
    { min: 80, grade: "A", label: "Cemerlang Tinggi" },
    { min: 70, grade: "A-", label: "Cemerlang" },
    { min: 65, grade: "B+", label: "Kepujian Tertinggi" },
    { min: 60, grade: "B", label: "Kepujian Tinggi" },
    { min: 55, grade: "C+", label: "Kepujian Atas" },
    { min: 50, grade: "C", label: "Kepujian" },
    { min: 45, grade: "D", label: "Lulus Atas" },
    { min: 40, grade: "E", label: "Lulus" },
    { min: 0, grade: "G", label: "Gagal" }
  ];

  function scaleFor(gradeId) {
    return gradeId === "t4" ? { name: "SPM", verified: false, bands: SPM } : { name: "UASA", verified: true, bands: UASA };
  }

  function gradeFor(gradeId, pct) {
    const p = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
    const scale = scaleFor(gradeId);
    const band = scale.bands.find((b) => p >= b.min);
    return { pct: p, grade: band.grade, label: band.label, scale: scale.name, verified: scale.verified };
  }

  return { gradeFor, scaleFor };
});
