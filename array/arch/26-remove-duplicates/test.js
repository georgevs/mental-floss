const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (removeDuplicates, n) => loop(n || 1, () => {
  const removeDuplicates_ = (xs) => xs.slice(0, removeDuplicates(xs));
  asserteq([], removeDuplicates_([]));
  asserteq([1], removeDuplicates_([1]));
  asserteq([1], removeDuplicates_([1,1]));
  asserteq([1, 2, 3], removeDuplicates_([1, 2, 3]));
  asserteq([1, 2], removeDuplicates_([1, 1, 2]));
  asserteq([0, 1, 2, 3, 4], removeDuplicates_([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
});

module.exports = test;

if (require.main === module) {
  test(require('./remove-duplicates'));
}
