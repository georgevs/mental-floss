const findOrder = (n, xs) => {
  const g = new Graph(n, xs);
  return dfs(g);
};

// (Graph g, Vertex v) => g -> [v]
const dfs = (g) => {
  const rs = [];
  const cs = Array(g.vertices.length);
  const iter = v => cs[v] !== 1 && (cs[v] === 2 || visit(v));
  const visit = (u) => { 
    cs[u] = 1;
    if (!g.neighbors[u].every(iter)) { return false }
    rs.unshift(u);
    cs[u] = 2;
    return true;
  };
  return g.vertices.every(iter) ? rs : [];
};

class Graph {
  constructor(n, xs) {
    this.vertices = Array.from(Array(n), (_, i)=> i);
    this.edges = xs;
    this.neighbors = this.vertices.map(() => []);
    xs.forEach(e => { this.neighbors[e[1]].push(e[0]) });
  }
}

module.exports = findOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
