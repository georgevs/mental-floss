const merge = (xs, m, ys, n) => {
  // console.log(xs,ys)
  for (let i = m - 1, j = n - 1, k = xs.length; k-- > 0;) {
    // console.log(i,j,k);
    if (j < 0) { break }
    if (i < 0 || xs[i] < ys[j]) { xs[k] = ys[j]; --j }
    else { xs[k] = xs[i]; --i }
  }
  return xs;
};

module.exports = merge;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
