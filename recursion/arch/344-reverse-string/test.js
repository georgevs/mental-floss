const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (reverseString, n) => loop(n || 1, () => {
  asserteq(['o','l','l','e','h'], reverseString(['h','e','l','l','o']));
});

module.exports = test;

if (require.main === module) {
  test(require('./reverse-string-1'));
  test(require('./reverse-string-2'));
}

