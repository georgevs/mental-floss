const duplicateZeros = (xs) => {
  const n = xs.length;
  let i = 0, j = 0;
  for (; j < n; ++i,++j) {
    if (xs[i] === 0) { ++j }
  }
  for (; i-- > 0;) {
    if (--j < n) { xs[j] = xs[i] }
    if (xs[i] === 0) { xs[--j] = 0 }
  }
  return xs;
};

module.exports = duplicateZeros;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
