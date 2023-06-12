const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (validMountainArray, n) => loop(n || 1, () => {
  asserteq(false, validMountainArray([2, 1]));
  asserteq(false, validMountainArray([3, 5, 5]));
  asserteq(true, validMountainArray([0, 3, 2, 1]));
  asserteq(false, validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  asserteq(false, validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
});

module.exports = test;

if (require.main === module) {
  test(require('./valid-mountain-array-1a'));
  test(require('./valid-mountain-array-1b'));
  test(require('./valid-mountain-array-1c'));
  test(require('./valid-mountain-array-2'));
}
