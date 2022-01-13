// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function(nums) {
  // console.log(nums);
  let r = 0;
  while (nums.length > 0) {
    const i = nums[0];
    const n = nums.filter(x => x === i).length;
    nums = nums.filter(x => x !== i);
    r = Math.max(r, i * n + deleteAndEarn(trim(nums, i)));
  }
  return r;
};

const trim = (nums, i) => nums.filter(x => x + 1 !== i && x - 1 !== i);


const { asserteq } = require('../../utils/asserteq');

asserteq(6, deleteAndEarn([3, 4, 2]));
// asserteq(9, deleteAndEarn([2, 2, 3, 3, 3, 4]));
// asserteq(NaN, deleteAndEarn(require('./test-100.json')));
