const getRow = (n) => {
  const xs = Array(n + 1);
  for (let x = 1, r = 0; r <= n; ) {
    xs[r++] = x;
    x *= (n - r + 1) / r;
  }
  return xs;
};

module.exports = getRow;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
