const minimumCost = (n, xs) => {
  const g = graph(n, xs);
  try { return cost(prim(g)) } catch { return -1 }
};

const cost = (xs) => xs.reduce((acc, [v1, v2, w]) => acc + w, 0);

const prim = (g) => {
  const [v0] = g.vertices();
  if (v0 === undefined) { return [] }

  const rs = [];
  const q = queue();
  const s = new Set;

  const dequeue = () => {
    for (; ;) {
      const e = q.dequeue();
      // console.log('e', e);
      const [v1, v2] = e;
      if (!s.has(v1)) { return [e, v1] }
      if (!s.has(v2)) { return [e, v2] }
    }
  };
  const enqueue = (e) => {
    const [v1, v2] = e;
    if (!s.has(v1) || !s.has(v2)) { q.enqueue(e) }
  };

  for (let v = v0, e, u; rs.length + 1 < g.vertices().length; v = u) {
    // console.log('v', v);
    s.add(v);
    g.edges(v).forEach(enqueue);
    ([e, u] = dequeue());
    rs.push(e);
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
    if (xs.length == 0) { throw Error('Queue is empty') }
    if (dirty) { 
      xs.sort((l, r) => l[2] - r[2]);
      dirty = false;
    }
    return xs.shift();
  };
  return { empty, enqueue, dequeue };
};

module.exports = minimumCost;
