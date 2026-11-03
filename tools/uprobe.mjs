// v374: ASCII map of what the body can stand on near stairs on floor 2 ('#'=blocked '.'=free); arg = building kind
import { layout, hitsSolid } from '../public/js/combat.js';
const L = layout(); const kind = process.argv[2];
for (const b of L.buildings.filter((q) => (kind ? q.kind === kind : q.stairModel) && q.stairRect)) {
  const SL = 0.3, y = b.fy + (b.fh + SL) + 0.06, r = b.stairRect;
  console.log('==', b.kind, b.x.toFixed(1), b.z.toFixed(1), 'w', b.w, 'd', b.d, 'stairRect', JSON.stringify(r), 'U?', !!b.stairModel);
  for (let z = r.z0 - 1.5; z < r.z1 + 2.5; z += 0.25) { let s = z.toFixed(1).padStart(7) + ' '; for (let x = r.x0 - 1.2; x < r.x1 + 3.5; x += 0.2) s += hitsSolid(L, b.x + x, b.z + z, 0.3, y) ? '#' : '.'; console.log(s); }
}
