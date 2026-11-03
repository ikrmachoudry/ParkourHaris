// v343: stair safety probe: stand on every stair tread, push sideways in 4 directions: any drop of more than 1.0 m within ~2 m of walking = an unprotected edge (a gap / missing banister)
import { World } from '../public/js/world.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { layout, CMB, cmbH } from '../public/js/combat.js';
globalThis.window = globalThis;
const L = layout(); const w = new World(); w.terrain = (x, z) => cmbH(x - CMB.x, z - CMB.z);
for (const q of L.solids) w.addStatic(CMB.x + q.x0, q.y0, CMB.z + q.z0, CMB.x + q.x1, q.y1, CMB.z + q.z1, { name: q.k === 'tree' || q.k === 'rock' || q.k === 'prop' ? 'prop' : 'building', slide: !!q.slide });
const out = {}; let total = 0;
for (const b of L.buildings) {
  const steps = b.solids.filter((s) => s.k === 'step'); if (!steps.length) continue; const bad = [];
  for (const s of steps) {
    const cx = (s.x0 + s.x1) / 2, cz = (s.z0 + s.z1) / 2;
    for (const [px, pz] of [[cx, cz], [s.x0 + 0.2, cz], [s.x1 - 0.2, cz], [cx, s.z0 + 0.2], [cx, s.z1 - 0.2]]) {
      if (px < s.x0 || px > s.x1 || pz < s.z0 || pz > s.z1) continue;
      const lat = (s.x1 - s.x0) > (s.z1 - s.z0) ? 'x' : 'z'; for (const [dx, dz] of (lat === 'x' ? [[1, 0], [-1, 0]] : [[0, 1], [0, -1]])) {   // only SIDEWAYS pushes: walking down along the flight is legal
        const bd = newBody(); bd.x = CMB.x + px; bd.z = CMB.z + pz; bd.y = s.y1 + 0.02; bd.grounded = true; bd.vx = bd.vy = bd.vz = 0;
        for (let i = 0; i < 20; i++) { w.update(i / 60, 1 / 60); stepBody(w, bd, 1 / 60, { mx: 0, mz: 0 }); }
        const y0 = bd.y; if (y0 < s.y1 - 0.3) continue;
        for (let i = 0; i < 40; i++) { w.update(i / 60, 1 / 60); stepBody(w, bd, 1 / 60, { mx: dx, mz: dz }); bd.events.length = 0; }
        if (bd.y < y0 - 1.0) bad.push([+(px).toFixed(1), +(pz).toFixed(1), +(y0 - CMB.x * 0).toFixed(1), +bd.y.toFixed(1), dx, dz]);
      }
    }
  }
  if (bad.length) { out[b.kind + '@' + b.x + ',' + b.z] = bad; total += bad.length; }
}
for (const [k, v] of Object.entries(out)) console.log(k, v.length, JSON.stringify(v.slice(0, 4)));
console.log('unprotected edges:', total);
