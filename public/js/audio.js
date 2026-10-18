// All sounds are synthesised with WebAudio (no files to download -> instant load, zero lag).
let ctx = null, master = null, sfxG = null, musG = null, noiseBuf = null;
let muted = false, musicOn = true, timer = null, musicState = null;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9; master.connect(ctx.destination);
  sfxG = ctx.createGain(); sfxG.gain.value = 0.7; sfxG.connect(master);
  musG = ctx.createGain(); musG.gain.value = 0.22; musG.connect(master);
  const len = ctx.sampleRate;
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
}
export function setMuted(m) { muted = m; if (master) master.gain.setTargetAtTime(m ? 0 : 0.9, ctx.currentTime, 0.05); }
export function isMuted() { return muted; }

function tone(type, f0, f1, dur, vol = 0.3, delay = 0, dest = sfxG) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, vol, ftype, f0, f1, delay = 0, q = 1) {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  const f = ctx.createBiquadFilter(); f.type = ftype; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(sfxG); s.start(t); s.stop(t + dur + 0.05);
}

const rnd = (a, b) => a + Math.random() * (b - a);
export const sfx = {
  click() { tone('triangle', 520, 780, 0.09, 0.25); },
  roar(big = 1) { tone('sawtooth', big ? 180 : 260, big ? 60 : 110, 0.5, 0.22); tone('square', big ? 120 : 200, 50, 0.4, 0.12, 0.03); noise(0.4, 0.14, 'lowpass', 800, 200); },
  tame() { tone('triangle', 520, 780, 0.12, 0.25); tone('triangle', 660, 990, 0.12, 0.25, 0.1); tone('triangle', 880, 1320, 0.2, 0.25, 0.2); },
  select() { tone('triangle', 660, 990, 0.12, 0.28); tone('sine', 990, 1320, 0.1, 0.18, 0.06); },
  back() { tone('triangle', 520, 330, 0.12, 0.22); },
  jump() { tone('sine', 280, 640, 0.17, 0.3); tone('triangle', 420, 880, 0.12, 0.08, 0.02); },
  land(s = 10) { const v = Math.min(0.5, 0.12 + s * 0.012); tone('sine', 140, 60, 0.12, v); noise(0.09, v * 0.7, 'lowpass', 900, 200); },
  step() { noise(0.045, 0.07, 'bandpass', rnd(500, 800), 300, 0, 2); },
  dive() { noise(0.3, 0.22, 'bandpass', 500, 2200, 0, 1.5); tone('sine', 300, 520, 0.2, 0.15); },
  bounce() { tone('sine', 180, 920, 0.3, 0.38); tone('triangle', 360, 1400, 0.22, 0.12, 0.03); },
  pickup() { tone('triangle', 520, 1040, 0.18, 0.3); tone('sine', 780, 1560, 0.24, 0.2, 0.07); tone('sine', 1170, 2340, 0.2, 0.12, 0.14); },
  swing() { noise(0.24, 0.3, 'bandpass', 500, 2800, 0, 1.2); tone('sine', 380, 160, 0.16, 0.08); },
  shot() { tone('sawtooth', 900, 140, 0.11, 0.3); noise(0.09, 0.4, 'highpass', 2500, 900); tone('square', 200, 60, 0.12, 0.18); },
  bonk() { tone('square', 190, 55, 0.2, 0.42); noise(0.14, 0.45, 'lowpass', 3000, 300); tone('triangle', 820, 220, 0.22, 0.22, 0.02); },
  hit() { tone('sawtooth', 420, 70, 0.28, 0.28); noise(0.18, 0.3, 'lowpass', 1800, 150); tone('square', 220, 110, 0.15, 0.12, 0.04); },
  door() { tone('square', 150, 90, 0.07, 0.3); tone('square', 110, 70, 0.1, 0.25, 0.09); noise(0.05, 0.18, 'lowpass', 2000, 400); },
  honk() { tone('square', 392, 392, 0.34, 0.2); tone('square', 494, 494, 0.34, 0.2); },
  honkBig() { tone('sawtooth', 130, 128, 0.95, 0.3); tone('square', 164, 162, 0.95, 0.24); tone('sawtooth', 196, 194, 0.95, 0.22); tone('square', 262, 258, 0.95, 0.14); noise(0.12, 0.12, 'lowpass', 900, 300); },
  skid() { noise(0.18, 0.1, 'bandpass', 2600, 1800, 0, 3); },
  vroom() { tone('sawtooth', 70, 160, 0.35, 0.2); tone('sawtooth', 90, 210, 0.3, 0.1, 0.05); },
  splash() { noise(0.6, 0.45, 'bandpass', 1800, 260, 0, 0.8); noise(0.3, 0.2, 'highpass', 2400, 900, 0.05); tone('sine', 220, 80, 0.3, 0.12); },
  respawn() { noise(0.4, 0.22, 'highpass', 400, 4000, 0, 0.7); tone('sine', 300, 900, 0.3, 0.15); },
  checkpoint() { tone('sine', 660, 660, 0.14, 0.3); tone('sine', 990, 990, 0.25, 0.3, 0.1); tone('triangle', 1320, 1320, 0.3, 0.1, 0.18); },
  tick() { tone('sine', 660, 660, 0.14, 0.4); },
  go() { [523, 659, 784].forEach((f) => tone('square', f, f, 0.5, 0.14)); tone('sine', 1046, 1046, 0.6, 0.3); },
  join() { tone('triangle', 520, 520, 0.1, 0.25); tone('triangle', 780, 780, 0.14, 0.25, 0.09); },
  finish() { [523, 659, 784, 1046, 1318].forEach((f, i) => { tone('square', f, f, 0.22, 0.14, i * 0.09); tone('triangle', f * 2, f * 2, 0.3, 0.08, i * 0.09); }); },
  win() { const n = [523, 659, 784, 659, 784, 1046, 1318]; n.forEach((f, i) => { tone('square', f, f, 0.24, 0.13, i * 0.12); tone('triangle', f / 2, f / 2, 0.3, 0.12, i * 0.12); }); },
  lose() { [392, 349, 311, 262].forEach((f, i) => tone('triangle', f, f * 0.97, 0.3, 0.22, i * 0.17)); },
  warn() { tone('square', 880, 880, 0.08, 0.14); },
};

// ------------------------------------------------------------------ music (generative, per level)
const SCALES = {
  major: [0, 2, 4, 7, 9, 12, 14, 16], minor: [0, 3, 5, 7, 10, 12, 15, 17], lydian: [0, 2, 4, 6, 7, 9, 11, 12], dorian: [0, 2, 3, 5, 7, 9, 10, 12],
};
const THEMES = [
  { bpm: 112, root: 65, scale: 'lydian', prog: [0, 5, 3, 4], lead: 'triangle', bright: 3400 },  // fun map (relaxed)
  { bpm: 124, root: 57, scale: 'dorian', prog: [0, 3, 4, 0], lead: 'triangle', bright: 3000 },  // jungle (bouncy)
  { bpm: 128, root: 62, scale: 'lydian', prog: [0, 4, 5, 3], lead: 'triangle', bright: 3400 },  // jungle quest (adventure)
  { bpm: 132, root: 64, scale: 'major', prog: [0, 4, 3, 4], lead: 'triangle', bright: 3400 },  // small room (bat fight)
  { bpm: 138, root: 67, scale: 'major', prog: [0, 5, 3, 4], lead: 'triangle', bright: 3800 },  // maze (candy race)
  { bpm: 126, root: 59, scale: 'minor', prog: [0, 5, 3, 4], lead: 'triangle', bright: 3200 },  // annoying maze
  { bpm: 130, root: 55, scale: 'dorian', prog: [0, 5, 3, 4], lead: 'triangle', bright: 3300 },  // jungle hunt
  { bpm: 104, root: 57, scale: 'dorian', prog: [0, 5, 3, 4], lead: 'sawtooth', bright: 2400 },  // haris city
  { bpm: 120, root: 60, scale: 'major', prog: [0, 3, 4, 0], lead: 'triangle', bright: 3000 },  // menu
];
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

function musicTone(type, f, t, dur, vol, cutoff) {
  const o = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter();
  o.type = type; o.frequency.setValueAtTime(f, t);
  fl.type = 'lowpass'; fl.frequency.value = cutoff;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(fl); fl.connect(g); g.connect(musG); o.start(t); o.stop(t + dur + 0.05);
}
function musicHat(t, vol) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
  const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  s.connect(f); f.connect(g); g.connect(musG); s.start(t); s.stop(t + 0.06);
}
function musicKick(t) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
  g.gain.setValueAtTime(0.55, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
  o.connect(g); g.connect(musG); o.start(t); o.stop(t + 0.2);
}

export function startMusic(levelIdx) {
  stopMusic();
  if (!ctx) return;
  const th = THEMES[levelIdx] || THEMES[THEMES.length - 1];
  const sc = SCALES[th.scale];
  const step = 60 / th.bpm / 4;
  // deterministic melody patterns (2 bars of 16ths per chord), seeded per theme so it is catchy not random noise
  let seed = 1234 + levelIdx * 77;
  const r = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const pat = [];
  for (let c = 0; c < 4; c++) {
    const bar = [];
    for (let i = 0; i < 16; i++) bar.push(i % 4 === 0 || r() < 0.38 ? Math.floor(r() * 6) : -1);
    pat.push(bar);
  }
  musicState = { i: 0, next: ctx.currentTime + 0.1 };
  const tick = () => {
    if (!ctx || !musicState) return;
    while (musicState.next < ctx.currentTime + 0.18) {
      const i = musicState.i, beat = i % 16, bar = Math.floor(i / 16) % 4, chord = th.prog[bar] || 0, t = musicState.next;
      const rootNote = th.root + sc[chord % sc.length] - 12;
      if (beat % 4 === 0) musicKick(t);
      if (beat % 2 === 0) musicHat(t, beat % 4 === 2 ? 0.1 : 0.05);
      if (beat % 4 === 0 || beat % 8 === 6) musicTone('triangle', mtof(rootNote - 12), t, step * 3.2, 0.4, 600);
      if (beat === 0) { // pad chord
        [0, 2, 4].forEach((k) => musicTone('sine', mtof(th.root + sc[(chord + k) % sc.length]), t, step * 15, 0.07, 1400));
      }
      const n = pat[bar][beat];
      if (n >= 0) musicTone(th.lead, mtof(th.root + 12 + sc[(n + chord) % sc.length]), t, step * 1.8, 0.11, th.bright);
      musicState.next += step; musicState.i++;
    }
  };
  timer = setInterval(tick, 40);
  tick();
}
export function stopMusic() { if (timer) clearInterval(timer); timer = null; musicState = null; }
export function setMusicVolume(v) { if (musG) musG.gain.setTargetAtTime(v, ctx.currentTime, 0.1); }
export function duckMusic(d) { if (musG) musG.gain.setTargetAtTime(d ? 0.08 : 0.22, ctx.currentTime, 0.2); }
export const audioReady = () => !!ctx;

// ---- car engine: two detuned saw oscillators + low-pass, pitch follows speed
let eng = null;
export function engineStart() {
  if (!ctx || eng) return;
  const g = ctx.createGain(); g.gain.value = 0.0001; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
  const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(); o1.type = 'sawtooth'; o2.type = 'square'; o1.frequency.value = 60; o2.frequency.value = 30;
  o1.connect(f); o2.connect(f); f.connect(g); g.connect(sfxG); o1.start(); o2.start();
  eng = { g, f, o1, o2 };
}
export function engineSet(speed01, gas) {
  if (!ctx || !eng) return; const t = ctx.currentTime, k = Math.max(0, Math.min(1, speed01));
  const hz = 52 + k * 150 + (gas ? 16 : 0);
  eng.o1.frequency.setTargetAtTime(hz, t, 0.08); eng.o2.frequency.setTargetAtTime(hz * 0.5, t, 0.08);
  eng.f.frequency.setTargetAtTime(380 + k * 900 + (gas ? 300 : 0), t, 0.1);
  eng.g.gain.setTargetAtTime(0.05 + k * 0.07 + (gas ? 0.04 : 0), t, 0.1);
}
export function engineStop() {
  if (!eng) return; const e = eng; eng = null;
  try { e.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.05); setTimeout(() => { try { e.o1.stop(); e.o2.stop(); } catch { /* noop */ } }, 300); } catch { /* noop */ }
}
