const maxSubArray = (xs) => {
  const n = xs.length;
  let r = -Infinity;
  let c = -Infinity 
  for (let i = 0; i < n; ++i) {
    c = Math.max(c + xs[i], xs[i]);
    r = Math.max(r, c);
  }
  return r;
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
asserteq(1, maxSubArray([1]));
asserteq(23, maxSubArray([5,4,-1,7,8]));
