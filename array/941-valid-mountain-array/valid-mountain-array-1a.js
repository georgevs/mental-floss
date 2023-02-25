const validMountainArray = (xs) => {
  const n = xs.length;
  if (n < 3) { return false }

  const f = (i) => {
    if (i + 1 < n) {
      if (xs[i] < xs[i + 1]) { return f(i + 1) }
      else if (i == 0 || xs[i] == xs[i + 1]) { return false }
      else { return g(i + 1) }
    }
    else { return false }
  };
  const g = (i) => {
    if (i + 1 < n) {
      if (xs[i] > xs[i + 1]) { return g(i + 1) }
      else { return false }
    }
    else { return true }
  };
  return f(0);
};

module.exports = validMountainArray;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
