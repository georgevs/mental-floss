// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const { xs, m } = normalize(nums);
  const n = xs.length;
  const dp = Array(n);
  dp[0] = m[0];
  for (let i = 1; i < n; ++i) {
    const r0 = m[i] + (xs[i] > xs[i - 1] + 1 ? dp[i - 1] :
                                         i > 1 ? dp[i - 2] : 0);
    dp[i] = Math.max(r0, dp[i - 1]);
  }
  return dp[n - 1];
};

const normalize = xs => xs.sort((l, r) => l - r).reduce((acc, x, i) => {
  if (i === 0 || x !== acc.xs[acc.xs.length - 1]) { acc.xs.push(x); acc.m.push(x) }
  else { acc.m[acc.m.length - 1] += x }
  return acc;
}, { xs: [], m: [] });

const { asserteq } = require('../../../utils/asserteq');

asserteq(6, deleteAndEarn([3, 4, 2]));
asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
asserteq(18, deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]));
asserteq(37, deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]));
asserteq(3451, deleteAndEarn(require('./test-100.json')));
