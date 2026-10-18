import WebSocket from 'ws';
const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
const mk=()=>new Promise(res=>{const w=new WebSocket('ws://localhost:3998/ws');w.msgs=[];w.on('message',d=>w.msgs.push(JSON.parse(d)));w.on('open',()=>res(w));});
const [a,b,c,d]=[await mk(),await mk(),await mk(),await mk()];
let ch=0; for(const [w,n] of [[a,'A'],[b,'B'],[c,'C'],[d,'D']]){ w.send(JSON.stringify({t:'auto',name:n,char:ch++%3})); await wait(100); }
const last=(w)=>[...w.msgs].reverse().find(m=>m.t==='lobby');
console.log('A sees', last(a).players.length, 'players; D sees', last(d).players.length, 'codeA', last(a).code, 'codeD', last(d).code);
process.exit(0);
