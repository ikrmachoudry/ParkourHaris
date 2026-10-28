// v213: the drivable JEEPS of the Jang battle island. Like PUBG, the vehicles are not in the same place every match: a few random spots beside the roads, close to the stations
// (town centre, the military base, the container yard, the bridge, the farm...) are used, so you have to look for one. Same Jeep as the city: 4 seats, full driving physics.
import { ROADS, CMB, cmbH, layout, hitsSolid } from './combat.js';
const SPOTS = [[0, 2], [0, 4], [0, 7], [1, 2], [1, 4], [2, 1], [3, 1], [4, 1], [5, 2], [6, 2], [8, 1], [9, 1]];   // [road, point]: along the main roads and tracks
export function jangJeeps(n = 3) {
  const pool = SPOTS.slice(), out = [];
  while (out.length < n && pool.length) {
    const [r, i] = pool.splice(Math.floor(Math.random() * pool.length), 1)[0], R = ROADS[r]; if (!R) continue;
    const p = R.pts[i], q = R.pts[i + 1] || R.pts[i - 1]; let dx = q[0] - p[0], dz = q[1] - p[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
    const L = layout(), sg = Math.random() < 0.5 ? 1 : -1; let ok = null;
    for (const [sd, off] of [[sg, 1.6], [-sg, 1.6], [sg, 0], [-sg, 0]]) {   // beside the road, pointing along it - on the other side / on the road if a wall, tree or hill is in the way
      const side = sd * (R.w / 2 + off), x = p[0] - dz * side, z = p[1] + dx * side; let free = true;
      for (const a of [-2.6, -1.3, 0, 1.3, 2.6]) { const px = x + dx * a, pz = z + dz * a; if (hitsSolid(L, px, pz, 1.5, cmbH(px, pz)) || Math.abs(cmbH(px, pz) - cmbH(x, z)) > 0.8) { free = false; break; } }
      if (free) { ok = [x, z]; break; } }
    if (!ok) continue;
    out.push({ id: 33, x: CMB.x + ok[0], z: CMB.z + ok[1], yaw: Math.atan2(dx, dz) + (Math.random() < 0.5 ? 0 : Math.PI), y: cmbH(ok[0], ok[1]) });
  }
  return out;
}
