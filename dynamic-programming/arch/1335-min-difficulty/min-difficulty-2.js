// 1 <= jobDifficulty.length <= 300
// 0 <= jobDifficulty[i] <= 1000
// 1 <= d <= 10

const minDifficulty = (s, d) => {
  const m = new Map();
  const n = s.length;
  const dp = (b, e, k) => {
    if (b + k > e) { return -1 } // not enough days in the range
    if (b + k + (n - e) < d) { return -1 } // not enough days outside the range

    const h = (b * n * d) + (e * d) + k; // in prms key
    let r = m.get(h);
    if (r !== undefined) { return r }

    if (k === 1) {
      r = s[b];
      for (let i = b + 1; i < e; ++i) {
        r = Math.max(r, s[i]);
      }
    } else {
      for (let i = b + 1; i <= e - (k - 1); ++i) {
        const l0 = dp(b, i, 1);
        const l1 = l0 !== -1 ? dp(i, e, k - 1) : -1;
        if (l1 !== -1) { r = r === undefined ? l0 + l1 : Math.min(r, l0 + l1) }
      }
    }
    m.set(h, r);
    return r;
  };
  return dp(0, n, d);
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 100; ++i) {
  
  asserteq(7, minDifficulty([6, 5, 4, 3, 2, 1], 2));
  asserteq(-1, minDifficulty([9, 9, 9], 4));
  asserteq(3, minDifficulty([1, 1, 1], 3));
  asserteq(15, minDifficulty([7, 1, 7, 1, 7, 1], 3));
  asserteq(3044, minDifficulty(require('./a-300.json'), 10));
  
}
