// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of only lowercase English characters.

const longestCommonSubsequence = (s1, s2) => {
  const iter = (i, j) => {
    if (i === 0 || j === 0) return 0;
    if (s1[i-1] === s2[j-1]) return dp(i - 1, j - 1) + 1;
    return Math.max(dp(i - 1, j), dp(i, j - 1));
  };

  const dp = memoize(map(), iter);

  return dp(s1.length, s2.length);
};

const memoize = (m, f) => (i, j) => (h => m.get(h) ?? m.set(h, f(i, j)))(i * 10000 + j);
const map = (i) => {
  const m = new Map(i);
  return { get: (x) => m.get(x), set: (x, y) => (m.set(x, y), y) };
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
