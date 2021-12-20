const possiblyEquals = (s1, s2) => {
  (strings(transform(s1)));
  (strings(transform(s2)));
};

const transform = str => {
  const rs = [];
  let s = '', ns = [], n;
  for (const ch of Array.from(str)) {
    if (isNumber(ch)) {
      n = Number(ch);
      ns.push(n);
    } else {
      if (n) { rs.push({ s, ns: numbers(ns) }); s = ''; ns = []; n = undefined; }
      s += ch;
    }
  }
  rs.push({ s, ns: numbers(ns) });
  return rs;
};

// const isChar = x => 'abcdefghijklmnopqrstuvwxyz'.includes(x);
const isNumber = x => '123456789'.includes(x);

const numbers = ns => {
  const [i, j, k] = [0, 0].concat(ns).slice(-3);
  return Array.from(new Set([
    i + j + k, 
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])).sort((i, j) => i - j);
};

// const strings = ([r, ...rs]) => {
//   const iter = ({ s, ns }) => ns.length > 0 ? ns.map(n => ({ s, n })) : [{ s, n: 0 }];
//   const xs = rs.length > 0 ? strings(rs) : [];
//   return iter(r).map(({ s, n }) => ({ s, n, rs: xs }));
// };

const strings = ([{ s, ns }, ...rs]) => {
  const xs = rs.length > 0 ? strings(rs) : [];
  return ({ s, ns: ns.map(n => ({ n, rs: xs })) });
};

module.exports = { possiblyEquals };

// console.log(transform('v816u32v813u84v4v12u393v877'));
// console.log(transform('586v993u497u836u9v59v83u34v8'));
// console.log(strings(transform('586v993u497u836u9v59v83u34v8')));
// console.log(transform('internationalization'));
// console.log(transform('l123e'));
// console.log(transform('a5b'));
// console.log(transform('112s'));
// console.log(transform('ab'));
