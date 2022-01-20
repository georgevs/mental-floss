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
  // log(n, k);

  const iter = (i, c, b) => {
    if (i === 0) { return 1 }
    let r = 0;
    if (!b) {
      for (let j = 0; j < k; ++j) {
        r += dp(i - 1, j, j === c ? 1 : 0);
      }
    }
    else {
      for (let j = 0; j < k; ++j) {
        if (j !== c) { r += dp(i - 1, j, 0) }
      }
    }
    return r;
  };

  // const dp = iter;
  const dp = memoize(array(n, k), iter);
  
  return dp(n, k, 0);
};

const memoize = (m, f) => (i, c, b) => m.get(i, c, b) ?? m.set(i, c, b, f(i, c, b));

const array = (n, k) => {
  const m = Array.from(Array(n + 1), () => Array.from(Array(k + 1), () => Array(2)));
  return { get: (i, c, b) => m[i][c][b], set: (i, c, b, r) => (m[i][c][b] = r, r) };
};

const logf = (f) => (...xs) => {
  const r = f(...xs);
  log(xs, '->', r);
  return r;
};

const noop = () => undefined;
const log = console.log.bind(console);

const { asserteq } = require('../../../utils/asserteq');

for (let i = 0; i < 1; ++i) {
  asserteq(6, numWays(3, 2));
  asserteq(1, numWays(1, 1));
  asserteq(42, numWays(7, 2));
  asserteq(2, numWays(1, 2));
  asserteq(1, numWays(2, 1));
  asserteq(2147395600, numWays(2, 46340));
}
