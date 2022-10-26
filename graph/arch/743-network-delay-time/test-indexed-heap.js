const { asserteq } = require('../../../utils/asserteq');

const test = (Heap, n = 1) => loop(n, () => {
  asserteq([11,22,33,44,55,66,77,88,99], pipe(new Heap(asc), [[1,11],[2,22],[3,33],[4,44],[5,55],[6,66],[7,77],[8,88],[9,99]]));
  asserteq([99,88,77,66,55,44,33,22,11], pipe(new Heap(desc), [[1,11],[2,22],[3,33],[4,44],[5,55],[6,66],[7,77],[8,88],[9,99]]));

  asserteq([4,11,22,33,55,66,77,99,888], 
    pipe(new Heap(asc), 
      [[1,11],[2,22],[3,33],[4,44],[5,55],[6,66],[7,77],[8,88],[9,99]],
      [[4,4],[8,888]]));

  asserteq([888,99,77,66,55,33,22,11,4], 
    pipe(new Heap(desc), 
      [[1,11],[2,22],[3,33],[4,44],[5,55],[6,66],[7,77],[8,88],[9,99]],
      [[4,4],[8,888]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn() };
const asc = (lhs, rhs) => lhs - rhs;
const desc = (lhs, rhs) => rhs - lhs;

const pipe = (q, xs, ys) => {
  xs.forEach(([k, v]) => q.insert(k, v));
  if (ys) { ys.forEach(([k, v]) => q.insert(k, v)) }
  const rs = [];
  while (!q.empty()) { rs.push(q.dequeue()[1]) }
  return rs;
};

module.exports = test;

if (require.main === module) {
  test(require('./indexed-heap'));
  test(require('./indexed-heap-oop'));
}
