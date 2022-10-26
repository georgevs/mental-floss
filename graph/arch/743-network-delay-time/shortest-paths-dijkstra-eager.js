const shortestPaths = (Heap) => (g, u) => {
  const ws = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const ps = new Map;
  
  const vs = new Set;

  const q = new Heap((lhs, rhs) => lhs - rhs);
  g.vertices.forEach(v => { q.insert(v, ws.get(v)) });

  while (!q.empty()) {
    const [u, uw] = q.dequeue();
    vs.add(u);
    for (const [, v, ew] of g.neighbors.get(u)) {
      const vw = uw + ew;
      if (vw < ws.get(v)) {
        ws.set(v, vw);
        ps.set(v, u);
        q.insert(v, vw);
      }
    }
  }

  return [ws, ps];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(shortestPaths(require(process.argv[2] || './indexed-heap'))), Number.parseInt(process.argv[3]));
}
