// 1 <= coins.length <= 300
// 1 <= coins[i] <= 5000
// All the values of coins are unique.
// 0 <= amount <= 5000

const make_logf = ({ log, ys, n = 0, d = '.' }) => (p = '') => (f) => (...xs) => {
  if (ys) { log(d.repeat(n - 1) + p, ...ys, ':') }
  ys = xs;
  ++n; 
  
  const r = f(...xs);
  
  --n;
  log(...(ys ? [d.repeat(n) + p, ...ys] : [d.repeat(n)]), '->', r);
  ys = undefined;

  return r;
};

const noop = () => undefined;
const log = noop;//console.log.bind(console);
const logn = ({ n = 30, log }) => (...xs) => { if (n-- <= 0) { process.exit() }; log(...xs) };
const logf = make_logf({ log });

const change = ((amount, coins) => {
  const xs = coins.slice().sort((l, r) => r - l);
  const n = xs.length;

  const iter = ((i, t) => {
    if (i === n) { return t === 0 ? 1 : 0 }
    let r = dp(i + 1, t);
    for (let k = 1; k <= (t / xs[i]) | 0; ++k) {
      r += dp(i + 1, t - k * xs[i]);
    }
    return r;
  });
  // const dp = iter;
  // const dp = memoize(map((i, t) => t * n + i), iter);

  const dp = ((m = new Map()) => (i, t) => {
    const h = t * n + i;
    let r = m.get(h);
    if (r === undefined) {
      m.set(h, r = iter(i, t));
    }
    return r;
  })();

  return dp(0, amount);
});

const memoize = (m, f) => (...xs) => m.get(xs) ?? m.set(f(...xs), xs);

const map = (ind) => {
  const m = new Map();
  return { get: (xs) => m.get(ind(...xs)), set: (r, xs) => (m.set(ind(...xs), r), r) };
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 100; ++i) {
  asserteq(4, change(5, [1, 2, 5]));
  asserteq(0, change(3, [2]));
  asserteq(1, change(10, [10]));
  asserteq(35502874, change(500, [3, 5, 7, 8, 9, 10, 11]));
}
