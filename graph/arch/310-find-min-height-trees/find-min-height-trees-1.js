const findMinHeightTrees = (n, xs) => loop(vertices(n), xs);

const vertices = (n) => Array.from(Array(n), (_, i) => i);

const graph = (vs, xs) => {
  const g = new Map(vs.map(v => [v, new Set]));
  xs.forEach(e => {
    const [v1, v2] = e;
    const s1 = g.get(v1), s2 = s1 ? g.get(v2) : undefined;
    if (s2) { s1.add(e); s2.add(e) }
  });
  return g;
};

// const partition = (fn, n) => (xs) => (
//   xs.reduce(
//     (acc, x) => (acc[fn(x)].push(x), acc), 
//     Array.from(Array(n), () => [])
//   )
// );

const split = (g) => {
  const r = [[], []];
  for (const [v, xs] of g.entries()) {
    r[xs.size > 1 ? 0 : 1].push(v);
  }
  return r;
};

const loop = (vs, xs) => {
  let r;
  while (vs.length > 0) {
    ([vs, r] = split(graph(vs, xs)));
  }
  return r;
};

module.exports = findMinHeightTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
  // const n = 4, xs = [[1, 0], [1, 2], [1, 3]];
  // const n = 6, xs = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
  // console.log(loop(vertices(n), xs));
}
