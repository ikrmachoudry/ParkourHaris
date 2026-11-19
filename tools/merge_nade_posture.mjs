// v581: merges the CROUCHED and PRONE grenade throws (user's Throw_Grenade_1.fbx = crouch, Throw_Grenade.fbx = lying; baked by mixamo_bake.mjs as nadeA / nadeB) into public/anim/clips.json:  node tools/merge_nade_posture.mjs baked.json
// nadeCrouch = frames 30..74, the hand lets go at frame 57;  nadeProne = frames 34..78, release at frame 58
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), dst = JSON.parse(fs.readFileSync('public/anim/clips.json', 'utf8'));
const cut = (c, a, b, rel) => { const o = { n: b - a, dur: +((b - a) / 30).toFixed(4), rel: +((rel - a) / (b - a)).toFixed(3), G: c.G.slice(a * 68, b * 68), hips: c.hips.slice(a * 3, b * 3) }; if (o.G.some((v) => !Number.isFinite(v)) || o.hips.some((v) => !Number.isFinite(v))) throw new Error('non-finite'); return o; };
dst.clips.nadeCrouch = cut(src.clips.nadeA, 30, 74, 57); dst.clips.nadeProne = cut(src.clips.nadeB, 34, 78, 58);
fs.writeFileSync('public/anim/clips.json', JSON.stringify(dst)); console.log('rel', dst.clips.nadeCrouch.rel, dst.clips.nadeProne.rel, (fs.statSync('public/anim/clips.json').size / 1024).toFixed(0) + 'KB');
