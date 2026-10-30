// HeroActor: drop-in replacement for the cartoon Character in the city (same group / height / update / dispose API),
// but it is the realistic procedural human from hchar.js.  Poses are blended so there are no pops.
import * as THREE from 'three';
import { buildHeroChar, poseChar } from './hchar.js';
import { wcls } from './economy.js';

// four player looks (character ids 0..3): each wears a cap in the player's own colour (matches the map dot) - no pedestrian wears one, so players stand out in a crowd, plus a cop and a few pedestrians for later
export const HERO_LOOKS = [
  { role: 'civilian', top: '#b53a2e', pants: '#2b3140', skinTone: '#c68e63', hair: '#16110d', hat: 'cap', capCol: '#ff5fb4' },
  { role: 'civilian', top: '#2f7a5a', pants: '#3a3a44', skinTone: '#8d5a3b', hair: '#0d0a08', hat: 'cap', capCol: '#3b82f6' },
  { role: 'civilian', top: '#d9a52b', pants: '#27384f', skinTone: '#e0ac85', hair: '#4a3020', hat: 'cap', capCol: '#3ddc84' },
  { role: 'civilian', top: '#5b4aa8', pants: '#22252b', skinTone: '#a8714e', hair: '#120d0a', hat: 'cap', capCol: '#ffc233' },
];
export const heroLook = (id) => HERO_LOOKS[((id | 0) % 4 + 4) % 4];

const _q = new THREE.Quaternion();
export class HeroActor {
  constructor(id, look) {
    this.ch = buildHeroChar(look || heroLook(id));
    this.group = new THREE.Group(); this.group.add(this.ch.group);
    this.height = 1.78; this.tris = this.ch.tris;
    this.tWalk = 0; this.tRun = 0; this.t = 0; this.pose = 'idle'; this.seated = false;
    this.prev = {}; for (const n in this.ch.bones) this.prev[n] = { q: new THREE.Quaternion(), p: new THREE.Vector3(), init: false };
  }
  // st: { speed, grounded, vy, stun, seated }
  update(dt, st) {
    this.t += dt;
    let name = 'idle', t = this.t;
    const sp = st.speed || 0;
    if (st.seated) name = st.bike ? 'ride' : st.pax ? (st.weapon && st.weapon !== 'bat' && st.weapon !== 'grenade' ? 'paxGun' : 'pax') : 'sit';
    else if (st.swim) name = 'swim';
    else if (!st.grounded && (Math.abs(st.vy || 0) > 1.2 || this.inAir)) { name = 'jump'; this.inAir = true; }   // stays in the jump pose over the apex (it used to flip to run for a moment, lifting the leg a second time)
    else if (sp > 3.2) { name = 'run'; this.tRun += dt * sp / 4.2; t = this.tRun; }
    else if (sp > 0.25) { name = 'walk'; this.tWalk += dt * sp / 1.3; t = this.tWalk; }
    if (st.prone && !st.seated && !st.swim && name !== 'jump') name = sp > 0.15 ? 'crawl' : 'proneIdle';
    else if (st.crouch && name !== 'jump' && !st.seated) { if (sp > 0.25) { name = 'crouchwalk'; t = this.tWalk; } else name = 'crouch'; }
    if (st.grounded || st.swim || st.seated) this.inAir = false;
    if (name === 'jump') t = Math.max(-1, Math.min(1, (st.vy || 0) / 7));
    if (st.stun > 0 && !st.seated) name = 'fall';
    const w = st.weapon && (!st.seated || name === 'paxGun') ? st.weapon : null;   // 'bat' | 'pistol' | 'ak' | (combat guns)
    const wc = w ? wcls(w) : null;   // the pose family
    if (w && (name === 'idle' || name === 'walk' || name === 'crouch' || name === 'crouchwalk')) {
      const mv = sp > 0.25;
      if (wc === 'pistol') name = st.aiming ? 'pistolAim' : mv ? 'pistolWalk' : 'pistolIdle';
      else if (wc === 'ak' || wc === 'sniper') name = st.aiming ? 'rifleAim' : mv ? 'rifleWalk' : 'rifleIdle';
    }
    if (w && st.shooting && !st.seated && !st.swim && !st.crouch && !st.prone && (wc === 'ak' || wc === 'sniper' || wc === 'pistol') && (name === 'run' || name === 'rifleWalk' || name === 'pistolWalk')) name = (wc === 'pistol' ? 'pistol' : 'rifle') + (name === 'run' ? 'RunShoot' : 'WalkShoot');   // v222: firing while moving: the gun comes UP to the shoulder and points where the shots go (it used to stay low, pointing at the ground)
    if (st.faceCam && !st.seated && !st.swim && sp > 0.25 && st.grounded) {   // PUBG movement: the body faces where the camera looks, so walking back / sideways plays the back / strafe clips
      const f = st.mvF === undefined ? 1 : st.mvF, r = st.mvR || 0, side = r > 0 ? 'R' : 'L';
      if (name === 'rifleWalk' || name === 'pistolWalk') { const p = name === 'rifleWalk' ? 'rifle' : 'pistol'; if (f < -0.4) name = p + 'Back'; else if (Math.abs(r) > 0.6 && f < 0.55) name = p + 'Strafe' + side; }
      else if (name === 'run' || name === 'walk') { const p = name === 'walk' ? 'walk' : 'run'; if (f < -0.4) name = p + 'Back'; else if (Math.abs(r) > 0.6 && f < 0.55) name = p + side; }
    }
    if (st.crouch && w && !st.seated && (wc === 'ak' || wc === 'sniper') && (name === 'rifleIdle' || name === 'rifleWalk' || name === 'rifleAim')) name = sp > 0.25 ? 'rifleCrouchWalk' : st.aiming ? 'rifleCrouchAim' : 'rifleCrouchIdle';   // kneeling with the rifle (real Mixamo crouch clips)
    if (st.reload > 0 && w && !st.seated && !st.swim && wc !== 'bat') { name = 'reloadR'; t = st.reload; }   // the real Mixamo reload
    if (name === 'idle' && st.gesture) name = st.gesture;
    if (st.nade > 0 && !st.seated && !st.swim) { name = st.nadeToss === 2 ? 'nadeStand' : st.nadeToss ? 'nadeToss' : 'nadeThrow'; t = st.nade; }
    if (st.skydive) { name = st.skydive === 2 ? 'chute' : 'skydive'; t = this.t; }
    if (st.zpose) { name = st.zpose; t = st.zp || 0; }
    if (st.punch > 0 && !st.seated && !st.zpose) { name = st.kick ? 'kick' : w === 'bat' ? 'batswing' : 'punch'; t = st.punch; }
    const DRV = { rifleRunShoot: 'run', pistolRunShoot: 'run', rifleWalkShoot: 'aimLow', pistolWalkShoot: 'aimLow', walkBack: 'walk', walkL: 'walk', walkR: 'walk', crawl: 'idle', proneIdle: 'idle', reloadR: 'aimLow', rifleBack: 'aimLow', rifleStrafeL: 'aimLow', rifleStrafeR: 'aimLow', pistolBack: 'aimLow', pistolStrafeL: 'aimLow', pistolStrafeR: 'aimLow', runBack: 'run', runL: 'run', runR: 'run', dieF: 'idle', dieB: 'idle', dieR: 'idle', dieL: 'idle', skydive: 'jump', chute: 'idle', rifleCrouchIdle: 'aimLow', rifleCrouchAim: 'aimLow', rifleCrouchWalk: 'aimLow', zWalk: 'walk', zCrawl: 'walk', zDeath: 'idle', dReact: 'idle', dFly: 'idle', nadeThrow: 'nadeThrow', nadeToss: 'nadeThrow', nadeStand: 'nadeThrow', pistolIdle: 'aimLow', pistolWalk: 'aimLow', rifleIdle: 'aimLow', rifleWalk: 'aimLow', rifleAim: 'aim', pistolAim: 'aim' };
    poseChar(this.ch, DRV[name] || name, t, 1);
    { const W = this.ch.wmesh; if (w) { this.ch.gun.visible = true; for (const k in W) W[k].visible = k === w; } else for (const k in W) W[k].visible = k === 'pistol'; }
    // blend from the previous frame's pose (fast, so it still looks crisp)
    const k = Math.min(1, dt * 16);
    for (const n in this.ch.bones) {
      const b = this.ch.bones[n], p = this.prev[n];
      if (!p.init || this.pose === name && false) { p.q.copy(b.quaternion); p.p.copy(b.position); p.init = true; continue; }
      _q.copy(b.quaternion); p.q.slerp(_q, k); b.quaternion.copy(p.q);
      p.p.lerp(b.position, k); b.position.copy(p.p);
    }
    { // knocked down, GTA V style: thrown (head over heels in the air), rolls along the ground, lies there, then gets back up
      const g = this.ch.group, stunned = st.stun > 0, air = stunned && !st.grounded, sp2 = st.speed || 0;
      const tg = st.stun > 0.75 ? 1 : 0; this.lie = (this.lie || 0) + (tg - (this.lie || 0)) * Math.min(1, dt * (tg ? 9 : 3.2));   // lies flat quickly, gets up slowly
      const tgtX = -1.4 * this.lie, TAU = Math.PI * 2;
      if (air) this.ang = Math.max(-5.4, (this.ang || 0) - dt * 8);
      else { let d = (this.ang || 0) - tgtX; d -= Math.round(d / TAU) * TAU; this.ang = tgtX + d; this.ang += (tgtX - this.ang) * Math.min(1, dt * 10); }
      if (stunned && !air && sp2 > 1.2) this.roll = (this.roll || 0) + dt * sp2 * 0.8;                  // rolling over on the ground while he slides
      else { const r = this.roll || 0; this.roll = r + (Math.round(r / TAU) * TAU - r) * Math.min(1, dt * 6); if (!stunned && this.lie < 0.05) this.roll = 0; }
      if (Math.abs(this.ang) > 0.004 || Math.abs(this.roll || 0) > 0.004 || stunned) { g.rotation.x = this.ang; g.rotation.y = this.roll || 0; this.hadLie = true; this.liftY = 0.26 * Math.min(1, Math.abs(this.ang) / 1.4); g.position.y = this.liftY; }   // lying flat: lifted a hand's width so the body rests ON the road, not in it
      else if (this.hadLie) { g.rotation.x = 0; g.rotation.y = 0; g.position.y = 0; this.liftY = 0; this.ang = 0; this.roll = 0; this.hadLie = false; } }
    this.pose = name; this.seated = name === 'sit' || name === 'ride' || name === 'pax' || name === 'paxGun';
  }
  dispose() {
    this.group.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); const m = o.material; (Array.isArray(m) ? m : [m]).forEach((mm) => mm.dispose()); } });
  }
}
