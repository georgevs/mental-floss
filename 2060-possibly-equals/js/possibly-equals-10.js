const possiblyEquals = (s1, s2) => {
  const q = [[transform(s1 + '.'), transform(s2 + '.')]];
  while (q.length > 0) {
    const [l1, l2] = q.shift();
    if (eq(l1, l2, q)) return true;
  }
  return false;
};

const eq = ([{ ch: ch1, ns: ns1 }, ...r1], [{ ch: ch2, ns: ns2 }, ...r2], q) => {
  if (ch1 === '.' && ch2 === '.') return true;

  if (ch1 && ch2) {
    if (ch1 == ch2) q.unshift([r1, r2]);
    return false;
  } 

  if (ch1 === '.' || ch2 === '.') return false;

  if (ch1 && ns2) {
    const ns = dec(ns2, 1);
    q.unshift([r1, ns.length > 0 ? [{ ns }].concat(r2) : r2]);
    return false;
  }

  if (ns1 && ch2) {
    const ns = dec(ns1, 1);
    q.unshift([ns.length > 0 ? [{ ns }].concat(r1) : r1, r2]);
    return false;
  }

  const s = new Set();
  for (const n1 of ns1) {
    for (const n2 of ns2) {
      s.add(n1 - n2);
    }
  }
  const ns = Array.from(s).sort((n1, n2) => Math.abs(n2) - Math.abs(n1));
  for (const n of ns) {
    if (n > 0) { q.unshift([[{ ns: [n] }].concat(r1), r2]) }
    else if (n < 0) { q.unshift([r1, [{ ns: [-n] }].concat(r2)]) }
    else { q.unshift([r1, r2]) }
  }
  return false;
};

const dec = (ns, d) => ns.reduce((acc, n) => { if (n > d) acc.unshift(n - d); return acc }, []);

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
// const test = '44';
// const test = '123e';
// const test = '23e';
// const test = '23';
// console.log(transform(test));

// possiblyEquals('l123e', '44');
// possiblyEquals('v816u32v813u84v4v12u393v877', '586v993u497u836u9v59v83u34v8');
