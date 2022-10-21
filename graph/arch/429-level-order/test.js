const { asserteq } = require('../../../utils/asserteq');

const test = (levelOrder, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq([[1], [3, 2, 4], [5, 6]], levelOrder(deserialize([1, null, 3, 2, 4, null, 5, 6])));
  asserteq([[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]], 
    levelOrder(deserialize([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]))
  );

  // console.dir(deserialize([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]), { depth: 10 });
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

// Node :: { number, [Node] }
function Node(val, children) {
  this.val = val;
  this.children = children;
}

// deserialize :: ...(number|null) -> Node|null
// const deserialize = (xs) => {
//   const nodes = (ns, i) => (
//     xs.length <= i ? [ns, i]
//     : xs[i] === null ? [ns, i + 1]
//     : nodes([...ns, new Node(xs[i], [])], i + 1)
//   );
//   const iter = (rs, i) => {
//     if (rs.length == 0 || xs.length <= i) { return }
//     const [n, ...ns] = rs;
//     ([n.children, i] = nodes([], i));
//     iter([...ns, ...n.children], i);
//   };
//   const [rs, i] = nodes([], 0);
//   iter(rs, i);
//   return rs[0] ?? null;
// };

const deserialize = (xs) => {
  let r;
  const q = [];
  let ns = [];
  for (let i = 0; i < xs.length; ++i) {
    if (xs[i] !== null) {
      ns.push(new Node(xs[i], []));
    } else {
      if (q.length > 0) { q.shift().children = ns }
      else if (!r) { r = ns[0] }
      q.push(...ns);
      ns = [];
    }
  }
  if (q.length > 0) { q[0].children = ns }
  return r ?? null;
};

module.exports = test;

if (require.main === module) {
  test(require('./level-order'));
}
