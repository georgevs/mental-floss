// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 104

const coinChange = (xs, s) => {
  const n = xs.length;

  const iter = (i, t) => {
    // console.log(i, t);
    if (t === 0) { return 0 }

    if (i + 1 === n) { 
      let r = t / xs[i] | 0;
      return r * xs[i] === t ? r : -1; 
    }

    let r;
    const c = (t / xs[i]) | 0;
    for (let j = 0; j <= c; ++j) {
      const l0 = dp(i + 1, t - j * xs[i]);
      const l1 = l0 === -1 ? -1 : (j + l0);
      if (l1 !== -1) { r = r === undefined ? l1 : Math.min(r, l1) }
    }
    return r === undefined ? -1 : r;
  };

  const dp = memoize(array(n, s + 1), iter);

  return dp(0, s);
};

const memoize = (m, f) => (i, t) => m.get(i, t) ?? m.set(i, t, f(i, t));

const array = (n, s) => {
  const m = Array(n * s);
  return { get: (i, t) => m[(i * s) + t], set: (i, t, y) => (m[(i * s) + t] = y, y) };
};


const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1; ++i) {

asserteq(3, coinChange([1, 2, 5], 11));
asserteq(-1, coinChange([2], 3));
asserteq(0, coinChange([1], 0));

}
