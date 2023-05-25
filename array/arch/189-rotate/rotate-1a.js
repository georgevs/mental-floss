const rotl = (xs, k) => (
  xs.map((_, i) => xs[(i + k) % xs.length])
    .forEach((y, i) => { xs[i] = y }), 
  xs
);
const rotr = (xs, k) => rotl(xs, xs.length - (k % xs.length));
const rotate = rotr;

module.exports = rotate;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
