/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])' ./smallest-string-with-swaps
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (smallestStringWithSwaps, n) => loop(Number.parseInt(n) || 1, () => {
  // asserteq("bacd", smallestStringWithSwaps("dcab", [[0, 3], [1, 2]]));
  // asserteq("abcd", smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]]));
  // asserteq("abc", smallestStringWithSwaps("cba", [[0, 1], [1, 2]]));
  let { r, s, xs } = require('./test-big.json');
  asserteq(r, smallestStringWithSwaps(s, xs));
});

module.exports = test;
