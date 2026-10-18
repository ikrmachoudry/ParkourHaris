// The GUN (Jungle Hunt): a small blaster model + auto-aim target picking. Unlimited ammo.
import * as THREE from 'three';
import { ST, KINDS } from './jlayout.js';

export const GUN = { rate: 0.26, range: 48, cone: 0.75 };   // seconds between shots, metres, half-angle (radians) of the aim-assist cone

export function makeGun() {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: '#2b2f3a', roughness: 0.4, metalness: 0.7 }), warm = new THREE.MeshStandardMaterial({ color: '#d9822b', roughness: 0.5, metalness: 0.3 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 0.62), dark); body.position.set(0, 0, 0.3);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8), warm); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.05, 0.75);
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.28, 0.14), dark); grip.position.set(0, -0.2, 0.14); grip.rotation.x = 0.25;
  g.add(body, barrel, grip); g.position.set(0.36, 0.95, 0.18); g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
  return g;
}

// nearest living beast inside the aim cone (forward yaw `fy`); returns the animal or null
export function pickTarget(list, b, fy) {
  let best = null, bs = 1e9;
  const fx = Math.sin(fy), fz = Math.cos(fy);
  for (const a of list) {
    if (a.st === ST.HIDDEN || a.owner || a.dead) continue;
    const dx = a.x - b.x, dz = a.z - b.z, d = Math.hypot(dx, dz) - KINDS[a.kind].r * 0.5;
    if (d > GUN.range || Math.abs(a.y - b.y) > 6 || d < -1) continue;
    const ang = Math.acos(Math.max(-1, Math.min(1, (dx * fx + dz * fz) / (Math.hypot(dx, dz) || 1))));
    if (ang > GUN.cone) continue;
    const s = ang * 20 + d;                       // prefer what you are looking at, then what is close
    if (s < bs) { bs = s; best = a; }
  }
  return best;
}
