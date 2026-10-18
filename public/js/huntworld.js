// JUNGLE HUNT world: a fenced jungle road with beast arenas (portcullis gates) and MACHINES that need the whole team.
// buildHunt() makes the static world + colliders (also runs headless in tests); HuntVis animates plates / door / gears / lift / tracers.
import * as THREE from 'three';
import { textBoard } from './flags.js';
import { HU, PH, PLATE_R, CRUSH, CANNON, huntLayout, plateXs, newHunt, crushH, seqOf } from './hunt.js';

function rng(seed) { let s = (seed >>> 0) || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const ZONE = { ground: '#4cae4c', path: '#e2cf98', fence: '#6b4423', hedge: ['#2a8a3c', '#35993f', '#1f7a34'], leaf: ['#1f7a34', '#2a8a3c', '#3fae4a', '#58c25c'] };
const ZONE2 = { ground: '#5a8f3a', path: '#cdb887', fence: '#5a3a22', hedge: ['#3a7a34', '#2f6a2c', '#4a8a3a'], leaf: ['#2f6a2c', '#3a7a34', '#58903a', '#6aa045'] };
const ZONE3 = { ground: '#6b7a3a', path: '#a89c68', fence: '#4a4a30', hedge: ['#5a6b2a', '#4a5a24', '#6c7c34'], leaf: ['#5a7a2a', '#6c8a34', '#4a6a24', '#7a9a3c'] };
const ZONE4 = { ground: '#8a8a3a', path: '#d8c48a', fence: '#8a5a2a', hedge: ['#c2693a', '#b05a30', '#d07a45'], leaf: ['#c2693a', '#d79a3a', '#b05a30', '#e0b050'] };
const ZONE5 = { ground: '#3f8a6a', path: '#b8d0b0', fence: '#2a5a4a', hedge: ['#2a7a6a', '#1f6a5a', '#35896f'], leaf: ['#1f7a6a', '#2a8a7a', '#3a9a8a', '#58b0a0'] };
const ZONE6 = { ground: '#5a4a4a', path: '#8a7468', fence: '#2b2020', hedge: ['#3a2c2c', '#2f2323', '#443535'], leaf: ['#4a3535', '#5a4444', '#6a2a2a', '#7a3a3a'] };
const ZONES = [ZONE, ZONE2, ZONE3, ZONE4, ZONE5, ZONE6];
const PAD_COL = ['#ff4d4d', '#4d9bff', '#3ddc6a', '#ffd23f'];

function makePlate(r, color = '#ffd23f') {
  const c = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(r + 0.35, r + 0.45, 0.22, 36), new THREE.MeshStandardMaterial({ color: '#6a6e78', roughness: 0.6, metalness: 0.4 }));
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.2, 36), new THREE.MeshBasicMaterial({ color, toneMapped: false })); pad.position.y = 0.06;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r * 0.9, 5, 24, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })); beam.position.y = 2.6;
  c.add(base, pad, beam); c.userData = { pad, beam }; return c;
}

export function buildHunt(world, th, info, seed = 1) {
  const L = huntLayout(), vis = !world.headless, main = world.main, HW = HU.HW, zEnd = L.endZ;
  const R = rng((seed >>> 0) ^ 0x9e3779b1), pick = (a) => a[Math.floor(R() * a.length)];
  const st = newHunt(), hunt = { st, disp: [0, 0, 0, 0, 0, 0], solids: [], L, clock: 0, fz: 0, doors: {}, plates: {}, extra: {} };
  info.hunt = hunt; info.startArch = 99; info.spawn = { x: 0, y: 0, z: 3 };
  world.checkpoints.push({ x: 0, y: 0, z: 6, w: 14, spawn: [0, 0, 3] });
  world.waterY = -40; world.killY = -60;
  const FH = 7;

  // ---- floor, fences, end walls: you cannot leave the road
  { // the floor, with holes (canyon / river) in chapters 4 and 5
    let top = 12; const cuts = L.holes.slice().sort((a, b) => b[0] - a[0]);
    for (const [za, zb] of cuts) { world.platform(0, 0, (top + za) / 2, HW * 2 + 6, top - za, { h: 2, color: ZONE.ground, pad: false }); top = zb; }
    world.platform(0, 0, (top + zEnd - 2) / 2, HW * 2 + 6, top - zEnd + 2, { h: 2, color: ZONE.ground, pad: false });
  }
  world.platform(0, FH, 13, HW * 2 + 6, 2, { h: FH, color: ZONE.fence, pad: false });
  world.platform(0, FH, zEnd - 1, HW * 2 + 6, 2, { h: FH, color: ZONE2.fence, pad: false });
  const cliffTall = (z) => z < L.lift.cliffZ0 + 4 && z > L.lift.cliffZ1 - 28;       // the fences beside the cliff are taller
  for (let z = 12.5, k = 0; z > zEnd - 0.5; z -= 12, k++) {
    const d = Math.min(12, z - zEnd), Z = ZONES[Math.min(5, Math.max(0, Math.floor((14 - z) / HU.STEP)))], tall = cliffTall(z - d / 2);
    for (const sx of [-1, 1]) world.platform(sx * (HW + 1), tall ? 14 : FH, z - d / 2, 2, d, { h: tall ? 14 : FH, color: k % 2 ? Z.fence : Z.hedge[0], pad: false });
  }
  if (vis) {
    let top = 12; const cuts = L.holes.slice().sort((a, b) => b[0] - a[0]);
    const seg = (a, b) => { main.add(world.rbox(HW * 2, 0.04, a - b, 0.01), 0, 0.02, (a + b) / 2, ZONE.ground); main.add(world.rbox(HW * 2 - 3, 0.05, a - b, 0.01), 0, 0.035, (a + b) / 2, ZONE.path); };
    for (const [za, zb] of cuts) { seg(top, za); top = zb; const pit = new THREE.Mesh(new THREE.BoxGeometry(HW * 2 + 6, 0.2, za - zb), new THREE.MeshStandardMaterial({ color: '#2a78b8', roughness: 0.3, transparent: true, opacity: 0.9 })); pit.position.set(0, -14, (za + zb) / 2); world.group.add(pit); }
    seg(top, zEnd);
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
    hunt.solids[0].door = door; hunt.doors[0] = { solid: door, grp: null, vi: 0 };
    if (vis) {
      const dg = new THREE.Group(); dg.position.set(0, 0, dz);
      const stone = new THREE.MeshStandardMaterial({ color: '#8d8a84', roughness: 0.95, flatShading: true });
      const slab = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 10, 2.2), stone); slab.position.y = 5; slab.castShadow = true; dg.add(slab);
      for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.2, 0.3), new THREE.MeshStandardMaterial({ color: ['#7c7a75', '#9a968e', '#6f6d69'][i % 3], roughness: 1, flatShading: true })); b.position.set(-9.6 + i * 4.8, 3 + (i % 2) * 3.6, 1.2); dg.add(b); }
      world.group.add(dg); hunt.doors[0].grp = dg;
      const sg = textBoard('A HEAVY DOOR!  EVERYBODY STAND ON A PLATE', 20, 3.6, { bg: ['#7a4a1e', '#5a3412'], fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' });
      sg.position.set(0, 13.5, C.machZ - 8); world.group.add(sg);
      // big gears either side of the door (they turn as it rises)
      hunt.gears = [];
      for (const sx of [-1, 1]) { const g = makeGear(3.2, 12, '#b8863b'); g.position.set(sx * (HW - 1.5), 12.6, dz - 2.4); world.group.add(g); hunt.gears.push({ g, dir: sx, k: 3 });
        const g2 = makeGear(1.8, 8, '#8a6a30'); g2.position.set(sx * (HW - 6.1), 12.6, dz - 2.4); world.group.add(g2); hunt.gears.push({ g: g2, dir: -sx, k: -5.3 }); }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 0.6, 0.6), new THREE.MeshStandardMaterial({ color: '#5a3a1e', roughness: 0.8 })); beam.position.set(0, 12.6, dz - 2.4); world.group.add(beam);
    }
    // plates (the first n are shown while the machine is active)
    hunt.plates0 = [];
    if (vis) for (let i = 0; i < 4; i++) { const c = makePlate(PLATE_R); c.visible = false; world.group.add(c); hunt.plates0.push(c); }
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
    }
  }


  const signAt = (txt, w, x, y, z, bg = ['#7a4a1e', '#5a3412']) => { if (!vis) return; const sg = textBoard(txt, w, 3.6, { bg, fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' }); sg.position.set(x, y, z); world.group.add(sg); };

  // ================================================================ CHAPTER 3: crushers. A friend holds the plate -> the machine retracts.
  {
    const C = L.chapters[2], Cr = L.crush;
    hunt.crush = { zs: Cr.zs };
    world.hazards.push({
      type: 'crusher', test: (b, t, out) => {
        const solo = st.n < 2;
        for (let i = 0; i < Cr.zs.length; i++) {
          const hh = crushH(hunt.clock, i, solo, hunt.fz);
          if (hh > 2.6 || Math.abs(b.z - Cr.zs[i]) > CRUSH.R + 0.4) continue;
          if (b.y + 1.55 < hh - 0.1 || b.y > hh + 1.4) continue;
          out.nx = 0.15; out.nz = Math.sign(b.z - Cr.zs[i]) || 1; const l = Math.hypot(out.nx, out.nz); out.nx /= l; out.nz /= l; out.pow = 17; return true;
        }
        return false;
      },
    });
    if (vis) {
      const iron = new THREE.MeshStandardMaterial({ color: '#4a4f58', roughness: 0.45, metalness: 0.6 }), warn = new THREE.MeshStandardMaterial({ color: '#d9b021', roughness: 0.5 });
      hunt.crush.beams = Cr.zs.map((z) => {
        const g = new THREE.Group(); g.position.set(0, CRUSH.UP, z);
        const beam = new THREE.Mesh(new THREE.BoxGeometry(HW * 2 - 0.4, 1.4, CRUSH.R * 2), iron); beam.castShadow = true; g.add(beam);
        for (let k = -5; k <= 5; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.42, CRUSH.R * 2 + 0.02), k % 2 ? warn : iron); sp.position.x = k * 2.1; g.add(sp); }
        const sp = new THREE.Mesh(new THREE.BoxGeometry(HW * 2 - 0.4, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: '#ff3d3d', toneMapped: false })); sp.position.set(0, -0.8, 0); g.add(sp); g.userData.glow = sp;
        for (const sx of [-1, 1]) { const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 12, 10), iron); rod.position.set(sx * (HW - 1.2), 6.5, 0); g.add(rod); }
        world.group.add(g);
        for (const sx of [-1, 1]) { const col = new THREE.Mesh(new THREE.BoxGeometry(1.6, 14, 2.6), new THREE.MeshStandardMaterial({ color: '#5a5e68', roughness: 0.7 })); col.position.set(sx * (HW - 1.2), 7, z); world.group.add(col); }
        return g;
      });
      hunt.crush.p1 = makePlate(PLATE_R, '#ffd23f'); hunt.crush.p1.position.set(Cr.p1.x, 0.12, Cr.p1.z); world.group.add(hunt.crush.p1);
      hunt.crush.p2 = makePlate(PLATE_R, '#ffd23f'); hunt.crush.p2.position.set(Cr.p2.x, 0.12, Cr.p2.z); world.group.add(hunt.crush.p2);
      signAt('CRUSHERS!  A FRIEND HOLDS A PLATE - THEN SWAP!', 22, 0, 12, Cr.p1.z + 8);
      signAt('HOLD THIS PLATE', 8, Cr.p1.x, 5, Cr.p1.z - 1, ['#1e88c9', '#0f4a7a']); signAt('THEN THE LAST ONE HOLDS HERE', 14, Cr.p2.x, 5, Cr.p2.z + 1, ['#1e88c9', '#0f4a7a']);
    }
  }

  // ================================================================ CHAPTER 4: cannon canyon. The cannon fires only while a friend stands on a trigger plate.
  {
    const C = L.chapters[3], Cn = L.cannon, [za, zb] = Cn.gap;
    hunt.cannonDisc = world.disc(Cn.pad.x, 0, Cn.pad.z, 2.4, { bounce: 0, push: [0, -CANNON.vz], color: '#ff6a1a' });
    if (vis) {
      const hubM = new THREE.MeshStandardMaterial({ color: '#4a4f58', roughness: 0.45, metalness: 0.6 }), ring = new THREE.MeshStandardMaterial({ color: '#d9822b', roughness: 0.4, metalness: 0.5 });
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.35, 5.5, 16), hubM); barrel.position.set(Cn.pad.x, 2.6, Cn.pad.z + 2.8); barrel.rotation.x = -0.93; barrel.castShadow = true; world.group.add(barrel);
      const rg = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.2, 8, 18), ring); rg.position.set(Cn.pad.x, 4.6, Cn.pad.z + 0.6); rg.rotation.x = Math.PI / 2 - 0.64; world.group.add(rg);
      const padG = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.16, 30), new THREE.MeshBasicMaterial({ color: '#ff6a1a', toneMapped: false })); padG.position.set(Cn.pad.x, 0.1, Cn.pad.z); world.group.add(padG); hunt.extra.padG = padG;
      hunt.extra.tn = makePlate(PLATE_R, '#4cc9f0'); hunt.extra.tn.position.set(Cn.tn.x, 0.12, Cn.tn.z); world.group.add(hunt.extra.tn);
      hunt.extra.tf = makePlate(PLATE_R, '#4cc9f0'); hunt.extra.tf.position.set(Cn.tf.x, 0.12, Cn.tf.z); world.group.add(hunt.extra.tf);
      signAt('CANNON CANYON!  STAND ON THE BLUE PLATE TO FIRE THE CANNON', 26, 0, 12, Cn.pad.z + 10);
      signAt('FIRE PLATE', 6, Cn.tn.x, 5, Cn.tn.z - 1, ['#1e88c9', '#0f4a7a']); signAt('SEND THE LAST ONE BACK ACROSS!', 14, Cn.tf.x, 5, Cn.tf.z + 1, ['#1e88c9', '#0f4a7a']);
    }
    world.checkpoints.push({ x: 0, y: 0, z: Cn.farZ - 4, w: 14, spawn: [0, 0, Cn.farZ - 5] });
    void zb; void za;
  }

  // ================================================================ CHAPTER 5: pump bridge. Swap feet between the two pump plates to raise the bridge.
  {
    const Pm = L.pump, [za, zb] = Pm.gap, n = 3, d = (za - zb) / n;
    for (let i = 0; i < n; i++) world.mover(0, 0, za - d * (i + 0.5), HW * 2 - 0.5, d + 0.6, () => [0, -(1 - hunt.disp[4]) * 10, 0], { h: 1.2, color: '#c9a063', padColor: '#e8cf90', pad: true });
    if (vis) {
      hunt.extra.pl = makePlate(PLATE_R, '#4cc9f0'); hunt.extra.pl.position.set(Pm.pl.x, 0.12, Pm.pl.z); world.group.add(hunt.extra.pl);
      hunt.extra.pr = makePlate(PLATE_R, '#ff9f1c'); hunt.extra.pr.position.set(Pm.pr.x, 0.12, Pm.pr.z); world.group.add(hunt.extra.pr);
      // pressure gauge tower in the middle + a water wheel on the side
      const gl = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 8, 20, 1, true), new THREE.MeshStandardMaterial({ color: '#cfeaff', transparent: true, opacity: 0.35, side: THREE.DoubleSide })); gl.position.set(0, 4.2, Pm.pl.z - 1); world.group.add(gl);
      const wat = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 1, 20), new THREE.MeshBasicMaterial({ color: '#35b7ff', toneMapped: false })); wat.position.set(0, 0.2, Pm.pl.z - 1); world.group.add(wat); hunt.extra.wat = wat;
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.5, 20), new THREE.MeshStandardMaterial({ color: '#4a4f58', metalness: 0.6, roughness: 0.4 })); cap.position.set(0, 8.4, Pm.pl.z - 1); world.group.add(cap);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.5, 0.4, 20), new THREE.MeshStandardMaterial({ color: '#4a4f58', metalness: 0.6, roughness: 0.4 })); base.position.set(0, 0.2, Pm.pl.z - 1); world.group.add(base);
      const wheel = makeGear(4.2, 14, '#6b8fb8'); wheel.position.set(-HW + 1.5, 5.2, Pm.pl.z - 1); wheel.rotation.y = Math.PI / 2; world.group.add(wheel); hunt.extra.wheel = wheel;
      for (let k = 0; k < 8; k++) { const pdl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.6, 2.4), new THREE.MeshStandardMaterial({ color: '#8a5a2a' })); const a = k * Math.PI / 4; pdl.position.set(0, Math.sin(a) * 4.6, Math.cos(a) * 4.6); pdl.rotation.x = -a; wheel.add(pdl); }
      signAt('PUMP BRIDGE!  STEP LEFT PLATE, RIGHT PLATE, LEFT... (hop in turns!)', 28, 0, 12.5, Pm.pl.z + 8);
      const lab = textBoard('PRESSURE', 4, 1, { bg: ['#1e88c9', '#0f4a7a'], fg: '#fff', stroke: '#041a2e', border: '#fff' }); lab.position.set(0, 9.6, Pm.pl.z - 1); world.group.add(lab);
    }
  }

  // ================================================================ CHAPTER 6: simon pads + a stone door
  {
    const Sm = L.simon, door = world.addSolid(-HW, 0, Sm.doorZ - 1.2, HW, 10, Sm.doorZ + 1.2, { name: 'door5' });
    hunt.doors[5] = { solid: door, grp: null, vi: 0 }; hunt.simon = { pads: [] };
    if (vis) {
      const dg = new THREE.Group(); dg.position.set(0, 0, Sm.doorZ);
      const slab = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 10, 2.2), new THREE.MeshStandardMaterial({ color: '#7a6a8a', roughness: 0.9, flatShading: true })); slab.position.y = 5; slab.castShadow = true; dg.add(slab);
      for (let i = 0; i < 4; i++) { const gem = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), new THREE.MeshBasicMaterial({ color: PAD_COL[i], toneMapped: false })); gem.position.set(-7.2 + i * 4.8, 5, 1.3); dg.add(gem); }
      world.group.add(dg); hunt.doors[5].grp = dg;
      Sm.pads.forEach((pd, i) => { const c = makePlate(Sm.R, PAD_COL[i]); c.position.set(pd.x, 0.12, pd.z); world.group.add(c); hunt.simon.pads.push(c); });
      signAt('FINAL RIDDLE!  WATCH THE PADS, THEN STAND ON THEM IN THE SAME ORDER', 30, 0, 12.5, Sm.pads[0].z + 8, ['#7a1e5a', '#4a1236']);
      const end = textBoard('THE END... FOR NOW!', 20, 4, { bg: ['#7a1e5a', '#4a1236'], fg: '#fff3c4', stroke: '#200618', border: '#ffd23f', frame: '#3b2410' }); end.position.set(0, 9, L.chapters[5].end - 14); world.group.add(end);
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
    const Z = ZONES[Math.min(5, Math.max(0, Math.floor((14 - z) / HU.STEP)))];
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
const AXY = new THREE.Vector3(0, 1, 0);
export class HuntVis {
  constructor(world, info, scene) {
    this.world = world; this.info = info; this.h = info.hunt; this.L = this.h.L; this.t = 0; this._fresh = true;
    this.tr = []; this.scene = scene; this.wrongT = 0; this.lastWrong = 0; this.pumpK = 0;
    this.trGeo = new THREE.CylinderGeometry(0.06, 0.06, 1, 5);
  }
  openGate(c, instant) { const s = this.h.solids[c]; if (!s || s.gateT > 0) return; s.gate.active = false; s.gateT = instant ? 1.4 : 0.001; if (instant && s.gateGrp) s.gateGrp.position.y = 9; }
  event(e) { if (e.k === 'gate') this.openGate(e.ch, false); else if (e.k === 'wrong') this.wrongT = 0.5; }
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
    m.quaternion.setFromUnitVectors(AXY, new THREE.Vector3(dx / len, dy / len, dz / len));
    this.scene.add(m); this.tr.push({ m, t: 0 });
  }
  light(plate, on, vis = true) { if (!plate) return; plate.visible = vis; const u = plate.userData; u.pad.material.color.set(on ? '#3dff7a' : (u.base || (u.base = '#' + u.pad.material.color.getHexString()))); u.pad.position.y = on ? -0.02 : 0.06; u.beam.material.color.set(on ? '#3dff7a' : u.base); }
  update(dt) {
    this.t += dt; const t = this.t, h = this.h, st = h.st, L = this.L, M = st.m;
    this.setState();
    // smooth displayed machine values
    const f = 1 - Math.exp(-10 * dt);
    h.disp[0] += (M[0].v - h.disp[0]) * f; h.disp[1] += (M[1].v - h.disp[1]) * f; h.disp[4] += (M[4].v - h.disp[4]) * f; h.disp[5] += ((M[5].done ? 1 : 0) - h.disp[5]) * (1 - Math.exp(-2.2 * dt));
    for (const s of h.solids) if (s.gateT > 0 && s.gateT < 1.4 && s.gateGrp) { s.gateT += dt; s.gateGrp.position.y = Math.min(1, s.gateT / 1.4) * 9; }
    // doors (ch1 gears door, ch6 riddle door)
    for (const c of [0, 5]) { const d = h.doors[c], v = h.disp[c]; if (!d) continue; d.solid.y0 = v * 10.2; d.solid.active = v < 0.97; if (d.grp) d.grp.position.y = v * 10.2; }
    const inMach = (c) => st.ch === c && st.ph >= PH.MACH;
    // ---- chapter 1 plates + gears
    const xs = plateXs(st.n), C0 = L.chapters[0], shown0 = st.ch === 0 && st.ph === PH.MACH && !M[0].done;
    (h.plates0 || []).forEach((c, i) => { c.visible = i < xs.length && inMach(0); if (!c.visible) return; c.position.set(xs[i], 0.12, C0.machZ); const on = M[0].done || (st.occ && st.occ[i]); this.light(c, on); c.userData.beam.visible = !!shown0; });
    if (h.gears) { const ang = st.ch === 0 || st.ph === PH.WAIT ? h.disp[0] : h.disp[1]; for (const g of h.gears) g.g.rotation.z = g.dir * ang * g.k * 14 + (g.k > 0 ? 0 : 0.26); }
    // ---- chapter 2 lift
    if (h.stone) {
      const Lf = L.lift, H = HU.LIFT_H, v = h.disp[1], y = v * H, sy = 14 - v * 7, ty = H + 4.8, topZ = Lf.z - 3.9, m1 = M[1];
      h.stone.position.set(Lf.panX, sy, Lf.panZ); h.pan.g.position.y = 0.12 - (m1.wb ? 0.12 : 0); h.pan.pad.material.color.set(m1.wb ? '#3dff7a' : '#4cc9f0');
      const ropeTo = (m, x1, y1, z1, x2, y2, z2) => { const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1, len = Math.hypot(dx, dy, dz) || 1; m.position.set((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2); m.scale.set(1, len, 1); m.quaternion.setFromUnitVectors(AXY, new THREE.Vector3(dx / len, dy / len, dz / len)); };
      ropeTo(h.ropeA, Lf.x - 2.6, y + 0.6, Lf.z, Lf.x, ty, topZ); ropeTo(h.ropeA2, Lf.x + 2.6, y + 0.6, Lf.z, Lf.x, ty, topZ); ropeTo(h.ropeB, Lf.panX, sy + 1.3, Lf.panZ, Lf.x + 5.2, ty, topZ);
    }
    // ---- chapter 3 crushers
    if (h.crush) {
      const m2 = M[2]; h.clock += dt;
      if (st.ch === 2 && st.ph >= PH.MACH) { let d = m2.v - h.clock; if (d > 500) d -= 1000; if (d < -500) d += 1000; if (Math.abs(d) > 0.4) h.clock = m2.v; else h.clock += d * 0.08; }
      h.fz += ((m2.wa ? 1 : 0) - h.fz) * (1 - Math.exp(-5 * dt));
      const solo = st.n < 2;
      if (h.crush.beams) {
        h.crush.beams.forEach((g, i) => { const hh = crushH(h.clock, i, solo, h.fz); g.position.y = hh; const warn = hh > 2.6 && hh < CRUSH.UP - 0.3; g.userData.glow.material.color.set(warn ? '#ffffff' : hh <= 2.6 ? '#ff2020' : '#ff3d3d'); });
        this.light(h.crush.p1, !!m2.wb); this.light(h.crush.p2, !!m2.wc);
        h.crush.p1.userData.beam.visible = h.crush.p2.userData.beam.visible = st.n > 1;
      }
    }
    // ---- chapter 4 cannon
    if (h.cannonDisc) {
      const m3 = M[3], armed = (st.ch === 3 && st.ph >= PH.MACH) ? !!m3.wa : (st.ch > 3 && !!m3.wa);
      h.cannonDisc.bounce = armed ? CANNON.vy : 0; h.cannonDisc.push = [0, -CANNON.vz];
      if (h.extra.padG) h.extra.padG.material.color.set(armed ? '#3dff7a' : '#ff6a1a');
      this.light(h.extra.tn, !!m3.wb); this.light(h.extra.tf, !!m3.wc);
      if (h.extra.tn) h.extra.tn.userData.beam.visible = h.extra.tf.userData.beam.visible = st.n > 1;
    }
    // ---- chapter 5 pump bridge
    if (h.extra.wat) {
      const m4 = M[4], v = h.disp[4], hh = Math.max(0.05, v * 8); h.extra.wat.scale.y = hh; h.extra.wat.position.y = 0.4 + hh / 2;
      this.pumpK += (v - this.pumpK) * (1 - Math.exp(-4 * dt)); h.extra.wheel.rotation.x = this.pumpK * 14 + (Math.sin(t * 2) * 0.02);
      this.light(h.extra.pl, !!m4.wb); this.light(h.extra.pr, !!m4.wc);
      h.extra.pl.userData.beam.visible = h.extra.pr.userData.beam.visible = !m4.done;
    }
    // ---- chapter 6 simon pads
    if (h.simon) {
      const m5 = M[5], seq = seqOf(m5.a);
      if (m5.wc !== this.lastWrong) { this.lastWrong = m5.wc; this.wrongT = 0.5; }
      this.wrongT = Math.max(0, this.wrongT - dt);
      const demo = !m5.done && (t % 8) < 3.2, k = Math.floor((t % 8) / 0.8), on = demo && ((t % 0.8) < 0.55) ? seq[k] : -1;
      h.simon.pads.forEach((c, i) => {
        const u = c.userData, occ = (m5.wb >> i) & 1, lit = m5.done || occ || on === i;
        const col = this.wrongT > 0 ? '#ff2020' : PAD_COL[i];
        u.pad.material.color.set(lit ? '#ffffff' : col); u.beam.material.color.set(lit ? PAD_COL[i] : col); u.beam.visible = lit; u.pad.position.y = occ ? -0.02 : 0.06 + (on === i ? 0.12 : 0);
        u.beam.scale.y = on === i ? 1.4 : 1;
      });
    }
    // tracers fade
    for (let i = this.tr.length - 1; i >= 0; i--) { const o = this.tr[i]; o.t += dt; o.m.material.opacity = Math.max(0, 1 - o.t / 0.14); if (o.t > 0.14) { this.scene.remove(o.m); o.m.material.dispose(); this.tr.splice(i, 1); } }
  }
  dispose() { for (const o of this.tr) { this.scene.remove(o.m); o.m.material.dispose(); } this.tr = []; this.trGeo.dispose(); }
}
