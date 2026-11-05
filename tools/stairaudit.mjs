// every building with more than one storey: is there a staircase, do its steps reach the top floor, is the hole in each floor above it
import { layout } from '../public/js/combat.js';
const L = layout(); let bad = 0, n = 0;
for (const b of L.buildings) {
  if (!(b.fl > 1)) continue; n++;
  const steps = b.solids.filter((s) => s.k === 'step'), fh = b.fh || 3, fy = b.fy || 0;
  const top = steps.length ? Math.max(...steps.map((s) => s.y1)) : null, need = (b.fl - 1) * (b.rise || (b.stairs && b.stairs.rise) || fh + 0.2);
  const flags = []; if (!b.stairs && !b.stairModel && !b.stair2) flags.push('NO STAIRS OBJECT'); if (!steps.length && !b.stairModel) flags.push('NO STEP SOLIDS');
  if (steps.length && top !== null && top - fy < need - 0.6 && !b.stairModel) flags.push('steps reach ' + (top - fy).toFixed(1) + ' of ' + need.toFixed(1));
  console.log(b.kind.padEnd(9), (b.x + ',' + b.z).padEnd(11), 'fl', b.fl, 'stairs', b.stairs ? (b.stairs.ax || 'x') : b.stairModel ? 'model' : '-', 'steps', steps.length, 'top', top === null ? '-' : (top - fy).toFixed(1), flags.join('; ') || 'ok'); if (flags.length) bad++;
}
console.log(n, 'multi-storey buildings,', bad, 'with a problem');
