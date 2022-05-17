const graph = (vs, xs) => {
  const g = Array.from(vs.values()).reduce((g, v) => (g.set(v, new Set()), g), new Map());
  return xs.reduce((g, [v1, v2]) => (g.get(v1).add(v2), g), g);
};

module.exports = { graph };
