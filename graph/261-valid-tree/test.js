/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./valid-tree
*/

const { asserteq } = require('../../utils/asserteq');

const test = (validTree, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(true, validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));
  asserteq(false, validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));
  asserteq(true, validTree(3, [[1, 0], [2, 0]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;
