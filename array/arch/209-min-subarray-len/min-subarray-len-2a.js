const minSubArrayLen = (t, xs) => { 
  const n = xs.length;
  let r = Infinity;
  const iter = (i, j, s) => {
    if (t <= s) { r = Math.min(r, j - i) }
    if (s < t && j + 1 <= n) { iter(i, j + 1, s + xs[j]) }
    if (t <= s && i + 1 < j) { iter(i + 1, j, s - xs[i]) }
  };
  iter(0, 0, 0);
  return r === Infinity ? 0 : r;
};

module.exports = minSubArrayLen;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
