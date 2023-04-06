const { asserteq } = require('../../../utils/asserteq');
const ListNode = require('./list-node');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (mergeTwoLists, n) => loop(n || 1, () => {
  asserteq(null, ListNode.from([]));
  asserteq([], ListNode.toArray(null));
  asserteq([1, 2, 3], ListNode.toArray(ListNode.from([1, 2, 3])));

  const mergeTwoLists_ = (xs, ys) => ListNode.toArray(mergeTwoLists(ListNode.from(xs), ListNode.from(ys)));
  asserteq([1, 1, 2, 3, 4, 4], mergeTwoLists_(([1, 2, 4]), [1, 3, 4]));
  // asserteq([], mergeTwoLists_([], []));
  // asserteq([0], mergeTwoLists_([], [0]));
});

module.exports = test;

if (require.main === module) {
  test(require('./merge-two-lists-recursive-1'));
  test(require('./merge-two-lists-recursive-2'));
  test(require('./merge-two-lists-iterative'));
}
