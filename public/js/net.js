// WebSocket client with clock synchronisation (so moving obstacles are in the same phase for everybody).
export class Net {
  constructor() {
    this.ws = null; this.h = {}; this.offset = 0; this.rtt = 0; this.best = Infinity; this.connected = false; this.id = null; this.samples = 0;
  }
  now() { return Date.now() + this.offset; }
  stamp() { const t = Math.round(performance.timeOrigin + performance.now()); this.lastStamp = Math.max(t, (this.lastStamp || 0) + 1); return this.lastStamp; } // packet time for smoothing: this machine's own steady clock (never the synced one, whose corrections used to make a far-away player's packets look old and freeze him); receivers measure the offset themselves
  on(type, fn) { this.h[type] = fn; }
  connect() {
    return new Promise((resolve, reject) => {
      if (this.connected) return resolve();
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      let ws;
      try { ws = new WebSocket(`${proto}://${location.host}/ws`); } catch (e) { return reject(e); }
      this.ws = ws;
      const timeout = setTimeout(() => { try { ws.close(); } catch { /* noop */ } reject(new Error('timeout')); }, 8000);
      ws.onopen = () => {
        clearTimeout(timeout); this.connected = true;
        for (let i = 0; i < 8; i++) setTimeout(() => this.ping(), i * 140);
        this.pinger = setInterval(() => this.ping(), 2000);
        resolve();
      };
      ws.onmessage = (e) => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === 'pong') return this.onPong(m);
        if (m.t === 'joined') this.id = m.id;
        const f = this.h[m.t]; if (f) f(m);
      };
      ws.onclose = () => { clearTimeout(timeout); const was = this.connected; this.connected = false; clearInterval(this.pinger); if (was && this.h.close) this.h.close(); else reject(new Error('closed')); };
      ws.onerror = () => {};
    });
  }
  ping() { this.send({ t: 'ping', c: Date.now() }); }
  onPong(m) {
    const t = Date.now(), rtt = t - m.c; this.rtt = this.rtt ? this.rtt * 0.7 + rtt * 0.3 : rtt;
    const sample = m.s + rtt / 2 - t;
    if (rtt <= this.best * 1.25 || this.samples < 3) { // trust low-latency samples most
      this.offset = this.samples < 8 ? (rtt <= this.best ? sample : this.offset) : this.offset * 0.8 + sample * 0.2;
      this.best = Math.min(this.best, rtt);
    }
    this.samples++;
    if (this.samples % 10 === 0) this.best = this.best * 1.3 + 2; // let it re-adapt if the route changed
  }
  send(o) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(o)); }
  close() { try { this.ws && this.ws.close(); } catch { /* noop */ } this.connected = false; clearInterval(this.pinger); }
}
