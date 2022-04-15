/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./count-components
*/

const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (countComponents, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(2, countComponents(5, [[0,1],[1,2],[3,4]]));
  asserteq(1, countComponents(5, [[0,1],[1,2],[2,3],[3,4]]));
  asserteq(1, countComponents(5, [[0, 1], [0, 2], [2, 3], [2, 4]]));
  asserteq(1, countComponents(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));
});

module.exports = test;
