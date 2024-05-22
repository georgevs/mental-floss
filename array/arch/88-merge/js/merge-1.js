const merge = (xs, m, ys, n) => {
  // console.log(xs,ys)
  const iter = (i, j, k) => {
    // console.log(i,j,k);
    if (0 <= i && 0 <= j) {
      if (xs[i] < ys[j]) { xs[k] = ys[j]; return iter(i, j - 1, k - 1) }
      else { xs[k] = xs[i]; return iter(i - 1, j, k - 1) }
    } 
    else if (0 <= i) { xs[k] = xs[i]; return iter(i - 1, j, k - 1) }
    else if (0 <= j) { xs[k] = ys[j]; return iter(i, j - 1, k - 1) }
  };
  iter(m - 1, n - 1, xs.length - 1);
  return xs;
};

module.exports = merge;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
