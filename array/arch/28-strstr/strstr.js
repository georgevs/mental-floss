const strStr = (xs, ys) => {
  for (let i = 0; i + ys.length <= xs.length; ++i) {
    let j = 0
    for (; j < ys.length; ++j) {
      if (xs[i + j] != ys[j]) { break }
    }
    if (j === ys.length) { return i }
  }
  return -1;
};

module.exports = strStr;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
