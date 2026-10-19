// CAR DAMAGE (visual): bullets and bat hits leave cracked glass, bullet holes, dents and flat tyres on the car that was hit.
// A hit is stored as a small integer (st.dmg = [codes]) so it can be sent over the network and rebuilt on every screen.
// code = zone | face << 2 | u << 4 | v << 9      zone: 0 glass crack, 1 bullet hole, 2 flat tyre, 3 dent      face: 0 front, 1 rear, 2 left, 3 right      u, v: 0..31
import * as THREE from 'three';
import { CAR_STYLES } from './hcar.js';

export const MAX_HITS = 14;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// where a shot / swing meets the car box (st.x, st.z, st.yaw, st.hl, st.hw): point along the ray (ox,oz)+(fx,fz)*t, height h -> hit code (or -1)
export function hitCode(st, px, pz, h, zone) {
  const dx = px - st.x, dz = pz - st.z, f = Math.sin(st.yaw), g = Math.cos(st.yaw), lz = dx * f + dz * g, lx = -dx * g + dz * f;   // lz forward, lx right
  const hl = st.hl || 2.3, hw = st.hw || 1;
  const face = Math.abs(lz) / hl > Math.abs(lx) / hw ? (lz > 0 ? 0 : 1) : (lx < 0 ? 2 : 3);
  const u = face < 2 ? clamp(Math.round((lx / hw * 0.5 + 0.5) * 31), 0, 31) : clamp(Math.round((lz / hl * 0.5 + 0.5) * 31), 0, 31);
  const v = clamp(Math.round(h / 1.7 * 31), 0, 31);
  if (zone === undefined) zone = h < 0.5 ? 2 : (h < 0.82 || h > 1.6) ? 1 : 0;
  return zone | face << 2 | u << 4 | v << 9;
}
export function addHit(st, code) { const a = st.dmg || (st.dmg = []); if (a.length >= MAX_HITS) a.shift(); a.push(code); return a; }

// ---------------------------------------------------------------- textures
let TX = null;
function textures() {
  if (TX) return TX;
  const mk = (draw, s = 128) => { const cv = document.createElement('canvas'); cv.width = cv.height = s; const g = cv.getContext('2d'); draw(g, s); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const crack = mk((g, s) => {   // a shattered-glass star: lines from the impact point + a few rings
    g.translate(s / 2, s / 2); g.strokeStyle = 'rgba(235,245,255,0.95)'; g.lineCap = 'round';
    let seed = 7; const r = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = 0; i < 11; i++) { const a = i / 11 * Math.PI * 2 + r() * 0.3, L = s * (0.28 + r() * 0.2); g.lineWidth = 3.6; g.beginPath(); g.moveTo(0, 0); let x = 0, y = 0; for (let k = 1; k <= 4; k++) { x += Math.cos(a + (r() - 0.5) * 0.35) * L / 4; y += Math.sin(a + (r() - 0.5) * 0.35) * L / 4; g.lineTo(x, y); } g.stroke(); }
    g.lineWidth = 2.2; for (const rr of [0.1, 0.2, 0.31]) { g.beginPath(); for (let i = 0; i <= 14; i++) { const a = i / 14 * Math.PI * 2, q = s * rr * (0.85 + r() * 0.3); i ? g.lineTo(Math.cos(a) * q, Math.sin(a) * q) : g.moveTo(Math.cos(a) * q, Math.sin(a) * q); } g.stroke(); }
    g.fillStyle = 'rgba(20,24,30,0.85)'; g.beginPath(); g.arc(0, 0, 4.5, 0, 7); g.fill();
  });
  const hole = mk((g, s) => { const c = s / 2, gr = g.createRadialGradient(c, c, 2, c, c, c * 0.9); gr.addColorStop(0, 'rgba(0,0,0,0.95)'); gr.addColorStop(0.35, 'rgba(10,10,10,0.9)'); gr.addColorStop(0.6, 'rgba(40,40,40,0.45)'); gr.addColorStop(1, 'rgba(40,40,40,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); });
  const dent = mk((g, s) => { const c = s / 2, gr = g.createRadialGradient(c, c, 4, c, c, c); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, s, s); g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 3; g.beginPath(); g.arc(c - 4, c - 4, c * 0.42, 3.6, 5.4); g.stroke(); });
  const mat = (map, extra = {}) => new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, toneMapped: false, ...extra }), bias = (m) => { m.onBeforeCompile = (sh) => { sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n mvPosition.xyz -= normalize(mvPosition.xyz) * 0.25; gl_Position = projectionMatrix * mvPosition;'); }; return m; };   // a depth bias along the view ray: the decal is drawn although the glass / body surface is a few cm in front of it, and its place on screen does not change
  TX = { crack: bias(mat(crack)), hole: bias(mat(hole)), dent: bias(mat(dent)), flat: bias(new THREE.MeshBasicMaterial({ color: '#0b0b0c', transparent: true, opacity: 0.9, depthWrite: false })), plane: new THREE.PlaneGeometry(1, 1), disc: new THREE.CircleGeometry(0.5, 20) };
  return TX;
}

// ---------------------------------------------------------------- placement in car space (x forward, y up, z to the right of the nose direction -> -z is right? see below)
// the model lives in a group rotated by -PI/2 about y: car-space +x = nose, +z = the car's LEFT side... decals are added to that group so we use its space
const profY = (sp, x) => { const P = sp.prof; if (x >= P[0][0]) return P[0][1]; for (let i = 0; i < P.length - 1; i++) { const a = P[i], b = P[i + 1]; if (x <= a[0] && x >= b[0]) { const t = (a[0] - x) / (a[0] - b[0] || 1); return a[1] + (b[1] - a[1]) * t; } } return P[P.length - 1][1]; };

function place(sp, code) {
  const zone = code & 3, face = (code >> 2) & 3, u = ((code >> 4) & 31) / 31 * 2 - 1, v = ((code >> 9) & 31) / 31 * 1.7, hw = sp.w, hl = sp.L / 2;
  const T = textures(); const out = [];
  const sideZ = face === 2 ? -1 : 1;   // face 2 = left (lx<0)  -> model z: see mapping in buildCityMesh: left side of the car is -z in model space after the -PI/2 turn (verified by screenshot)
  if (zone === 0) {   // cracked glass: snap to the glass nearest to where it was hit
    const m = new THREE.Mesh(T.plane, T.crack);
    if (face <= 1) {   // windshield (front) / rear window: lie on the slope of the profile
      const [a, b] = face === 0 ? (sp.wind || [0.14, 0.93]) : (sp.rear || [-1.5, -0.98]), x = (a + b) / 2, ya = profY(sp, a), yb = profY(sp, b), tx = b - a, ty = yb - ya, l = Math.hypot(tx, ty) || 1;
      const n = new THREE.Vector3(-ty / l, tx / l, 0); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
      const off = face === 0 ? 0.075 : 0.17; m.position.set(x + n.x * off, profY(sp, x) + n.y * off, u * hw * 0.5); m.scale.set(0.75, 0.75, 1);
    } else {            // side windows
      const x = clamp(u * hl * 0.5 + 0.05, -0.85, 0.75), y = Math.max(profY(sp, x) - 0.3, 1.05);
      m.position.set(x, y, sideZ * (hw * 0.93 + 0.07)); m.rotation.y = sideZ > 0 ? 0 : Math.PI; m.scale.set(0.65, 0.65, 1);
    }
    out.push(m);
  } else if (zone === 1 || zone === 3) {   // a bullet hole / a dent on the body
    const big = zone === 3, sz = big ? 0.5 : 0.14, y = clamp(v, 0.42, 0.78);
    const m = new THREE.Mesh(T.plane, big ? T.dent : T.hole); m.scale.set(sz, sz, 1);
    if (face >= 2) { m.position.set(clamp(u * hl * 0.85, -hl * 0.85, hl * 0.85), y, sideZ * (hw + 0.03)); m.rotation.y = sideZ > 0 ? 0 : Math.PI; }
    else { const fx = face === 0 ? 1 : -1; m.position.set(fx * (hl + 0.0), y - (face === 0 ? 0.0 : -0.1), u * hw * 0.8); m.rotation.y = fx > 0 ? Math.PI / 2 : -Math.PI / 2; }
    out.push(m);
  } else {   // flat tyre: a dark squashed patch at the wheel
    const wx = (face === 0 ? 1 : face === 1 ? -1 : (u > 0 ? 1 : -1)) * sp.axle, wz = (face === 2 ? -1 : face === 3 ? 1 : (u > 0 ? 1 : -1)) * (hw - sp.ww / 2 + 0.03);
    const m = new THREE.Mesh(T.disc, T.flat); m.scale.set(sp.wr * 1.6, sp.wr * 0.5, 1); m.rotation.x = -Math.PI / 2; m.position.set(wx, 0.035, wz); out.push(m);
  }
  return out;
}

// keep the decals on a car model in step with st.dmg; also returns the body sag (flat tyres) for the caller
export function syncDamage(mesh, st) {
  const u = mesh.userData; if (!u || !u.spec) return null;
  const n = st.dmg ? st.dmg.length : 0, key = n ? n + ':' + st.dmg[n - 1] : '0';
  if (u.dmKey === key) return u.sag || null;
  u.dmKey = key;
  const sp = CAR_STYLES[u.spec.style]; if (!sp) return null;
  const rot = mesh.children[0]; if (!rot) return null;
  if (u.dmgGroup) { rot.remove(u.dmgGroup); } u.dmgGroup = null; u.sag = null;
  if (!n) return null;
  const grp = new THREE.Group(); u.dmgGroup = grp; rot.add(grp);
  let fl = 0, fr = 0, rl = 0, rr = 0;
  for (const c of st.dmg) {
    for (const m of place(sp, c)) { m.renderOrder = 8; grp.add(m); }
    if ((c & 3) === 2) { const face = (c >> 2) & 3, uu = ((c >> 4) & 31) / 31 * 2 - 1; const front = face === 0 || (face >= 2 && false) || (face >= 2 && uu > 0), left = face === 2 || (face < 2 && uu < 0); if (front) { left ? fl = 1 : fr = 1; } else { left ? rl = 1 : rr = 1; } }
  }
  const cnt = fl + fr + rl + rr;
  if (cnt) u.sag = { roll: ((fl + rl) - (fr + rr)) * 0.03, pitch: ((rl + rr) - (fl + fr)) * 0.022, drop: 0.05 * Math.min(2, cnt) };
  return u.sag;
}
export function applySag(mesh, sag) { if (!sag) return; mesh.rotation.z += sag.roll; mesh.rotation.x += sag.pitch; mesh.position.y -= sag.drop * 0.0; }
