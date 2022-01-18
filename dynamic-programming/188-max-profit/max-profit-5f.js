// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

const maxProfit = (k, xs) => {
  if (k === 0) { return 0 }
  const n = xs.length;
  if (n === 0) { return 0 }

  const dbest = ((m) => (s, e) => {
    let r = m[s][e];
    if (r === undefined) {
      m[s][e] = r = best(xs, s, e);
    }
    return r;
  })(Array.from(Array(n), () => Array(n + 1)));
  
  const dprofit = ((m) => (l, s) => {
    let r = m[l][s];
    if (r === undefined) {
      m[l][s] = r = profit(dbest, dprofit, xs, l, s);
      // console.log(l, s, '->', r);
    }
    return r;
  })(Array.from(Array(k), () => Array(n)));

  return dprofit(k - 1, 0);
};

const best = (xs, s, e) => {
  let r = 0;
  let b = xs[s];
  for (let i = s; i < e; ++i) {
    b = Math.min(b, xs[i]);
    r = Math.max(r, xs[i] - b);
  }
  return r;
};

const profit = (best, iter, xs, l, s) => {
  const n = xs.length;
  let r = 0;
  for (let i = s; i < n; ++i) {
    r = Math.max(r, best(s, i + 1) + (l > 0 && i + 2 < n ? iter(l - 1, i + 1) : 0));
  }
  return r;
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 10; ++i) { 
  asserteq(2, maxProfit(2, [2, 4, 1]));
  asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
  asserteq(2818, maxProfit(29, require('./test-1000.json')));
}
