/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./all-paths-source-target
*/

const { asserteq } = require('../../../utils/asserteq');

const test = (allPathsSourceTarget, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq([[0, 1, 3], [0, 2, 3]], allPathsSourceTarget([[1, 2], [3], [3], []]));
  asserteq([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]], allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
  asserteq([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 4]], allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []]));
  asserteq([[0,2]], allPathsSourceTarget([[2],[],[1]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;
