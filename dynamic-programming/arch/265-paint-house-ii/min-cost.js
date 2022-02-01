// costs.length == n
// costs[i].length == k
// 1 <= n <= 100
// 2 <= k <= 20
// 1 <= costs[i][j] <= 20

// const { logf, dbg } = require('../../utils/logf');
const logf = (p, fn) => fn;

const minCostII = logf('minCost', (xs) => {
  const n = xs.length;
  const k = xs[0].length;

  const iter = (i, j) => {
    let r;
    if (i + 1 < n) {
      for (let l = 0; l < k; ++l) {
        if (l != j) { r = min(r, dp(i + 1, l)) }
      }
    }
    return xs[i][j] + (r !== undefined ? r : 0);
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => logf('dp', (i, j) => {
    const h = i * k + j; let r;
    return rs.get(h) ?? (rs.set(h, (r = iter(i, j))), r);
  }))();
  let r = Infinity;
  for (let l = 0; l < k; ++l) {
    r = Math.min(r, dp(0, l));
  }
  return r;
});

const min = (l, r) =>
  l !== undefined && r !== undefined ? Math.min(l, r) :
    l !== undefined ? l :
      r !== undefined ? r :
        undefined;

const { asserteq } = require('../../../utils/asserteq');

asserteq(5, minCostII([[1, 5, 3], [2, 9, 4]]));
asserteq(5, minCostII([[1, 3], [2, 4]]));
