const { asserteq } = require('../../../utils/asserteq');

const test = (minimumSemesters, n) => loop(n || 1, () => {
  asserteq(1, minimumSemesters(1, []));
  asserteq(1, minimumSemesters(2, []));
  asserteq(2, minimumSemesters(2, [[1, 2]]));
  asserteq(2, minimumSemesters(3, [[1, 3], [2, 3]]));
  asserteq(-1, minimumSemesters(3, [[1, 3], [2, 3], [3, 1]]))
  asserteq(-1, minimumSemesters(3, [[1, 2], [2, 3], [3, 1]]));
  asserteq(24, minimumSemesters(...require('./test-999-24.json')));
  asserteq(-1, minimumSemesters(...require('./test-999-1.json')));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./minimum-semesters-kahn'));
  test(require('./minimum-semesters-dfs'));
}
