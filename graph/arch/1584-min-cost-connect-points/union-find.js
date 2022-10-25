class UnionFind {
  constructor(n) {
    this.rs = Array.from(Array(n), (_, i) => i);
    this.hs = Array(n).fill(0);
  }
  find(i) { 
    let r = this.rs[i]; 
    while (i != r) { i = r; r = this.rs[i] }
    return r;
  }
  connect(i, j) { 
    const ri = this.find(i), rj = this.find(j);
    if (ri == rj) { return false }
    const hi = this.hs[ri], hj = this.hs[rj];
    if (hi < hj) { this.rs[ri] = rj }
    else if (hj < hi) { this.rs[rj] = ri }
    else { this.rs[ri] = rj; ++this.hs[rj] }
    return true;
  }
}

module.exports = UnionFind;
