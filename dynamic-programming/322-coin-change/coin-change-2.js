// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 104

const coinChange = (xs, s) => {
  const iter = (t) => {
    if (t === 0) { return 0 }
    let r;
    for (let i = 0; i < xs.length; ++i) {
      const l = t < xs[i] ? -1 : dp(t - xs[i]);
      if (l !== -1) { r = r === undefined ? l + 1 : Math.min(r, l + 1) }
    }
    return r === undefined ? -1 : r;
  };

  const dp = memoize(map(), iter);

  return dp(s);
};

const memoize = (m, f) => (t) => m.get(t) ?? m.set(t, f(t));

const map = () => {
  const m = new Map();
  return { get: (t) => m.get(t), set: (t, y) => (m.set(t, y), y) };
};


const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1; ++i) {

asserteq(3, coinChange([1, 2, 5], 11));
asserteq(-1, coinChange([2], 3));
asserteq(0, coinChange([1], 0));

}
