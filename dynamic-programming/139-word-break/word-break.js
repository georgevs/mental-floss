// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

const wordBreak = (s, d) => {
  const iter = (t) => {
    for (const w of d) {
      const ts = t.split(w).filter(Boolean);
      if (ts.length === 0) { return true }
      if ((ts.length > 1 || ts[0] !== t) && ts.every(dp)) { return true }
    }
    return false;
  };
  const dp = memoize(map(), iter);
  return dp(s);
};

const memoize = (m, f) => (t) => m.get(t) ?? m.set(t, f(t));
const map = () => {
  const m = new Map();
  return { get: (x) => m.get(x), set: (x, y) => (m.set(x, y), y) };
};

const { asserteq } = require('../../utils/asserteq');

for (let i = 0; i < 1; ++i) {

  asserteq(true, wordBreak('leetcode', ['leet', 'code']));
  asserteq(true, wordBreak('applepenapple',['apple', 'pen']));
  asserteq(false, wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
  asserteq(true, wordBreak('cars', ['car', 'ca', 'rs']));
}
