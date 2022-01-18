// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

const maxProfit = (k, xs) => {
  if (k === 0) { return 0 }
  const n = xs.length;
  if (n === 0) { return 0 }

  const m = Array.from(Array(k), () => Array(n));

  const dp = (l, s) => {
    let r = m[l][s];
    if (r === undefined) {
      r = 0;
      for (let i = s; i + 1 < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
          if (xs[i] < xs[j]) {
            r = Math.max(r, xs[j] - xs[i] + (l > 0 && j + 2 < n ? dp(l - 1, j + 1) : 0))
          }
        }
      }
      m[l][s] = r;
    }
    return r;
  };

  return dp(k - 1, 0);
};


const { asserteq } = require('../../utils/asserteq');

asserteq(2, maxProfit(2, [2, 4, 1]));
asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
// asserteq(NaN, maxProfit(29, require('./test-1000.json')));
