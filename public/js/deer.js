// DEER for Punjabi GTA only (never created in Jang): small herds graze in the city parks and on the slopes of Mount Haris. They wander, graze with the head down,
// and bolt away when you (or a vehicle) come close. Local and harmless: nobody can hurt them, and only the ones near the camera are drawn / updated.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { gtaH, GT, PARKS } from './gta.js';

const rng = (seed) => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };
const BROWN = '#9a6a3c', DARK = '#6e4724', LIGHT = '#d9c3a0', WHITE = '#f3ead8', ANTLER = '#cdbb94', BLACK = '#1c1410';
const SHOW = 170, SHOW2 = SHOW * SHOW;

function part(geo, col, x, y, z, rx = 0, rz = 0) {   // one coloured piece, placed and tilted
  geo = geo.index ? geo.toNonIndexed() : geo; geo.rotateX(rx); geo.rotateZ(rz); geo.translate(x, y, z);
  const c = new THREE.Color(col), n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3)); geo.deleteAttribute('uv'); return geo;
}
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (r0, r1, h) => new THREE.CylinderGeometry(r0, r1, h, 5);
const merge = (parts) => mergeGeometries(parts.map((p) => { if (!p.attributes.normal) p.computeVertexNormals(); return p; }));

let GEO = null;
function geos() {   // built once, shared by every deer (forward = +z, feet on y = 0)
  if (GEO) return GEO;
  const body = merge([part(box(0.52, 0.56, 1.15), BROWN, 0, 1.05, 0), part(box(0.46, 0.2, 1.0), LIGHT, 0, 0.8, 0), part(box(0.5, 0.5, 0.4), DARK, 0, 1.08, 0.5), part(box(0.16, 0.2, 0.12), WHITE, 0, 1.12, -0.62), part(box(0.5, 0.36, 0.5), BROWN, 0, 1.0, -0.4)]);
  const head = (stag) => { const p = [part(box(0.2, 0.62, 0.22), BROWN, 0, 0.3, 0.06, -0.35), part(box(0.2, 0.2, 0.42), BROWN, 0, 0.66, 0.3), part(box(0.1, 0.1, 0.1), BLACK, 0, 0.66, 0.53),
    part(box(0.05, 0.16, 0.1), DARK, -0.12, 0.8, 0.1), part(box(0.05, 0.16, 0.1), DARK, 0.12, 0.8, 0.1)];
    if (stag) for (const s of [-1, 1]) { p.push(part(cyl(0.025, 0.035, 0.55), ANTLER, s * 0.1, 1.02, 0.12, 0, -s * 0.3)); p.push(part(cyl(0.02, 0.03, 0.3), ANTLER, s * 0.22, 1.22, 0.1, 0, -s * 0.7)); p.push(part(cyl(0.02, 0.03, 0.25), ANTLER, s * 0.12, 1.2, 0.22, 0.6, -s * 0.2)); }
    return merge(p); };
  const legs = (pair) => merge(pair.map(([x, z]) => part(box(0.1, 0.86, 0.1), DARK, x, -0.43, z)));
  GEO = { body, doe: head(false), stag: head(true), legsA: legs([[-0.17, 0.42], [0.17, -0.42]]), legsB: legs([[0.17, 0.42], [-0.17, -0.42]]),
    mat: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 }) };
  return GEO;
}


export function buildDeerRig(stag, scale = 1) {   // one deer: a group with a body, a head (pivots at the neck) and two leg pairs (pivot at the hips); forward = +z
  const G = geos(), g = new THREE.Group(), body = new THREE.Mesh(G.body, G.mat), head = new THREE.Mesh(stag ? G.stag : G.doe, G.mat), la = new THREE.Mesh(G.legsA, G.mat), lb = new THREE.Mesh(G.legsB, G.mat);
  head.position.set(0, 1.25, 0.62); la.position.y = lb.position.y = 0.86; for (const m of [body, head, la, lb]) { m.castShadow = false; g.add(m); }
  g.scale.setScalar(scale); return { g, head, la, lb };
}

export class Deer {
  constructor(scene, lite) {
    this.scene = scene; this.list = []; const R = rng(2024), G = geos(), spots = [];
    PARKS.forEach(([px, pz], k) => { for (let i = 0; i < 3; i++) spots.push({ cx: px, cz: pz, r: 17, keep: 6.5, stag: i === 0 }); });          // 3 in every park (a stag and two does)
    const MT = GT.MT; for (let h = 0; h < 3; h++) { const a = h * 2.1 + 0.6, cx = MT.cx + Math.cos(a) * 62, cz = MT.cz + Math.sin(a) * 62; for (let i = 0; i < 3; i++) spots.push({ cx, cz, r: 22, keep: 0, stag: i === 0 }); }   // 3 herds on the mountain slopes
    spots.forEach((s, i) => {
      if (lite && i % 2) return;   // phones: half of them
      const a = R() * 6.28, d = Math.max(s.keep + 1, Math.sqrt(R()) * s.r * 0.8), sc = s.stag ? 1.08 : 0.95 + R() * 0.1, { g, head, la, lb } = buildDeerRig(s.stag, sc); g.visible = false; scene.add(g);
      const d0 = { g, head, la, lb, s, x: s.cx + Math.cos(a) * d, z: s.cz + Math.sin(a) * d, yaw: R() * 6.28, st: 'graze', t: 2 + R() * 6, tx: 0, tz: 0, ph: R() * 6, hd: 0.9, y: 0 };
      d0.y = gtaH(d0.x, d0.z); this.list.push(d0);
    });
  }
  update(dt, cam, threats) {
    dt = Math.min(dt, 0.1);
    for (const d of this.list) {
      const cdx = d.x - cam.x, cdz = d.z - cam.z, near = cdx * cdx + cdz * cdz < SHOW2; d.g.visible = near; if (!near) continue;
      let fx = 0, fz = 0, fear = 0;   // push-away vector from everything scary close by
      for (const t of threats) { const dx = d.x - t.x, dz = d.z - t.z, q = Math.hypot(dx, dz), r = t.v > 5 ? 26 : 13; if (q < r && q > 0.01) { const w = (r - q) / r; fx += dx / q * w; fz += dz / q * w; fear = Math.max(fear, w); } }
      if (fear > 0.05 && d.st !== 'flee') { d.st = 'flee'; d.t = 2.5 + Math.random() * 1.5; }
      d.t -= dt;
      if (d.st === 'flee') { if (fear > 0.05) { d.fa = Math.atan2(fx, fz); d.t = Math.max(d.t, 1.2); } if (d.t <= 0) { d.st = 'graze'; d.t = 3 + Math.random() * 5; } }
      else if (d.t <= 0) { if (d.st === 'graze') { d.st = 'walk'; d.t = 3 + Math.random() * 5; const a = Math.random() * 6.28, r = Math.random() * d.s.r * 0.8; d.tx = d.s.cx + Math.cos(a) * r; d.tz = d.s.cz + Math.sin(a) * r; } else { d.st = 'graze'; d.t = 4 + Math.random() * 8; } }
      let want = d.yaw, sp = 0;
      if (d.st === 'flee') { want = d.fa === undefined ? d.yaw : d.fa; sp = 8.5; }
      else if (d.st === 'walk') { want = Math.atan2(d.tx - d.x, d.tz - d.z); sp = 1.3; if (Math.hypot(d.tx - d.x, d.tz - d.z) < 1) { d.st = 'graze'; d.t = 3 + Math.random() * 6; } }
      let dy = want - d.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); d.yaw += dy * Math.min(1, dt * (d.st === 'flee' ? 7 : 2.5));
      if (sp > 0) { d.x += Math.sin(d.yaw) * sp * dt; d.z += Math.cos(d.yaw) * sp * dt; d.ph += sp * dt * 2.6; }
      const ox = d.x - d.s.cx, oz = d.z - d.s.cz, od = Math.hypot(ox, oz);   // stay in the park / on the slope; keep off the fountain
      if (od > d.s.r) { d.x = d.s.cx + ox / od * d.s.r; d.z = d.s.cz + oz / od * d.s.r; if (d.st === 'flee') d.fa = Math.atan2(-ox, -oz); }
      if (d.s.keep && od < d.s.keep) { const k = od < 0.01 ? 1 : d.s.keep / od; d.x = d.s.cx + (od < 0.01 ? d.s.keep : ox * k); d.z = d.s.cz + (od < 0.01 ? 0 : oz * k); }
      d.y += (gtaH(d.x, d.z) - d.y) * Math.min(1, dt * 12);
      const swing = sp > 0 ? Math.sin(d.ph) * (sp > 4 ? 0.9 : 0.5) : 0; d.la.rotation.x = swing; d.lb.rotation.x = -swing;
      const hd = d.st === 'graze' ? 1.0 : d.st === 'flee' ? -0.15 : 0.1; d.hd += (hd - d.hd) * Math.min(1, dt * 4); d.head.rotation.x = d.hd;   // head down while grazing, up when running
      d.g.position.set(d.x, d.y, d.z); d.g.rotation.y = d.yaw; d.g.position.y += sp > 4 ? Math.abs(Math.sin(d.ph)) * 0.18 : 0;
    }
  }
  dispose() { for (const d of this.list) this.scene.remove(d.g); this.list.length = 0; }   // the geometry and material are shared for the whole session
}
