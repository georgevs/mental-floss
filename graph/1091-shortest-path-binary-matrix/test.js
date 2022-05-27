/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])'
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (shortestPathBinaryMatrix, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(2, shortestPathBinaryMatrix([[0, 1], [1, 0]]));
  asserteq(4, shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]));
  asserteq(-1, shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]]));
  asserteq(9, shortestPathBinaryMatrix([[0, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0]]));
  asserteq(14,shortestPathBinaryMatrix([[0,1,1,0,0,0],[0,1,0,1,1,0],[0,1,1,0,1,0],[0,0,0,1,1,0],[1,1,1,1,1,0],[1,1,1,1,1,0]]));
  asserteq(10,shortestPathBinaryMatrix([[0,0,1,0,0,0,1,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0],[1,1,1,0,0,0,0,1],[1,0,0,1,0,1,1,0],[0,0,0,0,0,1,1,0],[1,0,0,0,0,1,1,0]]));
});

module.exports = test;
