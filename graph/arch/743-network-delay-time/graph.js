class Graph {
  constructor(n, xs) {
    this.vertices = Array.from(Array(n), (_, i) => i + 1);
    this.neighbors = new Map(this.vertices.map(v => [v, []]));
    this.edges = xs;
    xs.forEach(e => { this.neighbors.get(e[0]).push(e) });
  }
}

module.exports = Graph;
