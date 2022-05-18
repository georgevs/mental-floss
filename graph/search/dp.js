// for directed acyclic graphs only
const paths = (g, v1, v2) => {
  const iter = (v) => {
    if (v === v2) { return [[v]] }
    return Array.from(g.neighbors(v)).map(dp).map(p => [v, ...p]);
  };
  const dp = ((rs = new Map) => (v) => { 
    let r; 
    return rs.get(v) ?? (rs.set(v, r = iter(v)), r);
  })();
  return dp(v1);
};
module.exports = { paths };
