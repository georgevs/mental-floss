// 1 <= n <= 2 * 10^5
// 0 <= edges.length <= 2 * 10^5
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// There are no duplicate edges.
// There are no self edges.

const validPath = (n, xs, v1, v2) => {
  const vs = Array.from(Array(n), (_, i) => i);
  const g = graph(vs, xs);
  let r;
  dfsPaths(vs => (r = true, false))(g, v1, v2);
  return !!r;
};

const graph = (vs, xs) => {
  const g = Array.from(vs.values()).reduce((g, v) => (g.set(v, new Set()), g), new Map());
  return xs.reduce((g, [v1, v2]) => (g.get(v1).add(v2), g.get(v2).add(v1), g), g);
};

const dfsPaths = (fn) => (g, v1, v2) => {
  const ds = new Set([undefined]); // visited
  const visit = (vs, v) => {
    if (ds.has(v)) { return true } // continue
    ds.add(v);
    const p = [...vs, v];
    const r = (v == v2) ? (!fn || fn(p))
      : Array.from(g.get(v).values()).every(v => visit(p, v));
    ds.delete(v);
    return r;
  };
  visit([], v1);
};

module.exports = validPath;
