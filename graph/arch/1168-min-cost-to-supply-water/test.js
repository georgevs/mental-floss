/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./min-cost-to-supply-water
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (minCostToSupplyWater, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(3, minCostToSupplyWater(3, [1, 2, 2], [[1, 2, 1], [2, 3, 1]]));
  asserteq(2, minCostToSupplyWater(2, [1, 1], [[1, 2, 1], [1, 2, 2]]))
  asserteq(204321, minCostToSupplyWater(6, [4625, 65696, 86292, 68291, 37147, 7880], [[2, 1, 79394], [3, 1, 45649], [4, 1, 75810], [5, 3, 22340], [6, 1, 6222]]));
  let r, n, wells, pipes;
  ({ r, n, wells, pipes } = require('./test-50.json'));
  asserteq(r, minCostToSupplyWater(n, wells, pipes));
});

module.exports = test;
