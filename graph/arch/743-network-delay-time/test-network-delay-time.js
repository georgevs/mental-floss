require('util').inspect.defaultOptions.depth = 10; 

const { asserteq } = require('../../../utils/asserteq');

const test = (networkDelayTime, n) => loop(n || 1, () => {
  asserteq(2, networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
  asserteq(1, networkDelayTime([[1, 2, 1]], 2, 1));
  asserteq(-1, networkDelayTime([[1, 2, 1]], 2, 2));
  asserteq(-1, networkDelayTime([[1, 2, 1], [2, 3, 7], [1, 3, 4], [2, 1, 2]], 4, 1));
  asserteq(69, networkDelayTime([[2, 4, 10], [5, 2, 38], [3, 4, 33], [4, 2, 76], [3, 2, 64], [1, 5, 54], [1, 4, 98], [2, 3, 61], [2, 1, 0], [3, 5, 77], [5, 1, 34], [3, 1, 79], [5, 3, 2], [1, 2, 59], [4, 3, 46], [5, 4, 44], [2, 5, 89], [4, 5, 21], [1, 3, 86], [4, 1, 95]], 5, 1));
  asserteq(49, networkDelayTime(...require('./test-15-9.json')));
  asserteq(70, networkDelayTime(...require('./test-15-2.json')));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./network-delay-time')(require('./shortest-paths-bellman-ford')));
  test(require('./network-delay-time')(require('./shortest-paths-bellman-ford-spfa')));
  test(require('./network-delay-time')(require('./shortest-paths-dijkstra-eager')(require('./indexed-heap'))));
  test(require('./network-delay-time')(require('./shortest-paths-dijkstra-eager')(require('./indexed-heap-oop'))));
  test(require('./network-delay-time')(require('./shortest-paths-dijkstra-lazy')));
}