const union = (size) => {
  const rs = Array(size).fill().map((_, i) => i);
  const find = (v) => rs[v];
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { rs.forEach((r, i) => r == r2 && (rs[i] = r1)) }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  return { find, connect, connected };
};

module.exports = { union };

// require('./test')(module.exports);
