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
    click: () => tone(520, 0.05, "triangle", 0.06),
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
