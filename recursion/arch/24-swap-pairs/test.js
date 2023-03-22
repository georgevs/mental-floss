const { asserteq } = require('../../utils/asserteq');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

ListNode.from = xs => {
  if (!Array.isArray(xs)) { return undefined }
  let head = null, curr = null;
  for (let x of xs) {
    const ptr = new ListNode(x);
    if (curr) { curr.next = ptr }
    if (!head) { head = ptr }
    curr = ptr;
  }
  return head;
};

ListNode.toArray = head => {
  if (!(head instanceof ListNode || head === null)) { return undefined }
  const xs = [];
  while (head) {
    xs.push(head.val);
    head = head.next;
  }
  return xs;
};

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (swapPairs, n) => loop(n || 1, () => {
  asserteq([1,2,3,4], ListNode.toArray(ListNode.from([1,2,3,4])));
  asserteq([2,1,4,3], ListNode.toArray(swapPairs(ListNode.from([1,2,3,4]))));
  asserteq([], ListNode.toArray(swapPairs(ListNode.from([]))));
  asserteq([1], ListNode.toArray(swapPairs(ListNode.from([1]))));
});

module.exports = test;

if (require.main === module) {
  test(require('./swap-pairs'));
}

