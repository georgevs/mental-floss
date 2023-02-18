const sortedSquares = (xs) => {
  const n = xs.length;
  let i;
  for (i = 0; i < n && xs[i] < 0; ++i) { }
  let j = i;
  const ys = [];
  return iter(ys, xs, i - 1, j);
};

const iter = (ys, xs, i, j) => {
  // console.log(i,j,xs,ys)
  const n = xs.length;
  if (0 <= i && j < n) {
    if (-xs[i] < xs[j]) { ys.push(xs[i] * xs[i]); return iter(ys, xs, i - 1, j) }
    else { ys.push(xs[j] * xs[j]); return iter(ys, xs, i, j + 1) }
  }
  if (0 <= i) { ys.push(xs[i] * xs[i]); return iter(ys, xs, i - 1, j) }
  if (i < 0 && j < n) { ys.push(xs[j] * xs[j]); return iter(ys, xs, i, j + 1) }
  return ys;
};

module.exports = sortedSquares;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
