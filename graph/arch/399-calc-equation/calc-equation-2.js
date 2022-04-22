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
const logf = true ? logff(console.log.bind(console)) : (_, fn) => fn;

const calcEquation = logf('ce', (equations, values, queries) => queries.map(solveQuery(graph(equations, values))));

const solveQuery = (g) => ([e1, e2]) => {
  if (!g.has(e1) || !g.has(e2)) { return -1 }
  if (e1 == e2) { return 1 }

  const mul = ({ r, e1 }, e2) => ({ r: e1 ? r * g.value(e1, e2) : 1, e1: e2 });
  return g.path(e1, e2).reduce(mul, { r: -1 }).r;
};

const graph = (equations, values) => {
  const addEquation = (g, [e1, e2], i) => {
    let xs;
    const xs1 = g.get(e1) ?? (g.set(e1, xs = {}), xs);
    const xs2 = g.get(e2) ?? (g.set(e2, xs = {}), xs);
    xs1[e2] = values[i];
    xs2[e1] = 1 / values[i];
    return g;
  };
  const g = equations.reduce(addEquation, new Map);

  const dfs = (fn, e) => {
    const xs = new Set;
    const p = [];
    const visit = (e) => {
      if (!xs.has(e)) {
        xs.add(e);
        p.push(e);
        if (fn(p) || Object.keys(g.get(e)).some(visit)) { return p }
        p.pop(e);
        xs.delete(e);
      }
    }
    return visit(e);
  };

  const endsWith = (e) => (p) => p[p.length - 1] == e;
  const path = (e1, e2) => dfs(endsWith(e2), e1) || [];
  const has = g.has.bind(g);
  const value = (e1, e2) => g.get(e1)[e2];

  return { has, path, value };
};

module.exports = calcEquation;
