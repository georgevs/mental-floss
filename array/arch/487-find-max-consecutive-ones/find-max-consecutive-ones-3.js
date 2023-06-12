// Keep track of current and previous (if any) block of ones
// Start a new current and update previous any time a zero is reached

const findMaxConsecutiveOnes = (xs) => {
  const n = xs.length;
  let l = 0;  // last block of ones length
  let c = 0;  // current block of ones length
  let z = 0;  // zero seen
  let r = 0;  // max consecutive ones result
  for (let i = 0; i < n; ++i) {
    if (xs[i] === 0) {
      z = 1;
      l = c;
      c = 0;
    } else {
      ++c;
    }
    r = Math.max(r, l + z + c);
  }
  return r;
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
