const minSubArrayLen = (t, xs) => { 
  const n = xs.length;
  let r = Infinity;
  for (let i = 0; i < n && r > 1; ++i) {
    for (let s = 0, j = i; j < Math.min(n, i + r); ++j) {
      s += xs[j];
      if (t <= s) { r = j - i + 1; break }
    }
  }
  return r === Infinity ? 0 : r;
};

module.exports = minSubArrayLen;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
