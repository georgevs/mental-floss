const merge = (xs, m, ys, n) => {
  // console.log(xs,ys)
  for (let i = m - 1, j = n - 1, k = xs.length; k-- > 0;) {
    // console.log(i,j,k);
    if (0 <= i && 0 <= j) {
      if (xs[i] < ys[j]) { xs[k] = ys[j]; --j }
      else { xs[k] = xs[i]; --i }
    } 
    else if (0 <= i) { xs[k] = xs[i]; --i }
    else if (0 <= j) { xs[k] = ys[j]; --j }
  }
  return xs;
};

module.exports = merge;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
