const maxSubArray = (ns) => {
  const dp = [ns[0]];
  let m = ns[0];
  for (let i = 1; i < ns.length; ++i) {
    dp[i] = dp[i-1] + ns[i];
    m = Math.max(m, dp[i]);
  }
  for (let i = 1; i < ns.length; ++i) {
    for (let j = i + 1; j <= ns.length; ++j) {
      dp[j-i-1] = dp[j-i-1] + ns[j-1] - ns[i-1];
      m = Math.max(m, dp[j-i-1]);
    }
  }
  return m;
};

const { asserteq } = require('../../utils/asserteq');

asserteq(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
asserteq(1, maxSubArray([1]));
asserteq(23, maxSubArray([5,4,-1,7,8]));
