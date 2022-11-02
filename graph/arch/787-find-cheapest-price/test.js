const { asserteq } = require('../../../utils/asserteq');

const test = (findCeapestPrice, n) => loop(n || 1, () => {
  asserteq(700, findCeapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1));
  asserteq(200, findCeapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1));
  asserteq(500, findCeapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0));
  
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) { 
  test(require('./find-cheapest-price'));
}
