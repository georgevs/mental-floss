const Heap = require('./heap');


// (Graph g, Edge e) => g -> [e]
const minSpanningTree = (g) => {
  let u = g.vertices[0];
  const s = new Set([u]);
  const q = new Heap(([, , lhs], [, , rhs]) => lhs - rhs);

  const other = ([v1, v2], v) => v === v1 ? v2 : v1;
  
  const rs = [];

  while (rs.length + 1 < g.vertices.length) {
    for (const e of g.neighbors.get(u)) { q.enqueue([u, other(e, u), e[2]]) }
    
    let e;
    while (!q.empty()) {
      e = q.dequeue();
      if (!s.has(e[1])) { break }
    }
    if (!e) { throw Error('Assert') }

    rs.push(e); u = e[1]; s.add(u);
  }

  return rs;
};


module.exports = minSpanningTree;

if (require.main === module) {
  require('./test-min-const-connect-points')(require('./min-cost-connect-points')(module.exports), Number.parseInt(process.argv[2]));
}
