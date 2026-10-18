import { newWar, stepWar, cmdWar, strength } from '../public/js/warsim.js';
let bad=0; const ok=(c,m)=>{ if(!c){bad++;console.log('FAIL',m);} else console.log('ok',m); };
// AI alone vs idle humans: AI should grow and eventually win
for (const n of [1,4]) {
  const w=newWar(n); const vs=w.units.filter(u=>u.team===0);
  const tree=w.nodes.find(x=>x.kind==='berry'&&x.z>0);
  cmdWar(w,0,{c:'gather',tgt:tree.id,ids:vs.map(u=>u.id)});
  let t=0; while(!w.over&&t<600){stepWar(w,0.1);w.ev.length=0;t+=0.1;}
  const ai=w.units.filter(u=>u.team===1);
  console.log('n',n,'over',w.over,'t',w.t.toFixed(0),'aiUnits',ai.length,'mil',ai.filter(u=>u.kind!=='vil').length,'bld',w.blds.filter(b=>b.team===1).map(b=>b.kind).join());
  ok(ai.length>8,'ai grows n='+n);
}
// human gathering + training works
const w=newWar(1); const vs=w.units.filter(u=>u.team===0), tc=w.blds.find(b=>b.team===0);
const nd=w.nodes.find(x=>x.kind==='tree'&&x.z>0);
cmdWar(w,0,{c:'gather',tgt:nd.id,ids:vs.map(u=>u.id)});
const w0=w.res[0].wood; for(let i=0;i<600;i++)stepWar(w,0.1);
ok(w.res[0].wood>w0,'wood gathered '+(w.res[0].wood-w0|0));
const r=cmdWar(w,0,{c:'train',b:tc.id,kind:'vil'}); ok(r.ok,'train vil');
for(let i=0;i<100;i++)stepWar(w,0.1); ok(w.units.filter(u=>u.team===0).length===5,'vil spawned');
const pl=cmdWar(w,0,{c:'place',kind:'house',x:16,z:63,ids:vs.map(u=>u.id)}); ok(pl.ok,'place house '+(pl.msg||''));
for(let i=0;i<400;i++)stepWar(w,0.1); ok(w.blds.some(b=>b.team===0&&b.kind==='house'&&b.built>=1),'house built');
console.log(bad?'FAILED':'ALL OK'); process.exit(bad?1:0);
