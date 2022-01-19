// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (xs) => {
  console.log(xs);

  const n = xs.length;
  const m = Array.from(Array(n), () => Array(3));

  m[0][0] = 0;
  m[0][1] = -xs[0];
  m[0][2] = -Infinity;

  for (let i = 1; i < n; ++i) {
    m[i][0] = Math.max(m[i - 1][0], m[i - 1][2]);
    m[i][1] = Math.max(m[i - 1][0] - xs[i], m[i - 1][1]);
    m[i][2] = m[i - 1][1] + xs[i];
  }

  // console.log(m);

  return Math.max(m[n-1][0], m[n-1][1], m[n-1][2]);
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1; ++i) {
  asserteq(3, maxProfit([1, 2, 3, 0, 2]));
  asserteq(0, maxProfit([1]));
  asserteq(515062, maxProfit(require('./test-4000.json')));
}
