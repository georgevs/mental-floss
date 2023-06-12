const validMountainArray = (xs) => {
  const n = xs.length;
  if (n < 3) { return false }

  let i;
  for (i = 0; ; ++i) {
    if (n <= i + 1) { return false }
    if (xs[i] == xs[i + 1]) { return false }
    if (xs[i] > xs[i + 1]) { if (i == 0) { return false } else break }
  }
  for (++i;;++i) {
    if (n <= i + 1) { return true }
    if (xs[i] <= xs[i + 1]) { return false }
  }
};

module.exports = validMountainArray;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
