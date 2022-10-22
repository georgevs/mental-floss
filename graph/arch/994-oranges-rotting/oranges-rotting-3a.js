
const orangesRotting = (xs) => {
  const h = xs.length, w = xs[0].length;
  let q = [], n = 0;
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (xs[y][x] === 2) { q.push([y, x]); ++n }
      if (xs[y][x] === 1) { ++n }
    }
  }
  const vs = new Set;
  const Y = h - 1, X = w - 1;
  let nq = [], l = 0, r = 0, m = 0;
  while (q.length > 0) {
    do {
      const [y, x] = q.shift();
      r = l; ++m;
      if (0 < x && xs[y][x - 1] === 1 && !vs.has(y * w + (x - 1))) { vs.add(y * w + (x - 1)); nq.push([y, x - 1]) }
      if (0 < y && xs[y - 1][x] === 1 && !vs.has((y - 1) * w + x)) { vs.add((y - 1) * w + x); nq.push([y - 1, x]) }
      if (x < X && xs[y][x + 1] === 1 && !vs.has(y * w + (x + 1))) { vs.add(y * w + (x + 1)); nq.push([y, x + 1]) }
      if (y < Y && xs[y + 1][x] === 1 && !vs.has((y + 1) * w + x)) { vs.add((y + 1) * w + x); nq.push([y + 1, x]) }

    } while (q.length > 0);
    q = nq, nq = [], ++l;
  }
  return n == m ? r : -1;
};

module.exports = orangesRotting;

if (require.main === module) {
  require('./test-oranges-rotting')(module.exports, process.argv[2]);
}
