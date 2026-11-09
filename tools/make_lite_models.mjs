import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'fs'; import path from 'path';
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const [src, dst] = process.argv.slice(2);
fs.mkdirSync(dst, { recursive: true });
const files = [];
(function walk(d){ for (const f of fs.readdirSync(d)) { const p = path.join(d,f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.glb') && files.push(p); } })(src);
let a=0,b=0;
for (const f of files) {
  const doc = await io.read(f);
  const tc = textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [512,512], quality: 80 });
  if (f.endsWith('m4.glb')) await doc.transform(tc); else await doc.transform(tc, meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
  const out = path.join(dst, path.relative(src, f)); fs.mkdirSync(path.dirname(out), { recursive: true });
  await io.write(out, doc);
  const s0 = fs.statSync(f).size, s1 = fs.statSync(out).size; a+=s0; b+=s1;
  console.log(path.relative(src,f), s0, '->', s1);
}
console.log('TOTAL', a, '->', b);
