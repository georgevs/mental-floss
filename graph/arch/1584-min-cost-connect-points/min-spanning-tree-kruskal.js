
const UnionFind = require('./union-find');

const minSpanningTree = ({ vertices: { length: n }, edges }) => {
  
  edges.sort(([, , lw], [, , rw]) => lw - rw);
  
  const u = new UnionFind(n);
  let tw = 0, tn = 0;
  for (let k = 0; k < edges.length && tn + 1 < n; ++k) {
    const [i, j, w] = edges[k];
    if (u.connect(i, j)) { tw += w; ++tn }
  }

  return tw;
};

module.exports = minSpanningTree;

if (require.main === module) {
  require('./test-min-const-connect-points')(require('./min-cost-connect-points')(module.exports), Number.parseInt(process.argv[2]));
}
