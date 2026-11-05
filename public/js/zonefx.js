// v434: PUBG-style "you are in the blue zone" screen effect: blue vignette + electric lightning arcs crawling in from the screen edges.
// DOM + one small canvas only (no 3D cost). Budget phones get a smaller canvas, fewer bolts and a lower frame rate; laptops / iPhone Pro get the full effect.
const TOUCH = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
const CFG = TOUCH ? { scale: 0.34, fps: 16, bolts: 4, glow: false } : { scale: 0.6, fps: 30, bolts: 9, glow: true };
let el = null, cv = null, g = null, on = false, raf = 0, lastT = 0, bolts = [], W = 0, H = 0, clockT = 0;

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
  v = !!v; if (v === on && (raf || !v)) return;
  on = v; if (!el) { if (!v) return; build(); }
  el.style.opacity = v ? '1' : '0';
  if (v) { size(); if (!raf) { lastT = 0; raf = requestAnimationFrame(frame); } }
}
window.phZoneFx = { set };
export { set as zoneFx };
