const reverseList = (head) => {
  if (!head || !head.next) { return head }

  const new_head = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return new_head;
};

module.exports = reverseList;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
