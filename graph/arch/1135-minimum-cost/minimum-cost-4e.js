const minimumCost = (n, xs) => {
  const g = graph(n, xs);
  const mst = prim(g);
  return mst ? cost(mst) : -1;
};

const cost = (xs) => xs.reduce((acc, [v1, v2, w]) => acc + w, 0);

const prim = (g) => {
  if (g.vertices().length === 0) { return }
  let [v] = g.vertices();

  const rs = [];
  const q = queue();
  const s = new Set;

  while (rs.length + 1 < g.vertices().length) {
    s.add(v);

    for (const e of g.edges(v)) {
      const [v1, v2] = e;
      if (!s.has(v1) || !s.has(v2)) { q.enqueue(e) }
    }

    for (;;) {
      if (q.empty()) { return }
      const e = q.dequeue();
      const [v1, v2] = e;
      if (!s.has(v1)) { rs.push(e); v = v1; break }
      else if (!s.has(v2)) { rs.push(e); v = v2; break }
    }
  }
  
  return rs;
};

const graph = (n, xs) => {
  const vs = Array.from(Array(n), (_, v) => v);
  const vxs = Array.from(vs, () => []);
  const vertices = () => vs;
  const edges = (v) => vxs[v];
  const addEdge = ([u1, u2, w]) => {
    const v1 = u1 - 1, v2 = u2 - 1, e = [v1, v2, w];
    // if (v1 <= v2) {
      vxs[v1].push(e);
      vxs[v2].push(e);
    // }
  };
  xs.forEach(addEdge);
  return { vertices, edges };
};

const queue = () => {
  const xs = [];
  const enqueue = (x) => { xs.push(x); bubble(xs.length - 1) };
  const dequeue = () => { swap(0, xs.length - 1); const r = xs.pop(); sink(0); return r };
  const empty = () => xs.length == 0;
  const order = (l, r) => l[2] - r[2];

  const bubble = (i) => {
    for (let p = parent(i); order(xs[i], xs[p]) < 0; i = p, p = parent(i)) { 
      swap(i, p);
    }
  };

  const sink = (i) => {
    for (;;) {
      let t = i;
      const l = left(i);
      if (l < xs.length && order(xs[l], xs[t]) < 0) { t = l }
      const r = right(i);
      if (r < xs.length && order(xs[r], xs[t]) < 0) { t = r }
      if (t === i) { break }
      swap(t, i);
      i = t;
    }
  };

  const swap = (i, j) => { let t = xs[i]; xs[i] = xs[j]; xs[j] = t };
  const left = (i) => 2 * i + 1;
  const right = (i) => 2 * i + 2;
  const parent = (i) => (i - 1) / 2 | 0;

  return { enqueue, dequeue, empty };
};

module.exports = minimumCost;
