// MINI-MAP: a round GTA-style radar in the bottom-left corner. The city is drawn once into an offscreen canvas (roads, blocks, parks, the mountain road,
// the highway, houses and the repair shop); every frame a rotated window of it is blitted so your view direction is always "up".
import { GT, gtaBuildings, mtRoad, PARKS, REPAIR, HOMES } from './gta.js';

const W = 760, O = 380;   // 1 px = 1 m, world -380..380
function drawStatic() {
  const cv = document.createElement('canvas'); cv.width = cv.height = W; const g = cv.getContext('2d');
  g.fillStyle = '#2c78ad'; g.fillRect(0, 0, W, W);                                                // sea
  g.fillStyle = '#8dbf78'; g.beginPath(); g.roundRect ? g.roundRect(O - 335, O - 335, 670, 670, 60) : g.rect(O - 335, O - 335, 670, 670); g.fill();   // land
  g.fillStyle = '#e8dfb4'; g.lineWidth = 0;                                                       // beach rim
  { const M = GT.MT, gr = g.createRadialGradient(O + M.cx, O + M.cz, 8, O + M.cx, O + M.cz, M.R + 10); gr.addColorStop(0, '#f4f6fa'); gr.addColorStop(0.35, '#b7a98c'); gr.addColorStop(1, 'rgba(120,150,95,0)'); g.fillStyle = gr; g.beginPath(); g.arc(O + M.cx, O + M.cz, M.R + 10, 0, 7); g.fill(); }
  for (const [hx, hz, hr] of [[210, -210, 70], [235, 205, 62], [-205, 215, 66], [40, -300, 60], [-40, 300, 55]]) { g.fillStyle = 'rgba(95,140,80,.55)'; g.beginPath(); g.arc(O + hx, O + hz, hr * 0.8, 0, 7); g.fill(); }
  // blocks, parks, buildings
  for (const bx of [-90, -30, 30, 90]) for (const bz of [-90, -30, 30, 90]) { const park = PARKS.some((p) => p[0] === bx && p[1] === bz); g.fillStyle = park ? '#6fc24f' : '#cfd3d9'; g.fillRect(O + bx - 23.5, O + bz - 23.5, 47, 47); }
  g.fillStyle = '#8f98a6'; for (const b of gtaBuildings()) g.fillRect(O + b.x - b.w / 2, O + b.z - b.d / 2, b.w, b.d);
  // roads
  const road = (pts, w) => { g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#f4f4f4'; g.lineWidth = w + 3; g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(O + p[0], O + p[1]) : g.moveTo(O + p[0], O + p[1]))); g.stroke(); g.strokeStyle = '#4a4f59'; g.lineWidth = w; g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(O + p[0], O + p[1]) : g.moveTo(O + p[0], O + p[1]))); g.stroke(); };
  const w = GT.HW * 2;
  for (const q of GT.GRID) { road([[q, -120], [q, 120]], w); road([[-120, q], [120, q]], w); }
  road([[-120, -120], [-140.8, -140.8]], w);
  { const pts = []; for (let i = 0; i <= 90; i++) { const p = mtRoad(i / 90); pts.push([p.x, p.z]); } road(pts, w); }
  road([[GT.HWY.ax, 0], [GT.HWY.bx, 0]], w); g.fillStyle = '#4a4f59'; g.beginPath(); g.arc(O + GT.HWY.bx, O, 14, 0, 7); g.fill();
  // landmarks' footprints
  for (const h of HOMES) { g.fillStyle = h.color; g.fillRect(O + h.x - 6, O + h.z - 4.3 - 3 * Math.cos(h.yaw), 12, 8.6); }
  const S = REPAIR.shop; g.fillStyle = '#ffb02e'; g.fillRect(O + S.x - S.w / 2, O + S.z - S.d / 2, S.w, S.d);
  return cv;
}

export class Minimap {
  constructor(canvas) {
    this.cv = canvas; this.g = canvas.getContext('2d'); this.map = null; this.R = 95; this.t = 0;
    this.resize();
  }
  resize() { const d = Math.min(2, window.devicePixelRatio || 1), s = this.cv.clientWidth || 150; this.cv.width = this.cv.height = Math.round(s * d); }
  // view: { x, z, head } where head = the world direction (yaw) that should point up;  me: { x, z, yaw };  others: [{ x, z, color }]
  draw(view, me, others, dt) {
    this.t += dt || 0; if (this.t < 0.033) return; this.t = 0;
    if (!this.map) this.map = drawStatic();
    const g = this.g, S = this.cv.width; if (!S) { this.resize(); return; }
    const k = S / 2 / this.R, th = view.head - Math.PI, c = Math.cos(th), s = Math.sin(th);
    g.save(); g.clearRect(0, 0, S, S); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, 7); g.clip();
    g.fillStyle = '#2c78ad'; g.fillRect(0, 0, S, S);
    g.translate(S / 2, S / 2); g.scale(k, k); g.rotate(th); g.translate(-view.x, -view.z); g.drawImage(this.map, -O, -O); g.restore();
    const toScr = (x, z) => { const dx = x - view.x, dz = z - view.z; return [S / 2 + (dx * c - dz * s) * k, S / 2 + (dx * s + dz * c) * k]; };
    const icon = (x, z, bg, glyph, r) => {   // landmark badge, pinned to the rim when it is far away
      let [px, py] = toScr(x, z); const dx = px - S / 2, dy = py - S / 2, d = Math.hypot(dx, dy), lim = S / 2 - r - 3;
      if (d > lim) { px = S / 2 + dx / d * lim; py = S / 2 + dy / d * lim; }
      g.fillStyle = bg; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.5, S / 90); g.beginPath(); g.arc(px, py, r, 0, 7); g.fill(); g.stroke();
      g.font = Math.round(r * 1.25) + 'px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff'; g.fillText(glyph, px, py + 1);
    };
    const r = Math.max(8, S / 14);
    icon(REPAIR.x, REPAIR.z, '#e8890c', '\u{1F527}', r);
    let near = null, nd = 1e9;
    for (const h of HOMES) { icon(h.x, h.z, h.color, '\u{1F3E0}', r * 0.85); const d = Math.hypot(h.x - view.x, h.z - view.z); if (d < nd) { nd = d; near = h; } }
    const label = (txt, x, z, color) => {   // the name of the home you are closest to, always upright under its badge
      const [px, py] = toScr(x, z), fs = Math.round(Math.max(9, S / 12)); g.font = '900 ' + fs + 'px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'top';
      const ty = Math.min(S - fs - 2, py + r * 0.95); g.lineWidth = Math.max(3, S / 40); g.strokeStyle = '#0b1220'; g.lineJoin = 'round'; g.strokeText(txt, px, ty); g.fillStyle = color; g.fillText(txt, px, ty);
    };
    if (near && nd < 70) label(near.name.toUpperCase(), near.x, near.z, '#ffffff');
    if (Math.hypot(REPAIR.x - view.x, REPAIR.z - view.z) < 60) label('REPAIR', REPAIR.x, REPAIR.z, '#ffd23f');
    for (const o of others || []) { const [px, py] = toScr(o.x, o.z); if (Math.hypot(px - S / 2, py - S / 2) > S / 2 - 4) continue; g.fillStyle = o.color || '#ff5f5f'; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.5, S / 100); g.beginPath(); g.arc(px, py, S / 40, 0, 7); g.fill(); g.stroke(); }
    // me: an arrow in the middle that points where I am heading
    g.save(); g.translate(S / 2, S / 2); g.rotate(-(me.yaw - view.head)); const a = S / 22;
    g.fillStyle = '#ffffff'; g.strokeStyle = '#13203a'; g.lineWidth = Math.max(1.5, S / 100); g.beginPath(); g.moveTo(0, -a * 1.4); g.lineTo(a, a); g.lineTo(0, a * 0.5); g.lineTo(-a, a); g.closePath(); g.fill(); g.stroke(); g.restore();
    // rim + north marker
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = Math.max(2, S / 60); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - g.lineWidth / 2, 0, 7); g.stroke();
    const na = Math.atan2(-s * -1, c * 0) ; void na;
    { const [nx, ny] = toScr(view.x, view.z - 1000); const dx = nx - S / 2, dy = ny - S / 2, d = Math.hypot(dx, dy) || 1, nr = S / 2 - S / 22; g.fillStyle = '#d62828'; g.beginPath(); g.arc(S / 2 + dx / d * nr, S / 2 + dy / d * nr, S / 28, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = 'bold ' + Math.round(S / 22) + 'px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('N', S / 2 + dx / d * nr, S / 2 + dy / d * nr + 1); }
  }
}
