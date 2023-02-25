const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (replaceElements, n) => loop(n || 1, () => {
  asserteq([18, 6, 6, 6, 1, -1], replaceElements([17, 18, 5, 4, 6, 1]));
  asserteq([-1], replaceElements([400]));
});

module.exports = test;

if (require.main === module) {
  test(require('./replace-elements-1'));
}
