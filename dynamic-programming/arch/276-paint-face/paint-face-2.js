// 1 <= n <= 50
// 1 <= k <= 10^5
// The testcases are generated such that the answer is in the range [0, 2^31 - 1] 
// for the given n and k.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numWays = (n, k) => {
  const m = Array(n);

  m[0] = k;
  m[1] = k * k;
  for (let i = 2; i < n; ++i) {
    m[i] = (k - 1) * (m[i - 1] + m[i - 2]);
  }
  return m[n - 1];
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1; ++i) {
  asserteq(6, numWays(3, 2));
  asserteq(1, numWays(1, 1));
  asserteq(42, numWays(7, 2));
  asserteq(2, numWays(1, 2));
  asserteq(1, numWays(2, 1));
  asserteq(2147395600, numWays(2, 46340));
}
