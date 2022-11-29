const findMinHeightTrees = (n, xs) => {
  const g = new Graph(n, xs);
  if (n > 2) { while (trim(g) > 2) { } }
  return Array.from(g.keys());
};

class Graph extends Map {
  constructor(n, xs) {
    const vs = Array.from(Array(n), (_, i) => i);
    super(vs.map(v => [v, new Set]));
    for (const [v1, v2] of xs) {
      this.get(v1).add(v2);
      this.get(v2).add(v1);
    }
  }
}

const trim = (g) => {
  let n = 0;
  const s = [];
  for (const [v, ns] of g.entries()) {
    if (ns.size > 1) {
      ++n;
    } else {
      s.push([ns.values().next().value, v]);
      g.delete(v);
    }
  }
  if (n > 2) {
    for (const [v1, v2] of s) {
      g.get(v1).delete(v2);
    }
  }
  return n;
};

module.exports = findMinHeightTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));

  // const n = 4, xs = [[1, 0], [1, 2], [1, 3]];
  // const n = 6, xs = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
  // const g = new Graph(n, xs);
  // console.log(g);
  // console.log(trim(g), g);

}
