// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

const uniquePathsWithObstacles = (g) => {
  const m = g.length;
  const n = g[0].length;
  if (g[0][0] || g[m - 1][n - 1]) { return 0 }
  const iter = (x, y) => {
    if (x + 1 === n && y + 1 === m) { return 1 }
    return (
      (x + 1 < n && !g[y][x + 1] ? dp(x + 1, y) : 0) + 
      (y + 1 < m && !g[y + 1][x] ? dp(x, y + 1) : 0)
    );
  };
  // const dp = iter;
  const dp = ((rs = new Map()) => (x, y) => {
    const h = x * m + y;
    let r;
    return rs.get(h) ?? (rs.set(h, (r = iter(x, y))), r);
  })();
  return dp(0, 0);
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(2, uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
asserteq(1, uniquePathsWithObstacles([[0, 1], [0, 0]]));
asserteq(0, uniquePathsWithObstacles([[1]]));
asserteq(1, uniquePathsWithObstacles([[0,0]]));
asserteq(0, uniquePathsWithObstacles([[1,0]]));
