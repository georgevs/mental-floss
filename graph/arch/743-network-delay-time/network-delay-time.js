const Graph = require('./graph');

const networkDelayTime = (shortestPaths) => (xs, n, k) => {
  const g = new Graph(n, xs);
  // console.log(k, g);
  
  const [ws, ps] = shortestPaths(g, k);
  // console.log(ws, ps);

  const r = Math.max(...ws.values());
  return r !== Infinity ? r : -1;
};

module.exports = networkDelayTime;
