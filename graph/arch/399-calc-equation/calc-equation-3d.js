// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

const { noop: logf } = require('../../../utils/logf');

const calcEquation = logf('ce', (equations, values, queries) => {
  const u = union(equations, values);
  return queries.map(solveQuery(u))
    .map(round(5));
});

const round = (n) => (x) => Number(x.toFixed(n));

const solveQuery = (u) => logf('sq', ([e1, e2]) => {
  if (!u.has(e1) || !u.has(e2)) { return -1 }
  if (e1 == e2) { return 1 }
  
  const [r1, w1] = u.find(e1);  // e1=r1/w1
  const [r2, w2] = u.find(e2);  // e2=r2/w2
  return r1 != r2 ? -1 : w2 / w1; // e1/e2=w2/w1
});

const union = (equations, values) => {
  const find = (rs, e) => {
    let [r, w] = rs.get(e), t = 1;
    while (r != e) { t *= w; e = r;[r, w] = rs.get(e) }
    return [r, t];
  };
  
  const connect = (rs, e1, e2, w) => {
    const [r1] = find(rs, e1), [r2, w2] = find(rs, e2);
    if (r1 != r2) { rs.set(r2, [e1, w / w2]) }
  };

  const init = (rs, [e1, e2], i) => {
    rs.get(e1) ?? rs.set(e1, [e1, 1]);
    rs.get(e2) ?? rs.set(e2, [e2, 1]);
    connect(rs, e1, e2, values[i]);
    return rs;
  };
  const rs = equations.reduce(init, new Map);

  return { find: find.bind(null, rs), has: rs.has.bind(rs) };
};

module.exports = calcEquation;
