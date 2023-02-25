const checkIfExist = (xs) => (
  xs.some((x, i) => xs.indexOf(x * 2, i + 1) != -1 || xs.indexOf(x / 2, i + 1) != -1)
);

module.exports = checkIfExist;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
