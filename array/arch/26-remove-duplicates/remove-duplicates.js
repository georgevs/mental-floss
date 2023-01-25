const removeDuplicates = (xs) => {
  const n = xs.length;
  if (n == 0) { return 0 }
  let k = 1;
  for (let i = 1; i < n; ++i) {
    if (xs[k - 1] != xs[i]) {
      if (k < i) { xs[k] = xs[i] }
      ++k;
    }
  }
  return k;
};

module.exports = removeDuplicates;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
