// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

// const { logf } = require('../../utils/logf');
const logf = (_, fn) => fn;

const allPathsSourceTarget = (g) => {
  const rs = [];
  dfsPaths(p => rs.push(p))(g, 0, g.length - 1);
  return rs;
};

const dfsPaths = (fn) => (g, v1, v2) => {
  const ds = new Set([undefined]); // visited
  const visit = (vs, v) => {
    if (!ds.has(v)) {
      ds.add(v);
      const p = [...vs, v];
      if (v == v2) { fn(p) }
      else { Array.from(g[v]).forEach(v => visit(p, v)) }
      ds.delete(v);
    }
  };
  visit([], v1);
};

module.exports = allPathsSourceTarget;
