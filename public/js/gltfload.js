// v462: ANDROID-LITE models. Android phones get the compressed copies in models-lite/ (meshopt geometry + 512 px WebP textures, 23 MB -> 9 MB); desktop, iPhone and iPad keep the original HD files.
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
export const mkLoader = () => { const l = new GLTFLoader(); if (typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent || '')) l.setMeshoptDecoder(MeshoptDecoder); return l; };
