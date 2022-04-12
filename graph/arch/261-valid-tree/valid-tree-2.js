// 1 <= n <= 2000
// 0 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no self-loops or repeated edges.

const validTree = (n, xs) => {
  const g = graph(n, xs);
  const vs = Array(n).fill(0);
  const r = dfsVertices(v => ++vs[v] == 1)(g) && vs.every(v => v == 1);
  return r;
};

const graph = (n, xs) => {
  const g = Array.from(Array(n), () => []);
  return xs.reduce((g, [v1, v2]) => (g[v1].push(v2), g[v2].push(v1), g), g);
};

const dfsVertices = (fn) => (g) => {
  const visit = (p, v) => fn(v) && g[v].every(i => p == i || visit(v, i));
  return visit(undefined, 0);
};

module.exports = validTree;
