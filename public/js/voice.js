// Team voice chat (v215): WebRTC, one audio connection between every two players of a room (a "mesh": fine for up to ~6 people).
// The audio goes phone -> phone; the game server only relays the small connect messages ('vc'). Mic is OFF until you tap it.
// A phone only pays for it while a mic is open or a teammate talks (Opus ~24 kbps per voice), the 3D drawing is not touched.
import { av } from './assetver.js';
const STUN = [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }];

const PHONE = typeof navigator !== 'undefined' && (/iP(hone|ad|od)|Android/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
// v400: laptops get the echo canceller + voice gate (aec-worklet.js); phones never (weak CPUs: push-to-talk / the phone's own echo cancelling there). ph_aec=0 in localStorage switches it off.
const AEC_OK = !PHONE && typeof window !== 'undefined' && typeof window.AudioWorkletNode !== 'undefined' && (() => { try { return localStorage.getItem('ph_aec') !== '0'; } catch { return true; } })();
export class Voice {
  constructor(net) {
    this.net = net; this.me = 0; this.peers = new Map(); this.names = new Map(); this.mic = false; this.spk = true; this.stream = null;
    this.ice = STUN; this.iceLoaded = false; this.ctx = null; this.ana = null; this.level = new Map(); this.speaking = new Set(); this.timer = 0;
    this.want = false; this.vol = 1; this.muted = new Set(); this.onChange = null; this.holdMode = false; this.err = '';
    let sv = null; try { sv = localStorage.getItem('ph_ptt'); } catch { /* ignore */ }
    this.aec = null; this.ptt = sv === null ? !AEC_OK : sv === '1'; this.held = false;   // v386 (PUBG style): phones default to PUSH TO TALK; v400: a laptop with the echo canceller defaults to the voice-activated mic
  }
  // ---- room membership: call with everybody in the room (including me) whenever the lobby changes
  setRoom(myId, players, on) {
    this.me = myId; this.names = new Map(players.map((p) => [p.id, p.name]));
    if (!on || !window.RTCPeerConnection) { for (const id of [...this.peers.keys()]) this.drop(id); this.changed(); return; }   // alone in the room: connections close, but the mic button keeps its state
    const want = new Set(players.map((p) => p.id).filter((id) => id !== myId));
    for (const id of [...this.peers.keys()]) if (!want.has(id)) this.drop(id);
    (this.iceP || (this.iceP = this.loadIce())).then(() => { if (this.me !== myId) return; for (const id of want) if (this.names.has(id) && !this.peers.has(id)) this.connect(id); for (const id of want) this.replayEarly(id); this.changed(); });
    if (!this.timer) this.timer = setInterval(() => this.poll(), 140);
    this.changed();
  }
  async loadIce() { try { const r = await fetch('/ice', { cache: 'no-store' }); const j = await r.json(); if (j && Array.isArray(j.iceServers) && j.iceServers.length) this.ice = j.iceServers; } catch { /* STUN only */ } }
  mk(id) {
    const pc = new RTCPeerConnection({ iceServers: this.ice, bundlePolicy: 'max-bundle' });
    const o = { id, pc, audio: null, an: null, polite: this.me > id, makingOffer: false, pend: [], sender: null, sid: Math.random().toString(36).slice(2, 10), rsid: null, pendI: [], born: performance.now(), cand: { h: 0, s: 0, r: 0 }, err: '' };   // v437: sid = this connection's own id, rsid = the id of the other side's connection (stops old messages from an earlier connection reaching a new one)
    // v437: ONE side makes the offer (the lower id) and the other only answers (no more two offers colliding: that left one direction silent or the connection stuck). The offerer makes one fixed audio line; the answerer uses the line that comes with the offer. The mic is plugged in / out with replaceTrack, no new negotiation.
    if (!o.polite) { const tr = pc.addTransceiver('audio', { direction: 'sendrecv' }); o.sender = tr.sender; o.recv = tr.receiver; }
    pc.onicecandidate = (e) => { if (e.candidate) { const ty = e.candidate.type || ((/ typ (\w+)/.exec(e.candidate.candidate || '') || [])[1]); if (ty === 'host') o.cand.h++; else if (ty === 'srflx') o.cand.s++; else if (ty === 'relay') o.cand.r++; this.sig(id, 'i', e.candidate.toJSON ? e.candidate.toJSON() : e.candidate, o); } };
    pc.onicecandidateerror = (e) => { if (e.errorCode >= 300 && e.errorCode < 700) { o.err = String(e.errorCode); this.changed(); } };   // v439: a 401 here = the relay refused our login
    pc.ontrack = (e) => {
      const st = e.streams && e.streams[0] ? e.streams[0] : new MediaStream([e.track]);
      if (!o.audio) { o.audio = new Audio(); o.audio.autoplay = true; o.audio.playsInline = true; o.audio.style.display = 'none'; try { document.body.appendChild(o.audio); } catch { /* ignore */ } }   // v384: in the page, so the laptop's echo canceller can hear what is being played
      o.rs = st; this.addRef(id); o.audio.srcObject = st; o.audio.volume = this.spk && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !this.spk || this.muted.has(id);   // v381: iPhone Safari ignores .volume, only .muted silences it
      const p = o.audio.play(); if (p && p.catch) p.catch(() => { this._needTap = true; this.changed(); });
    };
    pc.onnegotiationneeded = async () => {
      if (o.polite) return;
      try { o.makingOffer = true; await pc.setLocalDescription(); this.sig(id, 'o', pc.localDescription.toJSON ? pc.localDescription.toJSON() : pc.localDescription, o); } catch { /* retry on next change */ } finally { o.makingOffer = false; }
    };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'connected') { this.rebind(o); if (this.tries) this.tries.delete(id); } if (pc.connectionState === 'failed') { try { pc.restartIce(); } catch { /* ignore */ } } this.changed(); };
    const t = this.tx(); if (t) this.setTrack(o, t);
    return o;
  }
  // v223 (iPhone fix): Safari does not always re-use our pre-made audio line when the other side's offer arrives, so the mic could sit on an unused line and nobody heard an iPhone. The mic track is now put on EVERY audio sender of the connection (the unused one is harmless).
  setTrack(o, t) { try { for (const sn of o.pc.getSenders()) sn.replaceTrack(t).catch(() => {}); } catch { /* ignore */ } }
  rebind(o) { const t = this.tx(); if (t && t.readyState === 'live') this.setTrack(o, t); }
  tx() { return this.aec ? this.aec.track : (this.stream && this.stream.getAudioTracks()[0]) || null; }   // the track that goes to the other players: the cleaned one on a laptop, the raw mic otherwise   // after every negotiation: put the mic on the line again
  connect(id) { if (this.peers.has(id)) return; this.peers.set(id, this.mk(id)); }
  drop(id) { const o = this.peers.get(id); if (!o) return; try { o.pc.close(); } catch { /* ignore */ } if (o.audio) { o.audio.srcObject = null; try { o.audio.remove(); } catch { /* ignore */ } } this.dropRef(id); this.peers.delete(id); this.level.delete(id); this.speaking.delete(id); this.changed(); }
  sig(to, k, d, o) { o = o || this.peers.get(to); if (!o || this.peers.get(to) !== o) return; this.net.send({ t: 'vc', to, k, d: Object.assign({}, d, { _s: o.sid, _r: o.rsid || 0 }) }); }   // v437: every message carries the sender's connection id and the id it believes the other side has
  // ---- messages from the other players (relayed by the server)
  async onSignal(m) {
    if (!window.RTCPeerConnection || !m.d) return;
    const id = m.from, S = m.d._s || 0, R = m.d._r || 0, d = Object.assign({}, m.d); delete d._s; delete d._r;
    let o = this.peers.get(id);
    if (!o) {   // the other side was faster than our own lobby update: keep its connect messages for a few seconds and replay them as soon as we know the player (before, the offer was thrown away and both sides waited for each other forever)
      if (!this.names.has(id)) { const e = (this.early || (this.early = new Map())).get(id) || { t: 0, l: [] }; if (m.k === 'o') e.l = []; e.t = Date.now(); if (e.l.length < 40) e.l.push(m); this.early.set(id, e); return; }
      if (m.k !== 'o') return;
      this.connect(id); o = this.peers.get(id);
    }
    try {
      if (m.k === 'o') {   // "perfect negotiation": the higher id gives way if both sides offer at once
        if (o.rsid && o.rsid !== S) { this.drop(id); this.connect(id); o = this.peers.get(id); }   // the other side started a fresh connection: so do we
        const pc = o.pc; if (!o.polite) return;   // only the higher id answers; an offer that reaches the offering side is a leftover and is ignored
        o.rsid = S;
        await pc.setRemoteDescription(d);
        for (const t of pc.getTransceivers()) { try { if (t.receiver && t.receiver.track && t.receiver.track.kind === 'audio') { t.direction = 'sendrecv'; o.sender = t.sender; } } catch { /* ignore */ } }   // our mic goes out on the line the offer brought
        this.rebind(o); await pc.setLocalDescription(); this.sig(id, 'a', pc.localDescription.toJSON ? pc.localDescription.toJSON() : pc.localDescription, o); this.rebind(o); this.flushI(o);
      } else if (m.k === 'a') { if (R !== o.sid) return; if (o.rsid && o.rsid !== S) return; const pc = o.pc; if (pc.signalingState === 'have-local-offer') { o.rsid = S; await pc.setRemoteDescription(d); this.rebind(o); this.flushI(o); } }
      else if (m.k === 'i') { if (!o.rsid) { if (o.pendI.length < 60) o.pendI.push({ s: S, d }); return; } if (S !== o.rsid) return; try { await o.pc.addIceCandidate(d); } catch { /* candidate for an old negotiation */ } }
    } catch { /* ignore a bad message */ }
  }
  flushI(o) { const l = o.pendI; o.pendI = []; for (const c of l) if (c.s === o.rsid) o.pc.addIceCandidate(c.d).catch(() => {}); }
  replayEarly(id) { const e = this.early && this.early.get(id); if (!e) return; this.early.delete(id); if (Date.now() - e.t > 15000) return; for (const m of e.l) this.onSignal(m); }
  // ---- mic / speaker
  actx() { if (!this.ctx) { const C = window.AudioContext || window.webkitAudioContext; this.ctx = new C(); } if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); return this.ctx; }
  // The mic is STICKY: once the player taps it on it stays on until the player taps it off. The browser or phone may cut the microphone (call, other app,
  // audio switch): then it is quietly opened again, the button never flips by itself. Only a refused permission turns it off (with a message).
  async setMic(on) {
    this.err = '';
    if (!on) { this.want = false; this.mic = false; this.releaseMic(); this.changed(); return true; }
    this.want = true;
    if (this.mic && this.stream && this.stream.getAudioTracks().some((t) => t.readyState === 'live')) return true;
    if (this._opening) return this._opening;
    return (this._opening = this.openMic().finally(() => { this._opening = null; }));
  }
  async openMic() {
    const ep = this.epoch = this.epoch || 0, all = this.allStreams || (this.allStreams = new Set());   // v381: every stream ever opened is remembered so closing the mic really stops ALL of them
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { this.want = false; this.err = 'Voice needs a secure (https) page'; this.changed(); return false; }
    this.actx(); try { if (navigator.audioSession) navigator.audioSession.type = 'play-and-record'; } catch (e) { /* ignore */ }   // v381: set BEFORE the mic opens so iPhone uses its voice-processing (echo cancelling) route
    let st = null, e1 = null;
    for (const c of [{ echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1, advanced: [{ googEchoCancellation: true }, { googExperimentalEchoCancellation: true }, { googHighpassFilter: true }] }, { echoCancellation: { ideal: true }, noiseSuppression: { ideal: true }, autoGainControl: { ideal: true }, channelCount: { ideal: 1 } }, { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, true]) {   // v381: voice processing (echo cancel) requested first   // the second try: a plain mic, in case the phone refuses the fancy settings
      try { st = await Promise.race([navigator.mediaDevices.getUserMedia({ audio: c, video: false }), new Promise((_, rej) => setTimeout(() => rej(Object.assign(new Error('timeout'), { name: 'Timeout' })), 15000))]); break; } catch (e) { e1 = e; if (e && (e.name === 'NotAllowedError' || e.name === 'Timeout')) break; }   // v382: after a timeout do NOT ask again (Android showed a second, stacked request)

    }
    if (!st) { this.want = false; this.mic = false; this.err = e1 && (e1.name === 'NotAllowedError' || e1.name === 'SecurityError') ? 'Mic is blocked. Browser menu > Site settings > Microphone > Allow, then reload' : e1 && e1.name === 'Timeout' ? 'The phone did not answer the mic request. Tap the mic again' : e1 && e1.name === 'NotFoundError' ? 'No microphone found on this device' : 'Could not open the mic (' + ((e1 && e1.name) || 'error') + ')'; this.changed(); return false; }
    all.add(st);
    try { if (navigator.audioSession) navigator.audioSession.type = 'play-and-record'; } catch (e) { /* ignore */ }   // v239 iPhone: keep the game sounds on the loudspeaker while the mic is open
    if (!this.want || this.epoch !== ep) { for (const t of st.getTracks()) t.stop(); all.delete(st); return false; }   // v381: the player closed the mic while the phone was still opening it (epoch changed): drop it at once   // the player tapped it off again while the phone was asking
    if (this.stream) for (const t of this.stream.getTracks()) t.stop();
    this.stream = st; this.mic = true;
    const t = st.getAudioTracks()[0]; await this.buildAec(st, ep); if (this.epoch !== ep || !this.want) { return false; }
    t.enabled = this.aec ? true : !document.hidden && (this.ptt ? this.held : true); if (this.aec) this.aec.track.enabled = !document.hidden && (this.ptt ? this.held : true);
    const now0 = performance.now(); this._opens = (this._opens || []).filter((x) => now0 - x < 20000); this._opens.push(now0);
    t.onended = () => { if (this.stream !== st) return; this.stream = null; this.mic = this.want; if (this.want) { if ((this._opens || []).length >= 5) { this.want = false; this.mic = false; this.err = 'The phone keeps closing the mic (another app may be using it). Tap the mic to try again'; this.releaseMic(); } else this.reopenSoon(); } this.changed(); };   // v382: stop the open/close loop (it made the Android mic indicator blink)
    for (const o of this.peers.values()) this.setTrack(o, this.tx());
    this.selfAn = null; try { if (/iP(hone|ad|od)|Android/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) throw 0; const c = this.actx(); this.selfAn = c.createAnalyser(); this.selfAn.fftSize = 256; c.createMediaStreamSource(st).connect(this.selfAn); } catch { /* no meter */ }
    this.changed(); return true;
  }
  // v386: ONE place decides if the mic line carries sound: not in the background, and (push-to-talk) only while the talk key / button is held, and (open mic) not while a teammate is talking
  applyEn(far) { const t = this.tx(); if (!t) return; if (this.aec) far = false; const en = !document.hidden && (this.ptt ? this.held : !far); if (t.enabled !== en) t.enabled = en; }
  setPtt(on, save = true) { this.ptt = !!on; this.held = false; if (save) try { localStorage.setItem('ph_ptt', on ? '1' : '0'); } catch { /* ignore */ } this.applyEn(false); this.gateMsg(); this.changed(); }
  setHeld(h) { if (this.held === !!h) return; this.held = !!h; this.applyEn(false); this.changed(true); }
  reopenSoon() { clearTimeout(this._ro); this._ro = setTimeout(() => { if (this.want && !(this.stream && this.stream.getAudioTracks().some((t) => t.readyState === 'live'))) this.openMic().then((ok) => { if (!ok && this.want) this.reopenSoon(); }); }, 800); }
  // app in the background: the mic track is paused (silent) but the button stays on; coming back resumes it
  visibility(hidden) { if (hidden) this.held = false; this.applyEn(false); if (!hidden && this.want) this.reopenSoon(); }
  releaseMic() {   // v381: close the mic for REAL (iPhone kept sending): the sender lines are emptied, every stream ever opened is stopped, pending re-opens are cancelled, and the phone's audio session goes back to normal playback
    this.epoch = (this.epoch || 0) + 1; clearTimeout(this._ro);
    for (const o of this.peers.values()) { this.setTrack(o, null); try { for (const sn of o.pc.getSenders()) if (sn.track) { sn.track.enabled = false; sn.track.stop(); } } catch { /* ignore */ } }
    if (this.stream) { for (const t of this.stream.getTracks()) { t.onended = null; t.enabled = false; t.stop(); } this.stream = null; }
    if (this.allStreams) { for (const st of this.allStreams) for (const t of st.getTracks()) { t.onended = null; t.enabled = false; t.stop(); } this.allStreams.clear(); }
    this.closeAec(); this.selfAn = null; this.speaking.delete(this.me);
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* ignore */ }
  }
  setSpk(on) { this.spk = on; this.refGain(); for (const [id, o] of this.peers) if (o.audio) { o.audio.volume = on && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !on || this.muted.has(id); } this.changed(); }   // v381: .muted as well (iPhone ignores .volume)
  refGain() { if (!this.aec) return; for (const [id, r] of this.aec.refs) r.g.gain.value = this.spk && !this.muted.has(id) ? this.vol : 0; }
  setVol(v) { this.vol = Math.max(0, Math.min(1, v)); this.setSpk(this.spk); }
  toggleMute(id) { if (this.muted.has(id)) this.muted.delete(id); else this.muted.add(id); this.refGain(); const o = this.peers.get(id); if (o && o.audio) { o.audio.volume = this.spk && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !this.spk || this.muted.has(id); } this.changed(); }
  resumeAudio() { this._needTap = false; for (const o of this.peers.values()) if (o.audio && o.audio.paused && o.audio.srcObject) o.audio.play().catch(() => {}); if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); }
  // v400 LAPTOP ECHO CANCELLER: mic -> [aec worklet: subtract what the speakers play, then a voice gate] -> the track sent to the others. The speakers' signal is tapped (not re-routed) from the remote streams.
  async buildAec(st, ep) {
    this.closeAec(); if (!AEC_OK) return false;
    try {
      const C = window.AudioContext || window.webkitAudioContext, ctx = new C({ sampleRate: 16000, latencyHint: 'interactive' });
      await Promise.race([ctx.audioWorklet.addModule(av('js/aec-worklet.js')), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 6000))]);
      if (this.epoch !== ep) { ctx.close().catch(() => {}); return false; }
      const node = new AudioWorkletNode(ctx, 'aec', { numberOfInputs: 2, numberOfOutputs: 1, outputChannelCount: [1], channelCount: 1, channelCountMode: 'explicit' }), dest = ctx.createMediaStreamDestination();
      ctx.createMediaStreamSource(st).connect(node, 0, 0); node.connect(dest); if (ctx.state === 'suspended') await ctx.resume().catch(() => {});
      const track = dest.stream.getAudioTracks()[0]; if (!track) throw new Error('no track');
      this.aec = { ctx, node, dest, track, refs: new Map() }; this.gateMsg(); for (const id of this.peers.keys()) this.addRef(id); return true;
    } catch (e) { this.aec = null; return false; }   // anything wrong: the plain mic goes out exactly as before
  }
  gateMsg() { if (this.aec) try { this.aec.node.port.postMessage({ gate: !this.ptt }); } catch { /* ignore */ } }
  addRef(id) {
    const a = this.aec, o = this.peers.get(id); if (!a || !o || !o.rs || a.refs.has(id)) return;
    try { const src = a.ctx.createMediaStreamSource(o.rs), g = a.ctx.createGain(); g.gain.value = this.spk && !this.muted.has(id) ? this.vol : 0; src.connect(g); g.connect(a.node, 0, 1); a.refs.set(id, { src, g }); } catch { /* no reference from this one */ }
  }
  dropRef(id) { const a = this.aec, r = a && a.refs.get(id); if (!r) return; try { r.src.disconnect(); r.g.disconnect(); } catch { /* ignore */ } a.refs.delete(id); }
  closeAec() { const a = this.aec; if (!a) return; this.aec = null; try { a.track.enabled = false; a.track.stop(); } catch { /* ignore */ } try { a.node.disconnect(); } catch { /* ignore */ } try { a.ctx.close(); } catch { /* ignore */ } }
  // ---- who is talking (8 times a second, only reads a tiny buffer)
  lvl(an) { if (!an) return 0; const b = this.buf || (this.buf = new Uint8Array(128)); an.getByteTimeDomainData(b); let m = 0; for (let i = 0; i < b.length; i += 2) { const v = Math.abs(b[i] - 128); if (v > m) m = v; } return m; }
  // v439: a connection that is still not up after 12 s is thrown away and made again (up to 3 times); only the offering side (lower id) does it, the other side follows by itself
  retryTick(now) {
    if (!this.tries) this.tries = new Map();
    for (const [id, o] of [...this.peers]) { if (o.polite || o.pc.connectionState === 'connected' || now - o.born < 12000) continue; const t = this.tries.get(id) || 0; if (t >= 3) continue; this.tries.set(id, t + 1); this.drop(id); this.connect(id); }
  }
  reset() { if (this.tries) this.tries.clear(); const ids = [...this.peers.keys()]; for (const id of ids) this.drop(id); this.iceP = null; this.err = ''; this.changed(); }
  poll() {
    if (document.hidden) return; let ch = false; const now = performance.now();
    if (!this._rt || now - this._rt > 1000) { this._rt = now; this.retryTick(now); }
    const chk = (id, an) => { const l = this.lvl(an); if (l > 5) this.level.set(id, now); const on = now - (this.level.get(id) || -1e9) < 350; if (on !== this.speaking.has(id)) { on ? this.speaking.add(id) : this.speaking.delete(id); ch = true; } };
    if (!this._sw || now - this._sw > 300) { this._sw = now;   // a teammate's loudness comes from the connection's own stats 3-4 times a second (no extra audio processing on the phone)
      for (const [id, o] of this.peers) { if (o.busy || o.pc.connectionState !== 'connected') continue; o.busy = true;
        o.pc.getStats().then((st) => { let l = 0; st.forEach((x) => { if (x.type === 'inbound-rtp' && x.kind === 'audio' && x.audioLevel > l) l = x.audioLevel; });
          if (this.muted.has(id) || !this.spk) l = 0; if (l > 0.02) this.level.set(id, performance.now()); }).catch(() => {}).finally(() => { o.busy = false; });
        const on = now - (this.level.get(id) || -1e9) < 450; if (on !== this.speaking.has(id)) { on ? this.speaking.add(id) : this.speaking.delete(id); ch = true; } } }
    if (this.mic && !this.selfAn && (!this._sl || now - this._sl > 600)) { this._sl = now;   // v382 phones: own loudness from the connection stats, no WebAudio on the mic
      for (const o of this.peers.values()) { if (o.pc.connectionState !== 'connected') continue; o.pc.getStats().then((st) => { let l = 0; st.forEach((x) => { if ((x.type === 'media-source' && x.kind === 'audio') && x.audioLevel > l) l = x.audioLevel; }); if (l > 0.02) this.level.set(this.me, performance.now()); }).catch(() => {}); break; } }
    if (this.mic) { if (this.selfAn) chk(this.me, this.selfAn); else { const on = now - (this.level.get(this.me) || -1e9) < 700; if (on !== this.speaking.has(this.me)) { on ? this.speaking.add(this.me) : this.speaking.delete(this.me); ch = true; } } }
    if (this.mic && this.stream) {   // v384/v385: open mic - paused while a teammate is talking through the speakers (half-duplex); push-to-talk needs no pause
      let far = false; if (this.spk && !this.ptt && !this.aec) for (const id of this.speaking) if (id !== this.me && !this.muted.has(id)) far = true;
      if (far) this._gateT = now; this.applyEn(far || (!!this._gateT && now - this._gateT < 500)); }
    if (ch) this.changed(true);
  }
  changed(speakOnly) { if (this.onChange) this.onChange(speakOnly); }
  stopAll() { for (const id of [...this.peers.keys()]) this.drop(id); this.want = false; this.mic = false; this.releaseMic(); if (this.timer) { clearInterval(this.timer); this.timer = 0; } this.speaking.clear(); this.changed(); }
}
