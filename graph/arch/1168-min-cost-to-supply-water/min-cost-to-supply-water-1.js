// 2 <= n <= 10^4
// wells.length == n
// 0 <= wells[i] <= 10^5
// 1 <= pipes.length <= 10^4
// pipes[j].length == 3
// 1 <= house1j, house2j <= n
// 0 <= costj <= 10^5
// house1j != house2j

const logff = (log) => false ? { log, logf: (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn } : { log: () => void 0, logf: (_, fn) => fn };
const { logf, log } = logff(console.log);

const minCostToSupplyWater = logf('mc', (n, wells, pipes) => {
  wells.forEach((w, i) => pipes.push([i + 1, i + 1, w]));
  return kruskal(n, pipes);
});

const kruskal = logf('k', (n, xs) => {
  const orderByCost = ([_lv1, _lv2, lw], [_rv1, _rv2, rw]) => lw - rw;
  xs.sort(orderByCost);
  log('xs', xs);
  const u = union(n + 1);
  let rw = 0;
  const s = new Set;
  const iter = ([v1, v2, w]) => {
    if (u.hasWater(v1) && u.hasWater(v2)) { return false }
    if (v1 != v2 && u.connected(v1, v2)) { return false }
    u.connect(v1, v2);
    rw += w;
    if (u.hasWater(v1)) { s.add(v1) }
    if (u.hasWater(v2)) { s.add(v2) }
    return s.size == n;
  };
  xs.some(iter);
  return rw;
});

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const hs = Array(n).fill(0);
  const find = (v) => {
    let r = rs[v];
    while (r != v) { v = r; r = rs[v] }
    return r;
  };
  const connect = logf('', (v1, v2) => {
    if (v1 == v2) {
      const r1 = find(v1);
      rs[r1] = rs[v1] = v1;
      hs[v1] = 1;
    } else {
      const r1 = find(v1), r2 = find(v2);
      if (r1 != r2) {
        const h1 = hs[r1], h2 = hs[r2];
        if (h1 < h2) { rs[r1] = r2 }
        else if (h2 < h1) { rs[r2] = r1 }
        else { rs[r1] = r2 }
      }
    }
  });
  const hasWater = (v) => hs[find(v)] == 1;
  const connected = (v1, v2) => find(v1) == find(v2);
  return { connect, connected, find, hasWater };
};

module.exports = minCostToSupplyWater;
