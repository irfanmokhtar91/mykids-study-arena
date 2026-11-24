/**
 * Animated Inline SVG Mascot System (`App.Mascot`)
 * Zero external image dependencies — works 100% offline.
 * Adapts companion per kid grade:
 * - d6: Koko (Fox)
 * - t2: Nova (Cyber-Bot)
 * - t4: Volt (STEM Owl-Orb)
 */
(function (global) {
  const App = (global.App = global.App || {});

  const MASCOT_INFO = {
    d6: {
      id: "d6",
      name: "Koko",
      title: "Rakan Pintar KSSR",
      tagline: "Jom kumpul bintang & takluk setiap bab!",
      color: "#10b981",
      accent: "#f97316"
    },
    t2: {
      id: "t2",
      name: "Nova",
      title: "Bot Arena KSSM",
      tagline: "Mod pantas diaktifkan — kekalkan streak kamu!",
      color: "#2563eb",
      accent: "#f43f5e"
    },
    t4: {
      id: "t4",
      name: "Volt",
      title: "Mentor STEM SPM",
      tagline: "Kuasai konsep, formula & teknik pantas.",
      color: "#7c3aed",
      accent: "#0d9488"
    }
  };

  function getInfo(gradeId) {
    return MASCOT_INFO[gradeId] || MASCOT_INFO.d6;
  }

  function renderKoko(mood, size) {
    const isHappy = mood === "happy" || mood === "cheering" || mood === "celebrate";
    const isSad = mood === "encouraging";
    const eyes = isHappy
      ? `<path d="M27 42 Q31 37 35 42" stroke="#18181b" stroke-width="3" stroke-linecap="round" fill="none"/>
         <path d="M45 42 Q49 37 53 42" stroke="#18181b" stroke-width="3" stroke-linecap="round" fill="none"/>`
      : isSad
      ? `<circle cx="31" cy="42" r="3.4" fill="#18181b"/><circle cx="49" cy="42" r="3.4" fill="#18181b"/>
         <path d="M26 36 L35 39" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>
         <path d="M54 36 L45 39" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>`
      : `<circle cx="31" cy="41" r="3.8" fill="#18181b"/><circle cx="32.2" cy="39.5" r="1.3" fill="#fff"/>
         <circle cx="49" cy="41" r="3.8" fill="#18181b"/><circle cx="50.2" cy="39.5" r="1.3" fill="#fff"/>`;

    const mouth = isHappy
      ? `<path d="M35 52 Q40 59 45 52 Z" fill="#18181b"/><path d="M37 55 Q40 58 43 55" fill="#fb7185"/>`
      : isSad
      ? `<path d="M36 55 Q40 52 44 55" stroke="#18181b" stroke-width="2.5" stroke-linecap="round" fill="none"/>`
      : `<path d="M36 52 Q40 56 44 52" stroke="#18181b" stroke-width="2.5" stroke-linecap="round" fill="none"/>`;

    const sparkles =
      mood === "cheering" || mood === "celebrate"
        ? `<text x="64" y="20" font-size="13">✨</text><text x="4" y="24" font-size="12">⭐</text>`
        : "";

    return `
      <svg class="mascot-svg mood-${mood}" width="${size}" height="${size}" viewBox="0 0 80 80" aria-label="Koko">
        <circle cx="40" cy="42" r="34" fill="#d1fae5" stroke="#18181b" stroke-width="2.5"/>
        <polygon points="18,34 15,11 33,24" fill="#f97316" stroke="#18181b" stroke-width="2.4" stroke-linejoin="round"/>
        <polygon points="62,34 65,11 47,24" fill="#f97316" stroke="#18181b" stroke-width="2.4" stroke-linejoin="round"/>
        <polygon points="20,29 19,17 29,24" fill="#fde68a"/>
        <polygon points="60,29 61,17 51,24" fill="#fde68a"/>
        <ellipse cx="40" cy="45" rx="22" ry="20" fill="#fb923c" stroke="#18181b" stroke-width="2.4"/>
        <path d="M19 46 Q29 62 40 62 Q51 62 61 46 Q51 44 40 51 Q29 44 19 46 Z" fill="#fff7ed"/>
        <circle cx="24" cy="48" r="3.2" fill="#fda4af" opacity="0.75"/>
        <circle cx="56" cy="48" r="3.2" fill="#fda4af" opacity="0.75"/>
        ${eyes}
        <polygon points="37,47 43,47 40,51" fill="#18181b"/>
        ${mouth}
        ${sparkles}
      </svg>`;
  }

  function renderNova(mood, size) {
    const isHappy = mood === "happy" || mood === "cheering" || mood === "celebrate";
    const isSad = mood === "encouraging";
    const eyeFill = isSad ? "#fbbf24" : "#38bdf8";
    const eyes = isHappy
      ? `<path d="M26 40 L31 35 L36 40" stroke="#38bdf8" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
         <path d="M44 40 L49 35 L54 40" stroke="#38bdf8" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`
      : isSad
      ? `<rect x="27" y="37" width="8" height="4" rx="2" fill="${eyeFill}"/>
         <rect x="45" y="37" width="8" height="4" rx="2" fill="${eyeFill}"/>`
      : `<circle cx="31" cy="39" r="4.2" fill="${eyeFill}"/><circle cx="32.5" cy="37.5" r="1.4" fill="#fff"/>
         <circle cx="49" cy="39" r="4.2" fill="${eyeFill}"/><circle cx="50.5" cy="37.5" r="1.4" fill="#fff"/>`;

    const mouth = isHappy
      ? `<path d="M33 48 Q40 55 47 48" stroke="#34d399" stroke-width="3" stroke-linecap="round" fill="none"/>`
      : isSad
      ? `<path d="M34 50 Q40 47 46 50" stroke="#fbbf24" stroke-width="2.6" stroke-linecap="round" fill="none"/>`
      : `<rect x="34" y="48" width="12" height="3.2" rx="1.6" fill="#38bdf8"/>`;

    const sparkles =
      mood === "cheering" || mood === "celebrate"
        ? `<text x="64" y="20" font-size="13">⚡</text><text x="4" y="22" font-size="12">✨</text>`
        : "";

    return `
      <svg class="mascot-svg mood-${mood}" width="${size}" height="${size}" viewBox="0 0 80 80" aria-label="Nova">
        <circle cx="40" cy="42" r="34" fill="#dbeafe" stroke="#18181b" stroke-width="2.5"/>
        <line x1="40" y1="20" x2="40" y2="10" stroke="#18181b" stroke-width="2.8" stroke-linecap="round"/>
        <circle cx="40" cy="9" r="4.5" fill="#f43f5e" stroke="#18181b" stroke-width="2"/>
        <rect x="13" y="34" width="6" height="16" rx="3" fill="#2563eb" stroke="#18181b" stroke-width="2.2"/>
        <rect x="61" y="34" width="6" height="16" rx="3" fill="#2563eb" stroke="#18181b" stroke-width="2.2"/>
        <rect x="18" y="20" width="44" height="42" rx="14" fill="#ffffff" stroke="#18181b" stroke-width="2.5"/>
        <rect x="23" y="27" width="34" height="28" rx="9" fill="#0f172a"/>
        ${eyes}
        ${mouth}
        ${sparkles}
      </svg>`;
  }

  function renderVolt(mood, size) {
    const isHappy = mood === "happy" || mood === "cheering" || mood === "celebrate";
    const isSad = mood === "encouraging";
    const pupil = isHappy
      ? `<path d="M27 40 Q31 36 35 40" stroke="#18181b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
         <path d="M45 40 Q49 36 53 40" stroke="#18181b" stroke-width="2.8" stroke-linecap="round" fill="none"/>`
      : `<circle cx="31" cy="40" r="3.4" fill="#18181b"/><circle cx="32" cy="38.8" r="1.2" fill="#fff"/>
         <circle cx="49" cy="40" r="3.4" fill="#18181b"/><circle cx="50" cy="38.8" r="1.2" fill="#fff"/>`;

    const brow = isSad
      ? `<path d="M25 32 L35 35" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>
         <path d="M55 32 L45 35" stroke="#18181b" stroke-width="2.4" stroke-linecap="round"/>`
      : "";

    const sparkles =
      mood === "cheering" || mood === "celebrate"
        ? `<text x="64" y="20" font-size="13">⚛️</text><text x="4" y="22" font-size="12">✨</text>`
        : "";

    return `
      <svg class="mascot-svg mood-${mood}" width="${size}" height="${size}" viewBox="0 0 80 80" aria-label="Volt">
        <circle cx="40" cy="42" r="34" fill="#ede9fe" stroke="#18181b" stroke-width="2.5"/>
        <polygon points="21,28 15,14 31,21" fill="#7c3aed" stroke="#18181b" stroke-width="2.3" stroke-linejoin="round"/>
        <polygon points="59,28 65,14 49,21" fill="#7c3aed" stroke="#18181b" stroke-width="2.3" stroke-linejoin="round"/>
        <circle cx="40" cy="43" r="22" fill="#8b5cf6" stroke="#18181b" stroke-width="2.5"/>
        <ellipse cx="40" cy="54" rx="13" ry="9" fill="#ddd6fe"/>
        <circle cx="31" cy="40" r="8.5" fill="#ffffff" stroke="#18181b" stroke-width="2.3"/>
        <circle cx="49" cy="40" r="8.5" fill="#ffffff" stroke="#18181b" stroke-width="2.3"/>
        <line x1="39.5" y1="40" x2="40.5" y2="40" stroke="#18181b" stroke-width="2.4"/>
        ${pupil}
        ${brow}
        <polygon points="37,46 43,46 40,51" fill="#f59e0b" stroke="#18181b" stroke-width="1.8" stroke-linejoin="round"/>
        ${sparkles}
      </svg>`;
  }

  function render(gradeId, mood = "idle", size = 72) {
    if (gradeId === "t2") return renderNova(mood, size);
    if (gradeId === "t4") return renderVolt(mood, size);
    return renderKoko(mood, size);
  }

  App.Mascot = {
    getInfo,
    render
  };
})(window);
