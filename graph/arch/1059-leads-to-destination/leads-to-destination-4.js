// 1 <= n <= 10^4
// 0 <= edges.length <= 10^4
// edges.length == 2
// 0 <= f,t <= n - 1
// 0 <= source <= n - 1
// 0 <= destination <= n - 1
// The given graph may have self-loops and parallel edges.

const logff = (log) => (p, fn) => p ? ((...args) => (log(p, ...args), fn(...args))) : fn;
const logf = logff(console.log.bind(console));
// const logf = (p, fn) => fn;

const leadsToDestination = logf('', (n, xs, v1, v2) => dfsPaths(v => v == v2, graph(n, xs), v1));

const graph = (n, xs) => {
  const g = Array.from(Array(n), () => new Set()); // use Set to drop parallel edges
  return xs.reduce((g, [f, t]) => (g[f].add(t), g), g)
    .map(vs => Array.from(vs));
};

const dfsPaths = logf('', (fn, g, v1) => {
  const visited = new Set();
  const visit = logf('', (v) => {
    if (visited.has(v)) { return false } // loops on v
    const vs = g[v];
    if (vs.length == 0) { return fn(v) } // terminates on v
    visited.add(v);
    if (!vs.every(visit)) { return false } // fails on subpath
    visited.delete(v);
    return true;
  });
  return visit(v1);
});

module.exports = leadsToDestination;
