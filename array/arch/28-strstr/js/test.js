const { asserteq } = require('../../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (strStr, n) => loop(n || 1, () => {
  asserteq(0, strStr('xabc', 'x'));
  asserteq(1, strStr('axbc', 'x'));
  asserteq(2, strStr('abxc', 'x'));
  asserteq(3, strStr('abcx', 'x'));
  asserteq(-1, strStr('abc', 'x'));

  asserteq(0, strStr('xyzabc', 'xyz'));
  asserteq(1, strStr('axyzbc', 'xyz'));
  asserteq(2, strStr('abxyzc', 'xyz'));
  asserteq(3, strStr('abcxyz', 'xyz'));
  asserteq(-1, strStr('abc', 'xyz'));

  asserteq(-1, strStr('xdyzabc', 'xyz'));
  asserteq(-1, strStr('xydzabc', 'xyz'));

  asserteq(-1, strStr('axdyzbc', 'xyz'));
  asserteq(-1, strStr('axdyzbc', 'xyz'));

  asserteq(-1, strStr('abcxdyz', 'xyz'));
  asserteq(-1, strStr('abcxdyz', 'xyz'));

  asserteq(0, strStr('sadbutsad', 'sad'));
  asserteq(-1, strStr('leetcode', 'leeto'));
});

module.exports = test;

if (require.main === module) {
  test(require('./strstr'));
}
