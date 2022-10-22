
const orangesRotting = ({ graph, bfs }) => (xs) => {
  const g = graph(xs);
  if (g.neighbors.length == 0) { return g.vertices.length > 1 ? -1 : 0 }

  let r, ns = 0;
  bfs(l => { r = l; ++ns }, g);
  return ns === g.vertices.length ? r - 1 : -1;
};

module.exports = orangesRotting;

if (require.main === module) {
  require('./test-oranges-rotting')(orangesRotting(require(process.argv[3] || './graph-2')), process.argv[2]);
}
