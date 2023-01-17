const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (getRow, n) => loop(n || 1, () => {
  asserteq([1, 3, 3, 1], getRow(3));
  asserteq([1], getRow(0));
  asserteq([1, 1], getRow(1));
});

module.exports = test;

if (require.main === module) {
  test(require('./pascal-triangle-1a'));
  test(require('./pascal-triangle-1b'));
  test(require('./pascal-triangle-2'));
}
