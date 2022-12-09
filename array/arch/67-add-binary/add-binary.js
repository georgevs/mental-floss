const addBinary = (a, b) => {
  const bits = xs => i => i < xs.length ? +xs[xs.length - 1 - i] : 0;
  const xa = bits(a), xb = bits(b);
  const r = [];
  let c = 0;
  for (let i = 0; i < Math.max(a.length, b.length); ++i) {
    const n = c + xa(i) + xb(i);
    c = n / 2 | 0;
    r.unshift(n % 2); 
  }
  if (c) { r.unshift(c) }
  return r.join('');
};

module.exports = addBinary;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
