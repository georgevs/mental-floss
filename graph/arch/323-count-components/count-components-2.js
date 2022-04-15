// 1 <= n <= 2000
// 1 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai <= bi < n
// ai != bi
// There are no repeated edges.

const logff = (log) => (p, fn) => p ? ((...args) => (log(p, ...args), fn(...args))) : fn;
const logf = false ? logff(console.log.bind(console)) : ((_, fn) => fn);

const countComponents = logf('cc', (n, xs) => {
  const u = union(n);
  xs.forEach(([v1, v2]) => u.connect(v1, v2));
  return u.numSets();
});

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const find = (v) => rs[v];
  const connect = (v1, v2) => {
    const r1 = rs[v1], r2 = rs[v2];
    if (r1 != r2) { rs.forEach((r, i) => r == r2 && (rs[i] = r1)) }
  };
  const connected = (v1, v2) => rs[v1] == rs[v2];
  const numSets = () => new Set(rs).size;
  return { find, connect, connected, numSets };
};

module.exports = countComponents;
