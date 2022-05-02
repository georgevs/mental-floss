/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./minimum-cost
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (minimumCost, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(6, minimumCost(3, [[1, 2, 5], [1, 3, 6], [2, 3, 1]]));
  asserteq(-1, minimumCost(4, [[1, 2, 3], [3, 4, 4]]));
  let r, n, xs;
  ({ r, n, xs } = require('./test-10000.json')), asserteq(r, minimumCost(n, xs));
  ({ r, n, xs } = require('./test-50.json')), asserteq(r, minimumCost(n, xs));
});

module.exports = test;
