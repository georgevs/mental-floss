const minCostConnectPoints = (minSpanningTree) => (points) => {
  const edges = edgesFromPoints(points);
  return minSpanningTree({ vertices: points, edges, distance: manhattanDistance });
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

module.exports = minCostConnectPoints;
