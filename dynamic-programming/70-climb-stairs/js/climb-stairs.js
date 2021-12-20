const memoize = (m, f) => x => m.get(x) ?? m.set(x, f(x));
const map = i => {
  const m = new Map(i);
  return { get: x => m.get(x), set: (k, x) => (m.set(k, x), x) }
};
const climbStairs = memoize(
  map([[1, 1], [2, 2]]), 
  n => climbStairs(n - 1) + climbStairs(n - 2)
);
