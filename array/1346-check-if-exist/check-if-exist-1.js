const checkIfExist = (xs) => {
  const n = xs.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (xs[i] === 2 * xs[j] || xs[j] === 2 * xs[i]) { return true }
    }
  }
  return false;
};

module.exports = checkIfExist;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
