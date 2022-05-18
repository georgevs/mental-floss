// n == graph.length
// 2 <= n <= 15
// 0 <= graph[i][j] < n
// graph[i][j] != i (i.e., there will be no self-loops).
// All the elements of graph[i] are unique.
// The input graph is guaranteed to be a DAG.

const allPathsSourceTarget = (g) => {
  const rs = [];
  bfs(p => rs.push(p))(g, 0, g.length - 1);
  return rs;
};

const bfs = (fn) => (g, v1, v2) => {
  const s = [[v1]];
  do {
    const p = s.pop();
    const v = p[p.length - 1];
    if (v === v2) { fn(p); continue }
    const visited = Set.prototype.has.bind(new Set(p));
    s.unshift(...g[v].filter(v => !visited(v)).map(v => [...p, v]));
  } while (s.length > 0);
};

module.exports = allPathsSourceTarget;
