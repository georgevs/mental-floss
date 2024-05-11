function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.toString = function () { return this.next ? `(${this.val}, ${this.next})` : this.val }
}

module.exports = ListNode;
