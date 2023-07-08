const { asserteq } = require('../../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (twoSum, n) => loop(n || 1, () => {
  asserteq([1, 2], twoSum([2, 7, 11, 15], 9));
  asserteq([1, 3], twoSum([2, 3, 4], 6));
  asserteq([1, 2], twoSum([-1, 0], -1));
});

module.exports = test;

if (require.main === module) {
  test(require('./two-sum-1'));
  test(require('./two-sum-2'));
  test(require('./two-sum-3'));
  test(require('./two-sum-4a'));
  test(require('./two-sum-4b'));
}
