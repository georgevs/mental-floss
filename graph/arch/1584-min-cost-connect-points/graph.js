class Graph {
  constructor({ vertices, edges }) {
    this.vertices = vertices;
    this.edges = edges;
    this.neighbors = new Map(this.vertices.map(v => [v, []]));
    edges.forEach(e => {
      this.neighbors.get(e[0]).push(e);
      this.neighbors.get(e[1]).push(e);
    });
  }
}

module.exports = Graph;
