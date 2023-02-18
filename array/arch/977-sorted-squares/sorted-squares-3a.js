const sortedSquares = (xs) => {
  const ys = [];
  return iter(ys, xs, 0, xs.length - 1);
};

const iter = (ys, xs, i, j) => {
  // console.log(i,j,xs,ys)
  const n = xs.length;
  if (i === j) { ys.unshift(xs[i] * xs[i]); return ys }
  if (i < j) {
    const xi = Math.abs(xs[i]), xj = Math.abs(xs[j]);
    if (xi > xj) { ys.unshift(xi * xi); return iter(ys, xs, i + 1, j) }
    else { ys.unshift(xj * xj); return iter(ys, xs, i, j - 1) }
  }
  return ys;
};

module.exports = sortedSquares;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
