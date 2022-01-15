// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

const lengthOfLIS = (xs) => {
  console.log(xs);
  const iter = (i) => {
    if (i === 0) { return 1 }
    let r = 1;
    for (let j = 0; j < i; ++j) {
      if (xs[j] < xs[i]) {
        r = Math.max(r, dp(j) + 1);
      }
    }
    return r;
  };
  const dp = memoize(map(), log(iter));
  // const dp = memoize(map(), iter);
  return dp(xs.length - 1);
};

const memoize = (m, f) => (x) => m.get(x) ?? m.set(x, f(x));

const map = (i) => {
  const m = new Map(i);
  return { get: (x) => m.get(x), set: (x, y) => (m.set(x, y), y) };
};

const log = (f) => (...xs) => {
  const y = f(...xs);
  console.log(...xs, '->', y);
  return y;
}

const { asserteq } = require('../../../utils/asserteq');

// asserteq(4, lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// asserteq(4, lengthOfLIS([0, 1, 0, 3, 2, 3]));
// asserteq(1, lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
// asserteq(3, lengthOfLIS([4, 10, 4, 3, 8, 9]));
asserteq(6, lengthOfLIS([1,3,6,7,9,4,10,5,6]));
