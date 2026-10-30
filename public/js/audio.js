// All sounds are synthesised with WebAudio (no files to download -> instant load, zero lag).
let ctx = null, master = null, sfxG = null, musG = null, noiseBuf = null;
let sfxVol = 1, musVol = 1, revIn = null;
try { const v = JSON.parse(localStorage.getItem('pgta_vol') || 'null'); if (v) { sfxVol = Math.max(0, Math.min(1, +v.s)); musVol = Math.max(0, Math.min(1, +v.m)); if (!isFinite(sfxVol)) sfxVol = 1; if (!isFinite(musVol)) musVol = 1; } } catch (e) { /* defaults */ }
const MUS = 0.22, SFX = 0.7;
let muted = false, musicOn = true, timer = null, musicState = null;

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  { // a heavy scene (a big explosion + fire + many players) can stall the page for a moment and the browser then suspends / 'interrupts' the audio for good: bring it back on its own and on the next touch / key
    const wake = () => { try { if (ctx && ctx.state !== 'running') ctx.resume(); } catch { /* noop */ } };
    ctx.onstatechange = wake; setInterval(wake, 1500); for (const ev of ['pointerdown', 'touchstart', 'keydown']) window.addEventListener(ev, wake, { passive: true });
    setInterval(() => { if (active > 0 && ctx.state === 'running' && active === lastActive) { stuckN++; if (stuckN > 20) { active = 0; remActive = 0; stuckN = 0; } } else stuckN = 0; lastActive = active; }, 1000); }
  setTimeout(loadBank, 0);
  master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9;
  { // a brick-wall limiter in front of the speakers: a pile of loud sounds (several players firing automatic guns) used to add up past full scale and CRUSH everything, including my own shots
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -4; lim.knee.value = 3; lim.ratio.value = 14; lim.attack.value = 0.002; lim.release.value = 0.12; master.connect(lim); lim.connect(ctx.destination); }
  sfxG = ctx.createGain(); sfxG.gain.value = SFX * sfxVol; sfxG.connect(master);
  musG = ctx.createGain(); musG.gain.value = MUS * musVol; musG.connect(master);
  { // a short room tail for the gunshots: decaying noise impulse
    const sr = ctx.sampleRate, n = Math.floor(sr * 0.7), ib = ctx.createBuffer(2, n, sr);
    for (let c = 0; c < 2; c++) { const d = ib.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3.2); }
    const cv = ctx.createConvolver(); cv.buffer = ib; revIn = ctx.createGain(); revIn.gain.value = 1; const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600; revIn.connect(cv); cv.connect(lp); lp.connect(sfxG); }
  const len = ctx.sampleRate;
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
}
let commentary = true;
export function setCommentary(v) { commentary = !!v; }   // the Punjabi commentary switch in Settings (weapon names, punch shouts and every voice line added later go through say())
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

import { av } from './assetver.js';
const rnd = (a, b) => a + Math.random() * (b - a);

// ------------------------------------------------------------------ recorded samples (CC0, small mp3 in /audio). The synth versions below are the fallback until they have loaded.
const SAMPLES = ['w_fist', 'w_punch1', 'w_punch2', 'w_punch3', 'w_bat', 'w_pistol', 'w_ak', 'w_sniper', 'u_zg0', 'u_zg1', 'u_zg2', 'u_zbite', 'u_zdie', 'u_grunt', 'u_death', 'u_scared0', 'u_scared1', 'u_scared2', 'u_pistol', 'u_sniper', 'u_ak1', 'u_ak2', 'u_boom', 'u_thud', 'u_woosh', 'glass', 'metal1', 'metal2', 'pbody', 'abody', 'pistol', 'ak', 'whoosh', 'swish', 'hit1', 'hit2', 'jump1', 'jump2', 'scream1', 'scream2', 'death', 'pain',
  // vehicles + world (real recordings, see tools/build_audio.sh)
  'eng_car', 'eng_moto', 'eng_v8', 'eng_diesel', 'eng_tractor', 'eng_boat', 'skid', 'crash0', 'mh0', 'mh1', 'mh2', 'mm0', 'mm1', 'mm2', 'ml0', 'ml1', 'ml2', 'gl0', 'gl1', 'th0', 'th1', 'th2',
  'fsc0', 'fsc1', 'fsc2', 'fsc3', 'fsg0', 'fsg1', 'fsg2', 'fsg3', 'fsw0', 'fsw1', 'fsw2', 'fsw3',
  'spl_big0', 'spl_big1', 'spl_med0', 'spl_med1', 'spl_sm0', 'spl_sm1', 'spl_sm2', 'spl_sm3', 'water_in', 'water_out', 'sea_loop', 'lap_loop', 'rain_loop', 'city_loop',
  'ui_click', 'ui_select', 'ui_back', 'ui_tick', 'ui_ok', 'ui_ok2', 'ui_open', 'ui_warn', 'ui_bong', 'pickup', 'cash', 'respawn', 'bouncepad', 'noammo', 'boom0', 'boom1', 'boom2', 'win', 'fin', 'door_o', 'door_c', 'latch'];
const bank = {};
let bankLeft = 1e9, bankStarted = false, menuBuf = null, menuSrc = null, menuG = null, menuWant = false;
function decode(url, cb, fin) {
  try {
    fetch(av(url)).then((r) => r.arrayBuffer()).then((ab) => new Promise((res, rej) => { const p = ctx.decodeAudioData(ab, res, rej); if (p && p.then) p.then(res, rej); })).then(cb).catch(() => { /* keep the synth fallback */ }).then(() => { if (fin) fin(); });
  } catch (e) { /* noop */ }
}
function loadBank() {
  if (bankStarted || !ctx) return; bankStarted = true;
  bankLeft = SAMPLES.length; for (const n of SAMPLES) decode('audio/' + n + '.mp3', (b) => { bank[n] = b; }, () => { bankLeft--; });
}
// v220: resolves when every recorded sample is decoded (or after maxMs): the loading screen waits for it, so no sound is missing during the match
export function bankReady(maxMs = 20000) { return new Promise((res) => { if (!bankStarted) return res(); const t0 = performance.now(), iv = setInterval(() => { if (bankLeft <= 0 || performance.now() - t0 > maxMs) { clearInterval(iv); res(); } }, 120); }); }
// play a recorded sample. pan -1..1 (a far-away sound is quieter and duller)
export function play(name, vol = 1, rate = 1, delay = 0, pan = 0, lp = 0, rev = 0) {
  const b = bank[name]; if (!ctx || !b) return false;
  const s = ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate;
  const g = ctx.createGain(); g.gain.value = vol; let n = g;
  if (lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp; s.connect(f); f.connect(g); } else s.connect(g);
  if (rev && revIn) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(revIn); }
  if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); n = p; }
  if (active > 70 && vol < 0.9) return false;   // too many voices at once: the small ones are dropped, never the big ones
  n.connect(bus || sfxG); active++; s.onended = () => { active--; }; s.start(ctx.currentTime + delay); return true;
}
// other players' gunshots go through their own bus: only a few at a time and never closer together than a few ms, so a crowd of shooters can not bury MY sounds (mine always play)
let lastActive = 0, stuckN = 0, boomAt = -1e9, active = 0, remG = null, remActive = 0; const remLast = {};
let bus = null;
export function playRemote(name, vol, rate, lp = 5200) {
  const b = bank[name]; if (!ctx || !b || remActive >= 3 || active > 60) return false;
  const now = performance.now(); if (now - (remLast[name] || 0) < 55) return false; remLast[name] = now;
  if (!remG) { remG = ctx.createGain(); remG.gain.value = 0.62; remG.connect(sfxG); }
  bus = remG; remActive++; const ok = play(name, vol, rate, 0, 0, lp, 0); bus = null; if (!ok) { remActive--; return false; }
  setTimeout(() => { remActive = Math.max(0, remActive - 1); }, Math.min(900, b.duration * 1000));   // (counted until about the end of the sample)
  return true;
}
const pick = (a) => a[Math.floor(Math.random() * a.length)];
// a gunshot: a little pitch variation so that full-auto does not sound like one looped file
// a gunshot = the sharp crack + a low, lowpassed body (the chest thump) + a short room tail; a little random detune so full auto does not sound like one looped file
const gun = (crack, body, vol, rate, bodyRate, bodyLp, bodyVol, rev) => { const d = rnd(0.95, 1.05); if (!play(crack, vol, rate * d, 0, 0, 0, rev)) return false; play(body, vol * bodyVol, bodyRate * d, 0.004, 0, bodyLp, rev * 0.8); return true; };
let sayAt = 0, sayCur = null;
const say = (name, vol = 1) => { const b = bank[name]; if (!commentary || !b || !ctx) return false; const n = performance.now(); if (n - sayAt < (sayCur ? sayCur.dur : 0) * 1000 * 0.85) { return false; } sayAt = n; sayCur = { dur: b.duration }; return play(name, vol, 1, 0, 0, 0, 0.05); };
export const voice = {
  scream(vol = 0.8) { return play(pick(['u_scared0', 'u_scared1', 'u_scared2']), Math.min(1.2, vol * 1.2), rnd(0.92, 1.12), 0, 0, 0, 0.2) || play(pick(['scream1', 'scream2']), Math.min(1.4, vol * 1.5), rnd(0.85, 1.35), 0, 0, 0, 0.25); },
  death(vol = 0.9) { return play('u_death', Math.min(1.2, vol * 1.1), rnd(0.93, 1.07), 0, 0, 0, 0.2) || play('death', vol, rnd(0.9, 1.1)); },
  grunt(vol = 0.9) { return play('u_grunt', Math.min(1.3, vol * 1.2), rnd(0.9, 1.1), 0, 0, 0, 0.15) || play('pain', vol, rnd(0.9, 1.1)); },   // anybody (AI people, cops) taking a hit
  pain(vol = 0.8) { return play('pain', vol, rnd(0.9, 1.1)); },
  // the announcer: says the weapon's name when the player changes weapon (Haris's own recordings), and a shout for the punches of a combo
  weapon(k) { const n = { fist: 'w_fist', bat: 'w_bat', pistol: 'w_pistol', ak: 'w_ak', sniper: 'w_sniper' }[k || 'fist']; return n ? say(n) : false; },
  punch(i) { return say(['w_punch1', 'w_punch2', 'w_punch3'][Math.max(0, Math.min(2, i - 1))], 0.8); },
  // zombies (positional: vol already includes the distance, pan -1..1, and a far one is duller)
  zgroan(vol = 0.8, pan = 0, far = 0) { return play(pick(['u_zg0', 'u_zg1', 'u_zg2']), vol, rnd(0.88, 1.12), 0, pan, far > 0.3 ? 2400 + 3000 * (1 - far) : 0, 0.1); },
  zbite(vol = 0.9, pan = 0) { return play('u_zbite', vol, rnd(0.92, 1.08), 0, pan, 0, 0.05); },
  zdie(vol = 0.9, pan = 0, far = 0) { return play('u_zdie', vol, rnd(0.9, 1.1), 0, pan, far > 0.3 ? 3000 : 0, 0.1); },
};

export const sfx = {
  click() { play('ui_click', 0.7); },
  roar(big = 1) { play('boom1', 0.5, big ? 0.42 : 0.6, 0, 0, 700); },
  tame() { play('ui_ok2', 0.8); },
  select() { play('ui_select', 0.75); },
  back() { play('ui_back', 0.7); },
  jump() { /* no jump sound */ },
  land(s = 10) {   // a landing or a bump: a dull thud, a metal knock for hard ones
    const v = Math.min(1, 0.25 + s * 0.03);
    if (s > 28) { play('mh' + (Math.random() * 3 | 0), v, rnd(0.9, 1.05)); play('th0', v * 0.8, 0.55, 0.01, 0, 500); }
    else if (s > 14) { play('mm' + (Math.random() * 3 | 0), v * 0.8, rnd(0.9, 1.1)); }
    else play('th' + (Math.random() * 3 | 0), Math.min(0.7, v), rnd(0.8, 1.0), 0, 0, 1400);
  },
  // v239: a bullet that flies close past your head (a crack + short rising-falling hiss, panned to the side it passes)
  whiz(pan = 0, vol = 1) { if (!ctx || !noiseBuf) return; const t = ctx.currentTime, src = ctx.createBufferSource(); src.buffer = noiseBuf; const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 3; f.frequency.setValueAtTime(3600, t); f.frequency.exponentialRampToValueAtTime(1300, t + 0.22); const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 * vol, t + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.24); src.connect(f); f.connect(g); let n = g; if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); n = p; } n.connect(bus || sfxG); src.start(t); src.stop(t + 0.3); },
  step(kind = 'c') { const k = kind === 'g' ? 'fsg' : kind === 'w' ? 'fsw' : 'fsc'; play(k + (Math.random() * 4 | 0), rnd(0.35, 0.5), rnd(0.9, 1.1)); },
  dive() { play('swish', 0.7, rnd(0.8, 0.95)); },
  bounce() { play('bouncepad', 0.7, rnd(0.97, 1.03)); },
  pickup() { play('pickup', 0.8); },
  swing(bat = false) { if (bat ? !play(bank.u_woosh ? 'u_woosh' : 'whoosh', 0.8, rnd(0.92, 1.0), 0.04) : !play(bank.u_woosh ? 'u_woosh' : 'swish', 0.55, rnd(1.2, 1.35))) { noise(0.24, 0.3, 'bandpass', 500, 2800, 0, 1.2); } },
  cash() { play('cash', 0.8); },
  empty() { play('noammo', 0.6); },
  rshot(vol = 1, ak = false) { const n = performance.now(); if (ak) { const gap = n - (sfx._rakAt || 0); sfx._rakAt = n; return playRemote(gap > 320 ? 'u_ak2' : 'u_ak1', 0.85 * vol, rnd(0.97, 1.05)); } return playRemote('u_pistol', 0.8 * vol, rnd(0.97, 1.04)); },   // somebody else's shot (multiplayer)
  shot(pan = 0, vol = 1) { if (play('u_pistol', 0.8 * vol, rnd(0.97, 1.04), 0, pan, 0, 0.25)) return; if (gun('pistol', 'pbody', 0.85 * vol, 0.7, 0.56, 700, 0.95, 0.5)) return; noise(0.09, 0.4, 'highpass', 2500, 900); },
  sniperShot(pan = 0, vol = 1) { if (play('u_sniper', 0.95 * vol, rnd(0.98, 1.02), 0, pan, 0, 0.35)) return; if (gun('ak', 'abody', 1.5 * vol, 0.42, 0.6, 380, 0.9, 0.7)) return; sfx.shot(); },
  boom(vol = 1) {   // real explosion recordings: the blast + a slowed, low-passed copy for the rumble
    { const n = performance.now(); if (n - boomAt < 350) return; boomAt = n; }   // several blasts in one moment (a chain of burning cars) play as ONE, never a stuck loop of booms
    const v = Math.min(1.5, vol * 1.3); const i = Math.random() * 2 | 0;
    if (play('u_boom', Math.min(1.4, 0.95 * v), rnd(0.96, 1.04), 0, 0, 0, 0.5)) { play('u_boom', 0.4 * v, 0.6, 0.05, 0, 600, 0.6); return; }
    if (!play('boom' + i, 0.9 * v, rnd(0.9, 1.05), 0, 0, 0, 0.6)) return;
    play('boom2', 0.8 * v, 0.55, 0.02, 0, 700, 0.8); play('boom1', 0.5 * v, 0.7, 0.05, 0, 400, 0.6);
  },
  // AK-47: the clip is one single shot; a lone shot (or the first of a burst) rings out with its tail, shots inside a burst use the short clip so they do not smear together
  akShot(pan = 0, vol = 1) { const n = performance.now(), gap = n - (sfx._akAt || 0); sfx._akAt = n; if (play(gap > 320 ? 'u_ak2' : 'u_ak1', 0.85 * vol, rnd(0.97, 1.05), 0, pan, 0, 0.25)) return; if (gun('ak', 'abody', 1.0 * vol, 0.64, 0.5, 560, 0.85, 0.45)) return; sfx.shot(); },
  glass(v = 1) { if (!play('glass', 0.9 * v, rnd(0.9, 1.15))) noise(0.2, 0.3 * v, 'highpass', 3000, 6000); },
  metal(v = 1) { if (!play(Math.random() < 0.5 ? 'metal1' : 'metal2', 0.8 * v, rnd(0.9, 1.15))) noise(0.1, 0.3 * v, 'bandpass', 2000, 900); },
  hiss(v = 1) { noise(0.7, 0.22 * v, 'highpass', 3500, 2200, 0, 0.7); play('metal1', 0.4 * v, 0.7); },
  thud(v = 1) { if (!play('u_thud', Math.min(1, 0.9 * v), rnd(0.92, 1.05), 0, 0, 0, 0.15)) sfx.land(24); },
  bonk() { play(pick(['hit1', 'hit2']), 0.95, rnd(0.92, 1.08)); },
  hit() { play(pick(['hit1', 'hit2']), 0.8, rnd(0.85, 1.0)); },
  door() { play('door_c', 0.7, rnd(0.95, 1.05)); },
  honk() { tone('square', 392, 392, 0.34, 0.12); tone('square', 494, 494, 0.34, 0.12); },
  honkBig() { tone('sawtooth', 130, 128, 0.95, 0.3); tone('square', 164, 162, 0.95, 0.24); tone('sawtooth', 196, 194, 0.95, 0.22); noise(0.12, 0.12, 'lowpass', 900, 300); },
  skid() { /* the squeal is the looping tyre sample (skidSet) */ },
  vroom() { engineCrank(); },
  // WATER: a dive / jump in (the splash + the gulp of going under), a swimming stroke, climbing out
  splash(p = 1) { const big = p > 0.6; play('water_in', 0.9 * Math.min(1, 0.5 + p), rnd(0.95, 1.05)); play(big ? pick(['spl_big0', 'spl_big1']) : pick(['spl_med0', 'spl_med1']), 0.8, rnd(0.9, 1.1), 0.02, 0, 0, 0.2); },
  stroke(v = 1) { play(pick(['spl_sm0', 'spl_sm1', 'spl_sm2', 'spl_sm3']), 0.3 * v, rnd(0.85, 1.15), 0, rnd(-0.15, 0.15), 3800); },
  splashOut() { play('water_out', 0.8, rnd(0.95, 1.05)); play('spl_med1', 0.5, rnd(0.9, 1.05), 0.1); },
  respawn() { play('respawn', 0.7); },
  checkpoint() { play('ui_ok', 0.8); },
  tick() { play('ui_tick', 0.7); },
  go() { play('ui_bong', 0.8, 1.2); },
  join() { play('ui_open', 0.7); },
  finish() { play('fin', 0.9); },
  win() { play('win', 0.9); },
  lose() { play('ui_warn', 0.9, 0.7); play('ui_bong', 0.8, 0.6, 0.2); },
  warn() { play('ui_warn', 0.5, 1.2); },
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

function menuPlay() {
  if (!ctx || !menuWant || !menuBuf || menuSrc) return;
  menuSrc = ctx.createBufferSource(); menuSrc.buffer = menuBuf; menuSrc.loop = true;
  menuG = ctx.createGain(); menuG.gain.setValueAtTime(0.0001, ctx.currentTime); menuG.gain.linearRampToValueAtTime(1.5, ctx.currentTime + 1.5);
  menuSrc.connect(menuG); menuG.connect(musG); menuSrc.start();
}
function menuStop() {
  menuWant = false; if (!menuSrc) return;
  const s = menuSrc, g = menuG; menuSrc = null; menuG = null;
  try { g.gain.cancelScheduledValues(ctx.currentTime); g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.15); s.stop(ctx.currentTime + 0.8); } catch (e) { /* noop */ }
}
export function startMusic(levelIdx) {
  if (levelIdx === 99 && ctx) { // the main menu / lobby: a real (CC0) track instead of the synth loop
    if (menuWant) return;
    stopMusic(); menuWant = true;
    if (menuBuf) menuPlay(); else decode('audio/menu.mp3', (b) => { menuBuf = b; menuPlay(); });
    return;
  }
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
export function stopMusic() { if (timer) clearInterval(timer); timer = null; musicState = null; menuStop(); }
let ducked = false;
const saveVol = () => { try { localStorage.setItem('pgta_vol', JSON.stringify({ s: sfxVol, m: musVol })); } catch (e) { /* private window */ } };
export function setMusicVolume(v) { musVol = Math.max(0, Math.min(1, v)); saveVol(); if (musG) musG.gain.setTargetAtTime(MUS * musVol * (ducked ? 0.36 : 1), ctx.currentTime, 0.05); }
export function setSfxVolume(v) { sfxVol = Math.max(0, Math.min(1, v)); saveVol(); if (sfxG) sfxG.gain.setTargetAtTime(SFX * sfxVol, ctx.currentTime, 0.05); }
export const getVolumes = () => ({ music: musVol, sfx: sfxVol });
export function duckMusic(d) { ducked = !!d; if (musG) musG.gain.setTargetAtTime(MUS * musVol * (d ? 0.36 : 1), ctx.currentTime, 0.2); }
export const audioReady = () => !!ctx;

// ---- the arcade race cars (not the city vehicles): the same real engine recording
let eng = null;
export function engineStart() {
  if (!ctx || eng) return; const L = loopV('eng_car', 0.0001, 0.8); if (!L) return; L.g.gain.setTargetAtTime(0.18, ctx.currentTime, 0.2); eng = L;
}
export function engineSet(speed01, gas) {
  if (!ctx || !eng) return; const t = ctx.currentTime, k = Math.max(0, Math.min(1, speed01));
  eng.s.playbackRate.setTargetAtTime(0.8 + k * 1.9 + (gas ? 0.2 : 0), t, 0.1); eng.f.frequency.setTargetAtTime(900 + k * 2800 + (gas ? 1500 : 0), t, 0.1); eng.g.gain.setTargetAtTime(0.16 + k * 0.12 + (gas ? 0.08 : 0), t, 0.1);
}
export function engineStop() { if (!eng) return; const e = eng; eng = null; stopLoop(e, 0.3); }

// Spoken Hindi (browser text-to-speech). Each speaker gets their own pitch/speed so thugs sound different. Silent if the device has no speech engine.
let hiVoice = null;
export function speakHindi(text, who = 0, vol = 1) {
  try {
    const ss = window.speechSynthesis; if (!ss || muted || vol <= 0.02) return;
    if (!hiVoice) hiVoice = (ss.getVoices() || []).find((v) => /^hi/i.test(v.lang)) || null;
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = 'hi-IN'; if (hiVoice) u.voice = hiVoice;
    u.pitch = [0.6, 1.5, 0.85, 1.2][who % 4]; u.rate = [0.95, 1.1, 0.9, 1.05][who % 4]; u.volume = Math.min(1, vol);
    ss.speak(u);
  } catch { /* no speech support */ }
}
try { if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = () => { hiVoice = null; }; } catch { /* ignore */ }

// ================= CITY VEHICLE + BOAT SOUNDS =================
// Real engine recordings (steady revs) played as loops; the playback rate follows the engine revs, a low-pass opens with load, and a second layer
// (another recording at another pitch) fades in with the revs. Each vehicle has its own recipe, so a hatchback, a V8 coupe, a bus, a tractor,
// an auto-rickshaw, a motorbike and the three boats all sound different.  The boats add the hull wash and slapping waves (water loops + splashes).
let ceng = null, horn = null, skidV = null, cityAmb = null, seaV = null, swimV = null;
const PROF = {   // a / b: sample, ra / rb: playback-rate range from idle to top revs, gb: layer-b gain idle -> top, lp: low-pass idle -> open, gain, chop: [Hz, depth] amplitude chug
  car:   { a: 'eng_car', ra: [0.8, 2.5], b: 'eng_car', rb: [1.3, 3.6], gb: [0, 0.3], lp: [700, 4200], gain: 0.55 },
  hot:   { a: 'eng_car', ra: [0.95, 3.1], b: 'eng_moto', rb: [1.5, 4.2], gb: [0, 0.35], lp: [900, 5200], gain: 0.55 },
  rough: { a: 'eng_car', ra: [0.7, 2.0], b: 'eng_v8', rb: [0.9, 2.1], gb: [0.1, 0.25], lp: [500, 2800], gain: 0.6, chop: [9, 0.2] },
  suv:   { a: 'eng_v8', ra: [0.8, 2.3], b: 'eng_car', rb: [0.8, 1.9], gb: [0.15, 0.2], lp: [600, 3300], gain: 0.6 },
  v8:    { a: 'eng_v8', ra: [0.85, 2.7], b: 'eng_car', rb: [1.0, 2.6], gb: [0, 0.25], lp: [800, 4600], gain: 0.62 },
  sport: { a: 'eng_v8', ra: [1.0, 3.6], b: 'eng_moto', rb: [1.7, 4.6], gb: [0.05, 0.55], lp: [1200, 7000], gain: 0.62 },
  racer: { a: 'eng_v8', ra: [1.1, 3.9], b: 'eng_moto', rb: [2.0, 5.0], gb: [0.1, 0.65], lp: [1600, 9000], gain: 0.62 },
  bikeS: { a: 'eng_moto', ra: [1.2, 4.4], b: 'eng_car', rb: [2.4, 5.4], gb: [0, 0.3], lp: [1600, 8000], gain: 0.55 },
  bikeC: { a: 'eng_moto', ra: [0.62, 2.1], b: 'eng_v8', rb: [0.7, 1.7], gb: [0.25, 0.35], lp: [500, 3000], gain: 0.62, chop: [6, 0.28] },
  bikeD: { a: 'eng_moto', ra: [1.1, 3.5], b: 'eng_car', rb: [2.0, 4.4], gb: [0, 0.35], lp: [1500, 7000], gain: 0.55, chop: [18, 0.15] },
  rick:  { a: 'eng_moto', ra: [0.85, 2.4], b: 'eng_boat', rb: [1.2, 3.0], gb: [0.2, 0.3], lp: [900, 3800], gain: 0.62, chop: [24, 0.38] },
  tractor: { a: 'eng_tractor', ra: [0.82, 1.5], b: 'eng_tractor', rb: [1.25, 2.1], gb: [0, 0.22], lp: [700, 3400], gain: 0.95 },   // the real small-tractor recording (4 s seamless loop)
  truck: { a: 'eng_diesel', ra: [0.9, 2.2], b: 'eng_v8', rb: [0.6, 1.5], gb: [0.1, 0.3], lp: [450, 2200], gain: 0.8, chop: [5, 0.14] },
  bus:   { a: 'eng_diesel', ra: [0.95, 2.4], b: 'eng_v8', rb: [0.6, 1.6], gb: [0.2, 0.3], lp: [500, 2500], gain: 0.8, chop: [4, 0.1] },
  speedboat: { a: 'eng_boat', ra: [1.0, 3.5], b: 'eng_v8', rb: [0.9, 2.9], gb: [0.15, 0.55], lp: [1000, 6500], gain: 0.62, boat: 1.0 },
  fishboat:  { a: 'eng_diesel', ra: [0.8, 1.5], b: 'eng_boat', rb: [0.5, 0.95], gb: [0.1, 0.25], lp: [420, 1500], gain: 0.85, chop: [5.5, 0.42], boat: 0.8 },
  yacht:     { a: 'eng_diesel', ra: [0.78, 1.7], b: 'eng_boat', rb: [0.55, 1.2], gb: [0.2, 0.4], lp: [380, 1900], gain: 0.8, chop: [3, 0.08], boat: 1.1 },
};
const PROF_OF = { 11: 'car', 12: 'hot', 13: 'suv', 14: 'car', 15: 'v8', 16: 'v8', 17: 'sport', 18: 'rough', 19: 'bikeS', 20: 'bikeC', 21: 'bikeD', 22: 'v8', 23: 'rick', 24: 'v8', 25: 'sport', 26: 'tractor', 27: 'truck', 28: 'bus', 29: 'racer', 30: 'speedboat', 31: 'fishboat', 32: 'yacht' };
// a looping recording: a source, a low-pass and a gain; starts at a random point so layers never line up
function loopV(name, vol = 0, rate = 1, lpf = 0, dest = sfxG) {
  const b = bank[name]; if (!ctx || !b) return null;
  const s = ctx.createBufferSource(); s.buffer = b; s.loop = true; s.loopStart = 0.02; s.loopEnd = Math.max(0.06, b.duration - 0.02); s.playbackRate.value = rate;
  const f = ctx.createBiquadFilter(); f.type = lpf < 0 ? 'highpass' : 'lowpass'; f.frequency.value = Math.abs(lpf) || 20000; f.Q.value = 0.5;
  const g = ctx.createGain(); g.gain.value = vol; s.connect(f); f.connect(g); g.connect(dest); s.start(0, Math.random() * (b.duration - 0.1));
  return { s, f, g };
}
const stopLoop = (L, fade = 0.15) => { if (!L) return; try { L.g.gain.cancelScheduledValues(ctx.currentTime); L.g.gain.setTargetAtTime(0.0001, ctx.currentTime, fade / 3); setTimeout(() => { try { L.s.stop(); } catch { /* noop */ } }, fade * 1000 + 100); } catch { /* noop */ } };
export function carEngineStart(p = {}) {
  if (!ctx || ceng) return;
  const k = PROF_OF[p.id] || (p.cyl >= 6 ? 'v8' : 'car'), P = PROF[k];
  const out = ctx.createGain(); out.gain.value = 0.0001; out.connect(sfxG);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = P.lp[0]; lp.Q.value = 0.6; lp.connect(out);
  const A = loopV(P.a, 0.0001, P.ra[0], 0, lp), B = loopV(P.b, 0.0001, P.rb[0], 0, lp);
  if (!A) return;   // recordings not loaded yet (first seconds of the game): silence rather than a beep
  let lfo = null, lg = null;
  if (P.chop) { lfo = ctx.createOscillator(); lg = ctx.createGain(); lfo.frequency.value = P.chop[0]; lg.gain.value = 0; lfo.connect(lg); lg.connect(out.gain); lfo.start(); }
  let wash = null, slap = 0;
  if (P.boat) wash = { lap: loopV('lap_loop', 0.0001, 1, 0, sfxG), sea: loopV('sea_loop', 0.0001, 1.0, 0, sfxG) };
  const pm = Math.pow(p.pitch || 1, 0.45);
  ceng = { out, lp, A, B, P, lfo, lg, pm, wash, slapAt: 0 };
  out.gain.setTargetAtTime(P.gain * 0.35, ctx.currentTime, 0.2);
}
const lerp = (a, b, t) => a + (b - a) * t;
export function carEngineSet(rpm01, load, speed = 0) {
  if (!ctx || !ceng) return; const t = ctx.currentTime, e = ceng, P = e.P, r = Math.max(0, Math.min(1, rpm01)), ld = Math.max(0, Math.min(1, load)), rr = Math.pow(r, 0.85);
  e.A.s.playbackRate.setTargetAtTime(lerp(P.ra[0], P.ra[1], rr) * e.pm, t, 0.05);
  if (e.B) { e.B.s.playbackRate.setTargetAtTime(lerp(P.rb[0], P.rb[1], rr) * e.pm, t, 0.05); e.B.g.gain.setTargetAtTime(lerp(P.gb[0], P.gb[1], r) * (0.35 + 0.65 * ld) * P.gain, t, 0.08); }
  e.A.g.gain.setTargetAtTime(P.gain * (0.55 + 0.25 * r + 0.35 * ld), t, 0.06);
  e.lp.frequency.setTargetAtTime(lerp(P.lp[0], P.lp[1], Math.min(1, 0.2 + 0.45 * r + 0.55 * ld)), t, 0.08);
  e.out.gain.setTargetAtTime(0.38 + 0.15 * ld, t, 0.06);
  if (e.lg) { e.lfo.frequency.setTargetAtTime(P.chop[0] * (0.6 + 1.1 * r), t, 0.1); e.lg.gain.setTargetAtTime(P.chop[1] * (0.25 + 0.75 * (1 - r)) * 0.4, t, 0.1); }
  if (e.wash) {   // hull wash + slapping waves: louder and brighter the faster the boat goes
    const sp = Math.abs(speed), k = Math.min(1, sp / 20), w = P.boat;
    e.wash.lap.g.gain.setTargetAtTime(0.02 + 0.5 * k * w, t, 0.15); e.wash.lap.s.playbackRate.setTargetAtTime(0.85 + 0.5 * k, t, 0.2); e.wash.lap.f.frequency.setTargetAtTime(900 + 4500 * k, t, 0.2);
    e.wash.sea.g.gain.setTargetAtTime(0.05 + 0.4 * k * w, t, 0.2); e.wash.sea.f.frequency.setTargetAtTime(500 + 2600 * k, t, 0.2);
    const now = performance.now(); if (sp > 5 && now > e.slapAt) { e.slapAt = now + rnd(180, 520) / (0.4 + k * 1.6); play(pick(['spl_sm0', 'spl_sm1', 'spl_sm2', 'spl_sm3']), (0.18 + 0.4 * k) * w, rnd(0.8, 1.2), 0, rnd(-0.3, 0.3), 3000 + 3000 * k); }
  }
}
export function carEngineStop() {
  if (!ceng) return; const e = ceng; ceng = null;
  try { e.out.gain.cancelScheduledValues(ctx.currentTime); e.out.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.12); stopLoop(e.A, 0.5); stopLoop(e.B, 0.5); if (e.wash) { stopLoop(e.wash.lap, 0.6); stopLoop(e.wash.sea, 0.6); } setTimeout(() => { try { if (e.lfo) e.lfo.stop(); } catch { /* noop */ } }, 900); } catch { /* noop */ }
}
export function engineCrank(p = {}) { // the starter: the engine recording winding up from a crawl to idle, plus the key / relay click
  if (!ctx) return; const b = bank[(PROF[PROF_OF[p.id]] || PROF.car).a]; if (!b) return; const t = ctx.currentTime;
  const s = ctx.createBufferSource(); s.buffer = b; s.playbackRate.setValueAtTime(0.18, t); s.playbackRate.linearRampToValueAtTime(0.5, t + 0.45); s.playbackRate.linearRampToValueAtTime(1.0, t + 0.8);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.4, t + 0.1); g.gain.setTargetAtTime(0.0001, t + 0.6, 0.15); s.connect(g); g.connect(sfxG); s.start(t, 0.3); s.stop(t + 1.5);
  play('latch', 0.4, 0.9);
}

// Horn: two reed tones a major third apart (real car horns), buzzy, held for as long as the button is held (never shorter than 0.2 s)
export function hornStart(hz = 420) {
  if (!ctx || horn) return;
  const t = ctx.currentTime, g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.26, t + 0.025);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200; lp.Q.value = 0.7;
  const bp = ctx.createBiquadFilter(); bp.type = 'peaking'; bp.frequency.value = 1400; bp.gain.value = 5; bp.Q.value = 0.8;
  const sh = ctx.createWaveShaper(), cv = new Float32Array(257); for (let i = 0; i < 257; i++) { const x = i / 128 - 1; cv[i] = Math.tanh(x * 1.8); } sh.curve = cv;
  const mix = ctx.createGain(); mix.gain.value = 0.5; mix.connect(sh); sh.connect(lp); lp.connect(bp); bp.connect(g); g.connect(sfxG);
  const oscs = [];
  for (const [f, type] of [[hz, 'sawtooth'], [hz * 1.004, 'square'], [hz * 1.26, 'sawtooth'], [hz * 1.267, 'square'], [hz * 2.02, 'triangle']]) { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; const og = ctx.createGain(); og.gain.value = type === 'triangle' ? 0.25 : 0.6; o.connect(og); og.connect(mix); o.start(); oscs.push(o); }
  const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 96; lg.gain.value = 0.05; lfo.connect(lg); lg.connect(g.gain); lfo.start(); oscs.push(lfo);
  horn = { g, oscs, t0: t };
}
export function hornStop() {
  if (!ctx || !horn) return; const h = horn; horn = null;
  const wait = Math.max(0, 0.22 - (ctx.currentTime - h.t0));
  setTimeout(() => { try { const t = ctx.currentTime; h.g.gain.cancelScheduledValues(t); h.g.gain.setTargetAtTime(0.0001, t, 0.035); setTimeout(() => { for (const o of h.oscs) { try { o.stop(); } catch { /* noop */ } } }, 260); } catch { /* noop */ } }, wait * 1000);
}
export const hornOn = () => !!horn;

// POLICE SIREN: a two-tone wail that swoops between ~650 and ~1450 Hz, switching to a faster yelp every few seconds (a hard-edged sawtooth + square through a gritty shaper).
// sirenStart / sirenStop = the siren of the car you drive (the horn button toggles it); sirenFar(v) = the chasing police cars, louder the closer they are.
function makeSiren(base, vol) {
  const t = ctx.currentTime, g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.08);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200; const pk = ctx.createBiquadFilter(); pk.type = 'peaking'; pk.frequency.value = 1300; pk.gain.value = 6; pk.Q.value = 0.9;
  const sh = ctx.createWaveShaper(), cv = new Float32Array(257); for (let i = 0; i < 257; i++) { const x = i / 128 - 1; cv[i] = Math.tanh(x * 2.2); } sh.curve = cv;
  const mix = ctx.createGain(); mix.gain.value = 0.55; mix.connect(sh); sh.connect(lp); lp.connect(pk); pk.connect(g); g.connect(sfxG);
  const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.type = 'triangle'; lfo.frequency.value = 0.34; lg.gain.value = 420; lfo.connect(lg);
  const oscs = [lfo];
  for (const [mul, type, gv] of [[1, 'sawtooth', 0.55], [1.005, 'square', 0.3], [2, 'triangle', 0.18]]) { const o = ctx.createOscillator(); o.type = type; o.frequency.value = base * mul; lg.connect(o.frequency); const og = ctx.createGain(); og.gain.value = gv; o.connect(og); og.connect(mix); o.start(); oscs.push(o); }
  lfo.start();
  const S = { g, oscs, lfo, lg, vol, t0: t, mode: 0, next: t + 7 };
  return S;
}
function sirenTick(S) {   // wail <-> yelp
  if (!S || !ctx) return; const t = ctx.currentTime; if (t < S.next) return; S.mode ^= 1; S.next = t + (S.mode ? 4.5 : 8); S.lfo.frequency.setTargetAtTime(S.mode ? 1.6 : 0.34, t, 0.3);
}
function killSiren(S) { if (!S) return; try { const t = ctx.currentTime; S.g.gain.cancelScheduledValues(t); S.g.gain.setTargetAtTime(0.0001, t, 0.06); setTimeout(() => { for (const o of S.oscs) { try { o.stop(); } catch { /* noop */ } } }, 400); } catch { /* noop */ } }
let sirenP = null, sirenF = null;
export function sirenStart() { if (!ctx || sirenP) return; sirenP = makeSiren(900, 0.2); }
export function sirenStop() { if (!sirenP) return; killSiren(sirenP); sirenP = null; }
export const sirenOn = () => !!sirenP;
export function sirenFar(v) {
  if (!ctx) return; v = Math.max(0, Math.min(1, v));
  if (v < 0.02) { if (sirenF) { killSiren(sirenF); sirenF = null; } return; }
  if (!sirenF) sirenF = makeSiren(780, 0.0002);
  sirenF.g.gain.setTargetAtTime(Math.max(0.0002, 0.17 * v), ctx.currentTime, 0.12);
}
// the mission's police cars (chasing / arriving): their own siren, louder the closer the nearest one is
let sirenM = null;
export function sirenMission(v) {
  if (!ctx) return; v = Math.max(0, Math.min(1, v));
  if (v < 0.02) { if (sirenM) { killSiren(sirenM); sirenM = null; } return; }
  if (!sirenM) sirenM = makeSiren(820, 0.0002);
  sirenM.g.gain.setTargetAtTime(Math.max(0.0002, 0.3 * v), ctx.currentTime, 0.15); sirenTick(sirenM);
}
// rain: soft filtered noise (a hiss with a lower patter), glides in and out; v = 0..1
let rainN = null;
export function rainSet(v) {   // the real rain recording, louder with the storm
  if (!ctx) return;
  if (v < 0.02) { if (rainN) { const R = rainN; rainN = null; stopLoop(R, 2); } return; }
  if (!rainN) { rainN = loopV('rain_loop', 0.0001, 1, 0); if (!rainN) return; }
  rainN.g.gain.setTargetAtTime(0.0002 + 0.28 * v, ctx.currentTime, 0.4);   // (the rain hiss was drowning the guns)
}
export function sirenTickAll() { sirenTick(sirenP); sirenTick(sirenF); }

// tyre squeal: the real skid recording looping, louder and higher the harder the tyres slide
export function skidSet(level) {
  return;   // v224: no tyre squeal anywhere (GTA and Jang) - engine sounds stay

  if (!ctx) return;
  if (!skidV) { if (level < 0.02) return; skidV = loopV('skid', 0.0001, 1, 0); if (!skidV) return; }
  const t = ctx.currentTime; skidV.g.gain.setTargetAtTime(Math.max(0.0001, level * 0.55), t, 0.05); skidV.s.playbackRate.setTargetAtTime(0.9 + level * 0.3, t, 0.1);
}
export function skidStop() { if (!skidV) return; const v = skidV; skidV = null; stopLoop(v, 0.15); }

// a crash: real metal impacts (heavy / medium / light by the force), the body thump and, for big ones, breaking glass
export function crashSfx(power = 10) {
  if (!ctx) return; const p = Math.max(0.15, Math.min(1, power / 22)), r3 = () => Math.random() * 3 | 0;
  play((power > 15 ? 'mh' : power > 8 ? 'mm' : 'ml') + r3(), 0.6 + 0.4 * p, rnd(0.9, 1.1)); play('th' + r3(), 0.5 * p, rnd(0.5, 0.7), 0.01, 0, 500);
  if (power > 7) play('crash0', 0.5 * p, rnd(0.9, 1.1), 0.03);
  if (power > 11) play('gl' + (Math.random() * 2 | 0), 0.6 * p, rnd(0.95, 1.1), 0.05);
}
export function carDoor(open = false) { // a real metal door: the handle, the slam and the latch
  if (open) play('door_o', 0.55, rnd(0.95, 1.05)); else { play('door_c', 0.8, rnd(0.95, 1.05)); play('latch', 0.35, 1, 0.08); }
}
// the city's constant bed: far-off traffic (a real highway recording)
let wantCity = false;
export function cityAmbience(on) {
  if (!ctx) return; wantCity = !!on;
  if (!on) { if (cityAmb) { const a = cityAmb; cityAmb = null; stopLoop(a, 1.2); } return; }
  if (cityAmb) return;
  const a = loopV('city_loop', 0.0001, 1, 0); if (!a) { setTimeout(() => { if (ctx && !cityAmb && wantCity) cityAmbience(true); }, 1500); return; }
  a.g.gain.setTargetAtTime(0.1, ctx.currentTime, 1.2); cityAmb = a;
}
// the sea: waves on the shore, louder the closer you are to the coast (0..1)
export function seaSet(v) {
  if (!ctx) return;
  if (v < 0.02) { if (seaV) { stopLoop(seaV, 1.5); seaV = null; } return; }
  if (!seaV) { seaV = loopV('sea_loop', 0.0001, 1, 0); if (!seaV) return; }
  seaV.g.gain.setTargetAtTime(0.0002 + 0.3 * v * v, ctx.currentTime, 0.5);
}
// swimming: the water lapping round you (a little louder while you are moving)
export function swimSet(on, speed = 0) {
  if (!ctx) return;
  if (!on) { if (swimV) { stopLoop(swimV, 0.6); swimV = null; } return; }
  if (!swimV) { swimV = loopV('lap_loop', 0.0001, 1, 0); if (!swimV) return; }
  swimV.g.gain.setTargetAtTime(0.18 + 0.1 * Math.min(1, speed / 4), ctx.currentTime, 0.2);
}
try { window.__aud = { get ctx() { return ctx; }, get master() { return master; }, bank }; } catch { /* no window */ }
