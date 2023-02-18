const sortedSquares = (xs) => {
  const n = xs.length, ys = Array(n);
  return iter(ys, n, xs, 0, xs.length - 1);
};

const iter = (ys, k, xs, i, j) => {
  // console.log(i,j,xs,ys)
  const n = xs.length;
  if (i === j) { ys[--k] = (xs[i] * xs[i]); return ys }
  if (i < j) {
    const xi = Math.abs(xs[i]), xj = Math.abs(xs[j]);
    if (xi > xj) { ys[--k] = (xi * xi); return iter(ys, k, xs, i + 1, j) }
    else { ys[--k] = (xj * xj); return iter(ys, k, xs, i, j - 1) }
  }
  return ys;
};

module.exports = sortedSquares;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
