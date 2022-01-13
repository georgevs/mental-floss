// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  const m = map();
  const iter = (l, x) => {
    const nums = m.get(l, x);
    let r = 0;
    for (let i = 0; i < nums.length; ++i) {
      m.get(l + 1, nums[i]) ?? m.set(l + 1, nums[i], drop(nums, i));
      const ri = nums[i] + dp(l + 1, nums[i]);
      r = Math.max(r, ri);
    }
    return r;
  };
  const dp = memoize(map(), iter);

  m.set(0, 0, nums);
  return dp(0, 0);
};

const drop = (m, i) => { const r = m.slice(); r.splice(i, 1); return r }

const memoize = (m, f) => (l, x) => m.get(l, x) ?? m.set(l, x, f(l, x));

const map = () => {
  const m = new Map();
  return {
    get: (l, x) => m.get(l * 10000 + x),
    set: (l, x, r) => (m.set(l * 10000 + x, r), r)
  };
};

const { asserteq } = require('../../utils/asserteq');

asserteq(6, deleteAndEarn([3, 4, 2]));
asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
