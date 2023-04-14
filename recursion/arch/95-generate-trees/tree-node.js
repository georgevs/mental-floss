function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

TreeNode.prototype.toArray = function() {
  const rs = [this];
  for (let i = 0; i < rs.length; ++i) {
    if (rs[i]) { rs.push(rs[i].left, rs[i].right) }
  }
  return rs;
};

TreeNode.prototype.toValues = function() {
  const rs = this.toArray().map(x => x?.val ?? null);
  rs.splice(rs.findLastIndex(Boolean) + 1);
  return rs;
};

Array.prototype.findLastIndex ??= function(fn) {
  let i = this.length;
  while (i-- > 0 && !fn(this[i])) {}
  return i;
}

module.exports = TreeNode;

if (require.main === module) {
  const { asserteq } = require('../../../utils/asserteq');

  asserteq(-1, [].findLastIndex(Boolean));
  asserteq(-1, [null, null].findLastIndex(Boolean));
  asserteq(0, [1].findLastIndex(Boolean));
  asserteq(0, [1, null].findLastIndex(Boolean));
  asserteq(1, [1, 2].findLastIndex(Boolean));
  asserteq(1, [1, 2, null].findLastIndex(Boolean));
 
  asserteq([], new TreeNode().toValues());
  asserteq([1], new TreeNode(1).toValues());
  asserteq([1, 2, 3], 
    new TreeNode(1,
      new TreeNode(2),
      new TreeNode(3))
    .toValues()
  );
  asserteq([1, 2, null, 3], 
    new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3)))
    .toValues()
  );
  asserteq([1, null, 2, null, 3],
    new TreeNode(1,
      null,
      new TreeNode(2,
        null,
        new TreeNode(3)))
    .toValues()
  );
}