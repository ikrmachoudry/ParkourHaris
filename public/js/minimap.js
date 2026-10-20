// MINI-MAP: a round GTA-style radar in the bottom-left corner. The city is drawn once into an offscreen canvas (roads, blocks, parks, the mountain road,
// the highway, houses and the repair shop); every frame a rotated window of it is blitted so your view direction is always "up".
import { GT, HILLS, BLK, RING_HW, ringPath, gtaBuildings, mtRoad, PARKS, REPAIR, HOMES, LOBBY, STUNT, PARK, parkPath, BANK, POLICE, ARMS, AUTOS, SNIPE } from './gta.js';

const W = 1100, O = 550;   // 1 px = 1 m, world -550..550
function drawStatic() {
  const cv = document.createElement('canvas'); cv.width = cv.height = W; const g = cv.getContext('2d');
  g.fillStyle = '#2c78ad'; g.fillRect(0, 0, W, W);                                                // sea
  g.fillStyle = '#8dbf78'; g.beginPath(); g.roundRect ? g.roundRect(O - 495, O - 495, 990, 990, 90) : g.rect(O - 495, O - 495, 990, 990); g.fill();   // land
  g.fillStyle = '#e8dfb4'; g.lineWidth = 0;                                                       // beach rim
  { const M = GT.MT, gr = g.createRadialGradient(O + M.cx, O + M.cz, 8, O + M.cx, O + M.cz, M.R + 10); gr.addColorStop(0, '#f4f6fa'); gr.addColorStop(0.35, '#b7a98c'); gr.addColorStop(1, 'rgba(120,150,95,0)'); g.fillStyle = gr; g.beginPath(); g.arc(O + M.cx, O + M.cz, M.R + 10, 0, 7); g.fill(); }
  for (const [hx, hz, hr] of HILLS) { g.fillStyle = 'rgba(95,140,80,.55)'; g.beginPath(); g.arc(O + hx, O + hz, hr * 0.8, 0, 7); g.fill(); }
  // blocks, parks, buildings
  for (const bx of BLK) for (const bz of BLK) { const park = PARKS.some((p) => p[0] === bx && p[1] === bz); g.fillStyle = park ? '#6fc24f' : '#cfd3d9'; g.fillRect(O + bx - 23.5, O + bz - 23.5, 47, 47); }
  g.fillStyle = '#8f98a6'; for (const b of gtaBuildings()) g.fillRect(O + b.x - b.w / 2, O + b.z - b.d / 2, b.w, b.d);
  // roads
  const road = (pts, w) => { g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = '#f4f4f4'; g.lineWidth = w + 3; g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(O + p[0], O + p[1]) : g.moveTo(O + p[0], O + p[1]))); g.stroke(); g.strokeStyle = '#4a4f59'; g.lineWidth = w; g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(O + p[0], O + p[1]) : g.moveTo(O + p[0], O + p[1]))); g.stroke(); };
  const w = GT.HW * 2;
  const C = GT.CITY;
  for (const q of GT.GRID) { road([[q, -C], [q, C]], w); road([[-C, q], [C, q]], w); }
  { const l = mtRoad(0); road([[-C, -C], [l.x, l.z]], w); }
  { const rp = ringPath(); rp.push(rp[0]); road(rp, RING_HW * 2); }
  { const pts = []; for (let i = 0; i <= 90; i++) { const p = mtRoad(i / 90); pts.push([p.x, p.z]); } road(pts, w); }
  { const pp = parkPath(); pp.push(pp[0]); road(pp, PARK.hw * 2); road([[240, 60], [318, 60], [PARK.cxW, PARK.zT - 1]], w); }   // the Stunt Park oval + its road
  { road(SNIPE.road, w); road(SNIPE.bypass, w); road(SNIPE.hill.map((q) => [q[0], q[1]]), w); g.fillStyle = '#4a4f59'; g.beginPath(); g.arc(O + SNIPE.pad.x, O + SNIPE.pad.z, SNIPE.pad.r, 0, 7); g.fill(); g.fillStyle = '#6b6f78'; g.fillRect(O + SNIPE.road[0][0] - 9, O + SNIPE.tun.z0, 18, SNIPE.tun.z1 - SNIPE.tun.z0); }   // the tunnel road, the bypass and the sniper's hill
  road([[GT.HWY.ax, 0], [GT.HWY.bx, 0]], w); g.fillStyle = '#4a4f59'; g.beginPath(); g.arc(O + GT.HWY.bx, O, 14, 0, 7); g.fill();
  // landmarks' footprints
  for (const h of HOMES) { g.fillStyle = h.color; g.fillRect(O + h.x - 6, O + h.z - 4.3 - 3 * Math.cos(h.yaw), 12, 8.6); }
  g.fillStyle = LOBBY.color; g.fillRect(O + LOBBY.x - LOBBY.w / 2, O + LOBBY.z - LOBBY.d / 2, LOBBY.w, LOBBY.d);   // the Mission Lobby
  g.fillStyle = 'rgba(255,255,255,.9)'; g.fillRect(O + STUNT.startX, O - 1, 2, 2); g.strokeStyle = '#ffd23f'; g.lineWidth = 2; g.beginPath(); g.moveTo(O + STUNT.ramps[0][0], O); g.lineTo(O + STUNT.finishX, O); g.stroke();   // the stunt course
  g.fillStyle = '#d4a017'; g.fillRect(O + BANK.x - BANK.w / 2, O + BANK.z - BANK.d / 2, BANK.w, BANK.d); g.fillStyle = '#2a5bd7'; g.fillRect(O + POLICE.x - POLICE.w / 2, O + POLICE.z - POLICE.d / 2, POLICE.w, POLICE.d);   // the bank and the police station
  g.fillStyle = ARMS.color; g.fillRect(O + ARMS.x - ARMS.w / 2, O + ARMS.z - ARMS.d / 2, ARMS.w, ARMS.d); { const A = AUTOS.showroom; g.fillStyle = AUTOS.color; g.fillRect(O + A.x - A.w / 2, O + A.z - A.d / 2, A.w, A.d); g.fillStyle = 'rgba(34,211,238,.35)'; g.beginPath(); g.arc(O + AUTOS.zone.x, O + AUTOS.zone.z, AUTOS.zone.r, 0, 7); g.fill(); }
  const S = REPAIR.shop; g.fillStyle = '#ffb02e'; g.fillRect(O + S.x - S.w / 2, O + S.z - S.d / 2, S.w, S.d);
  return cv;
}

// a mission route is either one red line (a list of points) or { lines: [{ pts, color }] }
const routeLines = (r) => (!r ? [] : Array.isArray(r) ? (r.length > 1 ? [{ pts: r, color: 'rgba(230,30,30,.95)' }] : []) : (r.lines || []).filter((l) => l.pts && l.pts.length > 1));

export class Minimap {
  constructor(canvas) {
    this.cv = canvas; this.g = canvas.getContext('2d'); this.map = null; this.R = 95; this.t = 0;
    this.resize();
  }
  resize() { const d = Math.min(2, window.devicePixelRatio || 1), s = this.cv.clientWidth || 150; this.cv.width = this.cv.height = Math.round(s * d); }
  // view: { x, z, head } where head = the world direction (yaw) that should point up;  me: { x, z, yaw };  others: [{ x, z, color }]
  draw(view, me, others, dt, marks, route, wi) {
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
    { const RL = routeLines(route); if (RL.length) { g.save(); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, 7); g.clip(); g.lineWidth = Math.max(2.5, S / 45); g.lineJoin = 'round'; g.lineCap = 'round'; for (const L of RL) { g.strokeStyle = L.color; g.beginPath(); L.pts.forEach((q, i) => { const [qx, qy] = toScr(q[0], q[1]); if (i) g.lineTo(qx, qy); else g.moveTo(qx, qy); }); g.stroke(); }
      for (const m of marks || []) if (m.ring) { const [cx, cy] = toScr(m.x, m.z), [ex] = toScr(m.x + m.ring, m.z); g.strokeStyle = m.color; g.lineWidth = Math.max(2, S / 60); g.beginPath(); g.arc(cx, cy, Math.max(4, Math.abs(ex - cx)), 0, 7); g.stroke(); }
      g.restore(); } }   // where the thief is heading / the lines of the mission
    if (this.nav && this.nav.pts) { g.save(); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, 7); g.clip(); g.lineJoin = 'round'; g.lineCap = 'round'; for (const [col, wd] of [['#ffffff', Math.max(4, S / 28)], ['#2f8cff', Math.max(2.6, S / 46)]]) { g.strokeStyle = col; g.lineWidth = wd; g.beginPath(); this.nav.pts.forEach((q, i) => { const [qx, qy] = toScr(q[0], q[1]); if (i) g.lineTo(qx, qy); else g.moveTo(qx, qy); }); g.stroke(); } g.restore(); }   // the blue way to the pin you tapped on the big map
    const r = Math.max(8, S / 14);
    if (this.nav) icon(this.nav.x, this.nav.z, '#2f8cff', '\u{1F4CD}', r * 0.9);
    icon(REPAIR.x, REPAIR.z, '#e8890c', '\u{1F527}', r); icon(LOBBY.x, LOBBY.z, LOBBY.color, '\u{1F3AF}', r); icon(380, 92, '#22c55e', '\u{1F3CE}', r); icon(BANK.x, BANK.z, '#d4a017', '\u{1F3E6}', r * 0.85); icon(POLICE.x, POLICE.z, '#2a5bd7', '\u{1F693}', r * 0.85);
    for (const m of marks || []) icon(m.x, m.z, m.color, m.glyph, r * 0.95);   // mission targets (the thief, the police station)
    let near = null, nd = 1e9;
    for (const h of HOMES) { icon(h.x, h.z, h.color, '\u{1F3E0}', r * 0.85); const d = Math.hypot(h.x - view.x, h.z - view.z); if (d < nd) { nd = d; near = h; } }
    const label = (txt, x, z, color) => {   // the name of the home you are closest to, always upright under its badge
      const [px, py] = toScr(x, z), fs = Math.round(Math.max(9, S / 12)); g.font = '900 ' + fs + 'px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'top';
      const ty = Math.min(S - fs - 2, py + r * 0.95); g.lineWidth = Math.max(3, S / 40); g.strokeStyle = '#0b1220'; g.lineJoin = 'round'; g.strokeText(txt, px, ty); g.fillStyle = color; g.fillText(txt, px, ty);
    };
    if (near && nd < 70) label(near.name.toUpperCase(), near.x, near.z, '#ffffff');
    if (Math.hypot(REPAIR.x - view.x, REPAIR.z - view.z) < 60) label('REPAIR', REPAIR.x, REPAIR.z, '#ffd23f');
    if (Math.hypot(LOBBY.x - view.x, LOBBY.z - view.z) < 70) label('MISSIONS', LOBBY.x, LOBBY.z, '#d9b8ff');
    if (Math.hypot(380 - view.x, 92 - view.z) < 90) label('STUNT PARK', 380, 92, '#8dffb0');
    for (const o of others || []) { const [px, py] = toScr(o.x, o.z); if (Math.hypot(px - S / 2, py - S / 2) > S / 2 - 4) continue; g.fillStyle = o.color || '#ff5f5f'; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.5, S / 100); g.beginPath(); g.arc(px, py, S / 40, 0, 7); g.fill(); g.stroke(); }
    if (wi) {   // police: the search circle (pulses blue / red) and the officers (flashing blue / red dots)
      const f = wi.phase;
      if (wi.circle) { const [cx, cy] = toScr(wi.circle.x, wi.circle.z), rr = wi.circle.r * k; g.save(); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, 7); g.clip();
        g.fillStyle = f ? 'rgba(40,90,255,.22)' : 'rgba(255,40,40,.16)'; g.strokeStyle = f ? 'rgba(90,140,255,.95)' : 'rgba(255,90,90,.95)'; g.lineWidth = Math.max(2.5, S / 40); g.beginPath(); g.arc(cx, cy, rr, 0, 7); g.fill(); g.stroke(); g.restore(); }
      for (const c of wi.cops) { const [px, py] = toScr(c.x, c.z); if (Math.hypot(px - S / 2, py - S / 2) > S / 2 - 3) continue; g.fillStyle = f ? '#3b6bff' : '#ff3b3b'; g.strokeStyle = '#fff'; g.lineWidth = Math.max(1.2, S / 110); g.beginPath(); g.arc(px, py, c.car ? S / 38 : S / 52, 0, 7); g.fill(); g.stroke(); }
    }
    // me: an arrow in the middle that points where I am heading
    g.save(); g.translate(S / 2, S / 2); g.rotate(-(me.yaw - view.head)); const a = S / 22;
    g.fillStyle = '#ffffff'; g.strokeStyle = '#13203a'; g.lineWidth = Math.max(1.5, S / 100); g.beginPath(); g.moveTo(0, -a * 1.4); g.lineTo(a, a); g.lineTo(0, a * 0.5); g.lineTo(-a, a); g.closePath(); g.fill(); g.stroke(); g.restore();
    // rim + north marker
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = Math.max(2, S / 60); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - g.lineWidth / 2, 0, 7); g.stroke();
    const na = Math.atan2(-s * -1, c * 0) ; void na;
    { const [nx, ny] = toScr(view.x, view.z - 1000); const dx = nx - S / 2, dy = ny - S / 2, d = Math.hypot(dx, dy) || 1, nr = S / 2 - S / 22; g.fillStyle = '#d62828'; g.beginPath(); g.arc(S / 2 + dx / d * nr, S / 2 + dy / d * nr, S / 28, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = 'bold ' + Math.round(S / 22) + 'px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('N', S / 2 + dx / d * nr, S / 2 + dy / d * nr + 1); }
  }
  bigOpen() { if (this.bz) this.bz.set = false; }
  // zoom about the screen point (px, py) of the big map canvas by the factor f; pan by a screen-pixel drag
  bigZoom(f, px, py) { const bz = this.bz, S = this.bS; if (!bz || !S) return; const k0 = S / 1020 * bz.z, wx = bz.cx + (px - S / 2) / k0, wz = bz.cz + (py - S / 2) / k0; bz.z = Math.min(9, Math.max(1, bz.z * f)); const k1 = S / 1020 * bz.z; bz.cx = wx - (px - S / 2) / k1; bz.cz = wz - (py - S / 2) / k1; }
  bigPan(dx, dy) { const bz = this.bz, S = this.bS; if (!bz || !S) return; const k = S / 1020 * bz.z; bz.cx -= dx / k; bz.cz -= dy / k; }
  // the whole island, north up: tap/click the small map (or press M / Tab) to open, again (or Esc) to close
  drawBig(cv, me, others, marks, route, wi) {
    if (!this.map) this.map = drawStatic();
    const S = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.95); if (cv.width !== S) cv.width = cv.height = S;
    // zoom + pan (pinch, mouse wheel / trackpad pinch, + - buttons, drag): opens zoomed in on the player, whole island = zoom 1
    const bz = this.bz || (this.bz = { z: 2.2, cx: 0, cz: 0, set: false }); if (!bz.set) { bz.set = true; bz.z = 2.2; bz.cx = me.x; bz.cz = me.z; }
    bz.z = Math.min(9, Math.max(1, bz.z)); const lim = 510 * (1 - 1 / bz.z) + 40; bz.cx = Math.max(-lim, Math.min(lim, bz.cx)); bz.cz = Math.max(-lim, Math.min(lim, bz.cz)); this.bS = S;
    const g = cv.getContext('2d'), k = S / 1020 * bz.z, ox = S / 2 - bz.cx * k, oy = S / 2 - bz.cz * k;
    g.clearRect(0, 0, S, S); g.fillStyle = '#2c78ad'; g.fillRect(0, 0, S, S);
    g.save(); g.translate(ox, oy); g.scale(k, k); g.drawImage(this.map, -O, -O); g.restore();
    const P = (x, z) => [ox + x * k, oy + z * k];
    const badge = (x, z, bg, glyph, r, name, col, side = 0) => { const [px, py] = P(x, z); g.fillStyle = bg; g.strokeStyle = '#fff'; g.lineWidth = 2.5; g.beginPath(); g.arc(px, py, r, 0, 7); g.fill(); g.stroke();
      g.font = Math.round(r * 1.2) + 'px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff'; g.fillText(glyph, px, py + 1);
      if (name) { const fs = Math.round(Math.max(11, S / 38)); g.font = '900 ' + fs + 'px Arial, sans-serif'; g.textBaseline = 'middle'; g.textAlign = side < 0 ? 'right' : side > 0 ? 'left' : 'center'; const tx = px + side * (r + 4), ty = side ? py : py + r + fs * 0.7; g.lineJoin = 'round'; g.lineWidth = 4; g.strokeStyle = '#0b1220'; g.strokeText(name, tx, ty); g.fillStyle = col || '#fff'; g.fillText(name, tx, ty); } };
    { g.lineWidth = Math.max(3, S / 150); g.lineJoin = 'round'; g.lineCap = 'round'; for (const L of routeLines(route)) { g.strokeStyle = L.color; g.beginPath(); L.pts.forEach((q, i) => { const [qx, qy] = P(q[0], q[1]); if (i) g.lineTo(qx, qy); else g.moveTo(qx, qy); }); g.stroke(); }
      for (const m of marks || []) if (m.ring) { const [cx, cy] = P(m.x, m.z); g.strokeStyle = m.color; g.lineWidth = Math.max(2.5, S / 120); g.beginPath(); g.arc(cx, cy, Math.max(5, m.ring * k), 0, 7); g.stroke(); } }
    if (this.nav && this.nav.pts) { g.lineJoin = 'round'; g.lineCap = 'round'; for (const [col, wd] of [['#ffffff', Math.max(6, S / 85)], ['#2f8cff', Math.max(3.6, S / 140)]]) { g.strokeStyle = col; g.lineWidth = wd; g.beginPath(); this.nav.pts.forEach((q, i) => { const [qx, qy] = P(q[0], q[1]); if (i) g.lineTo(qx, qy); else g.moveTo(qx, qy); }); g.stroke(); } }
    const r = Math.max(9, S / 40);
    badge(REPAIR.x, REPAIR.z, '#e8890c', '\u{1F527}', r, 'REPAIR SHOP', '#ffd23f'); badge(LOBBY.x, LOBBY.z, LOBBY.color, '\u{1F3AF}', r, 'MISSION LOBBY', '#d9b8ff'); badge(380, 92, '#22c55e', '\u{1F3CE}', r, 'STUNT PARK', '#8dffb0'); badge(382, 93.5, '#d71920', '\u{1F3C1}', r * 0.55, 'F1 CAR', '#ff9a9a', -1); badge(400, 93.5, '#1a7f4b', '\u{1F68C}', r * 0.55, 'BUSES', '#9dffc4', 1); badge(STUNT.startX + 60, 0, '#ffd23f', '\u{1F3C1}', r * 0.7, 'STUNT JUMP', '#5ef0ff');
    badge(BANK.x, BANK.z, '#d4a017', '\u{1F3E6}', r * 0.8, 'CITY BANK', '#ffe08a', 1); badge(POLICE.x, POLICE.z, '#2a5bd7', '\u{1F693}', r * 0.8, 'POLICE', '#bcd2ff', 1);
    for (const m of marks || []) badge(m.x, m.z, m.color, m.glyph, r * 0.9);
    if (this.nav) badge(this.nav.x, this.nav.z, '#2f8cff', '\u{1F4CD}', r * 0.95, 'ROUTE', '#9cc8ff');
    for (const h of HOMES) badge(h.x, h.z, h.color, '\u{1F3E0}', r * 0.8, h.name.toUpperCase(), '#fff', h.x < -90 ? -1 : 1);
    for (const o of others || []) { const [px, py] = P(o.x, o.z); g.fillStyle = o.color || '#ff5f5f'; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(px, py, r * 0.55, 0, 7); g.fill(); g.stroke(); }
    if (wi) {
      const f = wi.phase;
      if (wi.circle) { const [cx, cy] = P(wi.circle.x, wi.circle.z); g.fillStyle = f ? 'rgba(40,90,255,.22)' : 'rgba(255,40,40,.16)'; g.strokeStyle = f ? 'rgba(90,140,255,.95)' : 'rgba(255,90,90,.95)'; g.lineWidth = Math.max(3, S / 120); g.beginPath(); g.arc(cx, cy, wi.circle.r * k, 0, 7); g.fill(); g.stroke(); }
      for (const c of wi.cops) { const [px, py] = P(c.x, c.z); g.fillStyle = f ? '#3b6bff' : '#ff3b3b'; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(px, py, c.car ? r * 0.5 : r * 0.35, 0, 7); g.fill(); g.stroke(); }
    }
    { const [px, py] = P(me.x, me.z), a = r * 0.8; g.save(); g.translate(px, py); g.rotate(Math.PI - me.yaw); g.fillStyle = '#fff'; g.strokeStyle = '#13203a'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(0, -a * 1.5); g.lineTo(a, a); g.lineTo(0, a * 0.5); g.lineTo(-a, a); g.closePath(); g.fill(); g.stroke(); g.restore(); }
    g.fillStyle = '#d62828'; g.font = '900 ' + Math.round(S / 28) + 'px Arial'; g.textAlign = 'center'; g.textBaseline = 'top'; g.fillText('N', S / 2, 6);
  }
}
