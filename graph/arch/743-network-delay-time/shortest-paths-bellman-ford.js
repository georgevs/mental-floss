// (Graph g, Vertex v, Parent u, Distance d) => (g, v) -> [ { v -> d }, { v -> u } ]
const shortestPaths = (g, v0) => {
  const ds = new Map(g.vertices.map(v => [v, v === v0 ? 0 : Infinity]));
  const us = new Map;

  for (let i = 1; i < g.vertices.length; ++i) {
    for (const [u, v, w] of g.edges) {
      const d = ds.get(u) + w;
      if (d < ds.get(v)) {
        ds.set(v, d);
        us.set(v, u);
      }
    }
  }

  return [ds, us];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
