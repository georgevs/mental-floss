const orangesRotting = (xs) => {
  const h = xs.length, w = xs[0].length;
  let g = copy(xs), ng = grid(w, h);
  let dirty = false, fresh = 0;
  let iterations = 0;

  do {
    const next = nextOf(g);
    dirty = false, fresh = 0;
    for (let y = 0; y < h; ++y) {
      for (let x = 0; x < w; ++x) {
        ng[y][x] = next(y, x);
        if (g[y][x] !== ng[y][x]) { dirty = true }
        if (g[y][x] === 1) { ++fresh }
      }
    }
    ([g, ng] = [ng, g]);
    ++iterations;
  } while (dirty);

  return fresh ? -1 : iterations-1;
};

const nextOf = (g) => {
  const h = g.length - 1, w = g[0].length - 1;
  return (y, x) => (
    g[y][x] !== 1 ? g[y][x]
    : (0 < y && g[y - 1][x] === 2) || 
      (x < w && g[y][x + 1] === 2) ||
      (y < h && g[y + 1][x] === 2) ||
      (0 < x && g[y][x - 1] === 2) ? 2
    : 1
  );
};
const copy = (g) => Array.from(g, r => Array.from(r));
const grid = (w, h) => Array.from(Array(h), () => Array(w));

module.exports = orangesRotting;

if (require.main === module) {
  require('./test-oranges-rotting')(module.exports, process.argv[2]);
}
