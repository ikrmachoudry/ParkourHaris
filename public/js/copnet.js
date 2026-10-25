// Shared police (multiplayer): every player's own police (patrol cars + officers on foot) are sent to the other players, who see them as
// harmless ghosts. The chase itself still runs on the wanted player's screen only, so police only ever hurt the player who broke the law.
import * as THREE from 'three';
import { HeroActor } from './actor.js';
import { buildTrafficMesh } from './cityvis.js';

const COP_LOOK = { role: 'cop', skinTone: '#c68e63', hair: '#15100c' };
const lerpAngle = (a, b, t) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return a + d * t; };

// what a Wanted object sends: [id, x, z, yaw, speed] per patrol car, [id, x, z, yaw, speed, bits] per officer (bits 1 dead, 2 knocked down, 4 aiming)
export function copSnapshot(w) {
  const q = (v, n) => +v.toFixed(n);
  return {
    c: w.cars.slice(0, 8).map((c) => [c.nid, q(c.x, 1), q(c.z, 1), q(c.yaw || 0, 2), q(c.v || 0, 1)]),
    f: w.foot.slice(0, 10).map((o) => [o.nid, q(o.x, 1), q(o.z, 1), q(o.yaw || 0, 2), q(o.speed || 0, 1), (o.dead ? 1 : 0) | (o.down > 0 ? 2 : 0) | (o.aim ? 4 : 0)]),
  };
}

export class CopGhosts {
  constructor(scene, ground) { this.scene = scene; this.ground = ground; this.group = new THREE.Group(); scene.add(this.group); this.by = new Map(); }
  onMsg(m) {
    let s = this.by.get(m.id); if (!s) { s = { cars: new Map(), foot: new Map(), at: 0 }; this.by.set(m.id, s); }
    s.at = performance.now();
    const seenC = new Set(), seenF = new Set();
    for (const e of m.c || []) {
      seenC.add(e[0]); let c = s.cars.get(e[0]);
      if (!c) { const mesh = buildTrafficMesh(15); mesh.rotation.order = 'YXZ'; mesh.position.set(e[1], this.ground(e[1], e[2]), e[2]); mesh.rotation.y = e[3]; this.group.add(mesh); c = { n: e[0], mesh, hero: mesh.userData.hero, x: e[1], z: e[2], yaw: e[3], wheel: 0 }; s.cars.set(e[0], c); }
      c.tx = e[1]; c.tz = e[2]; c.tyaw = e[3]; c.v = e[4];
    }
    for (const e of m.f || []) {
      seenF.add(e[0]); let o = s.foot.get(e[0]);
      if (!o) { const actor = new HeroActor(0, COP_LOOK); this.group.add(actor.group); o = { n: e[0], actor, x: e[1], z: e[2], yaw: e[3] }; s.foot.set(e[0], o); }
      o.tx = e[1]; o.tz = e[2]; o.tyaw = e[3]; o.sp = e[4]; o.bits = e[5] | 0;
    }
    for (const [k, c] of s.cars) if (!seenC.has(k)) { this.dropCar(c); s.cars.delete(k); }
    for (const [k, o] of s.foot) if (!seenF.has(k)) { this.dropFoot(o); s.foot.delete(k); }
  }
  // ---- other players can fight the shared police: these find the ghost officer / patrol car a shot, a punch or a blast reaches; main.js then tells its owner (who runs the real police) and raises MY wanted level
  shoot(ox, oz, fx, fz, range) {
    let best = null;
    for (const [id, s] of this.by) {
      for (const o of s.foot.values()) { if ((o.bits & 1) || !o.actor.group.visible) continue; const dx = o.x - ox, dz = o.z - oz, a = dx * fx + dz * fz, l = Math.abs(-dx * fz + dz * fx); if (a > -0.9 && a < range && l < (a < 2 ? 0.9 : 0.65) && (!best || a < best.d)) best = { d: Math.max(0.3, a), id, k: 'f', n: o.n, x: o.x, z: o.z }; }
      for (const c of s.cars.values()) { if (!c.mesh.visible) continue; const dx = c.x - ox, dz = c.z - oz, a = dx * fx + dz * fz; if (a < 0.6 || a > range) continue; const f = Math.sin(c.yaw), g = Math.cos(c.yaw);
        for (let d = Math.max(0.3, a - 3); d < Math.min(range, a + 0.3); d += 0.15) { const rx = ox + fx * d - c.x, rz = oz + fz * d - c.z, lz = rx * f + rz * g, lx = -rx * g + rz * f; if (Math.abs(lz) < 2.35 && Math.abs(lx) < 1.05) { if (!best || d < best.d) best = { d, id, k: 'c', n: c.n, x: c.x, z: c.z }; break; } } }
    }
    return best;
  }
  // everything within r metres of (x, z) (grenade) or in front of me (melee: fx, fz given)
  near(x, z, r, fx, fz) {
    const out = [];
    for (const [id, s] of this.by) {
      for (const o of s.foot.values()) { if ((o.bits & 1) || !o.actor.group.visible) continue; const dx = o.x - x, dz = o.z - z, d = Math.hypot(dx, dz); if (d > r) continue; if (fx !== undefined && (dx * fx + dz * fz) / (d || 1) < 0.3) continue; out.push({ id, k: 'f', n: o.n, d, x: o.x, z: o.z }); }
      if (fx === undefined) for (const c of s.cars.values()) { if (!c.mesh.visible) continue; const d = Math.hypot(c.x - x, c.z - z); if (d <= r + 1.5) out.push({ id, k: 'c', n: c.n, d, x: c.x, z: c.z }); }
    }
    return out;
  }
  dropCar(c) { this.group.remove(c.mesh); c.mesh.traverse((o) => { if (o.isMesh && o.geometry) o.geometry.dispose(); }); }
  dropFoot(o) { this.group.remove(o.actor.group); o.actor.dispose(); }
  remove(id) { const s = this.by.get(id); if (!s) return; for (const c of s.cars.values()) this.dropCar(c); for (const o of s.foot.values()) this.dropFoot(o); this.by.delete(id); }
  // hide(id): true while that player is in a mission instance I am not in
  update(dt, hide) {
    const now = performance.now();
    for (const [id, s] of this.by) {
      if (now - s.at > 2500) { this.remove(id); continue; }
      const vis = !(hide && hide(id)), f = 1 - Math.exp(-10 * dt);
      for (const c of s.cars.values()) {
        c.x += (c.tx - c.x) * f; c.z += (c.tz - c.z) * f; c.yaw = lerpAngle(c.yaw, c.tyaw, f);
        c.mesh.visible = vis; c.mesh.position.set(c.x, this.ground(c.x, c.z), c.z); c.mesh.rotation.y = c.yaw; c.wheel += (c.v || 0) * dt / 0.33; if (c.hero) c.hero.spin(c.wheel);
      }
      for (const o of s.foot.values()) {
        o.x += (o.tx - o.x) * f; o.z += (o.tz - o.z) * f; o.yaw = lerpAngle(o.yaw, o.tyaw, f);
        const g = o.actor.group, y = this.ground(o.x, o.z); g.visible = vis;
        if (o.bits & 1) { g.rotation.set(-Math.PI / 2, o.yaw, 0, 'YXZ'); g.position.set(o.x, y + 0.22, o.z); o.actor.update(dt, { seated: false, speed: 0, grounded: true }); }
        else { g.rotation.set(0, o.yaw, 0, 'YXZ'); g.position.set(o.x, y, o.z); o.actor.update(dt, { seated: false, speed: o.sp || 0, grounded: true, stun: o.bits & 2 ? 1 : 0, weapon: o.bits & 4 ? 'pistol' : undefined, aiming: !!(o.bits & 4) }); }
      }
    }
  }
  dispose() { for (const id of [...this.by.keys()]) this.remove(id); this.scene.remove(this.group); }
}
