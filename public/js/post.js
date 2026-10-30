// CINEMATIC GRAPHICS (PC only): bloom on bright lights/sun, a film-style colour grade (richer colours, warm highlights, cool shadows) and a soft vignette.
// Renders the scene into an HDR target (4x MSAA), then bloom -> ACES tone map -> grade. Phones and LOW mode never create it (see main.js).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const GRADE = {
  uniforms: { tDiffuse: { value: null }, sat: { value: 1.14 }, contrast: { value: 1.07 }, vig: { value: 0.32 }, t: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float sat, contrast, vig, t; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);                                             // richer colour
      c = (c - 0.5) * contrast + 0.5;                                       // a little punch
      c += vec3(0.030, 0.012, -0.020) * smoothstep(0.45, 1.0, l);           // warm highlights
      c += vec3(-0.018, 0.004, 0.026) * (1.0 - smoothstep(0.0, 0.45, l));   // cool shadows
      vec2 d = vUv - 0.5; float v = dot(d, d);
      c *= 1.0 - vig * smoothstep(0.10, 0.50, v);                           // soft vignette
      c += (fract(sin(dot(vUv * 1531.0 + t, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;   // dither: no banding in the sky
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`,
};

export function makePost(renderer) {
  let composer = null, rp = null, bloom = null, grade = null, w = 0, h = 0, pr = 0;
  const build = () => {
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt); composer.setPixelRatio(1); composer.setSize(size.x, size.y);
    rp = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.32, 0.55, 0.92);   // strength, radius, threshold (only the really bright things glow)
    grade = new ShaderPass(GRADE);
    composer.addPass(rp); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(grade);
    w = size.x; h = size.y;
  };
  return {
    render(scene, camera, dt) {
      if (!composer) build();
      const s = renderer.getDrawingBufferSize(new THREE.Vector2()); if (s.x !== w || s.y !== h) { composer.setSize(s.x, s.y); w = s.x; h = s.y; }
      rp.scene = scene; rp.camera = camera; grade.uniforms.t.value = (grade.uniforms.t.value + 0.37) % 100; composer.render(dt);
    },
    dispose() { if (composer) { composer.dispose(); composer = null; } },
  };
}
