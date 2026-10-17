// Flag textures drawn with canvas (client only): Pakistan and Palestine.
import * as THREE from 'three';

function draw(kind, w, h) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; const g = cv.getContext('2d');
  if (kind === 'pk') { // green field, white hoist stripe, white crescent and star
    g.fillStyle = '#01411c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w * 0.25, h);
    const cx = w * 0.625, cy = h * 0.5, R = h * 0.3;
    g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.fillStyle = '#ffffff'; g.fill();
    g.beginPath(); g.arc(cx + R * 0.28, cy - R * 0.12, R * 0.82, 0, Math.PI * 2); g.fillStyle = '#01411c'; g.fill();   // cut-out makes the crescent
    const sx = cx + R * 0.52, sy = cy - R * 0.34, r1 = R * 0.34, r2 = r1 * 0.4; // five-point star
    g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5 + 0.35, rr = i % 2 ? r2 : r1; g.lineTo(sx + Math.cos(a) * rr, sy + Math.sin(a) * rr); } g.closePath(); g.fillStyle = '#ffffff'; g.fill();
  } else { // Palestine: black / white / green stripes with a red triangle at the hoist
    g.fillStyle = '#000000'; g.fillRect(0, 0, w, h / 3);
    g.fillStyle = '#ffffff'; g.fillRect(0, h / 3, w, h / 3);
    g.fillStyle = '#007a3d'; g.fillRect(0, h * 2 / 3, w, h / 3);
    g.beginPath(); g.moveTo(0, 0); g.lineTo(w * 0.33, h / 2); g.lineTo(0, h); g.closePath(); g.fillStyle = '#ce1126'; g.fill();
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return tex;
}

const cache = {};
export function flagTexture(kind) { return cache[kind] || (cache[kind] = draw(kind, 768, 512)); }

// a big flag board standing against a wall
export function flagBoard(kind, w, h) {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: flagTexture(kind), toneMapped: false, side: THREE.DoubleSide }));
  g.add(board);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, h + 1.2, 0.3), new THREE.MeshStandardMaterial({ color: '#f4f1e8', roughness: 0.5 }));
  frame.position.z = -0.2; g.add(frame);
  return g;
}
