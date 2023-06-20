class Heap {
  constructor(order) {
    this.order = order;
    this.xs = [];
  }
  empty() { return this.xs.length == 0 }
  enqueue(x) {
    this.xs.push(x);
    this.bubble(this.xs.length - 1);
  }
  dequeue() {
    if (!this.xs.length) { return }
    this.swap(0, this.xs.length - 1);
    const r  = this.xs.pop();
    this.sink(0);
    return r;
  }
  bubble(i) {
    for (let p = this.parent(i); this.order(this.xs[i], this.xs[p]) < 0; i = p, p = this.parent(i)) {
      this.swap(i, p);
    }
  }
  sink(i) {
    for (; ;) {
      let m = i;
      const l = this.left(i);
      if (l < this.xs.length && this.order(this.xs[l], this.xs[m]) < 0) { m = l }
      const r = this.right(i);
      if (r < this.xs.length && this.order(this.xs[r], this.xs[m]) < 0) { m = r }
      if (m === i) { break }
      this.swap(m, i);
      i = m;
    }
  }
  swap(i, j) { const t = this.xs[i]; this.xs[i] = this.xs[j]; this.xs[j] = t }
  parent(i) { return (i - 1) / 2 | 0 }
  left(i) { return (2 * i) + 1 }
  right(i) { return (2 * i) + 2 }
}

module.exports = Heap;

if (require.main === module) {
  require('./test-heap')(module.exports, process.argv[2]);
}
