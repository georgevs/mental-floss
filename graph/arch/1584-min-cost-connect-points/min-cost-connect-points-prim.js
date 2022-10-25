const minCostConnectPoints = (Heap) => prim(Heap);

const prim = (Heap) => (points) => {
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

  while (s.size < points.length) {
    for (v = 0; v < points.length; ++v) {
      if (!s.has(v)) {
        q.enqueue([u, v, manhattanDistance(points[u], points[v])]);
      }
    }
    ([, u, w] = dequeue());
    s.add(u);
    rw += w;
  }

  return rw; 
};

const manhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

module.exports = minCostConnectPoints;

if (require.main === module) {
  require('./test-min-const-connect-points')(minCostConnectPoints(require(process.argv[2] || './heap')), process.argv[3]);
}
