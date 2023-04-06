const ListNode = require('./list-node');

const reverseList = (node) => {
  let head = null;
  for (; node; node = node = node.next) {
    head = new ListNode(node.val, head);
  }
  return head;
};

module.exports = reverseList;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
