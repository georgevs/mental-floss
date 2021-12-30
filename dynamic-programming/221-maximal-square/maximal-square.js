// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'

// bottom up approach
// starting granularity of 1 pixel squares (iteration 0), assign a boolean for each pixel
// for 2 pixels squares (iteration 1), assign a boolean for the sum of adjacent pixels to the right, bottom, right-bottom
// each next iteration, assign a boolean for the sum of adjacent to the right, bottom, right-bottom previous iteration
// until the lower column or row count is reached or an iteration does NOT have a single "true" square
// return the rank squared for area

const maximalSquare = (matrix) => {
  const m = matrix.length, n = matrix[0].length, k = Math.min(m, n);
  let r = 0;
  for (let s = 0; s < k; ++s,++r) {
    let l;
    for (let y = 0; y < m - s; ++y) {
      for (let x = 0; x < n - s; ++x) {
        matrix[y][x] = s === 0 ? (matrix[y][x] === '1') :
          matrix[y][x] && matrix[y][x+1] && matrix[y+1][x] && matrix[y+1][x+1];
        if (l === undefined && matrix[y][x]) l = s;
      }
    }
    if (l === undefined) break;
  }
  return r*r;
};


const { asserteq } = require('../../utils/asserteq');

asserteq(90000, maximalSquare(require('./m-300x300.json')));
asserteq(100, maximalSquare(require('./m-100x100.json')));
asserteq(4, maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
asserteq(1, maximalSquare([['0', '1'], ['1', '0']]));
asserteq(0, maximalSquare([['0']]));
