const duplicateZeros = (xs) => {
  const n = xs.length;
  const iter = (i, j) => {
    if (i < n) {
      if (xs[j] === 0) { iter(i + 2, j + 1); xs[i] = xs[j]; if (i + 1 < n) { xs[i + 1] = 0 } }
      else { iter(i + 1, j + 1); xs[i] = xs[j] }
    }
  };
  iter(0, 0);
  return xs;
};

module.exports = duplicateZeros;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
