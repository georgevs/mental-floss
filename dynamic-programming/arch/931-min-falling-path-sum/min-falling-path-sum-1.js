// n == matrix.length == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (m) {
  const n = m.length;
  const iter = (y, x) => {
    if (y + 1 === n) { return m[y][x] }
    let r = m[y][x] + dp(y + 1, x);
    if (x > 0) { r = Math.min(r, m[y][x] + dp(y + 1, x - 1)) }
    if (x + 1 < n) { r = Math.min(r, m[y][x] + dp(y + 1, x + 1)) }
    return r;
  };
  const dp = memoize(map(n), iter);
  let r = dp(0, 0);
  for (let x = 1; x < n; ++x) {
    r = Math.min(r, dp(0, x));
  }
  return r;
};

const memoize = (m, f) => (y, x) => m.get(y, x) ?? m.set(y, x, f(y, x));

const map = (n) => {
  const m = new Map();
  return { get: (y, x) => m.get(y * n + x), set: (y, x, r) => (m.set(y * n + x, r), r) };
};


const { asserteq } = require('../../utils/asserteq');

asserteq(13, minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
asserteq(-59, minFallingPathSum([[-19, 57], [-40, -5]]));
