const swapPairs = (head) => {
  if (!head || !head.next) { return head }
  const p2 = head.next, p3 = p2.next;
  p2.next = head;
  head.next = swapPairs(p3);
  return p2; 
};

module.exports = swapPairs;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}

