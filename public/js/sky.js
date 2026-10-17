// SKY SPEEDWAY: an elevated road (y = 16) above the two highways of the Fun Map.  Drive up the ramp on the right, race along the
// right side, across the park, and down the left side through moving obstacles (sweeping walls, spinners, barrels, oil slicks).
// Clear it and you unlock 4 red RACER cars waiting on the sky plaza at the far left end.
// The layout + obstacle maths are pure (no DOM) so the same code runs in the car physics, the tests and the visuals.
import * as THREE from 'three';
import { textBoard } from './flags.js';

export const SKY_Y = 16, SKY_HW = 7, HX = 56;
const CROSS_Z = -4, FAR_Z = -416;

export function skyLayout() {
  const segs = [], plazas = [], boosts = [], slicks = [], defs = [], gates = [], pillars = [];
  // ground branches that lead to / from the ramps, and the ramps themselves
  const ground = [
    { ax: HX, az: -322, bx: 38, bz: -350, hw: 7, g: 'sbr+' },
    { ax: -HX, az: -322, bx: -38, bz: -350, hw: 7, g: 'sbr-' },
  ];
  segs.push({ ax: 38, az: -350, bx: 38, bz: -410, hw: 6, y0: 0, y1: SKY_Y, g: 'ramp+' });
  segs.push({ ax: HX, az: FAR_Z, bx: HX, bz: CROSS_Z, hw: SKY_HW, y0: SKY_Y, y1: SKY_Y, g: 's2' });
  segs.push({ ax: HX, az: CROSS_Z, bx: -HX, bz: CROSS_Z, hw: SKY_HW, y0: SKY_Y, y1: SKY_Y, g: 'sx' });
  segs.push({ ax: -HX, az: CROSS_Z, bx: -HX, bz: FAR_Z, hw: SKY_HW, y0: SKY_Y, y1: SKY_Y, g: 's3' });
  segs.push({ ax: -38, az: -410, bx: -38, bz: -350, hw: 6, y0: SKY_Y, y1: 0, g: 'ramp-' });
  plazas.push({ x: 47, z: FAR_Z, r: 15, y: SKY_Y, g: 'pa' }, { x: HX, z: CROSS_Z, r: 12, y: SKY_Y, g: 'pb' },
    { x: -HX, z: CROSS_Z, r: 12, y: SKY_Y, g: 'pc' }, { x: -47, z: FAR_Z, r: 15, y: SKY_Y, g: 'pd' });

  // ---- obstacles.  sweep: a wall that slides along its own axis;  spin: two-armed bar;  barrel / block: static
  const sweep = (x, z, ux, uz, amp, w, ph, len = 7) => defs.push({ k: 'sweep', x, z, ux, uz, amp, w, ph, len });
  const spin = (x, z, w, ph = 0, arm = 3.6) => defs.push({ k: 'spin', x, z, w, ph, arm });
  const barrel = (x, z) => defs.push({ k: 'barrel', x, z, r: 1.3 });
  const blocks = (x, z0, z1) => { for (let z = z0; z <= z1 + 0.01; z += 2.4) defs.push({ k: 'block', x, z, r: 1.2 }); };
  const slick = (x, z, r = 7) => { slicks.push({ x, z, r, y: SKY_Y }); };
  const boost = (x, z) => boosts.push({ x, z, r: 4, y: SKY_Y });
  // right side (heading north, +z)
  boost(HX, -396); barrel(HX - 3.2, -385); barrel(HX + 3.2, -375); barrel(HX - 3.2, -365); barrel(HX + 3.2, -355); boost(HX, -345);
  sweep(HX, -330, 1, 0, 2.0, 1.3, 0);
  blocks(HX - 3.2, -292, -284); blocks(HX + 3.2, -276, -268);
  boost(HX, -255); slick(HX, -238); sweep(HX, -215, 1, 0, 2.2, 1.7, 1.2); boost(HX, -190);
  spin(HX, -165, 1.6);
  barrel(HX + 3.2, -135); barrel(HX - 3.2, -125); barrel(HX + 3.2, -115);
  boost(HX, -100); sweep(HX, -85, 1, 0, 2.2, 2.1, 2.4); spin(HX, -45, -1.9, 1); boost(HX, -22);
  // across the park (heading west, -x): obstacles slide along z
  sweep(32, CROSS_Z, 0, 1, 2.0, 1.8, 0.5); boost(15, CROSS_Z); spin(0, CROSS_Z, -1.8, 0.3); boost(-15, CROSS_Z); sweep(-30, CROSS_Z, 0, 1, 2.2, 2.3, 1.5);
  // left side (heading south, -z) - the hard half
  const LX = -HX;
  boost(LX, -25); barrel(LX - 3.2, -40); barrel(LX + 3.2, -50); barrel(LX - 3.2, -60); barrel(LX + 3.2, -70);
  sweep(LX, -100, 1, 0, 2.2, 2.0, 0); sweep(LX, -115, 1, 0, 2.2, 2.0, 3.1);
  boost(LX, -128); spin(LX, -150, 1.9); spin(LX, -172, -2.2, 0.8); boost(LX, -190);
  slick(LX, -205); blocks(LX - 3.2, -238, -230); blocks(LX + 3.2, -222, -214);
  boost(LX, -246); sweep(LX, -262, 1, 0, 2.3, 2.4, 0.4); sweep(LX, -277, 1, 0, 2.3, -2.6, 2.0);
  slick(LX, -300); spin(LX, -325, 2.4, 0.5); boost(LX, -338);
  barrel(LX - 3.2, -348); barrel(LX + 3.2, -356); barrel(LX - 3.2, -364); sweep(LX, -376, 1, 0, 2.3, 2.8, 1.0); boost(LX, -388);

  gates.push({ x: HX, z: -250, w: 8 }, { x: 15, z: CROSS_Z, w: 8 }, { x: LX, z: -185, w: 8 }, { x: LX, z: -397, w: 8 });
  // the garage: where the red racers wait (sky plaza at the far end of the left side)
  const garage = { x: -47, z: FAR_Z, r: 15 };
  const racers = [-57, -51, -45, -39].map((x, i) => ({ id: 4 + i, x, z: -423, y: SKY_Y, yaw: 0 }));
  // support pillars: standing on the ground beside the highways (never inside a road lane)
  for (const sd of [1, -1]) {
    for (let z = -40; z > -405; z -= 30) if (Math.abs(z + 26) > 20) pillars.push({ x: sd * HX - 10.2, z, kind: 'gantry', sd, span: 10.2 });
    pillars.push({ x: sd * 38 - 6.6, z: -380, kind: 'col' }, { x: sd * 38 + 6.6, z: -380, kind: 'col' }, { x: sd * 38 - 6.6, z: -365, kind: 'col' }, { x: sd * 38 + 6.6, z: -365, kind: 'col' });
    pillars.push({ x: sd * HX, z: CROSS_Z, kind: 'plaza' }, { x: sd * 34, z: -421, kind: 'plaza' }, { x: sd * 44, z: -404, kind: 'plaza' });
  }
  return { ground, segs, plazas, boosts, slicks, defs, gates, garage, racers, pillars };
}

// ---- moving circles at time t (shared by physics + visuals).  The same list object is reused every call.
export function makeDyn(defs) {
  const out = [];
  const items = defs.map((d) => {
    const circles = [];
    if (d.k === 'sweep') { const n = Math.round(d.len / 1.5) + 1; for (let i = 0; i < n; i++) circles.push({ x: 0, z: 0, y: SKY_Y, r: 0.9, vx: 0, vz: 0, off: -d.len / 2 + i * d.len / (n - 1) }); }
    else if (d.k === 'spin') { circles.push({ x: d.x, z: d.z, y: SKY_Y, r: 1.2, vx: 0, vz: 0, rr: 0, side: 1 }); for (let r = 2; r <= d.arm + 0.01; r += 1.4) for (const side of [1, -1]) circles.push({ x: 0, z: 0, y: SKY_Y, r: 0.9, vx: 0, vz: 0, rr: r, side }); }
    else circles.push({ x: d.x, z: d.z, y: SKY_Y, r: d.r, vx: 0, vz: 0 });
    for (const c of circles) out.push(c);
    return { d, circles };
  });
  const fn = (t) => {
    for (const { d, circles } of items) {
      if (d.k === 'sweep') {
        const s = d.amp * Math.sin(d.w * t + d.ph), v = d.amp * d.w * Math.cos(d.w * t + d.ph);
        for (const c of circles) { const o = c.off + s; c.x = d.x + d.ux * o; c.z = d.z + d.uz * o; c.vx = d.ux * v; c.vz = d.uz * v; }
      } else if (d.k === 'spin') {
        const th = d.ph + d.w * t;
        for (const c of circles) if (c.rr) { const co = Math.cos(th), si = Math.sin(th); c.x = d.x + c.side * c.rr * co; c.z = d.z + c.side * c.rr * si; c.vx = -c.side * c.rr * d.w * si; c.vz = c.side * c.rr * d.w * co; }
      }
    }
    return out;
  };
  fn.items = items;
  return fn;
}

// ---- visuals ---------------------------------------------------------------------------------------------------------
export function buildSkyVisuals(world, L, th, segsAll) {
  const wm = world.main, wg = world.glow, grp = world.group, Y = SKY_Y;
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  const DECK = '#2f3342', RAIL1 = '#ff3b3b', RAIL2 = '#ffffff';
  const inner = (x, z, g) => { for (const q of L.segs) { if (q.g === g) continue; const abx = q.bx - q.ax, abz = q.bz - q.az, l2 = abx * abx + abz * abz; let t = ((x - q.ax) * abx + (z - q.az) * abz) / l2; t = Math.max(0, Math.min(1, t)); if (Math.hypot(x - (q.ax + abx * t), z - (q.az + abz * t)) < q.hw - 0.5) return true; } for (const p of L.plazas) if (p.g !== g && Math.hypot(x - p.x, z - p.z) < p.r - 0.5) return true; return false; };
  // road pieces (<= 12 m), sloped on the ramps
  let pi = 0;
  for (const q of L.segs) {
    const len = Math.hypot(q.bx - q.ax, q.bz - q.az), n = Math.max(1, Math.ceil(len / 12));
    for (let k = 0; k < n; k++, pi++) {
      const t0 = k / n, t1 = (k + 1) / n, ax = q.ax + (q.bx - q.ax) * t0, az = q.az + (q.bz - q.az) * t0, bx = q.ax + (q.bx - q.ax) * t1, bz = q.az + (q.bz - q.az) * t1;
      const ya = q.y0 + (q.y1 - q.y0) * t0, yb = q.y0 + (q.y1 - q.y0) * t1, dx = bx - ax, dz = bz - az, L2 = Math.hypot(dx, dz), mx = (ax + bx) / 2, mz = (az + bz) / 2, ym = (ya + yb) / 2;
      const yaw = -Math.atan2(dz, dx), pitch = Math.atan2(yb - ya, L2), px = -dz / L2, pz = dx / L2, hl = Math.hypot(L2, yb - ya);
      wm.add(box(hl + 0.3, 0.9, q.hw * 2), mx, ym - 0.45, mz, DECK, 0, yaw, pitch, 1, 1, 1, 'YXZ');
      for (const sg of [-1, 1]) {
        const rx = mx + px * sg * (q.hw - 0.3), rz = mz + pz * sg * (q.hw - 0.3);
        if (!inner(rx, rz, q.g)) {
          wm.add(box(hl + 0.05, 1.0, 0.55), rx, ym + 0.5, rz, (pi + (sg > 0 ? 1 : 0)) % 2 ? RAIL1 : RAIL2, 0, yaw, pitch, 1, 1, 1, 'YXZ');
          wg.add(box(hl + 0.05, 0.12, 0.2), rx - px * sg * 0.1, ym + 1.1, rz - pz * sg * 0.1, '#22f2ff', 0, yaw, pitch, 1, 1, 1, 'YXZ');
        }
      }
      if (pi % 2 === 0 && !inner(mx, mz, q.g)) wg.add(box(Math.min(hl, 5) * 0.55, 0.04, 0.3), mx, ym + 0.04, mz, '#ffe14a', 0, yaw, pitch, 1, 1, 1, 'YXZ');
    }
  }
  for (const p of L.plazas) {
    wm.add(new THREE.CylinderGeometry(p.r, p.r, 0.9, 40), p.x, p.y - 0.45, p.z, DECK);
    for (let k = 0; k < 36; k++) { const a = (k / 36) * Math.PI * 2, x = p.x + Math.cos(a) * (p.r - 0.3), z = p.z + Math.sin(a) * (p.r - 0.3); if (!inner(x, z, p.g)) wm.add(box(2.4, 1.0, 0.55), x, p.y + 0.5, z, k % 2 ? RAIL1 : RAIL2, 0, -a + Math.PI / 2, 0); }
  }
  // pillars
  for (const pl of L.pillars) {
    if (pl.kind === 'gantry') { // two columns either side of the highway + a beam under the sky deck
      for (const sx of [-1, 1]) wm.add(new THREE.CylinderGeometry(0.55, 0.7, Y - 0.9, 10), pl.x + (sx > 0 ? 2 * pl.span : 0), (Y - 0.9) / 2, pl.z, '#9aa3b8');
      wm.add(box(2 * pl.span + 1.4, 0.9, 1.4), pl.x + pl.span, Y - 1.35, pl.z, '#7b84a0');
    } else if (pl.kind === 'col') { wm.add(new THREE.CylinderGeometry(0.5, 0.65, Y * 0.85, 10), pl.x, Y * 0.42, pl.z, '#9aa3b8'); }
    else { wm.add(new THREE.CylinderGeometry(1.1, 1.5, Y - 0.9, 12), pl.x, (Y - 0.9) / 2, pl.z, '#9aa3b8'); }
  }
  // turbo pads + oil slicks
  for (const b of L.boosts) { wm.add(box(10, 0.07, 8), b.x, b.y + 0.04, b.z, '#ff9f1c'); for (let i = 0; i < 3; i++) wm.add(new THREE.ConeGeometry(1.5, 2.0, 3), b.x, b.y + 0.1, b.z + 2 - i * 2, '#fff3b0', 0, Math.PI, 0); }
  for (const s of L.slicks) { wm.add(new THREE.CylinderGeometry(s.r, s.r, 0.05, 28), s.x, s.y + 0.04, s.z, '#1c1030'); wg.add(new THREE.CylinderGeometry(s.r * 0.62, s.r * 0.62, 0.03, 24), s.x, s.y + 0.07, s.z, '#3a1f66'); }
  // static obstacles
  for (const d of L.defs) {
    if (d.k === 'barrel') { wm.add(new THREE.CylinderGeometry(d.r * 0.85, d.r * 0.85, 1.5, 14), d.x, Y + 0.75, d.z, '#ff7a1a'); wm.add(new THREE.CylinderGeometry(d.r * 0.88, d.r * 0.88, 0.28, 14), d.x, Y + 0.95, d.z, '#ffffff'); }
    if (d.k === 'block') { wm.add(box(d.r * 2, 1.3, d.r * 2), d.x, Y + 0.65, d.z, '#aeb4c6'); wm.add(box(d.r * 2.02, 0.2, d.r * 0.7), d.x, Y + 1.32, d.z, '#ffd23f'); }
  }
  // moving obstacles (own meshes, animated)
  const dyn = L.dyn;
  const stripeTex = (() => { const cv = document.createElement('canvas'); cv.width = 128; cv.height = 32; const g = cv.getContext('2d'); for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#ffffff' : '#e8252f'; g.fillRect(i * 16, 0, 16, 32); } const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const barMat = new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.4 }), hubMat = new THREE.MeshStandardMaterial({ color: '#3a3f55', roughness: 0.5 }), armMat = new THREE.MeshStandardMaterial({ color: '#ffd23f', roughness: 0.4 });
  const anim = [];
  for (const it of dyn.items) {
    const d = it.d;
    if (d.k === 'sweep') {
      const m = new THREE.Mesh(box(d.len + 1.8, 1.3, 1.3), barMat); m.castShadow = true; m.rotation.y = d.ux ? 0 : Math.PI / 2; grp.add(m);
      wg.add(box(d.ux ? 2 * d.amp + d.len + 2 : 0.5, 0.05, d.ux ? 0.5 : 2 * d.amp + d.len + 2), d.x, Y + 0.05, d.z, '#ff9f1c');   // warning strip on the deck
      anim.push(() => { const c = it.circles; const mid = (c[0].x + c[c.length - 1].x) / 2, midz = (c[0].z + c[c.length - 1].z) / 2; m.position.set(mid, Y + 0.7, midz); });
    } else if (d.k === 'spin') {
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 1.5, 14), hubMat); hub.position.set(d.x, Y + 0.75, d.z); grp.add(hub);
      const arm = new THREE.Mesh(box(2 * d.arm + 1.8, 1.0, 0.95), armMat); arm.castShadow = true; grp.add(arm);
      anim.push((t) => { arm.position.set(d.x, Y + 0.85, d.z); arm.rotation.y = -(d.ph + d.w * t); });
    }
  }
  world.updaters.push((t) => { for (const f of anim) f(t); });
  // gate arches
  const mk = (txt, w, h, o, x, y, z, ry) => { const b = textBoard(txt, w, h, o); b.position.set(x, y, z); b.rotation.y = ry; grp.add(b); return b; };
  const gateStyle = { bg: ['#22c55e', '#0b7a3a'], fg: '#ffffff', stroke: '#053b1c', border: '#ffd23f' };
  L.gates.forEach((g, i) => {
    const alongX = i === 1, last = i === L.gates.length - 1;
    for (const sg of [-1, 1]) { const px = alongX ? g.x : g.x + sg * (SKY_HW - 0.3), pz = alongX ? CROSS_Z + sg * (SKY_HW - 0.3) : g.z; wm.add(box(0.7, 7, 0.7), px, Y + 3.5, pz, '#2b1c6b'); }
    const bx = alongX ? g.x : g.x, bz = alongX ? CROSS_Z : g.z;
    mk(last ? 'FINISH - RACERS UNLOCKED!' : `SKY GATE ${i + 1}`, last ? 15 : 9, last ? 2.6 : 2, last ? { bg: ['#e0001f', '#8f0014'], fg: '#ffffff', stroke: '#33000a', border: '#ffd23f' } : gateStyle, bx, Y + 7.4, bz, alongX ? Math.PI / 2 : 0);
  });
  // entrance gantries over the ramps + the racer garage sign
  const entry = { bg: ['#ff9f1c', '#e0601a'], fg: '#ffffff', stroke: '#4a1c00', border: '#ffffff' };
  for (const sd of [1, -1]) {
    for (const sx of [-1, 1]) wm.add(box(0.8, 8, 0.8), sd * 38 + sx * 7.2, 4, -354, '#2b1c6b');
    mk(sd > 0 ? 'SKY SPEEDWAY ▲  WIN A RACER' : 'SKY EXIT ▼  (one way)', 17, 3.2, entry, sd * 38, 8.8, -354, 0);
    mk(sd > 0 ? 'SKY SPEEDWAY →' : '← SKY SPEEDWAY', 14, 3.2, entry, sd * HX, 5.2, -332, 0);
  }
  const garage = L.garage;
  for (const sx of [-1, 1]) wm.add(box(0.8, 9, 0.8), garage.x + sx * 12, Y + 4.5, garage.z - 9, '#2b1c6b');
  mk('RACER GARAGE', 24, 4.6, { bg: ['#e0001f', '#8f0014'], fg: '#ffffff', stroke: '#33000a', border: '#ffd23f' }, garage.x, Y + 10.2, garage.z - 9, 0);
  for (const r of L.racers) wm.add(box(5.2, 0.07, 6.8), r.x, Y + 0.03, r.z, '#e0001f');
}
