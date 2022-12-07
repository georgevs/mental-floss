const dominantIndex = (xs) => {
  let r = -Infinity, r0 = -Infinity, j;
  for (let i = 0; i < xs.length; ++i) {
    if (xs[i] > r) { r0 = r; r = xs[i]; j = i }
    else if (xs[i] > r0) { r0 = xs[i] }
  }
  return r >= 2 * r0 ? j : -1;
};

module.exports = dominantIndex;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
