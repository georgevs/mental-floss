const { asserteq } = require('../../../utils/asserteq');
const ListNode = require('./list-node');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (reverseList, n) => loop(n || 1, () => {
  asserteq(null, ListNode.from([]));
  asserteq([], ListNode.toArray(null));
  asserteq([], ListNode.toArray(ListNode.from([])));
  asserteq([1, 2, 3], ListNode.toArray(ListNode.from([1, 2, 3])));

  asserteq([], ListNode.toArray(reverseList(ListNode.from([]))));
  asserteq([2, 1], ListNode.toArray(reverseList(ListNode.from([1, 2]))));
});

module.exports = test;

if (require.main === module) {
  test(require('./reverse-list-iterative-1'));
  test(require('./reverse-list-iterative-2'));
  test(require('./reverse-list-recursive-1'));
  test(require('./reverse-list-recursive-2'));
}
