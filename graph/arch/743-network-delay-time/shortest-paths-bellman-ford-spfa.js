// (Graph g, Vertex v, Parent u, Distance d) => (g, v) -> [ { v -> d }, { v -> u } ]
const shortestPaths = (g, v0) => {
  const q = [v0];
  const s = new Set([v0]);
  const ds = new Map(g.vertices.map(v => [v, v === v0 ? 0 : Infinity]));
  const us = new Map;
  
  while (q.length > 0) {
    const u = q.shift(); s.delete(u);
    for (const e of g.neighbors.get(u)) {
      const [,v,w] = e, d = ds.get(u) + w;
      if (d < ds.get(v)) { 
        ds.set(v, d); 
        us.set(v, u);
        if (!s.has(v)) { q.push(v); s.add(v) }
      }
    }
  }

  return [ds, us];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
