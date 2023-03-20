const maximumGap = (xs) => (
  xs.sort((l, r) => l - r)
  .reduce((acc, x, i, xs) => Math.max(acc, i + 1 < xs.length ? Math.abs(x - xs[i + 1]) : 0), 0)
);

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
