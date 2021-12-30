// 1 <= s1.length, s2.length <= 1000
// s1 and s2 consist of only lowercase English characters.

const longestCommonSubsequence = (a, b) => {
  const [s1, s2] = a.length < b.length ? [a, b] : [b, a];

  const iter = (s1, s2) => {
    // console.log(s1, s2);
    if (s1.length == 0 || subseq(s1, s2)) return s1.length;
    let m = 0;
    for (let i = 0; i < s1.length; ++i) {
      const s = s1.substring(0, i) + s1.substring(i + 1);
      const l = dp(s, s2);
      m = Math.max(m, l);
    }
    return m;
  };

  const dp = memoize(map(), iter);

  return dp(s1, s2);
};

const memoize = (m, f) => (a, b) => m.get(a) ?? m.set(a, f(a, b));
const map = (i) => {
  const m = new Map(i);
  return { get: m.get.bind(m), set: (x, y) => (m.set(x, y), y) };
};

const subseq = (s1, s2) => { 
  for (let j = -1, i = 0; i < s1.length; ++i) { 
    if ((j = s2.indexOf(s1[i], j + 1)) == -1) return false;
  } 
  return true;
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
