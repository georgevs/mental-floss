const { asserteq } = require('../../../utils/asserteq');

const test = (orangesRotting, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq(4, orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));
  asserteq(-1, orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
  asserteq(0, orangesRotting([[0, 2]]));
  asserteq(0, orangesRotting([[0]]));
  asserteq(2, orangesRotting([[1, 1, 2, 0, 2, 0]]));
  asserteq(-1, orangesRotting([[1]]));
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./oranges-rotting-1'));
  test(require('./oranges-rotting-2')(require('./graph-1')));
  test(require('./oranges-rotting-2')(require('./graph-2')));
  test(require('./oranges-rotting-3a'))
  test(require('./oranges-rotting-3b'));
  test(require('./oranges-rotting-4'));
}
