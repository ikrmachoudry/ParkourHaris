// The weapon store's preview pane: ONE small extra three.js scene with the selected weapon turning slowly under a light. It only draws while the shop is open
// (about 30 fps, tiny canvas, no anti-aliasing), so it costs nothing during play and stays light on phones.
import * as THREE from 'three';
import { makeWeaponModel } from './weaponmodels.js';

export class ShopPreview {
  constructor(canvas) {
    this.canvas = canvas; this.kind = null; this.run = false; this.last = 0; this.ang = 0.6; this.ok = false;
    try {
      this.r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' }); this.r.setClearColor(0x000000, 0);
      this.scene = new THREE.Scene(); this.cam = new THREE.PerspectiveCamera(32, 1, 0.1, 20); this.cam.position.set(0, 0.25, 3.6); this.cam.lookAt(0, 0, 0);
      this.scene.add(new THREE.HemisphereLight(0xffffff, 0x6a7088, 2.1)); const k = new THREE.DirectionalLight(0xfff1d6, 3.2); k.position.set(2, 3, 3); this.scene.add(k);
      const f = new THREE.DirectionalLight(0x9fc2ff, 1.8); f.position.set(-3, 1, -2); this.scene.add(f);
      this.pivot = new THREE.Group(); this.scene.add(this.pivot); this.ok = true;
    } catch (e) { this.ok = false; }
  }
  size() { const c = this.canvas, w = Math.max(60, c.clientWidth | 0), h = Math.max(60, c.clientHeight | 0), dpr = Math.min(1.5, window.devicePixelRatio || 1); if (c.width !== (w * dpr | 0) || c.height !== (h * dpr | 0)) { this.r.setPixelRatio(dpr); this.r.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); } }
  show(kind) {
    if (!this.ok || kind === this.kind) return; this.kind = kind;
    while (this.pivot.children.length) { const o = this.pivot.children[0]; this.pivot.remove(o); o.traverse((m) => { if (m.isMesh) m.geometry.dispose(); }); }   // (the shared materials stay)
    const m = makeWeaponModel(kind); if (kind === 'bat') m.rotation.z = Math.PI / 2;
    const box = new THREE.Box3().setFromObject(m), c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3()), mx = Math.max(sz.x, sz.y, sz.z) || 1;
    const g = new THREE.Group(); m.position.sub(c); g.add(m); g.scale.setScalar(2.1 / mx); this.pivot.add(g); this.ang = 0.6;
  }
  start() { if (!this.ok || this.run) return; this.run = true; this.last = performance.now(); const tick = (t) => { if (!this.run) return; requestAnimationFrame(tick); if (t - this.last < 33) return; const dt = Math.min(0.1, (t - this.last) / 1000); this.last = t; this.draw(dt); }; requestAnimationFrame(tick); }
  stop() { this.run = false; }
  draw(dt) { this.size(); this.ang += dt * 0.9; this.pivot.rotation.y = this.ang; this.pivot.rotation.x = 0.18 + Math.sin(this.ang * 0.7) * 0.06; this.r.render(this.scene, this.cam); }
}
