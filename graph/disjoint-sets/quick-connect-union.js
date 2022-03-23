const union = (size) => {
  let rs = Array(size).fill().map((_, i) => i);
  const find = (v) => {
    let t = v, r = rs[t];
    while (t != r) { t = r, r = rs[t] }
    return r;
  };
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { rs[v2] = r1 }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  return { find, connect, connected };
};

module.exports = { union };

// require('./test')(module.exports);
