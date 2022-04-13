
// keywords: postorder DFS, Eulerian path

const findItinerary = (tickets) => reduce(sort(graph(tickets)), 'JFK', []);

const get = (m, k) => { let v; return m.get(k) ?? (m.set(k, v = []), v) };
const graph = (xs) => xs.reduce((g, [f, t]) => (get(g, t), get(g, f).push(t), g), new Map);
const sort = (g) => (Array.from(g.values()).forEach(vs => vs.sort()), g);
const reduce = (g, v, r) => {
  const vs = g.get(v);
  while (vs.length > 0) {
    reduce(g, vs.shift(), r);
  }
  return (r.unshift(v), r);
};

module.exports = findItinerary;
