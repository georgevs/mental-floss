
const UnionFind = require('./union-find');

// (Graph g, Edge e) => g -> [e]
const minSpanningTree = (g) => {
  const q = Array.from(g.edges).sort(([, , lhs], [, , rhs]) => lhs - rhs);
  const s = new UnionFind(g.vertices);
  const rs = new Set;
  for (const e of q) {
    const [u, v] = e;
    if (s.connect(u, v)) {
      rs.add(e);
      if (rs.size + 1 === g.vertices.length) { break }
    }
  }
  return Array.from(rs.values());
};

module.exports = minSpanningTree;

if (require.main === module) {
  require('./test-min-const-connect-points')(require('./min-cost-connect-points')(module.exports), Number.parseInt(process.argv[2]));
}
