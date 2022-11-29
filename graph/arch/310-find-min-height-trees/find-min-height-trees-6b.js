const findMinHeightTrees = (n, xs) => {
  if (n === 1) { return [0] }
  if (n === 2) { return [0, 1] }

  const adj = [];
  const ind = [];
  for (let v = 0; v < n; ++v) { adj[v] = []; ind[v] = 0 }

  for (const [v1, v2] of xs) {
    ++ind[v1]; adj[v1].push(v2);
    ++ind[v2]; adj[v2].push(v1);
  }

  let k = 0;
  let q = [];
  for (let v1 = 0; v1 < n; ++v1) {
    if (ind[v1] === 1) { q.push(v1); ++k }
  }

  let q1 = [];
  while (k < n) {
    if (q.length === 0) { q = q1; q1 = [] }
    const v1 = q.shift();
    for (const v2 of adj[v1]) {
      if (ind[v2] > 1) {
        if (--ind[v2] === 1) { q1.push(v2); ++k }
      }
    }
  }

  return q1;
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
