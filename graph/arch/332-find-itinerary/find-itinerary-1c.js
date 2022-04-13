const findItinerary = (tickets) => eulerianPath(sort(graph(tickets)), 'JFK');

const get = (m, k) => { let v; return m.get(k) ?? (m.set(k, v = []), v) };
const graph = (xs) => xs.reduce((g, [f, t]) => (get(g, t), get(g, f).push(t), g), new Map);
const sort = (g) => (Array.from(g.values()).forEach(vs => vs.sort()), g);
const visit = (fn, g, v) => {
  for (const vs = g.get(v); vs.length > 0;) { 
    visit(fn, g, vs.shift());
  }
  fn(v);
};
const eulerianPath = (g, v) => {
  const r = [];
  visit(r.unshift.bind(r), g, v);
  return r;
};

module.exports = findItinerary;
