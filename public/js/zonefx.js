// v434: PUBG-style "you are in the blue zone" screen effect: blue vignette + electric lightning arcs crawling in from the screen edges.
// DOM + one small canvas only (no 3D cost). Budget phones get a smaller canvas, fewer bolts and a lower frame rate; laptops / iPhone Pro get the full effect.
const TOUCH = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
const CFG = TOUCH ? { scale: 0.34, fps: 16, bolts: 4, glow: false } : { scale: 0.6, fps: 30, bolts: 9, glow: true };
let el = null, cv = null, g = null, on = false, raf = 0, lastT = 0, bolts = [], W = 0, H = 0, clockT = 0;

const LITE = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent || '');   // v483: Android: NO full-screen layer and NO lightning canvas - a see-through layer over the whole 3D picture has to be blended on every frame, and that alone made budget phones crawl in the blue zone
function buildLite() {
  el = document.createElement('div'); el.id = 'zonefx'; el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:5;opacity:0;transition:opacity .45s ease';
  const strip = (css) => { const s = document.createElement('div'); s.style.cssText = 'position:absolute;' + css; el.appendChild(s); };
  strip('left:0;right:0;top:0;height:8%;background:linear-gradient(to bottom,rgba(20,80,255,.7),rgba(20,80,255,0))');
  strip('left:0;right:0;bottom:0;height:8%;background:linear-gradient(to top,rgba(20,80,255,.7),rgba(20,80,255,0))');
  strip('left:0;top:8%;bottom:8%;width:5%;background:linear-gradient(to right,rgba(20,80,255,.7),rgba(20,80,255,0))');
  strip('right:0;top:8%;bottom:8%;width:5%;background:linear-gradient(to left,rgba(20,80,255,.7),rgba(20,80,255,0))');
  document.body.appendChild(el);
}
function build() {
  el = document.createElement('div'); el.id = 'zonefx';
  el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:5;opacity:0;transition:opacity .45s ease;' +
    'background:radial-gradient(ellipse at center,rgba(40,120,255,.07) 0%,rgba(30,110,255,.16) 52%,rgba(20,90,255,.42) 82%,rgba(10,50,200,.78) 100%)';
  cv = document.createElement('canvas'); cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'; el.appendChild(cv);
  document.body.appendChild(el); g = cv.getContext('2d'); size();
  window.addEventListener('resize', size);
}
function size() { if (!cv) return; W = Math.max(64, Math.round(innerWidth * CFG.scale)); H = Math.max(48, Math.round(innerHeight * CFG.scale)); cv.width = W; cv.height = H; }

// a jagged bolt: midpoint displacement from an edge point toward the centre
function path(x0, y0, x1, y1, rough, depth) {
  let pts = [[x0, y0], [x1, y1]];
  for (let d = 0; d < depth; d++) {
    const n = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, o = (Math.random() - 0.5) * rough * L;
      n.push([mx - dy / L * o, my + dx / L * o], b);
    }
    pts = n;
  }
  return pts;
}
function spawn() {
  const e = Math.random(), cx = W / 2, cy = H / 2; let x, y;
  const s = Math.floor(Math.random() * 4);   // 0 top 1 bottom 2 left 3 right
  if (s === 0) { x = Math.random() * W; y = 0; } else if (s === 1) { x = Math.random() * W; y = H; } else if (s === 2) { x = 0; y = Math.random() * H; } else { x = W; y = Math.random() * H; }
  const len = 0.14 + e * 0.2, tx = x + (cx - x) * len, ty = y + (cy - y) * len;
  const life = 0.1 + Math.random() * 0.22;
  const b = { life, age: 0, main: path(x, y, tx, ty, 0.55, 4), br: null };
  if (Math.random() < 0.7) { const k = b.main[Math.floor(b.main.length * (0.3 + Math.random() * 0.4))]; b.br = path(k[0], k[1], k[0] + (Math.random() - 0.5) * W * 0.16, k[1] + (Math.random() - 0.5) * H * 0.16, 0.6, 3); }
  bolts.push(b);
}
function stroke(pts, w, col, blur) {
  g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.lineWidth = w; g.strokeStyle = col; g.shadowBlur = blur; g.shadowColor = 'rgba(70,150,255,1)'; g.stroke();
}
function frame(t) {
  raf = requestAnimationFrame(frame);
  if (t - lastT < 1000 / CFG.fps) return; const dt = Math.min(0.1, (t - lastT) / 1000); lastT = t; clockT += dt;
  g.clearRect(0, 0, W, H); g.lineCap = 'round'; g.lineJoin = 'round';
  if (on) { const want = CFG.bolts - bolts.length; for (let i = 0; i < want; i++) if (Math.random() < 0.35) spawn(); }
  const u = Math.max(1, W / 480);
  for (let i = bolts.length - 1; i >= 0; i--) {
    const b = bolts[i]; b.age += dt; if (b.age >= b.life) { bolts.splice(i, 1); continue; }
    const k = 1 - b.age / b.life, fl = 0.55 + 0.45 * Math.random();
    g.globalAlpha = k * fl;
    stroke(b.main, 5 * u, 'rgba(30,110,255,.55)', CFG.glow ? 14 : 0);   // outer glow
    stroke(b.main, 2.2 * u, 'rgba(150,205,255,.95)', 0);
    stroke(b.main, 0.9 * u, 'rgba(255,255,255,1)', 0);                   // white-hot core
    if (b.br) { stroke(b.br, 3 * u, 'rgba(30,110,255,.5)', CFG.glow ? 10 : 0); stroke(b.br, 1 * u, 'rgba(210,235,255,.95)', 0); }
  }
  g.globalAlpha = 1; g.shadowBlur = 0;
  if (!on && !bolts.length) { cancelAnimationFrame(raf); raf = 0; }
}
// call every frame from the scene: true while the player stands in the damaging zone
function set(v) {
  v = !!v; if (v === on && (raf || !v || (LITE && el))) return;
  on = v; if (!el) { if (!v) return; if (LITE) buildLite(); else build(); }
  el.style.opacity = v ? '1' : '0'; if (LITE) { el.style.display = v ? 'block' : 'none'; return; }   // lite: four thin blue edge strips, nothing animated
  if (v) { size(); if (!raf) { lastT = 0; raf = requestAnimationFrame(frame); } }
}
// v440: a soft blue glow at the screen edges + a distance text while you walk TOWARD the blue wall from the safe side (level 0..1), and a text while you stand outside it
let nel = null, ntx = null, last = '';
function nbuild() {
  nel = document.createElement('div'); nel.id = 'zonenear';
  nel.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:4;opacity:0;transition:opacity .25s linear;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 55%,rgba(40,130,255,.35) 85%,rgba(30,110,255,.7) 100%)';
  ntx = document.createElement('div'); ntx.id = 'zonenear-t';
  ntx.style.cssText = 'position:fixed;left:50%;top:calc(max(env(safe-area-inset-top),0px) + 78px);transform:translateX(-50%);pointer-events:none;z-index:3;opacity:0;transition:opacity .25s linear;font:800 12px/1 system-ui,sans-serif;letter-spacing:.05em;color:#dcecff;background:rgba(30,100,230,.28);border:1px solid rgba(125,184,255,.55);border-radius:10px;padding:3px 9px;white-space:nowrap;text-shadow:0 1px 2px #000'; /* v471: small, transparent, parked at the top below the match bar so it never covers anything */
  if (LITE) nel.style.display = 'none';   // v483 Android: only the distance text, no full-screen glow layer
  document.body.appendChild(nel); document.body.appendChild(ntx);
}
function near(level, meters, outside) {
  if (!nel) { if (!(level > 0) && !outside) return; nbuild(); }
  const t = outside ? 'OUTSIDE ZONE' : level > 0 ? Math.max(1, Math.round(meters)) + ' m' : '';
  if (t !== last) { last = t; ntx.textContent = t; }
  nel.style.opacity = outside ? '0' : String(level > 0 ? Math.min(1, 0.25 + level * 0.75) : 0); ntx.style.opacity = t ? '1' : '0';
}
window.phZoneFx = { set, near };
export { set as zoneFx, near as zoneNear };
