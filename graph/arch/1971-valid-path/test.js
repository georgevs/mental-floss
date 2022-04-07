/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./valid-path
*/

const { asserteq } = require('../../utils/asserteq');

const test = (validPath, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(true, validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));
  asserteq(false, validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
  asserteq(false, validPath(100, require('./test-edges-300.json'), 20, 53));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;
