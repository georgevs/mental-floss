const twoSum = (xs, t) => {
  for (let i = 0; i < xs.length; ++i) {
    for (let j = i + 1; xs[i] + xs[j] <= t; ++j) {
      if (xs[i] + xs[j] == t) return [i + 1, j + 1];
    }
  }
};

module.exports = twoSum;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
