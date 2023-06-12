const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (findMaxConsecutiveOnes, n) => loop(n || 1, () => {
  asserteq(1, findMaxConsecutiveOnes([0]));
  asserteq(1, findMaxConsecutiveOnes([0, 0, 0]));
  asserteq(4, findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
  asserteq(4, findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
  asserteq(2, findMaxConsecutiveOnes([1, 1]));
  asserteq(3, findMaxConsecutiveOnes([0, 1, 1]));
  asserteq(3, findMaxConsecutiveOnes([1, 1, 0]));
  asserteq(3, findMaxConsecutiveOnes([1, 1, 0, 0]));
  asserteq(2, findMaxConsecutiveOnes([0, 1, 0, 0, 1, 0]));
  asserteq(2, findMaxConsecutiveOnes([0, 0, 1, 0, 0, 0, 1, 0]));
  asserteq(3, findMaxConsecutiveOnes([0, 1, 0, 1, 0]));
  asserteq(3, findMaxConsecutiveOnes([0, 1, 0, 1]));
  asserteq(3, findMaxConsecutiveOnes([1, 0, 1, 0]));
  asserteq(3, findMaxConsecutiveOnes([1, 0, 1]));
});

module.exports = test;

if (require.main === module) {
  test(require('./find-max-consecutive-ones-1'));
  test(require('./find-max-consecutive-ones-2'));
  test(require('./find-max-consecutive-ones-3'));
  test(require('./find-max-consecutive-ones-4'));
}
