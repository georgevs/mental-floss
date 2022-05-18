// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

// const { logf } = require('../../utils/logf');
const logf = (_, fn) => fn;

const allPathsSourceTarget = (g) => enumPaths(g, 0, g.length - 1);

const enumPaths = (g, v1, v2) => {
  const iter = (v) => v === v2 ? [[v]] : g[v].flatMap(dp).map(p => [v, ...p]);
  const dp = ((rs = new Map) => (v) => { 
    let r; 
    return rs.get(v) ?? (rs.set(v, r = iter(v)), r);
  })();
  return dp(v1);
};

module.exports = allPathsSourceTarget;
