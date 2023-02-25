const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (thirdMax, n) => loop(n || 1, () => {
  asserteq(1, thirdMax([3, 2, 1]));
  asserteq(2, thirdMax([1, 2]));
  asserteq(1, thirdMax([2, 2, 3, 1]));
});

module.exports = test;

if (require.main === module) {
  test(require('./third-max-1'));
  test(require('./third-max-2'));
  test(require('./third-max-3'));
}
