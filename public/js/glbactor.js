// GlbActor: plays EVERY move the game already has (real mocap walk/run, punch, kick, jump, crouch, aim with the pistol, fall, sit in a car, ride a bike...)
// on ANY humanoid skinned GLB (MakeHuman export, Meshy, Mixamo ...).  No per-character animation files are needed.
//
// How: an invisible "driver" skeleton (the procedural HeroActor) is posed exactly like before; each frame we copy its bone directions onto the GLB skeleton.
//   target_world_rotation(bone) = G(driver bone) * Q(bone) * Rrest(bone)      Q = shortest rotation taking the target's rest bone direction onto the driver's rest direction
// While the GLB is still loading (or if it fails) the procedural body is shown, so the game never breaks.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { track } from './loading.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { HeroActor } from './actor.js';
// each of the four players is a little different in height (no facial hair: it looked wrong on these heads)
const FACIAL = [{ height: 1.78 }, { height: 1.81 }, { height: 1.76 }, { height: 1.79 }];

import { av } from './assetver.js';
const cache = new Map();
export function loadGlb(url) {
  if (!cache.has(url)) cache.set(url, track(new Promise((res, rej) => new GLTFLoader().load(av(url), res, undefined, rej)), 'CHARACTERS'));
  return cache.get(url);
}

// ---- baked Mixamo clips (tools/mixamo_bake.mjs): optional, any pose without a clip keeps the procedural / mocap driver ----
export const preloadActors = (urls) => Promise.all([...urls.map((u) => loadGlb(u)), loadClips()]);   // v220
let CLIPS = null, clipsP = null;
const loadClips = () => clipsP || (clipsP = fetch(av('anim/clips.json')).then((r) => (r.ok ? r.json() : null)).then((j) => { CLIPS = j; return j; }, () => null));
// which clip plays which pose; v0 = the speed (m/s) the clip was authored at (so feet do not slide); loop = cyclic
const CLIP_FOR = { revive: { c: 'cpr' }, vault: { c: 'vaultJ', zp: 1 }, sit: { c: 'driveY' }, honk: { c: 'honk' }, walkL: { c: 'walkL', v0: 1.4 }, walkR: { c: 'walkR', v0: 1.4 }, walkBack: { c: 'walkBack', v0: 1.3 }, crawl: { c: 'crawlFwd', v0: 1.2 }, crawlBack: { c: 'crawlBack', v0: 1.2 }, proneIdle: { c: 'proneIdle' }, reloadR: { c: 'reload', rel: 1 }, rifleBack: { c: 'runBack', v0: 2.6, up: 'rifleAim', lower: 0.2 }, rifleStrafeL: { c: 'strafeL', v0: 1.6, up: 'rifleAim', lower: 0.2 }, rifleStrafeR: { c: 'strafeR', v0: 1.6, up: 'rifleAim', lower: 0.2 }, pistolBack: { c: 'pistolBack', v0: 1.4, lower: 0.55 }, pistolStrafeL: { c: 'pistolStrafe', v0: 1.6, lower: 0.55 }, pistolStrafeR: { c: 'pistolStrafe', v0: 1.6, lower: 0.55 }, runBack: { c: 'runBack', v0: 4.0, up: 'run', live: 1, uv: 4.4 }, runL: { c: 'runL', v0: 4.2, up: 'run', live: 1, uv: 4.4 }, runR: { c: 'runR', v0: 4.2, up: 'run', live: 1, uv: 4.4 }, dieF: { c: 'deathFront', zp: true }, dieB: { c: 'deathBack', zp: true }, dieR: { c: 'deathRight', zp: true }, dieL: { c: 'deathLeft', zp: true }, skydive: { c: 'fallIdle' }, chute: { c: 'fallIdle' }, rifleCrouchIdle: { c: 'crouchAimIdle' }, rifleCrouchAim: { c: 'crouchAimIdle' }, rifleCrouchWalk: { c: 'crouchFwd', v0: 1.3, up: 'rifleAim', lower: 0.2 }, zWalk: { c: 'zWalk', v0: 0.9 }, zCrawl: { c: 'zCrawl', v0: 0.5 }, zDeath: { c: 'zDeath', zp: 1 }, dReact: { c: 'dReact', zp: 1 }, dFly: { c: 'dFly', zp: 1 }, swim: { c: 'swim', v0: 1.4 }, walk: { c: 'walk', v0: 1.45 }, run: { c: 'run', v0: 4.4 }, punch: { c: 'punch', prog: [9, 47] }, jump: { c: 'jump', air: 1, legBack: 0.5 },
  crouch: { c: 'crouchIdle' }, reloadWalk: { c: 'walk', v0: 1.45, up: 'reload', urel: 1 }, reloadRun: { c: 'run', v0: 4.4, up: 'reload', urel: 1 }, rifleRunShoot: { c: 'run', v0: 4.4, up: 'rifleAim' }, pistolRunShoot: { c: 'run', v0: 4.4, up: 'pistolIdle' }, rifleWalkShoot: { c: 'walk', v0: 1.45, up: 'rifleAim' }, pistolWalkShoot: { c: 'pistolWalk', v0: 1.3 },
  pistolIdle: { c: 'pistolIdle', lower: 0.55 }, pistolAim: { c: 'pistolIdle', yaw: 0.045 }, pistolWalk: { c: 'pistolWalk', v0: 1.3, lower: 0.55 }, rifleIdle: { c: 'rifleAim', lower: 0.2 }, rifleWalk: { c: 'walk', v0: 1.45, up: 'rifleAim', lower: 0.2 }, rifleAim: { c: 'rifleAim' }, batswing: { c: 'melee', prog: [6, 40] }, nadeThrow: { c: 'nadeThrow', nade: 1 }, nadeToss: { c: 'nadeToss', nade: 1 }, nadeStand: { c: 'nadeStand', nade: 1 } };   // batswing: the first swing of Mixamo's melee combo (wind-up 6-18, strike 19-35); the game hits at progress 0.65 = frame 29   // lower: arms pitched down (Mixamo's pistol clips hold the gun at eye level)   // prog: one-shot clip driven by the game's own 0..0.95 attack progress (frames a..b)
const FORE = { pistol: [0.05, -0.09, 0.0], revolver: [0.05, -0.1, 0.02], ak: [0, -0.06, 0.28], m4: [0, -0.06, 0.26], smg: [0, -0.08, 0.1], shotgun: [0, -0.07, 0.36], sniper: [0, -0.06, 0.48] };   // where the left hand holds each gun (gun frame: +z barrel, origin = grip)
const _ik = { pa: new THREE.Vector3(), pb: new THREE.Vector3(), pc: new THREE.Vector3(), t: new THREE.Vector3(), d: new THREE.Vector3(), ac: new THREE.Vector3(), pole: new THREE.Vector3(), pb2: new THREE.Vector3(), q: new THREE.Quaternion(), wq: new THREE.Quaternion(), pq: new THREE.Quaternion() };
const _aimD = new THREE.Vector3(), _aimT = new THREE.Vector3(), _aimQ = new THREE.Quaternion(), _aimE = new THREE.Quaternion(), _aimI = new THREE.Quaternion(), AIM_BONES = ['spine', 'chest', 'neck', 'head', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R'];
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

// ---- zombie skin: the model keeps its vertex colours; the shader adds a rib cage (stripes + bump), a sternum, and blood / bruise blotches on skin-coloured pixels
const ZOMBIE_GLSL = `
 { bool fl = diffuseColor.r > diffuseColor.b * 1.5 && diffuseColor.r > 0.2;
   if (fl) {
     float hd = vHp.y > 1.58 ? 0.45 : 1.0;
     float n1 = vn(vHp * 14.0), n2 = vn(vHp * 38.0 + 7.0), n3 = vn(vHp * 90.0 + 3.0);
     float sk = vn(vec3(vHp.x * 70.0, vHp.y * 7.0, vHp.z * 70.0) + 5.0);
     float bl = smoothstep(0.47, 0.62, n1 * 0.65 + n2 * 0.35), st = smoothstep(0.66, 0.78, n3) * 0.8 + smoothstep(0.7, 0.85, sk) * 0.9;
     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.2, 0.012, 0.016), clamp(bl * 0.85 + st * 0.5, 0.0, 1.0) * hd);
     diffuseColor.rgb *= vec3(0.93, 0.9, 0.9);
     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.16, 0.1), smoothstep(0.55, 0.64, vn(vHp * 9.0 + 11.0)) * 0.35 * hd);
     float tm = smoothstep(0.2, 0.165, abs(vHp.x)) * smoothstep(1.12, 1.16, vHp.y) * smoothstep(1.45, 1.41, vHp.y);
     float ph = (vHp.y + 0.28 * (0.17 - abs(vHp.x))) / 0.029 + 0.3 * vn(vHp * 22.0), rs = 0.5 + 0.5 * cos(6.28318 * ph);
     diffuseColor.rgb *= 1.0 - tm * (1.0 - smoothstep(0.0, 0.85, rs)) * 0.62;
     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.17, 0.02, 0.03), tm * (1.0 - rs) * 0.4);
     diffuseColor.rgb += tm * pow(rs, 3.0) * 0.12;
     float sx = smoothstep(0.014, 0.0, abs(vHp.x)) * smoothstep(1.2, 1.3, vHp.y) * smoothstep(1.43, 1.38, vHp.y);
     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.5, 0.42), sx * 0.6);
     zRib = tm * -sin(6.28318 * ph) * 0.9;
   } }`;
function zombieMat(src) {
  const m = src.clone(); m.roughness = 0.58;
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = 'varying vec3 vHp;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvHp = position;');
    sh.fragmentShader = 'varying vec3 vHp;\nfloat zRib = 0.0;\nfloat hh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }\nfloat vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(mix(mix(hh(i), hh(i + vec3(1,0,0)), f.x), mix(hh(i + vec3(0,1,0)), hh(i + vec3(1,1,0)), f.x), f.y), mix(mix(hh(i + vec3(0,0,1)), hh(i + vec3(1,0,1)), f.x), mix(hh(i + vec3(0,1,1)), hh(i + vec3(1,1,1)), f.x), f.y), f.z); }\n' + sh.fragmentShader
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + ZOMBIE_GLSL)
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n normal = normalize(normal + zRib * 0.55 * normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));');
  };
  m.customProgramCacheKey = () => 'zombie2';
  return m;
}
export class GlbActor extends HeroActor {
  // url: GLB path.  opts: { look, height, map (override bone map), flip (180 deg if the model faces -z) }
  constructor(id, url, opts = {}) {
    super(id, opts.look); this.heroId = id | 0;
    this.opts = opts; this.ready = false; this.failed = false; this.shell = null; this.ch.mesh.visible = false; this.ch.gun.visible = false;   // nothing shows until the real model is in (no stand-in body that gets swapped)
    Promise.all([loadGlb(url), loadClips()]).then(([g]) => this.attach(g), (e) => { this.failed = true; this.ch.mesh.visible = true; console.warn('GLB failed', url, e && e.message); });
  }
  attach(gltf) {
    if (this.disposed) return;
    const model = skClone(gltf.scene);
    const bonesByName = {}; model.traverse((o) => { if (o.isBone) bonesByName[o.name] = o; });
    const map = this.opts.map || mapBones(Object.keys(bonesByName));
    const miss = NEED.filter((k) => !map[k]);
    if (miss.length) { this.failed = true; this.ch.mesh.visible = true; console.warn('GLB rig is missing bones', miss.join(',')); return; }
    const shell = new THREE.Group(); shell.add(model);
    if (this.opts.flip) model.rotation.y = Math.PI;
    // normalise size: feet on the floor, standing height = 1.78 m
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model, true);
    const h = box.max.y - box.min.y, s = (this.opts.height || (this.opts.facial !== false && FACIAL[this.heroId] && !this.opts.zombie ? FACIAL[this.heroId].height : 1.78)) / h;
    shell.scale.setScalar(s); shell.position.y = -box.min.y * s;
    if (this.opts.zombie) model.traverse((o) => { if (o.isMesh) o.material = zombieMat(o.material); });
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
    if (!this.opts.zombie && this.opts.pack !== false) { try { this.addPack(T.chest.bone, wp('upperarm.R').sub(wp('upperarm.L')), shell); } catch (e) { console.warn('backpack', e); } }   // every survivor carries a backpack
    this.height = this.opts.height || 1.78;
    this.tris = 0; model.traverse((o) => { if (o.isMesh && o.geometry.index) this.tris += o.geometry.index.count / 3; });
  }
  // a backpack on the back, parented to the chest bone so it moves with every animation (one merged mesh = one draw call)
  addPack(chestBone, rightL, shell) {
    shell.updateMatrixWorld(true); const up = new THREE.Vector3(0, 1, 0), fwdW = new THREE.Vector3().crossVectors(up, rightL.setY(0).normalize()).transformDirection(shell.matrixWorld).setY(0).normalize();
    const parts = [[0.34, 0.42, 0.17, 0, 0, 0, '#4d5b3a'], [0.36, 0.1, 0.19, 0, 0.23, 0, '#3d4a2e'], [0.26, 0.15, 0.09, 0, -0.1, -0.12, '#5b6b40'], [0.07, 0.2, 0.07, -0.2, -0.04, 0, '#2f3b2a'], [0.07, 0.2, 0.07, 0.2, -0.04, 0, '#2f3b2a'], [0.05, 0.44, 0.04, -0.11, 0.0, 0.1, '#232a20'], [0.05, 0.44, 0.04, 0.11, 0.0, 0.1, '#232a20']];
    const geos = parts.map(([w, h, d, x, y, z, c]) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); const col = new THREE.Color(c), n = g.attributes.position.count, arr = new Float32Array(n * 3); for (let i = 0; i < n; i++) { arr[i * 3] = col.r; arr[i * 3 + 1] = col.g; arr[i * 3 + 2] = col.b; } g.setAttribute('color', new THREE.BufferAttribute(arr, 3)); return g.toNonIndexed(); });
    const merged = mergeGeometries(geos, false), pack = new THREE.Mesh(merged, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
    const cw = chestBone.getWorldPosition(new THREE.Vector3()); pack.position.copy(cw).addScaledVector(fwdW, -0.165); pack.position.y -= 0.11; pack.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), fwdW); pack.updateMatrixWorld(true);
    pack.castShadow = true; pack.frustumCulled = false; chestBone.attach(pack); this.pack = pack;
  }
  update(dt, st) {
    super.update(dt, st);
    if (!this.ready) { this.ch.gun.visible = false; return; }
    const rt = this.rt, b = this.ch.bones;
    if (this.shellY0 === undefined) this.shellY0 = this.shell.position.y; this.shell.position.y = this.shellY0 + (this.liftY || 0);
    this.shell.rotation.x = this.ch.group.rotation.x; this.shell.rotation.y = this.ch.group.rotation.y;   // knocked flat (and rolling)
    // driver world rotations (rest = identity)
    const G = rt.G || (rt.G = {}); const PAR = rt.PAR || (rt.PAR = { spine: 'hips', chest: 'spine', neck: 'chest', head: 'neck', 'upperarm.L': 'chest', 'forearm.L': 'upperarm.L', 'hand.L': 'forearm.L', 'upperarm.R': 'chest', 'forearm.R': 'upperarm.R', 'hand.R': 'forearm.R', 'upperleg.L': 'hips', 'lowerleg.L': 'upperleg.L', 'foot.L': 'lowerleg.L', 'upperleg.R': 'hips', 'lowerleg.R': 'upperleg.R', 'foot.R': 'lowerleg.R' });
    for (const k of NEED) { const q = G[k] || (G[k] = new THREE.Quaternion()); q.copy(b[k].quaternion); if (PAR[k]) q.premultiply(G[PAR[k]]); }
    // running leans the whole upper body forward a little (the mocap is upright; a real sprinter leans ~10 degrees), walking just slightly
    { const lean = this.pose === 'run' ? 0.2 : this.pose === 'walk' || this.pose === 'crouchwalk' ? 0.05 : 0; this.lean = (this.lean || 0) + (lean - (this.lean || 0)) * Math.min(1, dt * 8);
      if (this.lean > 0.002) { _q.setFromAxisAngle(_v.set(1, 0, 0), this.lean); for (const n of ['spine', 'chest', 'neck', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) G[n].premultiply(_q); _q.setFromAxisAngle(_v.set(1, 0, 0), this.lean * 0.4); G.head.premultiply(_q); } }
    // v224: PEEK - the upper body bends sideways at the waist (the whole body no longer tilts as a plank); head stays upright, arms/gun go with the chest
    this.peek = (this.peek || 0) + ((st.peek || 0) - (this.peek || 0)) * Math.min(1, dt * 14);
    if (Math.abs(this.peek) > 0.005) { _q.setFromAxisAngle(_v.set(0, 0, 1), this.peek * 0.5); for (const n of ['spine', 'chest', 'neck', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) G[n].premultiply(_q); _q.setFromAxisAngle(_v.set(0, 0, 1), this.peek * 0.5 * 0.35); G.head.premultiply(_q.invert()); }
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
    { const p = this.pose, tgt = (p === 'run' || p === 'punch' || p === 'kick' || p === 'batswing' || /^(pistol|rifle|nade)/.test(p)) ? 1 : p === 'walk' ? 0.85 : p === 'crouchwalk' || p === 'crouch' ? 0.4 : p === 'aim' || p === 'aimLow' ? 0.5 : p === 'flex' || p === 'thumbs' ? 1 : p === 'cheer' ? 0.6 : p === 'wave' || p === 'hi' ? 0.45 : p === 'salute' ? 0.2 : 0.3;   // v227: gestures: relaxed curled fingers (flat stiff paddles looked wrong), fists for flex
      this.fist = (this.fist == null ? tgt : this.fist) + (tgt - (this.fist == null ? tgt : this.fist)) * Math.min(1, dt * 12); }
    // ---- choose the motion source: a baked Mixamo clip when there is one for this pose, otherwise the procedural / mocap driver ----
    const Wout = rt.Wout || (rt.Wout = {}); const Wd = rt.Wd || (rt.Wd = {}); const hk = rt.hipsWorldY / this.ch.rest.hips.y;
    for (const n of NEED) { Wd[n] = Wd[n] || new THREE.Quaternion(); Wd[n].copy(G[n]).multiply(rt.T[n].Q).multiply(rt.T[n].Rr); }
    const dOff = (rt.dOff = rt.dOff || new THREE.Vector3()).set(b.hips.position.x - this.ch.rest.hips.x, b.hips.position.y - this.ch.rest.hips.y, b.hips.position.z - this.ch.rest.hips.z).multiplyScalar(hk);
    let src = Wd, srcKey = 'drv', off = dOff;
    const ce = CLIP_FOR[this.pose === 'sit' && st.honk ? 'honk' : this.pose], clip = ce && CLIPS && rt.Qm && CLIPS.clips[ce.c];
    if (clip) {
      const sp = st.speed || 0; let fi;
      if (ce.air) { const t = Math.max(-1, Math.min(1, (st.vy || 0) / 7)); fi = Math.max(0, Math.min(clip.n - 1.001, t > 0 ? 11 - t * 6 : 11 - t * 8)); }   // Haris's own Jump_1 clip: frames 5-11 = rising (knees up), 11 = apex, 11-19 = coming down; driven by the real vertical speed
      else if (ce.zp) { fi = Math.max(0, Math.min(clip.n - 1.001, (st.zp || 0) * (clip.n - 1))); }   // zombie death: 0..1 progress from the scene
      else if (ce.rel) { fi = Math.max(0, Math.min(clip.n - 1.001, (st.reload || 0) * (clip.n - 1))); }   // reloading: the clip is stretched over the weapon's reload time
      else if (ce.nade) { fi = Math.max(0, Math.min(clip.n - 1.001, (st.nade || 0) * (clip.n - 1))); }   // the grenade throw: the game's own 0..1 progress (release at clip.rel)
      else if (ce.prog) { fi = Math.max(0, Math.min(clip.n - 1.001, ce.prog[0] + Math.min(1, (st.punch || 0) / 0.95) * (ce.prog[1] - ce.prog[0]))); }
      else { this.ct = (this.ct || 0) + dt * (ce.v0 ? Math.max(0.35, Math.min(2.4, sp / ce.v0)) : 1); fi = (this.ct / clip.dur) % 1 * clip.n; }
      const i0 = Math.floor(fi) % clip.n, i1 = ce.prog || ce.air || ce.nade || ce.zp || ce.rel ? Math.min(i0 + 1, clip.n - 1) : (i0 + 1) % clip.n, al = fi - Math.floor(fi);
      const Wm = rt.Wm || (rt.Wm = {}); const sc = hk * 0.01 * (rt.mxHipsY / 100) ** 0;
      NEED.forEach((n, j) => {
        _q.fromArray(clip.G, (i0 * 17 + j) * 4); _q2.fromArray(clip.G, (i1 * 17 + j) * 4); _q.slerp(_q2, al);
        Wm[n] = Wm[n] || new THREE.Quaternion(); Wm[n].copy(_q).multiply(rt.Qm[n]).multiply(rt.T[n].Rr);
      });
      if (ce.up && CLIPS.clips[ce.up]) { const uc = CLIPS.clips[ce.up]; let u0 = 0, u1 = 0, ua = 0; if (ce.urel) { const uf = Math.max(0, Math.min(uc.n - 1.001, (st.reload || 0) * (uc.n - 1))); u0 = Math.floor(uf); u1 = Math.min(u0 + 1, uc.n - 1); ua = uf - u0; } else if (ce.live) { this.ct2 = (this.ct2 || 0) + dt * Math.max(0.35, Math.min(2.4, sp / (ce.uv || 4.4))); const uf = (this.ct2 / uc.dur) % 1 * uc.n; u0 = Math.floor(uf) % uc.n; u1 = (u0 + 1) % uc.n; ua = uf - Math.floor(uf); } NEED.forEach((n, j) => { if (/^(chest|neck|head|upperarm|forearm|hand)/.test(n)) { _q.fromArray(uc.G, (u0 * 17 + j) * 4); if (ua) { _q2.fromArray(uc.G, (u1 * 17 + j) * 4); _q.slerp(_q2, ua); } Wm[n].copy(_q).multiply(rt.Qm[n]).multiply(rt.T[n].Rr); } }); }   // upper body from a still frame of another clip (the gun held low-ready) over these legs
      if (ce.lower) { _q.setFromAxisAngle(_v.set(1, 0, 0), ce.lower); for (const n of ['upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) Wm[n].premultiply(_q); }
      if (ce.legBack) { _q.setFromAxisAngle(_v.set(1, 0, 0), ce.legBack); for (const n of ['upperleg.L', 'lowerleg.L', 'foot.L', 'upperleg.R', 'lowerleg.R', 'foot.R']) Wm[n].premultiply(_q); }   // swing both whole legs back a little: seen from behind the forward-kicked thighs looked tiny (foreshortened)
      if (ce.yaw) { _q.setFromAxisAngle(_v.set(0, 1, 0), ce.yaw); for (const n of ['upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) Wm[n].premultiply(_q); }
      if (/^(rifle|pistol)/.test(this.pose || '') && !/Crouch/.test(this.pose)) {   // the gun-holding clips lean the chest back (belly pushed out, a swayback): straighten the upper body a little (head follows half way so he still looks ahead)
        const sk = this.straight = (this.straight || 0) + (0.24 - (this.straight || 0)) * Math.min(1, dt * 6);
        _q.setFromAxisAngle(_v.set(1, 0, 0), sk); for (const n of ['spine', 'chest', 'neck', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R']) Wm[n].premultiply(_q);
        _q.setFromAxisAngle(_v.set(1, 0, 0), sk * 0.55); Wm.head.premultiply(_q);
      } else this.straight = 0;
      if (ce.wrist) { _q.setFromAxisAngle(_v.set(1, 0, 0), ce.wrist); Wm['hand.R'].premultiply(_q); }
      const mo = (rt.mOff = rt.mOff || new THREE.Vector3()); _v.fromArray(clip.hips, i0 * 3); mo.fromArray(clip.hips, i1 * 3); mo.lerp(_v, 1 - al);   // (lerp from i1 towards i0 by 1-al)
      mo.multiplyScalar(rt.hipsWorldY / (rt.mxHipsY * 1.0)); if (ce.air) mo.y *= 0.2;   // the game body already rises and falls
      src = Wm; srcKey = ce.c; off = mo;
    } else this.ct = 0;
    if (this.srcKey !== srcKey) { this.srcKey = srcKey; this.mixT = 0; rt.fromW = rt.fromW || {}; for (const n of NEED) rt.fromW[n] = (rt.fromW[n] || new THREE.Quaternion()).copy(Wout[n] || src[n]); rt.fromOff = (rt.fromOff || new THREE.Vector3()).copy(rt.curOff || off); }
    this.mixT = (this.mixT == null ? 1 : this.mixT) + dt; const mk = Math.min(1, this.mixT / 0.18), ms = mk * mk * (3 - 2 * mk);
    for (const n of NEED) { Wout[n] = Wout[n] || new THREE.Quaternion(); if (ms < 1 && rt.fromW) Wout[n].copy(rt.fromW[n]).slerp(src[n], ms); else Wout[n].copy(src[n]); }
    rt.curOff = (rt.curOff || new THREE.Vector3()); if (ms < 1 && rt.fromOff) rt.curOff.copy(rt.fromOff).lerp(off, ms); else rt.curOff.copy(off);
    // ---- AIM: while a gun is raised, swing the upper body (a small feedback loop on the real barrel direction) until the barrel points exactly where the shots go: st.aimElev = elevation in radians (+ up), straight ahead sideways
    { const W = this.ch.wmesh && st.weapon && this.ch.wmesh[st.weapon], on = !!(W && /(Aim|Shoot)$/.test(this.pose || '') && this.ch.gun.visible);
      const aq = this.aimQ || (this.aimQ = new THREE.Quaternion()), tgt = on ? 1 : 0; this.aimK = (this.aimK || 0) + (tgt - (this.aimK || 0)) * Math.min(1, dt * 10);
      if (on) {
        W.updateWorldMatrix(true, false); const d = _aimD.set(0, 0, 1).applyQuaternion(W.getWorldQuaternion(_aimQ)); this.group.updateWorldMatrix(true, false);
        d.applyQuaternion(this.group.getWorldQuaternion(_aimQ).invert()); const e = (st.aimElev || 0) + (st.kick || 0) * 0.07, ce = Math.cos(e);   // kick = a muzzle climb for a moment after every shot
        _aimT.set(0, Math.sin(e), ce); _aimE.setFromUnitVectors(d.normalize(), _aimT); _aimI.identity().slerp(_aimE, 0.55); aq.premultiply(_aimI);
        this.aimErr = d.angleTo(_aimT);
      } else aq.slerp(_aimI.identity(), Math.min(1, dt * 8));
      if (this.aimK > 0.01) { _aimE.identity().slerp(aq, this.aimK); for (const n of AIM_BONES) Wout[n].premultiply(_aimE); }
    }
    // walk the GLB skeleton parents-first
    if (!rt.restW) { rt.restW = new Map(); const fill = (bone, pq) => { const q = pq.clone().multiply(rt.rest.get(bone)); rt.restW.set(bone, q); for (const c of bone.children) if (c.isBone) fill(c, q); }; for (const bone of rt.all) if (!bone.parent || !bone.parent.isBone) fill(bone, rt.rootQ.get(bone)); }
    const walk = (bone, pw, hd) => {   // hd: how far the hand has turned from its rest pose (the finger curl axis turns with the hand: a fixed world axis curled the fingers the wrong way once the arm was raised = claws)
      let w;
      const k = rt.byBone.get(bone);
      if (k) { const t = rt.T[k]; w = _q2.copy(rt.Wout[k]); const local = pw.clone().invert().multiply(w); bone.quaternion.copy(local); w = w.clone(); if (/^hand\./.test(k)) { hd = w.clone().multiply(rt.restW.get(bone).clone().invert()); }
      }
      else if (bone.userData.curl) {   // finger / thumb joints: curl into a fist (axis across the palm, turned with the hand, converted into the parent's frame)
        const cu = bone.userData.curl, ang = cu.a * this.fist;
        _v.copy(cu.axis); if (hd) _v.applyQuaternion(hd); _v.applyQuaternion(_q.copy(pw).invert()).normalize();
        bone.quaternion.setFromAxisAngle(_v, ang).multiply(rt.rest.get(bone)); w = pw.clone().multiply(bone.quaternion);
      }
      else { bone.quaternion.copy(rt.rest.get(bone)); w = pw.clone().multiply(bone.quaternion); }
      for (const c of bone.children) if (c.isBone) walk(c, w, hd);
    };
    // root bones: those whose parent is not a bone
    for (const bone of rt.all) if (!bone.parent || !bone.parent.isBone) {
      walk(bone, rt.rootQ.get(bone));
    }
    // hips: bounce / lean / sitting height (driver offset or Mixamo hips travel) scaled to this body, in the hips parent's local space
    _v.copy(rt.curOff).applyQuaternion(_q.copy(rt.hipsParentQ).invert()).divideScalar(rt.hipsParentS);
    rt.hips.position.copy(rt.hipsRestLocal).add(_v);
    if (!this.ikOff) try { this.gripIK(dt, st); } catch (e) { this.ikOff = true; console.warn('grip IK off', e); }
  }
  // LEFT HAND ON THE GUN: after the pose is set, a two-bone IK reaches the left hand to the gun's fore-grip point (per gun, in the gun frame), so ANY gun is held right, whatever the clip did
  gripIK(dt, st) {
    const rt = this.rt, W = this.ch.wmesh && st.weapon && this.ch.wmesh[st.weapon], fg = FORE[st.weapon];
    const want = !!(W && fg && this.ch.gun.visible && /^(rifle|pistol)/.test(this.pose || '') && !st.seated);
    this.ikK = (this.ikK || 0) + ((want ? 1 : 0) - (this.ikK || 0)) * Math.min(1, dt * 9);
    if (this.ikK < 0.02 || !W) return;
    const gg = W.children[0]; if (!gg) return;
    this.group.updateMatrixWorld(true);
    const A = rt.T['upperarm.L'].bone, B = rt.T['forearm.L'].bone, C = rt.T['hand.L'].bone;
    const pa = A.getWorldPosition(_ik.pa), pb = B.getWorldPosition(_ik.pb), pc = C.getWorldPosition(_ik.pc), t = gg.localToWorld(_ik.t.set(fg[0], fg[1], fg[2]));
    const l1 = pa.distanceTo(pb), l2 = pb.distanceTo(pc); if (l1 < 1e-4 || l2 < 1e-4) return;
    { const fd = _ik.d.subVectors(t, pb); if (fd.lengthSq() > 1e-6) t.addScaledVector(fd.normalize(), -0.085); }   // v233: the target is where the PALM should be: the wrist sits a hand-length back along the forearm (the wrist used to be put ON the fore-grip, so the hand stuck out past the barrel)
    const k = this.ikK; t.lerpVectors(pc, t, k);   // blend the target from where the hand already is
    const dir = _ik.d.subVectors(t, pa), dist = Math.min(Math.max(dir.length(), Math.abs(l1 - l2) + 1e-3), l1 + l2 - 1e-3); dir.normalize();
    const ac = _ik.ac.subVectors(pc, pa).normalize(), pole = _ik.pole.subVectors(pb, pa); pole.addScaledVector(ac, -pole.dot(ac));   // the elbow keeps bending the way the clip had it
    if (pole.lengthSq() < 1e-8) pole.set(0, -1, 0); pole.addScaledVector(dir, -pole.dot(dir)).normalize();
    const ca = (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist), sa = Math.sqrt(Math.max(0, 1 - ca * ca));
    const pb2 = _ik.pb2.copy(pa).addScaledVector(dir, ca * l1).addScaledVector(pole, sa * l1);
    const rot = (bone, from, to) => { _ik.q.setFromUnitVectors(from.clone().normalize(), to.clone().normalize()); const par = bone.parent, wq = bone.getWorldQuaternion(_ik.wq).premultiply(_ik.q), pq = par.getWorldQuaternion(_ik.pq); bone.quaternion.copy(pq.invert().multiply(wq)); bone.updateMatrixWorld(true); };
    rot(A, pb.clone().sub(pa), pb2.clone().sub(pa));
    const pcN = C.getWorldPosition(_ik.pc), pbN = B.getWorldPosition(_ik.pb);
    rot(B, pcN.clone().sub(pbN), t.clone().sub(pbN));
  }
  dispose() {
    this.disposed = true;
    this.group.traverse((o) => { if (o.isMesh && !(this.shell && this.shell.getObjectById(o.id))) { o.geometry.dispose(); const m = o.material; (Array.isArray(m) ? m : [m]).forEach((mm) => mm.dispose()); } });
  }
}

// the four player characters (ids 0..3) are MakeHuman bodies (tools/mh_build.py); the procedural human shows while loading and is the fallback if a file is missing
export const HERO_GLB = ['models/hero0.glb', 'models/hero1.glb', 'models/hero2.glb', 'models/hero3.glb', 'models/hero4.glb'];
export const ZOMBIE_LOOK = { role: 'civilian', top: '#d3a794', pants: '#262b33', shoes: '#d3a794', skinTone: '#d3a794', hair: '#0d0a08', hat: null, sleeve: 5 };   // the procedural stand-in while hero4.glb loads
// JANG has its own four soldiers (Mixamo bodies, ~9k triangles each); GTA keeps the MakeHuman ones
export const JANG_GLB = ['models/jang0.glb', 'models/jang1.glb', 'models/jang2.glb', 'models/jang3.glb'];
let jangSet = false;
export const isJangSet = () => jangSet;
export const setJangSet = (v) => { jangSet = !!v; };
export const makeHero = (id, look, facial = true) => (id | 0) === 4 ? new GlbActor(4, HERO_GLB[4], { look: look || ZOMBIE_LOOK, zombie: true }) : jangSet && JANG_GLB[id | 0] ? new GlbActor(id, JANG_GLB[id | 0], { look, facial: false }) : HERO_GLB[id | 0] ? new GlbActor(id, HERO_GLB[id | 0], { look, facial }) : new HeroActor(id, look);
// a look 0..7: 0..3 the GTA heroes, 4..7 the Jang soldiers (usable in GTA too)
export const makeSkin = (skin, look, facial = true) => (skin | 0) === 8 ? new GlbActor(8, HERO_GLB[2], { look, facial: false }) : (skin | 0) >= 4 && (skin | 0) < 8 ? new GlbActor(skin | 0, JANG_GLB[(skin | 0) - 4], { look, facial: false }) : makeHero(skin, look, facial);
