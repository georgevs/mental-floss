const thirdMax = (xs) => {
  const n = xs.length;
  let r2, r1, r0;
  for (let i = 0; i < n; ++i) {
    if (r0 === undefined || r0 < xs[i]) {
      r2 = r1; r1 = r0; r0 = xs[i]
    } else if (xs[i] < r0 && (r1 === undefined || r1 < xs[i])) {
      r2 = r1; r1 = xs[i]
    } else if (xs[i] < r1 && (r2 === undefined || r2 < xs[i])) {
      r2 = xs[i]
    }
  }
  return r2 ?? r0;
};

module.exports = thirdMax;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
