// 1 <= prices.length <= 5 * 10^4
// 1 <= prices[i] < 5 * 10^4
// 0 <= fee < 5 * 10^4

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const maxProfit = logf('maxProfit', (xs, y) => {
  const n = xs.length;
  const iter = ('iter', (i, s) => { 
    if (s === 0) { return (i + 1 < n ? Math.max(dp(i + 1, 0), dp(i + 1, 1) - xs[i]) : 0) }
    if (s === 1) { return (i + 1 < n ? Math.max(dp(i + 1, 1), dp(i + 1, 0) + xs[i] - y) : Math.max(0, xs[i] - y)) }
  });
  // const dp = iter;
  const dp = ((rs = Array(n * 2)) => logf('dp', (i, s) => {
    const h = i * 2 + s;
    return rs[h] ?? (rs[h] = iter(i, s));
  }))();
  return dp(0, 0);
});


const { asserteq } = require('../../../utils/asserteq');

asserteq(8, maxProfit([1, 3, 2, 8, 4, 9], 2));
asserteq(6, maxProfit([1, 3, 7, 5, 10, 3], 3));
