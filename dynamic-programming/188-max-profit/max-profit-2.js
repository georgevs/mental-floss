// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

const maxProfit = (k, xs) => {
  if (k === 0) { return 0 }
  if (xs.length === 0) { return 0 }
  // console.log(xs);
  const n = xs.length;
  const iter = (s, l) => {
    let r = 0;
    for (let i = s; i + 1 < n; ++i) {
      for (let j = i + 1; j < n; ++j) {
        if (xs[i] < xs[j]) {
          r = Math.max(r, xs[j] - xs[i] + (j + 1 < n && l > 0 ? dp(j + 1, l - 1) : 0));
        }
      }
    }
    return r;
  };
  // const dp = memoize(map(k), log(iter));
  const dp = memoize(map(k), (iter));
  return dp(0, k - 1);
};

const log = f => (...a) => {
  const r = f(...a);
  console.log(a, '->', r);
  return r;
};

const memoize = (m, f) => (s, l) => m.get(s, l) ?? m.set(s, l, f(s, l));

const map = (k) => {
  const m = new Map();
  return {
    get: (s, l) => m.get(s * k + l),
    set: (s, l, r) => (m.set(s * k + l, r), r)
  };
};


const { asserteq } = require('../../utils/asserteq');

asserteq(2, maxProfit(2, [2, 4, 1]));
asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
