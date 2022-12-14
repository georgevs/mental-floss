const twoSum = (xs, t) => {
  let i = 0, j = xs.length - 1;
  while (i < j) {
    const r = xs[i] + xs[j];
    if (r < t) { i += 1 }
    else if (r === t) { return [i + 1, j + 1] }
    else { j -= 1 }
  }
};

module.exports = twoSum;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
