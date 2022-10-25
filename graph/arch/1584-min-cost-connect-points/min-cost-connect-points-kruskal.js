const minCostConnectPoints = (UnionFind) => (points) => {
  const xs = edgesFromPoints(points);
  return kruskal(UnionFind)(points.length, xs);
};

const edgesFromPoints = (points) => {
  const n = points.length;
  const xs = [];
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      xs.push([i, j, manhattanDistance(points[i], points[j])]);
    }
  }
  return xs;
};

const manhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const kruskal = (UnionFind) => (n, xs) => {
  
  xs.sort(([, , lw], [, , rw]) => lw - rw);
  
  const u = new UnionFind(n);
  let tw = 0, tn = 0;
  for (let k = 0; k < xs.length && tn + 1 < n; ++k) {
    const [i, j, w] = xs[k];
    if (u.connect(i, j)) { tw += w; ++tn }
  }

  return tw;
};

module.exports = minCostConnectPoints;

if (require.main === module) {
  require('./test-min-const-connect-points')(minCostConnectPoints(require(process.argv[2] || './union-find')), process.argv[3]);
}
