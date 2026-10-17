// Client side of the Jungle animals: meshes, tags, ropes, taming (bat), riding. Single player runs the brain locally (jlayout.js);
// multiplayer mirrors the server's brain (messages 'an' / 'aev' / 'abite').
import * as THREE from 'three';
import { KINDS, ST, HILL, ANIMAL_DEFS, active, newAnimals, stepAnimals, hitAnimal, jungleLayout } from './jlayout.js';
import { QUEST_DEFS, questAnimalLayout } from './quest.js';
import { buildAnimalMesh, animateAnimal } from './animals3d.js';
import { makeNameTag } from './characters.js';
import { STAKES } from './jungle.js';
import * as A from './audio.js';

const TAG_Y = { lion: 3.0, leopard: 2.7, elephant: 5.3, horse: 3.8, dino: 5.6, coyote: 2.7, boar: 2.8, hyena: 2.8, bear: 4.6, gorilla: 4.9 };
const lerp = (a, b, k) => a + (b - a) * k;
const lerpAng = (a, b, k) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return a + d * k; };
const ropeGeo = new THREE.CylinderGeometry(0.07, 0.07, 1, 5);
const ropeMat = new THREE.MeshStandardMaterial({ color: '#c9a063', roughness: 0.9 });
const UP = new THREE.Vector3(0, 1, 0);

export class AnimalSys {
  constructor(race) {
    this.r = race; this.multi = race.multi; this.quest = !!race.meta.quest;
    this.defs = this.quest ? QUEST_DEFS() : ANIMAL_DEFS; active.defs = this.defs;
    this.L = this.quest ? questAnimalLayout() : jungleLayout();
    this.list = newAnimals(this.defs); this.mount = null; this.mountT = 0; this.t = 0; this.near = null; this.evAcc = [];
    this.items = this.list.map((a) => {
      const o = buildAnimalMesh(a.kind); o.root.position.set(a.x, a.y, a.z); o.root.rotation.y = a.yaw; race.scene.add(o.root);
      const it = { a, o, x: a.x, y: a.y, z: a.z, yaw: a.yaw, speed: 0, tag: null, tagKey: '', ropes: [], px: a.x, pz: a.z, hitFx: 0 };
      if (a.kind === 'dino') for (let i = 0; i < STAKES.length; i++) { const m = new THREE.Mesh(ropeGeo, ropeMat); m.castShadow = true; race.scene.add(m); it.ropes.push(m); }
      return it;
    });
    this.names = new Map(race.players.map((p) => [p.id, p.name]));
  }

  me() { return this.r.localId; }
  petCount() { let n = 0; for (const a of this.list) if (a.owner === this.me()) n++; return n; }

  // ---------------------------------------------------------------- per frame
  update(dt) {
    const r = this.r, b = r.me.body, id = this.me(); this.t += dt;
    if (this.mountT > 0) this.mountT -= dt;
    if (!this.multi && r.levelTime >= 0 && !r.over) { // single player: the brain runs right here
      const evs = stepAnimals(this.list, dt, [{ id, x: b.x, y: b.y, z: b.z, r: b.yaw, mounted: this.mount ? 1 : 0 }], this.L);
      this.handle(evs);
    }
    if (this.mount && this.multi && this.mountT <= 0 && this.mount.rider !== id) this.dismount(true); // server said no
    for (const it of this.items) {
      const a = it.a, K = KINDS[a.kind];
      const mine = this.mount === a;
      if (mine) { it.x = b.x; it.y = b.y; it.z = b.z; it.yaw = b.yaw; }
      else if (!this.multi) { it.x = a.x; it.y = a.y; it.z = a.z; it.yaw = a.yaw; }
      else { const f = 1 - Math.exp(-13 * dt); const far = Math.hypot(a.x - it.x, a.z - it.z) > 14; it.x = far ? a.x : lerp(it.x, a.x, f); it.y = lerp(it.y, a.y, f); it.z = far ? a.z : lerp(it.z, a.z, f); it.yaw = lerpAng(it.yaw, a.yaw, 1 - Math.exp(-10 * dt)); }
      const sp = dt > 0 ? Math.hypot(it.x - it.px, it.z - it.pz) / dt : 0; it.speed = lerp(it.speed, Math.min(sp, 14), 0.25); it.px = it.x; it.pz = it.z;
      const o = it.o, root = o.root;
      root.position.set(it.x, it.y, it.z); root.rotation.y = it.yaw; root.visible = a.st !== ST.HIDDEN;
      if (a.st === ST.HIDDEN) continue;
      it.atk = a.st === ST.ATTACK ? (it.atk || 0) + dt : 0;
      animateAnimal(o, this.t, dt, mine ? Math.min(14, Math.hypot(b.vx, b.vz)) : it.speed, a.st, a.st === ST.ATTACK ? Math.max(0.02, 1 - it.atk / 0.5) : 0);
      this.updateTag(it, K);
      if (it.ropes.length) this.updateRopes(it);
      if (a.st === ST.PET && a.owner === id && !mine && Math.random() < dt * 0.35) r.particles.emit(it.x, it.y + K.seat + 0.6, it.z, 1, { color: '#ff5fa8', speed: 0.6, up: 1.6, life: 0.9, size: 0.38 });
    }
    // closest own pet -> show the ride button
    let near = null, bd = 7;
    if (!this.mount && !r.over) for (const it of this.items) { const a = it.a; if (a.owner !== id || a.rider) continue; const d = Math.hypot(a.x - b.x, a.z - b.z); if (d < bd && Math.abs(a.y - b.y) < 3.5 && b.stun <= 0) { bd = d; near = a; } }
    this.near = near;
    const bc = document.body.classList;
    if (!!near !== bc.contains('near-car')) bc.toggle('near-car', !!near);
    if (!!this.mount !== bc.contains('riding')) bc.toggle('riding', !!this.mount);
  }

  tagKey(a) { return a.owner ? (a.owner === this.me() ? 'mine' : 'o' + a.owner) : 'w' + a.hp; }
  updateTag(it, K) {
    const a = it.a, key = this.tagKey(a);
    if (key !== it.tagKey) {
      if (it.tag) { it.o.root.remove(it.tag); it.tag.material.map.dispose(); it.tag.material.dispose(); }
      const mine = a.owner === this.me();
      const txt = a.owner ? (mine ? '♥ MY ' + K.name : (this.names.get(a.owner) || 'Pet') + "'s " + K.name) : `${K.name}  ${a.hp}/${K.hp}`;
      it.tag = makeNameTag(txt, a.owner ? (mine ? '#4ade80' : '#7cc7ff') : '#ff6b3d'); it.tag.position.set(0, TAG_Y[a.kind], 0); it.o.root.add(it.tag); it.tagKey = key;
    }
    this.r.tagScale(it.tag, it.o.root.position, 1.15);
  }
  updateRopes(it) {
    const a = it.a, show = a.kind === 'dino' && !a.owner, o = it.o;
    o.head.getWorldPosition(this._v || (this._v = new THREE.Vector3()));
    const p = this._v;
    it.ropes.forEach((m, i) => {
      m.visible = show; if (!show) return;
      const s = STAKES[i], sx = HILL.sx + s[0], sz = HILL.sz + s[1], sy = HILL.summitY + 2.3;
      const dx = p.x - sx, dy = p.y - 0.2 - sy, dz = p.z - sz, len = Math.hypot(dx, dy, dz) || 1;
      m.position.set(sx + dx / 2, sy + dy / 2 - 0.15 * Math.sin(len * 0.5), sz + dz / 2); m.scale.set(1, len, 1);
      m.quaternion.setFromUnitVectors(UP, new THREE.Vector3(dx / len, dy / len, dz / len));
    });
  }

  // ---------------------------------------------------------------- bat -> hit / tame
  batHit(b) {
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw), id = this.me(); let any = false;
    if (this.mount) return false;
    for (const it of this.items) {
      const a = it.a, K = KINDS[a.kind]; if (a.owner || a.rider || a.st === ST.HIDDEN) continue;
      const dx = a.x - b.x, dz = a.z - b.z, d = Math.hypot(dx, dz);
      if (d > K.r + 2.7 || Math.abs(a.y - b.y) > 3.5 || d < 1e-3) continue;
      if ((dx * fx + dz * fz) / d < -0.15) continue;
      any = true;
      if (this.multi) this.r.sendNet({ t: 'ahit', id: a.id });
      else this.handle(hitAnimal(a, id, b.x, b.z));
      A.sfx.bonk(); this.r.particles.emit(a.x, a.y + K.seat * 0.7, a.z, 20, { color: '#ffd23f', speed: 6, up: 3, life: 0.5, size: 0.3 });
    }
    return any;
  }

  // events from the local brain (single) or from the server ('aev')
  handle(evs) {
    for (const e of evs) {
      const a = this.list[e.id], K = a && KINDS[a.kind]; if (!a) continue;
      if (e.k === 'hit') { const it = this.items[e.id]; this.r.toast(`${K.name}  ${Math.max(0, e.hp)} hit${e.hp === 1 ? '' : 's'} left!`); if (it) it.tagKey = ''; A.sfx.roar(K.big); }
      else if (e.k === 'tame') {
        const mine = e.pid === this.me(); this.items[e.id].tagKey = '';
        A.sfx.tame(); const it = this.items[e.id];
        this.r.particles.emit(a.x, a.y + K.seat, a.z, 36, { color: '#ff5fa8', speed: 5, up: 5, life: 1.1, size: 0.5 });
        this.r.particles.emit(a.x, a.y + K.seat, a.z, 20, { color: '#ffd23f', speed: 6, up: 6, life: 0.9, size: 0.35 });
        if (a.kind === 'dino') this.r.toast(mine ? '🦖 DINOSAUR FREED! It is your pet - press RIDE!' : `${this.names.get(e.pid) || 'Someone'} freed the DINOSAUR!`);
        else this.r.toast(mine ? `${K.name} is now YOUR PET!  ${IS_TOUCH_HINT()}` : `${this.names.get(e.pid) || 'Someone'} tamed the ${K.name}!`);
        void it;
      } else if (e.k === 'bite') {
        if (e.pid === this.me()) this.r.onAnimalBite(e);
        A.sfx.roar(KINDS[a.kind].big);
      }
    }
  }
  // ---- multiplayer messages
  onNet(m) { // packed state
    for (const p of m.a) {
      const a = this.list[p[0]]; if (!a) continue;
      const prevOwner = a.owner;
      a.x = p[1]; a.y = p[2]; a.z = p[3]; a.yaw = p[4]; a.st = p[5]; a.owner = p[6]; a.rider = p[7]; a.hp = p[8];
      if (prevOwner !== a.owner || this.items[a.id].tagKey === '' ) this.items[a.id].tagKey = '';
      else if (this.tagKey(a) !== this.items[a.id].tagKey) this.items[a.id].tagKey = '';
    }
  }
  onEvent(m) { this.handle([m]); }
  setNames(players) { for (const p of players) this.names.set(p.id, p.name); }

  // ---------------------------------------------------------------- riding
  speedK() { return this.mount ? KINDS[this.mount.kind].ride : 1; }
  flagBits() { return this.mount ? 8192 | (this.mount.id << 14) : 0; }
  seatLocal(g) { if (this.mount) { g.position.y += KINDS[this.mount.kind].seat; g.scale.setScalar(0.9); } }
  camLift() { return this.mount ? KINDS[this.mount.kind].seat : 0; }
  toggleMount() {
    const r = this.r, b = r.me.body, id = this.me();
    if (r.over || r.levelTime < 0 || r.menuOpen) return;
    if (this.mount) return this.dismount(false);
    const a = this.near; if (!a) { r.toast('Beat an animal with the BAT to tame it first!'); return; }
    this.mount = a; a.rider = id; this.mountT = 1.5;
    b.x = a.x; b.z = a.z; b.y = Math.max(b.y, a.y); b.vx = b.vz = 0; b.vy = 0;
    if (this.multi) r.sendNet({ t: 'aride', id: a.id, on: 1 });
    A.sfx.pickup(); r.toast(`Riding the ${KINDS[a.kind].name}!  ` + (('ontouchstart' in window) ? 'tap RIDE again to get off' : 'C to get off • SPACE to jump'));
  }
  dismount(forced) {
    const r = this.r, b = r.me.body, a = this.mount; if (!a) return;
    this.mount = null; a.rider = 0;
    if (this.multi && !forced) r.sendNet({ t: 'aride', id: a.id, on: 0 });
    b.x += Math.cos(b.yaw) * 2.4; b.z -= Math.sin(b.yaw) * 2.4; b.vy = 4; b.grounded = false; b.hitCd = 0.3;
    r.me.model.group.scale.setScalar(1);
    A.sfx.pickup();
  }
  dispose() {
    for (const it of this.items) { this.r.scene.remove(it.o.root); for (const m of it.ropes) this.r.scene.remove(m); }
    const bc = document.body.classList; bc.remove('riding'); bc.remove('near-car');
  }
}
const IS_TOUCH_HINT = () => (('ontouchstart' in window) ? 'Tap RIDE to hop on!' : 'Press C near it to RIDE!');
