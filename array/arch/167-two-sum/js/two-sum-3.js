const twoSum = (xs, t) => {
  const m = new Map();
  for (let i = 0; i < xs.length; ++i) {
    m.set(t - xs[i], i);
  }
  for (let i = 0; i < xs.length; ++i) {
    const j = m.get(xs[i]);
    if (j !== undefined) { return [i + 1, j + 1] }
  }
};

module.exports = twoSum;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
