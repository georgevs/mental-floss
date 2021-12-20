const possiblyEquals = (s1, s2) => {
  for (const i of strings(transform(s1))) {
    for (const j of strings(transform(s2))) {
      // console.log(i, j, compare(i, j));
      if (compare(i, j)) return true;
    }
  }
  return false;
};

const transform = xs => {
  // const isChar = x => 'abcdefghijklmnopqrstuvwxyz'.includes(x);
  const isNumber = x => '123456789'.includes(x);
  const iter = ({ r, i: { s, n } }, x) => {
    if (isNumber(x)) {
      const d = Number(x);
      return {
        r: s ? [...r, { s }] : r,
        i: { n: (n ?? 0) * 10 + d }
      };

    } else {  // isChar(x)
      return {
        r: n ? [...r, { n }] : r,
        i: { s: (s ?? '') + x }
      };
    }
  };
  const { r, i } = Array.from(xs).reduce(iter, { r: [], i: {} });
  return [...r, i];
}

const stars = n => {
  const [i, j, k] = Array.from((1000 + n).toString().substring(1)).map(Number);
  return Array.from(new Set([
    '*'.repeat(i) + '*'.repeat(j) + '*'.repeat(k),
    '*'.repeat(i) + '*'.repeat(j * 10 + k),
    '*'.repeat(i * 10 + j) + '*'.repeat(k),
    '*'.repeat(i * 100 + j * 10 + k)
  ]));
};

const strings = function* ([x, ...xs]) {
  const iter = function* ({ s, n }) {
    if (s) {
      yield s;
    } else { // n
      for (const i of stars(n)) {
        yield i;
      }
    }
  };
  if (xs.length === 0) {
    for (const s of iter(x)) {
      yield s;
    }
  } else {
    for (const i of strings(xs)) {
      for (const s of iter(x)) {
        yield s + i;
      }
    }
  }
};

const compare = (lhs, rhs) => lhs.length === rhs.length && Array.from(lhs).every((x, i) => x === '*' || rhs.charAt(i) === '*' || x === rhs.charAt(i));

module.exports = { possiblyEquals };
