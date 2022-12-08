const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (generate, n) => loop(n || 1, () => {
  asserteq([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], generate(5));
  asserteq([[1]], generate(1));
});

module.exports = test;

if (require.main === module) {
  test(require('./pascal-triangle'));
}
