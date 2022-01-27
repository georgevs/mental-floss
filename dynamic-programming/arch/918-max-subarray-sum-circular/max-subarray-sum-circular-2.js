// n == nums.length
// 1 <= n <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4

const maxSubarraySumCircular = (xs) => { 
  const n = xs.length;
  let acc = xs[0];
  let a = monoqueue(n);
  a.add(0, acc);
  let r = -Infinity;
  for (let i = 1; i < 2 * n; ++i) {
    acc += xs[i % n];

    r = Math.max(r, acc - a.first());

    a.add(i, acc);
  }

  return r;
};

const monoqueue = (n) => {
  let a = [];
  return {
    add: (i, acc) => { 
      if (a.length === 0 || acc <= a[0][1]) { a.unshift([i, acc]); return }
      a = a.filter(([j]) => i < j + n);
      let j = 0;
      for (; j < a.length && a[j][1] < acc; ++j) { }
      a.splice(j, 0, [i, acc]);
    },
    first: () => a[0][1]
  }
};


// const maxSubarraySumCircular = (xs) => { 
//   const n = xs.length;
//   let r = -Infinity;
//   for (let i = 0; i < n; ++i) {
//     let c = -Infinity;
//     for (let j = i; j < i + n; ++j){
//       const x = xs[j % n];
//       c = Math.max(c + x, x);
//       r = Math.max(r, c);
//     }
//   }
//   return r;
// };

const { asserteq } = require('../../../utils/asserteq');

asserteq(3, maxSubarraySumCircular([1, -2, 3, -2]));
asserteq(10, maxSubarraySumCircular([5, -3, 5]));
asserteq(-2, maxSubarraySumCircular([-3, -2, -3]));
asserteq(3516893, maxSubarraySumCircular(require('./test-30000.json')));
