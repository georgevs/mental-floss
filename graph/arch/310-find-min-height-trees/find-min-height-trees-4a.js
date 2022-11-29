const findMinHeightTrees = (n, xs) => {
  const g = new Graph(n, xs);
  if (n > 2) { while (trim(g) > 2) { } }
  return Array.from(g.keys());
};

class Graph extends Map {
  constructor(n, xs) {
    const vs = Array.from(Array(n), (_, i) => i);
    super(vs.map(v => [v, new Set]));
    for (const e of xs) {
      const [v1, v2] = e;
      this.get(v1).add(e);
      this.get(v2).add(e);
    }
  }
}

const trim = (g) => {
  const s = new Set;
  for (const [v, xs] of g.entries()) {
    if (xs.size === 1) { s.add(xs.values().next().value); g.delete(v) }
  }
  let n = 0;
  for (const xs of g.values()) {
    ++n;
    for (const e of xs) {
      if (s.has(e)) { xs.delete(e) }
    }
  }
  return n;
};

module.exports = findMinHeightTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
  // const n = 4, xs = [[1, 0], [1, 2], [1, 3]];
  const n = 6, xs = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
  // console.log(findMinHeightTrees(n, xs));
  // console.log(new Graph(n, xs), trim(new Graph(n, xs)));

}
