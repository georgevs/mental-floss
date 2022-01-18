// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (xs) => {
  let r = 0;
  let b = xs[0];
  for (let i = 1; i < xs.length; ++i) {
    b = Math.min(b, xs[i]);
    r = Math.max(r, xs[i] - b);
  }
  return r;
};

const { asserteq } = require('../../utils/asserteq');

asserteq(5, maxProfit([7, 1, 5, 3, 6, 4]));
asserteq(0, maxProfit([7, 6, 4, 3, 1]));
