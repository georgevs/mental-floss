const union = (size) => {
  let rs = Array(size).fill().map((_, i) => i);
  const find = (v) => {
    if (rs[v] == v) { return v }
    return (rs[v] = find(rs[v]), rs[v]);
  };
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { rs[v2] = r1 }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  const numSets = () => new Set(rs).size;
  return { find, connect, connected, numSets };
};

module.exports = { union };

// require('./test')(module.exports);
