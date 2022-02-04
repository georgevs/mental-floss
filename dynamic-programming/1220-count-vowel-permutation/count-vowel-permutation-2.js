// 1 <= n <= 2 * 10^4

const countVowelPermutation = (n) => {
  const m = 1000000007;
  
  let dp = Array(5).fill(1);
  let rs = Array(5);
  for (let i = 1; i < n; ++i) {
    rs[0] = dp[1] % m;
    rs[1] = (dp[0] + dp[2]) % m;
    rs[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % m;
    rs[3] = (dp[2] + dp[4]) % m;
    rs[4] = dp[0] % m;
    [dp, rs] = [rs, dp];
  }
  // return dp.reduce((acc, r) => acc + r) % m;
  let r = 0;
  for (let i = 0; i < 5; ++i) { 
    r += dp[i];
  }
  return r % m;
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1000000; ++i) {
  asserteq(5, countVowelPermutation(1));
  asserteq(10, countVowelPermutation(2));
  asserteq(68, countVowelPermutation(5));
}
