// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

const noop = () => undefined;
const log = console.log.bind(console);
const logn = ({ n = 30, log }) => (...xs) => { if (n-- <= 0) { process.exit() }; log(...xs) };

const make_logf = ({ log, ys, yp, n = 0, d = '.' }) => (p = '') => (f) => (...xs) => {
  if (ys) { log(d.repeat(n - 1) + yp, ...ys, ':') }
  ys = xs, yp = p;
  ++n; 
  
  const r = f && f(...xs);
  
  --n;
  log(...(ys ? [d.repeat(n) + yp, ...ys] : [d.repeat(n)]), ...(f ? ['->', r] : []));
  ys = yp = undefined;

  return r;
};

// const logf = make_logf({ log });
// const dbg = logf('dbg')();

const logf = () => (f) => f;

const numDecodings = logf('numDecodings')((s) => {
  const n = s.length;

  const iter = logf('iter')((i) => {
    if (n <= i) { return 0 }
    
    const a = +s[i];
    if (i + 1 == n) { return a ? 1 : 0 }

    const b = a * 10 + (+s[i + 1]);
    
    return (
      (a ? dp(i + 1) : 0) +
      (10 <= b && b <= 26 ? (i + 2 == n ? 1 : dp(i + 2)) : 0)
    );
  });

  // const dp = iter;
  const dp = memoize(array(n), iter);

  return dp(0);
});

const memoize = (m, f) => (i) => m.get(i) ?? m.set(f(i), i);

const array = (n) => {
  const m = Array(n);
  return { get: (i) => m[i], set: (r, i) => (m[i] = r, r) };
};

const { asserteq } = require('../../../utils/asserteq');

for (let i = 0; i < 1; ++i) {
  asserteq(2, numDecodings('12'));
  asserteq(3, numDecodings('226'));
  asserteq(0, numDecodings('06'));
  asserteq(1, numDecodings('27'));
  asserteq(0, numDecodings('230'));
  asserteq(1836311903, numDecodings('111111111111111111111111111111111111111111111'));
}