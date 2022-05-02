// 1 <= n <= 10^4
// 1 <= connections.length <= 10^4
// connections[i].length == 3
// 1 <= xi, yi <= n
// xi != yi
// 0 <= costi <= 10^5

const logff = (log) => ({ log, logf: (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn });
const noop = ({ log: () => undefined, logf: (_, fn) => fn });
const { log, logf } = false ? logff(console.log.bind(console)) : noop;

const minimumCost = logf('mc', (n, xs) => {
  const orderByCost = ([_lv1, _lv2, lw], [_rv1, _rv2, rw]) => lw - rw;
  xs.sort(orderByCost);
  const u = union(n);
  let rn = 0, rw = 0;
  const iter = ([v1, v2, w]) => {
    if (u.connected(v1, v2)) { return false }  // skip connected and continue
    u.connect(v1, v2);
    rw += w; ++rn;
    return rn + 1 == n; // stop when enough edges counted 
  };
  return xs.some(iter) ? rw : -1;
});

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const hs = Array(n).fill(1);
  const find = (v) => {
    let r = rs[v];
    while (r != v) { v = r; r = rs[v] }
    return r;
  };
  const connect = (v1, v2) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) { 
      const h1 = hs[r1], h2 = hs[r2];
      if (h1 < h2) { rs[r1] = r2 }
      else if (h2 < h1) { rs[r2] = r1 }
      else { rs[r1] = r2; ++hs[r2] }
    }
  };
  const connected = (v1, v2) => find(v1) == find(v2);
  return { connect, find, connected };
};

module.exports = minimumCost;
