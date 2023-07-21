const maxSubArray = (ns) => {
  let m;
  for (let i = 0; i < ns.length; ++i) {
    for (let j = i + 1; j <= ns.length; ++j) {
      const l = ns.slice(i, j).reduce((acc, x) => acc + x);
      m = m === undefined ? l : Math.max(l, m);
    }
  }
  return m;
};

const { asserteq } = require('../../utils/asserteq');

asserteq(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
asserteq(1, maxSubArray([1]));
asserteq(23, maxSubArray([5,4,-1,7,8]));
