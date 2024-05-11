const ListNode = require('./list-node');

const addTwoNumbers = (l1, l2) => {
  if (l1.val === 0 && !l1.next) return l2;
  if (l2.val === 0 && !l2.next) return l1;
  let c = 0;
  let i = l1;
  let j = l2;
  let l3, k;
  while (i || j) {
    let x = 0, y = 0;
    if (i) { x = i.val; i = i.next }
    if (j) { y = j.val; j = j.next }
    const s = x + y + c;
    c = (s / 10) | 0;
    if (k) { k = k.next = new ListNode(s % 10) }
    else { k = l3 = new ListNode(s % 10) }
  }
  if (c) { k.next = new ListNode(c) }
  return l3;
};

module.exports = addTwoNumbers;

if (require.main === module) {
  require('./test')(addTwoNumbers);
}
