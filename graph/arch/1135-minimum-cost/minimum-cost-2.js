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
  const mst = prim(g);
  return mst ? cost(mst) : -1;
});

const cost = (xs) => xs.reduce((acc, [v1, v2, w]) => acc + w, 0);

const prim = (g) => {
  const n = g.size;
  const r = [];
  const s = new Set;
  const sortByWeight = ({ w: l }, { w: r }) => l - r;
  const q = queue(sortByWeight);

  q.push({ v2: 1, w: 0 });
  while (s.size < n) {
    if (q.size() == 0) { return }
    const { v1, v2, w } = q.shift();
    if (s.has(v2)) { continue }
    if (v1 !== undefined) { r.push([v1, v2, w]); }
    s.add(v2);
    g.get(v2).forEach(({ v, w }) => s.has(v) || q.push({ v1: v2, v2: v, w }));
  }

  return r;
};

const graph = (n, xs) => {
  const g = new Map(Array.from(Array(n), (_, i) => [i + 1, []]));
  const addEdge = (g, [v1, v2, w]) => (
    g.get(v1).push({ v: v2, w }),
    g.get(v2).push({ v: v1, w }),
    g
  );
  return xs.reduce(addEdge, g);
};

const queue = (less) => {
  const q = [];
  let dirty = false;

  const size = () => q.length;
  const push = (x) => { q.push(x); dirty = true };
  const shift = () => {
    if (dirty) { q.sort(less); dirty = false }
    return q.shift();
  }

  return { size, push, shift };
};

module.exports = minimumCost;
