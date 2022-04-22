/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./calc-equation
*/

const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (calcEquation, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq([6.00000, 0.50000, -1.00000, 1.00000, -1.00000], calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));
  asserteq([3.75000, 0.40000, 5.00000, 0.20000], calcEquation([["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5.0], [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]));
  asserteq([0.50000, 2.00000, -1.00000, -1.00000], calcEquation([["a", "b"]], [0.5], [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]));
  asserteq([-1, -1, 1, 1], calcEquation([["a", "b"], ["c", "d"]], [1.0, 1.0], [["a", "c"], ["b", "d"], ["b", "a"], ["d", "c"]]));
  asserteq([1.33333, 1, -1], calcEquation([["a", "e"], ["b", "e"]], [4.0, 3.0], [["a", "b"], ["e", "e"], ["x", "x"]]));
  asserteq([1.13333, 16.80000, 1.50000, 1.00000, 0.05952, 2.26667, 0.44118, -1.00000, -1.00000], calcEquation([["x1", "x2"], ["x2", "x3"], ["x1", "x4"], ["x2", "x5"]], [3.0, 0.5, 3.4, 5.6], [["x2", "x4"], ["x1", "x5"], ["x1", "x3"], ["x5", "x5"], ["x5", "x1"], ["x3", "x4"], ["x4", "x3"], ["x6", "x6"], ["x0", "x0"]]));
});

module.exports = test;
