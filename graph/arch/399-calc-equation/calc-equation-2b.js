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
    if (acc.rs.get(e2) === undefined) { acc.rs.set(e2, e2) }
    acc.rs.set(e1, e2);
    acc.ws.set(e1, values[i]);
    return acc;
  };
  const { rs, ws } = equations.reduce(iter, { rs: new Map, ws: new Map });

  const find = (e) => {
    let w = 1, r;
    while (e != (r = rs.get(e))) { w *= ws.get(e); e = r }
    return [e, w];
  };

  const solveQuery = logf('sq', ([e1, e2]) => {
    if (!rs.has(e1) || !rs.has(e2)) { return -1 }
    if (e1 == e2) { return 1 }

    const [r1, w1] = find(e1);
    const [r2, w2] = find(e2);
    return r1 != r2 ? -1 : w1 / w2;
  });

  return { solveQuery };
};

module.exports = calcEquation;
