// 2 <= n <= 100
// 1 <= logs.length <= 10^4
// logs[i].length == 3
// 0 <= timestampi <= 10^9
// 0 <= xi, yi <= n - 1
// xi != yi
// All the values timestampi are unique.
// All the pairs (xi, yi) occur at most one time in the input.

const logff = (log) => (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn;
const logf = false ? logff(console.log.bind(console)) : (_, fn) => fn;

const earliestAcq = logf('ea', (xs, n) => {
  xs.sort(([lhs], [rhs]) => lhs - rhs);
  const u = union(n);
  const [t] = xs.find(([_, v1, v2]) => (u.connect(v1, v2), u.numSets() == 1)) || [-1];
  return t;
});

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const connect = (v1, v2) => {
    const r1 = rs[v1], r2 = rs[v2];
    if (r1 != r2) { rs.forEach((r, i) => r == r2 && (rs[i] = r1)) }
  };
  const numSets = () => new Set(rs).size;
  return { connect, numSets };
};

module.exports = earliestAcq;
