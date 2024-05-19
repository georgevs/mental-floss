const removeElement = (xs, val) => {
  let k = 0;
  for (let i = 0; i < xs.length; ++i) {
      if (xs[i] !== val) { xs[k] = xs[i]; ++k }
  }
  return k;
}

module.exports = removeElement;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
