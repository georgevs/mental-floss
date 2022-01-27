
const longestCommonSubsequence = (xs, ys) => {
  const n = xs.length;
  const m = ys.length;

  const iter = (i, j) => {
    if (i == n || j == m) { return 0 }
    if (xs[i] == ys[j]) { return 1 + dp(i+1, j+1) }
    return Math.max(dp(i, j+1), dp(i+1, j));
  };

  // const dp = iter;
  const dp = ((rs = Array(n * m)) => (i, j) => {
    const h = i*m + j;
    return rs[h] ?? (rs[h] = iter(i, j));
  })();

  return dp(0, 0);
};

const { asserteq } = require('../../../utils/asserteq');

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
