// v560: a CLAIMED hit (the shooter's screen showed the hit) counts when the bot is near the line and nothing blocks it; never through a wall, never on his own droid, never from far away
import { CombatHost } from '../combatserver.js';
import { CMB, cmbH, rayWalls } from '../public/js/combat.js';
let okN = 0, bad = 0; const ck = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const h = new CombatHost(3, () => {}, () => {}, 'medium', 6); const P = [{ id: 1, x: CMB.x + 250, z: CMB.z + 250, y: 0, al: 1, tm: 0 }];
for (let i = 0; i < 30; i++) h.tick(0.05, P);
const b = h.sim.bots.find((q) => q.alive && !q.droid); b.hp = 1e6; let done = false;
for (let k = 0; k < 400 && !done; k++) {
  const x = (Math.random() - 0.5) * 500, z = (Math.random() - 0.5) * 500, sx = x, sz = z - 40; b.x = x; b.z = z; b.y = null;
  if (rayWalls(h.sim.L, sx, sz, 0, 1, 40, 1.3, undefined) < 39.5 || rayWalls(h.sim.L, sx + 2.5, sz, 0, 1, 40, 1.3, undefined) < 39.5 || rayWalls(h.sim.L, sx + 6, sz, 0, 1, 40, 1.3, undefined) < 39.5) continue; const g = cmbH(sx, sz), gb = cmbH(x, z); if (Math.abs(gb - g) > 1) continue;
  done = true; const px = { id: 1, jx: CMB.x + sx, jz: CMB.z + sz, ws: null }, cam = g + 1.6, sl = (gb + 1.1 - cam) / 40;
  const mk = (dx, hb) => ({ t: 'cshoot', ox: sx + dx, oz: sz, fx: 0, fz: 1, range: 100, dmg: 1.6, y: cam - 0.15, b0: cam, bs: sl, bk: 0, hb });
  let hp0 = b.hp; h.shoot(px, mk(2.5, undefined)); ck(b.hp === hp0, 'a shot 2.5 m to the side without a claim misses');
  hp0 = b.hp; h.shoot(px, mk(2.5, b.id)); ck(b.hp < hp0, 'the same shot WITH the claim of the bot counts');
  hp0 = b.hp; h.shoot(px, { ...mk(2.5, b.id), w: 'ak' }); { const dd = hp0 - b.hp; ck(dd > 30 && dd < 60, 'v563: an AK claimed hit does PUBG damage ~48 x difficulty (' + dd.toFixed(1) + ')'); }
  hp0 = b.hp; h.shoot(px, { ...mk(0, undefined), w: 'ak' }); { const dd = hp0 - b.hp; ck(dd === 0 || (dd > 30 && dd < 60), 'v563: a direct ballistic AK shot online does 0 or ~48 (' + dd.toFixed(1) + ')'); }
  hp0 = b.hp; h.shoot(px, mk(6, b.id)); ck(b.hp === hp0, 'a claim 6 m away from the line is refused');
  hp0 = b.hp; const sx2 = sx, far = { ...mk(2.5, b.id), range: 20 }; h.shoot(px, far); ck(b.hp === hp0, 'a claim beyond the bullet range is refused');
  const D = h.sim.bots.find((q) => q.droid); h.sim.addDroid(0); const d2 = h.sim.bots[h.sim.bots.length - 1]; d2.placed = true; d2.x = x; d2.z = z; d2.y = null; h.sim.ptm = { 1: 0 }; const dh = d2.hp; h.shoot(px, mk(0, d2.id)); ck(d2.hp === dh, 'a claim on the shooter\'s OWN droid is refused');
}
let wd = false; for (let k = 0; k < 3000 && !wd; k++) {
  const x = (Math.random() - 0.5) * 500, z = (Math.random() - 0.5) * 500, sx = x, sz = z - 40; if (rayWalls(h.sim.L, sx, sz, 0, 1, 40, 1.3, undefined) > 30) continue; const g = cmbH(sx, sz); wd = true; b.alive = true; b.hp = 1e6; b.x = x; b.z = z; b.y = null;
  const hp0 = b.hp; h.shoot({ id: 1, jx: CMB.x + sx, jz: CMB.z + sz, ws: null }, { t: 'cshoot', ox: sx, oz: sz, fx: 0, fz: 1, range: 100, dmg: 1.6, y: g + 1.45, b0: g + 1.6, bs: 0, bk: 0, hb: b.id }); ck(b.hp === hp0, 'a claim on a bot BEHIND a wall is refused');
}
ck(done, 'found a clear test spot'); console.log(bad ? 'CLAIMHIT FAIL' : 'CLAIMHIT OK'); if (bad) process.exitCode = 1;
