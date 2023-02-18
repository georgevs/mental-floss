const sortedSquares = (xs) => {
  const n = xs.length, ys = Array(n);
  let k = n, i = 0, j = n - 1;
  while (i <= j) {
    const xi = Math.abs(xs[i]), xj = Math.abs(xs[j]);
    if (xi > xj) { ys[--k] = (xi * xi); ++i }
    else { ys[--k] = (xj * xj); --j }
  }
  return ys;
};

module.exports = sortedSquares;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
