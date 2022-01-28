// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const minPathSum = logf('minPathSum', (g) => {
  const m = g.length;  // rows
  const n = g[0].length; // cols

  const iter = logf('iter', (x, y) => {
    if (x + 1 === n && y + 1 === m) { return g[y][x] }
    return g[y][x] + Math.min(
      (x + 1 < n ? dp(x + 1, y) : +Infinity),
      (y + 1 < m ? dp(x, y + 1) : +Infinity)
    );
  });

  // const dp = iter;
  const dp = ((rs = new Map()) => (x, y) => {
    const h = y * n + x; let r;
    return rs.get(h) ?? ((rs.set(h, (r = iter(x, y)))), r);
  })();

  return dp(0, 0);
});

const { asserteq } = require('../../../utils/asserteq');

asserteq(7, minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
asserteq(12, minPathSum([[1, 2, 3], [4, 5, 6]]));
