const union = (size) => {
  let rs = Array(size).fill().map((_, i) => i);
  let hs = Array(size).fill(1);
  const find = (v) => {
    let t = v, r = rs[t];
    while (t != r) { t = r, r = rs[t] }
    return r;
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
  return { find, connect, connected };
};

module.exports = union;
