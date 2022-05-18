/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./all-paths-source-target
*/

const { asserteq } = require('../../../utils/asserteq');

const test = (allPathsSourceTarget, n) => loop(Number.parseInt(n) || 1, () => {
  const sortedAllPathsSourceTarget = (g) => sortPaths(allPathsSourceTarget(g));
  asserteq(sortPaths([[0, 1, 3], [0, 2, 3]]), sortedAllPathsSourceTarget([[1, 2], [3], [3], []]));
  asserteq(sortPaths([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]), sortedAllPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
  asserteq(sortPaths([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 4]]), sortedAllPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []]));
  asserteq(sortPaths([[0,2]]), sortedAllPathsSourceTarget([[2],[],[1]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

const sortVertices = (vs) => vs && vs.sort(compareVertices);
const sortPaths = (ps) => ps && ps.sort(comparePaths);

const compareVertices = (l, r) => l - r;

const comparePaths = (l, r) => {
  x = l.length - r.length;
  if (x != 0 || l.length == 0) { return x }
  
  const [lh, ...lt] = l;
  const [rh, ...rt] = r;
  x = compareVertices(lh, rh);
  if (x != 0) { return x }

  return comparePaths(lt, rt);
};

module.exports = test;
