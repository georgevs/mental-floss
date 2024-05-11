const { asserteq } = require('../../../utils/asserteq');
const ListNode = require('./list-node');

const numOf = (xs) => xs.reduceRight(({ next }, val) => ({ next: new ListNode(val, next)} ), {}).next;
const arrayOf = (num) => num === null ? [] : [num.val, ...arrayOf(num.next)];

const test = (addTwoNumbers) => {
  const addTwoNumbers_ = (x, y) => arrayOf(addTwoNumbers(numOf(x), numOf(y)));
  asserteq([7, 0, 8], addTwoNumbers_([2, 4, 3], [5, 6, 4]));
  asserteq([8, 9, 9, 9, 0, 0, 0, 1], addTwoNumbers_([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
  asserteq([6, 5, 5, 6, 4, 4, 2, 5, 5, 1], addTwoNumbers_([0, 8, 6, 5, 6, 8, 3, 5, 7], [6, 7, 8, 0, 8, 5, 8, 9, 7]));
};

module.exports = test;

if (require.main === module) {
  test(require('./add-two-numbers'));
  test(require('./add-two-numbers-2'));
  test(require('./add-two-numbers-3'));
}
