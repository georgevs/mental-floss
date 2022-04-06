const union = (size) => {
  let rs = Array(size).fill().map((_, i) => i);
  let hs = Array(size).fill(1);
  const find = (v) => {
    if (rs[v] == v) { return v }
    return (rs[v] = find(rs[v]), rs[v]);
  };
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) {
      const h1 = hs[r1], h2 = hs[r2];
      if (h1 < h2) { rs[r1] = r2 }
      else if (h2 < h1) { rs[r2] = r1 }
      else { rs[r1] = r2; ++hs[r2] }
    }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  const numSets = () => new Set(rs).size;
  return { find, connect, connected, numSets };
};

module.exports = union;
