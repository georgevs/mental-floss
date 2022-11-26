const alienOrder = (words) => {
  const r = kahn(vertices(words), edges(words));
  return (r ?? []).join('');
};

const kahn = (vs, xs) => {
  if (!xs) { return }
  const ds = ind(vs, xs);
  const r = [];
  const s = new Set;
  while (r.length < vs.size) {
    let n = 0;
    for (const v of vs) {
      if (!s.has(v) && ds.get(v) === 0) {
        ++n;
        s.add(v);
        r.push(v);
        for (const [v1, v2] of xs) {
          if (v === v1) { ds.set(v2, ds.get(v2) - 1) }
        }
      }
    }
    if (n === 0) { return } // no solution
  }
  return r;
};

const ind = (vs, xs) => {
  const ds = new Map(Array.from(vs).map(v => [v, 0]));
  for (const [u, v] of xs) {
    ds.set(v, ds.get(v) + 1);
  }
  return ds;
};

const vertices = (words) => {
  const s = new Set;
  for (const word of words) {
    for(const c of Array.from(word)) {
      s.add(c);
    }
  }
  return s;
};

const edges = (words) => {
  const r = [];
  for (let i = 1; i < words.length; ++i) {
    const w1 = words[i - 1], w2 = words[i];
    const n = Math.min(w1.length, w2.length);
    let j;
    for (j = 0; j < n; ++j) {
      const c1 = w1[j], c2 = w2[j];
      if (c1 !== c2) { 
        r.push([c1, c2]);
        break;
      }
    }
    if (j === n && n < w1.length) { return } // no solution
  }
  return r;
};


module.exports = alienOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
