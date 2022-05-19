/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])'
*/

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};
Node.prototype.toString = function () { return `(${this.val} ${this.left} ${this.right} ${this.next})` };

const { asserteq } = require('../../../utils/asserteq');
const { log } = require('./log');

const test = (connect, n) => loop(Number.parseInt(n) || 1, () => {
  asserteq([1, '#', 2, 3, '#', 4, 5, 6, 7, '#'], serialize(connect(deserialize([1, 2, 3, 4, 5, 6, 7]))));
  asserteq([], serialize(deserialize([])));
  asserteq([1,'#',2,'#',3,'#',4,'#',5,'#',6,'#',7,'#'], serialize(deserialize([1,2,3,4,5,6,7])));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

const deserialize = (xs) => {
  const N = xs.length;
  const ys = xs.map(val => new Node(val));
  for (let s = 0, n = 1; n < N; s = n, n = 2 * n + 1) {
    for (let i = s; i < n; ++i) {
      const l = n + 2 * (i - s);
      ys[i].left = ys[l];
      ys[i].right = ys[l + 1];
    }
  }
  return ys[0] || null;
};

const serialize = (n) => {
  const q = n ? [n] : [];
  const r = [];
  while (q.length > 0) {
    const i = q.shift();
    r.push(i.val);
    if (!i.next) { r.push('#') }
    if (i.left) { q.push(i.left, i.right) }
  }
  return r;
};

module.exports = test;
