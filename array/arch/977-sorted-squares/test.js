const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (sortedSquares, n) => loop(n || 1, () => {
  asserteq([1, 4, 4], sortedSquares([-1, 2, 2]));
  asserteq([1], sortedSquares([-1]));
  asserteq([1, 4], sortedSquares([-2, -1]));
  asserteq([0, 1, 9, 16, 100], sortedSquares([-4, -1, 0, 3, 10]));
  asserteq([4, 9, 9, 49, 121], sortedSquares([-7, -3, 2, 3, 11]));
});

module.exports = test;

if (require.main === module) {
  test(require('./sorted-squares-1'));
  test(require('./sorted-squares-2'));
  test(require('./sorted-squares-3a'));
  test(require('./sorted-squares-3b'));
  test(require('./sorted-squares-3c'));
}
