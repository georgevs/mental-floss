const shortestPaths = (g, u) => {
  const ws = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const ps = new Map;

  for (let i = 1; i < g.vertices.length; ++i) {
    for (const [u, v, ew] of g.edges) {
      const uw = ws.get(u);
      const vw = uw + ew;
      if (vw < ws.get(v)) {
        ws.set(v, vw);
        ps.set(v, u);
      }
    }
  }

  return [ws, ps];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
