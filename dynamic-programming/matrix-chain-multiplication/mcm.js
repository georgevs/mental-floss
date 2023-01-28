const mcm = (xs) => {
  console.log('xs',xs)
  const n = xs.length;

  const iter = log('i', (i, j) => {
    if (i == j) { return 0 }

    let r = Infinity;
    for (let k = i; k < j; ++k) {
      r = Math.min(r, dp(i, k) + (xs[i] * xs[k + 1] * xs[j + 1]) + dp(k + 1, j));
    }
    return r;
  });
  const dp = (() => {
    const m = new Map;
    return (i, j) => { 
      let r, h = i * n + j; 
      return m.get(h) ?? (m.set(h, r = iter(i, j)), r);
    };
  })();

  return n <= 2 ? 0 : iter(0, n - 2);
};

const log = (p, fn) => (...xs) => {
  const r = fn(...xs);
  console.log(p, ...xs, '->', r);
  return r;
};

module.exports = mcm;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
