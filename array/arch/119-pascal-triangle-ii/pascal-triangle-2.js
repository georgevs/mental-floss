const getRow = (n) => {
  const xs = Array(n + 1);
  for (let k = 0; k <= n; ++k) {
    xs[k] = 1; xs[0] = 1;
    for (let i = k; i-- > 1;) {
      xs[i] = xs[i] + xs[i - 1];
    }
  }
  return xs;
};

module.exports = getRow;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
