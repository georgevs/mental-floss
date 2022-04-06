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

module.exports = union;
