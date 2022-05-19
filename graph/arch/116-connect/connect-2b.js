const { log, logf } = require('./log');

const connect = logf(void 0, (r) => {
  const q = r ? [r] : [];
  while (q.length > 0) {
    const n = q.length;
    for (let i = 0; i < n; ++i) {
      p = q.shift();
      if (i + 1 < n) { p.next = q[0] }
      if (p.left) { q.push(p.left, p.right) }
    }
  }
  return r;
});

module.exports = connect;
