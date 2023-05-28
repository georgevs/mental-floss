const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = ({ rotl, rotr }, n) => loop(n || 1, () => {
  asserteq('abcdef', rotr(Array.from('abcdef'), 0).join(''));
  asserteq('fabcde', rotr(Array.from('abcdef'), 1).join(''));
  asserteq('efabcd', rotr(Array.from('abcdef'), 2).join(''));
  asserteq('defabc', rotr(Array.from('abcdef'), 3).join(''));
  asserteq('cdefab', rotr(Array.from('abcdef'), 4).join(''));
  asserteq('bcdefa', rotr(Array.from('abcdef'), 5).join(''));
  asserteq('abcdef', rotr(Array.from('abcdef'), 6).join(''));
  asserteq('fabcde', rotr(Array.from('abcdef'), 7).join(''));

  asserteq('abcdefg', rotr(Array.from('abcdefg'), 0).join(''));
  asserteq('gabcdef', rotr(Array.from('abcdefg'), 1).join(''));
  asserteq('fgabcde', rotr(Array.from('abcdefg'), 2).join(''));
  asserteq('efgabcd', rotr(Array.from('abcdefg'), 3).join(''));
  asserteq('defgabc', rotr(Array.from('abcdefg'), 4).join(''));
  asserteq('cdefgab', rotr(Array.from('abcdefg'), 5).join(''));
  asserteq('bcdefga', rotr(Array.from('abcdefg'), 6).join(''));
  asserteq('abcdefg', rotr(Array.from('abcdefg'), 7).join(''));
  asserteq('gabcdef', rotr(Array.from('abcdefg'), 8).join(''));

  asserteq('abcdef', rotl(Array.from('abcdef'), 0).join(''));
  asserteq('bcdefa', rotl(Array.from('abcdef'), 1).join(''));
  asserteq('cdefab', rotl(Array.from('abcdef'), 2).join(''));
  asserteq('defabc', rotl(Array.from('abcdef'), 3).join(''));
  asserteq('efabcd', rotl(Array.from('abcdef'), 4).join(''));
  asserteq('fabcde', rotl(Array.from('abcdef'), 5).join(''));
  asserteq('abcdef', rotl(Array.from('abcdef'), 6).join(''));
  asserteq('bcdefa', rotl(Array.from('abcdef'), 7).join(''));

  asserteq('abcdefg', rotl(Array.from('abcdefg'), 0).join(''));
  asserteq('bcdefga', rotl(Array.from('abcdefg'), 1).join(''));
  asserteq('cdefgab', rotl(Array.from('abcdefg'), 2).join(''));
  asserteq('defgabc', rotl(Array.from('abcdefg'), 3).join(''));
  asserteq('efgabcd', rotl(Array.from('abcdefg'), 4).join(''));
  asserteq('fgabcde', rotl(Array.from('abcdefg'), 5).join(''));
  asserteq('gabcdef', rotl(Array.from('abcdefg'), 6).join(''));
  asserteq('abcdefg', rotl(Array.from('abcdefg'), 7).join(''));
  asserteq('bcdefga', rotl(Array.from('abcdefg'), 8).join(''));
});

module.exports = test;

if (require.main === module) {
  test(require('./rotate-1'));
  test(require('./rotate-2'));
  test(require('./rotate-3'));
}
