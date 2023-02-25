// sliding window
// advance the end edge with each iteration
// if more than one zero is between begin and end edges in the current iteration,
//  then advance the begin edge towards the end edge until only a single zero max

const findMaxConsecutiveOnes = (xs) => {
  const n = xs.length;
  let r = 0;
  let b = 0, e = 0, z = 0;
  while (e < n) {
    if (xs[e] === 0) { ++z }
    while (z > 1 && b < e) {
      if (xs[b] === 0) { --z }
      ++b;
    }
    ++e;
    r = Math.max(r, e - b);
  }
  return r;
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
