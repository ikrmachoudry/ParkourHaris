// JUNGLE HUNT world: a fenced jungle road with beast arenas (portcullis gates) and MACHINES that need the whole team.
// buildHunt() makes the static world + colliders (also runs headless in tests); HuntVis animates plates / door / gears / lift / tracers.
import * as THREE from 'three';
import { textBoard } from './flags.js';
import { HU, PH, PLATE_R, huntLayout, plateXs, newHunt } from './hunt.js';

function rng(seed) { let s = (seed >>> 0) || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const ZONE = { ground: '#4cae4c', path: '#e2cf98', fence: '#6b4423', hedge: ['#2a8a3c', '#35993f', '#1f7a34'], leaf: ['#1f7a34', '#2a8a3c', '#3fae4a', '#58c25c'] };
const ZONE2 = { ground: '#5a8f3a', path: '#cdb887', fence: '#5a3a22', hedge: ['#3a7a34', '#2f6a2c', '#4a8a3a'], leaf: ['#2f6a2c', '#3a7a34', '#58903a', '#6aa045'] };
const ZONES = [ZONE, ZONE2];

export function buildHunt(world, th, info, seed = 1) {
  const L = huntLayout(), vis = !world.headless, main = world.main, HW = HU.HW, zEnd = L.endZ;
  const R = rng((seed >>> 0) ^ 0x9e3779b1), pick = (a) => a[Math.floor(R() * a.length)];
  const st = newHunt(), hunt = { st, disp: [0, 0], solids: [], L };
  info.hunt = hunt; info.startArch = 99; info.spawn = { x: 0, y: 0, z: 3 };
  world.checkpoints.push({ x: 0, y: 0, z: 6, w: 14, spawn: [0, 0, 3] });
  world.waterY = -40; world.killY = -60;
  const FH = 7;

  // ---- floor, fences, end walls: you cannot leave the road
  world.platform(0, 0, (12 + zEnd - 2) / 2, HW * 2 + 6, 12 - zEnd + 2, { h: 2, color: ZONE.ground, pad: false });
  world.platform(0, FH, 13, HW * 2 + 6, 2, { h: FH, color: ZONE.fence, pad: false });
  world.platform(0, FH, zEnd - 1, HW * 2 + 6, 2, { h: FH, color: ZONE2.fence, pad: false });
  const cliffTall = (z) => z < L.lift.cliffZ0 + 4 && z > L.lift.cliffZ1 - 28;       // the fences beside the cliff are taller
  for (let z = 12.5, k = 0; z > zEnd - 0.5; z -= 12, k++) {
    const d = Math.min(12, z - zEnd), Z = z < L.chapters[1].z0 + 6 ? ZONE2 : ZONE, tall = cliffTall(z - d / 2);
    for (const sx of [-1, 1]) world.platform(sx * (HW + 1), tall ? 14 : FH, z - d / 2, 2, d, { h: tall ? 14 : FH, color: k % 2 ? Z.fence : Z.hedge[0], pad: false });
  }
  if (vis) {
    main.add(world.rbox(HW * 2, 0.04, 12 - zEnd, 0.01), 0, 0.02, (12 + zEnd) / 2, ZONE.ground);
    main.add(world.rbox(HW * 2 - 3, 0.05, 12 - zEnd, 0.01), 0, 0.035, (12 + zEnd) / 2, ZONE.path);
  }

  for (const C of L.chapters) {
    // ---- portcullis gate at the end of the beast arena
    const gate = world.addSolid(-HW, 0, C.gateZ - 0.75, HW, 7, C.gateZ + 0.75, { name: 'gate' });
    let grp = null;
    if (vis) {
      grp = new THREE.Group(); grp.position.set(0, 0, C.gateZ);
      const iron = new THREE.MeshStandardMaterial({ color: '#4a4f58', roughness: 0.5, metalness: 0.6 });
      for (let x = -HW + 0.4; x <= HW; x += 1.6) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 7.4, 6), iron); m.position.set(x, 3.7, 0); m.castShadow = true; grp.add(m); }
      for (const y of [0.6, 3.4, 6.8]) { const m = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 0.35, 0.45), iron); m.position.set(0, y, 0); grp.add(m); }
      world.group.add(grp);
      const sg = textBoard('SHOOT ALL THE BEASTS!', 17, 3.6, { bg: ['#9a2a1a', '#5a1208'], fg: '#fff3c4', stroke: '#200808', border: '#ffd23f', frame: '#3b2410' });
      sg.position.set(0, 10.5, C.gateZ); world.group.add(sg);
      const hd = textBoard(`CHAPTER ${C.c + 1}`, 14, 3.6, { bg: ['#1f7a34', '#0f4a1c'], fg: '#ffffff', stroke: '#052a0e', border: '#ffe27a', frame: '#3b2410' });
      hd.position.set(0, 11, C.z0 + 2); world.group.add(hd);
    }
    hunt.solids[C.c] = { gate, gateGrp: grp, gateT: 0 };
    world.checkpoints.push({ x: 0, y: 0, z: C.z0 - 2, w: 14, spawn: [0, 0, C.z0 - 3] });
    world.checkpoints.push({ x: 0, y: 0, z: C.gateZ - 6, w: 14, spawn: [0, 0, C.gateZ - 7] });
  }

  // ================================================================ CHAPTER 1: weight plates + a big stone door hoisted by gears
  {
    const C = L.chapters[0], dz = L.doorZ;
    const door = world.addSolid(-HW, 0, dz - 1.2, HW, 10, dz + 1.2, { name: 'door' });
    hunt.solids[0].door = door;
    if (vis) {
      const dg = new THREE.Group(); dg.position.set(0, 0, dz);
      const stone = new THREE.MeshStandardMaterial({ color: '#8d8a84', roughness: 0.95, flatShading: true });
      const slab = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 10, 2.2), stone); slab.position.y = 5; slab.castShadow = true; dg.add(slab);
      for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.2, 0.3), new THREE.MeshStandardMaterial({ color: ['#7c7a75', '#9a968e', '#6f6d69'][i % 3], roughness: 1, flatShading: true })); b.position.set(-9.6 + i * 4.8, 3 + (i % 2) * 3.6, 1.2); dg.add(b); }
      world.group.add(dg); hunt.doorGrp = dg;
      const sg = textBoard('A HEAVY DOOR!  EVERYBODY STAND ON A PLATE', 20, 3.6, { bg: ['#7a4a1e', '#5a3412'], fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' });
      sg.position.set(0, 13.5, C.machZ - 8); world.group.add(sg);
      // big gears either side of the door (they turn as it rises)
      hunt.gears = [];
      for (const sx of [-1, 1]) { const g = makeGear(3.2, 12, '#b8863b'); g.position.set(sx * (HW - 1.5), 12.6, dz - 2.4); world.group.add(g); hunt.gears.push({ g, dir: sx, k: 3 });
        const g2 = makeGear(1.8, 8, '#8a6a30'); g2.position.set(sx * (HW - 6.1), 12.6, dz - 2.4); world.group.add(g2); hunt.gears.push({ g: g2, dir: -sx, k: -5.3 }); }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 0.6, 0.6), new THREE.MeshStandardMaterial({ color: '#5a3a1e', roughness: 0.8 })); beam.position.set(0, 12.6, dz - 2.4); world.group.add(beam);
    }
    // plates (the first n are shown while the machine is active)
    hunt.plates = [];
    if (vis) for (let i = 0; i < 4; i++) {
      const c = new THREE.Group();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(PLATE_R + 0.35, PLATE_R + 0.45, 0.22, 36), new THREE.MeshStandardMaterial({ color: '#6a6e78', roughness: 0.6, metalness: 0.4 }));
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(PLATE_R, PLATE_R, 0.2, 36), new THREE.MeshBasicMaterial({ color: '#ffd23f', toneMapped: false }));
      pad.position.y = 0.06;
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(PLATE_R * 0.9, PLATE_R * 0.9, 5, 24, 1, true), new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false, toneMapped: false }));
      beam.position.y = 2.6;
      c.add(base, pad, beam); c.visible = false; c.userData = { pad, beam }; world.group.add(c); hunt.plates.push(c);
    }
  }

  // ================================================================ CHAPTER 2: counterweight lift up a cliff
  {
    const C = L.chapters[1], Lf = L.lift, H = HU.LIFT_H;
    const cliffD = Lf.cliffZ0 - Lf.cliffZ1;
    world.platform(0, H, (Lf.cliffZ0 + Lf.cliffZ1) / 2, HW * 2, cliffD, { h: H, color: '#7a6a4a', pad: true, padColor: '#9a8a62' });
    world.ramp(0, Lf.cliffZ1, H, C.z0 - 152, 0, HW * 2 - 2, {});
    // the lift cage (a real moving platform): its height comes from the machine state
    world.mover(Lf.x, 0.15, Lf.z, Lf.w, Lf.d, () => [0, hunt.disp[1] * H, 0], { h: 0.6, color: '#c9a063', padColor: '#e8cf90' });
    if (vis) {
      const wood = new THREE.MeshStandardMaterial({ color: '#6b4423', roughness: 0.9 }), rope = new THREE.MeshStandardMaterial({ color: '#c9a063', roughness: 0.9 });
      const topY = H + 6;
      for (const px of [Lf.x - 3.6, Lf.x + 3.6]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.8, topY, 0.8), wood); p.position.set(px, topY / 2, Lf.z - 3.4); p.castShadow = true; world.group.add(p); }
      const bar = new THREE.Mesh(new THREE.BoxGeometry(Lf.panX - Lf.x + 8, 0.7, 0.8), wood); bar.position.set((Lf.panX + Lf.x) / 2, topY, Lf.z - 3.4); world.group.add(bar);
      for (const px of [Lf.panX - 2.4, Lf.panX + 2.4]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.8, topY, 0.8), wood); p.position.set(px, topY / 2, Lf.panZ - 4); world.group.add(p); }
      // pulley wheels + gears
      hunt.gears = [];
      const gl = makeGear(3, 12, '#b8863b'); gl.position.set(Lf.x, topY - 1.2, Lf.z - 3.9); world.group.add(gl); hunt.gears.push({ g: gl, dir: 1, k: 1 });
      const gr = makeGear(2.2, 10, '#8a6a30'); gr.position.set(Lf.x + 5.2, topY - 1.2, Lf.z - 3.9); world.group.add(gr); hunt.gears.push({ g: gr, dir: -1, k: 1.36 });
      // cage ropes + counterweight stone (hangs above the pan)
      hunt.ropeA = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1, 5), rope); world.group.add(hunt.ropeA);
      hunt.ropeA2 = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1, 5), rope); world.group.add(hunt.ropeA2);
      hunt.stone = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.6, 2.6), new THREE.MeshStandardMaterial({ color: '#8d8a84', roughness: 0.95, flatShading: true })); hunt.stone.castShadow = true; world.group.add(hunt.stone);
      hunt.ropeB = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1, 5), rope); world.group.add(hunt.ropeB);
      // the pan on the floor
      const pan = new THREE.Group(); pan.position.set(Lf.panX, 0.12, Lf.panZ);
      const pb = new THREE.Mesh(new THREE.CylinderGeometry(Lf.panR + 0.3, Lf.panR + 0.4, 0.3, 36), new THREE.MeshStandardMaterial({ color: '#6a6e78', roughness: 0.6, metalness: 0.4 }));
      const pp = new THREE.Mesh(new THREE.CylinderGeometry(Lf.panR, Lf.panR, 0.22, 36), new THREE.MeshBasicMaterial({ color: '#4cc9f0', toneMapped: false })); pp.position.y = 0.08;
      const pl = textBoard('FRIENDS STAND HERE', 4.6, 1.3, { bg: ['#1e88c9', '#0f4a7a'], fg: '#ffffff', stroke: '#041a2e', border: '#ffffff' }); pl.position.y = 2.2;
      pan.add(pb, pp, pl); world.group.add(pan); hunt.pan = { g: pan, pad: pp };
      const sg = textBoard('COUNTERWEIGHT LIFT!  RIDE UP - FRIENDS STAND ON THE PAN', 24, 3.6, { bg: ['#7a4a1e', '#5a3412'], fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' });
      sg.position.set(0, 15, C.machZ + 6); world.group.add(sg);
      const end = textBoard('MORE CHAPTERS COMING SOON!', 22, 4, { bg: ['#7a1e5a', '#4a1236'], fg: '#fff3c4', stroke: '#200618', border: '#ffd23f', frame: '#3b2410' });
      end.position.set(0, 9, zEnd + 4); world.group.add(end);
    }
  }

  if (vis) decorate(world, L, R, pick);
}

function makeGear(r, teeth, color) {
  const g = new THREE.Group(), mat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.65 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.7, 28), mat); body.rotation.x = Math.PI / 2; g.add(body);
  for (let i = 0; i < teeth; i++) { const a = (i / teeth) * Math.PI * 2, t = new THREE.Mesh(new THREE.BoxGeometry(r * 0.34, r * 0.3, 0.7), mat); t.position.set(Math.cos(a) * (r + r * 0.1), Math.sin(a) * (r + r * 0.1), 0); t.rotation.z = a; g.add(t); }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.28, r * 0.28, 0.95, 12), new THREE.MeshStandardMaterial({ color: '#3a3a40', metalness: 0.7, roughness: 0.4 })); hub.rotation.x = Math.PI / 2; g.add(hub);
  return g;
}

function decorate(world, L, R, pick) {
  const main = world.main, HW = HU.HW;
  const sph = (r, w = 7, h = 5) => new THREE.SphereGeometry(r, w, h), cyl = (a, b, h, s = 7) => new THREE.CylinderGeometry(a, b, h, s);
  for (let z = 14; z > L.endZ - 10; z -= 5 + R() * 3.4) {
    const Z = z < L.chapters[1].z0 + 6 ? ZONE2 : ZONE;
    for (const sx of [-1, 1]) {
      const x = sx * (HW + 4.5 + R() * 20), s = 0.8 + R() * 0.9, h = 7 * s, zz = z + (R() - 0.5) * 3;
      if (R() < 0.3) { // palm
        main.add(cyl(0.35 * s, 0.55 * s, h * 1.2), x, h * 0.6, zz, '#8a6a3a', 0, 0, sx * 0.12);
        for (let i = 0; i < 6; i++) main.add(new THREE.ConeGeometry(0.7 * s, 5 * s, 4), x + Math.cos(i) * 2 * s, h * 1.2 + 0.2, zz + Math.sin(i) * 2 * s, pick(Z.leaf), Math.sin(i) * 1.1, 0, -Math.cos(i) * 1.1);
      } else { main.add(cyl(0.5 * s, 0.8 * s, h), x, h / 2, zz, '#7a4b27'); main.add(sph(3.6 * s), x, h + 2 * s, zz, pick(Z.leaf)); main.add(sph(2.6 * s), x + 2.3 * s, h + 0.6 * s, zz + 0.5 * s, pick(Z.leaf)); }
      if (R() < 0.45) { const hh = 9 * (1.3 + R()); main.add(cyl(0.9, 1.4, hh), sx * (HW + 28 + R() * 30), hh / 2, z, '#6b4423'); main.add(sph(7 + R() * 3), sx * (HW + 28 + R() * 30), hh + 3, z, pick(Z.leaf)); }
    }
  }
  for (let k = 0; k < 200; k++) { // flowers + bushes along the road edge
    const x = (R() < 0.5 ? -1 : 1) * (HW - 1.2 - R() * 0.9), z = 8 - R() * (8 - L.endZ);
    if (R() < 0.5) { main.add(cyl(0.05, 0.05, 0.7, 4), x, 0.35, z, '#3a8f3a'); main.add(sph(0.26, 6, 4), x, 0.78, z, pick(['#ff5fa8', '#ffd23f', '#ffffff', '#ff7a1a', '#b58cff'])); }
    else main.add(sph(1, 6, 5), x, 0.5, z, pick(['#2a8a3c', '#35993f']), 0, 0, 0, 1.2, 0.7, 1.1);
  }
  for (let z = 10; z > L.endZ - 30; z -= 30) for (const sx of [-1, 1]) main.add(sph(1, 12, 8), sx * (HW + 110 + R() * 40), 0, z, '#3f8f45', 0, 0, 0, 38 + R() * 24, 22 + R() * 20, 30 + R() * 14);
}

// ------------------------------------------------------------------ client animation + visuals
export class HuntVis {
  constructor(world, info, scene) {
    this.world = world; this.info = info; this.h = info.hunt; this.L = this.h.L; this.t = 0; this._fresh = true;
    this.tr = []; this.scene = scene;
    this.trGeo = new THREE.CylinderGeometry(0.06, 0.06, 1, 5);
  }
  openGate(c, instant) { const s = this.h.solids[c]; if (!s || s.gateT > 0) return; s.gate.active = false; s.gateT = instant ? 1.4 : 0.001; if (instant && s.gateGrp) s.gateGrp.position.y = 9; }
  event(e) { if (e.k === 'gate') this.openGate(e.ch, false); }
  setState() { // authoritative state is in h.st; open anything that is already past
    const st = this.h.st;
    for (let c = 0; c < HU.CH; c++) if (c < st.ch || (c === st.ch && st.ph >= PH.MACH)) this.openGate(c, this._fresh);
    this._fresh = false;
  }
  // a short glowing tracer from (x1,y1,z1) to (x2,y2,z2)
  tracer(x1, y1, z1, x2, y2, z2, color = '#ffe27a') {
    const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1, len = Math.hypot(dx, dy, dz) || 1;
    const m = new THREE.Mesh(this.trGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, toneMapped: false, depthWrite: false }));
    m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2); m.scale.set(1, len, 1);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx / len, dy / len, dz / len));
    this.scene.add(m); this.tr.push({ m, t: 0 });
  }
  update(dt) {
    this.t += dt; const t = this.t, h = this.h, st = h.st, L = this.L;
    this.setState();
    // smooth displayed machine values
    const f = 1 - Math.exp(-10 * dt);
    h.disp[0] += (st.m[0].v - h.disp[0]) * f; h.disp[1] += (st.m[1].v - h.disp[1]) * f;
    // gates rising
    for (const s of h.solids) if (s.gateT > 0 && s.gateT < 1.4 && s.gateGrp) { s.gateT += dt; s.gateGrp.position.y = Math.min(1, s.gateT / 1.4) * 9; }
    // chapter 1: door + plates + gears
    const d0 = h.disp[0], door = h.solids[0].door;
    if (door) { door.y0 = d0 * 10.2; door.active = d0 < 0.97; if (h.doorGrp) h.doorGrp.position.y = d0 * 10.2; }
    const shown = st.ch === 0 && st.ph === PH.MACH && !st.m[0].done, n = st.n;
    const xs = plateXs(n), C0 = L.chapters[0];
    (h.plates || []).forEach((c, i) => {
      c.visible = i < xs.length && (st.ch === 0 && st.ph >= PH.MACH); if (!c.visible) return;
      c.position.set(xs[i], 0.12, C0.machZ);
      const on = st.m[0].done || (st.occ && st.occ[i]), u = c.userData, p = 0.5 + 0.5 * Math.sin(t * 4 + i);
      u.pad.material.color.set(on ? '#3dff7a' : '#ffd23f'); u.pad.position.y = on ? -0.02 : 0.06 + 0.02 * p; u.beam.material.color.set(on ? '#3dff7a' : '#ffd23f'); u.beam.visible = !!shown;
    });
    if (h.gears) { const ang = st.ch === 0 || st.ph === PH.WAIT ? d0 : h.disp[1]; for (const g of h.gears) g.g.rotation.z = g.dir * ang * g.k * 14 + (g.k > 0 ? 0 : 0.26); }
    // chapter 2: cage ropes, counterweight stone, pan
    if (h.stone) {
      const Lf = L.lift, H = HU.LIFT_H, v = h.disp[1], topY = H + 6 - 1.2, y = v * H;
      const stoneY = topY - 3.4 - (v) * 0; // stone falls as the cage rises
      const sy = 14 - v * 7;
      h.stone.position.set(Lf.panX, sy, Lf.panZ); h.pan.g.position.y = 0.12 - (st.m[1].wb ? 0.12 : 0);
      h.pan.pad.material.color.set(st.m[1].wb ? '#3dff7a' : '#4cc9f0');
      const ropeTo = (m, x1, y1, z1, x2, y2, z2) => { const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1, len = Math.hypot(dx, dy, dz) || 1; m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2); m.scale.set(1, len, 1); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx / len, dy / len, dz / len)); };
      const topZ = Lf.z - 3.9, ty = H + 4.8;
      ropeTo(h.ropeA, Lf.x - 2.6, y + 0.6, Lf.z, Lf.x, ty, topZ); ropeTo(h.ropeA2, Lf.x + 2.6, y + 0.6, Lf.z, Lf.x, ty, topZ);
      ropeTo(h.ropeB, Lf.panX, sy + 1.3, Lf.panZ, Lf.x + 5.2, ty, topZ);
      void stoneY;
    }
    // tracers fade
    for (let i = this.tr.length - 1; i >= 0; i--) { const o = this.tr[i]; o.t += dt; o.m.material.opacity = Math.max(0, 1 - o.t / 0.14); if (o.t > 0.14) { this.scene.remove(o.m); o.m.material.dispose(); this.tr.splice(i, 1); } }
  }
  dispose() { for (const o of this.tr) { this.scene.remove(o.m); o.m.material.dispose(); } this.tr = []; this.trGeo.dispose(); }
}
