const rotl = (xs, l) => { const n = xs.length; return rot(xs, l % n) };
const rotr = (xs, r) => { const n = xs.length; return rot(xs, n - r % n) };

const rot = (xs, k) => {
  const n = xs.length;
  xs.map((_, i) => xs[(i + k) % n])
    .forEach((y, i) => { xs[i] = y });
  return xs;
}

module.exports = { rotl, rotr };

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
