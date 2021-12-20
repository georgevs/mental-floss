const possiblyEquals = (s1, s2) => {
  return eq(transform(s1), transform(s2));
};

const eq = (t1, t2) => {
  
  // console.log(t1, t2);

  if (t1.length == 0) return t2.length == 0;
  if (t2.length == 0) return false;
  
  const [{ ch: ch1, ns: ns1 }, ...r1] = t1;
  const [{ ch: ch2, ns: ns2 }, ...r2] = t2;
  
  if (ch1 && ch2) {
    if (ch1 !== ch2) return false;
    return eq(r1, r2);
  }

  if (ch1 && ns2) {
    for (const n of ns2) {
      if (eq(r1, n > 1 ? [{ ns: [n - 1] }].concat(r2) : r2)) return true;
    }
    return false;
  }

  if (ns1 && ch2) {
    for (const n of ns1) {
      if (eq(n > 1 ? [{ ns: [n - 1] }].concat(r1) : r1, r2)) return true;
    }
    return false;
  }
  
  for (const n1 of ns1) {
    for (const n2 of ns2) {
      if (n1 < n2) {
        if (eq(r1, [{ ns: [n2 - n1] }].concat(r2))) return true;
      } else if (n1 > n2) {
        if (eq([{ ns: [n1 - n2] }].concat(r1), r2)) return true;
      } else {
        if (eq(r1, r2)) return true;
      }
    }
  }
  return false;
};

const transform = str => {
  const start = (ch) => 
    isDigit(ch) ? ({ next: digit, state: { r: [], ns: [Number(ch)] } }) 
                : ({ next: char,  state: { r: [{ ch }] } });
  const digit = (ch, { r, ns }) => 
    isDigit(ch) ? ({ next: digit, state: { r, ns: [...ns, Number(ch) ]} })
                : ({ next: char,  state: { r: [...r, { ns: numbers(ns) }, { ch }] } });
  const char = (ch, { r }) =>
    isDigit(ch) ? ({ next: digit, state: { r, ns: [Number(ch)] } })
                : ({ next: char,  state: { r: [...r, { ch }] } });
  const finalize = ({ r, ns }) =>
    ns ? [...r, { ns: numbers(ns) }] : r;
  const { state } = Array.from(str).reduce(({ next, state }, ch) => next(ch, state), { next: start });
  return finalize(state);
};

const isDigit = ch => '123456789'.includes(ch);

const numbers = ns => {
  const [i, j, k] = [0, 0].concat(ns).slice(-3);
  return Array.from(new Set([
    i + j + k, 
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])).sort((i, j) => i - j);
};

module.exports = { possiblyEquals };

// const test = 'internationalization';
// const test = '248d222d714d496d618d882d561d275d824d234';
// const test = 'v816u32v813u84v4v12u393v877';
// const test = 'l123e';
const test = '44';
// const test = '123e';
// const test = '23e';
// const test = '23';
console.log(transform(test));
