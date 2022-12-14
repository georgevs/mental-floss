const twoSum = (xs, t) => {
  const iter = (i, j) => {
    const r = xs[i] + xs[j];
    if (r < t) { return iter(i + 1, j) }
    else if (r === t) { return [i + 1, j + 1] }
    else { return iter(i, j - 1) }
  }
  return iter(0, xs.length - 1)
};

module.exports = twoSum;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
