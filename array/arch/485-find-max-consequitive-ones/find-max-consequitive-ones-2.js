const findMaxConsecutiveOnes = (xs) => {
  const n = xs.length;
  let r = 0, k = 0;
  for (let i = 0; i < n; ++i) {
    r = Math.max(r, k + xs[i]);
    k = (k + xs[i]) * xs[i];
  }
  return r;
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
