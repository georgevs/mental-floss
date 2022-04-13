// 1 <= tickets.length <= 300
// tickets[i].length == 2
// from.length == 3
// to.length == 3
// `from` and to` consist of uppercase English letters.
// from != to

const logff = (log) => (fn) => (...args) => (log(...args), fn(...args));
// const logf = logff(console.log.bind(console));
const logf = (fn) => fn;

const findItinerary = logf((tickets) => reduce(sort(graph(tickets)), 'JFK', tickets.length));

const get = (m, k, v) => m.get(k) ?? (m.set(k, v), v);
const graph = (xs) => xs.reduce((g, [f, t]) => (get(g, t, []), get(g, f, []).push(t), g), new Map);
const sort = (g) => (Array.from(g.values()).forEach(vs => vs.sort()), g);

// const reduce = (g, t) => t === undefined ? [] : [t, ...reduce(g, g.get(t).shift())];

const reduce = logf((g, t, N) => {
  if (t !== undefined) {
    const vs = g.get(t);
    const n = vs.length;
    for (let i = 0; i < n; ++i) {
      const [t1] = vs.splice(i, 1);
      const r = reduce(g, t1, N - 1);
      if (r) { return [t, ...r] }
      vs.splice(i, 0, t1);
    }
  }
  return N === 0 && t ? [t] : undefined;
});

module.exports = findItinerary;
