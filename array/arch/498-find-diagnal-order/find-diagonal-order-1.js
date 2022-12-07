const findDiagonalOrder = (xs) => {
  const r = [];
  const m = xs.length, n = xs[0].length;
  // console.log('--->',[m, n, xs]);
  for (let k = 1; k <= m + n - 1; ++k) {
    for (let i = 0; i < k; ++i) {
      let y = i;
      let x = k - 1 - i;
      if (k % 2 === 1) { ([y, x] = [x, y]) }
      // console.log([k, i, y, x])
      if (y < m && x < n) {
        r.push(xs[y][x]);
      }
    }
  }
  return r;
};

module.exports = findDiagonalOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
