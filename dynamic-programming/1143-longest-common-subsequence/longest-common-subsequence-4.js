// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of only lowercase English characters.

const longestCommonSubsequence = (s1, s2) => {
  const iter = (i, j) => {
    if (s1[i] === s2[j]) return (i === 0 || j === 0) ? 1 : (dp(i - 1, j - 1) + 1);
    return Math.max(i === 0 ? 0 : dp(i - 1, j), j === 0 ? 0 : dp(i, j - 1));
  };

  const dp = memoize(array(s1.length, s2.length), iter);

  return dp(s1.length - 1, s2.length - 1);
};

const memoize = (m, f) => (i, j) => m.get(i, j) ?? m.set(i, j, f(i, j));
const array = (n1, n2) => {
  const m = Array(n1 * n2);
  return { get: (i, j) => m[i * n2 + j], set: (i, j, y) => (m[i * n2 + j] = y, y) };
};

const { asserteq } = require('../../utils/asserteq');

asserteq(3, longestCommonSubsequence('abcde', 'ace'));
asserteq(3, longestCommonSubsequence('abc', 'abc'));
asserteq(0, longestCommonSubsequence('abc', 'def'));


asserteq(210,
  longestCommonSubsequence(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  )
);

asserteq(2, longestCommonSubsequence('ezupkr', 'ubmrapg'));

asserteq(6, longestCommonSubsequence('yzebsbuxmtcfmtodclszgh', 'ejevmhcvshclydqrulwbyha'));
