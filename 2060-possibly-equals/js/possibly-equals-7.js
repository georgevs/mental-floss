const possiblyEquals = (s1, s2) => {
  transform(s1);
};

const compare = (lhs, rhs) => lhs.length === rhs.length && Array.from(lhs).every((x, i) => x === '*' || rhs.charAt(i) === '*' || x === rhs.charAt(i));

const partition = xs => {
  const iter = (m, s) => {
    const l = m.get(s.length);
    if (l) { l.push(s) } 
    else { m.set(s.length, [s]) }
    return m;
  };
  return xs.reduce(iter, new Map());
};

const strings = ({ s, ns, rs }) => {
  const rss = rs ? strings(rs) : [''];
  const nss = ns.length > 0 ? ns.map(n => s + '*'.repeat(n)) : [s];
  return nss.flatMap(h => rss.map(t => h + t));
};

const transform = str => {
  const init = (ch) => 
    isDigit(ch) ? { next: digit, state: { r: [], s: '', ns: [Number(ch)] } }
    : { next: alpha, state: { r: [], s: ch } };
  const digit = ({ r, s, ns }, ch) => 
    isDigit(ch) ? { next: digit, state: { r, s, ns: [...ns, Number(ch) ] } }
    : { next: alpha, state: { r: [...r, { s, ns: numbers(ns) }], s: ch } };
  const alpha = ({ r, s }, ch) =>
    isDigit(ch) ? { next: digit, state: { r, s, ns: [Number(ch)] } }
    : { next: alpha, state: { r, s: s + ch } };
  const finalize = ({ r, s, ns = [] }) => {
    return [...r, { s, ns: numbers(ns) }];
  };
  const { state } = Array.from(str).reduce(({ next, state }, ch) => next(state, ch), { next: init });
  return finalize(state);
};

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

// const transform = transform1;
// const transform = transform2;
// const transform = transform3;
// const transform = transform3a;
// const transform = transform3b;
// const transform = transform4;
// const transform = transform4a;
// const transform = transform4b;

const test = '248d222d714d496d618d882d561d275d824d234';
// const test = 'v816u32v813u84v4v12u393v877';
// const test = 'l123e';
// const test = '123e';
// const test = '23e';
// const test = '23';
console.log(transform(test));
// console.log(transform(test));
// console.log(lengths(transform(test)).reduce((m, l) => m.set(l, (m.get(l) ?? 0) + 1), new Map()));
// console.log(strings(transform(test)));
// console.log(partition(strings(transform(test))));


// console.log(transform('v816u32v813u84v4v12u393v877'));
// console.log(transform('586v993u497u836u9v59v83u34v8'));
// console.log(strings(transform('586v993u497u836u9v59v83u34v8')));
// console.log(transform('internationalization'));
// console.log(transform('l123e'));
// console.log(transform('a5b'));
// console.log(transform('112s'));
// console.log(transform('ab'));
