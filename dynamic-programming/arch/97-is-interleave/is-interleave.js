// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const isInterleave = (s1, s2, s3) => {
  const n = s1.length;
  const m = s2.length;
  const k = s3.length;
  
  if (n + m != k) { return false }
  if (n == 0) { return s2 == s3 }
  if (m == 0) { return s1 == s3 }

  const iter = logf('iter', (i, j, l) => {
    if (l + 1 == k) {
      const r1 = i + 1 == n && j == m && s1[i] == s3[l];
      const r2 = i == n && j + 1 == m && s2[j] == s3[l];
      return r1 || r2;
    }
    const r1 = i < n && s1[i] == s3[l] && l + 1 < k && dp(i + 1, j, l + 1);
    const r2 = j < m && s2[j] == s3[l] && l + 1 < k && dp(i, j + 1, l + 1);
    return r1 || r2;
  });
  // const dp = iter;
  const dp = ((n1 = n + 1, m1 = m + 1, rs = new Map()) => (i, j, l) => {
    const h = (i * n1 + j) * m1 + l; let r;
    return rs.get(h) ?? (rs.set(h, r = iter(i, j, l)), r);
  })();
  return dp(0, 0, 0);
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(true, isInterleave('', '', ''));
asserteq(true, isInterleave('', 'abc', 'abc'));
asserteq(true, isInterleave('abc', '', 'abc'));

asserteq(true, isInterleave('a', 'x', 'ax'));
asserteq(true, isInterleave('a', 'x', 'xa'));

asserteq(true, isInterleave('ab', 'xy', 'abxy'));
asserteq(true, isInterleave('ab', 'xy', 'axby'));
asserteq(true, isInterleave('ab', 'xy', 'axyb'));
asserteq(true, isInterleave('ab', 'xy', 'xyab'));

asserteq(true, isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
asserteq(false, isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
