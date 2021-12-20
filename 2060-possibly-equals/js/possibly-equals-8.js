const possiblyEquals = (s1, s2) => {
  const len = Math.min(s1.length, s2.length);
  for (let i = 0; i < len; ++i) {
    const ch1 = s1[i];
    if (isDigit(ch1)) {
      const xs = tails(s1, i);
      if (xs.length > 0) {
        const ss2 = s2.substring(i);
        for (const ss1 of xs) {
          if (possiblyEquals(ss1, ss2)) return true;
        }
      }
      return false;
    }
    const ch2 = s2[i];
    if (isDigit(ch2)) {
      const xs = tails(s2, i);
      if (xs.length > 0) {
        const ss1 = s1.substring(i);
        for (const ss2 of xs) {
          if (possiblyEquals(ss1, ss2)) return true;
        }
      }
      return false;
    }
    if (ch1 !== '*' && ch2 !== '*' && ch1 !== ch2) return false; 
  }
  return s1.length === s2.length;
};

const tails = (s, i) => {
  const ns = [];
  for ( ; i < s.length && isDigit(s[i]); ++i) { ns.push(Number(s[i])) }
  const ss = s.substring(i);
  return numbers(ns).map(n => '*'.repeat(n) + ss);
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
