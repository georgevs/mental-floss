// const ListNode = require('./list-node');

const mergeTwoLists = (h1, h2) => {
  // console.log(ListNode.toArray(h1), ListNode.toArray(h2));
  let l = h1, r = h2, h = null, n = null;
  for(;;) {
    // console.log(l?.val, r?.val, h?.val, n?.val);
    if (!l && !r) { return h }
    if (!l) { if (n) { n.next = r }; return h ?? r }
    if (!r) { if (n) { n.next = l }; return h ?? l }
    if (l.val < r.val) { if (n) { n.next = l }; h = h ?? l; n = l; l = l.next }
    else               { if (n) { n.next = r }; h = h ?? r; n = r; r = r.next }
  }
};

module.exports = mergeTwoLists;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
