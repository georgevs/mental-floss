const minimumCost = (n, xs) => {
  const g = graph(n, xs);
  try { return cost(prim(g)) } catch { return -1 }
};

const cost = (xs) => xs.reduce((acc, [v1, v2, w]) => acc + w, 0);

const prim = (g) => {
  if (g.vertices().length == 0) { return }

  const rs = [];
  const sortByWeight = (l, r) => l[2] - r[2];
  const q = queue(sortByWeight);
  const s = new Set;

  const iter = (v) => {
    // console.log('v', v);
    s.add(v);
    g.edges(v).forEach(enqueue);
    const [e, u] = dequeue();
    rs.push(e);
    if (rs.length + 1 < g.vertices().length) { iter(u) }
  };
  const enqueue = (e) => {
    const [v1, v2] = e;
    if (!s.has(v1) || !s.has(v2)) { q.enqueue(e) }
  };
  const dequeue = () => {
    for (;;) {
      if (q.empty()) { throw RangeError() }
      const e = q.dequeue();
      // console.log('e', e);
      const [v1, v2] = e;
      if (!s.has(v1)) { return [e, v1] }
      if (!s.has(v2)) { return [e, v2] }
    }
  };

  iter(g.vertices()[0]);
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

const queue = (order) => {
  const xs = [];
  const enqueue = (x) => { xs.push(x); bubble(xs.length - 1) };
  const dequeue = () => { swap(0, xs.length - 1); const r = xs.pop(); sink(0); return r };
  const empty = () => xs.length == 0;

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
