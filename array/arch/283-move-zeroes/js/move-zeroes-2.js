const moveZeroes = (xs) => {
  const n = xs.length;
  let w = 0;
  for (let r = 0; r < n; ++r) {
    if (xs[r] != 0) { if (w < r) { xs[w] = xs[r] }; ++w; }
  }
  for (; w < n; ++w) { xs[w] = 0 }
  return xs;
};

module.exports = moveZeroes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
