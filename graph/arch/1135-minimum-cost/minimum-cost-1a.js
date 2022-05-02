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
  const ys = prim(g);  // minimum spanning tree edges

  // const sum = (acc, [v1, v2, w]) => (acc.w += w, ++acc.c, acc);
  // const { w, c } = reduce(sum, { w: 0, c: 0 }, ys);
  // return c + 1 == n ? w : -1;
  return ys.length + 1 < n ? -1 : ys.reduce((acc, [v1, v2, w]) => acc + w, 0);
});


// Prim algorithm
// const prim = (g) => (function* () {
//   const s = proximitySet(numVertices(g));
//   let w, v1, v2 = firstVertex(s);
//   while (v2) {
//     removeVertex(s, v2);
//     updateVerticesProximity(s, edges(g, v2));
//     ({ v1, v2, w } = findMinEdge(s));
//     if (v2) yield [v1, v2, w];
//   }
// })();

const prim = (g) => {
  const s = proximitySet(numVertices(g));
  let w, v1, v2 = firstVertex(s);
  const r = [];
  while (v2) {
    removeVertex(s, v2);
    updateVerticesProximity(s, edges(g, v2));
    ({ v1, v2, w } = findMinEdge(s));
    if (v2) r.push([v1, v2, w]);
  }
  return r;
};


const proximitySet = (n) => new Map(Array.from(Array(n), (_, i) => [i + 1, {}]));

// const updateVerticesProximity = (s, xs) => {
//   const compareAndUpdate = ([v1, v2, w]) => s.has(v2) && w < (s.get(v2).w ?? Infinity) && s.set(v2, { v: v1, w });
//   forEach(compareAndUpdate, xs);
// };
const updateVerticesProximity = (s, xs) => {
  for (let i = 0; i < xs.length; ++i) {
    const x = s.get(xs[i][1]);
    if (x !== undefined && (x.w == undefined || xs[i][2] < x.w)) {
      s.set(xs[i][1], { v: xs[i][0], w: xs[i][2] });
    }
  }
};

// const findMinEdge = (s) => { 
//   const min = (r, [v2, { v: v1, w }]) => (r.w == undefined && w != undefined) || w < r.w ? { v1, v2, w } : r;
//   return reduce(min, {}, s.entries());
// };
const findMinEdge = (s) => { 
  let r = {};
  for (const [v2, x] of s.entries()) {
    if ((r.w == undefined && x.w != undefined) || x.w < r.w) {
      r = { v1: x.v, v2, w: x.w };
    }
  }
  return r;
};

const removeVertex = (s, v) => s.delete(v);
const firstVertex = (s) => s.keys().next().value;


const graph = (n, xs) => {
  const g = new Map(Array.from(Array(n), (_, i) => [i + 1, new Map]));
  const addEdge = (g, [v1, v2, w]) => {
    const m1 = g.get(v1);
    const w1 = m1.get(v2);
    if (w1 === undefined || w < w1) {
      m1.set(v2, w);
      g.get(v2).set(v1, w);
    }
    return g;
  };
  return xs.reduce(addEdge, g);
};

// const edges = (g, v1) => map(([v2, w]) => [v1, v2, w], g.get(v1).entries());
const edges = (g, v1) => {
  const r = [];
  for (let [v2, w] of g.get(v1).entries()) {
    r.push([v1, v2, w]);
  }
  return r;
};

const numVertices = (g) => g.size;

// const forEach = (fn, xs) => { let i = 0; for (let x of xs) fn(x, i++) };
// const reduce = (fn, acc, xs) => { let i = 0; for (let x of xs) acc = fn(acc, x, i++); return acc };
// const map = (fn, xs) => (function* () { let i = 0; for (let x of xs) yield fn(x, i++) })();

module.exports = minimumCost;
