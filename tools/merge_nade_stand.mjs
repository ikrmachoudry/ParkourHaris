// merges the standing grenade throw (Grenade_Throw.fbx baked by mixamo_bake.mjs as nadeStand) into public/anim/clips.json:  node tools/merge_nade_stand.mjs baked.json
// frames 34..76 (wind-up .. follow-through); the hand lets go at frame 61
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), dst = JSON.parse(fs.readFileSync('public/anim/clips.json', 'utf8'));
const c = src.clips.nadeStand, a = 34, b = 76, rel = 61;
const out = { n: b - a, dur: +((b - a) / 30).toFixed(4), rel: +((rel - a) / (b - a)).toFixed(3), G: c.G.slice(a * 68, b * 68), hips: c.hips.slice(a * 3, b * 3) };
if (out.G.some((v) => !Number.isFinite(v)) || out.hips.some((v) => !Number.isFinite(v))) throw new Error('non-finite');
dst.clips.nadeStand = out; fs.writeFileSync('public/anim/clips.json', JSON.stringify(dst)); console.log('clips:', Object.keys(dst.clips).join(','), out.n, out.rel);
