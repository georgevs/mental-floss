// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

const lengthOfLIS = (xs) => {
  console.log(xs);
  const iter = (i) => {
    let [r2, m2] = i < 2 ? [0, -Infinity] : dp(i - 2);
    if (m2 < xs[i]) { [r2, m2] = [r2 + 1, xs[i]] }
    let [r1, m1] = i < 1 ? [0, -Infinity] : dp(i - 1);
    if (m1 < xs[i]) { [r1, m1] = [r1 + 1, xs[i]] }
    return r1 < r2 ? [r2, m2] :
           r2 < r1 ? [r1, m1] :
           r1 > 1  ? [r1, Math.min(m1, m2)] :
                     [1, Math.min(m1, m2, xs[i])];
  };
  const dp = memoize(map(), log(iter));
  const [r] = dp(xs.length - 1);
  return r;
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
asserteq(3, lengthOfLIS([4, 10, 4, 3, 8, 9]));

