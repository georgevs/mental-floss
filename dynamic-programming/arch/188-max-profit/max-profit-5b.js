// 0 <= k <= 100
// 0 <= prices.length <= 1000
// 0 <= prices[i] <= 1000

const maxProfit = (k, xs) => {
  if (k === 0) { return 0 }
  if (xs.length === 0) { return 0 }

  // const iprofit = profit(best, (xs, l, s) => iprofit(xs, l, s));
  // return dprofit(xs, k - 1, 0);

  const n = xs.length;
  const dbest = memoize(array(n, n + 1), best);
  const dprofit = memoize(array(k, n), profit(dbest, (xs, l, s) => dprofit(xs, l, s)));
  return dprofit(xs, k - 1, 0);
};

const memoize = (m, f) => (a, x, y) => (m.get(x, y) ?? m.set(x, y, f(a, x, y)));
const array = (n1, n2) => {
  const m = Array.from(Array(n1), () => Array(n2));
  return ({
    get: (x, y) => m[x][y],
    set: (x, y, r) => (m[x][y] = r, r)
  });
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

const profit = (best, iter) => (xs, l, s) => {
  const n = xs.length;
  let r = 0;
  for (let i = s; i < n; ++i) {
    r = Math.max(r, best(xs, s, i + 1) + (l > 0 && i + 2 < n ? iter(xs, l - 1, i + 1) : 0));
  }
  return r;
};


const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 10; ++i) { 
  asserteq(2, maxProfit(2, [2, 4, 1]));
  asserteq(7, maxProfit(2, [3, 2, 6, 5, 0, 3]));
  asserteq(2818, maxProfit(29, require('./test-1000.json')));
}
