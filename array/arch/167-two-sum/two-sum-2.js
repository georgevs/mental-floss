const twoSum = (xs, t) => {
  const iter = (i, n, t) => {
    if (n <= 0) { return }
    const k = n / 2 | 0;
    const x = xs[i + k];
    if (x < t) { return iter(i + k + 1, n - k - 1, t) }
    else if (x === t) { return i + k }
    else { return iter(i, k, t) }
  };

  for (let i = 0; ; ++i) {
    let j;
    if ((j = iter(i, xs.length - i, t - xs[i])) !== undefined) {
      return [i + 1, j + 1];
    }
  }
};

const find = (xs, t) => {
  const iter = (i, n) => {
    if (n <= 0) { return }
    const k = n / 2 | 0;
    const x = xs[i + k];
    if (x < t) { return iter(i + k + 1, n - k - 1) }
    else if (x === t) { return i + k }
    else { return iter(i, k) }
  };
  return iter(0, xs.length);
};

module.exports = twoSum;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));

  // const { asserteq } = require('../../utils/asserteq');

  // asserteq(undefined, find([], 1));
  // asserteq(undefined, find([2], 1));
  // asserteq(undefined, find([2, 3], 1));
  // asserteq(undefined, find([2, 3, 4], 1));

  // asserteq(undefined, find([], 5));
  // asserteq(undefined, find([2], 5));
  // asserteq(undefined, find([2, 3], 5));
  // asserteq(undefined, find([2, 3, 4], 5));

  // asserteq(0, find([1], 1));

  // asserteq(0, find([1, 2, 3], 1));
  // asserteq(1, find([1, 2, 3], 2));
  // asserteq(2, find([1, 2, 3], 3));

  // asserteq(0, find([1, 2, 3, 4], 1));
  // asserteq(1, find([1, 2, 3, 4], 2));
  // asserteq(2, find([1, 2, 3, 4], 3));
  // asserteq(3, find([1, 2, 3, 4], 4));
}
