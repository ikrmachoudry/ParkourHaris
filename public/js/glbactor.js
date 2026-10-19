// GlbActor: plays EVERY move the game already has (real mocap walk/run, punch, kick, jump, crouch, aim with the pistol, fall, sit in a car, ride a bike...)
// on ANY humanoid skinned GLB (MakeHuman export, Meshy, Mixamo ...).  No per-character animation files are needed.
//
// How: an invisible "driver" skeleton (the procedural HeroActor) is posed exactly like before; each frame we copy its bone directions onto the GLB skeleton.
//   target_world_rotation(bone) = G(driver bone) * Q(bone) * Rrest(bone)      Q = shortest rotation taking the target's rest bone direction onto the driver's rest direction
// While the GLB is still loading (or if it fails) the procedural body is shown, so the game never breaks.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { HeroActor } from './actor.js';

const cache = new Map();
export function loadGlb(url) {
  if (!cache.has(url)) cache.set(url, new Promise((res, rej) => new GLTFLoader().load(url, res, undefined, rej)));
  return cache.get(url);
}

// ---- baked Mixamo clips (tools/mixamo_bake.mjs): optional, any pose without a clip keeps the procedural / mocap driver ----
let CLIPS = null, clipsP = null;
const loadClips = () => clipsP || (clipsP = fetch('anim/clips.json').then((r) => (r.ok ? r.json() : null)).then((j) => { CLIPS = j; return j; }, () => null));
// which clip plays which pose; v0 = the speed (m/s) the clip was authored at (so feet do not slide); loop = cyclic
const CLIP_FOR = { walk: { c: 'walk', v0: 1.45 }, run: { c: 'run', v0: 4.4 }, punch: { c: 'punch', prog: [9, 47] }, jump: { c: 'jump', air: 1 },
  pistolIdle: { c: 'pistolIdle', lower: 0.55 }, pistolAim: { c: 'pistolIdle', yaw: 0.045 }, pistolWalk: { c: 'pistolWalk', v0: 1.3, lower: 0.55 }, rifleIdle: { c: 'rifleIdle' }, rifleWalk: { c: 'rifleWalk', v0: 1.4 }, rifleAim: { c: 'rifleAim' }, batswing: { c: 'melee', prog: [6, 40] } };   // batswing: the first swing of Mixamo's melee combo (wind-up 6-18, strike 19-35); the game hits at progress 0.65 = frame 29   // lower: arms pitched down (Mixamo's pistol clips hold the gun at eye level)   // prog: one-shot clip driven by the game's own 0..0.95 attack progress (frames a..b)
const NEED_ = ['hips', 'spine', 'chest', 'neck', 'head', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R', 'upperleg.L', 'lowerleg.L', 'foot.L', 'upperleg.R', 'lowerleg.R', 'foot.R'];

// ---- which GLB bone plays which driver bone ----
const norm = (n) => String(n).replace(/^.*[:|]/, '').replace(/^mixamorig/i, '');
function sideOf(n) {
  const s = norm(n);
  if (/^left|left$|[._ -]l$|^l[._ -]|_l_|\.l\./i.test(s)) return 'L';
  if (/^right|right$|[._ -]r$|^r[._ -]|_r_|\.r\./i.test(s)) return 'R';
  return null;
}
const core = (n) => norm(n).replace(/left|right/ig, '').replace(/[._ -](l|r)$/i, '').replace(/^(l|r)[._ -]/i, '').replace(/[^a-z0-9]/ig, '').toLowerCase();
export function mapBones(names) {
  const out = {}; const L = (k, n) => { if (!out[k]) out[k] = n; };
  const spines = [];
  for (const n of names) {
    const c = core(n), sd = sideOf(n);
    if (/^(hips|pelvis|root0?|hip)$/.test(c) && !sd) L('hips', n);
    else if (/^spine\d*$/.test(c) && !sd) spines.push([parseInt(c.replace(/\D/g, '') || '0', 10), n]);
    else if (c === 'chest' || c === 'upperchest') L('chest', n);
    else if (/^neck\d*$/.test(c) && !sd) L('neck', n);
    else if (c === 'head' && !sd) L('head', n);
    else if (sd) {
      if (/^(upperarm|arm|uparm)$/.test(c)) L('upperarm.' + sd, n);
      else if (/^(forearm|lowerarm)$/.test(c)) L('forearm.' + sd, n);
      else if (c === 'hand') L('hand.' + sd, n);
      else if (/^(upleg|upperleg|thigh|upleg1)$/.test(c)) L('upperleg.' + sd, n);
      else if (/^(leg|lowerleg|calf|shin)$/.test(c)) L('lowerleg.' + sd, n);
      else if (c === 'foot') L('foot.' + sd, n);
    }
  }
  spines.sort((a, b) => a[0] - b[0]);
  if (spines.length) { L('spine', spines[0][1]); if (!out.chest) L('chest', spines[spines.length - 1][1]); }
  if (out.chest === out.spine) delete out.chest;
  return out;
}
const NEED = ['hips', 'spine', 'chest', 'neck', 'head', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R', 'upperleg.L', 'lowerleg.L', 'foot.L', 'upperleg.R', 'lowerleg.R', 'foot.R'];

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _m = new THREE.Matrix4();

export class GlbActor extends HeroActor {
  // url: GLB path.  opts: { look, height, map (override bone map), flip (180 deg if the model faces -z) }
  constructor(id, url, opts = {}) {
    super(id, opts.look);
    this.opts = opts; this.ready = false; this.failed = false; this.shell = null;
    Promise.all([loadGlb(url), loadClips()]).then(([g]) => this.attach(g), (e) => { this.failed = true; console.warn('GLB failed', url, e && e.message); });
  }
  attach(gltf) {
    if (this.disposed) return;
    const model = skClone(gltf.scene);
    const bonesByName = {}; model.traverse((o) => { if (o.isBone) bonesByName[o.name] = o; });
    const map = this.opts.map || mapBones(Object.keys(bonesByName));
    const miss = NEED.filter((k) => !map[k]);
    if (miss.length) { this.failed = true; console.warn('GLB rig is missing bones', miss.join(',')); return; }
    const shell = new THREE.Group(); shell.add(model);
    if (this.opts.flip) model.rotation.y = Math.PI;
    // normalise size: feet on the floor, standing height = 1.78 m
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model, true);
    const h = box.max.y - box.min.y, s = (this.opts.height || 1.78) / h;
    shell.scale.setScalar(s); shell.position.y = -box.min.y * s;
    this.group.add(shell); shell.updateMatrixWorld(true);
    // rest data
    const T = {}; // driver name -> { bone, Q, Rr, parent }
    // driver rest positions (sum of local rest offsets up the chain) and GLB positions in the shell's own frame, so nothing depends on where the actor currently stands
    const chb = this.ch.bones, chr = this.ch.rest;
    const dpos = (k) => { const p = new THREE.Vector3(); for (let b = chb[k]; b && b.isBone; b = b.parent) p.add(chr[b.name]); return p; };
    const dd = (a, b) => dpos(b).sub(dpos(a));
    const shellQinv = shell.getWorldQuaternion(new THREE.Quaternion()).invert();
    const wpos = (o) => shell.worldToLocal(o.getWorldPosition(new THREE.Vector3()));   // model units, shell frame
    const wq = (o) => o.getWorldQuaternion(new THREE.Quaternion()).premultiply(shellQinv);
    const wp = (k) => wpos(bonesByName[map[k]]);
    const kids = (bone, re) => bone.children.filter((c) => c.isBone && re.test(norm(c.name).toLowerCase()));
    for (const k of NEED) {
      const bone = bonesByName[map[k]]; const sd = k.split('.')[1] || '';
      let dNew, dMy;
      const p0 = wp(k);
      const dirTo = (key) => wp(key).sub(p0);
      if (k === 'hips') { dNew = dirTo('spine'); dMy = dd('hips', 'spine'); }
      else if (k === 'spine') { dNew = dirTo('chest'); dMy = dd('spine', 'chest'); }
      else if (k === 'chest') { dNew = dirTo('neck'); dMy = dd('chest', 'neck'); }
      else if (k === 'neck') { dNew = dirTo('head'); dMy = dd('neck', 'head'); }
      else if (k === 'head') { const top = kids(bone, /headtop|top/)[0]; dNew = top ? wpos(top).sub(p0) : new THREE.Vector3(0, 1, 0); dMy = new THREE.Vector3(0, 1, 0); }
      else if (k.startsWith('upperarm')) { dNew = dirTo('forearm.' + sd); dMy = dd(k, 'forearm.' + sd); }
      else if (k.startsWith('forearm')) { dNew = dirTo('hand.' + sd); dMy = dd(k, 'hand.' + sd); }
      else if (k.startsWith('hand')) {
        const mid = bone.children.filter((c) => c.isBone && /middle|mid/i.test(c.name))[0] || bone.children.filter((c) => c.isBone)[0];
        dNew = mid ? wpos(mid).sub(p0) : dirTo('forearm.' + sd).multiplyScalar(-1); dMy = dd(k, 'fing.' + sd);
      }
      else if (k.startsWith('upperleg')) { dNew = dirTo('lowerleg.' + sd); dMy = dd(k, 'lowerleg.' + sd); }
      else if (k.startsWith('lowerleg')) { dNew = dirTo('foot.' + sd); dMy = dd(k, 'foot.' + sd); }
      else { dNew = new THREE.Vector3(0, 0, 1); dMy = new THREE.Vector3(0, 0, 1); }   // foot: pose deltas only (keeps the model's own toe pitch)
      if (this.opts.flip) { /* model faces -z: directions in world are already handled by the rotated model */ }
      const dN = dNew.clone().normalize();
      T[k] = { bone, Q: new THREE.Quaternion().setFromUnitVectors(dNew.normalize(), dMy.normalize()), Rr: wq(bone), restLocal: bone.quaternion.clone(), dN };
    }
    // Mixamo clip retarget: rest rotation from the target's rest bone directions to Mixamo's T-pose directions
    let Qm = null, mxHipsY = 1;
    if (CLIPS && CLIPS.restPos) {
      const P = (k) => new THREE.Vector3(...CLIPS.restPos[k]); const dm = (a, b) => P(b).sub(P(a)).normalize();
      const DM = { hips: dm('hips', 'spine'), spine: dm('spine', 'chest'), chest: dm('chest', 'neck'), neck: dm('neck', 'head'), head: new THREE.Vector3(0, 1, 0) };
      for (const s of ['L', 'R']) Object.assign(DM, { ['upperarm.' + s]: dm('upperarm.' + s, 'forearm.' + s), ['forearm.' + s]: dm('forearm.' + s, 'hand.' + s), ['hand.' + s]: dm('forearm.' + s, 'hand.' + s), ['upperleg.' + s]: dm('upperleg.' + s, 'lowerleg.' + s), ['lowerleg.' + s]: dm('lowerleg.' + s, 'foot.' + s), ['foot.' + s]: new THREE.Vector3(0, 0, 1) });
      Qm = {}; for (const k of NEED) Qm[k] = new THREE.Quaternion().setFromUnitVectors(T[k].dN, DM[k]);
      { const hr = (typeof window !== 'undefined' && window.__hr != null) ? window.__hr : (this.opts.handRoll == null ? 0.8 : this.opts.handRoll); if (hr) for (const sd of ['L', 'R']) { const k = 'hand.' + sd; Qm[k].premultiply(new THREE.Quaternion().setFromAxisAngle(DM[k], sd === 'L' ? hr : -hr)); } }
      mxHipsY = CLIPS.hipsY;
    }
    // everything else in the skeleton keeps its rest rotation (fingers, twist bones, clavicles ride along)
    const all = []; model.traverse((o) => { if (o.isBone) all.push(o); });
    const rest = new Map(all.map((b) => [b, b.quaternion.clone()]));
    const byBone = new Map(NEED.map((k) => [T[k].bone, k]));
    const hips = T.hips.bone; const hipsRestLocal = hips.position.clone();
    const hipsParentS = hips.parent ? hips.parent.getWorldScale(new THREE.Vector3()).x : 1;
    const hipsParentQ = hips.parent ? wq(hips.parent) : new THREE.Quaternion();
    const hipsWorldY = wpos(hips).y * s;   // height of the hips above the floor, metres
    // pistol: lives on the driver's right hand; move it onto the GLB right hand with the matching constant offset
    const gun = this.ch.gun, hr = T['hand.R'];
    const rel = hr.Rr.clone().invert().multiply(hr.Q.clone().invert());   // driver-hand space -> target hand-bone space
    const S = hr.bone.getWorldScale(new THREE.Vector3()).x || 1;
    const gp = gun.position.clone().applyQuaternion(rel).divideScalar(S);
    const rootQ = new Map(); for (const bone of all) if (!bone.parent || !bone.parent.isBone) rootQ.set(bone, bone.parent ? wq(bone.parent) : new THREE.Quaternion());
    this.rt = { Qm, mxHipsY, rootQ, map, T, rest, byBone, all, root: model, hips, hipsRestLocal, hipsParentS, hipsParentQ, hipsWorldY, scale: s };
    if (gun.parent) gun.parent.remove(gun);
    hr.bone.add(gun); gun.quaternion.copy(rel); gun.position.copy(gp); gun.scale.setScalar(1 / S);
    model.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
    this.shell = shell; this.ch.mesh.visible = false; this.ready = true;
    this.height = this.opts.height || 1.78;
    this.tris = 0; model.traverse((o) => { if (o.isMesh && o.geometry.index) this.tris += o.geometry.index.count / 3; });
  }
  update(dt, st) {
    super.update(dt, st);
    if (!this.ready) return;
    const rt = this.rt, b = this.ch.bones;
    this.shell.rotation.x = this.ch.group.rotation.x;   // knocked flat
    // driver world rotations (rest = identity)
    const G = rt.G || (rt.G = {}); const PAR = rt.PAR || (rt.PAR = { spine: 'hips', chest: 'spine', neck: 'chest', head: 'neck', 'upperarm.L': 'chest', 'forearm.L': 'upperarm.L', 'hand.L': 'forearm.L', 'upperarm.R': 'chest', 'forearm.R': 'upperarm.R', 'hand.R': 'forearm.R', 'upperleg.L': 'hips', 'lowerleg.L': 'upperleg.L', 'foot.L': 'lowerleg.L', 'upperleg.R': 'hips', 'lowerleg.R': 'upperleg.R', 'foot.R': 'lowerleg.R' });
    for (const k of NEED) { const q = G[k] || (G[k] = new THREE.Quaternion()); q.copy(b[k].quaternion); if (PAR[k]) q.premultiply(G[PAR[k]]); }
    // running leans the whole upper body forward a little (the mocap is upright; a real sprinter leans ~10 degrees), walking just slightly
    { const lean = this.pose === 'run' ? 0.2 : this.pose === 'walk' || this.pose === 'crouchwalk' ? 0.05 : 0; this.lean = (this.lean || 0) + (lean - (this.lean || 0)) * Math.min(1, dt * 8);
      if (this.lean > 0.002) { _q.setFromAxisAngle(_v.set(1, 0, 0), this.lean); for (const n of ['spine', 'chest', 'neck', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) G[n].premultiply(_q); _q.setFromAxisAngle(_v.set(1, 0, 0), this.lean * 0.4); G.head.premultiply(_q); } }
    // walking / running: flexed elbows (forearms lifted forward, arms swing beside the body) - other poses (aim, punch...) stay untouched
    if (this.pose === 'run' || this.pose === 'walk' || this.pose === 'crouchwalk') { const fl = this.pose === 'run' ? 0.5 : 0.3; _q.setFromAxisAngle(_v.set(1, 0, 0), -fl); for (const sd of ['L', 'R']) { G['forearm.' + sd].premultiply(_q); G['hand.' + sd].premultiply(_q); } }   // more flexed elbows: forearm lifts forward, like a jogger
    // the wider MakeHuman shoulders need the hanging arms a bit further out (otherwise hands cross the belly): swing sideways of the body like a real person
    for (const sd of ['L', 'R']) {
      const up = G['upperarm.' + sd]; _v2.set(0, -1, 0).applyQuaternion(up);
      const f = Math.max(0, -_v2.y) * (this.opts.armOut == null ? 0.16 : this.opts.armOut);
      _q.setFromAxisAngle(_v.set(0, 0, 1), sd === 'L' ? f : -f);
      for (const n of ['upperarm.', 'forearm.', 'hand.']) G[n + sd].premultiply(_q);
      // forearm pointing forward (running: elbows bent ~90deg): keep it beside the body, parallel to the walking direction, never across the belly
      _v2.set(0, -1, 0).applyQuaternion(G['forearm.' + sd]);
      const yaw = Math.max(0, _v2.z) * (this.opts.foreOut == null ? 0.75 : this.opts.foreOut);
      _q.setFromAxisAngle(_v.set(0, 1, 0), sd === 'L' ? yaw : -yaw);
      G['forearm.' + sd].premultiply(_q); G['hand.' + sd].premultiply(_q);
    }
    { const p = this.pose, tgt = (p === 'run' || p === 'punch' || p === 'kick' || p === 'crouchwalk' || p === 'batswing' || /^(pistol|rifle)/.test(p)) ? 1 : p === 'walk' ? 0.85 : p === 'aim' || p === 'aimLow' ? 0.5 : 0.3;
      this.fist = (this.fist == null ? tgt : this.fist) + (tgt - (this.fist == null ? tgt : this.fist)) * Math.min(1, dt * 12); }
    // ---- choose the motion source: a baked Mixamo clip when there is one for this pose, otherwise the procedural / mocap driver ----
    const Wout = rt.Wout || (rt.Wout = {}); const Wd = rt.Wd || (rt.Wd = {}); const hk = rt.hipsWorldY / this.ch.rest.hips.y;
    for (const n of NEED) { Wd[n] = Wd[n] || new THREE.Quaternion(); Wd[n].copy(G[n]).multiply(rt.T[n].Q).multiply(rt.T[n].Rr); }
    const dOff = (rt.dOff = rt.dOff || new THREE.Vector3()).set(b.hips.position.x - this.ch.rest.hips.x, b.hips.position.y - this.ch.rest.hips.y, b.hips.position.z - this.ch.rest.hips.z).multiplyScalar(hk);
    let src = Wd, srcKey = 'drv', off = dOff;
    const ce = CLIP_FOR[this.pose], clip = ce && CLIPS && rt.Qm && CLIPS.clips[ce.c];
    if (clip) {
      const sp = st.speed || 0; let fi;
      if (ce.air) { const t = Math.max(-1, Math.min(1, (st.vy || 0) / 7)); fi = Math.max(0, Math.min(clip.n - 1.001, t > 0 ? 6 - t * 2.5 : 6 - t * 1.0)); }   // only the first leg lift of the clip (frames 3-7): the clip's second leg swing (8-19) read as a double jump   // jump: rising -> apex -> falling, driven by the real vertical speed
      else if (ce.prog) { fi = Math.max(0, Math.min(clip.n - 1.001, ce.prog[0] + Math.min(1, (st.punch || 0) / 0.95) * (ce.prog[1] - ce.prog[0]))); }
      else { this.ct = (this.ct || 0) + dt * (ce.v0 ? Math.max(0.35, Math.min(2.4, sp / ce.v0)) : 1); fi = (this.ct / clip.dur) % 1 * clip.n; }
      const i0 = Math.floor(fi) % clip.n, i1 = ce.prog || ce.air ? Math.min(i0 + 1, clip.n - 1) : (i0 + 1) % clip.n, al = fi - Math.floor(fi);
      const Wm = rt.Wm || (rt.Wm = {}); const sc = hk * 0.01 * (rt.mxHipsY / 100) ** 0;
      NEED.forEach((n, j) => {
        _q.fromArray(clip.G, (i0 * 17 + j) * 4); _q2.fromArray(clip.G, (i1 * 17 + j) * 4); _q.slerp(_q2, al);
        Wm[n] = Wm[n] || new THREE.Quaternion(); Wm[n].copy(_q).multiply(rt.Qm[n]).multiply(rt.T[n].Rr);
      });
      if (ce.lower) { _q.setFromAxisAngle(_v.set(1, 0, 0), ce.lower); for (const n of ['upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) Wm[n].premultiply(_q); }
      if (ce.yaw) { _q.setFromAxisAngle(_v.set(0, 1, 0), ce.yaw); for (const n of ['upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) Wm[n].premultiply(_q); }
      if (ce.wrist) { _q.setFromAxisAngle(_v.set(1, 0, 0), ce.wrist); Wm['hand.R'].premultiply(_q); }
      const mo = (rt.mOff = rt.mOff || new THREE.Vector3()); _v.fromArray(clip.hips, i0 * 3); mo.fromArray(clip.hips, i1 * 3); mo.lerp(_v, 1 - al);   // (lerp from i1 towards i0 by 1-al)
      mo.multiplyScalar(rt.hipsWorldY / (rt.mxHipsY * 1.0)); if (ce.air) mo.y *= 0.2;   // the game body already rises and falls
      src = Wm; srcKey = ce.c; off = mo;
    } else this.ct = 0;
    if (this.srcKey !== srcKey) { this.srcKey = srcKey; this.mixT = 0; rt.fromW = rt.fromW || {}; for (const n of NEED) rt.fromW[n] = (rt.fromW[n] || new THREE.Quaternion()).copy(Wout[n] || src[n]); rt.fromOff = (rt.fromOff || new THREE.Vector3()).copy(rt.curOff || off); }
    this.mixT = (this.mixT == null ? 1 : this.mixT) + dt; const mk = Math.min(1, this.mixT / 0.18), ms = mk * mk * (3 - 2 * mk);
    for (const n of NEED) { Wout[n] = Wout[n] || new THREE.Quaternion(); if (ms < 1 && rt.fromW) Wout[n].copy(rt.fromW[n]).slerp(src[n], ms); else Wout[n].copy(src[n]); }
    rt.curOff = (rt.curOff || new THREE.Vector3()); if (ms < 1 && rt.fromOff) rt.curOff.copy(rt.fromOff).lerp(off, ms); else rt.curOff.copy(off);
    // walk the GLB skeleton parents-first
    const walk = (bone, pw) => {
      let w;
      const k = rt.byBone.get(bone);
      if (k) { const t = rt.T[k]; w = _q2.copy(rt.Wout[k]); const local = pw.clone().invert().multiply(w); bone.quaternion.copy(local); w = w.clone(); }
      else if (bone.userData.curl) {   // finger / thumb joints: curl into a fist (world axis across the palm, converted into the parent's frame)
        const cu = bone.userData.curl, ang = cu.a * this.fist;
        _v.copy(cu.axis).applyQuaternion(_q.copy(pw).invert()).normalize();
        bone.quaternion.setFromAxisAngle(_v, ang).multiply(rt.rest.get(bone)); w = pw.clone().multiply(bone.quaternion);
      }
      else { bone.quaternion.copy(rt.rest.get(bone)); w = pw.clone().multiply(bone.quaternion); }
      for (const c of bone.children) if (c.isBone) walk(c, w);
    };
    // root bones: those whose parent is not a bone
    for (const bone of rt.all) if (!bone.parent || !bone.parent.isBone) {
      walk(bone, rt.rootQ.get(bone));
    }
    // hips: bounce / lean / sitting height (driver offset or Mixamo hips travel) scaled to this body, in the hips parent's local space
    _v.copy(rt.curOff).applyQuaternion(_q.copy(rt.hipsParentQ).invert()).divideScalar(rt.hipsParentS);
    rt.hips.position.copy(rt.hipsRestLocal).add(_v);
  }
  dispose() {
    this.disposed = true;
    this.group.traverse((o) => { if (o.isMesh && !(this.shell && this.shell.getObjectById(o.id))) { o.geometry.dispose(); const m = o.material; (Array.isArray(m) ? m : [m]).forEach((mm) => mm.dispose()); } });
  }
}

// the four player characters (ids 0..3) are MakeHuman bodies (tools/mh_build.py); the procedural human shows while loading and is the fallback if a file is missing
export const HERO_GLB = ['models/hero0.glb', 'models/hero1.glb', 'models/hero2.glb', 'models/hero3.glb'];
export const makeHero = (id, look) => HERO_GLB[id | 0] ? new GlbActor(id, HERO_GLB[id | 0], { look }) : new HeroActor(id, look);
