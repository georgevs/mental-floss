// n == nums.length
// 1 <= n <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4


// const { logf } = require('../../../utils/logf');
const logf = (p, f) => f;

const maxSubarraySumCircular = logf('maxSubarraySumCircular', (xs) => { 
  const min = minSubArray(xs);
  const max = maxSubArray(xs);
  const sum = xs.reduce((acc, x) => acc + x);
  return min === sum ? max : Math.max(max, sum - min);
});

const kadane = (fn) => (xs) => {
  const n = xs.length;
  let r = xs[0];
  let c = xs[0];
  for (let i = 1; i < n; ++i) {
    const x = xs[i];
    c = fn(c + x, x);
    r = fn(r, c);
  }
  return r;  
};

const maxSubArray = logf('maxSubArray', kadane(Math.max));
const minSubArray = logf('minSubArray', kadane(Math.min));


const { asserteq } = require('../../../utils/asserteq');

asserteq(6, maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
asserteq(1, maxSubArray([1]));
asserteq(23, maxSubArray([5, 4, -1, 7, 8]));


asserteq(3, maxSubarraySumCircular([1, -2, 3, -2]));
asserteq(10, maxSubarraySumCircular([5, -3, 5]));
asserteq(-2, maxSubarraySumCircular([-3, -2, -3]));
asserteq(3516893, maxSubarraySumCircular(require('./test-30000.json')));
