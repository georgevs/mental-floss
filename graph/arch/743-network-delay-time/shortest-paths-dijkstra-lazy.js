const Heap = require('./heap');

const shortestPaths = (g, u) => {
  const ws = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const ps = new Map;
  
  const vs = new Set;
  
  const q = new Heap(([, lhs], [, rhs]) => lhs - rhs);
  q.enqueue([u, 0]);
  
  while (!q.empty()) {
    const [u, uw] = q.dequeue();
    if (vs.has(u)) { continue }
    vs.add(u);
    for (const [, v, ew] of g.neighbors.get(u)) {
      if (vs.has(v)) { continue }
      const vw = uw + ew;
      if (vw < ws.get(v)) {
        ws.set(v, vw);
        ps.set(v, u);
        q.enqueue([v, vw]);
      }
    }
  }

  return [ws, ps];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
