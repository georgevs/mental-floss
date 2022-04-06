// 1 <= n <= 2000
// 0 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no self-loops or repeated edges.

const validTree = (n, xs) => {
  const m = inputs(n);
  xs.forEach(([i, j]) => m.connect(i, j));
  for (let v = 0; v < n; ++v) {
    if (m.numInputs(v) != 1) { return false }
  }
  const u = union(n);
  xs.forEach(([i, j]) => u.connect(i, j));
  return u.numSets() == 1;
};

const inputs = (n) => {
  const xss = Array.from(Array(n), (_, i) => Array.from(Array(n), (_, j) => i == j ? 1 : 0));
  const connect = (v1, v2) => { xss[v2][v2] = 0; ++xss[v2][v1] };
  const numInputs = (v) => xss[v].reduce((acc, k) => acc + k);
  return { connect, numInputs };
};

const union = (n) => {
  const rs = Array.from(Array(n), (_, v) => v);
  const find = (v) => v == rs[v] ? v : (rs[v] = find(rs[v]), rs[v]);
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { rs[r1] = r2 }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  const roots = () => rs.map((_, v) => find(v));
  const numSets = () => new Set(roots()).size;
  return { find, connect, connected, roots, numSets };
};

module.exports = validTree;
