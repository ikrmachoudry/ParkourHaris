import * as THREE from 'three';
// the C130 scan is an empty hull: the inside is built here (model units, plane frame: +z = nose, floor at y -0.5): olive walls, a floor, two rows of orange bench seats and ceiling lights
export function buildCabin(w, inner) {
      const cab = new THREE.Group(), M = (c, e) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, emissive: e || '#000', emissiveIntensity: e ? 1 : 0 }), box = (sx, sy, sz, x, y, z, m) => { const q = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); q.position.set(x, y, z); cab.add(q); return q; };
      const fl = M('#3b4047'), seatM = M('#3a3f38'), padM = M('#2a2d2a'), strapM = M('#1b1d1b'), frameM = M('#7d838a'), ribM = M('#4a5044'), lightM = M('#fff1c0', '#fff1c0');
      box(3.2, 0.1, 13.4, 0, -0.55, -0.4, fl); box(0.5, 0.02, 13.2, 0, -0.49, -0.4, M('#caa63a'));   // floor + a yellow centre line
      for (const sd of [-1, 1]) {
        for (let i = 0; i < 9; i++) { const z = -5.4 + i * 1.3, x = sd * 1.55;
          box(0.52, 0.07, 0.6, x, -0.2, z, seatM); box(0.5, 0.025, 0.58, x, -0.158, z, padM);   // the cushion
          box(0.07, 0.56, 0.6, sd * 1.8, 0.1, z, seatM); box(0.03, 0.5, 0.54, sd * 1.765, 0.1, z, padM);   // the back, padded
          for (const dz of [-0.2, 0.2]) box(0.03, 0.62, 0.05, sd * 1.74, 0.12, z + dz, strapM);   // webbing straps down the back
          for (const dz of [-0.27, 0.27]) { box(0.04, 0.34, 0.04, x - sd * 0.2, -0.38, z + dz, frameM); box(0.3, 0.035, 0.035, x - sd * 0.05, -0.54 + 0.34, z + dz, frameM); } }
        box(0.06, 0.07, 12.2, sd * 1.86, 0.62, -0.3, frameM);   // the rail above the seat backs
        for (let z = -5.2; z <= 4.6; z += 2.6) box(0.3, 0.05, 0.3, sd * 0.9, 1.95, z, lightM);   // small ceiling lamps
      }
      for (let z = -6.6; z <= 5.8; z += 1.3) { const rb = new THREE.Mesh(new THREE.TorusGeometry(1.98, 0.035, 6, 28), ribM); rb.position.set(0, 0.57, z); if (Math.round((z + 6.6) / 1.3) % 2 === 0) cab.add(rb); }   // frame ribs along the fuselage
      { const cap = new THREE.Mesh(new THREE.CircleGeometry(2.05, 24), M('#4b5240')); cap.position.set(0, 0.57, 6.4); cap.material.side = THREE.DoubleSide; cap.rotation.y = Math.PI; cab.add(cap); }
      { const rc = new THREE.Mesh(new THREE.CircleGeometry(2.05, 24), M('#3d4336')); rc.material.side = THREE.DoubleSide; rc.position.set(0, 0.57, -6.75); cab.add(rc); }   // v172: a rear bulkhead too, so turning the camera never shows the outside of the plane   // the cockpit bulkhead; the rear stays OPEN (the ramp): you see the island behind the plane
      { const sh = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 13.6, 24, 1, true), new THREE.MeshStandardMaterial({ color: '#6b7458', roughness: 0.9, side: THREE.DoubleSide })); sh.rotation.x = Math.PI / 2; sh.position.set(0, 0.57, -0.4); cab.add(sh); }   // olive inner wall
  w.add(cab); const seat = new THREE.Object3D(); seat.position.set(-1.64, -0.17, -1.5); w.add(seat); w.userData.seat = seat; w.userData.cabin = cab; w.userData.scan = inner;
}
