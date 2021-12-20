const possiblyEquals = (s1, s2) => eqt(transform(s1 + '.'), transform(s2 + '.'));

const transform = str => {
  const iter = (i) => {
    const b = i;
    for ( ; i < str.length && !isDigit(str[i].charCodeAt(0)); ++i) {}
    const s = str.substring(b, i);
    const xs = [];
    for ( ; i < str.length && isDigit(str[i].charCodeAt(0)); ++i) { xs.push(Number(str[i])) }
    const ns = numbers(xs);
    const r = i < str.length ? iter(i) : [];
    return strings(s, ns, r);
  }
  return iter(0);
};

const isDigit = x => 49 <= x && x <= 57;

const numbers = ([i, j, k]) => {
  if (i && j && k) return [...new Set([
    i + j + k,
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])].sort((i, j) => i - j);
  if (i && j) return [i + j, i * 10 + j];
  if (i) return [i];
  return [];
};

const strings = (s, ns, r) => {
  if (ns.length == 0) return [s, []];
  const iter = (h, n, i) => {
    const ss = i > 0 ? stars(n - ns[i - 1]) : s + stars(n);
    const t = h ? [r, h] : [r];
    return [ss, t];
  };
  return ns.reduceRight(iter, null);
};

const stars = String.prototype.repeat.bind('*');

const eqc = s => (c, i) => c === '*' || s[i] === '*' || c === s[i];

const [lt, eq, gt] = ['lt', 'eq', 'gt'].map(Symbol);

const eqs = (s1, s2) => 
  s1.length < s2.length ? (Array.from(s1).every(eqc(s2)) ? [lt, s2.substring(s1.length)] : []) :
  s1.length > s2.length ? (Array.from(s2).every(eqc(s1)) ? [gt, s1.substring(s2.length)] : []) :
                          (Array.from(s2).every(eqc(s1)) ? [eq] : []);

// const eqt = ([s1, [l1, r1]], [s2, [l2, r2]]) => (
//   ([d, s]) => 
//     d === lt ? (r => eqt(l1, r) || (r1 && eqt(r1, r)))([s, [l2, r2]]) :
//     d === gt ? (r => eqt(r, l2) || (r2 && eqt(r, r2)))([s, [l1, r1]]) :
//     d === eq ? l1 == l2 || eqt(l1, l2) || (r2 && eqt(l1, r2)) || (r1 && eqt(r1, l2)) || (r1 && r2 && eqt(r1, r2)) :
//     false
// )(eqs(s1, s2));

const eqt = (t1, t2) => {
  const [s1, [l1, r1]] = t1;
  const [s2, [l2, r2]] = t2;
  const [d, s] = eqs(s1, s2);
  // console.log(s1, s2, d);
  if (d === lt && l1) {
    const r = [s, [l2, r2]];
    return eqt(l1, r) || (r1 && eqt(r1, r));
  }
  else if (d === gt && l2) {
    const r = [s, [l1, r1]];
    return eqt(r, l2) || (r2 && eqt(r, r2));
  }
  else if (d === eq) {
    return l1 === l2 || eqt(l1, l2) || (r2 && eqt(l1, r2)) || (r1 && eqt(r1, l2)) || (r1 && r2 && eqt(r1, r2));
  }
  return false;
};


module.exports = { possiblyEquals };

const assert = (e, r) => console.assert(e === r, `expected: ${e}, result: ${r}`);

// assert(true, possiblyEquals('l123e.', '44.'));
// assert(true, possiblyEquals('internationalization', 'i18n'));
// assert(false, possiblyEquals('a5b', 'c5b'));
// assert(true, possiblyEquals('112s', 'g841'));
assert(false, possiblyEquals('v816u32v813u84v4v12u393v877', '586v993u497u836u9v59v83u34v8'));

// console.dir(eqs('abc', 'abc'));
// console.dir(eqs('abc', 'abc123'));
// console.dir(eqs('abc123', 'abc'));
// console.dir(eqs('abcd', 'ab1d'));
// console.dir(eqs('ab*d', 'ab1d'));
// console.dir(eqs('abcd', 'ab*d'));
// console.dir(eqs('abcd', 'ab*d123'));
// console.dir(eqs('ab*d', 'abcd123'));
// console.dir(eqs('abcd123', 'ab*d'));

// console.dir(strings('a', [6, 15, 24, 123], ['.', [], []]), { depth: 10 });
// console.dir(strings('a', [], ['.', [], []]), { depth: 10 });

// console.dir(transform('a12b34e'), { depth: 10 });
// console.dir(transform('12b34e'), { depth: 10 });
// console.dir(transform('a12b34'), { depth: 10 });
