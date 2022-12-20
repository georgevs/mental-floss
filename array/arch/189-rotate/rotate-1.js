const rotate = (xs, k) => {
  const n = xs.length, ys = Array(n);
  for (let i = 0; i < n; ++i) {
    ys[(i + k) % n] = xs[i];
  }
  for (let i = 0; i < n; ++i) {
    xs[i] = ys[i];
  }
  return ys;
};

module.exports = rotate;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
