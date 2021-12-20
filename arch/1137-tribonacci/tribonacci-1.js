const memoize = (m, f) => x => m.get(x) ?? m.set(x, f(x));
const map = (i) => {
  const m = new Map(i);
  return {
    get: (x) => m.get(x),
    set: (x, y) => (m.set(x, y), y)
  }
};

const tribonacci = memoize(
  map([[0, 0], [1, 1], [2, 1]]),
  (x) => tribonacci(x - 3) + tribonacci(x - 2) + tribonacci(x - 1)
);

const assert = (e, r) => console.assert(e === r, `expected: ${e}, result: ${r}`);

assert(4, tribonacci(4));
assert(1389537, tribonacci(25));
   