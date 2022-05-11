const logff = (log) => true ? { log, logf: (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn } : { log: () => void 0, logf: (_, fn) => fn };
const { log, logf } = logff(console.log);

// adjacency list
const graph = (vs, xs) => {
  const g = Array.from(vs.values()).reduce((g, v) => (g.set(v, new Set()), g), new Map());
  return xs.reduce((g, [v1, v2]) => (g.get(v1).add(v2), g), g);
};

const dfsVertices = logf('dfsv', (fn) => (g) => {
  const ds = new Set([undefined]); // visited
  const visit = (v) => {
    if (!ds.has(v)) {
      ds.add(v);
      Array.from(g.get(v).values()).forEach(visit);
      fn(v);
    }
  };
  visit(g.keys().next().value);
});

const dfsPaths = logf('dfsp', (fn) => (g, v1, v2) => {
  const ds = new Set([undefined]); // visited
  const visit = (vs, v) => {
    if (!ds.has(v)) {
      ds.add(v);
      const p = [...vs, v];
      if (v == v2) { fn(p) }
      else { Array.from(g.get(v).values()).forEach(v => visit(p, v)) }
      ds.delete(v);
    }
  };
  visit([], v1);
});

module.exports = { graph, dfsVertices, dfsPaths };
