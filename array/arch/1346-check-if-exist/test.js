const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (checkIfExist, n) => loop(n || 1, () => {
  asserteq(true, checkIfExist([10, 2, 5, 3]));
  asserteq(false, checkIfExist([3, 1, 7, 11]));
  asserteq(true, checkIfExist([7, 1, 14, 11]));
  asserteq(true, checkIfExist([0, 0]));
});

module.exports = test;

if (require.main === module) {
  test(require('./check-if-exist-1'));
}
