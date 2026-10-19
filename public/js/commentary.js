// RANDOM ENGLISH COMMENTARY for the whole game: a radio-host / sports-caster voice (the browser's own speech synthesis, no files to load) that
// comments on what is happening and drops a random line now and then. Never talks over itself and keeps quiet most of the time.
const LINES = {
  idle: ['Another beautiful day in Haris City. Try not to wreck it.', 'Traffic is moving nicely on the avenues. Give it ten minutes.', 'Fun fact: the fastest way across town is never the road.', 'Remember, folks, seat belts are for people with a plan.', 'This is the voice of the city, keeping you company.', 'Sunshine, speed and questionable decisions. Perfect.', 'If you can read this, you are not driving fast enough.', 'The weather is lovely. The driving is not.', 'Coming up next: more of exactly this.', 'Stay hydrated, stay dangerous, stay on the road.', 'Somewhere out there is a very nervous parked car.', 'Big money, big dreams, small parking spaces.', 'Rumour has it the weapon store is doing a roaring trade.', 'Breaking news: nothing is breaking. Yet.'],
  crash: ['Ouch. That one is going to need a mechanic.', 'And that is why we brake, ladies and gentlemen.', 'Crunch. Somebody call a tow truck.', 'That sound was not the radio.', 'Smooth. Very smooth. Not.', 'The wall wins again.', 'Insurance is going to love this one.'],
  fire: ['Your car is on fire. Just so you know.', 'That is not the new air freshener. Get out!', 'Smoke, flames, the full package. Impressive.', 'Time to think about a new vehicle.'],
  stars: ['The police are on to you. Time to move.', 'Sirens in the distance. That cannot be good.', 'You have got their attention now.', 'Wanted level rising. Stay calm, drive fast.'],
  cleared: ['Clean slate. The police lost you.', 'You lost them. Nicely done.', 'Cops are gone. Go and behave. Or do not.'],
  busted: ['Busted. It was a good run.', 'The long arm of the law wins this round.', 'Cuffs on. Back to the station.'],
  kill: ['That is going to cause some paperwork.', 'Not a great career move.', 'The neighbours will talk.'],
  jack: ['Nice ride. Does the owner know?', 'Grand theft auto, live on air.', 'Borrowed. Permanently.'],
  fast: ['Speedometer is having a very good day.', 'Easy, champ. The road has an end.', 'Now that is how you drive.', 'Hold on tight. Hold on very tight.'],
  money: ['Cha-ching. Pockets getting heavier.', 'Money talks. Yours is shouting.'],
  gen: ['You are doing great out there.', 'Keep it up, the crowd is on its feet.', 'Look at that. Pure style.', 'Next stop: legend status.', 'That is how it is done.'],
};
let last = 0, enabled = true, voice = null, lastKind = '';
const synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
function pick() {
  if (!synth) return null; if (voice) return voice;
  const vs = synth.getVoices ? synth.getVoices() : []; voice = vs.find((v) => /^en[-_](GB|US|AU)/i.test(v.lang) && /male|daniel|alex|google uk english male|david|james/i.test(v.name)) || vs.find((v) => /^en/i.test(v.lang)) || null; return voice;
}
export function say(kind, force) {
  try {
    if (!synth || !enabled) return; const now = performance.now(); if (!force && now - last < (kind === 'idle' ? 28000 : 14000)) return; if (synth.speaking) return;
    const pool = LINES[kind] || LINES.gen; let t = pool[(Math.random() * pool.length) | 0]; if (t === lastKind) t = pool[(Math.random() * pool.length) | 0]; lastKind = t; last = now;
    const u = new SpeechSynthesisUtterance(t); u.lang = 'en-GB'; const v = pick(); if (v) u.voice = v; u.rate = 1.02; u.pitch = 0.85; u.volume = 0.8; synth.speak(u);
  } catch { /* speech not available: fine */ }
}
export const stopSay = () => { try { if (synth) synth.cancel(); } catch { /* noop */ } };
export const setCommentary = (on) => { enabled = !!on; if (!on) stopSay(); };
