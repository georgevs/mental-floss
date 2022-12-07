const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (findDiagonalOrder, n) => loop(n || 1, () => {
  asserteq([1, 2, 4, 7, 5, 3, 6, 8, 9], findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  asserteq([1, 2, 3, 4], findDiagonalOrder([[1, 2], [3, 4]]));

  asserteq([0],findDiagonalOrder([[0]]));
  asserteq([0,1],findDiagonalOrder([[0,1]]));
  asserteq([0,1,2],findDiagonalOrder([[0,1,2]]));
});

module.exports = test;

if (require.main === module) {
  test(require('./find-diagonal-order-1'));
  test(require('./find-diagonal-order-2'));
}
