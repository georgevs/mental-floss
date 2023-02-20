const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (duplicateZeros, n) => loop(n || 1, () => {
  asserteq([1, 0, 0, 2, 3, 0, 0, 4], duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
  asserteq([1, 2, 3], duplicateZeros([1, 2, 3]));
  asserteq([], duplicateZeros([]));
  asserteq([8, 4, 5, 0, 0, 0, 0, 0], duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]))
  asserteq([0], duplicateZeros([0]));
  asserteq([0, 0, 0], duplicateZeros([0, 0, 0]));
  asserteq([0, 0, 1], duplicateZeros([0, 1, 0]));
  asserteq([0, 0, 1, 0], duplicateZeros([0, 1, 0, 0]));
  asserteq([0, 0, 1, 0, 0], duplicateZeros([0, 1, 0, 0, 0]));
});

module.exports = test;

if (require.main === module) {
  test(require('./duplicate-zeros-1'));
  test(require('./duplicate-zeros-2'));
  test(require('./duplicate-zeros-3'));
}
