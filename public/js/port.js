// HARIS PORT: the big harbour on the south coast (the start of the WATER WORLD). Pure layout (no three.js) so the terrain, the world builder, the
// boat code and the tests all use the same numbers.  World: x east, z south.  Sea level is y = -1.2 (GT.SEA); the quay and the piers are 0.3 m above the land.
export const PORT = {
  yard: { x0: -262, x1: -78, z0: 392, z1: 494 },        // the flat paved land (terrain is levelled to y = 0 here and blends back over ~16 m)
  road: [[-180, 240], [-180, 486]],                      // the road from the city (the x = -180 avenue) down to the harbour
  quayZ: 494,                                            // the quay wall: the sea starts just beyond
  top: 0.3,                                              // deck height of the quay apron and the piers
  piers: [{ x: -225, w: 6.4 }, { x: -165, w: 6.4 }, { x: -105, w: 6.4 }],   // three long finger piers running out to sea
  pierZ0: 490, pierZ1: 541,
  // where the boats are moored: x, z, yaw (0 = bow to the south, out to sea)
  berths: [{ x: -219.9, z: 516, yaw: 0, hull: 'speedboat' }, { x: -159.4, z: 521, yaw: 0, hull: 'fishboat' }, { x: -171.4, z: 526, yaw: 0, hull: 'yacht' }],
  light: { x: -105, z: 545 },                            // the lighthouse at the end of the east pier
};
const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
// how much the land here is levelled to the harbour (1 = completely flat, 0 = untouched), and the distance to the road for the road bed
export function portFlat(x, z) {
  const Y = PORT.yard, dx = Math.max(Y.x0 - x, 0, x - Y.x1), dz = Math.max(Y.z0 - z, 0, z - Y.z1), d = Math.hypot(dx, dz);
  return 1 - sm(0, 18, d);
}
export function portRoadD(x, z) {
  const [a, b] = PORT.road, dx = b[0] - a[0], dz = b[1] - a[1], t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (z - a[1]) * dz) / (dx * dx + dz * dz))), px = a[0] + dx * t, pz = a[1] + dz * t;
  return Math.hypot(x - px, z - pz);
}
