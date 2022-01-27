// n == nums.length
// 1 <= n <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4

const maxSubarraySumCircular = (xs) => { 
  const n = xs.length;
  let r = -Infinity;
  for (let i = 0; i < n; ++i) {
    let c = -Infinity;
    for (let j = i; j < i + n; ++j){
      const x = xs[j % n];
      c = Math.max(c + x, x);
      r = Math.max(r, c);
    }
  }
  return r;
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(3, maxSubarraySumCircular([1, -2, 3, -2]));
asserteq(10, maxSubarraySumCircular([5, -3, 5]));
asserteq(-2, maxSubarraySumCircular([-3, -2, -3]));
// asserteq(3516893, maxSubarraySumCircular(require('./test-30000.json')));
