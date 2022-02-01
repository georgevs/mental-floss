// costs.length == n
// costs[i].length == 3
// 1 <= n <= 100
// 1 <= costs[i][j] <= 20

// const { logf, dbg } = require('../../utils/logf');
const logf = (p, fn) => fn;

const minCost = logf('minCost', (xs) => {
  const n = xs.length;

  const iter = (i, j) => {
    let r;
    if (i + 1 < n) {
      if (j !== 0) { r = dp(i + 1, 0) }
      if (j !== 1) { r = min(r, dp(i + 1, 1)) }
      if (j !== 2) { r = min(r, dp(i + 1, 2)) }
    }
    return xs[i][j] + (r !== undefined ? r : 0);
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => logf('dp', (i, j) => {
    const h = i * 3 + j; let r;
    return rs.get(h) ?? (rs.set(h, (r = iter(i, j))), r);
  }))();
  return Math.min(dp(0, 0), dp(0, 1), dp(0, 2));
});

const min = (l, r) =>
  l !== undefined && r !== undefined ? Math.min(l, r) :
    l !== undefined ? l :
      r !== undefined ? r :
        undefined;

const { asserteq } = require('../../../utils/asserteq');

asserteq(10, minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));
asserteq(2, minCost([[7, 6, 2]]));
asserteq(26, minCost([[3, 5, 3], [6, 17, 6], [7, 13, 18], [9, 10, 18]]));
