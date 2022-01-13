// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  const m = normalize(nums);
  const xs = Array.from(m.keys()).sort();
  console.log(m, xs);
  const iter = (i) => {
    if (i === 0) { return m.get(xs[i]) }
    if (xs[i] > xs[i - 1] + 1) { return m.get(xs[i]) + dp(i - 1) }
    return m.get(xs[i]) + (i > 1 ? dp(i - 2) : 0);
  };
  const n = xs.length;
  const dp = memoize(array(n), iter);
  return dp(n - 1);
};

const normalize = xs => xs.reduce((acc, x) => (acc.set(x, (acc.get(x) ?? 0) + x), acc), new Map());

const memoize = (m, f) => (i) => m.get(i) ?? m.set(i, f(i));

const array = (n) => {
  const m = Array(n);
  return { get: (i) => m[i], set: (i, r) => (m[i] = r, r) };
};

const { asserteq } = require('../../utils/asserteq');

// asserteq(6, deleteAndEarn([3, 4, 2]));
asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
// asserteq(NaN, deleteAndEarn(require('./test-100.json')));
