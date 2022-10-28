class IndexedHeap {
  constructor(order) {
    this.order = order;
    this.xs = [];
    this.ki = new Map;
  }
  empty() { return this.xs.length == 0 }
  has(k) { return this.ki.has(k) }
  enqueue([k, v]) {
    this.insert(k, v);
  }
  insert(k, v) {
    const i = this.ki.get(k) ?? this.xs.length;
    if (i < this.xs.length) { 
      this.xs[i][1] = v;
      this.sink(this.bubble(i));

    } else {
      this.xs.push([k, v]);
      this.ki.set(k, i);
      this.bubble(i);
    }
  }
  dequeue() {
    if (!this.xs.length) { return }
    this.swap(0, this.xs.length - 1);
    const x  = this.xs.pop();
    this.sink(0);
    this.ki.delete(x[0]);
    return x;
  }
  swap(i, j) { 
    this.ki.set(this.xs[i][0], j); this.ki.set(this.xs[j][0], i); 
    const t = this.xs[i]; this.xs[i] = this.xs[j]; this.xs[j] = t;
  }

  bubble(i) {
    for (let p = this.parent(i); this.order(this.xs[i][1], this.xs[p][1]) < 0; i = p, p = this.parent(i)) {
      this.swap(i, p);
    }
  }
  sink(i) {
    for (; ;) {
      let m = i;
      const l = this.left(i);
      if (l < this.xs.length && this.order(this.xs[l][1], this.xs[m][1]) < 0) { m = l }
      const r = this.right(i);
      if (r < this.xs.length && this.order(this.xs[r][1], this.xs[m][1]) < 0) { m = r }
      if (m === i) { break }
      this.swap(m, i);
      i = m;
    }
  }
  parent(i) { return (i - 1) / 2 | 0 }
  left(i) { return (2 * i) + 1 }
  right(i) { return (2 * i) + 2 }
}

module.exports = IndexedHeap;

if (require.main === module) {
  require('./test-indexed-heap')(module.exports, Number.parseInt(process.argv[2]));
}
