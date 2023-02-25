const replaceElements = (xs) => {
  let r = -1;
  for (let i = xs.length; i-- > 0; ) {
      const t = xs[i];
      xs[i] = r;
      if (r < t) { r = t }
  }
  return xs;
};

module.exports = replaceElements;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
