const { asserteq } = require('../../../utils/asserteq');

const test = ({ graph, bfs }, n) => loop(Number.parseInt(n) || 1, () => {
  const transform = (xs) => {
    const g = graph(xs);
    if (!g) { return }
    const rs = [];
    bfs((l, { y, x }) => { rs.push([l, y, x]) }, g);
    return rs;
  };

  asserteq([[0, undefined, undefined], [1, 0, 0], [1, 1, 1], [2, 0, 1], [2, 1, 0], [2, 2, 1], [3, 0, 2], [3, 2, 2]], 
    transform([[2, 1, 1], [1, 2, 0], [0, 1, 1]]));
  asserteq([[0, undefined, undefined], [1, 0, 0], [2, 0, 1], [2, 1, 0], [3, 0, 2], [3, 1, 1], [4, 2, 1], [5, 2, 2]], 
    transform([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));

  asserteq([[0, undefined, undefined], [1, 0, 0], [2, 0, 1], [3, 0, 2], [3, 1, 1], [4, 1, 2], [5, 2, 2]], 
    transform([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));
  asserteq([[0, undefined, undefined], [1, 0, 0], [2, 0, 1], [2, 1, 0]], 
    transform([[2, 1, 0], [1, 0, 1], [0, 1, 1]]));

  asserteq([[0, undefined, undefined], [1, 0, 1]], transform([[0, 2]]));

  asserteq([[0, undefined, undefined]], transform([[0]]));
  asserteq([[0, undefined, undefined], [1, 0, 2], [1, 0, 4], [2, 0, 1], [3, 0, 0]], 
    transform([[1, 1, 2, 0, 2, 0]]));
  
  asserteq([[0, undefined, undefined]], transform([[1]]));
});
const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./graph-1'));
  test(require('./graph-2'));
}
