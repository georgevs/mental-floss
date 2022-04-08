// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

// const { logf } = require('../../utils/logf');
const logf = (_, fn) => fn;

const allPathsSourceTarget = (g) => {
  const v1 = 0; // start vertex
  const v2 = g.length - 1; // target vertex

  const iter = (v) => {
    const rs = (v == v2 ? [] : g[v])  // don't consider target's children
      .flatMap(dp)
      .map(vs => [v, ...vs]);
    return rs.length != 0 ? rs : // pass valid paths up
      v == v2 ? [[v]] : // only consider paths terminating in target
      [];
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => logf('dp', (v) => {
    let r;
    return rs.get(v) ?? (rs.set(v, r = iter(v)), r);
  }))();

  return dp(v1);
};

module.exports = allPathsSourceTarget;
