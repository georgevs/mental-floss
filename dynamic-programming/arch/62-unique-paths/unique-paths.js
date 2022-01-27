// 1 <= m, n <= 100

const uniquePaths = (m, n) => {
  const iter = (x, y) => {
    if (x + 1 === n && y + 1 === m) { return 1 }
    return (x + 1 < n ? dp(x + 1, y) : 0) + (y + 1 < m ? dp(x, y + 1) : 0);
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

asserteq(28, uniquePaths(3, 7));
asserteq(3, uniquePaths(3, 2));
