const { asserteq } = require('../../../utils/asserteq');

const test = (Heap, n = 1) => loop(n, () => {
  asserteq([11, 22, 33, 44, 55, 66, 77, 88, 99], pipe(new Heap(asc), [11, 22, 33, 44, 55, 66, 77, 88, 99]));
  asserteq([99, 88, 77, 66, 55, 44, 33, 22, 11], pipe(new Heap(desc), [11, 22, 33, 44, 55, 66, 77, 88, 99]));
  asserteq([4, 11, 22, 33, 55, 66, 77, 99, 888], pipe(new Heap(asc), [11, 22, 33, 4, 55, 66, 77, 888, 99]));
  asserteq([888, 99, 77, 66, 55, 33, 22, 11, 4], pipe(new Heap(desc), [11, 22, 33, 4, 55, 66, 77, 888, 99]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn() };
const asc = (lhs, rhs) => lhs - rhs;
const desc = (lhs, rhs) => rhs - lhs;

const pipe = (q, xs, ys) => {
  xs.forEach(v => q.enqueue(v));
  if (ys) { ys.forEach(v => q.enqueue(v)) }
  const rs = [];
  while (!q.empty()) { rs.push(q.dequeue()) }
  return rs;
};

module.exports = test;

if (require.main === module) {
  test(require('./heap'));
}
