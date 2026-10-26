import * as THREE from 'three';
// the C130 scan is an empty hull: the inside is built here (model units, plane frame: +z = nose, floor at y -0.5): olive walls, a floor, two rows of orange bench seats and ceiling lights
export function buildCabin(w, inner) {
      const cab = new THREE.Group(), M = (c, e) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, emissive: e || '#000', emissiveIntensity: e ? 1 : 0 }), box = (sx, sy, sz, x, y, z, m) => { const q = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); q.position.set(x, y, z); cab.add(q); return q; };
      const fl = M('#3b4047'), seatM = M('#d9772b'), frameM = M('#2b2f33'), lightM = M('#fff1c0', '#fff1c0');
      box(3.2, 0.1, 13.4, 0, -0.55, -0.4, fl); box(0.5, 0.02, 13.2, 0, -0.49, -0.4, M('#caa63a'));   // floor + a yellow centre line
      for (const sd of [-1, 1]) {
        for (let i = 0; i < 9; i++) { const z = -5.4 + i * 1.3, x = sd * 1.55;
          box(0.55, 0.1, 0.62, x, -0.17, z, seatM); box(0.06, 0.62, 0.62, sd * 1.8, 0.14, z, seatM); box(0.06, 0.38, 0.06, x - sd * 0.22, -0.36, z + 0.26, frameM); box(0.06, 0.38, 0.06, x - sd * 0.22, -0.36, z - 0.26, frameM); }
        box(0.06, 0.07, 12.2, sd * 1.86, 0.62, -0.3, frameM);   // the rail above the seat backs
        box(0.18, 0.07, 12.4, sd * 0.9, 1.95, -0.3, lightM);   // ceiling light strips
      }
      { const cap = new THREE.Mesh(new THREE.CircleGeometry(2.0, 24), M('#4b5240')); cap.position.set(0, 0.57, 6.4); cap.rotation.y = Math.PI; cab.add(cap); }   // the cockpit bulkhead; the rear stays OPEN (the ramp): you see the island behind the plane
      { const sh = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 13.6, 24, 1, true), new THREE.MeshStandardMaterial({ color: '#6b7458', roughness: 0.9, side: THREE.BackSide })); sh.rotation.x = Math.PI / 2; sh.position.set(0, 0.57, -0.4); cab.add(sh); }   // olive inner wall
  w.add(cab); const seat = new THREE.Object3D(); seat.position.set(-1.55, -0.17 + 0.0, -1.1); w.add(seat); w.userData.seat = seat; w.userData.cabin = cab; w.userData.scan = inner;
}
