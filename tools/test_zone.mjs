// v355: the end circle lands all over the island (not always in the middle) and always on dry land
import { makeZone } from '../public/js/zone.js';
import { rawH, riverX } from '../public/js/combat.js';
globalThis.window = globalThis;
let hill = 0, bad = 0, q = [0, 0, 0, 0], far = 0, N = 600, mind = 1e9, maxd = 0;
for (let s = 1; s <= N; s++) { const Z = makeZone(s * 7919), e = Z.P[Z.P.length - 1]; if (Math.hypot(e.x - 170, e.z + 150) < 70) hill++; q[(e.x > 0 ? 1 : 0) + (e.z > 0 ? 2 : 0)]++; const d = Math.hypot(e.x, e.z); maxd = Math.max(maxd, d); if (d > 120) far++; if (rawH(e.x, e.z) < 1.2 || Math.abs(e.x - riverX(e.z)) < 34) bad++; for (let i = 1; i < Z.P.length; i++) if (Math.hypot(Z.P[i].x - Z.P[i - 1].x, Z.P[i].z - Z.P[i - 1].z) + Z.P[i].r > Z.P[i - 1].r + 90) bad++; }
console.log('seeds', N, '| end circle on the NE military hill:', hill, '| quadrants NW NE SW SE', q.join(' '), '| farther than 120 m from the centre:', far, '| farthest', Math.round(maxd), '| bad (water / not nested):', bad);
