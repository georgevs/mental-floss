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
  const find = (v) => {
    let r = rs[v];
    for (; v != r; v = r, r = rs[v]) { }
    return r;
  };
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { rs[r1] = r2 }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  const numSets = () => rs.reduce((s, v) => s.add(find(v)), new Set()).size;
  return { find, connect, connected, numSets };
};

module.exports = countComponents;
