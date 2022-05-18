const { logf } = require('./log');

const enumVertices = logf('', (fn) => (g) => {
  const ds = new Set([undefined]); // visited
  const visit = (v) => {
    if (!ds.has(v)) {
      ds.add(v);
      Array.from(g.neighbors(v)).forEach(visit);
      fn(v);
    }
  };
  visit(g.first());
});

const enumPaths = logf('', (fn) => (g, v1, v2) => {
  const ds = new Set([undefined]); // visited
  const visit = (vs, v) => {
    if (!ds.has(v)) {
      ds.add(v);
      const p = [...vs, v];
      if (v == v2) { fn(p) }
      else { Array.from(g.neighbors(v)).forEach(v => visit(p, v)) }
      ds.delete(v);
    }
  };
  visit([], v1);
});

module.exports = { enumVertices, enumPaths };
