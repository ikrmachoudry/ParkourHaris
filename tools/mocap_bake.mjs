// Bakes free CMU motion-capture clips (BVH, public domain-style licence: "free for all uses") onto the Haris hero skeleton (hchar.js).
// usage: node tools/mocap_bake.mjs /path/to/cmu-mocap/data  ->  public/js/mocapdata.js
import fs from 'fs';
import * as THREE from 'three';
const DATA = process.argv[2] || '/home/claude/una-dinosauria/cmu-mocap/data';
const SC = 0.0554;                      // 1 BVH unit in metres (the data is about 1 unit = 5.5 cm)
const FPS = 30;

function parseBVH(path) {
  const L = fs.readFileSync(path, 'utf8').split(/\r?\n/); let i = 0; const joints = []; const stack = []; let cur = null;
  for (; i < L.length; i++) {
    const t = L[i].trim().split(/\s+/);
    if (t[0] === 'ROOT' || t[0] === 'JOINT') { cur = { name: t[1], parent: stack.length ? stack[stack.length - 1] : null, off: [0, 0, 0], ch: [] }; joints.push(cur); stack.push(cur); }
    else if (t[0] === 'End') { stack.push({ end: true }); }
    else if (t[0] === 'OFFSET') { const o = stack[stack.length - 1]; if (o && !o.end) o.off = [+t[1], +t[2], +t[3]]; }
    else if (t[0] === 'CHANNELS') { const o = stack[stack.length - 1]; o.ch = t.slice(2); }
    else if (t[0] === '}') { stack.pop(); }
    else if (t[0] === 'MOTION') { i++; break; }
  }
  const n = +L[i].split(':')[1]; const ft = +L[i + 1].split(':')[1]; i += 2;
  const frames = []; for (let k = 0; k < n; k++) frames.push(L[i + k].trim().split(/\s+/).map(Number));
  return { joints, frames, ft };
}
// world rotations + root position per frame
const eu = new THREE.Euler(), qa = new THREE.Quaternion();
function worldRots(b, f) {
  const row = b.frames[f]; let p = 0; const W = {}; let rootPos = null;
  for (const j of b.joints) {
    const q = new THREE.Quaternion();
    for (const c of j.ch) {
      const v = row[p++];
      if (c === 'Xposition' || c === 'Yposition' || c === 'Zposition') { rootPos = rootPos || [0, 0, 0]; rootPos['XYZ'.indexOf(c[0])] = v; continue; }
      const ax = c[0] === 'X' ? [1, 0, 0] : c[0] === 'Y' ? [0, 1, 0] : [0, 0, 1];
      qa.setFromAxisAngle(new THREE.Vector3(...ax), v * Math.PI / 180); q.multiply(qa);   // in the order listed: R = Rz * Ry * Rx
    }
    W[j.name] = (j.parent ? W[j.parent.name].clone() : new THREE.Quaternion()).multiply(q);
  }
  return { W, rootPos };
}
// our skeleton (same numbers as hchar.js BONES) : [name, parent, rest joint position]
const BONES = [
  ['hips', null, [0, 0.97, 0]], ['spine', 'hips', [0, 1.07, 0]], ['chest', 'spine', [0, 1.24, 0]], ['neck', 'chest', [0, 1.49, 0]], ['head', 'neck', [0, 1.58, 0]],
  ['upperarm.L', 'chest', [0.19, 1.45, 0]], ['forearm.L', 'upperarm.L', [0.265, 1.17, 0]], ['hand.L', 'forearm.L', [0.325, 0.915, 0]],
  ['upperarm.R', 'chest', [-0.19, 1.45, 0]], ['forearm.R', 'upperarm.R', [-0.265, 1.17, 0]], ['hand.R', 'forearm.R', [-0.325, 0.915, 0]],
  ['upperleg.L', 'hips', [0.088, 0.93, 0]], ['lowerleg.L', 'upperleg.L', [0.088, 0.52, 0]], ['foot.L', 'lowerleg.L', [0.088, 0.095, 0]],
  ['upperleg.R', 'hips', [-0.088, 0.93, 0]], ['lowerleg.R', 'upperleg.R', [-0.088, 0.52, 0]], ['foot.R', 'lowerleg.R', [-0.088, 0.095, 0]],
];
const POS = Object.fromEntries(BONES.map((b) => [b[0], new THREE.Vector3(...b[2])]));
// which CMU joint drives which of our bones, and the direction (child) used to align the rest poses
const MAP = {
  hips: ['Hips', null], spine: ['Spine', null], chest: ['Spine1', null], neck: ['Neck1', null], head: ['Head', null],
  'upperarm.L': ['LeftArm', 'LeftForeArm'], 'forearm.L': ['LeftForeArm', 'LeftHand'], 'hand.L': ['LeftHand', null],
  'upperarm.R': ['RightArm', 'RightForeArm'], 'forearm.R': ['RightForeArm', 'RightHand'], 'hand.R': ['RightHand', null],
  'upperleg.L': ['LeftUpLeg', 'LeftLeg'], 'lowerleg.L': ['LeftLeg', 'LeftFoot'], 'foot.L': ['LeftFoot', 'LeftToeBase'],
  'upperleg.R': ['RightUpLeg', 'RightLeg'], 'lowerleg.R': ['RightLeg', 'RightFoot'], 'foot.R': ['RightFoot', 'RightToeBase'],
};
const CHILD = { hips: 'spine', spine: 'chest', chest: 'neck', neck: 'head', 'upperarm.L': 'forearm.L', 'forearm.L': 'hand.L', 'upperarm.R': 'forearm.R', 'forearm.R': 'hand.R', 'upperleg.L': 'lowerleg.L', 'lowerleg.L': 'foot.L', 'upperleg.R': 'lowerleg.R', 'lowerleg.R': 'foot.R' };
const REST_DIR_FIX = { 'hand.L': [1, 0, 0], 'hand.R': [-1, 0, 0], 'foot.L': [0, -0.35, 1], 'foot.R': [0, -0.35, 1], head: [0, 1, 0], neck: [0, 1, 0] };

function rig(b) {
  // rest directions: (child - bone) in both skeletons; cmu rest world position by summing offsets
  const cp = {}; for (const j of b.joints) cp[j.name] = (j.parent ? cp[j.parent.name].clone() : new THREE.Vector3()).add(new THREE.Vector3(...j.off));
  const Q = {};
  for (const [mine, [cj, cc]] of Object.entries(MAP)) {
    let dm, dc;
    if (CHILD[mine]) dm = POS[CHILD[mine]].clone().sub(POS[mine]); else dm = new THREE.Vector3(...(REST_DIR_FIX[mine] || [0, 1, 0]));
    if (cc) dc = cp[cc].clone().sub(cp[cj]); else dc = new THREE.Vector3(...(REST_DIR_FIX[mine] || [0, 1, 0]));
    if (mine === 'hips' || mine === 'spine' || mine === 'chest') { dm = new THREE.Vector3(0, 1, 0); dc = new THREE.Vector3(0, 1, 0); }
    if (mine === 'foot.L' || mine === 'foot.R') { dm = new THREE.Vector3(0, -0.35, 1); dc = cp[cc].clone().sub(cp[cj]); }
    Q[mine] = new THREE.Quaternion().setFromUnitVectors(dm.normalize(), dc.normalize());   // takes OUR rest direction onto the CMU one (ours = animated CMU world rotation * this)
  }
  return Q;
}
// convert frames [f0,f1) of a clip; heading removed (faces +Z at the start); root x/z removed unless keepXZ
function bake(file, f0, f1, opt = {}) {
  const b = parseBVH(`${DATA}/${file.slice(0, file.indexOf("_")).padStart(3, "0")}/${file}.bvh`); const Q = rig(b);
  const step = Math.max(1, Math.round(1 / FPS / b.ft)); const frames = [];
  let heading = null, y0 = null; const ys = [];
  for (let f = f0; f < Math.min(f1, b.frames.length); f += step) {
    const { W, rootPos } = worldRots(b, f); ys.push(rootPos[1]);
    if (heading === null) { const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(W.Hips); heading = Math.atan2(fwd.x, fwd.z); }
    frames.push({ W, rootPos });
  }
  const undo = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -heading);
  const yBase = opt.yMean ? ys.reduce((a, c) => a + c, 0) / ys.length : ys[0];
  const out = { n: frames.length, fps: FPS, q: [], y: [] };
  for (const fr of frames) {
    const wm = {};   // our world rotations
    for (const [mine, [cj]] of Object.entries(MAP)) wm[mine] = undo.clone().multiply(fr.W[cj]).multiply(Q[mine]);
    for (const bn of BONES) {
      const nm = bn[0]; if (!MAP[nm]) continue;
      const par = bn[1]; const loc = par ? wm[par].clone().invert().multiply(wm[nm]) : wm[nm].clone();
      out.q.push(...[loc.x, loc.y, loc.z, loc.w].map((v) => Math.round(v * 5000) / 5000));
    }
    out.y.push(Math.round((0.97 + (fr.rootPos[1] - yBase) * SC + (opt.dy || 0)) * 1000) / 1000);
  }
  return out;
}
// find the best loop (frames i..j, in 30 fps frames) of a periodic clip
function loopOf(c, minLen, maxLen) {
  const B = 17, n = c.n; let best = [1e9, 0, 0];
  const d = (a, b) => { let s = 0; for (let k = 0; k < B * 4; k++) s += Math.abs(c.q[a * B * 4 + k] - c.q[b * B * 4 + k]); return s + Math.abs(c.y[a] - c.y[b]) * 8; };
  for (let i = 0; i < n - minLen; i++) for (let j = i + minLen; j <= Math.min(n - 1, i + maxLen); j++) { const v = d(i, j); if (v < best[0]) best = [v, i, j]; }
  return best;
}
const slice = (c, i, j) => ({ n: j - i, fps: c.fps, q: c.q.slice(i * 68, j * 68), y: c.y.slice(i, j) });

// pick the frame window of an action: the fastest hand/foot movement (peak) or the time the hips are in the air
function windowOf(s) {
  const b = parseBVH(`${DATA}/${s.file.slice(0, s.file.indexOf('_')).padStart(3, '0')}/${s.file}.bvh`); const hz = Math.round(1 / b.ft);
  const cp = {}; for (const j of b.joints) cp[j.name] = (j.parent ? cp[j.parent.name].clone() : new THREE.Vector3()).add(new THREE.Vector3(...j.off));
  if (s.air) {
    const ys = b.frames.map((r) => r[1]); const base = ys[0]; let a = -1, z = -1;
    for (let f = 0; f < ys.length; f++) if (ys[f] > base + (s.air || 1)) { if (a < 0) a = f; z = f; }
    return [Math.max(0, a - Math.round(hz * (s.pre || 0.3))), Math.min(ys.length, z + Math.round(hz * (s.post || 0.3)))];
  }
  // joint world position by FK
  const pos = (f, name) => { const { W, rootPos } = worldRots(b, f); const chain = []; let j = b.joints.find((x) => x.name === name); while (j) { chain.unshift(j); j = j.parent; }
    const v = new THREE.Vector3(...rootPos); for (let i = 1; i < chain.length; i++) v.add(new THREE.Vector3(...chain[i].off).applyQuaternion(W[chain[i - 1].name])); return v; };
  let best = 0, bf = 0, prev = null; const lo = Math.round(hz * (s.skip || 1));
  for (let f = lo; f < b.frames.length - lo; f += 2) { const p = pos(f, s.peak), h = pos(f, 'Hips'); const rel = p.sub(h); if (prev) { const v = rel.distanceTo(prev); if (v > best) { best = v; bf = f; } } prev = rel; }
  return [Math.max(0, bf - Math.round(hz * s.pre)), Math.min(b.frames.length, bf + Math.round(hz * s.post))];
}
const clips = {};
const spec = JSON.parse(fs.readFileSync(new URL('./mocap_clips.json', import.meta.url), 'utf8'));
for (const [name, s] of Object.entries(spec)) {
  if (s.peak || s.air) { const w = windowOf(s); s.from = w[0]; s.to = w[1]; console.log(name, 'window', s.from, s.to); }
  let c = bake(s.file, s.from, s.to, { yMean: !!s.loop, dy: s.dy });
  if (s.ymul) c.y = c.y.map((v) => Math.round((0.97 + (v - 0.97) * s.ymul) * 1000) / 1000);
  if (s.loop) { const [v, i, j] = loopOf(c, s.loop[0], s.loop[1]); console.log(name, 'loop', i, j, 'err', v.toFixed(2), 'len', ((j - i) / FPS).toFixed(2), 's'); c = slice(c, i, j); c.loop = 1; }
  else console.log(name, c.n, 'frames');
  clips[name] = c;
}
const names = BONES.filter((b) => MAP[b[0]]).map((b) => b[0]);
fs.writeFileSync(new URL('../public/js/mocapdata.js', import.meta.url), '// generated by tools/mocap_bake.mjs from the CMU Graphics Lab Motion Capture Database (free for any use; mocap.cs.cmu.edu) - do not edit\nexport const MOCAP_BONES = ' + JSON.stringify(names) + ';\nexport const MOCAP = ' + JSON.stringify(clips) + ';\n');
console.log('bytes', fs.statSync(new URL('../public/js/mocapdata.js', import.meta.url)).size);
