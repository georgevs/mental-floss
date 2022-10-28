class UnionFind {
  constructor(vertices) {
    this.rs = new Map(vertices.map(v => [v, v]));
    this.hs = new Map(vertices.map(v => [v, 0]));
  }
  find(v) { 
    let r = this.rs.get(v);
    while (v != r) { v = r; r = this.rs.get(v) }
    return r;
  }
  connect(v1, v2) { 
    const r1 = this.find(v1), r2 = this.find(v2);
    if (r1 === r2) { return false }
    const h1 = this.hs.get(r1), h2 = this.hs.get(r2);
    if (h1 < h2) { this.rs.set(r1, r2) }
    else if (h2 < h1) { this.rs.set(r2, r1) }
    else { this.rs.set(r1, r2); this.hs.set(r2, h2 + 1) }
    return true;
  }
}

module.exports = UnionFind;
