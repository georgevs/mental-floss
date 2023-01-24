const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (reverseWords, n) => loop(n || 1, () => {
  asserteq('abc def', reverseWords('  def  abc  '));
  asserteq('blue is sky the', reverseWords('the sky is blue'));
  asserteq('world hello', reverseWords('  hello world  '));
  asserteq('example good a', reverseWords('a good   example'));
});

module.exports = test;

if (require.main === module) {
  test(require('./reverse-words-1'));
  test(require('./reverse-words-2'));
}
