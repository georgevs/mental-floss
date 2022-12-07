const { asserteq } = require('../../../utils/asserteq');

const test = (dominantIndex, n) => loop(n || 1, () => {
  asserteq(1, dominantIndex([3, 6, 1, 0]));
  asserteq(-1, dominantIndex([1, 2, 3, 4]));
  asserteq(-1, dominantIndex([0, 0, 3, 2]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./dominant-index'));
}
