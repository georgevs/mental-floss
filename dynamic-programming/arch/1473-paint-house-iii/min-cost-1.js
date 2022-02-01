// m == houses.length == cost.length
// n == cost[i].length
// 1 <= m <= 100
// 1 <= n <= 20
// 1 <= target <= m
// 0 <= houses[i] <= n
// 1 <= cost[i][j] <= 10^4

const minCost = (hs, cs, m, n, t) => {
  const iter = (i, j, k) => {
    let r;
    if (i + 1 < m) {
      r = dp(i + 1, j, k);
      if (k + 1 < t) {
        for (let l = 0; l < n; ++l) {
          if (l !== j) { r = Math.min(r, dp(i + 1, l, k + 1)) }
        }
      }
    }
    return cs[i][j] + (r !== undefined ? r : 0);
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => (i, j, k) => {
    const h = ((i) * n + j) * t + k; let r;
    return rs.get(h) ?? (rs.set(h, (r = iter(i, j, k))), r);
  })();

  let r = dp(0, 0, 0);
  for (let j = 1; j < n; ++j) {
    r = Math.min(r, dp(0, j, 0));
  }
  return r;
};

const { asserteq } = require('../../utils/asserteq');

asserteq(9, minCost([0, 0, 0, 0, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3));
// asserteq(11, minCost([0, 2, 1, 2, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3));
// asserteq(-1, minCost([3, 1, 2, 3], [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 4, 3, 3));
