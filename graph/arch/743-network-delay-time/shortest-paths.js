const Heap = require('./heap');

// (Graph g, Vertex v, Parent u, Distance d) => (g, v) -> [ { v -> d }, { v -> u } ]
const shortestPaths = (g, u) => {
  const ds = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const us = new Map;
  
  const q = new Heap(([,, lhs], [,, rhs]) => lhs - rhs);

  for (; ;) {
    for (const e of g.neighbors.get(u)) {
      const [, v, w] = e;
      const d = ds.get(u) + w;
      if (d < ds.get(v)) {
        ds.set(v, d);
        us.set(v, u);
        q.enqueue(e);
      }
    }
    if (q.empty()) { break }
    ([, u] = q.dequeue());
  }

  return [ds, us];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
