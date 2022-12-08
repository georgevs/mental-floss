const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (spiralOrder, n) => loop(n || 1, () => {
  asserteq([0], spiralOrder([[0]]));

  asserteq([0, 1], spiralOrder([[0, 1]]));
  asserteq([0, 1, 2], spiralOrder([[0, 1, 2]]));
  asserteq([0, 1, 2, 3], spiralOrder([[0, 1, 2, 3]]));

  asserteq([0, 1], spiralOrder([[0], [1]]));
  asserteq([0, 1, 2], spiralOrder([[0], [1], [2]]));
  asserteq([0, 1, 2, 3], spiralOrder([[0], [1], [2], [3]]));

  asserteq([1, 2, 3, 6, 9, 8, 7, 4, 5], spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  asserteq([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7], spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
});

module.exports = test;

if (require.main === module) {
  test(require('./spiral-order-1'));
  test(require('./spiral-order-2'));
}
