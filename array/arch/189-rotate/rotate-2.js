const rotl = (xs, l) => { const n = xs.length; return rot(xs, l % n) };
const rotr = (xs, r) => { const n = xs.length; return rot(xs, n - r % n) };

const rot = (xs, k) => {
  const n = xs.length;
  if (n > 1 && k > 0 && k < n) {
    for (let s = 0, c = 0; c < n; ++s, ++c) {
      for (let i = s, j = s + k; j != s; ++c, i = j, j = (j + k) % n) {
        const t = xs[i]; xs[i] = xs[j]; xs[j] = t;
      }
    }
  }
  return xs;
}

module.exports = { rotl, rotr };

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
