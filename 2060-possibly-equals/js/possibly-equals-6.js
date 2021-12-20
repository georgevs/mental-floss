const possiblyEquals = (lhs, rhs) => {
  const t1 = transform(lhs);
  // const s1 = strings(t1);
  // const m1 = partition(s1);

  // const t2 = transform(rhs);
  // const s2 = strings(t2);
  // const m2 = partition(s2);
};

// const possiblyEquals = (s1, s2) => {
//   const m1 = partition(strings(transform(s1)));
//   const m2 = partition(strings(transform(s2)));
//   for (const [i, l1] of m1) {
//     const l2 = m2.get(i);
//     if (l2) {
//       for (const x of l1) {
//         for (const y of l2) {
//           if (compare(x, y)) return true;
//         }
//       }
//     }
//   }
//   return false;
// };

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

// const transform1 = str => {
//   const iter = (str, i) => {
//     let b = i;
//     for ( ; i < str.length && !isDigit(str[i]); ++i) {}
//     const s = str.substring(b, i);
//     const ns = [];
//     for ( ; i < str.length && isDigit(str[i]); ++i) {
//       ns.push(Number(str[i])); 
//     }
//     const rs = i < str.length ? iter(str, i) : undefined;
//     return { s, ns: numbers(ns), rs };
//   };
//   return iter(str, 0);
// };

const transform1 = str => {
  const iter = (str, i) => {
    let b = i;
    for ( ; i < str.length && !isDigit(str[i]); ++i) {}
    const s = str.substring(b, i);
    const ns = [];
    for ( ; i < str.length && isDigit(str[i]); ++i) {
      ns.push(Number(str[i])); 
    }
    const rs = i < str.length ? iter(str, i) : [];
    return [{ s, ns: numbers(ns) }, ...rs ];
  };
  return iter(str, 0);
};

const transform2 = str => {
  const iter = ({ r, s, ns }, ch) => {
    if (isDigit(ch)) return { r, s, ns: (ns || []).concat(Number(ch)) };
    if (ns) return { r: [...r, { s, ns: numbers(ns) }], s: ch };
    return { r, s: (s || '').concat(ch) };
  };
  const { r, s, ns } = Array.from(str).reduce(iter, { r: [] });
  return [...r, { s, ns: numbers(ns || []) }];
};

const transform3 = str => {
  const iter = (acc, ch, i) => {
    if (isDigit(ch)) { 
      if (acc.ni === undefined) acc.ni = i;
    }
    else if (acc.ni !== undefined) {
      acc.r.push({ 
        s: str.substring(acc.si, acc.ni),
        ns: numbers(Array.from(str.substring(acc.ni, i)).map(Number))
      });
      acc.si = i;
      delete acc.ni;
    }
    else {
      if (acc.si === undefined) acc.si = i;
    }
    return acc;
  };
  const acc = Array.from(str).reduce(iter, { r: [] });
  acc.r.push({
    s: str.substring(acc.si, acc.ni),
    ns: acc.ni !== undefined ? numbers(Array.from(str.substring(acc.ni)).map(Number)) : []
  });
  return acc.r;
};

const transform3a = str => {
  const node = (si, ni, i) => ({
    s: str.substring(si, ni),
    ns: ni !== undefined ? numbers(Array.from(str.substring(ni, i)).map(Number)) : []
  });
  const iter = (acc, ch, i) => {
    if (isDigit(ch)) { 
      if (acc.ni === undefined) acc.ni = i;
    }
    else if (acc.ni !== undefined) {
      acc.r.push(node(acc.si, acc.ni, i));
      acc.si = i;
      delete acc.ni;
    }
    else {
      if (acc.si === undefined) acc.si = i;
    }
    return acc;
  };
  const acc = Array.from(str).reduce(iter, { r: [] });
  acc.r.push(node(acc.si, acc.ni));
  return acc.r;
};

const transform3b = str => {
  const node = (si, ni, i) => ({
    s: str.substring(si, ni),
    ns: ni !== undefined ? numbers(Array.from(str.substring(ni, i)).map(Number)) : []
  });
  const iter = ({ r, si, ni }, ch, i) => {
    if (isDigit(ch)) { 
      return { r, si, ni: ni ?? i };
    }
    else if (ni !== undefined) {
      return { r: [...r, node(si, ni, i)], si: i };
    }
    else {
      return { r, si: si ?? i };
    }
  };
  const { r, si, ni } = Array.from(str).reduce(iter, { r: [] });
  return [...r, node(si, ni)];
};

const transform4 = str => {
  const init = (ch) => {
    if (isDigit(ch)) return { next: digit, state: { r: [], s: '', ns: [Number(ch)] } };
    return { next: alpha, state: { r: [], s: ch } };
  };
  const digit = (ch, { r, s, ns }) => {
    if (isDigit(ch)) return { next: digit, state: { r, s, ns: [...ns, Number(ch) ] } };
    return { next: alpha, state: { r: [...r, { s, ns: numbers(ns) }], s: ch } };
  };
  const alpha = (ch, { r, s }) => {
    if (isDigit(ch)) return { next: digit, state: { r, s, ns: [Number(ch)] } };
    return { next: alpha, state: { r, s: s + ch } };
  };
  const finalize = ({ r, s, ns = [] }) => {
    return [...r, { s, ns: numbers(ns) }];
  };
  const { state } = Array.from(str).reduce(({ next, state }, ch) => next(ch, state), { next: init });
  return finalize(state);
};

const transform4a = str => {
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

const transform4b = str => {
  const init = (ch) => {
    if (isDigit(ch)) return { next: digit, state: { r: [], s: '', ns: [Number(ch)] } };
    return { next: alpha, state: { r: [], s: ch } };
  };
  const digit = (state, ch) => {
    if (isDigit(ch)) {
      state.ns.push(Number(ch));
      return { next: digit, state };
    }
    const { r, s, ns } = state;
    r.push({ s, ns: numbers(ns) });
    return { next: alpha, state: { r, s: ch } };
  };
  const alpha = (state, ch) => {
    if (isDigit(ch)) {
      state.ns = [Number(ch)];
      return { next: digit, state };
    }
    state.s += ch;
    return { next: alpha, state };
  };
  const finalize = ({ r, s, ns = [] }) => {
    r.push({ s, ns: numbers(ns) });
    return r;
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
const transform = transform4b;

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
