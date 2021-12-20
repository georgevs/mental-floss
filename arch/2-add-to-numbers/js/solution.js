const { addTwoNumbers } = require('./add-two-numbers-2');
const { numOf, numEq } = require('./defines');

const tests = [
  { l1: [2,4,3], l2: [5,6,4], l3: [7,0,8] },
  // { l1: [0], l2: [0], l3: [0] },
  // { l1: [9,9,9,9,9,9,9], l2: [9,9,9,9], l3: [8,9,9,9,0,0,0,1] },
  // { l1: [0,8,6,5,6,8,3,5,7], l2: [6,7,8,0,8,5,8,9,7], l3: [6,5,5,6,4,4,2,5,5,1] },
];

for (const { l1, l2, l3 } of tests) {
  const r = addTwoNumbers(numOf(l1), numOf(l2));
  if (!numEq(r, numOf(l3))) {
      console.log('failed:', [l1, l2, l3, r.toString()]);
  }
}
