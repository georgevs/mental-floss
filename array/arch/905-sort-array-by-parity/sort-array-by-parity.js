const sortArrayByParity = (xs) => {
  for (let i = 0, j = 0; j < xs.length; ++j) {
    if (xs[j] % 2 === 0) {
      if (i < j) { const t = xs[i]; xs[i] = xs[j]; xs[j] = t }
      ++i;
    }
  }
  return xs;
};

module.exports = sortArrayByParity;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
