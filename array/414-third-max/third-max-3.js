const thirdMax = (xs) => {
  const n = xs.length;
  const ys = [xs[0],undefined,undefined];   // xs is guaranteed non-empty
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (ys[j] === xs[i]) { break }
      if (ys[j] === undefined || ys[j] < xs[i]) {
        ys.splice(j, 0, xs[i]);
        ys.pop();
        break;
      }
    }
  }
  return ys[2] ?? ys[0];
};

module.exports = thirdMax;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
