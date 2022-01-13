// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  const m = normalize(nums);
  const xs = Array.from(m.keys()).sort();
  const n = xs.length;
  const dp = Array(n);
  console.log(m, xs);
  dp[0] = m.get(xs[0]);
  let r = dp[0];
  for (let i = 1; i < n; ++i) {
    dp[i] = (xs[i] > xs[i - 1] + 1) ? m.get(xs[i]) + dp[i - 1] :
      m.get(xs[i]) + (i > 1 ? dp[i - 2] : 0);
    r = Math.max(r, dp[i]);
  }
  console.log(dp);
  return r;
};

const normalize = xs => xs.reduce((acc, x) => (acc.set(x, (acc.get(x) ?? 0) + x), acc), new Map());

const { asserteq } = require('../../utils/asserteq');

// asserteq(6, deleteAndEarn([3, 4, 2]));
// asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
asserteq(18, deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]));
// asserteq(3042, deleteAndEarn(require('./test-100.json')));

