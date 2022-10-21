// levelOrder:: Node<number>? -> [[number]]
const levelOrder = (root) => {
  if (!root) { return [] }
  let q = [root];
  let nq = [];
  const r = [];
  let ri = [];
  while (q.length > 0) {
    const n = q.shift();
    ri.push(n.val);
    nq.push(...(n.children ?? []));
    if (q.length == 0) { r.push(ri); ri = []; q = nq; nq = [] }
  }
  return r;
};

module.exports = levelOrder;

if (require.main === module) {
  require('./test')(module.exports, process.argv[2]);
}
