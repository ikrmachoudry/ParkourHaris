// v400 LAPTOP VOICE: echo canceller + voice-activated gate, runs in an AudioWorklet at 16 kHz (never on phones).
//   input 0 = the microphone (already echo-cancelled once by the browser), input 1 = what the speakers are playing (the teammates' voices)
//   output  = the microphone with the speaker sound subtracted (adaptive NLMS filter) and then a voice gate: silent unless YOU talk
// Written so the same file runs in node (tools/test_aec.js) and in the worklet.
const N = 1024;          // filter taps = 64 ms of echo tail at 16 kHz
const DMAX = 6400;       // search the speaker -> mic delay up to 400 ms
const HL = 65536;        // history length (linear buffer, copied back when full)
const FN = 16384, SEG = 8192;   // delay search: GCC-PHAT on the last 0.5 s of the mic against the speaker signal
const KEEP = FN + N + 8;   // history kept when the buffer wraps


// iterative radix-2 complex FFT (in place), used only for the delay search twice a second
const TW_R = new Float64Array(FN / 2), TW_I = new Float64Array(FN / 2); for (let i = 0; i < FN / 2; i++) { TW_R[i] = Math.cos(-2 * Math.PI * i / FN); TW_I[i] = Math.sin(-2 * Math.PI * i / FN); }
function fft(re, im, inv) {
  const n = re.length; for (let i = 1, j = 0; i < n; i++) { let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit; if (i < j) { let t = re[i]; re[i] = re[j]; re[j] = t; t = im[i]; im[i] = im[j]; im[j] = t; } }
  for (let len = 2; len <= n; len <<= 1) { const half = len >> 1, step = FN / len; for (let i = 0; i < n; i += len) for (let k = 0; k < half; k++) { const wr = TW_R[k * step], wi = inv ? -TW_I[k * step] : TW_I[k * step], a = i + k, b = a + half, xr = re[b] * wr - im[b] * wi, xi = re[b] * wi + im[b] * wr; re[b] = re[a] - xr; im[b] = im[a] - xi; re[a] += xr; im[a] += xi; } }
  if (inv) for (let i = 0; i < n; i++) { re[i] /= n; im[i] /= n; }
}
class AecCore {
  constructor() {
    this.w = new Float32Array(N); this.h = new Float32Array(HL); this.mh = new Float32Array(HL); this.wp = KEEP; this.D = 1600; this.xx = 0;
    this.pr = 0; this.rmax = 0; this.dtHold = 0; this.L = 0; this.nf = 0.004; this.hold = 0; this.g = 0; this.gate = true; this.open = false; this.dsince = 0;
    this.far = false; this.farHold = 0; this.train = 0; this.cand = undefined;   // train = samples adapted so far (first 4 s of far-end speech the filter learns even if you talk)
    this.ar = new Float64Array(FN); this.ai = new Float64Array(FN); this.br = new Float64Array(FN); this.bi = new Float64Array(FN);
  }
  // speaker -> mic delay by GCC-PHAT (sharp, robust peak) over the last 0.5 s; only when the speakers are playing something
  estDelay() {
    const ar = this.ar, ai = this.ai, br = this.br, bi = this.bi, h = this.h, mh = this.mh, e = this.wp;
    ar.fill(0); ai.fill(0); br.fill(0); bi.fill(0);
    for (let i = 0; i < FN; i++) ar[i] = h[e - FN + i];          // speaker signal, 1 s window
    for (let i = 0; i < SEG; i++) br[i] = mh[e - SEG + i];       // mic, the last 0.5 s, zero padded
    // the mic segment starts at index FN-SEG in the speaker window's time: lag = (position in speaker window) -> d = (FN - SEG) - argmax
    fft(ar, ai, false); fft(br, bi, false);
    for (let k = 0; k < FN; k++) { const xr = br[k] * ar[k] + bi[k] * ai[k], xi = bi[k] * ar[k] - br[k] * ai[k], m = Math.hypot(xr, xi) + 1e-9; ar[k] = xr / m; ai[k] = xi / m; }
    fft(ar, ai, true);
    // ar[t] peaks at t = (start of mic segment in speaker time) - (start of the echo): lag L such that mic[i] = ref[i - L]; mic segment i0 = FN - SEG, ref index = i0 + t0 - ... -> L = i0 - t, with t taken modulo FN
    let best = -1e9, bt = 0, sum = 0; for (let t = 0; t < FN; t++) { const v = ar[t]; sum += Math.abs(v); if (v > best) { best = v; bt = t; } }
    const mean = sum / FN; if (!(best > mean * 9)) return;
    // lag in samples: the mic segment starts SEG samples before 'now' and the reference window FN before 'now': mic[i] ~ ref[i - lag]
    const lag = bt <= FN / 2 ? bt : bt - FN, L = (FN - SEG) + lag;   /* checked against a known delay in tools/test_aec.js */
    if (L < 0 || L > DMAX + N) return;
    const D = Math.max(0, L - 160), prev = this.cand; this.cand = D; if (prev === undefined) return; /* a new delay must be seen twice in a row before the filter moves */
    if (Math.abs(D - this.D) > 200 && Math.abs(D - prev) < 200) { this.D = Math.min(DMAX, D); this.w.fill(0); const b = this.wp - 1 - this.D; let x = 0; for (let k = 0; k < N; k++) x += h[b - k] * h[b - k]; this.xx = x; }
  }
  process(mic, ref, out) {
    const n = mic.length, w = this.w, h = this.h;
    for (let i = 0; i < n; i++) {
      const r = ref ? ref[i] : 0, m = mic[i];
      if (this.wp >= HL) { h.copyWithin(0, HL - KEEP, HL); this.mh.copyWithin(0, HL - KEEP, HL); this.wp = KEEP; }
      this.mh[this.wp] = m; h[this.wp++] = r;
      const base = this.wp - 1 - this.D;
      // energy of the filter window, kept up to date sample by sample
      const nw = h[base], od = h[base - N];
      this.xx += nw * nw - od * od; if (this.xx < 0) this.xx = 0;
      let y = 0; for (let k = 0; k < N; k++) y += w[k] * h[base - k];
      const e = m - y;
      // is the speaker playing? (loudness of the reference, smoothed)
      const ar = Math.abs(r); this.pr += (ar - this.pr) * 0.002; this.rmax = Math.max(ar, this.rmax * 0.9997);
      const farNow = this.pr > 0.004; if (farNow) this.farHold = 4800; else if (this.farHold > 0) this.farHold--; this.far = this.farHold > 0;
      // double talk (YOU are speaking over the speakers): the mic is much louder than the speakers could explain -> freeze the filter
      if (Math.abs(e) > 0.5 * Math.max(0.02, this.rmax) && Math.abs(e) > 2.5 * Math.abs(y)) this.dtHold = 1600; else if (this.dtHold > 0) this.dtHold--;
      if (this.far && (this.dtHold === 0 || this.train < 64000)) { this.train++; const mu = (this.dtHold === 0 ? 0.35 : 0.08) * e / (this.xx + 1e-3 * N); for (let k = 0; k < N; k++) w[k] += mu * h[base - k]; }
      if (++this.dsince >= 8000 && this.far) { this.dsince = 0; this.estDelay(); }   // twice a second
      // voice gate on what is left
      const ae = Math.abs(e); this.L += (ae - this.L) * 0.004;
      let thr = Math.max(0.012, this.nf * 3.5); if (this.far) thr *= 3;   // louder than the left-over echo to cut in
      if (this.L > thr) { this.hold = 6400; this.open = true; } else if (this.hold > 0) this.hold--; else this.open = false;
      if (!this.open && !this.far) this.nf += (this.L - this.nf) * 0.0004;
      if (this.nf < 0.001) this.nf = 0.001; if (this.nf > 0.05) this.nf = 0.05;
      const tg = !this.gate || this.open ? 1 : 0; this.g += (tg - this.g) * (tg > this.g ? 0.05 : 0.004);
      out[i] = e * this.g;
    }
  }
}
if (typeof registerProcessor === 'function') {
  registerProcessor('aec', class extends AudioWorkletProcessor {
    constructor() { super(); this.c = new AecCore(); this.port.onmessage = (ev) => { if (ev.data && ev.data.gate !== undefined) this.c.gate = !!ev.data.gate; }; this.z = new Float32Array(128); }
    process(inputs, outputs) {
      const o = outputs[0] && outputs[0][0]; if (!o) return true; const mic = inputs[0] && inputs[0][0]; if (!mic) { o.fill(0); return true; }
      const ref = inputs[1] && inputs[1][0] && inputs[1][0].length === mic.length ? inputs[1][0] : null; this.c.process(mic, ref, o); return true;
    }
  });
}
export { AecCore };
