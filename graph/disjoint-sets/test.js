/*
seq 10 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]))' ./quick-connect-rank-union
seq 10 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]))' ./quick-connect-union
seq 10 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]))' ./quick-find-union
*/

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = ({ union }) => loop(100000, () => {
  const u = union(10);
  
  u.connect(1, 2);
  u.connect(2, 5);
  u.connect(5, 6);
  u.connect(6, 7);
  u.connect(3, 8);
  
  asserteq(true, u.connected(1, 5));
  asserteq(true, u.connected(5, 7));
  asserteq(false, u.connected(4, 9));
  
  u.connect(9, 4);
  
  asserteq(true, u.connected(4, 9));
});

module.exports = test;
