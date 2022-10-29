const Heap = require('./heap');

// (Graph g, Vertex v, Parent u, Distance d) => (g, v) -> [ { v -> d }, { v -> u } ]
const shortestPaths = (g, u) => {
  const ds = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const us = new Map;
  
  const q = new Heap(([, lhs], [, rhs]) => lhs - rhs);
  q.enqueue([u, 0]);
  
  const s = new Set;
  
  while (!q.empty()) {
    const [u] = q.dequeue();
    if (s.has(u)) { continue }
    s.add(u);
    for (const [, v, w] of g.neighbors.get(u)) {
      if (s.has(v)) { continue }
      const d = ds.get(u) + w;
      if (d < ds.get(v)) {
        ds.set(v, d);
        us.set(v, u);
        q.enqueue([v, d]);
      }
    }
  }

  return [ds, us];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
