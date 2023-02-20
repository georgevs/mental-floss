const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (merge, n) => loop(n || 1, () => {
  asserteq([1, 2, 2, 3, 5, 6], merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
  asserteq([1], merge([1], 1, [], 0));
  asserteq([1], merge([0], 0, [1], 1));
});

module.exports = test;

if (require.main === module) {
  test(require('./merge-1'));
  test(require('./merge-2'));
  test(require('./merge-3'));
}
