const reverseList = (node) => {
  for (let head = null; ; node = next_node, head = next_head) {
    if (!node) { return head }
    next_node = node.next;
    next_head = node;
    node.next = head;
  }
};

module.exports = reverseList;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
