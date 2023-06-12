const heightChecker = (xs) => (
  Array.from(xs)
  .sort((l, r) => l - r)
  .reduce((acc, y, i) => acc + (xs[i] == y ? 0 : 1), 0)
);

module.exports = heightChecker;


if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
