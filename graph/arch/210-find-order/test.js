const { asserteq, SomeArray: SA } = require('../../../utils/asserteq');

const test = (findOrder, n) => loop(n || 1, () => {
  asserteq(SA.of([0, 1]), findOrder(2, [[1, 0]]));
  asserteq(SA.of([0, 2, 1, 3], [0, 1, 2, 3]), findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
  asserteq(SA.of([0]), findOrder(1, []));
  asserteq([], findOrder(2, [[0, 1], [1, 0]]));
  asserteq([], findOrder(3, [[1, 0], [1, 2], [0, 1]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./find-order-dfs'));
  test(require('./find-order-kahn-iter-1'));
  test(require('./find-order-kahn-iter-2'));
  test(require('./find-order-kahn-recursive'));
}
