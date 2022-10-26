const Heap = require('./heap');

class IndexedHeap extends Heap {
  constructor(order) {
    super(([, lhs], [, rhs]) => order(lhs, rhs));
    this.ki = new Map;
  }
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
    const x = super.dequeue();
    if (x) { this.ki.delete(x[0]) }
    return x;
  }
  swap(i, j) { 
    this.ki.set(this.xs[i][0], j); this.ki.set(this.xs[j][0], i); 
    super.swap(i, j);
  }
}

module.exports = IndexedHeap;

if (require.main === module) {
  require('./test-indexed-heap')(module.exports, Number.parseInt(process.argv[2]));
}
