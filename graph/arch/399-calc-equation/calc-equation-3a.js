// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

const { logf } = require('../../../utils/logf');

const calcEquation = logf('ce', (equations, values, queries) => {
  const u = union();
  equations.forEach(([e1, e2], i) => u.connect(e1, e2, values[i]));
  return queries.map(x => solveQuery(u)(x));
});

const solveQuery = (u) => logf('sq', ([e1, e2]) => {
  const [r1, w1] = u.find(e1);  // e1=r1/w1
  const [r2, w2] = u.find(e2);  // e2=r2/w2
  return r1 != r2 ? -1 : w2 / w1; // e1/e2=w2/w1
});

const union = () => {
  const rs = new Map;
  const ws = new Map;

  const get = (e) => {
    const r = rs.get(e) ?? (rs.set(e, e), e);
    const w = ws.get(e) ?? (ws.set(e, 1), 1);
    return [r, w];
  };

  const find = (e) => {
    let [r, w] = get(e), t = 1;
    while (r != e) { t *= w; e = r; [r, w] = get(e) }
    return [r, t];
  };

  const connect = (e1, e2, w) => {
    const [r1] = find(e1), [r2, w2] = find(e2);
    if (r1 != r2) { rs.set(r2, e1); ws.set(r2, w / w2) }
  };

  return { connect, find };
};

module.exports = calcEquation;
