// 2 <= n <= 10^5
// n - 1 <= connections.length <= 10^5
// 0 <= ai, bi <= n - 1
// ai != bi
// There are no repeated connections.

const bridges = require('./bridges-1');
const graph = require('./graph-1');

const criticalConnections = (n, xs) => bridges(graph(n, xs));

module.exports = criticalConnections;

if (require.main === module) {
  require('./test')({ criticalConnections }, Number(process.argv[2]) || 1);
}
