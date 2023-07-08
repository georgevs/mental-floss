const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (moveZeroes, n) => loop(n || 2, () => {
  asserteq([], moveZeroes([]));
  asserteq([0,0,0], moveZeroes([0,0,0]));
  asserteq([1], moveZeroes([1]));
  asserteq([1,0], moveZeroes([1,0]));
  asserteq([1,0], moveZeroes([0,1]));
  asserteq([1,0,0], moveZeroes([0,1,0]));
  asserteq([1, 2, 0], moveZeroes([1, 0, 2]));
  asserteq([1,2,3,0,0],moveZeroes([0,1,0,2,3]));

  asserteq([1,2,3,4,0,0,0,0,0,0],moveZeroes([0,0,1,2,0,0,0,0,3,4]));
  asserteq([1,2,3,4,5,6,0,0,0,0],moveZeroes([0,0,1,2,0,0,3,4,5,6]));

  asserteq([1,2,3,4,5,6,0,0,0,0,0,0,0,0],moveZeroes([0,0,1,2,0,0,0,0,3,4,0,0,5,6]));
  asserteq([1,2,3,4,5,6,7,8,0,0,0,0,0,0],moveZeroes([0,0,1,2,0,0,3,4,5,6,0,0,7,8]));

  asserteq([0], moveZeroes([0]));
  asserteq([1,3,12,0,0],moveZeroes([0,1,0,3,12]));
});

module.exports = test;

if (require.main === module) {
  test(require('./move-zeroes-1'));
  test(require('./move-zeroes-2'));
}
