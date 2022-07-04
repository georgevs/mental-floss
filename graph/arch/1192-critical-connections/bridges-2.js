const bridges = (g) => {
  const bxs = [];

  const ids = new Map;
  const low = new Map;
  let id = 0;

  const mark = (v1) => {
    ids.set(v1, id);
    low.set(v1, id);
    ++id;
  };
  const update = (v1, v2, isCycle) => {
    const l1 = low.get(v1), l2 = (isCycle ? ids : low).get(v2);
    low.set(v1, Math.min(l1, l2));
  };
  const collectIfBridge = (v1, v2, isCycle) => {
    if (!isCycle && ids.get(v1) < low.get(v2)) { bxs.push([v1, v2]) }
  };
  const edge = (v1, v2, isCycle) => {
    update(v1, v2, isCycle);
    collectIfBridge(v1, v2, isCycle);
  };

  dfs({ pre: mark, edge }, g);

  return bxs;
};

const dfs = ({ pre, edge }, g) => {
  const vs = new Set;

  const visit = (v1, vp) => {
    vs.add(v1);
    pre(v1, vp);
    for (const v2 of g.neighbours(v1)) {
      if (v2 === vp) { continue } // skip parent
      const isCycle = vs.has(v2);
      if (!isCycle) { visit(v2, v1) }
      edge(v1, v2, isCycle);
    }
  };

  for (const v1 of g.vertices()) {
    if (!vs.has(v1)) { visit(v1, null) }
  }
};

module.exports = bridges;
