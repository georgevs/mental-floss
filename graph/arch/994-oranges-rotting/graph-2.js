const graph = (xs) => {
  const h = xs.length, w = xs[0].length;
  const rs = new Map;
  const fs = new Map;
  const vertices = [];

  const val = (y, x) => 0 <= y && y < h && 0 <= x && x < w ? xs[y][x] : undefined;
  const ix = (y, x) => y * w + x;

  const roots = [];
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      const v = val(y, x);
      if (v === 2) {
        const r = new Rotten(y, x);
        rs.set(ix(y, x), r);
        const lf = val(y, x - 1) === 1 ? fs.get(ix(y, x - 1)) : undefined;
        if (lf) { r.neighbors.push(lf) }
        const tf = val(y - 1, x) === 1 ? fs.get(ix(y - 1, x)) : undefined;
        if (tf) { r.neighbors.push(tf) }

        roots.push(r);
        vertices.push(r);

      } else if (v === 1) {
        const f = new Fresh(y, x);
        fs.set(ix(y, x), f);

        const lv = val(y, x - 1);
        const lf = lv === 1 ? fs.get(ix(y, x - 1)) : undefined;
        const lr = lv === 2 ? rs.get(ix(y, x - 1)) : undefined;
        if (lf) { lf.neighbors.push(f); f.neighbors.push(lf) }
        if (lr) { lr.neighbors.push(f) }

        const tv = val(y - 1, x);
        const tf = tv === 1 ? fs.get(ix(y - 1, x)) : undefined;
        const tr = tv === 2 ? rs.get(ix(y - 1, x)) : undefined;
        if (tf) { tf.neighbors.push(f); f.neighbors.push(tf) }
        if (tr) { tr.neighbors.push(f) }

        vertices.push(f);
      }
    }
  }

  const g = new Graph(roots, vertices);
  vertices.push(g);

  return g;
};

class Node {
  constructor(neighbors) {
    this.neighbors = neighbors || [];
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
