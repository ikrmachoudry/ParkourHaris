// HARIS PORT (visuals + collision): paved yard, quay, three finger piers with bollards and lamps, warehouses, container stacks, a gantry crane,
// the harbour office and the lighthouse.  Layout numbers live in port.js.
import * as THREE from 'three';
import { PORT } from './port.js';

export function buildPort(world, wm, roads, R) {
  const Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), Cy = (r, h, n = 12, r2) => new THREE.CylinderGeometry(r2 === undefined ? r : r2, r, h, n);
  const solid = (x0, z0, x1, z1, h, y0 = 0, box = true) => { world.addSolid(x0, y0, z0, x1, h, z1, { name: 'prop' }); if (box) roads.boxes.push({ x0, x1, z0, z1, h }); };
  const Y = PORT.yard, T = PORT.top, cxY = (Y.x0 + Y.x1) / 2, czY = (Y.z0 + Y.z1) / 2;
  // ---- the paved yard, lane markings, the quay apron
  wm.add(Bx(Y.x1 - Y.x0 + 4, 0.06, Y.z1 - Y.z0 + 4), cxY, 0.04, czY, '#6b7078');
  wm.add(Bx(Y.x1 - Y.x0 - 8, 0.07, 3), cxY, 0.08, Y.z1 - 10, '#d9b32a');       // yellow safety line along the quay
  for (let x = Y.x0 + 10; x < Y.x1 - 6; x += 12) wm.add(Bx(5, 0.07, 0.3), x, 0.08, Y.z0 + 30, '#e9e9e9');
  // the quay: a solid concrete edge 0.3 m above the yard with a rubber fender strip
  wm.add(Bx(Y.x1 - Y.x0 + 4, T + 3, 8), cxY, (T - 3) / 2, PORT.quayZ - 1, '#9aa0a8'); solid(Y.x0 - 2, PORT.quayZ - 5, Y.x1 + 2, PORT.quayZ + 3, T, -3);
  wm.add(Bx(Y.x1 - Y.x0 + 4, 0.4, 0.5), cxY, -0.4, PORT.quayZ + 3.2, '#1b1d22');
  // ---- piers
  const lampPost = (x, z) => { solid(x - 0.1, z - 0.1, x + 0.1, z + 0.1, T + 4.6, T, false); wm.add(Cy(0.08, 4.6, 6), x, T + 2.3, z, '#3a3f48'); wm.add(Bx(0.9, 0.08, 0.14), x + 0.3, T + 4.6, z, '#3a3f48'); world.glow.add(Bx(0.35, 0.1, 0.3), x + 0.6, T + 4.52, z, '#fff1b5'); };
  for (const P of PORT.piers) {
    const x0 = P.x - P.w / 2, x1 = P.x + P.w / 2, z0 = PORT.pierZ0, z1 = PORT.pierZ1;
    wm.add(Bx(P.w, 7.3, z1 - z0), P.x, T - 3.65, (z0 + z1) / 2, '#8d939c'); wm.add(Bx(P.w - 0.5, 0.06, z1 - z0 - 0.5), P.x, T + 0.01, (z0 + z1) / 2, '#a07a52');   // concrete body, timber decking
    solid(x0, z0, x1, z1, T, -7);
    for (const sg of [-1, 1]) wm.add(Bx(0.25, 0.35, z1 - z0), P.x + sg * (P.w / 2 + 0.1), T - 0.5, (z0 + z1) / 2, '#14161a');   // rubber fender rail
    for (let z = z0 + 6; z < z1 - 2; z += 8) for (const sg of [-1, 1]) { wm.add(Cy(0.22, 0.55, 8), P.x + sg * (P.w / 2 - 0.5), T + 0.28, z, '#2c3038'); wm.add(Cy(0.3, 0.12, 8), P.x + sg * (P.w / 2 - 0.5), T + 0.58, z, '#2c3038'); solid(P.x + sg * (P.w / 2 - 0.5) - 0.3, z - 0.3, P.x + sg * (P.w / 2 - 0.5) + 0.3, z + 0.3, T + 0.65, T, false); }   // bollards
    for (let z = z0 + 10; z < z1 - 4; z += 16) lampPost(P.x - (z % 32 ? P.w / 2 - 0.4 : -P.w / 2 + 0.4), z);
    wm.add(Bx(P.w, 0.08, 0.5), P.x, T + 0.05, z1 - 0.4, '#f1f1f1'); wm.add(Bx(P.w, 0.1, 0.25), P.x, T + 0.1, z1 - 1.4, '#d62828');   // end-of-pier stripe
  }
  // a floating-style boardwalk linking the quay along the first pier root, and mooring numbers
  // ---- warehouses (big sheds, solid) along the back of the yard
  const shed = (x, z, w, d, h, wall, roof) => {
    wm.add(Bx(w, h, d), x, h / 2, z, wall); wm.add(Bx(w + 1, 0.5, d + 1.4), x, h + 0.25, z, roof);
    wm.add(Bx(w + 1, 0.4, d / 2 + 0.7), x, h + 0.9, z - d / 4, roof, -0.12, 0, 0); wm.add(Bx(w + 1, 0.4, d / 2 + 0.7), x, h + 0.9, z + d / 4, roof, 0.12, 0, 0);
    for (let i = 0; i < Math.floor(w / 9); i++) wm.add(Bx(5, 5, 0.25), x - w / 2 + 6 + i * 9, 2.6, z + d / 2 + 0.1, '#f2a516');   // roller doors
    for (let i = 0; i < Math.floor(w / 5); i++) world.glow.add(Bx(2, 0.5, 0.1), x - w / 2 + 3 + i * 5, h - 1.2, z + d / 2 + 0.12, '#bfe3ff');   // clerestory windows
    solid(x - w / 2, z - d / 2, x + w / 2, z + d / 2 + 0.3, h);
  };
  shed(-235, 412, 40, 22, 9, '#b9c0c9', '#4a5663'); shed(-190, 412, 40, 22, 9, '#c9b9a6', '#5a4a3a'); shed(-140, 412, 44, 22, 9, '#a9b9ae', '#3d5a4a');
  // ---- harbour office + control tower
  { const x = -100, z = 440; wm.add(Bx(14, 6, 10), x, 3, z, '#e8e4da'); wm.add(Bx(14.6, 0.5, 10.6), x, 6.25, z, '#2d3a4f'); solid(x - 7, z - 5, x + 7, z + 5, 6.5);
    wm.add(Bx(5, 12, 5), x + 4, 12, z, '#d6dbe2'); wm.add(Bx(6.4, 2.2, 6.4), x + 4, 19.2, z, '#2b3d52'); world.glow.add(Bx(6.2, 1.2, 6.2), x + 4, 19.2, z, '#9fd4ff'); wm.add(Bx(7.2, 0.4, 7.2), x + 4, 20.5, z, '#cfd5dd'); solid(x + 1.5, z - 2.5, x + 6.5, z + 2.5, 18);
    wm.add(Cy(0.06, 5, 5), x + 4, 23, z, '#555'); for (let i = 0; i < 5; i++) world.glow.add(Bx(1.4, 0.35, 0.1), x - 5 + i * 2.5, 4, z + 5.1, '#bfe3ff'); }
  // ---- container stacks: rows of coloured boxes, 1-3 high, with aisles between them
  const cols = ['#c0392b', '#2471a3', '#d4a017', '#1e8449', '#7d3c98', '#e67e22', '#117a8b', '#7f8c8d'];
  for (const [bx, bz, nx, nz] of [[-252, 440, 3, 3], [-215, 452, 4, 2], [-150, 452, 4, 2], [-125, 420, 2, 3]]) {
    const hH = []; for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) hH.push(1 + Math.floor(R() * 3));
    let k = 0; for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++, k++) { const x = bx + i * 7.4, z = bz + j * 3.2, n = hH[k];
      for (let l = 0; l < n; l++) { const c = cols[Math.floor(R() * cols.length)]; wm.add(Bx(6.1, 2.55, 2.5), x, 1.28 + l * 2.6, z, c); wm.add(Bx(6.15, 0.12, 2.55), x, 0.1 + l * 2.6 + 2.55, z, '#31353b') }
      solid(x - 3.05, z - 1.25, x + 3.05, z + 1.25, n * 2.6); }
  }
  // ---- the quay crane (a tall gantry on rails, boom reaches over the water)
  { const x = -165, z = 478, hh = 26; for (const sx of [-1, 1]) for (const sz of [-1, 1]) { wm.add(Bx(0.9, hh, 0.9), x + sx * 9, hh / 2, z + sz * 6, '#e6a817'); solid(x + sx * 9 - 0.5, z + sz * 6 - 0.5, x + sx * 9 + 0.5, z + sz * 6 + 0.5, hh, 0, false); }
    for (const sx of [-1, 1]) { wm.add(Bx(1.2, 0.5, 14), x + sx * 9, 0.4, z, '#444'); solid(x + sx * 9 - 0.6, z - 7, x + sx * 9 + 0.6, z + 7, 0.65, 0, false); }   // rails
    wm.add(Bx(20.5, 1.6, 14), x, hh, z, '#e6a817'); wm.add(Bx(2.4, 1.6, 52), x, hh + 1, z + 18, '#e6a817');   // the boom reaches out over the sea
    for (let i = 0; i < 9; i++) { wm.add(Bx(0.3, 3.2, 0.3), x + 1, hh + 3, z - 6 + i * 6.5, '#d49a10'); }
    wm.add(Bx(0.3, 0.3, 52), x + 1, hh + 4.6, z + 18, '#d49a10'); wm.add(Bx(4, 2.5, 5), x, hh + 3, z + 36, '#444'); world.glow.add(Bx(1, 0.3, 0.1), x, hh + 3, z + 38.6, '#ff3030'); wm.add(Bx(0.15, 14, 0.15), x, hh - 6, z + 36, '#222');
    solid(x - 10, z - 7, x + 10, z + 7, hh, hh - 2, false); }
  // ---- the lighthouse at the end of the east pier
  { const L = PORT.light, r = 3.2;
    wm.add(Bx(8, 7.3, 8), L.x, T - 3.65, L.z, '#8d939c'); solid(L.x - 4, L.z - 4, L.x + 4, L.z + 4, T, -7); wm.add(Bx(8, 0.06, 8), L.x, T + 0.01, L.z, '#a07a52');
    for (let i = 0; i < 6; i++) wm.add(Cy(r - i * 0.18, 4, 18, r - (i + 1) * 0.18), L.x, T + 2 + i * 4, L.z, i % 2 ? '#c4231f' : '#f4f4f4');
    solid(L.x - r, L.z - r, L.x + r, L.z + r, T + 24, T, true);
    wm.add(Cy(r - 0.2, 0.5, 18), L.x, T + 24.3, L.z, '#2b2f36'); wm.add(Cy(r + 0.8, 0.5, 18), L.x, T + 24.8, L.z, '#2b2f36');
    world.glow.add(Cy(1.2, 2.2, 14), L.x, T + 26, L.z, '#fff1b5'); wm.add(Cy(1.9, 1.2, 14, 0.2), L.x, T + 27.8, L.z, '#c4231f'); wm.add(Cy(0.08, 3, 5), L.x, T + 29.5, L.z, '#555'); }
  // ---- a few cargo pallets, barrels and a fuel dock hut by the first pier
  for (let i = 0; i < 10; i++) { const x = -255 + R() * 170, z = 465 + R() * 14; if (Math.abs(x + 180) < 6) continue; wm.add(Cy(0.45, 1.0, 8), x, 0.55, z, i % 2 ? '#2e86c1' : '#c0392b'); solid(x - 0.45, z - 0.45, x + 0.45, z + 0.45, 1.05, 0, false); }
  wm.add(Bx(5, 3, 4), -244, 1.5, 480, '#f1f1f1'); wm.add(Bx(5.4, 0.4, 4.4), -244, 3.2, 480, '#d62828'); solid(-246.5, 478, -241.5, 482, 3.4);
}
