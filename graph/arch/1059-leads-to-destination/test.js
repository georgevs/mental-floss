/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./leads-to-destination
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (leadsToDestination, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(false, leadsToDestination(3, [[0, 1], [0, 2]], 0, 2));
  asserteq(false, leadsToDestination(4, [[0, 1], [0, 3], [1, 2], [2, 1]], 0, 3));
  asserteq(true, leadsToDestination(4, [[0, 1], [0, 2], [1, 3], [2, 3]], 0, 3));
  asserteq(false, leadsToDestination(3, [[0, 1], [1, 1], [1, 2]], 0, 2));
  asserteq(false, leadsToDestination(3, [[0, 1], [1, 2], [1, 1]], 0, 2));
  asserteq(true, leadsToDestination(5, [[0, 1], [0, 2], [0, 3], [0, 3], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]], 0, 4));
  asserteq(false, leadsToDestination(2, [[0, 1], [1, 1]], 0, 1));
});

module.exports = test;
