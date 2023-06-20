const { asserteq } = require('../../../utils/asserteq');

const test = (Heap, n) => loop(Number.parseInt(n) || 1, () => {
  const asc = (lhs, rhs) => lhs - rhs;
  const desc = (lhs, rhs) => rhs - lhs;

  asserteq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pipe(new Heap(asc), [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
  asserteq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pipe(new Heap(asc), [0, 2, 1, 4, 3, 6, 5], [8, 7, 10, 9]));
  asserteq([10, 9, 8, 7, 6, 4, 3, 2, 1, 0], pipe(new Heap(desc), [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
  asserteq([10, 9, 8, 7, 5, 4, 3, 2, 1, 0], pipe(new Heap(desc), [0, 2, 1, 4, 3, 6, 5], [8, 7, 10, 9]));

});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

const pipe = (q, xs, ys) => { 
  xs.forEach(x => { q.enqueue(x) });
  if (ys) { q.dequeue(); ys.forEach(y => { q.enqueue(y) }) }
  const rs = []; 
  while (!q.empty()) { rs.push(q.dequeue()) }
  return rs;
};

module.exports = test;

if (require.main === module) {
  test(require('./heap'));
}
