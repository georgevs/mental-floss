const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (findDisappearedNumbers, n) => loop(n || 1, () => {
  asserteq([5, 6], findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
  asserteq([2], findDisappearedNumbers([1, 1]));
});

module.exports = test;

if (require.main === module) {
  test(require('./find-disappeared-numbers'));
}
