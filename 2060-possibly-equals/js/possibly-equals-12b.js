const possiblyEquals = (s1, s2) => {
  vt([], transform(s1));
  vt([], transform(s2));
  // console.log({ i });
  return false;
};

let i = 0;
const log = s => ++i;

const vt = (r, [s, ...t]) => {
  vs(r, s);
  if (t.length > 0) {
    vt(r, t);
  }
};

const vs = (r, [n, s, t]) => {
  if (t.length == 0) {
    // log([...r, [n, s]]);
    return;
  }
  vt([...r, [n, s]], t);
};

const transform = str => {
  const iter = (i) => {
    const xs = [];
    for ( ; i < str.length && isDigit(str[i].charCodeAt(0)); ++i) { xs.push(Number(str[i])) }
    const b = i;
    for ( ; i < str.length && !isDigit(str[i].charCodeAt(0)); ++i) {}
    const ns = numbers(xs);
    const s = b < i ? str.substring(b, i) : '.';
    const r = i < str.length ? iter(i) : [];
    return ns.map(n => [n, s, r]);
  }
  return iter(0);
};

const isDigit = x => 49 <= x && x <= 57;

const numbers = ([i, j, k]) => {
  if (i && j && k) return [...new Set([
    i + j + k,
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])];
  if (i && j) return [i + j, i * 10 + j];
  if (i) return [i];
  return [0];
};


module.exports = { possiblyEquals };


// const test = 'a12b12c';
// vt([], transform(test));


// const test = 'internationalization';
// const test = '248d222d714d496d618d882d561d275d824d234';
// const test = 'v816u32v813u84v4v12u393v877';
// const test = 'l123e';
// const test = '44';
// const test = '123e';
// const test = '23e';
// const test = '23'; 
// const test = 'a123b123c123d123e123f123g123h123i123j';
// const test = 'a12b';
// const test = 'a12b34c';
// const test = 'a111b12c';
// const test = '111b12c';
// console.dir([test, transform(test)], { depth: 10 });

// const test = ['l123e', '44'];
// const test = '44';
// console.dir(test.map(str => [str, transform(str)]), { depth: 10 });
// vt([0, []], transform(test));

// possiblyEquals(...test);
// possiblyEquals('v816u32v813u84v4v12u393v877', '586v993u497u836u9v59v83u34v8');
// possiblyEquals('248d222d714d496d618d882d561d275d824d234', 'd677d992d986d292d595d744d187d528d999d');
