function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.toString = function () { return this.next ? `(${this.val}, ${this.next})` : this.val }
}

const numOf = (xs) => xs.reduceRight(({ next }, val) => ({ next: new ListNode(val, next)} ), {}).next;
const arrayOf = (num) => num === null ? [] : [num.val, ...arrayOf(num.next)];
const numEq = (i, j) => arrayEq(arrayOf(i), arrayOf(j));

const arrayEq = (xs, ys) =>
  (xs === undefined & ys === undefined) ||
  (xs && ys && xs.length == ys.length && xs.every((x, i) => x === ys[i]));

module.exports = { ListNode, numOf, arrayOf, numEq };
