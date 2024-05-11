const ListNode = require('./list-node');

const addTwoNumbers = (x, y) => addTwoNumbers_(x, y, 0);
const addTwoNumbers_ = (x, y, c) => {
  if (c || x || y) {
    if (x) { c += x.val; x = x.next }
    if (y) { c += y.val; y = y.next }
    return new ListNode(c % 10, addTwoNumbers_(x, y, c / 10 | 0));
  }
};

module.exports = addTwoNumbers;

if (require.main === module) {
  require('./test')(addTwoNumbers);
}
