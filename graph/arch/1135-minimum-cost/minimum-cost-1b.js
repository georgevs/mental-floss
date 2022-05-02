// 1 <= n <= 10^4
// 1 <= connections.length <= 10^4
// connections[i].length == 3
// 1 <= xi, yi <= n
// xi != yi
// 0 <= costi <= 10^5

const logff = (log) => ({ log, logf: (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn });
const noop = ({ log: () => undefined, logf: (_, fn) => fn });
const { log, logf } = false ? logff(console.log.bind(console)) : noop;

const minimumCost = logf('mc', (n, xs) => {
  const g = graph(n, xs);
  const s = proximitySet(g.numVertices());

  let w;
  let v2 = s.firstVertex();
  let r = 0;

  while (v2) {
    s.removeVertex(v2);
    s.updateVerticesProximity(g.edges(v2));
    ({ v2, w } = s.findMinEdge());
    if (v2) r += w;
  }
  return s.size() == 0 ? r : -1;
});


const proximitySet = (n) => {
  const updateVerticesProximity = (xs) => {
    for (let i = 0; i < xs.length; ++i) {
      const x = s.get(xs[i][1]);
      if (x !== undefined && (x.w == undefined || xs[i][2] < x.w)) {
        s.set(xs[i][1], { v: xs[i][0], w: xs[i][2] });
      }
    }
  };

  const removeVertex = (v) => s.delete(v);
  const firstVertex = () => s.keys().next().value;

  const findMinEdge = () => { 
    let r = {};
    for (const [v2, x] of s.entries()) {
      if ((r.w == undefined && x.w != undefined) || x.w < r.w) {
        r = { v1: x.v, v2, w: x.w };
      }
    }
    return r;
  };

  const size = () => s.size;

  const s = new Map(Array.from(Array(n), (_, i) => [i + 1, {}]));
  
  return { findMinEdge, firstVertex, removeVertex, size, updateVerticesProximity };
};


const graph = (n, xs) => {
  const addEdge = ([v1, v2, w]) => {
    const m1 = g.get(v1);
    const w1 = m1.get(v2);
    if (w1 === undefined || w < w1) {
      m1.set(v2, w);
      g.get(v2).set(v1, w);
    }
    return g;
  };

  const edges = (v1) => {
    const r = [];
    for (let [v2, w] of g.get(v1).entries()) {
      r.push([v1, v2, w]);
    }
    return r;
  };
  
  const numVertices = () => g.size;
  
  const g = new Map(Array.from(Array(n), (_, i) => [i + 1, new Map]));
  xs.forEach(addEdge);

  return { edges, numVertices };
};


module.exports = minimumCost;
