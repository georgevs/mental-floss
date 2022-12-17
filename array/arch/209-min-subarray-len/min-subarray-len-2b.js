const minSubArrayLen = (t, xs) => { 
  // console.log('txs', t, xs);
  const n = xs.length;
  let r = Infinity;
  let i = 0, j = 0, s = 0;
  for (; ;) {
    // console.log('ijsr', i, j, s, r);
    if (t <= s) { r = Math.min(r, j - i) }
    if (s < t && j < n) { s += xs[j]; j += 1 }
    else if (t <= s && i + 1 < j) { s -= xs[i]; i += 1 }
    else break;
  };
  return r === Infinity ? 0 : r;
};

module.exports = minSubArrayLen;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
