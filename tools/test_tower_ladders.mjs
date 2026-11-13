// v503: the towers have ladders (no spiral stairs): every landing must have a floor under the foot / exit points, the floor between the ladders must be walkable, the hatch must be open, and the ladder shaft free of solids.   node tools/test_tower_ladders.mjs
import { layout, hitsSolid, supportY, TW } from '../public/js/combat.js';
const L = layout(); let bad = 0; const rep = (m) => { bad++; console.log('BAD', m); };
L.towers.forEach((t, ti) => {
  const ls = t.lads; let ok = 0;
  ls.forEach((q, k) => {
    const sup = (x, z, y) => supportY(L, x, z, 0.25, y + 0.4);
    const y0 = q.y0, y1 = q.y1;
    // 1. foot standing point has a floor at y0 (k>0) or ground (k=0)
    if (k > 0) { const s = sup(q.fx, q.fz, y0); if (Math.abs(s - y0) > 0.06) rep(`T${ti} k${k} foot support ${s.toFixed(2)} vs ${y0.toFixed(2)}`); }
    // exit standing point at top must be floor level y1 (roof or floor above)
    const se = sup(q.ex, q.ez, y1); if (Math.abs(se - y1) > 0.06) rep(`T${ti} k${k} exit support ${se.toFixed(2)} vs ${y1.toFixed(2)}`);
    if (hitsSolid(L, q.ex, q.ez, 0.3, y1)) rep(`T${ti} k${k} exit blocked by ${hitsSolid(L, q.ex, q.ez, 0.3, y1).k}`);
    if (k > 0 && hitsSolid(L, q.fx, q.fz, 0.3, y0)) rep(`T${ti} k${k} foot blocked ${hitsSolid(L, q.fx, q.fz, 0.3, y0).k}`);
    // hatch is open: no floor at (tx,tz) y1 level, climbing hole clear
    const st = sup(q.tx, q.tz, y1); if (Math.abs(st - y1) > 0.06) rep(`T${ti} k${k} the stand-here-and-press-F point is not solid floor`);
    if (hitsSolid(L, q.tx, q.tz, 0.3, y1)) rep(`T${ti} k${k} the F point is inside the rail`);
    // v508: the hole is FENCED: from the F point straight at the hole, and from the left / right of the exit, you cannot get closer than the rail
    const hc = { x: t.x + q.dx * 3.6, z: t.z + q.dz * 3.6 }; if (Math.abs(supportY(L, hc.x, hc.z, 0.25, y1 + 0.4) - y1) < 0.06) rep(`T${ti} k${k} hatch centre has a floor (no hole)`);
    for (const off of [-0.7, -0.3, 0, 0.3, 0.7]) { let reach = null; for (let u = 0; u <= 1.0001; u += 0.02) { const px = t.x + q.dz * off * 1 + q.dx * (2.0 + u * 1.9) , pz = t.z - q.dx * off + q.dz * (2.0 + u * 1.9); if (hitsSolid(L, px, pz, 0.3, y1)) { reach = u; break; } } if (reach === null) rep(`T${ti} k${k} walking at the hatch (lateral ${off}) reaches the hole with NO rail`); }
    for (const side of [-1, 1]) { let r2 = null; for (let u = 0; u <= 1.0001; u += 0.02) { const px = t.x + q.dz * side * (0.6 + u * 1.2) + q.dx * 3.6, pz = t.z - q.dx * side * (0.6 + u * 1.2) + q.dz * 3.6; if (hitsSolid(L, px, pz, 0.3, y1)) { r2 = u; break; } } if (r2 === null) rep(`T${ti} k${k} the side of the hatch is open`); }
    // standing radius 3.3 at height between y0..y1 must not be inside a solid
    for (let y = y0 + 0.1; y <= y1; y += 0.4) { const h = hitsSolid(L, t.x + q.dx * 3.3, t.z + q.dz * 3.3, 0.2, y); if (h && h.k !== 'floor' && !(h.k === 'wall' && y > y1 - 2.2)) rep(`T${ti} k${k} ladder column blocked at y${(y - y0).toFixed(1)} by ${h.k}`); }
    // walk from previous exit to this foot across the floor at y0 (k>0)
    if (k > 0) { const p = ls[k - 1]; let fail = 0; for (let u = 0; u <= 1.0001; u += 0.05) { const x = p.ex + (q.fx - p.ex) * u, z = p.ez + (q.fz - p.ez) * u; const s = sup(x, z, y0); if (Math.abs(s - y0) > 0.06) fail++; const h = hitsSolid(L, x, z, 0.3, y0); if (h) fail++; } if (fail) rep(`T${ti} k${k} walk from prev exit to foot: ${fail} bad samples`); else ok++; }
  });
  // door side: ground floor foot reachable from outside: bot foot
  console.log(`T${ti} nseg ${t.nseg} seg ${t.seg} walks ok ${ok}`);
});
console.log(bad ? 'TOWER LADDERS FAIL (' + bad + ')' : 'TOWER LADDERS OK'); if (bad) process.exitCode = 1;
L.towers.forEach((t, ti) => { const q = t.lads[0]; let fail = 0, n = 0; for (let u = 0; u <= 1.0001; u += 0.04) { const x = t.x + (q.fx - t.x) * u, z = t.z + TW.O + 1.2 + (q.fz - t.z - TW.O - 1.2) * u; n++; const h = hitsSolid(L, x, z, 0.3, t.gy); const s = supportY(L, x, z, 0.25, t.gy + 0.4); if (h) { fail++; if (fail < 4) console.log('  door path blocked', ti, u.toFixed(2), h.k, 'at z off', (z - t.z).toFixed(2)); } } console.log('door->foot T' + ti, fail ? 'FAIL ' + fail + '/' + n : 'ok'); });
