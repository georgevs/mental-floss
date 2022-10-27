const Heap = require('./heap');

const minSpanningTree = ({ vertices, distance }) => {
  const orderByWeight = ([, , lw], [, , rw]) => lw - rw;
  const q = new Heap(orderByWeight);

  let u = 0;
  const s = new Set([u]);

  const dequeue = () => {
    while (!q.empty()) {
      const e = q.dequeue();
      if (!s.has(e[1])) { return e }
    }
  };

  let rw = 0;

  while (s.size < vertices.length) {
    for (v = 0; v < vertices.length; ++v) {
      if (!s.has(v)) {
        q.enqueue([u, v, distance(vertices[u], vertices[v])]);
      }
    }
    ([, u, w] = dequeue());
    s.add(u);
    rw += w;
  }

  return rw; 
};

module.exports = minSpanningTree;

if (require.main === module) {
  require('./test-min-const-connect-points')(require('./min-cost-connect-points')(module.exports), Number.parseInt(process.argv[2]));
}
