// Prints the real finish line of every level so levelmeta.js can be kept in sync.
import { buildLevel } from '../public/js/levels.js';
for (let i = 0; i < 4; i++) {
  const { info } = buildLevel(i, true);
  console.log(i, info.key, 'finishZ', info.finishZ, 'finishY', info.finishY, 'endZ', info.endZ, 'cps', info.checkpoints.length);
}
