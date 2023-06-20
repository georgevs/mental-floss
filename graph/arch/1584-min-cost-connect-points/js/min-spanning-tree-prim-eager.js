
// CLRS 23.2 mst kruskal

const IndexedHeap = require('./indexed-heap');

// (Graph g, Edge e) => g -> [e]
const minSpanningTree = (g) => {

  const ks = new Map(g.vertices.map((v, i) => [v, i == 0 ? 0 : Infinity]));  // v.key
  const ps = new Map();  // v.parent
  
  const q = new IndexedHeap((lhs, rhs) => lhs - rhs);
  g.vertices.forEach(v => { q.insert(v, ks.get(v)) });

  const other = ([v1, v2], v) => v1 === v ? v2 : v1;
  while (!q.empty()) {
    const [u] = q.dequeue();
    for (const e of g.neighbors.get(u)) {
      const w = e[2], v = other(e, u);
      if (q.has(v) && w < ks.get(v)) {
        ps.set(v, e);
        ks.set(v, w);
        q.insert(v, w);
      }
    }
  }

  return Array.from(ps.values());
};

module.exports = minSpanningTree;

if (require.main === module) {
  require('./test-min-const-connect-points')(require('./min-cost-connect-points')(module.exports), Number.parseInt(process.argv[2]));
}
