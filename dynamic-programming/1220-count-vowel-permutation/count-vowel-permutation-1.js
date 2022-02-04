// 1 <= n <= 2 * 10^4

const countVowelPermutation = (n) => {
  const m = Math.pow(10, 9) + 7;
  const iter = (s, l) => {
    const i = l + 1; // next level
    if (i == n) { return 1 }
    if (s == 0) { return dp(1, i) % m }
    if (s == 1) { return (dp(0, i) + dp(2, i)) % m }
    if (s == 2) { return (dp(0, i) + dp(1, i) + dp(3, i) + dp(4, i)) % m }
    if (s == 3) { return (dp(2, i) + dp(4, i)) % m }
    if (s == 4) { return dp(0, i) % m }
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => (s, l) => {
    const h = l * 5 + s; let r;
    return rs.get(h) ?? (rs.set(h, r = iter(s, l)), r);
  })();

  let r = 0;
  for (let s = 0; s < 5; ++s) {
    r += dp(s, 0);
  }
  return r % m;
};

const { asserteq } = require('../../utils/asserteq');

asserteq(5, countVowelPermutation(1));
asserteq(10, countVowelPermutation(2));
asserteq(68, countVowelPermutation(5));
