// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 100

// const { logf } = require('../../utils/logf');
const logf = (p, fn) => fn;

const findLength = logf('findLength', (xs, ys) => {
  const n = xs.length;
  const m = ys.length;

  // let dp(i,j) is the longest subarray starting xs[i] and ys[j]

  const iter = logf('iter', (i, j) => {
    if (xs[i] != ys[j]) { return 0 }
    return 1 + (i + 1 < n && j + 1 < m ? dp(i + 1, j + 1) : 0);
  });
  // const dp = ('dp', iter);
  const dp = ((rs = Array(n * m)) => ('dp', (i, j) => {
    const h = i * m + j;
    return rs[h] ?? (rs[h] = iter(i, j));
  }))();

  let r = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      r = Math.max(r, dp(i, j));
    }
  }
  return r;
});

const { asserteq } = require('../../../utils/asserteq');

asserteq(3, findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
asserteq(5, findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
asserteq(2, findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]));
