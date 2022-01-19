// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

const maxProfit = (k, xs) => {
  if (k === 0) { return 0 }
  const n = xs.length;
  if (n === 0) { return 0 }

  const m = Array.from(Array(k), () => Array(n));
  const m2 = Array.from(Array(n), () => Array(n).fill(0));

  const best = (s, e) => {
    let r = m2[s][e];
    if (r === undefined) {
      r = 0;
      let b = xs[s];
      for (let i = s; i < e; ++i) {
        b = Math.min(b, xs[i]);
        r = Math.max(r, xs[i] - b);
      }
      m2[s][e] = r;
    }
    return r;
  };
  
  const dp = (l, s) => {
    let r = m[l][s];
    if (r === undefined) {

      r = 0;
      for (let i = s; i + 1 < n; ++i) {
        r = Math.max(best(s, i) + (l > 0 && i + 2 < n ? dp(l - 1, i + 1) : 0));
      }

      m[l][s] = r;
    }
    return r;
  };

  return dp(k - 1, 0);
};

// const best = (xs) => {
//   const n = xs.length;
//   const m = Array(n);
//   let r = 0;
//   let b = xs[0];
//   for (let i = 0; i < n; ++i) { 
//     b = Math.min(b, xs[i]);
//     m[i] = r = Math.max(r, xs[i] - b);
//   }
//   return m;
// };

const { asserteq } = require('../../utils/asserteq');

// asserteq(2, maxProfit(2, [2, 4, 1]));
asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
// asserteq(NaN, maxProfit(29, require('./test-1000.json')));
