const sortedSquares = (xs) => xs.map(x => x * x).sort((l, r) => l - r);

module.exports = sortedSquares;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
