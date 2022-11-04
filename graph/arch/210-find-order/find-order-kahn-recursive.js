const findOrder = (n, xs) => kahn(n, xs);

const kahn = (n, xs) => {
  const d = (l, r) => new Set(Array.from(l).filter(x => !r.has(x)));
  const g = xs => d(new Set(xs.map(([, u]) => u)), new Set(xs.map(([v]) => v)));
  const h = (xs, s) => xs.filter(([, u]) => !s.has(u));
  const f = (xs) => {
    if (xs.length === 0) { return [] }
    const s = g(xs);
    if (s.size === 0) { return } // loop detected
    const r = f(h(xs, g(xs)));
    return r ? [...s.values(), ...r] : r;
  };
  const r = f(xs);
  if (!r) { return [] } // no solution
  const a = n => new Set(Array.from(Array(n), (_, i) => i));
  return [...r, ...d(a(n), new Set(r))];
};


module.exports = findOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
