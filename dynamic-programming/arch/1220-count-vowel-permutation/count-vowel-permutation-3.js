// 1 <= n <= 2 * 10^4

const countVowelPermutation = (n) => {
  const m = 1000000007;
  
  const rs = Array(10).fill(1);
  let i = 1;
  for (; i < n; ++i) {
    const ri = (i % 2) * 5, di = ((i + 1) % 2) * 5;
    rs[ri + 0] = rs[di + 1] % m;
    rs[ri + 1] = (rs[di + 0] + rs[di + 2]) % m;
    rs[ri + 2] = (rs[di + 0] + rs[di + 1] + rs[di + 3] + rs[di + 4]) % m;
    rs[ri + 3] = (rs[di + 2] + rs[di + 4]) % m;
    rs[ri + 4] = rs[di + 0] % m;
  }
  const ri = ((i + 1) % 2) * 5;

  let r = 0;
  for (let i = 0; i < 5; ++i) { 
    r += rs[ri + i];
  }
  return r % m;
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1000000; ++i) {
  asserteq(5, countVowelPermutation(1));
  asserteq(10, countVowelPermutation(2));
  asserteq(68, countVowelPermutation(5));
}
