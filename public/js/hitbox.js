// The solid box of a vehicle = the real size of its model: every visible mesh except flat ones (the blob shadow under the car is a 0-thick plane that is wider than the body).
// Call it while the model is still at the origin with no rotation. Returns half length (z) and half width (x).
import * as THREE from 'three';
export function bodyHalf(obj) {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3(), tmp = new THREE.Box3();
  obj.traverse((o) => {
    if (!o.isMesh || !o.geometry || !o.visible) return;
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    tmp.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
    if (tmp.max.y - tmp.min.y < 0.05) return;
    box.union(tmp);
  });
  if (box.isEmpty()) return null;
  return { hl: (box.max.z - box.min.z) / 2, hw: (box.max.x - box.min.x) / 2 };
}
