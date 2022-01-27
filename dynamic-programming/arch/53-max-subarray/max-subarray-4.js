const maxSubArray = (xs) => {
  const n = xs.length;
  const iter = (i) => {
    if (i === 0) { return xs[0] }
    return Math.max(dp(i - 1) + xs[i], xs[i]);
  };
  const rs = Array(n);
  const dp = (i)=> rs[i] ?? (rs[i] = iter(i));
  dp(n - 1);
  return Math.max.apply(null, rs);
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
asserteq(1, maxSubArray([1]));
asserteq(23, maxSubArray([5,4,-1,7,8]));
