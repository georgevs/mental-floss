// 1 <= jobDifficulty.length <= 300
// 0 <= jobDifficulty[i] <= 1000
// 1 <= d <= 10

const minDifficulty = (s, d) => {
  const n = s.length;
  const m = Array(n * d);

  const dp = (b, k) => {
    const h = (b * d) + (k - 1);
    let r = m[h];
    if (r !== undefined) { return r }

    if (k === 1) {
      r = s[b];
      for (let i = b + 1; i < n; ++i) {
        r = Math.max(r, s[i]);
      }
    } else {
      let l;
      for (let i = b; i < n - (k - 1); ++i) {
        l = l === undefined ? s[i] : Math.max(l, s[i]);
        const ri = l + dp(i + 1, k - 1);
        r = r === undefined ? ri : Math.min(r, ri);
      }
    }

    m[h] = r;
    return r;
  };

  return n < d ? -1 : dp(0, d);
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 100; ++i) {
  
  asserteq(7, minDifficulty([6, 5, 4, 3, 2, 1], 2));
  asserteq(-1, minDifficulty([9, 9, 9], 4));
  asserteq(3, minDifficulty([1, 1, 1], 3));
  asserteq(15, minDifficulty([7, 1, 7, 1, 7, 1], 3));
  asserteq(3044, minDifficulty(require('./a-300.json'), 10));
  
}
