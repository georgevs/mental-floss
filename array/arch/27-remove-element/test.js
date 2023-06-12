const { asserteq, UnorderedArray: UA } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (removeElement, n) => loop(n || 1, () => {
  const removeElement_ = (xs, x) => xs.slice(0, removeElement(xs, x));
  asserteq([2, 2], removeElement_([3, 2, 2, 3], 3));
  asserteq(UA.of(0, 1, 4, 0, 3), removeElement_([0, 1, 2, 2, 3, 0, 4, 2], 2));
});

module.exports = test;

if (require.main === module) {
  test(require('./remove-element'));
}
