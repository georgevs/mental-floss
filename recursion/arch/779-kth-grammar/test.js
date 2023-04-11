const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (kthGrammar, n) => loop(n || 1, () => {
  asserteq(0, kthGrammar(1, 1));
  asserteq(0, kthGrammar(2, 1));
  asserteq(1, kthGrammar(2, 2));
  asserteq(0, kthGrammar(30, 434991989));
});

module.exports = test;

if (require.main === module) {
  // test(require('./kth-grammar-1'));  // overflow
  test(require('./kth-grammar-2'));
  test(require('./kth-grammar-3'));
}
