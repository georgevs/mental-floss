// 1 <= n <= 1000

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const numTilings = (n) => {
  const m = Math.pow(10, 9) + 7;
  const iter = logf('iter', (i, s) => {
    if (s == 0) {
      if (i + 1 == n) { return 1 } // the last one
      if (i + 2 == n) { return 2 } // the last two
      let r = dp(i + 1, 0); // at least one more
      if (i + 2 < n) { // at least 2 more
        r += dp(i + 2, 0) + (2 * dp(i + 1, 1));
      }
      return r % m;
    }
    if (s == 1) {
      if (i + 2 == n) { return 1 } // the last 2
      return (dp(i + 1, 1) + dp(i + 2, 0)) % m; // more than two
    }
  });
  // const dp = iter;
  const dp = ((rs = new Map()) => (i, s) => {
    const h = i * 2 + s; let r;
    return rs.get(h) ?? (rs.set(h, r = iter(i, s)), r);
  })();
  return dp(0, 0);
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 100000; ++i) {
  asserteq(1, numTilings(1));
  asserteq(2, numTilings(2));
  asserteq(5, numTilings(3));
  asserteq(312342182, numTilings(30));
}
