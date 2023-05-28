const rotl = (xs, l) => { const n = xs.length; return rot(xs, n - l % n) };
const rotr = (xs, r) => { const n = xs.length; return rot(xs, r % n) };

const rot = (xs, k) => {
  const n = xs.length;
  if (n > 1 && k > 0 && k < n) {
    reverse(xs);
    reverse(xs, 0, k);
    reverse(xs, k, xs.length);
  }
  return xs;
}

const reverse = (xs, s, e) => {
  for (let i = s ?? 0, j = (e ?? xs.length) - 1; i < j; ++i, --j) {
    const t = xs[i]; xs[i] = xs[j]; xs[j] = t;
  }
};

module.exports = { rotl, rotr };

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
