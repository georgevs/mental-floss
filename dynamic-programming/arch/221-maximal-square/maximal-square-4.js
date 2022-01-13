// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

const maximalSquare = (matrix) => {
  const m = matrix.length, n = matrix[0].length, k = Math.min(m, n);
  const a = new Array(m * n);
  const ind = (x, y) => y*n + x;
  let r = 0;
  for (let s = 1; s <= k; ++s) {
    for (let x = 0; x <= n-s; ++x) {
      for (let y = 0; y <= m-s; ++y) {
        const i = a[ind(x,y)] = s === 1 ? (matrix[y][x] === '1' ? 1 : 0) :
          a[ind(x,y)] * a[ind(x+1,y)] * a[ind(x,y+1)] * a[ind(x+1,y+1)];
        // console.log(x,y,s,a[ind(x,y)]);
        r = Math.max(r, s * i);
      }
    }
  }
  return r*r;
};


const { asserteq } = require('../../utils/asserteq');

asserteq(90000, maximalSquare(require('./m-300x300.json')));
asserteq(100, maximalSquare(require('./m-100x100.json')));
asserteq(4, maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
asserteq(1, maximalSquare([['0', '1'], ['1', '0']]));
asserteq(0, maximalSquare([['0']]));
