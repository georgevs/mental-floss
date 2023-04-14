const { asserteq, UnorderedArray: UA } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn() };
const test = (generateTrees, n) => loop(n || 1, () => {
  const generateTrees_ = n => generateTrees(n).map(x => x.toValues());
  asserteq(UA.of([1]), generateTrees_(1));
  asserteq(UA.of([1,null,2],[2,1]), generateTrees_(2));
  asserteq(
    UA.of(
      [1,null,3,2], 
      [1,null,2,null,3],
      [2,1,3],
      [3,2,null,1],
      [3,1,null,null,2]), 
    generateTrees(3).map(x => x.toValues())
  );
});

module.exports = test;

if (require.main === module) {
  test(require('./generate-trees'));
}
