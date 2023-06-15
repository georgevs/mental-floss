const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (reverseWords, n) => loop(n || 1, () => {
  asserteq('',reverseWords(''));
  asserteq('a',reverseWords('a'));
  asserteq(' a b ',reverseWords(' a b '));
  asserteq(' cba fed ',reverseWords(' abc def '));
  asserteq(' cba   fed ',reverseWords(' abc   def '));
  asserteq("s'teL ekat edoCteeL tsetnoc", reverseWords("Let's take LeetCode contest"));
  asserteq("doG gniD", reverseWords("God Ding"));
});

module.exports = test;

if (require.main === module) {
  test(require('./reverse-words'));
}
