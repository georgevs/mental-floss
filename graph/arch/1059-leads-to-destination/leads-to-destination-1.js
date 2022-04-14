// 1 <= n <= 10^4
// 0 <= edges.length <= 10^4
// edges.length == 2
// 0 <= f,t <= n - 1
// 0 <= source <= n - 1
// 0 <= destination <= n - 1
// The given graph may have self-loops and parallel edges.

const leadsToDestination = (n, xs, v1, v2) => visit(v => v == v2, graph(n, xs), v1);

const graph = (n, xs) => xs.reduce((g, [f, t]) => (g[f].push(t), g), Array.from(Array(n), () => []));

const visit = (fn, g, v) => {
  let vs = g[v];
  if (vs.length == 0) { return fn(v) }
  let r;
  while (vs.length > 0 && (r = visit(fn, g, vs.shift()))) { }
  return r;
};

module.exports = leadsToDestination;
