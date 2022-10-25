const { asserteq } = require('../../../utils/asserteq');

const test = (minCostConnectPoints, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(20, minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));
  asserteq(18, minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]));
  asserteq(53, minCostConnectPoints([[2, -3], [-17, -8], [13, 8], [-17, -15]]));
  asserteq(139, minCostConnectPoints([[-8, 14], [16, -18], [-19, -13], [-18, 19], [20, 20], [13, -20], [-15, 9], [-4, -8]]));
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./min-cost-connect-points-kruskal')(require('./union-find')));
  test(require('./min-cost-connect-points-prim')(require('./heap')));
}
