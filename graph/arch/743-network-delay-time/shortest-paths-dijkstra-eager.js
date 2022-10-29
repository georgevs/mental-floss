// (Graph g, Vertex v, Parent u, Distance d) => (g, v) -> [ { v -> d }, { v -> u } ]
const shortestPaths = (IndexedHeap) => (g, u) => {
  const ds = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const us = new Map;
  
  const q = new IndexedHeap((lhs, rhs) => lhs - rhs);
  g.vertices.forEach(v => { q.insert(v, ds.get(v)) });
  
  while (!q.empty()) {
    const [u] = q.dequeue();
    for (const [, v, w] of g.neighbors.get(u)) {
      const d = ds.get(u) + w;
      if (d < ds.get(v)) {
        ds.set(v, d);
        us.set(v, u);
        q.insert(v, d);
      }
    }
  }

  return [ds, us];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(shortestPaths(require(process.argv[2] || './indexed-heap'))), Number.parseInt(process.argv[3]));
}
