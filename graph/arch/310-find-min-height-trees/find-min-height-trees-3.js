const findMinHeightTrees = (n, xs) => Array.from(loop(vertices(n), xs));

const vertices = (n) => {
  const r = new Set;
  for (let i = 0; i < n; ++i) { r.add(i) }
  return r;
};

const loop = (vs, xs) => {
  for (;;) {
    const m = new Map;
    for (const [v1, v2] of xs) {
      m.set(v1, (m.get(v1) ?? 0) + 1);
      m.set(v2, (m.get(v2) ?? 0) + 1);
    }
    const vs1 = new Set;
    const xs1 = new Set;
    for (const e of xs) {
      const [v1, v2] = e;
      if (m.get(v1) > 1) {
        vs1.add(v1);
        if (m.get(v2) > 1) {
          vs1.add(v2);
          xs1.add(e);
        }
      } else if(m.get(v2) > 1) {
        vs1.add(v2);
      }
    }
    if (xs1.size === 0) { return vs1.size > 0 ? vs1 : vs }
    vs = vs1; xs = xs1;
  }
};

module.exports = findMinHeightTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
  // const n = 4, xs = [[1, 0], [1, 2], [1, 3]];
  const n = 6, xs = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
  // console.log(findMinHeightTrees(n, xs));
  // console.log(loop(vertices(n), xs));
}
