// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const m = normalize(nums);
  const xs = Array.from(m.keys()).sort((l, r) => l - r);
  const n = xs.length;

  const iter = (i) => {
    if (xs[i] > xs[i - 1] + 1) { return m.get(xs[i]) + dp(i - 1) }
    return Math.max(dp(i - 1), m.get(xs[i]) + (i > 1 ? dp(i - 2) : 0));
  };

  const dp = memoize(map([[0, m.get(xs[0])]]), iter);

  return dp(n - 1);
};

const normalize = xs => xs.reduce((acc, x) => (acc.set(x, (acc.get(x) ?? 0) + x), acc), new Map());

const memoize = (m, f) => (x) => m.get(x) ?? m.set(x, f(x));

const map = (i) => {
  const m = new Map(i);
  return { get: (x) => m.get(x), set: (x, y) => (m.set(x, y), y) };
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(6, deleteAndEarn([3, 4, 2]));
asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
asserteq(18, deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]));
asserteq(37, deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10]));
asserteq(3451, deleteAndEarn(require('./test-100.json')));
