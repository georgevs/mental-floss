const duplicateZeros = (xs) => {
  const n = xs.length;
  for (let i = 0; i < n; ++i) {
    if (xs[i] === 0) { xs.push(0) }
  }
  if (n < xs.length) {
    for (let i = n, k = xs.length; i-- > 0;) {
      xs[--k] = xs[i];
      if (xs[i] === 0) { xs[--k] = 0 }
    }
    xs.splice(n, xs.length - n);
  }
  return xs;
};

module.exports = duplicateZeros;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
