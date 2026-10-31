// v258: small pictures of the REAL in-game models (guns, bat, grenade, medkit...) for the hotbar and the backpack screen. Rendered once with a temporary GL context.
import * as THREE from 'three';
export function renderIcons(models, W = 192, Hh = 96) {
  const out = {}, r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  try {
    r.setSize(W, Hh, false); r.outputColorSpace = THREE.SRGBColorSpace; r.setClearColor(0x000000, 0);
    const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight('#ffffff', '#8a93a6', 2.2)); const dl = new THREE.DirectionalLight('#ffffff', 2.4); dl.position.set(2, 4, 6); sc.add(dl);
    for (const k of Object.keys(models)) {
      const m = models[k]; if (!m) continue; const g = new THREE.Group(); g.add(m); g.rotation.x = 0.28; sc.add(g); g.updateMatrixWorld(true);
      const bb = new THREE.Box3().setFromObject(g), c = bb.getCenter(new THREE.Vector3()), s = bb.getSize(new THREE.Vector3()); m.position.sub(c); g.updateMatrixWorld(true);
      const hw = Math.max(s.x, s.y * (W / Hh)) * 0.56 + 0.001, cam = new THREE.OrthographicCamera(-hw, hw, hw * Hh / W, -hw * Hh / W, -50, 50); cam.position.set(0, 0, 10); cam.lookAt(0, 0, 0);
      r.render(sc, cam); out[k] = r.domElement.toDataURL('image/png'); sc.remove(g);
    }
  } catch (e) { /* no icons: the text labels still work */ }
  try { r.dispose(); r.forceContextLoss(); } catch (e) { /* ignore */ }
  return out;
}
