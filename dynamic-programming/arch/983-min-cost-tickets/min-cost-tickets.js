// 1 <= days.length <= 365
// 1 <= days[i] <= 365
// days is in strictly increasing order.
// costs.length == 3
// 1 <= costs[i] <= 1000

const mincostTickets = (xs, [c1, c7, c30]) => {
  const n = xs.length;
  const iter = (i) => {
    const r1 = c1 + (i + 1 < n ? dp(i + 1) : 0);
    const i7 = next(i, 7), r7 = c7 + (i7 !== undefined ? dp(i7) : 0);
    const i30 = next(i, 30), r30 = c30 + (i30 !== undefined ? dp(i30) : 0);
    return Math.min(r1, r7, r30);
  };
  const next = (i, k) => {
    for (let j = i + 1; j < n; ++j) {
      if (xs[i] + k <= xs[j]) { return j }
    }
  };
  // const dp = iter;
  const dp = ((rs = Array(n)) => (i) => rs[i] ?? (rs[i] = iter(i)))();
  return dp(0);
};

const { asserteq } = require('../../../utils/asserteq');

asserteq(11, mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
asserteq(17, mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]));
