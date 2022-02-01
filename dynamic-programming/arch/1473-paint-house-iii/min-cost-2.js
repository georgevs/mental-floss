// m == houses.length == cost.length
// n == cost[i].length
// 1 <= m <= 100
// 1 <= n <= 20
// 1 <= target <= m
// 0 <= houses[i] <= n
// 1 <= cost[i][j] <= 10^4

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const minCost = logf('minCost', (hs, cs, m, n, t) => {
  const iter = (i, j, k) => {
    if (hs[i] !== 0 && hs[i] !== j + 1) { return [] } // no solution this route
    const x = hs[i] === 0 ? cs[i][j] : 0;
    if (i + 1 === m) { return k + 1 < t ? [] : [x] } // last house is valid choise if target reached

    let [r] = dp(i + 1, j, k);
    if (k + 1 < t) {
      for (let l = 0; l < n; ++l) {
        if (l !== j) { r = min([r], dp(i + 1, l, k + 1)) }
      }
    }
    if (r === undefined) { return [] } // no solution this route

    return [x + r];
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => logf('dp', (i, j, k) => {
    const h = ((i) * n + j) * t + k; let r;
    return rs.get(h) ?? (rs.set(h, (r = iter(i, j, k))), r);
  }))();

  let r;
  for (let j = 0; j < n; ++j) {
    r = min([r], dp(0, j, 0));
  }
  if (r === undefined) { return -1 } // no solution

  return r;
});

const min = ([l], [r]) =>
  l !== undefined && r !== undefined ? Math.min(l, r) :
    l !== undefined ? l :
      r !== undefined ? r :
        undefined;

const { asserteq } = require('../../../utils/asserteq');

asserteq(9, minCost([0, 0, 0, 0, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3));
asserteq(11, minCost([0, 2, 1, 2, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3));
asserteq(-1, minCost([3, 1, 2, 3], [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 4, 3, 3));
asserteq(12, minCost([0, 0, 0, 1], [[1, 5], [4, 1], [1, 3], [4, 4]], 4, 2, 4));
