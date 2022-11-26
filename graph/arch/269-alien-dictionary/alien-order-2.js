const alienOrder = (words) => {
  try { return topoSort(graph(edges(words))).join('') }
  catch { return '' }
};

const topoSort = (g) => {
  const r = [];
  const s = new Map;   // 1-visiting, 2-visited
  const visit = (v1) => {
    s.set(v1, 1);
    for (const v2 of (g.get(v1) ?? [])) {
      const color = s.get(v2);
      if (color === 1) { throw Error('loop detected') }
      if (!color) { visit(v2) }
    }
    s.set(v1, 2);
    if (v1 !== '0') { r.unshift(v1) }
  };
  visit('0');
  return r;
};

const graph = (xs) => {
  const get = (g, v1) => (g.get(v1) ?? new Set);
  const addEdge = (g, [v1, v2]) => (
    v1 === v2 ? g : g.set(v1, get(g, v1).add(v2))
  );
  return xs.reduce(addEdge, new Map);
};

const edges = (words) => {
  const r = [];
  for (let i = 1; i < words.length; ++i) {
    const w1 = words[i - 1] + '0', w2 = words[i] + '0';
    const n = Math.min(w1.length, w2.length);
    for (let j = 0; j < n; ++j) {
      const c1 = w1[j], c2 = w2[j];
      if (c1 !== c2) { 
        r.push([c1, c2]);
        break;
      }
    }
  }

  for (const c of new Set(words.flatMap(word => Array.from(word))).keys()) {
    r.push(['0', c]);
  }
  return r;
};


module.exports = alienOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
