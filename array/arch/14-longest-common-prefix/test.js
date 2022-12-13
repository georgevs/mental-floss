const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (longestCommonPrefix, n) => loop(n || 1, () => {
  asserteq('fl', longestCommonPrefix(["flower","flow","flight"]));
  asserteq('', longestCommonPrefix(["dog","racecar","car"]));
  asserteq('aaa', longestCommonPrefix(['aaa']));
  asserteq('', longestCommonPrefix(['', 'aaab', 'aaac']));
  asserteq('aaa', longestCommonPrefix(['aaa', 'aaa', 'aaa']));
  asserteq('aaa', longestCommonPrefix(['aaab', 'aaacc', 'aaaddd']));
  asserteq('', longestCommonPrefix(['', 'aaab', 'aaacc', 'aaaddd']));
});

module.exports = test;

if (require.main === module) {
  test(require('./longest-common-prefix'));
}

