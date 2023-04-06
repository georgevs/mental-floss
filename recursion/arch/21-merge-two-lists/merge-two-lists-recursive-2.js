const mergeTwoLists = (h1, h2) => {
  if (!h1) { return h2 }
  if (!h2) { return h1 }
  if (h1.val < h2.val) {
    h1.next = mergeTwoLists(h1.next, h2);
    return h1;
  }
  h2.next = mergeTwoLists(h1, h2.next);
  return h2;
};

module.exports = mergeTwoLists;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
