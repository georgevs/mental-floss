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

module.exports = union;
