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
    r += v.l[v.i++];
  }
  return r;
});


const reduce = (fn, acc) => (s) => { for (let i = 0; i < s.length; ++i) acc = fn(acc, s[i], i); return acc };

const union = (n) => {
  const rs = Array.from(Array(n), (_, i) => i);
  const connect = ([v1, v2]) => {
    const r1 = rs[v1], r2 = rs[v2];
    if (r1 != r2) { rs.forEach((r, i) => r == r2 && (rs[i] = r1)) }
  };
  return { connect, rs };
};

module.exports = smallestStringWithSwaps;
