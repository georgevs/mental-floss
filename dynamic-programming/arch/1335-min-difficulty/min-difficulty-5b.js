// 1 <= jobDifficulty.length <= 300
// 0 <= jobDifficulty[i] <= 1000
// 1 <= d <= 10

const minDifficulty = (s, d) => {
  const n = s.length;

  const iter = (b, k) => {
    if (k === 1) {
      let r = s[b];
      for (let i = b + 1; i < n; ++i) {
        r = Math.max(r, s[i]);
      }
      return r;
    }
  
    let r, l;
    for (let i = b; i < n - (k - 1); ++i) {
      l = l === undefined ? s[i] : Math.max(l, s[i]);
      const ri = l + dp(i + 1, k - 1);
      r = r === undefined ? ri : Math.min(r, ri);
    }
    return r;
  };

  const dp = memoize(array(n, d), iter);

  return n < d ? -1 : dp(0, d);
};

const memoize = (m, f) => (b, k) => m.get(b, k) ?? m.set(b, k, f(b, k));

const array2 = (n, d) => {
  const m = Array.from(Array(n), () => new Array(d));
  return { get: (b, k) => m[b][k - 1], set: (b, k, y) => (m[b][k - 1] = y, y) };
};

const array = (n, d) => {
  const m = Array(n * d);
  return { get: (b, k) => m[(b * d) + (k - 1)], set: (b, k, y) => (m[(b * d) + (k - 1)] = y, y) };
};

const map = (d) => {
  const m = new Map();
  return { get: (b, k) => m.get((b * d) + (k - 1)), set: (b, k, y) => (m.set((b * d) + (k - 1), y), y) };
};



const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 100; ++i) {
  
  asserteq(7, minDifficulty([6, 5, 4, 3, 2, 1], 2));
  asserteq(-1, minDifficulty([9, 9, 9], 4));
  asserteq(3, minDifficulty([1, 1, 1], 3));
  asserteq(15, minDifficulty([7, 1, 7, 1, 7, 1], 3));
  asserteq(3044, minDifficulty(require('./a-300.json'), 10));
  
}
