const graph = (vs, xs) => {
  const g = Array.from(vs.values()).reduce((g, v) => (g.set(v, new Set()), g), new Map());
  xs.reduce((g, [v1, v2]) => (g.get(v1).add(v2), g), g);
  const neighbors = (v) => g.get(v);
  const vertices = () => g.keys();
  const first = () => vertices().next().value;
  return { neighbors, vertices, first, __g: g };
};

module.exports = { graph };
