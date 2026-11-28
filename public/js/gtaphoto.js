// GTA city only (never Jang): Haris's photo (background removed, white sticker edge) on the wall of 15 homes + on the back of the jeep.
// Jang has its own scene and never calls anything in here: the flag GTA_JEEP.on is set by the race only for a non-Jang level.
import * as THREE from 'three';

export const GTA_JEEP = { on: false };
const ASPECT = 513 / 609;   // the sticker picture (width / height)
let TEX = null;
const tex = () => { if (!TEX) { TEX = new THREE.TextureLoader().load('models/props/boy-sticker.webp'); TEX.colorSpace = THREE.SRGBColorSpace; TEX.anisotropy = 4; } return TEX; };

// quads: [cx, cy, cz, yaw, height]: a picture standing on a wall, its face looking along (sin yaw, 0, cos yaw), centred at c. All of them are ONE merged mesh = one draw call.
function posterMesh(quads) {
  const pos = [], uv = [], idx = [];
  quads.forEach(([cx, cy, cz, yaw, h], q) => {
    const w = h * ASPECT, c = Math.cos(yaw), s = Math.sin(yaw), rx = c * w / 2, rz = -s * w / 2, o = q * 4;
    pos.push(cx - rx, cy - h / 2, cz - rz, cx + rx, cy - h / 2, cz + rz, cx + rx, cy + h / 2, cz + rz, cx - rx, cy + h / 2, cz - rz);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1); idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
  });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeBoundingSphere();
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex(), color: '#e8e8e8', alphaTest: 0.45, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }));
  m.name = 'gtaPosters'; m.frustumCulled = false; return m;
}

// 4 player homes (front wall, between the garage and the door) + the 11 low-rise buildings round the homes (the street-facing wall, under the awning).
export function buildGtaPosters({ B, HOMES, homeW, BLK }) {
  const q = [], near = (v) => BLK.reduce((a, c) => (Math.abs(c - v) < Math.abs(a - v) ? c : a));
  for (const h of HOMES) { const p = homeW(h, 1.8, 1.29); q.push([p.x, 1.65, p.z, h.yaw, 1.9]); }
  const cx = HOMES.reduce((a, h) => a + h.x, 0) / HOMES.length, cz = HOMES.reduce((a, h) => a + h.z, 0) / HOMES.length;
  B.filter((b) => !b.tower && !b.burj && b.h >= 6 && b.h <= 24 && b.zone === 2).sort((a, b) => Math.hypot(a.x - cx, a.z - cz) - Math.hypot(b.x - cx, b.z - cz)).slice(0, 11).forEach((b) => {
    const sz = Math.sign(b.z - near(b.z)) || 1;   // the wall that looks at the avenue
    q.push([b.x, 2.45, b.z + sz * (b.d / 2 + 0.06), sz > 0 ? 0 : Math.PI, 2.1]);
  });
  return posterMesh(q);
}

// the jeep: on its flat rear panel (x = -2.05, z .10 .. .68, y 1.00 .. 1.58; car space, nose = +x), a child of the car's own group so it moves with the jeep
export function addGtaJeepPhoto(rot) {
  if (!rot || rot.userData.gtaPhoto) return; rot.userData.gtaPhoto = true;
  const h = 0.58, m = new THREE.Mesh(new THREE.PlaneGeometry(h * ASPECT, h), new THREE.MeshBasicMaterial({ map: tex(), color: '#e6e6e6', alphaTest: 0.45, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  m.rotation.y = -Math.PI / 2; m.position.set(-2.0545, 1.29, 0.39); m.name = 'jeepPhotoGta'; rot.add(m);
}
