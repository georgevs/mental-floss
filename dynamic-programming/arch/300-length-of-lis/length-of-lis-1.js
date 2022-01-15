// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

const lengthOfLIS = (xs) =>
  [subseqs(xs)]
  .map(filter(isStrictlyIncreasing))
  .map(map(length))
  .map(max)
  .pop();

const tap = (f) => (x) => (f(x), x);
const log = console.log.bind(console);

const filter = (f) => (xs) => xs.filter(f);
const map = (f) => (xs) => xs.map(f);
const reduce = (f, i) => (xs) => xs.reduce(f, i);
const max = Function.apply.bind(Math.max, null);

const subseqs = (xs) => {
  if (xs.length === 0) { return [] }
  if (xs.length === 1) { return [[xs[0]]] }
  const ys = xs.slice(0, -1), x = xs[xs.length - 1];
  const zs = subseqs(ys);
  return [...zs, [x], ...zs.map(z => [...z, x])];
};

const isStrictlyIncreasing = (xs) => xs.length > 0 && xs.every((x, i) => i == 0 || xs[i - 1] < x);

const length = ({ length }) => length;

const { asserteq } = require('../../../utils/asserteq');

asserteq([], subseqs([]));
asserteq([[1]], subseqs([1]));
asserteq([[1], [2], [1, 2]], subseqs([1, 2]));
asserteq([[1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]], subseqs([1, 2, 3]));

asserteq(4, lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
asserteq(4, lengthOfLIS([0, 1, 0, 3, 2, 3]));
asserteq(1, lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
asserteq(3, lengthOfLIS([4, 10, 4, 3, 8, 9]));
asserteq(6, lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
asserteq(4, lengthOfLIS([8, 1, 6, 2, 3, 10]));
