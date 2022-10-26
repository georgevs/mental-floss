const Heap = require('./heap');

const shortestPaths = (g, u) => {
  const ws = new Map(g.vertices.map(v => [v, v === u ? 0 : Infinity]));
  const ps = new Map;
  
  const q = new Heap(([,, lhs], [,, rhs]) => lhs - rhs);

  for (; ;) {
    for (const e of g.neighbors.get(u)) {
      const [, v, w] = e;
      if (ws.get(u) + w < ws.get(v)) {
        ws.set(v, ws.get(u) + w);
        ps.set(v, u);
        q.enqueue(e);
      }
    }
    if (q.empty()) { break }
    ([, u] = q.dequeue());
  }

  return [ws, ps];
};

module.exports = shortestPaths;

if (require.main === module) {
  require('./test-network-delay-time')(require('./network-delay-time')(module.exports), Number.parseInt(process.argv[2]));
}
