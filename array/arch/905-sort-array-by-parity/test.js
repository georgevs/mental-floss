const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (sortArrayByParity, n) => loop(n || 1, () => {
  asserteq([2, 4, 3, 1], sortArrayByParity([3, 1, 2, 4]));
  asserteq([0], sortArrayByParity([0]));
});

module.exports = test;

if (require.main === module) {
  test(require('./sort-array-by-parity'));
}
