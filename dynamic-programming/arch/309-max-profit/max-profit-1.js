// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (xs) => {
  // const iprofit = profit.bind(null, best.bind(null, xs), (s) => iprofit(s), xs, 1);
  // return iprofit(0);
  const n = xs.length;
  if (n === 0) { return 0 }

  const dprofit = ((m) => (s) => {
    let r = m[s];
    if (r === undefined) {
      m[s] = r = profit(dbest, (s) => dprofit(s), xs, 1, s);
    }
    return r;
  })(Array(n));

  const dbest = ((m) => (s, e) => {
    let r = m[s][e];
    if (r === undefined) {
      m[s][e] = r = best(xs, s, e);
    }
    return r;
  })(Array.from(Array(n), () => Array(n + 1)));

  return dprofit(0);
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
    r = Math.max(r, best(s, i + 1) + (i + 2 + l < n ? iter(i + 1 + l) : 0));
  }
  return r;
};


const { asserteq } = require('../../../utils/asserteq');

for (let i = 0; i < 10; ++i) {
  asserteq(3, maxProfit([1, 2, 3, 0, 2]));
  asserteq(0, maxProfit([1]));
  asserteq(515062, maxProfit(require('./test-4000.json')));
}
