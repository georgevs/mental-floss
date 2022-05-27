const enumVertices = (fn) => (g) => {
  const first = g.first();
  if (!first) { return }
  const vs = new Set;
  const s = [first]; 
  do {
    const v = s.shift();
    if (!vs.has(v)) {
      vs.add(v);
      fn(v);
      s.push(...g.neighbors(v));
    }
  } while (s.length > 0);
};

const enumPaths = (fn) => (g, v1, v2) => {
  const s = [[v1]];
  do {
    const p = s.shift();
    const v = p[p.length - 1];
    if (v === v2) { fn(p); continue }
    const visited = Set.prototype.has.bind(new Set(p));
    s.push(...Array.from(g.neighbors(v)).filter(v => !visited(v)).map(v => [...p, v]));
  } while (s.length > 0);
};

module.exports = { enumVertices, enumPaths };
