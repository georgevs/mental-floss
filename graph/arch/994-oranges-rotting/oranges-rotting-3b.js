
const orangesRotting = (xs) => {
  const h = xs.length, w = xs[0].length;
  let q = null, n = 0;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (xs[y][x] === 2) { q = [y, x, q]; ++n }
      if (xs[y][x] === 1) { ++n }
    }
  }
  const vs = new Set;
  const Y = h - 1, X = w - 1;
  let nq = null, l = 0, r = 0, m = 0;
  while (q) {
    do {
      let y, x;
      ([y, x, q] = q);
      r = l; ++m;
      if (0 < x && xs[y][x - 1] === 1 && !vs.has(y * w + (x - 1))) { vs.add(y * w + (x - 1)); nq = [y, x - 1, nq] }
      if (0 < y && xs[y - 1][x] === 1 && !vs.has((y - 1) * w + x)) { vs.add((y - 1) * w + x); nq = [y - 1, x, nq] }
      if (x < X && xs[y][x + 1] === 1 && !vs.has(y * w + (x + 1))) { vs.add(y * w + (x + 1)); nq = [y, x + 1, nq] }
      if (y < Y && xs[y + 1][x] === 1 && !vs.has((y + 1) * w + x)) { vs.add((y + 1) * w + x); nq = [y + 1, x, nq] }

    } while (q);
    q = nq, nq = null, ++l;
  }
  return n == m ? r : -1;
};

module.exports = orangesRotting;

if (require.main === module) {
  require('./test-oranges-rotting')(module.exports, process.argv[2]);
}
