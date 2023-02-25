const validMountainArray = (xs) => {
  const n = xs.length;
  if (n < 3) { return false }

  const f = (i) => {
    if (n <= i + 1) { return false }
    if (xs[i] == xs[i + 1]) { return false }
    if (xs[i] > xs[i + 1]) { return i == 0 ? false : g(i + 1) }
    return f(i + 1);
  };
  const g = (i) => {
    if (n <= i + 1) { return true }
    return xs[i] <= xs[i + 1] ? false : g(i + 1);
  };
  
  return f(0);
};

module.exports = validMountainArray;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
