const findDiagonalOrder = (xs) => {
  const m = xs.length, n = xs[0].length;
  const r = Array(m * n);
  const k = m + n - 1;
  for (let i = 0, l = 0; i < k; ++i) {
    const c = Math.min(i + 1, k - i, m, n);
    const x0 = Math.min(i, n - 1);
    const y0 = i - x0;
    const o = i % 2 === 1;
    for (let j = 0; j < c; ++j) {
      const x = xs[y0 + j][x0 - j];
      if (o) { r[l + j] = x }
      else { r[l + c - 1 - j] = x }
    }
    l += c;
  }
  return r;
};

module.exports = findDiagonalOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
