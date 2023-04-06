const ListNode = require('./list-node');

const mergeTwoLists = (h1, h2) => {
  // console.log(ListNode.toArray(h1), ListNode.toArray(h2));
  const iter = (l, r, h, n) => {
    // console.log(l?.val, r?.val, h?.val, n?.val);
    if (!l && !r) { return h }
    if (!l) { if (n) { n.next = r }; return h ?? r }
    if (!r) { if (n) { n.next = l }; return h ?? l }
    if (l.val < r.val) { if (n) { n.next = l }; return iter(l.next, r, h ?? l, l) }
    else               { if (n) { n.next = r }; return iter(l, r.next, h ?? r, r) }
  };
  return iter(h1, h2, null, null);
};

module.exports = mergeTwoLists;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
