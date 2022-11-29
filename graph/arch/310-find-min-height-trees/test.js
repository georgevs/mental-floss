const { asserteq } = require('../../../utils/asserteq');

const test = (findMinHeightTrees, n) => loop(n || 1, () => {
  asserteq([0], findMinHeightTrees(1, []));
  asserteq([0, 1], findMinHeightTrees(2, [[0, 1]]));
  asserteq([1], findMinHeightTrees(3, [[0, 1], [1, 2]]));
  asserteq([1, 2], findMinHeightTrees(4, [[0, 1], [1, 2], [2, 3]]));

  asserteq([1], findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
  asserteq([3, 4], findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]));
  asserteq([9999, 10000], findMinHeightTrees(...require('./test-20000.json')));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./find-min-height-trees-1'));
  // test(require('./find-min-height-trees-2'));
  test(require('./find-min-height-trees-3'));
  test(require('./find-min-height-trees-4a'));
  test(require('./find-min-height-trees-4b'));
  test(require('./find-min-height-trees-5'));
  test(require('./find-min-height-trees-6a'));
  test(require('./find-min-height-trees-6b'));
}
