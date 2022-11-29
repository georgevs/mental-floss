const findMinHeightTrees = (n, xs) => {
  if (n === 1) { return [0] }
  const g = new Graph(n, xs);
  let leaves = [];
  for (const [v, ns] of g.entries()) {
    if (ns.size === 1) { leaves.push(v) }
  }
  let k = leaves.length;
  while (k < n) {
    const leaves1 = [];
    for (const v of leaves) {
      const v1 = g.get(v).values().next().value;
      const ns1 = g.get(v1);
      ns1.delete(v);
      g.delete(v);
      if (ns1.size === 1) { leaves1.push(v1) }
    }
    leaves = leaves1;
    k += leaves.length;
  }
  return leaves;
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

module.exports = findMinHeightTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));

  // const n = 4, xs = [[1, 0], [1, 2], [1, 3]];
  // const n = 6, xs = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]];
  // const g = new Graph(n, xs);
  // console.log(g);
  // console.log(trim(g), g);

  // console.log(findMinHeightTrees(n, xs));

}
