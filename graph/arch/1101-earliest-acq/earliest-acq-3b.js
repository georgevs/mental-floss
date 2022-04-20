// 2 <= n <= 100
// 1 <= logs.length <= 10^4
// logs[i].length == 3
// 0 <= timestampi <= 10^9
// 0 <= xi, yi <= n - 1
// xi != yi
// All the values timestampi are unique.
// All the pairs (xi, yi) occur at most one time in the input.

const earliestAcq = (xs, n) => {
  if (xs.length + 1 < n) { return -1 }
  xs.sort(([lhs], [rhs]) => lhs - rhs);
  const x = ((u, c) => xs.find(([_, v1, v2]) => (u.connect(v1, v2) && ++c, c == n)))(union(n), 1);
  return x && x[0] || -1;
};

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const connect = (v1, v2) => {
    const r1 = rs[v1], r2 = rs[v2];
    if (r1 != r2) { rs.forEach((r, i) => r == r2 && (rs[i] = r1)); return true }
    return false;
  };
  return { connect };
};

module.exports = earliestAcq;
