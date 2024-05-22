const { asserteq } = require('../../../../utils/asserteq');

const test = (plusOne, n) => loop(n || 1, () => {
  asserteq([4, 3, 2, 2], plusOne([4, 3, 2, 1]));
  asserteq([1, 0], plusOne([9]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./plus-one'));
}
