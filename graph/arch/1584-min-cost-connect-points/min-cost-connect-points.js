const Graph = require('./graph');

const minCostConnectPoints = (minSpanningTree) => (points) => {
  const g = new Graph({ vertices: points, edges: edgesFromPoints(points) });
  const t = minSpanningTree(g);
  return t.reduce((acc, [, , w]) => acc + w, 0);
};

const edgesFromPoints = (points) => {
  const n = points.length;
  const edges = [];
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const u = points[i], v = points[j], w = manhattanDistance(u, v);
      edges.push([u, v, w]);
    }
  }
  return edges;
};

const manhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

module.exports = minCostConnectPoints;
