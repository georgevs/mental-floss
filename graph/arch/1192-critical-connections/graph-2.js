const graph = (n, xs) => {
  const g = Array(n);
  const addEdge = (v1, v2) => {
    let l;
    const l1 = (g[v1] ?? (g[v1] = l = [], l));
    l1.push(v2);
  };
  xs.forEach(([v1, v2]) => { addEdge(v1, v2); addEdge(v2, v1) });
  const vertices = function* () { for (let i = 0; i < n; ++i) yield i };
  const neighbours = (v1) => g[v1] ?? [];
  return { vertices, neighbours };
};

module.exports = graph;
