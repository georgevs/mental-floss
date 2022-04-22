// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

const { logf } = require('../../utils/logf');

const calcEquation = logf('ce', (equations, values, queries) => {
  const u = union(equations, values);
  return queries.map(x => u.solveQuery(x));
});

const union = (equations, values) => {
  const iter = (acc, [e1, e2], i) => {
    if (acc.rs.get(e1) === undefined) { acc.rs.set(e1, e1) }
    acc.rs.set(e2, e1);
    acc.ws.set(e2, values[i]);
    return acc;
  };
  const { rs, ws } = equations.reduce(iter, { rs: new Map, ws: new Map });

  const solveQuery = logf('sq', ([e1, e2]) => {
    if (!rs.has(e1) || !rs.has(e2)) { return -1 }
    if (e1 == e2) { return 1 }
    
    const iter = logf('iter', (e1, e) => {
      if (rs.get(e) == e1) { return ws.get(e) }
      if (rs.get(e) != e) {
        let r = iter(e1, rs.get(e));
        if (r !== undefined) { return r * ws.get(e) }
      }
    });
    let r;
    if ((r = iter(e1, e2)) != undefined) { return r }
    if ((r = iter(e2, e1)) != undefined) { return 1 / r }
    return -1;
  });
  return { solveQuery };
};

module.exports = calcEquation;
