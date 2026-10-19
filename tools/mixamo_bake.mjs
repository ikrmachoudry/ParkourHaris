// Bakes Mixamo FBX animation clips (humanoid, any skin) into public/anim/clips.json, the format glbactor.js plays on any character.
// usage: node tools/mixamo_bake.mjs out.json name=file.fbx [name=file.fbx ...]
// For each frame: the WORLD rotation change of 17 bones relative to the T-pose (G = W(t) * W(rest)^-1) + the hips travel.  Rest directions are stored once.
import fs from 'fs';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
const NEED = ['hips', 'spine', 'chest', 'neck', 'head', 'upperarm.L', 'forearm.L', 'hand.L', 'upperarm.R', 'forearm.R', 'hand.R', 'upperleg.L', 'lowerleg.L', 'foot.L', 'upperleg.R', 'lowerleg.R', 'foot.R'];
const MX = { hips: 'Hips', spine: 'Spine', chest: 'Spine2', neck: 'Neck', head: 'Head', 'upperarm.L': 'LeftArm', 'forearm.L': 'LeftForeArm', 'hand.L': 'LeftHand', 'upperarm.R': 'RightArm', 'forearm.R': 'RightForeArm', 'hand.R': 'RightHand', 'upperleg.L': 'LeftUpLeg', 'lowerleg.L': 'LeftLeg', 'foot.L': 'LeftFoot', 'upperleg.R': 'RightUpLeg', 'lowerleg.R': 'RightLeg', 'foot.R': 'RightFoot' };
const [out, ...specs] = process.argv.slice(2);
const r4 = (v) => Math.round(v * 10000) / 10000;
const res = { fps: 30, restPos: null, hipsY: 0, clips: {} };
for (const sp of specs) {
  const [name, file] = sp.split('=');
  const buf = fs.readFileSync(file); const g = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '');
  const byName = {}; g.traverse((o) => { if (o.isBone) byName[o.name.replace(/^mixamorig:?/, '')] = o; });
  const B = Object.fromEntries(NEED.map((k) => [k, byName[MX[k]]])); const miss = NEED.filter((k) => !B[k]); if (miss.length) throw new Error(name + ' missing ' + miss);
  g.updateMatrixWorld(true);
  const wq = (o) => o.getWorldQuaternion(new THREE.Quaternion());
  const restQ = Object.fromEntries(NEED.map((k) => [k, wq(B[k])]));
  if (!res.restPos) {
    res.restPos = Object.fromEntries(NEED.map((k) => [k, B[k].getWorldPosition(new THREE.Vector3()).toArray().map(r4)]));
    res.hipsY = res.restPos.hips[1];
  }
  const clip = g.animations[0]; const tr = {}; for (const t of clip.tracks) tr[t.name] = t;
  const n = clip.tracks.find((t) => t.name.endsWith('.quaternion')).times.length, dur = clip.duration;
  const restHipsPos = B.hips.position.clone();
  const Gs = [], H = [];
  // sample every track at the clip's own frame times
  for (let f = 0; f < n; f++) {
    // single-key tracks (e.g. Neck1) hold their value
    for (const o of Object.values(byName)) { const t = tr[o.name + '.quaternion']; if (t) o.quaternion.fromArray(t.values, Math.min(f, t.values.length / 4 - 1) * 4); }
    const hp = tr['mixamorigHips.position'] || tr['mixamorig:Hips.position']; if (hp) B.hips.position.fromArray(hp.values, f * 3);
    g.updateMatrixWorld(true);
    for (const k of NEED) { const q = wq(B[k]).multiply(restQ[k].clone().invert()); if (Gs.length && f && false) q.x = q.x; Gs.push(...q.toArray().map(r4)); }
    H.push(...B.hips.getWorldPosition(new THREE.Vector3()).sub(new THREE.Vector3(...res.restPos.hips)).toArray().map(r4));
    // keep q continuity (shortest arc) for slerp between frames
  }
  // Mixamo loops repeat frame 0 as the last frame: drop it, otherwise every cycle stalls one frame (the "respawn" hitch)
  let nn = n; const L = (n - 1) * 17 * 4; let diff = 0; for (let j = 0; j < 17; j++) { let d = 0; for (let k = 0; k < 4; k++) d += Gs[L + j * 4 + k] * Gs[j * 4 + k]; diff = Math.max(diff, 1 - Math.abs(d)); }
  if (diff < 0.002 && Math.abs(H[(n - 1) * 3 + 1] - H[1]) < 0.5) { Gs.length = L; H.length = (n - 1) * 3; nn = n - 1; console.log(name, 'duplicate end frame dropped'); }
  res.clips[name] = { n: nn, dur: r4(dur), G: Gs, hips: H };
  console.log(name, 'frames', n, 'dur', dur.toFixed(3), 'hips travel z', (H[(n - 1) * 3 + 2] - H[2]).toFixed(1));
}
fs.writeFileSync(out, JSON.stringify(res));
console.log('wrote', out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
