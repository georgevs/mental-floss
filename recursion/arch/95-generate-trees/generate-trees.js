const TreeNode = require('./tree-node');

const generateTrees = (n) => {

  const iter = (i, j) => {
    if (j < i) { return [null] }

    const ys = [];
    for (let k = i; k <= j; ++k) {
      const ls = iter(i, k - 1), rs = iter(k + 1, j);
      for (let l of ls) {
        for (let r of rs) {
          ys.push(new TreeNode(k, l, r));
        }
      }
    }
    return ys;
  };
  
  return iter(1, n);
};

module.exports = generateTrees;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
