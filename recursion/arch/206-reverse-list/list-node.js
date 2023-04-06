function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

ListNode.from = xs => xs.reduceRight((acc, x) => new ListNode(x, acc), null);

ListNode.toArray = head => {
  const rs = []
  while (head) {
    rs.push(head.val);
    head = head.next;
  }
  return rs;
};

module.exports = ListNode;
