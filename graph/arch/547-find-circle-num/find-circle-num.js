// 1 <= n <= 200
// n == m.length
// n == m[i].length
// m[i][j] is 1 or 0.
// m[i][i] == 1
// m[i][j] == m[j][i]

const union = require('../disjoint-sets/quick-find-union');

const findCircleNum = (xs) => {
  const n = xs.length;
  const u = union(n);
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (xs[i][j] == 1) { u.connect(i, j) }
    }
  }
  return u.numSets();
};

module.exports = { findCircleNum };
