// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

// const { log, logf } = require('./log');
const { log, logf } = { log: () => void 0, logf: (_, fn) => fn };

const shortestPathBinaryMatrix = logf('s', (grid) => {
  const g = graph(grid);
  const n = grid.length;
  const v1 = g.vertice(0, 0);
  const v2 = g.vertice(n - 1, n - 1);
  const { length } = bfs(g, v1, v2) ?? {};
  return length ?? -1;
});

const bfs = logf('b', (g, v1, v2) => {
  if (g.val(v1) !== 0 || g.val(v2) !== 0) { return }
  const q = [[v1]];
  while (q.length > 0) {
    const p = q.shift();
    const v = p[p.length - 1];
    if (v === v2) { return (log('p', p), p) }
    const visited = Set.prototype.has.bind(new Set(p));
    const ps = g.neighbors(v)
      .filter(v => !visited(v))
      .map(v => [...p, v]);
    q.push(...ps);
  }
});

const graph = (grid) => {
  const n = grid.length;
  const g = new Map;

  const neighbors = g.get.bind(g);
  const factor = n;
  const cell = (v) => [(v / factor) | 0, v % factor];
  const vertice = (y, x) => y * factor + x;
  const val = (v) => { const [y, x] = cell(v); return grid[y][x] };
  
  for (let y = 0; y < n; ++y) {
    for (let x = 0; x < n; ++x) {
      if (grid[y][x] === 0) {
        const t = y - 1, b = y + 1, l = x - 1, r = x + 1;
        const vs = [[t, l], [t, x], [t, r], [y, l], [y, r], [b, l], [b, x], [b, r]]
          .filter(([y, x]) => 0 <= y && y < n && 0 <= x && x < n && grid[y][x] === 0)
          .map(([y, x]) => vertice(y, x));
        g.set(vertice(y, x), vs);
      }
    }
  }

  return { neighbors, val, vertice, g };
};

module.exports = shortestPathBinaryMatrix;
