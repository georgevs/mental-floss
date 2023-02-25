const findMaxConsecutiveOnes = (xs) => {
  const n = xs.length;
  let r = 0;    // max consecutive ones result
  let k2 = 0;   // prev prev block (zeros or ones) length  
  let k1 = 0;   // prev block (zeros or ones) length
  let k = 0;    // current block (zeros or ones) length
  let x;        // prev x
  for (let i = 0; i < n; ++i) {
    if (x !== xs[i]) {
      k2 = k1; k1 = k; k = 0; x = xs[i];
    }
    ++k;

    let ri;
    if (xs[i] === 1) {
      ri = k;
      if (k1 > 0) { ++ri }
      if (k1 === 1) { ri += k2 }
    } else { 
      ri = k1 + 1;
    }
    r = Math.max(r, ri);
  } 
  return r;
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  const { asserteq } = require('../../utils/asserteq');
  asserteq(0,findMaxConsecutiveOnes([]));
  asserteq(1,findMaxConsecutiveOnes([0]));
  asserteq(1,findMaxConsecutiveOnes([0,0,0]));
  asserteq(1,findMaxConsecutiveOnes([1]));
  asserteq(3,findMaxConsecutiveOnes([1,1,1]));
  asserteq(2,findMaxConsecutiveOnes([1,0,0]));
  asserteq(2,findMaxConsecutiveOnes([0,0,1]));
  asserteq(2,findMaxConsecutiveOnes([0,1,0]));
  asserteq(3,findMaxConsecutiveOnes([1,0,1]));
  asserteq(3,findMaxConsecutiveOnes([0,1,0,1,0]));
  asserteq(2,findMaxConsecutiveOnes([1,0,0,1]));
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
