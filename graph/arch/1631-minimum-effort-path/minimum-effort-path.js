const IndexedHeap = require('./indexed-heap');

const minimumEffortPath = (M) => {
  // console.log(M);
  const g = new Graph(M);
  const [D] = dijkstra(g, g.vertices[0]);
  return D.get(g.vertices[g.vertices.length - 1]);
};

// (Graph g, Vertex v, Effort d) => (g, v) -> [{ v -> d }]
const dijkstra = (g, s) => {
  // console.log(s, g);

  const D = new Map(g.vertices.map(v => [v, v === s ? 0 : Infinity]));
  // const U = new Map;

  const H = new IndexedHeap((lhs, rhs) => lhs - rhs);
  g.vertices.map(v => H.insert(v, D.get(v)));

  const relax = (e) => { 
    const [u, v, w] = e, d = Math.max(D.get(u), w);
    if (d < D.get(v)) {
      D.set(v, d);
      // U.set(v, e);
      H.insert(v, d);
    }
  };

  while (!H.empty()) {
    const [u] = H.dequeue();
    for (const e of g.neigbors[u]) {
      relax(e);
    }
  }

  // console.log(D, U);
  return [D];
};

class Graph {
  constructor(M) {
    const h = M.length, Y = h - 1, w = M[0].length, X = w - 1;
    this.vertices = Array.from(Array(w * h), (_, i) => i);
    this.neigbors = this.vertices.map(() => []);
    for (let y = 0; y < h; ++y) {
      for (let x = 0; x < w; ++x) {
        const u = y * w + x;
        if (0 < x) { this.neigbors[u].push([u, y * w + (x - 1), Math.abs(M[y][x] - M[y][x - 1])]) }
        if (0 < y) { this.neigbors[u].push([u, (y - 1) * w + x, Math.abs(M[y][x] - M[y - 1][x])]) }
        if (x < X) { this.neigbors[u].push([u, y * w + (x + 1), Math.abs(M[y][x] - M[y][x + 1])]) }
        if (y < Y) { this.neigbors[u].push([u, (y + 1) * w + x, Math.abs(M[y][x] - M[y + 1][x])]) }
      }
    }
  }
}

module.exports = minimumEffortPath;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
