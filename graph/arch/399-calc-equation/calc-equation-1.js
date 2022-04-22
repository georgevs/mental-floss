// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

const logff = (log) => (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn;
const logf = false ? logff(console.log.bind(console)) : (_, fn) => fn;

const calcEquation = logf('ce', (equations, values, queries) => {
  const g = graph(equations, values);
  return queries.map(solve(g));
});

const graph = (equations, values) => {
  const add = (g, [e1, e2], i) => {
    let xs;
    const xs1 = g.get(e1) ?? (g.set(e1, xs = {}), xs);
    const xs2 = g.get(e2) ?? (g.set(e2, xs = {}), xs);
    xs1[e2] = values[i];
    xs2[e1] = 1 / values[i];
    return g;
  };
  return equations.reduce(add, new Map);
};

const dfs = (fn, g, e) => {
  const s = new Set;
  const p = [];
  const iter = (fn) => (e) => {
    if (!s.has(e)) {
      s.add(e);
      p.push(e);
      if (fn(p)) { return p }
      if (Object.keys(g.get(e)).some(visit)) { return p }
      s.delete(e);
      p.pop(e);
    }
  };
  const visit = iter(fn);
  return visit(e);
};

const solve = (g) => ([e1, e2]) => {
  if (!g.has(e1)) { return -1 }
  if (!g.has(e2)) { return -1 }
  if (e1 == e2) { return 1 }

  const endsWith = (e) => (p) => p[p.length - 1] == e;
  const p = dfs(endsWith(e2), g, e1) || [];

  const { r } = p.reduce(({ r, f }, t) => ({ r: f ? r * g.get(f)[t] : 1, f: t }), { r: -1 });
  return r;
};

module.exports = calcEquation;
