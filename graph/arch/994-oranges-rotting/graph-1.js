const graph = (xs) => {
  const h = xs.length, w = xs[0].length;
  const rs = new Map;
  const fs = new Map;

  const val = (y, x) => 0 <= y && y < h && 0 <= x && x < w ? xs[y][x] : undefined;
  const ix = (y, x) => y * w + x;

  const fresh = (y, x) => {
    if (val(y, x) !== 1) { return }
    const i = ix(y, x);
    let n = fs.get(i);
    if (n) { return n }
    fs.set(i, n = new Fresh(y, x));
    n.neighbors = [
      fresh(y, x - 1), 
      fresh(y - 1, x), 
      fresh(y, x + 1), 
      fresh(y + 1, x)
    ].filter(Boolean);
    return n;
  };
  
  const rotten = (y, x) => {
    if (val(y, x) !== 2) { return }
    const i = ix(y, x);
    let n = rs.get(i);
    if (n) { return n }
    rs.set(i, n = new Rotten(y, x));
    n.neighbors = [
      fresh(y, x - 1, n), 
      fresh(y - 1, x, n), 
      fresh(y, x + 1, n), 
      fresh(y + 1, x, n)
    ].filter(Boolean);
    return n;
  };

  const roots = [];
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const r = rotten(y, x), f = fresh(y, x);
      if (r) { roots.push(r) }
    }
  }

  const vertices = [...fs.values(), ...rs.values()];
  const g = new Graph(roots, vertices);
  vertices.push(g);

  return g;
};

class Node {
  constructor(neighbors) {
    this.neighbors = neighbors;
  }
}
class Graph extends Node {
  constructor(roots, vertices) {
    super(roots);
    this.vertices = vertices;
  }
}
class Cell extends Node {
  constructor(y, x, neighbors) {
    super(neighbors);
    this.y = y;
    this.x = x;
  }
}
class Rotten extends Cell {}
class Fresh extends Cell {
  constructor(y, x, r, neighbors) {
    super(y, x, neighbors);
    this.r = r;
  }
}

const bfs = (fn, g) => {
  const vs = new Set;
  let q = [g], nq = [], l = 0;
  while (q.length > 0) {
    do {
      const u = q.shift();
      fn(l, u);
      for (const v of u.neighbors) {
        if (!vs.has(v)) {
          vs.add(v);
          nq.push(v);
        }
      }
    } while (q.length > 0);
    q = nq, nq = [], ++l;
  }
};

module.exports = { graph, bfs };

if (require.main === module) {
  require('./test-graph')(module.exports, process.argv[2]);
}
