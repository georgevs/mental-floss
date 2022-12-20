const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (rotate, n) => loop(n || 1, () => {
  asserteq([1], rotate([1], 0));
  asserteq([1], rotate([1], 1));
  asserteq([1], rotate([1], 2));
  asserteq([1], rotate([1], 3));

  asserteq([1, 2], rotate([1, 2], 0));
  asserteq([1, 2], rotate([2, 1], 1));
  asserteq([1, 2], rotate([1, 2], 2));
  asserteq([1, 2], rotate([2, 1], 3));

  asserteq(Array.from('abcd'), rotate(Array.from('abcd'), 0));
  asserteq(Array.from('dabc'), rotate(Array.from('abcd'), 1));
  asserteq(Array.from('cdab'), rotate(Array.from('abcd'), 2));
  asserteq(Array.from('bcda'), rotate(Array.from('abcd'), 3));
  asserteq(Array.from('abcd'), rotate(Array.from('abcd'), 4));
  asserteq(Array.from('dabc'), rotate(Array.from('abcd'), 5));

  asserteq(Array.from('efgabcd'), rotate(Array.from('abcdefg'), 3));

  asserteq([5, 6, 7, 1, 2, 3, 4], rotate([1, 2, 3, 4, 5, 6, 7], 3))

  asserteq([1, 2, 3, 4, 5, 6, 7], rotate([1, 2, 3, 4, 5, 6, 7], 0));
  asserteq([5, 6, 7, 1, 2, 3, 4], rotate([1, 2, 3, 4, 5, 6, 7], 3));
  asserteq([3, 99, -1, -100], rotate([-1, -100, 3, 99], 2));
});

module.exports = test;

if (require.main === module) {
  test(require('./rotate-1'));
}
