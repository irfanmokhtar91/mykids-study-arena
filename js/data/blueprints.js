/**
 * Mock Exam blueprints (v5). DATA ONLY. Every number comes from the official KPM format documents:
 *  RENDAH:   "Format Pentaksiran dan Pelaporan Sekolah Rendah bagi Ujian Akhir Sesi Akademik" (lp.moe.gov.my/lp/files/uasa)
 *  MENENGAH: "Format Pentaksiran dan Pelaporan Sekolah Menengah bagi Ujian Akhir Sesi Akademik" (same site)
 * Real sample papers (Tingkatan 2 Matematik UASA model, Darjah 6 Matematik UPSA 2025) matched these numbers.
 *
 * Section types: OAP = objektif aneka pilihan, OPB = objektif pelbagai bentuk,
 *                SRT = subjektif respons terhad, SRTb = subjektif respons terbuka, SUBJ = subjektif.
 * `kind` says how the app can mark it: "objective" (auto) or "subjective" (needs parent marks / premium AI).
 * `choose` = student answers N of M questions (marks counted for the N answered).
 * `marks` of a section = marks that COUNT toward the paper total.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.Blueprints = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const R = "KPM Format Pentaksiran UASA Sekolah Rendah";
  const M = "KPM Format Pentaksiran UASA Sekolah Menengah";
  const sec = (id, label, types, count, marks, kind, extra = {}) => ({ id, label, types, count, marks, kind, ...extra });

  const BLUEPRINTS = [
    // ------------------------------ DARJAH 6 (Tahun 4-6 format) ------------------------------
    {
      gradeId: "d6", subjectId: "bm", source: R + " (Bahasa Melayu Tahun 4,5,6)",
      papers: [{
        id: "k1", name: "Ujian Bertulis: Pemahaman & Penulisan", minutes: 75, marks: 50,
        sections: [
          sec("A", "Tatabahasa & pemahaman petikan", ["OAP"], 10, 10, "objective", { countNote: "Tatabahasa 3-5 + pemahaman petikan 5-7 soalan; bilangan tepat bergantung kertas" }),
          sec("B", "Tatabahasa, pemahaman & respons kritis kreatif", ["OPB", "SRT"], null, 10, "subjective", { countNote: "Tatabahasa/pemahaman 3-5 soalan + respons kritis dan kreatif 1 soalan" }),
          sec("C", "Penulisan perenggan", ["SRTb"], 1, 10, "subjective"),
          sec("D", "Penulisan karangan", ["SRTb"], 1, 20, "subjective")
        ]
      }]
    },
    {
      gradeId: "d6", subjectId: "bi", source: R + " (Bahasa Inggeris Tahun 4,5,6)",
      papers: [{
        id: "k1", name: "Reading and Use of English & Writing", minutes: 75, marks: 50,
        sections: [
          sec("1", "Short texts: multiple choice", ["OAP"], 5, 5, "objective"),
          sec("2", "Lexico-grammar: cloze text", ["OAP"], 4, 4, "objective"),
          sec("3", "Linear/non-linear text comprehension: multiple choice", ["OAP"], 5, 5, "objective"),
          sec("4", "Matching multiple texts", ["OPB"], 6, 6, "objective"),
          sec("5", "Word completion", ["OPB"], 5, 5, "objective"),
          sec("6", "Guided writing: short communicative message", ["SRT"], 1, 10, "subjective"),
          sec("7", "Notes expansion: longer communicative message", ["SRTb"], 1, 15, "subjective")
        ]
      }]
    },
    {
      gradeId: "d6", subjectId: "math", source: R + " (Matematik Tahun 4,5,6); sample: UPSA 2025 Year 6 Mathematics (Scribd 879166934)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 75, marks: 50,
        sections: [
          sec("A", "Respons terhad", ["SRT"], 13, 26, "subjective"),
          sec("B", "Respons terbuka (penyelesaian masalah)", ["SRTb"], 2, 24, "subjective")
        ]
      }]
    },
    {
      gradeId: "d6", subjectId: "sains", source: R + " (Sains Tahun 4,5,6)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 75, marks: 50,
        sections: [
          sec("A", "Objektif", ["OAP", "OPB"], 10, 10, "objective"),
          sec("B", "Subjektif respons terhad", ["SRT"], 2, 8, "subjective"),
          sec("C", "Subjektif respons terhad", ["SRT"], 4, 32, "subjective")
        ]
      }]
    },
    {
      gradeId: "d6", subjectId: "sejarah", source: R + " (Sejarah Tahun 4,5,6)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 75, marks: 50,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 20, 20, "objective"),
          sec("B", "Subjektif respons terhad", ["SRT"], 4, 20, "subjective"),
          sec("C", "Subjektif respons terhad", ["SRT"], 2, 10, "subjective")
        ]
      }]
    },

    // ------------------------------ TINGKATAN 2 (Tingkatan 1,2,3 format) ------------------------------
    {
      gradeId: "t2", subjectId: "bm", source: M + " (Bahasa Melayu Tingkatan 1,2,3; Ting. 2 Bahagian C = Ringkasan/Rumusan)",
      papers: [
        {
          id: "k1", name: "Kertas 1 (02/1) Pemahaman", minutes: 90, marks: 60,
          sections: [
            sec("A", "Morfologi/frasa/sintaksis/peribahasa + pemahaman petikan", ["OAP"], 15, 15, "objective", { countNote: "10 soalan tatabahasa + 5 soalan pemahaman" }),
            sec("B", "Tatabahasa (OPB), pemahaman (SRT), Novel Komsas (SRT)", ["OPB", "SRT"], 8, 30, "subjective", { countNote: "4 OPB + 3 pemahaman SRT + 1 Komsas SRT" }),
            sec("C", "Pemindahan maklumat & ringkasan/rumusan", ["SRT"], 1, 15, "subjective")
          ]
        },
        {
          id: "k2", name: "Kertas 2 (02/2) Penulisan", minutes: 60, marks: 40,
          sections: [
            sec("A", "Karangan", ["SRT"], 1, 10, "subjective"),
            sec("B", "Karangan", ["SRTb"], 3, 30, "subjective", { choose: 1, of: 3 })
          ]
        }
      ]
    },
    {
      gradeId: "t2", subjectId: "bi", source: M + " (Bahasa Inggeris Pemahaman Tingkatan 2 & Penulisan Tingkatan 1,2,3)",
      papers: [
        {
          id: "reading", name: "Reading and Use of English", minutes: 90, marks: 40,
          sections: [
            sec("1", "Short text multiple choice", ["OAP"], 8, 8, "objective"),
            sec("2", "Lexico-grammar long text error correction", ["OPB"], 8, 8, "objective"),
            sec("3", "Information transfer linear text", ["OPB"], 8, 8, "objective"),
            sec("4", "Short answer longer text input", ["SRT"], 10, 10, "subjective"),
            sec("5", "Matching gapped text", ["OPB"], 6, 6, "objective")
          ]
        },
        {
          id: "writing", name: "Writing", minutes: 60, marks: 40,
          sections: [
            sec("1", "Short communicative message", ["SRT"], 1, 20, "subjective"),
            sec("2", "Note expansion", ["SRTb"], 1, 20, "subjective")
          ]
        }
      ]
    },
    {
      gradeId: "t2", subjectId: "math", source: M + " (Matematik Tingkatan 1,2,3); sample: Pelangi Matematik T2 Kertas Model UASA (A Q1-20, B Q21-25, C Q26-31)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 120, marks: 100,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 20, 20, "objective"),
          sec("B", "Objektif pelbagai bentuk / respons terhad", ["OPB", "SRT"], 5, 20, "subjective"),
          sec("C", "Subjektif", ["SRT", "SRTb"], 6, 60, "subjective")
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "sains", source: M + " (Sains Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 120, marks: 100,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 20, 20, "objective"),
          sec("B", "Objektif pelbagai bentuk / respons terhad", ["OPB", "SRT"], 5, 20, "subjective"),
          sec("C", "Subjektif", ["SRT", "SRTb"], 6, 60, "subjective")
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "sejarah", source: M + " (Sejarah Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 120, marks: 80,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 20, 20, "objective"),
          sec("B", "Subjektif respons terhad", ["SRT"], 4, 40, "subjective"),
          sec("C", "Subjektif respons terbuka", ["SRTb"], 2, 20, "subjective", { choose: 1, of: 2 })
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "geografi", source: M + " (Geografi Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 120, marks: 80,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 20, 20, "objective"),
          sec("B", "Subjektif respons terhad", ["SRT"], 3, 40, "subjective"),
          sec("C", "Subjektif respons terbuka", ["SRTb"], 4, 20, "subjective", { choose: 2, of: 4 })
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "pi", source: M + " (Pendidikan Islam Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 120, marks: 100,
        sections: [
          sec("A", "Semua bidang", ["OAP"], 20, 20, "objective"),
          sec("B", "Al-Quran & Hadis / Jawi", ["OPB", "SRT"], 2, 20, "subjective"),
          sec("C", "Akidah", ["OPB", "SRT"], 1, 20, "subjective"),
          sec("D", "Fikah", ["OPB", "SRT"], 1, 20, "subjective"),
          sec("E", "Sirah, Tamadun Islam & Akhlak Islamiah", ["OPB", "SRT"], 1, 20, "subjective")
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "rbt", source: M + " (Reka Bentuk dan Teknologi Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 90, marks: 70,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 10, 10, "objective"),
          sec("B", "Objektif pelbagai bentuk", ["OPB"], 10, 40, "objective"),
          sec("C", "Subjektif", ["SUBJ"], 2, 20, "subjective")
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "ask", source: M + " (Asas Sains Komputer Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Ujian Bertulis", minutes: 90, marks: 70,
        sections: [
          sec("A", "Objektif aneka pilihan", ["OAP"], 10, 10, "objective"),
          sec("B", "Objektif pelbagai bentuk", ["OPB"], 10, 40, "objective"),
          sec("C", "Subjektif", ["SUBJ"], 2, 20, "subjective")
        ]
      }]
    },
    {
      gradeId: "t2", subjectId: "arab", source: M + " (Bahasa Arab Tingkatan 1,2,3)",
      papers: [{
        id: "k1", name: "Pemahaman & Penulisan", minutes: 120, marks: 100,
        sections: [
          sec("A", "Tatabahasa", ["OAP"], 20, 20, "objective"),
          sec("B", "Tatabahasa", ["OPB", "SRT"], 15, 30, "subjective"),
          sec("C", "Pemahaman", ["OPB", "SRT"], 7, 15, "subjective"),
          sec("D", "Pemindahan maklumat", ["SRTb"], 1, 15, "subjective"),
          sec("E", "Penulisan karangan", ["SRTb"], 1, 20, "subjective")
        ]
      }]
    }
  ];

  // Subjects that national UASA does NOT cover (no official national paper format): school-set only.
  const NO_NATIONAL_FORMAT = {
    d6: ["pi", "rbt", "psv", "pjpk"],
    t2: ["psv", "pjpk"]
  };

  function find(gradeId, subjectId) {
    return BLUEPRINTS.find((b) => b.gradeId === gradeId && b.subjectId === subjectId) || null;
  }

  /** Objective share of a paper (marks), used to decide whether a grade may be shown honestly. */
  function objectiveShare(paper) {
    const obj = paper.sections.filter((s) => s.kind === "objective").reduce((a, s) => a + s.marks, 0);
    return paper.marks > 0 ? obj / paper.marks : 0;
  }

  return { BLUEPRINTS, NO_NATIONAL_FORMAT, find, objectiveShare };
});
