// v469: ANDROID POTATO MODE. A budget Android GPU (Mali / PowerVR / old Adreno) chokes on PBR materials + environment lighting. On those phones (the LOW graphics tier) every standard material
// in the match scene is swapped for a plain Lambert one (same colours / textures, one shared copy per original so batching stays), and the environment map is replaced by a flat ambient light.
// Desktop, iPhone and any phone on the normal tier are never touched.
import * as THREE from 'three';
const MAP = new Map(); let amb = null;
export function potatoize(scene) {
  if (!scene) return 0; let n = 0;
  if (scene.environment) { scene.environment = null; }
  if (!amb) { amb = new THREE.AmbientLight(0xffffff, 1.0); amb.name = 'potato-amb'; }
  if (!amb.parent) scene.add(amb);
  const conv = (m) => {
    if (!m || !(m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) || Object.prototype.hasOwnProperty.call(m, 'onBeforeCompile')) return m;
    let q = MAP.get(m); if (q) return q;
    q = new THREE.MeshLambertMaterial({ color: m.color ? m.color.clone() : 0xffffff, map: m.map || null, vertexColors: !!m.vertexColors, transparent: m.transparent, opacity: m.opacity, alphaTest: m.alphaTest, side: m.side, fog: m.fog !== false, emissive: m.emissive ? m.emissive.clone() : 0x000000, emissiveMap: m.emissiveMap || null, emissiveIntensity: m.emissiveIntensity || 1, depthWrite: m.depthWrite, flatShading: !!m.flatShading });
    q.name = m.name; MAP.set(m, q); return q;
  };
  scene.traverse((o) => { if (!(o.isMesh || o.isSkinnedMesh || o.isInstancedMesh) || !o.material) return; const a = o.material;
    if (Array.isArray(a)) { let ch = false; const b = a.map((m) => { const q = conv(m); if (q !== m) ch = true; return q; }); if (ch) { o.material = b; n++; } }
    else { const q = conv(a); if (q !== a) { o.material = q; n++; } } });
  return n;
}
