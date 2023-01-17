const getRow = (n) => {
  const xs = [1];
  for (let r = 1; r <= n; ++r) {
    xs.push(xs[r - 1] * (n - r + 1) / r);
  }
  return xs;
};

module.exports = getRow;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
