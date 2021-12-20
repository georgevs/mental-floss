const possiblyEquals = (s1, s2) => {
  const r = eq(s1, 0, s2, 0);
  return r;
};

// const m = new Map();
const m = new Set();

const eq = (s1, i1, s2, i2) => {
  const k = s1.substring(i1) + ' <-> ' + s2.substring(i2);
  if (m.has(k)) return false;
  const r = eq_(s1, i1, s2, i2);
  m.add(k);
  return r;
};

const eq_ = (s1, i1, s2, i2) => {
  const len = Math.min(s1.length - i1, s2.length - i2);
  for (let i = 0; i < len; ++i) {
    const ch1 = s1[i1 + i];
    if (isDigit(ch1)) {
      for (const ss1 of tails(s1, i1 + i)) {
        if (eq(ss1, 0, s2, i2 + i)) return true;
      }
      return false;
    }
    const ch2 = s2[i2 + i];
    if (isDigit(ch2)) {
      for (const ss2 of tails(s2, i2 + i)) {
        if (eq(s1, i1 + i, ss2, 0)) return true;
      }
      return false;
    }
    if (ch1 !== '*' && ch2 !== '*' && ch1 !== ch2) return false; 
  }
  return s1.length - i1 === s2.length - i2;
};

const tails = function* (s, i) {
  const ns = [];
  for ( ; i < s.length && isDigit(s[i]); ++i) { ns.push(Number(s[i])) }
  const ss = s.substring(i);
  for (const n of numbers(ns)) {
    yield '*'.repeat(n) + ss;
  }
}

const isDigit = x => '123456789'.includes(x);

const numbers = ns => {
  if (ns.length === 0) return ns;
  const [i, j, k] = [0, 0].concat(ns).slice(-3);
  return Array.from(new Set([
    i + j + k, 
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])).sort((i, j) => i - j);
};

module.exports = { possiblyEquals };

// console.log(tails('a12bc', 1));

// console.log(possiblyEquals('abc', 'abc'));
// console.log(possiblyEquals('abc', 'adc'));
// console.log(possiblyEquals('abc', 'a1c'));
// console.log(possiblyEquals('abc', 'a2c'));
