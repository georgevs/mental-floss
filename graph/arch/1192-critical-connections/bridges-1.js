const bridges = (g) => {
  const bxs = [];

  const vs = new Set;
  const ids = new Map;
  const low = new Map;
  let id = 0;

  const dfs = (v1, vp) => {
    vs.add(v1);
    ids.set(v1, id);
    low.set(v1, id);
    ++id;
    for (const v2 of g.neighbours(v1)) {
      if (v2 === vp) { continue } // skip parent
      if (!vs.has(v2)) {
        dfs(v2, v1);
        low.set(v1, Math.min(low.get(v1), low.get(v2)));
        if (ids.get(v1) < low.get(v2)) { bxs.push([v1, v2]) }
      } else {
        low.set(v1, Math.min(low.get(v1), ids.get(v2)));
      }
    }
  };

  for (const v1 of g.vertices()) {
    if (!vs.has(v1)) { dfs(v1, null) }
  }

  return bxs;
};

module.exports = bridges;
