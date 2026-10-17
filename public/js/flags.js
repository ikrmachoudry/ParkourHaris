// Flag textures drawn with canvas (client only): Pakistan and Palestine.
import * as THREE from 'three';

function draw(kind, w, h) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; const g = cv.getContext('2d');
  if (kind === 'pk') { // official flag: dark green field, white hoist stripe (1/4), white crescent and five-point star
    g.fillStyle = '#01411c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w * 0.25, h);
    const cx = w * 0.625, cy = h * 0.5, R = h * 0.31;
    g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.fillStyle = '#ffffff'; g.fill();
    g.beginPath(); g.arc(cx + R * 0.27, cy - R * 0.14, R * 0.8, 0, Math.PI * 2); g.fillStyle = '#01411c'; g.fill();   // cut-out makes the crescent
    const sx = cx + R * 0.46, sy = cy - R * 0.36, r1 = R * 0.36, r2 = r1 * 0.382; // five-point star, tilted along the crescent opening
    g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5 + 0.52, rr = k % 2 ? r2 : r1; g.lineTo(sx + Math.cos(a) * rr, sy + Math.sin(a) * rr); } g.closePath(); g.fillStyle = '#ffffff'; g.fill();
  } else if (kind === 'es') { // Spain: red / yellow (double height) / red, with the coat of arms on the hoist side
    g.fillStyle = '#aa151b'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#f1bf00'; g.fillRect(0, h / 4, w, h / 2);
    spainArms(g, w * 0.36, h * 0.5, h * 0.42);
  } else { // Palestine: black / white / green stripes with a red triangle at the hoist
    g.fillStyle = '#000000'; g.fillRect(0, 0, w, h / 3);
    g.fillStyle = '#ffffff'; g.fillRect(0, h / 3, w, h / 3);
    g.fillStyle = '#007a3d'; g.fillRect(0, h * 2 / 3, w, h / 3);
    g.beginPath(); g.moveTo(0, 0); g.lineTo(w * 0.33, h / 2); g.lineTo(0, h); g.closePath(); g.fillStyle = '#ce1126'; g.fill();
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return tex;
}


// Coat of arms of Spain (simplified but recognisable): crowned quartered shield, pomegranate, central blue oval, two pillars with a ribbon.
function spainArms(g, cx, cy, s) {
  const gold = '#d9a400', red = '#c8102e', blue = '#0b3d91', white = '#f4f4f4', purple = '#7a2a8a';
  // pillars of Hercules with ribbon
  for (const sd of [-1, 1]) {
    g.fillStyle = '#ffffff'; g.fillRect(cx + sd * s * 0.98 - s * 0.09, cy - s * 0.62, s * 0.18, s * 1.18);
    g.fillStyle = '#b6b6b6'; g.fillRect(cx + sd * s * 0.98 + (sd > 0 ? 0 : -s * 0.03), cy - s * 0.62, s * 0.03, s * 1.18);
    g.fillStyle = gold; g.fillRect(cx + sd * s * 0.98 - s * 0.14, cy - s * 0.7, s * 0.28, s * 0.1); g.fillRect(cx + sd * s * 0.98 - s * 0.14, cy + s * 0.54, s * 0.28, s * 0.08);
    g.beginPath(); g.arc(cx + sd * s * 0.98, cy - s * 0.78, s * 0.1, 0, Math.PI * 2); g.fillStyle = gold; g.fill();
    g.fillStyle = red; g.fillRect(cx + sd * s * 0.98 - s * 0.1, cy - s * 0.52, s * 0.2, s * 0.1);
  }
  g.fillStyle = red; g.fillRect(cx - s * 0.95, cy + s * 0.1, s * 1.9, s * 0.16); g.fillStyle = '#ffffff'; g.fillRect(cx - s * 0.9, cy + s * 0.13, s * 1.8, s * 0.04);
  // shield (square top, rounded bottom)
  const sw = s * 1.16, sh = s * 1.3, x0 = cx - sw / 2, y0 = cy - sh * 0.45;
  g.save(); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + sw, y0); g.lineTo(x0 + sw, y0 + sh * 0.55); g.quadraticCurveTo(x0 + sw, y0 + sh, cx, y0 + sh); g.quadraticCurveTo(x0, y0 + sh, x0, y0 + sh * 0.55); g.closePath(); g.clip();
  g.fillStyle = red; g.fillRect(x0, y0, sw / 2, sh * 0.5);                                   // Castile
  g.fillStyle = white; g.fillRect(x0 + sw / 2, y0, sw / 2, sh * 0.5);                           // Leon
  g.fillStyle = gold; g.fillRect(x0, y0 + sh * 0.5, sw / 2, sh * 0.5);                          // Aragon
  for (let k = 0; k < 4; k++) { g.fillStyle = red; g.fillRect(x0 + sw * 0.07 + k * sw * 0.115, y0 + sh * 0.5, sw * 0.055, sh * 0.5); }
  g.fillStyle = red; g.fillRect(x0 + sw / 2, y0 + sh * 0.5, sw / 2, sh * 0.5);                  // Navarre
  g.strokeStyle = gold; g.lineWidth = s * 0.03; g.beginPath(); g.moveTo(x0 + sw / 2, y0 + sh * 0.5); g.lineTo(x0 + sw, y0 + sh * 0.5); g.moveTo(x0 + sw * 0.75, y0 + sh * 0.5); g.lineTo(x0 + sw * 0.75, y0 + sh); g.moveTo(x0 + sw / 2, y0 + sh * 0.75); g.lineTo(x0 + sw, y0 + sh * 0.75); g.stroke();
  // castle
  g.fillStyle = gold; const kx = x0 + sw * 0.25, ky = y0 + sh * 0.27; g.fillRect(kx - sw * 0.11, ky - sh * 0.02, sw * 0.22, sh * 0.17); g.fillRect(kx - sw * 0.06, ky - sh * 0.1, sw * 0.12, sh * 0.1);
  for (const o of [-0.11, -0.04, 0.03]) g.fillRect(kx + sw * o, ky - sh * 0.15, sw * 0.04, sh * 0.06);
  g.fillStyle = blue; g.fillRect(kx - sw * 0.025, ky + sh * 0.05, sw * 0.05, sh * 0.1);
  // lion
  g.fillStyle = purple; const lx = x0 + sw * 0.75, ly = y0 + sh * 0.27; g.beginPath(); g.ellipse(lx, ly, sw * 0.1, sh * 0.1, 0, 0, Math.PI * 2); g.fill(); g.beginPath(); g.arc(lx + sw * 0.08, ly - sh * 0.09, sw * 0.05, 0, Math.PI * 2); g.fill(); g.fillRect(lx - sw * 0.12, ly + sh * 0.04, sw * 0.05, sh * 0.1); g.fillRect(lx + sw * 0.05, ly + sh * 0.04, sw * 0.05, sh * 0.1);
  // pomegranate point
  g.fillStyle = red; g.beginPath(); g.arc(cx, y0 + sh * 0.9, sw * 0.08, 0, Math.PI * 2); g.fill(); g.fillStyle = '#2e7d32'; g.fillRect(cx - sw * 0.02, y0 + sh * 0.8, sw * 0.04, sh * 0.05);
  g.restore();
  g.strokeStyle = '#1a1a1a'; g.lineWidth = s * 0.025; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + sw, y0); g.lineTo(x0 + sw, y0 + sh * 0.55); g.quadraticCurveTo(x0 + sw, y0 + sh, cx, y0 + sh); g.quadraticCurveTo(x0, y0 + sh, x0, y0 + sh * 0.55); g.closePath(); g.stroke();
  // central blue oval with three lilies
  g.beginPath(); g.ellipse(cx, cy + sh * 0.02, sw * 0.17, sh * 0.2, 0, 0, Math.PI * 2); g.fillStyle = blue; g.fill(); g.lineWidth = s * 0.025; g.strokeStyle = red; g.stroke();
  g.fillStyle = white; for (const [ox, oy] of [[-0.06, -0.06], [0.06, -0.06], [0, 0.07]]) { g.beginPath(); g.arc(cx + sw * ox, cy + sh * (0.02 + oy), sw * 0.03, 0, Math.PI * 2); g.fill(); }
  // crown
  g.fillStyle = gold; g.beginPath(); g.moveTo(cx - sw * 0.28, y0 - sh * 0.02); g.lineTo(cx - sw * 0.28, y0 - sh * 0.2); g.lineTo(cx - sw * 0.14, y0 - sh * 0.12); g.lineTo(cx, y0 - sh * 0.24); g.lineTo(cx + sw * 0.14, y0 - sh * 0.12); g.lineTo(cx + sw * 0.28, y0 - sh * 0.2); g.lineTo(cx + sw * 0.28, y0 - sh * 0.02); g.closePath(); g.fill();
  g.beginPath(); g.arc(cx, y0 - sh * 0.3, sw * 0.06, 0, Math.PI * 2); g.fill(); g.fillStyle = red; g.fillRect(cx - sw * 0.2, y0 - sh * 0.11, sw * 0.4, sh * 0.05);
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

// painted text boards (English + Urdu). The Urdu font stack falls back to whatever Arabic-script font the device has.
const URDU_FONTS = '"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif';
const LATIN_FONTS = '"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';
export function textTexture(text, ratio, o = {}) {
  const cw = 1024, ch = Math.round(cw / ratio), cv = document.createElement('canvas'); cv.width = cw; cv.height = ch; const g = cv.getContext('2d');
  const gr = g.createLinearGradient(0, 0, cw, ch); gr.addColorStop(0, (o.bg || ['#1b1464', '#3a2d9e'])[0]); gr.addColorStop(1, (o.bg || ['#1b1464', '#3a2d9e'])[1]);
  g.fillStyle = gr; g.fillRect(0, 0, cw, ch);
  g.lineWidth = ch * 0.05; g.strokeStyle = o.border || '#ffd23f'; g.strokeRect(ch * 0.05, ch * 0.05, cw - ch * 0.1, ch - ch * 0.1);
  const fam = o.urdu ? URDU_FONTS : LATIN_FONTS;
  let size = ch * (o.urdu ? 0.36 : 0.5);
  g.textAlign = 'center'; g.textBaseline = 'alphabetic'; if (o.urdu) g.direction = 'rtl';
  // fit the WHOLE word inside the board (width and real glyph height - Nastaliq letters are tall), then centre it by its measured box
  const maxW = cw * (o.urdu ? 0.62 : 0.86), maxH = ch * (o.urdu ? 0.6 : 0.62);
  let asc = size * 0.8, desc = size * 0.2;
  for (let k = 0; k < 3; k++) {
    g.font = `${size}px ${fam}`; const m = g.measureText(text);
    asc = m.actualBoundingBoxAscent > 0 ? m.actualBoundingBoxAscent : size * 0.8; desc = m.actualBoundingBoxDescent > 0 ? m.actualBoundingBoxDescent : size * 0.2;
    const f = Math.min(1, maxW / Math.max(1, m.width), maxH / Math.max(1, asc + desc)); if (f >= 0.99) break; size *= f;
  }
  const ty = ch / 2 + (asc - desc) / 2;
  g.lineJoin = 'round'; g.lineWidth = size * 0.12; g.strokeStyle = o.stroke || '#000000'; g.strokeText(text, cw / 2, ty);
  g.fillStyle = o.fg || '#ffd23f'; g.fillText(text, cw / 2, ty);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return tex;
}
export function textBoard(text, w, h, o = {}) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: textTexture(text, w / h, o), toneMapped: false, side: THREE.DoubleSide })));
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, h + 0.8, 0.3), new THREE.MeshStandardMaterial({ color: o.frame || '#f4f1e8', roughness: 0.5 }));
  frame.position.z = -0.2; g.add(frame);
  return g;
}
