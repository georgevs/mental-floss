const getRow = (n) => {
  const xs = Array(n + 1);
  for (let x = 1, r = 0; 2 * r <= n;) {
    xs[r] = xs[n - r] = x;
    ++r;
    x *= (n - r + 1) / r;
  }
  return xs;
};

module.exports = getRow;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
