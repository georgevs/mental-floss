const memoize = (m, f) => x => m.get(x) ?? m.set(x, f(x));
const map = (i) => {
  const m = new Map(i);
  return {
    get: (x) => m.get(x),
    set: (x, y) => (m.set(x, y), y)
  }
};

const minCostClimbingStairs = (cost) => {
  const dp = memoize(
    map(),
    (i) => i < cost.length ? cost[i] + Math.min(dp(i + 1), dp(i + 2)) : 0
  );
  return Math.min(dp(0), dp(1));
};

const { asserteq } = require('../../utils/asserteq');

asserteq(15, minCostClimbingStairs([10,15,20]));
asserteq(6, minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
