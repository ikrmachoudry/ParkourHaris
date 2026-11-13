// merges Haris's Climbing_Ladder.fbx (baked by mixamo_bake.mjs as "ladder") into public/anim/clips.json, IN PLACE: the game moves the body up the ladder, so the clip's own sideways / forward offset is removed (only its sway and the vertical bob stay):  node tools/merge_ladder.mjs baked.json
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), dst = JSON.parse(fs.readFileSync('public/anim/clips.json', 'utf8'));
const c = src.clips.ladder, hips = c.hips.slice(); let mx = 0, my = 0, mz = 0; for (let i = 0; i < c.n; i++) { mx += hips[i * 3]; my += hips[i * 3 + 1]; mz += hips[i * 3 + 2]; } mx /= c.n; my /= c.n; mz /= c.n;
for (let i = 0; i < c.n; i++) { hips[i * 3] -= mx; hips[i * 3 + 1] -= my + 4; hips[i * 3 + 2] -= mz; }   // y: the Mixamo clip hangs ~73 cm above a standing body (it was made on a ladder): bring the mean to a walking-like height (-4 cm) so the feet stand on the rungs under the body
const out = { n: c.n, dur: c.dur, G: c.G, hips };
if (out.G.some((v) => !Number.isFinite(v)) || out.hips.some((v) => !Number.isFinite(v))) throw new Error('non-finite');
dst.clips.ladder = out; fs.writeFileSync('public/anim/clips.json', JSON.stringify(dst)); console.log('clips:', Object.keys(dst.clips).length, 'ladder', out.n, 'frames', out.dur, 's, removed offset', mx.toFixed(1), my.toFixed(1), mz.toFixed(1));
