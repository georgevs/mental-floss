const { log, logf } = require('./log');

const connect = logf(void 0, (r) => {
  const q = r ? [r] : [];
  for (let i = 0, n = 1; q.length > 0; n = 2 * n + 1) {
    for (let pp = null, p = null; i < n; ++i, pp = p) {
      p = q.shift();
      if (p.left) { q.push(p.left, p.right) }
      if (pp) { pp.next = p }
    }
  }
  return r;
});

module.exports = connect;
