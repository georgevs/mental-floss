// keep the lengths of the previous ones and zeros blocks before the current ones
const findMaxConsecutiveOnes = (xs) => {
  const n = xs.length;
  let z = 0, p0, k0 = 0, p1, k1 = 0;
  let r1 = 0, r2 = 0;
  for (let i = 0; i < n; ++i) {
    if (xs[i] === 0) { ++k0; z = 1 }
    else if (k0 > 0) { p0 = k0; k0 = 0 }

    if (xs[i] === 1) { ++k1 }
    else if (k1 > 0) {
      r1 = Math.max(r1, k1);
      r2 = Math.max(r2, p1 && p0 === 1 ? p1 + 1 + k1 : 0);
      p1 = k1; k1 = 0
    }
  }
  if (k0 > 0) { p0 = k0; k0 = 0 }
  if (k1 > 0) {
    r1 = Math.max(r1, k1);
    r2 = Math.max(r2, p1 && p0 === 1 ? p1 + 1 + k1 : 0);
    p1 = k1; k1 = 0
  }

  return Math.max(z + r1, r2);
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
