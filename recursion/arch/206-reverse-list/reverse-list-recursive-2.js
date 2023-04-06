const reverseList = (head) => {
  const iter = (node, head) => {
    if (!node) { return head }
    const next_node = node.next;
    const next_head = node;
    node.next = head;
    return iter(next_node, next_head);
  }
  return iter(head, null);
};

module.exports = reverseList;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
