function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

ListNode.from = (xs) => (
  xs.reverse().reduce((acc, val) => new ListNode(val, acc), null)
);

ListNode.toArray = (head) => {
  const rs = [];
  for (; head; head = head.next) { rs.push(head.val); }
  return rs;
};

module.exports = ListNode;
