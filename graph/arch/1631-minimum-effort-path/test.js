const { asserteq } = require("../../../utils/asserteq");

const test = (minimumEffortPath, n) => loop(n || 1, () => {
  asserteq(2, minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]));
  asserteq(1, minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]));
  asserteq(0, minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./minimum-effort-path'));
}