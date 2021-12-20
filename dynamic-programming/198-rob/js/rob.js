const memoize = (m, f) => (x) => m.get(x) ?? m.set(x, f(x));
const map = (i) => { const m = new Map(i); return { get: (x) => m.get(x), set: (k, x) => (m.set(k, x), x) } };
const rob = (ns) => {
  const dp = memoize(map(), (i) => i < ns.length ? ns[i] + Math.max(dp(i + 2), dp(i + 3)) : 0);
  return Math.max(dp(0), dp(1));
};

console.assert(rob([1,2,3,1]) === 4);
console.assert(rob([2,7,9,3,1]) === 12);
