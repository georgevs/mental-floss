const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (findMaxConsecutiveOnes, n) => loop(n || 1, () => {
  asserteq(3, findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
  asserteq(2, findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
});

module.exports = test;

if (require.main === module) {
  test(require('./find-max-consequitive-ones-1'));
  test(require('./find-max-consequitive-ones-2'));
}
