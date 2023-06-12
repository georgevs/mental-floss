const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (heightChecker, n) => loop(n || 1, () => {
  asserteq(3, heightChecker([1, 1, 4, 2, 1, 3]));
  asserteq(5, heightChecker([5, 1, 2, 3, 4]));
  asserteq(0, heightChecker([1, 2, 3, 4, 5]));
});

module.exports = test;

if (require.main === module) {
  test(require('./height-checker'));
}
