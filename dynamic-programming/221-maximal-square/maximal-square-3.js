// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

const maximalSquare = (matrix) => {
  const m = matrix.length, n = matrix[0].length, k = Math.min(m, n);
  const a = new Array(n * m * k);
  const ind = (x, y, s) => (x * m * k) + (y * k) + (s - 1);
  let r = 0;
  for (let s = 1; s <= k; ++s) {
    for (let x = 0; x <= n-s; ++x) {
      for (let y = 0; y <= m-s; ++y) {
        const i = a[ind(x,y,s)] = s === 1 ? (matrix[y][x] === '1' ? 1 : 0) :
          a[ind(x,y,s-1)] * a[ind(x+1,y,s-1)] * a[ind(x,y+1,s-1)] * a[ind(x+1,y+1,s-1)];
        // console.log(x,y,s,a[ind(x,y,s)]);
        r = Math.max(r, s * i);
      }
    }
  }
  return r*r;
};

const { assert } = require('../../utils/assert');

assert(90000, maximalSquare(require('./m-300x300.json')));
assert(100, maximalSquare(require('./m-100x100.json')));
assert(4, maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
assert(1, maximalSquare([['0', '1'], ['1', '0']]));
assert(0, maximalSquare([['0']]));
