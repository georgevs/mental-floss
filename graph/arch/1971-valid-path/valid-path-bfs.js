// 1 <= n <= 2 * 10^5
// 0 <= edges.length <= 2 * 10^5
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// There are no duplicate edges.
// There are no self edges.

const validPath = (n, xs, v1, v2) => {
  const g = graph(n, xs);
  return bfsPath(g, v1, v2);
};

const graph = (n, xs) => {
  const g = Array.from(Array(n), () => []);
  return xs.reduce((g, [v1, v2]) => (g[v1].push(v2), g[v2].push(v1), g), g);
};

const bfsPath = (g, v1, v2) => {
  const d = new Set(); // visited
  const q = [v1]; // queue 

  while (q.length > 0) {
    const v = q.pop();
    if (v == v2) { return true }
    if (!d.has(v)) { 
      d.add(v);
      q.unshift(...g[v]);
    }
  }
  return false;
};

module.exports = validPath;
