const replaceElements = (xs) => {
  const f = (i, m) => {
    if (0 <= i) {
      const x = xs[i];
      xs[i] = m;
      f(i - 1, Math.max(m, x));
    }
  };
  f(xs.length - 1, -1);
  return xs;
};

module.exports = replaceElements;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
