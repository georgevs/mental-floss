const { asserteq } = require('../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (maximumGap, n) => loop(n || 1, () => {
  asserteq(3, maximumGap([3, 6, 9, 1]));
  asserteq(0, maximumGap([10]));
  asserteq(97, maximumGap([1, 3, 100]));
  asserteq(97, maximumGap([100, 3, 2, 1]));
  asserteq(4, maximumGap([1,1,1,1,1,5,5,5,5,5]));
});

module.exports = test;

if (require.main === module) {
  test(require('./maximum-gap-1'));
  test(require('./maximum-gap-3'));
  test(require('./maximum-gap-4a'));
  test(require('./maximum-gap-4b'));
  test(require('./maximum-gap-4c'));
}
