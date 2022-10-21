// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

// const { log, logf } = require('./log');
const { log, logf } = { log: () => void 0, logf: (_, fn) => fn };

const shortestPathBinaryMatrix = logf('s', (grid) => {
  const g = graph(grid);
  const n = grid.length;
  const v1 = g.vertice([0, 0]);
  const v2 = g.vertice([n - 1, n - 1]);
  return bfs(g, v1, v2) ?? -1;
});

const bfs = logf('', (g, v1, v2) => {
  if (g.val(v1) !== 0) { return }
  const q = [[v1]];
  const s = new Set;
  let r = 0;
  while (q.length > 0) {
    ++r;
    for (let i = 0, n = q.length; i < n; ++i) {
      const p = q.shift();
      const v = p[p.length - 1];
      if (v === v2) { return r }
      const ps = g.neighbors(v)
        .filter(v => !s.has(v) && g.val(v) === 0)
        .map(v => (s.add(v), [...p, v]));
      q.push(...ps);
    }
  }
});

const graph = (grid) => {
  const n = grid.length;
  const neighbors = (v) => {
    const [y, x] = cell(v);
    const t = y - 1, b = y + 1, l = x - 1, r = x + 1;
    return [[t, l], [t, x], [t, r], [y, l], [y, r], [b, l], [b, x], [b, r]]
      .filter(([y, x]) => 0 <= y && y < n && 0 <= x && x < n)
      .map(vertice);
  };
  const factor = n;
  const cell = (v) => [(v / factor) | 0, v % factor];
  const vertice = ([y, x]) => y * factor + x;
  const val = (v) => { const [y, x] = cell(v); return grid[y][x] };
  return { neighbors, val, vertice };
};

module.exports = shortestPathBinaryMatrix;
