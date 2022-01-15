// 1 <= nums.length <= 2500
// -10^4 <= nums[i] <= 10^4

const lengthOfLIS = (xs) => {
  const n = xs.length;
  const dp = Array(n).fill(1);
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (xs[j] < xs[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max.apply(null, dp);
};


const { asserteq } = require('../../../utils/asserteq');

asserteq(4, lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
asserteq(4, lengthOfLIS([0, 1, 0, 3, 2, 3]));
asserteq(1, lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
asserteq(3, lengthOfLIS([4, 10, 4, 3, 8, 9]));
asserteq(6, lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
asserteq(4, lengthOfLIS([8, 1, 6, 2, 3, 10]));
