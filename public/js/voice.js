// Team voice chat (v215): WebRTC, one audio connection between every two players of a room (a "mesh": fine for up to ~6 people).
// The audio goes phone -> phone; the game server only relays the small connect messages ('vc'). Mic is OFF until you tap it.
// A phone only pays for it while a mic is open or a teammate talks (Opus ~24 kbps per voice), the 3D drawing is not touched.
const STUN = [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }];

const PHONE = typeof navigator !== 'undefined' && (/iP(hone|ad|od)|Android/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
export class Voice {
  constructor(net) {
    this.net = net; this.me = 0; this.peers = new Map(); this.names = new Map(); this.mic = false; this.spk = true; this.stream = null;
    this.ice = STUN; this.iceLoaded = false; this.ctx = null; this.ana = null; this.level = new Map(); this.speaking = new Set(); this.timer = 0;
    this.want = false; this.vol = 1; this.muted = new Set(); this.onChange = null; this.holdMode = false; this.err = '';
  }
  // ---- room membership: call with everybody in the room (including me) whenever the lobby changes
  setRoom(myId, players, on) {
    this.me = myId; this.names = new Map(players.map((p) => [p.id, p.name]));
    if (!on || !window.RTCPeerConnection) { for (const id of [...this.peers.keys()]) this.drop(id); this.changed(); return; }   // alone in the room: connections close, but the mic button keeps its state
    const want = new Set(players.map((p) => p.id).filter((id) => id !== myId));
    for (const id of [...this.peers.keys()]) if (!want.has(id)) this.drop(id);
    (this.iceP || (this.iceP = this.loadIce())).then(() => { if (this.me !== myId) return; for (const id of want) if (this.names.has(id) && !this.peers.has(id)) this.connect(id); this.changed(); });
    if (!this.timer) this.timer = setInterval(() => this.poll(), 140);
    this.changed();
  }
  async loadIce() { try { const r = await fetch('/ice', { cache: 'no-store' }); const j = await r.json(); if (j && Array.isArray(j.iceServers) && j.iceServers.length) this.ice = j.iceServers; } catch { /* STUN only */ } }
  mk(id) {
    const pc = new RTCPeerConnection({ iceServers: this.ice, bundlePolicy: 'max-bundle' });
    const o = { id, pc, audio: null, an: null, polite: this.me > id, makingOffer: false, pend: [], sender: null };
    const tr = pc.addTransceiver('audio', { direction: 'sendrecv' }); o.sender = tr.sender; o.recv = tr.receiver;   // one fixed audio line: the mic is plugged in / out with replaceTrack, no new negotiation
    pc.onicecandidate = (e) => { if (e.candidate) this.sig(id, 'i', e.candidate.toJSON ? e.candidate.toJSON() : e.candidate); };
    pc.ontrack = (e) => {
      const st = e.streams && e.streams[0] ? e.streams[0] : new MediaStream([e.track]);
      if (!o.audio) { o.audio = new Audio(); o.audio.autoplay = true; o.audio.playsInline = true; o.audio.style.display = 'none'; try { document.body.appendChild(o.audio); } catch { /* ignore */ } }   // v384: in the page, so the laptop's echo canceller can hear what is being played
      o.audio.srcObject = st; o.audio.volume = this.spk && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !this.spk || this.muted.has(id);   // v381: iPhone Safari ignores .volume, only .muted silences it
      const p = o.audio.play(); if (p && p.catch) p.catch(() => { this._needTap = true; this.changed(); });
    };
    pc.onnegotiationneeded = async () => {
      try { o.makingOffer = true; await pc.setLocalDescription(); this.sig(id, 'o', pc.localDescription.toJSON ? pc.localDescription.toJSON() : pc.localDescription); } catch { /* retry on next change */ } finally { o.makingOffer = false; }
    };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'connected') this.rebind(o); if (pc.connectionState === 'failed') { try { pc.restartIce(); } catch { /* ignore */ } } this.changed(); };
    if (this.stream) { const t = this.stream.getAudioTracks()[0]; if (t) this.setTrack(o, t); }
    return o;
  }
  // v223 (iPhone fix): Safari does not always re-use our pre-made audio line when the other side's offer arrives, so the mic could sit on an unused line and nobody heard an iPhone. The mic track is now put on EVERY audio sender of the connection (the unused one is harmless).
  setTrack(o, t) { try { for (const sn of o.pc.getSenders()) sn.replaceTrack(t).catch(() => {}); } catch { /* ignore */ } }
  rebind(o) { const t = this.stream && this.stream.getAudioTracks()[0]; if (t && t.readyState === 'live') this.setTrack(o, t); }   // after every negotiation: put the mic on the line again
  connect(id) { if (this.peers.has(id)) return; this.peers.set(id, this.mk(id)); }
  drop(id) { const o = this.peers.get(id); if (!o) return; try { o.pc.close(); } catch { /* ignore */ } if (o.audio) { o.audio.srcObject = null; try { o.audio.remove(); } catch { /* ignore */ } } this.peers.delete(id); this.level.delete(id); this.speaking.delete(id); this.changed(); }
  sig(to, k, d) { this.net.send({ t: 'vc', to, k, d }); }
  // ---- messages from the other players (relayed by the server)
  async onSignal(m) {
    if (!window.RTCPeerConnection) return;
    const id = m.from; if (!this.peers.has(id)) { if (!this.names.has(id)) return; this.connect(id); }
    const o = this.peers.get(id), pc = o.pc;
    try {
      if (m.k === 'o') {   // "perfect negotiation": the higher id gives way if both sides offer at once
        const clash = o.makingOffer || pc.signalingState !== 'stable';
        if (clash && !o.polite) return;
        await pc.setRemoteDescription(m.d); await pc.setLocalDescription(); this.sig(id, 'a', pc.localDescription.toJSON ? pc.localDescription.toJSON() : pc.localDescription); this.rebind(o);
      } else if (m.k === 'a') { if (pc.signalingState === 'have-local-offer') { await pc.setRemoteDescription(m.d); this.rebind(o); } }
      else if (m.k === 'i') { try { await pc.addIceCandidate(m.d); } catch { /* candidate for an old negotiation */ } }
    } catch { /* ignore a bad message */ }
  }
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
    const t = st.getAudioTracks()[0]; t.enabled = !document.hidden;
    const now0 = performance.now(); this._opens = (this._opens || []).filter((x) => now0 - x < 20000); this._opens.push(now0);
    t.onended = () => { if (this.stream !== st) return; this.stream = null; this.mic = this.want; if (this.want) { if ((this._opens || []).length >= 5) { this.want = false; this.mic = false; this.err = 'The phone keeps closing the mic (another app may be using it). Tap the mic to try again'; this.releaseMic(); } else this.reopenSoon(); } this.changed(); };   // v382: stop the open/close loop (it made the Android mic indicator blink)
    for (const o of this.peers.values()) this.setTrack(o, t);
    this.selfAn = null; try { if (/iP(hone|ad|od)|Android/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) throw 0; const c = this.actx(); this.selfAn = c.createAnalyser(); this.selfAn.fftSize = 256; c.createMediaStreamSource(st).connect(this.selfAn); } catch { /* no meter */ }
    this.changed(); return true;
  }
  reopenSoon() { clearTimeout(this._ro); this._ro = setTimeout(() => { if (this.want && !(this.stream && this.stream.getAudioTracks().some((t) => t.readyState === 'live'))) this.openMic().then((ok) => { if (!ok && this.want) this.reopenSoon(); }); }, 800); }
  // app in the background: the mic track is paused (silent) but the button stays on; coming back resumes it
  visibility(hidden) { const t = this.stream && this.stream.getAudioTracks()[0]; if (t) t.enabled = !hidden; if (!hidden && this.want) this.reopenSoon(); }
  releaseMic() {   // v381: close the mic for REAL (iPhone kept sending): the sender lines are emptied, every stream ever opened is stopped, pending re-opens are cancelled, and the phone's audio session goes back to normal playback
    this.epoch = (this.epoch || 0) + 1; clearTimeout(this._ro);
    for (const o of this.peers.values()) { this.setTrack(o, null); try { for (const sn of o.pc.getSenders()) if (sn.track) { sn.track.enabled = false; sn.track.stop(); } } catch { /* ignore */ } }
    if (this.stream) { for (const t of this.stream.getTracks()) { t.onended = null; t.enabled = false; t.stop(); } this.stream = null; }
    if (this.allStreams) { for (const st of this.allStreams) for (const t of st.getTracks()) { t.onended = null; t.enabled = false; t.stop(); } this.allStreams.clear(); }
    this.selfAn = null; this.speaking.delete(this.me);
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* ignore */ }
  }
  setSpk(on) { this.spk = on; for (const [id, o] of this.peers) if (o.audio) { o.audio.volume = on && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !on || this.muted.has(id); } this.changed(); }   // v381: .muted as well (iPhone ignores .volume)
  setVol(v) { this.vol = Math.max(0, Math.min(1, v)); this.setSpk(this.spk); }
  toggleMute(id) { if (this.muted.has(id)) this.muted.delete(id); else this.muted.add(id); const o = this.peers.get(id); if (o && o.audio) { o.audio.volume = this.spk && !this.muted.has(id) ? this.vol : 0; o.audio.muted = !this.spk || this.muted.has(id); } this.changed(); }
  resumeAudio() { this._needTap = false; for (const o of this.peers.values()) if (o.audio && o.audio.paused && o.audio.srcObject) o.audio.play().catch(() => {}); if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); }
  // ---- who is talking (8 times a second, only reads a tiny buffer)
  lvl(an) { if (!an) return 0; const b = this.buf || (this.buf = new Uint8Array(128)); an.getByteTimeDomainData(b); let m = 0; for (let i = 0; i < b.length; i += 2) { const v = Math.abs(b[i] - 128); if (v > m) m = v; } return m; }
  poll() {
    if (document.hidden) return; let ch = false; const now = performance.now();
    const chk = (id, an) => { const l = this.lvl(an); if (l > 5) this.level.set(id, now); const on = now - (this.level.get(id) || -1e9) < 350; if (on !== this.speaking.has(id)) { on ? this.speaking.add(id) : this.speaking.delete(id); ch = true; } };
    if (!this._sw || now - this._sw > 300) { this._sw = now;   // a teammate's loudness comes from the connection's own stats 3-4 times a second (no extra audio processing on the phone)
      for (const [id, o] of this.peers) { if (o.busy || o.pc.connectionState !== 'connected') continue; o.busy = true;
        o.pc.getStats().then((st) => { let l = 0; st.forEach((x) => { if (x.type === 'inbound-rtp' && x.kind === 'audio' && x.audioLevel > l) l = x.audioLevel; });
          if (this.muted.has(id) || !this.spk) l = 0; if (l > 0.02) this.level.set(id, performance.now()); }).catch(() => {}).finally(() => { o.busy = false; });
        const on = now - (this.level.get(id) || -1e9) < 450; if (on !== this.speaking.has(id)) { on ? this.speaking.add(id) : this.speaking.delete(id); ch = true; } } }
    if (this.mic && !this.selfAn && (!this._sl || now - this._sl > 600)) { this._sl = now;   // v382 phones: own loudness from the connection stats, no WebAudio on the mic
      for (const o of this.peers.values()) { if (o.pc.connectionState !== 'connected') continue; o.pc.getStats().then((st) => { let l = 0; st.forEach((x) => { if ((x.type === 'media-source' && x.kind === 'audio') && x.audioLevel > l) l = x.audioLevel; }); if (l > 0.02) this.level.set(this.me, performance.now()); }).catch(() => {}); break; } }
    if (this.mic) { if (this.selfAn) chk(this.me, this.selfAn); else { const on = now - (this.level.get(this.me) || -1e9) < 700; if (on !== this.speaking.has(this.me)) { on ? this.speaking.add(this.me) : this.speaking.delete(this.me); ch = true; } } }
    if (this.mic && this.stream) {   // v384/v385 ALL devices: while a teammate is talking through the speakers, the mic is paused (half-duplex) so their voice cannot come back as an echo
      const t = this.stream.getAudioTracks()[0]; let far = false; if (this.spk) for (const id of this.speaking) if (id !== this.me && !this.muted.has(id)) far = true;
      if (t) { if (far) this._gateT = now; const gated = far || (this._gateT && now - this._gateT < 500); const en = !gated; if (t.enabled !== en) t.enabled = en; } }
    if (ch) this.changed(true);
  }
  changed(speakOnly) { if (this.onChange) this.onChange(speakOnly); }
  stopAll() { for (const id of [...this.peers.keys()]) this.drop(id); this.want = false; this.mic = false; this.releaseMic(); if (this.timer) { clearInterval(this.timer); this.timer = 0; } this.speaking.clear(); this.changed(); }
}
