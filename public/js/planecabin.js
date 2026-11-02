import * as THREE from 'three';
// the C130 scan is an empty hull: the inside is built here (model units, plane frame: +z = nose, floor at y -0.5): olive walls, a floor, two rows of orange bench seats and ceiling lights
export function buildCabin(w, inner) {
      const cab = new THREE.Group(), M = (c, e) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, emissive: e || '#000', emissiveIntensity: e ? 1 : 0 }), box = (sx, sy, sz, x, y, z, m) => { const q = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); q.position.set(x, y, z); cab.add(q); return q; };
      const fl = M('#3b4047'), seatM = M('#3a3f38'), padM = M('#2a2d2a'), strapM = M('#1b1d1b'), frameM = M('#7d838a'), ribM = M('#4a5044'), lightM = M('#fff1c0', '#fff1c0');
      /* v301: a MILITARY cargo floor: dark olive diamond-plate, a row of tie-down rings along both sides, a hazard stripe at the ramp lip - and the rear ramp itself (hinged at the floor end: shut = a wall, open = it slopes down behind the plane, like a C-130) */
      const plate = (rx, rz) => { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); c.fillStyle = '#3c4237'; c.fillRect(0, 0, 128, 128); c.fillStyle = '#566048'; c.strokeStyle = '#272c24'; c.lineWidth = 2;
        for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const x = i * 32 + (j % 2 ? 16 : 0) + 8, y = j * 32 + 8; for (const f of [0, 1]) { c.save(); c.translate(x + f * 16, y + f * 16); c.rotate(f ? -0.785 : 0.785); c.beginPath(); c.ellipse(0, 0, 9, 3, 0, 0, 7); c.fill(); c.stroke(); c.restore(); } }
        const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, rz); if (t.colorSpace !== undefined) t.colorSpace = THREE.SRGBColorSpace; return new THREE.MeshStandardMaterial({ map: t, roughness: 0.6, metalness: 0.35 }); };
      const hazard = (rx) => { const cv = document.createElement('canvas'); cv.width = 128; cv.height = 32; const c = cv.getContext('2d'); c.fillStyle = '#e0b21c'; c.fillRect(0, 0, 128, 32); c.fillStyle = '#16181a'; for (let i = -2; i < 8; i++) { c.beginPath(); c.moveTo(i * 24, 32); c.lineTo(i * 24 + 12, 32); c.lineTo(i * 24 + 28, 0); c.lineTo(i * 24 + 16, 0); c.fill(); } const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, 1); if (t.colorSpace !== undefined) t.colorSpace = THREE.SRGBColorSpace; return new THREE.MeshStandardMaterial({ map: t, roughness: 0.7 }); };
      box(3.2, 0.1, 14.6, 0, -0.55, -1.0, plate(5, 24)); box(3.2, 0.012, 0.5, 0, -0.493, -7.95, hazard(6));
      for (const sd of [-1, 1]) { box(0.16, 0.03, 14.2, sd * 1.35, -0.49, -1.0, M('#232721')); for (let z = -7.4; z <= 5.2; z += 1.4) box(0.14, 0.05, 0.14, sd * 1.35, -0.47, z, frameM); }   // seat-track rails with tie-down rings
      { const pv = new THREE.Group(); pv.position.set(0, -0.5, -8.3); pv.name = 'ramp'; cab.add(pv);
        const pm = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.09, 2.9), plate(4, 4)); pm.position.set(0, -0.045, -1.45); pv.add(pm);
        const hz = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.012, 0.3), hazard(5)); hz.position.set(0, 0.002, -2.75); pv.add(hz);
        for (const sd of [-1, 1]) { const ed = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 2.9), M('#2c3128')); ed.position.set(sd * 1.5, 0.02, -1.45); pv.add(ed); }
        pv.rotation.x = Math.PI / 2; }
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
      { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256; const c = cv.getContext('2d'); c.fillStyle = '#2b3026'; c.fillRect(0, 0, 512, 256); c.strokeStyle = '#ffd23f'; c.lineWidth = 8; c.strokeRect(8, 8, 496, 240); c.fillStyle = '#ffd23f'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = '900 84px Impact, Arial Black, sans-serif'; c.fillText('COCKPIT', 256, 92); c.fillStyle = '#fff'; c.direction = 'rtl'; c.font = '700 64px "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", Tahoma, Arial, sans-serif'; c.fillText('ماما دوجا دروازہ', 256, 190);   /* v260: this door stays shut: the sign says so (the open door is at the back) */
        const sg = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.85), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), side: THREE.DoubleSide })); sg.rotation.y = Math.PI; sg.position.set(0, 0.95, 6.37); cab.add(sg); }
      { const rc = new THREE.Mesh(new THREE.CircleGeometry(2.05, 24), M('#3d4336')); rc.name = 'reardoor'; rc.material.side = THREE.DoubleSide; rc.position.set(0, 0.57, -8.05); cab.add(rc); }   // v172: a rear bulkhead too, so turning the camera never shows the outside of the plane   // the cockpit bulkhead; the rear stays OPEN (the ramp): you see the island behind the plane
      { const sh = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 14.9, 24, 1, true), new THREE.MeshStandardMaterial({ color: '#6b7458', roughness: 0.9, side: THREE.DoubleSide })); sh.rotation.x = Math.PI / 2; sh.position.set(0, 0.57, -0.85); cab.add(sh); }   // olive inner wall
  w.add(cab); const seat = new THREE.Object3D(); seat.position.set(-1.64, -0.17, -0.2); w.add(seat); w.userData.seat = seat; w.userData.cabin = cab; w.userData.door = cab.getObjectByName('reardoor'); w.userData.ramp = cab.getObjectByName('ramp'); w.userData.scan = inner;
}
