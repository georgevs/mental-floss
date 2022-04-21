// 1 <= s.length <= 10^5
// 0 <= pairs.length <= 10^5
// 0 <= pairs[i][0], pairs[i][1] < s.length
// s only contains lower case English letters.

const logff = (log) => (p, fn) => p ? (...args) => (log(p, ...args), fn(...args)) : fn;
const logf = false ? logff(console.log.bind(console)) : (_, fn) => fn;

const smallestStringWithSwaps = logf('ssws', (s, xs) => {
  const n = s.length;
  const u = union(n);
  xs.forEach(u.connect);
  u.compress();

  const add = (m, c, i) => {
    const r = u.rs[i];
    let v = m.get(r) ?? (m.set(r, { i: 0, l: [] }), m.get(r));
    v.l.push(c);
    return m;
  };
  const m = reduce(add, new Map)(s);
  m.forEach(v => v.l.sort());

  let r = '';
  for (let i = 0; i < s.length; ++i) {
    const v = m.get(u.rs[i]);
    r += v.l.shift();
  }
  return r;
});


const reduce = (fn, acc) => (s) => { for (let i = 0; i < s.length; ++i) acc = fn(acc, s[i], i); return acc };

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const hs = Array(n).fill(1);
  const find = (v) => {
    while (v != rs[v]) { v = rs[v] }
    return rs[v];
  };
  const compress = () => rs.forEach((r, i) => rs[i] = find(r));
  const connect = ([v1, v2]) => {
    const r1 = find(v1), r2 = find(v2);
    if (r1 != r2) {
      const h1 = hs[r1], h2 = hs[r2];
      if (h1 < h2) { rs[r1] = r2 }
      else if (h2 < h1) { rs[r2] = r1 }
      else { rs[r1] = r2; ++hs[r2] }
    }
  };
  return { connect, compress, rs };
};

module.exports = smallestStringWithSwaps;
