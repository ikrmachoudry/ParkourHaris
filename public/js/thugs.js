// HARIS CITY THUGS: cartoon drivers sit in the parked vehicles. Steal a vehicle -> the driver jumps out, chases you and punches;
// hit him with the bat a few times and he dies and disappears. Pure shared logic (server runs it in multiplayer, the client in single player).
export const TH = { SEAT: 0, FIGHT: 1, DEAD: 2, HP: 4, SPEED: 6.2, REACH: 2.0, CHASE: 70, HIT_R: 3.3, ATK_CD: 1.5 };

// one thug per vehicle; v = vehicle index
export function newThugs(vehicles) {
  return vehicles.map((c, v) => ({ v, st: TH.SEAT, hp: TH.HP, x: c.x, y: c.y || 0, z: c.z, yaw: c.yaw, ch: v % 4, cd: 0, stun: 0, kx: 0, kz: 0, pid: null, fade: 0, mv: 0 }));
}

// a player pressed C next to an occupied vehicle: the driver gets out on the player's side and the fight starts
export function stealThug(ths, v, pid, px, pz, vx, vz) {
  const t = ths[v]; if (!t || t.st !== TH.SEAT) return false;
  const dx = px - vx, dz = pz - vz, l = Math.hypot(dx, dz) || 1;
  t.st = TH.FIGHT; t.x = vx + dx / l * 2.2; t.z = vz + dz / l * 2.2; t.pid = pid; t.cd = 0.9; t.stun = 0.5; t.kx = dx / l * 4; t.kz = dz / l * 4;
  return true;
}

// the bat: player at (px,pz) facing (fx,fz) swings. returns the event or null.  mega bats hit harder and further.
export function hitThug(ths, v, px, pz, fx, fz, mega) {
  const t = ths[v | 0]; if (!t || t.st !== TH.FIGHT) return null;
  const dx = t.x - px, dz = t.z - pz, d = Math.hypot(dx, dz);
  if (d > (mega ? TH.HIT_R + 1.4 : TH.HIT_R) || d < 1e-3) return null;
  t.hp -= mega ? 2 : 1; t.stun = 0.45; t.kx = dx / d * 9; t.kz = dz / d * 9; t.cd = Math.max(t.cd, 0.7);
  if (t.hp <= 0) { t.st = TH.DEAD; t.fade = 0; return { k: 'die', v: t.v, x: t.x, z: t.z }; }
  return { k: 'hurt', v: t.v, x: t.x, z: t.z };
}

// players: [{id,x,y,z,drv}]; ground(x,z) = terrain height.  returns events [{k:'hit',pid,v,nx,nz}]
export function stepThugs(ths, dt, players, ground) {
  const evs = [];
  for (const t of ths) {
    if (t.st === TH.DEAD) { t.fade += dt; continue; }
    if (t.st !== TH.FIGHT) continue;
    t.cd -= dt; t.mv = 0;
    if (t.stun > 0) { t.stun -= dt; t.x += t.kx * dt; t.z += t.kz * dt; t.kx *= 0.9; t.kz *= 0.9; }
    else {
      let tg = null, bd = TH.CHASE;
      for (const p of players) { const d = Math.hypot(p.x - t.x, p.z - t.z); if (d < bd) { bd = d; tg = p; } }
      if (tg) {
        const dx = tg.x - t.x, dz = tg.z - t.z, d = Math.hypot(dx, dz) || 1;
        t.yaw = Math.atan2(dx, dz);
        if (d > TH.REACH * 0.8) { t.x += dx / d * TH.SPEED * dt; t.z += dz / d * TH.SPEED * dt; t.mv = TH.SPEED; }
        if (d < TH.REACH && t.cd <= 0 && Math.abs(tg.y - t.y) < 2.2) { t.cd = TH.ATK_CD; evs.push({ k: 'hit', pid: tg.id, v: t.v, nx: dx / d, nz: dz / d }); }
      }
    }
    t.x = Math.max(-370, Math.min(370, t.x)); t.z = Math.max(-370, Math.min(370, t.z));
    const g = ground(t.x, t.z); t.y = Math.max(g, -0.2);
  }
  return evs;
}

// compact network form: [state, hp, x, y, z, yaw, bit0 moving | bit1 stunned]
export const packThugs = (ths) => ths.map((t) => [t.st, t.hp, +t.x.toFixed(2), +t.y.toFixed(2), +t.z.toFixed(2), +t.yaw.toFixed(2), (t.mv ? 1 : 0) | (t.stun > 0 ? 2 : 0)]);
