/**
 * Web Audio API arcade sound effects (zero external audio files needed)
 */
(function (global) {
  const App = (global.App = global.App || {});

  let ctx = null;
  let muted = false;

  function getCtx() {
    if (muted) return null;
    if (!ctx) {
      const AudioCtx = global.AudioContext || global.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function tone(freq, duration, type = "sine", vol = 0.12, delay = 0) {
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  App.Sound = {
    isMuted: () => muted,
    setMuted: (m) => {
      muted = !!m;
    },
    vibrate: (pattern = 18) => {
      if (muted) return;
      try {
        if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
          navigator.vibrate(pattern);
        }
      } catch (e) {
        // Ignore haptics errors on unsupported devices
      }
    },
    click: () => tone(520, 0.05, "triangle", 0.06),
    tileTap: () => {
      tone(640, 0.045, "sine", 0.07, 0);
      tone(760, 0.04, "triangle", 0.05, 0.02);
    },
    swipe: () => {
      tone(380, 0.06, "sine", 0.07, 0);
      tone(580, 0.07, "triangle", 0.06, 0.03);
    },
    match: () => {
      tone(587.33, 0.07, "triangle", 0.09, 0);
      tone(880, 0.11, "triangle", 0.1, 0.05);
    },
    powerup: () => {
      tone(523.25, 0.07, "sine", 0.1, 0);
      tone(659.25, 0.07, "sine", 0.1, 0.06);
      tone(987.77, 0.14, "triangle", 0.11, 0.12);
    },
    streakUp: (streak = 3) => {
      const base = 523.25 + Math.min(streak, 8) * 30;
      tone(base, 0.08, "triangle", 0.1, 0);
      tone(base * 1.25, 0.08, "triangle", 0.1, 0.07);
      tone(base * 1.5, 0.16, "triangle", 0.12, 0.14);
    },
    bossHit: () => {
      tone(160, 0.1, "sawtooth", 0.11, 0);
      tone(320, 0.12, "square", 0.08, 0.05);
      tone(880, 0.14, "triangle", 0.1, 0.1);
    },
    shoot: () => {
      tone(880, 0.08, "sawtooth", 0.08, 0);
      tone(320, 0.09, "square", 0.06, 0.04);
    },
    smash: () => {
      tone(220, 0.08, "square", 0.1, 0);
      tone(660, 0.1, "triangle", 0.1, 0.05);
    },
    unlock: () => {
      tone(523.25, 0.08, "sine", 0.1, 0);
      tone(659.25, 0.08, "sine", 0.1, 0.07);
      tone(783.99, 0.14, "sine", 0.12, 0.14);
    },
    coin: () => {
      tone(988, 0.06, "sine", 0.08, 0);
      tone(1319, 0.09, "sine", 0.09, 0.05);
    },
    correct: (streak = 1) => {
      const boost = Math.min(streak - 1, 6) * 45;
      tone(523.25 + boost, 0.09, "triangle", 0.12, 0);
      tone(659.25 + boost, 0.14, "triangle", 0.13, 0.08);
    },
    wrong: () => {
      tone(240, 0.14, "sawtooth", 0.1, 0);
      tone(175, 0.2, "sawtooth", 0.1, 0.12);
    },
    finish: (passed) => {
      if (passed) {
        tone(523.25, 0.1, "triangle", 0.12, 0);
        tone(659.25, 0.1, "triangle", 0.12, 0.1);
        tone(783.99, 0.1, "triangle", 0.12, 0.2);
        tone(1046.5, 0.28, "triangle", 0.15, 0.3);
      } else {
        tone(392, 0.15, "sine", 0.1, 0);
        tone(349.23, 0.25, "sine", 0.1, 0.15);
      }
    }
  };
})(window);
