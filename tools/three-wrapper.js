// Test-only: real three.js, but with a fake GPU renderer so main.js can run in Node.
export * from '../node_modules/three/build/three.module.js';
export class WebGLRenderer {
  constructor(o = {}) { this.domElement = o.canvas || { height: 600, toDataURL: () => 'data:image/png;base64,AA==' }; this.domElement.toDataURL = this.domElement.toDataURL || (() => 'data:'); this.shadowMap = {}; this.renders = 0; }
  setPixelRatio() {} setSize() {} setClearColor() {} dispose() {} forceContextLoss() {}
  render(scene, cam) { this.renders++; scene.updateMatrixWorld(); cam.updateMatrixWorld(); }
}
export class PMREMGenerator { constructor() {} fromScene() { return { texture: null }; } dispose() {} }
