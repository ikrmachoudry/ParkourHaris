import * as THREE from 'three';
import { makeHero } from '../public/js/glbactor.js';
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(900, 600); document.body.appendChild(r.domElement);
const sc = new THREE.Scene(); sc.background = new THREE.Color('#8fb0d0'); sc.add(new THREE.HemisphereLight('#fff', '#556', 1.4)); const dl = new THREE.DirectionalLight('#fff', 2); dl.position.set(3, 5, 4); sc.add(dl);
const cam = new THREE.PerspectiveCamera(40, 1.5, 0.1, 50);
const q = new URLSearchParams(location.search); const id = +(q.get('id') || 2), wp = q.get('w') || 'ak', pose = q.get('pose') || 'rifleAim', view = q.get('v') || 'back';
const h = makeHero(id, undefined, false); sc.add(h.group); window.__h = h;
let t = 0; const st = { weapon: wp, aiming: true, pose, speed: 0, grounded: true };
function fr() { t += 0.016; h.update(0.016, Object.assign({ x: 0, y: 0, z: 0, yaw: 0, weapon: wp, aiming: pose.endsWith('Aim'), onGround: true, speed: +(q.get('s') || 0), faceCam: true, mvF: +(q.get('f') || 0), mvR: +(q.get('r') || 0) }, {})); 
  const a = view === 'back' ? Math.PI : view === 'side' ? Math.PI / 2 : 0; cam.position.set(Math.sin(a) * 3.2, 1.5, Math.cos(a) * 3.2); cam.lookAt(0, 1.1, 0); r.render(sc, cam); requestAnimationFrame(fr); }
fr(); window.__ready = () => h.ready;
