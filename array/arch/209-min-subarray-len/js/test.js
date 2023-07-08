const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (minSubArrayLen, n) => loop(n || 1, () => {
  asserteq(2, minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
  asserteq(1, minSubArrayLen(4, [1, 4, 4]));
  asserteq(0, minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
  asserteq(3, minSubArrayLen(11, [1, 2, 3, 4, 5]));
  // asserteq(100000, minSubArrayLen(...require('./test-99900.json')));
});

module.exports = test;

if (require.main === module) {
  test(require('./min-subarray-len-1'));
  test(require('./min-subarray-len-2a'));
  test(require('./min-subarray-len-2b'));
}
