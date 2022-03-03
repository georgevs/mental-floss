// 1 <= n, k <= 30
// 1 <= t <= 1000

const numRollsToTarget = (n, k, t) => {
  const m = Math.pow(10, 9) + 7;
  const iter = (n, t) => {
    if (n == 1) { return 1 <= t && t <= k ? 1 : 0 }

    let r = 0;
    for (let i = 1; i <= k; ++i) {
      r += (t - i > 0) ? dp(n - 1, t - i) : 0;
    }
    return r % m;
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => (i, j) => {
    const h = (i - 1) * t + (j - 1); let r;
    return rs.get(h) ?? (rs.set(h, r = iter(i, j)), r);
  })();
  return dp(n, t);
};

const { asserteq } = require('../../utils/asserteq');

asserteq(1, numRollsToTarget(1, 6, 3));
asserteq(6, numRollsToTarget(2, 6, 7));
asserteq(222616187, numRollsToTarget(30, 30, 500));
