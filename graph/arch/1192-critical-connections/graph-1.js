const graph = (n, xs) => {
  const g = new Map(Array.from(Array(n), (_, i) => [i, new Set]));
  xs.forEach(([v1, v2]) => { g.get(v1).add(v2); g.get(v2).add(v1) });
  const vertices = () => g.keys();
  const neighbours = (v1) => g.get(v1);
  return { vertices, neighbours };
};

module.exports = graph;
