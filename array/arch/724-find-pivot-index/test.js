const { asserteq } = require('../../../utils/asserteq');

const test = (pivotIndex, n) => loop(n || 1, () => {
  asserteq(3, pivotIndex([1, 7, 3, 6, 5, 6]));
  asserteq(-1, pivotIndex([1, 2, 3]));
  asserteq(0, pivotIndex([2, 1, -1]));
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./find-pivot-index-1'));
  test(require('./find-pivot-index-2'));
}