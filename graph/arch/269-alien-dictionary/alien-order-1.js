const alienOrder = (words) => {
  try { return topoSort(graph(edges(explode(words)))).join('') }
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

const explode = (xs) => xs.map(x => Array.from(x + '0'));

const index = (xs) => (
  xs.map(([h, ...t]) => [h, t])
    .reduce((acc, [k, v]) => {
      if (v.length) {
        const r = acc.get(k);
        if (r) { r.push(v) }
        else { acc.set(k, [v]) }
      }
      return acc;
    }, new Map)
);

const keys = (xs) => (
  xs.map(([k]) => k)
  .reduce((acc, k, i, ks) => i === 0 || ks[i - 1] !== k ? [...acc, k] : acc, ['0'])
);

const sets = (xs) => {
  if (!xs.length) { return [] }
  return [keys(xs)].concat(...Array.from(index(xs).values()).map(sets));
};

const pairs = (xs) => { 
  const r = []; 
  for (let i = 1; i < xs.length; ++i) { 
    r.push([xs[i - 1], xs[i]]) 
  }
  return r;
};

const edges = (xs) => sets(xs).flatMap(pairs);
 
  
module.exports = alienOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
