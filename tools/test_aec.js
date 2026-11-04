// offline test of public/js/aec-worklet.js: a synthetic far-end voice plays on "speakers", reaches the "mic" through a delayed, reverberant path, YOU talk now and then
import { AecCore } from '../public/js/aec-worklet.js';
const SR = 16000; let seed = 12345; const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) * 2 - 1;
const voice = (len, lvl) => { const a = new Float32Array(len); let lp = 0, env = 0, tgt = 0; for (let i = 0; i < len; i++) { if (i % 1600 === 0) tgt = Math.random() < 0.8 ? 1 : 0.1; env += (tgt - env) * 0.01; lp += (rnd() - lp) * 0.35; a[i] = lp * env * lvl; } return a; };
const secs = 40, len = SR * secs, far = new Float32Array(len), near = new Float32Array(len);
// timeline: 0-12 s far only, 12-16 s near only, 16-24 s both, 24-28 s silence, 28-40 s far only
const fa = voice(len, 0.5), na = voice(len, 0.5);
for (let i = 0; i < len; i++) { const t = i / SR; far[i] = (t < 16 && t >= 0 || (t >= 16 && t < 24) || t >= 28) && !(t >= 12 && t < 16) && !(t >= 24 && t < 28) ? fa[i] : 0; near[i] = (t >= 12 && t < 24) ? na[i] * 1.2 : 0; }
const DELAY = 1440 + Math.floor(Math.random() * 0), ir = new Float32Array(640); for (let k = 0; k < ir.length; k++) ir[k] = rnd() * Math.exp(-k / 180) * (k === 0 ? 0 : 0.5); ir[0] = 0.8;
const mic = new Float32Array(len); for (let i = 0; i < len; i++) { let y = 0; for (let k = 0; k < ir.length; k += 1) { const j = i - DELAY - k; if (j >= 0) y += ir[k] * far[j]; } mic[i] = y + near[i] + rnd() * 0.002; }
const core = new AecCore(); core.gate = process.argv[2] !== 'nogate'; const out = new Float32Array(len), B = 128;
for (let i = 0; i + B <= len; i += B) core.process(mic.subarray(i, i + B), far.subarray(i, i + B), out.subarray(i, i + B));
const rms = (a, t0, t1) => { let s = 0; const i0 = t0 * SR, i1 = t1 * SR; for (let i = i0; i < i1; i++) s += a[i] * a[i]; return Math.sqrt(s / (i1 - i0)); };
const db = (x) => 20 * Math.log10(x + 1e-9);
const farOnlyLate = [[5, 12], [32, 40]], res = {};
let ok = true; const chk = (name, cond, info) => { console.log((cond ? 'PASS ' : 'FAIL ') + name + '  ' + info); if (!cond) ok = false; };
const echoIn = rms(mic, 8, 12), echoOut = rms(out, 8, 12); chk('far-only (8-12 s): echo reduced / gated', db(echoIn) - db(echoOut) > 20, 'in ' + db(echoIn).toFixed(1) + ' dB  out ' + db(echoOut).toFixed(1) + ' dB');
const late = rms(out, 32, 40); chk('far-only (32-40 s) stays quiet', db(rms(mic, 32, 40)) - db(late) > 20, 'out ' + db(late).toFixed(1) + ' dB (mic ' + db(rms(mic, 32, 40)).toFixed(1) + ')');
const nIn = rms(near, 12.5, 16), nOut = rms(out, 12.5, 16); chk('near-only (12-16 s): your voice passes', db(nOut) - db(nIn) > -4, 'near ' + db(nIn).toFixed(1) + ' out ' + db(nOut).toFixed(1) + ' dB');
const dIn = rms(near, 17, 24), dOut = rms(out, 17, 24); chk('double talk (17-24 s): your voice still passes', db(dOut) - db(dIn) > -9, 'near ' + db(dIn).toFixed(1) + ' out ' + db(dOut).toFixed(1) + ' dB');
const sOut = rms(out, 25, 28); chk('silence (25-28 s): nothing sent', db(sOut) < -55, db(sOut).toFixed(1) + ' dB');
if (!core.gate) { const a = rms(mic, 8, 12), b = rms(out, 8, 12); console.log('NLMS alone (gate off): far-only ERLE', (db(a) - db(b)).toFixed(1), 'dB;  double-talk voice', (db(rms(out, 17, 24)) - db(rms(near, 17, 24))).toFixed(1), 'dB vs near'); }
console.log('delay estimate', core.D, 'expected ~', DELAY - 160);
console.log(ok ? 'AEC OK' : 'AEC FAILED'); process.exit(ok ? 0 : 1);
