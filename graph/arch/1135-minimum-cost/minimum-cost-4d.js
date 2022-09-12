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
  let dirty = false;
  const empty = () => xs.length === 0;
  const enqueue = (e) => { xs.push(e); dirty = true };
  const dequeue = () => {
    if (dirty) { 
      xs.sort((l, r) => l[2] - r[2]);
      dirty = false;
    }
    return xs.shift();
  };
  return { empty, enqueue, dequeue };
};

module.exports = minimumCost;
